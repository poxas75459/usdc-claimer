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
    "4iu6D8t1H9uLpkEpSfApUPjgzUXE2B53fMbKvVpRAERhGNmxP3ByueLi6DVC6W62vrCmHUPPG4MeoaLzFKjRoy3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P7FDdtZA1RtfYSK1z6yd4rj3Xg3uB4qGRWTMjNLFuJjrsF5gqQW4Jf5XHxQC3m8ZVyoW3QsxneaeeMq93MxHrdq",
  "key1": "3GkFx8N8hnBLu7Vz4QZ8zQFzq8dtJa1h2F9sv81ZCfgK26k6Br6oW8dfNVit3usVzyPQzrm4RTFdbH7ioRGYgWmn",
  "key2": "qSmczd4K5PsmywYzRxvWRXgzwJtGAbChSowFwDAabCjC78FGz2zvKU83ivkqZpXSGbAfuTcwXBvTmYfy95UfH8C",
  "key3": "nkv5LaWLMGGbN7E8JV2HZT8dZjPg92UdF93Th1k7psweEnRaFmNsEc5Sheyg4m4JC7ogihWNRcQFrS3xLx9F8if",
  "key4": "2GvkQTfRc3neiSLiUD2y9eCEEPLqJ2RDH8po4d14zZGjoTaFFtNS1gd3U1LRtiXCWKK3EDw3mjJzUkjxZyPSzudC",
  "key5": "2Xi1CX3QEL9ZCP6krM8Kd4MeSmCTMAVUoZsDT2ayspWND9wc9wgCSVVhiCWmVdCjEaeTReDoV71E9rzWxYB5nBfL",
  "key6": "4dtqtvqZQJBH3zL16QMo256YwF22PPXsPhoe93WSh7tCRXENpF9KXbi4QmKvhq6t1pEiDtJZ42q2Q4UiUSRaH9vx",
  "key7": "4CtsGUEBHkV5ZEd5cLxNJvKrjfnHRxTVfixCMq7d3KaLnU9CsBpobR1G44ALJRVXLF9QyTNAfHVmYLqnmiRqokjY",
  "key8": "5Aff74jNAVR2B6id2cU74UpgvKyKAz7doz7dssg1C4LBNxRXg75pRBRwXdqKjkD5MNysFdYcJfJBybJx2xA9ATPh",
  "key9": "3YdVrHn4fPYDAtnsntk8beJqtJaEhUfPVsQufxnkDHTfHLTX4xtpCbNM7kR9Nt2gTfeXMSHw7zSdTbNSGBzN4vg7",
  "key10": "51G6w3oKVv8Z8xXhkd7nE3xnz1z4TGHsLYZEhwwZh1g5fCUiGVhYEJWhJQWefM7V7NrE8PuzKEDt1xLP8FZaMiov",
  "key11": "2u4kJAGzmxnAQufAqaW3m6KS2Ta1vdYsTnx5FkcdorAfxCMvqbLa8efvWNsySD8PECZKUjxcmBxLZdxttCjg3Q47",
  "key12": "jRT6VukUyYeroTQau5yLiyebKkGz7oUU2RaDAjPbmhseJDRawniA3kV3XpKn863cyRT3iz9q4ai2XJP2Fkj7GLT",
  "key13": "5LZ6nhUcwvjdLW8rA4b4Kcd9yooMbWdep1g1GoZohabqGCio3AtMH1CFfysxEaFp24JGbsKCyRUDhtfZzyov7hH1",
  "key14": "tkjXFCqqVbRy5LfqstYMNmkRDuMd519p3GZHgZdBCxCHdmD1hR314cJbLGbf4qh6FcbUJgoNeGydfcJoB7QEMfw",
  "key15": "H8wRE1Szs3SmwYmvWG6wKHn9KrjVGqsqbrr9SAK4wMTHKXhSo2WKwxN47KWDbPf259VJ3YmvLpWFAhCsfwz2tEm",
  "key16": "65Gf9xyoXGJbwwVtgBrMXH78SUq5AupvWHYCTzvc99MPt8vzuEyAvuXwby1diB2ghuWCQcAbdhv3d32h2PmGk4sn",
  "key17": "4C6KYQvGvnvGf1tyzH1p9851Pjdtd118N9qYEgZfPckwNFch2XjMy6n8PRXVngRgH8H3xsXY91doNtYCXtmzXyn",
  "key18": "5bwqLAUFUsLiwdR9sc4JpwP8pu4vFiTHgmYpLjj1XPZP79rYGPED1bbbaHwJbnyVGvFCEn8D3hTJjNN8YpjkhuzP",
  "key19": "5FNTTLEQkf8Yu2parbCpz8aYXKpeygzrHVUWmYH5bHBBhS6qgqiUztddtNn7QJBqV1Qd6ZaH2rTVHRdSEWtwy5kC",
  "key20": "4KSVPkkYscx4ZR1rC3F6s7CRTz4hC4XiLAxbUAvFHzTkt1htwtgFHMCJHcav8egU2WgKbrAEQJWTxvxE9426q42J",
  "key21": "4b3ZmxRRzMY8CzPQeDoUVoyCH9hqT7bta96zpK98vGzbMAuvoywJLQSf8ish87KbMigMuPxeuZzAXbBzhuvjMf6H",
  "key22": "5MXfifNQurgjxgJgGU2w6HSFUkZpgeHGbPqpUQxoYEKqeWkoB8rarV27S2o3rqebgNhJZqTYVSdgvuq6DSm5YWq6",
  "key23": "2GbJZWQiuWwanEvU1xJiR6uPBp2cGL3Vc69zTU8UfU5zRDNGsPfqtVbqJ3f8vUVY1MKNvhQ9zAV5fXXq1G8EaZ52",
  "key24": "vhJkjmduxcgwv3MxaNFhCUJvQa8k9B472gM1yipz8T18EGw3PjVGnRX1N9SZqYZz6tDPnFWrfc8HKFGwWocLAUX",
  "key25": "fhEkVbtSwn8D32Abe6H9tSDzVJ5bYmD3JG9JK4xkvg2hrv1hZcqfHyZawYX4sS8sQUjFMmkKMvEkResmd4PPxtC",
  "key26": "3DfABFTLKBvXCPoMRN2Q5rkgALdiCPHLVAHdzYJSPKxpHD8i9kPzShhTnryWndyVyvccDMkX95h7Kbj3NSiNJuUN",
  "key27": "4hbbgzPxr4fZf3LpFK9KvLu7ez3KpYrk4fRB2kNBMxuVcQtX2befXXb72EHzJoFKAmFg8PuUt3Rv6JsuXCtaiftX"
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
