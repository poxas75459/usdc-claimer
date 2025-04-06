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
    "jZn8Ngbqcwv7sSxpdrSWmXiqpoUyVRVwVjrGgyxytE43mgoSrSBJ89TzUpW71jQWpWC6VqvYUSnMDwEqxB64NUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5euzYdZY98NpTLGzKtQGqc65tsaerbjg451vFKZd2dWTZRbm9akibDE1P1R42usK5An59KBSV2ZDZ2m3a5V7Ftk8",
  "key1": "22aMR8k4GrAV8N1V1fnDYKdXYyAbpo5sLPpLNpnn2Azstvzp8QmNuy634ZwX5BwRFDUeALfAaG6ggTPpBCSMVDkY",
  "key2": "2MPwdW6Hvm4VuWYMRfwugw1HwxpKU2cQBnKZQEyK7u3NtUPbf7G9nhiLFVbze69mTtezj3LgDHwUTEzWct9UGaiQ",
  "key3": "4bJpkkaDpsfh9UBm7UgeXJdRbcdfFV1Uyuqjw6CxZBb579ZyeykjxHLiZbGAop5qt67rcpZ1rJHetL4o1WjYJcx9",
  "key4": "4xUL2MeVV9Ep2gSETeFWg5ufNL6AJLyj7j38qPpWfoRQ3TrUoPRYrLCdnTjcTXNeLMD2ryyCF9Q5hTqe3sRGjmvk",
  "key5": "4okJdoaZSWAncLLWnsAboNzuEbFgJ1kuB8o22WsYjHX8ej3bmVuzWDmg3vkcP6BatMNHwtB7VRGieyjFBW6ApqyK",
  "key6": "4bQHmVpVnqJaPR4urgrTi8B2t6uL2fL1Cu8hL79TWtpgs8rhiQFGmtdCWrshh6oeGwsFqaaRQJe7hNp2oAAqny4M",
  "key7": "2JaNeeNHUmmni3PpFojGuxNh5QQoUyiwUWx7Rh9LNdPiJ9ZGa74TjN5x9jwPyFnKmnUufBsSShvA4SKK69p7TiDs",
  "key8": "4ySLBMotksJNdxGgJfTRMArQpgNghjADB9TA4f3qZ45D7CEpae5v8LWLm5RWPgZTD5qKWbqzscYjYQAQCgMi2ifG",
  "key9": "zSZkKDXCo4ZX2YipR13QXoeGWj6XwdRgLqWEodaZq2g3PfdhZS4qrVP2hWA4zcfoWa4k6Bta7ynRjCpTQuTVFCu",
  "key10": "4Rso3pR3u1ckZ8bLNnQGsJpH7HVwcTrfxPZM4ABjtGmAKuCg5GZ7NjgPvzArxmE618iqc2KqB1af4E2fFuB8pcVS",
  "key11": "RuA8ViQGrEksLefh4kc1AF4Laehki8kmAEy1NVWy9zufdDN8r3DnyjUWjgctgr465nZ5Nub8aHUxoz14D7G9ZNH",
  "key12": "2wSHh6SwNTgBNFQEM4JGqymQ2gmju7LEoUqMGxuZU22GGQSSEgUsVbpjkMYz3rJFwGzZWqvJDB7adpxsfQ4SRRwE",
  "key13": "4mGtD7UjW1XtfY8omXj3HbmgDxtJeVGpaapXVjh3yBX5EhPEXyCmJdF1MR79iycbfqHdaws5UGyKfk26YgJq13yr",
  "key14": "26cNucKxZ7Vd6PiGyR9z1Hqn8LCUwAiTkh7KVarE64DkcgurbSizEwYg3a4C9AeEMKe5sniE8s5t65EhWxKCEBHB",
  "key15": "3mVNd1aM4m7MTCe1vjAhRXpWS1yDSh2MqEvR1RdG23ujyQKcaXUL6dtcG1jD8jQwmosvj1KJrQ8T9Rqci6ChWAfp",
  "key16": "2MuTY4zF8UX5cGfC75Z4jRsTFgxfy11hqZ5PGCgfPikoZDCR8TcQHJX2SD5BFrbpQsYK8WdUC95iczjcY1vfijnR",
  "key17": "2E1CDTni7G5kywxQYheTZ678on4axzYUbvAgecjNeUNhsMoYEqJFk9SWiFtEMawtDojoHHht3HmU3jZ9wZT5qV2N",
  "key18": "4MRTy1vk54FgjGLoD1gVFkwAKnNrf4G7RfseisW5zJE8g4rfuJQf5pTe7sSNTirE4AYkmrT6QiqumXY2ZVi5BadP",
  "key19": "4N19oiCfwjysddprPztoXAiqmnmxae3RXQD5wNVhEPPXm6g3R8nGysmNb5YF2hJjZad8Cbws9t9cmKtY9xTmvsim",
  "key20": "4ngqi9NESHfwrr7pAXFbwDEp6ySUgb9EZfqJxAXWJGZf8GCHGtQPuCFWnXgt9abhC5bMfepgQ6zr2gqRY4kVEAWJ",
  "key21": "5x9kkjN4mdiRDP7h6JoAoVGN717RPeSChAJ7CWEc9WvRG3xx2K2kLSzYa3WtQiYFkP5fzDoUuHQFkxKVR7zAjXw1",
  "key22": "67Aog67Scq3MwoeKshmx98bRnuRpYP4nScQotBeGmjGK5AZjo8e2n6RmBay5jiqCWN4reZfxfo82JqCUqnKLKjVy",
  "key23": "3RdmguZsNixCqbdYv77WhzarWkqoFNJ1qZJ9rL9cTufuLm8HxyNZoy67J2RiYffBEmNgFwEdmhSybJMobeZZUdsL",
  "key24": "28urWLQGoTY4XVdMtKvEDiXyjHEDgkLpaZCtrmhHawjjdd11Lx8Fip9o378tSyEM4chpuu6Vq8KPjmDVTxLRXyz3",
  "key25": "57hEpPiAZknmCho2M4xa5QQT9y5jTrQzafCUiuTMkbnGGDERKR9EFUazSLe2WT54hRrFYx5ZQLzebtgaEnfZRd2v",
  "key26": "4491j3YMXyQUnoK84fBK52epxfLUyCfbmZc3wcL3sAMst1M85sqXDboZ6z5aAjTDofxrDviZB3e4LcaSrXFxjNNi"
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
