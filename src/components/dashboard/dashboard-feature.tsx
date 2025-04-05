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
    "3PekHV91EBSmJKSNjXCGD9N4jhvfZKx9frh46ZM1H3q7NhYyQ18YMjpYGAAVcpjnDEi952s9JH3mxhbW6x2kYeVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RPkxHGidgdFXDZrtwuMJQEviKUU7hHvXxTehWRQruueDx9SNKq3y3c2h5WRhGhDdUTdiDGQ5qUnNG5RJSgBF31H",
  "key1": "3oY8g798UVRNX24NrpPFNWNRCqZAmT6CgBnN4ytQgZG4oVEwsXkS1dqj789PbHJKV1CmHvCqv94bGdQsLZvtrzP3",
  "key2": "2gEGWdGA6LcArgmDvREV3HGsuCDn3hbtBX9g1nS1R6g1G6wxbeueieryuNBA9QsTkm1WMT1dn72xSKAE1Djp5kVi",
  "key3": "5Sm5UNARkXhV8G6QWrTiGe3XhsZNLYZjKbCBoMo2uSDrc8ih6QXNCWvFk7AKDmJeRhjaRaGdkwjrK3dDjAQnVcwd",
  "key4": "4JnQ3hZyHeZUqUos44hfmK2PSJkn4wXfDNPHjuNnrUnrd9uguXbEu5iJkX9BroxdnKkk2aHzYSGYs2M3k1PXxbn1",
  "key5": "F69XdY5wg3hBp8SR1JzzRBU5ob8AnysKXr4S5ehFMNh8PQvLc7YLtBG1nQEJF1v4k7tgw5JFnvL7NhhcH29GouF",
  "key6": "8tQaFDJxbDom8spLkKutCSqwbra4MsbWjgDAtw78V1e4zDCueK2bcJyw8qYRr1cBffd1RnRo6h4dwbZoyjfeVyc",
  "key7": "4Ms4GhnJwKvcG3cWJdEi3m79BhooE5PX4MEsXWKThkcAhicVzZN58xK1WPMsVCY4NtoV8FhjQFMjR23sVvu4mXMc",
  "key8": "37VpjNxqe8CBkaaWZhGdz7H7pGaN1NGXF7mg2NU9KMQkNEQyG8ET7VnV8hBFgzhJ5rog7zx81mMshSa8fTyyBKwD",
  "key9": "3S4yviy8Yn2xSTteJEAFnKHPeS3js41T6CjZag18hoYWf2bpLnqTzfPCqesAPBYWJbFdbwceEjqmDJBKN52thpwi",
  "key10": "3wUwj4m44JXhmg36wviL5SeR6QgsKEHsQrY6RmkY27FtFpLn1vntRs2pg7SRGhfSBboF1YgRc7b5uj47vWy4Uz9R",
  "key11": "3RYHSwvXQTAHfMj1NuWoAcdEnEi1LnFuAmsgqLYjLxVBbAGysLpWRYi5zThpX9tWz1QRsVY6z23y4RA35FMvrXAw",
  "key12": "2xDg3aGoghzkMbk6RgQyzgRtitJ92q2nVqiZ5ismrveFxSDnSEsHPrfvnjiJeyBqoLB9Q7gh1VN9v8BhvrVmmYP7",
  "key13": "46igk11YLWM6hZWDNVGDByqLQ57u3jrQVmt2MemRfTVu2N2uYA8bKJKBKGnLchEKuDKVDbhYHtK2XUES649dfPbc",
  "key14": "5RpJw4j5EMezL2MJiy8LCzcm2D4rXeFvuJskbJgUBNMMUnbPXx2ZTW9q7Q3MbrhA8rbagP1EyEozso7YNmjC6irz",
  "key15": "4yNePgy9iwrKMNiJiovcoRkajiy5Zgxyr9ArniLgSc8esf4Bq9s3s6h7PMqMrXq8Ub26b1t5EbZgY7fDWbGS2Z7x",
  "key16": "4QRQXrMvccbHm7rQzyn2w17tCCKnmLeuFyFZ3ZgCTCgde9LkU5LcXt5wZwTQJjdwv4A6GGs7HccAMAgviCdUet9Z",
  "key17": "3rvacjCMqFGvaD2FBPkk3gjiASE4dh7FnYjRZ6hcyRBNXKJmnAcbkHk5EBBeGosDtn3NtZK58KwpriGvuhUeB7hm",
  "key18": "eDLq3xqtkgGsKDndzeBQkC97UtpT29KsQzQuuFEggRbQpc5jbePoRMQwv75FJGQiwQbbszEqmmZQR2Mr7U9zoW8",
  "key19": "3gw7aHGgGktFpaXFDVCgfC3QMyPyLxidZPTbJ2FoazExiXQ8PoYdEqBwbGspmajVFgKG7D4SxNJCxef4ND2Sm3Cw",
  "key20": "321LsbwJyW4i5YLwv9ymXXWMtaKrtQ3JoeqCjbcShvVMXSu8zA4DZBKvuamF8BRpFDEytmqAXGZbjf3UFo4NoM12",
  "key21": "2nT9oaN7BnaD6RDxt5zYE9Gjvuz7N86bD1viAMAwadQdsdsF5yr5uR18geWAYEdNfnP16eDhUDnoLH57YKidgtLn",
  "key22": "5vqC57PvRw8FfYHxsYzseLrJm88R87Sqiwr99JQJBDmsbr15VZ8JjYnPfQ7sZg8SpP9DLsdotg49VobiN5PUeWq7",
  "key23": "2AijRuDDF98cWLB34HDN8LmhLFoCsFPTdnVFr6weQMzfofuvsq2xnj3mtF5eUcX5rvW8gENdLUoABkTu5mNuyCgw",
  "key24": "Sf7VoUpj6kapjfJdVYsNKLxMbSCk44qJeZF6ivMcTqF8TrtbSAyboqx9TnLyFw4N22upG7JU6bUiNyPa5gizEbN",
  "key25": "62zormBwRPrfkytkDSEAe6SG8hGw3pCDCnHnibowSPAG3nWy8YCvMXQoFRgwstC1q2F5mjEKHCmVRgcj1b9qJKAj",
  "key26": "3s4hUiqFosyCLfp7zwHYnyd322Zj9f6sFULdvsN9jSKnkzRoAythMjdfP3JHDP8HdPQ3u6F4uKrNFG38GHuMqnn",
  "key27": "2CbagPDHs5KsJkpVoRtfPnQ7d2f7UXsx7PTuitwWcyq6K18hD6caqEdE1kTUfhb8nMdL6cUiNNv9NkzEkXDtSksy",
  "key28": "66KTN7ENYQtNRExcySu3bQcTFfTgbPSXa14Pzem6oGL7qRutykDX7uYJygc6Xxmjeojx2Z45Af5SdPLBDYQMvWdp",
  "key29": "2CfE665dtHrReQbYTLosV1HSaEU7KaidtGNVbvDiMcPu4n9e2KWuUNLAkc4r4i9W4fApyh1jxcawXaudi5WjoZdm",
  "key30": "2BMmpNc3xuAjUKNK7VCh4L7dRpPmuFr2LdRmSqXvD1bESTVhTQxzmJeQ4hYeBazqzns1zfkawBdMYTeSZ9VotGmi",
  "key31": "3CpzwQvMZFSG8TbfNLLVR2Wub3DTSMKo9BkgHUwHzGCCupHZUogdA46vGqTZxJtNXAf4mnBj9EVEFkatLXYkCYmS",
  "key32": "2WJuS9P7dDhVXLcT64jCSVUSWyJtiMQJzN2yMSXkhhMYjwTHtABCRTEhSfvmfb9nyKpyE87kYeT3fjdMw1Te1t7h",
  "key33": "2w8XRQEbdnvd5vujwLzEUBGknMJxAUG8U13wjTeB8e13sAHEsNrwr55hNohKcGJDWg2hvTNuKLXrsk32fCY3DJAQ",
  "key34": "XTjuWKAUmpwrLq2kgXhAE1Lgmy92evmgKQQFDbV59sn9qqse3914PaVPuE3tc9hetPiADP1gpEvHPdmNR4coKDc",
  "key35": "2jWCdypxYiZ3rSZn9zgdPxkj5UrR1V5y2Ugsj4Z5aeTXFUBM3jCkxxMWLzPd49Lxtu4KYxqLu4mQn3B3SkWrLgE8",
  "key36": "4hKBLxiDez44XjEsjd4pbQDNmstK8SEsqZznNkZrVZMkcUxLtzdQj47bP1VETmEHnzgkLqs7pXid8LgedTsX24jq"
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
