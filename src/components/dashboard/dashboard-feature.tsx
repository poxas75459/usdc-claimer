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
    "QDazqZgeGQsQZ9nfbycMuidzg41bERbNWUTnh5uuASyqLGrN8MgApDBk9LkuURFzTPctZYcfnAnmbLhwT3y7as4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jM2fpyZsUBebxzKeTMPRjJYavvwYsQXNus3iMebskM6WzDoy69NXvdXgFDVzaaCX5r61YGzs2e3LXwqWMgu3VWR",
  "key1": "4kPrjXM1W1HJBDJ1FGDv9ic8CRW3LfctQokuVhB2SrkKATbH6tUDMHSincLF2mFsYZTaCZR2mbGwkVDs6fP4N6tX",
  "key2": "2aEqwqcnyFccdBCuH8kz6RoEnVzWhT63dJFa8Vuz4nEevjBc8TaqBbwcQxbWseYTczvgg6zd4rANsSVHZjyFtCLt",
  "key3": "4aNpdMbjXFixfLLoJjECMpcWtZpvCZ1cYs5x4P7MwkTziKqf753g4vFBXFUTDVzMWzMMBitBrgs3MaqT9p23xzYf",
  "key4": "M7deo5GnKDrhGu2ravSTCkPQ7FHZcfBPwm2XCX7L9eLPkFfN75bDeDHZoPCmqgnuUaTZvo3T9cekTNkFHGsxW4A",
  "key5": "4t4iPpfgoWZosJ5ZbdqHoNaKSeu6cBsxbHn6XwQztzanS9W83NfH1Wxw3v2xq8v8HoTrPenCar5zonL2DZvZHcAN",
  "key6": "5JjawubF5c3g9D95TJ5C5BhVwndxjdVhqwJJoWUkMr2p8cAVR3ZMSwM8YGZBdzpobRqUD2t9PuFAW9hTDFuwgXK6",
  "key7": "3zjm2iSUak1s5TMRrNaNc7878AmorYEGMCNnXzpqUyi2bAqidD81BJFQ9vaCPvsfbGAqJPubaVRGBxmSm4sjvF3",
  "key8": "43fVCBFNZSduWsRgBZY66977zLiuThT3adpRXU7eq1cZkZxCZ9npTCYi7z3T71ynERiDEQEbtouRfC14hnnL7dnB",
  "key9": "5GveLb7XbuznfQqNqhdL1hpKYdvLYuxufUtVx5ZMZJDGQxZCpiJXDLmbGjKugxC2BPx6tAPiqRznzCabLqWQDe5q",
  "key10": "4Vf7nffPTZqsp3ZgDnXTjM5RomGxQTmkhgTwgwqVMTG6V2uC2MEfcGSuY4D1eTENDS83tQzFpRXAsMeZ7X54zftx",
  "key11": "3kwXUKYthkC4taB6CCkwbRPc3hXWCiKU7cx3G4SkBDwhzTD9hkQR3fnmSroYVnspuxEa64gEwZ6Fpu5wVToLZDVF",
  "key12": "55YgzFDbnh2PrHauJpRj7c1KV5wivJXxDgf3mV1GcMqYqWAJA5uXhzWVfXds8UfbLvHP5Yh3SZhKu9V1HeScQzC8",
  "key13": "4djYtkG1w9jB9yZ7QFr4YPPwKVNz6xyVS5eXaBvh7CpLmz7sT2iEDQ7b78c8cUj2fAMhmgie1f6zTYRbqpsaKjat",
  "key14": "z76aALm7dLTyPbooSu3zKViqzcgcn8vRxAbiUQQXUt8ynH4DSVrgFHj5NP8HxPomkh4AVstj2ebFKn1pSCNUA8L",
  "key15": "5uTz119CFk6BLowVftKo2JkDCLNiq1Btpach5DbhC4TanPAFva2izYEQRDBuu9LVdaN2h6N9PF7euuo34uPQ9gtz",
  "key16": "67RxmZKJE9Vq8THWJSUqbHBEPXutgvYuo1dbjsxHqb3nqycv2Xfa4N958ZotxKnNdxrjo6VS6Bbda6Dszo6z5VxV",
  "key17": "22gtZWjx4PpgTfHK9betZCg6wsHeUzwEYWofASNpUyfDBCL8kDv6Qx3b8KzScRto8Yng7DhArTBxjgLLPTxyzX93",
  "key18": "5DwRbrVq3JKWmecgPe5dJwejNSFhAWnpWaS7in9NvotewWJhp1sJpjg81GeUhm17AJ6z9NR7y7DyFRBrQKiGborK",
  "key19": "BmaCuVmFn8hcXZZFdSPcYozQbbJF6RYwU6vStVLDW9PrPJLMPrTrrkGYMqznB4Xns74LEGvzcbCKhCNYxdF9Vpv",
  "key20": "2tXvYfB6ordfAC2dX92EC7p9rbMacMt3e1Zcn5VLxhq7F3HzYwSK7MXmhKosoRNF6MfU8nULXia3DWtSSR7CGKoF",
  "key21": "4d5ZJ9drMfkfHaTGYJxs8C6TDodfaGLoiiMxrYLsmbppYhXcaiBzb4zfp1x3nNKvqMLAk7G5pFsWbnBNMNinB6VU",
  "key22": "5TXe2cwMpDBAdDtYkX1QkriT92ae3L4bnJH4tDWDVj1XDw8MT3EvK4UTZ4sg5hL8kLa3SxtNgtTVTPjoWswE9kXx",
  "key23": "3SjECbqeEDVxZcGho1nZf7KV5ZhjT9yj5BnGonDHCXeeCVrNBirFYTbtKABMY8ZX31phTYKVGA3zNFDdq7SEUm8n",
  "key24": "5H4vYFnEYkH481Lp33LByYyd9MhgPtAYZ1Y8mWzrHn9734uZwQycYcFMKrHXgw1Wh6bKX9XXHdgv5WycxmvM1kzU",
  "key25": "3ALE26QjGz6V9ER5ACcQWhPdvWRURx9JNRpfJtSwim4T9GHK977SAViEKdMnri5eyYWU3dFsY9qejFJjEAkt19uz",
  "key26": "3bCg975npdS5hsnmxdK6Y56LGHrLJHAfko4q7rNjmeQtQ1PFSXuA89reDeiwFevUNtxvTzgCg6YeMh1WJvwaqDhp",
  "key27": "3osrsu3LQjXEGzNvSRGsmx85Pa7vHG17hnvBUk9zQH82AnnK1etuCqbastVXJnKy3jiryijY31HiZyni6EYFuUGx",
  "key28": "3DKa4iZDYFHXvxjKYMgzEYtXDH1Psbn4foyJne6EhRfgXj2UEguUzJm785Jfr7Qt3bhyBivWsnM8fVUY2txLwnkb",
  "key29": "5AKusshJeuSQoMjGY4996eiEpbka815zXpdon7X6rqRmx9tcyJPEcQgRacr6biK6HQNTmUgPL6t3qeSPwCbUACcD",
  "key30": "5qqnpVVsF4V5xjsbLWBp3UrRrR2ND4ofRHxGMBCugZtS2V59SQGMPAao2dypk4hAdWLe5RqdepSXRmgfYiT9F4JM",
  "key31": "4ZfFa5a3qBj4tg9ikJuxWZCGTj4kDMMwoHE4qmfEV5iFUyci6f2LBk9Cg8jEoXsPAvDdTZyp2w4B4vyrbyTZ6wKS",
  "key32": "GPr2RbXSdXheg7abkqBF5FsQmRNhjmbDb4vFYWer9Pq9D83Kxf8FEDsryA9EWWGDALeEmDHPYiXhDVMdFJbah4J",
  "key33": "2TyYYMVQfQmbU939WsZyGRkZzTVefgsBuHv5rJXedhr5fWmp4Q8WF62UDK9pXyvbYZ4H7nXeEDgCqbiLPSmBLKRR",
  "key34": "3ncsyoHp99nzwDNwYXrYANxn6KhcMKF749jwh278k7dozsCAohjnfA7aRNi77njXLtW1UdnNc1aqARqXUKfxmB6v",
  "key35": "2VV7nHgc3FKsi3iopyVY6187TBAfheTxLgSYTh3cd2mxt17xrrmioxTSyPoPkSmAubu8PFHMbghEDSegAq1t5akL",
  "key36": "4LZAgPW4ob8QVsqw5BXz65drnc1SFpbV69xu1nKig4Djro8H4T4PjBDE3PCaPuobR5gd2CZQYZPQTKoTrbSyvm63",
  "key37": "5CWHq2SVAznZkegfyotHdRdeVPjzFDFfkpWHzxEzU2e1qqaxn2X6FWT2EZ3tDi9ZyUZy3vtQR4PUevpWBBWBo1kR",
  "key38": "2V5Ur1CLxtEyyYJvzzoCrN9rqpAX3SJQDHVMJrL37nmUbMjwdZUpxtwCAThmSp3EupDMdki763y5uwKsZ537NCo",
  "key39": "5SgKjcFdsS7zpoBe3KJUGxkefetWutbYU72azD6gznGRYUhuRjMVRV9p31PMsTTvEgczEFsAggAKgnxK8ajoFqYF",
  "key40": "2uBXQSf8S1hjTMSsEbTGyS16XdNtZCPmnBrVdTMHSn77FfhSPTKWoiZdXJcu96UG26SpmFNxnwcf4NTUYa1ihD3h",
  "key41": "5F1YvBHfDphqqqWH2nLmcLzF9FLfnebR4uzSTSYjz9NGLtCV64KwL8s3YF94TyL4mBokzxgK3nwVemj7mKCSzXkV",
  "key42": "3QaAHHLZFxgR8RfyfYp99rqpzJCJwzbfHTzaWuXTTgbCk6ai6D1QS8BvkmT85K9kE4JfELrcWWP6cmU5GTGcArhH",
  "key43": "4Zm5MsagUWyiZbcqzCiejkbLV6W2mDUBEGo28K8T6B34kgxu5QN2QsfSu1zsq86UvyaMiKJUgqUyMgrPnKjgQpqs",
  "key44": "38MMhkJ2dP2eXy7reUjgutoGjkdxwtpiytJD3BvoxecY8M3UeHKW2W5GuZGxg1zU2THX6F4MWA76SUVUdgwhJmzP",
  "key45": "51NLCSpyhfy25JxQMVuuWzU43vhGG2LcCtMmfqcRQj9taeQuwP18KKALPRJMjxp7mzNi6oARmqeLK6UVNXwURvFU",
  "key46": "3AmpWUWaQhHqwc7RNqrG2noPKkx3E4bJMFMGMwpHdUcCgWLg9nLmmfTfB1Z1Ac3pHeGFSTWMUFUnqieDG2n7etCB",
  "key47": "4updBdvYkn1tvGNYQ5cAASbBYVgMuD8uP5tY9QDEEbdp1TxW57pzRaTMhHEAD1b5DW2ZbsSojRwbYoxkehcrDbJK"
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
