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
    "5tg6pYKNqdMjta61Rgb3RMyLpRzF1Zmo6bc7kGvaBRjQh3DxUt7F2wCYATLx23khfBrcoGpm9kgiVskeFe4sPEHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R99eLncHMLxUCazo6sDY1zzNCsRBuha5c6nTBABjBzGJPHUYfKeREdVbo9ifvthGev6u1syV2DUDc2WD9bNT8jz",
  "key1": "4tU7D7MafJZHumHYtbtabkhwvBjotyYMxYG3RYyDSmdv8uAQ3LGYjAwo1TrUu9J79mMVuiikt5w5ezh2ZNBrWq8b",
  "key2": "2xzEp8GesBfCcBB1XorwrLBo8Dt9N5qzLvzWerp84sAF1376ofNdDZ31PuXWiStFXPHWKquYJkzJGcieDQdD4qTC",
  "key3": "2r8JLoHUDVYxnueaEuiodPzS67piPQrmgfCDKw7vMu5Nt6bzd7KaTTfMREGNGjWQkK7sxh4n6EvQknVUZcnnqqTC",
  "key4": "51H2XdNMfVsAjdbWCaoXXQaRN2d5xFnfTJGFPm7bjiQXS7ucXdkZz5jo312EVVHfnr6dcnnhC7C6c4Zsv9EpQiMX",
  "key5": "2RLiVQ2ZmYrJtdTaPo1bS9MCkQ6P3Bj1igCfX5APbaYja2spHU3Nh8CfoaqzJgEtJ3ChWb88Q24CgKfTbM9DqM2e",
  "key6": "vLau5eMZg7yXCoByYzqnGDGg1qFwSZiXAECqsDQscgYif8BRn3VLU2v1k5MwfoDB6QgLuLa5kBTKeWNLKcuVKMN",
  "key7": "2mekoizbuwYQqXFBxEV7hrQeUi6hLXsg1PvhoaTC3ST2rimwukh6M5kYcf9azALHfaz5MNgfTKwLJziBfyT3vh9J",
  "key8": "2wJ8Z5iv4dJdGoJiG8kKzzXH5PdoC8NL8ebAcFHS5fnJw53ohWHntwoDBMfUX1xfKK1g7YsoZX7hCxvsXmdnPESw",
  "key9": "3y5LJVxo6fhQoT8LMaSbxx6EEPd3S7vRwc1N8kjRiPf8G6QrYwfd1sax6EQhYxbmS8SceZjCfwjQEUHVrWNnC73U",
  "key10": "3K1TEbnKv5SibUEubfHPxnaBYYPLNPHiTMoc6HhrbNA85j4U9oXMw5EsqfgYZQxQmLQM7KqrrSSE6TnzYFMJuvdM",
  "key11": "5T7WuQcbMcTrTzJZKffK6yJg8HsWXCknQ3fsqdQbHNMeyfDiEiezRCgiAozL1haWmDwbkFC8u7QX2ctMKCmtgn2D",
  "key12": "2298zYhNE5svifYqFBKCksgxGzx13HP4PJd5UZ2yiBRJGXCYNTUSDUQ5B9Bhqaiyg1rUrQrkVWjQ8FjvcC2P4AdU",
  "key13": "3SUBG6uPcQR5E9uSsNV4YQrWNesh7DTg99KQFcofavB6TMJ8dRiz7Myx7mzvpLHXGM5SHYcgeBpcK1RLja4QJSkt",
  "key14": "5TPU4CxdihAe9GiGVmVoU2okTFx4fp5yJC5BbA7Y4ys63LvW5PnFV19AZV4MehfHP2yvSVr56rnDoAjGoqxxafL3",
  "key15": "5CVRvM8oqZcT8MwFDRAmmTvu3J5NvMYspxWni3Zn23YQ2DQvGi1ovbvExzmzE4xpityHzgLa7BXNQ98LAeHsjAjH",
  "key16": "fTm6YStqF4rVbW1qhDQpWd8dmqcToA6xafXar6eB3nzQHWV6tgJVpVfwE5KoR9CCVxQApuj8taQJjfYtpH7aQ7L",
  "key17": "5r19wKQTodKHqFTA2h9dvH2dp7cMbJUHM3Hmjzsox8EUMrY81MBaWWbFC7g6yYwvxkw2JQQnsdRy51Ao8WKXxZWP",
  "key18": "3bYx4hpw2muy2R9CWxQsgAp7ZWzMZTKdjyimgktjiZigpbKSdJp3mmkJWo4fgh8taDz9WvikVKp4rtdofaHUbnCM",
  "key19": "eFWMnicKyc9teYfEU8wqLshJHUo66R3CggcDaa67Eb94EYz5NvL5uRB81G3LDMeUnDS9PhUYzea38rWydyr8jSC",
  "key20": "2jQGjr6RuH3cfLn6PsHQHfBrRPk7nPpGf5oyMbKkFB6u1ZEjb8kRStdguEYkqh8wUrDBkrdnW2dv8WLPt4qApnzM",
  "key21": "4NNypHy1X4aWCoVeTGkvnAqewRYCRWjdhiZhWRoRKq7jpWxSE3zBm2UG4oWkKMNwPzR7ChNUYaVY3uGb4DEoavSK",
  "key22": "5RRNGw8h6Aju7sR22ETtZ4mJpmvjdJsZ7VHaE11fystzq2gPYph99VvkKw7ZGrc7kdJzYNS4UZq3GajNHz76e8Nt",
  "key23": "3BKMb5ScYBwp4V5yMhh5J8QtQqrHYyCNNwHFD4EgpCDui1jbzzZBdQYE3MpF7pbfK7Tvhm6yR4hYA1dAZ6mdpKEY",
  "key24": "5HPKPWt9GkY3qXKviV6ubBsXsLxVnvh9Uuv75jncsMHW1BnAaT44FuLbVrVdbTWpM9SwuMgtGVGmCiHmEGEWLvPV",
  "key25": "2nGojzG4cJVG7vkbrUHGAcbx8rigGPiUmzSFpZ8nx6P9cV9rS8YJa2um7qExPDYi2VBy2qKX4xsjViokmzk5Rh64",
  "key26": "4MBTPAnByivBPp26cge4TVnDfDv123sRLurrSteRQGHrJsfCDX11TmJQY53EH47bUw1hP5aymBV77VThqdUgHXCS",
  "key27": "61YpNf26SxGXTgB2hKaXKXZPaqcPdMsawc52ncdVVJ8Uy1WwVY6rnYs2RhoN9n2PpmE1dZfFRCxMuzQH12r7XxJg",
  "key28": "4RPsyRSC32ixoeLHuv6wFhN9Mav3jo2unSg429E8BZGwBEpXuaDcwSrWBMx1aBoP7U2jkYijEgk5f81u6uTH7m24",
  "key29": "5rkCLhaZNtKtwT54KTa9NYm2d2TbCQfAYJuXA8zBSe4632ysvRYwshA6f4bFbAENWY41Zv5GUeKqhBzee4fvD9tW",
  "key30": "5XEBttQmbFLARXLLvfNTdbo1VaGBWuA3X6UmY7eX8bHZVs5F83xHo4X8Qak2WWejxsvhTg8rfqiMqtktgV2ycj6N",
  "key31": "34t7425Rn238GVyC8nsgvZqHtUqYTw6ovWX992e5vYUx31z9EG3DiABUYdqPgnq3t7CVqPFjYNsVis1hTXQrraMC",
  "key32": "5cn2i2b2nzcKhBb47kLL8zvoUVgWyZBJKc7vwDjgFH7y9SSHwYkf3nYvPXjXLcLxLthWAZ2wDNjzLmUH7mVJNh9V",
  "key33": "4Fp4Xpirkgti3m8wFGhUNvFNxJKDsFMJZvBmUDFzEgaUcwyTZaCvyCp1cud3hVo5GHFLWC9WmaYYkd2VaCrybjGP",
  "key34": "4QG83ZJNsDVdNfb8hrQirgALPxQEBL5gRasPbBxm44cEQGzgc7ch58s3EhYU7uwcQgT3hxzgQR6JaD9KNRyk2Jg3",
  "key35": "3U6G8aWwJqyY7Ho5Bx4FQG7bkMDb5EBzqFSThUAgqFc568RTnqYTsYVao546XXpEejQ2kfECqyxP2ZUw46Enjmm5",
  "key36": "4GUKuzmcoyW1B8K6UNk859VgNuouYj7rNEdEsvCH1fyvvR28vibRvQ3d8pTfBG4P2TJyppCg61SWaS4Z2TWe8V76",
  "key37": "5Mbor7thnsapEu5No33ZUQQARcSaVMn4BB18kDHb9csrEvAh2eL5x3MZS8wuy5SVxvp9NsayiRa9pugZX6GcDjCN",
  "key38": "617J7Br6LaPUgxJwPcSwRG3zpKyPCC9jtkg3LVLGXVXKPUtfYpaX9xMMGvr9YudFhmosF4DECkzmXsmPebsULuH5",
  "key39": "5vhSepEhnjvz9mv2P5GiqWSJUaYpqXe7jnGS5QpkmA1o6TUxdnPstFaUdkxkV6qsPYjU2cgV6mPrLoiqYUA4t2ZW",
  "key40": "24wfQW3b5mYhv8eMMhoBhSiQUycd2eix5PF6DQTFQ6QmZJfCf3cACbHd4iRDdKSnmCJCvKjt6fNdFskmydwuZ5TE",
  "key41": "2ycVqEEgX1NtRX9XbkYboQWeJGyTCqG7zQUfefR8NTBGq4piXtRBR8vzX8aypvaWaxJ1F978rMqok3dZfqJMcEHp",
  "key42": "gRqRTU7nobdZaXzHA7ETdVUNHYhyd5dv4fMYxyfbFmyW2vfaWMUxcY78JTxZrJZJVjoALyGcqrHqsQzqMjzxCPa",
  "key43": "2N5pdjdgr43WMX4eJiHd5NErbBvRV8XdfVSWmZsEptzwH5UZnUnCvFASTqRwckyrF3hSRf2A97Uy3f5nTksgpbEz",
  "key44": "4QySNf6nycYUXbBpYNHvgFoNCvyDRcczHBugQ9GjiMvwu8zDYRBMWqRVrgk4hTaccJywiMMnZG3FhMtVTRawPpMU",
  "key45": "4gd7tw8junedatQ31sN9i16DdCu2dTzkMmwpi8uwigWvbxtH6c5KoVs7q54oavZXDuXoJwxppN989U3Trbr8KxHR",
  "key46": "27ezCPVagUr6nv47T5xpdJTBwND2N22kkyMfGACjHxvwY4pQKHkKJChqxahvPpd3kaVTPxap1Q4AQ8UmZLzogSUn",
  "key47": "33j9qj3cjGb3HsiMxV65PaZTdfEiYgLvEZ7rnNjtaSPWngkJ4RvM6kXdMLnRX9oGQUyorqzzLbeYvGuAYmC9q6y8",
  "key48": "bpFmrgn9vmTE5vXoq5RVcKUioU1zeNqU27iD5B7Mc52X1kbTnAyasBSY9dW7SvSjWsxs617MK81SwSYqz2C9pz1",
  "key49": "i4BtiSuA87vXwXQ9Lfz5ZHDR4r4icSEymyA7jJuNwyww2HX2FKo35H2QypVcLbdLapYXdD4N8AQXx4MQmsy6oN3"
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
