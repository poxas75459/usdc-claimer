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
    "5JVTgvKjRpWKoEnooV7T22uBxwvvNkQHfuuHy4qnuTJttdsMQE9GS5xtAajcE2P6s82hadvaY187jZbyF1v9HCr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ochEQiLzkzrnVBKy4beXWohEffjmAg3mp28EcDvjrU2kqZ1YSwnytu1rszhGiRcCrCPEZ3jtPGFnT2wxi4uC4Dc",
  "key1": "XFHXSiiu7odjL7jMYpXaLFDzKHvHzX7P8rhbuZj4onjn7zzT28DqQ8VTXXiPszNmipbh4ZVXsHEwd8GepvpWG5s",
  "key2": "45hMcKhtM12og6QMYuoLdZMnVVRjn5gsxQFLXLqFEHGRPvuP2Wz9WJbN6y9jWYwHMPMhtY79wY5UYxuHcBk2aZoj",
  "key3": "3NXcTKXVWEg2ep77RmP1gX8TvdsCnvBDNqqaKAveeK8W9p7RXMSV6aKCbK7nJEF1hgkt66dRdeMSwmtv95WSV3q8",
  "key4": "SdrjssJKJ1pRsLEcfpsUMDmQN8nHw8zYK3ZV4RgzFuqgR5s9KZG8c4PeG1c2maLm2jUVMdY4UUUARRVryqpZNvS",
  "key5": "3sfXFqin3F4VShF8wDWqJPucAQihpNBBfEmvvinNUpCkjpnj6nbeJphvV6M3RxmasL7HvFYkRcM72aAMPg8zRUBW",
  "key6": "43cLVjFWok9D5Ru13399NzNRGVjK36Tfcj8cA7h944zwrUrfqKyE9zNmNBdHQRyBb7kZ9c6gvYpqtwVvFPHUUXav",
  "key7": "3cKad6iFJENqS2jrPdXKC9F68rk6geYHsLDJoMGi1UknPSSZf7aREfqtsD1SD7Hfo4UVnoihscpbz3HJ9UwMXqwg",
  "key8": "3tbJFR8tS4gAR9jjTNgmEaDzS9FnXGsXVk6yGZSGvVs9HNTnJfPM2wHMjG7Em9D3jeCMSHtM2UFUG9higAmAtSPN",
  "key9": "3uvybyki6zdmbnmJNnjS1FmuLAB11a4oafsDw7UXCRSNYN9cfbfmH6YGDULY7EaaLqSnQbvKNAwySTpqGQkTNxFg",
  "key10": "5M3T9vuWC5vgmCATVyJSzjrY6U7ufCx6DoxapZ2mrLzBWWbbQCGjHZ9KMFtDX8QHYLtEpy2bG2ywcucgte7SSsBb",
  "key11": "3vaoixcoQq9gozg73RsdyK2CULaDjSgaH8hhJT9fhH4wjXHk555T6GrVnj25rcH4hmZorckHMB6YszbPgxwu36a8",
  "key12": "4QoCRM5LhdrHjL1TLdDcCHnkC7Y4fao2BrNrcsBnSBun6QnWQ2TjQXq8oSv275QBDgzLd2Hdd7xyueA66XMgbaHK",
  "key13": "apzpMTav62heK2BYk9nAu7icpQB2e6L3dHqAakpKs6ENDLH8eb4KaLjvhEC42fEE7if5PkcJEHNEXCTngbGS25s",
  "key14": "2iW7pax1gWTVLeZzVBGcWQd3NN1mNL2nxtmkahfcNKd31tT4Zu167PQi5tPhBLZiKzUahEfQhwy7et5VVxtT6n3",
  "key15": "5hhnfF3aGpukteyk96nSVdGcxrNkjfy8NHtXyc8mA5XuDwZ6Bmm3SMPugkCsJqUdhTZHSjegrfwy4f4GtDHKG3aa",
  "key16": "2dKUhbe9hYRj7hpXzUegFFsKQ4v3jHxTyE4B5jN8FsP3QMY2owzxRkzJxrYQM4RyyufNBE6MDnN7ytycCn8qLB8z",
  "key17": "5HnLjmdph6gC5oxEFWA2AHcMgFkvGXG6XBXdfc1Ldfh6gR3w9k2UNCdrJBtTzjLXxW5vY2fg8pWdz6d2k5AZWfcK",
  "key18": "LZ2J9ohjTfJsrmwwt1rrDC68g6boYRVwk6ipPhBdzBbZbdrUTUYTMHbdpoCpE2vbrZdWFzcijugnECPSvpbHrGc",
  "key19": "5CgNegtoHubzxjJStMj4nhMRVMgdfFLsH837J5pCRHXpzgmXKtcpXPEcJHPYrzPHiqDm9bJYXehU36Rx5fR5vKWJ",
  "key20": "2qKrtMLUkw7QMADBDQood7aCUeLYj95Bd3hrV3jxtBJWtgYwBFFKScmfya9HsWPfVtcoZo9d5tcx7Zkj5DK1EymD",
  "key21": "3vNbMK1pdAMwUhji7aXxs6sqDsReJ8UDn7c74PNTsZNTAPvHADmi2mn11ZC1S59F3BKkeSNXXjR4djSniPhB9CXZ",
  "key22": "5yMaZLpdbS6nsvFbNyFZNGyVQ8tiMbXEBPQGMHzWw7HBg9VXBMvNvRTjyhX6e2dLBivdRpqjenBLkYDCNfsbhD1a",
  "key23": "29QfZZ52FALXh7jfYpHghrk5LcfbQAWacH5UqCMjuasgceWP5p2J6ck4azMrss2RFt6dTfH5S3Jfumi6jF7yY9cz",
  "key24": "2jBP9z3mooq8MtMJ66qnqNr6pg296b6859SkqRaWRQT5MVuPHrbV1bnTFxoKQHzLomNMW8EmcbBe6mB1S2UBveRn",
  "key25": "2UcogCTnn3UL1cEW3AFRBtWm3YFoogvdPMXogAZNAQPwzaTxnKuWK66EEmWzpFAUG3v7PEJMf7PvCQuvnnEn3Gvc",
  "key26": "33ezX1JZhRRSvaGPztniDkXAFfkKCizpGaHcnCmojJVNmU8ZxCgvxa2pnanR2P2iy1WzRSnM793hAHdLpkTwYUN5",
  "key27": "226jbDMfphmHiLCjBJsVoSLZ5spxpH8cWjjyfDAH2mif8rZnY8NMVtfJxKBL2UNnz4rywRMXYrht6gTHxXr1jpd8",
  "key28": "542awjdMbZnqvAbiKgQ7ZHB1RL4PP2fP7TqQxLkB4jG4W16HXBUr1Mj6BXSSTN4Xo57WHTNWVonzCmjBKGTtd4t9",
  "key29": "GE9gAJKkLP1n99nRM2uYh9xqNnprDS9ZtJYH3rJ7v64qoJxWn65EtVWEaaHjCWH7N6bL4dQtW9JRBYfme2TnT7i",
  "key30": "4AgsVU2axN8EG4ZAs481bNQdhesvad1VsXFnSNvJwuRuqUPzPbk87S1gwAGNXjftUHciY8HnGccnorJ8idynhSBv",
  "key31": "2LqPSyWZSVc5x5KpTArWPUCMprgVKFL15WreYvGp583u6miHndhSMzVc4PSYpjjbmDwE4WVf9xn5Spby9JJ7AXnZ",
  "key32": "EtbikzidNsiYSzewH2CdjWNmBAjkbWYPetQGbH3CUMFWK472dqDL7NX1DqyEv98V3zmQjZR8svV9Kf8x2XtHkiz",
  "key33": "53PnFAucvyGzA6X8nJRfepDh1x3Zi1w2bB6bzxw7owiw9muTuDgsH8okPXkmT6e1LgZ1Av5o8VmHiro7YdCHaS7B",
  "key34": "4BrKumKZfvRzeLDRBNc6MyPrnwGmbENgJ1TQM8qjzayryqHvoMoFYUQ95GKk4VXsbrkV9FsLGjH83obmjUwJ38xL",
  "key35": "u6mw7g2UruSnVaPSjXmUTAiTYQULtn2dthhah7BHNx6f7XwX1AeKaAymAzk8D1EmeeRDh1ZDgPoG8NjkVEfjR6t",
  "key36": "3DCCt84PPAt6DG5LX4LG4fkpYpfZUUj4qkZUmAtWYoaPtaa3dBMZj4yV7pEDc58FjWd9Zw1aeNxpuQ6GyWVKgqsn",
  "key37": "TMcExdQJz75ULKeMx3bWT5s7WMV27FiheJUfWtqHXegafg3Lk8Zp6ED6dPKUokJqMrcSG5zQYZWdHnwUk2QuFj8",
  "key38": "3gLcDgem3qiNjWCFqvDyTdtf5XsnoqnEmLVQdSzccTGyAJWupgyEaHca9mVeUSjGw2mYj8NNcikqh3GwmirMEffV",
  "key39": "Nmo8NfS4G6tgzcFUhriyJ7hC9aT8xrxy4YjRwXVyup5Z1SvXAQbknd2hnGaXtZrhxEmmyq9AXxAgrLCRAtgajXv",
  "key40": "2M9TcJznz5jo2m6EGckFQzKDqU5oEuLAmrz5kVHxwbGhTFKKujKCbbB5awR6jR9FRE6odVHeL6WWyMmhjMBXqmcR",
  "key41": "2qi7fJgUDab1jyQTaNYrErmWLhiEApuYUS99o9MtLtzGmb1SHQbrLLDY5WoQqBa3ysjGKkbiqQYcjd6UUsvMfhv7",
  "key42": "3YgfWGRXKkWeiYUGT2J31J669KYDuS69Nm5wsiay1aTJQphNkEn53fyftexYCa2VV945yqV3AERy9AQdTwUJnqQu",
  "key43": "zxfLzBLeJJaUEZJ51Y91UDZkJ6VHG7JdRsxDPG3PGP74RDTeL6BkdpPtCnpTfceLyrNehkee9onf5Na3rC8CAgo",
  "key44": "2RF8pz5RYv7wCEBqduzxKaaXJcfT7BALHdFA9FU7MwJJqwKHjxLpHeuT6zRUb5Pc5nD84hRKBp3xAqCAXnsDtXeF",
  "key45": "2G2NWK7PFRzvJbX4yE9xxcvwkde5rgYXwo3hVMqFMrVSJxUPLQfRcGfahbHjq1vW6vvXhDLcb3wYJG1GRBRCzqT1",
  "key46": "5HqPaQRs9HjZJGDsB8cAt8gVSNZ6LhJWaCM8Lw9r3ysURoL6AdJRF2R728sHxXXGaQZgEH2MXhhiP6ExX76JvzxT",
  "key47": "4e9wG1VpmmvRSXaQXcuiYBGw3aBnjHXMNiTJ5EifTmTKDCkUXSuHkwQ6iRnE9sJjtcDJRndKZ28PGubLQJxd9EFv",
  "key48": "MpEZAf44XGqPN27u1rMYz3ki4oJ8iuLonXmMHSxJRHQQunNTXFBRtifNa4XgPoeLsij51hbd4xEcFFLZQSDPEmZ",
  "key49": "2vXCEZoqrQEWJp1oZaeDVFEhGoocX1gz1zMbqTNzx8gM8j4kXEF9S6uaUNeQ27fGK3XFXPAPVxwEk75voNjwefXS"
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
