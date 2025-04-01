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
    "2kG99uZRYTJXaqHipb5LVyM1kegzjyke1VipFHTLKwtThCixZPi2hcDxqC93TX85fAk1zqCYgGbyZ1MLAEfNhh3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RE97jaQamZ3VTSGkrxy5LZRTyAFBxePjeN1sUvJr84rM93QevkfvgjHQMR2giAazgr117gY2Vk8tn1XSEjGnjLC",
  "key1": "3dNZ8YJZUgH7dfCEdWQYnU68Y9G9SPw1K9QKsmfncmSZQEBUBap1ANMkyVqWa6gfokHn4qyezJEKbm3GwRZ3yGKs",
  "key2": "2XXhnT7Xy261i1YwB6SA3cmFNFyMvXpeRPLBZU9XNMUAgBApQDLJ9rdKs31bmgmiqnfedXkih16g221pLPDruDFo",
  "key3": "4jpazNZR8EPw8j7YTiM4A2pcDFLhiNcCbmSQmifxgPgengXSYwNkdqVm5zuhViE6X2KypNtoAfKuw29xWcszZxJS",
  "key4": "3YbtGJHD7wMnKfsaeq7tFS2kMqtnvUuuT4gqn7WDdxZrX1VgpKeyyQ6WteP92hhKiaYxvi9p4jozWZ6uK4NLzYhM",
  "key5": "3Ryn1Lvxn5vzYVx4A5K38mcn8hC6LqcJhsXtuA2fopojYRmoVHmjR4PBXs7tW4esGqqzCN2gHouyDq3aVj5nxKWq",
  "key6": "5N27wPaiyWDxY13b5Fx3TYgtY6W2xoCbSjFaswD1wDNUbCNLHXxwiAN47tnQa9H2QEs6BoC43M7v3AszEe4qYST2",
  "key7": "5jEHBayVL3VMA6fuiRZvij7D5PoLcfu1DcM8ARaMgn85cLeebjnh5ySScZ8U4y8ZidYSYKTC6B7Z52E1j6TBDf2v",
  "key8": "2Zhk9U8ujLmiTwLKVNbg5zBfBEKcDvDiqGUvtcokCr9FCkXupgH8NrDCWMBrAqYza7yKkMDufgg3kSi8HWnUAHmy",
  "key9": "2eX5dor75G7vrZ1mT6fNYar2a52NqGfHmCRtDCt2k1X3cYybZL6aNtrcXdXLLibduegQ9hit4XN84GRSyWwnka4f",
  "key10": "2jRuvJQrimCHFZGM7n1DP2ruNvh2izTmTXYW11RzxeiKBs58AZsK1VdwGzjWho2h5S7EAfeFqz7wKvieaUySBLrv",
  "key11": "3FEDBQ9N5hP3D8VjNJN22Lwm78xBicK7R3iofvZRQEfHr49fbhofH8WhKfa22pTVCoediAMvSkNeVpvu3kXAt9gc",
  "key12": "3zkTtWXEnctKtDkwip5FkBUtexdc19H9qcoD91zR7VRkhM8pCaYE7iRK8WkY9BNt2Np4prf84yn3uxSTYKXQMvWy",
  "key13": "26giBhh2koPk6EGsXrk1ATUCxb3vBiWq7KgC1KZ1HwBNDve4GLXY8kCFqeujbeEekeAeiDtDxvFfeprN5GtpbyXM",
  "key14": "3miXcNEA3Ey4zvNyG6bH7zdjh4wyuMqRM5ZxFFYoh6jCVVJ1KyupZMgqGo2omNe7yBCbJAVKqipsGW9rHX3KXY7C",
  "key15": "4HbedcVpYFp4tF5b7D8LkKhJ3ALqriLJrCieSFhxLGQCuY16pMmrWNYHSEY5YrXtiRFcpxvNLho5FA8u5ThLwWsL",
  "key16": "24iJ9HToh6rPpYcEMQf8VPxPkoJAdrMCi44zF4j2T9p2FqJaE8nRvU1PJEiKr9H9KMqJZiLpfyBmZ2s5tUihZ5fq",
  "key17": "4Aiy9Jch6v3DvC75VGQju7c83jvPsFdCuRrZhC6HwgZMhtj8emztgS9cqiVXRA5soYauGxNrQSLvYDbFLAPuKdbn",
  "key18": "NM2nezQwU7r5CA3TDZ1NXd159tV3YSu6NkuHncXfXzRuaABBNxbvQeJWsrfpQGfTgXeeN282JyGu2NgT4Nw1dgb",
  "key19": "2JBbK72xRLTsLiEcrwBpMWU3UrSv3g7Js5CFPVysmmJiC7iEjEiUBAzjKmNRfvnzN7YnwVxc3oT8E8HvjrU2UmcU",
  "key20": "5zo4LmKFtoauGeMQxaEZqnsL21rLpL8P72sSDBPWHpv7kPsdZU8zCsDJZ89aiS3QYpsAxhtpnAs4h8zCFSXZ97N9",
  "key21": "3gcd4LfcDkFqA696nWVxFHkMJRKiayGbM66qATcN13zwxMkqKM3g2FSu4hQ4pBZib86THrMvx27UwigTyJUx5X5z",
  "key22": "AEGy4dxK7Z8GXN3kkBkFXCk8MxJnq9RBCt7rYmohqvKNoayV3DvLp3MkmSi8j8PqctmMRfM8PBXjyHPtzNrhGFu",
  "key23": "2cD5pBihGfJxX82XbERuQdF29UrLCkCxvn4L9PPWHgGBizcUWt2QhuTH6Rar8iLRMk4gtadzDBEayTD8TRhvkjvL",
  "key24": "2jk9MHM4BxXNUP7cgLpKNLqYFbn2We85pfvfJwnG1XyG6b7jNVFZXuD1T2vj1GHucKHtTfSJ518schjnFvCVXfkF",
  "key25": "2NsKoafxaqA23v4ypMXKUkCwg5twSx5HKfXFveWdM6usvMAPcxrhZaKoafwafTxAQcevG3oipThXMjG3sDo79LuK"
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
