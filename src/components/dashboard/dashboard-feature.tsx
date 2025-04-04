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
    "4mxQijQj1RgbLYUj9DxzVqxX8MTD74JVTvBFwC7XXFwZLSxFC5MYj5BSDdxrTdVfvyMiau7YCDiXutCgwZH2q9pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z38TtEPHtHnCjqVvdU5QouLmBM2jCNXPsxutsuCV7mhxByGCYXgWKWwmHbPj2gm2W7gPCu3SuXnckukQyZxS2P6",
  "key1": "2eBck5mZh4aF6zSFqFfPtpnZHs7vVkjGgHpKWRDpGsXGKY9HgDbHEsP3cRaiejcFCu4spTs7qLcu32N3C29VBHND",
  "key2": "5Jb34xhagMRHGuy1ZnKEAHCXJNL57AmVsfK31LCKZGY1cwhJgUrm9gxLxkQ1Egb6Ztx1Sobfk3wwpTpb2wn8i2b7",
  "key3": "ADqEfJ7RMdacsBi3k5DvCwpveeQ8TYSP8F1xm7iRR3u3e11zkqnfkPrC6ZoeGKeddzVdoDu52Z1ESANk57caNNT",
  "key4": "3no1X4J2TZwyYbR7qetEL976yGudB1AS3XiSqcViwJfP2HUwJrqqLcrSPtxuVYpqVXGzPB2MTehd1dAmNEH6JqyZ",
  "key5": "jq6jKR4LhT8wv7MdzVLpQYnJ2F92HVk3ukZmgkY9UqfRmhC3JZ4esg4WHSKSdATBz69HW1ayQfh3TPZ85y1vv7c",
  "key6": "3ngwCaEDdp6K9m9EkfwvtEm5YKSkhJQbvoSgtaxzaKMBQzinpMFFix2Kmfe2fao7yfZgXJUpHasio9ymrsAeGXgp",
  "key7": "Wkruu5vUQ4CQq8WSL9bdrPSsxRyWCRFbVy62dCkrLiznmGGdSDnzCXBFzWWHFyDoDAfgNCcvHUjKbfczTs9fRpa",
  "key8": "HvRP3vU5TNZovmKQrA5PqoREvdtEcrhTYdMXmSFmeWNgYKMVZ955Ac6dSPETWGMFsXGjtv7cpqTZ3beSrsFpShh",
  "key9": "3BX1bqTod4Ek2K4gfJbQyu4pBTF4od1upzmBM6X24rUFebgfWnBXt4aQHNGoYNdsZRECV4ZjwVSqRThu4zYJkys",
  "key10": "2CaPPLQ4TU2nuN5b2zXjTi9riUxUkuMzf5n2XzrSiuU4FaBKqutry9cFZ14abGhSqZFUBUix2XUgaLGz7kxzBvsH",
  "key11": "vM2jzwCes63htvv9WoGm89C1Fxd6hZ4e2wgKh2QkVq6Gp9KgDUUcRXHyCvz2CPP73MzEserhhhJb8yfbfzbJMUP",
  "key12": "2rp2Rcq7m2an442URaBzJacRiotrHrYYhE9gJUL4uaL1D51jS39HwF35ergUQWjhfF1A8ndbG1bsJzcdz3BxcBta",
  "key13": "3PTuHTTt7e9Wq2Xbd7yj21BxeTTex5n9ModrBQAv9QcHdQMkjmqtz21UU2jbaTfNySPrp8aGb5E54xpZ8UcMEPEp",
  "key14": "5FJvuTZi8hLN4ZyvKLJRAGvfytat2oe9ce96qh96gmFeoze5dDgBi1XLRVNdy3MnTZTu8s2M7ZNrjL75DTtexJtM",
  "key15": "4Gc8ByqhfNhDapxnoEwf7cHoPJNN1oDSrbCKKUtDjLPHRyzTr7usCu4dUiAWdvBgGbPFTt6r3iP1UWcM9X4Tmwpk",
  "key16": "5iPgUxFhKJ56MPix8hbfFCwPkrKj5WehgrTvSrzTCz4revjBXsWfJovmuux4aq8ckRP7vXsJnCPFLGScWRD4Ub7n",
  "key17": "42BYSrnESRjcxhEpTeyzVvc2koRyjFxaDPvBAY6HoNcGf2Ma7DbeAY9rpmwsWjQDjnoiPZXqKCZGCHnMcAT8YCaU",
  "key18": "3jmtncmk6A1mCQV2nYTodF3paq5RyNdr4wSG6cextmQFXjF7MmdQLxt4EnEKWQ5rzV7tPzWV5XTCiGYhEJGUhkCb",
  "key19": "254yBEyQuBVA9eG8gLcNMyDkbeExoXgfoGd1mLVGDN3zLN2spZa4eeXiG2fMN8eAS6nH3jhEFC8Nq2gJZSywe3wy",
  "key20": "5rrq5o9SJLyntKaVk2V14hS91vzGg2XqR1LuoCtXq5Qvq5riHtSKgbSq9wGHM1N21Lm1ttp4xzCzNW7C711B7M13",
  "key21": "2qCHjL3u2orUG8Kbhuuz9bw29RCyduF4Xh6dVazpL7pZhvoLPUqNuuvM8bWpG6hQpVEoyxE6jprHUyJqfKQHRiuv",
  "key22": "27sPDh7N4HDTTNJiaR3yCbeYw3ZAq4iTRjaEYkWzXJKkjjEPmzvUpz4G92D8rEWKDaSWCbLfuCKtuZXJxc6FsTjA",
  "key23": "ospyWSudMMy5ijrZNKEVJLV5XzwazKnrip4SjPyqGTRCN3iz6oifAeD87ujetqskHxKeXTrDE7YDYW6GzSgbHPs",
  "key24": "3fZJbmokPdXqNCQCtaj3dT9zyEmWCJWoEGKG5j3EFebExWJruEMNEYW8qn9PGURxRnQ3ndoXb5aPScVJ8eiEwhSx",
  "key25": "51XMQVjUmY4tYZj3HrfRQdDcpE7wfPegRpASWqxd2DtEDCQp9yDvFuxxLnYBjqyMYrhzvAASTutiq4N9WfaND7uR",
  "key26": "5sxYaMczATwjks2Bj9SqV4yCfmLuNX5wcmhCYsDrknnDxngiaG5oYAiCygCttP1CckibjvCyNJbHUXCzAd9jG18g",
  "key27": "2BoD9GMby9jinxecR8bEPANYarfyqB75uiZzQM9mm86tzPFXq5W5za5c6MMpBCyVXhdzSgDC21ocXawB2JjiqmDj",
  "key28": "5Tdw77trKt4Sb2JHSdfdjL41b6zusZqtZDSVR6JuMRCxGwUgepct6SwjmQ8GmtVST4n2aha4L6Z4WA7HRgsxuQeQ",
  "key29": "4jzFSF894NLRNNM8NNzZmvxPCVq6US4ZCk4tZ4SCvvLY4LyGeKNEq39ZTLVx7QaEewTTv3jC3UDdwSK791wvpboq",
  "key30": "NLZVdE1MaeQtscSAxz9scYGRAESbXJdsuivwfsvz4dMexspMYhAGMVKEStxq2t6KsysVzFiGpkuq7KnsmcJQ1aK",
  "key31": "329Mo29bKt5rrArp41R4Ni8dCLuTueXnjM4ADmGzYT2TjSf3WEQSGgtGxtGxDspuZDGDZ89Z7V8tFq78oRwH7DqF",
  "key32": "ZH5ZDEFLgy9NxYw6MigyJRjtDvXrofVj3hJ2ehypm86jfLzh51Vyd2cHZPC4oQFktzJnrKQFSkRHhq3zTgBcayV",
  "key33": "4jtYFsTgQ3cU7y1Up99o8jXxUfctGZHsGeJ9ieU9x6rd3sv7HS4pHmLsA5wY4e3mG3zV8fTt9AqBRvTsq2SwvkbD",
  "key34": "xZnovcBoDJssicFoiwe8CKb9conjGem4aWexvAoq3PjMCtE5ph6oQqQxEL2GWdA7zmrgzjDjtTsoCrptfr1z73B",
  "key35": "26xKLrjonaZCuGqTiV1HUYKsCTUCAF2ruM7oayMVE2F26s9nRjQQLA4ttApZPP6Ax8eJsg3T9i8AYxPVoaTNdoGZ",
  "key36": "5mnyfNnTLvvj6SeJXYrYxo4HSugL2S5f7DrpdGWiLBy6Hv3EnXCuvVYpSV3U29YLK6Le4KReid4ZPL5axRH3eDAs",
  "key37": "2D4EoiMJQ7FMiC7ADbNLv4PTNVufzPZuDC2WN4KZDKZx2Pja7ZznixmpYCBuHYncUb9AoprECJqmb44Z7frupNXy",
  "key38": "5mw34qsqqreTjRME41pffswgrvgETJSGZsLdZQazhhumvQiwzEkHnK8wpwT4G48niVDDp4iEVRmQ5x8PXASPPquQ",
  "key39": "hYRLgW7eS9RVDPfCWbgMB7V5peCQejXo9DfsELDEpnanFm69auoQuZRq2oBccApLD7DPMiKrN1DjVN41speGwiJ",
  "key40": "2yY1ZrYtP56vP9BTGPoDGDXjyjKB7mBonPiCaJiyyQx1kDZqCXFSeougq2y63QHYTx9espzjDESmeHGNSbEQ2sht",
  "key41": "KqsrrXk4zuM2mCmosnssLpjuLVi1g8a8NDLgYcAZ1h7S4mW3AkLqrFJRmkC8FseLS768V5Gz183mQqHxp1niFSa"
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
