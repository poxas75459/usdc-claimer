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
    "RybUyXUomEub1YgTvP6a8EWJ6BpTuneAUYGDJF2RstgaFSUywvA9wfJTrtMeRPG4LFeJJkHz7gKBugm3ooogUNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rxq4n9nRFGLJo23QL1FWKsNdQRGf94TFqyQZMdkc6Wfe9eVCptQX5AmdRYM44t1eoE45oz1NTpv2uftT6p6C7wP",
  "key1": "u6cXGY9Xr8YYQPBxa4i3ikAY1DgYHH6QzZf2ms29XZbvbvHCbzq9TV4BqUhYp1RhGd29udUWeLEyaWZdryKc8hS",
  "key2": "5KaLUAHjcDkemyTJGiSHP8TVn5bkYJyKydn7kLgeR7JsG3HMn3vdb6TyGKJyG2RGgFMaBUMnaQNkcnF3miycrdZC",
  "key3": "5XVTtoxku2eKC2XfngFNjrQjDmMuDrNVpBe19AaqFLm4kcRQQXUYhC62msCdD4ub6nuzH9Q7n3BU9MHVJEtzYWz",
  "key4": "491L8iBa1wLd6iyNbYctREdso4gUUWfWFDffL7q9AcvfZu3AVjP5oTDvmyQE5L8dshMV8iXCf3hP15mg2kB74tMw",
  "key5": "3RPTZgCnfNWLcdq6FdRaLsDvHxCk5pvRayite3NGYnFhjW7rCB4TNf71ASx2nCqSo1CiaJq6peJtHgwDgNhpzgDo",
  "key6": "2JedWAFWSsmo9Xr1PuggYK5h2B1PL3NMyZNhPTsDeuJF9bbCTWpMfQKcfs4BSZviRpuYrFhtyVgKTX7N3v2EzPHr",
  "key7": "vfHQ1x6PD8xtVoxpj3P1sxqgxMCeNmwdiyD7dGrGy19umnQQfsBmarbFqmiNMQxrFv6C8hS82657c7BDrLXf4yu",
  "key8": "5SbYGVCYot2t6dhraivYm91dMspMUa3pcmY6248wqhbJDRupkK2C4ThCq1jmH9Gw6RoTjuCgnePnNw8jLeo1jknp",
  "key9": "5shDePHmR7KG5JHNSMMsAwHs8PUWqHudKBenGuJSY7bZiTiKMxi3UbRcYtSNPVozCq17rYnk3xYkEZo11yx9QZSH",
  "key10": "266HqyC2BToEniuU3bwok8QyJuCDkrhygaSoUhmSq5CMzj6ivrmXBPS5GdrFpr3hvPqz3SXAVNasJjDP9MCHgm6R",
  "key11": "48puVGe3cx5oDGZgaT32YvwApBCiT2CGK1Cw51RCvX7mmxPDm3ombCbi99jjCtujMSrdx77sRRA9tEDR9P4QjzXt",
  "key12": "4AC6qvLLLHqs7zuquHFDertK1TfKrLQFhWXWnbvyPK8rrXgtm9mCRQzGLF1T6yxvH65d6JjqwDoG1sAkKSsgnrKo",
  "key13": "5ATyzT1LrwQYWctJdcyQPHXGuXXnpyXxQrzpozUFuKhHrpJZaG955LpNmoHbdGeN3bKj1mCAPeoC2vZyJziGoNXs",
  "key14": "1dD9N3HeEwHBCNMVbDBq5vpx6CnkCgHQpknd6mxVwqEPHsdJmbDomXXmeLYXqEeA3buoNGtT8TLbM4zh96NAQ7s",
  "key15": "5k4FLeCiPyTYJPqZa5nEk27xV49MswvdPTr6X1iyVbrRJWvnjynBEJqJkzqeZ69nbjY6cNwUkD1xh9sLMo9oKr5Y",
  "key16": "5Ws5pKvuoaiZXGFaQSCdcueqzf5waUgaoaM4sxDYR6gqnNzASJcbN1ow6H8aLdgSmyiEXcFrj8sGewg83Uk2aTY5",
  "key17": "5LTgagsyg21Wy33iD6ZyrssqTQHx44Y9X38M3ekFTD6ag3RBGMEcSiHsdAS3Uqt1HVgexdGFgQ1FUUamHGNVLFWX",
  "key18": "3r1kWMvbA1iGRdz3Bq1YgcRK75eH4prha7hVDPgHZTmY9QcqWjUjuKRg9xMcVoKnpEd2xa7geHzPCzouwVNwiEco",
  "key19": "3XubF5cTnZbNk4YwpNwzbZaNDUMR2Dgz3ZecNFD9gKmTPB89brbvtTH7zjymFGwtodbUkfaMmDQ9b5vsEEBeF5e2",
  "key20": "2tmWyZ8N46ixhdTjjhZkh4ViFnvcfL1dNoi35LARU35vhoKcr9azVi9cnjRHW3nGkbyzSogVnsnTKwXtAxgaVZNf",
  "key21": "h4YNJQaXgriuVigsNUiCA2e8D7371org11i72oTjnTHUxVwybQ8n4aVBYGXLiKdd5PpB2aiBpfUvPd6xFjsV1wC",
  "key22": "go31zwQBdKZybGYrKNo7QjdeEhFS9Am6aEVUcVLs8UBUcgi676wynqspC4mkvZf8V7KhsMKvsJrZg4DzWyxgbCy",
  "key23": "2qGRo8s1RcRmu9QUGCm4ihU5Xi6MJpxjjwZ1BbU7deKV7Ebaq1HaDsYVtkL8z99Qsr2t2BczXpMJodHYwZdo9pAp",
  "key24": "xhMtMjPBauhHqiaqTB7xdJ2GbfQV5HN5rwxfQ5kYwrMrgyS5xW1p4JJNzeC5RkvRRa54ieQsAUbBfrDBXsQFc7D",
  "key25": "3LdF39ec9QhGqELJuXCksF6RAiKdD9Gp6y8SbJqSmuGa1dJRRJpSCjeYoMW8bjTPr46R58dB5UYxsWfSTR8wcHJA",
  "key26": "4wwXxzWKuYPQyE47Y7Ay7U1HnrkmKSdVF7fcZhZ9WEtftJ3EPwXfiSCew4eW41KdofXwQ5BWPJ2BX43Q5nxi5gXh",
  "key27": "4djhSAEDNSjRDJy4mQ2X8V5sk2BZjWCLAYXkZYbzYq5czVG85bQzNZC3GdXJQXj2V8GM7UgXHVwV6DyK1fec6n5h",
  "key28": "5wqqQMhFemE5PRJB9wEjoAcrCMrgJQeCQEsXrW8PHMouA2ztv3NPLMjscRBUwPC1hbZNc9k8mx1gDHgYW7Qz4Xsy",
  "key29": "3P29URdVi3fVUYcuxJMJkdmwNiPeTgR44Mypb4dvgHMUcuRgP2MGEnKcaAYD22XhsXMSGJtVQck21f2eWg6YzH7z",
  "key30": "3xngg4zaF4HnUk9HWdt8nPGUQFhVXnWGSot5g8B3MJPg27bxxw4rgYeSbQ5bNanzYbbYecbPQZb9jTvUJrdtSTAg",
  "key31": "56kC6hKJJ9CrxZN4qeVxfjnUwNafrox4bxB35DC3PQZsZ3rqZCQXsPEfRgvfERSWhAPaop1xb2WGbRvPwdWqTQzY",
  "key32": "2EztwoJ8ScoKZTb4Xqq9CsjLrgEN2FUuJhTFzVv7Yp7QKs2SVGzAkA69uyRPcJKHVDSCS9mJAJKcPt8xvRfMNEGq",
  "key33": "44f87umGVqzP41kqYph1CB9674aM6zkuE47qVMpGzKRNGoDpV1Ki3aTXSRU9dSUTrYcR7zwCtDj811oRisHaoyxe"
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
