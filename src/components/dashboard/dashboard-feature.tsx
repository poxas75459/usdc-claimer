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
    "34WtnXEifMha246AJKQb1MQL7Pmy5gG3NL9h86MTdP985PHoZjxtNW5mVePpToEeAWDp2jQ2RoEPqafa9Tcti2z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ktCQELdhjqFR7VGyFAb36Q342YWGfkctgmKxuy3SiZD74kcQcFDRNTx4y396snwQk7TZ74zp1h7PdAQVVxUc8eq",
  "key1": "34r3w2pZza8ok7xeU5tw6o8K5SZvpSJa8ZYQ9RBfQ9e8JxkEshXF6ZgZssxwCWMyTz5UYU8VM7TMH7bz7vYA926J",
  "key2": "2x4WKrNFT2pPfRBaAtfxeGzQW8f1VnvbZCUgkimpGj99iiu96iaUTpcFiAKDHEHrJFmeRRMncS7e8UuCU2T3BfhS",
  "key3": "21YT4K1KCaWM34BzEN7WcTg6rAPz6FMqsQk6VETALDsQCpsLeo8nySMZe8pNKp6gs5vuPgehZy6VBrTGYN2zUeXz",
  "key4": "51RPXmGeYZw5DzbHyDt9SKtrQiCPZ9hg37WW4NtxuE3TzG4LCtcWMAo8Hai18Rm48kNcNGn8qKGWMAeoHEohgvpU",
  "key5": "5kpRvuze1tPVQeFKvSx3ugYRtvEB2dKYshCXgEUMYh65xn1KvptmpkQxAHuXYbEUDownNpCTDViWp84Bv51DKuhi",
  "key6": "UooqVKeDeazpCheicPKWuFY4koWVVxJsa3z4PwbB4Ja2HUBuBcdYLjGquDV1LMtR3ndSkgDMv6ekwDTzCUmeJUA",
  "key7": "3RE8daKULTDP1qrRMUJequy7s92GWfoJUq2YXkJer5bjKjeczNCSNknYw4B1QAg7QGbupb79azSVdHqDBdehGAJ5",
  "key8": "64tcqYw3UFQgAEa9W1Q3DfEvw4MPNWex7ah1miRt5LM85Jx5qLicdC5pcCUKNtiBBZhiG5iJmcH5Mg36uG8NDaT1",
  "key9": "2W4HJxkNiReapCjGSbYkGnnXK6iuAPbk8gXjfzHqPct8RYSqShaEEzx13xCmb6JTWLYPxCqqu31V72mdhshC4Uq1",
  "key10": "CWoXqcghQ2qBfqNKzUVqm6w4giWRPuPJuMEzGk76vtBJVniuHkj9Q8oD9GfJgcUTAGhKMA2o7mfCEPnKYyczbGe",
  "key11": "2Ebks9GGd44drzPVKrNiBVw21RhRwABMjNC8zHNn2JKiqV55QFTLCY6RJTnJXgoxi37Dm4XnPSckv2RohwPMXjTb",
  "key12": "GgePn8E8dT1THAZyDE2wssGmHBNyGTjFgoCkWubd1U5SizYxVtoUGhNEqkMQu9t5f6eLhNs9bpwsXdEJEQUAnZN",
  "key13": "41a1LNP66r7jHdLXVtajWXMTHVKaoDjBKAAdRJ2JSKQGSgEJFKYkq4VrY5UekeMVmkhG2jG7qWc9uCh3iqCFzA9y",
  "key14": "JX3zJUFDUTrQsqMv64off4V2j6XpsBKRaYcoFc4CS4FVFVD4CNU6wjykJCRguhaS5C2LwFRgJAxpgPwJcg9T2mQ",
  "key15": "4ysx36rAkSgKrLztcWfwhKZhyhX7krKqv4jj6LvHE1KBQXq2qqBQxtYyGJnDX7LwupWFYEAT2m8kTQKwLv5aw2DH",
  "key16": "3ummNhd2hL89ci6eq1zGjt8gbn3gFsjEUbjWjRsbdBVLFvgqcbq6NKFSKyjCLRySSP71kEzvWhdXTVgU4cSaCKTk",
  "key17": "5DwiSc2WQsLWdhicBLxsoEgr3JZdqhy6xyNAKfdddpGsoK17M2HaEqLg7dQAbpJ9rqcJKEpt5Zx8EPXGpDpDXqX3",
  "key18": "57waGHXFJv7TH84RtsCDKe15vc1qM4jy25r1vrnCcDwDN5b4ho9h8YfJHXZJwgZXEzybLcsRNNA2Y7DdkKh2R6kF",
  "key19": "47hvCoi7kfHRijy4pdSPYRXT8VcESNPguyaHDaQPxTqntLj371Eg5aASXwP3AiNSzHBiqzh8T38xCXoe6WSqG5Lt",
  "key20": "24zggg5KQzid1NgLsnVo79yuTLGpoPdZUPvAQSXR4gRoz4eC2weLAKhJd9SUrnB19Pki9CfrAJJg4yv3sJUbZGSp",
  "key21": "Jft7nQK8E49HzR7SxPbyZThSmLfSnmfCtvwLJQLUs3xFGvSP4sWTB2eAcqXCQ3M8wFRscktXsPyfLGzmGYE42RC",
  "key22": "2W3yCpg6hvZeXFJbaXMx2oU9EA9aCwYuhcCQtvvoNjpBa7vpwDiHddyS37SLQQiZt2DJ6fKGxs5dpzPcqBmMnyNt",
  "key23": "3EVaxpmT59YCs16jKdoKDexvnJCcbcwDwpRLJjPMxAobtL9wR1nMfkdCetmWpHbGoXBrNNZPy3B2JTC7Z91TZLrJ",
  "key24": "2RBQKkWGtKEMviv7Ec52cdapk5a74q3hB2Ft8Ejq9avR8zteh7JtjvDcfb7PErVWmE59zy8W8vUfctqqAxhaYJXm",
  "key25": "4ZsxFW1bzemWTLvgT7k8RiaduZ2UrZARGDszaT5yvsRCY68rWisYgawrSrQH8HpowDFuxwbUYTPcnc2UaTpmFivQ",
  "key26": "2AiLKbtYm6XZDLHFDss9p6k3z1UTc2FWY9ezCZWHkFBzd5JHF6rwTVvx5CFk6zhd3dEgnJrSPfp1bsCYa57ttgBu",
  "key27": "3vhYrDHfkygXc5gfxAgWLDmfY9brSCaHkUHAwH2nzzF4XF87z4SbKcdYJXzoK1iosxh7tCmTSHxT3w28fkAFPfYm",
  "key28": "jQX2mPojUu8MyGLbaJyBkqSsLDKh6eazKZ8cmC3mqSVMyipjHEpbs2tmtNy7orK6Sh2TTiqVfLWYim5stzL2mNx",
  "key29": "TCzEm5mTgG5NtRdP58PBXc7mwh9WvQKPeTzASrv51UuPcbM2jx17NoTDFcuu2rRYRyVMuZ6KGkrHmx4cV5VK4xu",
  "key30": "23sTY8DVepM9ed43mPE7eVs9QhieYckiW1Sgh9gvUm3FjBAb7ssaanjyR8ErrQHbnoBzCUjU5n942GkK9M5EQwgc",
  "key31": "5kmFxK3WQSDXqMHrHLBPBk9TSJRyEQVJwoj3BHQZ48JQrjTYtB2zQqSqrWgxHfwuBjK3FgbzhW7D7Gvv9Vn8UUtJ",
  "key32": "5LKQosU5ACXxV1GCKzdUNApPhjHfjnMKiANsbyeMUNhbLihuuWcDGxm4GLcKmiAvi1M7tUTqUXWtd59s8J3gCwLe",
  "key33": "2Yp81rHpT8yyodMYrjH2vHWqBpbeJXSaY8Xp31bkuucB3ko1pkumPKRSAKMCqJJscum16wKp2dBxZY6Zo5BeTZ4U",
  "key34": "4sQe9iJH8BNHrNDEbjA8msJf9LZEDwHaZf4jbJLseSyqPNp46ZJ1c1u7X9an2ZbgUmSGYR4tUrbbFc7oWVfC6wMK"
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
