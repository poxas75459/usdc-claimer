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
    "4YdLmabo1wn7kTqD6w8iT4nanNkResFyKMQXrHpTVxrbuvcR5KjZcKwAKxRp3hb9iHA98kw5C667sYFVfafFNYgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bx1rY9yVJkCNW14dtoeD1hUNDqbPiSeCCGnKV4ugC64L18tLKVR32hsp4JnDtrovmsLguTw7RzvefLKh886mvYa",
  "key1": "2NoXaenXFmBbXqvMzF2ZBUa462DwRwdnSUVMEbQ6WuX4W3dd3bvsFJdDmdxTvChrGYKrSFPAy82C8NEeLLntagF8",
  "key2": "2tnfUYmRSkWUVsi9ss3P2HFGMVsAMQrHT5iMToqUfe433zeKsPu4XP2SmFaBzYH8G3atdTW51TwWC3QNWwWr6ux3",
  "key3": "2nDUjrBUFYgMthLPb4Rcr6f8oiS6nSK6eNWc5HAGFZ4BUQvhKtHF4m2MT1fwNy4HqNie7ybQtsyEvqVDsahKKdzu",
  "key4": "4qwRXaHLx3UHgCFjPMXz3RrgPARUvqC6Atb6p7fG1GW7cvDpnFs95dF3rA7o7QMKDKY2eEQ7v5TG7uXy73TZrME",
  "key5": "4w2wcUjr7teiNG5mEFzHNikwS4qirLrpodd5LUokLZXVxwLwQC2aiMfSbkfAVDJVBpEugj3eHhVgZQcf1LCk5Bef",
  "key6": "4bG2TgioQvsVGvQHWQK9L9xjSJjq4TyDZqS6TKwvMV89eXbJUTFtkyHYSHHQk9i1YKA6aHAKpgigoNFwDpqzhvcZ",
  "key7": "4i3pziM1vAf2mRBdWNVYpuLsx526awgq7Jg1NxK2sS8WgT17jrJHv2vbUadTJ9DiUXU7qJLhtZhjRCD7uQXG3Pwi",
  "key8": "29Xk17TDFUGyeEMAVah84oNC9pa7jkHdeWFnDCpzu6qo9nqoLRcu55Smon7SMEiA4f18iVqpCUdiu4jH5jbV1mxK",
  "key9": "4oAVQK5CJWbaC315AjbwW3oRDYCNRTjQeQGvbAtTEu9hiKnLfT4cfpibUNU7DztVZYd1zAKGAP9hRGiCyt1izCdA",
  "key10": "5HFn9JKvGMZMcCieCnWni8fbVWHHE2fgoFjUGHv7Th4rUSguKFifhRWr4AdkyT65qX6HDvMSdQijZ4ZEeLi3AEQX",
  "key11": "5RwETnGT6GvcGpu4kSNcjKVyRqgn3AaWmMWraYjMg8Gho6e5by5C2CQomBzi1toy5hSUjRfsNv8qDAbknbJbaWmw",
  "key12": "WMxCfhBTVGEQZkbEZPQEMQDn5UjoxiKixivLqhFs4xDKwUbYmS8jSD1VaCnUJU5DDSZ61VDXinZPZDeZxmjbe8R",
  "key13": "2kQcDmPZsY7CYbDBRP4bjGMSQP5gb76S52EYErd2t3RQFF7YJrptACraCPzNtLod8q76RLhrzFXBQiYQsfzaELY6",
  "key14": "4mvM38pSQwupGNvGjF9U53yG8bTyBn7vHnXg3gxVpZp6MPcV1UwXZQQZ5q2UhxpyALXgMfEMv3qXkN1mRQSni63e",
  "key15": "4RcEJNjj6FWBpKDrZbVTirUPrG76XrEVWo8NKpvjWBngNoJdyiNyMzUe6fVMweM7Ga6kvfYSeUUPT2AfUZnSDP9f",
  "key16": "XSpJzBsjDBTaC3dx2MVdHQjbQBS3YqNwbrQNzir8tHa3885qJPyqVz8xRUcPxg7SiFVoK8btarqTdWu8HpdWbRR",
  "key17": "xYx2tWup538aYKyrrCYCdyR4iY9HLy15PQ8nWSQ3VBR3vR7wLbobPbcJMZBPrcYzgtN8J6MTqvmrzbsqKAUU1hG",
  "key18": "2hG1SiN1veKwmAR54KxZyRLj12cRqWTroAg8fkckGefAMJWVzvzsRkhSb3UpiUMZFruwkJcbcG3LBBe1HeoX56Eo",
  "key19": "3tPP5dG5w8vbrrcgnKqeVvNAss1q56dsd3VzTnzraqoFtm8SjwEH7Mps2VzmoS4KiUt6obbuSE2GMzZUFxoopqJ2",
  "key20": "4odqUxY2LALsYZ2Eq98KXnyoEqEhYGz8YLcc4CDFBUJBmZXb8aUkKaM6qpB4eJTnbzyKyGqZrrgvGrdG2vqq5bik",
  "key21": "59bBXf4fwdoyD3fuDdjQ6BBP4RQz19J9Ch4NHcmucEKpTYzd6sk5T4efMwBD9rKPj1jrgxgmRtEkfDWhVMDgD2pc",
  "key22": "2Mxse7vVwyTBGCkpLipUWZNRBc7MWpnaT2mxmHEbfnYidv3PyqC7a3NWEhAJqYfKRaF2kT22qQiZB9gcgY5Qx9XM",
  "key23": "ss13mnKfomuscogPi2rxiScDgPDyvcdvg3pZWaf9Pu3Zoghhf5tcPfDjM3NN727LXyPP3pAFDGLnDrwhoVrSjSa",
  "key24": "3wW15e4erSY5uFxciToXYoBvMNWpx3geYVCtu41BDKnHvuZDLWaqgXT2XDVjfVDYvpbhhFceMqh8eP1xErLqY6hM",
  "key25": "4tSBFtNLJpMVreVo2e4jJ52cMNiKt1xxCoYHTW523mJVpNjYkEVShLeKbCDdCfaiUW8ogpkzuDRBH1at1sLqxUdJ",
  "key26": "24gXmjho8KQnrjhBpkaf1nmg9gp7NYxdMdj1gm7HFaHzrPscpwudcmMBXWvyDNGoxhsvSApbesgnqH4qM9pTK5Zo",
  "key27": "2FddF9CAmdj2nvDbcnZ9RXJRLBt53LXPcmPCNNehyDGFbR9DHvbqY3N8SA6UKfyT6nm2bT99g1x47WaQgPWo4Emb",
  "key28": "4XPV7FMyxC3AD2Qe1f8uVKuGPgmyLT3K9yLdoKAqMJgx4Zv3E69ASVYkB4JbYeXjfmVUfpx6FR4PEWozFgRjY3mn",
  "key29": "qiVwmxyT2jBb4BAgvyfNgptbCoxKLnTRgDR64ZzZRip9WzbVTP2KKRF57CfwkvEAemNkfgLDqEsskDcaieL5nfJ",
  "key30": "3PjwWqBNSCgEZeRX3F4ZHnBr7kpv36acEV5c4bMUd3fneatknjTBMFjeN8Kg5vvMbS6FGDZzjxtRvvejHaEpze2X",
  "key31": "2TreDC6CG7oPdSWXhjaazuqJt3LeFbHCyFdUFrftfKbPVymnkwDs5R4CbAQFtcPDonQ2Vqa2TzqbA2C8s14eF7ps",
  "key32": "5Gyey9WWDoWwzdtmGgVdKMGXqsED5GyyucX3JhCMizegyCAJy4bDjxKZfSWxfNatAwJzpubjEgEmL6LqR2jtMpmS",
  "key33": "4LsWamrar5SyXCqjddMANWdwkw9vg8SLbMBevwq9yEw6j27qrMdyHJqnkGbEbhiDKjfs4PoQkGD3FrRQi3stCsHW",
  "key34": "5axUYoXcF4iyk94CjFyu77QrF196DB5P5MHA2kTc5YYfZ3iDjZcURCQJvB7XNvZrfcVuJTgYensjv9GupxibijuA",
  "key35": "5x1G9y5fVMYk6oDZAW7ARd11wJEyCtNkLmLwrZ1cNvX6mNVNfE5RoGiskxdKbLSxyNog21XuQLLAvnS8oqTnvQHW",
  "key36": "26rxPcySJqbket9B1W7BY1oDXmjCRSarCNYaCFD6vtyPghPRfkFi65M8Z6fLindrvaUmDUd4YgBTBrLYYPxd21Vu",
  "key37": "5ZW99HGut6k9faBiDziJx58Eh8yEU9vQRQoTsoEbBpymkhpi81TCcPq9VjF9VW1xLiXwVatVYGm4d6jVUD75WaHR",
  "key38": "3CA1SuMcdaEr6HC8n1NXnzaeComdYnikCxLh9qi4AEqrAQDRD1jcNLP6YwtLn2gwCTCD34W23WQsxrVNyaawy8Zq",
  "key39": "25PCuYtL9z3sgbvseKewNyUR4tgLRQe8BKmfLrSopYmeao15hLvGJT49GUPBhNFJXdZFukcfQctEVQU2hjBbiVid",
  "key40": "39wkupV85s9GcdXwe34tJcZqbbroAQTpcQm9jqgCWE895qjaEVmtavvQ1FBRxvYuhkAaGBSF27Y9Q1VeZiv4xHvi",
  "key41": "26x7ZsUUqLAf2RXHzTrwY2Sto2qUsCi6zJ2S8KpAn21Rx3mwMU2JrWZDtEuwJtKPr7HWg8VQAsSVa89WER7q2ocw",
  "key42": "5gDDD8wUwUvigsHKQeMfy3yWdBQQByAvfJMZqakn3Pi7etcY9ymgfN4udmyNv5GTqFcVidDkjbWrhT5FwgLHDSWT",
  "key43": "9hLeMpLkoJUQH31mqUHkuz3yVRDUv2YzhDmL1TPjBX4DZvbajzP7s8hrB2S7pEWBamSKkxrKBaRuY2EDxuPuFYe",
  "key44": "48UWwrLbfqVQfieq8H5aEtTaL74KefwEbTxDpVwTbfruv4srJv8og5iLWRLm8D3G88ip7YJUnJHSezwbjjLgfaaF",
  "key45": "3e5Jzt9fSkzc6qHxTHe6SaJySntwoJ9wr4z8KvFmF2wfyUgenQo2rtBNmNTkDJDiihGNUVxAK9AkgzGFZ3nDLVSL"
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
