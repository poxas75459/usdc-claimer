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
    "2c98p53DbYzAp5Wx4MmuqhjE89DfpjVnf61UkThCoEBr5wC5W7F4yxX5SmhiyEe52AvT8E1cYL3k4wubv7gzjt7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aUVy31kA2L6e5owutoPLFrCHBkTJvP55Mqp47UmJFDdG819GFjm3E9MPjhNjJCCEYkLfyxBBubvST519MMveFj9",
  "key1": "61V3EzkeNqyUdGDp3jDPfykgHpowzUYobxrnNoq8jveAFq8kEYbPgHaLzosJP5KSv2rXzD62rAVhoJsUXtstyz3d",
  "key2": "5qvPMaPL3sPJyzQDDfWveEeximU2HPwd12m6oBU3kreREragkvU6q59R5KRJgwTMax63vSH6cYVC76FN5hH1EZSm",
  "key3": "369KRogfzUKSYEwtmdgA3dK2S1V2BegPNqou86wosGfm96utxKxhWRNxpZXQ9iXHXUxXi9ZvLCvpe67hzj79KeLT",
  "key4": "yNGFrJq9R5cCfT8XH8XeRspKtXT1vTwZjzLkTtk71nkPFeBfW6K4qVcTNhmsEWL5dv5ibgHvh5ZzJ1F6tEnebCA",
  "key5": "2hov247LLjiLzMzuC6oovnUHMjs3Ud1G58oCKSAtiYVxrDcxEQxRaUCDxhC46gqvAomnmn9AYD1Hk8zyJvcvpw1j",
  "key6": "3LmGVS79w1wH3uuZeyKcBeuV25tddSzQtaySi5uZijMypqRwP7zav9styCSHCuDRLbxfXb2o9m3omMHosoJSYqk8",
  "key7": "47k3hZMKGbnV5dWpgowWXX4Ljdu15T7oRqDc1qrEw748j3FrSCE5bNh6Jf2jp36fWDbME8yR7EGXBCbwXbdJsAjH",
  "key8": "3wkafcCL57m4BXd2w7EqNfbeRRhW2NKu2FaWKmXYwper3ZYuBTn1nj7nXc8Tkq5otb3hwe8adgLy24r4LuA6S8gJ",
  "key9": "4xdwYjSbXaSV1KyvDSc1jBuSXHkfFA8F3QPgBHmEk1TMecwK1EB1F5DffvUtG7XzGgCQ8hdijv6ZbkRVHTmZdWVy",
  "key10": "4TgigfpxMYnR8b7B8EhZcgXE1iZvearUcRsSmCY1FfRS9B9mcsscCTkP8HHtcxo7JtnzZHq5cgTooWaYnnZmipRc",
  "key11": "49WW32xUrjb2pS3wMw3wWAPaoJfgffFhZvLiM5uxhEmndMdpdu928Kvbzatxrp4brY6oSSqCLzhFZUFXrC4XRFeL",
  "key12": "NXoGYLhW34bBovjCtU31mcA3vbeDC8kwWC13Kafp9eWrrCimDcDTeShS5KUcynyNQFGJiMeRdijT4CgqjPp9dRe",
  "key13": "4z59LRWRnNQpTpjN8Cu5jdxXXBoBXonZwHVPcVLLiaL26845QjGnJS2ceKyuRc9ussyXxVCMiJW8QSfUgbvuvTke",
  "key14": "uKGrdcyDuzomBkkAY4vsALzBa61g3CNzjPS612dvgKd8QxthS8nHJVM34pGzboHnNcytQAoQizsT7T29gyny7k9",
  "key15": "33tHSfvaV76EVMYkRTop3gQwmkDt6cvA7KtTiBnGrtRf7KG2ND4VNr4h3ozTnWeKBSgD1axWt6KmPYkv5xnL1Pjo",
  "key16": "2r9END1BQkTQjLBkB1kCjNxxnRtYtucSf78jvWASgc5p8ZYeqsid4qfBG61deGWF1HS2dxrMre9ACho5o6zHQi9Q",
  "key17": "4oUVUzVLezwwx2vBZoWyh7zfki6vuQMhzWtfnWCSRfF2uMYKiJov6fTagAPvWvZvtS1TLMVXgcwwgrqctLyUYqVk",
  "key18": "2Q2mQ1QjJxxnhKF64nqKBkjRRdFSFatGj9n6YKA3fS6h9M4vFe57JFnKVLpZz5tDYzfG5uivyFwiKnGwrEC5Expw",
  "key19": "4NUh1qY55aqPnUCYCikCoLX1qZgfkr4uW51ZLcaCQrVCQQ5KXhPSQCunhqNN11R1rjnTQ9nDFEvDX8MPhhre9au9",
  "key20": "uqZYD2rcvKh1sCrYy97v2Ws9QSuecp55QxEzW4LGqZgdUSE4KFBTsV9ypbcYDyCAyAPZ83M8jFbRLwstqH8TD7Q",
  "key21": "MdQPEfVmo4xJuaJy8ebcfi8p3B3KhebNhLuT3Nj4VrGhCmFtPhM7TtTimnAzyyzkSUNfftoJa8k7zeMEAirtt1K",
  "key22": "N6Mj7eq8hY6mVchg13iELLFHEHXDjs4opwpqyD7txvrnaQDFdiFMSPGPPehJDwzUvTwPCsLH9AvXzntvGedYkoN",
  "key23": "2qpQKascDUnq5LqkGsrwhufH12sQ94T5HAXLTpaCLZxGmD8jcUaqV65ywsaNso7AFi5NRcPoYZtqFqk3n518BQxk",
  "key24": "4e92rkL4Sy8C9egXjYqEqeAHPtZ4WuA6fPryzR1DTc1h7hiE7hfHfbWrVrYEPMJABVWyBhYjRSkpPBJZmfPE5DwH",
  "key25": "39ZvmrYq7J3NjtEoeDvW2pC8nFCd67cnXSZ7W7pWCwzfdFa4MYBrVgUsz9YVGHFqE51SHZDZxvCFqNU3DmhBHLHr",
  "key26": "4SLiSkjELvfuGN2VsyhQHrhvEfSHMigkbnbAwgCWb9epDnyNJscyW6QkAPVaBAdY98oFdBBumhj1q1uJ9AqjtwWK",
  "key27": "5ry85n2BSm4Dfu3Y33KqN8ipvNzq9TgAfqo2SpHkynupSwtqoN41SNXM827hSrfe5U7b4ARbpXzingCp7u4JxH7s",
  "key28": "3kaygfyJZU4DcTG5s3H1Tx63FMapwtgy3svME9JCFrekbTgmT38kgEv24NcfAXJjzyAMvQsd3ExLfcjvnKjVW7QA",
  "key29": "2PS7uEgw7wQxr719ZHzyuAcfie7mAQ11okubuwJGPuJ7RVtcpWqfYieQPWVAuQwa1gqvi9ovgfwQwLy5JLk5buvY",
  "key30": "2utQQWrc67FzLL2Q3rQokFmvoCLjwUe1shHWcoFwz7sizpbbC2RarW1vgd8U9B4JZ4XciLuvafoFg2ZkeS6q3wq8",
  "key31": "2NUQTYu9chf5hk1X4ZhuGHGb6jxsR7h51FNzsvWe3Dr4eiEc8XAEESu8pR5Yiv15BFDP9xdijjecU8LmHMkKgLHU",
  "key32": "3qrYABbNJ7d7mqKHwECsMEzvW8PVDsB1eeQ6S6b3p2JfGxXkCvCuUqcApDQ2d4iMQKyrE712P3d6WBCq6tLbTvXd",
  "key33": "qw1orDVKwtP9cRamwxaBosvKWrWBDqM9QzXBnjExoKGJgc4XJRmyjTCYW1MhKnqeqQ7v9nbx3byKxroRiAquZzH",
  "key34": "4HbBPuxqURtdMb1uKLTkUX8vVxgF8zzX36uKmQErBHxfNPVRMQ21BdALu3WvHoUGgn3ZDPns6YkftjLLzXH7Eerr",
  "key35": "uTWpdpTtLi3hHDUe2odS3PWvKJGfRnetXJAXPoPry3ehU7gupeUhfASJPdmmKAAZq3YPfosv5dWpCzn4oJMMSEj",
  "key36": "2PGyq89iPZAxyPmj8VjtX2SD1m3Dv1DZo5s43MRTzHMb5Tdx33z3xxYJM2SnFCPg47QbBxHTsfRiQGLqwJ29b5wK",
  "key37": "47xtCsA1YkNkVzAQCtwuHMSMtc8BoWQ5xqwmECUKA23Kxy6y44GcqLSgJhpwF9kyRxH2eWuk23RdP1ZhbXg5yNch",
  "key38": "5vXjJah3nkG7HFu9sthihRJn1eGzYhCvxyuUGMrckwEwjid143pBzCs671C15Euj7Cyw5rwj7p1Jbp2miq8mNGUS",
  "key39": "4Fffaz9j1ZWEJBdGZq9obhz6wVnbmr3yYwRm54VVbLGqJjZFyo5snifSsRyh2QUYSTDM4BSTgNPUVKhqkkXgC9pf",
  "key40": "2UzDT4tu2cSbiHyXxULgJYivpf6Z8NAjDSzvS9bP3tjMy2cjzt9kSPVNoMToznAMWYExowkNib9wYgibWqaMBrgL",
  "key41": "2vBWb98qddHSC8TRggu9tNUjvKRaNsTz5AF7oGAebmdoL788NqTsF9b7vQ3wr4rbLyXn3tsqJckttkw7GKqmQcz7",
  "key42": "5pZi15HUbXdnzwHMv29o7eLZhqSev87QZCvoJ6k9RUg3chT1kdtwTm8XyXoCvXjY97Lr9vmi3iC5PfacNRf6DNu4",
  "key43": "3FNTs26dx1SdjGydpYEddh5V1p6trUy8Ta1kMGv6JWTrJWF6pvEeKrK665r4mwkRvxyP1ceUHnFBDUkR92PDZgNr"
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
