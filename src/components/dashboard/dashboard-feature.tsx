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
    "2csGmLxMjd5UtqvYcZz1vzgM5dTrexh7bbm1WPYNXkWe3RnEx7qanwNuqQsVhPPtx4pMkH82XLovSfZKFQLRPwCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jkYBTxF2QE3WG1YzW6zYAFyiJTy5ijbCMdgn6NUa362kEBXvGud72fs5N8rmBnSLM2bZe5LDvy2rNDeoRmM7Ecw",
  "key1": "5ATBFvioNdUDWztTjVZAZ1c2xHam8ic3Z1S6YPqpMvaU457QjnFvQZuR4qjrVHpigS8ZxGSS75d7tPqBNpxoJG7m",
  "key2": "4Ebjoo4vcfDSM2zF9QeRpCnQBxGzvbn2kdTzKcBKFTvfrWwPeJVc4LyWSTLU8roNvVGvRqYE7QdvAS3YgZHPdzs1",
  "key3": "21ddHXuR4By1wEkPDBmRfCF3eERH4sPCXMDqxsYdSNUJ65MY2fFJ5J26dtxv4WsguJYAHUuCUmVadZrtCzUiN8gL",
  "key4": "AeW7jqaFBq29PwUSyWF7Md4r2MjxSpk6SLiyFvR32NQgWVuipD7osjcgybaX8x5Vmp7QuhbsDoK4cDdLutbmcAQ",
  "key5": "57G4TjhFRdUqRir4EUoj1QoNxbQc3vvM5Ln3YGfrmfb8erXxtA6ip4StmGxpXoG3Fq1bXcoWQoxUY1R1iSCbcGbN",
  "key6": "9YNnUU7vPMKDpEYhEftHbdzXPbd41bmYTb5PBXVoYWb2cwU1q33YoVEcHscWgjYEkepDzY9iCzfjjqF3pHbwRye",
  "key7": "4x9kMKiFZDVSeE7QkzMNa5yBUitnohpeW1L9M8douTsuz3fVMSqeHhqz1j2mfjVvwyiuyNrJgLuuLSZDiZvF1wkg",
  "key8": "5UCNhMWKRjDmLKXxxXVKjdHwVQNPrhxZwS7B7DithM1PVLsuWUCQWATKpUfY3WTSfMXSVzVUniLjL2bDbnGonDD9",
  "key9": "5v5gLfMEM2dDxASG1ZcvgBBWUHZETmAZJn1aYunond1EK7ncy1NMydc2HooYmVcawHqfL7ZmftgyVjyGP5ovUi6x",
  "key10": "4puDyJA4rXYdH1SKo1jRePxPvJRvLWk5HZapu95spKNuvZN9Cje8cpQs6XfwoEL6DWgZxo4Up1Fw2DA6Wud8M94s",
  "key11": "GDT9EB82Ss514bdiVYVs5fPwp7vFXMW75S44TRy5Je6ptWqndh7DY4svA63AP3j682a4ztvGbrx9pZpGL6w9P5x",
  "key12": "AkUQnbGGoJeWjMHNkWZHGhzcCPEpPL14WtmQdzpY2eA9Cf4aaeJiWA4AkFo7juSJW8Dya7X6UrnCa2jd8F2JYex",
  "key13": "5hVuxdAMuy39d2U6FUPP2fwkBgH32V57HqYcQajDo3S57VJLBnDWruxoFjZvJ72cczAEQmrjHeBuqySammS34Ncw",
  "key14": "2FbXPBrUy8FcvvSFQ1q5B2DRaJiP1gXcFkLNuRyGQhZksVEcaJTS2v9qCxAn9sUvH4ZY3oSxEzy7QsR2JWZwdLA3",
  "key15": "2o2dtnbd8p1qJ2YBJU2LActdRfVXJLk3NdKrmhLe6chs5e98wcXPWvnGHPXF7SEA1fNJGVDQFUvGcKFB5FEDQoNP",
  "key16": "4RU8byb6JjTH7W72ZPQ87WKm9GhyG5eCP6G5uyEsMmccuaHLBs37NVnvy5mxTZhRfX3z5gi1krBzzMCNNhjmqMfq",
  "key17": "3e77r3sYjHnzuALN3DQf8rHvWkesNTVg3fM8k2UGCsgFxQVBJQEThTb4WLaQ5wig8Qg48sm9tgEmxX5CBMFVVjer",
  "key18": "3kj9gsxQzx9N5kuvJDeJxEuAK2qRVL6zEMLp6V6TM3ZbjRnqd7QrcJU8fYGsEKFWB2C5pjv4mjTcmBXyv4wJEohv",
  "key19": "31DUHwRFxAdJodwWKhoLFR6zj4v11uHopKio5EpdSG9fnuFy1K1w8LkA8Zy2UnPApjpwqF1oMWYHYRDW71aopMda",
  "key20": "MBDywaCdKpdKoJRGAx2DgoZPtRMuHDWML3qerUwAiiq9ycC5htVDUnqehfkDToPTvVW7HAEK9eEskSKyhmb6cky",
  "key21": "4rNFH5f5hVM5WLtBQscQzpWx3PQhghBssCM8iMh1EfVEbiDng1LKhNiEeRsKDXRNP8cF5s7UbXbvHFr3mzRaj2Gr",
  "key22": "4ZN7tejCCUyimFab9oincbzSTf8edFPvBGkZVmJpjnxToySmsxmNauqRqxHa5MhicvSHvGbfb8VQdTuxt2uQ69yj",
  "key23": "3xwXdN7GrLkecvaBck4dxUjAwarJDqL32xn2ZhQ5EX1PtdUHhTHzgQqvWLCymvacuA31xZsU13k2S9BvAT9mNLTN",
  "key24": "HYmkQB8fJnuoHC1uCqeWiBtsQ8PZymzoW3jAhznWtWTqSKJPKhxCMysusfeJLdBZbhAeZwsmSmTv6oF61TaBvBo",
  "key25": "5UKvAPPwCC9rMiYjjV5R7mxCDG6KrsPAxCWNTr6vAcZmQnEUYTMizdN4AvQTQSQTFLj343fFjDBL5feBmfZsKAJV",
  "key26": "51qGz7dn2eXqXxJQv6AWn69X4hMQzHJLUVEGRryYZN6q7grz6bFZCZ4FMPyiTyDAspg5342RdDKbhTC7QZhPUX5b",
  "key27": "2jeCAt8RKtfPWigwRE4euXCzWDBH12R76n6hdMzwrH2oewhWSvYTAiJDpEtismh5rkRukRJb1pHugQGfGYC59d27",
  "key28": "q62C74q91NehUm5QgrEvvRWXbwZZhJnXENeeaKeXk3xB3J5HQPExaExuwxSv3KQ5hLTGueRCSrX5WGkxcvszBVe",
  "key29": "4QivJ5bocrtoPwypemjMKUQ1cnXpkp7NRteXTfvdzbRjhDB88GaUUTmYLTgn5CXME49QuSJBV4KZKX9KJynjdswc",
  "key30": "3nU2DHhxNLQYXuTDwQeTEHEGWqnTmH6eGQrjYU9WCQaL8yhFYh8fAZRjjJyL9dmV4pHQFdt7WkhPcxd7xsvGz2yp",
  "key31": "5zYEVtWuYqnwbELDmZN83WoUTaNTtaNmikDfYVRTpqQq19kuzv8rii2gduJ6sLguPqzQZE4ivotTgff8ypBE5mkn",
  "key32": "Ny3pNTbobGW8F5dVCjo9HMXNvALDof6kXMXPexx8gRzA777X3GPC5oBjBHgZFLAYPWRZAYaR1y9THqAUAPjFiWy",
  "key33": "3s33y3nhhzturv8e5cnPKg3qbDnsKWn7JQKVp5rE22hduG7pLh6GxvVSPbfGVwXbJnQ7c6CJgseEzNbLedk7B1GZ",
  "key34": "2cj7t7iBGHiGdSQ2fbT7h6zvLuMMVc5qTNrN3ogvqmvJv7ajH5K3oCv2wHnMc4g3ESNHa58RJPWh8RCKGWVr8cXj",
  "key35": "UD4FEAhyLst1oadax7RjyTe3evPNfNZkcPu9ccQ6enpFJdtRhggo3F6QRk3hAEN8eTp9UDk9jTwKLHxJsSWJuiR",
  "key36": "44Xh5WXfgVCn7L69sZ795wA5MV3U6rx62mvuSfDJzm4Da7ukkak8q1hPXP1nebJUWxDyRMVo1Pbrjdd5CF93E8k1"
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
