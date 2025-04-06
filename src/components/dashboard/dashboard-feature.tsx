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
    "5CXU6gcdStyP14cDrvVakuw1t3Ez4WtErWmuNKkKjPbxbBWxU7kTBs2png6yvnQus5EBpUN2w5xm6PzZdhS8Ff2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aWmzx18rFRGuW6tNC9kKLk8KLuej2vTv8wUXSTP2rTzw8wjoQXM8J7hAXHxVFiTfVQaRjnyf1nhWJhZPm8P3sUG",
  "key1": "5aQskLCUr93NPz1W1GfRvkLxh4NyoxsTbVsmCJbGFzYWK1rGTDyat7HHTcbJ7T5abbtumtvoeF2D67twW8nC5Rx5",
  "key2": "5AoXL93iGuqPoY7sx6PFeUXMwKD5Rfa3Dxx7kvqeDfizchLDb88w2mXXTVGYFYs6sWkUwKyj7Zn4CPrpVGrg7J5T",
  "key3": "3FUry7QGq8MmmGvqcTEVZJBc5DSDaWuqeG7TDtsHBqzY7qUW2WQYUHb3cQvmror2PqeQNtn8BqbfGNLVdgGJUotT",
  "key4": "3kkB2f9k7cAes9AAzmkCUbp9XhSTYBDGxCS6ZjNGkEX7DKBcC6mSNyEhNsc28cSKfn3PV5CvdRYRKWZ9YQJKkXQF",
  "key5": "54X6G9WTXsoNg6w9yjX8e8NqofyLHV5hJLZRxBHnvNdzKA57SnjHhqo7ySZsKf7494WmiDPogMaa9Lr5WijM6GMC",
  "key6": "4ux1Eja1LP3oFk6NPL9Ng3SX83dn4wP4YPr7QTeZ7ZBJzVNnihuagfm2M4ELuEweJk57qDFkvV6zQodSeXLfjT5v",
  "key7": "fG1NCFH4JxSgkWWZ2YXZrXBgX1vHukN35kiVJkniyjEmUATm5VUmriLR7jNa6D5mibQcsJ8dnyMDWy4hVsuS5zv",
  "key8": "58CaTJqREo73Q9U9yAkVD57jVUJMgD69hSFo1rPs8WKwVv8ase5qdvX3iXFG5sM4ncLq6g4c8KGkdAfbXe6GNShq",
  "key9": "52F3kekbbkLP89X19fXsE5enjoDgSz4KF2rd4DEya4ZrNSPU8mTRWyufCfATo31KFnLrcKXph31RXtxiNtTbmWaL",
  "key10": "4igM4kgkNayLTgpcKW6AnENsL7ZvziVxn4LfGASeYemGuyT7JCfshoo24He85tMDvEREFGTxdidf41HWy4AjbWyN",
  "key11": "n4xG7EJrhJnqJ3bpuL5sU9St2PHByGJ3k8Pc92TQzgHNpMdQjG73vNkmbodBrCbikuibuKw4V2rrxtAkkUif8dr",
  "key12": "2t97cED79hqeKvmuRFp89bfppSSQbQfbCxeCzGNdGhoCpspX2j8GjucaXKYm1Mt96DBNsfY1iXLLg1VJPCnYmcb",
  "key13": "5eBEUrinZ4KgpYVxmJAexUyujwqtmGMk213GX88ZKr4Jp8qgwNWcMdMviCgqA78wagnUhyLy2LwB3P2Limdfy9AW",
  "key14": "4PZhBinQA1oc4iDREJJXk5oYHfkSbDcZcGvTc29ZfhFG5e61vGPhar2GkTZaPCJfgxKP5GeTH9Tti7ei3PMZXYJE",
  "key15": "5FjJ725Uz27cNreV2aq3xdd2U48MkMgPGAZvbNC8YtAwzsS9McWYMcTJEjiUaHNfD2BH5h6kH7AvWdy3zLMGwWgF",
  "key16": "33gMwLj8th6jjh7GV7fPv232jPgaZfKkG5qeTz63Xfh63VgNnQm2CRZpDnxE8sGeHdogxE1ggJviyNh5xzGjh6vF",
  "key17": "4yKjWaH2Rb1sg2NTsYRh3yuZj8DeBb3v4kEsLi51T31RszYjYMwP7q6CPtfnpMZDfYSAmchmJ7iwznE4AZ1w2xat",
  "key18": "3B2cBRvcrBpGr7es3TSD5siL5JzCWe6pxirCh1bbTjn39nNKDhC97pxm4BoJ5RgVTbnCvP6tq42H3RLpFH5omSmM",
  "key19": "2u5yAxoG1YD1snp4NpUfzqy5ciHEvuAreetYMoqvdZh2tfD8cC36riDFdYfgwffWdu8SgXhEjTBikzpbx2fN7FqM",
  "key20": "54Chen6oZ4RWgA8sAcakU5DtnvEtJzWg4SxZiW2PszHAxWFtcbN6CUB7nFAeaiNYdHiUBjh9m4GPnww8GjKHv9dW",
  "key21": "3RrvkFhDoeKf5J5M2FwwwWfBfKbsJdKjaK3ETU94eJ1ZuEnTsMA6Fj6do8rwPUra2Z8FF3YqYhpkToNNCJbbcLnQ",
  "key22": "62yxtbfmeYkC8jUz6Q3jHykEEmiMYw4oFiNniRZNBoiLZMdZzX4r8hfzpHLoMs1zvtajwBsaBy4JbWvGQnjEr9jY",
  "key23": "3MpnEnjfaohwvMPCvsLvxui7vb56Gc2dT2R9jFTZCrL2YkHaQsLiR7mZtRavQMfaoJgP5Zhw6Q3maEmgKeQ7TwJv",
  "key24": "G9L8jAjb43qqxknriWun2ceaGxL4Qw15SjSC1ywB76JRNCSQxvHyDRXcdt4TbsC4dtZ1UuqaKPzu4KKExhzvuUx",
  "key25": "3CJkNkipRZssKWrEYue4a6Tw9zaeBkV1F1141Kbdj1XddCos2PD4hLer4sU7jxRfbYCVsMm5yPCGzdEjzodxHFR8",
  "key26": "2LsU7DAezwo1NSiyHG8etm9sfLtZzKWbXW519RkiChMX2WzZ2XTzsMDa5PGCYfqy79qyGpKgWois1MEW8EPKz7zJ",
  "key27": "3bBCNxWZjxcdNXkoCCCyRc6VFMwzjw8X9Sjmms97onZoV7ajceoFbJqjGjxC7G9wUjdinuHJWTcZcJNaYwFjAJaE",
  "key28": "5dAMRKWkEpBGAXe8114NwavZza9Q4Ded83GJtncaTLXvLn4m7BfCdC7FEK6Wuux2eNUWCY6ig9cTN8z7SbwG3VW6",
  "key29": "BjACXkmbkSGEmGgV6UUnEsYqiJ8eM9LoS7hAhiXNAPRUhaJW9sgxYc223YrTDzDWKJ5EvErfs3YgwVSz4NMjjPP",
  "key30": "5SFKRXfDmmGZFPMAoQzupWSooTt4xoCUGqzYb336W1nGBgRVMLFB5Tjyx7di9ANTiiWuoA7Pjs1nXRirpoJ5FHpY",
  "key31": "5pFwRfjT7ML3FoEhzPZPQo2x4Tuz8GmNDjwTE9pBYYQtjBBGzVCKA1VUPKB6BLqmJSv3cDwMM8EdHerSToASkZZ8",
  "key32": "37Ajarib5cPraVWEqEKpUD2EdaEkzaMwTPfdjEhm4qGY6krK25wE5gKuFG6C9DCFA2beSEDf72bCXKixavb6DRDk",
  "key33": "61YQTFzAUcRzXujiR3aLQm5zPechWCvqznmV3y65TuweWaiQrrBric7sBeVRBEp4hS76Yde6He5sbvApWpYXLd3T",
  "key34": "4itGZVCZMzpADxiwshcf7ku7n96t3roKemEPXL3ntdVKSLr5xUFSk6L4GvfE9kAU5hPbEXtz4e8D8CjAjrBY3CNF",
  "key35": "5WmGmMuKLSKu43yMcTPCcVAzEcEUAB2ojammqNs11SfhMhJLV5jsMzoekr3FprTc63rWNtm3KxdQivPi87VkmNDS",
  "key36": "5LyG76J1597V6BfpfucNqbcRA3K88SkYfrnCyNzxBtcCLZSjmJf3Wd38rXKRftWBjDEc49gZ2i7pbztJbidJ2Dbd",
  "key37": "5W2TXnUZcR8NnwYRb1Fcn34a1SYiNUmPteeRvG1ka8PNN1gVXKUei6jNKByKgNjopSCrdYmVc5SGpUKmtAwvmmXj",
  "key38": "DErARJa9P5S8Hsrzc4jwc7PvBw3m5YzcgdyHh4REw9M9QZDkjrVPcTc5eaoWYeP7BUgtUQVXtkKWesekdWfJQSy",
  "key39": "4mZd9zfRyCP5kst1Yp8LDdjc9346rzDfGsitMCMWKmCcj1p33Dtjf5fYESxXpzHKwzaCvfHZFLUMgmqYc9XY3rxw",
  "key40": "2BY5SMkNL7FSwtnHdGoZB6XrTFqmD3w9hD15Uwu4AExbmgkRUHwKiK4Dv5hvG7mQDdsH1DiEnxNDsi25QXWwfzoh",
  "key41": "3vJHmSEEhF5Zd19edCRg26VKfBiV9VVbkQGX96KR3DmKjBdWQjiHSfVzSYK7ahjvvsUCsRJP52xB79GB28xnS2xi",
  "key42": "46BNgCvyKiVzLgDiEyWzPvEciarmjBs8RuhrydMXhYsgiEsA4HZBKxE9yyRf822aXYeoWrAyPn2Cqm8W6strsxz3",
  "key43": "3njxaBUYjv4hM265RLoaUxfCfJ9fprSqZzFqwDMpipHkgBNXeBWdfUtP3seJBHqpMyiWaG2VrC36sqARXi13usxX",
  "key44": "9bbsD8HUJrEQEHjZe1hKckhCtkXe34RGDgLJKgXNFzqvgFsuy45srcQGhYLLs2GvU6tkenkfwxjVBCnyRKPWZah",
  "key45": "5wCFwYHDqXzsQwBUb4fA1YVpgYsDEicvwqjn5QqmfgtixfYRMqMc7fimQnmq2kvwMeLYkL13xPEV4v4Lx3ZR5Y9D"
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
