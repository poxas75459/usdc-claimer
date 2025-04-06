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
    "4wkc249XUZ4WXvcTPTWDdyTyqTTJhkRJew7d257uc4n4eojsY5dw2pFU8EejqFCzCLgCE9eX7e5ssDosNcw9rUBK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kenpyAb1JjmjqbvpXkNY4TqBfqwiXB34AW59xtW1oAod6sEk8Gbb59Yv9cyHe3tszqpRsya67pRG93maAs9jjPm",
  "key1": "4j1nVgi9nw2C7sYMB2emAQijdfDA4Ap5tf3VpSNLkoESTKwGwo66pZ7ry3gdcP5NsV4PsH2T65U65zSJNSMwS5eW",
  "key2": "3ntEe3TGzj15kLkdKYG37gB3bQKouLsfVwRZVu13tPbHqU19L3jvM5uBSFkE5RLY5uyaXdJdwN1aqCxvbeZTns3y",
  "key3": "o6czZQMZ44EK6u4rCFYQhJGjJmoyfc8aEf6VhJJv3ZvXNNh96ciqvaELRyEd8c6ZCxELrUBZ5F6AKgwNNTJqnCo",
  "key4": "3KARNhvmyhpeGkS74vdDxuu87M3unbhAvRZ63kKrsZJx8T2BAZbZedaGWrN89DV4eDNejspi3L11YD7Ga5cWVJhk",
  "key5": "2gB6nxawstN66jXSqD15vpLdkf7bM2B2SCS5fu1z5yS96Shb6rC1rgPEhhAsqL4w1JnhV2cmPqACN7rCFpsGZ2mo",
  "key6": "4mNPbKz4v5EShoQd8NAL9ENwsGRzdd8NPPM4X5nnb54q84uMBBqPg8n7CNWau5bdN2wV1R9fvAVKzVNNakZDKL1y",
  "key7": "3AijQaBga12SrX86manQ3AR7VhBQANTfN2d7ZvqV41kLfaYAozLzU3TkE9kp7q1tv7Ja8uwnhGTgL2WYaFaYiA3s",
  "key8": "3s4VDCDoE5UwJNJzS6RUXH2rXJ8HUKsb8s4YEkFwLXZQ6nPC6Uu974eeH6m5rBGb5W9G7Ry8jrHeYUt7gLTKisMp",
  "key9": "5PRiGEXV2ZhtkPFC9dBJAEp44a6YSsC5KzAxQv5kbZ9isvFiHoXjwrEQqJcLnd5B9DDrxSfHcfxXD629QznXc7iJ",
  "key10": "SG6tZjUjG9RJVMdsRJyEXhqBJz8NQ1df14komCSTg7DboukSLgduSXpoMxC3aKu7SwHcdyUUGg2eMuwxgvjvhRC",
  "key11": "2HT43zdFQP2DpH5irA6rqnoN6FiT1tcketQ8a7xfXEije5k82Y3ZjFa5CoCChX2Fiwy9UpT81xJtR8gYBs1PQX1v",
  "key12": "35mzkjTT12rMy4jVMtSe2fcgmUyoSexJsLCiD7uLBMyfUVGqcHVekSFt59K2pc8qh5Z8oZeLfjvVGMg5kvZzc9pK",
  "key13": "4fPDoTYe66oR58UvqNq8N8uQGUNbmDpUG4HJx3isUGPBkUutVyKgufYjDhKPGPL6ohLoZUHXP5q71E4kbjaVfsNs",
  "key14": "5vJ5b3nDo4er1zhkpkyyVKA39Z98JXQaf4hHHSKGqwiGvt5fXsRu1wYMgTXvoqfdZ3MyvMFWLFSJQzyRna3M82hy",
  "key15": "2tfKEp4ayQF5EuvrsuPzNVU6ujoDjoZRUiBwu9roZwWbeAN4GUWbGkHbgwDokMwJYvaSHbJGQ5YucXxPrZQAnMck",
  "key16": "5cX3Wbj7FE5aw14jXiWA39CSgFAPRPgtaJ2YrgZEo6Sa3n5rszcBfHboof6aHJPFBAGXyBeEMhQizdqK4WFayeYV",
  "key17": "6792GLgFXRdTkeVFKdPx3HmiVy2qSdJy6z5xkmE5y6EwFEMQ4CrekjvdtfSR8rZcTUdQRRT7ToZ2jnYXeuiq8UDN",
  "key18": "2puUJT6E96mh1PQekYoAfQMJYikJScgpcs4gdGkyfmtZwk9AdVK8eyhcPFpQ5Bk9im9AUnJY7edg2Rb7riw854oz",
  "key19": "3WSiwD7Wzwa9sMe3JZ3LegnnyYGmeojMWv3yuNv4bSEHSH6SyY3S6HEPz65D828pcwkRg6gwsNd9ymv3pM2HqCSr",
  "key20": "2wjSBYKhS6YuqRcowTBzb7UNTjpzNFEziu39gdE1McUvQXjYwW5LJwt6FipUBDq89rMhcVi5riG2HpLp1xpHHJom",
  "key21": "3uBB2rGZbaUwSJvkh3VfhVbxgLQbMtm6WCtoVtAHtUwG39GAA2HmEkd7oAeiMS6R8oCL7tMTEhPHioNW7iA5sYM3",
  "key22": "39H3D1VLGP9QReVyNzsubG9BkgMNtgsqgcUmXq3JXimMTMGiLDF98K65ytSax77Vnjv8X4Ue3QdKbS5URWbHt2Bj",
  "key23": "3cQS2jt8pD1EVpyCev5g3m3VgvYf61SJT3qZzwf3XJ2zhN4qDK7jFJJEEQpe42Gcf7LZ82TFo7pDEUuFN4Qd1a6Q",
  "key24": "4RS3qD86MTGXzzZvYLcUbPC5yjR8d1MVQBhXKq796cUWkkycrShdMjts83StSGzRsfBcCWoTrFFYkSeit6hDRgPd",
  "key25": "41jocvNGAPCvnaX2qvnXpWKDEqXRerovD1z1cgdt74SWiNihckHANRe3Ly2m9MCUyciwkJ58GdU9CWgMhQi6Wk3t",
  "key26": "5sD8PvhtwRaZjMs3RNXf2GWVxc26aMt7tjAp965spEB8idej9wCxXakYrNBtsRNHDY25SH3mijNADBhWXxNMtKRD",
  "key27": "5xEFs8nRW9tk5ahYFXbVtzFkE5XPWA15jfpwUkfqQCPPN5qzBndkkKA5YrcvSQR9J3ZoQfFspZZWfZ3uwQBEgGz1",
  "key28": "3ZZk4HFk8e9WrEp6RT3dHWNpkYcMBRZDKQD4VqikoDLEduUi3c84J46HpnDFe1TpnHkFfnxxYMmptEAgz2tYQpVB",
  "key29": "x8ithWYLiCcMBokqTNphamqyqAb18Vvv6VP2363GRqkH5WvpREewtzSvCfnp2quJR6R7tE2CBksNEacYak57uke",
  "key30": "3hdRzKQX1FDrXb5FPfGyFbXV9HL95HBFUQoj1cqWxzr1yTGpa7YxpX31UsDHKdUr9XW2rbcvGZLdVArp3Dh5erFN",
  "key31": "4qjpCE6KkCx6Bj8SnH8LP2XgXTbif4iMYTecBQSSifzsdvU9BwirWjoYhv2tKbLuGwDYoiwDCKUJFbBKomMkQopk",
  "key32": "2EdRGvDfGdDdCRk6pNRrBcUWP3YZKCJHa6ZyGCN9xCGFoVYsJDS7fLKYiEjGvi4huyfaCAVyuWNkdydvVnmapmoQ",
  "key33": "2M7wuA1Mg5iM5uuDUwvNT8ByLNtdvzznWQPgmFBoqDn3PNQAgye63vUUc1u6PZapR9Dw7hcez1kQi5sy5BthtPWd",
  "key34": "2nA6YjFEBaAvmU23mMEkmi9ioXdLRwo2DAwq1phNFJryjcx9NzuArciyBzSe26tYBZTchrnbH5U86P1bstryvxSx",
  "key35": "vaBTgp2mAJiK7tGy5PrHtuhBPgJqErYVV1QwYsoKx9FsENL89ydptjMCw2nuFpYBCP5rnSfHraCKoWwNAV99Ppn",
  "key36": "2mhEt7rjCu5i353H1x6XssZCd8bWC8vt4fgJgRdo8sTMMGT5iUbg65Sbtet5nt8iLRkazYbAmuJwwYGDFLPzGWe7",
  "key37": "3XkiJ7fg3j2V9SYCwCLtpr2fyuoJ9Dyt24x2n1sp9FB7vqgTAUJYuHYNyCns2keVcwrEsqUbJvUbT1vFdmDvwccj"
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
