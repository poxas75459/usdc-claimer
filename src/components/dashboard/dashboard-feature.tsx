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
    "4L6qeQhfckHwfB9SHdhMR8ofYnyFuguHpyf7c6FkDg2boE4xxxFVEnHXNaamp2QEd6FLeLcG7ivgELevbvQK65sY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a5dsYz3n8cJzm4wexJ25UYNxPBXGfeZZ1kPyBJ5ks1Vq25eJY4YCRNJfJ8p1PycxngJoPmkgYhAdvpcJpnsx5tB",
  "key1": "4NzieoXbENiAQ6kSrQxyFWXzPTJM9M94WCejNVEw3UGkyGgn4chHmmqQmPcxUz5YhYgYm2YYU7iPsgch97beBGmQ",
  "key2": "5GEg81sBgTKq9qFFq7xVBkqNPCVyRBz4iGhh2XRoQWvCUzqZMYweq2gSzBJvBjBLdPBMkaefuiUu3Q5oGFqZ4upp",
  "key3": "CB2Fzi6cKGb1d3e1B8mxd4Ab6WTzfJXmuQuvvYGERguCXrfXZBJ8qQdizyBrkzLyBAbvD7idcbfcRTHfrcoboix",
  "key4": "2juE4rK7kQcrrziShwbYGMoiAeFjNKkPgi8oV6CZMtESg1VGsoNwmVSt95ETpEqFtc2uKwGnUb4qt5cnQWeLzwXQ",
  "key5": "5WH2e8dy5nLGqMhkWbCztimEBpYHj4LpjKjNujL2gQwEv4M7Es5zWiWkjR6Kb2maho1sc5B2EeaKtUcTyYNjvWXA",
  "key6": "3sMoYEX9747AVXDrfaRZsmMWBjh7MREcTYU9ANL8oR2FHd8Y6egKnPgpZvtgCWK9tukcvvbZ54yqV5CvwZc9jUZo",
  "key7": "3KcbjzbMzFRkDbaoy1akUfdyfgF2AX8mhSfNBerNd5q5jybC89CaFXyKMKDgbfQDqpbGFDJLURZryz4JtWxN29ZU",
  "key8": "sY3Wy7mrXGBsh5MZMMuyW4pu8Z7yM1LFRk18XiamTqKRPLhwpepkYpKMPbeZkskq4Vs74bu5ag9B8AFhUPRPHck",
  "key9": "4b81CoRSvkDQFEeaeapyZWX3GDGySPvvP3izM22YuCjDLTgaXt1wsozerWThUni8WXFZSkLrP912XDsDQSotmxoT",
  "key10": "34tEQy4m9LTeTXokHTPceEhEgU4EyuU1NWz38Q9mX7qaN9waSYGA69f4khGcaHRzBhZhRRH5SSx31GHiFGLRwPWG",
  "key11": "28QCMqGJfSdM5U3iniKFKcPb7GkzV13vuaNP4BbFtv3jUmjrKXv6BHKaAx8tv7D3vUUUGP4X9qy48eSapwwXkEwT",
  "key12": "3okZJGLvkoW4CroaN9yUXGZYp6wxRLwvrxF3st9ibBZQhaoFqWozV72wjjnADemPf95MjhcfTPDvhRDKpDgWhZjN",
  "key13": "pda53HiJ9AeTsR6RsBZdoAsRHzvCKX429kJrzKKziJ1L4Z827mjfA6qBkCJjVcNDpZX8dMGr6u7RhLQFr6zkZ15",
  "key14": "3553oBwqHnL84tPLhyV9v7bkDSFDeLUkGDYK8m25YjVdvczp8DJhCq5bGTXVBhiBr4qL9UiVL31z8Rnt72pmVTRg",
  "key15": "32WqdQRaa6aa14WhAowdNCZnTih2YNdmp81warCF7LM9Roi25j9povUzcjkrtos9eWrQeuT2Y6Ng8pXqv7zqtbLi",
  "key16": "3ZAHQ8qWSTsAf1ScKUAQsPhrvJ5DoouThVWkCCpNN8oYf3yuy2SyfCzhzH1tBehJ6yZsZKPwQ9r8vdVvhBnGXpdR",
  "key17": "32zw5pPYbkiY9KAVvo68z1vtRa6PEtKDV4JTMiEYiBeDACpWZd1nk5Eaim9QMcncc5298N3iyQdQir5kBv3ZSikY",
  "key18": "h2VL1GyNuQobiMvcxq3c46CpA8KbjiRSqRiJA2hAtg7asdTgmuPCMvUwPEi5NTG6mcdwzfxRFKGwoKSvh2TJsHp",
  "key19": "3SPQcV8kUWbrx1BVnzYdyNKL2GiQ6nxAULnA1T36f5eRcWwLiL84XQq2eXNu5QJUy7mchmfEernHRpkz3LsujGGZ",
  "key20": "3LVeHJ1a9kyAZRFUc43PkSTajnAa4macoEKzzrgDnEynhfHBz39QaCc2h8R7686FnXxF25VyAoDwdRmRSKP2htcG",
  "key21": "4pSravCCwyj98waZeVhboAi4ehgnKxoetv9XaVpxnCXSFhzmLz2JENzqj4gtdcG4duWNBepuTxwztcNnPeh9R4dd",
  "key22": "2ftiE8oDccgNAe54zqXspfEVS3kndrbXj3avuqfJUH8oztzS4EXREmTRTE8wNym8onWFfHKwRnYfZxTUUqTds8Dt",
  "key23": "2VACcetJoY5ThezYyDaBy8YE1SHLogSLg5qKsoMq7rXPHxnSuJUNjDNzBcxi11mHmU5badEWHhXsGoY2Sx7BZbEi",
  "key24": "5sac3L86Rhg1kjJ8i5RNB19GgwpsMUdbRQffexHVQ6GiwZ2mzxPhfTAfNRHMfyU5CsbBhuKUCJbMHtLXJVzyh4eF",
  "key25": "39D6k4BkiuK1KsWMwZdfTqx76oEknaAXdcY13Lz1M14oQHeU6HNmojcReasjUryPzKoCYxxD6m7JLWRzbSBR5NFk",
  "key26": "5FgZbjFt2nHqpg6YPNur1epj9Z3ckdn2hvDiyu4521udEMZMy4EQxagQPXesZ1WoQ2BwaXZotT58XFJJRXtdpFnf",
  "key27": "4bXFBQxVhdJzkPaykTjKb2z7KrTcmNFhfX6X5AVDFD3hxotC7ho66UFz5k1i5jMzooyWE9mou5YHZ1UkjGSZygVi",
  "key28": "3GJdpyHDUg9r6PSfwuj5fsQEuHui4jUUFmtPgycs45dXTTEWZW6bHkmapJGLhcCLR5b9YT7MS6Hr9FUcfcaetEab"
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
