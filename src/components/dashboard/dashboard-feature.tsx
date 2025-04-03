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
    "3PTskvZFkSoc5RdepwYuaTua8yg5AotXvHooGU8yTrWUDAbPtvBDbioRzggD7jKXnywViJQqmqUb2qdYDR6G8bid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x8kwscdrxedoVPXuyFmuF47SiV1mViYFbWFyAeLM7HmkhZYxp4mVXSzid9p7mPscLXhzUaK9rxbeuSuaj65qyCm",
  "key1": "2znvgyZwKcjneWzzGNrPPGJvJTSWj4XXFXLrxuBNN6hVLFpm55hgDvZnMwr8Xpd4SvVpX19FFXkDWA5D39X8utEG",
  "key2": "5NRE6aL2gRxz4BKph9ms44kbPGGD67ZCTtyNFR2AyJ6NCgGQ2NS3aAoigvJfU9X4YgxbVVDNjYnBoiC5sbwAibGy",
  "key3": "5rSirXKEXNW3W74mYFGJ6VQmNukCERYBwdZxDR1bjgSfiMTru3VQiCoaXJR1ZTxm8f2Cguu7wjjodTxBmU5dBghm",
  "key4": "4Jx537T7jy869bLPgzpWuL6yZgyjDuFe1LknR8btb286G7DEBTZqFJZ8CzSem939oANdAbiwmZoCioEZozLcNUSa",
  "key5": "h8wdX55mXbEkPuPxQRZ2dJuaR5QrzpwsyGAAkd1ZdARt5DuixKz3GWqCCKyynWGHWpKYHfnaf9ja4PKSnM9G7PE",
  "key6": "4ujzuxeGXwS9EXBuPG8KR29MigSvZyyvnGpxFGVcyEbKqN9oFeumuNPNPQNKEJG1iCMUKwsV5UqKNLHZxxKhYe1W",
  "key7": "22t9teUQ9iwC9SZTBSRHufztmTzuQrkF53kmCNkhxocUCxrYnjN6t29SGRPBHE4KuL4DLg2KmzVP8kgNiK8dCoHu",
  "key8": "4sxuvaevR95HQkZhHDiXGjiATBir2NHd3as27aj8FUXwd2NgjB4PXUN5asEsnPoDvqRZK7kAzsHr7jnpc1AP1XNx",
  "key9": "WsucuFkFjURoTFDVTHmihnXTNHRgHNR5zwxRdJSygVu2BVsT48Pg5eDk7tcvCfQdfEWhYdp1PVJQP3T7VYp9RRm",
  "key10": "5xfZKZ2UVdHckM8NfLt98LeAC2ouLV2J7KYUNqj4sWtL1ipKvnwwgKb44miuN3Uzg69Xm74Jqu2D9JGYp4b1Pvw4",
  "key11": "21WAgVsj3kmFpFcK62sKYKUkVsfuFr1AW6ugP3p1mtz182byG6wBnfeLog6ZuLUZMRfpBgGSWq3Cs2WebosMF94z",
  "key12": "5k51Kfypn6gTCsVaW6USnFK6JTzsJh1UWWQggkunAenJPA699uRYwBxreMPKXMW8WXNyA6KkxNZVv7GhZkLbem8m",
  "key13": "126tMiz7B8J8UEwRHY6wxc2fMyvGA3BbLbR3uGtNNCTegcRFmDsH7dVeEtC767JY4PG8xH49SZnhkjYbvSTYpiyQ",
  "key14": "3pwByGRammGXwZ4mh8DtjTa6HKy86gdu5eRAeayoTccVPcttvnsyayhBdyqDw7ntAakQTpPVi9aMyaXa67H3aqfK",
  "key15": "4XAJBeuMjwtZj1tYQz8iXFQPasHYnxX5Y5Fid1FFyk26QGqRZs2zj4CyrywcB12KXdk6sXPr7S1Br8FmhTXaKNEK",
  "key16": "iRgvwk2HSoQBA2zwPUap7UjwNLsXv7129uauUH6Yi9L4ivxdFuhdgLsFRhroheVWV5Z7ZqUTvGk8prii9JDAbJB",
  "key17": "4NRbMaNco2CSnwmvcGaw35CzFsLsCbZxwtfDUZXsZBjSJPJ7VexuMffs1wNiwRJDzoYzGAjkLU32bVyCvFyBVVHd",
  "key18": "64QXpnkJ2TN1WHURwFwPHmkiU1tbDmvcpErAStVtA28TsnnvL21VPY1QgnWWGpEe3LPwCQwe2yafFwucDqCKRd2c",
  "key19": "4poyFGvHDCd9cPRNEYTNPEQGKoAngbx23mGtUTCuxKWoTY5wukNt6Thrm35BngtynmRzNh5e1DMaAqy9vXLiuXUB",
  "key20": "3yqb8tQP2bcTkMDuheUTyvMGrEfBCneEMFX4mCF2cv3knBCcRccaWM56X6aYFobsFTYNBnJu5c5RDv8tERP9nXfE",
  "key21": "2dRJos4BbzxxtxejfZhpKEarj3Ckr8tmgKoty5qQriCmgu3na6GA5GpCi1LsNR4AozQxvFz5zkEar9g5bren34Mz",
  "key22": "3zRYaRxvbFqiEXwJ7PKiE8EnViMc6uWsz3ggd6cbwskTFu1QBZ3Cok8TbvKpSGvYguHquQeRTpGyYs1qjU6VDyTh",
  "key23": "2yWTMpFeX5nT4XrEnkH7Rpe71zDmfUFuufZNZXioLr2aik8XoSe9CXKog5amXSrhT1AXMZ9pz5XQMTb5HNwNAPu7",
  "key24": "2DzRyEReasUfKfH6bgRyjRYFLfwoKXXfqQ21kzDkZa1UFmD2gs7cUQ3mgoyLYaQi5VJGNtvmgwuyvQSDYggWQuMU",
  "key25": "2JrAiDVodsbZCUx936Xk4ZCpKku5fDwr88rgfHRQBCMpgd9PcbUmeuuxQ9KJZCwvKxVaXu1nJ6xxoH5XcbtakTRq",
  "key26": "23NKJ6p1Brh38LJSFPp49PMUHwekj3ZWvaVMFkZWtmg82kP63SeSEh1PVpXboPjJksYxQoWwjww69XJSUGbKDwBH",
  "key27": "Gzvfmi9kx3LWgL5KM3HhwQmk8ABV7twFgQhALVdr67ABTKJRcBNZaxK28uBxbHYjdienycdP1vpmgf42TUA7qSq",
  "key28": "QZxQzst3dX1C3Uv2Mckdpo6tmiVpcJ8H75jV1hLJtqdw98Sdg2Y9KjMWhccpG7PzSARg9wiAE1GSnT4xm6GcDTe",
  "key29": "5v7dpyqKK9CatDxLikZMAnjEGY77NNYsZXaaMdAWgx486zwnBaPTjUu9vbmQ3Hbob789qZbuPnnHVHNpTiptB4hE",
  "key30": "4Z6NLKwhD7diwVncKZGAJwzT7bVuxiQ9WjvQmYhbPJUjGm29o5iAcmMcvBhGqreqFj8XBvtD2RQzMkaopfkeNjLk",
  "key31": "28Z5BuyP8BQgVTav2ivaxJBXnLkJ1GUHuU7YcR3wpUh9BYtSS3B2iy12FPQggrfmEeRanbx4CwDZ8M3Fkuis5AAn",
  "key32": "2EvfJB6pQyjPmX4PoxFJFW69YUu6abKrL13LQ8gW8BGm53SNRd5b5fUuyu12mmyxi7MJyGUs1v1jroWJzksNEXDC",
  "key33": "28Pt2JAQbnzudE8jmiy1reYAxh6echq9Ax34E3rahN1oBGDkk2kX6YrRBiaWwaZgwwDGus8f57sTPeBN3V4MSiDP",
  "key34": "5SUDdFp3uyavrFjeyvyYop82jKapvKnaY32i7ec84Rn139tspdYaETwKWZ1uTgLxKNecDQfJY3hiPHDMxcknXXPg",
  "key35": "4iBZxUw23gwk3fXf4xg11qJHAkNfrDAFt3nActDkLEDCzLrC3qdFaWkfxnMondjoMvNSTmBs1dE4MCSTB4B3EET6",
  "key36": "rW8YbeApz2VpVAQHdpRfeWJzcWuKkfDFVgyT3cmY7NoqgabapHXvHCUKPz1D3wS4MUwS3YdJ5a5CniqsdUTqtyb",
  "key37": "61sVLaVXoDFcTrd8DRPib752cMsNtNEeneJJyh1uGHifaWwi2nPu9BwJgaKw6YLTVHq77iWJX6LajNDZX4WNwMqf",
  "key38": "3gDqwxGmaH212HLAEG5E9k47duPYCUvtmkstvhDJeEnt7CPNUL7pNoos1N6469DJ1WKF9wGypmdcaRWgbEDs23Xk",
  "key39": "5HWQbaYDj85dhqnVj3pypxibVS3wXEPe4WmVp4LzUdFNXLwKudbH2DJjVDjUsBxMBDgJQHpjHKwKweMuM8dBPzTf",
  "key40": "3mQJXCkPoE9GGRFBgbxTUjrhrmHX5hbfAC1vwELaUvFtAQ23peB99irWJXuJ3xXFDo4gusHTArcqeehCcbKbz5Uq"
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
