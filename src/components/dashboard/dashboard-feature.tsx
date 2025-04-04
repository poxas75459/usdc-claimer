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
    "4ooCCEnfiSRunVbEPSsXT1xTNU28V8oBdh5gMV6EDrVFVNupCC28Rr6Tup7oCDZaU9KCwa9cpmcf1F3WRAzcZEHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NdZ7eRNVgjPnBxRMFbDYpwgU2Gk9JVMPhKcRwiKagLsEFLDgedXYXoEUKruGE77oqYiW1VjXgygxuopcmxnw7gc",
  "key1": "4ApkPNxQ8MUiukR4qCxg96kRy7BaGCspgb9YyAZ6eFuEJXFR39rTnqCHP5MYw7MUgqpLsedKKhP9MnxnKX4nU4s",
  "key2": "4SuUSP7AyXZse8NTrNYZJvQUV4HEfLYQQBdvg9QCVq3aGbyG92gyY7VhJY7HzDD8iU5Ee88iTmL86STwVrCDFHDu",
  "key3": "reRZCDmgFHWY5Js1FYaeGqUY8D27vXsMt4hEWHWzbHvJ4Vjps3SGv7GEpFXSNCQvtcneAoy2hwD5dajJ9oCk17q",
  "key4": "23JJJdqp5pP9YdMe5xukEH1FSzNj1cNQruS9NCbKSFKSobybxr3j8TNyus96wRZtWg2vMKPc97b8YUNKg1BoR6kn",
  "key5": "2kstZTP4w8Z2E8My6gwvFM9wt1fKQwvyrzkvLEcjGxT92wKsUreyGo33bH99i8vMyeATQc1MjjcdMMuU4ECn3NTA",
  "key6": "W24utLuhhSxBjkGMMu5XdLCL8AaiQhyKZ8STJvn7hxVURggEuMja2LVeDTCcVfnFq5XJMCtnoAHNPKjbXN4WhqC",
  "key7": "5Q2ZrwZ2jiQ2gfvQNj1GgQGKf5cg9JPqikJtGthDJN3LiwjR8DDQk5eAqUN3q4wdsVLg8ZUCZHDi4pLb4xBhcFTE",
  "key8": "5ywz8xD2iB93BDZsFmCWnXKaY7Lv6VBcDoVNLXj8ugb8x1zMaym1pH8ejPbQrPaV4yFM4AdTub8kJetdzAwKFu5Z",
  "key9": "5UqJxqRn9pQBZ79QtrWaVjQ2Vp8ozGVozP1ZRBe877CTpT4TkNSavpzP2SvabJjMg6STzFkLDtgTsSwjafXHt6QE",
  "key10": "4uaq8JGUR6bz3GeFWn1SbajmTArDHF3is1JpzjwCBq3adR6QYuZM3DSDkrXaHoG1XDHZiEhX8QZsyoWipMgA7zPL",
  "key11": "37TfEJP75CbshnTCuzJBkMdn7SVmAJAYbRqcrrT5M5QevpB4yRnTLhnR6PjGmTdySyEGifBJVdxsCvapaUfspKRX",
  "key12": "coTrkrwaaYCgHDCyepChq7Hv3XHdMLwMZwLApkhyxAYzH9HHVviojarGTfd2gaxvSev62cnFbHANM3SVzy3RHsA",
  "key13": "2Enu558Q3jjrAeTrQEApLSq1zxHgHDhh9tE5P9FkgHP9YtekJVEKgsfgxnupkeRRgsFGU9s3qvPLHx7DJiApkzuh",
  "key14": "5iW53Gjns4GLT52uEZ7UmUAJMEFAqd53GDjon9APNksCZ6ReTCRmcqhW1SbevozMGkVYursYiPo3dXJx96rpJezr",
  "key15": "5VdQ49Daej2jG9oGwpQgee7nuAG6hz9x1CWqoEqhBZd9k5K1wijhZp1Up1tUPvHwga6p89HCotyWMbvm1yQPAk7F",
  "key16": "29msVtrAJqeu1ayQmZaZcNhdbdfL7oKeiKKQyr4hYTJKu1YP6kKNR2PhzYkS3PJTsnFaxgvsRJDEVruGSeZ8fpdT",
  "key17": "4tGQRaHUaxAbwpnuNkJZMoDiMC5aKhnK4WWocyHYpUM6VUcpuvXXtprME67ZjHBGCnbSQrjVxcXmNGtWMXs6WzTM",
  "key18": "5QehABzDu21LKBuG4bBypPhkyW4rPyH6wHLvzB5MYQeniyWfm95YWXX7MhdosSrhFzzsWZ9yG6CTgoRb7NnwAko",
  "key19": "4KMgviGe3XYCFeDrM3c8EQQyD1W3S95ZcuL8zMK8QRuVzi9Dbysfg8en4qxVpiUj9UqEhWDYY3Ystq64MPdVLpPu",
  "key20": "5JqGZtGTmKC5o9LrRfA4C8bzXQRLk6ovrLy7eshagzmpBJFsgHpxAxDUBGhpo9VbkCYfucRWyRvf6MHMzh6KUP5b",
  "key21": "3cTL1B7XAqmDzvVVScKWJHW4cVYBQPHYMDxs1EXC3yAh6KfK2GLDmaBZ6M3FhVs1RaV7CvSJrEZd8yjgvTeXZo9V",
  "key22": "3qfxQ5t7hhN2gCf7fN7JUd5KnGtjyHikxXbUBoCpPgy4uPM49b4BanrZJdEgZwpDKuZyPw2qhCyMtjh1Hj563T4Y",
  "key23": "3XHydwycQAeydTY22RbwEi43q51pob35mD77bpvKvUXNdkMZeWMdQdXwP3FBy7Sj6QpSrF8V4vfx7VHQNENBc1P2",
  "key24": "2ckz5rsu2mDacCtQaE9DVx57mAMazgwVsc6opujc8kKuiXPAafJqN2Y5n2i3spvaDRgRSHZTLsM8Rz9tR72i32s2",
  "key25": "615fjKezhbNHkcSxVKT5EDcLoYiqFzidXAVcMTdfJ5N7b5H3swV1xJCxmGoNsvoWYgqiHnqzoLTrjmAfL9S1qcFN",
  "key26": "3Hx4ewqcbptX7xJHPzwJVhixAkN7XxHP4VaPuX4scsbHVtPQqFwA22SMkNjihMbwcfJzQcEotkYT5QG6nNDE1zLM",
  "key27": "3Eh7uBnALccVFNY772NgsjB9opCcvJnpUmcQVt8pMVfHrgvfVydBy9BX42ZhtG8qNj5YKYwPhq6uiY46hPtcgx71",
  "key28": "2hrjio2Dnf1RuWkwnAxVy4A4AfHkuuACQVQhDS2RnyaVZsjFMQ9oFJ7ieeZd8krQfJTd4imXpyyuyqWcMnc86Cpn",
  "key29": "uiT2x1NhfWbCmN6RkMizgPTkZAmCsAsgeeMALevjrkw6fY6cscs2sex41j1xQv9nhuyvpMZfTQMn4FHbo49Pc1A",
  "key30": "Lj8QmDJYWHGkCUWPr5gZbyBtNsKT3Y1oTn8wR8muJhfPEeXNZ77FS6mB8GvYb5mxfAcDE6V5vQDcxjmtFbNKFzH",
  "key31": "457zyhcd9Ch4CKW8fS84DSqwSSkUo2PH3s3hNZ825epqrr9ejwdYRmfVt7f9cB5q5GxKDquVFz4U6hAinkpkeMNk",
  "key32": "3CUr9LyzZR2weghEBTmxoEV98YDMM8ngLQoFtX7X7SGZte25HiywA3gPLsQjCrHVNBzPgLjSY2fCcKkcGTo3UHW4",
  "key33": "3jFFax9WM2AtN3f42HhdG58CB8judjmDF3kYNY5YUtHwxvwCcnwRkd14NJrRUsuAgdewbaGFB98L3iU5Hik8YRRk",
  "key34": "4DxLJZpodaVDsSUwC5rtV2MzfwYVJeXTD4hyJKVgEhuqfQCoREHcmdspjbi6zKTxWMcquNZnq1iGySFkTeXjmpFp",
  "key35": "26a2ooWdEsaFWUhLfbuDjybeNo61tbTHSgcjP3eWVZmE53RuQCovVUaykwZ4GQgJR23j74vLzN1bKFQSJ5kBtf67"
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
