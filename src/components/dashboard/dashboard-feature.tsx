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
    "53HZApk89tmPpM5hQePaFwA6Qq8RvnSdv6aAjUuMqSa5Q6D73VvcWbv5peqkDtZhkU64rnNHfBmSfz9nxD5GSFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9d93RK33tDHa5txonjN2qv2WXztwzj43dVsfmpHKhws4VDa16LrQgVG8Fe8qq9hXxLKJrLyFF1wFYpMBRrodbY3",
  "key1": "11BSfMLWbCxKcUPKtzjiP7E5TbAVNEeq2hzCWNZXb2ikm6NK1dzqk9i1Mf8ekDSyLgZYJDByZvxjZoAmngErzUE",
  "key2": "LZLnCSEV2Xqu99NxWzvpMSmiVtXaK8L9uGAYPsVyDqbgY7ZfsyqBNGtH2YrFBveXpJq85FnHxUBPuEaCShFc3AB",
  "key3": "GDEFDn3VitjN1BKvwv4RQpAhBoxeP1ZjFw7VohpdmLDYmSNVQBMFUhFuELEKt1H9vGSY3gVvrytiGQMbnr6MXNy",
  "key4": "2VpYY4g3JaWbSmY9gHCCfv5VujUqV3wr2jRVM75Z1yRqNkHcRbv22DWeotxb6RUNQE5jszRNVXwmABhD3knheSq2",
  "key5": "5cfujkHNzyHspDSaKLP5ynDNY1VUKEiqoZWQrszkbhC6MWHjXAvgkcDRkcDDjSp8YafxG4sj8G3ZYfstWAhbCJ3g",
  "key6": "3y314PppnZKx8emqXyyrMskSwPgbxvtWaFW72GqbZPpNvkuhVV6pP5U5gw19EPrGDhcE4wK9AHHGiXpFfy7HwE4p",
  "key7": "4NwQ9rrJMZ7XJc19gT4GXDtgosgCb1S1S5XJmiSE6umjHQA7iRPMULHCbvwzsPmuV5NYDT3qdE8vDLnqWsUaSBHh",
  "key8": "5oYtyMK4gsQpERnx3AT1JCh98oDCrVgDYiuHJqT2jFD8XgG72vSgagaTUBXHuxcVdpmGfScht44BFDZoNNFMPWx6",
  "key9": "516D6fDG8UedQ9WJeqpSGu1bjDijQojFs9BNJrDGJq4hte3TbytkBYKBWHsdimjkFjh88XveaR75pxJMXC9g9xNE",
  "key10": "2jmkrECDikMcps95gacV8eEvTdYqEHknnKGBAMJ3UtP6E4mZ67Pg6EFRHpcAKQhGxtR8jRXz2EXWsjieM4rGEdaE",
  "key11": "9xpHLrA3bn4YZm4k39BCptfVptbT3jcofHv8ErFm8dRG9p1iYwcHw42GEFH25uWty7WUa8UV7eqSKXgrxEL1jyu",
  "key12": "wcEgUc3aktxYg4q7CDzMhhBZnKif8UBeZiHDEeNPU7fzHZ7N2aSN52vFS4C8cj74nsGkLFFRvcXPrquccrXQfML",
  "key13": "3oL3WjEHDqg1pk2SdP7C7KiRXkfXh3rFgLa7wntiDocfJChSnzK8RvRvaVFkTpZoYmDysjj9S3Xdn4G5C2bi8ics",
  "key14": "3NMtZLJTUzyMDtjiAyz42aFj5vJ7ArCJ9Vj7yVLNfCNesW4XgftZQENBgzfkor2mtHBWjgWUL26b54eLJymmneSy",
  "key15": "5SVLiCdxjLXC1Cpdmm4j1RSFmkL4eVhnQcnxZNkCFTDF9s4kEARrA7TZadmwHY7nhG75jrcbmovwF21rfKgAYRih",
  "key16": "4nd2Ff19py74FFGKXcB2Uc1W5S32Mm8cH2aKMqPNt48BeshpFe5q7Rv2cUD8Qs1MvLefJf2qxZTGXpeN4Sn1ppnz",
  "key17": "4ShDXv4AasMFwSwsTrT9NU9xBWdbm7MSEMaG3SfgyC5D1BKYg7Qa6mpKJixdoQW7zh4AjCmoekBza1faz1dJrCW8",
  "key18": "3QscQZfVEterNrih8K1DJ8b5xUvV7Mjwtng8dRXuHCe4WYRBqDUGmvZZTrS2DbXdv5R3QGzFFrT4fdeQjZ3DHPnJ",
  "key19": "4mrKY2bnfVQ47cgczG6DX7M3vn7X8aiSuL14d95QHHk3WwqHhf1iBh7XHaXqSiLw4FAZWxvaLs4MqMDtwbpJK4E4",
  "key20": "5d2a6WC62xkWxozmTMJRCG525eMVCmrWTACMJ5eJD1MeCJeSw3YfJJLfj7UyTAdiVhGwWpLWvMahAfkcYdpp69yG",
  "key21": "4eJd8kfh7e1ELvtn7UMbfEbWmG6bYveqeVP39XMmH8Rjv9TFrZWDioxFq2vX2i3MEKhA9wtzrabSpWCtj5aY9YES",
  "key22": "3Hudi7bDQGdY9qrjc2pSTrAQrqrozvT3ArGfGnpuVf56yxVNd2JaWVktRH1Yqw5SLeMtz6XHcpsMBxPJrZXTjPDj",
  "key23": "5JBR9SLhh3gpwzs7n6qGKLHboBWWuDc4bGfpasUVtf82uNszA1WfHYj5ChqUf4bXCyEVts7MaTFUqCULyFzEAeWn",
  "key24": "4RRgLopPzo4sN5bM93YTY8ccTeVskMdHqtp4VxxVAnJqomdHGYt8YQamRrbSAAgPep9cnHDuby2bKQG4VGHcrVLx",
  "key25": "4i1vdGDFmixR3o2wexDH5sJUUzWr4y38iKzFBPXM9eMeGLeeBaSLD8uDknC1a9kHgTuSy4uBLiHf8oK6q5CanuAS",
  "key26": "5mfaqu6c434wydSVUyaoeNKEshniuet8R5bgYumtLza5k33qanE43jaWcuW6LUbmKPaToGYr3y5VF1qoM2F7bAL9",
  "key27": "PayrimDnc3N7QRNoF7zbxSFwvho2kB9PQ4PeZyA9MH1L7uWV4ydTNTPXH11DzweWUXK6y72FB2X5pyjmVNEvvEj",
  "key28": "3tQ9MfsKhEg2Mc8Z6Qow2rkLtGuz4gzAYnXh8VrdWYtR2UVgJmX8WpxYpwCvCABj1xBV6bsTbE8wkNJNz86e3FSK",
  "key29": "4hxr3C433fvHCuCYNych63iSWxe9B9GYbi5hLrqpURLp73JcBXvLU5oUHN6Rg9q84Z4eTTYm3S2LTkHjp9hKCgXv",
  "key30": "5LghL2gj5HckVTcnP8fJzkEz9oiJFowGkDDkQrGLwUuJ9brFAaswoTR2Ln3wZvFfKY6hqk35wN5TwvwqpqTCsppp",
  "key31": "5wXeFiG8HezC4Mn3r1CGhAGXjJHTZPtswxS3v53u9qxzdcfNvttUdxmEsFL37JoWA2TFpGCPDDenxdkYpFWZqEXB"
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
