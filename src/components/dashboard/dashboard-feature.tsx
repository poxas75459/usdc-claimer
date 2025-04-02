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
    "5CCggGDooJkajV1jzWJ32MFC9DHh7dhWFpVWivPuGeNZXtHi9FWoMLsoE5YUk5fPMb71GYBet2UEoLNP89vBRqgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JHUow6mNTxGC5wVPJYLtWFFteVGPt8Uxaccu5yyxSE476ritsoRbUSBk5UBZSo3X51B1Z41NuT2J3fm5znjgm9j",
  "key1": "BimWimZNmPzTccvEUcLJAnH8DQ9CgQwNqxGFNDCQkdXcbibHfvVAiVc3MqQRMDMSu385MW2Jvug5n1tuDs5wmu3",
  "key2": "4mz7VJuMxt4VT2w3QBpSAApDV8pYQ9rMvXuhGkv3ZhFBDK2HefJWizMASvyVDz5FaLPfkVXvpxd6aZXwVJequDDc",
  "key3": "34mvveKA1WPffvUjXhMZGjRVYrsT8Rrdcw238iibkj3pmFRB7LJwwTzvP7i5Cwveg814DThgmYk7Xq37WWaDaq6p",
  "key4": "3VUwUgNxu8eLUHxEHaZ2vufExvThYrf5nMGaewgnHH1BqpHUjZHwnyfc8X7Bx1EzyhNSzwio8yXmszyWvVJ8m7xY",
  "key5": "4wKGE9NyngVeTH728EC6sMbpN6nH9bvRv5EDUWQ7a3BmdrCzRh6Q3sBK7Sbo1yzouuUzNv7NmBXYDABQwDZLvgX4",
  "key6": "2KLcXUFLZ86Z8xtED7woWnmpD3FmALPeYN4xnfEMR7ZYEPaV9pBfVi9Zhe3shxhchFVy7FVVdEayQQx6mf5uqLoi",
  "key7": "eGAmBv7isoAYxGn2zwupcoXMCEMSVpMK2j3yiD2HTjdehMFDVnctttfPU66NVdSxJDaXX27qyxzsW4R5UeWzEpd",
  "key8": "4iytEHALYYHFX7RwMF82pv6ULd1qPNT9SmnnW6VoCqMg1EeYXsbHSNLaATXisJn73HGijGGMVVfSTh33jMBpiU1f",
  "key9": "twHU2PhvsRxqzAiK4RwytS4YA4vzAuFDdEBqiV3takcFFM91fuM3pAChQjkejgrGiHFvgt29x6EDE19hPt3tKFb",
  "key10": "3JpBbea1Z4oi9YvPoA5FT475AhDVME5FjfWMXKRiuamMnugsRLXmVBt1RRHbDwYF44gUiEQkuX3JEvEBerRyvL7X",
  "key11": "2a9ZzzaE4zVEXVaTwWC7pkjJBiMfv94R5gdyjid65mc8rk7197KkRRnm23QfBouuVmES1MMj8WEpW9QwCKFeZbiM",
  "key12": "5KaGuvYimrzHfgRZtpzhWCWyo2aUW1ckomdcWFgMTFub3yHJuTmqMWpnxiGbUkdgcKcAX57jar91KW9iGiUMPYfp",
  "key13": "36VgU3nb7qVhupEGYoCjiqaZpUJWmMkFT9sXfQTEFA2phpBFrymZ2XeCggeADqhcZU9DbnRU6tzRr7dAMjJjp66z",
  "key14": "4dXGxEqj2DBrJv1Na4UFgSu3EHVTzSKEd89caAxWdDmkJYtZjc5wpo2VsXsxXk2MGssxrMSffpB7gAKPjWbC8TCW",
  "key15": "5ap5wkzXprGnKUCKu1Wh2DKDRPjQ9XuGgJTQGKgetueLEWVoBjmwN7YagbGxshf8NAtdBM2xp1kVNBr9fgboLQ57",
  "key16": "4QyaqA6eTjzayNTBdPHzWUgUSh3XsWkZThJW9K3QvSB94C1nZD57WQHHiBLuAi3t19XpUhgcF5kMKc7RAxRA7WV5",
  "key17": "4qcA9pSyviQN4HhXiqG1nepgy9WoYEBknBSWDULRtsUovRLyhHPmXBJ7kZYUtQHUMaFY6Zy5NUxjiReB7EwjxSrg",
  "key18": "4UAoRuFjhLSXtRF9qkXG1PVchW9LDEdUzwACRF7ZvmuAMhD8YWCVAdtwK5HNFGVs2x2b1QZeEHacCTq7FVRq84MR",
  "key19": "2Smt4gbDqva4baEscapXUU2zbAGC14ZtbR1hHCwhtq56kpp6CB5AacooVRdU9vQERbmXqcqni13b6sXXHnPUaWzz",
  "key20": "3Y1kss8X1ihMBpJsLLoTPP557STkxwMPEp2JZddHsGs49iPzWXHZXbBUKeTxxrQkDC3BmwPHBgZea1pUiNFMsA6x",
  "key21": "4P6ahx6SjV8sez64fXbFngZvE7wNkm1oXWt4yQKRZupgqWF1n31Z8swr7pgo5csXreifQNGdek6CdmFRdy1vVBux",
  "key22": "3e1dozXVKUtzXrUJDLChZkvhzfYgYNHdDYvW64NF5TCs9pMZDFCAGNwmzeXAPahZv1T8BeNDEErm1vRou3kF8UMv",
  "key23": "3ZGdXpufaJJx7Lu1tyQGZHNoJJwUy9A1yRVJBW7XHjKryRdagKFa8pNqxhgp1UTioPekNQtAjPCADwoPaDLWARP8",
  "key24": "4r6jv9jc66Dw6X6bh7oGxK51LpARfxPnvxb1xsMugFmatWdF7B9oFmdoX7vHNrNvooRUBNq34JxNZHcyRvkEaMJK",
  "key25": "3iviYw1s8Lh76FfEdEDbEB8PNGhC3ky59BviZWuENXu2XvTADUekTWAYDpBk9sdEuUFXoDAPNsnNyrCAJbYHCUds",
  "key26": "5Uv1vaNgWQUHN4HpgUWazEoEsSp21E9N71jMM8e4xYEGGu88LW9k9qVT72nespa43HfHwJnGr3gTjRyP2wWG7nkf",
  "key27": "2ZVdb9fW9hqtEEgdFDKfqZ7wHC2hoLL4ragp66uca1PUDMDXeyiQZgr64iqs2uy8b7QssG5aqXQ12VBU8udQW6b7",
  "key28": "35qVbdJfSimoLSJvkgoRZtqpFdZdHV9DqEWGX7ZA9XgndotvRYf42V8VpQB11wW8rciHBJqQA4p65TUxCp1xX2Ve"
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
