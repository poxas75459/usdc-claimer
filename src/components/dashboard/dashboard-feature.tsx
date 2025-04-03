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
    "5fVoVP5D3nEgsXt3fFNSUtFL8vrr4477HARz9UK3LEEkCuK3sLk3cjvtmJMtqihfERDe6fnJuNFZ2Quikqnm7gtu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YVLdtPJCoLFUf88wYfzVNQo64WN8yCngLbsnJkYRHP6g8XPvJF1zKM5K9GBkN5tWfTMH6Pd2qCe5JHLGB74eChV",
  "key1": "2h1ysUpYXrtSqMHZisorqsgiGzgxMyzUDBYXrJSxMdvdWXB2Ezfg7uY3CwPkiKdnzBk6ju6kvK5S8iwvJa7DCSb",
  "key2": "4zwarRpAF8GcyijV4JewgcbRj7bgvAQH2Yo9hanA5dCQRQ7VdtPDD4q4eL1oYeZTnFpUKmD6gA6mdeVNE96uxUpM",
  "key3": "5zGjWtbwpKfNkeeWDKPkwdTo83L1v6KRVAtrgJQKK77CjrXRy7puM89wzY3NjFcPyDbZgTA175o7aSVsaidmBipX",
  "key4": "5EHSoeVh4o3zUWCUUQWbSgTysgSaFjCZ44adcTF8SrE2NsXYNeLoyjxkMSiEsktdBjiKL3eNseV2HGGa5HutSsQb",
  "key5": "43UoWCYtFXwRpR4xks148UWvJKyjEfYe2xzRUv33LGWYFuydu4oqgVyh3gf65TWurCrvF1wqxN6bfpJkVaqAH2Pr",
  "key6": "3bscHo7w5TPGypdhxHWKjqkdSTFNt25WDAV1AwzqtuJhejKaB1U98AAAWcfdaZavFz62Kkvr6aDhB8zR6wfxYTqR",
  "key7": "CMVf4wWjxLyiSGj1YsCKfhPSMZxQ2d5VVFrrXMV4PL2YVWSQd3mE4tVnKDo2YbNiE6fwQ6j7jpdaFtVJGC9oPrk",
  "key8": "n2zAvwtExXbMj7ZZgQ6SpFpbvc2YLTZeGbH4RVRmZbbGdJHrirwT1Hy68Y1zg8h1MsAiqYqkeTGMGykZQcxBhmJ",
  "key9": "3iRE3Yxs1sgs1zRsb6nEEtcQpbhSWBbt5Fg18Bw2Uj2cF41fG83FaunHMduxXQHLdJromP6hbSRVfGiaat87dLCJ",
  "key10": "5fVhmWgMs7orMTH1dAdnUPBk3JhLjdY1VGAntqRGZXQQYi4zHYEabTkCfcwvL1og6hiM5UEq4xTzKmAy514wYNYk",
  "key11": "f6nk4Fh2QrhmkTnKfKvuExTmqUp9mE3xHufLtwDN96pTsPyacq9QNPC8r7YrgGRbrRBxDCMKigHZXDa1BuCa7tC",
  "key12": "2j6Dv6QorZRp4QHHsTp3oVJ71uxsW5ZmEH598yNxeiF57Pe5ts4YfjFjQHWNGxj2KCkmGdK1JX44skmF3EpCCEFy",
  "key13": "2X7QE1TxzaGZEievyuh9vNyJRfh3XV5MYXFpjEcDUJCJNbQ4W15DgspL39KeHKaorLt4xq7XmBhRNVu3pYXL8xKy",
  "key14": "4TG9L3JA1k2wMWhmAqMwwq87u8ZkhXiFt678hAiu2n1s2FB5xMsLQkPfcuRrZiQzxdJFZ6biLeWfWvQyprqv3JYo",
  "key15": "53a1W5hmsY5uFhvZznPARBY9fnvh3WL7Ysi56uWaTdSmmyNrUWgdkJ63Ziex4vWTZoHo2ab7w8Eco4UNcDPiRWqi",
  "key16": "311BYZ1xsEkShWMtteojEXjG7g59q5Yc2iN7qhKPCD1dXAHUEnEGXSJH3wogiJBEhymJQ6Za6foT9V6STNtiH4Bo",
  "key17": "4QztxEgVhPiGBW3v7sc22EGiMnbZDABwKGKzCb2nPJFajBPZ3rcTou6L6QDFqGErtGed3PWtXuNSQDvWn3pzKru2",
  "key18": "FcABzopjNcpizh3kReuHoWs8pCm4P8K5XPNn2KSwXYJhZX4R6x7FYvnEx2NC6dSy6CH8AEncEuKZVXAwYX6avNv",
  "key19": "4XGkrdmSfpuhcVMKectV9Kq2pcY4amAMPXfNs1nvwnmh6a5cQwEeQYdJfyMoRiSZ8a2UPLhCZnv56JpVVYJXYEY3",
  "key20": "jySNgVNsC9hnWtzHQggB8NXphvcFsMCWRtEARontMRCoQwsxoLnZAyF3MBr6Ce2uT4RKS1YQFjSgp8vXonz8GgK",
  "key21": "2q2UhHqohuePDDtYccgmXLeLyJ9grRuieKtREZGNKhPg8AZiTGpgdAgxaS8VBQ4a8KUFHdr9BS9bbbpbPLEXuq9D",
  "key22": "5amgy8DcQ7nXY9i2R7vVEuujX84T3bMb8yx1Hw2STYdSDDkxvUZxX741xndj5Eh821TynF1Pp4hdQuMASPhrEk9L",
  "key23": "HnRaGsS9HBovvjbWYypo2RYbtFJjNkzuk4oYhvYfsnFgzHuPhRQG7gVpc173BCgePLx8NKNhjicoXkUmfGQTjth",
  "key24": "34eZqgGT1JUwVMdJoKWa8QyoAoQgp4d4FcxU3crDuJTHemTP626K8pd1SfkDVdUSkjKfkY8Z7bWpeiebQEhrEjtD",
  "key25": "2o6JQkx4kFpjeA8faJiajLzqkABxvLyzUEzUhrH1JYF647mkZS93uKG9D4ANvyvABFiRVs712Tw7VmT4mGwetpHF",
  "key26": "3rCWiHnJrj4PQYDBzwBp7wK8zQFaSJA2zkJy1agdEapcoR67mBnWxoMLn6xEAEc7piwpA1Sor8s6o1h3hfAh7gkb",
  "key27": "2R32QkeKqAfpVQ6EfaZYm2fwpGuPHwzABbU7pNyyKk7zn3WxtvyEfSRpEuMrmWox46cMUm8Ud42QGBJXY3fVUFiA",
  "key28": "5BwTe5sydZLhsvCfpbSWYimRBSZr6VJCJhJEc8mLRDXgKkRuL4fAkLSGRRXfTnci4pvsFMJEuES2bqAjvDJJjhem",
  "key29": "3SbuCJFtierWNWdCLAWvJX8ykfLTnqQQj26KMqAX7TtDM2jN9avQfjC55SmyDQkP57vdHXZuY7qSMRkygCbqn1rp",
  "key30": "2wG4qMqpaUHvMP6FNhSf6ERRgo6FNDfKeWQXtM4hN5ZKHU7d7E2PLVmYHa1CKdZCXYoH4fXzG8ybVkjHkg8dhE6j",
  "key31": "2Ap8e41FqHXD4rrHUopMiT48Lbnef8PcTCo9xX6i5wttqTqK5jPjyYW9xbhhBQFYjzUeM6sa8MbxRsCG6rEcm5NJ",
  "key32": "TzUVq2F9eMPsrecQtpVaTe5fQMGM5RhmNqTFvPNoGGfb2z4dEMhVwY9GSJxdgVh7AvEY7m6XXBkcJWzrk9dqV2j",
  "key33": "5TXHzfSHMgHFjJUSoDiMzWX23nz3wLQuPb9599JdX5Vvkar7ozSFXp5EWqTiKyogcsfJcaG2crVDPKdUq6TSH64z",
  "key34": "4bnpKTZhW5iLDAabqGQrAhrUUxJQLbgZ4ittczfbGhKhQAJiuHiVpic1vBx2gj8VZHYNmYP5S639X12GtFH6ucsK",
  "key35": "2uovMDDBGkzLLiWL9DoD8C4Ck1t5GuL3q2kLAD1exfc6f2qPasney6Kbbrt1Lw9DjqUWF2NfQ9Esc4ivg3XUSbDf",
  "key36": "4u7ivVwPJJ4MdPRVxDHkehMN5bPoqRnqAGVfFcxyidEYqtyXKerpX9wekugBDLkYPE4wZgFb4gwWsd5krQF2fYXx",
  "key37": "2xpZfB3uYMGPVt5n24eNuKeuLnjoJR9SFZ66dSNYhv39VZc2Maqja7rDm1qgYcRBdtzHMQWdaShsq8RCLpBDtDtj",
  "key38": "3X9NgmkLU4cYxvyA8r3vUNzCwtincKpdLPGb5FqVs4Z4VX8D7doHWzMcyn11AuWdwF8dgZ6QhBTd44jnth6EqBpj",
  "key39": "3DoPR8DqojPAiReHy3CgdZRRMPZr6U4zBN2iE1GWKt4Yt1sSEBEBxCWo47a6VMjaMqMVLENyofU6phCeLhWhBP1M",
  "key40": "5rHkCypjMVXfSXPy35jRM4f36ACkTUzE45kvPf6FRf2AqXDLrvtPeYBRJxTyHgZo4a6mvhSd4si9re3PjMxXD2Qk",
  "key41": "3eR6hTtNqy3AFniTEyxnUuwpiRgQET4xfDxpLs6yvQ3dL72muBUs17dpquD6caVwsyyNcxbZ7HdgpstVAzvoQSVu",
  "key42": "4WaEBmfdnnQVaMThKhTMtT7Rq8sq3puMx9Hp8XVLJFyM5y6EVUPuSK7wo1AoATvcoKrkUY6uZn8jUPJGCGzgEfLY",
  "key43": "JyoyKqRMfsSUqCP6YLYoActRBJtuAWLHDBkpVfyMCYbLjRfr1HUzsBxSD3V6TWmdBUpzatfVeGkpNgvp6n6VXPd",
  "key44": "3JTxZGt1jR4LbUYGP9MoAXK9RrHiQgx3NmDnMtEBB5Co1f7rvGXVqrCiVV9cHVgUwtdZrYoiNeG5vqSFuekjWpH",
  "key45": "4L2Lem92wQQuEGBtx2nxrtpeVVaFy7nmgCw1HMfXB2wCAs2YUfSYUkL3sDTCLtHVjp41imXBrg63eN1BPqzF2zze",
  "key46": "j5UkNAxn3ndHam21Vbe7aCtw9ooqkjAag7qHQh6VRTxTiFNE4WnD9nMVhwiuYevphHeQFMVACFLPS6LrNMxhrZi",
  "key47": "SrAAVjns4kuEL3pFsqHzvvHWuXZoF36MVfg2AzUeuhNZMwsdHGvnLpFkxGLr7WN1HtUZB6GCBH9dyAszTbNNDdU",
  "key48": "4za5poFRvCF2LfqH47aXfnDrMB5uA2ns8bsfT4H3XajYWDT5NGWZeeTC4PUsE7jzhEKCwAwf6au7LiiBRTDGndZr"
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
