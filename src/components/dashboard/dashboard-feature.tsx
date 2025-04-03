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
    "4n6nw4aRu2t25A2vqGKxskr4rj6nm51pfKuiLBfdti8xAkiR5wNHphUMrJvc1R8nvCUARNJa4PaQDEAoyQbDoWSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N3Gvg4VjhaV8mZ1yzhUy3KZ1y6kRN5WqFygsKr3aZ6N8fR9kY2uJWoHYYE3DTR5CZW2CfYXSxws8M7VqC4o2qDp",
  "key1": "2giGvGu4YdCkvha4aYbCdgru7CCGLzHzquY1KQEkDUdtr9TN3pmqTURYE7Hum2mYtyToSwYAyvAck2v4X3y3pnyH",
  "key2": "tJjHszX3G8CFG8foe6pStd2JD3DEi5HzMJXN2fiHHA3N8L9ABCwoYqM8qFEL1QEUJx2fksSSJTrfZZoGFJBRMCe",
  "key3": "44Sq8KptURvYj6bznmCdR7TtSTzvJf5RVAkHnisqdNyFEyqvy1P1NjMd8NZUYvKbbFDuQWpdxpyUnHjR5uALPixg",
  "key4": "2jfVdncwGDqxhHDS3zUFmUcqdvejXFPPyW4gUPKfUQvN9L4bEucn9z8rukvs7qrSLfVSGmkSmVoadrjUMmdhCfqC",
  "key5": "3nvZWrBevxNF4prWkz6LpH4npMabNkH4npRRfZ45vQAoVSpG25FtpbXsX6REYCTYopShWb21VS2NF1JVu2jTSi2X",
  "key6": "5gwweEKXrzARNYbq1kubpot2oDky3wnefRJLbacGLF8FG8igxzMnmDrhKpkQtXmxwjDHYgzq1x5DaADi3miV9pEj",
  "key7": "fw7jkcHV1iEiG6Ed1R7tSJoTFHS9JezhpaQULf2x3tFgbAcH9inkAXkC1QmxYZNjxbpZ7YWTrjrfYdTpGe8634H",
  "key8": "4WCey9YuiepdcLMPhfobjHv1YVacpLeYT7omiW5WceimRdfkAdb3zcJurdXpzx8m2gegXx4X2F3BH8wtaZS1zM3W",
  "key9": "5QMNoDNhgcYxbFTyoUSBvDHeWiAL59gxdxyh7EerjWeh3hkTUWJG9mxMyZCPaSDg2c3nTXKdm2hMqnAV7MVD9ttC",
  "key10": "3PBmUS5YbvgcFbPxEDVX4AfhU6DP1t8QsWY7q5cWYuGAYFQbHsniSFdMuWDFVJKaVnss1zee1SKbvrJsLB64w2vQ",
  "key11": "4jPGTH2h9YEkN1caQ5JcPUfmCfwVfUJjrxjvyWnQpVyoHiat3Efqyno2qrNuTpXpuBbNzzkVMkAZgnPzRPkFFQce",
  "key12": "a9vnSd4ggcVuvEaF1n3awdLyNe79x3vVKRtVfrtibK79P2ETmZ2T3eMqU1LaoWQbTvvtUzyMWSgFkUwE71MUWdV",
  "key13": "2B14eKCMQMtUxX1V2xLqnqat29qbouUCXtQYyuHX9zn8s7TWossDkth6AbdadfrBNQtgs4GudAkyZ6bSfKPKkPa8",
  "key14": "4XgpYCPfjLsKpjrvrX1KT3Jzy7Xj3YruXHxRUAoWtTE1LN8K7XX2mdgNFj1SBh231N3wLWdzP1F7hvHZAjL6cxRj",
  "key15": "2VsuRfra1y6ceA2Un7DSbeTvdvABbACXZEQHvCXjxvf84uXAnD8TQjGhALnkYywGUUSRA1SPmqczSb74s9jEaG1u",
  "key16": "4VXdxYysxY4Y59ohfwgyWSimHMgyRb1CBXo2ZMVW4vpvqKNNpsvWZUCSFrQ6CVFryC6Cvy9NiaGTuX6W8aw35NLE",
  "key17": "4emzFbpG6aHLKZj6N6LxzHUJAYz1GCmew4T5DigQCK1TzVwTqcDh8g1N2oBfLeG9SdycMxMXuASdvwvvL5kfXnjt",
  "key18": "3nN2gmkgCdUT2rXsTEhG3DwwP4dtU775iMQan8xPJJ4YtiQda2TYD2e2mWJEaAh5TYscFjpx5ZgrZF8ZDkA1etKw",
  "key19": "3pC7wRfxCvaDZ6U1MRysv9B8gXfgqFCCZzi2CELcUbzrgj7mTfqJH5AvAjQ61zb5UKNariQ3AyDqkSbh7jT9p73e",
  "key20": "34xZuZFrLGx6zjqEjhYBuGj9mrrb4LRR5xXA9wmjSnfSsDGkXKDVRNvqognvwokEgTf8eXD5YsuDaETbXa9HrkyL",
  "key21": "n2NJYkCUtG12XMYRBzukrkyqW6Qb2fVYVMwGrzcWgrQCL831TynoY8eTKChCrvZ7y9vYxCyJoRbW39YjwYJve3K",
  "key22": "4V8oxkEFWnpACTDiWjiM1eXdPUFhfXbH8VDNtDXfiR8oUVvZqNUdNiXY3fKFVPdrKNpZvhC4boim4NtdrNKbVDTE",
  "key23": "UZJEsNfJdLPLQhdArQQkFa2HjUXRZPQavwAKQAaU7SZMS2Lq4KEJqLeZagn6Tp3TWT3JLxHhDunVMrd9kv9jqdN",
  "key24": "2K16iEfN7UqfWZ4YrLky4FffphC2P9m6DCyWF9Qpmsr7tmCYb8F3xG5Roks58zBbpu9QNmvJLRno2WkdCK1Zir6J",
  "key25": "4CW7poncsYuBuh3x25jxunBsxpfyuiDKrgSxEyzPtq9qVy5xQx4kBz3RQMeXmLVDjWi3pZsmecwBqHZfSgLCSSut",
  "key26": "32S6Ch1S8LZTwFrgREZ2C4ws6YSCPUv9JSZ4vtj2v4n7LNMDuS8TTfLDHu4rGCbrwCENteuEknX7MxTeovWScWjB",
  "key27": "54BudiZE6rHs4mpyWrRq1nMdiruddAUfqZiBwgkJw8JDNzthCEaR92nQC7J35Vk4SrYz87mxBTtqrBtdWJURjDKX",
  "key28": "5ZKGfjmQdny6pSJ1GVP56K5TLCgvUrTMXZ9JrLyYjNn4jw4cd8t7kxP9CnqwXMBNZibmEynJHYLJaDMcv1MjhXKU",
  "key29": "4a812NnBAzfYwawLDz2BZTsqGLhs4SrNuSvi1jEZeqfX4iqd4kc37bR9ZPvP5XZQf4Pn87RAdct1gGGi3ahsRgV9",
  "key30": "2vyzpHyZMEGjCctyB3j3pHj14kQiUYZdZHwqJXYqSKnRKrxPhWpL284HSzjVG9nq4TRWwn8SQYeThVaUnJNuhCVy",
  "key31": "UgWXqFepg8NcSMh22DkzRKspZwjn9DbYkELjXs8YP5o5huhGRCabztGTm7BgKGfGCBUKBopi4k5HqHjPuj6YEsV",
  "key32": "21U65ue2zDCQYYP3LqKpsDceJtXLxgD4VLVnqGL4a3AdmFZY1BwnBT8Wgq8nicmhTS7kHHBn55tfyhp23P9c7SBt",
  "key33": "2nEkSCpwjrtHWzzU815vBGTanvZQetkK2Lhxpowote2Zh72Q99ToKCTX2RMC7brZREvQGSXJgrksa1z69prV3d29",
  "key34": "2EF7ZXGzRQhvbeTcy6oPFGhQ99hHyguCfPC7we7X5zT8X9iYCxW7WzSbXpAXrDnaXCYP4HDnzQF66hxxJna99ba2",
  "key35": "5YajebJzd6jgQqKjRRMD78SfJEYCaGH5YPvoTQpJ5eXNjpz39L1mspGgjc8erez7ctZ1r9SX2E1WRcCAzkSCvYVJ"
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
