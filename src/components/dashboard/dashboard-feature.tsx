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
    "eHdgLNQxFLRobJr3eVhUuimaGL6qhgzuHiRARFxpjxGSChFF4F71ovcmENDKeJrbh2gHt8VFPbNCjggBNpaUjup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29XDL4uZDsSsr7FxZsDQn61yawkJBo9kAfBM1hJBty6WCQzWNYafoCuwmFPqWYuXxPev4oAqqDcvEBkn8W75Na2A",
  "key1": "5pmgbg2x57e7WddQ1VdpMuP3kt3NTEHAgchQGoaWD36y3vKJwLUAZ1sEkw1kSoxynW4qhYbaP6nTRF4JyyxHLXSf",
  "key2": "4UQJwS8e2No1rBVHhaaKgtRXhSQZFf9JjxgTeP1gCXQ4F6qYPRE3M5YTKRDeTKcu9PTjn3vMd7NCCTA6kf5pWqTW",
  "key3": "3w7R7dQ2J84tBZ1mwWCvHP3sVHZBNgrRArrA3EMnwRoskRgyp1kNEBfoAuUo6Lz8aEQ7UgBmwwzBYvYP3odmvjSj",
  "key4": "2ZjTUrYj3oHZMJgNhehrm94Svi29Vyb4dwN71kLNNkHnYXcuUuGWgwzRJVsbpoV89aQKrYAa9wA4fhwKgPnR5uFN",
  "key5": "49HDssndHSZCMStApK9SMSinLvXC7CDhCG5KEB1WxBuys6jPkgUdhqfRHJbZU8rVpLjYqizS4Q8AC7BMKVwj6YZB",
  "key6": "4kzqZiG4GMbjCmsbcVXvvh7KzQx9DVFCLUQVnTFoUUEvUASez5QDVNxxLw8oP7tMYipGKbEDmFP87hPhPShdVTki",
  "key7": "38KpM6xTgueMgCQWnPH2M7FF9pg2KmQiphoqUzZszKwKJukBMKoymY9YWzb5mTxGmDJLLdCeP9ZdiuCnSDWDWjBb",
  "key8": "54tdnZebFPXyjFxEFbWPgjsqt2jBcWhZsz2caUcwxjiYzdpZYnNR2H9Nbc22Q2Wftftdz6JKTmq53NbDNwWfUBWf",
  "key9": "3XVJJREFoENu3AqNSZKkMY6dxjgQWevk3LDNBQZguG1J4o2z44tiFJbLB4k3QKt7YbPs8jfEwCspyAEtqWHj5iE8",
  "key10": "6631agNzpydXMQCtMDwTdKChfcKovtFFjg4Q4LXVoDe96uFeyW6jdFhdX1umJHmwpwweg7Et6jczhHcasCZ78KvS",
  "key11": "5qpQtRwLWJVR9GUA1a7DSD4AC5XZE9LLLU65ZVUdx7ChXm1MdpAwDVSGg9gAXZ6ixU7dUCFmPoBDSXviTk5kXuac",
  "key12": "3LpKYsB4rxNPWW795nBsihKWbEbN7DKqoeiZxfsyzDgfGjWUxPcTj2TwXm53gg9bB39Y3FQHvTmDGtShQ1g1xBph",
  "key13": "4KSLMiDB9FrPn3jSP33GAEpxVd4Nq9ySfLcA4vY3tnzGcGMaQGZoQwgNycqNv3yVPGt38LT15gbjWQmRPW5aCDjY",
  "key14": "yDBMC8NR9qiWB2ru5t5TBSSziEr7CFcuZpPrZaeAXEfWZa9D9AFegre7tTxHmuNUKNDJKBuJF752FJsM25ipbwE",
  "key15": "66sgMCXoBJYVtRXKNoRoBM5cimWrSgYSGXMYtVFDDTyKxVzp8iQ3zrwRn8aCmXP3v9jSCp3ubyGhsxmLdU9QfJFw",
  "key16": "3yUrLhPyNwvWyuDnABzZjcKuDnyReYTRynMQnJwB47fvpe2kNg5QDpaH3MzFE9Q5kKqsHVPzH9jVca3sjfXju5fT",
  "key17": "4cLEqQ96FUPfF2Gt2Kd6Jq1sM5Dv9fXGjQYL4fQgGVfJeRD27pCbx1bsEa1wGoRSYwtNdZ4T9wWGfBtTzJVyVy1d",
  "key18": "3F4J7bgDZxsccNCEn5S6MXxjiQzPsMWPev9QWJoQ7trDFkWKRw3jxm9RzPjPsCqf7TaSR5GsNaWQX6YGiivbBa9H",
  "key19": "2rSgS354DHRsxHAWeDoYgSfRXjH7PXBaXUqWoAuYCaBeYuvJgMrWcZCGWr82QeYR3oP5GUVuHWDhsqUHR65LTZWp",
  "key20": "2axmQa5ACB1i797okrmxos6XtH5z9DgNdNEv4m8GLr1XmnTEQPpYzqSMuHgS7C8HiSiDZFBoPiYvXC5iSEp5LwZf",
  "key21": "3Aw8y22DqY53oXjYRdmw3fkqFxhZ6PsddY3JqeBiBXxa7Z3okHdU2AfxDoRMDgiv1QgZU7yFHQy5d8dd1ezP37VU",
  "key22": "2n7gr9EzCRsSe9weYfca6jHDJ3i1EXz8JtNyDeRzX2Ms8iyrDGfgH4pPGAXUcg6q6TMbPVspKosD1YpqNHs1AgCn",
  "key23": "bUDLVwXjh53KKPYyWqVzjx5TPJK8LA4r6tdj9Ks9JwkqQMwnkuj7NwMP6SvFJheSMuDtWb7esTghc3ySpSFxJYx",
  "key24": "5H8mXZMsALXqy6VChKJkDMLf9RojdPSHCs9xu1JTGGtQ3ZvMqWh2z78XovmUXCtPNLva5MxvZEbeWLf4njsx8drJ",
  "key25": "21E9ZBym4KgVKinSBPhKSr4EudJdziQ2FpPkHyE1jtR1Sugr3JyqziEiFwukFamV2LDCGjE1QLwPYA3Eu32ZukL2",
  "key26": "4uR1Ta2PJdng5h7cibiALBxPiNFQvFmTN3hjCRDkguU1u7PmgAzCMRXuEubcjudznSrJeevHeGDBHoQtHyNq9PLD",
  "key27": "4di6T9AzTFZFRjDNqXpvRYZEeUap9jxopiLBiNHG4kBkATYsGDf7teCXL2anyfR5Hzx3wDZ2ntVD7MiT7SBCPAtY",
  "key28": "233JaSHdyP1nNYKrAEjNjiR57V4wwtd6RWSLuBGsrSyoHeufA6VQE9YWC1WrbNSJetr9MGdZ4SKogFmcdCXG5DKJ",
  "key29": "37rYwc2pVhAUHuVQRkqcBJ6F8DnbSwFhcSRH8RfXMRk8AxjA2g4ngq7DwqpF87xPxVe2t7zMAF6PEJL5xhn1GkEZ",
  "key30": "37ueFUr1qhtGiR8T3LsFup6SR7eUMGKiXkkkzpKYC94Tox8EKHdaXxcZ3uCKYdDHts7DzFKbdqbmLpaFRMrvbvnu",
  "key31": "3rqdRSZ2n4nJyrHWyCUZHkbLdDiHFccvpsupvEVfzH7vurTWgsgen6zCcUoVpkDkfeim9Tuu1pRqHgWzEwD1iPTM",
  "key32": "PxsZ1U8DQN4ShMZzPPDza3dgWrsjU6u4d8QeZ9wJStrYYbuPZnZbpqo81761MjD7v6cuAzbamCY9pUXStU5Ga17",
  "key33": "MLqoXceQGoi833uDK2guu3dr21KxWEqjoZ6CxETdg9oxeUQdu6DpgnPy133FgCYmL6zQRxDX6Ckuwq57CT5BmtR",
  "key34": "4xfEUS7Hjpi9PTbQcYcLMFUeVw6cUwr3ZA9dXbEv9Bedz3sSZbRechYc6vc68jctaGEseWsRLMLUomdLJWJ2incg",
  "key35": "46MxYS7R5sySYB6dfuViVL1Q9E7wBVywn6WjNgyEPhKtNr38Qf7o8AFxRsDd16msYYFGGths7naLWPfSvfrWY3Zf",
  "key36": "xPV4UoqC7fnKu6XfPA8LhzCXCtZNnMt53Viw7aW9PRYoxgzLCB3cQmddU67cKQaVP2JSiPtVUZNrx4RNhbFLVwt",
  "key37": "kBADnvwJvR8RXWouh1tu99Rttqzckszphv8YchL6KgRwwtsJNApaqDv2nDnsHA3SEp7ph5nDnazbWsLfHMSWuxG",
  "key38": "5h4E4xTYKHNUE6XwQVFNtGmZeqb7r7dhcGqiRecs9RG9s81HLMEV7z8HFgTMY2q5rcWaMvFC9kUrVjWryNyY4tbr",
  "key39": "5vRmRrEfSKooqfarVm1ZVnJC5zu3p8ZudRkHgXDsBhxZeWLgy451MskQuv1PaTJuBYs2h3DPvPsK4VQgnyzafKwa",
  "key40": "2bQCmEbc82miZvFVrfmwM7eiPHS3tqXaS9m9Pm55BX6iT5qtsqUE3b7aHHKVzrRxJ3bGUY1oUUQfNuk4aqPsc74M"
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
