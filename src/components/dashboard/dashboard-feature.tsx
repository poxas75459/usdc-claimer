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
    "4gC4ZGo7mHTbrbgdwF7b6MH7cGXuA11iNAigyPqWGB5Peyfq44oDbT1nqRfTVFbYR9MsBcQTee2orih7UC5DzNMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qzZxf86xjeqBq13vyLVHGncbFTn5avWroP8aHiqMEHsymY23jkReK8G9W95SzDi9dqzab4LpjXTc579kmEUwsqJ",
  "key1": "5Y6So4AbF21Ad5THKjuz9xYsEEVodg8zFFaGVPSXoGrqaWA2oYvRfuCPRUJCKFKA6wAsX3WVCKe3P346z1vHoaVB",
  "key2": "3k1f5UFi8gzo5MA6xQmB2L3zxKX24JHLn3jydqxVCFC61bLeD4YRGHpZwSQACeHgj2gEcLRmpzLQXWEXQQdWuGo2",
  "key3": "JxWF39CcBnnN8Q5Tuyx8SyREPSZnuYUK9BfPdAXAKL2cEKSKEQXMgVt8EUi1UkKxLXVNENwt7k7Vk1tJ5pQxsn6",
  "key4": "2QFb178nWJQR5vSzZCtdo13ocKToxHKRPXEN1kvzuyGhiwUSdxfToEo4bPw4Z4TE1ZkdSkJbmpxUzuaoMy6Q5rdo",
  "key5": "5gnAJUXxwts6cFoSWp4Cn4WZXi4gvtXoPR13rPekkkyejifRBVcNcoou8Qz3ED1mJYDb7k2YBf1uamSpiPi1z9K7",
  "key6": "3zA2X47deBXo4NxjQFcXVJMEcL37FZKx75GGzqv5e5CToTjEG37wdmj8T5ThaGAsFCbq5tQghn34QvLhdRGLwGov",
  "key7": "3Uqg7v6BRToFaVEqNHu2iASWRW65AqEetYbjVGDHWgQhKDXA2RQYbsb3PtC4SH5QfkosXjpMGqbxijyUZPpfDXUf",
  "key8": "3W74uLsK2x8moBmZmJBgPTrXU7wYhdLb5rYWPZL8jzBDBZocBJvBMBzYyJAC26H7Hy8fHXZQfCujtxVW57gnkoQH",
  "key9": "3bbS1VHW9RLjc9YRBCQjzySvT2bc6TnbsajCUgVrmKTDrEcYur756N4LwRz1Qo8kt9mYokefhZwEtWTtAzS8rnPA",
  "key10": "36uQxoBrBTCXwJUG6YLMUB9RQUP9YAkpZ7vQZhjYSTNETPKv49VK2dTD2gzXpthu4aREVrUVjMdphzVW4yaNeBtE",
  "key11": "ndWJud8diLt89bKrAPBNKqoQx9ydnieBSyJD8UyYYy6tTYyM8dcdHq1NaiEYidEf4ZbKwMT6RancgwpfEDqnF68",
  "key12": "2AkKFXtgaQzocewVE96DxYVdZynF65KUh9hTUTU7LJeVSPRMXtXAJtV8bHSKnb924PWSVpog7noWLyN3P4AAz5co",
  "key13": "3adXB1DRgRigvhPP9yVKQ3wygXdVE9oYmdcBEqtm21KLwfiLcN9etgz5CUce2zQjHYMcaV6W8obhrKgQZLcT8qHc",
  "key14": "3zYdxc2EijJ7zFYiUfpWukvVEEXKPtexnH49mtPFsDa7gPj1CsJfdKFgpWadrQqeg3sk3q3DzGrwJy96iK6iWbnJ",
  "key15": "5VCpRqywewwGCLhiN1hGnzrT8XiwHg3oPRYnFvoxURhK7k9wSFk5MUQGFTATnUkBAhxF9mQPW24W9JeaJYTtNEgk",
  "key16": "VZE22DBR8r5V4biX7snyegvRaFvLsJvKxHrtbwXzR4xHCWJEyb4t7tszRfJaxQ4LuUbtSQrg5XEohrhGpx5RPPm",
  "key17": "5KMGLV8bVeRaGwkQPoSxuqGrJTFXt1yao28gh357ET85myeR9FPFe98o1wn2ip2SfW8EcF4b4f1EbWcWVEFrSjHw",
  "key18": "1ibSmfdW2GHB1ZHJoXUDLW4wyp9WbZ81JB82fQvkWZyZ8sHYRVB467m3RsRvqRSDGDKqVAivJ1ERAPkmhanJDwL",
  "key19": "2PHPWS54WHThxSgyS9fCzT7Q79aEDjV8f8Bkj69bNAyjXoayR2ZAbL9fAE4cNnTMpZ4vEfuBxgBuEgQyu2BVRWJK",
  "key20": "cEMPvNLvc9zZsRcsjaJDQV7ZFsjX7ocw6S5cUa9CYBdoiBLqVcwzYpqQaZxvUKf9cjEkg4xeWdcFqtVD2sKXZgD",
  "key21": "381xeaBicviczUxMbgHjnowRTk1aCMJ4wKqPe6xdYueqn542ExyfpXTnXUEnNBxBdU1kTqBDwpfL6VfkCga16Cb9",
  "key22": "27AuFLsrwUTdYSaqEzPTT9YJqpNiLqJVnEiNJzEJkW8LzcAv9tsg2PLpXeEJXQnuRQiEYSaobBkVq3JiyNHLYzKk",
  "key23": "BvEA2DmrTtQNmTE58eLGHd4AjpGTekKovLC1zekathbcxcUjynaXGV1jtHV7MzTiHCWxqUxpsE9Muc3kzbv8Hz6",
  "key24": "4F9tM3MK55VDukFVrcXRVL6kdHANiAeTP6BJX4ttEU85fnAvCazMJTs7HbWg5JZqwQn2hkuXLHed1QyS3KypE7hB",
  "key25": "34i6qqVoY2X6xP24Y6x7LT6vS8g4papu4MbNp6cpnjRhYnf8zGL9aXHhnBjrVnh7dEBkBE6GG5hAQBmKG1Z1hMZX",
  "key26": "4Ft261TGiBeZkohCqmuqijUjVQssQGqfGvFwiP8d5ssGTAGr3GP6MXj3nvifWoRVW2uUErfhV9L8Vih6NdNr3ex9",
  "key27": "3AB6eUfkn3X3cG9Uv7BM9nZFipiEBgBXH9xuDrcGYs8dFktTZoucJQ9zHLvABWEsapDz2mCmuMiCmnWDLbxDLNDk",
  "key28": "2kTS6eJ7VRkdpwsSqcPzhmsTwnH5acYCHY5yuWUt9nri75PS4Qoby7HctfUhkqEgsLxJrAVafC3mTepoWxaNUWPA",
  "key29": "2z5ooVpbKwRx7PoZPT41L86zHc3kJDVwbyrHW8NPM2fm7Pg6VkFL7vMFoV657YbLVwqLpebSjXRxXiu7Y8LRmoZE",
  "key30": "4eR9wRAetzhkagyVxT12t87eRfsmkoCkEBFAukyPNHoUKTDVPBcroXV73zfYyQp2LdwroJHbkE6zd5FWxB6H7irb",
  "key31": "2nKPWNZVEkzMwFvQRtLbWHGBwFfTbNtezZ26Zm1eiJs2pwtV5LXYCsA6Fa1oueE52DvnTM3NyqUq9oqeyzKDagVs",
  "key32": "TbcjWpY25Kq6GdB8FZ4Bew5BGZnswFzG8veoFpEqGFMXPinSHUAdub6VC2BHpqBvYFZp6VtbvDwsieoVCmHnL6D",
  "key33": "4MT4DqGXnGXYaTQNukHPRN8CJivuj5YKMfENm5PMUAThwe3seJ9xNNWw4z1s1KMk9sXWK7363pwtuLK9uQfpN7qM",
  "key34": "5EwDt7BXRBRXkEsLjru9uNdZGNKMoBtWpK3mfz4SE45aepC2MxecSyg6Gk7Ag6Hy3tPQqN8cKjUkkJ9T7C3xAM4X",
  "key35": "3SS6rSAZ7jHX4oZxMkbmgWHAc4HVG4sJFbx4TGqxopqUusiGpKqjCgpyNh6JDsfKUtDtVTotZu2pKS6CivXgcH38",
  "key36": "2kTEBQLy1qVBusFFM2LnJsTGWXLxN7ccAruXCDYy6RtCWsbtVP4Mk8Uzcvn7KhZaKYpdVb8QcXXZ3DKwkDsSx2iG",
  "key37": "4cRdfKkzeJMJNXHfC6r9c7RrMceiay9KNTejPujaEC8J4EtrwAmbVjjNJZKBBuuR4Ku3KehZVVRatnLXqgnApBSq",
  "key38": "3cuagUSq5W4Awc4E5gzQn6Kmg13in6hfqBu69BYTLCqPzz1tm96BvonGK4VrVcwyGSQmv1QJ1JwvVjExnjX2qoSk",
  "key39": "61imvZC6ft5UPXyZgzTPhvqgZPBmxUg1EqZprqCfuXiWfcigRGmVcD49UuPHhU3TFXZtqbaJ1AWGJ2yoFhzX62SB",
  "key40": "2cdGnryA24jViHNht2QwJnPJcDGfPsxyPFmjBo1fAJoGLZo9gBtJfYs4LJYUxrgyqZcDRgN5BKvHj6FoMXDuJDJT",
  "key41": "Q44kkCxbFQRwUBvj2xBeu3igrBkJe7owSJB6K2Mu8fYgnmdz5W2GKvVKydiPmU3fEPp2McjAU2wv91Wpc11x4qL",
  "key42": "27hfBSJsc3eQqnkdSqWsa21PGMoeCgoqdDfFKyHZ3eQWHwGWom6ybtKgUs7JEhE2peK9xnBiz1axGGmpD2hByLMV",
  "key43": "5VJ7W8K8G9Ek8qKhrcDQ4vdWDY46tjqFm5D5Zgk1sCCdkAWAxtESnr9dYhqcp7wiTMQPZd6Hv8bsjRdsP4J1CsDq"
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
