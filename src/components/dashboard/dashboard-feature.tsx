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
    "5zMcDyodhbYb2hC37mazv1aYmFveXpT5EZbivhU9wRAHPB6SQWpEvw3BUjSjVUDewiDSJNgaYCCB8G3xTdfYiDw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FWocMuFNJnwfMy2PUt4uWoFKTNgLQNSrPnutYKmmhqp8LZSTdtW43zeaogPbM66LL9vzP78BTraeBb4BPSCGTZC",
  "key1": "3EGtM6zMGcbkHPTCFsyXJmmy2qHaUuVSHXZCVPS57YUqjRhNPqp5uS2foscdC4BmjTj5BVQ8k4Dg173UdureVBjj",
  "key2": "5jmH3S6js1TJM25xZfmpdhPXryr2MXPpgSryazMZvt2cf4ebxbcjf2hqHLDANURfh1qNCKx64Tzkw6dvEVqE2QcL",
  "key3": "qnpq2mDh2hfiCUsmmfzpTMJinNCQyL2AQrJiQ8qJCvqtVzZshGqUS3fvxB8fktHcCVbR9upwv7gGFBreEqUgs1h",
  "key4": "3385Ceg2ALVvg78JbRHphZyqdKVU6439U2fZDTWgEanf2E82j2FwC9B7RA3Vdjvwh1NofX6155sfffqD7qxxwoBF",
  "key5": "2oqPy8c2fLkMoK5NyMCx9t2JcjwBUKw46JzUG5b52MDHuhAkksNMK1pH9EzQqZbRdpwd3bMaxAjwPNVf18ZpbzHt",
  "key6": "LsjsGBzQdTaPHY4QddN4tVXB93uK5KB9Poy2tfKx2VcvZ2BwHpSA6eGrWEQPuMVkJUdf8d5jcc7SBuzZtEifeSf",
  "key7": "4Ejeumk5b9WxWEmsewr3KueDff16LwyHBNY3rgRD2UqZDtmuZNsUgku1sNFg4vMVfR2UsjJA4kMJfgvaKxi2tQXx",
  "key8": "XbK7yZfdjg1Nr8syirEgUT4ZNh9GuVKNxcA2qZfshXPxBABm91B3SkUQMfQVcf2ihKkGypu1sKXXpG5y8QbvsfJ",
  "key9": "5a5ssAM4px3SFSyM8K4hVuVaRJCSCxpek5KLKCYbZ1GQGRvTWGkEyS6V3k3BAtpeviHBXFkJgjTN2NBrvtND7wRP",
  "key10": "5FCD89osya2YFpCg3wPZcw59fcC9RXoeETSpMrqYB88ZhRF36FoT8qTEctnEC4gpoPfEXrB2WCj49zLmtNZrmrxJ",
  "key11": "6TRazcwcGLJQ7hSs8vK7o4HnzbrRjhugFJR1apox2i7SSsQyLdDP7nhUFTfZ4uhwsKfog4MWMi1RzRbn6h8dLVB",
  "key12": "5AAo8WiGiuMuvuaGKZszHJK2teMZ1BK6fB8JUeMtyNJEqX6yqnaf66yvrQk3waAb2YKLT7TdPn4kna32SQNmEXx2",
  "key13": "3An3Ay7fyMmt7octUgEp2jYQj9L48pXntQXg36MUNctoSqMVqA6ncbQh5BfUtobK8pZiEjSkoUENLNS49BavLxA9",
  "key14": "3emay4uYtFz1msSbmmKDYXs531AJP9rC7PLJ9PfVgNAEoeuMrCAqw7Kk8RxSscGCN9FL65dJZBCWfiHCpRKsu6cu",
  "key15": "9jMxvdAuM68LsDk8BSQRBDh4SsAk5CmYWaAWZNmEGYjDSdFLAE4pASXF9FVhAwNztgM5qENFQXZhV96GsWGnAXq",
  "key16": "2gUHxtFLPBdFx3E2sPKzz4R8RKNPGobaHbvSDBW9jkpZYJPYxXVvwrJSxPGui3WAMiKVS77KuH7SHCZowiABGtcm",
  "key17": "4qqig9avWxV1zUeNGhmUdRxSK4zkdT2z4JwNT3ZeQXK9krAEtBSYTfmrn8iZP7tPBDzCuEvwVeUXEq2rUWBXFoEZ",
  "key18": "2jRQoQQVkQkBHzzqKUbJzv7KXWS8Tk7zADMRUXz3rs9HNoupyw7EfSXG5HJvbtE3Yeant1XfdS2sVpd5EnCgm9Ag",
  "key19": "32sTUTemdmX24yGrLJHrZUMQhkW9MzJCQTu5kQpah7wGdLaXBxxTCy9VSbBJfszbkKVNVyzivA1HPqNgr4wWSGC",
  "key20": "4LiAFZ35TeMC4nCwnqg8pgQhhFpPGw5QxUk4x6dv4cXuV72VreJ3zKE9CMX9hb5tBKJAWc5BjUWWm9UL7hXDasRk",
  "key21": "2A1xVv1AFiHyvVTEx5yFHDBPUdUjVTGzkvqxFUA1C8s95JEAvsnV92raF8FsDFGnBRMPfXWa2ESn7TfHZDVYaLcK",
  "key22": "5weKxPhbTmEGJAtv3gawhqLpY6EnFPiDKSiXi9PsqBR3p9JfgHm4chf9iwq7z5iFwHDZa2LdMes3b2GorhAqBhYX",
  "key23": "2hH3jzcZHsWmzS7seNCfaqKnKhGc52QwyVWqVKeNcsgdgibcTZ8U3zUKcj4HPPVEBiPiyuWB4GyNaJQxKZnDjCvy",
  "key24": "4pSRaBeY2qDVkgoJnnT6YSAEH1wdTpjoqpe12yUU4zNSmdTdDhCeEeenUqeGjMv3EQW8hZAJmZs81ZXg6UkUUccx",
  "key25": "2nbHvJLiWP6n91Y8D9VmB8gzinTmUAf4yaSriW4UdjDHwrhWfsbeyLyaPheURCcmKZU8wBJUXV9t6FDNFPuDFqFU",
  "key26": "4BM631vVqXT2aBtby1mHGNSTvn2zMcWBwymywwjS54pKHDPDiFgEpYQWJxErpadDdcRgk7nCo9bEs5C1aR271FDf",
  "key27": "5hFfmpakPxLf1QHz31q8gSRueV99KP1p3mBZPQN16Dvi2CovoqBSqqtcZrvoLMhAjPoa1LkMhub7apXiEX237Ru8",
  "key28": "3AJuRV3HE7kdvZV2KT8KvFSbSgtTzjCXgcR7g3Q8huVcqUXyjsMbmDbAvSa7C6vC2E6biMN1fubWAZYNyZKS1cmJ",
  "key29": "4akwDwmshycDcaC2jJCQY3QwU2wKKpMVaj5oLpfZ2anBksDj5fGpfktNs7V9BnTv2DVMYea1TqrAoxUpurpqkJym",
  "key30": "3GwV1bmetkus9VpvEjyGL345BX8cpJfXhfTdep714HzDxsgt8ajAbZr4C2RXKaCPaPRsUXtcSQrb74mUU6b4LTwD",
  "key31": "5THgFd8uyRxA2dwYCSTB6WVxLs3vLEecVFxLu6CiwfXbhMYRGoJiwyfUFhABXN15po7eWEDTAqntnoJqvHKV3Rvb",
  "key32": "44iMs44X74JLjN97nkcbx1PGUhCtQWoXsgmkY2mzz9Z5LoYUrBEU6C8wbm4N4wTLE4dVikkyM975nj7MPxwy8Qbc",
  "key33": "5L7gNXkMENaUagLRd8DA8pZ52HJe4NH5kPJ9pXkzj9eWhwTqPaAZEbfKysCq9bcrcjNtsEmtVbeyXPRbdYV8HVao",
  "key34": "5JZ6nB2cc5GLThE9wKg3fjEzgjXJhdo1wCEEHEtAB4qid2Fruj1cbTBcQXUtZZzsBwqLZFTZpu1oPcL1xwu6go8E",
  "key35": "4GQULuMXggvkujc5o49V7TSrAu7qj2TEn4ipeqoVbUsernbhRWry1p7PV55j4mvNsyXFW2ttpvT2dQUeJPHbbnmK"
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
