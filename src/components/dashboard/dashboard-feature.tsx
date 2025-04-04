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
    "3UaLNVMuqtrmn7h4Phy6RZYier6JjtYZFRebteCtm8cPsc4TaWzLC8zKsJk1fdFVx84zWwpsCmYppa8AQHjcQfYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2izmyoK427ZChjQVEn56cnrDccgjJoRy5qzqa7NZxeVMLhBFkgoZ2gEmZU4ZwUmp3sAbxGEhVszRKEpZZA6rX7HY",
  "key1": "2Xb2jcZ8mDRcQeRMxToF1KFAbnKQb9zuXu3AytXUPze9T4tV5DbpygdKu6WXZc8ppXFDtRxuRJQydQaphnqA38DB",
  "key2": "3pfKXNm3X7J4Ei3y9afS2T6uRdeiQ9i2tghG1FabyL1TXcbgufYNSKQbS1ngZxRqTdxjpryuQf5fZxnxNZsNZ8F8",
  "key3": "2Z6Qvc2D3Lt3GALvEu1XRhrB8cD7n9VRzt2MMySj35hnP96JVq3gW2vbrzkyZyE6VhK2Tyjg5YhpiGRsuZYqAgxK",
  "key4": "54ELBBMNXCSpL1NGhWZsTKBtHDbXLwXyCLQvNXTYihERnD6G7Tvff3BRcwKkQcNvDHVapsC9GavXBG4ThKvMjWa2",
  "key5": "3jDz7W1R1cu68HJZ5xcdYHJyu8qQuV8jTXXDSrk12VxLZgrfuEajuP2Ck1KVn5Dp8Lf1dhoHuD5v2oDj1jxft83F",
  "key6": "5dvBLkSe5JRe9SunTCKK3cmxW6c4m6aGhS4daKsLtibvXrzw5WkgWriTHau4g8SyAz32sD1CmMXa4ZrqmReT3oUF",
  "key7": "8cNhwU8Vi43YmcSqgzZasbbfPuoLtnhREBZ43V6PoKqzNDkKCxymn1CsMjFoNDEzf2qKrCCUTpXAeFJVH4J5wGw",
  "key8": "5n9ZPyVynRQNMT7XKfTQjGkd4BGfbJM9eTJKh7LKbUiYzojbyoRv6w5yU79T9L1zogvXBf6YEPjh7JYnnaFC6QaS",
  "key9": "YN2CnvH9FSnn43WTEiEzYAR3TSZR9Ed2DNLxzF5poi6BoYrprayiPn1rSLi3B4zJxxcfKUqP7wEhsxYzcgYKR4B",
  "key10": "coYdYNMowLoR2MLH2c2FkYi1Z5znjEiYz8nZSe1hq93WFTJbfNWGtinABHZcaunBA6KX6uaWiCZb76sUjDHqbxi",
  "key11": "5iT6iDzbB1ACGEtufUgpuY5brgCaPCKgMSqQNwRtmHmy4WJZhpgGu2HyHQBXmnPnYqZm9y9xSXCwQLzbghe3qDme",
  "key12": "4D4vDj85GvVhtpbM6d9jGKvX5b7hY4QvoAuFNoctzEfypWyoA79xNKCZ5CcRMYuYzSMqR6Uqu87Tk6LaoRmZwDUg",
  "key13": "2rRUj7q8c2NrS2rMXVjsF9beNMUjAJXSVkDDUf91TkRTM3JGvw42R3uG9B2Ujr8fbKcdumRW3pEGNDxko3wLjAkP",
  "key14": "4eXwmohbb6SjQTpb9a1hr7FVm6FXzjDzT3PxRerhwDoYGVUCjRaTGBwDsxEZnF4QEVvK6YQ9hVbMbwy2fJrcEb7G",
  "key15": "32ey66uduFnz8QGbA89Cmu2wUCcx4zRPuyMhGY7fKV8B6zDj3g8QabY8CnMmtiYBHw7PpZcEqiKmaR8H4wjnY3NV",
  "key16": "55WQHvMYBRkdYTdcYWrYKkSPPhh6NK8qTwZmXExHfgYqaphYBusKySe9jXhasgRXx3mPYfFuAydb8YZTAbFHNMiV",
  "key17": "3y4hpMeYRv6cGAgRhhX2oje3bGXbGosK5kCPxyKJaW18N6B6iJsBUC6ipX9BqcW9LRa635u9ehJFo96a4zniDeXV",
  "key18": "APtbCvi2QwBRfoxNSxbAxGFPvATBGCkqjaLACnv2CX7t2R8uWoTww3Uf48puo921GZce6wSH8wepthviHDvkoBy",
  "key19": "2sv42QuJFezsFszkkKZaMD2dy6k27FCzxuUZPqoMBzWk5h2Bg3riLouH3j969EUY5Z41XojXcYdrggZ5upz7miqs",
  "key20": "3NXYWTxmFuhj7b29r2Yprgr75m731jnYLno4gPcWVG63kMueRPpb4Hh98MrfhmuWbhpf6uYwUoJ7XCF7u9rQuXWp",
  "key21": "2asCLvCWuPkALETZh3MvVnN5XPwuA81ynKpHvXnfG83BchRokkN1r29VYg6fEFK4DE6YRza5t5ocKW4DLnjQWmYj",
  "key22": "2rW14wj8SDybpPJhRfgZRkUYMT4zDrWjUJErbJp1SWcv2jGi3sQFUJ3svAiEdyZiaBbMMw3hfaMks53tkTrJD5y9",
  "key23": "mYesqK3iLxpHDsg6PiTUwhp2669qundqQ5VWgKfUof9m4zE2NmpHLeFHM2duVgizZGkEsgKZdgcD4mDN66yNURV",
  "key24": "4RxPgJGAmipLmTvfGeSzmVmYGAProangpcTAVikLTgzbWSvjTm8RSqpiPtSNToNT3XAQ4NjNovQ2j5vAQRFs8ULs",
  "key25": "24HdrosEWTS5hbVqSSbiQaebME8sE2fEvBqb4kzBo2bJWx4dfM5GFiWkTsQKhiUtDe516k35dVxLvSLaDD9roMZY",
  "key26": "xd57DRKo4ovdrQNYyvjwWpp7WBSn4Ya27aXqF8Tw7pSUe1BvjMfHt8cFqy7Cj7bvusm7DtHbiviU6V7QrWbK2aJ",
  "key27": "2DHWELsdgS3UWHohT67bafkU6x92qWNMcBpUkXLXXSrymTZvaNN9DdStZZeSVB5UQr8QgwrKCt7ic3LHZSAvqd5i",
  "key28": "2EoocpuofQdRNXEw5M1fM5ahiEWjrJexJFGvWy7oETGy9QrDeXWkXEC6PidTvDswi1FVpBkAup4DPyA6mFQVV6ac",
  "key29": "gw2HfnCwyT7UPWkAdi9XbGh63JGBpcaUP5aQ6ZzTfHdQUbsWdBJrTq8QZ9oETmiEtzevn4WggGRBXz3VZapstkj",
  "key30": "3WEmRWZASUm8Gnf31zcqFBpWRQUtZYJC3ca1uE8w4ogWfCY78g9zHjhVoFmYCHsHXLt1Ufn4m5gjDzUu67cGoTzF",
  "key31": "4XqsBrvVrteauwdk9oCZwUXuoUeE9zmzWs4DPURRwwXMi8Htc6WBmjvPkN9T7aNszJ4SU7o8HPF4ggdJ5HVMJnxj",
  "key32": "5PhoxbhtV5eo9JAptrTap71K5mg5bC7mZEBBkbvKoh5kg6m5FWtsnh5gj4kJrenFWVAZKZr866MJRniGFvfZekVq",
  "key33": "5Daxd9Hh71G928TUyDLmo6L7rP1NhTHV2tbVNpEtDDookxhy5t1onaGR9ZpWfTyLdBCtpDFB99WTej8hRnbCQFNr",
  "key34": "rEyQPKjvjWKwFQsS37Qf9i7KMYkGazpRfVhtP2AUyC56KULYicaESDUrKismKs6k5Fx8syZTKsF295uqbShHjKF",
  "key35": "4tjFJM8ECujknpi2H1eGzaPuxQC7T3tbFk683rFUtC9mL8TwRu2d9ugmQnzmMyh4UgtofptgcwKwcRLGhjwWnrNo",
  "key36": "5GXvkN6ZKJxVVjQ6RtEcn6vxFv1GocUDATXoMczT7fBr8hBFcyJHvMkaYDutrbTPFxd1MAAMoE8Cm9ztuBckzom5",
  "key37": "3Smj6NibJTCUmqhKtEuEjzKqvtNgbSsxj3E6c7Tirmwo3zvuFWqJsKKwMGeUhZ3kiizgSZKNhZGHv3JpEmfNcnb7",
  "key38": "3E7CQo1uh7tcaAQBuAyPj1cXTvckK32QaaSEJjYdmnahmzMxxp4ZdJhooEJxrkgZVLd3bXcFKeECXeEEs1xH11gH",
  "key39": "3pUb5uhegr2w2Vua3oR8caNwESs96G8RkZLGhyS7kP4muoPSz197Bnd84xaf1amvQUpRxVzDBAmxeNWcBmDR9pjk",
  "key40": "4LDj1oFMEjyLjNTucvL3hc8nV25Nkg6eBY5vXeepqHqguHPHyrRMFKq6AbU2Qu27suMKTKuoxwAvEzw266kvEzwz",
  "key41": "5u2dmR4g649WJ8epiaheexraMJhbT4VcnFWDSxibSinRei7txGfJ5FnPnczTPNm1M9SngP2Sna7WSdJBG4BvgqWg",
  "key42": "ZS2k38Wk7p8mqoA9RdCvzNnXH5KyQLqS3QpVCM2HAjzmwk1P78Z8tnTXrKPZ14CpWXMSLuPFvow5CDTQtrJBQkQ",
  "key43": "qJfNToLA4LvUmdpcsuvpLJbx6d4cCo4oH3TSTauNvc5hhSx2LxoDEZHjA385dj4xPdPYvLPwFcdx6sstexmC9g5",
  "key44": "3LGgWspkp4fUm3yadQohBbqrmavndgEB5H7rdqxQ7jCRtfZQoGw9hV3o3d4Ext576z1sfSY7rJC5vhLPjFVSeZ6b",
  "key45": "4FPBTwPyn6Cj29QdZD4agewB9jRr5Fzi2c2GgupmQmMw5osDyVhrYqDcRbgTEfEoRWw7NeFWs3bMSGvjzYzC4vnZ",
  "key46": "4LuHAtgHrieafanSb3mii6UrcoCCd3aJ3aG6cjJy9oZTD6jrbWHMoFfdweM7i6FpdkrAn5RX3V2uz594QQbijDVi",
  "key47": "3RqJY3ncE8roAVbndVQuzKrYywdi4zJioEzDbKhax9MNmQ8QRPF7y1PsweDAMvWgE58aFVe3mS5PN129ZGpEYMZz"
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
