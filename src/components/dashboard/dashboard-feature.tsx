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
    "5bSdzKNUKgURRgBstWMbYLEF8oDiLxAaUuW56AEEuDHt4fC3gykTtjuJ7CSM68mcUMPSFAAkvXQU4tPNCfYXj7Jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yzYwmTH5av92VvXbfVUtW7seFFbzeTWqygB1AM4DDsGaENhigsVxRnqKEtZa771oEnqtdKK43ub2J2GvjyWQ44y",
  "key1": "2qXJgUYGtsuZ1YLATkqbCMceGudMj3KVjqo2uwF9TzvRSmmrFN7uRJYkivAGtRzUtegWk4vRt3xdXQx2NfiVVQCm",
  "key2": "67efTSzXtQC66V8pn4UAVr3qRvJxRxPLurFLBiBSWmuQuqV17DEwuEtMXN8cRiSaXFgaFgYs128j8PSS7Be9xWwY",
  "key3": "3u7UdVS6LVNzaETVWkd3grFJGafFaZfuEWdMsw8NA36QVAoYbZiQkuZw7RwGVdwn5mrRuR5o9GYqbo5fjDcEDA6D",
  "key4": "2ZPCBmFG6QQMvbaphM2KFVHkWwBySXohX7iBAtmWAtAPeTUd8HzFFP24Ka6SEt4Zx3J7i4TjHE9SG1KuNJJeQUxv",
  "key5": "3LXk6c5pc1ESU8BcXxDz1i4CDMM5iBfP3Yj3dFqPMgdkdH6r3bxxcwMybDDDWL7cSxk6XZcx6vabLicYVS2TXj8z",
  "key6": "3dNeHk1nGvg8q2uQNv4SgXt86uNEXrb4rkTzNMUHfyFL1CCMokRY5NwzLV1KQR5uqF42MaghDfaJm4NWkfdf1esN",
  "key7": "4X4jGjJovDvsxhi96C7THkbXsvuqDs5P5kkfVSxsoLbjcRAYrpC8PzV9SBkfHPZ3Tsf7xEu4UCwLt74pyfEkXLQC",
  "key8": "m2AgsA9iij6rYMK4BoK6RSFiVGMeu8tgh3fq1yrQ4XgbAHwrSTrS2wv7ohykV1yiqxpgNez297iZgZy4yvJ79uZ",
  "key9": "4hYQWtM3jwRwEDFGMDYUFi1szfrVmPxKMxBJkn8muSCK2vRWZsn1tPpybdSpSWFQox8gx1oRpY6P1NsAu6D8wHH",
  "key10": "vGFbc11e5iRDkhZwKWoX358dh7SM8uxBRnR5YAEa4R632Ma1WmRkva5FUDUZV21i6ywbNvuppCPTVseMHfb3izL",
  "key11": "bqxXYYsfi1VEG5H6iaMuNA4ZC4ruS5DYEgqnmXXsp7D6e83JMwVALddxa1TnqRYnuBhZvxvJYcRtt4wUf3G2iMP",
  "key12": "44sPLB4Gx4EQ2qD9JgSD3NXPDhMfFX29ZqQQPAgBZHTnUowGUbFapYtqmW9TXZ28vCSN3ryG5gB2bYNUFaZXTfBw",
  "key13": "25K1WJxRSh2rtoXyjFT1tpRF7h3FyDdwxiNjMJSRuP3cCbPiSw5QtSdywmQwNvWZtuFJfq9ouuvZVd8xDeo8FdtW",
  "key14": "17ZEFqfspgMBxPuYQTaUYGMzuCLvPt7prpkJffpxh21WXdAdxDKU5FCHxiZxKDTJQwiNV92W5YCVxrdwMWLT6mL",
  "key15": "3rgmf4RPyH9fZr6hJBupkoANQQprMqCdaQHKexY8d72y5udJMTuDyMf1HjV6wkaQnt34GRZhXFejREzN3zKQXqHt",
  "key16": "43vXcjHJBdYQNSbAZCj9Z7fimGwWkw4v6cbVQQ2soNFTWcxaBw6v45RUBoHjHWKo4tQAMaz6x6TdAn5q8Lhh3Cp4",
  "key17": "4Tyrnn6YYwPFAjMfhAioaWcctzzGspKzKTn3dirNtyPePbsvKCAVQamfQ3QCLWmkMCSKxkk7aZ2zbyBPo7JTemcW",
  "key18": "3ArcFLpYfPhNmhFZY2abCdB1vRVaUHzhvPTjCnZHvNDA3fLMEmfvxQ9JH5XSG1gwKcSkbzA4x6SdjczFCr1c3cnZ",
  "key19": "3pDMJdkANbboSicudaQyyUjA3Y2X6eeMLU78WzAM3xARgMqoxxurd2iEGHcdRujrVzG8HkDcAvWxKjmJjinx7AfN",
  "key20": "4wE76uk2RTLCFgbyHrKPULzPvvuDJ3fvyKa3YfvomCStELa5HqQra7P18AxVsYjyaqcZbMshbCrn2jKq8GLFMB3X",
  "key21": "3HfihjWUBJpE5pL9nG1fhyGLEYPPm6Dyn4tRbfXCYr1LNUKUbF8LXRRJq4j5SUmAsQU1sEqHcHpm3y3ouBrGBztA",
  "key22": "3eppya6LKLxquzSrna7dXAAXisMXJnnsfyqgFvvMpaxUN4obWspXQrPzbK85gJDdSrA92ZoVU2vhMe1MPGuBeq9D",
  "key23": "2t6sixZvadWGqV4AKTm3GycbirAb7JViXAvwd9yYh6jzfwGMuXpufBw18km3TfFcQKxDy2LTX1HBVUPwm3PyKwZY",
  "key24": "3AxrxnJuA11K3s37Rq4pwC9zUxrRT7aJUgB36YCXiWzVv9FGQwgryXZPxyxMxnsToLc4hdfANKuVvfTxuvtN3Sxg",
  "key25": "45z7diVPe1EdW8MUEYJ3KuByrfCwE9WyPieJxJi3c1hBu7KoyViZx2yocVPxTCVeWwhHN3p3mwG1Tni5RkbRYNMo",
  "key26": "V1xb1KxwX1DTYfC5ADYviaR91n5j4oq5rzrB2ZHZrkf33SRasGDKwZAwjfZv4cSsaFCQNM6RkJzbWvnLgvb4bsq",
  "key27": "4tqayr1Xdo364eynV6R4eAeepEtffZmqfBSahdQxbM1NgabpyUjW2RzALc6Nwoc4Q34hCTPUNvZTcYZsSEJEZbxb",
  "key28": "37T6tR8ATh8bBWN8asstLWcPHFdnHHVm5Z8pzCVmfrKsUphc1HbNovSeCzry8Z5ot5dAhKpa9vw5mG7YqsK3kNJt",
  "key29": "3ehetwTezViK62F8vi2wM78XobPrkzbHRhSkBB1aVChHAKTEsNGMD5Mkr3C58PsVS6RHGJDSE2pBwueqbgt7faf8",
  "key30": "5JMNQGxDkDMA7oNnM4kkfMXY6i1GSisnBSyKjzvJDZjKLiPTpeRhn64F9vAN9ER6rhAYEDHH7MPqa2oww6svsXe7",
  "key31": "4jmGiYtMbKC53edmBB7DcKjCFgNg5RL5AwJiiK8NEPqisrbULgKUJuByso22ZrXLdAmMBZsEdxP7RGA3vBJRXZZp",
  "key32": "33awj2jbXZ169aKgCcQN2284nQAYpiM2P27gJ7DMPHub9YYXJ3gKsJANFJLFzL7kKTNP9QgAFt4W61odPexAUo6j",
  "key33": "62LeTTXQzQBEzaSQ5nNwMmj1prE8XMJyZqpX2FVuyfGTYNyGUzYUpoyGSysRZtAGoD1rw6vn9era6YcXeNbMXx4X",
  "key34": "5PHqGbAkmNT6qF9sQnn3K5ii6CZhzjx7JKyDExtm91pFaSpF1jqbFyuZT31yn6nUWXSSN8rmyBMPi6bFxUtad9LX",
  "key35": "aeS6b7xc5GCzc3HVguut7dMKVB3zaWfWgHiA8BdckwzMFGZzvNGM5wgfK86GwytVax6YvGEikVb1A7estXqapc3",
  "key36": "293hyQvv7auPc8N1kbFNV2wcwBhSq8rgUmmrAbVeb4woQaLV5uZie9DkBKEY27BD1VQaEix7kHjoTSBEWW5EJQR2",
  "key37": "3rgAxra52ZpSytrdSyJD243NYf4wxzLBt8DTzgfPvPeHC5dAKhhWSKpZyQ2PnYRr8CREsETnzcBRPdw5bRUCp1VD",
  "key38": "3CyzM218njoFzu7TwSQNKddmhGM8nskfLRRcAd5SfibXZFfZfadpbmtsiBC5fXQcprKkoCeRAwWSjPu2LRGmzvUU",
  "key39": "5Y2QUSz8K2AD2GZpQ5j47YTcGEqMYWWxcRRFsmMcvRMaApyK1ykjLsK1KpYGtN3BmUdwzdr7ohPD4bBt9dNdCfr",
  "key40": "4rLBQA8oj88rXrLuhg3oVGbLJ3ACweAKze9hC578XoL6fAx2Xvmfc8Q81s5Yruwtv4FRzF3pQwD3Crt7fE7jab3n"
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
