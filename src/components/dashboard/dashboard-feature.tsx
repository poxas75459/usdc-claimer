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
    "tSBbs3jUhDzUWNTczsMmVLTuKAxqNhYrYWo3aGMyHdPQpjzR9MxzpcF3ZVS5acibdqNAuHe22UeTWqwTwcpufFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PZLhksH2CVdhqGn517hPtHzSC5nHqFFRCuy6NQAbfARfgj8SxyqSTJH6pCiKKPQHmtvQn6MPadguE6bBJmk4N7m",
  "key1": "Df4fUkTE2nXc9Yogck12arxq3RegANQvkAChLQ7bPKdrqMpyEyfaj6CLCgvk4bNBKA6XvUep1X6QJsKmL4KbqdA",
  "key2": "5weyWkD7NwLMvJQErZcN2oAWjwuxzWD4t1uGbMKRXXnab4AHaqvjv48w1gHssg5xt4ku9fKorf7TsbBPsYkDk8Yg",
  "key3": "5M8MmaVSYDXjn88xU7J9teGvyQ4oPccNjEuywvPGPmTyvAHvCvg7VPTaG27iTwgDzfDSrrFq68BiwnkBCtL1hCwW",
  "key4": "2Y9Cz6WA7UMvoPp3MsUe56s6uizjxjgHf6dnavNtiXokvpskrksnRcSYFqhg4sp8k3DPwPG5LB5poJpEH4vV3qe1",
  "key5": "3zxujMn3EEbsoRC16jkcX8MNazoSi8tWqgxxry1RAmoaZHo8sptppiKeFjzWsfikUWN5k8UnS3fA3ZQhVmoVjpQV",
  "key6": "mVuhnNWQ151mkR13ptu8g8EM1u2JJczF3V7KntNS5RqfDcrBDgwpfpMvrPSxub37sA7G7caLJGPmEAB9ogieaAb",
  "key7": "3znocdx5dAD7EymgY6W8D6TEujpXBG7WBCEDQeBK5zdSqWJzhgnWvmVesfeDqXv2u3NSuN9mY6932eUMf3pZueqY",
  "key8": "2heimBbBo16rGSrhJD9343JbiUiKspaH1vCfZ5U5pEuEpZqQtSRsUNGwJQZb8E7cycgTqmB5wafVDMRz8pDYkkvQ",
  "key9": "3jiTjPMCH44LU1Yhph958szT8u2Vc3UQW7jAayvHwpCXtbpNBp8oUHyvPNDGP6chZqDbjZt93L1eBjn8h1MDwdyS",
  "key10": "GLfs5QXXJp2GWfL7hwX2zaqjuzpEVUbNUhQwfBTjEqGvfdu2ksePUg2ew5PEJQYdsNeZwiKGb9EvVB9NhqfdiEs",
  "key11": "5J3Dv6xaBJHWNERUWCoU9QLt8UUT7nCchHUqgVpRYC4AQQCbnRaAhfYkVqGT79wucxc11peQ15rUKvf99cwn9jT7",
  "key12": "u92K41QcEv3MT8Av4yPtzbaFEg75b6GizoGAsoj4PaNwQHabgHR9voX8f7wwxm7YbnsFXrVmT3KnaYqhciqmQKD",
  "key13": "61jsUSMU1WJkRCHmpDwLBwTHvz86Eq9G8JHNGbHij3z1XkeyXe3TdyHPgQt48HR1L9egFXTdfVXReLzM7mMuvTXC",
  "key14": "hN23oxe2b2QPeFetiZPvn5gpaKJ1n2y6AMJ6uENuKfAsi8pQiQ7bvCytdHHqXhfipLL1upJTmJCSSmPYx9LyvNc",
  "key15": "23tLc8ykbhCmEWwGZKtfZCCbAV8eCgg7wCve7Cw7THAVnzAANrf4Du2BJMqU7u6zA1yVxquyPUgy7ecD4KFowoqt",
  "key16": "5FnXoBVSAmt4923Z4QDGHd4U9K2FB9s1R1EHfcim4bWghD6QTXuh2xRFJzpQqSq4nWb6KqHmWtRCsWHJi9NHp1pw",
  "key17": "35bAWDGfKmNBko771xzAVR5LRHS4JV2j511CJnHmVuJ4jCJhnHwCLG9Q2dd7BYhEtSAqnH2NffpGTqW94bp6qc3f",
  "key18": "5RRwDfnKmQJaexCXcDLDrfxfKapk6ZTXhn61R5JMLZjepmF5JqETm7iCghUfWL61ppQKAvDrtsP7wZDmZd9VmXhq",
  "key19": "28C6BzMkVRWK9SkSmtrPpNSCUTNHa9Rj9MvfgfXzUSebvnmCUmWVNWwQUzVFkpk5r5gucycXkxoSSg6oidS8rUQR",
  "key20": "5LVZV8ZQn6chMDAtLdaiztq8iByzajuDCK7xdnwL9qgbwkHJp7jYZioNvJqLjHZiwurTNy26RifhQt3WJmHB4AV",
  "key21": "5MQR2a9Hot2uQhkxBomv6q7rcZUSnZDtRriXDLwdEASHcyaW4oSGfnSns9fZmg4bbjh9XKaJ2wXbWAZq315ZfHQH",
  "key22": "44KVZxd9nojkZDGBjCekMMKEeFFLeN4S6h5mwVeMMvipPq7kAQjAcKSH5ncGZ5sjwDD3munQhn1yWL6uuTbLLgyz",
  "key23": "46vsF787zj73rbD5yEdtfAQJ3NfnBzPbaJetkMApCm614ruSijaqJg4PuVoeA9zGsUycZLGPTWX1KfNBxt8xyWHC",
  "key24": "PSNJyhSsRuttipR7KX1RHDVo7ifAz39V8EZCGT1SmQN93eQZn8zuHQWddbsmRHGN5HUhU4ErtMGeB9SP9EfxWxY",
  "key25": "g74grC2eYBQvcPW5rGuS2nEytotKN6WSRcV88Lj3zR7WQPPusEhSVDLcopN8LWc3tkfFpyKhVxvacqtboGncd5V",
  "key26": "3RwCU4entL2hWHK6xsfQVx9G1BB1aRRLXTpTQmSBwfDJ9xCwwNckJMD3iLh6wjdvaWMu5AQZVAMecuzCg3aLw6Vm",
  "key27": "78G338eTzpnaPkptmqJp7vNwziB8dSZPXM8CgvmMBk16mNTUbgfoLaKbYZRsgCYZ43thjbA8PLgCd7ixoLSKimR",
  "key28": "Dhp5xBqT1uwbkQT2YeqnDHu2kbVGKkjeF8o2UbjcjwEY2GdrmFJkBG2rKG9PHVLEmfuBt7XzN8JeAJ3cuR4nhid",
  "key29": "5ES7iGunwHRrfHwCnddHBHqsVoS8NvPnyo42xyLysp8knQeLF2XL39piRmj29cbHzUgd8p5SHGgvsNvzbqsHgHxZ",
  "key30": "52oaZ1aLjL6WRt5TSHDwWJh6ZWRzpA2y9qLx3wTUNTuYamBw7mc8qNPBZxTbNK6BPGwPx8vK8joJhGkpDaFSvjpc",
  "key31": "4wmqQk4WX2mgWkpMGP4NnKqaUFKXfeko7PMhzUEyoB4VxPCeeq79MYWF6w4qPLUd5shHodSWbKwE9GM2tUFnrXKQ",
  "key32": "2NUmSYzm1zFoz5u7Nv3rRyioUhYMsAjQKWFaihTJRujY7Q7RMaaPUGSLDmB9SjdbK4GtUy1S9CT74H3SC8mkqcM6",
  "key33": "u36ViGG29RaNHXAzQwkJHvzHyZG9JKgQt1z99PjRj21gPLNSo44VrBFkzVydfQYV3n8bPLPGeQ1KS1nc915mAmc",
  "key34": "x8vua7Mz8dkdB1XRXsoRarcjd4xiWTvWGBcGxg8FQHLeA1hSrv5qAfDoYnshJLPPavfEbCP4aum9WpjZvY7dj6W",
  "key35": "5P3fQGQWJg85C8NoJbykYTh8GzXFxiH6MfXAHdwZC8wUZeDbSRNXLmZ7FJNJtHMx5RCYYLVpEKgEfDnxeNzqkzVV"
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
