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
    "4SER9dFcZBnRMSxjxHtNqr5j31w64stYaAgpdBXz6w85UWhdopzw8cLBqs3HNpBBEG2bpzzofDnbZt1uqhAwBf6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nWm5hupCXBzB9AJwmctoRP4gManMVFWaEwieyNzk8afHXbmn43AwTeMUAjYoTgUFvoug3DVfDUoeGTBPP9CQ1fd",
  "key1": "4zNa3bDFUsgwcde9szmqNrk6UiPk4TDAS8SAsJnsUK2ZAM2jeWbgV8XAcf7DR3ey5h3Fu7s48uWWdSiENBnwMhXS",
  "key2": "2x7xnYXicq7yX1EAjqnKWhhw6QYybKhVF5Q4QoGEBD3St4sfjew9meARSwhosLx6QVJsRmpusF6yTzVJqPwLqg6h",
  "key3": "5PoRf7qyggeomv87RYFgWCsqf7BJwbxWo4b97iViHj9Cj3BHPMDJiij2eTEmbs6WpW5uRRusCoMyRgncrPxE5dzi",
  "key4": "3bY5Wa3LfdNbaZjsyVGrBU5onsWEev46E69qjm3ZavUVeahpq9DDcxNi3rvfe7wpfDMntthC9E6P7Yy8SEZpTchy",
  "key5": "2zsD523xwotZ8Bx5hAQmGPoBHs5oef5XgaEvDxvZo1w5vfFovKXY51AQvXuFrP8uCQtnAs13C96V39zJUoDo6EEn",
  "key6": "3G9esxXerxNJgCDZpZPrsk4nJ5aZfiSJ3DRHanx39zySzM2UhLErXbAR1KHfKjrtFWqQhhK5AKhhvjA4iKvmA5Bv",
  "key7": "31GYAmt2QsM2g3zuyRvK88a1RKCwzuYUymvXhy4bkqp37W6XpU4rFshwZ2khzrrJ5nqDfuc5HuRJSwiAUS8f2R27",
  "key8": "3BH9EaRoTCvmpQp1MrzoDSX8m66DyxEGTmShGZ8z1UuaTmiHB1DyJrWQmr3c7QjFEtGycrLpnN7DY8psRqpF8a34",
  "key9": "3RL7k8SPWeuBX6vGZnEyqc4HoxNKwJnkYFQ3sYtPFxDwhYAkAh5PLVjTVEi2qK93SR2uLPqodgPrV4cSLMKtbkL5",
  "key10": "rieQPSpbqPFTCRhCycUbET8XxLY7FCEBHLYyiKxJ2D661qLDz28aDgXDUAjLH5R8SQsGfR2uyv618HGwdFS3WRr",
  "key11": "2saE9pG2MFB6ssKSTFcjRNJ54p4NgvD9Gssp7bwpiG8bW5pWstWaAyEaufHMCeturBhB4hL6srw9JGgfg99fKmZz",
  "key12": "3ASYExRMYMB6NkjVzcBrdfpbk9rTbmw4R9bkFKkShvGN8dME9AEyQN2q8jTfaQpwmamJvdEMKfKs8Anp6LPeYHXm",
  "key13": "5zSH2ajywK6RgV5CSswgXuvcBEPuPq8QPhmNiKaksoJFVbmXujPWguqjaXfehSvAke3JmHXZxymAqBKhZERd8ZXu",
  "key14": "nMasW9tE5J3f99RXLsXD5z2GbSAFoWHvbfVZqyAb3idSeCB3MtjTYPEzu3MzcvThVuWXjKWvKkoR3ax2T65CuGt",
  "key15": "5NZivfnVcxc1tnYed6Kaytef8x5CJm5QK1wqxybET9fs4T4aekjtnrcePZoYDYeu4gHdq4ytbTqY4qyZRVyYHoRf",
  "key16": "5kbi89bzUGRzSJD9yMx7nSueDyJMyjDiyyFKLjgA2wU6tBarAXy5win7Qp8LtxVigTkXptx7b6edPLpunMbPiSnD",
  "key17": "CebFu5yf1q3Usbj72P9qfq1AjSmUZKMtfEqxQpbhBPTotksnHGtBdZBYGCFJEoMoi2FB49sarrptwVybiqZmK8h",
  "key18": "4QMj4m1RsDsuJUrZTQBmnmufaePUJYVUg76v5p92LWY53euN4SzMH1TzJMRDHdkunhCW7bh3MHdzVF9R6FrC6baF",
  "key19": "2abo8RerXXwNRvgghBVrFqWtGtCSupV8pm2kXXCjbX9s8RHygLjzsS2EoPJAFWJrRDFvU4uuNwyBHFvToC2qCY8q",
  "key20": "EQuJQoPRqiA3eRd7GWEgzJUBA6Va299RcacGZosTvLSyq1N71EfoaZVV5Bye4hxrrUp2cVjMdyuib4knVoH1gPq",
  "key21": "GvCruSsho227T7o4HajRAorUXjLJSTcaNHEvq5CTWq9qBQrP73BUDYgYSdhWtMUGPetYfpmKtZpF3vGnK9ZZaCk",
  "key22": "5DbXnosZ7NjTLZazYTBCeJoz9W3WHZT9JTxEWqoEqZBgijhaQSm3dZE8TGa1iwKJ918cDyQFMGJJVLDnPZB37Byh",
  "key23": "eg7611U4nTyaGpZ1NQSiWcbCvmEF29vRjRY274PE7F67idqTffnvbFJH51UicABCnma7FsTU3Ev8MNmPYJnGgPK",
  "key24": "3bSeF1LZcCUp8k9GkDZ9MVtyrFXT9cwS7SPgMSgMhhe5jMt4dWeuxjzknoaRFV3xZpHJYrBi576XTnk57e3R3ywY",
  "key25": "124QUxv5ipzTvddPsWsfSeiKbePxEQHXfN2nrgnbRJDjutQAfWFtYou9FMyX8wuRshYD5Mrx4RTYnhCkeMXWpWRS",
  "key26": "2mqqDiXSkDrDt6cDXS5jQxpkRKgTFjrBR66oDfb2KeHwxq7URxtdUScrE8VWzbTQVXp7idV6rhkpt8rE4gvA7vBJ",
  "key27": "4ATEowHbbZNXoYihCr5HsXQKmvopcgTq2ZR11nmaAGDuhgAnZScxeeagZKmcW5SmR7i8cfTNM6oEg1s75H5bYiVB",
  "key28": "2DNXjhvvrVGRgkK59xnVnhxvQwFs228UxrNhSzUHyifzPQqupWG7R6mr1eBBJxTf49kQTPh3hacnpjeWCPxWybBZ",
  "key29": "5wmk37maRZVJeBBkNwDm3Z5FmXLwS1yF6cagavhqNaHQYJcy1n41MDDHnojsw6MbcbTbK6TNNXHkbjuYV7Pf9gLb",
  "key30": "5si2wnFDgv6o7ghJZv3GeoK5Rm4hWu3PKWsrjkCpn5od9BdzhbetpfCc3BhncCCDUXmRRHzctzPN1y1QpSaBTovW",
  "key31": "5Po7XChoTYBYF6QKDD77rMztC4QWB8pVsXpGcnkYTRn7z6mLTR94whmuCVNecZDagSGBHsKtxq6ooGh4XWgnaHQJ",
  "key32": "3pGiRNPecPM34KunDrPKM8NDfo1T8caZ2Y9cHcMRfXZgNbCe8QRgGmcY4rNqtGQw8qbygheUKNg8mM8baosBcWB8",
  "key33": "5AS9594qzcSP2z9CyUZkacicUHHnYRyU4m8HXK22N7zz4TdRVBYv1rre8TM8HqcwwVusPPfWm4TXqKKJCAghteZp"
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
