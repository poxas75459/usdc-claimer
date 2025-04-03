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
    "2RKGet6K4Hy1wH8KCoxPDuLNcSdkrDycnHjNS45DMyduh4VkEjxo5tbw7zt7kQdTMtfRzPMnuHvHCzfuTyENvU8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T9yVb7N1eZp32t3AdEUDfpYuCKAiuH2NjgzFMaiVWd4dU8U6hmYLCHftx2rBP86u3X1H3ywWc56gaVFkBtag1r1",
  "key1": "STpnALs5y9h5iHZruuccdyQwpL3eQJAUZyqGyinyN6KfR5bM3G1dAs4eXF4RNV9492Ei1sP8BPej58cD8doNqwG",
  "key2": "2kG7ccgAGUsFBCjk9JYZQmZW5NLJv4obXsWG1zoa9Zf4q6DjdAyWgTDbKUGtZQdrep8r4hVHffwt1yUCEuFG4dwP",
  "key3": "5Mwm8AtkoZ9JMLvjbBpVdTFFr2PxWo7S2aXNRBgfXNLZZRBk6jTAucBV4Kr7H65CNWyDMLr1gJP7H1BSnRXo2ktw",
  "key4": "4ST2x1daaj36g266ATx5FM9LBJ6wnmFc2wJ54TSA3J8iNKu2YLGL5aeN3aoGtRRHxYe3BmudzeTyuD8StAqvfPfR",
  "key5": "2jgXWEowJSUsaTqaTQV1svX67zkYUvyh9Mg3NsVMfaSZhj77uUhZKPjygReKLBQApccnQZThS45U7Cepa3WoSjkq",
  "key6": "3T8tvt1FvE9Mu3uncxSYStepswbDZkG1TBg8Z15ourc1XdAnpCUbsMZtTwTws5VBAuSxVB4GJ76V8TMaKWeXGJsQ",
  "key7": "3VusgR8FRWH7k5uAAgm8VmeQneETwLs96ykvnFfqNNicZvDvzJeFx1u5ZUhZyWGxWrgAqzNNPZdVYqcPboTmUdrJ",
  "key8": "vFCjLcvB7BBbpHBnkdKpkEo5pTD4fBR31ZBXU4ytfq438ntLKqwQLBuYyWURTGkgFKUNGhBTbCY8f88eqXMVwXW",
  "key9": "3Ju59k9qaqJmEoqDGByTyJW7sBxijwCjHZrwpg8xkFYqp2hbP9W3gE2pz1PtXoVxY9PPb6sjhEkDYYNWRY98HBB3",
  "key10": "42YasMn3iAfsmsnzA9YEGviVzKSUz2TxsU7Vg8UhpiQb5n36kiNpn2kGTqAzLa4X4SEQtoQb81vWKzxe6yRhAd4H",
  "key11": "2fU6EdSjjAkgmwL7256yyM2CFGxA1TcZ8hz6Qdg8PBYQbKVB6RvwWhv4DZjpo3oBaK3WLkhRFT21C43LKeSKSezb",
  "key12": "DF5r8YMnovrMNaFCkxMssvP7Bxj4RZPhpju6YbVP16V7tAuQEUqVpv9XcZdkenBcrSWN1X1PmyLdCok5ZyfMGU9",
  "key13": "4NdcEP7k4xdP8RpeGMFzKXJaq9fMoy7KMam2zVEQDECtD1VSNYB7H6pGiL1mb8qQ5L25kTR9Eq4hAMGXJ4Ewhu2X",
  "key14": "46jqUAij72NVywcoTs9EY272XA1voe6oiZETnoV3VC6XkvsC2hnezSKMKo8N9tfGYQxL6wnvvnxkkxSWoUTJNnQv",
  "key15": "3rqeudEPqTfgqF3QQapBHjCScgrAqL1uvEdhYmoAfNHdzfWQiM8zBCN7yLzxgHnZB1daKDtkyBRjj3imBfn18ELW",
  "key16": "2NdcebvSxL7hLnxNFrgUdwJdBnt5hEUEtarafeGtRjqmAmG964UggsGrJMSm98dP5wSoDqRne2GCLKuJvWBL4iEb",
  "key17": "2qe5JG35v1wBKHqazPHp2i9ejwQ9QsYvT2rrWyVKqTieqGsyztGpUNamvszzu2mGhmYPhwCNFZbp4gjb72r7Kuq6",
  "key18": "3PRFEXigRcoy1yyTKhwUxPQ6CfZsCzkzt242CDRZD9TwvMwTKj3QSkgj2L9SvEZtfGUpdKkHeBeuGKX4fPB6LA9B",
  "key19": "n2gaFexyrwVWtS6qz2Arm4UKrMGWn8d43PhF685nps1jDjPTbwGzUtB5izvgvr4N4omJ8Priq2ECpxPTThY4mqy",
  "key20": "5PUZJSeSs2PT6dRA1sVeCS3kP9GSPtqsJzN44GBgkGtRvUmr6g6PizdwvMwBZpiLFtuGWUxwN39fnVxPG9AJ8SjY",
  "key21": "cWy7bgbcFvjY6Nzd4PsTP7JoUg4ES7JynVFCAF2c3YcTES6wYmqWJFy5Y9VMcogj913KPcecUyEP9y7qPxPs1Fu",
  "key22": "57jmDzLx41fBZpgi7Qs5C4x7gDktAxKmaM5sGfzZioEAVDZn9PmgMKn9hpRfiq5vViZWBTpMwoYGgzMpqRwiQ8M2",
  "key23": "J2PwiVWV1R56C9eSaAZKbEA1zze8eDVGMKivYyDERyVETDFZcCRJaFRqSJGA9DgaRvRzfavBKY4Wdb3ENegJT29",
  "key24": "5oU9qQMVfuoySM8NDRw4dgzUhjNiByXiKwYTjnbGc2jiNaMBrmsic6CwfDK1u8jntG3SYs8gDfaraW4xse6PWCcW",
  "key25": "2ztLEzvC5DzFmgXymbWTWc17uR6wcqdcWDHbR1VV2FHixDjpG9dZrP4sx8P6ao8EiecKSsXdXtpTUBhfyV3SiheX",
  "key26": "2Ar5YGW4eWqairUmLdeC1uwunZgb24QBwqTcWwNLNuLBUEvLWmta5RGxGB9QwHWNRCdEBZenhcRjNo2RzaaNdQ72",
  "key27": "2Q3Pe1Q6toDL92MyposnoP2xB3H32PsFq6GBTkVJZP3k7wBC5bGN3KCaQjKMK3ee1iRgPbsjZY6S4ZxBicvCQqg2",
  "key28": "2WdpbT89F2EAcQZJLs4AxMKKrRjNexSd4ub9cNwCqptLARrTCqNXy8iEZfbjS7W68m9fR2MnzWwNZHEcMdLJCmkX",
  "key29": "LietRkgdRUWLCTPRwChDQxrv7cYWmX5biUdaAbMUdmLiq8pvJqkAphECQuEfMyhWjXBgXoyDhEuh8hwJorJ6Y4R",
  "key30": "3mdvsgV6DcP9wNpy242BZPp8ECvPZmMPfFpz7RjGPhy66kYBJoiixQFukeVcTL93rapWz2oZgTifk7hTdQMPUq4j",
  "key31": "4gRqjZ4pxJpkhugZGscE5ANFXpjDt9cwZ3t5oMod3spUh8m57fTVW8qfdXfGTXsQdpQXkq7aHn5wsbmsVGpx1ocn",
  "key32": "5ATUdHNTJhCjiF4b3na95RFebYpf4YXy36AVX9hUa6FRB99utUqQn3HY65ELYd9PjK9gqCktMG1FPAj59ddJ5Xi6",
  "key33": "oGYwS77oKbBV6RVqezJRZPk49GDVwgF1h9H7VpUjyGjbRq9iF8qQUtngpkD6n5F1qrqB7iRTmGuFBnWvmqYUeTL",
  "key34": "2PC6YxFqrptxEQfAuSyWtrkrgpWmLdB2XWrE4W99U6G7UjsX6DV6kjJTYRYfWs5QL7AYUU2F4gNy8dkVoX57DK6z",
  "key35": "4kqg1XSmS6EqGhDtdmnUMCnVuUzWXsAHSFY1S1VpF2dHjJ2qA4KXwbsrSrhLy1oso2T8zEejTm9eCxm2mC97CFFs",
  "key36": "VFbHTiEBuCptNrcc41JbxvQiN7icXvfGat9pHJ174myHPBSpurSrMb1hwwv7N1R4Y4JcvhzrkVWWrPX1tYt7g9P",
  "key37": "43Z9eJuRNv6Rf4Akgobyv2bD4nWSX1JpBhKppa2XzinxdpyU94rrcyY9qH5myiW3Ge36jEXCkgemmwi8oWXLqjmq",
  "key38": "43GuxE2XGAPpMRQqEMeBq6MjV6hZVQ2yeWyMkVC6mz1mGtwVQnNN1chpa3MbQHSz4NnFJwjZzUdxS2jTsDs1tfkx",
  "key39": "5oXr3vNSY1CFGcP78aYXJ5VNLJRieLyiuN8MhhUMVy3nqM7RtGQEV5Egk34zfF9ktAH6rBnEQPmJE1nmzb8BBAhR"
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
