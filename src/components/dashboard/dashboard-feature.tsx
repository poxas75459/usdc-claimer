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
    "4W33ixxnwfEo6FJ8ryjASWbHgCB5c1Qb2yEeuYpKtA36BtDry8Z3cozD13bsgeiKSFRJ9irWvgbTGHwsgANy6Gno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MEVoyeefQiLX7MuHUQuUY6bTeGX7xrWSwCH7Hb3fMzDnprcXSKQoDeKA9CorrEA6fEjM5jiauZqiEXBXgJTTGrL",
  "key1": "3w1KffNYFJaHyqzEh5nMdkw1AS23iF4xpGvyhqJtBQLmBVPvt8kiUrdMrS9AXiV7xzb3q6XR8tJgzisLU8RCLids",
  "key2": "57xjeMU6f4MEY6xyKkawboAcnwgnvVtdr8qLykJKnPRMBU3QctXrzhDw8topN1iN1SGHBDDFC6U4qShxEyEoiCZK",
  "key3": "484BxnFgF5oRBWJjCBYW2fLoXdemzMtuXcnEW83TdXWqnmLVnhc6f4SKTXzCsgREov76WgQfpMnfu5RtNwMLaaVh",
  "key4": "5zzAHbAr76agHQLYUqZChkuYLaS7eBcx1JXL4K4u6euuFNtpT6h9M9zzgecdVYBu7SsiDG2dKCuRt9AZNTttGpvL",
  "key5": "66knQuCceZUUYZDmE8utApGi2sC1mX7LUxzqStTV61kgChQPnJ5cRUHCvpGnogzGRsq249CqEg95kviGm4u4BWoh",
  "key6": "3GuCFcczDGdWJKmkT58XjfJ97ZXU9LezbijsiYVyANPkKy9kQWVZ5HhGjgGMGDTTi8ySJ6FLzbga4Hix4RwMqA7K",
  "key7": "4K6E9aipT2AwFw4rQCU287qcGWEwM2UdWfpsj5XNk3vJTgww88nFZHN9rChNM35s55xXMR591w9yjc8kxe5KesNs",
  "key8": "3NYdvuRdnKuinvPVUw6EUtjJErXdAvLUKbjCwpAn3BWtDdLvXWygiByQmB1USpHE9De9XbBPTodUfuWSUQqw3iqx",
  "key9": "p9yiv19ED2QXC3Emwr2U8GpkuwuJnFUV6wMPuPw1HGBkTpTMHXbLgAS889oTtWAiAZK6LYyZXTHftyYSYzPVfSS",
  "key10": "55ihDjQ9Uuaghs6uUUBCwcJf832m4aPtHT62EYrw1NoJKLHLkaBexMxBT46cAfoWotQU95CgCQe7o73zCcnkDYY6",
  "key11": "4egi6gueLdisZHewVG9bwa1LD5i2pnz1erWnamLXN9wpiCH8UdHNqi5sgtwiBnUXxrCxNh1HN9wqPafHQkztmTrs",
  "key12": "4LaDbz7SM1T9PMHHKuTug5Mh7qQ2aGHcYK1MbN6kN3bHc77BQxVWhdC8zMR4hNFwq8VuogTHeQTVtj2wRSMhuvV7",
  "key13": "5oKqtuC8pGcBrLoK1ucMwL7z6PpGWEYoEFPXxyy2UkTptsWVkAw5xk98VV7XuGNCR63ecmJ3iLAxY97DeaTSrbbt",
  "key14": "4NCqZQ4ejKoMh9rjypgqiQWw7K9CuTs7ZVqEeSM8xRWdQtySN565aHcGvQ7MtyRwVY7Kb8wntJoK8ywcM3HXzdqc",
  "key15": "5C6eecw3Y6ABrbm2DWGiGEnFDygHWH3A8saPCMt3iv8iVENFTAoHEichVcjJCKtaLRTUcdTffMhzE4ihbu5yw1Nj",
  "key16": "2xVn62tuawZHaMEaXuQTb8nhuzfkwCjA7Gn1hE9B25hwoxv6JDaQNRA82CxoDz5DEwQBNQUc6dERMrZ2xZ7ib1uS",
  "key17": "5g5npXXWYWwWis6ZFTJdt4St7uQgobu2FEx5WD6SL9RjijzdhxQR18jfSaekUjik8sJYtao2Y2hTyVZuD4UzBXo2",
  "key18": "3kkteEKwuddRbL7rp5KXBxi1EvPP4wrwXX9CG1xd2NatvkSB4azrAP1FRaCG7t8NYVyTTmYbEJ3zK18SrhFdGDco",
  "key19": "5xtwfiVQXMzvWUcrcfde7DgLCztXasHSCbGmtC6fsn5HtQeMKzWGXFXagE6QNPMngjNnutJ3pa1Ni5AYq9dzyUfJ",
  "key20": "4xv5PUvckvhwWzuVUaRrmUfRQErhDwE2w2CHw5Fc7bdB6YnqRpKthRUYiV3ShFSSzu8R7T6m9u9DVBAMDtnWxXm",
  "key21": "Utk134RBZ6JTUQ4uhYg8DQQRgoLGPHLhZDxs4mRR44q4iijxX77jCaR5tLuWKX2pZ6S1nkJ4PWLVsxbcr8ycmMd",
  "key22": "XkyXyJ1pHisShC9961SBkttwYMyu4hA2kA6e1d5Ry9CFc1UoqQEYCoXmi6AoGbfePSQrnArcHqXQKyer2sbtix4",
  "key23": "am27FZfBRMth9fiaupKyEaRvRmN3gAJ6vCz55dBd8dhaiyM1edaybpdYVgZp6vuDWgFgxveVsEzgSXSvLYbBU7S",
  "key24": "65HcuKoVt2TJQp7A7sQbVRCfRJvrn7Jrs3AT63WB2xQggSVxX3CbnDAyZ2nRYU63w6npp6kDXMZy5MNF7UxrUQ8e",
  "key25": "35aVwNDVbg49thpuokoPsEtdbAds3s7qbGsosZfPTDoXzF4Y8g7uAnuoTsJAAeC3P7pNH7Pih5cAa6b5yRJq42if",
  "key26": "5UpXck5aBpmSt5FhEAcDKSRoTvmNCpC77TgXG4p5a9UKV36gdTYBiv6rTCCo25Xf8hYJi2FoHhv9TTEBAYzsG8US",
  "key27": "4rgH9Rhcvqh8zmzNEDErJXZepL8FZ2LY9ktiMfyxuMpR5QiQVzuZCdZYioR3G9nP1kYFVaFMEATWi38fhv8exZWE",
  "key28": "CehFpwjG3pYtwLMqFbiGhLDc8RAQyGVN2pcMsN2sYXL6YMnRNbv2kbVxtsJ4bxc56BnY3BwHsn9Y9CxzfkXhp2p",
  "key29": "L3P92yYob65n81NUcemqrtKCoERcLzH8jabJU3VTPs2v2j5iEsnccm5t9bRRmUB968n3P21e4TsqbiVBomaPHfv"
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
