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
    "5C3DB54dzLUcCXDSCAiuFHgNVRKMdoDjJeSJZ7ocgqxvoELYGFXhKFYRUGPFutLb1NtC2ZCnjbWwFZ4BjLc1Ptsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27dumcoRPFc5bjVWcEXA75utbGahUMRQ9LV7S5AxNQB1iUiMdh9WZcEmrEphkQLK97r1RaiBPL13zaQB3VZVX9FU",
  "key1": "3pVMgYoh55oryTy2g5uDY7ekSMge8CxP3dtb78H9h9oMzUmk1imfoPYtpHtp36BUtWccCjmGsmHYz2tTcu6RXAxE",
  "key2": "7xQ7weoPXkLHPSCeUDDUHTgCebJKUodTFqFjhX1c4bbfN6TB9hjdjKDxd2BwPTQ5RNkGP4yjgeirX51AQXP4E3X",
  "key3": "2cgkP7KXpUEGUW1ypHDrpk6h51SzGKB5SqrBkfb2VY2o39AeaeZFpx36SxN1mp1U818WWKY8nfjKfyKg7PcMscRL",
  "key4": "2mbw1XKfjXCUi2vic98PQBvcDWYMBg6dugSC8TtGasFdZKGTPcxX1icM8EBavz4K6xwsbur6nqCRJdFh5BsbhKtU",
  "key5": "82fopBz57ASQ1PnZAe2ojBDTUWxK76egoqZ34S13D8rzsXTu2od5BogmVSP8UVobHZL4aUW2ZBWMAiGcyg4ZudE",
  "key6": "3eMio4KmDk8E3a1JaEhduEcc7jotHghFUpXce2Z1PM8CMX2Y4UzEyNQGHgsFuzYfFi5GmYLLfEQVMdNctDnVNVYW",
  "key7": "35pzzzGzTy7GckfKPSUSnVs7saNxCYaV2Es8BoJTtTv5gaBWBJ5Be9m2LNbtgMG52dbCvhgzA9C6KJNxdctKtoA5",
  "key8": "3LARm6qkernuNcY1oFvHJ6dRitHvEfr54vZhTNahYx3LGZF7iebZJEgLLZ98bTBfo7XKvBrrKKisH9g435wQpygA",
  "key9": "5wEjeUotKVaQoKt2uiD3Xjr1ogh3rHGQTczjmnvXwkmYp9mFfje1358vpMLfVkJxSs99Du3dtqBE3M4h9CXwZ6xP",
  "key10": "51VRZ4PPSeeFrg2FGx5m1JnM84TNHkDgxjmBB4b6NjmKAyM8mZDPFRRqT4x1dFbLTxjBbwndGzNfxG2udLgAYYxa",
  "key11": "2AAZSDESBJUgQ4VqY5jVJEAq3PEwhGoyoJQR2qQGFuq7dpcNpuNS5gPDH7XpnnEhFZQpfzePS2QRLKGzu92L4kFV",
  "key12": "4jrToe4mAEYeHXUCn79kSAo95kRoxXQob1pMScRzi8BowQa6hPxhsnTNUqkMgeZhKvznvDmoeiQJbkDP6EbVWNpj",
  "key13": "228wHzFnPr9k76kuRiZsCGAo3ZJJKGY1GWDEFDUsK4XV2tW6TEa4hZNbDRYrqh8khPEyS3tMtaKpc5VrfzcuNN9Y",
  "key14": "2FYxufXVkVecisZ7NTRrEbem215jYy1TjUNz9GrEF8JwffHXzrxdNdEu6vPgSckn1XSooXx5kv1BukXByDKG92eW",
  "key15": "3rnUB6AXFd2Rhy6u771Gx1P6XKDqpRdoeAeTvrPUBv1oFE7DMCkcxbfZrGhSYcDFeC6LE8UNkNrfKntkVdNSetxv",
  "key16": "2yRR3VXR3SVb2Mwbvu6E1bqXuuYZGY65RvwdoEehWHf1PXuWcs9djrFTADS83y8G85UBqovu5oKj3ysVF3AJTqaT",
  "key17": "5awhi9Ga4fS876WS6RDdgp1vpfFHMopMe6amLZtLsFenbBwCvW4PKSGNHgxe9ep6GMfpJWzp3G6rT6DBnsY3rrhq",
  "key18": "4d7GkmM4vPY8k8q6A91iMbYu6nXfqVtJvKHsLfvF17oUkPwgTKFCP7E3raniC5rE2pTSKMw63SdDr8iwzZucv13",
  "key19": "3itMJRSjiBuTH4QJFgK9RirzqSmE8dmec7LPn2ZJZdbaiNy1Mh3oYA5C63sAshwELmyVZVFs5BzH2c5R6YTHv3cW",
  "key20": "Ntfp8ZdLNyQ1aX6CCUcbDY73w84KUrLekTNh6TdG8pTZtpjh2Rg2xYe5ZGeb1wTM1T6XLLA6Nb3VgPwZy7mi3n8",
  "key21": "5ioyd6vwLVSiDp9fLbsB4AVQofP9DWYu8Bze9F5YXvbb7Bf189LYnN2KvQoZx15W6G8SnVF59uJtMvdBV7Z11wJS",
  "key22": "4qvAkvxJobc75LCg9exwst8gC7Hn5x9bssn5pjLiEAZS2ddecfAgTj1BPcvfrizyZxqVCUbatTqW3WiqKqJqi9FN",
  "key23": "553Th8uVXbKJYcPqHGJBsiZg24rwGPnoTqWYHuFzT288D7M7GCf8k6qc1DAFngjqhX3SmBhkBCggfAfW7Xnp48kj",
  "key24": "61wdkt5i34XQd89RF3963FctPJkGnpTBdmeRhComdRCs8DLmxn65Q98t6JyDWgJxH9UXp1NfhvUsansgLkkBCyAA",
  "key25": "MZ2Jd6pizozj17Zhis8RpwY8rtUBD19auHWeK6QJ9HHtjXaj3FpzJAb5cUkRw9An98Q5Qa6xBLpkp3G5zzhtzvU",
  "key26": "5WjFMuK8o1HEJwQWb23feAfJxRSYe3aMm9nVRqoTpE93XvgTRTwZ3JjQVK3PoUYXJK1DM4XwCLyJtb5eJnR429Q1",
  "key27": "21xuTBBxcqGNV5VRCkZgMWoHbJvbe3RKKzG7Jr1NWsYz4e1YQPWx58FeMiw5unHhWa5py2SvZPv6bwwdSt3JwAqm",
  "key28": "3iZvWSBNwvzDcATXRT7j4K25hJQbqXUbvg4PjZiVoDov27fVaypTYgZgJKazrknmsUjAuDxiSnDmAKZF8RsbqBao",
  "key29": "2aLnLseR9eGTDj3KAoUZCDqeuco65CRHf9EcWZzqdSgVZY6rcdXDhuApFe1RM5ponYmeKJitfkLbvEeyghobmqC3",
  "key30": "yCSuL2c9eUmg2X5XV2WpdJ9dSJkpWdauFzW3tnbz4B7rbrNbBMGsD1nNb1vApp4N2HfzRxDgw4Qe2r6KAtcoHdw",
  "key31": "5oN9BGwUcAWw6EpVGxnvDznGPohUphVycbmgEPyNfYTvigguWyWypi8fA8pNjhUqmHrBq9dRvudB7C9M343iJ4Q6",
  "key32": "YdwcYj7WwbosvMYrYLuVH7MDxRJvHbEKgiVGFyjEtUHDKAd9TBV3YW4vacRSkyL9Md6jKKMmySt3h14iQKfD2by",
  "key33": "6JQq8UdmPUMApf3b3mzMrU9b2bJesLNDmg6W9376kqpfXUtUqXLnR3k46pHVPmxh8xayJghyt6d4wJkV6jDkNy5",
  "key34": "5JRMn2sCFu15zBqLDQQF3jtGTdzRNBShdNjAzjUSoWXLTFxxQD1TzRku4EXk54oiiWATb8rXUwFV2mepSPSYeLh6",
  "key35": "jmzch9P1xEdP5xZodLEu9FozL7v5hmNaTtpqw4Banmz6NWVJPZMvqswsMWBFthWV9K6e6fxpfrNAK8vLSHRaeoh",
  "key36": "2MTve5tt1Q2MoHxYAxiP2BUe8NPnqUdnTcLEUktTXQzNnf6jUcaYNrLX7zHkrzWLPbF3sk9FvshbQZEikHVrsbYF",
  "key37": "23r8vVwqXFNLMYvDorrmRNti5arnLcjYYNLJDfdWhSTkxebJn1oHRMaYfWyjjkjzoeyn5KgQRqwo8oZLSiStbLNr",
  "key38": "EUvNHrBLJ1fJbDGrDN4nvATozYbMvKYgsr81ysVH6Ktf6DYavWWzgAZCFCVnetjTxbBj5xrFrKBs6GGJk8QnwiM",
  "key39": "5iBiNbYvZxNtZEvPK9AnEpJRVAiK9ex3b8ihEJZpfwXj1rDb5xCa162xNrxoqE8VA8pjN6X1gY2gGkmcgkhqBmyt",
  "key40": "5j3U8YTMNqHBDjDnyoPto1kvyGUMyqMUNXSe71vRgZk1iHbJH28uB22azYT6Xhh5pYTkmVhVKfBaUptjhTghVfrn",
  "key41": "4NbL1j2LCG6EWgMG4EQm2vARrNrdmL6zGox79oLy6gibnT5A7XXGrkgk6iCzxtxwYq43ZkqKorEPnfHEmTFQn7HB",
  "key42": "3YX3Db4cw4Vz4CLYWuR6TKrZYZDCjEmmqBnzX4UZ2EENv34o8N1BPoTPmCcRE5GCUdGu1f15MS6jR3iejfmLGYQT",
  "key43": "3aebiRD9z55dzFoCT65FfFn8radVGcYYkj8ScFiXUFHVBiN3TwVTR3RR64jXmp3PcAZ6TmGdRfPYQnp7YvFoHvYz",
  "key44": "2nJ4s2noxKfs1hH2mrNXm9TAXcpQK3H7o3eZbkhKJjsQQpJFPAboaMF486Y8nWh98StrpvroZyPadWctmSwgzQxN",
  "key45": "3pvYf1ePRJCMA7uFoPJjG6vY8AKjA3wW784z4oF5rHjJR4XsHEDUgxxG155oeYJFWyeYL8kdivCZfnRgUEsHvawt",
  "key46": "4pvyxLvECNC3F6JwNgLqiZfPcHyFeGpkJrZ8CsJpq6BAeyvBSPxW1SYcLWPS8oQkdMfcMtemDvRkqpMb7R5NNxtZ"
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
