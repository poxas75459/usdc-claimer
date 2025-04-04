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
    "3gKnLfLbVvdwRr5V7EWVAPhYQW64LXscsSSiPNoYTXjRzCSEYvP84WnRJmJ3MLKUV6eW3968ZgZB6yx3X26Ywkm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cQJQkoWowpgguhk647q7Bon4CschxGn59jp5LycbTSUGhiwNVNbdbgt8EPN3aXzpooDcxDNSfWthxsMvKLN4pkq",
  "key1": "2nH1rH2NG85QwzYnNAfg7CV7u9mM7pTbqBTdnVtxQ58nqbqgbf6eiGSV5DfsxusvxaivykptAmfTZmY6GKHSjSUJ",
  "key2": "5ZJEYJQDtHzSpNSDT7N4aNCKoiPkWjxnmD9BXfzWFYyMqAugrbQh1yBkBZykAfc4ZNgd4foSLC5jRzyhsbELY7w7",
  "key3": "58LPq2zijtTqBr8xvfgh1iH76P8thZg6q3edMZikue1tEWf1kp8KBbX34rCBRWLznmzg5FVNXcxUuYWmKk64Fmoy",
  "key4": "5gGHdXbLDZrFjsiK5MzQNyuPU69mH9BDvFpeX7gjmrtqzTjXQjqpX7rmUrFXR88iurpQZNmBQDkaESb5XAZikRs7",
  "key5": "64rkYdYEFVQzBMckzeAyrGYw9DzTMvVjkde612JFhz62snBY4zSYVvv1VZ8WpftfxKUed9RuX5B2aChBePBzGfaB",
  "key6": "EN73DDaCUdgBcX57ecLUrpsCYz1cHrSap5d7MB3tcRXNiXVLstRZc88ec1ZL3j9gbpiaHqAvpB9KCN2KGWtDicQ",
  "key7": "4tEwCDqEwsf3L3ktawvZP3Gd34k1DewhVXWpUztJ3XUMt4UEAGb9Lo2dcbJugUse9NDmDEAMKK2d4AustHYPF6vJ",
  "key8": "644wfg7oUkfNMdN7MBrsGNmETpLn2Qxj8trUD2JEP2UsN4E87pL3937GJfxKuRwjst4PG8MMLtmMef68q9nRQoVN",
  "key9": "DFxVptzJJnVfgWC7sQFy7WfQBrPpB5gdtiyZtH3zfKprJ2DBs2JaPk29vsJeKEEprDb3VzwNpphsrNmx5rXkfir",
  "key10": "5DoCco4QPnCCmpGYar2k7nuPVRNMmKkH5u7ks6pJMT88PvgpFgcEsqyyJNNgm6SHyYMwfYdi4dzCguTHvKXTeVA4",
  "key11": "3u5EKftxdjdubBiowmnHWP6WxjtnAmuoAxPuQDdPe4bss9unaYvLSrqoUc2qPhYdshc9gwapLv5mM63UnkrM5VYW",
  "key12": "4Vjp8jC7caFEYxD9Eh1yjh3tBqMabZ8cLBVPkeKscWBBrFA4V2TRW9Wz2GaBdbBV6tpGChKviUVg9QDBPTAYkVyD",
  "key13": "rixuTBaDrt8V5zicaKmyUfVPRX355pV1SvWkREPhg4beXwuwvUtArf8myneLCBp9voVG5yMcXqLAPwfydjQyW1N",
  "key14": "BVTKuR6Ewi6Ck42rMML3N9VPmDqtZBDiDfh7aoEwsovSU4X3XBLFRWNzoeRWEKTyeqjQvhc7jCH1rvHHdJD49qt",
  "key15": "5eLC9iSbzUfAEhpsTXrYpedXtvZDTy3s1PMJqtnfA8L5KBS8kxJAdQWrxWhJEbeuj4aJYAUixaHA5UdhZ7ASPpTs",
  "key16": "2wBjfJATDSs97udTM9E1o27vd6ESREwzHPUyEeqrZ3nHCNuP3HjZhvkrCsUCBuxVA587mxYJw2jTXAmDCGstCwdr",
  "key17": "5YRVxneichs7ySH1PbcLZPa37WgTrbJJDMC3EV1tugey4poniQMXzn5ushnjcuFcRNb2xsKeCx5ZFWdU2QkrbQiB",
  "key18": "47SmFtiK7KhwoHBPfp1Z2F2kjT1nqx5AZefVJecakkuAkEtn6xmXwE5ocsDpPWqaSUSiGzWG2QegcMRTyDdnhUwa",
  "key19": "5Qbi37uu1grt1SiERNRWg3dznwq1wG7jrhvhrDoqLi5HVQ3HY6sUYT9eG2G4tSMbUG1roywdtbp3tGGtLDSQUzCs",
  "key20": "4fXVuNY1JEgB2ZYtVt7nwQLTo2UATScSJBTrkbkE9BwzFu2sD785ZX96pnUmRkmEX4R3FyLfR5Y4aS7GYPxBqMaU",
  "key21": "2faV6V7TG6yqkAFY3JRphNZcz6Eeeiof6e9NFJDtzRDNjFMKTkaGB4HKEjhBHMAAx8J6wYCQmCyBD6FoskNKMn2E",
  "key22": "3EPqRjXYabRXVocxMpnvNUoetE9WGNbAzofh7TXgr6nS1wJQgHAnYeHWp2NRYGJvfKKcp4qYfiFPUTHzHzEfqDjJ",
  "key23": "ds3TG7eR5i17ZPgwivYX49REXLsbjtyseNVK3fJoJfS2rKs3RQtbwkumcssZhp2KapXHyrcYqjfp7YadX5iBphW",
  "key24": "2pqTb1NDFCGkzPJbcoHm1Q6aDBAakJ6hnevma4bZSCeKR5r268koAELpDcz9MedhsFSB8hn7xv9GLtn6oNJxd3Nd",
  "key25": "23gd3naTiFp7by7T2jxQiV6dVqZrrY8Ea6dtJeWxJ9q7XQjxX3vh3hwtPGri5HBixZ36n4V3Bmop9GjCwqPHaocL",
  "key26": "4FKXyNr2fdtuA5H9GUPVAmKyttUUu94xjHTvrKsmB2rErncmHW2KzqvGnmHBjMksPZ4pkyeHjs7Y8GKpPD2n9CRc",
  "key27": "2WJEbTuPw4RF82uyQboMCczUx4eQCNAN71Z4EeJatpqeggjQkTdTZZoDudwBk5k8XSRZ8AVcDjGLPH4RgopvRisG",
  "key28": "aqR78aFyBf37e1Vr88KPcedpBYKmjux5XkaDsDNAvEJ3rQGTeD9YCC8rH3DGagwjZn5zVfD5qvwUaG35cL89Mn3",
  "key29": "Xb4HVWVUc1f7j7CTmXpW4Xhx39rF3B7epbdTDY23n4yB5HJkk3kmkpHp6FUA35juCBxjA6dX1GQCdwwCCHaLTfL",
  "key30": "27GMAdCRpgFy6TuKu72yVAmQnP135H9W3pZqrZiVURxvj5gt1GgH9kPWYjQSqYRaGd3qfZQrydYMD4feh2p9ZBqS",
  "key31": "3JGo9BsJRbX6gn2ucSjV3qZHqYaAjkhiKAbKm5PoV2yiBBvFyQupNJ3ZoCQmGbR3EJDXPzVdaL44MvLLp3Vnu9JP",
  "key32": "5nofgzgLcLzNBZ5GKWQsiGCtSDuBb7P94C1vho83BgNvdmuR3wFJqpxvDmSy94djFm95ABpr9tuH4k9ZpC99YUAr",
  "key33": "2ZLNQ2mU9uKXPNhQbQXNYnC9wxR8htDQo73ChtFkzyN8VJpYysz2zEj5dFMGFgpNAbP3KBH7tkC74bTC7hnA4mLD",
  "key34": "F3b26ECRhPA1LJnAHJ1RP6j2TWF7UdCokFEm1UYXENstKBHQMQ2JuezG2rukqrXC6GXYRoQmZNvcpScMBMCTMkP",
  "key35": "5hc8n4XHwbybKEyvmf3BPyXdnzwPJR7S9jT7vEfr54AcqYb5KXpJqX7mHrbGceZi3J67XqjRumSrKd1A7wmMKgF7",
  "key36": "2nb7uD3X6vwnUCrFrVmy69YP52VKfHYkdVz2uAigcvC1HrUWTEo5NGFZ3F8C3MNuCVNXz5d5Ugy6Ju7HTXhJw6uM",
  "key37": "3kRkfSUpidBUUyZxZsMxZEuXoqsgBQnc3ChmvP3PAYMotnkRBmuT2rkcFJwCnDP233dFE9RG3PSoN2quJy9Be5bk"
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
