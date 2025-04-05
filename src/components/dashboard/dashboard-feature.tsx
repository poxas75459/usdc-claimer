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
    "2QAznCZViCfVQHLd3EoTMMkYsYYwkYGLESSuNfrCAoYmeX1FeVm29Qqv1bXWu4aodVwTwpngozZyujR2CQx7Sfe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oU8HSnLYaJB3cCxF5A2xQ9E5xWeHiXbWYbJtxNGTERb9jRcfQYpDGE5Vrx1Sqse9XfmWwoY9XmbqSGUDaBG6VEv",
  "key1": "53r2KyDz729KdDFzBwucxXLM67LuiobA5W8VY8LvCpUXop6Rk6muBuLxo667MJQMCe2kMZRqiJ2xAmgs7L3y68cX",
  "key2": "3cagDH8WvaTPoUxV1yhfhC1LK1o34dtzVfRe5iJTPAHuEBhbEtRZm9EYxrEzQDk5fuPpWS8hMp5vmhfsKqDrDCw7",
  "key3": "Jzrdi7KZNNe9vgLk1WQ3j4VtqgcHABPBGTECmNA4Pbw1UvW8WvUUu6ubyNQppX1cbx9MJ9gMhHTnTBDXFrU3HD2",
  "key4": "WKm1YARQazdtYsDVYrRBSNEi1R3FRCKAH5X1C82iewMgSduX5DxGaWRud7Zq9qSzsCxGDpkY1fd8nUX4QukHuoJ",
  "key5": "2cnVdDws9ypsvmFLWBZ9oiwmMMvYy6Q4TJkkZFVFQZy4UFPjkkwbhugrpXvBwR8jh3Phq6axwvNwCTYBpUWDX7zT",
  "key6": "nsXuVKjaq3vuuYfsLCSQfU46p9BBnvvvhrPjhgcqHL1geC9GrbKHnkdEVb4DzsuKyj6PnvvxktW5tjAcGNa7Hhb",
  "key7": "UTLeo2HSRKiqD3jke4eBeAazM1JuVSbtVa832qFkpQbimWdWnjnCmjNx66A3TrgsaRaiZwvvLwpWZngjbHAreLs",
  "key8": "5pvuUcj1xCsxXULdAUJ6kPwQ9Tzpt479h6L77Giff1uFvimDVoYnGbuk6LvUnsWjt2io5FmRtk9UYV8o4Ct8RFYz",
  "key9": "4XPpJHdMpbxkw3aGjXAdvriyWvoNZ7uYsfeYA7uYPcXx5x6Rn8T3ZUVEqxo3PxLfrCq4HaesUq1vTE3vaYZyYknV",
  "key10": "4A1MzU3zJ838EkgiffcwXZENNEmZhEWFZhGma1tpPvV1eoFkqNqmNi49McXPVGp79hkojPaUEWKDaRnPbXkn7YXQ",
  "key11": "5fjqE2y8GxdTvJfzkHcvGd2eejiaE9bc7UyfcCgoEnvqgphZEKdCwdgio5h6esAkqTFzAaXvHeo1uo7mmKPfaLCh",
  "key12": "U2b6hBxDRmURAPriWvfv67tDKUQe6q5pgg6ASAntP9QaKE8QbTT9qsz4YYpVcoXavwp6qkbhuAs1ZhVvnaLeP6h",
  "key13": "4BvTby2zeRwXRq6inZzQBN6heugJeEivJgpxAMAjmhSvrrX789w1ATrSDLiNukUXkxEa1tHQ69gyueJhEQVgLGNx",
  "key14": "57fixqrnygZod5Z6vwF7VTVgPAa7ePv5zwtRarHKEwWwUudw8LgPHL4oZGVLYiLf7qN3YAx2hFHcHpQhLZEPWZVZ",
  "key15": "4LNiLbAgnqoziNUH6JVFF6Cjk8VMbrsnvr43Xg5WFf1BhBb2VdU2kTA3mtdCVdNkiaPCMZFZpf9jn8Skq6C5GUp1",
  "key16": "2ULuRvFSCTVVkykfk5TxkXkw6HMQoZxKdfJ8Nv8FP4vL73eCop47Wkj6U2q8ogSsSFSxz9Do1AvM8hF3g2AK65Ru",
  "key17": "pf7Wbt9StLg7TaKCgCQfMcJsvDX3A9Jz8cAth5YhnZkx8qwLgY3j7QxsndaHeJ64WG7j4GtbBVbcS4R6mi2rKVS",
  "key18": "3Kkvu6gfxeQNsPFB2y54zGFmghyDtWnDZknfFQ848oNjQs8Q7GnKRs2Q6c3LHPn7ijiUNAZnedp4B3r5GSEaAvVs",
  "key19": "5dYT7y2bjCd3NpUWqvC1j3fVLXDxRN62pC7zWJUMPx8uDUkPd7zZXkpnw7mkpdr2ZvtiYaSbHZ7DJUKWH4KUzhAd",
  "key20": "RycJvVfWP55pom7tKCxizD5P5kK9KyYoyXsmQzC6Rw1gEMaQLtDMiw8twjUamPubCh1WCrJsphhCJ1WkyFxXr3B",
  "key21": "2GoHkpiC6Bi5waA5ucdXWGqFoyssktjtsEu2gdQnRjD3mrYu4TPv4sxbPUhXLMZmgiNeFVtWR4RTLwads35Sv7WM",
  "key22": "2PMgRBECuoAKEvTo7HRpGj9UdAEJU6dah36zZu28HAbUoU54Hx6EChauikBXqF6nbd27yixj2gqa7iGa1eHi6uBu",
  "key23": "4EdCz1rHma5mp1odkTtXpYExMpQKdACaxpuRV55gSavXABFe2nTeBWPnH4Xjot3uw9DgYBRfBaq9mWrFEL8md2P1",
  "key24": "5rTpjRNCvA7pNQw1XpASBPUgd5GFKRTZpvjwBNN5XosiDknJdny4iiRm1DKE1zCTC7WE5CA3AWFKA2gcTCKd9doj",
  "key25": "4WGnyPjEesqVpZnvwzNmssKTjX13H1YbrkhS4iz6pYag8TNsMc5g5WwbDaKiCyutdncm2tLuBu4EP9Dn89NMBUvy",
  "key26": "5ta1wGxzYnjcZsebbazTGpqQtALNmSTYwvbWhCPf8U2Wy4XQVf9vU7mAMEy187fg2FDhtw5dQyRGA8eCnCesjR3g",
  "key27": "4hQgtnaD1UpuD1aXbC9SsmcamwnirzRRtdMEunZkFmVwL4HxvxUWW6scXq7gT2D2vTBWMd7EjJh6wehodaRdJsXw",
  "key28": "YQjsCcwQnK4vGS1g91QpVNGLWs1h978g1bXk1BdPZ6dtLBSLe4V88XU8BPQ17zZG1VpbJ42mTQDyjYimSiUAeAH",
  "key29": "2eRcthcBNuZH534r5pUbBXmohokbPaVpf8vBTKBEgyeujokvkSL7EhD1GvVE84Wcn3qb9DE735NedRJSSantSWU2",
  "key30": "4xbnNEVZ7Ei8RAFTEuRMJ1QLPr4JE92Mgh3JSvWQAgEt1mpUXwRjZjwaXqm3My1XDZFrsL1Pnkgt1EtpqhK4SMSs",
  "key31": "35cydWG6fEyEV3T2zhLVmjTjhUxievaK1U5Gqu9YXvaksd9Y5fM3gVx5n374vBfoYd8pf2ainVAacgtHni4nTXxx",
  "key32": "3VST8kapzjro9Umrpi9fDU7NPMBfXwUAXACczkBNhDekuvTKffc4nJAze9Jw5X1iBXvFHXL4XNaP3dwpGAhYxpBz"
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
