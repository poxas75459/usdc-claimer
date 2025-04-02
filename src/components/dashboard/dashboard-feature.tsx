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
    "24B865gwQEJD9uVj8TmQCy2qGPB7bCZF6ftsWAN6JVbzrYDAqYt3egArdWaeg41jr8QDMmfqkhG2JKUkUBHJBr41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UQBzs1iSZYvZ1M9fgd2wwa7DGmf7GgYfeZPF9AdDr6bdbctVzqH7LpJFNbTVdxY937xGtDwdNdNsRjmZp2Rz7Ta",
  "key1": "2s4DR2XEoX7oXfmn2qvBJjRe8Qwhcg8B7ENTaPT357U5cckF1ARP3AEDxm5qkD4hMEMgeEQinc4C6uNKaukCeTA6",
  "key2": "2AGBzt3toAPw1MafuZfTvwmhGvmjXzozdppvyt6Du1qSZjMxwjC8n2G1BVh9Zc8db5zgQLcXhtAGbvap96qTc9Zh",
  "key3": "5p1TmK9osv4PmvevUMQAjFjwe6udQjDCL6N5UuoSGyxkig4Kspf2EigZH7cEjVRTSiaq3pNPNCBtBdsFH3YwAfL9",
  "key4": "3KkCXBZppEApvmg19986DYECHfuFq96ALRGaiVAVrM4qdsBsJws14AkHcqXXsfd5XnNTyi57dCRaDFsD9KkBDPJN",
  "key5": "5HGSJ8fpdJef1gpyGw4RX4vFC3o5YLwn1Me7aYeXrSy3Kiz7m6Bwqe5KJzjTTbkCCbAbQnwm7pSAS8JrABSYNoo6",
  "key6": "2sPXgaWEfR5Pgs7GXqt5JDqJ1fVEgmB1j6oRTRErdpPbLHc38PUJRKYNzhz32uRE3KF7dHQ4iZeb7B6a8c2BdtN7",
  "key7": "5HzpBugTXNnkdLqvoomzanT5bmaFewQq46QN5fBqsvkSVbwPY9XbzzBph4Js22b1aFkkPTzK7Csm2jpMkejKogza",
  "key8": "3yvqLj6rcFCu1MPrNykcNnb5CqtiQe6J6FMKL7vTHzLpcwFgQNtER6uvosnkN7anRajKA7mdeRDRvVCjRe38e1a7",
  "key9": "3zZBSvQzmECD3gaiifbe8mw5LPENVTDAuwvAriLAN39zZveQjmRdiaVhDot79dZ9DqPrpc7ZZu2AWrerAcXVgank",
  "key10": "5wNEWCa86NbPPPAmFX46zxAS13oVasCbLAGubas5cQhjBSTpzp22ioVC4qSfXqhnuG5QfED7MNNt3JGX62p9B2ES",
  "key11": "2kJi79tPs5Y5TabMqw3MntCfYUyNM5puNAwsmbD7HHsr5gS5X2o3Gq3U2snFjv2bDSRgshrg8sr7oT1HCECtkrGr",
  "key12": "4aRkP7Xjt63qF5J7nQESwNod95PxKY4w5UtVfNARD2P7swgSuwgVvPrg4j9bQPj4NEKcUPnGgZtbWBUiFUyb84x3",
  "key13": "4mzWiWNtzSFSwWSYygU3Lf9JtNgDwJxm467NAxCs8DkMfZUhxXoX8QDAQweDQtYcrHgF1Mr5GqF3UFZ5eVm5xsbh",
  "key14": "YRNG3X4CnRpk9o1jKAfav7Aq5fqTZR7Y8fERfETH5uGQgiLKg7m5T96ieWgJ9muC8C6dFkztGYKubUhwvwsE4sQ",
  "key15": "2W8ECY3AfWWBnbUDJTR2D8o7CG4imBjpLkXQQH9wGkPiKmQZA1VR3BPptpeBXeBJXZuVRtS1b8jnnyGnwmU9p1ge",
  "key16": "4p2Qn3GUAoEtVA7dmnHg31o8zFjnKPHF5eNUr8WrbvBkjDC7nudkJ5u8gpvgyH2UTLe4sR1twXf87y67uDqPs21B",
  "key17": "y1zzV7okZEANQDyxoqLCvyYyG4JCrjiMqt8PVfEsa3dEQHSmDrBmWVREa46gQSw9XSgq9bVd2s61uTvrqEE165n",
  "key18": "5BkWWm4tfqDZbqbCawHSzJddHgwQjmfYcVvihcWiHauUhjzBrtNCN9ia9Q6ewMoPp7TSjQ337pbQ1cFpmrqj85aN",
  "key19": "5LK7GoZGX2m5bhqgHzH3P81LZfhyBQFknUd5uF34mG5quihMHYUXgQoXof5EwchfvFsq9XFFmaThh6Kz2NaJcHEu",
  "key20": "5cCjGmMRx4RjnsKxgZJvHt6KKfVsDxx3ijoQRQ3bKQKswsYdLfXMaGPzodt48ZsMrJT5r32UP5Red9EF4JU33P4X",
  "key21": "5CaLQfXtEh3yWf9GB8u6zDBVLv5qGnc25wpsPwBRV6azRzq8Hta8tQTz3tXEPnyPZjqDZ7hKvTj9xDFXELGDS13r",
  "key22": "2CEicZABf3Eo114qBem9ow7mWMCpyBpx9PWdjJ4jQ4BAnZcjCqwT2NVZVeWQw4Rfp4AuY7ZMJBovcgbnogUxuhJ6",
  "key23": "3YPsePKymud1Ru1VAfBSv4sKsds1fHHjN3cMpzRovjV2e2pqkQx3w4RkUpu6nTVC8UJNuHyVaCeZDD7LZGgn3GuZ",
  "key24": "4KitHZ2nr7jwj914yjxouMeSRJ579wFSDqkEhZvtCLsgbDKv7eh97KDuokPcRdFnm8Czp1vxrDYqrtQUcKKsBMV9",
  "key25": "2v7JxF1Apu6kn5KVRM3N7NPAXXPMe5YHCQY7tfiqLznubjJCMXL1bzVFYxiU43wDHjcMAGCpmEiVzNuf4SGjjzST",
  "key26": "5nvz6TkYPjKxBeSXuQ8HtcLzo8SNvLaVRUdFaFvxRfYSZM1wWBLNQpQiNWkhFFcdeST7dE8N2GabXB7UdUhrcfKf",
  "key27": "t3anA2d7MeRMFPZFUVCG5hnF9cspJ7FmSc6hEsE6eTa8GSxTSQxwEBZ5fJzRTaZt69WP4AqfDhwYGkDHsKvN4a6",
  "key28": "2k6Ra3PsV68JaaHT8H2Yc4wUcWsmDsDyEc4JXFz8Fgoqmojifx34ykEawcU5HDycFUYa9grqh9S5GqyLXVfvQRGT",
  "key29": "F7od2ys4N9DUyCRP2NoARKM8iqdHmibswjwEbznpufJYCysKk4gKJ4VSMikdyr9WwaTpHR31fY1ZPT8ssgBJiLQ",
  "key30": "4543pBVFnWRFfZQVtpMAfTjkGoddoE3d8aktG5Q7VtJWQuwgZE2nBe3ZmDNA5AiqEwChwcNVhfNcZLGAhs5HVcgX",
  "key31": "4jwzioXME39KbgiccGrE4QRKB83b9QHuoFX62E3euDVV81pp53HdGC8UYbVgEHdMDxDTKXmFJj4nTQJBCnP2Lw3m",
  "key32": "5XW5UxVsbVZPD9CGP6xf6fGoZd5a27XZHhBrh72WE3ojb7xnyo2EyHqoVYXSSFuVDftWLnF92BmypZzFt8CDVdMZ",
  "key33": "3hFyFpmpecaHABjgKg5nva1FfMBKfKseG2YiKA8vV1P8LvxQm6t3qJcULAdntaKWNVGVLPPSj4yDBDyaUussmUaD",
  "key34": "KvjFb4LogcTpgsRQqwqqjZoHuhmLEw3iW6ZCEEYGEysjSzezQmCharyJmWnAV82djuk2GbdYR9mbRLZ25U1eyxd",
  "key35": "5T1aX5EMGYcdxgzUhghgxJe7u5abpGSqfrWaCBmdbcwqT4TbpkETjPe9jMsPMtAKJ4skdTnEjoacC4TkduXuwcnt",
  "key36": "5vYyTos9C6HNnoJKxdKiqgyMgMCfKyidApncHEZreC5Bu3392mLL1T89i1EGVkzYYTTmeWaRbb64bD6XCLhVedKs",
  "key37": "5DNsRGdB9oWR86AAe5KVcAsxsmTQBrpAfKrj4JFYUcXJLsHoTQnhafpEHKeMwi4r1cZY45g4yDLFWerTyNZTww8A",
  "key38": "2UGMusFy7eYbMWr3G4LDJRMuhSLiiB9aX8yvhEgpjVaBeAakGaUJzM5ayUtSMHPcGKMxy2uAVf74iYzyS7i6zQkC",
  "key39": "rfEoDReMkE8PPLVuhVRVZvDnmijsP94c93MX3gRwJvfraqcSZMzNsuRrfgsBnv1nKeJPDAcLMybBe5CGGi5HwZa",
  "key40": "2k2E4kjF4uqzpoui5hTMNdwX1YSGAuWDpFpFxNrfV8rPrWPHSf24V2vhsMU1v98o4bSo1A8WgZ6HAvYM2WKpV2Ds",
  "key41": "5tpE3WWpF6MSBJvo24WwrgQMYwH6jBKat2cAPcCdyVNnG3oRXKn85Kk4L1Njqh1EER7PesodAmNTGBMcDcPyZqhD",
  "key42": "2Y4wtZh6ZKTWEcbMXC3zKMG4aKYCG6MrNSAHpj1DE5pqVDTHYEAAMgPosmoTzeAZKsYWZRrm5P8n4EntRp5WMmUr"
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
