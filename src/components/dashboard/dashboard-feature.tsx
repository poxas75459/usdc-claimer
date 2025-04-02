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
    "338cRDUAzu43oWejU4EQad7ftjYVTpDbVfvwi4qJLkn4RwCqXUGv97Hq6C3s3FXB135gfwDw9tAAYC8HkSYC2nx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h5JRMpxW8MB3vcEuQFDChXJbg3ojHKR87bJGPSH8hjoxwaAFBje2JpitX6dct8hmHNaHpE2KFVpMRMtKJcZRr1f",
  "key1": "4cMV1PZjZopDBNBoTeE7Z6F124BS8sSzXLhuKh4gfn1WUjS8uCQz3kxsgTCXUCx3A9JA8b22Hi2ZeB83m53d9iGV",
  "key2": "4cknR1X88JrGwuJxozx4sceXYDsDQ3ZJDUvSzm4TZ8mCR1wzAdka8frqXwgMMSt1c2cZCcvRg3M1XV6Urofb8qeE",
  "key3": "jEHAGSxKFVcZMcwcnz1a23cgYqQWVqQMLW9o26hnUWFK8K2c2uXaWE6RUQ26FLR6pTsXAf9hNGPiv1BJAg8X8kh",
  "key4": "4fPA1s9zzRBuhY98Nm2StxMHgvxP42V3Hp7E8Zm3SiJ8qKkHuHAqqUDq9ggfHowMHeHkUwUuhjBbDEjZULhwtWRX",
  "key5": "AWRyVowM3yRrCneEu32umPduFyVtMuWpaENoWzkVTi2P18c2NjKPFaFLkhmc1ex4kDNQ6XFc5xoJVny7kKAp6ct",
  "key6": "5dk8157p8cLCahSJ2zMnsNFhhuUcpemHiZXNbCwYoZCFRrGHWfii5hjnz33Sq5FhZY6Z9Aye6GnZsvxA7AJhuLvb",
  "key7": "3DuS287TZKAdPGzV3HHjz8kwZGKYvTzh5Q8yLSAzY8bKkeNmobnZkWTYbph7XovAk6JhdMkyVk3ys6jiodXcEKiv",
  "key8": "4QS1tTzZZc8jRhLKhWbF4nDwBMxNi5weqNSCRkgo3i7CWLMDWoSkx7RmxoBA67UP7URcLWsAd5sg2p3A3BmnjAPS",
  "key9": "433cpziHKygiZvG1VrHUSxxPm8EoXJH7GcM3MVkVUD13LM1QgVm6KMC4CyWqXqM3jpd6tMnKZETNR66jms48DA1S",
  "key10": "bbHGJnABEruRLtyYaE7jcnPGg5BWABuAayxwTNvTHdgehxzdret7PFVaioLV7vxtu8eXsLrKXDarntMo2CNH1fj",
  "key11": "5zXLWcx5bLjaZdNtkntpftMmHDJvWCxrftYt5GCNucNFp713VM37oUHZ21sy1fwCbicdHRXvB98YbGYw1BxDiaky",
  "key12": "36Yiro9GTLMQ1ko3mhHcYKafUYRCnobLbMt1oDukDscXxRsc7a9wc3dLjVZseQuWe6XkLLqcwtTP6P7wTAn69CMf",
  "key13": "2wNZJvqssUEyD7PqjZacH9kknMPktn8FCNLKSJVnqWGYf4gLApV3fPKexG1Wu19TFMN7GhkajEVrqiJs5Q78JAs2",
  "key14": "2Zv4xYJvuf9kuPnsxRodhDzm6TDzREDY7VxQTKvQV1VEwzsjxnpt93AmSRwsCepevPkNBfxLojF31qM79otkShry",
  "key15": "2GsqL2rESDKZWPYG6MiGCseP9DjAWjAF5kuquU1hzCm1qCwSYQ4j3riAK5jK6jL9oN6Xg5Px9uVPkJ5EFUu2r1Ww",
  "key16": "41KsSKoAZJof9VurdfmyGKVJ4BAZRm8KXgEmxsSwPo2xoFkNAT9XFnjjcoA4XDcjL9vnumT2cYizRogM18ErySwW",
  "key17": "3Ts5LSnVQ15bSdMdM7uDgXfXMrMn8JWqNvm9CxThYsfJAwMVUUGcAenZSvzhZ1LmbEshrdFMQcFWQpAa1DSGMvA3",
  "key18": "5PPdbukVnZUZPLK6iQUaAoC3vv4JSrahXznSEBRovL7tM5EDQ6nkceV7fvu3VFBcaEf15mYs5yDfB9sc7MzBwCp",
  "key19": "5Yrw2kZNyKCYtCVq6HdHqHdz83t9XAFfR8TxpCRpcfCQtdwMvwHkuBUV7Ezvz9KiRreJR3f2BUFdUrKN5qnK7EKK",
  "key20": "5UCMbH18SUxYDHeeRi2XzXA6KYqd3Qy71TuiYehLCJwT7wmeQ3NZLt2kMowo98QpXfaNqtLwUKBicSiNBeF85Lp3",
  "key21": "5kGiGUrGnuSbd66PnHgkSmCbtXGzvZRBk9gg8rTEH3hodQbupsRrJ8jMYDy3FTcPuv8ecXyBxKZ5cJqZvx7XgQCm",
  "key22": "4AtassHKuBjnfdiuj9vTH4HTKbiRmnzaT7dW9vdZELgsPLzzvmZmY59wHSRJUUgcH4nTxkGmpgieYrHrrrYokrnn",
  "key23": "33gS5TVHj4rBfpVNhqckamfL7tTvcKRqqqTXjr8vFwffC1iSiRbaW34VGTgyoJJxhdbUrcmmfwdCCWUryJnVEmxX",
  "key24": "3TcnxWvfwpa6Z7YVJ48ZzbxFC3iUzQhPKG9H2w3bmWGV2N7MNdVZHH4G2Z4QdjTkqFTPWa9yZUqfaq5ddNE2k6dz",
  "key25": "4Mh1DR4H3XYsHQPGSw4SiCFnDHhRso7tAyB4TrxLq5mXXtcVKMQXURXaVYmVbY9xxGtnf9MqBEkksxQybChRwheh",
  "key26": "7d4ZTqYkNRnCKGvKqQQkVtf6tWpRKbT6Mw9mbUqctKTFdJySMjgpExYskPwdCWZF6v6oKJjGLKuqGQegjB26wwA",
  "key27": "4j7ugED67txxNYgTL18FVsW5Xo8ZSKYeZpNPaRsd92yGBdQ4rdABoz1Kbk5WV3gahjdJoQfQDJ88JJypdF9pVg9P",
  "key28": "3vtz223aWnhhsr8Z8vEeZoJLroq9ozjVp7bLQ6mxUPz9N2WtNVizYiHs8oQXVKwX1EtUBd7d2dyYmXYAwxS8VUJ9",
  "key29": "24mAReCTgKPbPdunyLRhyeVmVydVpGFCF9dW3AMzvzUxGQLyRssGWCvQq7JfzKHtvmaa88VqakzNdgSbwRMzmPzt",
  "key30": "4K1K3i3AWFCzPSCdRMACk2LcFyieuta1ovMUJW1zR6dRQTiQwn41opYY8iLis4eEcEpUnYYWd3UWNykxmgZ4aoAC",
  "key31": "5Zawar1ecHB1ZaVaSFdG5x9Mmn5R28RTTAbBsxg2QFyYFPkgiUtLNgDGed8CAD15mdKFuEJiG6TXg6VAyuaMnU55"
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
