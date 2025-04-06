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
    "2wshkUzXZnaWsDG7A2mWfU5wk2oEZ9qzfZGbda9mUndBMEQ7A3wkS9ZuqtkQex7RtiZzPrUNV6UHQwGGXw7AcXrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZiMmoeMEbUyqGS9Ph6x4VentDfC7XjVu6t8ULSz8nLFA16s1NWejmwNVBmSVsktpHvrEkQjr3jWDj2EKsAtu2pQ",
  "key1": "4xz16WtLxXsAjpj1MZaAyraXuT4UidQouEZwFgEnV7VNgGd1rvrPZR8frHt6UEDbxHTABeeKPZwH371YMsHqdzp6",
  "key2": "4J1NUG84JWKR4VPY7KMwkcpzA4iZv5duAgyGRtJzuYa7Cw1zLcXQFZbgMUvyNJVRkM9TQh5sn3bvmm9Vt4uUyKey",
  "key3": "42nLhLqXDwJwekAQSCKaPUtruodw9rs1xREkjbHSYWVhQdTQPv3bk9L2u3XX3a9KUiDWHK1PxiMZ378WvWMZBxrD",
  "key4": "3dn98rYPBtZjFNdTGCgJcVJdbaPLeJqRNPm7RDCeMf6aUAPDV27pVhx7y6vXtmGXBXd4ntNaa5aLSh6EUYJd47Z9",
  "key5": "4fYr3FmNMYWG2ZSYLjvd5ePvxwxX28rjED4JnTp76ck75B2cGyEnD8QH8FbPgKtNiCNM2AXfumnShB2HwFyP93m5",
  "key6": "5ip33pB9rTrDCVCigjWDn7P2q9bZPS57H65ASckcF3QF4g4P38BTcrBLETRrtmJA1hZrNTDRb1dvqQkwRhNWzNcB",
  "key7": "43RhPJegg39hKCQH4ffXSMYJKZaUvNcEFqtC9LY9KrLTkYqD9yqAxZCaq8UCxGxnkmZrkPe8pySYZctU7BeCJYoD",
  "key8": "3cVCPjSwJZNfQJTC6BRMejogtEq6G93e8LvCjB77aeem62xFfAYDheAWAFMhzXZr8edCkshte6J2TowmuKxHbrNZ",
  "key9": "ehJxrbkaDDVbDQPn56GNgaNTM1NKd25TJVPmkkQCUHa2JYsoKS1MQwsoDtnP2rSpGKCEH9UwmezwtNfctNPGiT2",
  "key10": "4gt3e9Qz5F2HeAW29Sk7N7FPydTypR7C3UNuoTPcVBBszwvSgPE4mEFdHu49CgcYC7uad48Mw7uQFyss7T7cG4xV",
  "key11": "f1b4kTxYMByA7bFC6vgwvxw6aaRy4yP1sarfz5you8jsbe8wfqQonFh6x7VKnEEBRMwcoPEddyiRSBY2cVeF4SA",
  "key12": "4GksP9xNXXyCEu5YhcxUX8pAPxjpbDJYf85BmjECVrWsoGcBxv5cgEdDy34jxczSS33dR2KQR66S3HQTZa5aBPWZ",
  "key13": "3fR5nx6sPwEowqCkWqYvsdt1F19nULPq6k4q7y17DA45YfDbjDnuqzsitir9x3eekhTJrdZphEXhEENo44NqUqdV",
  "key14": "49om5N4kuSQnW74K8sU27uMLt97hrAbSe8WQU8ssbBCMGttVgKpEsmZ5j7YmDMq431tSCcfLSAjmLxXeTJ7y2BnN",
  "key15": "28SYW6x8HWMp7KEsGqNEPatEjfeMA9eULtekC5UmhzaZUirjQBKFjPej5Chz6S3e5azhcMBzmADRw9EtJYz2PiZ8",
  "key16": "4jappcGJ8ytLPJY3ptJW4ChPN5F1HzbdYSrqCEbbNQdjq2uAydvYzEtA2ZTUXU3mj3652wiqN1mpjsZADRiR5dt9",
  "key17": "3XdYUT8STJWg91KGnWKbsHZJunkL9SkBtAapGy1uffAAe8NRJsTetDf2vwJqAz3Yke7YiqKcKkNujdjJvTUGNRza",
  "key18": "8Nozds6VtM2eJDnD9iPNxLejjkaoeAyUxqBLDwF2ny2FTA8kQUioJrVpFpbjZEGwYV4nECKHXKC6mXXQNc864Yi",
  "key19": "2mRaCGMqq2B3mjY83NpYyEvSLqMuWC5UVrytvC2QfFEo2gHVqE7PSivfm79pW2ssCukTFnCCkUers1RbxxNBk1ku",
  "key20": "RuWtGcnLsYQRYa4mk8nh4PgUBaNu4oo8REWezchuA8hLiFJ3qTWYgqqBGfUFP3Grze7s6JagebgFe5qpQ13KakP",
  "key21": "2mA2tgBR7PVjjyf916ZvWGgQVJVHpJLvJuqxvVaKVtmea2CrfJap3Pk3U1beoLUcq4nD8omxK7gNiWTzDQMbxhHB",
  "key22": "2HyUKzPFffJ26pwDGKzrJpgKxRtcvR6qF9hywkVmag8BGuDDyLMqHL9zruzF9KynqK2H7bjUDN2t3Dibvub8r3mC",
  "key23": "5aRhxqCPMhtCALN5QzVCKd1bCKjXauXLp6bXD96LGTJSyd7HCAy4mNw9N9B8uNJCH3NTpE4nsYLkXJQdWwf6UHtD",
  "key24": "5GDT31CCUsZfortxF2pPCYtmhbC3brwU95pDa2VySKmSn2E9HfKixdYLa77Rog5mPB6ZsN4By9qfvXNrPHpUWqps",
  "key25": "2CZRGvR6hLTjn5WXQJYvXn45H6K1vWc9Gi4dFNCVh6YDpEy2Shg3ahMjECVNihN2jk7txhFPEmQkdrVETA1RQd1o",
  "key26": "4BUbpo7NeHdyU1nJjwQN9HtcQDEj1utmSGVWGaFQewWxJosfS6EQ1ARCPBUJPXHo3yqwRERZWjKVSUux8k6c9EXA",
  "key27": "5hMeKWB9znZ5nxv6EUhbejjnL9k9FnKbhp6Sza8amKVDf1sLnnipHnRCzSMmfj8FrktXYJyVpkX1P6b8MEzZ6HwT",
  "key28": "4YsfRDQZ4Q1eGNdBUGFKnT3rwN3G3m8iE3fXLThizwabCF3y6dXi6qMWgfjbnyZ29HSRTyeRecqfGmgAPSG2m7kQ",
  "key29": "2fbpgKgC8FQuFduW8GDSDeQMQdCvzG7jMu7AHcyd3R4DZYBo7869SPpakvGkmjrNRAEzqYHLBtdcrN9wpemJ4ZwA",
  "key30": "4JXAqAbSUNr8J5JhyYCCtHqaGV4sexF54xR9wdZLpdkjNZTjYeKpwwCLuujqgsca4sZQmReW1sRmyxLU7Asf7KUe"
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
