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
    "Lr3WckLdvaQrfMQooDjHgLQnz6gBZnHDb5qoi3cgQHP5htmLpDEw6SbE8jd95WkViAAejbT6HkSrgVixYTAMd75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EgZXuZQE8aAH2R6z25uTfQyqArxgWGKx2ccwEM2FC4zhahJjm4hTHSWr9J6WAuztEVtQiS5iRRPGBFFtZkjcspg",
  "key1": "5cHRTFbwzsqPRZumifxF8zLbvEDDk5VsXx9xQbyv32metLRr5SgCztfREEpnExThTR3szE3eGDSeNtwYjYJu62hR",
  "key2": "2orLXv7ntZ8hkU2MRdG3SJRwR8VAd12wcNNQBkzrQFyJ3PPHbV9AjyUawT5PphMpP7f3xV25scT93cJSfQeaPr9V",
  "key3": "26kWufmUaFjWEqh4XJGDccu9qeDPAmB8omFWtNt2ErocCipj9mMfgs8MiXszVtJTo2BRjizLp7m63epgn6U3tJhi",
  "key4": "2o2QxDMS9LRW9GP2uch4qsB99nTd3uRNXbiK6ei3et3soQmu7Yt6qTEYTrB9UHXb5Twdib7aSvXoi5iF5QJ2fKAS",
  "key5": "LgsvVFy6CvVSjrDB3gAh2kppsXXF9kLVGkG7c8DN3WSYx4rVFeuw6LLXRcTedTsYnAJRykHB2anEwmxPcKkuRUf",
  "key6": "2xjq9RfyNxHuMGhueye4rMjpZg3uYYFHdGsfaLb7GzTuKG7VaCyzMa1iSzAGGZqvk56yDL2vwQ28VDnFPbkGkDWm",
  "key7": "rEANX1wQkPAF5znfGGPdmpKUja9hi8yL4C67vH4efPZQTWfm5VVRxvi5iKydWUhTjspTk81CrgEwa11xwj6SWRq",
  "key8": "5RXzxETFRSEmkc3uxkG5R11BLauV5QHMqzLg56XiF3NUyj41L6M5YY3oT7dVwBT9kCkNzerQLu6QsUMauiQLtYZZ",
  "key9": "63bXuF9nBWuPNggy2fUickEpXub2fQ1BxSAZXpY17WZwUM91CuArERXdQLHtgnZL1HYhqPqKnJvLHCmKnKZJ4QWm",
  "key10": "29RtsKoRCjZEwZkzx5WWmKemtLoithbZMDUx2SuQcWwpT9nHddphD7sYDSUzYkG1a3vD79k2phaYwJ9XM7XeKb1e",
  "key11": "5ZrNSWwpwVgLZMAeGzctsBigyueAviZw3hGszjTmzynqfPJedXfp7vQD61aePZFzk1eJPmjFTFKCW1VwgKiT21nS",
  "key12": "4JiLDs9vGUJex1KVNAjNcRWLYwvfUGAQXTXwSG2hKzNQX7sRRqv6QZ4ozTxnYxRG2R2WVAqZ6SKbXkUSxVsUQHvT",
  "key13": "FevG2nQqmpQngofb8tZLJPyYPEhTiBV49LVt7iXnpvnbMXviRmvLRBYWekvnX9S1GQNQK2njCMMKaKzMGp4C4uG",
  "key14": "d1Lvmc1fyoRxfPLkj2zFXaoa8r9bDEspAXK2S8d1vs1iHyDpuxPiYXLUvNJ1Ybkpsdjn9oF55y4d2wbVwnUyX7g",
  "key15": "4PZYkx8z2D8A6QCHRWRYKiLC5KFTP7SvZq2XTnbPgpViDCefK5QjqYhnq1XBEhRM2V5mM5xsxSsS8XQNYFRm297i",
  "key16": "M32cJ1vWP2eCRkawRtxcsAjwNgFVZZPmrKneHaiduRSan82fZcYHac75Sa1jkTYv235bK3b6e8dSpvkR4J8t7en",
  "key17": "4HAzPNVj4hPYiyPJPrBXySuRHrfVvNT1sCE2kveMuXDdXoi4PQk27dHL9PPDUfYgToEyKM55aiBMzjRgyvro8fVs",
  "key18": "2WH1T9anSGQAUsi8EJVEuTiGohQtdw815UvRJaRgoPS9yLkS9UPcuzDyNum4UJM3eqXfDoeEi7cRfMMs4YC855SP",
  "key19": "2YMd2KRgH3YVUpH9rGkDvumacBEzSg7Pfp7rYaBCCYXfwVTsim4TQ8C8bbByQXtMtr1StzNgcCdw9NDEDvzriskm",
  "key20": "5HBdPyPpeFRkbs7aDhzxo9abTVmpdYnsucd54HmQoxbmFha2anREBYS1cAF39GVrEMnb5QbsrPPZHynrsFXZsNfp",
  "key21": "5vwQEWzTtTtrvBF35iPjvAEKGFgSA7C1JwHDg1qb2SCEaho3FiFyjKAYPe7x2ZpxxCDCrwMDaoLzgYDXypeXCeyG",
  "key22": "3Ubzsdf2SUUuW7rWKTsRbCNzU4N4LGz2SZdKCXX1byKTpXztMsLfcVanap2ohqA7dFTdx9i1NrQnpAkdCCPzBrKr",
  "key23": "3QxRepzJ5o6Nqni58HNHPu4FojfNTPTTwWsV4kFRhrAtmmPBEeXB1dwzCFy1u5B1HdtB8NRsmKyv14D5jH3CCnDo",
  "key24": "4sQEMsDmxAcZxJ8VfVF7TdUCpSDwAeko19yKELzusB2pogji6mKsZc8zr8dWvGTBN8qqxYZAWUrygCzEK5cgQb5e",
  "key25": "3ZHe1HeK9DSgQyyoGJdaupBgtrmcDFudMPPjBAuZNDKm2goGrvkuigXzioficn9AzW54kB9hiMA2PhXttNqnzPjs",
  "key26": "63UMgub1RgD2vqouxXNqWCwYJa2KrK4tjhf9aiEW6ozakuQWm3E7Cwz8YR6K3hupJUw2YhuwydNF65hfjH7J2FWa",
  "key27": "3swF2DKuvzLYpJjhiJZduyCTd8f9XhAe5DVhXPKUeuRZY5Gcd5yo39yj16VGL1W55cWHD6Ejo68RuqMCWLdxXZeR",
  "key28": "Ue9EidF9TvyLYpYZpSNVSYuqF8vyuswcauT59UZzhZfn3fM564CkuQQJGN9NqEyBJmMDRw8T9rjwMdQhncyqLeT",
  "key29": "4wL5H1QBW5dv2k2pNHkYm5bhX4woSPuzKkS7ZGfAqg31ngnJFtVMfCMFVCJnP53SxK76QfvoUF7u9oxbGygLwyUx",
  "key30": "85F64w2BLL1gcm1SwWQi37mFjUEkAfncGAPzyGebKYdFrf9Q2t47oq8peWjBdpq72dVPPVbjzAAVZhK8tT8UcPC",
  "key31": "2Yiy3TBdyiA5zbXbGhyLZtMc3Jodn9XEB6cLsQ7UGriCv9kqpw3VF2YLDac74Gpf2gNQLTKhDqEPqAV3MHFZGWBC",
  "key32": "6AbRzMKaRc7o7gVCLh1vKc7vxeuFvNH58WTR4QGx8XVMr2Vzgrpm8dDLWf7mZFS25jXqFw5aRvMAyeHB2jhAt3i",
  "key33": "xemxnegCX3MPRFrfTJnkUcFPFVtTvkpm8DjwaE7yKD2vJLxQQ5vbvYTAF3KoD4wfN2jvVPhiTGhVT2uCudk61uw",
  "key34": "2eEEFb2AobwxvH6VwuxCFLEY5ooHfZ2ZrU4Lk1wo7ghEUYKVBVSngoBNw5JPMjiLgVwku2ikMHJnaSomFipAYjib",
  "key35": "3Dmjp7EQUtVoaLYBh7zGfaHS3AzJNtgGQiA862bGHB78cWTyjSiQ212d2qamtHBCzD2bWY5EJvoRDt4CuYRuy8TQ",
  "key36": "43RWLUM9mMy9g8Tm9xc8eXqwwZPC1qcKSvVhcaRGxypLc4AcM5wVDhXYtFTVDmzyuNPWFb131cSD2f7NdGzzff2L",
  "key37": "2WLyagvkZq9tEWi2Q43pz1fCPeX9dvftvCzup9QeFBQozD7KNUL2Q5XEov9jpWaqbXryPfYW8VECr3uac9SsJmFB",
  "key38": "4xpnpKrnDTPVTG3UurFmBfFzkTXvTijx3HJQPJhjovLMCshjfgk3ptzWkxH6E56JjwPqXsfusSHDvqrgaz2pDExF",
  "key39": "2tjW4tkbaGUiLPGDh2tfEtc1QBtgVJawooqwMB1aZnV3g5sd9ZLDdBpULJXBnJJx3SpEbC5wBQG4yhKb5hCUWjga",
  "key40": "3WVwfpKRdDghrCqG4eGW3ysnzwjyd9MKsoKuAKjtRqQ9dohzZWwTH6FmkwPSivQQo1LqWEmT7mwYDteCZuWhykNH",
  "key41": "5LxpXFJgfXBPk8p9mwFCGJAwZGRwUCvV9GQsgmq4xng5B4o6hjH5rZxTMdqtEQgYZZB6c7Rykhnd97zX3jb7HmXj",
  "key42": "3zXcCyETUFtPPyMp5119XkhQrTmth5nu86CUCcKK5ND7qq8eET5WWGYycRQRELxZHhAZF1UVgnkCCzMvP9bsWDNT",
  "key43": "3LmZQMi1xy7SCr8ZNEg55KXtS7wLbEBVqqDRkzeAsjsMKyB75qE4FMviVqdvnt6rqkKXPqkzPxsYbcgCZyEngKws",
  "key44": "ZEMxWYt2NnuLBkiDWmTyarAQ2FXMV4spWexUVaM8Z3ouzfxf9Stb5FeHj57C1nkKfRV4g4mjBZdg5uPmkSkm87V",
  "key45": "4eKSMGgjKsyhZqX7AxpSjWNsrSsw4RAkGD8NcajdnjtpHHDCzn8mdxHyHUnyt1FqPq1rA975qhB3XykMBSwr46Tw",
  "key46": "2rPdoNU8WtpZsE1qeGSVLeG4fSrZhgi9vQaXE9jaWniiTvcg5iZ23BPzvybgmqnAdQ4FRHHVpmDDwpKxMUgfDEkM",
  "key47": "GDHqHNsJU8Vp3RUtvVnJErNzojRQFGN8A1oQYQaRZ17MyTnxGQZC47ioUVTqwQBicnG2so3qmsB6dXVjBTng8YD"
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
