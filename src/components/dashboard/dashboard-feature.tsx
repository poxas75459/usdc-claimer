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
    "NqZmt2VpfWVrzk7kL6U7T2C4UYHRFws3YgeFkpeaLJ6QyaWSiDGF5LsGFxf4Ro1rp7ETaC7q8y471MqJuWAovtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MUcM1Gjbdzw4LJjstoRPDCYbZAZLaax18nnPUtdQk9HGWQek49VJuxnjZWFS6HV4D9qNL8BCj7dmtEK3qtWBVpu",
  "key1": "5sRjyMAx7G66D6rVc5zuGFRbD6xrnZRdbxnSHMLgdJtiuSDt297rDw4rj7P1UH5dnckGgT3X3K9B5rXyzd41RgXo",
  "key2": "4AFJSXggjuMEhV7BccXqSmZFkLz9gQGZteX6rhNzArmNtfPp3wchA2X6y4sGytNwU8GknZ46iNQLWXfSizZP5MXv",
  "key3": "5o4BYKvyiq2GS3C8PGCYAqQyuggu4WkDKAvf6UwRdUEkbGHSKgZHRs7BjhszptaRYUaV1FsBdHPHe279mhi8EzPa",
  "key4": "27XK8riAarJH5F5xhcgQefz1ZDsUZDrmqkTrcG3ywFfPrsUTU5s7kdifmmQSx6JtkQz7psAwnJ4zHmBfNirBZa6s",
  "key5": "jbAgL7U56f2rGqzJDHUNRA5CAtZPz4hhLSsekGdxhNYtvQ3fvJfVqwbpgRd88pGFxZj4psANhUEJhuLvR7qY4q6",
  "key6": "hBxmEkKdA5VpZE2cnisbF4tPeUGy7h4sQAgjCWw8fw1TiSGcfmDdWCQeEYcANb7tH32Wq25tZnj28RJ1xJkfNuY",
  "key7": "5HZ9EPdh5jCLYeEmg8YN1u3BtBrGHJMgQ8B4mP1N4DYeWF4GmqR3uYnWHCmExczeWHqMGa5XwekMza4uozE9nEoP",
  "key8": "4PVrW4hxrvabNhHSHGUBJgTRcWK4vA1ChQyJbxVyjyUrDnnfEkFKWhjgrYjsJ4nJhB37RG8mk6bSs27skAHPHRsa",
  "key9": "QPU6ioyxRKPQV93ByN1bbURPgm8AxwgdM4jpgF3GJSLSbUhDVjyrMZayXYPqCnFHfqfD4cTgEtowv1CVZGzky4R",
  "key10": "2Xxhau7UfvneCwVY9U4x97nxDnNKhARpwwLtzFSniKwGF9SHmoXWmGAnJ4LghpBJiTs994CvMLKVhS3SU7LiMcmG",
  "key11": "48taLW572x7N3HWba8PpHiEosbZTGNJajs3B3uqZhshf5wU1cgj8htPeeh59M6Y9yeUPYTuVf8givK3jrPqjtpQV",
  "key12": "44KrCJcuohzV396pY2EBRzNnQ5YNEgj2vaSzWxNKF7vxjTXfifWfLfQQoVMLhsdD9pcmKNWJkTv9mQgEn5HvtUow",
  "key13": "4VQikmvUzZz7sYztiXW23PEEDBD75X5xFBjwbPS8uZUb8fKEbZBgCUbNhBuPQuGMeTG7w8dMBaQx1roDZCWsAyGS",
  "key14": "2sVmVoZRpYFzfJTqx6RUWTKkZVHU9q7TQsWHTqySUdZ1rjQnaDqqqsbzsjc7q78LoTnzfCt5iC1MfMbjFMbW9Ntm",
  "key15": "3fWYnV5oSpPh3LrTrJa2qiP69HVPDUZSFtESuUDhX9XA3QAAPgQKMLgWL8nmvX7cNnF7tHWCZGvaCRrpM9ZaGkHX",
  "key16": "3KHNRaB1gjhnAYcgf6Q66Ao7599mfzFvdfwW2fG6dqcuTn6BV3dJHsxvymxvH5bNnKLAPzsks5M7jnYLW9Vk39JR",
  "key17": "2YEMEwXU8kFKYmcnaEo4DhHvRctXVdwvadRoK3R6ehG8ZfWXvfGXNHmduXbxADhZR31LXGFWHu4PAWfiQFGzuYWL",
  "key18": "dF13xB8BPfMJvUy2BzxqRxfD6QsnABmuetvboQhtaYvhArSrHWzRoQU7FbQaah35cfrMq2txLfVhBSPTAiwgCEU",
  "key19": "3SCKs298xE3ax4GPqogSHyKKEoc9XLwwWcPyNnYnVAm5MHZsqU3XWcGiDzEBzAWLNsxb8MhDjwr5CVRY8h8M8Kv3",
  "key20": "4KY5oEhRJEjVtM1vh9WEH3APrqPTKvgwwBVKRTVNBNWchzamSth4urEwyMDd2RyhxN97Ja8yb62xHbZytbENJuBa",
  "key21": "SDwjUxmJxHskTH6dJGGpRid2XKTWR9EYcbeH1pQh3mT48FuhfGuTTbyPzChZQc3kpEYLDU9bWfH8nkFoyJjNfKh",
  "key22": "613HBLr3eZV94NvKspeQfbojuiQYdwEHxpwp3xNuEfCDygjwGoarCzLEw2xkde1bTbb2dpXbz3M83aMhiJDQqiRa",
  "key23": "3BDzKov1Q97m1DaR3YA7PyGpLooEZCVtXon5dCFKyAMysABN6mnp8t5eU7ybjAuYDsRznQSELENPj6vC6QNDWPeM",
  "key24": "Aj3mJS18SoUjvDEWcRXsNGacqYFJefgiMMjVxfH6vkkoWDPgSjj7Qj3Su2KJWvTPWS59NYyZZq37iiogHiVkKot",
  "key25": "2zJagfit1SSWJ34f1haEGRjvCknzaTvPqVpuiqYTZCtwqCc6BZtUGBFFD7CiEUvMnxVsVXHNx1bPWjJ63EyRdScR",
  "key26": "9KhEPSxJWs25jnzm5FspwSmFoccHZTS1xAnZXzRcLfQasgQGzgSC1AaqE4YZAaXkKCPnTDDWgNYT41GowkFpPu9",
  "key27": "3WYxcXrH572BDcRq8gtyhv5h5hZgQ3E4gMghcCSEp7av9RP1Zks5bfgn1SmJSLzvKnHgifdmv1fSh8G3KvB3rajv",
  "key28": "3trp1eEyZDuhvpzkcMGf6WQ8Rce1ZB15UVcwvv3f6P65RGCfNaErbGHG9mf6yPVVQp2S6Yhyr6Rxz5DvxokohxD9",
  "key29": "3PPioE98hUfViYtDHmAA27kxYU75Z7LbaYpypkRU6Y1GAwB1rxNwFyQLX4F5NhfCWy883wCDEyB5DU9TyUuTjbPR",
  "key30": "13zbGR1S7X16FRoAHraKZS7uQoBbVRFg9JUcanrhPcBAF7QjPweLr7MmgDKFsRfM3HNx1rXiyYXRGws9K9tJuPH",
  "key31": "2YYMoEtHKfkFyVrmMoWvALi4vPhHF7VuPcuNKjHtXynggJsepdEvVyWpz7v7QNkKx9XNZkXvXaEHVtQYn7o7eaLC",
  "key32": "3f1YRVmVpAXbsk5DYzVC7p1deu1swUUB5c12sfsa4csffb8zQXoCTLH4EEM5SRVZJB4psd46cdFPUAAFLgLCUpQH",
  "key33": "5npkXfgz58N67g9UCCzk74FQxhvqRkSfyK3Tfy89j9D21APSW3xivUaETgwo6uBYmA63AXEAn6dWMecs6U1jrqPP",
  "key34": "35yCFWnSXcEu7CetBNGGT6g16x45TxjMBSFcb2vB77wP2ZxM9xTA6HGPbg5SCwFVQGMHgfD6WTUSMnwtQhvVU7iZ",
  "key35": "4v9YupX6rt9eLdi8xaadsiBJ6uPuRABLhxSuy7V7DiGFNN8FywwKoAvgBPEXN39mjn63aVUQWZjN3W3oiENbc6JZ",
  "key36": "21YZrCoi4M9XzjwXcXshQsTSFgjeYrMLChxNaSwVJturqMK6P5wh28gc7AZiZceSwumJZSrfbjUV8jLGuxKYf9JH",
  "key37": "3zYTEFYb52N3QiWMRWEn6edtbdnVKQnvUiGHpik2CFf5oyYFAkfcwvedeQxUcdZwFB2RoaujfXqND1BUtxZvhDBs",
  "key38": "3iefJEgR7gx3pCTTCqVJ6LVWciVpygongdxU37LT32NbJPFTjews5xwSjA8ysMmz4ucNU5nxsqSkbPKUZ5t7wtaW",
  "key39": "2FwvrEEKxCreXoBebtsamUbm3WvfEnyWooTioCTPKZd1yfzaX6RbcTMQpWYakms7mGFqK2Go6DRsJ67nx8K9NXdc",
  "key40": "3rSqN8bb3xyttZSjScFxopgTAw8E1pPW9Sas1W4jfjN8oKXiEN3WoM1WEhCTUuxKQLkUvNLpj6npti9naQTVigpN"
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
