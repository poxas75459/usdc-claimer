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
    "3zeTytgyVHgWJS39hU2uwYp4DCv8dzCST1VSKhmDpSQ4jbVf94jYwa5shXREvA2BgbJAiN6C2p8LFZa9Vu7Pffrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bvdk576x2ghfNqoKDzfPNUbib4gcv3F23g6WeSMzHo2uQJGWgsrP4ng1hdAqGGpF1o4jK8SsMqPHxB3XYmo9Eu7",
  "key1": "4mNudJ3NM3iEkZA6TvyFkbVNg4Qmi8vs9zk8ZbdVUBkeCxke884bHcPNvbioQrecRHpzNxDRvt1eUu6wp4GFNBnP",
  "key2": "5uXaVkgZCwNgoHScmVqtmY5CwY8cz4SUThc13gkWbjCUw2E9eLbRm16dsx7Qk14e2hXj6Q1qY3kahm6juDgSff9L",
  "key3": "2ZotWPV9WuHRFxK4n7aB1kR56hUnHC1DA2JRkWkZoQmnqxDtYLddmD7vx7g7yQHyPz2Bi229Yf5MKohdXxdGUtMj",
  "key4": "5bZLgS5HpzhTvnNPfVvFy2PWYn1X3WeNpLw6ymcXppdN6jMMngdEEha41z7BcuRtz6ckDEZBCcm1HnovpiPDU6AE",
  "key5": "N5MNUx9r3uzUfVEhhTKkQSAGZxiGVWJi2Tn3E9CtDZsEvcKth8DDUC7v27CiZoPAi8twiEQwJsBvaJeDpVqK5ri",
  "key6": "7ALjJmvG7JuCVbjdMkTmH8qtVNyRZvmjdrbTYmZhifngShiGLAqjcDVExtfhhooTdBLydB9WCdMcyZqYs59P3P8",
  "key7": "5ZT1pZpbf6M3gqAHQdpHZQPLez8koj1nximWH7fEWjtYSfJf1GxzQEjBQZb2YzWUyax4PCpapt3yMVyXiFpqnrdJ",
  "key8": "4jtHPPWnPBigsJhNZcfi3Ri57QFJMJrGYdebkGLawE8LoMJHNPULDyuL88foVMhSs1MmpCBbuNoA8ur5vFYqt6GZ",
  "key9": "3BpkCnRNhSRBGSCehtsvcyb1p6XFpnKLUK8LpYyZjd1veUQT5iw25TXjxByijHKhZgaWEUK67wawH2h1zdxhTEST",
  "key10": "2B4H5L8vb2ha6gBGnFXLBAbGhYMZ6igrLWuw3hCGPQpqrqkK1h1UqrD28oK2SLxEegTQWh6sBNcJ57jYgd2soHai",
  "key11": "CtDo1nwcRYdDyw8n4tF3Qzdyxh1wdBt9BK4Nes1Yrdht8rk5cRp2AARDZHPQp79DmzQGN8uZJsXjHwiBzue5s1n",
  "key12": "319m5F1JpFQmjUA9pJKoeM5C4MxKZhevZTM87nszW9GFDCtMq1n2dDcQVWXuNFKdximHi7titydLK1ewht4FWZBL",
  "key13": "3kjkQ2XSYgyHX1mwi64TVwsfUcR2T4SDYaX9pyMK4yjEqYK8fYzgKXVNwxn4y8TNyV8Jd3fbJpuBmi8Aid5VuFDM",
  "key14": "4os17vAfv3WPQ3SRcxXXsAQ6apT9gkMgZuK9vg2jpW9iff7wFjNUC9ch58xTeAbaQ7DhBeKdWn4FcHWKAfdTbr7p",
  "key15": "4TufBBTmgQjUywdbceMRBbgssUBjQc2PqskbtpaGYj6z1FLY2MxrijG5Tfb71hmMeeGFYKSNquHskrtg3U2677TH",
  "key16": "3qgCie8hrdBGYaRV485z9roE8X4NgWycszaskMyxYwsfKuQHnFRK2RgJnSRSrwBiaC2KEDxQGkU7AhTguwSTnS1v",
  "key17": "5PxW6hLYSZeK4ouWBs5hiFiZ6ZRMKYan3sk7u1bPufPYkmGw4UKFeC1V5JM9DhmJeCMaDXkgv22ZJMBCaG7tkJb6",
  "key18": "3z49WCwmSYxisBiTyHs8tMGivYuCJyump7erNymkNxgEHaaC7quifQw7V5T8gviYcF3jusME6ZkuGN6ByuHBAEvc",
  "key19": "2KZTnWSuY4bq8qJrZ7erF6z9Qmx6KWHJCL1r5jnkAgDetc73sH7r3RdhB86m9cAj6pRcFa4rqaxo8u1NgHb5uUQJ",
  "key20": "4iTMvrx7ZgbJP8GKkxhifsVD4gjjJh2w9QprLt2QUmSCgUkxSm49vLrqRZv9HpCRQ3rSQWU6aLZsq57zCCHd4f5K",
  "key21": "52pNkaQdsYpmWLhkaHqe5KGkfQeX2BcNqgQPt1SekJnfe9fBD3fgJFKMtbm5JvBwJ6q2qUkXDkN8uu5SkAfgZSuN",
  "key22": "5Y5jwRJi7QLB1VXsTTz1YNu4qbEBMfB27RoyQVRiE1xRBtvgAFRXiEvQpLMev65p534sipEdBW2kqnZnvELh3XZS",
  "key23": "ZMw8NF619Ene1usMneyv8zaATNK5S7u2BuYE1QE5mTFv1sAnxGSAxE1C8BdozKbE3dV54b5khNxypV2iWsRYUcn",
  "key24": "39oaTaeF92pd5bKE4LH76jYLqpoNagrnygpsqTPhi2eHkBRzBuS9cAyBeTtNPYJiNn3Z5AX77wLmD9uh1HbNyYm3",
  "key25": "5rJV7izTRNVffj6kx4jkwYTWAbiAQi8drddfDPoNCTEwxo7vx9Ba27WLVmcN55GdZhdYR5SR9D4nuZdKTtncjMpT",
  "key26": "qHpGkAcEuqjkKFKXLKnamL4TwwMr68AX11zSFDcNxkaUaAJCBJkhLQ1pbWs5Do8uyq7AaD3yYaPpqbKnVDUoewS",
  "key27": "65SFVNQrwng1hcuiSiqHo5b51xyHtprLGYdAEDZe9WerrdifjGkArUQ5VzJ7kWknpAH1cCh3KqEsnWq47cct7afH"
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
