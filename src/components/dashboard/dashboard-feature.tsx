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
    "2yDrLbHCyjAmSFv9MubX3pe7LtqpV52iZ8Gavu7aW8oS2UBG2JftB6APWn8QpA4brMhtYMt758V4idyTQdEMBqeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e7pThwekGpqmWUDyccP8cwyK1Zzv3v4yS96C5jfHXkP45fYozKC97m2h2JGkzFWevewiVPqgaFviUcD2e79emQx",
  "key1": "r8A8J5Mdyc4QouHTCrAMpFW9xhthAsiXeuQK3KC3fxXR53BardL7u4bmMBpXihXEyxoJ19C2nJzi43aqptFJeQn",
  "key2": "2MWufriMro5qS6YmsRBKfkEdW8GSYSNamMoxLcCbi8FyZ9rXGASftKasbd7h7jVzChEWWzjH5CN2J6U2yEBDMahH",
  "key3": "3h1ygCu4zsg2v6z3XtgUiwGx5UBE9meJY1QMzn4HJYLQwtjFtAeLVU4zFJmzZucMmNAmxAV7xoa1jsvAYdYhjH8g",
  "key4": "TQrhPwgRFh6nKFuMNJz9Q6ZioGVaCrbndHhHifZJEnZSWiwiaNEdFUd8khvX1t1pKHtncJqvGUtgEVkz2kLy7RF",
  "key5": "5dn7ivaMWX6SHa7cUgnUnE37yHC5HwBaVHKqWDUomaQJXTPfiSwxnFNqe2oYAC1yo21LzYitrVJxhDqPXXDjeW1r",
  "key6": "4gptcCpnWRQ1P1dMGukaoYZr3DcekWEPLiiw6qB4xHDTFkrwhivifMEafKEjimSvNgKg3GKcB3WRKP7h4ohhj21C",
  "key7": "27uiN6EDAadsMoGftU9iLWHjE4VoXRREE2uEDsjCuwWDFA1HYobTq3neyT3MDhdhK7fwHd3iswdYEcPscdjgohk6",
  "key8": "4pGbKdhxir5z61DXjQVSyVeFg3sCoH8vWwit8vFZSEu1bcmpHjvayP6Vb1WpDGuM4nuooaegNNyTve6viedRXXkX",
  "key9": "3i3FqJU3s69aXShq57tgNJbFpqciwYqP9Rvjby1iiHnTVE92Vcw3FjRumGB63TZuRSyTY7dq7kTTGhNA5dC18DG5",
  "key10": "zdkVVk2MYk2x5H1bY2BZd2QQAMvCj9L5toh198Xr6ZGsv2oiHT4LX8HUMDXLNfR7ycuJfWWs2gHMvLFSmPYHWYi",
  "key11": "5YmcCGtABpnohp4Lotxn64oNoXnp5qpEv2nueUBfG2izGqcaGrdxVnASjXd2Jn4Y5N5WLN4Cc4f24MtkSYve8R8K",
  "key12": "525p3kSB15zKd2zr2SbN2r9cY6cNxHz8b9XSccLjKciwvCzSCWEc4MnuE4hUZHQshSNpFcop46yD8Yb63BeKdhDP",
  "key13": "XJKcR8a9eyFe5yzinohtc8nWXbp4wAd1HYrpmRwHM9uXNCYKxvyXWCCBRd31nvFNdzi6eQre673A3GbeGpeu2kw",
  "key14": "5XkuZm4gyABGSCL626EvbtkhBT2SUVRKChQWEzPH8GF3MedwExcZUWbM6YbS4nFYPTGWbkgsVRT7G2PVYPNuRnG",
  "key15": "7Ps62kpEEAw72RxfQaM1aJS6DYZbWw4Rd8FEZg9e2KqF7QWLNr3p4FCMLKxcMRR4ggasBvzde8XHmdSk1HJuqD3",
  "key16": "2xrXuzB9Ap8GpPJgtkmgsi6rfP6NEKQkLTGyKdZTKTJa2wdG6cv2N3mV6ndgAeZ4nPALad11W9kc6w3kvzwfWnmM",
  "key17": "61K6p6D3toAmjUSdZcKRenuySqssfScFui5HbSZLtNB5cajoH1JEnnh2ns4DELq2YNnE7eJKmaBFfWzZ476ejb8Q",
  "key18": "4VyP7EWic9fXk3MzjAieNP2ERjK1E3KGoKwycsKqMFMjANjTD5AChnPJYrbx1xDiDJgDCCtCABX15UUpov4Tq1TR",
  "key19": "5rF1C8F1cZiTZJ3RLmFBx4oYHQduFYgN54EZFksDTWVLHMD81jQVb25HSat31Jj7Xj96M7PRS2dp8NrfuMPXhzF2",
  "key20": "5QhtaSjC2gAmWfXutgh7u7so534up19CWz6MoqeeztpU1aXGPNugaZS6XwLFAVheLHm2bxMKvxfgxMzEpXurf81V",
  "key21": "5bD76heUMNMtqDhKzMuSaxiGWbnQCtAPJ7g18So2HPLo5efGbwYoEjSmkWMxB1FktJ2TKSttqSExio48fF5ke8Hx",
  "key22": "3ZZ7tVRhb7SAdLmiawGEaPiwypTBKRK4RNgQf9vfWWUFNRaMmCaExviUwCdp98bnuyVcStuAeHM47dJwnxWK8HhK",
  "key23": "5EQ7YLC5G4UvrfUX7pC53npdPoCJLxwNzSd7SUZ13wm3pexT5zoihRwLLFH3GHr22xAzuTTTtRaWE2XHg1ENBqts",
  "key24": "28DBBtpKnchwTG1c4chWzLgzgLrzmDm9g1kvfKXAYvUtKzLvaiRZZVKzbWPdrXj11PpFkLTvrnoJurSK42PhkXEe",
  "key25": "22uchtTv7zwdGqxhHHGpP9RkhERfGxESh6b6VKjatCCozftRqi2gejfnHXuVJpCeKEWdR5GRcc4ne8k42hGZ5JGH",
  "key26": "nuvGUhWDbYXRLJxhV9Yoos3uSpjxLv7Low62eJV9fF8B4N14C4oGFpxoEKqV86p2R8CtdhVSafVe2VkYzV3Ld23",
  "key27": "5SoBA3VvQ2Zt9KnVgQVTRtNNzdzeGJHyxrQdV17Z625qfyM6suDp8cYjnn7iVhjtKGCoGEPCjp7yNpupdenKg38M",
  "key28": "3HWcqbqoCe5bipxyRQLddEbMYkM2iNMpJ78MH3skktPPtYvBUkxP99QQ7Bozvy7vc97eCv6GezKkqotVnLHk4hHc",
  "key29": "2ZiUnpDqLHoNxWpMfV45WceGQEc38cAf22DHvFwHHnFpwpxHRpgetkGm7KWPwvC7Bn5C3Hx4fLTiwC3hgyiZCsRY",
  "key30": "2daauHc9qiiKbj7f2qM8NkRPsy6wA8djyVAyjbMEkYTvJUNbqh7AZAf3oWewXPoArU2jhGQWs5fc9AFTEiEGxiGr",
  "key31": "2Pwq5fYsueWFosJ85FVxh4JXERq46mhNhcLpcZgtVBkf3bhbY3rGEAAF1KDq1hKUcEeUGknxjvSZe3E7pvkDkUgB",
  "key32": "4qMWPC5gtxrSUaCYFQpnqG933zYD4mBSrpjQWxmcJGbatUnvZBX7kwAQDe65Z3xDZFQoJMyRavNZV8G2EgWgtAFP",
  "key33": "62NpsuxarQi6UkUvTwYTDPor9dydGP24CERvba2MeXE6ZC7RSJnBTTrrxhD7YkgtFWfm66Jr2szNzL2GRLTvAU5g",
  "key34": "9SVc8k47XmCnAKxG9ficiSKLtocgJWuxiJqSkY3Tr3LyiWCU15TYtVcGvKBHCqvmmEe9gmMzGjFeJh4KbPS3ucx",
  "key35": "H6BwpXk9JCeWvukVsSE5JziQjavHc4foca4GPWquWnovonGq12LeXQhJqR4VWRbUp1Fbu5LMKNUyvFdiNZdTuDf",
  "key36": "2MjekcgdDkz7jVYAowdTSiENTztVecRMQA169PQGa7r4KVFYn9qXJfSdgSbrmDfBqWrpn44vfFAaDPXwXQSivyeY",
  "key37": "65Qeg7kRh9xh3T1HQZPfXv34YaFAGgmNPd493hzzBSdxoJ1cy26x3EB2fRRsd2uytz5EJXQGnMBCmk9BHwkVme74",
  "key38": "2AVNwPDWRXLdj9o7rGcauY3S7ZfBZ1YEfxG44dXGHsfSEr6KUxqjexvAipJ55i72iRFDGkAT3prq689YdwAMZSY8",
  "key39": "3fgqw4j1oncL8AgPjoWZ1rakxwQ8qQLXiiD2La7MqtstB3HcYUAVTAgBh69B21FyDLA5Yw6JGTxsJcWJYpKWCX6k",
  "key40": "2CvinyGnTWBo645YDefzAGYR1svpuSx85Bs3dGZKQutTZCPjHGJvk9QMhtUYX2kpkMVBMoKdx3n7bP4kpuhvYu3q",
  "key41": "3wSaNx22QmGzhQWgNKTEPpbd4fZMT7kvsxtSEY6zpF9P2BVRPAmBzgmMtYWHhAwoxDGcKdo8wLEkBYjP8KqHETXZ",
  "key42": "5grHJW7Uu7qTUtfuRsvcEM4BfvZGLG8pFu1DmqepHw1CZsbc1okeS5nAQYQfLV4KyHMvR1MjP6PsS2YZHgsBN9Sb",
  "key43": "zqtKVE2VZ9gcVxGzco17qXkByhctMVpx1DeHbn9zEHkujMZjVCJauUg31Gb3r364DycQxGAab4jJ1FBfCDJrPkC",
  "key44": "a3SKeY1itN6vjzCQ5YuWZR7yer9ywxh5HPdJvqNDRXsusdCMj7eAEdbPuVbniGNdD8WodVcgpJLif91C7JPR4Xv",
  "key45": "3G1VJgw2GugArVQcbzEVjxpAqfLfS6ZrzjebnywyQMcKhe5egUP8ZqJfZU3EfdrfBP9zoxMhHAUzgm48tP2hgnoe"
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
