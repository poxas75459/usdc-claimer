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
    "47Q4MpdHKtiT8Bxgjs3d4rRQC2CiKU1xzvaKjJW6ZzXpbdtLTUhkjYUvxviSy1X31wE6UMQhhQBoXh4JKo2WQdS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34im3EB6pYEFYJzyaZLHEZxs96Baw4q6pCoM2VxWpgnWoTtPBphXmT5mZmmdWf8CPtnNe2y3n2PgHEw7mWx51SGY",
  "key1": "5bcmWdTb29dT4txtDtjRXRB4mroczWM6LjPHsTNm5JwN5RJXySVdLCZGyAarDJEiA9hFRhzbjJ1kauVLeD3aXKd7",
  "key2": "5KGJAfoujKQM4Su6qkGArRJQDSQ97c9XSMYvRpjVLAhSVCAEKwGPWUGiKGzLdRcLzR7mydEuKk1cbm7gmzh2Wy3p",
  "key3": "3PEJ6tJsRQnmpGgjTRZzBFWLqiokzzZymG11whEUv2PnNJJsWPXHPGttzzqKSPFwgZrg2f6TKJB5FkwqhCWXqhT9",
  "key4": "2uNqqDCf5q95GNmu32BqFrK6AFvfEokarPAbD4SR6PRe9yoGp4DxSmYcTRYbkjAbyPSzc8j4XRAJPeRP3Dizejk8",
  "key5": "5vSsH1B2mWK16M18cpYC7xVrta6aPYQAkWiUooWht5mAmzypJsLRphaHsRUksET8DDxk86iquhXPREuJPxE4MLB3",
  "key6": "nE12uxGaz5bn5HhQNtff1x3CfZNkihpjcqqa8yLomG2ySjMnDe38D6gz2DwyE9FquBjpwzg243jiDabUBxgfupi",
  "key7": "4ALcJ7kdaGLMPZhnvWGWAUDTvGLa3gVirZGYYJiiLwfNKuVwUSbHB5gWXHEoncdEAwqEN78CphXg3YCdp9wRJ6e9",
  "key8": "5vCnc9oSAuP3oLbejihG43HCkwZYSFLZhwAGgvTYRaXp4WzNiY8JnnbL7DrBq72oKsep9GWdVvNcDEQQZgGxkRWh",
  "key9": "2MHxu7HcxjEaWBbFGr6bJF5abT1xH2S6GCgEz8fcRK6Ztmad9JGMfgvP6mBFkLyeQtvX4mkvFiCnpHgLojX3mhSZ",
  "key10": "qeLycbh1FyvSRo8FeeqmyjstBHGy7b55pQbcaHsBfP4n7SJx6FCMTvM3811edpJW7iZFpAtvWNf3XM3i7SKfV6m",
  "key11": "2EXE2cnxUi1SNdfdiJwUCLRzzyxvaat5RWavmncCWYt9ekvwHmPLdL1Prr94VV2WyeviFgahC3tFQr8N6M5CQQUB",
  "key12": "3xrePdG5eDre5FSWs9jUv69UpNa1ZurjpALsi32u9uNVnZMFbgHdkLcWLrFU498NunWrUkhMthZQxvz1UNJxKyya",
  "key13": "3isauZuzSLPHcyXGiUU5QurBt34Fz7dur9sko5Ehrwp41KjqYRrmQrW2mYrd5ydaPLZxKXXPRhD5X61kgYUQXEv9",
  "key14": "33QMZhwSJQ8zt7NW9rT2EdAiAQMaGQoa3F3aQfNDxiq8oxSQdbGDtBLPSz25dNmWCNFkGRJA3Denjz48RiUi4sP7",
  "key15": "SKBYcsGqY9wy7fxFpoch5ze9x3x74NhKrD8Jgf9Sm8ceK2h9vzkAVXo3xA1v9MWWhC1seJKr2TrvRpHwQgFm1xN",
  "key16": "4TxoEScMb7b9q7HDfTTbM77F3uNGFuQLcyWcP6x4k7AqHkUdjfeSuQmwChwMtRbnKBjCoPhJiTJfMVpak3fLokYV",
  "key17": "41zGo9yNef41gUMMz6yZscSKdSsTUJ9foR349nPQohFr4eoncbfhrhPoiDzb8pAhXkGuRSGphbUhFr7yQFuBG74N",
  "key18": "2or5MZDbR9mmeT1Y5euutHKCn4ojRkMt3sWw2ADoSqN3KVHxGPRpg5byuimRhXeTDpP7Wf2jaFa8JtFVRnfomvAQ",
  "key19": "2cSuTVwBdHXk4QrjHL8WCW2KtjcbBgzrQ9AdpgJYTVhJbwrrba7qLPBYhfq9SBrpgp7uSwRYr4o4H6747vJjZS1n",
  "key20": "2k8J5R8yNxbWnphHakSsbVnrYobfBwVMpWebXTSZCz6tP8ZRHKdYpH8WCUBum9bpKUxLHd4JzbQe7JSEWjTC1ziE",
  "key21": "3Qx7NdZJV4gmdAzb7m9xH5GcmauC1nf58hDuiXtik3RZwS4atT5QCCD9k4uqszLWrixTWa3oBN6h44jkF5ayo7ty",
  "key22": "2ZHxdzbC6EMDzMQ2dBQQgoTDGVGDNM13CLsaTYG4a9XU36gjGJ52vWSWCu6bfZ5Pj3jihF8BEjuLj2wFriLLvN7o",
  "key23": "uRhRBAKynYk9Rv5TFZeqZeqGwPEJqDx9pMsST3t4bXwDDtRn9mGDicpR7oH7VfYUvrmL7pqaAxcTsLgSPAKZ581",
  "key24": "3DS2suyDhXo4P3ouD2HwFBFsR5dhCwxieEk6sRVnLK2MPeftF3uyLTEE2oozif3V7soN4Qn2FCxpG2ssRrNoUi95",
  "key25": "3m7bKc683BWT9imegcoXWC2XA1cu8qAxtSmYAXuivg3kPe94V7MZkPS4U5HWQ48ibBMpob6gxB2Z9jHGERL5E6tM",
  "key26": "4JFj4U7nmGfBbimhaxGUgXEPhjrA91JZxqa18mc19FNRkaazvamv3TfshRmhMaCmGrz1CziimswDERJH3UTij2nY",
  "key27": "2nQqrVEgbFjWTVMxEEGYYxGnbyUotQTXfcJ7t9v6bNLL5egZTrzKs6ggBktVj8mTnGmsa9E78D1KdDcck7NKhzKQ"
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
