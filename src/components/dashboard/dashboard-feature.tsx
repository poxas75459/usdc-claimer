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
    "4YBSJEHYL925fDiDzLocQ6p3KFXbMTLCBcaENVj38AE8VkSRbbWJXnq6xP3gcFQgUjxhQUPQLXV8agPhQdU3ifha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HqVvQk35Y8fkSiqQuiXCu5VSfxwm4dvnRvvuvES1RPdM9eJrMejmt2ypqjqkd4rPUM6EKGZh4SitCRiCyHSATYA",
  "key1": "2sE6PNUmxpuSh8h8LJNe1gAy888wmnfWooeUqTRFFcy2ds81nppy5ua8rwZ2KuFg5j4StVs5uosUP1m8aJsyBhbh",
  "key2": "4SCQJSBq6ZBAVskV8rysXfSx3oSoX9Jfq5reKPUnwfv4MVEH1iNUEaeKFbEubq33ExB9YueDYmGK2YTggwh8tsnW",
  "key3": "5o6hUpsyZXKwiHaU1SVwmkioJaU1MfvTzrbgQ52ikHyhqySUpjoBzsZfb3WXUyp7TDqoQHKnoV595basCsfFyaC7",
  "key4": "2nrA2u9sv1H6NccySEPiJUNsQEw2sdFnCyBSkx7s2exzLd6FidXfj29EMAKAoYFHaAUAMkm9bTtqHih5GMsxYcQa",
  "key5": "fnnbzjuurZvb75NqVfrqVJckx6yR2JvQdjgGiAeTxbxV5yeQfrWaP61JPgVccHozMzkYvyEkpPWjDqgrKAAtYNT",
  "key6": "2XFMVzbbiBrBZy635oCarzvNr5xzbEXmjVUruPwcGH5YEMBrGC2U4UifLPBNMqA1PEJtqF1aGqR5jHoTit4qqqZe",
  "key7": "3NFmvA7LsStJYbMWKq2dtevBNW3YdrHeKQ2WfeBYsELw3VG1sZCnRbDmQrKcgAxJXZ7CoMxLYbp8HnVSRzJxbope",
  "key8": "4sJPo1PS3PpyayNNaWfprJJjbFVGU4r98Sai9yScCY2FZJDAuRVizgum7jgnkmp4s7KkKT43CWhP8mT9XvHeQatg",
  "key9": "4iPKUiocoWuJhbwM4Pj8mpE8kYYW5zB7ZH5Uimbi4m2f74zYB86CAtp2L9iHgu21zQ2qgeZycADgReEYLtSiNDYi",
  "key10": "JNSg1b3vLi9Q4JMuy4Ctm9han69qwykcc5Pz28ZM3tc9FTYDkNzgqLA2U6VT8kDy4XZxVwmhuofVZAX5xeG3EuG",
  "key11": "5jVLegNSK1wT8hJzJJLKh2S3bHJqGN1VqMQ7aqQ73Eyd5D9XDo7sbgp6NMgBeeA2JwW5Wh9R9AyNA1jtLu1sQhqj",
  "key12": "BtpA2freGk7uKWcwNhg6ZnaURn24tf57gJYydTkFqDY5fMx4PzcoszMZ9MFgP9HWgQ47bD8uvDgofixqawMo2DR",
  "key13": "37E46dvCtvoBwoCmKK519PNA758RQdigZXbo5s1QDNhcGiFEmD2XtZzZ9tp3GputTUG6mrPBrwPByYduvqWGiZYN",
  "key14": "4nP65fgehr1J3fYKuRyDRwqevSVQTeuMpuDGLMXhkxDK3CX5jRRxF1gQpzhQqouWhiNLMRFwCyoPRLTwJfhs5tB",
  "key15": "8JiJzfXCPTQqbtYojrQvqB1Ba6qN9wAmhoJWKPUy7fQfq6EzwMBtV5Ao1XVsPGY8Lrei1tkCT5pq5nLHdtTpzpc",
  "key16": "2JdV5UzAwN4pfVqkNmPhXYUEPUTrTp72ysf48R5e8ms6XV3dWWRs4FidtRUJtSJvG6ge7dJk5pzVqcdM5P3Nxwwk",
  "key17": "2ed22CsQCtP2ozH52UDs25LY7wZhESRXoujmApvqN9GbyeigAPDDUfj9Vqy7bvS8ubPnU6xB1B4Bo9uCizgbNNGX",
  "key18": "3GP9fEVyveWEKZjbM5xYzHvnXM7w7V18kAWsT6E3YkPJFUDPvm6qozC5oXxJU4jcBL37LHkk8YwFjs6CCzLYmqTD",
  "key19": "4iacyQG3zRvb3VEgvQWNPoGcFr6bERGUqvuhE7UKceJiebE3AKEQUmRVGBuZ5sSxUjSmEAjbxnUvBvtcPT9rDbqr",
  "key20": "5oYmF9xNeJddzcZej9B3b6g16HpLgxnMaJWzW19g88AnwimGPtVHSFx5ywZrjMWPseoJ5zELZWuyxM24fJqrH33L",
  "key21": "4Rn2YaK2am2qTwoiPLWMpXj1LL6xEQ9j4Yo28YuJAeiKsyeNMSz323wNchM4XmxrhYVX2XZg8kwETErv1P52pq9P",
  "key22": "3idervyG64PFLdaGHrE2uugLMhnZnsQ3C64qRL2XZNZnoCsbPVqWkP1p3UXCwb1oQNsy8t2HumZg9wd1642fQt3p",
  "key23": "WFgUk9UYmLospzLZFrjB3mJFUkhC9GRbffPk4JKwQ57JcU6KWQmxX7ziQaLHwsnWfytMeiYbe9JzTw3FkDtzcam",
  "key24": "45BLnaWSRYZvjSZy7cmFm1Kn4xugVzhVDo5tdrqrvXTQ2MKZS8RNutALPxw6aPEHHUve3i26iCPns4cWEWg9UViL",
  "key25": "3G5y6T55RewwBkwCn3DrPv6AQDFqjdTYNqA6U6EADQDMFsMki9qYcaniepKPz3PLTwNjxoRjrjoVN6rEx7qggctP",
  "key26": "3mnH5oJM6CzEqAQDoZBp5z1mhWjpAEL3EmgLp5rn78vtBSLHShx7ELLEV7ZezedBiGMwZMY3EFyACpc8BJxSo1oB",
  "key27": "4uuPLxhAg6Am5fUdnoPqjpCDZq5bpiW3s2krCU9ocAivCNuhKkuyJ6ZJZQ49w8xDnUkkKm9LSyAcwYLL7kSEN3oj",
  "key28": "4GdgXnVtNSmEmV3tZGvmCiCnc88BzTz12TPd7odNE4hwqc3PBU6Nu2BxScXsPe7UiMJYoVKqQ74ahPmnBG5Xg4a",
  "key29": "4zM3BKCwk6ojbQt6hqJmZhdsDigXzhiaJRcDkhf1krS5X81NAQH2NCr9GgH2s5HJVKBwJwa2qp9K3hDWyyCGM7Ty",
  "key30": "39ot5rVuPEAbfEkDVkg1cunbaNAAYQjZ7cnovwky6Z4oybDKSwfapaeZhTYW3ZCUtuH4FGwkdwbDjo7xUWhgdMTb",
  "key31": "69CffRgFKbeNvo1DXgcJ3w7W85PcY6bRLWTSH7mbPXTeDN1EQY7UUjsWsSjyZXonNWQq9xNzhCW3oKD4pg7XohW",
  "key32": "5x3gqwQHnjfShjH5o8txyHXVfX2Zbt3Y45h5eg8xDNogpVf5rwBX3ccZqV7p8Ns42w9EqAsW5RktQCXQJjdLsNoz",
  "key33": "55rqWqPr9UgFTeh5mVqodsXUjgQuRx7CVjk5ZkbARZ5afzx1sytMbsAxS3p5icwxQkjdE8mYc3QdSNVRCnRGE2MT",
  "key34": "4BmxLrJtMFPeM6qHY275vnrzoB8oimyP4DVYkmxJyDB92id1KWuwj94C6TZB4PiGLA9TnqHzxhZLc7D93XfmQSTv",
  "key35": "2VEgquCUvA8wyhy4nmpZWYwUSdhwvqv6LhjGKMi2UYNuVD6832cDGzMVwrZkU7KA34hYRfr9CqaPEkp3eP7iHpWc"
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
