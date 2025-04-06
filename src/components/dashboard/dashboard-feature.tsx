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
    "3uwge6STQo4Au2kuYt8CiYkGut2kjqNHrBCCEegC3EjhVXeH1VGiVm782vLCj21Rh7Hh1vW42s9qxLB2n7sdeoj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WQs6SBz81eCJvDyjY8zcwLqLSRw2qu83j6GcbDPQLLknU1eLFyaBZdymDPCd8X2yPsQXaqvBhywsNcWwFB37MkQ",
  "key1": "2zaJ6aoizH7h5G8mYuLoD7Wz483aHx1Ab1c1UTsssj2g1xfuEDXwGkUp4Qbg5UdWaL1Feep1xKKhWtQaH8qWyiZ5",
  "key2": "2yK1V5EoxJr1LaqchuoGbWZh6i2jAm7orTm6vdynN58Kyx3j43vbSMDKQW12DwD5ePWkXec73zvHiQgxQEAYRWaJ",
  "key3": "4owzFs6uQqoX2SkmGsP6f7CXBXq9otYQdgUte1EVy1vWsy4cZsmjpRrVmD8HWUduwwMAGjJodYPnQcHgwufxf7uT",
  "key4": "51UwZjQS2Aec9AsRTN9on7r48WTQBAT8s3FHQ5JnERwieJMomUzKcRnzdcHLodsaTBgDNJdaxdc1padPfT46Nf74",
  "key5": "75VSHFQwQbDzmvGG7PWSjnLqd8mAoeMEZQWqUVHz6E4UCZMKBWbbLXQkw9pA3a3YDK6PFhtjC6Gd8iMJfiJDMvi",
  "key6": "5otx4dNo4sHrUgC7zZaxGgKyotNXWPoxDB4hunaRwJ3iksf5XvsNZ8CA4vF978BXCE63JAxniKNaQKobRVfeWsRC",
  "key7": "5SGjzRVspWAFmBt7fT9ZWQ6Fq5vNgUGTpQUqFnDq8fksMsRYRvRMkSJgJFVTmzGkC58dLGnzvpJRybvYYLtjTmNF",
  "key8": "4dxPrk9VGRguQPTaBscd6A1SSqKXvTo7hHojdK5nPV4LW7zgWJedTmELmcvEcpt82hvrZZf3dVMob3GgoG7BwnEz",
  "key9": "4Hz9D1kLoLBS6yVsydPPfugUeCi9pJ71APb9Vcf3Wstm6NVmUHpXiUDzfFFVSiS4nxUZkxPx1Li47zaEyhgm7EDA",
  "key10": "3ndELVdPsWfAAxZhQMPYgeyHzAiV5cYdGHbwE4ffqD4pAHD3rG7HQAHVviDcF4yZYSFoumgQz29q7Asa4Jhjsk3q",
  "key11": "5douwFGpNJNfEUmmRYjiyarXGFDkSJMxD9LCB346fVt8V17QeciU69o5CXRCtZQwu2vMxmqsLGVeBCm5jP4ofKYS",
  "key12": "4TcXjdFpM6r6Jmo7SkG7fsiEPb9VgxM4zWg9gjd6mu7qo3jvdBQ79BtsqBafTsXjFca6vCE8euktx6QrbVje3u6Q",
  "key13": "kXT1a7i9arKdcXqWDBTa3NVuqZJnyAq5oUQSTKYnAubaxxFXpUo2LVN3k9Zd6cbASbmgF9PuNQvTuAeMRrzrCu8",
  "key14": "RbzW479aVoXWd2M2MHTixjhjQhp8BpwGk1KkzrtV8gjLHcnybZ3VFYAxLLFX986qBpSMKhJFcffaqNKXMVqkVR7",
  "key15": "5Zc4FvNWdEZdwYFibqkFTQysNGSnTSJDZJgJ4AtLyQoggTierid7y6VGZkmKupkmMvrpJ9uYnFzAPhTMrFQhXjT",
  "key16": "2Cmri74V4DoXBq71sQC8XyvDMusFSeUP1BbH4i56KcvgSzC3erSoEZjH6FK4ZEVqM8ACoK5qkH1N95XZxAQswxhW",
  "key17": "5DW513joUd5gUT8ryhMHaBy7myuPkAULNUwJrbVCn5cS5qG6WXPEwhFt5UzS2C9MAubFhNfWw5F3edM4JeTnnNeA",
  "key18": "YM1Qibv4uHarevKgsAQZhXDXgBe3hErS3WQR4HWef8FWsRmJKCjkzF2LZKoNsbhiRUsqmGSmJLNBmoGZaFmn88o",
  "key19": "2WMCnTAJHU9HNsKPrznbiJsvsettY7huM54yKUoGcafRAyXpXbwVmaqXawv4Uowv7xwMzwFpsJHWB6UyhRkqawLp",
  "key20": "2TMhNjjoPb9E1E6dcjwd5kCiSzQVEanhVT474SfdH9KYAtTTpR9YP5VCHe6r2zmg96Vb6amaM5PTRs5ue7Py7yWZ",
  "key21": "wN9pLGaEVmYzgz3BkhGB6HS8y2yyxLqzaApv3nxeUTAQrJyVmfV8HDLaxH8QLw4Rb6977M98jXQXGMMmrS4SzzB",
  "key22": "3mvDT8MhYpWZfDZck5NqBR4JTHaVhwtHPakqHqsLDaEUYUxDz2o9SRg5BCDNseuPcaZdP2PCS4Tw5ucKUiptfV14",
  "key23": "ewkkYGdJrWvNJ3KTgkJAwDuMj7T1qUouVyUTP1pxMewrdYNziWFhrF5jBhtCrdtkQCn9FNeVLCPJP4JcSWSzPha",
  "key24": "kCpM55uo139boqN8Pm6MZUex25Zsg6xwZWxCQPSueCbEzjnKkCS8KvSegHPTyUgGRQmsoa8kN5F25tF71CuMJT1",
  "key25": "34LWb6cg1MrYU67xnQDfXyUoTFXxXdugMsvWVjXfP3PnZvWWq3GKvMNesDHzbTgPfrAEbuNVAR73PyYvpAPTvG5s",
  "key26": "3QzxgrjTH5sc6FgsLdpWTCiN5trZG6qfjgjPVZtpTvXKMQpmk1B5GLZN8UhPqXxBUt5y4zGpZ6iNrFH8XkqkpJ7g",
  "key27": "3J4PTxUaLuaudF1VgLXkDX8NzxN9hQQHf1KgmMVVgAGJj3pxNTXbwz8DE71VezJQtvQB8f9aQYSBMZjCLdYz1qeZ",
  "key28": "63Nss1CVFpZdMbtDhd6xVqFtSkBNk6GB8XUcKnpZw9zQSfDbnPMxcadfzBwdLe1jon8K9PS6YPpsAcVkD8YhDp1x",
  "key29": "3rEU4UbD5fQscYMzS2QMMuVf6u3EyvTcLSxFg67ZsFXo7KD8mSNBua1JoVqLrngZxT2YpmcA5Ro2EmuazFS9dAnG",
  "key30": "4jvParEbfeph64ByaypdGKMCE74rgDeu5SPhkRMRkqFuije1QFrAHJggiyK2mV22WanMVpsqM3fY6Mu92hLHtWyH"
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
