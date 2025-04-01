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
    "5G8bZbJXdHoV4XPckXa2SXu2wtR6nNShcXsFEcxZPFzhnykvkUvkTjRtDKYNGN3Genfn9aGHwYU9FprwRuDbGx6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fr54FkzJ9Lhc156ndH2AUM3WhJy3SsALRfRKyZr9QpzqHgNzgg9q1F2zuJbRLDhr57pHhBMnzkG6kughcVTqRqQ",
  "key1": "2uuc7eqY9VEhJbaUU8p7Pub8yupXTz9wtWo7gMTCB7716thmDskiLrY4fcPQ8oruM76kCZgAa1Lz1apN7jescJNL",
  "key2": "2TyCfzm1Db7EFUuQon88qRCRAahfh7hjdDXzAFKN4P9M9KtZxSLFN1gj1ZDU62LbF4Gw3sMC1fThCoNXTJZSfoyA",
  "key3": "3JjaBJ8h82x3cWrsxa1xKZTMHGERedZEyoWe72U9Tx3QbhKKzMf46hpuFx8GEAPRrxpfCiYpePCSusrLtK9tSSrS",
  "key4": "21TWbdLEa2tQJLyW9FBH6FMDwUH3GXSm2voDJXoiwbdJiawxdMVuZzDRouA1hct8UNBBt5Ustwv6zGRDFmzMzQQt",
  "key5": "2tg7NLssoxQ7jX5aDD6cKudNVX5t4eRPhdLs8UPodVzWLobvttzDETjBWzZxo2gSoTwziY9FBAiBESfYssQrFNJD",
  "key6": "3Br4KBUwLjqaWiBHQQBExckRn4aLYSnbp8Wh4tDPF17Xu5DXo6FqgeJpcBddVv1M8S54aF5sRCTCg96xh1HnotL7",
  "key7": "2qMWN55Q4BfcMeqPND1HeZyTunvvtZ8Bo3aAYaVrVHmj1hQQVearJLVkx4b3KyfGZR9AyZf7GZgs1ZTdDAeUSsqm",
  "key8": "2aGNf3Rcrtyui6Z4hrH4ssWbkWDomKeR9r7ENfjGx9UVoL22JSALCj9EiLysfSE6yktbhKqBZ6PVERcayWgp2jRy",
  "key9": "b7DAkwKhNB2fx7oC6nXTauV73Dv63gvC8wmUABTWtxhiawQvCDLCEXg6XucqMZi8iGbYAweTRNT7Egosv4Nu85h",
  "key10": "22rEhsj4xK1xWNNknVjoaZMiT8Bj7viKpqWSEpQupMQhRQcYV4Gy8cdjyW1NTFGQYks35ni9hHQ358GTHM8k7UTd",
  "key11": "4MignNHt4VXa5rdMtYRPEZMDY2DFiGnYT9xYNFrbwH1p8FNdEPRKN3TZX1HUCXJzak3U2eo6G2Rbcni4HdXjvkaY",
  "key12": "4GmNXMmemaRLYVxFvAxk4ZHSkCWco9EHbCWdkWti6zHR48QEkR7qZSYiayU69m1fg76KHxMWaUCoeQkDoBnAcUeB",
  "key13": "HhWqeMWVYAjAZ5B1SCARor6eNNyycxbHaVdP2KwtiUrFQiBCxAdFKZrBsWBhvZaT5z2ZnFj5MBnvpSY3H7YeSSs",
  "key14": "22UK1MfTCqxVpUyGhjYAoj7RpVcuBSxdsacR2WtM9N5er9u4f64vX9n7K1vh2pmjaGk22fbz3tJuNtWAevjsRm3w",
  "key15": "3oRShoYPEAab4iDEgQVDiZoKgpySVsbuM342nzvrAjUHGzB6xmqSA8kBKouAEQETNurcK24gGKVhknsFWCkkeoJr",
  "key16": "24fhgS9jHcFWksarMeRYtfsukxiEu8pYGc6ggvNRnB7A8bAuubibJivVKoreUCqnptm4v8GaNTJLpDK8db9zRmus",
  "key17": "231TGxAQ9P9YGS3ABoeLTitaFGCurQb9VH3ZE5JK9Hv9cXUW16q8QR9BJUsFTgAKDdGrPNe16bQrvBzEdb7Eo8wP",
  "key18": "zxe8vifh4hEevVbWJSfeR1ZkKbV4PGc79n9KAL3trTp5vNZfy2jsQC4kPQV7amHr6viUcPF869mzYbVTAmKNHwD",
  "key19": "3DS4y1dde71cnhTVYaCReo1G58d6XKrw3DXXaRgFapt8gTa6xZQ1PjRJCjk7GHRJGQmiY2asmXrYZMk6Bmi1yufF",
  "key20": "3iGEpMj3ieDxZjLgtPw4tntWmLPuid15RqvZKxcyy9LSgy9FnfZP9tZ2GebbMQMr7YqsKRs4vWguwCLiPQREPz1x",
  "key21": "2neWpqxFQzguwLjFiquzuCjNx38h4vvuvxrWKSzD7KGmRq7KYwEZR4jZ9uHbELtfvTjGk7eooCZyhL63AtPAAEsh",
  "key22": "476SNbQNoMwJA2qKTTCas9kQHAhyXwYjDFvExpfyx1kWUxkLiNirxWNS3TK11ZK4txGdLGuM5WTeNq6d2igjraB4",
  "key23": "2yhgtWNh5TBJecmUTDkS58geBp2o7S4CpULoBoDdvXVTWZchPEwPkBATsvJws4ezpvpK3r9XDGLwa7dUmDWbrLj7",
  "key24": "xRoWngXdyuEGTKntyj7RnPg2TZXH2kjdPijQ1TZ6RJVv8bj8HBUkKrgdYcS7hdHPKo6ReY8mJngqUCRpgPNKHTF",
  "key25": "vzd4jtpWVGcabXxcT4Mu6GgXHiwugJAWzDx5MbunpdsSR1ikEHgyL6ahDmqzESSjDCxsSfAEhD1UpB7hjqn18A4"
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
