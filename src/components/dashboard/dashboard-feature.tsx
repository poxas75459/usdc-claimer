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
    "2AM8Ng9dfUUjVALvT2DFGkHM3Zk2fagTv5ZwTpwmSYXx6TdfE2GXnK9aPT7hcxqDkkiWTmGiKw3CQLX5JXteEbkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6QwxmcabpuPrWKo7kMFSaKVfHtR1jzerVdCxK3AUkyNWYrck11j8XQjsunztrs5K9t6Bn4gn5kCoonduTTmRBS9",
  "key1": "4Y8mxywdJvok7xnxEy4YJJphCKu1xMqBdKjWbjmWZVu7dbw9ff7Rw3fEZnhMaGcL6hPG18JW33cv1RmuZMGR6K2t",
  "key2": "Ma4WUiX268KVqS8R2YZaCeJP61yYV2Dg5Zdq3AaPYz2UaKZVbWpEDamqUi1CicE5JQFRu5sPTW2A1693qg579nZ",
  "key3": "4znkr2RMucDx2n1PS7z8wFAqm7JVoaq7n8QikaewJ9RoDVEP4NTGMyYRMXjyC4KtYhuxkFDSY24qdQtBMYhg63Ww",
  "key4": "5UWwpXkzMbejMcEDmSKLPXhEFYcccZufd489toA84GfYfY2tuLweiS6bmmYTGoYppLtvnrKgKfVD72bKiVvZatxW",
  "key5": "2fYdne9YHphWLLBBUiLLs3yntyb5xs8B3Rdtyv1YTghJBNWD2bxBDCK4JpfjSt7hHUiRQ1xHYqrRHMNTTqPcPNM5",
  "key6": "2zJF9f79QqUthi85Enj74o7ZFcWkvpWeGVVfNtetPiu9RqdS1TBEX2g5PZsYtndNacco1QvZqgrE1wp5kfREGk7N",
  "key7": "4Du5gCMobPBFErk8sgXDCvKNeiYkuchscnHr1KSSYABuwcjoJvFMCAMFmGJZw6GnJmUbfNFijzVaSrJjLwFtWLER",
  "key8": "SYPXELbYUpD5453FcmKyzxNKdteh8uR6v8zjKDRKuCEks1biuRTPC9VkeWjLN3pPFsG5Tf9eAkXcXv8v3MKuumv",
  "key9": "5ChQqofwgnS9QxkcyCrvSvxDPwZdcvah2mcyrvzqrY96ydDt6TL6Zpkw87wpfRMJ3gvGsqummY5SUeDp6maoseFe",
  "key10": "v94tGWszq4MxMsPN3uqKaCp57f3VRNr4a86X5zhJuzmJJxaNzusxY6sWiHLH9KWqUag5fSMWh4M2PoWhScgMEFQ",
  "key11": "5CMwHDZiCiGHcauc8FSS3MLocFopv3qjRApYNfxXeERRAFmVNxUraGVgyAoSfTCYXirsKJtTWCTP9CUmSB5cn7Y7",
  "key12": "5JWrBBD4mGQccWYp2W2UNtWiFuAbmpBqTWQrMcvaMkPudyqmhRnzq9aGqjKRuvLYpB7VRYtEqWkBbokBpvbbUF3x",
  "key13": "5Syg84xcmMnKD1463eQi8NsXWjY7sMo5na9G6BW5D1tqc5cVTRxNNeNWzyUJU3R9F5FxRbrNWUAwZwsfrtXNL35G",
  "key14": "ZPT6RKz6wbQCSFiqEmmpzuVGBdMScmGJrSg378Qgx79btb18sZa6r3AMCRbzkrbjYCy52swuoU1zdFWE6UCwTQr",
  "key15": "4oGCnLmfgEWLpKMmNKwAnBmvvdHCGNLZQ8qFpRww4iW2KFcigxBzZzkhsX2TQ8wm4jwHLTrNKaYUFRM87F7ydFyV",
  "key16": "5CCzcDWHbAaKGqYTqpg7VuZTsRb1wQTx2588WrHaome5WjaKQ9xZKBZTwACx7ggFQQJUnhsSMLQ6FBCGFRqdpioF",
  "key17": "ZwQawexwgstMr6Koid9QW4QrU9UhG9dqEbS71uUHuLnzUDAnLkVbFYAEyh1gRiiNcqn2VyxLGwzybYEyUy1nHnB",
  "key18": "3hhypXajRQV6kDAtnHVmdr7Ut4r9BMVZUPVmRfTytindYarvYP1WYpHt3Lu7PoQHQ62bdfPRNirKdCKrDhjJMXKe",
  "key19": "4VLcWV2Jpw6TWT8PxGdXFp31z1dZ4NNseYDDWuV7yxDbdv3jKRa2GFsX2Gb1quPBo9uQ581Rs1iJKzsUNeadZnMu",
  "key20": "4JxHcpp3PsJ8nZUo4YN1jpqaDyuhKXZGh7h4NPAJHSqpNmzxbUJRSmmjnZRRNjn8RGhZvi7Dx5mbu7wANpqtDaEf",
  "key21": "4ed1zWkGognvHwhtWBszyrLZhAZwx1mKMVqyrfkgjUg7iYQ5o9hpQiDFrJQXJjbLS7wNDNdtENmZ3NhFSmDYadXD",
  "key22": "41MgyTkWS6PDVMs3TfDrWCRP5iWDLqcs67HnRC96zqUQDFZHTjJtdjKCc9rZz8ow1AAReTenvWLD3WvwAPgkDVkY",
  "key23": "5519TZbRKftUVWYvbTYRGWHgNnjgBQaz5YWbtEwnj2suxppVadWGdSDkBAX4vrmCmoTHdnPGXM7taAQrTyZ2uC4a",
  "key24": "5ao6hC4esW2kWtVoZm3AbqvFqnpczKHAqrAnDasNmsYPpENEddxJQQikYceSfgKaWtrnn6SVxPFtmQkBjcNqMouG",
  "key25": "3dvSM9AepS68Y96JKgizibDDHitFTc9zHU71Zi7SDHJ4jtXwzooiYfnswpQwVBbJmJ5ZvugpzB8T3bKuw5r4BUmm",
  "key26": "4ew4pkoLcDnkZuNnXUY1ubmqxkNEqtvBXmRg47Wakj3mDTpvSRFjdwK697rRLXgh9uD85RZHBNhZTm4kDJqmFoqe",
  "key27": "2xohAuhktcwCu7tfQYnDwNJmVZ1PuFaAMJfg6CA3VnmPniK7Lwvw36r4VVxQdUAWRGdUcc3xVsMMvv8H8DGf4dkN",
  "key28": "49yzacndv9K7623wcRpw14X3bVt8AjRCzLMEwGUgyXpSadCsMBbrbuVPHNMDAMRK58FPgaKXgp2BLnig8sCXF7i",
  "key29": "5RdbqtAx5gbW3yqSniNi3DhPxZgUk8R5mpnaRWz3kg8WHFTrwk3KqfAqU4o4CzmN1wRzRLSNCcRHpoTb1XnccBUZ",
  "key30": "4yY4DL7c5Bh9xGTY1fLH9LEDZ63v4k8VaHF989R7c2QL6u1ACdrFiXax2tppDjF14forivkTMPfoRaCNQRbs3DeZ",
  "key31": "AFKpn7cF2bexsP9jxmnimKRnB8y9qiqEq3ZjgvFFRipKvFRJvAzYbDktHDrqn4ixD61AYtwYfjovPwno1FqNmGW",
  "key32": "2M2sgTYQfNh4eKcZAeEkATLco9dmiVNsYyy9DjrNcDBT5PaBq9P2DGvif8DyFRoEVLVgPKPvvVFHxuqyd6X1qzCX",
  "key33": "4LA18W8sKPHxukZSSahY4WmhtN37h5ajUiNrVzhz9EMNVrNo6ESx5SeVB3rcEn31151t8nhfaDHckLyHh3CgcnLe",
  "key34": "4GM3Q3bsfJRBNfNG3mhkE7bxaJatE7FdcxheqdQa4M7LUHDVcZAaWM4iJHxLRF5UzxejzGnyoTBFJtkt3rvgeTwt",
  "key35": "266r1FFCbEzNtijo7iKqFE9e8sqaVP5UG9FZzqhVbUXnpJe3mR4khm99DxBBvUH2yDmzc5sovjQW1SFtTs7bxWbC",
  "key36": "25tHvbUMVr8pSkro4T6DnJNU4j2612TyJsjFyMwjHQAnkCCneH8YGVw1vVYaR4hZg2fkWy3H937KDnxghEtRuuoF",
  "key37": "4G1GCQfsegxyM54NLWkkW8UX62xDoU24WkBsXkvzBRjZKee3BjMCoJXAFPuC7fTDoTqGAFSAkdCRKFYZWPZH2zCR",
  "key38": "5vZUboG1GMPjYpa3XocDEbxV18xSKMm7yaSN9nqeiQydZzJEyAmZgq89BgaESXQPxyXTA5roMQdcwPpeXTSdvyKS",
  "key39": "3geeoDCFex7TPoPFQiXYbRS24dYCru5FLe7oMEMA4nuEryGwg4oJtM5Xt8gWfqa63LbNLLv15i3twuf9fJMEAabK",
  "key40": "1mFCdPUHE966n7XGj1ZJtedLQE8stM5DAR57RzmkV6BvbUVLmZED3Y1k4Cfneaw3tHXwAQcpX2pka4SBrnmnfEU"
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
