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
    "5UFonZq1Nt52vSGQ6T9t6AFZNxhvYd742U5zswpRiUZfDZqDNJsnCmhbEHCdB1JjxmNYMrhaFmPREKqGFSwdK1mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n3oVPzxP2mUw1piSYpvq5sguELmsZx4G9DzZwYRdQLYRpHUsGSJZZmmhmN53CQjN9ZvZHmmCfAGGQB2s76Hm4U5",
  "key1": "3LeHStKQHhPpRd6mPJpDw1NNtdQhBinZ6hbJp1ygEumuSVsk3Waq2fxzj8MJwp3LVht8Ceu2QqPYR2y4xA5JnKR8",
  "key2": "5GRFeBfQTksLs8kTaM82hjvcpbBqpzRMEhtmeuPMRgd43dJwXpJCHL35En9E4tS35xLaXnKYH8ttNvE2mSsJ84K4",
  "key3": "4bBLMH4tkg3ujVM3eUc5yDC475VWerhdExP6EM6419ohydC7LyviKfvVN6Rg7YxgnTDf41qR1hEg3xNs6gvnZtYw",
  "key4": "3hV7RHj5c7mXn6neKz4of7nU5G4TnhPkHbofPAgRCkGFsENJ9YgAxLU3x8oG3t65S756u9fFc58ifKd6s7YF2BGg",
  "key5": "3xpex4A65tftUxcGUFhkDJoDMaUQMU1TH89EtAC39inBQjwrzw58cNWM15cpTTBL3npY6DbUUuCWiTU6ipbs5Bfc",
  "key6": "CC4BdH7bophmLPDzB5t46wDQzj34YUenoUcZcaotSd2bEtinZ3aVRqHwsbAeMpdU9snQkD2sm2fGJDmzwYfczLA",
  "key7": "4Qm1vN1bYJ2mkd6YBnJv9zfnWm9aH5NND9Tpwgeacp8usd4NRoDeLNGawLNZ7YgZvtKuaPtbQvFUKg6yF9PPToVk",
  "key8": "6458hsVTBqLzhinKUrHPTzLKsZUK3NFcTpo4ip5mq4CtpVEiw6xqAL8XfSdsmKnFxvaGz7z21eUQrYWZ71hmG4tF",
  "key9": "ohQ2uZ55qMeGXPPW4r2W9XAPN3GTK7AYLA8gXQPcp8fYfYMwuxgeYt6MLWaFLE3bbswxFdSfHXsrqoN8ieKLMCr",
  "key10": "5cCktFUFDdHPX6jt1d2Z4zCgdBhy2KrVennn1QzkE47nsKgGw2C55mjWGgCZJTvtGL1WtNNFXkepSCB9scw2Bbr9",
  "key11": "3zCtxNgcQq6mkKvyZkhUEwRrHtEt4B38mdPXtBkcDiAZo9T5dTfwQwcxYxeuVWoRbRbhFG8yrbxhiF3eckWT4JYo",
  "key12": "b6NeVK33VAGMRcHvgFeyFBhobidbtXtENVZBSsSg6Y8VomMDD6nM6FxgMQjoqkpK19QkQw6iTbpfMAkoq66jjrR",
  "key13": "jVdi3QGvyKLfLChZSwduTCT52VVa1bQBQy89iuEABYLK9h858Yqtuepvrakpi2ew3R1euJeLpDTGN9Z4HkZ5XLt",
  "key14": "2McRSXqSBK8ejaLRKQVni3DPyXtn1teay1iY5WFnrKYJe9pJcKs5getnEwdrH5xsJoAcaTBWpsKL6wcDkDr3Nj1T",
  "key15": "59VetqttNGC2inBZDH9emtHRkZhkx9miWNN79mdrpD51Jo1HZNUUgfHexJB1epHFmtbMwGHzgh3JBaETEcCopAKD",
  "key16": "5iDm4zUeMVWK692GtBqarFGz3Zj89ydUCjDvM13Ah5VfhVTZXrL1Ztxp77aq5SMpkFTJscg21VU9Z7i8BXcPd5wx",
  "key17": "5jPkVMNowRrTruWBPnjn9Lv6BNzLbmBLKbrVwHixegh6JzWw2vvN2G9XSz7Bt3d9KowUd5Uo5H9gNMY68RcBPjDN",
  "key18": "4yaF2CU7p15bVi1Nz3eNF8hUMnzPaUPh2XMMjcnLeE8SpemnSVCvFoRoVj48BEWP8AwppYAZYLHpHBaMNFgpWK75",
  "key19": "jtWebiy1sb7YZntuE3KnrSuKLmpqAF7zEtguhzX1LEZFJMxDsQXRZqC1iaE2pQdYG5zeFvzSa5r6GQxtdX6LhE7",
  "key20": "3xSeQMM2pqLb1RvzDg8PfMbK3M9tDCLPGg5gLeEtCeuJ6zTW25LvRL8McZu4CSS8uEQCkRmcvftMEEf49tgjz6oA",
  "key21": "5kgLYqLHqMcGz1D6sWkV6LbJrD6JZKaE69Tz3cr5DeNpCJSEXXizTKsMjekcq3aHPuWRfT2tdjLYfxrehJadvVaN",
  "key22": "4Hg9QGLsMEBBgmrcmmfhzYtjdA7BMJDkgzokKFcsdPijSNVvBtUnLanjvWhUFjWMjZZbCH5mnozdyWV4HoWmhhH5",
  "key23": "59fWHHKNmVZMUBv2grRpZaBn1k59Zv7M1xbM7zwNzSGCJ597q9LSARKFhsZGnRDnj8vLnVoYhpbeJjcm5RizUM7n",
  "key24": "4hL1BCWJMbPbz5H8BWbbVnq4eYN37tgrrYQ1U2sNkDNxZyhCYo8LQuMrf9oTv9GbHVZHoTbnLcw9RBQJo93ntt1h",
  "key25": "658GX38WMKgLUoLjm2aJA592z5EiYjsHxGwmiXHAsYXq3pWhejMfKWvDxnMMC4PBLWp68Gniwojmg4ru1AL8vf4v",
  "key26": "cbzoHmSJkAepMQjf2m4mgPzNYpr2E4tPeptdNxsAo3s5kKoppq9j2ySSdzaDDj2khz6S1pfy6GeKJjqn7GdgZ4C",
  "key27": "4BStZshTVxBsqCL9Hc54A3KUrLia3XxwvV73AHF1TqK7u9PLJvSYdaveySMKHL4TRkdTMVTQdKjAd1499riUeaBy",
  "key28": "3Xt3BUfVcZVx5YHu2MTa1onstB7EwwtDTVjb9fy9X5rsu28udnQe4eN4889wGAEbp3mpFFbnR6zCZxe66mFF4far",
  "key29": "4R88K1vGxguu18H7HJdt8VrgwpxMoshBi1JRSYUJTAYNyBL4hFiML1enmKXrh9zjHkQAKsp9Dx9AEPFxuQEyJ5UD",
  "key30": "32w2RCCgJNvscVDRe1LjNdcA745oHCQzk2qPHHGWv9TkM8BbmDehmfrppYN2QStqwi3urdrvAFHsmJZ56HEwrcaZ",
  "key31": "415eZkLfZzkfyfmb2AY63EftaKATUtcTMXXze7Ht326LihpECtkvkatiTLxMo4ZHcYqxgQwVS7K9BYcdxSb9iPAe",
  "key32": "245FvCgVCRFhrHNeWdEhMkeaXQoR1n4EL1gicYyBZ67bio3cZjYkohz5P6v57LnJoMGwAqMz2GsPKaC21aDBXJGc",
  "key33": "37Ki9Shy8mQzew2yx4ZzNpgQSm1X52QFNECVrCjtEhVbX58rSXmsqxRoE4K9t9uVthmGVD6V4QUkS6TEu7N1QrBJ",
  "key34": "yjf75NuUaJZp1PsnnJgduq5bA5fmerbkfu8EbzRJM37WeQKV4aqjVzcECQaRUWmbH1HSiU4fqeeQQ9kkPvixaqQ",
  "key35": "mNcapsQBE1ccSwCiewPqdZ8tAfNSMrgoWN6kbPE9wgbCXnngLr3hM2YpXcFuWQmhkgSd4oWSmxh3Gtp5dq7ibfi",
  "key36": "2W12tUsXZ2DScvSSTLHLLnqMH8nnKoMbj4JAs8R4onsYithiZaUKX83qw7XyeB5NuNEyGFvW3Z4DZVHbqCYDGWDT",
  "key37": "5bL7V5DoWAFQ6LMDfaxBv6SKDCvgQ7QKd2kDgznWty9JsFgCjWroDfM46hknFkmMqwHEuiuBk3RjFadchkGZkTK5",
  "key38": "21aD3G9gMMvK3sasvmz2gEPAduFAwZmvdEUbb3oF3po9ifgJAb525ahgoSd4oD84966SSZodqu62P1gMtesjCQtm",
  "key39": "48Ygrfqq8XbDSjMate6kqnaJdm4iQTiBE6hHNPYgDTFCZiRhSrjeGnmjaGGPodKsbZoSyCtSKQ7C2bhaZootmAaf"
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
