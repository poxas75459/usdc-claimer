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
    "3cgKagfHAYzsAWrGpAh1GKAmBJWcoXhA8LcsfuUDo2uscAFA97sBECR12zhiZydvhrepk65b1FKSGSFTbTjNFbvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n1y8yQEFks4RM7vBwaP5ypqwm3eYoEqzzFbik9YybVbXEVWTuk9HBC7H1pN4WdHNjwdHKW3X5WBScMSD8VzqXdq",
  "key1": "3MeXHXa58w516K1QEGB1J761GZr4ZAZVZ7HmcxC2vbiADGzDgQ8hsZQKg8haEFK59xksxGoz1H9TKtu9TbntWtwE",
  "key2": "34hA7JozVpZu6BJyWghQX5Qa36vowVmkpznocnRUt2gLdup7SeJkjVmFoJH96DmbmZaKUNneqrKwbQp1FZFBCJWu",
  "key3": "2FEjN9pZhcBYnudRs4mPG6h99vJxM3bPdcmthVmmE6Y5uUs5dzi5mn33rrE58Sr1L5eKcEYGgzNAtRXHA4gF2w1X",
  "key4": "c2fXki5VQhWhbWkmRKNKg7WbjUwZ77sNjLW32hhcR4xqyoCR94kKHaQrTxCX88kTdgV9MF2KNyQy1Ts3QexR29b",
  "key5": "5qYiJxoYYwtEWVu6caijK2tesHPE48h26GLs9S4FLroez1FxC6MZNcCeGVnY5UfEqivjjc7zD8T7fioNBsLY5n8F",
  "key6": "2TGNAynHcSaRdmTUugyeXega1Yn9pq3N6Q4D8akTW3AmmB6RGFRgVCdcuoSdA9WtGh6bJdtn55XwHhYvwrAXAq3o",
  "key7": "4JUd3FoAfzJ35w5o5gNChtDbYqbYrNsz5bexkck7JzGpuNTwRqVTDQdxTQHFXPLkjDtn3V5dsPM2SL5t4VxsM8Ns",
  "key8": "3wN15qThDKx2byTHCfgaDQkvz5k9e9GdFrbSZn75Xx12QCETAYsBdQ725ULFa1FPXDo1sMKJ7Pwf9E7jLp5XAknZ",
  "key9": "2QWMgyt6DaQBtmpiDUQKy45JzVRy8k6YjSJSHxKHXGbtmCokapj1KcNiWz76qphKdwJVyPAKsr1DCzci2mTczSyi",
  "key10": "5tk7uqpvce3wfMRLFLqHaJcwACsVXNtLdWVJm1rTbDNAgSgY7wbAR1Nohob9CT4vTWEVfqB8jrb6FGQnU9mdfKHr",
  "key11": "4xJaibsNjhAHyL2ePZDtYqM18Fa5DnKom7gdfawB9DvVj5ZELNWWZZbhcDh7H41R3q8aw3yzFVqp5YFD1Mtpwiy2",
  "key12": "5ZCy9wNV9EcF3gxL9sYd895DHjYJjShf4DxEFsXPNEZi54bCYHFBjNKcBg4uESrZJJxX575Y5nhSNAK4xBgH5bUB",
  "key13": "4PNhwXjAcRC2YuSeQ1XAhW4PQvJf3Y1LBxZM3JeRzcLu6xu78BFWgnvknJGdPebTFqTwKqBm3pXzzsB4tRY5v5qw",
  "key14": "3EdTxxQajQ8yp2TkRKi5pUpnRGqfmXcF211mjzqh7o2se2C38UeWAhVHA5j3QDSyAZJpbngV7T2YB6kXZF6iXxqt",
  "key15": "44dMEaqTAGoaQ1y3FEpBb4XRgb999CUMqnNejs3UXk7BgxPu75iNGxnmoiunTdLt61rnYA7pjfvgkW3t536SCYrg",
  "key16": "2TwAsAnX5iS7i1GKHLihhcLq5oCkxVbK2TohHcX7oQEZZnQQZUKxh16nTY28zBLyFFdNV9y7ydgTEH4TrsjXFQpg",
  "key17": "3JQeLC6cHVNZMkUgcZnieAmTuZZw7Jxv9JhpnRaUUBxKE1MCuq5v8VyS3rVANLRjriGs91gBpqwwjWm4zHm7Byur",
  "key18": "5rHTE2gupku6QqnhX7hs9v4RkBCpJpvXJmop8N7DXiPLspGcGgcgg3YcWYSKhd7XFn16QGtMoXuCmoEgMEc4TrnB",
  "key19": "5ZzYmeEoJyduysZj9115vtUNp4e2oQjwmM683pWNrxHp4QHPjKdiG1bv2QSr5wCeiwZ9E1wAfJ5H6JJLKWFZPnyK",
  "key20": "5t3yiMwE6x2cXT8qbvU2eWVwHSH9yjT74uMTmcr7ueJ5H85MMxHoLQ7vkzg54ZCi9Q44VdBexMKFmqic4irsqLXf",
  "key21": "5PBmBESNWHGgZHGQj3RGwQSHho14kpNnMgm2LDW1b4iuKaBo74Xd7mTqE5zzJ4yymar81hMbEFA5niGdMpyB7DKm",
  "key22": "rfo7xa6KGXUCZoXhLrQ79aDyyaYGciPndTrDdwX978TGfu7hHiWDh1ytB4xfmFvr1TxFTrRGxFPvdDTpidQ3hpD",
  "key23": "4GCh1D6JQsV85YAaxSDZF6ju76R1KtdrtLAtCHnXDXwpyyBuV4eJy6tU447zPdduJu75EFnXpLWnRCRiUd7nzfWV",
  "key24": "QEZhdU7VPWLmp6VXPUhB5d8GAgBcJiBWCqPFSZtxThd9CcbivFzTQZUULhavgYYFWCHkFh8zy3EwHcmWHwzVU18",
  "key25": "Jqqz2iCZQCamnN3w13i9oLuGno4UWU9G9D3QTDPmS4gY9yVgcVx5JNKCPRRDS82BYrpX77vFWFSAqnMypFmC2er",
  "key26": "2TiZCzSb8L1fHicpaTqu4Gkf1uMVL2pfLwwm8kzXad2P1zT1ELbuu3okZZ7RJuEPrympmXo9US3QnQtxb91XTftG",
  "key27": "EAGi5GziHCjwNk7fP7mfjQihBaeVcf9AqVhPQPN55mdkx4N1586RfHAemmh4vreviTJwTH1iuKGBoeCw5UamhQA",
  "key28": "3HZKrF2fCzY9AiqWTWoqTKpwX2syYvZSswSFtS7SXhWbkwk9QzFxbUMFNe3pvVqqH8g514SKH4PoYCCJDZRD9cbE",
  "key29": "3QRNgH4xr19BioBN1axgK37C2fjKrobR4DWYwxYTUkEhXExM4XUk21GJa2kzEDedBLHN1e9aqL7Eboc5LXfCgXsp"
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
