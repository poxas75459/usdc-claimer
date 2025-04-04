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
    "4icyopRY46MEFFt8D61YmyKEizLaHmZjsEzQbcZoCRWShbnWbRkEKJ5j3f3VXuCYmLTV7HeayiswMa5ZvpJau7TM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nnUxFbhYQZyXAAC81vMq22PPJzRJ7pcAX891rq7bePBmFgp1xcZAsCHE3i2ZU4EmAWbTDUEzH67J45qRnuDzviv",
  "key1": "5xGEHvpzpzPLCw9GfgBPiQcpoJyav8RbAB2Q3SuMSPAJHtao6barvA7ZmWDzfVD9UoDTdqR6QLYmVKkDoniecrUV",
  "key2": "ukeh5XufYyHBmUWiogCeGx4E7PxKZXBQ9JfLNTP1a1JfdhwSt93WQQTNnATTacuNqRTK9byCJRgaMe3WHxqwsCN",
  "key3": "2HkG7eN5o6s5pNX8PvrFwpfPR4L2wTKXZFv34kcmfSEA2DLcXDKJXiWwbjc5ajPzYdZZbaKrSmvKPjZouDJECDj2",
  "key4": "4m3punuFvm85TDfYYtkmKUWzQ4naL7RYQNYpHbvtXx9qKcMmjcCpQB5qpbMQ8u1rcSYHvDPC5FaAcsEsMcT8Nfc",
  "key5": "3BqajbkEXQMfx4c8JHNZbADt2KLiugTodjGpz3wcUmMxwybmu4CSkAqHbmrQudJ7z75KP1j5SAqRa46Jc9dvTrME",
  "key6": "386N9qf196fMMvxofZ9cvkADK63erntdyBavuoDSDBpnJoDXAuuU8YoBhraFcJr9hpyBu6rAnpCk36gjw2Zeq5nc",
  "key7": "5DH1WSS38pq3k5b7WfaaSfBjMAjKLR5kTkri56BTXyN6ppopYnpcgdairFYAHQckFAgVEv9wXc2ZoWwRLAmRzTSq",
  "key8": "3xqjwQh7uegSKekfKajw3mb7FafXHUvS13CBX5AJEnDdcHPk41ukskbuZubJEZAxnviPpgdFzHGjCJEKeJG4WHdV",
  "key9": "49BPcyCf2yZdGqwUrPuXo8bfWKkg54bxrKamSQQ4y4FRY9iQ46L2zbdKvPMo4Z91WtnfTx2pGwPc9wVcswAY4v8U",
  "key10": "n3aabXkgSNPomvAynbHWu6RWwFFhuTNHqEv29xwHPaHnTddgzsJuTfz7SxKqRsyRyD8rNodj3abo24ybfBqAo4E",
  "key11": "Gkge5g4zJiVQNk5LuUMGWkz9MtNCn89NXTEhtYdwWoVXE9yAi4Axymui2xHvty8Bifuv5hq7qSCTEdUhUpsoLeL",
  "key12": "4hHzyFjEdqW5ABT7eGXGPcRNxsfocMWgUyvM1CNXa8qcxkouUgr2T3gpA996FFALhpZvW7e5fibgbMy1BA8ty9jc",
  "key13": "5KxSrLuPiCwnvyQw17Ew7kYp3ietGrpZDhj5D264baTiZCu2MqhW8NrFwhDsV8ys3XAAsZVVpMkCmoYMt5U24sgp",
  "key14": "46sD3ks55KgXazxGt1d3ES2i3eookAF87wkzdLcFd2VtZFd8FvMPBmpmzxNVGDs8sieqZeJnv3QFJyWqxgimPc5p",
  "key15": "4cdxJNs8igUmJAXYJu61f9XNKSDm6t4yBFATNnxcys7JC2KpJfiz8R3JFRJnDNiJTgJcgdizzQhbhL2RKPeqiz5q",
  "key16": "ZETUKKhNZaGomyDs6As3FKSpGq5F2eEuK947hFWGmEWWS3vt96zdPt7sd7J9MkbfpJBf9THd6FA6daC6h6U2Zh4",
  "key17": "Mq5f4MPN2q4vaaCJDF13MYUodGEJQ3WyhPHm2DDE8D79f4BaAcD67bdscC8t1DkyWwhqh1QA2To2SM38jG3KKD8",
  "key18": "2QE3AFBFA2qnvwxF5MAuxeYMtCxSYFeBRFf7nyEazkADLRyn1NCULMQUs3X16g7Vbf2tUVR3TAXvmgExPxQCf6En",
  "key19": "3XTmEaKGgnBDLsnxQ5aCyUJpF5ujorNRf2wqdscYEZt4ABamS6WQjdenzipMuYMErVyn5uUjuqy2CXjkBjW8CpJT",
  "key20": "2NMEu3beYTJiZX9PQ9SFsZQPcXmGFmBgDrxbSkgXuL2eAbbnaEGGKQjnvMod5ACTWEPJ2Bf4QY25KSmiWFRt1RPm",
  "key21": "3aAjh2tDK3hQRWm5akrRoXGBvfNz15XcEti3YC48zsxkTV4Nhbc6aAaH3bNKL5SYJP5iTiUD7iEzH5A8uDoAegSx",
  "key22": "4eAVxckJyNytAafbVvUCKQxa52f19Tk9nkcNyU3ko5RrHxWWK4ZwabyKEMcD2ujbUPVqgLJCfEuRzyxVsys2oFf3",
  "key23": "455ZZTtrdGkaGXhbQx9MviUWfU89EsNbXfe74qKKWV6SadZMRTfKdafCagSQcyBJvpqFjGJjgBcjGNrTUWXM6Fbi",
  "key24": "4mYkUpm9irASV3B5C8NrmhY2Z7UX1vXFqkrvqprNN3PgKyuXZtynaUe4H6L98mYzKKUyGdfmFYjZ4kg5TK4aHnEC",
  "key25": "5u3NxmHfCNGggf7GdpGXx3Pao6MumNrW7a4iNPLHzVFZey1b6Cgvvw5XRNjS5pRFjP3zJJHECju1SuCUxXN2v8vz"
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
