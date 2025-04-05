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
    "3XUvskFXhLQDP1RKco8Soq9CDfmzh1t9Medez4u2EqKkikrjtsxR7BxQeLuC6G4KGS4rm3oshdFhVjAUoVe5QzdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "312GmYoyWau9uwLVMuWxvJcY8j747M6sfgV7jvTxHuzoLVQHVMXDQDmgnpN6KJxqSSc1Kjgr3FXVnP3vh644HyyC",
  "key1": "66tVSqG76TWhTk6uhQzEu3AT54TzV3Pp2scGG3ScjpRk49awuv5kgvND1FQPWAmCqK8qjdafMJcAk7RkRnsf2yxK",
  "key2": "4fVYXRu1KR6tMZX9B64Kne65EXpNmHtU6nnkEN1uJq67TGLhbY1WMP8jDs89GF4o9qYkUtRqccAopYAQBf5pSB3g",
  "key3": "5z84sMPvNrhRP4cfZzxeFk4bToGjBF3rTuRNAmKwyF52g4nowszqCR5KWWhwS6TJbhmYUgvzrBZhezepUpuCa8iD",
  "key4": "5Pp2VHMNhaxgY7XT7ENbxdcs1SiXo9kFRNVMmpEMxhWumA6jZZ1sCgLCQ2B5YY2kt8ZvD1MwWKNpVVDV1wTEdXHk",
  "key5": "5qcu3EpgtJLLHrjapCUug2K4pc21FLybYf7iTKZ8zTRRBjbKAGhhCXCh31amX3PzpkJeXJUCdV4A74tVb9gBRt5y",
  "key6": "BnBnv1CqgzTjq3BLGAyjLTGZGJTPZskHaCev9FuLpcPUZoSaZL3WJ67ojiBrcJFby64gpWjLfCvX5wEVVAV27Da",
  "key7": "5jmejWRRgQPkPZ4afPDprT4Cs6g6dg6QW9Xpkvc3GhGb6ncktDDzM6LjTLFryoAzLZgBMnS49X8uUckZdTqokjr9",
  "key8": "4LKC3SMsGRLkUPT1ZJnkv9PiE2k5yBmN742SvyHwBSw7RToSfoRnRipCMTaMWjsaRRo1HJoY25WvF4hrqYLDsMTA",
  "key9": "3ByY7gNfBfRcCVCPqGnB5WoNqkfDDm5HwUjpzxUixkh72x5fBzRLVqavFfNTacqZY8vyFGCPCrzj4J8FhL2c6AWv",
  "key10": "5U7H5FVpsh1fcvJuyYcy5bz8SUUb931p8ZvkiGKYKaetji8qSWcS5zhHPi855YPBRCyCxnEGzrna5PwKXvfaSSDQ",
  "key11": "5v7XPMaLAZPfDcdPH7hoLif1aqCuRYcHC4ubAVJQBokaNH49oHhhuDKQiEtf5DW1zAnKDWLFR2maiP8o3DgD5Ar8",
  "key12": "3ivfkvG3zBDCtVVicDi3fMB2Mgj6MTPXvEso2ob88YYgDhZwiXUxLL6151yFdqq5jLzjNg7ATd9Jt7q9vuxSHnea",
  "key13": "5YAquZaDPniQuna9sNLMA5pqPGk3HayJxS7XSfdvRYDym2VWdum5BzdkH7gp9cF2pMNcqicgDm5zwm4YCW68k4z1",
  "key14": "3fkc4yutZbjTnWprBfSVfHVwGKN3mjUsBUart7ExqWvk7y89aUJF1Ry6EEBA1H5EjQyU91dmTaY7GeaRURTMfHm6",
  "key15": "5aVBjNFAiPrR2zdcL8rz7qBCjVYHVvXhzNdojqSfDknkYAoqJZYJYYBT1GEm2x6BSk2AArDmR49rjTwA6onhLD6f",
  "key16": "2Bf5NWpRfupnD6aMU7qqurt2SnsajiWJFQCfeA5XjKJsPYPmUPjdgzxW6XiE8mPzbXH5PTSVhw7EJCmxiYqDYCQu",
  "key17": "2EEyWF4VzCueoh3yjD4qUdgERX2mF6H4GCkLwT1GsVJQ3yRC3vM3R9aoQHigJcJXVFasUrYzVBkgkchiUxjsTrmL",
  "key18": "4DCv9V4dFZSVZXDGu2jkFVqajA8MzqpbsPTyhHHBDGqZpHX5sxBnpDQmvFoZSVXhmVHyiqkqForSMMSmj3VFMgRn",
  "key19": "2zhNxRnt8VxcZEoD94yMsqU1b8qd1AyNExhxWn687aQ5gBvodHLFzEe7r97peURv24eFC4QoUF4nd4keXpv1K8x3",
  "key20": "5Uurm7gkJKeet7yXQjZtVpXcmhLN8tYbqKZpVR5Pvy1JwHXcBGVEEqi2wzQBik7ik9kc8c9DwANp6hWQsLKTcx3P",
  "key21": "2iXdYDNM6ujuujQzkLPs46hFAFAfmJgnoY8J19Fw98pqFUrtaAraEFbNY5ESZZXDNjn5xVRKhcxWzh5iQEhyVonU",
  "key22": "hCyzrLjy4JLz79JdTddCF6Mns6Brske7xHDGss92wp7MqG3j36jnMeZ7vUwMN4d3yjj2ZWrEhAgwYv9pkkZENc1",
  "key23": "J596LcTLp4M19rEdtKwUUYkdzPQJkSJdvKpr1Ho56gbkxRU58QcyHwg3qDLQZ3gCYP6TwEE642o3t3Mv8uvUBLH",
  "key24": "5gi5C8MJaCN5FnvR1Q4g34ZJF2vUM3pVRxudiFBWU3qAFu9CrLY9Je1XkDhviPp9fCtFMMEJxs5TAWqeeZQ46Prm",
  "key25": "52PBxtS7ne5U9YXZ55C62Cr6WBFp9kN6KGbigt9F5VK19sq3ECK1jgAjxMKNAvEFnzXL4k4iGF56WAwsyoPXgJ9n",
  "key26": "3nwjor4rQZ8eJiQC5v9Ma52zhwEWszV8j6TohCNcTdHQjVRhVCV39DGzd8HiyX7BXF9AVec6koEqSmhu5JwHXRgW",
  "key27": "4Kz8rHapQZdxyt2GEJf4iUF9jLvSP3Gxq5DM9yHmqq5pAGFGo84CU4qRu9wTDLYncJ2MBtmhVcdtmWRT2qNfLLe4",
  "key28": "BBod8e167CNF3jfRNUwKNXbN2SFZcZNSiREXQ6yUoWrDLcmvLp38rjYyahGjckYwf5W1SBqLANDaQfZAk438Cu2",
  "key29": "3sdiKM6T1ePJug9zDBM8dndRdP9UeTrFWFoHpG1xpPCzg88KxSDwAg5edYmqriodEBkU9dK8xKLGM7WnYnQAbyNX",
  "key30": "3poF4dCH3nVLHEWSg2GeNN6EE7uGMmJsSmsd7wEahVe8ke95ovgQ4N1bMAP1vtxtcEikRSzvDHYzU3Ru4PnmtpqY",
  "key31": "3XmNVkCZoheFL46h8BjCKSzqLwck5msJoH3NetkzkvtNesPhDcUtV17BwFDUjF7e6qJyFFShKYMLSecDJV3JAJAX",
  "key32": "59TKRAwt21vdv5VQqd4qUhicW5sMPEBdBU8S5CaMQ5emgRFs1qcx3197em1rWTK5ZfQ8jDn7dYyTvZPrtuSTFhQE",
  "key33": "4z1cCwmhg2oFVZ9hSVizWVrHPTts4ErZHkdvMRUWnPzpHGbaHMd5t7VPMSa2GoTVP6WSiDqtBcmTiqCF8Ar8YLn6",
  "key34": "wUvBT5aUsh1AYRSsr6tVDVTsi8VB1YmCAqiaH6pSgdLoR1kBDoDbXdCBYRkhKRTtwyAhpn2E4cTk9zRN4DzNvFk",
  "key35": "2qxxgexbRFMEuyQif5inhVm6hgwsk348MX2a8SEpbcTTjbFzhWrX3DaKVUzhLkbCSjtj34PjpmBa8jXcPcPJZ1aH",
  "key36": "5AoQfujFAoT9JycCsqzP5tXL9Vh772ERyFi4QH6mnhJEenX8z7A2esK4qPm76JHsDyvb9C4YCDCTCqicf1zsE3SW",
  "key37": "5eoXdX6iQogTg15sTphg7RtVgoHGr3d9NqGhCeNqRcKX4kx5PBbeZgcRod4q61LK3xXUKLxbpw8BVdmtq6wYxJ9s",
  "key38": "5REMceAWhAi6nh5YAXNZQ7FxCGt4QxfT9G5EBmwvyDY87psKqCGp4qzB7qdWvaNtCLFBR7wJJAZtLga153kFFyiW",
  "key39": "3y6SAsMCeUSj5M1DrJXzasbpGPBU2LeJecmcg534vsigBzwCtwXwUHn6FDQSQXYcXKrBZtMjRMejNUhPZomEPUaq",
  "key40": "2utckeSXp6jaAkCDiHmeax4WUWbwkUSWqBEVmKPJ9VeLbVdUwQQK7Y9jLsibwmKeYgvADyn4PE1yiaN9H7dV8Mk2",
  "key41": "2B97TgKYDQsHWa5975GF4ku1BmSTK1KzjDNyzCj8WtaAg2eDZgThjyRgoSJSfWro5fi6ypmySDqKXKNFwFvL7mkB",
  "key42": "5ZYrwkGhbhc7bfzP7b788JsBTngqe4FBx8xcrvFmBC8RkNMJ9LzRqjhqSEwD7nDD5Kd7XXeCbJFiRDPf3AwYz27T",
  "key43": "3WyeoHtYNbE83d4TKdVRnNKTrULcUnVKn3HMMTEFNGeXqmDWSP9PJt9nZ24PXnzquXCEJ5gF2iLtDL1KpR6HZHcS"
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
