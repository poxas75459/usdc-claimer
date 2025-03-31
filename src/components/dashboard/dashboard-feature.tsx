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
    "2Upevc8MVguTay39msAy6v4mrw74jWWsbzqXv53nVBSYCTBni2ev8GSb3A9kQWxvGFCMhhYoTkX25Lw7BqqqosC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bVi22yEAoA1WgMM9ESDxUn91PHg2KA3yH6mNKVHxNcnLzVYP5ksLjZGwAC6fubxoX1Hh92f8PdP8HiHPiHVmAPB",
  "key1": "ZFgCdusP29nM53dA8gcabetaP7x7Y2uDikZMFNgi3KpapA4gqZ4rabum1ZCSbWj3nS1ZduLLieFczZsgr3KPpp7",
  "key2": "28r84xXRCAJraowWvkMUYZnyjQNgD5KrCdraYzb5zKPeKDsUoATDEBAozDiAXV28hq7ZXSDSMyPwf4Ly7xFq4W1b",
  "key3": "3HWHrCiNojH16htw4RE8R4BV77fRDN55M1G67nu44huUaj5pPQdSAxb8uYM6dnJ3MoxgAqG4wiibJsgRHUGmv1ej",
  "key4": "5yLofQKSM6t62nP2Mv3eJnuKWVPNca2NBjkn3eScZEPRqatZkrtdy7JixrTqBMM5J8yXpNVLoGiphsrCymyFk8bZ",
  "key5": "32WBgnci7E6teLKJxvdWAJFppTVWsqp83kAU8YAW2iN6YSM37wNPbDGXTaqGKiTSZu9o4ht8jDrBrepZu54F7Ezw",
  "key6": "3TSvCYxrnCmrAGUsdJ6y8uxrFvWWqpPqXuSvCzJ1fyFjsuFkqna3N8pwne5zUkv19omNawkEbC7Xvmgm29SGV9cT",
  "key7": "ZkaJPcu5hBNhGnWPNz5bA2QBM9Ws6ofz8zgHYddNEJMrufry9MaMRXntZfM9mbxsn6JP6ECeyKXeRSCZbLamS7Q",
  "key8": "2LUiPzpdjKwsui6dBaJ4ur5UvEARS6XgD4FCuzoa4eH2wV2dP55xYMMZbvr6nFVTyQHQAbxhRULAqNGtkKfMt3Jn",
  "key9": "3raD9weD9Gvoj1yXA8jXc6XiGp7sLbj2zaPhUUiMEFeNURXifFfdZyhFty4CQk3EJ5sapEcpKciWNyZaBDZKEoXo",
  "key10": "4Sobo38JfFWGg6pkLiPymeL3JUP2Lrna7YPVeMX9nYkLJiFxX2UcLp1dBixLgUPFGTbCJCygJheqrjaHJGLTjJ1G",
  "key11": "3CwJiv6cTmyFdJaHuUrcA9qttdL6WjQThq1WxxDHBxXxkd4FdneAq7UwJgdXWfCuqH65XB9gNYcoCPJ7MA4vQRec",
  "key12": "49WKtDiV3q2ohD611NYkr7UB5pyWHggEP9SvTCU42ynL4GitGArwMk6Pj2Q5qFPZX6vioShyMCN6t9agWUoR7tgB",
  "key13": "5ecGKBHfVnnGGDZ2yq6EhgcgPV3Aas7bvovLMSiB5CgTnFJPGq343TqJzBda35sgedrDRSvV2zxiVLq9wA3zxBoE",
  "key14": "tEqqwwM88hmvikWeZ2xZuvNsGb33EtVGjgDk9bkiw9T1HVQmv5iumiyzTvGea5j4pd8qQz9jdiSo4GFhSTQz8RZ",
  "key15": "xWTLLciJY5ViArT2Fu1qTK1tzrPfKNKrwp97qxdLUgedgCtcW3gfRRJhL5A9nn2Lt6CBA6LwVhwVYxKsCLdFMtn",
  "key16": "BgWfcNzGd7NJJjXuwv4shavpH1ipvWdZA2SaosZajCpfbh1jcgbMfveo3UZqvhf8Azj82GEfzh6xTWqsfRsUrsY",
  "key17": "5RvnFNaTXb5qo92vAtqNzYxrzvHvswPbZnxWvha3LjJKpoR6Z59q388PLTwz9cHhtHTLBAhgKUfDLSTvL84yHRac",
  "key18": "5CyGuq1qySsigW58ndFrLCBpwiMyQLL4rj7AKt4LTaKmS6W2JAiWWQNrUyufwEXq2oPr74dD347NDexyYCuZqmbg",
  "key19": "3AX82QFzJ4aNjMuRqQyVq974CTzDLDJZM1nanuFzsMhXjDxa8JP9Q3vshxNW1ookkzJ962F1BGdww1hUCsGNrs6U",
  "key20": "2qiibPRBkwxPLjLii5FgG5QQepcGNEcrQQC7eTshqMWJDg3YRsAf7uYEfgZJcVjcYwCFERx4LUr7hoC29rz6rYmC",
  "key21": "QYse7tn8sPaM1xvzzvKcxHpk6WCDvAj6auGwo36a8baWQhep7zg5ZmXqg7vu4zwfD86ijKp5UWB9KZR9W36sBxS",
  "key22": "4waQ1ehhedfhAQsuNGbCNecpzr9QDKpXXr5c9XU2KYM3uMNzw5wYbx8Lv8aDkHvwXMFNBWBH8vXjRwMd1jD4Mq2c",
  "key23": "4ykCk8FyXqniBZnUMotz4wBKLPDGJDtGazJVuFGjPMxFnatiZE4fjqgdxvk6viLk7dsSQmsqgQZ4GrbWRF7cJfrP",
  "key24": "sCTKfp9XLiEbHd1BJYuXc6xHba6CWgStigNTsdQdJPEconentiZDmvHNHn8vEQaMWd7fcTBp2b8moTkDryqaLHT",
  "key25": "439Sb6YQ68x3TarXoVdeTnBqyTABo4yAtqgRRbYhWboYPC5XwNMncXEXefJmymki4ZUuASKpgBnx2fBsrUamYRaT",
  "key26": "8wELf3D9pDmrnrgcwveFHtPfpKEfhXcoX2iNvsSiVPqQKcyeywr4RnZEUip5vX2cZbAb9KbMXDw35pkwcTZctLD",
  "key27": "4F6wLsCyGbHj5zqovnnPaV4Nrg3WtxARFoo6qizpWuTCi5svzgPzZrD7cY4P6mwouNNkw3EgF4xnmSEMKqrV1U5b",
  "key28": "2iZAQXc2LYMB77fFg9aneAuZH5v5U7XfVmP6yBE4RisboRDKjBbn4PU64TRbvBEDQBq4cTuSVosCocWZVWgVEf64",
  "key29": "6U959cDxyc2wUr6Fe3cg7iJF9mgcEha13wayEbZ8bUCuefdxTqnY1mCHp1NHPNJ5ETc8ZL8yW3UW2kj2A7PUZTw",
  "key30": "5Tk6Fo3L6V8EPSCuWUxjcSHPbFsVK7gum3r5x17y1CTkfwWjDCgBvPrwY9vs9tKPvupdnfMqtd1qmPrY1PCxkSqV",
  "key31": "h2xMbLmRBdxsy1z7ekVVFnwttQKFsHSPtGAir1xXvyi1jb8aYnoddmtMNrHXXUDLYvTYFiZeYmfb9scjnPPaahF",
  "key32": "2fhStVqo9DhcSA64MHfyhwYe32X9573cA3mTG3idSqErnka7zCy3Vae3CZps81zzHsvNFvAPZnTooaSNmJC8tHTG",
  "key33": "43eMg7mM5PVuXWMCqxBcZtoKVLCafzpB2aXJVZzsSv2pKiTG3vep4yspvKuaL5KLwpBxcAjURV7jWhrPdKpefc3g",
  "key34": "NfNuxjCpe1vgy5pKtoWJscY7jcqVrfudZ2KJLJPdMJLzBGfNix4j8DxcophpX3wwgxaZuRyfHKdxncPNCRbaoua",
  "key35": "3ac7fSj4DYbHZ3XJfWwU8QcUrNC76eCoaAsiFbTqdva55bYJmLLqnmqETDLKf46k7sMmSuGXqmFgigrDjWf9DXZi",
  "key36": "4CJP7GoCarm1QfP2VdbxoApV1ffnqjj676ARMCFKRz83waDapxPascHAhxXzaNrzLLh5wSoBRDNzV2oEDfXp5Qez",
  "key37": "5xEWiXYmDMvr9Z4NHAH5s1tYvCMJrtXtHdRLH3h8Qb816zfkksSDjQ9HCYEX1e3LBgLBXyg8rZ6Lqi6ibD6ui6nV",
  "key38": "2zza91KgeGAiXaeudsQBSXji7JdAXKb9eNzQqkDESGpbkhFtCZR6VmZ684iTVndWvBqbjTGpyuK7tyqgG3cyhdje",
  "key39": "3rhLYdAc3BEVEbLCFsXCZkNaKLCoccGxCg7iB1noR3TT1ki1mGwFo3P98V4LgX3fEnPq4pda8M7skn827ogupNQC",
  "key40": "36zDUSZNXmM5ja1i9pkpJm22sG8kd1vPqCbfdRuFLnTTRDNAcUYieFp7P5DSS1muMt3C1JR7xMwduZnhFw8yVsHi",
  "key41": "5i9DhufQvNXceUmxsazbZWCFqos5F4jJXAvKGE644Nvnfza7P8DYqcvfeEPhgS1M6gJsMeyYfnDuRfud5btBA19",
  "key42": "5sobSrRD6rX7UMRAxgrbzD7LrEDRkP7wwDLuRcHMHeySjxZEHnRKZn272ZmwKxQZwBvoQF5neFtAEZ8edz5MYMhN",
  "key43": "4UNp6TAReY4BNWYjgct7fRE8YGB2v3XuqqaWTgDiMHB2RVBRqk3Y5ACC5AruD2UgGKbUWonCrhwUwnahUQfccH5c",
  "key44": "PH2F3QihsfQFfSWvs34hhazkqi91Yy7JRkWNtSdoUAG1F5Rxsx8G6tLHESZV9FpmKm2pKGAJ2yKVRj178gDaBhN"
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
