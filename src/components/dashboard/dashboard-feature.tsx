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
    "62KT3V1VhG3J6A8TXpS4LmCtFT5NVLxQgckYw4khq3QhQNgrTXPGDaJYSdZwPWy3yyZ1FqzFnzSZ17QdAz2c61cC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZEPbr8nsPvT7U6eWs5WtYvACeyAu9SExsbD2FoasCS4x7we5ZmT78hrs6s4UwYaLr4wBF9epL7JbMU6i7dASc4k",
  "key1": "47XvLT3x6ULQkXh7j3LzqHd1WGuuDRbAEMcv7R25a8U2d66kcmkoVMcX6DeDb65S7emW6AL8hcs18QQbaJ7zMP15",
  "key2": "4EHWFHFi9P55LidZjpsFGYf9bjkxrEAB5xbAKnFGJyrM4C18oSyGpyXR6katLNXrg35F8663uFTxEm1k1cXAFQvY",
  "key3": "2hU7WPzVNCuQKNnjzpVqs1gfXFwhXkNPT6dFgprmGYeBmd72R3BAB85iDtPvQ5Nz4hhKRE6jG3ACBB7VWAz1mKBW",
  "key4": "jQBPevdAHxgdxsTYMsXU4W85aMLNqjTKXRsynyawQg4Cge95uowKqncRgk23UaLVHPAAGg1EBVn1qaZ5Ai3TtX3",
  "key5": "5staqzjPNQA3dLeqgVkQV94CMtNivZ3hhNJrYfAJxXYbtUq85Wuv2qrhAMkKBt3dedJpyEYNqNzdF3oryXRmTws2",
  "key6": "53TXBQTHmKXcvAKwvMkktBgzaxCnchiHFABKfgYKjje44HzRW56a3YxqJG9gyvsN49omuXUhQ3cykcDbnyRdgdvL",
  "key7": "2fafwPj92LqVjvKivTmdKGM5WEWPoNyBvwCxogrqf2ntaXrv9YNQjbMh2EFvcdukNKTHHmMdGADi9yB5d6JBrz2p",
  "key8": "4zscsqAkWu3fZFhuhe6nsGC1C8aPhLrTb46KGys9BYAe4ZuD7N3nVrtec5fG6So1Qq69CCiLXq7HXDeK6RoDBKfE",
  "key9": "2FnSm2vhZb4XybfYPJw9NYJN2ptTvDeaqLprVpb86SqL5wNvpyX6iPQmQBPHCSoiCzCBgX61bCdLgGRwboRDiy8a",
  "key10": "2VHqxDNdkDrvr5aNsehwdRdBPstskPP8vUVkTZPmfTw6ySLBcQdKUHRWxNbEAFJaUre2Z37ErYrjtASNbFXcgFPJ",
  "key11": "33bZREbekHF1ZcrHi95797rbobhensZEWLj5gGgicicaBeMKB6Fq8Q6nf4Z9pZzpu1RUNeYBxdbxHZnc4yEzfMYR",
  "key12": "3ageA67Kc2V5Mz9mzqkcow84JYBEj2MiiWzjKJjxQvJWzdwksG6P1nWri4j2H5aCy1cTkE5AH22w61DwhnWXuni4",
  "key13": "2954We8PRyh7F9wqEXjcLJRmTmuMyye7PEKGdfEyisPkPQr5QUK98RZEuSg5ynLCh22aSqCzXicwov5xsshPfTV7",
  "key14": "4kbcWsLajWrt7SSSw4UmbrxNiffR5YMjmoKfRK4SFrrBYtPKJzPs1Ch6SMRtrQcpyvnSoyhW8cArSRZ7MqnLJiN8",
  "key15": "GWmwX3SoMAGNqL2SgvTKzh6ChyfmBAGeaUScUcdtvttoXcovd4aBYkhA18unVGB4HFKCfgpbBvDnPK3WMCTNb6U",
  "key16": "466v4B27DkmoMW29eheVq8ENZaaqeLhWDd5WnVbYWzHyEwy5o3i4tmKi2btFrZ2iSyVxNzDNUktjochnPVXzPiPJ",
  "key17": "25Q3ArGAGwz4BarbNLraBuhHziUMc4JumnkUebJpSm12Jqj7NJGUyFxVsdcfxBLxmf7tmvmD21tQGDCmagZE49id",
  "key18": "5F8sNKQurQnjZrErde7ptc5NtPzmXXsGufLJ8ng1N14tDMHrpiEmqZf1HGxoiiRsPhVj3Nkw6h3kPehRGzMeYRER",
  "key19": "3P5QsakkWpmmJCv9dVVy5M25gLUZ2dCZBB9u3PLLQ4ZCYGMXLDqwot4pQ7Up8UAJfkTdxJxbfXg17YdhhXL6wtGn",
  "key20": "3URuBEmEEyQ1KSXJRFsc3TC4TxwxzDncH5GpbZEEmtRH5gpzzWWh2vQQuLZPYabB8ys84qk3ny6MbZfqAfAH7uju",
  "key21": "8uN2pEYZiRwmZZWJFuLCsQDqiCFuVwP9uBwqTmQEQqbRUb1gWSVfYqZjzRf1w1j8DJDypUQZUwjDzn4iUGyaVTL",
  "key22": "2pPKuQCBtT356bE5XaP3FkDhrCoV6fRrxnjFcAUj4J9mFUKFnzSvXhhS2ozu5kuvgzcunmqo5V7JSpqgU55zFvzx",
  "key23": "2X1UEMWFYfRjLJSGbkhXcHbnQPu6YFxPCApWC8mLEJXJia7W7HxtgTbnj3kKiKHVw9aeDD6MywHHVBaVT3X94Meu",
  "key24": "3uMQ7XTzMXEtEtwarKNexJXRKLdBo8XXbwEC4eYZdZ9GzBy4bsShnkAAuku1JEeXH9M9NDJU9f5j8epvC3GHQiD4",
  "key25": "PLda4XecZ1iXdwPhoR7PkjazbYqXmbE9NPgUn8qf9HNXyYjJcnoKKzxZ2NGaQDm8wG8dwaQeyYogRvgB1QjX6Vs",
  "key26": "2TzSJSAoXbdBRgPPxaeBSwG59MSMKF3n4vpMzoC7KkQpsmuCJevAaPdfLbdYVa1d55RKPgPq785KTbPecbWTXNK9",
  "key27": "4m14M9At7QNd2BbTrJBS5w12s9ge6FUKYTEtCwiXer5qvEMJtcbmL9GGTowM1AJu5sndyb4WHcd8g6jyn7RzrAJC",
  "key28": "at52dW58Atanes1VHp8t2uTcwHWYYuTccrptGxf9xM3Gnryr9kDABKABNt1zoMDdE69azoxc4GJY8T51Tox9XVm",
  "key29": "64XiYZSWTYzbFjeHVVfRh54NA6ZL5BSqukt48EfMg61EkewwxwgZnCMtVGZ65LGWkcJgDTQi78cQ8AuV77QMBwDc",
  "key30": "5RFaJBxnsuvTyjyTZSVUz83wNps1dHYkWpG4Vy7qYR9PAgkFKGmsHpnes8bNEWG14XZeFhh5BbzMV4DPEzjTVfVu",
  "key31": "57b4BoaupLV99aseiPUPr6JVgXsar5Eke36Yj8y97N6TMUhE32ES9pB7V3xG4EZbSQ8LEV1SL7TpSnzHHtETJfgp"
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
