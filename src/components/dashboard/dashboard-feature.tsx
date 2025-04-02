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
    "3bjBDfU9dDtiBMfsx4WwzjGzmuiwRUtU4uW268HmBWDfDNA7XnYuLuoJNFm3XYKB4HN5fLCQZVPV4CwVkbAAYLjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t4758ueviV3yUfs2pQj19XDTGQcYX6RnLQK52KKndvPwMgQfAcc2hM2teBv9aXN98r73a6ag7UDRwQkh2U7pHsg",
  "key1": "62HvDKSGg2p7NcsTRw2VkA62zgnDEDZ2ngherZp8DcBx74tcxhxGh5i7vB2oPug1yLr3CAnA31aSUvV3jnSHdivN",
  "key2": "5bTksvUoWcDsvD4527oPT7k1uqCMs48MpVKid5S3awe9NmtDf4Cfhdmg5FJ4VRU7tqjpP197gaXsDhKMA6Pn3CYC",
  "key3": "2vYozLEeieGw3xrD4UhUVyWnQe5PkhmX87aimgFenQR4QuzehscADtug42nzAvN9m94iCKJg7wyqnzPi7JTNYAVc",
  "key4": "2x9jiVWPVsKYidh9q7tzrsXNhxMt4Q5bmBPXDS4QcuPHj4n39ZPbZXjHt12VtaLfrkcGoURf6eNGEGcMrqE5sEC2",
  "key5": "2VB79kqwR82wXMbdtxoPTrv3BwseNLtWAF4YGFoqUnewrgHqQvZVJzAS3sNY3brHbwXUGrNwyL9XXZdYBfpYKbkm",
  "key6": "3gorSFtdPwg7unkWXn3ZwhSVtiC9B2ZZXJVi9RNhh4ZzULDiV1fbsNfLLfqgRRkGA2Gh7TpkPUh6znQqHYJKww9P",
  "key7": "LXhuq1WzDr9tvhyBzmugFvgyjSbESEw58ZGjFzZwYGh8Zm42nRPx5AezhehQoXi1BFkSHNC8Adbbo79Nmo5oQhE",
  "key8": "ZA6Yf8TCkWu1aqmRuqNR1TorU1fMej6pMHJf3bNnqjPQ6TrUUHd3mKTFhrgEvjwqbKQTsjqRQ9ZZSH3F4qgnB59",
  "key9": "Ye5eQ5ay6vHZqdpHc2zGJTGW3dnDMb6i8vDmVAaM7McGsDoWAgEoJRzrk8XYDL7ubtMrSZjDY8mrGfxkfXuoQD3",
  "key10": "3C2yePVLV4g4ChF7FNR4SXuvwDwHVrpkt7sp56nqQYymVaej9aHm27u2JLFPhe6Wq8J5V1PxrfrfifXEFWfCrH12",
  "key11": "3xVZRrBP3Ra38dNvhQo6pshqF7wqTyusbEFBUaaCddvbKTk9kEHSqke3eyeT9gHzkWnvEYgdj5p3Vfz9B7Pp7EMn",
  "key12": "2LBoQpPbgyB4wgYR2FqCyUMG9LNYmPYQjTfG3FseMowF1YtUDVN2qceqdFd3kRcNUxxboaBHJnST1KQ2iLkXzhm3",
  "key13": "ss5shbwHvvbY1swAVnuH7UrAVGU1MxhXivCwdRUzERG52q91i2K73eCs6rJ2NbSrxcPNWQeCBK2P7y4C2YRj9Ey",
  "key14": "34R4gaoYSCJiDUsp2nrZhdWA6ghXg9qeXA4nwi4Y4CAbujYHrKaL5psVtYK3LK5pU8wxgUmfJyY86kMSS6FnRQBx",
  "key15": "31wPx5hTZ2MUc8a7ktKg3m6dN3XSL5yfToZVLa5G85Tw1361GscZV8fVM1tra3mc273AugLqHMqgX6Fo7sSeHkDh",
  "key16": "4Dp31wPWA19qcpPHqGJSmtzXZxhajpCQrcNek6xb9LLRH4uuJkUedvLRkwppg9javDn75sDiY68eRWbdAKeMygNp",
  "key17": "2Qexf5h1cmaTgGoAnKqWMYkhPHJE5rP6h4a6Usk3bNP7xhr3Us5cuwMDPNRGsrKcbNwCjFSTrXrcJF8CN9rY94AV",
  "key18": "63cKw3wCcWqrHZWUFuDfbPnxSnf621bQttfhk9JNSSxDHQkaXbPs7xxwuz6PCvGajDiSyZSzatSwtFZoXuqn2A3R",
  "key19": "uhUUD5umTSp3kdSHu45bdpLexLydzD6pGgPQLpErwMr1CtHtjVVZpaX4f7DvQBjt13RQZzaVup1mWwXzBu2UsTU",
  "key20": "35soPW6QsePqdkxAsQxcBfUHJ75dnqLBNNBkR7uztv6bawzWxAWZNpnsFTCJrvkX1huxSK4WipbTyJBzNqyCcpSG",
  "key21": "3UsbF6tEnqyyMwsrhQYq1jB6pdqGJtD9HLGCqQBRHJRNSMkpmWpTz7wzAJBfQXpR2NV5Jrh3JeUnKvy61Fq3ZYmn",
  "key22": "5CvdMPBKQhNqoXus4ZKfVpb8G7AQ6GW4VJccYj3NjZzgD2CvsBUMm7DqmVRtjmoJctvuoc39AD2Q2nauuupDHYbQ",
  "key23": "ppUR2MM8Di8kiVdKtgtWJUdK1DhUG9z4THpeBzscboeUnvABP254YvsscBkx8gQZpcMRFEYU5RqPqvBSEzkf9pL",
  "key24": "45L7wH7yP7RuJVCCuATzp6i5599vDEeAhgqRehpghggjYB83fVv8RN8wRZp8jCgS5XTHmKWqnZLboL2KjXkt8uLA",
  "key25": "38Dtcf2FmdKP7NyHAMy8HNXkczay3JoyyiYMKZb5yChLjoJcRv9nrBWhP7zT6stBqHvHpifmSJtm3UuJHcwEhvK9",
  "key26": "35kwitooJHgCveMB9askRkXq7nABDvkanpFdtH2a1KSA9RLzfLjA9g7VMdCVU3XEWzjpFtbcgpJbVvDKnkMxd4gD",
  "key27": "2KM6bfmbJFZ6wKbW9b6Liz8ZPd3PD4A2tgkQEXEDCYAa5wKDodCrhmBWu1Ar6BmwG1E4zugTCN3NizMB45XVgR5m",
  "key28": "4XqmxQFnEbWbw4g23AZmL2keeHdYMeNU8oStkzYNSurwJ63CwFsNqvi3zTQ3t7Toq7R7yan1zv4xtVdrynTR2iWz",
  "key29": "5H3vCJVoCUuioic9tjqAAMwdK7RDCZ8nAKLgtPmy55WgTvGge67MY1yCg297aLAxDV4hyd2NxKyQwsJXFXNR1pur",
  "key30": "41BbjiJ7joRjq5ZK4oGp6t7X4gDFjdgidMdUjyihhaJC14ZZCcqgfVWCvDcrVajrCDFW1tmNuqJ5xAEokrVMbUoJ",
  "key31": "5NujaDQpJAwTtgpVyJA9W7pqeyn6j7UKgrc1oySzynyMqABrDSJZDvwy75UZvAitAsqLDVfWq9M9MpFdJgFb8s9R",
  "key32": "a6GPhutMN3foZjnXFvffR3SbUH4AwsjrXaBNM5Xr2AAX4PiYYun9S3i9KDZEGr1EN1NCRREMEN3tNLwkT3venX1",
  "key33": "vpdxnFPDEj4pnxfzMEyKtL21CoB9qAUgakunjLskZp3CfqatXaBYAay9FQugfdn7esjefijSoaSzb1QpaRVJ6WY",
  "key34": "UjeBv6YogYf3xjFpaQvSPw45shBsSyQqR9x6ZrHxKCVpiw2iW4RD2ZnEgAYE7xmLZc6xCNdU2ZL7HWsLvoh68M9",
  "key35": "65JRNXoV6ZvnJSN1hUKhTNNRYKMDZpgGKhx7oKRyW85g2Kzcf17GZ9aJgV9HhW6KABZ3Hcn7fbpMFoq3KnGewLBh",
  "key36": "2BpCxWhLHeCximKXPDao8rrsJmxTGq3SkPswxFLqog1BnRSf8r4nPp84Wsv7MYWoJ3ZKLYfhWjMzSmSmjMms4KtK",
  "key37": "5G9hyqgFohmEbM67DSpSJz9vxWFEybKV2WZMV749HJPSFcYBDicv5yhCSNHduBjBYqXFhiyiyA2vxrDv5YMEo8Dw",
  "key38": "3stykEU7BzvGP7JibSgoxb7fkMx9Sq6TK3jc9MepCu2HTSumNoQEX2xqY2istfGfKr5b7SKemWYv3GeRGLpMNwEe",
  "key39": "wrirddLhWoPwJrqsMFEYTg5hoXFrMcQwJkGaeHR2vkKCw4958vvwpTWHFYVUNoYuFqbuiwKzKx8it5XUoBppkaB",
  "key40": "5haxQjNAPgAokrThNPxm6TMDu4FvLorwM1rLTz5sJzyF2cPFfVhuSfjgrR3ERJijMikN6C7wwzv8fxSEHFchQJpW",
  "key41": "sgNPFcL8qB8cP6YsB5ZcsKuu2NAXYBwcwABZqwBoCG3BN2J3vw4upcAiHgV89yqdneB2sx6jX7i7uF4UCYFVZ53",
  "key42": "4Shm8fWdL1yHDXLWeEbDTufi2R3s7k3TpBua4jMTLv1WxJRkDjYmPio5NwvdAsgc8QR5Pytzqm5CJjDDYQX6k91a",
  "key43": "3rYucbdwcBco8ET8F9gdp6VVmPVekjLjTEZvM2rcnGCgNVZPsrQhb321mJhXPFi1aHpHNSWzGPCFdz9uATthESJj",
  "key44": "2hrFDjq3pLn85iPisVQ181nUdreu63ZiJDBvKbZ1FF2yw5gr2Tt5cQhAB1hRSue9BVnjFNUssZvwKu2qVxauiv5m",
  "key45": "4ngdMujErk3YqumQZE4zk12dPxhsW5VatnBXtzKWtbhWKJBN4Cwio1gxhVE34cN19sathutnMtwCdzi2FKjVGJfj",
  "key46": "5hkJmBVgT2zJ5pzVXM4jsXNa5x6NnWyGozzf7oVEpwjpng4ED92oN5ht5j5pubLqta5AKFw8Kkxtp7UdQfav9GAL"
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
