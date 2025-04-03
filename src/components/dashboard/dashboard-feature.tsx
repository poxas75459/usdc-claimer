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
    "35yr54o7Ubg6zhKRGGWUiimv1LrKz5Da4uKx2TaYprGZ8XqD5YQd6MmYzfjgzW7Ufgz4GCUqhwRtp3a3bJRLFL2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zE1WEGZ885rd8Y7CZXBDserYF5cBe5dwmhvboqas3Lu7grK33vsbiniDcyan7jvvcEU4zYb32ob1LVBDCgWBhE8",
  "key1": "5B1GhCrfpDXuyAKAmJ73gxeCx7hFLFWw4BkGk8SLkgFTLqnBWQse6sABvH9hETxKsTVwzBtQBJb3PHdGvAKe3RMy",
  "key2": "2GN1y4ZJNmidVJvmCrCpM1xrrfwMGauFixm9H4bqVjSDbJnjWEX2ytuSuPPx2wNVRMdjwzCtACrQZJoNTfu88x2c",
  "key3": "3YKzgr2uoyW7q5W3dhTpHJP3D5KRzNVHN1RBXYC4SvYGdsKCjcK6cnzhfyLVtQujupsBx6kZyYaCLUAxZRd2Y7ya",
  "key4": "5ga1Jf51RiTv2gCaauHdM9Z5eRmwKRUFdztF93hVVAUkQaLfZJ7ck4rrvrPfqZJLW5jz9cFSyJMiiJsgQL1qk2Lg",
  "key5": "2yzktduTRm1iUArzLc4ugCZWW5JjModeKKPxa4927CoRmiNSnuwatHyCEpFvJRn2f15C29NCMJjbRMr38UzqiwT1",
  "key6": "56eKAQNAo7pxKP2e6bYEtCGScrch9oWc5jWc4FgK6AHU856qGXnoiRhii3kTGeUT7tCkhZdNjm1QALroS4h8mbCB",
  "key7": "4MNAgd8Ap3gwF2kp1FuZWBa89R2EeDLmAfxNNekmnTQr1GfLsCn8A91wfWqVjXeZABz1B4T1DUac9WLfhHdeuJda",
  "key8": "4fZitbvpNga5Lp9dQx5LHBNV31UyN3ZJzRqVyhLxxVrzZAKyegWATHg4JXELyMURdLrPnVsMiPjVuadA7qEwViJ1",
  "key9": "2qzm1YQ9fXP572ausuKLYQWBNgFkk7HpM4iiLFwSkCPDRnu3Tesh73VA5zC7xncJe1stnqgCM8KHdLGyDAq9iSJz",
  "key10": "LNXiaPyZLBmWvf6d91mDT9ocwunpehCXP7EAvFqTCV12uvFZiJk99MKnkhkkrQoiNNETUD8CxjHVuC2wQr8Atkd",
  "key11": "KpWNwoKwRCQZhqkWgGh3dJDeRmENXb6CqoXsVj8W78AUtEuSp9vaff18rveV6Lz5z3t5o71XQFdhZESufjYYyp6",
  "key12": "4Lj5Krb8GEvRhZg6d53zWmbY4KDt9DzMt2R9Na7kD85bBRzdAWcS19xz8Hz5xMLpZWVPhXArdmMXbn3dz2AbkdNt",
  "key13": "2ptqAGCJPyr7xLgvHE3JrWvC56bksUBHET6XBFFnyNXRrYv2u3bJgGPYN82Ljosh8jQgwRcgfWSz2PUfeKoS9yTv",
  "key14": "3dLRJG6ocuax8UbsCng9fLxEybtq4veRMZg2nBM8tT2JofAJ1z1dVpMZbQx6ZjxvpTGxVDswJSq1t2FGsrWVkuV1",
  "key15": "5nyEcM63v22yjwoxUsPNU1THd1EUTPwydZtbHwPE9xsiE1NfpUzCR2xezsVFjwbYuwKHUweiZ516PFgyiyvmE8qd",
  "key16": "65K32PsqyL9xRejx66cufCaLK98Htc3Q4gofcq3MmZRMnS73Faevt16w6karxs615oJ8nqyhSzKzxFgQgicvw9pp",
  "key17": "KWp6o7UWRhqHTkgwWRaA5mpkcfzCM1St11UTSZSt631TV22o2u1hWWMQe54e3kgipaJxRDkrpmf8xQs6qfgS32d",
  "key18": "32SyvH5PL23a4WSqJLiASbtnabfxDz1dtBinLqckkBi9haKFQeztLSzhfptsyBLvRY6FzAFKvQrYEbdF2TJYbH6w",
  "key19": "3Hb5WPps7BAyDxjvi6EAGxmDxLHN8ZLUrnEMyNpnp1sVN1WVb2btUU8LTzK4SWCE4dGuX2sQKJbAwYfhRHhPEahy",
  "key20": "Fy694zKEPDoymT9Qhu7CGkszDJT6v2yX37T2t2C6vGpDc69yQjyeCARo35vTVY4qV8DEABwMtFgt2RwNdFbTon9",
  "key21": "GhsJy3xmVmWQzL6YiKjGsWnoEUGJKmgQ77bei79U2g4sSGuSCZMYmRSopm16nfsPaHd1WGcyz4ht3p9WRsYCy4E",
  "key22": "4fd29d6PjR797dGSVQd9MAnh8NRkM6Ekq1H4p9PnG7t3uKUA45P4Hup5EaMjwFTyfkngQTA2A95TMfAdm8MGu9Cm",
  "key23": "5qcaSnKtUTNntiBFrqnYQbi7Zs4NgJPrnjcbaRz3nVPCr5F6AMZT9RoYs6hDwyKj6difsT6E9dg9Gn74sCzYnv8d",
  "key24": "5VfXKhx2FeFxZu5pJgcMxa9Wykc1uyrgQBphBEkqgXRWMEJzazGo5cNHVVNSNcTSBjzBpS7HtqdYBk3QNAYEL9zx",
  "key25": "3TZsixkNksWeNct1uX1pKHTZcEot5hbnhZEUErpjVZ1PkBYbw4BW3oK7B3EJZ76T8yfwGat5g9Kx2AKLGsM4HVJj",
  "key26": "WAfhAnFfJkuztjwWXRBe7WBCMqqMb823p2zoFpHjKHs7QFxZyDMGM7j39r8M192R9rDrqSGQaEGvpzfGKL1T5kM",
  "key27": "5Aq6aSmi8oARXMGVKMxxsCgMvkdvNton9Fhjw6VgS7EaGF9imKTC8EY7RtzYZjiBNTycecVErsMZmtYTmxAUxr1j",
  "key28": "4XBvWok23gLZpjNFu1BQWpchKr4bJmMLr4Bj7KMVYUf9XdTtnxj6KcnBqLtjZLCfd7fpuuLzFoPwBRPYHidNzPTL",
  "key29": "56czbA6dkXyo2H1prNmGMnUDXJ82qkto2Ga1GHQjkrQwLAhZ7Msja739Tx7RXPw6fNoJ5V6sbMfBTFrDZ3FA6zVN",
  "key30": "5wjXxnUmoVBzc8rUwTstuW1wnc9Trir3XWCNFGmgNVMawxsdfbv166iK1BMW556WF56tr11h8GAg7SC34njoiUrW",
  "key31": "28rCTbjPfkFXKNRMkPQ6cHVfKDiBcFWcG9BqdnpNuo87XKRE6RYqMgyeu41GFMsaB99jNFKizfYvnkHoEhMjZMbh",
  "key32": "negHQBtisdkxjjDT7zZEZMdWMBmTuYHYxxGZr2yoWnPfVkFLw1PnWZqZnEwpPRn83vxaHjNk9HVbkLqTbLJsMwN",
  "key33": "61GUxMqd9t2FZ3erSciyGrrvpivV66C51xpMjUQuUgEXwLGYMdmejgNyJDncTDxpPs5pY3uDurXcQwNCCxXN42P",
  "key34": "32ZstYYT8WmhAcA3SmZbi5eppchwgzXWQVzGNgTtS9YJvvgtWgw4gUNHaZztMdARwviLmot63oN4jRZriWJEQGsb",
  "key35": "3xZcTLChGnhDwjDmUV9GYQD7dGwPtWxp9r8VVJiwmDck5ZMvrxuj9omgB5WVYxRgYRufq2FcSX2D4DYGShXaJAjM",
  "key36": "t67MtDzi4UdnUenqa9kzuU5KdCMCZJXUusiRmzz22xAJRU2ujKriFfpVjAfRWTWu685jw5UGZYJvnzhnC8uyFUX",
  "key37": "48GNGjxhfhGPbeLfWiByoz16u2Dox9uSJEeKG2uvyMzbzWoqW9MsHZuST87FUQaYtx5b6ekuVKv6JJ8bqaLQkzjG",
  "key38": "t9aWZ96bPECerETFYQ46YQZm64owpR3YHU9BvSHmoV8pH65c2xkmuixXuCt2NWidGbQDjRVVYRdMHiLR5qj9QxV",
  "key39": "4PYXtUThXDeKsnE56n8YPfCjN8y2YLZ1ZFB3pxWeQbKC6WM8SSY8J8XTKQfNRyn7jT13Uq5g3dA49SERwSf7DyGA",
  "key40": "5DqGRpipkNJMKVr3ZPBeNTDXzURfo3AT4ymw3NPDNNhDCsMawgsD1q2LdH2gu8EUnV2Vn4tAseen2PaUqZEjVTbN",
  "key41": "YxdGeXzf7HLxeopNMcpnDK8of9cLW7YWkoH6E96EftmKbzGSBpqaKYVCpLY16xDEZf4JaZZYc8CxkpaLknbetEX"
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
