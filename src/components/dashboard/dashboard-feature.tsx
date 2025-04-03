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
    "YLudk6xNhAKd87Ey9nqkMQnezbdawwfGgLLkxdpwsR3Q3H5KxmobnDN9pBNTGht8hLvzrUZgx7h1nTqpNCgf4Y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T7Jau8fxV9i22ca1ngv6JK6ztZnAqCcixJJozYr3GeAznXrNXC8KSGtgjH6MuWDK7tCQTKQ8PtuZMDaq27qCtik",
  "key1": "3Jco8P8K2gSLsY7NNMPAswcMRw5Aso2vR79PcHgRrtae3fm3yTS9c95kBw63DysKpNKbh3rY8zC58U6Aigx8rcad",
  "key2": "25u4VUTJ4HqfXpviY7cKTVwTT5FSqG9CDrDAKU6C81DPSGe1BCRSwxnAivMvSYscy2r2Wx5rE8hjtT5yJ6q8Nv7W",
  "key3": "3Gbsy36a7fAtfyeV2n3qSZfB6mYpHcPRCNSkYpSwtsaVp4C9RJqnPCyV5eV7bGhcYXUJD8RgEHiRGCAoQS5ZSdmh",
  "key4": "5UyK6X2jW753pYv3ApDDXiwmVPi26TVWgXXE3vv2Px2cwgcWxBQLhjdEn6bxAze8bLG5ktj4pYZDJSEPCRvpiCuW",
  "key5": "aFwnn8cX33okMUywmXRwZwLD3bddyr4StXxKjJX5zHfWP7vP29YFhSonRdkZGVGPLk78G8FV4nm5LzfTxSttLMN",
  "key6": "2mt9WzP5XPadSEpismd2aCXgf6pozWA4LjeV4v6DpFQP5Bpnuz8dig4T7p76ZJ16qy79ngFRoTxGKauB3ZLzsfit",
  "key7": "4DpwvJTMAa3yTTcrpDejTzK6UqAxhk8TKug9NC2JxueNoaoUQ3dUpRpPauCg8xKZXa9mZzJP4tWstCusL9w8aGwD",
  "key8": "2j6QswNrBtKAcbcXxt9KkKTRRA3uJYjaWGANNChNwptdNeKDzD3Rh1gj9jxJaEnCLJfhXYjh54RJsc2QVvdDvxY8",
  "key9": "F2KedjWLHhy8bLx2vhcstLoaLmQBqGSC4JE7JLNmnaBJokqteT61kLFBF66P1uYRPooKvKnURiDrpmGYikox4U6",
  "key10": "34m87EjVoug1ZEwBZncLCz4NyXX1D486JCRCTtuNqisuAKkh2gUVTPPtH7qExSiXGGtEmXsU8wFbdeZ7hPC3m422",
  "key11": "3xyds1JXCXp6gC1cPGUyh8H5UtwVcZzcjXKzYBPPK9VrNKoT89WoSTUtQXaSCvuJvjWy4Cys5ryfAhuNc9Svuzog",
  "key12": "5Tp1gomShnNnK8zXcwTs5JvjHgLJG15oe5EghMemNqin4HNUTmhWY2h8h559RNsohqpwW59eBu1hipDDDPkPhyAh",
  "key13": "4NauhmVatrgCm3vs8CpYbqy8nNJ2BwUb1e1EfArE2ToFuHXmBKMKrYQboA9kHe3jfZNGTxqNqgvrBkyWMg4BKZsp",
  "key14": "59YxKMMVXXhk4aZHr7KXicVFo1wCP2sVyyXhtt4iKDBavqjm4xmvmPHugVA32TW9g7yA3SbpdSQ3HhtT7D8P627f",
  "key15": "4hMa6AGAPWbch8RXEmLwoXJ2femn9VEy4b3ZhG8TT7ipxCvfysoNSXSwsuQhkfoTAWimCiV9K86AgeWwcAVKe1Sd",
  "key16": "2h4rE3YBGWwneaAdffmhXPNgKQFgyKYRa1323RdsdjcTp8PekmCNHJWL4Wf5FkU3GvDmVREvXWUiSWLkepMnLn5M",
  "key17": "3f2XDuZvfTN4xixqESEZfZUtxcM64YWvWKJRkQ7wGvLcCH4FkVTw2XqVbMaxD7nG8Rnek9xamZQJDEBwYLQqvS39",
  "key18": "4ogbwx36Q41Ue3BLNvreiL99pisxAVJHB9SDPYLjuwzZiCakqaYnJzgnBDvZ5aXHqPKJevZEMf8oWmZuPAg6VSL8",
  "key19": "tZqtMgpgnJ9sRX7wWny69chZZwdbbi77XxJBXBBKqLCsKK1GyqHniBptJxVvuFnHyDqd79eLE3mE6hU5qdZKiq2",
  "key20": "3LhvUkhVpai6aRZdJKKrAPPtsinCMaBQEcPDwbeuib8tXvgKGCqe6pT1Hszrs52vMRs67aYrth6t7kpsr366sLFM",
  "key21": "9C1ryNStcSZ8ZxWMau2GMwPGof8tig4mCfJmP89PbZqMqcwmxCKnA4o4EMxtcQRJTjbKjhDkVGLRLK6WiLZwVoa",
  "key22": "5FTmiHXsTrQ4w9y9oFLnJmjUjv3m2fqzeyRXDApD9vNPQaCJZJC7quTzxKfFcQ4DR9qsRBY4f3ZqRo4mx2PHqJrk",
  "key23": "216KnfWLgTZHxoy1DMGWaE8REG7JSheKis3xBbESXg1pfN19jPw8y1Rs8W6XLZwVynZM85pd3ufZZYrLdZZgGp68",
  "key24": "94HdePVaSxJkZjEfm2YyfED8RteX6yu9RwxBFRFjiiovj9RNcDBVQ29t5WwZfEmtNbD6izbGsCi1aHQokriaZug",
  "key25": "3jko3DnEKq75GGqszZ3jThrFbz2h8TPYPJkk8xaHKbQkKJGPgWUkAXdyrgnBMSKLS9wScKDC47QjacKfxxBiugU1",
  "key26": "5mmcEYtk7RUPYh3Gi8XMCJdN4Tx1zRzWjMqov9pzchkiscTVCTBm3ajLQM8c7VNuceXFi9H9LDeTb3kqbAiH7G2C",
  "key27": "5XX3fxdQfdeS3baqmyM2szq8VgXDc7W9zAsC1SNJUsncyYfBE5XeLQ4XbgA2ao1pmGCdoDKVMyNhaTigJDbm1djH",
  "key28": "5LmDMd9CiXMCgaLvc2AUYK4zckNyJLjbqhfUCe62mPZWWvDUfqL2nxx8a3vJNju2zHPA4Bgv75SU7s5khN8DJp6g",
  "key29": "HfG9PfB7LkPNKbX6BM1iW41U2boh5HvFbAiTg4nbZYvrdgWFRKLRqUeUHEcxDF6g22YmFHKfgREKTd1AxhZ3YaG",
  "key30": "7dZMgt1k4LrW5JYfFpynqnrLvqvDzgHE3PyJrh3nD8QTyUKtPBGnudapkLB55iJ1t9mesF3ffyqa1TFcuuDQbHL"
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
