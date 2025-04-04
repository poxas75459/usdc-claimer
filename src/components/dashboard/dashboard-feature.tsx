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
    "51EQw4JwZLU6iLrzwYJ3BfwcF8jkHrDcTTPzeoqyTyznmzGwasLoKizR2j6cwxo89Wfa3SyCgEkhyzTEYywK1pj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m8smRvVV97HbRUmhSnjwm77Hiv749ZKBBKNPRxyte5CpyxH6HzL21h4s2WycU8axS6NUrGzzQJYpBXmGcs6dehR",
  "key1": "VRxA2bGyZaU7etvEQ51tmmyqvbp5WXdgWUPFHk9N7vQn4zgThCpgKJ93eVworjeDHnxridr27D7VV4LUC1YR6D6",
  "key2": "2zUKxbKgzmAWtCocCPHPqLZJeT3yj5a3kU9Rhzb6z9M5mCC1SZqCJFs8aUocHAZzYkAj4HNRX9pS8AJ31c36ovw1",
  "key3": "4gHvhs1xrm61VWhvg5i8xGg3tiwqsJB8pWm4sH2AQttYt1aqPQqimkxahrai6pt12xf3vZTvBNvarQxXf3omUfDa",
  "key4": "3ios1yZahX6cj5zSCP7aAGdBPim4DhojWYbWQ9698H4yLd2WMhv6EDRE1xg5qTGQBn1TUAGX4XCyUcNXmvG6k3BS",
  "key5": "2uS1kGkDQjXXxYH1PyKsb8KHJz46MiuAxgrWxXCDQyCxkJwebqzH6HDLu9RpD18EGbCXiFG627bvUJxxW3raBn66",
  "key6": "PRh5CqrCxhYyJAEHSF4MQ3BeeMjCYpc1XVmGrDsHgqwXb5DA7qPYyAQxUCY924YVPRMEqZujnTfwh8XSoQ3fdQg",
  "key7": "5AxBYkoFzuuqNyG8reDqtwqoZnDGWhd2tNrmDkRdafXgb5KBwu2EZpbg7i8WpmXngEaEN1iX47AXuCpVUMfTBpMp",
  "key8": "5M4vcjXkcWNodGLEfo7bQwCi8pwoWWcAm5P7hLZxiNZ5N5PZ42zE77nEge5Yj53TV42LaAQ3nojAnTK2dZCCdRfB",
  "key9": "5TKA2gbc2x8Xbo6H392YMJScinfqfGzYTN78dzJAiH3HagTif4Lhfas4QJJka5CUZqDB7uXWdL32QFNsTBM86sSf",
  "key10": "q4y1n45CK5kRNigmZUhgiC7RxP8hGDzLjDRnmDWUsKMhD4uBg8psYszRqb8bnrrsRou4hXs6KMt2CCi4tZHUhhB",
  "key11": "MVfwscXcQX5KNV6f1TbULYGypNM2nVYrwNAZzjk1GoKziNphdvnYxedP3ceW3DacJ292wWwhikLBfMo6sbBbs3X",
  "key12": "3u76voHfeyVNgCJDCqs786FKuoSpNzfL6yge5qEjibmzMvrLaALVBaBJGG9oarB2vVJrd5UbjGAfayiPvEjKbuSD",
  "key13": "65QEMD3Nzo12oCMhgRQWW5JnsSYGLgn2TNgkjCKybsReyAjTXDE16WeQdBA3MkgqBwx5GvEquH8fd8CVurzoM8UL",
  "key14": "3h442Xtu938czrfkxVPpFtWMS4FUJ67MnfqvmzDpwdA29ieEHe3HUCGBkSReX3zVh9sjGwyKsTJwFwrgndvWjsu",
  "key15": "HyGq1Sp56t6BfwmSM9xDnPW8Nk9hUsZEoFBppQ2XcaraY5Z6W4y9u8TDtqAGoW1PkiAmEdyfRXgTBmcFuGEVMyU",
  "key16": "pkGdUaL4yQcWwJKY6Xgw2MozZatLqnmpAP94sW9bzW1g7x8CgE743MMLxd4qiXA94ig2Njdk4hP7ZpReWMg82Qr",
  "key17": "gdjviEdEAHwMQ5nmTyrxMKQCi5GDYXuaoEyWe2FGe7tqHQEAX1WY6F3bePw7bVvxUHoaR6fr7bCpUrpQAKjhBnJ",
  "key18": "5CR3nu2z7q3s5WV1enYQA7mQf7UzYsfYi4kB8MyyDCUGWEeV1sfQjAhRm7N8fftdAR93DVboKkkhACbCwsmaKH42",
  "key19": "5fkagrAYsy5HGKKGWDhx2X9gVLuMFViHvXFdKLdfoFaADkbWTrNPWwyeWuz3uDEqena7viYbxExxZs1JDPP5FiME",
  "key20": "4bViycDkFBkaxpvzhVLCXLVjAEbVbUQGToNuNZAtHsxxVEi68MFfhxzijrjCVxdUhFw2tDqsp6VMy9tdkLFAhoPK",
  "key21": "4vvFSvNE97fBcefHNT5fyREGaTEideeBSmBCZBVPJf2tFJAiGT3jkRL4JNX4Y2dScQMi1rMxtALFZvQDrKzyTTDc",
  "key22": "3wC3i3xXQ7WcVQpJEo5pcXGNmb27NH9yRjU2oqPgJnCqmmxe3W3QbcLdKGBg7tX7ngBZHGrGNP8noRBYDAvmgXjA",
  "key23": "GjdS2sD8ZbRauhH2YH2ZGYJViNYDDVUX7MkzK4qeqyPJUPJBRMzcL71xtr8nPxm8wt3D4RcFD65VzbdyFHyZW3q",
  "key24": "57CfgvazGGdvoHCBArrrFyuWMEQKvU8rj7gX8MghgrKrXP9fT2tqsBpbmjamzyCGhRvBKsNh5ngiy6SDYjnKhrXG",
  "key25": "3T4AAoUoNvdg7yaGNQ34dQQoRnVWDr1edeqBi9YwpE1UHxVoFC38cAsHxj38SjVkwkVPoe59PP3Jvkf1Jcq8jgtp",
  "key26": "465H8USUAsydTzf7J1c5xgjVPLyoU9a8e1pnfjgmGoa5uLDqGXkNLfFtZh6A7eigu1JBXudpYkXKMC5XkonS1JZB",
  "key27": "4hdG9sRcvjn9hnV7K5jUVFC5PV4hkfB7hJTs3wXDTZzLmemM3si46XTigYtvzB8LTfCHVdceT6nkpBy3oChB536A",
  "key28": "3nwU5ayG4zAzbimCfvqnLjevuVf9VoULxU78S6traSaeCkJzBV7SyPsdaKSxaSfGCFyk184ixUHKqSESkpgZcegu",
  "key29": "2XQnX2ARjizYgqNmbPMMWSPHGtJTudqTLRe6sxMffTk7ptReRsEgopf412pcWEoxKxWgA2jnQFpf6sJoiwSPNKty",
  "key30": "4vVgyqYNuKYbgFEQmZw5ycWNauDCjqwaxAxdSeU9sBvNwdiVQ6UnBgKRzg9F3LXVLw1v8rBfW7H3b6apVDdyXS4C"
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
