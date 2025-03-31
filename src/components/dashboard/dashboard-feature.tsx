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
    "UebZECkedRCELodDh5JCyqr5gc8f15sbX4VoLCTvv6Ssp3imaurpQiPyYVmLvM39if1k8nq34NnjuEZnYVHWXjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JCPNT9Lpd6Lbbxqq68jzqvcCpy1LFi9zhTR8udDbrbodeFDaSPLppYxnRvnCr9ob8u8yDgwJkwjN56KCC5ssKRC",
  "key1": "3HWmTVoskU8qwpMB2fXnD6P6Lhyac7zGw4cNHXhAJ27h3oyS8f6SEkQsw9vHvRVpkcsYQedogcVXR1JDwSykmYBF",
  "key2": "2phKDzXqXd6oCG1YMg3QskEJWmJSSexNPXy3DC59Ds72EWAtNPXMU68npkQqerkEWwBQFqkCdaZ3HU7PyWmMuqF9",
  "key3": "2sbEWweUuUX1ZCZLpcvJbWXbSAZiWBVRr1x1BQvMqdLm2RfgBvFx5x5FJLjzteRKsHWSyJRTeYjGbDEQ1ZV4L33k",
  "key4": "28hRFXjtgusB71XjSMwrgHjkiLZstkTUr11YGfy1x8AR6NadY5sHUwaxGfAkTn3tHVSKj2rUMesCeqvm4mBVETv8",
  "key5": "mwN8gD51J8fFyybMYNJD1H71zbc81nt1GFLT1o1QW2X47TQwXRX5fPxXs7waV7pArCyKi779U5xKRZ4Xt6bfpjU",
  "key6": "3MN24UhJ5sPwW2LBgxFhdSHjUSrtT3UjPQue3VHNH5rAA9mK3gjNbQAh6PDetCYSCpfquCN8M4LPAYrYX1uQ8eCx",
  "key7": "5xawqex87tJ5VvKRTp8brGJhD4HrTG37vYF5iHwHTGP7rQRADSRRGgKKY19rr9nNkjbE79dYNjsbQUea62BKzZfW",
  "key8": "5H1ZLMnaxH3pw1Zp3fyMZfdpE2MzdfnGz7KZVSFD8bLZcBR7QSKr66oigtjSSvpYKWraiMW1aqrbUXc7Mrh3zacH",
  "key9": "2XNQTKo1b34zZeDESMr7qaSo5Ce3XgSQMfxYvvqV8XidLoZgYFmrtzNiuE5DVBCa45CRz6mkAB6AFdneFZMtmgjn",
  "key10": "L2ivfDMLvSK9yVDVkVSxd3endeTDzTFojbfb6nqA4hSkcK5hA5tgM1yJrQwtgsDnjGMxJcsKEeActwosVTDPDHw",
  "key11": "iayPVex3qFCcG5XxBChx4cF7Gh82CjDG4CejEvZDBjvFsTJZePJoMW2YqbUEcyXuTPbxEab7mcS6zQRxrgbq21S",
  "key12": "4iu69uX6jrEoPh3LV5CU7CYd8uJGZiFtqch7kRvwvSHrLiMRydrDXUuLMFWH8FWTDuquytajr1jcQz3hVPjTQtB1",
  "key13": "V5gAkwjpFgx8WkYtx8bvGuytHJaXp5AccRnvJwCLi6UKsvZr3JXVA2yoZVoRFp3RjEi6CxsiStNGELKMoyLmYhq",
  "key14": "49TNR64Qv2JCAfL2P6ptVTz6ontpLdjjyVRrHjrNi2RgjWdMd7Vz4W1qfPNGQaHeoRYeAhLjz72SJ5dKLNsbfB96",
  "key15": "3xwxqL3Yt39wMh7XqvDKCGV6ct6UL9ugog9Wifm4xQWGB2oX2Acb8pfmrFcfpQxzKr3HdBgETZzbgebnwYc34CEi",
  "key16": "4t9CFQqpLM5bPkWDCySbmWrfbVti4DM1XUKDfVW35pVxinFWjigdrBMDJ5FR3sNMKsN6fpKgN7b8pgnRhJvYRVEe",
  "key17": "4FB4NB9G6xgRfacYvxzNJzbWedy7xoLeDf2sknrEqDEYMmukaVbbQ5M7AjRUjzbSgQ2vdwJJtfZCQ5uMSHA1bgAB",
  "key18": "53gxbxTMwMeNzQs5c2nXnwZKUo65PeSayRF92QNXZaLFkPYtpB1ZRR9tU2dYPhE58cZWjsS5EK4SWScY41v7nqt",
  "key19": "3mDnaV3uMUa7dyb3vAHK1DNBcwcdKJi4nP4beMvV2Nugfs5BDSh3c4fFQQGvZ9vCzyjE7ZPJy5kkfqFre5zd7Bhb",
  "key20": "3siWEEaa7FmC55PJGEB7y1as3gpHvPxFffiu3bnFFyE16ZXiUqRue2zdgLRMy8sgqvLxBfKJeBfmJmjGTBtgyChJ",
  "key21": "4mukmohhVeGHHCd6ALRzAAbyWnCN9GNt6dciX2hf8BFmBwx4eTskdxf9Kr62b4BWcqJ3Ld9ZRHb73iGfDtrz7CoX",
  "key22": "2gKFGc2uWH4CAdu272trTrCGxVDZTHzt16WNmwWS2EE2h99sZCF94SWLZ1Po1udxCJSmToBHc7znJLUjc4o8DZtX",
  "key23": "2wmVavAUHNn5o5qWbpRnhSEehTVAKwb6FkyTt5eryb7iTeaxBGL2FL22nsRaf16xkvZZiXmuFsogTU41byKZtvkf",
  "key24": "4C5LCYuq6z88V7vsxDGSpYPAYimURkpUiooNn9e5ZuYFoZQE8P9W3ekzMcWw4G7eDVWXeUNwFRaj1vYHBH5Sg8Yg",
  "key25": "4QHQjThxZXpSv59ttXBPx7FvKS3YoHs46yY2ua5F7PtBfLHm2qXQ13dbbBFHvRKn3x3Txf92W3spVZq5L9V2K7uS",
  "key26": "45hT6umkNMkpeYnNQgxuXZcXsQEj9rwsYZCpCWgP9XGTaUjEhHJh9GwxHzytZ3VAX1uAwjpZ6Czd6vcMK9oHei3W",
  "key27": "3EigcZD9D4w1GvTkNCyfVGT4gcVDBwqX5QTfbRRxgGrPPPz8MwqMaZs5AHC22ZwoPMA1LBgZFHCBsJn2g2PqE5vK",
  "key28": "4eV7WzeCiHEd22pUPxzpV8SNd6EYJbMSnaxHrbEErY4Qs9A5f2vX7dpijXCvbrqNbpscSRWY2TPgth5WeMVmnYjT",
  "key29": "5y6oPUZNZLkTiYBWQxyyskFTcijVsHaECw2QenenXQ3Fkm2UvXBRYJCsCCF3cf6RBsrCY7hy3F9kXNSuyFMhJF5L",
  "key30": "5wtQuEUdQvjWsRESa84ALHXKBYj1VgAXGmuq2n4Kt6JcnCUm8ZuNa58uuCJF4riBcj1npX8P3TSQexU19owtGpsk",
  "key31": "2GznuuE7BVLHPnkktppgS64G4EjFAPNCvy9P2sanxTSuBsWc1nZc6NneDoHZoJib9fpiiggPnrSKGy5B87pGSuYu",
  "key32": "4SfYW4vSX3PE1Kj3TbE9KJXqr8gogmmRL1d8A63ya262QbVmxVDJwywQVMaBvUp2ZesxduLtqxqLEzM7JqZwdedv",
  "key33": "3qvYdhp7bjvc6FVdmXDm5KcRXxBiw7AR7cRnVemncvVsECKH1VbG76EezcbosBQCALREEjrrKWGx3NiCPBXrXp8d",
  "key34": "o63gsyPJ3bf2i2nnJU1Mt4p7TMkJtGnoApDYmpGUsmto6KsymofYZSNzcjdZwUh7VSri9oJfSaRYXTuA3Jt2hUx",
  "key35": "3ptAutjfemW4jvig359j61iKxwUGu1S8PaLsgraC9MjFKi18X74S5CCJ3ZdbwJKBGvxvZJbREL9uMFFvqFBc7Gjg",
  "key36": "2J1tLyXa9vvGr9WBtkaXtEYHtjaC5vr1VhtwfPNbEYtguEmopamEkSFYtEfNiTmANRExzgkp3QZcLfs3zG6kExGZ",
  "key37": "4m5yh6ewZZCD7HMi5bZmbdQFQDJwGWk31QTT8dpeLKBqZbDLr3ybHyyf9VuVnTvtrMBLuAeiPgjLuiDzZJePQKFF",
  "key38": "4S1feobJbrWTi6LvaU6gdQQw5Th2GniHvUfNXQcSbfxRNDJets7MSYmtCHHkcGTMjTPZFCKRjL6uTc4HtfH9SZt9",
  "key39": "3dFAjNeFmC7DcJABTYTVfkW6AEzqHgj5asYiGFYqCE1kaVBb5hw1VByvAthv6X5yaD38UsN3kjtYoMvhqQCGSXer",
  "key40": "3YexvuvVXn2Vk4xR9fGkwexMV3QPXwMbvWGtKkXQr7XAczHEHsu1LpoTXB1NCZGxjZ9bw65fRxrqJVjnMvCNpgCF",
  "key41": "3F4VT2joBBVhKkmKK67RsDXLK6dd8xutg7MRemiu4T7TBz8q9SxC68UH4RYGzLUsHzUFp2QzwAb8VwpG5ysjDE9k"
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
