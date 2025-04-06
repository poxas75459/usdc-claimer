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
    "46sv3DvenjPrDGSH1Uq1NzgSFTJuYeYfPEQuChroZCSUyky1c8xZzq921YB4EMdBxUrRP9BV9rEUJXme2hzMZ6vJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DUJsmxy6yPhBXjRA64pxZREuojkkPo6QvztQr63Ce2DUfwR4F3P5Ezga6W6A2xGR11ozGHb49SKe3SsRT38p7di",
  "key1": "2XKm8PHaHDWLPzs5v4ER9YE24cn6vDsNvg3Xq1LeNLq5dSrTs5dS2RdxhUc8CT57ZQE4NBMZki69DaX6oisEQHdQ",
  "key2": "3N4CxkfAvHCeoQEAqicfydfcbtXPcSxBQ2jhWCoigLk5isW5Djno8noWU8mb1QuVC4jemJE9TeqT88JVgoNwTEmY",
  "key3": "2pXLdEnQJEM3U9tCptdsb3MtKRtQa4x3wWN1SY1W3jqH4hocP3JvoYpy6TRpBX5cfS7fYhMT8dysuwrPczTB6sXn",
  "key4": "3YMiq1xUCRi3TZgpYWFqZdEFSEdyB84qpM84bXR3mktirzNi2BJ5NPEhMkfLYoHwJcNozAhewg3CUxJkUwKqdFqh",
  "key5": "2QTTbmUxPguAnLXFT49WMLd1DPMp3h6GyaUCh9bQoEVbCKnXFRbm3M2monjBhwt3S46c1Fg6ENgDdmeUWA4Vsgx3",
  "key6": "2nd69TNk9qwZwAkspHCjGQRXNjfAH4gpecExG6BsYDYaNiUm6env8UshPUDAtpUKXUrt5XAuL2fbQ4BD9YAn2tNk",
  "key7": "3bhX66xNdRQ7o9qRhfTxQDYFXNaVkmfpkKu1aXtfCB6YmvY9qp6H12fQQrh8CBQ1Ccw7vHPYbuqfpHx6X3oS1Gb8",
  "key8": "4fc9W9sCQAqeNxGUtfWUmcqj5rVAsPN5WXueDfJ7p2oQRBZQSx9PurLBT5ggk3HdNcKHDm9ooZE3cbgL9aVpcRKJ",
  "key9": "2dgiPCjN6tC9U5GF76byrnKwdQYDpGF4WVvSKsVMzN3QWbX84NLKLUt3iEk2hhsffk2PifCG34xw5bk7GpUrzUy7",
  "key10": "sJ64A5gLWEdE7cJnXU6P58ziYFkn1WRqgVneXL7GVNJPtbJY2ivBCYzM6Eq3gCjyTwDWhLPzarVQ9dkXiZNnbqj",
  "key11": "3yj4tUrb4B66QHLrAVitWJcmnQNz4YP586bTfxbUxb3PPD9ZXiK1tM5nUMrbd4TAodVVYfCTNHGpoChKzGMZAHZW",
  "key12": "27CNfmDyae1iU2uAh87fBnZrBUyVd5rgVWGotdVGuJ8QBjsLocoardZwBL1QF4fpwtt3TmghV6Dr2GbYPCE7SDNm",
  "key13": "4eyB5pvMfDTvQ8UW75U5MZsRZeky1Ka4xVm5P8bTDsMmcbgCdoRKtZo2MjTx1wq1oDijag63fZQfLNn1Rkkd3vaW",
  "key14": "2og7AJyfDmx6awSdjGLgLNNx7WfDFDWDnSynD4Vi2scLurEiobddgdqv4Y5gDVUmC29Tx6W5mLSueR5ysH1tAfwg",
  "key15": "4qLXuqXGKSV5iwDB33XHKmvXPTRuN1XmhmaNTiKkru1b7Gjn16G6CMNzee9s9dLwJM7kcaEdQnbFzPBeF4gttYEG",
  "key16": "qgnJKSWxoHgqCSc9ZJrCRFPSB2fibkrzMUrhfJJnrscdyqBv7DZh5iUTZZAiLrrKSA1JB4AKgUq7FVHvmM5sGnV",
  "key17": "5TYistutubygtpzW2MtVh3t41AwzRVMqFHbpqB4BQpLhwVT6vChvTMm6Xnpp1uHZcYi9bzSS5nsQpMtieyUfJSbS",
  "key18": "5fxEvqxq6PQVmuettqVN4DnsGT7YZsq92UCXkCgmkwXedZAuEsnQ2MpDjhgY7r3B3PpnBqMGcpq2AqAPKjniBzfq",
  "key19": "5N6VBjne5hJ4dPPK7JHZR538BNMBq3bGt917tuH4emVGR79CNzntoxxWjoUTxHDWQAcxNh5p5kLGMu3E4RWJCnMJ",
  "key20": "42LnYv5CZrtFNKoAXgDgcKtsQ7vUh81i9QcNDfeKeUASoub9EXe3fnKpJnJKVm366JuKM9ZA2PxYvza3gCr3aien",
  "key21": "5ZqqP35Ten9kz7k4n7McKG7coSMTBUstzHVbvYjbZSZqp2QRCURYC1khVY3Ci97PK5RZvi45A7X56U8juiupUzLU",
  "key22": "4eo7oQ4XEb8yf3T6o7HxBjLjqjCRDy4YUprWRZBBhj5yM4tb1FndEzKWYENqbnR7aKFpRbFaGwfWHAw83GBDzzKa",
  "key23": "4RsNNCXBLsFty4pUeisDnjchncJeMKSuMipxrYLUp3rfShAXqvJqNRKiuyfnUhafTBencFMCAWP66XrKA1WUuqdn",
  "key24": "3Pvj2Ly9GbjFEgJoVgQJDET9o4ctG2DdbTRqWFguKP4DKsAPwPR1MW8QAue75EAMr5BA1Caj4fmEVcxJqZfRggCg"
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
