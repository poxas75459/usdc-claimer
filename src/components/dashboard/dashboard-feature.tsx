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
    "3SwNkcpugfDz7ZLHrHAh4oHZ4iKfsGdeZBbCV2JUzD29dbVqG7C9AndBwNNP4RJwttpcXdyfo8hE8Agn8eimfZdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oMjHtkNRPQfLAF8QRy6pxnkoxmW94TuNZNby2zwJ8YQQqRRqBxnS8n2VFYtpo3mAeb8JdYCUp7yYJ9Smv3LRF34",
  "key1": "arax9S9EdrKX2foFqhpPu4fHMBvXZFPHUXfsCxsacmjhHwiEqQWb2wTsM5iopcGfBRdkPyzv6DKVgGPGUE85k9M",
  "key2": "2cAMNsQZfUYy6B9SRe5rvfecxZgyQ7MetotZdZR9XTBJT9nmxGEUxj3Ao41xSHDn6yvHxnLj9UXfSoVnm15KQzfq",
  "key3": "3s5oD5GwcSWgj3D1yTcXN2n2Knyvnr33S4hPk7PhbFp96Hicfq9dFXcLXXExrnmeCzzKnZWCr7vPG3juyUHpKDzs",
  "key4": "2JyMg3QG483fgqLW966kQLU8sdPEt32ry3RykUxx9qWpVdVoSH9EpnDN3QPuSpV8vHQhbAJP7YJrTo1tiSCvhLW6",
  "key5": "nxp9WVCAuDyHpivc4bU4p7Dr86WNJA3VyiKRDDbW8dUUyxcfYgY8mgPtpS7PJA52DBhXyjAwS3BYgjCyiL1zpeJ",
  "key6": "5dH87PhA9jUue6kmHZEJdZFK8ooU31UHzMVbCTv5SDhK3iYeCnDFEXRXtCLn5jH9WzTsFGLwPSb3Y7ZuzSjetsu4",
  "key7": "55aTcza3XN6bxnQm18Gfnht25C9PGqfA4RswN3GVp4RBsBiV76u6XEX6EcVSp9ZBvkAbiVPCx1RGqPxsBR335E7K",
  "key8": "T6DXW7EbfFRhzz3fcDUcmeFyyUBycs2qK9LnxHiqdER2BCnUSPyU2ENv5xBSzwyvVUM3xLz8d9VioNCLgKB7t2q",
  "key9": "qan3aNYVsDjSapu5rRJ9mkr1BHEUao5mVQnuhgCqHCxM578tZMw5Z4KKmJhcmP1ctZsoSdBsrQBwf7tSgxuTJbG",
  "key10": "2QBYm9DZXLiZQifmTeb6WuydfmAuRneBoLftVUNUDribxXb8taMyRGg6xfJqjrHek9XxySo9AfA1a7ktyzUXG3qY",
  "key11": "3Aid3EoBm98NV6QV6zi5y8a1xMyP8Sn4TByFt3uwBfrqwqt7LMDSEQMYmuRVbksWo7EVA45DGs5P3G45BNwJgxmg",
  "key12": "jKqiSWPaFhyGo5di2oFSHgdG9RrTuE38SXcLenEb2BNdFzJXiRwZM3JFBzbrUKUxghW2muw7gce6gQ3NnRUsBeo",
  "key13": "yXrQWg47om2KEHFB6MyX7x38D47g3hiTMJs1a8Fopwoqw6cbcLvyKyUky2r18E6XRckfwXSVhWKPBfMMfzDkb6j",
  "key14": "3a1DtgRRn3L2NCfKnAhgzCg68EiFZn9KVeQKsAtqMLuj5XvCeaDAebDVicgBURMca9vGLeAnb93wp5CD5fcRrMV",
  "key15": "2QSSV7FYLrBy38NYZAmemkSen5jhZByiNKXdV3EhCL6S2Upov3uoSfoa61z4ebtPrV5xjpnfhSZPzXaC9GkQs92W",
  "key16": "4rhWvQnHByyZAwSmn75XsRY7cPVLGQTYEE6sfe37SmsmJvxNUGkr4yQhoDUNCaZCAG6gqYsPW47RhQCty3fjJoDn",
  "key17": "28Nshog1GJubTWqi7V6nqnYuaR4SaaC9NGpzHXEZDBk55WQ3z94CexEFEDmfUXiqWDn7Nn3Q4hdma7Anws4zBxC1",
  "key18": "4C8nagjB8fZmbweXMCcpuFvM2mn8o2AAsc7w7KwZ5NXdBDCpPnEGFwmuLgvXM8fD6oSvNYHqwh7tZbXLsugDmJFY",
  "key19": "4Bq4A9YWfxxScrRoZrv27iJ3XtpJP1y6NrPW2r6pTv54E91kpFBEzHzWFhJgxHCxSA9SiD4971h6485qCBoUDRRV",
  "key20": "45zmE9MjR2CwwCXns4kdozSNFYYeiwRVych1sPFXiobD23HiPVb314NAbgtguNZs4BtXDMxJwcyaFmwq7GP3nqwJ",
  "key21": "AwpFqgKt4msvfmhuqVgWo1qidjBu91FpS8jbLiiAuiAGpz4aPuRrDiR3ncL88MHRXdJv65X5F9JL5pawjVteuvm",
  "key22": "FGC8qcvmHCoF9yHU4jv2NBUBw4qHWqsuyN7A9ENT81zSUHCJKu19GNdgQbkKBthQQCaS6DQJxnPqxo1VHxszJYn",
  "key23": "4XGBfmoexXHWyTpNUertSCmaSrB2inHR8HaXApXL4Br77SYPCpREVbT4CiR6Z5iBA4T1gn6AuKoDjbqh1YH4SdLA",
  "key24": "2NvzGjhCkoensKkkzmCugnzbS17v7Dx45ccgagmXCuq3dxyseaFSE1P1HApY9u5mracuZAUptVV3EyihyMQj4KMN",
  "key25": "4HrmZ49w8uFhxUwwB7D5LJmkoqAkAuBLpd266ARQ9dHwLz7mQoC9u7do7c8rmwiSkFVd6zoLyMosmN1pTnxohE6a",
  "key26": "3CWytsMNQ8zk1n6ui1tD8Nb1Qg9t8Y9nznkeUCV7QKgrVHpuPycUQuqLp9sv9WzLbUH9ERc1FyWSYJeTi24oUJ2s",
  "key27": "2eB7QcyCmTU7gcPGm9TN2fziqvWsn1MpSZ7fgXRJ7Pe8Kyx6YyWiEe2FPB3tKbP6azAGpxKqmM87wwt8HKWW5NYK",
  "key28": "3zQPPjZweXefpN5XsnVd6BFHnS1JMqn6zgzpo3YMN7zUdfYPrEbhuxUPp62pjp4Wo3DzbiesgFLxuyuavTug2mrs",
  "key29": "5uZFo9xgaJdYZWEYS63QzrBbfcnJNwmLVJymQYEu9doEPoqGFAUSPWsC3TDibiMcRSdcwyYF1xJ2UKEu43kPaxtU",
  "key30": "5BfB5pAGYnHXQsxDBdk64gCgjssDGb51nu3y7MZFwKNfk1H1x5NB91Lfa9T4CSnYDab8Gb7Vru7dJtyvVD8x6We6",
  "key31": "2pidxDCT1St6dhCNoYTKJErut6b8GiF8p9s5ujnod7k5pNS2dgzi2WGJTuUTXodBX8BnqZq2Q4MAPM4VJciu7kby",
  "key32": "5czPJo9xE4JPD1bLts27r9mNcAsoKcCUz2K8ezf7AJjhAwJT46UnStEfk3wwwBNpUJvf4kfBWkX1HETdeMNbLqTL",
  "key33": "i3Su15S1PNevkvRKBFdnEvaFz6x9nPXQM2KLQVHzmvPTVzcZp1Y9Zo3F8qEFjiuBMVaViqfd4pt38KzXdqKku1M",
  "key34": "3Hmdb1Ar6ejarbrcL8zfSJH1dgN6Yqc19TmxPaafFCqHfGhau1yvd2qUccth2hPcQpizcGuQ7k5UAefFARteqdi3",
  "key35": "22wEeF2d9AE3RkKzsygUVLPNWVszxB7RP86xmZ382RzFnKKFP7pcsXD5oKCLGCQTVR7oQ2dzm6CrRxDabaH24afv",
  "key36": "67ZrpTiBDC7AoY6zhyY9c4ehHQYyVQ286nwBBz9axmijQ2Jti3ZGgBwMarPhi4TcCx9HSedVoDmLpWieVbsuc98q",
  "key37": "2xHzeSrVmxHDcc3LXxS4a1e6PQKLcpxJFCNpHvNkrDSCwfhAHx2ZvdsztboQMQMX1hFzAZm8ttWinmBeurKB1tWX",
  "key38": "3oASfyhcvhFts6pZk67JuL7y1d7meoSWufDT9iddKPGk5EaRjsTpdDvRzfqEJ1YyECCUfrgRMNVPT2hPKhTij2Nr"
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
