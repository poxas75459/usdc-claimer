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
    "BSYwfcU22o6ZoCPpK4Ab6CxbUjEXaeyPQpMwpWPg13f1TWWdh2ajqegUSBdgNKQjFYSG7VNW9ai4jX8JW58BYaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z882XgMv81eecyUqKGvyLUamB3GHbafXDvtF4nhiJuM2WZhmEqWFFwja1GwnMDwSLb6nryZ9JaD5H7Skez9s3rJ",
  "key1": "2oeBTKd1g6xFWAvX4xi4SHPzdUgDCnXC4wVtH7dcGZcpyPBgrKBjgJH5yMbAfquTWFCgbdZZJLR7XJBFjD5jV7px",
  "key2": "2cidc2FQP8a8WHj7DnJ5ZSJxScUyDT8RxntX6rTqEL3odZ2JBKHp8cJoHCmcMipb8b369A7jcm7DG4FWR3toxR2e",
  "key3": "uygtxqje6FSzT5CvZ2R5yJybvp3GTGV2q6E1n3cSiRaLYQ7UHYUVxK2CTaKhoV7qLcJSaxpAizqpyJYDg193pyd",
  "key4": "2CgdWABo218QFuv9ne7nkSvTetqLWpXd25J6JFXMb3U667R6WWscfHPXyA8ihnreXjQeH8iieX64ZHtmsjSPVJSV",
  "key5": "5Ptq3DAUSC3CmLriQQj3ubVeZiwho8KPLRMsrc9hTLTfxHcUrdtZehkXXPciKcbStHv6rBvzTVhtXJ2sV3kCPoi3",
  "key6": "bE7Pkg4ssGsMbLjjJC8mFxqsu67HcAcQ8CcGHjfCF4jvS7TBBAPYUv47Cg6eyqhuXGo2dULyBeMYTFNxKaMfijQ",
  "key7": "2Lugcz8FsH6Nncf5PWMVHc3NreGVNbEr1gAzDX82FuZpVdAixcwjAkNQQYc5kvFdmcvQ4UtxkKFCBu1K81ptUPN5",
  "key8": "wTqCMLWtethBnVef2ti9uis5PHGqCxEAucdTMJdwJC2dxbJDMKR1w718rSX1p1rjRbDQDnYgiDbkNNnRzRcqLXf",
  "key9": "xLSJrx3S3RHHdaTGoGG3ZN4vK7q2ANtDugRKVcyTzYyCh4Nw3k7W8XWBreczLN4WQukACJNnoWZp5Gf3P2Jd628",
  "key10": "1LaFh4omvhHCJJcwJ58rJgfGycm2q78WxDQYPTKBWDotCerGxL8Urij3hdspeydZV5CoD74EzB1JuaFqoxebmKY",
  "key11": "3qc3aahxz6xxe4qBbLwS6utRDPs34wvuzkt7MRq7BWqSBzh4SoRrJxNNzGzXgek9HDXcroy3DazJzhVj5pLgNAbj",
  "key12": "39ersBftYLhXgLRto5YsxXCZmURZ2X8XBuEqgMXS8Z9u8xpK6Sg35x5vFoYtdXjX5Ypb1BSyepKJvKnxzs4fHdJ5",
  "key13": "29amkSrCjzVbLYSaHUAVFjhKmnQHizDfBDWXAkb2QT5J48GSnMx9Dq2QpRFGBctA7317J6k4qdrTMeJuX1dWTQBJ",
  "key14": "2vFCwah6tLRcNodxjaswVnxjDUshC7QhhcNomhCdF8ZYoNw2Y4vv42n5U6WPjR8x7pyaey2h7ZUXDUXSJ5AnrNGD",
  "key15": "CSaAHS2f5FfqPp5SgKuyJCTpDsxXrpQas592z9j76MomDBvqvWXHSZyoVDdYf9FhfdhYBk3stghYCGbMzi5935M",
  "key16": "2p3hEVVgZGdyVsNLMFX3GgJJHv376fgDqkvcjYFHaVxELfyFs4rY7tQFi3RXzHwQatNYQdWNos3nYz4THTydjcED",
  "key17": "42F667SMLxSkm2T3ePRbG6d6adtyKhnu9xvA7R8VnabHazHYqbizarafX6WpjrFWvgA5RPoinULRK7WzDByiTWDZ",
  "key18": "31xiQmL6QXkEJLP8gdwJHriANbEdipBtJepf1U5J4S7Rnp959vWD4QgWB6tHoPHiKnn1ppFyJCJYqjKqvBrX79QC",
  "key19": "3NRjuUMy3K74fRS81hprMZvLgh7a8jBQhq3ZrjrZA23xAXdFxvks2BZv2ontMqKJ8Vde1KaPxvxXjHJiZhyuqypR",
  "key20": "LT2KRSVHsBrt3DddBMcfmCkPumB3pAZsjZKRthZbEx1EnkLVpd4U8No9WbbshgZGL5XLWMXBjRK9fXJqa3hEmLB",
  "key21": "52g3RrpsPWrbEPfX3W97Fk7DUa5gAGP5ANEyt75jYb8TVPrszHEVQjh7i1XoV7JoJdjxC4tArVuq79yPgE4kmA3W",
  "key22": "5G18S3PUQ44qKzaaYxDr2r7NhMDFTHY7K4oGaweH1RB7wezGeRphSCDzs2gCoHUgoArSxDCwgnUeChhXvpBktczC",
  "key23": "4UZM7Wz3ZcshN2EPGActF27ZbtxiQKgtKK8y9B9AV4FzuRqdN73WwQcK3kzqzXeDk638Y2yvEh37Ekqd798CQPAy",
  "key24": "35JcMMXPhbx6WSgnfKAR5MKZMGcpV7UxP2QEHJxhTJkbkB9H9xSa5oDCRiopCcpEXns9Fp1cW4kD78FtqeKsiaiw",
  "key25": "rB8yTiwTcA5E8QHCcmtu1ZbJyfjvMNnRfV5TRivDukRMSX2CGs1rnWEPhHqMxar5XPxeWQEseiL5dym9ndWYobm",
  "key26": "c7yS2oQoRUMuzU3tomY7uz4ZvtMWQed2czMmrZVbRo1vvStsszVCiZL8ZSLq9vEFjWZsF4TwPuuNU7uHKN6Cxhh",
  "key27": "5qkhaLc8FYTXk1t4XTppRm6caNp23pdbzKJUEZx7K49biDeMvTFmuDitSCNgwtkuigGK4mhRi5Su25c4f9hr7qo4"
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
