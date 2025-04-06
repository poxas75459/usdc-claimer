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
    "56LXD34Jd7TRonGQ7wz2kjrfp19wa2MDE8EkK9LfWzbEq14ijghGwYbgqGcTP6uTth9ZwGSyFNoLtt8mQtixLa5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25dvZLWt5GqRRSbGyhkmEnVZWGdNUPKGDR8gnCef7f4SnzZ57jaJLP5VUzMzYjszVpvp8suDaWfyCw5sGFFd9eTW",
  "key1": "JApYcHpMTvdT6oULCqduSzdmpFij59QQTzxQTqF4KLTWwo6Sp2ugZN7kzJs1SuVfSrT9Qm5FS91Fz4pGyb4nAWJ",
  "key2": "KBQYy1LejcEmQ86yTGJ1phyty2Rix3qEd5rWWBkHJMrxpifKQQABsWpvxWWwbChHueV9WUQFARNhcR5TEBjTy9P",
  "key3": "41F7hgDM787EEBGakuZnbGz1Sj9PjD6bKZC5omvGtbhkNBzdaDCZUc6XNaBMBdEcXgUexj4URKbpbKezSxFtRfxR",
  "key4": "4f3JoQt66DmY4Q1AGSr5Gq6SqrJ7PKunkXUGVG6RGSoxTPg12VB1XTWTDKZ53RN5zqhKNFb4NLaqVbJ1QmgKb8PQ",
  "key5": "2XWu7qC3c4wZFCGmX7J3UKhsfe5RDwbibSaYEJQT69rFYmjNNyAUWauyLQAYq21zVWUmcXamsoz5UFsqpHxofpQP",
  "key6": "kg3qodq8qZzt8Db9RRRoBCCka8cwR4Y3Bmo8JuvqjXBsku31kYXGYMMREiytNtqBeudgAZ5bKEkZRbCS9p34cpx",
  "key7": "3XN9a1BShPRx1G2P9N8EtbHeKZREgRdZqtUDKxsFfe7SPw6FdMQB6oRZAnrZMoBvPDxJELEX862hTmGLHpuena6c",
  "key8": "2aR1tccGMsVubcs82krfMzpkBHPQRo1UywwxSkQ42nMgqgepatW1ovZeUDjuVGJdQTQNuyzmdCBbPzQaGBDKKK6u",
  "key9": "82aHuAiQ7BYpqLFz5WEzUXF27uVYjtnMaSgWoHh5MfcoGqphnBG4D1iqG1atzfhCbqe2VAErUwTyuh32mFh9P6F",
  "key10": "4p96xuNWhyGPhaNPqsJj3TeV6FcN3xvob5LyfvcQPWSjvdpLYdfJT7D8xZXU4Cqu36muxJyYAvXrcTiqkWemomQ1",
  "key11": "3wBy1dhnMcsFEUNpQa7gZSgaoYRzQgdExCNiN7zVVFeT8CSTf1tdvHtJ9SQmKbYBZNotB1MnpZuuCuNaty8XXr2J",
  "key12": "3nuzy1FojHUdyL7b1bMXeEpxsTpdNudPufGsTz2aNTVH44pi3ZnVSaLds915UdRWTKed1ka9x6jKas95FFM6BLWa",
  "key13": "vCpWBTpEdFvTjcsBWSBVVwhxgVjsQfzdUBy1qMNeBRK4h7pjdfU8RiAjKKAdd8xCMLGJmi7VU3jKBmaXWmjNGYi",
  "key14": "5dtBcG8qQzTkMXARcinFkG8pz1wJPh41W6wXbK51vjc5zXcZQh6p5KMV4NcgLYiZgUwu8EYVyuDz7zdUSLZHnnbU",
  "key15": "4CcU7TWKSPB661SPvDG9DoCLV9tQLeP9Tg1CiXnP8VjHwoV94z9DaCiyx7bUzYP1H7Y3ZpSDttqx8ddRVvfKjUhZ",
  "key16": "EnNX1EcjmhB7kCoaGfUkBc1uGktnx1msZ4ugeSSW2EbTgwsB3f6NMEmAYMNhgzqmtvHwZ88B5P6T6r7pVFqEcbx",
  "key17": "Zth1vjM1bagcL6F4RepgHN7TZMxVNsJKSFNcgWniNMzXy8XRpJ5iMBFN7Vwpa1cbDsSp7vY7ETBie993PvEV17f",
  "key18": "5R7311jKoVNTgEG2mx8qz2i9vf3nc8CCpuB1GptrsXbKVjjBKj9AAin1HemstPqxa64t5mab7e7VfdGtwZ9UHErX",
  "key19": "4XnftNqhEg8fLgkWUsUQjJXPK8679TDsNRqVsHCSNJiKfKrkKdPighvy9VVof6h7Zf1UAZmQn5hgw3rT61qSpACj",
  "key20": "5FuURdtfsLhetB5YQq54kRiC6KmkvGEoH9LpU5Q6o2jcWbtK9VYhxhmNTiyEuN8b7TjmFaXwCf9Muq4nCnpLiB38",
  "key21": "3LPx5uyz5YAuFUTZvz3KYN66Kzbr9YMswDdUTcUP497ap9J2dedZujiDbU1MxBtuNdx6CLtWZkqxxj3MQpwoyp3T",
  "key22": "2dPeUvJTBnKVJzYa7k1D24yooejbnwwngQxBBiPmqGrmQTzEksxF6o674LGLA6NM3c5pQvbWKu1yxno1XgYbRmTN",
  "key23": "4K3HpexnoU4PD68RrFezwn7i3ERsVQMVqP8jrMKR3rn4mJeRQhVQP1hpbpKVq6ff7PENTwK3PzocAd6qKYSwDoYN",
  "key24": "3UHnbM5oJDimW42heHezPj9nRfmgd5DqSiimLVMbPH8KxHhF6LxGZ6Qcjb79hdkysudVPty4DN4SeToM3uH4Nezu",
  "key25": "2rfh1kBz9Nu3igWS6c65kbZ4QAUuLeWMyXp9YAP1Agpkr4yuKab9zambEQdh4fdvs1DiNWVcouNVeuhsKmwXD7Qd",
  "key26": "3hET1MWZ34Quup8Av3ma2xcQ5gfgW4RXyHeymo2v6yuQdETiMQmxqkS6yWKKgzBbQ81QhPSp1upEU13M5EQMhU32"
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
