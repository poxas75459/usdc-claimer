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
    "53bqbbBKTSC5iR4VzUu6RfD2Uk9Q1dwzjNW6WLuYbD3KtXzYuTkWDxxrjBuwFHweknGa4LWjUkawRDvtRZbvCu7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qUhqzmRjE86hcLMatvJtp8kDsjBQGQKeinnabKzWWqb52W95hTxzvQW14qCNpGiL2P4tpSgxemyJueREvqvUnJN",
  "key1": "3cgcGkTaTDEbxVwBkxGPwxdiun5qFNt7ZNRuBLr94m8YCErj6fXK4g2uPP3dDD7CVUES9fN5kxqmAifg4RBSz4pP",
  "key2": "4SEY2z7fCVD6mZDnAWLTihyfiB4D2f8hKJFMqN8A62bzEsWz6MuLWj2ERBrTFDqmmoTWYywJ97k7QTn64B5Mkdb",
  "key3": "3V8dtYZsvjveftXiDhqMQxL9UqcunXx4aK6vqR41mv9VgDGGgoDeAzN6QfRYQJtBJCUxTc4sMrsdECWxYMuzQrLJ",
  "key4": "36FB4JTxMkYwrCoAdEGGkNQdAnuxDezu1Jb6DjCNRkBJjwc3FFxnAYXvAGc8aEdpP5id9TEzSNKEC5gWqES9LQF7",
  "key5": "42HDEQfiouPHgStHxRrmdd78KGhT1WcxmynSrC7VdeuNmncCFBB2nngU6kZ1V1HrDE2MtSCiZcwfSiDiu3HFxH2n",
  "key6": "5LNgdMDR9kd3K5DGPdvBxCEWfTJGK2bGXJ4iEesr84fhwwVfUE35njMbzPh3uacHSW3Gg1cgXgwaV3dgRnaXfFbt",
  "key7": "5V6No2VKEfHjnG4QUHkpMwpFveXqZmWvk9AKdEPF2WWGTs83ujszoYXQeJg9ZFGxDKWwGUAHWNdnpq61NdMYKRQR",
  "key8": "4VHd5EGbMtTYZReEbooKR4DzuQ8v1viCxqYnE3swo4TXJu4FCsrZZuxmXDCfbbq3ynrkxAPTZqBV1Rqce8tPz3k9",
  "key9": "64XknPyotAzupZNcYnyCEa3YD2ZQegk1u7vCWC2VV1aT8h6Pk4XKbBVPcEjxREfkVxj7Xq86BWJiDp6Hy2epLQEB",
  "key10": "4bA2E38CGmbhWNrAEoe29riYkUUhYdorxp9VnAhiVuz3L5rApfoDyWDUdeF64QBceWZrC2WkbJ6nz3zyvYUFpWBu",
  "key11": "2YjnuWdC5R1Hkz2wuBiuZJK2raoGvyVSTB7eBFsbWwUEe7NSoirQf2budHhqhN8zwGxBHmk7BawWqtqMftcFQL5c",
  "key12": "5hzvHidWJtwNusCJ1KNywaAQ6NyHvGz2MTv8G8WCe3MpDGSrjPprH8PRXcvpzBTMDe2wrCbZVYo7F9Mg1LUJ9NWj",
  "key13": "2EQ2q7YsUkwex8kA8NfSxJ6rygab4BH6zyJwp8WNo9JBSwVPFjMUzLyc98nhx1rJE4Fky13MprLV4zbC8EQ9Ls16",
  "key14": "aMxgYaisSRGf6udEJm4KeyGcTcz4QETkZNzP9JjCNaZtikUpkhUdzeEdPooasA4y7PtCorb3KXvFDrn3V47ZpJo",
  "key15": "3L8eMqiPYj8kZBL2u3qhvf6qpTb9EFScXbVQWuoLZAt9gtKPcjL131SJrasd89BKDxRquZdNpxyrMWPSk1ThMdMe",
  "key16": "5d3acjTXfHo4Hc1D4vL3PjPPStHRG5dfsDM27ZiY85qhdzF7JQNuBG8jTnQvFNAdzshA29SgZMiP87r3q6XJfn2p",
  "key17": "5DoCuVqenshogWSSgGUyJ3h8a9fUpJ2WdCtT1fu4KQY3PCCCGW1fZB3ZuAjdJzyR1TfVFuG8aXfsg5S9x5nxwNnD",
  "key18": "5eRcDQyRRyKgbmBbGfcqVej7rGkk2vsNuVsrrVEGWrJQPzQW8jqEiTicvbRPrmZmRAhFXKQcYcQJJHzWjZetajUt",
  "key19": "4uD2MLDeMLtxH5qbMPuvvMBLkaS11LqdV2fMoZ64vNVP1Ew36sXZVhAEaxUSg25rNvLTfGVpk5ERMhecrhDeVL15",
  "key20": "3tNSLhasf8dCpW9LUk1v8QQBc19k8EWrUhGjGrvDmyt9eVx2iyGru2HoD38CWhs8xnNdkAhem2uYCj2UKMANVcMB",
  "key21": "3eCdmGfKzvySaJUeromEnf7SyYVkFotA7uxmTuvjLAQ9DCRX87L3PQeziheJJc1wjmxXa562S5rXSwxTLvbCdjGz",
  "key22": "4Lauor9TTZhCretSmfGbo2ZUX8kZetD4DtZkcqMZgKqTueanWcBic2YRdP4EjR961WwJHJ1E7Mw9BDDwrDVkRCyY",
  "key23": "p7tgQUrZVGxMQCm5YEngnbxvNW1MBVykxXDxB7btXazX4GSG9VLexLs3Mdmozd4AZ9xiDk8jPbUNvtziyQzgJFK",
  "key24": "26L4z6tVANFdDByyv9AVX6PNZiNGjRLuBHVEhxdSKR6FrtLB8XCmeDveBunxbqA9CgSTzL1r1w9xQdLxjLvnGuyi",
  "key25": "2D5zysLpFd13qrHToDMWyD8QJSsDCkKZCqpJKWNWfSqwCzvopn9rrSbyGHGSB69kgosZADiUsfKdgMuresbTC6nY",
  "key26": "2BwvwrzzJrTheeBMDzfFU7UwuBnYRb6sxBnfttXGrfJCJTrG4Tf27t9Uq7Lbtzjpg4z75eqkkZH8U7BDLkT9i7DL",
  "key27": "BYAWHg2aA81vvre6s3tXg8B5EcjE1mtyS7fjXLKTu5K4k7MAQPpmGENr5k211yY3k2TJsRnLmzTCef6SZebenrg",
  "key28": "4tR8W2tTxx27aBGgD461XjuGjmhUVhRNY2wxJjyFvsQPPWQ8QTmnyGh5QMnv5Jf3Q8k1zoM3j1BtB6w8UCuUGez2",
  "key29": "5zXHbZudKRa1rAjpVtKHfDaWU1dQtzXfzfnbyiCybhiXFPLSCtBCxWnfeUCVvyYh5CSXuxacZWakdmcBYkPXuiiZ",
  "key30": "5pvz6ez6ir1uhcq1P8M7J2hNpt1k8STG8YDWVZJKrRvnex4aJ3umsoKDxSN4cSBsLMeNNsDekHeHwi3bw53vDg8N",
  "key31": "4ZGWu6UauhpZsoULXxwyxh3BQTCayh9Yp31W24npULhYtSx7qcsGeyf4CvhSxp45de3SmhJJ8Ho6iyFVZnWW16jX",
  "key32": "4SThuK99ABx5H5Q3sWVyQZQ6eQ4g7kMz88joMhLmHfd51EzX3o3yfmwt7cx7VYn1uH88hYRP4UxJn3hSe2CeQEeV",
  "key33": "4umj8RtLMPEeVNGpLKkZ5eW19nhXn9WC4m6YEmesenz4DnqzMYLvqJGcQHtvLxvBqiB4kd4CYZ2Nzf6inw3tQruX",
  "key34": "2hYJ2vvUUo5mR6ererWdffxEthsqHZsC1xkLAdXAzQZYV8LyUTkBcvt12FnK4mr1R7uFz1dMFoGwEcg4i1wNmokM",
  "key35": "vBnQeMohCUs9WUzbrcCByNbf3h3wZVgaaympPUBkW9h1ehThBhA3agFhtyVjrdyh6SDMmULej7YLEnas2CSKQ9r",
  "key36": "2bWQmEWRP3aRpAQEtG86tiamH25suY22z9dUNoJjr6zJV3r4Y85ngw5EuxgntiuQaWTBRgv5Vj3otcX7W7TbytZu",
  "key37": "2avoKEucdBjU4ejSouUqqVaUsEMn3U73HB3ZUsDB6cjx9a8zsw8nWeCx7FuD98tmxv83i8BPX2XeN4XuHRamBY9e",
  "key38": "4V8XuRiUsqEo4wHruYYVxGrvWNaFB92MRdeQch2j3tpfAb8gzcorYq9LW8QwQ1QnWtZnQbc4uJ4cz5Ly4JYvL9Um",
  "key39": "2AnbHFsQYSjtaqjz9LAMfTedBjaKMhwV61iEMp7RAVg2bTnGDFuNHKCe6hB3t3cA9vtztFqDSAoHg8RqxvxfVeT8",
  "key40": "3VSpfcSnG85g6az7NncM9SgBRPuDHqByXbf1u8rYrfNK5f5zA3QdxTUH57yoBCkEjd889Hqm465WJrYuXR8hujw3",
  "key41": "4fr3JCQ1WVRsaNVrozEUGez2U6sdQFRaZPRoyCxSSMwZGbjzM1CHpWr8sfGLgtRFup1YQNdV6ugfKshWSVJ4MYZj",
  "key42": "2VsjTYV952vNegbqYAJtChuhBpfb5PLXVPtABwXiAq2fMyQZWRotVU8SgpCTyUj6tXC6xcqbBP49j9uoj8f3HiLz",
  "key43": "upLibs3CaNNq3kZZa1bAPDRm3wkjHYCetoyHVSeczFsPQhBVJx5EULeyRzVtQQqA9AS5gpzKUSCfisAoqdy7AdD",
  "key44": "9QR2uWWckH2hh8cWRhcta4LZvSEZ3kQFatx2BxxrZAecsVtrmSLzf57GcCzeyKPTHY3abCx2QLe2WsQfoRVeHnz",
  "key45": "3gaNxAcMvvBZmG3K4DXBYhxQkBU31bCLUiTmjE6tzQfwpGavjs11biQmhVudrRGD894BiQkjHV5YbqsZz4aKfFm1"
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
