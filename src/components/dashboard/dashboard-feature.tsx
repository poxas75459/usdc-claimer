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
    "2MDscRsCa3WvC4hTjeZRVdEMXvLk5REsnSVkwju3YdiZZeaSUksEaoWfmxtFMaVfkJaPzu56aBXYPUoqt6yE4xwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DycR19KejenXHsH59ixizEGEJBwXC5BnuZUCVga5GENrD7jo2YvxFgfmd6D8c93WzV1EyP49rh8iaqdLxCDoJSZ",
  "key1": "2VkSCVbLvCnVaFBJRQJiwqbWzpSdnGeaVeJ6FWMpffRmNaupxyQ9jsFyiQLHU3b1CiAk2jjfzFwBtYZsAjpCryiE",
  "key2": "3Zvy1TLaAS2VApKLgQLCNRq79xuQYv7uiazp1c96CWtmQ1yFu4yj3tGFfz9JcZR8rkSvnEpBYAvxnjBvon59BBed",
  "key3": "5yygARMPMtPTaKWwvBq6BZCC5FSWx3Fb9dR4Hpifwo4pSZnaFmsoRFLZmvuPdLciM3r6X1BoNTetQcNKXDXMJc5X",
  "key4": "3SnQ6QxubXURMuJXaRfmkK2XJst9n6B2SvE32LEBTG6cEvQwAZVFNs2irYAauA7gDANiDuDCWoyQFsijy1kPfHfi",
  "key5": "5DFR2FxaVmaTJppL7ha7Sz77ZKnv8GjpWDgS4cJTDrHgWqJzeqvGeoWdJnTaZboTGLfQtpdR53jrbobxap8i1JW8",
  "key6": "2BU7Pv6eBMv15zQKBbPCHtQpvzWCSigZxWrqFfrS2voAWFXLyysFYXTnJ9NekUQuma36pbkNjB7TcZDadD66RQi5",
  "key7": "66jjfaGcupUbv6aeGRn6YL6wfBMJKpyCuN1YeNYJZGJwvtCp3jwqE1J6c9tKkjg3nRPmiVg5E9st8d8vpiDwezeo",
  "key8": "5RWVuDhvSqBCDc9YKgkfHwxQWoo6Ucw4B3bJNjSxNJnQAioZeiiutcBWsdhoeD94qQ7ZurFC9AcvcPQ9vpazai5n",
  "key9": "2gnWRykmrhuDfDpuBZPGcXMNKEL8rMuiStL1ucK7TDmD6w1GHoh8ab17Xwmac3jmxVApMK8pnTAGJzhq1hrApMCF",
  "key10": "WzyDBwja2GBiwPmCDrw7MEQLKSp6QSgu9rWaEYAn98E5rnqCoJhFR6BmxGfbpZxj81PwQhsSWh8AjKUyaYmWs6G",
  "key11": "3t8ShteXMQbsqzSV2V4DtLygJtA5rX5z8Wa1BrmkB6dzhhoZt1LWh1D7TG8qnUiBYnHrSH1emCBwxDTkRY8g9peo",
  "key12": "4XX83ot1LGgNf5wjGsKtk2dGBrnVHVUTy9dLxnkyQx5ZN9XSRUwPwwdMtG5J3Z8tqdvXD6H5kins6jHDzf5qdmZk",
  "key13": "5qN7FNj1UVNya2e1iycJ4kQ2RhQPjAUsHd1Y5t5EHDTiGkXeuQxffrfMc1wc9dWTCQabPWj5ExTpY2RoPo142Srd",
  "key14": "4ufHLxzvvmB6p3z91gfzB4yzakeyy6m33Yyqpas36QmXsoMersEBNvxUgY2NThB4r4d6cDNhSqT8UX7bzXAPN8tr",
  "key15": "4sNuZ5HGhoiZbnsk1kGLXKEDwkGJ9XR4UYEeVJbHne8U5nFgC98RJVHnFYmrbEW6YibUjjS3QA2Vmdniu9tjceEe",
  "key16": "hRHVTSDR2bAATQn6T4VRoGPe3sXQMU48F3L2uNsu8W6jEe2LPoY3dVq4o7tB1rN7Zxujydiay1uRdJYNXDZXZoe",
  "key17": "3VLjE5narT3R6QjMbq8wGFZA5H5FkLHSZEFFZYfvjf5Lk8gum3eULPbAGSCnKW3vW5Xx2pqPeQ3tdr7Jy6b6grjG",
  "key18": "67B483BJ9UzKrBP2tbVi1sEEmS8spY4C9VEvfKiGLdtZPfk7nCs8Ds79TWDdadaTMRhBNoBCoihTVV262NkQWPYM",
  "key19": "4uVkE4cF9X6UnsEd4GjMUEcNTaaizgV9rsSLcvPCm7dWQXSuccCttiARRoPSdxQtLMg7VCvzDuHxouSQ8YXt1HTN",
  "key20": "3mhY9YQB3Vf2ZqyyHG5REuUvt8JR8wXQhDyKHCZ51n6YX3fGbqH7xrpGUpj6bekBuBUCsun5EG3E9LffhtVJj6A",
  "key21": "33fhj1yv9QvNHG5VYNCzEyL4jJD9wNjeuB4drYucKxghhLSxRCZ1BZpk1ba6xg4BcHUk8rffPKBjfzFnWfovcTsy",
  "key22": "5ehNJ6Jak297pjrca5LVC1nhWzC4DxfMh6T4mumRij9ezbyAX3ukpVGh5YzfRdV6bKAcVLJr9oqHcCeYgX4GVnh1",
  "key23": "2dd3XH4NTRZnqFmX2nbU2L7X7NfHCD4kNa7rGXz27sT7mMEhHEn8wrJESrz8R8Zjw4KAPi2ParboGXY24SaNwzvD",
  "key24": "2XXJPoLMS6TmgpN9JDV48gfFoCKZ4keEuYeLSmhNJ8c2Kjuhw6GTYm4Est3aMJTSJduN6GxYz6jisVNwa4LtZg7P",
  "key25": "3V8extjcVPB4G7b7d27SWB4NqEKf7GYouB1SPaeC7sCyNrMgDwj3Br5f6KypkrN17dtpPcibiYxq6Jpp67TtzN14",
  "key26": "27DTUxqpQSq6c3nMEkJj6FCU59VKYPbF7hU4xu4ZECUdoiE8gRfQbzGjZrgqt1wd4L6HCGni5gEe81exzefw7Vb6",
  "key27": "5epLLKHUPzDtrg9EqoyiHmd9vbTucj8dhkn7XwBHn9QkQUArPJsQ1m9qvBoydyDHB65sZ3EHUQUpgNHyeNBTFjp",
  "key28": "3TaKiCjEJKvqWQExAHzqK3QHVXXvmg9qaJCNYzUQo8hLMRmTnCLnjqkDwnime4yxmWYB48NyG6JoxV6aDkYDpG3f",
  "key29": "2DHZhVgezaoQCdDZjxkGgYitrMj3RJFUuemNJ8UJWEsQQ71wJ52tuwSXLpWCJV25g118ZhcJaQ2sswo7zoxD32kY",
  "key30": "2PtJWgS2vDJzPXzfFuJfL1BqEAxEwXqg5VgkoWPP9tYfYqWu5G3fUDwFB9TACCKt3XTNB2veVhcfuhWFbgAMBWnX",
  "key31": "21yCCgTfh5wVmr7CSGpf9bwKaNpBccAC6UYSq2sP6LMozwKvrBo5k7hgCNJ9Btkz9KjiLTsuEFNN1B7ABA7fK1ab",
  "key32": "3AytGHt7Sw3NpKTLJR8ouMGReNuwQbWKfnoozeX57n2SA4tmKUN8tmcWws7mAXe8oMAwivF3hzWUHguhVz4pk2tC",
  "key33": "3BKXy28qskMRpye1Z7UpAnZtpxYxYetcoXdPRU7MdkrDw8jRGQhbqq11ukjGYWMajhwPpb7bnMNRmmzVfu1ybAE3",
  "key34": "2tWY5DhvJXJ4K12uFcdiW5StE9NPnnpU2eEUaoY46iyC5zVTYfwvhtEAs9aYqYzMhDET45TJPMEU8yusaPvY6N7p"
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
