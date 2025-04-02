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
    "5vjQA3QqyQJAxuNPWSLZhobhA1yDjgE4BmmX3ry2FudTaJ4ngEZSf3qqCBppgtYuX3b7c4QtDNiQFuSkiHaaB6Do"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62B3wzFHsGdkBodRFP3BxZbhai1KfBC3MJKuwoRHZA7DuCpYCbisDvjHKDyvupKa4hLzZq9AJ7y9uQU5hqxq88LK",
  "key1": "4WwehMWBY1Me3uSxWvfYRsuQuU4jZQjKDC13aomjzULCq3VcpcCarrWjZgBCqrcmgZezPm6EBExuHhV2KopoEyyF",
  "key2": "3svek9WxtbgQpdx7ntN3whjKhLcp42iijjpbGkgqSPnkJM8237iT74uzBoX8V8UEUTn2NmBTVHnPE5cTarsA1Ujf",
  "key3": "wvY31ikgbZJhrUMYCBuoAFjCCkRdenKtuxbyNhoFWQtTy2XrviiYVZXr4HtHCXycmKLwUkPWFzXS4vgV58EqQwq",
  "key4": "2DpRzfnszWoXeystVKpa5Lg6tpvXuHSRqwo8kmxU42rmVhzSdFPnPpQkhmTd7f13F1CNr4PWG6FYABjXKNjNf1f6",
  "key5": "3q6GtN18drZiyk8jfgJ9sexSGjXT2H1DoNJU3T4KZFJ8pXm4K5CdVz9wwpTtq3A5sZkynQ6eTHZjiUi4nQAz7c7o",
  "key6": "3Ttc95MjwUqU77da79r8248qc8Y9QsNBQNrUBYRHPoqxKTwf4ShXGYqt4poXHZ6AeGz4u3F6sEkXXM5kWfChfuN1",
  "key7": "29Z2gYZvSyhuQapXw6KfobR9dpVBMpHbbRaPYiD8meDuGXjJ9FBikQifVZY7BpuoNkZUgiN1aAMHFZqRNNk3KRYr",
  "key8": "qKGbkaHJPu5TL54F3utkwUHD1UXZXou1yAnfYKp2EkSEL2EpMdYLR5qn9sz5NJ1DFXm96ZBJk22YxyBMnNVB5YZ",
  "key9": "39a1tfuYq758ePfpwbeP3JSxjfAZvTcXiwiDFLknxqUnakouLeWVJojyRC8dHvPfT4UMz6Nb1bVtZTJu9iRQaE5",
  "key10": "5UPxhxivNz8fSYGNFfxR6mQSBSa4cxdkbH1nxeQV5BbgaAu6GP5fpivYPPZPXQrgp2NcSQBtbkSWrWCRXTdksj5h",
  "key11": "2jJjWrNWK4gfHyYrG3LHfjg4fwS9JaCxvVqfNMoD5WPAdjGHUYY61qFXiX6vortLHoU78mNNtfg9NhseqfjmXMwB",
  "key12": "5WBZmgBpY5F9nzyEuLLdA8pu9aamqckSCeRF56T4ArnF4JtpbM3zps3uwNYNKKqrdzZbLoj7iLnsQ4e6FGsvwpXy",
  "key13": "3DNzY5w6X98S7pXigYgTMvEnViPAYX5tjFPFmAwZW36sP8LacAtkAVdYBo22fjK2AfhcU1VtNdmGJDE1FLdTStm5",
  "key14": "3aSvTZGTc7kX8hf7iWkebWLBMwYHVHcxPRkwed4sE6vDuNU2jPzdCmmdxKtE6VyP7HJYUGP4qwXWDXr8KpTHFTX5",
  "key15": "2R2dYpzh1nP13ay9zpzR2EKwsXy9qeAvRj4j31kz5gvf93ferSiS3v7eH4RaeRtzMoG9V8KBr2LgnGmnATp9fDsq",
  "key16": "61d9GEoRmWedChjaPYwb2n29TzbrjY8pKhpdjbcxhVUiAeQTSqzahzhNfCnFLsvMsW8YCom4GfFK3vFLo4HhFvQ",
  "key17": "3SzaqYrXZbJ7hCM2Gd53cdiwXycb45NYVYioKMha9HyzDiR8vhdNHAGKTh4i5iHd7Xx4t8DpLuR5UEqy4oazwiDG",
  "key18": "2QgjSMS3QS489WqGrV7dei8hejxdzVCgaSaxuMr735LLB6FDPdKcePWSPEqiemJmj5DDKA7n9KQHsMgAiyBTwp1F",
  "key19": "DQZVVM4QhVZV3Hnjp7WyinuiTZwzt5vuU1ZsYvhi1Nc3n9Jaz1mNMFUB7aidt9c6RhX2mjWWaAc6HsYJBwbRAFs",
  "key20": "469sLZnCAKncHH2Zk6RkmRMSxL4b5JTcCdLAg1XtYAJGHZ7dvph4MuVwjvheoevgZQygHxYEmuViSxZM4MBAm4Go",
  "key21": "2jjfBkKLvY6M5pe9c71HazhFZscMG9PBKhvm34MgceEn3qusLc5bivkLXpNm48fmHKKNv87mrhy41MyyCqJ55GYj",
  "key22": "4rSSYTiAGFG95druQvAmNGzNMGxRxu13k7FYxNQnYrJNukaiWEDWK9UXmgTGMdcVxxKsrhWw6rm9HVANMQnUEcXJ",
  "key23": "2wRFZmEMzEQDaRU1EtpBrF1o6GdReTWdrztWhf599EA3mHfRDzKUQjgMCv361Rbo3pgvXdeeyCZUrZCsj7xDaFXF",
  "key24": "2CbFUx5UkinutTvJGwTathFFHz11prAB5B9ad3bdekJDKGkS8zWfGBUKgej6R9LbRg3ak3RnvobJzVrZcDDTQsRd",
  "key25": "2cacpdKBC5ZECYGRU3pUM2hL8sLr14tTPbikQCYMLVMnHT8CGsnq6KHadXryY2Dvg3w2uho5Pek1TUPGz39tNaWf",
  "key26": "2byWUpetXt8S6cncdyGxEjpmraWdLMPmGHzZ3sDQZuy1WJJxHcJf8hqLKR4DNsKtTzeac5MW9Knir4x2Ub9uNpXb",
  "key27": "5fafkj4ZMCV4GMPDVm9BLrWwcUZf7MrnMNdxE8rNr4cPq2M96YCK4sMRWXusU7JvPKK5oYDKH1RNZUnuBLMmiWnX"
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
