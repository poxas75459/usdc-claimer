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
    "5bqUb8fQc1WmtyJkMXrsa46yMBqRF8CvJDcUL3cCPe3wUSFyhVV7N6n2FrRJVHXUZ8zsuN3N9gpBV8ZeWdCe41WX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H3zY6RKHjGnHEYKhFqBgNLtGmJ8VoYz5hSqzaSWgWB191qDdy1LHQak9cYd91paVbocWCA6GoHJifxD3wBwJ7C5",
  "key1": "2CsyfzLT5wsgMVqTR8Y5yeDYZJgQBaVezfVeNwuwmxHaj5XWErYYMp5G1hiAanuV95C9PwhVv9dsHurWPk3rhLjp",
  "key2": "2LhsV3QTj3hkTVkTZdsxvG4cGWHVFUvGvfY8x8AakTqd1YrxWmDEoTdJzZTWdgiKznREg3WuwADNwCfRE5sYbREj",
  "key3": "4ExAj55c39nQtoerRiRpdLdJffHqrt5WEQV98qXF2u3rDx7JJXoTteaYmz2JEDDyG9HAQfb1DAmFbNzGcPTau5mw",
  "key4": "4cCzcSPUu8xzCiSptiZhbw3NCL4bsz7t4iz5mw8LuF1hUwaPdVYQWcv63KHqnp71vjJRikZpDCiPan1cwgTXqKeB",
  "key5": "2HuLGPx1ASRyQsuP6CnwZx7wdXaj9FrpsdKJwtxRxXQXU1u2sMt5tynsKtHzKiaTWK4DhqhEa4Ve35koAs5LTEmV",
  "key6": "tvcP1C3cBw6o4RZoHyjSk1Jq1x3G4FrWkbZYrzLBmV29hegRhEL8Je1sADDL1h6ahZLz1jpWBG2sss5NSm437cb",
  "key7": "5uuFXw6hR4uwKRVLmxbnwSZYJx2JTtz8ZUf1xQxpKpYr4aDQdaCqmfnn8oxxpfJpExJosLCAPc6m4bJGram1KWb3",
  "key8": "3axHc53MCJqPWaqC73rYV9sswTQtdSUmMGE71Usy6x5kDd7io7s6u8Dw2xKniidLpRrR56dY5kC5vCX18RjLwYG4",
  "key9": "45L4chAsnmsE5g6hFJ6pDPH3r3GwEBhCkuXjNcmxaitXtkc9HrJR4o9Lt1pRMgtv4n25qYsE6o7eojL3F3rYDZjo",
  "key10": "2z9P8B2zUNrigdwEJxkkvwbisyBeFtDR9ArKu9JFJ4Xy4TXsJzcryXtr4iaHU1MNxoXESjzRdmWys4fvwJLzY29m",
  "key11": "3RhLguVF8VyR7feKtSKawt5XV98ANGHzwNPvoLVEvTLqpwcMoUwo6WQSyxP3FUxrakxuS3BbJFNrPmTS1YVn8eaJ",
  "key12": "2P8USMLF4ydydsC6sVg9WP6iid8jAJZFvU2DUt6QbQcjqaRbV3xTXsQuYZoAGsy31xzg7gJHZsgbpENwfWrWqoa6",
  "key13": "4r3X2gChh2gC8SyKnNRBpGALbHw3pE9B1H3iXb7xkLUHg8jdo6793ErXbZr24QkeFFqEQjmkPZgaVSuZn8WDb5JN",
  "key14": "5bmW1bdoXQMed9XTgY6K9qgWZQSj44ZSk6ZcVJi2cHvLnEpzywb8Hng1ECWty17pj1oEH6RkP46EW9NeM5kW9UPk",
  "key15": "5A88DYVYCWxuibQq5rBiHjLuzNdBXQAeTBLTSeuKaCWxXUG69DUqTjNE82JWRRGWHnbZKBAyv18x11DAbDAqwYpr",
  "key16": "5NsgKKJDhx8FQG1euYus8V6vtRXBsThybZzUQMWwQ7BAetqtxSES4ALzRGuNd1xPCvgxfgGN8nw64oFEKQdMHz6s",
  "key17": "459ED9EjTYJpYbTrRNc1Kn9oanH5jsXyoDHEZsmtK9DLUSvqNVbgwwrUk5NiUAodkAAyc4kGxt3e6s9TJoW63EXh",
  "key18": "3HVkznCCVJ6HNhREThajyBTGuRFJJvfGEMsttDsKKXDweymgXWXVf6ePhRSqUYuRvL1mY54TSsT97K5bc6utYzkx",
  "key19": "35a92s2HWAfogS9zWKUgDpkk88qeeM2tbhF3TPDCBkUtuXyPMoLdj43Td13H3BEbhBu1hg5U9aSZN2f1rrN2goSz",
  "key20": "2x2mPhAq4ix6EqLocimKLG73sgwQGhedeysovPBgFRStYHPK41avNwownc9HqWUreHfUZEjptvPgyzeRCzvA5YS7",
  "key21": "3oaqruATKLQttD3sruqHjUQAMiRAeDFG4kFDq7m2L3e1oNZdeENWEvbGdaKZAPdErAAHkprom8TFhdqJCLinCwXU",
  "key22": "5baAMctbazEWNbHDMW7JKqk8H5fPLm3n3E1YVVJqiXxTwEX3onJyKfmvzir9Ca42E63RcF8b7BmAV4X3qUuK3jT",
  "key23": "3WKqAAk3xzeBur5tZMnjQKgqH7Hhk6rjX8ynFAea9ddetd4dX7UMhfQKEyw9mZ9FjAon7GzUNgfb5tdrTR98Dgdg",
  "key24": "SQTE5K8u9LJs6ZHTKWiJXUUYo2CL7BLJUXRzrU3CQVer6wbcYBAM7akHAxWEAm6hgJ7pbbqPTot88dPHZoMna3Q",
  "key25": "4kU4RCpUM5qNb7eFkdjJAxAyLLAzdTH9c1u8oW2rvjKyTDnZFnTE77ns9aUefmmtAiTByy7a9WFEpKABztA26E9Q",
  "key26": "5uGBuvAAeNMgFWdMKeA3XRLNaxXcNiiFFQnZD5tWfvzqQ4vZaS3Z2QcQTpv6hcVNBCxaMTBJH7qfe6EuEca74MDA",
  "key27": "58q9dRYNkQrR648Gv65ZnQG83to9sKYqDWJzcKzadjgVayzJztPsduD1iuEW6Tn8c2B7MWA9VGVwcKcPaDWWMZF",
  "key28": "5ckeaFMxzqB7jmtrbeaT3r3bDVLDmjkeZMw9TnbpVzYkCWdy8oQ5ouYfhBNHtBPjHwjZH7Y355CAeWgTonxrLfnj",
  "key29": "3P5Qj5PG9TRGA9w2zfz3hY4Pk7qy6htT31y6SPuceeStwBgdJw79mxKzJbCYNsLvqwrbiznp4EFEmm6yVL2qbrKL",
  "key30": "4CWCioH2qZgLzwGkt6J1X1TZUcWUSm449gXvbW4WZFHA8qiXRJ7hcn5qkgsUdZCa9zmNJEg2FTK9P16Fkc5E1kug",
  "key31": "4ybzB4uoE2ApdLAwx6zZkH1CufyzfEsJrgAjBFGA7wnNCNXgWhjwLAsTXakvt7KcidTeMHTRcQrMgrWzJGRjZ1zc",
  "key32": "Nwged6ij3j62iWqeYLCrpDKbchVho24jwBNLAbYY946HgWMHwiHJ2tjCYoSUHEeWn2yVLsTQnBC9LNnybHhUoVL",
  "key33": "ybf9bKRSyBUVTd53MBbFmKAhN81tSoxq89592hhYtUEhBVyjcgA6CNmQmv2cFSfBCXKitaYvsdRNyDqUiUzvvxv",
  "key34": "SFmyRabtCXjqhSSeKx8TigLSz26KcUQnsbtvbtc3mKWHe4vRcJySoErMMFfL4r79cqppr5ZJZxv4Ao6CUqHJKx1",
  "key35": "23r6uZm1AfNjWUXWmFT2MYM7QmxhDMdYXtkeePgshAXo5VwqQfjLtQSKPfyZ9uKsWfer9Nv75zbXMwFAnRYEfqgD",
  "key36": "3P8dHeouVHWyyuiRo6tEvbxPiFvSreupu1pCTzDgnXRtjMKQnJuRFHXxREpGKwkjHfCD6tMmygSUorazMjcSaJ9e",
  "key37": "aSd8AQE6k8JLL4EhYRKJJK4nPYEKaTM5PUsvLMX7Gg7BMyuukF614KwATLDyzq7pjv3EokHnULRWHm26TLy2mvv",
  "key38": "3Zxi83BjZy6UUrjd3A2P5WHEkdAZCRrQ22jQufg6YwLgjVTDA5Qme7RaNAurXoiKZcTpMAXkKoaZ7JPMK1kxFkA2",
  "key39": "2EzPbMzBBfCDGEmLiB3yFUUqTSb7pMWFLhsbNSu9C4fNqkNamhR9q5bfvpVgXjqhYgj7RpWfCapAb4x9pcAAJmAj",
  "key40": "2dJkdu2yJ1qPJu23jQG5SbsKiyznFxZmePRafpYxoSJiYAb9E7YWJPe5icEBN9PDEhWoSaAXmq3dDHSWhiYCi41P",
  "key41": "2SM4tVoPdXnQzetzjhKVzpuML9HY4Nxxj36SzcLEcV3rUbtJbpUqSJo5mfMfx1uCYovjvB2Wsvhr59WL35Jdo9ns",
  "key42": "5D3kEXWyuS1vNRtbYxYnuworoDKq587dAMXABb5upoGyXbwqs4mHzCfDj6t9QENhgMtZK3cZF9FtppnbqiFt6t4F",
  "key43": "3DEav6dCXv6vSWz6VQHsb66Ksk4shmX2jUz5HnvzKY7Et9g4xJGqaLanGAZVhK2nHMiwyeGoF5MMiqSEyTgG3WP2",
  "key44": "43jufjkyEnneRA3uwyX3QFkR6H6pAfiuFKR2s2FV1TZmdtJjZy5oyXHZiqYA3jUSzj6gEWQb48t3NXYEi4SsKoUV",
  "key45": "5ZcSNQAMdPBbdrtJNrEwPxzAyTnjqaSceNbHnXt5dm1vdGmbX8tpN5Gg436tXXy3WD2vhkGf4S49DhkmaesAK9JL",
  "key46": "5PkKm4Ue81o55qC3GMfXd9GysfCYYcfmv11MxQAdGZNT4rNRHZEN7J5xxN3TbonYVSksGjoXeKLofXLSmctfNh2A",
  "key47": "5Np7GoQmw8ztRA48n4azKk12BgrKwwgp9geMqcrCm4RoYztfrUpgSqmKcuaRfkh9J5FhyuZmQxHR9sjUsx7LsnN7"
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
