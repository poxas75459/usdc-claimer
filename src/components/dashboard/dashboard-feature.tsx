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
    "4eggUKb1WtJLwc4bTVuPnBXia3wz5SZFv9knZ7jTDzQGP7DTZ4qz6BDDiYVsM8QvxEmW1eHvagoYBfKKT3qZpfMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wyWW1sCi2GCohbw3BsHBfGUvUvBPjsCxp7dLWdz9cu3spMyESxpzi1AEncYTDHNiZCs1mGUSoRFhBM7rXYfaXs",
  "key1": "25PzzFRUPxYFZPweQTv4G29mB6nHF46Xyc2MZAWLeP93mbtRGU9ew5MX8tbyMCVviQMo82ufwN31RxfuwYys5rqq",
  "key2": "4wAA7nMM6XWZtT2FZFGqyFthBoQ78CeneHWbAHioNp9didUf11EPKDks2NZkjnaQhQcCq9wFKwnS3H57XHnivr4B",
  "key3": "52MU2SuJbySnp6KHfFTWhEEN9BcuWfL9nrwFxMWxRu2JAUKGaDZiiDuJjqwH1DRRP3Vmbgw4CARH5H1FoH2X1P3M",
  "key4": "2V5zAWwVTgY1bQEdmxaFNFGEqmx53mKjyY6kf5yHSgBQmpfXXGKSW1gnAuU6CvN3CE44xm5xDG3UvokJvRbuzovQ",
  "key5": "Z7gPNmL9BaLnHkT7CRCo7GxzZJ82GxibhbuQRAaFqb6vDB6QtczanWpdfGAXKX786Cc4bFiJNghbjYkA8zQgVnq",
  "key6": "3vLycBu3S6ZEpckt1SVC5t5Yw7tDLeGBaKuQMUG8Ty1bPpjdUmcpuibWjmLPHExChXn63mmLTa2FUipnjEwkSrWm",
  "key7": "3SVQvCJzfYCKVvEHm6sh1vFZjCGoAeGcTQnRmri1qtAEWrrGmTxxeK4hmejRex2GrHezcmXq3M85LDy37NNjapGT",
  "key8": "5qa5RUA7MVTbYKypV8xxjxMuXuniz3uytUYtBVMJscuitcmc1U8eYkub9fH35NHG1x3rabf4wX7tDqFq3isBTPuD",
  "key9": "2CCCSnmDNVJxNxqsKYFAeYvyejeYSd5eA6DFusDRYrjmuAZrKg6zAYpZYintNmTntwzvvHt7TMKLHv2SxU5ymGTq",
  "key10": "3WvWU99LqxYs8Y8XTdptSHzQNVQxvg8SS4Vrq7WFeMBSQfA9ALt6cetpww5GXgrvWFDYscmfLVwW7a7h9HRrCK9v",
  "key11": "46FeSbunntEdx8XyZc2TjTHda7ta4eBjDqf2snuW9NmENAYQ69Vm91DLBfRWZegHGHjEwfDEPEG2aLWUtt4MJw2b",
  "key12": "5zyNkVc3v48qjqcBD2iZWpySdmW7i9HQJtM1g38YwCQwtVrZoyvNgmKTc1jG9H21tEqQpKn6NEzGn84YToFkL2qG",
  "key13": "Z3MhV9FtofQUGH9717LcKjuAKeNP76egEGqV7NMHqvJkdWJVcPAvHmyKUX4Raa9rV7fJZMaAqBAUSCTWKjhZrun",
  "key14": "22nkiKQTvYzcxNAPQjqu2YE9kHgNJdH8pudzAahFUziSmiPY6GrUhJt4Ye9ZzytoP7fSaBB7BkJ9DKuNt5V3bM3B",
  "key15": "5kpenLSAnDJB3bNACmk1CLE8yCkwb5VRNRaFTuZfo6VMid54KsQx36NW92ZogSAd4bM9xfatMCZh5jSbYxVyxrQx",
  "key16": "4GArxFXp7NfpPVpFSBymmmFKTNnsBeTL8MF419BNoXY7udkqanPLgC1jvuNyM1gmsoHrJp2iofApQG3Cx6MB7Ayi",
  "key17": "4iJRzK6jnqgWNFAtommEZyTWAWgoLDDodncGXUmtDbFn4AiTp5m3MQEaZ8zsxq37RAzNQcMR9NU3pBhuo9SeTnuN",
  "key18": "3vPZpnA4ecHtadPCAgHnUp7rtdJH9q5A6ynTLCbzGhGvdju5asgBkzzy6sgaqgANCSahZ3z9eCpFDJiqQ2NkCsxD",
  "key19": "fSXGE2rtdNDEHWkAuWzu1onL7gNxdDYorBXcb8UYgrJY4XhFy7B8wBHJXhWmHUpAGnWRBTkY8sdKy3keG2CAYWS",
  "key20": "4D9CqxKY3m83BdpS4Yyizf2d2boUD6bmwmj3RgzMXEpLCroTJNxhH5qFmaJDpzBiXzoUVhiXP2aZop4yg8bMUmtT",
  "key21": "4XX4P2T6R5cszpJM7ck8YAgKowdCDYkoe1AJmHmFrCnUk5SZNVjFfR3mZHtiPrtpFpgXmSC3DUq54GyZdXZiJprv",
  "key22": "4a6v5hrBZavzzXZw6hpp3ohht5h1CZZoso6rCJXU1iCM2ogxSnMwLAVjHNRR41bhiS885rArsvopkC2vo15UgJZg",
  "key23": "2Wbo6AKq41JG6FXXAzDNrCWUHECiV7P6kBey5EUF5y1uv2SVMf5EhUUYgCpcdUbrRtQCDY8oD7iV9EsFmtsGzt89",
  "key24": "5YGczNTDHY9Z1vQzFC7kTcPiiKNah6caQzuiq3sTxjufqKd8Sd1hmKj5udmFk8e97e8U9HReW5hrxw8KUa8bae2X",
  "key25": "4nqxr5jyyULZdyEQT5XoikkhUQbKy23Fg1kmftpULp25jH1FqbkBUC4U1kP8zqEC9V3uXEcNnfXA52XgSWp1Naxz",
  "key26": "5zwz9pmt7fXzHqshRcmN4mrFsHRut6BSoYsiS1RzGcG1xgoSSzB9skK4n1NGJtVDiYssYjv1kfsYZqbiyeC5pHyH",
  "key27": "3Jp4YvPnbAjbR81TNnNHzpWaPMbLxALb89PhEBzUfU9U5dJhRrUYffoQsB5bkPVuy6XrAfab3XGyqzGtY2urQHxt",
  "key28": "3ib2wLnmzR3TtfCk9F6CMiRQFWf6HuXmaemwe51utA9nd8DSMdPKyToJMMBA4zBpnt1c5ADhM1PuPGSUX3ej1Yee"
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
