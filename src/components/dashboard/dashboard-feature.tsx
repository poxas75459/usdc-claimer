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
    "1tARKvQVe4ELEqF5Rob7bwrJBCYUDwMR7U2mzeNfreTpZZUQwbzhSo127pvmxJX7bxDsYMpQbgyFCwUssEBgoXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CGoVuTTU6BQVg5L8UFAUu2zJtKmb23mEwUydtiEJtPy1k2Jcqkkq3zaZ73uwvsUdTAjtfCVQoVYMmCNSeNM1F1R",
  "key1": "x87Zq7VQTttTooFU9cqUnZtcjEX81H1E8HiZaZcDxcTxwyNEWi8R27RAKr5LP1RiEv85NTt9wty2fTWZy4ZcquE",
  "key2": "5ckF65omUmPNyzKopoV4MofCazPX7XF55a78V5s6J6G6Zir3FH966JEB5CbhxE4sWJ8EiA2KwxjmSzaXd2QP72dg",
  "key3": "2RKCMV9fqU9xcztV86N6JjVFsQnq8o38Hod1rfcFF9DyuxJMpMERCnxsFuN1LTG9NeLhB4hJseCM6i19NBwwZo5f",
  "key4": "5iNTPz8hz6qmLjVrSZNXinEP1fpxNgPBKrzmguwqHhzdA1R7AhxztVLnTcD8hrHBWzE7VBquoF6iJLMftv3xbnCA",
  "key5": "28VkC2kuWc2YEuwmin4swMNDLvPwiJYJaVy9sSmS2gN3qdk31ugcbRDonTZVr8xVg9neWazGRV6xnmEZ3gSF75St",
  "key6": "5MZX21HGhUBK2ZU3J9BPaUgnNG2VmdqHWuQtExRnS6KVzmGkSxtUcS4bW5E4D7QQv428swJPnZ4CwtGjFvys8c2b",
  "key7": "3jMK8ckwizrEJL1NZenXEuVimyEq6eHhLVgnC7KJbwJxws6gEq38ty21CU4vbEM8z2Wwsd2FAyR1NmvRCGNzkpmP",
  "key8": "58CaF6x1bWMDqTn81TUceLbJryzCMrKBZzVGxNXWT4bqteFWZt1nv9mgaUuvboBXJf6CPtgEKe8uWFd4WYaKDiwa",
  "key9": "4pbWLjC3S5BnZtZSBfSQUmxe3vJTq5ssUGGYHU7EXkFasnH7uKUavK3UoBwTzxu1YDuMagxcxPhCBYEX7ZzfhDhs",
  "key10": "4DCfj4YSJ1uT8k4z7KFoHf1fai6sJQb39SMStWeEKrMnUSbmRawZUYapKQFXK2rkfT8LYZVzJT4DWWnhPjUX8g33",
  "key11": "YdLFWuH63j9kFkeAw1CQF1vryfW69cU87fhGJsunX9gC8mfTAY5w3AwAredTmZRZpemx5DH9H1csbzVWckmGD6z",
  "key12": "3WX5wZgrNHMSu89V3bpUwzfHoLSg2n14YgrTQmFY7aLzgt1ELD9BLk7CEaXrGMWxed4tdEd17Qh3sLKYRoKMCoPL",
  "key13": "2GmvJBny8tuyXduzX6fZU5aEqp7HCwAANeRN4LCsZDJwEBGWt7qTk8eeWvahsNwYkXL8zfoWs9aUQ5qBSmawPyE2",
  "key14": "5VjenBuBwvhehofvZ2b8pvv9ngHgkqP1Yh8tc74VzvxnjhtkZpKZk8T1T676rsuYGNZvjStrMJCSpMHsJBfB8UuS",
  "key15": "2HZ2CN5qrvft7L8ubJHhbEGpkeHrXxx3R3BbHxndouG6zX85zRmwoKb2uAP1SQ7uTnpZDDx14zTNnESUwT2QEdAn",
  "key16": "3zTnG8Nqt1FhrqKf7WsNt4NysPp61qzHpjUvRfisiPY9C7XYEMJELN3cxCPfPXcLZyPNgrohS9yj1c5F4ygetA81",
  "key17": "4L1DSYg95NFtiAvxu4okgm298FqnHgML5wSuuSJEgy63sQDX3KM8Crz58sfBfRKJm2XNs7yq9aMLYVMSVWW4Lqfh",
  "key18": "473TZHSgSunppgJ8MEi5mbHMhJVSRv9FAuPdq8XeqDHcLwra1jjhv1H91SAaqoik2e2ZRMvzJPikXxvdg38QnZSn",
  "key19": "5yoPffwv3BYnRGyLjoUtvnCQTH64bo82KBaQMEtNXCTDKP1iysJjFLSDndzEE1VveBkkdF8omRykLFc5AhgmFnCB",
  "key20": "2q8SKNmRgLa6GYqWovwUdevKDfbF53VXy8FSarsPV9upo1UFq38xY53hqgaASRKyPfpocH27PrXUhxkVvHVzJCYp",
  "key21": "31SKNis1dgWgo6BKALr4G2ReN5JPbXaCYFqdTUUZbLURScqrGhsqL2woGdUC57comLg3X4BoagJKwf7EhisHBvjb",
  "key22": "59yVf349voNaZrdrxbybzYCB1vLSujedKg67UgnDNW6haZzqGQtquRCczXve3yT3j5A5FiSooiyHbzCK4tANmZCt",
  "key23": "2WFs25wykgECPJKsoFWRLY68H2WKcDxhFbYgEJgdSs44dAQ1v1nPAYThGHggKoF4mxThRvrEzk6yMy6SeRZEUGUe",
  "key24": "2yggLTGsX4v4obx5qUtmMHdNemut48XgvwfsnZzxK6RbRRcPhMVfcYGCHUobmAfWpJ3r9RmCQm31ABX3YCrXY7KP",
  "key25": "5B7rHawVtxsBQLXu4nZtqsdzA1jFBjACqrd3W68SVvAkVgDMSYeCKyqa2ZqWzELtU1wSDtY7QpLxhSU8RtyVaQXR",
  "key26": "5GwrbD2ZER1vo4cf2SG4wqvHaVzo43QGb1Tpx1v43GhKKSs3Au7JExjL69ZJdShhbsZg9bp1p4Lqz42K9U9pK4cC",
  "key27": "63dfKDZKPgVVbSiR58dJE3RjD6qm3JEVrE4VhzA1Fhw3CDp4uXJrYVfJwQw78pqSvgN675wFMXCLEB31W8hTMzhz",
  "key28": "4zixM3xUvyvZP7Vz942fmL7SqzHR7fXH9g84yr38DUr4dXaszBMP6KLdDpL1qr2toCBL5QYys6HCAyj8a4QU66BE",
  "key29": "5Hj1J6K9Ta6HyN7m1uYCP13kCDVT7JEjEouiNPxP9gz2Gj84Bxet4uLyZ4mfjYPGpNPhnzTxdAB1vZZf2RPd9izQ",
  "key30": "4mDYYsSwHax1omjzHvgU5x2L8c2CsQkgMCK17uefMmdKMUtVS1rdSyU6Wk7A3mA95XQPqGEfxF18YkgLvmPUXgDt",
  "key31": "oN4yV7pPQN7vVc1xxtBKq17RQQh2kFfnb6Eb3izLJRKiTuvEhztYFyvYCYu66b8n6UPzEAYHyRFHmNnvGWFMa3p",
  "key32": "nRo4VEhhpK2xGAWwBtZXDd3fktHbfJ4F1NNFAiqadHbwSBLXBNyp95anCe9Qc3MRfZceDVT66ucUTuA5WYRSKjN",
  "key33": "kBZZ3rYM5hb9MUFhdrKfh8iH4iyrdL57uq5jrqipCYdLPUzPKNieocoQBiKV24GNUVXHmooh48YLRjgNEhYAP7Z",
  "key34": "4EX8xH57TNqJUSXJzUVx44XdQJbBXbuHdX1eBKm2jvSMAoCsjqJNs8aTon9UQ41sYkkQZXhvkCExx1xNMZjQMhD3",
  "key35": "2sPU9VUT4LEFP8amwNJfWwAUpUVkPEs1G24VPZb1tyyNsmS9AaPcveZgsXrjihU2GNFRDxLCJfUhohBLaYsrEhBs",
  "key36": "2vHJjRkfxb8GTVijNyBe6Y5Su2xBtwJ4UggYsvsgCmurjKakGEEjp9YNpmWV6W9MZfTwFoxn7JLyLdqwMFFmHyko",
  "key37": "3tTPNiygPGdf5R4nBBZBEhkjqBt7dDXFJfHU3iSt86hat4gP1PBjDRyDztM1CBUYjcQ9TL5m4DtArmoJj6N5tKGB"
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
