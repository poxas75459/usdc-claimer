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
    "5rSQ948duRbnSePcAwC9RvqXcVn442TuZ6W5cS2yaASFCsCvuBdyND2o2Dm8jymY2F2Jd16BykZAncqz9r4ymaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FavUG1DcYYyvkG1tVQzJPrbzQvHezbv8gcfqpFHdTxzUeZpTH62EaFSj8onP37aeWaSDkNEeAF2K2zYk47u2Kpx",
  "key1": "2k9wWdLduKU3ye2N7qP7ba9qMVuhKPnVs8t2gpy4yJCdCXcXRrBQmFFHHYxzDK3j3yY98v2mQxSk1iDU5UwKkeLi",
  "key2": "5C5kcz8nCbThXXMM2zBuZGWx4wduSok69mgmksZpLzwFbvVBPBRaHSDtbwqjVjKzSYUMZqNviVcwfuhXyG8Ha6QJ",
  "key3": "5Cg37rLfsuAzwaorBUTvWUbgvqofv7C6g9mZPGHTcvoFYda3tkqrsmr3LLR7R1PqpuiPG6DqMCHFkbSk8UYjBe5W",
  "key4": "urZK9NjmfYxz6qMjyKUmznE76xAwJascE4Q23Wdm2kF6UjB6JdmVz54bMqELGqjrrgJBConb46dmXdWAJf2PeeS",
  "key5": "21SfSDMvfjzqw2bhtCnS597xjKsoiadYh7eiuTW74ThegwbyiAEJ6zNEqn19p9BrNmshzYMSdePv3e5P6iKVdn8m",
  "key6": "3zpBPgxtJ69FGkcPqRJeLZb11pasZS2pARhiu5w8QTeNrDmPxRd2dYGN2mhRhQVZ5uggESCSSL3tQ6gWF3hmU9MF",
  "key7": "5ePjGrRD48HrTPwXGKykFvZtRLcy6xbZAXeauqwQw8tLq8WWqhPitFV9SoPvS7D64jujhBzU1dC2PHAhZpekM2MB",
  "key8": "RboiVkvKWca83Mya1WiTt2wwKgu9arCCMMYcWJzoRn7ACx7f1uVFXdaytCadQETrYt1nVnrDk9QTnRRw2TmcSku",
  "key9": "3AGUekSHjwGJtppEhp56UeujtHmzKWb1yjkyQ1tQfB2gHE5R3mUuNqz7BU1mCY7ckhao2PRVxwcVbpdhBc6FwSnn",
  "key10": "2ASPXJUcQsxAwdUkVsEEeHTofyy9urGYhJbKd8tDgte6tcPoeztuvXE2C9UDKnshW7Dc5LkBSpsytJjVbPvY2ZBV",
  "key11": "4necdFsaU7vkeVN1GFFwfEakTDQcEiGSp7PJgHjQTjh571FDi7oTnhkdk5De7r6oo9EK1VXvEGK2k5vE6Em6wHJw",
  "key12": "4yE4vchonKbJhXcuxc1vvJSBPgvNA9RewZaFHYLBogP5RzzdXefRmG9C3pfgmVCoscHpACbkd5VrL48W2zVW9YR2",
  "key13": "5LQsCQRUHqnPnoYWtJ5NNLrL1VJhugRNJQ9GzeCxx9uWqy7QWeQVmu7Shc9P6DZTWQrfJumZ8BKdCVjFq8xfYT8F",
  "key14": "2Labu5FJKWFYbK4gHDLaKmecr2vdacVLwUBbxddGHXfmD23AJ8R9Xw1EYxBKooH5U5uuR9JBSr8i3UCWfQAZxnR1",
  "key15": "2BhJpXUUGgcMdn4eW5iF38CWYcDpnonnNDAh8AxSMwZSYUgoT3sDnXfefQE9UimwnhChk192TUTjNtPGeoiTADQg",
  "key16": "2L7ENDSYV8tRftwomifx7bCn3CJbTba4B5vwMNqW1Ps7RF8yGdm64ihJFCxGJ9Dq1Xt8X6ebUR4bGamnVHyKwCnf",
  "key17": "3u3BeYbREksUngBCju2QL3iaKZTwxvvasjMbHjhsaTZGtoA8uHRfEVAeFN6vimd1pBBjFxkHNSTAcVgv9ZRBVBf3",
  "key18": "5f3cFHkmcYbeNFnVKbmTuUPqtNxA8oCHC4vc3kHRNG3VUp7rbUecMTZ2H5UwVPdUcV67odLW5ohPicgKy3jmVA6z",
  "key19": "SJeWmSDQj4CVwGgAkazcMhsexLrm6od2JXKNRBcRd7mL5qzQS5yDMcw1JhNnX7vt5tnJb4VCXReY7JzEQdcqrkR",
  "key20": "3qifmXaYXWH9yQKZnLuT1ExzdvB85Y8bnT6m8WnPKaQWLWKF73rcVNbHRvZKYXJnAvSGgYttqfKTp15fFfGB9jwz",
  "key21": "7n4RTk5DgVCostfFg8dcK1TRogVc6F4A9fCypfdHCcSNPcQevuNbL3mB7BVi2EAxDqf4Y7FR78wycRonvqR9TVQ",
  "key22": "pCjUMN5nxjvaQr3p7nHdvQC1tVNNJfYJbbsANG115tEx3YJDbr4z9sXukaUZ8HvqSjn7DUzvxqbpZYxbXuLZCKk",
  "key23": "5kxdofXsHMBxvN8tV8bMN5gdSnM6rFwFGbm8pchSHJNZh5mbuUJzh9vT5B2a8di2jfn6QNSvY31MtbGZjikBYhxR",
  "key24": "2mSh1CJzJyGuihZynCgEPqBq3V2i1R8EuL1W3dCbd8gXDPhcnd5QSCB9Yxno7TehSbjMNo9WLAa3zhMqEV5oR1Cj",
  "key25": "9kfzwDTzdgTXmYYpXK1ksSb2j63g3z4gjKbr7ffSvAHfukNyewMR5xdCfxQGb9qQvfXo6BYKFQg5WpZFaHp6hvR",
  "key26": "2Ammfp2itnBEuHiP7CNR1dDVLNLdbzWVP9Rzj38nNrG2uCo7JXsSz1wHFP3mF4s35SKdaZq2wjPtinwzn4m8LMxZ",
  "key27": "FKXBuPiN5h27PBwTyv5GExBtbff6Q7i67aYj3VuJq6iMQPR1kdQWA76j6JJaHNE4UGGfCghdbGXAeRhJMDc2uYB",
  "key28": "48wP8B4iRRyUHuoqpRaTgU7GnWkrXapK56MRPSoV2JNyM3S5AFmKpQbXVNafUe2fisRzYaYMn3WFtPxEkof6rTnQ",
  "key29": "3EygiRU6h6Emxu4jR4fDZzkWye4Z8Nr1tKrSfJE4LTNe8B1Ko4u4S48qUTpBVcRbt6xTxacbaCcvAZNAkYifhdnu",
  "key30": "3WRsN61SKHyZeWEww8Zm6EE9Hco2eqT29aqLdpF8BCQEhL5qt1dgoydixBJhTA1urV3Z6LMhXJ3DbyDck73UptsN",
  "key31": "f6Yf2NxheaxYg4gNNCZxMHmLnJA6HfsfG83j4obaEYhGZeACSFa1AfvkLUV2zYEZWVLav3MeoiQwK7CCzFKmoWU",
  "key32": "542tW7sCkaEbGDonNNNSVSfwwV2hRGJKMVPPdLLLUfsVFdE52UaAJzstLnCq3XGk7ZBAm2NbN1RUoAGuEaDs6X5H"
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
