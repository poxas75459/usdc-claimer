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
    "2HSoKDDmuHV61ETYVzKf4S3ypuUYr52swHuWhevt3jMkR5584TDv1UZT5gAjYUCscso5FHD7tcAyZCzZzBPdawns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NyMMENxBmY5uctnvscqqJSqkBjQWDyxMeWorvCqysDUuYf1ajpB67hBosyNbEsvnevoxZ5N4giNBjDRpbh6FKnc",
  "key1": "4fHWvikxJaLPHAfadKUuVArH5o2URXNXT5ffHqTwoEdfwVmaSFoDfU4VCp2Bsjk27s4oKnM2xwRBP1V3wW9aM61A",
  "key2": "2P1comcpggRsT2Pn9x6cQrrBU3EVPmBMRSj9zJo5vbaw7atq8bgZmXibQvaNGYHnuZsDHn6SNtB5Sbk39JiVZox8",
  "key3": "4kqufYHjE8g7LQ9a6pQdBnkseWPrJN1HgiLY16qnm7KJjcNcjK14bWkQfQwwB2khCVNTE34JeDra2Ust5TecMTWm",
  "key4": "3nJSZyDQjf4RGd1c3VtVJcVk1rWxvHKPmoMSdzWKsvvzRC9igk63m5BHP383LJ2vUFQuTioydMsuTbBT8Njtt1hg",
  "key5": "2e8aHnF8gFznRyhGDefanqucrGTHPJupF2FAYaXxWdXySbLu39HXqUdM57JM7M9UvhMLz54UMLkd2qH5PkF2jCba",
  "key6": "3GTVuEFsY9EGVhRBSsQWWbGRvEhj6KJAdpVRTV33Tdpaoqxg36cgreR4ksfAgHp9zsqeS16tdhv9eLunqcXz7pjN",
  "key7": "2EMVo1LYaFa3kYBzkjMCXBN5W9Tge5G86TCgiw8psMcLhHYCX6LcrzxeQ5oew151T9S1AMPKEjrDpGyoaWN9cy5n",
  "key8": "MGNGL61xsSqN9br5pNxuRwqKRzrzXk84pmCMkNRo3XGJcvY48UJiVaAPDWFo8gngokUFFUuFE24Sa8HMwaX46sp",
  "key9": "3sd9SkYVCkutitSA3zSyR8MJjm6LZzjAYX7Ee8rqP3gGyDiEYhTiF4PTit7EyQnpeVn781rCjBskhT3T3mahMRXv",
  "key10": "585ow4DxQEh4jwWattmcM6jh743CCJtjWKAwZNUkwz1vm2UWGcYweaqSzEAbJXbZanaa6buDE8PeWhyepJ31KQeM",
  "key11": "3DBjwKjkY1w3jKXySeewwp2EsFA1GAkZquGuEuMaLajoYVmG9e1iMFKw3cWozE62YSNGN8La35R5JYDiEsFLNwui",
  "key12": "4BZtaSfKZdCQY6vnFEBBJyvSJZfKJzQ8tHpXQWS2nL3RhfmCL979E3ETEpGMrVDjwBbgajfBXuizCL686AnDUEzj",
  "key13": "j5mA8GFzXNHX4RbAnkou9MxQeAuukV84E8KXCoESqX5qJowaZfXyahnH6cV6fxu14GqRhuunmL2NxTzR7ha6hbZ",
  "key14": "2shXn752EXrV8guXi96dq9zYndkMoccXR2XFDTQB67Z2NqJA8FSkv5tGcceJZ96rTNTVpVRru83kt9tvUrx9yXEQ",
  "key15": "4p2vWQnLwvVz7uzAvoLuhPTPpBani5T8CHePEWHerQ92aekXNtR47tutLoA69EbUoAwCkXuxDy6vjbTpNQySSeuE",
  "key16": "2BefBu8DCn2AwF9LZ3F3DfHZ2M6hKjPD5NqJr9WbjQDjyYzi2DYmPs15kgHwrBtbdDCHB1v7NVzfKb5ygwMcUU6t",
  "key17": "3Bz5AdFWdsdMeXXAG5e6yCnzof6QQM9H3kYFYtdjKJs9xgDPLUKz7mUCZ5oNd5CMXsvG6tZ52nr711AiwJjcjhNk",
  "key18": "2CVaheM5dtHmA5zrJh96KjGfXX8VNhbuW6T4J3Boeo71ogVSF3TBijL6owg6bFwJNjxQNdvu5c7eHYf3R6ijqxQ6",
  "key19": "Jw6MPw2sF1PK59BRhk8ekomPv3bp7VQChzRWjCDNg5ftpoR1YqUHidqeuEwbEsKk2f9V1zbSU8w2WUJmyTjBjrT",
  "key20": "2f8MRNippjcu4gYBPJUgpzZHuwHzWsVWswT36aYR6DNQd2P26A7JTXHZm51Z1RR24Wqw8kpdm6SqNLP43Gd7Ejcr",
  "key21": "2SJARXmiE2cSNRoaMy2gUqF7JwzDeQoME32ZPxJjA9GHyJ9HoG2mJ6RWsXSrzafzakfXcCZhZFNMQ4YCXSv6hb5A",
  "key22": "2sK1bDmorw8re9CcWi3NR4HywTr2Nh8oskT2cBCikgsSw6AED31KsqbiJWkRiPMG9GVn638h249YRHU2qCncqVcC",
  "key23": "65cfGBS3HoXYngPHNvCBD1GPFBr5j2if9HXHEBCzQD57Jzg1zaFpxubqPooyFYdQTdtRAQmjqaSavLmLP2nArhhJ",
  "key24": "24RWH2JVfRXhRd9CZUN1ZmQ1PwqX6L9M4TaoyGaTJsCJv8JyNXfnzxK3WU8guKvXFkdthYt1XCaP9YGeZLDUmw1C",
  "key25": "T51BCSX7edGLpqSBLAoWMQV4c9hXUf8XHmJyoJaa3C6wxoxsZjHmtpGkkycoUMFqCMyXkfNYvDuX7YHyKCJBcpL",
  "key26": "33SaknYAQ47NVQC44JbdviBMmp8HkKxQnRu2E5RoH6E2A3ZGinnchWhNdq9oi4Y24DUHU2ca8qKGZdvCHfTNeQeg",
  "key27": "3DaPJ6YLnPuRVfhabUtAHTKbRT3JYk2PkmasxR48cje3RGhkfSVrNqXEJPZes3GysgstBD54BBVkEt1yd2Yzgkzv",
  "key28": "3kcAcoS2fJtHGNRCDevp3vUEVX9qAWapySorFbPxgPVGWgzBGso7p3YYr4SeWZjdjVfCpQrucMYX2X2A5huZE9ix",
  "key29": "56dfd4qCXbejXnFF2iSFY6vPgFz9Hcs7N7dh7GoLVFbna4KwETTptTW6ozxbJzmL64y9Jb4xabyXYH59wLX6z6mY",
  "key30": "5W2uVTJqBa6EgBQ8542CoHDfxarPTz46FffUJQzuXedL53Gu3dKVi3FQs86iZUSBnxxicinKQYCbVjWwX5rRxQqD",
  "key31": "5zJWeK9FZHocK7aWuMJijrbnmL2Snz7hEi6CqztMrfQwdUKjj6vAcibJKEirf3dcv1iQ9qCRsTKcmHBn79PXFkjc",
  "key32": "5xDjNZk2UdhUhBe7yVsQEuhWiQGneQDuGQKuXweahPRjY94buEPo6FfiPaFCMvuKRZU3T66B4fxf9dzbgr3VNsfc",
  "key33": "129FknwRv1vzgXBfyQkBfDWDvxdo4u5oVCjsZUNZsF1HVvynPEDssui2eazhFUCRztUSxsFXBoxLWP8gkd1Z4Jco",
  "key34": "2pMBAL6CEomoVjiHHQzkD2YT3wWvhwqTkt9m5x3X25appagPZqY73fgM9uG1phpcRD2vhPwY7JebQX7AJe87815o"
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
