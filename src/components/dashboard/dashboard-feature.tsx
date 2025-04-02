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
    "DdnikQDEvyUxNGQ7KLGPDewGd47GooC7QbLfEU42EsLCUs1fHpodnqoKYdTdzrtmc8n7Hx2nuj7NdHpebEsnMSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H4o9HGhKUn2ZoMB1C9YCjJLJceNv2KsrfZETdHPEFh4RjgJ2SYet1dfFAz9oY3weGuiQCQrfrJCHhc9VezpMrKx",
  "key1": "eoJPKNBHNA43nvhL41yZiM48WoVjZntPC5v8U3co8SfndCU55VrQnRHZNyEsEUFGFJxDUG8rpgK8mhe7zK3YZRX",
  "key2": "2BBh6oEMNg1ywCJHaSXgBVaBvrN4dfPLGh9GY85B15LN4iC9YaNZW6XgdqWWZQLt1nGLe3LdECWSBY4em87xC8Fw",
  "key3": "4mTVtGw2Tf9qijRvjW4npXsvJpc29kh5b2Z4Q3UCT6Bx3ERCzQNdqzb3DWbQorevLrPgio87SVGqUqomH6nCLibh",
  "key4": "aeYjHCs9kkGx3zYgnJArxn3rbXcv1Xy9KR1uN7MEm51wmimUrhmUX9FQidYc2FYxPVqxGZHg8ns7BYQjBpLo5LD",
  "key5": "3oyX6Y4SMQRZZEADutHDSK2Rg6uATqY7288Gk8sSmExzFb4s6KEcqJMtGgrx841mMubu6Lo1wHBmo6rmYMjRw3ue",
  "key6": "4GHyYyoYRhWS5fGAtqBSNXDWPaCQRXZ7NqPebCoeBrbhq5bN2kiWA7DsrywFHenHr8UzEsXP42FmLP8am9nvVC2Z",
  "key7": "nASLsp6gkiAERy5RYaPqBda2NbFZ2532BA5Cg5c2crRQLbRsGuU4sPgveTDb8GbuYbjb3bWi6BU7LS1DrznFHcx",
  "key8": "AHhv1NCL5tGd26CWW1koD3TBwipE8MDZzj2CaCVA4hqamxuSCMvmcihRJzzt1MLrwbh6TQ3wp9uXvGyukqtf8te",
  "key9": "2fneBL9MYe3VSBqdFP29zd4XydLfWi9JQVhDSywwFtJrJnRzy4UaApKvehmQ122kxLNi9GKRZBTjYw6wf82mBMB3",
  "key10": "23whEmj7tpU5MevC5ZoKqUJyUcsoEBEGJDxsiC4NUAFkWVQVh6Qb7CTV1AAQkDaCSYa3JjJr6XZDo22jCFxgc62s",
  "key11": "4fNM3JjRtqiRcXSUHLYtcTWSzUSVyZCePcZo79YWmvpo5gVz2G87AcvntUkHTFLWuojZ2dAr9E3StQiPFcDtFPHY",
  "key12": "2N684AL9wXWUu6c8QBbFd3JbntcfCEjGfKzh2UAFnsQpguccx6Hp8Qp8ubTW1fKfu5BDHFRXWEh95z25SHFYGAB6",
  "key13": "3nHuVbuFszxDCWA55k9pNsVgvWK6nCBUVv5zQq4gQUgUHvL1zy3BULyS8Cxmk8eyVeTWZuVyE8wN9RKEe4H8jnL4",
  "key14": "5LH6kYdyzGya4JZmrcQBtcDgfBMoufDY17hkMSVzHFCb8o8bUfus93mMuxtfb5uCsHXn91vUAd4FDkaFCDXekrgS",
  "key15": "ERT1CHGc7EoPQJXsn5yjwJhvGZ2n1CBDfmB9CLy2Cc34DddGvydqVR85rEKgVyCgYo2FW7rR87yWF9Lrf2FUYzF",
  "key16": "3vhY5dyHx17rLVzuvTiwFoNLS33bWRajCJcHPpbfKjCDcssQw6cNCu1p2iqoYdWHF2q8xC3JMZXBwhtb8U1nigho",
  "key17": "214Puda45RyT6zubCQxNmeZ1uGd139KSeQ3oG1dnMyRpMZPNsZ92CuBWcy5ax1Z37CFEfTVqMAWYZ5wGSkavu8uN",
  "key18": "47ayFDmSsg148fkMYq5p16yUgQWibALJGM7saMUPZT6gRr8ixu64RrDBY7eDH92UvuwmNX7aLUKYf3ZDcSKnmoLT",
  "key19": "5N3XuYbvRN3DSGQGwYo1cgsc9qg38AXfXLAkqW94zVkgKzLTbP39pt2eqQuucXRSeU5R536gU8NBYSVvZJ5NLneU",
  "key20": "28azF72yjZqE4C5SGD9w74a31yVzdN8YjrTdkYeco911yQSHJ5h55eVMkPk5VHo4LX9B37JRpH15Qkfq9y5svBoD",
  "key21": "48rW1GEWoYXhhHCmWzfuRKUf81GAFjNUXqVojhcZX7F4bpDAmYKV9kuY3ZUuba7w3oqX3Td8tcG9qm6CbDVB2bdX",
  "key22": "3JMH3epYKvoSLVTKddrezvpMJNvXAPaPr2bJUfjh8yhmZ3QTp9PeSse5SK87vWBK8dgqCd4XDvRXuZhgYVh7vAje",
  "key23": "2ft44cBxmEokPYV7zwLAniHuGm3dRXs9sLhDEWLLGtudvQkPnbgf1nGmZfbEwzeMpLiJvjLPtFmvBbDVrUGQKug4",
  "key24": "2MFuHk2bJRvxWvXJoLrbRENa96TrjBjDq1GxkQJy8vzfB5xkDCrs3DBzCvpJcfJ6RLyr5FxxS9fpGARZDphoTBjL",
  "key25": "63AGMhJZawgb8iSUuVPHGYKMGudPQs26U3TBDBFaAfKZMX7oFAebwcyncoFrAmFq6Yt2woEVqFmKhr8pKvjuPUms",
  "key26": "J6jhKw1THFEYUM7ENx9AFdPwFtdeiqxifv6PVpmcXCjHJQhdbCUQyQaPsYE2uc4St9aVZ6aPpFTo8ACSDwjShX2",
  "key27": "2c7uwaHN7cWM2uHwaKwS867QKJ2gg92J4AETpo4MzF1TZ3qBPcQKCfKYPE4kJfMSmTNuRAfk2cMCbP3Zzm3LrcJe",
  "key28": "5mkEvzCnPvuQKfS14PAgYC2oofpUr4RaV6Kf62qjynH4ewCz5Ath9Uj4R1Ykx7PqkyNA7gHWXfaJNGyPT5LgA5n6",
  "key29": "4hci2qXUR1LusJGaMKZ3CDYXAo1AnPSY3yEM6YEDecbGC1eYEwCvTo4U1QQj6u4a8Tx4zkq5YXhcQhzofUzHJ6w8",
  "key30": "3TxSt499YGkgFD9GB65upvjMbBzQ1JwT3dLajBXHYQARd5MLTtBLh9FL8wKV3mLnwqUtdH9BTpNXY82h5ohFguBr",
  "key31": "3ubwksByvzsf3x8SNZMEUSQSyDVZDamdCzzX7RUNvVuPXw9qG8qr9nJXLWCWR4B3krMuWpPpWMXnZnCAAzrtzFnk",
  "key32": "vchAj1G6XhmKoyQ8j7u3m31uqQbY7eFBYEj2HZerw3HXCYG3rmV1xMQ9eJ19AegAm8wytwTW8kHVyAdMs3GvHjq",
  "key33": "3e5YA3YJBxVGU1hCfnwYff82hT5QztUPPWNP11KFNHn7j8geSzFM4ZdCXfdUm8Y222vT8ryKXsV5XWAFtBDCNzbi",
  "key34": "NDtjTkK2DrxL6tfCJ7upxLVhCzygMAyFWEvzp67rEMtJmuvezj9WD9fR5gDzCadyQM2uTkmfeYRkrMsJ8ULhDjk",
  "key35": "zHErPxt5z48q4HtVZ7m5wbNacoRiRJS2nGYy6bwYCwQKQeEVx2BeDou7YU6Fpqo1YYEBuVUCwoXoHsosa5Y9cgq",
  "key36": "2brjUsuwnMfh1uF52yxo92TEVP7sZjmquXNpZDFsrHdevo8mNQFXcwYzRuV9xCbWzYpGQyERhJX3FkYMuSGT753g",
  "key37": "2aijh4zyfoSgSti3pvPU4QxmGjPpxTZC1AfFfcTFsdNVLxC4EU9sVhPfpxcziBvHt7Z9BiF9Y9cyFgYwCvdvcBva",
  "key38": "2P1ApHP3JwhYtBAj66EJaT3ndZM16PU3f5EWB9yvCpUzHsXg15Nkafd5xPbthdhUwhwhwjs7hrBpTxuBURJAhBBw",
  "key39": "53GXVpCSDGN4KbCyV8gzut2gghzVTTyvSHq5YRBJb3HgofHkq96KfLKyinYvcyTU3CiSGbhjZDuZSNfsLttZRjNr",
  "key40": "5HVBypnhV9tqhYZTpqWm7zV5HsDDA5gee1bK9ftH2STrx2aQQMipZo9MNNebXovb5aj4i5UCdKX2sH2fQEfGGNRr",
  "key41": "2e8mvzTd2ouXTrYSqQu4zdGfvewU3ne1wcs7ZUeSierHQQ9z2zeUTDrMVXVostyHazotMqvDndPR4CkYLDyckAqS"
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
