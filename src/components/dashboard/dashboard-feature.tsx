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
    "3WRfJ9AA1ZB5Hrs6wafNouoLTkEH6sKzPN6N9dtabeampB3okUXRQA3J7uXAaTAb2Kt3tPCcGR8FSjGatnvUasaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32AcpXF4aY81fBkKLGuy9bK3eoYVpkL1by1NCkBwZvwoaKyKR2T5vRgX7avYBNk5RAYAruPgCfKkW2KfFyqz3qWz",
  "key1": "5KcWPVDQq3TKgxuQSFue7tNQLQxZHu5ebzyU8v1V2LZh8sVD5RGrQ7CfS98UDdqbEmUc4ejm1Tfxi5E5SWpqjejv",
  "key2": "35W4wxMfdUHGRPMmSh5g9UfLuyyJjVT25ZDAgtqMDbRJ8tmA8Ly9QFtxXVFALaiHmZr44VAiCNSk8xcEN68NdVLY",
  "key3": "jzhND1XRUZLDtcncZL1ued8j66tazgXqJNE4SbAK3kCHWjsn3F93v7HuaEbmYJZDPo5xUPjqhimUTPz7Bfa4MJp",
  "key4": "246PCu28ucSg4aR5xGVF8TZy58hm1efzhv1qLuP33NRX7YwWhCnDzAv3eeYt7hzrrghA2VEd7RTNZZ5fw1iQhTag",
  "key5": "57WvHwaEEAcJG5QaU1NHcKfXuTg4rmMsPCb6aTwvvv2F3HXCBCu9Jt8JVHAxPM54mSUHBvGiWYNzpatHVaE5TkYo",
  "key6": "2QEBpmiMtNdHFxGRiNvZbhZpGFRiyozuz4EiYFofaieBD2wuUtgSd9RQaB955RJHNFGdLaZ96ARtgFtg6DGXe5qM",
  "key7": "XCDsuuGAKLcxeyoFQ57LotARX1Kh84AaRXQ4r6kn1JADavt9nFjNVu8yptPig4ZRGuY9nEStanxC5yXmLLb8VzH",
  "key8": "4GyUKdVc6W7JP5GjA5ty2RrqW5C9g6DPis8Fo3BA9zeE3z6vxw9DxWeDgMEvv6GWefMPuNAp7S8Tmjj1QCETDXpF",
  "key9": "2afUtLN7uCRRi892ptkE8oVW9nq4Lqv1JkyZHj3Wzh7JYubxTnQEmSS9rKfBggBigsp4sKbNM8GRe9eXRGYJWKPW",
  "key10": "cG6g9L2YCUjuqXYfTFeiWnKn77f33Fmo8mQNmzayqWe5fEhpaVh6mSdX4WCWuFk43vR6X8GGeXWutDzEAsKruku",
  "key11": "3sPJ7SsuNRr656mdYhJ7mcEtf4kwSayrrGTdz2EyhcRq5Gc1W32EdFzT63pNySsLNXPXAb5WGdR9WNBz3a7pPWNR",
  "key12": "5Rz3UURk9kBrPty5mYiWAVpU9gbGuqacXY3tg2pWQ8BMrRJmZG2ttf5YfyixqcquuCsG3UPTKMw2LWoMz8TBJTyB",
  "key13": "4MuiJgYhq1zK477RKsjAzELeqfWzGD3eQP2Wpq8ckKBKbtAzN2AqLrUip2h6z38qLH99ohYKHgtq43nE6HiaxbjB",
  "key14": "54fwqgoVA8bEgdoZgh1nwhTgxMkj7V2iEAY1ucnMR2g8jF2FGcrAHSFRRxnPo7S5nd5Q3B6bXJWqwoUM7SNauDhc",
  "key15": "2LURWmc4orWXXbSqGzMj9YnSqUzWDJZV28kDm4LqCBLmfUxijQfCWar3j3TTHbUoxkydfyoCtyB9VVrSYpaRbvrs",
  "key16": "3FVLJiagkWdUrADJc8t6rygBJPRdyPc8dzdsdQyFfgUuL2b4idVE8v9V9w8QmDbroTee9y1KPoAA3V67ucqswZKr",
  "key17": "46H9VkYw71aeXqDy1AXVzkJwQyCnS5Se48sgPjacJCgtuojh69QGncAN3UQ99SwvvFbX5vVaMmkRicTtLSn1TXWz",
  "key18": "2h5bTwLoaXpVwHafgg8yWzGXsZNwof6WbiKGszz7y743UNPCsBbqJZn1SVd4C36jdeS7sbqkA91WmyoFQdrwFfm6",
  "key19": "ZskWTNzXmCUqN5pAZnykHTWb9qKUCfUdbjF5H24Et42X3pxGJ3KniygnL6i5G7CbU85DAtFmGYjt5a8sKCVhkTU",
  "key20": "3qGJAU92ecXhJyGb2BVdZq6m2sProYSdPcYqApTHu5eo1CmbTLGKi9XTcFioiahQAXjgYzpMN5mX6mA1GYbwu9j6",
  "key21": "3rVZfekAXwovYBKKM3XxdiiodX8Zna24h3ZceaFrLFvNj1K225Lk62ed2v3GMpTYJiy5BrcEbiZyo73NDEi6osNE",
  "key22": "2TByDXV6KQW9QLAjKquE6fZc1SG2Vz17Nx5zTJqwGKnWJDFV4CpNAPRfkhXM3ckBSiUP7kwMJo4ommSkwsJFQXYo",
  "key23": "4ARuNsdHFAexci3QWqbMAfehxb6t9gsjVNx9Uxant4ew1GjRgf5Dhd2UBSyYqyouLzkRvVrkCQVQEfzPi2xo19j4",
  "key24": "33Laxk5N8a9jAafGbVtUer72mX2M8N5zHRmNj2qcYzVCVUFL2pWoocFaEAXQDwLobubhckCqPV59CgNStMc5feEX",
  "key25": "5DFynupJFHNeEM5cPWvw7d8CZRW3FLrhRHeReif8o1V64w7TjCZv8AR6Q5ffCXxDv8tdWxpPoR1Dk889yG1Mii2V"
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
