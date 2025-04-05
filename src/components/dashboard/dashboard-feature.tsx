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
    "2Ck5toQHKHu7DMu1whNx7MAuz9ixUAJo1fqtUSfa3prsHoDXpsaNYaffkushGW3nELKx3pF82PHMDuCx57Yb2UTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DNNapSGHL4PYqaPxdsTHJGCxhtfPiVZnHkHGiGcV6K2FHq5Ua8CADXEKGmMQPrHtnJCjW59fThDs9mLsB4E2Mzx",
  "key1": "4N6ymEMiubygozFdonNsTCUR4hzGnwJ2yvWphJrNhK2aCgoLrSSnBDxWHiZ6KUq3PTszQp3hX97fCogL5Jk7CSYZ",
  "key2": "5BwB72CX49f1iukyuuDaQy47hBQBcVomg8c3upAA3LEq3mYFon335on9s3UxU7xRnbPxZ6eDJFgmWsdoraKzqNkW",
  "key3": "3vuD1kGZMy1FCgKLmzXsMaNv2vmZXLVwPzY2VmWPh1SiKsYgg1NW6QU6koQDMzKuY6aZv5ATz5aLWvJodNqXpL1g",
  "key4": "631mjGzHTjM9yozxgGQukNw5H14wWJ5jmdpRMcpXsNMTKWrkpg9dwFTVptVNH8Akv7HqgDUoZ7HaSMLeGiHPbygv",
  "key5": "3ah1tuT3gxALks4Tka6NBFyKzKpHmW2CNQCaudXuS4G5eCiBbWwwAN8hfHvCjDVM2V6qmJmHnia4RXxGwUPKGeSS",
  "key6": "26AXgubxbqFbHSqnZGDZxvEoY2ALBwkKJVzXme7a63xXa5mKMzcTNzL9nmXty4tmVY7WthBX72gvCwPeBKMUskPk",
  "key7": "4q1JuJ5pgZejByaXGeE2B1ZhPYTUDJDyZKz3gSYSLCnbMiuzmLQ62DH7tqSWgTYqyYqwAHSdpSyJds7AMa6Xe8Xy",
  "key8": "3TT3A523mbVoGfBpyZEzTD7KjhzjhbbFUNcc2aj194SZisB6YXxG8kRmfZBb9ifFSocJ13B5Uc98fPqRFYhBvgjY",
  "key9": "5vAz5v9x6xBD16ccA7hmiDwvz3dZrg1jxCSW7rwndHFhS6js31HTYRjMNhCsUfrGBkDpqseBZoKBbfT3amWYCQh9",
  "key10": "3AyQ3oCVsAhSYZ4ziSqnRL12G6mEuKxBGTsjSLW7nK9d3P8eJv6bGUp1APYkHzxxyHjFp1kdqwkWBBMS2HLhwQpS",
  "key11": "z9FSQdcnzpNhK8dUbdviRGvte3FWNvmQPd13jVquGdwYiPxEZxX3BEn7ZjKombBGJM4WSKyCBrb5Kt72pRdxzni",
  "key12": "2pY2UJ4axfg65hoxPDbRVt7VRLWYWQ4Cx5Pz7Q84N4UhdTdnUGrRJ2wzaQA7Dmj6RgLo3vuHLoGhQv1LeTeXHWHf",
  "key13": "jUiRcreatmoMaH2ZFVuMDmL7fXzEJsuryv6S51WaS7FETBEAGVK9wc846NQpjW8rmtM5ewETi9YL5ZDyipfryPJ",
  "key14": "kj3971mYTsP1ffWn4AnwJnAXxUt42fJ1JGp9N7xjFxYuMTTHuYE6a6SM7FrhdaJBWYi227VJRf8tWjasGCmGUCj",
  "key15": "4vWPtXsrKdaReMRESwx6sEBTSY8ujJReKRNWZ2wQgkFnNZey51TiSALgFPy619wWVY8prbKKf3axSGNjQeoanLVg",
  "key16": "ghpPReTHPSyCqQWTUSuKUbgQ5XNZgQwFL8kPVh725Hug5VEhP7G9iCkUATBmWnZVDg4LazcB5bAnrkzFZmdqqjn",
  "key17": "2Bba5Bqh4zyXmuLtDU4wq7ThehKNAj7hUw6jXF2GtqByV7WfEXhkdT7Fves9DHgiyUGTeSohEZH9rAz6oCrN2rs3",
  "key18": "2TKiLejCUhFDgGw73o9Txtct1npo88V5TNrMwok26ibcpT2Mu9QqWw34qm5xopzmk6Wm6CpV5FcKh2MykCTcoMEQ",
  "key19": "2AcemX9GfVjbHH89MCZmtH1UqNteM8y1F8YyNSdeVBR5UDfw2qu6XTZDUNiytWtEnAbDiW4XsLegwYdJucN78aCM",
  "key20": "jDFDYM4QvyyiM6VQgRvpX5HW4axBwAn2wtu7A125Wdu3VNjLNoagXyifJtGWzbxgsCtj4qC1yZzYJ6LW5J1MRUZ",
  "key21": "2oMph4iXAYXWeDxDPqJvL7RVibZ7DdSheKvwYmyPWK9oF5twggQHa6sz67guB4Lci21KEXpu8PUTKRArCSptWH9Q",
  "key22": "4q3HEpCBr1LWbTWUo6v9EbNJVonoeJEdgNkhFxgQ7fqi5xs44AW9cpm1bzB3yh9LyWSLqHnZzNSjNFY2TifccfhG",
  "key23": "522KYZJZaFh3GGsWAtAnzYkrr2Gf9aWpL1Fa3Zf8vxnAQp836o9vTk1swVMk1fqop2q23i6pzFv4geXDTZdFWFox",
  "key24": "5Bw8FMUcsfxTWBx7EPfXtqwWX31GtEEHs292tE4xcedFNJn5UZjj9Vr7xUR6bqtEcaNJiv1D563tt9KZHJgm4B47",
  "key25": "5f8WNAur4vk4vSisGem2okYcbX3JwwifftgsWticgf9KnEXLwh1Ytf4dVQLhenxhGH2Q9VuYchX7ibMquG7dZojW",
  "key26": "NBpbRFPKicUu9kuoKLAyXTGKxnxQDP1BiRL9NWbPQM2rqb9EzuWDWB3SAfwzKcHuJDLqjvA1YggZUroHF6D2n69",
  "key27": "4JEawtpTZC5bNdi5qqNH7bBuZcfUAptJ9yVsD1uGT2F4swLQDpyGYuwxaZBow6wbeSXTPp1mFtfZxwysA9pDeXWg",
  "key28": "35NAja1xfWFUUCTrsuQX73KFDtFS9TLazWT8H4JFW3QTgk9yarwKzZRNfUNsjq2NPXyV5ABurXjyWyoG7JFvYg2H",
  "key29": "ztKphymi3CxvFmuyamZUWxMEPB8tAhmY4fzm53zyPNYZjsTHqMvoB6VEMPgWwWhtnHK4kQ3bDpCpB69Ux1d8HtY",
  "key30": "1h94tdfXXqPefGYNogaAVs7iv364JiJ1Zwea491yMgqgCngnMiheVeVbyuLkacFnQXtyX1xMSBZj6N3kqkKxW6t",
  "key31": "3Aud6ERcvpgDTz3eLfj6xY2fx54HqUtz9zypZDuf5bqob8xuv1wY5FJMpANfx6MxukvybjcXfSgpLSP5hLxkGoQV",
  "key32": "3E5hyoh5pKHcRa2JD781J8oSsDYGQm3EAA79jtv4EREnis7AuGcUQFNm2vDoKm6hbVHe1P9Yc9ppEuhSnYLu1hSH",
  "key33": "9WqZGSeizKsX7MuBR9P9zLtTzUR5TEjNpa77aowVgq9EkvptermFvgFfU4eH6UmjxvTGvv5Hehuq1hG6mwBJnDh",
  "key34": "BKFGWyzcrWi7UxBYNHDn7ppn5956uR8dS7FsD8XrhRa3RGWaNp2TMSxZivbP3QrdxyRoYhG8WHtMFw8ukooD4Ro",
  "key35": "3WB25sHA9oM7Lu8Gmcs3tSwoycco3YTMSqZXqiwsGzLEYF6QQMyzKabSrABpn5ZnWY6enxMt8CVi1c6Q5yzVFvPa",
  "key36": "3eroXw9UGZXkFBGxdnhgzbLRNeLpuosPgV5Ndq2cimTEnAGi47LXaiQ4wjNLqaY8tLjJkbgzhWyzoXe853zC1tbQ"
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
