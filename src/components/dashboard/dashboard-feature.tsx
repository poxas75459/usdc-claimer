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
    "5Gf6R2NAW1ELPuoA172zwGYat57YPy5HfHmZ2HBYoTNrJqTGfeUpSgRauofGo7Kk2PfcV2LaYyj6FNgW9ozCDZDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gNaRL3HVBaU2UbcKRh4AydkU6nfBSGPSTU1FVVT6nLsvCwMqkRfMQmuDmb9MdbF5jhPiKfLiDXtN2RHbCUCBmV3",
  "key1": "5HRUakTp5WFHTXky4aVkHvEuRMFK1ai7veTg3rrMsx3NsZN4N74QLHyxToaMDBaGRVQXkW5H3qCzqf2KLQe5d5CU",
  "key2": "5QRCBNpseFjXVftAu7KUD1eFXMBmo2QvhaoMhNk3QFjhG4coLquWy8w4EgcME4uU8PVi1yd1T3PRU1m9koFV3dHd",
  "key3": "32pnsstomxwmGMuPmzUR5wuXmgzv1cp9r7qRAhqHEz9iYtPGNfVNQdG5HU1GCptuDow6SMeNV2ddd8Bo6yV71Cft",
  "key4": "5mvkSRrQKfWnx3HysvFJ5zT4NwrS6kRDS3u346sWJScfuujE6A6vhT8FygBwKmDxfKjMU5USCUXWZpDzxshgytpJ",
  "key5": "5LBy1p9K1bqBNSsy6zJ2o3AMAzF9mf8ih97bG418X3cZygGao9mRdJCjRS9bTHVZAEdyjzCHYKgc9YpTQZkszj15",
  "key6": "5aTrdqME7pDe9qEwnvirXz2KtMpe4QbNhSmDFXoYnuT4EnnwP5n7QdVmQMJ1QWWG7F4aAx8reYuEFK7MBbKFANAd",
  "key7": "4jVa4ngbsWwKfwo1KzNEvYgDCb83jnLdGNaXNFE1jfy761piZgacAeEbcQsHcQZjRtWHb1a3Q7Xry8a3NZUsXJ1N",
  "key8": "3VqCX1uLoATYFFXrjCyzHXEheniykDRK1fR8C45zYhxsbxdjgjU6S8irnoFTGRK1rshrkEa5b2xtaZ4rYLnsbhtW",
  "key9": "2vBmg55uu6B3nvJPMuR1NJpASe12i3TNEewzESZpsxNSawmyjCF6dmMjV31j3a6imyrFugHDiEYZb6tQ6fr6eEDk",
  "key10": "42hnsvDcye4bJTKmPJnQzigR57kDBF4s9vLvn52RNSAZLXRqAmxzA5FkXE8kmK6FiGFMcjoDsb6L56bsKjL6FBd2",
  "key11": "3AusERWEhPQWn7DgzP5ddmeGVFw1JXM6xpgDPVKMpwy2hNTaDyWb97WgKQbhAGfoSEz2TKvnusaMGaRWXYeza5KJ",
  "key12": "33XHYeop5mqnq2cCfY7p2iU4aRvUys2XG5ui1Qhwjm8RHeLAKRSzJMGH3vCSYSiwxFF7FPJ4MeRevCSCyUvnSPND",
  "key13": "fdAEiBhyJkh5inWmXwXEwkRJcryP32xBfYFCqGHdfShuiQoR6gpkHoT5nGmYjp4RUSLfonLpQTxzKBFiMu4UJ2b",
  "key14": "21JqrtteVwuMwFEow6bPYcPwHgRUxCKSMc5XAjLd45avnjE4pBFqfdHVhE3uCXzfYSQ1JamZuBpFnGK775zjjepJ",
  "key15": "3NTxJuqC4PSaUV9AcUPg65wdB4SdPyHTqgVRqBWiks5qp2TTDLKrJWUC8HkpyynW7E8fKUfvcXPAyoVvt7aPa9cE",
  "key16": "3QtSq7uts6jqwx6cNzYGdgQv8s3RSZhkxZrCJeikHV4WgdVK85e47LXZ6b8jvFf6rLxmzsEPdtEY3YTmyaTi6ZcB",
  "key17": "3UPVtCdmbMwdDWUXtiWHstGPxtZgieiUYC2ZD3fPYNJitDKu9mEwyBaUvjuvUfMgPzMxwtYaPztPYjnobtdBZkjL",
  "key18": "4YtKVkHqpRAGhasr9FZvwFdH7RffofShspJD21XE61ApwUFoW3fGYkrVvUJQtxE4dCCo838vkNq3fL5thKKcct56",
  "key19": "4SG4u14cCSciqmYABwmweACQNJesnN3SFAbfJAgqMEoyieeN4kpnovo5UAKQeDDDpsfpHbnx4zc8kTKKa5LtxbsW",
  "key20": "2CgETM6myhMukTTGHQq7h3rv4yEgUqAmFCcA67fM9xdoVpEYCUiYE4G4kqaiKHgzLk6ZHTJmF8DYDLNsvqatXcuh",
  "key21": "nQppstS6F9hakZGQ2gmmRu2s9zz1nwL3F6G2imcWFvj4mVKnvBXnQdb3fjGZiqma44HiikDXhbYzj4T5TG4rB1u",
  "key22": "XjH3ZqpwC47hAtA3s6MEzDfaM8x2Ttoc7PZk8AzHPTibQJ6Q3LLcBWxq2Vcb2uYcVAg1Ar24Asx2UuSr5oFtrwb",
  "key23": "7MRStDiW11Ktfdv5v6cCaW4UwbLio6NfU8WBqomLNusmYyFX4ECC43fsf8YA35GufoUSLwGjTKP3pVQSGKsYd8W",
  "key24": "5siy3TX2ieBraPmTTLiH77F2XkmN4sGWYrEZSQBbDYojQqGE64r8FW99LEJ6HYtPkCDh6wVbm2RTjVbq3eRz5uWs",
  "key25": "3dhEji9bdsp3MJ9rBwGZoEB6czvFJcptwjTDdDP2tN6eh2HM12um6bT5HjzWw7o5Loh2CUHxyQKxDeQv4L2svc6y",
  "key26": "3Y9dmZsm9YzER84wzxbkta1DdSbJksF5vy3WDiVfrYZQbVk9BrLM4wz7SFaG5uNz96NFPYcqwvmR16Yj3V59EMpa",
  "key27": "ENn2QgRyf9sdyxTm4Tq3y57B7pEbhqoxDi5bbyCKYEbPuEoBzugMoRDN2d6DhCqzJF6dKPdmjHUQqx65Xa7EPEg",
  "key28": "bmttFE5S2fdrLdbQZTsALP3BxCXnBjgu9rCBsT2SLgbddkAx3QvcwXApEh28vhm7s4ejXuCpWyGhJZRichuVij3",
  "key29": "35AXrkoQgfx6JMNsH3sDNcHCBJecJcc3ioKehEAkzzZjvwQu3JfawZCw1RPWEMndFNbYGb2ra5iaHtnWTxu62oSk",
  "key30": "65Ni8NoXxJuvYqSGBDVgA4Bs2ffmbKPXrPLpgt3d4kUafavUXXHuzVp7kgLQ8dABf3Ek7NoLkaHyqHVoaAgjULn1",
  "key31": "2m5V4jrRFwEQoq19ixjDDSeWScmYRaqHzbFMNGqKUU3SxvXgrcZqTCWDWmZmUAPMxHkQFrRKnMnXTeTwu4YjQVsU",
  "key32": "5eaBNNghi7fmkhh6wgQuRqztMyhwkMBKcDZ8oBDH5RuRPEJeWj6h7AgdZttFaad3NPZVAZj5iJzrhdXymxmzeX2Q",
  "key33": "2Evg7nMhYpEQT7PjGu7pFrWL8tRpwRn9cn5XyZt5Fk2DdjrapfcuPBmYQCmmct7D4DEKpEwfXLwgG7HG4niofxMP",
  "key34": "412kvbNxP7tehuRBC4yBDALAuLYH9MbmVZzfcsCQKi4En5X1nnnkY3ZQVFvDbxdnNQZezpyGVSJgxJrxz1ZfoCmr",
  "key35": "4uHLqYncPYiLYnw85GnV7KfHwfWGLPGsMPy4khktbWBhHGjfvpq3vS2GzqstgRxmNXVUGPx6CKtNTBctv6HVz5Lr"
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
