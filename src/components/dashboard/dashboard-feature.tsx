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
    "66ZZjLaWgD3xNFXP9whCRtJ6ERBfJ1Ac1VXVHPmBoGy6QUbsqePMryWMpSwq2kUghCkpvokY9CR9bZ7TGfWB2NXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UHB6mT3qYeyJqFVKRFfQwoJqbxNvE4fNE9Cbp8gRQPZ43V8djLjy6CbxxhxpmAdMQoepTQaxoAU6WPcDuoP3J63",
  "key1": "RFLHnQU7SYbP6N77vWj1QDu1vF5MqFoPF2U6hDDbPFZxbUVFKkjHYVzbwdh2QQScEisxeGz7ZkMJShQyE832tqa",
  "key2": "DPdKodX4ZczqS9Qn7GaMNySzuhiC5rLDDRWpoUbmSL44pakkjbgNn19nueVVSWj7H9kD6jgKPLpq9qjsUUta87N",
  "key3": "4vRrDXTL8RLLS4uFv31QdNTofsa8ZArTb7F37RAcfR1EiQEtkm2R44Kna3zxLkpAhFqW8QVeeP956tGjmuBmj4FY",
  "key4": "bthzrYYdtbFjtSYQ5Vz8RvB2ydV6zuBmw2cCxCzq8EHCgPQ8djnjcQ6ntT2ak11wfmrzDPgc8njth3qtjy3znim",
  "key5": "5MkvD166FjbBXrRJs2BVc9L1Hbcft7bZK3WDpFTNbaDrbV7JZaitPKnC9eDq45nLrNHw1APxCVqmvJyNFGrGDYRY",
  "key6": "ZRSbDLJdjd82eALKWeE2RdEsCgJwzZVGTB7ea3fbvCRfKwEoropnagLAir2Da6wdPAAuoti9GT8whjSZECE5Xu4",
  "key7": "3VGMH5giJYU5QmyKTVB7E9wx6FEk4YH1aS7fsoCybfDxM27rNENj4u2zng8KKaBDomaUVXhz15u625aiGAxGd9r2",
  "key8": "wCVh4y3Ch88fxXotJXp2HZmwK6mHDYVFsMuEZvDMk9E6uiREEPpPhChWprngjWkhCzvYNTbd79ecRomkoKqJ9zA",
  "key9": "E7VUAFGQVrt6af9HvFUXiVSuqDNL6tTtsmVhTgQEXjnZVkWYWD5tRisctaxHH3BvuMi9uf61hWuVMncXYuLk5cG",
  "key10": "3eVRUiTAQ54pRL5KtDBkmRGLx2LzbwrQsjRxzHyTC8cuFkdv78uyuGR2ZWk3ZKzCmqjC5UBAnprRzRbJGxx7bv5N",
  "key11": "2aktw2gzcqnNECCNsQr3c8teBFx3Fa8UKT7KYiELbZof6Z3LDCtxgQ61K4Sis5GU9NhX69fYCxe61M7U3ywSPS38",
  "key12": "2VFqrUmWkW727RuL2GGzmG3aPNx2LHQhdqUfZUtnqJXCYFks2NWZxfznYyUZ4NwP5Nsx9j5CvTyRuePyjixFmTyr",
  "key13": "38y42qEZK6xjNhRV8w4g2R7orAJNX2XDByNX2PbfjNRLaXqPZUssfDU3juDH48o26aKn3BXKXzWtnib4hp7C35jA",
  "key14": "3G7VVii8V177rMdY2E99gBTd7TcJNc5Jsmp7VaQLf2ZsyhbiYtmCfDuSyZWq3zeGMcNsA56rxxX9J5CfpZKoJ8yM",
  "key15": "2bdyuvBsfxfqin7wYAme2Jqs6b2TdY58mvLe5NUimAW7sUHQNzVsb3dpX7bXi7WSdruGyUkmzBhaWUME7vGvfrKN",
  "key16": "57R1gAG8nyPJ4m8sNi2Hdni9qj5B5xjMcDmG6KUFg4msUhGyVtuR5dv6FwzjiT8gSxd4jXTXeLUTgpG6FPCDnNE6",
  "key17": "4mHZ8YcGsKfoUwJyRJpBVt7jQkVJqG9RvZFPdFYvSyvv1ZYuJWjJnMgR2xDGaokTYF8xRJtCYJLgjwgpBZMQMric",
  "key18": "4tszy9d2pq5nq1Nc2C8gbP9pEirhS6GRuNZbCxmPVzbU5tBTVxdNsyQ9NxNGfKuy8hpTN4SqHP6tuuSd69cXrWqe",
  "key19": "2QPaUrpuZmSvngtUS4uJuDrvao6o4scDYiK8FY8eo2vyHEVFGn4M6tMmLirAHqoJ4UAtXTePgycKAzpojvcL7Et",
  "key20": "4ayuve9rvt7umAm5EQRtu3hSjjtMsW8XZu6an7MwGzqJmUsxYCmkB3Vh5dCDFmStim2zGY5t8BhtfBhiirTxUs7b",
  "key21": "2LE6zRSPaHZGA63YwEQEjbzWA4x3WP1mka48MsdmbWo1e4UehBXBsdDhf7EFrijR2s7QCPBsFT5Ju7TpDMWZ5DNQ",
  "key22": "wn5FqAtc3kye9jdtmPHzCFwkY8u6PfnFjJE49u2RFUKxCunHRmrZihMmGw2y9hktxaJqnNAkF9K2vQFFm9Kx7sA",
  "key23": "21jMiJMMLf3o9YVQwFMQptdGQhxyCwCQgJefwdne5yBTiQHR15MsP5DM339ZsFwzt31tHxcrmx6TTdrC4GGKRq41",
  "key24": "4ywEcfxdGeoX2BAakDLG9sQxA4MqLkuwkak1WjdFdwPvFLFgipuyZTxSwfsqCFkvh7A5YyrhRoCWph6etYdM1YTp",
  "key25": "55zB8htfw1qoNYC9XyuwVSZvNbZo2WpruZkWwmqz2X8bxMvLj3jGxsFjULcygbXgFPExwhtCeZcp4ooJt3kV22Uz",
  "key26": "5tNcdC5RcTUz5P2m1By1JQNsAWVfM9cmAuiGEi3rgUPYEaGeMbH4i6bUEEhViob2mKnoWrLpH7yb7ot96XqHiMCU",
  "key27": "3aGDktWkgRdDQdczfzjxNarVeZxt2ETf2BW4zUSb1PvfiRBscNqoFhQYvmFCGZcf328AnFAaXuqZdGjofJThP7pQ",
  "key28": "58efFET5bsWWjWDYtLgiHriDdgKS5wgxToWb5nr9jXMcbvpWLaJaBEKVtjN8Qhf4Rw7NmMqUxqt4wqhcKToNtR4n",
  "key29": "3kNsFVHTfghrpYcp9coeTtM8j2aoqHRQ5FgeG3n12eU6LfdcJVHt3M4WStMYjCcMzbQZvxtLqdhy5exEywAX5gaq",
  "key30": "3EjBWA9cgXQfzV4FeQ9AFBNGd1iucgHPXCNRKyabSWJwCMZtcXKzUTeAcqjUrdQ7a3VtfDAq5Fs5kL47Z929AZ72",
  "key31": "3t4EVbXQYp7nYgBY5bBjAzoC7JiQzCsE7JchEMTFBnVehGwEjtATyDVS5BufyDCj385rDHCMfZm5UpvjmBKsBiQn",
  "key32": "3b9oWMck4fv2oJERDx7bg7ag1nZzPnjoybwtBsx7DwpAnDXKgfQoDuKwayFYqGKRHnnwRoAiyFQTNGSJD2taLcCE",
  "key33": "5QCvuC7ejwJvM546o7Nirt1JPL1bVKNDiV25CxPTWLUmpi31Wr39o1dLBTCMGg423F1CRta81yt1HjAiaTEibcYX",
  "key34": "5eDa9qHXG2k6PWwCu8Cz5uCaeEapG9j7kZb1B9nKVUjQYJxX32YwvZuSK95JQc2VRSpX1pMuEFusYssLizmKvjM6",
  "key35": "fBhWCgvVKWs6MW5Qz2qxsDJbEtGgZMSNidJ4CH4Gx4Azaoxn3YRMTjC3SiAs9haSsoNGxk8yTvYwqycb6m2X4i4",
  "key36": "5vSV8ruXuiNN8mq6GRr5G9LWijZsc5NgBt5kXABfXScTtcaqfh2k8bvu6a42oEhJnDPZBn9rCMvzPuzf1CWuwnzS",
  "key37": "2r4fJkKPfHpKy1r9TTDMdobSgttXAiEV5kyXN92Sd6mtfpHLSLDzLYcmys2R2RJCctmcZnH7qtATRhMQBrYHU4yB",
  "key38": "4YvJ5xxGyWRVYxUJMRWvRqc2DYQcY81Gbd7U8nmpvS5DL39HQ1QTgLQnYTgPyrK8BSGyu7c3YTXgeHyMaqgZ3Mdr",
  "key39": "4QsMWMcNDsJ4PK2uXGyKP7DzMz4LUymTYeBskyry3np9cFowNQ4ikYHcVYCyKpFz4DEp8HoSfbEQ1N2e2epdKryh"
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
