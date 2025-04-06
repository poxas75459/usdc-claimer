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
    "3jCuTmxagTrhNXobjgoJKpF57VwUefvX8BAad1aJ8SMVbaYCJ6sADpnkrzCgXTBRsYTb7kdg14Vw7XCzPGo8hx8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41QEWVUYpASJSogdPuGGTcPnNKTw9axzRTkTxKeMDDYNJzqeaHYaXcDq4UExu3gkgbgottLTktm8btMf4dH2JYrV",
  "key1": "2RfjnCxoDZ2h56GAbNkPXKnH8tzo6GXpUEJ7MkVrHUyeqApJj8umQ88N7n3coWtrS2zheVyj5JVJWU2wehidb37R",
  "key2": "4ptwExVjU74k5eJXCLDUtpiSUUR2CD3S2WHMPmpcA24XFyk6XspejBcYvqCGVbq6aMTnXmy5rUEgfSgFHQe6Um1",
  "key3": "3W3ps59ziH3PCFB33QUzf3zymtZt9wDDz6ZAmN2SAXnVYMgrd3A7Hrscs378eBbTCbBDEWQQ7vzBRftfZndFALZL",
  "key4": "4WzB6rcR9i7A2TGoW4V84si6tn4xnW62GCTmnhTUevg7JqNJqamwVn54HGzASNPGoknYZrdJnmAoUniEPdiBFFRK",
  "key5": "253Dg9d5LiAFDN8UQaSG63EifuVTnXUK38zp2zLhATVbpmvJptihaxUooomyTxNfW1CWYZTUdvUchdC1e6KtQ9xB",
  "key6": "2GAtxwWxTN4fYLA1Twx2GcabCeXtPh3cJ8PytNVTufGY2LEKamoNbQUVK4dQ4LiHhxPKf2XFQc1U9d1L3ZNMa9Pb",
  "key7": "5opdSH9vSCnq1Ua1DDUhLsiKUmEZopdQWPdaf1uj1gXkfpigDMR97cbGx9egWa8tKVyVosUxUGKMZYu5SsBAbh8q",
  "key8": "3PSemQyDmXaHmzArMN11vKLxqPfCP8AAbcHqfnhq9VeX5R6RW3khX9HjfXEitBPVUxnTD2wkhz1xF7hrtzVX6jLV",
  "key9": "5cp4fsBYtmZqC6b9hN8fHjpeT2eZFnBLH1t4NeE85nS7YEDaQT86B7z4g6aQxdPRwXt9wC4FwoDZwS5U6NPAAmXw",
  "key10": "3bHTxqDsD8fYKFoUNFqMNv39UU8QjKm61tShfq1YrNUBXazWyY7q713RnVx5xzpEm6Q29TSWznosGkFdM5zGWpaT",
  "key11": "3k7PwW7fuPZYfvre6xCCR2VS3Kao6JvCptb5BDRCHdMVTA6mg5oYzdrpbj9mrAPrZJsQGZJx1WhSLqQjfM5CFsGJ",
  "key12": "Joko5YiUvgrvZQuMMa3MzWwPZbVPm3F8EYKxveqHpfc3kVhomAB19tEudUFcBfDuEF7rHVAVwbdTkxyBdix5Pek",
  "key13": "3WJTfQ8MvLNaiDccRGroJTMpDq8XDHehpkr1NQvSRTdCv998gKqVWLKpZxW8YVR8D6r7fn56QLoAeAhwGVBMJL5w",
  "key14": "4uF3PFprXGRAr5jmmsWkJaVox2N22guju2jhpWRfEzPUbhi6oNrMBD3rUYK4GmH1sYppdnmAtQGykqGQGSvBU1z3",
  "key15": "3hxXY9Ms1n6ErP7FLMYdJje12osrxfuqBNA3MTaAhMqxrT2B4zQTxBNHPgzHLRBrm8XW4xDqq99n2mmJvbnY8oRW",
  "key16": "4SHXGg4v5t9woSZn3sKLYPJWNmzGJMftoBeePZocqzYbhRQgwyMTnyC5JuUfC9K2oCrTn3qdMwwjRfqbjH4Xiq9N",
  "key17": "iygEJ3xHocEKLbD7BAxL4NWAVGv1LPjXfnGzrL5s9HVPE4Vcms51WuHTW5i7nDfHbKArYBMdAvf269XSHWrRzwm",
  "key18": "3GKmPCnaTn6Dn1c8ySgDH4PXKPDdHvYdngKX4YKryFxiQTPNYuUi9GVapp8qWVr51PTMNnw7cGyuxKYDpn6VLpnp",
  "key19": "5g1xXx7RSxqPmJ3W9kPnWvXM4qsFzfZLk5BZD9CYwSoU4LtMichhUz2RHHnuwC1SWZTt14v5azVejW5Tscy8Dh2U",
  "key20": "24YuZanxvtEezPxkLv8ce3oJ2xN7knEgPhghD1Gi22iutcT2fcFJuaLDz3x32hZYWGzLFCX6Sm6AZi6pS8vqBAp9",
  "key21": "T8ebFUStg4vVpEhyFWfF4nzkHiZD7FB4iAt6HxzQKPpn6vBdZf65dwFq4PZYQ8KpcFa3kQjEaUcHYCvSHGq1Rhe",
  "key22": "5Kb6bPUqshPcF7tyo2rAh2oKTHDisJCM5frkvAz7kUkbQxCcBgqHPQFy3DN8ukwhCiYAMxvLKrXYnXqDqpivdaUK",
  "key23": "3QyvikjyBg98jqfLd9AttbnZjziuzTKPa6Kotb5z7M62F3jA2ML7VNjnxryJnpV8T6Bd8bTHp3HRmj3jEwjP1fMd",
  "key24": "5ABwLzPmksjrm1AK7eTLFfVSqhd97XJrFmpQvkvZHEGZMwxc8o7BiJpkEFF5AEH4eyfAfij6Ak74uxYNJ3fBYsev",
  "key25": "3maeiPKXfF6TPmgNXcBjbSzD11u8X1kCoWm1kXC8kmbzyM9x8QnVMLMyi7ZihYEwZs8PVU2LKjLqA1tXLUUHu4Lh",
  "key26": "46BpewiHfNyXXsV8EZP5gDzQgyfTivLFoaNuAs4QpHVNhsNCDmWZHA5HQAEE17FUzREwZ5gdL4JsoTq3cUoa9Dr2",
  "key27": "2QaTofSwatWWKqbcgNCEYgywTp6sKqzGgXY21spUtL7tRtemGWniGerhKcW4NkgUv8WobWXAh1ZCubbZ4X9j2Jj7",
  "key28": "2pvSqzNAP9Lyn6yqnsWL9H5HmCcTXdLfdKACw2BJeoQ99wf5rmMXHvdkGrnuG9kJq1seQYZe6Ker8yAThfosFGkM",
  "key29": "2EufwnmCUMYZkQdPBQHHAkremhxSDVLzhyJuxat3hGK4Kr3CZSpK3Uu5WBcH4dVDpqtNaefdxrWZP3zqz7MgHaJK",
  "key30": "3EEkuN9CjNB2dhwr2yvuZoVCUdhYa5TzVnykQ4T8ZeHXurxKei45ZRBbKnooAYrmrfpQHdSb8yLfhg5tu7K9kqWf",
  "key31": "3Rh4DEZGUWnhDBMXETPto72GLtx2kzQyw7MZb7rFyqCvZwMtYebv3HhJi3ajv4sbrq4mfdTFHVt9yEtnnWXZjnYE",
  "key32": "5aEZqwnPJLkZ7DyFn2N1dx4ogA2NCfzDEy6GdYn8qHdPZG7imY7sous4LcEQbQMoBrEgaoXPoJbc94beJDKUueCZ",
  "key33": "V15DUQvgWqrEjVT39DRRq1rxrF7Y2AGacipNPK7yzWxf56NUFMgWVb7a78m21emLQv8T9VeqTqiHbEfaG4fxKCd",
  "key34": "4oPWWXhNQpfeesXgNi9g68yCMCcCJYtgRRnq8vkMrN22FLASgNYib7NQXXJRSGTsk5oKoweiM91C8b62gKSwZpU3",
  "key35": "2KhrB2sXQDqS9Tz5NdwF68JGeBBHV2e7mn6nDVjvSZzxcCt2rpKCkSTUzuh2cGdnhBTx5VZiigushASpHFq9wMHf",
  "key36": "511oY5XFRV8wpcS67dtrXZpd1snb3ceoeyXcChpzhYNq7j8fRer1K9ZmvKSnqgDiKfWNm3zwxi5xgGmrcFNavM1K",
  "key37": "4M6FV1J7QWkA3FR39DDiSy3Kq4EJywsSTz6cLbdG9jsBjc9CjnTeGFTPFru2TzpzBbBJwzwRm74EfmtyVkEbJ8GX",
  "key38": "5miDhvJujKPqBhnk2snPgJ6XTQfL8rvPTbieoyStdGGvknrSnAXaUiP5tyd1dC4Ttebid81AWyCjxUn18MDsiSZo",
  "key39": "tUzD7TJXJ2R3aEQkaDqMRx7XkJ7614yiffLtEV2RzbmXLj9m2Exa8Y6x938mTRJFzWqESdo8AuGiT7c2wNBLvcb",
  "key40": "1RSgVcPJrtjmb8iE5XwWCB63t3mei4PDrQ7kcGShbhrpmxBpSSCtmz1aVSot8NBmSdsaDdX6ceorgBgLyVxkoZK",
  "key41": "3vLJvUf9mGGwp3a9KfAdiKUxQufgEbpfMFhTVYGmgsLeEsHp98ut29FZ2U7BtP9TmkVMwFidKH3ATzbHPa5Cgf61",
  "key42": "3xgRnEZgo9EJmzHYYEk1q4AKAaAmPAUGzFSyXMmFSjZvVpK8KPDsdcpAa2r1Uk8j6CJgf4f3jg8ofdFfLEjMKpyJ",
  "key43": "4eceCts6ck3xBBntieyEJDZjReXNwxbuHtJ4DXWN47ayoiKNmTApEkgoZTh6p6szywq1Rdmfvx45bDuVfRj97ARu",
  "key44": "3PgFSSVVEtFAzF3sP345L9rAYGSkrfwLQhyu27BJH8orzgcdVZDzfoDWumbFjC3sibG5Uto139cKLbrvj1xiAQyt",
  "key45": "5vS6ErLqtiSHoUz9QcK17fccJZ48ruibUCmHySdM4Ty4rReWz8hGYovnsSH3PRSHRGdXaqF24DJEsbPxtAeAGVmZ",
  "key46": "SYr92E7t1TWkFM7QcZGCG3NzZrF1KSeKWaLpFF5DMauKhUbNBpLURTMgsQbHE518uM4owLXxSRchhXoUf4GKkqm",
  "key47": "47cyCMMjX3GvSiz8uWCcJi4PU19MHqSU9pwMbN4dmudCRguaW5mGratvBw73fscMx7WdhB2JZvj6M3hqV8YCLzge",
  "key48": "9EpG7PQmyBFCnkTvPpHvsgfhBRAM1oCVWgSWvmfXqPv8hc9K3cgPcGK9sN2YBTGRrJCzD9yMZKRpMtMKz6grTjT"
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
