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
    "rg8JBLZSBqAqA4Hc5mR5s7J2P2Ae86sysuEitBr4uwNxjCBWYHgdVw3wbazFEiucTQ5wE9RBTnifnKi7koHuPk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o2rCsFBDcW9M6bQiCcK9yukSAwYrZ2GB2oVcPXsd5bun9VTmTMJmMofGgSZWGMPbmkurtmh7reUKzcarJ9zsfLG",
  "key1": "2P6W67PgxVXy3sK6pZj2CKntWYA674h8dmTsWhZJvfngBadvzsoEHCnZMU4oicgVJjUeco6abAXf7GbhHAc6zF64",
  "key2": "V4VKoshLGeewC5atbDL8i81bWMBnkzopiD3QXGp2MBdUPkWkCyUCNwF6p96kRq9d3eTJELYbJc9P7F63gvGL4x8",
  "key3": "4SEvFFDPw2srYP43hC6nQaLSBLhwJ1eotzX3ufmg95hZAg1Jc5rfBu4WNThYYfjKfy7rZAUQwoCiMHC7cvT2r5VM",
  "key4": "2Vn3Q563k466QxxXdrWPWANCMBjza9es5L5krugbG9F6Nj3GFyRkEeYqnV6TNjTbcaTENm1x7rVswmHj7nBazz43",
  "key5": "omvfNeLPZMriFQrcoQQQJLQNTfeGRShfyuGB1a7chQ7bP76uasp8cbxDDL6yJ9dmiUoC4TQxA6M3X79kJGrSsms",
  "key6": "2EtMfkwPQczHhTLuV7PNCmgdYiLfz4zXP6NGMStMLBsvYirum2QZLdkpQZ1WxtiAbyUyszSVw5TaCQbU1aiv7B86",
  "key7": "38gHUnKKNjrNdXkc2RUwiSLd5mUxPZ142izVqnYJ3SoBDNvDTrubp6aU8DNopcbocFUGhKFK9essW3ZeQqfbBCJj",
  "key8": "JKMQrpX951Ths1NJFkJGX9V74btDSm6J4AfVXjNQKQGY8brTVKyaEU3HJNyYrUW9mC9TXZWnjiZp8zhMNPmYePH",
  "key9": "3EUPaC1rHZGBpp1nqxLmP5cCcmM7D4J8c4Wb3CBbifLjqcJpMoV2sE73ScJC9o6kK1BNuNuVQWrCoAN8fWcXpsyK",
  "key10": "zico6twd6qmgwT1c4H37hN4XQV2fWKijQ1zyd8KU99brCWmfLJqCAPo4H86wHAS4ktwUHsb2SjyD5odKKyzbGwg",
  "key11": "3cXYi25TeMajXYXyZGe6fLzsV8oi8yJyaFfmhJUW4e6x8EYmESQMVGiCxnAYdhHUaQHJMrV9xP8VAkcQh8w85yMg",
  "key12": "JMppVFvrxSo4xxYzE624PGsqgegmM2qpq6CqqrAHHfDi8HSgv4rnP2WLzLQydFG98H4864r35VXMBRcx5MX928v",
  "key13": "Hdo9KbQfFA6umvey5MeX9f6iGrwMMPBuNeEqHCjinKhAJo7Q2kKLUyBNTWm3fwGeku5sMUrnVoGSPY5H15pNg3U",
  "key14": "3tvAdW5xiFUC7LPJwujh7rXFnL8kJHcNxiZi2UroL2iRHw4jGp8jVL8qwoAb5uer1ZboJoZsdcQUExUYT21Tt8Ah",
  "key15": "2ezc5aoxx7QGpyNqnAXYFsyMNXJZw9r4YpBevYQz49D9YAdiws3LTZoqLgPzZFmdn9VxSBZhN8oWmxiubpTzPoG8",
  "key16": "2wSxBZEYGZdVGAUcBL5yXZd6NVa7NfzVmRsE9N3v8rCZyfZu3vGrPw3KQef7Q3fhYG2YNzy4WSQRNMxkKfSvcTsz",
  "key17": "4tKof5hgJ3wP7uA1GYbwoNJZcL7CDfx6feyT9boanp5W9TQFjC7J67GjyKpqFXz3Wi9aoZhzRfTUtYCMiPaJvb5e",
  "key18": "4h9skpjQdJR3QnWoL4d7oXp1PrvimHvyfQ38ya6KywWTvcYxbyABNnHqMknLaPSTcKH5ZMQRcDuCpSmwSSTQKcM",
  "key19": "3t52ec8sLWFn8DDvCVimiCMCYTpTxpopfijRmTJWHRSQQ4hrn6hQFXWKrzBrLowmyfSSFk78r5r6NYVGvEJYjxc",
  "key20": "4oFxqGS4UwEfGvnDggXnsxU5JZE8c8tqysmmMDfVE9vGgehWAUh1CSQt7kVSN9j3DnymedHe9B1sfFDnRpWvSqor",
  "key21": "41wwzVNp6Bt6cjLdiE4gfm4i5ZuxPGMUtueBaL3HUHkZM3viptqisfejuvk7ACe4oaDTqxaSg94qLp8Drb2LcVku",
  "key22": "3HLMK91Np4piZAtFDejbS79WnrQx7w8Bxt24tBpGbgjXRCFrCy5d4zqwYMLLZ727EEToDthg6QTo2A1KmYHJogrX",
  "key23": "2CSmA2N9n3GVWCd2NpJBxaau6u6gdEaxea8W2dkgZCzW5tKi7FN6PpAGXzAnP5MzdrD2h93yKeB4WFwQKAB7NnXk",
  "key24": "4N4u25t7G2DvC5ZpeGzzrYzrTXrnq4j3GFhAH9xtyKPS12F5xowJngBS65R4TTacSiqWkprhjzBiSk7B6LiYmqYn",
  "key25": "4Lto6LMWJN8qbgGd4oiP7cZvRRMNL2gbVdGnVwAztG41JwuZ6D8mZbvLq5GXdvXW6GkjbCj4c5U2XS9BhyLVizf7",
  "key26": "3P4mAugqobLn1RL5enWaq9fQmvfy91fFZN3f9CLtRHxDdsK9eACv2W7w44xcW2J55n9DBY3tPEAsaW3hMoBZsg8P"
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
