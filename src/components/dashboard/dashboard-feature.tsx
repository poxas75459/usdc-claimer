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
    "51Za2vQBLzQnLA2QEgUJ3UwkMNZv4ccGFxcsUPmhSgpZiVcXNK2qw9nSqik2NPYre3KEJJxH91AUtB7vFhH2by2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ELwi798dtPz9EUpKGBZtpmHtkJpyYMgKKwFMD4vwJ2GGT8X99f9S9EDVrgMnYpUH6Qs8LwdxxKKuKE2ydxNSQj",
  "key1": "4huWNnGXyNLCofesGTfNx8aF1QM5SCPCNS9ctG7GLhqgbZ9fEEsk6GBfRypRegopvZsLtTSaqKvaDCxZ5NU8iXzX",
  "key2": "tuhNDqTCWC2tVc6mTRECLURkx4UkxUkpqgYfA49N3ysFN5hNgMr1PKzvq7z5pi12s9D15ierQQh6qMSc14gY1E8",
  "key3": "2aNVbDFiVLvMuvoqAj7YEzV3j1Uj4WKugYdBqmh4HnCv93RHPVdnEYU4R69XzWJiPNPVDVPby1r6vk9FUHYgm8VW",
  "key4": "4rNmLXQcL7pHD5npG1361Eh13iPTupzVfgpLkVcer4E26EJgWDNDquQ758Xkxt73KWf5BF8ygNBfikWJb3caLD1X",
  "key5": "RHiP5zXrfSYTiAp5gWxKbNW1Hqqt6PKLeG3oC2fcK22ECXwAzoNvXeZEWqt5bkDcue3gfTHHtQy1R9wjwGk1AAL",
  "key6": "3PFtLSJRPm1rVaSFM42aGzeCTZfusycJNAPCQipsVSQ5ufqtpDiYAPt1EgiFDBArxf81szfw4BrcSXeb2T4dkkyC",
  "key7": "5x2MVGZdM2uSCiXDuzDaJ974HAuPXS5E91B8KmdpzyvnGGXES2svoS9GCY1BtCR2i2kQMzLRUiaWJzAZj5VhUDNv",
  "key8": "hbuav4YC49r8Cx4ABcHML2onhqmfdE7XZcnSJ5PGeF9dt3uvRi36YVPdsa5FQbHo2iMcNDSLmJx3SFY7BBrcZa4",
  "key9": "3TGjZE4V5f6JVgYkjcXH9z1D834XuUQVb58f6Qsang54qzKB7McDpxkbVcuTmrC6XxUDAJM5nYsfrj2BvnPoNuUH",
  "key10": "5TrfHem5r8XiZHFpQPJBKqvD6cCzmsVMQDnCw1yjnMhTxnKrcxu4YCnHkoPkusFrtMVjZY5zcMtwXGtUMcbKZtP4",
  "key11": "4XMTe47a579c14UhWBHgihmDk7HdbCFoMcJozUnKtdpHwa44q6xRdRsT81HwKNq7f9NJGnXA8bzFymhDkjmd3tjU",
  "key12": "3Jm5Hd8NynSrqkfgoppHVPQAWMSpN2SYYkCLniT4ZxwPFfoXZSLmoU6fuP3qr9h4ive7kkXnvmZb86SwtGqbnMeg",
  "key13": "3BwWmESZwjxcgScYZdNNhB2Yb5mP5gSeWNkHyUufSdKaAwPcv7WTHiYWEjWLp9A2DgioCFN4iLMRLruv4wRDr9Gu",
  "key14": "5YnkjTEUvLtzXwe5HsxBjCAULH8Wg9urHMdhmW4CAzZimJjGYvk9dLRPnyihXoHgH1qX37zPpa6Xkxqur1ZxRsgx",
  "key15": "DBtSeNGVqw34YQfjMmqQdurcXGSTKbDRuEdWT3FUNf3TLdHGNrtiU3RTmvTQCqeBmJPqZUAXvvukdaUcbAzJeBo",
  "key16": "fWz3eeEzjmkCyMT5D6YreZq4iKwuUc2MCNYGeiGv7Fe1Pic8VdVYDRBXdUiJhuCXFZdqXEAELtRg3Vq4jYxjhnK",
  "key17": "2mZx2nFevhXcvLAZryqEKkVSGyiedzTLFzrNrr4kvkjFvbtztJpvSLj5ZVhHCfKAYp1vYb6pMtxAwcVm9eajkQkA",
  "key18": "3aLUn3BdbFLRLmcivJv3ae53rX4RcRy86k6CvSM5JifC7fQHzEg2CM38FcjHqdkJwiESXqNrMXHyfFukrEVLiiTW",
  "key19": "2abQzT86TCYs844imTAZVrmfaXvQxbyq6p1NVPz5n5HX917iuhRosm244HLv4pQJyMFFqHKXaZKxe4f7EKyBuS6P",
  "key20": "56WAgEro7KgwyFmxU4bJH5bcaLzL1uHAtRqqgTNjDmFrpeJqRXL8WDPVZ6XfYNCYZdMPtBn3zna2KJt2rUXWhjMv",
  "key21": "1jCvQCrdnrFNYbaosXYM2Z3yU1UG4dtvc7tLaHo5VtmAfHTTHrf2KaoTobtVfjR3xCNcZ4oiXkEWMSkUYZWjjUt",
  "key22": "4RZpprhDPHX1yFk8PBq1EPuuwteSoih25c2MwPrFg4jMxrBv9ZTLDgdVYCQPBzhXRS2fM7bXJSAHVZedct9m9Fvp",
  "key23": "2V3cw6eSJt1maJ1y1Qc2aR1fgnzPDezQaFkRsXTCX93KxydeyL3r4oPNWEFdqhfvLtfJMbP5DNxgEY69QZzpZAva",
  "key24": "3QzpeFVadjR4C4yJivwWQdBMBNFZ2fifvurfnE95v81HXvnrEx1nhVNfnLUHbt4F4X8qynf5BaBjntVMBrPPwBWL",
  "key25": "1zuPN37jcqzotyxffrgBUW3B66xLQfTSGhRxgKPWJXP2XB1yBESbxq8YDP4qxihm9K8ttJSUc48kC6gWwi3RfPL",
  "key26": "5aEu4YzDwFJxdeTim4XVGh7Kaofwfg2xyGLHi8qcDuFcJ89NzsrtqU4WLHBgk9s9BT1RyrgXWC5TbiXt5U5KwSdM",
  "key27": "4g3tYgyMpQ1ADbsuBxwBopMxRk9yFsziPCSYorVwmf1fQJQEmJ1y8dSmzbCHALoBTJ8TiD6XPRv8kXvgdn19TUAD",
  "key28": "5yu5v8qzuCoLetnvPwyNAWeAabMfTBngKZugD5zhr2Ef8SKCK5qgiHZqX48Zdev9HZ7EoWT4gZJkEYydpxUXCbRE",
  "key29": "3mZFU4ubLufcdN4q33FQonbUVRHwn5euaUmcyRX2d3LEw2EB9V8h3xjf2FhJWB4NTcfsUBoy1Gxh65a4gbsmPmoH",
  "key30": "pY9dwDSkxt1GRa5fNcU5x7bEbpQkhbcuYvsv9b9uCHsfXRpzM5jwiF5vjXwXsEonbw1zwt6X8t2db3pN1K8xAC2",
  "key31": "5h2ZZKJFxJmVAoZLNoK3x8g8ncBMCKQqapEVveBUi9w5RTXKbM9yubnWf5mP5u5B8Fe7sg4cB3jG6mR97PCedGTE",
  "key32": "3NPZJKYdt3AP58JuUzk8fogwUcSLEtDUTZRBMUavVSRuaNQLJtNvXovWA9iygjK3ehNo6bm7JY1ScMjqwXQG8P65",
  "key33": "3TKhYSt19D4CcCLpE4Mzr3F6ku4gUe9w249YGDtjSXYHTwvNmkSzzPc7hkD1fD5hxmbgN3GPDArqnkbCfFei8Fn2",
  "key34": "5pCif66vzztuWjKSzwesnackYgo73mCaegzZjHkeWCdkC5MgiyVaLqato7k4tBmaLjNWfipxTBNxW8fjuubeXjoy",
  "key35": "2wv8mjUHUmnUf4BcpcxzFojqbA2Bbf2anVZYGmBLZdoiqYKcJ3pJu94M1QofGeWhgpLggXvrBjbWhMNU5YeuQrLh",
  "key36": "4eVkxexvfd5EV8fGmGvCGXCvJyqkehFANk7DrMwnu3HjG4mYkPMBgZVNkgE2Z3NfkJWNMEVoQz7QY93SfGnLiMP",
  "key37": "YHHVkAdVSSRBJQnbGRbt6FcEFmGpS9Z5Ps85QmXT2es7NVoYWmwKnvMrcQvL5Q319vAn4WNYvSSAms4uwWswjoj",
  "key38": "3RUJBmrvTLGwFAsgmhgi7cQpyep5vrXHuWRtpU9awpeEnsie6WH1gdwhBnj8GBN46JTSKWcP4iBYp4VZ1mTmebi6",
  "key39": "4VXAV2oj1Lpt58NfFxV8weyeniPqSVX9cY8gAgD9XvdBHKNGkXiae2xAVdby6fZiQog2a1yCxEZPVPaZxfcQirgM",
  "key40": "67pVZDxfobHR5wxH9TjnWYnnnDsZ6iY6XXSuQFcdqnUzv3PvEaU6yTekmWWJpJC9S5E65VUufoDYuGR37DB6LGvW",
  "key41": "651Ly8pvhqBzoR5iQcEe2i6wYVActfh6GQBRbzmD4hnEbRtaGuLVpnUmfPPDWVU137ujNTQFVVTyhE1JbCpesrgJ",
  "key42": "24JX1csUzEz7T3DzH5UM33Nn3kBdCrR7bTkMsgZbx44gW3XViDJsLLzuGmPLfFkZGXZ4ewK5Hwt9JaTUhWCZzML7"
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
