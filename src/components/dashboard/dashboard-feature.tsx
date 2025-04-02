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
    "4BUN9m7hhwRy7n9aqNb8cHvVKVGycmun6vngeynCTuuCe62wESorLhgEoxB4KxMHaUb8ufwZd26knrbHJSsopPGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K1eR4e269EWvDba8C5hb25Z17D39SnoE8sLvzQ4m37nMZCEihqZ6ik2WfFoD2d1aqeESc7hawba2qGNC1Xo6zHR",
  "key1": "3hhrxYaQR3tKmrbT6AvEhPEpiWooiT6gT4gtQgndiog2q8NCt8pdR3YaSPqy8EaxsoXMkndtd8VQYMRsr9qoKyJS",
  "key2": "tymDRWkqgUyjM9EwAuLAcuHRFFzuVT8g1NVM1orUvpRFsQKZVvzxds2MNMcxR3WCNj1yABMSHUymyNhef65RUda",
  "key3": "BTED4CDyNFKGrF7vCcEW2JzA9yPs8a2AxU8AZSagtdEQnophbJYmbJcGGLDESsMr5twftCfqLxgJb9kLQFL2ffs",
  "key4": "52VJvy9LvwC9XWPjUBQ8DsWV7dW4Ty9kmK9hJsDpsA4b2mbLJbi9h2rWz6KXr4oJwC54CrR9yD75aVWoAQZjZVex",
  "key5": "5u6CMGAgVFuNAeWTkV8JWqG3NKYz65ZLbMgTbuJ5nhATYJ6MdwauyxafxmDbnGaPC2brEpZ9mQL4xm1mJRzH9Rju",
  "key6": "3emtenPFc6CD9SbtBxmyykURzDPnLxS5eHTs5AmyXSZKF4nvkBRgwHtMWLQfKanXM9ZZduH7NiqWbjyq3ts4L8x9",
  "key7": "5d6GmAMTjRxBSU9jmQALi7KSASBsfLhRprMi7G66cKssXfcSPH3AZCc3RYco4D1Vh1b36GFFPcHkrK3gNAFfbjp2",
  "key8": "5GMZZ9YmNLekXZC7XUR14TJLsVE3svhGX5jBZvCfYVWPedSyqsxEWmT3DVbzJZbRUmHE1e8z6Dih7AWgHryvMxB1",
  "key9": "3fiptp3qiLUfdscGy5BCxHdiBeWdGVe4GYXDh4F7qKiSWc2zFRKmAvKPyUrT97ZBbvmbKzQF5XBS1yzvQUBn9mm3",
  "key10": "3Md3AEgy59wVSiuoBWJ16kuiB1e5QjSTitoeVNMfDv3Y5DVbPpHcgkauZ5iXgSTKETSX1pc6VhfQ99PVywKokSQb",
  "key11": "51hbPjL4k1F67hBuCedbhrXA7AbnnBsNgVwYSMhW59zcvUMPvWPRxbbDK47kJonvXmk79jRjwYMoGHJ6kFa4v2AE",
  "key12": "3g56Jqy8gih8H7i4z6APoXvxB7rZJ6knqupKBKMc1bVSFQGFEvHbt8U9giSGG4QuTKJMcaS5nhRXw54FAhC4rFjD",
  "key13": "4Rw2gDzKfT3UWLRfP3vekhMsg9PBXMYkVdEsSL79c1WK5SD9b4TqthkNgcd7ZShs4NjzKvM9K8MZAFovxRqBEMY7",
  "key14": "4ehZZqz5V7LpjBeCJwPVgJmJ7JsQgzRHs2nJCnRUychyL54DSf5jUdoovqR1eTvZnvXjFqQeUSpd8meo19FtLjys",
  "key15": "5HsEBFHim5WP39GJSikcdZuDVMtby9pTZLDrRgwDFYUeoNN9Z7i1qK394W6NkJC75pf1kGg9posrdoYND7y7RvNE",
  "key16": "5GDyWj6S9K6UhmemhrrfaL4RAVU7jCT7JZMN1aTZG9sF1Kb9FnU89CPTjS2ivsgj7T4gNmasNXizi6FKTaByDiJR",
  "key17": "3AX42bQ7mo4fZmnu1M37fbeSM6DkQDthCn15YthaV6uGMefLTXf8hawNYZuCHe4MLwjvZMhiVovwDSGW9PVRgzJx",
  "key18": "2P9ywoKGi6NPxjxpWyUsK7Wet79wJVoMoTKrKoprr3HxEnBZgyB4wYL9YSjGTPFNtYfwBUYhpDTWFBKU3tnnRZeM",
  "key19": "5ehy9R4d4NqoRpLs4reetyn7VDMFEGDdstqKaVjFwTqswMys8qHHK5qTiNPKCLk1D5STiKaLQEhszqJriPNWmbrj",
  "key20": "3JnoYzMj3dm1N1jvwkuNjqUB5ksYfT8xW73Ym2JP9qWGL1E99gt9yJGJwDr8Wcqeb2mjLo3HgFw3DWTR6Yugzpb7",
  "key21": "49v35AQqBYWA7GXYXYBQUjgNDreCcE5itCeHEcewArGgBR5e7jTYqAEWpTgSUwzmQxLUMgNNee7XgicqzBbTnn3Q",
  "key22": "5V7cQT17jRbFneRkrdZpuzESwnwcbxiNEeFLNfWcrnvJUeu1CiYrhfqDPh7ATTsRG91wqqqJmK25voZbW5BGFF7q",
  "key23": "27RZCiDSDo7JChDkcB8pMJVKUcgA2Lrmx8qsFXcDS18uVGHdCPDD2YAMe9oZyvj6VCdQGBQtNJ1xB8QwZWiaiKxJ",
  "key24": "4G9GLdJ7pSiGzQW7oeAfpfchmCyCHLpfzjTP9NKXxA7EHFxzUSs9vfMMdvhMeG4xEEkYWwR86cfT3uKi5pLqWRWc",
  "key25": "4mrEyGLDoNA8Ax4bZ2D6NMt8vk77JV9GF9Wmghw9EZ1itkwMiPuzGu678W5iEYXHfQWMvEBrso4bb9F3VeE4VJUk",
  "key26": "262Ardn5sxKtQ6cKMuRFmvZuXQzdUeAh5TpBK4Lo7HPJoTenFjYmqvyvFLCr637vq1SHbfXYPgW7KDu3VCj937xc",
  "key27": "5tJrQXaWyRJY9M2m6oqboSRQNpBbZkWNKT1YfYw2SK7rCUWkBJZWCPP3RK56J2tvr8tSMUeKzNFP4TiYvi3moP1k",
  "key28": "2kGBzRdowrZf5vnoK9J6Lg1VMapknqsTgfUiCtySvAw14yfnG81A8GRFXzvkkGxnWY4ubqYm5dJXyqHCw3bJLCa5",
  "key29": "2b2NpFVFwdD4Az6uHVKdqLCJzkX9tgAgTVntUsKQf8zriTxvYkW7QQQev1BdLNrk4kHYWcKwdVTWmrrm9LNQGzwV",
  "key30": "3ttRte34jEYFz6r8WoJDpQCH9asMPG1WxWxwjU5Dz3zRdG4FbnL3bZnNx3uN9GdpNgjt45fDm9u9UEJqUEJeKRZj",
  "key31": "24Tw9KVRXBxc9x9nF4JN556CM5cakMFib4JK7yvS1Tzf2U1DtaRdw96WiETZW6uXjRvccMf5BrfP194uMgxJHfng",
  "key32": "2EC8U64iLb7JvMn4tFCXZCt3TFBmrg1QBj3G4f2T3SbJJp4wH5xiB4vRDBEYBBnr1wkai47p2PzqSRfe73agiMUt",
  "key33": "4hxdXSGCPyKi6b9QjER3B8m36fuSMrftGbMVLmgBQCsWNa7JXd74ySxkKwVvWq6RewfFa87xRVPn8Lxo13ySqpZc",
  "key34": "3aL5vFuyD8DfpWdWwSd5Adta8maPFVNwGv14usyBgZfBFNk4wwpLnEjMyuN1Cagpv9CR85393qMEcGrT6fRowYxv",
  "key35": "5kNUci9TQMVWhpFjoggT4Q6uJWRn1WoZmPjyrb72aeE6kf1Btjwy56L4A8yg4j5EkyFrDAbnm1CVwCipRK52XFUG",
  "key36": "22gpXBccdTBaQChsLBEakttdNbAHVXRjXXuBGyD7D9unnMW42CnVBN6XwBgDKBPRgDedQc98GAomsUqzs9YHfACd",
  "key37": "4xofQhc7vPtUDdhKoCgsuNBNykV4mCcFTcceZq1UWNMXaUCgijXqzd9A6PV6SfK6khdE7xpqXkcSM71nHv4nyQCp",
  "key38": "4N4aQSjm62btuzWakUzWHNJWKsMF8ASt7x5EEKVZWCqj8RX3y9a4abxGD7e2Ksd1YJA3uX2HxwhJLRPPRpXze7CN",
  "key39": "3ApRXmV2ZbAMV9qmSnhec4PCfnMCBTTCNfiN8AWevaM4zyTtauiQ2Pa3S7bYhGLgmVC3iLXDiFSGCip6ad5pd9rL",
  "key40": "22gPdmgRdxWiMQaXiFP3DPmzwzufavyiydY566Ah6wS5T29PGjKavxNmt8wbeDub6iNXkJL25oamyLyjHPK17NxV",
  "key41": "zHAayf6JYHDRnSZvLnFb6L1JTQc5uycLf5W7FfCFHmbJQYA4PKP3gw87BUHSjyYRfjgNWqTjeZXomTtvFZFkiTS",
  "key42": "3PfyBMcTrAuev49Y5b6k8kDY12wkUgFrePWQaPaKFqkWX4PbNydS478dz51uNeyyzXKYSSdXht3GQywtHsLY3Y26",
  "key43": "2xLH21EgbndXCSGW5v3BrLtjPCSe3sYuLSZkR4o6DKRUP31n7yDEA249XJGMRKweWGopepQysNiXV2UzKJVdpTrf",
  "key44": "cV2oU4WCVxdVQKGcji8McPUbxf5D4EHA3a1XJe9V3wZnVMzcHJg1HCCoHBRhoc4qL8NNvoKD7wZ3T1ZAHUJA8uu",
  "key45": "2UuNVT8B1fFQpvBDQEJTgb4Kn844fDH952srKr8zxuFrt6ayA7kWJzBHdRAKDZzbbmy2aTK35KoLnX8vCS7Ymb1J",
  "key46": "4Wc3JbkKEvT7uB98NC6BDAr7K4fnRxh2YWgnZYH5NyX7xqw1f8oAMysvooj8wJmbMEjrgq8sMRFettAnb27sPsXV",
  "key47": "FdSbSPJJnyGtRod5v88BLQQWtSUCv7mbnJaB2X6khsHAg37QcQ2jAysU5nDKFquQyoR5PGnXXj4EbwVgWXFvEVv"
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
