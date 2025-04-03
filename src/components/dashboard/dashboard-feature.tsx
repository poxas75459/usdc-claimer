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
    "5W3Ff51jnYA8G4oT3NrtzuKjJaJNrXr861j1TRGPv3fVVZfaDSdmhYdSEzGuuzEpYxpMLvTNY1BJhUyJBggj2HA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56xZ6BjA1qziTubFXLDSB2adUkXfLzFYxJWovUNFAX9ShTaif1yDHNiSwR2B7osAXfrgGcfM1yDVzGyCr3wvtmam",
  "key1": "2zKiufeebMeg2KYnozBHfxaLo7gCyxjde6UW1Bo4orTriUBxxu85KGn8EBeXFDFqRRQDg9T1aHBmg2soSTbQdwGE",
  "key2": "3inx5AK5SdBKV5xJ9r2TWf6k61SGo5ct9Yod3ME5THL1hBYc4Wd7nHdpBjccBBRMEHfPnqtkYYFb9bwSXMN1yb12",
  "key3": "5YYiKbVVGa8mfi3sexWRVf81xfTfsPs37ZopVBgMTFLma5Bv3AmP8RPttx9fircMUE36SCLqkn7aK3s4qNVKoAwp",
  "key4": "41s88kXrF1Q8AvWzzRTeL43KeSKzqvF7czTqB8gQjiaTMgRaoFaGqz7WUZk2dDW6m8QgHoZRZP1jKzT4ujCGbGcA",
  "key5": "4Dp546HnAZ5cX4ynHaBEXVUGSbiKouJ2VdKJqTeiSDc6ofotkiSLvLUgh8ysHhqQDnKVmHNqqVogp8Nvkn1M6caF",
  "key6": "5uQVGXreBrXfekdQrmCNq3AtuNTEsbA7uxjpawHpdiACmabXVDMitec8rWS84pekDvafuaiuDF9rWg5jFaWCGScZ",
  "key7": "3uobf5Xp65UEhVtGg3SNqDq2w3s1UdfHeBRh1d7VNfTp6eufyhar1BFjEqbApJAFvb5fBsfRGuzetAAnRHd84uve",
  "key8": "2VPTFXBK9w7yHdp8BBApFyEodyjvZxnvjFSyxrqyybcL7TYKdioqweGkrrCQzcM2bcF6dHzd7vzC8fMDFV72KvMo",
  "key9": "2Y3htwDTsqhh6EGpHanHGn4mJYTQucrhY85eh6XWrZvqrWius15nQZK8FwhtU84D46T11mHuAdCzjMQxJm3X9T7c",
  "key10": "3bjtugSXzx7zasUg39zp48uiLBWF8Sv5q72vJaW1ZMRu9Xf7sz1b9a9qUV5ZKKibWguD8tJQSxbnTLqNexco63GF",
  "key11": "3VBsuXuuskqtbH4agiDguEjzo4ucPkdKj3KxPtZfHvjiW9YtnecB8ZXYfRfShofFXQB8T7XhJZmMwiZhnEwCDKJv",
  "key12": "4fyQ9fqFyE5fqJMv7SzsGxExg6roUGGxSxsbetUfpohE514XNsMn6ktgfJ6TpatEGMjXtanCSRXz2nokcDSYShYn",
  "key13": "54RwN5zD3NUbF8hpChesP3wzCLRevUTLfZntEyY5fdVDR8sbf5QBxviVhgpfUr7TiWjKMRCTBWGYu5e2SxmzsthT",
  "key14": "3M6Vtc1zSrx49t7MBhnawmRSEDgquF5Ez3Er7sETG9XaTiss4p1rgEZ99J5erqUEeumErVbpWacPNF2JBpvCEYoP",
  "key15": "udtaVDYJWRJ2krqhNEmJD1XCbKgwtjGiaJs6x1MxWJhuijgm2nPxY4h3wdtgbdEobm65GXcw6J1iMmYmSJqhauF",
  "key16": "5oy7xHzchbZcNYeLiZc8Ece8ZbnvVmXtsjRQBzdnqBQeANvbhzSgdG9Zz8GDY9qN8gaw3qiKe9ZpdXmnKToWmLX4",
  "key17": "57xpkvq1zeaiJdogEA3hdy3Je62PHkULH4xZLsmad14BM4yQB316aogUTmW29Yqw3CgrQAYaXtVAyFgBX7NoGpuG",
  "key18": "5Yy5vXQz3SJRQJ33VQzXGfj3Vwx8yfixSbZFGxcp7SchtPQa9QLfgjggayTqx1QtjB8evjzzDpNnoQ5uBYCFsK1v",
  "key19": "5jJUTmEnfCbMmSjHWz1z2tGUqq1kMQhWnBisMDfCZA74j6Yce9F2cAF5FyjwdaR5eUgy4JesywqdpMUeoGbe9cg5",
  "key20": "37VeVQnVSsbNCeWrWKSj8GBWe1ujjdKv15pbt1xyLSX5ZXcGrnuRWek7NF8djZfVXFH7rCKoTnWRnxQAsYyLwJCX",
  "key21": "fA1tJudTz6D2ypr3Dwsjsm1cGVwAvAFDGBHYvWH1G8QF81VJJAgyWAt3qCBBK38VaiU1WbaXeY9CW9Xpq3dTqEU",
  "key22": "43xDATNFfL9FtKQ5wVopdSYY36avtxHGetgKUP834dAPgzhf6sAxq16qdip2vesaM3h1KEWNRYRAxvShNLMCfCJa",
  "key23": "34kr9qHsonffuS47rGj4Qre22g6r9BvNhJqtdG3Lkr5cC84ScqKVt2D446wtiuK6GymgYWyJ5EoGqZacQEh4oNG5",
  "key24": "4MGwJPH4LciCZdMRwAXMmbVL8CK38yqjQUccpvwBww15R95xMbJHqhSMcB6YHgaJNoChi1tAfj27139imNk5Qup8",
  "key25": "HoWKJtvbeA9BKHF6JawPcrAsBEKowsqqSvdAed5xaPZkUdaiua4PribMsNCyeWepURH6SbT7EKN8pP1nNU9a8UE",
  "key26": "7vau9Dm9NdZNjgT13t29HNGTKuAWpacSt4NUpKoqYQmpXKqujp5LHatkNV55xtbjNs817gcCmf362nNMoqMWcq7",
  "key27": "2omNLMGUBAYnyb3mkFR6EHKo2a4crHSWVRtKWEfmTrKsK9HjBXQscEipiDLEnCDL8V6BvhciFt8gD1auhbB7xcu6",
  "key28": "5UnPiCzg7WTuoAYSxAyWoMtACrNmF7dmxtTqQLfUo7UAn1AoVmtyb3aGmgwL6EBQ49SM44jfVjtjjQMsbEMrGMXq",
  "key29": "8TvZYUPwPoxrRJpuUFHK6LV1Y6gFouFZpDzYES1fhfWamPCsvZhKLm6kUcxxGhPzwVVrvB1Q4dstRid3NFihER1",
  "key30": "23t1FLfrcfjyCMnNCj8rwNfKXtsEVpVYMVRBpCBuhvSh3T8Xo3zun92cVZUfrXftD6MvH7PKjJrVdh6vXpYZDEVD"
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
