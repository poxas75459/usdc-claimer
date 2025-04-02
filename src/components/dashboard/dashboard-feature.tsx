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
    "4p5Wyizhtrij9ktRgRbojSsuYsXUK8WEd4Y2UiKVPTSaStzVqDBbP2ZSWS7fLub7pPaUS11jyCESFZHaDX8GBsXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bmbLqAfcoiKULCKPWHiLHS172SPRZg1qgVLHHvWLFg5azeTbsMbKAe8UjUvWRzb8rktT3TNxwEMyrKyHcVdatny",
  "key1": "3UXVE8dpJH8ALkCYEJyn5Ub2jVr83vmh8aN57KY25i2r9uN6Xvysded6JoPDbn2nQtBxkCvrLxynXnm8MhHFEKTi",
  "key2": "cbThAJMm981LXHefEdoZ6ypPA3gQxd5J5RUfym8xC2QUBEX8uc7SwfJZXSLhdf16g4uLZvE3qKXq1BabX1i8Ebm",
  "key3": "KMwwkRdtDdxPS6c613T4gD6xUgfBYU263SNmc3eauWc769c9yzsbpuL2rK2YvyC2TZj2A5QMJnSHVNEoZKB3Wf6",
  "key4": "5eA2ZbBkHXCVyMGzAH7UZZCPMSqHR7yhNAih5L6DRs7Y3LDQnA96a7HWAXvs9r61AhafePRsStzwS2HHMpFKjdGw",
  "key5": "2saGRFKfsvKLmkySJ6uCmsM7p8fM5EBi3eUddB1pZBHhCGFe2kqtokWxkmnTxD9Qg567Qxx5envyukPkVHPgZ7W8",
  "key6": "42NqhKdADpUPjKw15c7NhYb7iA4wVLpk99sGBV8VuzSAkk8ZEizdFiz5cHFE2QJ3KKHux8iAryrNbXavHVD7VFXd",
  "key7": "fCLCCCnUgay9MfuYDUoGhqYeGzbhuMsyRFXckwGd155dZBEt6C18ws1SwjueQfP7SciAA4rSAKxMzZJ3HrGgWZS",
  "key8": "4d9SJZP1hBuQfoYkAiq7MjAQ6F6uX4ZNt78avhw5FzFdgTQ5SL5xtXSstw7Z9RFC2XwhaJohTTvA3smAARkVhifm",
  "key9": "4yhg9WEZzRjotEjPTYiSdVGs3H1Au9khkPquSjvKKsa5kbKrjeY14hNuyBE2AXQYqEK1hDaL3m73vV7qFZhHb8Ac",
  "key10": "41cQTccYfU5wMAVBvZ26MAxKWz6pWCZU3cDFW1LgfhBWCk7xAXuKYW3pK69qhWKBPkCcuVZGzufK2qnqQwPnoW7M",
  "key11": "46M1rb5PT9ieuUSbs2gkVNNRaRzpnyMN63XrGMhQFnaG6HSGhDAS19VhYRQ6cCSPmNU1NkpTu22b7VcBNU1R3UtP",
  "key12": "qnfJ1oW4Enk91PvhvytJtZVTiTz7Y58SE85DJGmUnWgUao5gvbKwgDDKVqK5FCr7tE2UGpSwJ1LHHomCAFTRVqp",
  "key13": "4unaa3BFcg1nkzCThVEQ96g44iWrYhpJgfy1BNaVxSzSf4tQKx9dKiVtpMghpBnmvg3Dizah9EeMrBky3vL6J4nW",
  "key14": "4keogkUt2tyonUxsPiz9K3Gf4VQYAvEcF1sZXjStX3pw4JTaZdVFb6jckS1hLzCc9rqykPhPCJoT6zKFUHZJNLPt",
  "key15": "3LmwD8SnPHmeTHoaK9MzDAB4tPUso1vuZxgVgbtFPXDCuiU78U7oLFaZm2tuKuT2rj97LZsAWWud3QDUoEjc9rrb",
  "key16": "4WTAeZ36NAhjLxELPSkw6u4RNxz7isuiM5q7FDLmr8Xggn8KKu6GUAFLHkGbUcwNdZwWTxBnhG6c7t2PdXhMU8MP",
  "key17": "o4CmmyGR3PVLWBq6T5ck3eWN3CM964oqRnoMTfmHredtDv69jt8S3vHbekoKFhA1paPtJjqEFFD5obdMqw7mW5U",
  "key18": "3Kke2rJ5zR5EczKdWx3rxA7qpGVJ8HZZoMdZvwUVQe5Yb6Qt3jwqRJK2thvaYKE86CJXKhTpBgQfcnCuG8jYqk9T",
  "key19": "2dW6uMALTbjzyRGFGt7ZYpzp8g1oRYaLN8qJQTq7Ezop4kjvUQFWm8J3uj4vkCUJVW3ykVFXv9ii4bsnaqf5Ep5A",
  "key20": "5USTNouyp7qBgoQ6rKMBomQqpPVFAECBhaYQy9RE1CsUNNySN6ETd1vyWxFBGT2NoEbtazDk4Ug6eVbwuA3WGLtY",
  "key21": "g5i4qtUJQkTUBos4pVFTFkr9KbkEC9KgXKQTpg9U3NVmLUqGzWxjXsJMQHpXmroVKHguL34YMoBmPuiWatWNZTr",
  "key22": "62EFtw7yJj5mtyEeTt2442Qr2m7Cb7nNb1rN7Jx1BJhc2dixPBhtHBEdfhLZDEh9mnphppLWSbfJMJmidtDatdnR",
  "key23": "4omswkkuoskQLdVfiQefSxaypouZtVvcDCe44PebNEsroG4dWtLEaYthSfHqyNie3C99PoPL4GnoT5BQ2ZYPt3hv",
  "key24": "2vtbbSBEagQSH9WfwEeY8K2PCFpWQLSV5YTWmrcwbXBzEViFwZmwLZe35JJTcuNqF3fiWxs6AhaKQewFosrf5wmC",
  "key25": "JhmNfrjZrwK6v3oCdxs7rNK6hCQwVDRp9NajeocESrDZCu6t8kHXHAV6q3kj8W6VC5PUD9xTpLgSJhMcGnEfWrY",
  "key26": "5gBbH1AoZcZ5io9BfnTHBk2sDNKZBnY4bAgnC2YHC1MLv3RfTiFqAmKW4Kw9qPBsAvA3kDgBRPi6tCGrGTCFqtsj",
  "key27": "5uwrd7vfWMSKHKs3oSZ94j9bXLZCKXGst2GNkDLuKYufg85JTjPq7AXgMzR3NRLbrHZYzHeVkSmxBaHDpvDiXEi1",
  "key28": "2yo8DbovRhCaTa63CAkitwyrxRmDN9CQ6211xJF2v4EvYojJoQkNkXpDTxCVoPB2N99mYEBPpWr3ZiuVCz4JdKDu",
  "key29": "2uAHk9sWwLxDZnU9fV9i85WXkbJEyM4x9H8qtuT1fhEXqgthQnBB5fXf2QDCwgawtXqQi4bo7m5bteFd7kJWQ1tK",
  "key30": "5oBs7ApUgEUtP77zuTNRuQYt21WrD9h1ba7g1pSWBvrWcRQKmPfRUoGcxgc1R2t8fLnpcRrgBt6qoqetL59zD49s",
  "key31": "SexEHWZPYkhWox1jKBdTPdgVjPCCeotmx3gREucKZ5YsH5j5HHXrgJxvRwW7CooURHx6Zjyk8NfF8YPDu94SH7d",
  "key32": "BEamnzJM2qYRupKDXsXbUkJFNkFhMcyqE3aBz8Jzb2oHcrvtbUeVjFBgykHHJ7k7P2jULqonmohQabcsKNbJYHo",
  "key33": "2jxvyp66xrE4iisCSCF2Wfw5MqexFJWRC53ZUQRVQQdbvw5EUaBuxLT5HRFXkMfGv77CYoZdT7n2LiBSsZ6dcyHG",
  "key34": "1wTetQSivs7DU32npZVukLNBZNN43DyVCh61RN6EH4WAQGteNgoighYoVY1v5HsbyPdifKv2DLcKL5B7K4B8dSp",
  "key35": "56oka8mBv4AHmBrnwH8Mg57U3yXNHcf36CRjLg4cLxcKKXZsfqRtXCfdj7ifpVqLbk3BpdKHSwxH72xRt7oZ33QK",
  "key36": "9J5Q3hC1sqgUQmua4piKW91t2qbY1xJdNCsNeU6QTkg2rygkGmB592Wt3GYGeP1VT6GEthkr3q2wnZduoj7BsJP",
  "key37": "2acF3fiq7BfSY3ZiANPXLdke4atpFuPq8YoHkTUY1vPAZ8xnRaVJZZHvJ2mhRuBnG7bd4bFprURcHdNb97GWHayp",
  "key38": "4tKBzYcf6ncM28E7qv3i8TJKnhTHAWLN2FA6phiNejNyWTqjuoR9zNY6RFSJoGjZpCFa4kEC7vw8hdaVNiSqq8UL",
  "key39": "2oBU5NMaiwCx7ryyNv2K7rx9D9juvurknRqkRycf6RtJSg2Ns1WMdvRg2oq3T5GNMK5EW6RhQEhMs5wZhuKokGBc",
  "key40": "5Wz9hYJfQAXNqBBqRzicrqWR5G6kpXQ3RfwEzoyS2cu5hmg7fuX72QLDjE3VhULRKvJ7G5TYR6bHWAgfrkLTe4fU",
  "key41": "2JfcojCSTyq4cJToYJkHUhBJZuhHq5PNx7fN6tGf7CvYcXJPdTLfdztd1RkzMQR9emub8qmdNxmT6bHsAWirtFaQ",
  "key42": "2Dk2mGAdzXLUMBpRzuwFgVE4ZfC2E5ycPjTE9mS7pbxwrjHE64fNFZRLggdqojsCSR1oicuNQs8UdBBJYorECiai",
  "key43": "3NgfRrhCje1JrWRMTGV8Xs8aZVuKQUrHpYDqbkKCQxyPE1gtjJ1hRFojxarzgJdxvE8EbMKLoAsoikUzh6qSQYcR",
  "key44": "51UuVgcg5JKY2g7wzAqFJ4yAdkgN3KQ3Cys1CcjDR9t7M6bsPjsvqoRZ8aen1UF7gAeU1T6KsMCUjFXkYURrB9eo",
  "key45": "2Ba24ni8Zbg3AaGxptBxDjxKyRqCRxUG7GH2C9D5WmBCQNwg9F7HLW9Dd1NzKHGZPyUjkQ6Xr3yRYw5Bn7u8X9a8",
  "key46": "5kFYXsy3ndHTaVyCXPbhMpLdEGyoSXQG6dqGN1oUpJjbjiicvdJnS4RUofei8okkb3Nzii4oqgkBUZYBayAaKMCk",
  "key47": "2QpNk4WTDfAuJJmcHUHUJ2edaHzJr4nhPb4xYGxFHJm9E2PD2TJU6o4YyLvPK1u8aR92MoGtNMisZainzkwjZPTa"
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
