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
    "yGM6eRtvPUtJabC1dQDo8Em4A2UTRQa33FFNZ934z7QSem1Lb47SYofYxSz5q7bVYtMeMn139EC693oqqra8V7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JReL6CxNF5yhctQw7qWrmLEvES4HoELubnuGipULxs3YH3YEgWZMFCacm3eyHKQ5NC4DhiPtjo8SN5Uz9q3NYA6",
  "key1": "eqzdeHuptKvrd55pn3NYhj3nEeFAdRbTcCNC6fmSRQFW5NSEm1qWFbJ462pLQW8xbqypJTQ1x1YHd972e5TfPHL",
  "key2": "33zaNiSJfyQzgyrMnpZQrBzYwnmox8hKCjpzxb2K2Lp4mwy6eSoqKKqBmws8rJXpFDRzanPy46XdtXLGb8X89ULB",
  "key3": "4wCk2FHnZu5gy3J8b6EfgjhktSHq18f5DSUi5WZb28NFedrS18Lb3qfMLRNLj1twioCJiWaJ4ckJRvQiWHuu7hzM",
  "key4": "LmJeipqnuLGC45JByLoFLRWXaVr72genjVMKdNhvmSRGjPPBP64H8sDBWsc8jZp2N2xwLcCN82kBTK72zAnvor3",
  "key5": "2xT46w3TZAKm25t6Q6B1TJe5H6h7dzm4xL7ShWF2b2G1yufUQsNCXAfGf4bFUyUzby25DDKzhkFwqvAK6pgHewNy",
  "key6": "67HcFNew7Yvj5NzUXjkFKcM8Z3bS4pukVKYCEm5p3GQsoZVUnawwFMnk78djq4iYzGbyX6nmfdarb58n9drEAciX",
  "key7": "3dEqE4hzPKP5cxiWpaVoM5oY1xbgqw7M1FvyjTHPNKpyYZ5Wk1Hi7piDj8KxYhQvHpM9h5kUP6nVFuQAJN1XGukL",
  "key8": "2GfFBjM1t1SQfBABsPKYVLhnK597WJ6PZFWkKijQuwBi94Eu11AYAqn2rsnEo7qLUdvDVEQndw5XyKY3TEVteHsb",
  "key9": "5ZzASDbv8HLCWJY5XioUxM9uEC6d4nZ8Z5AMpUmz2ATGCCYahMguAJg6W2aU9NLu7E8LbJQ4PB4fQ3YBaQ9kbT8p",
  "key10": "2ShLoAiRQU75CYQxVrZS63hzEfhaxd1iS6ZbA6wXphLmRezD3saVBV6GsEowUw4XQK95nXUiPQARukWBZ66AGPkW",
  "key11": "NpjQ3pUFFQ4iTyEMu9N667Kc3gcdFLn2LBb3S2rosivDUHLaCfSSYS45hh5PGZxg4rHP45JVNW6vSbuGynzm9Yd",
  "key12": "5zGY8KXzrURNJHNboAEC8Gwqd9mqi4tmsU5SAuzFzEgyN1AMybsHCg6ZKAeFC4oLQn7tQnun9L3NmZmcmfDUsTWh",
  "key13": "1225C7cmh688sWkLB13BQzYXF2kSRiHiyqb2g72igoj9XXU7r9eRBQBEhGDgEgciLeogLRuEbHXZLNPnvVkTsDfh",
  "key14": "2zPjpdz9UyvWTNp53uU1LZX7Z3WY7UJXZ682VpQpSb3SbS4PaVTsL5rM7L7omY1LJ6iAN4hfaSKYCARhZ27voMKB",
  "key15": "3FwmAnG87tc5qPNYEQV9sP4qxQxVNF4KbJkdxk4nnmLc6aAEnaziMJpjUuxy8ygJQ2Sw55M2aJjyZ5Vc2VkynWRc",
  "key16": "4ndbJU2JpnHBrYES4ZnQQo3qj2QcukLFgVQD3rkutqcsWQXi5kgBRTkQo5axmMVP1inaRFSU24z2SjHPqqNYbjxk",
  "key17": "65TSufiJvdEXygTs5FmiQSscAaJUCef9MQff63kzQvgVp6LZ2E6qd7QscvN8DfNom5iRi4mBFSuV5DMBwyZ9qmR3",
  "key18": "5vHRNKc3Qbbx7Vzr4cJou5MmuKmVyjW7fPEiuPhEHvZamsKR3wNAFcrLPgSuWwrgMLf5rp4uts6ParM4sNSttTA1",
  "key19": "3D765YvBpVbyaQLDaENW6dJADicpJR5nc91QnggBc9G2NVD4cki8ry7WmVCod2XiPZMr7iS6o2Z9wFt9bj1Z239r",
  "key20": "5WEpcbp3gupawbuWfMz9dBr1rgXt2xCACfYo9Nc1wNUcYoArB9DG371bEKAU8jW7PQyGCREtXqtQwreVQqHiwu4d",
  "key21": "5cr8UJHJ91UX3bafEr3L8MJqapqBV2KYYi76Wni5tbfdonXZZm9mf8eGBxpVQFJnYhaqo1xhfnLavGgGt9CNPC72",
  "key22": "3VKKAmG7PiD1ZHmEUiR8Er1Kxv48xXwPrVxohDGh2WDiGCh174rRffQwdTRoRzebJcpQCnuESRnSFJt2XKHhBSsb",
  "key23": "5yo8P5yxgvU6wgeZfYMrEWn4D3JfTMPhnCWxPGBoKUGWDR4Fb31AF9jmkHkg2meeRn2icGshZK4JT8v1HuG8i5k6",
  "key24": "rroRzeKXDLJocRhvioxcomYc3XUuG5hJbG4m4Vo7caATKLf1J1n6Ncvd88wwGCZ4HeyisQxfvjt7fRnxPmTYhEf",
  "key25": "4V8vMbcjtKCUiA23j9LAVtSuLfFLE3ZVdjQkc1YUcY8USWfwyfwBFZtU2ZwgJv33LN3owWNn1yNcNs5DNWdy8bB5",
  "key26": "4oBYYCvMVtW5r3khYMCvspKRWkHrLYpR28MBUxCfXsJ5kY5xk5gqz83ojSqb7TjXWaNCfd5RhBUjCkRKdakyMEcc",
  "key27": "5asuG69q3g86jy5YSPC6mTBYVu6E5UYGuywK9tYrpqyEPcBYRohRJyGdjFLBTrS4ogsRLgF86uT3mQXRxsCA8GQv",
  "key28": "2eYqGfcfWAcbeSuY5xdjqj98r7XsEjNs9JNpD4TxiQ1w1GG2f24d7ctgyvr3HnAfaT3MBt5eFTkfbDLiKEc4m9QC",
  "key29": "31w2FgpcLVV9oBRw2DumRMEpfcYrJKHYQDCUapyDbe8Y4LMo9qve8GGhqM3n8TDEDNwRmULqtRybSM7bUUcFLSWY",
  "key30": "EfmTazLsrVj5jzhgRXx5UiJEfunKgGyZEcN7xFSyy7bi9ePmfDqPTFgwH6L2aCKT5LF7yxN9qhEV9pWQVFpspzh",
  "key31": "2KSxwePKPnUCY2mnrJR71YiFsAN6k8UkZ5X9HrCjPhm4V1UDBqZdGjMgUSpq3k2rJgh6ftUWBE4Kembihzu1BA8A",
  "key32": "t9Y7JerMT8Rkw5AxmbWZAs5w67Vr4hvTgGsofCAPyE9VCQxQPJ2uMBz8cBJaDoViXjybcihVTcYtSqRjARSb5MP",
  "key33": "3tfqH44cUs3kARm4RWm1ndw1NJdUmCaL4wuG61vTwU7zwRx4KmAGZvavgi6sFURw1SjLPyF3ixEk8sn8KZwznU5C",
  "key34": "4nMTBWwpaoTzVJfTVzrNsSqgu7P7GkmMxr8JbuJqXJBz9k7qCJfddk6geFFaeqXybGUzDyTUFpzdcjUbdJ3LoXdy",
  "key35": "43rpk9TecdgFb566dvE3riNEB2NGbFngY4aMzefLNTW8SJcLnSdR5dPkE9VFAgDCF6xEVpFSwbQfzQEA57wLdtRy",
  "key36": "qgr3RGvKWDedYgryygS36MGbsxrnS5azxVZkjY7WFuc7f8QQFN1snKcYtS3xFVVkiUnacga3TNyYN2jG3zxgWbm",
  "key37": "2f37ivSviDsRUDU3Y5ouLjAfG9mLjDttVS2D9dGKL7C7eutG988fU7FdLihMN3gbsgh3TZuVt81Wq2rMLMDpiuMQ",
  "key38": "5HDmE1FenzADfb6zNMfv2NtfV1sLznocchUzT9NgX976KDDA5s18g2fi1cypSCi8ewAKUL9eaGo5FnVXczjd2sYF",
  "key39": "hWzSMRNFo8A1F8GAjhecU8puS67u8N2DZowSzDqjKnUh2Ree5MSinuywyPrwLN3uq3hAUfrT87C8TH9uSBKM1zb",
  "key40": "7QtW9cR157b5NoiLa75YZNK36gT3YBGCyrLd4a3NKwRWJUW4bupGx8VbUVkpBN5NHAeriFb1syZAX57PidESDnU",
  "key41": "T7x2JUoUMamUShUzbcTmiAFnJkswdpPdkVxB25p9pSsj3mdrmGyQ8p4r4mXsAG9nWtVLF8USE3uC9VcXLRKPDMo",
  "key42": "2xW3fGq8T2CCnNsezn8F5hm2S5rU2kr2RCSv2DoZUBJGz8hn2jeqfCkVBZMerPs1YCXdWybtMBuS4C8NDWgjdSfx",
  "key43": "3koxa7X1gSbQYxRNebB9WHA563ANvv6KTfuTdStxKQHuaK6d3jKa8RvF96qCndRijABq79owg1cnbttw9854kiL8",
  "key44": "Ge8LNotsbHH3kZXqGDF1YMpEjxwCA48owNFdzvbbYMWmacqR3TSdM46fxfQpJuyeNdPvgoxabPVUmQ5TQyBfqFD",
  "key45": "3Hrmi1WCqLeuWRfj5hD8aSD4jk3myQnmdULdCRKoW9qCXEuXqzZrudL8ceVwafDjP3EjVm8yMr2azoy3osfQ9UW8"
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
