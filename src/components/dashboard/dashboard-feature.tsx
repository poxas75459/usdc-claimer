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
    "5SQhkYLjJWXs6hWzNrnt3Huo4kqSvbVv39rZopa9xJZkRit7hrz9pp1wTk8izqhSgFUEuuD2xWgSoaj5SMjRtPxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57mz2LvH1Rfw8Qjh3iCmhTre5y4gZ62Tzx5Ko9LqFiTUo6bzpLef3ZRhgiwd5yfNhUPNLtFypYcSsDqzDQ2B1owL",
  "key1": "4kxqphfJLbgjinhGrShDGgQ4XXJ9YNVijcGK3WVGW8Ct81jGD3s6DB8TiqtdoMAgQRjWvRc3Hpy7CcSx2fBNt6Zc",
  "key2": "22AehSKfcNaXQYhN9Pr77bGyHEVYw7re57zWiNjrDC6y1PTfGHdSSFsXEibTXFybgmEioiw5m3jrWkWVPNyoAtcW",
  "key3": "3sKreJfZTYwJZJZh2nc9CsdheV7uUkwAg235oxCdMY4knxR36ZG5rCeeFfa3HdjxYhRbYjU1WKudUusBqnaXWaTM",
  "key4": "4ir3Q7T736CDwWJoEcg8LMeknpyMeJ5jVr46H6xmFoT93QFhm4TRkAp5Q2VScrsiYP93j7CujDmCbJyn6BnskpiL",
  "key5": "APc8D1iE8gMmWBJKebJ9sHzZgrVoSzcd43ai2LQZmLjELKFTdc1LXiHy6U9KjjVsNBauiVjuBnqKfGozkwo35kG",
  "key6": "iAS1E6p6n1gyT9eG3h2Xb4FKKqP7S6RHxwuuoiqUbNsf7WQ97yZyeB8ovVSqRq5Mpk2UUZjhFkzMFVED64pCh4K",
  "key7": "5C6fe3ndAFK3QK4mzvUnyRtvfUk2pC57Tu1mWkgZvgh68kNJPEy1m8cZ9r1Wxw5vpx8qcCUf8HHxUkZoWfyZF2T8",
  "key8": "XzLSChAEGHF1qcEVS74rtZnu7oDBzXF6tqAF3AUqSttdyDgnmQeP7XL2EZF9nywhoDFo1mx91Y2eoTsFKZJwHcu",
  "key9": "5EhnW1GfEzubneudJ2hJdFK7BCf7jF7pvUtWxrA9LMymx9eviu8DxTF59fsSdkRCcsUqSDQZRrZB9xT9XrX87ydj",
  "key10": "2d78QKmgJjeoLN1gqKfgHU6xVZY3rYxadNkH6igN4VzftJmNMwShMUo1UjwrQnt3xTkXenwhBHpCyDe1BmNg6Pke",
  "key11": "3wj3hgV9WMs1LvXcxZuHMkDjq74kkF4AMqKY6zqBAExqphVbYirY18FvCUiH2JShhRsZY3Pq2Vs6NqLnEGXR5BYH",
  "key12": "5xtFahmphRvsQS2ykpkE9x5yRr1XdtUZdn8y1xScV317Y4kc83ce6XDR7moRNaugj9hZYShvK3nnr8EVZcqrxE4B",
  "key13": "Y2Go3z8hgVuvHvGo8zTHiwpph22pVLSJ1vxZUqPaVN6KqZfsgg2gg7g5ywbXq5KKH1Y5AyfyGwttnZebFMGiWZr",
  "key14": "3j88x9c1b5VSeB1T4RsuChJLBJw5WZ3yscFgbhdqPJScC8jzH7aUqMKxn3NsTNdsyvKeYoi4kaFm6itWAWzr1sQj",
  "key15": "2TGVsGQqGHA7jEsE3dF51k5k78r71AKshjKB94f6srkWTWgkhLtDHkkWGKbhSH6wy2h58Grp476qaVRDwNRJxK5H",
  "key16": "2wT7wH5cnKv3fmdcafo23eFFWChGJvvr9L9FAP4ZNkgfpxNune2P4Q3UkUNQcjGtrw5hzz6czNbZRwo31ufP443P",
  "key17": "J38ykEiXwFcbSykMtzdXgrdY9G7srfUX36GcoQrkeX9uj8tzjTjtLicNPeC57EZAwpv1HViy6aeiZmeSGW5fJQC",
  "key18": "3RS5WEhJHXMzJPZBpiHPxkpG4EW63Q6TDhgauNbL4T6oJ561BwWakmRqBHxwn213JzhraW45an884Snijkieuz4k",
  "key19": "3uHx2mcjWmPRhtx4TgFpZmiebNk7it2HEvhEEo2JzJuesLpH2ZdMCbr7Le4fjEbCAzxvdFQzv8BvG9mW1TyHde5c",
  "key20": "2dahscnCrWtoZS2mmL7zubERF951tpvfdheWAsRRvQrJLP2RbS3HuhbYNLGyJsBfow53bfcBH5aT7p2mtpkVxbjR",
  "key21": "bgooHyckcfa789CzTD2VCuJNJ88dwoW5AnQeE8SjRvyh9zKT8Qh1wUmAqm2H5uGeMVCCWYzUxt7bHTwD63mawgb",
  "key22": "4Erq2rAgYGx5nD7BrpBY9rhz7d45YHkkS4F6GvUFNP4yhwTXyjR88zkjJTiEc6nZAV9Q4JyCv6L43HdXyHYFPeva",
  "key23": "56gcDMdS9sSSacbGvs2HEuiEV3HJvEGzkidGQXGTgq88VFPrriFy2Lm4byuXnHAGAAXCcs3cJfqoJGGJSguMP3rQ",
  "key24": "5QjTN3pF4q8PmkFjS2TR6KdjUtSv59nSxLwEVwsLvMrkHrDW9qw7MwKcXFR2CaomXonxMePMT3BCmpkJ4Ne5xU4U",
  "key25": "5p5bwxysVnQjDvjn25qTrR2LgTmCZx2uvK9uvbxacsrrXSnT7C223eMQ73bU4bsxzEHrxQ2iT8rPM2ux2Cofi54Q",
  "key26": "4i4poe8kNKiynGN2VdjCTMuUhAAXgTmpkBLpqbcvDZNYtTZYyYKDZSRMozhCLMX58RTrLZ8ZyVbdELz8Zr5kHDCX",
  "key27": "NeuogVf3xPtTM5PnS6Ajt4QQrxmXupzBhxgjBDQf8nTNykWXrBgJ3N4fYWgzgEmGwviWQqwpcPE2WQngm3RVhcz",
  "key28": "5VynXp6epL5AeDH3PNigC7hYaPac5kp43XPPRHvbQfNV1pJLhqFiGqaz2ENcCPDSwUSbq1o3jXSRNECmekMt19Vy",
  "key29": "5ZbQa7MP3v3LXp6hENHSMYuHzV8FN4HD4VSqqi1tDpNAxTg14PFqztedodbwkfQr1HHh4euu7CFyowJaumBUdPQ7",
  "key30": "5k2o4kZ46JDLMRb5aVkCiu1ixD1qRtsHnFH8aNHrGPDkPaAtLrH7CCBitjYPaYBu3EKXbd3HN3SqT6ESjoRSPqPP",
  "key31": "4ve2hEccfSDyG3BxHBXVydPB6MFFg8uVNFJoWkLMFc4d3uttjmxZVF6y3PUYcBAWMa4YooMTc6NyUSYZ4TuSXTEN",
  "key32": "4ufxBMBZa8PhBuAuSz5dbQWA2AH71nNfg8ZbCS5AFhnZr4xkx7vb47WAx5unDfunZPu6bCrmmCCoSb6JCLDBRHXn",
  "key33": "owECSK7r8eX2pDq2PvEMvZh26shwTN94yu3tYQ7R5mQk5RSWaQMMK28ngjJPArJLFRC1oDKMmtYzHx7h3o1DK9v",
  "key34": "5m5HtZwWbxmyALvCebxWWFX1UVakqYiqJzS8VxjTVkJgZpZApqffAz9aauWvHKR8sroetFFRRytWJ1jhAhiLNrsx",
  "key35": "64Ni8Csrhe2o9rKihHfCh5gjiMph9iVixuY9D5ANVbphbYdbmGhrfQ8TNg5M6hLWiYxD9qxRKUdWwg66GUQBYJPR",
  "key36": "3wPbyaeHE5N8v1jXLZ6A3NEoSpReZHjXEwMn8bhAKFWPzXDHXF2pioxXL3yXedwtwugyqLKKsJY2Y49iL7atKEgg",
  "key37": "33AKE3VMVJbftFShqi9UfNyjQ6z9qgyxTFc1oh5q2UJy3cooVkmbjc2C8j8iHjs5NKGw22AD1ErELVkXC9ohBK9Y",
  "key38": "4Ph4kYRyyGD8DqVCNdf2yAbxTD7rxwjRCNX5b83t7bCfaCwrehAwCBdHbWaWcXM7AWqUpB3xPG6xi1j44zujRRNs",
  "key39": "wZ2T7aaPspgbnFSkvu5Yz9iMYxtaBAouhyn2TLQTAVANPSfSDg5YAjzQ8DKsxNQrR7K4XPj6KcjGRhX3zSb4poA",
  "key40": "63yrKUoutmdiNHSHnZFchfPZwUrz8rSzd4m9ebJnWymKwzHXov4hDjW4Pfe1m7XxJtKRjJFwBo5mkyin4mnM99vf",
  "key41": "2fXMn9sQqXm3cb2fexmkT9kXib9Pisz4nk29dQLYMoeTStGstPL8n88C5yrjQpp7QgeokkoGvrwN4Fmym6rasnAv",
  "key42": "4CAurpj6tCqsoYRJvHUtYGGTnHrZCQg9ksrCEjZUZVrKzCRqC3qxqdY2PeSx7L5vbwD5B97D97heJHqG7VsmAEmR",
  "key43": "3RjepNvVYTeHKWwwMw9TToB98RkVd72QfxLmgkHFMVj1RG8fzQwDPbBUPdUaBTxCXP2eHnNqDnhYsirWx3uCrjLr"
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
