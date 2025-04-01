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
    "21TUBLFskk7HH9qWSvaRm6h3fe9fZqTWxT9XK2HpoSg5r1RSYkVSYUeAif6C5oCYDuoSeyptvhfKh2KPHUwTCpSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g5AvZrvpLw7nzUsjCQpbRcxb591K7x4B76JXNYYPf7Bmp26sFZ35DrxDp7gXKekqvPpLiFx3BZziQN2PxgpRpAm",
  "key1": "ByyMQQyqrVfrXf15DHQeHYgjNBj3yWNywEeRHHzppnxgnsb31yARWsVhTNhpWvdcUcfsm4V1csDhUKQmWTBGWz3",
  "key2": "3vuiTY8T458tduAM7ggnskg5ehxNZamhEBniKF6ZpoA3Q1fK9MXMRPrcXGCTmbzJE2yGvDKMJFB1BmYFWmFv8ugP",
  "key3": "DbjxBrcmvJ1YwELeddp7bX2Y2u1xgNTnjTCxwwNkNJWhxTn4W8tKiNSqMg4Ce3YShtdLAwfsAqjd3q5e4yxUz9Y",
  "key4": "3Mqn7cfRjrDp3xqEhKSMqcDPdCjVGSji7P9dg4UMNXanHraX4x49hVVhXgDeGb4fEn8XGAQwhoZhGt4aZaG2UYfi",
  "key5": "yS9SM26SEAr7F7z91bgTkzC8P6J7ywVVXEEUwQYGKBLKzECPmtLbdjy9Q7WEf8RktKcmACrm8yTxU49nLRFaDs9",
  "key6": "4P44ChdtY1uHEy2tLZZZGtXPjwsGFDjPSqy4yqRrz16yayY7iZzPkCbWwsrYvwHesrQxefbYhrVzo1Sqz6GzUrx4",
  "key7": "3hydELHbxEo94jSUpfq7zumMV48kaQ1M4AfkUm9CQpEX9ZSi6QRiq7Y2Lc7K6GUpQtMpfuhqVE8QYU4viEwJBtD9",
  "key8": "2j18Gg9fE25xoBKBLazTAvyASBSW8du77XcUXpmrnUC1TEtAjU21UohbrLSa23duE8hnZM5zSEMBvSa17v9UXKHW",
  "key9": "5AZCsPQQMt9cs7a7Q4iTDghCqH3NZvGpxYbeMszJHRS2X45CCuzGXzX8aYJeotgtNgDoS7vky85BYqCHbbMMx3cK",
  "key10": "2i5KVBR4i7LVXRvVgw63duDnRnVwSNgHC1AfsauXp9qq6UCLHumBVSC7EwhgWxznCc6kFXaW8gjpv5ao45xbKNNv",
  "key11": "fRRZ8ebJ4bKsgB7zCGJLUHTidH2JRgFeBFiUgAFL71WHayW7CH5d7s7C3Fsq4WnEZTbEfXwwo5CYNZao8rAhdJq",
  "key12": "3Y4WDq8rbPRCHxpTL4sscDedLs7nr1RAu84zkGFjshYrUwGinQaEN3kaMTpUVSQ8reGf148Qw3GKJBk1W8aUUZJT",
  "key13": "3jFb9HkhXoYspo9PVURqXK1w485VguqmsfVYrRTQFNigv53hqtqumWSpVhNpeZ1H91YGGPY8yWsWdZg6u85dpvNR",
  "key14": "3WWWF4mjmSfog6L5G7wc5MhSupt1nvYJFA3LepahnfwQVaK34SaueFvB5uMoR9pTMvkdc9J5nFAd96MS3pmi3RQq",
  "key15": "4JnxBpZqouSSYS2j4hYwQqkhQSHpkntqysjhUqPTpDUrCZQ6HLi1JHryZLiiUaY4UJaKPZr5wwzCQTvAx3TNMb7v",
  "key16": "3QwAyTREp4BoGBqnRHUJagRVhu8BqzdjZjgG1Kp5YkGjuccZCETdKzmfVAqg2Db3n7Do7XEfmUm4wN1gLszoGMot",
  "key17": "3eHk9HgkCXqkTQ9tugjvzQgwwAAKjAsfKE4fquMRoS9BKSoMqAvModPCap4HCdQACt2V7QeTbgn38p1aqN8D6hGg",
  "key18": "LiNNVPnPDyVn1EL2D9u3Df9whzNBiotDojA1rzqnPR9BwxuwoavsW77LiEkLuoQt5iXsKT6VrYzpVgL6UVs2WUj",
  "key19": "4woTsJF9wzaWqR1xjCDEepx7ajiQmjM2CsHUn8DXUrqTzX3JwxW9iii2SZg2vsxR282rmjGds7xtZbrGAhEfyNQp",
  "key20": "4NFU2PUCFdiE3XeuXFtEGE9v6DKFzmh8waFHUTmTt1354mHPy76ePZ1nhVEbU8Gh72xhVCLRUJq8D1Z3TyR4hyEa",
  "key21": "3fmiT3gCRnDXjwD6D5hLCx8NNtbgboUqX2iqcdPJxHmwi19pbH3h6xc6UjXDuvBWqGfb47mSEyVQookSbnwhrSGB",
  "key22": "31Twmq2TL1tb4tCuYEejRqDwqdqv5umE52C2C9B2HVFCaKp7gCtZFzyQQSyGki5ieZmuiQrrtR1qen1225E2hjEF",
  "key23": "CVTzuGXuanTF3Ba4a7TL8CKNHCRJhWFnMKgkfNamfvsJyhLk1MTyqze24fYBgSmmWMmSebZg48aYF5mUeLGBuUJ",
  "key24": "5qpwK1qBVFaQrGvykkr8UFkZ1MZW9dJv6MCTS7fRPB74rkAsGPeR4UKuZw572EUxRXjy1AFqGCceGohKuSLfWUCY",
  "key25": "2VDmqqme3YtuV3jruJM2XURy48Zp9DGWrzACpaUj7zKmtBGA1Q1ighheDiLMk6LqywN2GhgetaBnCmFyky2GxmQm",
  "key26": "2EAUYEq3vHFFnDhCsUiDxZTZ3mWBSfZ9tLuY7AaopNmbfctoNBc4vL9gbBjxCahjbR6e9YTnJE1zTDKsYBcvVexn",
  "key27": "2B5kxGnS6JKR9eHuU1MAHv4PwioeM3GgubMjpPSnNakCUkEvzbAmsn2qQ9nwcRUWqKHpwb1TxgSo27V2KsLCMqic",
  "key28": "gSzSCn8FkWMFL41rs4PegfNFY8s4XsrnHB5c5xTmqSeHXJPhQ4qpcDgeuHoYoVanvmBXhHoH2J2u4a9xEykVNt5",
  "key29": "4XRQGxymUSPmYA8NgAk6ACEpvcNWs2WLZ4SPk1cGw1Q7oNqtb3ecTAarsUQwotmM9MD7zcutiEimY3NVSu1YQtN1",
  "key30": "tULd5bnZmfMwdRwdXL3tiAAt8tHC4pToSo4RLbbZteTNdW17uUQtKvfob3SMih2rQ9kRqeYMt53b65hrCuwW9zs",
  "key31": "66ZcUqaE4VBJzz9T1Mw7MTf1bb6Pwhby5CtTzKveb2Ss9Bt2JZvRbVP2wWaH3ec1XXHeBWuQ9RV7ptPurvasYLtr",
  "key32": "k5WUuHBidvx5w8TVRWKgndBpPHkyUrJthAxUZ6PQXw57ye6ZSAkmu2w3pAKryJxE6KM91z9dt78mJg7dqbscei9",
  "key33": "7ck7vNQm68Q5s5dLSE3ZevPY9KpWiXbJoDpopwHHfq88SaBoJRGAMLXR3sBxAT3hpdNBq98r73sVjCfD33w8PYp",
  "key34": "4fQQTmpJwQ61Hs3d6YhCWn2NSE63v2o9hWkqKnCu4soUsdJrq7c5TaPaqwvNfyYcGqpMfH8BitecGrNT4CwLQTqS",
  "key35": "5MdcwFPXRQkZgfVF5wh7U8fkcWjNgZymS2auddB28AQ9L5C5L6Xsq7CBpU1DSEAGs4X8SLoNJqTVhxzA5owh817a",
  "key36": "4xkVpimGKy8brpQsS3CTBMx4SqdYHJqZYArLj6VdRa2pU4dQW8m9hKmpBMnJrpr7y8ozuMiG8royaczLEmuPcz7i",
  "key37": "3doNxUXX1EG48ghCqe6maZHSFUgfV4T2VdMgTZrg7UPUz2XVvvSYLGip82a4EQe22vpjnrdpt6neXSBRABro229F",
  "key38": "2ModS61nQDiQNZQRHkrU2kgTshsPQC9ugc1JvgEPrXRfJs6aZ2Yr996ph6pfmPomsUHby2HYpUEYAi9XBBYHVSWK",
  "key39": "3fEaAYEtixaTp6sFHAPFQfiwWKcWLQYvFNCt3uf1qJyYR56f7yNqRxaJ1MVoM96Z7wL1qxb6DDbhC25grT7ise6H",
  "key40": "DPwtXgFetbMeSY2m2Sv2qu2HztJGGV2FkGSpB2wmuMyhXXZRQKUqY84Qety3GYu7D6BXNmCDHD89eWvdEoEkR4s",
  "key41": "42AB4SdRGG4HDrspaeZwqpP6ZoxQdr8iBHQHYmpNm233Zb7fRSq2D2vqBd2mzLdAhkcsVW1fRdAnToFZ4ZU3Ub3L",
  "key42": "63d7ohhw91J3xTRYw73LojEjMML66KEtJVn8MAwvBNSksyryxrRKVNQk3RV9ToW1AZzMU5YXNV3ywEZNAehLzC7w",
  "key43": "E2LUxBLKbSuQY95egGNdq8dycvSdCZY12aDS9JmY79oh6iNnfwjdb2sUQ1iPgGQC4WW2wvhTY9wwDfvvoXqdsom",
  "key44": "zeAdLsVZZycbkcLouhNYPZcH1vBw7i8J8rLvy7mjqFV9gpajgkoeaDpjbR6WCdzKBgxwHwYGp42sJLdrhRTNCfp",
  "key45": "3WtafWRbpKLECkcAd919TFgq15Cj2XXgGDfcNqxeNUQXVyBsGUNfRCYyLKgbNhR9oB59pQyVBgvnMdVYqrdwk6EN"
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
