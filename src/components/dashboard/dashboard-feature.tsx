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
    "2AtrCAfbRMS2MGJuuNzpvyri5MeeaqWKC15F1MALUg3bRxz29DbomVJtm9kKDXMXdJCfYmVCLUTbjYReBr1eSMii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CAFfGQA5FPTEGk7L9v2qAmVo2SE5D9nKDCkrgixxpjH4wFLAcxAYYBDNe6zNxq9xeMzc4PEaGsdBZrH9aRUELvf",
  "key1": "53LVugbk1eWmXBpx5gisFtuxhd1MGC5VpyfmHfC7F6tsrCyebZmhTJVQ5URCnDu4SwEiMDsgmnGjZPBtTtxg3NoP",
  "key2": "2Uo78gT4fr9ySaZYx1WbhhTq6vbUQj5QrMCSgeujyuTPcZ49kTgtveGgCfARDhJzJtPTZbpDkEMHjP9XPEEUTtV7",
  "key3": "3jxS2CbMZuqUTAwkuQEKHfeTa99i4socfEHGp5W42sDVycrZAJbNoyA4StCHvEsiz67CHNrRDvXh68vYQXpkeW8x",
  "key4": "QBAWeD1SLoP4XoC3boo7kr38W26ewF6dNB3cvggJCshRYAsei87tAZK4ixtWVpvyHB3R57qMm7EyVeZ5st395WG",
  "key5": "4QcqvTqmQg5eMF6xCkxV1Rbty2Zcrw5YPdNYda4K957LZmCVJ6nCEFGjhaLvt7jpLYaFNLb9xYkKHWD6dwzq8qYe",
  "key6": "5vB5sKqgWbJuTn9Yj8kXqaPrm4niEVKLUT3KwwLPRPe65Li946KyX3fCnPnhXXxdaTc8bXUA2BauUoWjeyWa4D2M",
  "key7": "2B6kuh14Loaf4BkWTaUNNWX2biL828RyF6DpBmfPBtwknFqTs29DbZzDPViFH5DCD2y1TDEKAxPZiKYT2aT6RQpj",
  "key8": "2xL4XVBPcVakswxuyNwYv5xucnWut28rBFQwW69s2dYBcX3M4MJ1EajkrTovebAvVCmrykKkE7KMHEJCtUMdqjWx",
  "key9": "3VMhMRp8DAKq8uFSMFg9WnYThbFZ7tR89uKpdSYUhXg67ZFJgmhpAfdWLVsGAgMdW599wEHhACVGFmJj5j8VLgHH",
  "key10": "2popejNdqPHs1rvxfG3MKTvCitZ53pm2q725qvcRTKKcj4KwcWgZRoHPwW7zf3qsQ4u266TKacVmPgJLaAb7Y4PK",
  "key11": "2gDRLzPQBR518MgqoxWD4NGs5PyXNTRa1ehgBgBDTYHpLXFBsSdqHG4S9b4M33bwx6djoiLZ92SnjZoyfVcQSfhq",
  "key12": "4kBoHw3TEtCQYUpCiJA2AAUhLXvBNwa8h9DWe2BZzECZ5XX9FKUD3Wrv82fEgsdT2ex659SmmwYUk6sHEWjcf28p",
  "key13": "4h5jgTYD7ZipMX5G3g3r6962hoSqPfpE6rLXcAyqrCNS6DLQU879SuTSAgwjKv1Ror5WVszSTGiRG7DBuG343mzx",
  "key14": "5SUAnY5dYFmGR4LQC7CGKD2vW3ujdHxmpidsgxBekX8NwdcZMb8ZZ9CgCgGnh4Bv4J95BnndEFrPBU1DpfZ23aCs",
  "key15": "4o29h6FxKBn6iNbj4eQf4yCxSA1WvHZJRRdxSKzPbXgJy2XyJQw9YUdS4QEp4jGQLV7XqW5vR2HHpMG4efbVCuc9",
  "key16": "EdAjVLn2xZRLCBry1kNXwRcnR9bgfZhaHWz6imGvt8tcSS7RPoXmjHw5Z4Woy9i7n3QmqgP9UgkAggTTVU4egjt",
  "key17": "387JDoe42LEhnATuyeKhuGDHdrRrS5GrgLqtNBH8vNPay4MCGrHFsaHmW4VToEic5zrDmVUZZJd8aGTWcd6M4q7R",
  "key18": "2S7ovNokaSuRhKexoioKNagZETY6VJ71wKd4DcjgWR8BFfZzYw4UynHNsKaDM7KQNvEfrhDdf2Lv6iQw2YSaaP7D",
  "key19": "5xeToEovmLagJnsVn65gVvCxdviGJC77ZzFy79aEJqLtjmFVNE5kDmCMtg4R2nYWpBsTLScB2Y9g1xKsXWgtPZuv",
  "key20": "oYxrVMRGwLWC7NSu5kE8TFqVKrPr5bEEZiRAGWedrLqmkVofEKScqbu2Su7k8VFWqVEx8FdKBUwuqrvxDHHx9be",
  "key21": "VLuXa7dNhhruVaQuTLb6m3WwGgVZxoAQcEk6RnQw9B2VHmBXe7C3iA8mMZm1oALHVoHUbPAuZpRRtLW6yBaapas",
  "key22": "5QsWfAGPMfL9ttQMnkk5ryGmhgAqjf5izr13c4Mpcd6EMqpkzSnhPpJbjaD1oUQX2Ue96kA8HLjAzXDHEqafr385",
  "key23": "4EmFQZP1X3cabgxaCRKygFMAWH9BRsZEGUF3xQTNU5cEH85XKETzWk1g8DWHcv8Ti1eJFW6MzKD5AkWDFqp8AacF",
  "key24": "63pm98McYr3T2ETMGBCYrNL7ybTWawtcrL6X3Mnu7dH7h55X4ZdEL4uR7ykumBb5sTWtjyJVdiR4M6uMuXDjFQC",
  "key25": "HZUGD4V8z7JLmf2RKJg2WwjfFGxWofRArJvyBjhVzVbWighLQPj6HLSBm2vCabD6GNLHrnE7SVXM5SNZ5vY6w6b",
  "key26": "4Ta6N3p9heUEAE8yizxgNeY3jvU1H1rcYjfvbU1xuy1k7amkem1HDrExJKJiMMFCQoehKVvqFxUnRaqyah2PpVHA",
  "key27": "5WqVS9wjsAg1tr6upKchaanr4dbjtSvgsYHGY8qkr2rEeLxDroonJQBSg8vrGRcbPZLx4PAK1bw2wP9unh3c1hsL",
  "key28": "4y5KXev2uc5XhWnmD2it75jySMEbv7CZavYvZ5S5KLNt2qaiBDWqXTVDdTZJTbb2NyMMd6FfaadGK9DEJGBcAS7D",
  "key29": "6135uhwfDjoJvBaQLvNC6v3pGLtDF6zTntKZWKsJo64b29LNRLxe2yN7WM4Wzax9EeZ9mzCaHXjawy1Qv8pASan7",
  "key30": "CHd63oGNTXEkRPJh4h4UgvaWebNJFLmbGHaKgg8RcFeFnzRMRHayBbNHfEQahLUFtgfJo78bQMY2MPkLGKpKkDu",
  "key31": "2fJnE7Ev59PHdCL1aLfHZZrKFvCZhxJtXQ86XBwK8YxKkAWm2XtKqLGjTRLkCSB865z49dhvE5eHg1mpQnPhxqL6",
  "key32": "4RhLyyqv3mYMRr3GgpnHJhHdfLpNX7NmY5bJ2mCHhgx1kKqGHCFVp5BEdArTfKFQ8ZdzD2gwdBT6QbvprHZNqjHs",
  "key33": "JGf3MC1AVsvMbtsVjSQpQ31FxcSTXM6FuZKvgYFTznqp7Uv6qXVw9nQjqtVNk4HHVzy3w98P9H8YqfvCf9oma66",
  "key34": "2x55qsEcycW5Zk2kmi4d3EKBTWNrAFxRGoRkrDjKfuGJStgRKG9JrJWvhYsggvd4uN9SKhkvk64UsZqFvm18E9Bc"
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
