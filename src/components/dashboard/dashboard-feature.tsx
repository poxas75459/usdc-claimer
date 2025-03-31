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
    "5fQDbbzoBu5VXwZ68FVT2n5dccvd1F4CU4dkaQMixa9meQAsbLwdE3FhyQT4GYDqEGXcpLJYf5uNcUP5KksdVp8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k6kFcS1fHkJe81emTkmq7fuccpYPmKABYTP2dvg2St8jWoZYYoLLssJxtd39iCtTx82w31dQjULDEcHmaqrN8TB",
  "key1": "3Q3qX7um9htcL7DWsbyRBccBKB83GuyoKRy4yRp7gTtrywNMWzpHL4JXVFU3uuzqSs6Pf7fRSsjtYB2JXFWqTqXa",
  "key2": "3Hc3eSEDLwKnUAk9ivraia7pEUAXsuNSZzs7NqsCVkZ6Yf7n5ywUVU3kDquwEPJ4wA9hUDLzEhyt51mJskXzp7B3",
  "key3": "59ZcuyysqVBw5FYMThYgchLJFFveYSkqVdWQ8S9UCHvHm3wHJX1V44EpJmJ625Pa5ck6L8tkSwGJHAFuSeyZXQtN",
  "key4": "2Vhfp8k8edVJynF68UR799aDurwogNAmxX4ZApTzfrN9P2pqVsGZPKhyNTD8KYpLpkyiASXdFhpAwxr2sE4gCbWT",
  "key5": "2MBd8tUqHh416Y4RqSsqjwNGBUJfUToJcCaLT5KvqZaagggQU6uXgh78XKi8dYfPy6mh16Bq6SZJtehtCyVuGWbi",
  "key6": "SbTU6ribS9xPN6sgFRsFvWeQRyuLEnF2GWyjWbZunw5GkG9R6RGScFLipxsTVyD56ksJDUeAeUBFTM8aS69xX1J",
  "key7": "5aqkwhYvh3jQUn3NbhzTfrreeZ7u6pipyxwVyQgA921GHK7fcU86Pu5TkofTd1f5gZi1Ws2wYyczQmB8p5DAjBhV",
  "key8": "5HnZoaVRajBtDHSuU9H1pn14aDcdTVpyGrnvGTvWmYifnHJaBx5fB6X7FMzHoaFYGXng2oMajyGJQYPJksRSjKEA",
  "key9": "3iA2mx5GFMox7S8Z4jXK4DqSvWPHGrWPkcTdZWHKckuqbViRTpkmD9JEa8TrCcLQ26FBnz12zWjRvyxz7RFmRgqD",
  "key10": "5LF6NWJZykLbPfiLMrNNGJSf1pcVpvvAsuf1m1SXXcvF3tezU8YMeqSBzp1SkimZ4hvyomWFqmdEU5ibGG3R8Lv5",
  "key11": "2MWBL1tZk7Mhcn3bNtDzMYPnpu2EmVfzq2D9jWx3kJx634KEqAPdBSfXiYpqhektiBrWznS6WfD7Se6KiWuMWTmP",
  "key12": "6BiF2wrx3NgTDTuxy8ekP53zdkvtYKmV8nzkmG3XqHbYcFJCFxZsb4KjxDpLX8vgvzfRgtGQcSE3883YN9TBd8h",
  "key13": "5pHoyA2dxLL4BD4epTkfREgqeumEoZ7YfW8qTQ3cheV1pupztrfJcViapZH9pir7tRuPcXRARa7brkWGDQTTnQKu",
  "key14": "M5k94PNcEtsUBxHQaCYvrzpJbuh1FFMDXbf2CGJvu2fpP8KRSdgRCgcXovBLz1vmPFg3LrBoA1MqXEYkRxmDed9",
  "key15": "ifvHT65WYxDquA2ZSZzMPfRg7mHeBArfYKhYX1jw1RiuAMZ1HABb78ZSYhrrN1KLzZt3rontUvzUeNXH7BgHkBZ",
  "key16": "2y85vD1yVeJ8noA44QRpVkgqPe7gaL5wiyT2HfzMJYoJip6sUWNDQmDXPRxMY5bR4SCrtLMFFwmXmsM9ZFQ6rZii",
  "key17": "37TfAaCDaQwMrWpWsJuGTtJyArUMevooZ9dV8tfBWtyTyvTuXKNbth4C62AGXt8wxfwcCPtVxQbGqoi7Tma6W1wZ",
  "key18": "iR5iSyjnkjUT6jfT4fkdF8R311SiUZGaFCbmwephk37xhJH7NkrLesmzRtG85HFh6c5RkyQ2DWxF3jpTZYpWdU8",
  "key19": "oTH5b6ZoTZ7LDoqbKE3fcXKFDB8vk3ei6ieJ6MkJH4kywWseqMgEkbrFJAqXLwow7xmLxNkBViwuUGgRYUY4eRd",
  "key20": "5yhejT3o5AZM8bKHENwR6xh38fpQ4Xq4CTF7hAMGBy7WrvBNP5sJwvv2Y6GfqUxXu6hZHVNzxQ6Cv7SCkA8uBwB5",
  "key21": "41LiWB6mvD5GwXoCEKTLRwJySKSa3Ef3BZheDWjc8aZkVbVfhaJ2XYZSzG5UFQ9MDcbFhRy4LMHafoPk5TuroZqR",
  "key22": "2T7xuoqexHMfEe9aMsQMhKzr1MDFgXvQ8G9Fxs1zjyk8WthvDMndGFnmr5Rq7Whq8v9K8Mng8B5hwwAQNWLmRicu",
  "key23": "3sqibb4zZJZduujdZ6MuR5JLddcnGsJgTde1p75ux7tEXRTDjmKFhy662uaBKznNtLuvN7CJ99VTSQedQJ9muu1U",
  "key24": "2cT5ekp4L6eog4WoR5bcRr2zD7FkoJWdkRGkPNoj1E38MA6eUosFLw7DHCpRqjDX6FcBWM21zahV3Cvak2aKvWGs",
  "key25": "3YotsJSMCaDs1QcYtMKntw6VAbztoa9Ungd99ueYcZEs2vmW5qrhnX4chUdPhUDSAZJxmy3Y8AKCjr8csHsPx6BT"
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
