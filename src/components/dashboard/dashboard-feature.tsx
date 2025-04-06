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
    "2WZDjB3oPxr3983TZPtFc7fRkrQXmAMBoG3n7GJJvHaQW4G44UUZCst5W5sqsiiEMghfSvFj61pLBUQAcLiEBXyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fDXHr7indqjHo8n5wW73NT3y7WVutirtpFQc6ne7UdyyoacEsxKu6VGyN5b3VHTqhP248z6qounKMrrgdNn3HNP",
  "key1": "32iDTrSESdaoFynzqWRLfzM2ftHMisMAqU1PMcuMx3ZZWPRHS82Jx9jD5yqmioHBME7RCi7TthpzJTKxD6oeuZbs",
  "key2": "3FUrK2eBYFnh8tgoy4cpgRbretuoEA3SntXbiospfqTs9MCKDWrcXKc7WvrwxrGuTLHHcxVk1HBZnFM3iaoqjjiD",
  "key3": "4fdizejMuHRJ12hnRpyZgNFHy53KZPAZGXGptWqjNB5FLaFYiDpHrS2vYgqHZtyRdGep79MZEvascJQU6NTmGBn1",
  "key4": "3kSzvZQbeJFA8mJfktBZQK8xeAV4pbScGgQQtuXFcTWwfjLQUR6nQtmaaZp82xX94vET242D1f8bfeTyrDnJV8k",
  "key5": "3GhBKeoVuV1YJ8Tytt1H36Dpyma4LGLV3XzRRJiyrc8qcks26tvwVVDTs4kgK68CWUZhpttJkTw6QSxXnSwLuV2D",
  "key6": "cqYdRL7aa3iFNj26FewEQwXYT1rfmE7ow6i2xtXzNMDThBeB6ZUH5o4xVTcZQnysSgzaiz38pHVttHZibwExpjd",
  "key7": "2fWLxSJSFZkRrfD8oaYo2rAwucW21UYmKBavmVoYCNvVyZF12QibxQuXGGHVWDMXfouEqzRAamjexG5c9QZU5fS6",
  "key8": "4FGFxNkvYQBj2KWpf4r4AEz8oi2EwadoQsj8iSwMfuy8huvfFJeuTxSCXY2YkMnvRDQfzaBaC32KZgWRXg5SXSG5",
  "key9": "5gPZUwW68HqKX6ZeW2MfVi51BuTprPY1zk9CSByb4RtpJ4Pfn6aN8pbGqHawdNckBNMeL3dStdqhuzsZK5Ue3zQi",
  "key10": "3aVVmiP1GZymbDTZhHtmhctB2xvSvyFRh8SNDkMDT3fUJHnRzmihFQMeAYQYdB32Nz5ciUaxiNJjx8xY81As3Au",
  "key11": "3KwLtf8L9HBphkdWPNgE3cwadkG7cqxU7Lp2qeJ8o7FZ44DTPjnphSmk2fUS3g8eM8c5oXKaNggFNxvXCqtK4kbN",
  "key12": "3hF9BdJDj94e2feYhwtx3mgonrPkPFL9ehVD8LHhqutFo4SR82Pcz9YMDQzPe9a2G4iWwmnysXAEN7V2EYwe2j4H",
  "key13": "5zM6sdL8JdZYgi8Soxi9PKW7nK73cVcuTsEFuBzwf1ACCiErKvZtP5Qkye5n6HVuRvbaxemNZsU4GNU5rTrXFBte",
  "key14": "dcHq7PoSbQyumjt4Bo4jCPhq4h8uvsPJQtKeg2epsYbt1MAoHR5PBGEzMbvQgjCq83XyJc5oXootyX7GaUYoZSF",
  "key15": "PiS5iWLJCAowGjb8TnqBCBKamjNuFofQrqQR9trVeJmJr57TfTi3HmXvXwwKpCSeKzXX9e5HPhKHyFmqxSFPMbM",
  "key16": "5rowrwGwbnY355Ynx8FctaswwGF9p73q9rgpgKVSFCgMWYByY2qM84tXodGuP7x214qbYb2qwcEBWyNHTRDSjLtS",
  "key17": "22rcVCyHawMhjTDEbRBgDE94MkG2CvWdKqhR4bRHDofmeRdmYvmw9eEZvHxkmnrSfonL5CWCZn8pD5MzKeYduCCS",
  "key18": "2vuSymuj6DUA8rcbLZXViRF9veFW2BRshmGQ4qc9RNZbeBfbezg6MnoASKVCm5LFWbgwkFd4gRTgc58dTR7eLHE7",
  "key19": "4WHLLZki7fcAL55TEWntwrRSPbUMbVSg457vgSBjXN2BMXvSDpZ6JUEGR8Cve4hJqTgX26DHQR52dWqXy2dL3mVH",
  "key20": "FUsPRorVuDDdF3o22TuU3JJfQa9oWHfsYxNTXXvdLhSMFz7HdnQaPiyHsL9ijbRbBpKmASVARyXBP6T4ZwGePad",
  "key21": "5jj127YQzBooYcWGTA3QB2jyoac3sGf2JkbeSCGntfuvUgrXkDGynTMsBbYgkHD8q8HRnVHA8ogxWvbJTmn9i377",
  "key22": "vBK8zuYSeSynzFmBFT9h5knoUQ5Na2RKUBDBzZC1QpCHcKuuEpsLAeK1kiLpxCb92MKHe1gWFLpGYW2DHSVxbid",
  "key23": "LVVRAgYggJuhCJMQkmN4QvHsYqXe4UAxpx4Uum2LJNA4txJGPxu65XXU8mgqqVCYd1GBc6EoQVgqP6ZLn7p7bZX",
  "key24": "Dp2oFjKLTyb3AZL4nTUVUKNM8F4nXzk78oyM2ie4hbYNNPF2ub5CQSEnW3YKPSEuQ13Q8CdN3jwf1phFAkVNk35",
  "key25": "5iVhmwXbu8McZkh8ztS8WLLByenj1sAWpA8nwe73U9Nomc3HiaixRmDpDpPq5jgd9hD1wD1oA6FbPrFnw7iRoSBQ",
  "key26": "5R3nV3DCwG4DmcH9uUYKJwWWo3yLifUxwnh2zWDP3FcuARw7SEA4xGQZg55UUVtHDRqLfHcjkBZ2NR4gftQZe5P",
  "key27": "3PZfVcCJood7yXyaiip4sra495Ww6dFSAyefzqFzgM2Vnm37KKDgwK79NC6StaDTVsXhorqSUSvW63F448HzyknV",
  "key28": "3rDqoHD29ccsxSzLJUkQEvDcKTGcMZYW2cmBdNkLa2ot18xGZysvYgxjgvncgnDr8egQGatg26VzreAdMG8685RP",
  "key29": "5AghYuxWmgojzNN1sto6EWMXXBRrq1BQp23uReSxHKeWs5cyrGz2rDA22gHQZLPKopkKWqQYZDU2NSLp8YNy5Xwm",
  "key30": "26VPhpR9kLNmhw9M4vDAdwgYuqKG1mASqdzPXsfkGV2FuE2YQyj61NTnYn1ERugWSV46iuYbkQbuEjQUDrjQ2CJZ",
  "key31": "3YwDqcRGYUM2r4YjKvkxSdRfGMk5Lkns1faMGJNbxFos5FJLmGHP7YgqBNFn2xxZ3VKW1fh7GmVRDWahwH9ox2f4",
  "key32": "4K2brYxYVjfsPf51FasvKQhKjbzgeTd8KRVXqsPdo12FVwrXDsy3hJKaBvE38WdxY6HhSEYhJ9nePFgs5azNFZQ8",
  "key33": "KXxT7ghmiLn45dcUP2BMG7aSvc9mA7LzbMSgdU3K218LXSRdxxqxj1PNPsQK6C9SrHbwrxdDZ8KVP78amPhmVZZ",
  "key34": "2YB2rrMv4ZtFWteURrBRUCmHjCHwrRcERjf5yu8B5s2VABdG4tMD3XoMMi7nm2CCXofkcRNWseZ79eiKmhoxeQxs",
  "key35": "wLCkVaiDmdAz3cu2r6jmGL2CAiEf48dyU9oP7eR6FG42Ut1pbuvfZLMGeCL7W2VfZziw354fmwBbCrUxdn9Bfu6",
  "key36": "4kUh24eqYYbaemVtARUtbAV8kwCxdL7YgFwEvkNYG2aVib8p62kSUNuqupZ6pqcq9vopWtCXEakb6dhtNPc3BQPY",
  "key37": "3fjWK6qCve1pp3TNQvVdidBRQSWXBEPK1Zui5FkLTS3GRbewn6MMCeuke2SMuN9BKN6Nw2uw6TE7UBsAPLHLPAtb",
  "key38": "2F8vAMn3zStzMWTX3r2Rs6HvU7YsY4dcmomzBoExYc3qZEbJYp4cFJJdGmLR7HJ5qZK1p5ShLnNKtTxc9tf1rqgJ",
  "key39": "4zpxoRqwFa7AcBH6RbqZRXqM75E5AeNgWuCagb8oHzjbGjqUbAn1VvX323CgZthAdJY6kquEEqs5QJiVkTApt55j",
  "key40": "2Bbdgd4aKfFL8fmdwcKY7SZZzk4MKEfBiBz6sPxw3iwNG7hRrBGKMvofh5YD6c2L9o3cZJuGPit59a6TSyJu7pyk",
  "key41": "2vjAricQgxe85xQqDAuNTnHAdutZb8TkrDvbCfpW9o67AWYBeApCeFsbFvAUzDjRjzBWGFR2PyEbNdqTQANLwGm3"
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
