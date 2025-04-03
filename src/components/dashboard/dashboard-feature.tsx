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
    "4f5jc7F3B5BvnnvByivtdxsQqnJ44kVp67q4bZd5XEWVPiqB4Fg2aSWcx3GstUoaScr1w9kEnE1wQyrGKC1iDLFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33yhxtjfed481Rbbj11gNtMkTR2h3yGosT6Zv1HZy6tZCQ8dxWohJyQLnc5YZqao2xs4TfhhceiU3tJtNCLWFGXx",
  "key1": "5tQ3iD7zTSntHQrLqwe7cS3ZqVxCPQssVPz3fPcKHWQ57hqf3TWzrLZskVqCAA2TnBows2jw2rQ9h7DwhJg7qpZ4",
  "key2": "yy6b3XAbKnuwSh4nnwH5E7HXY9MrZ8KWKsr1E4qHSZfZJkYNn41bgXdpmCYh9Bj1DPXmPiFNZKw9ZBH6qHqsfm9",
  "key3": "4mocjmAMbpCbwqB2ZPqQhhDrkNQrRBEzzK43VJFYDvbEpsMNqCeh3iF4fRdH4U5CuBzCs8GZHAcJpZM1UTNzaBMn",
  "key4": "3mqvxBXDwiA46bgGEBGyEsWEnM6Y362a2qeg7TPztU8URm7t4bzFmBRV4BrgsCS7KUUCvADZV1CCZaYGfHvm2Unk",
  "key5": "3No6zGoQGBzarN6bZTLoyhn2FrE47ECoE6UTAA964mdmXCMKCmJEMykVUpA1mmusFrkUYXk5BPxRdkSybpBeX6Ax",
  "key6": "2Qi2oEVuwoKvA2RQSjcb6EzNzP3JS96YVWidz5SpCaJrA3t7XTDZwyuUs35cAiQPmYgoXQRatUjvr5PhmysrWoH3",
  "key7": "3iGBzPVrQjn3r7cBVXL7J9NKUaQN9QVWSZrSsACick9Wu5tfKUEbKUFxEWZZUKBSPpLdELvMCwHC2bXf79GUj7Hk",
  "key8": "3HRCTbMWoiBQc3Unf5qeWqXGC4YZha1MJ44KSyDtJmwCmsJ68aUKnRDLpWFtsWbhutNMgVTA6gUmcavMaXowTAmS",
  "key9": "2fVUYdZBx95agfCTqar3yLcsdVtWdSHEsT5VtZw7Kq2XztQ7MqeBmZq7vuiAyLpBSY1UF5L4wup1rx3wNPzWSGd7",
  "key10": "5XrLXSswiy19fFv9xt8QSemJVLfQYTfv5EXckekxJDMEMaB61W6j3PFWd8oQgGdmjfaGB51pwA8LG96uHiJ8Nqcj",
  "key11": "29rSecSe7U3Hw82DdVBJyC6bhWKsu7KP3pS3bi7m7zEagbh73jjMeTdfFQDub9idSp1HH6oxWhCXywja2MBkA4Dg",
  "key12": "2HJGyGsAnWwezZVtJ8orPULFSRZ2wpYWHTD5kmN1fvHjqTNvDSY9Yu4ePAvwtcSiVi56Y9oVrjnHrDVkpc5ih4pp",
  "key13": "5WwsHrRaExC4tGGtvP56FwY7rTkZYqWknwe3SGTfVDLLPNS1UrWrPyL8yVqRsybBZV6Lux2o4NFHyAAaPAXXi1Mv",
  "key14": "5LzfEaYfhvChYFmdXpw4qVYT9wRWcyxjVWj7XLa7WgkTifAUXnBYNrwrdGRwp6smXBfjuESpgHXxFvMwUkP77Zxs",
  "key15": "5C7HriJpMSKtqDubf6KpXMfJ7FTvjRE6Le52fs3ri2qyY1dVtLb2D4jrzgoZYsFnYnytVxjU74rjbYKvwHbsZYMa",
  "key16": "M2CbrJGmCmhrNmdKAXERDTrAtYSauM4GvWHPXifTxvDsWwHMThY6aKGXqmx1gEkKqzKsBWUcEtS5tQjs5Q7p8L8",
  "key17": "5sEtgqRFESy1stApuNh1E1dscVfsZZ4X1Cyqh1ZWfUVi7zyjud4zM13qDk2zxd1CFxgPZC4cq5hCoy2haRJV6zj8",
  "key18": "2JT9Y6uwKL9QPpWd2V7UpkSm25f8chjxTrLqfv3v4Vc8yWSqGYuZMF1LMkMN6Nmv7LBJSgfE3n1XA7TU5Gu8Uj2u",
  "key19": "59xd2kh5uXpGPsDW3ZQoPM6G3hGRdmn8k74nk1gVGvVqfuhjiP5BnQB5uSjGRrPK6EABDfHxphEzPWqwRCM7zpPt",
  "key20": "3NhH1gjgabD1Ryjf5Ap7bhpEzB4ijB7A6kyg5ughx2N7CWPeoB9oyTrjdf56UyKBhkZPTCKPH1Qo8JHaFo4bDWrk",
  "key21": "4wCVSAFV14wzt92quAwZXtzRrPSriTckUAwcRfj2gohB7nKko6iD6wxiiA5eBPvTncGo6yY4vJpZmQg3nb3UZyp4",
  "key22": "5du6LyrnnbEz2YL8RA6qjqSUjWtSUgrE9v4Usam472GUJLwiagC9PrtVxMhMjbWGnyrga6BuxDHDxYS3UTgBMhmm",
  "key23": "5EEPBJosa3azKhFNPfzmqYMAdcJjqGfZbjP6qoMS2pGF1UzkyEsqk89XP6Fd6rXuLww25ATLQxfED1J1NeHnNoD8",
  "key24": "4qDHuJwhod1JQT5z8MEFriYTPVjLen63VFi1YjoxqGLwS6h5uTHYSojruLBz7x78EnwQaKzg36VVMB5g6392p24y",
  "key25": "5RvUfjk929FDtvptehwjvfjc4SNqHFDiHCabVKnNVpWMPnoqAizbHY4k7tERvZkwfX1X3tZHmdD3jvtCbHConzZ2",
  "key26": "4RkRonmK8PAhAn8vS9GHzNEj3PEYXEBWs3ExbMYQktrz5u9uAGE1eZFSDD3SWHT1PsKeSpvg7Lsdwt6Be15JZXUX",
  "key27": "4gaa5jdP4tbG35dTHhT93xhn9AAFGX4buriYDRTF2QPtF9i6dGT8XoLvvm56YGJHtivtjJLVmh3oAh2oSfbUYA7W",
  "key28": "3txD4qLDWNsCP2iWYMokh8nZZrFoLaiLJP2NHHRMFyDLgeSGGWSmsmfrAXyTvuyj1tebXhdrVWdUo36kiqCMCuSM",
  "key29": "us5mkUHtVoQr8uAVyKtz1Tgyqr9qo78Z3oQwQXi3Gc1KvSGqLgDe5iSPQMrspGcgVYz5bCCZdyy6xuURcqg7KBu",
  "key30": "4uvPQTMf5sCc6gK5VwJLzvtjvjLmazTANSDPM9sNvhivg77ekXWo48teWf6MKuSnKRefEXSkWzrTecDHPPb1AP1d",
  "key31": "5382yy7dxezqgY551Dip7u2c6B2sB4oxLg6DVeaTJorLax4Z5ycHvhuraEkfWfpwBos6ocsnvTd2yNy6qEb1oEPf",
  "key32": "XjpxEorQSLpZ3myeVKV4MPr9c3hugjyMyKwjoVxYKYXhkWzwsPaqdfXiQv7aEb9eCy3p1J7ntDR34L3RRRcmUvT",
  "key33": "4AfEakqdVvVXRZmDGCiLtTPTjeYqZtFVDLxAz4FANGkZKTzPHEif3ST5VdXJE4qBwkpe4VGa1mJNcfAuEjzrPPry",
  "key34": "5WzN4R12VNfHXEokK5tJG9VHfV4gM8aEpUCS6YKRmWxqy4DiRZ8cysvLkH4wXyS7QUY7HbEk9yxbrqUVc1EZkNoE",
  "key35": "2kWAzU8VHuNuDBJ3wg4HUYARaJepGPJArUoftX6Lhh9Zit8k45yi3DYMDiKAFYAiAXq1sC7t5FMKZyFqVgrqy4eP",
  "key36": "26bpr1jxRgKqo9doBYMrwAEWKP9KJRjmMKHebaNfHPkaGV3D8XdCNsztTEKQYzo5NiMz7arkheykTyn8YhFDk9nd",
  "key37": "3KqRj9rsNYS8aKA1zoaHT5B4SZx4E3eNkUdMHp1TPRLsm95mpRBw4xoTG7ppJwA5K73VuuwBGv9FLz21ZCvMRHfu",
  "key38": "4h8r8a5sK8TBn66NExGU8yymjx8djimy5zmRitRCDvrmjzn3GN4scVot7hMpRDAqVUmBf5z8zqQiLUr7nEGapBRT",
  "key39": "4W8uqggJwTMoadC1Fgruvc94nmQq15vxZEpbqDGb63HbvnS2dYzK6RmnVYfpdYh9GChoUKHaRvZV56CRLffq2AGF",
  "key40": "NpaVjTWKfBzpsezqyjeXiz61xkV1GqCccF2LDvkeKUdqbV2ijpYuGynu1nFt4gDMaafD2KjivHVSjQ3GzDrM5GP",
  "key41": "2Y4GJ41m9ZANABFNDJjinP5T9nFYBy89TZrxgKh5ouCcuJkQHuz4RxkbSSVkRnLQqUDiv9shKkQDYLk8aYcxK7Et"
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
