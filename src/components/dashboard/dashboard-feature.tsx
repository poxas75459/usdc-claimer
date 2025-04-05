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
    "2XpXBvEWZQLZLXayTTGiSv7o73TqAFrNYx94kWFoqKwRzSx6bBWEPLeHx7p1KNLQ8xxkzH74kA1hxM5Pv1X1Bbpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ETQoMGeVKYab4bdmwxCKdfzDgafFxcWYgunYUxdSoZWSrzCKmRoAWVpSjAPzfsVvuwNuKt5M2mSNCEkab2bkvcE",
  "key1": "2YCK4kHe4Jva99BDz7iU9LDdg2XvNfFnzNnHcvdKKoekuTyE45iZonBuDxgULdefTVabKz27NEeqm39SM4j7vpff",
  "key2": "53SqqeppN5zkn179Tme63VpVp5aFhmuJn7MqfsKoMr5EpZ5VHnQ8Qr74vCbcG8ns94DAfEmMPqQoTBwRcd3jzKC1",
  "key3": "5GkZAHbj21qJFpTy4VHS9mcWQL8vZnDiu6mvNHhNLescL7VGEPrPcAPruN87K2t1MctigYh5jZJCjCxs98VA29gc",
  "key4": "2w1fm9owPc7c2w4WPBLphq6Eb4KHi73EhTLcbtq2qBjCbEaQmEBjkLwtcsKCWmkX12TJQePzR8T8Mt43XCbSSpNQ",
  "key5": "34xpGy4fooFrRPF9onHPMGHeYFE1WD4PHhBKhc83UDQWZk46hTXn1t4ASEWZLeksS4brbW73mX92pSi2wL6fFvqZ",
  "key6": "3M2FYPt6MC9iji9VD1Eb7QaqjoSrUQhrF1aCAt53E3rGF6nT9JzbZq3cCY3aQbxp9AdNGY6HdryyPBUwoYiazAMZ",
  "key7": "37yKEQ8NQuuBP8rGXxrBRNUgPrTkrpnivCRCgP6x9HHx1cm2fHECNjumc7PRBei91kHfFxSxgrSstgPMwrSxiBEW",
  "key8": "3WE46ws7k3QFEgBgtMMrqxR4SZ8Pr2ztwDJnyimFn2Ea4hprr9WSxdLxK5Jmw6KbtGeW6oqik6ZdYSZnJbA2DyY6",
  "key9": "4h7iHsNx5FUXUNDgjJ7r6pXQ1XdSdSZqRubdfgGZfaNGHw4Fwp3HgU9NJUj4Y5MddNTPv9fZVqEFu1Wf98T75tTE",
  "key10": "5UTek7iBpH3ViDF6AvLiWnF5CtVMTYyZzamtqWgqoLGBJW5mJ8mNZfXstgiTBTm4YTPfwESp4xr3VztYyy8gUYcr",
  "key11": "51jMBG8daLLX2x894q8USWJh7sJRmtjRgn343WhUMxxr1kucApqtrysf37BdDzCzAj7V85YmM2Asqh8ii2e9dhXS",
  "key12": "4GLzvKfXUH7fR3QHZ2dHJyKzMctrMh2K3oZczwudnB3iFujdXrNiPxuVU41AL4mocxfU317txg3J3EvmSvAMZwta",
  "key13": "3oxbsBvG72RwXaX19Xi5z5jACeBALvsvC1Ujz7BZcvM3CMehZTcpfmpSPidoKxTYMq1pQS1QUCdWb4995fMNwuWt",
  "key14": "41H9M6tzxpFKd87LKdqQBkgd1Pme83jq1ij3zFbHP4Ha88qvL7EQH1LZmnhNrfWFMk6toPVfUf2MvzJAURvb9sYG",
  "key15": "5fX1A9tGD2Nbp8dLpEzY7oHfDSsserq6uQiBhFbvAru5uHNZwGQsMpt3bUebgspbnkotjqT9sweXUAY7BNWE1SiG",
  "key16": "4uRRKSsmWyhs4VNrudbKySycnvGQcmhAhWbFanNvxFPP6KwWYMGDCYLHD4UMeUHngHkA8XAGZg3Vgfz96KPrjpvf",
  "key17": "4LXkiSmRNX7rRskZXxSgMCTq9Xbt7xs9Ym2jQsYT8MwvEtmtqPY5vT5UCKjAiMYVi1CUMqHjdjzPQGiQQ29qu6wA",
  "key18": "3AZ8gGNUmKXPqv3d5x4sbELQzYsBf6kgHuGKi2EZsQRW4dVDeg9cjozcsat2zsQHJfviTFC2Da5tQFRM6xqmpEdo",
  "key19": "5dSDM6a9xDNs6TZRz3wesEBnnr1VBDPD7xAx5oDfLTsQGeRfw8KNu99aKWAXrdpvuiaKmV37Vuz8f17xqBZpBaDP",
  "key20": "5eGbxWoTmRAGoEfm3FPFoLWF1MDtZUZ2PYPapfi6uR3Z8BvV2RcBeKdEgZteJw2UiGCuxY6ZTB2LB7q9zTw5UUWB",
  "key21": "5VnYkLxxD7w95y264EsTNSwpDzQVu5FPigQFnd6d286EL59turBchMd1wGqxC75KPm3LVDK2fWQgtY7jFwk8wGzF",
  "key22": "QLEg3pGaGUcDLdsoVspNhL7bWdQyzKt9Vhukrifg2UMnueAFPVDpFMrkGn7ySmDDHYBNboouPkPKNY9WF5Ex4BV",
  "key23": "4Sad6rFcZYiCquee1sPQbPhA4cgw4q9LimpZHVwSozVCxGa7dEsMUgFthsuuW2qEweYqHNUtchG9w1WuhEwWS9x5",
  "key24": "2rW2ZNJ618F37c1HPsoRwKciHDb5JEpvE9QLMzecBPoAoCWdhAUrwKAUMe69fETd5JFyV3GrCQJzznYVR9v7jqCj",
  "key25": "5efpC4L1FRvCNogok28G1A5izE3KixfoRZABPAJMcXwo7X5spzkjsxJAx5JASQEjRxtCAxH2bscCX9GKB4qjr1F7",
  "key26": "5PaJ1yDsfk7D7S6su6XCQwvjVRa6tRmRi59pp3hEjWztUjLoa61dLw8mMtuHdmNcUpRDqxnnCEXUiTebMX7saUEz",
  "key27": "xoVwMmszcFYFGEkzkopp4hArtRdsZJFaZUgMZNFDyXHXDyN2apWgasF52Czdci14GVKYgvnJfG7SqtTX9oUs1fK",
  "key28": "2QyGohQxjAURp8B85AD945gzMMW15D4ShxGhYkpKzb7EWPTGF86tgc9DD6fYUvYjA3vi2t4MC83ubGb9Kvzs8GkE",
  "key29": "uw9JZP8GdH7r9xEU1FZeDyor9M1nmQdsx2rMCPtmNtHPyLToCiSYNewaS9feB3jafdRjDVEf5YrK8UAkZUikW7r",
  "key30": "494cNKykbShZWXRbBqeq8LYDjrngJCaPiBnDA7FPrD9ZPGLW3UEoQWgrb1LXXkdmDuLwv5FdPN92U6rPkgwPChaD",
  "key31": "kpCAdWsKNRjUGyKfZhJKbdouBrYds6ZuH9G7yjJkLGrQVwpY7oBovhNRemJP7y3Vs2JzhG3amzFysbNV4xMChtS",
  "key32": "2Wz6YAqLHMfWNY8CiM47xSQPpiTLKbLF1LiA2F95WvcKAinb2SGmxWmtt7LH5qyataX4g55DVBRKzQ9vYoC6rg3c",
  "key33": "3Z5wvrqANrThUG42N4eTjXue2JiUrfLt2BFpyeVPsJawFbMgEN9JZ9Nf2jwrWisgth4q9L7rpK2MukqPPTNdTk6c",
  "key34": "xiRh9YY6GoEZ26cBnXQYgTf3vtNAh8SbGPvtD524BNQ2x6WwvXGBV2w1Jy7JUEEm3CwR7RHmu2S3sQP8X3osJ9e",
  "key35": "2MrRMm2JQA1PACfvrDXn5HKTPP7EKPwy63czjtXMxxZZaq8XHAoiwZ181gAotJd9RYak1Mqe2h3BFUJujMMC6yjj",
  "key36": "3v7oaohjuUwaeTNTW7h17ugMGgMnX3dCo3es7yRcrkmVyed2STEfGQJgMwSFM1vhyt4iEt2oGpjRybRJUCiEoyjQ",
  "key37": "4dsTRKkj5hLevnxTFe169gGTuZZ2nT2ecDh2GB27672s6gkA6g2xsp7gE8K5PWrHVqH6cnyH5Foew55gWLekJVAB",
  "key38": "2kRv2MVa2C11EbjoEfMnyQUFoCWYFqiBgqMH8jcMe4hzcUKLPTQygBqCAaxFiZCEGmJLDo7R5rQnJcce2RKe683Z",
  "key39": "3yj3JZLYNzWFFziqtRGVhPJCdU3wn8rG3j2TWQkrMUrbHpennDmPqtarfefPTR3RRpExbDNr7TNmSRzcNYxQ8MH9",
  "key40": "4b9jXyENkr6FBaqu48d6GwLB4PfC1tv58BeMpcGwQNjtEUsSp6Qv9GQzshU2vsLF1ykt3ktC2YWSoM11BVamFZeK",
  "key41": "52V5jRb3nNqEKa2TWCF4hHikNdUJzx4aQUm7Cdmw9TiUQxF1JeGs8QyRfq1EBaTJBmvwTM6y1zQqwJKGaEYJ4Bnf",
  "key42": "4n9bNuzMecFetoLNjTEGDok5LjD3i6eMgMuPjfu51DR937Gwass7BiTMV8Go1nYHetNpTMX2GgrszfA971YAbAzZ",
  "key43": "5xAeU9TQGj2VgLYduagcA3rwfpE6Yz2kCVRoHknCduG6KiapFrVG5Se1NmBzxD6bnTu5sMFkXjq8GiczvG991Fmt",
  "key44": "5HFArUitvUvQVvzwa2ZNLGexqmTnptBuherxQbVop2r9FFmS5nkwVwkjH2SmF41yXPhrJ493vz8FfpxVZwMaKKa9",
  "key45": "3w7dj2GXrH6QrNz48V5BVf9wWjNfdaYSWYLFC4TF77nReMo5KSG36LiZZnfmRp66jCdK1HPAmvay8bhmM6YP7vbb",
  "key46": "2pPxitZRgR5YMQzzNChXqniZYArHxQE1vt5QFRRVTWC5tzEuD6p1mNwnFBZbj8jxYPbDT8NPTXFqDZDvt1Sf4UFj"
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
