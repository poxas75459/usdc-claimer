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
    "3FR3CCLeMfkSSyL8omVsG44LhErb4dRFM3971MZsB6Kf4dBK54ungVyZ6ECQZ9bPnbEyRkDfC3UsKergzM6hrjux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HnzFL1CUqFeppzsQH94mrYFsC2hPDySF8iMRQgrm5gYskaRL8McuE4tW14wB3ms4r36Kf6YEkStyvDp24UvKeAZ",
  "key1": "53oUECxZtAeC6GhfkffPympz3LLZT62yvo2zXxgqchvCnyTYhyKxngyQm1T4dyK29YNKrDQhqJgRhoNCqMuzwX5V",
  "key2": "k3BxoZq9tE3PTwXWDo5tEuPduwZMzdPFPSstRNKrCZvjWgmfSqz2dfPDaH2UsaYMii7PgShFGAHimRjfkDMR2iY",
  "key3": "woHj6ucj5sDXW37uq5hARW5HZCMSj57yzP59ot3jNpoq4kAJGYqWnUQLqpWMvrZ9XvYCDN9CMe6QWyPqQRVQsQz",
  "key4": "5fs1fBu3KuLjGNoHGpfa3fSt5Vet8jFMVUBdojVkhspUuBN9Ug5hyq3Jtg96VmEUeEUnHiHa1LnURvyYXKnqpBP7",
  "key5": "44X216Mv3k82y848SQgkBg7TPNpWMma4zHYQryaXMtAvV531WzxL7CHPCAs58HtugrBQUNrw5wQw99kvwQTiHhXi",
  "key6": "4ZayMRWtHdBj2kiUMF213vBWJajrmoa4ssjqF9Sad3PckD8s8LsmY2pFNQaf6u13WgxhRowZW5huo9FZqJieTPe6",
  "key7": "43iRSfwYKsv7RnMkU4SSS1aJctM3xcm8QDgBtfwr4Hpj3UvM6ApJimSzUDjy6iaihqrm61xf3VcotDGKQtLGBKit",
  "key8": "5NeTTcSL2pEMf4xgPMEA4s1ANJJPUfQFb8NXeEm8zZhL74KFbXkmUSAJhk3muZVjWCPjiX5Rd5JREchcuWD9XuTu",
  "key9": "4krn7H5MWWZP1YVUfurJCBSRocn6NJwS2b4mMiRuDq1t613rqSfyD7EpQzHSQaGHiEyUoo1dB7aNXvcSf7b6Su3Z",
  "key10": "5oanRoESesazLXVJH68VEr287vD3Re8umkx6KnC2V3ApH5QNFVfsci85NbKtpPL1xiCND8pavVBSTXtT2XD6pAjb",
  "key11": "37LaRSUXGNXxYdbNeA8J4ehYcPPqSuTR6SpGBKMLd7SUivZ2PHTVh99CaLnGq4nsmcVp6Lpyj49EdeKdjgewfKPG",
  "key12": "3ceeV3nHiffUVFXTHovpY1jeLQcwoR8E8An3HjBpsWvpbge6CJGF6tF9zunYo6iDKFGP5g2TeEd6e7FoGsABULyV",
  "key13": "3T9ygrPxkyGSTi1cYagWcdL12V33uBzhp6HpqDD3Ta7EFFiDBJtLoEcPk3ixPcQBAbWYknTo5b75nDBNr9rFrdVF",
  "key14": "3d34vEeCoTw4mfCxiAg8H2m5uqegZGB69ugQzgrF6Ji98DmjjAP33ANKhcvLdmVHnmLKJNNJKVWUBM7ZejZMwPSE",
  "key15": "yq5SnMuGSsHzdkZtHkYYdssrHqJwD7RrJrnfLf5K7dyoA7Zx71eimwzBXW7GBmAzzbyVTWcBWM15845H4jv8H2w",
  "key16": "wE4JWFc2LiCt1BXPMpcFMkcPJBsCYqNXW7wbj4QzkZWvH1m9zGz5MefHqfjiKSh4k4GRRvEbNX3cHsgkiN346ui",
  "key17": "3HmXLrMFaNVuqhZNBE93rKP4v9gzw8C6vYZCVwPbCQh2Ko22VWTBYQpSyJFDbf48z7G15j4BifnZW9JvU5hkABrG",
  "key18": "TxfMsdy1peZUHK5Fw4tjatzyGwczkqcVRTdGjWhdJFcyVK8L1HVknZoBbrMwJKXzPXmhgm8XNSHd3wTaUfJvj7S",
  "key19": "pR3aAnZCxoN6m8FMjkKoxtp4JvCPNfw4TGcsyQzhrfKejXh8X1NtUGt5t3AAViqbtjFrPyE1Ggw5djgxcXBPFQs",
  "key20": "5LP6GBzJAnVhAXJhqqqZBsamQ9BXtvNVzVdh5BkrpL3BTasHu8y5hbzzod1mt8WDoeuTVoNxNApXmw5CchwUbpav",
  "key21": "mJX1dJ4u3m7d6fF4psfi17SSEQKd8z4bTuCFFcW1FFSbb3FcJZAJfqmignUqW1bjLTYeHfA9UYTaAxP5pAPo293",
  "key22": "3b3MxcpT2PTGdAA5D25cyJ7BX2mJRMRs9UNTXgfRnEK4EUe2PUsWcEdWfBzkGszr6vLv7GmUjqzPg7wr4sn1zHd8",
  "key23": "vSgpxuftVmvkSRB4aAVYqWHjWiKFQWkFQdHebZpQdKidZp5Yf45Lav1ziN5mkWRC8es85bM8181BmfmpkUbPgC3",
  "key24": "49Xri84Lkto8816wQLjpC6iST4zDnvDMVcz88PuY3Mq5aLq6tqF4yXAxkfZY7BBNfDKDEaYu6AaGq6GWgT5tQLEk",
  "key25": "5z2TWxSNzeye8CUeqJS1uFGePaTG2FmXb8mRtz34cRJXsxKautDxppirALy3rkdJF3grajvLbGdyCEJ3B8HbFrTX",
  "key26": "5B3Uy5nwh2RswUv5xzCyroYBVjhE9bFkw3BUe9gNzrtynFgT2nGqcCgFGt8qavuA1QDi2uDGBtAdRGaRa4wqVEEo",
  "key27": "4YTjYb4gcXn8T3pEKVrJmPFc5BLo1FLu9zyTF3hHx9UnHzjgKfYkX2HHdMqmS86pHmn998jy1GzPgD8QhFRyXf4Z",
  "key28": "2QsaAjGFvW1ZPhZrydtmgKkjSGF66MdtsKTzL3xtunMFvCanV1t7pAEzqawDX1hb7tQ3pRM5eEkqjnNsAaTNiLX1",
  "key29": "4SKp7R4D22dfFH11uJrHoxnqhkUw6cGmAnyMsztPGqrCCGijN8rupAfvbUmzHyL2YNnVkMX5gA8Efs1YPnC9uddw",
  "key30": "3H2kqVgGyD8wbJY7iLjC2PDT1Yt3GQA64FQmgC6WWy4BZkYaq4Eio2hUzWvPiH1BhV1YoAszdcQJf3gPBjSBg9DF",
  "key31": "4dndvVxyNEuU2AGGwri6nvyGfgCfmEZqCBm95SDPxSSugABTYhA3FtQGf4SSvx8x5aCZjiGn5QLBP9pCBFcSGykU",
  "key32": "5jRz6gZTxREaAZ1QRsytpLS668pnPdukyqP7YDkhrvKXjC9mAxFJHJYiEkGb8W4Qa9sAxtawr6msQJzRf9MzivJg",
  "key33": "4pyVFvorNMvrpmYxgdFDFCj8AzySMPgXNTTYuK8HLWSzmuQjbJMkkyCmTPCCmAvLJGjcykagcGB64d2L1RpHHHoR",
  "key34": "wcBR6sqnst7cW7J1HDk3eCPDRJvRRgKyAqDkzfayHiMervpjyp3XxtbLbyRLcC1vUsJLFTYbr5uan8f1huQmUrd",
  "key35": "5uTghfFHCGxCFewN1Weozrvp7yB84CQAcxvPVmxtXSSbiZ8g7mFrTybnbQAuuF2s8Rzm9aNoy1GxCSQTdRaLdXr3",
  "key36": "9tS1TTwduRJbfAbTpdQMhdsvViEWMY7JEkLnYo8FAQF9DMjHmgSK6RMT5zA6kUCqezWU5A2LwNgzJrg4FgHqo2M",
  "key37": "5JZhiqoi1FX8E6Kruht65HgCU2eQJVHCDp4K8e3PtocQr5EzL9D8DCQhgfX9X9u5DWMUvrFbnC6ucuXFApPj3rmz",
  "key38": "4AjsQgk8DMeWkG59jcwBquUzJ5NbrGp4x7ZBeUb2MvebowRbarqkzycQnQ9Hyq4vpPmxPTnYDTbMHfcYmYCGmB1N",
  "key39": "e9LPx9PVbGFCJuPZWtJGcqmj7eiGWRyYjqNHSK4P5uzakdgopdyDCnXRV1VQs8zuL6ZdRuVReJqny9WoE1DiYGE",
  "key40": "4uoqYhJYZUt8Y8PJLk3xdZnDiZP7rYvE3bg186Q5gnbE4PGj1JsnEN4WuEsFE5dZD2WXLdMtgRGv3Lyo2kBmzqcs",
  "key41": "2Ac6WHEUbEgzrMBRSQ3jew1Ume1ZdZapHLYimkRTBX9aKNbf5NRbqU1JTEy3A87F2RQSrBeGyqk1DADuLGyeFXoF",
  "key42": "4vpGSGjv7ESLnfqNpGSPSM22ci2ShbtsA1NNmAdVpzHqe3pBzgi9LKZx53P5RDfpXkof7RP9TpxDpFoKHXV1UHEX",
  "key43": "33Ac3MmECSgTnfbq9c2dZrWJRpnTUbMEYk4RJLMQCEFzycaiRXwDiA4ZSTQHx9BUuFys1kSQauuFxKWFb8G7fp3F",
  "key44": "5BZaVCdDXSNQ6Vk1SnZi3xWGCV6CT16b9XRbgohCF2CQMzZSXSUxjmJ2AgoZuaMUf4QQEAfSaXud9TBWSeciN3MS",
  "key45": "5VM7xC5BdK4AzU4sG5sPERjiov6mzXXUaU8EiATLxTdUEi4TNSxdA7vJJCVD3gW1jdjyMPXVeNuZyKv7ZxzQDXLE",
  "key46": "3DqXUuVAcoARUAcmvd5tbw2KEGSB2diabshv37GZQrUcQBaPBKEdMSjij5AMwfUG14YTWo1cF12271LBj5s68Xzt",
  "key47": "5faoMdjtWiWTgCsLFHD3BVu9TKExX8VyJNZMhYvH4wqXqzYTA7mKaoCxYgd1GxY3Scwnq35q8AijSyQpkYKKq6Pu",
  "key48": "3HHHhZc6MfB9VE1ktYufJyhaWxy5JbKWPBem8iG4PUP3jaDT3fyDEwftjVr2LD3rcJWGoA5rfPhhAU86KQcuwWK5"
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
