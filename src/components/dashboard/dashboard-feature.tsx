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
    "37CQGnc8GPDE65AgJP9pnk1nPHjmyRehP7MPYY8DnWHBRmK4epjVjhte7bpjSv1y2fUqLGRrdr9FBQH2EwoBNoFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iMNKqVgzu1S585qfh7HkjvHqZCWxgax2VmnANL5KcWUHkySrs7RMh2LvT7aS9s4gh51TRQ1bUSCH1f5iG5jrB6S",
  "key1": "uuW4terdLWNUrpWvK7jzJyyiBHoiBgcaS4Ft2bLozrxPbzMBcPA9pDoLn7ox3YZsUvTQKdRQgmViXcpHYzPutJM",
  "key2": "zAAuHsCXXUErg2tSAQeQUzsF5cq4jm25vfRSv1xVYSf1GkJcg6autvh9369ugSD9rTh5QQFQ24E74ex1wkUPcqN",
  "key3": "5555nb8RDaYiSBvMhHxapXn2Gi13S3GrXcsWuSDzB86vNy7qi8t1JifE5N6A5oJbF18zw4Wdw7rXMrACGKLCXQKP",
  "key4": "JprBbNc9Nb5SedqJdC1dQMdhQTuNftm5WKfn43CjuHoG3FVZ4HYqpfpZrB2rRCMJGT2QFjZ6xPFuWytcr2e922G",
  "key5": "2rGNdMUUnkMjsXXdxwNr3QXDb8x8ZFrXSRXHQEotuNtzjZEgH5ag1JQxVUwhzGh3hUUkvET2KAjUPdMGLMFcAGX",
  "key6": "5PK4TRY81dfMXoqhUYW1kfxgdoptP751LMMpt7nUbM6fFB3Cb26WrpDooeNgBRouhEPR568xT6eAMU57q3rBYk3w",
  "key7": "Cz8puqRA8ov6iTg7u487Xfeq5p2LXpZ75qo3iYALHp2UzXFym3nE3U9dkKwghkNpn7fotbawodkTGahenfyNTER",
  "key8": "37UzLW3pdpPNDnpY56LDGPRG5aqs3M5nYZps2khEm5UbL7mMEpCKUaCCT2qmwKDSS351ZpvT47jhHC5uuZQfo3gc",
  "key9": "4n7VgmNes3FsmQPKVDasPmEPaF3jTfB1zVtiF3riNRBJZVNHCixBJhcgHJx1heZexY64Lyc57jHuiX251pgMwvRK",
  "key10": "34qPQDxsawmtgszYqurvUZJEPEhySpEeoREYz3iTxTaqcroQCASedbamEQT2QyMV1zabM3p4vCf6M67pUeyZ1kba",
  "key11": "5zWmvqyk5zT5A6jUzmr4j1DnpvVjDFABM1p4tB1SmwvZorZkvimzMQ14A5KfaMuyVRS2mhNDDFJmRZst5h3uSLp2",
  "key12": "34FZnY99ayaHgfQPhQfFQxV9gbaNUnPb3BRxNBNv5ZJL9mV6HkmHHLYVXJmLCeH24Ahp7wbGoyk3bzNEYRVAyepC",
  "key13": "5XBvVsgPi3zojcGHWdw4GsTGsB2gtzzrfDjGB4mK1zzWstyLo1M5ZQGi8dshiobkhXku9CWhTtZMfjPd53FB6zC2",
  "key14": "63Gvv9g4WTE9ySVnY4mpdBWjeVJnjUE49NdzuNJ32M2d7gicCWMWeHGbGGeYqKjWrfd21EUuyaR6Ru2KUa7QgJe4",
  "key15": "PXuW1xYHGSdfXx5oXiGxS51aS23uhzLjmu9uLjmgyDnwTR1os1jdGZvHsZ3q2hVf46LwTZAaEc3HdCc9V8yyicf",
  "key16": "5cCqZPtwVrVWZhzE3NpvcHZ5pMqCc8tH8g8M3W421mTPve5P6GHduFhihsrMCHmhFT97JWuFGhZS13Svm7Y4RPES",
  "key17": "4rNj1mVCtGfZnyqm9swf2agQG83hrGqjpZztunpEwXqknus8i6YrUv1v9tsi1DKr7rHGXiMpJn69dcHb1bg3paHG",
  "key18": "5vEWyo2e8ujWKLEHZTsaXLAwmxoBcFHMdgidYFqXftrP8piywobAqaUYhTMvzHJfJtHAw6pWuQ4Q5LoHXagG2vL9",
  "key19": "5FXfxApULybrTxvcCEVyf86TtqkPnwSAmFFJtWGCqryv77tqoreuY3pvnTJDhYJvjxoMkc1YyPeDiLRyHNwLKn3Q",
  "key20": "adsdY6wgTehA4TU1MKDVeexnDVCaz62LuKwRn9ff3oWrmpNYc247fwt87Ka5XYmhfqTRA2ZTE5sEZxMSF98FJ5c",
  "key21": "41qJ9MFxFkEo9QYakfsyopc754jJQRwG1BxkQQ617PtF6qsfHEuL3MYX4vGp8QHevC8hXWccvPgTLEX6kwRcScHr",
  "key22": "4Tv8L2B6gg4PqPKvapRvCuqDbhfWzAqYYDR4sX4ntXFJMZmKd3VcJhx9rp2ZGh4fDavS1QNQgvCHE9Wzsi9959kK",
  "key23": "5bFvVauSWwAgof65zgS62ZNG1Ti5Nr3DkRXffzfMFnfCLZSJCBVVbdDaMLxpNLS6nRDHhxbYJtdQLKW4icTx9Tg6",
  "key24": "2LzVj5DD4ytMH3YdxgHy2xcxbV3EVWSi5TxmPXMaVMviBMfS2iXz6FeVVLQmmfLqSJrCKdRYWU44cYY3nKoHye82",
  "key25": "3fswFFPtaKiLfVqDenXJxM65PnGFrW7FFCpiEob4BLn6iKss5DYWLgCkYvDpQF3MwRBLz6332NUCrWtTSpQ7g24h",
  "key26": "QHgDsi2761rWpspQYtqf9e9nR4MreHHtA5VeYi9TX2uuog9A2ssEKQWW6TDFsWxWrPBXHnum4Bj84UJy4aiH2cS"
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
