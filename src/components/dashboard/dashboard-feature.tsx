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
    "2AZLz9JCHCp3CuJq2472KwPFn6ixCaTjAtgjMXTp3d4NQ9hK3pXqWVTgRFkGT4Q1dHHPxuUYQTHiSiKQWcdwFXDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qpJ6WatiJjeuqfuTuk3A8Fg6W3LJ7yt2wuCsyJv8SPzjHiU4o1hF9S1eYzVo2QYmkkPUShNtPzGakhehkdm5x9i",
  "key1": "5UVQpQzQ4Ri2iNTgKPTTroW3cTne9y6ciGEwXY3Yp8BEjLRqdrt7mrU1f1CnkkHv64pSgPPq7ZkM2Lebgf525S6N",
  "key2": "SJ4y4uwdNJLCrnedWYKRbxQKDJSxoBiNaTEbJsK872BgNiAZvVSjHT862S8rkoV8wbihPuhvEh2TyQoj9T257Du",
  "key3": "62ps4mkPLn3MwixE3rx6atMJ33MbT4fYiratQ9Gjb3Jk8n4VbrwCKL1ghdsLJpsimyWomfQHQSMUY3gNFrcbwPtM",
  "key4": "3jtUxj9J5Ddzv4Ei8XQXdhV9r4BNHXe2zNHuxrBmn1s7hoUzpoiiUw9X1Et8e9eVtKpt4BtCgSjoYYmyFzCD4cSG",
  "key5": "5sF5ouVWN95awKAEfLoYRHXwFZsVxHsnLvMs6qnoLJxxLe4K72iRqfWpPShC2SMqeK5tGCHETDfYZeiaHW1TVtJM",
  "key6": "3Fpv6NfnHjv3xfR9wtgd5Vnf68pMEx9nrjh5drrUrNLXCygANg42VSidHbTaZZNYAh2z7Y9We7zuCgx6dHrH7yf5",
  "key7": "2Un2EVhnyP9KGNwaSzzkdAyTWczSMSGJXQLCYyxmvDtuae7av3X5DneQxFkg7RMyabggUoFrag9tSrqLcEEY34rL",
  "key8": "61kwnSunKYZbo458dhaa7784YA4gpTatrjZAgjtv7Fv4n6syPKhjDVGJU5yXg7SJR7H2eFRH3ydqs6XYgHEoB1Ld",
  "key9": "sBJiGzypeAEJNhaKKeiHHg8HRBeevjpoJKE5FPYuqgog4uNT2ArNnGd6N33jUAreSGGZPw3RkpgtQzzWryoujsp",
  "key10": "EkpQkPQKQYi2k4nZV2JV9xYHAqAwTJbwHWRLb7hgWP1u6eGBsq3GcX8pY795cxu6Q7mQ2FhbbiAkXzTSJ7xV9Le",
  "key11": "3grokp1NbNpb6JFRELE582havmsz88Mg2Cz2sTHrJw3fpoLfXtQneqVfuMQmkgdp6Tt5Wvg6nYPkCebJDg4DSNcW",
  "key12": "4PcZu2JuB3NDoyZ1tvRDG6tdftQ68cz6wTABr2PNAbC4V3etChkhRK4cgSJkVxMbwhRj6v9jzmboDER2jrJfpgiu",
  "key13": "4KK3vGrsoqTF6FCtyjaFnN34MEJqS8E2ZxuwXsMzqp7S6EFZQvtRrG7AvssQN6zvT3q96TNgD6BiXo4XZyphXLVg",
  "key14": "2RNNDxZ94URjbprz2xw93N93AHGmX3t6nHVY6GVAEQBCtUYffcYFnVjGrmSBtcrMHBmid2jQ1gd2stUT96swNB6J",
  "key15": "5NJ7mWM6658Z8YGhWpAMQBBEjwxyJA2MB5nLW56fghoUe9TE12sv74vx1o7Z5paeWwb4opibB74iWLuL77utCLZN",
  "key16": "kX6q55Xfoq7FxL9nNZ4p7FJbHnVQ2Xf87xttPRf2TLEAgc2tSDp92GqGtZDow2XdeHMq3LK1tForG6sWY23KJL6",
  "key17": "3WmfduaepwpQPWQMDW2eMdgy49qby56VcPfAQRUULi2Z3wj76xuQHfLF638buAh5mdNKZDtZGXVhjTSLccxPLnwY",
  "key18": "2jhJXgqisMFzmg3Dx9wAPpy5uyxu4TLNpbKLbqvFzEhr3paj6fj9MUZKe5V81vQtBHgoN8715L5uzegnqPPxJ4XX",
  "key19": "61Ft5aj9jYD9LZ7d1NVy8oLZjzjHMx98Ztxj41fGj24soD6praUygrAf6S5HR1irQHq4tuYjRzHvBT2UsmeUC4VA",
  "key20": "j9hkcRoLVrDqDy4dXnziBvhnRNiwStXcCH2ChCsXzt1PZUyihyJLZUdYAxrLXECRnTSSAV3pkZ5P9g1CzkazM5Y",
  "key21": "HM6ec4fSSTfBHv6sdgx9JSKWKXvtRzS4FBJEaiDEvMCAvi65hSnXQdbZzGFLrQZZQLXRCZkuxuvVLpjbrD6oPLW",
  "key22": "2eZfaS5CUFACwaJXD85s82XEDp9AVgRieEAPtJJxUW18qUPyxSoewT7p8TnedGLetRad3a6PMVGaNGaLix8MyxEV",
  "key23": "4yvnih6pN1gjVxuqnwWAyskcFrhSqJog35Rf67u9fBJ827xSC4Ma6t9D78HRVFHr11foDcYd148oNBazBAGpgfJq",
  "key24": "s5mL7XHcQ9kPQo1cNL28awmZML1VJhY5VKMu1xpnzUkh4bWbQLkkiwJiCYcYbo61vfnGyqUkDE6yo7wWJqJ2kKP"
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
