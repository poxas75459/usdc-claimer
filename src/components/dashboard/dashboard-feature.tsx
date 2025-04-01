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
    "3kqUG7Juqyyybw1WEHNH3SXLNJCq3LE5yrp7F9cjQAqZPj9kTPuvURXxpL1bBLZrH8p36kUPrmmqQrVuY2ya4Q3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zEjkB2js3njuwun5jEbtBuEP9AChNZoGGN42NbzHmbK4dFm4FfcGEeQwzT8dfwsj5u9pAhdbVwtPnRSJxj2xaWL",
  "key1": "4Um8jN6acpUsCVkoeiweouaoZEbSw4PQeTJinyfAAJEUE4GeSu3wSbawoy8ysZeGHEkYmSJabNcikvMxMsXXPE5D",
  "key2": "5PLnu1nF6tKG9ZGrMXLcSTMxK9yn62Gs61njiHKK2pr3CUhf857cAX5hsP6Gn89myoTSZbsG4Gtd8DdpSk5M4r4f",
  "key3": "2Jo8xtZBucH1jT4LDjAvWw43iZk2VuRHk7VotG7UBbtvHFXj3CwDxAfcYMHKjecRCwdqGvvZFcJFyRp5qeB1xS5D",
  "key4": "5gzugfXCkNq2jup1WbcPV6sRMnRooZKhcXYYt5e9z4aUWyFmX65bTrV6UqFp4zFVXwxsExShCqTdeierq6GiwdqM",
  "key5": "2qumrK5CRKRf6tBRhacMS4TVX4fncTicMf7ajVb8Wa3usEbLtXWtKZkaMvuTwTArS4jLxpq4BHCbuYUAy8N7uWyj",
  "key6": "5BMPkFvdCcWBkQZL5E8sLr1UJQG1toitRh8kjAWWVAtY4WaqzMZp31jDaTrxHChKY85VBvgnH3y4gTzP72mTU6iw",
  "key7": "2QMyYKvp24mTGXU7WywqGNM4aNBj3rNFaDENM5qqbJh2N9v7xJJ1f3M4TRGFbxLfq65t9cZvW5vuxoHjeVaZ9KN3",
  "key8": "8tJofvyYc2csbAkyzyncoAnxyEgy76KMexu9WnmQ6qhXpCeQnQZjKAnF1GrG1Rc3PHs335tfMaxDx5EJ5esaGQn",
  "key9": "2qNUMtnBGUTf1UijnMDnTG2Gn6JqHpp2n2fjPG6V6V7xaRvzaGz3bSDndzbR1XAVJQ8TuWmxigC3bfSRG4JpnKzr",
  "key10": "2mbkZ6x5XUgcpuZbNHnhKKiccFf9FhdsDgDcA3FbRse1pnL1qPyFyqoiDizWLvyfpWv1jVGqR6t1m4FxsypUBm55",
  "key11": "64xLt5JptRqCEh4T347hmFmutfr3PZNhiG648oEo7cmKWEnFizTQRReTp7wx828j8gx6BPxMf4R1YbLDseumN5ht",
  "key12": "2JyPLEeC4DbiWvLhGJJkzLzGtbbJ3TvUURzCM5TAAD4vDm6DfJJpw5AVjQkDKAbM7vViAd82ffBtXCJzAq4NFvxQ",
  "key13": "6cwwLkQhTnsDNrjPMgfnaN5YtnJJ6vhMJEL8Pch5BiL9tKDH2vgqnu8GnP4GPBP94fWJg6dywEW2PziG7HyLRaj",
  "key14": "47EZsWooqfwH2TWLf6dcF91fkaAUR8Lns3qqzRWQ1jrCVWPV2bBMux4jpmM8cGvSQpuXVokHzU678JmHvNtB9VtN",
  "key15": "2bKb1aA9Ny2wfPtT5wUyxRdJLfHzhKaFtA6sgZSyH71xAU5JruFbTWTmwnPcePMMNPnsvVJuxkK7T5DV6gvKrpwv",
  "key16": "2uaZMVaygFgEZwQLaUBWEQ58JYaEjQrX5kER96jzZ1xTThX7NU7a7aBiYMGoJWos5VcSQTMhACyNq2shGhciPrm8",
  "key17": "2DnPuGpgiK1isJCPJTNTH1uFZGi69sxTFfg8YrWg8ckBZgBWiQetKGjg2QaN3iZ4nbMRCr7CM1PSjEaLRSEpebFD",
  "key18": "2JZLvZm8McHgKssYx5RroAcNRyAnqGT4Dd8rwpjwNAtaNS3o2qDdgNTAcyTLyQCq7DXif76XqiwUWoVKyKrktvtV",
  "key19": "5s8ysK8HhvLRtEqSsmFkdB3Pe5QaNtDbKMwGWuoLya6duzWWh1PSDJ5vHoUkqX59SuoJFvk5h5AaTwLiqJy9FQRU",
  "key20": "3qZQq4Nf2niW6TCAP6SfdTAa6Cyeewu4NebfQicwSUgTLEQ51rx8G5fj5BZoAdrUiMz1EN5ABM3k8dgVEmCqa3ag",
  "key21": "3drb7ngD7d9bJBiPFPhx4tH8napQEMA9F1N1zmyvB7sYp4gSJnfW5pawUeGiojcgfZozfwRYXjYr5PsqrWi7W1VL",
  "key22": "4qwbtz4aENUM6yjMctDqbnpYmdZZ1hHnEnSW6SQqnZmuJYy7EP4dHGHN9fo4pYQD93S7LVd1AovKAHiXVJKAxMRX",
  "key23": "1s7skf1gBY5ueqKRzuAwTXAW9wk6figfQdBK3zjuYhnHJPoUX9o4CyQJGuMWuCX8dXDQQQJnfVheUFRRs89Tvr7",
  "key24": "4s57PAszHqQjEMyueGnzGXnqu6x914YaUvjLkAqNzG15PbcoW6FEagof5f27sJHCyrCGs7t2vAVS3yHQkpnZ4yec",
  "key25": "22rE8aGi2TbnHsYxRwoZAVceRU5v27T168JpDzt7NxfriHaytaHrj48DpUDPa9X1Z8CRgZHtwnAsbjsjd2haoaiT",
  "key26": "4dFG7i6N1EPDXSBBNoLYSaAzAvwcnYakAYC9dVgefg9hbf7JaoyMo3QxArBRcMTM1HxU2qw4MzZxfJm7JKyzU6Ed",
  "key27": "wXY1ZPimx8jDHbqPPqyYUngTGvc6jf1DaM3V96tVbYDu7aHzus9iQSkWvEzaxUgsHXJE1PTUPoeVu73CdH388aJ",
  "key28": "64AFLMZ7NmoB3Xm6ayQ9oiuhnz3QakjKBTrq46Y3Cwh4rQctnntTDXhVMqHJWEc5Zyb54uQLb9T1gtpF79K5r6Ew",
  "key29": "4dFrAngK7gmr2fK3vSEz4koFtBhrgqAw1gWr5GotA2fK49w73asrvFXu5RBSCHrHgBXoFQuhHgpuSjz84iqpGXBH",
  "key30": "3sqWdvcJ7qmnxrf9dHnFtcnaU2iSoeXWfptjtRuJEkg2HZgLYWMFo77HkKMUa1KTGZnZgFF64hDeMEWDXLojAX8M",
  "key31": "2myqnc88s5v9mhdRknSFNg72WvSjoq2KJzwMmq7vM6so3PQpu4gvkqE7R83Z4KMb4RNBC4qXfuHPSvKZTKMxQk6K"
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
