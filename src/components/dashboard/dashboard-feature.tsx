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
    "3usxMRN9qyyqNbh6H3EnUmByk4f1qjC23W6XdcQqArQjwh5ReiKjMumzcppJCrKt5mvWV6ktbKzhX6iVqWYYM3yJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y66FzsrHdWw8gVkWTgY5voDeUKzx8PBz7Us1QTb8JPyC1hgFnB918JVM5pA5nn7DasdfX1xf6TKdVMfoWUQXb64",
  "key1": "Eb9uP4hRudtc99om1Lt6E45K1U6in2sPvYSoDA4k4VzBvCiBcSfnDhrdziH89jQpypdMwc3kTFC3K7Ehgmamk88",
  "key2": "2XBxtNamND6bh15SNqG3dUih67Bj2u6Xh6cemUdK8mEZCkeUk2tYh9kvvHvAwXWPnkFes6AdSccUgK88BsA5DygW",
  "key3": "p642jUdVMtGyjAt2CWsB95icKFRjYmNnUBdiGVZYAi3ktVPdPKNxZpy4G977rmoBnWoprFQwhnmqjbX1B4wNeJx",
  "key4": "2uzxxbLuGe1inS29NNodqri8MUeEuLimLBN26ULxsFh7LumdBB7UXYQeu6HZomf2Cz5PuN3gn3CGRmy6AhqbY7kr",
  "key5": "3LVmLKJqrLBf35H8ryUh6Y1AyDxmgdK2TWwMa2Nb1rQ5iB1wP8cRNrCntUGQsYqQC5RrEiRHs7p1GGw66Bs3xG15",
  "key6": "3SMCEnRfa927bMDDhQ1CuzPdBo3D4yUdvzManWcCtq4GAGuerXqjxY1Te8uJtvZDXyFUqQPiTtrxkZi1YE5MBnEP",
  "key7": "AgnQoGEVPCMvZ7xtxSvppTLFaCDRFiDwV7P3yW8k67pCAHLwVUvjFrumyE3JTnaQQAWMpMRufvsEwfGCkLxDScV",
  "key8": "5eusJhTCR9RJGNEdTLHF5RhtpbMnr2z7ikWwXVvLXp7esdvYBPCmP1HsFpd4eHVCG9NSazGfGW2k89WFerEWqki1",
  "key9": "2vwFLam6ctzQT5DVoaxm92oN1pzbHUw8pWTiEzyw9NUTjTNGpoxyUQBgWwfxMotsSpgSxYRWqX5nTzFjShVMTvg6",
  "key10": "3u5R8ubpJsfvatE7YixCgMW32Cp4vsPsjqAzyuTfJqcbAnSA5zDgWbue9XjRaX2Dy25Ao4NyETF3tUhtcSmxyGbA",
  "key11": "5M96LKRowuoqzB5uSZtYdmFCm6vjhf4SJF7dAh3dSF4wwLXCiZLmNVzBacGFvx4tsCta8uL18HJUYY875bhQR8Qy",
  "key12": "3Qk5RDs6EVGSw8KsLF6qn7WEeQzwHoKosLMgvbM7RzZgi5531it552nG3DUkAeWnTyUoNmYTBSWVrHox3BPDkzvC",
  "key13": "46PvssHp1JRGwbLmmoHAnFiEexyyAxNHdnUyfkUSsJnEQgT3vPXfYfUvTvxtjKudXqqSpdPQTT4WBMr976sEKr3t",
  "key14": "2j98U7eTvqyekiPPMRHW5R4rZtR656nfhXjkmoqT7WmrWup3x5zsW1Z2TopXdFQnNPquGD6hVZDWaiwdvv9qmgpY",
  "key15": "A3kDmYoYhKy87XgC2TkWa3wfYuZu7V9fUbwwrSmiUSmanej89zUcaZrTAmkzpcPrdC7bHKd7v1kq8hiepoekuD9",
  "key16": "2BRuqRAwSfDyzeb1LgoBn8s2DRk5Bmr57WJn2bbJ3fqkpSQLty6LrqaG7LDYBZvKzinxVCBFjzPFvxyRhXBmt7kS",
  "key17": "5xhmwPoZeoD2g6hFZq7qDzvzWzyyosmu9uYZbRGe1npmAdQxN2RwhpZZ1XXxdJxZw1FrRMCbLD2Ktx4TXjegY6Cg",
  "key18": "2XMFVmbcK5jXw1ovyqZQWP2b5NkzHd799EYoJ2DBKo4vqKN3fE7H7rHq1UE7c9JnC1XLivYKiaEVGvS6Vg4tjDeh",
  "key19": "3dsgYhRYLkaAQpDz1REbNozR2gZJdaNuzNv4iGu8JdGQR31NWBoANLzry96PECW9QSMu4as8dVJCTqaTc3rFaXXH",
  "key20": "wKp73UGG8nvZorZanvRMYuQ7QY59Tmg2pQxKGQbaswg6aSVWzuHYkwQFjv5A7ncKPzPrXCcWnBvFvyfA3aZ5nNn",
  "key21": "47FP5X2632SDRjy5yrJPsr9UAHqkg3z9mVssQh6MzReS5L3iKJ5QJYTi5p2qarYnJ6nTnEcsnyGNfQRtM5tuKXBr",
  "key22": "3PPxHWR4LFm6VV16BXJKHejjtxgrnd9hRhmWzUo7vWeVNRdSGfcrWTCs6p9zPRvLJwieNEkhRGt4BRdxeS57hWNm",
  "key23": "43abUhaNe9Z3XJMXmWfrtyCFPjWaNBLDbeJpePdoaMr6fGY2XGA7yQG8rtuFs4wwbAw3RuGSbNbmR2fUHtrdgaYq",
  "key24": "hQq3UMW7Ra38HymfxLhhNtygVfEVBEonj2KMauqj6tKeCJoVoBCF55yXpJKMsXUmCA3LPQ4ARH3tnqqum7aX5RC",
  "key25": "3BqbJAG3RvVju31JsaCREY4E822YvAMuCuv7gsmWStTuuVHhiRAKBPuqnhkf7WJdsXWExnQYtwLJ1y1otbjX3YoP",
  "key26": "3MMxziewiG41a4oiGTBs1RVfNpQJgdPqhJQkCKGp82A7P5s2hHU9gLynRUMt3dymoj644sWLYJ8HFGqz39pEcUi2",
  "key27": "2bY2mZXRapSnrpqnyTub8yCga82AseVBjaWX34B1ZmjcTNgAHEAchWJzRCrp7TWcdNxZb35bud6YhZr2ARjD2Gz4",
  "key28": "2MWN17hSzgnLfmGghHiWDQWDaKqgNskmUyvshkAHeLwYLKvAdCyS6LAkoDrAeDKi31UsXxCrbzvoobxU8k4ZrHmf",
  "key29": "MPabzdoXUoVnZFdJhwQVeZQ9oduoqqnSg3ef6iSUjZhjKyMMArSe2F7zp4wLKgGSrNGkamA5RvdA8pZtmAXDNJ9",
  "key30": "2nP3NwVZgsFAjUetbSGssJtF8EagMyg5bcp4bewRWoR2UYxoZvFEGXSANb3ud3tWRYDkhgmhsAaynN6T2BPcFVxG",
  "key31": "46eN24eJSv55nfUb8TVpPwPYxygWHZFvU5W57ybLrwPwWkd6WFmYkwjLMetTTGdnbFD3wfR9yBastdMciFsawGT",
  "key32": "FMpQu5DsC7RyoNDNpNa1TDTotQ7H731acLaTvSJATywFakA57gnxG8C7QaxnWdwbAtKGSVLM5B2Hbzydf3jUnw5",
  "key33": "2eQAWLn9hHAeMprnyw99ngkjH2PcEo9phc5am6Cg1g2LfjcB84zFzeqdFVjPxcJ9HHPBQueE2QgXv6auXZaoC1YR",
  "key34": "GCGCiowJvQ3fh2Q9vUqty1zMf6bAJmi9CGnJ8d1WnJnYJnHu98DUZqjWuEqBbQzCaBnpsF3iBAWMcw4MGWypgXz",
  "key35": "5TuoitMQrpFM5m7fyBcZyrnFqkXpEsVMtx2pgmXRdXbpG98iV9VVwfoPCh5qoUXyq1ZpM1G6reK7cekRoP9CDK9W",
  "key36": "3FT9VJRPcr83Q4CFDoA21gfVT5Pfv21oXiVqZoPDSkwnyiFbvyGUFoPEm3WYiXC3tVfSPrtbwAE6igzX9Y4iSCKK",
  "key37": "hPXD1CQjpRedxChMcQVKkbjm3jD2DzVzDKAdRPa9xq7WN47X84p9APa1wghDDoU9mciya37JnA5vX4CV1oXuMhK",
  "key38": "4Gqe7AkCMu8BghB6hVVtXsJnmvGPSrRfFG3HXepViGKjYHnkK9bPPkTNGby8uYSfJ7Ds8mWMxR55AjhvsbH6AybQ",
  "key39": "2nVrpSBPhVWStzkChw3XhXiuL1APLvLixZghcgm9gaStoNSZB7yZf9784hQztvG8xapfu2DbfRZ71sVZ4GjBdkX",
  "key40": "3QXRA2KyQwvBK4HPNMbGwdeoaxBLk7DUg231Xvm3ZaMX7WB8AdLzz6VUUsjG2az3rxacxf4XSK6qw5EPDZfzwHuH",
  "key41": "2t1xXzwdkdHUAYYQtbpyU7JnxcJkoq9qvJvxcGUd7H4bXXXFhxsRQhAJRPerFTiBngR37Acq89oBSFkmaxKMZT2g",
  "key42": "2Sm284djYZBtovvYeq4R4fSVRWApKmwsRbqN7NnR2k2639xPiy99uPGB8VeWLMLpSoTnJAtbyE75HDpwuJf13XYQ"
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
