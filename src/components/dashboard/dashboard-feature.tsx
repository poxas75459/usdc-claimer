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
    "QH6Sc4ihJAehgip6ps3vV6QrdJFetkhgq8cmQzYEgQ5UGfQWmXCPz6PwPQagfB1JmUtcun8MEJY7Bq4K8hRbbXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33s3CcX1SEtnLYe5PcxCcasjm2RmeyobxNQYPgF9G5QMLAipAuueZT8sXHT6GKq5zkgqgP9sWwnHB4xna2orxxVo",
  "key1": "2TYQ5pRPwaRWMEpZqgruPnyjKdPoyA85CKR6sFDHJVx9WK637fXdG6CKLmQJ2fGQ4a6cWEoMqn4UHNmZccWAoUWP",
  "key2": "3nFrA7DSHTDpm2dNrco4Kw9vR3MDs7KyMCQLyBa2QT5Vu3afQSmNuUkCdiCLCUVJH24qwLiy4eSSd3u4NEe4myQp",
  "key3": "2hHN4ohP85sQRADzT5iBajmWJBpwsCvsbaLbZqJZ4NwWa3HrC6MBCgnyx5GxsZKMd58CtXZ16JSxKAZfr8ppdGQb",
  "key4": "vNz6mFdHfjEATM7k8z33e3FM1suhZrbqVNzpXDRtygZCeaBTam6CLfEk6DiAkPPFZjSbubTCxoHxrYQoT1RLCEs",
  "key5": "5WXUXQDY2pNEngNhD8vT53HSTuWGYhZqRyZPCkszZydP9t8TPcetkwEGaUe7AHqeUEZS15SnBSstXAm25qEtG7ZZ",
  "key6": "1iJSbvsnVwnHyHJAY2TivNkjBZi64oTSaZrdPEmyVVbRfVU8FmQH2jFw2vC3YTNnTaL2XtdUpjCHCgovtDPZbgz",
  "key7": "4gYeXxtGGLpvEhUECC9nabeUkSfns6gVG1VKmmQamU2SEEPqxMg6Uq7FJcbBqigimbQWocQUU9Kw2mfz7xnACfh9",
  "key8": "54KTWNiHYmjCsEz7qTBddWDSiL82pamypLGUKXvRR2Nke2TqFbnqKPhrs8C6me5bGUnxnhehrBmzQFhBqAqhVY6",
  "key9": "4Sn57bFSsanZXiBdtAWxoufYcd2yWe8hpP22YtmDGkPdZs4mHHPporNQPJagsNjgQMULzUqqr2dotoVS1iVUooB2",
  "key10": "64XHt9mzeEhRDnByFrP6aQwzU2Y773qdukkxNfRNYoGwKrz4MbaNhGZbcZ7L3dQ7K4HYoSn5K6xndBBgKah3KDVF",
  "key11": "554xzPbi4TwEzn9PQvmPRrvXJbrFkrhZ9qFJvseoxrt6XfNAENmoQnuwEAV1HsvG79dGhsLnQhFLhcXjcMDamDG3",
  "key12": "4nqnWLBthzdknMYConXW38tV6NRof88qqno55shkov2Vs9exscFqJmm9ngqjKDZUAz669iaiedctb1PAsHJtjtUN",
  "key13": "35wkH3Zt7cv9GFUpgxxDNqAtakasPNtqngFrhvTL3b2i4DLfSYYPFNkakYrWvkMJARZpRfPbQKu7GSaFAY7GVp7g",
  "key14": "5GeFDwjzRYjmzj2dwNxcAzZAsGa913S5sgaYVY2D9zLy29UV5RuwRduNPLpvCcLeHr4fDCBab12pNaecWEzhqPtX",
  "key15": "47YaKYm7ZSu87esDqhReubn7nKNMfCdC4JHyeykFpz4d7U6oBAG9w1eFsMqy6jkCa2gSoAf3oAirRQUKvzbwCqb",
  "key16": "iDvWS9e6gLKXx2oRjT17TxKMHy5noXdnW7UaKtC32rWoUbdPFFJius3aJPnZSScPSdPqvTC9wFmciMgZtoxkkud",
  "key17": "4jmypQmSgqRr1nDvPrpMM8vJphQaFEToqj1xJBgLC8NGMgaBe7xzVkV3AmYKwNJDbmE1r2uF8HAmhEtUkaDWusCZ",
  "key18": "RjoGQGyWUWqVurHMnC6yhRSg3jRwXMqWCm3xpBvU6gQfGu4DrmC1WRw7s9tCQW1sQK2dDJWfFpDej1LvpVRXwqG",
  "key19": "3uPn8AoPB9LSknUoYnfZ7eUkzTnVAT3debvvXkLX11zDnTdtEowjE9xaEycJpR8vwvxCLQDyQ2s2auDqGHoiFBGe",
  "key20": "5xtv1QBVmq7nHeuCg4pVyYEwVscUB9xCebFWa4ad2PLQNuBXhyQpysKDEPwG2MLnQ46LP2xfZ4DG8pHdAH7CZJ9N",
  "key21": "4b55BtK3zLLawyANLoLWB5q58xDD248Xo3QUtj4RWJaot9tTF6F3WDQKxX8hFC5yqdQhvK1rsGGbYzwtPBgVqcBf",
  "key22": "2v9XNCu9aiAQwPVMBdbp6RgyXzJ9AjAjSL7uZDQRALixASkVWMvnvUgbdJtpGyiebJHsAQrysef2Anjyr1G57vYK",
  "key23": "5VUCupkMZ2DxJR3vbTS4jygN7FVfJ2Dx15dWPMEieVyfhC1CTYsoVkYy8VftE9EvcUsfXevgeUH1Hr5nstiEqJ8u",
  "key24": "2RUjqAaFZ8U6uxbh256bgShTymRBjeCu7DrVqzSPUd5yNWVfgkQjg4zPQ2S81UTqsJTzERA6da6XJXeRkpgVnMx4",
  "key25": "2c3LmfFQqd2NXB8CosUBrPunGVVhCnW39H76PKBAKiJ5QiTRkgcoG2nhv5JtA8iwv7256qGbu3EXwpUJEkeAcRc",
  "key26": "5thCDTvwVy6CwHGjFR5pqkGAsBmNMM9J8XJmAHeHyzG6jVPSutj6RExVP9Lyc8gCuTRYPHbSmh9kFtgrfzxHNsLE",
  "key27": "79EJRvXYN8SeVXX2QmMKTcZq7vpSxBsFX9SDQPaN8N1FJ9x8EZxPgBJSjHdyxQzxX7i6kX99wV96fpGXuoKFKui",
  "key28": "2tknrmWXL3ZqvZzmDJgdQENccm2ovbZbvxvx3b9QR7Adc2P5Kkh22k79TPo3UTzRta7W4vGuC3T2DKssVrv3SR2L",
  "key29": "3cvB149H92yXkMBQSCX6N3U9cHB3PNLS497se16h4mxSBnCJxpkhVVVvtzfcLHqgGQTqu9Tzxt6DyL6dKgaUkNuq",
  "key30": "4QQXB2NU9tNELrDM1FhhmHFXPkkcTqG1CkV18ww2Av3upBbByJBXv2VJR2sxof4n2tNZEWijon32ZA4yRXG1Zd2w",
  "key31": "DAv98maVWERouBQVHvjmNmytSHEKBiBhTwn8v8Epyvwv8UBLE2vuVx2QKQChGWBNefkZijLHmy9piJ2o5pjkP8x",
  "key32": "8wnvB8yYHc7z6HLWM2LGSSuGPdgzdT3nKqwW9da9Yjw7SPUdbp4FhHU7m2BtR8yyQRg18xLLHBhfdDKLrZF8F5X",
  "key33": "3tXemfNEbxvwH5v3KpMokxbrSUNrJ7yRWm1bTVhHdRmYVFX5sqcxtrNPr9KfDRnw8a3YUFgR5kbyevFxZxNCNhNg",
  "key34": "Va611NtaXUBT5SkmcZgnqBWN1Yufhfb9VFf8wX2B5ZR3W7DtgJJUPH1k3R7ZzUS6ppNeMzDaDAJegsgEobnXt4W",
  "key35": "4K4yQiwaJrUxEDKTtnjhUiHmhgyQ6S4DtgYPwEpFhywt8VoV46sgDpB3of6dnJvwn5tkHyemtR9afLjt8iv15uGp",
  "key36": "jhiT5NAWa3V3tBfQisLYA63NeNCZuwyoaniiH8i5nyeozoVTe6gKV4yEAUhKvfiFiiUDsegTM6wXgq8NLVZZgSv",
  "key37": "5hiSrJ7LY8ij5PrHmZMAEiVRCrub1m172voZPRdMvH9pCH6dNPHiMg96w4wmzSj2sr82mbxGeksPfd348MBFf3Rh",
  "key38": "2ymKmiG1aaEWVizvCDWFhoNiiYFZXVWBfj2Eu6xqBXgqB9HUHjAuQu5ewNuK5EvyrU4qgEmEJD52kdowMvg91JQs"
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
