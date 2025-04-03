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
    "24sg4WGYpxdiU32Cy7M7PefEYMCEwG2kpbYQXmabypPCPHSEu8UMWD6DZPHVJ978SgNnSwTtjiCudWPC5nGfG1yK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M9BNpbnXtxUnpqrzcqzis5ZnQrKtM3QewQrMKEs7i8ecdqHBfUL9kTvxvsxXqZ7HkkCfs1ttaVAUGsucTDksSm9",
  "key1": "2N51TH4Kpox1yNG3BTrRhrxVkuZD26WhbckhUHivS9qQA5RSByg3rwWtpdCb9yowkF6GCvcMHhq4UhSCgXY2HVwa",
  "key2": "4wCCXF55wmy49zGxTuFi6i9sjozDpHrJihFq7BRvsJw9SsT85U487UBs3RTp6Ue6MeLvcoXvviCRPT2qm4PpNB3S",
  "key3": "2ZMF35gUBDJFhtDxuC4jzEJGrBk9EmhW9DTPu2NtRUP2PAo9pbXvbsg5yjJtSHQ8bJ9VsiKZktSGG9FQtacwAsLe",
  "key4": "CaReH5thkNyuYJYkPrTirvwVdjRCEwhNEo1ktshVVEuwySjAEthJHsByx5ig6avPqLRK5vCTQXsG6TcRWsPy4nC",
  "key5": "4uWu7GFuaFnLGX3s6UDB2gWkHHVApbok4wrLWiDCwga4ys1y12VjG7wFNiyk1gLWYwpHShoLBcKCAuZgydeuiCBK",
  "key6": "2v9F32ZnpdoJtPmiKANaLpkJqyuubdvajCBqbkJSLHHsoPiGD76r86RoUJanLeAddfAELqp3zprazqDyNcVTgRL8",
  "key7": "3TYdonBGvHiT7kK57SVLTGXcKZRsjDAJJPMrjWRpShxXpUADo5H5tXG9AyGN123iXRm8PxfEgtNyMqt8e5EcJVnR",
  "key8": "5pY5hrBqfPk2srG4Nj3tMLhkYnS3SUFtQDKekVxdyjoqQcrhbsQfSUur8yTmGhCkBKGckeoBGDmxJWbJiNfePpTU",
  "key9": "pSEY1Ysa8VZNytnp7PhXxd2nYpU3uhSjYRDGn9HAn8a2t3QSZ1GFnwL1NeJveE3P2cAxGrzpncekPUE7aDZ8b3G",
  "key10": "2RS6mFtCMunsBsAgtBuooWgYY2bhgcgusWZVLKprgfgELbCtJiCzpmnTVb3hLdom6BhAkhPQMGod8k5yvrenf6p5",
  "key11": "axw8pWb6sfKQo4acvqJFfYzyRy7LN92JGaa5fifpgJYG2Uh9QoSF1LyuJ8VFX2dGuTdWJ9T4o58gkn1VAeupMY8",
  "key12": "3L3QkYNC5pZqaT89PcuwuoUqVzBVn6Kf8fqe162JQToHdVTR2HZtZYfT8HuwsLxXcAHuJZAVAsPzc2GSLvZnE3KL",
  "key13": "2KaknbjSPesBP3AkkyyFTHGUUvkSEAc3x6vjrPrKdB3cd745FQxhFYYbsZgVEW6EANEbj8YReovikqwHBmvkQ69Z",
  "key14": "5RWXT1vbCjRTeMcoedUaXhphFryba1cigHZWttWf1GZEouV9Q9okX5iugRB4BCKvTWuHnvkaTDKWMtYMxwkN3UkN",
  "key15": "VeF9LTnUrEhi4tKTJ1Wem8nZBmiFYSSnrnEYJXS4ZHYrDBmHEpj89aMo77Db6nTr6RLRbP3qDMf9MAy289DXGCT",
  "key16": "29fVpRssfatEwAC6YGiVvqbR2p5E2axGcC8MYaXxoU1cefPVb94cQNt5RY5JmeHTsqtcb4f87Hk3QAwMhCjDkJTd",
  "key17": "2uPWPXynKTz85awkCQxcKjz7PEMEWBVUXRiEy4hvAWozrd7iJGoVfzVwnp8BwWM7HX2Ld7ecrecBQGW9ZyBbHCGw",
  "key18": "jgwotReePYyVsBE61yuWi9wKsanCMLSL9tk4uBtHfFih3s7eWjbXpC1uqcUg9jtQb5wLSXt8Qa76ZnP7zXLXu8z",
  "key19": "524R8g4v57oxsZgeY8eW5a48qvMCJnHzF6u65xTXoG54N9pr2MoZ2cY4nRZE4s83MrsdxzdmthX6wSJqk6uc3T9f",
  "key20": "2soFzJJJsYeQnR6FYcQe2HGxyLxgR78Q27ZwbZySZG26E1umwxtFFmrRHDhroLeMqGyif4CaLAyNUGihJkkLU1eZ",
  "key21": "3EbuwmMuU2FifHC8tVkR9VPi8pzbYmM7RBKgtDktPq79d9S4aNtUkrNyYrfi6Xijev9dMQeZSvL2PRysDoKEkNXS",
  "key22": "5pPMmFs5mT2vCg4RKYYp4grTXcSWFtXxNopzCkYN2XGzevsc9Wd1zBkxZCLGKTcXchAVCdj3FoRv8PKu2VMPQ66z",
  "key23": "2Ckm51MaGAqAehrPKUSWpCQdgHVKj9iZgmzodS7wChqZMufqBnczGcccqjzWbAtQvUA2Ldeknr6Gt1C2NW4uijAq",
  "key24": "5GiNA3rFgGuxyyoEKaRDDG9J5U33aR5geJKgmNPoDAvZgkb5noE8eyAdMyBuMafHkLM8tvjJEpVH8CW8TUcFF8yB",
  "key25": "5YsWprrCa1dR2cmRmN6JndKt2TvWEQz5TUb5TeacTVt9ynSpaZyYyrBbSsrktrZmJWeijCnd6Vr2ZEZFLo9yaJtp"
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
