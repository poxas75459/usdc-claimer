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
    "3BDKkXtS5a9RxJWBR3eA6VDsR8AqMb9hJebQLi5CCb4oGwaP87YzrgEvgCJY66SdF9CFMPkiGmHCNmTcLcsEpkR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VxHFJUUKd3RzFE4kZEzmUQtKyAmu5GTc1mNtmRw9WqeX2u3dQysicVJi5A8mByv7iVP4VRRfGaQFCsjraKtujSi",
  "key1": "5EPSN72q5ymNn4SaZwuq7Y27oPUWxgeNgU9nynXtrhzdhi8Hm9BpNJDurHXsrKvbZ5iYMn3NTkqGhA7F2SQFqoAi",
  "key2": "3JpyrrguuWM4YL7a5SWdcrjn4kd2PFaSvEmBgWEhhizAU6LyHgB15hbKPqWU5kU2sscX6i87E4NbbTpvC5a5ymey",
  "key3": "57TRMo8oubh7pn2hx4ZfuBDFnFTaT6V2HETh8DH5BGMGinrTWnBxJfxHXg5oxsB9xBQteq6hvFCFoXQk4FEnQY2x",
  "key4": "2MJP5xktUNc6PRFZMrrdRNeuurC2EBPDikPLYnfzG6PDoMKRvA46XfbxPVjZtTSyhYMLHFWeDu3qTFf1PSKxLuxv",
  "key5": "3rPiTuRK9EDEmoL4fPY91Sn1UNpshEeFX6w78ohMFJy7Wh74Exihfd2gKFfdK8W6W2LDGjVkpdmuWeEJDKpYLtQa",
  "key6": "roWgSALXmkk5XSVz2z8R61GUQ4sBZ68gGSkLvYYfHu36Epn6RNp7qgpGmcxRMRdLUKJDihSjgsYDfT3X3PxzRkY",
  "key7": "5Za7JEUDNLzqKcVECfjqAyaM2TrPoDhKtLv1XFB93Kv7jHtcW3WaAXeP1vWxmqYFZqSncKDYKoKtuJxN55g5B1VR",
  "key8": "3UXcLSf5wwwrm2BNfAe5uCohghsFGBoqYP3W5zwZs3af1CaNjpKMa9RnSYbdh5XFchUYdf8bmzAJQyutnm2H48y4",
  "key9": "2AwdKg6TgwuK4hKiBwXYEqcbvvc2ZTAfg7DBYh5LYwbYWmKMzSv3PLKgpDoSvJeEFXgyVW998jrQeyw3sHL4sZf1",
  "key10": "4CrzXz1RKhWpuGibcp8n3Wo43xg4Mmk9bRd1MXimz3bmhTrFPTFRMNqDdmSe1so5SA5bEMp7Ksi5At8Zx4Nmk8tN",
  "key11": "29XC1WitgFCHuaKN535h9X72EKuQ9136B9BQzp1418GDUQ5Lt9JGJMZPmHQnyDNf3jRuXwCH8PaSPAV16EThEXwd",
  "key12": "4TKDfYz8w2acY8EzcELhr4sUmnHt2xaYjRHY3bRst3v2LWHP43ov83xqwtiwR1nqy6BBX2uokTup39j91QZMRGgd",
  "key13": "49L9frGJ7uCbYuHrC2MJErWQW9hXd9QwfafLamgLf7WJvJEAhEHr4RdsxdnBqchoUJLmtLghu4U6einMH5nwftra",
  "key14": "2L2QS8yM5mSp3hFDXHbDcL2Xtz63JNeJM3gcqieLyuWZXodSDviVtYeQtUH9U1QJKGL4VMmGeY7EG56nB2sV9mLX",
  "key15": "3RygQ7DBqhAPWeAu93vdE2QPvkeYdzqFXxW5S9sA9NYwLyZf8grQLtfvULFGNgvD9EAAjfeytrhT3A93mhfBrRiV",
  "key16": "2gNbMpVrYreLCZ65qUzxtHYqf4Np3kWGbFBDaEnt3xYdd3PTrkFVG87joPSRFFoDSB2BKQnJoMLB4ByKcbMj6Q75",
  "key17": "3ShLFxohJxRWj4723wekZUddKptyCDHrbN2s28dNkWhEksdPn4ph9yhSLJscbPaUbKCwfUDY9RyrhQXxkA23SdEN",
  "key18": "5aZqtTYZG8PPdfvBVNwad9HRC38CVn6zs6enQG7HxZrDP4CUpjKe4vmyDKfm1FokPB7zXd12U8pfaLsfgpGoHNLh",
  "key19": "qkku1Z61taHTzVsYE8SFMBrQyJnwrWERzUNUdF8W931k8ZCMK2rZSZY8UkNY55W5gJmKA17hSXAsH5SQFqiDjTL",
  "key20": "2XTQkchQeB11SuCoTp5FEa3EEYp12NqtafAKRCGbVp69bZ2oKV65BjY2qX3Fr29zHKXJFF9MCiKKxMLJyeNDy15u",
  "key21": "8on4sjgeJKgeT3aPMdvhyjf9HhS3KLTpQSvSPfzEK6Eqs8sipfi9kw548c6gFhsQnmdBnezXwoWW4evaDCr3EmF",
  "key22": "2jTqHyodAF8UZ6e4jtScrJMtZWk6FEcwDaQpkKVNa6LKLbhDRqe5meptLvPqK7JD5EoN29GjEfsSGBraU5y4gWkb",
  "key23": "4rbEyqyDgcLKBWwGbYuxEgX4MqVxkHE8m5oDXB26uCbcuJmxi5YE7LCFMabWEaRbHaAGWY97qD8Gge6UBusDEQe6",
  "key24": "4punzqxr7DrLPNV4jtWRttZjYc8hNqeyipbGtjTu3k51P9Nfs9L4AwAjPzQoMQPgGonp2p9GjNXFKSxzqzJVmx1J",
  "key25": "5fQfuRSwhk53AC6MM4vf6SziLKFgwfh2UEcYJoj86SMNrydUQWPQb53ejHB43xPN6XW12maaquFQ4gFB3roxMBdD",
  "key26": "1geCBeLBH8o54BeaYMuzWvoV2ycE4yBaFZrRUQrcKM2tmNv3uNuiAofEHkdm4YJxKbWcVZrSUGGEeZVdic67R3D",
  "key27": "veAk7SCT74oHvhKSe6DQKiuf97fAjDpyWJShwVnPujDdUq47zoRh4Nhjukn8Md4LHum3uSBSgV6bcEHVYjztFCr",
  "key28": "2ja62YRNDYwwTLVjgxyV7X3UkgCA3HcWcwch4ws8449xGSp4Hpr2fi5MYiPtgZu1xhco1By6MLyQ2GWQVkBstzNP",
  "key29": "3Y5876zHzV3oFBNpEgN6JQKv6xSQ9FSeW92ihVbWn1oghJRdFueguLqCn1BTVtfH3fkgLLkqDH1CFmcdGEZk1LW7",
  "key30": "3Y6UrkYubkNQoUVoA1dwk2NXGdh2TnCu5ZxJ9eQq95Cu2E3Muuw8i5xWHtBuYTEvby1v1tkQe8FyrxRhaZ8JSExM",
  "key31": "4wRzfA8Uo4jQJqiy5FGPKCdcFfUnFaEqse5efmZvWFyW9EhKdHReLHjkh2YSYJ3nWd8MjQQLVyfDZQJbv9FJSdFA"
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
