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
    "budzpAN8nYJEEbJkETfrUHnMgCpTJYTFrCq78z5SFoqQhWZVyTcK7oQasYgRKPHMuAH6fMqRLdQAtLXtNujSzBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Xtc32W3qcMyALcq7Q4kSbAkV4YvC7T1kMCyh7PoYwtfK3bLWbs5bFkNVa7VwDvGNaQzS39xRuti1QroerEk9XV",
  "key1": "3HodYPTK2gB6b5EiCG5RDs3FqqovXidbjjBo8SfU2g5GH19JCLHLLpiTWcNDxA5aLsKVzJQtX572bwjPfMEVLdcE",
  "key2": "3ovNER8Z2ybJPDUMviL7tiQaRCzCaQDbGhXfCzi4xCQ4sBMvCFXLbrFAhn9wDaEszgmSGBDBBnJyFWQqQ9JM7fN2",
  "key3": "41dmHsV2ZGYotjATJSk1yyzojmA9fyTzCcH1d85GsBpMKUEMbeUU1MJrJYzQoWUYnu3EJygNayd8EsdaMCvsYy1h",
  "key4": "4iojQSMB564yQQPVMtyWTVSaayQwc6NfMUJe8DmWLAPKjXxX84jNqwRQ5ScA8i3kWaVD7TWK2s9CEqn3GQw7aoN5",
  "key5": "52pFba3vFertuYyUAUS8PmmcyXuiF8DA9Xa14ve7CrEKJU3Jbf3VuYA6PQRC5CQERE1xeqaDAiWjnvx5skAXRa9J",
  "key6": "2Y8SzGRJUPyFdmk9Uv9u3CfiHorE9XhExjAnx76mCe4yHYM3XX2hKdxUcBRhLPwowLSrsYK7otjzMv51FNEhvr1D",
  "key7": "2PSWcKMyonHhEsftvmgdxvyFiozaapacC4mTzcTSDriFJEbkR3rqRSoq6eYfabR4JNxhaN29zWQUFkeGqtZjfLo7",
  "key8": "3xrwJEBFjZm2eiy47tWJTxiotdvUTggPtE8b7f8sRYptMQuVC5RC92LVgF1EUuut5ocauz2KWs8fJ1M54wpGq2Mk",
  "key9": "5ZWdJSQAPJbUsLB4K9YZ3XSPZScynTjdfJtBaerYomQMHGBViJ8rU6GFAJ5KRv4aVzn7acThyr4udozT7ykcR2k4",
  "key10": "4cAXnj4BKnHzktQ946nUJPknNrzdD7QtcHWrRKWiVE8WaZ9mMGU61tV9NRUddvtojmvnDihbTCGqUR4GWvHWmeCj",
  "key11": "5kbLmbcn8cVa83gs5f2HhFQu6rdzfQ6BG4rcEbdd5oGVFUYffekMDBb5RJXaonJvUCRF2vzBE55oRfTgaCtaSCEs",
  "key12": "49q8x35dYN6xAf75hzXhbVqWryxMe8n7LqF5nh2n49RChmUeYZj7eaT2fjXrLsNKmrff3kTLayBG18TMfooscqzv",
  "key13": "3AjEGRqLbhNGShYoQCsnooUdyWbiznWwtdLYqvTUr8Ng93jrqBiKC37zFxoUfPSniYDhz6vjaHEZ9QpZXVBBw5mE",
  "key14": "vPtaUWSLRWowFWz6JwyMziC94zopGhNa6rYNM9dCoe7ZQYrMUkhqc93nPkWKpLbrDFspxusK2828tix57cKsv2n",
  "key15": "5uqzsdzxs1mqmCTQZbNubrbvRTdzWu9vsucfCqVfkdHw93NdmjM4oTLL8kkhUpNtjnpYJnEp3PDCTNyRNEETFMkw",
  "key16": "4a3SKCYRLJMHHdW35Q22o7Ytao6v1JYu8E8eG5zdbFkJNXEVGLKytmdPTm4ddtuaLL8onzLPRWSutLLNVApFcUkH",
  "key17": "3wT6PGX5t4HFZxDVu1KxKuBkvgZFWS1mRe1uHH9Sfa9DszErxidfQWAeeHWUpwHJmdzEJkFRy2WBPi3AyKyDdBqP",
  "key18": "5mqaqmLM6QRk22fRBfMmyX9xB83QzNxpcLjnAi5yL7gyJHmU5TcoHJ7ufgpWimh8KK5tUqRjgUGzNgVs55iiZgph",
  "key19": "41dvdJa6tGP2p7DLUC8CCLBpEsjeEp9yeAqeLgEFFMVAsdNqsYG3J1KeqhRBTVtUNn7yRwKNwK6LiQPC1Va6z7nR",
  "key20": "2ZWsHYDA89nqngaFsUyF75yKZbmwu4YYnvnJWDEJpyaeZcAbVdceFQaSDm8WezU81DRGrpavaHEF1ytKbt2fFdZo",
  "key21": "5FXtAQokg8iTkbjFqJVEBoye9s2av5uaVa9iHKhck9xP8B2FSpbPVTi67fYoao9G6r8QmQerBKo8vpcamjXoN5V2",
  "key22": "451Mzw9UFcXNDRa4LVHJVxNhQEAMtBXcKRa7HFQQoUX7sFF6D2Ty5o6B5jkrAmKtP3huF59oL71XMoHR8VCNcom7",
  "key23": "5nu9cwWQ2vEXcD9eoapRWgVAmjehH4mty3Kcz6uyFxpi3qhvjG3PPijUcraNcYy2DRnzewC4g7aiXzCmgwSE9Ytb",
  "key24": "NxapL64Z8ym74zJE9ZwwgDJJAXR6zCR68PsncKyqCSEx31pbUpgvz79A26GGbqq7xUB6xHXPyEiMh4evoUHMz1o",
  "key25": "33mYwf6Ju6RBMoTFxTUdePAJmoAfs52sK2grr22XiF9EdyF5VpGTwypRdENjdMHr6Px7yPhkixkKHsQgnjnDiEVm",
  "key26": "5pEEhgi7x7zXp9PFECocsTKRkXwVKfQuLWtQigECwWQHzsAxxwWFnCSWicFHBx37tmfW88JweTR3v2nuxeHA58kB",
  "key27": "43Tk14rKDFmdzUZ3ZqeAc676P9rsw1ESXse3N1YEzTpsbY1mPHWye5Hsxq9gbTgRbEVTCMpsKB3dCHH4rRBiMDxJ",
  "key28": "4bK9BErPHCyARysUHbcJJ3q8a862urFYRQBVotYgrvTK439FfaXuZ84aYX34uhFsjXNJWtYwurxV4bP1Eu5ayiEb"
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
