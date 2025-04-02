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
    "4SXcQKRQ9K2UdhfD2yxAKRimCogWMLYrsKCaCHzGgT1tKx5yUMri4aziBpPi7NAtVbkegx2qp4qfo1fDutpRfTpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ActVkfze7WYkMroZ9H5deWkmMDJuU3j1jLePYrf5Bs93MAns51yrVh4LZR1bqFxwQw7c1onxc1J9cB1TAQFLL2",
  "key1": "5efZfTBMZvHp4xCkQxpbjAXgvUQV7YqoqWgmpiFeuB1SByVorg3JdYPYyDL1rqp7yX8qDPB9ZtPX7xYUfyfkECZn",
  "key2": "2bLa3UffE67KGpmCKMKPpeZ5XdnaGRCAZd23MotYtDTY77AagHsDsHFoFKActqHhNiBtXHHdAY6UhkSLBs4qBQBV",
  "key3": "4qXLq3Z6LZf5piFVVmnKzgfXKzZsSUzw135XfFV3KZ5FvSmrgvwJJqeno3TgzcL5184ARGrvir2hup5Gq7SV4bXa",
  "key4": "dzKPD9zLt2PskMYucME2JQhsMKwzCSGPeJ4y9hkAemJ7ymF3QaA2kekduC1YgiC9B1sM8dhdgmecykWpKDKn5UP",
  "key5": "kYWJ7teAVsjnEBknGP1ZGn8g24hEPyzrUvFNRyepCp5vB5u8cZ8R735eCTymFVTm96GY3cZBnfh95HP44Kjd9ti",
  "key6": "jp9a7NGju3wmUfxjMRB76UAceqtED8EfjxhatjoBvuMv5weBcbYiUD139h5wyvnqy4Q75ZdqwghWbN4kvajUMTu",
  "key7": "2uWPg9oRcobDKPFcw1jNA92ZMS5zgC7M6XokCv3HeUFjMh2JX8Lbvbgr7KxST2naWuhB3BgG2Z1ZRnr8J37YUv6Z",
  "key8": "5X3sbGhToQVVTv9rmyFYEHTViMjdmvRf7stvCx2Wb36d4rmp3UMo8WCpRhLYE23Y1Jzi3odgNZxxPJtmXL1NhDQ2",
  "key9": "2D8EGhUCp96ZdzTyzdFgSdn4pQSNdYNRbJqALJvdSFbQyajFxxPp7GFgKf7FPKBSivbZA7Zt89XvjdBgjgEaXiHg",
  "key10": "4GrUQu5cN7wZGFtSXzjMKBY5vncEZpopa7GhR6mZ7yoLahHhDQYFT19gQxSyRUAtSQM3GARS9grx9ZMhKSvUpnfv",
  "key11": "62HVT3oNQ71UCuqXXtMkzQKn4kwVmj7EVTt6mQqcNMa7PwemGiW48f3L7bor4qGN4yzY8er5VmwDjZfwJmreaJkk",
  "key12": "2nThNyjB2S9UjZdbuDUoM4f863x3oCDT3DsTP9u61sSC7HP1Xc5A5pgiD6wfRLr9Bg6SxiMNE2vjFbmHK4WwWJBf",
  "key13": "dN6fH3SFo37RAnbxcCukZVUfGPsDCSnd5FSvS9x2GjnL9gCbwytTA2NVTJHvRvA1z5Ri8EckC6VwTGbGAfHCwd6",
  "key14": "54DUysuyc1MybbZxgaxFC1epEoVPkuT2sdm6CmtshjuG7WRcuNTmgmZxR9fVhiTDQ2uuhV8uWUYGKDjXqNomS7gp",
  "key15": "sjNKDCyZJZFn3z17jX2iLrMhEHPYXJh313rfPK9HcRbdMSNL2kiEedXfCayyvNqCYysYDsoyqJhAbL63U8dAEqN",
  "key16": "3JgTCyUa27kGgVmYkPoTvnzSftzgoeUw7whegFss54ew6VAt357FGqnHSTQ6PtDdiumpwfwj9pD6TE1EozwsGHY3",
  "key17": "35h1pANJsDZBqpfmMbLjZfHZnW9KJwdXuWMvNL8YbQUy2W5eixUCV2kPrM4VAPpgCBKvbFV2vkvHyVJ8QDTH3Rco",
  "key18": "272eAhSd7FAvnzsWNvfWC75vG5piZgvRjQEDHdeGdczxwe2DEJG3VdsM9F6tGiVP18QCSAFM366rgzZr6aA1upJ8",
  "key19": "5P8s7m25J6rQnk4UckEi45YNt2DoDotQpzNeU5gHcKzVH9LVc5KJyAxKvsN5gMUCt8z4928CsWQA5vuLLh5gNtAJ",
  "key20": "4NykxM5KhWk3ieqtx171rRQBc1hHuCTuEtTV1zsVjDzRQYSaqjzaYrvbQmrej6c6hdGZowSov92pucz8Voo3yMou",
  "key21": "5NgCoD39B9ANXo2Xa8LiHZJwUcoMtkiuEwrrFcLEh44kgbPJdsYsShSbyKLNveHV1SmCiSDZuYz2GHbzd7HuYKNd",
  "key22": "3cjNwyEWsReEQf23hap9sXwvPpYuqTEnV846EG7goCMRpAn3cqZ2SfLMSdKWwVsjBKY4uZdUe1kSZ4CvcpV2ctyK",
  "key23": "5bA1u6LA7YnZJjhgZpo8NqEC3u8u3LLnaCe46WPFKLZHbQthwV8bJX7Yq6KNjqkBDtn3zEvga2UW53PcZTwEYaY4",
  "key24": "DSWGM3vqHcWXqWBr5to51EPhtYozGf1ebyjbRoun9Yp5KUPyxnJMrbeaPS2BBXqxNe3mtzyAjvR1yMnQ2sBG47E",
  "key25": "5zmSuTW348uND6E3Qwf6YHUYHfMYprhCC1Ht7stZj4q1KGQvgQkyhhiWopXzBJAVtqzJJ9jPVozPXJxp2KVPggTS",
  "key26": "jHz2ZB4t71vinwWVZNjN6j2WdR9A8vhEArHMv81pM4eXjcWpBXTVFStf1jwhDj8FWmGDh5Cyh7F8LZAyB7LHcpW",
  "key27": "3VSCoPqa6147VKqxba7PRVxxvHp7KA4hkeaa6PYJRW2fJ9HTefhaM2H1CYiZP7GULuVYF9NcyWqHyiq5dzTGf3vQ",
  "key28": "4gDqjzojCKdSJKswcENh7MXz1HgdcPkQYifLfaQyG1qjAb8rGo7uKDyg7z4CDeAuWzc9f7vbbDTgWmYRJArpxfBM",
  "key29": "4veYCka7GZgi2d3HVBmQtAPNG4UBvLTD9Vvip9eaunzJKt8YYcsfrApt3yLUgfRoayhMr5pt2ANSfaUAYmb3oE7m",
  "key30": "3GGbCskztNTgMdeV2V8duywjLjCY5rfx6AtJduYhnezUpJpxwi3HAUTmESD5G4cNL5uXgmHTZSqJjbTuzpAvSQgE",
  "key31": "4xHfRZpzi6n1jaBeD7qU7fFzvJMKrHfHdZWxtQgtgmfTfTjwYZfK9H33LMPu17SAfsPbRnqKqWVej5UXP5HzJPpP",
  "key32": "3eSTaMnXFuXACtX21bxcZsGtPvYrsVHX2KHfPret27AdSHiRRUJyTmFvPmihktLE6mbeAo8qcGt9w4UAtKzWSoHF",
  "key33": "Lj7Rf3249Fa8UFF8UgtH7xrNkax1fgevCB3Q8hRYXkKPB3FfTaG7uterGvyYwZKCzSW8HcdVcCVbcCEeejb7sen",
  "key34": "5isvvb5fAn1Ccz8NL7inYDgJxYEXNonQTuGSbMxAXLUBpKeK7EXb1gcHARnv5b9Z3SfJKgveBNTZy8DcaCjpkvHz",
  "key35": "4xu5YA8KMivwhp3rGEhqKEVa3uFjwjPeLP5pniUsja7jPDgNSDL8DcSNs8Gjv1RsM8tCGzs5DnDT54iJYYct7aYF",
  "key36": "WMb9Z8QTEovkCgATQZunBaH5RDaqsdA763rKX7x75S43C5nhWErwW3RmGRayPmJg6CJTcNQ8XJ3jFsh1KwgmXrn",
  "key37": "fyP5XSejHg6zEGLELJLCmRWPHqaNVDEPLXrdvTv8rasGqJrMtd7iQXdS8BAboG3zUwt8FTMvCUyGodovCsrwzX1",
  "key38": "4DQPteJsbWSDSUkfuF1yBgyNHYSKcu6syKZpTYM818bLi1znPet39BX6t7DoR9wWR7eqnUA1sqLd6D2X1RVRXo61",
  "key39": "3dArsWun7fBUZjksKTQ1CUvhcWfc4FCDLd8Lyz2iv9aLS38hMwc6EioCDcH8nq1KMe4T1sTXQ4GiqtPWhQ5BkAYM",
  "key40": "BY6uRRERXdkM6xhJd2FrtdHN7dQz1VQ9dF65BRKtBjy45iJ8CQidBGqwPL6UCaXhXfKbvtqaYMQK6PBJNCemgJo",
  "key41": "5VYnxAaZbczKZDu3GgfJZmfem3cFLgGbmhKxJUaHSAhjgX3u46ML3AKg3h32esuaveW6ivT4tN1Thhkii6ZK9LxP",
  "key42": "3KnUhdqdv7DyyruprwdUC67kFE5cAQZJGkk49429186Z4UPdKnGu6PuvR2oNC7AZwZz2TWH6qtkigfXFGmFCu5mF",
  "key43": "4FHt6FxiX2MzjNTXDAT2FJReTKCmtmYMQDfwYRzmPcMHoGuUDsjEsRgCg7hoAmiPNX4Wfe1VaiJZt61mD2Foaboo",
  "key44": "Aer7eUnqeQdcKpnUFoc3RVMCr8sz1ugZLGmSzPybzvLrWiK1ZzzXaCaYwcoF3T9z7BAijHd63fhEzrECK8efgeo",
  "key45": "5v1pnhrdZbGVBp7KnEG4ejHQUmT4reQdqVpf4aFbYPAc6pEgujWv399vNCMUTcDSNsi4fWxCJCGFJsmfD3w1DLNf",
  "key46": "48Hj52kprdSYny6578AAY3Hwj31xSMdbPjNAmpdUYdkWLJgFXVp13yVjG2yfHAt1JLmMTAbbHd2wr3XMzbvTv82m",
  "key47": "yTzX2YKvoMbtpfgoUPuv9yWHFnrVUqieesif3KRKD6GxCHHnkvoXXRTJmBYKacjeTQjC14L4kVMBF5gPVeyc1u7",
  "key48": "62S8m7tdgVQRZn7Ygzq4khY6NiD82gr6cRi5A4cPdaqRDAtJZc8D7CX7N5uKE55tXnCpkcxa7P1EDCnzu8PuWHST"
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
