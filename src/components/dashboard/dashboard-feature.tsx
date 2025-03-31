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
    "327o6ZzSoYGoV4qRWtprRSsYzL66aZ8bkkGWL6TLAECRfQcNtN7fDFY9zUirRy72fBYXJZsCB1MvX7ws3manfP2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zfKb6EgszPh2roSaNA17VX884ymsmdgGzNMCrsfMqGRe5iWWDGkeA1tefg12ixQ7AR7PDcSN9PhFAWDgjPQmtyP",
  "key1": "3DniX5PHHRzVW14XcN5vN1dk2QjYiuh1rzBB4KbULuwnRh6j3cc4EKB2k3NTKpV3znVQho6mjfydQWgjsqVujDps",
  "key2": "4UeY2psfc2ZRAZwLp3KPUJZ96cdbV7Zi75zxWwVEHUBYMvCKQeTbgPZEXaPn5gyw636LsKp6KuKcwUDtSxBB4Syy",
  "key3": "65natTaVkUUvznqE58c3EcpEPEM2p523K6svADT7MAYqQ2kMkLafxJt4tS4GbVXzMEoRH3hj2FAJNcD6GgaJhQjG",
  "key4": "5cBqG5tqqHGGx2uHD1UTJR8fxdSWkc3kU7Amg3Twwd2gbN4CMNBUfSYhcE5Db1AzmA35u2h3D2XqNG4etW6MF7e5",
  "key5": "2Hq7dvk956imcNSHUY79K1v2xrk3gJzsUgqEsQwrgWS9VA5ohKY2fLzqcqtcFTgCEdLkCe3AR9vkU3MQpNqgedUy",
  "key6": "3mFyytPgEpj9wVVpYRoPX4KDeJjVs6aubVc6v5KLnbhwDZiNp4b7wzEiPyF19zwudYTWeCAwd6d1wxDjgdSHGuA6",
  "key7": "9rSm6HYgmuwULF2PzPCbr1LTZwuwEdwAkuEu6hLK11VfrxT3QoY2ujGnDsAEe8ohY3YvK8zYuu1QgxA7jXfJwYy",
  "key8": "31MYFgBivAdisknRc6pvgAr5qELGs3wrcNPNDwLpKk29Re6duX8KBkptKW3ciuV81KyFYonK4LgNKtVFsTrnarpH",
  "key9": "4WKRKydfTiVSjKoJ5x5XyrUYX2qeJ2AhiPF924QAVEfDmjdrwwysDSGXNYBTk2nUYS59M9W4nJxwxpbgcFo4KhEq",
  "key10": "4yXB9wxx9CcEZgpdQrGqrjzH49gpetXRYTQNVe1KHoQai94zdz7qwVZL4kdHsiYUD9T7z6kXBZwCUppMzwjeZYG4",
  "key11": "4K2wtGKyEyNDsiA5izQAztKraFDWjwsLVofnzpXiuCJ9wFRcWmYKjeM46hwTuYgbh2R597Xueu6CWAo74z6Jp58L",
  "key12": "3i9cLQnsR3BViVinMpQBZBENCWJe4bTbAsHvZytrDpeTUjwmL1BdWFMyjCcT3uZWGT3raZiUN6PsaysGWxdfxs5",
  "key13": "GxjziuGf8sSGGsufvS6MMSqquRo6nt7ySfdVsJH7xSbP4zwcg553XwiRGDfmyb1rM9kbFq1RBbyK5xzSsMx1DN2",
  "key14": "2SM4BUpwgPcadKhKoJZjVkvv4Ue421GZVNJRhqETf6HuKf6LQQZjatmc2e8tSbQQk2eB46dxtx9qAtujaNpHsCbs",
  "key15": "2cioLBW3L8opBzs7KQ4Cnk1d5txzsowXXvqWhRHMxgTDhvDGbPPYs448mi6k6YHyDTSkRW6rA7YHqboVbYFFGYZm",
  "key16": "3XL5XZncdCgP57HZRp3qkybrEMp1JeyGE183k1PRkG6uoQCRXN8roQ9ioG59NhZrM9BYyZUGgABsszxWiprUL7pi",
  "key17": "5cnctcZdnS1wevX8TjyJ7bfBYtz4bN6uZZjXKPChiNQ2Z3CmZnhdPryx156AB1Bs4n9EDvSUpynpTck8YrAnCxuj",
  "key18": "dCFxHKTCKwd3W3Hk5j3q5J9wjgJyQ8PqXdbGDgWR6Mw61v3TAF2aYbZLmcRw84N4WhfrN6wHcy3kPrEGLJqGssh",
  "key19": "tdF4nFrAG9FBTFwDEU1Z8df7rJ7U8gbmWBnZTofA1eHXHAEruKV8KfsaSjCeVSxW2oJqViYePraABmM6cy7ZHvt",
  "key20": "vvqE4JqS8b1WjxwonC7jYn8yceWsFgweePG6JUpGybkUz7WbxQf1UVYSnmp96p3wEyqCgYMqVomEGfCxMyrt8gX",
  "key21": "2f6vCE1gbP6mPFseBBAgn7DC29f8kcU71p9RB3bd2CtBPa7jAK6Te98LNJX4DAJkKKHA4XfAVi9Rdfjq3GzSEFGo",
  "key22": "3WCwi1zvKGJHahcs9QzpXSg5CgysQJiZj2FdgP8KjJ2f9m6QmaAdK2DvvMWKNgxamPb47n9DQ8Zh1Vs4L4ZaLB57",
  "key23": "2FNUBDY5cEW8NkT6oyZzDtGEEuNRmgJHNQhFrpa3Cj6X8iFKpWExknXVQpdzH4wGTZ4qrEXzmj32QDmebfN5WKFF",
  "key24": "KMH2ye9BasqE4P4ZvTgopagesy4x53h1vFnnAKEKMqYyVCbHTy9Y6Gm2n83YeXMqEM5S6eQxh9MxnWaYPRjq71P",
  "key25": "47Zdr1jgnRsepCmZ4kS5PfFJKyeY2xzikoYXVmd7V7ifTyH9c5NarADRtcVFSGgDM1QgTgdygEm2R5UP1oXUvVCP",
  "key26": "5xDMPyaVCkWCDPPeutL6ubTtqoXqkWDSUXYfdQmgQAWr6pR7iZSLGUFx8PozvrCjPV1PRTtiWNMZVMVvcsEhtGB3",
  "key27": "3wZnLmC9hGnbqGhAmzVZWiZ2nregTKZ8bdCXHm3kBDC1UGz2EkyvsKsLs49MxuDToiii9kGFhC9oNNJapYUztkwd",
  "key28": "YCDEA1HeSQzjbynbPseZC4m7SFo1U6y59rtyMwQjm7xc5RmLy63i2n46SPM7gNE761hJfSwBvQ6JLavcGum8pQS",
  "key29": "4Z5YxKHmxbgK18PsqZ6wFMw8cFJy9EmmvAwkdyxwjjyPmfVSDHrEKKfothfTMqTzhiBMyagmGWgrGVhjDbvvjK2C",
  "key30": "jpKqfKqQGsL69Z2xVMZ6J7CLCFoU9zgzozCxtRWK4vXxv23bLux98BHmeHwTUSfTN3GXjeYL5sHxcnQbyQNR3r1",
  "key31": "trTjt23onWC4uLo6kr8XtAypwgcj5rr2KfdqtMLVMVuPVdoy3wycF53JGZucFniZtdjjbJStKA6mrPgG83c6Eo6"
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
