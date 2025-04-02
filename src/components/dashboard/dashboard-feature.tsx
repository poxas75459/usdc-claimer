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
    "kzAGSgPVvzFF7ADvo7UbXcswh87agEHjY1nvh3pmrmrAva8Gubiyiw6a87CbZKGe4w5QGyUU3YkFCcVK9oQBEmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28tQizhfLmytWLgraHxy1nSDAap8VQqde8ULNqLauYUPXCkkv1AtSQDXamp6EZ757LCBBTWVPTVbhcrQriYqwoec",
  "key1": "yuWyf8NRax3YTA6Gvasi4zfSEBMLvXmmVGUVifE82u5GHEuQYWZwBFNWd5CJeVqpafu53P6Z2b9Nd5YGeVpZRWV",
  "key2": "4wdjFpr5FQRLryh4eh99gWPfJAQXrPwFoELCaFawEPVS3hDeaCjxttzYju1aaopw8LP3htqTr8mEqSV9xBJaWGM1",
  "key3": "2axTmLAqsqZwWr6Pb9jfTGFg7kkaSBonzV9FMZbTY84LiwoRs47rCeHUpZtaV8XuptJn4xz6uqLkQbLmVcCC8x43",
  "key4": "32sm99PVtsE8jyBSqP9nB9vz1nwvnxwHiGNrnzxHdiUBHRoi1AqoxjTCp8EYZFhUhXrTESXjDaM3aFoWdFPh6cuj",
  "key5": "3bGXqumwAtw9otXATMvvQk3H4MEJBgP2kXCQiWADzUgcjL4xVGccEMDb2rXUmextW1uv2XAYnbpns7oMUQJyCowq",
  "key6": "5QHtFRz2cNrmCkcbvPzgu8a46H9VLq2dXHjAjWQnsAg6BGDzAfWxwTunUMY7Kco7ThNzuErp7iUZ19JeQ3dMPYrD",
  "key7": "359YyhWYDpbnRNhhHwabw3EoLE2rffdz69DRsqoeSKS863huNuXbQR28KW53FMbTV1LeChcjCcWskd1mdCV1Jmc9",
  "key8": "2o4ouaPZ8YkhFT4aKoFUpouVcaie1cjMCWuKfoUZ1Yd56izZ6gTRYUQ2Uc9MP5UgkfxfSrpsL4t9MWpZzjvapq4u",
  "key9": "3tiFgaaVvBuKaCEKxv1rCBstQAnEXmzsDkNRvyJLS9YZ2dde7j3LNGHVQsQCuuL8cQXfseDH729XiZp9nHZkd8uN",
  "key10": "3WY3mNivXDbUJ4UiTpxQ5QFQ7cSjSH9rsiqueZAHq6hBiT13ukszit7NoUZPYhtHQDPucoV7NiuyXBFEEAMSVAmw",
  "key11": "5y4NhXu8HxRp2Y41ZtZGNeTcX62o5ECvwh8NGN877xZTzT4b94adV2gZSxc35NbVw6pyam38vfCw2jdut2xPk2Qr",
  "key12": "54SYzsDce1H16VxgSVjc7zPvAxPWGUsUGYHaCwPpq1qFLAXUwW4sQJS8V6TpaBTRt4ZqQvn2uXqpJb1h6EvB13Cx",
  "key13": "5r4mTQK4hPa81eiG2x1J5vwXjtu5fAPnmTo9KzEGbRm4XkJCUno8FKtq4TH31Bysb24LR2SZPXa6zUYUqVU4qW2i",
  "key14": "41xs26Hb99PrB6ntcTR8T7gjVPtpjFVPstXPCo6JUggm7YYWxL2dtvxNFa8oMjaiuKPRGM9UJoBh5uf8iuHMFyvN",
  "key15": "2ipnJyikhQbE4yH7nvFkagxnKLxaJ4LEan2UXQfAwXzvpNggT7uAqa9LDnjSP64XUCqiZdF2CynKAAyGzccEN92f",
  "key16": "3VV1cejqCTyBd1RgzobegiG7gcL12Za3zPDMdRivif35TDQ33gDMu3zWJJsgx1oe9E7KdwC8tYmRyVPqEx3Q4df",
  "key17": "5tPSfgENLQpE5tVDrLEBqYnXqG1vSgjc2MqPaDXydacaoSvyufbD2TfAcnq9VNce8m26GLJ1nct8Gdf9vY7tejyR",
  "key18": "KPYws6k39a3TqivzsWyq55mDAdvZwEXDknWcJomts8tsL1LbTYKCGmyjHDYorCStHhX2s1jPV5BKob1uPFJrzUk",
  "key19": "Ts43UcmGKdJ61pvwJkUz66aNzDd2bmS7Tdt2qyGvvaAfUAHezmiLaWutDMuNqcdjQaLkkon5UwUMYb83o1DPQEF",
  "key20": "2Mv2KEk4vYZWaCDhtiTVJ67MkZ6xBLtHKjkepUuc6bKeGafcHeaari2vF2NmkrLYUChmdQE29Ehy9WFh1EuKqVEG",
  "key21": "TChi755FUVHt2St5NXBrMh1Q2PSqDYBcujZkchmNEmCZrj8Ex5uxQiW9Q9RKLUParFe3GejFp4FNdEfvyHnBoTh",
  "key22": "58okTmDuoneGfGkWDUTQRYuy5Surjxvz7icf13cTR129K9TFQUDiCUfj3PnbPTPLBGg1NMQ6Jcev2hfvQ1sLGUwW",
  "key23": "3rKkmn7LXDbDiNdsCgVNdD5oD8A8JcQrssPgaQYKs2X1qLPaDWCcSYjzNikeA5UQySA4umce5eyuya67EScEa2au",
  "key24": "3JoUMiMxbXB4hdUBD5c1Ya5KQyvuYqxUMMXt4UgH9VP8559WBQ6dhfGQZGUxTH7vVS3UMP5kvGHR7Xx3VJPKCYqY",
  "key25": "56R3XgKA5unDmnSn3F5hW3FjKAwiUnqFrDifkreaTaoSKSbS49VBPcn8pL3Ft6TUxYzQuaSqbvnaKGpNLpupWEkp",
  "key26": "5pYC1k6gbFrh81svSSgbXLBaZHTp66SLkbQFW2NN9326FLeMVkBiFwQAzCV3n9j8matK6w1rJCUqC5k8JvL1znQ4",
  "key27": "eGoeWNfGxDV83Z8o2m4YTxqihKKgpr6efVcuHwt9MFHZZfB3A6PTxa5rFWuScgLRXA8pPW4Bn7hSCouEcv2xjMn",
  "key28": "3GKLut6UCLEwQb3vAGdgzhZhAypVUNRoLJ566mbsP5YbiFQgvFx7EKhVVtkZL5Bdf8LyriNuzxyzH6aw3Vh1xpLr",
  "key29": "5LEgBwALabVdwnbqSoscJbPzPt34ZpXRNMz3YHj68GkA7UE6QjvtL7gJbaRgLvkenPS5BeFFCyRS5TTCKFhfmMuu",
  "key30": "2yWkvXerjigv3WbWfChDnswgcUbu1sahpparBhsfpYaC79gk4Ltmp5udWyxquS6aV7WqyW1MKTzcy7sne8SGiFR1",
  "key31": "pnayzZ2XFybCgovBu4pSgm6vPAd2UY3MG4oZFkpu9kLFPjiywzFbpFyJo5UYBqG1F7xi8JKHXnJtGsgx8sZGzvp",
  "key32": "5c64zjNQiK2LEvT2UnuNt382zTNntDZGmYmCJ52sebvtoXSzmEACRxh3JAmVuPc19Xmx8eAdut7s87ia6fzCCD5a",
  "key33": "4imyM8gXbhk55Lqzseyi8QNnUksyZnMw1U7hLjZwPTcuYw3MYUTnEAeku66r9YBETBTzy3GRnQm16bP2jXPQmGhV",
  "key34": "3b3JYYSJ6kyBkZEmDPS2p3PogHugycFXWuCnqG6D7fn8UeA4bXKewKowzonk5gY3jcbRrzetyM5qaqYrbEyHN6xu",
  "key35": "ZnqEGGDjrnKQgXPW4P98HbCN6sNyt4yGcyNzhUSyc1xC2YGvB4hEdJNoTRvWHE396MPYHJ433LDsk9ZCDKdjLKT",
  "key36": "2LbAunEHoAhrHwYRUSx9JhMEDMErHyi3T3rC6Low1jd4t1nX4bGEmB2m6fs8aV9zNYcnVB7WEKwkwifDBPvmad6C",
  "key37": "2oD7PsnpjjVFhJvoicf3m9BQbBsP6D37YRhRtQBxMXcvCbgbQZYPt484FWFJZFtaE9XbafFqvcyQde88ZpUkrL4s",
  "key38": "3qjkwHPfB4BMd3jRizXXKER8X6t9uynFb2PkGwwqsz8gMc2FvZhq72jZvvZxV8DeoUoRhUAiB21RZCayqVhWi7Yj"
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
