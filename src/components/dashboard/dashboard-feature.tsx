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
    "3nWzZBcRugy3hvDFP1LxoMqyVa1ryXn1EBxGNkdVSBr8VKp6ZYvU4Mr5uXpF2ZFVBpZKtE8VCLsQsvLdedmPN6Dx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54tYXFUV7E3ovc1YFFrg9cMuiciz1mM5mBkE39bLJfC1Ew6qDfarbzHfUEhGgc12bRkFY6rSJrkN5uDq32MHbkmf",
  "key1": "4HMBH6GsahDUY9PGYLgH7hBvDMR7V2UkKyAspEYCJZbUD8QB1DL898LW7xGaxQmRxmCkxHFWBAapPdwunvF9Cc3f",
  "key2": "4oZh7NmETdtqdg547WUuJpq8hWG5HU7QpXDFFa9xMVhrmUvfpqr5jPum5MNwQ4xN9HXfxLKTd7kSKPi3MYGnqvnX",
  "key3": "5QSgY5JoTBoRDLxP8Gy8NkWpZ3kd79jy9ubaYit4qT8Zb8m1h8wENQ19VeHDDTxYPX8Sna2xmZBHbFMBbdWBmXwP",
  "key4": "4sPeGFd284jKqp5CXWBXuEWWT7MYpR64GCwaJwQg25LxDJwzB1b91LnXHLxMvDPgRxpaZQmKyopDjmY1ZJZZSn4p",
  "key5": "4XtHfnhvMDkW3PAjBhiWN4Wwy3H7wTe8fp2PWndNGSwGdcXr5Nq65WW2ocnMdViwXmphVzmPjf4wecvmB71AYRKH",
  "key6": "4QXRt4Y5QySxbEaoeJJPFaZR3Bh1BeHm8twxuQ2mt9TkDH2u67b3Coe3HUA1TrffMR9vWtaeQQVLv8LQubs7cPfE",
  "key7": "ZuCMer33F5Dprq8hDcQMhbYVMtn8HF4gPMvk4fnjwgJrpmdvFkiK7kJQFuPwkovHrUMQp8vSRnWe84wXxKhBW17",
  "key8": "BMREkqdMYhubLx87kgauq3J4n3UCKgXrdqrSoNLrNg3StEARbR7dneCzU5CXXnmbZwGKc5hWAPin4uYHfk59vas",
  "key9": "4Gxy6kuhETEMiHmU4dfw5Zu4UF7SUUmRdmiMQRa1mHFc5WQ2Xz2GNMT9p29MYYRUqedfAd9guNm2ZmGQbnaAu4Zb",
  "key10": "4QVxyHkSEo8AGRrZTVX4JHGaV5by3KaZwGQrARnk7Z7XpP37YCneBSRMtBDmY6HEbi8dmMRBm1DicCkNNZXqqxsq",
  "key11": "54UL6NVKR7ngXDySfUd4fHu7N54x4y1LvWBE3kSgC1WmmuzQBVSY4Xbk2cib2CkZA9NZtWepsh8bHcy6WSiJTXS5",
  "key12": "29sttRt7AKZZvj3dT9LttCouJGoXwoXQJpX1xFfR2pp7NnMBaJ8y1RqCrmhSNei9XnnFyJfNwm1vh6NiXypNCM3k",
  "key13": "i8v2h7ZMSq5Tt6chR9xWoaueVZ1qTteH7sU9XYknePub36ssfW9XevVL3P5PPQqA7U9iXSH4DEhxx4yzLxNsNYt",
  "key14": "43gQSmrK3Cx7yvKi3jXFHsj88eArUvmvcrweQerqQajqp2Fj9jCPPMYjRCRaCdEFA5x2f6E7c9QUENFYFc5uHzzx",
  "key15": "2Ef1XC6eHeHRSZZLGSSSAb3yDyuPQZL1eBqgZfwBJazjoqCwjnskEVfKyA85VtsDnUy53xMEZNP3Jv4PJvgRXiJG",
  "key16": "3UqGbVXCqJ9yz5WxspYFSpe5qnJy5rhoezng1Ke4wycSWBBoVb5mgPWhZTUpt3pERrHgPfR4BhvbC7iFGmdMrsjS",
  "key17": "w9NDYzaQnAeVBAtbUtksdx2JxLmzef2VxAhMGn6gc7f4esHkXw27yw1WUbE3Ujs9fzmg3rApf5VnCqiYoCMBPwr",
  "key18": "42fLgPMmD7GjN2U4qn4wu9pSJGdW8tVP68EhbTWEea92NAKuC3DoP3rSnmffrinpHGPzKk8FNZP6vyM6r2QLdjzw",
  "key19": "HHvKbG3rh64oHtphtSARftD8VAa7gv3T8CSC66GdQDAr4cu1EAHQbgUXsXJED2hefgohEDzbrHyHzygsoREFZQ5",
  "key20": "4vvvCaxJ4qd9Sx8wY1TWJs6wq82eg9xdRthb9XmRRHyxp6YKvrTKqH9VPJiNE4tw16CoRe9NTXpaxB3afd9W8dW1",
  "key21": "JDDSjBZ44ZYxQr99KQm5CTrZqoFZYz4cQiJdys9wGNuUdePaNwwG8Nqmh4i4iTwgxDvoYNTYXacYJd2yzyA11ke",
  "key22": "2LcGBuymbxAJJDd7ajteghfsSzfQMkdTCjixUnLUgv5zvsJXBRP584eHceggEjNNvaKSWujXFjFnbTB1tShbwfxg",
  "key23": "5arZiapWaENCVcMxgYNq9Vj6Fy8VGNNMS7XZpAkmu9EQX2Fs7oUgqabPtZMJEc7kMtUtDWrKmk3kaaVavPCFGdrY",
  "key24": "5zCqz6GQbaoz2Qq9PRojYx8W8qRdcyXWrzjfBJtE6TL2WUoGJtbBJskxA8Kc5ikE677uVk5QTv2iNgbB5QWLaiRw",
  "key25": "3wYbfPoG9NS6QGpzgXAmM1juLreKeKpTQYNYf3aXrG2Ldd9VvdLavF8y4r8m66vQWg9CdPA2spENoZqbwATq3PJc",
  "key26": "4QQjNbTEBZiCP5mwCXGxSuCKXFH8yMKZu2p2182vqDSi3n1Vsn5WuYjoC7QmGZnf6zDfQs817KqctrZCRyMaKwXK",
  "key27": "2ijfMQS3sADBbjE4cKp4sFskpKULrjUaY24WsprRNY5gTr8YpYXFyQHPsdsdLjni98CzSJCtJdxysnYkXqE6Jxvb",
  "key28": "5uVmoBt1owG6wpW6doi7J4uu12a9gYERezAFLcvsc4ZQ1CMP8mysn5nLyugRzbaGqEVE3oaLhCK9e7Do71S4Ua3z",
  "key29": "H9kh9PL9P81sHbike2v6x5EoLxzrdxxxAYx8fuP7DhdErtPxWbYzFLVBPPBTeeMxCtPRhJNA2t3YVmW3e8DD6Ze",
  "key30": "mYmcYuZM4qfuh4Vr7JDTkGRxTPTmJfdRGUNZe3fdVEs3krP8CQwjhTBajU4hdw294DiBiDVZFE2tx6sxu6FVwMp",
  "key31": "3sgMtKy16U5hAAMo24hGYDvrWrtgmGXwF3L27QzatiuMvfiiGEh9BmorRmLyjMet8kvLa3RZ7Pr2B1Rq7Cbq3hFA"
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
