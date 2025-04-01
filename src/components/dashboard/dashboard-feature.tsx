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
    "2f7RhTu3LoWsbNPQYwbawqfpTY7jWmoqsUXRyZCy69wg4cjUxr3jL69b8H484dsyEAuvjfj6CZtbsKGDB52U4kEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rsUBLDRqqRyt6Woqsq8xmmgKh8278YYuewYZtcFAJFciUxE6vueUHTFZkhUzuB7MiqXEJEA8ESMLLUE2ZuJtQmA",
  "key1": "4Q5M11AnPSpm8iYZFEZSXEgZHotSHakiYLSThZtzyS42ezR4JzEQr4wcga8pB7eWJ4pv6UtUPm85agTDMmg5xATe",
  "key2": "3CH6nwMH4TEEgb6v6aY1PUDyTcvFTGVzdUH3Lukezf4kPuqYyiyM9djEtB57vXLqb4sDz5ioAZrNMyeCWj4rXd1n",
  "key3": "5L4LxSGVGZHY4coo2AdX165uDb6XcE75Hhzsz4BfzGy71AMoB5YQRCNLjTG88y6i6de58MEApQfjP6MuhCxU4iNt",
  "key4": "43E4H7ypQNoiHrFhPjE6F9oNRsA2rYvKdgHxr5QxRdDL8BGV7VBARp7wzPAWcDp5efp2jQYCBWb4pVZFpxBDuYjQ",
  "key5": "47x2Teb3Yei9WffvBh4Q7YyHmKxKHQMJ17FjwArX9V8yutokR5ZWCcbEtcT3cYFiG3AEgBxNiCNrQ6yJqhdAVm7t",
  "key6": "4Y5aGHb68ByGshLagpX54yNbwVWZGNLLPnB1BuisCVLHCg6R5XoqALHbgHsmF2oQi1uvoA13aR1qcWFUs6YzZGsq",
  "key7": "5gHaztzN24KJZXv6D28sRtvWncCykAKYLqWaE6wxeFzG2jQFhit1DZfYVCcBvcwQwG7Rdcc3cadG3y1pSLQR99GQ",
  "key8": "3Z96WToyCYHW3PhhK9m3yaDFF59XmJHTGHJWPuMPmko7itJkFb4Wan2krQepsxJSg3udRAZDKVYWrAQwxArKegLd",
  "key9": "3R7ajhbYQzbT3gJaHo2Mc4xzJ2iWkUVmfKwNqXnyUb8RUpP9L9C6kSr6NSZqLCM6ALdVx3m1jopVHBffUkSVsnrR",
  "key10": "31zZAjYHUZRLd7XjVCw5wccSMrRKAVG6tCYAQLxqDePSVsBK1Pz7ELaThsyUciJzNMxejQbAs8dWpWCFANeB1kRy",
  "key11": "XesBR32vJLeXYD6wqAzER4wGCMvBpAwKH6NEM8FKGpfDBCDbBPgzQ5SUzabs955bKik9rLmcETy846fkjHpiTfT",
  "key12": "3UM5gxpcY39J7aZ22E7XSfZc9fZMNC784pGCZRtp6qh8xeB6bukAcBh5p9Kh2rgtD5CVhi2XQeAm82d3v52Uj5Po",
  "key13": "4G5JpGDSbX3qiXVmWqmHNFQk6ugNSN5x7wPanAjGrSZNdJq2126JveQK5uy5tXaiHrSD8znTNAY7pL4yBHftqvS8",
  "key14": "38MzpdWtUKauXfHJcLtMbBBH5Wba5Lonosrn8fJQeZxWKC3DeCsjeypU8dPYh17S5K2amsEk777QWARRpMCyqQ9s",
  "key15": "YZHMMXkoQDS9dpGvwbXZBHjHWs5EKqjrCcjH7zVfhzDhYQ9zpxW1C114xkawNux56XqNttbu66hN2wrcahQPayc",
  "key16": "RdoH8gfvVVFgj5YrEte1kfpSN4GGDPZVmaBPatvyncpcHjLhAr4EKtvtK4tYseHwjBHksERHNuDiZXG9UAYvPcV",
  "key17": "3s6U9k1Xn1JQTZfe9mbrWN569Eo6ta5o17S52p9LESjkEPLwCAWFb9NfabbjWpvEz3wi4zWktt9cAz9vXhsJfENU",
  "key18": "5C7L7uuY2DkhnqHszpoqgqtVvyCqjvXYfkD8CfzAEDyQYcnyg57w7vJVeDXFYTjC4dELE4Mhc6JhXbCokNUpwYU7",
  "key19": "2iUm5SW25BS1P34kmT6cfdNaGQE1AcD4hxsSWvNxVWAN1itDkD4LK9s1Jf81jCMkPWdGeDLZRxMVXf2xa5MtKwrJ",
  "key20": "3CfhPcBqf8PkjM3NtpQhVuSCMaKMJZfTkFGcUb62Lgv1ZK77XdfCzEMbfLrvmPZyocrrHfmTEpkXftrsJJuJN6BT",
  "key21": "2MoKoM3k7M62qkdnAZ4wKPQvSNh88CcsCt5mo9WhoN5TqPiTdRapbZ7yrMFGZgVjkEGwKzCQpQWA2y9vfj5R6eAD",
  "key22": "52CRHNkCRw8ooApccZAdU3Tf4YKbrXrfAC8C8HX3jcssnSCF4upHVvGrRxV6gAg9CcCquiutZMFnTqgrX1fr3KDj",
  "key23": "2JUunuowq9jd6D6MW1bFoVPg1WjruQbczqbHicsgw8XUmxuUWsrzCs9MTwezVmrYfUFiE5KC31tjX9BnmPHUzM8t",
  "key24": "2aT6CFh4KiTCoHQCiCQvBoZoKSbWJ4FoCftdSZ7KaAEK6yW73NygS5w1iazwSANNdhNUjD3qYci3EZKCpjEidHdy",
  "key25": "44zVEvos3d8Ts99G3EJ55xiV39XAHpLcXsL9VcxmcBAcXdy89V2tzGRCVsntxjCgoNB6oRvGmw5APYT2uWZDPgvS",
  "key26": "3B36HBwsJSvWyURGVxZkMD6rEv9Ch3pwjVcgoUP4NSBuRHhzJfkPAexi5JwsZpmiWm7xVccqUZMW5DMmGtJKifQ",
  "key27": "2mrVQB7qGHSXheydmnwnoq5CVt9PMAk7WX2cWW8Aj3VoHorknfrV8u7zQKUsyH9pQxULyhxuRumQB7BTs3svF9kD",
  "key28": "3Fr7nZb62oSHtQwdC2g8uMEY7kBZizJi8A2bV5M6YvDUbC2WivCG5a9z4VVB8Go88jwUAa1uqz1FEgHZFFgikrn9",
  "key29": "5zAeNLMUpaGYMLm5JYPCDnQwbGQFMGTBjm48s9ek4aoC3KrUKG9H9RzbzN1VyD5jTyjo9NeRXVqiTdy1Z6qKr2Ue",
  "key30": "Q7kNhJnXDNGcBDNio5Wx6SWYQiiYEQ4Ei4zMUBUB11GdGm6wy6MNmG68zxkcTnss5WHNxzgcfAX5yfwoLDrbBpS",
  "key31": "5fMbk8DZ17WV9TV9xuMyWHALSgiJLSzDB6xVf7dMCkXSiW61xNU7dR7RzWFqfsc9vpa9AHkYDmjPRCWwp7XsmQdv",
  "key32": "4hXWiKseK7DcBcXct6umGPGUTG1Zxdb3zyBBbh8axxLPjHjsY7gBq1ReQJCaD1yZT1Pn21nX8og2eowYVbWSij6m",
  "key33": "3qENS8iZsmKDaJeDMePnDFnnakHXpU3YA7BC3aDFitShcihJccPPQQ5SiquRhnZ4ze9KbN1uCTkyPhaXbfNtWxfa",
  "key34": "18oETUY7tSm1fBbrQopzLGWbAK9uWKSPi8mDQmFCPf98WynyMveWntRo2cz2SAMdu7kkhpjAMCLJGE6yJ6PCV7u",
  "key35": "3LdX75YSybh9dQGHzudT6gua6sxV5TWezdiEn2pgtxX9DoTsRRBDt8knRyPyavgWJR3btGvVMWtW8A1Cz9uLQyuZ",
  "key36": "2zL4Tf85GPe2XrigfXBmBQA2f6CYvt973JN6B1gdaEyugJbJdVk6AsHKCT11PbGi31mckxQGtFmG1hzVB9W9ifsQ",
  "key37": "61mkXos2hv4Vj9uAuChnLwkaJvPeoqnxe27DNNoLcV7sWeiozupM1FEWDaafq18vHhuWz5A3gGdFWDzpCuGP2Kqt",
  "key38": "3zJWdg6bNnM3njU2Dnrc9TnXyVwDhLYfFto7YaxD3JXp7s6sZGrPyNfJL4VPf5wUBSWdnxWNpexcZEApu3KdSN6m",
  "key39": "3YcUUnsN72gwYqfiVZ5Sni88SWhiqajYEfGpyfMP9wjZRsTk7YpyC85FkVrA3UEa7SAdGVkH4bzUWov2PBbJNZnU",
  "key40": "4RW7VeVHYqVJTUKRwZeHLFhLPLbEbvgK3M37USfiFSe7r2ePrk5TnDpaziqiSFyvSsSiEKVZ7GBz8Uf3rafUX62p",
  "key41": "3tCZQHifB1bMdnc2cEDJHy8KoZPRonFGy7vU3Q8fi7wFwiZ3gVrS8N3CwoVfGuMwv8uFm6beKnTHdAv4Vv4nQNYp",
  "key42": "54wzULqU3r57SP288nRoF2A5dE6EowG2TrDvXsyjxNLheoeToJgtMU8p3wxduMthCFu8wdTiMceRCQmxDbQE2MTt",
  "key43": "rhqfpomnzzigedYqL8roPUVFvpywx2Ve68G7tKQbfea4YYptYvQLtniK349aX485ritMJ3C96v17kBeJnkUPVNE",
  "key44": "4zLRGJGuh7pFEtiYJ2Mkz7EiB1t8xyjDuo1GV81YSrdmEHu3QVqBG8tpzzL2kPi6XNKEVKqymE8r3eDs7bo52ei7",
  "key45": "WEzPwdk1KS8KwQtgxgJGoqqKhuroCqPmcUBKfYbMGgaRkSZR6g1JkYDTFn9jiU3k4Epa2zS8tg6unb1yDrHERq3"
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
