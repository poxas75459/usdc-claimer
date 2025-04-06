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
    "MULM9BYAWbcTzZ3AwbdWtHN3da95hFB4r1xW5WAZqHtt6Q8YdbnLFVkg6PGuZEySvq6jRLuNjKfnhaMse5CMato"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zxbGcaqXDLrtYqjyjogPTiYAf1r693XJhnkuzoqvGjMcdEnVQVFARhNCiHkYtn7zCbteQWUWgbyzHPMSwtBCNU2",
  "key1": "5c71bkjBdZVQ3Yvpoh5bXk9vhyty681tNznWTctdr2rd2G43Esg2dxiJP28ap6sYew1CWanvWQr8XyDtBNryHGto",
  "key2": "4XbD257nxGLEQJWnwSNs9VDDkc3MrAZSFDG1R5n5QqyFcp3GDT3bqKvXpux4E9dwED544psKtipsMtPLHYDqo9Zn",
  "key3": "41YCRYECcq3dNn31iR4qzGWjfjfgqGeiRQfqihsiTVfpr3dH6XGyvTt3EVoHi3EqNnWmTD3JGeYCPz3eG7XWr7qs",
  "key4": "5YdVT1kaomdqVVoDD7eYdtdzKDoQzPkLb9f8nChzYgXr3kbLSPBSi5Kn91rxCnjiY4CDKGLn66BrwitPmuXwDjBu",
  "key5": "3Mf2UyiuMgc75KuG7DmdoyTfVyX91WzCKZEWy5mLYs6WfcEUnr3sYBdFCWgc8fbSTi4uwbq8shAyHR7uWLXEmPGP",
  "key6": "KuY3USfQopGwXHunBGakkPCtsNqWvtSPXtzoViXcfsWU6iQuS8RhJUSCus26UQGfn55DG6qndEyraxCR1o6RUqT",
  "key7": "595oF3PLbwAPJKirhJvpACkE4TzZsPRUy7euLsSi2Sr2jGjDYPR3MhKr1gZMkcvvb6VJrJQDKEY18HGhw9uDvn2M",
  "key8": "2R8zGypVuE24eXKikSiNdpGSrTJQ7edJcpx3eppfq1EMwrgn5SajqXdzjHKGwoLdXUzMqQwKjosD8EJ51utK8Z4R",
  "key9": "ECtL6gtM6eG7dAxn5spbybM5BooVTnoLHPHtc1T7BsPL82oBZaUsmH6VijrmUKGQXrQdTNFLtRff5W9qqwEtvd2",
  "key10": "4pN9B6RxWyQ9vXG8cM592ywjYEziJKLDUJ53KtMTEMTvwvM6idGoZZ9oSGDLeHupwHvTsAoBnif8tNEaEhJTkwAr",
  "key11": "44iToMFZx8YfAszuedDA6FPu5qyZj4uFFdX8NnikjnGLVXZh94qq5TN7gssf3KxugNTmfKYzGJZnpsvQm9keyRTz",
  "key12": "3Qs5PGJZ3xPBA3zihBB88NqW7VMfjvJ7jXY7mpuBH1nf2mpwkGtyYR6ggSjZwg77uJD2xagTgbE5FKko2QS1wPKK",
  "key13": "e3jUuaXxqt15tYdPzjQWew21VZcHDrm8pTT6fnPxqaS5XNZBaWbPYtp5skuJVvcWqBcGNqWJfe81stJuCM4F9Gs",
  "key14": "4xMv64nRzaLEsqL6wn5yNrgcwx5mUrqMRgdZ53S7jgWMSgua8gFoHoCLTSvDHHA4sygsyeCfxThcLPQxDryB96SU",
  "key15": "6QSFf7UADN37WnGRDCNDqqov9Z7mZVJ12PFPjHFmxunJxF9Jr4eb43WYqp1ofEbb2B1eMCqndpuZBAxeQc6omsV",
  "key16": "3kvkFJRkpPrS62qGTHTDjtZov4HUARQg6aP9FxhdDyjbB4rzXME2x2u6DWmzXzK7Hpg4QjVHu22VfP9wW6hcMn7c",
  "key17": "4MRfPm3qyNwvFXRuSCyXnQdDadBNfrpRa9Bu3zVtfuYNjXc2Cv8QowHpJA1BuE9ZrkZpFcRi3QXqqSSy6vPkWdx9",
  "key18": "pLL3LhJd8q7BXp6Q3C2hpYtfYnpcaPZxH2xCpPopwDjuWtmJMzBWw21AWioZcLqpTHTWL3j5bAjcm2R4CUZXL8L",
  "key19": "5ufrVVzgPTaCdX5B3VVU9Tyb5EaMHTvTUpj9nYtTygvArKk7benrPQ37jEACRPKBLThMFKA45v5nrXRAutdd6TUh",
  "key20": "3vLyrwZttBv5LMg5SCGeYdje9pkT7C3pmHHued8LHbr2qcDNNjXyCrJEnKm27qVRJpjxGPLs9gXfFRcbq4ne4Z6r",
  "key21": "2L46rsaDp3vnmTnX4zCmtTEqtLM4nput8GVpqjjoiGp33QvfuWvbV13s8SPp5uKNXw5tKu6KrSWmRX1VXYAzEpjJ",
  "key22": "51t8DzcgB2Vtj6x4ze28CMZWYXEoqe7iCHGxk876noAYB3dw6hB3UjnqMSTW1jdsPZpCeHGCsgAeVRo8qQfjjiYN",
  "key23": "4uwiLTquxA4hVGWg1MkNJaXaS17E9W8hv8qaMXHqwedveRUk4hos8T5BYVRWG2CFNwGMXQvuhLiNnQ42KARftp8",
  "key24": "4FupAUxf9xjYeudd2byPbNtv5MoomiRSJvQCUhsEKKq3W96D8BCF9TdAy3s6ZswygHP5meXxepZSrHf3n7RpEheH",
  "key25": "29AUVVv75XthiX2tQkew9dZ68U2rQZNefXXDiRgTBEMhV9UYCf3B778xYfxnykUPGTpxPu7UCSDM9VroFQb7mwdy",
  "key26": "5cT5JZ1rrjsLkk5x83a6FUjFvjTwEqQSyvHgnUF4ETVVZHzkuEkRmXeCtbsVKGMSMPfkhpt1w5a3eLek2FDYsjR5",
  "key27": "319RxMu4pvjY61E8KPgF2fVWfc8rrjcwRTe1RcEVy69CBC9PNyXxt1yz1xkDwP3VoVdU3TJAJQQSsx9oz5pz8nyk",
  "key28": "3ZXgmeCaXGoFZz8iZzd5oKWtSiKjhAT1HFFVTMq53G3xNgmmPEoTbiWPZaWQCLbEb1iEpBgNCPbU4KxbetNDgjEW",
  "key29": "4kkFC6bjJabddituwdqtKdfkFJyHfLnhEQdEqxQDn921dcGNBeXYGUTVAwc6tiWqTSiqkagk1xWb4TG8RRmJLbEp",
  "key30": "ExV7bxQzxAuNUvVYyXLMTzAAKdpoNEojLKjPBTcKibtfmvBVdWnsD6E1FPJxJ4TpkrF4C6SWAkvLYt6pc9Hiq12"
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
