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
    "21mbcqXw1zdPtEEEqFct8AVE7X1BLTdpBqXisNazuJoMMbSJPkNLqyUQUAbSCqrx8BbHYm3kwsXYE7QdENJiY2Vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kRQjUpG74ofTbn4LshDCTCyWud4igHCYqSaANGbAqeDNc4uRfoE1L36aYHUwUv3pAkZNzpYRPJStP1C1GaPtooE",
  "key1": "3vaiUHVfm6g24HYxUwknHunQJTJwCaUTHiMRemZiX87jyr2xT3ULsMoMo2KUeR2xo2n8WV3bEG6uY21p83NM9oCU",
  "key2": "5eKL5kC4ULopMPaQ4zYjVBdkRySTVe8AkaJCCvwfW4WFGag5Zk5GYGATZ3tPfYrEwaHfu5oZPG1x2KSB3wQBA3xu",
  "key3": "9owkDKJavcBLxVu3CjuDoZi2y91YXx2LT9AT4x67eX4oG3pqpMp6n74QzrVUsKiyxCBmn3MY2CUrePLuxPMxuov",
  "key4": "5HP8194EbZRE45vmotWD4b8qdwQkkm9FF2nGyhpcoxn7CqPiJ5UmgNwKvd6ooJPJHECg5LqqLNFHEWMXnj9ZSa3E",
  "key5": "JPavytL6LK1JAGoZg5ix2VA2oRVfg8zLFsQVvWmaVg7TPa2vxW4s9Fsmh2xCchRZKicy4xJcjp74qrnchmt12UA",
  "key6": "6BCcwPpugQ47LBX6yx25tGJ9mcHqQDwKYGN4v4198n2EC2mHDf1VdRG94SRNn4bNoaZ3SPa7sJ3245PUVTGMCvf",
  "key7": "5SQMyhCPEELyqe92V1ngtbqm2ediB5TqxSoudpzQq6CyneNgjCFsT8NPbtWvqM9iHGusZhStzmjKbGorqExbpC79",
  "key8": "2v15fSM15B951TMxr7gGXnE25VHjuza2AcZsoMZKeWRTSDuRfvgbjYuSVhWsXck61T4F2GfxGtH5UtsRNmBsxDPv",
  "key9": "5hFrUexFge6shyZnRuAg2pGea8zGkpWJ2z8Uq3kAVALuC1dQzPGtvWicNNBRVWLVCycZQ53rXHc5rkZtQW6SNxfG",
  "key10": "4xk52NM4AgTVBosc3Q4Ga1WvNehMWvp8guA4dWhRqCM2dHXJK1JgcWiqA5Rm6x92rtY5r8LEpicouEeYrJnTs2N3",
  "key11": "5QLsL3MtqptPM9UoksHdMhE9yfjenP33dmQgF5YXsuzpphAP5HD34PY8A8wE8bqozWBvLU25MoGKGd49t1CPHGjJ",
  "key12": "432WspkMrAJZFatMXeRUveDKQ3k2J7NjkNTfNBmDSAypNzwJZi28kGyzzDkFvaV8PHz9ad9Q1xtr6h4RE9XUaAX2",
  "key13": "2eBSZwxrytphYtZL6PLhGRYE8aExyyCgXz33rsZWEgXHeBkpNVErZu2rsX35DaVGaskzJnSx6YFamsEx96g7RJwK",
  "key14": "4s695TJpirWHY7BLZN2ZHwsZ2uue1BEK7Epn2HzoF3rhZxVASY9auXGWN97hP8QA1aqbNRJjyM8MJgKjPTkT4aWy",
  "key15": "5zzwPdedxtVncNYYqRFqXZeNcN265pcxTLyR4MapJshFP4qivVj4xBQb9aqh6BRwzVkc9ZLKjrpLeZpj7rgVs9GP",
  "key16": "3z7FkdzpANnAQ7M5dw8LjtzyBiJeYtitCHyjTva1Avwb96cHLjC9uxjmjfbLBoj6ZWj92DD5eBkyLLRnEwWtB27V",
  "key17": "3SFzfxK8KcnnetuUdP8Qa5iRycXmUtXZqNimQhuPqj8kqgffX9Cbf5x8pF1KwLMWzoWt7Qf1CM6XJ4cEUUJrAfoU",
  "key18": "5pGRmY2jUoCfA9dP6AGvXavGVNFwKHwBz1fWbSheQeRqCgG1zGWUgUYnJGLwbG6goQawP9LhEJ38v3JhRYAWnx4t",
  "key19": "2fKpq4Au4a4XR4qHD4xHBf5W1qMPVV5yLMxNsS5kJC1QiKmLVLmL95nm5PeCpmK8aNZL54o39SE6gfyD91KBMhfq",
  "key20": "3wYmUPMsnnrxX3zqEQxeYJAe7A5v4h6tbmhGhADAgvFnE4hLaQfAoX3ftZjfyEuuHoKpzE2ULP5PnDkaXhYg8ABZ",
  "key21": "23cD1sT7an9iKBTbbMnmgvjxHsKUUkRuyaoXZ7eyb4CQXEMg3oWTtkeQgb4A571HN1Xg19danHNgmieSig4TN1E4",
  "key22": "5Lz47iKXEgesPMJsXyCtXYhDCcLfWqKuKCfB3NRYdYZupkHsLu2JHhkSaJMw9cBDHBwEB5QMnPHc3s6qDjpcEVmy",
  "key23": "WM35K6nHFXJqe5qbTuVvuUBigU9N8yJDXZWCX6op1GS5jeGnRGJorTtaVvchZEHKw9no5xttr8Jv5hMUBoW8Jhu",
  "key24": "33GiL3y78UNsUNzwQ4k6ZEtH6UxZXqPu6P5WBWu9TZmVPxhe16Z2BAQaqm43rgJ9sD7VYPEji8UsvcVY7vxtfESk",
  "key25": "61kuGKwBfcbSQ6naZsnYT7E3G2KrhkPr4Kicvs4YXrEevFrWNKMWemxA7xTH9GEVfBPgUA9BXcAo4dPMYcUYwiZD",
  "key26": "5bugboDGZ3wFZiTcrduQPdeEzcW2eRCGQFkNASwtss7zFdm1ftB88K6cQpPtTUctdUxnjChsCT6p29RQ6xmX2jXb"
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
