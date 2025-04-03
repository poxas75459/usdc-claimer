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
    "3ZN38Z651PaQivQuPdghJXEj9nQBupZm6d7DVXrDHkHK3LMd4Ci4AQuSoZBBvU6EuT9UMDQ4Vkzr8vVA7VXbELy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HgM5u2ccu8TEksvaSxd6wUMSUbDJdSu4eoHHP11Bd1dCXqY4sPKQ3F3xFoMrKdah1pb9Z5Lq6quCoFxmkbcXVRY",
  "key1": "4Jshmc7GDFBYK1dYbkcaAD7jYsRDNo8D1i9GvhuxCWBzGhjFEwZtr3KSv25iDat9sR9dzyPXKftjUwCatqkCsgJm",
  "key2": "3md1j78PacjCv9uSXt1tcV1JLRmSDT11CJ2fsyWdNZKtfjTYwGS6X4zR382Nx9PNxXhvWKN8WKSBEgpo7M4wSuxg",
  "key3": "4tVsMQCWGumXXVFTB48VfVtcz9TtSpUbVeRBzcchsUzzzzfSjR6uyQ5iKPkYBMatpsvmF7HSxWqBo7wg93TyZRzs",
  "key4": "4zM9CHS3fhpPxc92N96o1RuAtNzxGZ7qd8uiRdaVgsueyfKMMh8gpGwEpjXfdfHbCSaqHuZ8HGbgbmz4zhq27KUL",
  "key5": "5ewE39BDbzZi3xtq8E7Bzw72EATWfv2zDAt1hi36GX1uvCryx67ibf42t9YoncgSEPVozDNYd3hLVD7owRipGuay",
  "key6": "3XrEzWvdNK8VK6vk4rCqt1x4nS9UsZxXTVWCzLs6CbAqt4zNQudhSxsqhhzcjwg3qKU8VWtV8nfs2rRhz869bthV",
  "key7": "2tM4BewcQ247KGYzka8SZpsvpbkhFDXfwY9E4f9xs7wStbF8yomDuVyTrDJ4gUNcXH2eupYsf9HbovrUjpohk2ma",
  "key8": "3BsUcDEHJn7yamCSPb491S6WzZoYmzMwTRxkAZraubjrSFiQQSWdKCdfXF2PAM7cSM35cxpzoKwfK59LJesXGnxe",
  "key9": "3BUFSx35wge5WmTkMeKJzL8JQeF4PxVLTAaUMGxz6NLf5HRYKy7ABdYXk1N6hx9t3E2orzH37trpAn4itCX1rMgt",
  "key10": "5KowA6QgRi81S86b6sEtgzEDApUpfEHZuhUTrRraFynQVPUH8PBETjp4zxCmBW6R2iGR2fKhSDbtHz7EtESaKwhC",
  "key11": "2FeWuVCpzYtjusttfqevvFoopoGLJpXgRn82wjy4wB2PEWjHjywxMKT4GfAA7jwHzc3FCHvxWfJM13zEw5SSQCU1",
  "key12": "2CkNPbE5kh4pTpFHDmgyHQX6ZGYVXAr6NaYFoco7wXYR9rRT9Bd6E6js4ZbqpS3ED8bauuYtUPAvqh6hubEDdibx",
  "key13": "5A5EjDp7a8iWnUND8NERmNDUfzgNaQjdUL3wS5cpP7CY3fGW5VjDaUXqYPQhZCwuH9upVRW1EgDBEZ9LxaFexSs7",
  "key14": "3ejker7TsYWM7eMxH4wXAsZqtmCRb3AT4Nm7X44C7AmujtKYoKKBNsNKbej8LE9ybxfcN5XNHsAiFkwwh44A7xBF",
  "key15": "23DAdSBM77Z7k1w4ymsbkugkdifHNuKJd84ScQwqCjZq6GyyFZwG78mCgFMGBrtSq9tDt2E5RyrqHgbaZHmMNZde",
  "key16": "3Ay8Dg3cuwBtVF9UtHSnNL7xHPTMqV8MQQLPBj2HEEgMbUB2itzd6pcFVxVGN6WqFduWxRBcqVjTTpdSNgXe9hXw",
  "key17": "3XCqGf4vqnV5cMwLHdDaZtELnLXtkzc5kB8oQdSh1XKswXre1mHdTDVS44dvy25fMHAng6U3Wm3wepAgi212kBGA",
  "key18": "4a5PT5aBnx5SdZLdkJbbHeCArek6a92Mznvi6HjnQSF9xb2t3jTqYGz7PYAJwxcAcWAbs4bQDsZQknGjUoWxKPw4",
  "key19": "2ByLpeijqgpk1SfQZL2yWUKEiYenWLbXPUM4owF5tm6dSn2jPMptTGFZaGdhPawNqvv3AmNBRdEcG7QM2vxLqt2k",
  "key20": "5BjsHRKdY8Td6SKYqytsHg4eCuKXRRHnyXfPsG8qQHFBe4DnkzGUfyjGcdiU4tYs5cdU9JuuGpGNizCqGUwcbuXd",
  "key21": "5QCxS8DV7YuQ2EBxwQRQe4MHvbwhDY2FTzKQMjakJNPtRZaqMVnfZNVmBZbCWrzKULYcezr4Fg28UC2Wt2vLWjut",
  "key22": "4QdvrAtEM6sieBHLmfrdhoCDeRbBvskia1meDc7XTyY7ET4DgDTmZDGUFXbPkbdsVh5bnSnJjhPLYzQ4TiwSwx81",
  "key23": "4LNYm3ApBTVELwyjFMPEvrEKkH5SKbugmos5zyuHBRRTiSxddX5tVupPi6pmVBdMEA6DMvEDB1ghNktfmD3yuXCX",
  "key24": "5vszEgzY6oKHjJxPVF5FMH8CFt9GN1wxHwtvTAsAuxoCmkiPo4ExTttYRQiqZUm6AvGTm3zRr3WAP8S3XAdHz3pm",
  "key25": "56Z9C7iGZYDYJGx4MGWJdHU5UjD3QrdoFLmCo2y3uVLMZYjDQGixBCW9PohtwzyKmRXZRyXmEWveCEMrFWFRHcsP",
  "key26": "28qgPLc1bpkucFFvfgzXVPC9jUJTCgxBKHaLSZSZ4VmS3EMyoxSsHEXAraWMrxzkd8VnnBDcuqXBZkEN2uXn7acM",
  "key27": "3vkP32u5yMYwE7EReGdRfsN71bED11d7QSDcMZ5DYR1faTCgze9MvR4tizAWhUADsANVN1oUFN3V2HADcMBKrNY9",
  "key28": "4Ur9WE1Qh6f4xo81fWX7xYS4n8MwnBc2urcDZce9fDUynwuKnUt9eM9YeGhPrVK2UhEoE9J1U19KhTbosaThJNGX",
  "key29": "5mnWgqxjNToAszCYqiUbXv1QNZd9diCpBYuXdMfuGQZzQEKF4Mwx2xGZKBTpiDdGUiVxEUMWizwbFQhmM3DNtfbH",
  "key30": "3CqCkLGsCqgMxfaQk8z5C2mswH5wMX2ZkjfBtWWseV5MjxV6HX3WrJAfzaE3fEo2YunQT76424cCKmPEgRfc6X3i",
  "key31": "3svtY1bViTd8VWPtxTdSrBq1556f6rEymMgGFHw2j2ZNNprqLJw5LdqLvQ4qSD5tMmqvoBRyfsomF9q8eq9u2tea",
  "key32": "5PNCqTgeTmNdy5Gtzkiv3kfQixBZ5xMJP4jw7ZcghrfqLKAcvXKbkwShSt5JzomNMPLiFrXgHnZGXqLi6CF2qp9U",
  "key33": "5ygWNmRMT1W8wuLAsQov4Hygkx1WaTAtspz7suEmXivdg6Mb3owXa2j5ocR2T5ekQYgM6qQJttMuPprKZV37xxTp",
  "key34": "2vtShwW9df4Ke8JEpUJ3jhW9DdCYYCPTLFHJUkpZDjkiyCkzj42DMYXp7umYvMHTRJ5aYjXX7YyVsZLtWU6RU5qd",
  "key35": "43AxS6sCDV2e5QMztx47zj4KrqjUtCBuZHwEF97DSu3KZQT8uokK8dctMwYCrTfBWhznUnuudi89fBGzo6inUTjt",
  "key36": "66iHtNw2d5o9wksnuH7dm7LmTzZ6Z5yTJeZZXhE893ZgH2bLD8WsR45aewJDWhznSztCjzjuWh4tqnZWmu5su9nW"
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
