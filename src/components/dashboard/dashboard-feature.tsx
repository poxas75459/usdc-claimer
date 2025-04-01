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
    "517dwnLkpwQ35q2BrjgEXtysc9ujEWQrFeXTsVHHSjqs8LLRCxQz7eBGUP5yo8YHZ8ik1kNNWEbiTCHshUakPDEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ofLgxvGsTZ22uzMGjAV23R6DT47dXY3ERtmiqGAEeK6yCrHRXoMRCSi5uZRnpx7ygMtZdrH4QB8Z5nHPz7bDZ1",
  "key1": "4xiR2UY9tCmEkRJUepm9BHor3kF3w5jd7HNauaWYiUTZC2kmTnVFCerL6UhyQUchVjzAbhobenRRTpUmvnqZPEvp",
  "key2": "2N1v5ScVbibx1iG9wdbnL4rkDEquFtRPUzFzQNaqyMtAUgtd1s1RjzaP17EVr3uxvc4epUZXkN7KHuyzxS8phFGV",
  "key3": "3HQZatLqBB3cXdKwnoqbBctzhCP2uiBwkaS7xTdF9811pwX7CBSq7UZk2kjGqvXdVDjSQJ3dfqonXoPmaBc3Sc3D",
  "key4": "464nqTP6RjYKgJD5aivzxUV52JxkxHk5KopwwTSCpLKgNw4JP1RWmkS8NW7pYe82BY5KAzKdHPKK4sWAYWTedC6v",
  "key5": "33SrzorkdBo2XG7cXsRDmGBXgPzd31EMw61oasETUTCjeCDQWDG5pa5hrTpug6zrGP5H6WFnxRZgRZyxh36ErC5D",
  "key6": "5XUZ95d9KqzTc95GPLVJjHyeyrF6EGTf7CbdCiyH49De1tSnZqieUfWgK5c43fVFPWo8tWb4u1ai1ugAWrSn3nHc",
  "key7": "36zPdt1DGUxsco2oc1STSTTYsgqGQPseb1jJv3tWg4haAE8p2LCxTbTf771j4y7UNDdomAeWzoHNbAvtZz9EVeXM",
  "key8": "21aqmdGod1M7BzEs839a71TuVGqaUaRtJJMaMuWFYozhheboP8g1JWr9Gn9NhXcbgFxPmXg4r9YmbmquiBRuDvWs",
  "key9": "5u3MKAo1jRdRwRcWNFjAPY3Seud3WBbrDKjSVhTtHo3J4ziZMorw69qc17ZWzTMWVAv6GPW1y8H3UQiiosYANELy",
  "key10": "3ip85sDKsABFceKXgZ8LoqxjJJD2zbS5t8RyzPRpTdnggCiUoFu6xdW9XEHhfdFrDo1ewSAtBriXMcZC2LnLg1qV",
  "key11": "3gXzMbbRYxeL8ggnCH3wvs8Dz32w4ePG6Y4Fh6Gc1QJRfcSYeuDvvYwNGe7rmYiScFkw99Ksdx9xPxGAEqnLGtMh",
  "key12": "3Nbo5od8NjWvSzPk6LTN3FNU2fJSvvc7nKU1bt3ahN5WiKBV91hELEPrzLiWHQtWKxPV25qmj73rH4TJu6XkoCm4",
  "key13": "GW3nt8jPK9AZmE8w8GY6KiMNdEXyh3a3m4CNXRBDreTwKq1b1612fztgq16BhT7sJJ9XaM4WEvneQq9FrPg6NM4",
  "key14": "5XHhRzT6fa9uwB4Zk5EfYZJ1iW3LaQKb8jwxerTDqE2GyfMmYXHSQqgaoBGnfiJtetAx1H3HiG3DKhcc62DT37zj",
  "key15": "J5ZUWn4XbD4ppg7yDGMt4Sy8V5tSBXRXz4aBqg56tJAXVzzgYG7WTtCKintT2Uc5BNUw4MWL24ZGDFzYdQ8Hbjv",
  "key16": "3vniY2BWwYcJRm4wh1SXMBuyev72XhLaVQpW49sga75EibDtvGKHndrRWKqEUCqTmFmyZntdMy8P4sX9dW8XjoXQ",
  "key17": "2UJxn9VxGyEERNA59QcnCr87iLR9kbwuqrJ7okiFZDU7HAoG3a4c6eawnQXTTFAhdmVygf48NptaTre1MRRcgJb3",
  "key18": "4z674fRxqA2tFDzaMwQXoTrZNgRGQNDz6Px4WQctnYEyiAJkLPw6HhYrKHjr3TmGU4fteGy3WFi9wXFAGhkfcuB8",
  "key19": "2SMwNEFLNXeU9UYeojpySdUqqfFPkprSddEHqpmyVU8J9QpbzRfvzwweinBjNCa7Tjzoxsr6AZN4nyWHAzUVkk6H",
  "key20": "6Zo9Bbf84msRH6gsAGMhz9qLHpGoLPpmQbKhEZYZnvpDAZoWTc6KT3kPhske7YNiNRPD3GM6UDLSG4Gq4hwkjUg",
  "key21": "2F84Pt81EcvvRmLfJXGkzQAgsbFCg5nP21abtib91zuZVCz4N2bjjEAdTnkDhuDZRVkaxhMHAW9oyMr33QuHBHs9",
  "key22": "2KBcdrtQLWLev759QdXyE8EoAYkJnSqMjG7t8CnkLr8zVP5qkFMNkPdQ3BMB1xSgivToQgPxMQVxhQEoFYh29ntG",
  "key23": "5ydAUanwrKAer95nwKxRcM8zEFu7g58sJ8Pfs9x6Gt545Dr75S6priBFd5QabkYS5d6eBRcqwwiQzDfZDEPZf1tS",
  "key24": "5tq1PjQm72CKA8JDWy3nG1vRtVZygPrqtYkys5GjP4wtq6QbDbiwRodKSvyrVbi1ruCtNnAZbcGiiC71jo8eYe82",
  "key25": "4i7h1Cc8zg2f9eUsgd24ZeZpN9sR5PxToP2ypgiGJGJxshYWx5hd79ECKrzvQaJNkZVGhTdZZQT7AuNeQTBMbayD",
  "key26": "2dt9LHj2kgzT8L9dtfMhbvSvBj8QXB5fTvjZ7oLUsJaQGX7wkouymTYMF6TPFiSUuuGshWZu2YhfJUr8oaFPxfYp",
  "key27": "2bfbA93nvvUzz9y4ChW2jMFkzo3r8PzmzuL5Ub2PLu9Gfp4Lt2x6ttdeeKFUAEvRrBriwv6B4RgtnNjRBrptgngq"
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
