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
    "3gU4UFeqf7DDqtst79LsZG4tbcPvJ529HFQDUbU5RnH1mfLfPpfXopB9tNnq86yUNqbie6AXtQpc1M1RPWVkbiAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ni3ph8a1ynv9UmDYceR3PqJDAWvD9GDDAGDAKj8yveVb8xSMSKs6zaEU2kXathMvSQETBn9YTMsorCidbcjZpoW",
  "key1": "nRspWmtimt7d3U4SMhw9dPdhWqtctjWpnkMoS9v7vhoaLA9Ptf9JNMswvLaG2FNr6bELPshdZv2FuNNMuoaFPWJ",
  "key2": "5p3S26b7Rqsi2ug5crrwY7xfhNbsng8onBDuSHR5wZEG14hvFtr52j8ZBXpXARH87fibB7Xy1zuVoRHEPNdk7BBW",
  "key3": "2mXMrN3dxB8V4NoDbwn4984yHovMRzznDQTURHVbrkX9XqkY4nzbUzAFzt3YUoH9RbYAhfMsXv9YZYDjAuf1KAGZ",
  "key4": "CavReJJk4zsYCyyn1iNYR9HRxHyknabe4Uo6X8c7Mx3D62R9kG6uPJRBidugzfxUvbN4hQgTZ8RXpAkMkbbzSyk",
  "key5": "5N4aLMaEVv7ySmdHVc1DJ4bTnqy69ZJzPrqBV1275UqUjv83m8yhqvMVfVQvPK1n96mYGhGfxLb5VdY9uL3JzrUN",
  "key6": "CS7FkD4B5y54SWqzyNmVuFq3djzJ4xXAvVSKDeiVNf2MRhHPsB3HYrp48JxnHopE9Zu2r9QVXDa9nLxAz9orahF",
  "key7": "snGCsbydC4uHh7fcpGTphP4gwd8RPHkfNhjp1BZTPXTAeYFUJKBi7qA3HWxRfG4wiuqm4N4E8326adgFYqPLAtR",
  "key8": "2QMW5G2bsQX39mNnCKec4Liq6e5dkaaJDGK7m3z2b2rFT1rdBRauwhtqNTZNXVzZH148hpzzKx7NWPpw2T79QpWG",
  "key9": "5GFukqSGcRUa78oykLimW2fdRv5t8z9zDESffkkPQNfk38aGJa5nDmJXSZjz1UQafWLNAyEKPtZmm9t21SMk2aa7",
  "key10": "3LSBDahAGfcrYcq2Ni8Wo7pHnMEwuff9NsiDYAAL5hRyztZ9DKyqCChSLxvQVUXQ95d9J7spem2XmxdHR4xirvev",
  "key11": "HNEq7g2DTEtkTzp7rpWaH1QqaNc4NchWSurDhVm9AnyBCGM1sCQZPqfaoZNXjeQ3jaAR5o874JkV7YanqNdbvb5",
  "key12": "24R2kJAeQwrqLNujUySQGqSzTaw3ZiA4oc5mJHrP6iQp4VVpnUncjTn48t32QQPiP8CW77EUM5pz4m21onNurxfP",
  "key13": "4KmpTaTrYALXrWijhedgRXSr3MuMdfJBiZ2iTBQZrggToYGyPrNpdY4zX4HrWUojAHgL9XiDBVyohyReQoWcACEb",
  "key14": "2CFcKwLQkWtkztgzdGb9ymYrP4vx4fiRE1hyULcxBaTNiSeqDEK39yKawgf8vcLm21MohyBKLyEXQMkDVKg25Bvj",
  "key15": "5r6aJZr45cewtRJQprofmSTtJrfuDY1FGPKfrMWn3EpEBm1FQPpguG2ANTmz4XvimcBiTh9rLNxUsQVZNQMsp2X9",
  "key16": "46Z9gdsNvsSJYw82JpDWhHHSWjgMTRNL3mcyt86THFGtXxqhtSgUHLf3kgKXwJwtrXivxBGyxC9NVVoCNda5dEt3",
  "key17": "3rN2gV8CTxirVeaBAe46oipfpnMbHyEqfqT7fN5L1XzdbqNckLZfcAk4vEn2axgvNk48UkXBxHTWUqEDgE5ZeZcn",
  "key18": "NrGUSvX7d6xE3FEbsf3bUrm2j9CYnzbbbaaiZ8Eygi57SSh6wWPVpprASRKA5ocqP7cKBw4M9co5UxNGw4LuuT3",
  "key19": "5kWLSudofhbTei8VC3gNfpmC7yqgGaE7cXNixmycjLjumLoSJxwyvLUBxNd5ztgmeRoVdoXBFjLFEniwo1au1fgT",
  "key20": "3KBnqb4Z6vCzPi5ECVK3jFwpbEMLYT1PLEL66awuLPk46agUnRG59fXrheytpihv4Ks2vXcWVAdQGkNgXyeTR621",
  "key21": "35YxWvPDxCmUWyF8PU6UhtJ4iY7n6q2jtqbvi55ppJ88F4CFwFQuid91B7Z8rFiJjbDuuwe8zNv2VLKJ8mwQG3af",
  "key22": "2ZSbeb2yoxDuKcomgZfYnQzcT5E9QHfDUYQ1Q5ZRCA46hoKRNTQGf8vWxr1XgjBEwTL1fi5H4g2fV7vryUta7bWZ",
  "key23": "2Da5bs2FsSu1uw9wmrCmVmgqzkHZfjY4Ny2PK9hvFytjGRSXrk43xpFWHhsUMs1Ht5cPAVZ9rXnbFmCTHJ9hvLMp",
  "key24": "3x5txEAiP3HuzD6TR3ipbE4jH5FufrNJ1TKArnvgvQyhg15Hq7WptxPr8pUnpQrMwQPG92LUGm1qoD3dr7qNNjh",
  "key25": "KCQ7zXP7AvyzFr1f2CAQ1gnvWidEjEsNCESgYvGNAquShxjPwFqN9LF6uDxZhLdAGW4sxDkwiZVrECZu72L2g9d",
  "key26": "4FpP4MXf5TYs9axujDWi9w3ryWFQMNPu7n8NEZHFDFN6ptCePnHNDtduY79AVCRDx2WdJpWYgBHdUx278uHmYPR3",
  "key27": "4U7KygfkdVgvSLiQAebcAsC8m3C3dRVkVHKz6M4phCHmyVBQrXnoyqWXWxv5bknWfanm3TmEMGqeYpcg2KgC8Yj6",
  "key28": "3DoRusWoGv8Pg1nPwx8BSbcwM1w7ccvsufAnFLHELyrZAicP8X7F1F6Fk3CAHUzn1b7d64dJseM4xLbZc3VdWH7X",
  "key29": "63wgVH4zhFicg8sSUGQnYtpF679AW2JVxCJaccbpKkGKHL3rvTzLZxH44A7qVoV9ZtUZGEbtbY94mcV6izfN5HeS",
  "key30": "4TZyRd2qBK1e1GJMqABNmsTaFUFTv2XToNLaAGaX7mN8YLouQWTynrWfieFvHLNBgdeAzQHAkSAUsLdxTkEjvz6G",
  "key31": "5PeC5aroAiqwsoQj649Yz1N5VGWrDBqxsHX8fsZxJ11y2iQ5C5Sroqb7JN8QnMN6JcUBDZJSuYNA7mUhFV58Hshd",
  "key32": "vFgJxbejeH2gz64qVq22dHF8tdCmRHZQjHQsNK2ELU41rfhEqB9gv3GjopjLJUD62wL3jL6jAqovmkSf1mxTdHV",
  "key33": "49LTBPmNo1WQJKjieo4Hwz4U9XkagmE264p1wQtRNBUQGiYpVWJvvK1pVa9MorM1gfvJ4W1R9CpHcE5kJxKeqh1L",
  "key34": "tCcrTyHGXi3VcNK4zDnkBc7Pj6z5Kt7TyQATJeLDNqR6d79tQsCqZw8uYWA1pvBTSuQkc8SdJS8iE4nprDTxNj5",
  "key35": "8vakWxYpmNfPT1heR4FTaQBkwJqnSBWiNcqkcPxThTazQ3e9VpDpVb1ujB5TcYNtZyiqEcKFciYrFe6EPsk9h25",
  "key36": "So6289rij5Hm3UM4sioYsAMMmyNiDheUWGt668p9AhEqARuSUtq9rq4SxVyaNtJ34hph6QRHwv9y4cjrhh8ERXj",
  "key37": "5FCtjToKuoaYSWZdFA98uy95iphzj97y4WZEBwaesFa4md7wrgTrzbPQkHA9eCWfQVma7nBf9LfnPFQpmfKq9thf",
  "key38": "S9mBSGDMfN3uC8HCk3G5kfjGdJ2e4cH7MU5k74a6pBfGzsgzLMr6D1ndubm4XTXrkkE7EDyPh44Y1H1d4fXe4Vh",
  "key39": "akAjUh2yh1tB5e2aYLY6xC27Mae5pXRgrGv6EgwNwUopi1g4jk9ffR9CZUmN6vF2VXmkpnR6GTMti64aMjwqpsY",
  "key40": "5FxmrR9PJXmM4cYQmonwxx4mte57ADdxvwUshU7mQizfGuop4nCd3xg1VWNYBx3D3uzDHwGhH83GA2PU23JpuThz",
  "key41": "4YZkum5CpveYwUsy7pnuyyW3XyF7s8XQSk2ayCuKsYdZBF4e9EhNyi6cfWbBv39KWhMV6zvURj7e13qTxj2NRGmA",
  "key42": "3SKnKfzM9EonnktTiN4o6Ca4SgGCDChzBaEPerGe6nrZgzU99ZiGtbRQBLX5SHURtd1TWtpwV3X4oKd1ybtfNZuA",
  "key43": "3T251HwmU9DYuDCfVeYFRMheoUsJxisnrKfABi9BeMuM9CtnTx9ZyZh1MK5tXL1bX8k8pigVQ2RP4rMHwPFk6Qd9",
  "key44": "4tZzXgCzMtkzdxN6oXjh8ziPXsibC2HN8BWZNWJ7YzF4z6dzZ8VBjQxwHHEgqjmxSEyYZvSZMyRUFJkcK9cfcN9e",
  "key45": "4bSB4QSmW5FqJRk6KHTECaeajTSVr9Ky884yj77nHo7fDVTjAqh8G1Z4FnU2WvqjWLbwjwq2u6mtRqhxwywmMvz6"
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
