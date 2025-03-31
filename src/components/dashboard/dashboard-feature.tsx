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
    "37w3maKWsFVpUmERfrkFTu1ku1n4VUjgMtQGwHE5JpTDLrtVPxxB6pABfxk9yzhbmJL4ANeAjbUmNCx7mP61aMm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tUgMWpYdQs4QjaCzMszmp1XaUmQXXWYFvXWboV4NH3sgcZQWY4CT1YBjBXQeBLxdpQJ6ACWVUereXisJ3BaJXeF",
  "key1": "4y4rAuBEoqm1ZEd4amgaT9Gxzt81zuCGdrz5R1q4AjHJBSVKJTdXgVZGzNPSeQ7Dp9MSU1c8ZkyQthvG2wR3CFPm",
  "key2": "5XnNK3dksA2K861vKty3Hq6Mu24wbTDp5DMQ14vyNdz3ZdbWyys9iWQDxf4DGGkPEeaxjf2cagbs22KhLvhwsEvY",
  "key3": "k9RLsnJ1bTBuETAdAZemsRPZY1wnCWUSrcj4n4gXxu2TqiMTYHNKLHbFqfqAUwuvaq9UucwWzoYkDBMUyqW4AuK",
  "key4": "v4RhSBXtsWrAC8nT6nfD6YT816X5yrXTRiP2iePh8zmU84w5CCcrYzd9c69q6YgX2mwhSPbrXw43nrTtb2o1jKj",
  "key5": "5yTeBFyjxFEcvrZyKyaipoXJtwqdxDmntJVFsNxTCpGxDRg7dkcdPvAoaFbW8xUMo4kGg3DZcVTK8Ctz6eP2Mbrj",
  "key6": "2wrE8ib3RJhU8BX4nEyGEVXTaHg9msqLCC49scZiR9t1PqUzhwhqboXZvYmAMADTmkdr3ahVYqqbaHxWvvzhXqJQ",
  "key7": "5SWGCxDnzP678dRL3HdqkzYJzM8T2r7h1ZqHMiMuy4CqAdM7zBfwDAz7Sbuzukobb9BnCQuSrm3shqhg6eRvkhq7",
  "key8": "aVSagRv6TBha9U18KFw9hUN94CCngd62obpixLoZ5TUt1HX3hmi4eLFivTr9Zf8tLjsmBPMvx1DNYRajC7hixFu",
  "key9": "4wSmCgfNh7Rr2irR6qRerZP23iFBw5JcCC3MnzgvwXCe8ChJLhjhFuUUhenppTYHjQyJw8xv4vzJefvyz8VTbQxr",
  "key10": "2EsnveYmkgptk1HHmP3aiQGa9mbhygAy6FbFC4SkX54mW6zmgGNTYLU4ARnBWeMYaE3i82oaKRA9FavrfxPDd4Xx",
  "key11": "3AncHXWU1Zvw84D2B5A2TijybJBoA7u9JS4WYSY35ivQodPQS6hnhGtFCkJgpkn5yrgbjmhuAHJciiB6ygZHoG14",
  "key12": "5cLCdRBaQ95YVzJXG6VX3u78wPKDkkgLTgLaLyGyKxFzV4s4jDDjLTtXE3bpSqN1AzLnu4Mbku7anW7vYJgau1RT",
  "key13": "4QfUxyJwT59GEhSd7Y7mvvpYro8nGH364VUqrkz7vqvguHGcoU4KoHt27SHcCAQAUiNAaAjD1UTkZ9BA5i8TDt9B",
  "key14": "4gUoEik6XuQXZfeH8QaSx1swtiG85mRq5tdZBp73vLMaa7sX288kVf4yycyj2FZKH2RCz39HBje2hnCTRCfzGCLo",
  "key15": "zRneLpSqedeaw9RgtRmEYiQVDMLd64TWijubrnbz9wwuBJ5sTVNQZi5dBspiiRqGcy67No2eviMmeLLdykvnP8g",
  "key16": "KYYXtqfiFwN66GehuE48S3Frvb6EQo7mVFLu2mm2cy7pBfTPWydFbaxaVTyeXPVeaKaQEasgwHWomJ5SxPXs2nq",
  "key17": "4tbTUaprFNVn3k3pgMXH8mvx3RDCwjU4PubKiD4HzGcGXWCHBdR9k41nsYekxHMUKobBbdGZ9MCyTBZqtiUpUNnr",
  "key18": "5DcmgB9UmkgQpBAFxeDhaSytEPswcNcDEUbDHCRE8LAqDX2NhtFLbLhNHgMKg8AR7AnAf5C4P22rdVWHRMGXQ8j6",
  "key19": "5x8CmPkCtBRPh4VCUx4fQ6eUdDtbY3XEh9KTMrf1YU9aXi6gypjeidfj5K7xEb9dF6QKPqWtrytEh1JAaFqwkF2S",
  "key20": "3ep2dhf8i27DKy79wEaLzv84wozB7vivyFHK2jLk4x8hXD3a8WCAargDA29Ysc3x9jHDRag2giomi3F5mT8MCVqg",
  "key21": "2vFcHdCevrVopRGFeJxzvP5NjwCQQTobdRDJSeSktqxHz5JRpAd6gHyRyhnv1zMAYxhLvKJ5EUujf2zgXGVFssiE",
  "key22": "4jBgWzJ1wTfE7aWZZdypbCyfJwFnkX2VTdcqDzdfczJFY5kwLUxQAegWwgDUMDtg9fNQr41oEmmMjeyPF3FjSbMc",
  "key23": "4eM7KtZa66YgM8iuNNNY1LN5UEk9z2yguvqv2Wed8Dj88j7iDP3JYEhTxTVbJDkahtkEYDkB97uwkfcV3dzXvLwp",
  "key24": "BcBASLzs7fEC6bNs5iFmYpKiVq7NDhGHwquXtDRj2rBdnXykfptpxs75N2UzNZUdKFzUqCDbqSy8ZKtKWTt1U8U",
  "key25": "2qzJWVEjZ8LvRpPcFGC5oW4kUGqjy6QgZCuE16mDkAikfMgt4XXD57JsD6t5PdorqMbL3zqta8ATo25zyQHs4LmU",
  "key26": "4zruNqSvRZNuFU526qiugaQC1nhvkB8tDXMvkJVcQDfVJyQDCdbvDKp2upsTkQ31d7afvhLYvQXaycJ2q6hEvAeb",
  "key27": "4tr6eWcSNcQaYfTt38vgHTX5YVaiZHxEGWbJj9bPqFuYjimnJCamYUAYL3ZTvdRzw9i1MSiwwQfFMchfNLh2SzPh",
  "key28": "3KtYtdL2bsxP8CXARAgeKc7wywwR5yvHT5s5Rg2pBJA81iN3FK96e5P4tQ14gLAywVWSonmEHfq3gXobmdmyG7JN",
  "key29": "8TMGFdyT6nyjuc2fJRXcvz6mH2ZW5zEoyJp6XiULkWrg7ZUy92XwwSJSCkMBB2RkEGx8VMtdAjxM3jbMfGCYw4c",
  "key30": "2gP3Z9p3FfBuBbUHmu5h6q2zYJdwNfjVgL2vYCLC2sXtxBYeS3KZgWbrVKxPt6ZB18dxkWMfYFcDfGUKbECdmQNV",
  "key31": "3xjsadMPR3P5BECYGiJxD6iKLqta417tnZsN6VjWwrGbf2Q7Nntx7Ra6SFSMumSTANkGPHW45u3LDhRCD9EEZYSX",
  "key32": "2Sm54xMbumDn7YDG6FGSTPfE18V4WfUdoDFGPncFg2Xhps4ML257qKGjqzaxZ9VSwacFjjDoWFL6wZGnbQ6P4s7Q",
  "key33": "2g8Uorkc7FCe8X9NYx91LkuYzBW9UPxrG8DtaQMD2nch4Z1bCty8KPVNjXovLy4DXaXVPJ45oauSqM7cfaNEUpJu",
  "key34": "LCQSUZK3LmzFjFDVzsSe2YZpBgjzFnrZpoWdJZMXr5dBVvSmjJU7Gcq6PHrATJ2YLS3KZ9aafCnuDFfNvetxUS3",
  "key35": "2fYTDt7szgnXxRwXipQbqER8A4XmNK9fZzubyEDMjAk6AY4GX6VR7sh1jME1LmoCqtkpxMgEUqNTbXwDQmswTkPq",
  "key36": "2pgBq36EqKsBbT7aYRidHbWp3NWTRn5ZqoKBKs7ZQBmv9BjYq8nowDrQJ5sSc2pefSjbUVt1k5KTZnwj5xBTHv7t",
  "key37": "WX4ZC5hh2aw1xGYwh4pSNx6eWKd9HJaxkEoVEhb8kqb6wzqq37q5oE2uGhbGJcW4uhgbr7h36No88s28Rct4wPf",
  "key38": "38GkAeU4nCFn32hofmsmEqDdnKMUKL7t93dCwg8cKTkjth46C8giMHEqMRpBivW4qWcyW964hvcCx3fvVz1JJcC8",
  "key39": "jUNADTCC64dDrcvDgNxLW6KbZW677bafBbPazt2h8WD6VNc6yaxMvupDUWTty5niLssiQjYs8HFb1JcRQY7Sufy",
  "key40": "3zw6RinkBQgBSwwtCTdz6ZsJkTmEyMxj81UV3CZTUYmyZG5dUsEw9Pbqr8kFxotbTdm4mbNmH65Lja6XGTunhEni",
  "key41": "4kAnaxEncTsUNM4P67fzmQN62quUVUiKiV2vZJW7gDcNUdSkfYxn9qanW96UbeAfEfKpjfMyENDgyYPC8GFxB22w",
  "key42": "Rf1qCevMjrkJSgvknP2Vp9znH8Rxk8gETuMaMWGjJFYSNa25kob37TT6Bmpd6p37GcsKHia75QftCgV6nTy7ekg",
  "key43": "4JZXTww9ThgnBnYCbmrmZAHFHHr3yqCyWAn3emf3A5U2Binqirh8aE7UroERPXJvWSoLUrfWVV9PHieZZaxR2HVa",
  "key44": "4mBGDhRNusBvJcd4o25NeKr3cJe7D3obEXH52sfBfqszrwJcXdTPR8S4qLvTuK2k9ReB9QHBiecWS4C9cKqG8QH",
  "key45": "3tC8LQqxkXNaBdkVAepDYvhEHa7psLy9WiFB5kwb2e71PZGBGWQx5Fb5Ru2rhYU8A2sWrZdCt1hp7v4TwS9YH2Mw",
  "key46": "cVnan813DQ7pF8zha2AmQdnr1chGySKU7UcrMZUTWgPutLuinCQpDAakjaiwVExtRD3zwGRaS5HbMU9UyZCFnbz",
  "key47": "3y9gWE7JnEmJzuCNWTE6pGo8ycWXWvy3hAtmF4aY8Zdtec5ZYGx9GZ5phaxR5uNzjyyASXwL4VJWcemutctcduYV",
  "key48": "9gKGVB3DPoknLK23a1NRJSjNiFVwmL3firWDbdoGEy2M3mND9fe88j7XFgYhCFcwA92QWmT9X9SegtipTc1HbHr",
  "key49": "4o73dREpyx44P8iC4CAf2mVVuJzCy7Rzfg1Tbeku36VsqHzNGJdjieB2FX8hBYmc3aSGoyVorqeiUu3u2Cj6KpST"
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
