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
    "4pikRBNK7bNh8qRzkUQqraRaxNr72WejrULP5TBCq8m5rdKRkz7jknVX7G9rpyKdV5psmmBFJtpjUy15eZvMaghm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44pY9rkpqoucryb43VcieLVuhF2a4jy9tivFLcpwGNkbXZ6YeHA56wTWVF9CFGPbT7jZcUu1gXhNpuw1rKMPinQj",
  "key1": "3ozPKAza6Vuwx6yqrAJLZNVtZPnXW7MVPfAL6N3jUiwpDgA2JbGPTs458hPsAQGKcrdyZ86Q3sXi9V9ePQBmjTX9",
  "key2": "oTVDq7vgu9kN5PyWnNbohq78ZMDRxmY2qKeDhdQABqNZVjcyXF4jz83ZoX2VH2Nwv23R5781wiPEfoedbLufa4G",
  "key3": "3gmnRqMNSN3fPtDDVFFKj2ibr8wuWRLTKveEMERBhHg5XMFiVBSewspMFVsAcT6CfGtXTB4WXNV9Z6cHWiR3pvke",
  "key4": "2G5kBoggQFrGeb8VwzwNQ12tgC6i9iMQn2H1AM6a14QvToyEj3H2oCfkGyvCrAm5hMULWD8Lm8Lkk1TPAz3aS7uh",
  "key5": "2ANRgkcMJx8vrSUFxMoiVD66SrpCaYuqEqmJhzisGCUq11GRF64jmeqhj2c29puAkBDJeYNPYAxDVcVtUYCRdM9R",
  "key6": "3TtdJ12o92a3e2kPcGgVA3VM2eYFLZNkQ89sNjFhr97jJz8wjsA7VYo3bSRsgWiyoUVnew43hX4twFcphypo1gs7",
  "key7": "5dmXyKRQrwJNDbktYH48XSe4qYkMWpTpTYXTPEtcFFvPYixC7q82hcQmxGNFZsL3gbij4YAsfK6XXQYVTmANmtor",
  "key8": "2MKJNHmk5um95CsB37AmYTyXhssTYtbA42cSgfCepzpMYGAbaa5TitqRztD4pJLyUaR3TNvyWM7xijZA5CgxfRGE",
  "key9": "5TNcWmUvw2TRw9YQVREe9huPAoxba7Mm2vYttgZJA8x3xGtTT6KtboeqdJfpZnQZjdABLetR8PQNntweCV6ymCtZ",
  "key10": "2QUvwkNxPAiKaH8cm3u227bfcaEgK92gbDykdvPXRt4RVLH8XLXz9nVFG2ohhXUqi8o384AUBykEo1zrS3hgb1gi",
  "key11": "5YF4js8Z9QDcCKkKCqHSQfmyYvtcvez9mQ7zus2CYdddBNAKmVbNmcku8E5Gx8KSSv2qnp4n9yy9oLh5TmBeum48",
  "key12": "5UWsbCcwedkmoAu5KMMYK48wdDpP8NZwu3JAEaMCGq9gsacoNJo1YmMEpyHBRaKSJnVxUUf1RtQLzgygp6XWLqm6",
  "key13": "5ZdCSrQdZ91PMdGcEomLzSMRCcDADhS3JNu4FsMjHiXrqn6CxdiJzJrws89X7Vc5RNgn4A6TfEhtXvaufUbbp9Xa",
  "key14": "ei55Lygp9DGYNTbcArwycZY1vfH2AtLxaATGdWgUJB5MDGRmoZfjWMXEdL5eBVj7S59ZfTA4ENNTcAokNv5coTT",
  "key15": "3BPsTWBV2Rz2UudbPr7bmbR62FHFsoBF2Hs2Si67T5psteVCXoixEUUUQbfebo1EGhKgehVXi3L69NjvuCSiKD33",
  "key16": "5p9LBACrZeWd4f2Hcve8c3zRDLjVXGrieBoPqpad6zxYfUPmLgmGg1mUJYrr4RSNM1QNCKrgRpJU46WUvf6gwVeA",
  "key17": "22grChVHXfhZZKoNPDqkL9WT5RknZKMu4vLomkyxb5DCrVAC3Mfea32orE391E7WCh5rBU8PcaPcBSqdNRnnVCee",
  "key18": "4faopwJXzsehxQJh9MXGVm3A6gbCGjUTiqUhBscBKUBjPfYTaZxq6UCFcrb68yCtTf9odupyPLFiBXDGqxjL3j6J",
  "key19": "33R9bYoArbQh9zuu5UTLySMFF9aYsAr2er8wD5oUUqwMNS5dxsKfJLGAtTMVfM5dmJqRTKNn3hCTns4gV7g3gR59",
  "key20": "ysqGTDyEoj7JUokuR6vWogcJyNBonGoRPLd7An9KzHstwQTsgS1pSNwLig3NuxN1p33BXdTPPX8ZriSHiU3Qvsx",
  "key21": "4dHpecEAWj5yZUMQg22DtHMTnCZcwijBMf9RuRiNzktmDR9ECGbZRw1MQzFGpF5LbYrE7UVqnM2wLFNZPhSUDZsE",
  "key22": "vFQsdwUupFCa22RH44so2gtWkB8EXzVEFLXHzG17wBiFgtHBDXGuPJWmDpZBodTA972XxRXjaXUQ3zbzWwKwTf5",
  "key23": "4HN9U6XLSRBxdRJecg58uSs84fc9ByLE93CJX1vEVbX2nzpccEF4TfQJkoMxw3brWkbCQjEFkNTApdqhEshdjUQp",
  "key24": "2iRhNc4MYCUa6xoFr14DSZsfcAgEDAdRHq51QzRwCp8f6zYF7NtjXFTWMBNPm5RVCK5Lw8T4UJnjTjGF9tEFUo9y",
  "key25": "5pEzKGhSuo1PpGPGF1xbNZ3BRyAYUiwukgpPzqak14jENNEXCQghRgAoCs2swas9Jfx7aYVuRRpFJpeKJYo4pebf",
  "key26": "qUDdeMzf4qRMhT3YWTM1yAHPDfzJcgybxj3Dq1yVTMruMBSwJcaUUfn4ad9qk299uwc4tDQ8WraPYDAFTFrYc4E",
  "key27": "4STMRiZ6QrZHSekqueLP4KNroGUbye1SmbQ14R8VV2KCc2AhZ8qZeGhoSXk7DzkiuTvwEWjXpPtWz17DZ4iVe2Mv",
  "key28": "4B7i9XQxG7DjqxYNT3uYTb2FszrBGJDLFvvdDHqJrEDSqbs76UUVNGpKoTmF4RFtp54PwsaK5g5x8eMMvYwS4gnq",
  "key29": "2vJZZ6nt7Xw7Y2NKKcVJwni3J3BTf79sN9DabsKVEZ2PxcKQzp6BMyLw4g6VAkuiLXCa7KVw7jaX4S8oUD2ZGVX7",
  "key30": "3YHoJcLYcpaPD1SM6DLjuXq9NnsuUEaPduyzpcj3t4xVBvrdbFkBai2j6jFSt7nkgc77L75jxw8Y43FHjhoTVkqn",
  "key31": "e8HkA97mesof5wmG6i3Urzq8whG1LTxNEejU2KhCWRZFEHThcXkAyDa1TYwQaxsc9T2KzsxTxdQGcRiWu6JBFDj",
  "key32": "3uCLrYSS2rZMLNEKBZJDfBFNxQVEXqyP6h2LLDGHaXZo4p5LnHMiZkZQDUbTKbiG4Stk7eAjnH2sjWDqatgBZsWW",
  "key33": "4tqcuDprq9J3LA2ZZ8u86NuFnfwdG8sbqzk2oS1avk9arjZbd8N25io1ampwapDbJoq8KCB1n7T2i4YjKdLCX1qz",
  "key34": "BiUpCkHwikB4zGnyGLiduBMgTZNB5v5HYsZCfm31fZ3Z7eWhe7ZQdCYyQasx9YJRLDUSk5nPYwYg8qGboy4neaN",
  "key35": "4Vuh5AnFvytHDsVqq8yB5veuJ4EKT8vnTGkRbrtZe2GWqs2AdhTCb7pXYyF97uc3rFVHFPMB4tmfRzWKro2wvmCc",
  "key36": "5MYn3Y1btjG2EC5euqdEDPvbm1A4TF5zjwKXzUTw46FSC6Pu73ukUwiA1GhpQoWGdy5vym8yp7QNpqBrGWxfF5NW",
  "key37": "5LNLHA4vPM3FE6qGSEqrcFzMTHcsPQLTbktjuPZFfE8ARQZMqmuamPyEJTUdF9E7kHAVhYAwTtaYNSb6SyDxaWMm",
  "key38": "678emkjG2N3Meqvwpk9ZU9e3MjS8PgYWr5Y1jnnFSdyfbm6vc4BSx2xgt9gqYVqM2Jkog7tf26Q2hz68MjnymqL2",
  "key39": "248dbUeEziavzs11SjqEroNdSDNbn1un63btPi3afp5PU4J76TWwyujDQ4kV8BDuriUb1BRASDyAywvNjdpuwWQP",
  "key40": "rCDdunSDEKCNyry2TUYwZcuXsZ5FyvUzeLgqhYpnX8ubAWga5bB9Qo8YkQ3fEH5mNdStoKwBGG9CsH5gnwMvH5e",
  "key41": "62xqCYx2gfMYU9rX1QiUzocgRZaSiCgpNiJihDNxkrVs8Dz9aKDpjS8evk8cHHUviJyvsJHotMmDx9wQv3fbsZ1p",
  "key42": "oHau2cz2L3RC6JGz1ft3HKytdQAKfYKbNaykEhrkPF9yETwudRAcbJofU3rJYbgBUANKqR6ks7f7pCaqayiehgo",
  "key43": "2xC4Xj3PJWPTxrMnL4gGedJugpmGFU3VbucAWF84eY2uWYUqtYMf7Eqfwm1FxtF3qsEqfaMJ2swtveiuXLrk3Lcv",
  "key44": "4W5RxcsM772B6E3BNVFbMH5KXGwGeYGXuQQ8DVhU68UXMqNTgtcqnu6QQXuJ4ZnBy78hcsHb5xUxD2YEZS1BdYa6",
  "key45": "52SxgEVHn6QfaKYYazmEtNrwvq5eWGs1ETke6FbpXu76wuTQFt2xgsfUTqyzJwZbXKNuLqBXovudW5GQVn4H9Msh"
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
