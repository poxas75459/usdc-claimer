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
    "3hb9hbcv9daX3sDy5Yg7QXGqumWALzMKcuLp8CEqGpLbdbcBNm34KN1b6o68CQnpUY4i12CiLMNgbRLD5hdm6V89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5URvKdUP5oD79Dj8QJkia2uvGVNx3HSCdwuZqrUsdh2nfsuU6wYzf3Rk3pxFBaocabLee7r5NPHWQEVy8U8ifsTj",
  "key1": "5EHExjscKvsrYkpxvg9FkVho4LZr5iYGaA6Nd5THBSch5pUkFExFwKr6zoYubZNTvgbFawGGvS1CQa19pTP9cuoQ",
  "key2": "5HDPBKacMpfiebSnyoC88RgjNu9pqJ9cd3DvrtavYoivzgJCzCbcwEfmb3iTAkDkqHfK2uq32fHfjiSxiWeqNGFo",
  "key3": "eGMJVdiJxpXWx8ptFx9Ag4Ee9bWci7k1oGRMCBeDpXe85xngSsU1aDZw6wrRcbB9XLDVM4YM2Rx4CDX3qwrwT6M",
  "key4": "51ZQeEeu2Ww9PPRaj5YrYGtyNEkSCuM25vEWJWF8BzzwCgi3U6QYLnCgKqtT69KWcnVCfFm5mJMFm3Dz2vN6Ptpy",
  "key5": "3b1oF5w8jtPs28RHu5LA8df3ztJ2pqF8LowZzU73rTV3VDiNZR35yNxV6k6SCnr3WkJQcxqj21XdoSv4yG18kYm5",
  "key6": "5nCmTpUbnov9agrayo7qEtGhnjuKABivm9hNmDxN1hPHVdC4H2FQCFLKDQNo2jLPWtN99m3DhRLHLvEcmCDgVzrK",
  "key7": "48QdTvHZ9AScrz22FdS1VQtRVLpz9hPYEfmemwUhzFouRguyLhNy78sMX9PF4oVWw3mdGS6mdrTkpb6YHa3MNSQv",
  "key8": "5KnPtCzKDQQ4hQ2Za6nftejV66ecFftEbsdiguw73njfAkmSeRLb4G4JqW3rudxtmesSRDdWuK6ULKryht4SA1g6",
  "key9": "56kV745a5mZdL2VR8v8JxJ3KEAABVG7WyUjUk93Y94fpCyw6Hf21LbJw3u8MT5JKEd62mm1bWhyAchCUvpSnDz3",
  "key10": "22Wiq98dJ4sdDyxCHhBXjbgMWaejdCxAikb81sa8rTcd6icdR6tCAcYT1G2n5tL4yqo4zqvV8HBHK97n59ijrXTF",
  "key11": "4SDzG5FEHcADtN49g2pX76BWn8VZ1UsXYcqrisU6SzsEzBPmLC9ggUciULA6Z3TJp18uWEpaM82doHRXFnuhKiyJ",
  "key12": "4zceTojPdKPDgk1wkKZtMP66vWYeAB5B8whVYi4kSv6KqjVVHrY76xgMRFh5rkXnYMiFQQA5nCKhxzwWwkBa3s8c",
  "key13": "61s2vGbg4mNB8WSG5Ho8YJL5bmLfA5g5gStpz5fkTEGkZJDgKcYpnjTn1a4iaHjUW2LmQErV3JuwyNT12FPDxGJH",
  "key14": "3eAihcVcLeBtieXZPsCtmRwstSzXCvUUEfzvtjnUtg13GYHQE11MdcoKcjNV8BnGDH8M7xFJcipnfLxhXVF2APxB",
  "key15": "5KQQxbZ2yTmSrMjLmmWF26VfkZGxxQ42aY8wrSuinCgiVSxmo8kn9tk9PtPY8dX1GUx3TzkUEcrqY1uTearKCaYN",
  "key16": "31BKAKzioTdxB155FkkNQwHLUFpSuCqTtUA7c6foaSWKBN2BBhDh49anR9W4a8QYQDLDcXtvitGf2PFQPQ3RsrSx",
  "key17": "2ALKPprfkQYEkBr6hTgWr8uSu257ZvSWwQEeW4jP8RJ1fRuuwLGtmjH48DWfM3cZyYnv3NvpFBZ13xpMezqY5jyn",
  "key18": "45vC5HQWVg4aHf3otAi3ptD7duQuQ4EC1UAeUFtirCdju8bFfGSpSCd8uZPXsMmhnX6kne7Ct7BS2mh2wrNJ3Ky2",
  "key19": "2x6PJDVey7iGFMV45uLdtdmQiChW84BBJ8st76muGxprmAPFYwMjB6i22iuDtFjLt1gj8naR1cKoouxRjLDaccNX",
  "key20": "4ULEW8KwvzzSx6TK4EuwbMd7VWji8iJ1SGHzqb19BEDepPVASnkbNiZgkcPYuEUcZZb2AuNcBTCZ33X6qQzShmNd",
  "key21": "5TtuVAAg6FFwztd99TYXXpnmHsy1BNrxbLDohKjr54rVWhL22mGwhhp2wkMPXwSSgpLrwyaTztV2r9kRVC3exGU9",
  "key22": "5476o17KjQfzBWwwX371pqzvXwv5wbYQooypaTFgCyf8x6A4BeZbMihk42RF85DHn2qBx9TqBREmY4ZEYSGFgEWL",
  "key23": "Dbf9LsCpxZsG3YYVbZV8AbEDkspTtWNbEttfYmMfdmaLJGBJfafJCffyEyvAmY3tJXww4Uxu2pL7762xoKAS1ux",
  "key24": "5cmiDwzCn1dPVYHJtApui4Xio7nBS3rKy4imwsBJpSDKi3M4yp2BDFbpkr2pkCcu3Esdwud3ahX2nxGNMavsJKcj",
  "key25": "2rdJKaW7EM29g7HQQjqMp8QpZa7hZ4bCcDNQLhkHQeiQZABeN6xpgMzQp7JPb8BAriJdXf9jRmdTLPs43u9ZHXrm",
  "key26": "FLvVJtcZUMbbQBXxShuQzqwNAKtaoepaxUHi1Pkozb7qJU5CWU8YDjwr1WW2avm2j14hpUpQ24RK9o1edwW8CA8",
  "key27": "5dvh3hgXCqqJdBAReBtg12p7QZhfukYGwXUTCipnsjrV9T8hzA1ZvtL5coTXxRd5aP3GCrE54rtAcbFxu6aXRS67",
  "key28": "uYsL4ym5sPgoM1abw94QKHWV6xQzKDDwemFrpZq1T32i7JNVbjV2HWz7ipRM4U7t4dJkFCJnDW2tr37GhDxeyvu"
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
