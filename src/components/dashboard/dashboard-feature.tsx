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
    "3CaD1YZT3kWQT2KU5R41oDAwxnTrK5vQqLy9fgw7uNNWwpnwwteq3mfj7UssDPvnLQ3JAJcQdx5rJBJxeVodHdiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZGEDPTQXmRPwLfCHLPJ5TiR25PtgXCX3pjAhKvYA45usXsSfpnmcVscqL47yGpELUv9cLFYbT31cskgd5mcZV3m",
  "key1": "JZwEmNrevsHfTXuikAALnpiDaGhWYDyMc5ep5nHzu84cDaUV7taXGNStN889Fn39L6s1MG5PCL8XjknKAZD6qRp",
  "key2": "57up4hpMBpLqJKhPVMthYo19yqzs9EvJYsG9ABQ8MrYTrFAg6oQVogrCnZpycjfTWiynMt3vk1kbj4QkZzGCzuim",
  "key3": "qEsGfCL4ditoq5Dh6UGXwXX3Vai2VtMdpPj1XL3jdNJdpnwGDWHi1kGhZ7WcauxbzFmHAE7x23ucqXFN1jQu22U",
  "key4": "55tfM2MvqFWhoR7ghpHa7Qff6fHgPHKNwEzfk1ti7JkJs4ARdnyfRh5vtb89r6so3ckKqtDRsPoSocwjohiLtXZz",
  "key5": "3vtDZ7fnGYLWHqW4pikq2pdw1SLX2VG3cX7tqJKA919U2jUy3L84FTFS9X1KyfW7VKha9rW5VzGTKPkE4NczHuiW",
  "key6": "5dP2UPFNAgYEC9Bx85sTb53sXDNLDzyce7LtfTVD1aQdFtTLD7eYTogTh1qxKLqrAfuVvuEdn1kH1qUtfPomqpMR",
  "key7": "2teextiR3bAVxzLcNBuJ7MW1uhPk8HCafnVhHG1x41PgkxCoQuj6UiSzhap3dYsMqWxTM568fpCGY6ERC2XrkS3s",
  "key8": "2JcRmb1JSk16kwjNMrF8NdVrK3y1Zc4aahwDoN4Y4apG1XSd1BzDZceqP4a6Qy6WALSvLS6TrB416h56hfaAMWL5",
  "key9": "4wqmDQqUXGv9NjzyLvLNFupNYhTafZ5TrA7FA7MYWLVfdMYJ5AjrPx7v3y3dznbVdHBwnzWdgwEHk74vbbwQopWJ",
  "key10": "4Lspfkcnq5pnGc424fH2WBMLPtDMUetNkf5wbFGNGUAEiACXKjScWvy9XgWzyv52ypButGi4PTUs2nA1vdHuRrbf",
  "key11": "4zBkh1Zyd5yXXg2MRMZ9c5yf1DwXXCdJPCrdTSinGffN6VK9P3rb8EcYZgrrnLqMwDTcGfJ4WkncXMy2bAcQP6jw",
  "key12": "227ytji44TCYzmbWWmbaA6RhPXuFkFoxGuNkaQjRf1Gq7XvWKoQkgKNAuQtkLQZPLERfhrcqwdEZH4BNSNxZmasd",
  "key13": "59WZzaeTFiR5QrBAacRAB5PNGaemKMHFEnTZShfn1prNW2FD8p1KaQpJ7MchuDpsRcLxYhF6t5qGLebJCtDF4ftA",
  "key14": "4Ryq7e1SxDEsN8xD1731En8wMVGoMZdpMRL8ik5ENcBdbM6DCEea6WymCjRqHwDfRRydHDzoZRmkJBNQz7rApduH",
  "key15": "4DBJnrbH4KTfy2FLyMRcJNKFkUhxpi2Ek2x7jV4zXS9hLE2RGJymY8Q1MbH7S1g4HmW7Yzs42AxeEu9U3Nhv5x7n",
  "key16": "6asDd8Pruu8kw8FacjcNHSDCzqYPb2rKCqBAbqBkRQDsKWVsRZoDNtTekjxjm9yW2MGMCgtDHyLFRaTPGhNEdcL",
  "key17": "bj4uaHsazkwExfLJKFcgHGuJT465d1rfCGEmxLKMb3FEP5sPrbXMY8XP65JCJCydZo29Mcn2LVAsconQ2DozCQn",
  "key18": "25JN9rezr5hTaiAVrR3RGastEkZho4c8PUxxaeKf5j6qKg99tq4hXxTt9Hf4gsMyW2yFnoTXvYpBL5ggLax8ttaq",
  "key19": "FFEbESusUa8dvjm9efLUH92LqNmqvDzMjmfouhqhKkFWUW9CiujCjZi45mfRv8dakNoAYLWCT3uAUj5ULALcjKM",
  "key20": "3RxPFiUqi3y8eSvhgUqv4KBiRXBcU5G5BUUUJPQcSrUGrEHfSRbYSRm8yU215fFxb7XhK2RqpgnJjnJ213zhph17",
  "key21": "3myzmijacuoVyZQ7CM1GsMoFj3jk7m1ha9wN5nwVm5mCaSSzWbsdvkd7H6mSi5g8LDwd82mG7fSri5AJiKmoNBHF",
  "key22": "3eCujTq2J1tCCEzerNawryjSWuzvuhM2e3KmqH9SzYQJQiTi2ukcuM2r4CdDfB9LWa18CJpnaXWB3zXEiXHyrahA",
  "key23": "3zR8EegQEjEAVZRqW7erpEyJqQM8v2ifdFsQB7KJkwdFWDY3TmftVixed6Vtgb6bqsYFXrJj5TJJiWdDEtYwv1cd",
  "key24": "2HFEXsYoeANPYCzAS28WsXWWSNqVTxCtTNNLsMNWcL1hZMb7ygSFQjnnvj42m93F7wA4yUqwtqg7PVjxGRPQ1WQL",
  "key25": "5MKtX3mrXd6jagNyvKAut3Doi44tB41rEizx8KH5YzFoAQq1Fhw6HXJ47kUKLWFV1PJDc7L9Kvh2rBprQYxNAV8x",
  "key26": "Up6oGUPLErWs8dVSWjzUnA4Ec5aU3wt7cffTVehzZ1AbEw3wPcQvvYMFQebKfCErLArgj9uZ5Q5Ppk4hN4kkxqE",
  "key27": "ZYbBCcsncvPx7E2U58hDQvyZA2khmN9Ht5snt4BS2YDLkXuEFrikmUVF6bSk3KGEmhVbAd16vS2YAySFHAYsM15",
  "key28": "5UYMdieNbMq4NeNhCTrSt1vpCpMd7C1cHJQVA8CwFcidR3BKuFEwzDqWhVTGF58HCPGMCHB2RnEs2tEjAbW7KNvB",
  "key29": "3AjKhXqx7AenXio8xWGkjiKNwpd9iNXVdjnqPw6ULQq5Mfbxn888mnqbsvcKKSRomLBFLseSVp6DgittGMqCiFGm",
  "key30": "3kQ8TvwSEPDyUwAvKqh3vnAdkjYYYTT1ibZLmaCddCR6Wde12KGkFxP5hLasdwfnPSCrXZUbDdG2XZCbeyGGVe9i",
  "key31": "34NsxnMPQS9aQrxryWB72FUieP4uLANzpZvdgePhkJRPq3TxKPYC37nggTAwEJb4LkQEJnFDo9CS3SUbggrdGY9p",
  "key32": "2V9FLzEcJas72fhGwB9cZ5XQLt4qgFx1Z17GD5AQtACVq7bgw12s7gwCnfneeSsnTCpB3PCqYhU3FjxKGMrxFbz6",
  "key33": "4CnLqhYZnbRpwi2zfchik7C6GHavvyZhvc1RTHnkUD9GUsdpAJG6BZUFvLTQXof6E2v5gTb8pfPsFd3U3P9vmw1i",
  "key34": "35G3uXq97jpXyCczQQnPegrp5i2VaJdBqhPnESHHNN6iL93uQbAor2689NgWWMifNjrTyDxtq12pn4Qk2YRAYSDZ",
  "key35": "4SmBtcDa9sxqjsVCYKWHQBbbdA99KwDfoaLaeC5FNpVJ31WYhaLYQ3kgzxtNLT6zXf9Gypu2eeJAp9QLR8WL4XEU"
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
