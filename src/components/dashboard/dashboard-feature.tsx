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
    "44eC33CRVdUAQjwEDFfvpLtCysQ7y7Z1UBjvWU7jakPhKfUMWwmmn2s84XPmBgQZJJAWfa34tUzEvu4SGsQjGMAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LPEqBbvnB56u14Es1FJkD1k9FGraFXnXmegWdYVpFr1SwNT4NKpf2gUsSRMbocDiPtGyGPg5rdscmc3UYR1AKp9",
  "key1": "5XPUsnfqSYhR9xA5nSgpPQjcjJxUAzGQCw3mAPgLMa3zhfMv1utNDmUUcvw8cHE5JwSuZPibyw27WbtcjEGd6Q7P",
  "key2": "VCWvKE9vHzz2xCTsBGriWEiF1oSzarGzqJ2nBgHf5NQ9THt2oQTjVr1x5A6YkakJcQZU3va4zrcn7vTsBXbcXZz",
  "key3": "xFNoZKbTVNMyV5YirmHc1GrL7zzZP9JGkFXCptTDVBSBL53vLGVdiXevYHbEmyUgVrYGXt1XPiU77sL3Coe1YEW",
  "key4": "6BDpufHBnSPSCV8thNq754dsTq6BGbTcbazqSXUwbv5CFhLRWVf1BtxrsYr1riyB8JwJxjYuXsN1BEwMmkqRm7Z",
  "key5": "gFTFMMFM5xgTABip6veGw711asVRTdT3DoyPPJPgSHqhEGXHcjRg9siBZzfBjb6UoWBE8SLpvfhQyv1W3DhiH6x",
  "key6": "4Fdc1PqvTuFPr3kepbndSdFwUgYsPnAGR58sdS9YWRa3UBKbv5H4nFTLnv2XmCE64uHTzzrzDsJZiGxWVQD8eVHU",
  "key7": "4L9SapNEKBihdaEptC1y5pNC4V6dzvFJoDzxx2egbKtGsbtgurVKtJjGekeqwvYcU923FMR33m7MLgXjSie6iiSh",
  "key8": "5mtvAteXyrNubwypAdA5h2NtNcgL5dCdDR1KDo8h6xdd4CyefrdHA3zENwgWALSQKCN4PWkk1GsVMCzmNkBbrr5Q",
  "key9": "2f1uCrrx8dxdWCPYzzCHGbM9PrXwNZCqGTJKhq24ESgkfFdKG9vfjLd8KjULspUuGm5xGLqKU2mQZAaAniYxgZ8Z",
  "key10": "3LWWEygmer4o7ekKjfvrCjhjhjiUGzfGSCXw2bH9R7ip6HVuCZL8Z29m3oP4dHTUdzpKnbWTWJs75dYGcFp55SZL",
  "key11": "3Egec5vfu1PDy82PSc4hAyNh7u3rkoXYKNusxNjHoCKxV5PBJ7kTz9HwawMvJ7CvLdfTE8GvAbRPgRyjzg2Td2bT",
  "key12": "5oNmvAbUrnLAvaY9Vj2of1uHAcHTV25VbfH6XQBW3GrhbCzUxYspAGUXA2JvJHQ2uyc5QaowS8UmUj9xkbrUvXDr",
  "key13": "XNX3ewyGqftqzgt1QMk1HhJ8cjG9sKb2ZbXxyThW25YrZ4h9gp9C3viFKE917bfkJq4d4WYhCTGVbDJGpgtpKfL",
  "key14": "7ZHEnyLupsj8NT7zrhApSezGnVHr86Pjzx2vPiZ9cxFA9h7qjSFsBWPbyiUAEHX97p15fBXQqexMgeYQuBV8KLt",
  "key15": "4HT2mywye2Y3jarE2VmDmZRWLg9q1Nes22bQSH9yE3MsDuEBaLLM68JdsGfARcCuSXBNaMBafjGp6UmRt7zqXDQt",
  "key16": "5AL2mVzYESfLymXiMx8XawtATXgQr2Vstsi54BrtudvDzkumh6C625wUpQ4TgjdU9Smk1gvV5fPaeYfrQo7UAyQS",
  "key17": "RhDDXrQz3VRSUJr7u532BmT7fsfEuzTRL9FfxYU6EdMthSUzHkgmXU177Nd3JCuKoqeJY3ChdXtpPtrPM3HdAaU",
  "key18": "5qYafWQnQVb5hnBicKZGJw9sT9pdiFUKnc4WAZDnqWPcwsnoRX6RN9ckBumkCCxTPdHkDfsdWvLtCx6FZT15xdzk",
  "key19": "3bandDazPwL8y815S4crxaz6B9sEKpARv2cPFH4mQA5KRSK4KLodUEyKisFYUY2FuD3gZPVNwACBYCqAtRrayC6f",
  "key20": "5J9Q7dBxRQzyMKBgv3XZKqTw4jry6ZZynMQptXocvrBsKessw5GttAR6ghZs5G8tWmDNwbzTQ7muRKXjrCgtF8QG",
  "key21": "5E1KXvJfD2Jr4kqEE5NLZN8ENzGh8Dtw1VJ4gUHUf3Bfxhy2fdgUgbUEhxdB4M3T66Kjq8PnEifCc8FZaTzdCaeP",
  "key22": "5d4tvAdcrYEZKQoA8xi2oB2tw6uwwYGB8iuWftkp8NPCQ7UUQ4Cq2S8SPgF8VUeBG6S61VdJNAMx4EuGJ9Qr2HC9",
  "key23": "3sbbEoP3z7NzVZ2vxedyAxUrHR9KJoMqL396ADGLy3166LVPECEem6a8vzpTMVKADRJwwWYxgF8VY5rNka4oQHD6",
  "key24": "64AJTEXnWg7qypSxuaZLqQ9XH2HiwBrfqSGuP6a1tafzxFDi6ZBKEfc4CZwHWMUprY9YGnrsybT36Ry77UEsJEkt",
  "key25": "vEPo1wWqvzDff8ACxnoTr9SY2bjgRwzjvF5KXeF3ragpkGUbeNBZ4sZ9L88h9WwFcPCQ2m7t9wG4MHn5ghK3HBm"
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
