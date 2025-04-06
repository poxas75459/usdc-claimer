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
    "KoAEgFxH5MNDPQyNuobvQGn7f1UFjCezvKDiRBNsJeo3VtECPvHYUcKo1Et6kvUkRJsqy2R2hmR6HKaFFYDgi3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BKwqxTaSekgZ6UMwN6wfo1hUiEPWPAky1E336b8tNk13YEchqY3VkaksPULUg4SBL2E7qhdT6GfvZFV955b8Bbe",
  "key1": "5D7f7WwFb9dTUUKFxe1CZR2LeCdKbhQgjhGf6NjnyY1U9gohLj7iKyMBm9Y68qvgd5rxHnGrvQswTyDTZds7Gg3q",
  "key2": "3wrZZUVNWS5C4Bq7WZoswF2j1YV3CBGGbNArfEaUNfFGAbvQfUxnBY1PmHU6oCLgfmrgmow9LyfKPQ9iPtaPUufR",
  "key3": "3pM6N7giLdXy8cQuN2AuSUJABfaZAN7h7gSNKw6xpNxWaJkHMmWN7pbEgNtk2Ku3FS7vd5hU6wFH4CTeB6fP4Svg",
  "key4": "5N73rY7T9vGHUtPpv2CDLqAhMKuAvXqUuKDBVeAU7kHDby8GcPTeENFVP3Zi9U1WEG4J4tUMN4Nkg1kESScyAQoQ",
  "key5": "5rJpMyVs5zBAkKAsahJN3hF2kwPA6mS8MD4mMfixKQeRWLWcRevuRQCFHwXWZdLb142mWUvCCJbfmFXnq4gNRUR5",
  "key6": "767Ute1MQDbSxTx624AtgYPzuSbbFcVfBuvgSznu5YaVsqwNahB2eSTvVMMwwJr4XFiKXSTgh4XENviLRSgvJEy",
  "key7": "4Wf9pB7cBa7hBXDfov2RiD2EXTqKUvfXDbLPrLCeA2DNLMXRUHfQRDnSPHhadXx7mxHX8u3tqAZeAqRmGURzw7Ei",
  "key8": "5fn53s5qxqEW628kbVH9XDDseo6Whre2iAddnpQ63CA9LSrcNNYuJvtrFtGccuAnr4dbRHLigdDMia67NST6XuQ1",
  "key9": "2XbNvCkGDenmEndpyLmWaKYWBuxjvNSuytKhrN1gT216R6ZcndVLXAYZHW8VzGasFM5T9bbSGekipeVPo7u9vg3V",
  "key10": "3YY49D1Zd3mnS9MBEEC3U4QEnb4hpJD3cYSsUQ5tDrjtYnzUHcys5uu6FgFUH8FNKFoQ5qqpQzcHmpMUhVk2jrUR",
  "key11": "2HDrEAKMB7tD1et2jPb5zUyaBKrSwPzvN4UqCKxhLm1QYj8xeUdDQC4Vocuee62C7kvoZ21sBH4ri2UE448tUeGw",
  "key12": "StWTNTGP4YiMc66esbpgbthSzgz9F6tsBCFfzkB7J6K7n3ZewC2R9idG3RvUf5jBoCYytFgCQ4m1uGk3rzeAdpH",
  "key13": "3pwt8A5yLUf3gjgju1mZC53MnFg1cg4c3savwJGGnATFjd6MidEzKDdLm8ixL4Xhr9KnnpkZFCvwybJVPj8S23Np",
  "key14": "3wV5maeSCGpP3dEk6b8dt8CjyEcwNrSW8LSy97GRUsAUFjNWygFqQXCmTTT9jUpynEJoRfoFidVGmY2jX5kUKUGe",
  "key15": "5xKX3864CTGYFvjXsc1fptdutwiHoR4EbcrZxYa7uoGyB4j1cvHpLrJn4YhJbESZ2jm3GLa4oMATMoadB1v6H9e3",
  "key16": "5ejbvnTETLqfQcV7pAhKpBvqdye9E6ggiRULwX7zqW4YeNKhpbKjrr8mdXAD5vHm5jSe5rab4SJUvR5v3qfgyNMC",
  "key17": "ry7efdoWjeUKaGWSJx6NamCz8w62NWtwZVJ6UnpzYJi8hMfCCVmetv36dbRX2umnoxWXaARnDoxc6TZBvV35tpg",
  "key18": "3e8CQbzUPzJQh1ePyeUiF34tRrqUUoY2KNTzHChFcQj2SVfdW8CnNT6hsc5jWxkeshLMBU8HuyHQR6ZpS4zaNLba",
  "key19": "34qeXpdVP8Y3CVEvTwMFVRwmVU3WHNrbB1Q3avobybZrfQpDg2VJ34dJctHsc2i6Bc6gHKQ6VPw7vhd9pEHFnGGr",
  "key20": "5tTxVSZcYNurwnFcd7nARfc1KXAVy6Yx9wiNxB5fiEutY9in4pkoL3ZRpPUZfi24XFtKubRHp4NfNE86WN9DZyR5",
  "key21": "67Pid8AdFaBmpjux9JonmxAJZUqj6oecqcPFXaBDXJvRvBBfUvWWB8eYCvsD7xt799ap1uKD96bUik5JBLFB46DU",
  "key22": "tAGMzhKfwcitvYKiuEd7737gWPmkdDDmr2y1LZAXqfJLeRh1JEQnFdiXAKqzqi1s9gcefgEz4pp3Y7zLJHaot6N",
  "key23": "2NtTA3PgYqFhn3QE735z6V4tJPvbgMcvDou15tnWEyNTwne9yv7wMqS9iGbz9FoPf3ieykgBBxD73yEfuqhyWN4E",
  "key24": "32WQXKLwe7pPJWjpkt4jsiZ9QukvzbmibNTBBx5V8acX5mB7tEmkVZCYcfC9bxwGZ2gHUAeTDU5P5UrnBrDFnzsK"
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
