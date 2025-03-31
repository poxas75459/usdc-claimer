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
    "bX9WH4eZfznBf9TXwA6Dcss52MkcAZMhAh7HFjY7HwCykRbaXB5sAu3aGAL7Sxu5keq5nWV1K6cEHGcKfwcE6Ez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D2GZsxRjkVhwQMr1sVQhh2feLjwQMJPkoqGNwfY5ZFx47TNWsXwUsND6psAyMASuaFjvKcx4rj8hYP2TLq8BBwG",
  "key1": "4v8GxSx2n64aa8YWuZuLjt1FkL26rSd6EAzuKf22pnpCnsAvFyyZ6Yoe975DcARStdGHbB16PQ2saKiFba87JCMU",
  "key2": "49iVNBvraLpNucqy1ZwB98fRp7eZhKrKgwZNGdcxJUPdpu4D59kPaqmkdUcngECQcHZJvLzjCqz4hamxSXodY7hM",
  "key3": "5FP6pbY8r8y9FXFFQbB5FyYhUfnd9TJDta9u5XQKC9TUkaiTWp3niPUVVih68azqBoFiFUqMXJZqTa3qsXWQNXZ9",
  "key4": "4yPfkECyVgcDBUf8UVkKhYFS77okgUQzpDwRsshzoyjRWRyFEDnZwSJ9L8gGvqjQ8qRynF2BfnHJLC8GjAHzja9y",
  "key5": "3P4b4b8nM3sTrMrwY53ZUqnp4ovMVSyVkSz2zQk4URcJj5jwg8KWaikKkEoEtEhQoFfot3F7xFkvXEuujpTue16a",
  "key6": "bBGvc6PTrio3o43pmAedw8TnHumkrAfmc9yEGtpj7Qmfg52gaxqk6qF3daAMdVzcph2d1R2Fm1gSeWXHK7NpFJ7",
  "key7": "2T5mt1Bc5WBEWu818aD4YEib6i2uUbHc3FLiU3Bqdk3xeSu53xSZywggndPCCLh5JyNySv8KPPv9Nw7K176oQE8w",
  "key8": "2AoK3BqyZg9nf9U5vQKzeGREQZhyWyRbEyDWfcZYUeUoKKjz9LbhZ7bVoX3qBaB9JeHJ4uR7WqXb6QShbsDb2XPL",
  "key9": "4nSyB83q7ASAm7zC25Cw6kepy11kkRDVEkDk91uFXqqr2qEkXZwjdArh5EivsHcfVLT4yRCmkmnTGsAHThomW4Fj",
  "key10": "2kAVLzmoK8wf2XyB83VbE6einLSoLEvuJ7PKGKsSzt1prC9tS8gbVsD8h6mtrSYVzn4sXDpcUUkieCiS7z6XS8V1",
  "key11": "2H7Z9mFuheChFGwEfEHMxts6gwbpVibJsXZNVCvZKHeuvT64tiJe1vEBfGZYse7DHv26UzhhhpwvNbRr8GQNsJRW",
  "key12": "3GqTqA67X42mmjiRDVYCwSZyfpQMqdcmk5V4b3qkdzsuq5Zt8SdtwDB5gogpAeC6DZf4H1ziWGC2Dogbn7mfxvQe",
  "key13": "5qq2ugFrC64L1skDSfMu8P4fnEq7367iohB3srJS7awb7GeAv4nLNtk8XBMDArk5mEsNzutWAoa7A85Nxhnhm2qQ",
  "key14": "3TRzSMq9CoN2kHBUD7BgtQrG64r4m58meunvxPLhR71XhJpHHwGybZyAP1RGQgQRaL8QyCpixnWhCusbjyKYbqtM",
  "key15": "5cesr1WaYoJDgzMwvSmoWC25eXLKCzghUMCSQiH45iSUSnkBbqmtFzVeVeLCG4wGmxvLCUeBAdKH9RTX6UBQtPw",
  "key16": "45X1iiQ1J1KU1DU9YsBZJMUbiqGkjfh9weLXrqXUeNPvadk25fyh5svZroKemufhuuSKKFYMDAdZpYvTe2bQ5T4c",
  "key17": "2dPD5HRpygsAFWz4LBEFENbtBHJSwugRjEXaPow8WkwNE9DBysd5etHGLujk4szHGMFQRGygE1YqCESvVbF5Mr44",
  "key18": "3yLyTF39apeDwz1CnXooe4ZM23vQ1p4JDhwu1aQSEp29e59MRwJYPXzqsu5qf6dfCnas6trvn9xNp3bNUVydvG8q",
  "key19": "4uJcfw1tiinTjapu6rKQd5t1AAYzzXQQ2PjVUTNyrxtVy1DvqWexS99wRuDFLg33u7CnSJ7wA26JVrc9ZCyjUKna",
  "key20": "RiQfcL9vSa7dmDuucUKfY3YFy63u82VvuS8N8Ese2XWexyYhLswnAdfXdN8nriwtZaymdwHDUYiFEPKCgxgFW4f",
  "key21": "2PLYQpKojmZFyoNnjz7miczFZu9yUK3HkfkLQuTG8wmbFFcu8uWyySNKkBuMtY6zhmbt8xU7KRewxmb4GcpEdKLU",
  "key22": "4tGRkEPwnbpeF9gDKf3YutnGeSM8Bh26kPwN55tYweko9zcQRp3WgDy9rcnSQtGmkASj47x566oSuL5V57gxpoEA",
  "key23": "9s6y9CgfDRKhJads9uvAUrjnd3N2RToMZo3PunSSSmqpsnFxyej3tmK5J5rWTcZ8Wf2YxtmKUnBw6GcDCdCT816",
  "key24": "2HXBosPt3GxZdZ9DYFZiKvzooha9BS6whbxJ1249TrcGfbrsqBVW5p2d94CVkuGR2NZ4vx5op56wQfyWuf5n9yLL",
  "key25": "3zcJFU5BpskkcSa1LQk5KNKm7zJQwyYS7Ge4nP3Bvv2QAtGnv26bvEQ3SYB9PLcwWXacNc6gqsZAihh8A2xKZ6yH"
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
