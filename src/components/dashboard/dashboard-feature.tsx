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
    "2y1EzNdiYijgGu3FWbGkKQzMAzU1xCUjjnHd6Zhoy2sfmGMAhw2XF5RasV7XjsUSRVy5SMioqwAMdYmSTQfNoDou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "19Y1ewJ93bufmrRVGsoSPihS9u4uh92uwcnm7C9FKqt7r9s9ffMmvZK88cuT83CBcLteuMJYAWmzjEU9Ewj7MpQ",
  "key1": "3gNvRtJ9b5DaCRGdBW2v9kQ4bhekJFZeBwht36nM1Zy3wDHPh1bT9JsX4FJpS2Goi7knRy26YGdamqNuyWpX3bQG",
  "key2": "39unHMkNJY8NxTD1GwJHzuuMrnUjcWUWDHZeY6gqP3vRwS94oLSoTL9qdKQoAcnN4QsRkc2dndwWKmWNHfkpcg2i",
  "key3": "5u24U6t9RqZR3U5Zs83dj2r2jEKYB5vuPbjZ65tb6EEf3hCNbW8WxRKtMK1zFvynv4vAf832cFysx8VBMhD8vuum",
  "key4": "41mpTa2pfZahxCxxbnwpowE5PhCuNg9gkGWKBPX7QqemsKHtwWC6Hy1aCmvvPSNnQ8i9jzhCdW7tEG4tqgXFt9fG",
  "key5": "4rxmENWhrgh972hYVrA4S5TyGWVnoYxKVfLb9SZQtHXfy7PkkhTrDtjjLfCFyySC6ay8Hgin1W5Z9J135v8Eu94Q",
  "key6": "5PdikLBe58nUEks9VDStkrdU6QmG3wTrWjUHRyG58BGXfKnV3cP8DVxU4xouhCMLmKbarsWesBBay4ZMF1fPABHV",
  "key7": "HvySg2zPGq2UnS2LTpvmGdXSykp4hJkiW1nGdNDHjY7J89WJz1m2MjqpZzPjzjCfTzv21oGyD5kp8tosmpCdmau",
  "key8": "2fq2kz1CYV2mJ5f37BkUYK8kxPcHEtUs2mrpW9GN9BdAAAtxY3LS4992VbLe5JH6omHvwPLiqHCGAereXymUYmXA",
  "key9": "4drBd4Ry9gzEyeGAot2jF6WeM9AethGavAU2C6nNyYR64xLAkF4VSMM1v977TEVbcdT67oyo9EjJEUrNVXHnrytV",
  "key10": "81Vu5MJGMmxHvsHSk4Kpb5yw3ZSgXHCnBqQLExa7Vuk68s56hNtUiyxeKzfdJKa3VZJsoR3TxF1nkQGzQa9WCc8",
  "key11": "3XuMNbqgSmJkYuCWejcr8EqGQtH65fjTfD1AXuugpd2bF393Tf9Yk7Z3nBxJG6Tz7CQQ1U8JUuieDJmEovGQtCy9",
  "key12": "5WwYDmAutpYGTKfGEbADDadRMzcCLWpkHpisRXtfPMqhFZ6ZHdbBifFxzR45S6SSRUaqRSo8Ecx7QvwbvASGFGsq",
  "key13": "5EsWqJFeoZRZosNekPCJmcBAws6b4mGa6MWiV6Q9sahd1rEhMPE8DDNoHVarCjYRk7KwBre89h3K6vUtt2kvoVbM",
  "key14": "3x73afaMbcChZaMzJxX7v8g58Mj2FfeNUwNaqs7mci4hraWxxxWe5DDHh8Fu5zKVHsqqNMMGkYSW14sSF4BE62ky",
  "key15": "2UdvRmuYJkt6VV3qzaLNLKU1uFrkEM3SZVhzWtMxGiz1X45yZCmGREZvWLF5LeSkvsfaiYpRMwBHRxCUpxwHWbg2",
  "key16": "4nM4dPnHuA7DyszRTNdhXdsusL7Mmvykqeqpo8CHAVPkGgFfdQQrk4PbkdkEiud8jNtLWixyDN7iu9FDKHovJen",
  "key17": "5eUVEpyhGXVTbJ9MuwXSvxdURGAJnPkmXgQYmbEvJgW6cF2gfw85pCTNZ8gvjUBQvRm1z4LkQTzeuc9PfyLjgXH2",
  "key18": "37Mee7fiqZXZWuJ71UNbr8BhE5A6gAbqEFDTdqUfp3bxrWe4Ppo29L3LHm4gcppFHZz3Ls61M65Xe1zcWQoKet1x",
  "key19": "3Jeskj6oRcf6yg2d3DQKXbozvHdpPU5DE6CQEQVhkbiscrNH1RWyngJM96J8PBULQN5SYrvemzMVYSGxGSs857Sk",
  "key20": "2vtSJtrF4ihc5ZE4DgDPsCxwZNgbeDgETr965RzKBwk6cbAyHY7AropW98joyqPwXwbGRz4M1NkaQwvqVLKZDThr",
  "key21": "3t2b7NrkDjpLxc7VN98YsR8MR79Eb2whS3bSu4ZcGdBkFPPgodGjmp7DJT8TgMuJtKyugDoQn1GHxakpWVdBhCaF",
  "key22": "2HueLg8rRt58yqM8SyMLAW2WNVQZb3rGyHvQUSr5MZb3ZhV9q51yenyukJZiuu7AWa2MMTyXWTBjtMbeawciheWR",
  "key23": "qkxdSFdhUFYKPKGLaMcqKknCXfxqrvs9CbUrst3hCn5kNBwYAPp7o8ia4wtYBSHyvGUEWCxUrsPS1nNaeFJez9k",
  "key24": "4B9sZ4bXzxYF1nRrrPQ3bcwhGef8F8mwnatreva7hnBg7ESX6gGWfyQ537rm3jfivnNKZNhTb8qWT5iUwwxsX4S5",
  "key25": "4YjTDDkwNaSUHrH92PLfsYh77w37bGt6vEFmASMaRkJRNkGd9KTVys933KwjYapW8Gp1YuPxr3FhEvdPwZkjXLYE",
  "key26": "5an3bw5vh9BpM6WXKqAGAfB3wpyDFU4BrG3bQUD9Rrf33LnZL3qXMA5PC6yTGD5w5xYhVr2jEtsQydietJ9oFWDc",
  "key27": "KXHfzdLVrfnCJty7rvg2LJS1NDVgZwREcdwfJCwmEK3L6SJqkqGo38rAqWwKQtutgdANJFjSxuWJPThJG4JGgCz",
  "key28": "56Sbkv5rGGyetb5PZ4ez5ewpZpiNxm8pHakhAu2CZLzPcSEnSMR7YEqMCxd2GLYmwEZkameCNNw2q5aWWQn296Td",
  "key29": "5beR1yTyFjyLrCQ1qajswoD5qE6SgjxMr977qSE4DkRg4W7GtkGuKeTGjEYzBfqZJQGnKu5FxpSmzKMJ41GFwsmq",
  "key30": "4Tg8J5mykWNbRXodyH3GFawKLtm9zrDXpjCnughQEsPiwpBfyGrP5fhHSGTJraVS5te3sEY4sHw2QmPW6dBFT8Tu",
  "key31": "4jbsxzDm1oicBwX3s4hmVraKHan9Uqhw7PBpPRCE8JBWraucstD73PdhAXm9FtVq4Dbkhk8LLNnNa14KUmc1cgX2",
  "key32": "PQnM63NFdZ6gaU7ZVVu53ck9jNzz7y6m8Zb935BpffkyvHDJAe1aHmEvCi9fb4LZmyNntTSaRsdFNo7MjSYxwJa",
  "key33": "5QaD5VQJfWTxpWiaFXvB24Y6mr4yNQ9czdso7oA9CbUa8HgjMbr32HW8ednHseXxQ1hNXFEdAshnhvQbCqRdHWQG",
  "key34": "5iLry2359u47mMCSn5djit4NVkAGSt9J25PMQGCYbYCcKCRxTgBbmcTdzZxw2dNcwxLMin8zREd9zjanm9j8iCzq",
  "key35": "3m654fpdiHR2f9rnPwQq5FpwfiMiNh56BKVKeUMvMQknKXqGR3tmXkfStLvWj7HxEz9QchZ1nbLWqimTV34AVG9n",
  "key36": "2NCkdCJcE3GxKsJLf534Udc1uJFaaxoDPo8M2VohSWfYVKYw2mrT8zjUuN8Tdwa5ifCamKF46Xeu2eEMg3S6ALYB",
  "key37": "xtsGCtdmUdVM1hJzk1eikt39Lr4gcQebyd9c85zjJ3U4BouLg45rnaco38PDEYCzrW4VTGrsfa6tvp8NpjMXXWb",
  "key38": "37wfMJ463DwN9VZmcqqyPiKkLVnVNvj5G5ZJefgGjqxykvdRoZ9LUtYsZr8RrQeH1ws3fiHLiqv7iQPMKCRoThQk",
  "key39": "2qKx3DDwBvhQX9tsKhw8YntFxhUXRbj2CZbQ3MK6WnX3EoePnAQgXSkgaHrG8V4LR8yrcZ9REtgdehudW5KbWw1P",
  "key40": "5xouzouiekQvcjNLvaMUBFV9TXcqHYXUrwfZkva67w6tkP9oo7wTrjkKyxaN1bRLEQCSZbEwQrSC2WVK5pYQDceV",
  "key41": "5QWvhWSr8EgbBR71uZyqJgstoKuWG3LEGhpvyTmA1ZwT3Tt71WGoEwjCaPkMFfihN4RSYyq3hzgiB3JixsXJyFyy",
  "key42": "52H791GxkHyN86A5Hg2yG4u7ejsgFQQg9owbk8EWpo1msg6AD2eh7sDJhwaPw6xo7i635hCFuAxEn3KeC4TbbWDd",
  "key43": "4FSmJ379FECtqgNBGtwmnhFBBHzVo5CLfnK2t6aCDzpCZXj1G8iqftvyLsWSftb64ZYSsNrohdgvCJEpdGRgzzJx",
  "key44": "63v6zrJA6Yw9p6RQGiH8Vc6A5v2eGXTc2aNnzXWq7pswde9K9qRtoEYW4ecThJ3Q6ZTtATA3mvECHYD8va6vZJBz",
  "key45": "3nebPzTphAU7AEiY4nfnBd4asHuHTUcEqTnNvrhjd5X1XvEkgb1JVeHDqKAE5yCe5Mjg4q4cV11CV1grkXnWnkJk"
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
