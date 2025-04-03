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
    "NnYpvyYufRFLU1zm3x9gpGFmFub9f6M3rayc1y1fPTzNw9ZxxosaP7q9bFGyjH3shV1JSdhKLmDMTtyWtE8tBDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BbQqZrEaySLSxmQzbH2FBVyefrWs13Q9VEo9eDPAUN5YEQCKzJoJp23yFb39vtMdCNdoQYrdc4Ueg3raNC6e7oJ",
  "key1": "5dsveuLzoFD5q6Yri3bSDvXyBjqfMxfvjHdpEWKwURcdJo5SopSXcMHaYqaE5a3eZz5Q4bHd9SYN6kZBNrAH5HxY",
  "key2": "2Fxtci9FM7FFb59qCZU2359oPBkvpkjYWNxJL29YSRJbWnVrsgQT9dv6zEyid3sVp3Q6UnHE93TTWoVX9jyJJCiq",
  "key3": "4YkSjHNmfZNAmQ3V2KeLEHMJNj4XV6vpy7ZHhnojVVac1sGZpPgZjSwbgXUUUAbStRie4K2yjkmsc8C3hNgHYPe5",
  "key4": "5tD2wAUZDtao2wKZyT46cL2MFaoPFmnXouH5HwwGH4ku2b1dHMjm5TqxqkSEoSsTfyk3rBQoD98oSTGWTfFPYJP4",
  "key5": "ecFnX2YfaWS8nW1Zz3mUiPwa6nfiYzMYX8PPVyC1Tr924wSvjpz2A75tXbjJFySpPGK7XZY5k6zARy7UZgu6XQy",
  "key6": "2RGQteRbeiH4zDk6vMBEukkkGLcDNnyxKRBwG6n835ceNjv9q6HzWW49T3MTyKhxcceZXVu9F9r84nwgnEwXUJan",
  "key7": "ZveMVphB5byRjjRqWAgFwwxWGKnLFZWiuTzMaUVxZwv7u9nzcGeSBRTR7pdCV6cLVEBoXs7kNvSJ3zTyRokkaQF",
  "key8": "5hfqQdAv74rJBffXcmLjf5K8rgbDN47uAakfkWHxu1KJXEHtG9Cr985T4y1KEv1mXYxCCAMSaviT4DMDzknu5u7K",
  "key9": "3M7svWjuVsSqHhfZWk6MK1fmyLU4arhLLbrwTqCMMMGUD1mhT73M1GVMY8HR8JTFxDt7Z5BE9YSKujw8b3Bso97X",
  "key10": "63PdRRtddXzeEf2ehMVYk5vrKpdcfFWRwbgQ7MeBdkWStWe3RiKpkH9YWteTeUDW74MX3LRmRMEVBpzrFrwjZGp8",
  "key11": "2h4xhhTDMFYc3PkwXCPwzPUrAzNXSUKG742TwrV4LxgjSQJs9BTLDguDjzbuwjx7iTqMMezk31RZj1JWVuEwdABG",
  "key12": "4EDRTTS8T6YaMXbAHLGvotHMJL3thPNAqV5iz7YuCy1Ghcv91ZVXnpQUL1yuwr7dBJ9GbzNgzqZ7DaFMkjSJidfK",
  "key13": "2R3to9mgHBNfwStVWeygWT6bKcK4tFDp9nh8qRu4Xa57uSxrFeHbXzeNzwx5WaGDddApuFL2j4rAXguta6hVkMM8",
  "key14": "4euwPpfTuSTbqfMnE4qM2riQXo8V8p3gZSfu8wyNyQPZ8uzuekupwWCMkbpakZhUch3pAGnTmV2EZzAe52627X2Y",
  "key15": "5X11J9knUDi3kUhDAVhH1HN954WxPLMQMfF6XSpuAw1yqnhoyuA8PQA6GjG6FmkywfQZPFNGGmJ8BrD2u7hYeX4S",
  "key16": "2hTSNne66FcZF2PTS3TJ3JbQcok8EJckpYpPHjcDnG1cVxyr7omuTmMFVgJMTF2eTCKkxSxGuZYkYfCBrt4LRVot",
  "key17": "2GxJUU8FxVxHAz97DLTAhbQDzs258474MfKgvuzXs6qWKfcYokjSgLsWBPqEPrEjrDwzZih6qkGfUgMJsKmi7ddw",
  "key18": "ayWPp8KHp4ivCXfSRuDTv9ZMGFfR9yaNTbwp11qBZfWBU6dxcDTwjavTkn5sCry5iQkVFJc1UVp8Zn5wJvLdmbZ",
  "key19": "44wVf57xLdhEQ35XqHsKz7juexbA3DQqGZUqRoaWdSGDMmGLRwjeCBtoqvgXQYL8KU3BgAsbRTMWtgjY8jt6c2nn",
  "key20": "56YmovjAgW8WWtD2MgeDZ23C7vFkJ4kuK8qRmtXQYiP5P63XTdSNfmdz7AeqwgG2y8zWDvodWYjQNVXFLFAKQC2e",
  "key21": "Z4tch1ZceWDBhycyYpVFnwNqt1yBQTjG3aKc3cjvZTuHjGZzJm3TzBEUqd5Z3UmJbBLq1xW27dgCJK42fau1ZqH",
  "key22": "4yqKaqkE8AhmbGBRrSN5Bt6WJTiE4zzR1d9ivc5jKibUe2MdRWA3mT8d2TkmEjfXqVcaenpB4niTD7n8ZmwDHnMp",
  "key23": "5a8hpQAHaHsPPgDQ4AvQDKQqeBEemJ95jfe1NWCHWXdpCQ2ztKEKfgMymcFUufPZLjHsdtvPvhRkpeR3JJd4wHp1",
  "key24": "dHRBUzwzX3pFZV81DDsPNjayoAhRRJHhHSsNoG7LSPKsnZ28dWrM7UbACB8ac6AmjtH4BfZR96zSFAWLJzQ582C"
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
