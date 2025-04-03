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
    "2in6EQEbpdE5zQNBLefnLbqgUhfk3TBgpDDELGWNhZRq5dM4P9FucXV7XGLLNJyAozFgyVUqX5poTw513MTaYz3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DRwRqtk1HViPK3BPqns7Mff1uaaFqe2jkAqHus2UcTiPPk3NWQ4CQgyJVmopXZJAPyZgAPkL8t8d9FmaLgraChk",
  "key1": "2PYAF9CUwMA3wwQWnai13PgsEGjv9pvyDACKxmSxQnUhXZ3Yv4qsjTkJZdjGaHxr7NrTnbGh9KFs5rWeed3nhkmS",
  "key2": "4uRMguWVEgcu9Gt8ef42b9YkKk9iDtZW99DpRFQEJYqSRuAn7JG1KYmjGDb2DuXpAhNPzm8St5zbeEoqNheMqURH",
  "key3": "2jcgzakDpjjPV5quni3N4gpNzCRrW4kyWa3TimQWnCqDtn2tVkcXiKaGdzJZtY4PKxmJJg81v5NdaGokPjomD3tw",
  "key4": "5wq9TmWj59b6ZgfzB5AA2u9uduCbzLKLKYZuThsAzi5bJ4FcrsQhJrGQ4wE77KCGG86C6guEhMSBHNEvhhbzomuP",
  "key5": "52yhew5A7P4pthfVAN8c6RW4SSXXTn6Vo6k6s8g9ZBNeirvJK45mb8ZBi9ma7fDXd2FSmQmRKwEVY7U8YvFSRAs6",
  "key6": "93rRDGZqMpFj8Re1Txs2oAX1whePL7xxwAaj4K8yucmcc2P4wUTowirDPXk32LdoeR5sZnsa9gkh48E2bdEdM25",
  "key7": "aZTnxUyiZJKbVUiscQnR71JiyJk1t2sLSJXik3Loos3AZbkJNwTCh72kzkRm7idjw6D4ahjt5psNiVfrZLX1YQ7",
  "key8": "PyPh7YoDFrH4qfRKx655JuTEN5B7rf2yxTVcrVsNYTjrM94RBpYek4MPtuQgm49dFb2f1wS8YZfCaAUvi7Hjju1",
  "key9": "2GzjjS9hSdSHXCVExrPBtH2FjQPmE1YUXFrcorXDnqPDjnReuj8WDtyjPMiJ5G1EJxNQDSL8GuVfXiU8nyefZeva",
  "key10": "4LCkMYwht4dTcAWcWWVBYNTaooMxkYBWauhYm3Mg86de9D86RMkGdrLQvnbzrVK3ndQ4QzqGzHqYKs22tFYs3HTo",
  "key11": "2go9cCzf6UdHiGe4xEhQC3LJi6Vv9AG7q5Wnm2QWNfCZi8eRUb5mhg4o2XWsaf1edzPjPgTVrynhyX3SoXyiB1ch",
  "key12": "3nGJaNZSgPvpiNoCp4zvc2pLjqVdQ7SGSqQtec5ysrXG6bpDVsA5WY7DqDHfaaYkhtqDw5mpj2ziJpWcn2rKaTo9",
  "key13": "2ni7KjRyhsLtFWLFrzuonDPrpmf1izK1S2knk1iy6H4LypHamAT8tskiMzsG4ogg1PEVqX2x9KQN4y8SbRHsGv48",
  "key14": "664LR5E82AkDg2jRbEe8cggazUYPE9JU3mPTkCm4ZnapajfxJziPE569qT3jxMVJkgYg3c1yALYzjqGUfmRnpzaT",
  "key15": "2NAkydnfSqkRM8r54v6nsuraWq46aTKrVqZupvpqQRtibptTFDpUAmo9b6UJbwbQuAqyMsrSttcvChQxAenmFj3N",
  "key16": "51Vcop4u3Ms6qUy5tryzwVLaMzyR8vkK2zUVBgr9wGGSxodUXeoAEjnHh21yF5FNghypGquHpZQ2T2ngsjTdb38e",
  "key17": "1zBffkgWm2DSGum8qCCsVtdSb1BjTcWTMAFLdgqdsje11xPDMzdKqZmJNi2H7FegcV1BtCN2pX9u95hWVTS6ivF",
  "key18": "zbjzVeSLxHvoRUXRtBYLQofPRmPBvx2pcSG4Pz1M8BCVX7ieb2wdYFQHqmheNc2BFVhH2JiPfC8fEvuJJzZ4PHE",
  "key19": "3MkHKEKa6fpvdSJjjnqXnPUouNCRDL5R6JNc4nGP1ey24WrSMi5k1LPaGgLS7fZvpAFLRJ7Ze39AEhbua5BnJsjB",
  "key20": "2XDMqQb6CCqieMNzF49oRvfZTJvTXnjfGdzkyNjry4hfsw9RY4fzk4vtepWCENu9TJYYQ7EoBR4G294x2WBt16Gh",
  "key21": "2t9uJRPYt44tGqy8N165My3M57RSaXDfcLayV5BNgZQDPycFA8HXUVRLkZX2aQZJjwV6e2rV3C4cLRwfSDjZA8G",
  "key22": "3aXoVx5iqhdLhhtHhS3KicPhk7DMoBo5xP2YyNzCbidUExpJnfxRvg9q7K4TDk4h71g2V6rXphEB1bzS4s56RoaS",
  "key23": "2tJvf8G7AZdMxzCyrEyuxo6hEKMs7w5mrgjdgaaWpQ55YnfyYbTrgTnSnLFM3DHYBrS4AurWztVGsFYacsQVS5BV",
  "key24": "47fJXLTWNPbwt6mQ543BbtcB4zeq64VYhF3ac532pRaohwPTvwPjQTjH6MezC7WQviKX5Yo3kKLKCmVfHSDuzL3N",
  "key25": "2yizyNcfwWGZ8KX8624gPXwup98axe2oSXSkgWja5gm9bNdQ7HNCtJfdEEyYq7RV9C6WTFpw2mDSTCCd5Sb5ivP8",
  "key26": "3tkoFGeSZAyo968TaGqxjB58a8PF9W26Y35a1Ly5XJeZJ9xU9mrKvFQZpVssSK78TSY4uQyqBwBUiUMQquRcGdDV",
  "key27": "hRXaP1PF3D4Z6aKEtRjRTQjuns2CSU8xGqmVW5Qxeiw9GcGEWsUm4Qx5mEf6VDVvuVBqLxBPYLWksvJPJ3YrdKH",
  "key28": "5TMirXp6ZZLdGMhRJC5rbYADp6hJoi3XAvcWi6RTt7e8JJEzysmB3SE8VTQkB6pdMeP3S6wCpbEAotuAkcGVAc33",
  "key29": "3S9KrHxXtNjFHi4nVUN5mycDQBbit8S1K3z9sXZ7tPV1NnLk75rAyPignKr8JeEBhjy63MjR4r4TAP2ZbxpEtaB7",
  "key30": "29JnfUw3MhwrAnaLx4PdvYYXeQYxTtnq1UxxpbKeWsA9QR8E9q89GruAzqvUJbfFfgaUdxN8cBuP6dY1WHBiVWou",
  "key31": "3iDn5F4PxfcnTVc8YSPdcXTNCbMaDKGQ79Y425ocGmSvxZQKjdwEo6Qdd2VeJgzhuVHyuByafJpVMm3vHodXvEwB",
  "key32": "5yzM37XAo9VKWMqDZgEUeGCRfpjLndcjspXS9EYKyAzhJqkcAXtG8jvjtALw34Kctm5S4JC6nyaeZn4SouuLfS3W",
  "key33": "3F96BFwKjjFCCtifcvNqUoaPQH23GfNVdLCKTPcrF7evj5A6n1yQTDVu8ye7CVmzR9rTSRYBt8HmJZfZTLkMrVUG",
  "key34": "4eEBTgaB1nBm5sfjgR6qasFNUu7rECLDCVNPSxWEFfg9iiK9ntBGLDjicKkuCs4Ybyx3a9d1eugqaioCGgHmRasc",
  "key35": "3yhv1Vgvc8feDrKVc5qm4La63aoHB17iW7hYbZQaXpn2LqoCcvz9yi7mTYaWd3okjVojzifJ7rhxyxgFkMmKkQUW",
  "key36": "2eYur3ooFffD7jzvuLiJYyqjP14Be9W5jZmQXJio6CiBY8p2Gd59atymWR2GY9Aqaehhfcqh64cYi9bCjzdjwKLF",
  "key37": "3oKfRjDMCJWobpUkjuEX9RR8RA3xoQWw6WX759EDiaB2xwuwP7HpfC9fgg72Nr9YEVSkx4zu5SP6LWDh87b2U5it",
  "key38": "3Rrdico8921UGSpsGko8aQZboZbVs75SdXF7aEjTAqgagDkanjK94VDykKiDFHeYgiAq4Yq8ouD7a1mdnxppP4ZE",
  "key39": "4oxLaGSK8WwjLeuQajXRxmUm7JiaGDC8Vv8RBbzj4hr87v6zjB88psT35Rtti3KZw41trs9qjMoX81HrxEikbWkL",
  "key40": "2HzhiBhQSJw57ToPdXR9fySunmF4Y5R97S4W2DScEeGhWfgTqsb62Tvo3MShS4pMX3FnYHH7DSHo3dJ9gDRT3rB5",
  "key41": "3DB5sQSpjc62h44T4mPpiFw4473hpoQZmHkPbM69H9n5Loi6FPQ2bmRnftrwZZD73opCkmnzEep4TZsgdYVTUPPq",
  "key42": "4yRzfRW941SM784ugLfpxA14ZcEoVrgZEvJnxUzSbku1hXdjUSCQCWHvf5yhQSAqPru66kvpiUuky8yb2ZV5gVQv",
  "key43": "5sTCJHqzD6CrPzr9u9z6eHmDB1VbBhHDZiS96TcmDUsGJh8ULZS9doSNc7QPUntqMX4LhxebHfPSNaRrSCTTUvnQ",
  "key44": "538C8EAq1pBymK2vsKi81ibDtR9WWMHyEHYQrqUnxdKnCtdrZiQHNStoasWa6JsJTuc75DKunUeR7MJsauE8j9JV",
  "key45": "oL3X6wmT3SnmawHNsEu6poZeEuTA19fjFEssx7kEQVFqQFZT8o9Z7Naz6vcr5SVoKpWVTrgPfGTMLgp6WNwayWd",
  "key46": "47NDvpHjCdF5iHYZjzm7HA2ve11gdird6sEQj7KKn5qcgxndBuQSRMnfrm8D1K9c2vCzzSsVZArLEZr6G5LZcF3x"
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
