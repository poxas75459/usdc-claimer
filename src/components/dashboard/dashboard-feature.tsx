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
    "4cBba3wdU1desKGh3NHqcx4q1aedRx3HLLSAJV6zSisnn4Vmi92p3ErLtScTFN84b8bT1HsRzqe2sWiQ1Bkvzb9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aeWsFkP2oqRe1Uego77zu4jKRVwtqaDkHRDTxEtEdR5mJucQHco7426MhL8PrC7zhjQ7bc2eXXKWAKH5GmWu3LC",
  "key1": "2VDDBA5E3feULDcmjmz23wAXiWTXTGTa6eorGX1SNWgSpV85ZrbNYqMnpLutSdeLtE734tGXnREUsFXqi3kK7SSX",
  "key2": "3GevFbLL5edNFuo7Mxbq3fyV5UVe6uBYk7Y5bJZZNEBkLPPUtJaEp2es8pe5xAzpsyMaQmfX4HjrrMn2vDmHEsvu",
  "key3": "4vaZskconaUugNCBETpWqaqUKoDJNQ19N8ffsV9L8YWBydan4sswcCZ37qnsVJB5NqZ3hsBdn9vHQbfHbqNyAPPb",
  "key4": "rqUL5voM8iYteGrsELR649QGsqZiAQkYYV8EUPzpruKDSTSfmn1C6bMpyjaHmHKxZycbP5bgJ8kCDzYD6rrTMnP",
  "key5": "2MPxZCFFTgHiUHxydRFPaQ3bninBmqz6YuU5nfNJSHRXT9ZCp1iKQb4JWTy8PFBfKjRo77FpK3DxQSPTn9NsTXHF",
  "key6": "2Eufx4FGiQ2QDZzFjtxUghXDaHtHE1ATLQjrRhVEm41d3ggpmEYkFPN5NKQ815q6Pzxedmnj1kae2kTA7Mk3vdgu",
  "key7": "2PoGfD3YbeEKxUX6x5iznrRtQKfEWrCRiNeecbbQNZvkraWocZjMhZxfdF5CxENWZufEkuy16mvciJnsgwGM1mzk",
  "key8": "3kh7ATGMFvfGWwERoqw2YrAmsUsZUWqsMYLCxrkDrEQHPP4xfcPomup3nQuQQUaMoEogs76F4ZbGrf4Y2PyVUQjM",
  "key9": "5pKLJUSbP7TBAmEVzjzk8zB6LX8Dj966kb2xr2w6xxJXuS1GKYdcnf5LS4wzkJg23GnGXdQGpfbRi2Jpmchixc8Y",
  "key10": "T8H6nYph42hgS3UTaEMAnsKyyQJCo5zT8tSqikqJyhCLFwfx2VSJ5FFnnyr4kKx4ofYuXmij8GbcJDnTF22giD9",
  "key11": "5ojF3KQGSm9BWJwcpkupgTYzCADbb6eoucvDqN4yEsANU4Vz9dCcN9HduxbziXMca7eFeo3TZYMdR6Xwy6Z5hhpQ",
  "key12": "5zGoavsjUSfD1VjbFBwSh3Mo2wwJijadYLnGuzqthem2gsDRtP2YtZ64RkwLEeju66tmM5WXgW6hWdpnVFJC3xkm",
  "key13": "9rniQW9uLqGANXD4n2keyyjLZQBt8sHhJUQfN2bK1hWfPQ7z2J1vHaE56FbuBFitgHr3ZeKkA9qTUxPMhmdxYRX",
  "key14": "5kmzbNwpYb3fLZVK6ymrK6KouDLp6MaQw5MqyAenHjEh6hdPY8d7ScykQD3WTa7WfFkeCP4frBxaxG6hBDM4Auij",
  "key15": "5Lg97ZYMV77yBuFBJtnBhQb3ubfLN6gQ2FFiXqHYFXAfEKBi5mR4bZPhaFRwJ8u3RA9JVNZ1Z1fe7hG98VNGr9Eg",
  "key16": "hUfXuf7d9WBzjfeT7PD2EAAcScKNMKVa6dUMRQzPe3Eb2cs6AmmHpn1ewH3zGKUegTWfUnp8feVqcZAfRWWyyer",
  "key17": "2JziKVjJbqzgy7B1hyFj7uGkCAByfbPVSENdEFyhrYsX1zXo2NFvHTdM5t2mbjrYJP1meShweoRh2qym4Va7cgdF",
  "key18": "58wwmxMHjjuh2iNWzNrXxEyqi8ugEfVhwMrfnjqgi2pivE7cJb7afgGGstFaSpq1v6jpWcSpqNwb4RbbF3ReNBBA",
  "key19": "3w167tyc9tdAXLuvWxB8SGz8ydRs55mMgE3RwXQSq9v2z5ckE889EywmSewcvHSjrT2WSjpZ3R7FYgkbyzdkJGVp",
  "key20": "4LCm9a5XWzqfdEKFq29LivnhupjNAZ1SQA113PwFt1YPXMeUSmVaAzCVEaPvVEWWyxuRABk7f7sC35aE9kQYu2CX",
  "key21": "5dT6SyusA6yd2m6bYAEeK1WrJ5TPM1PLmsqqgpL3CYE1YQdepD7BRHxz536PbuLjjKVFHUatcctEmtu9PLJwkuQw",
  "key22": "4KxQPAFh4RVKw54vdrQCGjBoYedDqWk4r2LJ6zPiuvrCH8P6qKG8aNBQ13X8tJBf66GJJT2pNH54Us5WfuintD68",
  "key23": "572nGhFyTG6XnDLU5Bp54TTPjjGfrgPZQzb3X6oreLwGUK4mhPmMcdfcdXuaMHtGRkMBfFNDxoeVZM7v6NNBnK85",
  "key24": "4KEUxJ646ktcCsQji96oioYSCZFrcY1tLAGN4va2T3iPvwPz1WqnEdzaJThqake7W9eUPQ7ysXCkpwZ5PZsTCTrx",
  "key25": "3xBmrU443De9AAx7HYc69qbNdjbrm2LatYEzC7Liw2Co3DJ6BLeoukG7VE7vwzphfACDnrrqZSJEBcJcgSqd83Mn",
  "key26": "4bDuzmK8DjGverefvdFNwxxSNqdewzuBgFG3LWZMNWFDLKBYJGeL541Ux7y3ARen4wHvpZb8oCTQfkX6As3kMrpL",
  "key27": "5kpVKWJNN6tWA4LUqHbwsKbtNQo9P1Z6e4seBCVqLbSjuCydWffTeKGmXaaCir3mvYYpdmh7pHuyHaFggx1iuuyL",
  "key28": "VsQQcYr7vD1ZFQCHwfdGpi4ihpruRKVz6DzT76UgdyVKTShAZksU18HCeFBnw6AATVNCYeecxuJbeNwUkmW9zEc",
  "key29": "5assU8rdn5sGjp3c3xzQjpZhhQSSV2Ct1J78Eo3u93tgbpcMyCapVxJwb9zXZr7uRa6CK78j8BERYcb6rV7z8DBZ",
  "key30": "2xbP1eD8RtELzw3d5zoQ365m1ffoa9xQepivVgwaL9SETmCr7x2MJcKG4CnfB3pj6JVQ3S43mkPo1C3qfVMUo9os",
  "key31": "33S7Jj3f62TkfnMUyzZqHDHLymKJs6eYTKJKm3zX3yzaQPoBgX4hRHvKXjPamnvLeQmXKQ9a97ttzHabK8Lp8egW",
  "key32": "4GJY1MjywAZMXRFh3BbMDJYS42G2CFqMx9tnuS9oBvv31iFHDBhZNfCU5SBMHwbVfut7XgkWXpjuUBYH8TskqZp9",
  "key33": "28jjM5nMkqeWVHbTRApEtDenuf1BcBTeepKfgaw8i4bhVVS5V9ZprP8c9hCDYT8kZSFmHbzHdckzfBiVux9rqcYr",
  "key34": "MXRizYzFhuvppVmoMmEpghcuHnMuvfdv1x4MwSxTHcRqyBJMp7GdwPx6rFS9AUVvRTrgKuHoCJtTQPgiCpGoFLV",
  "key35": "2HT8LUdFyr3HJGoZYnpJaxxcUzxr5B8pRk5NuFVQeNBzFW2W7pCEFvdugZD9h4dvRzXvkHiP44ZdAugJRTxwCbyR",
  "key36": "eSzYZd8zCW6kvdReNomK9Vqv9vzFh3mURJd8LhxCcFWMG8JTmcVaqSxxeJ3U9pfVDGAquW4fUbE98uvUwujMD9H",
  "key37": "tvNtU5LsnjxiTBUycbF8vFQQtVwfFsjvd81jBUQduXKbqq4Pn1Kogn7ehE5BBBCoP3dYKLq2N77JdxwemNHE9vV"
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
