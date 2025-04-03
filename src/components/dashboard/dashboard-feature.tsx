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
    "ENUSzec5QaSvjptpw9bChgFJdq5agujFpTJ8nDdSsvGuNabJMFzEcVGxX4vJkoqwNTrCrTtHvL7XyuFc1fLMJMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59LPJENWSVQ1KhxQPDxydozr9H54T6C3w3QY88WL7jGoBDd5VJtTujQKMWnRntDCtj5QN6cKMCRc9xjRNrRRGmjF",
  "key1": "5fyLtryNjGfykfoj4k9LFucBeHTibQ68LQriYu2jMc1XDfcR1TJKXt93Cm4xPbsBRAQCUM3fw5LuWttUW72aAbgF",
  "key2": "2cWJ3f1cSYkYYSLuBFXqRTL2LAZTQnmXLHuSKM8jgp1D6pmLf86Ma72p3dvQvU9swhQnvvgfiqE5kWjGkAhkDSXs",
  "key3": "2GctvyrafgiPEFrmxAcrxh3uMJUzzWhYDwMhGJURESM9efyv3iSMwqXUdAjEbyGoMAKBoxnMEEb3g8dQhwMwCXGy",
  "key4": "5bjrUCB4CzNXZr9bnz29Vu123nA5CjCbr7GYCBdjFBShMDJhqLZarNd4gT5b9gzYeDh2oh39hddTd58wefnz2Nf1",
  "key5": "3Nf8B3Wh76imiJZBR5HYZUtk1xCTRxUetH9HzNim5U4hmDbLfKzm9JHD4gC1jPw3eHepNU3qBiKpKVfGP1bkERck",
  "key6": "8d64eZ4HnvUHQgK8ATvgmjozLAndTjQcJFftPdMnqjTLS6Ui7c6oGisz5QMYLAveUpafhAizxS6FVaeMmfhYnEj",
  "key7": "44togBh1Hr2KfhoBKnnuu2tBgaqbtp7j94NvV7ddPMYHD2yiQp7hXHahKc7KCg1Z4AZ6GqUGrU26Hf51Sw5tNpHy",
  "key8": "WaJddrgN1Zaw4WyY8bJCpEL4wPMv9b4KiwcSmQYL9AbdDgQRMdxrqYv5x7iaKjvRJ1WuqYCaDr5w8x5VXEimE3h",
  "key9": "3e4JrnLni1xJ55ehbhcmhBPvAtypKuukh6B3wWYkSFJbrx4ZwmZvrcNkQFzgZ4QH7nt4XkuydGiMkZcu9GenczNK",
  "key10": "L8dMCAKs3hoZ7sdwwBtVF6G3nB1TZfDTVq81KFinFHZLBUhYkExFEZp9dnuFzv9y3Q2XD41UooFsdDh3jwimtnB",
  "key11": "4NhSpp9P5T97FQJ7JFx3RzYrwbZvnUGtiwMKum18y6pruWcjyu2FsDyEfR19s8QV2Y31PbEH3nXFZ8b9BWSbzatw",
  "key12": "xXd26wEHf1j5hZG54nHndx8fpMTt6YSecBdDHjJDk57XSMRgekyDpidWoxMFXeZXnW41DKqn4Pod8CDaFUM2AcC",
  "key13": "4zobPbVFtqueSLkusMXMQXpT57U913s84LP2Wpt9AZxksvDunrNA7LqTwJLpix7gti5wbpDo2xewdhhCacHW7SZk",
  "key14": "2qfA7KEuDf2t7qt3xUXVCqAcKFB6WLARM6BZGVmd8vEPLL4Jbjjp6dVXYEnUAB2usmn9oLL2ojMxiE3boWwSK7NM",
  "key15": "3HTem2SHea2dB69ctqLLVMwpSSeMXYatLLDavAUm7XdP58JNvuFHLYo5vUPr4UwvaoT7KHXhPZp6eev2W1Z3b5pW",
  "key16": "4P1oeCYUMGoSD3rQqioFJxbB3dbFDNR5uQyj3JVoCKEBVjikp7W68AhxXHPTKbmkM6FFswtbNdENuyc6Gbh62bzE",
  "key17": "5RjUKrTdj7VsYzq9Z7LCzjUR4YE4VfYdZjsVR2dFEKfkkWUyjcYj3wSKekqUFT7Ba9jduARcyX2enysR3BjUMm8W",
  "key18": "2wvR1diHNMZZbBGLoC8tTf24YedyDrAiZ5gSdm84ztCV8p7ie1wPS9QR9EupDJRo9DfhJxv9Rij8gXqNitXoiAZS",
  "key19": "5cUaaBvYQCKV3ztoKnycSCogh33v7ciUGrrX6YKTcDK2qN7NHwECj3prXJttDgWpG3V46sk6Kes4nRH9SmGgpVdN",
  "key20": "4Ca5VP9ZiL4mzzA5xxnVx9kjztB4kpyT7KdAHG7o9dwqk6dLHztTjFi1XBV72DVDYcZUJ1ZYn5bPNsN3ZYm4qfH5",
  "key21": "TXtNhhgWpYNHgQKpepeerdiQqytyXR4b4P8XG7Tye9wxBjp1dVi4x1H29yKLR981rrXwKDKKhEtzCZzGtV2wobT",
  "key22": "5dPUte6LntZ1XVkzYpHXLUsDgZt2LzxUFLVXTNZyYWTHZG4rBRh6DvuXngMCXzHEAGC4huZdZinGqBo7y9v3gBrF",
  "key23": "nQPAH2M2wGENjZZ6WAK61FCFqmj9eXEqGvn46vw6vJ2yGvaZDDSDBrBkubasoH1qFFQqUyAbsr5mEFdR9H15Luq",
  "key24": "2Bw6yUKcJu9HCvZYfGE2Tm3K5PoZ5QzL6LTzMzMHrafcEzKLnvi6P8AVckW1iBTcg8ujNjoLgfn4r3QDbF4QN5yt",
  "key25": "5eLRmzeAGmkbJ7xkotHjwjWt6fxKDQ7vWCEh6rWDkWjZFGa86jCfaqGyp5PsSzphQNvrZQuV8QUgt8ceGvpJ1g3x",
  "key26": "14eLw7FecZte5pgAZ9Q3So46ZVqvwsFih1VeDWyG1cEDX39CpYqMXrAgWRshv3Jzck13FmSfVhgdzgVCD4GdHJM",
  "key27": "4c8KvUG3WsGw9epecw9HA8BevQpfkNNQHEABsuKEMJe84Pn3xicU9rihsvHmZiAemzzrf1YqNaSs4rct3HfiwJWU",
  "key28": "65JP9Zxi5dkGwQxsqcSEgx4xyZkjuA7PWzxjBXchcVs9rydAwWLQXqa1rGc95LNYNuTt56MosRrqQQBgLVYh7Xbu"
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
