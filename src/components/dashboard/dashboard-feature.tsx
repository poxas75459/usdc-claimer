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
    "2NTVS2B3BGXrtcFbuPinyNP7fhZiYMuw552JegagxT9zHJZDWwA7crtXHSsE3eV6gDVsRq95UdAjDFkRhfipoojd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56UxCMRQtC3vqaZFENXyEkoFWyuohPTtfandqJJhTLtgmgcEwTQN7gBjqXP7aYZjZtPdaDQx68PA9h9nPpa3FfZk",
  "key1": "4ZiLCoCDiH6r2CenEE6JAvZM3cqG6EsVRP9fcWmezgrgFRwAHY3s2rBwFCWTT7aF3SnWWBrkDqXdzvBAZc1GBoor",
  "key2": "2PjzmsXqBknS6GZq1aZxJHKZDva2SUt2q2NALeaSPgiKmVVSJ1U6pGak7FD9ed7tnQ2woQQ5LuxCzrqhmufPtfsx",
  "key3": "H3STxGfpt2AYDY4xaHPQXsyTfqsunMK47xvd8RAFHjPhfaxMD6M6PUXse4ydFjSmjqnN5bUSzeo9zUC7XjNmJaE",
  "key4": "48EC9hzY5MNnidM3xQgG5qKP1n9sHgCxw69rww9D5EgEjRkPHLj4oPXhkwQVqBAeLFF6TrMz3URsUAViEJ9EMBPc",
  "key5": "2uJiGdFDGTQhYHbMVoGe3FCJPjZhrv6XHnuWLkuKHm6Jds1LfHo7JenMe5aRQ3aNhZd4ysjkFrDn85SzHMjqHe4h",
  "key6": "5QtsHu3HvsX3ukrcSLqytrfwN8YHJu91zFn6WCfYi47rEcENVUVmRa2fuaAdVHcqBMsU4pf1Ru7LkLSWn5Ta52HW",
  "key7": "3cCeko85j9c9MYw992BsqEAMBaN5yqE1S9ouiVq4r1PGNDjo3c4VteA8KvFm9Hko3GKsGtw9eQzHow4RuuX7kaCt",
  "key8": "3xEgHBbPNdJsgE7zwbSwyTsF1HXVpHhnyrSsktAwskNoe6CypAUaSKqhNhCUinKnQXBg7vVkWVgV4eEfNa4fzETK",
  "key9": "3b56BW5mnZB7JX9c5Fxu5UAiR2xUfUtKNyWpYrMY1DCxXWXXWFmkMrUmEExazXMYoK2wYoVJMuFHotcwKjGpt4tZ",
  "key10": "3uEQwMVRUysALNDqzN6avT2GS6tPjgbeRjENtzmLsCnLP2ajrRqx4VG9YzWRwh78XCpbDycmXpY116vrr1mpghhV",
  "key11": "52ZENCtLKvhWBJz6qYSA3wtpGcq3thtkQdCTafPd9Nkpz5kvHKUgWvD6EcAsFzuo7M7xXoVxwYt6TWZATpTnafsj",
  "key12": "426hSGNNuUNmMyQXzJPVfXjxyeZChRMt1RMNXYPAU6SFMcyfY2UGEXJFzQ7rW4TNZRdWdHFyaQTxn2QesDiAaeqM",
  "key13": "4D8qmdf3HsVeNQkLgfAKm9aPEKrZxtn8vbm7v6968S4dhyNxjZwsTN7AUHQkAdUxe2M1GuszXaqeoLmk9sV2F3Fz",
  "key14": "4M6UnTjRd9UahBPjLaKggLr4ChjdbNP96wK1teHGLNATUp4FXE5sGqzpNmnA2D26pF6uxtNvFtofY4vhrv7Y1jfr",
  "key15": "4u2Ph6j1Dk2bX8JnpUAwAcPn7iQpBMKgnAiSEZdb3cnsByRLAer1VdMx29DoHHp1Rh7m1MvCNEojwTBMBLPzpnk7",
  "key16": "3NvZwazXFDGsLQ3bmdedmpF1VjUD1FD46mPeVwwyeieA56bXDWYDvznsx7zCBGdBJmqGBuKoigCchqEXUvjErpfw",
  "key17": "5MmeoTaXQUvqWKoXVnveW6e3YmTmSSxiLFUwMVovfKttRh9Num3GuTMX48ViNAyu3efYRpLAHYz7GNyKPGwMLM29",
  "key18": "4ViteN4idsCM2riyDhuBe4HmR7CRdo6i4APDizrGDs4oj3Qj2h86jnJndsgcYCx6BwWnyEyTAeQc6N4g2qLUyogR",
  "key19": "57meoz2z7AQZragLzAPhK2d2Efuc6DHYDXZ77VpdPyHF6HNwEN5YqcWUah4aU38X5EGaJvJJPndRXmvWgxLy7bzg",
  "key20": "2QWs5bEQeCCwajkyRaqYE7vtb82TA1tpgreLRNpve4aVjHZfjhoPWP4hc4GWGBAWhhM5bPES2WX88uRMzk5pErxe",
  "key21": "5tSZvgnJmG7vaVZRhFAr27pYXLbNkjNEQRfonKE8pnDiUb25QrEjMjEovmAyWt1E3bBzpeRNrYzcNL1xzusY5vn5",
  "key22": "xjZsr4LLnF52d2vide7KLnGXn7WJnVWDrRWaqWYxeTx3XP4f6hqRU1NZeXAunzXkdKtC65trWpTMag3FfbTzz36",
  "key23": "2kxcuFvtvTA79KQ3P7f5UtbVxZcVZzgt62N9rd4YDyDdig7Wy9MJ8xpcieLWFJn4NcuCMzdEbKK9E4Z9AYYVoqvY",
  "key24": "HnkdNuHs8bAtrtL457TsYFavPmcCR61Q51nkyngwbNricXMbEykumt5K3JRa9og3oB1P2fxxNEwnhvP82b6N5Ft",
  "key25": "47rKQpUBXib9YqJVw6ESr6ApHqyAEtAGJt62nbzd9nPdCjDSHca574kiVfpc1tLtSj59f6LWvEM9cBfZNKeXg1yM",
  "key26": "5uJuVNjSYiJNAZz9UhvVc9VGaMuXmU9SkapENynQtkafs62H2BtPPyBTtHBu6SpQ32tcDzktf8yTYMdPAvNfsbZk",
  "key27": "4c5WfrZSW3VuFgGuDJhsw2bXAXPS7wyEr1HLTtT6154spacFPkb5ZmPf9rZuUVhkozjA3ybGZjyhgc5gnMw5JRWU",
  "key28": "3edd8oyVsP6srT94YSu6Wer8i2n8qdtFBZsBjKjDtaX3fbBjebKMddg2aDFy6jobtzXBpGX9NnePB47eCNfyA5Gs",
  "key29": "4yY1sZMPFtZZy1YJahRQkgTENQiUz5YKEPAEPmrtQEgafpeztotbRwEqdBpv1PWm883mDtX7gje5A3VQGpAWN55M",
  "key30": "4govL8cTcJ8jRVy9ea3jGmqfqzx4AmFJufBe8i18LC3WXVDJFeUhSEagxCtanvny94A1DCXGCXLnRgcDz24sr5SJ",
  "key31": "5Ni3RXoo1rPyJvt5mrdRtRGpmdd24m6deXaSRgPpfuBmMUnhDEr8cJgbxHCx56555LjbX2xVHLa6FJg3HwLZD1t6",
  "key32": "27H2YoZgi1pDjRCAtoEPaxLWvuGgnBXNarFbi23ejt3T5p32y5YqCzeXeBT1cAPn5gMwxYSPjaHKRjJQHYc7Hy7X",
  "key33": "5PPHzjyf4PS7UZG61w2QXC7Xm9EsyJQERakUZMPq97WhCGTLh1Kc8mCm1BUGyDFmKDsGvKJqRyBPW9Zcgq6a38XN",
  "key34": "4xjkTnuVbG6KRidw4cipFsiQaz5Rs4GRsWAvVu4jULJn6MmhZMJxLoFn1rkV9z1aYvcmwXD25LA69z5DKgtsB6au",
  "key35": "mFK23eRVk1eoR8nsw3unZoLqDbPYEezCnuaWW8nad7YjumBKRysGfKaCScdzdbcNGHfgnZfjZVQBAEEQCXt5z7v",
  "key36": "3fFHhJnujtQkrcFRJGcWDsxV1MLeFVG7LqcY3aLZdkYz4F4wEdSWZmaCDEgz3BhB5WViuPZbv9KDFDHiSVk8NS4W",
  "key37": "5Q9q5vfkQhjaVukbNxmpiQcZAqshfsfgqSGh35yDY4cBPBQJNcdPc2nSg39gWRtMPDStTRbKE4obVWqBS72mZj2N",
  "key38": "2H8ou6rPB4rWwM2gt5HGPhSsuam2sdPzLLWY3bZBWqEf22YqabPZPn2JTyQz7NgDfMBJESU752MaTbcxbiwQSxU2"
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
