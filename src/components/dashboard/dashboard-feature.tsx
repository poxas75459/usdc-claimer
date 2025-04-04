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
    "Kv3h7P1jF8FAHfy1DPPxQkBn618yukcY9m4Xy4G1coRnNhZkiZxFGSxh6swAtemW2FY5LPhHjwP3DhF7Du4oA2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37F31e2byzaUcTcxN56v9Le4F7x2qV35h2BRVDDd4W5WhhiZ4kYwQZLNdSU87ywpabV8AC7DKn9p91Y7f5zZ8Yuw",
  "key1": "EcSmSjVv6zaFpXYrpHNt9aSXtRV44GD7ecBLmaAJrbe67m9PZ9NTQ9NDMYhwSpahdo42CJ2fucD7nrCZGfv3FH8",
  "key2": "2X45EnHceuVd9gVe98cnCqJ6hpAgUXeB1zsd1RXXK8uZU1rSKaG4VXg11ariKJj8HrdrsnyMC1EsAYgmKoS9z19",
  "key3": "5ar4GK1WxQxpVyQGTBA5irdLDUtv2rayJxaYEe3gnxbhbcQCaiH6nSWSFwjTWmhT8kpvdAZzQvKTD9GGEXBJ4isV",
  "key4": "5e3c8CpVYUWht7XMd9hDLkqMzeTSE8noU8NPP2uaN7WrinTA3RVJgKNik4JZQp7jdr4KHHK6FY6imw4Hx95hgd79",
  "key5": "54K4hHv2Z1ue8ze4AL3SD5PibYPPW9PF5REgshDEavWhv8jcEuzmEyjqETycbJXAskfNoZo2xPfKoLob9NYXiuM",
  "key6": "4E2MkC2VCsmjAoGB65HeSdC4ACJ9VCHt2QyS32wr4vn3uKS3PFZVwpZfxkBkWMDgjQNGix7m4L1LpTKNd326MCZp",
  "key7": "5YzV1QH9tLM9RrYtjktvfw2oUS8dgiqEvgxcn7KHQXPHv73bKkqpTWrfuTd5M917j7oxY9y2tKJADcoxz7yfn9Y7",
  "key8": "4ZjiSWZzmVtj6wWxHrLTqbqwKsXXHX3kuUF76MWnRshbhyoM4LT3mmbz72A84gXAr6VE3N9gUje9yMZd2NjHdJAF",
  "key9": "4apcvQEWzBjatyRhkgEtoytTq2ZFcmwPqQsFdNgiECRRGWh3uQ8TBN4neanZFgkH8GuQuCkmYXCjuZ8Fa4kuJpcA",
  "key10": "5B7oCuFFk5UYdq4aR2oRG3rMZyVD9rXp62CSYMFZBvGneBQGJXQSfiHNvhUeCtZjiN92vqWuBx94x8y2GDejnBCv",
  "key11": "3T1Hy2Jo99xmfxM5DmjfmFrTsBQKb9NGGKDqSUAeMpLd4iVWCqAbypANsiNmmbpBcRYZk98FEMv2bcPF7nhb81Cb",
  "key12": "5949YPU4TSge8hSqH2aW1yb1EXtZjhn19kyHQTfb9SYJnrg99WSbb1xqVbdLj3R7gkEbR6KtFNBzhJAAHdu1wLAA",
  "key13": "3MBjyhKugefSta3roTJ1kAGcFsfo1Rr72kk5q4cw4dP8GaKBVJ7qmZmqPEGgjVNr75yTSUn89G1tNd4vQ2WPAYsS",
  "key14": "5sHcvWGKJJ1gRtL39zPbHwYDoTcupegjZzLp4uV37466WCJModc33orVVB4BhpoxNmGk8xReB92FnFrC3Mys4epi",
  "key15": "bEMJuggGDQimtSj1YGqqceJwawpwY5GR2zrtzGv7c1CWqegCCoeaSn16k6D59oYJnP9veAV3jjMmJ93mD6E2881",
  "key16": "2r2ADqZAixC7TiiCZcrMWFqo42aZfLqCFDa99q63Qiq4bsM6TMjLUMuo6fcxFFCw5P7gn7KGghoakZNApF1Qrz8s",
  "key17": "pH8nfBnUhKxJKf2Hps9G5VM3LKV1SGBevCwfEhY6x5qkfqLnGffrsG5yGPR24KiWgpaDRsLrDQzwzgHZPVoAzfQ",
  "key18": "33mCz8Wa7Xr6iPUtm1GUJxpDP7MoajHW7QVQspmwtPtUXoJEWKXwEpVhmTorR7AN2QbSiY3Y9T5zzj9nGtwKjA1L",
  "key19": "dLB8KybiPs2dXEMySujKkoxFQJEkt7EqYxJuz2nVSv4qf6bMCtKHH8iTNLyCRFGv7RnApnVKZ4RZE5Hzud1qicZ",
  "key20": "3NfpRUye4Vsva5VKQgMiwLpXobHMchercQMM7Pq48M2rtqqWbZsXYXiSVzFnhNQkFGCvrhc2K7GaK2rhNvuw2tFU",
  "key21": "3hMqozUQRvHekEnhx5BSDaCwtZAbpZeb3PKzZRYbg3bEzQxG1vT9Udk61AKz597Gms6AJpb5TSr9YEhyjH8LL3Gv",
  "key22": "3izusCs4kwFuLqZXUoEG4M73UCQ4hNk2eobDUME4TpQor2Ko2X9DpAiigGuSifwwzr9L4p78k7ByCs7fPXaVNRti",
  "key23": "4KHpuS869F9wD1YdaWv8fCbtZocTAbdZGczcu1bBNgS8TwxfTJtc1y9biXHYXLUkS7E1UXuW3xpdG6nroZuwAt8C",
  "key24": "4mziFX9soRzHJrdkvwKJoeubSYKScUpojzjUck41MUSgsqKSJcRJpGbdfZDCgQWVZHYPBch3ArhTEPLwfsDMqWMd",
  "key25": "2HrAgyiFkVkQDitdjd5HWz3S3iPSFx9GFJ5N1geE14zAQk75Sy82zHJvvDLqDKNAzLZzRYS1GxRWrpzccZZUgXCE",
  "key26": "4HHtpZJsyHHdrVQLNKhL7JxVZj6LCRZ4Saunw3EppWtUhBFNLsbCwMidqe73Z4VtN34baz3ATGYM4kmALzicLurV"
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
