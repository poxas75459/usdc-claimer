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
    "3BZamKRKAssFMv2DLCQMSCfH23Jqt1mUzVpshofCdfTJoEhnzLBgPwmiMYtyjbncPKrjKTJhmJQsVaaTm82JwNjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9MEUoP2m38AFDHJTeCbqhMhhrAhxyRyDLiNRuLYJBAps5ERgV8WdaRjw5auEvPQwMD5RgPbmEg3kYNiCYhT4p7z",
  "key1": "5uQTy4QV343f8uAbCQf36FVobwrAYA4cj6HYMm3QNHdVgT1yAfKJuNEhrYihuGvVWB7oiriAJencvmpeZNx4UjR4",
  "key2": "JdeeGB73XRogMxSrC4AK33q8xgeVHQmuVojchnmK3Ln6cM2aEJoDPgJKtuRb1jZNpEuMyVH9zrCPkhB5N2QWJoo",
  "key3": "4wF3bprHmAHFRi4uktBXaCeqL4UK9bjRn8ShpvPg5MMnKM2jrdrjWFd6cWTFCH5tFdVrSunSe6KrGMqvJzStSk9M",
  "key4": "2xxuCa4RLPpMVv87GeM5vtEisUnvWZBYBXyKXzFRsoj6C7cppU9eUF3AuTHPYzamgKWmhSYQVkRLrMVyZHfsgfGs",
  "key5": "5hbvSUYA5AQ6zMKBivoWiMZ3bD7C3ABmgd49a5LP67AhE6RhRevtP5c41tSFpczNPobEi45PSQDdrRojfcbzoeLS",
  "key6": "4A9LDKRcJb3YzJHhVWpZQfGa9oT4u3LXhgraJUS6utypWq7zm9yg2ufy9kRGaGFRYPvuN3auHfAT9ob191w8GNnK",
  "key7": "5oZyzU49v6sE8LRqBp82DsAmXi9z6wcVaqLADJexz9i64uc9f9ek8YZNeJKkvcWXoYfsRX4bs2kU15Yh35n3phd9",
  "key8": "4xUc2uYUQA3Sh4g7bCA9BVwH26NdbnpbAvAevpm94T9iWb9mdMHf1Qpzuprib6Pq1Nx6Fgvwx8mWU4LFwvMzuwjX",
  "key9": "dwMmVb91yZPxAFtgopFcDuC6hA1FceHvLX4GwynhgB29ySXFUee9J5cWKpR1WzytAS1stkceDKkAsv8CThdNHUA",
  "key10": "57PnoNwzGdGsahkntVDXNjKW33shxN852w6gtQGwdCtkZQTbaJ8dgsfZKXApz1FodGtZDgjLdGFvEoMGFmcmtj9q",
  "key11": "FuwD7aKWBdUsRMnc6GVHZe9okJWYta7MtB1BFC21aqpPKWR5KhCbWWHamU9yZoqj9hgoJENzrCfSWJ8FYXusPv5",
  "key12": "4uU5rxnPBFpGFdwA2RV4if3acxYjcUU6ULdyeHmmMvzWAzHj4aw4XmBDz4tQGrKDQsugwJ3Am5ocdhSo4nTv6orj",
  "key13": "2r3arB8aFzXJictDHzGQKuXQRdThL1h5mwcB1zUsBrma7s9XKcyy3bvRpMN7xNFjAXWefsHuxWasazmCCWB9AYz2",
  "key14": "5Z6jDGKhEgNs9hu26iugeg6bDGfbu4i3TR5VroAnXA73qkvvmvFdszdCnUB2R8wwqxYU3VXkfJE4w293WXrvCSdY",
  "key15": "4n9Gh4xcdXBKzoJ15Bc1jHHmhYn8A1GwDmtxUpTaS2MUWmxYmgLN8Ud9xv3V7QdKyYyETgm57cRJoPdCT8AaW6SL",
  "key16": "22x44KU8RhqGARMuojvTkcoLXFz9PJVTC727r6reVXcLquXFTanpy8CBWbC2s24nAroXJTzFgmCLWCLRi3fjq9jY",
  "key17": "kebRMEmutCEE1gLjimjJM3R6x8UMQ5gpzP1TAM1U6rzqejp4a1V9Wn3eeCUTZZ29dFrHUyig7rpxwVxkpUWJn8D",
  "key18": "2H2pBS7n9Yrk83iTYCaPSnXx424x5vqzMLNkmp7yLd2guRdgxV6QmBWaqyB1Dy661HAKqiBe5VmyNAWzdcaX78fA",
  "key19": "3Us1Q6J8nrxzL1ytFmQd9WPwyqD6oY7SSa8dGkmJ9gevSZ3LKQtUmxmCCTNi5GjKzDEoHCQmBxycKMaDuZkp99Ef",
  "key20": "54vzZZpxdSppMqhhgcYtsMfC3QXZYfyBcacDYJdxs5w8ehaXawFPmCvcg3Z9rRQPBcxNAKVMVqcJtbQqdh6Dc8Dw",
  "key21": "2vhLjPVX3gKGVtQtvfurM8XURBYzDPJJrej6BCSziFwmXtMC8tqnkM3LTdgeXqaX7r1j4tDvrZkAyLQWewXpysMg",
  "key22": "4Fz54PWMUsj76LvBfjVX551xA7FE8ZCoEAM1yeva5T1Z1z1Tb48h3rHVRcCwavefuZ4ibSiq69au73M9MyaaM6oW",
  "key23": "2xLMb77aen8D2cBqu5vrpgK8ZJwRLHwaTSdoPrFvJTS9ZU7S5SBgUyNRcYtA7tomuuGjTLULAU9FwXj2jma6wn5i",
  "key24": "5VUjiC2ibF3Mt1EgszV4JjPUWL1PFAmV452dQ3GgjJb2NUvEh9EswQhUgqxb4ZZws2cjdUh7AsvAz135zR9vtfbj",
  "key25": "UQEKmRU48P8NTAZChR3f9SczYxXKAUaC4o2QEPPUtGK3fE3jaNhnX9C8sS4k9BRtdRd1MpywmZyjt8FGzh4dA4c",
  "key26": "2Zy7SaJnnJDB5BbbbYh21wEd82yaa6j49gCCF7gMraggXNYCiDYeMZdQBRu3PDfoEzKvuU6B3GzhgHi3jrvumcUj",
  "key27": "4AjT7yK1YvLew6cRgEHwQB3xrjJnXH5CcHarSJHJUae397fiBKALVG3Kvj74WS7LSwmV7ZBPBQGEFJ2zW1d432uq",
  "key28": "5fPnuQXXjticw8CVhtruLnCwkokyduW15KdADJMqgZhwB1koTFNVWwY7sztmHd7JBNRUssuY3yYRbqpYC5j5EwG3",
  "key29": "5sfCxKMC6sGFQbCJiPKcHbAusvkkEPSQdxUEqqfmTfTr3PjDL9vDB1ahsAww9UiQ2c27wADgDKq3Q5x715gf4Qsb"
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
