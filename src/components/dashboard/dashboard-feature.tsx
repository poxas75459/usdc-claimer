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
    "fxwuxhXopQPwQehRQhFiJSKjF3qgmeraCVb9Vb4WEDri6yPuy95PjgNBqVMGXoRsE8MY5rdRnezdCXZrTiJGB6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SaUDPNeMtfLQXh3dWip936wWaycazKVvhdD6JvLrddLZ4V5HzhuqQhPC46tmwEVQyoDKLskzQfybRVDTKKbQR61",
  "key1": "5kwbBWXmTGVVY16jXJJ54zyqhjFXQPw221gKVx4NG6zKkKP5EFyV56Pro98Trgwb2HjsRE82S15Qq7Jtsq2sTQVu",
  "key2": "65N4mxc8STgP9DZL9LZvxZKj4u1rWrH7XDtZmJbnGZcPbmxR8WEjx4oqQeSXHkmFBdG3SR9nZKJtSTc58U1vyX9H",
  "key3": "2FNBwxred5CecnfJ3Rp39TdeNn1PWar6F1RqnD7o4Uecth7Lea6FMaHD8HYcN5VJjjMeX1KvzYfPmSbCAe4A4vEQ",
  "key4": "koxrnzQjnYNSk8QAiCG7iqHru7xEMZUd9hzYnpJ9v4aA5pPwxujqpTisVRVpt3LRw1E33bUz8dtdtKhoQwcDWxq",
  "key5": "5VFQNFAR3rCx6oUfEPq95sXkbZVCcMtzJBP47PCr5EHNapG9ELjgKVMWsMyBEV3PZPREQCqjshDrEmtBAzUKTjqy",
  "key6": "2n57Sx5sj5rMEUmgVsiinN8MeQR23LZf1Ai97ex72n459L7vGW2KhbaMeS9mhFfGpHpscCkNwYbBhUkCjBgV6vhL",
  "key7": "53FqeE41sYhHDTyJyjH5z8hie2JefSSRArGdhrjsToWxjimmYV7TCKeSsbDfNoYsZSVvSMxAiY8L33GbChjAjUnm",
  "key8": "5znqmqtdFLQ6uu2fAvdS9ST8SwzvPNh42B9bw3p6srePFiyvSqRbJWfsMVJXpRLQbHZoLrzm6nuCpywViQttt29n",
  "key9": "3RXLDKkdpk7mC39srjuWJBpeTvt1EiZjWqDj47pJvakQrz44ujVNVKRuvDv11Zf7d9db7HL89o1ofMKGeqeQHCP1",
  "key10": "3P4pfMcwHHtct3vZGwJviYYM64vVBFkfK6i6qu5kz7VUUTKJUa9eqjMLX1GDLAi4XjtHugaVC1oHxvNVVQz5fnde",
  "key11": "3Nj5K87VnehgCcw5Ytjo5rTksEGuK66n2tPUcc484Ur1G9QTAMSuKSbLfwCHJgwzjLNojZaHMJVdceYSLanXLFuR",
  "key12": "3MJ88WL1gEo1QEvCRrcCTDBYr3PaUVrCZtwdqsATr5vzbQZawqWaht8LvCskeRCFGao79GzSKMskxyjHb1Evg7Wc",
  "key13": "2dmMfppr9cphFuaUrYcjnJp1LZXUdCDuzX7VABC9oXopT7fLc4uxrDEwvufp9Eig8e9WyAixPkbN4woCaAYzqDAk",
  "key14": "2pQwTdJD22i9hXZMAfzb8nSfs7CnknA8W32yv1nasUMxY4p2ViLQmuHKXJSSPuukbwzfn5SX5FuaCDFiu2qWPQLA",
  "key15": "2Sv2M9b4K8tyCvPLCqxBFSTacLbg1djprqATCChYXwbcvZP6HtnEuS9kDqnmR7Y3CEUQQn9rN1r6fgFUvHkTk17k",
  "key16": "3muC7kCWS34PBD7SQwLUt2dWvy4w2WbGWHH1wzjJH7x24EwogRkHRVpfJSbE5m4sGkED4mtJTQfFaRv4CDCaQG6a",
  "key17": "3Ekw5hkzLPSspqDb9Y6vJb1ttzZ3d3rKqse6663zKx2sZuR5YsKgdykF67y7MWEX8ZyjcYafkd2D1UNyCrp1YY6Z",
  "key18": "4bASrSH2aHm67QZ3onqiKu2SJkBbT4ExXjJs4QdsNRQ3SHW2DmtjbbDZFQ4RC8gFETiWTDttxy9qFTW1Z4RSU8nR",
  "key19": "3fjrNmgYK45nSo6X4uv2V4Q1rnktHCthzotSeV19L3AqSiB6qypTYNwFsQVhrpknFtoJ7pZixF4AGxRL1fE2MP6D",
  "key20": "yj2PPN7bQobhGenHQ6P2Um6VJ7Q7Vs3fE9RtnzuYxwiRX9NzmKLCqSMdv4ZdGCduGTy1euEYZmtyaJBNpw2AJWm",
  "key21": "2TW85zZBmDuTdomDKD3UZSCL5Noipe1LSNaChtpxa5HHzyJGsMpYmb2UuvGdn7kSVerspjnPJgG81MTJr18M9XeD",
  "key22": "4uEBduE7vLVU47xVEeQCemf9sN1aQzuxrAMmueGMPB1mWVb7VjZ2j7Ssz8criDEHa82gUqc1RcVMy4qWcTRUHTJv",
  "key23": "43kuJtCpZ9eLx4d36j8m62TUJjDuWycVf7d9j48EW4nSqoccde3aYVceySNkdMR7FiAofYsjqGaFY1kMnwatCtDn",
  "key24": "64fPLYPnWjytAJMq83VQT3rD1JgmawtqWrxXowcTsibC7SRY2uMLuYWATLz4vMpEKjfSyotihiNN1Gwd9vqpaYCR",
  "key25": "2Rr8nEwt1kw1reBVqmuF6C4tN5LozZeCMFk16dYnGWfzRLxK3U6Lg3i2SQnLryR3RDnvwd6FQdDVDkxCqLHcBFWS",
  "key26": "2zDGnpiEnmGUd8fz71o8WXmVzT45CmTYcZncRC8T5WvtEefMx6Gvyvv4zL9icyXz2Yqm8zdeDrJrQBvUcCsYDu6G",
  "key27": "3zXf8xpnGULYtmeWGuyDtaAVBYaCFi95A2yhxUWqdo3dEvEfn8S8ihLzebTMRsiUbfHoULTDuPAGywSnWaGRVhoF",
  "key28": "38LFhWmdhB4m8ufTwfRpfVTGg4WyVcgB9qp9FaQBet7n5HX9MTkcfm9d6gF47Czu8m7VavgvLb91WeUu6ox2v4dp",
  "key29": "BtcgvAh8ZhCgM9pamVxjUKE53cNHBW3dPTQrTrEi9aeNLanF89a19YC6SeHwSx6vHQdwidGViCsNUxRZhnD8A28",
  "key30": "3AqdDuDBnN2G4aeUj75vatWrZg5Y8QSuFRbgVciRCqzbUn3ZYcJG29GxNHZdk7V3EQkkicDjKKf3NFuYYtz7nZQL",
  "key31": "5JmdDfjwUP8JvfC96NkFk6JvKn1MgbW6QCKnd6hRruR9GkMetBY7Bj4AaBSpPGDbSX4R6FAfGHqf6B6yEc6XJnZH",
  "key32": "2ZRsnd1tshaPptAf5NNgLTvyfnG9r1inGhGYeNosq2dCaWR2nMskfDYxdUJA69BHUjQmEArFHRdzoS1MYedzaibw",
  "key33": "2VhUbMh3u3aRtiMnzNFLSiTQhSL36UXdnYv1RH6QB1m7c7YxRRcVGmM8aJJWyv8Fpzapmu6xRPgFLWPDioKqeMAo"
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
