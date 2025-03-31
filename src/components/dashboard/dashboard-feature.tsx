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
    "2nV7n4642akCHNmhks8JA9sBTiBPS78jEcHaHNBU5G32RpfwXwvjEJpVb9XmDSBJan4fPHP1LRhu225uPBUBqP2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39U3szfcuHABtmsbgZhcoS3Cu1dFymT2PPhxDKrnEdkdWzF41ezrNSvLXF9M9zFqjrVFQj1dmC2WGAYeEeBb6AyU",
  "key1": "4r349S6a3sP9uxospvALS5ojKZ4nZeATFft9g4n6uw9jRrwnWTfGcVAXPbQvpmKcM1PyJWBPMhpXB3CWzY91c27o",
  "key2": "3raQqZyRQsbWzhwafEwtREBW7UQhyPSFFGyPU85auhPwWsMFW8KFrfRKKPsEf9gUiTS6T5CeYicctKQzQMRfAvby",
  "key3": "3J3Tz8biRbS3wdyM5dMM2SPqQGyAM4DbHEYZN6Chr5vhvQvRQuURoCqq4SZMaxoUkWEr79anmCGKUmAw1HSiqZZC",
  "key4": "5xLTPL3Pr9u2M1eUytjmVJnN7qsvhaegbaHrXimcVx4GjqsbbfthuN8iyZGgubpmAZWSxqETLMQxCe8YrRLWj79k",
  "key5": "5xVAz8EU7eAhZqJ8irunvioGbwFWgL3ZCp8SAkVmxnguvPq88z1ufyY6SDaeCFsFfjeE9ytWGrbbiH5vQuoSXwGn",
  "key6": "4yXtAHVfKwDaTTDhUfzDGcpQrnW2Z8CiLqoqHPDMcoCD5MLLWPj7BP8EiyAjXJns3tpRsbdJzJvpv7gvJHXphHqY",
  "key7": "5FXuWK9L6HoRK4MeNhpQNmYABLprYEQ4pbY4sXT9QLkVZWBL2CLFyAQYzWUR4bBTcZyEjih65xNGKk4rmPyQ6WAg",
  "key8": "59797GNdrihxQ4YS47t8ty6xJWMefyjjLPKmDNStn7vfyeHhYSNYQxuoBGqhKq616ByA9mWKFBghRSLoq4CTJDxn",
  "key9": "ootri6xgKqWnwAkcs1H2MU6VPh4aJpUP5KeVkH93b7tBgfFeL7WQy3PXRFunW4GGs9cG1BS3mczS2qkFEEnDDjw",
  "key10": "5uK5RAUUH6tKg5fUXHPGB2bx6a5K8LPsHqzALMeXUtgjzE1xiwRVdrGnjUTLDL6CDrWRQwLMLoo19QfH9QiHMxCq",
  "key11": "5GQYfEqrZcyQAxQJhTztqLBMNioghZCPgLhTV8jddBtmKFqXYGJitGqUHEz4htwHLSnmHYgeoTezjyZs9PPYgMk7",
  "key12": "FUR5RmeYiYtXqWryDQvHU12tu8AnSbaWfRh8JVuWC3o6xJK8aFobEG4M2EqogFDCp5NGbNTj5SbJ5rX6C6JJ6ze",
  "key13": "4pcMKJGdqDZcG7YRwHEwLh8Zm4v4RMY6DuXciDocKSCrzPTpYDxWn2FsVyDM468AGKknJsQMRzqUYC7CrQdGP4ER",
  "key14": "4Eu1Tfne937u7bFGDivgKCirYUsULHATyaaAVPkHaq9FWrG6eBtQDXwvtaWVGG5iUwvRMkPmVU1t5ZE47cFdmxa5",
  "key15": "5HMsgE7EbT9BDZayLYaUmNctAabJPFg3mogUpxHrNJk5xsdTfJenTxUW8qMTcWeNTETpVXszn98Z2Now4AGBdKpN",
  "key16": "41edksWGtgnrCfbdMUncqqq7o4i6toMjyRdtRpuqyQuxM9YngbXUt3zau4TjVR2cyJEqyCC4sJUmRycWBPcqJ1mo",
  "key17": "67b5HyjJy9vvNverrfNCPeW5zCfFmL2Gi5KBRZktGikJjzgcKmMebEnB4381o82EGEjhHsoLWFbunckequm9yz5j",
  "key18": "64NbkrrXpKJYLBdH95LF5Q6zo2vTFjhQg24eoBMcy2JvjZtHtZsACTWjJji2WtoiF8fFFxREPy8KNCrEV4tGEzbF",
  "key19": "cgDLxwqMLbNSS1qCqZqNfHMJHAA39mkHe3t4YF7Y4w7aVwNJ9EaCBPTFBdchb8w8LYbUUTec2zCFZrYm2UrrKL8",
  "key20": "5JsnRSQVpp6vahxRG99ooV6pAA7ccdsfc42q7ehRGA3ejsnR3RfUi5rfdA37Y6vbZvabRNhhHbxHbSgsid1aGXAa",
  "key21": "KVHTt1KfkYH6Xoo5PkScSbAFGnyQ1W4ovBVHRtLn2UpRCvMoDFMz8SioefAcyzc7rrRqXRzY7sRab2a6FVcYNzJ",
  "key22": "4UFBhjs6yVEWwj1eTHycttYNbpsHiYY4JvALJ2BJETtKB4uN3g2qWpmwmzHzS6SXL2beojsUgk3tHYuVuQv5oxPV",
  "key23": "21W16C3Gzh3BQB5AChDsnBcibVwuo1BZHYBznMBLN6dEk6r2Si1iU8Az57tvt6kKidcEYgQ2u19bE5xwmmAJ8Y8P",
  "key24": "5km4npATYyLVxQF2FLJUsSUmbiorg3bxFcu7LnN1Fm3ysPm4ZdZxBZjngYwaqJXnHxxttizBtXLvLX5HqTa2ZjVa",
  "key25": "63813NJzR7Yh67f9RCqKsN228K9qeBzTJGsVHCjKDZ9ZNszksTgBfmuip46dgErK5EuC12oxPcPR2XY3CJsEX39L",
  "key26": "4keg4UAKoBYsynKDCGEsfGCSi9f9tVdn7qmQhCtJ71FnEJrUDuKGk9XaHZEmyL6seWS1SLXzpSnXqKTZaqmiyCtD",
  "key27": "2EAqfAFTdo8NypNhotF3MJBSyGx152wQ7wHeNWZvS7a5JcrsYKvYQEfHyN82ehwRoLYqppHJdLLkmARQ7P3AVDyo",
  "key28": "3AiJhUsgk2YqYFqQeCmQ4rK84yKkxJFdtWH1YxxUQi1hU6db6UUKcN7p6VGwa4CLJpJ7FQyvAHkeVUmmwEmpPYpH",
  "key29": "4xgocSfuy6McD3W1uufZ3rT4oWxyx1rPeitJAbLM3EyLFJck14SqSR7Eq8eghBLazHtrZYwQRxNnrjpyT6cVtsBY",
  "key30": "3fA9Ut2Ht89iQQDSN5QWALKWTiXQSqRtnFqBeSK5v8tja6siQx2LreorDacuJBTrmPwiR2tSsu5M6e2SPY1sdFvm",
  "key31": "3zV9c6ZSK33jNcPpUKXjRdafGZvKneWBV8mHbDXnAdsjnQQojYvMsj4A8DBV9qpn6W3BBmtCAeZFZvQzxAHa2q1z",
  "key32": "bSxvLVeuigtWg9gBGqgCqCPCwU8m2JA7osWc1yBaiM9vDV36ZEkWNBwiFkp3RAVZY9PHJk73buNtepYFK5foKFz",
  "key33": "534UPNsK9rnStqLnamo3mZSfoxsToAnjM7kwGNBzRELtutD1da1TSbz8xKACS8DMKg9TNS9y9DvZ6JPTYyNaRjqt",
  "key34": "42PRon7wL3DHLinafrrjmAZ18pWPAztewkKpaWTVNyQ4m31MQRgZRh3ShHh9ErGb3NcL2ZTK54NahYVvSBHYxdVP",
  "key35": "aP4MRvDtJsEpqPJRM2pkXwvtLHARtyh3Qxgc1hdrTHYp8r1auJtfWEw71HJEGGV64SWdhQu7wJttXNMPibmDTzF",
  "key36": "2JGmqatbVPvSmgjCoe21aGBUNunG5RM8x5VndcK68k38W7TkekbSom9hBW9ULa924VNn4QPFuLskNJye3MfmcWhr"
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
