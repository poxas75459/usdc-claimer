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
    "PuTuuexRKw3M3QaBj296TGSSFMZNu1Vey5P86EtymQwBy8kcJGL1e2Yd3Ltvo8tTguhrJ52xW3GtyUXLLnnfcyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29yiBJuwoAsTvBWuNMnfzXzRyzgim9DnDiLwtnFkSHdnXaLC6HboQnkDTM1hSkUceRh2MyP5BpaEueiUZSDt8va7",
  "key1": "428bsRQCH1oNA1P1A6459xn8juat6rr6v9PsGLsStSwSPvRckDSaowUZSWNDdN99v2C9KEr1JKkn9cEy7Bq7MaoL",
  "key2": "2mkN5VXBrUFTTpbKcm4MgPC7wko13H97YFq44rqeN7HqCLbLC8u4vMRXnAP7R5RXXrPzGLxtDfdJN8MSBuBnxTKR",
  "key3": "3pU1hnZLSuGww75Hf8FEXidgm32cbJuU99xorSdWVhG22VVqcy4PukNYxqp8BPJ6DWxyNdYSaKcf2RtrhrVdfW6j",
  "key4": "pMXU2aqePt15jyVhcnEPt7bV3aCWNRiRKGJtVBvhPRb1mXNuc9CW5jCFfmDUkZozkjTNNckz7Q2WFQRvbXE2P24",
  "key5": "5FA4dfiEzaiqyFiNkngVyXFgGBngUHDy5arYogVAAXW3qT68fR91baq9yJ9qBQQumi2N1WhrsFtLpaa6h5nweWgd",
  "key6": "3TZkMvXtwYNRbMS8XUvwEGFSsUkxRECdtSRWnbXBZ5PnGPCXSqwT29b55JPQdxHZ4R6bh7qMwtnnDPnsSwBCSPT9",
  "key7": "2ng7pVDLyrcumD2y9q2wNkdLjq3k3QHWU8z1F27kpq3SRsPNJBYhYR8GGr5PFgkipJx5SrXXYN72Q7QZwBqF9fCa",
  "key8": "4JgPdykT2AJApCTAWWCisFZmxLijwaN6seFU9wr9g9LFfthkrtsZT1eB8eCYWxkYZitQZS5qED8XHdP72MGeq1Ni",
  "key9": "2VFNCEWpkv1DmM5YoXbHjEaj9j2931kGG12gwN9LCntsXHGJYb2HXTNED5Dr4xbZZJLtdgs9xQHNeqnzTTUK4Neh",
  "key10": "35Yg4umWHRsnvGsuFPVjhchaWWmR71Gm66t8MYoKXvRPMzGo4oKEPZpX7Db8kH9HPN96K5Xy8Jjzf9adFiqwmsZF",
  "key11": "2kWwrQNdkxoMA8XqXHArHM56qmsJw4FGSm9gSprQdT7iweMCjRubayF6afC5ZjvBJQGDwuATjR3HcpS8StNDWrmA",
  "key12": "5dfszZQBPVRbtEsTKTBCvRRcDbxaxuH2z6ke4GektCggjbZB51RCWrkm2hWGd3q6pX2nsbeXG9F9FoMB96A6Au1u",
  "key13": "4SsgA1AKNXbu17fLr8s8eRobJZpNTKskqjETkVBqrTALwXSgvDgq7vN3Qnfpjm8HJLi2pXicGkc8ZQFBZP9jRzQx",
  "key14": "2haKxJZwUquDUCtA2rvqViLy1a6QegTRpWojXzLBWtTsHwxk3q8xnBgUBWhdGcHsd5WFF3DDdNujX5DeGcCHedgL",
  "key15": "3bMqJWeNtMkXqRCdmPHNfHWaSLt2SCzzHZe7baGqvjV9AdtQdiFXkKGYNFtW5SBJna7enP49uqKgyVC2pP4veLz8",
  "key16": "5t3RK7c62Tuksy3VNjcdPfYfzV6qCNQfTFr6jBB5FKahm5cNF2zTKWE81sWPw74YxxTK1uYAjw2mxvJgumkBs6TK",
  "key17": "xXFVT8DhWuY8dwxUDBLLGM2Z4QmYkvGoWhDqekpAY8VH6gFmBvw5nF8cJ5TuqEf6WdBHpoYkuad4r76iHJo7xf5",
  "key18": "2c2c5svhDVGbRJCqegfWjUxcTEqBFZh1kxLnaKvccRtMaZS6zhzE7gaVf3yRH1PJTLjCpseBHwLttdz8AzffSLg4",
  "key19": "2hQyMPBES2seeWPuDBGkJVZef5DyzVKGHCHLK9Jg7FmjhweZhgG627JySR8BTdGYUkgow1fCSNcVYiS7dtviYRns",
  "key20": "7RBESptKVLhbdCYYTeQyRcXBCubFHA9sN6eegLuHqSYJSdNrjbaRbmGP9kbwgc2enzvxbZedq3WZPsK9JhVeskd",
  "key21": "3FcfKPkDtjYu5i1nBQHmYhJ4wymxMHJzHUXt3WzJ5SYLqNp686FKucPQee1YVVrkjXGS3CURWcxeJWAn1LvhFarD",
  "key22": "2ujRJsficce9DsBj3rficpvSq8raQgZT25E9v4XiSy2UMsrAa9PiF7n1osmFcY223VXHNGarAyuhauUB3fWz9ei8",
  "key23": "66Q2NKzPt2m2A3KqjJfAQ68TKfSBkVDTFGdrDkCfeDVjJ1XWpD5ptgoQksGQHLM2pxhHVsRGRc1DomTVbquQczaD",
  "key24": "3zCgijznE3dqG21vNdbNa2TKhFHTcQx784zvbXw8zKruWKtBtLuzWdf6YzdmfP6JDNP6kS7oeTFEu1X3DpF1x7u5"
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
