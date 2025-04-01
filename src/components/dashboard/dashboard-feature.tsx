/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2LNXy418ksbHYpF3iztiJbyXv6gd6y1dGpknXXgwbDTAZcYQSAo4GsUrgQu96cXVZe6a3eHGfp1otqSNSHJj49F6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BH9bEctZsb1Hu7nfv3PGSrHoJbve6BsC5pG8rTbuhxr7doLqbpgcDoMF5ZMbvw9rgHPc5Dz8CRNZWbbTLxcSNA",
  "key1": "5qbGvYQsPpDxr8GzNYkk8xFtbNL7F7KdnPZKNbcKSaTefwjcyHVGBqMKciAGCpvuWnUyEoowXERnm8EmabHCUvcr",
  "key2": "2rVoiqBPTdCJz4KcM2x6vBSxoTmfUP7NJccWvBKzA8aYgfcaJKy7fgg5aj34jeKvLBzVyTWyXCgZWQ76frx8JV36",
  "key3": "55Pb5wRjrnoBtRTjFD6YmaxXvJJrqMDfVhUx73iKM4KAYSopAoR646pFgTpHPeECrxzfApDBgdJaMFEVrHkmMUSz",
  "key4": "38aVFiNJxBHu38oHwtUT5Drazum8roCKUVVGw8YyUxJ5CCCY6GDTHoUy4Fsnn6xYMa7ZxafY38EfDYmefCQxMw2k",
  "key5": "25s1jKq5QWnNcMPFFG33DyThBswBKDfgqpAMinXs2XGZW3jnYt1shc9g4GVTvmBphgPS71WK4L8JGzYZKpTpvvyo",
  "key6": "qsicTQPi9HAnqBoPp9xxX8XHB1ruR6FAH7hiCQp3PvTEofqKyGZsdwJNdoSdPBgpAGM1F85qzV3nz3jeha82Kvk",
  "key7": "7AfqugnYtz7yUR8b9zPkUS8W8EajhMtCzgfPs6NvZUYtVDpaLwHpXLWDj98Ye93VeTudcL1MpRxURLfirdsUssA",
  "key8": "eC9a6ofFKVLaJpEYiwu6C4hnGzotYDmeBQB6w59xJrGF5fzPo5T14XKcKhma5GRZbwMeL6B5QeFBRd4KnMKG6sC",
  "key9": "43W6uSn86qJUmRqX73YnrdKwu8a4KQHkbPCxZSznKhA8Tmn2bEAzuuiRV43g1MkesoCgGW2Go3EGAQPYQgo9MzJu",
  "key10": "M54DxHpK7L27u8RNRjiMPtUghqVAACFeVunA2TsWKf9FV64x5YDeQovoAsrMRzEvwkYvS5jo2bJJ3fyf8R2i2oW",
  "key11": "1w3ZKnj6c9KGCsA4L2d3re1cBdgmQe559zMVJzd6p1HVDA7yxWqdGKHePfPEB3etiwJxZwHJd1DxAevvFj36mp4",
  "key12": "4CgKskr1XvZXjBzqp1pTAaDA671WfmW3YuP26DsFG18HqVUUX3Ki7qE92syMqsaNeXULoN3d83bGiLQR9FZXmnQ5",
  "key13": "2WwVeW3Drf1ghTELPEb5U1zynNTnJDcUYhW96WDy9uRvoppLK4GDtpqfQnsbaDRpy8fbK3tivE3u8jjn2Q4GT5qp",
  "key14": "byEN6xKBa4gV9bPFHQWDiwCEJTs4g7WiBiKNZwmAefwhVqRfJVo2H6opBNkNxgfpCFC6Ny3aNun1coVZba7xrqv",
  "key15": "43V9UPMCLhoN2pQLAMo95qK6HCRVQ6arn8a4GwbUfkFiuqcpe1zy3MkXoMESYbh2xoPxpt6Z5ZRytWk2FfDke4cq",
  "key16": "4hhBpN4GxeeXGpyepFHnu5R4kRzus6yGa9TsdQwYvjdu5sbKZsVf8jHSAuFbujwkW5E63Xd3Eor9ALkrQPu9B4XS",
  "key17": "3QCVEBKH8jgwtAZaGZi1imkyvZxDkpmS5RabKTnV9yL8UoCTU5g42AocwS4ESEgZfkQxXk263TBbfY8YSjnTVAuT",
  "key18": "4Hywkje2CK83CUrCdz7XxNo4sPQVEoHu4XrT5RSdo9SP3VKcm7EZSW1TwvrMXdG35c1k7dRAqAYZq8rLUCF2MFLu",
  "key19": "61RdUNEmupY6uVam6xKRMGQXeThCPGwgwY6bUSrDnSdH9ELXjRqraaa3oWQF4M8ESL3RmWBk6Nem8A96FJ4HJvfC",
  "key20": "3nFV9MUfkRTGqCkRm4xfg2HDYJTyBjZREMAFs7eMLkhbdZqWyTw5T9adyBk4h3S5SSaT2sWdoSZ6b3VYdNHQf3DL",
  "key21": "k8uqVzzjgmWoXZ1HeTCLTXHpLBdAg94UkEP4kJEUKGxqcXsmdG4LtEMeTqws3LbirPBpnfWKAbqRFhRgHPp58Dt",
  "key22": "5ZLje9gZysX4FEjCNY7mH7bNuJat18Z2G6PJghEW3NiH6RiVWaZM3KQ3FEnPgFFrLbGUinPZvkpwHdbHTxAovkUX",
  "key23": "3tFytKXQEfVAHn4hacubemJ83Qcgw9XVs94gQ5vN918B3uThN4WN9Yr71FBcuQTiCxbpXMauuTZoJhkxyXCSLXtz",
  "key24": "3BLZSTXWUGFzcZ1cYT4dpAJyLYLHuh9ADthPUQf8s6pezkTVxMofU6SQC6fyfRejeYxPcmkghDKfQ8nvGGhtidYp",
  "key25": "5KN5rtAhdYDocoY5QHPCExPBMma5NCEHBMJaSCqab9mfyUmfdZ6nb1Xvq6NvEJ6X3J1JfQQqKBZRSRAHYwC7c3Jk",
  "key26": "48MXBzQqzoq8X2Er3AJU3TGgCFybk58QGooryEWuV5DvQCvjEehy7NCtbCLzQ8xUH9bLWepr3cNVMdz6KnntdCGu",
  "key27": "QXAvvr8QWfRzPm6NWEJUmWUxXXavQE6nm6pWrDTr9nHBuSCz5jE5ho4hWrg9urWvwfbYpvbEQwPvFhxQjcrso5y",
  "key28": "2jefoM9vAbfqwQrdDxUyo5JqaQpionZpcZGUBrXnvZYQXyL6CebGJZE1vn5x89CLk6kW4jDKLU26fwDM24UFyLFP",
  "key29": "3GwMNyFzTYUsL3ahwEzoPyoou5uz164mauA72KkFfx7sx4iJNJzUcq5sURdWgDpSvPRDABUp4m9ePJe35QJEknU3",
  "key30": "4ogacfKEJdScR6HxyFJ6J2bdhUua2QvLzLwAUSLkufYJQw9q35gAZ1u9UguBCYqEPrzPnYsH5bDbGkaVQfpv8iEq",
  "key31": "2SYHzRNJqZLPY1TBFTn7U7iTzVV8tAruY7WU9QppQ3H9K6uYihDitveRD7FVwQNqcqKAThKSJ9BDB8D6gnMqv1LU",
  "key32": "3pUJP3nCBZSiNutzrjnckHhWeMqFZrD9DhXtrR9gjVb9G28x33d9FT1D8bZq3XSvRmbrz2mG5VhHEjkwTjcYHZMZ",
  "key33": "QKZTAEkzRkjLTE8CTqWeEyXLDNyhZLjUKGqRwwYqCf1vWm2EbVoV3PKfLWMfqv7cMtD6nsoQSj42CdnY8NGCAf9",
  "key34": "5HPX1B38p9bgxrcJc9SxNhKbNJBdEPqreWbFWYJCEsZDoAcdFAzntUVnRRQivUMYhvtkJk5r7aBamqR7pvvpcN14",
  "key35": "4fupMGLjaqggb6EszhMNygSLn2iEMVCWoEeZZG349omNzQyAtRUQdifT3q9DjnZhEK76Zv2fHdUtAzBkMpVtJYnP",
  "key36": "jemf6HTq5SfFMNWDE1Jvb7Z471zbtkzGGk8GM4MsisuCWyNHiZrkNam1rfRo326yLpPYV5m2sipBPjTXWcx18s9",
  "key37": "d9738aGZHensySx6Cpb1MmH719rQjA4hbxVmKEieQt1BDLYa3xA6HSWhcYu9GSN7YayJHNFS72v6EiGAxf6ehoP",
  "key38": "hFwZp7FQAbPtmF6ZtwYQCZEQx5kwu551GynXCZhFM46k2Wb2n5biinabZzeztc1tXkbGcgUFeFivvgtYmqrsfUv",
  "key39": "2UG2EEYgXZgKmDfP2ex7TLZu6iemruJMrwRFPUVPJXWPHySknF36X7swdGycgAkY9um63BfpfpQwjPxh9jCqmDNE",
  "key40": "UkT1sbtcciyJcy3pvYRoDBcE4tBQCcPXXESikdXQvKZzejBLjLY1RPUvyuDDaGH6dmkANK5hKSpVQsxq6TizVsT",
  "key41": "4oU5eaWpem7kv2bUf5j42er41ZtQdMaDso7d7XGnR8VipgreJXW6S6oKDTHbLgPw7tAgHYGM9EYhJn1hQ9GXuFPV"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
