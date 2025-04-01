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
    "48C6kNJLhoRmwt8p7Pg7ya4ocR1PGiiaBVHU5TqFjVwbMiJnSaNcHqNQn9JjKcdrscubbZ73AL1d4RDPRstkzhkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kUiD1u6GaqJkgybCn1YBAEzqqwwmbziVEp2hSZCczsALPBc9LYuBYsfAsBcvN4NAoDt21zN2EPKd7bEvKZCqH5A",
  "key1": "3XZ6dPxxHosvongNBxuPEH7dFjCR5bU57xbkeboi1TpM8ffev3MW8oQfHm32M9TmDBCQTwoofDo5o8V5VUyx7p4Z",
  "key2": "E5rmNLESwqcxdLPJXmnYNZYxQYoKU64dbHeVxTwRT89T3ZFbsWzvsQekUhNk3cCofqZhYH95u3brkstjMkC7Fhp",
  "key3": "2xZd2TXA8aCYXSkLmfaTcPVvd3dz5FwUEB2LqFkN6dJXbVNKvhTgf9sMLYvLQwfrHmQ995enGFeB2XTJMa4kYxMm",
  "key4": "4UBLh1jGWzkn17zfxMJZrzCtz47umye7jbH13PR6wqr8eXymDAPXCbzeyiSJmMgtHfSCtFSu4GTLLhAkjNbM2TkW",
  "key5": "2ekcaFprM3RK8vdmUKQhKc77pLaUixz3JBDV2ssX6EwooahVyskgoZtWfWeuHoMFLygTEQDjwoqLh2nwHSh1L3s9",
  "key6": "5AQa5xwEmFfcnw9xXZqXWmHYT2qfiT3ajdDMv8MMXNdywpTJgYv5UruqJAX7cofU6QCyUJDqSva1hQ1GGcTHPakb",
  "key7": "4do1vHQrXdW8MUAmL4XMmedKEPUeKdtPzTjiHNeCcoufgKFn4KkNgRpFUSUnSPsADxXFknMK6k4GYJj31ijfABxP",
  "key8": "3pUuu2gRFZkGKztUXbViBQpe3P4r9QYTmU3htK9UAwcHJ5N9SRMCSQE25CHmwgkeabUygvjtZXgCi3eK4x16HywV",
  "key9": "x6rN3XH8KnUMAgqCguQUkj38rCGdiN5cJv8VN1q1K3zzeFv5U8vHf6WUj4DjgkbbDBGDC6gerjVagPpyhEU16ks",
  "key10": "4XHViT2qvWcxAcCbts86F1rePNwySXzjgmrkJBVpjBMbdY5vnhMnxJ4A9UtrzNJaL6KieWv5Jv4fum7y4MKDBtYE",
  "key11": "3KsvLjQWTxVA57XvAvjAprTqN3LEFomQPNiy67KxYQ4b6Eg7uwj3h3oyhJAJdr7A4dG8PgRZcrj3K3BB3GKh6dp2",
  "key12": "U4ArnJV9eKWxHBr1VsB1Jq8Qa6jrrWc4ht7qAyBsBH3MRsDdfWvn5S7fu24uS16xqFgkG4wuEeCVMBtUJb6Cg7B",
  "key13": "53VyZsyU17VjUSerV7XMsqHtHnApqmDgjPRJFJ3bgamknAF7abbgiSnjC6Tk2wStnGoyH5g8MZhDvUHjuJr8vdTm",
  "key14": "NxpVxHDCzjbJwV7mbEAwcYGYd9Zi89usEnGTghavpiasXf96y6jxK5NSa3hHirFA6mLG4kKKQbQFHQ4diFDb1ES",
  "key15": "4uxdagsg2EUnvK9KAkBPeWFBdkk3ezZxbVSf7FUnX2LU7XuGDmmWw3f7SoNZRwzuzzakN8jYPNgtuLixBhNrBTCL",
  "key16": "4NA2eoTKKTKoFzJCV8i5C8osRfZtpe9qXBWENE9b3qBGo3B87pD5TTUwtrECjTeYBNaPou2tbhKjf9Cwt83pHrAg",
  "key17": "msodL9xnC2q241KeDt9rgacPZdrtCRC1Sbnir5qrVfmEpr9NgU2u8pRKBtjzu28ntACK9jwg85ssdogrNQupHrB",
  "key18": "2w2z1AxiBoSds7ps5GMEYpsLooB3ZnWhvx498wXN3fNpRff93HubYn2s4TJxcxuDD3PyU8LfigV6tBxG8MsvP27n",
  "key19": "ef1g2ttEmAe47Ddq8R9KekbSZDWQKu2RYRWCsfPp1ZFjCbYqbovbiTSWT5Pr2cp2Lc6e8tpVDEXYn6WBgZ4ACuM",
  "key20": "53mGddvoRLgL7cEgdXDT2WWN162BM611hhKvw1jkatp5LJqRDHGfsftng4CoW2KoU3t2ENVKihHNvYgV9RbumT3w",
  "key21": "4mwJvfyy6szVCqzMRhbhHgaEm3aGKfG1wwo6MxrsozScNQi15o3kMQe3tmoMaQMArWSzA64eb3mXa3BeM2yZ5YQg",
  "key22": "5fz2aEeM5LR9LR8PR5R96x4ToM6Trd2pYQoXUJ8iotL4QWz78p3YgpJgFo4vwhRn5AJT64eREjrbT7iEMQHYzRwm",
  "key23": "5h8SG7N52roZQHCK3U4awASKsn3WHw6sxwwS5NWqEUj5Twsn1cr7wXi1f4kTe2MRmmzSqsod6EzEHFuSMztWeP1u",
  "key24": "33xwT5SVbbvBCAUQiL2G4RZvwjmDjNEZq5Jgw38NtYdyuHNemRn8qsmZeRKMAgYTYNKS2zMPxUgpW1QdCYdqgoe1",
  "key25": "QictNNJJoR1f2iQzWZbXQoJfg9QGbg2WwLKyUbNpPWK7Mt5ViSW1DshffmjgHXq7BrwzrfNpfbpNZmo5pwx9NDf",
  "key26": "FHEyWHnenzBDiW5ewNAa8QUgYWxJ8ENRg6EkwUWFVTz1CVXQeXQktLPYxGR3kzzT9LHRbLxotRJAhNPhtw8v96y",
  "key27": "2yPxBznupLuQXRvHYULcZS5VNr9aQXi8vuRtueCmEzBBMcNdDuqLp27bAPKtmzpMgmK5M1caxDPqDgryCW6omuto",
  "key28": "dvq8MP9dp84KQVAzduJsLKzyXnfipnRmeKUmrt48f3sL4SDySHKjWd4vBamHZEXyqGeJUzSjMQAANW3PSGw5jWs",
  "key29": "4bJyeXeexpeg6eHVCFaappoPfu6PRjrzmuWUeAGv69MHRK566vF1QbfhmNqqrwaQ6R71hL5h6sCRjjErzZyt9SRZ",
  "key30": "4B64mR8sM2DhPYYGP6e8Dvfggjr4DH5rd6brT7xnPfqnmJGhmryJg6p6cQzvLh9kGRpq5uPk6rD4YWbG3sfa8qL7",
  "key31": "28MRLHpsuSkH6CdgWEUsQKkahacU6VVKVaGzC8ndt8DDZwwoNmpETL2aLQMLYoNAxmUCjykhLKMBWcXfMcjpgsaA",
  "key32": "3wDABhYgxmuMTa4YDuu9SZMmd5Y1mAAEvab6ry9gSf6zmUdviFrkcbUdz7QbGWfPkZuSdAfxHb3LSrgWLbDb3EmF",
  "key33": "3VDa8qGVud21Kqy8b3qSAtvqo6LCwoEjMVrQpfYW9LuW1kLWnPAwazG9UihoR3rrDkbt8Jp2X18fPprGbnz7aHkK",
  "key34": "2qXbX9qSce5kh3ak3FGRua5NpGWfixGRXAHqryppDbdtf3QGCPXAZdEQs7LoLZabkZPJJDf4Mn2RChEvbtyxjL59",
  "key35": "5HJDrGeiXHUzeNjnDw65xbiP4xbKfZbtGa8WPJiNqVLDJv45HxsEF2PvZmkiC1A11poLZH5opayaeh7z7SDxfuUH",
  "key36": "3nqMbsqBbirVMJ7bwcCnk4QKipbRsezFtgeV4PN1pD9R1MkbWMn2bci7MZL8vTQdvwR6xyrVUyPg6zcTqhE5cBUQ",
  "key37": "5UYVLsheg1ckxpaVwX1ZwaT9prsaiRESovzBoM2ShvvpH5eQYdrqE5GbmgByBkiAgFSLLVZwNsQCN8gr87B73DRq",
  "key38": "2FCipQj5gUY7WrE1NFxp1VswyzetGZ4DWXJLPwXPnwXnTg23FPLezRhSnsRSAEHNby1gd8dLBM9QM1A1zm6Eh2bi",
  "key39": "2BQhoY2wsHzRx6nYLDqgxn2P5hgB3iks7Cm9gD5ESumydnaEfBZK9X46QxPYYLpSW9MuJ4N1vANCXrY48TSFbPhp",
  "key40": "4erb7EXFcSCZ7EQCLVubsTUTVAPQsSLkuCDbjZBAe43S1xF8t6y35T4Tzytm5uQXjP3BmjtgGuL8eDPF17tTQxNH",
  "key41": "2tAEqK8rZGwYXrWML9Swn2pVFPCjPTxVm24vnDfZWEJH5G1WHZxZs9XpFyoqt29h3UamJwMj9fKSotGsHzMU7t5X",
  "key42": "4KBUJrQm9vPABKqoNrmJ5BRi4MXA2TfgE2pwnPw6tgFnXLDBR33FFfnH798pTDFVkY3xpEnyMJ5jMWm6q4dy8Y24",
  "key43": "2TBYb6bSGSc1iCTinMPgPx5mLWXjA6Pmup36rpp5msdvCYuc3CK2xZvguQg1HtKywEDn4bhMJdKYQRDPDi53K2Td",
  "key44": "4SDx1gKfLHqiHacFijwc9JWDeDRqwdBueiMCnG9g5LhWUSCAjReGAiCCLxJ3zFQUhDtuhqaGfwzULi4G9B6YVDvw",
  "key45": "HobSvuinBM4nSdXEA3kZneaJpCSN5LfDKmQTKt4q3JGGVtzPvvrFP88rov7zdEXMatDqnREs7auRwLhkkCpWTdM",
  "key46": "5WoyJqcLiWfDaD53oQAQRkB2K6K274GYdStApAMetx1ik2kyFenSZsupKgeD9gfVRBKLou2W3e5LGqoxAQCsfvHT"
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
