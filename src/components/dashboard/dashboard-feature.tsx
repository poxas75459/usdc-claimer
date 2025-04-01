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
    "hLwWVj4jjeEYu9PQywuQZsoypoCTmsfZTuA3XDq6k1CV8DtTAdETajCGtydaqByk7BjPT9PBFS3Q4TPcatBV94Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PPakmYLU1EPVeoWnGeQhRFuM4WXW2YQVhw6SzDgbYEhtkHaaDiSWi8Px3GeLx4MEV1pSHWaLFk6pZihdyGuezFY",
  "key1": "MbmqA1GH5384GfgvRDV3u1r4NTpBqhswnYagD4eth6RjXRJdy3qGjVSn9CugVKMJSm3jedmeJYu2Ji1LPRkZ6mc",
  "key2": "3xyuSwysYEZwoEyvc3HRternjnQeHcTewjujw5Pc8HTmYFr77vfBD2B8LRoFKpUxZh1nX7nXjwjF9xWJ825XZS6w",
  "key3": "2Vw55Cavr3sYgrvNqT2MVEZCMmuHVQ6cu5nA2D9hjquddnjyrpdJY6ye5U1ZCLgjTyCLLjBoD7ZaMhx7Texso3Ug",
  "key4": "SZDQmjokN9ZTVXTephCtUsXBD66RRwsrmvH1fmAqRzkbebiWCiwDL8ks5x2s6ituQ9YPapx8h4YMjibMaxMek1x",
  "key5": "53oD5eGxjjhdCG4CvLDEq5nDGr4nPwDZQjGzuyeA6fbDG3MVyQVD1tuQLamzLYsHmZ9Ntq4bVybcBUQS1pYRjv2v",
  "key6": "2hhydhKQnMjyhBGe3wpfQMsPBNukzrkFt6mHUwg623aw4DdPNxYJdsAvAjsjcRkvDWyn6Jc5EhBjohFyQ97AvFLf",
  "key7": "2DUSACJdkT9cwxTTsuHUJqbf7qgd5nMoXGmSXjuZ7nnTsN8n9RBvuY4im9DDDKBYYiLTxdWxPkWPgYcKSahZrAHP",
  "key8": "53cf6CXNTRpsibhns1bbPzCcUACyjo4TzQoBg2HSjNPzb2k4XFo6gUCJ4EiqvmKGQhLnsmR28gDq5fgSNi9Drx6f",
  "key9": "5vtouWvnSntcraaruPb26sEMhv4U4i4EDV4qDoNvMY2zX73oxQ9xdTT8m6YXcmWzcUtDjCNYswR7maPk175sbvpZ",
  "key10": "4CaPG8piN852ZAUf66W9eKKGpXGho1zDTSjBzmi9r74jbpD6DCo6g7KHZzsxaC25ST3sLcCbNHLEoPBGicihhw6Q",
  "key11": "5DrkADw7koKTxpEH3vnY2361wg97J3ZfVZyQYXLGLZ7G9g7ync7krnu6YN7NM7zwticfPQHCmei9gD2sUJ6PW3pW",
  "key12": "caBRGiqQhwB7vBuiQA88Z7d4RdLoC2vk7X89UC1UwXKdXxo8zsTchbuxRrvKS8ChYuN6swfauASWTzhEYHx6q4c",
  "key13": "4msWmxxLjxtVVcJcRUzB7arY1giLNtH9MJ466aoVjdNqVM3VBLv4iEJEBHzc3qDQDSPZevvhmAn8BdH8dLUxnDRw",
  "key14": "5JB9GD8EHxzMxasixLrGzqoJhP2LsLCrBUqa6DjruHCkqQh8JmuWkURmvKK2k5grYaWUo1cW56B57DCw1oj4G8sK",
  "key15": "2af5hnpqEUnEvhQo4H5MycFhPK4TDJfv31ev3dv1pp8fFqo4iiDi8rbgSAHZUgqzvTy1ynsSxt7KcDGSiEXoapmk",
  "key16": "5LQy1PRndwrgd2xqv64NwQ6gcScbqiXkDLxhx3gH8dQ6ZjKjBb7PXDPX85DRuPSWoZdsDc2jrbz6Pd5gG7qVSX8t",
  "key17": "2CTnasMFzKUkQKyG2J3xGrng1kX8ncdknwrjkoizVcKJq9gBDM58VWQkwk2NLrT16EJwVh7oA7tRpy7KGUKDDtfN",
  "key18": "21C9Jbkw39bMpj7qyqaeCa6rSUp7WHJdBAhAQFNz93LgpEqKdoiXMSsVEFZEUFMMYjKq6gEPPsQRY8pXdrjeUTnZ",
  "key19": "SMjVudpoTq327f5k3efRzt7FoRLyX1VAM8JBLEp3xZZG3LgDafkBo7LwV7fjJd98J2SiovJiBGibJGeYFPatxiV",
  "key20": "3GTcPg3ixZ3PHjKELt2WUUDbptiNH4YT1pQUaSRP6GLP8gcGVEonYVb5Uj6z9WmHyhdsrWEpDHdqrxM91Hwm9Wxe",
  "key21": "39eVd1pswVeMdpo2X9CVBcyub3RuJYmJbmLaLsjkyMf8TdzeXnGSNbnuxWHS1chQ5rLzjpgnVZFskqyE7qoWCdcF",
  "key22": "5muh7wDnrBHsgURe9N63NfuodnrWL6mgug5E4cukUjPygrNG6wC22hA4eeXMirHVs27pNFW2Y4vm2TwR2dEc3DfG",
  "key23": "5YBWtpKBZkyaPkmsx8tE9LFnxssxBUPTC99Wo3tRVAAvNJ37imLVTxG5aQaQ4FFww6Ee86HfZkeoBAwKSBNWvvx5",
  "key24": "3Lfj7kKBJoHVwCLi1HBc5q66u9kjJrA3HuUaC42Vbtxc21dMXxpw7ek1oRPx7Us3ReS3qvFhYuBzGMXYCEEEtudu",
  "key25": "4NWyeCCTfnotKN8cCYFURRy6ZVem19oQw3TV932DcaGZjbbj5CZJMGRDzhVyr8zMXUWmkCrCqTvfAyvo2wjbaMwW",
  "key26": "2h1D6rpYhKjp7NDRy4WJdXLz8ykpiSEDg8PEkituVWn7xHyxNUAZyqEV2jKueVdFLRXxxUuhfdZA38yAXTDuNvhh"
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
