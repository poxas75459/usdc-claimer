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
    "3689jC3H6m6aF3faTAvYfn5njKhuKfjxmVPP6tyyc1SjWjnJALrTeUKfQawumsw1rHtAetii7bTP3vXbiKSsi7T4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zSgEf5DCTV2r8Zbz3EJ6G9CbRUhoNXBranJR3ifKLhx9EguSgQRdMwxE1ALxayMMx4GHmrF3JobTyW7y7sD3tij",
  "key1": "sE4e2A5P3WWWitCLTcYdZxZm3U5ywF3CHqnkVJ5JyarsTGg9M7QrcfdhLaaB4jDUbCmFTc29NvEZu2AdzP2FSCB",
  "key2": "B3DoSiLhZUNbtCdvsK7KG9MB5t8owRV4CjYeFBdwkdSR8pQbUx1QDjrdcGNzbEvJEkxEJ39oa5YXrbDJttgH7iC",
  "key3": "1hFVjQToDhEJkRAVh91wsZ3DdnLYZZb5DLi3werrexhBBUdG2tYVD9UYNSB1LTtKZua52c548Nj15raHkrgGeuH",
  "key4": "62KhHRtcmTUzgnxezdCqQVqChfAchZPTdYiNFavEjwEDcSS9a7K5Ktr9JCBeQWXa4TLRCjr9PbD9N3TALxbDd7yP",
  "key5": "48ayEnskcR19AgTknt5UGAGRQLuf2hYmtQsf2exa2Dw3m857bPRvZLF25HofGNAyzD6sGLBtS6p1CJNkZHdB9ekJ",
  "key6": "46bn7Xp4qi2B3Fehg8fiLiEWcDNsJrnLxRn6kErtJBv8HCSU7aN886Ggwjxkip2gv1B5kbExgXDeu718XsadJKyi",
  "key7": "4ypypqeydS2t2r7vh5GYLx8v4vU29eCzyac15aYnmiemJperoW7ZtbJdo3aWoBFYqgy8sp3624AvU6CsbMSS4ykF",
  "key8": "u4RQSjwMJcomo8LVBUnfV6Phovm5QseqdA4av5gRQfbRUS4WWNv7zzE3ys4UPaSRN4z3URhjycZ8R7PXobALoeH",
  "key9": "4cu1W2Wf7Uc6aRKSmsBUHgkqYVLsr2ChHYhinJus6qthpJnxxsRC7vD9kt1BqbMfMeE31j4smyb88HjQuMUap5UV",
  "key10": "pgzEJumAiamdystx4FZCwgvift4Rn2Kg7BgGYX6zw8UwC5AT3CeFa7Qf9w682CiJB4aDqLsWCuwZR3VBNhw1hPV",
  "key11": "29xgXcUbsY8MacMsW3yc19RJBxq4gxC7h42ZwqtdptxQDJeMMB1QpTbp6o1bMC7uh8or44qc28je2adeDJ1Lmjgw",
  "key12": "4Zgf8Z6wQqSKuMHWSmMF47eMNh5e6wPhXDF7W6DcSaPnLpbB2LVcKYsEBKW4ChyJZD9LmHn7UYmGk72AqKdQTrTA",
  "key13": "3jH8qdsaMf9X4BnTQHJczVh2tqy67HYPLBKLHhBk8yKZDJK9XWobCohGYrHhTeRe6VKsdAiZeAVohsVyrmpoVBk7",
  "key14": "4eC4zrhQHeUig8mm2MewYvgvY6KnxiKy9ShQJKPzZiBAqTMKxMD6wgiA4LwcA2J9QTkYRGppS1ZbC1DBjRAEXXhQ",
  "key15": "4JhXcNcHh9gXWSAaoVYkq2gJQEwj7fxEQGRfVJHZjrJczXngWE2fKbTfctYRbZcCknVjUYnHTK7AibxCEChRqYBz",
  "key16": "2A4AuqiLf3n4ng6GtcXVHT9RHBb1c33CPFzXb8ziZrcwZ5VNp1naQnwYQkbNbUwqeHGmNKcQVRokUgtp8C9vvzCQ",
  "key17": "5hvAXj8j8KuCyQFdAkF8bhWjkc6pNSwodZuh4WTvD54Y3eGfmcyDtyrtN92LsYxGrStW5UA4UW8WXU5FRXNAXztR",
  "key18": "yxW4gtW2irH6F23kWtMTXwZD6nTWjU5ENTT6S7NChDsF1Kw53Yi9J5rpDqctvhonxxmu7FjXk5JbJjd5AWE2B8p",
  "key19": "5NZafDA4YYq7uxEEWKR5uvo8u8PZrbmy4MZfqK4SSyZLyEK2E7RJ9tMtdnp5Zd3cgNnFJvV8KCEGBCpGVdTEjvPQ",
  "key20": "T1wbYMPncs5A8E9SL3W1Qm6RNJFQ7c2PckenPxEbAiHHr2hwiL8eXtv1k84caF2KuWi8wTvdQKXJ58bstXujRvi",
  "key21": "4rZog53nzViWrLf9XCUyEk2QsKn63JC21DsL7DbAmEat5zf8KAZDg7gLULMfj6TfWeBRXxU3UpgdnzzFoZYNWqax",
  "key22": "5xG3Htb4ccLgnfhzZ16AGLbKNURgdRgyJwJVgGX8N33ZdRAMBsKTzqNVZpP5yRA7RZMrar7uUCH4middNwtx1cEr",
  "key23": "2WEaJSChRC2TEB55J8WwqP9gEawqnigE3YYiC685czUMRc69T2TQvoj1wdDCEzAVrX191enEz7aicK7sHvWzdaVU",
  "key24": "4JnxQWBU4YJeph6rKNSUGsHnDC6Cvuntr4oxiHKshLEuZz9BWq5z4XrKPk4hraJm75Y9fPNVh6ZKHNDJav3DFWVN",
  "key25": "o8rEfGVBkhssUsz76Kdj9Uxi3Yc6YEqimM4om55aCAv4q7W7AVfhz4dFwvtbqvXA7vBrdiTrpARBknAwRi8QqGE",
  "key26": "2pR3T3Z8qsoNMph2Qov2BMoWHndmWnFWfQS1Wr7xr6bFGQKpeE9qbWtxG1Ak4DxBQmkbzQbcjor6YoEN9iwxuXm3",
  "key27": "YmQz7DbkG7SKSx8QqLcYHjASZDe5iFqWyGQs4H6kN4ZGqHUgZdXtLEEUcirMRZ8VfdZ3usvXN435LCzGxY5CXY7",
  "key28": "2PuTeToSavPGvaqPNokFHpfXoVt6iThNtXq5GKa92CMYCBvb7DsM83H2aRQmbGgcLu4U5LNGUepbxAC5TxwyZcXE",
  "key29": "4LVYoqtRNvD157rVvB8DWUTumCXjiVzhND2spLNTncC3XaDA39pgVqWKnkxKjcwXs759pjgyHia2ghB9VodMxxUK",
  "key30": "644yXNf4UBbN4UGFPrZvfbXd1x6TQ3G3hvPdajRKcUVrDYXYkDJ4XSSGAaZrc1vEbiZfA7QF3ebrWf8Uv4adEhs6",
  "key31": "3z4cAuo6qD1ADrMF129Utdmj7ZaCVNxtidckoiaQt8UgGxGVWMX6fZXLcq4unakMBqKKTTBLqWuP3QPaEVUsiJrd",
  "key32": "4A8p7Hg4nKatDt2M2xczdNXJYQYmfg33rDrdnABJ3CfUcoQqnpB4qfJ99TzkszGbZdrwNXJc2yNayDHBw1UVT9su",
  "key33": "e5VtwTMok13d2FftFoGpSo1kms59oXDNfGU3BLgJjmmMdBXxVyhogDfU2jFNoU2PgwEtAyTyas9asxDd4CxuZWE",
  "key34": "91FWwfPWAdbbh1CwQ7coFDXUi7UtXrkRdpgdgQBRmsGT6uLF38kxgLhWryxqdHbBtmUE9Vu47ro3514NPVpbj9k",
  "key35": "5osg6F9Dnc6HsqYi17RZVz54uRv1XS8jeW8uFo7pEy3GR3ugMN6oRiz6eXpUZqe1oKX8wkWSfnTRYpQVrfvFpc33",
  "key36": "56uqvcqixZ6jZfxwe97GiD9KHZ7RdyxYNYGPyM8SysKfLgDEHsEh2k7Gm53ndUG42HfGzUibrTNEv38aNKAHng3J",
  "key37": "5R9iLK5GZsWiXxBJrjFWwJmD6GgLPiUgURGUdQ66LXEMSZhqa3mdXSuBJ2BWwZX4zpNrPqs7zMTtqSaXioxbB6Qz",
  "key38": "4fy9DxnvHp5aZyBQXKKVYrsEufRim9CJpJe1oiuSv5DLXnbTHkBQ8V2SXShZ8LmdhSRmRGueBWQJRV11uDg1cd7f",
  "key39": "JN8zdt186JiNd6y9kFmdJ2ER3KfbFFNswHaDQ5MBeJPhDNtiVp2DTtpTEBYndPmduQzi2eQbdmoddxhx882qa7i",
  "key40": "5RW1PMZekDxrgSPfAMkqoNAH4rq1APoSSvRizDXP26xnB76CpGqDUpRH6KA9pQRUHJcuaBaah3obVJ97s1UPbLGv",
  "key41": "64S4kvVgBVDQcncDUzbXVA2FfaZuVriQHfHZxW14MqNdmxXJs6rGWL9UrNZtAsKtC1tvmPXSVovhnq3BSqXgyx84",
  "key42": "47sgUBvj24PJxqnNXLVRnP71eKG1ZcL7gc8vU4twvuvZiU3sd5WVFL9obExgqZiqvQWNDuVGuXh2JTrRdJS1YTHB",
  "key43": "iyvV2g7V8hqzowGaDBk91ow4C72avk8nNYiNi1jYnvEMwgEaw4BDkoEffyeBdTSdgrpHBj99xntUjWcGWqGfuoe",
  "key44": "2Ej43xwEYcvcEMxmP4jBRyRALPdmvB19QAqpX1B1Dy2RGzGcrk8QTL3WTPbJNxYddVZPL9odDGD5J1NcSSReMVPd",
  "key45": "5SajosXjoLzMyhuh8yEU3X7ErjBJyX5s6oM1eFLuJFCYSHEdTcBdebXNduV8zgWoEFFJLjodP9EnuMKFibu8eZov",
  "key46": "3JiLussDhzSGDaPqYjyTL2LuDxVuT1QfUwuN48N7yBsuUrB7WoEepnDKE1ExykvzA4wLwZAhRbnndQ9hsNGGZRz6"
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
