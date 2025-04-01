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
    "4kN2UqGk4Gqho83vXzf6F8Pdn9CTNsiX9Tw2yK52wr8oPMjXYAZxBABogUECnq4tPH3YsHSDkmksg6mGwFS4SXJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "trjeWsNnvM35MZSSYfrMLhVZEfejCEtpjVonYEofQfWfe7K6H6mYeQHS12PpadchnCsm8D5ZHLFjFNzao6AGMYb",
  "key1": "2fhRMmn1TNDWkbxUucJEV9XygMrKMfdmTtnGRFceQTcfyaParvbXwYrdRvYShkGhLp3bmjQeGK73A8urrTqvKhry",
  "key2": "46LQckufgXccuEKJM4VqqJvgWH1c5B8E3iRNywsroZTvNsokwWsLQVfoP1Df3pvLGhmj175JgRu4wM7X2QLeK2Wv",
  "key3": "3XqYRDqn644RVLAtabAi7f4RXA6xa9id7SgVfxn3JPXdoQrmtz6keQMdofEGs6QE7yUmtreUeKjVJJeu1awRtwXm",
  "key4": "5YuQL8WeBM2kMrNH94jqSsq7PBx6u96S9oPApS4aXVKrSvrFZx46tFX8wLYfSmvAYUwqzisvRzn2aX6GbBrSvQyJ",
  "key5": "4bJke4NRu1By5yJVKzE463mPfg8o4bqeXeefdEWAPT4QzPrPFYA2yW3ULohipdFj7Er9FZwSrn5dS8Bk9Vg3Hbat",
  "key6": "284irNsMSTyh9E7hMDCvBtVQaLybMVNiyAdEEFgoWTRoVwNd8AP4BMjm4GsuaujJhz5LE67Be5JYVwwwWkXT9pHo",
  "key7": "22BXda2qhJbtzdGPJMQFSz1CRz7cpNJRUPCUYwX662mJjQNmW9w1sMse1t1uQv1J6gvD4JJGzPc9haa9ULm7YYSm",
  "key8": "4F4SjLkseBXWvT48H2mrpNzxxGsjyFoHYEjZeqBeaBURDHrdscpXUBoA3LFHUexe9LdDJibZaNNMm8583jukWNpv",
  "key9": "5eEb2CnWjDvT4UJ3XqFwGjEDJeX23o2M8pUXfeb2fZ94mpmGRFAa65FCEeLEZnM6GMa9NfZnPqUhoDQPwBN8Yqj5",
  "key10": "5sX1ok5LNB5goTNv1Phq23cfQaU7PX2P5sXEP7ScYmXBue5aVXjCzqhMEmtLHHkdgkRM4PxBzzctzwQFdJm5HfBs",
  "key11": "2ybr3v6jr691U3FLt8jmCv5GFCQ6XS5JpinFryxz5WYb3rjSABSiPQGGsw9hmsv3q1Y2Una2bNYcyujuUT5iqa6M",
  "key12": "5ju4DVXkdZJyF8hwhgfCeQhPF65WakoFa2RmKx8xJthtaV2roSzm3CNmNs1q9ed1vuYQXJNpQ5hfLGjoQLmZenek",
  "key13": "2kPN6W94cehyyd8EXDGWBgFad24FJ316DsLNzEAVBiAtzvAEa23kZtnK1mdM7PFouav5rzgkmixzsTHs4nh2nX6d",
  "key14": "NVJaiDXo7Syh22mu3vEWGygNaQxpDBfS7gy3NAaFRDZLFCpAHvoBskb9eh7W5zyHSbJiyKW4QTvzVNqxf17tonk",
  "key15": "54w713TW9eRvVmPSZXGMfYJZpNNDhAFrSoX7UH1C3TnytoymQ2kAhjyNuqNJ1SQ1RtDCSEnPqqC1CBziUXxndU4Y",
  "key16": "27Y8rtcG38g9HKQD6nFurY3cMZek4W2WKgwAeuc1Y2BuXRAD6FNdW2b5DSbUsNknahzUikJUN32LdnedCcLdznyN",
  "key17": "nK8LjNL8FgCtXRpfNNhnjCdCZhK8SGRur6wqURLKMALiX1iKLqZ8Nmms87Woz6oYhK9cXKwscvXGY5FDBHMLS8c",
  "key18": "3QeKGrEfMhKNREMdg1NZSQxB1Zw6kar1Ezqr963Ea7WvtM6XFMouN1aFPeMBouRhPXn3KGXw84C4LQHyyi7aoPxo",
  "key19": "3vFfeKZwrPT6Lb4zUNuvr2hmKFPdJgxYEq9SDnACFXoQXzSWSBGGxgZvVD4WmVSApNc9BvfnXEZy5873FUUsLzSf",
  "key20": "pUCdg2VsBDHqGGtedebXLYAVodgpcRJG1MkSGZWTkeiAfECJCXF9oz3h5ZHttcBBLLKviANZ8atDGvMEsTxsvQL",
  "key21": "4jcxT6WvP3VCMPLnTQX5tKmhAHFEogwNhBHqvbSUVnaJnMzk2rRVpnMT51PShWi6Ev7EGb826AgKnEDGgWZ8omFN",
  "key22": "64MzM6RxNtByDQ4fPP8q4WGWFZaonDWpZGh8AC5P26fhh854XW93wXVgpNGDdsRzgRLdQ9RtzLYXdj4kTGDjqXWR",
  "key23": "3TSdTMTYt6qVt3n2yQhL5upDte7GpB5hGrNU7VRgPeb8sEq5VhP3SQXcXDbkN3YGH9qNackjLhmsnoRydbrpvsgs",
  "key24": "3TUkatNuFuG4in6kp7ejL4SERBxscv4vsMBsaYFgADWuxHQbgqkd6v33VrHEiEDTpTfxnWePvHSd7ZweDhwo817b",
  "key25": "5xbEjS1DyTZNWLkLfgWPAnb7Umi4ZGkNPceEt7LaXcv6XjcgrZeHxhTBVr7eZJ6kxTf44VzCwHRUhvmE2TREW5Yk",
  "key26": "62DtN6SvewnyymzSBpBe5xmuBvTowYLMpsDRLeLoZu9bN8hdeurATh6mg54dtoWQ6sL34ytvSf7TPb7yNKpVEc3J",
  "key27": "3R9B2qpKFnuPwSKvtdW8MmV2RYKYfitcodyE5ht7hzGy8paTBqUmNPXco2q3XD6nZ2538LsVqY2cYaqDkyCCQR8b",
  "key28": "31icvvKAu2xnBDtVrXhFLR7J75CQ9KGq48acPDf7Kos8DhC1JQPsGDkb3RMup8BQPfmT33LASM622hY8ojugKXe1",
  "key29": "49uJPMuwhQuq7MVVvx2FJKYSXeSfWLboPzq3HG1HC1EPNrCbEPJB9NDFXYdUfjpgiTptCL2L5qupVoEa5kkCEepT",
  "key30": "4RT4S3PJy84onnHeNWB2YENgoXD554DX7uPVxetX7DdsNckiFZkMaADPj5v7ZioQEUHmxLYW9SnQssr7LXjQDwgx",
  "key31": "4rrYnaCHYeVhDcANE9WQLe7tpe3Fv69PvCV5AtaaJNb9Aec8ufkdKbnJ97sSJZxoVGAJV7MhM89abGdpri8hJoMu",
  "key32": "2SwtPBsh2fvRx8jWLRi1eL5jJ4VWTJLYjTEEQuT7rpFUpiSdBRdGwpjUVSiiLTeN28QxSfDq44Ho9Caux1NC6KGt",
  "key33": "wQRLcWbGw6eBYye4BL5Bgq5q1V1YLpbRB432F4tFQ8M4kFcfekE3jLTiFBFqsc91zfrQBjsvUBvAq3XGocGro6o",
  "key34": "4zycPhrAKjw2jzLxjjDWNSpiA5vFDExgZxWAYJZsDVnqax9MknP7hZN7B3YDxHhZGPp1dLL6irpNn2QdMehfoC3f",
  "key35": "raKNQTMGmGRVgqPGF1o2EhmqjiyTLTjYw7PjKJmdP2nmKsLZNz3Ez8ithq5FhkU59s494e5MyFtmiQGgp31D2Fd",
  "key36": "5mNYCsDeuQFMZujygJTV2FUQMq6XKfuwCDVXNd8A4cMmWbTBp1L8GZXR5aKztf8wnjFcsmev2ZfysYGGnK3Y7B54",
  "key37": "KfseF545GviyvaDJiwfnHVdtmBoLb5aNX526DTaZis55xdhkvo6xBTsw7ywmjKmbqnCHFrEdGJafXUqVKyDNvsx",
  "key38": "5BjSS23vNNcQZTXjyvqB9yzmvFtDbLasRt199Z5seCQQo7ZYAkD45N7XR33BqgBXMtfhwFxkzggLmnAutRkPHnfL",
  "key39": "65d3xRHkuGh8YRRRF1XrKYPct6m1hynPkDUR6EbxwrSNgZDEoGdaGPGqFxrMyhT7PF7UiukpkknkbEdKSpAiHxnT"
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
