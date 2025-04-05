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
    "2eXKiYHETrMuLtv9Dymc9m9gUgvoJxw3Y3ZWe8RQ37fKgQNkXJVk2gXJEU8JMDWRYyJpeYi8e7nh478b88rNqtjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sAsRmryQD5q2J3vS7SEknytUxeVkNta4HmpvSHBiqw3yRLmpQNXjexvR2cjz7ddTm86AAtoWHic8vwecSh3xS5N",
  "key1": "4cVz7FciKxjGYFR8GjVGNSLUEFChVukddoDCKHcu5vRxeuXEcFyvacCfwK1sw3aSHinvPdH8R7TxbDbcnv2Q93as",
  "key2": "2hgCTyR5kubFaarRgxJTpWXT8FDttfVskGVskwr7uht9FfW41CgusCYPERWgjdV8LsSq6LeGhRqbXMfMKuXh3Vfz",
  "key3": "zTqNEcvBZSu2s4Gsv5ktsC5coJyLKidezysJzFNLhLGiN8qPZd1wXfvhvvndsvBj4M277j9YsrK2thDt8ZdCNoe",
  "key4": "4dQ5MZn5yfMGUA1zb7dPpZ6kZiVK5F81fhcZPksuF3Q8kAqHnwc5GJVNZYHMEaBwHhZDwVe5YNBQB78H3HsN8nf1",
  "key5": "3igjnAj6KZHjnHHKAEAYuY7kJiEnoXz6PSUnE4oThk8WHKk9cLQ3qx1iMA9R1TVYU227dTcVzC13H5zNCJFamcct",
  "key6": "2rht4VJEySLBYuqbQcgcpjjcYC9aX2CmNA5VSWwQvervHBVTDgXtVqeeCohgdJSt4K143KzfzDD2RDGFrTDSdrFU",
  "key7": "5oRanSYLjDppVKn29FtXocZGLNAiKYgmWcPF6uC5KsyZrNcvAnJuZhdrCt8aXe8HSAJGqSCyziykwuTHF7YgncG2",
  "key8": "44gwWeFuuYo4eP3wY5QpzBrThe9f8Xy4wgoaZuCDUNXNFeyWPjZR1LGj67FUmiwuahH74Z2urmW7o2Bnt6N4QVmJ",
  "key9": "5wjRMcJxMGns6QBsA6XAThDbvBy5rrpRwKYABJBeDbLat6WkJuZQJtrikAa5RsspFYtpB38xSZttxLiQuZUsz7uN",
  "key10": "56kZJMsS7cfKZ8LFMxLfdTuuBRsnqbUKrsgJmahLiqGrf8UjvPK191MxueoquFZC8Smwak32gCawM62GBWezCSkA",
  "key11": "2UvRtxRqMk5EwbAsGBYfjAAyfgR1NE9etxqWv3i89HeerK6xofyFMPoP1d7a9GaUstHG5GPzREaZFCNXgsSuonb8",
  "key12": "5zVD6FJGyTCvbGFo5iLsjyuYFi2YjyfWAeXhyw4i9x5ERig5TTRGitDGtEbA3fF2cc6DnTXmCSAHUqFte4Dz5aB6",
  "key13": "5u1arsgR7SDyyGaRQZdyDq5ttYnXMYCt7D1EmHy2EYkL8WRN99nGVvLkRi2daVS3iegSaCJSfYYXnHrpCVFzwy7e",
  "key14": "yfLFpRowueLvGcm4fYz8c5sroFgeYDgTZz3KRBjtcxNEVgfVb3N8WYgrsL6YCjSkummz5AB6ooYr6Pa49gtb2NE",
  "key15": "3hZCQ8KYAcC4FGNu1xxjGas8LruLsp1pfDBSEQdW16kEmAewDzZxQJSUYBb1QS6T6oXhK6VqVrMagU4WDuXawEei",
  "key16": "4WGTXMxT9Cf4SJQ6w227tExsvjvX9VuER1iLL5weNYXeVWSzVokxaZ21qRLH5g7UF9L5inesb9bqwEypvYukWqsU",
  "key17": "2Ft79o7rnhNfNz9H2hjtv1iTBLjrKJnqZC8xV5KXDhtgTsa2mD8AjNprMAMyWtEwZhmymfenNvBRRBf7tyHQwuy7",
  "key18": "4Eq8KZLmfJHXPyWn4sLTCEh9tw9vTTsCDYGf8QxZUv2nWwfc6hSvCBGpp3D3r6QweGgNYMKUY7XUJy6XRbYi6Abn",
  "key19": "4RrwHVv7Fqe8wb3L8b8wdXJJjEb8tTkeiouXb1Gm8LbQCKDXvUitLFfPMKXvSXeJdfyDgbmPuKiYaZPCML1cQLZh",
  "key20": "sVoQ2rZZmcA9ydmjhzqpJ6YhhXogr4xLZ9WsAdj5EA9roQnPAgLfr3YVC6impM9VSTJWzznNvxtsf65FN46UZw6",
  "key21": "4Q5CzqkdDowXEJDjecMQ8Tb85ZwBqGwrTh2GK8ZJDoy4ZUzXFYAxdsJYHXoLDbnRWs4UEUGrMzbfcQhiAdGPqxvi",
  "key22": "xSpa33FEr3eAGTKNGNDd9E1KLrwAkqZjk3DrgyAyevaQFwKp2B7t3tDptGS1nj1fhY5wrTrVCk2GK2j6wPZVHoc",
  "key23": "5uXgb9FC9rXsb5XijTKaL7ejyHzAH54V9HGcLKzrzLWYPgFvxUEmnDWtTEePmJdg8yKABxWLULxBFWdkwPjvpWsd",
  "key24": "5jnqbgYcQB8F1Wfys6FZjYkJtuYDTTyHKFsxGQeFqGmYUxTsntRna9hyMh8kuE899P6w75CGpatvPh6p7zEYnm4F",
  "key25": "5aEjNGqn3HLSU3UDnyGd4Ls8bZEHAc4VpDgV7ab8ywn7UT8DKEu8nAPQTuxQA7rXiYMqgYtUEgDzQus2133btmGQ",
  "key26": "5V9pjM3XX5Nn61vtMcjqQySEzrFNFm9osEqKz7ZTkDxEnxt1KtAddqqeJ6wfBBi5MJUeTHRQ7c5xHwR1UphiuRNG",
  "key27": "YKVNwoyUXuHxVNdSE38EsSkwVjYBpkmSZe86jiLHZbJ7e7HfsRPTDbLaBKSU2oPquYfy75B7FT92t4ZWWL54GyN",
  "key28": "2QGio4k5scTw3ewRAihBkTHPxgZEfdDHRd2Hzywb5d3e7WZ3PQvU6MEL98866cUaadsS5F2NDBDzSFwxzAGMfWgx",
  "key29": "4fpv5rm7DFcr5d56TfS3UNDgrgsVGF4J5Q2hmFQpkVSjXYmMybKsG5GJTP6Lh6pRBsfigHEThmxAavrjBp4c7YAp",
  "key30": "49jXGyAMVNV9Fen7Z7YSJvTfYmDFB7d6nPJQcxChkhUEePSANVqNwdqXKrComfnrjuhpeBieXe2mJoLFDibsCso3",
  "key31": "4Ca2aYruxdWhhBENfGB4kwMbRg7oau7p6RRENKrLGWSWtsa3vyFnnv4doG7LzvBDifCBkvUSUEu6zUKRGwL3p5VY",
  "key32": "27jVhX3fAyjawyJdx75am66Nsc3bRvdfcuSJLXMPKwrnSsU9qJcW4Ds5Xwe3PbvtT9LZpecdAEHsXkMiwR24JSar",
  "key33": "31DQf1DCCAePCXmrD8KRKp9yXXAFTZDhVEU5g35nasgpBvUnXkzbHwNfCJFHiyoCRTJd5zEsyi8A1xss2FRE8nG",
  "key34": "5M4ye6UFRp39vHS5vBftDUFUSkEkqHyBBvtuKX5b55qTQuR1CGerbkLme9Y6XRu4TpRzyWop7RX1otvZUSnt1K5Z",
  "key35": "3fkYJVyrgnz4FdJzoLThSmDJnt1Brcg81eQngMc2cpw9bwu8egun1xnoSJSQM1zsEfh1EZQ6Br3Kup88hgMB5zFG",
  "key36": "3NZTeHNaLE4F5XmPTrVZgbPDwz8rvu18aNVbmz8qtCfsyY5tkbmELkPT8TDg7RGCxLGUw2F43n3yXDW732dg4vro",
  "key37": "2Cr1eKL19G4atsbiJVLMtLvxg1HBEme1aBnVEzFXVjDckekTz8BWam52NTmUFyoHJFZ6APgbVcWjm9D5MQq98YBV",
  "key38": "3pcAnuK8TJRYVqanCqjHjEju64v8daMgqLSRc8D23tMjKVPGrw1ToWBVJmWsZV3EChVm2K9NoSWRbQhuu2MEtbuS"
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
