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
    "p5FqDyRRnwH1cdY4CdnGvV7yV7WmWo1KppTYRWuA9HE3rLzXm4T4Km2QrD5wSiPfrwqvMCJiDASxc37qwaqQ88v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E7v8SjBpFxmdFq6bFiV3Nzi3sJs48BvrnnojUSs4koBpKBhCknHzMtcG2jQ6dwi13dXRmw52Nt8AW4wmviMveF7",
  "key1": "fetMmELfFvBkfV2RRE8tB529k9PC1viL45hmv2u7Jqut4CJbu3JQJUtDZXbVNxQaEjR54h6EdVANRWgKNRsVRe3",
  "key2": "53LbZ6umt3HuYCuJGjwQKb14wsAQzPsX7UHEeR1WUvX7bH2zffshE4RWYN3YWFdtuwjpqpzStgog6XzoEvPXqiSs",
  "key3": "23kDvRpYDy66B8pMXZA9frM8onoJYmU7UgwDyTASFDRpaWocv5AoZkjR4RhMpgqKSioYLsX56bdg11mokvbwCvYG",
  "key4": "2ag8yBKjJV5zwLfW14zkB84RAu1u5EyFk5Guk23L9APh7PdHBkrosAMGSXLDNst1c9fiiP1S7Wx8pvcMBz7C8hth",
  "key5": "2oq5BuFrkKsVFy9cCjbFtSRDhcEggk41T8ydEHomoQx5BefHKdNyM11eZjEHSA5geAiWFZQRjr2nDfhkCCffYngs",
  "key6": "5aAjeJ45xCJgHwHHh6xDQUkXSMn9bxopXRoY7VFcnjgxrFCGJivH6PSDMptfoaxVNRsxvcJbpDQ8tsKmvctTVGGc",
  "key7": "5cvv178jnmnLHR6ccCxGc63s6jkBHH1WkDuTmrKbxF8ckkG1XHzQokHStTydBKyRAauPBj1fN1Cms7Gwps6rN65F",
  "key8": "4GZhVcAY7EjotYH9K8Ey2rBbffc6FwC6yJRvP9W8DQWGEt3XCZCNVGS1YcRC2RWn7jn36Zh4XDnDjHq4cxJkdAo5",
  "key9": "3pzp3eCct7x2CCgJsayv9cn2GViKANWqWPbZPsvBUsmsVwxbVTSFrMoBehK3gYM6Dac7ej4b9eJxZqiqay16kU2E",
  "key10": "5vVWpAg3gKGha2dPSNnYGenecCeTK57BLuqfzwqo6psWfaW6o9xM2tAvcYRv1RMrpWvQQvrB7eze5EEXys2eydwd",
  "key11": "2CA7Vo3jUzS1fTo7P2Fk5uhhrQUxnUVaqsy9NvpoGMZurjuyVgLqmksxEjxssX6cHGmkEC5Ekq8YYmxkhkRrFB5",
  "key12": "6axwRxyvtGkqEGjVHbDDKan5nDesdhgqHyN8uoVbFt87s8TNUNSi3ANLrDtjGdkTQ8UzTMMTyuYbXDyJafqaBnN",
  "key13": "3XsX5yF9CdQj6FsPajPydLPNv4upF1xoZvGyctq4m7H1NiEyPoVB6xQ16FFxLC25amZPF8FDX7z457xZ7joRGZTV",
  "key14": "57PJHow2GRgcMUu2BMxssFfptzT8hKPZTtuqxwEKFkc2jXdWYsKAnizrFhGp3AxciohrgTrEjh9EcmmM2E6whR53",
  "key15": "3pZG1wX729gjkgWGBiew7fg85rgSgWoYfdfh6hDk9Sss19R4u8NTNeisXK4rFCJ8SXLqGYanXtEgQTxu9TTzRhkj",
  "key16": "3uqhnQf7kP2N1zZjbVFkZApoHzm9kuejNeAXUx3fuy9qxCgZQTKLvQTntJmaxJdUPJv2DJ6XW9XCwLSNpNiRSo3b",
  "key17": "553ufNAUbKgSBdLaA9qfqW2P27ujA6dPCdWncwfzBy117vdJTxKPFrynQyUQ3otHsbTpkdvwdne5pkDFiauZF7hq",
  "key18": "3vfpfNq6kfaui2S8PjoryFn7NCxb9LMvoqL28gyFWVknYGNeWNznbmGr5GxkNtiLwNy4QjfT1Az6kAqUSW1UvA9R",
  "key19": "5mZG3awmv5xQwamHaph5ggwzxJWVCUPFgY5pYUY5yXNEpwh3UrJGpqXPWE1TcB4m2nYMhUkbdgHrnLjMsus991Ci",
  "key20": "L63yGGiCqXEVXfMmGZa718p5szy21Gim5cJKzFuPrAr1avwVaZf59rnhSLhm7KwFXJywhYcHNAHNWgJU4ZYgGR8",
  "key21": "28KvTrUGoYeR5u4HCZdqvzHgmzWmeS91uAu2yYhxzkyXFsnaWErs82ikYt79HehZoRtnaR6eoJ5yk8ifbMQUoPV9",
  "key22": "2AyNfRjCW9HMNpuaQAEcjDrjkvKnQGMzDAYmsAV9xXn3bhYEVpo5JB4rhWNPg8e1yrojDTMfeNJo48NtNBEFuSde",
  "key23": "3jizuuPD31SLqTj9BhKquhQUUEqP5VH24dRxQNLxuXWduSVhomtgzuWZ4v8wLRPNxkpWpjex8hgmQYLHVQUX2KFf",
  "key24": "48z8MSv5a2KLNBue1GdYHJALnnqVLXJ28nTWEDr5Q5ANAu1ztEEUfsPiGa6KreVzG9HiR7K5qvnXkmSnracSdxdE",
  "key25": "5U2XAwthMdXCMS2N16dtPEHG1AAc3P5fJnGjuURdtkSXCRjRs6c4mr3kLhafsdGxvHUPMirAv75FfZJjXMGnVBNJ",
  "key26": "3Jmv4ksJqtZ5kxdX6vDNDP8BRMJWTzUkGR8diWxiaBpW6vL8skYhtBWYNHcYfcfV9rwCphgN3LbnVcFM1cdccGtp",
  "key27": "2yah2uLrfWDXRiNA85asFHWYykZQ1k9hKqB8Ru5v9x4NFiQPh4RK7f8oEZCJ7gS8T4Gm2zdrSBTaWT5MxcLgMxJw",
  "key28": "3HGCmFtiS25C2Qf38eevFi1kj4WWwjLhWtuhW3NywwL8RPdv8SFGgL6c8AsXFSTd8Fnvg3piwTCLnDS1dL2wM46o",
  "key29": "4D5CzdWh1Rc5VwdvUHv4govhAmPGQpeWtQprXBuCsXT8RytB6qibEpnPF8hK9YyVs9CG567WaTyJW4feEAAhHBmw",
  "key30": "3WM69dD2ubcjNLP2PF5z8Qz3X4fX8Vsex3n4j2EcKjtDp639s3JeAYQY5cDnvkCb9yg2cwxZXbvAxoNq2uFxULwf",
  "key31": "GPGcKr6YZvSNnaBruepW5XTTDYfFMipNwe17TsRdCPtmHUaRGvpxQTgB1fAFYbhQftpvG3Lb5XCXtTUrtcJPH98",
  "key32": "5BTdtjgjxUguo9edM4SHc1arYUykCHKB1zHZMQohCE1fafg9Twv4guMHn3ttiVPhnnDQ5AFkw6TRvygspLrow6dw",
  "key33": "427tbi4y7LBAtrWJQFjhYwHkRe4azNtz9MKQegm5BRcFAMdKb7WzQJoV9xF5y4bKeAacgH7KUCB7zyLmEsVh3WFf",
  "key34": "JzSzLwscZmNuxR5btetwqZzz8Ltv7SS7za17skM73AcfDr8rVxK7YmYko1moW2wzGq37tmKTYcTTo6YbvwbTnDK",
  "key35": "CMNvvbfbs1u8D4CeSxPWrXbW7NMajGbwbwA4o3FB9cSwoVrq3DcucbDdggVfgHKvyYWih16dwX21TgchhtZdppd",
  "key36": "5ri3AzEmtUNFKEW1imeduiHPe4qgAa28K32WLUE6ZxK6adJUpjeS1b539rPCKVxMQVhLSF925HEE4sdk8PhWuzYb",
  "key37": "668qHV6AV1Q8rs38DKQGvG7m4Q6vc1Swh5MtVCkD8JNoPotVPXd2mVHncXS6dLfjEHan5We3XkPWpCeHzbswtDrB",
  "key38": "3uxDPKdhcuHR6xHCPnz8666cjPUrEJdrHp6C2xywgpTPLsdqojbsptz4ystEDDWyWQwsXsut1LkMBxrr8Akn4RiQ",
  "key39": "LoKyMYLVvzoCuWVH1rFYgh27zzTa35RALWohiHnh8SBBZZTJwqZAXH8GVY5p2JS63SVkjyMsHRtR4cUmsr4EEV8",
  "key40": "4eEdQVGcNcAY9ytS8fGKivYghvMW2JRv9WZxvhw41korZxBubtJrDe2PmkDFAv8Hhf6ScJC2nGgX3NccJQwL1FTg",
  "key41": "yZGABLgsvGAjv9pwvHqUx13pEdgG7cQtH9CWi4Zs3dzU9QahZnVyA6YsnbegomHjwrZJ6fwu5pnyBm4EFiHRHza",
  "key42": "5nu85acD3WXaTwKeQwcpH2JPFVqwoZ2r7ZLhiTz6UHJibkWHKj7d6hfYR7op23vbLgXXUNJyvPnk98K5SDaTx9wf",
  "key43": "2FoJ3QgX2pHJdZuKSSjwRQ6q8eHQUG1CNdLGhdEgdA3prGcDbC8JGwjmdRWMYEX5c94pVZ1bvEU4TgqLczqVFv8H",
  "key44": "4uJFc5Wkjoj2gByp7pJR5PynttFm2iRsgWEPPQTKSrKjj3AenvKaPSJeCEJrVzVFdFMKaZ6ZGwc7eEaGBqaG9zWv",
  "key45": "PKez4xQBHq8di4aorRMabpqo1ANuFJS4hHnJskcJDDaZReMA1W3fmA3knGd66z6sxK7DQ3qviYfyyyHmA31YP9q",
  "key46": "4KoQMghWzFv7ZijWCZUgkGnvrJJ7bWWjkRHDkNkYVpF1nMiPr9LYQvvH2swcsFNWwLAmuWfLmhq28KrE9vx1pCZF",
  "key47": "5kKTMoMfjzzhbf3PfVfytyRzdz5AXGUWKdJicQaHk9L6sp3BUepnZax3txp8rEMSDHwN6LaprFz6qSuYWfEZzwe",
  "key48": "5kjQ6eRqGDeRRSE7rx2WCVUFk79oFWWUPj5x5gCJZT97qwMZbC2dxXupCZSwqFHBAbL9o4dYTsudA2HwE99nAoiX"
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
