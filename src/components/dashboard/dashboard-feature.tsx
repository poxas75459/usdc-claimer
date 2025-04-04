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
    "4h6mD3XoX6GNAGHeLa4pnKtfjb3jYxCBa3Vd9CF4YaVHQMx8okq2GgZgc9wP3Jze4wXhBik8A7VaXUxny98AYXda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XpSddn34YW9gJTJTA23U6MEq7Ta57m8adPFXfQ2mEgbddugymbT4ZyD94n5uLcsJgSRJHoCiteTKT4DWzYLrpuG",
  "key1": "5adJTtc2o9KvpGSRLjH1PC29wt2vu2xgENc728VEFfRhhkKaqGqh7SPQHzCyZKphBhtbsj1uQMfru9o1pes2jHrk",
  "key2": "2nqu9xd3gzomM1qa8tsJ1wnhTfJUaFut9KpMtrAMg5aFre9hHiesURvwKQG9nbXz1wx9ST9qUjoKyoMZnbkwfAnw",
  "key3": "qHcpjW6UPniD57ao6k7QVjXJEop93438fCKKikmNzAgs9ke1b8dQS4BZVhDbXxMATmTDKAZiyU76uz4DdCgfiLu",
  "key4": "4NLXY5rNrwxGiC3MTWTrcnQGxhThmAYyDtkWPPf1HMxgBx1EywcxbhF8phzsimfNJKZ8rFrXYBeHMSTJFhEkiqCs",
  "key5": "2MTVJVj9Fc9xfGpz8EzpEZTWoNVB2u4yr7DGZo7FrZXRk9rmzUyMrnMmsAQi6bWecPxPvNaCbQ27niBkxduStiBk",
  "key6": "4DH6HmfkqzBZo6SAJCoixQ1dtmBFyQnih8Jt4z2PefwDfy2tWui8ATAF1TgsshCwM8sLwWAcoLps5oBUEWpdbdgi",
  "key7": "4q6HQi1QV2KDvsVEvtnVANq6tXW4bDCmCGjeyHWbu7PAntM8DYmYa97up886xdv5E7ztcFqrXbsfE49FqtLhWKq5",
  "key8": "2M1za3e2KuBSWvAgqPjzzyyKB4FgAHBz7SrTcgWTr2GwTMrj75mF4bRg43bFU1PczmQ6c7vEFt6XD4ShPD8NRsmQ",
  "key9": "5QuYcC53iNRTcVXY4AYxHhZPDYSfuCPT84w52CDQB8i1dhzeyxPQU1aDsXmAEd3FSc5Cb7a72PXRNZZZESYvsb5k",
  "key10": "LdgcE3VjHm3RrpsawvCeTjdgv2mCpXRRpxqcTeY3M6ZMKB4DLS1PM4yZgqizKbyfrnKzN345S6icHD9F3eeYUY1",
  "key11": "2SbVLyt8njkukvNhfoATcZTwQaNR6ZJP2N6cVYU5jsThLLNC5SU1R3MTf52dT5X7bvTCCRTu6Z3biHHb8wZy6YWi",
  "key12": "Kf3XiKEtgAtpGJsWNVnNZmTmouCFSfXuT5DGgEscfxgkvV9XUqu87mY3RZDSjSBM36Ggftcc8EQmknHWMQbYZTk",
  "key13": "3Ui5LTE9UqtNgv1bNSjxNuV8pBKrTGskf2UtFUBtoWVpnpLVjiG9iSVYnfSvb99GTLwf4wXatYRiTDYjXPgqd39w",
  "key14": "Q34CFqAxTAftqQMJPsLfMNuX7fJH2Jnoo2buJzLDeJe5792LcWZcotHHqxQ3Gcqvu71B37mFBEfQcWBW8CREPcR",
  "key15": "GjDHqTxbbUwfdPkE6Et94KqMdKSGsMgx1veaDzMYEtTEJUBV6hFc3gzgGPPnWQ2bzCBzLn4zYvRd5RWUvJuTKBV",
  "key16": "5tSmhcn38sv3NVHyAgMdm6AzrEDN7Z3w4Ky2tFPMxpfCKHG3C1uXoK47W446KYt1aZnurYAoA5GKszfGCzFZzw9u",
  "key17": "42tmtVhKNuBmQZwL4EsWFe9Ltf3dn3ueefe7RBAKd4XYXZU6MrMHwXqYdrqt1uwcV38ZJi3CfKrnL8yXxzwGXBc4",
  "key18": "FsuUGLDTrB7X1XWU7QqPCaV6advbnSh69T5dqLTXftETrDMtMbPdMUNQEBWvatRYY8hVpJXyZXvJVmoXYJ7t8NZ",
  "key19": "2XqFBeLir6GuVqUgyXcht1EeQ8Qa5w8FUuVMLAxvopV49sDcBjeN2A7g9YXEL62e7qD7NE8HMmfYDAZTJmUMQqGL",
  "key20": "41Qy6CWT2NRdzdpu9wwtbNGATBYLuByKkoZwq6YHoSAQKcRiERkrQZ3756bLktaEAkydDMbqKSTmruL3Qjbn6BML",
  "key21": "4VogvVdePnNxYXJYpYwZeqkmomB2DAuZgYQDdxmHY6c3vuY98MAAW426C89LqK6SXQaZjRV8JPVuU5sgVT82j2e3",
  "key22": "LL8xgyWHw5ncoNZNVyF3YpMP5b1bXHtbDPs5qSAN5dujcRJBniUUSxE8P6rNMRcFvqtnVScRCGKRLydRiNYVMhi",
  "key23": "aYYXq6JJbfSP6regqNMuNgY3HuzYaHyGfvvrXEkZ9CazL5fcwbesSmLKkD7XzC93BzBeGkm2nmbSwgYJ9nA9dW8",
  "key24": "5PQCG8PsFsxnyhVje1SJ9VJ1c2Ptyi4u8P2QcrEWJhoBqh4XjkCihYEUEhp6he4Qnz7gvAMdeTrC1dffMHaNrjPB",
  "key25": "3nWqzBRQH9z9Gt5GLSf7bAZTAuUqVZN8XLwCeLu3uQwwvVkCHSnEbVmBavfocdCTHcFPuhBDcqhxi61VjRQAx8Ym",
  "key26": "5ZB8DvmWn3fMVA8jpBVJzAtzgZe6MfRz4hUckViYnHQfafVTsJ1tz6CE9cEh3cLBnvqJypxigjz6eEuBtY3deBAM",
  "key27": "4YLwpE3FPxFjh4D4wL8ws6AactRGNsYbpFsAwBMjoicVyYB3xbU2BnkzRM5tWCjbwQDERi45zRFV1zRWkUYYRDaf",
  "key28": "34HJCs5HjFQwmtrGni5vmfwaer5QETkDnq84SExhNqmPJ58bSzwvXvyw7tosqUKxtAJ6C6UegrUGyX8dBtZwtJJn",
  "key29": "2jmsuUgrR8caAGLuMbskwEDxpCJABVgw11yDcvqcp6DVxVu5HsaKnwSRGLwxirZCnLioL8ESdtAkDyFU7M1Ma9sC",
  "key30": "5N9R83BpJF86y3rMGpeDVw8Q7mz8jQPm9D5UDW3uG35TeqsWocSKvKjSXX8Y4U17nPcMeFSxwKCsbfj73vpEY61",
  "key31": "2ENQ1zbNMmBThLGAW5NzqxNcKbmTpRQEgL4iabLVYf7SxQDV1sizGz1jcSDmWV67Dx6gEafA95gfHXZoF7UPA6TS",
  "key32": "134MuVEXCcuYK5BY5b4fAcRbNExrYnEskoGGpcPzY1PGRU7YhrJZZZSxjkS9Zr9nhuKEHqfuvCZGcvzaMwcuZxh",
  "key33": "3fCEGPxzNzpVD5Fkx1NmHSj235xTurPJKvfFQPLVRqSPZ6Gsk1xNHcadX1iv8XqmTK9c6Yq9Z1MuNXM5ysNkEE16",
  "key34": "4GvF3Jg32fvzAE7jEZCsS1bfN2JCJtascNZhixdsKQ5dHbYqD51mZ1q8WZruWGxpHxSCu3PKVvVjv6H2boF5abB8",
  "key35": "4k6BQB631ZoiaG8jPWiVn4H1Q7ejvnYwB9arsnS74Uu6LxcD8H4gtLvurBvhtMsa5mCt3QZEWFjNUMKHwWCFucht",
  "key36": "4hcbUcSk957mEBpmUMQZgzMgg9KkMoMANpihhApnnwDoJbg6ikvBqSM6ACJNt5BRY5HyJY97fhkEJPnuMKPq8eyj",
  "key37": "2F6J7d7FxLYmaDARpHARc5uSUDbMtJDjEjwsS5ZhdFULUPgFFA6uZqUv9WtMURbmfSFXeEypoU1EoELwWDHuF3Rp"
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
