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
    "4g7nBMAD8Leu7YVjMAgNfbQVQd6kwPtN1YVsZ6kFkUCTZed5WD3YqhPoibSnnFPt5TXNEZYigX3KoFRLNNhNTYYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TsiDoUDuLihRzxNKK3jL218d9JVxGseAyN3TkLXAoEM1Jp4TRGCucCkos2Xv1LzM6yTFgvBw3oAeWb8hnVNV1Mc",
  "key1": "3NNZY4c3yAAP7VWT31sYs1nHmPi8ppzQt7EpcnyXjzykzhrCe2Ncf4PPZ6XahC2z9DvfuEsgQ4Z72s6XGLdCWg81",
  "key2": "5Ezd4P3baLMvb8vedeJeQ4t9jitjLvZkgEYDzmtumpTYkncHnXuvoLEwpipM7kLPF9xxPiPWcSGV1hC3Qg2tGXRL",
  "key3": "24n9fVYmmLvf2Bz3pmAoJC9fGJppc6sBLJj4rNdXaL1JgE9Z5WxZFsr1b2kzL2RvUaAaDtKSykHx4G1x9PSza96u",
  "key4": "TgFmb13a2V1N52g4fHxF1NEJz7T8yPNqvREM97KTymFRHy8nKZAm1YJQWuAwtTPo4rti5Q3pyeQyXaWrNePa8k3",
  "key5": "2ep9yAJEhJkyjK7Y5QMEyUYp7pvRaNZHFG7w9vd1nNKdpvJn2TbeDAYaVMgjXybHmwsEo6VWcPs7gCzgFBHmsTuA",
  "key6": "27MhS8SMMZkvMiWg1B7ELnu3mVv3goGkWBDTLGTPBZq8sRL5tV4MzojLgt9spsBQW61T11LFS8T86tK5npXcGQhx",
  "key7": "5s1AndpKCFJoNgfePt3Cgd5RrM3WY2WrAmUjfCKCPEBwYBw6spDtZEnjbZG1p7HeDLBoT6cFMiwYp2H8jiccbbFE",
  "key8": "39WQQYHHNqioqgNEJg58GAMBLAf2NLK3RBvL84KKXdzaoHxVrB5j9Ecr2XMJoLFEQ7SbopKBoqQYvbToXbZinMYA",
  "key9": "dAYKGicHcXBTzbc7Ba2cbi5zNNtqLHqYQbVSxZR5m2Z59A8G97CxXWeXCwo5w6JeLs7g9FFCMSTiLVWXv8XEZp7",
  "key10": "4qDaaY3xxoF7ycAm9raBZZPyp292ci45r2JyaZiw7rXkqbrtwiKCvybqv3zxaWVF2di5kAHRYg4X84RWxySPjaZ3",
  "key11": "3dYXHaGYtyLmXEPmft9gt5VBvLkF1eGEFYNkddmr6GPEhyzawQAv9cEk5Z6zgyb97RWWtaMTRKydBQTs2wNkLzZv",
  "key12": "37ap1gK3tM2keTgEt1h7R5SU4LrSsAsGwZDAjFDKusAMEh285iZhua8pTcxJvhcbARjJHPyw8fRiXJ6mRQaGs8qF",
  "key13": "2AB9fpH1rLqN48Numv9bwDXXBsNkrZSK96FsNoYhPaw4oHRnvgev5GJ7XESqxtioikLRQQUJiXxtYggMzCAkpKYa",
  "key14": "37KWUt9r9BuUBLbQYia7ccSQuEhPZAkQpTFAEZtxpJCYGU9nnxdqL51kKNGrEy3Dq6ZJK2pZ4FcsK6p9sfqBWmKM",
  "key15": "4drbKDbgJPormRMgv9PLuxzFx2qcy2RaUKFdQqyxR5tgHn1pWZXG4L7d7ZFkQX5C7MiTudynHYvFqGbzKK8i2Qfi",
  "key16": "MFJjm8gy2FuFevbBg7FDrYp5Rg8RbtUjCwrtm9uKFi6z96jUZ1o8WEkAhBmUFFHCNaUWfWwRCFsuqtBKxoJiwNK",
  "key17": "34kjWgLEJsc1bWuf6WZuyPBPitYKStzWwhrsNkNcvC1m13PBRcDQbah4jhdYnBW6tc6HGChKsxzkXubbzcWn7QVq",
  "key18": "2epem9zKT1N254BLHZkAd4EXwGpizPcDSzsm812qmdFD8FqRp4x4NKuaXkcRRM5JNvskHoAKRS68wd7hU5U9mzLn",
  "key19": "51vvub4UXWAe8BeZyuBaRYh9xo1TQvYXhFNW3b8h8T5jvFfu3CERDRTfdkpru1h9T7EUM4Taqyo9PRRdwkrY3xNQ",
  "key20": "2UxFrHdv1BwL8YxFw71ErS7JrfowX9RbDa2v3cDnCqrXiLGeBx9GHv72DZHQEtRKquPrzTnwcWyJoxMfh5UwNMNc",
  "key21": "C5NjyHDGDdRqiaRHjsvmMkUqtJZkPk2nhhLpAVJdCqYVbGZkdiS19kJSzRHLgXcHfUkM7FhXYijdWnGW9ydRW17",
  "key22": "4FmZih5nqxxAT2R1y94g1uqbLGczDAxQgxsTFx5j4wdg6euLDF7srxKATbPeBarxwrPoiMzGPD4oXYpFZ8nKu5Vx",
  "key23": "5spHs8BvCZqwHor9hxHZvTg7Q6VVo1un3uvCZaWZa9u5Z7FDPQyKYMPDvkQbHYE8JgNybBf2n6scqChEj2JZxbrt",
  "key24": "5XDZRaB5LTBP5uurqP8TFhftkZvwWSLE3GtWX7WeEsXYJGSDQnky1jStcNSYFurBTncsdGztMed7PQ99SpAo2FUa",
  "key25": "3BWAqo8U6iUudH95ZkAJCVf53C5ibpWz7uTnPdtGMrPh2TLH3r5hsSCvy6yYw6qizZCDjQxNQZd3E8FVHXsAcDk6",
  "key26": "5AjJ99QfHX6h3zubDx8AVZUkfayHCK7UHYdHoqE4eJR31pQTBj1ufBRGZLprPJB5N2uojTMsKoqv6wyVxD7pHT2w",
  "key27": "26rroiZ4wHxukCchXryzE4KSKUQgne8DoaKig34oyxsv4MjwsricBbyEU7U4tVSKR1aAmTJFu8EjNx66r5a7okWJ",
  "key28": "2woUrHgR8UqQYRJaVAhMZbw5fQJReWUXUqdazenWvnW1HwXy2oLQrygp2EiZBXJAk9WT4wMxnSWN2r3fnkRGCQU",
  "key29": "3UkHHm3baDMBuEz2SJ1DG4iN8siQZdvLb5wfwbTBnfFtUaU9u4s8TD8YfAx7rVBWDmgCYGuvdre1ogD8VnsqeLaa",
  "key30": "QcYDuqkC6xLqL9n15yeznwC9zw7Wp1h1d4P2GTQPspzE8eDw4fjLb5iis8evkQ5vCF99CMzDD3rtMRML9zft7oV",
  "key31": "3qmfphjaRYMQ41him3oLkpx2KKCYCjC4vyFGfMMiAngdWF1KkhpoRWs57m596WWdrXRNWwx7NUWHNqC36j6fdsyk",
  "key32": "3bXhWANGTesAumrZJLQgJ1uppev3yH6dFGh7DDWENUVupM5c8KnA8J29bUaGiQvZdBESnH5ZjMUbce8dHfjwRBX8",
  "key33": "5oFdxR3sFUFaj495AWnr6BybXZ4r4GzpeZf7goLD7AtNX32vGJyK5ZhsPwKWMeEmmequxqbxxJDmVDxC7f4akN1X",
  "key34": "3yo8GcDBcFn9fCvgY1W3in8C4tQPkCEPh2m62gf341JrVdnT142Uq1htAbNXZLqsfR14ybfqrnHGRKCNyjUfcLuk",
  "key35": "2pBbxREtEdf6ySvh7ggKp6t6frAZJCZRHYqtdcmnJpmWFM99UZdFJ61XJVs1UbgHYhGArmtD29ok5A1Jb6Ep2gvQ",
  "key36": "41XbdW3zVGKJYCJy6WqZaevqki6wAmUdgSdQGutyZn7YuH6tJJdG4PEyP8P675cFXiZxRWCU5sTxMRmZbdDSqx4C",
  "key37": "3huAvSZwP8UtTyGqzmdoDxdHqcvZhqE7c3LoUDbvKenhAvNHxRKAB2S4vVktLpsgeZdeU7YFvSagP8NFUaHy8Tg4",
  "key38": "3D493GJHqUc2wHr5qoNz76rchqTsET49bbZhY2xssJmzD1mkppMVKFcn3GMe9NHep3Zp4KiMsfsvsRzp1E2FNVZy",
  "key39": "39AnEPEgS44AWQvwrQ2ZzT1juX9UUgeCkU7ZJRutNpxsQnGRB45CzPX1YYuVxtNEs2ub47SZv8B44AiSa8ngiERu",
  "key40": "4ap2qCJne8uJEDViHHS7R94GZ7eaiQakh3rSroM7dmoNrKmxtTMGPEYVVvbh217aTLuHvnXqqEzHXZj2BV4EnxPx"
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
