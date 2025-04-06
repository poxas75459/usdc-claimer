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
    "2xFTngcKF7bsz8mT6hg9KrTGfHnYEXkpuC8CFrrpDNZ8RAYdqnewVG6D5RQ2XWDfTVMkh4BrKHG9sFXH8YeoXs43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "meB4mjWm9ZTne7mvBGA93ycpkKHCugX39UYDUyUky7BCCgLS38XWuQfa73pP4Zk6Hb6MtoRJLNnxGCTZn8YdrU6",
  "key1": "3wevK4CRbzhxZFiYmfANXKSM6iYHzvdqjzeLtAiHxrFTPYNhuxeUXwWeprRvmj9ZhxF54zTQgmmcWz3wFe2yzCgM",
  "key2": "57dZiHbnbaFjJxv6Aok2xm9uWMdmoyGUGX1JdbYJHGpGYAqUuF7awPEmiSftuGYZAoeoZNKCGge8TTNYciZk4kbB",
  "key3": "YG2Uvsgh5JALEKFELAbEfnJEc6m3MB6ciKG6zqVsMbMkDq2Sck7XDJZtK2Vyak5D6uPFXGYDzyifyxeTNRnnyPs",
  "key4": "4prdpcUDKrAEMvXg3G5FF11gWreg8yAvijHTbcizQ1d3g4AmULeFwHgDVnfDSnjEdAsZU7qrvc9nxCwLrCSRHZ7Q",
  "key5": "63uFYHPNgFgSPyhanFJdCTT4ygCGVxHPELK12qTgftLCKzKPciSjWcLBPXbd77ckRuAkDX5mtckLenUj5LgYmNsq",
  "key6": "59AcvY8pejj4ymyJQzpJbXmt4Spc1D6ThMxbwssMchcc95tikEwNmupaWWYxYkYBUg4kKMbeyTv57metgzJYL4x1",
  "key7": "3WWouZiRZzJJpiKUz5cdeFS7NsjMuuSqfsHwhGh5LYaoBpY3phksAtc8cNS3rT5YYYSyjicGCyxcXnJHpfvmQbGZ",
  "key8": "SCX6EaevYHAPyFQzY6cHYbyrR4WhGNpE9LXT5sKjnyL8tiL5hAXMy5b6AbZ7wDUWe9RvrXKxEowLorveYpic8c6",
  "key9": "4x5VBECMqZm4TsHBqbRkx3eRRXvERCD9SsCRKfYBkYTCAPrysX32WoTmxs7bKrcL8B2zYEwb4rhkA79rebWMMD1F",
  "key10": "SSPAbQccCgY6ANJ1VXSeio16H442W3orvdhFPwQZa6XqiHXPkRUAQnoZWx6dErgXevaCioaqtALwgjF3vnTJzvC",
  "key11": "2HRS5vEGcDsDy6zmGA5BsGdTLJbuNeJzagBS5CKzVDkGUb5bf4UxvCG1EEW9Q7SpogGJzu8WQYzwLixkT1WXQ4rt",
  "key12": "58ym5H9HknQxpjFbCMZjQo7MHmEaftU4E62GounpWRzAQ8UMnUjmbTaa16iydSd7jHywgR6B9yFaZarA8HRQutcs",
  "key13": "3cmjjqtEEjKGuRsxPkNU47baQLhbAaGhDAtjw8kJhvaqHWDrfcAvshvNhYUuBzRFzkJ4EqfBXHwAAtbrtY9ngsJh",
  "key14": "648pD327XUju3ooB2aJHz2bu1LXdPafmoMu9Ws7q8Qbgh5tK11fth9eTuMGgDAnWcPjyB1Jwh1s7tcYTu4iKAv3f",
  "key15": "hG6GzZqmJ36YwsfchwYG4mAE6dWfqhSGqL4ML8t7rweKW2izG3fWDWp4yATc3jTMmnCip4tZEHN5tZsqXnZJPNu",
  "key16": "4tDFUzvVUc6inMgWHN7AQGgD9sLV7jCgUGyeHHB6NUDea4tW5M9BCHXsHw9GY2B6c9Qv69pt8X3pLBmw1A7ewxiz",
  "key17": "41PbZdCAUkGAUyKbSnHuiqgaazKbADcoxUGrn7ebY7Q3fmSCEbD8jeiCLaESBunMnavCnUbnrE7dEwLsP1vcsPkq",
  "key18": "S9p8bturs1XfxvCoGCZJpHYGRspy3GPrgjid4vX2p29kPjuPjLRqBmvQfGPwcfAYt6jtrbeGzwJTtt5GJ8CH8hT",
  "key19": "3G8k4YHhEQsLmg1TN5YmbMPYnJ9PZi6N7eRsBYjrWVLG8KWGUZ2VsJdwi1LP2Y73gUKeEsQe9JNTQAPF8C6uiBBU",
  "key20": "4QNSvReLghGiFFB5XxwWNrdqAE2dgE5H4mLVVNisgEXB3seYVLUW2w1Wiz52Sj46MggJy54UjLDsYo8kA55KasSA",
  "key21": "2nKBYzRP5cZK9gvw2Lws5kakvCHXjdDjLQYTP9bT1kKgXXYVCD66gWJR5BtvZCu79cNha5XGQPFEDwpWu8LyQkxw",
  "key22": "2jwNebZn5W5UbbbuMYYF427Bgmdc5nUowY9JpU2jBXSZycufcXoWKAAURDgMbMbK7w9Ta6FDV9DFcYoHzSJzRJ1E",
  "key23": "NjhU8xtAXr3rejntRygwK5WNY7DSrNBUQthYxePPdpnQSV3JPJ2bVBUWqsnxDAQCktE4jUPydLuVrWjrC2T9Hd4",
  "key24": "58A3qpNP5Pq3ZcwAaDDSSojkwUPGtFHuXjvigV85vD72ksAcen2poAc6EPZsRdRYjXeqw3jWoVZpqzG1NsTdfzcN",
  "key25": "3svPbwTTYFnsGRDKhSUkcT7vWvprUfqVzcCU1p12woeHsUK2RRPrGZkULDLRimWFYavH5nz6gTK2xxuz5eZraqbA",
  "key26": "32P68Tdk3z3wSxDrrT1LhWKvpdt6nqbxCmT7oGxbUM4cesw3MwrpVnbPh6Nw1B6uXztgJrMDQJ3o9mjywaAuMps5",
  "key27": "4hkPzyqb55jBM15GBnP1wgKtNTY89zMteHLAAgFjQoMAeqQ4tGw738atT67LTyVVY4Bkt1uUkJaJQitnRw4aZTAa",
  "key28": "372aRq3KqNDANAH53FxbuFhZwnG4fup6Jxgi8mfa11mAN3g8mrc8VGWZy91KfyzCwygAH8qqLet46U3ssdKXNBZF",
  "key29": "4wbkLgyQ6Phkb8qrxPMmHSUoa2VSBKvJjMViKV8mSsjzZF5nfphv3KeaFf6MzMnCjRbwuZqDX7Nq5NnNHUhia5xL",
  "key30": "5XpNMtQ85Y1x61Dp1NpG1BpPqm3Z2FBhGLShsBsnNQudm2LcaximTzif7jMdiGX9z8NT6SFCCw2zEW2pMJxvftj6",
  "key31": "iE3c7f9F9VmfYhrriQSXEhf3KE8b2gRm9avzDxvtkoecQeG8ne6VX3pt3M42fYVAoBL1jS6Dmwd9WvQLKbXrbQQ",
  "key32": "39ZQgWWFuqvicCkPg232wzjFp4zDzd1c5h8wCUdWcsybiB9FWKojdayXJNFpVpmFdrExXd4mM6Hjqz7h6uLvyNiM",
  "key33": "5xN2nVkGgKBQfGAeQEwXCtS7DhaDes4Fiqotw1Nf12BXUDGHFbgzwutfgFekH6brj1Cm5tQoNS1t9jyJ1yRwZx74",
  "key34": "2z4xQXiM1DWLtZAdo47dDLrxEa1wiyz2iPiGFxJcrNRUMgUubAYy5VFFu9NwVtTyG6x4zpB23C5oe2xZ5X6TwyJ4",
  "key35": "2giCr3SPw6gWwsDoSM48DxYU9Mq8cx3mEkhFAUDGjii7SucxY9nYrTCmW99ycBqynUxdvPdMezeyjfe2jF62WMDU"
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
