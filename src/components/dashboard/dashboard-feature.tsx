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
    "6aixBhiNvKCthmyC7RALaXQYz7AdZvekV4CgVrj7sKM3fdW6PkdJGEqCjKNieFvpfVMs298zTPrBJEVfKAR8A9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dA1p9gb5rSPW6vqaTV55kdVz2bYafKn8re2zCGkVVYguMQoWQvSH1QnUN27wvJGMsstFqzUGPjbF1yh6spjtirq",
  "key1": "wg38XtwcFFMb1picHKTaBdYTKGjPPgrM2xHxvwNNKiFEC8HtZQ3J7fmKv8tynjdafUaFk9D6DSeuizBcg1nx5gN",
  "key2": "vEx3BTN2Fho3m7w5UCV6aL3k39zMzLyykuUBZhh91TXFP64qfBUmTcgGHczjD9R57Ac8ysE4ywNaMbwksQ4Wvko",
  "key3": "55bjDbD2JZi7sRoBRYxJZspwDfnw6uqqmhUV3EdjEfqi6EkNtZ14QmxdLg1A1JNgNZHNCfPPrLdGZtSuDu6TRVz1",
  "key4": "3Cwr6eJXcZonbdCDtwKy3mnS4NgFFXrRywM7MgT1WA2XkfAdiJYbLYEn8ryHRKWGZqfUr5u7iiELar6ow4bfEDLX",
  "key5": "dcgQDqM8UQXL4nqt13239n1U946KCEjVkeh12BfoiP1KitLJbdtMRB5uQ8oYxEEnSemFJ4A2PDWPzPt9abyMXi3",
  "key6": "2JYdjaHJfCj4XadzjjzNJRB2Wda5gd9JcTrdGoqAzPTd6EZ5Eyh5qemDgdMhTenPFTV34JW5snfspw1m5H7WAcxM",
  "key7": "MEBnd9gkBZisaLJFfhd9bQg2Wxm5PTrrQd2Kv2XZye6ZRcZ3Jj4fCaJqj5rftLB5ekZg6jb7T9aT8XPTyvt2pgM",
  "key8": "4QDD8PR9ha5VxCTzbCG5wVmLfcLbBZy5irCCWdVDuL6nApS6tGFNbRN4ATPHjVt5MuiiPSBr9JM4qeQXJAzDx8sy",
  "key9": "TheVsmzgJL4D5P15x23BGhf2hySgcXK9cUZqhTrbqpV89jCAKQ5aZgjFnLsmPSMvacH2Hy8XeMRCde5E7JParr5",
  "key10": "2yw1eAmDRBewJKqHD2wi4vwpL22t6DATyzqtq8uGJCvpz17bwAs9nY9BJbAavw1y7uNFFXzqDyFJh8wkVTvAbWoE",
  "key11": "5C4dpDjZURJ1Z2pBkzMtQi78zP7HvjguvmmjQr4av2GGgqTWFzYgypXqVKqxbksanSXGA5SbDbkEoYkDNPouBXLe",
  "key12": "2GHbMcPw1SFhXEuDTbbPBG83uKi1c5j1sqDHe6jEnJdtLUGgBfcZ6FtmRM8KU8hJkAQxbhA8nZXYvvWHm8zrW1ei",
  "key13": "49gMAjCwADKJrcF9jdjgyFXnq456VieVzDweeTDUaXbF2UnaH3yZwWQFD7VPdSZ8eRuTMHhndmsGoHCngK2sRqLH",
  "key14": "5cnSZhvPQsqWuRKNTX33FMtmb4Qq7K6RaPX8VRkNPumfgtx2ZLZYRED3mqV79yWEjjpgJMhdS7aR1fKpmo7PRd49",
  "key15": "4qcGZVdrgWXyBq7zdo6xzVgvcrvJJArpLd5D1yjuNGN4A9VsYShwuLCQGmCWi7pWiFyYXqvAUPdGyGLbAGD9eoAa",
  "key16": "2wvLwAEkZiv1cwoGTGBXKJXnWbpfLb3zikNyAGQSH3hGGoKYaJUGsBuNzUPBAZGbP7hrhN6KnnyGZ3rzsyjC9fPf",
  "key17": "KJ9wRCVn5ZwgbxviTcCRVEyQ8xY2o1v7tdwsvUMNifPYVQR649k5vsa9FUuLKGLr4Ly4vuPoACuBkHFp62BiJmJ",
  "key18": "Dj2YTYhoCmLwYhHZcksPJenRkBKpM5CENe6fGGpzsGWMCTMc7AR4nCXJsPRPqfP5C5uKvbECkWQJnMnbaZDeq7J",
  "key19": "3sD2UPagoZRBwZFrLEP459KFedioMYyJDczihva1e7pwGX8whSygGR1mP8u6H7uWcXFfmb5T98MGEjTrsaAxW52M",
  "key20": "4s9vzDQqDkRsKLyF4fFgHLArA4ZyWBvaxddm3DeQyfSV2UzuYjoKdgjL9xE1AUzwMdh1KvKb2Xi7PbUXChzSgioc",
  "key21": "5QZrR2Wtie4WZB8pqrb915XtaLCfo1vwwVJqTknKmJyGZ7NRjqJJoFUhzAHqFnmCkCLbACUtCXRfQb8BFUts1zm3",
  "key22": "4DghGZeac9RUkDSbbsJTpJknEvozPLQPrVEz112YgcJFhcNAAoX779A8FHYYrDRNP7zQ4cSfevwr6dKfVWjXrwDM",
  "key23": "Xrgoff4uZqH4YuBNef1S6y9eMuP1eyimhwGPGxiNnCw7ybSJoLMBkURbpHG4netPPDAxTfpdzEYAj6F7jgg4s1z",
  "key24": "37CYevDnRA4VbNR6DTNZeNMpMhHwJNyVjXFa9mX2jr7Ynw439Tbmgt2C1QbTPS1QGhCHBYDscExMYpYEmYHs7NJh",
  "key25": "3TC2DuAeSBAAY6pzNH8x2KzXt6XpyZwX3kq6GqyWS63krEUECoEvYVEPAeSzfKVMN2ZcyLydduTCAqXGooadgYg2",
  "key26": "2Sa3GeNaUHA9n7RmfszuRfFbDYDu4VVPeKVf9pGEkSu15iK9qANVb67uUTDWTVWCqBjJdMcQasqfWSUQ4tNovPkK",
  "key27": "3ucSoodHnFqYyBpxuHt9hMEFnyqvgUwSHDsReC4f5cf3XTiVeWQG9BiQfVvDekuCetE2sjwPKtSwUWtgonPwuHTe",
  "key28": "64UYeGwZ6TRuLPTha6ydvk22SnhGwkTCHei75Z7jKTEgrnjqAEjDYG5NrvqxihMiweoNwBAnx9zHxfNkE8FounnX",
  "key29": "2brGkVjht8jzKQf7aJ9D4yGdBeE3UrLvgujVWRKB3fY3hZj4xLh6vWbe5JgK6Cz9aXxeUuGYYEYWkZZMQK9nyu4r",
  "key30": "4isfworKgoEfccBnUmULp1KUbWUCb7HrREHUwPyQcEeCzeSENQNt9c6xfvsrWRh6Vf1hPtvmZ6zuGABpXtrFNhYx",
  "key31": "4sBRiveUqx5a6aS313QCCp5ZkiJtDg7ZVNgGhZanppq3BcU3argRbdxL82sHRX9jTnU7bqkeXvDKZKxtXmHZhaDC",
  "key32": "2z4fv2SFHRVvDvK6tqCfW4Jd5cXLgFDiA5t5C7cUrjHNeVph4YuyHF88waeHv5kPWvECZeovxgefVCEfuYTVwpz5",
  "key33": "4Sz1z7ZmLJqSkd9K6W48AKbHVBDcMR8Dixh3YyPtQmRJYAEKnkFzxrG6v1heLjTGLhrLtPan5vdt4VobDeJ5SpgR",
  "key34": "qbsHnL5D8WeKAPbNWvk3xhuqwqRP8ip1C1kYfjcEd7qiuhKAs3v7DmtP3spJcVTqXw4Kch9bs3cwKucDkisTY3C",
  "key35": "5TNuejzyi3B55cT4LGJUWXqCMpP7F3na5a7S3in114xx1mcAhyMrnXQuQVLEaTMCsyst7ostAzeoMQLXXQxC69Qf",
  "key36": "2YtSrNikL3Xr11isKqvNq6Dv5k7boQENrjWTvNMpsdXgh7ZhdmzKQQphBLRZTYcRZfsKqUnksnc2Ub1prGsTGz2v",
  "key37": "5eLtprRHAChkuF63Kjd3QvD9sX2MHT8hu2NJq4KhQheJEMeffixwA4LE2ZwASE9qSa9cHB9T6KfVVTVTDfJc4sSw"
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
