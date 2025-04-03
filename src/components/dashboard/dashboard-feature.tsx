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
    "55p6B89KNQ5detAqLuRHgFYeLu4xUMapxzetFPdwMTEnF7UNndxAnhofu9QAP4ZCtfpuxgHTm37XXnqFPi6d3X3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qUNovcExrccub6J2hrpDyF2fPzQ3AyjtYY27h7X6GE1qDLcbVH8ZJsQX4AJ1NtJLpMuVYdVQj4tBvezaqYJyErb",
  "key1": "2zMAddgzAYN9ejs7joReaPg6y6Erpgsgo7gtk26ikzfZ9pXHN3PFZ1w65hm9F3LCSNSDALhsjnaRvZUwn7WEttu2",
  "key2": "3sPnpVJHkYqkJLPtoibNCLHKg3DSYVVVk2sEkMtim1pNkjaKbg3pFXBiyzZdT6xCqQrgzuWuN7ysYdQ1N3AwT8yy",
  "key3": "5sV1apXduQRTKQk2og1wUZiKDuwyNNahqoipnZcCSUce4TFrCYEHTwiMq9x736zT5hDQ4kTC5QMfLmVetK3JwVkL",
  "key4": "3kHcBbRmbDG1dg7g3vbHD2Ye7PFtFGCEXqJfxSGUaKVamCD3FP18XeQ1jEuu9trGWuXvkkaSA6q3hopq8mFCxB6X",
  "key5": "4Lb6zzaU9xRRziVfuL3kE3ZJj8ZwG2WHgkrEAJeE9YHqoNmHsfrVu2eaktUDvxETNWfJLFbyQvpiHNsXpEiM65M4",
  "key6": "AcK9cZhf1Ptro95CySDvwN2yX6SPK4Q9QQ9iTKYjqfSWc6w2Qk9cJfpVnS8R3b66jjP4JbZXjRfVXwRMfAJ9yTr",
  "key7": "2EhCVBGaLK6nVvMu1o26RV72SubzLwAdZyGyUU3zMWcWwvdc8nf33hFC9z8adPPdQc3K7L6XNwA7sKnCfgW5Mr8M",
  "key8": "5Vviyktsb6uE24oT7r94myi6rgtcNqkRPtKJCmrFRaWsNssLBTcsRVrRrsRkA8w32RY1yQ7AicpKujwNrVt79DJh",
  "key9": "2pkNaX2jsdf4R41TpmFoEAzGq4uxqphJxkxanAy1rj1JhfJdXH7GWdBJ1qCTHSd781yfbwqPn1vxe1NqcyRdt5u6",
  "key10": "g8VY5tAfZD49m7J7MdgAkHB4bCnCTUWG9zuMKGf6rnY43sjYMr9ifky8wn1SNS1P3X4K1FfWh4JnpA23WuAFB1B",
  "key11": "37m8kazQ8Y4K7NJNDVLTdsJLjvj79tiiq2tCCdkwzf4S9Fgzbvm7NFWfqiZvnUJgcj8Z7G8rHi5w2fZ4TnZeugf7",
  "key12": "5ESwffNha8CBDsR1RrHaiE5DTXMkhyAKtZdfH4awNAfP8ARnrixppXd3XpmbK1ZvhSePEhgnnfbMZLt1ugRAfyiy",
  "key13": "5Gg1jbXs7BEgs1h4bSxXwLApZhP3YYn5ydu5UTQLJzYnZgLiDGewouS2k6bsZyKnGnQNRxhCe5mbg3h2VNAoRErh",
  "key14": "2ACRY93U8VyZhe5qDSdmjSNfBJQSV7eSssYSnE3sL6Eav9BU9LqJezczkkSDaK8wa6Defv5VrpRa5XvZDbBPxakk",
  "key15": "4BWFW1xNTC1ygBHPAqWzL6KCc52TdT7EXKYxNb5gn4tQjfBCNLrtLXJUWBXfGQ8UhkQP2rD2PYtcRnrWEr5ZxFnv",
  "key16": "5dW1CaNdzDUiddzRixMYFbP4g9A2o4vQ3q4hkgA4w9SNJAC8CaCTYgcqTHWbm8faiFGeG435ScLHepw8tCTPUiPi",
  "key17": "4mQ5EgJZWrEqangX72FKKPePXsgokd8zh2oKDWvzYLqiwx9djsgLaRrUY4oeaKLL8q9kxR81aN1cGRWmvd9HdDi3",
  "key18": "53vMRqx81nwzCyzSi714muXxwjEtCizjyeBgtP5SurE9DCxRbk8PZbj7j9cLmLFiytx8Q5qGqEjJvNf4L7zMVqTC",
  "key19": "5ynJomFAUZnShSoqRaFA2Yi5nFeQV7S77Rh1jBTJAvP75VLJSFFwevA1XV4aoSGQf2iAd7TzWybxoB9xi73NBn7z",
  "key20": "CwViKCyn1Xkef2WVcaReLJzpzEe3pqwiMhjwCbqiBuhuoTNjySb9fLyiL9VQNJr8Jp3QPSkuWgvV3vEYgddbqRN",
  "key21": "5yr29yHRnQuftr5UG9Z4RwFGNaM2JJoAPNeTX3onMbNyLXdXtRspcmFxoRN2XSt9aFNTP1ncMi5aTpDYveP6hobs",
  "key22": "3eu8h7pNj3L3RQ9HXawZUyNX4GW5uv5GoA42mbiRd3EEhJXehVQtact1SGLSGfSPPXbsvz5JmNLPKkHZ2ya6EgJ5",
  "key23": "FNmFdEEuDz4neNM4UGqVtgeSnKyYzVACE9JQCbHZDXZhx9YoA8f1vHA72fEX3RNL7TK7X4A6DY4G2pHgVdFenLt",
  "key24": "2gkREMdnmxgn1xcka3fsU5Mro7Ff9bVSkA7aUTKNdF32VCDZzjiq4nNKKJCwP1SM7Yk3DTqP8wDn7axfGrj6w1hc",
  "key25": "3E1jUV3bqGWHZCzE7Eer2XbuiFo3vgV38yWRKUqpbUaM6BSL1i4SmBmPW6qDMjT3pcQV7eX9r8uJsGJwhQ3LpVqQ",
  "key26": "5TXa6KTdreVp9WMyAmyogN5bsdM5E4GNxE55u4cpxxTphFr9tySgX7s9FeKACaStU3xX79UVoTBhpRXLehSL6mxc",
  "key27": "2qeZojtqtvMEHrpTKzEhLjxyKRnSCqCZXbAMVPq2rNSNnArZ76g1AYwPPod2a6RkKN4YgNB7UdN86iSw6CYJGVna",
  "key28": "39bKUEsWeJs11Rmvxu8QB22fD98J2KKDpojfhUZ6S2yv3JA568uL4jmeCjE6HVxaTGxspHfrR4Tfodnu1jqns6fd",
  "key29": "3UWAhHaPD49gBZLnwonreBZvrchLqzyxqAUtPCeM5G5tVWbNtjBKP9bk43Wz5Mvz8GZnBZR2JeX899GdFhhvJAuu",
  "key30": "5eRVcJYRqmg9Nuigq9duh3aJvesWUJYRmC8WEzsF6VNk4LQeSJiFcbJtACrBFE4K3v5Tfw8azx6qBj9ooCfxLsar",
  "key31": "4dHzWC7GKkDTHUYvcDnGLqjTpgfNBomVatzAnpgmiENrF2XJBygV2M99eGajsXDqR8CJaJay1Q92CouhZYwSW8Zx",
  "key32": "5i4DinstZiHNHbyJV1uN7o59J599aJFXmYbMTs2thJid3a6yYNvmE7Kj4XKo6t1Na4hDka71g3s7xJqxuGHW89Zm",
  "key33": "3g1YFUJ7PpXx4iWiuVQS55Z2FrLJLNQDTib4WYAnj7XQqa9SxUuMMfN3SvKhMRu5BNGhsbSgNtTSEcDZLBsqfWv7",
  "key34": "23r2hSVuZPFNSxnvaLkGPKVDqCj8zQ4kaESGVYzc9SAY6z2uDR2nJ8ziKVEm3WzKxq2LjaJCbwqqc6EBzp8bFa5U",
  "key35": "295oCHYkbRgy6AWu3uhNWhyt4KbQ3vEioG37xnkUnXKwSyj2bFkQRg1ua7zwbLoVvhopCStZ6VkjKNqxfqGwiu3o",
  "key36": "4KBBoZe5yc8vJ4EwewJcNTPvzMejWWnMaLn61HBYjjjeqwFQ8W3AfvabQL6fitJvDErbFCamFST6kEYgbdVorfGA",
  "key37": "51FrSuu9F15F2V3tKkYqno6tiavkse2nvMxkaihXiRvtyHrLvjFuKS4bHb5ctkF1MY7b63LE8cbMnckCuq8Y7bE6",
  "key38": "4mNzV7NMx7wdX6GXGk1LmX9YF5rbjqEWUfpvQ1DG1rQ2kr3ZLqvJwqwGxTQqotGZ3PtYwygfsjnxXHd136BWp3bm",
  "key39": "23KYXVXnxooEp3yzWBseUa1y76h5sjAP7ezqaHPJuj9TBbHDG19Gfh7P94FDzzdU1vRWKA7foEAGjNvnBgAMAcnG",
  "key40": "4iPCfg2aJaGGdcYL1LM8bzn4ULrFHsSDjvncwQcpNNyyeBg17i4nFC5wKv8H7xo9qakQFv8FfthYE8UczfYAg2My",
  "key41": "2VyPgXbf8b7aQ7niKBG9Mr222UJvk1rZyPiC5yjvUqjdQAXmEnuNeKM33H6zo12xW16o6LrqQPRHfswWRJ7viktn",
  "key42": "5JZAgN7kmxBvpT9BHLmXdjFdjqavBZRXX6Go115GD1Ju219v3VgdgdW8LHWfznafyJcmLbq9sJxyhBLWe6q8E1EF"
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
