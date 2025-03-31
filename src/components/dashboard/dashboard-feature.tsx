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
    "5JvWfru6jr4wt4RQ18ixBhKne2GxzwWHkQHoLqLLGkb7TE1ZVEYGFj5PmrqVfJPdEqPP16i6rq68kwwVzU1md6rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SHoEo2oinmQnBY2PJfKKSxLvNrEbtofWHCD9DHVAL8Qr3pSwh58vzGqEyJUj7aSE9iTN6Kbt6U33KSjy4fjn78x",
  "key1": "4AL5SzW1kKJn1e7D4Fm3MjPrhsn54433CnoC3cx99mtv4QNHGbTVBCiyEzpc3e8kjkszu3kxPu4aiAFfKpM6aGrt",
  "key2": "3sUgd36mBxdRZSTsJKx7xyidhiNEQf7AVqjcd8UfoXSR7KF9zFcHNZc7vhZ7foH1MbjnzZqFkKWaU1eKTMX99sFS",
  "key3": "42dYoZKCco7arCxMDWANUuEuB6FtrNEJbTyYnt3TDhtohrLf2n3NYmzUNTAHztNywbepK6p9exXkSstA42vCUi3w",
  "key4": "65N4W9tPGet8TtQSYmX73j1cfvoDXqYu7z7GpfrmuSVU4USEsg2Bi129x6DJJtUSbwF273W4Qaq6MAxWKMuEHRUR",
  "key5": "3doAajComUfzQeN11sTuFPs8XHEEFiFK74eTd3nJkaSNMukqw8HfaotJLRxkZRsuRZxcBuf8yosZvu846hzej8rX",
  "key6": "3DrDw3ZRvn8Wf3WjCC1AeBoUUGPnKpat5yAu4amKaxGsSBh2ZSB99rBpkRKkYQvzNhLaSiHu78ExFGxgbuXHbAAc",
  "key7": "Hfxj2ppftBtKLu6YHHivPmbH6h5WvfELruz9BhG2UHFHkmEp932Qh9bx1aAhnSksyyiWWdTFtrz75vDenoght4f",
  "key8": "3ddWYCu3F3FW6abEnu17hAuoeGTrVTLmb75som2nDBbXMFBWgHkP5EDYdpWgQsnTrShLkCTC783mmuBQv2NR4tZN",
  "key9": "26CB94pktSuMxFYG4Ki7mLpXTBesyvwXz3prJAJRqRWXirmJRPGP6V4318CzL1QpxWF2oJrUXjokF7EwoWyUUfHn",
  "key10": "4BkbSvmwVJMJL5XhAwW1uSBiWqzPGzDE2oKw3uMF5AgYHxj9iv6vbu7rUGTNxiqG8HxMz78fZSi3vPJNyWQuXr1g",
  "key11": "4H585KrKCoP6bZHvRdwWJTCr1ehF4TVtDefjNX9rQqLFW6of3CC7UcGyZqpRTXccxNXhCCjbCYnNxUkdb2eHQV4G",
  "key12": "4RZYQssCCMbtmYYLPmuqgoz3fHRTrpDtVwu97MVMrPf8j3iQJUZT8u56oMfGhMfQVbu4bLCc7fTHYtJNGu68krTw",
  "key13": "2AQKSfTQJxchTHiZfZe8JqawGm4WxP9fJsqgjhtbHsmBq2W8Z6ZsdDjA7CS18SQghgEMTYdenbhXhZBHcQi3o68y",
  "key14": "37y27DnW7tM1TLZsY6vqSCbmWnG82tRnQYg9BLqE815qWbpy41uFF5nbEzehcdzyQuXBktn7gpV7CSNAzRo5jumC",
  "key15": "5r1EdGCY3Ju8TP6CT6cyxKNSEEXPz1WMFqkV7fGzVKXKtZutTJdKp67vVCPr3n5iDFoczWVd9FjNm4cXCdWxADf5",
  "key16": "67k8VBNKx95N7NePbCheD9osARoyKwDeyFZiBSsrS1EoFbyvvCNK7Z38vUHgDbF23q4T6iueAxECFgXDBDaf86uy",
  "key17": "2Uhw6FDgjekMjJ6cbC9wfB4da4JWNTU2fgPEXCfmCGxkvj5PAgRn4jLUxkzXP9nVxkgYuMA7X5NddvdLRLkwKQx5",
  "key18": "4Q8u9jguZFZwXZ2sFgcRYAZPLPNYHqekewMFMXCYhTWYZvntUpyMpWSbVPXCpXBJrVhs5PnhVbnorueV3yxJy2c6",
  "key19": "2KomZkpMXZipXKUt3kMp2UCgfdAiEXJkT7kKtDXdKjeykNpAXCrFp4hth8xq6qrPmNZXa2UtXj5NHj8Rt5x5jtP3",
  "key20": "5QcTE8XrbE2pZCXN1e4o3GBwRSYSUCx4takWjpPqBrvdNaZBPFXGGbxe196APw9Jzpx7qBgvvegSdU7eNeuxUoM4",
  "key21": "5efWaHJ5WhFRbHnmEwHpUFQVmf29iPUH83j6Qvkv9dNhxjr7LTnvBU2PycoaTrqwivvoiehBcKzb8KFqriwUxs2C",
  "key22": "5gPBEpbQfZNpfVBADDTyRq6iRLjhrMGsrLSG8E4g8qhbMbLX5LHv2AqriTm6AzKTXWPQmQFEH72DfS4HgARPkYUf",
  "key23": "3ZeFZHS8qbaKYXpn6FGJYqv21oapiYEaCsefKFSD4U7h2aZU4tdCRaWbguaBPbG5QtVmd6VqUnPQNqtMPryxpH2j",
  "key24": "5bSWfjedM1vX3LHypQfgTtevc8S9WHAZ1C2hnzk79pHaBaHxxBeM7BTYMAGzMRZdrbPM9y57SaRW13anj4VkUvxG",
  "key25": "QdegNeaZgCSDsAer3qmsoZSgz76B5PH75Bg3QJm8Cwo5Gtje1jPfBeWi7zc8vABEGtioSWef9epu4LMpLeVJh47",
  "key26": "58A2RsRSmnYug2XkAn7bKh5gdPEVP2LLwaLXEvYP7vLD4PVqWtDHMeh8VyjWowwmZQnKtQTEFqCoSuH1p5SQ7smn",
  "key27": "5trPTGptEKwof6dfbfbfMNDNCJZuyDppCJ6Zqr6GijEhw5aP3kMQdTahPuFqRwmQmynSdCNamdQU2z3bkL7R8wFx",
  "key28": "4wXahZoLsTCz3pcXdYH9JvVBj14rbDJ7gYc5f7dTvprsF7XrKkp4i85KVwUaeNV1gW3PWwPaaxHkovHVpawgCot5",
  "key29": "rgoyfgeNuphbQeaiWU2FLetyAP5TxGZ8LhmvkqJYqhszSB5f6CPpP8fZzAM7V7Jep6d9DPQGQNhjtD5CjoaQ3RV",
  "key30": "3NCZkJkEp5y2nj8vAfT6gmv98Mrhk4fNaDfQHSF5FN5SGB4WAAE9QYCe5BehV1XMUHurSPFEyFMdp5X5Xr2x2xdp",
  "key31": "Pi221jLtpz6CPJvakkMJ7P2pz6ZYY8XNJtNrLxcXQ3g6SjBNLZsdguzPJprPmE9wzaD4koYZ5yA79s81WaMxxpE",
  "key32": "2JVpw4PP1YoxaTpXLEx451eJsaeJwGbFybLEAYFoHfyesg92i8zdo3nCLafNLgBx82oxRg7mqgUeRFk3iG9KwCmV",
  "key33": "63VwjjZaohJE9WM9RyLnSrRo7wM76KiLzrQee1y6etbSh857Ju4DcnQtwjo7uhBCBGiFR2CDhr4kqHBTWPLWuoeF",
  "key34": "5RJUhMYMHmZvwSpdQQcJLsoBBGMDSjh1THwHPKL4uBFsbnrFm9B7cCwHBEmkRcdePYrFmLhjbdpNLpAQS4kphXmb",
  "key35": "3py8mG2FCvqogyCKycvcJUG5r7jTkAabUJtKh6ajZgxuurhWybyaE4wJdvwARbyfcnhQTuHXrs5ogwnz7HmSMMUU",
  "key36": "21vBqERqpCBu5ujCXTt1MDt48XPFLqYZNbGYPT3C4dea6hR7zF74k4XnefLtAA2rHGA5VTSejcJ31ntS8vybUWaj",
  "key37": "5su7fctLuGrvujRcAoBRZ4J6TMyGnxE95Q9wfxvmJtB8G2yeVdxtoyKxURA4YnTySMJt6KCCHvCha1fgU82kTAjs",
  "key38": "5N81Eq8YKw3ywug8tszm7g2WcFFAduWQnNawoB4RrTqsNZZkaU4r7SuKaZ5BygGNyohkYbXRhYF4YkRcyPyF1wNP",
  "key39": "4HryCqhtgehpdgPMo3qFKmYpqdCJnwRc84kbWwbYZNpCj7sf4JBXDJw1ucb3gFaQSxpV36NXdngfFnZaaib9ZoVG"
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
