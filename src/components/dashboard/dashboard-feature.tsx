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
    "qq6sPEJcCkEsoJYnKiNveC5WGKog5xZJf6wtic9YFFbLpL1MUQRgZCSaSs1FRwHjw6TNBpz4TCoYRjQWoGyMYR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21DSZfbCqP93TuKfaFSLf853x2deuMGzfkhDxtFY1awRV4dmYK7UnttJzm4J3yYrhivZ9WdUndFYNmKfioaqSt2P",
  "key1": "21pcY8dRo8wEfnnDPnTUJzm9hfpHhnbt2iHQKcM8J96mXvfQ4TxBzaeTJNMmLwwy7qkdnpD6fj2ik1h2gyj4YX5i",
  "key2": "55Qrkm8wckUDJkcdcjubmkPkTR1XZXT7N2BZMY9ZXyKevoEa4eKXtKkiNPZ7QjrX3MPicDdZ5mWkLiWwTBAG1KMR",
  "key3": "4smjY85S73e8W46SPgEpCQXQZFkd5hDfFFB9b4rZi6dymadWSr3EXhxcy2LjJULeYN3mPp7a6p64tKZqKTn7EV9f",
  "key4": "2pS6GNTWxhAXjwzbGzGSuu1PyH2UwYxkx8eLVysVucKis7PRvcE1t4pzhN1thGMghXPUz3TDQ85VkS1omigvQw5c",
  "key5": "3dsHTaDFaJEy4duG9FWpD1dVu6gp6jqmRn6zKpFb9ReuaFPRErDwPJR1HXfSxR8tcUyX9w13wVe4jCNYuZaJRBdx",
  "key6": "4XUGUfvmysxEhA4hZGN1w9pWYEKky6zFr9L2WicSke4TsuvFBR71A4X7ZjpVudRWGqS8RiZbWc3cDsoL5DFw2vVk",
  "key7": "4J8zdbfTN14i26U6p4WoE6n3jt8yw3pAY9YqezBMaPnuNKE7Faj7cvomfayhDpr9PGU4ubSXkBmZXeV3aN2NGYx8",
  "key8": "2swYa5nW8e323SQ8vdT5qfNAYps62CanUWNo4CVwWAxkTJnh141F9pFn6QMggaxgxaSTt98PW5wTxkFyZuUjBXGu",
  "key9": "3y1TyUJLPpHvz5rq2fXtF1Zciaiz6yuuGPkiALDBCcPYJtZdYDPJ2WoYUUqxPHq1ZC1CcQCNEoE5nBqqM4FtF5kj",
  "key10": "3Y4ztAK79TiE6ia6tytq2tDKBgPKTmJoMqDSqXeu7pJ2PhrGhFRR7y2j8Ft9L2yZ6Pf2Ud4itTeQYg1dMdgJZRSc",
  "key11": "3hDJt4vGCi2ZYj9cMkgEHYnBGRsmzRLdoWXiLG1ds21WxxEsJttsSvRaG5Qk296Yt1RcHcvwARY5g88rDkUjZr62",
  "key12": "UA4UhPNsVZxxVM2ueGubVictUccmkwRgDsLmkM4KdkmjB9PDiimJCyb1nwUd52twfa4pqKspSmDVK9pjopj5jJp",
  "key13": "5DrVQtpWVRcoWUHKQo7ynsieMZxjJswQWVwcjYk5DNt4pMdwyw1bRB7nGnvR6fMB5qxbLDqhW4CobjTx68RWV2PM",
  "key14": "3LwdAfGaV9ox1NTwCYUjBg6EJU1k7SqqfDQV55EJqsJCBxw2xaJN37MmqEhZEVV48ZBomJpUVSMh2dhiNucNVsCJ",
  "key15": "39MLZz1hxcVeiWvY4Un3aras5PztkjH1PehsNe794RsY668PJHqjewiEf8LfVkhfMVgpeULY3JbdppA81t5zWrye",
  "key16": "2pgVvzW5QTvzMeipM9YfPVXqt6zduZ2Wt58GvKVz3trcWRYNYHYRQRBGeNmrnYQgcQ7aRUS8mox6MNApuepcuMsr",
  "key17": "2X56MLgwSbTdDTsGhPWnH2UTsCubouUvBnRHyeBbWiDPZqZW4rtxqZLu981fk1bPKTLgamso1piAQe67Qn65M3Fv",
  "key18": "2TPGABmfgHUqc8ZdCtptNxBvTAmnm6FGVUHs9oXw6SKXCWbbMDVDzZhxaN7venuTQKiDcEzfz93rSrN9SBKg4AXq",
  "key19": "R5Y7PA5vcTw2Pk8CBRNNUvkV9ro2QGv7ejtA9nyiFFMKG3ceruH7uHYXrjxY8RfjSrTM3YdyHh9ZcTZUSSpgJga",
  "key20": "5znDwuukEMxByNvGCtqP3UVA4g3pVCU4AmwDokyYPuGLreiunLoWAdv6v9NuYQypmhtKrx2R676k2ggPQ4PR9vQ1",
  "key21": "2TzfUV3roZrLkJnEsLt3CdEPqt8AiSPHFu6f9tNKjwMhdLoEUg49ZGujaPyYqv2JYeLmYfQfZCyrppxBs38b989M",
  "key22": "5TvDUL7KRzDyxLcZYyoccyq45UFtrTzhUB4ZERz7GHCjGDXm23ycaeEsrqmEN5igzPFNe8PmbW13xjRr5vJaDM3t",
  "key23": "4j4QF23gDtBFCPmjHfjm97hSR3pyGDaxJy9eicbKXhpzPi6tyj11MyYv4QXuf7Y2cM8nB6N3qXQFX9xeh6mRw2zF",
  "key24": "2n7w8VW9ds8k8Hh1YFGW7hTYNHM9DsHsFiW2WN4K61sTTjkjKfGeHXyX1F47gksAjVYqRxgaduC8ChEEAw97ymBD",
  "key25": "Hp7EBTm2BUx3hfaCpzuVSeocxNuYJ9hDENbqYfkman1GAna7UZiFFXkL7dbdRw87BseJAHffRkubbDVUJ17nxfC"
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
