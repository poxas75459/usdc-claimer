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
    "3nytu1vQsKveVnMivrUrirSzYZSDZVtx8uzMNs5hVahcdjmshgvHjBeZZhGs15K9DB9wxWddcLzy2WRKuMRvpnzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BRRGHi9BNypuikWCDPbq5Mkkzda51EDczVtZtUPagUxgA5w8ddDzAhqV8JzofX1De3viA9MkcpYk2E5GAiwugSt",
  "key1": "5nY3c2ggyVegCj2cUjvrWATwipm3sRxHV34QuvH2HV8uCo5k5yFfutD8GhtN9CyfvoBVwPUjY3B9mqkKXgR1mXRe",
  "key2": "5sD4wsjidBqZe1xtUPcpZRMsr6zLzum8bCK3tpMyB6acxPy2pvif9aTWQM5rd1BmJKZvB2ARmMVcjtmUhw6CkQcm",
  "key3": "5xqTq9L42SpR2WxRYE3zSvtbtMWEHSQ5sMFeGR5egq9wbuMs4Q2N1H47TT3fqh2YdfZcc9WPiWhBUJjjaviXdnfv",
  "key4": "De16a3UnPHMQmLHDnTGxsKd21z9fPV64U6ccEjMQqwNkMfQ6ZeyTdktq7aUCzDvWdqE465ePv22G3n5oDJJvNiD",
  "key5": "h6V4uH4VV2NEntgi5XxAoSz7d62FWcKVuMeMf6QkeWijW1tPPyqBWVsHBARrDVV4WUKhtpkVHv673dXaHMaaBAj",
  "key6": "H3Z4sWQV1YgoTDztvRA2ZaaEtKJWqhwWyHEK4LF7A3TDJXzqJDQfeCRD1H1R5TgjTT1ijCkmeQPdCzzzhfsMwe8",
  "key7": "2ETEyr6fFP8aZR7ViFAVJv3A2EcXVshVnc1ps45YdXcG6nYQ2kkJRfDmTikkDKCyLhH9rQ6bQvPguqMeAXifiiQ7",
  "key8": "Vv8CKpd2UZ72B4j4A2LLrcEg3Cac6e3UyBcgptwASn96emPoim2oLuMtfpq7QcMF6WJadvgMEGyppwtibpZN1wd",
  "key9": "uhFBB2ZLLRrQ893V4C6M7WfBSsAA9Akacw4V5CyhvV7CEHx3xtzK67V48CAq3BhBng6nDTNmzRY9qzdEcQtmwsf",
  "key10": "2mpeMLGpxcyoV6r9PPV7uEKXsejwm2euzgMPx8tDGQJ8dQ57BZj23zHhTs22XCt6wmv6ky8PuprmLXgfVvmwiRdQ",
  "key11": "8RTBjEYe1J9S4Q3qZSFNJrwtuw45Gy6zPG7LGcsX2An69VGkF8PofTipNR8JNq7cgktdLoBX89QimWs9Lj6pLb6",
  "key12": "47HwtadudstpvfrsPPy9YWXra347dRpYaA9gJU9oJkMCmv6aiykJhpAbjMRdWVwjhXdcCygw52Ca9ZCjeKaiVsG6",
  "key13": "DtHfVUe2iQ3kyNWfH5S7w2g5rW8zQwewxXELp2uZwNxA8yQdg8Bvd7k5Ge2saEvQ5Uhx9MUvhdamMaqm3QcRd4S",
  "key14": "4t3jztrKuXnVWVGW61EWdowgf7UqWTt6Ge3mgB8jTagC9L17xX7mGkdGFRNmBYRpsqpKpq5qfBMdPKNRGfUfa1AX",
  "key15": "3d8VPVeqZeRPyJkmZkK9z4rsf9kWPJpzeNqgooi846gSp78ochY8E344gbQ6V4GsJKJSLQiXixaVBQLqqFcAh1w8",
  "key16": "3uDqSHzjddk6LTjHH3DEcj17sAhCckYr55hgM8ziYc7K2aWb2UDE6whfEsGJcKj3WKCXaD1wPx512vuFrmTVBU8x",
  "key17": "5xMWJa6L8LiFaaZYfvvFCaq4SFsEe4Jzxxijghynzni9ttCmr6scYtsyciwi4uqK2sd3aVHSexK2153FF977EkTB",
  "key18": "4DqXUAMMQ4muGJW6EwmNUFnwej4zkNJRE6YK2rzBAW8CswFsfHtVF2t9ZpS8sFSz7jS81bN73fm5GNhx7kDtEHzn",
  "key19": "4qxxt7tZvJd9quD9EvBMzdrEeLZuYVzjJkaQbvJAViSozmp7BHJkh1DCCr1JkAWPPwds9BLHbT442Z53ehJ2VzM7",
  "key20": "2ogyZyVMBmjfb2fDvotf7KyDBsfEbp7XdMpzh4KmnvKFKdHmfXNzp4GFU38iRYNCgZEeZEvZcsX9swauNZMvNuLk",
  "key21": "5xof6GUE39QV7Sn8khrfQcfvmu8tSR1g2NdhUvZsxbNpuuvv6bz4Ppi5oBCGLVB5vcNsE5m8TY3Zg1L7nQvLwBPm",
  "key22": "2piC3rffLN989wyBzLpzCurDTDmeAGxZZB3TM1e51rNe8P9iFeQc3uERTMDmXVLXd291hoBmMMLnYrE1QJ5UHF6i",
  "key23": "3dioMB6iBMuk5kPUkUAkUpUoEbRrZHD7k3NG4E5GohtVnou25HpWk2nVofjGFLZ6rQq89v1HTns8sg3ywC3xXQZ6",
  "key24": "462eEMeXugPqobTQWytbnmBzKxnpt7boGuJ5uwdxcULZrEudcMY4tBTCA6bxrjUkLgpjFasw711Pe1pcgnw1BaqA",
  "key25": "3CSGchYa4QQdHadPMnHfjBF3zxjj7nzYhxEsfUoYJ6ygRFnJDVYwqq9ZVoZdvUaRzvVCPdDbpzFoVgBFZkZsZhkH",
  "key26": "7GWNBTaY6BWK2Zy54oTHCKjqZxZjFfQYWdZSn6vtteLRZwMGGRKwhd8oCPe8mpAimcZTZDJaqoNzVkpQJKr3d39",
  "key27": "38X7CfE4MZkbuuswVZkvzak2X3ZmN2nUVkKFnGurSz7zLcaaDcQhW3ynoqZVPYuqa28KmWm8hdd5Cu8L77b1nBMx",
  "key28": "3AzJj8punEqYLjQfvFkANCasJLTozTNBVj66nLAAoqoxXFvWwmMyZd37ZsPhCVfCq56ykPsGfRQ2vmrY3wn1vJCA",
  "key29": "54uawNzwELsS4jsRKNUUtM77mRM7zrYsrXMVkqLTBvcJ2yxwX1yTkMzURLbxChdLiue1hD3LPwtEZ9BnFTGuD3Cs",
  "key30": "3iCoaUZTkU6THxvntzfyXr6PfNo1GLQMkXopeio26Yo6MPTa3v1cohyjGZHjjwrR9AH1mL4rwDz7YjRcBeRJtrcm",
  "key31": "DhK2sNE6sYC9kcseauCVFSLR2zT5A16T5H4wDdkGQqVGhVcpFFbJGzTNHgu8Eia7XxndxCoxD6ZGQLzfHDyoWJS",
  "key32": "561H5oC9wuAyuwtUb3kdq526gdDB94RMd8Q7VohAVtMzwoeiRusF29WMqQLpfJaL9cSNP6M6NnCynh57M2trpQty",
  "key33": "3kuYTVVwCmKDdX5gAn3UwmiebRREYwUwMraMWuTVf9jBSMrnrbRSKfRMPpefv3NexStCuYjjwFkUQhFsgtJ3M6HQ",
  "key34": "XGMFp4nw1iD1uCXwhnsL5k3FHc2shbSXFsUHEifSSVU8qETuVQK8UDRbcyTTLZdZ9YtAKHVTrtrp5q5dHPEnyk3",
  "key35": "4spuBX4dyhgiQFJbqgQB9fuQCLbzxCU4LFotj9vBfhGnpAv6A4sZr2eZL45pg91pSdzEYuZGBYZaTds72kwixyzd",
  "key36": "2yNypCstxctqxrxiT3HN8x3AdsLEvf9UNipZBHkCWmEH3NCdhMnbrsKz7XWmK3UgWwK53c2QBYTmgXApe5jDNkX3",
  "key37": "2q6t9xwzRR8kcxMHCa1PqhSjiqdok3WAb1cGGUpgsne6tqBpUWbG2PZzXdgFaN2bDdvBAAvcmc1fU8o92bv7BhKP",
  "key38": "93jjQ4A46LRFTzDp2S5aEiGysVberetKVCiQ7TLMvnBMgtzeMx1t1t2vuRG7BXujFb8GabcDfm7dZvHwfwMiYvh"
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
