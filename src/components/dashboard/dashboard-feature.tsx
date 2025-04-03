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
    "Ungto9eG7KWApXtaombVGJCb2aZt1VPCfJJ5LurrcNnrF5BbxrBQLZaJvysy2WzgPeMLTgpsSLiwcqWecV3rTKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yp5d4o1e6Eezx7tNXRkR6fadhZRegiV1r6r9XRuStPNzo2MymL1PUwefwpb4koW8iHvX2mYQ97iizE5X6hUUFxc",
  "key1": "3RKKBNUiKFoDzKxSrecYViX7e9HqXzGRSkmWEd2yaPMJdtELs9govrjBbSFvC2iCyUYUMbby1HF8ms4fU74RKMaM",
  "key2": "4YjPU6WD2ttxuNhy52fJFvEtePR7G8KtF7hsgCemEQmo7ehFpZRK6LgHyTX9HCLZf71on4yoRNyvpA3HDu54dKKQ",
  "key3": "5mDFrqHPjbsSm8qWyPuusPmosSUndrkfTZSzfYfEzouw6bQD3X9c4Je2yn19HTHMYPE1p5zj5jDLAyPGGnnebwK2",
  "key4": "E9X2i22U4EkkjxLAeQMMVTxviugzwxHdGVDgyGYuDP6ERrxcSgFfu6RkzEaZCepjjgL5gtMyHfLfeeQPZy7WE2a",
  "key5": "55jzaFVcuFPig89WoqsrCQBhnbkhQi4zSkMJcJHxFnLc3R6XMGkMmM17CPELgdqViRZrzynSBgxmZB725KdroUjq",
  "key6": "4FPJMA3BAKSV8jrfxETYxPoMBNroHoPLSbKqb2Vpbjp3QX45FK7BwXQvuBEcLyZY6bgfJ7vmoMpZJPjz2H9C5GGZ",
  "key7": "3jJDq5bKr9MViRKK3Q71Dc2qhdyvdxydpnZr2usrK6bEjdiyKejPMHn98HJzQzZHmpQ1MLSgrTsP5oniSaeW1xFW",
  "key8": "bBy3hBGgXW8qtuw93djsvP1dS7oiW95jPhfpngf1hDQiu6s1vSN41jBF6WpS2gfGNYukoFPYY8ExQ8s5pi5yP5R",
  "key9": "5WESp2W6eAu4gY2oJbmgdyMCy6cE7ZpcaPQWN8gezCg1ZZiH1gNpt2vLZ8HN37Gq6Wu8m7ZpvW6yLiDjEDYv5A99",
  "key10": "3XCzFatsq6LQgqw3dFjeiCvk9X32goAWdnpnTz7UGdZxmuDZikveNBePcQ3SB4P11BQcgcp2eQdyNqRPN2EcCWN4",
  "key11": "4i6kBVq14B2YF2pHB3qNsJFsuzsaQkppR5yWzjUs9EbuuVsDfUoAxc8iguE4GbvS9HLjw3rufioNjdAtyVapfUJM",
  "key12": "2dmRcQWcNqPz9yfLJMZexG8LupF4ptn2uBuu5dkfnzahptFAhyL3TTvNdfSRAbh8y78uhYnY8qBtL6uUKHaBDPDU",
  "key13": "3Xa6QA684xBfQdbFWALazeVFHiKASm31zWCCEXxV8y6vnKtqWgE2XQ3CQb9dzjDJ2gjaF8g6CmmHPVvq8XqU2f1N",
  "key14": "4P58cRJeknYurvirCw44ZSNqXd7zHXXy4QyLMqDTNPRGuFhrUZiwcQN1MSfYvHLUPC6TDxkoDiDjf5GtHtM6fk7h",
  "key15": "5LKCDL26JoRbEP4ZB8vXGKbmGwc1zLa17KVhuFyuzXhydx6sJjm8XWrW2DJBNw6CWRXPaa1ccJk85ShPHfTbcdtK",
  "key16": "Y9iFPaszVB8EmrCwmCHqNRJ4NoZ4NrDp2tQbqbyUrN8LMueAaFNppXHbx27b4r3XwgaffemYR919bpNuWrbBXZy",
  "key17": "a15Ps2pkAtRZbKZrxJTHBHnJ9qXvuSvKJRaPK5bVwxvK8vHSWRZgGqN3ndNKcV78Gq4jZAKGR6jhf2N87PQPa97",
  "key18": "2zrqtrhgMZXafEu9mWaJxiMPXQ1KL9RiRWMoGJ9Ap5TxLQM2x5fMVNTFjeHp77awWrp7er3z3RH9W6zC2vzadFea",
  "key19": "3DhRdYEEU3umwE4vPQMCe4jKWTQRt9LfCxMSzKZcEnrfvi7px9isqxt24mZbqo5d7nAyibr19s7Zfjwa6cLdvUcP",
  "key20": "2jg2RtUbCH37ZKGGmT25X5Q9mMnWVpjsobW7Tq2nTioLtWhUauRhfR1hZyy25JJzsgoMhqhFoMuY1rSUZa45Ktde",
  "key21": "5JB23uSt3c1C6apMArFyExMm5nDxtsLLwJsNnPmz9SnzzksZeueFjbJD5tzV3CjLAL4ymhnLWgZv8vVedRXU9AEW",
  "key22": "DAYDFXHEv3ZE5h4WUobPF2APVEmnqhA9rBtcRPHnYNnQWKQvA2XxTprPhTQEzE5kEnYQeLbZswpksWAVwvFfzp3",
  "key23": "66ssLqqjDG1AyNaUzPG6BVPH7PmhSE4fNodzSt5JYa5Jwfg1VL7uwTpeXxPY66AGGbSJfYP4AmrTaGcmQLPTdjMB",
  "key24": "64By8otHoanjdEXrcKjivm2E3i7sMaDvGSrXCXfeYxD8Lk3UXB8oQqN6FoYsRhHTcLHBEQRiQ4JBkky3gy65XKNR",
  "key25": "2nBXJfb3WZwPjv4KSnhpn9DqBNn6CBvhYjtG1jJfyDaRszNjFo8aBEvUrjQh3weD4LsibUZWm3ybf9qWu1r1aYvG",
  "key26": "5ZytyXh4gwJFzM5S22kigtq83JQktK3pjs7zMVzf7N5PK1JoBpuYN49NcV9XDwSBYUMMn3suEwXNzSHxgDzaGAJw",
  "key27": "25Z3vNt7rhhYu5qDZi7caeMrtNJ2ZVzWgGY3fwBrKtCKJmVTN4fwawWBu4319LSKcDm9tMtpfh2XDvKSCDZUJ6mK",
  "key28": "2KQSEWkquRc1QHsRkN7LJcTCtAEWndgRKFQXS8QiJe4BFLPXK3VtWZ15ET2kcoEx5Lk6hhnaQLpYyX3Jnu5Aqot1",
  "key29": "2tNpFmEwd928bRcATKVUqDTNCrtxLX82p8JqyAmhnPhL71gdaF81Ro7TJS63Q7DSeBXwDFsUYbcY1mQwCCbrbvMZ",
  "key30": "4UnakaRgmGXD25qGPMa4LZGPVBgwoTf3CPS6HsPBtHco5YENWusYzgw3QAhaos5wC8vbhLLuKFso21DLr8KRKE9Z",
  "key31": "3bSduZjYVKuHJsFCYNQ8xbXPGH1zWAyhhcfMw5akJ94idBGRxiwUf3zNvXwndG69d878DpzLoBbV1ws8ZFLzkjoE",
  "key32": "33s6P8VMVx3wWhNBH2zXGD2iDxgFmWaQtCxZDtiYRDieypgtKxrqD8b9HhADWuh9hYJastwNUKhdM4QoiUn8vMoU",
  "key33": "2FpshcKYAruMgUFwn9Tja8e2ig4krKNf9bwT3gSqcvDqEkauc9vKgT1s4A3tq2CMkzEyeuxqQN3Ny8DRAZaCBJyy",
  "key34": "qDDmPonXSuQTNLFGpgiuY7q1vwZTWmYHwz5dZ5uiEsNeAJhTT53GFrJEkiYtL9sRYT9414BjtTdJAJxi9KAKQX2",
  "key35": "41dYEsVQjCvitjr7Dh2LFcKVryPMNZsfk3boDUu2ioyCghxCUuBV3nsqSQHex4CcSKfGT9Nu16iPEuhsk6dsWa7C",
  "key36": "5MkJwxELdj3c3X9bjVRSpg9S3hp4JCtdkEdjTySamkGSW3F9DC4yJxz4ckxqqqjqa3Ngho638eRwAfJXwCg8pkPx",
  "key37": "43vQt12oKwVy7AsKJJBXzddta4RfRANrkL3zFU9mQwjvSmdDmCZQEmv8dSy4ycK1XWTxrb3abpn1wfxGe5mW2JPz",
  "key38": "5Crc3kuHXGsrhpfwxhchUu395hWRzdkUA2mfFVsLeXUScZRM6uLk5PPzi756CU9dNNmGA5K7pjJogS9HiYv8xfbH",
  "key39": "5JZPFtqDL7JPCJD5aSA6N7UVH3Ax3FNH2tcKdHKxAo4h71cne1fedD6P8g2yQwbXkJKYCquLSZZpADEUhsMtfzH",
  "key40": "2HC3UDCaV4H3WDDUsjTmKNKZB9AoNEtJzQZTE9dgYYZf4KufwKFXTQhMugFD64GwNtCsReP83H8bFSVb6bCzV9zZ",
  "key41": "CMpdMoYfiSC4JEZQNXvKLjSYbyWRtZA7pLvxcLUV19imMAGcn13Jf6i6RfsZYFAFbFh5SZcHW7EA4yXcswYAPyg",
  "key42": "D1b9s5Ycr46NYNVvL54dMV5nE664YmyEKqS17pwNjoWvFUha8N5LcykR8WFNgfupzssoQho7cdTSd2pXdwmFsAg",
  "key43": "24LjsAhkR9BNC1orBMmoFH6YALv9EfiffKbC8bjuKMxwmeCFFFYrLMRsFKf8eiioaPXkiUBuJneFd96PcEc2JKTY"
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
