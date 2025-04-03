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
    "2dYMKeZRu5ZqQrDkdNDnhpbg74Z1HdemQELFYaTZCuEHWtPk9vqvZmsKA5kbS7vjiwFD8QLpAKqVbucn7sXKSNEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sy7SqumbddoZb4gp38CGoz3w6kpo5Ex5xTeJ5YmVfBnWWT1GtfdVkU8sDLZgTBp9e4VxnvKYkmrXoL192MGYwiG",
  "key1": "Z3uaMHrdAkxE5xiH7cF5qSJTLtiQzxJ7X8UTSiCbNyuUP6RzYLjhkoLcDgyNzJMvpWGGgQVLUczzadF4iLugwkH",
  "key2": "2tbBQA7mQHgqQgTZ9SFeDFAgxgRkLmTdwwZZg8sDrKTzUAmJ8toMKwWiVtjwuAgWfwDr1YJEV9NUaiT5iLe2tBRf",
  "key3": "4mpqi6SDnpkJw7AWBJagX35j8vG5ZUnCpFudJXuG7PZdUnEGorGsEL7c5EVMuAksqTcnBx16p9ZGb7xtLMQjD5mK",
  "key4": "2fPgr5ibGacJ8VZvCsgjrATUH5iAAnsMjYnW5jZzcKCqm5qpDrsnLaRr4kMD8ZiuBJEX8Y6sz9FcbqPPfHTambFf",
  "key5": "218phLpyjzU9NiWmcVNKKSAZ2jVYDahjevdohBCRedGE1Lr3oaMsXKviBqMNCT5ydNJPLTYkotHPJjpa3fVHkrfy",
  "key6": "3tNL1ecCjeUjnJtiihAJmq78uuSLLGNaAXts2FwEmixvogzMeH43pLP9vAsRnmrTvraZkmsgMBhTCDrjuHc4tV4h",
  "key7": "3Um7QmhQQ8q6cwR6Dq7Gw7wQa63SD1CUuKaSJRxv2YxrzDCeSFjNX4j7UT8WHSrJTT95VVq32BSWL1HKZMiK45Rn",
  "key8": "4P4TJhbKqMPuTM26erLxxrmUdsFRcSo855XAw6rPx2UkbBuvBvFPwgNM9FwiGDnkuGGhBgjWStaK57tm1RV1LLU2",
  "key9": "2RkSK5huQcmRCMWoNiisKHusTbB5A6M1h5wxb3zcRu7bbBwFuCNrUkHcTiS6jLdjGxqMiq7vEhgSGPt54WF3stRn",
  "key10": "2WDp4C2A1QcHmL4bW6aL9gCRnJnQnMvP49UGyapLfNLytQbXRvUQrxDepe5uaFZP2RHL4FGv7qxj6yYsn1TmQR3T",
  "key11": "4Gzn7wPrnrbgQACSHgVPKgdZS9PbhYfqup6knqDfaRGreiDuADUMisvRSUXiXfYTYFrZBn4H9dm5QWP6UqNf78x4",
  "key12": "488y9xkhtsKeRsRjvJPjJ4MPR6wLUJXTLnewQRjJYUz2DKVnPseZiKrTVuPhyJBEiKAcy3fLWiDz8dnbJdo4dUYv",
  "key13": "2CS2xihnGYbCdHm22q7dbM1ugnVzFZJzJCYBMqHs8fGXnbBje7SnSYUCP8BuAqYf2L6WDRo5vQLh72Fbs63wFqr1",
  "key14": "5eFRKMFaDKPS8mNgXb2F2xfog9uEk3SeFvTkoXpPKt4GMWuHS5tH8WjL1Gt46UdrL9b9Q7vbgN8csNXkjFxZJtSc",
  "key15": "2AHr23zBVnp8dciM4APGGXZrsG8T3ACrSyqSqLkD4JZaxzTAtWXgjku37VJiyE9bFT7DBCRgNg4bPsXsiLBeZPTe",
  "key16": "57zs1qwo6NfAGfcvnifbrbsg2uQVVf5joofsgevkN5oiuxL7e3q3iqrXW5LuXeLaXQjCpEorTaNUFn1XdeUAdCxn",
  "key17": "9bXY4GgX6b1gB6ebsBPwsiZiZZks2fuUR296G8NdNwufadHN4nQrqRLrfQ7kuAEaSgVRyy3TiDy1sLNYtz1nrb8",
  "key18": "4AxRJuFKjsfVP6mAVwsxvNyWaZdLLS2XdzB3RNXyQwG5XerrTMhSTntwqtyUttAVYDdKGeqhdUC5tNgNp2ZaiipM",
  "key19": "3Xkmnc731oP1CFniHnVaCMeEYqVdB2r8T7oxBkbB6AxwVmfmLSdz6RT7rCjGG6bqiz955HonH2vbz5YXyVhkRNG",
  "key20": "2zuJCKWuBAwrSUvgEaVziLXf4Ps3GHLMB9G6iF81NzVaMcoP5V4ZWk7EZKg4MCa4AqSQkGAYjw1qJp69D4crYM2w",
  "key21": "5tCbyt4uUjte6q9FxzhZC4TZkqGp1Lh2Wg1bFmqg9sxmyMLMXZfBTYNr5JfGeFbQf5AM9FhAVCukUx1faAnr24jf",
  "key22": "4SbF2rJvVnPKsWFf1M6HPkgCcoHgiNENutTfPxa2bkudx31eLvsGUNoKDhXwqj4eH9hwikRRs12Q272HQ7m1x2W9",
  "key23": "3tycQfRoyEfjDxa5CtQPyZc2sksHDtRERoKxtJVLLDHEHXEhjUDksdim8t4uVXL1qe9PyBSKvRXHREnteMSZQXUt",
  "key24": "9i7mCwkF3MvU3mmkj2jLNGf4AgmYVwNT87GLTSDZvtujLU6WnLn4rYy6P5q1cwW5Ejt2fAtKvWaMJovwAjhjbQw",
  "key25": "5MifFRqovqucpzoAbMkMGjWCN4dcWkGQVBwg4kdDU31hJPPeF6H4pB2da8Vn7Eob3F7acqN3kUVogzb9EYxVFAwB",
  "key26": "61Qf1pUPDzG5UUW6WqxTSrz9yBx8oRU1Hzq23sFv6ADUxNM5xmAbtfZwbjyjxFDPqetC4YoeRH1jsmMHPBHLjfSg",
  "key27": "3zdESaQj7VnR1fFVGQzqYFHrvgr4iSQtNazCXfYZBxs1zQpq7TZhqhDzpqbubkz19beHBbb26CvYXm8L2RNiXdHC",
  "key28": "5rAJhVLP4J81194ePV39aJisM84AL3MBtZccpwSmr8NLN33TTgZ9YJ4nZX79BCW4sLTbV62sr8eURmgDj6P8FUCj",
  "key29": "2niAi5aBTMw3xdrNHG5XR61jM4TkoVSfF3L1zvWJoRbHmDgLWTrVJ6wfSYYFaZkDSTFYZU5dxTvHKwXeUDr6iWRw",
  "key30": "5JwbJeN9veCB5hYFYCq7Fv3GEx63ddBucvhmZLbBdVuAQ4XrsvTk75c8azfjmyX3uKEQEco6akAStvnMxPjQgi31",
  "key31": "3RnGoUEsSVxV3BtPVe5JHMnNxhcFAjWzC7h3aofc7HtSsvK4cwNDcfzqBNenmTMvWN9Jv4TnPaKTQdgdH9ncbu9E",
  "key32": "QJyVvRCWMKdC3aS2FrKMegbpCiwpN4Z7qdX6dZJKDBssSwGP7yMxrZUt1hsL4gaEAHEdB81eD3EGncLDXHRC11n"
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
