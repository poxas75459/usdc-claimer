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
    "3RsLffMZfQbGJpX8BZPfn6oKXWVQgaGHTszk9tfabYRd3QzU3YDMoSzXmYjV7oELoD1TJRSrG5Zs66cEFh9sswCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LUC7qxoao2oKnAFbitHJKxWwicr8LyALPjQNfgfj6W4h2m9vqfsYSHstPPxU4kic2ZDizRc2K8LjEDryx5BrPMd",
  "key1": "26dwaKDGMyN2zYZ7vNPdmwGiUXr96PQ2QSCDHrPSRAvQdESo7SzonsS86iAiL37ncqK6RVhcMq34S9iDLKdViU1V",
  "key2": "61q3VorSkfGyi3WnP8PxqTwWf4wuEDrxarv4nrmnwV9mmqQDhiUoRvqtxexzUWSqjQFdUPvTQeDeQZ8azqmRcF2F",
  "key3": "2f9C4cbBPjSHN3iX2Wo4UNeP1PEzx5pMJf85pFkstjKbEsbgwe9mTt6HBdo1LK397HtY9GjF6GbcLjxSYfbj3YEX",
  "key4": "3xgrQxwUN2AyGJhJmYbgq9M7oSDcWJBrARqAJN7UcU7CvA6U9sgMSe889vJ9k9oFUpqhiuzNWyQhNvTo1Fhepztx",
  "key5": "51eGLqqUrLt5qZi5uok7uNuwpxUm1QSJm8fFWLF3y4Nz4kcmETKdm2kR1VtfY8bvymvJaJ9uAYDhymyuzZDgueCa",
  "key6": "5sW45FDtHEDFj21rTCU1mQYVpXgGRVLrs8gq1GfVpyWrK57mAxnms9x2nb2ALpDnpjTKuGRVdB5Hre9SmWg8Ef1B",
  "key7": "4UJptFjyB51kSnx9Wt59wiarMEMFaTwQYxm7B4pyBSTmNvmZVNcVK65w9wgP9G9DEgHHSmMvWh6L5JSWKKy5xK5D",
  "key8": "3yxBD4mJMSz7vZLkNWqBsKgogM5uP7tLc6q4aQDssT2SsP4CHSJqNqoo9o9FvNduKWWwuRJoxjDhhAFGRzDnwwwa",
  "key9": "25EunVCjCRmVL54PP6DDqE5dqaXJJUNiSNRmTwWir4kVA3s8ukZvKufka2XaCtMYNibKRjdtAd96PXTxJpNL2BW5",
  "key10": "VgXvTFj6HyEbtszGubFGJYZtEwYk1JVa6BkB1Tu48qAqu57rrsNvKd2aZqe22XbURUES9kCaC27jWEPdSgSt92D",
  "key11": "3dosusf3qZF8dJD443w2YNWurB4o81y938PS7ehpSvxEWRbq4YhZfvQc5cRcaP7e6fHEfxcs1xvDvWh7Z3pPW9X8",
  "key12": "3nYL3uxwepyqFCjAicfLn48mn3bgjW8mdpBKYH1M4VfE9STQAgGd68Xi2eba97AbUuNEHqX6XBnxYrb36qLhVxDT",
  "key13": "49LrCoTyVqYQUG3VSpL3y1BnXngh2yFhbAFPuaxGDEbBumvDVRgXGHZAMvJfHuumZ7iNE1FdmAtT29D8E3ip4qNS",
  "key14": "Ytw65iQN377nd2qKBWu2LxNk8373izA48NdJEBoASQbavphELAsF8wsjQW3p8UVXzfYhPwcekZeVfYN8omzzMd7",
  "key15": "3uHWKDhqFrCjb792udNjRNHDnyY9hzy3ijasXLvzNy9R7xCBszi45fpAzRGyYXqGFe7YH4EaXVriGqXhkSNT67zN",
  "key16": "4Je1sJcALVxu2ZBEi7AnQZjunUtU8LUbTCkHRoHumfjxxq11axHYB9b9UsHrWEtDYErEwgKKW4sd59amUEsFwQb6",
  "key17": "4Uf4HQjGQfQpzVsYUrDXRygSpiccoc7oGaJYLwekrEj1aQtFUBstxfD9MGkDfuEh2kL79khpnR6otGxdSJuBUDXJ",
  "key18": "28BDBxUe2GqWtt9Hd4EXn7bEgkUnANmGPjS9BZ5rJvV5oqJgRJNWMRpg9spyFUsiqoGfeohAc8UQGXvu6YA3cArG",
  "key19": "3czn2ZMS31Lk7LdTWUByPxWHf6n6xP2pVecdZgvpDexpprhcZwsEUWi2xbXpoHU74Ja6DyHaCaXRsiaGhbfvoktF",
  "key20": "3fbuBgPcK9PJwxX5SbkGxmafveM8LQ1yNaYb9VjaGZ4z8fzCNKY47ZNsWbNAB2VV3Bb2eVg2H8kyVyaqdRD1mKoj",
  "key21": "3scfMTRnmVM6z1DYbTCDWkU4Dhmo9wPJkfPw9ZmFBcZ6XWmLPgddUuHmxzpeigsPH3K5yxtBr5ezDJ6Hm4k4A7hX",
  "key22": "4HXFLUFdi8tizAiXQmWsBU2BnF58qYXMkePUvdpaJQtLSqLqGeB2KRGpJCcFf3Nz59jWDe4CseHrVbAS8brcVxfJ",
  "key23": "zqv8zQLnmbZu24rWactcNFkHFZXHhY8TerY627mk1wxmZqrt2bXUqH36yCc4KpHUAQ1RExBAJnXLSAn8RZfLQCQ",
  "key24": "5YqLqDiWXMuKHnaepnf6MYzPwZYnNcBMhYEDaT4SWCZ7CrAJ1eDuDcGWeGbJZ4vyY1cNnhrfuio1L34YSaxEJaoR",
  "key25": "3XbjzeH3ofZbUYW82zzkQpZj9FLRJ6fceNk44TY61zwAgEo8ko5DjQe5MJj7tkvnfpebnh3rzUwSt2zHJ6JRbYXs",
  "key26": "3KFxkEfpiNNySxR9kyXLChjeo4o78cpSzYEg6FHMYC9Y7r5wVT4UPj712PRxEok3Xst39SrsxxpW2kWuv9maEoD6",
  "key27": "37TzPC4R1gKSzF7TXyj8SabrRqSZWtv191tAvYxAv1ESzwGW3gVsj9sDHzzoiATN31Wf6saukmqhbxugXqivrPtP",
  "key28": "2uzoBK6AH7A2woUHmLEaqqeCHf4CnPYAS4C92MrVWH8RiD9mYFgFTEyKfdoXdHdTHNp4Gx9SnoX553o5vgKim1fg",
  "key29": "356TqpiRYYYy5d9Qc4vRAmyt3TmiGr5MZvBzvbvkfQtJNUuSU4E2GkfWF2TBNCygyhaEWdEBwJkisvpHrbsaRkNk",
  "key30": "61r7XpZ3E6rgDBx6yLH4qnheoVedJrqUFerRf8X2Uer24zvZouAXsqfZ7nZEcc4rSRY1DQqsKhU1iDL63s4Xmg2b",
  "key31": "3Av2BgJKYqudrNdGNAn1zLbpDmisGQCiabjrry1SNYLR4mEuYUFZKkKMkREXnU9AfDhreRW2qdPurafFZj7yH4Ze",
  "key32": "5rFvWaKN4feBofgqaQUfTKgfpb7kxJw2ybRH8bsT3Xy3A8akGg4nM2s7B5emRKZHSGy3DCDiCFXK6sKA6DCiTbSG",
  "key33": "2VEREpFAmqUeJSxXrMzomh72iGCTWyYxZfKzhktgnCFaM8SBGfRdU2mQiLjnQbiA4nTEvjiWesxyE8BG86igQZEj",
  "key34": "33KojNg3mVRNzhkkZYaie9VmkvV2ivowMpmgQAJFkuexFp3ZAt8SKiv6vzpZpss8aZAk9zGaHTa5CTcjK584Sb2x",
  "key35": "f684i9LyAXujdBwGyWcYvDxZgQjQsoeyxPCaMKYuhXVfyjnxZeeDRULxQsJ8vh4P1BfHyCrX3p3KBSaaVVdjWfK",
  "key36": "2BDMndLhzyASJaoHRptvC4djeYtJKr1QjhrRR7b9xjxQQri1cNX57DSatazwLwF97mWPxJnrJRu1gjT2qMKz7qVz",
  "key37": "665hrEGGbutJfbezGDLVDLdm1vtCbyeavFaptKYVfyHCXbG2ibmBoB4Myj5EdKY2k6XrghoJ7ALSBz7nmmZo8uSf",
  "key38": "5Jvk9ToZwxMvp6Jx5uisrfNrrivM7amCYbXmS33N9YRgyB2tCCQkGuyit1gUHe8z5Z6KWFcL1ERCTbvcXvXhBY7F",
  "key39": "LLfHoyBGTGipSCsnkSLBTuYFYNdHSXVGkYKiF9EbXreaHNc7LRqpxWMDFqWe1RgBYANTix5qUfVixAEokYnWf3B",
  "key40": "54NdDZuygT2GXKmskYAtRFvA81uHX1R3CrK79TUpdBdvcxTWWSCP4a4Wrnhz5PFg4akxAMXNkr5gAE46QgCQoJQi",
  "key41": "3j2kBeCKHjd75siNuMJx5VYdHnLJSgycSwNQ1CpWo8dKnoTweURFz55xLQxVYBurRMCWebV5BxxaBQkkN4x6XkYk",
  "key42": "3HJB9VdeoXHixeZJc2hBN5cd9FuJVmSWbzxvPu6mVFegNPmXN9Ae9BFLe9Y3zhK6wivHoWKWggwuSforvKjXQKPG",
  "key43": "4kyqiURr9d2sTaNGxxqk1PCRvQpa3d5udfikSdeMRtnHbSft72faeXjBJpmGQZzcfXFeiV1MtKBv6ghtBY1d9RKy",
  "key44": "2gkKgLEe65AnK54wUdb1ovHmU6MrYoGKcmUq6r7rzcYevBLpj8GxxmZFmGBYRo5pLBizfV1juoqoSQtiDGwyJiDp"
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
