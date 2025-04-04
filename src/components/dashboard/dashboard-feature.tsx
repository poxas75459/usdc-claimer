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
    "4639yX2iT9Ujy5sAu6V1pcLoVTnSiHQhiFL3CkiLe9p3UqWyrwi8uA1ESSwpT5fHYnwz8vYA5Cs8xK5NvLJ2adwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sQK4WvYanXqrLNhj6x8nkyf82CyurFJwCfo5MjTkKCa438joVmTJogT9guoj2m4RiwAhTsFucqizWNEBFFUT7yE",
  "key1": "2aBsmPs6pLpj82m5KVmDpuN2XMxe168depWPvYdmBVsbmCDiHpf4ct3dMP2XPBzWQRTCbJAEwHP9mH9yfgi33SYA",
  "key2": "31JVb76LxL2HVxH3ZcnUqbJmnfVotqAan27p6sjRTt6PrTXKbR11URVsWrWCRBuwQEGq2GxZoCvWiL5pCcoVayX1",
  "key3": "5Z3FzpnVQenSt8XjEf7J51J2ugfegm4kqYYjR4oJJiFN1eQiYefbVr1yCduf9VfqaGvsoh7jDKwpVsHB2gBex5Cp",
  "key4": "5PGfWx3t4BcVtEaXsMYLzFSyd6faW2HT2boRt6xZMFSCo7KRCR2BXMhwr9htrKZ8Vsq7zQaMF8sEwqJe1iVHHK9s",
  "key5": "29uAgzp2qoQMP8TC3HQyiG4ykNCxg96GLKh4sg8kRpojJvLnKythzq4hKxdyzTorKBV5BLzQb51d4HEtzWQfzXQE",
  "key6": "4ZCzHApp1heyS4WB1ynWZjjRE569cvsnkhQrU5yXJZpo9TUHvvjeCEHT59HyAsnQbem2hAg8n9yiHBJbmjzfpeET",
  "key7": "3msVghNDZqLUYEpEQMGR8oMLRcwJUuggpx9NBhjgsqBRZ5ka5fRVhBQir4JYjhzu7vZyW3uu181sUc7ihQ64v2KT",
  "key8": "ftuz3B6kHZUxQcUy9qzKDaoorbi724yk14kPTaq9DYM9SwHQGGs9JhPpZJrfV4dwLv8f1rpcz15MHMJYMbKa2K1",
  "key9": "4MkprMhKAHDqAtrhwixFkzGy9Kw3LgefQDEvGzjNryZgU95FbHipGNkw6fQLf5xY8BLRrFLNGc8tFdYaGNFCrm66",
  "key10": "4yUZyAgK256Av72Kk9BuTuGqiAAb31cBjjJbWLnLu4FaN61bg4V1NUMXP3DLcvV6A2THK9NcDmCNcpnjBpuezQBG",
  "key11": "4DyzwGY9rhMwveuMupmuYkf6BEZypVPMthtoRrvyHagGbJy28VTgXLuDDNdYDMUdsL9Ww7CAKsFW5FzDYoqvUYr9",
  "key12": "6xARxWGd6ZC8kpMLhBk8DDBwMFPtnHw1mhLAv3rSvavKjbfcerXuj5SRNfrfGWDFSMdFLz6QjvpdnfLM1VSCa2n",
  "key13": "3p71nChnU4S5AV9jrThEt2Xw7DUHT2KciVYZmbyufTEWds4f46mfxVEKZ3dbQEd8QvH9rPd2MhEJBCQ3UHXhwQ1Q",
  "key14": "2bt2JJWdLnFrdo6qXTdikpxq4TfTuuYfFv9GZLhg6Frnu1ZZ7UVwpXSf7NnigeYuLcyjpXeokzvh5pZ5a11f1qG7",
  "key15": "2yHdWh6bRCduWeR2N8nS3q1VQXVYgWBMvsk9ex43PoNsj4hqzyuTQbN1ahTvuPx9nBCcg1mbAishH2NM2zQqiCLj",
  "key16": "tVdH7JZgJgT6CqRJqu4Y8iCVtXxNCFJqVcBHpn3ECPeYrSFtNuuo2kp3BVXVNuW98m6a152gumzyvBFkvmbuaq6",
  "key17": "5WyfxxBhdEmPHzzvXnjGkimurrWdzhkMZ44FqhpLHjtYWGQu2kPykXeoHW4zr6i3NpUPHDk1LCFuk5dA5nqRPN8n",
  "key18": "jGPZ3s4EuTKQC9J8Qo27sPFDK6hX4JCwkLTkFx2wATBnJyjkHG4BTfK1tDQMCwcRn8WNDMpeCFy3JRXAKz6d4q7",
  "key19": "438PtyLR9fLUh4jvXMLgMTYrCoNtWPwkDXdb8aWHhLBQZr6o5Mnj9U9QU79SSXty7AZN1d5xqiyPfJ4oT98ACoYv",
  "key20": "3eLZGqYMWFzH39gj4qLCtAkR9WzKAcEf5HaGYJ23JtTJPNDmRtHr8QiWfb1Qsm1dBa2qptWaBK5JDQFQPCJwKutL",
  "key21": "5VgCKLFDQWP8iGc9c6nyj8GQE9KZEujpkKv4iviqmHcnr2YbGTFtghkjxqY8x86kUZwEUV2H42q1k6W2FrN9WatL",
  "key22": "4WCjhV75Xc3Fhnh54z6BRydNswVNWNrbPxxzYJLwH29iNjtCwiYjot91RJGhnLwSUNxpxF1YJyw9a94vdJj7XtTE",
  "key23": "4w3AMrJ4jTdhRG2vGcPq9fTL1qUkANDtK4daU31JJbqPDnQ6hqBqx5P68713ZguUTTmzanEAi7cHvrsNoYgskPPK",
  "key24": "2QxbgpW8n8SDArd1JvwVUR3k1Uc7p1Aq8SAPEqqZRTDYEd9NnQ7SBivN5ZZQcndNzGhivvyjjrmTfYwfzS8vjcFa",
  "key25": "47B81GBby6maEBsUfM8hKyQAjSfTbct7g35TwFBYPkrHCujLeiztznWqLwtTBAAXM23TRFTU9WnLxGx5hih1adi3",
  "key26": "4xePtgTPj3tt637UNVNKGrsya26atVD6KJnULKe9jnTdtM7WvjCbrspRfTSrmbRuRB1dHHLbrTH2JRHJz5Nhjcen",
  "key27": "3hCVRXFthVZcW5w2KnPtQCaQWWYV3zqZzaSwyQsyTzCzFEkgrqNRYxyw5FTBrkoheaPfLkz7KG3uB25UTmQVYfqn",
  "key28": "58giXBy1hVW3vLm7EKJKJ6jbpXsPYpXs2Mznmvc5ZD1zTnaYmSb2ft9wnzNvSVvmAZzFw6UkkK1c2B86ZQbCP7Lp",
  "key29": "7MstSSdgUN253N77fo2z9h168wvAdk1u2bpWMgKc4S5AZ2183H3EdGqKvcSqirvXyQTRKWnWTsYpxtysyYnf4wU",
  "key30": "5XyvXMLzi8Uu7hLxsUR8KEDmTmUZajdi6tyXKsUD28wqrQsvVH7rZT5ys9BtzHGJ6MThfYAbboXAVHFZV2yz5Pnr",
  "key31": "5Sqj1rvSi56yBrTDiiBNsW4NwR5nbJL3EGLbQjLf1xDn8PhwMKU6gUYsHPvtiiuHpHqcqE63JtP7VMQWwZKWA8a6",
  "key32": "njMyX16QPH8rXnUmPCmBVzQxwuGAYiqwtyZjrXVhABAmDowB5rbf8PRtNvzdBjLUpJtPdHywqYEVngLToQ1espX",
  "key33": "4d92nHL8AbnTvPYBBPUpjUZAh5gx5LUvh7d68bH2K4N2d4znfVkwQrZgKaQZzznuiDW9z63bMTb9m6Dz57rz1p2A",
  "key34": "J7Vx9KzwdAY2nJLkhwoPUCccNVNgtwjFt2gt7pNjEMwWFWPPNX1Une6HDidrsWwztYyVAu5pEDHVoCbryBCanph",
  "key35": "2PDq8fe8zf7tKUF7TKSyC6ViA1MPJHQizhdezkhHqrAUAVaDivMimxsjb41VzRwb8KZcrKhpR25FwXFyLn7GHQRR",
  "key36": "4RtWq6WUWr9m7XehrfwVuH83zpPoQUGZpCxszM3RuNHm7CqRVN1MwehKYK4foY5zvq7MEMWrpGXEjhh153hWvF7j",
  "key37": "3LsVMdLTNWZE9jBbvV1kecGZtpcfFG4nuBkVwbScaTc799CP7RdAK3tfF4jaicUmae8RGcVzazFQs9NX5ro3RfNg",
  "key38": "2g5pfbEiS78zpnQT8yRp79zuUxEH89zgrHJGukPxTmLVCTJUtT87HoWb7LxJf64SPsELCQaG7CaohMArpWB9svGP",
  "key39": "4riqYVd9Hj41BksryFDKu8QNiECfuUPdRHoTN2R89Z4xRaneeQ8oRjUUHwjjMgKJHaUrpx1vth1e6VZsaEoE5sVQ",
  "key40": "4o8vVaJkV3mpDthhUT8YroiyPGyzKuhsFqYWrYY4AMygNLW2DWdsQQB9VjKBoTp5FBdY5h5rNoZZ522Whuwbp554",
  "key41": "5YaC5LUg25BYWFhNADRPR3qTKtN5Tyj2bYoQUuhBNxR5fPndznJEJyBFpCLab9aeAz3xxngUhvVxxWyp8KYrFSVb",
  "key42": "5ZqujPCYxqdG2gkVPScnBqoWj3XTBp4ZwpXQXyHQM2DArNV97HF1E8VJDbtp28BKoNQLcWJsKHSbYCBBgPoo1f5j",
  "key43": "wRnpt59VjrkifnmHBCDKb8e6CF9V7daGwS1ihgHoG4JgcAMTPFzU9zDuWWhKHUXgtz3KV8poAx8kciUAJkfR2et",
  "key44": "ZB43LfWA9ATUH6vP9uZZHz3wN8mb6QcuM2hXEAXREDwB956KAwewUEWnWNbBUBbXRmLMcqEBiTYELkXHb4i47s8",
  "key45": "2bveUkeqKrcrnG8VfsUc5XwTWrNiTPX4sxa4jGrQUFWfEHYFT9djS2mdkFy9HtofbmnMfx77SxHRCiq6SdELd1Jz"
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
