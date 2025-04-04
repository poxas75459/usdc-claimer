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
    "4NWabFq1DvLy2T79P6uqxKtVeQeDHA8n2CH53QSHYzbwXteogc3nRnWF7cNxnwv76WtNLJ3vB1wLzmE7XNQi231h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52VEeLbsRxWUuBfC8kFfJZH9bcB1rWd2f3GywvWsEDLw8m1XXNZnazTK7MoY1wc2JtLdAinRxNZs7HGq7uRYXa2a",
  "key1": "4VuhNr2mwKtnNgyfUZSR6ZMKfXfPKXx8XtavWw5E7BpK2W413M6Anc1STTa5HNLSR5E6k6jst3v8MLtaAn5LrH39",
  "key2": "436k1g3L5R3DZtvQXqjdoeWndVYVBsLngKphBac8L5tiLtNjcU7BBb21srFk1PjUCNwvtVnweHWvXvFshpJHNa41",
  "key3": "4TxggJR5nhmM2wXkEFuiR9Gw68uoco5rXQvyad8EMrsnj3pwtd8ZZzedf4nUwQA2a5SrAc7ePNHHUEbN1aLJRw5F",
  "key4": "5zWYav1gHVE8syKjgrEfxkQfXKGL6LYNDi1hHAWFDS1gDKai7w2cnT1s7ur9aBNXtjArPn2DnaDKAprJ37sz7cJa",
  "key5": "2HVsvPWdqqaQFv9him8sbW8cLMaG68LNV5FXCeXaSdQz82f2jCCMUpRWnFXevBUtXyb3HgAr2F4ZSYTTqzmCvNvP",
  "key6": "5crTrAg94iHK2F7t8eLSMcK27Yf5kYnFCy2J5tvjj1Z1P88mjXZUHbiz2Ss8XC4HXq49VFGYzurKnNQuXbusS4n3",
  "key7": "4Cuq3eYs93R57LBHL9asV8YQB7JgU7tjn2mNt8ZaAwW8AngXReGtWXBzZX9fbk9anDdU97DZjnCV7tTXphm4NXmA",
  "key8": "N1yVUTyCrTd9GayF1ZeC7EX3mfW7j3YvEzipAsM7E3uE9dg8q1zVwvJLdAb3zi7afyEBFHhy7CJUgQbZG6yDRu2",
  "key9": "27XN7uM1mZLGuoJ9JMdX7F2YzitgGRP1JP1SrajGPtjt8QZ142ai5dkewK9PLuo9hm5YpZcnnv2xJ6mpVsQTc4U5",
  "key10": "3313n1BH3RWt6SvKAgq7xvEfTmNgFTYgWAP9J9trE4XhBSPMo7rPs5YmDsypj8b2dAT2eSdmGdXwVYGJ2AWny48t",
  "key11": "3MWdnfkNZVzKFp9EBZrMEQZAv28bHt2mZG9otmNxVti9hoM4LYC44fNe2J5zcJX4iGm4EfGrnDSgY84VjGJT3PDu",
  "key12": "23q1pF8D6qPjkqV1c22BuMVBxad3Ukp3uSY7c98zuZUVeHWeT5goQBm2xXWowrcv2qq9SFWq271iysFXVnF2Vdpz",
  "key13": "3LQ5ptp1HbydbuowVJusJWbEDpshj8HvjgrjJ1Vv5T3LaxbohEafzsRd6ehMWPY1yi8cWrye2R6Pd8wshPRGxAAh",
  "key14": "Av4XNCH6jU4SvCgUL9J9ApXqiaQBdutUwnG2CdZaFMBY62e3JLvoVFJcJFgT7zfxQVKvvK2SHpohg2X6pigpwMM",
  "key15": "51BBMZQiT1MdEiRo242HDV8hWDAGERh2w2ZGbqcnRRXA4bVhC7gE9atzNDK47GZiN32fuWSVkrHGzF8t36t7dVu9",
  "key16": "65gPS49qrX2csbb61QVu68UkE5FoQTGivBx9UPnJ1grcpF7Qf8JDiaEnmMpSUXa9co7a2XD1szsutCkAfH3AenDo",
  "key17": "cPcKsLa6rkXePksCPwPazF8k8DRFMkima4SNdXJepm1VZey9uDSjbU83GPNRaGW8HEXQM98YsvwqJv5DbEMtJv2",
  "key18": "59butm8gFWBrtZMSxofNXoN1rVw4TivuMspWdcuVLJQ17ev4G5X3obJK5ifxNvKBGjX2ftcyAY1jfowogEZr9TCg",
  "key19": "4cEKRWerQMq27FyYqFTpteMRfkdtU83exHRNE6vdcxY2xaCEEywRWGmqLxMWXEWyUkqmZVRPEbAQp7gt1LaDy2Nu",
  "key20": "5KdQaJ9wQ2WBu6zqY8uUpJCXgVumutTmtcE7ZkSJ6aYKQt2JUSjzJJjZL3cCVuwjUhGGpuevrj2FPZfzRZYi4nSn",
  "key21": "mnuwMCJME6t5wAyRrWNjyLuDHUDx59B8ArZs5dknYzwBeDkBhqUGW1ae92CuTrZQRaepEkFxJYfzK3L2RegXFb5",
  "key22": "5B2iLqBkXMHheBTewEvC1LpGMTba56mJm269JEU6UDh9Dc4W8LakMLthYQV5qf82AMG5FiySEZjtZ2ZdCek8frsw",
  "key23": "9E7jYQT5G4UUB9b2nWikRrHyGNUcg3y1SxWSottoxSJTgonJ3aDKU3FaMzXPotMaLxozd2RJdySHroECRWbajqx",
  "key24": "3GwC9JKYvNjfBqu9TbfE7FUwkrKFQtmwqwsze8eMWQmLDUpjWomSzR5Ec2EKkFjqAXcY6HAhzGe5Yvh1aNmFd6Vp",
  "key25": "2i6PJoHPrsz1ALKvDCR25nCx7T88PCrTqraf8osiiUhWeekihonu5W62uEBRHeZ4hgw3gQkBLrjEhkz9f9cpTTNi",
  "key26": "3dSP3xrYWLsw9Z6X8RwAyikJAsEkH72wpLqDXFm1kmxsJyip5idC1JsNNxxzq63ND1CU7q1oscxhMugEeC676ajK",
  "key27": "yjNEC4sL3wAfMMhJGiGy5b98gXkFkVxY345pgBEnWQwGCE58iAs49nU7MdqEMWm4rf6f6TCobvmBsFA3z4g3vGy",
  "key28": "5AsnSTMeaw1wJdmNiuJPK2CCaUZDxH3j3aHrvrnAgFEksD1AQqswjzwWLntvqywWcqFxDpKvQ7RNPxnYajRPs1N6",
  "key29": "4sMAg86H8nC2Map65hCKaUqpmMJwxJ5mwimCuuXgXkBJJtuK9J9H15P3aYXGifF22CDVR3eWDs9f6Q6mhL6Eesvw",
  "key30": "4GpoAKWea91YEp4RjhUqjMDJpiiA4Bdf7DjdCBLcAH1LeRugvHN9o53ntQSDw3vbzXxXV3VjBGSN3qF3qwThV8we",
  "key31": "3qRxt8vrMTw3LuuzBbJTqkz8igQcsLMq2JtCdPWnAYMxo9s8L7RoB9StXw99XP4xPhadH834zwFWCszsFhwMgEbe",
  "key32": "43muTXe8RaTVyM6Vy1f5pU8Sae5TrKimtx9BsEbe9T4T7TRKqm5rr5ofEyvpwmaJmEspQsp3C5ZunAVZiR67Qp9m",
  "key33": "8vC7A87KJdJVknYx4ZC9NBFucKz11qL2kEA9un5RJrHtVKxRXhGAr31Ep2rACv49dFyFBJpg6jfx4uNc5bLLKan",
  "key34": "2b5rMmBcPVydKJ8AvLv27JpepUiBgydNDt88rL83Su4kJJJvxtcQNwRX1miDtLBxTaUQy5bVofiypxyprveq5j8B",
  "key35": "53CKVX5rvGW5qs3E5nBjPW3VAoVfve4nAuSKCnZehaosEf5sqsHsAU1yGakpdYzvs3oTt86Hv39YC6dStQTizta4",
  "key36": "Kjm1G6iG5DcK4xcXieWTNGB5XzsAQce9RVEB26pE3SGTrYor1udX1sM92wXDEAvBNvRKoatm8YjzdQ1ZWvoniMQ",
  "key37": "4pggxD7dwsfDGyGeUjFwXhKAGQbb1GK85i8ZQVNiK9jnDgh9ZzB1PCs1zoLaMtwZnuUC8cZPNh1282zrXHKZL4PE",
  "key38": "51Q6QCKrKDysav93sC1zN2Y8zR1BY6ptGjqShKdweKmy2w1zVvQFE7ebGnK7EP9zMTnLHgoPyioQPwDHmwNcPgvv",
  "key39": "5TZARvCL1ux3NhVo7XEgpSktjheBaQWNiuFDPu6dtuev4MEdfJsTeFDYUvV1CxKSa6NRGE6BmPtAWe7G6ixetYi4",
  "key40": "4JcKiBvEKj4rZjokgFLuVVChnLMXSEQTVp1ojdjZzfDXYdHT55WtBKwYGCnXSuhQKRzcLRaiiG6LNfhevW4hRGbY",
  "key41": "2nxfqVpdCariaWaGGjynyBya6oSmECQowAsZ81M5LcDTZAodaMsvYdTuhkfPzdzEvrcZT7czLAeckWx2KmXBzTBt",
  "key42": "4wQNGQf8ViYs2xTBy7GSVnT8JDAAXQWe49mEFHufg969PuuMZgFvrjcivZSRVip36pEnLNfEdsrFNh2vgwfXgnaz",
  "key43": "4SFCYERvi5h8EZ8McKyjNZwJYHXonTHc8wGv9de736MWiyg2xDaiQkmz8dQDZqfUTeATMugenoNr6un3dZwzrcnf",
  "key44": "3dMkDPW1V9md7Xa4Zuat375Ppq3WvFucF6EAi548P3S3xok7drPY8KwfunGJ8MqkbGg3fdWjL68fmDREaqPEjVMC",
  "key45": "3fzCe26GaRfyhGvKHKQxieWaULBLnWS9v3rTfzNtZhmAJTfyTqfYDTD1vpK4uvrbq3gYQnNVZWqxZr8sigtBg8Pg",
  "key46": "597ywoEcVsrgzXpa6j6bfZqaLpfFd3PMiJdpyX3DU7NNaPqzMVTgZBJXuFriEFqq2TSzvPx1FbgyskUvdMEMScbr"
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
