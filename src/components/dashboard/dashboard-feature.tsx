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
    "4jq2WJbzvWnbyvji8s2bPo4PooXBaVT1GWeVKckpP9mjER8Vcwq1G1fpcV81PrCpG7XdUprseRDER4hrpbMg24kJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MWbJrmyMndnv9B92XoQR4XrncBHAD98ZiLYUNdop1Ta4vJizCDyGPPggGT6NZbJejp7WY2hVt9zqV9WkeQiYqbX",
  "key1": "YsFfj95VUAPPDypft7k6VRCVapniezUN9PTQdYqz8UHYmDnxoAMUKyGQr8WksXRP1DsF9uK5wSCFjVVciYYr5sC",
  "key2": "4DXEK775f5eQZtpihi8q3WDzXuECWeBzpaRWorqzteBnnw36tXLovkh2FKjhHSHoZUVrA2mZWvwXPDNesjnwjyk4",
  "key3": "5dWC5XkFAWjFGPuFLjm2svo6Z7Xi2Akwr2MZjhBnFhJfHpKV9mCubvAnpXmJSzDX5LEqL8nFvQURWYs96CD34Q82",
  "key4": "3A2ijuwBXVSoU7whdA7Z7yikiZJvf4cdPGq73bG8qY1vDNGpBG3mf2Xd1P7pMZxm7hK7FsYkddKpneoC6Qj84ua4",
  "key5": "2ka4XgtUSR5xFdmGY6QnvLuCQfQPKtnHim8ruM7zkhtStFczkqtMnR5yJkQcXPRLQ4VmQizZxhuHLMvYCJ9xcjuv",
  "key6": "3ofJtkzz3dRaKesj3oqLD5f1xcpqjSLg7GGpBvu6tfV3aZw9NwDGFJYWCiFxw1vYzipVaLB1gRbyVg3hDcLxMv1M",
  "key7": "2Y2yBpQKArZsDfqbbG7QFmuPx6AToELDDdssobmtR276mUJKWHL2TtxCBTXWbHZeZfrVAYDHYBUZ2Q4C8cSkvSnq",
  "key8": "mB2C97gqCfE6RaxogEqzSqDGtXSLUFXKPY44xoRLu8tF8zCN3TqisbibHBpX5sXahhRtKVA9MngAmH1ypzhgbmy",
  "key9": "64qWeTeDP5iWyDiaGVNn8jj1pz38NRLvPLpqq8KU99yH9beyWdTX7swkcjFf9kmiLeBnTKEw4nJbrT2oWLQRq5Po",
  "key10": "4i6wSgsL9EM3rTWuDSNFfjX9cQAjRaiGbbshREseWiWU98RF3nHzZAJzXwzSXvPnz2H2vAbmr3RMjPk5HCLdGyya",
  "key11": "3go3pohCmRkWEB3jYYb15S5sExoKFWUbRd6NDZQfZAqJYKQn5PdSPExSoWru41jfZCaMjfyP4qVUNcpugQcisZtw",
  "key12": "2EJcDijMajsgFXxzsfhpgdDAK1eHhTEMz6EtkhmMUEcXbPg49pE4njYFjK9ivY6wSocrTVbrkGQMf8S1VjJ8UW94",
  "key13": "61DzaUQ8Ry6148NmkdYu6e4KBnywG6aFBXCrsC9gPsrYqZ8a4WBNkcQbofThhLf2cCP3dtzjSXV6fBW7gWyNxQhq",
  "key14": "2syiEraGDSXjCxj8pQLY4M4fv4oQWRsmhj9aHKukFAYKcT8AaU8UoF4cYeXRGv5o8Xqtj7DVZfEgSL5eHwvBcH3M",
  "key15": "5UiAGKpCPJD5EGrBYBDtMtGqjPW9Px6fcRCMQcyGEsNzUU1kEqs15MfFbkZZajP5GhXxVT9VajAqqTZzoDFPc71D",
  "key16": "HmKbw7eFKCo5zecMAG9uJfUS2oTMruvP1T3prCGsKHXg6TdbvNd4X1NRsaAZoit7ijvmWwXfg9tKF6H4apf168m",
  "key17": "28tN4xTNzGmyad5borr48AmjwiKNqit6GSkQq97XGyScTv2LYCnVYHP8mUuuDVmx5zYa1tDEGDrs5vc13fhzL8hT",
  "key18": "3aevSTd2hmA5NHhRmNbmY1TnDoWnhjABMh5PwN7K2R9h8EuLNZroasjY8KkqULzdZ6kbPeaRYEsveY4jQqam6bKg",
  "key19": "4DBV91tA6UaLsS4wjR3npoix7pgMYUx175R3YNVXd5MjYD3s82HENHqkBYSiRy9vRRNNByEQsZVu43HAWsJVozDC",
  "key20": "3FWGwk7nJNWYNYw8N1yPRL7B8JGa4erUpp5HTkixRc44fKRZP3WGCZUNmeTN4UERUTpKCMMHrUqaacTjqLgCK1Tx",
  "key21": "29wpVh6FVouMuw3qRUWRtf9B7SU8V3V5tUno5vdkPnzXuPzGRFRhaKNBUTH3x9bxvmXp1KJTkz2zUM6AgrzCLNvw",
  "key22": "gaeBz2MHMWvSS5cnxxmkdrmmJX6rbjCvN8VPcbZgWR1a3xisVFViYV5Ky9AcKX2sYyLfB51tvskdLz7ModqkVrU",
  "key23": "5FPPs5qMN4pY62esgpmKgtK6He6U1nDCjKekhE4oSSAS7ukknmWi2pMj4GXXcriktybNNmxQ9u7nugDz6Q2MTDhW",
  "key24": "42LdpU1397QLcxCNgtLg91yyLMVMAszh4YjMaZPhtSEeSuqAco1iqnHsjzfFxjBHhL3RGP858Xkp2sNNG2AcRQJ2",
  "key25": "35wwj2hZhS6dcq1SuDgzhPnSLjsWfm18KU3CpMUoWogZEn6oKypW2c1rGvk2fKxNiigPhbVsEmZ83oQcFaJaht6i",
  "key26": "4watLGLXCMGtCrVJ8veTNxChzqiKc2ePu7WZmYSW3RdezNuWrcHnPLSsZDhWoHnjbCAetk9tUSEXAyvHHjsUd1bc",
  "key27": "2uDMpVJRQP8t3JBbXmzU8jup1dhqjDvSWZENWvz1omHzQijDXjTvgEaDNPo11LC5UaXiioFwbrSg2rEreZWHBSsD",
  "key28": "49qwroXyoR6YVnpbAPtacYn8ejZPYSu4VN97VV916bAeP3UxUyXFHebRHqjT39XbvT1vqgoZjbK5DrPqomgm7S7E"
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
