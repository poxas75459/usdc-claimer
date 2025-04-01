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
    "4Zn5JzPCKtaT6qHxnWRGsc3bs6trRPQRMLRqhCetGFrapB137PDMSkbqsjhfGBBuxLnwKrteHhCXNEt1qjMt6c1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f26yD5rxqUq76JKq9nXUehRw4B12YUERtqNcDiGyLeXr6VTAZGHjsM3QVhTKYiFFLs3KQVbrpq4SNJm4imw6SK9",
  "key1": "VccZcdJGAW6WFbkzauMpZq4VCrteTf9zQvGGZQwB1eQYTgprJtCSjuWuQPH6j1EmVfSBW6Wwz3rYBZWzY2R2bfc",
  "key2": "2he8qTrHv4TzPJQxpZqs16khpiYB5HjDqJ8jYK6drB3PWs7ZZVcFzn1FPZj6XMjNNSA5A8envNUmW5z5e68MQwr7",
  "key3": "2sZUfPff12QbPh2h1dPesWaXFkkuYtek6zdMJu6k2Y5jnWnFm9cnwncvtiR3aY88s4rhqUYLLLW2NuZ5Cs2HmAC5",
  "key4": "3kpH8KGuZ6H1kmz2sVCmdspL98GfHmXgJPcjfQgL41geeyoeiszhguhqFRy6CGK7QTohRmefZF5rCtnNTcedm7EC",
  "key5": "GGfyN4ixAB8qKhs37PqEtqvDoRBTCfe1grJ73zpS1dLmmKp1HEoRgJyat2qjimzEstFmZ26m1Yvodp2bNK7hVyN",
  "key6": "2EdxoiqSHDuMtTspeyZMNR7CswJVkeBxXnFHP88hJCjKr1jQqHwPfww2UMoVmZJcUkA3cd4ekkSmq2vz4yN3ZRKM",
  "key7": "3356XyDb5eDyoFjVCvGgUn2sEacQd2UJkNvPsoWXC9E5pqR5rcFXY5213SkjsTt3crxiz81gQ239o7QksJm8p6Uo",
  "key8": "4HK6yHdFM9qRGaRuThr2SMN8ZWVyaFbpE3Z8VRnKAzq5FCsN2qRk7W7mcsM8FGqbMuQDcG4iHM2QdNjkrSDwrFdH",
  "key9": "2SSkzMS5pNV62ET72VmxnETsyfUCwiYeUHVjj7sypbqayjxu34Srx2Di9x7QUnzSGL3ebcfco45BQXanoHZoJ5Ra",
  "key10": "2VF47fB2aPTC151qbJs8nbM1o24EqjwdwSXmwRVDzHoCHPZfe8yDMDhHZ8JacSkFmpZkC4xWsjLvcb4kWMGVCA4",
  "key11": "51VtGpeNjNRoge8FjArJdL8o55b2HffgWqa59nYe61Gk9ShsuoyZwtEWB54Ui8RRSEdS4mJyxEeZaLw4rk7GRGKA",
  "key12": "dMYru2cJ9cHGWTQwvrd4G7yuhvGWy2UnJPhZ9XEVziKdJGt7Ahpm4HJWNnep7Jx8PFk8joQyEd5WaMi7qtNNnkt",
  "key13": "XA8iiaGcW7qFm2RtDqpJYecWdMen1fTxHPS5rYHkn9u5411TYLdivUP5yGAayqnZB6D8QEcJBxS2W6R8EKR3gkE",
  "key14": "4AnymEoWk6a18W9GPmU7NCuMPL3qU1bgQpRBLL42jPXkcUUbbr4obKS9Atj3wLbGeqhG1QknmtLubNjG3HDQynHD",
  "key15": "4gjft75FqSBNuu52wYAmb7Xq8cXT9eGpCao4cWrBpsx2staErRYdiAgcYxNSVrZUcyhZSe9as5ur1dv8a57cxxn2",
  "key16": "56SqMUfprdDn9nck9XGgFgNaYjYdGpwSFEJcq9jbHzVjKuqAK7qwBZ3nE1vrCrZqSrwAkaTHaSVDwQhYcyFvpZNv",
  "key17": "47Vtw3nJTqCpVrXCCozJTjL8eK4HV8GbNFz5KhF5EoyUrp7EReG9ta2qQ6BPpMc7WRALuCfZxxEHbveFG8yTTSdL",
  "key18": "5VHay64TJumz93xUqdaKkJDjj3gqcocw35Kf5qqjoNDSxK4LeLewf9N1TduQeZt9b1ZZ5A7xDk9JHCWJVuVRGY1w",
  "key19": "d5M8G5xCavvbajRCAi96CCud2LDRoNLVmiSCCMQ83ARzpLedWtMJXanSQoAWk2PMbj7sYbgvVJtAkrkXNNncdRD",
  "key20": "41mPCi6zQirWYc3Q6nLooiwsbzPYA79eMz3DsS9LWPT85LeLbyXwzP9C5ADGu5RkoeJDHYPxYpQ3oUvopZCbjbHH",
  "key21": "3ZrTHGJ2UF4bkziSeqR2Fp2D1fPT2tm7vrHpsNN35jKZGysL2erCcgqqz9Q7bMyypvv9if73akFHe6oVCf9GWEHP",
  "key22": "2ZH8sMVXku2SeT9QmXMGpDPrE8xuSWRjetfVr888jRn4pKnyEtTsgGDrA1sQTQ5dCSNeDkMobPJVAYA59Z5p97J1",
  "key23": "bCkvKSatND47QeAzbFkqPLq85yccE1KkFG41u8gXsgn7MdqqD1M7D9kRoEckeH1Vs3pTwxi8RVTBuj9AftPn5PR",
  "key24": "5quCVMazGQvmS2f6qojePKa2mycPCVAkUGqEYyL83gSxQZFx6uYeJpJaDaVgMH9Y38Wb7CUqzmU2HCxf4ij2xCVE",
  "key25": "5S5yBFq4QWbHge8AYWJXZKJZ6DnYUjWo9UdjQkSGYswTksipui9pcP8LXFLbnomJK717oh3JfJ8PLLXv5ZnFR5pA",
  "key26": "4bNYbytk9DWPNJE3qiFA3mptwYa4pWiDeuQNeGvn7y95Auj4EpM5WWpT9eU6hfxMuyoJvyP3U5RQcY7TsHDkr2iE",
  "key27": "2RTZsGV66iTMiKWZhjyaLXZZSHdKrRTbrTH1XihJ2sRtEH6gddsDzqDqDZc1BM4Rvj5VzXCQQvWL1H7YcQnmPxXd",
  "key28": "66UP1QmNGvj2d5gH4wZbTNb7L9nzrJDa5QDizbgUPpM4sRZDbGdVV3qX7aCF5Gp5m862P6YAFwNrDx7Px9iBYtTN",
  "key29": "2Tei4inz4ifHGsB9FpzDeEfhp4GrX8SyVs7ZDCP85uVhvwE1uZKbMwtqXoxoQEbefy94jkgB1CYoUVGqGqxYS2qe",
  "key30": "5hHKpkGEPADbwBVB3fNfphz7t7P3GkgmgWZBYAcVBwgs4Jzdj1ZPhJxAXXViDNxZMridaAzZuAPWmr5KcBF3wbXy",
  "key31": "5o9hGCR3Lgp8nA1QLoeqBHqWN5JJnFtwUBJtnjdeJyK6S4BD7g6imEjD7pR7Cv1QHJjgZTd1AKek9cdTWiGi4QjL",
  "key32": "5nvACxQ554BebZ1KfXNhKFVkiqpARGrqJxmzzMrXpHUFGYqFQ44j6xQ1fqMBRA7aM3vLtUt48fk3nc8M6cNKiipv",
  "key33": "3qJEU87hZzNXHrgLc5G29RgWWRAmQQp95JVw4Vz26BpqVpWWVq7UMRbdRJGMVoTP49J9rD3Y8WYL49VN6GhAeEvR",
  "key34": "qx9RTJPuE559sAMiU1pvUHDigz1ThQGTVRZKssRrqAxAicmdJCKeGbHzZKwtZbitiWJGj6T1gh82EoEpkmoAqYr",
  "key35": "562XR1N3ciLww2sGDWdb3igjpRuEDDXbrfVcWjQ1bEjPeSbTjD2FZ6vsvfbMQXf56Xwcki6YPNzurt5PA17n6uMY",
  "key36": "3gVbQAerec6ohqNXpSLvWjX69zR2MQ1aRMdAXf6xYxofzARG4LniFjypUroSLdCzqpMtjTvJeNjfQKSwjKqBc7a",
  "key37": "5pxMdgRo7BezogpynH46ke6UNRo3o5iYEmuN4M71zCacooyPYAkeuuBbXLYEWwVKrh6sTZFY6YfjPunUQbmQWDYw",
  "key38": "32kaKUMDqFgoffGifXfhdNhdeRTut9YFe25L8dban4ezzNoGiHQC7s4CeSHUZt7ktgLCt3q44efF2dynpbzWwidf",
  "key39": "2LnHDcEXug6Kr1nNDzUGF3WkB8HeMsc9qdyWd2ubwZWNCRqsMs9aQY2dULnNDTXSrCnd9bwPuyZtzM54cGf469k4",
  "key40": "4sDtDPNePzu4i8n63iCvMCmvEwPSer1Cag8KPvpyx3oQJ6R1krezkzfB3ffZnViNSXsYXUVUo7iFBZBRWtqFNMYQ",
  "key41": "5cy1Kkc4UEVV7mrGx36a4AG2L7BY35QiB7fcSHeJfy7n9JeUtD36RAw83Yb3XSDecxGRokJgXoD3gTzo7dzG1wmz",
  "key42": "Y4xYSBGXd7mNoPKCaRENFLPVemXxqBBYSRDNJtg6aeqDwJRKT9dMrt6mdRPHiTGUWtu1dnhjYkANGTMGRiapViB",
  "key43": "38h3k4Rs4nwXLr5tPn8raKioSvkk76JmbmUuKTxGWa8WRSqcE15PyM3SdJZVq2UYtEcr54oKPF8aA3YdgJZBX5UU"
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
