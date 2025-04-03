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
    "2zMj6qaYjDiA48Gx8wFGG9fWsxhVztaYvrGdU4uhW2TxvLfWtzVLmoTHVscTJiqqwakMih2xNx5CVTJzdcVD6Z9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mqiEwU58drwQagws2RmZogg5nQTsWRX3rmdDGDN9pntaYdYtmgpzLDVU8UHyDe5NFTW9B1UQhLC14pQTNectaRk",
  "key1": "3NFpcKDQC2VLEALcoC28SdP4BjE9BvVWRuxhiV5eBc2pjdV8hwJHFiJd6fMSfEpTTvkfutmGPKuR473QNnnFRsek",
  "key2": "3SgxYs6p2g4rYHL7ABz33qaZqETJRYkDyHLFxfARWD5mXigAY2z39FhMRduNRd4ZyDFx8Yj2uyhFoHkvci91aD98",
  "key3": "3svXYBrM5c6mr5iQRu5k5qjs65zp9HRV9qpa8C1UaJQNp9EahroDfaoqFYFuP3DhSYcJ2TuKSrQBMjWHD1vR39Cb",
  "key4": "5zxNbjPqS13HduUNqzEXemEx7bN3P5MN4DHNfhzs59MtsE4i2b81m8Sr4wNvw2HpdKVJsog8yG1hYfrh8MPD4TJw",
  "key5": "8TBnir8TDX5eP5R1e4BfUs6fe9xXCNeWzzT8xZ76EhD6NNRs36Ufj5jXF5KWFxi4mQYbR8omfSVGbbCgc8vZB6o",
  "key6": "4Losh5Ao2ijQ9CtxNHzEY4cf3TL4CfNuQ1fbPoxQtdxJTkNYwT2mkuo4z7ZJm7yErC9jiXp4FFWgVbFA61JpSbuv",
  "key7": "5e5cpbaBp81DxnN9rgDt7q1Wapj8Gto1PUHgdWqCNkjS1oooMsMVtz7CoetRbGpKChsH5iBL48EDbkChhK2dDVF4",
  "key8": "wbqhbgnfgbzhqasqJmmtTogHRQBUSP3LowuqSPH6kDb87WCVPutnfvoGGtDJAu1DqadVeMTj2TLrMrj74c9L9BF",
  "key9": "j3XKN672VJ5S1hkmvZSAhrNdRaL5bKdqo4DFf1dkLDBTwtgr8CQPJs8JmLc8Udo22M7fZ5DxagbhfHMBSrCXmQi",
  "key10": "2hi6dsVwPNGcVPhCNJiVkTMZE5PizAeT5ghAMeLY11A82sav7sZWSah9NXwyagThR2YtJ6Yb7s3kS4o5tE5k7AKX",
  "key11": "2ZvUwdbtbmjyHRDGWriLgMxawRqtfXm3CduFuagvyqCnZv5Jk17mRYX2GRynY7kk7sfvqJtgvm9XxHXKhVCr4HQ3",
  "key12": "3wD4WMJt1zQ6iGv14Et7rMNvgyVeHsfcvFmQ5vsoTUZnjT2T9CcpNToN4UzBMkXfAwvVTzReJ1pW9ADLSgU998nF",
  "key13": "2qDEjndMiU11LD4WE6hXmunuHPF1HHA2pSuin1NhniActB83dEoH4nQddy3uif5sCTkofg7kZgh85nvtRTyeoP9b",
  "key14": "EJ9UoG9aEaLzAf6JhNZhBMSTMzYtkdkbapyUyEfUf7r98SHUBHYpza3TVE7ZTiWFSfYyLYCaeJd7u7xvi4AMGZX",
  "key15": "eTuuWcurjUK9ribZUU249j7D7FkoB6MawuwVvoPUGApfyL7w5ReYjarx8fG1kjJFKZ5kXjEhaJ2Bv5PaaCAzixz",
  "key16": "2FDV7zLxYwxbXhMC8dZ7WNjoXFjL5dYEb5zJUGiJcoJnZAWTFERf23GLRhwtEKxqTdy8JgVaSBX4uEPxxih5Y7M4",
  "key17": "5AxpzeDVYHFAuNWHnVfMRTwy3uX6dc36paeSK2WtxXfyTE7WDthF4aGazCBV7omKyu7QErJY6aUtJpztWwb1QYQ4",
  "key18": "5mb1iSvWkkGtJve7HQb7KoJRXXszS2VR67XbfmSSUH8QBY8KnQUAWbz8TpQyxTrP4hGpzR6yeb7qSyBdPbPF4W2e",
  "key19": "3qWhVVCAJynB5wMp9wE4NuhT3DWo32yUnVAjuTyvyB71MM6H3ZQ6fk64S6HBSRNE2UVFBtZVBr6z6MzyW4SKfx5s",
  "key20": "4dnN8eoFSC27N2qmUjufZwW6voQCB6jVMTrpLratJGpTRVPyQ4QrEVMWijHt4m1dJQ6U7ZM62TWUr3i3r7xLrbsa",
  "key21": "5CZ8E6WxoJhuwWZwnpR8kN87vMeuPnXLkC54mm9LhxCyWREUygs8rdTo1CPWaALS4qiGZZRNX7Kj51hE4DPWecLa",
  "key22": "cA7JooAZ6a7yYe1LmwXLy8HvTotuK3Aq8HwWoJnpG5eUVLx3QQKdTEngGwtP4eFWmti1yXYXNnX6RWafBaamCRn",
  "key23": "g34jSR1TX6MkgrD6wRtPSqzCQgPLggh2mGDZ6YPEiR46tfLLtLqqJuYCETyK93LiRXh62vmLai4RqJjgg59So1L",
  "key24": "3GUHavSqp8TLMhBWC7LHK5bi9Za4zEU7Y5t5Cx3ZdxzDpHRFN1mkTRskTMTeFB8MtzYxA2CfZGQx9kfU2ot2opwZ",
  "key25": "2krmWMvG5WD1jFzxJAwz6HtHG3KKFRNZ9WZWQQhxhhaAkKkHAimq8smnS3WQ2eyydnnHM15h5AhQGqA5qWJZRySF"
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
