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
    "2UzvRjqBrxR1dJe228kvUy2KfL9Q53d2V8YSzZvg5XGTAUVskgz21inpEjGf86iGi7jKH9hG5wYG2wjTdxLvZYfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yLidJrxavRbidcKfBA7sZE5ESENqSbwADZ3bjgWAuAe6bfDBo2YU799ozinC9aKQfB8bJKAnaxNWa6EtrkEJFDR",
  "key1": "63LgDDZpcN1tdFbChWBSqJcQgtsDX6XGKmqQKvhMJgy6DnsREbfaLcBuGgARQi2UsAk1FxFJgA1hYFaKRKf5o8Mq",
  "key2": "5nbQx9H3qEd2VmAqTE2xYvzYVyeg8jKC9GPgMK46JJNTnUCvUBy58QjCwJuLQNEM1qm596xAir8genh8NsDcdmTU",
  "key3": "PdjK2Gv4HrYDUdGEsXj27y4EqX4BRhvgupq9o3VTWHFGfFktJAoYNtJAHFBSx2HZQPaw7xeXekdvgTYSZXkdnCA",
  "key4": "2QjaiFxRM792rCfS5mKfhP2boUceC3fuRDmYFhSdMNVK6y5Fs7AM14gXj8PoLpjjabwnjs59BqzeHXFfXHe7FHFh",
  "key5": "4k6gXtcRMYH36h7NmXCCRq3wbJ6q53zYiJAyADpHxuDFBq9y2TSktxk3EEX37AWRy9vAXhyGuQdjoEaVSBeW5qU1",
  "key6": "5s78TZb4YyK394dtWDAkky12RxYSQgTmT4X2Fr5dDgBWS7xuTpCApGHereKs8kHmti3EejZtfmGYo4QHcF8DobVg",
  "key7": "5uCKHBLJzkphpy8jnipN2VHNb8uUXBHK7nEd9GXwB2tjhH9bTX5C67knyCzoG77WvgopsTExxVsPyhCFYnDQbw8F",
  "key8": "3RBcpNt6ah6s4kcLycYRCQS5KTJjSscPxXYFXhUdkWqqFVmS4u7QZMCM3ksAZ4Lp72T5FdJGA7Cw5Q8Eeqjjpogt",
  "key9": "9LE14NoBGgxZSCNgDTUCAZcu54nZCDhL95bFa4TJ1GLy5SUpJ9xX5yEob4Sc6N8tkrcf9SyV4Vkht9mFiSMpfAu",
  "key10": "26DK5duijsowGFhxoAqY53ZstCny4R9SwR3yGsma5bEJUW8ytECNJRkjvZJw5vwgoMydhVcc2yF52tPTbhEkxHMm",
  "key11": "2Qd3dRZ1Ck42bLWrVvkJr3KoHdipwepWUn5wjCKqVeVhkvgSmUJaCmdnbPf7H6su9XUMiGpnQUM4YN5zyBBBLMX4",
  "key12": "3W2keDUeY9m6Mq7g7AjqQZubkFZMvoVT4KRJzpDFUYzu81tMM7KKTYps9zzYFohZ5gYK4cwcma28FSWtbfKDcpKB",
  "key13": "38SqPdKn1skNRN6GbBUDwnFaFELX7AmzNSxwNSp1orVbKSnQMrNvUhDz1xa4W1cthENRfWdC1vuCYS7bSTmc8dAC",
  "key14": "Lc8kZMHj4jDPMpRqj4ugR8Cwh31LziFY4UJTFqef9b8jYBo29kiSP3DR1RfEGNpimeJHWQXi7gBq9YX1v26ftLr",
  "key15": "3PSv2PcszhzJjTYNRmimWgzG4T9tn274BUUk9zT3KwHchAfie15JsXRUvdujnvqxoGyYSZLXnSLDz7QvpHcCRoT",
  "key16": "4xDRsscoKHPUJ1y8AFqvSfoiQEcmwRnp87SXXApG8VEhH8fopweBTY8gZqFg24TbLMKsSLbrZuyqUn2sRAHiwCQe",
  "key17": "5T2fiFrEFUHpLE9V9rbBGkS5AE3Jeqk8TjZFvedP3Tk6RqTLhYC251tRaQjYBNQLrm2MMt3i5xLCMxr7nCeL4hhw",
  "key18": "2szzMqq2e78Nfw65X4Ji2ppNLqyCHzmvzTUu2zh2U9Lb21Xq994qRgjAXekigUNtef3JkAbdcfkmZDJQk1heX7Wu",
  "key19": "4EyEDh8G7EJFYPwZoRFpxfbWUQBUE4mdJwqsZKKYP4WtgafaRwzd2LqefA8BddPSudq6F4iTrTtThsSn5Fc7Gvxp",
  "key20": "JXYffvtY22AgzCoJPT4jwQiymVmymF3ZpcaPW8GBD5ZDDV29d78BJgA1iE2WouKiJAMvFmRuxMGiY7ViRkyQDth",
  "key21": "Vmb1r3dqciqrBuvrdB3woUo1mjD6VUTXAN2d4kz3fgF6Vmnhntsvrkqhd2PyTRRcgutdM1bL4yx4rBdZ6nXhbwt",
  "key22": "NtDVmkX1YP1HkqAFCCbMfrPth45uB5GDCWmaivpfSbxfdaYGZgNxjFw1gD7MznnUfRoEd6KrHyEzZUpewHhYeGT",
  "key23": "2zXQ8bFkYwVRA7P61965hRQWgnXiug25tRYVK13hxoh9KBbfyCe69ojrq2wVaVX14oFYcFk2V447gzxx9WkJ2W9W",
  "key24": "4NA9mroLE1NGDr7ftaJmBArdjodQcDMwJY8Zs75PrjqkQbm5HaJwe9776YHViwn9QypqR8M7s4kV1JAJr2deXaEp",
  "key25": "5ek3o3VEZB1eifDNSDXuimYiKau1xwrjSybfQeBh3SD4VdtJMiw7g5WdspGh4KcGjE9W5HC7dc5K7224h6muPuaM"
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
