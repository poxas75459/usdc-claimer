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
    "3CGY8cFJJmPwrg8XR92NA8ZquFZeggoungZJvkgrADbscbCCQexdGCLhsMuLeMLNyEid2jCteK55FMBJgtQy7w8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jqeafLAkY598UP7Q8CTWK5ESWEQ15eB2ZJpC4ycNiR6BP1cE3eAoyRpeSDzzt497iH6C79SMTMzVq32ZFppu861",
  "key1": "4VciSWMgTaxu8iXkej8zPfd67msXNTsdoMbu9WbR9e8B8nSv93EU3zhjUuXaECs2FBpjaGfLJmQZkmyVwfrnRVBZ",
  "key2": "aF8Aa4T6hZsZCU8mxUAeNGSYcKwUCzPpvjxFRdowGiKLAC3GQnP8hWzk3of4tCadK8YKeUPX5jrj8QWHQXW9t4U",
  "key3": "4KhoXSjGtaeSiXdyVCm19oN4nTZR3GRxwMPoXWexyQEsk8Q9XCeHhha4TepYrbtF3J3UeyWHBmXhJLgsdB877ks3",
  "key4": "3YxtLe4Dt4b4sMWPk98Q25MP8FkeZSQhCPD5xUszPrsoRagx1XojwY7zpuZWAEqZzBgycjDnypBuMmHsPd1iDDxz",
  "key5": "2QCuyv7YhqdvY18e96bjyUQRk21ee8rJGSbymNnnbxjXVRyVVJeWX2G1svUkZ1S7chuHQjnDhUAAyqTk5mbu4gzK",
  "key6": "4X9MwMQnE1SHn5jDQwkqUZtcLC5MbCQEFouGmzV9QRUsSfhGLmAyBYZNKRNk5m6ya3Erpa1RatDDNF1GikmsjSgy",
  "key7": "3JY6Z4ZosY5vbQdVojUcmSFjh3qthorY86nNiBLuKPeRgvec8zKV3PNJzijNLzVp3DPPSKopyBBugujP3xCQy1BU",
  "key8": "3QcyrMNppyn9QCH2pRHvTY5v7LBNxteEyNyVqHx7hmqt2KqgD6Dy7zNL44qZUjVcm7pbC13S7JHdEHx7LmixK5Qq",
  "key9": "SEvGfGr21CKkmcbdsDy3vWzp9t4pRDPyL2tCHiG9ZWGLWK8tFsJU4re5mafhWrRzKqNezDUMayYbKCEvaVa4Tnp",
  "key10": "2EqFCFhecmC4FPK7n4Co8tuVxW7iwaTnRKChqMtaaBa9FdV4GCNMy88BvRDtY82jp9TbxMiitvnsgoNmaSxiazV4",
  "key11": "36QfXBbr8wpZVaQ9Fb9MhRP9aa1YrMp5uWBHBNuotHug3XwARxUDjSm7HXBRwUo8Wqvjz4SnoEfbBAQ9D6wtfj6W",
  "key12": "2WxHnHNM2dMPnD3n5zvRX367RBAzpdKhw4ZPz2eUh9iCNWk9tnd5TP8ZAjmzRzHLHFsjnQCwqrETDtckgv4rVRsF",
  "key13": "2hNyBdYzQdiAqbJSRSnwSdzzra3bdQPHnPGBYCFvKdag6UxNa4dz6CmgA297hjB4CUkQmMRgqCotN3F36KJ6PGJC",
  "key14": "EW3YDPcn4i1CFu9AQi4YU18NGR2L8dFm3X1sX5YwxwBZAgKfG8FMmqvqsENc4kv8DYFvGEktiMiTJj9qH3LUBRn",
  "key15": "46UMRfpw5reuxRgQzkgpVG1P3wzJpD2H1wMLwAAz5RCFU1SfsfU8WrgvCzQpm2y4izWy7L28Hb99d8QM7U9GnnyW",
  "key16": "3cGVNSVEiE7HDddcEgitb1mHHaWx8yeNP3gFreTg55hza1e3WxeffcfJy4djrLTCB3tFr6GGs3BMZkbd7d4rpcMv",
  "key17": "5ZGM9GcmVbM31NeFq1bzGVe6iEmEXX5M1bvZ7fwJMFM17JnhpDTQzxaJBd1FiTzFixW2hCAHF38ehMWUoL4r7tyQ",
  "key18": "2PtkdYcRZ369PRXkhsvcQtrHYP88rP6XF33mkGTW6mg9dciB4kQzJ5K2pZ2yZE5p9FSVjRn5yBjuyi7VJwUK5ACn",
  "key19": "V9m3U7XgtnMusaraMRgVXtZ1sWQ7o2cR9MAmVE8iZFH9QP4tqWuETb3nwjy4PxGFF8ZueDZqSgapx6HcziW9LmG",
  "key20": "akLPyeHDTqQQRSjtZCoVxwJ6e68UtouGFT4GMJ7fEaTbEkDcS5qPUeymJonoZzwB2akioFknyqPeEP9NFGjTBoo",
  "key21": "5S8qxrKEKdEkYjgHi866T4DupWCSCnwzczFVYsY1XBP3MXMvGPauyniqDqNAnCJy1E3EqZUkknTGEotzF9FtQbZx",
  "key22": "4Xe9oN5D2biAQwnxqgYtwyGmsRmf2JqrzrpDw7bhT68W8R6wT77fozqyfndwoPrzt2zAXhFiLUEaWJy2ow1kZ2QQ",
  "key23": "3VaN9hd1eH6zih91dLSYVm93FiJEZ7nyXkn8E7vpWmTojN1FVYxVXTDVAhjFpkUZTfzSqFzqsHA35fFHU7MuNPwt",
  "key24": "41gmxw8q56qpjeyFF36P842cPdKxH1zoxPLMCPQpThakzLmUtqQVo5PiTrhMmBUr2jutpLq1kZCp5tf61EDjoiAv",
  "key25": "2fqcfJ3FQHNccbhjiXLfsxU79SUeNojpcvHHc8kugGRFQJ8TVdSL816d5KqspHdMkHWwin4YFWL9q7Br37MMg7vc"
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
