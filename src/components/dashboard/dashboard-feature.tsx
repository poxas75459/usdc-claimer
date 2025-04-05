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
    "5vYoTGvfs66mD6unfQp4nsdWHKsdtTVuNarXVK8CQ2Esnh6HXSZA9cy1c8cMPyAD54Kqaow1AafoLB1S1YV7stA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExW5Ykc24piWhbZbzRfYKF4fCm6s6dPf98uQg2bwLm6amMaSU36hfsXzUMiNxzkpD6nXC2h4FZMu5aWA8u5S1nP",
  "key1": "51CgjdpGsQN4ddDdjYdWM9v5JrDQaTAcfo98A7FPNWXn3LeGBdAn1QgPA86pFhAz83CrQAA478CLfXM9fQpW2qqD",
  "key2": "23ea2wHVsmuuR1HbYd1F3Svat7G1hvTvstJq3aid1cvDz9Rcgru4KmXnsWPds9cYD5KGeczgEhnhWiaXiZkkNu7R",
  "key3": "24ZQRF5UxF7yUAa2uJ8YoEw9uKVkVaim3njQmf5Em3rG7qQ1sz2d7w8x21edS9AKjrenXdtahEyzasgiuo3xeXWU",
  "key4": "4hrFdB87ewRXTtqWsstyntJfjDkeNr9q6vLkZhdu1f68gEs8wNuzErQyp2swWPJTwPjkXmL6ccJ9YXdMhxUG5767",
  "key5": "sdVR7igeKhB7L2BNeyk9b7y7fEed5ZxjdEvR1axAAq6hRebMoAKAkFRmPjHdfRCKWNivfkkic2oU9twW1VeUw3Q",
  "key6": "4jyhEsW9h4yivNe71Q8d3vdfvSxk8FchPe75Fwp6GJxXDtTe3XVw2mkKkjwoLgvbunAG24jpzL9cDDiHTs6usPW",
  "key7": "5Qbonw8ZxLfe66EfqG11mQqPGzZ5wDwgawYkLB8dGoac9VmdAA51AigJqGcHdDe72CAs5jD8yQ58DjiGADirgyqM",
  "key8": "416crZsVSBq7A4bZPUWYPNTqnNebHwiRi2noEV9Y2EqKatJ7TbYZojdLRpWDQFMt7EgoAuAvbPZhjvB8j84HsDxj",
  "key9": "3zMpGSZbJ4XuE35867PJ17ARVCKXnKSevQV1nSQGbiE3AaKZK7KJCr7GghBGMJgFwztjmTcgvPJSMsHj1y7hQK96",
  "key10": "41f39ssGow3mZxXuJn759hn6U52mRwb1nmx2qSK15oL6DEDjfgnFN4SyUixrL3GreeqQbayx1nUzWvvAAWPxu72N",
  "key11": "4TprPAxdZFWKm5ofvPeNvggmqhkgEfRLEq6XGAPFVyrpQhprcRYJCwzgACQAQjYtvoJjVLvBtNEJbLUQJbMyGTd8",
  "key12": "bWvyv48NznWMdv5ZZimxqkDbNNdA3XkPiPxjmKJRTBT9wbsW488UWnFSa5BzcexDKJzBQm8KhJ1B5VQuP9X46vw",
  "key13": "2K5fX4JYE8k5WAyMcUFY8QHyCeGxZu4e4Ji9JAoCH4dYoVdn69bR6aWfZgzinPza8zSsEiBwLFeKt5n3iURui6mp",
  "key14": "ztKtfGsTVEa17CMNQJJfjJ6C2KfWyGaxPxGpaV1uwGf6bxEBcQvcwk5bujxc1jeXDaG69tTbK9RrdjqiLAcyome",
  "key15": "BKj2zW17urSJX2ptd7DtR22DKShyWRseuq22qv8g1Uxv9KJNemcMiFWKJiD9jSJunWQNJBd23umTYhdhfssD86M",
  "key16": "3A3BH9MYxEG16s86WzGKJHgEmKkY7k1R9f5NSkW97ZLhwbs5XhTc6jh4nNMuGRSqNV2knc5UFaM1PHWS3JNT6W3W",
  "key17": "2GpZcYdMJ5VccXegtQmt7JYC1iMRvUwvvJiduhukPSg23Byyb7osKLQ3QXsQBnrShueuwsvfdxBu7bjyuywJopJc",
  "key18": "2zTmU8p2idzykXLy7cduKBY9y5sAWc6D7y6z5ApwZgdfRBEYw6Gq5eVCsYEC22XrB2bB9xgiB7d7BYBMZgrtAysP",
  "key19": "Gyq3ZXJ2V1Mj3T9oPaKkJE8a7sjCWM71GB42zZsVg3HLx8huvDaFtbRca1x63uVX1TQ5i3rByL79H6P6Fv4ffwE",
  "key20": "n7hfGe4rGTrz9sUvjyDwsYKhz93RaNkCBGQPxgzJaee2vquaqKdC3dP1EZAbe1NiNRtG2UHytRWMtrSTiZroTzg",
  "key21": "5oxsmUUN67UBTmVvfsQ2dGQMLeErmkKmciftFjVymEAexvpY2zeeAasAXZUSjrEnnnB5QAcCcFBChXfgPXL5N6bo",
  "key22": "2jAEdqApmkzw9BzRcvnMPpuDVAfdDTmspHPzDCiC6Pz2LPJx1DV65w6H54dzpc7bFS2eAGNNPBrwRj3frssKNgY9",
  "key23": "4hMVtKopf27dXgaUUeoKdrwzaVsb3de9LeZQFenVN3sE3jfbV1zXVa9zoWVgcwKdxw4P7NfoMVa7tTucJd7AVgq4",
  "key24": "39kixUNNw9onQgzhdjCNYYv5rmWoDnGfGEjjkfeJkJbmLJCzHiUwe92uMR2DWQoQR2gRLpTLJzigqLH9gvPxgHpm",
  "key25": "39SFLB8jazgNdf2TpemZuJEdWJUvEXUW9fZeP4gzedYmohR5kW26McrcbfhGaAEavNLeURAcdg6tBzVUYMjpeMk8",
  "key26": "wUiHwaMNWzKA2wP3Y9QxdMLCyKuUBhsCtuCNFC9zt5SDh4mLZT5npDc8pyrDdg1PTmdHRTeqCjgysUCJgbJApNV",
  "key27": "3GuGubZT82kn9buc5yF5Gjyubv15y7W9svrCexCULmzPji6KhTPQgoVVoHD7sD3GFWAS9mpgXmpuY55Xofb5NwMj",
  "key28": "552ud8GH7EFw4u53tG69ANR9pdpnW6v1HfHTyEXXNBg8an9qzfzG3MX7KWwB3QJNwErkWCJwEwnvwDVGpNxqrGg8",
  "key29": "3i2wpwQbWh4YXG9TfwPtwHtgzjQdRp7vckmArzAvinzrpjbttkA4pgwVzac6wT71eKNp5kycLa7BeYDkAvSF4yz",
  "key30": "36sR6XbKvhXcjT3MPVomfZ33hcssDsVpSHgVUzAeSQbVQ1aupVXoXxEQ6TMuT1VKtuiSJdRG16wKbshYsXjyEHtr",
  "key31": "67Wi7ZzSf8wQSWhDbMcK8hYToU58rbSCiq6tU1jmwhswYSAuLZYYQREq1PYTWyodrFjZuNUHPA1DzHnwPqRYRmyn",
  "key32": "3QX44f67NjhHKxtvD7yyD4RxCcwojeBoWYwyhvKtbQF8pmBhVC5ZYeDBZD3dyrVEthPGSRn4T9VQA5ktkg8kbGg4",
  "key33": "WVJM26YqdZprZD5KQZ3TV2iDEbBj63eZTxX1bErLo9hNnoAJ7D36idLcgDESQtLua8BVkk3qks1oQeTQfRhYV31",
  "key34": "5RtAKUSkQBUYd2rFTEP24jKoTTsT8nDgvvZWN7AzcLbaAF8gWJt4Dsge7vT4fzj1mam8eihbHMorMgMVNPBC82a4",
  "key35": "2cC6Nj7PH6PHL6FWQLMYvAyeEHuHQfCVCripx6a9Nu7sBYhkAk9bcbn21wrPs2dLSyinF8sG7HKXBNmHtvDvrB7R",
  "key36": "5wibzWybwCES3U3p6qjQEpTXV4uuJFRTdoCpLrFE2gNAHwMyUmNM446UghfLt6pd8gjH17Ky6KzirxbE8pBiCut",
  "key37": "3YtBiGQ2BbTEPVKKqkaZCVnrVK3NzzZQQewJiCB7a8MtVshm5NWH5Q3DvixxghhbqRowRfM2YKewWiiv2piG5TCX"
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
