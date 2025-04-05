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
    "27orXpzBvNaAxn5DKf7gZABLm1ez8XppdNStAk9kC3dEixFctuGFCR5BZ2iNP1TZvh1Dfqu9jy9zJHYnu3yzxNZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sf7na26bVsvMwwQKU7J4aDcumvgdTahCXdMjptj4FsohorAYvVz3a9biCmvgeLNfwpyxmKMgGAEFgvALp3aotoV",
  "key1": "3frHJY6E4GXLGSbjm5rpnE3M3NK1X2Fcdepze2RWr9MQ4KgJgWVbBLei6hFBb4qar2MNay14kYG4tXdU6XkgZpr3",
  "key2": "2WcRDi7r21gZW8YdjoiHeeEanGDbtaN2bD9hGTKuC8sjYx7gcdJuSjCXuPBTxQqjzXoGxpDkuKu2cZaiboFRUCna",
  "key3": "3apz3V6z6SZwwoBYAxucBJ5oP4y2ZsjiR196XLcuYV8wkFvyqEXKUr9WavznrmeBDqbDTQkiDFd73dYzqjKN8V5m",
  "key4": "4E7LHomafTNgGKZUmsxo57z9pjBdRZrsq8zbeVfVfTAnCHgwF7tAQB8535nq5N59Ar6ypPsh1pdrfM8RrBbEvNpQ",
  "key5": "8qs2UXzFTXUDH4f3Fkc8R5ovbruNAu33vwt3yBNL4Gve2crZXJYEDZponPShkkDLhQaEa5qWiZrb26s3GUwu6vU",
  "key6": "3YfLThiKJ6XnCTXAQssXVt1e2xfwJg1SZkih8re4dsrD6XYg1VSXNQ566nVBxx8oRL6MKXbL1k2HXrLnGMqFrFXq",
  "key7": "4Rj1vFnbyf7GouSaQVGbW2ddFW4jSEpiBjGJhXSar8yPGZUJdhWDNZWBpinexxSopf6T92m1DkRpxawRYeK7FAPa",
  "key8": "3V7xjC7qj9ZFbipyT6wFBgFz9QP6PiV34HFYPsv5Ld2RSeJFe8iNCxGyJA2GL176YzuaLERrMvVt2LHybEUWsy1i",
  "key9": "2d2pkkL47DarqKaSr1KsS6kw15vD6rk1tbGgKUtAeeLc4a1v2dBi8v2gCzA97RzutUz8hjHFeK841RHCofTwapaY",
  "key10": "m5Y8UYuJN2RxA4X7rkKfWtRdAdxZNgZMmG35HbfWLqGKGDyjHgPSE6whgPYTuTXDmzgwdoom9i83RXrPNT3osrS",
  "key11": "MWvQ8DhqBwvwnz3xHhKicRtpHYGeX8mBoS1YxNo7dtaVv3157S1F8k5oADFF9KfcUhKyjbU6wPjJjaPRhN1zgzU",
  "key12": "32AmRKnJpH9jw4ncXX1LbetRPzfAw5p9aJoUvPoGH4BMNGZcFJZzNGjf6mpd81voavxzcak3z8bdPWd6j5bLR7Pe",
  "key13": "5dWLGv61VNpGz54EMS7B3A8MTBq8WkbTrfAwi5tDJpsBs2UrvJoq3VXKvbzGqwBWBL7avFKnqSfYMWPnfRUfPSm4",
  "key14": "3eUzH1ebCfdWN9TdXfVigVmsuaeuYgGPfTyR4XUfque79PtDzR6L8P1SU8ki3dcApoXDtJxBX5LNjV2v9qXmG3q3",
  "key15": "581HPD2462Xv4NNM5FK1Uj1Dgn9vkNKmSyhUWmLYR4HgFW713uefAGST7zArfADnxs1ncxXTEbax5e9YcmpxQrDQ",
  "key16": "4BPcSqB6cCq7deYrX6pPPnLHzLaaVQ4PeH3txtnP5T1jGKPzHEMbsYzG46xbUvEEtDamicsAaag2ZfrvtKzN1Rpo",
  "key17": "HNQdYNnrYd6DyB1EgBb5sCvytVTdLwRcBq3G5kRaFrYsMJYJBnFQxWZU2h4F7osWp7qHL1g7Tp1nNCw3rF21xqL",
  "key18": "yJbpwdwwAUeurMLrSdsBiFjVQk4aYDFRcS1cknhb2natdnFP8ZVVEuypyancLfcvjqt6YQDxDVpx7tG24fW217i",
  "key19": "5ZkgrzrGSBJvXEuvtWvpqtzXARmgv7Bj6GLvmfoR8GbaJsSXn1SMxHfrWXcsj2hqckyFE9zbTia28x94ojp4UU8V",
  "key20": "TBqskhYqR8Dpn28AhHJAFii5RGQwZ1PgFHQnchuDkkD3mgEYRDaySfLNXaqWThJEEksf57qgmhCKi3YG9bMgPFY",
  "key21": "7msvj8HKBj5ZD2VQgojFHxb16LWVfpunnFG7ZrMVYjRxKGTdNNSeF3K8e3EwrtWjv3AByohUeDkrbvFHeyh1kDW",
  "key22": "4EHT9FN9i1EdhTd3u2stNadz8Cq5LD5n3sPyXnbkecyxkKGMa7Pk5zY3NJb6gj3G5nAtUR68Ra5zeR9zAV8c4jQH",
  "key23": "2ADwQ3zbcb7wVqtJouDCT5T2h4D7Q6Y7yzgiaXAEwtEqHPkFGusQuYpCeucT5vUPpFX36F31vvaBAfZjKfB1sFPM",
  "key24": "5ZZnEQ1u749U6HhspRDcBUBuQBNsUa93EAYVTxcDJSuPPqFwDdjfF5Rr1sJvFDFfxRx25Y3b2aTcMmkAqShBRFLv",
  "key25": "5NRxNDLDQdeqeYbmPs6mwkRxE7NRKdYCpyLtcLuE4BFgt59spbxBrYyh8MNE7eSFFcVrnSuTL5xWAWVFQ4sQzsaZ",
  "key26": "aK4D661F6Z3CRoXzjZysb7yc2FDRTUfJ4ckxGtjkumcHZufnBbN48ZnzBnsGjZWjELzcvwPVgo6itubmZh7W24G",
  "key27": "6gFUP1X8BVkb6vZQiJ6xikGPvRxD5YHianrbz1HYvbWfdX8ebCu3WJQ89UwvY7cTdCcAuwRNgrZVKydpPXCT9Xd",
  "key28": "5LGQfRRrWDT6b2LGpXaYY5tLT43aRnoAw9XWyKt8w8rXhLRkyAEkp7vnm434tPijvSeiXojNBedT4vX1qkZCM3zE",
  "key29": "4rNXWyrX2czgiiVjWMjDhrufJv83R16N9AMnRbsZnZ3FCdN2iEeGjpgmtMFFT2Ln8YzpHSYJn3sf2v2Cyv1unrc8",
  "key30": "58cWhrefuRzLXzJ6cpxW4bDRQy86agcA86RzaVstgrbBGQr7yQRNpg2RKYyJwseXkyy8eHWXCpMHVhL9quaidAvg",
  "key31": "3sDSWY9NDVE5ZxbJAMmXhgoGH3w7kkU5es6LbPRk9gmTKebvs63NNskoQyrtY1VW5TZn2sPSimfJJ43Frt2NrjrK",
  "key32": "4v3ktkTgLDaKPMAC8mL3sPhEywjS2Dg7fEcEBsVsS7WiyTntMRGeGD63kzVSJBsGyN9k4FVom7xKrUqreuwBwP4M",
  "key33": "3PmsychjdsoBKFfneuLX8Nty6iheDGinvMXT4cxrdYkqzs7VZAhjh1UP2pGMXEFMfUbQKkvBMp4W9eYwwKcSB6uK",
  "key34": "4vxZPjWaFDURUgriXbU7KmCZ9THUyHc8PsyxR6KbfzDpjmPHQcN6ZAqEteUYaqUxHHYNdvSmdNpnZGw8SGxqEK5u",
  "key35": "32UG6RJJEuQcxYtXUTbFundFA6q7g9YAajqcBLzMR9TQ9KQpSJMjRcFeZbSP78ixC4s3dMv6f8sreSSJcrEafgW5",
  "key36": "B95ZhZrejfU7P2MjPe3jruDDSAhmAq8XPcQW12jhEydZn4n79KAHKgtQBi7WhZaFwGmx59A9GSPXTfBxD2zGXFV",
  "key37": "2SSkd4hB9xWyuNopDnNwLUENy3JfBWCHCorqLnTo79juzEBdVXvTTogCHHqQE5sB1zhEMr6azU1Dc5ysPgmzXUWS",
  "key38": "eQeLytdx4cRQWEg5pwP4kKSDVgy4BYyoE56rcXJg15q9tXvSXKCCT6B53cTegqNAGcjuwg8fQvno27iZVzbST5G",
  "key39": "P2TdhGmqh19a4VjirJy5Hyihm564koUJAGEuQHcx2SA5cFWpJZGmyaZHLGxcfnaawrXjHxgnSevQGaBpbF2QX8c",
  "key40": "5fptB2URy8kHkX7yFShHaHb1Y52Hj3gmFxxEgqJpRLsMEi7C6fVBXr4xAgZHejtc5kyXWbBt4aHm7UvdUmTxdQz5",
  "key41": "5JqRju2W9GHiCsCVAcqZxc2bUX7C4iG9NLYyq8Cxgqj5VnAkkL92eZkRxyybjJKR6S4pyNHXkbh86gQZFRMKo4tz",
  "key42": "2oMXs5PBJdMmJknM4aj8iRc3jhmnBNYWCFc5CqzH2sK2LDSArZWZsdZQTuhKc49iYaFA2uujmZgWHADwDf1LM1Dz",
  "key43": "SLpF9ucPWguXREZzTemxGNy9QmRTgFLAtwbatzbPPCPAVstMurRyzC4CihgqKhZ1VUCVdHa5XhZsMmgRb9JY3wn",
  "key44": "ZskeL431AzuhUDGRXiTJYxhvVpY7TyghUMKojgwjH3BmToUG5A6bNoB3vAwd5NuPEFs5VxXRSF1UPnbwcTM3pnC",
  "key45": "2zbAwyoAzY3HEGLh8p1cqWaTkwtPSHZ85doj8RDXULeJdJZ84q1mjH9Gcyatdc54vD59wH1mjdvy9T28MGSvxvj1",
  "key46": "rjaQPjnhkHZtKqXJ7eU2Y2G9fWQNaC8urF3ysrZdB2RizNCD6awCf4FUJBb3eNjwAd2HhF4zb3siGkM4bUBSfx5",
  "key47": "5wrLsygEqazF72zPcYFa4USdWwnBhUFAx3GNVfxj7Rd5DcEvVTxjWLay8N3z3pihffMJPaCL2bp6BNy599iHiAKz"
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
