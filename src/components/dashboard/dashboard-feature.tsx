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
    "5nfAqjbXudsr6CRA3kM6R9UCEWJyh84EJpr2dLYyc4Kx8sivn2SVetwWqr1rb5hah6LuJ6sQ9W7uQkEcTiRvHv7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EKJe1NMbrxTF9wbpVuiCEw91y2QyYpTMuCM7TrL3dKvhEnaP6m43rjNmqGPjTyVvqkUMWj12Yv6yyKteYeef9jz",
  "key1": "2RKq4BEGW9hGPTS3Gvt6rWXcqZoJR3puFp2FGoSAMYepQv4HoTBGFULsPxTjMnNsKjCp7LLTZwEeEKRZtsRD6pGP",
  "key2": "3csUuUgZ5Yjuik7FAxq9me5LsTEU7kFW4exBW6yojN6HwMwqJxNenur3EDKQKxBEovc7h8hmW7VLWLjH877ftiAR",
  "key3": "32B8Y7c7DAnEuAhzAUQk1xoSoVF5SQtanahQYzBFHHXVGxGjDk3xzhgWaFA32WcqiDUGGUDw3PMyrxNsVudup8um",
  "key4": "2odjwwYMzWejjQje5iXY7QBdTFSQWFeeS6SoRRDXS5ENZY3CByt4fAHFDksNsSybJH3VXKSETSRNLWFkkMhdj6mJ",
  "key5": "4aVEzLVjLCdNE78adiApMFj3GqKVKidH7fnrjmLr7uGqdYtqzn964MQ75Dv2bEW1kGSVn4StGaNy9fEHeWNa6Cuq",
  "key6": "2vYbd9ywP9JybkapHAvRGtYE3eNmnHXjrGT2HeWPi5fvXJjzy4N4pt4KcnFk53ecCkVk4squKiZeojZiitrJ7tER",
  "key7": "2NRNTwZqb4T2A5bJw7M8zNwqo8u9o7YUDG6g7JEwy5iQTDrYwh4uQ6hTHR8szt2kFftfnB7Kh9JjPGsHFsuH7ffK",
  "key8": "3pRVTXW7VSXW5yqHN68fPiNGP4DWazoCBrMBcSV3KAWwRnzMeifGEz89nzEuJK6wWCkdFKhmD9ftYW7NdaTbsDt4",
  "key9": "4smB9hjA5Hnq1P6YvT7m9f7S1ND2WyyKmNxVukiR4hih8jV5gHBipvTneL8yyVBc2x5JZYbTSqnpfidChNT9Us5F",
  "key10": "4yWiqmRSi6eLP7QsFdTjtFM9Jje4TdoURf7PwMCfudJvMRAgFhBfRoeWckhTyhPCqkFQfXa461sGwxHTUq5QV4YB",
  "key11": "3LZy85zGsqynHRrz7CAdVhVP9Uptbm1n9WzLh78PpCK4isWBGhGvGWpdeiUAng4v5sqNWBFRJctzjnxSmb2PLg74",
  "key12": "4MbnV9ZVWedVjVzi5LxYJsCq7UV3HbC7StgiPEGYPSe6rSjctFnM3ESEFhSugH3UgbpPNhwXuZcn9vRfWxKkp335",
  "key13": "1Vsb62AwWxyBQXKJk7evEzQqkFD7eKws5ETWF99ksTiDymZzQwESyxHP2RbrtMKYevDXrM93wNSQhuBXj7bCFq5",
  "key14": "5ijSPuR46zfEFvVYmWmWQVu5sDBaUfh4RZaDboT3qwq2pkCA3EEZu5BPKHpdpoUvrqW4hA7yCMjCQpPirRMtfJ5p",
  "key15": "5KJrnvQ3wVKz8YuQbFnEYfx4N7aLky31SJzBc9rU9kXuJSH51pWa2E6dGWEfmxVuUQ1pFgyG1LwbtRKDMWjjpDz",
  "key16": "3uQF6fy4DXoVj4zGA9v4kzueT2WPcqnLDGM96rXNN6RCZit7LSKTx6Q6TXsVehTGrME6jUQeuE9JBbxi1ZpnLVHH",
  "key17": "NJwgwLCaCPNWMfo114SMahsNu9k5RYrwFhv3UdYKG4E5Ps7bDmRHkQit8ALdK7qCYcXfFPVmRK3HQLNkPLjWr7E",
  "key18": "2vSXjHarP6Yswwkm1sUh82mU52uWiPW3AMZR72b9T3FD4ZdZmz1ccNSmDkuBH84J5LEpXAXrssBt1CWf8qgnofVf",
  "key19": "2mKJ8R4X5BydMMHuAgFP1RzMTRFJno3GnSsgHMm9V58WoF2sqBeYv4nVLjC7VMZaEgyW253z5mix9CjbSvaKqr6n",
  "key20": "5R6wyXiezQiBX4GsH8DwQ8ZCzfeqAUdWHEFtdcNrfHAeHEu98hsGWYEetVmusLShJxTgJH6RBfQMi55V5swV8SuA",
  "key21": "S7TYcmo6vXCiakXamUFxfk6fKX2PC7XGbEPpU9MXVoEv5wcC42vBW9RkUsuSr8Kt5PHckzcQmJ1NadWQ5CykCzo",
  "key22": "5GeUkmXK5Vd7xvAmP71PSubpzcF2b1LsdLdyLvWABCdh87LhpdDuYbtHpVokRgsYPzKrvi7zs943fbfrC3jTduhC",
  "key23": "4z3PjAJAujc4rdXhUTBy2E3pzDRtTer9826aS5StJRi7fdP4tVUTAdQv4VkQPhDBULnDsvyaMgxpLjWN8Ssq1cDZ",
  "key24": "ZJVwEdcyCccQNtyBiPqR8adAEtdkJHVC2wTnQPFCjBWhMEbx54Dg6K9B1fjLvPUdWnLHsLLKAeMgSh7ne4aoC1c",
  "key25": "4xWBmrAzUyZn3GZ1td7ApgiteHQony5B9FvjpdjM5y3CkJqfL7Yo2m36Bo4XBc1718khCxtagAdF7Y1XgR1Db4CN",
  "key26": "sqkrHd4TsHZ7KPzvFx8vqF7in7sPX6kFbWf8JvrzHX8Bruu7fUCesK5Hocwykbx4L7VNdhMubaeByuNqh4r1H6U",
  "key27": "4Em5tDhpayzGmKssfYsjWkrZjvBWsGwCQ7bQctqakf7Q3PjqjEGkfqz3QqrAifSf8yFkmbEhJ38Kw9Zwzoo1pnEd",
  "key28": "z4U1TeiVAK4b6x67DoCdYyTPw89JHWWT2UoAZoCL8Vok3UgZMwLaDVxvpo54hJ2yX1FsThoCTSTotBedehTi9gP",
  "key29": "546P2oBBuTHswLeRvVBsBd8L2heV9k2xHNEQVpSKof8GvoQeJqtNRzuiKkSZgNR7F1byUMUhb7yosDoCybyt1t8p",
  "key30": "52ieJH6b11DVmy9Yg5PVscDmN7ZTvrDXmTTMEZtRLnAfH7TpUHzCnRvxYAeyPFFE1pNeqmZrnhdWMuVrhAjviZ3M",
  "key31": "3v9y9y39poZN4FfDR7uVknjny6Gg3voHzzi7DiaDXGhN7sgsoq2g2SRxRqCmq7VU6qn9sK5vSnCvL6urskqL3Ex7",
  "key32": "3qisYYUEwEEctxvk61fV48ndUqGMi2Mh3K9auziPxZZneAPT3oSPMrhd93iLwyXz3M7YVCw775L9vESGRioVAA45",
  "key33": "3wYe6CFG3FDVvTYCz388P7hojsDysdpwXXwdeYFyG4hpcUj9KbXtuvuEDaXp1aRgtn7ujeNMNVdaurZAPC9xzDgm",
  "key34": "4mw6SCs5V8o8Gimtv4AHDgbFv5fBWhLvvZt6TqY9nyQAic9UUzgrysLXRbTZCsmNY7TYanafKs16eAxyBfmpYCtT",
  "key35": "5TYCWqz7Mb65rPkFRPkHnUd3gAf8fz2er5T7Zu7ibxpk8ZtLZvhAUHN4u9ohime5KHvgPFto1GeGsKG4Z7xEVe3E",
  "key36": "3Uo8MwtZyAWiH1XvUjRDAHPGhfHUSyPQKgVnAqmE5CTU5qEYxbt3pJqYBzh2XjeHht3nZHFGaWDERAEHHpCwnJS3",
  "key37": "36PMSBFX16j4NgweQ4YM3a9JNSUt9vg32w4MbRA9nDiAgKn8VtA8udPs46vEAqCFYcZvBYHPPuSCVJ9pKT9KwEw4",
  "key38": "2uzCbYKgxqS2YoHcTxoFBMJXLwj729RdHT5hQ5kFukZ9rwfBqX9JFNnp6imUyqYSVGcnzZcTqpMNBignKWr27r3P",
  "key39": "3rSnc7s9qrc3DpiJFAeYqjNbAEmWQgx7nzT9ggtHfDMhhKR4um6TSxuxi7AvTDUuN1hd8u3SvqcWL6ehAcBngwhh",
  "key40": "X9qXn1nczKyWRHXGqG4iT4zzT9r2TqWbLxd9ZGMPdpYMgRvinCT9i95FVCSuEmGjT65ov1DoqJdGvX5Z2G2Z4d2"
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
