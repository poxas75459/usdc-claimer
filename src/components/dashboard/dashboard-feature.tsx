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
    "32HqvLAFe6SHQNJjf7D9oQGQtYJ41uNuhisha8nao8qmxVQe7fM7jZ14DLCHwwH3s343DtT3BwXZ24xsbqqzMHXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fiQcumK5vUx2gkR3uwiTcsMuiRz5oLQne2P5ry1xe3uj4fRpFeFh8ciHEXhoUdrw8xisQMoaPLTz32B8YDdG8KY",
  "key1": "66wvUN98cAvj9Yx3SHD1DaNdMDY7GKDKLRFQoM9r13eW8RFtf6XGDhJ8GGBo64kdkS2Px7GDEozqUxwbsAVF3HYy",
  "key2": "588JUTyjMVhaRVv3dYmmqn9XTwZ6XRPZdTBf4NKasc23c7bkm1ZrAKmxcFvFYEKmCPKt9Z9f3cfg1NqgZVvmTqbK",
  "key3": "49CGmbPSrWKDRBYe3MHJPKPkSZeP1Ni7UMPXK6qjNqPywBbU9pNE3mMGLigZRSP9UxRtGJfmEe4gdF51rRpLmZ6F",
  "key4": "48cUzbYkK52b332u5XM8C5TtnVeUrwNHPE9DenQRkB92KynKVjScqMKfD4hiLxhWitChe7d6KLUYDYvMxvsufWG",
  "key5": "3nVTDe4KGPFbwviuyjDdGaDiG6ZK7KFCFhrB8AqpeSCUCB9yrvWg6dmj1WRJidSzLNYd3pVHjBkCHph3NJ1dUD4N",
  "key6": "4u3UsJuNzKH2vPRSgquqnpC4RxDU8mekiuTbCt4hGAcmm1BB4FLY4T2QmnYBGbwecN6sJxxneXHJcNR8K8Bqm4hD",
  "key7": "4ydzJGVZNubEKeAcidYEkACDJ8AZa1Jfe6ZQs22CVXwZGH2RfiPoNdRAixAGXeTRmV644wXu6J6MwU4MKCN2pf1T",
  "key8": "3PuiPLyBPqqxgfmQTZeNtfxAFPYMUn8jTnRMKnnFVPD61SfKeb2YByc8GKExAwtYUZWT6pEV6RP4n3htNE5ypyws",
  "key9": "3Z1qRuqXVCmtieLSvREfa38hgBkgDf4KJ1HZahqtCQq1kSjE1PQc2ZiQ2Y2qLn1j7FMynuGhBmQARCPPaBYR8dQU",
  "key10": "4AgnQrAaGssURFUFYPHVu7FcRcXuveKqcsqLTp6c4SAttuB75maUVqV51HHZBkKTgp8wqnVZ382eaHSnK36d9Cta",
  "key11": "4G6HuX1o9dpTMYNrt4P1e5AuEXReiShhanPs3ShZi6yJwVbkEAZAXYJrxc38wPNJsiKC9MnuoQNinb8pdJxLQmxH",
  "key12": "54KdHYYCC9oxirgGNNjS7D1Z85pmpxP4yZTWc6qa3f1Uqsrw5KcQRFgUwNgSaxovjaNHQufyjNywtVVLT8M6JkjZ",
  "key13": "4mLdQuTm66h2ZJ9nLN3URx3F61Zs2KAWsTHMh1rxpzcM5HicnQMAhoGUQyamsCty98oA4HC3aZdsHdi4w6gsJmf9",
  "key14": "2Ks9JaRhoJ1KCK3FcE8DGcRaQUAcF5W2RdCQu8YEnhJxYXYzadn1ZZ7dJGSs77hCih1RgMGy4b84q8rz6RTux5Ps",
  "key15": "2kZSsV1f2J4yh36DPgp3wWZqDhi4HsN3P7Qa2m1oXFTgwjeJghcVnP3DLncNHhpsZgxTt5tUWcHZjZzXieP4uxSF",
  "key16": "4jaihZcVkL1c4dJn9rUZKZE33KfR9BHx53otaLhRjjXnpuJNoDYwpijcLkt1rqP7pMV5sU9saehagR9Q3i8oGgTy",
  "key17": "22FCH5dMbjfjhALybQfg4zhBs4hie1SDt9JEdhoGFrs1zcvDg9raJWK2gpQ27tML9p28sjSySo8oSoDjJ9ZFJMWA",
  "key18": "nuU1WwsV5nCUCjVNe8VH3pq8CUhPQqNQfW4cKNSq6hHnwoafEYxeLkkQbPbv3KH91uXvmfBfvnqGkG2PVV27C8x",
  "key19": "3FbVwpwqyzxirhQU9H5e4Kux3k8CaNQNHLdoKFtmN4You9AbzGAPiHkwgg4bTiG4C7btzsoSwzaS4jpE4KJmGtYt",
  "key20": "VVPUeYuSG5HHPM1S1P6x12jgS1MGTDhf3vwonG2AGHA6Ucy3vjKBoL4Vmpxo9cXX8pnnFM29fKwFaV4yHMVx6JK",
  "key21": "5xqAfBoxmJqCJdsBGAVYVR8zKdiafSjXYu5KpysgkFcafPqJYU74MUmiaDsJ5Q3CJC6c11h8unwubSTU3MXs89yo",
  "key22": "5hq36JoSZZQs76fcofjgwLyFjis7DXqbEsfHyuhLagXEx5eW6wXxMKjiXSv3iFMaT5o5tZUpD5zVLXJLNqB6Cjkg",
  "key23": "5g5Xx9WbtEpsy2MDLHrRef2n4S9KL1eorVeRVLy7vDqz4S57sYcHotbGMhKGf99M5of8DR17YdYQt2dXUB5U9wbJ",
  "key24": "2RLEtu2zwuMvWzriCTkAwRYYuFVN3VXTfia4Sr5UJhUQ1932q4MHsJEGrauHZ7q1xExfKY9DrTGHzi9DcXuHSNp8",
  "key25": "44UYrzeyTdzaHc93rKa2Z3JdN9PTGMzGNAXcy3knK25GNN1vECA8tHcahR8HmWPd11JSPboc4EpqD831Jxix7e8K",
  "key26": "3nNyEJNjchcpyFsiAZHc3x9YbqxWEh4bTdcQQtDmVL26hoW2hGcufeFmd4EFsgFR2xzmieAE7mfD9mGdk5kCbHb2",
  "key27": "DzfHuGW9rPbrMUZ5C4REkcN3TjVgdBnJ9DhHTYx7A5QcnB5dbsvrvyGeHBznsemXTSBqnTbNvZp3QNAUvthS19G",
  "key28": "2cWDEr35GLTumhwbTvYK2Bvy2L4FoZ9fj6o9r3x49wSPfR2xKcBRHKdr9KiFLf5LeKMDAaRGDgRXzZFER87YTLbh",
  "key29": "52YqMrLHiCTU4jE481rrGCQHvBHjnXqkc1GuaxDt9MAGYdEGfCBeNkvxbG8Tcoz7of466CvKbKpMCuXMoPge5ha4",
  "key30": "2swzYJVBQ3cR99EfFEbyRYMoCmrZLHB3F9jDUGgTuKzhPjfYLc6LtGYrdCqcchAQGTpqeRQLuAaCYxvtzQqLVGQC",
  "key31": "5CKbHtkwgzdyfgFf2fnfDsr1shv4Ez8ZX28PBrFK2u89ngfaHpVygs67jZbtDYMzHq7NWPhKpx4SWGsQjieAMP77",
  "key32": "4RV9q7SuaRpneKYb6PVQHo5hmRxAMaEQ4ea8csW36btT9AG5xWPWBEdoNyPjY6Fif24PaYJ25mrus2kP8Gn7Mb6C",
  "key33": "4uBV4zEc3AaMbBiAiz5ePmNvJa4eywsCNfGr9N9w1eGRacYdxbUe212tnQo6cTeh698S7Y8TwwV9SCGZxxPgQZk3",
  "key34": "3LKp1PWroqf99Bzhx9t17dTfwX6x6dXL8iPtSFMRWE4AuFcHPBphCXPPYQjxiiqtroRrjEyPtuzf6cCDPjjiBbdA",
  "key35": "3n1td2hq5LKPMZqNU4jbY86oZ4nvLx68t3zvFXxuhXhUeaaFzrAri45ze7vbjzEnVT9Yv72oAjCWmZdMBuhkN9iN",
  "key36": "65Mef6Hak9XtxNUHXguymkqawiPh7thQG3NC8WQUPmsKsdce2fTtcMBTtvr4U8p1BPMoBmU4Md5pz5YyvyR1czJw",
  "key37": "Fqqe1Twg2ABLyDYByQg2maM2sovzLSSt1v1PBT8q3Xkyzp4CeDcXwgQdBz5CqYZenardXktvhcuQQWzG1yKYsPS",
  "key38": "4q1mWNA1DDcEjxmLEWQqkPSvpb5BAcDK2W3w2kGAs6C3V1yw6YchFQ9LnMz2ZxoraxMnabGBdNVnnw1YnMTTndUj",
  "key39": "5kuxXNpdvCoojSNT7CoWRAQdDR8UoxR2RMJtngZqCJMATFPyFa52tdMESPas2DNNhvDDPaEKtENXW2nvgwwBBPrc",
  "key40": "3roK3Jxgag2s6kvbFamJeNqvveD3WWoYSroUx11XVWs8KNU6uM96V96G1iMwxb8NznrdmvaNmSWM6TVejH9eMWHw",
  "key41": "3rqRCD85AK7Drqt2UBzqqpJm1nh84vTz636eZNvGkqY7HTSDaE7rQEi1sjjBnafPqTpeY6CWkipupxRx8Xik1tgP",
  "key42": "szVzgkDJ8Nx8VAfkeFQsoH3r6RkgKP1iCiPb33pnfqypgWwDDFe5TFoFXmbnZhBxcETpDvP4dAERcE4snycqC8Y"
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
