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
    "4vYk6uesd8sRKLBkf4FFLfUgJaWPfsqqmw1xWwE4rs39xsssKGvzcDbYKug3iEfGfD6bxwM2w2td4agZU4iu78zc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zKqR7qeWuzXco2AWscKniLooa19YCeogWo2SwPmeREXj5JSb2sZcVJNZckiWrCG24gtFjnchWXMpdvXvV8RwwNC",
  "key1": "3XCGRufEJzWJQz8Yw5PfWp2A8RU88sjRCLdhXKixABaRhjse2b1ecUuxKQXmBmBjQxoz9cxxBgQQDNkQVYjnskSc",
  "key2": "4PqKPERRT2frppcy3qFLQLhi5Qe1Fepv4GwqkmNruhoc4UDvpjg4hNrL1TwsExY1ZGcJjebqh5i75yA66Sc7oQCm",
  "key3": "5bETQK12Edd2dbrLnzagW5QNLTxexmnBX3y55EaVZxeGEgougX9XdUaG22wAukJYNGkYuix5Ry3gtiv1rbDz1bWr",
  "key4": "25df56M8d4Qs7jrX5b7FEvbDSEurfsgKNUBa6C1Lqq5Md9JFpG4USby86apacpHM76JkNRZxZBpfrck5YRA8iDrT",
  "key5": "oYdJ7XRrMucer7hCtpNLjR78D3UUrbH7utfUkfNFs4ayYTCSWriCiHVCKq3fLSkceptBojvGGyR5A9FcmskqDbc",
  "key6": "5UPTZmidTyV27CXotLqv1pnYGgpNvUrrbemsN6ffu12PcksNTeY6BuZXqRNBiojNcKShrmE8HbxBJ86FLgwwD9Lr",
  "key7": "4mDp6LF9wQVM4uqygNupek2ZvCB9K9FC84TdNcYFPnX5EtSKjHJxf8WzEjHfJipz6Jm1mJrSsLfxcN7wWLwoMNZH",
  "key8": "2YWdU9Vizvmq1qz4fYdaa5fot8e8EYoNdsG2guYZUYHfzgeE2LhYw4hogrp5s2aDS9iSvxSkh3CxDdMvqAWXGTfG",
  "key9": "2Mb5drsinL3cLyiPgvUjt9wmahEEXRbjdeCkVrtpwcbHnmxR3NkTBg1fFjP4BzEK6yLg76FcFh4xPa6cwCDikRH9",
  "key10": "XwbJrnk62PRSwAguPfutWtdVqrZorKi9HVUmCM4HhBfDGoYqMgNJMH7XQ28bYfMdsoAXppy6z2Bw4R2pV7XR2EK",
  "key11": "2zT1A8DkXb6ygXByNwzW6NDHDtNN2ThHentWN6JoZBhRrbdtRzbBqXmzp6K1s2LufDK5p6xB5sEmdNFQL1uUUdJA",
  "key12": "3UQq8CxJs9goGjqg18CorCw5w3e9BJrdQSvLdEo3nBC4Ay3xvjRMog9cZFQmKxUaqpqDwMPRnfrfCNpPtba7T4fs",
  "key13": "5aV2A6QyMibQYuV2vAA3HMpzfZmeWCQ88qbYfvyHYdDbNBxoJyEBftWPEE9EyEzPSocYUwXnTo1bYisg3exzx8u5",
  "key14": "fWRK7VALRHNDaudq1Z9YGpLvzNjYsdryZdpKPBSYhJ95Ch2iskk3HvEmgaohMkDUDpqWQvmFwuYZH4zy6qaVJEa",
  "key15": "559codBAfLr5BrPyJDLssABdgq7dvC6V4vYi8x8vE8hYR79VifsFwhdbREEfyyVVfTg5nkz8doAEgF8Vmjk8dYnP",
  "key16": "3419m7WiGs37UEee8hpJBwzX7Fqaq7tCAEzyMkLMLqC1pGeZbvBNvRfsCuHVCE7wg8UfWWdaAXxAgzL3BcauxDrD",
  "key17": "5FggGFUuACG281WxJmPj5wMmoNP7EZG9Mm3wn7A29nSjys4z54L5mnWEMbdhnx6RNCBkSpoLzYK4QUPJoVLW7D4B",
  "key18": "WrucQUc3qSEJNKDDx4xbRR9g5B14E7GyJF6qMQ6TGDZSmrwyhT7wgzTcgiSnpzzfsEqQiyWSqVrm5Qx9RL17gNm",
  "key19": "4CC5p37wbJRKSv9HShqkypRDSpxM5HsGGy2nsLn2tE9bQfEeosgiWKgsjoL411SPZ6seu8NdP6usXvYvzLFQmpx1",
  "key20": "gZYhSu4wnfCNTgtQi5MdPzLyjL9Rhumue4TKLc3GbYCZgXRYyxoFTEQVym318TYffdzV1pocjTVX5bfDuuXvKZn",
  "key21": "5dTuVKW8qAX6GW7H15zcPJ224HqupvZRAhkkQ77XmLD3ZKD7YjpUFigNRVF2YDvfYntCDvRiyLGg7HzNK7gZAmxK",
  "key22": "2Fdp4Yzpm84LNjJ2wAvGGqHm7M2pihJjAsuxd2dEGzRCSc2pZ7TJToTa3w1AjTq2hdjW1LF26a6AHiSPQrSS5YeX",
  "key23": "4BB1h3wG15kwysEHWRZ78iDx1uSP7Jqbrcg7gEEbnSS5ptjJyS51PpoQXUKFE6X3vqBakKEvSoMFKMWNiHy6VUto",
  "key24": "5adYRxyTCRRUzgWdwmYzQ9kzpgvUP2fkMbNdPqEyeKjwseCEqHCnN69tXWrUiERLZjtqBUcHAkjLxkjRhvwpBWeJ",
  "key25": "319fgZDmPcrc9psjv4WFGiCMUrU6uBW44c8EjY1TuvDpezhtwB1oZPeTojoU8JK5kqs9e5MVuPMua4UihdW975q5",
  "key26": "5jZmSCsRhCPLNNeSiYRoYjn6XybQ2f1SHLJxRRYTBQNNdJQ6UYduKGzCPe3iXsJUreVxJufR6RRzhAARyLGfH1me",
  "key27": "8Aw2XnNSm7J7ZnCTnwyeDUJChckbwMaPC1Bq1wPJL5qktpA2eWSur9gRdxWoEo4VqQ6HnzCNgR9ijU429s5fKTL"
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
