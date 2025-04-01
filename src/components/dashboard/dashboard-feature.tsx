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
    "4b42pcWSB8HmMFUcdTvpQHDgrJuziRP7kiGJStKKe1BmvMWFji7FHGAP5jzwithXrfz5gqb9zHG4kEB9mTFDNqe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z7nwEh9aKKPbtD6m6ViX6fP1zw22GFgt1RWTQ1BBLydHMPwUP8iCBiKQixd4b17XtoQLo3koBYi9tMezkjY93Qn",
  "key1": "uabE5NsBxEMprc6M2hLY9o5nDobHbgmTRtKHckbt4NwF1pff9ACZzEJudtBSY38Lg7Mk1HQMyMK3UXXD5P3EjYY",
  "key2": "4MV9mNg5brEsT8SnDzvvktD3VchDZiLDGfsr4gXk5cCRYg318LtEYh2PNCcBSZpqxPbyRvD2XfbMLzzwq5QPPPu1",
  "key3": "2ef6AficfLBBzKrnrpuUtLqAEBwbo3FUu3vorRaLeaeSsV38Ldbbz5civj1XSkPhYX7Jsncb4vJ5KR9gpRRqJAnN",
  "key4": "3CRWpxkqQSmDaHzGpc5RgKtt9rSjFiC7kCizEfta7sDXuh2uxbQTX3LAvWkmkHfFBViw2jm1U9pxQxQphac8YnE3",
  "key5": "5z64p3ii3hPXNyGGht5PpKoGnEGZV8NUzeSfMykhf6FLVfgy9kaBkFLFLssfD13yGyy9kQ3TnRmVE1dsDSLLofKN",
  "key6": "ktDZx5fRzxoVMAMXAUCXq3B4jgGDwvX4xT41NXg7KfxWEDKnfAPT71ncS4S6C1MafpJVGTvfuat5oGwH3zawHUo",
  "key7": "FfoBKviZHjZgNm72JKRPYRAfAcMoKKkkSstWLU1s1utwRvyBHZFU3bbMM5JxxTpTWaiuuAGqQPBu1UDq7XXfQYi",
  "key8": "3joMVwP3WasR7cb1kH8aPGJT74JdmyPjsrrsWdgf9DfQtdqGJ1NWkm1MEpSfJEHm8poxwmyLGicmB9mdgEyKqNUQ",
  "key9": "2KqYoNxtcbtoLoBEtCRFBqTbDHebRupvhjdMNAEqBnEEE7e4tN7tTz886ZEPG9hrPCfSHXXSg5k96WfvReVzbtfb",
  "key10": "CZLm1d75owYyg8uJqe9XvJp2YVYAA6DKu5T3h2q4Vbjt59WtoeXx4nWdEHosiaNy1r1b9ptufJY3jofNcWNuhjw",
  "key11": "51k18W33ATvZtXdkbCKoJDfz9PjA7ENukr7DEwHmrb9Vo3YemnhWf33dfvJze6p4RQtpQbBtST3t95CQVK1EC1Ye",
  "key12": "2ojgkSWg9mw4LcM4oyVJ4TynMqNFVyQri291tScQx1Dfkq7TD7Cyyvijiphmg4RW3yHxie9YAZqxK8T1BU5nvBwC",
  "key13": "4fkwfD5GFd9A2PfhTK4ero8reGu5yMxBTqQWZJXtEFvq4vzgqzsrR6mEhpsiCktULFFSzQaXNgphJxYmcw5WaD2e",
  "key14": "FJCveDCwroLKjxRvDR4zQrDTDSUFdDMCJLZSvccuuMSrLy5MwHbCvaa5TrXnoAx23qprW59WuDHfX6ce6ab6L5L",
  "key15": "2Hg6FkYkavWKzn4ANh8mFathtagUZK1cLfXxBvfyBxQSNoERhFp17jCcpSRpoxoWr8Q5rvyj7Y3McJNZXVn4H3bz",
  "key16": "3a4ZgKrT34aZoDFjKN8XHEUHHjio6Kc4NbLBJDqrNRQgRde7LbL9JTfc4t9xx23SCYD2w2g6tinJCsCX5qdkuG9g",
  "key17": "1xiq3kWjjmPunkYTTCt79uNwEhUNgg9vL49dHeYSnHJWTsgyv5pFSCVdVCZSvfyiUSRPDo1RZDjnABUq9g42dB",
  "key18": "5h2qpBcpiRGYtEMiQXN8M5zGFArC3kyyNiJGyjNf1tmL7jnfgB8NpwgQ1xvv4KvDrxxK5haKv22MeC67BXzuE7sr",
  "key19": "3AXUdwJYkMZCJDVoSrqPeQ1nB8X4zDwNbiLTkcHAdfgghP4pWH3PzUHeJseDUy6aRkBYKMf2T96fjFMo5VuRChMy",
  "key20": "5SuwGVFhhPbaL3JH9o6genNxJteGsJuKEkajdm4WJzj7YC8GSUDtkpcQTB2YYKGEkyZxqGF6dCHcUADYKXYc5gvE",
  "key21": "4KJbfVH9fVtzBKs4B2fVUkVHknVhE3tWmYFkSLUqw4PGLbYRW8cNYVFtR17kAuCECq5wfGJnNzj1BxZvnUMf8fLd",
  "key22": "5iitDi9d6HUQCvsQNZpoxQhwycdH3Zc4rJAS53Eg8oDPXxCPXx3EAjQrSVi5mQHJzTRu4r6LifNS7fDKkQcXY1HS",
  "key23": "2pWRvaNhEmyRPL4N3SyB7sdyrFzxpxjn9xkx4QB6qDHhaFUzFcti5ZqHyJe8d921zxnaKCuYR7zvRPttHBg23A9T",
  "key24": "rTUX6xq3kf9JVao2k7XQXyCBY3sbcQgZewmrs9A3f4HMxFq4oep8fig7suzgYd89um9AggrEtiGLCi1L2viQUXy",
  "key25": "3p52sJQHSR8XZF6XNvueBvZSgTkJ14DDS9252pSg6FUybvZ9hbvGun9CAf7fR8iLWGD26hyg2sTiy1yWbWZmHyPJ",
  "key26": "5NwBMoL7WrdJHcZSCWUACiLEy6JHPMBiExR1L8tFrRNCFMwTcA8UyagppmqoXLgoh6JSYRN8qHwkcgrcbyAe49Qt",
  "key27": "hRva62smDtiCuAeAGKKfFip9b7LubpwM4YwDA3iSZw5qbFpZ75BeYmB8us7xp9FepbZScQo3KTitqBXYVW3SHEz",
  "key28": "HRrbCZoSEtAAsNJd1NSTRrmZe5kAjuGHL6SfTc9xhSceyMcApo2t5unpk52fTazBMtSBJyYJzSYf3rJTb3BvarV",
  "key29": "5HvFmu57pGBoLwjfM9LxmiUiy6zn8QVwTenQyxKekU2ijN7Xkn4iY4ASzEFFkKGB3LXHpRMUMDxmfXd2ACKz27Gf",
  "key30": "52PbB8ankzmSyYiMMBReexzuLVTJk7smShJSRzKcGeRVyRVrofVeybMWTvwbN3sFGsAQn1wdcRRg51dNvcHtrpQG",
  "key31": "444WXZDV5pt4j9u2h131inAi6UWbaLxvVkfFHDAS8sTXAkigYtB1wgBjuNngsKVwpkVabN4Hmw6PwwrJeovrLYg",
  "key32": "332V2kHwegWMkU4GFdZeUuqdZW9dBAqPzPBH7dmuXVx33UJwG4E6H7nRnkj6WPK3W44HEKHqK8iYvQhGSoagQwLh",
  "key33": "2y1L4ZeHH2hJLWenMJ8RQTjWiqnkyCp6wPwCc5rkZXAaY6YLZfo69zdkP7hgWy6cooWitgtbvJxXbboS959ZhaXv",
  "key34": "2SxzUuJzFnpNuMTyZT6YF5icDRZ12QrMEoDohAbfLqMRZJ9LwLkbgZrSVVGDS8itCUrZcc2KbGzaN8EZtiQBSFRq",
  "key35": "4T6aPoRL15w1qobdp5qCUnVwEHw4kSrjsaWpsEPeca6CJW7VMuDLgk1kC91Ack1xtg695hWwRdtYf79kWpyHXar9",
  "key36": "4y9Dg19soukjWQufSdgZJiNUHnXhQiTqoq2reydFBSnXuPzPiMzyZebY1LJcGA2LFnAwxm1LoE1Nn2t23FVi2vCf",
  "key37": "2uwMRoowiF1PirDGG5jy2vMZEpBczVpqCQ13E1YpHdQeVxxSBptVYshmDb8NkqHPs5ujk335QZpavqVULhsM2PsA",
  "key38": "2RGGcdpvDUnKRA553XivW2VMeXCBLpEpUFS4qYyuRxgjornntDfTBrPeztpf9oz7bQrJmAbY4VifBxZARFWSRKvE",
  "key39": "2XMd3e2JWXi3rfyhQZRr3MC1yBUryK6ADoLoks7b59vsthv2kT9CJn9uAKqQMGGEXMki1o3hPSVXnL62yMzgKYLc",
  "key40": "643ihB4FtqtfaR6Cz8h4hw21gwabbduccyZU1rUWVBybYPTXJefwFpLEmRvvSMeb5rG99Z7dETYUmHeurDV149Ev",
  "key41": "4stwwYrDnuhq5k2fXaNeDb5kLz7FLX9AYQKPNGG6zy7cEg4dcJeoFY1UfysL8BExhnZCxLuzvDYewyAsqccCqRJC",
  "key42": "46ZvjgnFHL71FMEaJAPoLcEKoi5QVWWtEucmWkqtB6cNtoWck3tjV5VEHV3doLcwehkSnuX5gNMxuAxuiffMZKkc",
  "key43": "3dxZKPyiyAft1qU1CeeHZKve9H1U3hkC6QFPYCVQoapvkbMkQouxdJRRThovQg2nNPgb8tJXtXVQ2qEdu5iyThbk",
  "key44": "3XDfjEpCqCEcmZqV8rTgtx4hp5FrPa7z5puCf7jTHbUEQxKFwJ3XA52bHGQGMB45feMieuBSTi5w62a31jBozgd4"
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
