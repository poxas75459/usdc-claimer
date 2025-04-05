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
    "3kw5s1KhGNvSAjyJqddT5KP1pZxXbtjmWBRTTr8WrkHFKsdopPnBjck7n12HrwG8sezba81Vbwa52WwGP6hdbx2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7gFExrYSjjGkqmdTtyfbkAeu9Ho9MwrwiM9MQHEyiaPwTa99qkfQh5EL4eznFvz1kyBQA8rxe2LVdaQG8wzLVzv",
  "key1": "5RzM5VKeXbtqM8gRUKZzXpsciyRcsgcpjyb2RXQW4KKxTVPaSnnjhz6WtFv8qHZD5ECummoyLFHVwKPSCiDHPppK",
  "key2": "5r1FvgSo5Dc1iTBUZ6pLk1nUkn1RNa8fbNqYFkvmRBV4MqA8RbvmW5Q7wTy5HXbDDbJdAPE32YUJY5roae5YpEKj",
  "key3": "5zoJP7fffY4hfjttGbwqeEoV7zVaHG7Z2grFhnb7cLGtPgHaGyn2t17VXwfaY75Midnpy9NvWT14sMBUnrSdGLcJ",
  "key4": "MhJuMH9AaDcJoFFcSQ3yVXVLoZgKcgAE3sp2U2U6zqDrq6PxLBg9uXXF8xrrKPd3TL7pvUD8ZLk4Bg9ues9cQsE",
  "key5": "4SaWxmShiPbqtW7iUHGwWa1ZmvG2Bj7DuToPEFJEtNbUcxjWPG1k51vXSJAcYnxbLxCTu3DC8medzDaFXPERi2Dj",
  "key6": "5vDjTojfhu2zgnaqiQp9KdFc48hE6S8yRSebXu99t7GeBgdzc8fPqkwAqfjQPHghs9gexprGBQd3HSBDuxhKMgmC",
  "key7": "3XzrKWttpG9kYksjNooZvBynsxqnTKAesxy6rFvsSrHFU8u7RPJuEzNzFGUPAoQvtYjuJp96qffP2ioWSGNWaHXP",
  "key8": "5jmAqcyz9VzDb3FZUALms2o6hcsNCqChLNxbRkBBGgvru894Zn6eb3L4uf9xsgSyYrEbidAU78tDqB2urCitxVqn",
  "key9": "61kXzGTgRaAyQutzQh9vbGGA98StgxM41geg8FvquA23dz8Q6gZfP1c2pAPTxNMHgbbHztZzAPXbWFq92qyTUzBk",
  "key10": "4M6fWoE7qiJEZz3u8W5mK9EG7gJAVzU7KZ7Y8b4EtgicWupkmcrfeN3fD1qadUErAfZbUDrQ8zE6J1cQFwT6vuor",
  "key11": "f66uNpJsJdCujnkc5i9iL5gpKQcc1PSxqUoQFY1rCsG6tRqB95MhFzVfKtYtZ3aaTfewrxsSJ7SUFvGgPJQcuB1",
  "key12": "2xmLqGv12HvUK9fjAncwp9LaW5XymVv1Ejk4oe1sFvFFzY7UfF82qAbESG8mp7ZmC5WNF44xrMB5EMbAtYPtRTJe",
  "key13": "CpfEQhjavAjwKS6YexWganxPGXMH8J1NApc7CiaqiNrByNsp2D8m2C5T4jjtgnsZCFZtfdKtgCjRLM7Le6C1GJz",
  "key14": "66Bk93VxeQgenkbqD8AphhDtTMajLnMvRENC2t5x6SYL42oxoiU7qa4gfRo3kAo35KQFLhS1MidfgqPsn5oxm4gS",
  "key15": "JNAJu5yLdzXLJ1E2uAAgGfqx5SZDcErArKbpHY43Wqh4E5wGkNtqzqh9PjUsaCj9v6sYy6yTuXqJZqLi3go4CQY",
  "key16": "47bVN34i6oFQN956fJoQa4YD17z6wfFrCmGx8j5CkyYdEUkoKHLgJpqTuu435FY7rWd9JABTMJ38AXkMbT7q6AGa",
  "key17": "4QvsDw6Mg4hsogNFRXokWjZk9HXsacc9pFfWHEYmiFHms1zobD6EVuhYekxyGrPTNB78kzvrUcaasAoq4cPsugko",
  "key18": "4i3vJpZKba3XxKWjs9VCTRF6ZPLNRfQR4nauhZCK2WYDLUyYh3ZnYcANLyTh3VLGgNHj23EgPENUg6tBJ958vnKQ",
  "key19": "3HvFYEbsS5EoDupQAenEV1pQRsrepiEoFDS1R1tebvS4SbjzdfvS5JBCzUGW1CQJNz5egehe185tF1UnZSjfhnPv",
  "key20": "56nfqbrjL1SMUa2d1gUJNRi44TEKoPrrXmdQQvN9qjdkoTUUFC3wsv4GaXpqRq25GWM4N5eMGVdbBW5Cb7yfi5Ew",
  "key21": "dKAmsJ5Yj3WUzB6zsPqM6qsop2ftKkv7CE8fc1dxCvwGxsK2kdw2nk4a3gwoTACGYzd1nuLvMhcBekCeZPEEBFa",
  "key22": "ujnJtyxZHZ6qwHEdnXdedEPMzBatmVakDvmPQpH8zCWXB9JisC622qJLtw4hrU7rPURiTuLiVAxZ6Jn6fPUzSbW",
  "key23": "5mP33yKnPuRggpBwqUwC9DjyfRqoRrPXvHrehe6CHUCXnibWLUAhZkw1WBFtqtzT1CMn7piAUpk1yi3J39AEpiL8",
  "key24": "4UgKYrBjpYxUjkvSriH5aHSTZ7uE7k8Fjr4ZQ6D4XoxBfG8ZGxcVWB8WNC8AY8bM9SPa3TWJAijsn6291bEsmJhq",
  "key25": "WtPku23eZApde5z8ttV56Ph8fqGDPvB2seR6WGRtHQP4mtkBog5VD4nctxszA2hn9vVpEqfTRPb5AkFQ3pDj3M4",
  "key26": "ppzT9Y3K5rzdBZqqp6nPmLD6DcMAsrnPsG21MgExtmXu8hSBZZ41wWnkX6ZNmT6oDuBBz3tgTCbWr5HpYMsTEh5",
  "key27": "53aHBGcBiBdN2j9TwxwR3Uxm29sthoMeB4MPNmquCDG61M1xFv4vZ3qrcy7Jsij7bzVugJnvXdxX4PdEv5LFXEkz",
  "key28": "5yHmh5Uxy3rVnz5rkvaeb8MB2RTGrtfhrz2oCZbU5piPRBBSK4wSPxMcSPaJh42uZ7NBZq7ZXLJKFsLpmYWvi6x",
  "key29": "48AtqrsdcygTuPWajaXgos7DfM16WCGM4facWgtCee9AJPkx43UpFC6wuzWERWYHkLgSmkGfogWcqq8xZrtRAzrp",
  "key30": "5RnotvUxi5zt5s94xUbF494TowTiH6VpRCxW41p1k98NcxdQs9EgLWRN9zCa9AactjCgUTGdeQc9kSJJss7SLfmk",
  "key31": "4mQ4Bum9BuZYvCgrdv2xfnsa8BtXu31YLjt3qD6LqSEQfGfqfweUaTxtfmsomjMu416chQSuHxk7qVcGwR28WA6L",
  "key32": "5eWUVVJoNijCfEXrDLcqCsjRKTQkkUV75D5TJD1gBZiAuYMrrjGXwqPuKJqawUMYzFDDcXiFZhPbibY6EZjS8K5x",
  "key33": "5hqbfsb798ubLVpNERpmt7xh8g1GA7sYrZZ51vgoEZWHs8Kv9N9pQhqH8eSZZW1myYmNXdv6k8eMLWteadYy41SF",
  "key34": "3nKXrUXc7qrzHgU3PffyUVNHTEyfroftg1rgoB5vb67eqgNJi3XWSVLqToLhUGsKd4i2agMLwSGtZ4UsYF3qqLS6",
  "key35": "2fjmVXVL3V8o7nBnVkoafx1b6PnqFnT6mPKy5q2tPT1GFYpKaRhpkSsd2Quo9DNnf5jiqLZoRDC5i6n4EEU2au6K",
  "key36": "5LZou7An8ZaYLQECBB5iRu35dDcWEUfVbHwdPvVrnoEMQVPpX8Ff3Zf7XNJckRKvYbiDFVfAyhShkTHnNs2ot7Nr",
  "key37": "5mmtyo3meT9Jk8zWibbippiuDsvgwy74QwMMPC7XJzthJ8jU9hwNnVuusEA7qutjgmnuLb6tAHfWw57J8jtPLCrR",
  "key38": "GzfCgfJ7gkPG5tYBdpzFcgBKZJFq31tZLj2xa9SaqsRPeFmmknJPVXdgaz29DNZJVwyQ2mFEpf4zmNKKJyRRwWB",
  "key39": "2Mq6Mw4KaRMiABDR5vfTwuK8XhRs81HStoqApAwWopn7E3KKMhYc4gBAYgCaxMbZkACQLfr5uYgQFvKCoEs4n65A",
  "key40": "5fu1MwS4oL5yGPX3skeVbXyZQGunCLNq4yQjTuqZNrziGSXrrE3zYTEmQiyepoZbWECu2H1KhHyhaMpKCixS1np1",
  "key41": "4GNa18JsxertSA72Y1fUe3KogrqKVZdn5hWuE1pRq2emSd6GJ6hq3vvZhoCSvxgeYAmZPwnF4apSHUeoEkPJmLF4",
  "key42": "fEtYDjBpgAwb1LrueNTqTwfw4vQ5dQHuvfXyxmXkzusAL6yBPmSc4sNvPRRADeY1P9Du5hgjF1DpWG9PcYBFv7e",
  "key43": "5JNYhwN7qKKEWyLzXYK6Z6QiL11W6bUL8dy2eiLqKukvFKQiVTqfM8Sd2j3ZeArmWVGESS8KdCRv3Nqo4szhNhnf",
  "key44": "5Kn58TWnLNxZ8PbSgAZZLHVYApirQiw3DhteqJ6Ys6TSMZe1aexQN6DwzLY86YgV7hL6CeHndfggZhR3jE47t65G",
  "key45": "mG3zdjaAFEm9GpqGc2EVxCEGscUFBaujxqtTUV2MwKJFzEM2VQVxe2wxCLm5Mqk3bjhXNzta3SmZVernKa8c4eg",
  "key46": "5KbRbPyvKKdcYStMm7h8zm3hcJ6AECp377khLAzhmt1q6vNWeTMSAGUimUJrQt7d59qqfp4cgHUow5fTAyNhYsCK",
  "key47": "mYpwN8jNQm7bPmLKmUENFRsTBsDoqDpDGvs82YoiigoKuvtnuCFGgWpYCT5M36krG7PkZzBW89q9d8j7JGV25yP"
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
