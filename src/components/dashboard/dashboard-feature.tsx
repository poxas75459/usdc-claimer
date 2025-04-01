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
    "o4XUXGuQQyioiA2R3KfAcX3uTx7n5vV42jvKYcpZw93kmAhisKQ9gN3ivBfJtyWrdRqsNCwrSBvfRQJ7CJHw4T4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R42w4V4cW7PT82gLxRxjxNb7G5x4a7o1EpVDrKoVZ4hxgPHRcs5hCKobZxooE1EJSSW4YLv33ZzhtfAwGBfdvzN",
  "key1": "oE4Nm4JNHK3DLt6VWQHmY9njC5zYz463qd4vsTaKxdB7Q9c2AfNkWFjYYks3UFUSoNMHjPQ3TuDkvEQwe2dbWNG",
  "key2": "7fDp8EoVta9D3MRLQKSo8jo4YxSgGu3BCo5xcZznDDtKrHMwicEjvR3MGYNBvrLD8ucEJUbeBm2YPfU8v8LcfEj",
  "key3": "2ovW8pFsshFjKDgcrUqJp2mYd6YsMgDpLarzvTi1mXjF3MfJfZdc5kjpsviRPwGMKfuVtuyqjDtwyk48pUsqNYL2",
  "key4": "aKmxHkUiv1n8cyGLEvPYBfSsN8vgKPxZ2NbEuDiyyaNmYkXCwtQ2kRyRrc1Y4bgx7jq7tL2vK1tArbvCAJswhff",
  "key5": "3uCWv3nfoHZKWvWZbdo89RCtipVbKchTbKaZi9Vm98iaLAYQY4T8FRSQrYmGuBVufzWw8qPR6nXAMTKZmNV25A9b",
  "key6": "2MMUMHDczTMNPjFQSvAWkaJkdbg1rfomFQy8NvQTR6Gurs2oRamnr5TGzTTSheLUmecwbeE6naVM7zwmoPfezWu1",
  "key7": "2mSiW66n8nUoGBqvJJTHZFndkGzP84J2DJv9dqcrGtMq8ccuZfRF1ffLtVJB3yP1Za7ZMn4PjS4tPL94HRpzfVAj",
  "key8": "2RQCTd29PFYGpi7yDiWQrX2vxNDxCEbpBmTHbBzKJ9kbAVgWZFnS7YEws1mZKYCJgPpLy22ajMWszuiAqPEMAAsR",
  "key9": "2wsVu8PqiGncQTyZqpBUKjynjyuVXvYsC8atMKUuz7j2QzfHQfSfevELS1d9ZFC8ZjctVE87EUyyCMnbciUsBDXZ",
  "key10": "3rubPHhd1AKLXjh6tDBRXEpRuY28aPEoXqjQE9w8pkqAx1neqi7vF6fT7MRRyAXuxcCzq4tUDZ4VYXYi1kHaWEd2",
  "key11": "bFnsFJ3UsHq6AhE6vqPpfonKdr7A4PtjVgopE4ZA8yuefHV6FQ1uFNLBYu4a3CAct2LxYLhMBfFAbM1in7CR33N",
  "key12": "3nNNQ1KwahYwpZk6D9sVMksUUteuc1wpfqoytKd1iPJPunhsx6GLxRrDQ4yTK5k9qHkhFtWxxZaU5zWDaqfHsxWq",
  "key13": "4GwghNR7u1hbp2dhfKsyGdxAPmG6X9NrScsVhe3PS9ynKiXwGenk2VymSyeEUFffzRPyW7JgrRopAPPYp8tBcEAX",
  "key14": "EavZfsydXvPzrNjsh1vmPZCkbydZBpJuNvrfThbRw6ooRQt1b5phREDRUDKefSMKW1yUEUD6HFKVYE1Vt8mqqPY",
  "key15": "5LqmCNahThSg3QaiD8wG8daR2C7ABXpMJUxCWZceUjD2PDH5pn3fXX54D2ng3AtPog7i21BpFUcchGXT2SQG86dY",
  "key16": "fTQvTrUgCyKtDptrSJpMZq5NQELnp6Lwop9cz6smC3b7o1av6Yhj9wmYYZWimcVevcTUFYe33XCbbxdRqPUYHY5",
  "key17": "4cM99RX4pqFairbhK74pebzy8JsTZCYbAsHfG7GKHKp2tL8wYY4zc7czL6WGBGnB9nCrxnhLA3LSgMwKBTgxwqXt",
  "key18": "5s2sSSz2RgxTTmfakJ9Qj9VjLpv3bNnR9vDcgdryvGf2ChsAUjgq9ELwJMVwKxTrSJa8YzpzJaaxkWRk2WDipDyY",
  "key19": "65SNqqzuLV81RhMHQbzDaT4zPK5HbJNNoXLs3fkpVXw6aAtrZqsS8YiJ6iR7dNqMUDvs3iNFm4CB987bNrUWaAJA",
  "key20": "xWGkCB2ruAAz7UYLmMkCDAjocyaeka2dFan7757nr6Ta29Nop9dYai76B1ADsFgGX9HRgaB8TQkC9fVd5uQM2P2",
  "key21": "474NLaPWRtKoVvH1uqku6cDTbLFH4WEZt7be4zRWRuXVn86L8DiVScd4cs38Y8FPjRiffDTht2UF98VyMDA1gS3s",
  "key22": "94s1XooCZtK1JTFPNV6zGyzpWNZvSe6jTAGbyKqG1mADhFZZ49Fy9atdTjpgzxFSjkZxRFNndhRhTH4444RRNqv",
  "key23": "YZvfBVA9mqEE6gEGRN85bXAVXu2v2ympw9WQra9anKsBKJLpkrjFrbP81YHJKyZRPhMLt1DQKpqCQhEWzX9d5JY",
  "key24": "39euKd9XSwdxKkRcZADwnJu7enkK7sMqse6YoCwP5meYSBVUEDkwfZFgTEY7cbXHUjQzJ2zuzq8JXVj4f41EuYb3",
  "key25": "2AihEiLTRbmyKSCsurpxNwDYabKABt3XeWMKmrw4a1GsEDoQt6QrE1aamAqcbKLJLoCgrshaKoMAHQ7uNxbyXRPy",
  "key26": "5CQK14jWKknxskLmMGyypebj9QH6NDiLtvQitN3FCmvrwZ5cDbm3sM1gDtrQ3VmJfQnVCMFJpekxDoDokuj7WoBU",
  "key27": "3hwWuGEMdX5L3ozzAWRmZvKjHeoSiatKngAnxRwWoZsht4f6m1bYzoievpf33YeRnfpomEHdBRUZ2SwJMjmdDnSg",
  "key28": "2YNzce7Se6j76Ljhse4nDmkcL8KbotTXwghjVDXQqZ8f5XYHJYfPYvnBLbMb4hYXCTAHKQxSotRnVA4jkey35EQc",
  "key29": "2XMP972e8w2HShSs53kvCAAVHXUYpMW8wbmK6mE1ZRu2UAQE3si2Lcd8mUNx9cRp6XRvxvEVao7TVTZnqySVn6Sp"
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
