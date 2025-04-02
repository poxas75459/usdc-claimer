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
    "59NDXemF8VWttJFwFpy8rgiaWfKRjk28w8YMAgCentznUTTiQmVrU7rGsQkvG8pvTukAxyWpDPBdptYU8z7umcmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wmX2JQutFihsFYCpZQ3hjhTYyPf42S9RQJtCDBTgqfa3Bv1R5odxozPwrH7zoPL9kcduquB9J5Dg7dEmFm7bTKW",
  "key1": "SxHptsrqHGfEKgoFdRooUbDMhSdKnGM8N3YuUjtNDPypxdpc4p33sLwgAveWr5XZKDGXVyWNMWczVoVuvDrFjGm",
  "key2": "28SVZ5W8QSKuVr2MEQp8xQK9Co2xhatfXMCAw4GzFrHYdZRTsY55Zpnzt7oAna2Yp2TkLmCQV7k6oYfni8QKrdJT",
  "key3": "5Gi7WEbTu6GR4hFRTgJdmoWCfvJ3wEpVCM5NmKPF1vcDZkoYqxjhQZT1taMSKKXtaCSP5CeNLG49q4Kjn6ugn1zE",
  "key4": "5mfZLWJ5sjTt7JWG48BL3e6xwhU5E8HZgq3NWvw74jHiFWmVxPDGTusJwwbC93KJpCbb1uBHbuGU1mKKRyKTA4HA",
  "key5": "3ijpYHQ7VDaytHHhGiw3nrvm1PHne1x48bT9vicsBbfc7wnMrPsnqqUasMf4kykiL3E9sm1eUYSFDE5kd6C1PXMJ",
  "key6": "x2cL6QdpagEDM22MNuuy122kkBLYhfMggTumT1EiGGkPc9B9P9RRPFJ3Zvh13sd63W6dw8ezWfhuoxqUQpvUv3D",
  "key7": "2RNEGUwsPXSQczeYTWqUgeZTxaDoyA2iE4mtVFQxmT1Fv7eRQok4ex5zPC1GAS9pDYXf3cQANHUigsPsg3fFxNMn",
  "key8": "38tnNyLUrDJctCXnZqb4twjsJKQvbPmU4SUQyZYDJFXYqh2zfWv5ktRqw2sABjFujuExyzBn9gVLAdJK385ckooe",
  "key9": "YmrULqGtf1yG2pqFXNVwGESc1uiJntormLLURnW1mS9DUjesHW46pbeEVr6GrVmhD6SzTJi5DxVfU2vri2CVuYz",
  "key10": "59mqcG6cxDZfjCfiks5FuwcmrCfeXpuxZaRQN2tcBfNygRzRwku2fVFduPnmK464Sb3nTaHJh4tyKfVPFsYjbquw",
  "key11": "3ovmhvaj6y1CgVuT4Xai5n9FNQHjMtEMx9fCfbGM2asNxUbGHFmrJcxVoa7che1uDu2ovTqKK8wAdcGwnvBdWZm4",
  "key12": "3e15q2KPvSefEg3vaB9n9L6AiVRNYp31fmaJgXYG2kxJLExVFuUGMsLPR9aGuHQsMWuTZaPjArmvB9RJMSfKfKzi",
  "key13": "jsT7fHN5vLNFfx43GKSQJQPivFx78JjDVmYVcQ5qTwMfDLo8UHezupik6isy8WfYcmzkgLV6t1BtvcSiREx5vLb",
  "key14": "fKpSV1G9scZAdDHwMQN9sd8Qg4N8qFKCCV7CJJxLeYhyvZPH4rwQaYDwbsirAknD1JgRdJsYvk9N1ZHX6VSq3gK",
  "key15": "3pxuAS4LLUweKYG3sUML4foz1jWPEqwcez9qSR7xWtkpGygDSRdKw9nDN9kmkUDBcfccCzKq1a9P4RNZY1Gv39YC",
  "key16": "2NASkirj4PKtAQWNNGzWurrBkjW1mJ1tuBDrv4nU8HaC1G4vVE8nyvDZMdvEsVvAhHDZkMKGLMa6NxycEFaYFnyR",
  "key17": "5T2jndQjsUumJgCpY8gRDTGEd1ZbLN6PEzKCjmPmZqbqW2AD5V1kXN2ZhjTNwFawCD7jYwH9uiGAm5mk2yJA4UjR",
  "key18": "5poRJ6djTgTLdjCYPeV2MjxXZ5EXxBnTi8HDBCEvJnKeLtkTEP9cKTmWELxjTapaS7UHoiMypKjgVpGgXwtDiUFJ",
  "key19": "5cqg8Uh8Z2CEDt7mkoPTA4D8TxSmoiSCk1DCEgHqbfVCybzwureEhGanMg5YC6wxZUPKNAJefXS6FiN8sahdAGHm",
  "key20": "4HHaAzcNgiimmw41EvfCFQcraCNigv6RzhXvjwKB1tmP737HCtSyHESfMdDP861Mwpv6fsQoMVNos8ApcjfBzKP",
  "key21": "3Nq5QYYrGYVLd1KoNUNbgXSLHxGWxzTXGXb5DBokCeAAie5XiRVP67eTshErnWMVM9xTTX4aaMHXyW6FFNgMWB71",
  "key22": "5GX6outrtsyLeK4j6F1JDrVeHhvcFJEdHscfgpBiH2KFyDbn9xCzXsFja5nCgBfqS2uyNDTNLfPTdhtFSZJ5vk56",
  "key23": "3bectSoa79cLwas9pFGJuWtkgTxh2TwQxhXVKtwohhkM2SrvJxUAjxKpgCTecCDu4qZi4GUnGgbTvD7xaZ5yg2jS",
  "key24": "5aUHqkUkV6AKpNyG1DAWfvC656Upi1eLYdHTAHgpcaVatg3UU6hy1ZetVeu7bQEHbff4TYWnuzEV65fBHVpoAdkP",
  "key25": "K1fJ85JvtALcnCF4n3GZDhzhkWC2aeLRQXvDFMh7rmLNSUetXJGLsU8EPkbFcoiJs1Uvy2YKcGUFkF9Xyw6bc5u",
  "key26": "3d9KcjnU42AJ5s8J7FG6PPbrZLBJZoHWVkgD6R4bKV9Fq9x3UMzWHPfrrzJnwMNFzdm7j997x6Gfv3Wxn2dPdtA8",
  "key27": "j6rX38GJ4XB7Lcf8aGYCQiUGmkG7TecdAbQ7N45B2J9U79a9tGbho2Z9GhUkbtoUQupFV8aYxFdEDRhb495B8rh",
  "key28": "5gkG3szbL87zhFjdLfHf3DpDaKXSx3T5ncA6pDBsy2GHjTSA2RcyKr6JaCogP9kPz3uMu5dPAvVRitggqXvaAEzg",
  "key29": "55D9ABoukZpy66ed3npLrdf61RysMKEcjypHprWvqs7YqVcaJj3prSieTLfdyd4DKGvEPQEPh1j5FFwHkPn25Zxy",
  "key30": "4pnma4x8owPGyX9qeNC9huq6ya2LZu6CF4RNrBqLHmisr7aTq5KvNmw9NjzSJj6zR1rjcQ9LXbZz8q9Sju66RtNr",
  "key31": "2j4P1gy2cjNAwVCzyoj3A2ynLpeLYUWASb2LwQ3SMKNPwLnkdNarevDqXic7f16axZUtV6Ni6B6RdaWaGHssrDMs",
  "key32": "5ci9bA3ktvgXm7wX6A2aCW5QThRkakyrMJWR71oodjEKLMZPNmmSfJPWiZjaTSEYhQuZNmwPm3QNt8tBwTPX5cAH",
  "key33": "2WM21ZiqBsvxU4TiF5vJrYtE2prdNRnfkdcrW5MV27rMvsei6ynfCaW85MxNmcYy47rcEByaoA7SMwXuaXGw4gXy",
  "key34": "5RdLxjS3Nvt5TxjM7AT93uFaZ7cLTX6ZZup5sV5aA8h9oJUKSqYnVMJQ47V5WFhm171TJzN78EA7UEktsRjbnPgb",
  "key35": "3FzYdMrMMJcTmkpcUH5zYDEeLNcdwnsccYDXTJ5dGqKXYkC6tCLSj2NbcFL7mngEL8hfH9NUKHZVJDgNz2BLE7Lp",
  "key36": "PMXwyxYWiPaLPYsy8TrnzgWXANX77GtyKawDV79bM9Wz79PqwuyGV3PQNZX2HKvnoZGna7WdbyeyJhq3f2NwWyU",
  "key37": "4tj41nC61BiVquNny6u7mqKKnVjnoDUKYdjaVw5gxu6pEFePfUKzmYu5DfySFeKb2F2pCzVQNPzpmGCc8yYJMGxD",
  "key38": "3unAu5FBPheWkRFK1jtmUvE2KSaWzt5gjEeZmbyZAy9MLwkTw1oCRa71Esrn5fyTwNcmg6hqhpsbkNkKCU4cKDUV",
  "key39": "89LXDefuV4V9LB7qdTL7rmDaBsrBLQ5H7X3Ynbdf7q1qys7N3uAsLncqXNjin2uLZyQe5GGBrVLCZxUAGCDnAbe",
  "key40": "54ZSc19K15rrdpCuuCNnkL5p6TD5C7T3DXasnnPSVXP4GFsxEVszGLBfhvW24TTVu2SZD3Q9fzJEHwmp8zzrKobd",
  "key41": "yE8AhgWPBJyxrTbfLnEHVJtHAffMtwAY6bNgYjn6moqyNERK186ezvLZgot5MKymcD438kM8NZZeQLT98w9naZ3",
  "key42": "3nJoohAhn5J3nod7aEvDLXZjMWwFqX3B6sbR3KakoCA5sEqcMBPB17YmBdq15CKLADY8qXqdhhiYjC8xwukUWFcv",
  "key43": "2jcpUkCPPjoxV3PkKFFGoe89W13WXS6LpGd2cCSuVLvKeqcE9XrDSCVk3vsuc99XFWZZ35bysieHtbNUMZx1J8A4",
  "key44": "4HmvRnVxBe2NsVWd8AhnHtQFJtWdTvpmPKPiuWKymJTojFWEBTMv5hVZYHUpL7iGcMXXTHJe4X6ZVYxrTDQ9XxuY",
  "key45": "4z8jzqbqpQWtQNVp4mPyuswjEeUzqoW8LuiuP2d4Dq3Na8LUmXEBfYGVXP98GzuckmTcewkNnXVF4Td7ivR7PbAM"
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
