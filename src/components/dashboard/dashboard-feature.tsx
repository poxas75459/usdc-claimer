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
    "5xBSqH6pQ7qmwdPVBvqiN1wjphDVskGrfgQwSGugk2XoBrtYUrF4i5inhYqDYnSyo3zCkku3LY4DKmSyRYmjcLdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ymXMBg2v9KSfE7noxJ8SESKwBouED37aYf5aLvjwkDoKzva557TaTU4aMCDB2aGAxSLxLGmmY3RUFKjQbNNRNq2",
  "key1": "3HznTWp8ExK9ehqKkuXa39bsxTRbu4ZcN26ueDMhXGLX3t5dAigoGPPRqWi5wHfR4nfRzGJfeEyGdiDjV89KPFjZ",
  "key2": "5qVpgVbsBsLkF2G7tV5Ko6spxmZh8R7jWfoSzhZTQu3pWPLTxBYGhsBxnzuLgT7vRJFVZZDaTa971qkmzHCXoUqs",
  "key3": "2SsXboaRqRypdENqzeiDkYtHsA6xm6TEWTUY1ingk3YZnXGmXaPbPG9hRLNd1npoqEVTWvnS1T2WUGgbTwPjQpHg",
  "key4": "4prh7hRLrMxnEMjKeGTq1EFHrNGketG3MHEgc2dtSJbzwTPonwUrnWpS4gCxNu7339yZ9SwECcjo1CcgeQ1vcFaJ",
  "key5": "2iDTcULKinYJDQsB6gSo7AC86azC69j5gWisS6FQme6FECULRDjsZ6yje74WVdBYSzzp5EsK4dKFfjmEDPDVb7b4",
  "key6": "qofDxPs4rgnA6VaEQ6VjqYqiNJ1sZT2fSUdkBWiV8ZpSKzZGRuwppbkA5mUMcgTiR111Dg6bBangyWMw3w8Gvcq",
  "key7": "5EYLHvFDaTXKszVxdmhyKZQNg3KUgSGPThFyeddJZXwxvzB7Lj9UxxujfpyJaNNm4TBwrRr63jTjAP4fatyBu4GJ",
  "key8": "5UmMYx3NcPB4MzA9ihYDkj4VA1vNGTEEnwg9pGXQ5frPKR3aHzDRbD5TfmBSWr6Jw62KqH8CJNRLXbXPqXmnyfUR",
  "key9": "3YxFo3ncabK7415HznnVLziN3Xft13pzUQb8BdMpnJjokDYGeudzmmgw5EjiAaLkUWEzB6HMP7AA9jCFtthSWfGi",
  "key10": "fw46Pg2jqXqW1RfjmmDRRncGqiHxyHSCtBB4R9dNan5V1a45uPwU4v3spDPPfZUfvGkHAviHgsuKHV62LHBPp4s",
  "key11": "4b778PiKqWD2HQxudrh1wqVvTWEanVTBBvPWQzk49Ji2Mcw96NdfvTtSeidWn2fpXB8HNXZ5vLK9cicYwjyFyuzi",
  "key12": "2QdKR6Atr6LAUZqoymvziYxtSDRiiFWNncjAQHb1oQfacKqy96pDvRojB671QgBHvKRbMpBa4VDRoPe1DhoTKTjR",
  "key13": "2onh1zaVBEFSeiWEWqvXxpgErJMafz1MdQ6jcT43Wbzb2ywMBusKLYyAARHo8KYvB6tja2z7VHCS33RYx34i7tWd",
  "key14": "P4Mzr3J8Co43ikzpqzFahy7KXWY5LeW7V8gkVrpydszKd1WvZoYxfXmzztAyuwUGmonBbzEdyK9PBFqwinbZuz1",
  "key15": "4pA58ZevBTRvndDmLymKxepPjfzvS2BToKgsBQQEYzMyBYXEUBQXjG5T5i9jZwNujeSxK318NvjueWkVaPp8SFFg",
  "key16": "4Qo4bXwjNCshNMYtnhSpb4McV4avxqxNYtJtGUMrwHYq8Cj2jNMfaDCof3iEeX7Wa38AJqL7Rj4AMuDEm35SmDwR",
  "key17": "4LShXMpiYHmaLW7HtekBvRw2zyjPyARPFKYRyZQoZ5r3uxVdYtoL9mjQ3ve1czJzcV3duZ9krxEK6UdeJNdn1BTm",
  "key18": "4KTwSp6qu9VEVGM4RYhyuRgUT66gGwH6cW2it7xGo5vDLjfubdW6xb3GnVeRKp8s3AUNQ7Q86eoQZwayM3Tb5fzS",
  "key19": "5oBJjq11VsRRA3veukUMTLegB3fWw8G8n8utJaomce1xbtwpDmhcYci7ideMBoKwn2rBxh43gKfn8jALb6A15E8",
  "key20": "3cCdtr3bGQ2PCXZXo8bH2FyAWf3gJm5TWGXh5QrzmJjQTxHcR3EkWLn8k9vDDzBg2BbFx5fTdkdWqSF2g7CLvjof",
  "key21": "4rZtQNSHhx5o9qjQtzsUT1LoxvLkoJ3ejuGxNx3dorCrkhafGZC8UKcXzUQ6CVsQGu4QX8ToL9P8azMbABQ6xFJF",
  "key22": "35jLhsGhtdMjoFykb4kmi1RMDoGAVL8uEAftw9rqcbCaCRH4QX5hNoPgV2EXuyBE8jcmopq4f1sTftxpiC3m7ycL",
  "key23": "5n8giNHiEf2HpeRNcuhnsxbMLxgEJuWzvHoMTSwTQFRCDMuSrXzF1T7Vx76sWX1NvbMNVxGWdn72dLgU4ZF3WHRJ",
  "key24": "wnezzipLzAqYvy8kXJBA8C8JpikWr7L8GtKEJKZfZNAqh9M6fX7GKRZ61fiYbPX5arcMUnmhnB2zhXA3YP3dEiH",
  "key25": "44zcZZdrnA4g7iRC4kyi1PGgvbWdszjPZsFA7UhnRy7sFAe2sNu4ouU7zAUM7i1HwhvSU69FhSq38mvAvnDmamAd",
  "key26": "7WTfuTnYVyhvD4QVm58i88QNYTVF6m1kWMdMeLB3R5GDYcKRwyxD6uTzxnTJwGCzSqkZepL8XB7i65YccVYx85s",
  "key27": "3cP5M2QiH5QR7j8uJ41zfwHTzLZpmq9oiEn83zsrL5WqcRMLwuuXyTyyEvDHmYKXxe2iTXZ2156HQeL6ZMiChAad",
  "key28": "3nrTtz7uh6xUwQz9Vm4hHLyGe6ako7wFZRUwKzA84z1cdnxjAFhczXm4AaKTnzUEaK3QDJ1U1wLUCKNos3wEi18w",
  "key29": "5Yob31CkYdJdJJ4XjaVfyYZYgvpTQvb2T94zNW7EwKeWg6VXbaRDTGViWoGLnHct1JeVTYcDYSBi9q1q9EkWzAdT",
  "key30": "58W8WiJ7Hd9qVi8vJDWyyNsAmNJcweDyydw183di2udh9tFr77F9TePupchJpL1vbAVABx2E3BrAqjuVeBwPsAkq",
  "key31": "3SftVndcKdiK9eXFvBiXRm2niRotGfmFezUVyYBaDP7gRnQc2BPZYPLdAgkf2fqgpSTsbHnqN7egbttP8BRAcf1b"
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
