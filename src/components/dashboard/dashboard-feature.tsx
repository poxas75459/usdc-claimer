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
    "4cfoVZ2JQubNmGxbbPd957wzY3k8xY3VN482GjjAGaguHhH3DkV9gPHjHrPnn6Wc2AiUayaUeG4js4QyaKSqjWaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fZdh7W8UN1sATAjwrdVpF84CbbBEMXPjSTmt7RB6MQXszwWr4gx5zzvuiYaUSKsuRFnzC16ethyvi8pXoTdpnJK",
  "key1": "3CzBKQbhcxdMoYyKZ4CqtXRy3K7JYwcJwiUKyxQS4hnTm7aFHGpDkrNykFDm3etiNfH8kHZoSPW9EmxtXeMz7Uto",
  "key2": "3rg5UR12m5EgVHhJ4ByVxHuwhCCK1fs5mVB9123xFHiYPWyEZV8jAcqRjo5A7Usb2k4YbFvLMwiqzHNeninnJRKR",
  "key3": "2cCXgDHa8vF2LbGaeikNbAV68e76pUpNJH7aGVmGgSxt38Appp1J5oF2jw1i2EcZCK4vP3HCVMsFAhA4ExT9iohH",
  "key4": "4RqNHhVYTMBFQ6oF5xdL6QBQrnG25uS3ykERw9vUrPFNswvz6UKQwmxRVdxMV1V5BZQw2Lt6tXtWutszZrGeBiYY",
  "key5": "3dbHmi3bMpvvAuQT95taR5KZWG2MXeJNo2K9vYKjiL5LW7feS5tKV9736mziXS9m9HPkZYpZVGBqdT4qnjzLtkNN",
  "key6": "2EMuL3ZCqrSS9eAP971DygmBA99DBUU2RXtNFD4HDu73j3tzjG3bCRoLmweaGmDMrydqnrngm8YykkMpffL1nLrg",
  "key7": "4VyuoVM7s3kyDmA8sKev3eKN2LjgjNAf2Qbo51N76gXN2JFZjbWgHFprbyLzgh4bEGa6JTHe3UCA9FhWubWtKoDa",
  "key8": "mjg7DQzBo1aLH8ZJ7NNoZhdFHHaGjFsPBQvESyzGFAUcyhzHbZLR6J5EUEkq97TinDue9axcdL1M3ASPZyZ8Qdu",
  "key9": "4LBtVXPvKXayB8x8zRMEVRz2c3wCU6QmK1LsfJ94kqWBGGY47r8x7zE3ZxLor5At9DvUnuCUoJB5Lv26uBynwY8K",
  "key10": "3LTkQLda39qj892Xm9JGUhAwAaNBeim4wboB7nYx3V9bueUc7zgXHiKSAzMUpw2XGm61Jtq48EVQKLoN1m814xo3",
  "key11": "5RcGAun4xxGyMuAQT11FDZdmsrciYyeQhfJFKDVQphkKdSHBED7RC7tw8Fj3WYrJRnX3DmGYUTA2F76o9QZvtTBE",
  "key12": "44tZLPNzXjB2ztD6HSxHMVG1vyz2ZogK44fr54RuLhACsDxRLyx1JpUtmh8dMYj4pwVDGc9sBZDpXX145qBuuNgX",
  "key13": "3zD5XRD7Xe9w56NkpZockDX7PKELcXanuWBRzdtRSwwXePWXPWL5M8SgXngzhMGqkfbx3LDMmzXRMfi3prBgro4h",
  "key14": "457FLecPUjw3kYiaqxfp3RRGUgj9VEfYeWyqTfYMFwy3oPJ6DnDd6afSrzhX6MhnDBtugZ997tGbq3LsZNdVGUxU",
  "key15": "5L3Cuu89qFdSjGHvQpHZ152f7Qd597H3iPNw4pKMUn9GM6Hkmg77RfZafMShAMq7f4gMpPgmZ1RbAGbTSF6WFPEU",
  "key16": "65L7Ywf74DFWUnsY3Rqauz7R7ndWoCw2pBZVCBPDiQifRSTdUCVqAAN3pn1Kf3TXdLtqu4uje2vimrzRdLRvnoKq",
  "key17": "35gLXTQsntA9NrLGTbvnNRpBthqHc17AtDV3mkjMtZHEukZidtMq9EDp2qkTTB9jJBwmZCgSL7kB22cVijZqqkXG",
  "key18": "5uedLSeRQWe8tb9MdJsfwtq7MJf8SxzbwSq82sMq6X5kg8Q3adXbhawF27zKbTaGpiUR6NFxo6wK3g3foctkMpL9",
  "key19": "3XiNxg5f56JxeL832sYDxthiSKo7oTtKU8tgEz4UXZ6AQtYC8pYSgeuwtUAnjCCkw1eUPFLQop1FdssqMhRbeNSE",
  "key20": "5TmxkSt8X5SSfjyDccvZeH4rr1ne9pSQhgNiobLXSRGWW88MMd2kge5Wh3urRYvajRi95nC8fGrRcHkuNuEkJNEx",
  "key21": "62Rs4Gfd4r2i4DVpjYnd7m3noXj5BuFrqjvsUuomuJJFo6oKX6p2RganVqxtm9nneWZBdMuguqYcUfBnS5mmzxBm",
  "key22": "35w7xSCwVsghwhAbkWYkSSkEUD7A79TVU7SkzuFCTjG6A8118ufiYEsvZ4DNpCp6Le2xbybDv68cpQE1Tt7uXBAR",
  "key23": "2Ce5rEJhAKxFp7JzWg4Xj2Mw2cURX898AVLUNWYgQSFBEAao7mRMPAT8rJxiUtESM5wCXn67CcJDYJCeTUSA79pg",
  "key24": "61UKZx3Fi3kpQKSBEFQJnukpAw4YiJr56Crze3qAyGBDrL14H548YKLjxCt4F8NQVqrShnN9tz6zrrd5KLbVEmeY",
  "key25": "5ATwfSdCWL5hsC9k7UuW74U6TaH6qMomiBHtpQfquCUZ4P7hP7N2rPBMN9vAjyTvodwjC4eA6G1iiMrkiHLAsanc",
  "key26": "4dwD6Yh25SRS5NxB2bL69uMHUhpBsSDsj74oE9fnjVtwdbnqMaYpZMLjzU3tdeNyrHL92XpxfFFTD58LuCbukyjr",
  "key27": "q7bWFMEGW9ZTq8esDWiV5rrWbmMhPhT8V3KVg6eLsR1mwm5oLX1H8yDNkZRkfM2FYxpEbqPwvLLTk7oNgbA9sG5",
  "key28": "2PHNCZ1HYd9nZNXJk3XUZB61f3m3CnxJvBV5RpoRM2cwhoqtk6XUWQYLcEkRgYDMDg7fHbt5q5GUpFMH9JVytfRn",
  "key29": "5c5bQXvfw9M7bxCnQtFsxsCGicwy3k8RNyojZ88wJqfebsgBkSE1gQAXRLdumZtPzaajBRP6hswhRGYGPu6eD2p4",
  "key30": "3YUqkGz9XeC5meuX8T1JC9HwAkMyKF9pkqC4oi3dCYjcPMyjgVVQ95h9SqdXbg34n5VJXaRzP37hpNEGK5SXtGPf",
  "key31": "4qS6xXR6x1aS9YBtDrwQ2sPikFkLn39m5gQ234YcB1gETWGroNMgYMuEdhehyd63dHYfRSt6SVf7JuTKr81no7Zp",
  "key32": "2BH2Db49e4Qfqvc3VGTgxkTAp7AYEm2oZNnH3BR4hJwBKC4L441kku4Q8g325N7Svvse8AgfbSMm42gKSLQSAL6L",
  "key33": "4VkbQvG5AVZsHd2Hewr7QQ3w9YfCXazbvgt28c3KET4ft88bJ6NSxKcdXNJSoBdC5BnEfdGkJLwwknJg1VH49JfL",
  "key34": "4dtajYtPxfJSu4xW8wwJce2iA9uDy5qhRfsy8n3MKkU5DwkXQPv5qHHidfMw3Ywe1mvimNkTffcRfWWrPNzd4Kre",
  "key35": "Tid1jmbKXKKxLPyQcbvxkq67oxpsJZjKYz6kSW6bzxcaUTYqz6REiWuM2xYJcLVCLXKfUGhM2iBedp5SPuLafUT",
  "key36": "5no99MrbidsJeaTdiS19NBvVXzjAPfnys9TRZFsNAtnfvjnbkhCz911sk1ZUy9gAwyHGrZVFrvos8Bhc1s8RRHx2",
  "key37": "3jvzXrrfg4p5dAQtYnxske2pZtr3VC7V2VFWxFUbf98iNY17BpabQJEgdJsXJ3aXz1PUakPBqV44tzNJMhqw4XWZ",
  "key38": "274tHmKhnbxCQ6RSAGGuRY51N8zS7GMSK5WguWKjnQQNaCNUyiLVEa4guhiEqcP7edxcpRVm3M98Z9oRB3TAJX2j",
  "key39": "5cyoRD36UpoA1Sd1BDhux6EDJ2Ejnf9ib6dHTeqx14E54qaqYH4rpKjXnMYtUn3KjrNzgxQpUU5e4N5dT13cCy9E"
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
