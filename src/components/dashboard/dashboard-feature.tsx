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
    "MzRd3VDwhrWwjwzv2pkgd7rJqcd5ibwyDENqXQPempPhPS7HZrMTPydkKgcDTJGGPrt72agPKxyUVnVaRL9nsga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f53Hk2cdQzojc4q2dEUZVAnrRh97KE2EyFckE6aMowDa7Min5Qv8zSnDhzYaJc6cMkbQJpfG28vWKSZi15aKs3d",
  "key1": "QaFfWVR1qiHUWbxq6Tnpuz3EjHZtH7Gjizqb56g1D6zqFVPPoLPtf6Fz8spcg3cPohzftd3byirRoMfrZgiuen9",
  "key2": "Csi1T75WNE4cEtFZbNsPFMuWkzdXyNNYc6A59fUAcrbqvxH8nobyX5MG8FYgNn6XgYEjoBkN9vacSF1WGHqRXYP",
  "key3": "5vcDCwFHkp3W3aasnSYLsCMxTE5TdWgf2aFxHaMQ97p2FoTd72zUTkByxD74kVnei5WjAECTFTHsBtXqe7qaKRMn",
  "key4": "54oFzrmGc6whB894XTW9cJWspjMGbU5GGcifU8tzqUSXyh4QrU9EqurCUryLPBDKgABV9SCNaBoxRKdTTx8dqutn",
  "key5": "3SRriBAJMim36godfJPMNDL7FY1S4c4f8LXNx8Yin8dzzfknYHkq3GNtdDLygjusznpzWaK8rUn1vfRRjGXZtJNA",
  "key6": "5dcrWCEDY9xbSx7mzdZgwb2ujqZwYDHve59t4AqKTw52n44cdrFwLz2perLydFouKJ5pJV5vD6bFGBz3CSe35QgJ",
  "key7": "5qaiiQ75a3TLEHnyCQScuor14wEEL3GZyNQZsZWWp8BiVDteNyMkQJCNbaJor3saN63EnakM4yemH9bqybx6qb8j",
  "key8": "2DWGt3neajCDn9aZfXfsdh17oSv8UywgC7g1pcSh3BvFXi6rEJ8zDBJiFNR1BCGX1dQaLpwcJxhUWp1WCBN6YxTD",
  "key9": "3YWu1DFsDK5jraLbry46oqJKT9nt7FT51o5Be3Ch7T95vVGi6EaPoVL35Ld5f3XfhA9dYFrUMaPXvFoW5r2vCoz4",
  "key10": "5qmtxVfMC4o7Q8YKwjaGLttsmin4pcJnh6X41XMZbUPRNtoTnzwCNkXKEvxb1cRhDnge6vBggAxTyL8ENSqUC2fj",
  "key11": "355S59R7ghv37BTRd52Y7Nu7eGwnAvxgydQufgPP8a8ptWuZfKkmSEn8ERbGBzfUAtju1tmeB551LkwMFLphhzM8",
  "key12": "2HAi6DDagynyt9x73EkDw2CsUXv8HAX6LardjcJraEbak6wAUSSgmsvWqcdwzXyi7NjrxCEKtfftKgbm5gXMTH5p",
  "key13": "dDdisARXCcYCPJQkSSf6Y2GcZXH9LFBwaR6j2J74oktaNtkvBVytPsLrV7xD5jx2YGrRY8gzcYyMcVNiUQCA2UE",
  "key14": "4ECSoM2WfDZQXprvZvnoAjTykPCbKCEyusg9DxYmjFtGCGE5EDcpFWq8MvLCE2RUZeizyfVtBSUDvGC6ty46WKUU",
  "key15": "5J8wgEFkhs7Y7UL2ZxdEutB4wEfxyLmh2hZUXq4HndduZdBFmbmsXn3hRDC4jc4MLp3z9SBcZc3y8seXkx6tNFQT",
  "key16": "XEAo1qsNFdzxbb6P4TPjizV4xadsZy63iw7SZgKsY7iBPkdmrG2FSqvMEVCw5r4XTp7A4U2Cyv9ueuH6E5vqxyp",
  "key17": "3jJCGhQBbTEWZXGwhmoDy3tV4H1UiLXb51DKm2NTCfiniFaXeTGUyd1z1Sfo9oYB21T1yCNUbm85yTLeMbTYgypB",
  "key18": "3uLXJgjsHinn1oQin5mk2wpogCd49GMnkPSmyKMoXgCWYCbnriLedQ1xJkQW4rvDmka4f5Zt6YLLbVcdM4iKXdnu",
  "key19": "5p8eCjrNQZ17gUwVcpAt62yfLwYrtFW5MYf2Mk9YJtty3gEgBieT8gdUqCyruXPcQPZpmWyWRurUwqm4oUXJUSfx",
  "key20": "2jyi5nTCp1bLu4dFFgSBgCCnKrofsi5aup2bTL3QbPG9LEr7mjHGPxcJUHhnRY5kwmxfye333tKhndmJbnxZkp7G",
  "key21": "5CrYHvYvEEPt4wiHxbK3eLmSMvPHt846VaAcoxD7jo1rrWfp5bXK3CgiGCsHCdGvvw4N1eKTTbW5R87EvhUUd1fx",
  "key22": "5eec2VBuQaxtBYiu9V8Nez5k4bW7kE9FCv9q6tWYWqo3a9S1kgPEfSxQGMSjrqgdoM5kXjA5tBxgykYY9RRu1yZY",
  "key23": "5fzJwfJ65Ms3esCiCKWgwV8fMGkRpbMNyUWpDQ6PscsxnwC6Q2mLas8kmimcBkCxpRrp2hzu3DdL8RSCtN4rJyCP",
  "key24": "5EzJCCwySKqupeydc1mH4MokkLzKPAzckEb4iW2jPsWUw47F3SMNgAtMrcxfLwFKjHPYiSBAq8pVAfWekiyudnB5",
  "key25": "4y4nwqHnXBgwWiLYYEqv1Rnu7sCypWzLgQCQznogCv8vaBvDs4rLf9CsfDfcMHRPd17QGR9Rc7sXVW2KzniC9JFC",
  "key26": "2n244HVxb7HGXy5X7xsrvAHtH3y9uSgJwTm8aDzAzXiZK7P68TbDAvyVM231xzX3gKK966KJEzXRJYWGRnfjwSUc",
  "key27": "4M644FsuxjLwX8Dbrv6NhdAf27RfR7unbLLB2XhrqCfs3Tc7qrUhKqdJdfZ8EdoceZDLPUhLwoLeSR93dwJxT9rb",
  "key28": "N1FAztLz4a5bgD8vC3Fh2Zx4kvh2SFBjHXLS7WQaDniypx5PiRuWpbTDu4m7MrMFtdwb8BkjEdRar5LfJW1HdDR",
  "key29": "6QF8e1mCGb76td5PErCNtDUYfSySVPYx53vWgibGPgcn2kq6JfAqtkBWGRxVzn9FgM4J69nXy1s7PddqLzLBbof",
  "key30": "7Ua1CMSJthtUCi2EUAXs1EJ7Hj6h3FYGSWoJPKPGqHLk6RTtP1LdsyiwvmnTawBNDN6uut8fHWyYh5bVJaBquBf",
  "key31": "5Ec4ehjFuJQWsFeXGi5htbm773GL3NrbwQJjzhaBoPsBt7Ljd6HU8QinR9bbUcopFUg1uiCKWqXVvmBzKwYQU5V3",
  "key32": "vNCpmPUW2uZLkC8H2ZsG2ZD9TGf2A3qQ6zmxkMRr3u5o4zGkpqjr1KdtkYPzYHLon59mPxAdzncxNj772snNHUA",
  "key33": "5x8ZnPKqrJF9aZe6i4DUGK17pe9jfikR9JmFhbp719qje7y77adbypYWmwUaAA9dAJDuoEnGhuNsy6K4Ju2uQJnp"
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
