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
    "4rjx1VW9uoMKJ9vJxpTrjd9WySVH4rX14xDXDRKtcPFz4bQwNC4qy2NgWQdgeSgGA6oDTf2ESpo8zrGPVThqPjKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kC4K2H4hnkmVfxXNGCg4gKxDF66fbRkuyBoDzsqi2JGm65etmeK477fjHETNscATgzi8SD3xFPazDjrnP96d9SU",
  "key1": "3m7TSSPfL4sRa1HAhfqnbnVmu7NMDm3shCT45mfVF7ZoRMrBFstN8UG86ZBdwtuKo8HArqTERwbuH2rDv7cz1fyk",
  "key2": "4a95oSzrYDDDxbgX7smTVEirEJLMRxofhqqJLc3i45uWbV4YreD84Krkp7SK87C4bKNjtu9adxwy9CMHPhXjStL9",
  "key3": "24zv5wSTk5yATmPM9JBYeX6PnQUi8YcgBJRmneVtteJXJpARXMNsjMdWCs8CuYRxuu5NG3YT84HthUC6chPd4XqC",
  "key4": "33XYni4VCBECfz7CZzAS5nZ53Vx8hN51eFpbiX6XbaSRBxfBynFTnXiru9ixTCG5wWYWnK5QaPceGK2AVb7FhkLH",
  "key5": "atMSFxaphbyHsqNbnH8pfJT411QXbp7kjkqkaV2vbsYjcLDqUq5UwJ1m4M1C47N6YJRmBiDF7iz8ApxoJd9as3G",
  "key6": "4UeAhYxnF3nXG1M3DgSC5s1WjYuR3rYdKNtaWAxRT1yJYxRdcU1prsB5iXjHzdE3iQfrCxHfhRm28ycUxDUFGWdY",
  "key7": "5hoK5uCfsceu5a7bXCth1RLBaVFjtjHrmZXtQXrfzKFEMRWh5sSskFBdvSrMzxwRruN6gCyjLaHUjXMqd8t29Vxo",
  "key8": "UxkfzGUZPv4S1b33M6tfaZvrsqn1KhzUgJSdgKTvTUR7kvTpqLhFjSV88g13E2PzF1K45D8yWiCjAQECCdwZkzQ",
  "key9": "4cfLTixegphRe6JU9cZC2WTgVKTDm62tbQfy9G3kStKkDbTAnHDBTCL5AuZvgYMKxTeoWAatN9RnahJeH8ipXQv2",
  "key10": "5VvJdTPPH58zGSx5KT7h8E8V4dyhKJHkTLdbdnCftCt4Ldrr65g3pQikVTAksTc6DYTGd9KJY3fX3KZHsfnd2H5z",
  "key11": "3N2iCy9YvHcVnw8ktuwUhJT5CLtYPP3C7RTRKwkKB5HPZ8M14N1j5ENCQrUnERfZXHnbrTAMg1eTH8HTs7jMvev1",
  "key12": "5Wdcqq5XZSHoMW9mM8sLhAeRk7euNK8zYhbgHxp8iJcFLAsvfTvcMwqvZUccMjmGGC6cp13SwKftGLzGe6cMpNSQ",
  "key13": "4mqEcR2EjnVHMHN11zW6XncZqUhTctQjKB9rFJCs7Xe9EMyzhPBJP6QCP91syoRzje6vFAb2iAkmEoXr3eg99MM6",
  "key14": "5sms1VpU81GXTZ1i1xzYiFE7S2dkrvdkpFRSwDXU5UK6sR2EvtHRZCsiQJGGzWFWRq1MxUhUEfdLQPwBgBp9RD2M",
  "key15": "KTVkWzsbGfVwWeZzwgqvk9ZgzqfK16LxN6SbwLKy7czU8Xxe49i3Cw56MDqkSFpcPXPhx9Xuf23GvCWnkPEXYdw",
  "key16": "K6zAmf7y14mDuz1jXRxC8QPnGJvaCxzdQqwA9MoArGQfn4KjBMc5KFvdoaPYLaXvf4Z7BmmwwyNskpTFmpk7pNT",
  "key17": "4GAFedCDdk6uWzZyfDtHkGNEdVjgCbuM8KHeNJLPsCoWKcDPbskUQgquoNLsVkbBHKwwBEsW5fmTv5hsNcXfhLH2",
  "key18": "3pTCWwjb7p7MtnqLyweu2LJxWhzVGiJKrqJ4s91ZEcSs7oRYmHHRx8dkPLTGD47q86Xs9fNdjwTCLYbxojUeS3c4",
  "key19": "4E9e2K49KKTDJi6kiuBG8CRNQHTVWZeQERYAzdPsMCPbPDn6k75NC4e4JQ9vqB2n5VHQ6yRuXRUTUL8DBoM9YYUk",
  "key20": "inf6v3tPfbHp2FN9dF5UL17jPXsm1rPpfvppxKSAZrs4xh8g5totQeuSCXsc24dBj3ZstSZa7SeBnsEin7fQ5jN",
  "key21": "346AfYgKEf3Q4bC8ujPCgRV8yt5pXSD41wTTUVFDWSg8Wvr8zVTJHRFfLwzMTJrxgczFvTPUwDqsYsm6DP4gY19R",
  "key22": "4gv1fTkWU5V5j7Cmx1JPXfcnzjc843aybW35oMi7xB5ZGV94afbKXCNVZYcysNBJMc7pZvddgNKH4rnNa5DntEHC",
  "key23": "2hYNyxhasgAaEB6dryF1eoAxJ4pmvrT32KYxhtkTEbu5FcunfRUxqdHegFQKzNgm715ySF91bsZcW9ChNtTHecxu",
  "key24": "32bM2Wcpa1jDcHbk34b1Da7iJR6TcM7zMEppd4d3KBZXEM9PK3RipWAFxAJCksxfbHFyjRDq5Gf1Ez7wDgb2Dezt",
  "key25": "3nRbNPXsmpLrvgf8vou45oGNRGc56j3h87Ps7mqX7EEaMB3j1Y9fWF5nomja39r2ZQ2GiQ1M1KcvJbx6RJLosNWP",
  "key26": "23P4nChMYJxhdRRivx2jTTAJMtDHsUqzCHS882w7UkXdmfQTCfoRv4x6kEYpTBEk77jaorUZhr5cXES75qEABvAP",
  "key27": "3MMitwsmNS3Ftb1QdbmfLMVELYM7Uc8mEyweamZbhaLPzAnp9Fr8i84RVLHDpmxyZWmhevZeHLsHwx2T6Vdgtfr9",
  "key28": "4DyzQQnvwYbx4e6bRE7LcsnTxdjt6M8RwTDpxakPQvbSiG1x5TByJvHpJ31nRigYmhvnmeTax7dvL9jE9z3cqVjy",
  "key29": "653MWGXTRvKxpSqRC3enspXfhkTGNhiz3oN1jAuo849vGRWEnSRmDhZBjhfUDwiQdP96xHcDuwRSAspDzm2DkLFz",
  "key30": "3G96GuC9botcNHi6hxqAmXwdub3CceLc6wC5yG2QStA9oxGHnK8mRj21jhzEcanGHBp9cXuPsF89Mn4rAiGFGNcA",
  "key31": "2byTdctjCnKL6A2h68G3qcKH9PYhdJy5wSze75An84kGMLVCsnFfnVGaqwfaSsSLcx4cB4KBFfcHvdQTn33SXPy",
  "key32": "3DeuQCu5t7FqsVYk3DPM2hxyrSrqp7v1vyh9qpG525mNWLjc2FUCDD8iLYeWR6HmaAvz9XNZvMojRTetHB78LCyQ",
  "key33": "3i3MwCD3hwod1XRqsqZZEWcgXKU4TPfD4TmvDX1v6f5yr2gUDgYgzBJDtsoxPevBn1KkCFQpMfhZWY5vrxSd8HXa",
  "key34": "M2GkV6cXcXZyMTU3gXpSkrr2i83YvAfGCWqmtHN7JKSpZenjeqWh37vsmwYUCENudsAwWa81cQkz4L9eLQGVd1P",
  "key35": "2hnURtpinEiuPcSDgRHinVKcqi3yNhfgT1fXdG2X1UgBx6KukzFP3oqqCMmaexKZsW9ZuK5e9pjxT93aWrpcWqeK",
  "key36": "4mcWmrmXYjuFGA8k4AfCs9S1oFadxXkrxYU7SDoqRa7HmuDs6scqAXFBD3UdJNXSDfb4jn3yChXVDuHPcKb6gMii",
  "key37": "2mWpRASvoRUPcxskYVakbEHF8n1a6HQaQqujTcKW8PmNvK2dB1TMGEzmszAFadw58PNKszoWjbPFEhsV2eLfebwd",
  "key38": "5ycoeHXAzbbSjBH5fQZRdnRStK4A3DueZaggSGKNyw3Uoc72dwNS3gYJugL5dqmTnXRFsFexx2xSR6NBXARCJZW4"
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
