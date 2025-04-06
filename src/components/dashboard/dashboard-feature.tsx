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
    "4m64F7mn4ngU61qWYWbN48fAYSWSCK1b3ayG2x7mgPF2pbk39KktEnm5fc2DbYCc8xzPGThQUxeDcgpv9EhzHHKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AmBgyB3Q3uNo96SYewxWno97tABz2YudHsEJb3X3tyw7aHN7d7sGzdTGTt2ZQfoxAyRU7QdcDJSq77AmLAwUBNC",
  "key1": "4uqsijWLySUYmPZbncHgk9cqy5Qd3CEphpah9az32KqN5732qti55tHeViLAU89RnnYRLpThEtHr9UJYRjgd4pxW",
  "key2": "3wcGcnB6KGoALWZrtwuLsm14MChEwKUtuwkhVDioQTasFaDKXbRj4qw8N1WdMnBef78D9eP6xaeaAaMPk1KNY2z6",
  "key3": "v2vJn8qsV61Cxjx3jjjQQPdjCV3LDXwo4a7MeYU7ALMUFCfHMrH4eq8KsPqjnTh9ZjcHkCKNzGm1qmdvsrnUva9",
  "key4": "2jCJbqWBkXhAs5uJq3xaHBFH4yNJu8aV5n9mnZKTjqCw8vJbuNQYGiS6kASLtJn3SYvY25kgXi1ZMtVnDxo5Botw",
  "key5": "3ENKUJRnKhUTkWEuChPEeRFAWW7dRcnFuD7PdXTyqUm7Ykrh66ZpSbJYvqCx43aFX7h5yV1js66JxL2oPgLTyZu",
  "key6": "4vd9h7xieD9FN4wwh4pR2eqaG79Vuwt7StukN97S7cgpfGamFmtTigi7FcpVVhAqudd2tznyE2iTV2nZuGpvzUXD",
  "key7": "2ohiKci5UPFgf9XgDsC7cXX6MCUEMVdo772Sie6dLXd5HZaMSnyFysibAStkUAbyL8jvBGkwEVQGgNqEc57qePyb",
  "key8": "4q4XjiZHgunGtxPKdn7wZTgD7teCvVLrHdjaqueUXTPsGPGwKTgFoDbCfuwCRkfaEmKo97QK3FF1pbVRwKZwi9Q3",
  "key9": "4VE65UfP8gowmNHt7NdBTFLWdugabuZYLoMMpRXsnBcPox6MxPS1BduLUiaKEBvqaTknC8KDQUcrrir8wSz2eQcV",
  "key10": "tw5VCTTDhXEYMu5XkcP8y2JJ9DistGAdN4GcnG1Qq4vr7Z6ysmXDGzUUM89qCx9ZH4Atx5tYhVZ4AAVZhQ3NyXe",
  "key11": "5vR4Nk7z9o1SSLXHUghNzt7ivCvJnUaKMLzmQV6LW5KTDBAat6tyfaZwK4Dfs3d2gSFavLDLC8ao1ki3JD3mBNHG",
  "key12": "4hkDUhYqWnR6KCSXqk8vptiSBno8v1Vy1kV2eUhsuvxJMCNncPfU7mMeWwk5TFzZCcfEujo7B8QEnBjVEDKgqV5U",
  "key13": "4mh8HQfFZ2K5YTE9trAUb2A3vQu6pg7sPRDsAYwP5MDurchWKR8T9DvpMhKKTriCqKRMX6ucVCb9achdNcYnAbJb",
  "key14": "2ubwM3DsqXP5SvjwccyDJzvT4UaYvWVwQ7rr2GDJUj22eNFnXRtF3jHEKXwqTtALYhY3JmrBJ3bsD4ri6GC62DJd",
  "key15": "3LTdDRxq69TCCuQ4q5P56CXgsFcuBwM1hjJMV56PxJEeooZ1A7wzgXvouyjvyzeNKJWPBLWBNmRo82ssKNDUFK81",
  "key16": "2upmMLgF4ST6cE7gicwuCAHF7EB3m4YzPavjcscgiT6EdVvuDWxNXhJpETeTfJPyiKZDQLgSjxcckTnZF6qUGWsg",
  "key17": "57kAYPnfvU1xo9ka9acsgDr11pXoK14ionjg73GBxvMLMPan9UWJSGTpdqA7D8ZuDADnbBM1qm9XapwnCZ7XDHKK",
  "key18": "2UwMToEvghXyrTGvy5SyQ9ASc9XG9yPhy4ATsFxnjCY6xaEexhpuF17puLqzfpBCQxQBSYBQxLuZh5CsNevPCu8n",
  "key19": "5mcnVoDeiJuLhdXBebNHqbBJsmCjeMNFyG8zvbuYZ9rYz9fjPVJnevmDDyH5zxmax2D5nh81tTTi5PUvHN9ZbMTx",
  "key20": "2so1JJJQCwguR6ETRjiE8wPu5uhsrwLB6AFUaujZMyutFvciTpnkw6w68komwb8Z6Mv2wrMwzQTd5PyCTd3ryXMX",
  "key21": "F8nMfFw3B28YMv78LguYK8W5up9D6tdvfMtdzuZK81rX85UbHgPJ4knVoMrTuwfq7iZS5gAzNY8wHqaj4jti6wJ",
  "key22": "4z29wdc5ZFNEY9knHd3pJaj4hZNBfzRfuYaGwdqtKcXHRHuQJknWGyGbSVH6UvbUFZKXv1LXBAefFxaDNq4dtNYd",
  "key23": "5Uk57LwaFx1LkyPATZWeZaVhJn5TZFyAzuKGQdFVY396RU6adAEcNrnuQFEzYRXpFFhAD9uSzqsEGFmMAFopa7DP",
  "key24": "53AcQjwqYKsrqDpJWCYaHm1gaLLJEiQks5y9DQjVifxDKA41Bcw2nCsi27wrxBRyiH1T2L9mVU7Heacwah7rryRQ",
  "key25": "4W2KUFUp7fQKTaePvuBcZNhi9uVT6gKAe8CiJvKuSB3MNhsQQenUU4mfzpLN5ZFPmGf2yHyLrCh575wQS7vCDUHB",
  "key26": "5YWaqzFdtCS4Pv5kUb6NBotRqw7S1ZZaHzhxKwAh9X8MKoEkY4k1bJjkbybipouu5yD77kNkVg9x1GuuJF8QeUi6",
  "key27": "ZgSTDjQBgNSqRMAqx1MwX27HLYikoYJz6kGsEMJzDA9UGY6riTZ9KMdN7NThiviqwuj6Qa4cYuWqJJVXHTsH1AD",
  "key28": "ahv7wZdiZzKbCD3BAaL1wPeyrqGwTZGxkqvg7oivPbSPosP1S9ZAJQtQc2ez27wfKv1coh3ArwbU53HhDYuyJ5b",
  "key29": "3janLBUP9M3NHDcRk7DobKhKXWsio2uphJEoKQX5hx8pvz9NfYzDHK4M8CS99V5Jk3dFmoZZxsM3V8TWZZF3tBLG",
  "key30": "5DH43QtXFcdAC7XBVamL1G27WezUZw8bbFzBcFgEaWbWzd5Rtq1BjSJW1RuXcmy9Q4UwmZLwzgADEVRJXrRdthfW",
  "key31": "2vs4YibeFxBF269grBYTeMa8pUaW9UznWCzqWgjDwvYoanM5Z8Vat6Fcxvmriazy3b5jWAiXhGdo2Hzszk4ZijbG",
  "key32": "2YHuVnJFXQwPCoCKEYkACBCWjTpBLG4jEi6yst9YewVkp8MtRNqt4XQVTqPmcmgjzriJNP9KY1ZXPwkfHUs9wqbE",
  "key33": "4bSqDUEsvfYkSUz53ELNV4cYQ4VJEYLN4KDqYyUfEtdfoeaz6ahEw9Z9tFd8MHAFJHE7wmaxUm7ns7edH61DRaNU",
  "key34": "57Vq3vBSv9f9FQz2yB8jtu9LWJFcQiutKKqXfkRz8rPTXjpJAxfkqjYZYAjSXmeFFaHQ8VdXUG2VpJBT1j9od6Ri"
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
