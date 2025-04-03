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
    "2SiSiwHyJmrbHkwXSbaAut3MQY8b2bSj5LV5M5LefAVvwxx3DUYU8mXctNKqfHQmHz599sH5goSictYUaBi6hbi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36tJd5D5A3xBP1P7BK8HKJ8nsyccBNnrG6C4i6gZghgA4PcWpUDGw2MePGTeWe4zeDL1g98QtW1YSzW1SEyHkmcQ",
  "key1": "2NoP6KjGT9tWoxDe9ncaGRMzvutwqBffW77FxRnqFVPwJmTrYhXvSXe728aggDPuKAxyxZs5NkZDSJqBeG2N8ZqP",
  "key2": "3oQ3zSDzWsvYNWtmB8x3Kr9Xb5m5RpQkrnaQBbzKCfWnWqwsfWdZpjX3GFwna7PyRbx8TyW2byjDaqJLLZFFofZ",
  "key3": "4bSKycAFVqEEwqrTxQw8SoVFpVHT76U8MNYYk9ob8MpsVigJRx4smJdUmtQEsWSVwm1aBbPvAN7G1xM1c6v5JpfJ",
  "key4": "43HVZSxGfkkDpNaRcEXMyPSQe5D3FUKQDwMjb86wJZmpxtvyjmWGzoZeQso8H9f9gSodMcijVCv9HMcfV2L9JCCA",
  "key5": "4dyNE2ivmG2Zs3Ym1hNFZRKHsmCd1CcVHLqaQbKfwPuCPcK694QzSAaVeVYNgFTJg39FBJ3nkKaWEEmMGH9qGMJ1",
  "key6": "2agw1ipRHVh8aNhVXZHYobQMrEcYL6cR4KCBDvBS2qhtPr63jJpT4KSay43ya7mMPFPZ6ZuD8hm39SY2oXnapdfV",
  "key7": "3aXHhG1xwSosuEpHEnj6gWpizr6r9yp2UeBtZeeVu3VoDUykoC4Pa9rdGJXyEGLoaA9bwVZzXKjGT9xtZhj6134B",
  "key8": "We6aYJwsxJ91V5ibumrL9fGpeygfBzsZFPPRYEdcNpc7Dut9hRn1gS27CyP8NkBtXyiaFBKuEqQKpSYMckviXyQ",
  "key9": "rZ6T7ikhQTeQHGbQmcFoawhUNdptKeQ4Zia3iivcBiCfSoC6VCQLUeCshBrbPEo9S81hoeptQcCDs8M3hJcyYTL",
  "key10": "5hP7bN8MZJTCHhqKkiK61e6qJBqZEHFYchFaEcp221kKXL7zGxU4zg6W6XtDu9t9RVQCXeUaYPw8oke473QVW2xs",
  "key11": "Vb3kzFvfc4BPuKtyuJz8RGwVT5Yk9qLHihPthpsgxo8uaB5TWMKQHYTJhKX1HnPzbZCWVkEAFtSfaq467hyh8CP",
  "key12": "tKmtCKEgvZXqBgNNfiJqTDrFakewMocrb6irX4kqNhmRCm5w7BHBGwV48oaeS6K7K9C81NJc9Xnpu59GNzqZWGQ",
  "key13": "5XDzqcuSYJBqzFLxSyFTMKG5ntBrxBPDY11BT2vaujzHHVYUjtUXGyaFeXkvfDieaeh88zeAiCE7D9RfZ9pjzYt1",
  "key14": "2oDf2fVBNN7YF9quNn235E51RH9L4urkECNYvctNHfDcEfJNXYHEz8JHHos5obzgvpo4mpmjGiWLP8dkw3pjksRh",
  "key15": "2zXyH9TGvk3i7V86jN1fGfKiaKvwHuroUHNVGE84vrZKwVcM1KQA3BbibsMWVdbwKKoeMfzdGrSpCrJ5jgdBdFfC",
  "key16": "4DbBSYmxhvSw3ttPJW88BaKmv51ifnkxj3Cmz2WeKimAv1VKYS98iSEbM7QWmkmcFmEaif2B7YBp92oCvSVBFbpo",
  "key17": "4LKMy8pR6HZjiH49XvHcMo8Ar6qhjUsNBtwpwduxtJKyNLwStDLXDDk2kSk5YeubJBKvTt15tndpbYctLmVQeGW3",
  "key18": "2ruXctMLqWcu2Bp5FKKAExfJRM33ia5cDpYSmd7bcPq73HPoXv2VevJftZbgTKCgKXrZKMkLpcyrBw6ahn3i8qJo",
  "key19": "5Ntdcne9jJHxiD28Cbbt2jVD9tFQcgjyMNosQZERpHhoetayGK445DEhg59RXk49SkC3YEoFdJQmzEF4m8bAtrs7",
  "key20": "4tMBup6mRxkBECnc9gJBoZrt7tJbc5rfZ2EudZvpQkmT4b6221mac16QbdJ7BfQX2CYHHobxrwThx5oFpvjkKs7X",
  "key21": "2KkP6WU9G9WNiuWG2fNDLRJJDrnwpBMTqk2rzJGtpPusfD8JhoU9N6NwVvn9BFp4LcuXLB5fVcWSB4fxSqeSbXN2",
  "key22": "2aZSwPGcd6V5So6rN16rDwXp5Wyf9hkCJ7EXSpVNUGDWWdezBh7XZXjzDJXop1ezJgAAAUfcp3TCcJf3fiKEmVsG",
  "key23": "2ucRLFQwMrvJKwE7MbJjzqcdQL5PCpv1RZcs2WcbsVP8SdyLRLpfwHCfcv6Z163JsaEaE2DFgAuyf12pQB4aG9rk",
  "key24": "5sMuP9jXNGddyuFFyK1cHDbiqKvc9LUjHyEXya9xupwzuJXiMorUatGHqFs3YZzcm6XcApyxrjgEx3xpBwPhZYxj",
  "key25": "2Fpp7pznCdGTUmiF1XUjVX2528VQxX2xaVb77gaTt25xUHeXqi4Qp2y8AMttSvf7k9RPC7eRNr1uUNvCVfk3rNNU",
  "key26": "3G6fnmpzU6PPPonDXoUew5SMeN4ABNK3NFDdBAapW5bzfxLp8PtuzFGxU8esWsSQ9mCZrBwLe9w1bBZosSQcXKkZ",
  "key27": "2xdpCR29RtXj7bUizT87jig9gHXntc7dqkhBtn8AAGSxw4VxzcfJ8qt8gUmTuWQUzhTeLNSpHkotWjg6T7mSsKbC",
  "key28": "4Xj8UpZnwUBeatDoPH1yUjFcEe2tMTwd1z4FKPqZoCmZNzZhMuJKLbbjWeTjFzrygZ8bRmEUTyZeKqQhCrPBejeE",
  "key29": "2MTrwyDpHbXke41XLD1N7TccrgagSzePdzwdfSGkngatxucjyybADWLiEqzL1vw6saAdxbhSDJ98TxaBzffuvpvK",
  "key30": "5Lsr7WYLTyVa2717ewV3EegdUPp6EfhuqzVxZpN5ugZZLo7KkwCWT3rP6qfAMFqoPXU2xRGKF3YVTbJMCPRq8gwc",
  "key31": "JNRNNDgp5dBGyFixid67HhYTbxjA3HRu1fwvaZ31htCrzdm8TtTcnF93wuNFU3jdT8kYpR3h4S416rC5XHp13EB",
  "key32": "3fomrynxqaSyW9hN6odsLRVi2fYsuE1u372wpBhEgYjnoHyVAKwVu1GLq4CAiivbYwEdt5Ffmc9eCTb9NY8CiX7G",
  "key33": "4fpysL7BXgo1ZWncCZCP6ZEjXBZgpaqjJDMk9kvcREDRuXJK8YHWRHoYwB7bnwj1G2qewqN7nyzuAZzGzJ7mHaez",
  "key34": "2V7UkYAyi24mr7nbuNrs6GCWqSkRiU5TRADPfuWpjnCxS8zfWaNuVGwg9MfoWjyDD5veZ5hLhgHHCsTkA3cY5h4E",
  "key35": "5Dq6yakFm8tDc1boaHC1qgh6StmSv7Rt2ryevRCW9JUE4qkG9EPmFu5BsPisc2ff3PHQGsHwBXuRYjbmGusiAfi1",
  "key36": "2wnRCYmidm2yvmwYAQ27R9CCNSv3yFAqU8cB9dfFqmtnrk2xySVf4pibXKyDnaK1qYdZsiDUKtW9j9NN64fDpsJJ",
  "key37": "irCocaR4ymz1Y2d1BiwhXoKDXAHApf58oSvexQdqbr7Vo6H6X7MXw1tghXnvH9j5MMynUJydhgJNBf5weXKE3Xu",
  "key38": "52BXGH8hYapuAkdw4i6xzkpRRMiSdkL8euu4tmaqmk16svFSKKYuvxjRc2UEc8zzUQs5X5jsPRmNMxEnyordR6AU",
  "key39": "5untwRF16vgQEBjXequwQ2SSrfPwku5cUELHioGVo6N2WFkrrdjWkiyTRzPChMwhPt39WcodZTEwi3BFaThtcKHu",
  "key40": "2cALMTDp8dEMJe8KKiGCQFq7WTE4hL2gGgzmrULece41SnZ5Xfx31YDVcj4FNCLhvJsNqi2EqVy9uzYzVHGhYBMc",
  "key41": "C5P8fWCt62CuKD2BcY8CAG9B2uQu9cHdy7rALS3JiYp4iNPmmKYeaZYGzXhHvZee5SvQBy9KhQJHbRTHcogh7Gg",
  "key42": "549wKSmvBPetjR73kgvdgKJXZWYhCczBi45YgtZTbzXEGXzNAUuW6sV8qMbHNRhVJNJKeYGQUQhcGw98BNzaptHf"
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
