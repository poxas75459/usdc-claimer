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
    "4kZDuD8BkHt88etZWpmS5Gy2PbRpo6uV3p9F7ZxZj1a566gVmSQsRTBR4uKYmozymiBWGFNrPqSddVX6e1CBAim5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "542Dmcd39nYqziWvd4swtZaiPqV9tuqx91TxK5GLej1HBU6JVYNp6xcc4RLbeYzVJzsYUTMKWQeVRsksM9TSs3yR",
  "key1": "2zxk29soTwHmGMDyNiKkYc4bGTD4Vw7W2jC5PiEzZ5nWEPqvpnFPcCTaLgCMAFE7sQJUuVv2CjU3nZnDr8RVt8GN",
  "key2": "3ALASAcCZoyPKm1ebBfzWhxffFh1fAH6vLcUXWDUztUSLthMJ9VkEFQgx7eHzuAtreG4iP3vpWgpxBMfg72prn8d",
  "key3": "4JAeoLXHaxfcSckdBmUH5q5RfBq6AwAi8wHumdaKi3mZKanMLLvZGnzPPp9yKUfPG1WZsRa9jRNwmwhQ1LCaeHD4",
  "key4": "4vHJQgXeLRFKY9mdR73XdKMqHaqui7XvbHdtPKGgBvUm5qwi7ytfgGNrC4aGU6TW7YGGUXQmP6PwXMtk2v7RsZWR",
  "key5": "4bxh2Pzu5Vom1iB3uttNoNkj8BwTHhy9pGADiCEUsJzwDF57pz9Sg58RyRBJWYhk3koYQEKQfYYDspy7wx2EorBg",
  "key6": "4hku7kejTqMjQvprsiixuo8LgGynm82dfxGG79Euio2soeQdo1A2WeYo3CpAEZx2SszuV2bb4gEjZ3LXth1snpFV",
  "key7": "4L6o15th9AzdmiHeMQcrzwAgHBnsT5rFm6Q9P6UBXYEYZozd7p7KpLAdFpdtoifgdzuJTJsiUpxv73hgoQpC98ag",
  "key8": "5KGUfze7CzvDDtX832W9yDre8q9zLXBFH7rBHMHfUm5FgmKVoQ452b1RdtPRbeS2GFG2QusqrhaWqec5KS7x2gDm",
  "key9": "4PWiuxJDFpTfqiwjgnr9ABtcPEvgyqSkYjyQv2FUwFUuGip9FJDdVd6HaxQsSoB7RNSws1ib2ZmxkV5XdWVUuqBA",
  "key10": "2tis6VJo4Pn8UFhVAvLyDu2RPAVFXvQjrDBJ32ahkW8rffW9YKj5xHVsdJuCkLjweCzRq8VQSmG6E5SbaKhVqFwc",
  "key11": "59TH5FwqFQaSx1tMhuCKu3vuxuzrjkRxS2c2dReEKsMUNpkDdNStqGRHGyWn7wgUiNHR2QzDBAtVKt8coM72YET7",
  "key12": "4x77YkULW7GStuCAG1KWBYk5tprxn35Stbb2NnT3FgKQP6WockVVYwK83w3koa2RKietinhs1DfYyWBArohQ3snG",
  "key13": "25PzUmfgLuEa7eowTNffvC9HW6ruc9emSb3VG3U75baZiNTJy2gK1xheAYdfjrMQAt2tXqhjmtDz6LWcx7KPEqNb",
  "key14": "3qXAeR6q7H4SBhbVsyEJPhjr7jkjG9zvArsCVFTEFVGfog2LM4vTBAvTrGh6oseKusK3YXSisz2NDCfaLNuKyqQ3",
  "key15": "A2ag8bSWnpRBBELfFNYALeVGRWEmAwRMd99sSeYdrF8aMQM7DV54CVUb5xpJRxGD3wzBUGjMJKWg7ymiKXqPJBN",
  "key16": "2bk19GKuQ6NT5FRSLDUWCz4wbpGm93ZbonanJnLSSCYcdwe1crUHeqzyvhQxvPmPvgsbmUX1oXpzb5btkC1Ezz8h",
  "key17": "Bpoxv7pbR5cDfMiusUKqA2GX49uDXxvA4kXoxpiYk8wHNo2qr6qjR7r479fGUPSAnaDoPBsfRMRhZyud9GjqgFB",
  "key18": "5ANPV3crwCdWSTpt3n4aBsYS7EnS7gR3qMFR86P5CtZM5X3PNiA2Xn7HwTEKviLxFXaF5YZ12Rnnevr7nQhi1NCS",
  "key19": "4qKSPpMndmHN89WpYLvyuLUWrHBBwkWEGQQsnQ93VCr1SjZhxsUBQT23skW7nbuhDgMJMU2taUJo5Uczhk8y1xTf",
  "key20": "4Q9c358fbiPbZGd5Kvp3PiKGYkxbGPrP6UhbGNxTYw9oxXuLd5vTKtqsCXTnhhoXdkCYpytv4wbckND7Tet9FqsP",
  "key21": "2sAiuWnv6DUXUVZzLDrx5SUFZcisy9Wk6wKt12rnBdibsKfEJbtCZ8BB34U6z1DydzmPvGy8kyEpMbo782CrUViv",
  "key22": "nKUQSNR1K2SsZXCPGRTSseT2HsqqzsKfhZQqDYTZPbGSyHfctnqHnQcZL9HwwfgriRBT4BgCTfCC44mUFCQKuGH",
  "key23": "3nKMQeTgZfv9dHomoMFE7RsYbWoFAWty6XM6QvZdUgLDh5LKLifL7xCKuWqj69zxACL7DMrUCEpRnK2iB1b457DY",
  "key24": "511goRPaRUenrC7aYaQA8vzJmBt38Zwy6pVt9eJpm7kiNKeRYvucvkNi6SeNfwZnctA4jPQerrjcTaLtBtdAMp3u",
  "key25": "4KER117pEgEmztnbFb8kD8MUfKcMAuVBCkkB6MVz1ahicGubyyCuSM1JkyWmmNYi7ysrUjwVk66BuAwufddj5L8H",
  "key26": "2NP6UFHCjSoL6uXjzBScnZGe1k3G5xRpSbP4tpBc8QQ1aoq4SLSTDaPFKxnbCwqnVUKuCvxTU9qwPCpXMByCzYgP",
  "key27": "2R3GnqjkvMuAHaeBaRB23qjoEgFs4rR1ffSpzRNxS9dJUs5FLvkyFEgqjU6fHmRBP8iAefnt7uyvgKhP6FbGkbSp",
  "key28": "36ppB1tfp9eKUMWnugyb1szUcH36EhHo6XCxsAf3LXg8uak3Kzk93zpgZYMqHMsGw18AyjfqajvzMnDC9gGB3EnH",
  "key29": "78fqsETJi3m7i3DBqhkAhAiu7LP3wrqBbwnbzb8yuutsqbM4wWNAepeCinoSrLSiAzmbJkb5YbEDSo7jt8V1wti",
  "key30": "25rt1nkPgdxDYsVfqjL3kVnae1JmQ718FwL6dLsAN8GgtErVZCCyesD6gr92TNB3sN3JtFuPHWK6kCoUE8WEUqpT"
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
