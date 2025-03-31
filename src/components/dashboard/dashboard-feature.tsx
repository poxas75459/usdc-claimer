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
    "67LbVMsHZDFkvZTm7ikBEMv8WEHNKUzfmNBVr7smEeCC9hwe7MSGqYEp4dq8JPQ3frc8czS4aZyJPEKmvMdh5bXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XBVuMZsKMR37UYseQDchHNR8G5ndykyMgQeHx4zTSK6kNM5sAshu55o5ZF1eXrHhGHhECAKsyvS3RErVbg5ka7K",
  "key1": "5iEUZRQgfMXR9zFLV4eJK7FwnL1hdp7NXTVoE3aHDTzjjQVtGdELVaWv9kLmuoCFCQRTqPFCQCNv3vkb7sKRZdi6",
  "key2": "7XQhCBctc8bj5cPJCXbEdq5J89bmrkhzAgCriTMug4Yz8GC14w2NAWdJc1G46Z3nV9K8o7Wknckjw3aByP7fFpx",
  "key3": "3B7RvSJRTEgKRsmgvj4shVkiN5bS1JenKAuKihHCkqWSFZJahdiEBtGuwWZ2aL23xLxrtKxVfsvT8SGbCHjQtkA2",
  "key4": "QUGV1AMLXiFcQu8vRyh1zNmc82Zd6DbHbXcBc48qMpRz1XKrzgQxGH6quPKZeBHbNCzFzJovsBkLtdRjhFdqjM2",
  "key5": "2945xnUgm4BP4LTtmZcFkQ8duNRRGfDigLHu4Sp66FKRVUfGj8Fium3ZoEiRf58nvpz2Cq2Kdk8hv54c6vrWXN8E",
  "key6": "5jptXLbE7Sj8o771EG2ZdCdoBG7hxaitauAJrpEQBLMPiwq9YNYqqjZibucENrm3VztzxXUBhDMUAdUVrwRQ5H32",
  "key7": "2NiG5xUvHrUpw5heDJCvmXk14TpJ8J3uYueaftcEr5qT6xLXhntCwNWKVA5WuVpPLEt1WF7tXetsHikE3QUV6vQM",
  "key8": "3AhMEEokJVAq8fFso8NTAUo3LimyExYrWrYSczjUMLhkmiVqMbPYPRD5TusUNHuCKXhz4pNq1tUZLUG5o5681WfJ",
  "key9": "4wSMK3xm6WdJUhu64uQ3E8JiiHmWN1mPWEis275WvJUjJqWvFLEisEFCnhPdbHZ3xNAgwynAWDXbAqNqDG5MFpg",
  "key10": "4Eczxk2yFaastDTCTa9RKqQ9KLRyyDggyTEdLTYHgcTc3m225QkhthHT85FvasKtZxUGiobSQ1BBgHTgPxCt6rmT",
  "key11": "2kXSeqjKJZRZpPqN3oz8hDsxUmmLx2p1Q5pageKgxqaTNMsgohhEvLXn29JF6XaBCCCA371Lpiu6jcfdTvQERAnG",
  "key12": "4Ux1ASMo14VcpbxDP2qihTvmZe5DsGPaZ4MeapWGQXrgt9hz7RoF9Bn1hgM5Yar9DXpHaEJdta7EE22TGS2bgrim",
  "key13": "2TQD6QJewAUJXGRH9CackA1K4hLghxMheBGDM1cUxeGe1iuV7jfHWqXfbSbP5QjiPNPtqznsQtYDuVX625of9F9S",
  "key14": "5Amk7EZVmQKkNhzVPZRFBn5pkYJLHnp8fRgE1t9mg8RPVbkDRSSHnvuvCQ3dpsmKHKkxPexx6U3HXmq8GTZ7Jkft",
  "key15": "5eBeKYbSbVvvtd6C63bkxnjv2YXWzoJQUH31T7NiBnJdM1rudNWqg4yhhZ7wKLRzGsb6xb5tFVhYnuZ6okuBdbNU",
  "key16": "5mUAHkxx7tRxAtZbJJ5AsE4FLPGNijZBAhGYHDkjmRUBUGSwkJ3xrJEEd9BPwkpKqrHdqexCjCJ39WLLNVS569bn",
  "key17": "5tLo52FKpVnyqrPQF1zNRzrUi2yAP3BGWYN6hEbmEgDwRfDcqZAGqCcKUfZSwVsKJQVzm1BpDMSb8WoF46BsC8K1",
  "key18": "3xfrV5mFumNTfkZYxViRgPCeKpnSAsJJLiwRQy5tXZbYpSS6WyHV5uXcC1jfCzEjYo6hhQ2VfhJCHnBDmtv5YGas",
  "key19": "sBkLaqU8t4VBhpyLywCpzSjmxJLALthKTpojqb4PcuYxaSw9CpsDJ4J2q1X6GaNxkPoADD7ktrCuZNyczAJ3qjJ",
  "key20": "23TNUFCtG1F4K8Fd2SDmFRwvrjgmuGtZZaPsKFzbxh8PWHAWiNkBir8vVyGjYe6H5NjySypmiU3e5M6pTSf2Zrg4",
  "key21": "eHwHGLYNo3LSs52WppdrTciVwALQdHxxDBhtUb4ge5WcfRpPPnvvRt3BZKUk4Qz9taBmxrGpe9vFgu6NwzNQDjM",
  "key22": "4ZfqbwSw3Wc9vTzTEQ7EMcYEinf3WRHrbtcM5bi823A6d1rok8gceMRjHMhGihMpccCqDfpw9mjzoGuphNWwaRZR",
  "key23": "wTpv6TjVBouB5cr3iSWquJqaNtd5u7kam8ik1Cc5adCUp4xZdJk3hbjHpZckjUoGmTQ9MgfGbLpsagxq3UbH37W",
  "key24": "1AkLwtkiNSVtMZR4CG82FBF4SQeLoXtQ9jy5FPmYW5DLopoZF1T4SUECfZMYmmgBdA8uerYHi7MiUe36AbiqXFL",
  "key25": "5kv2hmfuCh6rQJVTerWVGgrkEuJ1yhhgbdow9Jvprnrpjc3A9JZULeLtwRg2UoymMYGrCfiZ8jWtCn3HLhH16aLL",
  "key26": "5vrdjeahZzQ2qKuiV5TQh6ARu7Y7C6hJAs68EPrqKf1ZVSWntGtZjY7XetWr9uhsWtADANXnb82iCQ9F2rsJwo4H",
  "key27": "3GSKW5AtzkYMw55tQRsDtinfeWkjR1JFXkDXWoa6ATRpJzrakqpJf2pA4ovStKQnyn56rwY1xpj7gp1NZpS9zpus",
  "key28": "5B9nRBVRmW8XUaRVJkPgrHc76s574QJghQEUyV2WZqBGR6Fnvry3zMrnPwtCPKWrengLvwv78YvQnZGP6E7RM6re",
  "key29": "65ADS18bZ9XV26LscMszTRbdyauQ65KTQ9WoeTjpc2ZGvVVF9V5zyjAMkNMtejsryFHYaMUiyD224HcrKnkL1unk",
  "key30": "jHnrAZA8ue1BJTEmEESvxYaxET7gLwgdUoZJFEJQ1PTvMhQoSvsm2QJNZB148i5GBMgEXnTy8hz2F1WjEkoYM5S",
  "key31": "GbfKuRrtq7wtUFW5qjb993LuppGd4W8ZQ5RN8yRqPPQHuEJSKYBoByyAgA9McSuPaccLRzNUrPV6wTvPdwTEscB",
  "key32": "qDsw6YX2jRz1DRgrdLER7T7LF5J94B9eL8ZLE13SMas6HKesZt2G4u3GhUrKAy3EBwxf9kgAiv4uXYDCitkezDA",
  "key33": "3mzc9619iQ9sL95DfeB7SkjnhV3nAn8oPm8BQwAT6EZuLA8KEWed7bv7B5eKfgrENLNpFJ8PdisSpBsJqjS1t7Dg",
  "key34": "Qsvu9zcohiUzhLmZeMkG5KhtgmDjbsvqafBVutuASfts9GDpxKJfd9yd4M8hi8mDoP41LpncW9asSMWTK2Dr2BG",
  "key35": "5wU3A5MwSaba5ySnGwj7TmqNSshgtAWnjprDjHdXhpuTJETNUw5Gb8vfTaXdnTpEBUrGinf9DPLSVA5u9ro6Pp4g",
  "key36": "5Gf6rY8zDK2BfjXYgPpNZtaXtWHA2G5iD33LgBbBsLmFpfVPYH23GPaEkHto2DjB1gXePkfq5wtu29tKSufbnPtX",
  "key37": "4xpF3PWMFT2qNRQEwbJyehCGMKasSeQjWaWGESvFqsGoZ6Z7tFJLpHPD9XCR8A4L9teq7SDqh9n69QVrvcU38Wvo",
  "key38": "4BvSadapY7FMKMo5rWd1J7gt594Kmt6MA2EntRQFp4Q69gj23Xurffn9VvuNrDbnnTA7EHUKt3jED7jqBSh8aeMV",
  "key39": "2mkEn3YH9STruUE1S73GtqXgjR92yuDkSVzxePu2ykZUjXEkML8M2NpUsWcqdrV1YEMGTM75wyyxuSJD31W7wLwe",
  "key40": "1vgV854w9HLJEkHZ5Azhjqf9DmLdMZ2oGMHr1bu8nXE6WftLbe8Xvwqkxj8wS2XgXSXa48yRuBWxUN9aw3EHToQ",
  "key41": "hsZSkoqe1rYRmUqBpoYHnUMJD69N9Ee1qougUk5imNRdRXgq1FskUYvsmidMHP8nx3dErhU3CKBGE39DwJuykN2",
  "key42": "2rcNX2jfuC1xkSsUVjVzFidwSFca4NKY49RHhsJAtzZRR3G8hztC87ZYoXFqKi3YK8XaEWYMGoJf8zwKx2C64Vq1",
  "key43": "4avjaUHKouF4F935Jbw4yX7G4xhLz3v6o7Y3boCfoMMuGeHbr1Q6S29hDGnDqKhCarpcyywUudpy1phkxYqyfp1y",
  "key44": "4Z85YH7TMdynSkDfEcY8RCzTVW7BVuMKX3ciLwpmKFqt7DwjJqn1Fvy2U2XDpQ3KP75E6YmDGbsTWkM8YLvAvRXh"
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
