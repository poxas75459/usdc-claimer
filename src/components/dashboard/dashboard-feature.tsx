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
    "4VmfubcEoRh4ZiiQes3roF9sMsCMhFWcSyzdERcPPFBCVbvGY27P6vss4615VUDDD7zRYRPztWidi6zExYe7fTV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iDeDXcuhwrgq9dDwiPWr67KYbYhRn88bEGkkiMg7N3o3jKZ7aoPaLp3GSWJMwBzcAeVMAYtC3yn54kdw2KPqe2L",
  "key1": "3YW1mvzqVADKBUPdeZwqhLwfRgVRUeou3JsPJNbFNiY9Ntj28dFrSGdgudxfK2TZsrU58gVfUFcaYmJH2zSXXp1p",
  "key2": "2nZZZ9QqK2bPgAgc2a74xcsbVtfTNQDqmGzcXePgkECtv218PoWazMjWktLeypxgiTnkEZ7b8eEsSc3Y339fsRwH",
  "key3": "5Q1swoNtkURH9YUfpKYbD4PUTZ2upz76fjkJ7CZkeLkAxjy9z5nmHK4DTvcq8NMoNdWhcJ3VcTGzrq7eHy8awciF",
  "key4": "PRyS9i9XAorq7AuWehXTHutwCBBysXqJ6SraPRsBFeUjSCn1UrcKTU5SKeps1k4u9qdNrM4XcrKF1RE1GRrkSAT",
  "key5": "wMxem51MaqFsKnsQFu5zK24nDYba6NnkiwpybFkgVx6UDxw25Fnu5YooYMCFeQ27E8oHM8DkDGwa31nE34543tw",
  "key6": "41tNXBhYcaGUrjhnG7W7jxCNbSUzKKmnn2tWnbYtYVNiquzfv9jviefm6c28nL5CLdYZQKTBnhkcC2utbqtuvNbw",
  "key7": "5GctNyab9LquxsWhxM33nKP9jHGgDitsAGnsbCfAkJzDD4fNmjH662YX6Mzw2y3P86xSM7viTtT4GSNfQt6ka4N1",
  "key8": "5xvgnafAE3wRX6KEpdC5pqyBohipv2oVkxASNM9Dq425KM1JKMqQaMs2rQbqNzLnMC3v6LYeXrSwNhEzEWFgq3Ws",
  "key9": "2rnVUUCELpcUC3jH2kjQu7Fs4nUHmiUc2XwvHEkzw3DUeBnTXSiNm6P1pTCZYrdxJyaEqmXyXCdfCnRcd42ADKfr",
  "key10": "4wJASNLfJEWTVw4pMbHNNgAAFhh4ijKxgKHyqQPuRrU9v7WiNjKTR7c5obnKLqKxPL9bwUeDL5xy29WdYezNNMpb",
  "key11": "qcvJbAt7mjsph2XvTwazgHYyk9zNDenyAyeW7kVD9oUBXpkQ2LeW99qF9gdY2QRashRRHQSyUUvz2ACsxYBYAKc",
  "key12": "45XrqRAQXrRYhkkzL6QQwFLYd8wxbEAirVFmxDmAK2EDhYm4fHHLY6zdJ4CGaV6m8zCyTyLLzmKsFJcCVNRjAz1J",
  "key13": "5Stdqtntf1RmSkU9tKpxZ2WawJ1LK75hzvxrRtBuFaZrmUQP2JLmaRrVWBf1fBST7ykamswMfHYJbj9kSHfGsVVp",
  "key14": "64i46LRnBE4VYXaUDLnPX737N3qWtEBYQgtFMkA9pCU5pnCf82Pgmfbgm9kbuVVDzFTD1h7HbjPrZRrgvvFHoGm3",
  "key15": "kUEZQ9HNKGw5iEdbPYQTaLSSahXzkx4CNbttPDar3X8mWVyNJnUEcUf3Fv7GPzRxDb3iP7zUKz9PFWxCQHUS2Cv",
  "key16": "2huby6CvRxi9GS5tFKgP3KnZ4YbJ3WUTVtTn7h2ahkY1nFvh4UbZ4e7D7CjD48NLDcP2wZqW4u6CQ5canvGLrD7",
  "key17": "YSNn6jCsn1zB6avQqVwiJe2aoqLX9XVMZLjfE9beooc5QBZ5pXp2EpmGFDh75h1CycD6rDv67hzh2gGRRA5ntqQ",
  "key18": "5oR6agofjgtDrZm3jtVx1vmuQk9dxMgMLLxoFKueJH3UtwhW9KYTdHqKLbREbUsvuhLxyxXxjP5HoUaQdeDGGi46",
  "key19": "nmoC5ajcHvSf2VJYRfXSmVNWDCqUTqMYuMDfNUKy1WF623VjVCDB6No77F2sSVk7GwDGgjmPjkEtopKBZjLwaED",
  "key20": "gW4criGCbk9uorh3uRp7anbX6WoTgtfcaJz55ehCNAzwZG1CJKN375LwetNDcwoE2xzhL9cRmCrAGDcF539zon6",
  "key21": "2XCCtLzTYcR4rKAPpBnBwvC5MUr7gi6DEYaAMj2ShbT5wcJxcEri5NaCQ4wb9apVhm3JSUNC4VBbncm8PaSTdVcg",
  "key22": "2JHA3M1h3eYX19UJqeh4GFo1BjEvbKTKGxPYkRhAbV83C7h783NXEYbsZ9WeRnfphQoRhjnK82BJT2Mj9JaZ7CyM",
  "key23": "66n26C3UB8nEY5JP2TCxoAwRJdGNGwmJyRNsVnCyELnxM9t6tkGhZBZDgSyKoMwNi1yKFC9JZ6TAZUmRBbiNXSHF",
  "key24": "4BSTNQugXtXMDK3HkNr9QjKXCRn8bcSSsvPK2aBxseAEkPhcPJjUibnrNmKybSvJcqoSactri1uBvozpL65CpsQT",
  "key25": "3CSYCeNa3RTN8oHGSQrCYXvpdt1itCNYCZfWPyvMf2oaVtNdFMcRm2x6buKsmq38xkBuqu59Yvx8apvWeKiW7c97",
  "key26": "LqADVBtxCkEvyH9w844ag7vJv5qtAxyRvw9y9zN8sA3qFgR28R5zvNEFWaMT4GRAP4KNWvDcTr2WxdXB26g6E7Y",
  "key27": "2RCU2Wi3uvYsCPgvLwnaTKRq7osQd1RtA17EsaherzaKmu74P1y8cyZ6HQQZ5DEeamHbJDpkEtGiHPB87QZ7kjpY"
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
