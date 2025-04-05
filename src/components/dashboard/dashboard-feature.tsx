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
    "3cEczvVKTgtmwNKbxg3JGpmuxJCAeGBKCdHhJwDqoGWmz5fKgpWetkdE1C4NR5biTD23wtUdCJPRsr33UPpopiKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44vMW2sVe4caoJYDiaWFGUeK6VZgNrT59HHBush6mKaHa8ab44k2CMfq4zAJJwCi2pbHy8fajCYvvCaYQMo999wm",
  "key1": "51HFkD9BfMWVahcMCmweycnXpEmdRZkEjSsfNYAmbMhZ3HZtpernP3snempLZEJtujcvZCAyFpEkxg6UMtPDNJqi",
  "key2": "5cganre8T39x4Kp9qq6akDV73diacCrGF18SpXdb7XB59r2NqLQBDyZNqmQngJ9CKsmdk8B9ucg1B1iyst4sWit8",
  "key3": "4AKhi9WGm25gEPZjzserLfF93SEo7HMSE59y6n9seNM23StverZYk8PAq4K7oM5jb2ufKdpUq1VLikMegZPeTDf5",
  "key4": "4bgnGdeUh8P2dsCBQcW51xzzBvJtk2S6hrL9qgM6iFp1wu4MtyqbUDSWBaPGXDdyBsHaj3FMRpQW475V6F49A2o",
  "key5": "4aswcZ92izUALNaq26hHepAMxw1qGGKykUX3XnVhYKDwSis3iE9EUVdd2NfsxQEKjxzbSiEAw8JhtduC62J8WWaf",
  "key6": "2hcurembVrm4ohU3ztRqeR97AfiYBnvGyPeZmbaY2vZwCZnuvgkUdrEYkBVx4aodtngVWYKs2MxQ6mvseRQMV2h",
  "key7": "2y65SJeZF9bpDveSNnMcUH9fksFzPtPXwP8LVsrgEyJa5hg1zoRrCZCu5GqTjVTYW1RxiNguDoHikKYx1VdaKSVP",
  "key8": "45hC2wrAWBeqbFkuFXgKXvYwPiMtNhmYmKEF1YrwPqG2CrjMVErFR8gp8dnF6pvAS1vc6Kw18Cw31GbWgJNe8sc1",
  "key9": "3w3NRCn7m4sCQuLZvq9KoBMmDBC77tpPJG8iR6EzUv9UKwETkSgwxGipB62ajU1jYDGQVtoLchhKMT7YUbhCt11a",
  "key10": "2wCvrifFE1DKowT6FPr79WEgGhdLYPtsFmtP7JHBJ3257LufMCYHGfbMwWFkyZMwbdGu8GzA64TM9TsEDbGTidfe",
  "key11": "2hbaRDUrvGSyeHuM1dtJvwg15Jb2TRuT4RM2697AriVGz24waTgxsksmy9KVCuHZmFDKtt1u3QJsRCXPRSAdPRV7",
  "key12": "4pXzvevFzzJ5RFAXSWqoiQcEEbSAU92iQyoofSNSnZ2knot4Ba7ShQAkDfRu94wJpua1x8FQdR4F7nCKPeKRPt5s",
  "key13": "8yuXgfnyMFiPHM3Mja82Esm9Cv5M4fhBreC3xNzKDrSn4SJgRXxod6kCcCDELHcPf1Mn1MGkYB1tLu5azcjYXhC",
  "key14": "4uPy9zEfWvMsXhyuzmDSSyKa5cbbRaFkiJLCjDn3LjgiNqQ5M47WmnzQCi6UjuP4VrekRnvuEa7YHKUjzVrGcAzS",
  "key15": "5h4JB9DuY5NNSZEvc8tSU2pNnkoqa849KvPwakAEUtsAMN5EiwdT6SjrKHapEH6qw3qDLMNE2tzfjW7JTATSqAZH",
  "key16": "TkMSJ4AaFwc7cV69qpFjV1EGKhumpgxaV2gmBR53CTaFaH6c6zAW4Y2ULiSV3UsCYNgFRKsNaPraoBKtRNjTcXo",
  "key17": "YVgTeEGS6w5c9suDoVKUNENdBbdrnLtV163P8i1NW4w56AH9SyHLZ3CKaY1u5dHTVXeVRGLH2ZWEAtRc5U8nvdu",
  "key18": "5N5U321uuYZHSTmuHhwWNbA2JkEAhyv8oJFSuWu1WqE5zqxEYT2WVWoKbq86vYaYNfR22P7KMdy7f1BHd2sYvMnK",
  "key19": "4mh7KXfw6s4UCLuHdxA4KZtmQMwXoMPePLpTh2Q7SQLWFcVMcTY1DRdsSs1aUPebGiwH24SZxtwPCuady8S5gWbU",
  "key20": "2XAy6HFsTAQ2frzsqpmLAuYzSj42jf7XN5E6TvJ4TS1ir4AkquLW4ciUAFzn5bW19Fiu4AyRRFbo6WsgHqkoQP1C",
  "key21": "2xXz6zXEA7X6JTGaQHQW8VJwQJuWw1S1J2WYPtyvFQehEFiSus8n7WyogF4UtWKqerC6MWTzs8DoYcRTH5VySdeK",
  "key22": "5tEx1GR9wJ5UjAuLxeCX7RQCvN6X18wq9uFAjHheVpWzxBD2DM3v8PKBCHBRA87sXso8hM4yuwWaBN5EwgJsQRfZ",
  "key23": "5C9ZUbNnJ1nVZEG8yGqquikzeX8NK4e6QKWT3J2YLd5zC5UbjPP7WSf3NxGriD8PNDe2Z7ogTaaT7SUqEUhkDctN",
  "key24": "65GuajvF2i84D3FU8RLom7czKicy9Puv4EC7GpbgZiAkBSSCetuH86mbgEE4sMxyZfyV4STjFDzTd3SzrDmUVBP3",
  "key25": "4rauJs2gJf7FwFRdU5Xe8QYx2HnnUUySRrY5HJXRjMJzkgi5t64RhVTUGF4nFPFtfZVnwVomQqp5J65CqMLidpzb",
  "key26": "5SUusJ9Nwhx4xExZUXvX8uv11viv4ByBCLtJc1QZFYv92m4UYgz2CXeHT6wV6yMJTu8LUeQAvv14f7aqrCt1rFMT",
  "key27": "t77JTtWzoZSKyA1VhvA8mvacxprxuGwNNF5D3aRZwb8zjfzM2aon1ydzDiPVXeJmSnWws719GWZZRSdeYYm8aUi",
  "key28": "2kffWEkLoSSxVP3VMgvTcPPvTkR8jn5fcSnJoyoEkMA2GQqZeVqZmWfU4QAUE6FZ5Wui6qzvpqjfWJ4u9yE8Y4Rj",
  "key29": "4VU5mek5wJdw8tZuhkwp3SWJWEErTF3JCCcjGwDP9c8AWdMzB5nXRq2foPVktrZr3Kiism4QMV4cNdfL2vHnrY5K",
  "key30": "nUwX6eS23oVNaT7Cj6rgipM75vjz1JM4gE3hVFeYAAhdiAeZW8NHZjnR1jUddkB4UzvhGvycgWRNjYKArAf2yPL",
  "key31": "2MSG5wtpRemmtBqkHvGKootByrpB4GkcMW2oJmtcDdQUeQLECSb64mAtM2TENwDW8o8rY9CBjhMY4Mcvbks3nZBJ",
  "key32": "3yWSNy6J7s53gzV8oVPypjKQG29KVhj1c8aFcw9xVJaanfA3jSEQP35mECHKdfHqg2muzzUcruWhS9cjznyKma7m",
  "key33": "VCA8R6kwM8utfpo42vHtdu7DcRCAoWPgM5CcH2UnyzN6MniqSAgpUKnzTTchhZH2joySYbgwf1vt2SqYdUXmM3s",
  "key34": "2wmfCqkCKCrfJoi3BBBEJ5etio9g3k4DEAMEM4yk87zsjjqPmJWdmM6muhS7SnKRsMkQgBigkEqWQGRD8beBhoSr",
  "key35": "4UBj7N6NgFgXcZ8asfnxv7hJyHnqkNsUun9NbrHZsjoHK6rufgcjbT5TYbbD5mMC3aQS7R4ucz45XUFpg5cHctp1",
  "key36": "Mr2HoQ1bjpgZVxiuBtNVPcB4C9BfrWcPSWk9zzXhtKKquAJZYaBPsB4UrSRBEeZgejkgM5F2DVmks2reVs5ZmN1",
  "key37": "ep3wUcs3STrhixde3momyBbpBWogs2dTjC9P1dKJdoM72BgnLbjctoMCKokGmSu86iZtsi7TFCFBKeWxeGnAZNK",
  "key38": "21tu2bgfSipfboNiGA8YDWCamzJQZypeirpuySTGVF5PrGMcZHWnBF6A9NSeddvqrssgdFoGGXPvTd1MnU6rpaV7",
  "key39": "2xYBy2K9MmrJHYczhKSkzxtkewvsPFGSGji4H2BGRfeAMq1pG1uyRaZj6C9p3bAghr9YiDtGZaNWZhHYPPYEQq2u",
  "key40": "NiByD4s4C9eBLcbZin5BykTye62oJaa48yFNe9tCBDzgGKJFz8tTmkVgRSEUwJnvCUYNwDz3813n8XYXdcgMST3",
  "key41": "5HKXT33asAGSpmZXCzHidirrNouiRayZzSRqMvKNvDU7fTyu2eiqJhA8WYNYu14k383g7UehqoEg4nEnCJi1VNso",
  "key42": "5hdH6oE2bhT67JV6Zz7BAWUgYuyw1RtS7meXLxaNj3jgEF6it4XA1q6sYFDFeEbPjnCt5Lw5zLnyL7vD1Z71JG6f",
  "key43": "3ZJF4AEe6ndKPsjtaYq3Y1moF29UoueqK47ueMFsgY7eGFP9ECjjWC4RUWoC7uAqXPpKES4gS584wKieEvVDRqaq",
  "key44": "2AaXAedjTSnMb8CENcSuxTCaJfoQsjkkDRS2Up1Y3Ep4MESqmdGQK6bthJUiy2ytu42y8szvBSd5oqtMSb5NSoco",
  "key45": "3QC6v5kjS2EsbRBpZWhzKHJmgk4DpdAnxRj3uERWHJJg594aVFvuD6Kao2cUWjenqWoT3virJaDRFmTP1M16LJ9H",
  "key46": "4b91Hh7d6iSA3oFEWyBZKeikgKhG6C4a24EmCtcYgjSJGikcj77QyPP3bKskkkmh4eTm4syBKqw3Z8viHTkL6BSZ"
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
