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
    "5G9hC1f7vSEGCPsKKUrbs6VH3xRwrF1PLtKcSNpNfkSxp2toKxGrPGvMXKRk5czEbvfMg9rVGjqJBCqvHicZuaAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FFtPnJP1gSV4BkSV3iPSD9hWhkJXZhPRq3Kh1QJkWNXWs7cfs689HRKYHsEH2roMdUhUPp3tR3rK5YpFqc1ZzvC",
  "key1": "4aPSD4TWYG5T2PJPWwVMVsq2278ScEqu3DJB5DpUuAeyQtwSGsdQT8vahkfaH95QWwjeyQNWUDSMvByB8eoPCxrC",
  "key2": "58seCubFm6s1bE52Qr9shdmhFtmEnE4bgRHeUm272CTZ9ttP2Kg82x6GtTngiMWAMqTkUWiBqqPFzNGdVh9xkWcB",
  "key3": "33MqqAa8Dd78pkBDj4y32kCd7dyhY6Wv5qye3ZFCyFdzXEqPMeGcj2gwJBFrazhdz3EBN5i1DL9xEa2ebMtxvAhp",
  "key4": "4UcjBR7L25gLWhzpkWd3dX4SCLebzqT4vfcdB1qw8Dm2fUaTPU1nsfMkz9hM24UXvtAEZzzgVig1Jx4ZpMtZjZdc",
  "key5": "3wVKgg6JJAfnDRgwDovvBzBThdAY7dfMkQHBbzQ6G6kvQjSvTGBXMARZRB43BsYFkCH8EC1bZoC9AWEDWpRekh82",
  "key6": "2yhKJkBekVEKohi8GAkjVsdr8oZXfv1ZcYtVG6P6Zeq9ycRm17k8Bey9Vn5o5QNBSwC7HiXvpKkE3bS6CKtdXPAo",
  "key7": "3jSNK8UTBFCyPTNsEwKw5rrJA8tZD3Bc3ZuEvHoG3gjsoCjnPoQEXq6shswFYVa7Zeb8LMkkTmwZB4Ceqogq6kkE",
  "key8": "5DwGmtSKqva3GMx2zQzmWuwD8Ze9dK44jPAExtPdYDKKYwXnE3Ghmy7UCSJ3QAi8zitquL98gHra5e1G9xUvwgiB",
  "key9": "3AzZvBdCueQ1dRzh7DJKQLxqrPr4wxVPd3JUuH3xJ311qjj9sdGefDE6xbsg184WNrwc7C2f9hmB3jUcHfNhS9mo",
  "key10": "4nXB52QFtzYFMRiVAmqhBBox5N1dsRYb5rFFEcWroaXufacVU257bGRTWH9ZzTj9BDMJ1P5NSSra2KBnNg3SdXf1",
  "key11": "3o346LVhxA6pmwmBZDRP2q8vzEnkt3vfPJEnrDm5uKhgpCebVfUFgjr1TBWSXSD8c2r3rWSsTMmu83AzbPLfEYrR",
  "key12": "66d3enn1STufEn3t63FrjrirajTWcmUYYwzkpVSpTNcm2QikUrppCZby1HkJ4Gtk2Pnje7GztbSMKk3tNSY8AS8P",
  "key13": "5kXoYK7741zVjC5U6nXn6rgC53PMNi3UJ5m2GYtDCKwUWuwpU2yhRBpU6JeCM5hnmx3h6yum7faicYsMUQcKDcpY",
  "key14": "dXTPkyPVsxGc6GhjRyFx6RKuqHQM2a4y5VS3jL6Z4zihjsQd99Dh6q1qVF9UBAuEJYLuyfeuYCsW1uZ2Rox8KHW",
  "key15": "5bAFKvRYPv4ze7nVHE88zBYYPZEFVtZ9esJLosQNN5j1n7MWDrLEq1WcVP7M5xqhTTeo4Ac6zV3ryuxGxqoDULj4",
  "key16": "3JRZ71G5srEVD74DCRSryqHBfrK66A5DzATHkRULRVTkSKkXa6bXxy3gTAnmN5jQeYgML2ndPfjyEKe3qwCEUeNX",
  "key17": "nSKqK8ywo27L2YUBR3TeUDN2ATnRAALxcMY6gzPzFzGG1sVWxHwPoKDUESr2BaCm9ZnwZVoXHjbEWp7MrQWHKfo",
  "key18": "Vux4tZgXhfpsr6ZxnJEn4S7CSb6Uuii8hb3aMaUxuvkFaKYZXotBxf6KN1pdcpFUsnHbkeQCrjzvXjZrkMrFz4w",
  "key19": "r8xwVwETLSmtMLGg63hMwfvQjLpybCfVPiZ773UhxdXBdS6smGv2xYfLyM9FEP1pJSPpyM18WwqyKp1L11a48NN",
  "key20": "3MSYCv5uBiynz7G5RediUsZfBpRiNW9dt3WtiXoRFwghoXwwFTNWosW5VrNeN8gyLngnRWQnZEfa6Ju4L3wixLB5",
  "key21": "RA4qR4rrJNJy1dpF8jbjE9vud3okoqRadiUcjuPZHqtczPKV6gC7nULs5L53o5MR5cMB1sBhU2RGKqCB5vhmViB",
  "key22": "4yvTkAJ47KVR1pXPgctRp3ztDfJ26rfKRRnKhRGZ8g9FyvbDiWtZSD9KLq3bnzNNmWLGrwLyP6VjWFPe8pBg2bjr",
  "key23": "4iN71WbRcFGH1GEPwSi1uV1KaukCsmqWbgTaVDKY9JmgwNPj6wnNNXQjtBMoR51DrB7m521P3T2E2LxMzQU7HNdx",
  "key24": "3shaXR8L2ZtNgMjkvwbARzfRQGVNSxfutfP4kxBqajx4LHzadRhx1PhQMG8ri9qwUYU1kenWnE4cD8Jhpgs5gLBN",
  "key25": "6kC677JsyNeVKzmij2HDWxAVs2qUFRrwVXM4n42mJhAYTwBMCebeam6rMi7t99fUbQYDQnhqCM4Yh1ggbw6yjjL",
  "key26": "5bscCHSiddYcLCqca5DTHS2Lbt335sfqEc9i37GZujcC6mHmTE49WUdUcDgG1E1mmQuw8shTtNfYVJStjfwoVY94",
  "key27": "44UY3eK9YbvaDLffqZiXAra4Qb12zDy8AsAuFa8isrkBeffwXxkc1tMB8jaWswGXZF1Tp9NzUzYbHKmGBHkck5aQ",
  "key28": "2eLunqS1CVNfTdRpkj4R7mswwkx2MGr8sjjxH3CJhysqQS2Te1HimAAYgpKyE4dWaHHryv6QfZrjhXB5LiHjzWDy",
  "key29": "2U3wQ7UhFnc1nsA6uWKUqqhMNhCnfAU2yZ3vj8FK9KL2qRjhwQhDMMpPzbzbrXQcuqXrMhkaewe7Wp9DckxxNpj9",
  "key30": "JM2jaBRPQEUPaner4HMeFktf8EthEfVfLaUwrdAVr1npxfRNvoa9q9Jvmamcge3xcJ7mFUGP5K6p1yWQLYPuQyv",
  "key31": "JEzSE2T7sebbpB2FvSiqhp2eJduYSc6a3NhDYdgVdGPbjX597jxnYdxpjLmN8C3HUfxGym13zKkJkSEg6cyZiN1",
  "key32": "2ANZriToKw6ToBUh4HQpEff351YuarZoKVG4qiQL8BCwdHNRVBPDcB5SPQBgnPzKKKUVVY7bLZWQk2rezZFKdoJk"
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
