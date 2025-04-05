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
    "3wbEFHSzu1o8T2NyDcCRaBpN8U3W3ktHnQ1TL9wQB5WLUmHcRGyazRrBAtX2gnK73QLupbAFUHbhbN6umcDNr2Nv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PhEJwcZzJ44d5okv8jp5Mafjzu3Yd8yRmDqw2LvvQSBF9q5mn5e2wBXNFDsP85iH9iCxgv2DSrsN9QoAz3VwPcG",
  "key1": "2zFT1NPEC4trFiCqzdQr9Dz93RxaJeA1U9Yh2nQDrgzrfdvVWkn5EEyN7aEvbjGgvcVRt3HfjRBUugQTvzh3rGZn",
  "key2": "5LnqRXqw8eYZJ7AqKMUJd1RMyBod9V6Za6UYYnSMjhkxH7z1rdTm8tDYKBcbE9KKUT7EW8S4SPFgt3vGFZETq892",
  "key3": "64eN8gD3gSirWBNqQ4FRGxSirNQ4tpZD93kJFyffkeUPCdSPvuXuyf2Veb9vpk4fvGC9rfSGQ5269tq4M7TMnnke",
  "key4": "5kjJF4rUhhN8YakqeEPHss77QMpv5aruFzpoF9ALXfJf2HAAaPFnMZFRYXpouFnTZJh6JuHqSDbpbat7Wr2rHXbV",
  "key5": "5eBCX1Pek6LRn9VzJabx6DFBzGcyCvczqZoC9pVWFQypSdQHKpt9PKivo1LSRCgW8Jwi8B4xgkLzSNczCDbkjbrw",
  "key6": "4mx1xDJqPHjBYnXyUDiVXNutctxVztunbtsvwBgGonRdGBBLMyNsnCwQFigPxEjjGq7cNJFkb7R44D3DKVBccxa3",
  "key7": "2ZR2gCRnqXLC6ATtbbgSGSDGyzgsQnLxy1cj4xaUHEqgBFujxzmCPJqhWVYnuRSDGrecnniq8i8ULKPq7JMq5kyV",
  "key8": "3FtY8PCEBea9Z4RdK5hEVewkekW3Smy8w6k7vLzHh1NsyBPpgqbcnVhXL4LpRZocupcaG4gE82D8ZcfLapUDM8xw",
  "key9": "GRwGQZfPtJRi8jjNMaBZoJ83WaWrpZgivT3gwb7zv15RtaKmBKe4mTxTjZDcVodzpgnnqgiq26nyNMUBHrDtrVy",
  "key10": "61wWz8nHcTqqPe79doesAewpZad2NzMVeuWgXf7mVgvkb7Gm9P5N6ch6JyayKary1Fjn82UUwvJqcMza4u8xNrXK",
  "key11": "5ALu8iSZAcghA53mBkUwdmAhmQLHQwUk8dygir1MaNEhV8W8TB3E3Zh4i3mVqaZMaihjj18qt7MaohkbDRDH7GLZ",
  "key12": "3bRrx47pSXh26kYRbwkVSv6FaHay7xspjd2EhqznRxhwau3RTyjEnNu6myE1qVLvkg1MNqNojYh2Nr6wfdxRuntX",
  "key13": "3ofdUyyaM3p8Y95UMYHE8Hec7i7T6JaoSonD6KYBHgi2sCCv2zLjFAbuMQ5WD6xVMR4k6y6rfXCPCDXsKXmBgk5h",
  "key14": "sdC4X5GHHS8yogyWS7vnp3bYLCwr7hLCndJMc6AHsKADUxSHj1TzcY35rR8DP8yTMdmGWcNXhQ6DHj5jzieZrtU",
  "key15": "5hzr6h5HySHKWR8x3HLKweYzSeCJbALMJ7dRzLS92GNYN2mi5CMqAbQcyqpohLdaKMdcUBcYcynT5LDpdKPy2gq7",
  "key16": "3pfh8Uz1d7MyQff1eqdXDfS5be8ramqkcw1NFPsUPSSwFtGS2gSiQAEccbDBFxwxmvZWtTd3fMW8GGJyAkQJAQEY",
  "key17": "121b2j5zCxNxqESnopWdJ7wFqz3zRrumWGspo7uqicWfKZsFv9X6f3C6TPAizS6cJLfaHwqhEqXtYHuQSzT9GuWa",
  "key18": "3P6d9evNir16D9SPP9TFzSDdvq8hry61vp2adgRobDdCmZ3Nb2dfXFtG6iFUtrdRB6FQRUHBLnm1xU4jVN8SWvSj",
  "key19": "Xz9q4Be7aZzG89TmyzX9sbySYYWfzR8YgQPrjiR3Ak6utMgqSjz8moWoBWnY6Wv2ar7qjMf1DpQSbcQpxBsShAL",
  "key20": "d8cCSdvJHmJG1FSANaSQuhzfwyBkJ6vihRajXsguVYJXjADfM3qNVKyc5xDzw2tWZ4P69b6Kq4onwuYmBZXuVNQ",
  "key21": "621e1giVe2MT1XqtpNmrncf3rocX2JqUBT2oy8xbUbBQ1fq1KHPVjZufadEmNDKCbYxQ3xdFFaT8mqtaYDZxATpY",
  "key22": "2SabgD9CoMXXaLuwTzT6mRYFnxFJiLKc9HSphdFbmwGgK452P2PkPQjyXEvAbTtwuqkjD8p23XC8dES8YDKyzmxN",
  "key23": "2MDpEKFQKiTmNcqVyBaJPiYJnjHKni1i74CyGthVzwaWroh2Ax2pTvm1Cc2fMzssK7q3Hwcb1AhGUTBbwxnHTHAL",
  "key24": "3gsZuBnRsdTdByELaeneaxV8kge7TxzZBm23T9pKh7mCn8FX6CTm1LSQ86rXZ7mMdzJHhLCFFamDoW1wK1MTxtNo",
  "key25": "4FxqZpKhxj9Fp6YsSwFgsLtEHfEBMhssBZPe9apHiEGqJYBvVaF8NrzAMSYripgTdm2o1gTKETNY6uyEK6bNS51n",
  "key26": "G2ixzaoHGvVqdW3t9iR12f3Md3aEd6uCEedEBgaxZEQwGQBbZAGuHUxewUqqATH6LQxPVdaDqFrzuZSnyktQFbw",
  "key27": "3w8c5imbYVB7uCRtR5kbVbYLpFEAfDT8RF56baCYToKoxPMTgejNZ8SAigDsgLvQxjzjgZfYAVC9zuHUaHpxZms4",
  "key28": "2Ds4TeWj53o1kmQN2Y15CcDyy8c6CXPTpCWbhJZ7mEjDj6ebsrahij6K9L9xHCP4ok9Ts8vHnyt5Q2zMBEiKK3rw",
  "key29": "2k6HZWp9zjAoFSJUeASSrqYSkzsXFYj39r1mpnRRsXgGyfzQ5Cqxbb2NUJvo8Ewma6UWSy6gpjV6FodvnApqiFQF",
  "key30": "2EdFpStfkRgtDjutRB93vv6BbVidpZ53d3K7bZ3kJgWaGvfQ9ctZr1q6sa7SC5xacudJWLhpy27Pvh27ohd6Zzio",
  "key31": "49mkRYCU8T69rmxBN6pWancWc3v5M8ojAMDGpuXzqvT4YQKpU3F5Cc4hK39DqjYkmY5o84NpR7UioL1W3upXZBQt",
  "key32": "51o7BhtZB6uCYnMPWJRPDTJ4KCwiNS7gaWuQUMmpjUuJgddRYUgFedFEwDaoC7LLQp65W5nryeWcTASz73wzoRAH",
  "key33": "5B2DmvH1agS8JJs29RERRMBt6We5S869qZc5jbqYSa68jakVimdDWTcDPxXEkGqdvgu2ivCvCVYtbYRdHvmhoU7J",
  "key34": "2kRw4xTUfra2bYhM3odL6Pg5HuAtyArUGEdxKwmN7nhPvFixYZVUcpeiUpJfcEDqZ2SnhHNKs5uQQ2i7XvpDMRs3",
  "key35": "49RoozsYa73K1Va5GK9SnYpdL4Hm9kGXAxBTZD4LVfDU3Rpy3mQ9ZazevmP6DEYSHiNyzYL4gTf2u58D3QNveXkR",
  "key36": "56Vi3ouknkLdPUcz9Ke9Y14MqdH1JagPvbSCTnJaRrFALPPZAhSawphxxM9xHu3957YENJtmNetfy5tgqS271db6",
  "key37": "WD2Yc6q4rapdGP5UT3SNeEEwyuxxWzZdQFsfDsXUoQf2wnu5ymfkzuPWbVros1srdg8XHoaZn6jTa3Samma3GSN"
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
