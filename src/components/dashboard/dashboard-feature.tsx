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
    "4jzq92E67EAzK4yUrFeDE3A9h93kwQfAh4T2JXoMvKf8SL98UKjsJtyrTiuvphcSFGKZ8pFzyHSUr9Z8w3ggBe1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x6LRQKHgRbBNFxMC8i77sMk4qmqhMa5QiEkKGoid8T93QmSpoCevK71AKGkqXsijCSpFHmSyUdFHjGqjdsuARzK",
  "key1": "3oyPMAc16Rvicg9udPNkMAGzcRn2cNfAXNb4hhCLJumVg7JXBqDLuh59NAVmKWrcvkm7HZGnhVgNYY9yHyhpogAH",
  "key2": "5kEGiAwrbS5Ptbsu8xh5eN4qvbqqS34iQnqowoVxVBcrifuimW5FzsLtBrXaQoGUcxQ3erCxorbsnz7qmWzNbYSP",
  "key3": "GrpTzEPRUT6goLH9YwyU8GMZ2nKbYqbFm6JCuTZ5CGQwuMQS9f1kRLsmz8heqoyQfvAUQbHEdXfkymTpvja1cXX",
  "key4": "4Npq6rci255Sc4rDsJZXLce4N6gwa4G8GrWho1ov7RGAyAfy5tcMwBd3jM4TB7n6H53funLYrkiGUQZrhaTRu9yH",
  "key5": "61PbfA8hy5EG2Y2ykxA5XFK83uwXYK3it7Kh672yeZgqVCH6qVHZBJkMwpg83zpbCLXKuf4DumgpKrx77RpoYfB1",
  "key6": "2ZPANgpBzzqo68mszxw1iAqn3maWL3NtV37ysrAeFvbCKrravcJZTyYubF4yAnypBEZW8txYcB38ZZVUygXUjpNY",
  "key7": "3kwNKLdtdeNjKayJBPNVSeUYAyqpeWC5n3kcGHoELjVd6zV3tV7AhvaDCX5kytzSGSsvB6aobE2pADWbFYzkv6rg",
  "key8": "2DPViPWszmM2iCnseeNeGr4PPfUcvEaceTLGhhfFLwmZsWd5ze78bvcTPud4WSeSxZqCz1Y2jWQtjgRn7uCBUPAG",
  "key9": "3eJY2m1QzzmwuF9JP5kxq6xQajJuazvQ9mPe2bUpVnTV39Ft9aLP2bqb1338mTR4FB6ebMTM2uxNKb1cubRc6WSi",
  "key10": "5323rK6dVPQjqQw5we6QXjGqLa3GL8GsNeaVi6hhi7Nwpse3qEuniYLAWEuhQ3NFNL1xiNHakwJQrCiUYL3zXSRa",
  "key11": "oiztEw4GEq9kJ8KktiqR62B8sVGwsC1tsppcsPCK4DEK34V1JkrV959j9gyVbgFRrD5Q7985f6fd21Z795S9zT3",
  "key12": "eo5Ljn5UWpeugwEMtRmjZxyWANWv5RsMjs3bHQvYPasnW8tRjBVPLzP5V2fvhU8NW3ReD5d4j2a3Rvb5WCW5A1t",
  "key13": "x7XRRpEDTayKTVJsk5C3VSSkEuGJjkhV71zMPM5rQ8GT6E1YDVNqLxR5uwEXZPkxCh562mP7CPfzzXTj32sQyZi",
  "key14": "5pbecbnEeYwK2ZGcLMESWW6xXLULgUPMYjkgvdtzjyqEvHd9oZM3489zLK7nDztrfMhek5mhDdwsTrKAN6YgNUJs",
  "key15": "2hht12sA3DEWx8w1K2YGPySwEYcGSiFwvzKSt7fqN1R4QLnMtPQ8iAsbXj5GnA6BAG1rTrfkh4DAiyHuZnJydJ4c",
  "key16": "4BmV393Gz8XmkyHSxJE6cNWXWEtnzKB1eYA71zp6Yjf1trrNJZYuZQ1jFmEMhLpybjjmJTmFHeHbikumQVghfgSj",
  "key17": "2vAaRubhyML98982qsP9XGyyjJC9NjVbLf9bN3zA68FdAjPbGbFiyccBcyrL15eBuPig7DsMVnRc8i6vUF8CKuNW",
  "key18": "k9UQkHP4ka5pVNcrgnEYfA7z7kmHG2mjnhsXvXpGhdgQes6ruqAFwu4LURRqTLxwnmGYZEaCQt4X1EFwyoSPYZK",
  "key19": "QCr1PdgtkcfhCvWcadjM9jH8mqG21B3SCB776Fcnjy3gXSV5rZuuafKikMnyQaVV98zx6o7rXjmHKD4HajWRAR6",
  "key20": "5QV6WX5KX4X9XEVLk71oHopMxYp2uoDZNES9qdSmL1Lt2YjxqDetmESqPQfpTomZG66iH6RbkYFhG5wybei2Wd4i",
  "key21": "5TUupGvhHJP1Tv4UaZc31yEoK8qWEKBRzdJqRJr579j6KN4BCY7g81PbPsJM5sB9mNtuCogwRCyUDPj1NV35GDWT",
  "key22": "vDFXVBwyZBUdiLx4w3euDRo3dgXAMo7oUebMfWpEFL5asZaY3P63aLqzLwwrCSRKWah3w1ecC3HR6qEmfeEdcqD",
  "key23": "4BWRXTP7CxwiudwdDGWDpLsypC9BBZQqSxaAMB2EtJfKj867FMZrmSmSpChykrrBySVPNzWViFKNJdTe3Nrgc4wJ",
  "key24": "2AtQRRUzSRTYJbCtHWqL5BHPfwN4AegBhxopksB8a3V72Fz4XbkZnXAW7q4KvmccxmhDHvqXWYmp9P3aqXMTZSwM",
  "key25": "YX8niJXaKmb5baXyyUQC77x6VxpFyQKPZytzbfehbpzCafkYdzDvVUFjv3Y2FS8FSAYJHuLrmcuso9JamC8bAUQ",
  "key26": "2nk8kmikMfSfb48TRq2bwcMnf5s9F8Po6Arbt6Vkvy12KGRE9nwNipFKPkKMNYMaASksaqVLs9QvvChikhYVvfHs",
  "key27": "4raR6xcBug6TaAGijfdjDQj4bkCvLZ2S4yV7QCC3CQJ6SQVMqAraWaWwU5KKxGpqMRVUbBcPkExtRWv7XjQZVLgd",
  "key28": "2L9hJXswHSLHS9YkDUPhmeaUTxS3vcPyZeRi2K4mfrTQLqtHCG3c6csvPMFMaemsrVaicP2m3nuNxdtW8YBurcHD",
  "key29": "3f3vEWTBP2nPBZV156PdDfbJTKtkvVaCUGbgymKDGFHY7PhiKcgmJ7i2zd1ubMwEn7PKjURm9ZcxtUf9vLX1MyvX",
  "key30": "5UuUtK7mNLrXPwJNyTrXWdeaZQ9YG8F9fqq1VcvVkPh4Ezz7S35KCVMUhLRg1KCLPDD38dJXZN5vVSUAq37NZGK1",
  "key31": "3SeUTPGaaaBwwz8tQP8J2xf1sSBTXqGpa8XJshAwZpbZBVAYUk2wae4o42WTfKwUA1vC8Pfw37N7bXkKPUTPeQyE",
  "key32": "24mGSejz5uruGEPBey5NKUaR3m11xyGtV9wgdhf5n5YF1pQYc4LfMCwmo5itum564rpg8He6vZnsCpJrZ9L1k8Qj",
  "key33": "2i9VGWsxPTjgUMvDr77cWZY4m4C693XBCiSoEUeUUYX7TN3SsZeX5YTbquReDqHnF3G2P27MduqnLnedXB4EvGYB",
  "key34": "5tyJNrwi4niNwB5CLiGCDRCRKPkYW2eDZxSPeQJoigBHHBbvEMS5uuCRzcX1Rh5wXQDSQhE3zL99e56tiN1r7ZET",
  "key35": "3QYWTzzbTGNzmL14jtHW31EuMN4X9YiqGPFFYjSKjX3bXdi7x5LWrwbUJQ8KYNqXr4fZBN21K1Qr8Y92MJsoyVeE",
  "key36": "2JANemxdZ6qxXG8bHdcrofBVi4wQ2zFYM9b5qvFbTXvKCDJJoUG4Fem4tfY1w8mnXgRUtoDWr8TMtRhzcfLdf3Kr",
  "key37": "3egbc7zRCLb8SQV1hphuiw1rp7DUqPVBxwNxA8myxQ48Axo6TcGHJkcKRSyykmptVFK5GbnobFMwNAXD4p9oJada",
  "key38": "5orHX6QfjdNQwiEVAYwNsJ1XsHVNXWf5qY5WvkgH8g7DPRGds27CNivuBX7mPddwrTMnBv5XZiv58gHWhuKWKHyr",
  "key39": "TywJBhpFAKf73T72WPAbS99wEqg3vtuVmfPkYR8mKr1aQGnPsGMvEgBQBZb1nLbA48sqcZChBfQSd76yXBTgy2D",
  "key40": "4zRMPkua9KstZzZCB4QqfRcEgsbnvpFqMvbwKxHbPbWjd8XygoDhvNXDUFqoYLNb65hxmte5CSUKG94o96T99THp",
  "key41": "67YP4Y3Y734PRo5bW7Hmt84bCdRiLjLKY4NPgJ78wrTyDFe9f3FP1qxqmqS6mAodJKVHByso5wAPj9k9heE9AGpm",
  "key42": "4YyrfxN3XuSTxbxcP3zW7aV1cwxmHKbKmAj8mJva2oifbSCEVUCEAP6VaEYjN2oQo5H3tbdos4jXVwLM4wxnmb76",
  "key43": "2NfF54BJ9nqpSwiDNt8HRwozumXJSuxkmZ4m5UG7cCLw9zcB4ZaLyeDWvDuyaa2wAcP5LQi1cah8qrUyrWsgpcy5",
  "key44": "3MciEtZGaGk9ufjpGX9w3YmK8LoWcUKPcvd4ncPneCEPdmmWEeoF6wTmQaDHLjJpk7nbPmTMjqEgZjktKW5JhGHn",
  "key45": "4RTFhwujeJvsDiYrXvpqcxY3bFF1McMQACp4jY7r2C26ZNbC3BZPkuCPyRrPP2M8foPX5L9QjiYcsrUPBGpn7G2r",
  "key46": "xd9vQUf5dmzjkpNZQwmrXcCJrenA4Vi8Wuy21RnUSiKQxXJmdZCZNwiZSmmL7CAS6FrGXaKT1vLeVZWnHUXoRWL",
  "key47": "2fvDjFtqGri88XRTAYwv4nJ35VwEMj732trRPHbupXGL4mufja73v3dLftJdTMWwzEpFYC1Hpn1CkNvT3ixLfoCJ",
  "key48": "3PrpWLQZDWpefTT3gFJgepz27Uzb7Q6t47rZksJLWNsrhF17VaAYMoTuJLx5H2v9Y5BMV9nWpfEZqPSKKoEfze76",
  "key49": "5Jb2WmjS8wrDH7umoMhP4eaMTYGepRcEFSL4Mesmc35kJZi2BPEach4Dwzp3KsnxcYuaWPVTrUSAUDAk7h886i2t"
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
