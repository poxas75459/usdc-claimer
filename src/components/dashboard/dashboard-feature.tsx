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
    "Ugfoi4Pvy7LPgco5D5UevqiYVoJDTRJmyiSSaHfeJeF2TavB14ewjMjvDdhkAVL8tRSmxyRPdWjtKCSUK2BtgK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N6FHKcRqgAHEAhe5vhyxwxV3iz62r19RWHymrwwhCPGr5JsLSTPUSLiQY9CsQEpWpfgcFPZ2ryS24e2EJ2dGkrM",
  "key1": "kJRKq9wgWri3JTRMnTs7nRXPZ1JXGoJvYQ5ky5Xp9HeuSuf7y6ZzGkbDtrXT1gQVzxPcWiz6DeNsJa25gm7fszB",
  "key2": "4VESXHcw97NHBiMakBdYi9hkWciMY5Rot2g9WE4p5P4xCKsBpcgPeXVT4KjeggrmJ2xddxxwwQiw8AC9HTzSfpfx",
  "key3": "2YeiMpvLu7JFGFGVAcr4BVB4yXRfyBxexhNtsJNzgVcvHg2gPR9TcGbHu1SN6HtnAmX2tcJBprniApeJm5VBDLQt",
  "key4": "48ao79BwZgcdbWjMKvoyZXWRqoK245Rm2fnrdohCL5xHSSKHT6mFyFXkaCyKhc5U1EXJi7c4f36KSBdYVMgoGPK",
  "key5": "4NC5sxxPKqJWfuUS2ozJvs7D51bs4JfmDTAHfgnx7bSD5AcGrUdDva1bhCsvwJ4C3wSAVGdkn3gueCUp215uYD6s",
  "key6": "4BY7dN5kF5uRwGfhrJwivshgHXpdP8JKP7or5cvC5KnNpSijQwx2RrBSLhpctE5rrbpRitzU5KTdNMkccm6qB5sh",
  "key7": "45v7GpK6ytEfG7k9Bx19MNXvfVBi1MJS6ETxt9cKwZqUFsKkCH9QURjaKZZMpy9VVtmevWY13thaYtBvodxhejTu",
  "key8": "rAzAgfPWdqLDnGtgtQV83pSpRfpVUM2VPTVAmrstrB1shuyQ2Uw6VHajjnvKGFE9n5UiwcEXoMpx8PfPmsrHx5G",
  "key9": "25wDaUofh8NpDK8xREaETbmVBj2Fvz3KGPmA6N2PXGhsiEDmumfZedwpEQ4GzfNNpT4KF3ojHuFzWe7CtSEwT3Cn",
  "key10": "52qnNndxo3cv1XKA6spEHo6MN2k2XoFUu2UtkNJkmhza38voNgmns6BKFnzmR2vMtvkA85keUJTfDS9iu3uJbXZg",
  "key11": "YdZG5KSTcHU9Jy7qJ6GQssEhb91U73Wq1eMQpawBAp6893r4S4WiyneeKPEhWtgRLbyEMDeN4i5aEHTAVBYMq6Z",
  "key12": "2UfzC8hbqfA5ANoLb6CwXePxDyfJzcPnZ7VZAVxcPvbqK7FcRmiTifaipFQ3839GKCTmMKLn2fBme6TDxxmemUHU",
  "key13": "ZxaWeKLYEcdfeoTMJ1STrZSQa36Qj55yv9UWvt3sw3sGgeq5Uaaw5jxcSRPpBviRnytEQUEWR5PC1Gk9eTccaUR",
  "key14": "65Lc8FNazUPPU8CncQwinuLbU6DHvn5MwrjFd1fPqVaKf5gnCnDtLe1kMGiDxcyHS6u9U8qMMFgGMMLfs5a7gSiX",
  "key15": "5uibEtLtwgE2dD42hfETTuUFZVjWErhf41VH3XsfYfUd5A2QdKsyjmpq4V4hYJi9GKktiSy7fjZ6aWpG21qh85j1",
  "key16": "5bCdY7q49dxd53iS5X4VJP2JWishTcPVNihwrsWXAQAKvzJQsNRRErURuuMo3hpV9wBxXp15NjwTir6aEWBLY7R6",
  "key17": "4H5uBGdkNUYVHRCpP1R6qndnh5yb1pYadNZPvbamRgYFXEVVkNGbSV8DMysTKU9SU9fS2BxqczbHnpTY74zCsDC9",
  "key18": "W1raghD8ZKSJwJgMAWWP1qvYz5M52rZrtTRLv4ifCrHrsB4n6km9jAWFGNLrtKwFJpDMmfrAW5Vcodq5yZgeRSf",
  "key19": "5bJsgP97o7BfM52oVpEgXyNjcrvRdziBTBgXS2sPniDoxzwSgDVkSURQCq5LSo7WiXUKPnQ4ASjG57rfg5VHTQhj",
  "key20": "4Vq1f2qRaJBwtQtokgZnpHFCTdpZaXQhncjh4T8aswST9VYynGNUPRXEheQzib9DwBi3nAcCKSQG7nt2q7tgSxfA",
  "key21": "5sokCJCc8mRKth1JodCECroez4xiVNyL6WnHeAqVzipD2rcbLumzfTWbHUE6tMu8PnKjPo2nk2sq5EHLdg7L3Zeq",
  "key22": "35q44JpcWHv8HqU8XaXs7UiU25n7XuVDc7TmYvuxFBswGQyQqNhi2b9YyTd4nK77m8uLKKmiY3pYF4f9erbVQLaL",
  "key23": "2oMmY62MyDQ1c6QYEi6tY7F6GraTY1VvpVv1PvvJ19Q1SMpyaw1YqPEj4uvrjE8XvYfDAjqn44hgEAsciyJZEDZ4",
  "key24": "58T8YschEEKnLgpp5RahhgoxUxUuhx6boP9yCVf83DBW1orMin1b6hZKxpaABB9UaGkgtD6WuMx8S8UKAd77aMjS",
  "key25": "khdi3mDQDkFdmj4u6qh4Y6RChJstXcaZkPzm9xzkzGLW5YxJNSe97YRXu29jv3H6HAuY3BYJ7uzrYZ3vWJenRGX",
  "key26": "5vwnYfD2yqDyFGjwhSYijhirzmQ8gUEtfoxvV9KVUgC1TymUsswAazpq6BkDs1unyUZiQVpScANc1ByKXETwRHYm"
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
