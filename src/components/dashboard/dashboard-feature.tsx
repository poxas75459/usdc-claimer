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
    "4ifZkGmTnJbZma8WeECsmA8eMd8KkZYo3qE69ZAAHUswGki5BBi3XFDnW9UqdaZvdi5Za339FMK37xmGY5gYrdE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "236Xcx2bfsVxZQprZLT3NHrsY6WRNzmFA42BP7b2R9JfExCSsZfejtXJNmJdKWXK9X3v9M1qCqWPvbkha19wEd5t",
  "key1": "4XCPumXxfsq6CHzhioQNwzETuN51bw7cNrnC8YBKJ7ScauyqnMfubLPsu9tZXQwmfijHd8jg8D4Q8cGjGFcJ9Xez",
  "key2": "2BpVxUa7VY17jcsSriSXDjJWcxXMyTBaqFqEJ8RT5EJoo2amsyX7pHCqd6izVA9ErSowtavJpspiXuCbmibL2nWA",
  "key3": "3kNPwifK2mQ5a25req1DhoXpSQfkMoLaL6SKXbWCGV5DdYnsYYfkNr9rvhYcRvR9kHkAQssp1cXH195AQrxPhz6z",
  "key4": "sTeHnRsS3Wo37aH9rdzwyycV4Wyp5bjoYrgdV2DxteBb3RsEP1hqtAGZM1ceixPRfgRBB5jB7XsqwHoYG2fRX8E",
  "key5": "4o9ieahvYykUFXiy5g6SduDJ7hggukG78WX947LVG9upgJrmKkMbRNBg4bbBBHPfBKrjzycFehavXwtQSemCZ3da",
  "key6": "6PTmW3ijRsWEpdN4v41ym1zD3FDMCRKJLwxVGoB8MVTjJVXVddoUCGD56Zga3iq1Mj13KMVaWv2LcNN3ehwjHdQ",
  "key7": "483itE5WeXsrpdnyB2fGZ9UDFMpSidmg1u8RpkJ1BLkDSQZz8GxQQnYGDKHYn3wydzXgCdoASB7zLpWnT2qDAavQ",
  "key8": "5ep4Mxowyk9PhwBcfWp8cewPGnHXbNRKA7udDmdDfFBGo69Hem6SVi9p4HzGSkqk1CooYaY3Uv5uf26xFSsesxm6",
  "key9": "4fcAn1nGSYgD9vgj7y7wHEHgJeECdrdzSbzsLfp6Y2cvwaymZV4Nb5bgPSb5MUeCYSNaCYMSmv9VRN6yRotNWZ4t",
  "key10": "344gQJJC6TG3qUdg2uCKRRur1DST6n274Wqazrif6JvpRXJbpLgU1SY1PDhMhXKD6pshdXDadszbQbdyDnsaTmMf",
  "key11": "5kCA8zH3FEyfHZsXoFdYMdqzkQYttoMuK5krDd53ZhgLwFtVWahqdAT7FPpk7s7qVj4eQc1UhyfsD73tBGe3P8ZW",
  "key12": "3ohVzxKDV3EQzmpwj1aciu5gnbzeQnVkzK5Stkiqx9oC8bSkEL8yn17mSaihcSrVkmzztHZ2vHtNjY6iCkGGPLjt",
  "key13": "56wfjJFYCGjVuDX78fouebL8VkZmGdAekvZtsGHhQwpUJUQHa6fhxxYYp6t8mWW92yDYriXhKNLLGmSHdrJKc5en",
  "key14": "rK9Wu1m3wJQEztEuCLYaeLbuohmd3NBMFWCiZkoWf6jJAE1ZN8otJnM5py1neMXM9LVyxV4aSPGuLMqUMPGgr4k",
  "key15": "8kLT5ySpBN9KJ14UFnAg3wSK3Xv9CtijapH1R8kJQzHp2FpswAsuw7Jy4QdugbjbCky6VQETBFE9Q63dL8yWgqY",
  "key16": "nU6YkAHfyZSymrDrgwFsmCmnvqMzybZc2Yj3x2HvWfv5yyrKuDpztDYnKH9Yn9nU26E2DQ7Ser5mfwzKJcBc8UN",
  "key17": "3EyHGDB53tWq1mjp9LZqJd5wvF7upjTYD5ZiuyjZX56kVmyWhFjeamqShSj3SCV86Hfa3Y4FGAL5vtX3uPKAvXxq",
  "key18": "4HzsgViNgeN8QzfYogPsQQeWfvAZXZ2hKkYV5BmBdU1jYWjwhrDo5R34g8fkj1tL6RvVT3wTamsDZofQtfMLarnu",
  "key19": "5NZAmJgyN6enjAyo8SABf5iPGHnFZieLXs3MtpZyF9z5W2e6XnWbVeAS3VNydTKYacemApxYaCqY56VZyCefyDTX",
  "key20": "4XtoT75acVdzWWF2EDDU617S7TAoMGGKEe3ScB2GTm3sCqtJmy9Ud2KTmJ8rBfxmJBK9vUtHXLVZYo5UmjtabWqR",
  "key21": "5fjkYzYC9ZxgJHcgKgrd7Jmu29BGL1JcdQ2dsXhUz1DhRqXEWAkc9ZkFYuBGjj5QRdSsn6XSrE4WdYJKhrD4S6yM",
  "key22": "4e3FUZ8WeSECwPhveat61s9HrDaV2s7QdSvYyfZeST7tZPuSZXRruqyBdnkg8DkFCD1pFvwZ92H9AYsg1HgVj51v",
  "key23": "48uo6r1qAvNgusTAuM3EyykBu8VE2Ub5fBEPDqXtjNtxzaseYu6zDuXJQHDMxJWgWdMLDg5ZyW2PB8N3EtozUhiD",
  "key24": "D7dxyWdi44dhdKfgJ9FkzwaUbwpNR4gyp9pDNehVq9MEfB9pLZ5CduExBXwrioHCZokNVsThNvwRGqodtHCWm5W",
  "key25": "57SAQbGyXKHJPdJxWTMUMZd5i7RptabHqdc8LsCAMb8GtMrkmiSE6KdG67UUL9KaJENdJqnDECUb1YzM5Nh7A3dR",
  "key26": "2HPjRBvBL2FgQ7g7f3KwA7uV2JSN2mw7BrtSw1uWX39T8nfY5LQWnEue5YaU1pZkgZSi72iMjDu9Kxcf38AC2WN8",
  "key27": "37HRbDiqQ8Vfs6nx8CFQ1Q3m5qivz4kGgCYUHZHa5HxxAk4NjeHEhFHe7jG9ww6qPo9NLkBqSd63fUM8ZH4E1h8Q",
  "key28": "62aaHD8bnk8ViqXUB23SYjxR7cmMzb7mNoAwZKvyJbjgAkLgANMgSSLZmy29YP8EiaeGTK8JDmP8as7koocUvHrd",
  "key29": "E4qLXJTRBiV1jtSFUhDPjRduhhFGEryMjC1nDbbSxqz3oWdVN1p89TGN3cDgWpAtqmAXJFdUJUjPEDVL8nPCZiQ",
  "key30": "AUfGxof5xLwUdjECusvMvHK5Hwhd2U4Rae1wGALbwaViyBJDZGWAMTQN3uhZtXxFwZRKiCYsjNcxqbpmQFB5nmF",
  "key31": "319JBtbGET9oQnCEidrxizJezRMRczMyyhJi5GT3DtJHg9gWYyGj3Cv5GmL6WcuNVVa25JPYqBK8LnGq3sb2vXGY",
  "key32": "5NrRSiGgQtL7Z3SawnQDrn1ipt8zarPktMM4QHZBGF9sPJi4iph25dncHFRfsUSoRxG2dyZeRWF5kCHAdJKLKPhS",
  "key33": "4aPH3zjuCeeR84o4XjH7r6cpu6V1t7uqcYXeQ8NiynCpS7r5gXgkys12NYmg37ZrFnEatGizE1LisM5mpFgSzGYS"
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
