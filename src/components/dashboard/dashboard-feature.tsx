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
    "49QrX7QTbUDj43yLJYb6BZKSsWn5NtNonRJ4m6Yj8imDdiwoRqriWuuEeGHBVHWJ6DuiPKniDDAARBAcnJsZcnEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eahMPK1BUtrtdYNybX1Aou87ZYobA3mS5R1HX3R9UquB2vcJUzFd3ajRoMk5QHwEWX6ZfbBoSxkph9XeQDR6cfF",
  "key1": "5V7Xn9zzEp7KePpASrywQDFbHk5wtEmrciadHsadi2wy38ic7ceZDNuh7ywqR1u1kcr9KZcuwMNamKfPTiXXZ3Yu",
  "key2": "37G5NoB8ZckSMg8CqsbjzqSAykqSB9h5oLmMMuCSKMsyApRnEsTZCseoLzCbVgEzrRwH9utMyLKwQr78BvKZErNu",
  "key3": "3tazzA6Xwc9PKAHbERtykivXhnBoR8ragN7A78RTEbjd5GrvxH8xCFbjQKh4MsAn9W7SAXuXzv9darx1iHh3KAAE",
  "key4": "3d9mLWd9UGkpfCgsbea7RRjv6px7gyDohRgy2RaZWFxWeKfuuQsq3mJKbD1B5i5FXn9f7YSqH8938UQg8BE449sJ",
  "key5": "4erQMpieYxSg9FYAuVXRBEj22QcjXLgPn6aNWrGaqCUCxt9TDjrtt3Qs2tQyp25FuF31KHeFxeDKPbX8jWogvbc5",
  "key6": "JwjM9fKGE2QumepUoie6GY4CJ1aRWgfdjGHxHfxyckwukWW3TfDvYdUuaPeFDpR6absRAptEEQMjASanLs9BRQd",
  "key7": "wxALV4Y2L7zDaK4NPeqBMpNwKT5ph96zgTKBbEqgTJprd3dCg1BErc8nETgYnzwA66V8RVmEejG7vWbbFPkmac1",
  "key8": "3n2N7wL7bw3Au5fQ8pPuJ4mShUxQr2K99ahfYW6GfLAydw848ivnTJeYXYpg6rF8exKoC1od2jYXCKbezAnbbHQG",
  "key9": "5qTYRqFQTYaaXhNCtDew1NFcxAhpQrZnMvcm9TsRsNX1GJ2zFw7F3vXNhoid4Vq6bHoaHdaHkPiGCXSDEFYyL9va",
  "key10": "jHjEgYhKqf1zj1E6DCUrh2gJjkJ9iNcHEXLjx4sZFYjysuJExRb7mQ155FwP3WmtFL7tCufp6xtjW2aRBEYcEhg",
  "key11": "36Cx98pZzS4egED4UtMRnZD1bLEZWs6iKR5tEFUsdBJtJKso1cqv7KcKZqvewiK3vH5Z8VZN8kd9ybNsQGzCa1xW",
  "key12": "3Bza4vgLhYVacFMJQhCK6DtznkjQTQKQ1jv6s4CBShMWj9xtBo2nHFD5U4BbMrSp7QLxwpnv2wmVYy2nzkeP4mC3",
  "key13": "2fuMVzGEPLmhrcvHQQr2F1uhWGGWaeAakKkXG4v15yaRHygncujwDohXekgk4tdbX8QPJ5sQXAGcqRpDENGtUXB9",
  "key14": "4b6wGFoU5szdncQsGLTHXpq6CdqsrQqigU2yeRgK4kxsnUAXXYp4ys6tgyT1qbZjY1ZYJ9N3JFi8JrLdHYmiYwBm",
  "key15": "o34fVYoPJHQ7xuPaQwsthTpGbyam2PUgEJmmHrv6DFbwFDnFkAvf4WJm5eziYv6WtVzCNcGvh1CrWQEPdjxEunf",
  "key16": "2AWAZdvTzmoNBv41xvFHm5cfc9Z7UXU8iPsJ7PTMcHyoDyFshrYd4SKCHo77upx8igHiZoNW8WjyLUWoVFNvwwrK",
  "key17": "2gsNWoSP4dXmv86cCpQiRa3DcsyTKhmcda2H6H4XpcNyqkAUCnxQLpdW4V2YKVT1ej8nhcgS5fucbB1pubQhGBk7",
  "key18": "hkG21VfhtN2Zkgmo3mJ6imibRW2GirsduuVUUoSN3doYtDAULRWRDZZieDW2PNPfErHEpTqJgmSFiGF7jsXcEMT",
  "key19": "Cg5Vi8RkcyAgnmHsDTgeBk2B99K7uJhUA4QYycxkURXuMLkrYDzDwTRrcxugRBW3hLkjR2TdVurxA6gDk2QyiBu",
  "key20": "Qg3yL9XmGHr1wZQtoVrzTAPSyZUpkBoojs3FS4KgrG6sGU4tBJGK9MhgKmLsTSoHgxgbxU4AAx6QbssaTq6JETs",
  "key21": "3aEAY9X7pRzpmTvSgnZznajdVULnsRSuHFMwNreKQAbNicb7qDRDjo3rcPbxpRt85pd5oUXJCsqz9oZh1YDFs5bq",
  "key22": "5BbpN4o7hPxeBDGiR21ymgWmg3A9Wot9z3Rjkq7iUoQL3JhRxkE73fJBZ3xBgh75N8Wdqz8Cj639xDbiH1tCF4WM",
  "key23": "3xAeiDFywskvDVkxF4ZgEdakzvufXcJL6GLnsRgsSYPJiBPcpstXQcUn9ssUE92kNd4MhHUooGHjuYzEMeG6xAYf",
  "key24": "2ez87bv3YXM4m4LWiNLpiEtmeLau5K6MEKw2oKffu43Bhcwc3VMKZVQU5tHq9AaSG8XCETLcNPAdSrEtzdApfYZ",
  "key25": "4mP9xonfXu2Qauaa8sQqYNYrPXwnkXJ83SVJRB19H8p3P3kSDDcN3bWvLKKVxV6N1TNteMi1YrdF4cL3wUbeUUkT",
  "key26": "5hsT5pv47MMgXjfgioaLCBYTGgaENdCC4T5FkSGNbERpKVw7vojAmhhbzoyxP2DqBNUPjRNwcfnvwQzk6Bg4y1UZ",
  "key27": "4zaSNHRcvnSoina9w9wfKJzjGmwS4i227gBHnuanXHqFDVnHc1e9SJgcxrTWDMGGrfkHejRtWbTEndhP4Qgzr2ty",
  "key28": "4BnH7U6hBfW26B4BLfXyKjqJkwuC9xdXcXgo5BSCcRPYWzJfD6JJBTyZCw9nW6UJfiRi59irej91dr4VAy7Fp5RC",
  "key29": "aQUKpBuDQq1uYfpE1eN6ZZf41ud5oLnwaedn3csLDsrXGNvJuae2NEZdWoB4iACHMs69716rbxaRUjqYyuYfAaZ",
  "key30": "2FhuWiNbaVtwZjJ54Vxs1Lu4RNGgJKzwcditBEJMC4meD5kJovgKgZshKma4zPi7SvnwrVZQ2So9Un6trtDHqgYG",
  "key31": "45MLFTd8gWFkviMUBtKe53s7WVvpdZfAVDqP4Af9yVhCvVfvFJbbBETkZZPPtQdWuT5WafBHPcVCLir2RYfDDopo",
  "key32": "4hzLtY5veYuo9rkg7XXPnHTNGpAxHt3acGwzhBo9ChTzUCHqW1kWCoQoxff4hRsuwCwNhkowfuafEvaAkKetwCJY",
  "key33": "3GmvQhTix7r1DCAN7K4jtcN1a5Y4g3idZwJdrRDHGDhRyiZY2xeVgZ5rkPd7RqjeYhkfeY7tye1HE56vNa2ufeb5",
  "key34": "53dcrY3ya4zmR3qZGyeAyctdKzMHTCsXE9jfSeozW2bLduEdyfxaW34oZQzxxDvYmVG9ZTPwpg64k2ZNuHg5uGee",
  "key35": "5347tZ2BU2eexQ1Q58whvmogHJ6dRnEHsETFyv2vqzz5svXzvSRzCCSEHD1Fzvgfs2eBk112mgd5VN9kiWh3qkjh",
  "key36": "4Fvx8L94Vf8srrCj1utFMzoeVmMoQF5BUyqX8SQivff7cyTpyfShKT7RTn1TAAzgjtd7z9Cd9X64ZRAf9PNx4iRd",
  "key37": "5UodTQ2uMtcyjqDqzyhTUKqD6sTV45enR4wfqFEewE6HQpNQqmMs6Res1uUndVHesN69busfmimLMULiXVVZYVYz",
  "key38": "43q5oyDPgx9t2c6VsbsoYi6Nsn1GGKLVLvrnedrAj2X8SP3riWXR7Mjwo9GQxHnghx16UHUBdhurLCzz1QdwGzLg",
  "key39": "FaZvNR9UTYeXCuj3PpxFxMbPPhgMSqPLtf1RMvPpwpcHcKBeVG8k6ErC3XMTzZBPFyr7EUZeLQ4h7TrWujNAnat",
  "key40": "2111Xp78RJcHfMfUZyXqqZzoCXgtKfid6iMsiVgAYKocxPTWqXaoti2hbFCEbTwWpudnhDXuf4nEQRj1WvtZUT1z",
  "key41": "vfRgbAPWCPnRcykE71vxmT5WpmCTa5ppY7NfwSXpQ7N9xDbjvgGaZ2wJASyXy8RKWL212aeCk8b1mtUY3QYV9qd",
  "key42": "32WWu9HJHx5nGjxx8yx17SXmvrBGCxwejJgLoAWT46YJM5F6KiGJDZ8nnDiiNY7KkJJbSuT1QpyH8KLquBbHMmct",
  "key43": "38ya6FHPXLsz63DCbmmzHxdZc5cC3Pn1MmouKMEXNS9HKWZmGyzHf1aqfCu4QntTcxbSQ9Rfy5KBpHqmYTz8wfJw",
  "key44": "4ZeGBQ7tHQynDHfruxV1G5KozQ1hy8D9KmcEDYdEwfV5if8ABxXhrHDNMCvF1RHV8CJp5MwLtceQDPd5hYN9o7jL",
  "key45": "5xvn91GrQ61fWnkSDqvcoD5z1xsj57BaKgm75a6BXRcP45wGj8Vz7xxCrSZFHG8cRqzcbNHGGttxB8tpnASnVh5u",
  "key46": "3kvK9GKJpV9jjpbBXKhHVMVyk3dZ8anup9UFW3NedpjqR8ffaRDfKCWWg5igeu8cYHjtKTmCvE7eBGu1PRBPg5yq",
  "key47": "4LFabxJqFRgEoFqD6VSkDphFLdhf8QYm7yiVxyCTEmrAuPCEsqMRqPX4HHwpvokQixPCJbCDf3wmfRpDZMH7XZoo",
  "key48": "4gjLqBduHzV5nYbEkrWoJbBWjpzGHBHxssnaceeiUQR9HkVyKS85rXz2EK4zeyAYnrZb8ujyEfeYF4Aw9PnTxfXz"
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
