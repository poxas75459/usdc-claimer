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
    "3XtkWwobWjh3VDriKiAwabpGuxc73n8uM9ZAZFeV6orq2buxXTnu9YqWBkx95Wx9g9rJZJU1XuR4fCwTX1khLdd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rw6UeCevCtau1DLeU7QbFpAeeEBBijbhqzCEQkbDJjZ8XxjPaJHzAqf4nkJBEvPMV7QDcKFxhwtbM9wkAEArKvQ",
  "key1": "bxz5xDe3cLYcZYjSBCrSUfwEqD7z49YN8FZ4f7fDmC6M4JjgCaW4XUywiW8ULwuMz46idYBoBCgPYBTC6cPbhYS",
  "key2": "4tWE8N52TkJDLRY4oRHDZ2wNfWZ43MxcsUPC1WuWdGbHTACE8Np54m68hEKhQjU3zZkeZmcqdqZcrGwN74JzfhJn",
  "key3": "4zjY9pmRoxGrof4K3JeGUDWkFJew4i7oBUAZvZpDAYtk8eYYZVLzYL8HdgHa5Y6NGHNCMPcDmLATAsv4hr7VwNpH",
  "key4": "LrEhCZN7rg7BBfu4DtUamnL5EtwoFYo35B5T42JyoAZeDHcqkk9PVtvFs321UJvyd2WnBaqgXuYJu13NsTHDQ7B",
  "key5": "8N5CyeFkbDZ7jWek2eG8pKfiM5ApDGcYTJ5XZUc5DjKkEy5jq4NaRne86ep7Xjs91SvvXiPLdXPFKiCYEdMQcJk",
  "key6": "3amjLYbsuDLJ7FnHAkmFpXBqB7AwPNGaVYKgN3N4RZ9Kr2rPEcViUqhgTDewgHvtRgv5EFrmYdZg2APpjRq1muXq",
  "key7": "5on9EprEPjd4ttCczvLnTzEtycvPC1r2svAuS8y8gfcZFq1NH36GYpKpbQFHBDtcUaM5xwg9DJpkfJruFzbABQwk",
  "key8": "8uGTEVM3DLr91Xu4HuW432GJ3mr9Vwdgb5i3rHbjcx8RBSAcApsQVRKj595jj6wmUZLkdtBMTdvbCrU696Asw7F",
  "key9": "4yeYhCmHW7dJETnBjqb4Fx79Cwma7qjcfq689J3EG3qkUMXo5Qq7J5t3ZsQqkwsPK9HZC13EysRfW93NU6hWxUtU",
  "key10": "277KSEzvTD1vmcxPpkMHxfUFcZZZu2ZyFXsR5AZgfUWZxsUzRAkRFiYYCPRcTb33s9dUqrXCU7jqDVrH3iugHPTG",
  "key11": "2jQaFKMSvZzPhQtis95vEknyzE5DFiK162jizBcm8ERZwehvNDjznNaECuQeKLUSceKJZW7htTuNjgv9nXYuYqHt",
  "key12": "N1wJ6zSbCKQDRvvXR2zGbf3MZjQNo6c7QigcXPmHLdHoGEWki5hgrBgD6hFqWStsaKXQCnaW6m1eQ49XePtEPjE",
  "key13": "5m6zHeEJedeKagNX3a2ZRdXBgR4QwLgRNiiA7bSNjwe8Q17zL8YhVjTFi7KsNRnR8NyVGhY8XowDze61km5FacY1",
  "key14": "3xSfPttCt71NzELmoVsobvhyGYUbk9qm37GvFPgfQZVK3Fz4izif2cXYKujLJZ8TvVHWhDyUbvmGbsvSey2cnW6W",
  "key15": "3p6pg8Rdtqag9eYfaknym8oEu8hrGj6Lir88kx44iPqk4jYwh6ExG7VPW8FLYDdHS7JAVTnQ2E7LteNFvSmrYE2o",
  "key16": "2AhhFgn8uaDgrZVN7V93xR4UBK5JY1N3ExDXbAXUrwzcSdXJ5gyh4fjFLF3jZDabSxp4FENZuDKjqU2hcM88mqnW",
  "key17": "65wS1TCbUFEPaVF2ik5V1N9S4hCz8sxgKZSjnLaex9vKZTFtHRznoWmqgTRgAQUC8F1YnA3XhGFNMT9TwMZ4k9hs",
  "key18": "2WsFarSDbXm2mm9Bt8qZrH16ktEgEwAPJ7dyGArGzqsbmz1nRvaobhQHcXHBbFhoJivWiv9b1Y88Yn9jQ8euKucn",
  "key19": "9JqrAEwger5A7NWncQGq4e5K9Tf6wNGqo2fQ9fwULigNzmoMViTW1WTwaskpfqEiqF4GedXJQM4je87qfPqwufH",
  "key20": "44KXwVjHHUHQ8juopxT9ajSUzCbXyrWF3LGpwbTAWZs9zkyHcVbcjRFKfU2uPvrf6k45fL31veGDnezBV7yrtNsi",
  "key21": "4NiPfAgzsgJX3BxNiikpPPh21pp9mntcLoTeWgkzGSn9wcXriTtib5S7tgxTTkh4UQFwUyeY9UAwhFg1jeTiUBPp",
  "key22": "273Vh6UBa5x5YsDKu4VipEuH6me3QajBSgxJurpSuf2msFCepxcns36aDR9nMxxDYsQ9zCNxVsgxxf8Lrksr8YWR",
  "key23": "ttvVC7cQUdqF66JaJvuJ8PJWA9ENJswJGtB4DXVgt5k2vWp6Z9hE9xhYsYqLusHznxHC37vHTZtweLR55S32qAR",
  "key24": "4j8R2dCJUafofjrdYsniNgdwVWGY6BCPhNwqmEibkMsCfuEjzdi65h2F6ktaCAPKg7kmCXZu21Goc3t7Z1oSuFNU",
  "key25": "2YeeU1qHa5mibs6K9UkY5XYBKf3TqovjKzXhoe7UHF4hgnrbeaPFBjRcuGoTafJR41tePo2zcJHdQ1i2cTC9eZGE",
  "key26": "5dLcjwVpsbhDkCgRcDUKMjoeJfo5VDYdX9x1GQC4DnhLDbzVDdUmYD6a9DX262XxRa9Vh6rReB5CGqBVheVrtgfs",
  "key27": "4XaFC5oevgRp1MDvtQYBudwyMMPcnqZDgLVbW9Vqkf6vxsb9Uozz9EUxDzgg5HqqmkgKD9ieCA9svhUCdReYgF1P",
  "key28": "3em5kbZGqXwEX7nHTR7eTgAUq8JM5LNYxie5AUEYdkXFoHJ2gph9VUsCGbsgVhpcaEV5suW3aFNN6A5fD3PSggpe",
  "key29": "2NgM14bSKYgS6fWmRAh6vGeDPWTaUAz5SAcm2s3CVUkLAjsNRGiufya7nFVrmU5gQSZix22wqXH7RdiHdSusFotZ",
  "key30": "4Ec37KAunRdULERF7qfWsc74tRzhRD2VmDrUwVKnVFrHYEfNTYpaQYXMLLtAV2byfCJXaAd9xeFnueZzyaAs3jyb",
  "key31": "cjvV29YRmkz7XoRC6u85WeeXz5S8FBh5qapJrq17VJjdruDobQTdbqj6Q6LT7b7Uf8umCvUua3Em5FZ4MFdaV4E",
  "key32": "4Luz5b7DqBXjJRkfP9b2mKCccPCzRhqx9n5vMKMyh9Ht4uLJzyEW2RMrDYNPdeJNPnyFrhHjvq26hZaotoqi1J1M",
  "key33": "5H8Xse6EbC796dMvcKV2wAD3R4fq1ScKM9gjqrUS3e5mWFwVuTVgfsdCtyA1di6tYXMpbiee89mtmtWvP3vuyXct",
  "key34": "2bdJNUv8LLAWU8pBXb96WuqTPMGmJYECMDHKgQqwjH6DXSes9sd1RWiZLYEMCFJQ1BpXwCBLpw82sk3DxvZsxg6z",
  "key35": "5Au7Vs9SuKXaiaWZuhKYv88dcFgtn7YHTC1fiCiyQ6qdfLHfFsnQ8o5FqCKAKJicLJ4Ao9oyZcBF6Pmuu9gEnSi3",
  "key36": "4EMiwCiMLnQyphsyg1KMLRAJvRUt61qB385F55nmjR5KRMeUiTzpJsLVZFo6aX8s9QSd8ymwYfECzqcpSGTskzxM",
  "key37": "5juempNH6gXnHhB4p3cVdVvJeKshbfPCHfKLWmNscaFq1tgJcxHq4ojeQLQGqJ6BmBwtmjhKC3c4n14Mdm8WiL3b",
  "key38": "XwNinUQ7ULC76jK57h1VghBfVyTvZ4Vbh84DeRuD2hr7XUAkVgryQbj7iMKzJnzghirzaKAkoKEWRiLYmMRFpSF",
  "key39": "5NKDzoprb2DeSVCxshvB9DC28d66CS6ULFWy5XF5TuYGFrZxGn1E48vcbtRxVf9ptdB9D9xRTiaVEAmH6rRYbjgq",
  "key40": "vg5rGJsbN8wd2MYtACKhBjUfhi8wyXZq3YXRrEvrjYcVfrL3chyvjh3cLgXma3ybAToD2apmZ6vvT6uFcTTTbr9",
  "key41": "3VVJn1nFStKmjFKp6x9USrd5Nmj2ahiwXsxDgpFHpfRaDsCxmi34yYMDGXthbKjn8WCeZpnms3GfzFevnsthYkY5",
  "key42": "2Vjwzi7sEY8YHg666N3h1vfcpE3YmdMwt9z27X8nGANX9v7q64QEW68vToF3ALoNrMozL6RcosuvNiuNJGBTowHq",
  "key43": "4DcYczFinGf35rHDsMYMyEWSNiWAmrKB91kjqL3V6C4Xj2kg1iXb1NmbHqyGYPo9yqekbpm4sQd3M1Smr2UtwZTN"
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
