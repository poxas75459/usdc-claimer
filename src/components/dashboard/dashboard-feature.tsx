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
    "3gpGTK7THpZ5DjiUwTFZDMQdJHj5kdE9fgtQH848b3E4xuXR4PuBGWqaNWWQYSjRMZQceAitsbnuEj8QwieTNXk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mhy6BGn5YJAYnhScVXj9Kg3997gqj6QMqDPKi3dg96ymUwAdYGtKKRDRhXfoawEs5p6iapNPCR4u2VeWPzNsb3o",
  "key1": "2JdgibJxfxnQ6NJzoHcHYYMKx4whmKiJKQ7LNue5MDeG5ygewytFqSU2gJYCUvEGYfku3gxNmm6J4zqHe8zYfx2Z",
  "key2": "67Ncc4LrC7AXkhjUfzkT4iLaZB5NWf6RwvR7VNVGtJZKeafvjJuAKvQ9ote1seNrr7FznFE54sXhbWCxW4r2Wd5j",
  "key3": "3JPG21ZsVsMXNhjTBfTRpepGChyh7ffePMfC1ThszSz6Uja4FiAeR7MiCyK5FzdevqVSJW3xV71RUJzLYrfyW29E",
  "key4": "3yFyr7YXay3Fu9dHWyJve9WywiUP6maUv2dsntHU3fHLcEE2GupP26bEtkPmCFwcia9tak6x7gxgQDF6GEqCwFte",
  "key5": "N3biYC7RXwgvj781BefFDkpWSZ7KH8HC3xhv11sKy3dXmXMD8BYLhwVX44ro2JMouZKcgrdUoFvDt7qp5pR3fZW",
  "key6": "2eDYGA97tRE2iaHwnnRUTne7zGgHdjATLxV9XXZUJRcKain2EqcFEm8gX9aons7wJ9SnWy7hRERxVoGWDnC3bitC",
  "key7": "2ubhYNw6JPZupeBrXeCBogFDRRhMarq7QQqWQGmQaxTwASBpocXmbBFKve2AiKGetGLkBHYWdsp9s9VH5E3nVhom",
  "key8": "58i3iNJe8vY7698UqZ9zeWmb7MhMLAZoWhCwSbrFcFDPz3vKohxtNZQC4dCpcxvb1ENnwdaskQnx4gKJAjq7nGXK",
  "key9": "1qqoZu9muH7KrygttjoKTLNuHfEJLGvmY8aySJPYeySGQchffcZAjiPiuYD4Pj2B2ggtwyv13f2VB1UY4DeLKWt",
  "key10": "36Ta1njJSFWUvM9YTx7DnhpgsBgSdZbKoNWqrSrqSARVx4M4QeFt6BU7nKpt1m5KCeWZfP88sSk2obaZteUgmQUw",
  "key11": "4uZaL8H4KYZVzxdCPh8sC8pnTp3RbWAJjvrY5NnYGPKNwExKhtzkRMbLBMtxCwtmPPERwbNjCiZ3uE5keV1ojk7M",
  "key12": "4z2g4BCRaiuo6D7i5jNovUjCNWo4m74suVfaJEmhHawJVBE2mpk6Hb4muSA3GTz1wThxB88zmRDTmdWAfq2beCuM",
  "key13": "1jL2N3Ad785oFcKmBQMFHS6kstHGnB1BAUi2PcZTQdZDzfohXPipkUctu2MFFqQEguJcpCVropeyPA1Lw9QJ9pY",
  "key14": "2kTRToJrZ922bd9Heyks7e9NDuA6vG3xp3kKNMvUZEbpodBqbyiMXm3ebRFEujf5wieeBF5ydQmM7PmLS4ANjcXs",
  "key15": "2rxs4vfG3QNS1V1p3h8ciRPeJEvHVeCtxZv7Bgennz1ZAdsDaScdBr6ZtssXSVE1WnGh2FKYuATBp4yNRviS6gDw",
  "key16": "2czn8eKJK3Mpyo6h7xKnk3QTW7DdGW6SPwN4ok7qDw4eDVhmpzABg3Re4HA1igskprTbH56iT4xQvTpwWgTXoUpS",
  "key17": "3ety4PJVLqtzTrKKBkCHag1zCb3pm8dFRqgf9wC4aWfpwjh9FRZ7WzJj4JqQfkRT5WU3e2XS8LMCn7Zhx12RMvjr",
  "key18": "2yrNkf4Muebx18k2gBFhSirRezjBMELDZdU7jn63PwjVatpP9Joo1RwtwmJt4UKr8qAhdHxtrmtR7DEcZzYiPM6m",
  "key19": "4Tckmzvd9TDXgiD9tjQDQyVgWgERNZpwJq2FCw2cPvBCZRaQr4z4x1z7QHeSbDNXyRgSqXBmC4EBbBURqHsW4xxq",
  "key20": "41qwMEqMBLVvmhAmPuiqdfaYRMmuUomiKWU6WwqR5iWS6qt1sGUpfUm5B1MvhUnR3TZk6yNYffy4aTQJWRKsJbm6",
  "key21": "3vqjAwAe1WwwfGg7cXFFB7KaqCXw3FttF3vZYaC64B8W714HuNYu6iHZd8xrf8HDFQqk3ojXuSZKSDFhn7niFeh6",
  "key22": "2RmdMmM48ATwfFEjudY4jkojLXYV8XMDrBEgP3WELEuAoNn66GjLeTo9chd7DLzpsTGSbW84AbFLcFJLywLGrHt2",
  "key23": "5dZYxjz94dJbCGig1xEiv1u6X2JyAbnNVAquZ2ozhb5A4W1fmuvp7BQU4WEqtHt71KBp4wYCRHARU6txxz9Tg3Zj",
  "key24": "cC7PrLGKjHUhQK8oZMTQnUyZLEZwWDQiVCAMy98NondFPDDoCMsB3EdnWTRDTZChcbg5AyGPyAQfGCvLB1vGyVo",
  "key25": "2w1jEWDdsGuApJxxme9a8iRgzovuAYUeeDdb3Yuo1RhD1pn3tgBhxtSHScYjvQyUxU1K2KNLE5rkybydGipVdC2E",
  "key26": "4Av9HwP44b1uP7f4xGWsiNJv62HnkCaHqzN2hXC1oSYYP87p5DnVNqGvWhAgtUm1VLcFwmWnGESpvsuMbD59DS6h",
  "key27": "HgeZoH2jfG6J2ohpvWDV6ZvhAfbTNdFAZBa9KqESqbLfFsyqnn7vYsEQpKkhcRrSYGDY7brRqZQxr4uXscxE7CM",
  "key28": "4EbvaBXL85bcfh93F8sd5p1tjArXUf6XBT3wKoZRhVthsyLh7g8zFStguXDXrWePeJFC3y4GsmgKHyX5zbfYjjTF",
  "key29": "zRhcV797Nopvmajj4oExzPn4HSvZwUUTcAd2Q4kKTJoRZ6t2MRqRmZiGQ17EUek6EWqA8XWQUyxURUapcp8JWGL",
  "key30": "5aXohvS9Ead6iWXPNfy8pnXvUR9ZubaZFgj1s3sBKZZ7hdCWULHN7Ug3JWoZ125BnPeWJRDNgQm9JgCK7j8KSWo6",
  "key31": "5QPs5swXwCVAfExGYn4xremo6dxeDwSDdiAsPQGiPMbqRgdAMzYWyyZFWMkDZDh4RtxyWY3Z88c6wxERhhZyoiHY",
  "key32": "4hkMAXwBeX4hKTGCFkz9hXMdPDDNaXa3QzfZLAzYqtELUFHCNg9A5kxCmPXieQ2orwYmEZ64rfLwqRyEQgW8neYt",
  "key33": "47U9Wu5pczy8mgNuLknn3aZS8bBQCB2vem9u5JhTrzUNQX39Vy6iXDyQMHtLxDJadaRap4DjHJmmGjdxPubWjzHz",
  "key34": "Vo2Zo9F8MjmNLHS1RTbHyvBizuCQwn1uagCVEU3mWANF4JXdVn5AaxouprgdymMfo8uyDgSrTgquwsSfCMRRCrN",
  "key35": "5Am3zpXP4W3cDn5vmm93usum6dJawjStd4VeXdksN3ho7kxKBzCLRUvpP8MExDpeFzWL2no9Am2EjZRxquDyZESg",
  "key36": "64rSt8rKtcCnQmGHSoABsuMAKk5ZStUUpSvskWqzc14fg5ezEUA7D1voUQuE9FYE28pAb6tK6GVdiCp9Sr28xjSb",
  "key37": "2xwyb8bTfet2dAM5hoiJE9hXvCo16Ni1ge6CrdkAk74XQhZszwaYpL5RfYRz5A1unoCu2NbHshA7HRibtF9sB79g",
  "key38": "46zCBdnS6Yfep6bvZynHjyuoeVz1po3hrFZsnwqaGkCdrCJXyfSbRYEGxJhVBLJV8CZbp3V4RLofkEy4wrCLco84",
  "key39": "5u6KzWnYyZwHfbFjLjHEP8MPHDA2DoAf9ehaY2SYXRZxeS9xqeLaJe3BcPZazNY6yZzvhKYMaA3g3n9EPnuMHHZi",
  "key40": "2FGgpyFkSS7fbp9c8YZGyZNKNowpyjCZkW2gox2LZqPtEi1CUWv4XAWyPzAojcXmuW5XgohQv4CBzS9qWNNi1FbV",
  "key41": "2XbJxoWQ7NqqwKgX5aG8vagJBy6zbggLvAGW6WKEDN84PPdFubnhzrPCE7tWb4fVoAXSTtRHdHoYugdzGeDw6gk",
  "key42": "2T2hfh2gM7WTKDadtxzctpzQ6pEsYAB39Gz4WzvFNnq2fEzXmPS6HurHA6h2VZ9443eN5Rsdd7uKPXYFzTANXCzU",
  "key43": "5ZPKDf62HjBFkrr5FZpQVUaMDuDGgUMzFptAG9KmCn282cY3xbSBC2VGfT7JZKBwxGxxjDVW7u3ptWzG6DYiTaVq",
  "key44": "25FEzfuQgadHEEYY7hJ5Uzu3U6d6mYVhJkY3eZZBoAo2xsYxmto47Tj83dR6JsxhhcwYyAmHxd4AexAE8zs5fnbV",
  "key45": "3nd84fr5nmhwVHKiBDa7aNCWG84wSu25X7wPAzzdHjrRzxsgWn8TUgZ1Sp9cAiDgcssLYGQ8tE9k22EDaZue3gZz",
  "key46": "26w9JsvGQauWb9EaSY5McHcP265Nqg95UcU9eDSJPPZ1Eo2a1buXmE4KodM2e2wH8mrwDEv5d8xaNJcs8e2BvGV6",
  "key47": "557Hsz18Dbfm4YGNmpMUf4N9bNvoXDHtTpNpP7nEh2dBrsTrhcEVNvKSFVUY4iPz9NCpxoxxpjQwg91MWiPnrq7f"
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
