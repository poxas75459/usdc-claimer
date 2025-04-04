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
    "CNpASqSiJUyJESfxQwTKb5uQ3rMw8cD38VB7doMVfbBYNRLJYwajaCNpT6cWwk8STdhtBTMpXGvXnSyq6188G28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sri98aM6G422fsL5GM4ZoHEqu9K3si4ayrGDKk317TmUccoQW4SwzHo3J9NdemFZgvo2gKG3Q8Jv27cqymM3RBh",
  "key1": "to5QERxzrwYJJsaJhkLkUAadscKALUMXSM2CRP9VyHo1UtRqiWykGbWh9QK11vtD82EP2W4VRgVqCcKb4hfhzXn",
  "key2": "5runsnGMRRCJvs1PbYUYct9giH9CuHAKVuZgGGfaXsZTECT5cLWNWdjxSJHFAA9bpekCSzpqTzpA1QCcTXcrGTaA",
  "key3": "5nL1YTc3pajhaRexky6gqsbz64prvjQN2iCBnowKivzh9Q5hkYBZLJ3cmQrED761baw4pXXmNfFkQrs3Yp85pSsJ",
  "key4": "4zQ6S5cYhabdym8YBieSCpa4gaoie4wAE74tQL3YfRoUHw9UprYWRXPT1z1FedbKmEq1AMrdTDJTfc66JPNEVsnM",
  "key5": "2UC5fKNeiuRtj7pTXSCaxiaAfXdo2r1bmhLy5kXsEcqGa197C2vYMvh212vW8uUXXDD7PnjWZYUGHBi4vbjqS8qc",
  "key6": "tagoEq9kwkxuNxmgefgJJ9SzPRBHVtiSKfujy4E5rCvpeYvsifqtSCKmjJsJqqAJwxHTicDs3y3M3MKeg4KuFt8",
  "key7": "58USyBXSLBtqwdTF5hbxqdKDrYexiu7T3uyP58CRr9GYjGJapbsrC6jhC6NPRajiGMN4mCHQen3MWqXV6gK9ssz6",
  "key8": "5WLQhTpjrrxRMjXk8TaLu5wsX5KZn8BTKo9JEcQw8vRF7iF3VgrwPT97D8DhqdaUHs3iAY1asBgfEw2w2MEmNdz4",
  "key9": "i2eTN1eu92XmUmn6ppHe7HuywHyeqog4po3STytrPYG59rZWHXGzg7JymZyncZTDX17PiUdA1mjtjpCdEoqPGmf",
  "key10": "39VvpHkrekDo6MygyHGg3jCDGCjwEF68SGk3Xpjhj6f5YZt7Ue2SyroDExds8wV8B8MAk5cBaAiD5wpt456djVYu",
  "key11": "251gc8Y8bPhKvuZ5BUWFxSBxDtEGNkUfc6Je2QjNNcprWxAQKPtEVhXM8P3vW4DhRpQg9aYuEiYyHJ7ajmgaCQNA",
  "key12": "bUdXZjqbyWD1YCf2pSs4YG36KaFmY9UeMPU5yrdCKWoUfNMej6n343NFiJPj2DkwcwKzDq6Rzq4KqnfSuxR3iwe",
  "key13": "3s5pYbf4gmdfiDpFAn4DfWxUfZEL6PPxKu4ZC5cKhKCQY7L39pEg8Dx4gvoCiHdz4MYed2keTkDFHjS8CsvQJiZ8",
  "key14": "2uzC1Wn336JF4aDKdmsybkvtmxDm1jh1WE7wvYoNaLShkRzM8P5aq42y41tDJchRaRtu4mZqTE9vVbJ7dALZ3wNr",
  "key15": "4SWjiAJ73Z2Rt7Bnw1UQEzJuFcSyfhhpkmCHAPVQmZtmrWEe2FbTJQRsSe5EML1bSioNcLUWTph3f2WYt4t5Ak7C",
  "key16": "A5BpmLfVdCTyU1jWWSs7euG3SCxHtsjDv3oNZr25pZviTLAYwcpPuhkbRtAB36n1cnqR9pA1MWAfncekDv9mxwu",
  "key17": "2BCjQzFmxZxw2idce4Js4ePTaUoWC5zixpTfkBKdBQYYpQBm7E9s8NGaLHAwYuZwPia6MBjwVDuwYWhXxy23L7rV",
  "key18": "3UvYjckMozafG9THQ9zbqxpfmaEMBMDB3nnnqbVUCCueeh2tU4CcqS6LjDUf5TFNz35ayd1MhJSVbnbJcUgYTUQw",
  "key19": "5LZMUPWtMYPiHsHvKjPwtxFd56PqeM8ody54WPMx242TNTruEfd13bVFraQkEHQ6fb1tf8YWFHb1HsZvy3Bs1EdY",
  "key20": "4y4GWpgPRbQdhPmi9Y4CVH34mKfUFrvQs9AVySAs4Vi7MyyLAkqTDD9d5TrscatsdMWH3jKDULu9EuSGdFxpgvMB",
  "key21": "5P1jBzr4enC5DMZC2xZRBx4xF5fmaKzjVftNFu6Qurz1W48eogrMwAazXXurysghUc39C45CSqaTgqDxsBXEX42P",
  "key22": "2hRTdZnuita8uhuwwhrJwF45oBQfCeDjq1FNySr3M3zykSsFeTde61dGAnQhb5xr6GZVpkCLK6Mq19wGHyV5SW9w",
  "key23": "3vzEPBjFgFJgChmFp5iotUAZ687mr2Ncr6ipKdhU9pLPJVioBcg82trofS9VhNiVqNMPWsrnChVG6rwbQT1ucPN1",
  "key24": "Mj84tbvGUnS2PGRXHisMg4fE4Ao9K6wCYaNXW346jDJZZbB85hfQGBZS4ahqUUGPduknzhQY1kLnxuxLfpnqzsm",
  "key25": "2FQWj4A6BgCAia5CSe3QUGVcF8GUz3eHhoLVmcbo3SUdMyEinXTF88kTKbhKZQpMiLvPkRMGmKRPFSpewmVhSQ2k",
  "key26": "tYzTvMaPZkV9UtG3xFArV6evdjoXwSaRJWq7AEvVADZEKAUg5N1Zmb5y9dCGaUU4H8t54NJmfvudEoEspsEzpgJ",
  "key27": "k8yDG2fVCM7Wc9Q3E7SJhm1kPzzAjKEDfpjHaoUjnCVAvorvQRLg5WspfAnYAYCtPuu2iJWt7j7QzYHDojQWLbZ",
  "key28": "43nsdApCzf5Yk5gKXLpeuBzSp85QNpXiJPpiAHf8QHWZ866EGE7GR2VkcQVDhj43SHjCgvBtSUgpReMjN9K6BHj5",
  "key29": "2kbWUySSV5VQSheZ4pmQ9XYuxQ6qUTo5J2BUtTyvmxZ6szLjKCJznauopZ2uDokjxaed4f7eiEqS2gU3n5B4SUL5",
  "key30": "2nQEgj71dgQRBYPdCMC7GJGCzgjp4pZxR8PSFdjpYsUEwJPyDqaD863CrVqtUM1mJ8cBuHChRFdjsc3FkVfKDFCk",
  "key31": "5Zb1v5GNUjJ3dJnXQck6quW6HvWb1VkUagqrFTpStXajsSRLtZTvSex9dNEkgwkL38RhGDLNjJ4dukFdsweHSahS",
  "key32": "3Z6vRBnmjQjNJfUmbG8Q8xuAgiXqB9GtJmFywkHF2mxfLW2iHxfmcKgEF2tHc4ynd1x3JQJ7JQLxbHwdfTaXGsb6",
  "key33": "5UVHswqU4HJWBAp5KigkLdaNn6cqtegWcvxQtqDx5j8ftcQNjhy3iqivNTLu4gWFV7ZUqS9RspWxXxM4fkTAquKd",
  "key34": "o7xiZsmEiwWi4wtbACQsxnebFAuNXGPshFtJDHtVa8bf8qEsFBSfRuU8QTXNu2fHMFFTMA6sq5HUgxKhtUb1hDu",
  "key35": "3dMgRkTwYAn3GkLf4YB84UgXQAmZV9NZF8HpiC8iCZVYFRGegMF3t1E8XBbzpFpwonJ2sDTc6M4swh7nKoNU2rFe"
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
