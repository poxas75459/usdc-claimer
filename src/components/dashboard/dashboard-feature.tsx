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
    "48ExrUcx7e4uwCjYQUoxSAcWprGHhhsByixQC4yGd9BPQybUiUWQaajHfKbPqojgoda7J6amj9kjfn63848p2HeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d1hcqoWxjfmxW4KC2NDk2WYvsn3fNHGFoigxm7E4NwVSQgSzfhqNY5eTMAuFYi6yfcSYArniq5Qumah26rFmj7C",
  "key1": "3dhnr2du2HbRB8e9WUHg76DWwQ7e35owXxXQQXFEbDpdnxHsgyJGENe3uoVf2gG3LUxuJ1Tq8GJHc2bgoRV158J8",
  "key2": "2E2NL7dCcsu5vh4GrWzqZpAaBdiLxnN9kU8qtkgRfGjHN7oHWcCjA2b64wup8vDWQ8Sy1nR8duq6JC5iyFJEWTuY",
  "key3": "5y3ZWa1B6H8X2K5EAeoau49jcgj2NNJyvM3Q87jgHPU3XbGZiGJc8NCQ73kynrhUvqgWoEeWpnWaFMwzjhw9kxMd",
  "key4": "3geAjPt43UtsBtDgm7wRZrLBcmKwR5qTAAfk3GErs4Mnm5stRWRnnMFrAABMBvyG4DEZwLmD1WxvpvExJ6JaCe4t",
  "key5": "5wUW8KQPTxUtz6UNV3Tc957CKM1R4dd38c9XgFbJGB7RdG6KZdWidwGfPoa2QdzmrmgA9kLbqUehCny8oqeyRPrQ",
  "key6": "xsN2LV5HbRHQ2Htksas29wcF8wUwZ37LfZUuihSkcckqKvBtuAsezReYA7spN8EcmdnxkMWRKjBi2W28eHeGLur",
  "key7": "2QQZkHuX63kWLW9WVqCbrK3VaQnwuniAU6S11uumi9rqoGcRZgpqsAQJ39X1wBrJA6ah9LKeagn7eYDi2oi1QfFW",
  "key8": "3D3XYEmopcQU9JzpqK3kyvU6jazeT3sppKNPFhM1YnrcuMzHkaG4dwFUMH3tV5K1iGde67goduf3ESdv138y7T67",
  "key9": "4mRrq99hBkC7R7NQptriMbyFMMVbR698oweLDtcXA6xJeqvtNvk7dhpTKKWEFny8X7Etw7jAFCa1BSctffSZxaen",
  "key10": "S2ax1F5fj2HyuSgry4s8yt3HCscbF4YPrTc8XX4CvbfuATtkVQXDE1FikXjtfw1JqfScBSZ56YX4Gd91CNiszXd",
  "key11": "X3Cb68GKJFfPzXrLnpfPLFbdwWMXu6GQ4XRFUwXFGQ7dHYKB2xkvQZwHPmShPD89dajfCQwcMixP6gcHx8dotRD",
  "key12": "38WJTXxet62xDQbMNWyfCPApHeUx6PjfyQ78UbyYQQcCQ7oFzLoh26sFdVnbGkbXMXXCDDPQ989u58LWC6NZYVpL",
  "key13": "2G2cexyepGdRyDuQ6zcZdedLXKaQqP2ecoeWcZNx1v9QPChqmcRmp6eXrgRwYobKyoojpjk1dr5Ap1dVCn7N5VcH",
  "key14": "4LcPJWDrzu8KcpcsYnrt7jM5b6fYucfNU9izxhRCnXkYLVr7Evo2oaB9NNrdxAwWU5HrTj6ddnXnrgbV7UM3S1Ks",
  "key15": "5QGGyGB4ioNh3Sr2SnYTQkhgjWghUmFUuJpHESVzfvPHnyiJKWkRcGUJFg9xb2JoBQbrAyupv9Yo8rvsQhSimjGK",
  "key16": "jq24J6ZJANg6NQ3kxkEcRVXw6uKg78D23oGfVhu3ccMM7TxFn8f6FfjtBoM7pEU9aCu5aViWGpJ1YpUgodTQjhA",
  "key17": "94g2cvRo64kcjK6tEHjt6YzNYRxFXXKWeJRqqtFn4UYxEmBcBCvnadLPeBdqiSy7thN389Buj8HBjxyTfYb4YpC",
  "key18": "2XP6xNi2HbKZ2FamWLg6d52148erEuZHxDoBsJWVyeSDCWEMQT2RU72uwA2LwW57Y2bYswryQ2jyRusNLz1EcBMB",
  "key19": "2wuhugCMqAxpPqYfLsRdpcEUshmybCGstPTtwRQf9AwxjKT7xauWFRCqtHFrhmrc4eQL3yUcD95SReFYQoV94JCs",
  "key20": "2r3wFyZSsM2sghYL6HfbVFn7hzTBEfyJLie3XYSkjugQhVFH1pfsMNRiXnmjQ5wSnk6NkeU5faT1xqvT5VLdm4UE",
  "key21": "4WMLnS16GgTfyMWfnu4xwJfduVdjwn9JDikG44wFeHT2QRkbhHWFgi5fF1wzNzGf1zxhqaBQFD6Ko2bg5TKNo4B9",
  "key22": "5KhBE4RJ1DdncCKvcQ6moAZAbdzAgZr62wg4iv8tUENWoCwU7bART8gEYsw5sHDCDqY5mLMDtKUPKkpFWFwvfjZb",
  "key23": "n28YBu9NwQK9JuiEGBqXTJS5ZMDS1PGDEfCv96Gn9v7ipvKjiWvPGe9momcNWENaJEXwHJgSeCiHaF7V2ksxKrk",
  "key24": "3E9GqvsWjLL6SdhaXmchYiQfVaVaJB2SigT9i8RNiAKpLj3ehDfWRSKWXD4sKnaJXX8hFEaY89DwqZhA7ZcMCQkd",
  "key25": "4onK7GJ5xzXgxXNKsZRMGFQf4TCCdRBCiLFn2bLozCHXVEpdngrbds8dHVULsvURbFRBLi5rMKRbqfDyVczgCYiw",
  "key26": "2EC1ZUaS1qgdY8bmbtoCNmJKUtHFi43ykdfu2j2YPhmSgbVqZHtRo8SssVDcUYJXMfqSoJSHb3DXdk7YLCpG2rQs",
  "key27": "5KgD8uFxiRKuu6yNG5JFSZ9jbYafW3e6cyGByDH1Ua9ZACM5bFiUXDLoukotrH2fe8nC6ib1YTibWtuG1iiRgJAc",
  "key28": "2h4YCUFpjQwnWicvASiwxfMRWypqCvmS3QgCpYvLqHVrkmrFAzUkRxCwbywAC6HDuPSszXf2QHbZnpwhFJBpdCrR"
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
