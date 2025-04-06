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
    "LVKdYVHb432aurVrxCzEzAHQKFVDnguHVC5Xi3Tw4EA1bnnqwqEq8sciaswwBrcRRJr9sh3ZG5su8eLd6eZmk7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Suaj44JWUEDVNBJSBt9U9jXjoZfAG6YA9B9kz4Wy3T9QHMdTvTZYXsyZYA3KG5ByuQ4TPVLNMchAHgMeBNoibiR",
  "key1": "8T9yQcmF5jLyj3kcakLVYb9aAcXKyPSuGWcGbDVwRrRzyKGfsndZKwF8w1kEkwmuJWRuWWUzmh7fk6HGycrsLEz",
  "key2": "mUVXSBm5u2k7hJDVany46H52eoRDhyiZQYzL3G9YXJhfEyYs28Cx8PXX5JjVHXHjEVUrubKC6DxuwQLctaPHjff",
  "key3": "5fKodr8BtNLGEvKp5oyN6Af49AfkLdxWRLFXXQv4Jem7Yi3BVNZr45KepcwM8tXGPsPpbtx5omcMKoh1fKE9Qg1H",
  "key4": "3msvevwj589Naqe6d8BjRmgDhjvzFyq7RiMqVSvxLMkWHZNbed9FcRX9MMi4eSdUC99Fj26tApJ8DiEtkZNio1yD",
  "key5": "2M15Njm5vKPTPHWzoe5F17fJS1tpjo3cFc2iPw2iVCM1CfyuDeLNvsz7EN8E2Png8HUG6mtStyLGf2m2vYLZto1R",
  "key6": "3hpUiRUCpZW6B5z1CTGHpwbXR4iNqzPouMStAhuefX5eZAcdM18XwbbC2pGDKeM5zR21vdGdG7R2FrENi5ifZRU7",
  "key7": "4THu64gDoQCukifpA9c7Src7WLiCKzGfGWHaSDQPZZn1G2qvx133E23xJhHwFUmhsTGE1ydtc4exkxV6NFxhCAkz",
  "key8": "xN5ZeX3JJNk9kKT2SNSJ4ZBqpQaorZ3PW76Sqv2B6HqcmdTtEd4vGXABdePv2LPCJMYzWHCXKhjVfcEAH2MyHUa",
  "key9": "5k37cxSATRw6jw65XyKd2uoBc1FupZGxSxeykAXSmQbXPQNCf9iRV5ckEgYyhZq1VwdCvZDiVkkWeFb6D4x6yHmc",
  "key10": "eMQTRhxRhMXa8paCwV8ogS5QQV3QEhzugNVzd1jHWnXJSEs3zAMrXAsvNdoHN8Y87WhSFQHJrRDuoYJ4N1pVo5M",
  "key11": "3Lpmzxyoj4P22KPmpqDtzXLdkJuzJHWH7D5bpfossWQYonfbGN3YULJR8smH4NtZKjykbvrB3TRbkTNL641j8q9f",
  "key12": "c4zWatzJJk4kNALXkXXRZN1ykRW3DocTNWEnVTjZ6uEmtNLr8VKZVvxTDw4pJyJmtfJ85JuaTXxHrKu21gqSLUG",
  "key13": "4F137kGB6xaABKhzosQzps9aCsBTwTc1yrNMSzFgz67SCcydqDjrw63DwTiE5XDpYddxdWGtDLNHe9JAY3Q9qJeL",
  "key14": "5qNz9Eitg7TQkoznmYZATpAkHaStADF2SFJWz7WabWaPYprqAcnubvfwU5cJJHJmkBHQDTDUoR9mUvjCvMB89BWd",
  "key15": "46rruwhDQuez2mC1mfRYxeEbHJekPmJbTq75Qtk1NFXPyTaSBLN5w89dqzT8cf2YY3vL38k7z6CQpdsbkpd4thck",
  "key16": "oaWNU1SVfGmxUctmN5fFLE5LKetg7QQu69iBKj549421P8RF7BXh9YuxUKHq9gedGHZv2AWAdEsbHCLrTMBQgFt",
  "key17": "5v4ArKPNRPef2vo24BAXWjoD47hLao7d1LmPNmXkLgP4G7z9AiaeY6kJcDepVyaCgrRaxqbpDTci2tzKqwsn1CpB",
  "key18": "2UsN1QcsuchnAZyZrXRKEsjyAeGwFZHFLTRGTbeZa15EJ5s3SKhF9Dd2NXMC8g1bDN6Jmyi8GxeoxTQoFptajcxU",
  "key19": "9UM5LHgWau4kTNt9vNzbbnNk5XYvAQkqtan4WtmLqw2ZQzEnCBGYcToHD5K23Wioy31fbqJ9eBRMdzXCbh6d3K7",
  "key20": "7REHppDm2wuGo41Vz8Wftw1pH3ycJCkLVTRZWgBRdtAzgWQErUGCvEynmeQCEiYMQXSMefvzjrukuX2f5tQPR4H",
  "key21": "4xAfCVVaoBePsxeKb4uqvdWoNRbShpj3CNfP9iPagi3aSU93UzPmzRp9CCZYroVxkyW5VRZ4zSbuRe8yTtmK2SEk",
  "key22": "5ukwE29nH2Hvr4tHbAkrjU1hvHBqZ64Svs93hC9yMPJWXdF7SxNMxXhTQRGPyfefoKpQ34Q1PKWiYpcWvUGhn5Zg",
  "key23": "5RxBsi1cZH1Kmt4TkWNtbKFe9nWEPAe2ngbq2Y5aCtXvAMShSbfMkUyNopb8q4NNs1fAECGUBpkMMcCGNCLJvGeD",
  "key24": "479uSRVgswErkCdM29ydmFoCYwJ7R6TpHJPnFonD95Tq94SY7Xuww2zQ25KZytKwoDpSbC46rqzwn73rowx9JcVu",
  "key25": "5MdVNWcLXLSuhdApCfcym1asuw1QKiz2nCS1donYHamnKRQJDNL3D6S6evHqdqSdrRXcaRJUvtBqWGxERMkackRu",
  "key26": "4N3hL4hkpEdNQZzjb4ErytHaTdXxhcahGb6oqpoWHKBGXTjEVZ3xG9nZi23m91cSj2VwVuB5RF13nDZnQzcCfnMn",
  "key27": "5Xdv3CFDwB488UjiXdwd6E4AYYopnnj1nuXzqWpv3VR6n9yt7jJiABgQYkbnQd6owvxb7gnQ18bkGhmzJPhx5aAc",
  "key28": "4zWjJPVVKtXDezVAAShqfERBZnVFyW2dWta5zjVPQ2msuiBvui8tYkJaLtEcweqakvp1KAxRUqKACLeA4hLDeJpt",
  "key29": "gbKTCD58APTpkpn23nDfnhhuJE15vgdQF5RDFKnMr5Fd4AeDz8tpGjbwyiHw3Y1k51fMwjLpa5z7uHhVF8Ui5kR"
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
