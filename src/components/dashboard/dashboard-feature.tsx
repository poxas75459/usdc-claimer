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
    "5bzW9WZ1b14YhvXTzrNTwGJFMkUJa9kZ2aTphFPbAbxN38qfm3pGxiGKx4LR2zfgJ5zXgybeoCTuC324buuxHm2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D6QH9exdv4FhARYoog2Q6dpteoPo6vTYQXp5ZS3yeUPQtXbdg8wkmsrjw8L59N5vyiJyqxEryc57HFwF82choou",
  "key1": "3SBJVgFZQzdxMs4XVuEKccWHSx8UqqMLt6FuRuPPUt3crdGgeDQb7dRYPuu2neDWwxvQTFKGpkECY6G7824UfGWU",
  "key2": "vzUT5KjswRjsSxpA61XmaceKyVmpYQDw25SnQG4C67G9WpRWNkcppdnMhwWzvFn16gHSunAG7BjyYn6rSUex4rv",
  "key3": "nuQtdYMEBEFtFHHLETxfb9ATNMunCegZSv8oAqSzkfVHJZ1dCiMWi1MmRSsqaxVeQewhyGxJmAwihyqp8tDGgBT",
  "key4": "3V6EB5jaQ1TeuufXmh8RCNmW4oLiZ4pyWJ2XCmrsLn6FSLxBxETDvyUiivgdiJHuGXXRG6Sy9ZUJzZ5r1JHoYVtv",
  "key5": "3fVuBm3yRK6wEWNkgyot5XnMZZ9thBE9bdfzcKkLsuLQfMfhTX6Uo5LGU3K5GMKQbVJQGDJGYsLoUK3xB4bEAtYq",
  "key6": "4DsUR3hE1tizvTyLJTKo4ZNcHsyMNsjVKdyLiAxC1DQvGRUNGrtk79yY48eSysdDLXepqNsNndgDfB5fgypwpu8W",
  "key7": "5F2NCNe2EyHv4oPPNzBfcBnJQ2u4adXBgTY5YnMRe1dJ3yo9WMZeFYaWJmJzDDc2kCnyJYBKUXtkJLs5KDs3Frk8",
  "key8": "2VXa1auGRp2NYiDTh7a2LV3azswt6NK4aVyugJ3un4bCZk2nMGMHmo5unCASgyuMz5D8MMBfz2j4Bwz9x8eqGMbV",
  "key9": "xmoDGsobTmp6ixahPxPLZxhN81Bc4CbFTVURsWrHsFCDgYbkUuqc3RdHxaNzueQf8mXbCVFMDTfbKJD9jiLgYTn",
  "key10": "3MJZdsVv1H4T6SYHoZabfceo8RXzeTf2fGcj6xhxkHXmjWSR8TKQxW3kFLMjhZyMztY2icjGZntdnrWm67FYupMh",
  "key11": "46R3kzFRfVUgn3DE5VR7YcCU1cFAWbZL2C2A3FNJ4eXYgoJ3ZMgc91cgxHbtvNF8cjuwKb9YUSiZydCEtDAh8Vxs",
  "key12": "33N57qq1MghEq9j4SJkm1ricmgFKKErnSUoc9Gg2tm69xbnTLk3smctoggbPf3KcyBcGaGYsw2C2qzQht7UZGe1G",
  "key13": "2it3foUravTAZsj93b2bzuXdJ9yLzz8T8zzLW7meaL1VhrdqgRWN9RpGNT7KbKNgapRAVTPKSXBNRdct1F4fJova",
  "key14": "5YWPgRbgFeMZzbfugKHGuegbCRd1EokvRdqBpKjZbxdysKdv1Syhz7RjoeYhpBPVudJFYEK2PaPakjsLhhdJyC2F",
  "key15": "5Gix1aWqPT2ZTXs8M55jGbokyJhWKAxPT1ve4nsQDbMR8MejceThv82exTVvhYzK5j9MPwmFr5riLJzXjq1Ye657",
  "key16": "5m2WskrpNoHcFLWBSx7AkH4KjKW4fDj493bEiKaZwbhYKoHsko1SKto4VFu7H8yqGDWRDqnttSk65NpCqj35eRhM",
  "key17": "xeHA54z6eqaYrGUNPpXpWxqgiRGkjbmzcGvWtsfU4RHeGWGey9QW5T3yqbEMsUac4bM9ssvZsM6nWPLPbsTri1D",
  "key18": "7yoe1e6U71zDZffVwkUcijksiS2gLFXEbdHZ5hrNMkuCZkJetkm9FgHgga7uC4qHmRPtEWWSCWuZzoeJDbZzbGN",
  "key19": "31BBUdptPXVRuxzGw8TznsbcuFEusZG5iwNyi3sRaswSGQtFhk9a2ywwyXbQGFVErRcb4UbBiGzqjjKApVWBZoX2",
  "key20": "3LyQ9VPqaVWE7WmmR5Z1HjFmQsy4iqiefYjtE5SK1mYS8CoTztUnvogN7zNy7WNb3hFg1vvm8DTw9DwbFg8bhoww",
  "key21": "dLLkPbC19LFg3sqVyg1CTHjBPPgp22HdtZJP55jnWheZN8uFSNkSE3gNnbHcHvjeZbagBDVurGXUNxVBYDjrncw",
  "key22": "2StbFLTQWTGFNFve7Ggd9zpMWzCwtYzRPeKdDsXxnAvL3qD9M1TUg1gNgVuyU8ZHuXgLw9gM3FSzDNfb1LAVxPj2",
  "key23": "n98HxZx884KY36cd5VyBFtmVe2YXJeKysb3ZvzEnLxhfZLrwfxpzk3isVMcHCTKS8UGKDF8MewN5JFf28M6EsXo",
  "key24": "31VGJ12ueVkvG9xMT8ptrN5LDSkqwT834hBAPQHtREeT1b3cUdb3zdNrD9fdVpiPgGst7TWdA6uQ96STJAZKoDM",
  "key25": "2UJVd2qtDMLwKpMQvVYDqMJacBtU1Eq4sbmpTtrrxdaBhrPtVKa4sPsrPqQqaeB9UZbiY4adEGJ31XKbhiSWDwJE",
  "key26": "4sXAB4MTGpxeHEvUfbaTtyH5KA7vFpd43ms4a7V696N1ukcD5reS5oAn83R7eAqB2x9zMTcrAcB79pRVmCPkxcgw",
  "key27": "3behsgoZT115qtHeQHN37DdVba9dsQYwAAq2SUVFkysz4mfAkh6RV4rZ4h1T4y9XSfzNHozb1EdURAg9u1afv2FF",
  "key28": "3FCNRonSEagTb9H4kHZFKfWu74bDFcHZ8a3uXuYrsiasztXPRhchEsgvdqm7QKBRMVVxpCbAmvbmCKWM28HQ5Txi",
  "key29": "L3rMnUr88TnANMtcNqs4Qq9nKE18KEe1eDKhXbLCivuwAWHm1ZmzywP1rgFPyXjkyVBdhTjfadhWUTx4Z8D9PaC",
  "key30": "N9CDCL5Bob99UaywVcKP6NXjvGN4iQPj8PHznCZiVpxhYFPFVjhQgifGo98eosDaTiStHPdeGZMe4HNjkHHt7MS",
  "key31": "XPiMziQQNB4jYhz1EienjEtUJssiVzt8Nc66S2ttezWXNr58idScbaVMhm7Y6GR529za21TGC9GSbnZjiKD7C8A",
  "key32": "3Tn9D7cgQReEHnprGfvSpgL3a7j39wLNe4wFughe3svMYihMtafKTnyaWQ9F4q4sSXWmRsSJP4RwmPfLZCLqMwvA",
  "key33": "13SbwW65UUU8DMgHjHeaSeRApNZmzKqpn3bVxB8JgvMWVD91QdzZWrSTYtB8ALZ2HVeVYZKRs9KBwxWu8qpJjGS",
  "key34": "w5azUEzzjrTAE6tah923onUELvkqM532fVjGahWW8v4GQLR4bAhHv2oMCqba3LQfePLwykYZJ5u52in9e98c5Br",
  "key35": "qANj6NL9J1pC7yDUQnebvEP79eGrxGbQABbHrHBM4gRA3eqkiMv1SWmjgvNtTCPzGfGAQ9smsxMvr3GxybEQCjE",
  "key36": "2tsj1nz2bPTe86oLQWRJ2zAEXuxfKK2uqk6gAs62AaWxDFpvcFJnLAp8tN2z7WudFncMRfyp7ZYqAP3ML7fMkNNY",
  "key37": "5YMsYGktMzcPqgz39mMgTF8p31jsoVKQ2rsKSj2xDf9snmwVZ65ynTbje85UUbZfACwy8qbVcN1RyVpG98oQpkys"
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
