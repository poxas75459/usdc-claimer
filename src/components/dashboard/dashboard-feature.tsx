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
    "wbQpyW767coh3vmmH1mzxUBapkMGt6D25wThavKkGqzaPsNccpjZYN3dPFkkStyTPjFM9WyrBfEmamku9gVgHv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hD8Jk5dAJVykTmsSNcGNnmZndfmd3Yic2dX1vb3ifAteG9cQapgrkSvLnPRFy6JvjJy6hinVcVhutmsyNzCBYa5",
  "key1": "35CdQhxrKh4UzQcAGWH6SEtdge79why21nWAQqoK6cyj9NZvbgDC2u2p3R1aGXrUdFEQoBwmcAFm33y1mL28W7po",
  "key2": "3sQmDSb35zo8oxx7etPwoSQBtbyf48aqLA38FgMsgbKv4jU4tRHL1iBJWAUZ4bKb7rDSb2h2dTTqCz4XzgxfM3hw",
  "key3": "jyfMzK9iuCcDudo2nEXBDHobBLx66qidhjQeAiHXGavZMyAdHDvkrb1Mzm1ED1snm2xesyjVPXe8oUQ3otgvkXf",
  "key4": "5k3Dgk1HS6LRxjENhJNse6fPKqsJLYoYZjSLWLgKadrPd3bzk4vQYqzaJ5KUo1MPus3uDc5ZnRNvsYcjfeii7aSb",
  "key5": "4UbKoSeoeTgVgQUZNjLA2UdReaVnq6L36apH84AfzAkiKKvGygQiiV9Rzh6EWoJ2DZbdvWo22o4fEWLDrhTGxRZT",
  "key6": "3ZFsmJUr5yGudZq5zQsQZ3oSwtPY2SU1ifPb13uin5xUN7qEQEo8KcR5eq7xX4cPVTnfUk187eL3M4VDMztaA6Zk",
  "key7": "5uFMymDyg8q7neRd5QLM33916b3r35sNEYGjS7GhTqukiGUfyXPunxE3UrtZasd9dWix1ZCsPr5gdJxP5Qi82Qhp",
  "key8": "Tjcy6k1RFKEz1iMx3yD8mq95vqdVRNCCFgfwoTGmVne7eXi4gE9aHa1ZeDMZJS39TtkTb8938B2igyhNWndwAvy",
  "key9": "mL3vrQC8CTe5PU1U8dZGeMsJCTrf6KnqUo42VtXswkwG1WpDS9vXTX5uanAeBRwPeXggx6XpGYK6ySKUYVXGcmq",
  "key10": "5PE1Cm8nfnqmfWwNChev2Tfyfnt4tW3KLLdv8QEhhgsi4iZQ9RXdod16z1dCP5qYTsb1bQovueU87CFBaaQRqHm1",
  "key11": "Qbd2FXpKBEjFJz4ET1Zx22c1nBn5q3i6rfTTBCoTkqxPiB3xMuKpuye1C1vZAEVAWeEpEMD8da8JiYqZ3PJUS6j",
  "key12": "2jR77kwJVh5q3xZh16CNkBndK62u2Q6ZrZbVYLsvU46CfafRTyS4FsFs3rFECfNzaRE5kAdtHwuXhEmSyPqV2JEr",
  "key13": "2M6d7UXvQJu7fzBGoDxzh3SZkPENDrJuuY7KK1xZG4dGHn4qebbP4QTSRg4nuiaXjM5HYipejSWdxMw4Ty2o3rLR",
  "key14": "3gxuMn1tHNwtczUP2o1awrDe7DuiNe2yDua9g9ha3F7zYTXzffCCrHqRqUTdNFTaQAr6QovXY42QDcxKycjbhApP",
  "key15": "4ZgrCLd21m98zGpcQJAL9v89PSY2TVSRBfaCsu5eQoVE9Yomb6qV5K89sAcd1tNvHGs4srMY7rEHNMtVVnmAPvtj",
  "key16": "4jvj44gPygboE2G8oxrfiuv56iNru2DLo8SDr2YnEYDhAdRnjbDV2tdTeARXVhARbFANmuG1vBczFTLMznSJ2NDi",
  "key17": "4cX6X3NnemNCngyAhXgUbYi7F6svD9HD85rJuSNfFUEXq8SuuHRGKMknZ5Suaxt9ynfWAVtcprxD9v1E9hMZfDVG",
  "key18": "5w724FXAb1BgqDvkLQ9XByp8xujcgwVseVDC23RHrVvLRVT9czGmZPePraZKc4zSt9D43qRDcdX7GdzvSHPRFXry",
  "key19": "5BPMtcTdJUvB4xQssKUzZgrGcvth6Pf4vGD2nRnQ3BQxNaC8yjTuj6PwwiYvVmjJZdTjczZWSNmBmogS9UFVic8n",
  "key20": "4CNaXoqdW282i3edaETEw9EXFXQtNDWLjKuwQFBLhKPynZqRGeVhyAHgoon9EMK96QwN3CWWzKshr1CLW8aCFt45",
  "key21": "5CdQJgsfyq2ZPSKBe1yKNQYMBL6tYHwbbHjeYkT5YpQmBurSQYJDjtRS3Qr46caMnW3zY7zy8W1SGNN4rYqyjHfA",
  "key22": "mADtXYtfmN2oMZdWMhjoYVa6gxeZdYkJ2B8vA7sfBLuPqgUcFy6KNsfANNURYt12eUioMhuWd3n9vFkwmtv49rS",
  "key23": "dZSZbNqkoNLCdPXqBfEhX3PMe3qPFjVz1NzU6kGWFdDqkzfbG7Aws9Zfu4RPT8TWJ3DVCde7XuXWtfG12ubJpxA",
  "key24": "FQXT53Jth5xabFmXdNYhJ8thYWegJ6HgioykBtxiJGJqubRuxq7RkM6ZhrJjp3FcLSzzsdqRBs3C2gvESjxinW5",
  "key25": "22QWEAynxFfZTJigFvKDSQ7mVtM6XDvMESi6hMWBt6kF7e176HV6Cmg9M1pZRF1wvyvxfYzgcb51u6Md561U5p6W",
  "key26": "5Lc2o8mvVSq5WKm7xagGgMMjga8JTKg5Xxqd3TWutKQMfiC84VtbVPRHA38yrxLmUX139DmX6fhPAApXMNUWXtEj",
  "key27": "ZZXHZ4HXjwxscXNZmryYfiZ3Q86HPJT11qFSYjUcn1DTwKWHjzwsGqSTSeNPBaqZdfSzC3xSq2PviVxZGRHbACe",
  "key28": "3DNyrt82zWL5j5h1qceLndojCJDMScPyUkx3VuDMWTMS72Fmro9mb4ChnygCv6YiZH8YH3S5hW7UkvJkAq4oK7g7",
  "key29": "4JCjTb6MHwj1ZiFzYrbQ6TJQxCJVvycxDDwUoq4mT3yeKrkNvEnrj8gdmpHwGQ11tQLL2HE5M1pr1r9fkG347zZb",
  "key30": "54HiaTkV9YnWCnAtePNVisXfx9Zy2AcrqkRX5YsEzfmgiFpXNQRwZf4SZ4Ek3L6xdU5V42BHT8TFxZPMyaYcPS2D",
  "key31": "oH4Kjhob2dM8c82FRDJ5KvLmoYyqSpBCLTa7fKut4GFLJU8fxDNZrdyNf5Va4hHrNKfbKuT3fBYF4vBtfz16uK4",
  "key32": "3Bcb2goNnLFGZf4oQGY3V3QkZdLxZKaS82yK5QT8hJYU8yEGUXXmqBG7trfpCPNYkTdxzsK3Egwf9sKopbTfvQMm",
  "key33": "4whuLh36fnH5ErxaQX1aC6D6XUvmqWEz7HBqmqHKYdDxXa3aMz39dq12GDMurL56HnrsugYwUrJyqRQZzADWHPNG",
  "key34": "3EqCRzedvsrpp5z8cRPimZTFogccp7UDaitMftajsdLojP8cPRr3a9EhzpgLGzLce4umk1HHbUYo6tN4mckqF8PS",
  "key35": "APVYHBFoVPtk9No6orAwfcCcA3tjaapqH3Y6rzU1jhdpJBcgvxDx8ZkrPmgE6LpBB1HMaRaiDq66oGmXspxBKUu",
  "key36": "2LXcuFQUzmXXsPcUb19oNoSjvn8PfyCoJLDzw8JixLZQPLqMLFh3MhPaEYE6c3pg3JnG3XfXZ3bzKDGUYNxw12AA",
  "key37": "3Vbkc72oNEAEoaPSEy6c3BLtA7iyKBse4VbbpbPUefZCTa3tD1DfkZQ2E9Z7M65xbeN9TSff4NQ99igF82NE7xu3",
  "key38": "2aJKhzbcX7EPrhMLMnUVdD7EYCDNvqSX3R67FB6WVGUcpBGiDvgKBRfCAy9iwwQuB15KYVs94yKvKcA9uWz7ixya",
  "key39": "3ZVeFCWDFK3bCiFNY5F4H4o4GVf8Mz6xoV6ZUyutuYzGm74D2pAYKvtWhkCzaX7vMVd4P7fagWZuJJqQ7At62tY2",
  "key40": "4jgFpEPuiMv12Kqr3fCne7sLwfnyHnkgPTkpb853CMQuMK4mLqasHDUZ8r7fQnukz5MyyYH8cXytbv138pzS6VFN",
  "key41": "39xCsLpN7ktpUeoU74Uxo9hb1tTw8jhMoVZWB36oFk4z4iYBUKX5x1pychj8yeimZ4GVsA8LoMfdwtrC2muwwVeV",
  "key42": "5iJi7vYikGmqT5Ku37931FyNyqNnKLtsNdhkjV63XCCNpoccHsPgqb92PJ7uzkNdagWHi9mf5Rvcn4cjkJKMk5g7",
  "key43": "5UyWTkq4gpB9fz1qEEpzpYu6imVeDfggxRmHXgUy2bQwQyArSbDJgJzFhcSYT3E6FfwM6wUgYVQAgniq7qCeZxD7",
  "key44": "3YpyARQ1TVh4ZTssWdhQWcHJTzSBK8QZDtaGpxyNY3T9vYB7YHXDr4xYoZ9fBoxazeizk7g7iFzxwJsZLmTNfgPW",
  "key45": "NAnFbg7pjiJhQzNtwjcY9hkLuwj74EFEWzdDpGN7ehw6zciwzdHG8SbmEV6f5bTy5GXmwWD91hWw5WXJGikBdV5",
  "key46": "2CpFJsFU9UXZU5DDJDKen6F9p1L82JpZ4UUxSJL5NvgRDJXcstnwN7obehucf3MoYPeXuMVMLoXNH8Vn2X44ZZcb",
  "key47": "5rF6BNcTYeWc7Wf7N1i8YvcgK1u2t3y9cQsMjGGkMdpGTEdFwfKHcoqs6cg6nkZLax9BrH31iB6NMC48Bp2h9EP3",
  "key48": "4QWm62nJkkdamZL6vwX3jnDpXXNUnY4pcrSFZKJ4RZNwJHLJzEpPKNHBVaCDB217u7yGNQEfv6fh5qi4fCjYz2Gw"
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
