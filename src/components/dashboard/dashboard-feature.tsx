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
    "2BCvpE8Ao9gXF8neqggv1TqEZMAwTrsU5YxxyQLCsaEjFmk8AxupujiAePChgByFY3u7jJf7bPU6PRyRLvbZ1Avk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rxo2ooTZPZTPi4wJwNGDrzbEnLK3PhUzjsQ7LFLBoxytE1YvkyCgE3uYQe3sfkRsc4JnZn2ZwLtzqyR9PfU1VuA",
  "key1": "63sDCTKaujp95PY7b8MXXYNnSaeWsoA4Cm5pnBaebHjLzgDWf1gtXVfDcgUE9FgDh4X6bgjqWtAaHXuhLbmyGdb6",
  "key2": "4prHbkdbtFXqEpxcZRUHYyRLxXYriV4SKTrnGG1hfbzdmLBZW8G4CKYtJgGeF72GK85LTA5kctwE324RCA6yncgD",
  "key3": "8YfUfwdv8XzqWYKa9VnPRhXe7eZkRfF7LGavkcuHprsSZ1gXPDFA7dgwSd8eAoSgrC2Tc3GRizYLwT5UBS2Edku",
  "key4": "3XEa9qdXgbigKweC7F3ghrztpydsh4nw8G8cDurdjiBgvcGUBFLHA1ZuPEEz8MtSy5n26ix7QUsP75oF1GRghV7M",
  "key5": "226ArHJTSopwUgypttDFAzuHyYrsexUDS1yq6nQ3bfMzmbtZZUhHc57UBNE6JxfumNCsQmNRWzFGwQ4nE4YKz6z2",
  "key6": "tVVBGTCaQpGkMhTnyvqeVtRVbQwv11GJ3RMWHVFkp9sN5HengsXEVWyuTR3SC5XUk8QQHBkXift2hDaLHidXTmV",
  "key7": "5efrvypaGfh5qey5udpAcX93xMEPLUZAejPGm7WJWCwku9vYQgr1Vs6JbZuzVfVdAd9JRBJVcNtL4iwmR8NjdpTJ",
  "key8": "4P5sLPrFj3F3eNxa8wURXeWtnewMeXi1oCoCtxQwWvCfs7MP5cNdqFtRd9Gh3973BJXKUnb7CdsGf3ocabH43xi",
  "key9": "4u2T3jY1xeDHBYw9y6ighiioM96VoUdWkUrX4eCZMKYVqCQGXT69EBZtgFzPoZzKzLHaj3fDZah7Lq6kRhkJYTZz",
  "key10": "4cscbUtLQA3QFCZkKohfNosYHDDNM4crWyZTfrA6Rpc5dvccZjLWPvJeZhHMeHhDQXWa9dYUhiYcKpBcJhUSs71d",
  "key11": "5SHSxCFKkruRbBWwY5Uz9DZBWmf33geJ6shpCp4skT14vA7gb6kCtimSW1rKXLGh2Tyj6GkueuNi6LAFb4bFS8D4",
  "key12": "2CfdbDqMF7bX6J9EFZzZobnCp6yHU8ueg91npxnd7t6EHWH2nva4H25DdvWjafE2YeZakAyRRvhUg6qmQyRbJXTk",
  "key13": "4Tg8bdv2SnNWFNHkWYrxCMVki9X8GS5q3piTbdnYuYi3nYE7ZyqkGQSwTGtTo6Eg3NmG5PY8NXPzbTa3Kw7DqRSs",
  "key14": "z9bNHGKzrKksBiFNC89sw63hzScouKYH3DFt2LjJGsZqmKJHaEPw4tNCAsufkbociytXrMmUDMd4AyNMVChTYuR",
  "key15": "5zvnA4z6t6RpsRH4pc9bEB7hGgjQemBgZ5NMSCEjXE92CVM8EhYKLMGijgws2ekonwFYSJSuqfyCiGfGTy7mbRA7",
  "key16": "5HRF94mQFp1zaogoXXNscbxXvaRRH6jMnres513zJiKpEcmBK5PUssx4kPHk2x5atxXcL1232GPX8tyMTcCGwysf",
  "key17": "2gdZtsEWGGNht3CCKNWyHjJpynU5JHjbCocuhvpN6rLFbPC6Wku95K2gnXKY7fZACzF19Di9uLJ2yY692RXT4AZs",
  "key18": "zoFe1pp4qB9nBZ7XKsD1v9akSo1d88mkEfRiVUNQ397VztDWkrW8n1Qq1XUev7FpPrxTZULUSv4Dv5aE6WPPxod",
  "key19": "27B9smsdx72jQ87CNN4vE8HD9KxAKwoErD2C8wZWHTmuFvznckcfuhaD4c87TbkKegxaVhsTbfHArr4Ey25erNRW",
  "key20": "HXK6CkRd9KuePCHqaJktnsbw4ABHG4nVpwdZzF8vBP4aR4P1bVScHTN1WZiQ4tfiLYDdmekfut8X1rE4QhEweQt",
  "key21": "5TCgYuoNa8nFh6GevBvfAcffX5wzJLwXeanYcsVTVE71Ufep4QWPHbgRUiU9FcEeyuuxhwGhkoVb3tbGZhkciYmH",
  "key22": "2tVPxnRHX2PLvxdHPPZs8KmRoiZuvejESz2cHzGsUVQT1xaCYnXFWMxseGLSHHtg1ZGjhn3cBMptJ6WLEwRaHTsJ",
  "key23": "3MAeTPtKwKyWgTVoGSQ5RXqqdnFGbsVrxM215AHCeN4y3AxFVmmQr2gDhi8SNiVeaRa9d2PKgGCy2uZcoDRp1hvT",
  "key24": "5tW6kN6SEiU98HvDHiKgXVP7nBExA6GVbQe42H4EuSQVeEHhcWKpdJ1RJBL2vQSB4sbMk4HNicpZFc5nnKhw6sMn",
  "key25": "3ywsosXoaXNXuqSKDVdoCRDJeAzMejN8usBWZnwuwi4Lvj5HBAU6NxStgTo4bQRzyqY723DB6jFUAjonw7Gw17fb",
  "key26": "46EtkbgvgVHbCsjAcFNrkZRgEnitLeaT4sw3TrkftmUQPZ6BFgLQTg94FhVDNZxeUuDPguSARkLP4WD56ffbPRJH",
  "key27": "5tYaRzg3gZX14xWhf6bjnT8svQk5RtQpugQt8cP9rUAourabFy8xdYVxwjGR1RWKQwBRMaCwR4wWvgicadYJjMfG",
  "key28": "394jwupDqBUPwodooVfMugK68kT7UJsu4xxMhiS8xx2FXVC73zyAeuBdwXwdewVDRcNHLF5qXkGcZDUtCecZKbWx",
  "key29": "4AMfZxGzZvHU8LnuXaoTVf6aP8uj8JxPxCEHTcuDM4Jq9uj6LySuFXocBvn3mSsyuGBWLqVaDTFaqhsu1HYYbAeF",
  "key30": "2r9nMzVMErDdMWgeqVzeMNqhoajHc3fYikLXo8BLJxg3S1HDZaGvSXRegRNJTt6otyFPjCwbdox87o6qwFA8TtGv",
  "key31": "2Lfyfek2aqsLwhbrsGw3KPwUYaYPs9XNL1c24QGWQrf9r4VkZmsRq6mDdr19h1RfkBJuYVqG1Qx6MAC8AVkmeMt2"
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
