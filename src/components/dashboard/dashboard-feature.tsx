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
    "4NGfSzLHjmfebdjsFQTV115mMyNmEtKvT4TaF7Ww77dtwe1tE5zqSPKtXt7SatxsVWzcC1z1Dxq4tNPCmsuYMq8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F2rCuLguiURG56RGR9Zp4aKja8FLw5Zc2FULaFL3CRxBRms3C6dUXRkhJjRb4bE3ewKmCJkSJept2YZRLAw6v7U",
  "key1": "2tqnCV1NAMbk1XpFm6tUaoiVUKeAnbJfCgqycNLuJ1aEkaGSmSBPmTiWRD3aZJ1UU7J48ApGL49HmzPyHHC1pLUb",
  "key2": "4vjUSWzGMgq3XvSwvfEsELZ6YcVry4n4QEeg5EK12UNNFwiWFRtHBpfMXCiJkb5QkREDqWmGcbAYEFzRd1mTfWoH",
  "key3": "418WRLT8h8B8LvyAQ5dcE6nZYinSNrcoLhwVWeKFap5TCVYEMQBkJXXAiYbEP3rzMucVWU6NPqkd1KvSCFBXwysv",
  "key4": "2jzjy3zWFfW3zkAEMehLRt3936iemmyUJWQ34bwQ5wSGEaYBhop7sih8KgFFEJmVyDF7f2czcBMEMu2dXSPk1cX7",
  "key5": "4kKEsCaLQG2P2MYDbQFH6knXECdSZwLPxbazz6cgQBLtB3T7L2pCc6BdTCDugN2yUsQHPBgjMTq95sE9AB1ewCoE",
  "key6": "3hWGx4ioBoDoHjnrBqDZSdcpGDbsHZaPg3Qz2wdSt9Ym5gY1UW5TBNo7kT8GbrUBGtFfvAfuzHHUqcY8cQ2QGYR7",
  "key7": "5ecKdz4ETpZXszcN4CHCpeDkXbUkoU4ivACnxvjtXSGodhBqxSrc3LRPGdXiEdGfJnbSrpZx3Zokgf9qWewrVW2B",
  "key8": "4icsRo1Y9531uZhdLmD5pPS9KGp7sHhgNpaGdGwCxYTDgQVwhgQU8UTF94T4gu81ZkLzFyCzwvaCYcPzd4RuW3pj",
  "key9": "grM4xe7LWKpikVWMBRscZKMybSsVqu2yYThURF5UoabgwpJhcxbjRFG5zdbTyYr4p13W92XKWjCvBtFwcpBCUHJ",
  "key10": "7UB6FTjixzz9DsVqVrqgfevJWRSAMzeHjbPDWAf6bpGJF922JJ2YR3YPTA5o9YgfLkX39ujwwr5pTTskxeRGKUv",
  "key11": "PEJxdbsuojRg5YTtREVB2Bm3gJ2ehUJ7oDFhSQ55PocWzeMUpbjf8cgEw24LFtBaUvcThsCN541CzGQdYgFyF8F",
  "key12": "4KXenzESG5FNBTKxSkDaSjAUS1P5yoMW4rtU25bFxSHrgi854da67pzsRqis7BtYzBcJM53vyGUFswHJq9jfN5xn",
  "key13": "TVu25iTcxGUrqwMTGARnTAhYBVAp6QXPgW1PqFgz9L9UfBTP9AFVJFGEcXTNMkZPrCoazdYFHZcvhpyJEXMrdsD",
  "key14": "8kRHF2YQo6yhpWTQxrzU226ADYu6zH8M6B4KEMGWU4XMgvju1qKiWsjxtDZhbVGM6gVAjfq7Sp95CjTqejZaVZ6",
  "key15": "5MxaRRvjYAX1PoFwNzkwi8Wf4aXuNYqpfZ4ipM7TVUVWBYemUasgYgVJo9eEpABShyKwTJe266Z3ugF6uZjX1B7M",
  "key16": "5sm5ELs3qWA2SykigJ834NqNKKap57qgQLveTxt15qaarEuQB5q6hpnnKoBQDaQzEQTBvdBPsBDWSqnba8FLyp4Z",
  "key17": "29KkPnYU6E6oYGEPBpJggeeBNoV2Ygw9E5esiMqjVCHAc59xnSV15uNuZMADQiRfyepjZJoinrmSWTPc7j12U8Pn",
  "key18": "5nKRuEUU8SL3NvAogbnTTGyPniaAUpf9N5hy9MQZe6KXNceBjQ4V6YF6EKmiqnrVs2w8beG5JscCnMGYAWPM7LmV",
  "key19": "2H2c9xcViPBffHtxxWP38dNGYX8B2ZKFcskCW4QK69oUifzdMqvsSRH8L2cYTYpQ8ca55REPFaSytcqLAaSfwe84",
  "key20": "4x133sz9Zwk839dSNMCLEazQHRa9fe9yeeaSw2rURyCuXg1GjhS4ZZwmD6QJbsjUA5gc9dGgvsKYysM9pzGABP5a",
  "key21": "2rjSpoV3Q3JnXQeEHmKDpJn3a9bEPzMQjThdQzjn3ijzNMEEL5ihsRrHUZqNoKPjnVez55cdJtvXVtZ3G8xM4yJv",
  "key22": "xNNMtPufYEYuANDJuvvhvjTwx8rax4P5qLuJHGBZv79iUkxtDwBYFZoWfq3BzP6TNtoDeeJwgo9Lz6dQPJ8XGvg",
  "key23": "5BrrgSoreqLLJp7NJbBXf6eyTeAtDCkBCQCy8bDqxycj2ijUsg2BMDirmUioMbtecZ3UzGojghMEEqZFYxQPkioU",
  "key24": "5wCLrmcw2p6XssSDsL9uwTpDSzJe2GCahfbV5TSpwEQ6y4Bp9GX7j1F8Ha5K4yvNtgmmHxEKe5YAYZ4RZhCJ9xu3",
  "key25": "3obRNmNH2foym9vBAq9JCX5dAfG3Co1AjFsoqLCQdpemTKCqjGP8Uep5gZBszEWm8WK4HpwLBnDGTdpQPeHipp5Z",
  "key26": "3eSX6HzhBac79mtgzyxYTn4ysGHP7TQQwL78ALZPPbny9Q3KNGpVELftRJtjpDXXG1nuWqpS7qtXzcyZbxH9Gt3S",
  "key27": "4rHacNwQ5bfxkTCsVJXHBEXFgxHYEEcUGSoQn8NHDT8fZ3zC2V9VT2ckuxxF8GQTU4ES7Ev99rG7V9PhWtD8iQj1",
  "key28": "54A4pcx8tSbRbBGBWdp1dDYhqeDgGb23MqBWrxY8vVJRSAyFb8qghuwSwbWZfgSD2XxHFtsNUVCWs1YS13P7bt1w",
  "key29": "51tEwN9N7TdwhiTRthdgwp2aaj8QekxyAVrAQ4JnW4bYoJ9pgHpVDNmwEHGge4SiuffngWU9bE8iDhvyGHfSiyaB",
  "key30": "3kgyJ97jutco4ATpec7moQUDSEYCkMWVEv16PPHv1SRSGMgsNaFwiHfSw9Em3BGaobkC67uCJEe1cUV8kDHr9AdC",
  "key31": "45DFeTKbr51ucTEF2WirGz7rN68GZdxDBGm9jcMXy9uj34FAmBSu7WPGwVf2NpBPojERfFc6HFDxe8FQwttawVLt",
  "key32": "QAZU6qPjha9mFKMfkNvnAKuYRtvuBLayva1fCcfe8J6MteFGGa7rNct6qTXNJGCymq1u8uqULZBRxpATiCvejho",
  "key33": "3v8FHZ2qW8AkXc1e9ejrTabJvfZGS61Ew1smX6a47szjZu8mGUD4z5xKXHG14mELsFkAdZRb9vexg1eJvL1sGcCT",
  "key34": "oKjzqfu13QdUGVHsVT2rw5SAJuseWMJBbZ44aWes5CtFUtHzZvCzNWAG2TLnJjJjhAnxKyGSDSimBagwnPZx254",
  "key35": "5KrdQxSa4yjackhs7cMfH9arWGMf69jtj8CvAwRGcveN6ZWPkjevVHvxGdd4bf2qrRH9cmu82GB9F3EKip45ZCuC",
  "key36": "62aMUeNGcFywK2mgATjtY7v3jaXXUeKrdnKpEsPCDTiqqoudMrjpUEBVkDhREyPb3X3c6A3B1FQGXXkRUzBjAFS9",
  "key37": "4NBQv9dY4td7fuFuxRGVdQuTy5pUWUcyu5fBNg59yg6WQ7ninoVHjzpDnYYiv14PpJ6bXuR1PveCk2bJkn5GTe4g",
  "key38": "3PrkFHQm5tpBWqxPFgVBS9V4FrwVP6BHjiFAYWGiRptWQ3q346qbYLdQMeLL9KJxDVMa3UZcNGazXTSEAdBpaDrn",
  "key39": "4WbgmU5rY51hhSSVPcsUpCc3WrLtnPCdffoyw4q5rxqEEm4WAygmBT98nf8LbUmMapm6cNfZ6FAW5b468HauyCU8",
  "key40": "382kh4AmJJAcJZL7BbzaxkXeQPvvZjvkXowjHqjkRJctEeZWnNSjeKcHPNUc3aD2PbpekdwjJcXZpoPB6Ernw5Fm",
  "key41": "svbN4q8hZfK13srBBAag6mS8Z6WuWBouFArPJin61Hr6FtFYRaayTUfQjEhLhkStjHLMcs7jqnjWuFGR5CfrN2c",
  "key42": "QgyuZJmnB6dEQEvy3D6tFSfMnRBH7GAfzvgozoddkiE5aXtiD9ruR5Crue5Koujmy6v2YLN2A2CryW6NnkB5wNS",
  "key43": "4EqSY2qxkjfvq7FyeATLEmgpZc2rYUk4Peambd5dogirEmoKxX7bBojBabvg2ixXGHeENDeJdvdg4RFLCvHvQoSZ",
  "key44": "f4YJj2KKUVRpEi7nb1eAXwGs6xaUr2GB81kVsm5N7qSizc3kWwRad6NWoGPLDHCNhEo9c2y2qP2bUL5B5cQan3P",
  "key45": "5sdMCFgq3Anvryi9p3qu72jQD7DeAoqMGz9yLk9GuLkHre4qoHMxxxUXdiy6sXnA63SyiE1Uw9oASpVN8UZ1cr9u",
  "key46": "4bFcckN2BeerZfaqnaoKXYxtXR55pNkdcRG6QKJu5hDVCra79bJVzASJEDNsWhHavsidZyg9P73PEo3DubukASJA",
  "key47": "38fM6WvD8xNgR2VQU2jDYQnamBRTr4ts3UPRmKYXuKMV65ZMy4LBufKPLcTu3dgf4wCPmqVwxsBLPkZMMGZ8vwq6"
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
