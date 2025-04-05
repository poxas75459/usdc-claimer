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
    "3iybStNBPkdP6RS8Lc3VBVjBef9h59WHRwwbnL1JQwwhPsXkTm8APFwZxnqHq1LpNbQeUu5d3vMEq1H545483zND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FtFNbvTsnB8AZdXYdzkn5zruhqyQLxvn2tWjTbtdnvj5smFb6zU2kZwfrSYWrB6QKYiMdWM4FbUbMZ7rZB5qfKF",
  "key1": "3cKrPkU2xd9ZSgA7LGWo93fDN7gJ9HLeFpGvqJVUFPSSVbz5CKQcXtEVwCFDsEihSHMavhSLs381yjPtQ5fb46YK",
  "key2": "352ihEyPiQc2jqLyDZwJkcxwZmtf1ZyUCCDkvuGdREi6QNr6ziyjQ7xLeH1rQWBE7FXccK1yWuhsDEJecHLzGtrZ",
  "key3": "DmzFjNqDyD1PbxzzCYa9uevrfrNduhq1Cv2QoM9LL5uMeczcJgKukbKs5yPR3TjxLSGm8K3c2k7o8SwQantiXFP",
  "key4": "2HSnuvnR4WTaw4tXyp7jV5uCywG4TrHpVUu6qzHMAgV1EWpJPwk1smDgUFPcmNwcdXNMrP66L5p7cDgDfcme279k",
  "key5": "bewMxvQ7XW9Z1kxmKLZjDcFc6E5WioPigzBZm9RJAaBq911q3HYwUXvGKMQfFufrNREK1pbtH5hiHTGAV53rRCR",
  "key6": "4BWaxTMQ81QhErRy5FxfTBwXDjPK2vYgs9V4HrboRCzMKxjdwpCTy9kkiS6cQTK6pqynzj16oNzsbVtzw94HgsnJ",
  "key7": "2QjQf1TTT41YWgLZSoBhNqPANs1oqzxrvJiMJ2hFqmAsQYGs2dgFxBT6uo5jou5MdNPDgCMpZFM7ftZ5XCLyLZBw",
  "key8": "2RubnrLAQqDQgT1e8VKp2Z8WKDLpwyeJApeeFefsjJbdjhtoMzgi7yrDGn8ByvJf93nRSFQH2FGYSeoASHqod2ej",
  "key9": "4oeiwCexcifNE7M4etNedsRX2DQXZgkuSzuxfn2UDFw4RvuNM7BVbLWPbRqKfyTaurhmFM8veBGQbWrsp53QB5GT",
  "key10": "5aZZ7wiPASxkTRQYGzQPzQ9QycDVmMQ8b8miS8NFaLd9eDhQqLRJaixqboVdE6MgCin4PNos5jWutTzBLF6YdSab",
  "key11": "2Zn1DYyiuEdcxPNSwHmMnWG1yqJbt1FGF9VkNGEZEFMfasqmaGTJ2fFaRv1u6A6KwJAKcYdJ3oz5qSt4Y3jiPvgJ",
  "key12": "3PEnGhEP5CBqU8Cozi8ZjAZjFdun46xCiUazKspxMGcPjqvAjGiZ3qf2qzyrVmyukCc7pjvg1wmBRx2u2ozBzHdb",
  "key13": "3HvLQ5Uqt47TPy5UBT4qVR9CjzVBPsbhik2vA4y3ejsJqSjhRUudDKs2uqnMEU9fbwtvEEcAu4QyXbfqLG5kywW2",
  "key14": "3kfjcxVyB73esGMURtcjHK6tda3GAucFM1nNykRr75Z12NJtRmgyRtkwyAekxwrUpWpUkHbEw5KJNF5qBF9EEXFz",
  "key15": "7S5eLJE8e8VmQBfabBBwRStMdm6eqA2Wt1CwogQuavoNyJDmZJno2efDjyRQdbNERq6TcLCSrv4NpWNW6ERKyrZ",
  "key16": "4SNxmzduSaXu4MwDknmmygcn9vnB93uypuYVdfY3qVRoDZhRkikgMDoFcxmYhwE93WsfarpUFPUcZirszQmrRbZg",
  "key17": "2Ecn5NYqYdSfWsGEpFoamwhgoSTiCBvyXQgzE1bLS9Q6xmTP4dvHuTftSEdqYgHtTE6PrWbk7TaFVhAVinnTHrPk",
  "key18": "55ukH8pxmLjd112qi5CQ6pSeixqgAa4KEnb5xRsQnvvJrhfnR9xaav73WUw575kxkaz1HYdPyBfQQTeptx7CLJ6s",
  "key19": "4CQsx6x5skdxFuvqfwpz6JF1CcRLh9GfWFckS5Kucpd1EH1XEnvSiab4azRcUvdH2HnDQ5d1zypxAujeJauuiUS1",
  "key20": "3o2TFVU6K8ySEGhEn1cXknfotDbX55yz6cpvFPt77Yh9xJoNebJZHWmw2Enx4VBgRTvjfcXf9Evx18ojrtpqo3yN",
  "key21": "5uyeKKm3zzTLycypanAib6gY1eK3ZncZAjfP5wbgi8XUvQJKJSpqkt91y8GL4kXXkiYcVquhhepArVgqqgGmRPjp",
  "key22": "5ndabrzi6FX4KKbVxDdZMt1oPMX8X14VwgSdNo2QcfbfHSjtAmRY2TwiSYZokgWE5q82WQUJjHLdfm6afEW7CRse",
  "key23": "3rwM4e4ruum5yJmFyxPzMygePQ3fnwSRSzLTtZv9JbTTi1UmVYTjSYtJNJsMw46zckCT9dPfH7jfKC4ymntZUujo",
  "key24": "5EhZJxVkJudh9kUp4L7e9pRpSLDvTfn6BouUxA1RtedJLGybSaCgztpDAPhuREGtBhmEhPdBW4BmByjiUuqUxmWK",
  "key25": "2V4gxpiuXEdBQ2hDK5ec6Tb8Zzosnzft4wQUw8dAd2tiDiFxxqRoXxHyfbLN971bQaT1UBitnj2jSaEBjj7DpGh7",
  "key26": "evYtkFsSLfnFT3KAixREyfCxi54VdND9kZQX8H556RKg8TCP4a69M3SvpsVrsdkXyFRvzzpu8cZD622ARSuJJ1f",
  "key27": "4EEXZq4vBGfPW5opZdqvVbi3NzuvU9pHNr45boDcjydkVgyBFbxNiTgfWBAfCLPV1i1svZue4q7ZpA9dcgFW7YUT",
  "key28": "5mGiz5ERCRGihD3NBGgJGM7cUndZ9dbY11dcXmkfmGChGAjbo5qAyKwPtuQ1UTPBKyabs5Uwr4Nv8JuqhELBmPJh",
  "key29": "3LwuBn3D6B8vMnWF4D3DhRqAgUwTUAmnm5P9GFUcY8ZaQfViwBRroNGkCmEiE5MHbPAu1D2VDWUNobdUADYoodnS",
  "key30": "5T1o5kn6gZChwCkEvcgrU4RjQy4NgsQJCtTmEaYLYUwKyYhcyErcj9qdPNc38cGsD9gn7mG5VDcJWXyTez6KZ2Nj"
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
