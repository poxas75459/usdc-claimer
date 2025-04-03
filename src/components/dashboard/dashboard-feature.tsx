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
    "4Xk6hdPBsCoo2byoAJhk8hwiaLMxrDZLouzZ7mFme46Txyzb7Ta71M13VvzsVFaX311wbPJu6VDfEoCxx2KfcCRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b4ybvcprsF7q5qD9sMef8qgrvfrQfXuNcw97mpADL5kTokdVjiLXQcvsfVLiyuK9YW4ZDPLqyX3PFSo2os9kfWy",
  "key1": "3ehDHPn6R3x8xiEM42tQgXNdV4FrnnWDnWQv4F18Rd31y3GwsUxgziFKCC9mfkbioUWsyioDz2xhpEFEhFqQvJWz",
  "key2": "5TqSN6JR93fc474BkeYXMXbk7hqRCVb3ZHqhgYgpNQpc1E9VrQ4Sz27yAJ15Hq4n3sHhL4XrUDfNRmnRcd2q7nuD",
  "key3": "5KU2qSTpcjow1TSG6sdz1VQ7pxK2XcPtjjmRyYpoWuPHyC2xvhiiwqFfauggijEQaEVuQiLE8TBnJuia57nrNt7G",
  "key4": "GkcZBnPypaXN8YJ4bP5ttPdYkHYTdPd6DEXfkRi43YddSATFbquoW4YPy6Du8EjXsYCThZCWijkYxRwNoHdgKtW",
  "key5": "2SpShw22sfPFjrkzwnPykmQG5CufGaafdeRBJYugtYMwVxv1F41fTaw9ioNyhiP3bAoaj31m2zZEPyjhYt6GNHok",
  "key6": "3cBjE4bKSbvqHbgrSGbHsENzpZe1VoK1PaiCQcGCxVzoqbu27bFzjovXn5YWtGytmx1TAQfrtJrTfFqTL3yH9MxQ",
  "key7": "3yq8nj83sW9FHyaaKC41DffzFvPExr1yuaB5kZABdbupsrRkaTWGdXuSF9M7zBwaZrWuSjisoepbFLEfHGYmgdSN",
  "key8": "2RtXBXrtoALdXJzZCakb9yncL2r94RokFB5wHXWLhwuqSLLU1gosqHeMg2TSMsNwjqZWmU8daUvdxm8ouH8MDDm2",
  "key9": "53oQQQhoeZCw5ZyDE7aRhTWYs6TQ2b8qjRQofdveumYhQmVbYQ8hSKsAo31rFD2VP8j1fmQ9k6kemQRXcuy6BjuU",
  "key10": "5s9RpM8uCi11AMXU7JuKhsLSF6UhRwhv1awnRoiW1FcweXN5eEyGYiGaUJ6GWyyXLjq3m3rmEG46WYzyxjmPAsEJ",
  "key11": "2Ffzss1JXogf681EM2AQcpHdhoLbsM9cfnf9hYLwBSWEgwHJY7ZGjGrrhJffKFGQtVQUBQjJ7mtqYLFNNJ5yRjPR",
  "key12": "4LQo9RErFVsm7qA97mV6abPyr7mVupoQiw9E7XmCdv44FuRYjfrKUK2tsCpHQUMvWUeZfVvFusdyLinFZ8fKQjRY",
  "key13": "24uUQwQHmoDDoURei2ogvDFaoSs43Cp1vXKRU4vUkM47sQsiPrB2HJ6NYouP9zSungYGoYdo5Cro3WwfL771GyJQ",
  "key14": "4qvhH2rJEqU6ts2dwjaYQoqVyM8CJQKGCgEVPk4Nu5Fv7E3Bg9RowxFDnEVuHHqDnoG26zWDujwTLusBVLcboR6f",
  "key15": "5E8RSxjFMCF7FYCC9ovJWqawkiQnptn4udetSybAyhVuYWcDoeE5GjJv2zRhC3qFEWMN77RPFz7ZKgJ9BbR9tiAn",
  "key16": "2RwZD1feMxjKvvRN2E1pnxPQbSrnFXdjB34fxPt3JMbkA8zhnvA9hqiFg9T62YSxWKpeiYLDZhupFdmdCkNXJxc2",
  "key17": "2s5EkJyWXGFp8P47gY8jjqw6mSuFFw56pSnAFNumK5u8rk29AmkX1JvbjrHigMp44MBRMQ7XoagJy3XLKJMN8gYL",
  "key18": "3KNuy11kzDd4F4kLWJrhzmimChpmdS4Tb3xMH64gMysQK4V4F8oqxdGsAMJW59Zvqmia7sX5WPsLCiZfPcR1BffC",
  "key19": "5RT9PuLuBzvzohzne2eAJqWsa6hCzjjnkbVweyVFim566kZcJ6ZWLzt8MaatHStsauNVEAabMJuno9HNfXZMmRBq",
  "key20": "64DtEXfZRkWgKJPUgQfheiVfByXCe5vbiQErBstrBEaj2EAKCEapDhZUAgJRdtLPdavsn3pSSYvybtH7qLbPsMUu",
  "key21": "4BGGbZrqm5nhdK9sS5uQrJj3gEJrF57Pswi3Wkux4v5SFyeAyu75fwbFDiufDKYizs2x9u8YbPm63JtnKgq3s9FM",
  "key22": "4RVFMzP1Tcwe7aRYBNXzUDywXPTtLRwifzscbdbieB1wv8UepWAnj8g6WJ8nwRnnv2DhXkx4r8e4tNeXTTyEjzBM",
  "key23": "7CLt1cz9UHpGiGEbENUTUcvALLt94qL3tFnFKkHmX3B9LhckHjJHG6EaYTaPLG92oZm97MFvsdD6X61FPVwTu9t",
  "key24": "4vFaHpfmEFQjh8U6cdwya5CRz8JQ6cCcNx9t5sdzEHs4k7z2DuGPhSFNER1Bgt5e2CyCemyiXexwuYJacVk4S9iG",
  "key25": "5kQKduHjBRsX6gCykP8n11n8aqXRzNiUSMSCDEo9i1S6mbMdfbJa16AEcvwgcxG6ZNxDG25tG9SDHx4hSLeb2RhA",
  "key26": "sr4can7mbwpZqVCxc9AdVAX4VoycJ1coRSQ2msqDtEMMashZkfAKWuYz86pGS9SHnMrMy4vhBBzqP1Vi5DYkAdY",
  "key27": "qKZ7RJAU3pNU2niAN4mvbic5irn1BMabSYBmzMugJaoVxt7bWwLkKge9STmejvtj7jPa9zSXFGGAMhdZA9fvgjD",
  "key28": "2wvhtN2tYJVVb6S2bG4hgVP6bt5bKfP8S9HmxZJnDNpo1SEwzsRjemp39TLbS97j8NCuxXBJYvVXzpy9KkJzBZ3s",
  "key29": "4A6SB8ardDf4TRe8wJo2eQV6gThKBYqwX4WVUSZVsoxPQcJwmTVDxwHu2GkuK7nx2BPyYARCYDTEMhwsV4LDQuWe",
  "key30": "2L8vbJaTpEjvH5z7xtBQxpc5eWPmowRx3uJZxZgNWrd5eZvPG58MgsPsmwe3mpeYxnxeiopACnaqWqZodeAQ26rR",
  "key31": "XbL8m1ALrfkcRTU1V3YNYynBgYQrCy4v1WsxUthoCX5NPwPHFjoxFYnokeb2194MSQZoS5DJRidfRpBML7WM2ur",
  "key32": "5qSLQ4f44iHPYaqB7Sk5Ra3oU1munWr1zUwPJcUHbXFiTyZXSEPSAqd9nks4jzCW6sPxfA5QqP7UXNogVe3MGxTk",
  "key33": "61SUwTnhUK2dx71yu8qgyWaRxWoP5tTH1YF7pCULfHzjizkGjPdRS3f7zc8pFTPuxSLRBWRsZ4CVnGjaQxi5VcB6",
  "key34": "3ehfuaFiDeiQiiUf6hzg4Nby4r6zAXA6efkF3M97TrKSnofsi76omzwDz5nA7vfBM69XxWGEsyNUrreG8e8mnoyf",
  "key35": "4Jeji7GQD1nj24zwnnuop5SA1UuPS3pc3pfktMqBQX2a7C6gWYamdJtL3QA1sbmTmbnTSeLzusmMApP4oWNmRT4A",
  "key36": "3DsxdBLiKFYvy6DY8gLq9pJEDQP3z3DYjZmn86Ds3EvgvVNPzXyiUUYb6s1FBKtm8WZmKF2LQoH3nNqB1xNcRNs2",
  "key37": "gPQdz1LvxiTPX6tyNBLcrW2oAxReMFuSZHkLgTgBvJ6VxBY3fs2otoycHkVt3wGEEQR817eHp6Qh2KJLGDasTkk",
  "key38": "9dmPhL3aQLyeSoBTJZcCrkfr74HntDNHzpbxTudftxwgB2tBS14GdCFgcgHLL8WpAoZdF5ppHy84ak2U8HwoH82",
  "key39": "4Hzfy22ZYETfX9VGESuzvBTGTU8udbNBNUE3nDCVxKCDt99YzYCi3XmpHNxRWwZGvE7Qo59C17PvxkvPnei98Lcy",
  "key40": "3GWJ3rPw2VtD6ek3HNN4jyaxDaZQDr4prwYNK3xJW2EEwZKEbA7nsRcKMVVbetHWEwzygng3usTyaLVLSvZxikqX"
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
