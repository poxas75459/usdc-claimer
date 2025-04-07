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
    "2rfrgkrdyVBxuWxDyQ9jLi9ru62jtjp9asUDW7m1tZYhmz3mAV12WJ6SRagLeL9njZMRJ32UHJRumNnhuYD9kr9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45q54E9mDZAD9TzK4vtEywtPE5cR34NN3npXDc5Cpe3bWynW1qaGA7twuUpS2gh95413an9EDaRbiNgo5TJqA5gD",
  "key1": "XSvU1vm5fBJ4jsv7wgr483fS2d5dCfWvkxfTxNxsEopHkFUkRPRKa4NdFkiqJyC6opFVoUJFDqMgSkk5c4JD47q",
  "key2": "9ExvWHe6mWtDDsaz8u6N5qgz9aRpiT4GD9NP7EA5Zdv97Ci9xaCEK7EazZAQD6LN2VuSw2UUHn8HAaijpm555zA",
  "key3": "2m3zF4YJjcUisaVyc8rPAo9mMBaquKBJsSic2BNjBzau6RKWXQnRskCPpjoBSg6Zd1miCVgt6ENRsXE4LKVzNeqs",
  "key4": "5VT3DrPjf9EraEhRVKTQF3ZKMtWh5N5N7BNtQBh7THkH3jFQwPpajMMibMBuFN9DNkucsPMWRzDwUqqT8KdNb9nk",
  "key5": "4nasuEnorYYi7dWq2CxqE9gTk7aWorSmyYkjwKH9H4mXNWrZZCtoV9Byw69zLzGh43wrN1SwXnuKH7nmKKirrnfc",
  "key6": "36Hp7fdH1S8ChxN1JCNo2o8ekkDEXxncoEBPWoqoPVDic1cWGdgDDeh8UvFXeUBiHZWeZqeVzmikdumrCkevPYAM",
  "key7": "5LgdjZnWxkwcxz9cYWypbKAaExWsjzjv1SEWtHeH7xG9WLru6D6ELWiYM4q84MpZ6nCaUfZVnmYM13Eu8uuv3q4K",
  "key8": "SEx77XhF9WynM6P2a5Vq9uumNQq9xrFyt1Bm4A67XvbxB5jnKhnaq8Es1Sd7mTc91Ex8CKsvaKDJvK9CFTrj2JY",
  "key9": "2MsKDofYtBuNR4xfjXvTPe4WuFHvU6VdFu13UTkCUCYKm3PqXUN6RjhFnad85dAyKau4DuKXUfNosKqXoDiqemMG",
  "key10": "3wW9MGFBn2w1LUki3Dc53gvRK77QotL8LDzGrRsoq8Ajv8t4Y2eSgYuQLXMRqpNs8m4qxBo862aTkTtRZXDZo4AR",
  "key11": "5TzBNCUa8h56zzDdmcYcQtoHAfZK4bCvymitAq4wW1AdaFBbgRCSjo2xjtErhyb3bxgMRcsxn2eh4jXH2yqqx6vp",
  "key12": "64Cm3k1m6YyDTdatNznfNzysM8YJwVnbb4BvbUyhBF2MfHXjdpxMwwnkGsudjpP482bjiGjS767wKHSEdGKe7HpH",
  "key13": "31hPr5r8hQLwgRjFqWCbrQ6jL5NfNhPzFszdztsXbdguXxKxpZPWUyR5idAYx5Q2QtfcX3FUkLUy6EhHhTAGfyHU",
  "key14": "2iii9UFQiKbnQyDZ5EuubVdjs5daozb5WVrBAg68ZsC6kVsDSeB7TBUUdmb8udjx9aoQfLZHRibso2zFenonPJkU",
  "key15": "4Kg1ENMmonF6gYtnUyz8ZyJNKGjcsb9W9yNY6YXsWTPU9eY9G1uV5amKdJKpEYNkaa3xJ2g8JAs9e8TgU7A1ToCo",
  "key16": "5PuXWi26Hc4NorbdUupmiShaKSD7FHo2gGJ757UBY1wxi5aM1YXq8jiRJX1NdW6qUdraA2AVRphe5Kh2HjXSw1Kf",
  "key17": "zZZpUYHorRwmyR775tnY7mpCzEkKxmcrn1ubkGDL6bUqJWfsFVEt6Eyvqb3vxQfKscWYVKvt1xXg3NihGQYvusC",
  "key18": "5WCBAKvGCiAoS2ajMP9PyPTE9bMtxu52BUssMWuDoLhyesTgqZvZY9kGBHQfN5mTjJUSxWUA5jpYcPrFY34Vq9ie",
  "key19": "2wRMu2PDbyhQNUnNFGMBF4NiSQ2o6TobqcxKSnioVLaQfiDMjwTpXCWfR6MxRyzzy9AnSHWbJwmzpWUaRBpzG5rT",
  "key20": "5GQtNkGPEJyxbnZo19HM7E3ZdhEradtDo8ZdfMiEYuBqGjmDdAqgfXKvXSdBp45ap7PnKpMCzftstAW3BCriC3Zi",
  "key21": "Zdmj3YR3tQDCAa8p8szVAaW8N2cZgsdhbcFL4XfYz6SbTi2redWmH9S3xEd4KKtM8oDHJzfQ33eEhE5dgLPe4oZ",
  "key22": "n3AnfKiKDZgHys7eDcregbGnMABRFa1JN3g5viyrggexKTBfmHg1rqZP3pyjQzZUrvJ4qiTUPZSiXz6nvSSEgTq",
  "key23": "4VkmSVjyKn2NftjGHcutmpo5QW3uKwMDFoS3DR16kDWn11PFjUkjTfsy8MUYNtir719rUoqxhmj2oPxB2YDAJ7Vr",
  "key24": "5M41uC6Fzk6ojSZmNdJ7Jv9R8BZJceqQKcS8Fyh4RsoMt1d8xscE6te7JPogo1Pb1SXzhUYmax8HYaG4AEWtUYR2",
  "key25": "4h8J13vKZdkBYqXUbWYtYnjuLTDBemsBYQQp7fHtLeYFVyTzrDNtAZYAjLRne2EAzQTHT85mNFw246yqty2JV16Y",
  "key26": "5fvvLC7X6tDxHwXLsUikTUtSPeDfngeaFoaWr63VKxj8s3B95mEojA2RDLxWxXE5hieLzU8VJVrqkLxMZC8nD9nm",
  "key27": "4CN83EcUstPU7M6BYbmTx9n237JD3iZb6Z66hMx8pc65zzPp6PkSkvUXV1mkHQmvtqjRF5rvpsHh6dBBp4LnjRD1",
  "key28": "48ve6qLVxJGUExuFUGntqEMu88e9DFpr1QhhVqkBqfSGNoewZp5thVVbr5obr92V9kvTKaNYM2rPcvt5ZJgADxe2",
  "key29": "5FJbmGfeyNPjkB2RcHTVkWiDe29s54bL8QWdjSCW9VLnenitNe2VFJKCfzB2o3atdhbRqbQmqBiCoJb8mLy34csz",
  "key30": "5CKPkafCoSScdpQ8peXCZwzA85SFSmwM6ZDiZw97cbZUNszUvdP67fhshkuxDvDfA8cdqfoUF7ZZfLvWRHexoCnn",
  "key31": "4FQg54DKtjBQZa2xwSV3w9wTSphWRKZJirGuhTQvEy3kncP4FxQTPXobDpDXHBEFeB5xXT9zSneRBRZRWyr9oiXh",
  "key32": "tKEWvq72Qtkd5R3EDJ92y6aLMHPDwBqKR5iXeTqj23JdgB4tpbRSWk1SkALjamdw1YPjQJMLkVZMEog3tc2uHLv",
  "key33": "26UUH3m2CgHc9A6bydhC9UdgaHnUQCzcaH9SmKUXFkZhUsmMsE41GCsrWez5GhojYNUvEv8nJva14hcMctisEMqX",
  "key34": "hHSw13N2kX415FBapzmGUeLJjsMGH7heYNczkuGUMVhTtMoV6CrB4pj4CVaf322qYEYQHVtgWNQEpiELNKb4Fb8",
  "key35": "3KDcXm2xjLE3gDDeEtEXR2EkjdT54Zr8oVM97TZQ89tRWY8RAjXcLZw7hyzWu4hTLq3S9R1pdZPzUQYv4uWEGPz6",
  "key36": "2F4yzzKt94W3kuYkfHVSziqbtmmyq368bzKXMuqW2y2FCZ1TJaSo3GNi5qi972n5AaLmckdDDpcRLPhqUuoWNP4Y"
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
