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
    "29ni4u9V7ZAeyyUbT1mmx5tzWWxs5aETYdnAUabzCwRy8TKcqqMFyT1Bnu3ADTzB72iSxUoTVmfVbGMyav4vNqaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MDMbrAHdriz2jZHTpKGmUh8aN4kNr32WQKPDLGeVF2JVbFBDWPEX1Sjzh11cMEgJtGCyUuSGZqafA2F19F9Zo77",
  "key1": "3qZfBJVXW42teLvKKmVQbRPXScmjCzhSeXuMJT2PnBoREgw1iZLYPurMrVmRgKMy1V99mXDKeEvEgpXGKPDtfrJH",
  "key2": "5kjHJcpbGDqDoSSSdBwKhdHoZt49VLtLxuauWZxGNKEcTgChTZz6BDFvmfi9Xrh3uRroVCwaqD9xUHgbE22juAF1",
  "key3": "5R1ubX9dXmnKktb9VGNwWdkeXNmzaYKVeCatE4k7ygLjfKoBNKUAvwMzXjVEZsRPQFvW32QBxz7N4EvzEmCD9Y1X",
  "key4": "Sm33A8Lf8sVDemJJmKNPVC41jPtA3Lm3Zg54nTHAvXpjPEM3ZyjzYGXNPmRDbPZQtPK2x3W5SP4FWq9TCc35C2N",
  "key5": "5BNbx6DQuLXwnZCgyTChrqVdQH3bgKhEPjqbSTkr9UcFETywn4dAR7n2PNDKXWWZtGR6tX96LGnbJ8imScb5JkQi",
  "key6": "3tcKiSKwLpNDSYPayPT2k5F7sifmEbBphNCEps3RBYkhFFke1A4FvzjkM1FdJ8X61mfpWaCgimo6CH4YrSC3rzt1",
  "key7": "2S9Npx6FJKjMc2A7nWmQdssKhNkkFxh8j6LVXCUbW5f17mrzbqQr3nJEACJz2fZ8m1v8o29Df4U1aGjfHrduivKz",
  "key8": "5v3qqFb4zwnAszQZFwV4WYx6C18e16yPAEGNJxvHrGmnUXzfgbbvm5TPbABDfBQoqhC79uLHxcThudY9jXiMWZk9",
  "key9": "3k7Vp47EEPup9QdUpkCFWwZkXHMVGFfYdLfWDiaJFbnQdxdGRayBCC7VcVMqNJ5HLrJ1hS7FnyowHB7nqGGXaL1D",
  "key10": "3hW2HTmGYDAn68SCwHiMHWA642MSyp9M1V8jjEG6a4PR7yuqC7RhPZ3yDNHXDW67LcaHPNWvQEAhMxe8biSgwTiN",
  "key11": "LCX9CGZdFZutzxdtwMSrgWrjbHk2JHAPbeQFaGUkxaJAZDcvF3kgoLHVVC8YHxRXjugdhSz4sLfZYxydMhwyQe2",
  "key12": "3wTt6aQcNSWLutRduygDX9RmoL7CTNNsg8keeZq1DSSSeepKorJyEvM98JedPTbu5KSjnRY8RfHwaZ7BeJxMiewB",
  "key13": "2iY8hHyytV5D3UuZCqtfB2r8YaJcR2qDNGvxWfidt2McCUeqYwHEuvGyDbMV7apvgYuxcxZWaSTq3MNXmY4TSDCG",
  "key14": "4hDp2SBEtR5wYVRyVyMgmSwXX6PavJcc8FGmxpXuyauojXXWZefcDihW9N3nbxEh24fdmpNRwH4UvQD3LFTwFdgN",
  "key15": "67D3Y5k4V3HpeSrDTZVBpzZDrUzVKzuwTn9mKkdN5b8B76vzDkudhDxqTHzg2kGfo5EacitSmXxYujAydYLeTREc",
  "key16": "42xh9sQPbeudX8wb9bxYa96uKRXgFfPJrP4vaAd169CZUGeJWFEz6mf5sgJNvNoPbgvqbTXPs3uRHBHqCCnQys6e",
  "key17": "suLs9nXJtTKhdUW8QwoLTH6pxmKP58tnxrQ8AU5KYaXupyyTMsyVGqhZhejSbqZTjvALtL6bF7h6atJ81wi47T5",
  "key18": "RPP7dhNcxWoZhSFSh1YztjRGhdNW89uzh55JqcNHrqbyJYZcEh2169yYpisyP19rTnhiWP1yBk1hoTF1eFzeNPG",
  "key19": "3pk7xRKnUuPN1AHDXXWToBTboUMPFTNgp2Hxt2n1GxWfT4nqwW3JEzkUcFDjAhtwj9Xwy4UTuLnRfo3LUUmhq262",
  "key20": "2BtPF53MdYKM8qf45SgRDu66tRgcKVULT8KxbvTJ4Qw3agQtd6VAtKbstb6TxXERzufLUX42ZfrTv4W6VacsU7Jd",
  "key21": "45JMAykfDFRJeuXnHAugWuxbxeceM8D9ZXsqY2efaJqgbA6ECWPRGKwu8jm6GMGZSZpNWzdZWPWjb6PNKpFNKf5K",
  "key22": "66FyPzagw5NKNkVqTwVJFVyynoXUb6Cjxizs71mxUyzEM2HrQ1tC6ang7b75AeNvxQmJKLPZYnuLPHayCekqsEST",
  "key23": "3TM5yZbTcRhn2d37R1qNeWMiaqGXiDsygRyA2HYLwyst41CYSKmD7D9YiBXqg58qRMXLT5GQGzLXYqJ59QFf7WNU",
  "key24": "28BWFSxgTNRBLH355hqJeQzrNhGjVwXEP75FsG8ztFNwWN1R3sd2RL7BaNhcaCniiQwf3QwzvfJYThkA33LPbnXk",
  "key25": "eoeVfxHTYUay6kAoRXMVByxvKTwgi1QqcyAztCSH5CguatESD9AJMiYbUr5KbGkagcQ8qmgWTF8VDbQ6KzXkAsw",
  "key26": "4dMPgDCeWQqot7wjksXMjNrdfSjLd412STkgJ6tDsXheK8TiCZ25HawK12i9vryGMbvAH3FgvjiSyCsfSmD4u2yP",
  "key27": "3JR3q9yoDkyWTUGem1mu9DcdLaszpzxu27UjFnR7MVgpL9uFnhX9DiFrBPqMLC353h7AVVoNJYvMPL9Le4un5GQ4",
  "key28": "o6GAQPsq85nuJ51MoqrVgdnS5zzETpPpEpsmzGfxvWyFqgSvfX8RyEFSgUHrUipzLZZ54QvskGsn1egV2s4CwDN",
  "key29": "3qqJRPCfgvXP1C78oE5BWoSzuBhPBg2iw7v9YPPWrjwQ4pAdFL6g6rQsQFHkdezmRiL6PSthXvJyM4jnM72oMCpR",
  "key30": "62MSdr5TtwsR1BCg5wvidZU8UjbxyyMDoqoP2XgsymmMs24rEBsWAmzyUv8UJJWgDQ9koKaCPhiwqGfcdtiv6Hpx",
  "key31": "2CTDS5SgHiWvN9TkaqsawCqkexoHqyuVcJyQPzcLpKfiFSCkwqxF35QSPWVnarxDqnoiATCGR4ixF54a3KkeEPX5",
  "key32": "3GNxJeH2f2z81H7VmVgt4vdQjDoeBeGi3EhwtdRG5yvtCAPAnWfTHGodMnNN1t562TVEziJAqfTZKX1EBXbTVbCY",
  "key33": "3xg9bCtgkEYfPRqPeqTrEMpTWvj2qKeNaAQvNxBvZMwkZrMNuDdRz5adwZcYebyUVN1y9QucAGurtN6RLsmQRe5z",
  "key34": "2QiKnuuZCiaveA6gHBae9tJas4npS55oR3fpVaswvfxjxpz8CMQ8jTNnfTE68myTcaQGZuxriab7joeqGMeUjf8o",
  "key35": "3wKAAcppJF43xwXwi8hnouov7JbuWFFSSwcstq27sq1VbZUTZyfDViwCpx5Zji1CeP3CimH7dbgmBBq3aYuyg2rT",
  "key36": "57b29w6b8RFHNioGt1mNFfz7jmqJSySL5af1cQgiqTPt1Z3YzQMmrw6FZb2kBmgkxkQj2ZZfXjRV3xjmeBGuvNYC",
  "key37": "2Dp31KcAeuibQhRXUL49QkDXbcTyKtXXL2V5qUNq9BzRM5PdQMkYkD1PPuZhhchVRA44MvRBaeowjSJrG53ZdeAB",
  "key38": "z3wzokGLU9hyYq5W51rpCgB19Qr8YvqffkH8ptKCrcHgQzJJjvQraWLx4gmSQsYvaCwbpSQijt4tchbfb5GbxBP",
  "key39": "39JUGvdmi5zzErKH8k5CgcNZ1N8oAjECqJ51qDZPzD3H6b6gxCHj43ZLjHbHq6gbAV97idnuSgxjkWbDXgkkFrfM",
  "key40": "2Jn7SmgBJNxayHpcN56xKrHPZAUw6zHy8gE5pnEP2NvRidNpiFPJeZMfKF3Pg4H5ziajS1bk41rRQNffaq2arebF",
  "key41": "3R5SWxcLgDi8N4np9aLYVEebn73PpG8XgMdqi8z7J16MP18JMivWcPKnWXcFBgr6iei5VVzaxTayYYiqBe5X25bo",
  "key42": "2LxQ6Ar31GzVxWk6e1Dt8Z63ornTB5JrzNQ549cmgQsdEPdEJKVQr8jZGHHn4cWKf5gEh77KMpT97Q2ADezQKLPF"
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
