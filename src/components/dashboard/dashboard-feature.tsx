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
    "268QrQAkRbTCM5qLpCmUJzbVXWmA87sBGo9ixZGHtHXJUL8e7ok2X2iDNvwWdjs9QaYu4EiQ146RmP6hEcarJxun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WQ5zFQmdSP43r2tVKbJrQWqEM8AkCkuJ8cMwkTPRWozAkE5fmZU1tKrZuuyNAgQQhdAy4phzDGdsajq9iFyrc2Y",
  "key1": "4urodjFcGLAyR1n4VQqwrBBy4sySzhwN89adnoETrYABk9ZYamuynmrW3UdUESRJw9EziS98uDvrU9nQB4CKU1XA",
  "key2": "5soHJ7uxNLVWDZpwGwuCCSsEsgY7sooWFiqUFMyhD3VQLxrZwzihdWHPvR4nWpTgT1LS7eutd3y8oTDRJnoyp1Cx",
  "key3": "2qfzw2XyMVEY4ZfmpEAaK1s66C7UiBuLjSFKpzLXbmVugvoimy8eHqXPmXNPbKcJaEjMayZWuQgtYmJGaKCL3rUb",
  "key4": "D2rhZXHZjdMsiRziGMsMSdjkxLwtBPD5cyWB69uz9V4tpCeZNrLYCD1h7JYuJUGj91KxW7AAVRtvzTxy8qp3SHW",
  "key5": "1dRKzDFrfRkby9664KWWYGvugFxhPsKJVPvy9ds9Q75LH48LASA6tUanTC8942HK4xk8255wYTV7DCB5xwC8HFo",
  "key6": "5yXUKegovbpv8wTpKRiU6PD6oKhK7iNd6s5EaZkyQ5j2YeKz9W2qsEDACerJZUZ12yLQMYr4rCpxEF7BhwZqarTE",
  "key7": "3oyPPCjjM92MjjgAPk1g1crmDZ6wDGktEKRt7uTNEc9gdP1nwTfo9a12ZPYrdBXoAujsmL5NaSeEuyEFC2yzNwX",
  "key8": "n8esSc7CbyBBPbvKxjC3hyE7a85CMz9Uh3zmPThZ7GtSQmow1nJineaVBBjiVnqAbMJHWTkpep4yNuJB82UwMcP",
  "key9": "4W3XYJWGhWk7gTxRKAh7amddWd9xsYnFebm5ajre1zbj1JGBEym2qXyng5itw5gX8B1fQUTgumt8A5uq9AHzhdiZ",
  "key10": "ai32CHtsr8QQtWjzC1h8RKmdxXeVG5UvNqUBmQ5jbYTtonnL7VH6e5CMpYkHNDVV4P6cTPzJdD9f3sez8DMLZyp",
  "key11": "45DzeUqqHgWf7gSwKaxi1QfVsBDJ8HHnxJwStfVT5BusMaqXJx1Bsb6vj2r7gTcwFRqBzL7RpQEy4ztzHZLaP6BN",
  "key12": "3jqvjpkhBt2RfnK6aC1Jw4xdc9RMhorpiLDvBDrJHasHPQdocH5xEZKguroSU1PfpRCc3u8tmM3waJeCQgwG2maM",
  "key13": "32af58ScFxojxMVb5DPdYDx4CVBvUHaG71bARMsgnhoh1YuDEdn4AfqVUpFjQJuJRXfsEE1ma2kVkRr3WsqS1X3c",
  "key14": "5cmo53KPTSoYWJF1GpaZPmxgXQJ8FFYpySwYukrEfLwLVRQcPV4HDBcEUfXfwon2tgzDzyDaEbDD9W71b5eZevVC",
  "key15": "4ZfRsc3DY4rdjnTnW3ycscPjHCgGx9oL1HFJwTSnP2WRDvREvVhazVwqZRY4dknCBbCPrtwLvLr9sM1qmueVCoCe",
  "key16": "4DWp6kD8pcip6UPd7cEbYwD28FFGGTFM1ekMMj4Vim3LMr8jrxn9KxYVGsUDB6SdSrJhvz3SKpBh5Xirm8ojZN6X",
  "key17": "5iTYnRR97jFnzFzuKg8Pbo5u2wa3THsULnEYubYPtTeLXHQPqy3v5MXzHuuiobHbJkYVrkmQpeSWkSenPbz3cV1E",
  "key18": "5Kdd2ZV6AvigN7a6kfD3j6TaNUBX3UFDVV1hRjHmsyjVyXhSvYQmkXcoAtEJydyrwmEsswVciCApWQVhveN9Ge6U",
  "key19": "3WTgmFRNA7bxVGRfmJqkX1wHzV4sPFA8GcerXY3tmWE5STLQFRnyQLFSUtnZP1FnmrnW2mz5Bc5ZiexL4xQ3fZ7v",
  "key20": "5xKMSR7NXnoJ2DiR7RMtt9L4vwjqFFPwQRymJpyfQCEWhvX3uwMuaxywur57wH7Ja7htyEcMpLabwdnijQzNa5YF",
  "key21": "5bmPcnf6VSKRaDZLrv7Tpfyvy6HQpGfTL7AwN7n54d85nisfGVKPux9MaT5hBDpvoo7jarJ9EJKYsGtXz8WWcBfq",
  "key22": "2j5rfhPKvZY5ChfLnobUsC5PUc4pZsnFCLv59RgjmK1ipBwkZtQX1rJCSn1AwSoxUQHiqURaLvZSzENHqydrCEpG",
  "key23": "3DzRnyq6xehRHGMvBG3RKx73nWYLH6pqE18EVdjp9aKXuQYQPZVSt8iRS6gQNxhCoQCuDVnLBbc16REYVLjAUENv",
  "key24": "4dzX5bvtF6TwEEzwQDUyVMFcxeMY6HKG9Q8ybLfHg9ML9eXhfHRsKjurpFeSkuvKpRFjGfb7sF8gqvPCg9mgzQw6",
  "key25": "3svoQtqrAAJnREmnwzANJbKS4QzgHKxm5bD8mwLG27NdBRH4hKGHADjhyRMuopEDPeLs5WoNNvMdMiSXEJ5wqoK7",
  "key26": "31nJbhyrGbAozxE2fxdUK7p2Tjx2piMB57fpEX1b1ZxSCdHczYNSKFTRSeh1MfziK9oxWGsgz8iAbr2wMtoEL9dK",
  "key27": "dQSyzC61FLt6gnnWbSQiDT4M1U9HVo8Gm17BQyppkNmUMk6KEmmGXZAR4eFNbbXANvSnijgmE5x3utDSAopMzDb",
  "key28": "4f4KQTXC5rjuRGfr35W6BCTDVAcuEY4uFTsA41nU7bEqTCp5teU4jsJy7oNB6mfbebXLo1GQqgj16h5xSNAJy4ud",
  "key29": "56K2uzSZBQE7Wnisaa2dNBzWu7jZebpxa15Jxkidz7LvrXparqs3eNRszELayXLbkQp8PcLhwVHdpeW7LKVUTnpk",
  "key30": "hWvPEYpBn82f3hfh9K21uQBGEo6kSPkhd1Q1DbdGL6Z7Djga7XEjiwqWDVvMBigsfVzSQxNypaPErbkaFPyTbFd",
  "key31": "2t3wxfYQs9uxywTKmK1bSaj81DJtag5oj78fBgoBmALvLGDtuSJKnwtyYbuodAyNJkxvkyywFVnkmGbfBAfVqGD2",
  "key32": "2wsnNmvKGkjc5khLEH6MkLdxj5ymYBT8DwWNyrXrFvMY4tvum7KKK3izCCLcfnsXxBAFiQj4gWTqaC7XQr5i1F2X",
  "key33": "5mgShmbXhoDMtogJdwRhqTVKRJpHdvj2V4ahqbzRCMtcNa6cjniJVzaeaDeifDSNHY4uQ9etF3ATidswa4hvKFfW"
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
