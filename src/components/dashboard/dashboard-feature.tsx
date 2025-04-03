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
    "2DhDFuRDJQvkxk14pBfKg75jqZXTigLdQqQ5wm6puFuCxW1g61tXxyS1puA7FPohuH8DsYGsHp7N9mZBEGhc9MG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fwAPxjgqEDx9BftdjfvkA3XGiS4eiWcvWciURQSS6pUtt7MoQAYTXQZZCCAoBfayQCtxXj87od3hsoJDbZmYXSg",
  "key1": "5dVKmNN7HeMohV3afMiruwWCiqjqDGYftCiF2xAVPBRBzc1DmvsPnpixe2CZXHFLeBa1EdvdBD67vsL5fGg3Kr1R",
  "key2": "SD92wHCVs2zEj2RrCbnPiravp4jpaBCpkrPXFoiCreizpvvyWWN5qR8XAe877rCF225mumWeV2N2d1x7GwDnhEy",
  "key3": "4pymUydKCFhftVP4RNxpg345jnGaWDe1JTk4SkRGBmL4KhwHDhebLVxnJTCB9UmDt5Unyx6V78924m3CDpmtzCHG",
  "key4": "7uSU3u2JAzWMfEeMWnTquzxHDnhqjB2zkBTQWZMUSvWV5ytMXvxQEgaBgFdWtLT2ATAda7xYUfpfuryohnsHfLe",
  "key5": "4DJc57d2qC6xPqvAQzAD7JF7amiads1CtZUnsGAwaS6T21N7zUnN2cNX8bSXHj2x587efmyePBdZuHsAXsJmYEr9",
  "key6": "3cuhzGzhF3969tQvmhLdEYKscg4apPcZdYcj6kYHssu69sZhUMNHn23uW1Lf5WzutAvLugMgiFZ43VBzCoScdpvV",
  "key7": "3Hejmr913Kurxa7Pypw6tuEyamYB47PWsrBUYcaRfeqpir8BVVCXcgpcJuiVxmgBRwXjGCzmfNPHVi1RT1y5qCJv",
  "key8": "4HxgemMrdSHBf9ozaUZkpSBn9zpsmQymfCCx2ZLWdEQN9YJ7ZBkNeLQT56rZbWxENUpDBifH578MCiDkFaVmLR7U",
  "key9": "5cE7dGDgZZPhfA919Rzr2YY3LFU2oRqRekkYbXu9zGMLJU56Jh8ebz6oQCFnD9n1qdERnkCyrqLfGevnQFf3pQyf",
  "key10": "NPRRnMoWPVFjuxQuXPuNZvmWDFYFvxUgCwixkKb1EeqRAM85K9nQghDhnmP9ZVX7qUk8pGTTQK3f9djAvtTtD4i",
  "key11": "KahnKSuoUX3KUwj4cFGSfojhPNYNi4GJNND4AonHJzegEqjQLUTG3PMSJN5RTm1ZBcbD7iMYWZKmRnV71X7ggjE",
  "key12": "4uVKXn8tAjgQZgqb26fSEJq2eJ9EYugiSWKuo18XtPPh4W3uWABoRN3opPgKbjUognoaoHR7Ao5sz1g4Q8UYVSfs",
  "key13": "3bVSCSiZ75tnowcLJitsqwbSwp8kA2yfScwwFzEwEJZk8DrTmo2xvJ7QUipbLhZLugLbhn2MmcFTowF8uveFoEN3",
  "key14": "4H9qo2pFQGrsaXMMLvaADLQhRDYjGysLPhwUHEPd2fcZrUXKSdcMSDZv9ivsHtHCAnC8vBxEvJ8E3q5j6qT9W8MV",
  "key15": "4LiXygcfuY3iQqC1Hz9b4CCeYm3iuSshBWfifuPZbAphNAHdcSHB1oeFZSMPQEWWqSj5gb7KBzpxuFF77WfSY9dK",
  "key16": "5A3qzQwKwJB73unjtSJ8Uwcc5J9qTdVRykhupWdhRnRwM3znGZC9CBJcKvHAzwKkQeT5v4EF8sQcwKZMPyXFHD49",
  "key17": "4Poynkad43Nsk1eGCsJi7yRSsGdoDag1qs86ryD8NEGd1neec24oUqopxuERyhapGV8wvp6rKvjq1WyRo13e21Tj",
  "key18": "5oDBovSjwNz2mgBmgjP9ui46ALv54bCWDahV2EZ3JrUDpYdu2Wd2DUE5ypemdda3SeFJWmTfHVX4Mm4sFNzXeGFb",
  "key19": "2upSCPDjduwVTosp2fhnMsRUB8VCX4MZKKzsq4wV78zCg3cFxKWwP78mtsqf2ZqboYphNZ1SvRsJCRWtKehCDLuK",
  "key20": "5w8jf8hamSn3AiMkcaFdc7yYEeddLTA5XeKmbNfe8vjJsoWHDoQoPaPzY87d7dZgdAieHpvnwZSbk2FmdacLGzqF",
  "key21": "4e5UTzTZH95H1fZHPkLbJiUoKnfwyXKsj9raDP3SZ1Pf1q87taaxQjbCYWPvbraE4Wuy3V7W2udpAD5ktdGYgVj7",
  "key22": "Ge9Qc3FsRXrTcUQtHqQHGhs6SPpDYAcZCKW4FqdAyW2HJHuDfN5L8a1fv5w8cgwSdbb7WN1PkBnsfygMRm9NSeJ",
  "key23": "2w2C6pUgx2Uzd24VBkgx9FGb2EVgdbnDtUA9CoZh7N8UxMCTsc39zM5nzKzHvfzsfTv8Lq4D9YGGXuvicQTv2yLt",
  "key24": "2PDsZfUTH6wKMQ68dyAzti2pNDU15kZPtG84kPC3uHt6NpkV3MPxtWQuQUPYbQ7WNmhjhLtdCwZmEF2PUpDvvarL",
  "key25": "4xKKQ5m9YUGR8VqvvPZv3b5e3jj3vfWyBrKLQr2RMXRXBD4p7Hubkn2E7UBDPTNJGCJDDj49PLCSpvQGSzAangJ9",
  "key26": "5yS1RCAmha7AzUkTds99iRUdHhLcdDh1wKncYo1JrvESv8Fk5f8CovwYSTgiWEXHUByaeMp6j2HC1vAanCu5VCpS",
  "key27": "2fBYuqFbE3yCQx6DGAJB7PqzJd6FT7Z9wU2vm8kWspazBvTnC7iair61CbuvCzQ1MMoyJcSp26bcsdcQazXCatqc",
  "key28": "4ScBfsw7bj5WZWXYaxTie8BrdnvDN2Kaz8RENRh5b62qpK54X3FeFPsgpybJLcnNaXCM7QKyvUEEeN8jtMfqb7hC",
  "key29": "SFADV8utnpNM33hLSSRj5NtvANJmk8jAK5oTc4y8TdgpZF2RNEsMenBrwMeyZ2AocMZay5EtQjngTLYnyumJBwj",
  "key30": "4vdZ37yk37PHYHW3CxSf2bQefLWyFpo4GKkgBT35AC2AuKDCguhUWuFqoLwZ7Lypwn1eck65T9Mf3vegMrCcDqpL",
  "key31": "3Th6C6pQFsy2dseQDkgBaEAsABXk1Ft2bw3tmVSY2ABC5wxDNAEVDT7rw3ef48ysFpQmxq3YW3WEHXV4sCSieeNz",
  "key32": "3EoDsmA1em74hRT5k53Xy5ayPe5rcJEcYvvZ7CEgcxbzBJpxjzMqM4SfVu8wUJU9P5jW15ViJC4RqvjR8FqWtS7M",
  "key33": "5bH6NQtFpjz7Fui9zTBs4MJFRqdtaw7KPToc1X9W9eS6vs3QvETzq3RsE1FSb4qfEh86JTsCY8JLiWXbXVaxEc1g",
  "key34": "3kF4ndCzh6P2LpPPKKiELmHDQjRV1fHnFvJguDByaCB6tZA29svcPh9wSNcx52X7CJwVvRng2acMzAFpUupehq6o",
  "key35": "53vpSGKN8Pbf6ePY1BBGDZ54cy355DCtPAUDNBtg6oNvoPJBWjU3RMdJWjbFPtCrR2WP4CjDwhx9zH6bGm9yoKD3",
  "key36": "5pLNoBmbzCxoyBVQrQyGsUkziYfpdYqtnoMYUVYj9nFtLqkanW29e4UBjQP3qer2tAH2kRNitsVsBaaReDJHmr4i",
  "key37": "3uuHemUrsVcu5Ki8MfNL2LPjazKb8EEki7PTTGhMxDox9KDMKUuGaD2A3mzpLc9xAkDXhbBxQbc2bcw54qBZFETX",
  "key38": "47M7XTHEuHQaYzx93LsDFvBw8i6HM1gUtHbMM858QVVDfJ7BxCuzFP7NySvcuzPDJ66vfGsRDVgww6a4gUUt6JUK",
  "key39": "3RXCThrNc1gZ8C4N2XDo3e76tKXpBAcXbAFLiwJkMxHiXmUM5piQRk3m8Bn44poFm4HqZ3oJ8A6BnUcQZnL1w87E",
  "key40": "5fwcWT7wngemmp2AnugMwWFD8xEC57yGUeveH296NY2BtbSZx1c1oV7uDKNG95ohvcAPMN78UGvQeYS38kv5TCM",
  "key41": "5coVeGjzDPbn1tnUhNPLqM9mQu1onqupDmTypWiTTHPsoC4Xjte8uVB3KpjLUdvShECW85L6PLfw56iN3vpfFNg1"
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
