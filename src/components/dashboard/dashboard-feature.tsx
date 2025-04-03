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
    "5sfiAQwRMgqewrJXLrbeCSbQ9QniLfvLqwPWnqg1nZwmVeKXdGuePhNfJubRNuumdwiovJs9xSmWSvEv6gHtwQby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oavsCaZ1khQrs1nWCgoSAgdqFMH4xUTRxjjnbbWHFcpgM7bKN7FF4NsoxGjBRNr5Dj3zPbNYdQKhjfyUZYYsLZj",
  "key1": "aHUfdtHJGJJJ7kvBJZZd7kUsNFSHURdo1wXkv8BTkCQYuL96dGVyFJSbkVNFJVVA6gesFhDenEogCM8ZYZWVLsi",
  "key2": "5zq6HASJS5sEvQ3SzgSAikcNGcK381jBCQ4gCURKrjv3cFeqsPzvifH3vHXpTxVeXnLvLfhLYgpH7rATq6ockTAY",
  "key3": "5E9pc8QU5xDvhP6KiA4hM7xb3GLxkoiNEabfWpkhydBY76cpgAqeq65ubjXZUxPLzMLAQLo8j5yeSqwe7ph9rw8D",
  "key4": "4YWWFEbMdxHwTh1rkArtGts9tnYHk7hCyKzzs8AK6AR34iZrfuXXwhovBg7GrhmWT7S9Bw3LdKqHSqLGdxUPNwVc",
  "key5": "4TNxbp4thgVYtrZw2M2gd2p7bjJJMJ4c85ecNtXt3ufFXpDf8yrA4WSCS3btADA5K3h8zR3JQ88EbtuKzSsLE135",
  "key6": "4iqZTAVoj9PBEPJZu6b9gSfbpc9FWthUe6MvJbvfAapo4KGNMSxmMjrimKF6bxzNstHe47hDGPRrZnxLdGhw8TVD",
  "key7": "3KyxgFra3yRPgvnQHexUe293UuqerpNy6WhP9nzAvSdwRRw3KomJMEn6Y8eQvZyMH8hNYW7kujed7EvYPMGFv1FS",
  "key8": "N1MQebfdnfsiSFuE54spxX2FVWoVwbb4n9WVo1NPbuGk29kAxurXhwJsxwFEYC6iUSAF8DDC29KqD95wLmvfjdR",
  "key9": "2DDDAyruNBd1ffxAVUvzFAFB6MnJm1YU1t3JLCWcfHRViNPqi7KdLmu1hZpz9jt4pEj39vJFwTixpqfEnMJujxv5",
  "key10": "5igoaRxv3u3wcWiVQsnoDUcrL4d54aMCaypC7GZoFZJ68M2SK3MiiYYnZSRUqF7D9VYGBcAqMeY4X6ULTxHp3srh",
  "key11": "3XepqXUbXXkYnCxcGbQwAtQDjbowcxroe31X4Uzr68282ynNV4RHoTz4nWCMTTdiu9fusbc1fi3vo1ZmBHMQwcf7",
  "key12": "4eV5xv1CTZKc8J1VDvN998P4U3EVteMgUDJpX8jq4fGs7cDwa1r89KWPTfburWBrYqrhmEhNbR9pp85ZgZBmy5vu",
  "key13": "4oAduJHwDEnce1G6ktTMcNCPRsZToXZQNd4Wr2rcaRrTeCSczwpX4DxohoqBSY5HuqkiJY6r93oZF2CKhD36DRY5",
  "key14": "5fUur3jE6j6o6az6129L4GbVNDD3t5DzaiBB442sisqMBGEuhxSVMyWq1rrKQRo9Diuc3UACCZV32dVGw3rdoJAp",
  "key15": "5eLtrqDSrtf8PZphYwxS2gUWJihtq9gGP9mP8y3Qcb6BzNbSjeRkYBRLLAD9jEsF55haK93PQ8V6Lo87fCfEVuDP",
  "key16": "SbjsVUk2g7VkYypjLJvvuYqUdmYq11uKf7LQ8zN3xXuk62YUeTfkBUWGAf8itYBdEErrfKhmzX1jQBvf1aPerXP",
  "key17": "4dUK3TXrwGJ4Cu8TDhYjPmcJLJNG5GKYSjqnf9NNoG1KAK49xzxBTZbD2C4RwWwzyq2QRxMMMAjfHfDZzftG5mf5",
  "key18": "4TTBSNyWqypAD8m8m1EeZEjD4GU7jY6yKZqaUBCHUHQb9A3QTQQFC6EJn3yfG7Ckpzmc8pUb6MnwY9EY7DTjxa3Q",
  "key19": "5QYSWPz9ZDDyZa4KFc7Gebg5VfwV9aFL7q9Uos5VBwCBEgX6VphuL98QWtnJGxUmD8wQ3fbg9waEYFKnQLw1ED24",
  "key20": "5KN2ynZk5qBEy6pUfBsLud66vtWehg1D2G1nGoQodzaFkLdLYZ2yobvNMdM9QyqRcm9ASy7CLRHo2PaEuFa8u8HE",
  "key21": "2ZigfGdisZLDus3j8roCp123VZ4ti6YXf1QvMtMbVkdCPdXeXfryZ2H8nKSYK1qmTUYrkNP27BUxpKb9K29e4L34",
  "key22": "5xwWMa52wMssWWF3JY6L1HKwS3CeCn5gS5BMBa4CaguFZUMvmG4DjxJHCbkuWp9UbhxvkbKAofbjV343eNhawNEM",
  "key23": "yQkhgbUWPxTkcZBMJU6UcML8NeVyjGTgZhb33dF5s3VwRcPNsxiyPfisHVcWnM5a79BJGt1YsGAf9FYkXxwzezY",
  "key24": "3atLK2o43G5Lv8QfD9g3WCaQHxdC4x4zU3EgjaPFMPVwY5LxA2w1A92nFcbn2YeogzXvmBaG2Scn3JDT3d6c9noh",
  "key25": "39HaLfaxKXQW2LAj44jnEDVRnZuYKSLKkprRcYoFiyr48KUAmhrkALeHemBKjfGfVRpBENdJocnXtTGXERtJ6hii",
  "key26": "66EU5hAi1K1MMYyvvAUKGdBqUAhJUBErQvpFfPfmvQCHaKmkv77XhkbBZCChUsjxEVg9cFujaZMSX11hVgNVCcT",
  "key27": "mRwV1dgrFyW53Pc7dswt8zXNgWf43L7UUXxP5zCVRs8CKJBYEXSE4Bib3T1ummBsLQYogjRxgUvh6viwCshnCeg",
  "key28": "497tARV2ZW3kS7uryYyhALpYKXmsKWqmkHf7YYyyCRyZ8a8scUhae3DZ4RiCks3jhQwBcVokWGavnKfsQPfbyKUw",
  "key29": "5dY41tNoN4L8YnKGvnpTnBZo947rvAbBRrNkFUcon74g1yhKQVWzdhFJxDM8kxHWhzcoamnp9yiiQkwx38eJvKUX",
  "key30": "4fP8E2GKPjkVFCZmSDwncbABeveKfzzVDkX4GLyfMDGZ1tQjnDYnmXBiQxx74BpwsmTXq9JRxtdZJk8DuJBBr43w",
  "key31": "2rbCCGDiirHpe7jZfcJ1g5T4WsUyChSaiu3cqJQpZkRdqvc6HqH6h81bwC17gnUHVGo43vS3aeZMi8egUswLyV2M",
  "key32": "3CR2rzpReTRBGhT9Utqua8Mug3vG5eVehFyzyvL5DHAbuAJGqMB5djkbU9cg2t62qPYC2RYbqbSRW4yDaNYXubQX",
  "key33": "2zij8o4xdrYQgEhNZwBTmVTfkxm85HgV6FPXXN5GSeR5rUsUQ5RrB1ZHZ1jXz6cAf2Vo6g2eN5RJYEHdEeq56atb",
  "key34": "3nX814rnHpm8X87ybiUPjuHFUD1QT9yK28SYFhBAkSo5vi5fdK2waVtEW2FwQrw8CDSJS1LkAnXpTJNHdrykQcKj"
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
