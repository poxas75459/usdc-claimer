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
    "261WrQMgZqH2wV76EwtPrSj8fTaCmTEEyjXbaUDFuP36sdREmag4KReATELBg3pVRVaqHpjiWffxYyVozaaPTMz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44dF7nwSiWfysSC5KygQo2X2dyhkUmu7WUZBiZ88F79eYo8gLsET4L4rvCNyazwAkFbYPyEZintcK75Yqh1waWS2",
  "key1": "dSf558KeKYctFSbDZ7xpm6XmMjpka2CLrNewFsBKvgPQyG6aoDFcJVKSpnsUwAx4eRNLJkTNzHDHSC8VyTktwUv",
  "key2": "4LdtJjnkNfNT465Da4CmYuXdQ7Q3hHBxh5Xq9ryZEjmDBCn5d1XkREGSxtWthdRRxNnPa3YjhnJBwtbLyWEPUHdE",
  "key3": "J4TgNkm44UxCwMLgR6UhXHFpZMf3Qpa9xTKj9RC9iW4v7A4BgHY8a4Tm97As4Mmqo8ZcfGEDrJqiwBAsah6weT7",
  "key4": "4y7mFtLWKedYbTvr8Dhgh4WurLQ9MgRhkdgVrbZnLGPiap8ZKKh7EZWBJRCfz5BwxPwtZeDKJCM6pDpGcVpNEhPq",
  "key5": "3MTpb3uj3sXKdBQas8miQ2Bk8SWtvWiuNUcCkBcsmu5k88FC956wL17dxu8zF7X4jhsyB3gCnpfPXCBq7kpQLhDN",
  "key6": "5QGyVLiLXM6RhaDoSoTCNgHf1ss6c3y99GNvoWEzSeHjg5Qwtwh4DKEfShUBaNbBSzs5Lrb2StCHgpn5bcFMorHv",
  "key7": "t3F7mfYsaTg8X53zquALuQHboGGFvK5z7ZQpMhsmYzHrBWtpQ9KaMJGU6XaKzFxN5FeP8F9PuS1twkEek8CTroK",
  "key8": "4ETg1ptqXXxhzJ4FYYosv1e36rhHupcsajJGK4qCm1TJb5vwDR7mdZXEkf39gJ1m5aowr9wsXQfpA6aVjcJc6rue",
  "key9": "JQJdNFrnZXf6Zn8bEH8RWdYiLZMmRJyCWniY7Vw6UZTq7UCUTonSWYoFjdnJHERPH1qTXn8Xsnxeg7QoXFY3nMC",
  "key10": "5UW6vNesxoaV2V9Q8QzspRaiwUqnLqfoj9bC7ckN9WVWEGFZ7CgXr2kdos8iehRtBm7S1a2gkWia8kKmshYWco3B",
  "key11": "26xDysbJ4DzFwKNfqh3qjVcVb2oBang1YUGJZcZmpJmbUnEtPb8sDEVvtzStcxsG7tnzL5sRFa1VYBixsDq5BNdy",
  "key12": "47MkqqigNBT1ov2v7D2qhL1xTrfibPq5osdZ1Ud2oGppduhDxBBM11znpSXinF7LBKCA8WHEqS4vg1GwDGRpkViP",
  "key13": "4gpbmyMEzLq8yqqjHZJFPy1bUQRLnNSpWYPcMcEK33ewXF9h7nf13b3xndW3944DLhySVdNtEAMCWjsvrvQTRdc7",
  "key14": "cT435NpjRFNz5BGPhWWUSC3mGUcBYHCZaXH21dDoE7gX87FcoZmv716CtmikfL17wAjdXbjQgaANPFMHuP6aiFt",
  "key15": "3MaM2gX6kdp2pJnYELS1xHSCxPc3ccRyz4SuWATi334LXrFijH6ZqnwbUx6sho7r5RXdJdjgsGZbJ8cwH5ypyKE",
  "key16": "t96oKouRjup5tKXJnQiCQenoSwE2U1XfhwfCdHV1NkYbtnw19mTB7kFvNqXpcKTTaAHEKXECSXA19c7HZShuVLz",
  "key17": "65g8ZMcHZXei5RAXqpnVeWmJFw3r5yW7fRKBvLQyX4BxHUkQfdJGewzsHtXo2drWcjnbHBvYbTVQMYAWBrEJBEA9",
  "key18": "3NoUr8FuwMo1L8x98tWkX5E2dPG2KQcYnU9W9wxrdjZQP48P6guVSP1n5X9KMPGZjDucnxDry2Z7aaUncBcGamEx",
  "key19": "3EMjDm5nyoEcU7jBU97jbNra7T6RZvLeCdgR9Nbvx3Bws33fGnqwFweP2AHL32j1N8mnmbGrw482H122iYQaqyXi",
  "key20": "5xPU22pGXWbejW1LZ3dSi2AGZFWpMuofAd9ervPTSYggbH1d9ExbabTYCvj7DtrhPjtFSo7J7v9HG3im4sB46ZEd",
  "key21": "4W8kaBjgMYDDAmGbAug9asmNVjfjyB4czv8h7xT57wF6uUTPWknkrE5MovGeY5zT2x7yHw3qz1ghSoYipSxRL1Yw",
  "key22": "cwPZcxsJ9XwA77qxzpqdzTMXHxpd4ppUXAM55EMQ74U6XVjjQjZjHdxcwTghvoHtvYYev6vGCpVYkDjMAZgeUMo",
  "key23": "2v7vwGsF7ziYD1KsNKq7UKDZE6dCkszJh6m34rhfFs7xHxdgr2eJjijwkN4YseW75e6N1Rw7MzXpkjNAbiBUep9f",
  "key24": "5BcU8hCCPFArAnxPW7JqX9K8k4MrhBtN18TCLLmhy63AtWbqWh82ny9McNVrUQYX7XKktzCExjaW13ZjqrRDFnj9",
  "key25": "44dk2F6jwF9L8C6CfxH6zzyhMMkEpzFUN7jepyi6NzyzCudAVCen4FLFxY6HTz2WEL4md6TJC25ydC58pqNq6s2L",
  "key26": "66MrvADdbM9TnYQR8x2gbCy7Kh4KDYxDgouve1ooNNpzUiy2jxT8BgtyYmpGuNiP4vXCbWcyYsKKHnHy6LV7q1zv",
  "key27": "5iyLUMj674DCGgCqPJNtyeK89XzZR1ye2WVhvYPH9Sx7ujE4FPGvUGJ9cHTRKFd31yrUrmpZtNSmNcXeKicPzhwY",
  "key28": "2Erj2crbn9rEgsswgi6ewXA9nkCrfsziCagL4XeUQ2ekPGgibrPbra4qyQaogJeaB8g2qzXVkj9QfPMq91xgM62U"
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
