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
    "2HsVKe6edwhns5kiVNBV7LduV2j58QCsV8UiBAABXtMSHKmN5xm9GBECxQ57PCKnvjSQexB7yQHA5KXKAPwor5Dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54M9upohW9ret9WJ4v6e1FGr9jRg5wwpmHWxLGPb278jX9La5KNGsXMgjnVeiJWzU513Dme1Dit5zDija61NxuVz",
  "key1": "ivTkeLMS9i7BdUXLPxpYpYQcz9U3x1mitT6RLsyQXxBiWBFUhqYoDzZPmi75FCqN5EzZndJDYfr9nfv6k1Jdmcn",
  "key2": "2C49MmZAkCNxTVpzxixMRfE79dkmv7vmtk5Az5NyRbDdciPoCH1FsZRiA2Y71Rooeerc6GK2r1CtJLfucucSy9X1",
  "key3": "3mZh9DJERRhuqMnAETJDGW3w8gVk3qUy1No2CwVsQW2RoBRfDf1D3hbsUbhuyQubvaZg6MU9m4tSg9wcK4dZ4uYK",
  "key4": "3FcVhNPRmWPRXo4jnMtFwx8vumvzqSHbLGernbfSwsnYYraXgJFycxNAZGfWwh5Nhdt9ws1vEAxafLaKzqG1V4tU",
  "key5": "3ksEnpxSjW3H5vcGSgYpnsSS9SGB6TCYaciQFpkArDb42CM1Dic5tzzDSp7Lam8JU2gwezDBe1c9n6VpmGXTjHmv",
  "key6": "2Dp7nSiNbm3KS4LAMWxCawNtFSd3BhyBQuB46TWhT1C77Ee7NiKyWB85Jhh5VVuqY6rzwNnofWzH5RBqNYjVuzfe",
  "key7": "2L2AyzSMFqgNTamYrZP8ch17wEvQ17HPKcKUDx39c4Eh2y4pThxw9RBJGA2WVSxgoaxMX1Zi3fjVXfnHUiHta8i",
  "key8": "2Ubpm1rRw8incdTKX25Epv2T7FQzZhPhALp8VP7MHzZKm97kNdn9PFw2DP4kiUupBTnxRYiLtH7RptENZ37W5tjR",
  "key9": "5ddfz3n57XbvYzE3fGXMCRpH2YfoKALbG8M6iezyrMExu7ia156xuVCPTcpQGCbnv1442H8914QmeCHD4oUwVXSu",
  "key10": "E6PN1JvB2nm4zJui1QT5fzj2kQkFBRbsgpG4tYRMxSMDyX1xf4aUZ4UxPkrqwQ5Xz3CTqBYQQpvarrYkALEfB39",
  "key11": "332Lk8D5iy2jJSYVuspL4bTfwsup44DofNz67HnYxB7wnjnPdnAU1LTY9JAzvX4vDAr4UCSJkRui3Be8PeTf7YRN",
  "key12": "4rsM1PPxg6ZJGcDzxiKRZrVDqF9BpkRn2Wt43Fcunzvig4YAQgeKvwtGpBW6tZQV9S5WUoSR7PkqPX1GJMYAUT6H",
  "key13": "Z9zWM5kqYapWrSwEVY8HwJFhqCpTfVoem5zgKqpiud3osUV4Lcezmu39YvSDcMqugMJ6pwv52h8EdhSbSbbiCCE",
  "key14": "5VsasWDURa32aVJEBHYq6RPpvTv5stc1VEis7tkF6qWsvcmdS3MWn81gTzJdS4NAzVL3zNzsxYQbBnaawEysfyvS",
  "key15": "5GGi4oty4rNt7Lnh12x8Rw5zrnUSHSFokWuFmgyPKBr49Rnj1m55YydYc2HR6pLw2hCUhVV1LMLnH9KmGhmiXKnb",
  "key16": "viQtqi1prqewkDnkBLviUcGzQNmY3zTQvpSr2ssF7XtFdS4CczA8pDm64df8H15p36uzagGmbCYTEc47nEFioeL",
  "key17": "dyKyJsrhDwMo95Z6Lc1jiJZqN4ToDJAjp5PAXTGqwztksY9kKFncx2yPfxYVQ9SzjKZNffS4jBENjgAdRLFxR7b",
  "key18": "4tiCuQvELv1FVCZ5A16G11e6JggQ3P1LQ88JSqtHhtRLG6TU15LXAheeQMfAGWbmChoKzKknG1egoHhJcGBEaZCi",
  "key19": "2k4XstJbpyKGKhu4J7R3myMfC24x5ccz3ys647HUY1gPZ6MguuDzhFZPsiAoDApWwwHUMDTiMKHZPTuLqGteAyUy",
  "key20": "32DiGfJJ73xvwFjwAXod6rgZNeJob9pfx2WdQ6Gjkp578KgvY8NKLQ1CAaThoGU78V56V9GwoRx9T4NwWTymcPC3",
  "key21": "5nLfBDv388pQxWN7c56Bhjc6rTfUyPNr9Fo1SrH1k5RVipovw8TYBpKaQxzvX8rUFPp3rjV2eEGYQ7FasVa5xibj",
  "key22": "52vefukTXDa5LSFF2ar6GY9ro3zgLS4m288mdVeujoqUvuHqppDpAvXfT2UJvCo9R9fuP44zB2eZReyTeCGQdvKv",
  "key23": "4mGBMTAWo1T539DXvCLRjRLBvmQa5PCK8AdPn97gsTpEsmWFiZ5EuRX2ZKMwwFRWtMM8mHi3yARnvV5W9xLwixe5",
  "key24": "2mumZ5wi8Ge5CXGhvStAwG5SbBa5hjywVNtzkBYBfFiMTDuHHrL7o9qZFKk3ViNtgMNWgSHYUGZUszeorP3THQSt",
  "key25": "3DirtwMddPHWNz5xyDSJxQG9eD9W4jkP8S2GpZgv9M58QCrFMYZd4tLFnnwrTnM5rf8ce69fYoKKEcDHpHc9sB1X",
  "key26": "3th6wbPpLLgxSrnjcmp4eERXdgSWUrLY8NQGxxnRiEnMxjBnBFpU4pBit4WCzYYhHzhQNF64YSE4N2GRYYVVUiYg",
  "key27": "475rEPVSRQbL6JrHg8esTJEuhwQWXHjYiZfcQfESSRBRCTN9Rj4FcUeYVigbJQR4sn9qJSjSqL1k3gc4ATKNSARp",
  "key28": "5npZeS4bvy9GyLuRJeupad3v2wU94TChzeyVzTctXbDqFx3EqRCjFQkZBcHNJESfY7bNZt42FWTRH8ZkpmtfnNSD",
  "key29": "3F9G7MX6wiMdiTp4TUm7A7ran66aAveJk9W3tUiz4WPBzALzX3aGQ97xRDHXXSrouAhxYWhqH4eErt4af1ThsJGL",
  "key30": "nPp6DBaTXEtYG4jmWSq8QTsNjgczG3rzrUV3rPg7av3eK3uTouTrzy9bBAwxJUkJED9bqncY825HhxiWGanzNQZ",
  "key31": "2ow3FVMxuG3dgnYRGA65PvdN89grBuh5fVDiY5jYUB6evjRQ4vVGm4rTpLZL7J3yu1Wd9RaRrmNuKCYsg4g9XcUd",
  "key32": "54FPhyxY2roP3AKnZqEVkU6eV6o4CFXj4SDcLqDqais65KyXGXsVQn9Uw8VEEGDmYnwAwZszV1iRSq5wUwNHEzwY",
  "key33": "5j5j2uLW8GnGLY2xjz9qTj9TWo5ds6Na7cHzjLTfoZ2CWQPG2zxbVcdxpdxoWNrjY1C2Qf34AmRBQrwbRSoCHoJm",
  "key34": "3UrUtEiAL3Lr1b9JzN7UhYdHUwB2Wi7Sf8kTSJovyThpyN4W67Jyno9pXHckFPZeaP2bqA2bJeVvqtbBdGgUH8j1",
  "key35": "2hNYjiK1c1hZ9PpLdrXUAM2VQBKNUxtsBviAuiMXCouP2f8NewQ6yjvf5e3j16HK7kEnz6UzAG5RT7ugPWtaG2n8",
  "key36": "2LxkyLBZWUKHAYoGrzrKutCznnm3nJRpC3GmMEKgV9fYqxWJkJrwaXbYrneVuuHQ1ZDd1TY6ucZqou4L2qR7kE6d",
  "key37": "4QtnqCjLfkVzZxMVH55UsCSZL2VqiVqXgp8vwpqiJpfyGiNqyPRpp2RF8tAj5CGFzHjdNP5oNGiNLeE6QzsEzaDV",
  "key38": "PKLiHeN69tSAHxaMZy7yxe7xJEpnfpaxyZkyx48bn8KZzbx9VS2Xv3aTF2xx9pUQFPsmhy4VFRNWHcqwLciWWU5",
  "key39": "5BrwjZtTBrpL5i4pyr8WH1HuJqEzKSibLZymNG6wVzhE8k49rJ1iTpDoqu7YcWtU7kP6nGnJuEeRiVcMN42hfsJP",
  "key40": "3Z1bVKRurGt4zHYuXwB2kPPreqrjiMQsgyA9wFaz25HP159BgkVzmQoYJthvRJCPGc346Wn2kMWV2UCYrXm3LRwo",
  "key41": "3xMXycHob8YcHKY7Nk35szddUfR2hT78kXkHAa1My9EToEykusXCpcG8G7i8M6wgqh2vk3xezERcnDpCHda7DKx7",
  "key42": "3Xw96iU5o2zF1y4ctE146sRRrP6sQCrwJbvws3fuRuK9GyRGPjCM5HmNbj7TbbPebMyZ9comgajLHqMeAwUvTEWM",
  "key43": "15DkU8j8uQ9wVUVweWi7UsTtVJkvMdu3JWJGTCKvxcAfnpKwPgkFqu2vbWtSCRDA1uFBQqn6yjJaRsDokAxfBj6",
  "key44": "2LvwJYHND7cqJCiMkqTHKekx5ccUpmp67ZBvUDHSjs9BXPN4AhZdqvtfu19hLQ1dgtApkg4ACMGqk46B2iJCYShz",
  "key45": "w3qwPcbRpPgYGmdnH4Ymkj5GNqizwHWjdN8BTMWizi4fpyUV7mh8cAAwaxDJsZqG89sd6Rojo3xryXYAWWFPm4m",
  "key46": "sMhFsoMkoZUvMPXyLxTXLQCUh1ABZeHy2oWGttMukBfkjicdRm3oLqyNUyWkn3PNM8bkYTCJxnbSaC2v5u4E5Bx",
  "key47": "5Y92wCu4V1o9e24RgPHNio9xVGCsacV1ewaY2qdvBfCHg9s9QLv5YjwXJ84rR7y58n9eHQhZdvjCDWsWT7uvr4Pu",
  "key48": "5xWgAX1y4UnkR6fZF3xdUbzTLx5rqWLvkhrrAzH7dE3xMrsmwgTwGmg1feWSVmVbqaEhYVoDBz7JbVnwarM8iCEx",
  "key49": "4f6QrQZvHacYYy4Q2RnMTb7uBVp2scpeu2ayiasKJ5uoJMxanecF6KfLDHBvgiKWsAFi1NCpuU3DvccxwtD25pYr"
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
