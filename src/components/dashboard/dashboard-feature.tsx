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
    "2zXZRr59jqAbAaV88HtaWT1XVNePVjV7B5MZY4Mpe4w6u53dn8ek4kQsSqsbh4UtwZucAuqw6HWFiCSrsQ5PybGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3axD1k7rx7gT3nNRtZmJvqVmdQ6ciPvx6iN2o6HrnC4m5sFBxXAnYwTgwP5nMF2sYRPSi6qpuWuz4W9iQub1bugR",
  "key1": "2ew9kW87exG9go6bMsBR1RdiprtRytTMCsei2JhygWVVYcJggisQHG1uDx9XEvPTeqk834QyG3baPyKuDh9Ei1Q4",
  "key2": "2LqR7WGNPgvhWGACs3ZjHUWFE4cMnyZWwUSPykiEiTmBsAFj6Q5xJ4aWZKXRP8b4zqpokwiqGx54eTaHfWbwiKPX",
  "key3": "3QUU1ja3ArWu76rPNExQsNJMXQSGvL9S4bShtrzQeCeXX4v7GZRQdTpCgnFwZp7PHZLpcojJwYo8JNvoG2ocenKH",
  "key4": "wE7fFAFmETR2ETktoxmNHEA37BLfPMEQes29ZjGaoTgyYDG6cXVeUSXfxWXZnLSCruY6uJV57BtxFbLeBTRZb33",
  "key5": "3AKYDZ2Kg4YQzxs5r8Vqo8kuJYyXryQroymbTYve7PEhwZn7Mmvo3YXUTi9cubkGM1WsRtW9uPFyEiQLNPg1w6a8",
  "key6": "47kNHRukVP1nrppioFzNVvxkEd4hEm9mr14Z8CADxt59jSgDujTaczNiwNJydpGMVzByWKTzcofPgS6HUcaaZj4k",
  "key7": "36queHTSJDzk2btnJm6fx7Zjv8W4rmWeksFAYQvmhN5Uez8HDfdCbT75bDHMUy8dvAFNvXiHggAjNVRyT3NoVj1b",
  "key8": "59ZczSi2Hi9hSbBXZ4ua47VVE8sNxzE9PB1Fq9A19zhcFGWpYHsogc1K3iPC44yZhi6BWkaKWu3PBekxzzViFeNW",
  "key9": "5dd22PD3SDPREV825C1kj96SQ4fCRj2DosW6fq56hw2o8FMRG6XuTpr5yUyinwFTgb58PJrQiFVMe7RbuKTAhC9C",
  "key10": "24HYhQnFYwr3KNVYPt9RdtFCUn2vRPmnznYQ8nPo8tpdDVzE29roEz49jqoofR3DPNAP8K84ThnNWo5M4vRVTZ7G",
  "key11": "36fgTWbvTED4eXvCB2vKfaRahFJL9EmmJrL3gmMdhpz85HBs5taQ4qp8KAgaE5XimzPLZqsU5cg5BYy6y5kaQArR",
  "key12": "3j6A9Wa2jqhafEc3NFnmcpNCPeEnvDbqs5MwX5i9y5PASMYjSum9cN3SS1KsQewpUggi4aeJCtVkofzeGzS7w3a6",
  "key13": "C1fNRUJoc6Xs4rcmaG7fBBHDTTcjydajjWxNymuKpMEgeYLBAr831mi8ZjhAPgZe6BfrDiQhfm81hN2Apssxuv5",
  "key14": "4LErgB9WxtKZz2MTp2MvXXEaE5auV3VaMpNRxk2s3KgqjWAnCB1aPRC2ELP4g1u9ApFLVPih1UjFZiAz4hTG7Vy4",
  "key15": "aqVVbrCQwVSLnza2b939X3DumUXDuYxMZuUXQbWpDBKyaG8wJVGeLjQiFa8iYdNRvzS4EiUYBJupF3uWYupwPKF",
  "key16": "2cSzMtrWDCPaqLtjnUrMG3RZDJtUK3GgtfrmQwMtTBByvsxozMXhQtNNuXiAEtzWAAEwezWtSdq1zivz2B7WSzbR",
  "key17": "2qoQEHkY3uDeiyA3HHJvefDxK5rx94fFgoqUgQUHUz9dE8Jx9UCrbgoMLCjaHXTsazC3Xfkm65Br6sKwhQxkV7ji",
  "key18": "327cuRaPiwD24QQusCXSSotBrxNAJN88coysKimiCJyWpQosyZiifuMpNqvZhtRcNMjmXMhxF2Feee5RKWGwCnU9",
  "key19": "3mBUybwizbu3S17XJeyT5SFPNqNK1kHKFDCUCLZDi43dfwVpp7uPo9fGpC9rNk3UZqzXT8xDCSYnJR6BcULiKuji",
  "key20": "3Yhp9usS1eQdfWqze8t3juweaYNceNxMLHiDhxUbfVp9mG3xRatjMQoV84MuqwZ3pS6EsFJAigGsvqUDRAev6usZ",
  "key21": "AHVw79XmpaTibLXp7JFTMXcTvhbg86vhC68zPiDSN8uU2oR6Vgv5SVJ8F5ENZMVx965HujDjocSepFkzZh8dL7q",
  "key22": "3kh74vVsxmrbFKdWoPqXpfnH3HGykZV27qkzpb1AxN6bAaiHbLjM4UjRwBzmz6WPE6JxL9VyMPTDNBn3nQskuhfG",
  "key23": "GfgAtgbwaCVuTv5fKJVcyCYECHSM5Vk6MSrrCs3JVZxNchSE3oKdCFBHRgxByizLNRHisx1GmoVw1giUeaPv6W7",
  "key24": "8zpahjgvmKvNRhgpdLs8MfBY3tUhGax5wVZJTFqd7wov1UQAqxTWbwxhNJZQoPBRQCiwemCoNQT3PAjhs8oEhbU",
  "key25": "5hVWUgWXPqjG9uhRdSebN6KNmqN1pcT1cWUtL1VJ8kSsTUhMkWvuVET91bNQF2oJGvMV1Pk5Y74FUrF5k5Pvs59z",
  "key26": "4sYUyTjEXGHYvF7rb3X1bsxzfC6enP1A4TmJYVdfdkojeqp2vcrvZZnc4Qagjids5h5vd4pxuJYYq621k3JoSaJX",
  "key27": "4JpuaorsEPfXVZq1qQL1f3UWPMnb7oDv3FhgF2BXLtYVzsWFzw3Hti9n1DDV19wYPY3e8yVhDakvgVAqaU7LsPif",
  "key28": "2kBgha1f9PJzwcPwgNrv4aLoReZUzVDzTkLMwqszVNXgGhYx8rz2RXYqpHszcfCdXUhes3V1JuVd7NunMvDFpPev",
  "key29": "5Jg8SGXMsUg6BeF1HJLRfPw39YRpaToNBK7deWL1Uyy6gXDE7KuLVQ8hyVT5cF9z6DhSzFjeKs47RLP2hMY4VRX5",
  "key30": "3bhzMnkJzuH5dAsq9ziC4WnQtFuzUVZfdhh1iGUTCUA6Ei77Lx9pfhouDEEyGDMBkfkM42TQ1wunbZ1n9WrhMGCj",
  "key31": "2gcZS8sZRYsrtz6gg39tgt9zuR68cdtrrYD8HPZV4Ucgvy6i7UcDMceKHsrC44KU7aPLiWfWUCFY3abb4NuZPM7o",
  "key32": "639RmUfJKnHXSdKtkMxyG7VbxjnDunD91fKCUwsvoYa1TT9cV3ZKt5i1Vq9Pq7ybteEMBnSiZGG8dZs62QCRMBZB",
  "key33": "2hobNnVSLSixcUZshCkwoYyyeSEyFwo7zxKQeVaN75VwMVrCnpZE2rtAanmGaecR3ZJjyzeGXj7Gg2o7ZokhpT9K",
  "key34": "48SdMzBEA4J236PSQJf8WuYLTGAPGUqJXnEeJXe35JAauRYbz6Z58HZtVAUWBHt9iy7eqaR7kHSRYCvyFqsJnwj",
  "key35": "233Wy2dpepLd5PZsF84NWKqKmSszsxsckWYSt915ik3MrFvT4D7Bn82BoGsHTe6TDstZmh2i1RJsUPXMfeaVyPXt",
  "key36": "2cioAfXToaSsnHXEbzAnEb3ZKXnsDrdaVjf58KNfAjEwQTyz9i5VW5iDWg74QnLdjFcabbwJ3ne4qE3cnjNndEBm",
  "key37": "2stgkVYB6RyBBHGfpbgCDMMRM6i98muXzezyDWYMPqJQ6xzZZHMqzhz5UtBueRDaB9NzeQu5EoZ7GAdRn8S6eRPi",
  "key38": "52iBR6bdU8rJArYn84W1ejdYhebD8CGAMbn3GkdNvMBGJ6CpSNTCpjaFwbeH1BYtPC1MZGcQat4qMzv761Ts5eNd"
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
