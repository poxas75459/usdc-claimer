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
    "2SLgDp9M4DgB1ncmuHsT9bPrBj1xHXm95bqXMEAZMiqvjthxY7NT4nCmcSdycwWVVeEGa89YAUvhTmZ4BxJB8Msf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U5EE2KkuWCwxQTczLb9ePm5HrUpbaPrBfa4cS8sRT9qz1FB3nBRS6u8LFwwApZX1xS41PRVTjj5icdmhmkhKTsk",
  "key1": "3tLJwtHCgk5vjCD9hDSCx3Mj75qrS5cq1cbrkgyBdXqvJReXsXK3Bh6yCMDSHdvqWH3YbZGJ7prikUZH3oPaYGjr",
  "key2": "3xxDQ9zTLjVkSta3pWK6wg6fsBAXvpqmbEEsaEPXtY2SiyazrYSTwfNmvB1o5SkoofNcYb3LJ36bai9W8rCJrYsC",
  "key3": "4f3oL1ApZm1PnuibKZPiZJyoWwi4zcJVv9zGJdBFXjX2f6kiD6ZaDr2pGufmsBJy3f8s88KRgwFZt87mKcpvX6AJ",
  "key4": "27P6RUpMsxt3xHfBwo3bnYRB12ZeiDGmGMeyoYYMkkvQpBAmHYmHvDkYB5j9qqCWFPsQeXhqkzKJgcyaUCrQCJX3",
  "key5": "4RmWo4snKauPvnmywq4jg5CaofrjsFLe83MNkdXAgJ4fr12nYFgmQSnh55GZt2s2Z8EE4bmSKU4VZGLjSUrBi5EP",
  "key6": "2EKiJ1NNQvEG7mqxqqT3Z7bEJSG6qkDqxYX95iFnPfAJNhX8b8bbseh4ct5iDQSSiYLkZdtP83nUmRm6SGnjwHMS",
  "key7": "dSoLJjUHtWNbvKofF2iujspFXVtLTzsJLRuffsSheJSDx819W7pGTkFHM45katzRoLuXfXgt791V1rF5irrFvDy",
  "key8": "4FtRDqZrRjZXadtFmxMHjmnYCDtsEHzokUSP9PvMxGV9d88CEBFHkkqCjkKa6WTGdkpEW2vCR1bFhwcSAKTTKGsL",
  "key9": "2WfDfCM7Zz5dwbbnMq4TTdJqz7tnA6X5gGeMHjUrvnHnj9jJcmKa2ck7w4UjFS4o89zRu8QeypZosVdEfmPRBs8r",
  "key10": "3VoUHG1jEebRpmrPkpkrXitukdUpyAFLgYqBBdcD2x9WCd7SqEdFyzzHr33ebhDXNQYsGXBAomyw6HFw5GUn8eTy",
  "key11": "5BXfRJx6nLf7k654L8hHfQZodbN39NZMR1RHoxXcyXUg4nGrvLRtbYMuemNTpgPD2kNDCGVGaUVU1JJ8vXvzomtw",
  "key12": "5ethxahP63rLQrUCC59fsAVZpyvpJZXdF6A1ihmpNN2LMMhUenyn4Wp6rrNvXinDj1Wg8KqDrmnWhr9jQq4i9YNt",
  "key13": "NvZLfzGMCdwNMPbAEHXAST4nzT72jXagFoHMy7aCiWcwgQzFNXY25hV45XH1VFMAJDxTfc3h8hsswnyziPrLd12",
  "key14": "5j9JpQJGqCXp1rBi66mGHY3pfz4bv5JYLBq9onndKjWKsLVP6MYFmpTTASAbYuRiyKd7rBTKr4sVsgwnHahomtpi",
  "key15": "4T1Fq9Lq2Di6BQmVjURnPnfoPskDNP8JdkBynJ7pzyNpZq57qqrTfN72yaaaityoN6P6HU6YCHvM8VJXMzKYRVhH",
  "key16": "3E8c962uVMNRg8df155JWABHetWDoJVSr8jHis3AxQfKP94CR8FajvYYZCNnGENGQUnshJ59vY6YsxaTizrodLfj",
  "key17": "Li37ZFhDqUqHiUJvVfDmYGrDBGB7e2AYSsRc6yhbSmXuNS3y845DXBekfggMGBwWWd22nQoHfMhLs4m4LVWJ2w9",
  "key18": "3bdszQdXe8W1RnV8nkZsPzP1CRfbsbL738yazrqLaeeoFc1bHVkXNrVtRXthwN6jTuqWS9PrUbnjUMoCVqjhWWZF",
  "key19": "5UpC62ZQALpxXbBSPg9G1jCSndQUkbeST3dgLuWwoJFaheUaVeivEfSV6GDXe6yP8161PC2LAbvsRAVs9qKW1zPi",
  "key20": "4H3WCJu4BCvCGz5iYpBZ1TkmRVNNPTx8VKU7UbgZbShyG1xjNxBJNqxsjZTogANHcU9kM8eSNbs7MpHC5hR3H5n1",
  "key21": "247UsjMDgPd6n2w2w6aPLMz5GehAz8snhPwFUXhTp2G1tbYY2z8fCTH7swHuu9cJytMxY1U3kaA6uURPEz5wuoHM",
  "key22": "25Sjw97zL51MDzev4Z7EMnmwW59unqEGtF3osUJDBbin7cZLjR2JSbZSu4zeYBf6YPtqrL84qo8oRikbA47EmHex",
  "key23": "fivFfqUeF4NMVyB3Zgsa3z23w2H2NzE646tjWiUwPWDv8eUd7z4UDhRXeHiQUmAoqpEsBsPMPuKrHCsAHDxrMof",
  "key24": "3f2ZT9uHXAPRFTMcLKQb2RKE66zuZS6mfoC5KpLsrXbSSNk9NEa7QM5eWdN3Azx287EP4AQGapz7CzrGjjD5LH3Z",
  "key25": "3mrDso2kqN8DdvZoMXCSrhvCTGa7hyCUF8JPWQSirjUak23qqJyDyBQ5sTUsgvFDCe8ZQfBiRdbZsZu8rAX1GWcA",
  "key26": "3uKh1Dnw1yZ17seCQeZNZfJrToQ83GmByiPtsmX7JoyLXnnpsYTiYxdY9MdfjJ8DYM1HCpeDVULGKPB37kU458GS",
  "key27": "3Sudqp3y5885bLsnmKzggXLxAqggRD3gnYJZvpVfvvu6XRdear1d1g633rrbrzW5CJXiQvBfBjkLgbk8BvCrPYqm",
  "key28": "5UA7UkpyXsKfjvrTBrJtkwMmYig9axjq2ejvD4TyyepkaBEJE2ecGeoNT54gCAAqW6i75CZed7XGsfnNz48Z7Arr",
  "key29": "3fAh1SyWfNFTw8oCMigySJgSnDAzHFQ342GCUVaoFLreXjZtgrJzZwoyMJnshnRhtQsKRBzcSKf8hDTite3cCoy2",
  "key30": "34hMLPsR6E2XsDK3yhxNTTvP9HKqAh5exYsvcVKoyaqqZcT5z9iiUCVpfgVXcFvGedwYPqvA7Bdr9Ej2ZbZYWS41",
  "key31": "29mLkMG9wKXLLpPQuskAL1SaKkbdtZnZBQuunX4cnApe9kXwsDMeTN4RZrAytfjGJg39ESoq5BTiVFV57pn9K4FY",
  "key32": "nfmWtyn2BFuKQwNQtxXEiyzfjaPjhCkZiN4GctZ8No93sBnaXMoPtmjTUMRocHouGACzSrqcyWBCBk1XkYNziaj",
  "key33": "31sDXVyMNjumrqsTAXEMywiDQg7JZJE9ZxSDPVtQvHCqzfezzZ2ifrr15Z4vTeRtTifYrDGkVozbAvh4LudJdxqQ",
  "key34": "3QZNQh4KtuaaETmjfTujBgYRQiym6DUbgaYWjLD3bCwuUbfep78HhNav42eWpgLWmQqEhtoF4qbFWqy9vRYokiTD",
  "key35": "5Rpdye4JD6bgCrw3ijX7DovjThJzG6ewxjETJGGb8JQ8pL2VqZv7hJLE35cPRgMxsbpz9BY5k4ibAFWNeoHaCGpC",
  "key36": "3efuav6Z4qdX3Fn8SiwcBJ5KiCaApyDiDeYtEL892cQNYUj5sMFkVmQra9Z9EANx3WUupAKs4pGF2u9rax3PmHcB",
  "key37": "3DimHMAuaennN6sN7VrWoSSNpf5q3BugzqsMwSazpp7oigvasdVnTBgozB9qaCfqgcvAubrzVDs9ETT7tduxGSTC",
  "key38": "5Bvc9QAs42fF5D8o29BGCMe1KFsGYbjpgnoRH2WHjW5MQ4HTdzimZDMaLnDUtDLtzj6fbJToYd2WVn5cvo9bw8cw"
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
