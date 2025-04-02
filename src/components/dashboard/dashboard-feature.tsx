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
    "31SQAwWuZLFqP1PebpypBnYVyAxC94djAyxrJs252CTYEE8ptNFF39VkvVkyEiMr5DrCLT1NzGsXya3mZQgGoe3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wvj7QUqqDNjuzgyCxLqbwf3PcngSD3yQUNxYctqEgFhUKtKraLFLuf8yPnGQy48YFy2a8duFEmZZyFA94czs25g",
  "key1": "WMUSeHT3z6RTBcZyouDVqUswT3hgiU6w2gicwxq7WZjWbzPvzBze1ZEAPiaaYoe344DR3uB3FnXZhMHBva95Gf1",
  "key2": "2Q268wpz42iRXY2cGYu953vt2Bb8yng3FKoagPBJt6AaxtQZwBhHqx7kUaSDGXSHhH5wUnaae242zDzhVGPQDVcw",
  "key3": "y7aEGFngcWqjqz457yJkQkmE1xbqNQ4WC86hgkCFGCzXMh3rKjvVNr8TwjrZcxStAC4QjCfb6Di3F9kk3hmWGJM",
  "key4": "2dSTR6k4cGd6dZHXZGBjqVjPihs4LGLHnbsVyBCW3nq6JFEwCUpWYgLZWMThGDrH4HxvYxX3EHAQY6k264FaPkjK",
  "key5": "2sNbgA5nD9XmKWEm5A1G7LLWRH4SnkMNh4FVPfWqGqNmbnfzySVEpKAnxUjSzXTZtZfNeTDEQQjBr7eGv7apSTLC",
  "key6": "2khHtdXULPwXijHQQ7DmttQSfYryj6mYmmhDtB2JDEpPWLFErasK2C929JjsssMc9RiGTSxZotKaMSy5ChfuZh33",
  "key7": "MHHqmmbRoYLjkWZ5DvCEVe9HUTMS9osH3oPmsRWYzUEjnecydfQyrNSCcxnQ3ujpjamBiyBgzcmX4xH5ZKiSUx5",
  "key8": "55Q6Qj6ucntncPnyNKQjPciHgoSvZ6rMYCAxgkuAqC6J8iS2jRG53phduwCwLLtrZXCq31zXRf24MUAehxuhfeCA",
  "key9": "3Dqs2mwztpcgkjkdjssCLxgWGq5LTRT3T6v7XugF4uM99Vo3YbWzaKpw9u1VUSpY1ynpGgYsgxg7AKqVQCRw64AB",
  "key10": "3VBfJqVKhs87Tvgj9WHTXLRu1cGqZhwLgnsGTPE4JiLug8PmFmXTyET9Tw3iASdim6V3yweAwqyQnbbduHP2GcCi",
  "key11": "2fqnxQsw35z57z5dRWi3zeXYLUQGEHN4Qp7CbEZsUb9r8eP895u97wR3eVof1KKyWwqUNMhPs3W4xCoeCAvNH2Pt",
  "key12": "4GNfmYv3ZSWiyU7oR8FB9gGRG91V6CxKHsKR33mD6qosqZvXy3J98JTqhTFvkbXHcbwsQAAnhQUU33qeHuGBWmFc",
  "key13": "oEE6BzdQ651c8eEGaDNU5HjEWMD6PcRpq6RZKUCR4QoNgpUwoMAKZGYYiX8k6dWeF81HBMQ8SXgJ5noQ9HGMhXZ",
  "key14": "42fERbmeogx1sKLfFArr3LtNChq4cBzrENDLWV7Vaw25KbPWrem4nHB8oZ5ePHSXkZgsdEyYQih38tEgbXp9jSv4",
  "key15": "65ksfqkSgukqJ6pZzKyKQQKVDp73yEx51aMxYpnzhu8ykq4USxz43V8f8bwf35P1ueWRVR3MjAGATaP9fnPgQPXb",
  "key16": "5hawSLjG3GAczhWGNirx6Toi1dEQszGC8D6cKgxyx489zJwEx47aSg9cHSe6CCCFxk5pNFvVDer9xJQM1iJb4uJG",
  "key17": "LxTx2YpoCERokCn6YwSjSynxcPnVrffscoyBFoFZyQg3brwS4b18YoConv79TWW3r7UsW7eBtXoLZ35rDMXZt3r",
  "key18": "4mreJ9TwhUsBHWZFz8C4sDYJi2sgPVP8z3a8HHhj66Qd2zZXAbtLYhRU3rvQenSVRkDX7Pw2Fj1Jer8DG8HPbPyY",
  "key19": "2FcWLghJkwNKx6QAWtULve5d7bMfiPhfzGf9sFSZduBuvJb7wLQ1irJU5PiU2zV8uqtqbLAfSsqbDRaUW2Fzb2U9",
  "key20": "21UC4PbSD73RfVhU7kixit1uH9yY4af1Bn8Bkg6aY64B2g53yvG1Vr7MafKf9ZocdrjqDydWiJcEbuiukJoLcWds",
  "key21": "3SUbtgJrDwZd7fb3QCqHKtKpWV9W4EkSkxgjGKvhSn6pTKLTpGJ6UG1KnZo44RavPqPR6KAgszYSC79VJwUyK2cg",
  "key22": "xmBAgx71X41eDz4Hg3Qsz7M2ZcHgJwjxP3mjFXPKiapMi6yckCPY6PnCj8qbbmzA6QfSGPQntHSWY9hYHPi7tNj",
  "key23": "4j1SsZ2TnPkjRbxTwwR9rvkSBD66YmoxRdoL43RFMXQ1EH4DNgkXSw71Yi7oRy31rrfJMJkvr2UXW9Av8ahQ5HC8",
  "key24": "PJ2kymPrzZtsMC357etEYysHgQVixB1ULivVS1yEL4GD95xKeDGQT8gnL2Wra2tBJFfDizygBumJSQQWdcppr18",
  "key25": "2vNNKqRzzCYz6Qxehxaz1ccbomX2zH44V72vP17AnRQuJh5QhZn5MSTiHo3xeYYD8poLuatmsFR3FX8z1uSkfGhk",
  "key26": "2VKiEKTsHzwgTVUw9gFa83LEjmVGePRe2x1fWd6F3cFXY27kGXX8JePQD5H79tGR837js51WqA513S9eFWvjQEmc",
  "key27": "4abEqFgECkhCYDirgP29ZMcWL2S5ckC7ZueZRtdnF5EGxgH7mPMZtHMvtyHMVnThm45PHcSG4hdwkRdd49wo8QLU",
  "key28": "2ubu4VurXqSMNJcrMM6GaoE3kREUxZ33gejMJSd73fZkqcqVbWAoYPwBwtSbTwDCzDYQBcQYMsMFv5Dz1Sz2gyBh",
  "key29": "5V1AUZt9BwaKxvB7hErDBuTPpNALJvphGSvqen3UAZz3pMTWugB5LD5ZVhQvddnchwdDWBAGt7qaMR37dr2bWoK2",
  "key30": "2yUpCNivhoEPdvaW4scB89g1t6ntT7SZGCmU3LpmNnyGsGD4oQT2tpbfLUZS8jS2ZDLXZ8gPuFJSaZj3sfmVbeDf",
  "key31": "2tNrcpJ9g6JUgRsqoyk6SYk2rZ8bxxdcFaZJNuYifyHgvymTtNtPLdtUNyDmz4Zbp1LLetcPk8QzkGx3y92H53Ss",
  "key32": "36j11X9oGC8BsLGXwoGEPTKKCVH2JhUTBmNa3haTaY5D5UTUL2pExUew1EjzjUpMm65WoPDFQ9xCqqGrLxuPHJf9",
  "key33": "35eaviasVfWAnnXNo7kRoHeEGzcHKfS3cLTXPi1vwu3PvUgZEWCVgbMDkJAcYZy6E2gjpvYsfzTdagjMryQLtfX9",
  "key34": "3Huim1tYdqZNafGpKURqHM6Gg7ym1Cy3mE97pfovQk2mjZ29QAXjSAX23TLE9nVgs8kTRb9cTdgUcfNK7WoYPrD",
  "key35": "v28MQUUZepZYPKUHGSe1HScG8NYpFbu5kryogdwu5K2f15TTYRjMH6ce9KQ5VMmc81CqdPzgnz3LwR9L4SBPqPh"
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
