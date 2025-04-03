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
    "5G8tfSBwr2wMW7A7zWGfbkd4bELDp3oSixYKjDqRoifaFLsVRRsbkNGHpMJxcn1hF4HietGY2CuCGpBxmh3xeyZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34A8XVrSBk4iw9zCVkydyDwbdGGpRvGH4FE7R9wuggEhX5znCPesCCQz54dBcdBXKBvUHR6BybfVj4cLEMmZHK5a",
  "key1": "5eDrD5kigYbdnjzD7KWttEAWgABHiPmWk19QjUFR56pa8iAeMiGXtPDENS4VGxCn8Su6a8T8pce2ux5pXg6QzcKA",
  "key2": "5JNv9M7Zt2u8uVPEPuVPhyryjPtN4CDALH3sRPYw3CutbDsrz5hJEzgHQXPm8ew7Dgy2KBrMC3JywiPi9KardqWf",
  "key3": "65Jwn2knVC7cv6aeyGtLWhEh8Rc4SGNFsRbWuKprLPDsMhqrKMJ7jxCU77uZgAZeFYTdNWtHmFqpXshnHSK1fTBn",
  "key4": "5RPnPtEXUkUGA8VHnQRkQmBJxecoXNLYytniRNz2Esi2XGWzets3vuGhXh1edRrgusbBhafjnrkicrvzGYsjdZ6E",
  "key5": "5Dx7xWihWuHuzEpND7Pku7MuRSgWVTSHmTkhhT14BoBbyiDvGJR8vxtACrh4rrcXya9qaZp8JwBSofBoxETFrKNV",
  "key6": "4btJKoENsNyN5w2YPz5QVQLw8DxgBGciBXCN4PVnrH7jBXthBR86D82mJrHfeo1Gvp5vMNmrZdbNGuhJh1a4YhHE",
  "key7": "4uy6Fy7JuUH25Do4bTvepRYh3NXTzp4oFJ2PbsjC3xd4VnAuDyVX9ohXvTvqRER9nhEbGJagnPyvfHvkRxptW23Y",
  "key8": "4RmnJc9UutPi8ebV8CejxR5rzdiPJnvEh9o2biutv4rCv8PZFs77kRZwrbX1EzvSM5eHTjGQfvdG8MGyQGbexiYi",
  "key9": "5mFutSU5HGBTKAVNUqWbjhq391fy5hk2Ek9YLiiLTCPNzpXNgrBJzCoquSpgGmeccgcFyfvJNmaDKcPSipZL6Hqu",
  "key10": "5XhQooV2fEbV2KX45XPjSDf2NARNTJNrknAAjUqHTmuihJPsP6CnoKeutVHuSRSUMNXsgvXshcHGV9S6Ahz8me6Y",
  "key11": "3MXgrFyawMsU7JPa8RgH9pReKboZ3GVinQMbmq6pUjToMLJ366mpGd2hoGXyghj3H98hF2TxnvoNRX4dJjy8Yr7u",
  "key12": "MDW8EKsHRa3Af2cHWETHsDnEkpKiz3EVLyz6yErZgSuLuErJFGt5cCoHxrTZr27HpYixy9fC4ZHzWXCP7Szqbq7",
  "key13": "4LwrFrt8xj2oRpF6AF1hvPACb38sxB3guCphe6yfA2HtZ1hpzLWYTxYyF3ZMcgJtQTt6p3TUFoqsYUGRofmb5BrL",
  "key14": "3PuKBvfVnLHzHACuV48PpzEqpX2R7a7fERhzDvdwm93L1fusmCtUyjdR9HgeUtQCNNzirJgp9ZsxehzsXDEKHZmD",
  "key15": "4pQj1L9foaRn9KHkprXvWpVcxbTamRvZXKMPAAqr78cKeykezpfjDGbiHfB1uiEAGeYx4Z9uTsa5h11URMBeKFP7",
  "key16": "4zm26mCyNtoqbS3Ao7chSKxF9QikVeh121YtUdf5jiXvq1ndRBiMc1BJsFdrCMm2sTRAFS7a7h7pLcAYU62oqswh",
  "key17": "4qze94czLHaojXgMRLE2onoJ5X7MVLSvcWSdouScHroohiA4k6LCL99iQCdChEodkg19XAbikzEy7xK96DoWLMbv",
  "key18": "2WsyEvJUqrxg1QUdCZnwvrDHXzZT9JafH1DqdrBoZijkzwpC9sF8SN9aZVsuKMPwmXSSGnDAPYTBwXe7HKF6Ck4d",
  "key19": "bixCeQwMSAu99pFCYKWpASWGkwyBoK9F1hSqqjG5DbjBGnwpaUKvKZCSGLAzSLafgVQxmNNoj7C6qGvT3Rirs9D",
  "key20": "22GoFZLLdewsTUs3PVxuxHJ5NPw3w7W4ncgTWGVN2D8Ry7fLDxA7B8wRS3eQut9WgfoKEdKFMWbHArNtfgZzEZdf",
  "key21": "56jPXHvsL66LhcSuaXotFE9ZfKiMBgphHt23Uh9rrreXLqSiNQLXm7Dwvgq8jhv8NspCsxi5TrUTQFz34h1QNH96",
  "key22": "K5znh9YtuJjzzeuS1Ei1rKkMGewcsDDc8XHaKMQoNzDzgadDhaajsky1ajcQK4o6hQ3Bnx6QtXJaS9SBPEh9fuS",
  "key23": "4eSKHUDYgYZvBYQPkbCUpAi5toPFqKSKhghgHCMqgz8qRHUNuR1o4DjzqghNyYyZBHViWLPosmJC79pzuJKSRK6W",
  "key24": "GcNR7yohP5mHhtNdeSdxYumJVniKm9NZYUUCcmYNjs521zQY8fc8qdNtbhyvDBDGtya96MuVmP4A9cvsJRdZsLm",
  "key25": "33zR3jZt8yiDeZ37Xfi28id122uKQorjbj15ozWEC9nb5pnUeZWtNQy52YnkGxMRjmvin73M9MZdqrv3xxicj4Cd",
  "key26": "4XgKFDKKyqJVWkvYrAbBBJPdkJfs7XNiHBrr8Fzp5VuXn5NRwf8nGWVKo1qVeyJwNWq1gkLgSbhje9tMho3KSaRr",
  "key27": "2ZHTt5W1zLPT5fjTXrvpyo7XwZdLWquUi65TbUY3Ad6hikzLk1xoUcdZX8UCZ9pFFvAQjSbhPQThmWimSbXqrt2N",
  "key28": "4UnVHsuKYhZ9GTrSEqFhAhpA2rk2Bc3s3y2khJhyodPz7ruVFgACBEp3F4PNqZXjyHAp7X9b7H1sJrRiAevn1Rfs",
  "key29": "3E9PohvqvigiumdyrBgwXaG11zDqVRb9Bxrr2oVZtYG3PeVQHVH9tP36jbxTk3SKXj4ZavCis2nYK747y9nXp9Tc",
  "key30": "55DnkcogZDDf8s6fqozH6Ns1XER7FVENx9wrTEXBXY5CJf4xXHVUFA4HsoYr9nC8dFbsMH4PXMoBXaPG6Akg2YBR",
  "key31": "4DS2ycFMfJhb9pdJvmouB2n8r5TszNaowe5ADD3u69CjYarr9MG3VXbq6KzHxy8xxa5CegxB5tJrXq2zaNbMNyL9",
  "key32": "33cYcJpgACDcsKUzgAcZ2y1wYETTo1GTXkBat28Va8UKMHd26Y5jZ1rs4WH2fvmsZjX9zzDF2CkqtrgNQfisgHcS",
  "key33": "3VWG3j7E8e1ySxZuAmqP9tTYDWHzBTPhPoxTAukTyqTWnR4BUz9sZQKXPvNV4VUEoghxCM1YcbycdSHywCyLGyqW",
  "key34": "48XASUWDC6Rkw2cmHK2mTRD3jkv3jz7nzZUCRW6VfcJkxJfAG697Phz4dcYVL9wQjtdcMPvLm5p8m4GqpfePaA3g",
  "key35": "4BEomY2RayvMycmYQdSa7s93ocSZAQqM2myiPZUGKe2uWhmPVPeK4fuhR2KiMix2FcTeESkHkTvdqE6rRKELNAcm",
  "key36": "3sgxJVcUZew9TVeYx2RTm3xQWrZcfwH9YwFjcvdnqufKqYnUMUDx8U1bC83rhh4wuU7Fx3zz8KRcQgkrZdCx66Si",
  "key37": "4dGDhfAv73PVabEzZnUQvqLE5u7UNbBAnJNroU5Wt8Hpgos3cGufe1jEo5T32e6rsLkVmsupW67SZmaF8kH17TCt",
  "key38": "3HU4WBfYetSx2ErpDCq6GLkQp2y19wvDfrT2DfjWACkeDj36SBdo46Hh2DUGZGQDkwzwCakdZtepnxBzLzmpFCCb",
  "key39": "4irbhrjqUMTbn5bZ5tYovu7nKCSVLRrtf9S4nB1XDSmHGbreTa7N2UCpuG2yzjwPqDa5ERc4by6BuJJZWg7PSNtb",
  "key40": "5NHqezdh3CVz88mvratk572bRNfNrysEcz6bZdomYrNArxyaKiaSDyUYeHTr485HD61PZ8bg9PVZZmB9j2xq6dnW",
  "key41": "3ZG14xrzzvVS53EssTwXXfNUjMoP19pWPZdJyTfN7kfij2J5DJXJ8mHhYXRBsJQDW9FSMQb7vtydndxjyzvwp5ZD",
  "key42": "UWMQLPQT64TMFE8phbQjY5zFaiiAyBjFM6fXt4Ubu6qhXtSGaNohZqdRtmaFA51SwkMbvKqiZpv39P6aUs1EkF9",
  "key43": "4KJoyx9Azcju9aUXwPjpyWAiVt7TEcXrsVMbRyFvJEPofmbkFqc2rXV6Kz38zG5JXSrfbqogPEfeNPxLarhhF2fJ",
  "key44": "4RmuCX5KheuNdRtiRtu3UbiWgJUpmUUntBKyhdVHH4zEPgryGJ4atYoFx36HWjNUkKxTtCQeyqCujAL6T7BVcC6w",
  "key45": "4i21SmhCoyqvq6rVX5abhuz2PZxFMw6DKm92keUyeDbjy7oYUPLruYqXhFTUZbFUoBRZCGvGrk3KDziCWC7aLa9H",
  "key46": "5rpMGGxvF3UZ2UsRFDPzPT5P77FTdBCPDZYkY3thpGHHFegS8bD8eTzHPhHE891JW9aecomykrmxZvTEFE3YpHn2",
  "key47": "2QE1tTYem7oPWid8zthghB38g9DFGkW6FaqnMqzu3RhRuVYcYWWBtQqZsPbjp43VW93TP9cRbdX79CDz9UHMXzid"
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
