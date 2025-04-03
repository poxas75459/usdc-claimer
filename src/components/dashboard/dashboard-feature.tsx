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
    "64e6x76fNiwbYVgd66haAWBDrk3oZZXWNFw1aN9poqbZVYjGK4xcgyQeoa3CvVxgj7brb3p7KB8xkqVjCddMtoCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BZPfYAiA4mZLgrevZFDxPNmWcHL7f71FAMUYuoUPHEBhLTW1YGXHiHQRGCFmQiHD1PG38prbkuYgRgMT1ibbKdR",
  "key1": "2pyahkLN2o2o49fjGnWdyWb9wx7vRG5Fuqoy8tSWHVkwWK3SSUu7utU2ouiR9XhakiGEE7dPpTFU9XVDXDTFMxzB",
  "key2": "Gjp3EMn88MbK1RdjLZC1pp1rwThryykjcxpZQatBNYX33kQDeibrchGV3Ziy2RACdcsTRpT92VYN4SHMYL4MMFU",
  "key3": "22k3mgY4jRcT1NbHvquakCZqRtPSzhnYke4GrQNhEZFPLLpTPbnzqB5HJRUQEUa58NkQwZwZRtJapkZRFjKwk45t",
  "key4": "2jXWbKCnTMmrwEbj6YXeRgc7ore73kjMD3sBFiWnK9R97JdDJ7eWYBeM8xD6kUjHxwFYuU2FnrKh28hPtsz1VE9M",
  "key5": "2jshRiGETXMeuHAZ68p6gpfoPHLPmBwhxPDZHMxhMpR1n5SLsyaxPLpM2p4zmkrSJRmFmGFUeKyWs5rJi1X3J2WD",
  "key6": "25emx8tKVM2nv9KCFo3DjYvyXNFSnToUMJP8GXta5CeeFA7ExyxqwvNsBxS7dHcAfNdPCwp1gW7AhWR8mejctk9Y",
  "key7": "3kYRf1noTswXctmP9JUMzmAXuW3x4SP6VTmkUp7Hz6osdDnZqZqKqK2rKYCH4D5RdhhZsy8wQZnHdYbVASHfXgd6",
  "key8": "3ANtQdPeiThcyjTQSV5wrTfeKi48QtCfutkhnjptSmS3QmZCZp17Ezth2s5PZda8wttfux9Ee3FNXr1To27bwGqm",
  "key9": "48u2Syiq7MTh3pVdd5HgWyXpzwgnxx8gTqLFtSewKhSx54DnKcDtdKP1JaWM7tZTYhgFNiEX4ew5hXCHffGatM5z",
  "key10": "4nB6oMW6fofTgw5XAijqhnabdex9HaGf4bQP5hyzpARwKnJ6fQA6uc151NAMfiBv4twMkhyC4jHoEsPofxXc8Mpf",
  "key11": "35VkdmSsbpynqPRTouDUaryByFxPVRAA8u5ZMrKyqGxLA4LfNQT4uYgdgfmyqyycXJ8iBLb4PkV4NAMdcqKNshFT",
  "key12": "485TFVfJ4XUPefGUrpYQe8aB5RBkXbHYR2CCw7CWd3TRoQeyDcUW5kEiSPBs5FmfTV15GMRdd69fgj1gH1stvrKi",
  "key13": "2QGXKgXgfXDZAJ6Ej5iSPs7LUS4QSxJRSKoEeUa34bWUwT5GLtepfwwPJZts9kcwWukyWUb9q2rxUMo3PnUJKFp9",
  "key14": "6wMXYQWnZm88hLf9CmEqr6NrbUfJgXWMNcJ7Tr3SQjsCzM9JF1n7vYwn3k6nPcUFWMhXRzzz1j2k9NydpPcvdKn",
  "key15": "5GSbMbzdVSFZhSVye8vwgpw9vfR9ni6bwWHyH7GgQq6rPXb5CNdoNicpeeZ6WFkvwGa5F3tVbBSf8jSMomJXPmWH",
  "key16": "DBVPvroRMKV2qpNihWpbFzq7i6reJzX4YyTyn8Zh8pKrkVi5jDAa6erssKpoVBrRYAKwDZspWwNy9Ux5kJb4tyL",
  "key17": "4gTNNcUPFoAYEk4na4gSXTfNVRMztzSfxcWoPnGXew2KFoAB237Htdnb1L3ef4XjV7ohWy7itRXBqnz4crgx4Jom",
  "key18": "4LL8Gua9whchZwnnsPwhtBVVrnL2Gcf3M1iD1heBjmexpjcfBKtpF4rr876VTcRwcXzUz6xoY4BvdPfUGBKh2FM9",
  "key19": "4GUyAu1z7q5xkFFgyHCRGcXTyw4asEF6tLvXpwtEvvvdWu5XJYWXpnd8AA2HrjycDd3TuDApQdtgwrWcvse4213h",
  "key20": "5auq31hvyHep2Ywv5njCSDB1kq1rKVhd9sv6mb9TW5unfFPZDyaGwbQc4AufyktBzLbKuSgf49C3maCK49yeuHdG",
  "key21": "35iRTcsaS7NaJt6jpeptoD2WN3KxxXCDm9JdsVmhqQ5eXwS6YwbGiJ5VDQZpGLREBGcG1u55bD6K7zzBxNCreVVk",
  "key22": "52huxFdF3MSG4Rj6wZjRH9Xm8dXKPwtLHpP2jN9F9VskTUuMqfnsqtfbqhcooaRb6dZWKFVxTWhGDqzCskRwR25x",
  "key23": "PfJESu8CfBo6SxWFz5WrwC5SEbhcg8E8cDPWtSdG6uQvK47XHDKrnz331U2GppbudHtf8gXU9GAbhJbydL3zGs9",
  "key24": "454wKJ2ahxGqp9bjhd15fLAQihJaexnzUoqejPdNZRr3LSLN1vmgpSAv9JVgrCeVexV8QTvzbqmJncoMWDWgGEPu",
  "key25": "129eB9hRRur4WmVpR7j6aWz9ahrrJ2L7Xc3HwbB9REkFAbYJ7ZLfoKoJ2CY6xpHhUGzQf3biPAT7keS1tAPVrghv",
  "key26": "5YSJZX2qG2jTMqfP8TB6NSqrMwdznJCxBxSktTDLrBGZrKt8PpyhdGkYm1z5PJsZ5YsLfmTVqzy7apoJnodLeC5P",
  "key27": "5hBPQUErsZFy52TWvagh5AxexTJfRQ233qYVg1ZPfbUpv5x5TnpzhbQ5dX7GwL9iX4qbJjNtfkGAp8W8e9cUhwpJ",
  "key28": "39cNT41cbFNQsexWzkAqFT27cev59msUSmfEakukJQNNhaG1wXScYhjfJpUp6zBbAUWGXVXGxYLcvVYj4s5LB8DL",
  "key29": "oTHifejw8tyQutrTYsMzQPg3RAfibHW2EWyD9KRWXcszZCenbyLpFmhi8NcZT3R3ACi4EQgq4VFk2XsKggvbizL",
  "key30": "2BJn6ysE7L5f12uG36tkSohCS7jk1vBgAQD5bRizkbeRZhNFWwMNrV49pvJ2oJjDVcxqwXQ2BAsC1usmB3Hbsqog",
  "key31": "4GzQbuTqFonovffwdPsYfrWRW2tUZBkcmZqEz1SCimCzggwRBMJQAdusczq7gMX82pBZYFTTTtzdUZuHMyyyDMkE",
  "key32": "3MqsxMxUVgphwjda3tY2HgBu7wkcDQdzCts7BYq8PMiXSg1Akh1dTFKMUA6t94rtpNAAEFvPxPcmHMUXzRQ3Erjg",
  "key33": "32QvEeNNi3x26zBiYSsScd4romC1PSq3wjnV2aaVMBdpiYm7QPXubAe4Hd9pC9rteBSh9ZzFY2QmZh6YCnFnsnHn",
  "key34": "2RTHQ79xEKkp2rVSKDdhVKGpP9u7NnoteKNGJJSZ3W2fv6R1CewBR2SKpQ8xvKxQ8SmbFfEYUBzG6vDptypekMvi",
  "key35": "1bXubSwb65hGEwzqqdmGxzEJq6MHgNSUTDUHY4VPh6a2kAdp92QcViN7e3QKUZrcYwc623sVa6Bhko77LZ2kgLC",
  "key36": "23UNYsbeVaJCJV1wPuns6h6cegqoNGn1VGoBjYXfhJ54RCciKu6xqD4iStFfJWGJqHTTuT3BbAe95vfv2VYMQCaZ",
  "key37": "3W4DivzSJ58vqP3UGPGc41jan4KdKPfGbqSV9mDSjfx77BRJ57NMoHcbNN4seaFk8tpFonrw1sCxsJzMsvEkYHpH"
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
