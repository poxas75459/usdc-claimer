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
    "2o8rMErYyP2EmHgvgELQLyupPX2ep1zeQSmVGD9V2hGQtoXhVBwM4JJ7DTt5pHzfH5rntTUCxRmE9Fm8Fqtx4qEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LBvZPc6Bj9Q82scaYanVAdRoeiE7NU82iHLnoNF1nnzVZXGZZ52zeoo2tXz3DRGVBpZth2neNgF5Px31EWJVw3U",
  "key1": "2YAgXNUgYTL8rSKo1aJ2kTZjaguA1AphLu4pFqWiHsDvZowQrUepbs7V2idzkCHuFQcgKM4ddkZBDQpVKo42BvpX",
  "key2": "wpHQy2UTf9Q56E7748jNWumCjXmPm41wrCrm3gJVAPtjGzRzyn37GgN8mMCfLeVQfQYVkUFDBqvtFdbuFZPcyjE",
  "key3": "2HhVNjznFpzYiaHNmJmbChHko3WjcnUn3hRru6aFAYFSbVg6xipc84iJ3nAi8CpxVnGtBLZcWmuGxa4MF44QpB5Z",
  "key4": "3ccxKBkXqhNrjAn22znzkByTjiAaS3gPLbeBRnm3Z8bGw9h834pPykZLVwL7dAVunEmxFfg8jJ3GdXcT9H31pK6N",
  "key5": "2mxtgsMgBJKJvvpAvnMAiHbrx3G1ua4UQJrKmYrvnN36f8mWxPdgqvQ9Dnv35pwAtrdYoqir5bz251H7FPf8M9V7",
  "key6": "3uP6bm8SjbJA1KsrsKTiY7LVuhiUWXYaJSaZ26JqCBZfCkPnV3HCtzg1MV4nhisEoPg6aUaVfNGngBy2zrt3sLbp",
  "key7": "2YCbjQZf2YeSYjgeMRVXSdfrW4dDmPawrqAx3p5f6o6UhpR9kf4SCK7JAhfC8iFL57Ho225fsjvfSqKx29vBi2RC",
  "key8": "5XKs149ju6FZYU1cbmGM6nh7GekurrJCVYn2ABWhJ5DkAdx1QZJBf96o1ykCmdqZSy5f13jabf6Y2aUKWz6dCB5a",
  "key9": "5LjQJ35fneKnHtuAkuSDMaz8iNfMfJ81MV5vFUYpYX8sK2BqzY6dDFgXd9HwgvDGiefqPzztBPTEs2FPmWEV1AS6",
  "key10": "3ssxoWePwyJ38uhuCYgTKFoHcdmMA5B1kTQnhbHUTjdHSWGfewA9XkVLhfSJyEFkQni8XWbqqZcQtYYZgvPQSkAC",
  "key11": "3c7TVM7smAhbEDL3395kVJhR8HdtfMoVq9SkqS9zDuWx9Aofy4wQxtyF8BsTH2PWxr6mCZgJWdrjQoaYxPb74hvA",
  "key12": "4XSJZhcxgwSHmpcw8vQfLZdq4oTjjGV7JXwnz41tYbnBzQYhDrrY5akbqdWMGf5boDwgSR2TTypd5kQSaF14d5cv",
  "key13": "5MDP5nvKmgEQ2dbQNpmWsgHLmpMmXrPZZGfAwX314ciUuqdrgYeC2UkDVvWyZM9qXoWeqTbtG6PrMUA7aoM59fXC",
  "key14": "2wpsQQNFmwwZbJRiLRe2JFgdiyoAQEqFdFXRB9CESG1qdp3ZjXscjhsZykLSN1BuFk2qotys2f8os4uTHHXtVgay",
  "key15": "2B3hzwDgXgEuiTSMVJ9TgjT3D6MDskYcAUm8dsha1GkGrGy1nBnNgWKPNqDrcPKGoLtQASPHhWadZo5CwUViEhXz",
  "key16": "3SDmSQzsmqLFAnph52nHP7jZsb7oRsVLibZ4jdWTZ724qJsLMJ7jRD6kcnWscgKyy9bRZ5KDdBRJNqoD3CYUDxrG",
  "key17": "5Z59MCF3sEXZWycQfzatvp6ZaGg7rBbkEcWVviNrN3NyKMpRLCcZeeA5mvitAb9naKxKeCnNp9uSUYHPh66a7hPw",
  "key18": "2iDht1TXQwftBA94FBDBH74C8kmUSypASuSRSXDcf18smvSVpbzMNkiyefJCFDpEmQg2npGc9YUXVimSJM14wSxW",
  "key19": "SUdQeVRFQiFcmZvD1XnjCXiAFC5j2WZzLJdW2jawEkR7QU8bWxffWMiXCXdbJeNhWg9RANfh6BmCKueu6bRBjAn",
  "key20": "5t4kFvrVyNtVKjUoY5ueNFc8MQwCfDhh3VZ45azGvGFswFi5kodVykvJwLXea37Zc2KZxoUAqLpahjy1THveWCtK",
  "key21": "2J81tKSDathkvrJ4afLsmJkh3TEvtLpPxqVsCKrkFQVEm2n2ov3KCrXhLsotX9JMziGzfT8RVsxN5DEUsxNjfK4h",
  "key22": "4baLKiuUUBAxDyCjhWPHey1jZapEKTyouf4LvbCSfArTkCu3VfKe56wtXYXvBK5dYnEpnPuU2876gVXVofzgKT8g",
  "key23": "8zAQrgXmS2JGMmE521mugRQvEA4fMdRxmG57LEuA1NnamxAHUxxKJ7MWu3Z1fmN3wvswRG1XJuF7SneHmpM7avR",
  "key24": "57HV9yWz55QXLxXju7cAfComy64w7okK7TCWD8eyC6HctAaG2xSzTLGbzF6Z6va98jt86nGEUSAL8KB3sRWJFcW9",
  "key25": "3TEg6WCDFsWhRE9sYGyj5r6P5Yb7a4fKU8gmYFoiScPY98m7BYrANBWffi9xGnLx3bnkfdgYXk6TqUEAqfdyRknr",
  "key26": "62ydUMZAXWJCFom5aLPUCcTK4Y1bMoyvbqF438GpFje12u6q4ofGarjB3emUFWSZFTXy88hYWaEj2nfLRXjwHkbw",
  "key27": "3ZUduo3suvgkW4UKoXtBjoep8Y2hT4oo71cb2wPbmQDyx5657p2bXbDYDyy1mEXZfDsHgSpUfHVtAAp8Lv7v2rZk",
  "key28": "4LqRb2SyRvUuhk2NYJBceRnJk1JpmF9twWhixzf68oWm4PfuT27ZcJqERztVLfGWLL3n2dqxEaTad1aLD8Rz3bAq",
  "key29": "4ScmuJKgKxviGvK62nxqKMqFifHxjVEFYsMRdicQcAeMxswPLrAnkfvrkktcvsfJk6pzcrupQz9knW6s1xLMgr3N",
  "key30": "2XkNPJXTtSYrU6o6YtLQqw81qwYY8VvPdvdd67gqiXsMCJNZwXG1VQr4Do5GF8uStDMnMuEAvHpT4QZNoh8AwpyY"
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
