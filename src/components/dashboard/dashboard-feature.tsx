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
    "2F76GZKExtj2Qy9pzFa4MW1hqfMYy4UXc36cfnj1KFs6hbK43xejbexFCoCufH96eQuK9jo1t62AagwnMk4iJGxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xiGx3BzPSo3Jt7s8JHcykZzWDbxSHJhbzVG235vCxqcqYwGtzcnfnv1we7TMTRx92itpiXNpf7s7X3HBDDozc7a",
  "key1": "3J7KJ2r1KNuE13r7S7i97Wtr8KYxbaWK3cJyn8E7Mb7bboPhzkeN1FMrxBqFd5fMjvsXzp6z22rLgwq8KAhQLwvD",
  "key2": "QRgJmdMR3t3sVLFz59Q4qNJJCeLVNYMk33WEh9pKc1ijpvr27GgQ4ez1sjYN5zQPhRrRbKyMHzCaSewxNwNpp2j",
  "key3": "2Nc4PKhpibk52UivMt1MTgioVmqj7ztYRSWLZC1bvNbuHhK8wNn79teuLyGs5TMjPvJxuvAY1bp1DcfLwSKXXxMH",
  "key4": "27NXmo1yb26K7EBFrZqeuic6Nqzan5xxVQxzCMy4qbrWAEaBRko2RbKQQTXRfNWvZ8jYZpDo9nwmPuV5NoGQFNRh",
  "key5": "56T7kbsrprVskhQT1e2w7NcR5jkJWPSnEGCp1L4hKkGtTvTd7ssYdZcXtQnUqJHNskBJgsBc7ypNvq15KYQoKPpV",
  "key6": "TiQdgKSnjdmn8RQX5byaxHy4vcT1HjiDHGWZYojEUYrgytgFZ19Ly3kwXbAH6cyfPwmXTkZnGnofRyt618zv2W7",
  "key7": "2Xry5tRQvUuALLMZRkSzGuogVBdxz9PH7Zh9sodKhuiZcfPFpyY4ssGpKXSy9rCXvGtPg79Bm33nutpbLNRcfA8G",
  "key8": "5n3hJSrAirarWEAyBFrhxETgV2kfjZJJRR6heF39sjacLyxeELqLrbAisH9jRJs38NVFUrXPixHFQufjNVjpE4co",
  "key9": "3guPYnUBa2YvDh2bRZBQa6Ca2dBMgoZnFrA9RdEMtTRejL7eyByGRxtbwNXLbpUC5aT5CLTvenSXtMowjpMnbpHe",
  "key10": "aKuKc8vNfC6CGUUEYDgVf5aLe1UHPAiFfcnLjJw2uqpkA2k2GgCgqJnyKSxunhbA1jSSK1SPEdHaEM1KASLojvR",
  "key11": "4KZbL4GkvpZA1NvdbuLtw4KKxbJgGo56F87z12i49gCa5mMAhHk4yFnvNnTPpRQyNJLkJvCnLEabP5j9pu9iBCTX",
  "key12": "5o5zCXAyewiM6uebN5UyjNDkMKUPUZXt7RJnGLGQbWuuh6tEW95wpRhjaR8nPjioTyxryZfaKdS4inopVZqKYdj3",
  "key13": "5y7J9YGDtVZhRM6n8nRFC8B2eWqnddH9ucDkxjbQZvQbADawVZW53Tvt6D1gpVCcSkRnBQL3aZYBX4UnVnkkbUVF",
  "key14": "TNpxdbpxwJYXMGFM6CewoF9gr6Xjfj1nB7CpaP95aEX53QkgJVtMVNa3Ee37tsY5hjhLWTz5EDe2kMgNh28jE5a",
  "key15": "2Spxg8fU9ox7MnudhqrZJhFa9d5Qk5Qshh74jvWEXmf6ifcxGFHEvnqUt4R1CWgWSUbm31p9k5eVgyBuQi8EfpDW",
  "key16": "39eYymEpWwwdxAMK4ikjVHbfD6PRtFTcQwX4auwXkfNTrfYoGhzXSJ77BBvUw86tzwP3JRwJDABJqJFrJJVZZPej",
  "key17": "FTjsYvr5Nsq5qbpxMXrCLSWkkGcWLRsUZuMaxteH9YZESs65gcjPS47anvook9zy7k8Zo9om2cHGuK8MeAzrZ9K",
  "key18": "4R3mGsjBUKrWGaUKL8gWLDSY3YGUbHwmvN7yL6SDQQphaMXK7jsnwcSZCECosBYpaUwbWXVfyGX4VqWyfA2MG5VP",
  "key19": "2qXTFG9UsmBYzHcADKAgEVqcjMysb1A1Vwprb1iogrwtRTfb3L7zNi9hc3bQD4fz3Hp2rMDkirmuc4WD7WdADV1p",
  "key20": "YXrw3m35rcuWZTSb8yoGAuMYLzSwbs9uAESsKpMgqMPmB1o1uTjk7aRWVGUHXpMTXHSY7QjWuZM4fbKHDqSK9mm",
  "key21": "mPGNSVx7HteJCdhdK7uMVzwGwhzhG8vtL99zz2hNGrQsuQn9emJ7G9RX7Ur55j1EAy11Z6friGySGCe3ktDqpra",
  "key22": "45NBfz9p9AueJq2NyE1tRqap39zF76KFyk9wbENQ56eGognCxazDnNG4hANGnUhpCmDDJV7xjoWqdjNwwQyZ76PA",
  "key23": "3JJ2untwLutMwACU9ndGSBcMn1CtS1jkUYqe6TG5SDvLomgBhrvdTcuNgdv36gZzz9mCmaiquxLAtZ83VGFihVgK",
  "key24": "4vHUvEF1iWsv3dcgfnpNp19Xts392tmFFVV4aTUxVX5b2NzauDFXxCYFF6tFRTYnyYWFGLbzkPUQfiodSoTQsL4U",
  "key25": "34XMy2ApAvo92F7BKVgEEZi8L6yvxoMZ2CmvtFZq81nSwmtSVr65cyJMJEB2padPYv8zo3cs72SqKJxatFKjdjny",
  "key26": "2jmE6gZeRyiDXevnPxx7Yo6oq69Dh9W71Uk5ZuUiNgiAL7MZcgVCbXr5oHyLHgDPU7sEnzJehURJ6GRQ17XWnyvt"
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
