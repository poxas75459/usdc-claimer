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
    "5o1o7Y2qHBbhFkkwovcfRfSN8e6WwJckaB1FjcBGq8cVtRq7GhbBuhLtqxf4HT8rPebhJxYKQWHAi4Av4RzwT3UQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oyd6qHQstNvYBVSa5svcP5a84NbJaqHV522EJ46BfCi1BDtCrxgS9bk7LBDxeFf6kNXVWYzuVSumcYi9wdfBw1P",
  "key1": "2W5sp99dwPALx41RzESRhvPNa1X4L3Y6FESNGHefzyEHKkQMTZE64q4qtx4gPdd48U1swkdMt75rokS1ShevVRFi",
  "key2": "5R6qH2YKt7k29MWgM1yKJMQSjAHHT13t9wXmscWsivchu9Wa7JLdXb3oK18E5hhriKJ2qopSa3AERqXKZsPCkeFi",
  "key3": "2yvJ8yBxV6zjQ8iYc8MDCA2RM1smmLc7ZL5L1cW5yLD1r8cbSeZJE953nYJ3kRGFracdi1bs6kGJ1894wGMbwPrq",
  "key4": "3Vh9CeXPZjMGR6icXkjgr4hNwSB9UR3XYE8j847cC2VnooHkVHp8NXBav8in37PNtzKwzaTizRe6AJp96EvvrAMj",
  "key5": "2BZNGRzht9swTciLSVkivyhr8H6cq1Lo6BkufCL6wVVPYeg228C3PNi7kXGuUdVeQmtYp28KHTy43MTxCGPFasou",
  "key6": "2Rzev89beqU5ddEJTVhTqSbTjme7GzVHNGDoaFaB6oEi8Vdi13uwpaK3tssEUgwKVm3htv4BauRhTq7VRjKUa9G3",
  "key7": "2CpxDtbKjNfpc7Uw9D2VeUQbGdd1VAr4gtqNDHKvzNXajF8vMjpxy2ijVTZx3TujoBEPRkYpYqyzwyerdkvNub2x",
  "key8": "4mCyiyCgxxqa3Qe8xfSy9Lzv6d7RXpmdMXmieE1BU83LG4DXArXCwntfEsNjjhoK4xkaX2SRyYwc2S1xbRWHJhMR",
  "key9": "4zHKQ7qb5hEz5Mu1XwLCc2fXVmyoC58rzGJiMdUAa2t32PpZ31TdTUFuxEyAMVhxCQo7Wfp7NuhgjyzNshshBjCn",
  "key10": "2FAFabNPU2jPyU9dvggaTzBgpYFF35Qfom4YNz9NwuJAgN2dRdexabxRF21MBURdHMMYRrQJWer4QR6hTw6yUrDJ",
  "key11": "ZySkHLC2xXmVGeB1Y5k1kiJmd1udAWYvfz4vQMgjoWtadrvDwNLADeQknAGZdusjKeqEWuQt35xiFpmgKLFGGS3",
  "key12": "3V776GD9ox1mUcsLHA3Kab7Ef2xg6PoxHsbQnxjtnwFhebZHHataQ37cYkzmbKbZY42H1a5nAbtMAQfjWjGzVKLk",
  "key13": "3JvWYikWCwxy5uzofUwXmy8ZFJ6krEECLdcWsKpHfGq71pEQAPFJ3TyfcfmyUeFtQV76VedT1yYfqRYaD6vpyJDF",
  "key14": "4mugpNMYiUw2mCxn9iaDuXdpC73rhVDtQRtrtzgmPpVAGL8J3raUDXg46euzt9wXTuV5PUW6ntbfWsoqzw6QCRMK",
  "key15": "5UAK7fknzrYo2zR1Sut1WDT7FtaN2RDtiRriNUtmALfG6RQTzkNDh6gNJ83q5NvLgEVrH5EZhVeCTAUVurew66UY",
  "key16": "2cRJp2yEkjpD3Myz4iWgwV5PjBqMW3KTWx7rVoKksEkppxy1GZqMqYECNMRkaL1jV49GzXjnNpAHc2J4W5MLz1F8",
  "key17": "eVS3EBpHeKEZfs3sdQ1vfrn1oeYrM1MwU8DCkTAvY7au9vLDNS8w3RDCzx9UP5yu3MQegoXKY1TW87cXPqYsv9V",
  "key18": "5ZQvZZK1BpKNs9cVyETcp7PBotaZyDwZjJCw4W9yx8qfJiqe3Pfhz8kDQ9uP33zbwMz1hUp8vCt58zdun5mBEQC5",
  "key19": "36vhi7ZLFsRUPyw44uZRMH1z3wzafzpiXq6xH1wHrfQeKVTA3n47geEYQhWxFVvsFwaCSnU64jtkgtDv434nKwYj",
  "key20": "w7nLcqdMK9W5hQcBqRchRPHDXp33fBoKFB82bU9Qoa4uaH9SKeU4azC51aPCAuDsVvDufDCRaF7dgpdw5o5vJSh",
  "key21": "5K563ptXRHfVLgoFsVGynQfCfWoVSxQFSWJ5wE5QMb2aKipxxZKRn4phSre17Pfk7nMRDx1wkyi9gNDfPDJAs35s",
  "key22": "r8fx96EYqfT1gwD5CS3esf2BX1YJfxaLtSBWwJjUpdpPKaGypXkZPDxVWefceh7GHY51NXUzkpZXEyg7n59ahSA",
  "key23": "YwQgzTBJWMuxwGpyD1iyjikV4SfQ8RVJSZEdT9AUgrk47pYjWzkU8MBDJ3b6ArQWHYHZ7vBLhCcAa2UPZh7BjTr",
  "key24": "2QkQw3hbzm2wTVcHd7ugtFydBbqDk2113doezcHozJp1a1BFAG36Gu1K1Tgfa957LVuCkQkNUAE3YtRZdv5mX7CV",
  "key25": "37Kz2Ybx7qj6fqyJQ4qkaxBsCDxkS82kqNwem2bsCkHxaDuJYcCUnbYDXtrnFYvEDdrrctYegCNk26mivUoZ7dwh",
  "key26": "Wp5LWu15DFJxkd3ufHCHcAD5ydBuujwnKefNxoPxEJCUKGnFRbwJBzdR2ykCwqZ1XKmqAGNUkCvmhb7HgkxSXs9",
  "key27": "5ahWg1WfUSwRCFWQ7YRKopM7dKo1w4MyNDJnj9oZtQ8y7Jp7AqeagCY8SsQ6MEKsNbo8oJyEjm89sbAmZHTi8nZZ",
  "key28": "sCSYep8YtGsjXjurtht6PtBFrvJUxMZZjo5fNf1cCMsJmvBPGsmBDAionv323uXWGVBRPo12DmukfWr2FKyCHqC",
  "key29": "xAH49LWMAqktxnHGHFdt5xPdcqjnT7horm3xEL2RJg5dVCJAyWh6zVPu9XLTcM7Lzw62mSwUJ7SV1xjycuCkkJ5",
  "key30": "3mDnzaAMstxHhuXnJBhmXYQ5yHBWrqZEUbNuKQtdVsr2Y4X1FXU5EJKd8CuJ6TeW3isd1VqyawWstcGDbUzFiFVk",
  "key31": "2B7fAaKryoRpwVHVVkeh3YDdqUwRHeyC4qkuRixUBxMzgtxNT2T8a4hMTp6BdXmciqh6BTQNbhL9GynbnqYgFo3a",
  "key32": "2584YvsTbXvnYy4N3ueCp8Y6cnFT3aHv1B3r6ALh82TwMvWAaSaoe8DrT13fVdNPLyGgmBzuPmgHFjMF1YLfLsxz",
  "key33": "2zvVk4bbdQ5fsqUSWiJmXfhcgEDb4dgmDdChPWCbhw4PLyx4AuoXLwcRATRuGfSm8QFeprwNxrjmWBqeUwEG3jyc",
  "key34": "q8rofffzvDKC86rjdpSwsVsXipG8mqZZPv1HEFMmizVfWSAwxZGbCbq1Fq6jdDa3qzUMWK2aqxukmmGRUurTxk8",
  "key35": "4QZMRmnRQMdgBMTf5JdgeFecLYw5zZiWQqdNyjGTRiX49YhiMjj86Jx1nGKjU9BsTWZJU6wYKFH1eDqD7qu88zYW",
  "key36": "2VWuk2gDyi4eSwBxdWYnxxL8t85u9y4Z4hnPXGvdhfRYg1LTc5CzVqT68F5g7yqewzqcjrrRWcUZQWbYm22DxnSe",
  "key37": "2Ybv1iZ2Brk9iS4NiVZGCsXbhYH8Zf6ckY6KSYxf54BGaxEHyDuwzQsECYRbEgdAuDdr5ceqob2D77KYEpWwNFKY",
  "key38": "2pyv83ecuTRgEQDqAPZDrp7SaTqzBWx1QyySp2p75BRTnS8XoFjeRCRPmNAaeyjAWXLRfRsgJMwRCzHdTubV83py",
  "key39": "5pgMKdBfTCBZMot4zNhNjS2c1r54y49aPrTc3pr88qZZnMzrEMvXgTkDHcttfYdiyNpKp7JBgSBTNvJz13nEKiZp"
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
