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
    "4KWY2dUGbEDTNxPz4CJcjmwsZKCpAtWG8q9hqkERt3onMDWULMQtkerCt4CqtpwYiKdW1GQNyspFCYsFoPZwcfVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m9CPpVgkVCTn9BcGQJPEXdWrCagVTknVywYqKCsykgPbW7BmM6u9V2LjfbS9m88oC2P1K1oezuckwDUW8qqShqK",
  "key1": "2ANz2XqQEYWruRnWb4vZSt8FxdFrvCqrkXbgpME3hNLdZLwPjfRs6KGLwYSvyt36khjyjG5w1Hy7CyKB9Xv5x1xf",
  "key2": "4V6y6LJsy3UPaLtskpujg98pfGsfzEgpY73E5aRRg7xEv26EAxycw8x9nFqpuGZhb1eaFUycJ2227kSUSumMqcoS",
  "key3": "CevNZuodPUtaDMogh6hGGZx4hG3ZxQmzeXhxmG6Vyv5zXQRFZAh89MMZN6KuH3MKShipNESwQtE8kUEQdiXKLvg",
  "key4": "4mitt5dWVkgLa63hgkXdhx5uELpah5D19D2rziQyyBzeoyhiRDcP3D6sV59uyC66cyq72qhS5MgKekwhmFZbY2aP",
  "key5": "4qCykBCLazTUcpAsFYoT8WamZTxpj3uKgiJgWMVrtEM2aoQHjCgTFk7iCHKcraK1YWwSbLYXrRXKLbZmLN5LRKKa",
  "key6": "2yUx9BtfsNB8yXQ7odFc9dW4HHRh37Ptxb3bXXiaUgVdAHpRT7dypRtG4GGEx4J56k5z6P3LPctx8qu3fTxJfxND",
  "key7": "3Ywe1dYKEmxUFTJkff5okLiroQAjZX7uhgk7yppeoLFiPJcM6rhLXnp1WUq14VV9xaWyndm5fyGDxcw34pb66FTn",
  "key8": "2dn2n5khX9peF3ttJU9aKBuJuEYD2mcWJn2TEBZqzHZ98G2husHcVPsnSnbqszgms6C8xTYyZJk5YEgsrAYT8LX2",
  "key9": "2G8QH2qcu3exYU4Fv484YkBnnfJCyqoJrUEEhR5y5rkNoj9XuY6osvkDNLN1ohvzTdD8yjNNyvUPK49uP4pFhecw",
  "key10": "Yj1WHJ3enwyXf3JjkJmd8UcXPHQJZkufxcFJenLFsc6siENbPTPxcaQkwGbUymzRGJdYe34YeF2rReBVtgHsqtZ",
  "key11": "2CJmRdRzdghBvUstG7869SJskUAToc2DHe5CgBj2e4jwShGfT1BFBeqgPBVQHM6JZK1P1GD9rJPva5iPtVL6xPYC",
  "key12": "63mZoR7XN5ajizhQhHVRzXLZKA4TmsJgJssmHNPzTzsLk3U844AdXCyBUAu8vw4PNMdhWEk1JLP48PQPkQCLi4NY",
  "key13": "21YBLnHPhCCCy83JmgfqZUydKUxiKkodMkt8wYGLc8p2HDjZEsMQwMrStQNwncmfaFFq1qoPRuV5x5d2Bz9fgi32",
  "key14": "4Tr9zRZN5BmCZYCpViGH6XpSqhNDRnzyBjQ2ejeomEx567orYKPeFke2z9PzbYsNEHSHKYNkaoj9Z29aBBwuN3PG",
  "key15": "4S6eZ4eTNs1bCX59fTyTkcVUyK6qpMMvJpem9WSHWZ3PBKHWcpyL4QZ7vnYpvjDXcLFqxSk8eP9NsPpvfdyfBYiK",
  "key16": "4sZwBdmivevmWMSxzGtMcCWLng9qZwSQnJjmoAjiBTMrxXh8sjkaMMhH6sELQDVKqWfDMoaxYWeZdtWzaH7PChzV",
  "key17": "3LUcA64KcmqacAWA35RQ7RVseinkpJYCgYafaV4Mv5cVCcJ5sZSeKpree6n7azvQBqwSbgiUpXKwDjQovRhx2eAk",
  "key18": "5URsbcavzr9h6Tug12V9s2Qxhme7wEa9yWB3vjQd9RkXP15WMpnur1ZKkuXxo6QgNrDw6kBwV1gf43x7xYJ8TkcQ",
  "key19": "4m5WGbiEMDWtUkNNDqSALxEBHtXi18EERwDu4LBzJeceAzuw73o2vVTBaTMVkGXgr64osBAB37rckH3F8V2WZvg5",
  "key20": "3n7JzVL7J1nRJrrPHU4hDr8SoswLCDX9KtKBFHhbHL7P69hBMjjxMXFyCPvcNPu6s6BhwnT2WZQQ1U3C1XTx1RGV",
  "key21": "27yzhzmrzAMsVa9k4g2W1ofjaF5esd9Dyyi4bHJ152pZcNZMp8i9HVdXwtxwz9DQ3Ku48NPuGY9771P11m4oqDsE",
  "key22": "3wfoYTpeMfB9xvYTAWPkkyQhCnaP6THPh1DGs5u6sHKsHKAXx5A5JzoBTtApuHyQw44MLbaKTf9WXjGxZBfzv3vu",
  "key23": "5Fe1TzquepL8FkVa9FA9pz1ykk96p9cHn2nNxzCwuoP1Dxr1QMREmuLVoU1JMCaqD8uY5VWodGLPdzz4PupJpM68",
  "key24": "4ZP7HDaXi9ZSppAdWuzWLGE6KX1A4gMRQSa5dVYApgAC1ExJyW6deLmCon5kEbkvN72eakixzTay8ugzaMM6pA9A",
  "key25": "b7MCUiB6FTVnQsQY9BJWt53nDZEYZwK8Vx5jFk3UvLWBkNpFBDMpqJPyfezreBsh6WkcZM8Zr8SZpLLWCZHjvyR",
  "key26": "36zq5co5PnvdXp2YDevCuZfCaUCPRMGZzrVdc353Gfxz8S5eSyFy3qW2DYBfaqDLyXukdWhKXzEDDjQKEfsCCJkU",
  "key27": "4VFuLGeJ4GLavhSxdLpKiEhE1rhMQcoLyDTKr5py7AS2gZ5NhqbFHJpPdvA4FNdaF6n6RXmSrtoTm1ugSD6zSkLy",
  "key28": "p9qL8W37i3ykGbMR98JFLeEjRFNwzsYaTPvzK43zPzUhwDoq4qzuKZZbhW8WpU8M7vt8JFf7CxVh567BoRc9DM6",
  "key29": "2eYNywG4wkGpH92onbNsv4fibveeWMjhhuLa1nxBhSiEMdzqKycHsVXrdCYpWXzGLE6xjuqZztgz1zMDJBvgiGbK",
  "key30": "3TXDDHdLwGbUUzw2bjAd1BwqNDuoF9YkaAziHTrHAErZ3D6RpAGwQY9krqBkUKwGmHupGBKdQnhzGZeDGz8sf9GB",
  "key31": "57eb9Gjz7GSYbYsyWZExkY7ZExRiyyRog4quswJZJwhfNQiaCrNjntcJSrBPcEPXTthuZdzmSoyZEG7u8zv6Ge3J",
  "key32": "5oGWE6dVsoSmPN12FPWCyn3ogTeEFhJDaakC82hgc8xeydMYuhGZFfWEr3EabQQiY1echUUZgBDgPLVb48msQpya",
  "key33": "2KKGmuaiD4LL3dDM7F6v8HP9JVKWgiPc4vt43Z5oWuRYMwri1biTMVzCUmRMSGNg8RzXZeubtS8STL8nqW64v9op",
  "key34": "35SdYCnY3oqRWuoBxCWwnCktysTLHya8W6mGqRhKioMxuGPmpi5t1eN98fiDYU7CQZ78uMXrbcRxVsXMHDesc5GJ",
  "key35": "3b7Lwbx67ycDcTLXvtxmuJr3XaYafUPLJhFQR3vUT8Be4f5h9xKqf7vsdcXrK36Rq42DyatuP2ucdv4BmA3HXrTm",
  "key36": "SZVHN3iDg2hntsfAGQVcRfLheb4KcdzU6gQXpTz4cYr7rBqFqmSkSKR3xDGoN1pnG4C7ycwFgvLdySbnkmDVksV",
  "key37": "3AxzFywizJcgTpDvW8upvDNyEX4pxumUVBz4NboXoPpB4JJNU2o82pfXUSzcs6VaNpyTz7FKLV6XvLqTd1R18b46",
  "key38": "3DV8oivmTx2e1VwFWyqUv5U2nueiGxmbH5WRkACqz3BcZK4k6eWHap2JmBcfXhGjgv6NHmSfuzmPpGKqx4nN94Mt",
  "key39": "5XdMLagDV91fHT6EVSupTrbBMAMAAVNxxSQVN2MgfZcUxG3carvQxmrkKyRZN1ZThJASKDPadJMAaiM3KjcdB87",
  "key40": "3wE2T2vfK9fqXLrWWnmysTcBs3JDedMZF5zpSXheWhmgEtd1tgJq2ibYzTYP6aSoP3fJkV3qFcJKKXxxVTaJtqLC",
  "key41": "3B5yvExdQoEhTrQLXWnxV1kUhpwfKJuR7kCsZVY8KTbNKPRYsrrwotzGWim3zeMgno6LsqGJGU4pMKPetXFwbNd1",
  "key42": "a73SjSZmYtJfm3hBXQgZikCX51L6HUeQ5hHAyMBYmHc733oVVGDznnh9R6CRnJJVRRJqbqBeyEHEsSgnzq77Som",
  "key43": "Xrt3VpjfX5Vv4UpCv6U9XS2kC67JNZATdfKHSvZ6UrJCt7SixfRJeabYQ94cHdqfe84o66wvQKusowgxhK8byT1",
  "key44": "5vWdKLRMvLQ3NTVrYXPCZNuFtTUYukwCJiBdDaGGFFVjyWk92wMJhhA4G2qsSfmDngde2XN2UgNSyHd9BE6R6ndT",
  "key45": "udqU9hkxtA2ix8QotTqcPAYk6Nvk5CrvFbqjmuXEMQTRcCoPVfcQY3uKtqCjogYjkBukbrXSj6i7AbkhYBCs5Ce",
  "key46": "43Fqzinf4fZfQ6nrhRf9YFjXYt69Y2woZV9mJQwEgw3UH5n4JSK3veunNLNxjihHPW4hShpbUNwdKHuyMTiAS1gw",
  "key47": "4FypeTxqLTksfLKyvmqJ9UbRC3utkA6Z5o4o3hwcfGyPrxJv6sUkzZbractSaiXoYghfCL477nUUvFQZdMyx39hW",
  "key48": "2VZPJpNzUAdqvuLZGhHmayDx5jbeyApf3P1YgQZfVG3V1YUC1XacLrHsYUEc3XwRPNnWSb6eF4c8nor5EpzwsoaR"
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
