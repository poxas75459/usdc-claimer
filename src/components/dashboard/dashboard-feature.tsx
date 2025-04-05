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
    "3P6fVyinayFHpADN43Xsiv9vXJkDcfyr68yXbpPppMNkNd7LDF6UNgFtidon5sdmpgZJMGcNAXJxhyHUNLhkvEHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46m8Fw5yrWN79wFD4VCt79mZvfQp9tisUfgbXJFAxu9vC3kpBjUtMKLFrxTxdQ8v3jvVsJvK6JTysKAZSWp6PuoS",
  "key1": "CWFkgyfFJmf7Uku1ZvvycVuLqu47rmD8ZxG9wS4Ws1cvVuKyharZEHkYA8Zgv1ttQhX67KNjv8uJ9ZMDYiMcqvW",
  "key2": "48wJbR1yjzZu7DS7KTBRTrLdaQvJXRt4kUcaExsTFFrbeagKGd6d3GT81hAo4a5S1sqNxdk4eTQ1BXBML8f4PAqh",
  "key3": "5BrSaEa1ARqo3hU3xpbMezrG84ECk8xr57powZ8V7rsAfng3r4AL1hj7T16tZGmEx4j6NCd1zrB9miVfpExaU8E9",
  "key4": "4WEwSz4uCNSEhF7RPkPSnojRD1T9evcMeX7SCUJeX9QiReinz12Ajwr2fovsTMrPmifw7pC6EdUCa1EtEG7MigE3",
  "key5": "56xtoXQj5pYjmvvjeBDpQy2eATvqtUehGuZuSQt95zFDJu2Aoqpj5surpcRz28x3YQ3nzKUVwEkFjmor4pe7dPVE",
  "key6": "3pSwadHro223RyZWkz2WhJ5NB3FQtonwTciCNvwGfUNj1m6gbPW8a7NA2VP9BpMGkoj5FpeE7BoPjy4cYYVLkWzX",
  "key7": "32AVNB3TdECtbkPUfQ7FqAFjNpnDtKrPg6aDXw9Zc82K2pZkqtgPTus6HC5q97WVZbfmtRAByBGXfPbnwv38YTjR",
  "key8": "59tQx8ji13nkgJgXaUZ1puZzu6QzDvfbzwgacuY5szMCNwrnZK9rXNpYA9stJS2muyYfqwZLpTBZeWfaBXBxHrqM",
  "key9": "59jdkgpxPB5T3dxmHstR3LXaxGigNWH8b4tEYNrHXkW2pQTvtYwT6SPWB37p2XjhBHciR57Q3N4me4edbp71iawt",
  "key10": "fDshvp1nPMAHPRvrABrbb3FuDHA37x3BwREbZ3vV6n2VAfvDEsLHJMVUkbnKrqd91risxag8zYN21TShRwNcsrc",
  "key11": "2a6jKY5stYJPh6es58sfnDJwDNhGCkKB2DizJ2PczPT3oRmMH9W2Sss36PeSZVV8bsudAygLESWV49G1U1SxybsE",
  "key12": "ekfyrjzDbUdhJdvPPPX2geDShuwa8zXDBo7NJ7Hs2MR81dKtZ3gfHwNFuAg2oHRbHUNERWQWxUkWRcvWfEsUZpc",
  "key13": "4sM2hUitRTssFiEXcfAGwT8hrZdFzndSeXSK6wqS9w5Qvn85822aQ1uFnB13w5JuUtyNv2Qad3Hf6cHPR3xQux8F",
  "key14": "4YumRPbmkoddVBFY8FdkECzvwD2T5kA1wUP4BnSApDR2V1iWKRyuBybEfy3S722T6CK7VPxG6z6L3DB3QV95iTXF",
  "key15": "4wvRxGDezwX81JpjF4aDM9TmH7bKSaJr8KHGSwLUbEkRfjY9Lai4dmoyZSTbRFGWp5cPBcpq6zKsKcWGsWFPRJLa",
  "key16": "5ZHmK5jiRuSRDheMHFnwhxttJ169DpNpWeoRM8nepy2PX2nZ2qh8GtKaRE16WhtBdc5U7tHn2cJ6jsZVGSvDyzJL",
  "key17": "2F3uhHzNs7c4RyeTG7TFQkHhwVgSxMS7a8QQ3w9ft1B5VHyvw6C5syrouRJ61Ldq6cZzvjyahdaMaqBXo3PMTsbD",
  "key18": "2TWKn8BpNXwJHuJzJzyjWu8pF5x2KiKedF5RnuvkQi64rt1udUcFqD2vKSd3iV92GwpCoykNzTyxWEXAPofVphxp",
  "key19": "3fpDbM5twH8zSWfSJ28bpNQdRkW8HCyUDKD3X7R7oB34jj95zA5Txx9HGxKBJaJexrVahEHbwQ7oc3vStReXyFDW",
  "key20": "3u74egaePxCrMBAnjYDKdotLmBbn3GFv181hum7eAGrfsCddNabJtgR5d4fDcKdYRBBxLnKKAKBKvRvZGtvJkAkt",
  "key21": "4FVaY4wvEU19vYE81VzsUQqAsvcQyAvubpFQtsq72vNKeRVtcvPdSfXTp43zVqHep1Lemp52mebckStrwS7FbvMV",
  "key22": "23oS3JDJAuCW5ZVPsMeYyymLCGjGyi4dEMvSaTQdtqSMcrmbtHpey79mb3wrQBDAAgFB7GYyKxj2wGhbJ6P2iNqm",
  "key23": "BcFbqSCbWQyHFQiFf2AqTrLaprnztisCCs6SmWc2mJdnGzSMtHBDxhv4SFDsso6CtqdXi39Swh2gshfg6EWMbTo",
  "key24": "5QN9DtaX9KQWKXfEHQM2F8ZdenRdKyDwsMFpP4SKngw2XJtTpCgxAcJbzopv1v48J2NTDtYTgX1Cf54sN3kv6xWC",
  "key25": "2Dg6zfxN6BJqywcaCofkqabFj7bhd9aCSZXTLyjo6wXUcHQjtnjJDijt8fj2H9ytNmiDb7KuYzHmfeaA3LjQTAWq"
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
