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
    "HPJM9EbPDjtp1sKFiw64G9odxf6WUPC11TKBd4opUkXTFjmTEvLwsyZjgonyoXWudAqfKewtfM7wi8Dwy6xJFiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tbjK11cvMoEuMoHbswsXeSLxRTvngPMqM6P31pwy9PffGmpPJWruRehTCqAGUtG2STSA6FQJ8t3NEd67rvpwxgz",
  "key1": "5iMn3GvJhrp4L6X1gSQ5Nw2ggqxggDriv1Z7dZC41g6zT9VmNEr5GCdmQCEc5Cq3J5xkkUXaPEB6D1yP6y1CRZFa",
  "key2": "46cvpR8RZJHqbsSg4xGaDMVxvxvmjbDop27V6cg6RrTnGPCcWaH2fAbMMLzHW16TispbqSugNYaL9xbaBrxFbN33",
  "key3": "2EKwpsr4kyAshahEzxgEcxHEKJvQ4HBuStnzDmw9MemF8RUX1RuYNcjLE7zq7QQ9vRjExsNV8yApeT58A8q5kDzA",
  "key4": "Mzb8Vz29GULG3Qr6L473AsV26XyBym12cRQXwxEiW18NoJxk9WyjaMBquxF37phZT4MP9cG8STHh3CPnDzCP1LN",
  "key5": "5tqaACumVqwPMo7NqsmBXG8Jjhx3Bdo1vSK6GMU5QBweVA1MdfPrHSWjShyyYBNWeVG3k9RJ9g9G4U6bK3FAyn6T",
  "key6": "2qPhwsxXn7fUct9KfVdVof3u7ZzZaUeTsMpEghfPv6g7ATmTNewECvpMYokyi3gap74oHqPr8RBC4dEqiypF9RKZ",
  "key7": "5AcHsjUJYVrjtcqyJp8nEsHVoVKz6GoA4YhvbrDUdYBLViTur3NzZnvCF65yhzKtc7dMZTG5CGm2ymG3DYdyK5kt",
  "key8": "2b9LoRL5BR9WELp1xh3N3CLiaXDCHjfhhWnd9ozpAYMQqCaZr9MUPTU17EDEdbD5NTpD81z3MhJ1bpQt8A555pvJ",
  "key9": "3k2JzuWtWx6tLU3PsHiRDqZppzx8YSYhDtfbH7rnxmbTP2YTYfQoPXgnnNJGTWpPV1ZFRTPJbvwBJYFprVzRnsFJ",
  "key10": "nrZtcnZVC8FbpYZaenZ6tBh4BHrRasdpxssKtjpmvLaowt9yGZgda1dp6Wj2SCtsb8gfxXvNZpfRW8CqFemPe5U",
  "key11": "sjswiWgK41GTY2QxKAm2mg6wp7J61Chv3X3xUVPv242hZ1HDNyT7eM7TUjnw4DyQSsvcewTsnTy5SXiSZpezHbx",
  "key12": "5XDBgte4AdXjifF75EDscpRoNxyocZeEy2QvKDoVpXdp3wm5UypSZ7RnwzBhD6gaeuCzn1hudWvSPVziJQygVPAv",
  "key13": "uKjQabrf4zXHdqL86b7HgWKVUqUsXWGcbusao2rxdhfJvnyxhgEfCZmm5PMoxJPU9eFekAcQEWPfr1wCNwDXWoc",
  "key14": "4dKyuUpmUrhPwdxw2YcBak7fESCxAp6jpjJQRQFjSCFKRowey8K7r9PTi2eWB8r2pSzZx2DwdMSCvuyUNz3CEiD3",
  "key15": "Q7dNb9jxQSEhu1hLF2Bg96JnLSQpP5an8R79aqqsm6qdQia4LPNS7VPCPWFUh18itoCCvtWHHFnJb8WkKsVG4Qd",
  "key16": "41WniC1mou6d6k2WNP5zRkjHTfe4tbbZuE3tECQkD5gBsFcUsxsokzvsDW7BKY3Sv6CSqt2FqZ7KuvhZBvfWXG2T",
  "key17": "4ABaxcsg8T2dbqk2jv78DYaC1Y3twRTVhx8jDUX2M7uASFuLuVAeFwKukmvxYvcQ1Nr57YzavibvVHtDYqLaGZrE",
  "key18": "2oeuJUCEsq35SRmDwwXDsrs2WWrRT9NcxNfqWFKxgcJ5Bkove4jiq8hZcA3AskHizmFKKgU5RQSZxKHoH8Q2hWmz",
  "key19": "nQkB5FuomDj3DUG9a37vPJC8XiqGHpj6yuFYCJQYJ2fbGqLARRjwmE1uTBbjXVv5FvyxBdGm3GLWX13VrdVPhz3",
  "key20": "55mJTCNi8LvDP9HzeygrLgoFR3YbF6hWiM6qjJMzcSgkRT1K92SE1eLP1ZyXbmxM2gn4kKHMQzvL4whP6nwwedSP",
  "key21": "5H25MheXBcLamYn7skhmNs6GLxP14g1CyhVFDqG2STg5saiuA9b8HDPXBapsjfKXEA7Uvd7rBJU1TCvNZNWR9yqp",
  "key22": "2hxBrh3wSLr7VXSeUMqUhmh5aMELmC4z1HMJiDJMJ3vLiPAh4TzN4ALwtktqE1aDja7JMMVEreHc3Tp4tiNGhofh",
  "key23": "5XwPNFBsTrw3eETSKtRnBwTHHZp12SQT5h3Yc8xTezr4spEUqnVL2TtkbNhQGK73UvijcUEvjMXkXT2R2k6KRCAh",
  "key24": "d8yrHaKSbtk97hynJMkpApxDsARKaRkeky2z9nY1R3qgvnCe4s7yvzoDYKaeiqzAM3uVncGteXRBqnXEfqULr1t",
  "key25": "3aHADkZyfDqgG6JEpd5q75MQx3A2zstB3u4w6A3TzLFMU8gHtBFwNN8GApFj4ANbhNPX87NyRUyjLbsByiiguyns",
  "key26": "2eao4eqJ64jhcZeVaSqXmbPkpV83C13LrWggT4uML1fsonzdyj55PCHC1kzuFpe8g7665VkM6cQRLJEx1RjFQKkW",
  "key27": "5FkwoBFFTsr9xpyDCFQDT4ZvjoSqKek6KLLeSiQRKG9L22mswwPWNdT9w1pZQ5qf24w5VTRJnozBoZwzFhHVh8Pf",
  "key28": "4bo3NyYJLyHwT3fER3JxccP64B55rC3KZEyVbgnBWDuANfKLJQ8GwC3n9FpefbweW4D5cScNE2eyDRPG28m9ex7S",
  "key29": "2o6TGAsAbCVBEkKLekLiokCKRCaiFN7W61bM7Ktpp8Ni21FWS2GnCpkiCVd49YVoBsCzaa3zT8E7G24Cobz7T6TW",
  "key30": "5XKonwDW9GkGbTRWMNyEkqYeUbRtxCCAf879QcjS1A9FVxov45y9wNbToKsoAShkUQjk79HBBFoFbNHHwQbdrMFJ",
  "key31": "2RPKkXTkfsfBjyxPGGPdje2NKTFZs8CoiEK28L2P7eqV99Usq72EmBz5jjGRbGbYaWL6s143ZRdxDXfnssje8YEx",
  "key32": "2PshM9pNgDAN4uodkDWmiRcAiS8WTrtaoJmnajkki7nRjHBqoaXj4feu738qEKgHTkqyfFrSiB1sKRKQ4GHV214D",
  "key33": "61Jpi5HsSZ6q1VHhjstunjzom45cr4fEEWL1ntAXo2J3fn4sCXwxpjEUVdVLb9Qa7kK7wZiMRXor5NBXkj2wEMEM",
  "key34": "2aAqX6qVtFg81fd2uTMQkCDbbVJzoSm5uZZomS2pnHYFkbuTcgXhNF2LwXKBsRMNY1qbDfhBuqTYx8rYgy8CJU5v",
  "key35": "3RW8KKnKkqAyX47C5KpxPZRMPtuYPsfyhfJp78pibSijsQu1snK5Vtu7uRu2SeTEUqMe6vBfEnRoUbozu8TCbpRA",
  "key36": "3Lo4v5uqDBJ6eEjDvU49RYxeeFDARyRNvhmfdKzNVm37pP2G16YS5GNXZFE6EGff1frYyP6r5LR5grpUH9y3wmgh",
  "key37": "3rzSyyHExheWLy3WkB3hVTPspy4ZocPZivTFNRSRtktJgndpmSFkok7YU7N6fczpzpiLiXjjjNuqkpKPiXGSjaUt",
  "key38": "3HMG33tNTRANrEyXkEKBa6EL5nWAiLZmdns2Rwi3gddeZQ5UJfbfioQzYY8z2eXhYmDpcXtZFsuCAfNQLiuNRABU",
  "key39": "pHshZCKndY7RZHnZUfY4pbmxQ28kLb9JQkEAfnrBiZX8Kt3Eg7m1DWsym8apU3ZZ5qkW4kY7aCRUg2kuXKjMJE3",
  "key40": "sq3KGPtTna5ZrnkAqksaDub4bYpmF6QpN9KTkqg3jc3V53qq3S6aBHEEwevphHygNdMeeEv5YERynd7ARg7JmXS",
  "key41": "3M1jgvK3BCs4VKM748api452irT1wDv6XphyMnnm4wGqscKwqZoU74wjGgs2yFMTP69hX5RxmPimeKiL6eobp751",
  "key42": "3U7ibMSranLbxn9DV1AiuTJxfe2NEgZ3eMkmwztK3cw7VSgKqqMoCvojCMdjmjHhqr452aV9ph9QZs1EJ4Svc7HK",
  "key43": "35opfMeR2QjWDCRqMQzovbiehyiXZ6nPNszyBCPHaxTJsBcCxDj2XC78oLHpbJ4BBTU9qPuyVo9Cw8rPoSLX6rsz",
  "key44": "5dozcRexCkZaeRvK6UzNNYa3sugyeHdMz3zUf4XbNhAjny4QnMXXrR4xWZeYWzy9u7xuWYsaTjAzCgBW3aoVrvfc"
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
