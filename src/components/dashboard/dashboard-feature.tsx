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
    "4CVQesiUmn4QWS1DQMQcWm1W8jh6nXizzbFYVVkEpcL3JzEaJc9B4YmHcY4kBN2BbEAoqZEkPefQLUmyvR8tWagB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rziw5AFcwN3nNjg6PrBLC3Y6q21HzaeT3NsNM7BpnDqEvCCSz9drKFFBcKmWdnKxWecaEXRjNMhAwppAijVQ9cK",
  "key1": "4ocNhJsz1mu1RAzCnhtJJqFYLAHEEEoKekvSS5a8WJ33W3FdHXfWyYfeBdtsNu8YyxNFFZ8P5P1E2xGHKesk28JJ",
  "key2": "62Sm1oE7yPqwJVtzGmP63wFiRJPGmrQej1LtiNaAfzqSVoUAeKMuAAmB5Q7o7nt12kwpyEoy6PRirQ12kgXBcRkU",
  "key3": "2kivctKwhrMDjyUwDFAtDeVUnotTCj5BDEHUxFGVM4qYeoy8o6Nh6gfr4iKm2TH1er4ffGiazAH8MgucZsgTE4fG",
  "key4": "4SYcrXzhdkP5m1aFs78Nxt98fUJ2Hn2PfwzwVVSwrkdQsWuXYmyrtUxRB3V2F9dVBRxph1xyorAFj3YGWfRR3qaZ",
  "key5": "62h8FfHuwtpsWnhfEfoaHKEvuPepahJTjk2CmRXukbKKNsy4CgwEk4awTRESmX9EejPPPA8mbUBJTvc1EqqEfjHS",
  "key6": "DwCFChMUEzmQKoZ7Su6zKixJEskGQ4BxqPcJ7hEuZBwp2QDd5LzbAWa4wnaSzHpzeToNrLxZ4kdijuSfZuWQMbN",
  "key7": "4MGk4B56eCiddPFHu1gTprnJA5RHHZioxadcbBYnYtHddngBFpA6cdghyyCcU3Jpvfd2691hRqSNyPy3ti1mjFVi",
  "key8": "61FKGr3z8pzggq6yGd5snsjn5yb7Qb6g8XttBhDRKU1fccfBDAuzyjuw41eECLvVZgz1aZqsBffg9reFxC74RbYN",
  "key9": "2wKCVKcEM9TmhgNStEdKPq1wWi4FKoGbYDkb5nZgmDkvWb9TizxmifMAknbchj4GAeW5vjExeK6hLRWCerFuNu7S",
  "key10": "211FoJiGN7PY86XCKEpKwU4Yu3YkdSonyHam5BxaDUpkn8Jx8VZRnVBy2sTL2wP2FfMhGhaHBFTJ7pgJZ7ami2bY",
  "key11": "L4u1yBjUBoacNGgSDj4SDDm6TkG2pXee7wnRuNgLioiWudYTzxiQwxU6TAfBmx3mubJNkpKt81P9pa77QS6Vxhm",
  "key12": "3aY3Yz65tEak7W1ALQthEWoiG7GERZ2MA5Y1ay77uu57pTwRFyxJ5MH7XqCBCTX78jHMgEngBsNMJ1vPN6T8DdY3",
  "key13": "2L68v8ZXWf6Xfb6CASCCTmkHAq6gfhc1APkruiM2P3jQBYsF9ovFdiuqvRnzgoXaZFB635d1eCmFb2oikBnTGaVf",
  "key14": "GfXFYPZu8yHyPo4rU17JWKwAVa22WBaKvTmaKybWbTjA3pE7FGiboEsVGV1VyM9SeaHgwvW9ArWQiCxG4hNN9Kb",
  "key15": "56mHSUHfTZYfwFDMCmvx9rB57Di9gc6pnmEM94Nrx49o65QnyKHtPy6r5ajkHfMGpFc6BF7iGyL6P7L8C9XLYibW",
  "key16": "3deMNtDcBdnDhsrvd33pM2s6tGafNAci4mPg36a446ayEPun2Vd2urcyA4Xatah7UxtEx8EUvzwq7oYSwJE1tJSe",
  "key17": "hZBeXadpJn8NyY6YymYEctHhuMPwESoh13MwhefifGgLEx8mgqGuvXzDMYcwvjq1YS422YZkaS4ajaGMd3bnvnQ",
  "key18": "4YhD9DGu2esVrfo85NkBqDDA1U3SENKym2PJHpuoyCHq5cC7tqQHbhTmbTo1KZ6bwnXVycVpwVxLCv55D3yutmnx",
  "key19": "519t6aSasZq2Ds2jQLv2uz8QgsFxqcRwBm5X5JKFza5WLgaHN4YvxrkKdK7AXTEm8RppFgxuTXdrVC8K6Xp2n7ht",
  "key20": "4TmnmePehpYHX9mjog4Fw8CkSPGh5LhYNrZYR2cjC6LtZtAx8M1v8jwfrNok2bYRFdSdtLmWiutBdQA8Tdzb5zBN",
  "key21": "3vvjjtbPnYnW5GR4RH3X4FKUTaKRtHvtg3LryePQM8E8uCdQFTeM2ayLh6BaBKjLnxWhcjGjaWdgGEVZcLLWfcvN",
  "key22": "URmfec9yPYHWLzcf8ThedrXQiYiFKfhfXQLwQhZKMHqgSkjQyysUeNEAjD5hHGxutur48tr8Kpg2MJJ2DpoaPVV",
  "key23": "gdo8UaqX1Uc21hj8gzj16mFyxnvY3oM4ybVKzGNzegZEPv6dxYTbbDprFG71LqpdQ1JSazmfxVup25LhQ96CsV6",
  "key24": "2FQNHMzkLWjXHnu1keq3Yp2hgx2fkxNNopEN1jJtCXM1EUng4Qz7wbxWisptkALasYhvoKSL4Vdgm9ucsEDcKnsB",
  "key25": "BFJbnQd6xUTzFe3xuuwv54sZv3xdcFwD6HCRG2pEpFbACHmy5awxAqsRNPKHbXJAajScP2onivxPR1Xxq5ppVeQ",
  "key26": "5pToc1Cyd9L6rSTo83149FRbiogYsLk7n4DnxdK23qjc1Tc3fMrDYLkz27FsoyjoPHt5wSu6VRJGC8c9nhtsQCqK",
  "key27": "5bKStAtsiNyUhjyGHsvRHhwzpJvir2RrrkcQVtGFzAhfu5Bgux8kQ6GWanZZPkwn9YMSp8aiTUXjNE58xdkUEBqA",
  "key28": "3jcSNmDKZwpPUUirnUd4aNUoQURzu3ue7ua49fWGSQ1Fzp8DmM31TbeUwKPWwEvgRUJCFcUioUaapNmpZFSS5Ai4",
  "key29": "cGdcwCdkYJbEWodSH5VNjZcGPaVebcHNEKBojLi6DifTJTNmaJH9E288Skk1f8UnauuQado18QuZGS8c2LF7Rww",
  "key30": "X6YUn3qDfCe6qQBJsR9wEXgDwcv7UbyD2VFktk4DqBgrs2h3GKJ7RVkhZDVEmjY5N9ttqmfuDf4JzNJjKVquMwk",
  "key31": "2dKB1rSAJkyNvE7W2YzuZjvDp5LeSz1JKzJhDL8wpmt1YLKqqE65JKDY1ESADRNmmgVn9ydm4JZpvSE2Rsk9LQbi",
  "key32": "q3qzUs9PeHaRFEzvtGj1ru1h1baKSAT7t81e1VfYmWveDE3vvParBQ2oZF8KA87VRuEsvDjdHZqJQRUU4JiP8Pi",
  "key33": "31hGZX2JW9BiQNAS8J68yDmv9kcmvr8ErDrCPVGTad1JmWAUmf6TUE62neneiEBpQ6xEc2YwZmiac3J6iXL2Xg8g",
  "key34": "5e3b721kSyf1EzasARNiCWoC5JDKmDt9du39uTsaArkhtzNLXMh52qHYC5YqVtB3S7AuDQzc7mFE7USNcD5S51Ca",
  "key35": "52nP6DH93hvASoWaLcy2o7tDc5hLGPSdbbAPTedLW5ySrpp7DPHcKYQs72otadvd3VrWVF927HXznTwPrCWiYhfA",
  "key36": "3v2HXTtDueBoprepc3JVGRSLpkkhh86s6xgnk5qGKS9wWe4n7xjvD3jc2ayYo2B6oJDh2uTgePm2FybkBFcYc66o",
  "key37": "2cspg9Z7ErQdmw7ZYkb81Ja6qMVfEKHsU14wgX4xDHmshvoGemsfetfxSgKx9s51AzPvVBgTPVLZk49ggcSSyVUf",
  "key38": "WLhu17ezznj2X72M2UcD3QL2Hj3waSzi1qBRba6GP8HoVJGiweqfx9qHcNMNEH1nX7hFocWyeMfaosr8SXfrePv",
  "key39": "57oCckzxM19G4dGF117v9UnSZ8GxCpafZJ4wFJ52oiq93zd4LGEH1oCoTkkwTUv21rLkWQShUX4mw7dnmKVcjXbS"
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
