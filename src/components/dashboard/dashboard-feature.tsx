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
    "3jwrZqSSPPb33QDeG1icCV4n7YAnizZdPBeRuBVFpg5tCSUx479Mx9to7Vau2KGM1VvHkNTVCJw3GdUqkjRce4kt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EvXCwNzEBa1DiEmWcCJ29DaUMNmkh4EfJwL4dKjYyUgtT5X7fcuwAs84jHTaBjWWcQfpwe7mLjy3pp4cPytiNs9",
  "key1": "5HmZXH33CuKBcMV3eSJDHsUpNvGVimp6nAmpqHHVyuwN5cUaRb669H6CpbAG6FFFjzZV1Ptf18cy1zkTtWPjNuKn",
  "key2": "5ZEnNGPANv9mBnHxEHWyQKhS8eT6tqumP5GswGbmq296kNZ94YZupnG92KpzZAS12wi25VAopGFe7at42W6Y2xG1",
  "key3": "9AVxsqh48smy9ccQDZQGcBaaK6pUi1qxvZp188jta9xEy6CrvuwB4oJzZSmsqbv5WcwkJDUkvhFFXsvbmHoATYJ",
  "key4": "2K1i5KdrPPFBYVnfiY4ffev2xAUh63DQhmwW3uKo6edNhhtThr6reJ7Nmr8CNmuKiRoGPdk39kHu42pdnM8kpd7G",
  "key5": "4Xu1Xvdag6Wc8furz9ayjPy5QR6UK45yrKaAja5MWCTp4UgE8mZ19Pq6k3pLCmmvmpDvxv5THgfS64aLmse5PZii",
  "key6": "5Seep4H3DKHfU7fr3Vu6t5WmKLR3nqgeXVkaSckm8zsWjobUwKfNfLU8iDU8PvRTcg9RPaUehDGtZRJ1KUvGDTWz",
  "key7": "2Qe74ZyyEKQzueZNMgjRzNwoVFn44SaEXHSezwGtm3gTmvZewFbLD4WBjfZ9e1xkmzJe5zp3eRn5HqyY6UJeoLcd",
  "key8": "4TtF17qg9xPXR2VLrQ4ecm7ktUC91Bs1xqVMX2vrY7F5cWcN4xzYdNADtXJ3LQwUaQTTFBDG6U6UtGQaVBb59HXH",
  "key9": "2RsApUFSWZDyKGzHMv7vPu7mfbGrRfp2dAG2PyEBzUFbWhWUF9hqFi7PeHUzdFcepD589KM3bq8zMNHzUC3AgrN1",
  "key10": "468z8VDAS5UfhUg5yWrCFGsnUEw3QnPbBUMDxPdaVHBR9kea65uzt4cZeCuabQKVq5si69samN1yvzuRTkPuveL5",
  "key11": "2TLoPh38B8cnbMjR5gKe534jU8jE6fP59VPe6vx15PWYSKxN3vPLSGoQwJ8g7Q5G54utLpfHEJnfYs8RpQ33UYdJ",
  "key12": "55g5LpNSMm8qoHpNvdBysKSQMPUe8984u4h5JCELMvj2PfkNoubnUSXp6BQRtAwr2hQBZbWAMwQ2sQf47PcpRQrK",
  "key13": "2VNAnJmBsW3M4jFujLafozaFvYxBsLKsVbCUJX6pQnR3ag9fPfdyecnJtmtnwCqaVxcYTESD4kaZ2ePxpVAABJhh",
  "key14": "5y8EZ37umfXKeFsd1pXTXrrYSV35GAhdKKzsHsaXNS66XUDtJCKYqZCRnJ95sYmKFXtPrXM63iLBUUr6WY4eNVaB",
  "key15": "oQQ2FgFMNfetVibuzYtFQgRHc62nhVVy2bey4hiQW45wffDDuqVpAViaesHmX22zRZUp3L4m5QruJCUoDxceDRw",
  "key16": "3c3D9HoiJvJrN3EcF8s7SFirqFjkZfpMgYZGaJDqurb7XAk2PrortT167HD31pRbG7DCZ67eZ5pAstCmtZ7d9oGy",
  "key17": "4rzTYwjEVZftvQ3tdwYADGZXz8rjrBLfYxreNPHoTJNR1U6LmcMFUwLFtxiC6XvSTt6Di89DZfSBgUkSM7st46ZS",
  "key18": "3Z9HGRd8uWXvfdfWV8NghC9gTa1fvb6VavLz2CVWVG5kgFdmZZduzxpiEgVNcbJVgrh8X81kxjNwZQgDAd9wW9qN",
  "key19": "5sC5FSqg3Ly16KCHwb57h6xBxorx61JSNJQtJv5gqPsW44jn1kH8P6cK1WRAjgk49kBp1ZET1nVhsf4hYXUX7Vnb",
  "key20": "3fwNHyjCn6W1vCD1q5mpGG2ZBnxKapaLT1WdwgcdHUqDisy5fJNEAE7dBXw7AqbZeJb9ZjN46svXDi8NgGscBM9H",
  "key21": "3Ns9wRgkmTzQSZaW8zGGQatnuRWjQPFyviw2vCYtt8YVEzDpYfcX8cvkgTYspVxp8MpvnzcYC5u9gBymNfYqhx6U",
  "key22": "Qe1oQHdrTZWtx7QYipdz2cZkvUKkeCyT74fgwhTwwa97v8KUEQsLChT3de1G9itr89vdcKQPFosutg4osct1RuR",
  "key23": "f1JT6Uzzq31vS57y2m3eH59gML2jHBiufRhGTL1cqaAzEpY8ZiKyT8KBiRwbMmFo5H3W2FAmuN3MF5NpC4Mu5oq",
  "key24": "2kDyBnfLoGGP1fXbgNoQeTCWuttnWvwk4poqZrMWxDssrzSfKYWzjcJxW8W13nf9NYRJwM7hGVWFnwc7k3JidqTi",
  "key25": "24VagTkX3pJacfMdbbLZMSKR39L1JQuL1BSbafYutoQ7164kLatgXmTEYtkQB6cpLcifbfQexqiBUhr7weATe8Zk",
  "key26": "3p95mxkPNxAgttWhGR3o4Bi7Gz61dLXdF8nDh32rLR68DnqJGVf6FNQuCJvB5uKKAAbDXiTFSAcYDWD26Nr1ANat",
  "key27": "2iQntJ2Sa3HGMEGZF4fB2bmkLWRptJo3je5Rr6znfS15BC1cwpK63rN7BwqsexYWa6f8aUgrh738fqVQHMLHBGZe",
  "key28": "5uorEvhqBFfQPvoXMayXaqtMztc8BVdqhn272zpKRqAMbzrppDeKZUBveJwRXFEs54EWBwPhhw7J3bfRhKYchSXC",
  "key29": "6SZGhyehhFgrwt9om4rMVnCjPjhvcZMca6yLNah4NxCpuXxCHc2h3vgQVC3B4EMXdj9XbBi5shn3zGE9ohH8viN",
  "key30": "5VZb4y5HFebxvUZVeaPAbUD28twVPiLcJpQZgnVJNjF9Gr8bkDxzJ6d7j7UKUgBFvnZNSPfJxoGoD6j1U6RpgFko",
  "key31": "2X2iGCaFDkg64fRVpVCwkGD8LNvte914jpMU4QeWvURDaafttKt6vuF7TXTsTEsyD5unV5fU2LbZJzJv265snEYK"
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
