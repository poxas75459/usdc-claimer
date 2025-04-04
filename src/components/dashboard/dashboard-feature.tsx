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
    "2dFRz5MPRvVTYjiC7vPf1xfqwEqA1Yj2B8p9FDEYWvs6Yweinj2nJaLxQZ1XQ4FCtGKP1uppYecJWi8cZ5VSYFKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hXrgz1SkMWo1zPvvNE7UGpJ7QSi53s76eP6xXY9yyqjsjkG9kVWChFM7Ek3KGRHShnJ5KVVogqVQDAsGXiyKJPA",
  "key1": "41K1AhubSow66rbLuuKT5r73wedBkvsaicKS84RmaQyRAkcdpMEmnwypvxkWaeB6YBFPTuVJhs9Kny7uLRExTSV1",
  "key2": "3DixFoteQFYs8kJR3aV3jfvNQ7pJXwwNxKYgem8Wo6HUCDMNfGbVG9dDsguGKZ5yRtKqMv9R4HCShF83wNEdgYQc",
  "key3": "55SiF5RhA4tWbYHdH8yFCLNbQDaEg47gNmfHm6mDb9NGYJSNspMK4xZQ9CAKbsTw9Yg745uFtKbja5etkADSry6A",
  "key4": "2qasptZvS2Heq3yAwWowEHok1vV4nCUAtaLTU1Ce9ku8Y6RaGivhMxYC9hFVspSS5k7A4XnCyL7Pvt4z93zYwrhw",
  "key5": "5jftNQMrkiXsQyqFFF7wE9ETfHVcrikgefcEAQ7QRwsidUPd2TVcPuMFTSKKVZ6U9tfHiL6z7wcoSQzgyf4wPYaM",
  "key6": "47ygR9Uywm3MJ6ihKfuaBhuXBJoLQv35ybHqD75S3Whs7Bx99jeAVXNXGYaHudnKrB1ffQ92WPPUo6sWceE6b7B5",
  "key7": "3nRV63CGZdwKRT3CcBUvQMs1pA34irrryLfyb6yRxfsk3RB35Y1DUKxRKosFBz5gziucj9QkbB86Keu7uEod2VV9",
  "key8": "3nmdBckNqEde3WW27hxHm8od3WbAbXLi82BuAHp8p1c6GG1AV3vJQmnLA3NqwX9iWDBQJwW9mR31BP5Si1YTfMT8",
  "key9": "3Mj726mxsv3VbWP9qFftbypfgqeG5vZiwV3GRHiYsxNJ9TSdN9vUzwCemgAn9dg5p4BHU8EfRT114sKTYqWUHm3h",
  "key10": "Hm7knw3To5TQWJ3pc22kLKCMvtU7qhtBSGZFWA57fKjtJ8ehbztPdG6HyS7ToJ7aj2nyRCMuRSEnqzAHbiEZ8HC",
  "key11": "qNSFDrzVteP6tZiQVoaM6zEon5TrLi41Ptssw7o3fEsrKja9rw4DCsN2tXvtVvwdsnipojTZu5PdHvcx6LRpRkS",
  "key12": "mTWv2K19677Mo92X7rq8TjmvHvijRPc4vk5YiWgWgiHhJiiKWrJbH4nMLagnNxUamArxsRSCJHiEkjJ42CR3bf3",
  "key13": "4uYvT9kM92jjujgBMN4RSLyTrPV5mwYVVtLfaXFWBriLt9e8Xa1CACBUczCm3yRJVeEvSt6dxN2V1tZGhH4D2Bdy",
  "key14": "4jNPm5ZFWSomH5y95DiHpXrY5piCZzapNQ8Re4aTX7QigVomDda8aTfho8WZTTpVWVHWdJzBYjsEtUhwmZTquE7V",
  "key15": "37eyqq3V5Gf7d7nC9p2A27FrRcXK5VUJDGVM4rZbzgJjGzhT4GN81KX27yLnTvGjCrghYGZkRhtSMQv24nhXLis",
  "key16": "6Fyx69MDi8jFzrdvaUvjZhYbKsijxAD66nA844ez2yxMP54LxrWgdDLkHycuTSSXq6McSivhLkLZ2DmApXs4zN7",
  "key17": "9Cbo4LPbfSX7a19Q87fjqNUzHSojiXJi76EESFErkqZBApDvVpM1pEv6k4f8VDqw1yYSAfVw2UZYnNUgr9pQyJx",
  "key18": "5jXsJmkmmehU7Ctkr1Z9cYd2J3MdnbZK6GjNDs5KfWFfdhvCAvbBg4rEYYMVYh5NTE9vH6LYw82niv2qzERPksph",
  "key19": "3vJ96PBXidEp7M1Y3BQYcBBdkGP41sMLtxGaubkqLZGj1QHNzCYHqvnC2NJ8Vm689FzGL6KRjrrH7vcCTEtQuv66",
  "key20": "Q9cBS2HCt693gx6RbPoAbzZBB2h2mEvpEUnCNPsUaPSfWtVLCZqbUHTX3o3SsHp5qzXV7sE2XPRPAJuAjEfEKQc",
  "key21": "55gjMMLqMAEpPLQuJESpvLhoKCikpq6hCd832jsv3RFSXDRqNwjAHRwgzPXChaGkLgQTk5vVQPcz9VMjoYV3UDmz",
  "key22": "5r1LVY1Te872Dx6qTQk7xuDKnCPvVJvxrcYhBSa1ocPyjz662y1gGnz7JHjmF2bRYqKgVx6h6K9hBq8MZy8Zjx2W",
  "key23": "5xR59xsSNhcMRfspnw7eF4R9J4QmmDs8YhMdpX3yWPzs8v4bese7yA9F3DXbDayj5QLwnNhjxnGTLMjX6iSHwWFV",
  "key24": "JeJ3B6Ww82YAM8tQz3DYGKJHiCaaAe1GkLtrXVSs893sAPN1MGuxxJrXWMJmZCCucc6UEpHmHWc7zhjvqMFtfkX",
  "key25": "N2uZRYTCGYCftSRQzdJs7A97TqBnTmM3ge2g7YMjU4a7mBEhnpbT7crV5pphrjFhkCvWfTmxbc5otd2fkmSfaMi",
  "key26": "5yDSLdkB2PpBiQNpKZVd2CBYuM6JfcWt2YnALjTqXvBhh5vxzS77zXd1pqZS6Ldwm5vwkJSvQ7WLM9RiMuCctmEM",
  "key27": "4GRisAFfcGjLJ1VZNEpWcrCzUA6rr1NZ4knXJ9gPoX2HjSPUPJZWmxwCc9tz6Ym3SU5ZrHCpeTRzcAUpvxqqihhC",
  "key28": "4FS5eo7Wrf9Kk1nYjwBueuPdfH5uWW9pQEUrhsapD6g5EoPUfZqqtk6fK6d2d6X4vvovvz5hUdGtCZrMNZ3LaHoM",
  "key29": "WiTYRGpmfHbU5AHAFCq3Y5P1WhLNd1HR3dbZVveQTf7VxgZVuutWx8Y5n7QLGPLNgp4bksRAQq6FYAqqPWfJE79",
  "key30": "5BB3w1EMLVkG1PqpM1eYuVda7JTydL82zQYW6DdQXNTBZauwpTSan1jLTFN4o4iDwBCc6ED18i6cDdobqHuGvnxj",
  "key31": "28p5gxGXT87P8Ku2hQLn5b1KG6ijhyht2rbi7o7fLZJNAbAsmdPU49Ladpc25ftrGCBCe7gnPFadpxFdQhC67PxF",
  "key32": "3CjLmi469kkNUA6VuRH7UHJYwCu6nXs7BVoZ5CCSHawuKP6LVhZUXuKG19uzM1XQSP2jZVQoFaiBDV5SjQNvqFKf",
  "key33": "gyRKrWmZ6PBbeSgZmZnnVWWpfCk95VS6xP8GAJMHjtGiyUbqwimi3P4MMTPCtwhXRQhq5o1MXNrib8f2UiLyrar",
  "key34": "37nhskaLoHCxSvuNvCzsCVXGusuQ9SmV45vEo56oVvpzL7qLCQCM3GvN9vz3izP2v6PcL8mL16vUho1tnumtA8x9",
  "key35": "AV19jciL5Ex6F1t3Z8H2Vb6GDweJf9yUiP2tvevctdTVMeL58xVe3jRTkpYk9YfkoDNZ8tr6tjS4BLtmwApUStQ",
  "key36": "2ufgRAgN3nuoNg8CM941Enmku7CjoCQTCYf9zg2NRG4inqMvhSAFrmM67PVX3ccDwLV5ZX8JctDXmMBQSkFWtF9g",
  "key37": "49mpihAz42SSb5TvnZ6yMWRLCQG1zrAjX2DfRxTMhB5GQBAPQB2YJeQN9QShdoAqb7ny6pChBzDLmLu3Xoapb3hU",
  "key38": "nypELSXBt7RhDFo1hiMHb3NaMQZwBetM7r3MDKFGAsLX1SNZxm7jnAJkRKJYjSPZuEABSxWruscEWzz6En5bsHi",
  "key39": "3poCmGtBhvuAn9sSRovwePapnHzsNPdRRG2vQsjuQfRKYnDHfYXzpZmRc9raCXYee7645Z6wzW8fEuw94y5gtdCs",
  "key40": "p9WXQQPA5mfjeGjbeK5AVma92sa9tYC5Hpd1T49hVhTiYrq6i7ymrdy5rLwJcqom9RAyJBYFtGrHbQyXsuc1FNC",
  "key41": "5DUqQoJQNH1ohbYYUPCGPKrmojErpUzor4zZGdbL34XjighKbQxzQ5KsARJC9ZC6ffqcSg9MZkueu5dNDVswM9YX"
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
