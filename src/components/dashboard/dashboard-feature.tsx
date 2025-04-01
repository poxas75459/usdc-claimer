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
    "428d8pfAK8xvZsHDWVFVSQzug9xLRTX23D9etu1ZcUebf2YbBCWUBb4E5tQ5M1MViuJWFykUcdzRa8fWc9Vq985r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HUCu34ngmwvqefWaQoKCPBPdR4V6xHfSJW1HNtgX4dtUttaveQ2FLJrnGunxPwB6r1SEJJ66PdrybCbMVkQRFAC",
  "key1": "5siiKHKsumADNfJQ3f29tAfGSYcW9fQHecDbhZzhVb8MkCetVm4hf19vavqkSHDT6GAuhUdrNb8WHs7KGG8sNcU7",
  "key2": "XBnHdfhdwzzVAX6Nzeunu4XgZZ3SaM8kuVqJfieG5yg1vdbtm7KU8mkUkgLiLqaxrC5fowMRLhDKN3BEVXvNFoq",
  "key3": "Krr179AroXLKAUnBYFQH8Wu48rzsgNbgstcVSAAY5KqRdbGGoyUKDegCu2FBEQKt74SszRdbLpKC2zvYhekpcNG",
  "key4": "2giVabgm3VNpoR4YT1GhNkJmXofVdYrRtXzBfT51FGb4rP1L9gw4Cq1FnA34C3mEQHPo2c6SPKcvHZEPJcYqa8mH",
  "key5": "5Xn7J1wyEa8EfYfSSDogbnSgEsnR8z1JNtCgu9j8n4pYmqC453gVKjZxSUVw8G6KbqP7VZ7HJ488yWQkr4zhJBMT",
  "key6": "35vsyrFJYF8DwJLVwNnickDgj79UvqmqtSNbWxcQa1vSNLDxvQN19RnMm2FVpWSGRUoKK2WHdZi7vM7fvU6YKY9y",
  "key7": "C2BkjEZEESDEpq3oyAmSpTAJuKn4sVbPHHAn3tfaygUhcQvpTarkYi1hym5timmDgBHwvoHkqFAKJGpJA2e9oT7",
  "key8": "2WFFPwUaU4CYrKUAQtVSNiG5hmcVULHkPLvvt8KMZsWgfKnapxWs27vf5weqR28WZjGeVmWJxXN1a5CjPgRsTk5r",
  "key9": "3msZCvipxEMfHk5xMeG9hvuTGBW8tnDXCLFrX7fhoNDxDoHzdjgLXwvPZ5NJA2pQd8ApJU3nJ7PQGNgQmpDBsnCB",
  "key10": "5eS8CRKh7NY7PMgx5zjCh9nzMEjHozCnSbXt29qruPmDc2x3AyJh5o3T4zWrW5b9DjcfgZPdq5uSJ8xXoLC7sDPK",
  "key11": "4Lr7hvMidgJzCC5L9XGSLt4Rky9GrbJ4cSff4Up2J7GnHYdqRFothjJWDmsGJTcYm6zdb1nFYQirmnbzHSDndsnP",
  "key12": "5vfMvv5f7tui74eVP5KvUEm2APLKFos86uDaVYukkJc3sDSVC1JTc6L8JCegXLQUfTZaW8H3tu9yXkPQZyVahwCG",
  "key13": "2KAfPojyfog9CEMuC5PFvqD9Xh8RzFkcHTXLgj5ZUmwCqfSq1H7tfaSBCsNj2r7CZpoCm1pjemWZvtjW2pj9ZCap",
  "key14": "ejfSY15v7hDgFMhQ3dLkcUsJabSM7BckPsQSLP2YcTQsTbqsVfN63dBxDGB5AyostC2oUBgdz27rbyXoaHe7U8C",
  "key15": "fGGKiGeG3cd8ogAhNmL1k4GaZH1KMQcKA4PegC232i2PSLhy2FQ7B2siPwtcZqZ3tw5AQXHvFviePkcuC4csSDq",
  "key16": "4J82onKeppyBbDmHxNvohoyG561SByVuWrR2m7bcahgQ6xrbrYPbaz7LifiyUKZAKb8TNruKr9ZMZFR3prL5ujk",
  "key17": "4MvE7bcwj4eqLx751RubW9P9bAxP9CtGdYgphRzwDh9WtfPAGWNGQfri4z77oegWkwNj1sKtHqfKuE3vmqb79js9",
  "key18": "2Noyd3Z67QBPzJ4cUAind9b7xn7XuApJkggRu63LtK6nWjap4JZWjhH7MiHe2suz6v1eN2LzFHGeCrsAp4HDzHZE",
  "key19": "iNDtyTeigNMJswYRyXe9SEpVsH1HmzogZaBbqattAtHn7GJLK3EHivkHkAD9g6EkuFnFpghW1ZxS5t7mJcSWZFi",
  "key20": "4FQsT7w2NshiNAWijuv4zPWvpepYPWQT9pRCvYkY8k7J7nGqnjSpMnv3MxWsUuduKWBnMrk36MubCZ2hxx2BYoZf",
  "key21": "1QsXQXrGpWaCHVnzmYQseUDL4UK7axLKjmUkBnQ18aVfPfrS1oTLvaFeGLWDhbavmFNb6D6KgWjt5jDAq74kU9q",
  "key22": "8cKidWbSPUZYbFzu76eSE7AJV6hgXs4Z1E5i3BqMoomDaXwe1wtxVpWy2HKdG8btVegF73xFQm4A2A62fALoqjo",
  "key23": "3N56UT1F72FFf1mWitFub2L3HBzxueUudue8L9YUTroCvy8p22CHi9Lttqc5wDBoXoGhPVPLA5RpnNibyduqe7wv",
  "key24": "2NQw1bFFsZ9GbLxUfA39TBwbBCUgquDdE7rhVFNKQaQ91zCEChWnXzUXfnqbCSnRkrSpjbBtryT36EWhqGsAeEpN",
  "key25": "5P2a7daPFXdRSfM8py5KowzPBqMTi12rdJm1Z2wyzoMdagkcrMNrEfdcbLNFPSQ7G7gMxrnbxvmBHV11WkKhsHng",
  "key26": "4nxdaEyUZXc1tsuRvoBqkhzLHqSYpP9daEv9grWBhuPCfHLE1tUsWQUsBnfEYGgbveXTSR7PnEFdTGVun4ENJ3T5",
  "key27": "3YmSc1nRQfbsQSVndZTc2X3WrFygFmGDeNFyrY8KGQNR6JHW4rLwzJ3nqMQevaPY6RMFChzvpxoMUGuayh5Dfz11",
  "key28": "2kED5wUa33j218XXTYcP5twyJved1ryd9chjs6gkZsAWgyCBXugUKwbGc8zC1AqS7JrHv9WJAfqbu6EQB2zeDhzU",
  "key29": "5UE7pR5nKMfXVw6nmZgUQyyKb9tpcqjykzNvygk4Srx2E5TFFr1B7j7AMzSwHg1yjhsT3TPMzWs1qsQmbMniG9De",
  "key30": "3Gw9fZyL3B7CCBnjr3cHhJnn8yeS4FNbfyNpVHYiXiCwnRy6JFpXPjtYTPgGjY3Z9XxKGA24bjUkrtKznfNqq6x6",
  "key31": "2GF7sNuRyokYUkZtDe12LgTMPVmUqx7uP3U8ptCty7uoULpJdwdFENRtTJoq9DMv6bR38qkZ6hqzQyYmVyoyoh9f",
  "key32": "2vnPtn7zvPaFZHQ9XMhJC2gDKkMUQvtuVqBbNBfKBbBERLcrPJyWQEvCZUGPgPqvDuEER85Xpe6SSKZrB4jmwEy",
  "key33": "2whng56yszRgmzjHwWqW6a4M3ZNrCmiUUmBA6njkh5T6FcR3s5BzwmMq61FT5kqVap5C5KMQaqyf2oEJ4aKHYamK",
  "key34": "5xFaxcvVG44Ej15Xyz2QRMDqMWwyHEkjFDn3S5oGJmmLWJrMfmMhZmXaWTqRHQ698Vesq84QqwNtnipwKtsHYaWy",
  "key35": "4PVUNbTs2gUBxa2KpKCndyBGRbc1FSLJfNoKSmZkiNvJk83WxR9ftpAeU8VQ3W3bmXgqRYD4qifpeNgQ92eSa43M",
  "key36": "2FGtmu8WzZwaTcNmuEeu2sZ7HQxpZ1B7oAxrBYUTB2qq9cPihZLXxLRByvwo7pTwwZPmC4Se4ELDjsMmD1uzmhQM",
  "key37": "3XjjyuPhPPZCnU6phyRe8kNauKZsLqNeyG9Gs9yLz2njC7e3nEfwngmF7uKLrW6GdxTzkEwAsL242MdLiUsnPfAd",
  "key38": "3pbanYs1Z3JnfzqwSeBvNma6cxfkdeUZqTBHGbXgEd197FDFsNjdNJgtzgXLUsR3bxmdGef9Le7apHMrLYBZacNa",
  "key39": "4z2xck4PKuQVyQhw2FU5CNwNaYFVZbkgHmTMicxu8s4QhkG2VzXAwbree9kEtqAKuGK9GGGstRLFb42AHrVpgvS7",
  "key40": "qidUsyEwT8ejY6X3vXBRQ9xnhA6PNRyoZjvMXhJmaWd2Rir1LbKE4Jp2UPQQqFQuWnN5uDEjuSoSgaV1CrXfNHY",
  "key41": "257No4R9xoeqLGjnm56LHr6EprznEGHBH27oQzr5j5PwzrtuQsM4c1nFgh6bbnHG8ZSzVrMgiufuXMquCJkWQt6K",
  "key42": "4oS2RsUyHxuhLbk8uTe1Lg6fR9bkGdaBkbrL8hHmJ5pPmayoRLtgq5jcJPLnu6LBn9JggKoSCNAQZWepXuwvT1qb",
  "key43": "5aFeaQtyaUgjAsJH9Hd7SrfPRiMe5ojuhasGeqqvhwryBYuTubwjNyrCbAp5QXYDeNAMnQMkibx36b6ra2BSMFkD",
  "key44": "FPA7nahLPvAsWLguMXjoYRn4hbrxNYBJU4Uwa3ZpZsHoNPEf2x5zHXNeAPR5QSmQV1fF1mubYr1sZYLgtLTe1dM",
  "key45": "2xHBP3WGszqQFdwyZincLb89Yn9Bz2uJFPmFrxUcBgngkymbd7LLVYN3khUbwdHFxrHNuKuzGiSFBcPeL8xi5Qhp",
  "key46": "2pR1ntpwNto1q8MpTJFmHUAjMUCB35Db3tFZ9kUWipUKqQ6SGfg7aTYCEkFWQLVPZzjX1fvNpxCwidBvrNzWsKyD"
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
