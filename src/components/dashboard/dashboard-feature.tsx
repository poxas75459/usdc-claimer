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
    "rJ5WWJ6AjSHP2fjopwiCiqnTJ9M1bqhMYeGX1wLt1D6gMtLEFjhThBKo9CA41bG7ArjcaZBLqPRyymixVJ6Se2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k9i2ciK3oZFnBCM1J7NtwAiCXQPmZmGUnJYZNTj9fgZeBALhmNG1y7toqRXdDQN1KK46Q1vpouZo97wCWz4uuB3",
  "key1": "21J6YZe1TV9sdwVHoAx92rmipMbT23LDVbPBs91o3NpSzzszvNroA7rvDgjdGRvGy611mw1sJsSYmFJK8xY17YFK",
  "key2": "3AyMqaomfe3Kd8FjbJvmeyj5cXMBf4tbqoSXovxLYjojJJTZ6fvkjvUHsFhbPgeCuqzpM2FG8Gdd3qmbpsCrDhgj",
  "key3": "3ycxErcBNPLzJY6beL5PzJvGhRmFGberjEQ71YCVL7QLFTPUzrdKMuRw3XZBE2ggeTYrcVjHY2yLbSTqgSg8Zoyd",
  "key4": "2Y4tLFt1EkYgPmFY1RuDiu7orN9dQ6uDQtPuP3vF2M9jtFb8Mqaey3fazuDMci4ayKh5U7Nqbp9n5VDtkbpQsyzf",
  "key5": "62JpwvL9SzyKucb2HXRvdzFjEaHphD5JCS3nqLCFatbcG5wjJgkUxfE5obLmuQHsYrJ9yn4UZYog1cXt43finCRH",
  "key6": "54BNW8Ak2YnpJgP3iCTPcjs9Y73ZTjwwTsqexbpDGKvL5FWxSNmoJLfT6so3XukBc8UiGNwTpMKRK1zwYUVBitNm",
  "key7": "EPk5CTMNvBFazoYPyfFNgWLqaaZig9yn5o4WnGxg6ZLVXwkCvHaYi5DqdgPUmkoqpib9e1ExvpMuBNrfnYNuKGE",
  "key8": "2vqEb8MryVpe6VAgFGN73uuv5SXKUW9uLHp4yYAMJPYwu54rco6U43Qe2DRiyLUDmbmGRCyY3iFa6G7hNAUhDkwy",
  "key9": "5kxWYCesCJQPhFDv67J1Gkdzbsbx3sjLi53FK65L7abiWhE6ZBaFc8Y22nbv6MkE5LfG99s5bjB1Dm2gd8JfmZWu",
  "key10": "5WH6xdNZx7nEzYYZD8p5kYyBSwLuM5Hfq9k4MzPeVwPtYag5FCUqbEEGFXdDr1iTDusBrR9n3RmH1nmSCUsQhEC1",
  "key11": "61He6nmuYbPbdA6HvoTdi6hZU9B76raGUiaWLAXgXbmRRcvY3E7vg7Yz3V5BQxcYitJhLSyGCTSuUN35FVBgUewz",
  "key12": "2gEbs7EcrEaVngNFrLoegt4JRGS1a3r3NFF9Fk3WBhLhsJgbWqNdFpnkFSrAMi5ToBq6drEh8ohAoUcrgqyeC6Ya",
  "key13": "3n26x7gDVaRYqFToG9M3p4PD7Gt9rRaUNBABMowHKwvTSuKuPTM1wmkQY8xg5shtj3ZhoboRtNqKBTVqzQvtvmAq",
  "key14": "2xreQPZ3aWvYRoJFdfBPSbY4WwS3xJeyttgk285K5BeC9pDdUw8vYyWKacT5wL8eMdAApongcPitLrThDadMNzp8",
  "key15": "3QqneVEtoWt6ZAmWLeGUtqmNTcKGeQvdNKXFA3HvYra1MUH5g9WzTomyYfG29ydzhSq24b6K6pxAs8o5smDUVXcc",
  "key16": "4Enai4jHg9odsL1SFUah5KG5BR4KfgEs72DWwdnjNUWN2gQ35ospaKETp6fbyWy9F4HtiyWSmTnSviEQHyWhyXNL",
  "key17": "21zbKGVcPXcyr6hN4hj8mChKNoq89jhqkoeUDG56Du7FvCgCKxQZzNaBR6Zn31WeK5SKHLTCFavnxaWJJRKNdWKW",
  "key18": "d7wHyQnj6JSSSL9bb4N4wYAsiXNa3jtCUSGHTP2UZdiorteUeuGWHgikU2UbzwSMcokWBGsCVXcLinVmxhsfn5p",
  "key19": "4h585Fp1ifSp2tgfUz4GeGjPnDAk8uLz3PG3MF9gJfk3SvDSp5AZLKQqBMdt3QTigYfTVungopt1euA5Mv2VLiBj",
  "key20": "2cs2GYoHsGSQ1btfw5ViERfrH6echWwBsP7usGDqp4BXbNzFg9iwm1UJrtp5Kdmt8dBv5Lgse8KRsCLpZAN8ER5y",
  "key21": "GpRF6RtAc69dKDXNzNgXwisdQG1SEnnnh3p6YbCC55737Qo82wwJTRVfYuNRPMiQAdAosLWhtsYTdrq7v1EGfkB",
  "key22": "3GXs4fkAsJfHWhRdoYUHBkSCVuxqdF6Kv9R7VSkyRUV95fKMmcvbAjZ7sCt6d9STdAfGkbuXeEejoNuZjKqCBxvk",
  "key23": "4KYuWz5qMotTLtWgQ9R96FUEdHV831qVbw5XsMxrEVRn26UXHweMATaghsMbQGUrPNWH5PQdouybbb7uPds8dy1q",
  "key24": "2KVdQDFncN8iBSiAambvYhQTqAwS8cLzBdqfidt7BYFyqwmqE53tHN148aUQU3UE99C8HfmELUzrWTspyvrhHzdd",
  "key25": "64YRqV9rYd2BLcVL1iariEj6GJxz84uEppTnjhD3JdZYmEVutDFxb7dSxhnwmUuazcGDyZKrHjrLM4yapTkQNmqh",
  "key26": "2cEzntW1sNqXh3seGh87oQGQZVN2YqK6cnjJKuFaKSC92KyEDTsk1zfUWmoytq3bAdhkhoBC1qif74AYD9VWsFwh",
  "key27": "3ArycHVS8hCUTzQRZe7JnBfRVaVVR8UeG6gLXPmZP3UY8R2XRvMAHo3ja55UAan6sE5GwCGybqx5g479jwoL78i8",
  "key28": "fw6kVhQtCnZM39PhuxUc7sbEwFbKQ8hRbuaFiTrcpcMYFoDe2E8Vzq78GApLFoVvany9z4MjDPVcgaAs1AUrrBU",
  "key29": "kRwr58Qv2N9HGT5FhVVjThpt2NNGagcQHoXjnn5bB39gJFFwLACmcXLnURwZwbXZ41XL5p3mJ4ziFhWBG58oj97",
  "key30": "2p11kVRwCwdUzh4dVrJxJCyF5EAWwT66uZQYRDncqcxyhNWAF9a6Fqa4Egzku5fd1j1TDfeYwiTy9WfWaHbrR15w",
  "key31": "wSgbqPZJ2Dp4yP9KbNeoWtRYAUN8GXYuRfUGxCdNRcMCmSuWZKs112TzhM8qmSks4HtZgJmhkZ3gyG5ZhWUBHG1",
  "key32": "2WCNja94qAG1QEKowRmiuTC85bs2TobaY15EuZQsreZsr4aWinPECMYDdR9z7Xx6KMok5M6ASQWduAxLK1QF1iMm",
  "key33": "8AANPganLCpM5TWsUD4j7a3YUkpeXA7RR7s8g6JAJ4wXf4FNeJfTv89R6TwBKom3k6MECscN8ytZbbrKjyHpFTa",
  "key34": "4ZEDKdegUDvbWuuLDgkdLZv6GWXZ1HF6aC3noZBi5DqXykHTbVYb5X5orLLNH5NUZARoDTV8hYBuiU4yYUd6Pazz",
  "key35": "qcf9EJxsWnBhRMs4vK11y4EHMWejVq4xUDXBXyeDsYMwoLJtuwQVWpMx4JiroHYN1Dwa5WxbjzEuG8sor8LpkJ3",
  "key36": "555nytfkSWteLwH6e5HPM7AatrMSsa1VKXHtLmMtu4MoqnsoE1cbVsstgELFeFv8aCXfBV3SsnMNNZwJBaHPCSX8",
  "key37": "5K9fPjgPXmP2bm6qtnGsE3qyAfaCp41g4Xrpb1NmQXhQUWXBL38gFbDkZkiDnJzQw2zT2qCRmSVHJsGuSg8gwiSV",
  "key38": "DryqnBgPHhpNQwcZaLwfdJA13cFNvN7RcL9qVJYLQEopM312A72SYSHCJEDQVuGoNNe2vR9CRQMhyDAnb2veEdb",
  "key39": "5tDFzhShaC5Yf7S2jvVyELHSGDxHz9mbyFCoksPDv2Wshcg6gHKLU7XNLUvUpHE5KViC1RRbKT3AhbHzARCDmmY3",
  "key40": "5QGd27ywJo69mKuc4s49LP4EkNXffXGFaiTacM5heHrF52Z9nmFC96XjRg9bUFGM5iVVMuGoMNohup92ZzW1wcpC",
  "key41": "3FyvEwhzsVW6ry74uG3e6APh9xvwDY4CHqXU8vqmozirsZyKiRmcwP2QLafiDrSmY92ALF6AXECgizGRq18cgVUo",
  "key42": "2zJRg77PM97bNcUP7sE2D2U8vnLDPvhSJixefFdPH2Ds12NhgM2MQPUB7bSiD2467wvFvoeymfYuSiop1suG1y2b",
  "key43": "2yb6v2dUwXKXEm8MrZi4TM29qeU9Gt7mvrJmQBm8kMXwdP9UQs9yMw8ArTxvyfNfyFiLoFKPa73QRWpoZw2NnBnL",
  "key44": "29My24tzQ3vDg4wUeNZ6fsfS6B65Y8sdZcBu37HfLH8gLhaw8Vpy2589G1C1L46VB3vkCNbQaXuRnVXWGjKHuu2A",
  "key45": "4GymzCzoJKoGhZiZf4EvzpMjsySXQsSpnhfV2JCBHMvkynJvruRuF1PbypeLL8XJyx4N2SpJFdqcUAKkfsKP2Fpx",
  "key46": "2JyZtJV8mpdYz8dyyLmGC7eAPPm1QmS6vtmBMQP5wP3XiUBELVtTDLdGEyzmjWPpzyr5xXH7nuVmbrWXWxSMcfwy"
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
