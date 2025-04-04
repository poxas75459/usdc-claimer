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
    "5sAkpy7xnZ1f3sn8jz1FStrGgcRKkK5D1HLvvRmzFo75gS4vtCctme2oTjbGu7aUe2Cq1jVoQQiGCJrHTcmH6e5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PDRCYkbiDRug2ksbSfZ42sXgFpLJSkQTroj8jKsCswQHLZYmMARRto24iwqDPLcvYw19YTBjXDrBEoA6ga9ewA1",
  "key1": "2ZWDPMv6QjsoZPobsXUm6tND4zPSryNLqTug5zRhtMSTjkAbrtVXiYH78EDYcmXFQEUGFb3PRuib1cG6jQBN4Jbx",
  "key2": "5FYAc3U5MkxzA3pn7UYj5C2wFFqZncEP3kWFUHE7gAHXAtod5u4q6Xitwnthfj8M9QEhaVVyi7jUgZBoADnJpVTA",
  "key3": "2SuPu4Cam9wERNfYidZGZesaZHEHoordCYx4RgSM2LihWo3b7M6g61u8cSnMMrcxapKAA8VcAG52XeRjNLgQKPBa",
  "key4": "42ZPyV1BU9UAL9tM6gwN2Dvi4GDwTTFETvhYQ4efmQUEPaqkq1tmc3p8SfsngiJsv2cvvetM5D2er4Y7F6AciUHU",
  "key5": "2DaySoaRQpLNFruxkcu6qcfMS7xcD51iv7kSTA2XY2igCbanFsP9Vpwac4X36hobhryJpXuu3XXgtcFfZirJPhQ2",
  "key6": "4AeF1y2JRaJn5BS5Q8vXFx8jKSr4t65bA5RNosx6sLHcByp4h7H6oztRJhkVKJ9ckyeZqwSsjw3tNAhrv5hJCR1L",
  "key7": "uSZxLX2iQ7dT3SHZvuDQaUQdmDRB2wbkc3o5833wSnsc57HArFFTUaUUtfsscCeMMX6MF4qZbvbuNB2QV9PW1Lo",
  "key8": "24i2BK8zCv3CXcRBmhJRTx5DvLbw7SDRgR6iFhjcBY9oambca4S8zEBULeXcBHXX69huYpHeDw8uwvcz7tH9jUAi",
  "key9": "2CMdzqvLk2JwTVi9shcoPeWMF8VKY8dyoar181fiML5pszqLzrzNPko4KReJTu94h7zWTZmwm9KcWrE525UqD7nu",
  "key10": "4z5gz5ASXJT2XntDyACHgpS15oACwJ1XzEUm2YrneAcRJ7Dh5XuLmxQLQseVLrarmJasexFqbbD5A7mr99JTVmYW",
  "key11": "5zufZsNKQ5ESps8NnsJqbxsVPL89UT58FM6UeHpAQ5GkJZJWXqFF3kPmuhs4ij4bnX9Ktcwat7nU7ATkU8krumnv",
  "key12": "3eZHuzgxhSms2TBCAE2AYVW9bQrNhDweNWC3hQEGkB4g3Rmez6up2hEWrpTxEz3gaWuYhpX4LyQEEA37PfndD6q7",
  "key13": "2YQon3puaPmf5shvmULniZBQn7eGMFoQfCSPJ7viffGWoLNLrfDgpWdN5oTxd63Y4kVFSVoZaYssMD7W6RmH4Pg6",
  "key14": "eCFXRka4hyag5TmchGWGaGMoKXfbpnxXxtHamML2VeFCoUjJ7ieSX24Qzzcek8XVbcXcnVKribwN4WZTgmzate9",
  "key15": "5B3LncdE5qTH4MaqsB4Bv593WYS6Mei9uuMgcc357ajvZmRyH9HyBuKkbMCmy6HaLJsTE64HFjntVKQbTZxx2ZbU",
  "key16": "2vCHowBH6UPYGYQ9p2n9CBxQ5qh1meQ3fks7fh6oN1dd3Gf7u6p8HrQbEiyXjioGEdvkrJRBNUrHLs269vVtX8zX",
  "key17": "4C2g3rd6FLUcNHQa41k4P4TzABE4PztMLEC1FitKX5y5To248UjzPVd1Uw9xSLd7ggRte1yuQXjT93Ewd3p7GxTG",
  "key18": "2fz6APD8C9LfLWUwWemQR9bSfNo1CNwYHhybSu8cx6jqLBAzPfD7VCZEFbVYjJt9KoHh3RtNKfLnHSTW4NMrc55x",
  "key19": "5Ld9PJkRZdh7bH96kqHHT4DRSypYSQFSyzdveweucHMtsG4Xa7xhp6n3R4DzWg5vjt9rVaWT9WvMATh1P6LgCacK",
  "key20": "2eEwdqe4PQyjVeStUSDHkwk3nSjEHEqhJwvWe3UAem3VqbdETrsVctdDu2DrxmpqSVTAmcjfpFn9VFWyEj4tVkCn",
  "key21": "3KqS5Q25JvwmTL1vEqJwk3J34QCW1WGyYziRPbeyMTnt85tV4ipxz6nj9MyezDPqN9Gdmb1gZb3x2LvCeNDuCn7o",
  "key22": "4woVakUWejJw9y8H3n6M1xjNrpP6hzLexMTMK8yVm1EQ1Pc329vTM3kSYxVZ3of3KKwWnPGnZAYCF3pMYUX5CBCB",
  "key23": "qPyqoivbWpdQepN8CppMUpC6GGpqNUS2q2NMU1MWoW3is5FB3Gaz9kmfz3RLSeBrd1KTQ6RGFy89p8gwTSTsHtE",
  "key24": "34KWG5TGHbjojTXW1yue2znE7sDCsENDpUh1CaugitH4C44jAWceht21BkdirGRn5udkwKdFRKLaoSeVKEgVrERu",
  "key25": "9FPMXYJky58zkAwcTs7iWq5aV5tDPVebu9RzibMpHuYmgJYCRXvKGAp99haTQUJLX8y1SbdkLoGffy3Hyk1H2ZB",
  "key26": "2CkESyDenywBq6Y1arnCoiawySi2Rg6zJ1dKw786oBPer342Hpz7n94VPr3Nvtdaxrsr1x92MsWuN7e6CLSswczA",
  "key27": "4syzzK2MwdEtuzv1ZSiSmmvkRpvb4EgS1DGT4TogTvQmpBxF246g2jTnthAxVZJdAyTNduJt2z7qk7o4T2QBb4Aw",
  "key28": "4z5Tx7mqRUeKgCmWU1d7vjBgZ8s9y2as517W9eRgTgmWfU2hyxCdVJCQTjUKoyUW12BoERDFc6KKsVoXfoEm1kQt",
  "key29": "4U2HZ8FJNEUBBrK8RV3o1egjwZ4tXsjxLTiDLTJjQBsn9kzRL65h5H78cmQUahEE73Qs8xa7oWzewpXjBTQ8xaN2",
  "key30": "1ZBXPEjYze7aZgWaYJVFCCVxwsrkicH7ULC9VegnA4epkb1Xor874GJxeA8WjWydrjzyWjBcJu5acSyFjzPTM5a",
  "key31": "5wTvGpxETQC5LN17uWaRT7TAB6LUUKi5vce5BfEmtzV6zm96DTSrB1UEnhj8kVMKNTiTuRJP4X7rwU8USDFSbuZZ",
  "key32": "3gasKYqfPNTeLibnXWSbfTzwrQiRTB2ugEKDNizVaQ8h7fg5kxWUzJ91GUaZ7AfeLvui2RnMm2CLe3HuELpR4WYL",
  "key33": "4GdddQRKQEca5D6TUPVDnLh1uARthPxpm27nb3pKYE3hw3eenVgENwf9kqad3LMUVJhXpgzXZkBDnxc3RG5tCVSt",
  "key34": "BBCCzuRbS9aZz23dXuq5gPVKdtd9WKAcCNZeFZgdfGQzLinADxPLkWw4C1geNt8mzHAbUSTmXED4fn9bbPYnkTj",
  "key35": "4jq4iuhzRpzAcKYZgFtG51A3d7XcbwsAHWuNNMm8xg2T6rKDm87ERdFvh2fsTp3b1XcvRXEVsRkMQpwYow2rZ48c",
  "key36": "44tmsk6yY5e8rT6GfqnMPXJZaBPAQpzVERepJPTuR1ZtjjryhnWGy5QoRvMmah7pmtmSMKyFMhCtaS7h4xrcRCth",
  "key37": "3zBVBzVjQDsRBFiRfeUCqCw4uDi1AhxYq81pS6Wob6i5WaCesVKFVzbkxE61Pj2PuBXh4bpEdyZ7wjKE2TfAFLfE",
  "key38": "3tgYJYRWzmTu87Fm3rncUUoWmDCrnWPF1XaPwRWBDTme4BaU4PRTCyQS1DjFs3jBCSuC51DnEEufA3J1nHtTXGYs",
  "key39": "2VJ91ESGZkBYXWbTgeukcerinffViC1kXMdkpDmwfTUquh4D4MHHWFxqMdNU4AEjU654TLAhWX3tpeuoHdR4k1uw",
  "key40": "35dXRQEZh6rw9aRSziUqzxYozB1ibZsaCMFauPkxCX4z38LXWQArniHJSu1naseTEMnnMVAYnJdudhN5yvDyvj4z"
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
