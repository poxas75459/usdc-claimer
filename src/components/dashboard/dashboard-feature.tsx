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
    "Dgzd7gWJfaGhHdza8sPWDT5ffpdQrchujJ7tEw9YpyJcD2ALTktjAUbMPsVgKfkEubG65t9td94vvfJLLT1wjzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "368SL1MXDXScWoXN9QqWo64qzC2WTBjTSuU97q2zHHonG3jjypany1eNuEh56ELGdtVv2T9WiZDbhXNNnySnPkPp",
  "key1": "dDXYom7SPJR8gcUuDG1Q9r8EQ52fhAcgG7m4aaGbXwvccSh14r559Azm9vq3WSxiwwxcVV9BGifh4etNVxPY78F",
  "key2": "5EdMBycwXCzTxb9H6SgBxNLr5GgRfGJTjXMpWzGg6r6YFa2oMZGwLVuFWFZVgzHpo1PH2yxeKmeT5YZ9SkCEakfw",
  "key3": "33vr5YWD3wRe4koGuhsH6NHwGDHkhgbqvwP938PP2rrkKpYhzQre8z8jYSynfnHbqmh5z1t9pQNzA8CV4gZrdw2F",
  "key4": "YpFSs8DikamR32qGW3h65U9DebF6DZdiaQELr22hVnRWMBCgS4hV2xcNEEb5DWTD6mzt9VbX4Woxk3wwbd3KKML",
  "key5": "3n91tgESGwRhkrSmYbWDvedarM9krzJ4zGTPPWLoksnH248D3mE4ahkjWYMt9hcdffB2zUYXVJMa6LrGsdx8negx",
  "key6": "4fVCLQKhtJbBN2rotutLNtJPBwFYq6p16Fs3Q6CTzmbc6AuvcowXnqv51Ztnp339fbAiLv9PsSoGXbsCiuxsFB7C",
  "key7": "4XPoZqYBqUnhxVW84gczj8wAULNDqg1V9wMk23fZeqhFxC4uxhLUMrC1yXtx3JNhaTciHDgQTHESyLRBVumtefcW",
  "key8": "21erxpvkmeaivwqpwd23rinAUVsRdPto4tuvEzuTFTGRo98fQEv1Ygj7Wd41e2N3YZ732Kws25fHCsunfTAKZvUY",
  "key9": "4qTesjkX2KNuTEK4xm7cYWGAnxj94Btjq4MwapiiuL4Fbn86X1TXUxVCkDAxhmHsqNW5CjqyFwWRMNX5D7pWZYuD",
  "key10": "5J7e3FfAHbGTyGhmxsncn1Vo6VYwQDE9nQ74P3JGrhyoskPZfVF74kRZ5pb2TdqgmX56htTM65WUQ1b9ufDZ1SSb",
  "key11": "2zhWnrQDuRkEF2FmMKn6o2Fm9VmDJ2SDdcjWpZhHEsWtz8Um7SkjBwZLXSnYeZxRWv7XRBXA7g3DgEVxb7M6wfcD",
  "key12": "biaxR55bvdiQTzD9UikDqAAP5FNqjqbzdQd6VPrhi1z4yZbHAJUDmhmt2QNhBmqFpyfJYKgbHrQJjrqQkviefbE",
  "key13": "4Ku89cktg7SkAoVH6s2tEyLPKsDTFhZbLbxG9jVKGpEUpmpuZsJu2oJ6g9UZN3CWoZWBYQWWpDjGjnoLY27h4q4y",
  "key14": "3qKva35ZnhPfo4xSGSf4CjBnwW2BgdQYoTeVJ5gcyCU2fUmQ5EZBUWE952tQQTvfaEHLD1XihK27yqGVbMY9vgr6",
  "key15": "3MA9NiuQK1DbehgeQHdnJEs4U361N1ZZexU294hVjaPWqZBtVhXxPLxQuwb7q7CafcJtj96o79sXUGZT7SBRXomC",
  "key16": "5NV88K3FmFWE8UyNkguzH1dQ1ESCkXRUe2Ya5wLaFMMY2N2PaHK4ecRscTDszcxyQZWJUA9BPkWyDn8cFDV1wgUt",
  "key17": "2CKaQRGN4QhMXPhpuZCgHzAmhBJR4Qd9HW5FKa3PPhx3J5Z6iabaPbNVehQ1dtt8hg4GXAUsfpKVDqev5qWF3o9T",
  "key18": "5BTppHBpxJtzpfcPTMBe52ZYrvNaMfsdTBorCHYpa94uU8nDYmJdbRt2WmVgwrgLYmNNtWEbrsvbqgY73CWqRJ5d",
  "key19": "4tGkfWw5LkduBKHkUFvzNmXsTtUSNXemjQwg1b1xsppFN7r4p95MoHFiaZZkQwTwmqmUCzZ1oo8x2iUihLz3hrw2",
  "key20": "3QrumLn2Jb9PaD6wapuBctFnL3snMs2Q2anvJt8zUGaGrRZqGfUGWCLrDTU64Hx4oAqc4g3xtiSAMuSTj5jrtgXc",
  "key21": "2gWAKcvLjGQrkZxdKs4THDQrTyoezhwVd3GiTB4voTwrpMfr4g7Ggt2gqRiQuwKtK1mN7a7bGjDXpGg9cxm15uir",
  "key22": "3zrVQA1irTYUCvg7SteuEzyRbsUHqSBrAe9oGZ7z16QocJgYAuEjJTSndprAcEgwX9XqBGDdWrvsQhPp2vwdMDHZ",
  "key23": "4ab1FLKhvMXgsokHMYWpek1K1kGDcTUNoVdG1LAkZMokEnCrYoZCwPPHwJArDab3o4bqubh8Z5FrWxSQU6aRrEMK",
  "key24": "5oFAWTMmLWwzZ1kqxbjY7Wx4J5gETBZaxPNWpAEcugaqJpX7ddWUpJmL7BhuCMqtPQfWmhbfzCvxW39Rw5qtgjnw",
  "key25": "2kiuY8UwBRYuXam1ynivzPbdbkt8LyGE5FyQcgS8D948iDf8TWUCCnkDqLrfiFHuXfHo9sYjgNcctbSxmzmJi7BT",
  "key26": "3fHpGbcgvrMfEStM2edQSkUeK4bhRuCCwKdXHiuReyv8zjjMZtPQTgYrA25HQVSf3EHAYU4R5RNgLjCHFEq4ytvd",
  "key27": "3kjqkw2WvKYoNgwadyNZaPQBWex9gCujVxjSoZyzD1tjdrkDshu92vn6z4YoZE99ZgwpkqYGSQbmg2kPTDTRyiYc",
  "key28": "3pf3jqzhCf3MnktkvutY3ECTA2xoKBTQZN2qLBP5dA2RGjQCYSxjixhgRqNSoNmLuhjsGfh5M24v9qyjMoqTFe1b",
  "key29": "3uwsdfs8iYLFn6ckEcS6xYeULcKF4nGwNKdjtaESp85g3bY7sxehGYGR8ypZfF57d6F4b8Bz9gEQ45MWew2Da2vX",
  "key30": "STvdT64c5kEcYKYKhwmZptsWfXyf2s6XAJVnRVUSAMyFVp8W1hL5dDzk6b8k7BySFfoobG58tde5tHCVgnLUhe3",
  "key31": "2926nfQU1JTvdyN2xHDqjncTQFLj6W7nWSLqorJKo1biWxCQ6kSsYJVHFDpzPo8zJE8ALdCLtL7vtPCComUKScPL",
  "key32": "2sPeV2UaPb76rVitqpoc8ZqEtedcYPWe2VcQCkvLgQrRXo514PuQzMw8gg6nAUcTCoYr7ro2pziqA3ioXXu58gQD",
  "key33": "2kD52HENXLV4xaU2AcaV2XHTV2LwbKGBPTvH1bC8KtqGBRfP6UjfF6Kq5uf6zZzmSaSEwjyAFxATmaNKxbaEyRK1",
  "key34": "4T9iELqp8ngw2A3YBfr6d4fCguKN34SzK2tstE5szphaRxvGnuEmhBrRNz2WKYNUYP5XdWuCgncJzDdNLkoxm3hV",
  "key35": "2B4cL1gZ2at6wqpaRNMNYRrexpSVdenKqU3VJKU7YmfcoEfZyMvTqtx398re6rvzgSNwK5cDUmPnkR4PZh2LA2bd",
  "key36": "1J7PHQ41YvXyPzyVnNTSvDaCHTpRiPnxdo8m5hC2vc8dy3qBmgQwBszn6RDhweo1LArsrcLMj453vjeEDQxdmTY",
  "key37": "38D8e9ShYRRfrDdQ9LH8yaeWgt2adQ5FGYvHbx57bGeGDLAqGWaTFTsPk7vPNRYUnVLthkGC4f8ArHDMd9s4vi2E",
  "key38": "3iL9cDpTW7xXaAznmkEb1Y1DZr8ZuxjK3MSfTxjQadMYNXWZe72BJ5ay57U24t4wqSAjVx9RpmoXpworBEQsXGiv",
  "key39": "2RpSvZh7xZxRtZP84AvMxT3jsaccqGFkynXFrcXf8uAqx6huUxJh2MCnZ9PDAH37sjgUNBk4rLsCcFBSC5HWcv81",
  "key40": "37gReutT3pJFvDXffAFfiMwMdoscJvNvFKUS9ULNsDfC1hjLVdUv4KtniH2qw78sPh5sh4pP5dHm34SD2opWHPkC",
  "key41": "3s9RgJakPpzU4Uq3fkQtKhQkDX9TrWDnj14cj9v9dK3PoihTaskPZ3hTifTRi41bvGH2GzKKfnFuPk9afui5pbyR"
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
