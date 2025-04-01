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
    "2xUUoybPStT1SmgRzxCGbyQ8LRtoYPfBPkdBw46ihNubf528u7wtMBZzYqXwff9TmzG9nosjqrgCTVpr9LDhywe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pU5baQCy19uWoUwzQWKq8hcq9rkXugSuom9LdKr4rS6BtaeCS14Si9AsxVEMvL3V52DbY4oGvKWaDes5mzAHU1x",
  "key1": "5XQaixxLcExDsVBzDaGSH2Xrduc8hxh59CECnsgL4g1w24VSrfrLUgbhUE7CrpucnHbAwygRisJ7G3ffVKpwdw57",
  "key2": "6zfek4ea8q1BZ9cTTPK6aq8etJh389DmHZWPhwwwfMn1Ajz8jAZemb1CrVMMquGfjWTDCxgoVBvmv5k9tvsiaKy",
  "key3": "2Qt5CaETi6jToAZBNrdYxiH6BFXED6ap9NBh9gnqoDz7bYLdVLthjEuV6T2VNDtFWBR2JdqvWGmBzfbqreYoXFL4",
  "key4": "ZXvs6VJitheAMtHwHbUnCTsh7T5BRfqnGoBH46o4QpZ7eDjZf74fd1VKzjTsSZzVnUSeqgiXDXCeRu8AFtf91fZ",
  "key5": "aG19xzXxBXvUDiBHyAXxWqZPYQHuusdMTZVL2Lt6EGrJDALLzpbte6eNAXreys8oFnXJQCAZd53VPZMXqKfq247",
  "key6": "znj537sAVrvtQqpc32MWSt8Wt6EZQS4Fak2Vdxw8sJvWSMxp8QAgsFtwKcEfWPSWMcCRxnHAWH8hd9bkdhEuQXR",
  "key7": "pe1PsN4Y2uNNXy8iW3gSLGyuKmpcg3HEVfvAUYQSxsZveCfhPgpKyyQtasfrPyWS66P8N5guDSJs7J8mzMa88vV",
  "key8": "5n5WEBMngX6GYSafY77YfLu2pqvPfR7AyTd71mb8jrpBR8ed6TUtrrSeB9xgnqYALAE1ydQagwuMUizJcFAS4B9j",
  "key9": "5FdNnU9isezNiTPu1o3PZJaSgaUX9ZUjrjEfjSBNCBtv5WMgn48uUxdS1EApMrwyo8AfENMZSLkFM53ADKvgy2B1",
  "key10": "4gGCeqQsAao4sMxje7Qs33ihmoLFpHZAjAUaTUAsR3BkbSHU8Lh5hBu2inpXSDbkctDx9A7RhC2rE8YYVWRTcQqw",
  "key11": "2k14tdzhy9SkB2MTP36g9n9ZXoo3UQzg5fte51Ax49kESmG2ohCMvFer2WGUDu4nUmKBhqD1zhTdRBjHCEoEnCKd",
  "key12": "3pZ9d2gFLkqsxxXe3rXvy7QV8bqdosYQZhM5WytGW55YYXeghqch2BVJC5QNKTZCz8KwPJPjwYU9uDvXbevxvFvR",
  "key13": "28Vyf1f4XF34a8WT57DXDxy75MyR7yMtpMH9k3yNr1g1QtoPXEYxVm8svoxskvhUTDYoQwPnAfGcBPXDWq3LWHGk",
  "key14": "3MVqYb9pJvCSG3uBZY7HNPXEpGhapxEB5mTA9eJZvFvzeuwTf8tPw36zYhpjrBzhhLyvVhMkgKddT48YN7gZsBjq",
  "key15": "4TcNPkwLH6HCszpPKJDdq3XjmG2Zm6MkXFBsyLa92GYg8V4p4vNHT2po9q9GUzSVi4VrDQyAJgijyP9XT4TtjJaU",
  "key16": "5MsGowSo5n5z5oVB9eLh1i3Jpv4EBzfzeV1QDLzBSbPWjC1P76JfT9pVDaBn6UbrpmnNAJrzyH2WsRuL6gKmXB4V",
  "key17": "uJRbJ5zFz6s3YNjMEdVLifG1xyBKfJhGsaTihiKHZcJmpD8zYKcjesm25PenDxVHd1vVixKwhEcMA2HMDi2xXod",
  "key18": "2jtCwR6SvB9NZNHUD3BXkyw6qSR9URTzvc92Ho9FPjC5DNU2W3bPEwCfnLgC9LycWYmBGstPMtmv55YEz3EoSbRE",
  "key19": "5M9aqbi218PM7JudiRhccUsxAUnUGArMRGdZ5AJRbPSXzQkGeZY2jtGmXAaHZDhcUw5Lt6pkWL1S85iVC8cDVCv7",
  "key20": "3Kru52hu3kPMXsY1JNDxkcj5aLFahpwJacPuUQF9GSxfTC5wWUX4uLVATMzyEdCNTZmMT8EYTn2z3HfedMDv7VZB",
  "key21": "4D3fk5KpvdDz6pT9Mcqb2bnd9yf864i9E6WSRWofcntg5quoUphzvSxdNE8Z8gwzfM3xy6adMuagp9bCrwo6qxis",
  "key22": "35XE2T3N2EHaovcphiAvaemwZ8idUGdfoT7Xhab8Xx94DkzRww871XJdZokQoLkw715oSzyJtq7PLu8Hsjj9pTFF",
  "key23": "3tUupqPHwJhVgPL87dYxLNq7t6kJcZC1DJ6KnBeifSnRnvX95bFekP3UuAjes9dmhS8w9wSGcJaDq2opgThcaFMi",
  "key24": "36q1kFEkaDjShefgcrKMgXLKik86NPnPJXhrbo7jC7fSHGX5z7kr1jNbnbfg8VXYG2oydvcg8Zewq6XgSyGT3qGU",
  "key25": "5Ph14doDBSgMqQZkZAzaAeywe2WcEs7jTd3jB59tFTRn5xPshQouiLw5Z8BUuKUk67X38g18kVHdXSwCNBgJjK5N",
  "key26": "5hYWdYxie2KobFkCyurWygA3S5jyugwpBz4f2PnkdaPFn4n8TapjRDTkJz3UK97oAiLJVGCMKDVHqNYmaqqxZ3qS",
  "key27": "3s6w2GeeYkpidTfbefMqhn3YXZV9VPRNP7rCzyHZWKbkywiZgpBeaBvLwHVDzW1mjeCyrUSuWP6jJMXBgGjpqKhu",
  "key28": "3heTXmtKz5DnJQ6dSEdE9AQizR53spYQ332ZzFCr4YNzhQ3AwSJTgzVEVpBP1ahd1EWrpsVdSXxDed8e41En85s9",
  "key29": "3ZMSTWztTiCbJSbTSZgqCQWoyHstMsSS3mR2MqjjccCLcXuv8ZQSszxKxo8kDvkSzrhJzQM4Amc8YgMnzBw8Ryaq",
  "key30": "udy8WDbfF6zDQHcYxU2MN3E1nFVgaVpCjncmTq65sJNYeguWnnJeo4wMgpJmzY1T7N6nr5KFbcbv13a7T3Fjrcj",
  "key31": "5T1r3nzQ57JQ9F91Z3ktSQWiWcArHoKC9YtX3ZsMcsg1bwJCYzQquFXv96T8pbdcknvxrf68T4LJhZvmjxBixDpc",
  "key32": "34AVFf6VrbRhVpiwvK2ey4ddDfy9CqSCzqUj1nZeumuJRFdDMNEpBZXb9LZHVffC3mqp1vRueK7PezH6fRs5HvVx",
  "key33": "58Vuz17E6jZGJFS23LRjzcuBV6zseHeeRDKQhCeYXqG1Wq4BBDKeaz1eawm352MZitapvUx6C7d7NicXMqhAje3W",
  "key34": "5oQ6M9zwbPEyjckWAqeewLMS3hLNHW2nbsiwJEpPprUCUjqPbBKC5NesAPQQKafYLVarjVXhNjXEfmR3xoJRQdWq",
  "key35": "rFi8hFvAYVFg1sRxTxX9nStg4TrM98KnVR5c2QYRr1nk6NHSA4bxS5PqaK4xsnipZMyzAobFhVRpWoMUYqVxGPU",
  "key36": "36esZSBpAnZxSxr3Tut2imfcWYHmxsVfBtMMYYDevC3pGcx7LhbxarUR4STgA4jezMxZyanfy6w1ibqL7X9nbFBp",
  "key37": "2zrSbrz4ZnamKLM7huXVrSW1gh28Be6mwPiBpqbzERJe3QbTUmWgf1XDoTSBYU7M5UkRhmM35mirgrwCsNoCHpZ7",
  "key38": "4AWpFbkcB8mzpJaWKdw9VmW5hyvKjZ1hbEkVbCWD7izSUK7BUmNTMhgfktvAxWFoe5hsqjaCEoDPrFAjGUaYqx11"
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
