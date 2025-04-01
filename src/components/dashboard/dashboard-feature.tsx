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
    "29E1ce8LVcSp8CRJ2ZzRMA8fu2yoaousLnnMAyskH2U3SR6WfJGkdjF5kn7xKPCkWkDh7YmpAPLThHky3FFK2Ho9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fWXrf7Xid8eYuNJxaLBCVVxCjnxdZykBHKbUWxmUxkfunRBiSPpngnyAnQvAY2v1iNkwkWMcwD3ZVHXBwK2dbgd",
  "key1": "33VfT9KFEgTEKGyZQeYpBaB7vdTuqD1tdBhTjyNiWpzjV9mobheF6ZKRptoXvFNmrRJCVMdmWkSSYXxiAbZhNRZ5",
  "key2": "4PeTbPQZkC3CNUfhzfxhrVYdQf6WoVJrMHkp7jqDLc3qrQ7CmgZnsS3cQbqep5DDLsKsEtzYEASHPJwWugaBZFpw",
  "key3": "3DHcBG1TcaQenFCSMBq9s6Gb6bqBHLUpAmsuScDNZjNzognRQtzNjso3923R3sPupHMuvNoBAToEVirqv6U2uMe",
  "key4": "DrQLBktiTqJ8fm764X7puC2N9XMtas6qXhrrYybj1TCyzbMTo8iWCtk3whwYS9p42V68WErkSkyXxZ1mm7Ao8ZX",
  "key5": "2kVsSocKDJ8wphhWShVrbVDQ6ETLDH1rEuE9nFZJV7nuUHPXvVgbJKxWCApoxyg7R1w8R7GZUFX6DnphitjCqeHp",
  "key6": "Q4tU75cSVehwZndJVfGUpde2bjeLCqWeXTmxXbkS3nR9PUa1DkX9PvNkbt3HASfE1AUZC9uHxy3tvyzWDu9Wyh6",
  "key7": "54e8MTrHK5YiTpfgehM1Xx9jTK5bzq3J8DC3hhG2rLbdH5CJ8Rpb3rTmLpScyi2wEcCDmNbbtpDS1EuJuYDACEah",
  "key8": "psBAtT358emfRuNAB24tFcj4Eps9vVRqbPNPxoWw4UEUj7TZmds4Az5xyfjWsvgrWXPNLznEqHacSXG3Up8amjn",
  "key9": "5gAaBxu7j41BXw5hUTrP1vC9tUPbvCjWnLbaRkHEM7a3Z84LXGCqpJGygnEVfzY5YP66t3xQC1gcByfGXFECoXcK",
  "key10": "4ZdEbT5g1niHCaE9qzK3arKskSbnafp8VqeJQFVsohtKndBDgMW6jQVR1kxXvQz8TpmcAGmAYfKj2rJVxZvNwM22",
  "key11": "3p2UUrtmeJQcpvSdsytFjQP8hDxMACvot4dbvEvTvRWsnDJJ86dWaiaYpQahJqh4uwnhJDCgBjh1U5wHWGFiwLkY",
  "key12": "3YZ5fqYU82muKEdsRe6hihaszvrbLDfGFtUiDCWYtjK5Hu7vsoCFeUCFeDaoUFUevLeKe8DhbRiowsnojdSbbD7C",
  "key13": "2vwhw7prE1fgFM4KpEbB3AdpPPcTCmZowXTryAz623nychesJsSsS5E6fnx3ejZcq4vyV4ef9nQajjeSn5u9cxNJ",
  "key14": "2FQtva7eiB5zZYmUChkaoveH2PEscKrLc7W8EiKHrqVYzrZwKKLGa9w3poMtv1BGZUF6CUMLvFXPtKKTEfQ4caVL",
  "key15": "gyLVTsaEAC9FsFiwverGmvKPPHYny19yNbafTxB3js92DftYeQkFmBQFoX5hXrApjryuZsVp1VnmREveZEX7bwv",
  "key16": "5GXP8SH169c8D1iTRVgmd3bspcnttZu3evmdireL4UbCQVs5ccXRCTPigBb2UtRP6CPjFaJCAHg4Qpoq4cNzgB9d",
  "key17": "51aBdc8zysQnKcuotK2YqvenTZctTji3QNfDP93qpVg2EvupXZpiJbgMpPXZthfsW8eAoVC2kzkiV77YZPvwzjgy",
  "key18": "ZpCc6rPayM4ngJvsjKeKHVvTzNihJgkfor655bPKqBUnfnFvbPGj5y9DpjAZWv9szWzyLkn9CYd3p1fQYFw64TZ",
  "key19": "294oJ68XYqxJAsABPMstmhfA49FL7py8tJieCdVyAAXqz6YRvPPTTtsnLeDTKekSZcywoRyhDM1oHMSXhnmSgzJr",
  "key20": "2BdjeLbwtS9HHKAcYVYhxVmbwHfmijueovFDFVp8qYBWNTuyPHCF5jLknMTzpEJcuLHWqLfpb9drqw5z3AGaav4y",
  "key21": "4m6iNYYiZ1bc33KrxYLRdanePaAsDrtT7M3ADhYcosJ2B8XNPmkk35971uwqTtv66AuHQ35NHKq6mYNSJor7Vf9Z",
  "key22": "5j7vCiCRpdG4C56NDAwZDdnLXeFoHgR3bUSgVD43BqYTomz4Y83kXY7fnDDVRjMYZm4rswuABxoZiPCT52WVLrwd",
  "key23": "33ZYnFMrFFaogUAQf7pD5SkZNURrw9coqVsBWBQG7Prokz5kakWNTTZ6y8bFJ62Ge1riWHo3w3siYig9xvgwUgqy",
  "key24": "5Xfai1aWYxRDNFe3XhbN7UJndEnb6RE7YR2Rby2SU94VfWdNCQsYtpVTAeRESmopuTSCBZLjXRi4uL8qZbkW3Dkf",
  "key25": "2XmbwMaaR5bYaYLiFjWPuCmVDyNve6pEZ6KXs534ws6JksGYmuatXykXFXM3AbKDF86vxthGwAtGiKRVho1N8xHM",
  "key26": "wZhdUWiebrMJJpdbuNEiDiyuoxwDXRqriwvQL9Mf9qoqC5XJwrpEdat4RGs4ufkaB6snxVNkaiiJishD9fjxBoy",
  "key27": "36UxpKFocvQ1YuhTb3AL2SC7VX1qUwj5DCxUTi4vyB9x9LZvLD5uQMTuihCEh7gFKinkg1Ao3Y3KB7nndPZgQ8X4",
  "key28": "CuNaKV7zYwCcHYoZXX67njFd9JCcCUf4LmsK27QYKSPSCq4WAutT6hEoc3vNwKBVRYmMr6rxEMJTSzPSr3pKwUQ",
  "key29": "96qVaCeNzwRNC5rXNcvNRtvt2Ft2kbDvb9ujYAFrbYpKF4bA8QxEwErCyhBFx6PZbboGetEX7EKQoLt5geZ71TB",
  "key30": "3Sni6gumJJr2EH6SP5GouhYyytPrq7mRvxhQ21rNLHK6hUs9hNqmTMiXozuGwhkCXAf27N4LuwPQZVtgjqiVruL1",
  "key31": "42DfycyKcKXMH7gqsHSM7L4Hh2TC2ACovPNxsWpBNsFi3DoadFN2haeNBPq6NpbMn5LnM2TNDRoUQfpVUp6gFSFX",
  "key32": "WjHNiDuSt77Ywnf3eWQfLhSzok6a5thZWZasjQD6PHYY2zufv9yN1iEopw2ieFAusbBCN7ZVuLytdKnsZpfuML4",
  "key33": "3zzT4mYtYiE5F6hBxuqUz1Vz1Q2x13x2UU1JsMmGxxyQiZVkRGQ93K7Ptb7i2ErcZfE3N3h44acrthBAsBdpirmB",
  "key34": "2MZN2mSXyqu5u1pnb5wsFSdWoYpUBeMudGakZVj4caBhoFDyPEUsmMXY6oF34HSESDfMnzbwMJ413N8cFhfhaB3q",
  "key35": "48s16JARS31Pn8ueFiqQugeDYsir1Yj3CWtB6e8dFrPQny26MzcGXy8HsfdGoNb1cLSXVtcffU4MvyvRYojMebcX"
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
