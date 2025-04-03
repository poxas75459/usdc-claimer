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
    "aSLvqFNSwbcsZMnWqcxdYH5YZLXtbKfTipsVfcaza9RZ7dQVUtAwoQqy9cNxTjEi35ZG7jP8wbD3mBR3nFKdF7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nUimUktpKNuX15eHfKsXNq8EaZx6JFFKtZd39P9AGAi6gAGwH4FbsHNtJXjMRrqn2BUbpAHQKAV4Zi92g4y578X",
  "key1": "4WCghSpLdjk5AJQoLkGhtiLXWrH1CCnQiW3E4mJg4JAh92D1423Rg2p4mkB9vC9ScHX7exLP1b7xdfvnhkq8ndTF",
  "key2": "4aE1ZVYF6hn5jdjBAtwMoUtSeKaFZ7KF6qYKtsmn4KQWNVAY5AGVCcP8nWzgiyMohz4sLjZpsRTpMb7Fb9DhWhJ2",
  "key3": "5v59xEk2WmEXkAQDaG2jVJJE7LBPGjQFF7RC4pcWs8NamQ1VdH9P8HCvzoGfwhsyroLvkKG2qeNqhjKctGiCSNK4",
  "key4": "3pPcjws5bMUbrxNgakX1eoCtzAy5SuTHStazzQHuq99BsfAMs52U6zJUgNP2PfBzZPgVZ4SHt1dL9C7tBFG7K5M8",
  "key5": "2pSDBKeLaDsYbKyHGrBjHNQAvUKEw2F2cSbVuZtvb61jddmomjmpEt8MHH7gaT9Ej3daLsWEqRJ893YL2bFKoSVJ",
  "key6": "Lip2ZnngFZ7zMdL18WFFcJQTDPR6AM98sLZH8DjKA9a1zu8JuktvVREr1jS6Dey1t37YLe5pTdjty9EaQkRfgRr",
  "key7": "3JRbt6qsUxh3cFKf8oE93Gu7Y27sd33fyLnDiHSqG73Tfz9n6mQfYv5y6YizZaWxUCnfSDBLdywKZoeBF1EjRD7Z",
  "key8": "37DA4gBGtYZApbBbXjLAhv5fznzSxF5TCQox8qwi2ZAb3rYw2zXzsc8rpdGkxDzq1y6wGqQDMDE4Hrw2qstmWr25",
  "key9": "3VUr7DuK4EWNSxiCmJNup161tWPmH72NjbiH7XhuUdZi2W1dDmq9w4o7ugwVRu13CYFBAeimvZ7pwTDBVyipFL65",
  "key10": "4Cy9E4Eh4qg1qtY7i7skMhshskhEWA3iNygBsADrVnkVJZL1Xr3Qz7rhKijSzhAf4pkSub2emRomZEbEsqgPDkVe",
  "key11": "4cLhFSUH38bicbzxSjuKYZqnMcRG8c7D9um2ci3ZgYnk5w3TAiQ81Emd1tbaAZG3bDJDHzJn9M5Qc1Xqi1bL7BcT",
  "key12": "M8nXtVmGabebNE9xC1TNoPo12baNi25y2CENp5BL45VLweK5iMvZrorktWwjMQyMFEGYXbYGpgMmL9MgwtTDoXp",
  "key13": "uPXRFGnFe3TwNyn3NyGcmiiJ14k9PxxsGNqZD9GLKUnoWf4GmkeH1xuZnDDw14PgQHmbEPw1mS4UPXSz52jWqwe",
  "key14": "3sNbK374PgNC2yMQ22DGLULiVXgwJQmU8Dx4JfUzrxspnit1hdRKH1nuxsGBqkN4S5xq6uHU1pZHnVXgTBwFNm5S",
  "key15": "3ZEJcLojkBFuX33DCP9wohjb1kg8wFjaE9Czp8mi4LpoPnnZBTfSEe6heXGdpRNCNg2UmgAck8azDWvXKgC694VA",
  "key16": "5MDpvjnEWsBKnyEfVv38mcniwBvfRp8bkqiFd414dkBbA7qtASoDCPBNzs6S7TSSimQzCxy6hX9GjGiLYDbUJ6Vw",
  "key17": "5mh9D8e6j1uaTa6cUkeprqYz3oJfSLwDJVqrpYxaGrYwG6N8KKZTCncUwtAZedboNpbYyTpF5T3BKUh4q9fpF9ta",
  "key18": "2oCxfZPMetCjbbgBmF3MCtAUHvbnEfsadgLvnDoicQEfAUREsdERqmb3fatAPNQZ6oBWF4ysrZrJp7tBTEHMGytF",
  "key19": "2v1K7jsnxtFXurGwFG8B4ABjbHeabZSCN3QViYpz6MZT7DpUiB79Dxaab6qwaMw779A4AZbz4smYmojLThiVeLq3",
  "key20": "n64NtgFr5XyqcZHUg7uhR6gXxQa7mkP56z1GZuH8oQi98xVQqvpQtUrYXEe2hktyKNDVpQJtF6kQeojrvSWGBxe",
  "key21": "3ed3d7eoDcteBbRScXCM8PbVfELNck544St3tBfEb6KPyRoERRaZLi2yFhqboviwsZJD7JxSkdB7JaT1KuFWAoWz",
  "key22": "UgHCNmEzp2TLQKKhQHaHZa5EkgoivtMQCjUnaxV8TaeDmAyUUMhXaxUv3PzRP3erpwGZnYFcgZ1ezGkmr7tC4AT",
  "key23": "2VwEB6hayqFMuCUxL27HeRCwchMuYRkf4LwR1qY1r1WjkeXR1VCMSfECjEAi3Pgv11hR2TgUkDZCTaJD1v5uNurC",
  "key24": "28wNefVagC7mZEU3kiJzdHZDi5pEaKRL9BRFNi79gWE9GE8xapPBfsRtGJ4z2cc35kYeckr9wrjAshooUcZUJZNn",
  "key25": "2M1C6zNJ5zk9i6X8m5eTbvZwVNc8J34gX1qpxWwpa1TvYeo6SQdRcumoE2TMGaaWMY9xmgrq4dNmCJj3ySDnLeLU",
  "key26": "FrJ5kJSLS3Dzj4wjaKRtCbWC5QCx5raEXveGXjQvMg6VZniWnMycFrmSS11FKcynyf3Ha7dNc2kYb3VGJi4LHtJ",
  "key27": "3f8hHV8HqJ8QDRfjtY4wApTZEhroupXianRVCYbrMK1MhcMRR1ZusnGz11t7Kahue9WLFjP4MFEnv2A5RnfbxFHh",
  "key28": "5jgkPpRtP9sqnd3YFbtf1v9zwXxYdmGyeEPd88EmRaLQh2ZSQehk58JEajrHedC1hCk1AxEs1BKR8Tc6Gx6vZdwf",
  "key29": "4QeP1edBDC4op2Me3RtQXs6F25q766ZuYAtPAD5dw3UXM7Cp7VnUAk1z2vQVVnhSbMkHuKHLDGfDPzv8uuMvSg1k",
  "key30": "2TSsPnACMK82Dkq7SW865zrqe2rTnfGiE5c3S1XqD6b6BUCxFbpEBTcvBhodMc4XJ6WQfbphdv1ymTvztzn7YFfm",
  "key31": "5wdHPB9eKt5oNLGvazTCW6PfPStQkhpDzLjbpBmccwSpeqiM7GyExrJsHpMmJY44YZfHXL8U8NiCroiUShXMPj3R",
  "key32": "5Z76UUX66TQDXVpKboFkbUjeFfTN7QhqxW1rYaCfwFp6JrPEtYAXiBFpZGpK93rtardDrNY1GnYnXuruFxXitrhi",
  "key33": "4c6BQBR2fUPbWg5y1cSSVTCoxjYuDLW9SH8uC9z3w8tkexgvGXgQ2J2wkwi4RisKoTpHFQNQtMjhKL8qrcV3fUGc",
  "key34": "4ueTHv9RT7NzQ56MnYeNGxstVzecnCU4VqxhEsc5VwA5kuHQSQ7PoCk65kg1cm3xKYZdnLw4AJdatDbLUXHBjq5h",
  "key35": "Enh9skPPRGrtWk2ugDo9pvPYcYwq1gYCA2k5uNi9PAFTpDgghtaW6HmiNhfPftisPqhU2CEQFBEbuVg4AtRckKE",
  "key36": "4SjSpfrryhpQmErULnkUdgzGiLqQ8ipF3SZzJZgynzJMG1arcuLudhqmMLUnkyGhdjZJk2nVMN2M3grY36HiCeGg",
  "key37": "4PW4FuDn9M5CrGkL4iig4b5vhwHAd8sXpSjspwsB9nnLu7pwanmwdjSbYnEro5sGv1Quif3fduZZGDcr4Ln8Kezq",
  "key38": "45c6yYFHxWkjSQ8HyxgV2ueBKLCrqgd7Sk1gqyAKhjfDSVFFgfb3BKhKQoRi6uc38TX2gB4qi4owSRHK8ciW1XPt",
  "key39": "41CuVnegs4MRX12aJGvQCdV2Chu83cndGxbmDFhvDXMj2YnguewLuUgkmLA34MPSfhwt4DwR82kRvhVVz4hpTrMD",
  "key40": "2x8Ks2RcFYrKxXSGF9xWYB7GobLPWSqenwsgsVThamWZjKYLNjFRonq8Q3h3Gd2fRf7wpQPV1fre1vptwyvZ8DbU",
  "key41": "5ghrG4F4bwLA6jtrnpLrJKx5g4ykAuziAWcETScgWFzey5AxpPgKhMtPxzvyKuNHaCJGZDVvBjD6vumzxCNREiYA",
  "key42": "XRAnogJxUkpTrGX7Uq3aZ4gmWAPUFKhGZ4psqcJjH7PGbvjVrqfDvztp5PL5C2oY9hVGFHmeq2eQ8Uaf57b4Yi8",
  "key43": "21jqu9gJmbXXoF7DKhYq57QoBQ7HdUaQZfxK63sx4biMR4PNRwLnZmfTqKwSbjGMxE4m95mJbxNg7ohuef6NSKLn",
  "key44": "67i6rJjoJHyPWrZZzZWhNUTcnCJedVS12iLU5YcT7Z8NUL169jC3nAV8iQ8WxUSANhXm1u6TMiKWTZGs59VaMu6J",
  "key45": "38jDBauCmtYT8W9prnUMmPfQs45HPT4rAK5MCqiKLAUXMj8MU9qyeFkSSGrpYQ2kCXbyY75mVeKYN3nGSeTC8W9b"
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
