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
    "3YoK6LYSWDPkL55Qn2JdnxsUGwxZryobG5qqSx2KfNLt8bG2g3bewwbb4wN6BV6NkvPuwbqXmma6CEApf3KdSRTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1tqX3L1YFSbYfNDyb8quq9ReEHf813haBk94DT68vaY1AzbSiwBbtiWhx6xYWGxfcYNRo7JP1hGrGerTNX2hG76",
  "key1": "5DETGm7rGxLkgZ32UFti6mKr8K6E8fF61ZQ13DBwJsatgD6fWk9BAwr6BjbQhi6SyxefbR4xccueFigr6moqDmRA",
  "key2": "5XH2NNSD16ZHsKhXwHkuivVeskT73noHZd55aEhaYcPy96u8yuqt6WGM8ZZ7pmtE4HsyzTcZT6hGmp5qAprPjtX7",
  "key3": "5WWRJ3GEkTudTfrQfoZFz3KonsZ55UaLHaWDq2ZucM5PSXaoSNBMK4yMzrgNQGKyScuTixyAL1TTjvDtpe9jMzPC",
  "key4": "4KveUtwnLQ2aEraK9JYkPnqa6cVLazSwqAqpyoDNqJPGtqqfBKDN7NWunR91MPouPcHxWK5t1G3xdRM9SjG3xAH2",
  "key5": "4fXUgDbEZwAiXMMLUzcnCns3k1iJ2A58MtaYaoWWzAeBfXB49Mv3qVv5VdSphyUrSfLC8HZYtwdAH4k8jubM7jvr",
  "key6": "4A4DJG6t1Mm7o2PmzckvPCdyFZVtS4EBbhAGVXN8gEdqVoQNTFeEWSYmaFQHo2F6yGC2WQirWjqF76DizEEZp2b",
  "key7": "5GmrSrSrYaePxgfDUNuHyDBPAVu44vy8pPfaxwB3k6rPmKUAWFMsW7f5UCz75zpDsrbwmyWdZsCvxYCfYWb3HMVJ",
  "key8": "2y5y8hYxEzVwGpGnYGY6GYRFGGYUwT9r6CKRvMcg8BQXbW2GEfgDapVYAhJGqA8oYeKUXYnUWrmmb81WKCiKs1Pz",
  "key9": "3Zjxo6wppByznyfhZnLKZoK981qRCZMfDjsmeZZKymWUngpnZqqn66cAQA35km8j3ZeXzQkYA8UV9b4fh5X6sg3k",
  "key10": "4YvoP5KWEnSJw8KscsJagimXE2rCTo35G57RV9yQ1Ag4Pwz7f7ZLQE6AZUgDBoQjSjiudpxtMM5c6NwQYAqePv7m",
  "key11": "4wHAcL1zwrYYLfi8U7D12ngwz4Upjt51YJByNVD2PvBCmtQ1Dad13iguLU773sHbTiNf1iWjnvfPXXsDDY8nS5GZ",
  "key12": "5o1ungSKGr6yjSK2auahiAbLZr5xbHJMTkUEpi9sAS4MwBBdp9T7f9EY4viFiQ7YEX5UyYnbi8kswymENGN2mhGf",
  "key13": "2bREpCjYFXkrEm6ZxjfizVfmxWBwHGRocvMJxhA1Uqf1bDg6f1FyXRRGmH53LBVMc7AXsQMwwRcNe3VQRhJkwMtA",
  "key14": "55YSKtm9Vvdz4w7DbtQAtAjTperFf6dN6B3dZp6RmG2gBkFyaZN2Sn7yw7qHAsVKrqm6vBBc5KiRic7PBJ8Q6enb",
  "key15": "BEHbqvC3ZNbiH76MJMRbUcJJSuQXa3tEWLq9QX9U4bMXJx57cjG3817DqxDfpKDRF2Tvqajh3WxxkJyUhCCWjtc",
  "key16": "3bhX3VWyaBAbAERrFZ9AhSGsw2GaXjFo7cxU3nbakPHz9NeCEr1wsvM3goxXuJETZVVj364LcTURsLNh6qkv9snD",
  "key17": "5fCyFxN1AQ3vmWmpU4DQAFE1kwfQGxCqnCKLiFXV8UoCQVJA5w9K1fp9hyNkJz3Rmtm8oR6qgQxDjDDyQbT8JBmi",
  "key18": "2tYc2hyZBtDkGriVLYa7QH7bNFohUBXwrHe187KucZMFxsMQN1zNAFJ8ecNgU1uFRKf37Wrm5mZKCf8ECFT1iqC4",
  "key19": "5JsFqMrzqtN9intsWAsgFv6GLynWhYMUiKaSgjPu5FfFtEYp2HApWafyYDga9bLBsJH12mV3daWDYVx4K3TeJdQe",
  "key20": "3zWpvpFHKfy66fB7F6QZiyDxfpX1Jhe2Jmjk8AxUf5PcPQXabzoJ4mhdQsr89n1Etx7axwv4VmHak6LH68TZkQTG",
  "key21": "4hRVPW8B13oENe8jL9sQKJJcidWSmT3wz3zVKGMqdFtiASHZCBFyJxYFTWBjPZKsmBK6qeRF3uyfmoMokQbNFXGY",
  "key22": "5NGnyU4WJbipYPocfxoEskDqCR3rtzeZXX6dpyx9d8KdqinjxwKyWoo1ro2AQCdATGKmdXV1YDBWBJadmjv4Mij",
  "key23": "2q5JTQUGZJqLuX9KfGurYFXc1a1He84SSMtW5M1ZuuDEAqpHqkFEgvR1oTX5RHRu9nMoXNyHmrqtngos9MFxRukL",
  "key24": "4ZkcrZmA7USTMdKDJ7ew4NHrh83WmMi7yFQpKmMLfjcST61cSrNx84wEY3kjUG9mpWqFYKFmEPxx9hStSjg6j6VV",
  "key25": "5jCd8Z54sMCzfvFw7QM6zKXi8zhRJpuKuhdKk4FDYWju2i27tXquxsKEukMGNBy4KTEcwA5ASGCieePruoEgSxv8",
  "key26": "2286AhTwTispQFWUXLGVTqVCXhiGvCraRQxwkKHqNZo7oHjGKbP5fi3wqF3Aad3xHfHXuPPhoHX3HYm8QHBQVhh9",
  "key27": "dHebpKHMsto5oDBy13AYohFp4z6hF5t18KwHGzJig9iLgxc6m9Uv8Ls4z9CYsj2PovcUgfGKZQ86kAdBDquwRtU",
  "key28": "42EkQUpGRzSBc7bQeTrjYDbfnywS34iPy8VH6XkiHbRmR54QStK324b7oyX61fXAvvW8f85UrBTw8gNXDpexXPZm",
  "key29": "4jmzyvzEa3YbHcDSdfiDb13aesDFjcG83hvy5uaRUeEQEu1SwSyJX6MEUUjKj9U4FaqFhG28kzswQ1v3h9dLvAq5",
  "key30": "63LvMUTu2773socc3AFcxx73FTuhA85zWhU6Z36B5Rx3KEpctPv44eSDzt55Sspuc69ifwGT1agtfJptTcDQzX2p",
  "key31": "J5zcKSCsAJnfRpPHfx9pss33C8jii4eeJP9M7stipkNt7NhG9zm7GMi1hkcRMvgv3d4V5fzE59V6qgSjLq21AAn",
  "key32": "53WVbrpxdXXmqhzaLn7bWeXRg8kyMrgJoVp6QoSJrDyyjDEZijZSa9Wn94bXLqK42Q7CZYhndYRK8J3g52iX57zb",
  "key33": "TE69oNba8ZMVgPXnrdDuCNmNDQxzL9EPMJCikWHazQNYEW1QLff7viynveGKG1jv5jsXw42mXKQcPZMF8FVRchS",
  "key34": "2FgiemUqJiEEhCe1YA7Vuva4wGD43ggEQjM5n6UCUfLuHCLzUyPAmsxBXYf97RCfAHRhbE8kxnTpHVbJZY5ysaCu",
  "key35": "5X3cLD5kSjBty76jowZqgA92AhBa4GBrcSuUqXTMRT1yh7KB9VxhTPgU2VLKXvaD4wA7u9JkisDorwBJ4BETMgww",
  "key36": "2Nvn2wW5FUbGcK94Q5qYiNvihMAGZcP3CY9urJ7CNxFJg4XHhQ6HtMpWwZhywcaFw8Dd4hsUj1rgXwDC7YhogCqc",
  "key37": "3wQZ6bbSJo7HnBZh5VvCi5J7xpmoo3J6MFhgdmzP7FrP7Tjk7FDa7JJdLLS379Dh8VvkCxsah8tMWUn62HjidGqc",
  "key38": "4ySEtAi7t6d4Lc8XNUXMrd9h1vZRpqVBtg64KQr2UUoT6vvqu6nfRC8nqYghpfKp7h2vaTBZ4dZJWCxiaBAoVsKw",
  "key39": "4vjrbp8yE4veGmcePzUojXuWgfJt3NwQxgAzY5DdF1dLP7V2t7pESajiTd8VUEYMXo7NGmXQoZBxbPMcp59ZYjYb",
  "key40": "22oiWtSN96rdgSGtsKnErJBDdB78hsAsMdzb1SATrZAvJKgovtHiRP14V1VicBdHBEduNmCAZUpqosymLCCivPTR",
  "key41": "22eh6EiVPrLgqrkV88FZdi8C9qBQLR5cL32Nn4fr9KaMNktg6fx5evcBjHmHGNiznnRh29DRDHsKFyWyyB6QUKe8",
  "key42": "4V4uA4tJfBbT2cHo23C7u8pqMJXmKMiMuNd6N1QWW78FNM2Gp7WfEfsAxEqHHBwrcSXattenHdhbickp79eKdUzV",
  "key43": "5AzP1b1jSmGnH5mdk9hpuPC5A9F8mnhv4PU4tyLJashAzRo8NuCmAgBpXrSw2FoM4prUKXM5BCFzgte1QrHd3qWf"
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
