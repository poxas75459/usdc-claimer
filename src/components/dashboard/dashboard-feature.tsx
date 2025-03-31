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
    "2rtBieWsZFdrs6yk6GAjaCHdbnc8faBBg8z7A14mAHHDwS1N37kskmWhUXEt26GJogUQWvynEHpaWx78Rjf963Pv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ymCsryS29S8a1m7JKFTA4yGw5TohGtyBhhumNWyGJmQpnb4bmFM6u3pap8WxEKomo9iVEJdStaG6uS2jt25U5Cz",
  "key1": "5htHRc9cnEw2t6gFd6cwH2poJ3nDBy18yeueJ48WenU2bKqUy1mTNyvu2bZdr7bpDriqfvrFucyHnzpKRMyBaxQZ",
  "key2": "21cZKkvPag7rsyuxNSzJMkqaLUW21cwPGeH7oBYvM9mLcqpDH5Mpb4By5MKtA9x4qVcBHJEgsLJt2sKR7meUyrAh",
  "key3": "3Ua7mEbVaMwQEGyWZEVnsUi37qfYs62QKyaoVWpkQpbY3VjET5SyBt7CRZ4zGnXfZon2LBHGeoTAk1BpVyA7UMur",
  "key4": "4dyRf9zcGD79D2WdqKNUyoKrngj2M1W4dTZNo8whSba6f1eKvyiaBZa79KraG4W4T3UfMvE3161sDnhvrZtzjGJQ",
  "key5": "4NFS9Uv7PcNLsquXfx9JQzs6cTzEBLStCKuJ8skdTkLg7nfWbeu4FNhgZH9n5wQcdS96sKsJ5qMhKogWikcsrmH6",
  "key6": "5uXTpfYMd734drUoNXEyT25PKeHwTi4rNCdfievzgHd1GfrvsGEHu6jDSKiewk93NDYtjLTZgQ7Q1TB9BrCgtcSw",
  "key7": "X6muF9KdyQgwSYuUqckn8T9iKJXGTMxK5wFDUTMqNQJVFMasziKgbeUX6wUh81qXZkRYV5fXj2asH3wundWpZjh",
  "key8": "2bNkLAA3BCBLFeyiPW8hWZx6TXk4LG51egcX6hysoPq2iRJRNXFxNhh7tewN7WLqRfgeMtNjeJbvzFqCsvdGwAQm",
  "key9": "5Ygv73J6G4ef8KbEq7fqVPEovfCaBZyRxTvm2x9CuwWAiiKMVHXXzRqGfiE9RPrKgjD2JRDY9X41K53CDpmoWZAd",
  "key10": "2Jzcm1Fpm5ukKLFMutyzk7Z3HSU6ngUsbCDhZsUcY8TqVujz18Dj2jWKv171SExLcjC49Q1HFiki81pVXUkBpLqV",
  "key11": "2YuNj7fcp2QVbRMZ22gLUwyg9HH4ABPP7PpvJU86XwqJDHMZQ14K8Jh8Bx4YncWsRPdSgwndxAN6vaw7zNjgqFXt",
  "key12": "44mWkvYvUNhXpXTQwoqDQBEfhFc4VuaD8BJRnCGLWRoWXLN3YQGUbHbqfGtSQq34hQeuTBr1iYJjhopBzTdK2t1m",
  "key13": "3dAdUf1qQ6tFwcBB6mFN5B4UBv8obABSwhB9XtSiYSZbhC1c4t3yQyrqx1yTrwxuYtE8Jk6GG6hsUXm3KYTikPA4",
  "key14": "svDgFDfXWE6VHYTVsg1CDHSRNvHgUxJhRBaWzUNHK4yDZfKDd6WQPoZxnvQedYkmGWJcWnEHHkTpWHXjvmbdchg",
  "key15": "5mMtBzHBydo2j8pmjjDMEuyjHJpc64jdMNQwEa2kskGq7JzLzqz6StaxUAcpbQWXNQxg26fRsfHLAUGhCQ5KDcrR",
  "key16": "3iVn66xkJXJ5e2TGAj42jhxt6P9jFSQxea29vpzhvfRRkfnvEqrJL6AKX8VpXg4aKtSmLtHNv4EVnsRfaLghh4SR",
  "key17": "5n7TusH2CVLF9tdR3GEHY3Kxmqfd63XtnpN3ANYmQGYeK6b5MLVUnC6NVRBpuLxS75tGy9sb3qfZXvCbtVHCs4rj",
  "key18": "2uA4XTTJtz3zGLAfQwLueB5zPt2eefTN6YoWEPuL1SyNHrjDdwggS5FksKki9qGC2qJyTzLh6mSNBuUR5sx1DZ3J",
  "key19": "4q7y46ZN9iccubo5h927tUbzWD73RSeuUbTcxc7TWM3oeV9r23FznpcnTokxxhoBBYRfXpypZXZSGQBp57AgzmJ1",
  "key20": "taqfq6nX9KWKhCoEgMvQR56SxDf1nqqbu88eedZcs3mRNvB99jexNyVTUag9p9vD8Z3HVm3fWyYaA7Zj8GAtBA4",
  "key21": "4Sw3LVmxkcKfx2dALm84Hsw8CgxqziYXk4DKVSw29zw1zXDWXdurdugQyp5axooEBEY1mWXrZ4Fj6wkVvCJ8kVKx",
  "key22": "2aNXYeGeGQkcFXd17LiDyJ9UwuUwBv3YihvCqqMEtGo8BSVf4w4VAb4SRBX9CekNVQMtSNDLBfxVoRMaeddKZhBt",
  "key23": "2cCSBbddELCsSsVsouNKxRmYuQww1nzuWPDQQiZnAfWD9KWZ4TN9vHLAfHHoDkqTwJe2SCrMJu2QLtNwzXCcSChj",
  "key24": "4vJxFoAHwPjEfroPtvEZVhC79xRrpeJz2UxUoae3mqMYCT5Q7Su4vJLxZiEKWUpwy4gQwMG9eRaRPkZVSPpCnbh5",
  "key25": "2v4n2RBouiatXq4vXLA7r14t3hKiZXudoDsfPg22tsoPdtYWFpdn155hqW1Ku6eBbws1Tg5KGJdaD5J4aWekTs84",
  "key26": "2mEjBQD5GkzqbSMt5mH9LrLFffD5YubPDWY1VY6uQxiw7fxW7MbXFA9Romf3CaDPeDM9ta9sdakLu2vDsP24Vc8V",
  "key27": "5Mu1Y7pZjiKQVzihz4tqmAg9xLKCz4krqf1fKobPggsFEUpyNbPCJkeKPwRPNikVxM7iPsy4ReFwWjpua5GtQiAa",
  "key28": "pbm8UmxUdYWemzqwF1vF2A2XzC3oo2f88YfMR6y64ansbSPsLKmcxTLxcmPEB8goAPUahio237ZHLdHhnKWYCwY",
  "key29": "66shryHcc3wKH8jxiNWirfaj99xok2EngHfny85YbQziNNUBsKK5woGuUrayQFabF2ApYLdDKycz4bRpcKup5dpx",
  "key30": "neknn8PsQh7Rw7QTpkF5oDXfbYL5B5v4XNn1q1L8qXy4KEAdgD8iT464nm8KMjYbBwYgE3P7dBM7AmcPxPLHMC5",
  "key31": "3FiU7sy7Ww4Xz6aqQispLG4T12CiqwFdUaVJRCiRvrsb57KK1EVnyo8mA2Bq6o71ba1UGreTffea7g3f5yw8MAXW",
  "key32": "35yq5GwrLU8TBWcSzwd3FjJHXuwMER6zr4C4mZU6URVgHJpJYuJJcut6uyoChA1NPqzMw6611DUkyjRM4hyVYHkE",
  "key33": "D7CV6CK35vmLLwzdUt14D6cCT9RjKNM7nGwWdCBfx1LB36vDkMpAZXge3Wm1hLqCZ6AWDwoLzuywLahhVKvgNG6",
  "key34": "jzrByRRzEWBpTceunmcimKcVHHormvU2XRrJxNJGMfXfuXUkdpwemFBurU2agXDYLeytc4HrntivHFfubvTjEve",
  "key35": "5cdh5yPEKnkpgXShT1E8HCusQEbr3dPReNnRw4ksrQujGuZ2wHZJBfxZk5gD71C5aS9PHHAZ9BmytW9SM4sMmW6G",
  "key36": "3zsycTwK7EuxU6YjXDekj7JBVZkXE5GpGpGw316p3YVvaxopXLJEUsVc9qMnRJ2DSjy7SgqcPimjXZKTvsHSdqMN",
  "key37": "23zvvBKjpi7BTPwAuDdspEHMU1T9qopvkPuJzbeRuQmvzbzwoQ7dQGQUvLCsstSbxHGLbEv5LoFz1gZit9jLXt7y",
  "key38": "4MWFYk2canUrVXWMPdJYeGmBJ5PoAyLjZVBP1Pqi2qhNF5FQeBNXHm8MytejeLdZHSaDELMCFCTdo7KnLHWKCy75",
  "key39": "2mMu6ebhfXibMMhXht14dM6TqEL7gVFMQD7rQgTmCP4ZEgw9HJqEU7UjZ8trdyWXeWSuSFme51kqJJvsEiunK5eY",
  "key40": "vFQEVV8Qo9ru72o9NzNxrrqSmkobBMKPTiWVmxtWVSuHLzv7nyQ58SP98bqeTtYsZfiQerGkU3vt7GFoCCCNxme",
  "key41": "4BkWe8fHTnLj8z4jGVUez6EAqmJXQkvgx9bbW5M9vKiMtdHHN61rAPFv1LLMJbGWihCnvFkTmXNSX7nYHTKqhrz8",
  "key42": "2qNmYA8qVtFMhU4zt1QMAQ2T7oKCBXDD5rdT9puJbxHxNuywuBU7tH2J3MUUC86BZWggUHyejRkYAB5DQx9vfvdF",
  "key43": "3R9zQJooeTj4BTaYmmVB1cv8taebVd3fywK68uc9hzs8LBLJrQUVa17zLKfJJfxFMdPsumRWdXP9rbZHpdhDNJjL",
  "key44": "2TkzW2QghPum2Kxu316kZi8SmRgFchJUuTazRdk2bUmmwi86YiEujuHuQTNKL7seoS5qW8AoqoWTWLzpYK1RcTEH",
  "key45": "2FTJKj9wMNjuQhngdKVz7iQSyJAhEicwqUh3aeXAxGSM2VuFPJrFfSePj4VBjF4eogMmqGZNQ78PM7sPM6HsTYEv",
  "key46": "5YG7BYzhD7hbkWHVCr4gtm5UqzoTKBBwzVqmoy7ABPWLCataTLkFYbVS3gTsRihyGpCaVeGgoV2dZWVtSvEHZmEc"
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
