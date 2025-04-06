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
    "2dedLmfMYEncn6MHYK1uH93Pw1WngChFmnRNbhpWMXpW18dFPeXzhE4fFXGmXMwqK2Z78zDa15FyzgP3hvuNhJhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MFhnW4PcpeL6tEcFSg7xuW84bV9uEi7NMtcPvNiZJdsC1jpdbejP3vytXRFaku6NstFxBvhRxkE6ELQM6Wfv3MP",
  "key1": "2haVnqbGw5ByzrnfcKXBYw7UpfRLyCBwwZvUXwWMGLFRx8Ua33VLRVGe6e5q9Pawz7nz8L4RsTnB3AQibQb3vfMz",
  "key2": "T4Xk7sHzWUiXmANq5iSKWa1RScoTEAfUTeAjAEVnesR5f7rkwQSTjJFhhHMLx3S1wNLMtR9VyANYs9DJD3MP2Je",
  "key3": "257KjfZbKVGgKB37cMfrVztofpf2EKzke94kUk7HKAMCFU5dpX16mLRmeJr946GR7SUnBt5sBKAgYrhLT7qTsSc5",
  "key4": "4kr1kdx9xbYaKbeJMueePcpdEXam8iLpfFuvbCESv1AmaUGooo5mJZRhvq7YXwty6tdVpKXkQkEagtVigCf8eaW2",
  "key5": "ukjaqAUGEYPaPovVueCkGkDDV5Tkdf5Frr5xJhbLVHqtvDwjPz9N3e1VhsoN59fNomSm2akaP8Mi1maePyyFJJC",
  "key6": "3WuCaH42XvipNccC16jNSMXfCfYtJcRKdamjEgTWr2LwdxZembbfNr6jnHDA6AkwyPLeJ5MFCmUKCKzAjaXu5p5T",
  "key7": "2271BtNafKZWjJo1gw4cURRfRAU7bz7MnpCNGRPnJFBPgDxtftCNQ2jZGEK1rSGrdKQD37DREyy1AoKjUPAirJwP",
  "key8": "2Y4BDfEbdfTFXiuerVsKCYCsLpA8ZiuUqR2La9VnyFhBVn8bjUf4rVHm4zdQQT5Y39YrQtMYFqg13ZfpnrNTNfQ8",
  "key9": "5yJkk4yxK6Bm7BSf6hJnnx4BHU5emRJVCwbmDYVKQrgBUhi97vzTvrpgFAwRxWL1JWkod2o1yhzPhtJxxRLBm4Bv",
  "key10": "3NCqELnwTN6MNVk6p1MVWg6k7RuTE43LR1vbt97Dvr2Sh8AZKUabaHusTpZQ1W5Ve25SNDb9dp3pzaWRPaPWxQsf",
  "key11": "3aXCnR9eXZW8wDy6EJkEfgwC1Cq8qWsDx4j7S1NvfrGgJ8W3TxsEB6cK9afwfh3wgUJzPJSV5m33sgckoMiCF24i",
  "key12": "3w3qAPfhdJ7zBY2dwhcvYycC9coRXi9A2FFq2a9hNGwfQ5r6cVcNGhehWDQJ6eMtMGHxGPR6RXL8Ma9PoNHV1AzW",
  "key13": "rNtvgWYwKX9VD1zSGMbP5iqDcFes25ZSjxHtPvdg34oTgKojFTs8ydK3MPpu3FAmwkHvdMsqveK755NJfgHKDYd",
  "key14": "fy6nJnP29QdKTiS4SE9JgjtpKt5K4zJPUdTGKKU31kMvWUR4uY8ynyFwnBbw7Ue8csY2ir32E99cyhKei8QYvZu",
  "key15": "jiyjAmbDS21B9KXzn8rkLPqDS1py61bUioJpwwj6AgX44CTkoUegsSGG6SVSHV7C1tem3taKWcLKMCQCHFRwq3x",
  "key16": "6684uJu7B8ttKncAHDdVhTW5wSZnjUMVUoHdfctnSv1XUyzo8Lhg2hHoqrUt1gVDEAEjuBRT7Qbh3V6uU9DCZ6SJ",
  "key17": "3byMwv5YLfDMiKxpBQPLPkEyVVr5HJ77i1H3MFxLbAc7BrJiiZBWa1jb1Q5655eHuNkdHUiTgxRrRcE9Gw3kbPyp",
  "key18": "3jXTS9gcXybmRRS6JM5j4stKKNGvaEkxkjg16xiu8e5zRhG4Ui5J2mmvGGC6TJmvmGrtyVdiugfgxsNzBUXFiaHt",
  "key19": "4fGt6WERtSMSoncthuLzcYdMLosrbAKdK4nSbMeaaYfhCrruBVEeaaN2WupdBJEtosQZatxBMmqpjU3cYQZ7Duow",
  "key20": "5hLovDJeEkbfUSXrJXqoa2YeE3oZ5xn7X2dFEHWh7aucK6BfdUtyPX8a8oGHK9oEcPA39zMQ6vu4AX9hxUVMEtqM",
  "key21": "46Y1wbZNo1SpACrixhMdAudqr3m4Up1Jcv2kNaMoQSEv2M8gBHSZ6kK55kbKhKMo4hsXUamAXUbDCtC4vH1VJzKC",
  "key22": "2es5PwXkY2hmBEZ2JKZ3qbffHxe4nE7DJk8QTq47UgJXavnYgFFsSvmMaHk8T34ZTNAvgBto5gbBBRHn5wKg6nyF",
  "key23": "5LPMnY6oTmEcrCA7Vmt1hHw3kuTmHVmTUd6CBiNv4yMyfcZDq2RDZM1Hp5pPQNgkSqbamgoq39rJH9Dg9jb38FRh",
  "key24": "5HtTnHsH9F5TcJmReCteEZFF7xPQyvrGoFGW9UwBzwasASbv1tG53ddW9EVgBJzNsDWvG3vdRvLJL2m7yusdXnkc",
  "key25": "2mrE49bykv7AfuYiyAfLWRZXdz63Pi9MRdQw3oUKN8MPha1Nsh47FvPPM2xRvSzMYAShv47x1HFarEVnhJXnm7JC",
  "key26": "2kbxJ4Waoja9ERa6A5fbpWqvNB6dM9LidbaxLy2Yjy4GztMFsmBDVRyAqzv1uwAh5BnMrjpcAqJTMV9wQ687k8ui",
  "key27": "5ExDk4gMG4hDN9cjMBcFo6oAxfjhYiz13Kgs6T1s8jQy6q8jFdx6wynx47LpPUYhXa5YbuKEEqXkFeoPX3JQJZ2w",
  "key28": "3X4FJ42vnCRURtcY9KXRWAA6hNuh1eXeeatzi43dZavAwwssHxkN5HSsGD7nYbUZmYvZBPZYX26AyfeXvjVWuz4C",
  "key29": "ZrBaq1oStAK4Z8RAcBBtx48S9EYXmLSvHhd6WPKYqn1DoXPHtmdDh1bsPZEYXtD9Ez8X8nrXmWgt3WyTMGYATFE",
  "key30": "5yEmEzp8ybS8FvkrxwNHSd84jWAEXniR2JJrgJjzAxSzoHt5M2f3gQsTtaTEVMSZ9vdF7uRBLZXnFd3YxHZewLUU",
  "key31": "TaMbx5GQ6KaKEmjnkP4ECPmbLTQnQ4sJ2zpPSrhHPQd6nnkmUT8HKG3raJERXtD9osKGDz9N6hV8sGNSZTA3nWu",
  "key32": "Jg7DYyhqyprzw8pmNmLwNX6fBSz1CB85XDmzNazdb5sNkZn7SFyJ6WnHk6tC2Ae7Md3u4vs4VkYZpgfkwey8Ypx",
  "key33": "62TZpQCezRqx6kdrSAxBpnJAJMg2dP7bM5jryAff8x6y4vJi56wLf8e8NdHB5iGRiAjtkyzP4GHGaRrbVaQGiWLc",
  "key34": "2DUvTdGgpHGjZTKG1BhuqoKrryE31F1zB69t23PuEJMGjX6GP7vuJEuwvdxUyT1tnvePZQJutNKhHi8HVVfmPAHR",
  "key35": "5hGGBr4Rgqug1asz4fcACfywPJaB9h8Chd4tEfpgM3CvzqiiNiJCrDsjTjvGN752HCBJqWLBGXCsg8attK36XbsQ",
  "key36": "FmN4SRNaxwQ1RfkjTnDr2ZEK1AgRXrMhthVDYczdAPPJFL4MuLmxA7GR1HGECAbjnPx2jiCdHpNwQLbLVGSEHFb",
  "key37": "3EQU1KsZFhSyrHx69WtTTu6fZZzDpHQfXrx6yYuKoM7aadEsUVth4JBaZR371dKQ5Ak3RB19V5qmyyYPFTb2v47S",
  "key38": "vDY5cDYTRHHuxsBGgKcG4rUbmgFHhbAkFBAiASXL7AtHdmNATgAhy2n6x2XkgDxKSUPQ815sqsJm92YpM5hr7iG"
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
