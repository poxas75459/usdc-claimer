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
    "3WGF9nwqqoFHpHLxfrx9mkQUjZHcv6prkYSzRPDSBc2jwvNiMFGiKpj72SJAE8WUoBKgb74bgUmPSbntRDKpavEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VQZBpuQxAyDbn9tfYPrcNSLS6e77NXMpXHxscVw1Ni3UqLei5TdRRGMzMAb3hvgPZg1URqUFA6YLGtjNgNJYBeP",
  "key1": "hpH3cvfiTMYmxdaqo11iVSvHoNKjPrKdEhwcomtSBr26JhETaRZdTCRckMAQjMNoWZomu3tMnvFNKytHv8qGThm",
  "key2": "2mnm9vxwQMvxpZr5ZwWWXHeK5n2YXHkE5QHrjNjtzSGbUf8hwAVAxoSC1Phg7b5TWhUB8Ze5uUKT4E4x21Vp3Bou",
  "key3": "nDBPbfZc7hmFEWNFYd6rVh17xMPHX17JS2Mw1eGp1Jmp1isBhyiuzYhGZRVnLKSuKkjQRh9QxMXRSErMNaiUS5e",
  "key4": "qFXaLLWaoNdK4xR2neAKPcDxUVNu6PMpcEMNpZZBquaLZ28Aq2KUc8LT3ieXgqC6yBrW5izb5A1skXekcdR27gQ",
  "key5": "6vbyWdJGGfLb4mLiwTLZyd2nsiVjqi2nAV925G4qW1fsQDhactijeVFtX9wHQfFQuFgnaSkMqtiDuS2L6wMKJfg",
  "key6": "7EwUKgCFWQ8kRfXa1fSoMhwfUea2u28ZHLD2ZEhJJGmvzARu3A225vQrUqmZGtg7kQrXzWyXvGpPpXxg2CB8Niu",
  "key7": "51foduaLxYunvBAgqULXmyLrJ9dNfFnuwYrKyxFjZj1GLdJzwv9vAZhgsbZ1aei9CkamkAK5NGks4KQTitYq3mfZ",
  "key8": "5qEhps3kU2XLTModsEkNF6GWnEd8hx6AqJTwn51z884ukksQNceQTSG69zpdy5wxJAVvaUKXJR4a9R7jU28GkCxW",
  "key9": "4kLmwQS7WPnRyix7R4rxYSdLYWGsQXEPTVzjKDxgah7JXfy3VdKZn1MLd7CTtTUiLGe3E1QshntmSkEBnV2QcfW5",
  "key10": "21LyMVEc5FhKiuiJQ23u7LwzXmfspYqZdxRdV3fMMHs8yh88je5Gr4nxbBXEtWscFdPw5g3JZbiBV9RZqb6DdB3w",
  "key11": "5gwfT1KGu19hEfVUb2r9wukMBc1EXUBpBcTYgLYEPvHAj179Zwjo1H82G2nxtGE6MFYtWpMYeAzohZoxdBNLBSfG",
  "key12": "4YkzpgPX2o5Nn6TvrfXSECp6b6byQu3auTc3symKVxTXYHSngRsj39csZpT5iAzCRu4F3vTfzaxxZfAYDYwSP68e",
  "key13": "5nrak35PEWdmCek2Mz6o1yRFXE5DZfs1MT1hCAoaJSnjy2RYxiJoXK7bm5yJm1XWcz3k653VR75UJpH6H2AsdHNB",
  "key14": "4br27NLbQJonHESNioeUuebJYv6AT44VELxwYAnKzbADBXkBf6AD8fmGjAvqq8Mf7W2eQP9jWuwe2YivnR4ygyi6",
  "key15": "DsvNs2CBjezzJSQRTo45iMKvpbWNg2ujUiWGgBRcLerhQ2UyPoCq587FKZMNowcpPjtCSUPQK8KyK6Kjk2cVjZZ",
  "key16": "4StfFq1BSytXqmWhccZvsjpDFkgLweLukfdLzbNChEygpg4fbk2cPCXjGYb7BMqypiuSbUUiccmQDhh1LKFxHkLi",
  "key17": "4uXsMDARvX6oLKUcWrEqsnDu7KhWAq8d49k2EjhvRVPdh17a16maFfijBGtjmMi7Gmz18mfccaV7Uq9fkPqkJSSc",
  "key18": "4QvqJVHpdac1eqcrgmzduQbFkfCddTBskq8eDJ8nakErZhcXx6jMzkwmPR5gV8ymE9QjzgzaYznmF1RZBrLQfp6s",
  "key19": "42VsegQtV71UUwYEQeUE6E36xDLGkTK4UBuv8VFr6cvKAi9MEtcHx3AEobLn3KY1ekNpuC42PZQ8CE5SbgW2WCU1",
  "key20": "5xuZxDTZUJSQAWAjVuyoGrLv2oErPdKVFgkJPhzQNdwbvrrt8gDjR5LvSkMQNzhHFartaFMqm4949jEFLzrenVzN",
  "key21": "4Ss5fruoqzkrY13HufLs9yZndgjq9AFFUHAokPayMD6TUTUYqxU6PjtVjHqgZszL8CtpFFLfT8JLd5dxDKav5PSQ",
  "key22": "2CHaNWgbuk26JnD5CnKLYUR7maqfr9RF6ZieFps7vBExQRv8zCP4QAd2uLfohMreEvVAM2jN1KTyaj9vMpnrTiqh",
  "key23": "2LeRenBeNwzCUUJ488oGDz8n6p2t8azvxb8dMPTngBSTweq9UM9U4MCvhnfaUsg9TGDLj6AHt9aEBMwiGDLbyxwV",
  "key24": "5gYufQCcESjB5a1Yk4c4qw2Vr9P6amqVQz2TkcHSMiVXeodc1Vws3aCgrTcNTySF5Kb8wUtotDSaRVtjEWLktr7K",
  "key25": "4bkgdPqVjsekMaih77GVXx24aFjVj1x9jN3ewBBSeERYgZjkBQF4RtDF4wKXttYktJpg8XLho3np53wo5Wb7uRmj",
  "key26": "4ykPSYEUaPDZyT4GGSik1tYadse9vWyPvaDPki5cUBxHM8RwQDp7c7yBowWTEGc8ubXtsMkDDvPQUVtvZPN694RQ",
  "key27": "5tWktTYuP1KQNqfRwAM88VxpKLknhTPVYA9A9RJxu933oHGebR8jwTFMYXbeSQemo1ohfXSGJmKNXsNnHipeCzxk",
  "key28": "3xn21KRoVmwyhV2CmTXfFXFMoYWgjfov9fXVueDwHTcVBnrrVew2yCiejrgyP66Tcr9u2737cDRQ67oFwLEvTNtx",
  "key29": "3iQZsbsURvWY79Y9U77C1ak1tu5tnsSHvULB4VackgtB81M6uXUbiySBqp7KmF2A4Y7hhsGZonQ2SbT5CH7NQFoi",
  "key30": "4JEhNJ6Co2yDJTfsymUGBNqYbK1qywAAXf2my877h8RmoxQshiNqJeFSatFTsqdhdCLhQ3nAWdCLSzNBT4Kvxea5",
  "key31": "3RdGzGeAHD2ajB3VLR1FLhASPofz58HVSDcJbwgzGEaV5NYEodxDTEKW1Jn9wEEw49B24ke4iUYJZMRivapZFhZu",
  "key32": "5JwLPGZPFNGYzRRn96aYKPHu3tFRmkW1jGHtkxoKN7EQXX7e3dsqVtcUEQtWU6e5AjLodbMDWpdTAtkGiHxiAgib",
  "key33": "LSLvzcPKCqvhCukfUDrZYfmdezeQZr4ysVrK6wt9LD54iDkWRLUkTHA7tiLQqDQudySFTkksbviVXDqAz5WNwbs",
  "key34": "4NbhwM3B21CqKBTHdrXLLDqJsPKxZJHiYBTXDQmkSrq6JzYBz8FMTvm6b6xUmSMJL7HV1mqPUKLDrSFJzGB5P962",
  "key35": "5t8yU6V34WAAVhbB8rmHTm2Ek1bwecpEnVJKA5D3JzrFakDRoxi41wtscowHJGVGjyYFj8RXyHgbB6SQBcoRtvkB",
  "key36": "4gPDsk66JHcBBxoYXYYPryh2yLfL8ydEEEUPKb9Qw8vG1bEsLih2TaEgass3S4mmAr7UGsNPrrN24Afd7C34ugMD",
  "key37": "2f1ARG1GGBavRvocwjWrzbhruDsjBi4hjkXAxRSP4S7gSMv7SUdCKdyFHwPYhsKYiwZBT83X3Hb29joaPPKw3AgG",
  "key38": "28S7E1XY4u3xqqCGJrfKmz63ftJ28NQNJizJwLb1QPozfsvg3X66CrMHjDt8BvQCtngQesK53to2gzkNYwEbpXWV",
  "key39": "41XxXX679cUc5YnmMVUgQ9TscP9QtM5VF7vWF4oqCbB9rQQyznvWzF3rNxacEpcUqkEMEGtGP2rqdtskvmV5nHva",
  "key40": "2qjhvvfjLQqaqtCEXujdNr2pnTfcPCCcSZd9hgjczeJPUQzLqjW13wBhaCgg4fTink5w453otTayQFuzkzWJnRAS",
  "key41": "2E1frEqgh9dby7vpxw2WCGLPF3DmNXCudsTheQ3xGPkNZQByBGd2c2hcm3jETR3NGWveRrFwynaKUhDkyyoCCfWf",
  "key42": "NvCeMLKfE9Vj5n5B74EvTYvQ9swJee8eg8TnTskSSS2dwhVJKgrFEM4T85xT4F1Nyd3kS83hjQcZVoqsnirtjph",
  "key43": "5qse9cmb6ULGA61i8Jbaz7HqFVVUYSztCPnSWq8jtDnxtnrKqsnxuCeLEQaQMJsWyuFZpX8HDQ23Svuke2iECWpk",
  "key44": "3mwGwM5kG7aHpnpQbkS3BWYt2i44JwT2ghDDfY2ym5Hu28ZCVMN4viFdZC9mQa2tjgowe4F98HcPkjs2MRgY8m2x",
  "key45": "5TZ3m2ProqvEZiKsv7DHL32Bp6peF6kqC7nDo7CELHVM3RVvfEjvVyPo4ikqGwbgSXdNxUqNTVoBkM6smz9iKKZ3",
  "key46": "2XLd8eXeasap6yohLgjswh85Q63oR5JCzcV8mGFUpS2fxfbSjjFo7Zmhq78baPacjsBM6D9xc52Khnj2wNZbTe1U",
  "key47": "wPgrLGxXRWCSL2nbFvUd3T7Qzh5pBUzSL8tasvyJq3repapSvyQXVbGYvV3c4S5EdeCgyEfNjNoBNpnzHUFtKQi",
  "key48": "4vu7nJpPUUuxEJyhWd4KwhmAR2hhStBa7abjZrb4CxSARhVH8qGDqoR2yMQ7CVw6fXCuce5YV6HfTTNKGhkZsjfD",
  "key49": "5QYhp4ro5d7zPmkj8kpYWG5LYSj8xhMv2sdVGeNucLuPA6QYZUy15Hq6YmGYv4nwNjwQEygb92wPE2D36z9pw4mp"
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
