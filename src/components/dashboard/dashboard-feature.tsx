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
    "5LW1zSZxDLpjBnECVg3jNx4CRYYpp7YLunWBn2RVqgeCfrMmf164v3gLEV9wA8apEVfksYFmGuHBvYxEKyf5MK2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j7a6adtyuv2KuKh4zbhBe8NAZSKkqa6uYvoPV5vh8UMyMACeWxfCejx4h9k455Mr4EV4LDmmVeKgn3gPH3LAdvQ",
  "key1": "yjbdpzEUq1dVDkQetgtjSKE5kRF9QZ9CVbjAbawAd6bi9Cez1R2zcbGarHJ1Z7gEc27Wu7Tkvz7gW7mz7cGi1dz",
  "key2": "QQGq2coCi7Dby7GV9FaQRkyE3m3XKTJUEF9xvwCLyKCqzRyDnB8Be1aomGvjFLQmYP44Bt55pJ3bA1JV4LBXh9c",
  "key3": "5T1L2rtJCLh52QYxcDtNSwQPpUnCaQzq4EVKGMuA7LoJz7Y2YNq1zFMjANNStRANH1wCERt7Y7RVmrpABCP3XrY8",
  "key4": "3Tct3MBrg5tJDD1FA38WwmVk6fZnJY36qXa2SPRohZQipGn1LMdwcSeeeXSErnPavKawcjT6AzyhYYmxfn3hjaxW",
  "key5": "3r3bDaMTUJUJa1F3Mhds386LyEfjtJ2HLWdRRywRk6kFfBgh1sukWSzKHmzbUeFBWQuVrchpRpiczjP38GUWx8Ar",
  "key6": "a7MiuYv9hR8ftNEwpgpBamafFHvfZm3xF8obACjDAi2DEhmGV9aDYpcoKVLSqFqiPFRiGjN9jLZ9qfkB9EN7ybU",
  "key7": "5fB1XRKwHuZXL5QnTua23MxrvEHLiumi14szsG3tPsa8etJ72d1UNcad81K7hHJVHfQ34ssJ5jekuBvimF1abu3k",
  "key8": "5wfzKDUFBrYsxGqyKoszAaWb1keqgnA1sACus8zQSr6HPgZRCu16u6b1gapJdkzxU7616MZ2nX3Sx7xcuejouXbE",
  "key9": "2tg8KBPgfaE8j5PvcMUWYDcVQQ1m7z3S7LUHH87CZKvzmj5UgZ1XHTchizNA5ij7nXJ8JEGxyrbDXXpLG4p95Esy",
  "key10": "3grAiHEPJk75vBFWDrbXbnJafq8frEXiJFbS8f3DV3cyuuXwkqApsQpch6YriscVQMFWWWvRAcRxmdkLyLnzANLG",
  "key11": "5VWvgSBiYdcLhUwHz4fvqVFdWuxFZRL8WTV15puAWu46KGHM86A3SQki2DwVNVyQac3d1C9upT91jeXJieQYz7W5",
  "key12": "SPRk6GYKGU3Hno51CMazXFAcNFPLLGd2MWswszRdoUpZSfiEiN5H1AfANoHVH7zF5taJH6iC7r3rtXWDVZwCCBt",
  "key13": "2K9JhZKVCTeHWZWmxYhi65DtbqAWorgVvbz4tdhxvTjSaUuBFQnkrf1K8rNMQCehQ2muT8vD2ZLtFBkqN2KKirc7",
  "key14": "2SzJ9eZqBn4iNKAiLSEpJ4SSRHdYHb1HXo8JFbyKBkBFW1jVjfKn9VAj9jZdxX2NaqGez8ykpXYyA6HJFUXBn51N",
  "key15": "3uRGXnUYJ2wJg8DnptxncZbESZQxC7Lqc6qoB1GfuBwz1NkseNyt8wxBnAnMqjYE8Qi3525GtnZ3CpaFZqVnssvo",
  "key16": "GFVgtYhdyL8bspnshs6J2y9BWQWYb7u9grAk3girB5M2HUxuEex5pxy5eVMruof68sGv9XrAMDvkr9zY7a7iSZm",
  "key17": "2Ky1Xxztt9c2NxWGDHrjBKs7kXKo374Fjf9AsEUZJ9eGDw2KZffrrjfiSJis8f39g8ZBedgb9bLDUNAT4WGETxFn",
  "key18": "2GGFriGsrS6DA1dZQCbrjvpJEKfy2qm9Ux56KwTQ4SNYUrGwE99na3XA9B5Q5q1R1yHEUqyGRVpoefNqGcDp1YV7",
  "key19": "4Dj6qjfCZtaVaNWk4ZHV8hHQdTjnPpa2LuJNXTBeZd8DppT1rygdXfFkGfQPEMHknZLKPjGA8rD6KiNDdy5Q2cog",
  "key20": "2fjk4DGK9zipfcj3ndcTs8K5bRDB3EJHgDrG22KuBtrBkAFtWoG1Hn5aG68SXoHioHmt4JZpEsAckM8oTLKYtfYM",
  "key21": "5b3bTWtuiEEY5yhwJjRg1wHMS1wTp6iC9ePVu8eaFJbBqF4tLKQjXm1iUThRLmVCSeVyceN69AXjed4M3ctBLj8D",
  "key22": "2QLem6Q1igYBcSeTbGotL98GQZS2rxFvXaf9r2YsUxxbPLskJVjdQZWKJ1jzq3TyD6TatmcASXWUTFFmZe1DjVAS",
  "key23": "2f35hwLuaGrKUi3Yf8LEjCSUGmmRqBK2YHK1SgrsoPa1CoJx9vNTo76DLvtWf6AXTMHMg3eUAxGZSUaFF2J4X9sM",
  "key24": "5JhAw1UjHdVZkxh3HbytANqPkcc3qM55cvbnVZvnJvLQyoxJ1KJVW9z6DL15FTyfLZs2JyobNLYHLrAhLEsgBGnP",
  "key25": "4TtSSFN9mHCY3vMkvy5keqyXYfxZJx6Tj7PHKEoyrGtiD4eQb3px3azZfeUY9EbqX6EJ62xaToL9Pc3ETZ59qwdX",
  "key26": "5mZwtAtLjFXbqysPXCDb1G5CV2qKr1kkokGeRxaQV4XEjwS6gNa6ZVqAjCq17wnvgaNMmpGVEBkykEHid3PkGzmx",
  "key27": "4saxGm8jnrGqCpciWfpouZqvEGpwjaHHTzoVQYK5NyjZNcMv153Y1SoiqqBWnAXJfg3Q6s3iWXjGz4WpTCPbjFxk",
  "key28": "2p3uwS8ro4DseYofJbYzTvnhTHNqp1y5nsJsooMUmta5DpPdh84HiKNbbSRTTUia7Vx9n5BS6UGneCxPfv4A7dVr",
  "key29": "5c9Hnr1evBQnaHdhea4hduBgLY5F8CgpGCFh6jvCC6uHVXmAhYq9R972Vx8QyubKYU6aKVH4CfYPgjXVAuu4LsxU",
  "key30": "GwtLEe3Xq4uBBtXmfYhUj1wjLuntPGwQmeAWEM3NBTJLyMmUpYfUa7Sk4aFt5Hn3fhiKmjZbYwAAmySBwTRhX9o",
  "key31": "4ifFbKtSjbcC3eLufD7rf6nGddtg4qWnDT7CnZ2ftfHXpG1YDMYfnxw1N78eNrJhRBkhCJbqvRwTbEepyYQ6ua6d",
  "key32": "5hAHsUpomL9PD99mPmtY9uWtQG5JpWrUePCf3UPJxuVTd42cN8S5J78Jayzujdr1qE57Mmgjq1N3QY9gb1nzDHPV",
  "key33": "3aRbquoZrfcej9ooSkbTa82nP3UJKUWgGmTw1BLv4QpVrMkheRXS3M3NgaLzTFDYqAKfrzS1FxdpbRrSNoPwVLcb",
  "key34": "59FH8xHYTqFy3VvorA5dKP5CXzX5E6zi4NAFXmBW2gygV9vg7eoCom7wcWGcbHHvgTdiMRVq54Y1FyyKXPhBDZgg",
  "key35": "5ChkQNtpMfVCziApBNwZxGvRLBwA8sz47QAfjh6cqQSsqRnEsasiN4jnt5WpaDaP7xzBwsSiUXfHzqFyAuWAZk1L",
  "key36": "HdfiK28rjcaj1kZYGaSWnziCtVVVqzN3dq2AGRUmXgKnJNJgv46x6SsKrkWfJb1u139UwiHvRevy9wcvs5pgyCy"
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
