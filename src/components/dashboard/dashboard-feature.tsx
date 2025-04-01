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
    "5Ky559Zkw5WxMqo1FFdcN2JtAt65nerHpDK475PysKGrfpeKzQe6zViFyHfqwQq9G9XSRY32xnqBfd7BmQZo59B1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VzPuUNk9j7f4KjzwdUjfmp7DoANhorCCifrEkAAGLDAAf6WpuSRVsnoSDoCnZ1bVsFspW35WZbf4TCrb3cBivq2",
  "key1": "5AA6Cyx2VQd6zW6ubvYygZzpLHL9eH16bFmkuGqhRGZX7ZBubcBXzsGC2smu8E5GZgv8qkq8x4VKHiwk8sD3VfyN",
  "key2": "5ZaSdJKZ4rENByztF5UtkcWdxFXWCe62oq4mEZbYaTZZCRvB8PtjLB1uc2mcvtkXF1zrJhmFuGzvCGgyDRzk2ZnH",
  "key3": "3GizRnWQxrAGyr56NVZm4SW11GHXNZkvkc2UTQBSJFhK9TgPeFDarP4zufPKeykiauHgmFxBRXzfo4F5QqWukfFi",
  "key4": "5UtEdLbipyaGkdSZcMZouKVzNBMongK3SFBEuURcbTMJEtjSgRB3DfKr9kfeg9JByRCUsTp9uEN1UQjnLoqyJUa8",
  "key5": "39EYQiovzNEdGEuMBqnhWTChmTZZZw9UHPyLXDuumqDhSVKvw7MMGjgC44XLAy4gup5pYiJiN6CmiK2DEZDjD4yj",
  "key6": "Ju4ihjkpN7Rq3M6NMcW2MnFydSxRewvSuX7P1z2qLCfZ7Z8QvbNXPKwowPtWyZ4TQq75Kb2wUsUYjjvVwJzwDwu",
  "key7": "5yoHcJhz7nGqZpWyK46WcYMLSpY5n5HDYYkKz4BNEBYvwv7NZfZ29mWJ1eP4WpXvGQRk6MEbuXv4sCFt3rQUtwBh",
  "key8": "5LZivQQBQFWLa45ra6LfiwcuKUM2yDJpVyESYFXbhPstLs3VTjNtLnKiYj85Lo2mkaQEqwtLRgsqKReAkDzKbLev",
  "key9": "2Ga4uLfBNbqGmcwiwf5BjDqqyqCk688PcJ3Can2FpyKJm6xdfFSqiTJorFjCwK8ZefXqyfwkBASM5EHjiZowtBq7",
  "key10": "nsGG7JXJXwcfdZK7rxNt4rZHKEdmp2LQrPGkXET76qDY7mJimD56CYvrc4bWGdzBddnwFDoYQCc8JM963Zece3o",
  "key11": "3jX6XFjT2UB4t5jjQo31DhF2qjdyJhkdfuZtxFpNxZJP6GNJT7e5X2MweRKYRDaxZVN3r1TCfth3uw5tvBFSmk7Z",
  "key12": "WLBMi2atPxqPcRBytALZLjCB1DcM2z9E2ZN69cH1HanPbv4J3c9zguJRBbxP5uTFapWn4pN6q7bQ2rri2hkwqbA",
  "key13": "44ggcDPhzkBzcUEPsbYbekm5sEw7GEt2V6iNwCcYWTHqKXPt8e2ZMMzbNEou2b6eByLoKHyoQerYfrCgksQ3zwNT",
  "key14": "ETAULnsE1vSUDcnhmVzVbzsTDuKE7aeuWBU6fsjfsiurpQY9BeGkzqywPZHw49S8XLF4FaGLr7dEpsNPEm2WR7e",
  "key15": "47CHZzCSt9CxHC5jtL6HtA1r7rUfN4oL39253STGe3EspzhSJiy9HCb5PCxDfm9nzVLWQrerQYDxSamkQ971uzwq",
  "key16": "258mos98eXcckXmY742LSnXcGhQCSmi9hcaPoE9XEJ2Vxp2MV91zYbrW2zfqZ3A5FiPbXwPK9XUYSGQpYLGphSLh",
  "key17": "5vuArZYtEYLfxavWWsoQyNPV8MVHWTDoHpRjPBsJiE52Ni8SYruGQQqKNnASHJumDcP29cbAbPTMbfS9vbDLUfjv",
  "key18": "3aedxRwQvHQkt2rakfChPo4GHFduVZv3SsUqWhBiL5JQtNBpzSWhHvtYet4CfJakdbCP3dmS5kgCpJd95bcRkiym",
  "key19": "2oiN4Y5DWooW7NP4j8H4tjp7MgExHhABFyHn9f5g9WUQu5iRmX6Vxmuzq6sj6dQvywCSrfcDNvHtREFhW1xwfBtN",
  "key20": "2WenqzKnZiP6UrqC8bRtUdwzpB57N2oL2wy8Kj7GfGZtwcf5c7H8inKweuJrRBUpqzQtWg7sfrk7CvGQ1aVipPY7",
  "key21": "5qeYJtsGXbrJX5nssKCJ5GuAveAhTxy6S13cen1pWHsn3ebQ3353PjG9VYVEKs3QzgxGWUVYYcGb6N5Lwez4ju7J",
  "key22": "3L1bckPvarFpg2ySiCeHWW7nVK3dunTkF8iiSnDrtMrVhTJAoMXV6KxZPZJMFQkqFN4L4foqZH23bYSAHR7G66Dw",
  "key23": "5BzrKptQNw58qF2VXktpXiYKHHWPiv5yicbBggJLXGfs2sZjM1vKiAXJQ7KZvNe2KjeRgrF2pTMfgqfKtbcMHw4G",
  "key24": "49xMwGqKFH94U2EWkz8zomWZearfU8sfzsYvu7Wf9V3ofETUWxeGRuSXeMkiXKohfgPCrW7TMkBwHnN8NwAZg3jh",
  "key25": "2NXGgTnmSCfGGKSwng2JPS9YVDUHm47r52iNXJ2g3dWVNfPd87YajgLVsfEErgcsukiXidrSuSASTDcXsGQEyW8i",
  "key26": "5wbYBV27TsFCkpVCHaiZHRuAWNgQrap4Si5DjGTK7GAoyyUQX7s8MLwvxCxcMmG4RYssc7mPZ7Gi5ao3Xe7KWUtD",
  "key27": "5Q5LNZgWds7AXDw67MzZZbgEtnTnM2hETcNLy5NLJdyv45hu5QTrdnWNWARZg4333T27r5z7jtES8MoDgPAYu6i4",
  "key28": "36rQazYp5UPFKsKJNyEa1zQQzqfU9aHdmYFb19i1kfsWbwtqFqxgGaqD3xETNRWQaj2YPJpHryte1Yn6wys67GN9",
  "key29": "4cokKzzdNiioEshnD6j4CfSWjiS5GWvAAcCNUrZ5m3PFT4fdrzmkfKVtdym6UGEMWoV4EYLNjTDZjo7BdVxqTwRc",
  "key30": "2b95vgpfbBEXUqEPK8jFWpyYZxUWBMsBRapYvMeMFaYVVMnP58ewLJP9Dbw4r118nNhZsdvKaeSjHpkBEuxhiLBi",
  "key31": "3PjjxRRpNijiZ9SwHvJkr2CokqRfbR8Z7mVX89xxv3RzsEckye1T7FYswx6C6KSRTsc13xbEy9fyNR93m5fb3tHe",
  "key32": "4cMatDDa3pYU9dpYQ9Arp7TUqik42jQgjn8mbYD1MskiTxgqp8uMCCAULqUPWgS8EsyrXHvvzN7XgdBfv71ag5YC",
  "key33": "2dq8m7XE8bCRM6XKJFZehUVUQKuje8HBG6puqbekBX1jSUPa7iVbVRz63o8gxH7cgMUgKJXsQdvBCz9cREcaDWUF",
  "key34": "3EyZABFiSbFLheCiLWtEQ4vF3X6uqRiAiW1uEtihWDZGTgvPiPpaQm86W5gxvqwWkFVenN2yKSt2DaMqSWSqPnp1",
  "key35": "g6s3WGh7JRBeHNB9j53BD77g7o376kTWtRM4D2TnMeBUSxUHzzwMBNS785HK1uU3fM6UVqLYJRmTwq2QtxM4Wrz",
  "key36": "3uVVLYG3RahLYgmty4wViwryFXbo2DDHmUyYd3t37jiJtdQ6JgMVvsg7hMoyxUs8YwHMq3KwgbpPD4SWWxijVkdH",
  "key37": "8rw43v1NGUDfNdEE5WkfarBtyL3XNLm3ySMTcSBi6Z1U9R1smeTkaFgdF9A2WGEC9sR1dVSv9mX4VzeNdHiAnCP",
  "key38": "4UAGf1ZejU4LkW1zLJ1gBEG2rh5mbETF9CXDBj6T5ZNsY1ioFCngtY4rRqmNdybuotGxNBAf9Dho52UTFxd5YHeY",
  "key39": "3TdVDQZFyEczDxdth5mVScdS41Dgv1JELqXUHudQGqpjJUaHhUnZ63rpMBLjS9pKQc34pzAs997m9oEWQdFEE1Jn",
  "key40": "5CSMNaw4Y8NdXP8S1BxCWcvLQCdYsE18Agm1bvwC6MixC5xHU5Ze3hAjun2R2NijAvnj1aj9f5XyKV3EuwEWqeWK",
  "key41": "5Bm252u5kxgc1xbkAXpASwiEEHRRFMvnqKqcYMohjL1FbTXcC2mi1er62wHwEPNz4BFvGmg6dmPnMYdqhgDaotyN",
  "key42": "4iTNo8uMwNfNYW15RccHMMNS517yCXe9sueGkokbuCcbY2FtNF6G4ZvTCUXNhdxpiWnULjsyvegr4RnGBS1ZXpoL",
  "key43": "R6tpsRCF9o6yrDs9NSPcupgSmcpEYuCzACPPVrj3ex1AjtGmHStp54qjkegMQgULyUpK88um6fBs4DoKeKDQFUq",
  "key44": "yVv2LxMNJaS3nUjZQqZNKr7H5234et7EpCEgNv2FjTFjfyd9JjJ3XkJh4CichYhdGS2fc5SW6GmcPsxgMFDTuvY",
  "key45": "5hhJqrxBDXXXaju9LSCM1B3h7NbcrmWuPyPteakAPKoCVxfc5kXwHYCiY4cXZRavhjBP41yBbJip2xiQvyw43KhU",
  "key46": "2JHYnX2P7rZP8XT4KtesSKcnEEqgeciX7XXKh4jNrBAbMHJ8xYtJeeKx9Lzhmr5npppcg1BpzpzCJTqzD8W9tTM7",
  "key47": "5QqYMTDnFerardtyoTc4UijWpG1ecchcuzfy3wKxFmwc59jL3nDdftEKqcP2Mve3hRf2WPD4niScz6FZXdvQAagP"
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
