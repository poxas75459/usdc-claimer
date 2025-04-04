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
    "224mbEWvdnLaMo29Fp2Fj1tCwSzrYviEEJBJQaRH2eVkHAqLdvrozCiWqQqi8FsHZRs1YnYnZUbKqTNRnkDw4vCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fass5aiAqwwrL552CiEivP9AFty3naVtcL4h6BEZsNVgVznUgbYoJKZ6ueyPoSBoaRgyDm8dWxWHYqVN5W4FQc7",
  "key1": "3JykB5WTvJgy27jh4jRJwB73i3PXKaLvPtP83ayn8GEU4YpnnwCoL7PW9gLwVCeiGfQBeWdrghP4r634N5as3BLg",
  "key2": "3rny4pSxATB4348Rw87K62tWLuK29KpcCLNC5eA2iHmEBUC9TcpvxSkT2h4fH9vjBkGoAmp87njYMVegspW3kgad",
  "key3": "PMgBxfxGCcViRswtPMwrFAgXEf4xP8pxeehHXbXBTzRVuGs32RTNQqbRyWYtWjqcFqAaW4ULY7T4R1j4NF2cf7v",
  "key4": "24fec27i3xBFgcYKSh7KvLquFS7KL4bzNRqUy4QhKxM5HrjVjoZ9mqkvpbzyZctAg2VzFJg1JGKYt7KQLYWxdAcR",
  "key5": "1vWAYQb8v3C7iX4JCz6nFjVXKDbXYBzHJfCN4xgNstUcKXYKpMVRFL6YXgQP4c7N47g1Bxg7gbZEfZhuGFgRKM3",
  "key6": "4ehCzSMjCf19Py61dNdjMUYZKzypoFnWTDxn2ANEtjDo1UTnZX9iCiQwSYSSA2dkNXtbPG2hBgmPrqgqPjGQivnJ",
  "key7": "4pbDB4ZEu9tjDiZV6WWhSE4eUKNTT1krTX1sgkQprD6JcDRLEHpSJVgaBW6HHbui95sGaoHtHmpwMNQFRJyLJs3g",
  "key8": "3WWDExQgWdw25XafGrE998gtkbdYYGoZRfBJkhmf39ADmrLmnmbYhg4FYYJ9g1qEajGhquvTjMGzfMf9H6GV7rqs",
  "key9": "5XCDG8Ydy5BnYTLZR45QutY9oHby7RVibyK7tWXe8oZGEEM3Y1Q9NpEvdSPeHiWKTee7dcyTwUbK58CvP2AUJaAi",
  "key10": "5bwnDS3JpQuTSC9XYcakbKrTgyGTaY4osjV11Z4sm329mEFUNbH1SQMvcgAdTUVFBN61qA6zepuR58cwTXG89nZB",
  "key11": "3sUZmEwKFpxCiM2DV663mxC5ngzds3sWbWa5c9KCBtqNqpNFo6Qn4AYbLKCLzPemmX1CPBHWrmjpu3B5s7fwFcYf",
  "key12": "3qhWj5kW4D15KgHk1urzkV2eurot2H6WeksccFkqKaB7NuREUFhAYcCiiwkAfZEuoUSrMZSPpHUc19rUauWAMot6",
  "key13": "Tr32JvvSuibqumrrcEzY5spP4fUXCtDXAAyipgCVczQAzB6qQMpb5q2GSUpPUAfZcJFxWs4Lch6QCdysk5pAGT8",
  "key14": "3XBFD8kWtKLKgkXk4CBu5vmadsNh3xeBwUkybw8rUGNj3dwodqqGXnLUdbCud8Ev7DSGRhwV4w3R4XWHfGDnWWKs",
  "key15": "2zs6GnfGmmu95cwJBTVywzVk9bnqtJKtDzNR1UHmAQGYcMseqPqoxYwXQ5HfSmBbemNBa9bzzps8J14H1JoNtAHK",
  "key16": "4By6mpoWEvkeet6Fxvdv2ptCPVZ58n8rexUpBp4qnKUi11du2QCexCv2i7TDbzoeHMPSCMxSeqEfHYP9TG514RtG",
  "key17": "5bTufTXEuBNPTomPRB2UxBDfv9F8PJzLftVHrf8uYYihB5gVw3BW2v3q3Vz77JH72B7f3TwWQ3EFePmWDCeDhqEp",
  "key18": "4bkcv7eay7cqNY7ibjkPPPQpUjzpPq1biu9hATggDvU1BJDCY4ETcwDC6ZVVW1mwDNaBx54GyWMKGh9DJHWXqBUt",
  "key19": "5DLYdh37Uf9yvn4CThEwjf71DdS9vNKPuRy1xbj96UWuVok2jAeLw5ykRGKZvFgA6MZrCWB5oY5kBXfTdLPZhAXp",
  "key20": "33pNpk5BmbGUYMQuhzZ7a4x4yXwf5fCrYcsrogJGTBTKn7dXShEbhZdJtCvu1UomYZENJDGb8gwf5qhJgD1R7GGB",
  "key21": "4uqGRaXJCUtjv4YKXhw8BpcuxJPf6DvEP3So7Rd7GLLLU8E99atgoLnWkhiNuN2dDS9PbC4vScnuLtuy6SiWZF96",
  "key22": "31kV7peDi83HnqBnyaSaFDhYaS2iagLEwUbSA9SkoGJ3nWx8CHy1XdWAWroyw2nadSkW2LBcaxqrREMRvesJfq6s",
  "key23": "4pBioRb6z18qnaPEoUFyfhnWFskXBzFbw7YSTupcpc3KYvyUjJnsoTZAx8NaP5gYcoFLT9vQ8ffeQ3MmvzqzRiyY",
  "key24": "5R6BpPXP6QAwtjMqwqysXdRaJjgUSWgaCAKu4FSeVVQVTHcRm8LnzeaYRcd3bybCdDCZjcGB8GpPwa6qYc1uxjSS",
  "key25": "3f49PCQLoVrAfoebNsivSYTVoFAMZEUuqf3bKz7cDbuSBNBZvVwehYyJnqCqN2Majid8Dv2wzjqviPpmrQji7k7U",
  "key26": "5LLqcPqwmhajbVd3XArunHZQngEUTjp2vbjXkwRa9TvckkmW4W8TCruLTi6Y7oWzUPX3vszvdh5MXnB3rWzebb6N",
  "key27": "3tJ9MWcZkijEi9RJAR3Ry5uneraB485VkHLDVtuLDXCYerZpmQqf3QfWvdqWUCLtxcmaaaKNqKuREcYFvYsjxxxt",
  "key28": "5Ezcjk1JJ8Pi5pKfYhLkFRRigUGQjj9a5ufHVpHyukrYBijvDH7sq9ZTLWzA85NtKzWoJPisF4y6BfJCjiojpdsP",
  "key29": "oMyrUcbmTqAUS7dBWFa4dMXUFAYV93rw1WKxsuHsJmsXKjGcFWkgBawXasvEZHrzoGNXdfsuwHvyMuzZqLSeX85",
  "key30": "5JULdWvsMj9yuQAMVm7PE9Cw1uJHtV2gEP7ByQd4ybgeDsecABnEUPTJAjyNXwXKFzqQy5NsLvHsTuFpeYZQeHpw",
  "key31": "4t1fTwnJEmBXRX57LxhPqvyNQzzJYuP6HHEsrHJGnaA1gGkVH6KcN8Ma3Ke52GRzEyFhQXcxccusJ6g3jjec6y8b",
  "key32": "3xuxBWSzUX7Jy7Cj4x9fLprCu7pfpaZuGAYMKURjyoSFfDxS2W7TqEpWrDh4L2HJG19UU71so96N4468Sj9WjpY1",
  "key33": "Myn1PfogQFidw6XazH248e1Wgmpt4Arwsv5hwT1msan8V8DKBk6T6kvzYMybrcLKGMjVLkzFYXHcGCKrbERF6yL",
  "key34": "4Jm1Y56jTao1wjvDBhjjj5RsachVf49m8btKhJPn1Jjk3HrJxiH8VvGuEVtvibGeBpUmpN7hRFH1VS9xFwegUWza",
  "key35": "5zc6AmbdNP4f5ATaUqGv3HwvK2fp4W66LwdgSH6tVMfPm5ToKQ8fevQnnL5cBHNC8M6y87kf8TyDJGqPCkpvSRX2",
  "key36": "3UTMuu5xEYtgpL5bYursQeUdnLRMp5GuRSWQV5uEXr8mvDTjcuWC9xnP4bNhJEXWcDQvR1kqgKsBMMH2iFYvyTmF",
  "key37": "49iHZHHR7eVkcVN6uebxfZHJZDN8teWqaNXBPLZxpz4AiEPTgsCMGoe9vaHycjfahWcjYfFqGLRUu3ErVE8vZNA",
  "key38": "2TvbBxbg2QJMQWUVpLZ6rNAG6L74qcRtxiQMvh6Wce225TvxFvykEt4GkBMWzSqtK2HpKMHLDdkfcZVwr9JgE4px"
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
