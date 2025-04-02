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
    "643F7ToTvZK3cCvHAe6gbaJ6AqqTdU88mt5cQrwy6QpeMoSbKzAKzk4QuRykRD78E9PDn8RBKZiF2knncNRVqjkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ETxqaMgEqmSQtSdZmCa1iiZAVXRsSCMgcXxm21TNBy5woJNveRqMEoF4HjQpPvoZEbvNUwqNTXBh8kg58gJMgBM",
  "key1": "2v3xaUZwZV2e2ZFxNeVbHUyMJhje4gAjeMwc335WrSGWZJRaVSYugqn54cr8VWbSY1xJYm972sjx6kYSNB9RbjED",
  "key2": "4h6Lh6UmmLZ73hyZEcNbzGSEBg4pm53paLhQY8RehLSQbMf6pPU6ocPeHVfSrsqGnNgK7iW7nGMzKZarBG6RvdST",
  "key3": "5Vrf3eQmpsQ9VAg6dS1KvAt1L4SUzHdynRS6tbzjoAjpvN64y1bEyby7423yW2pojTXw9qRsoPumUDcWsJsDVEnF",
  "key4": "rCHAeXe6igQwAtQJJQZPyJwWa7PH2BnKkrHLeT8CtsisP35M1CvWCWC3LeZnRuSLguw7zhU8MF1HGnPtz441PDP",
  "key5": "3xseVgWLx6adW3dSUGbNR6TN7k2nnN1pFApUi4y6tQEh8wKTuupKCA3AGXYYGfik3iZiwXWXTQ8FF5UUrSNsRssC",
  "key6": "4xJd8DH1dGiGGYDYf7HZKuZ7T9g43cM6S56snkfgLfpZSzqevMPWSkgwjYrRMKEvmBTgSB9r6xuoJyTwxEJBN7Vp",
  "key7": "4as9JiPDhwg1WS1uJuErQUhQNqjhPhngqno894LhQimfLzpRQua6upuhYAtY4gJkZvrH37npFsrnejePALgGCVUM",
  "key8": "4VCBC9qe3NfY7LBcPP3TYLhitzg7hZMLLsWy7otS9585oFB4oygUMnTbaJyq7o4qkvfe4F8yn527SkAuVVyw4moR",
  "key9": "2kTuCaCv4nToHkQReVwFSMGcUWxPkgAcgrosw86TWEMFStRtwUfWAYgRg1AJSewgTeBLdDmEzMMJ3r8xrFXACE3",
  "key10": "5rJtmwJJTMZdVpjg65R5xYpxMZHp7tvS2P258EpzjbNcBDiy48MJFt44NuvmPYNiV8xphYDWDabZiZLf9xKALP2M",
  "key11": "5UfQjSsxjmjv36Phxm9c9rnjsUSu4cQXyKRDR6o75rnGU169TSbdCWwqnvPiyC8PWQft11SooiwwZ87Pw1GkvBTC",
  "key12": "4oybpD7GtXRVgtMbG2Lnhw8QKZhJdHenzXgoYAdTiBxNj4cUNV6uXxkyPsdmfPnB1m3GCeoFQPpXsPgbrDHeYNHP",
  "key13": "3U1DZXJhSZ3RK9RnGXK3C9ehZVM4kDVGgYZWT9GG7zpXqbquYV18yCZZkjX8rcgiaaeiZU7fVmeeuu5JgnAuQKjN",
  "key14": "3wDZyH4j9B7ksKY8wiDRzhbE2NPtunsELGVSiNaUab6h8FR1zw6vQFE3dTg5MYzbsm1ed7VT3Hcet3PVZzY68GjG",
  "key15": "44U1SRTrQDmsXc9TPbWGpBK8MX4f8eZ5jVV6qdZoYwnPYkVyeZs6CAGLcFER38rPXVFHibw7pHfsmeuDWqPznMXf",
  "key16": "3gJ6SouqAM7vcZSS4nASeRaY9VB2WdXzt1y2hb91BxDdHT25EPTmattdJ3SdFpgLzNpD4kpbScL7mXKJFP2Bu8gB",
  "key17": "5jrjez1151jT54f1cpRmD1azvmCdpmxqnR3cSW6xurcSsNTFj8CeYRq6AZKETQ9PJim2UQ32p7tHx9ocSCTmbi6M",
  "key18": "3egHdmjE5WEXtty6LDWvG8fuXyGdDKMnqh6Zbwv7CVRg94oeekje5JgLN9u5keEhEh4NkyS4MNz4YaCX4dq1RWLq",
  "key19": "4ikk1181TkmkgdaU7rYYvSTgWhZtQMbqbRH5HiKS1zr8NfJtxg37fNT3Dy7EMDRTXZ4HKvNnnvqFWfunEVRpfyKA",
  "key20": "5S9QnrXyhMX2B6SkjYCpbp54tY4BLFxWvUv25s34viEsBkwFdTXXgjMNvmJmdySqww8EBxPpEG5ZusCCsLsrtMYN",
  "key21": "Kjkrqwho7TM5p9BdJ6i5pUMyVQJnSsn9rQvUonP4qLxPbvQQXqMFMKiEFiHbFsnn3W2Vs1KUZiqPpmHuLXjPX4k",
  "key22": "42LcmiqdLLKaNxjpMoRt8i7fGWMAK5mrnf7K8njeDRPP5Fyjm533QnfHBsihV9Jdk2p968QKnZZQxd2RcRaT6qrh",
  "key23": "5NjZUruWJUatewwqvg2BC4vudCLxYbAL1EopR6NLM6zmLUUMjGACvVY2BDsjgiUR1A6jvuJfhVm4d7rUZEbR8vT4",
  "key24": "4zydmExwHHTGEMg7hme9s95wx1v7dgvsqGurffa3WGgpdFkwD5NdALEp1UtyRk2Nbqs6ZmjefSqbVrDBe7Zt11ZC",
  "key25": "2VsVUXVk5fcvaqb6S73QTezinagYoCL2oTVjYt22j3wMdxuzQf9rDaSV1tppLCGq537WF3sAEJpq33j1trk2Hjbh",
  "key26": "2npeKbBgD3Wqf4BiboTbaanq9WHmgK4gESgGv3TU6a2tSDsQtBttAx1TWrPd9SxMHJqQgERFztNY9EQoc5JWgw3T",
  "key27": "6QkQuPUb7ew9Z6H5CgbgMBvrCHRdJAh5J5NRPnMnN8YrMxsaBk6bF9b7J6EDJCKcB5YPnEuvVRbLeS7gjkWthvi",
  "key28": "3fVTwxyrLcSattCPXeLrKgBSwHeUarYk1edKBbQw2nfUy2Y8cgJFuHn5SqsWXTsw5Vv1r6kNDqt6kotNUNWRkzbj"
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
