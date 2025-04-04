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
    "DCW8rPuAbSyiQGiLabLGHtvAHB28ekxaGjNzNqEcKL9TEe713BGKWzBZJWgZqZEWzpdeWvCLuHJRXp3yuhiGgAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b8wYMKK1Tw9CAUfSJ5ZxyiwT6pB8AUTCo2iRXrpkAvgrPUa4xv1DnoeWbM3CqbvxfTph2qTtQWSbauwtDFwn2nf",
  "key1": "4QYYnyNS5zFQxcJze3x1K1Mrvjg2p1ywZfUoK7JQSL6yQtfofNuR3yEyzr93B3ByAFL24dCSebZoCzcxHwrztDMi",
  "key2": "2A5Z6Q3JVeiN32cgkdM1HttjXPrq8PDQXmJ2iUYcHjJ4KBu9GMSE3qLTsyyRpGzYRNWky6s3HkP2Sds3BreQtw8H",
  "key3": "3hu7CgaeErnjQk1bRQRTvqgfFs9MuAbdrvM1pMz65x7D4RxmHvDRPfDsTDP1GmpYgJwYb3exBtRnMYWjzYX8FjPv",
  "key4": "4YkGEbZfxZ1KEmmKXR6d2134EDfyvADrh9UZ3KwmX4fCKWTRKkHx9jSJy68BDtZBfuDFmv7XNE8zKswtXfcyudZw",
  "key5": "2BiC6o5jnRFdmggyDKDGqDyDieL2xCVkJkdESZbraJTqxP668n1E98h3m6odg4qygoyMxrqLC5v1d4u3wdtkYAvi",
  "key6": "nd5H5ioqbHi14xEXA1wJiiip6411413ifroTx718VJ9RfJ5dY8ETu6GdA9kawwuPNjwY19Np2yhnwT2SbuMwncv",
  "key7": "2mPdLMYHejGoQu6AeUa1bnBbwWX61mBR2ERpniwwZXxbm5KvSucgP997JCtv7KEfrG3jrqFLetDz46DjbTNejLUG",
  "key8": "24Uy3iFnp1yipLZpyfLBvCZTcxMHgkgfWE3RdsPuNKXVQaVAFRaXSTBRCYG5ahCkcJ1DwUfoUGNLYncCe5gRFweM",
  "key9": "5cVxHybjiTBQWpEkeVTyPKNjCyNk8TyYCacY5s8kzFy2nH74NAJsYyFHYxeP9zw3E3bcBv9ww2Q43r4oT696SGga",
  "key10": "221eP3cpyFYU5MA6tj28Nv7ELnSMmJKNxcRnJK7yJFzNZoxd5MnC9oBfXKesvoWpDsXawN6GzJjZTdmTA2DNyFoc",
  "key11": "54UgrrBMvshWVgLoB5Jqh2SfiPuZCpm9k3Dc16Rmnj1ueo7AENhqCkwR3GFBLKXkh7diCE9gHVKSot5feuKvivrX",
  "key12": "2y8U6mQSCUAa1PtaGuhFwG4MF1QxdvchfR1L2YSFfkgPay9ksyoPVaHc8n4vJRYKHLBRHPjESu9M3TGewyZC9ruq",
  "key13": "46ueMRYT217A9frFSpmkM388AnfvSHgebpzEg83Qzdizs2FfRsxG4FSMCH8toRwH71q4ngxZe1jy9qwqbY8QcrQF",
  "key14": "yYqzKe55SbhdgsYyFZCf7iyPkJahmrtawALofbexhNdfKbkw4eaCEUbNej1RFJBscDtdsbLydivnNWGr27HZpqk",
  "key15": "62s5p2YBQWPxo5UFtZUXu6AYByQFubQFNP5WHig6Psj9U1F78vqLH8fNWnQDh31eiiZcCeKjuQ7TLGoBc6p9Bq83",
  "key16": "2PnFfnzJ5bLbQ2ZEaZkRMQhhRwgRHtnuszBWqRUWgLa5r4PWpySYThfzSifN3pEGhcfFxAdA2L5gphtXuHQYWQ3v",
  "key17": "abLbPfb4PtV2CERDRe2Q7uhiq25R7nuYCyvR3Z2yKdU1G1fmfXfGFnfaPgTHHkUWYyDo2sE2cRUfqxncEu42qhW",
  "key18": "2ikmQCDNa25nZgEjFT9Vfq3j3GEMWnLm397QnBcnwgV8M2SozJd8D6Ey15iCbNZhMNnTD9KrUbzqsnh8X1AVekJD",
  "key19": "VEPoy5zKnnV75RgKgGKnoYHN1eZDGqieT51hZwYDqdTTP4VGjcTmFiaZUREh3FrbttFbo6mzn1WdJmBy6hzzWVK",
  "key20": "4sJkaSCgidtggRTE5wDQRX2XK36dRczSWVu5VQKHcB1mA6qaaxpdAGvuFNdDsybWTdr8XDuqkbT7GbqXDwjoXf3M",
  "key21": "2v6Bp6ghBS1hB4CkS3v87guDoVvGWefegCdnm96b8wKk6Tsk4inCcpSYMWpiCUEggJnPEMyPAs4Y6ZwQuKJsPcSQ",
  "key22": "3C8HuFZkPjX6XCmCUXu7dKdWv1arV7hFtWoct8xRwJRhhES7xLSx8LKFB5z7BWFqacQdSZH4hLxREw8tpgzpgvMv",
  "key23": "5jDcHyKhtszN1fwY76c5TiVAiEWpvtB26KjpNn14bUW5CzMT5rkHEDCdn1pinmWnJTXcqyTDpUuGkLkeqdpc1VmM",
  "key24": "5avMzyRWMPrzYyR6oGiriKUknfoG3Pd8WECrAy292A7asJQZt8tmfJPCUKbutbyGJmkAB2rqSFStSrvvp9UUFN46",
  "key25": "L19eQoFCT1meHNAqxjH9hEA6yCG7ThE6KrBXEAhxBbqfTdjyKuDWbbpLPSvGPt3VF2R5bx29LydzAu3M8pd56PG",
  "key26": "2UdQK5K2qN1HDqNcTDZiGvPgsuxdo4WSTnCHMcG7a1F2WE4qvWn4RjjFZwYy6G9LhTR5PgxLLg5RLhu89mDRj9Bh",
  "key27": "5DhtXwA4GapEHGCFLQv643VtyWJno9Sc9CtUZBbZKtxFah8CpNKjXxvr1Wh4pV5rEyMm3GCxN5oiXh826WbEsCY3",
  "key28": "26aGa11ZLT2d9y1bkTmuFyabyU1tF1m1XnZBRStgD2xYL6LKsy3jWyzD5JwAyp4wUmbrSbT5qEQsiC3muLpqWDj8",
  "key29": "3Z1cJo1Qgx77hS1vcssi5tPVP6YkZVjgXi2K9mVUwYqS57gHso9KcmDSkDhBscQ7VMUBRKTakihDHs7KxjbaRsrK",
  "key30": "2JQUP1vt1ZiN88VPvEyyQemHUb6zVF5h9bDiewnMPZ7AcaLeW2CyCLGNeaDv3hzMVNPewkEBFFGzb318mvANgjoR",
  "key31": "wBThYpYo9cpiX6Pf7XVFzaUKzEiUD5vykXG8XjZMQ9Lc9a613MtZoo2m8jJhTa7HyQaoyvWwyveWVRhfCEdGbSv",
  "key32": "2z42WkzX2HRFCmfpSamWA9yiMvd15eurTMcigAQJ5KvgnkZmnGnzFXyxuRe5jKw7j5NBMyL3hWGF7SjbLQvKHy2o",
  "key33": "5gzjrr8Zo1MBGV1xb8HL67XiwuazfWHeVWKSrJrCRErpQsbzfT5pHVn6JEL5aWsa8nNzA9vWhPo99gvpN2DSU9JP",
  "key34": "5bcu2LMY2cDbzucVbBcgyCGmZ1mJTnWr2tLuiH5mChnVcftGubcH1ECkG2neCyTS5VFjbnKJwtm3JQTPKjb9VdiY",
  "key35": "4hzXbPTEHMGvBYirS3xMQyHfmVe9M28nWRkVNYqa9g6y9ioAQVtEXHy72GGThrDwxrcPUCmunKK5365e28MFZTx6",
  "key36": "4GBXw9SmE2inL4eopzeAWkypoULBamQPR5db7GZoYJwEgQmFfRiy6nEVU9CvdgG6HAvFwR3RnCDu7oPwBe3DybCY"
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
