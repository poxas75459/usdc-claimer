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
    "22JwqoY13BLweLc5s8vzyYTGQq3qT6rhf2k4LYoRKQrUffFPTjwnV3AJZXEihfz8cvojCEXmSpA2WXfRBESvCcj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qn9fvGuSBqCfZe4xc5XvbK3c5WiV8fuiBNJx78i1eoNdyc1Hv8iATnv4BgZM97owD5G65U4cD7xM7QYCwxfrFUF",
  "key1": "FnvKJGSt14JQJCXNz8ZkhST8vqmbQbUTab1LCpZbF2TJrHYisKJ8TpWJD4QkG9EXMEGSe5736XgynzzeAXBcWjj",
  "key2": "3J7YVnmvsFqqUigvW7N9N48tpi65cvxFPopek5D2Tq6QwrpBQZDCzFTnbPr1c4ZCz2v7Nmu9catCN4EahNJxWJKc",
  "key3": "47q26YrdAWbRVqB9BVYqGAqoMTn821WcFmnmM6qhdVYFEP2QS4Sm5XvspeRX63X6kiBfSqk5jnFEfXHdnhumgWW5",
  "key4": "36TttS2YpbK1VQy7jsGnH2g9vFatNf1x3z88SykKPFUH9f6iDFLpGfsyRuq2ydFK66EH8vZ9zaieo6zkxG4sNDus",
  "key5": "4NF2ki941tza5FH9USbRyRjwfRFJQEWKnWqL4169fehdFtyBnSSNQCQNThA7LyerHrBaotCbjqVZ789UonEkFb1S",
  "key6": "4rD4wFu7iMqRAPTFyHpNSczdF5wmbhoJ5zBeypDQrz9Jh3uvWCjcDkqPjpxMgQV4kZyRYzzWJzf5jMTqKRiaWnvc",
  "key7": "3sMpCKkPBLYZK56ifQbuNPDXgURkgtpj95bYJerzbDHNtz3wDwrxLRnwhsR7iqEgU6CJZhUUhdrMEM4iV8RSJuf7",
  "key8": "HMF3riThLWXtyzunFz3G5qBtF1oPknjNE7dmvLg6W4L3gH5BCFqcCZ7XP1W6skREuyjVnhriqvk9WWwowfgNj7a",
  "key9": "4NXVA8i8dKobtwEbmFwXHQqw8GemoTdMyLgQNhvtBKEEoPS2WpdB7oVFtZbVqUbbhpwzDuPKJ6VUVM3quGwM2v6Q",
  "key10": "3R3u9zAmRcvch8WgGuCBEwWF7McxuGRZ7xZf6oVTx15hzfM1CStv1P4nKkZLuHgaG36JePF7US4GA9AwbvmMxNsP",
  "key11": "2tkkK8DeCvxgT1iE6dqGqRTNwPquw1aT29q5wPLpbC227DAQbSDGNNQVY7SsvzuzGpG4QwjbtDzQ86HTmWsNUaqN",
  "key12": "5qEHbEK3Mxxxu9vrNCuqj4PnRTQELAgF5CQnPZavJQpW93vNg5eCBFSg1BMLTHocgEyTXx8kz58DFPfZbP4j7sjG",
  "key13": "yzp2QXvfowTxeWP4PJxHSRPkPXSwHRnHbxGaN1DPCxPXmB2qxytpkyLk1nUSAdf18umptBBUnSibKKoD3bVeKeB",
  "key14": "2gphc2PsGDy9JSKSJqTzrm2M6jt6cGCUrUvkgaTD5WFQDWzs8tqisykZi8o7vbcvGbGiWvL3kUofrkZ9JqeGQT8j",
  "key15": "4gy9PJkwUZPsxzCjgB3cuPPddj6bEJ7Cpgxmg6WuGvQDmehMQQsqJ1gR5Lb9nHZZRGXnsVPQhg9xRoyWKQmmvtz4",
  "key16": "4XjJEfY39as4d7bpTkKtfP5Ld3NgQzDp3ZdbhANdj3exPu7XA4CeiYmqkfU6jnxHrJppEiLrcj7bkfQHKhZckHSK",
  "key17": "3QA4KusEzWzbphB1RKYEnQXjUeYFHmYFUFQYAM2WwMWLyCQzmU8VHu7LYmReZJbZhVmp9cq5j8wML9Zw66STmmRe",
  "key18": "3EJSnEfcgbaZVnHk2GkyuPcfB2EaASvEmWPsWbTRE5C89U2q2XjKLrxuirBCAdi5waqtTSYkiiB1dtZP84w8HV2R",
  "key19": "r2BXCV4W45zVTuZ3RGVEVrMBtdQEWjJSD2V8AYgn7eU4L2zh4sqX4AYS3pb2zy8sTrrJF12KbuxHWq1Ut3Sb2U8",
  "key20": "4c4BtSf6xLGHxxQ8dkuzevLuWWfRrRWRiA62YJU1UcSRpCXWFESG6BCxfHue8XypF2FTyRhZx2AqnFrarjKVbf9Q",
  "key21": "4kbQF2V92FeAUgG4cEQX4MN8xHEn5hKzXZb9pmgZeRA6gnbnnUNJrQsSZ3411x3ufXXKiQ6fXTwcSzyyRovJoDwV",
  "key22": "2Rfqk1CowdxprYFPg7SHBiSoztea98NDJ6NWHABJKiozcaSh1DghqZxxugJ2D1up3S62WUBALXnt4UTaJnTx8u5p",
  "key23": "ED5gd7EHNqDehnD2G3dL5FaLwJjnvgfsWGraF8ay4R5N9tNPFENodWMFRKciNNKc5p8iLxVdNMZkmo2T62KKL3G",
  "key24": "5iJrKA6XarZHgbkcwDfGhindoW3eUNuG1MrxkPVvCJSWZKLT6W3qx5ws5hqzPGAGRhTyH5cssLrbHTCLV3s5LA2o",
  "key25": "4p5cZZsbm4m1G32PxPYJyfCRCGbQQ54egW4RPCyz2acgMAZWxVMgHYQy4eoKjj51ZYVCBkMJ5MiDiGgkVVN6icmX"
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
