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
    "469DoBPYJ6LWs9zSwARgPbMqH8E9xqmA1VXZoE35FkuoeRwSuthSoVmHvEwtFzYtRP2x4MWKGhFxkvJTCZJqEEck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "611Rwq4iMqJEknDji9hHZFzqSJxSjXZPQB6wTBbLmSKnZfKqf7GWp2LKwC6JBFw8sZLuUHXWQ3HzKcZ4eVe9jsnQ",
  "key1": "4ydN4vmVa9vv76t19nT2mievjNxgBBeJtYP3E4ZxjNXRxG1FzfMzSkQDJd5jryL3DmYsDoEre2f3Pwv5omjzb2Xs",
  "key2": "3eLELEU6JMyD2qFH8MY7SSTZ9GAH3xjYvbAX3vBw5xoVtNSPRaT8SJqugciQhTc3Vf4fJ2Nq6dxwS4TSGrUw5J6k",
  "key3": "55zzMTmeUDghmLn8GCPfAecVtPpA5JDWfucXUwW6yK9MiBJYfSij77HQ3dcLx1bPuP8XivKPMoWsGphaeCk53Tfx",
  "key4": "59xqoFsutAud2cYnxrdKTbSHQPKmcPYrsRZo2gbGSoBXYBwwpqyDd86JUabezWccjpfhqS11ts28Zm9unKMFbW9Z",
  "key5": "35jKVxsM8zc7QZ6EtvuJMxtmoMEswc95w6eH6xtf7EFved1YhXw2mWvQyDifDsPGiw2Uo7JxWjX6YbXBHTAd5tYM",
  "key6": "2awAmfKnVk3zFjTvUrD1NyiTeLXDi5hfA9b75XivHoo78GhLYeDkmKspoNrzuYqJNz5ax2eSd4kXXThWMe2rb4oR",
  "key7": "258mX9Wj3asPfZFJes1aNtxvu5pnVK1rHDwgXSpoq12MSzrLNU5cR4zEiYBYJiYhAErWP3DuttWtAYdaF4yjjFaq",
  "key8": "3rxif22rBW5AY5zmvaPbJQemFf6TuqHTkP5FS4qp1LayzEvfHXNCCAC9nai6byhyAacqRadbRwWGSzbEDERAgNT9",
  "key9": "3FKYWQRjDrVhy3F8aqmnQhHftygX1scQsjgtaAWuafHF6ftJ1iS7Ri3bymaAZUEQAWCvRLU7QBn6zMZBujgRkbb3",
  "key10": "4ptzAVFpq7JiPgoAwCuZPSa7BKrbFxTUp9RiGTwt4Ermevy8dhn5GvKcoF5vBhaWGSjhaC5xnpeG692USgtsjRFj",
  "key11": "2F3RRUJFYkGPTW9MWVE8WxHHvNub8ZSFoPVTbRtP8qdjRMiiJ2SAGx3HHAGiXAKE88YNXfVkUxdr7p2FsgpxnZg7",
  "key12": "2GW8Wz4bxyuFgnP9CATCn2XLpxttToc7Ddc4oMWPB7WcCxp1fZrk6R8nJtx1MJtdmzcU1uTqdv5TW7v1b7zu6X1E",
  "key13": "4UXbaNdjRj1xFqBDddNyS95rekhmyywseigXhy5w5rNDqErrK34mfRfwVEdTanRiczdNXomahbESJJAt6Stmeb8D",
  "key14": "5Z3cmUPthS4WfbiqJQP5ZU41Vjn1QpPRfrvcuNq2PYW6sx3RH3rH5rmdJpm4oZbVAozxK7EDU49qHKPu6eE6XgLT",
  "key15": "4TrVpDHyCHGnepUkbWkeKWvtss9vLJbBR5NkFHgwZGqqWiMgd1MBobrftRBMYycfvqVb38UA1LEXvQMkNTrrSNCP",
  "key16": "xJSfyUB8Hcdns6bpAE7unBz9xx9DQqVUPvRWCyogaCMzSK7RiF8ZMv51CYWRg4HjKfh3fU8pUWpCXKz47XujBhD",
  "key17": "2uVPQHaQy9DtN1f3jsh6KMM1U2uBYWKpwBqEwpqEi55YS8akQcqbTEkRPB87DEpRZ83Ferg249SXajex8DCSEpfP",
  "key18": "3HBwdqkqF6g6jVPcMXthnio92e2aP5p2mUWy1nUVgkJsHLJeLvwEfkh5ii4yf4c8dsDKsgr87buAj11cSUmCNL9b",
  "key19": "4fkWfbBZp7ztzwT8MwFbqFEbJdrBcQr64P2kBvJRT8PDK3LuUELCP9pT4hmzWK2F12wNGVom2498db6FJQfFMPNm",
  "key20": "3tnggXHes7QmV5GYCsE5z1GMAmpZXDhS6QrN7RWpvDpeZS4S8qeLu4Y6vzSnAv8GC3J7HXUyHKpCVtmCa8CMBBVT",
  "key21": "4MYPws2cVdTsztEhL9h9AXa7zH2WBSKd7X6i2zbSjthvCqMHypaw5f1WzGfUMgGWf3edNqoxbcoshxn8CznFVqWv",
  "key22": "2sZYZuBZi4BRfkYajVQY5ZZQCbMZFtZunYB5DJsktRdcF7SfAfuvgaBaDZYyp9GHZ6REScbJeEu6KvFrdcpqvnY7",
  "key23": "2x9XuYMYgXTCtrNwc8SWwFJtk79mK8LEjdiBE3pV2xAm4PZ9k4G8XWrzhJDzS1mcooCHyzzoWQVpFkJkVdDEspxG",
  "key24": "2QAnanxWGNmNi29Lrhk64nmUML1VMz4yKm9mbDFbND3Mp3G1aPKzNXii2UEmUUnXN4uifjWFL1yYzUGmbyGxe2ou",
  "key25": "56Z1dohozsb12Sd8sMJiwzVU4hb2tLm1vVJWYLn9nWPcnbLwH22HAdvwiPWSYuDM54NsQCyWcbibrMxNW8fUyhgA",
  "key26": "4G1DSU1UEvgCmNx8JvjVjFB3SrUHX3Rtd6h45ga7wmLecEejE8youmNikeBKPFM8TfVMQqVeSJviPdumvWMr9aXm",
  "key27": "3CjFQPNctBrV2oX3YAETBH68L3AQWw2M17HSNecnGwwsBcRKHcCggV3o7Vopvv4Rq16JycNFwiLyRAjTsaYGuRqX",
  "key28": "H8crSUQscWD9ZL9aUdBQv5G6hMCaZWaMV4iDKkyRFFcGa64x5vhYSbqfjgg8op4STBv9LdLUYb1G7VvjCnhYbUp",
  "key29": "3kqmnfC5V6wwuHsy8VaEQqK57fQUW1Poem3FW78KwKEX1HNshvsLgCPLzHJ2k2gQK1eoy9douP4uforGG74bGz1b",
  "key30": "4DjRhNPYpqgGjEdG8CSnoFrSoW69sAp38Dozwxpx8NMLwAnT8BSuZL8HivXnxJ3AaXW4Ekign7Ngm25Pvmw19sjF",
  "key31": "5xbMv3tp1fD5dw9KiNZ4v5Qgr3VyGWoSmGkta3ieJTVcdD6Au1WKnvz3sRXiqJ5chxhDtF5MRrwPfKcxqABPcB4j",
  "key32": "3upswsgAkncs2JPKzYbGURkbdnBV9ngqz6HY21zG9KSvGTWihucmqPg2DX4gvQA4dPAJ9nYGQreqzVhseDcSTomU",
  "key33": "Y9taWnVVHyz3cpbSePC9T48xRbHuMv6i1ukktRDBQoSsi9YyM23Yc1AY7GNDQjwRgE72AZsGDsadxXEjPAi3B4J",
  "key34": "5Q4WGAFeESchFmrAr6EqvaVRfqkPZHYWoV7wiCvF6tPZW7sMRoHy2cFnn9cBmFVA4cvxnMtQDZYquCrKncpyGidj",
  "key35": "4og7nouseYhFcqpsYPwa2bLMVBXEi3fBBStVBhDKqeMkXAv5ez9TXZU94CEfuZWytvPFSm7Jd8Y1nZanQae3AsR",
  "key36": "3XD91J3SBpR8AENBdSwk2r3oSyJF42bBA9CPgah7CSuXZtR9QMTyJfnuF1agFhW5z8qQPSVPqvAwq6GhUWos44xc",
  "key37": "4MEMskKzpRRw4RjfLZ21i7xicBFAax1HM8yRkrPTN5AB9psEwAA9mDucAtgRncYPQrAo4LFHEtC4QnSR3dgC8iRK",
  "key38": "41qtZ5xxVCqsHFScYvuVDnJdUzDBDQ1BSG6PVy5HgMLv3KQ5jpwnJ5CFYTrrq8jEVLyCqnUgHhxYUDbbj7y4HmqF",
  "key39": "2zZet2DvgMMxASauAioXqnvSouMkTdMcTgmPigo2vWp6evKbM2ESDZUQJ8y7Rcp7VstyJH3TU45yWJkpYDRV9vjh",
  "key40": "45jKcLGPnYf26mjPXa5KAbBFA3bjNDs2TphASL7KVYGY3u2mV7P1SAAZu9iWtxhQFYghVwxHLgEKfVduPdhoToeF",
  "key41": "5fEk3kf5fa67DZvAxfT715mbjgEEXYKV8GxThYUndHUr4umESAT5HhnY7koMXTEJKTkvWk7PAHA8r3wVJJNCswNY",
  "key42": "4YhjjMHuThAAGpHeVhtJz23BF4t2hEPNX8MXGgU8pHpQtvLsahXifeqgZWWZWdpR3nUpgA8ejK6xg385ZNAS56L1",
  "key43": "S2unYpygxAfVQhoNU6viqdambNFM46beLC8PpSGr52i2Q5WwqFi1vRU5977ywq7RK6eXFKEfiyVAhgs9vu7oAjY"
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
