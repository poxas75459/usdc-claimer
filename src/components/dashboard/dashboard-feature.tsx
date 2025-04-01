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
    "snBPpgNVzMux9HjMZcDAuWqs1pgaMwejjrhYFzMxrYqtUyzwWHbwDtoARJgyAMMkBZyaN48GdZZN8MFLjS1D8Fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gcN7n9XRhWU95MeHHJjBGjzSgMYxgxpvFnkwNJ5rea3T3w8cNFXPmqg7SggFDqwJ7zfs7dPU2obnyhNDij8y46F",
  "key1": "qAjV6d1fXEo7yrykA1AtgiSohdpxsYrTxRs4uUSm14nbgfbiAD5C7vNg5NfJFrJYoksCCvrDUXrse18FG6wqXRr",
  "key2": "2yNgGaJpTi7fGUoxcq9Bbm3A9X6rTfHeVeSmJDYUD93p9NARayuLaB4SSCSkQjd9GWetB4cEP8HEPKdkf8hLN1Qj",
  "key3": "4HZHsnMA3eAJbVCgdq2VeBjJNyzwyufbn5kN7aKF6kzawM1p2MWaNyTLGRwp2LaSjidPe8cQJrRt6NNFDknRF7Yo",
  "key4": "2noaDmfRf4r895a7AXFLQ87hDkBGMwVB6bWivXzE68Sw8hxyuoEA3rj7qZaeUevkdHrnmFmBjvH3DE8vkPu1rQA",
  "key5": "PambhSUZWJ2ta8EfsmFtuvc4trexrS5SH8dphubh46dXZG7KXSwvALpUgqiDnT8WkAZkVcHLc6n9Squ5pRZpZKt",
  "key6": "4cc1gpciBo4YVo5Kwyj5pPcSBiF9CtR89FsDFe6QvaKwaQ6ABHhUWtzHcqVfzqpfBPaHKCyYQhUkuufkdxwhqS99",
  "key7": "529uq5d54EynHmdyzWDyBp7nwygYhHso92V1HxkKkMvumL6YcBbev7LSnTyewkZowoFc3kw4tyWXL1Bqh8iMDoBU",
  "key8": "3mMeDGPEcPLXxbXM38ijVVVVraEngnDKw1QJd2eBqSgeXtDartx9WCumMrusRzTJNFt6SxtPKG6m6QMW7VU291od",
  "key9": "4PHPVMjfeYEhEw8hBTrMVZBwZKv8SDCZpDpz9Mnek8nmdxZem7JFSPRWEYf6tmJngBmz2AHpwejaLLCxTAwLnsAv",
  "key10": "3FbydvbU7FRYRsUBnQAV2GoSMey19sfHpYkkX1uZewggkSMhFKvST5z4kcFU59YdLnKdTv8ZD8pqaPJawMRtFVAu",
  "key11": "2yzH97sBAZg7ZYzxUbP2WCEQnpbzeY6cTZRkW8LUYBNKUU9XQAhKnSRNn8utnW7fvvGyUBwZbJNk1RL1nxQkUj58",
  "key12": "4CyJTvSj5JqJbxrpaf8F27WnmwPwfU8E5cGP1GgFSWTZHpyumPtWurr5rKtDaDZbGdbyn16yBMs7f1st838DSf4u",
  "key13": "3hpEiWW9EeF1y54Dkc2gDPhuCdPa4BR5WGDSyYTQt7DPBN3zzVhWs63obxq3uAFbG6H6dHfcU9vphNwVa9jPJUfH",
  "key14": "pjhBUq8JEAbdEU57Te1dTuQZrpDADraaCU59VaLf3Skx2cLyHfNqvuZCT7MQ8z3oCh3Js5XdBHgwHB2RYoUvd3E",
  "key15": "WCVfYxG6DJM1bj6SF2hkymWJtXpcCK6HNDEuNsy6Wxa8fxaVZJJcNLra7MNfRFBAYXW6rxYa8p32GQYz8G54mes",
  "key16": "3wvP7k6AeDULrc7KtdiaYjtUCATz6z5rB6P3D7pFfGBZj4NUS4Ytc8b5Z9Lbkf5vnRkghRTu2HNXYfYwmrg7apbc",
  "key17": "RSKwoc1fGXcS3EpV66abkAaiSWxhKvEYSf7SB7YJssJzGTdbaQbtqyXTL9za8eVch7mXySx2dxYQfp6jT76u6Zy",
  "key18": "2mMiJ9SKrEKKY9JMfsUmrx5WyBJVjwc7WbtbJBBiGbCv1UTtTfFh3Ad3BGntiZX1mswEtuJS6yQR3XYcoWrxvc2h",
  "key19": "5MNdPWJ6EE75o3ceYkgHJp5TcDGMkz95oaNoBGAGi8E1DheMg1o4dhoee8rP8zsGHxGNxJec6rXbQCUhoMtpdbRK",
  "key20": "3XCbneTFD8kJE8MMSCmnGL1LMHnHyCf66Qeo3p27mpJstSWjwDkYQPfSLZRLHdbGiAPLXQZABYaAtmSueW4mMMSL",
  "key21": "4gK3jWjYqGoGWn2v49nfw2dHmEYfpgn5LDaLAGN3WbJKF6de5KACSdF5dmqEK4vT5fMj79oUP7R4svkfKSySJ9yF",
  "key22": "5hLDAygwvF7sdPwaX9Y5UgNwHABejPxFW57eQrGQd5yGtMJkrPJK2Ui9kDMLMHKBLpD1ePX4Takq2CqyRyN7ysK2",
  "key23": "3RrwdWeezxCE4ytRsu1WrNfuwNuUMZJfRLpGAwBB2nvs9vPQ6aZLxA6ftQL5vJG3ogXjt54YHmkiEzCqoJtdxFSS",
  "key24": "3Na3ukfHjzuB7mY7cAX5gou7eC3RxLt5Z7dp8rQcpqrr2u3pcjv16CQHEDPK4GKqw8qxax3z7BPgeFzha7RYybrE",
  "key25": "2LJGA2dTWxdua1TpeB4jXJa1zo5kRSvmNznHBbBcyWGhUCoYpM2FfruKkTovio1xYKhpiM9tyGPvTKQzwJStzNoB",
  "key26": "2gUxybwMGCrHyC5tu3TJ73NAmmzsdZjn7Re1VZ6sFo4Jj9hyjYMcTuDSpKYjEVfWyMyoUr6fQCSfN9WjS27Gsdt9",
  "key27": "5eN9Zsa4G8kWUU2BBenUK6iuQHwxoxFXgYSDt4iwFXMPWf2dhn8gZ2sD9PopKXZDRiXEwPdHMruzbsPJSSRRx8fP",
  "key28": "2F12SHAo7BUczhLRPYf9MUbH3ebPGPYtGaRZZeDmod7oLdomarFEMdRyRmhQSH67CLkmPaenoMCMuFBfM4kqEb3G",
  "key29": "2rtR1ok7raGXTRERaE9azUuS6vYvgAAngbpvxtFppXXDJ3pDjJF3fmQRkqNuca5R1qpYMXncPh842syPn7VNxnZf",
  "key30": "ugUoc8ZuvcTo7rfxmLeduxQdUhYNQ4nWYyzFBtcbGM2BV7UhXiHPE2hzvKM9pgmdJbbrW3a8UXJKDpTjpJ27Kyr",
  "key31": "3kw1uufAqfXj3BMFzLravwQ1YQFBi8xhJLMj1mLG3hPhpc5hnDxZYHXsUcofnYZqXLUkVJpaUdfu3WaPsJyTbKrS",
  "key32": "5yqkiFo8KLdMdrETWpnvMHCHyYiHxNyBNxynpiuN4Pyu6CuPPEFobUZxRtPTaoU2BBmMkvAV7WaCxiAYFgFiKurN",
  "key33": "2N3DkN71V3J6FU5drorXdRMmFZReGigWAWewarBacs42kBAB3pkzj48jwsS8LA2bszanfra2nhmv7vASsmxWUMix"
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
