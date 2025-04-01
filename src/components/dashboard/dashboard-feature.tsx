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
    "265SReDJKSjTHK4cd1JaCsy1Fx2h7D9yBYeXd9hdq2aryFpJowjMWazrniSs2dute3bTK7Z1Z4zBHNKns9wDZfky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p8drs3BL27yMoGsQXpa7E613BTWziFZpzxBBc7Dq8pZnaX9bgAqSzKeG58GfuGXiQLPJ87sF3fZRpaHh6XkiX8A",
  "key1": "3gk9uuYjuFRD57bT9W8HUuURqtoS6rA4BNbx2nC4qt7ADomRHWmVK57QpHmhNF8i8vLVhQXt5WSD4AYUzh4GebQC",
  "key2": "5VpHFnyFFMmVR1sFgTRTQ2DvySAwdB3HGLTQkeGVRQ7Exjm3v9g9XrPAYTFKPCXznJrqi3QzQ4uw9cNt6fsGDe2Q",
  "key3": "2RY5SacamRjESemCeXqiPaVTeDegFeaQKpkybrLbutCmffKzZghqGXGgjVDhhViDXXuX5UVPBG8yvmVn7P1N6vLH",
  "key4": "TVA7ijCYpefhWGqUTocTg5TuJ4ybZQCGrEam43BSXSu6msXj9JDyuqkX8EiPp2RiDbZmbo9cRy51t9YA5L5eKXz",
  "key5": "PQPjAxF2zzdQtvZ9PEFoVw1ZbTboJLMowdh7YPjA72QHGizZh3Dsi2QAjeVfZmVwfKbaNisMygGhGFCTXeKiEWa",
  "key6": "5P6ToY6XRUxuA4FTcv9HT8muLA9UvuB82pSrk4vkXsVguqKBPLqe7myy4pdrQQx7d7YNTqs3wishPfxA6tRXvPkH",
  "key7": "2VTeH96jyP7M47YZfotTTyw6Gjb7Z8aL4QXMnB4nyvAGApDVkjJ6cveAnzRipfUshTnZDsKvHM85RXDUAxdhg6YC",
  "key8": "2gRneHR9Dej9ZY4oBGWaqTZcBDFdyapZXVUp8MjzdFTYAJSNNBDXjazoiuuyqSA6u8YoEWATYKyHtkmtvhuhqptX",
  "key9": "5hALn1QZxG4gFzeBzga2DxxwbxCXVAkioeLnjt5scMpQmZ4dcnMLME8sZPcTt3CGqp3EuqA6hx8phVjG7RRCf9bh",
  "key10": "4HeiK78PL4dH51uKH1fUMozPRXEPCVAKwy2WYjwR58mKhMbjYYDWhxDh2qsFED7G43uhGbcSXPhi1LLp9VaiRfkx",
  "key11": "4YybEeh57V9GwwTVNHbJirEorL6vTzXMDf9PpU3UsFp4Rja7TQXgwtNoY2TvhYyC7t5gvm62ZTS8Wdf3RoyDneFA",
  "key12": "86QGPKmdMr5rhpgoGJnSesYeUhhJdA24ef19SNgdUU61YvJz5XPNEsZgDZQRXe5e57dqHFmtzLvWF4Qvpvq2v1k",
  "key13": "5jf7XCFGNeZcUz6EUbr2qyj7Ta8RoMos4YBzVZbB33jACc5LwNEaDGuF6B91UPi9pAL9wj3NcNyRkHpusXSRUv2G",
  "key14": "45jr6SmAQyEWbxK2ywQzLWTyRwiE5S5t53Rm9d9gBGLgnXZG5a8bNsY79m3X5L1MuNgXHUMxS2gAsE8vei9vbruC",
  "key15": "4nuGxX5qknUJifubjUfefNEf8Smkj2JRtkchD352dmShLY4GRqNWSJUtiaWTLx6wtTwokUZ9MgYN8tsz1HF7qS8j",
  "key16": "37An1oSLuBimRwdxFQJoUfpsLFu1NHF1coXybvKsd4hAe7AC4BT6eEjG4X5AAgAZFr5LZqnkPBaoDaaQ2yATTbYU",
  "key17": "WrP3uLSBSHRUvZEW52MQnwH8dPBLSByh6uvzWtPKZcTAg8AmdUVZKLT9VuiMn6Y8GhdtjnJcWemjeMuC7ReoiEY",
  "key18": "NKFmd7M9aDPupHLjPn78ynx4QFvKQALEo3hSoHQ7okJp6HVjbosHpiES1gxy7To2wiS1FcNC7Xfo2XrPGWxmnwf",
  "key19": "43914HcEsM3Pnh3ZscF5aaCQ5oeK3rsuM2nf7iMpusigXb9XPJY4MzLQz4BYVx7RRupajKkdo2aqVhihkRVdyvq1",
  "key20": "58bcUyxJExFHuz4FUkK61GkFHXwVGKLwL9MxufBE5szJsopoN7VWzzXjXdCtC26kXdLqvozdP6g3osEKDKy7bQqS",
  "key21": "3Cp1h2rf5LFv5A6Ju5jEhkm5Sa8UKVuWk2xFAykMxYR16fJqzAgPVQbiuyi9322TKeoDBNfNLPLjhU5RcguhF8QY",
  "key22": "4vMJXh1Hdb1KtfrNPQRp7rreUKWxwvgnJhkB9VzmJFY7a9gNeRq7RYmAbGrq22UGBDC867v6TS22Zn37eGkeegDy",
  "key23": "3So8zXgZj2ArkbGfp81VKszX5g5hPa6XfbAWzfPNC8i5yfb7BFXGo5optUpyA4waKx48QX7sQ4gmmwT3DVvnQLzA",
  "key24": "3kbAaFyC81P22Rcw2Ji4aB9P6MgvctB5Uzh9Rk9wAcQBD32WJGLuJw5fDUPfGtU6uJttnYEj3fFKmPaa2eDgw9Vh",
  "key25": "587xeuHmy999DtenixFZ11wx8sSkXMN2CxbjQzFhbC8SMtjSrTnRmbsdRdVwkzsKnnxLDvH2vAmycpbgJxmhaCBB"
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
