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
    "5vn5v5n6S54AkHkb8Us7N8DQpaZsPdXctTofeuYnp3AQnbZWpt6iBiYpMuijXkaZisrDY1vJzaKq87k5pvqsj3hw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JMzzJq2aCLsyYWegkwHGzXb7b8fTgwPuoj8m5uw2mTK3SQUs3W4yWtWUtm2iY47G6KsVPRGYoECTAtRq9VCKhWh",
  "key1": "4eWtqrCTohnw4DEWyTGR48btxX7vQvLx1UoVrv5fgGWWQD3iAYKjjJSgd6wWuUqipq8JQf1LddfmPLTsNugp9ziL",
  "key2": "3KP1V3pyAeAS2U3rByJf6mqhSCeQb2QGEUoCdXFF9tx2av87NsJt8AgsUkRU97wAf4RWojtBg1TBjxXfvgcWKpH7",
  "key3": "2mN21754shBKBNp7SBx36yTLkU5ZWFrV2DLB4YbaTc4U2meJDsEQEzFr1cS31v6Ub4Sw3EW6BFBaXJeUobrPSMag",
  "key4": "8Wuj7edfjkxoCd5HYJLTzFV3sKTViFdPjpju3KZZbF5e53BHbiRcoTTUF3XFvX2hxufcy5Cc6sZkeLLybxWi6kD",
  "key5": "4SS41ofW3xjtBypzJYSzXi24eByjgHqfSgZkMfUHaHTACJaFqPxTZczbcz4ZaHKCFyWHV7EUJX9wsCmb5oAZonts",
  "key6": "5eoadrvtTviNXf96QU7EPFBeqh2Rdj8WtJeEEoPox5kK6dNNoBqwE9FXAJDUn1v9Uk5eZQXmZS87x5qQoSdzGZTo",
  "key7": "LWHo9kXBKvdsmY6RFywXzLeYUrmpkeRdWUoz5B3oafwsg1BF6C7YGi11f1EeSaQ1KhYg4No57vARsBeEAQuMiBP",
  "key8": "2Ud4vRRZGo39T31huSMDUXuq7Wco2fRa3Z4VfNXym5ZYmNyuUQemX8tx2RdeMHc8dmhnuz1KVoAkLEwJLRj1m5Qp",
  "key9": "rHF1k1RfJVr6rDJtwbLN6Vcjg8QbbfzqVDRSSZcCpvUjZXyqJZqtaAcrZXfBKnVd96xqnRCwVkNJBch7FmEUVVs",
  "key10": "4RxRB8yh37AaSpBLUQ7EeNLoH47krM5HnstX1ruqPCSTBPY27FNpf1SYjMmYrnikj4XvqnsRQxrNUD2BYpSPaBmu",
  "key11": "2G91L5NZpid3d5htrywMgVpijv3CXtgZCUcT3mg7qmX5yuXi8VsiQXEidyJSjwCCoQZo4LgW3w3zLQNkkGhQFYJ9",
  "key12": "4XQPxoQg5ZtrrdGMdzv26NXgCsBx7ytkdC314nAfenuKUjLS9xqcjmzQjQdkSzFCiuBvukC1JJSWgBviSXQPmnhc",
  "key13": "2jwx2Q38FrepJaoK1kFEdMvqyupVpdcvuRpJJZyuE8MQBCvD48HuC6AxCBLdrahjnE1xXrSzxdh2iVSiBRUT8ayU",
  "key14": "5n41jhp43DCLbU5KuhZxd7tj6eePBRhKygChbWCV48HkgyfBZHGXJKRTTxSkWfaAFtFPUUFLNf3WUTHiVomFnuqB",
  "key15": "bc5PpTELikMt6a5KGxSZS5CX5AkPz2NuCt9tb5uwr2ykT6XR4B4cAT8hKJvBx5vEdtpmS1CW2kmT81Ry6YEg7tv",
  "key16": "5RAmgdixZ8zhZ1ZCcm28htwFz3vjhtcz4S52szCmwPYnuLE32N7h42KJWhGWxkADXUtWRserXaQJnhPDabzDmhMS",
  "key17": "3VSYGqXyA5dxAnKVP4o73qqFBLiFewERDRRerPr6xPFXsasYf8nLr1J1KzD2s78W96oxx3pDLuCLjZq4TP6Jy73m",
  "key18": "4MvdoumsQzzgA22Fhjs15SKBURoEUgSeotQFspdyqGo3y7pCAJ3xjSdbzfkcyvV9f1xRuxn9YqJCM24bAk12ieU7",
  "key19": "5vRL6QbNoobaReACaJKM8hKRuaV3V66VZajBxXhEDCFiToS6tw6gnakUUSwFJ9nTULF1iHtMRcD2gvtwjtEwFTLo",
  "key20": "3AhxKc3fPaffAvrUjQPH74v1j9iyi7RwdQX6Sums7UJvLJrvGBwmL9nUxPNcpXNzSKwMt6RVf5vqjFs8625d1cfE",
  "key21": "59FwvJwdwfW417TuNKptH7EwLjMaP4sz7FXzfZ6FUyMchkqEY4FrpyHKHdLx3NWAQTBUyv2tXppMgLN9YNXYyN51",
  "key22": "5sDfB45EeNfWXNJrcCSGii5fiz2PW3KndrP5EkZo3DNm9mPsyqcznFnYcxGb61uN8umbU7QErs7nDgouoXyANqFZ",
  "key23": "3cU2t55gerhCJgzp7nHUBZvgzsKm1tUfMMzRPFc36MvSVNE55wciv3nX64wcTqh7VB8uTi7R6FeizQtovQ4vWBgC",
  "key24": "36j6NebfgjxGUq7PkhwBYgbF8G3ByadTbY8vww9hBnyD3R27WyAZU54HForDAXR9NJTj6BDEEn5tHTdzbKkGHzM9",
  "key25": "5mVEjfboi79uXESb1g8qKFKGYrSeYwggbip3WxJyBSNAKZnfdqxa2YWrKie1HTtLiChdkML6rm1duWyCs1BymfcQ",
  "key26": "TrBjjmWTUk9ePpbTykEWT2DxZmjmwYa4MvNbHLAzTXXLFk7dLBr1yf7tJ8WdXSGRe7KYzhyXiYh4AcCXgrMk7Db",
  "key27": "2wJ9o8dnSkVKGmaLyTwYy4JH81FwbShxjoYNN5ECRHJJ3fW1tDtUvQWKCSLnDVyCr36UjaLRoy2ivbseP57zJ8yj",
  "key28": "5Q64sLU9W4ysEqBJVdLS2i92siPH5QzCEY28XaC5hGGxroZ3CeF7fdoayts5teqGktGQj6SnbTCbhqrpgkRKxKx9"
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
