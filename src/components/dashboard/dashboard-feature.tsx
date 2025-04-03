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
    "fLmBuj15pDDGnBuVexbHfMPzK6QLFyk2WLotK7WUYodfJm98vtWzsBPyd7tJtCZ7Ar5Va4troRrCdU2vkCQCBgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54WfbRn3P9SYLZ4VriTFQzNZsmNsyHvvZ9eUeVC4aYbpyTuz894jrhCYdAGkj6U6sPKVHajEwJSSaBDhU9BCCg1Q",
  "key1": "66gVZwyuuWEaz8B6BrQjhoMTHB24fCivDLXZ4sE7gDMSBZJaqn2KrsLC8MN2zH9jmgQpJQci3kEU6ztQkhRds9hF",
  "key2": "xAri6qfzwdX485Zr7s6bixG6KtFLSDSVaHzArVjTLmh2YUKK2u31Vr1NbLpmQSnz6HfaMJrFny6x5xJfxKsMDC1",
  "key3": "3hnk31dJAKYtUdMe2ckQkwSeTDJ1h2L6CpwkMYeufLzLK41xZSBtRfX1rFV4JAzudEx6FdF4hwh7y4HxcjnLTbXA",
  "key4": "AZWkcf9LKCA23fX4je7zfYs6ND3jmb2VCino4beqJT3YAzRnU5PDnHpS6FRRs94aqxkNZh4rYMMNtrNLfLuxDAL",
  "key5": "5dhprpc51FND68DrKeh4XWcLaUxJcbgM18kPAywdBdQd54rLMTMa6BsCpu5W287xEs9GFdvrXKXo15ZbFjaYZgsG",
  "key6": "58B5EVBPzqgyJ4VjCVzz99FBCmwNYnV5zLVK8LM83ACeBcgXek1V8vUmcPwgLtVjuRQ27M3DvfA6NV2xcJMnBZoY",
  "key7": "2inhdECkQNu5CRBYfJWGHggMQ7YFnJfRw2qCgfFpSkHhRzYzQP9eRCa8bBCmq96oJDdJV9y65bHSTQcmkmDoPWqs",
  "key8": "4AYiUqUa2gnGwGV6VSZkPHfyLq7AERvFvppjiFob6L3EhXbt4tZdRJtdT4ZMjhFsKxRbB66qzD1wn5oYVsm9b7N",
  "key9": "5X3Dndnrk5PgQ6gDJLRxFzKfbLZ82XQoqQDjPXXG3tbKnieCWXG43YAeT2ZXqgxzPMytLnCn7rDKUWsL13ZVL9K7",
  "key10": "2pxHtZPYao2hNDs7rEtwkhgbhS7mamSVwY3z9v6dBdsDdAqtLvWyavYhM3LFVqUYKxTsYQBNcfnH6uv8oB4q5ge",
  "key11": "2T6Kyio3p7kd7YmpCizuwHQdpuKhnUxcoMbcAftbx2Y6iGfy5KZstUa9NuxdUSxn2P6DrB3BEP2H1yUjGvnVv9mV",
  "key12": "3QJt1ywUTpDZus9Sy3FPa78pm2FA98YJQ7xFca6xzHBiwj4uoxB5anSgrRaTQoDvowF6uqgUBxdhBb1Ha4afno32",
  "key13": "ChyNLfM3PvnXKokriiq8UogbmXue4B32NCSKXKcoRcG2HBwX9kY6zZBayvsdmST441F2YE9uG6jYoSpFRGKkqLW",
  "key14": "3cniLuDqx5LtDVD3nHDu9ZeQD4KpJA8phrBGhdJyNA8XPNwvNJHaNhaBXda9MSWciBFuEyqmHtiXN3xwuahPybhq",
  "key15": "2knNKxqyLCwr3vNp9ZHGCuZqEHFumDjUDVr4vUpGqZdR4Zoq71hh93HWiw2wScvwdzzGE3CRBxxpct4LfMZeyeeJ",
  "key16": "NAH99GMPnHBdtQoYD4PEP3QVCvBbBdfBGhHYspqcAzGpfzR9qXw2mCiejXKgHuc71LYpJZwQCnpiuThZN3GKJ1Y",
  "key17": "5cYoqP8gB2yJpzCVqFNi86QG1c4WeMynBHA7tTbXUocpXdunCGKg3B5GcEydDd8trU4n3v7jLJSkfK1T9nirb8hW",
  "key18": "24D9FJCWz9b6BrFfb781PMqVSGhxyMmLr9y8PtDhVaFUqEJNAeRBuCCG2v58KL2AKkcJt2pTMQyj4aeMBSF9QX69",
  "key19": "4R9bUwAp3hskXNYnEsxUS6L6XEDk2ZBsMvppk5cgMGJov2Kg3mzqTG3k5FSQhRJobSWEtn6x5bXL8gu37WMHrzmY",
  "key20": "qPywvgtE6basfG29moNhqJaekurYXVe1gCBqQ7bH1LrRAVUNfeirVXQ4vFfHkuYn7rZqFbUYKCZ3d2hURmt1v5q",
  "key21": "3R3zWyv2gSkwA5J1ZQuHZ4GMC2RNSSBQHqPnqAsLJM41qm3QfjYEEPNxRLj2V3gfeDTJZ1YenxwG577ngVVjVvz",
  "key22": "46qx5Br8zwVms6hJ1m6vG2DHGPPbpunq8yXL6TGtmaajihZjpxoQtLR1dNpUhpVcktHuVniyc2dcgBE1sYTTav5o",
  "key23": "Wmnhe9qoEVCxp3kBwonQyxNq9yqCL5otzYMtvFkonsGVRYDnHBKYLt5qJLC5c4ixuAz9mJWbnfBr5FrropCQ86E",
  "key24": "5viKtM6KkBSU29K5nGMSLt6FKKYrdonymHdVkdF9C2bXu3Dbwt4z6K3oBjoDN1V4J7VbcXinXarNH31fxnnEsb1N",
  "key25": "5tN1H8FUwhNddyjAaG637em5xE9BoWMGn4TxvDMzka4kpz3tfbRM4mYGdon8ZCTdZ5299KiVGSfwrmq1xbXEhKMA",
  "key26": "2wLS2DsyfXEhSDTmdorbLjAdFvBzGTqaGh1AR1qavsHmzumX7PhwxrtdG1c6RmCsEQEbXzKWuUJXVF2PkjUvLohM",
  "key27": "McWdUDezKBwb1b2wtdcjesfJ75SA2e9sM6LjhR9xkmRy5i47h7TKrcSoECjEUE6XeEATwHkfek2kKkyNsN2zL44",
  "key28": "61KboM4XV61vftri51YX24aX4HE8bZaszUALXTb1JSGFNG28dPyhWGS4q2sRDdkbu4BTtUVCSPok4p4hvkkimEJ8",
  "key29": "2qLeGynD8ePar2fxCQrHRKDwQ9LLwHaA32EggCejiiodpryCuWtoZabA3YdYD2m8RZfWzjjweawDiCpUdmNoJzM3",
  "key30": "4smmskfn6TWc1ttgHmennwXQVh8F5ia3hjg1RFtgR79TRmKaZS3P8mQZs7hPB1H19XDaEaJF6UGLAVd7MFzf8GTK",
  "key31": "4inAVtkBycZNmq7uRRDY7Xg4T7hVjbXUJ8UNswF9URiG55XHNY2mSbFaoKD6kCHUm2ubCn3vJJuiwiiKC3xZwCj1",
  "key32": "3DXoYvRhvthfVbNB2GGvspWyU3aC8AhrZU4DGKxVzJqGNSk1bc3vV7DGw2ramipWdQZWvYpY95L1j5PdoUZQ1NT7",
  "key33": "4JjMXeYJTiAyFsfBFU2uPMLCnrYBZLzYb1mrAyv6huwPrpUrr3t9oa5GLpJ1CRYygeNuzVYNLZSgruXh7uvnWnnU",
  "key34": "bpJjTp9crYjeX9DuuaSbKZEbkdnNKHJAMZpUBfbNFzK1CT3NSz8MEk7utgMyYjxyvHt6ioKfr61PxysAf522Jx1",
  "key35": "57NSGbwq8oMUyA4J6CSpBRTDqrfC3pcBh3B7cyZR1nbrwu1nKPbCeeUUcrhyp2K5dUFR3QgVsdpDta44qRFVYTDV",
  "key36": "56BXdHNC1weVYeoYv3VFHfajvqbGMRxjdVAQC3fwSpQ1JxR2fPjtTrF8S6vTEaedUtCauiLSvPQQS8cakjgkQUJb"
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
