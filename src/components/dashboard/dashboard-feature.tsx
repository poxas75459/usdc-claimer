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
    "LjhBrwFDrq8VptSaMQALspbNtiiY77kE7CQ6zdNpwQUEEasw6DfPwi6bUt4pxNu34xypWKjarSZpAHKf3MUxcQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59SqBnzDoeVwUuXFZUgc1oYRuX5diTDmHVjhyPvqMYdVGtFiny8AqxHW1HVKRvr3TBgAXRA63da9kuY1AdD7hHs",
  "key1": "Y6E1je74g2j69TwinM7oV5v8zXUivnLH8gPbW3mgcFrUP4xxvX16gigLzVXGrT2kzs9sa9hij7zmpo9YZ2zKPwF",
  "key2": "xU38nb9C1YtSBvArjsoSa7gmpSTDSCiFPDSLk32xboB9Ho6jZzNVorzTxCeFXUcm74SegNhDJFase1Xk3yazW52",
  "key3": "36WGVFWiLSUhbzVXqPnCp5VymYSnzkuLWAGfVEuQwzUofPqjWDNRFMazDcMSCnvmbvt88bxk5vMUt9YhkJ6R2itd",
  "key4": "3h8VAcaGv8FBVeNauRfBpZjSUEZV7EmxRG8iF76emh52QUMqCZbD9T3vfbBbLy1VnSQ2JoYdut8t3aCSxggDoFC6",
  "key5": "2pPKSnPYeiSBo2qVatytAwScSgCubMENzTSwhTjjQrYQhyYHChdu5FwDqdfTL7yJhDraGojwW1CPNjSVFxN214mA",
  "key6": "3tazKTvS5WubBWxxa3UuZuiL41bv6omuEDuq7UDxsxsCUoCXa4i8J8oMNgrbq1AYyUkEHbjU2NibQRsXYRtJeb1B",
  "key7": "3ZnrfZ14C2AyJx3gbhqvGVsPdRkAmg2VV8vjB9jXJXoDrQipaiQvhq5CLniUb34BrY9Bgrx8enKpPDV64F32Eoa4",
  "key8": "2qrPwz8xdfuNeZR6XekG5ya1tarAsdHBGBpLdVtPqhhTuEcSD1fNboqNiTppNzNWRGtrHDbBXKeEY35Zs7Lbz5wD",
  "key9": "2TxtEDymZUfqcnets6apJZBBRFXcky1LjWc1Bmsg96Q4zDSRdM56QZCTynt3w43fv9eZBF6QBJZ5eHF946muLi8b",
  "key10": "5Z9tUH6AZ2ocHUAPHafHb8afBUQ6nDCcwSPG6TB1aYHpwL465PML9RDVbuoYsq5FkxSbFRJPAqWJK8UmeSRSdE2G",
  "key11": "3K4eHQpDRRvPnKCghRLH4pYaekCr2dMdp2qf88BRviNuNEB7psJCtUHDwRJnvsAa6NQWMEpWEYnRESwaWLpHvGrr",
  "key12": "4tMKGtXC1fQADz4eKq2cLcoUHZuXzY8X8hn9aAyy422Gefa5fvBdMk7kpvFHkXwmTXB3HeEDZR4vFnHZp9fgkvkH",
  "key13": "5ZrdRp9zmKKSoAUHYCkW2ZAz6wcx7H8ahbw4CHF1srtDEqDQgiUibZC3jVGwUSoiVBKtPNc7BrskEchMebmNxyQS",
  "key14": "5FCu52We26XcVv77UZjkRQxaGZ7zsEJBoM4qE8ZqNTT55VXNpGuF69JQA34FQaCc9hZ8UHj6cibHA36yT3orjqzb",
  "key15": "3CVqxH4SgpgHa4uQxdsWwRPaPfwnn8ay3qDagMgJqLCwkdVSnETPbGwgXoGp7ngmrVnsyeVvHyt8cpkdusgPQTvd",
  "key16": "fDzQXRFWNFN1PqF9gmdRWgYcKokBXrEWRXQ1tr66VPX5oaf3mgXEowSv4JdeYxWZQG97ETMGBV5KDdQfcXiQsGR",
  "key17": "3J2Fofh2c9WezYUfZm6NHngCTLfA2isM1mekgVncbFUkXeXt6Me43dFo4zpXdPBz2P468fLkL5jWE9RMcH3fcQ4M",
  "key18": "76NgE8EwSW5WavhPhyCAXsVHuKudcT2rJ5uHQjPBXgW7DaeSRqXCC1eM2bc4wRWLbm2rM4zLttTi2npFVsHdzsa",
  "key19": "4JdvdQ1oLgcHqdeCtfRLCVRs3dkiZduGBNWiDH2ToDQqhhwvejNaNSiUySaku7QWmjYPV6hVSqVP3Kc2n2LnH23W",
  "key20": "5qkRcHD19SD5dLLtA7NjFh9JmWtAZXkeMdmKqeXWGkkRa3Nn3k3nUCqnQwHvoBaAwaAfqvGNatGNmXVRFRqAbXte",
  "key21": "5H8fM2WsbBQFPwVZHKXDFeJC1EJWWAUyMSf4uepvWDW4nWbXspZtCozdaBWeBGRviPG8qJRBTXYaFQptT4SkAjWR",
  "key22": "4yg16fUh2voQv5svindV2AJPihKhqq4S4v3s6bCEzCR9DRSbfv6c3h8XGnayHqNQxZpoeBQbWFzXrS7uJ2s8fYnY",
  "key23": "oWNTnBktdaRxz1Mm7g6M2WZsitX7UcPQSgvth67PxmrZC6ifTppMGZya7WmLcx3uFh1D61E7YmScqVtZv4N2MRB",
  "key24": "gfN9KNQVRQxrVaWViiUVEbtqz2LiE3Z7pgo15TsTrABBVVRj9Sjp1fxazagZsqDo2zqWyQzKuC3QKBZBqeXJr5G",
  "key25": "39z3fHtQZ3kjarawdYQRdrsXkp5ypQ23EaMVuvoHMGkuHqWz2Ptsu8aFAaphseCP4ZLdXWPmzU2Q5xBtF9RP6P1a",
  "key26": "4StJ2X2mwyaDwyvphUHj1gfcVJMXqcctRqg7R78xoFUFKQiTkQ848kR652L1GG73FRcUgoxgeqXjjtxLyqbk77Vh",
  "key27": "4oEqdDuYwZvxTsR4KKt4bHSSU4Ngip5zRDWnfmiwxck22Jvwc69azzfJxEaJGcZhyvwrGKpjcVJaXnfmX1mPQmQ7",
  "key28": "27QuRmhZUXHkZPNSwC6XDBi94joda3ZkvBGRenxnFbAwYK4wodxCSBfnDtTvBR74cHACnvCXQNKu9ZMcdXGFkTv3",
  "key29": "5s5ksA5z3JJMSeCWFt7kGXsq6gkcoQN4aNNUYTf6F6kWKHvYa4wS7vskuLm3Etvr3W4NvTKQyAqhKNhwSoehVPo3",
  "key30": "5m1R5aoU96E13ZWpVrCE2R26Hp3pukDYieDeP1yDjH6P1NP83adYzjT7GXRZFkj7PRvm53dQY73Bckr73mbyq3od",
  "key31": "29937a5R48xe8wvZG7J4eSBBJDHtQ5DyDoPrxLWy6gMJNnKTVjGFMvvnX6RK4DmKYwkkEB1NFeuckSR8sU466SFV",
  "key32": "4rHLuew5WBg6i2VqbR4N8TtGjepqPn6ayLWxAL5iygKUh5AHn27G5ftmmm6Ck6vdbMLWX883frVmw4KmahGrgtvk",
  "key33": "5ZSNxr2ypY3DMY9Pf1VuMXbp5EZzRdjJjcqexcxPorjet74YKWipNpVRynnhpkJFGpwiiHuNhJuPszfFXDfnkQgi",
  "key34": "5kxH4aUrFj1AJu3TSXnHvcNdMmpQxW2RrQhd1zeTsAjh8QA85HnSrnfLKLNjWSzB5utQvT66BJYZKZ2vNTaJ5Wf",
  "key35": "VBAcTwWnaPwYNAY62zKr971zQFGbnEKRqTrdRdgf9rqfW47zEWKF8LDmWipcQCG6c93HDgpffEmk5K833zsK4X7",
  "key36": "3CBm8fL3TEtbyieixD5B4zRdDHKsSemZEjHGmQTFtMeFCHE4A1K4E8mwGDDvB5Vcd9uCpknJ33Yb8qeQhPqZncZZ",
  "key37": "29qQq1TLKAViZmFHAp3oefw3S5Hj9hK3XXTS7QzWkXAeSW8pjmaeGWDCWdAgeZTguXz8ZBQSFmwY6m3Gja9MH36F",
  "key38": "63kq2LHEGZ4apPqVyZ34c3aRuGdM7k5KcnqSWpjvzYT27rp7rtZz35ByB7Bmq8wx52xf9gJMUrcte25p96hukX1o",
  "key39": "4bCF2Hz9tFtCwNpyZpfsJvcqAgHRc1QL3nNdJPncH3mxRxXfhhaSoNsPL7vYsDfa5mLfoGoQq4FFMMae88Z3PM26"
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
