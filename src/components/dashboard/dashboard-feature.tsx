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
    "3dAtGLBKaFTQbH53Kha1RK9f2kvaKddLXTN2woZmaBd1WzgRyojRNmvekYjXtCKEipnnvNqqkfe9wAvxzhoo6a5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aZaiGaTu3874NUPNVbxKcgSLkofFdNznrLzvtVs5LEHoitHWzKvZLPYCN14kuaZPZEssB2pPkaARWC9KUgFzTpg",
  "key1": "3UW2FvyQLY2STtB1GfYcaH5dixZqiVJZybs89yVKtfgYUwitDEwkiSSiDB53xrk2VLQFgewRvWETzdXaC6V5tx8B",
  "key2": "2buVyBaRmMN6icK4BWDEFBxZKT4e3Gn7xKUaokhgtjz353SnUGYUSjMDtYkDydHXQnQH26oG6nBn6HozjrJD5RGv",
  "key3": "sgMJzqsx7a1KBu4rRS3vjPE1tMLT7NjLSkMchGNcuywbRqdm1HaWgLYvGmfP2LC8h35edhW52n9dLZ5Ape5LcUF",
  "key4": "4eDMS3PhqvRPCrjMGRvW5PhTkxcvToA6iqu1W95693Kf7qGufo7jWULQgffqPRK5MtGphXAgfJzg1e2URYaAAQnZ",
  "key5": "2viUsGHjEeeaksphw2sarXx3du1WNrCUSNmyJ3AeZ3LMvTaZEvRPqc2PtMgQX5zMfSbsbjMVaVwATo7V5siDvnDR",
  "key6": "4ufGTnivCWyMe3Tqsf2YjeNqjhT9nyZjnc5okMixSckMBsyWMFYJZ9Cjcj8WkYHPpuYeAeDTYr8hrt5SGrWMXjjK",
  "key7": "4nnymwcQz7F3F2HNtBLAN7FV17azBHxxgPH8PP2tqm265Uepsks5XAK3uN6fR6JRN2w9ZtwfnZa7RmqGRx8HUKuE",
  "key8": "2C68Mu2zKE97KFFhFBhcQVYSrjjUMQTqBSvFvPjQFfXAMZG8Hvc4Kk3tSXGr3RpZHuoPFSBYfS6hcVfuow3vSVoh",
  "key9": "3wRa3gD85T8JBcHD8J1CA2z2Ned8q4UzfJSiUFgPVrDQJZvXWDErjkrVK1BKpnNqawrXYHKnh8GKH5f4RCh7biP5",
  "key10": "3MjvWDVM3pWmvWt2mJ94mt7jF751iD1DftvbPXTiGyLMz3mR7SX17kF6BjbraSriJisSonFRtVxgxvhKzG2bjoVW",
  "key11": "4erNkY1pCis45kPtH4B11YjHwuD6f93yqN7JspijzX9AtXtyTSq1kw8dq2CJgtVC1WCEvMGm3Dyu8sScBBqbHidz",
  "key12": "5s15DvD4Jdt9Vy84Rs2iUJaYKSyGpCnw4YkDbtm8Q6fpE9pMT3GFwkDUihUr1H5ETXsKTMPk7aQEBVvMeU7R6upU",
  "key13": "5ouer2hepg8fRS5ifynZKebCi3sG4PvqqpCXhi2eEAbY1JNNaiAzVVbkxJUTR3rMax9XK4j44GSkrPPTuPsSBGZj",
  "key14": "g7ZmjAoikT7bMtxmbXKNVSAM1K8U5RnuUAZR3et9t4YUM6Wbn4omgBNwzpvk1A5ZRTqgYfFD4KiPuLzUMWypJHa",
  "key15": "5FA2dQex21f6BA33mNAWEdSM91rW2UjPDh47dTsHUUNa75snymbwF5CgucajxSshUfpNptpF3uQejjK7AGLyjc9r",
  "key16": "2yTyYfHL5mWA265cZtR19FXSFDykCDoqnz3WhRkRtcmT9YrL348cpQNxXpURPDNAh4G86hqf7dKB3jgm2rgQU8Mn",
  "key17": "3Moqox99EHcATJZea9r1Ufxk5sXUFE6Nx7pjErfz6BJQ1DPrjgeo6igB33W8HU8pQx2XZzqL5buKTSxxG9hxCvhE",
  "key18": "4foVkm6gNoxQisaK8ca6KgwyJqdVdQ3C4oJQzvHXRKs64dqXbMr593ZYnR2Gu94y3XowDtB1nSbUzhgtadxuQadG",
  "key19": "5Mf41MKdB9snvPnmbAAw72auzfEwCGzEwmat4ZTzzNgU4ztJYscBtDnFbB5Dg66KZm4qwVBxb7NuiiWZe411LZjn",
  "key20": "5ZHwJngsGUDaJDUXB1oxKP8JxUkF7YEg14vnvMFJ5ryCiwH5KP6BPuYywrVy7f5mgzzej9gWCLLZZVvfyiZgPxef",
  "key21": "4aywbLDkFnNfTN4QUSpjrfpXkHg9omD3Gswg3Fx4NjCRAo4Xd7kA24P8a6H1zuMKCyZCUArpTdM4X5PXKeFLL6Rx",
  "key22": "438fLWbgbP2gWqqM8icDrbx1MjeJUbMDXKK9e9z36couEeGmWs7hAAWGixPF6LCYwHckxDekCe7JRED9yrrBxFb",
  "key23": "4zDwsUhXNvfsJRiQcYiVoNfUz2sefwjbrKEhDmudcERn5RuXPc1F31bdfB6MZnZZrr4NFYz5xXneRWWZeHsA4bCK",
  "key24": "5jZ31yQpzY92Ry9DEcVjrZewvEvDP4TJzbw3TjUTaf2mmxMPbLxQSwZbzhY9nsaGXMvjGx2G1rvayv1xKhPptxnm",
  "key25": "4tjnts944ZaxTk3ZH17qDRTM6TuRCYDs9kQqWKHYrZgKP3Tz789eA5rum5dMSP61g6N8mff3TVrr5LwcXYFFQQEG",
  "key26": "5z6fGAwcj2fiLfXSfvry3kVX3nZsC9uxF8PiEyZqpQS4HVgwrybA5bCc9Ub6M97LQbXBNnKptB8X2J9zbnUuoKAi",
  "key27": "4qnRHcxUee3KZL46Bc1AwrFG58CVpHnFRpNgZAas2n5aaHaF7yPXaupeUkBHaC29H8duRmBDpXAksENuHTGKW2po",
  "key28": "5ptdqLtpPFMv8rnFyQp2SWGBes8VLY7d4pSebMqgRQbLXmn46xEUmUQ4xeByEvd6VZ4kbGsWyNrt9kCjCNcDT1pX",
  "key29": "2byjifuo39XJLmdXttaiToz5qMY9PNvdHqnmM8m8tpTEJgxPiVEY61GWMZXe6vm32nKZvixdBu41pWN4wNov7vuy",
  "key30": "4NU9fTAoKkEZb1W1XJsrR9aXm8KzkNXCHEq5UG5CYnVHZHzzxmowzN5auSLomP5SoLBrj5aS8n3TL8QoK9Uhp4LJ",
  "key31": "54dw4uxnE78xvFWG119kkMue44F2b32CufTJD2PjDH9jhaMSTdDfpFgtkBjz8BJgY6pa9PdrEgpRt73zZvKgw7zv",
  "key32": "1cyZ7XKa5Pbvm91YyAok7LFgTuTHzs1s8xBmrz8KVjDtzdwYYhhjJepfU4SSfnLfsJdjEFbnXcnTaRsUJRQCRRz",
  "key33": "pNAZkb6bdg2BagEcFjmKqUMbNEAj1WVJsf2VGKsrMG5LwqwHAW1WctyjXo6Qo7XLZjVJUL9G8QwgXmexByR2V12",
  "key34": "2m32g9AfzAn2hMT57ypeNHwFHaEg1rnwbUJJhaWstygCHZkvbcxz7Mv9vcd8AQkd3eVtn9mACD8vkCXodGpiLW8L",
  "key35": "2UbVCgTFDncJBmT4kt5gP8NVEDuoqDRyT3ZmEMCQPVBrUGN2r5Fiy33ajTEV2xUu1Z5caRh7p9dwxvY6h3UXVtnY",
  "key36": "5UEEkBJGDSM2iodCDztXEPJLhJTmMVrWK6gQeQi1TtT5NWbYXB639gJWNKKCgZpsfRFfRHqzsqFM2Tr8Z2BcN2pm",
  "key37": "4f4uxz7wPiZhHQ3bV5MvGZBTijrrwbTNPhieiDCUSmK8uW8zm7oTi6z7v6gpAXupCJ6ydeq44Xsy4432BNdBSwJG",
  "key38": "2XLPD8DkdtnZ9qcr3MnT9m8HwMqK3bYE1JyDRhnCpCEVJVvM7f6wTLJmwNruLh1tqBRiUB2eMHZ8ukRoVLhhu2QS",
  "key39": "2HMxMHY7zaqaxqwX4nuvt4JKqvp6rRfvUxsVZdesLqfPjCQZzkucaDcEhDbk5KyrPaeFvwqPiXvg52sv9Qj1zvjH",
  "key40": "GkYQqUuF1PNuyQSVrXZ7npz56ZauYwoNrcYvFtRhkskzyMFttPgRnLtG81JXxVB26TxrN18U9WJnMvXA2KqxE7d",
  "key41": "MtouCfgbPueAdtWv6n35hDh2AsfVBrWr58ot6FrHdtg814may4fQUkHJQfpaw6nUn3Frvy9M6R7K1nqdTP7Nbya",
  "key42": "5QRpSubic4GWqGKFF158LDbZDu2ZB1wtRfczagxGKQyBqDKHSNw4Y1P31ARRajw9hGVccFgbjFoxYSeiezkbqpZ3",
  "key43": "294hXnjwKH5kJ1eEjvybMFCSJRw3QatsXSeSrvSwH195hvPZpVMf3uypeVCrbVgbDCY14f5azb1WrAH9z6Nrdcc1",
  "key44": "2J2DA2TLyePhtz4co1QdvUgUDonqjAhbLSZT5bsa2i3t58jNCedSNo3d8CdFydScxNeexTZwxJL53wC2ZCpp3tAE",
  "key45": "4V9xPPzn66ZAJv6WsYsbznTDFcA9mnxLneUFipusdTp6gEhN1VzMfRcFoF9FeuyTXEekgqCHmhXddXH9n8S4rjQy"
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
