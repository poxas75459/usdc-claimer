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
    "3bsMiAfEGkcKiE5gFoz3LHadZVZQnd8nKbNJ1cqiCNUjNrRnUjjFBJdC36BtAHvcDxoqoVChdrSYrS99BFEThyHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J4XkSEkjyDCZ2fgrqaqXVUcMquB11sLKxuSCm2Vr3JatEpoFzMoRhTxrUzGgceEAFqZwA3BXHDELKGfm8e1VDHa",
  "key1": "4inKaDzncrktxEwpDZhUAmeZwMXUk7RfU56ngF76kMU9hGYisNLN8DZ7dxvAyPMd7SQvT8As7Sw3DxpdtGVWp3Ud",
  "key2": "4JBE6PDeYe6EATDnFT24JRofTt3q47N49U93TKNJCVgNrdkUiDV8Uy9qSVjG98K9SLbRqVV9vhTec1phBAbT4RsD",
  "key3": "5Ysb1beg3tq5qb1otgAuw5svfeU566hhmhoaRhX63adGTP1Kf84QLMhykGuynMomsxSFpYMgw96NoTPK6fXHQ8CM",
  "key4": "4fNhmg5WVbCiaVGpQ2b7ippHUJmCYjrfkD6E6XG7gcfW3wYTsArmbzBpHuo8HUPLHkukxgZ3cGPqp1W6sJgx9UUm",
  "key5": "3hiuBD1brGdQEAYspX17oaTVHVrmY8Dasgy5muJxJHfWpCF9eXQWhGwaGjSfymbCdPRfLJcZuHqXCZUdueiVTXVS",
  "key6": "3p6RoA5FxhGXkYeMpDBm3tkk6YF5ccDXuEvDGYpcxYT5WTyFTr1y5VG31YF8iCEEDgVk9nhjvowN7m5ujb34zyD6",
  "key7": "65iCy3jMwmLx6716vwzN9YH1ALpjG7HixVfSecezCetwWsKkKJeYaWNG125SYZE3xnuBpx8zNHzR7NoFymcACpSw",
  "key8": "28oF8YBAVZRN7Jg5xXYRVJfvJUbskD2QNf7X9Zgoy2Nyag5X79TjRz3C9QE2Dk3QtRrCTbPdSgmgpg5VF3MnhAaC",
  "key9": "2rpR9ry92aY99wuGFxrNjbokS57ppvNUjET6bKLKjnEn2qjBZv88wdvM4VYTfdfGzahLZcCzDNKZKHCTVhAcKPZ",
  "key10": "zUa64utn4DJvMpRQh81EYFhBCvnzvZtBY4wgP34hTuGppYRU9tA9M55xvp6uLoCbUW5FdSGvNENGGjo4iarFuRm",
  "key11": "264bySKiJNVW4NiJQR1rvxzbNJF9xYMcS42BojbK3vuQ1eyBoHGPvf7BDGissG4sVbJpAAiBGzJw83qcrEQPjxvi",
  "key12": "5d6UKPppNNKCtuw5sYTwNNpYMvq46sEsykJejc2KbNscx1YNsHxm3ExyT2C2GWfrNYKBAyUu6H2wFZQo8Ju8affx",
  "key13": "4CeeMZb6QTNhyKre5oG9AKakKQ5T8rfeCpevqNhCoChX5zHk6SYtB7vm2eTuCxQtrYAbSZvGU9R8pwMvrjRgGnr4",
  "key14": "2eEPu1B1EfnWtsuuCtowYXdReryGDYedgVSUfcDT7U3KXYXM7V74r2mXdL7FyLMWsW6y8voogjaNbQh73k8UbVf8",
  "key15": "3BdHSV5d2d6szaSDc3vJsT7Rz1cGN3YMiTkRiAMArRXZ2cBPb9d8LQwFWCYqXyYX2wBC24Rf7yuSP6ux48M6iCzE",
  "key16": "4qzJvffUPMJsTQBdia7KjZFdjCbgj7AXsahRVLdtQam8wphZ4xHmYssKaDgJ12ULSvovpeHLJ2o18JVydNss787y",
  "key17": "34etUX8gePVKmqpxF6wAHBEUGJ1k3vbvBLtz548X3q9w8k94VE83bKjTyJbuJsaTHAJxGMh6tm5scPnNGFheUSaK",
  "key18": "2XJ8L2pyDVqe91CL7iqQ8nxpyoufXdKhtvCJBvXwGSYoGLQKjbPM2zug9Myf9nE7vQV92NhWXmTWxng5dxSaEKMD",
  "key19": "PRyTrjffJQgLKY8VCAXkDbJoTJU2FgA2efMU3UEEgrJFgeVLmdTu86B2ZfD35bY2acRryTtwr4pve6hZLwAQY8N",
  "key20": "5nMYufva773Ku8vLDE6mRi8V8iyRgPBEDHqEp9ibmjAfMy5CyTXvityMavH1ufwKBuh44LygfN3TUnoFd2Pw1yJq",
  "key21": "27AvjRDky6ggv9BHaEkoxEaAVHa9ieVY61E4iRYor3NAPJyde5sHcpUZUwuAnEF4Ht29CsknSEC5F5tdcig9Q7JV",
  "key22": "3GYKodoxz7LRcvqhYN2acyH7mcf2wFN7at21qA4cwmYK1nWQdarYuj4QuFwu8E8X7dWwsVQLFhfjMnRBVshJir3N",
  "key23": "3KPGrGyKG7rKN71JpfRGFHfVghUS9Upj8aZeMyN2bin7nuN1j1M25CQcDwT8f87ZfMVmwfU21c3d96FUN3LBREBz",
  "key24": "i6rARfYtRSTfCynZKRvsAiUk6yrq9uUMccb82R3gihHBWyU9j8FTVqKw2wvgCxbR22GZEa8cL414QKTa2GT9udx",
  "key25": "ABb5VVhqBNBvNJ1qb6vooFxH8vnTqJ7WNvSrr5NHSWf5jrVxYSn5SjJCp48jTaRRnQxDLBDvnAJsVV3H76ds1xF",
  "key26": "4TrhAPuysjGiCQxuT71iwatrAcoQymk6u6c7EsNGzoxCxdgt1EEvMPKx27TE2tMJvL7rf8LZwdjaNdWiAtAGcexS",
  "key27": "67ZaGqV98MtvA8c8dQ4jCiFv6EYqUUQTAusWt6u25oY4FTBJKQQ2xaQCs5RGP4A9r5HUidVKUb8D8LSidSmjfEQw",
  "key28": "58of8kex7voXdJeTGhb8mGxMQzoNtyi4LQjUNyUZZ2UmqeZySN8Mys6KTBpMxGLNVtpQpzEfRH9GVVSiUoYoY2j",
  "key29": "52zsrEp3ZUFtCuQbdEZ5gSLL6QUkHPFHKFKrLwhftfXGquVRW993KQqFRLGwbES6MNk8cgD1gfKwUg4FTEuvL75b",
  "key30": "2ytZBzzskGJcRLUh2HHhy7tBqkrRZhpw1GqB294H3Y7LoxC8NkN8o6ZeGVfMXtPM3mY2wMWPm91T8XzTSYAPWNh8",
  "key31": "8trfDSVnXavUQJVPLPi67n8kdtnsDqymy4rM4ko7Cie4zSDgKATqXVgqPw6AWbp5HGFoUoxxwdd41uzcuJBsyVg",
  "key32": "2EiZnonbTdorsX52KT7sFFu8GeR9NhYnfueXFcgsBHMpFkfF9YSZYvi4JxvQY3esfzbBVhMxExr8dbZUX6kkrdgS",
  "key33": "jaWNKbss1Y6gNjewqwwY2E3Y7MrJTWT2zJkhpFfim9ZhTPC4zaYRQ4qybrGKBu8UYGRUu4B2j8YxRVX7ocEm3Y9",
  "key34": "4xouD6oKwUzcygQd9fLcrk5zXujvxdonazxmMPubUS6iioML1C2qL9Pgf32YVEk29tYhxaJY69M5jV8nYEtBfbm6",
  "key35": "5sDSqMcXXmxBy89TmVG9sotfWGNJDqqTsaGEyTWgtaEpEpgGM8hNXMHxmcXeUN5wqxuJmpDhMTendnJT82okRjSo",
  "key36": "3rDeF886cb2EAU1VEyDDBrjB8VT9SiyPyaUrG2He5zSXuTEVTgDbLAWPscazoVhhagzyeW4MYh2GVjVoFwrctuxq",
  "key37": "4k236BCbQmbedVAUDvtXiPH3ynyLPaJEZYd1qABXxgGnfcJFtTuXokjMSJ8g6Dd7DSjgvVyK7oUR2fS3RCsYvF2p",
  "key38": "5xYGRcGuUVFELrAQfxciTEMhXyABuhKLBb879UCa848mFcMEe9F6unv6BWm4UGzXRAfd3QAmF4qeU2CLTg32vKu1",
  "key39": "29Lhu86aWugUQas31eVCYpTpxGfAJ6xVBpSyUXYEnAbSJDEGvTT4kJ2FhL1H1phefrHcTqm7c4vnVZ7iybSDynMD",
  "key40": "LCYSLUpYRCr8AYARgKyM4rJuBJV9BwXwPgSTEEXBcgYLcFW9PHHQFFBtmqoe34dLS8Cc7wQavrkvwVcHxRtkJyR",
  "key41": "3WXtVFTzCsqZtizfh6ft85QrPBemuXsGXiRVwA14nQzd1FWifVciDnKud5ZzBbvBNeeTouGmJujYZV7oc6bHUHAR",
  "key42": "4tueT1q6X4bMi3iGvLE1TzeKSrY8SECTFF5Y4pP6CL8JtbQxvvgQmCm6FtDwCowCYsKvF5WJL5gehvwSFd2S4syv",
  "key43": "441n7LjD4J3nuFpvxNRSV9dJY46b9kcdNZWt82ZDH2XzAR2QkzSotNP6FuD9o5QYEoopcZrwpNfEjV5QXQz5nWAp",
  "key44": "2wgFL2DB44Lv85YZ941EC9gtQY8J9BSTRSXMXUjx3rR57DjyWLDFHAbDZ3yLtcJWygGTyKWko6gutcwS4R3NtSBv",
  "key45": "2rTDViuef35E6h23pQgWo9EdDdzazvKLGTKD8GjKbi3BCXdYk1u4tJxaZ9JV1KeGwG9NxU439jfwXh8hTHeCCdv5",
  "key46": "2SCvm8mHaJpPpGkGt98ohZBj8i6wA8RwBbmGibZhnDpP13U9dK6GMbuYVJqbSTt9F25g7ig4DKwNwgkZroUrxHfB",
  "key47": "5ng8B36EAPsYz3NvesUeGNB5sn3bfdTzABY3VKcUB7rUuTHANfeZFQHHbaUnPacFqBCJQdSADbJfH2mvADo3Xw9g",
  "key48": "4F6afkk5q5aKdFxaq2TfHrVXtmz8qE4UYHqzqypw9LwznrXsyFX8e2drqdKbdEzYFKJyFYMxBEdtMrbExeAWpGxE"
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
