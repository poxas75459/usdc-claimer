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
    "3gBEnSvWL57uuq2uCShGKvfHadhz5SVVa75MPuYK2h8VRQog3yYt2X6he9DAebPxEKmw32xqoXCaee5PDDiSpYeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NRLAiPoVMKo4xsxGLcwVbQ5VRBktrLv9DW3ZJYfsmWa4uEGbuWNZjQFAhKhzA4XVhQQPAvP34YWaHEMrWiZgCL",
  "key1": "4VeUmfgt1nMZMc1Vid6KfyHDgUiPm5usKP3MxeshNmByrp7Ev973kfyPneQrqpE1YTD3j46nb2DT72zS53QDAh58",
  "key2": "51MyneJgNETHMCrS9hp2AyVPHbdGsAYqvPWJEKobUFXjwRwdhUZHhrqNVyjNaBDYs1AAj8ELdALtFzMRu1HT8UW9",
  "key3": "2V9LXTuWtiFoikCKmujRoFv4K6iAMVSKwGmBAH2hUnwBiPis4KVuNY3R8nZ1CjHFE8Xyk4pxpBLGSW8syMhKJ2bt",
  "key4": "5auu8QEDsPBsZE2koxn9oVguwzweL9K629ynr5nG1KsP4gaEdzBXEyUYng1mXXCiesEm8QPa1oXqxsRwqUxhiyGK",
  "key5": "Z8SQvDB84icoLgGdbG3yq2ncRM1mE7kFvt1nEiqpSi73CRfpRcEgPFeskffwZ4WyXzoJsNq9CWELgHzVrzCKB5R",
  "key6": "2gPAz9r3FAW33qLrbcHMvege4Zx8NfvffNZbHtCUY5dpwoeVirdArbSTUg54AUUn2HJobex9eKkgHRkqAnkBC6Fv",
  "key7": "4oZubgYPiD6rK8yBRvV3EbSuGLVX3BgjFPMmqcEYfarTS7fnNjKBS46FZBxWpd1o4PttmtLQxge3cRWWikuBiQry",
  "key8": "2SE831ejB6hKspJXw5qUep1WNnJ8V7rnMyjXyHacyCf9HktkYPASsH9HFDKy9ReKfFdDMUjej54bPsm5w3kGRcHt",
  "key9": "58pwA6xTksykUSk4eKCyF1qCouGKgv6nJ8w2wXLDaw1jWdoC2TaRkL6cuPReRp6Pan7V2XdX2y1YTYxC4dNS9Qag",
  "key10": "4tpDZSRT38GK3yoRSwZWanpoXG2EBDc4R2taGsRHfd3z94dGaKBaSremazecPvBfZK4qUEWqj9NrPhjQZkM55edt",
  "key11": "3F6QHfhbS8b8as4mL3W69fuAA3iRbxQJMDyG6udaCvgX26y7gBVxma8TppT57rrFFG17b3zpauswNfNjzRNFRsCM",
  "key12": "2V9mCvQ2p1xyU5dbEBw6Yogus8k7j7EdTAEPJ2YEZPGuAHpZJYMMCcbMKmd1xqJ6UutcAbcLMW9FAk9Ugd4MLDvj",
  "key13": "5d353d5kTNbfJjR5FRg9KwYUY34f48arZoBG8PpknVgASyR2AotTtKcDTe6gkB9RNe17fusBK778oRx6GksYFFtX",
  "key14": "2LwpCKZimzigHZHVagfHKwuWoY4NE4j69PFviuamUC4XAkYTP62yZZex3omxeo5caCK6Xms9LC2exdYTdP55kb4z",
  "key15": "64EfC8Supnnk2mLNjKA59i4Qpdy9y1xPz1bYCWV8hqujxDnp8cSdHdnX7Sr5BtCVPYKKRuNpxaTxr7YuLQ5XxjkV",
  "key16": "58g9JUxK2jRv8YiyQK8AP85N93xjRsiYFGjHwgo6WjYxhvz5Nv7rk8sRHsk6aC8t32os6hiq2sxqkbYE2C6bpQ3e",
  "key17": "3hKCgur9KAAm6VQ82h2EfTq2c5JwDeBQNYAm3apn2nMyLisc3omMydpZnXWpJ8wmV566XDEMzVT3qcXkndprjNG2",
  "key18": "3ZitPJsTJpfthzsjK97mKQJdZKaquzDiYCLYwGpwHHBmTU4WmfZ7bgmFPfZnirRwLPa8QZy5dzXH8BCocb4YYhme",
  "key19": "2N2KzAGkjBUP7x3yVtfp5qLgKi7BXR7DxV1zg6AbmV7X4BcpdR9N3bnLnNoifWVpteHWjEfDbpg4AmxrLgSxDwvg",
  "key20": "5u2Q8XsrgMtNAhmuQEYgEmGDve7DeoKTUWw6EiwArP9EGtX5ofgsr4cpJjxoVrgkiDYx4piHh3rQwRbnwuthhCHB",
  "key21": "66tiTxwZn7XpwWfaudcdJBL7P81rzSbNdnQ2yj2ey81tyD5Kb3hCMHB5awJLarcfBXykKbZMzd8uQLjPRzJN6TiM",
  "key22": "3scYcYXKBXQ5L8RB4E8yc9cdL47LkFmH2LCXoGbQnGEFL3WcJWtELE8fEBTvA9ijtP8pSAuPUjTEmKcmekooqVD2",
  "key23": "4ouGNJMRYgW9YMNEQckZ5bEaWUqK56FpUgrojgV9ipJ5HEYxqFSQzq3GnqYVNsuFuE2RwG5hXWNchUviJx8W1REx",
  "key24": "5wb3vuUrYyyhrnmtAeHC2DyajV3iVtbt6LoswpTRmgs9cgvrrQBPR1DuA7hQe8yQiLzyg6DTWa3pWKt5G67c2rLw",
  "key25": "5aB9rVvF5pmsTF41J1wt4XEaCnssbYdRtvd9iffe4GLd8fKpTWGNWsZaMhkBV6hUA4fgiZDBiZHCEhSCFdf6ta9L",
  "key26": "4gd4iBzcX2eUVe7P37LnzH6F2nzhFehHihoeBRQjmhqJ9s7CSjR3ABxZWJgcVN9qpakbRiAzTxzXaD1naWf8Dne4",
  "key27": "3NzVT5xWkTpnnuYrf1Rz1Dd3JZJKUJs7ee7fJjmP78SXAKM4zYvBASF5vYa6BZFXgU6G3ukYMC4KmpQPRngifM1o",
  "key28": "33iWGbeHbxmEhkRoP4CvRqw8dnjxWLJ49aiVqK47wVFkTNUB36qQo169VRFURj4RehZ2XfSssSj9qC2mf16uKHyr",
  "key29": "JJeXnPC3gd9YR2P98vci9NCpjJ2PQxYkF9hrfgWK9whNPJy87YdrLipKqBAEmnQwWAGHdAgStjZVBF12Fnip7yU",
  "key30": "WHkTULAubxLGBoM8R7nMLtNDiL86Q6td9t8rdcGM6VmrkZw55QBeSixXZE1CAWCG5Pq6Rn771E9U2mCMJhKctSX",
  "key31": "3TGD3MHXvJXaHqW965SXnS28u4N5whPJ2p7T8bDESRKPfsB8yCdevuKYjhmPaBdpySKHVVNNftSirkUdwKy5Mvum",
  "key32": "3TFQvKLDjW1ZGxptjcjQv8ie4FdwjVAsUT9rkvaFsJCT3RVNHpdjQ88YZi6LoiN1cA9ccX3EGgoZwRNZD7vLUTrL",
  "key33": "3ivZjoZgLkr2N5BJ89UYFQadusuiqazpjBYp8KKcG542EJ3hFz3ona2YZEBVEcm7eEHxSBPA4UU1GJKrZyk3n52A",
  "key34": "2aXp7gGW5A7Q6fxkySBSzqQAuarzNmGjBfaf2dxVMDbG9L478Bcg8Tg5vDcZdM7DefPYwRpaScJ2FZBaMdckk7cB",
  "key35": "2iQP4AbokbaQ5BwQbqkhciQTgJFUgcbK5sTzBRiyV8mvx3dt4Swt766rZxBbBLd6UUAnHXP6ibtHJSfR7N8jGUDk",
  "key36": "3BTw7YBTjw68pNbBxryMxL2khjKPKRLRSS7tcabYRfpdoZArs34jNZYs9fHCc7ARSpptqjKTFppN4oYGB4g5RjD2",
  "key37": "45RfBVYBB4ksdqpD5SFTeSLEskiEMb7X56L6AdmJ5Va7xKRZfZGjWriYic5aE2sapwZAba5m4m6SiGQPy7FK5Vvh",
  "key38": "3Xe5LtzUxQxYcspC7d9TBZAJ6FafANwuUkfcFq25TvrmLAbczRX2d9a7VsGepAka7W1ybbhs7TWRYwGjHvDsQD5W",
  "key39": "3ERwT1rVw6gBdXcQ7RBC5fZeJnRzKYyrKDBn5a4AHvJzq3MQE4vWNqUnvzghx4ox6xAFXGVqr35EYWd33HBDRUQb",
  "key40": "2vhnGxbuw5UAyzMC99Qmm1HojkfiVFAF8xX1n7eg7vGGAjc1LVe29DZBE1EFdzFRYLRGG1aXvQGGih45ez9KyT7h",
  "key41": "35N5SeJj7qGWCNtdK56ytGTBTeVTiMUWynh3wJ91QgA9nN9mcpnoVJtD8UuunEpgxiy7d6cozG13RwXxEArskj6e",
  "key42": "2jBC7MdsoJaVy9YZjwuAv6jwdBo9fAt5FB197WfBuWNs6WazHtpu7Vk37V6UYku4UY7EHLGrRWVTsttAsNqBaV54",
  "key43": "5ZjfuqqhGixkMvVznZKhbfsPo2cxuUyLfxQhjrhmWHjkxYHhgSPxKguqXuwxwi4XA3HGcbq427PHT7aqbMqEJ2bP",
  "key44": "3wV47Eyd8DHM8yif8YVMSqCNdMXXDYfKgzB61et7SadCdVa71dX2WjN8HsNdqnRk9sH3yMb1W7LomZ1HBZHCzd1m",
  "key45": "4bYT1wxM5iV5V6WQiBujPyajjDBVeYczxwRrtyCM9NaWQr2fTeoZCLRrRz473RnQn8sEP9YpPVwuPFUc26o7s4Xz",
  "key46": "3cXbihme2xyrCpuzMV151iDwg5SVKZWK51qK4BvYNUxLw4j6K2KQxAsArLdLJyyRCkkFwpcaURWrWdHsnMt59xnS",
  "key47": "2iozSsr23BZjNj7TigK7JjtMp79jMR6xNmLoEDS48zCbz1tF655URQSm73TTNYKnSFub3iPsjUGrnbHJh3Xtddfb",
  "key48": "3cWjtxsmdW2Jcspv474VJoXfPHxWxSS2wv8YWwWoWydcMwGMxqSS4YzePsseKEGu2vYvFyssAVbFCnK1G4RGTY5r"
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
