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
    "3A9PZGU5d6eD1ijYkgbzt8sajwjc1msuE6CRMFQgnA7V3y2YwMmdysNcgLpAMrGsB7Hwa5oq7NSz8mrNxRa2NHVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWDtAW2vCC2iWmPb63qiSQWLGmMi1PSiTrUWCEXUAjY1D9KRE5VujJWxmX16taTabvpF1HouZfnj3ETaDxZ99TC",
  "key1": "25iwGj75WJK8d9prCh8iWZdJbMfQfdeSTQRnJWWX4MzgfThGsKnG2bvWEsX36vZJAvwvc1d8zXkass4Ho8AmCjTx",
  "key2": "ZVZVj7TkTaKS9FZAbcUVY412toBzZxmn8TGmHiy7T5AtgU6TGKpwi9wnLLz687tKDVnP6gQQeZNyKAaPJC8Zdoy",
  "key3": "23yFrWGiGCHJ5ksqabrk5aZ3b97Na71QxruvVbsbxNCAqTF9uvoFkibbPW2dhnaedtKFSWAB2vvSnkTsadB6LTK2",
  "key4": "56szhv6stuuZfLguLiq5mtnD7EZ9SzSn55j7R2qFGD5eR8kw3EJYZWRBi3jnzNiJ1V2PfCm8XAKcnK8GR2Zt62v3",
  "key5": "BxFinDLZN191n5NAVNpCBHfKWhN35ReDcpZq37KGN4sPmpUYRBGYWmsDoydicC73SYNNUcFcLasQpbpqeFkAKoh",
  "key6": "2S6w2PE5YfYQte798PqEiwXYFwuERSz5iC3fYXvSzU8xfSND6hNf1a22u4LwCftPQHhZLGiQtZeBtExB1dVEzjLB",
  "key7": "4zBMJbonv758CZ2MzfvsicFoSw4XJoUFPoQWbrJPSG7w9hMssP3r8EYqbahBS1qEFTHFYX79P5aCjLxnFaLC2PvD",
  "key8": "5krZjfKcQCDokrsJxkahgRc8GmSrgetoq3kxaY4uQQZ1F9jMebA2VZDBygcubvYNVaWpGDS3VtyifqSjZqk7xAad",
  "key9": "3QUYwZkUX1m7bjpQUmbDaUW92NHYpVLDWUifQDQzLDiBoKKXitdaC2ZGWgUnuyssaWbVme4u1nBVzgCWDGDsLVSD",
  "key10": "4pGi3134dWJHpoPpBx5sD3M1hpZMd5jMXScrT3VxbWsx9mhqWayebvwvmeXdThcQ288RyRY8HN92FxbgPzoSyr1V",
  "key11": "2tn1oe8cMsMTkCbWeFQrf3wEvQR6om81qz3HjjRhga23PMjcXyxBAj6EaHQwjS9aDXzpuMvDweZqi74dBoetYhd3",
  "key12": "4Re9YqFknN3pzq1Sszq3HidhrvHz3G8QoFBmPdG43zJa73Kyxg2KuBposY7SZzqyDc9ixnZgW85fsqLPm9Uaz53j",
  "key13": "83F135ijV7SQaxNPqjM3uYkPR6rjxEaKaKdd5HuBdkMk92vgyVXirUsSTT8vcfXTfmBm6xeXqpJunNmsSEnT1Qz",
  "key14": "3J4Wegum3gSB81AoawFVUhFDr2vRTxCNZ1tRJqHjUHTYQ2mtqA81JpM765UeS5qkmf82GLYwJRxjHER2Zp9GvpEV",
  "key15": "4W7bAsAYjRamBJAuGyexae2fEsNVJvkq1nFWZ95hGckPLFomRvLMzTUZ32M3TKPDgEXpwQQ2rnDJudr3rtxkmmaU",
  "key16": "NPR9XYKYXcUHVotBFDogMhUQfwdtwZsgfCxAQa2EKjyasmtNFLWE3pZPY5CMqtsmufHf6YekTmgPrvUQTDiSic9",
  "key17": "2Ex5C2ykxePcWM6BTbyfrowxKd1VYwLjwmMDz5ETm4WqWvFmYqyEE3M8vZQH8C1tuZovxtML2THqjcyS155ZvEmy",
  "key18": "4NpHrkE3kCWhhSA1P2rmhQfrfMkG7wuWe9oYuCK3YvegfWCAn5SfZE88q2qu7PoUvJDTw8XqJTFyRkeVbuQ9GWcH",
  "key19": "45cnd4CazwX63iEuesNeUbmVMu2PzczJpuaoec3uZ9Bqp9PDCe15Eyw3EaSvFGQgyX6p2VNtPFpCuCNBcEie683b",
  "key20": "35LV183JwkbmEYsAyNXbeb2pTDZdNbHB8HerpmHLurJmaev7mLwQmdeJ3wA8NXZAYxLAeUPHb86TwnsgafabaU8x",
  "key21": "5QVC4FCBnvpSBkvC6cGbFHeJJ5EX1WjNdjDUDXA4yLXk8zuFHCe1Kf4HMrHFTXA8d8MybS2GNuCaRMVqX2hbJ6HQ",
  "key22": "2o239BME3M8u6dX4S8NZ6yb8AnAr5tXaVNXCGdsQP31xUTnLLhbTzkeWr1Zb2ddYGVLJAfDKcUnjoYfdokvkkTSY",
  "key23": "4swjyRRBgrRiBua13WvWgPGWtYtwSrCbgPxpCfnwQfmrY8nvp7Ye3exWiCZ4oZ5LBWf9PQKLPHeC8X4V3CCp4nUa",
  "key24": "3zFan3cKtQ1d8xVSzMYNArwVHgAa7WmQvHQRQthKAwTALmpN4QNLsxT9CC9FevC8pQWDjw99KrcJqZnQiYTqk2vs",
  "key25": "5oqahCGVhFtZiNkn2c1YDeRDUGmEsSDKUPGUC2kitj9tkWkk3DTYABqCLwzmMW2DvbhVfRJxvK5uyKYdS6rsKFwJ",
  "key26": "ynjbhQfWSEAeM53VrnanYd1jUZL4NB3KBmaRR5Yd1GyzxjvG9fhVhNvY8UKScxVzE6zJD4ripoyu4MNcZYDcaRZ",
  "key27": "3o9MhwgGqowhPcid5yroH5X5jWKQpLetiBSJU3CGdTK8Co1DCCC13vjAVTjd8g4A5iJ1G7D8JyGGQN4AS2NP5LtP",
  "key28": "5nG5XgLtWogkENV5pZnV8Ku2aBcC2VeaA72GcogtEDxUxhnQgkpsXehKfoWbC5p56J6tMUqKN1Yiim7tW7V2fk1M",
  "key29": "4YyvHpFi21gNV9bxzhecjY6LEd8cEG9SWRyQufaJ4ng4vxPYBHsu1MykaD8FF1oPTcXz2WR33zjmjAWBs5KhSDRY",
  "key30": "27N4ux6FV5z2scK79g18bEDtEGvyTdAxyXdhoD1Q6ZaWieEKo2x2hn9isdVhvphf7eWXvweTZfbBPZmg99BCAp1S",
  "key31": "5DbKwZB9Mi4qaQAKdCEqUBWVaTbwZ8x5QC4n51XPJRyYaPZgCfDqguBkuvYgGcwcuwSt5LbNQtCAuzr2osGGjxYk",
  "key32": "5FadsL2NNyXvhT44aDYiGXdzcNbiYoPw9ZcxhfHZjLYeZCZPEewxSKWSUqQuibtuJhqUcR7UWcWo1g1iSBHF7BUd",
  "key33": "3bBJWuj2iFNezFD3gfhUAR3usL16siHZ9uByxthmnGw637v7oca4n74fMEmxHAhd4DZCuSgxfDjAyQE8jFev6Nob",
  "key34": "2KQ6hWtGYz9LauxoGy4Hhq7uvgiMShE862TGFNamDsM55nbaYcEyd7iCthvHrgbqk63gXn9vraJZ6F3amputQ2ff",
  "key35": "VA9dKFxHm8mkE75rLco7mhnQJpTmbtE6oSvyHip86FLcnkeag2jPsQ4ihn5GgyU8Gv4iWiCSYfRYk5dJRnb6tzz",
  "key36": "3gCpjvXt5KVyF7vh8ZhePXxuKuTYWEJcyFAreUqMyjwHQMvrMtgY4gLQczD1qDZEgsg6Z8HDGuyVr2G2js8k9g1d",
  "key37": "5n7MgnM4ZGhZ4T8vYE46574YUzfqgp5WJpv9NNwFbe6xSHMbqsPrJzkJm6jpYmFi8ENcvuUt3khugsLqM4sHnP9v",
  "key38": "5ZYfx7b9FqAeMH6eYKVunR8fqV4Y5mLmGbyJo3yxka5sJeHy8CuFBb4kqCuezAh8qRXJwsi3egWpQGvFjdGhoRoi",
  "key39": "3oB9AcKDpZy5WsMhXRsnP8iJzH2VxogZEtjfk5FMm8Y5R8uYocmw9CtgK4bcfPGGLMGEtEWUaPw5NjXjvoH9KTa7",
  "key40": "33r2KEunXp9ZWNXduEEeTdLTmmRdF25gWUhTKVKzcYWL15dHK1bJArRGUL5rjh1eoPgnfkARtFMNtNJ4pvn7zg36",
  "key41": "5aVvveZSKLSg9Qn6QHS7tT3uq1WwqbE4MsZwFYmg9N7vtQSXNrayeJxzKRjcmWrYAYPY2PgtVp7FC87oRrKURxvP",
  "key42": "63YUqgUtujx9GCugJf3Ye5wY5zCHvqEKLHAK7WWu1eyyorzgwTVbcxMVanAdbowLAgkrYBMD5bFgC5ucpdhHPpQ7",
  "key43": "2sARq5RzJ1SCym7MPdntCiGxUqPFRzJhcDPUm6FUgjhct2puQvAFGtCaQunWomwg2MSpw8poP9K5AFDkKRbqWKJf",
  "key44": "3277zxBh4GEX3Cj4x9E9tPvZEtbxh38M3LmcEFcvQTPuTucvmhmqXYQnctCgYdPPtV6FrG386NEyfL9D3qwVcztd",
  "key45": "37QwDyFASEgJM7zVZy31AnGGGSvcdBcPAkBF32QKm8QLgp6ZWxHhUXKEk2jgiUkWaKbNtQ6Wks58iDYSUJATcBud",
  "key46": "3m5VKmzbT6Gguc8BcwgMDX1ieyu91pEvatfzQMHfEFhigqnAt4or4PcC4UeCtWWtehLCMUkPPypMnrQDkxticU5h",
  "key47": "sRyXLMdUCUE9BM7QGkeg9SAAJXL4Ag7tn8eMCy8mZWneAnjr6mLKeLhPS1SKnNEZfpoimE1xG29uG9vu97r6yhV",
  "key48": "3DmyqSzeaPXV3Gbe1BTvPrTQFKrxCuCmQcoWkWKuNDrj1YiT4NvL6o4kbhStmFUsCKYUhngqPCziUeLcvLbWzyD1",
  "key49": "2D6zvJZDTjHqHnFuSh2jyvH26JLvEt2KeBdV3oVJZmFCai6aERqsJqMNCSsAzTZDFMJLgaPwjWuJRGDYwmXdnUdz"
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
