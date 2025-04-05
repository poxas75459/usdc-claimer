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
    "2A5X1SqyWL85pU3xdqYMWcrLYtDahXG3RFAmm15SD8MacnsozeewmMe1R6NUYBGkLKGiN5z8V71YySeVbcWtyDDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yLmFq5V4sdAz5UXoVdof2DgrHWYEpEKdvXzzb4Jm7eqeUk4jy3W2hUsmQR4hdk7RvxDU22CHhygrbf9koLyPmQu",
  "key1": "U9JrBq7cwq8i7CgkzDkKXtG37vdU1gVWS1tXMKfQpyjNFWLfWLHDufo8gRc4Zk7Zb5NM76LUCDDnSJNuwpS8mbD",
  "key2": "vpMsYeMV7LwTF6bdBMJLNP5Q6vqtnZRu16JuCVyx7iqTePtpTEsJCgMNrAYNRyktVBQM4sYwx81VrS8bfW6r5xm",
  "key3": "YJKx8PRtPJEFjEvSvcjiZNFFBtqdso3C3hH5MHpZdjHYpNu2CMBCnEJrbqTJ57MmxkmDGuRmoGPH5uac4vZBHgi",
  "key4": "3ZAxwS5nxpvreXSceyrp7vDWKsVhpzHmrWgYNYwKQkvVvJ1pnZGV1nRr7okn5qThJxMW2QWAgbCaBHFbgUL65V5i",
  "key5": "45i51pXK6W2QLswbiCgivDB8KkSDsaLQ6zfNckGAhK1Fha3cSgin2D4HhjJoxQ8J2ZmXP6aFkkLH84D64cGNaoN",
  "key6": "3oyq9gLHGTUiDsJSHviRYytFj6Mq5fWrcfQcwH5oR2PirdhRva5Biq8fn1VvtJfoiWXnY98GXat4FXNBdWLFxV3n",
  "key7": "5XVoaMfYgusCTSoTe9yR1dZrYbqDQUCCoWQHND6pQ7GDDbyYZ816KEowXBxnXkMexXhujMgnFQsVs56j6d3qPBgT",
  "key8": "fndh5ggaUNvFkLjPYTheB39BvjCTFErHmwqD8tXGkfqLJBcBwWcwwhvgK961RyJRec2v5FY1KgNuXAqwsjQ17EX",
  "key9": "4NBpnTFW8UhDXkN8gYWFWN2qHigxuXTVGnohWGXvCCH9jsL5qCG6edF2pG9QHcp7997ur5qd7fw4Ufqd7nLXiGXs",
  "key10": "5y2jXQPrfpfJQeigqDj2fpsS5S51bbCnWHdLyxJcmUgAr73j7NevbqowahQBFco7LH6wsFHUammsekc9fv19tD9m",
  "key11": "4qhN7ctXupb7pYKEzU3GF86Dix9sZD3HBCM2cHmoGAH2twh24s6bj7pMzEEQCDCwTSwEgnFEhZq9eTwNtA3CFaDp",
  "key12": "4McvsmVaGniEDoyf6CQm4UCytFwbYKBoZYjwh9YV5ahsCtRhWAj7vgd44kYFCzEQvVp9H8HegAuG4sp8EVDATuki",
  "key13": "2oUyjtcuV75JTyNaSX83BUqqQ7wjz3GKe3M7CfNssitRVm6GwnFG6AfPRt2aEM3bpNEsHciVfnTse7AbjUqyDdBQ",
  "key14": "4DY1ryvsxLNnDspjLwzSpiWstdFYbvCRECBbhrjKnqG54LisT38JmmuioD7VPdwvcQCrLae9vpyajwiEYgNJqqMo",
  "key15": "5ikspdVyDCeTZcwbJpmoh2Qh7Vy4XoCGh1FiNaD1xxryEAFGFvSGAM6pAD9GSXYCyzAHJHseRQzQ9BnohgnmTJs8",
  "key16": "2sNKVm7yvHWkE6tKmM6hfRCa213XG9kexYzfNPGYt2GiJmxvCrBbSN4bcPLskRSQXbeD6HgFc28SNipa6SbEjhYj",
  "key17": "nsf7XuRZTrx4GavJXJ6ofZoREW3d2ErmM6TMRK7EysdrntR6EZQ4kmKsF4vKmvYvf5LLYv8L3T4tqwnJBvDqNsf",
  "key18": "3QLwpUgzt83TLCQL2ymxfjacqryxabUhakJrp6Ky9C6ueAFRUH6xR9izaYkH92FtxTFQBciEWYdDHWv6TS44fCbb",
  "key19": "47RtHxnBgAMwYpajon75CGd28ubKvvxLFNarpmQKyYPfTHQBCAf9yVaqwibLtzngfvbHg8SpJizScD8GkxWKf1BM",
  "key20": "39ijwLDbEcPzU4f8GoZ3sD5EsumuZdBALwh1aDz1s5xZHPPE4eieYsPZuVFa3aiRPzgRt4yESqt8QzeVhMGnKJPh",
  "key21": "pxzm9MjUHFGvcF3h52wDuBeJkAaSi8QnGxVv9wwDEmJjKpGjs27Sxw35YgCnHfU7MKwgovaELkK8nwp1df6QnEr",
  "key22": "gE7ZaicQqbsEdhG79pJKoerCLwn8FowBpCu51kgkH2wKwAEKSEiwyv3t6pXhSCqyGrasAhzbn3Ff8xWtq6NmqLY",
  "key23": "4GZtBoKVKC3RFWN1vV5dKx3bnUfTijQ5usdxPJUfrpYd7GSvuAKoDL2AkDd1cW5FNV35CH2W5mdv2FCCpJrNFBC9",
  "key24": "2eXDurvQ68VFouhAHKpHWCXwTzntAxLB2B5ZJvPDhGX8L4UxXdV6jgFm7VvxtTn1vFQXzJzgxJKKFE3Yg6oNW1nj",
  "key25": "2G4v2nCTQiHu43Vf6AHeAMN7CHT8JSraSC17HtNEXtHFrkXKkWZGc9oebqkzNq1hv1LY91XwZHvcv29iVrfVsHZL",
  "key26": "5K2PDw9kZAkmxtadQCutHhe8UpbeAsbXPmwzL2SKHBdtmrDeASv89Kowy5fZR6JeQhpXJ9K2iDXNNX6R4sN8BuCb",
  "key27": "124eQ27Qa3NtzLBsxy5yDaXsV2ZAnYYqjH86LxHtbmZ7pvzsuNR6oN3yVSstSydHoKX4gtPCGYVMTxPTPBpbgZTJ",
  "key28": "5Ltt479Q5vwcyzfhPTr8FzR7bJtvpz32hkQCu5ppMmmKSFEYLEiCTxZo8NBKdy4DirsJ6MyKM6fHmH2xq4yZJKQU",
  "key29": "479LEpc1wb4aKqNWBwutoDGuPmiR6qSx9dJBoNnroqym8fYkbagjhmNxFZ2kJcAgvadm4k3HfgEb6jvKjkBRBaTN",
  "key30": "3MSRdfK5oM2aKuKAudhb8jufrbsm3ABqQMT7LqWtNuXwjDDCcbVp4f6F9EgqkZz2APBJBKhidXMSKjoBg3d2dMsg",
  "key31": "myPH3w2zk996dRmnZTUzjMnzMCQ5QDUMVynqp6wfLdWeRoPsagPFtd6SPoUv5eXptKBZdbXe1M5Wbmc8fab7Tam",
  "key32": "4QEuYkiYNV76KsnTGUbMjqM2DGJDnrDn4V5WZKSVU7K9EKLWEtGLtD2boT1QQjp1RZdxYXqFKoWteJHMN9KtRbcL",
  "key33": "4QJfMxAijnozjpdDR1eAKxNZY6uXtAiCfDzNZ4yeBDd6L3xctS6twZsxM6RJB3zYxA48MvbKy9nfBp7N7y6pLbuz",
  "key34": "361JArtMZbgxgk5jdTUrA1yfk6dUnuzMTw7bbvjidch9zsHCeE9UnP4Yw71iJH1UfTYW2H26S6RyGGjiNprhF65t",
  "key35": "4yxitDCr6sjEN9jdwNncjARBcMgtHuYFWiuxgQyygi1XjR7dYAyru87MBTmFc4S28mxkQQyaUHQNSvtNuPgpp7gX",
  "key36": "4A6Qmdi3AyDBFpAYC38Z5SABt7iV4jKgiuDeRiUCKHsWi7qXs7vwzqQZ9oDkhfXE2ks568Ur3rP14QDDn2beyjeC",
  "key37": "hGChXz45vGhxv1g4Vi7BMWZ1bPqd2P8U48Qx3fuVWQQFhGUTXb6mnvhFUbtVjnwdiii2efUW8HBs4ZGe6qGLGsL",
  "key38": "5YvUgo3Jvm3UaQCeMP4CAkqi8JBa6wXUHHnSi8cwwGyPrMKgftfyktb5Dkmieys1cvYcVD5M1Bxjs458EC1tadeP",
  "key39": "2C19XJYe4W1UmNwnpXKQGvbTN95UTZDssuZRT5rFuw2SoYMzLvwNUH7rKxjWTugdmXEeV5Ku34GmrSjkvUFdn2w4",
  "key40": "45X2KhdJCjsfAvATaHHpukE6sVACNyt6kHZCF65oTX4rPdgKLwyXg8Ha4jasZJSx7Tq8nqaKDgb61k7h8CmW7mxG",
  "key41": "49wTgkPE4xmpbUXdFoLBa62hjjs2RJcVkzJcMmd2oTJ6XFvwfVkyi826a68ZWHj2esMQUEucQvVR55G32G7CeMWp",
  "key42": "36kV1qSQ65LkcqxYskPCwABQbV4brNBHv5tqBxUPeVnNvC9eDuDAiv7tpvFRLEdkVVJaaFKPtzfGPk8xiAN98T5q",
  "key43": "4c3QcHEfHzyxuVFwRU8CcAZVpPcUhLTSHLo1jZs5hEPdFioSj2vbJaPZ22ciWiffhzriE79b99DjS7nE5N9AxRQn",
  "key44": "5onGYwvP7mhRF2DbZumkQCbyNuQEjNJY3aYG8H8AfLVri8qXpfAvTuvKMux7RnxJ2enVykGmqVmwtQXio7Y5bgty",
  "key45": "2MZTerjEyhLdzpCQ1kN94Jm28Vr1yD9pARcqHYJJDixVhTgp2e2F5n5s6JJ6dFfs6K88Q4xgVktGMBGGH3nehhzv",
  "key46": "5k1d1ptexvGEAbXTXyaHHEvBxVaXaiGoJJpVX7Rn2hG85xkwEx62UB3UGjkbESMc1WAMGfTCSFaGDePDmQk7ceBo"
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
