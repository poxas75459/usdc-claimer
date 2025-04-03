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
    "5vLN8g261YK9V4UboAzn6ixjWcrgrPXEq1M7pJXha59kmf7UDUXfs5648d9PFwF7ZV9GwU9Ee64qZ2r5jUTHdiEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tjgvk6PGYQnNfcaQvBF4xwRFXzMBSmMLCnecYr7GKGPaqsd7QaaQkAxU7TDNgqPR51mnkkjbXS9LyrL2E2rgpWe",
  "key1": "YdFVeDuSsMt6KTeKsRs99QzHb8raB3xKDykVdE9ohX54z439e3qwc8B4bhcd1WVFMxcFikLZDRt6pDJZsRGAaWp",
  "key2": "4VNqusze8WboL9U54K8surXwXMeEWu4D3yLienzjSPBBXYwWzN4FphmuuBwFiJb7sSm3GFqEuTvGYvoU4fr5WSL",
  "key3": "31PYLw7hGn3zTwsUryL4pF3J4JrT1jfwZEEEpyRP41GxbYo9R3weZF3HCEEdMrkSVb9KmzjpXk7DHwTeXFCitKX2",
  "key4": "3aEqe7U2tgKt4xo9rJP4EkoB6ggEQZ2AUuzfmCWcGJA7hSQanSCTuwkmMLDN3pgroAUETm9Lc5FGfb8jNb3w8vWo",
  "key5": "3JwVtbMnzW9Ds5kKg67o13RFJMx7Qpuzc6FLUG8wcd8gogp3qVkqXJKZTSLXDA7RCR9TcG8zphnYLopzTL9ZCvQa",
  "key6": "2qnYSE2F2EQjhdbw4i2zoeWE6bLKYPHc1cugGAUiHnQMu6JNDVxEVXCJbpLrYPWazChPcwrZPjMYYpYbzBZGAYft",
  "key7": "nW6qw942EoxwJU5kRQe6mcjbxckS6bMW5ncsTrQrdxMPmxoorXYqFMjF1DZqbhjKMRaxU4XxsKV7qvrsoHxDbN1",
  "key8": "4MYic1bwdx3cj7ZkvpUHH4hT85ijNfzSCwj8zwthVHHV29cionGdzVY2Yejj7jh72cBC9F66K6UDxMbNjVKrdgmq",
  "key9": "16eDjB2sGWiSraUEzpemPBrdQKLgNixbQGJfC3yH2q1E8J8HFhRDsuM8TTiseeME76zXcqLKdWeQtpUhz36Lgdz",
  "key10": "5SGKgWcy3oiFM4WURkv1Hts6ApAfm35uMWkoHCrynBhQgw9HfHQ4zSoNFUVof1fBz4jq71a94kMmacsQApfBxejH",
  "key11": "5v4UZaggufqrfdiQJH2uToLRM4CpEs4iXC6ZKS8YNfDC2ELUmqzU3qDtLjn1DbPmVym1vcfwPGGYW15oPV5ujbKQ",
  "key12": "5BiHJ6LvQhkB1PhwKgNQfKgHpyVZRuC8AMiuMC3enGZ5hsgWiK1kDqW3vTwWikEooZtRTpGaMfUTQd7cPqHZoUfv",
  "key13": "47gya6tZJqnqhXEvfGL2bLEiUK3hhrVAPWKmgvHBbzrCiPbopL14fCiPeZEUyR5U9HBJKsnRhdftGwWC6dQxXaYQ",
  "key14": "5C2oZQum6STzzY7d8CZYuhwWLV4Gbf8fEPv6MvEcW1dVE8joaAQee8dxq2Hapd6EJKrtLrVQvEoiTXbmdTSVUBQF",
  "key15": "28N1sDCyKNbp3N8AkfPxAbiu9Bu8H8thyyKw5Fn984phab8sjNFepg1eXvEmKTTa3yBF2NeQg2yTr4NqJCCAXyo8",
  "key16": "3P3SM2G5Qq5czsH1BY4zc1v8W5DnUTvcjX7GmJt2NJ3J6dxAjTJQC3nJmdNLbnxod4ciNTr2p8BzKhuP5iQxCLxt",
  "key17": "3FPR1KwGJzPNZ651zygA7NNCw5YVWHZEShZKAXZbPDh68L5s8V41mMiwGMfivBFySw4d7oiCRz8u4knZH6kH184s",
  "key18": "2kQcLEpJTp6rm7Y4QcWLoSug33iUMe85v4B8eghxTLBS3kyvN5VUwBcTaGfZmTV4Jhzu4FFL6wpQz3LwPiSEmXZm",
  "key19": "4JhJSrtfX7XecSa6tgJd3uxQA4e4tTDkqkWysiiU7zxD6p5mCzHqP1sUJPdSWtULcgwozzeVeeSA12LMqb3K9ZDe",
  "key20": "5vYaCorz3MBZRFXZ7E41aS4NikGyL2vzE8ZWrLvxDjygteqSVFfUSEHkEh7SFeLheTpckVQgP2V2Gd7jNspSwW57",
  "key21": "4QZMPGgaydwJro95C2uzAqVpy8FqZ5FYduGXnzBz1fXyV5gMLBb6sbywTR3yd434A6LrJUfyYcT9AKbVDBW5KtZR",
  "key22": "4Rm7ZkmfgoM69NMCb1EhKDz2AXv4SGzE2VWUthWLdKXoVPF5w7ksPs9iFQdFabVBPNk2VkpPPHbAayHWEq38T7RY",
  "key23": "3YUyZ4PbBxrCCWwZtPF4wfew642qyxbkQx5oWnrv6dEgTUFCpgfKnU5UdxJd8s4B69oZgAjgEgmRYosmxChp2AWF",
  "key24": "4bg9YPeyVPWMUmBh4sEYkbsrELJRUg8c6cX5g6zpdjbUkXokaDMzNjBUQXShXNPYBTXtaLUq6URF3WfYeBLxWVyU",
  "key25": "3HwfubtPEMriYWKDa5oX2QHBQU7R1AxGGCPqV2Rcdd2Q7dJr8uEVaHqPLMQ4cDdXjyQisJwacnP4T8fqdssA8sxU",
  "key26": "3vfQFfhx7XgwGQ1A12oftphMLBoTeck7myYRwXPTapx3v5nnLKbp2mjHE4K6wsxhW2SQXvmSZYXVGKwqwoEUcrR",
  "key27": "4cUtkgjXYeUkZafBuSAwoNhuPnL5Hg342qBMkxBap5KYzHoN2hQ8jnty1P6qHMZsL1AVafBbXTfqaNhQPzvbf7ke",
  "key28": "2BXEhgC88kzTfVFY24MKcihJyDAQtL1XC7x519jcPobtXRmo7A2DFECAsBoJScAichjRw3Pvb9ZBrWoToS4yE2QC",
  "key29": "46ZJ71mcjkdSCdd1fTkT7bNF9fUozsEpqQzLvTGgQU4zVk7p1nrToRTxrMadPUqTM7ZPcQt3PnNU97JWKRtr9UzT",
  "key30": "447aEh7gjvZj48iEwzvwyaSSfPXewgQ7qoG5wGzuc7hrPnwAvGPHS5TS6S65H7d6gAFe254hLTvdz9LKbywNRZgi",
  "key31": "24eFu1Vt773UMRQZL5TDQpDm1Y7hEuJSgHXnvavDUEvaiWur8naPn8XfxVQ2a7VeziyefGxT2MVWjVdVGAseiEqv",
  "key32": "z74WCQY9CfkJFzzUP6t5rQMWmdtNercKg9fXcnzoEpNBQeiEkGDMTev9n6Wpo8UNQ1EfdpK3DdU9UUqVNhxDGsF",
  "key33": "35k6YzxXREUhR6DyMGUKifvNsSdZTk4Cw32QuFnY894w6pGZSGgqfTPrP8JfP9gLUH6JXazSaPYfpVoSU5jMqpRy",
  "key34": "4ZB63Z6ttVu3ZMZT7LYnsFG3Di5LuyqyLzEieEeGr9yUXRaieWyyeNPYQSRoWSnTE5vM55qin3E5sT9Jd8YUDenR",
  "key35": "TQrxZDXDcsEEXcFJtT3uaTQVupPNaLV1kPcwcxMCBZtPidJuYphNG2n3isuSSotHAzcff1BsyU7763MpAKGWbZ2",
  "key36": "5kKSXRHSPQqfwMmp5wCe8i31ZSdvKiyaEWfxvpUNMRvCFZoPuNTxrL723BqYGSxYq27USL4dCpVWWism4ZWXMKHn",
  "key37": "3hmNbrjuBRNuqfQJsYWoEaXCzzuqWHw8ynmicjDTSRwLXFDYgyDZ6QkZkAi44rY9rzLGH4PdaoiuZbmKmB1zeKd3",
  "key38": "2Nvaqq7HtGZ3j6YWFjfDHDedEvuVaDmGajGpNwW956xwXR1a5WizJbXtVFRqKxJ5hb45Xe1EadLb6sv1Qt2Qj3L3",
  "key39": "3pxrV5K5nWPNRNAxP1kWrm5nomRPjbEh4p9U1vW1PSSpmZqxoKLny5fcD1wcHa5YjPqZQriY3HmM7WetB3YbNi9L",
  "key40": "4dNfb1PJs1HbgZ8o6irXwndY8AXFGC3ZNHMFZYF18zwsfSu2FK5vf71F5ykFi18ejNLb3w66jG4JLUGcpkZ3RrVW",
  "key41": "4NVhNhwGHr9yDNNiAUeVSjAMMcZmV3JrweGysLumTmYB9xNmpzd7pKMju6bFugLtM1bZ8xnrz111m2F2B8HdCPn2",
  "key42": "4GE3Nev3Q9CHFk89oVdfqtuESpTN97F3kwzMxTtSZiwrPfUPdj4QiLrhjjiA1kDBGTmgWEEXBnMiFpMfaGa452KM",
  "key43": "4tV8fydJyuULsyQKJ8VkoxWLJ1CJRFRBr9sEsY8behNMiegUfi3wf1oVhUj42zPPHYgpxvY7NXWv8QvsVAHNQoPC",
  "key44": "5HMHisC6V8QahDZgCc49rAGnQP9DPPQC2aa2rU62oeupCZxeDbqa8o8mTAb11fq17hnMZKCrRXBsS6w9wrU5WhCy"
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
