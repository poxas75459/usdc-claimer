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
    "2atzkJFceAPjR31cyddT8vdwEgZaCLPTzLezTRuDrnASqMhYDzvTCf6zdsWCgqogXTFdQFLpUEYpQRpFBsUHguuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2omCWX1th7r3F5uurtpxUhBUY7tT7a83kzE4ERijB15e3aPPHqZ4QjVhBYb6Fe738fPD45xjhbSC6urU5LoPLFHW",
  "key1": "2Z3AaayQB3QN5ZVoo2Ev7SRi16MAoGjnMJkaHynC3TpHXkM611nBFn5XNuyBcPQkG4S8ArdHk8ENMNCSrA49ifHP",
  "key2": "35gYxrNLb6Yg9gJN36oRpfq9KNoVx6XemMSQvtnoxutMUt5sfBErZvN7sNneurWwDeGvvQanHd8NtzXV25PJFuTS",
  "key3": "8qKb2XVrJW4Aq5Bz4isz8xhqFKJYX7rqbymsbNnevHxcGcGrB9qJpW1RWH184a7z3AH2VTJsjZQERV6eEKv2Mhf",
  "key4": "2XD6PhriWBY55T7ZAEgxUGtsgpVi9JjkoDhmar3aJz81vD5P9ebQQjUwBQYyXJKte454LsR5Ec2ETryjwYoB6bdS",
  "key5": "4gsC4PGXGPW17piF5JkoG46Ga1yguQjRnwpJQbzhzWiLLsAy2cLm13SrEXozZneDmSWbLbno1ckd8vTDSeL5PGrp",
  "key6": "DpWfwyhaG7oyvbef5ku1Z74rxjCW52nSqrwzs4h2Sr491tGiHQaw531azJKERnVtYKXb3m9u1KaJQdvQPooHeqK",
  "key7": "4KE9aBjS4nmZCw56K3RWr1GqHMgrdbNrtVcW4TQzymHeKJpcnrNYFQpm9csSxaXY4Wtsp4HahfmgHd8oKUtiS4JJ",
  "key8": "zHK8MqVL1paihD9Vx1XZZ7S9SUF3DSix8ZneMmHWQ2SRi42FPwZHehLdBtgpPtYUbashoP5bmB2CgNXszXBrGG5",
  "key9": "5Q5iaVd6Sa6hKrwMf18PQu6z6EtajG8SZp3czy1haw8tE13kLu4vuT7R3SkiYJo8ZfYvJcAScSEhaftrrJe1R8cs",
  "key10": "2x1r4tTUbXhzhKXKYJLUukUv37v2VEJpgfGeTUNzRMyS3JPij5528sQi5XMc9ktTvrZc1scf7wYcrk3nfBHZ1Rf3",
  "key11": "Q1gsNUNaZmmQozadFrTcVKbuvetoDQZqc6tfkSrHdwcoW6ZRje8vGdZ3sZze3ugPuotjniJietYDCfnW17PFcs3",
  "key12": "4z1xsSdpyRG48s3RLnoqHKge2qXHAogq17onwqA4dTvtvifQbNWdPs546v4AZU2GwxkZtHV5x6PwKycFky1FdsCw",
  "key13": "fxt6hqmXFCfomFpZyQiwUWP1zRM2B18BHfrQsrAyQbHstAfDCWNazzA9MeQZWhAgc6zzZ7dJfQcS1Z44kuvSwSC",
  "key14": "VNP9y8ugRuUZbcnSae2M9SsLwnnGqbD8uvfTMEFkKmWNddGoC8iWoVWA4ydQHABHmSE66RXp5FG6uAG8vq64hfK",
  "key15": "5woct2qgyNcTMSveQy5FW4VrWjrQcubaqjurKUFLqtzc8McwcvkcptBmRYDAeMSjqqgg1cYS1bmM6wX67xmri73y",
  "key16": "51f431ecVR3HoeTFoqMv7E1Nq9KL18smXVWrMdpjC6hDtt296ath79Rza54iaqVdevbhLh2xN1hPETFx4TSwJpZW",
  "key17": "2Tw4UACUmLcReVqr8rTkvrPHxbom3ye9yjruZjXXvGGQ6sQpc4PRwnwiBmHsnF9eytfEXtJm9juDVkwa1AgV4tW2",
  "key18": "AqHe1TvAfHzhk2LG91umE6KzkokQTRXsii1saVuU8JBq4HB1u9tRkGb9Ze5FFi5KDHw3SEcbM5BmetNhM5XxbCx",
  "key19": "3pMA8j46zs8Jn71t6C9ni8zskQX1qfCXs2ASKXiYhzvtFNQPE3Pf9nDTX6T2fpU26KrUKz2bvLZ6z1J5cQmwsLkw",
  "key20": "3uMFt941EYkrFanEtFzMDScsJLdcD2DGWnS6VC8rSfFTipjBUsf3zejHxZ5wA6ibm8UgLbUu1cDwpqfoxsfmScZd",
  "key21": "4VoHhj4FjuXFL5EfkwsACTL58pnr7sX6c6tQH7k7tGtUNraAQ5TDRQETvEfKLR5Fux61JzM4qHtfrcbq3JHnyv4Q",
  "key22": "3GaonFRMYGAVoQqsqwZXk8xR4zbBRmYhuWxitA4NUopkC51uKof2EeyCV3NsvETJScjrh5g9D2sWUEpfG7aHRbb3",
  "key23": "4CL4e6Uq3mAA676UY6ZEdBfVHhbot5AjFP8nYYsHU4jwxZ86aPbVSrNsMpv56rB8XPRNn5SSFHbyHKFvXir1tvRE",
  "key24": "446NqqG2T6DnmFbvS4XDJK75RLXC7Pmc8EqJYhJFeYhiMjRtHQM8ZmqTwbN8gBmWWHyNu1sDSEcqEx4oVmhxyxzb",
  "key25": "HGsF7Ut3adWpPV4UcXF6ABRFcAv5jXXmSu4Rjgtm9E5XHq5CLgw2Z9EnCX2JAYCKerCRzpbqu3Xjz35AhV2kvcd",
  "key26": "4VCRVJFV3K1BVemTHALbsnHTLtuoaUifDyWuaQKoSijiehe16rEs52DX6bVpXZgBDxeTSorCBegjdfQvCWNVaoMi",
  "key27": "d7aApigw8Z2zrZZfvxmWp1GsinmzFbYjMexoBzeyM3wtV3xKBotiK9jyo9dLPHsUBMw7vs8mFHk8mqGq8uGuZV3",
  "key28": "5gR5a8Yy7fqaT2dqX4KG1GzQz5d3zu4y4AwRBZvhz6Xwoui32rQBUMu27TwRk7FvoESfrt2vUfC9deKshqdMC5Hm",
  "key29": "2kuLMDVotBVaBVUAyU7rjDxX8DWEQcgK7xxPU8zh6tYt93H4fxfByVbH9rYKFwLCZf7TX3bKzGuLE1ndFZd2DVK",
  "key30": "4ExkGkY5ENtwtdTjqkVaneujgWdXehcW3bdmRWqUn9z4aXwR1tqGSGTDXkr4tHvXR52B11g6DiCatECE4bFFpkSo",
  "key31": "24ueKJSV6cAMwZYUPSnpcVYGRhZKpfhLnrxJkFS4MHNFEg6xCofewBboF1ijHhy1FS5FivQiUfkPEvQEKanXmmSN",
  "key32": "3wLYXviCuLarTvweQYpP3g7DSnH316hFmfizhesvecjhpKpEyzKNujWRATKrjn2nghMeWMLCFZGa4s4Ls7Dft8fs",
  "key33": "65SXz16LJj3sJhAor3qCLFK1nFut3xCbqpq9rM2ku9Gq6K3jx55x1eBJMbLnSqEfqxN9UHa4Zuykz6FhgHTn5jNR",
  "key34": "mDzaQhNShVVhN4MUETfynSkufLM9m5drFtxjpAoBF9mAbm39ZqQtcZiJBCFrKxEVhYosff6tDjQjT6cbdPAT3ad",
  "key35": "4eQS7Ho3ZwN9WWrw3bDFrNQ66FihH7GeEJ8F8mzLvhXku3xfU41oVb16sfRYksJ1eiJNSwc8A95AfGL4kjzAtzEd",
  "key36": "39prkya1PuxJbxxNT2uigTjZGHvMefxwKdHhPccSFYyWET5Enhnd2fpQgruEX55mifvEHook7UGcTZTSLEZyQVpW",
  "key37": "38rKGZaorVr3HgpBMaJUTsJHH15tyzLAEJ8B193FyEuLff1WCiA5n4tMs5ew2PbP2VcRnAi1RKe4XCFxZAxcxvC1",
  "key38": "3k8tdtb3YHLLoToTs29vQkwSrrUaPjzZBfmmeCRYZndp4yfpre78DQkzpj8rCBk98uaLGtjwsvcxa3KyACfJ3unu",
  "key39": "Y1aqYJf3trE54ZuhQa6ftpB6wnk5RyzaiR3WtpCoWeXNxSc3SwioMsdDfmYqunpwrLbDnU5cugYudz44rkZVxQt",
  "key40": "2pzZwD979FKuS5nQPmeB7cNqf1cDmY6DDGVu6WBTx1ZwJP4AHB3DuiKQcGKwxmQqYKRD9xR8iLvMDJ8kBFMc8qAR",
  "key41": "4mk3AueZRHQxZCZ7Ku33GKBiu2th296P7v448iKq6vVHrc1sjSJzohryTpiRkcgQsVmiWJubqaoKW6Q4gQxVUgXA",
  "key42": "3fADkDfrqASqSmDjpvgvQ3fnaRpDuv19CD6W7b8C6C9sdk7Qmbu3jimEVNngvJWD7ZWPkUhYQW1rbvk5u9GBBt6t",
  "key43": "TdmZeQvkGUKxfawSTw2JWj8wrC62tzPxfDpbxDVVvqqBMStHCfosKwJui8kGNWBHiyJSduvTHUE4kJyubd37nEK",
  "key44": "2mQSbdVTBbYrUT12DjUFWfwo94kQXVHu8azqzVcCQfEihWfgJGCxhQvLNtgWCcbughRZz6VfkCUeZjAPZxcCkGr4",
  "key45": "CiRABz43ikLDuNZqNECQcftPje34kDKF2SB5nGjjYf6oAfWaP5zEzyCXsgoWFUu1fqjNotGUK4GAeWcbiWM5uzY",
  "key46": "5LPxrcXc1E1yW42Dt512Vpuj49c8uFNGYWFpH8hMNa21oWDRbsbegmHEmM4p2giWbvuK9ejqFVfAbuYmpX3cqprm",
  "key47": "1iF4VtEEab2E8XeY2VLHHMKc3wunhGH5utP7kUjyNTHfvRvNVwUQQi532HLXsoqDaHmCQ7vkL51QrjhoL8Xs6Fz"
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
