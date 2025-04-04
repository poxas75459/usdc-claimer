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
    "6KvgDPNHAPQ7TU3pp5pcYiLb6QWnpdPG2r73sy89vw43aHmXVXeJnzw4urnnwnynHyMBdShCDCVkggizhe8q2My"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EA2Zam5ok6QrdhLe5v9nrjStrSi6eGUUDLWTmNGPM5khdnXWft6AkJqQkL2w6vJkms76JugYciE2BBCD4z5RZQ7",
  "key1": "5Qgd4rMugNFkWhm2F5AYUZzDovAjRFKmXENcYxAdgmZgueo9WCkHmsZdQM2p5ZLAh44E4FSh4SqHmiAFznL2hd7n",
  "key2": "suyjwGGEwtvVfX56uoKuLzp9brSPk6y1DaNTZGXXgy3UpMg31d5SFXz9KTsRjh7PmjdFxKMTtn5iS76CbfBzTTJ",
  "key3": "vbRHcAnpu6cF2G4qhfRRpKh2LrJGAMeh9RCVpy74HLWVQHednekXXJVJBmPjGDfRhPnPB9MSsM54G42nBhWN9do",
  "key4": "2CAza17WGF7oPGC9iEsepZedjMDHb9QBHmTpFWc2TqaR9xo97Lu1nLjp1TLhTQ5kmJxhkFJYwuCYwBYVLf6NRUKc",
  "key5": "2NqDDthsXgqw66xE9tRqTNW9dTPL8ohxCWvfM7B62wdLPnR3Ae96V7xM6RURwpT5qZCHVdiESuKauBYRG3CKoFhv",
  "key6": "tSAwN37QkK27Xbntyn4XuzHT2nKn2a7RYxv9oKV5bEVTw6rm9FzDRwy51ykfh6HZjJzgBRj66fZFNwQzZLFNcBP",
  "key7": "5KJi4LPXzbdNmAGGBBsyzsEfeJvFDYTLg2X4TisepF3Av7SoDK68qz1xtGf6FFczbSGWmRbthcCvDV7Mrtejnfrd",
  "key8": "5dcXUQEQLjVb7ZqDro4JTFXkVVyf6kEwBAstvhWqw1a8bGi99P1QkQyQUaygfm2hX2F7A2VtrVcRsZ5Z7BqRekR7",
  "key9": "3txvHxzudCbx26SUoeCXZKYLEoJvxh6mdo5AUXNuPg3PJhZY7ft1TpHC67ShJGF5ZLkStMuW8QxhV58tVKYheRUd",
  "key10": "3geuLqq5KShKU89nQauxxxLP7qNmbZuziUGByb6hQSWL5kn5s7fLXxq5UcbuotggQkRuXZA1CFRi7qWXPck9JDT2",
  "key11": "3eE37twijrL1uoneNMmQdxVVFpMHyj4q6pEybvn1uHSSmCCfBKiBKD7zMJcmYA9fSdfbCmjwDr8VcwvQYMz4DH6D",
  "key12": "X1j3vuUMX18Aoka2gSr3GdBNfF3sWMyZ1ZREFp16UGRfFvjtswkJbETpkr7sWuBmY6PmFHsRx5JQa2xHhVoes1r",
  "key13": "3L69rFsqcEWKW9tvNjyzXbQrigMXS6uSRwsgEX2LAQqPqzMardvp4woAa8fPYhyc6dS6v8MgKXSMiYUK7ujpN4uk",
  "key14": "gW9ZiAHf49SFK7RA6C1Twk3BzAVSB9qk5MYTt8AXCqk5pQfTaKXHuNr9RF29YeEYiwtczGyLUR23hZRTsDHAyAG",
  "key15": "5pT574Jp6GEvXES6tvLufBC7FMP1uW9VvLxQYFvjh4n99coSupyc9BqZyJVXBFnCvRZjCcT3CpoyphXvKKUk774w",
  "key16": "3aazSBDciPCmQJSUKrLGGMGAAoeS8TJBD9T3dF2MRneNxfJ5Maxzx9cPZwSx8kxikVUjntHCH5iYAxMsZGmxAwDG",
  "key17": "5cKNBJZPZ2jbScg5Q9s7WoouM9DKx6R1wnvv6tGZt9tNCESocQKEh1raJqkzZLez2C7EH1SojwbZ5vRS4uzKcufk",
  "key18": "52yKmNjH2TAPbQSZJ38thUSZqfNdiX4KZ1UdArGrcNVh637mhcdnX1wYCQmymnGWPGGprwjAihEG6B5chZa9SnkC",
  "key19": "25FVR28VudjFZS468JDGQ1cbvLRFAdEM7ZmGL4hyUbxwQQcei92zdynQBAe3Qaoh6oZ7hJ65TFn4zsY76jgv9K1p",
  "key20": "2do58hEmA4UWpdzhbfjWUXQPkd5gMy34nLunMLuR2RcbHbwf7X5GJcVFJjkLRVYqCZrchtvWB2tLBvuwQ5QYk5b2",
  "key21": "527WCunJiwFS7CfsWrxv9z8fzHyDDiWCzuqgwVebA4gHa8nYvwGVVBtuPKkDLBpAXwu1VZZr2TSsPUUxmf9ZtZc5",
  "key22": "4Txk6kpVMJyF2p6vVvHjsNiCvNPva95gBFquEp1F9u951vuGSmR3C2Ryek9nftuEBk8yNdELAeGhU6eTLNw8CtPy",
  "key23": "5YJ4wgtkqou1cXMBSbuPvMNb8TzS8xtWpQJDkpopJDVEKEaWzNQq42Ykux7n4H8Jn32LnLXvWPqWgheT82iWjhv4",
  "key24": "5VieyRiKXywABxXQZk6rYnAmLCyfnpsJSiHm7tmDXDAqGtmnjyDB7Yw7sHeWFAJMNj5FQ99HNzDGn6jD4GqWo5i7",
  "key25": "5TJLSBk3ZVuiRG3xGd8LCA2pyi4Y8VVMNk1ExzAeL4qxDip8eH7ERAf7EQa8FzWFNciaQco4a4r5MuuWuCA4tRhz",
  "key26": "5t98dpriQjEE4JuUaubRJQReyXwjgCVXCswwFV7XnSKHJScTYPenomy57NKB3v7hDPGiejsHUbT6JyMd3dANzE2H",
  "key27": "4fkaJyT54NMTGv6KTpWEtY7Zaf3SXnezxNmZz1rZmkHg6DEVebMov7mD98UKWXgvpQWoskZi1MA4dpTubGunP4Za",
  "key28": "36LSeZM1czo44pcw4fc84AsR1JWSFNPs3F2KTvsHjtuGQgCuq3SZuzsokzkqFZ5jMLCbwsnMMzgfNKtudWz2i4Zg",
  "key29": "3Jk1RepdT8yASeYz6hqzRkQ4GYHS6unXoFQxH8At6MWt5LKL1AqtLWyE2DTM4erRKn47i3GV1RPJ3KxNYXwVy7Li",
  "key30": "42EggRqaGaqAf5dP9w1MENtYi3DS743HaM8g5CmBMVzYMhhdnJi65yPGcuh5wLZ4RKN6ZwNrn5oeFCYEkkdRVEk4",
  "key31": "2JUGxkFsRxqvPY7thQX3ecTvT4pfMZoM2kqA1JpAhMsck9GTJuvA4AMJefF6a4UqFfXwDCAUURLXHH3EzBuMYVgB",
  "key32": "4sEVsUhyPibVTn89SyWm3vDbKZUAzyUVpw772XoXFubXV4gwqLbUZf11o1i4C2dN8BJuEDHG6rKX9WxQzEkS2xHr",
  "key33": "3Z3GnorLwDFfHVJ1cLhXydhBYSTaAdxYJEa8buNDS84w2xz35N4xM41K1HHsgfTZZ52BLQpsuQWRnH2DEhAx4nvv",
  "key34": "4AxZGS8cXXESLEfh13ZBTAT1zCNP3x7KgBfGR387LmrELnbuyxQoWZgqapZihzrsTT3qLkbNbSCgPdMEWv8Rio2v"
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
