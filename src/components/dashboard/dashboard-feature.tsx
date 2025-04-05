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
    "4bmsKNmG26sfPWrUk59PCV4hsYJRefp2U6qUZtS5868fKc9dFRAEFmb5PGsBxrAcx4aYcScWxWrWeZWC6ko3JSuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zSa7J9r6yBMUgSF9mZttMAvCaKK7RcjdErJk1pMPsqfhfSwJH9pLU2zJRP8MNY6sgZrF29FeNYaN6V3nihWD7L9",
  "key1": "3pqtqpSa6xujYey75p7v9sfZP1oh8hMtySs75NuT3q4tAnfnyjaCHhZrPjSQaDdCBNKfN2oP9rMA1riaNfjVCuPR",
  "key2": "hEftYKXuc8xRhNUeXy1w7iNPPHp6KaKmemXozZ1W43WUG456ELXey1T9rNyJ8jpncyjWhLJSnPHrsLxT8XwvNdB",
  "key3": "5GmV9eKKRiFPJWSMJMEEzvMwTUQMnKqcURXTZx7w4uR3mJh7QUdvQtdUrbF32QiWjUxwZ8DWMKTK8AodWozDPzE3",
  "key4": "45sKfrFhwxaSzhwnrPPEveZJ1KoViEvUcrbfQqdSfhMCCEZKciWep5WMtQ9cJvfpsA64C1c1wR8Hy8b1D8kwzUNH",
  "key5": "YdvHKH2RJo8hi7E4vYnZWEBPjmGBTvzttCUsR4wYtkRrQbvN7npDTyLihLtbZRZyDztt2Mdz9AzULvUXC9kzYkn",
  "key6": "5j4L3sPqqgVFKhp5VAPJwbZ1HvGJHWQjViZzvJwz1714XxLZheAepKadfFhWzYSuRivZi2kfqVcT5cUjTRk2UYPM",
  "key7": "eAH1uHANqYh3xNyfSRbRyj6SrPfCqBgTyZTaCkQBaN4PjbVtexetVbp2jL5nAMvU4QCdU2rhfPWFR7WhDJ7WR3c",
  "key8": "Sy96FT1s5k5U3gPsJTp6k3SxGuaNVHZQMagEKo5YUm8YnwNLTNdnfgZuSsfDcvUdUk8fVdgQF5vQX1pssVm2zvH",
  "key9": "2f1hWxPJaME2YcW5ECfv1BTSFBsQmXkKTbjAEit1TKf6wj37saTrzxHVbjutzRovwjgArj5bGxjTirUEvpAaGGqq",
  "key10": "3uhtw9RBgGHacvjjKTuDjv6JJidembwNC12e11rbRBdyBSj9vnhmyoSmf3XX56mhDTWJB4Wcx3sjFMvwHUNn6nLp",
  "key11": "gHN8W68LBaeJJ8EzvL7DPky4BfgHJjq3T9gkj6agTFg7Dd1QPMm9TsN8nbXrsA6rX6KuRej66PGLTvFnU9dmkDF",
  "key12": "5c1FZvDPdRoqD8yVUbjW5iLMwUGCSYccMVBsKhGJS98unitEs1M26T9uZH8U9gD2i3MkmaYqtqizRQH8Qr56WVic",
  "key13": "KxSeFe4tqhQF67kYM1gFmrAw8zYeRi3RVEutFoLn2T5b5Y4Zi9X8aBjrsZJ69KcrhGDwNPA4yENXdo1dtTZuENv",
  "key14": "z7mUSjUUJPdtivXnVTi4kMeae9npX8btKJ7YaTcUmCCU9k2ZozxpCzTQqH4aPcnPgHGxuRtJ6UUSXZA1Lz36Fon",
  "key15": "38E1X2eyH2CtFTb9YGYt4dzdrL6Xo8SUoAfPa4UC46Ehi9iMFad7Q9YxLmiwgNrWLLundEgPJ4AQ1572DcTztLGH",
  "key16": "2VagMnPMCzu3WBcXL1BC7R9xjspFqTu2VmqCieJ6dRWsj9Ub3yuXVnAtNuxAsRrfAx7QfP11Qg8TRiEs7C9nHndP",
  "key17": "KpPYfjNqpDqR5WSHrvB8hweAZoQ6CPshzp1cq7iXEDQjkhMwATfAojhYTRbdWXARBQQ3drfix1HebqVM6teBXKp",
  "key18": "tsgLi9Y12tnunQioZ4voLw5ESxo1uRncxgM9JubtQXV3k1iXD4Z1hsk6zXFzXkHpsT2v2ahap8yiGVBeg5bZ1VW",
  "key19": "2TRG8ZfW9GrAC4u3ctJsjKufhHFvYTufwkV4QTV4ngNv2L8wTTxwNBY94Gkxk2BwJ2FNThzvm8cKGKhBuEcWvSap",
  "key20": "4X8reGDS1sDRogNZqCxLS7QKRNukc9ZjSBZ1siUJyvX7YVZc72iLgmNVevdtynzSc2j67FvGQhgiTER9KCLfsiVr",
  "key21": "4FUHtKz9tWqDwGAWGk9GBDVJg7Za3jP4WnvHtES4M27Ehzi5nTdnNCe7BoQre2fgGyN4UW1eoi4vyqZqyYuZjR1B",
  "key22": "nTSZzHx5hyN4NVHre7ynQ3jXYWAHL1bRFAixvgno5X9Hhi3tTm8wP2TjtKa2UzD1yG6maeJCq8DcWr2GwRnfQgM",
  "key23": "2fR19ouLEwvNcrbETJMWTJiwm4RBNfmsuTgJH5M8L2g1HxxyJXRoD67Tj9o4gLocuKyRwZQsrv7xz6R9WEJLtn7Y",
  "key24": "2UwVKgeTrNDgtDWF7pZLxZKvymJifP9mptAW8mjwK1MHLjLqub4QA9s7FfWHhn9p1tYgJpdLfvXgVeAaKMp9u9Ga",
  "key25": "65TPf8d2uNT35N1WgnVh4ph6XANCHcDQpUMYStCDwFB36TMPgiyYfj5FtWb5fh6PskK4tGLmQW2NgsLGzRFuUSpM",
  "key26": "5v2QgHShUY8SBgTjE2eyqVDwNVA1svHjLKt1CrsV1aUEmp6iPxNfZGu9zxSTsLZVuy9sVu47vHhEC5nK1kQ2jb9P",
  "key27": "3wDu3UH2JMhP6stmAMZrY8Hgcb3YtU27JhLGLvapR97zVSZd9UjYNNzD8RKbBkhv1vmm4Ne3GSrFqfZbyEWdK6CA",
  "key28": "uFKSJBd61tMFvnq2dDLBV46NkcHJEgYkFzMGHL2wYSdtvUpEeHzz9hmFNniu4Xhqh6sYpccqRBy6EpmY4iwWt5a",
  "key29": "462BwuU2fF5whFpebgvVxNGi3tnpFotYYKQTsD9vaHgGjsDgYWpvn2KN4sB8n9DNTPpSyfXy8dyRgGWVe9FcMAqo",
  "key30": "5o7zJ6EQM19TLkbyfyEjJA67GKxbHEmeLWvSgppV3wA9RFpSKk8bcyqrks2cTAyvMwRLBxb8uFJSxcTBk95HHf6A",
  "key31": "5AouKdtPe1mKVt7xbCTwvpfR4JqS1sEKsh7GztHFXGj9qj2n9ogzoXMLaDjZASNkRWQrgzNoBs7vqPnp6P1BZVgS",
  "key32": "4YxnhtkET16MGezwYjtV3m22uhDmfHbPuLbtN1k4XTqeMk5eAcC6oPFy64d4Ck3sRhmYi7Umf94LVbtfggAsx2js",
  "key33": "2WqbdEXzWdA2FNVtqK18CfEtijNracpfzy3C44zkzKDXBaaVTyZC7o74YY3tsDyCZL43qPoQTsiz3oM7Rguap821",
  "key34": "KLGGMsVfQfhRn4y1QvmgeGuVrCuYu5mL2BEvvGGdhQ8C5p1YVTAedZA2K7ERrkh6iUbHdmmS1f7NdDQ3en5Y3hT",
  "key35": "5yfHpcF7NicPE2k8osvx1tb4ZzBGBx9sh7cqJb1KLq5SwsiNtwP683bu6ibrxzJykh3yZcKQvXwTQZg3BfcPX6jU",
  "key36": "vYNA1VBNmtKc27VrEC6k4DmnwtShpQMf4867E2TcjfwcEXeaVQ7313nsqNX7xrUBeTWo7zhMG7g5jw2hBmap5Zw",
  "key37": "3shURiesJ3dkefNtZqyhefZPNcgfwXNtCv5j93qbXp7jKXkYsYwxFbukBUzm5iF2kr2sm2XZxi5Lz9UdbubwVpKQ",
  "key38": "61UapR2qGAe4LeCFYCz7Es2YWKPYR8yrouvbJMoGW1JQ2pPzjmJGLi7V1ZWEcE4moR15mftnq5Z6ndWkghnqeqZU",
  "key39": "4uLEwxTH173zZVy8kVyVcPuyRDn1sgA8uFzC9hY7bvzVhX7FHuer1JxMKKfWrmfFMNaev9N6V2SsVwXAWahDV9no",
  "key40": "2Ven8fDSk2b1Ju6fZSeNxVXaEFwHfbFUTjfFNfTe88EcyfwLgLw59Qwyx3c1J4UCqCVaNJcBjJJteuuA2aiVo2G3"
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
