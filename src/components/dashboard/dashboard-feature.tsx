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
    "F5U5ezw6s1DvgkLv2qDz3UJQGJc5AUPgJ7vHdcAMNLDSv4mwSzFXgf3FmdRzoGh2YXkRgaup9PSiGuHzD728Dse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LEmqjY4bZRUAPrKUrijHzzDkFpcXuFQCjyDduAsvNDLnLs5i9wwfN98V8BpVysnZmDTFNEiYQ1FzitnrUMgb4mH",
  "key1": "4YtyWFfLK5LYhBhN7UtFFM9ThUCNkURM6e2iQiejXm388vufCy9M8KvvyaeAa2VeXGBxM38HeycjwBYipih4WNob",
  "key2": "5dc1FRgzmGSFx78KHvk1WGsLF9cKdBaW2uHEq4wF4wWcPt49Ch51w92d91jkN5pz7hXsMLvqHkA3wZCtDYerAi1a",
  "key3": "2GX8hevRA8qdw3KQ6jqYuAPydRttCVj5wdfUovbZthZK2fAa79eaQMcE5nb1E4u52gbna7BFM1ym48Tj8RbfL7dX",
  "key4": "2yQR75k1Zh9edNNTi7RZyV1yFw6eaBBSCkE6xp5kF1v4Gi8DRbVeSooGFxVX8qrdpurXZK5vJnoU3ijpJFjzgAp2",
  "key5": "33yAsjgGanpWnoRjgLQ5x2MZHzEotn19tyt6YoKphd8W11tK16dasvVj1FYRnxMX3JKSkXtHJwkTwUgjb52sbhaX",
  "key6": "3RBXRFNpZMk57NJoNYnTcneVZ2Uttsnga56uFj1mmxGVUt5sh3K6mqTd2Cz2ZQA7SZaw4wonK4pmCyRHvA2sbiYk",
  "key7": "4KWWmTVHY4h4QsUjMYhU93eU13quRLkCyniqkTcZeGpscLFp5VGN7we6FqF3zbDYNyRJJjsGJ7t6RuLLm1mw6A41",
  "key8": "5SXzbh1WWyuhGM1rdHVBPG3xinaCq3wsqABmS5jRGJ5BdQo6us6bF8pfQkKEQgRU89T5rxpGHVWDJUSPW68VqAJq",
  "key9": "3t1pANshhQoZNabY5HhsLEhNwDMcJqRBbLY5kc625oE9YiMNsrCTFqRR6Wx1A8GHLRMscEY599nGiiVC1BMcrNa5",
  "key10": "2WT3bbU1VbgtfvgDfLczGEGkytzdAbJ2adkJq4oiNwgMi19pdAEpUeqWgkgXkpmYya8Zgs5C2mimmPWNoxuYqJTv",
  "key11": "5owPv9nA8sE9kjhBnyDSuiTCEJNcTrodB6enDkpSEzLqYvH9gJqqmv4seGxnYdqtpmP3uNo3rHDcaCHioRJXzWYg",
  "key12": "4wzaF4SuWJ9wp5X2tb8fVUtKGwsWVtq2KwFME31QLYRpgNpi9pXiAEv8G1myXbEhswsFDir2V6fc2y4svyW122Fh",
  "key13": "4NfbEqbRVrKPBnB8WuGTTbSmQNBKBcoVoggeTYB2kut8L9C6bkhcux4TkTx4LVijBUyZB6Q8LwqhR7zrGjsBLuMU",
  "key14": "2QjCsdLGEBtsFFPRLQkEEQC3xfLRpu9vDifE6JhGbEQRzTYsusPTNKXKYDShJX3eKZUU558GWmXVPY9WRSgy3FNk",
  "key15": "3DVsZiAMaUpNb3MBVVRiB2CMM2Fj3oEaR4MAPvfYoPp76bWfHL48LFQ5pvH9oEAz5sB6CGLiQ2FVRohFyLvSYPXX",
  "key16": "q69y7TvXy4pdvocFrAL6wbYTJYQ96eHQxHfp6QFvTaxepJ9i4mXV6MrnE7kzfF4BV71WNWxUhMc7qNkRKs1BgiG",
  "key17": "4gNtaZ8YHi386NqBM2akAEE7pdFDAkggNghSuoFB7p5L9CDSgqMdFFWdgmLYEQwuaecHknDYDPAHKEW628KbcW2F",
  "key18": "TwcV9bePQRn3guAVUtV3eDQR2XrqjYBjsZTryf4seHej7DQDqyVFYtPKNTM4iezUVGSCmef1qczFEJSmaJ9HPAY",
  "key19": "43Uk8VLvwQogB2FHfjL7SqVj1VfGa2xTyzPZFN8b4NoWZRySxiosGddAAeJvyGmCAyjkXdtiQ6CoWjUex4pbJrPD",
  "key20": "5qA49VwvxdsEw1pBC2znPXcqodgKhtEZG4Kef8P5zfYPXVvxuUsC8n2eaxDWhovKPeVGRHGdT7bZQXdv7e96vUE3",
  "key21": "2fqZ16G91EVXAnjSm6Cxyr5RsqXbHQyqHALmsXR5JaCDiSYDJSPWPQJfaPQtXG5G19BoAL5w87mr9SBSdG2gMAkM",
  "key22": "51edF8jceetWZjL2qLvuzf846aNec9ZnsLjmytCSnzbS552TUTDWCnk4TP8TvJX64sKazx2tDKmgjvdLf9kBNYi4",
  "key23": "5ayDCapdSTkWU8uiLPRa26bvKjcxa42D2LMczq65uJDugioXFkixW9QuMPo9wk9EiFvGSwQLJiHBCa7Bp4XrKahK",
  "key24": "5bkpSsmvbpUgYELBMgHueTn1zmgDX65ZbjYkAF3yem4vNdp1CeS7Gx3hbkmm4tF9ka3CJ7Y81QiaeZq4aELdapyR",
  "key25": "3EFenvAvPGKyQHoPMpZz2TXuAdnwgWxahvhznwtzKxW5674BqU4RQyzKtpajrnsR4gG7Xca43FUGacFE3SoKdM14",
  "key26": "3ETaVd9cEEKiqeGXZNTVLMjL5fs26wWyMK6U8TAyfrnKSCeni2PdUVbmaDksCmdLU2kX3pbwxrSbnNtGZHTJjHkz",
  "key27": "3afr2wXBPmdGCR7zXQxUvafxVsSQdtzcNfeQBKPddxatitpKRoGhKDLkhF7Wqqq9dWo1p24YeGgEPeJk3SrbxEpS",
  "key28": "5jtjzDVnUqdNuypvAPB86G4XDxXrKEKnjTF1HwRfMGk8NrkTyXGNyZy8jeoR3E5AREgsHNoxMgviLA5hdKCUqCAb",
  "key29": "XUsf5axEWTxidivLu2u9DRn9n6w7g3erLGx9ffZh26NbzZtWo7sGSqqVV8Z9LMCNpY6W2pHNRrj8VEXgJfvp6JA",
  "key30": "37UGybFJ2BxUKyqhZkFoNRVNsLSfVmL6skaRjEQ9nR2MKedfVj8KfZPqyv8bBs1Jx31nDkYDHDiGr2K5t84mTyYf",
  "key31": "4ytVuQ2PYn269ZHxoxdbyjCt5q6qQ1Sevx5EeVMqranqafS4SZfTmtFhttPs1pzoXisk8HccjXD7ECsLYuakziFF",
  "key32": "pkeo8MZ1h7BdW6M2CgWarDe8afqZApbqzxc848eWdMNWm8eZepH1rWX5jjF4juCuyrSDNJq9UeBqtx2xkgMfPMX",
  "key33": "vYAhkEJbS1xAiUA6FyEKp8bUcba3yNK8r1W4RvPDGTgAvXdYJDCgam6hhpq1GSfGhvRDp4TWXgcRnGihmhCcFCP",
  "key34": "3yuHUQfGrMtxiChvXEECSuhDCZt4pKY9U2h51tNMnzz93753pzfi5NZbAyRaHsDT9xjHGwgHyRJHHJbKZWYHrzRA",
  "key35": "3muRrXCKxmx6ciPnnjYcXYraTkBdmuTdWy33actwmdNpkofxN1zDFjV7HbMoikyhSvsfBQHoTzmTEbBnChaLNdAb",
  "key36": "36G7XNHCiu4dBaugqtqY9cdQacQ1UwyMSquErPtXXfUkKYxVCagp6A22cPhDYVzvcQMCjUEotQVdaLq1Yx6PFJYy",
  "key37": "3qyNN4LQz9Zso6hguvjGAL2Cty7ncFXd6e849sJMmXorGZzvFdJ2WqQRtmkFzpQ9QEdFa7qKfSL6mY5iptFY6Hyz",
  "key38": "2Xj1yNKwqGVDdDw94wdwf3pMcyJyLAAr8QaYAKBEyUZ5jfzP9HsyB9DfE8mSsdL34sLGqZk1H7Rf3nR7hW3Pucex",
  "key39": "46MreZqHdnQCrheQsQqQorrEkqPh4uftHZhzCp9AFKiWZYpcfQDzeJeFNj5PFPKg1GjKqQ5NfHjQoXCEVu4GE6of",
  "key40": "2vpN5RmEsQMWPKEJSJsJrF7Nf1mYbADroMjtZCyxikqQKidB2SBGra31RHQi3vEnF4oLETSo8bCFbPQiNyhBbWvf",
  "key41": "2EKanmiKRnZeov9fCRaMtdmvg5Kqvtv1Gso2FEbmdapXodqKvPQHGz7MNcAedAV9qnXhV9mq2zcQanNPnQwNhJob"
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
