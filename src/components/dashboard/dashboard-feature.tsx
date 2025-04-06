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
    "4sZtSghV6dHnXe3cMe7em4uMoyvHjvcm2hnt7xeChL7uv7nx9y83NFKGcSzQtmdJLPsPSZhRbr2vUvYS88AwqkPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27jeaquPX1M1HwUvivNyM4tikRMSToJtzx7dCWrAVX4cZCp9mZws5BCp1PfikUAdUwWqds1f3jRjnPm9ysoDrPoM",
  "key1": "45d8NyLMzQsyvg7wrifuuAXMGEEbCq3uz3Za1kCaTy8eT5caL3KohqL9bkLsfzm2Znv5Q8nHbCYeDcBoXYg2UWTt",
  "key2": "5ifdPaVZZDxc99u2EtfxYA2HS9hTpe18rncFJqJDJFbZLgeYFwX6sv74yppQbgB7QtnBGZSVVA2N5RqK2My6buhS",
  "key3": "4gQFJ4J8MZ2uNKDamKM5AUazNtoLp8pjcVrHnffJXo3KzeULKZQyuRjqhY9ud8Jbdu4eYbhZNb2s5VpXvECa1sYU",
  "key4": "4zSNdV18AGRTDHCPWnq82cMUAxqnQ47gDRx2TSqNpztfLAqyNB5aYiZfqbVZqFFhT4BWrsQ9FBDW3jth3EByNgf1",
  "key5": "5Cj2Q6dtkswDu46oSXG4YWDVR8xZ2QriyRr6hLQ2LKqVLCFzgvqPT5tF6wbqhECc8yxGjz5jJzPaTfbvNw2bDdQz",
  "key6": "4RTHQyGrkRbjoY1AcXmR5GsejebBskqXtV58icTNNBfw9q3wqrxCx3pCHYdxuvrV6nTepm1MgdYYSi3uhV9ochmy",
  "key7": "o3zuSirrRV5EMUYGxHyk7himQCoAKq95mLp8EZDkrGNrfQLhcjv1w4Gp3ZPKTeLeTjRrwwMG2hfyaK2JUYW1TbH",
  "key8": "3ShTRk3s1xKm2eCfWQRpUwbVieTUZugkdRUAFJgaHsWjyfgpA19xDbHRH5upDGxix1V6GhbthAbS7i5Qgq5Wtmek",
  "key9": "2Kym6tE8f8nnDZwi897qSREKTuchfqceAYwrK8radwVAtsrxxdjFKDvinHUDpoK26hq6HQKhYFdfG2p5XrG99E9r",
  "key10": "2Q3fahL3EFFaR2cdAS5iTBRK9aaGEv52mvEAxuDXSZE4JBWMjFjRpDn2jYoVseCRtgYAaY8vBaHBr2ZjUVaA2bQ9",
  "key11": "2fPPTX7bCjEMcBNQxrBJfNxBBLZFMy2wDcuE4nUTY4Kc3WJcFNFgW1Wg3BjTbk8fxZYk4nkokEjZmMuRqaZUjoFN",
  "key12": "G9DKCMWpUy1SpTdGrwPex2kBNSafpH3Cpsv6zLaPkFLhUPVKsTfNEEDHzMgxLLP9jY5VXP1fDE92zkQgUMY3JfR",
  "key13": "4sYs2JTWBHEJtv7yJn57NSY412hXvV5GJFTgcNeHDF3jE4rzapUG5UZ3e2yQajecvVVJkrM9VrTwdUScjom9bYyg",
  "key14": "2Z8Rf2hYq9zmGypCffcu7G6EptzAu1cwXL983a3x63GgUUV5Au2HeN6z18mdkBBoocpMCot94e59VRUPZasDgqYo",
  "key15": "63Y3w35i1k2QyVjGEkxxJ4sejazxWdd2r3UdzXVf3SsHJNTzbAU9FMA3QsdE51gCxxPVugZfNS17c23BaxZEaoZv",
  "key16": "4Xm8bjZqqjyh3zELQ2VrcVjfjEwWYRM6GrPPtip4r9tXP4rAxqe8FoGUZbZxv1Yg4RdTyELdGdonBMV7qMLYkocj",
  "key17": "2KmrGrQkGbYPebCHGjn22oEHidRViavqTA8u1pwf6uuVVGc34H6UijmEjvRHaCcPRNt5y2nxehQAmefzgiKqsapn",
  "key18": "3upFC7RP3TkHpZe6PfdaQFZykCMqNZWPwjwPWA4WSJuPjxRFMy3ZDg8nsotZdo5AtNFRamVYL622U3NPCQ4kaesF",
  "key19": "4CsKV51Xd1wZdY41w7dk2NVbSwj7VJVWp6obJ7vndDQhEZkLS7boh7CnBPPPp1gN6mnGbDkekFhQJJHkYTAt43su",
  "key20": "3WkarrqFh89kdmbwxEX22UVewSuk3YD3JHHzQwpYnb2Ec5UCwcGx18pQ8TqJaYUm2EwaidmJZJYthf4JzQpRokW5",
  "key21": "3CSWHo6gqQqqWxEmy1vXW6juHC8DYZrnKbCtWbpZgzXVf9h5kBovfuxG7RPEi586yiQ4sMuEfU1WBrQti8TGFsSd",
  "key22": "4KEdVuo3T4mtbnSFLNJ7id5iBJtZdwpumbwT2f35b3JVava9GVkE9AmkyF2PFwyNaw5EhYUDdf7QgHHdQXCWogSm",
  "key23": "4mFiMAtstrq9SVnJ5ibCTHDNwndHWgGnrJ4LJA6Gz1i5SjZHjUSSFeRTZDakrJVDBvvTkjhZKxp8AAWKHu4AWEUc",
  "key24": "4Po1aX49pL7b89H2bzBZmgJhGQhoqwgnDEJgf3yojLA2tzYUroKmJMX2o9jfvo4x4mQENia7D37dn9AixLr6WiEd",
  "key25": "4YuPoK8nwmb4e9CXqG5DdmNyRzKkq4kXiEhq2BmUokgzdfTkcX3EhFcfPS47fswHmPifcCftvVYMCpaMabXb9fhv",
  "key26": "CuLV2jTDyGmQ95qKmvz3iTnULV9FXYXHwU4fHYTNfsMQebqFquhbuj3vua5dGsjZoXBkgWC38ZBSGwdkZHUsT99",
  "key27": "G74xEtiku3yXvq4LrzoPKKanFQzrrV6gWyZq9zJdc6LqvWMNPPB21pbQqxrT1vHpZijuEqEdT5mxzV43NYuETNa",
  "key28": "54pgTq6JJArphp9NjDSXtvx1wQ1wmZfosQZXYC27m2uxxskNMJQgEMDNoAGv3H4K3RmgCcEGcTxjZoFnmZ5wrQR",
  "key29": "5L8ryHJvDTey8VJshrXKnBgyFWQeNLvYAMwmug44B7fWFhATzs13LEGmBAjFHFb5Ac1JdPVyqCkTboA3EpqMdET9",
  "key30": "2NaAgb2v6LRGNG1eeTFPP5z21KXnR96rdYKnka3fkLTCm3eeEzZrVMFBbiitKN6zwE3jK1tPD5sWLefyMTR3CHtD",
  "key31": "5zpUyMz75dZUnehhvsTJT6iu3aNvkxH9NAppVTyc3BiBfhEV4kupTEDicMH4sFgJKYnpd5cKQskXTUVRJghjpKWp",
  "key32": "5YhJ5HDwnMqioB1bf5SNeHVn4nzQdARPHYhwvGqJUfk5fBRKkn9syPZWvR4YyTNGs2oJMUsLJLcZ7zFU5LS5nxYY",
  "key33": "4qbL18cuZuXop9j3soVWFdbGBsswoWgSoex31fobZnWnaZMHq9QhWcNCPXALg15LWcyzWBoRLRWSi9fA19Yyvdo9",
  "key34": "34Weoekx1HPqWgrZ4yWqsvybhgJkX8fooTyBLni3MjqMdQTxkGHagnWBcDrxTAvSELiC32WGVfYpqRToM5KToEH8",
  "key35": "5Cw9eDEtfaqoF7jsfzRjaW6ETRxa7Rfw8aV6oEbA4njhuaW6CEQyGm56RpEqQbwfvdoHmegXaNHjppzrFfBAp1eK",
  "key36": "3dRF7UotEmf7xEHyvtvAGXuigLVhdCVRNM2HdE7fhF1yahtNhnWC7iHfCT4sC7CWL3vGYua5rVx67LZXwp7gZj6s",
  "key37": "5ypo8QHxebPq3Cqhp968JyXmeeLrF7LQoQqyTM9S4cvbHdirdq8nrptnr63ziBRPJpmHB4ZASUK8s8s1fThRQKBs",
  "key38": "5AXupmEzLgfMaga45wLFf2fyjySpVJex6kzxcHLx9aepzDu7dRCvT8ypRok1nCAadvwtneV5rVE4PYLy7DTZTQYZ",
  "key39": "26gGuLz9hFzNeaNcp245fnT12fzq2WMdnieE9Dt2Wj5ak7AYif7QmtG6RueMNAEgDaadRH5ttXwAAifaxyH7yY1b",
  "key40": "2jrQKkwwPnzj5NbV671roQXzRtQSBAEruJE8JhWmxUTZhMsW3gsxu8uYCHkSnNwRms54sjppR7xWeYjHXfq7Zi6u",
  "key41": "39v46HnuvWpvzcRSEBNh1vpaDiYRobGZ8ybM1QzR4ypvnBfrfmX3AFagz1Zr1GDyRawnJ5bdVUAyyygatFPWcV9o",
  "key42": "22geCCDtKucsAt6H41s6F6B9VMzmrjbuxprFMTygXZGKWWWHVitFr1th2XJ3gZa1tvuDPmksRJXjvZHh5uuB7GgR",
  "key43": "27fFG7wyXzPZn82NqsaxmUb22ypbPNdZai8uBgX9vJwfTYzPSTfYkDXjv1VarAc2v2bCFRjacbE6fkKQrwFAAuVb",
  "key44": "3njrEb7LfD7LpY6SmtMkfq2rCNMjW3vdvb8Fhuomqe6HkwJKp8RvooHnPtCsiis2zCAcGQUBt284tug7f8AagULR",
  "key45": "56KB1AcU18nh1qandxcLSJp9kegAw9ztotojW1F5XSsD8aVZB27Gj2iYLJfQA56BFy5YsuATRshuBkicYoi6AKxd",
  "key46": "3Q86pGrZzTmc7pSF6QzjPziVhGjQzVeKks21UiMq5EvRW9VGFSqbpeeYw4Rj1ZhckpSQBzcSMiu1ipoAwhQKUxk1"
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
