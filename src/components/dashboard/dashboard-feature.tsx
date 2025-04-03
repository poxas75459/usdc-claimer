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
    "MfhUyt9FbxwvM1oDKRhfCAWiDiNTE3tn3TknV68fYfvSQsGYYDafr5dAxkTXo2hgjFCSxWkRP4AQDSjPbCp2NKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u4CycLeWvMXyWi1E58caTVbA2d9DSzmN579vwMqVyeL6sjUmanDbXmqockqxtmFjsz1sUkikbfDGXYQ2sTuui7S",
  "key1": "4xe2ZMpJmeDcDcD1CtTY6hUy7T8bjADFbnadb8rPXiAnhXY7oZGeDDT8rggHuaRZmMi8EmLYqsjDgWMygeCVRkCD",
  "key2": "3dJTzWmy6QrMeYeb43AFd631bd1PZaWRgeWwzww38W9KD1xYD25MeNhMWthMBLFmkTvCm1LfZ5FaC7UgPgbkBEUy",
  "key3": "5ghQj8Tbfg3t5cxG2bFMAnXanij8y9F79eNViEJbMmYnVhQ2GUTqFZXyN6V94JdBsJAKfV31DTmnN7FyYErKK1uy",
  "key4": "3mZkpmzJRTLhisFWSjY1R9Cp4KETU91RfjvVUppuSkD98QAEm8W6qjHd6iVeeQynj6MphsbC12bRMz55ke1i8EL4",
  "key5": "4oLAZdzytgbBhB7CeuSw3vw5pbBhDshpLvEVWC6681vJbXHRRiF67Yu1tR4dJyf9H5VBdZ1fisSRdP2RdNQik76H",
  "key6": "4Mo76Ce3VAAggwJqSYP6ECwBnkxzwqfJey87WgxDYGaY6sFec1ci8R21u9KFU9p8K4Z4MEK9cg5Y6zhkC47ZBGCx",
  "key7": "dFZnm5fRveXBgrdfz2RDYfPg7akSjuWpMFSALSh2tztMp3wn68NRkAf2GGMVgR8XaUTg3izzjsjVGCjfqqmpLd3",
  "key8": "49WWbnFk94arcNZ5oxbtyVhDY9vbY3UNymWXNGP3oWPUPiUq6fxVzMZrJGVobFcrmhTpTYPVQZf9byryWKamrUbw",
  "key9": "5VHWThVQp9DjxfHtYrzLSVjZbhd4dyEdG55WJtg21CcAGUQpNEKkY4n4J59Sdo8GEp42pC4yHpLGL4wPHUD6Aodd",
  "key10": "5WPtraTYx6e5p8UxYcaNzFA3kBWq9RmVbrdgin4G9P4qZFNYSr56aFNc1yZqNZmhRifUu7fnUh6YRuEgcN8nq5AT",
  "key11": "5VrdLYzNdMAG8h6gt2taG1EkqaU3ZPrfruzAPgC21hjPytgGoX28Xf54M527a2Ynx789TGXwaFMu1V5avzFgkMST",
  "key12": "2tAUnmwV3gthAkuKWUHPMcCxLYwHnGqmpW7bQPpRVDQ5CZuoVAQtm2ypvwWzzexzC1emevGMFFKKsjCUXtMN6AyN",
  "key13": "2Yy8JmynTe4EhZ872L2rEpHuBGtDvmJi7FjWaXf332uS4usoNPHwQgotVKnRUhUUzKabgcsqKW6L2Spjbqu2FWQ4",
  "key14": "339xid3Sp1kpp72jrpfia4xCxR9ghiCwJmXtSZjE1xhPt6W1HB5xCTjK5NAnnWWjxU8mtBy6QDWCQcG2ZP35jAgC",
  "key15": "42eHKCTMD5uwXiHa1koY8zp3HEkzQ3LswExXrxtF1ic3BpnUqMcU5CbU5AZ4b8EDwnzFnr6mJan2jUHtyDr72CjZ",
  "key16": "3HmuVXN3Apt3SUr16kyqrKZy3ALVyrw1E23TukvkXfG1CM22y77rqwpN7qmTAHmEcbukX4EYWRcoNczH3QWepmbn",
  "key17": "3okVmTXgkkCWKZ9RjU5vMhme2V9sME44spEzwa7DjssEEeaCFRbHQp7QMFBt2wiU3SGagS8tRkDCRXTTiaw29GrC",
  "key18": "MsyrsAZW6MFqFWUpfPgcjiknmREXz2jWE4nLkfgzbm99T4Wd5eXfyW9gwnvre7gdtTmeoX23Z3KRU8GQFKowe68",
  "key19": "22GND2QxzVqtmtJJkjPjvEUZovArrPBpRxPY433sKRkvCD5AZX9qKQ1hodyCa4YsDsyWYr7fyJdgQWJJsudJ3rQG",
  "key20": "HLSSTTKnvMtR1YmpLjunCBArUSo4NbKnBjYySRf3vy1SfFfGPmK9Sj3qDswxY226Rf8FC1KSy1nPyR86Nq1GErL",
  "key21": "4PV14Rq5CxoU2VzmeFqL6jzVGHRAyuyLb8BKm57w6yz1mG9GtqiXQn1ZNuWv5Taceryp2WU7Lk9yZ3Y1CrEw16kp",
  "key22": "3SvND59WGyN1YEYUgrNPD9gitVPSdDtNTokMYgSvZ6TRFUM4z6DvncVXksDMWVwhGbWAPo2iYgfi66awyRGY23A7",
  "key23": "9jEPLyRNqtbPAEjohdKSoV66uDB88W75CjmbWEx1XsKmQvw41gKE2JXeAJvq5f1arQLigELtCiyWxfsZYNFXT5d",
  "key24": "H5ztyX1zih5AFcgFrgZ9sTjitCVqg3dZ4Uams1SnatbuJL5csoKxdnnjj8T3gyR3SGttcCPpPuBQj6EAPNK9Q7K",
  "key25": "3F4yRfmAwp4wf1nwJ9B2oENG9ZoFSnYpkEarjKJPPvRruTxzqJ85M1dAaaAhQx3yPBpo24WxE6SHQB9W7CvSWT4T",
  "key26": "kWsYzsspgxBah45KT2ujXsHpFNrSWSXtxpmNkjiZdHnCxMXdwd599g5yeWoHRoq5HH56jdBV93hUgaVyBDXdBJE",
  "key27": "4UfEk5c99ALRaXN2t7XNmyi7A7WPjJ6DJqUxN2bskPiLohiQ2idWKaEzf1vwYPTP3B5H4L2yNEr3QiCeXGe96sjf",
  "key28": "MQUimVNAkqHBG1zcMZJUfaCUq28uaD4fLL55W3f6kHbBBv5EkMa934oHUFbXhULnQWE7cnAxbJTHhaAqz9u5gE2",
  "key29": "2cr62ix34aGT8wGJPEu9qt6JQM5SSstdtBLqCCdpRTqkHnjAAMH9dxjkTB9QQTmJJ1KgkySQXWE8Nvc8dWfJJtNZ",
  "key30": "36w9CixUtgU5ZrAKyrfsjEJ8upm1a8dVVApgu3ba76ojVjG8HU12xFLB9SDGpomYtsxsFcWcHkrUoQTz1mgcxWqw",
  "key31": "5sFWZgBsh8ZmVEUhwQhyw2SqYVP6fNWKSKqnr4NZZxjMrD7bD3rNp9uL9jcMqesTzy14VxiGVRG75oZhTvKD4ai4",
  "key32": "5Uus5WykyBpuUx9FHhHuwkQHkm6P9UqvwqsEzpVekQZhseYr4jy7CXF9cigx8G9JixaGdzf1SfoFoAyrtBMAgqu8",
  "key33": "35Rbwz77DqFRQKzC4nmX7hRG8uBejRs88ZAVW5Us9KD9QXCKNGFoW1E9XCt67UjtimgJMiRCQ5XRNH41TyqPg8ZK",
  "key34": "57KWm5sDq3QtvkNjJcWyRip7TjnbxyPmdP1ohEvKJgKVRW2Web8RELntbTTpviMMCXiGX3BWi73eAwEgAyjP8Dzs",
  "key35": "2ErAoq2XgKRjdLLyP8y7pgRPLW7J7GEiLcsjFc67o6s8ikTkUEULBX32Fh5HeC4fFmzFXF3CQCNMN6EWf1exNtKi"
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
