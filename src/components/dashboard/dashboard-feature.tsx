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
    "4peLfKnYDr97hVgYM5dWdTW8HgedcW8X4qTHgvaXdMi7ns4tj3CHjmRCufNt26VHiPzYzuu4DdyimRBD1gLukbj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "huFbzNZ48Xhvno9R8zafkun8BggZb442yHv35bjBYVasnQQMyt9JbSt5uefPvySKr6373uAM1vaUMWZee6nYYXr",
  "key1": "4AEZDaqt7d4PCRJNCbh6S8r7wiQEG4BsNtm2BX3kwbDi4z8h4YM6eoFGVMNRYGW2fDPJ6zYV1L8ezGkhjc5uQgJ4",
  "key2": "3byYfKUhy8tA4oJvCv4KtHVL19APwapAixPEpRE8QcQubW89j1kwQJLshNZ5wyYrVsCCzoeYvFGuA46Rvso5WX4g",
  "key3": "55VF1qLe9yEgLHGKs6PuETBV3sLwax9bNaKawh6derzDTmse1n1gE63tWpEvW7AAYPZz22xj9ghLxpJZizWfR2Vr",
  "key4": "5Jp7HkRuspiryQCXnLpVK54H6JDuAnFwPsHFt8AaqhLip9VqjG1q86SjfVrFbBhkDLtPBoRoVqdQLZ7mZU44oMFj",
  "key5": "5u9zXM8vydRn7e2qe4A5Kra35suHKmJzjpQuuoXYgGLnNwGiFogcM3QokKXsbakby1eaF6dRYG7u9eMYYvM3LS5t",
  "key6": "37HLBmJ7PmS3as9ozKg9zCxcXM5QXAwt4wph7sBDF6B2UiT4D7LmPXAoMkdT7CWx8aDdMRWy4Avh7t6kkcnx43jk",
  "key7": "yERJmuWzgHwVpzFw8494Mi5Lf1M8ZUv9SG3LQmo4uu3FmCydsniyiT8KRcSXswJchqMFFPsHQUMarJTY517iirC",
  "key8": "46PyvRktp8RmFrDZTcqJ3n3rY1KsDrjiEFXjPSyHpPZfhu16UWpHpr8GLzGPuP7RhoLFaq6GVAAjnKWPYFbJff6o",
  "key9": "4uCiKo6R4UUiCTPNZmLxhY9HFC76aQY4k6p6bFotjZMcJBUsfBhwHWi3CVEUdY2vfpbMpzE74HiMFxGCwiJJsB1M",
  "key10": "5tor8MhKvLBPs8PX2HTDgSCwfmFpk5dwq1eXQ3LPT1zruQzfxeDi5oqsZuPDA4gesDHdMkixdGsF2QFUuaPp3Pie",
  "key11": "PrJoo3EShBLj7cBwHgKR4o4M1EjoSsTZamVkGTe479tMjUwFTTNZMnPfJmkmiYJPerPsbHBnXKwu4VFhWvvoUxa",
  "key12": "3yiMvBbsGWj3XMEwkfkUMzUW5EfxAFxdppoQb6YqgxyPU13WAEkhi3vMpdkbh6hFNgcAeezSrTzoWXAfaUKTD4GM",
  "key13": "3CkGm3fziFhWjtAJJymUCTy3amwpehv9jEFZ1G97rzZX6BJGFdGeRwhoGkAK5728uZpJS1UNRLJJv3wVsP1BwBU2",
  "key14": "3CD4Mwhe6zxjFbfAFpZEz98hpp2gMSdz5h5efoU4sAmTqs6Hg84MtXbDUT4gpgvuuN8LjW9VwvmzMixVsUu796jM",
  "key15": "5pBzGFmiGr5rf1upjDPXe94xgw9UQs2xZ7CKksDXFsxJfoMgxxiFqWMoJ1pr5tHwBoeSw64QCAJmF3rQHkZ9tGh5",
  "key16": "5djHJpi85YJ8vof8VLrQCuBkrGaywM6g4DktbYKoSD2VbJ8pz1QP4MR33jkVi3nxszT3N3Zu5kKGrR4XXkMfSdXF",
  "key17": "4Ayv32rJspWaNjr1CghYGLbTbgLc5dTAhPmGa3o4VcGX1Qp7FZWnwjRKBaSPthE6eGxd6sScokK4r4hiovUHcNmy",
  "key18": "4Ee2sGBGy7mJa6RKdM6TrojTH7PqoxRkWedM8spn4LHsuMEine5ZVqzsnJ37yvtPzgNKr1AkYVtUWEXHik9rggmd",
  "key19": "4x7gVybveSHX3joXFswUr7LSGMyqy22qr9EyoNheLMsm2jERJ2MbjqjyiZ8WaXjZSUz3UrECqXoa5XFz7HdYvQfS",
  "key20": "4o5HZMvNZc6vbcX8KkKWLK4H9xoMqXVk5eAuLx1RYobJqJpCC6aHkzfNcV2v44oMNz2E97WJT46Xow7HFV6fnj4C",
  "key21": "2LATQf4oR8KoX2BynoDh6tMsazz5GE88wWGNcLC1YJ28bST9afWSNPS9kAnMHFFCuvEE9WxDJSvJ3sj1hbeTyy74",
  "key22": "2geFPHjWyooLQuKxw9qYPmqR3mHpKSnr994EaMpys8Fmb8oAsiRHp9uTFQtvVjDnRKdrx6kEo8xWzfxWgmzdJrD9",
  "key23": "Aes9qzrz4mWd3SNdY16sGpuf3RqcPHj4BYYFkUhsqDTYuM2fMSwv5p5xRAhKVvNyGwNkPT9FeqYcgjZxmgWqMr8",
  "key24": "zdf7WEykKbKJi3Q2wseFC4GpxKJBqZyHdnCoRWCoTFQUfkmbunVvDNoqbBdqCCeRr1tddEr3CJNzvXzgsBmNTwD",
  "key25": "2Ewf4YTVyKkrqpnsCsXfixs3UiMii6MdMmMqxqfRgJMZ9HyN7mLnEUqCHqTNu2KcQiKmECQWTJT9F1dNeje24Xps",
  "key26": "3zsi3dCxgCw7EMfZrngAXhogtBDe9jWnyXEf7sF1Zkdh2TwLvH5Wztqy4kavS22Cjv9p4VuEbYmqBnmxcWKVLLm5",
  "key27": "f3rGCNj2PfpsguTeqFRjChtx7GBj9MumgFqdds4dokyQbdFCB4AP9jebP99Dj8K1iLKtVtfKhEWgKR3zSsGj2TA",
  "key28": "5UZ9RtXE8asYeD1c9wutKJA5wHvuHsjRHaWgnA79hp6CcTCSPd1VgHb1LAvut1QjxVQgHr72Pzb5JMzomst3LicG",
  "key29": "39Ns2pbUsA3DnPPBjuPM95uWbphHyYgVniNY1RnPDqdLrXrPAVvkbYPqFEhTLwk7fuy7dWv42QkazwTvEd3jHFJD"
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
