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
    "5DivxYQGxAUbRzuWqjh7QJB3NCNz3uCaecS3nNg5rp8BVyMBopK5YAdQd93ftATLvpEhEcTrzyCS1Acd33dhdjeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N46yEsfNXSrbCqGNdZcLzHAeWCLaXxnznvTZNcQviB9uHCWs6LjZmiiusr6dNBq9kxMTBQJeb7svdwYz27ZatYw",
  "key1": "35wsQfU153gU1SVNjAsT1goCSUSLNMLzoPmgPBHw6wnA7utyd8BxKB1qXQGgXkg2zQnxKJHXYN1jvWLuCzV5K64Z",
  "key2": "4jtGCS5wRGn4U9wvxboaPzFr1iP7D689vVv5YDLZeRKFKq8gAqfyJRFsBnC2qKVxmJTGm4h6akEvL8EnrzumeY7k",
  "key3": "4mrzRxLBhM8XwMiaP58H2ujXJrWJs5RNqjUj5XpZsSa8Zo97dTif9BXesASzcdxP4k2wsqrMA9EH5A1u31YHc7DB",
  "key4": "5aR1qXkxHy3TxRp6NuGzWbksv79EjMhXPkE3bsyxenVmBQseooGT3bYMtPg4E3ZgzZT7ycmS7BEsWApiAXoZPWif",
  "key5": "h3vTqGUgjz4dzgbcvbiR47zpfxnGjAAYjYaE6jZjLdcPGYvYmogmx8g2VFRpQpZTVmpnBTwfMf2eFcF9AczDT3V",
  "key6": "VJWUppUa6pk7NF31qPpkaoBDo2gtN5ZuRmYNVyr1FViDZuSPCbBBfAHGSHLqyWyhf34yzD3z7e6T2WvSs5nedUg",
  "key7": "4SKQeZg9YBvxvZy2dx54fPgX8s3T45tFB53pRibzonVmdVKfR8Fe6K7u2aKJRc7SDRkwvTDCkdgkRgwmee5bEeiU",
  "key8": "55hTJ2kKUGSN5eULPtArRMEbsMbaHyZ5UBdMPpswHTcxvJC6GvaJeSyiFT3M6NDupScuKyDrhZf3efU6vJsciCxK",
  "key9": "3CgmXE3xoUPUNFEhRA8pGopheUnsr2w2c8YkLbWoAFCdQkA24ivubW5w96zWZoAAJZTiaksjFPvNFRCUBg4GuRUy",
  "key10": "33Ph7E9bkyoAEZ1GbXaLQLPudjZ8zoTf29f6cDc6QuFBFpdkedFwb4muRaZS9XLtcA3H25TzTY4g66fnsp5bDaQR",
  "key11": "27CkJ1iRpp42y8ueHLB8srRZTF56VWNPU5otFZ2ZcPrLcmrHdz3s1rdoezrk9ddec8guQs4R3atG7Fb8kNyc25GJ",
  "key12": "eHQHQKPB9DrGPv2dhq91YJSEGDoqu2DMXpPtcVXQS8dRHdk4oyhg8KCw3yM6jXay18SZ7RoKRYjRdKptQ39UaUT",
  "key13": "5cP9bht5gQFQHzEvhWz4y2ikvd9q9dWUGVsC9yoaTsbne8aSXcc3grNdsjVSSiFSLdY2gHifie1MbdFBvYMbvjYP",
  "key14": "rH5KrrA9bgM2gmHwmmufNX2yj4pyDgv4cjx9tQYM6SZ1XDt7YHboY9tegMENswmNQ1fiZpjAw7tCEdVhzhFw3Ai",
  "key15": "2VB7TMcYVPsAENFkzYuJkfpxMqS7QVtVhvcYauWjL92UQFN9eyDa7MEu92SSTKtdsjTexs9EJnUPgSwDCyxMeYEq",
  "key16": "rQUyBFP6at7dsYaHtjWgpafVkwgH3VeTqFdGXSXk9161GFzyzjPh1CGJJ9C4PXCD6nYpiWDerGoPX5m9coC7RAh",
  "key17": "2vuC3Lemjv3ADPSZZPB6FL59NX1g7FFeLaMcXPa6jeuqokT6nALuLEH3a8SyRZNdFb7fXR7DUvRTQ7HNVdpxBMZU",
  "key18": "8ErFFRjgE9acuWKqtF43drqBH3XhTD7CazjbHKX1dTgVEkoPCvPdjKCJDyyarmssCpPPEToackCUYwNNLnDpSvB",
  "key19": "2UGxPRMzbZussw9U4PuwZTZYqh6xjvzPG5TNtXgRpoks3Hmye3Ua1uz5WBJyXtTB2MmLMXPXRxaFQfDNbHXFsn2u",
  "key20": "3dZRTqixTVWqerty4Z5ZdnF9jvtgsA9RVvpqaX1BM35M4paWH2jvgSfSmYz7CodXWozkx3DQQPLgHpPSUcU1jXQD",
  "key21": "3mq1pCZ24PpcrqNv8Qrs5EtTS9UcxddCniStaUhEcdPkAca2q5w3iBac1LoK8EQXZShsTWGif71rMnno7x7EpS2b",
  "key22": "3VhfX2mnJG6UJZzNsaZy1XL3skF6GxFHFSE5gChVvqgikiixn3w8yb8zw2N1JeJnyjyL5hBAYsn21VsgG1yFYMcR",
  "key23": "j8YG4wPNnZKxXaJrBfVZ9s5edqjtdes2o2a5xXAM8zEkMCd7hNzg2st1XB8wEjG7GgCvYTj11P4JaY6tuVgs7fm",
  "key24": "SgUBJwb8PhfVSk3AoaCZoDRLdtw92uEXPw7uQWL1HZhN17hwp4utvhyFVG7z6BsfDnuuGaNAN863BZ3Jyz8iMpt",
  "key25": "2SNVQ5juab22JAE8HKdQUo9NqsTTVqgFx15xhBgDo5L78gjy8tsn7Ggby7xedenhjuiCiUhdP5auJPnuhnHSbWcM",
  "key26": "4JNAh3JcB6VX48L7VomTCi7hreMved6ERnPZYJ4Z3FDoocDRgqrWJLNEPbJj2rY6BKAWnK8viVt6juTkQ8u4jwa",
  "key27": "4LSqfASq3A2zcakd2Qa8nC5m2zYLAHganfstM7ZM4gJQWCrL2JdpGDCHVy8sdBmWzwd2vE7XbKcv4sZ6M4Kh7smN",
  "key28": "4T3WJJZf19xfCMRgW2bzLsiS9M2pCzwkHipu7AkLJqorHBFp9ZAWtbAJUG4KGyRg9ffUKihLR6DVsRCsoHydhLoi",
  "key29": "5cmq2cwj9MH6jxBxWHUGt6x5pgEWNtW3UUe81qtaXx1PggDe8Qw55sSHv2DSEAPzyxSU6JNqN8XpKJM4adgJYur4",
  "key30": "m9DfKw7jht4RFe3QYz2aPBLk2VsdRBYg58jg3WkmduodvDtVQnZUHmdxM8aocAuzXxiGkwvF9bFD494mF2iBR6N",
  "key31": "31dwX7PXKoA1v8VHYbZgEppLA7VFV7DeJRjrSoAuE7JgfMgLVDJ3Lf5Ac5i7JPJ9UGVnoJYy858E6q5dGwDvyL87",
  "key32": "3Bxfqc1552kVSXpC2E8Rt2Wcw8TkqYTG9aUqioT6R6sNz8k73jPihmKyiP9Wv19jpPjG7RrP5xzW5Cv79dbxCvkY",
  "key33": "2NmCnCNUZT83gHuND4xRPTS2iXPmd8Mxmsytf3ZqLwAjcG1mAUcvmZNJg5ZdPVkY1xswnL8bV45EzbpAC8Y981jt",
  "key34": "4sW47m4KZo9YMAUPmFkRtonSAxjEfJEi3VmjLDQJGzXagPP2xgDWqmWvDDGwTF54hH2mzu8cm9787YZkdBp7NqkD",
  "key35": "53U1fQBXEE7rsB5jkuL5wpF8T766WPQjGfBqYWbfFCsu5VQcYRbr1yJ93QKmHnuLAM9CXvrUtXSUhkneNt8QMJNf",
  "key36": "3LD3yySRhuzDjebsZrkzRyJWbz2tCHcj5iSeguoWp4trwAfPbZAUAXMbftNnE44m8RKt8ajzzsJ1VTT8QDXtiPw5",
  "key37": "TwTA7vhAbkkzw94DsAWsMaDYb7gdr92ZP27pJBLWWg2nrwkXFkYKjp5ti5bvk1Jmp9VFKYjNyt89oDAnmy9doGn",
  "key38": "5zwKpDwCiNRU3GCMBhWqMJBEwLDDgNwdmNDhGK1CsxjATVwtyAjALfMyyyY3zeoFgsPfFcVNnY434qVXkh1LQHF1",
  "key39": "5oCpgWQ3154czXyotri8axNqdAEoHX6P4yEpqQSsx9Ngr3vgjPuwtUG4omghzVdqsTTfUUSpWfASyQjhgSY5cQu8",
  "key40": "541P7KUNcWq4PCjMqxvk9ibb2qEXHgsFKTVzXN4aTA7jEARkJyXc63v1YscgoR6e59wZiT9yA3RSsBhaAFxn6wYY",
  "key41": "41p5mcqeC1NEZAR2oaPjxdW2KCAv6TyvwuYNfVyvXuY53q832PnuN1xpKK3LU7rJgFKa86NV4VojKnC4UjULP7uB",
  "key42": "2Shba4qzWkKpkAFat1dfhtdbcc1DL5dVgQDBWDkQKK1g2y3Ta3zFSVWiRmyDH69UfRJ88UAiKahph1r5T4oYuag",
  "key43": "Te8cjGgsHGvuSa5FXMshMNDYYYwoT9Ei7oNLLSEagYaDRLvqHu87BMm3quQN9Sh1DQgvJvqWYAGNWb2oWXfKYg3",
  "key44": "38T94NwFJjEc2hFN9KkTNZLP2RhaaibYjd97aHFGdTBuKmoPZEsHiUnoJhX3eFXerqEzWGFdgLeFL99stYHkXz33"
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
