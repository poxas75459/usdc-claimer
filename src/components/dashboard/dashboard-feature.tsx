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
    "3rRgscvx2E5Ex6opmsMAk6BczaK153bswrMo9WZsrydd3PmSpEVvKNtCXNwwRTXBoj2R3jsP7W36SjVf4BmswttZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kNL5nPiANDDx6QZRnEcnPuJEUCB3TVFnXTR7VrbPRukcCE6wwGWJTfDkY9bCzVwxgKuG4eVZHV8FkJ7RL4coKWX",
  "key1": "hom1sdTpTSvUzUhZRT97HTMziMiqUR3Ba2krunQefNK3FAUxmSwLe5oBh2Qndcd5NdPgqcRUkpdq3otbuZYL7pt",
  "key2": "8qbv2shnSUmBTtZmw3k7TQGMpnsFKKbjTGRGmKzMBcga5sZUeBDSyrc3QvpScGowpaZErMAuAnmpq8oYM7Xgc3U",
  "key3": "24j2H1EyfWBKZkEpyHviVed5BY93LqrL8G88LdZp973PmP5JdKTcG4B9KR4ni13edKrY4dkhofkB9WMibmbbNTCJ",
  "key4": "ti8s3BxLumm6qoaWCM2LKa9kZbqpmR2hmvSGGpj4WsczkVNFpJ9o4HRyctk16Jd2BZ3VrJ3nFahVhorvuC8D2AF",
  "key5": "2UhgCJVJYdauVzkHZHgQhgYesfUCjWt1WfP4W6gkzfxCa7fbLZUzeQgdKTfNHVLFtHahWAySSa1Zev4fmagkLRGW",
  "key6": "6mMEEusztwraDqqCjehjej1em4HLD6ojQxEJfGd1mMty5ak2C5XUzMh6xHYup3VqtFEx3SqM3Y7ikyJHT1xXHNK",
  "key7": "4Q567XjsJKZUh3gGRK63PoTgY4ZhjKypQXUR3LjUpkDgX93jQnY1nbpKoZitSBPFwXuAYiRCU35V5V5S6CyB68eM",
  "key8": "62c41YraxujzEEWtqmCjAs3coHHv4Ws97MzakoM3wmHxAuNbmAj6kYVQwsdwVAzM4Jgd4gh23MZzMR9qJtJ2X9po",
  "key9": "3zuku52tzy8N2ZoSWLaTms45dhwGjV7ohdBPuy8SBenAdEWudxuofQSeG5kW8UQVRgsBztRuv3R2LXdtms4oa598",
  "key10": "aDAFAzG8tKrhgMPfeauAhHLWzqfMWkMBQGuPrEF9ieevsE7NhSKiksLAgLp63h8p2JN1QtgSfLSHUdhLycbSwMv",
  "key11": "5froSYh7UWPfYkFAyfD1h5td2akaE1kuU6LJRPdf23KvsM4BuPFEAsAsDcE4jGTizVxwXGsPsrp3bBw8acotSLVP",
  "key12": "32ziWZ7Vq6YuUvYnnxFmEoTsGsKiU7zPjDCZKZw2QG6z4zWku2kr5vEkMYJxizgF7irfDndbyTeaPU5hQ1mZ4vH8",
  "key13": "2xmxFvdw869VTYaxtPqNx9cL9J45prR1quaiR19UyuawPfQYL8peBjpTBVmsj7YjX9dJL6oh85qGnKfgtMfoUk5N",
  "key14": "4veow2jGjZCYwcTBYcMtFtVGAYJzRPDnhyZsewb7pxGkfRm8XabAwvdbU1ZFyqC7bG3TCYhDLad9UVStbuSLjSxZ",
  "key15": "2RHZNxicSH8n8TNuyHkrbCndbK6zPJwo5YZvyiBLVkwWnUkqLWJqueEATRNFMC5RoTuR3mDMbmEo4FWNwHdjpPca",
  "key16": "3uSZ34ENtPkQUS7HHHVm3hPvQMZxSpktuTPQ4Pufv8UJKDuXpmLoKW16mucU1xHx6oXC1doXrFxaDo6kVRe5VTUv",
  "key17": "EqwJ8i9yMp98D6VEkktU6RQkGWWPvefV3MQzqKELm5j5YsxJRF4991ZPi2LYh2aMyWCEHVKR3nbSGLDYuJsd8ot",
  "key18": "2F9XqPiDgDz35cewDWdSXVaHGqGraNtcxfYL9ywetcvtVe8NiBw2DkSz3QLeaEDMEDW9DMgBM1FBes6bvLyT9T2s",
  "key19": "sUXwdNAvPyYLGTHBJLyfb1yGvoi6NFYrH6JPeu75mXQKU4czreDNXGSuih28iE3wPTyxGwKdy9aVxxZUpSLA7TC",
  "key20": "5o4fADFYjB3dvVToEASeK7YdqArUdP2NAyAiehsNJsWxTHh7Nx44Z7G7bFxj4hg6qUM9rvYMCvoBpsaGkFq8xZiC",
  "key21": "5cZvMUgicprxyA8wQhiJgPizBNKDq9TKhEf7LqTMqjjefsf6V64N4fbiujDzm15ssVsHvM5mReJKebJmqukdVswj",
  "key22": "4dGzjyFubU1h1fZpqMyggqVdFhj4ub1xn9uN8ABffzZZzSSdQUAQjXRo69GuvjJv9DNucoeKPwbmsNeMjVgrzcPP",
  "key23": "3rdiJErn7F59jvM9QKPMsUXymUwcuDR5eMW51d8Mytkxtbc1K9hXcfrH2d5Do7yD4yDGG8oepmWz59hpWg1xG9ar",
  "key24": "5HCY65f4Dsu1vJ5UJjQWRw4PKewfGaABErXt19ZMVeXJ7Aa2tZ53xHhN3qLD7XqJZ3Bd4eXu9SLSQL8xTieXnmct",
  "key25": "3aKahUr7RVvkwaeSSHTsd4ZrACFX7XwaHXjUCLpd7CvaHA8iffDajj4GEvkRtm4oVftcDY9gJghszeABGe86ToW3",
  "key26": "3ea3MXPUbcSUBzAfxhAsEM49Dxc2AwC1vsjCqSYG2jVTMNwnPkKo41dPUWmruo76WwLocyr8oRPWwYGTdXDzMuUM",
  "key27": "4YQoEaw34VgjWESQbPPgkYDJU6U9uw1bY2Xs7TFpcwukyDoHQx7nNWhYUFBJmhzaP19jedZfVuTsBh4mjKngA64t",
  "key28": "5EDR8BeeGWVLxGjPekZGjimgHqnHquysMmq3bfs9FFyhwRqbyx8shdaF4FLATpqCD4zVocgERBon8sBRobtPpzKc",
  "key29": "62ewHpu3soAFsWY6qkPrZEw5PrcxWjhr4yaq2YMCza3xwoH7KGkjSTmiqevNvvjcisSWdYVZ1TQTCt1nzVLnZsef",
  "key30": "4cq829RFXpVrHxDgWNk27xue2jdh3q1PUstT4oUug1cqqjB3FPh2hCeXp7tRSQ1BpQE92YXTpKJjZwgLe5ZvVzh8",
  "key31": "2LAbbY3Kk89yFYmXyXKsJeuekBLvfqS2yEWZ3nJBKVfU4iB7HQ1XYd9C11XUHLfdX6gFcP3Fyi181xKnje3XDSwo",
  "key32": "5boVhSnGusKCXkz8GiTgTwaDoHzsZqMBpBhbwGSdLeupNMfR7VbGoX35mpJaZbDALqvEAR5Qq9hgAiZmL9PnxutP",
  "key33": "4bYMePdLK5MLdeyWT7FCkNB2Nx2F8WwZZibmbhFtWN5XB4aWFfCvTMFWfo26GNjxCe4Dwr48WNN76Qjd8BAjGabw",
  "key34": "kR3pj4P8k68yAip3SHdVse1LdB6WWze9DgtAYmGm1tjFz3Q43fYuCwn1bxkeBaojPaY9P3zkeWfxbeAGHMWHhox",
  "key35": "5eJxMQETTm7dzW1NsoeyVHb3aPvPnLLmnzvsGukErdNEHSpbn28fkayTYyyJvQMCpPE2cNWYwyCgFBzzY1oACLcP",
  "key36": "5q85Xe5e1LMuzZJ4LecHu8YWYiC7E6wtj2K488zbm5J1eK8U7N4xRG33XTdYK7gxRJtbdPaWdKHqEEUNee2tkvfS",
  "key37": "2cn6ispPjD3NJviiL2ecvv5qQjf9ym4hFJBRkHPbBELDBNmMDHneXtZyMV9pUqJnHqUjpurExQ5pDoBVv26TnVF",
  "key38": "36vrkM4EJPfDfsQTw6doM55G7KhUrZ2pj3ttKG3pFdDiE5PcWv7uyV6958yyr3Y1FKgs6wqGcu9JJUHSGdu6xtXj",
  "key39": "3mxXppjyHMMsgmn7UdDazyDgvBqqoLh9nhpxsK1DyCYbsFJsAZQLSVnDzom6m9stcTtYVU6kYKpAeqX8zbBWJsrW",
  "key40": "cAEBc7gr1hpCJvag2JGrsACgnnkPcBTfrvuwNoMf6Z8mirpE11ezwgJuRft3NvqB43D369FSiwUqbBC7QKDLyhp",
  "key41": "4LKRAv1NukAoBu89uzSDj6HUazVkFEvdYkAiciD5Fw7vLf2sLBEproL2zuAbMJun8CfZUzKonwsofvEDe28oqQZ1",
  "key42": "4qcSi61BaV6qky6YNG7rZwDDNrrdRr8MqKSzbZbGppMynPCggYSBkVAr9DoUWSz78p3YEZLn2eUkSKYFtcTZGYNW",
  "key43": "3y4vL64HRBSKH75ihgY4BBE7HvLxUiuNpAcashJWUhDcHMjnfYQHCGLFipA4cT8kXsJAbTnDtLYxr2iPKGS4rknD",
  "key44": "4veL8bNEYRg6a9CFvQcJcwzgmko18bQVmLYrN7jY2JS6EGGEm4RjTxTUz5rm6ShGtWU1KrZXE6AH3Ki3MR1zE66p",
  "key45": "51BtKvWBNzinPd3Fjpgkh9ehsYLFqgKiSdwmCvpLVWAXKBcWbVDZZ8YUYCmMuhuSSrWUnSVaVTkRuiqETozG465o",
  "key46": "32EPruwxfMh22y6ARjMKBbzfZiL5p8EEL2DxbDJFe9rr7oxSbXrX5zz3SwkSxmdif2fAvCSq5rf2W486JH2CJoRr",
  "key47": "5DP2XX6PxUb73dxLY5iXb2wXUukT8T4vymgbiTfd77XwPezWFhBjvVbxTRA2L4tJwtD2s8fyEBvkrjR3XRYV2Y41"
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
