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
    "GcrfNQRuVQ3XMQjE9gAATpqRjHYGxCvMs8ZJNxokHP8djpb2keDzLjHEJqm8nMkNJ1Q66bbVTmKpNMmv9QvTK5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ww67rn8yk37tBFHQVbPdVDaH4ypzU7RnFBxj5y75d4jcC6NkoJKoJm3sqZWefuAsPPtDGBUCj1scCLJ2RfS571B",
  "key1": "5HvQPLS29mkqvBfRQ1N99GLGppnt3iUtND69UhAM876fwj6orYBayJQARKZzs7647sfQdX2zqtmsWRSCDAJzSEFU",
  "key2": "1275dmG9VBsEovJMwk18LX6NbnJk4bGgSDtUvJPZgi8PnGo8V6P9bGD4mz8rsHR45XEi94MvcgHuz4PZRQZGZ8Vq",
  "key3": "44vw81jf7TfTx1nJG9vSBonKHeB1Q4G5pVTAeXPw5QP28tu2XWxpVMcemN7cGRpQkLZrr4AuWmweCW6jmwwkeALY",
  "key4": "4L6L6FrkfR9ZATV2dVkS2NDtQ7wi4GVESJBrypcLJAiyGSPs9XaGAqgpjv7uQ6XkW3Bem9DfrDaqLPUBNB3fhQmQ",
  "key5": "3QL4u2k3i6fsvb3n4Xgt3njRAMRPxVCezik6cmtstTZbYwhrZR7MLsUNhmukTFdwp2L2JUfkxBfizo6hdn7e3aH1",
  "key6": "3WQuTy1Fux5Xd193HPwsscwapFjazDC3guVSi2qKXPPonVuru3sMFXjHRbujjr5tiFvR1xRVnHFEVjss38DDiPQk",
  "key7": "3fap9DgNw4WPSRJV1fEx41Kv8tCuFARTaaLc72Dk34JLo1CQaEz2ofdtzGAGQQ38Sg5Qo4swNQ4k2EfgbF7iFQnS",
  "key8": "3uRP3uindck6a4iFFPPCu3dGPvLHhSQ9trkKisqCKXWVjM3oaVDjsdAKkca88ZUxm54JzXnn1VsUBpbwYckzj5K7",
  "key9": "tcvvwPfLhkVBKU9RLuFsCBXhoMEtEbyfAUb33p7osSHMZuCJMsojFG9dUhxwHdoh34hfAyEGy8BmhvBHQAiSAKw",
  "key10": "62z6xR6TtaevdGskhcW8gVkbPtrU5gkRZK6RaGpZRuaxHbeFzL5vQ4WxTUuFgbNfEJTzbz51suN74mmayfUR6zXG",
  "key11": "3FhhrvhaJBkKGV5ben6BbhBxC6uqy6vgeCUFuNTH7i6sUiUpCREMMJzSmwauEj3EEL7P8D5VnEzd6VoK6ZYsm6Ao",
  "key12": "3vHku2WjNwM11sTsvjGmXFWxUj6wbqKA9Rgu3wkxTYbPwSGra9nsAHfiwSddFg6vZXZFe9a7JsNXuU2vPKnZ9xd6",
  "key13": "5YawH5X4nMHa1qKojsZycdLSci8gTuKXkkpefd3FnjDU2phWLDXkhXcWcd91FPNGABNHjS8hsswfXDrneHTdSaU3",
  "key14": "5sR1pNqELoeL52hYpr34AJCMttwLEtBEstAdJ9FKSnRw47Z6w9cz9YQNqyFhjkpKo8VvNUuxdgxpVXuZM88XeGiX",
  "key15": "sk35YxcBmfVSxpE8C6rv4h8NZmGAXuwzcV8tXZ1jnx8dEpcCiBC2MBUfSUAYJqy8xob5fcG7V1i8Ufz4fibJYsj",
  "key16": "d6zHW9JfBzbfoVZH1xt1wbLiv8MM1rizUvp3sGTukhWwsi5LA88RT62cWksrSQTFCcdtyJaUoEZgueuxYQVqHvJ",
  "key17": "45HKMNBPvqobp49EGfJSTw4gmeuKpK39yxB4t22YsjLLEnokWEexxvczDsVNTMdw24hUAe4XKHiJY7RrDXvBRQY6",
  "key18": "4G8oHXWtWBkSu6yTpeK552pA5cj1nY9yMNs3Svo4QttMG8JKH1DWLUdnNYsr7YHEiTFVXTnGAV6ZdHiNuAiH7ALp",
  "key19": "3p1CvhSXhTvp62unVaqmUHsybVo9F8kzLRut71457KxfzrwSLuSfPr46sufZZksyPZDpmPaB6iGk2kS72epQaQn3",
  "key20": "2YXFfsZMqVESGkpX8D6SWEfEotn9WJB3sb2jo3ZAoASx9cndCvi8BX9yv1crXXLc8WXi2dCAgvq3MArx7uJyMkf7",
  "key21": "5MHWrQmu4YvgLUyfTrhwfqCmAmBwmHg5o5p3a3zaNUL5Dszj2v2h6CDtLqcsQa4VTJXySpa2SohRB4gquAXPUre6",
  "key22": "573KbVEMuQwW3MibysYuj6g4MkqoAEQiEGWaKsVffuGp4pSmL7H4Vy6tp7xcp3ymtV8SyYjF97MHT3oR6wxS79MZ",
  "key23": "435cJr37uqUzWMDkGpXHjgZDSCfDEM7TGH3WKsZ19XTbvwrazu8qnvFGCfrtsa9EKyqpS5dKJkrumzxXFiYfy7e3",
  "key24": "3G2ftAzXpTQeqCF3zCJDU8rCJryvHbixGADNGEiXc7E6rjNfFsmptuMtAwYBULptnL9ArWCswnyY2hKpV5KHzFDF"
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
