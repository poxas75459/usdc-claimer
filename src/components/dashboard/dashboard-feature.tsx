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
    "6ydtUjkhH9e1czJVcq8CVeT51DhVX97x4CLVYX1vdcFBQaoKaHNxjDHw5a9Jkg9CmpPq3uPJqKZmVayDmKqM8R5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hPhvg1u23cZrh8wXJBMNUrivy3qEWbzLybHr7QwSWGheadgpCHF8ERjvbSHdRjQZRAG5mU6ei3GezmbSNZs8t1X",
  "key1": "2V6zLkM25k9hHYi3jLWywtHyQBvY3WyJgf1RM6DBdptuET3r6xcuzrXCaWgVwoMuTrTKZGjRhUGvhZEqh1EeJPhk",
  "key2": "2dsYfnyhW6djqNXgaDZq2ej3WY1S4ggpYTV5xPpG3Jr1Drz7KKfMx2yf4Zz3BEsgiKGxvf9Us3Msp6PfVTDb5iUt",
  "key3": "4xKcKLQDeSz9kcJQPQCQAuT21jYmfPEZ3PzwtMhmhYUKYuEPSQEdNTetu3puKwNX1BhNA8YBT5Eu12aw4f5VkCma",
  "key4": "4hnrUtRC1SSENJEqwheZobQzpQow9KRKWMCGirqvEnhAqe7Ke44ASZJzo6QAHV1odX8h2GXVarhrq6LJhrse6qLM",
  "key5": "KA1WthT2S52dachLNxbhBUdkc8CkfR4zYnxVrjLX4LZEFz1CxbuSaUUavzkzepJNjayiQvRAgFJf3ua8rMBGoe5",
  "key6": "2MWt6RJsu6wYdVPn9nNDAYJZSWjcLkUZv8kYw7y66fgfEdvzp9hvL5CXSD9LmVT2BBRTGkcpN8BwPBErDY2iqaMu",
  "key7": "465GJcnuBU6iFbszzGSCJ71TRHQRzMUy52XbfqUrBkmenBMgyq1ux6UtgpdfFRStZUbeRbvi8cYod5tn6U1K7urj",
  "key8": "4L3yYcqtinTXPg8JdSmRkmtoTsXvbxZPyWihUDJT3H53gJNVATD383aqkdQtB2kgT8bAPyWSKMHSy2LDmgQnBNvw",
  "key9": "37xHdvGNN7qFs2Kn7dsSDs7ri49JsDBVu1mupyBb9GXXvBLbJvDimdH7h6ZAH3AaDi6yBfmTfmyy6cszHFzfxuzs",
  "key10": "5eqE156gWuBs7MMuiX71zHMmqAG27atuWVjjyVgnD5zsVamPHofnrimjLoBEzntLYtSB2Q2rAxGmazuoQDX7GbUa",
  "key11": "2CfdGT79pv2U1qnWmY9zr5vXWMM83BRgkb2BgwgfyRtEdWkxNcjDt82g4TRaLU4XEYTfdAtypgGgxC4xrA9tZGUK",
  "key12": "59CcwardXDs8BcLtNrxfjtqXCWNr9eYarpFvktoiErMdiBFCvso7jJ2Kiv3t2zCiCDMFRPwZ5r1SG2ka6z7BVDeC",
  "key13": "GhiKedrtT1DqdCBdvVC8uqqPHk4P99N2zTNEtaJ6bUefsjAVdLcXpKPuW7KwrfGoinDErmvcPHiK8TfDuRK4eVA",
  "key14": "2ATZnej4dGbSexJsPDADa1k5ooPmwDMRR6w3Ehz23PNa7NDjAeJXxzEvstDyAFY8cV9ocYLW2ffNayQkaujP86mH",
  "key15": "2b1fWZZ6gcYzugfCTCYZrhxk46B4REyb6Ro22YrjkXrXWatB9m2kPkZneWJDTX2kqTVQQGmWR8RWzEz1h8AobAD3",
  "key16": "CriBhD2romVKTEQANvxxGJtJAY77GXG7cfo2C1G5w6PDhUfBM2NdsEibxXCBp9oUVHW49epmA4EGUZEfcSv2jMy",
  "key17": "5Z3meEi8AEFEctmjHyRX3WmS6gNPjui4Y3UYyMnvAW9cyt2epCwAmGdtCRJegZQQnK4ubVATB3MLSkiX4hB27fL8",
  "key18": "Q4KcKWfhzpLEumd45BG2vdj1VT6UeCe3Dq7Kdi69w7f8ecRGgWbTPJ41svp6TMddXEUUCg5TzDvrfCozgoaS65z",
  "key19": "4Wk53XdF4ZatBod16tvir99Q1SE74RWWFp2mjmGrVrDhVjhRgiXirzowRwua7nsrZJie7SsJATp1af13fxhpbMJd",
  "key20": "2asPmtDCB2MSHojnV1FsRYmD4uy9Bwtf415WdGWeDvghndjb51pu6e8DVzH6YedBFyWHgaNwBc3YSiZSzAX6cfg6",
  "key21": "4xjATBqYbfXTqryE9FZgfogAt25DZtvji6Nu5dSyW3NjqWbbJLdw6QYWT7JwB9MzKvVykDuHDnzHv4xWKWzRRqSa",
  "key22": "4NbEp69gPbpeY74XoG8dGghnAv8PEqJQYeuNqgao3MyWfVvAj8xTdFqx5X1e9WWxvokdvC7vTMEKmw2Qzgm75GhF",
  "key23": "26fF1ZFPoPMvAuetLvwZ6QHwCtzs3FPXKSn5vVn9zqcM85BEF9U2eZCqJrR83VDtqUiyvP9A1C6iYHTnWVapPak4",
  "key24": "dBF3fdDBU9hRkqg5vwysJaL4ixjwgn2nQodqtQoS3K79JE5kSXdZ6sV4TnfLRCEBXjmxKHGtvZ1z6KEKyKeR6YJ",
  "key25": "67ZSr1kUshmdKUzeocihBzCcK2TLcHLtFw2zFxFJpzMNRyfnyrdoUBaykNTgrBp3triKeRUZfSAKW5UgEWayWy5K",
  "key26": "12534aoQh1EkWRdrSgZbuxCqzAg5MZQ71yiZGnWW3G8fYh7LNbnt11MvHpiEgbyZE14WceWNcqM2a74FPte1DeAe",
  "key27": "2ZqX6AVcaeJR3mtTuX9XpBLTwfpog7QBYM5HuBWA1AyqX5fsTwrekzvzFe6kVjLZv3EboukyKLcjv4JofHD7ETiT",
  "key28": "2cocFjJL3G6TX61vqRVUfHRJKZp4fWTBHka4T8GdXYzoZw1fhQ33kvi5ea64xFR6TrF1rcsPsyNTY8LZ6x3xTWyo",
  "key29": "2YjYhDJ6VjMDpejWjLZ8Rkg6nWTQz7Y5NqKsvXsHQw8DDKU8WyaGAwDp1LxDbNTbK8jN7SYs5MN72jhq1iFwwuGk",
  "key30": "2XfKhVxR5ZmW7W6d9yFLjjdYApHGSx8mXYbuQX6BgoRykxrHhoYD9YS5FCHRwUJGDj1oQXfZPdheer5uNdMPJqDJ",
  "key31": "23ZCSqg7GNdpcgdrnpgFyNCgUT7CwGj7tst8akdV9z9ymZDoShXzWp9H9hNvBj53i3vM8Lpwo4PzTMbgVnH4gxYb",
  "key32": "479ShGiV1s61pXwHMH3ghQdupfF7xP3udFCpLwCPtUAHk8t4k2ih1RtfiuAnry9ga4UgNeLXBBmzvtQaAzhXK5XJ",
  "key33": "4sYYwLRqKba1uWA5ZZz39DoCZwASCmr9QhiNN12TvFYQ3RinsktpXWFKc4HCXbjHqQsAB3wdVj2JqF8VNvKcYrnw",
  "key34": "3Uuu4RU8Q2jBjqGzs5gMnBJ8dZAkZrEVVzetVAZha1DH9WrXSVpT7VApUzGchGzxcXsMr8my5mMWXdFiaCZGNk9E",
  "key35": "4t2v2J6Rhn8nuCJDgE6yoa6zL9g3WsNAk2Us34xhhgzbu9eaeY5JNWxQwwZjGJeyUwjEN46hd6QQYhumyoA1jRnz",
  "key36": "64hVqZtYWeQAbi24SazrrsH3F6mPVHCoK7ccLDKTtw1npMqvHR4ejphzykW4sNhqhxkJeMd1rTGhB4goxq5Ybi1N",
  "key37": "3KpowsNB2JSySyY6aXxYQDjCgdNmB84DF84enAHRqSAe6XSefwfpLhomfXqw2NEnrenk1QYjMLBh6qGvDCWTrcJq",
  "key38": "qt6TkSykcoGQS7n38v8ma9ZpfSc5VXBw5ENZduLvFZLAsY9RdmvBtZAVTMdEaJkRLyemtSQXCKw8Dx1EYXCT3N1",
  "key39": "2UJUBAvs8RdYfEpHtLMifAeHYAkJBitJ5DCwXBPPCZAuW29sgYoBeJpWyUioC33BjkSKdgB35fi8V6Z9NmUvfr4k",
  "key40": "4n9UP82SRojbtW1PkYxecLn2dLs72i5BfSZg4HoZz7RykbRqi7taibWbEspeQJnCrHHtrcbXoZFsNVDcFYa5zrVR",
  "key41": "65p6piiw5q8D55gq3NFyRxApqKi2dhMB8gkgR2RsxjrmfEgwtw29zVVQn6chWoVKagegQdr69zmcgaPRmqQUtHR3",
  "key42": "1CSbnJuTB8dKwqg1arSBYUHULY4tt3MuiEcPQtXC6TGQ28fsGw51NSEJ8MDQuhePyEE45WnZPAbTJQRzsXdpg5p",
  "key43": "5ucLK2cRQiJxbn9Z1KRV6z9FdoCXNDhMiaPqin6hnksgMySR1tq8ms5yqtHN1pK6vxqWLDsQxzC8HmBPuhLL98wX",
  "key44": "26kEeDYFc2QEoVGoyrQGTcvatAUma13g2MY6Wa635CPQhPXupkLvShBiQmYLmaeep7cznC1dLBEghwsoNHPcHSBy",
  "key45": "47RKRW14S1TdFBjwJXBLYE6M3UDtei5DW51CwGU4uEvDKKLqhMqGJF42RicpD7XxjYhJgQo8RZuLsEqktKmSkcSW",
  "key46": "2ZfSepz3zobRx1uNkvQ84w3da85csfRscPFS9ufevVswzLYJJqsUEtXicRCP9coqYv77g3KzYB8ArhxvVGMZV8xq"
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
