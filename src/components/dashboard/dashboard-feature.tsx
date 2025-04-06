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
    "3C6MpAwEY6TzaZdAdMeCJ2Wnftro7skaJzh1SDrfFTj3RMmzicsvGL44S3sSPaFhXn28PMhHQi3LuJm8wKRtKkx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZcdVj9PEKjCM5ETAXAq68AtCdw3YHSU73h3beGBkFRx3WDe9aaJHk1kqKemXZoSjqfrp8hKyTbJisi4kgsLwJq7",
  "key1": "BHvMZY6fLRK9mdB9FcnQxUw26MpM1QHzoUzyzWRbuJDFFjZvpxdZpUVn5mnSs2wvQ9VnPQM3Vi8GDoJwJctzY2i",
  "key2": "sXHX9bFAEgArZ63f5r3SFUZzgtjdk1iLuDWJpKFuKMDbvzEANdN41EMKSeVMQazzr4kLmCAfsmRYK2JHgxyZYQr",
  "key3": "22h1PHEonGNpTo5Hi9Xfi4FJKZNtYDCpwMpdNJ4CS3CeqXd3N2yFKqPChuq9LMo9rSiVuCx6skcxyahmtR2J7tnV",
  "key4": "5L7iaueRwwfHMh8S5pw16ayDbY7FFBE9NKLQf86uhiJVeuis7krKduWdR8ftU4m66FE75eVXSwZ57BEahHiJoWNf",
  "key5": "5wN1TwA67o829dbUBjmS9rhPEEDTJyZiV56TuBPfTfg65e5V6KnE5nT1aDpwEwHxE2WHvWmWqjdwehXj1gCVJQ5w",
  "key6": "4iCwDQoAdT7AEXyGNbaQoLo6UEVim3DgGKghypLhC23QgULnSsinGU1YttB19DXMvNsTfHzwq2ZRdrymdcsCp17m",
  "key7": "5yozdRbqA9vdJJ2kQxh9Ho8XmiBf6aTJufJk7HwY5rmMHeTnXYZsKPCKaePf52QND4YLNqo3rnuUnFUE7eKeSkSk",
  "key8": "4JVyBq3Z4GN9ojz9MYi4ArpeJ2pbxTskKkUcLQxsJTGozX9rxsYGLPyZHkx74Y5JTj3re9pnyN9wqjUSjtjWsXvy",
  "key9": "5DYvYSKddxcGA2kG3cWobx9BdaJVKhaD7fPjSiQRnpEvQNqgDaiAvbH4b8yxLDRL3ZLpJcMjPSbMpZd1nBw6f3sF",
  "key10": "2DU2CKy2pbpaCLa4eXW3MrgVo3FJCB4z6278rSzG9tPSyhdiDjLkcnsRP3gLfy9HpmqPzUxDJZsMyU4phHnp1GtN",
  "key11": "2dvcaTg1hiUgBgq82B45uuGEtcBs1p3RauHdZ8X6SCP4jYoX5uhmt31wPKNPBSHTRZMygA5xs1bHiSvQKHaHGpES",
  "key12": "5b6BctzkSiJD6KTF1NHkssUXG1MTQMqTpQ6DYStGVq8MKhHGDhLz2cyQoCF6sN4vEmomKeWR4axfhDmiUn8qqUYK",
  "key13": "3guTYy8zakhShV218Coa8eWRyUgVsYV9G2rXXdep3CbQhU4DPSQd3wMDTVeaJdmfRvrkcyQ1439CK5DxarWTST4D",
  "key14": "2X8bHiJwfKqZgthvcMuEmqL92Leofh3276W1WzPAELBPmhT6aowcg15jCrtANKzdzZYMSkTKNiXj83SDxtTGAEnA",
  "key15": "5oCTidj6mGzKccFsyuyTrw2xqgcXtt3uZE4Ytng2wPwXyi4nKY2yaURUhKkHDFTEiXQD4PrqwxzZjw1mc7wQo2Ni",
  "key16": "2TzZBmeg3cegB9VrSTD5wTw8K1Rbgi9AiJzXrihv4hjp8Fk24RQqSfAcAionM5A4uTduMCbcCr5GXtZawFf77Kei",
  "key17": "ioRjsiSCH4aLjdp1YC4jpjZB2GNWhLGUeL1k2tcHUhiX2KUMzwSX7UQNgfU7zsBBUyNJ2eixuwbUF8psK3CG93A",
  "key18": "2hY4UMwufZeKeLeiKjM6Bj6zukyQweEk9uRdAyoA8gNYwi4P383VhgUJR65WhiYSsUKz6sW4aaoXrdTeh62t2RcQ",
  "key19": "4toMZLkf1GoLUbEaVKw5sfbCJt3KREXyCCRco7NGzJXfRA3Vg448ELbHU4eVazy5RoeKmUUrRK1wLFjRpN5KfgUE",
  "key20": "66P5KrMB91a9JKFnaY8ee4fbWfQCbg3GDEtzir6A5xPpiLNRHJVrJSb3DRKTcKV3Bihi7UTEwDEsQwU353J1aUR3",
  "key21": "59WUn3EWKhPWPjQwbhpHgCng9ToGPPve9GExaEPRWuwPWN9pA9JrbeJEN831ANSoc9iAn1BRL6H3UsB5LcRiFC9J",
  "key22": "CiJmNqXgwj9U7tZjBabnJxEHZZ65BuwMsJd4hF7MU97nj26KW5qxb2gYWxFZc65CKUt7PQFh7fMwt9AUAAnciBG",
  "key23": "2pkQ8uJy4dtxfqAMZbFHwnTuPxUmxRN8Gc8uY73TmpETwdHbnDRi9sAKN4zvFWxkgbzB5VveShjRxpAKk5v3bj2Q",
  "key24": "4XCGyN1SutTa8tEV9axbmomAiWiGXYc64X8UHo88F3BpGdtS7Vfpj4g3LGSGn9q8JtnC8BqDNBpBi2meP37oirQq",
  "key25": "5XcKEDgxiTKH2FXthHSLa7hphLiNsnLX5nBykzxxfTzu9nLv1mFBWjPrgqsrC4x9wRNnta6m1NNieAwJKt7jaECs",
  "key26": "2i1p5r6e97Q2EqZHeKHY9pYrXhs9yjFxLYk4Ebx7k5aSLN4pademYPg2PVmmqBoHyqdBMNX4QgTKS4bWkwLFbPGs",
  "key27": "44LM7oTs8Z9G4qohC5yajLRvVWT7htfdB8GFy88eNPteKYSzAk8G2swrhfwQJU82XGyLu7HwD8qzRYNAgrV5R3UA",
  "key28": "2AEau4D6Gf6rB5rHxAAbijJrr3Ky76qKtkSJNCY2qknPCRVPhhTWVUWFGDdMUMhKeioXZggQLAS29M9PFSUrK9su",
  "key29": "2c1rjHJKibsXAaNp7ceteChaVWHxRbYP8Yr6aUF1VG8Bmm3QE8B7NE5LiDvSnXTdH7XKzzX9HfhbfCGvQHus4Q68",
  "key30": "4noWETzRENVHoSbhiL9EYJD6nFBjJupbfy69LzG8RBXHEYexCALjSsZsfMpZF9S2GtnXj443bW3bo44rJna6Zd7C",
  "key31": "4VTj8L9fGuRnXRhi9QKnEF2iphX9EPkuVtrXmmZARLDK1tbwXDZ9QENbPNbUXbiz6BgUBBs6pdARqj6j1zyW4Gfm",
  "key32": "52BD6FszM6gnEWcvvuMNZv2o95GxSxM4BcCoxDkU91vj4jnGTN82dQDRuoBxjWEAmTcXsJwwvnDLQwb7wqLp6bWu",
  "key33": "zuJPht34MbSSS4ynPa53dfb8CwAxLvTNsffZCiDBegctAFjZpVrH9CHRHxxGFYu3qMVJrcRNaepUyQUHNcy2PSB",
  "key34": "4FiAvZSfrWXCvSqEcEQWdH2GCXxmBWWnjWeoMQYpw3RntbYz639rcNGTyfEgddk5LfpneBaBKbviRx4UrJAKiUMq",
  "key35": "4m6rgcLxHThD14aPMRH3Vogvtm5PNNjedP5s5G9mUGg3zzdGdXYH7M33NaNm2uKZGJ81kCCzNqddLCV2Ncgv9p4Y",
  "key36": "Mv2KsMeVy7Ekrz8LJ75WGaEGruXCt3gMrbSLz81YdWHJ5QisEmAMzZ8vADof3JagfBCR84MQBtC68TfcGFzg3M3",
  "key37": "5D1AxsQxKcRhCSUhFU7tkp4axHJdeHr8FN7EvTYmYsGZ6Ax5yjYsGPn6aa2uzF6NQzxQ635PVcRaVQQY5vUzn2Pr"
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
