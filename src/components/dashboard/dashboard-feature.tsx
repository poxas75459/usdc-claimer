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
    "3Zuc5MFT9kyPVhQaabprtiZLiGtFD7T9jK6BmgLz3vZBJ3KiXxdJmMAc8NLYBTqWTrGnV8P4W6uPjMe4Gz4X4mqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jtj6VazAmfgNEEoBYhCfJS4Kz7XkDCbj1Eq9Nk675Myt4uwyUCuFTT5iA7SN3qqxVo5S35SrEZhyAtwPdHMNKP8",
  "key1": "58B5eBQdUV7jBzwaLBedb3z9puH3nA3eWDWnZ7CBqJSoQ3RzHqjfGXjnru4frYMZBvVxfwj6RZzJ5ofzDk8h7sGf",
  "key2": "44Zrbg3o6twMxGskX5D4C3YvQCcXGVZAvMFgD1ySdwvL5i4SX6SALYPdsA51eZYogQVKdTfaCEFkeLuT46f7Q6EN",
  "key3": "28QbLaU6BvCcaDyAJRmURUKYha3NRRGV6ANi1zXYc5uiMzANYudV9GXQUqiDdfV3Lh4GYk37aL8r6a2hHp9w8AC9",
  "key4": "33K8LiMJZnQHa9xcZ48k8P6H2qoWQuYcuEX6LfZa4G5ajJSRGuUPjAvh3MKE3a2S43DRLPm98AnH3HaPdToVTQqu",
  "key5": "45DVoqtA2xJH81GmTNueZ1XxpULUSkM7wZFLbPzdegZ7Curr48yCyXhjHLSB8t5F17H8NvFQdDvBrV4B5zsLHZrm",
  "key6": "wFgLPYpa11sFSenq1Q7fjojzEP3bWSwDfpXph9i6GG7KANBaTuQkGvhxaw5rSHmQ8sdAsTfp973K3YcYZkSWhWH",
  "key7": "2uk9CAeVR5DfzDQGUyZdzcPZC1K7waooQqREUP5ep3on3KQZ34NhBbCVR7qQ6bBijD719mmxHWETPGFC7kogYxmn",
  "key8": "fMcwfa8FhnepZtTABiSzSQwZH5cyHuHHsiB2b6HVvYXwe24rgUygtjwYQxXAq6urMZPVgw4M59ifsMQkyauTnGh",
  "key9": "2TsB1yznTyYS3euYKR7XD1Ua1bRpP5YFZTP2fHu4B3tWoptWduvciM4NGXRJautoijpRaxmRHxP2sTBhnyFG5LWZ",
  "key10": "2vTxRXXGeDbKo8SABvBABeChEjoiB2ozkMcf8pVTkShh7pyKLgtPBZQqN5Ytmu6TgRKLVZJXExvs4zTZMu43Z2Zn",
  "key11": "3s4iF8xxU3poFm9YFDoaPSk1M71kf8AihxMpW97NFK1Brt7zcxPvRNN8nVKKtKA1XGudRorquKnNXZ4ZHjTYtR4k",
  "key12": "3kFCvt4TyHFh53UKmquHnzPqAgyb6bgHjqpuLfo8mWMKvqbCpgbarHfEuxYh1t1ErLbrAeYgXavJLyHPneRU1Hbn",
  "key13": "2XJ7HDyqWjfAVYEmBtfMxTwxnNGpSqGNpsPKdQJBYK746cyk61VaGSFWuNn7ivxH8Qk78SmpmJGSPjbq4cDoigtp",
  "key14": "5VfqFFYH7GP1KiSvz2rcwjsvhZUC6d3QwQo5sqDvNFdUM7x9N9CwSWPr5kgsNpLouSuuKndhGc9nvG3km8jNj3GE",
  "key15": "5KQSzycLigTFZmEsp6n3tYANxxMT6P2XuuWMsvBCaWx1qcjUNvEPjaGskgqVw3hYqSNLs3xZi6t2BahsnaoFpMnr",
  "key16": "3qDKqgVTzeZ1gUSpzPfGBqjjEwEJtjDNwNzy3vCS5CPE7VUaGnLTFD6vWVrGCfSMPjjKPS8QSH6vZgVztCxxaCWf",
  "key17": "2M5UKxUHWnTHC7ou2bj6DYVxybPTAf26P2tvcFdyGrN1kCYU56gXgKwQ4hjFdf94zpqVusP228QtKiyPNbWy48bB",
  "key18": "3CehPKcbuEk1eRcB4FwkAsraZgCXHAr5LrgzTB7bUjacZaeHwmP17W3UUwUXsSrEv39jRH9AdCLgnisLCGyu8Smv",
  "key19": "AbL3GbemSw6uU96GU69xF4AwQNzY5rhmDEeGjfBfLh7ycaySDBysWcZWwxDTgubxkURa7r3rjriTt5HVBPHaRnX",
  "key20": "5CnpbcqE31MGkDqmz2ms2EdoY1Pn3jkouZwnVKyeCrGjUoiAo9TQWUsyLVNqRdsZFqhuyLAb6SK4XF9KGHXuj6cA",
  "key21": "4xwv3CWZYHRxjWtoAprcpa85svvBSvMnseGUpVKh1njHh5ME9yi4x2jGjAuSsBkkrFpHg8ZZSdwb4vpRBmqqMoCw",
  "key22": "3aENToj2JUBTnrbRKMi1dbED2qrKGv14uLNW6zxFYzCvc3yp1wAzseBJY3MAaXWVUMeynxFir2gWZGtNpeeRpWSA",
  "key23": "4oos7FAm4RgH5Vy83guy24YMzncSLYHWFDAUZXUufBxH4KX5tLJLbNsWUsgiyM6W9FCpMTcrKv9DY3VbvLUTBc5K",
  "key24": "X3WtQMMCVVVTHGYE32W2QPZGqe8KBbSxukFtbFf43Js6yUeTHVcejByG7p9xvKrkYmQVjpB3VsUx5jvqX7q53yp",
  "key25": "p3Mt574yxF7kD5wPxDYsReU9n8AXzYbz3S8JFMjw2cjpNWSkgsuSMb7MCc1VJmSshnzA5LvJSvmAgsaC1mN3d3H",
  "key26": "2RYcQKC2y7J16H6F8EVSsevMVJsnwuidR3ihop9jU3qubxfGDH88ZgjQQNzt6epRyLGdgJjraqpWiw15B1TCjkrD",
  "key27": "3j3MGqpzNuEYdufazGPNQeJs3zxaGxWJc4KVmb2gZfGRfyZVtrS7R6A9EYvTwHXtLFUqhVEx1RMgYKWJhMBNAJtR",
  "key28": "61zqj3ZHJpyZcjrXvMFNpcjH1YBfpdTJGo38psPG2CcKgzfnRPvDsQ3hmArXG8NkwkhfnyxqmAzh6vpz5nwPRae4"
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
