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
    "5UbkrJ6Yz7NYD3a9HXHpiU1WNZkzhdDZy5BMrzwDPZeKbruoK2mnSocK2WsupyCRXtckG79md7LtZc9ZwKG3LNqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53dhoANeXjH76AwteKENFNrkXh3zwpSLY3RZ6bmuQEy2morUiBeSz1GYFhCMG2EY4aL5ijZbS52bqvc2PFuRTLDR",
  "key1": "26SkmAPMBbBP7DSZHRctHWqD9VnWskSMnMCa8w2vxc3NmTj8f61gkNAvm2AgtE1ZHUz3NfGjE3YKRaayAELtRbiQ",
  "key2": "5FcaTYZyqrYevGjKEZhMfUyc733wrSr7hyASyizWxvCbDmD3y5hNnfindiTKipVzaE9nGKfpshiXKix3XRBUX9ae",
  "key3": "2qWDZSeMddtd7t1S7Bznmhe2vgwHuLc541fSW5v83XB4prHhGakpyoyRzrWPPi57rJp6bDH31QTWNePAUsa8oqtW",
  "key4": "AkftUEJuPn9E1Vo2WH56je8oQgAsGPhmKUps1QgaZdd1U7A6XznbWRMafabSEEE6ya2KYhtsHAMA17rDcEXcDXc",
  "key5": "4SuHaemSV8wniGE3hSCwpNjGU1sD6UuzfBgsTazGM3D5yXPe5mxayE3T9rX2JHmgaUEXyEcPUtuiDZC5y7nYo1BQ",
  "key6": "4dGNFkGwdrhpSjmTGkTUSBKMffMHm24GWgGiVjAm3C5Rp5KLLuJu9Gn4z8PiYBpU7AEifFeJmwoidBLdMvQkeC8r",
  "key7": "4f7FYzztzwFvMr48sM4BehTeZJWr6wqT8p7c522XyWcrvBm1bnDKwqxbAso33GHibo1ZcoheoKwcH2uWdzgKzzgt",
  "key8": "2DVnxxysTtfuEsiiMBtjnZCsjPtyCjTwKFpvyizfQpvNd12Pk2ozdkG6CYNqa91Wq3YdFoPdRXZjH9myeahiqWso",
  "key9": "2PrW3uCe7Ypq4P1Jd4JqJkZk1ZWk3ia8zNEiEDgMsotRCci3aUuF64DGC6MZG4PAsBDmRVtVYDgb1kGZT2zZz7h3",
  "key10": "2hZQ9k4NSGtCnWDzds3uHo1q99D1RqoVUgxEniqqZbSuCsF5Fx55wMS1tiMgX5Rt7AHATt576nsM5S2TZfX6WmYV",
  "key11": "2wFQcHf3LGCTyLn8iXkeS5UYzQeRMBXHEhuPhArG4yZNEtYRFqPNXPjfgKMj6We9UftFBYCzCf9hNiZ9NApCwQJ7",
  "key12": "5mMEh8ua8HMGoEMfbjajKG2RVgoDXYdA5ebHGuaK3TybzPdGwEjmg7gweqBEVQi3XsZtTF274JeR1eNfHJCoN4Mf",
  "key13": "3bHcE834vXKGWcM8vWegd7Fztr8nrmMMxmMy5CVnj2hn9c2E2Hn46ZSxvWLEhPDBQkR9Vd7AAjdtrMP9UCsho9B",
  "key14": "5mT4vq3A7mpD3YJpDG5tsuKeCaWZHjB4YJrGSPmAEwNneEaygcpXRn61WBXV5cYqS3Ja7TRRg2h5jiozUYp7SkEA",
  "key15": "3tTHyqQDKKhwbxZi4vYbghzASaX3132fQ4jnn4dFy5CAAyYNHU6ivPYtZh8KEewSEx8xvgyVckkam5rUpS83UfXQ",
  "key16": "5QXz5NrHamV1hSWyXWor2PH1WoPQZMcSKr7ye4RmX67s4LozgjHctyvhWPaGPNyaysAkeAgQW1ML1YQHy2imz59v",
  "key17": "31o2dRYzkx1aCpsYpU8kKiqrTtn5hHsx2riWZBHnCqpMztDaerzhLBJkdjRpezxaexQ7XkHfkz9YXZR667H76jHX",
  "key18": "3pfqXuG2xFbwDYyPqedNEBsSNzqxcpqSVQhr4tvcNBxNkgWjUwNuNWg5PEgkvJDqbtH2MuznSsYT58Gqy145AQAc",
  "key19": "53ebht4FjwPLfKWTeY7snqj5uyWnhypDtASXkK8SQpxXiiZaRfb6UnSUJNiuAQ5V5jysqDb5kbjswuCXXL11SoTD",
  "key20": "38gZ6rMRdX4gDpsiALQzk6iYtrydaAuiXq9YmnJhSj1kLaPLaBnv71DfqxEMbbda1P531kHduqziJAcXGFKepgd4",
  "key21": "3vAkXfsULozwrk3WW4Gqf7SBVvbv6mA1NAzc797XtRwDXV9o3f3tjG5Nxthoi9uo54XoE1saxVoSgX7vGvj1fVpY",
  "key22": "5xvRVdSiVytcAbgHU3Gen3uuMfqZtavizYRgEeprekFNXef92pT29prc21MQoVGTd8cvvHgXSxx5gw6YcqnpqG7T",
  "key23": "3QSRqCSyYU7NsSyy1qC7xFNbTkknG2xNj2E1Qs7SYzNgaCHzjKmQ6azFytGdwhpwhpyQstbWUXEjuajZ6WT2vyjL",
  "key24": "3AtjC1zcXiwANAqzUgrmbKJKUDysHBVu3sPw3YvRMjDfNYSabmT1xLpUPms1aJbxdPJr1ACy12mKwjbp7dureN6Y",
  "key25": "4RNLwceYdNc2q7phoa7XxbauJBWfMCjJchgW59orsZ7f159xadUpBC5Gn2JXEUMJhWbQ9rPjGufGZt1LZFahzdxb",
  "key26": "TBwxeTWyw7N6C22KLeUFDCk4zdo6PV9pAxguaCc6XSJZoSJNXJ1iSjGAsicTx1hkxzaHMePGHdvHrinwogDziCL",
  "key27": "wqopGYPSAihqgjLwjbAbp5tqUSsWxXoXvc6J3tkmFxPfY79LUHVp2ytmoYg57Awd8DeocRgdDgx1roCpa16jwVp",
  "key28": "8rq9thxncDGMEXoftvYLPDzViF6cMBB8jiZMfP7psGMorHyYzYH8ZTmywQhymhZBjRRUhnCaNN6rp8yoVj383pE",
  "key29": "4Si6VqJsHmD2pgS2bkC9EqCS9wcQGBwVNuxBhdzb5F8D1qQ7aeKetHVkXmcWe6itZLGSRbzzoE2SrWjkr3koDyXt",
  "key30": "2ueFsFWhfpf6EtN6cJd1McropDJHZ1fvh6ZcYx4gVsXUe4bcPg3fqavCiNbBnKPxGQ6rsRu3d5KQMgwrRSqGBtKw",
  "key31": "4mH9Li1ARi7XrHCzvujJMbLR9U1vLdQCFKJeKYMLxFczMnBqY1ydZRjSQU8joSg9MaiEigh4XcbqTQEdcV2uqz9Z",
  "key32": "5GvMQ1aPGuUiSYwowUXj46pP6DTGmUWvB2T9koX8cQfV2jkuWmvwA5zQANTZfpeN6YNqF2J6dFdZQtuQgsTZ1F8N",
  "key33": "33i15c7H2uFghuUB2tbWrJgnLRRRA9Zhi9FcooXhy8Yfz4QtwvjNAjBbHoptuRg6izHKENYmD8L1wxEQytvisAGz",
  "key34": "ENZwnyv83ABeywL8JGqPUsfcJwBBgi7EiRzPTmQC5B2p1E7L1AsGXcZeNUQAF9ohgg4daLyZ1YEcCaiiVgU8rVD",
  "key35": "2jsM8qRV5RhT1xb9DohraK83dAzEifSWzEdaSLmLeQ3h2cRKFQFi8ZiwiypC62hbc5sYT6b3R1Gp1vfMT4Spyzvi",
  "key36": "3PFJwxTpbj3Pfy4bCBBkUZESNtcQTLUBXmttXPeq5HhdAQiWet2wKLUyQBUjPAf5Q1KXFYNH8QdAGY6fnbpeyP7e",
  "key37": "2F1rSGMh5AndDjz83tc9HXvjc56edNW3LSPQpWYDFx52biSV7mu5aT1nmrZpfa1E7wReJtGuA5QPWDp6jkg1WJ4e",
  "key38": "26wGCDDP9w4iPZwTomp7xqHztFfGuQNCsh2ABZJiSE9Riwtcur8774gpoiCHjtLH5hH8ptjrUn4EoaMRvhkzpzkR"
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
