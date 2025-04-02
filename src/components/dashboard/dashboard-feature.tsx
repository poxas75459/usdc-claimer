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
    "5BafbwjfRsQeVWCcGE1SNHCeoqsuoLDGoUSr2kLRkBuXXqVRSVxkrWmFfKpYULAtuvWpktApxxpAPWAivRXgg6TT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4toYn1BQRvtDa3z18yHxgcoLAjrHZsp54trReJ8R1V4oP2ZMjBgt4KCJSca1SLNCSgBjQqtKuzUdqWWwQaXhN7B5",
  "key1": "3T6AVg3star7pYsH5vMADcF6mYT5ihvYmnftohNiGeHq2Z3uxWZX5uDi764Kg7VJa8b3FNJLV127go34JoyV1FVN",
  "key2": "2bwWxjvsLxtYKHHy41E7yxHSv2dmhwufz38LNJB3txRsTHzdAZzW7UQ3U8J237PsyLYBJr5Q8ecRhjq7tYgtw9eb",
  "key3": "5XM7y6e6yun1JqCd7HLWrQ5hQiarheRZfxpzibYtWvHJtFxhtjmrs5JjYFAHQuvYyJBSrwUk9t6rwB7ATAtSvuG",
  "key4": "3kYVHLXZ95HnNbRRRTsRmwwxUUg25eenMfiVw7aHb88c154gQJWvjbGLAPqXBtwLSGacF4XhxaGcJuDz8eW5hezG",
  "key5": "4AR2JDGQXHLNEjFiqzN7kCT1rzF51mkLYqrZD6WGUamuTpicBTTyNRSRriDY19QVweSJYdtMBrzR2duj1YxF7djA",
  "key6": "2kN3kk1msv2Y7W2fV69rsjapNXa6oAsLMAT5QBspQnERiCTCFn3DFhSsb49fW8ZLsf8LsgR7WdgKQrxprNGnmhWd",
  "key7": "5PTdJsVde74fPnH5Rjwo84q4f14ozEH25tu6d4JcctbYo7wtxGB2g2Dhx1o3KWNVHGdHTvSkuyg2k3WT2FhYRxuw",
  "key8": "3ZutmsAc82UpedC1QSNWympEq4XLCVdnrxSMofvGsgdS2NoCeyyWrMtPqRwHjbSQ4mtYgM59Qvk81fPiCXtg5QfH",
  "key9": "29rHgTvrH7Sfv8cicRkzRPUjdpchvRYMCRx6STya1Jsr77qYe85NevqTMr2RjUmcNdY21fb764YwA37XYsjBHwhf",
  "key10": "4QALCnVFadVwX4x9s7HVWgrr9axqi65p8y5B1AoH5tLtvjMZHMyFsyiLSXrqE42cxH8kDjrLWH2NTKsWu7VbaZWc",
  "key11": "nXMNsfJCESUqBGah235F3gkCwTcnvcEG8TGn8zPe3hYKzGmyECgV55ywyEEp1ZmM18Lp6G52rPyj7JasLxhcjzq",
  "key12": "3bnnvrarrRtmUEGnSHLxLBQCvSeXL7Gb92DFKY6q2p3nZGtJVNb94PasK2bLBBh2HnY1fNzGryrUVH1DEq2Z3F2j",
  "key13": "3rP8iDmiiJT8yYaQsu3WjfRQt6NmGYp4v4Ap4M8PSTaMv3mxSHUzx1e4bNL1nyYLwtuUw7eYwMqrmGLYweVhp42v",
  "key14": "3LXumyYh4iXCcjijR6SnLs9Fk7CpMzfwvpMh3YsTeypnFMRx1cnBf54NjXbLTXjRJEumetaVeqDd1sX6JgLBTGtQ",
  "key15": "3nToaz358xcS1rSo4FHrPTme5TsNQQpgtmTawPwohEQP12zitFefqPav7mNiRkjofnLh3DwWgR2c9Cw2qsxwp56o",
  "key16": "3T5rPqz8GAfaFWajJMAKRsKzytcMPB8LYWCX8Nzu4k4iHSZyUk5hZgcE8QQZ2z6GQsM4zUxjugCuwPNpw7jFTLYP",
  "key17": "61acGFEi9ta6S2AwTKmJnzLSGEFkDnNpxsPrGRsv8UgSJqjeMEJYiRmcRGAg9U8Aqyqv5MzA3qVhRidtc3tuXU8d",
  "key18": "eVdmLPG2XjbgakV8KLpyca1pexERg8pdEVB9pfq7zAVwpDpfDgXcH4BhVA9hihE4CVvCwc4SVcB1Xejb1oRVmx9",
  "key19": "2Z6ELasw1rdJW6Wzq9GmfWD4DGK7CyQiH5gvL2EwxydcLHYdY98kC6aYzXSJYcW9sVsVY2BmCi2yrc3hSaiDGBvB",
  "key20": "2JQsECBBxXDyyH6xCZ1zwyAMmoVtjPvUMLWPkURLX1oSDWLAFv7P9kPCGCC5fmBrNLAx8bwdJ33SGCgL4cr8iiQm",
  "key21": "46uytvUGFakAyjKN17h3qw1CQ4e6NfNY9GcVzEo1nBxFVCRfsXXZGkeCeRFPmfnDutuPg4HetxEKhrtcKpGxYtHE",
  "key22": "3SS6U22rRPnwCMjPBYBhkWqKSQcuciSWHKDwRuaftoUsRpLSePpZYAoJvN9XDtSsPufN9tTVgrCniamUhEBA7qgC",
  "key23": "45fvx1F8qopgNW34kQrjqGi5RsE5CYnmvtX458rzU5LsTXutQQ5xsenE7S3i8ijn9nuEsihEmkVCUoNUnT7ByCWX",
  "key24": "5qQcpaZ7zrpfDf9TGjWxCgjkpDEc8hHRC4tDJanRBvwDpG2M9zj4oMpd4RKjLHaQbpHM9rX6pjd7qfZLAqrqwnHk",
  "key25": "23bNTBdBLVxTenZdEBX4mNTHXriF3xhQvn9aaWdf9vVKT1qtcs6RSEd3SvHxxc97yUcxT2fixRLTLMEWaka8WdkC",
  "key26": "4tqMtVyVcRYHFnFHcBXSHbhE53Bhcf55VSoGxjdCK8xW838dBuW774yjAR3SwQB2heMSrExMnVKU1t4u1srYDwdp",
  "key27": "Th2YgF8yzfM4Lyq6Ut49cXjza8b9gXCtzuTeBcATuf4eTyNnSADQN4bBJQUyNKvz6BiH2Erzc273ZJvjCUGMYuB",
  "key28": "5A2vyNyqtsAW9QQyfzpVEGoo1gFjikWbPadcPFrhccUAYQ69LccZsVpFruv16VLbTTMN4KSf1bW3KuB7euBNPM5p",
  "key29": "4QXedKu8LbzDhGmhGw9g7DM3ZQbSH662ZjYU1q6dVL83h6ouxNfNteBsCKSLBPGRDuSLNjLUM1DQb9stF4KtehU1",
  "key30": "4Q1g8ieXpKs68kBPD27u8S6165wK8kp8RrwwaAyDP6jHVZJbPo7XGwLVTvCcH4MRi1GU9sf24DhEdRjoVvxGoy75",
  "key31": "4eUp6KBKn955ZcyAECmGxoP1HV83izguB4rqMmS72Vw7q1CBhyrxBiaPq4pyYYgH1cMmEfRUphqFQAF3WXiDGVWr",
  "key32": "3kkLeiMBiZcnvwbGVbi5sJjnGmreWehrV7vpkg9vDQJZT1JVFWx4NLD2WVqHMgbNYCxVu7d5jveG9yp7XomUXMy6",
  "key33": "4VMs8UNNgu4kZ3cuKuojVkscy17Qr6vf7U7fjJXFAv7MbHi9USvsDk8SXceMwYh9QtkfsoCue3cWEKT4iMzYu9UQ",
  "key34": "5fpWaydqT2KwwVqAPdap2hfomjweRsNhZ3dWvgJqEBQx7mVf86XpXRDad3Eoo63xxSRFDwCcy7nb6FWsQ7m79MzX",
  "key35": "2kd6Lfs8h2USs8stqPR8QgHDJKtQ87Xsb2Kht4vAHiPYGhM1wcmdkg1nyDgnD4696igc26jNpM2uFVhEFby1Mxrw",
  "key36": "65dgQQBbJe1Fj2DhGiWvzE11wMhBkA16H3z2QVCD6uiLyt3AKxseRra26M5QwzMF4Qu37bhN3vBfdhbd7Dtd67WQ",
  "key37": "5bkrG2s4Aa5aUtqYc4qyTYzWuAJgGd1YQWxWGZyPYuegnnhJZEo7Qp9iCf5GFkW1Jgft9tDCPURpb5Jno3yvon8M",
  "key38": "3R7eL7UzJdCjB6kUmwfW96JXdsMt5ZVKSBMg4Kkk6ScNAKA58RmMKdenhkYBi4DHk3TntyiqUvrvD1hQ8L7vnXie",
  "key39": "44u8p6o3CFsSo7uiRAqi1roi9RDPK5R3QZTo8L71GtP1igWdwLBosErTEY64TEoDBgYBBycvVTnCiVvM3mgAzik4",
  "key40": "ghyXq7qUWSDHBtLdrTUhUySphVx8eFQjApywqbFvvisA9ZCiCwF7eTvjHJa41DPH2yrt2ct7mtUwDuMrrRc2ZuP",
  "key41": "24RWkrZWhUm7jtCSnvufGx34J2HHYVR1uAYrqyosNueXXrfPw1SNbs1twzXUGkyVaRbeT2U6kuSH3PdaAZ8aTMQf",
  "key42": "2jeaqKWTae4EW8ivJxFuSGqTAqNWjJdmW8Y6wyfCJ8B1U9nNRFbbnMz9GkeGSmYkR57DA7sewCw1TuqwPbMvXYPW",
  "key43": "2tATgUbZFnWhB3j4DBQKd2t6pEe5oi3w4ydL8PhckAzbhtM8khc3EZ5d358DHaqNd6QVzmnHhqxFkps8zZbFa4D9",
  "key44": "5qn2taCyxwajWvnNMRhmPstb5XZXBPphaSrcYxkvwhdsSsknCrhbZx8HX2wntUGtq13m5amZaAMrKBcvcVXL23ww",
  "key45": "4kGbpGFJAqHfBbgLRPSefb7VzwWqxr2tWG2B8iEKfFDmXexUyhJXUaQbqEMXMwakPC9RTR98Yg3vpizCxDpJJEFv",
  "key46": "42ECN86kf2ipY54dFaNpf1yueZYYHHdPev287CxzWHiTJ1snLCA5Uead3VymNHzCHSYMMXJwrebWzqWevGeN5jug"
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
