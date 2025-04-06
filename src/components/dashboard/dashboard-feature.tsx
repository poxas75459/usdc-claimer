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
    "3JDbQvQ5qT7b5nJLDRfe7dErJckJLPrFmV4X3ketHvSuJ8BZz2xLPeXVDjjPDzgi2gkZMc63xQ6hDmTapQ13J53B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J2fNGHTrxz1cXWNyENrapbCr3WD3cGpQEtTBgsafEwpW1xjKfPfgi3QkN9neSgt1fmm8RNWhKNMsnMHqd6bUA9N",
  "key1": "2NYgvCA4T7NXMTm3eyDX6mGGPLEFV9BnGffkTAAeBSpXMd2ywqSVWVg15iFnTLmteTWxAGqF7CAbya81MntdLBNN",
  "key2": "54oHbdPMFRuvtmkhQPZe7tGiWCLorgiodch6c4tXeRJETWCnkXAc6k9oYTuYhKnNLJu6cfHrPhj5QgwUgJVgVVEp",
  "key3": "2tKVJGzwY4AB7crLc42Mybkqqiv54YNZnFKju9qJ3Lm5feqdsQNnJsMmVn9bHiksCeWCASQcc6FCARXFBZv1vPgC",
  "key4": "4bvZwAnTeChipCnKjfXodV1UwHdKAfc3w5LxSnpMaivb6aJcU8s2SXfRFXcUaSseULLFFDz9PpXd5KBqBQzcFhjF",
  "key5": "2qtV4LSHNSKyrFmubmSfB21JMM5Rdva7egg4ragTQwiyJj2GJAUVxVr2Q619sHcnr9SavK1783BeXrFRxbiy7dJG",
  "key6": "21NbSiNdNa4aXXrXXPjJoDW698DAisMm3gyYEfHXiZYP3dm8oYmiiHHaH52npP2ro5HjMwqGoTSQnKCVEVKpPmmd",
  "key7": "2zru2WiVSZ9ZbAGepKerTmiuCjy3TY7yYEPjzRFZ5FYjs9kjZi13xU1dkSHpuBqCDrCpLYUqXguTUxSUoYJrRcUB",
  "key8": "xTK5Pb917jyoYyPL9SWUxbudz7Emqd9ZHcMyviBrBJQwSnGuHHsuGoSTjW7mFMRQMgWLrn1TqEPPjXP95WDsLjY",
  "key9": "34E42L9sXfLGPsYMUnYKUvxptDWkbmXmLJPC7TRXXDdvyzxWvWVYNb2sXskza6MrbH9r2exzXBNjvjwRCmXQPGZX",
  "key10": "3urdupELnqAtaSx2CF9eYB9Trpm1p4bQjQ8cTt6epYQUmTpFDiAS2SvPLdPNpm7W27DWnSzYUhiFZPUJJa7z8qti",
  "key11": "3hy2gmYYwLvZFeRAoFKzwpDgPrqJnrUXnXxuLUauxA9oU9fWQp2aDSbcGr3m9uDqagGE1zcsAoLbXyEJakLpyW87",
  "key12": "5j3o4JcV1kDwgFX7KwPqjftcbZPUMzMr3nt1FoADBb5eX6HdCTmENAERQ1vZrbYoMcubcCbXqdzgHusiStyQxTYZ",
  "key13": "rWxcz5iRuEPuCtycaET78Sw3ae9czmAgERKtY5U89MRX3TSPrKe6U4Go8sTGhNPJDNWHk21bVR6gZFw4qzRbg8e",
  "key14": "5i16Sxdc6mE6m8MzbQb5uLQAmjGRLEcpEpVadcMw6WRmzD1E2D97rjxpGUXUYLeut4N2WZgzoLdJfCj8AQmq6DVA",
  "key15": "2BR7eeZdK932nFdakREmdELMHdkFA1fb74RgJZ5M2ixNEfSh4pem2h4gnptvJEuqtgAybaKvSTtkFim8siLAdCx1",
  "key16": "3xSk6RpxMfFi196q3d47zRGDtkvrb87G67qBauCTjm1Wt1Uqfr1aVEWRgQEy1ZxX2VTuP5UyLXjnN2QxhMDp8Vxk",
  "key17": "5Ek8NYwkddd9HAsvaWr9y7nnA9yFEd4u4qXxT2qYd4hJo1nRmcf3waqLVdCdt1bNnhNrA4gzhPVFKyTGaEMsqigM",
  "key18": "CPLnyuYuHxgiLKNfaoUXVbNSgXoad8uGRiLHgAzo8GMAgA7kACzEKD16BD2Eq6YEN5bNepn7XkvSaBkRYkbZi9c",
  "key19": "5zvFHaParusKV8WT1btMxjeU3boZnfVbRMzc4m765J5rsfY9XeVPe4TerX7xxbX3XFmWmEY7YsbuLiyBQgL2tSmz",
  "key20": "22rZm2w3UB5AFiFEsvKqL6bfwUE6B2z8yk5uSmfoKiZis6xue4e9H1d2CWnHDbK9E3EsjH91tAS5LdDgT9dS7A5Y",
  "key21": "4Cd7gQfCTGNdM2AKnVh3FydwXC5QtRE2GY5HsZ9dm9pfEzRfymtuwA6fx9UeFQcHqx7jpg9fiADcfcmtJBw552wi",
  "key22": "QJwjKLUu3knnuhx76sdKYawRdeUbVJcbKdw9LwP3d1AkDrN1RhRcmH7LWJStDg1m2X4AFqT9yGGmGBm555wVWbc",
  "key23": "61ZvbCLUN1Ume4Fds6YXyA2Uc1NmNGXzRweoUzL8tMKvyQxavEd5zuWvZ2AkypoxJcGBNicKS4k2PVWgeEq4XQti",
  "key24": "wgLD1RbpDqUeebTPZfcbdq8xYWzuzTVwvDxpr8GYxnTntwKknk5PW2h1SgZm27DPpSgLJkkhpK8MNK1rgXHLKcW",
  "key25": "4nfAyocgNhK3P4YRsNAZAvhjecQFHiH8TGJJA4oMApqV6nFH6RQH61WqtHKPhKKgNWdZJwVUHFwWTYz3n3rfLbTM",
  "key26": "vrAugHBdbZZLEvLCRhrm9AJYjQonu34gkWYqatBQbBWTpV8gCFR5c9riFtQUtUHUXi842phnCa1s7Te72DHBzct",
  "key27": "Y8kqbYfKEK87KduwtLyd91Be2LCguY6c8nTnV7jMD3B1ynTWonM9H5gryC6gqsVxTR6fnr3aeCrNdViBhrpZ69z",
  "key28": "479QyPod2YfMyjv97AcyWZzctQueTixivYqUAueFbSJmZVToQRw2P3U7BxebCJ3a5K2etvxAx9FQ1T3FLMZRHnUM",
  "key29": "5CSC4Jp6z8cL5XGc5VE32VQ11982EQkpAsHJSTmKzH5bEuktAE1KSadfzt2eCcYjwsfHmYEihF2f7Pxys9UNW6Cm",
  "key30": "erKvw59BCpVXm1kXUqGnJFLeDtnakZrKgxuwg8WVSYWkKGGgHocKuKVo6viA3K1PPdXhUH9NRgAuNudrHuQyP59",
  "key31": "5jky8xeCkD7MYoedYVaGG74HKtkhVJ7tFsN8z91BBLRuRNkz5jmPK3rZEkfBT1yNuUdkdAMsKbi7P2GVbfzq2pk5",
  "key32": "3V15sePyYKcPFpJZNcbRdw7EXDxnQ4DoxmPwjvAgWz7PL9JhGkMoStwpAsZCBStGwUPwGwDyTG2gs9UzieuJixuz",
  "key33": "5mTsrxJqUzT7oQJpy86uCEzzgBBukCunaRi6iSuNTJvzacF8Jg78TyKTakcPVji6wTubd8jXbDXnf6d7LvtydDRj",
  "key34": "3g1mwhEHr7U3XZeKNb7TG4LQRa7weFMmsHP5e37HqDq1kWCdx9RGJid7p4eDHbcv8TLxXwgkpmLeHH8LYqWGm3YY",
  "key35": "o116DRBLDhrj8poJhVBgEJBJ3t3qmu9FvqBPHhZHzy3L1AHpfS3HyjEvyRoGCjtrLD8Mw4NiuyujnpoySxGD94E",
  "key36": "47J3gXc37ZxJNSWkhRE4fTRUwqBKzyASJpbtkF1Xxuqjacx4ksKdpy8aNpmMzrPkPX99xLHuMKiBHA4oqoTAtnai",
  "key37": "4yrNZMESKxRjHmTGsaT13tpte3CTDJ96f8wXzuaWcC7fZKBYsGA4kMxPMb3eKPFG1JVsXtXCtmken7KAVDAM8X16",
  "key38": "3Sq5BYc1sUjrr3qpR3ShFoW2L4dyauuNeK4kLpfHmim2PAds6F4jphv1ZrE2bHUP8hc946v3kePJ39szBUXS2kg2",
  "key39": "4YzSprukXrfYojwThKFumvGG58gE1kzpyMHyjLytoQ1qMT92guLAT931qnL1iNEQ6ND2VuS8ZDLzyKQaL1ueHzcB",
  "key40": "586hcVKDqiyzNVbdSPjgShTvcbtuqXz27wrAFYJzLy8ASeEWTtvNoGkx3nim1Sb9YVYKfazy8XLtxgwhUn4VV226",
  "key41": "2heD2ziPKWpcgK2j6M24Ps7JhmvXzR7pYsWQDAPywXioKvo8BfcZC4vBKjwMcHm4bjvwRN4mtJ3pvAfUNKUT84NU",
  "key42": "2BjzNsXgknrErVV6pxU1MR9JR16GH4M8NxJSVDYH7VLhQQ16geVFbHo4iewKbVfShVLYcZQ4mmJiLqQkU72j9QdE",
  "key43": "NSoUK3trCHdWcUaHZqw4VhxqYLUJqJG4ocXb3XEfjfRdkwypf8EiUAxegk7CybDfdvAJeN513No3zGNMf8cDP16",
  "key44": "3SRev8DLRUuP2PiyXA2KxyWYsEbHsTgFbn9wbHx76uFYCRo1ePbuNQPHFGWtiuPHxYhmWRbxyTEiQVYcBXyCobsj",
  "key45": "4d5J71XmPTYUJBCRLuzwaXghtzcWXBTHqFUNT2Y3wAArmqF1in5RALLvZD6ZyFFwZ2c6Y6p46wfP5SQwhspZbzmj",
  "key46": "4W3cRgaSwwnFcj61Vnp3PAAvcfm8Sztzv342nenQJT5tk52iRZGBAboURXAPuwH1A3Xp9kXGSkunCTcicCcF5UXi"
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
