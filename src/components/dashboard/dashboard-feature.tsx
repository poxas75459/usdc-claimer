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
    "2exEFVR1f9W3sQzyqipbRSSXMB6LaGWAR3eFPVJTPsFyLYMX8qJG1uch3EVqGDfcgAdF39tFKrBSnhtGyhcc7TJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YrVSEcii9hGPi55L3ZyrLN2H76DdmWbuDxM9AugnLa6KBQwjxyi8MtHzaxinU36Uj5KgHAqmkDLtzdSaY1c416S",
  "key1": "2kHAC3aP5DQ4uc1CXaB3UVpNhB235YWtwcWT8UDMjCVit23HvmCVLFJVxoDbUhd5t5oGNTLE48pq2Du5v3xoXtXA",
  "key2": "4XXX3ycWnSZiShkZXNrgsxeKC2juS647Wtg1gKNmCB4WDiNKKoD9esXGb8FxUkYrxg7zKdzcAeNu8sHipB6V8Dgk",
  "key3": "3TNm5fEmeZo2w3gNsWx1k44s72tEDCmrVtEzcfQB3cTbXR1aA1oHAfwUByZ886JgHn2TkpTCy7PMaocBp588crgG",
  "key4": "4kuhT1E9gtdMS5z9NKjKZWnquVoj6Jg4MUPkAHEp9ZFSn7XodoMxTUUNTCdbLVuf7Rv6nYHUe1J8EbZzT5LTwxhG",
  "key5": "RrEsFVPCeyGjEW9hYACTG5GpUf1EJSERvK2QErWmRMK5sZfiznu6y8fXcUVTC3cuhdM8wPP4fbafg6g3VKCNw1M",
  "key6": "4yeRTYh9hYqyKpQy4Jsstb9GgS4Mo2coZaTYiYSh8ZrurTBEVUw3kmJNfoGrrHRkweYdbJEafQKLq2wNxq3dSZhx",
  "key7": "5LdTPbtWov1QieE2Dy4xPbPz3JvqMGtsY5XnU4Jd9mgXUPLhzr55mTxU98t2MAVu2DpsHNyugpi2ZNrE1pqsRA5K",
  "key8": "5BMaQGMgBANkSzwe9vUoYdFJmzEex3zdSWTWUiu1aAGpsqYyDcadDGcffT2tAfqLt7FEoAE6ecbPvXXcuhyPApc5",
  "key9": "3KLqWv3UD25UdWrXejhi1iwuwy4WWmesckq68pnxtC5Kvw2ruvu6nWNwKqT6pMPTdGQKswJCWsoc6vrDJm2ytk2x",
  "key10": "4uvkxaery3yheWkDY5TGEuDVoewHEgB4pQoZBQ2pTxggSiG6TroTPeAoYp25qqronFgw6CudofnmrRcjFQ6QZRTU",
  "key11": "3SJ92m9jpMRELgrqRSgtwKfZxzXFYPH6rihh9m2nEtBERcNR8RXowrFctobJz4a2G9ytaefYyafKr3KnMrVAzHJN",
  "key12": "4cRWZBi7615Wq1HjMpgbiexdh31ZfBn33oPDKuBL4FYMFYfvnr8hmfkCKBuK3kr9dfkbLtkY2CiLvrf5xKgF8M52",
  "key13": "5dd9BnYZ6ho8cWCAdVLqminf58EtCpBPSTg6duUbVoB767jKkZJe5tSg3TTUUMrDZqQjavRLWv8QaN9Zx77kgVDu",
  "key14": "2oAfXUxAcHHmSBg3W1nHx4FS4uTZn4EnqoR9QjwNLatCLnKCBxjSQtwPkhY6LWoMbQ3qujF9A1ZWG7tzXY6DzLTq",
  "key15": "rZuZSPxUEuBKQk9H7L8EqMY8JNa7bGCZCxYHed5nqx2pF11aPZHTtrEFnKNV9PJyXbPbTDknWs8huihmzfBGXZm",
  "key16": "2QmWDXPuozbV7J7aQWMX9hhnkvEjTqnNPA5WdEgKpcDdYBo6awL1dn4gHCp6ym8HmkjgbfB2etfjY1e1agaqpTfe",
  "key17": "6gVUniJmi2keevkFdVAk1zMS7J1DH1hkghq1kq9bfpUWtnscViJTTSJdqFxbVVKDgHm89TKke2vKA1H8cp8ckKa",
  "key18": "3fMUeHpgbbWxEoiuM3RrRM2edn52Mf2b1hWc88rd7QV63Jx5nAT3QhDrw1MTYqcSFVC7P3wva686P3rt3L2duN2E",
  "key19": "44BUDnQXxj5rj3iSDmVGPraRy6qGehX4HjxoQs3S2emaFGvamZGhoYtWXddUC3U512DZTgYqGLxjTZbnFcshTCuh",
  "key20": "puvHosBroNkMxWpx2GLMdTVCFe3P2rshui6rFDfCJzQJpHDn2tED4ZnGW86Lf34CvoKQaNKu8QEANLLUH2NGgPn",
  "key21": "4zwPJx6QnJQktZiW9yNNJNxxYnGWSQAW7NK8ZjhT5Ga6tNtL3631WGe18CEcJSXjbM6YxRmQXueF1aLn4PZg5Xo8",
  "key22": "t6dodaLLv19YVncTn1eSowFFg9AmcsbQRbBJSoh8PcKQQBCAJYexK32TMaZc8YLoSm2ZBdx1Y4ZvYNTWuBVzxeu",
  "key23": "2WgAapqEMNPzd7wiSLeMS9vWXBC5Y4VEXDajbZmcmpQVoQ2r8iDRw5JZ5EpdY3KCzgRZNypkRyRpRS9mLtJDkyYs",
  "key24": "4JrnYBL87BbY92L2ii7DPAfGdgGsgiKR2wG3fDdMHqR87XgtjKDRdobYLwsdjSqjkbmMRrKkCwXmSeZw9s98guQh",
  "key25": "64B77L9Jz6BTVbrQaoAA6qxwefEC1deeXRQaxaF1N69XeWgsnysaAV3E3jyqyfZ9BgFM6oTgW6TyAyjASMcLBRvJ",
  "key26": "92C9Nj6b6rwGCd8BZ8WiHHQnoD2ZQhNVTTmsNkC1giBsDJQpMdy4wRW9t5nR23DwdC7BXJdy468PfoDTNn86NqC",
  "key27": "3zdY9JgiJvuf4KKT3XQymQ21rk1FwDsoTcyu6r7MY4LECrRrskdfFsrmyUWfZMGFyrcRiNXGfRDZBCneZaHfru83",
  "key28": "9vBg7QW2UKjV1m1LWpvCqoTc8FT2GeAcTg9zYgftdGkNB8yqJ5F1VM8nvkohSxk2VUpmr422G5E33TNHfVkrNi5"
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
