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
    "5qU31NNAPKYnX4poQRjSozuo1iCz3qTciAGbY38tDP3dvE1xQoSWegUY3Hips9Pgwg7Ga365BsiazRjH77FFRDks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TnZBgjF8Me3pBFX6m5SeYLEqZbtXMHapQ27zrGGs15boy1EEK18ucrFyzXsAABFNeTifL5HcKTCaiaumtUpwyMf",
  "key1": "2TcVjtdCQhU5mX8Hyd34JrpDtwdrFqoeQDrrhPySRceJD9eX9rMScFnRAPaVmsJHxjZ6SFHcYsPNPAWoiVSydq6m",
  "key2": "2HuMryPJ8D8aS4zvAvFXtfFG9eKq2Pg2md3MnYcNErpnz7pp8PQtyza5gaeRorhY1gau8VvpfhWGdKEKYYq5tXe1",
  "key3": "2dkBND2Aq8jyPVmk4dPSGkNKwBai3Wi8LTWTDJ7yLBch9ukkL1FqvFFSoz6wS6Yo3DnR1V3M6wfhf23aoGH8xQX8",
  "key4": "2YJodHYdhWaqaCscKPzmxnPV5unKuotSWuPjrgKgkdjsqB24kRSBzW6Nj8TrEqc9aAEqUHqSCUBFiuYmsr94PiwZ",
  "key5": "3U9rhioZVkmYriXaSswqHc9yQNjGt3caMft6SmyU9cUr6turM2f1ngUHvo5ZEAv4czd1YjHf8dFN7fV4YKSY58yc",
  "key6": "2UChvAPV8gf8uAfsukhSAPMY4buKcRTDHMRBNTmyyGhgweZ7hEAhHXVt87kj2xKbbQpgBQTtETfUz4GiAR5HGLpg",
  "key7": "2aUxt68K4dfNsBDdDEAh6uj3kXuuTw2CDdahyLoqF1UMKj2LjSRzU1FfeZ3etV1yhUenenr9V6uMZ6NHCqbSZwzZ",
  "key8": "3wf7dtjcFFHA7riuKrUFztwUWam3JPEZWzfdgWHffYZePLxkrw9E7KjoAWeCDosNSUPDmjUeZKKxXio4tJBk2fsR",
  "key9": "66bAjt9Md1qEvmQmPem9xaXdTEZChy7EQnqAsL4ppu95HVy1VqaAmsg45k5GA4qw4BcPcBowrbKXBDo6xYqF1tJA",
  "key10": "4FoFxFTmnn9ZicUDcxi8VYpxJ4VAoXr4awSJ3d6siZ2yPTGceQ1v6TkwHNZFeEaXVoYRtbuw5Yb3M2dorC3SwC4p",
  "key11": "4aGGoKyDqPwcrPL7oT1RNaSxqVdB7W6ptKKdKxfS13dQ5KDtKx798XUbBK2sLRp3MfTmCjZkkg7awEaswy4eH2xk",
  "key12": "HvqCxDvuCzaNYX7Ezbi3MPRsKLDt5mDXhdWrSVcdUAJHDzBQnFWSfEMTAiT8c61Pt9oGKnnbzB4rJz1agen1sDG",
  "key13": "4xybGV3B7Qokn7Kg4PHHRbPf5WBfdradTKv1yeLhVYBQ1T5qQ6sDv8h1WM8KYzFfn1yNfCXWoxT5kE9rrV92JhaU",
  "key14": "2DvFHwuqaUAtpQG9dmMkBobpCDYexd7vc6hy1wJosTaoSjPkPsoMsC3S4vWHUiyedUYLzTrdpkiUqgbhtSu7zLjU",
  "key15": "2AMYc5Ws4WcoFb6hYKcZoTs2p5Yvv2nvdH4t8uS8pV4m4Z1EU1DpErLK1msELz4w2JLvBmRodffcEi9BiDuLvJ94",
  "key16": "HZyeca9G5i3DTGwMMaeqYT865eyGxJx6Ya14XcnQZLA8zfoSPe6BpcwyPULNNboHMS4uEgNytbu24qW7GeRqeim",
  "key17": "5WnEYc8vdG4LWfXcucyR7Zvv4K6sXaxWthyjCC5smhg9gZrUCSwXC3RJ8fEqRCN5UQF2SXSG51TtbAvYEknF7dBM",
  "key18": "NCtbJdKFdrhtAzjEropK4xn4inGFEKH7ZqN8fU1gCDEf7mSaRRPdZzUUbE9mahnxCktBqrq1xaQxX9rx9RWFuLE",
  "key19": "49bHPGSPWpzuYjfPBco6V7aX91rBLERS9pcUAhXBcxr6qrwKutDBGSfdUVNLVrYserUkdiz65wbsd9aFpmjceoFa",
  "key20": "3dbTsQ3bgs74FAM8u53uTCqa1qjdEHQC7f59pfQrhsxqF2y9pxDnAp5sgTjKf4TwMRPwdgLRPgrF1uY3UsEWe1MC",
  "key21": "2M5qL4ZhLxhPKzWEy2gqhEqdrRFz8rUypCY6yPXwP8pRpswwG46GcLZt7dDg9ex9vvi9bag1EcyG3QiC5ukkoiMr",
  "key22": "5VqyK5sMTR4y7CZcZT89XwWRh6oyb2NBeA7VKCtf3A1gyVnu4C6r2qj64Ndyj2CzNMQ9uQjRSFRmEehuUD4WhLqy",
  "key23": "1Ut9kLZReV48rux3sSfiwGPCnc1LuaCB3Zh329bBr6WBU4FbRX2VBS5vBdqASn299DXYnBo8QBReujsVUGizwaD",
  "key24": "3x2nBE9xvj43ZXHJBSTFUa5qmvdgmi8yxXmEXLYpRYnZoZV8Tm78J5HcRbtx81U8571yj6vAKXfBNCnQCJCpbH9H",
  "key25": "4s8WLMYhLqjQFLVGoYLuAhz6j6EGihV6XSt2e9gdvM755q4fRThVv2svwWgFJ1i8hqzMCtAB9BhTLJgPg9WsTa6A",
  "key26": "3HvLLnwudk2AtkKmsUBFuyqD2Jc7uK6JDa3Uo6siQpU1gMtrqC4F4U6UzjLq65jUHQdMAugR5mf4dxptsrES5Yv1",
  "key27": "TZie99v8ZdVdTjU67p1DbAs9YCb8FjbuTPv92YzAUPj2CPXEND3dqsQqECGRf2VEKXj7RoyXM9cB9YdRaBYiYnx",
  "key28": "62RXeDciJ23cBmjQXdehJcudW5CRFgbkaHg5F2pGfuAAHgfubHwe7uWUZxrLAPppGvURUwE3RFAcGmF9AoWx81qa",
  "key29": "4kfNgaRxhAJF456MYCH2tgtydLKRqmrA2eHMZ7YerTxvdJzwZ7Rt4FiPfQusKM3DboZzEN5uYn6y6E8mRuhNbFm2",
  "key30": "4C5yNRNmvhSHSe2xqejdYsARfknFpv2zZpxeqsZw1fPKsyTVDnLHQygANFoYuPvg1hZkRs6jXGfW44CMTLbvam3j",
  "key31": "4JdfVAebx9TvCszDHDQPAPwV42QzyxDJY3LMsdAPPGood8azV8Jo57tJr1uusyeLfsX5CbSJgAvYjSzjP8AsppGE",
  "key32": "3YY6Pa67njLFDqfaWcwQeUFujmpRpRgTi5iEyMvS3gpsWHR3YkXosGTc9LNp5ydRJjtWhqfQ7FGqYeApSLhGuhV9",
  "key33": "4ULzJ65bXRAtuYLY7WYwSBUCwggXHTnPv5nq8bw9NkCQm5APU8DVuzN9PfexDmWHVrHB7M7CH8nBP8i6v4pYfMSW",
  "key34": "61C7bZVg2oSsGu1z1Ha7mbmPRapnLMDLRKfJMVKqqd9wQncURuA5HrWLN2D7bieNnZRDMJYyYGuDxJzMnW1U99Hz",
  "key35": "DAFdVqT74EAPk6y4TiPzXQD9vFpgxb3Jr6A9poAX4VqV1DUDLNLMKa7jkRvtykzJzDWByLB4DjBXn4iUodfVeWo",
  "key36": "3XmD1GwQg9EtcXk4NcndCMQbJuAieZW9mhsHgU665pPeKeJf8YZAyDSvvM6EmX3nM7qGxZPpAQEwSRHmVucF2iLu",
  "key37": "NXbKSmsgXq7UcPtZUPTkCK8Yptf7WLApwiR8HfXfzsQ14s31AdSUg19ug3Vh3uZKvs44o72XoRU43861hAmsUqi",
  "key38": "56FfjVsBeCjQdM5PaAtks9J7y2t8sfEkjDmLtdteBS7J32tLiF1XtfMgAheBP8XrsLvraEBd61LMn4kvmotqHqf2",
  "key39": "3Eie97a4XQf3pNbRQJwkoPGFMd3qtFEYg4G6aGVagEKH7y15uhYLk5dNMoJRoDah6kdviqYZBtFA2k1DKVs4q2Yi"
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
