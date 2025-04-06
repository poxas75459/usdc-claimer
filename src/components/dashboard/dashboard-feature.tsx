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
    "zB4N5htd3WgiPYL1pGGAExtX4sVqGYGP64n4foLA8VrtoUVbpCsDnSEMFJPNQpB7aoa2xnoHqn1VWcLsksfqY37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42rqdS4fu3SqzVbfpVgbE3UEBNFokzZWUS46u6wGamcy2KT3up5AGc97A4UH76GbLRDBTcG1J3VREAzJpkdJuF7i",
  "key1": "4pqwqzLLovukth5gScfQVu4xAP6hzz6xfGpFdcnW5tnfJaSHN9rSBowQ5k3XFPQNxkWpwksD7PHGvgJFSxTKj1ZA",
  "key2": "51C2WJz2PMi6iCWgnmyuXpm8fmAYpPRrNfdwV856oxFQvDGwErkvdNyU7CBuGcjHXMESVPMRHRCxtJy1BzEwFcEi",
  "key3": "5WQttwVGLcrKyHKLZN4hwLqDHstUrP4rKzCMdrgJvcG7fTk3vF1y11tRc3B1MP1Hnxr7cvdqhABs9kkKb4Wgm2Po",
  "key4": "62vwAxdhJ83awwFrYwSJJrBe9u8u2XY2eB5X7iXrp2JPcE93qBGQ9iWuBrUwnxsqxEjfybxKQmgPSnYJgSezrGXo",
  "key5": "2EqxxnGHBn16BUf93EfBXLyrNzZGoGum2U38f3uACBWNmT1kPV1BD38cwRYz55iAQj2kJZ8TJjVx572M8iK9nY9p",
  "key6": "53RvKrnHPtPGwgwRg8h4UYGTFazWF3FzswWtLVyaGYRhr66bYQGMay7ACsYpeysf288BqnHJxnCpMDS8ePUtwgQR",
  "key7": "58fvmLKsab5rL4982vhNtAX1y1AgnvmBeBmPZH3H3T8sNoAwYFQrBLKRW4kKojDun4VQvq5oicmDvEhA3Nc8tw2D",
  "key8": "2ASo12jx6wtzzAJAcuiUNd6qn3mgdBSdUESYchFTNjGmJnziK3dWMKQrqcG5CdQFSajthRbJ3APqCiQTt9gfYeQn",
  "key9": "4gSexbKVHAF4WXJp8K2GiPfXkNvhBJ22SxgAZpi75CKQMMmvLpqEAiuuceivv6dmrV6fvwDTgnQYjVMDWzP23YQ5",
  "key10": "3Y7erikmJWC373CfwhmiNv3NyqJ39WdRVnqZMyT9KyWGqC4cRUUVvfEyVpBTLEFV8VHWkoPbqPHVrG8L7PV9voLJ",
  "key11": "5CheQLmLdxQgckUvSa8P44qCxfPJXWWjfWs7afE5bj6CZaReRZHsSa9Zy9Zx2qJHBSVXSXfzXwfX4Ad5U8E7bVoM",
  "key12": "3oRZKjDKAWiwMvRzHdLyJVRZv1bKqasPg2AQ637GW2TJVDhBTtSsKQurMDK9hbFxJWR1CDqF29dvv1L2ayu1k5Gf",
  "key13": "2XdreJWa1PxbvPnGSeCfTxtz3sqHCKGWQVr1dJb3tn7cUmRRGsWNF9e23UMxX8jvphtHoo5n24Ur31FbMQCpCEDm",
  "key14": "42A4zaoktLvPGPQqL1fZHdA9j4tXDNGS7STdd12DU6Bh6c1tooTmjw4qoNZX2juUVvN1aTkERXrKGsc4Hbqs7GDh",
  "key15": "5kjp52bukctcAnFNk63kxmFdiDPHfTADRCHobRkbmB9Kxh1ezHu7K3EKCkRbhEY66ubRYFYYBpmQED7E3h3fsWYA",
  "key16": "4L9AyVBGtVKfPPTP7mT1Z6YHuxw8zny1jfn1BB293P4J91sz7XtHw7uCD8i1kxu7VUXgMviwptTZiZ6453cyjSo3",
  "key17": "3Vn24bCP79Sp8VaAQYV8Tz3b4q5Joc6z9AVgpSSbd1dM7rvSh1MmVFwgFzwbYpmpYzJ8XQNsRCrZYkomCr7TVhH7",
  "key18": "4LP6DbCmk6viVELq9pqzrA4yr363qYAXUFncBLWvvJNKDCaa2vsQMAe614ir4vxVCJHEmV44ZBkE72EAxRg6amMx",
  "key19": "frLYzowAZiCmoprP5NkafYW3qhg2pg3RZkpjER26G18iarBEr1MzU8D8ozaYjV2qhjEgcTUvALbEXHUHix6ZMgf",
  "key20": "3Pdn1RDjFMiTds61ySuq8mg51TQUJjnR7zsziHmyez4WgXXkEzAEyccE34VNetofmLtDKmdFZ2hAS1Tv3majYBC8",
  "key21": "3vXNTS4PWGwCziXWLxxLjz9QxsxnQEVP6Emd8YaJU6nNcjrP22L34AkDjfmqiAGGogZ1spD8kVvgtjvK3PH4uuX7",
  "key22": "28SjfGuaMPL9B8Xxd8B1pEBfELD9DmyPF2XVfQ9uhTBjQRhBeFSNrYEWUk9jG5VxnReq42SpZA3WCaiNtN47SSJs",
  "key23": "2wuBj5PxQ6Z77twnpAUm9VhyxUeADN9zRoxuVKMFAeVbxcd5DgPLizttVAC8f2nxEjUR1nKw297bF3K4kwxb46Ca",
  "key24": "5vpgHZa4R6ap537avYMCc4JP3pYwgHqSNUmPPd32xzpoi934GfXgs3fgrQzcSRr9Tcs7XMoHTfCG9xoZCzkUMxRQ",
  "key25": "4HYxAxDBcotKLt8aYngNMCEBxQQ1g2v9iVvpHhw9xtAv31tVc8qJoXdFqWCEZSkNFVYeGFy6JHhKPmwGzrbLavLq",
  "key26": "48P1ZDJQAkaZDjfWMSKdYqvdvLEmN3BWqu56JtbsVesFtjWoohcEzd7XscPZWq8cnTdZbKsmCtdyH8REV3CDnGiG",
  "key27": "28geu9Ca8Sux23b9jd7BiMsop8FMCw4eJPP3zF13RnbxMTrGduYV3uLY5F2hrbrMPcv6kdNsj2hSRoFsyuknmHJe",
  "key28": "ZGj5wayrYBceCp7fgu4zoKJ9JSgfTGT6Z2RgAEgq2FutQkaZ6NYhK3ZM1Z1UVsQBHwgss2iyg1yjzdoDAuameRE",
  "key29": "9Yr7kctPg3XvV8NPebf8ECis9FEeQqko6KfhkBsHaVEijowdMGcPR2VHBHH2JxeHVJYvVyyiiMkeK6YxPeNavGR",
  "key30": "4FhzjyPVQQaqUCbnWr8i3tNtW2BNLWcxMRqsyWVf4nKv8EmjrQwmUGN2Bw13yUDkHLmaz49KaqdiQ82vDQTZNsT1",
  "key31": "W85iQ3m2fYUBTwZAo2qbBbmMh8NpRkjSZCpQmHbRGqCGaNk6qFhMgutvdmAE5JxkikyREj3QBxRDg5BSQKmi5nt",
  "key32": "2nd7nMjHncXMuJHkTaJ2scpMNmEnZQUVxYJLw7NbzhgzVKHoVwY73g6QYFy7UpunUfATnznDBrwfsQPwNrWUs4Eg",
  "key33": "vAbQVGYRyao8ty3g4RuPH55oiWTi6LeZZKurftLRarrd4y1oDpwUQEV5j4YQEFYE5WNA8cLRX9X7FrcjLzTh9m4",
  "key34": "fQtnBcVM2MbYhW2NRVm8GUcm44Gu83NGhAvRaRtxMhcVdp2HTuFgANH3xLdxDhWCi7aQPNqNY2cr7uh5P56FZCf",
  "key35": "3DUyAgbC6iAtm1P22hX7nhMFGXQuY8MMBiU8HtuBSZ3etHyXZStt5k9BTbjxFib3dbUSgAqKuyaccZu6BT2iekTD"
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
