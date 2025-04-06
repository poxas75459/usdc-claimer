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
    "2dyN4V8qmChwtkA4eA62nnaZH6CR3e2ZEPDbCwRMTiu2goGpKFmyX7SXg73n8isqsQxZb8BMyMFMDH7fd6m8RTMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XN4Gw1fqfVLCk3uRNLWphF8QTPaQzjMQhgNcD8QqknLm3TxHD34CPchhNPBV9FEPG8Q5KD9vbcS6g9LLaXemw6T",
  "key1": "4YysAeswSRRZk83cyuj1Rsgg65RshBwTeuust1W8m9FWdCX4L676Xm4XqXSQtCMF8WVp7xZj14kGNPXjsiu2B9fw",
  "key2": "2CZdbUjootMw695KDFX8hi6cDJGCVcbktjgXJExsez1qN7HKxmT7n1QCnB2YXiacdFRiyVYcfJn1TaqX1vTk6Hn4",
  "key3": "2uv1nk9skykoHr7AtLwYXxFhytopSDgs1bEi94WaZ3xxm6VvWYAYJFYtRQrDCgrKdEzcC3sxV2g9XSYhZxS7iiRj",
  "key4": "3rHbVhFGDKpyiq4bur85H8hhbzcAF7J5xANywLaJzSHRUWvKK9x9q5nQioU8QU5D6obe1syHqat47m3FxH4iJpER",
  "key5": "4Q9krvJ2Ha15j1roSyaZhd3GiQmXpYYAd17nftBJ416HFMJzd9V7FoptnG2W7wkAmmUUx5Vbae6gm5Ra1rRu2Ttq",
  "key6": "2rd3TCZQmfL9XkmVY62GUAXPj1umfTHG96vEZBc7bwWvz33TguVJw7xCmkuWvR7FyA6LuREzjvsWHGrcZ3FeBqfD",
  "key7": "8kpooxiXM5Q78Y7Jxj6yJaa4uNV4nwLgUXbmnh2Y1JZedMdaEv9Y3whNTSLReuPhRi4pdDMhdGxgRM5HBvgULkM",
  "key8": "4pdVyteoo3p3kTBTfnjLquQYDKeQa3QbykTjYNeqBsYpYHqXA67tCqwNVM1dj6DbSPtCTmgkam22kngd6FwSZywq",
  "key9": "3DyXrpzC7bqx3ogABGdVYbkBo1tGJrMjmsAjhAGVg7NBNWGfRgyi6dtjutsg2wPCd8M28opcM5kR71wgjWX4PUN3",
  "key10": "4ujMTZssHGPeYiZuA7YRcwkAGyaDUpnwmZ1tZJUoqG3RDorS9iRmwZNAnC54bkc2v5c2871WrWnLvkW5PFdF1NrK",
  "key11": "g5KU1njgJVKB75kRhNLAGqcb9eumSRdYWNyZ38szD4g8yd7vNiDnJitp7qkwH6BrZyuBFLiSDxU7mtWB3bbWvqw",
  "key12": "gGJ3XynFNJdfazDCRy4UKZAHz2RFEg6xPimtW9VPReUwJx2G3exRpXym5DWcV6U8yK2Dpe6dsZ4iST2H6GQ5eSd",
  "key13": "2EeCDGS7jkicQu3bkZJa5zfJQ7xY9vWDnKyaV1xgJpRiDhmpJQdtwiR6vJHH13WL3micPWDpm1t6XzfZqjr7AMWD",
  "key14": "42TShubFtaAcDRx5BsYzXWuY52z2m5kqGyo6kz16DEh4sTLd5XR67ruhAGk1NVV8gzR3Ro252BoPb8XpvN69Xm7j",
  "key15": "dgVArNoUrgjq5VpxpGir5TSRtokCDrYcB1on2RHmVF552wL8UoWTmteRLqcGhtFuYfNo4zKMiNkD13bgpSUfHvu",
  "key16": "3GvvXniGCrEgSj9HrzYNEgDbnbXcDrpExEpyd3nBC9M2CPzMBioNK89YYan94poQiXhALisfixndwZEPfV5FEEcr",
  "key17": "5gSqZBRCaxxnQHWNHyuFgAYxvCWGhn4d4P32fbJuXDLnKCYdfQEHEYREdBXmvGNA2SZ5fZTZPfwGxbd4rm9s4zFP",
  "key18": "5xjKqSDyRJ3beu31DFtRJMip1UMEs45rWF98x8oDqwoXCYd13AM43AwfDk6UTDcoLr6LJbx9A3yA7MMiYkdZvWs6",
  "key19": "2ErhtMCcKSi1Yz6jc8uvgkMsDSqmY19f4Dyswij4cpn6AkxKF9gtQ2VsxPJXu5DY6FqzBS5ErPGLsDjcjemKpSuP",
  "key20": "3VCaw2WMQtn64getuCngTbax5MMdAPkZqtfoGzKQ3jsiRTSM6Nr84szPMaUAFz3Ci5pYXm4FmyvT5MaaxotsC2r3",
  "key21": "RZjukkd9PPPbnDKbYFJb1zUvoSkmGXbHKKuHgzW6hS2rfDDqr83hyuZSiYjQRfjqD9ZVRHD6qsyZ9BErJCyQk84",
  "key22": "4HnNHQQNPBH7XJGG2VbVjTCZXr6TGGqDbcBnfhCAyo1e6f9ygqRUKnVZTGDpjf9Z4dLd8YarxAqTrAScEJRGy3MJ",
  "key23": "5561bHjKvu1aZ5nVszP6LBJcRL3DsAnLi6D2X6GnuWAd2WeCfMzFcVB2G68fsKdWAoqBcTDEToUs3jc96LKYBfL6",
  "key24": "NPsucozt8vGQ7AdDwCTvRZU4xVyPXo9h61XfB6HEyE4CHmAxuwpHdftuohyLKcocxKBtBS7srvVVdYXLkjW2Tmj",
  "key25": "469Sv6ZaXjoAUSd6k1pLQntwmEmnbvUbunUG8DGBcUsVdMszmt72nteYMGzxz64N7CNKRqSx3pPL66uhhFFMUez8",
  "key26": "52bu3CiAQmMcUPy1bTSA31kaT7435cEpd3YrtM5b9SekvdzuRtrKUDdcvfmub9Bc76vg6qKBD62gjW9tQvEaKbyS",
  "key27": "pT593XYorc2ifPSgonDpfcS4CXXP4G57agd7Cu18WPWQBu71h7eRZj9qBio3pBUG71hH7b9JfjPHARE3rnVxRLL",
  "key28": "4PBeutktkoG1xJc6B7uYwDcqV5igiYgcqNQcvQtSjryXKrCmcDtN9aPWTKcq6a8W4d4JH1Yg8hSsqWxsAJ7MnZjG",
  "key29": "5Cdb6SKkbV81DLdV5eBZsPpLWeQD4EwKrFNmFCaJ6XyEbiQcYyvfBTSjhXCjCb1AM9ji733WAbZMf7ncEsdrijEX",
  "key30": "5GabNJiWNLzFk2J1tn88inEdvZRNKpjXsHmUDiWbjWhEH4E5XjsRc7oJ1sYWTrEPqh8BfGTrBK4DAefqTxhjorxn",
  "key31": "3SpisA3aAR8K8hwPG6ARDvxNBXf1oL3CdA7teij3QdrAjAuRNPPEz3DZVsSoPsKZzxMpg49KQPsbFo5wVqoefr3d",
  "key32": "3WtJP996Jkhs8HZkSA5EULFs4Yrzk9BHnAr6VC6RsejfRKK8uw4XU1ihytuX7rGJG3sn1A4TBbUKtLxTN8VBtFhc",
  "key33": "5Dx23HATcagvoeGhvttfAvfmCXbWXVusemC9siFUsDQqboErQvpVQC4rDZookTTsWwe2q1XnzSo8Frzr7xQ5eLkn",
  "key34": "5t8iy9XkVb4nuCfoRcT78zNKUpxfNYUEG61rQP23XqcPQ8f68C9bbqiZevjvwp2Y7jtZyGanNAMzCNArWRYuNadm",
  "key35": "fppVnLeE7pSU7NiuogkJ9cNBFdurvvdTmLc1WZDpCCTJAAtt5TLkFAk5dHu7YXim6NMfKaeqCg1kTmFUyvVtErG",
  "key36": "xKX64L7VwRF3jyy54WZeXAjMve5LZbNhcy9rdyiGgpUV9rKvHwgNaZVNa5s2m9HUA89AbtrJHMoh5F2VHk1ZQ75"
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
