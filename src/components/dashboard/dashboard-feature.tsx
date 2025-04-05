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
    "4BZ8y9Pyc5bakeqqNamRY61JQo9Rjo8QAmzYumZXd1uona4LPr6ZcctKT4Ez2xRhxxFYgFMVzVgGbKkkNAo1ybvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41AkiUpgT6Pd4KcR9uXrjJzsiN65M1fxpTY1cJF1q15wD5wLW62PhMfobpzWqHPFb8F1GA6W54Eh4np6xoPoiqe1",
  "key1": "fAPkfNSTp3RzzrQHhW4HefjQwbYvayk2jHKUrfjw62iwv8ePE1R5uMmPZahf2hZLrbTEcZ7abNHZKQpdxkuP6Cg",
  "key2": "5YM9hCEJz3c4RmLNvrL3Y6gztrM6AunHoj6GhtTe4qLNsr8hRv9ij6iSnKJV5gRsabdGX2XHDeccXqZGUjqtbm1t",
  "key3": "44jmyTVGU8mhcLaAEF5o7pfLX1fPfEGHzpV4JD28m2AVRV2xRgH9v24ZorvQSy96Qt8XpcMQEQ7zEAsKr4GneY4",
  "key4": "2r67UHJgASgh3WiW1FtUsZLK1omrsrFvn83G9fvcwwFBBPHnrBdvdyYnSG2znPMCFQUPF7G2pZTvNAbEfSDBHmrQ",
  "key5": "2uSTQw9rnmAEiDvM2HuK54jKBrMKd2Mf16PZJW2mpfZ9Z4Q8fWGu52YCJ2wyymp7P3FjTwxizmCVTEkb1Ukjtvmb",
  "key6": "49f445EL454yLjtbxJUFWs3VnYrEUT7UuafNQ5AMSF2wT2YHgywhBZXLuiVtE65A1W93pX7n1cYRWKhi2Rfcxf3S",
  "key7": "3VU9dfDFikeRxrmhBXrmSg2jXAYzuxLWNcM5DHXfe1C4qRWfoNcM1FMRygGA57QP3VDpwvC1CSCxZomwhJsv67FK",
  "key8": "3s94U2cxYtvkLTFyYFWSU8LsiQqUDgWbbAvESPUqHpTccw2p9UEjBbKfdaAVcryp8hzhjGK2twM261vcNPN24cCd",
  "key9": "25jYFNu1gD5c2VxweseCH2QbGYTchjKjbRmjX76Fc3BTCEKejoUmwHFjwr7HTQPpbq1D8qNZDQA4nrN3A91dtSsE",
  "key10": "4e24bU3SpYmuejELMt3WTJkYPRuZ5CTmnWJAAjAF3uokHc3y6tDVm1DTeLhsXyi3NNwttfCAZqRTDwnqsR3TPqe7",
  "key11": "4Fy43bxuEse5h2DGSpA2hEhEHZJrwjH81FV1VLULX9RgYhBqZogYHV893AKhAD2vuRw6qqafdtsgGo9pXu93B7ZF",
  "key12": "zCuCMomU3cPwtZHnvyFE1aticLuHgrHe4xgJCT1PHq9nNQGYajvxauDbin1dwAkbUyCvMPQd1GqH68jPukT3DVx",
  "key13": "5WsrvvfEn5T6CDuWmhEQSxCMQ2ZAFQ9sBaj9UMg98mgmNCTAZdSLU8PZHiktqeWTuhNRTuohUQgH2k1arxT2bPeh",
  "key14": "2n7XJVoXtNf7URRrE6n7aNZyUi2t5qF3aCxRvNd146ci36AigN1W718NeZuh6t8UzkwaFZ6Rxx4nm9rrtGLjtwdX",
  "key15": "5PNnAt9xEc4esJ9hsnykceUtZifQkrKMfs4s49KTjAcPHwoxssPNDeLmyyJ1q6bzyz2hAmoAyPq6KF5G8cxQHYcp",
  "key16": "34zpXN2eqWdQcpjP3CQeMdEoB3n2zp39A7J92RfH4LeLoQSM9qyPyBGjbF8QKaR5KLiLroxjZy87ELG7DMR34JK5",
  "key17": "PFgPohvTwVMgHkdNEbiMcZKZg3JN2soJQgoWULrDeE82YTGXLtYfu7dpDvxWYfDmLEVBt6UjJjQZSPEPvxYxxc8",
  "key18": "31i7LMmw9NJjjmntmYWDb8h1LmcgSJhvRXFrFtfsjVNZbd1qEysk2zX2Ygsn1VCvfB4Ji5eBZhsuhqV6yHE6PYgH",
  "key19": "3vDhQ8RJZ4LSunGwUM1KA4ukRJdQFsiwCWwsMGU2RAn2qyEHK2NK1rypaMJE59hkPyaL66tAHVCdugcTMqZLs2my",
  "key20": "4NrsuP4Uuvbv4bAhQTX5eA1uoAyGjgN9mjA8qYPqGUHW2yRQyxfPpAAg6r3ucUUDZNATjPUkBqMe6WEp1jXkXD6x",
  "key21": "286Nt8BecU34nQsFfCUNFDnczt5pDYEUjg4orXxwnYNhxp7UvLfVuEpF4UrwVBBqofUqU47oNgWRA6hjJh5NFp6N",
  "key22": "34MCbaERqRdrCUJ2LhFpa3yuYqCDvLJTrntnnSFj8MpdSmJJmwRD7ZxALckugoEJENJjW1uRw9J9463TUEnTUynE",
  "key23": "3X9dyfBXufdXV7SvDFaG3hnywLYoH4QSWmv8nH9ufwqH255FHpS31QofC5p4U18DAqBybnmQ6eZdrNT9ad4323u4",
  "key24": "6ojdgaENpDZAdqggHCFQaqN7KKM5v2RvqypWgzL6MheHLwHvLYhHjVSWFjLJugbiVDib5h34HgUQJHtSbMw2h3i",
  "key25": "5RHKGaA6sLVgmKfr5A7njw8qL76fxv6RGYn6ZmN5CuEds9VACCUTTDZeXMr4gVpFotunJkoQUQGrRtRHTFvSaZWz",
  "key26": "5bmughLYxYCFZACrSFwfBtjDkeQ2KXnHXLBxL81v4mE87HkboiP2oQH1aZhfjqStbQZDwx7Md6hgUpKmyWypnZWv",
  "key27": "421Txic2o9HSyCoRLWa7Q215eqqhiRmJ7iLg3rv447AKNQEMjfDt6WaRZo7iZakcnBzVh6AJMchsD19jgmgwpxNK",
  "key28": "5ZaNQKdxzWa23QwW2icybyaH4ogyWW9Bga8yKugb5RZ5P7XFaw5a5saUBXSGRSsS2PhC7UFVF64d8S1MrNX9ecxD",
  "key29": "z9PeCB2Y6jsiTWvWDuoSMaVAoCBQ8isQjMTY94J6qa4JG3asJFdBuWSni41spPh2nTtRZV4rjCTQiPCGxt1sKwF",
  "key30": "2H6iN5weKtn6ghnWLoFakK6J2oqp5FfTiDCtt5ECrsRyMoFBJLMYRXQ67YQsYo7vBj8eUMtsiEJcJUxhdHJ2x9Ae",
  "key31": "2F9D58n3mNXvyWHemxii8WNzMHaeUiysk5YXVphtCtn9b1R6A7t9G6QaAuGtKcCAEj8khF2ndYQ2cogGuAhedaX6",
  "key32": "hbUtZKB7FZqGsnmH56TGMq15BVbTCFgEsKcDUW8btRmmsPM6dM8LHdUvCdt7QRDJUszmUcuTTC3VxAXDjatvxVt",
  "key33": "RzssgeuiRDLcEfDpkaToHj2sqfjmydWxaVKGrQPJ8amSg4XL1uzxDUHEtwE3uWFjh81ZwUKMwEJZe4PSwYEwyKG",
  "key34": "2ftAyYBLFZiajLA8CLWeQFU1Kmdpr5x4dzpB5NsYH2WGYZ3TFE11ux4VNd2xVaoSQwKPFtgLyFL1LAPSrWSU8FT3",
  "key35": "562AACXPFiVEMniEMoJCb8ZxWDu92fgxkf6pvjvpHbWK5Xin5R2LijFRRQM4CRavmwp4fPZTuHh3o5ZkuLcsNBsg",
  "key36": "4r7tVLhFmjGEvD1cJM9h5xvLkctdV9kicz18rKtu3gLJaYeRSqUG7YSP7RfdGbFnCyXWYomPirCwQutYwk45V21h",
  "key37": "5WUsz2RjCyS9bdKU25AQrj3AeiN8tqFs1LKsgLbBiu9ortKnonEC3DZcgUtSfEWzA3HGXZBZBuPiNmNEqxYofb7P",
  "key38": "3ancGASzcNDi8fSJ89hZ3JKG5ue9WymzVZEpmVqQ8jY6DCpVuFuChNN8uZ2Jr6tXQMUMaaetb61n15fsAURcHUmV",
  "key39": "3TcXc8NXtqMpsonSD4rQegWULpbi7T69yy9kPMVpcEGQhtDrmTghNH79okPJwhptJNJWPSt1ptQ2YbCVnyy7PeLK",
  "key40": "45yL89UHmh66S6Wk8r6do31fhw8e8qimGWwHYytXquPF32uWakWtcNPvBUyKTipbCpaPsEEUrNhZqD5STvn9SSqD",
  "key41": "3zh3SeYrxrZYq8kQVx3phFscP1eXPTeaLvurdk5nzpNwkbtqXCwGjHvWsnMiKsbEmd4C8AQhHKouh1DAVrtEEBJA",
  "key42": "hokDWTsKqahpkQYwziz4THkEJk4jbSA7MYz7oQR7kHZDGzGh9fxkk3JjvttFXXGUHWfY8PsJ7xKDjpjXbLa1Wk7",
  "key43": "4jT39nKknk5wc4uub8sExbCnsGjPbL58J9AwgsEAdDas8sQFChnSCbCE8EkQCFxFJq9FYEzwbgwEaUxzXBUxPuzp",
  "key44": "38ARvVyemctqXExeiAMSJ4ay82bjYxbBxBys4VE7onHvJaSPTU2ma4Zch3KYypowpayh11B66aNikRYQtvJXvUFw",
  "key45": "dXeJ2G4ZZdGpukw861sy6i2rUtu3fPLR3xf8ftEdzACbCrYZGifse87gu3nYokZjK52aZcAnexjq4S81EpBYVUf",
  "key46": "4DMMEfjmg2Px2DrgwXYxUVcDpv6XdFsDDcTXeUsto7ZNYaRLxeCe7NRrM8HrhkZk8t7LmHX4MkYbFzjAsVQeoYNn",
  "key47": "5NxKtB3ZsmAAwRj4Dcos1NoZ91X58JsLo2RRbVeD4p74D3kdRLPUfbzMvaHv4HmbMq19ZbFW3WCCNokzA53vrjvM",
  "key48": "5tqYAtpURMJTSwz9jXDZEUPhrPXeQywmw7KchLNEcTTHCjriZwQn4HpGfwKkirs5R1pMxa9kEaY8jgzRzY8Hen5H",
  "key49": "5HyjJjEyTTLZxKKe5gEq2b9vtEwhSnSuBnZSSpmYvh5TZRPLHMaTk3xxdWMSiyx84gZBiB38amwnoBCe2xVXLLeg"
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
