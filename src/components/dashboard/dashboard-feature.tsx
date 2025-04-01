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
    "2ZeGF69EWWCMi1ainwA6wzdZbp79MjJCksKnVc8bMdVBNMZByJYrQ2facXTB4sj3TUPz2vkkQXjprKAPUrENKYYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tfjf2ZS2WJpwErorgdREk9Jz77ZC2Zn7zyZ7r911zLJYFiuxvt2JKN9DdrHCkJab8rSuyByjVRnTx6eygCbn5QF",
  "key1": "66d4rr2T2nXdjzNVVNiCapYrS3ejDkZ143C3YurDrtxvdfFYB4aZsfwrxSAPs2bfmhhewGL4HimDSGh6LRBAb6dc",
  "key2": "3e3S8deZgeNajkzAZu4yy4rw9hdNxc4btXAk6cZvWkNQczYou1N52EA9kFkzUoERAt2tJ6Uo4SUtXrEt1rmRGcJN",
  "key3": "5kdE5znQ4VMZUFKneDDBKzZLHVcd1uQQBbrdd3xYcRWKWheAjfhdJRqwQUg2NtrDFGutgWQbL6JELZdxy1aAnLE",
  "key4": "ZWQ7DHwLf4YY8LfiTFZYcJdtcQATTcGzmyEVKbvZrf3ajfGnMegVPkwrYJgbKysQtLwspM4iKu2YhwiM94dvzvu",
  "key5": "4KB914NYfvh3GznxsG211AhZcWqmURL5xzPb2hgHTdqfTvhp6wYCCTuQDNS376CTchwio1b6oBWsDeP4UW4acngc",
  "key6": "5prxYCWSEkDwzz5L4pmLh6jFZANb14ReLdqCRcfav55jFh9YVqz1DwKudw5dXgzShcKiUwMMyDCLXcx1aKVhpU6f",
  "key7": "3AjPxo8WNHujoiCNBpYdovB3vKX7MdguTSedMKdf8uvbd1eisv7wtgjbcySKZhVGaPUhpsrtj2gris69vWgVtgoi",
  "key8": "23xKFYtnDyD6AFDnrP6i8sVgNnQQU3uG6Z9NdUsPrgUGCL6DNwWfC9CzvQmyZ6Xuh6A7LpYsgZ9Nrs7HxRujtaU7",
  "key9": "3RwDbWweRBssn3Zz6ddSAHiCsvMCtkKTFRs9JVq6FWoS7dtPoYjge5ux4RhNW6CDqB2CdTzCFsD4ZAnL4sRi3tKD",
  "key10": "3kfUSNGCmd6DdAH7APZ41CcXCNk413acxY44dz2iXFxb8WwDxRhC6sm4JzHsToS1a63HfJgw1Mq22AQeJeLf8Cwx",
  "key11": "2nNZeuP3t4UnguJmBandUpMbHDoAU5idEmQzgWHtymtAzasAoiXQCTA4TdWdfNTRsB8mgD7eoAWR3BpPX4MPeVBY",
  "key12": "4VYgr8NqQqV5u5migkekkHWF13gQdrKhf1Hkefaqv618dhjXb6WYdLDFjhqGznp4RUvQQ5yBQbC4S3C5obz4n5He",
  "key13": "5nivWaFDFP5wSqSCLeCAzg82Tuaf9addY1ZP2xZAabikJoS2cwGcErxH3gVFWhf5tFFctEoRK3s3PmkLMCyhi8QT",
  "key14": "2MYgsUvDkiufv3FF1Vxq7KLn5iPkPit6v2qKhiAwKrKJSidXetv3neSYUivSTpQFQnbbZ447qhfMKifXpMU5oRjv",
  "key15": "64W91bFHp3L5GwTwCBF889ReCupcMEA2ryk2P3NCKU7MpRzbDFmdmuNgpjr4K2YKV2W6fKfct5LWqUgvoTCt14hm",
  "key16": "huVp8a7dBjB1qBHJ2JbSuk2Adr3xLCWGogX4mvJPuH84De5h7K4NjrCR75j2gogyJVUNGcejYgrKfqpj1WSDWfW",
  "key17": "5PjGPG7bm57VZJ5dJEEkR32n12TNQRXZeD8cy1ijTjBcU6ehuWjQ8gfjj7967QLQz4EVdGfXiGz6uYjM1ifdi76y",
  "key18": "4jW6D3oRevwZmAfA3Ld2qXj7kSkD7LkXfaoQgVZRUMPNhXcHaNdweAYpFbLGPmg23vA7YPBhAs5fjgf9CnqK3zvp",
  "key19": "MKf1USZcx3iaxvdkHGRsVhRvCszwyhGrvGozYQ4UDko9qThPuWKyRWrUkAcpuPnQCyF7VXbqFKxBQsboFf7hNTU",
  "key20": "38eNKc3BkQ2kXGRpDgJAHqqu4JsGKXNw8CnKbFGLHH5dMt4c8CTyvb8HPwNqFz6i42kJfwtSx8JcVz3BT8pRmGjr",
  "key21": "4iQEwFdo2rayyUbFRc5xESNJubakVb73akxpo5j3PLeVCmXBCuRizgVJZpY8enHDGGEi2BZowAXSB5TqXS6X9Ntb",
  "key22": "4XVksnk894WVYyLXyt95KsrEWULmX2ZUHCAMaHM3JRQJhWoYg6ZyXPjx3jihHxVrXHzEcBEkwEjrEqKCuV12FZoo",
  "key23": "65v6SxRtkJdGNxLMNS8dWo4DkWnEmH3AJQxAPGXvtwFj3qvA2bRtdRd1PfYysDAcMV3F36pZmq5cStRPEsiLtLwp",
  "key24": "3bAETKDuYwzdGPHsugjyoaHGjEJUNJDtJErqXhbsawg9WNXht3ZDUHTVY34y3PoAb6vQ79aLPrg44EkgLzAKqwTN",
  "key25": "4DGksLq4kaDskLjhBCrkkAWDsbDE8dn4aGmu6rxNGaCMkmfhcrZm8UXiCYqyGNkVTEs1KJmnsgCrfq8u2T1HsfcQ",
  "key26": "5MYdZicjLBswGskTu3cmXEfD92oQ99wBw1gKjyjVd9Yhmcx2NRL5EWA5Kwov4aVUtcyYUXMHbrdfNfGPCVD26ihV",
  "key27": "kn8kMinwqbUXfKu82xaj9xb5gDYhArX9d5mkp3KCGz4RWcnYSUndCnjgUfB4Aufnmsc2v7kWVzrK3Tfz2JX5G6T",
  "key28": "W4vWcjsAYWYBP2Kv6gcR6PvhroMCk4PodCvBACJ12A9uZDCd12QtXkREsbyhTbPYjoFw2Cbj6tNoXDeAL73r5Cq",
  "key29": "26w6p2hgrfjMtydxTWtENnX3ej719nWQygfFnZKH48pFxDyVgmhZySBvxUi7vV3VQEKGfHpatkgkRZPkV1PCJpvL",
  "key30": "5rnaZYmYM63AcvprScGWte8t4TPcY7jy2h8F9QE4muPRaRuySeJmGY6iDxbDQPJqKLxLhdmCrfpcADGfdNm9SeCD",
  "key31": "5USAoayxn1Bk8GoPptgbd7X6a3AuRSCnBuaFj4rnmdZwp9kMGyNvxV7itv7Jr47vP85vkAZYqu3qMQ68xBwxU9kL",
  "key32": "4nLa4Fjur48Vm29SoaiBjwGxPXGgcsfZjvEovMKqT5As1yRm2LhJ1hGkAZR9HrWCkh4Yhvwf8iUqoZXF96me1D5a",
  "key33": "hUcf3oxmmd72P1tC8tBhseG4mFsCAwt8yEMGXEj6yBgHqVatVRmNBGrTeLLTLTuGSm6jzcUgTRfiLLgxwTT1ptK",
  "key34": "2j7NEMyRZBSgSsh2RykQRQrurMkoDLmKkiw1YsCzh14NsDtJo4K5QoH6YThjCLLnMoAmAvXQvWSQb33wL6GBnBeL",
  "key35": "4Xr4WZg1Kduh4TJNa1Hx9LFs1njURB11D9V52Y5DmaXJcnNXr74nP58Z1N9tUeeAzw8sGLJdRQttUVCuA1qJPmKs",
  "key36": "4Bkp8F3LEBJzyyoE7suPQ7edAxhyLe1XjghpHHFk9xWofenJkVkT1MXxhpWHUxEumXsy3Hcw9ACjLrGRLSHPxX7R",
  "key37": "3VJiVNZ7EU2KeLyKauGe5EU3F9y6sabrv6M3Dm9cbXpavBPZZtjrqZ8Pbce8AwMtXPesqDuWc188ECKbVCAubtnD",
  "key38": "fofww7zQxYAobqeXU5Y9dg7S2kAuGhyFJQYS3oy229V3rhmj1RGPjPLK54o2yuK5x6PnnsiENHzLNqokLyhALrb",
  "key39": "2mMwQuRZxqeLYoCoPXf47aVH6A9zo2vHX8nnJ3fHGqZpaNvj5Qj4RWGtszQzgZ6Xc3NwuHvuWBMi9S4Rka5gshpP",
  "key40": "61cmPYjAZ57jkrFd5VCZ9UuCVjMSN9VHZfaTiarpZ95qvnP1zAaJyrmKBxw4mZSHc9FWNLnmDjcFXx6ihzttL9WM",
  "key41": "5vDjJt8xXYMaH57ofoKhGer3sQvL3qW8qUqB45QU14LTJ9ZnhM5VocHuryu8jCgTmooqyVomVRCdMG91H2bLTuDF",
  "key42": "2Ccs6dVFas9S8M5wweDceWkoXLnqtiEKHf8dNK3An82wrJuZ6KC8GysrqeHQrsvnsNZ5WX2BKBG49v89jMPG4rEU",
  "key43": "4sMXLvP1x4oreBHidMhVxPibavmb8gcFCXFRYrfmpB7ikNkwUevDH93vzHC1LUfYaKSmY3oAqyCwRUUFDVbWUcxq",
  "key44": "b8FUrPbg9NySJzusNjFJPwk85mp8V5E2ybcgwzu8NAzGnjmKyoNKHkX1vZLj3S8Rf1G8o9q72kAceVrDVbZeC3x",
  "key45": "63BuGMunqug2QEfH6rThcbgyoS94wade1jmyLGiqckke69mYi74KLGqV6dnRRP91wFV1cvVcH9A7uXX2aurXBMPX",
  "key46": "2BwCrebdZey57SQTKADYCxHTU2ss2vraj2WTeSnQ9VNqajN5honrvVZ9LyMkaJ1eSyMTkbm8Cuv7Wm55xuYCbjXG"
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
