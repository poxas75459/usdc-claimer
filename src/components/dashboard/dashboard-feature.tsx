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
    "D7ApJm2PdUqhHMYbeHVKUg93gcAEzZ8h1PQpL1eiT3GdoRgaRi4vS43HLhmjUe24ppLHLQM6wWKwgEpjySzgCQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a47YU6ZHA6YVLhHJHcdYaJ3paDHkHMAwGUZJHozFCBiWfL66pmezmuM19zwvrrGdPMKNQs4so1XcNwqLoHsCT1E",
  "key1": "5PwcUZUiYE3HBP6WBKTRK2CiPmWhk8poL7NhYvMqEV2B4fgAfcgs7tmhkwN7Y4g7hA5zSXmCrWmFbFXpXsqpZYQS",
  "key2": "WVA1rMnAM8F82YFk3ckJnQKUqUCRNZ5JGrUea8XyX2gYkZQpQ7NjyNaAMjpyqDwqgzmMsDDGLiDwdGGKxtoWBxB",
  "key3": "4VRBk5EFQzPkW3gd35KrqnwnuNknBH8cSziy57T9S2mChG1sVQ2ZiFX2V7qci9d1sEfG5C7fdUcnL983y8rRrQQP",
  "key4": "52FFDnHMUEDUWBdRoYscLDKHsvi3S6z8ywhLuEjU2fHDdsZatYCAg2gguhJ3KsuVS3twGLa4sBaR2tTiao5Uu3a2",
  "key5": "5JQ3fbMEvQrDVibJJ6ihhPMSNfyYRbdoQakS56Kfop3yfWrEeK8eoFGh96y7RJSo9s1ZGXn4kNNV6VkHZHsyvsmG",
  "key6": "4HvzKdDJcTAFr6eW7UfWHvLMQ5emQrYsz4S9k4TtLkM1HqjVvSst7P1hWqnSrmndKvgx8o1hJ8JdH7S7zpr44wYa",
  "key7": "1Kf6TTwYSiQ2RdwzSu4oyzNiy4KA5ZEGRyDK9vFVCtwXLLA7MdRmQzwdjGPTYEFMdUsd5GRnt3gekCMU6FWFbhN",
  "key8": "PnpjspVLhSuwhDoiTjbVuKxvhkUGiZwyBkzErRCTVy1yGdSfuWwD1BparZ9gSK4AubWroc2AciL2KCyrxSrsRGt",
  "key9": "3LEhNaXbx6QgaXAX1UxbDbw9fDHjnNg7ebNCymwTHJWiUPpji6wzfrKtpcwaGXScQ8bF5pxicTrnM1zGuEFErAaP",
  "key10": "5oHT7dHgVCpea16NMER86WzCo4JpaSVyJKsne7ZoJUiY8obgfGq1S2GZPxTMgo2LhgzaArdFgyvZRhmypisyiA8F",
  "key11": "3XJqd8AfPrEo2XcuMMWHVJKDydXbmeZdcWAz4BtAfnqPCqPVAhiuyzkQB4NDBo8MbZUX1PvejHuALuM5wj8ykSSP",
  "key12": "4mG11DvDP4dDaHYeB8k4ohRhz6ej6kjAwhq4joMvxcMjKWjt4ooZzUK9CgGJTMfSeCkoNyTNyFMzT7dTwKu4N6jK",
  "key13": "5uTPcFGCBuG5bCE9v6rC84Uuu4oyE9UR3N5PkVFLsvUJAQtgbUb3zN2NfoTNpSwbR3vw5X4R8R3REKoA3uxghzTa",
  "key14": "3L5tfBRr191NqRGbpd5m7feHDFzN9k9zTh89HSVrbPGHAihDtJ5RwyJax6MJoo8qWrSw8AcTemg4abQftHZ4yoyu",
  "key15": "5Y5ZHbHVZBXva6NpWNKUXSmDoAz6PenayBASZBYKGcmZ8EJrWT4oEPCj5XyQaaLvokmC4WiLGDT9hx1r17ThFgPr",
  "key16": "3gSUhogEdAT4jHWc3ZCnPqxEtZwFgQH8iDrzBEtXrijgLGKroCcw1kv3BKwGF7vL9RQZeSE79UPFSMTedsjcj5Jv",
  "key17": "oLWjBqLkESFWvun7rWZ5oKHiz7J6HXsHMLbWqj4mFGYP7PnPgYdx2D5KPfbF81HXroeiJqewSF5ZaQtgfa2jkjC",
  "key18": "3KgpECmkmgDRXWZ4G2U4Lep6xd17uQKSSyWw6gCafSqDaYKo3mdE5iffNL1frazEX5oWEXXkQE5MAhwPzXvpdFEL",
  "key19": "67fVDvLQikVASVocPc4M6Wozo3P2861TF2rXnWsgGFPu1KM75C2r7zDSp3s2oauYTEkuVdCCPymh269ohaZeDsfC",
  "key20": "3cuHM4g2rRoRpEDjqua5QmXAePJV6Hqhxru8hbUyDizm6KdY7j7iaFiWD5xDa7esWudPhaqRfyxXxe4U1Mpvks45",
  "key21": "2pVkewBU9ZzLUZFpMerQEhpcqgpqnKzGtzjh1vHAgWqvxwpQJ6NEco84jWDc2Z4WPxM5yH2QfDQaLEpUsQzu5Y1f",
  "key22": "3xW6A76P1AbRpU8aP7tQ7Tro3w5UQWgnsWMunHor9edFBNkyALJmUnSgUdcKhd4PzaJM5Y9hLDnve8mhzXggj7DR",
  "key23": "22cKsPxwVXT4pyQYLUDaNbUkMre41ti73YP73mEXo16FAa2Wfze2eWLD8y3yaxz7WwvUZvJrstb7wLxBLdffcXyr",
  "key24": "5tPiKhF7VgXjFBuSUHWwv9zatXV65Mmqnn6YVHNQE3w52oAsVAMwqizrjMsFpaCs7TrcP22biQtpCdpXZRRiJ7xq",
  "key25": "4wzpyFhymCRgfqACE4CSQSHqEEbepmMMztVtABuVbpRhUajyKa1VoyLJZGgQnt4en4PTBoHu9eieWfUkgrotbVPC",
  "key26": "2FHJp2V4DQhddwjxHcqWwLXorH3i3pQCRmnpM5nMVj5N74Ez1yMhMt7GqgxCnddooZ8vRtTJGNCTNVmNwPEfH2gX",
  "key27": "44RM8KiHZhnex34Zfhe3eacHBjWsFj18ytCQ81eNzeW4FD7Q9WCuxwu71NQyseVqcioohBKiqqtfLC3LUAUjKUXs",
  "key28": "2Tcp5AgaTef7i8Wy2PkfD6gxCpAPik975WBSCzp6wi1jLSAuNYJngKaLfyjyCq4QQxd4BZFKP2Gf35fbNwxfHckm",
  "key29": "2j65iB4frX7qDXB8C9F3xwZJoaHXavdzsW85mgMwDYvw99oNwFARDrb1BYMvZYa7RRbhW3nF7NKuGsoZZMMbSqNf",
  "key30": "3hvgtRpmDdkavdJmbhdqouq7prbzB83i7AiZrg3mA1bi4oy5rZK6D9KKYs3dWsi7jE4JDzP3rEcxEj4m3hxCVTGC",
  "key31": "C2AFvXU9hGRQSXE3Q1ARG63fn8LvnYb358rFHajQsgyzjK1Rg1kqz2d22Bf7VvQmU8DJJq5x8NuZroH8RgamzWX",
  "key32": "4JTihUQwYPFqjiUWy7khCJthkRmsb8yECnkUhSS4swhVBtS8TQAX4G8VJA4s24GpG2bTzY1aQ6Np4q8oAvArcn8U",
  "key33": "5h4CmVnSYA5116P81ReyJDYAzkJDQo1WHTtkD36KcraKLLcxJ1MidkdrvfeQhBiv7ryDzrt1kGDxeRxjLAYTucFC",
  "key34": "3pdZLYAEbmi3ZbYJmVza6SmDbMVTkvCK9NTVExkt4qHGKf7MGNS8jgEBYE4eLFqnywB6aWUpto6RZRzJNxgzwtx8",
  "key35": "oBmYNSMxVW7M9Mbzpxb34omMn5mVcePzwFX3ZpHAqPcUqcNxQea3Vu3hbnZsV2xerPd5d7NY6ZLhR7wSosYJxS9",
  "key36": "37VLsbaz8B2s362vPFtQeQEgXPAJqyCu45gUUmhAVUKHkTZCR89MbGHUAncEQKsJ1JdhMo2F4vPrT3K7PE5VL9o8",
  "key37": "45qpyTQPd26qLPmi1mZ65uSYsbtBZXnqKF2GyFvm1x47XrqRe7aktcykztH4WHDcy5EQR9h3kGAvwGkDhw7XF161",
  "key38": "2Ds4ayzw8bjbR5qN5HfQ9fYraxZXaW2fvVfCNJD3gxMuXQoxtxPPWDCghv4ktd8CAgEK6LfZHUtUy36sxhFMUP1f",
  "key39": "4X4Rf1eKtDCS5bsB1o3p6r1jafPNBVfNV1GtTEeSBuEEaQuK7KpZNKRBUPfdFDuBTLMyf9UHd2t2gSUjaNecADsm",
  "key40": "4P3GaoywD4SJsFZb3A4wv5rFWBnvqqCcaQfhg2UxaxBN9PJahbQebHuCELR48JL4XBM8zQZXtLZVDjkqQCQt36Dc"
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
