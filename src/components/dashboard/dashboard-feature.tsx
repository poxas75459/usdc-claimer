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
    "5WRHm983WHrQPYw7JXNSeCJSWq9Y99fco8hisnv12FXvsW6Zc6ZzMAktvVU3mwbYVjcuqYfvd7sp5QMMZMZUt1km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c8kgF8nuths7191vFgRNwg2earnLz2py4RZTAKmu6ZVtd2jENsrd3QKVYd2Ekt5axrny4vACw6i25amokHwAY49",
  "key1": "2LTd48PkMvxxwWtKREUYLesK714EYoQTdkxvvs8KDh3nMiV7f6kDGXiLCoeo8RmEtkQX4RT6VAyXVafMirtPcwoC",
  "key2": "66qTSB7wLZp5f2L75zkz5sRWTZMC44mfBiZoyaoxYHUV2BjaFYEW5e6jdkyroKgRUk6WWEKQEZpJPiRTXifFcaP9",
  "key3": "4J4zXuY7pT2Yjs6BB3MkcuGdD4t1ovbTGtPLGboEMXR7DhviwkX8DE6yy7Zt5RGkuAwx8Sj6P6pxcdhheS8UCQif",
  "key4": "w5xDKvGKDazxyhcRSsMmSxTxHQaVU9dH3QvP7VegBwXJ3v2moCmXsRVP4z5TfycdmzMCbjEJMReSbcvDhBfEgZd",
  "key5": "2Z5zMqQWGpTF21uqbV7YVjvAMEWUAiHqNSPo8cEEJU1K14UBqyzW6wf6wxkSTdU1KqCRF322SLsuv47sx733Bqwv",
  "key6": "4Pkoa5hWV28tjQqAfH5UN8jsxpmJBdLq1MA2intQmfzH4VvcR4r9sJcZG8AiRqNnpWk64hu3kfcMV9AnuEkWt2rT",
  "key7": "52mhvvoFp8UzstzASLfQ2unmGXjw4Abi8YBqpURQ9eVZXo9r9d4nzSuoVicCaei8pSy8VLiJAGqrq7gGCtgzmwf9",
  "key8": "4Pz4LbjURzfHs2xV3eFP2rDUnRGf2oAqMWEodBx3uMYm8NpJ97nvCLA1cQmWiT4VXYt1BusNQ5yH8c6QJyeg85E1",
  "key9": "5JYdi8wipbEMXUkNP4H2cK9gAiAnez7Xu6NPMURNxHJvXs2xf9JhSK4LXhGHwdwgKL1AmS2NjCUkb6UyDQzZwAwa",
  "key10": "Hpo3zCMKJ5hCGZV86R7Ty16pRQizwikH4pf1nXpqSaAgmZqyYtSCALM1dghQXvwsNvdeUx4VRUEF2gqMC8qzS4x",
  "key11": "WJLBvXnxZqfPH2ZVbUEZSPLup8Ki85QvUUkC1DE8bfKYDe8xMMfSwsfBTbrgbYJTDgD8yUsTuyQt4fXjWQSGEYd",
  "key12": "thPutLb2BvGDuaKGsX9JpXQKVXiyfG3XZ9X8o5jTNiY8rH6jvCkq9x4dqVk5GxUCCZqvoSdkB6hP6hC8xkZwmHQ",
  "key13": "4R2tGYj8JQUBzLXsHmAK81TUvKeWVZuiWk5F9nbtPPCicYDDmHWdviALrJf2WCpTvueDrs9ANqVedX6sqbNvaHQA",
  "key14": "4Ex47DteisrGdFErGfhHXZ9XPUJS1bYQPhuBgpUyj58pQZReAkawrk24ctUYNSoVhJWMgq6K1C2h8VdeJ2GUFWSW",
  "key15": "3mnSgJ2T95bRJnjQDNzZ9NTioGHvmmrK6Yc2xcW7wySS8PZijJtawA28iSNcrsxBwQqfDuRAwpr4Gv54PS47rudi",
  "key16": "5Ww2QKzz2TQsrWhPQkYcL7TCWSFzCL8QsycXr9THa5se8KEobediHyQdTqfhpjzETWmA8fJTmwdgkP8EPvhoecuJ",
  "key17": "2ktozY6QdmkSe9X59LE5qfQtRkvWE2mg1rQMRpcdvYnVJzXRNrp8zNGTVQTqR5E7E6Y28XaXnDpH7L975oqYHuyR",
  "key18": "4NPVGrq84nGvgBeEQskJtTCqeat6Agg43xsnq5KuaP8ALjnU16puE2cywzHqXPqo88cLkmbsXkDvFvc46hqUf14X",
  "key19": "3VMa9D6fip4Sa7p4RwVMjAvDbwbDfvaPpbCRTqSJ2rwi1YCxGf2974upq7oVLUMJw6imSLtWN6Vn6EukTSDLwgTy",
  "key20": "4YVCJoGiCKD98XenRSejQATXpQQSFS6gpBW8rgrchYf7q5vSZnacFrY6z4TjNeNG3XY2gXwhHYmoKghG62awsZEq",
  "key21": "3msqSuFf6RAcNoWFHVjfXjwpgQqvTbyCRGayuD2MCCP4RA3agzhSA9QyDV1Fgh39JJebnwFhUJyeHUkRc9SLGu3e",
  "key22": "5NFdcjnCAqj4T4skvNkrik2yEv1JA31huVivPJyvWpAM4H3uycRf4DAXQV5qvHQ7VfaamCUpKmZn1w16Hez7iRsK",
  "key23": "4XRcUX2Lk9JVW6W2Eweqxw2omRPM9fAjdsDejexAD8aRRStbmApdpSVj13YYPG9zj93A1LvRy3TLTHAS83dKCRbW",
  "key24": "2yhmXfd2cEphBEmSHFrUUoUzuDXzjbeAKSLSF9z2ALCQCwx2KEpLKZfTqMjtKrBGbcrYUD8a4Vfg6yAMKqtzxdoy",
  "key25": "47HdKrsceZiYGiFCsgVdJdKKuvD8WaoexxPUzT1BYdQcHTQa8AADwTAtrFJzCLECdrt5Jbs2iLzAbexGSAz6kV2j",
  "key26": "XHbKM2iDEUM68X4tbxasMpSWi95jqGUbdCe27uwxkFaDtsd218Hy9GGGr6wVThNimGLcFQRhMzY6jvEoJnd1uj6",
  "key27": "29CFdMbHJdkv1qvagK1Un9kwVJRijqbXmJBugKgx7NGQgeSj9cYKqBLVyxTJNXEZAs6TdXw256sHmcjfGGVRPtUV",
  "key28": "5XGLEYsy1ou3Tq6C2hcBj38DueQ13GwqVK3f68JneebK4gK7DHSBTLYaTJpKoetdDr6a9DkL5VoCaLZKY58Hwtxv",
  "key29": "4VU5YqY275MnVsfXt3GRepENGAim5bRgWieaSDN6TYSRfo5he1z4YvKBgi3S8WDKD9zgs9H5GV2WGq8141ih9mCG",
  "key30": "6mMFh4owMbGFaf7hgiGQkVooLz1pzPijTdkvYWG5kHHUc2iYLvyMsg7iMf7W6pw2MMT5UNVpNj76xVHUhDHEFwW",
  "key31": "4J92SXJ8WichmUD1ZoA37kE3MKWRU9uYUBx1wJmANRvdK2vyttwmVBphMCaHyRwEECcct2PaXAJbiWhQRaTbF28h",
  "key32": "48RWCJBDjhF9HLZg8mTne2af9mTWWzFyjr66tYCbBEbvh1UPtQWgqenN5Hw7BZgmRdf6TvPTKNK1x4jGEpSf78X4",
  "key33": "2AW7kqhCT6SRSYyBgNTaLcFXJBkutj56iX3BBmYLZ2nsfeMd9vy1r82jMovSRLweFuvPpaicjafPqnxgGCpR9hv",
  "key34": "3rSeoVwC7Ef8xhe35mDLdtbsYE1odV1a9AXyEwieGLEjXRwWHGqzYDBgq7LyHbXP8b4wsWmNwoWtMh25jPLtfs7M",
  "key35": "3k3Y7v1wtJxZz2KL8858SAjjc5D6fPYhpm6sfDvHraqJi6CerfghdJgUQB9MJsipKmzMbHCQKHdmP5exfxQ8bS6q",
  "key36": "5jqRRtTwVPSTGC24gnaqzjuw5V9PnCsLKL9ZHLJNgx1Bpt5gMNJNz1yBVEZT4P2F81tofjhVSvivmLsKc72UFugu",
  "key37": "3cDqffDoBgf7LjJEU3RxNZsoRXzkWwcBnZBLLJw5mWvkNHu49xTdXwndKx1n4APYetQp6iqPDQWhU8iux4qjxZof",
  "key38": "5Qx78D7AkyQmrkMY45vD4bXWMiyNEtNkGhpYhFQJdp3EFVseSxs3sHWwDKeM1tFZFA6jES3dP2uf6v7TaaGM6oEa",
  "key39": "bBx5sG22wiqDHEcxAXYY2fnb1ZoEGrvpk4fQjZVzbKRwsx6ZU4ZgTxSAwdV1UuED1MQs1JKTcLB12J9T3wWqv2E"
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
