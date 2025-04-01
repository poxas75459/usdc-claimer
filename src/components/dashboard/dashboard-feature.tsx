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
    "3UvSsCP3mfF1pzfQ1GpQj1BRgshjJLeLDvMAMfKTVXJHNCyocBD7kMqtwjMgnPxURiLE6yArv6co1ppJdqLhtHqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32nJFJZrgf3ENYh6sy1iee1YZPCm1sgZ1L2zPHkMJScSAMzKvPxZwe3iJKHsr4tNCdb3FNs6pkrZHccPjq3Tj5QM",
  "key1": "26TB5WxM1cKqNPHCv25arNUSdnoqvGpYQ5VXmhABDuy6W3p7R7PsaRQsRjPujhLNNQi7xnx6V26J5oYADwZ4VybR",
  "key2": "3hWorSmgNggXmcLvJeorfGfALuBJoUDLxmDgnkfvxCVGAwxDNAdCbzf4Mdk6heRaDJdQLNmPBa9ZjAHFssJ1n8a7",
  "key3": "2A4AffQgW8sJcdyb5Tbt7AUEVBHFspw7HKsmM8Gd8GL78bzuT4N6csej5Eyjgks9xmKWC7ANVpFj15ixQH3p3iDy",
  "key4": "3PqQ4nLhuc4q2kfQWLMPb6FS3oxr24hqZCQ5KqCSQ44f52hPH6aytu8vgXj4cgT3YTUzft1zxnzvQeNczoG2zgU4",
  "key5": "2mVHHEvTKfcje3SA8nT3pFQQWSo4XAv11Zb7Nyi871B6EeNwAfiKzjLP6FnbSL885cM5tuWzrzpXppZ1ajmr4pKN",
  "key6": "2JxxJJZsjUQQKRNGyfVHsQYvZsSEAiDXU6twXXj8MGQAWn5XA6iCMb1MttiFNQHgWDefR4pZGu27BPCaseZUEuUe",
  "key7": "4unx4mUrJsqyVJDRzqMvGfLYmGN9Kj7v6vqQ45dfWRW6r26goVr2b4CkkFSBFEaUxusAAwGyDq4zukQWQmwB9RDL",
  "key8": "34nuuTCWuKakHSLTgqgWYyRiRRpRij36r4tgi6zpRNwmZnSJ4bgDFjkNuPKtMFWf7mnXENVoBWpPafVQ6wtRNAr2",
  "key9": "3ptD52fRwNpt1xsJJbfTE29Yjdg1UdGvcneXxmUYFbbEGwXSY9SjYt2PBM6YEo1oRbtRGmA4DRy63pzjSdei7i7q",
  "key10": "VQfcmA7LRQKD3Lp5CCBDuCigSZ17aVijuj4NiJ8Wyhoznu2r6bfppdHokYCRQFUCM1tkBDCW4FkMcNR5it4j4xE",
  "key11": "4y6o1A1voXbWcoaoDH2YTDKTi7X3o5bEnUNdEXXApmrdbUatpDbqQ4wWS5XpZxdhWv28DDuMsTuUMsVLGZdNKWmL",
  "key12": "4xDNwTgSwXsF8trpKPzyBM1NJsdUNFni4emBvoRdnzjiEnwVezoPPVLo6oSiUg8H6hYvfuhQxaY8pNrp4Ybe4NmG",
  "key13": "2EjXqSdN4pY4kbAcsrgywNWLdzM7Txf9J9gAFxxvm1GmxbyLSvMVvvNYggFtEHr7T24CJEzUo62owLc7Ci9HtKcg",
  "key14": "2gXbcKPjhSHbhJd9GBu15AWecXhXPdBg5UBs6pCjoeabYv8G8dz5hU3uaXpMBAfmmYQ3rr8nz81fCi7NEJUR1TGF",
  "key15": "3TTCk8zNgMquzrNPtzxTYGLtvULnHu1NFnaC8MHZ74t7VwxME2VzanDeSR7j3gBrQi8vfWxRbDxjfT4qUiaqmSC5",
  "key16": "33N1k6wPAFvVySZhb9rribGcjhuoeDkpWkaHYKhfi1iYp7HhEZQErWtpUqeBpeyGr4bvnp9yXob2X9HSPwaEk4iM",
  "key17": "36qMQ3Bd2PnSgnbRepZXRukAUxdjvAw6i8gnybhrcaPrDjpriueDqUCJVjPquAsXGF9ozzncstZQaNGA7x1yytY1",
  "key18": "22pMVKhdzNjFLxC2ahHyrQAuce55sEvK2Gx1Luj2vwW9DyRJJUmZu7VxXrPNzY5QcYRL9jC7rsANrTemeuFX8n7h",
  "key19": "2xq47pfpnVptZi11qV5qkw3qd6T1APHAo5W2ghEoycgmz8jky5zhRfrw6kdtrzyHJgJsbwyYzgXrY6aevowz6JYp",
  "key20": "21r46VKhpnFzLm9oXTqN2mASmJCf8STzH7hpc751Ve2gfmAKNKsACGr3bykk4Bo22wNoRUEwaNtEE2tSFA6Aakfj",
  "key21": "HQVrGPTXtss3Gyfe6mSt7YsU1FRDAbCpKeQDrJNd8M8UdSYCWqhQYZzyT6NmPqGWa83S2o3kEQT9YRbBUVYDzvs",
  "key22": "32eVrTBSoAd8pvHp4M6amHtcw7kp7YeXCoxjGTweYbNqvikPEF6cV9R4EsJ4MWmwj2eFZSHEJAAVTHdXUp1gPS4W",
  "key23": "4oLB4NTXNaAfYSG17jUaffEx8WVJaJYYsyzK5QQKEs7eB2oMYXjW7BrMRT8cCthfjomjQZeDmqHpHNgacp5cyToA",
  "key24": "4byyz32vrrCpSU6kbVFiH1e1fpQysLqLvhT1zpAV5qxXQNkCUEv7PjXK7i8vE2gGvGML8nRorbHABmqbiP3Mmgd",
  "key25": "3TfmQAqsMMhKrE4H3cwN8MSEzMD8e8U9xwyibKrGfwo9GDp771BnpWMNdWbJF2FwFh9j3wzPqWjQpRHB7BNjP6Ab",
  "key26": "2aJjT2DGpAipiy8o2bBo1cHPevY63jCEB2NVR7NLiRM1siZLWMCYU7Vjcihs5MYqhmXCSnBuPVb3j8bhxzQioRFE",
  "key27": "52pM1Zt3XbGeRHR1oSTggseByWHP9yj29vY6w5UJm1WwQVi6atytYY5TkZi1c5Tkm53ekC846v5FiQ7srJNnvVqc",
  "key28": "3fiPycuK85gQSDp2WbxR4g3MfZ4jVJtdBWyjbYs6jWDF667rGJSrVNYtKmnjnjBFLn2CcLuYF6J9LAdfveWMBpeE",
  "key29": "47iEMjPfGekrMbMbRYSNXKMa6CiEn7oemxfamG72sRRo2S2hqG2VEMoiY6zojhmVSwXTgCm4qndQzC7WFmHNRiiZ",
  "key30": "519FxGQB2Nv1RgeRtfxHbMdikPqprPfEuRrLCDxXxvtaSp4cbt9fH7RWniSShFpPsis7Ms3qaD32YiXEWB9uNnK",
  "key31": "2kBL9BWzzA3m8nKmarMmiC7TZHy7H62NfBTTqBCHSicRi4hCqaQMuU3Zhm77ACZ3QiN7ZJDbiZrUvEwz5Zzrfo8o",
  "key32": "mVhFGLtG8nKim9cvLXS5nBkJ7gtKL4kkGNfQYZL6QwrvpNZYkbQWtYU1YwX2aax4U3kMUSdigc26NS8sCX6jz9Q",
  "key33": "et6R1oFuFFUYXvJewRfEJDwuNSa83k3d13yxsB9MY51RNM3pCp9Wd8n96uD53ZwFY3AfmVy7Z3EW8DRrpwXbyk4",
  "key34": "3HDqKGYFDyUQ5wsKgSTmoq5YSPpuCLA4PwUvrnqa3zrCZJJjH8Fb5oVYoggLQoa6m9pJ1fvdAgMJRpLhBq2fhiMn",
  "key35": "36t5TxwYbBrWi2FAko8FvwkFmDukjK4rRYtYrggm9DdVygCRQXuHzKAkFBhPACLMBkXGbyxHsGgdrTuXMa3TtJ3F",
  "key36": "57Eoc5mbVCyHLjg25LpN4oWqAkRku5Cg6HPjyH6m4y6oeNSdE3g8hssrFKgpy4rUnjQ5pXfoSkyibsQzYPJcShrS",
  "key37": "2CFU8UwYchSGR3LScMfLZxStGwBznH6sLFf9ePkbNhtBSC71HdDoiimMu7aznp2CHpvENEndzkk53x7ufwpmXbG1",
  "key38": "rTQSG6xfUqWhs7Wu7XXpHXyFrh3P6Cu97Xd6LpHzQxsENCXVnw6Dd1Wo1dSNhc4pBnTrcTB13R27on9U1EBygtj",
  "key39": "MagtWnrb7RHTvV57N5ngsUUNnzFoWj8PKHHpoUep2cduxPXiTKKxU3UqePReBqw12u1zxP18iLPmbetwf6szPiR",
  "key40": "5TDTVYoQnrEwzGPoRFWUn57XQAk9jmp7yM443mpNu7RdiAVDwwHLPwBiRtLgQ44rhE5VVFu4Kb1eo6GrDW5p1LKr"
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
