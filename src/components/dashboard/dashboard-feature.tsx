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
    "5wnAVUfhHpHp7B5HuJyadZkZq6k8MBLfZVhbPK7w5MFvywrgdGZPmHCJbbPoPVNwmXAaUVfMVzEYrtJahz6sAY1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vehj8eX2GZMhxKgVAg9Hn9v5YKvj6JbGxsTmrGEssN16CDLk2F5egH5yFV8KUGkPK6UdFaXk5ejAj6mBYkj7WPd",
  "key1": "5iGiB2NW9pB4KBxF4uGnxAHqcid3n6WUmmdPX4aymL5eL1JSpt1nous5CvrdQtDecxggo8bY6b6aLTrswdXUaPdT",
  "key2": "2L2aY3uBsTjx8Da4kPnQPHtCM3NL4Epgy73yjX5dSTb71o2AKgAycbFXXavGUVJrDgRT69LUoP59CK41ByRenun5",
  "key3": "5BrHPVHxxzZ1krn7gW92evVUeXoigFmb6Qqfiq6MzUs46FLQZKsAUTvoHooKCytWQPjS8YeD2RoRuCZQagPLi2an",
  "key4": "QzoJKMWXvByN25nc3V644hJBti14EC3xMWu5trUBdYJNT43JTQ2yw3DBPg4GfkWrXVFixWNX7rEx1qCCdiVeVAD",
  "key5": "5mHYSiPhoqCRSnhwhNRHp1Q6gWLCsjR1PYNKUHhhfdboZmtYKKzdRf5SzRUpwBmgg8tL9txxro3Q3E74k7rMLy6S",
  "key6": "5X15skoC4t4MQWdzmjG2zvoondUMy6RUy4dA69fMW9L6xkBhay4iwwSPuLUP7v7GSFHBcMGKPEeCXqwo9eDz7QSa",
  "key7": "3TpQvE3Y9jQdRr9dYD3Fyjzw2GYF9PxroP8oWUDrn4FKB4Q1MCoHKKf5q7NYNQg8H1t6aaHN9f3z13A16CfYwCb9",
  "key8": "4GdFmN3Ys65vDjkLc4xCDsiEesDWEfJcWYtC2z51TCxApiFUoCmNV84KpjHiTRSzxepZHTxLHXv8x1y2BGtotz2B",
  "key9": "3vPnm8VVruAEpfF5cvaZSTw48QKmuXF5WFVgJ9869Lwa2MkGcnrUJxB6nuYWtfoPqNEWc5zpSpDLztpuRuhJMwMY",
  "key10": "4YSnot1vkAKykpmJRVks2MjvoGcBYQHnvxwhQbohwTj8HxTmxHyX6gt1uAye2cirhM4rWhv8AE5X6RdfLM9T5Fds",
  "key11": "33R2RiroBdnYK5Rbcr8ziou4PaZUGqCFRCGdweKHsxUtJGYbhEbP5jS7gXM5XnTr9Whc3fRgcgcqGo5mCgGeJJ3i",
  "key12": "2wA26vq2hgwgW8AMBkR6z6hxxCpQAx5f6N7zb7Vg9yf3fz6ScAtHMbhzdzBn1k5DVodsdHJx1bZdeg7ziG9Kgdyy",
  "key13": "4dgv4dAaBVQFKqxJApH6y4qufwdgEecNguJxeRfKVpopRtSCwrSJJhW1gdQmGngDHeHNHvTT87TGaYNyd92w1m21",
  "key14": "3R7uohbWdLVBr5pMs68iVxva8B5TQFRdtvDCvU3whYT5FCFbEXG6xNePXnyDfEMcdXCFrW3dLey6gBAoY7Y2GjNP",
  "key15": "2WkhZeSrTMLNKWb8zeux67GasnzT28ApKMuEgTj2HL8q7xYPK45t6i86bHhgSrDybFDxb3X4gnYmroKMyMmaLcPG",
  "key16": "5YEP7HSHVF1dV3SLfhkXdXwauZfJNmuh2YZiYvTjcn15NngXjBnnQbWinAiUC7SZu7brB8nmS3ysFHuEYraVBDnN",
  "key17": "4ofcUFnBJxegwpBN8PjLW2d7QKbubopUkeo3uuH3gzkU8QEnu47kzhLbn1wo943brxZLy1THbMhsjTFCQ7D3CUGe",
  "key18": "2QcWbHNb3pqNzRVBh6pLjEHGxuJajjMzkdVk23P64fNDsBhhPhexzQSGLZaqe9Vk3RjMJfCekzn6nnJggqDh2whP",
  "key19": "2TNE6bTaDwPRpmg2jo1j3ihywLtS9WHw2GcBKeQQZr8Gf4MQYbLZfoCBykkdUsMgTojnRP6brSqFGUF5xi7AS3zv",
  "key20": "495PuLPFmdCxgdvNbHb2y1NABoY3P2VeXbJhHf53LtiQbeb8bBpux1mqr6vwWCMdcLBBG2B2PbV1NSZFAc37TP3r",
  "key21": "2xj1rjBUZkyXHzMxUH1nJZKbJ85JBDNNBaUKb6BMNUfc17Fgr7A6wsRscMC1xUKamvYQ1iAWGNkxFrB1F3VEH1od",
  "key22": "3R1LEHeFC6aNPhqiL6mMDajzg5JT34G4EXSP3NGG7xpPsHGxKLeXPJfY6QXkx5xuhNBMQfMdyzZmHMXMBvRaZZ45",
  "key23": "5eTUVEDGHrNbJaEMGWXGtRnjVAGwdMbtGatA5FcFCkdk6woFFkvdWTfg3ZZsPSMyfBTsygzgvwWhcxG1n7WLXvfX",
  "key24": "4UemKNk1xXSs34fXPo81TisUfwwH5FusRpCXUYNA8XfiypXfbZeZRSBrHbNvWKgRu6Q9MbLM6Y7wh3X1Yohhu7k1",
  "key25": "7Q3k1rSfNeM3Us3N2nt4rAsyHhwcQUDDjv37unuHbfizBsuzPr5zFpaBEjRX4jZH9tFHHmGeVUZb2BhSjLour6n",
  "key26": "2QPcTyQFDtb5a55qUs7jP3ZQhtYQeBNbfj13aHYqpoYsSyscMBwY6dR3ZVks3ysDzZySXiWCW9egMN6cGnr9Jn12",
  "key27": "n4UzSME3VmVYnZuX8YeSkcHFUtytkQESg3RHdaKhmjdgBt4VKpP6jXPf2Mp3HNi77W2o2GWeVdfgje3Tcd8H836",
  "key28": "4D1iABrSJTzLFBt82gpKEXkMT2PSXXW6zAMY6ycfPkvYuuLhAmKHmD2Z3qun4SU6T47mwpsugctAMZpG2fBS4gDy",
  "key29": "3VnuYDzv3HN3vyqpqwt6hQE6oCPYADYXn6HMxjyybpK898Gh1ELVosiY9q72iSZDrVnybxK3Q3vBhUMYEFERWnuM",
  "key30": "3YuwUYnG7Zu8pbeVLoKaKhUaLPuVS5YDSaUJ9rtJqmmsGGLWKtQNpkANZWGWYuoWR85dKu9AqfbkTb6q5Auwxmvw",
  "key31": "4bC9tvcVc3sHJdF54jWC1xDCV5FEs4dzfdWfvYLiSGtJp5dSc5fxRe6KgcJd2ShdovUxSXqt7JGK6acLhUK1m62C",
  "key32": "4xDiHPAhJxmrvm1iKTUTbfX8cTpTtafjj8DWa5CSce3QL9EoTLPE9y4HGk9dA2xZB4SZG6Se1GzELjcDQmZUhiJ9",
  "key33": "GsHo5LoMDJBHBwyh5qVn3M4xzkd6KJijr72H5cy4wUDYmce9UeYmNCAQhw8VWyaXHhaS9hvkuyV49d3PXvsoDXX",
  "key34": "4xiM2FeokAxCJboQ8ZgmE64X77Fhf3SHSjrBQgC4zBR6akXi8De6PS6dKv2mf1dF666s46SmLhUw3DrYZYUeNb5f",
  "key35": "33vikt1QcSQLzcCvpW4w5R4dJx8z6KAaN6eHxvip4dHagSy4g2V6GaNFJjostg9E7r6BcQQY9xbFQbJkSzbvG1KW",
  "key36": "4AmDEowGDPVQjxRvBEstjPPaVsW28rgG21mh19KmJYiJXkykkNc8ubk69ps3fnnUM6n3kjo9ZxHiRs8bsAZ6Uc3j",
  "key37": "33G9FVA54KSeyN1EaTGSjgsRWQRXMokxeh4vYpsaPyDMUjDyA6xpsV9BeNh5UwRf6HwBUXnxzQzpG6NzT5C39WCm",
  "key38": "34dSGL3B3jF7AepZuQVC5JBzwNuWLDKKxz9kLKuRBLyc53kME2heKjxxJcY5qrRwAMKfJPWRBzcREf69UMEGXv1V",
  "key39": "4fCbTzZP9FTKC5W44ENFScjLppcq8A7HfSWBnyEiD1WmhZkCaXkhR33cKGAASQ8kq1SKU1teAeugLns4XiUzbQqM"
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
