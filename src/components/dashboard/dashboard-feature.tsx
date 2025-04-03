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
    "5e6Cmxkjp87A6P6oLhsBDEPRsZTaWcvGARCbpdVKD85iLQ5QPuHRJqHniHeZVJrawY4g7sr2Ng6rWEZUqSq5Bfcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wHGzW2mHKkXK13c96DbhKgLKFSqouPAnTv1i21W51sSd9AcsLbmti3j2rxPcak7LEqWxtc7efVQMrCJzURi6NRx",
  "key1": "44cJkRvDh3bRhMaE16tsJQ8euWvgQRBuSv2gAi8pDaU6yGwY83iqpvhAEvGjR8oJ3f29jZUkC7K9jZ68EGYMeWrk",
  "key2": "5zUrDMRssnFd2umHTVEFHJzQ6weVphUXky5um3vEUCjvzf9ZJ4PNpN95kRcKVC16SgagCxkJ1oVmQysaRdZjHSu5",
  "key3": "44fVCb8kkqGcLSVETG2oCFswBtYx8sGQs36MVVoQgarB4q25Pv2Rwg85gPz8sLmuLjMmmBhzRqViGM9muDBg2nBm",
  "key4": "4AscuTeZSvSdd8jDELm9wwuA5SQ1DgvFALhTWwkBha65L98Qhm3diUV2VESB5W3Zepgcj6Keq2jBr5TmrmYUWuAH",
  "key5": "4NGQBceJM1XwZtb2RTpMgmFHvanRUsV7HBprDvxvHQo2hJGWb7LHqFniN8hUKrpcDJfwRUdQipayDZdvuVEiWVCb",
  "key6": "9z8xpB3LVkh5qSkx2Kv1NABSaZcPhPzq2Tx3B1oPkFgAiKX2j2rDfvA4eFAbdYWNmAtD9HBqZsRoX33K5J8JRhF",
  "key7": "4Wks2B83BY1inKnahqwgMSNKi7KsQ44aB5FA2szyCtnxHue5gHcruQFLiX4146t7hZ85Kxcp8aqhc4WnWnxGMAKv",
  "key8": "29R4LrVkZdQcqaCcPurCPYXo2MKwyk18xXo7Q3P6f6pW5AxxtppPEA6uvZ4rkVsuk2X1HpRP4jubGpVzRKa7S8dj",
  "key9": "5PdjLi2rwSjo2gRRCJTTgnMhgowJAha16wmeEqnzLGyob4odTpHaQk1h1XJimZBDqEViEBBPEmxtvgz9bEcpDBTc",
  "key10": "21dhRMW5r1N6nQXsJYQjCaTZUveSKB4yStgD1JSf25qRVi2xvpETSD3N1HfedJdsq1JGiP5NQ71Xe2jH7FhFr4S1",
  "key11": "3vjqyJUtPur6S62LXNZFhLGapH6ub3hGrfDGGkCvxv7o1ccZKEaASu2cQQ1wczsUSWpvNAVdzMCK6PxcCfAGmz9H",
  "key12": "47kkP3ZBqgpkvpXcVxQYif99quzkCKtjdSQrAUrjZPcXXG8d6BfjYjVRxvKm2GZ4PxbqKorA1BSEnswPiCZrEK3q",
  "key13": "415UDP3fJ7FgWnqNG1JPWNP8WAQXYyT3hJgPzcbgTX2o3fNLNs7qDBpG6UjPCgVnDBgNrk6iaFnTvbh1mrkzZXD5",
  "key14": "38eSsjgwSP6tckEBSJMT3Vdm7TEfk2AWsUXSgunPP1Rc2DnwxAZnJMUbUFvJYNGin5F6FXABwe4FuEhSFMBd4BkU",
  "key15": "MDspVnupokXmgF8GvhpGurKMSceECwEVH1uPGS2dGGRpuR9975LjUB3KdUpyNXGDF4XWUkHkh1XefT5fVnFZhxP",
  "key16": "4e2FbzLiCKmDLDqzJjH5FCzConQjrpWMuwipLZy3jBU4nRW2FVxkpmnwQWo7aw92rSpHo4RA4oTfqRnBCBhREPon",
  "key17": "59HWQgZDBikRSGBsX6NjDCqv1ET15tUQQ966XtnxDNMM5VH1SjKL6YXKuNgeet5orYZfDLh18NVY7jnQzHzSMHyS",
  "key18": "31syWQRgDN8vNrLGhEvdjhHWck3B1CtKnPMqQpR5tVqNKGoESN26tsEYCawRpfSfBVmomw1y3DBfjrARnUbSWHWh",
  "key19": "4jF7ttYe7xLYpa8jWp6WarhGsmsGLt2PSCgKdQXa7mX2Q2Q2Hn2QtnfyRBqxrpFTBypGh7VmZahHhjNBkfMudEht",
  "key20": "5gqNdywmTLGsQgjuuw8oDdTzJQXWDmf5j9puSm8dtqYAzdJPsYJH2ZiBx1ykv434PqJvGjzGCH22ejgGeJTV3iGw",
  "key21": "3RyKX8FGNZtsxVNfPUiXPuHbpYMH7XSKgCUBxkyAqubEqcBkHTmuswg9e4Phzq2SPiFnErGmyCs4XcPYzqa9Yfpp",
  "key22": "2QuUmmwNxKmH5iAwXqMpShqG7wiMZnuQgZkdeixCUo4Dn7mmAogsLjZUqak7WwEryXDB7oNUP74T5zFMVBRLT4qS",
  "key23": "2Ub4cVV3yXwYaMe6HWSAL5YtBHVrAPAs8gjqcWYeHUJH7Cr5D46DrN4GD2XUATmWvEF9yAMF3ExGn534se8m9Ym3",
  "key24": "3KHm2yB3Uif4R7p7daMnqFLC6rPp7J1PtS1zFRSaYcqKfy1VfGoR3ih6xxyMs9ugBhEgvwkY2Az6o8yyNXLvkNhQ",
  "key25": "4qv3gWVbHKcSC7ESetSQfhDgdg6ohH8krLykGGQnmsj4GnXeiEXwtPaGq2Nn4WQumkcXeRLVBttTgXQbJDdZaNwN",
  "key26": "5dFrSc4KDo9yz9yTZ5Yj4ur4w6tdJmUP9EbsPTDP3KiaBMZVCpTFfr97j9SkCKRSjGJWspqxEyDnyAAd6RHUKGqU",
  "key27": "4dXU5FHfRuEcFuapVVr1Jp9ypNufstQkcEbKh1Kus9HXuwZi3AydNx5ArDqvungngeTbeXA9JevbH69VQUSUAu1G",
  "key28": "2d38CrLhksrvQ8DSoqUFZub84ztiBAzLUgtzq46b3EsYxaP43TNSA7XebtgsY7SPwZi9xWMtXUvLvyhf4x3tFd8T",
  "key29": "56ebkZz6NugVQocTbbCf5Sz6KiNYwY5qxjKDKy869uNAic1nu48PzJdQ3EsiYRBj9VoPE8hQGHxeoim7u5G3XfTv",
  "key30": "5LRPwBs52McboD6TH8KxEUJbqgf3CwiDdrTcMjBoQHkXu7pHM2HhVrRH3MHCceeXjPcnm27LCvzUMHA5G6SWxYue",
  "key31": "4dYw1NF8rq3p4P7r96NsXY7VbxveBJjQAZVTZvtp5hQ2BdyxwFFJU7GTPBFsGEbfWSX5PAJq5J3QD4ucWkke7Lwd",
  "key32": "2zasteowkGjsx8UbtQ6JaJ9fqKK6riENs2VGDPi9URdHPvvZRAodww92ic1YYQmyDX211ucpzt4ATEZUDUWzSokf",
  "key33": "4ThGBxkt7fCLzQKmXrgWji5Ah77JqyACSU1tg2Q7T8NndzPnqshJX1W8y1Vs49HRSr3SSQgrgbVrPeJd3pU7yD5N",
  "key34": "651wytSreQavFCbsTaJadvt31xRPmJENMouZh1jmKFJg9cLWygLgSTCUXK9kbdoRHACJnafNxa1sJqWqWTqa1gGw",
  "key35": "5hee8NeDRKcT1URVAP19CBNDxfByHW6bJDrFoWBoZAHFZP2otnnoD7LSzJdEK681Xx2pZwrctTnXZdu2DWGJmKYZ",
  "key36": "4RamkKxPCW13xX5YRkh9JipWZymwhTgVEMFTuqEGHscXnXdhyYAKLZU28QMDtwBU8SYHkwcBn84mxJKdgh6aS155",
  "key37": "2gjUroKygeVCwkiH3NVGrXBVqZAhHGpT9zNHEnxRzuYfCwtS621xJPZaCU19UYBHNNdVMEujd1KCx85oMLKCdeAB",
  "key38": "4oL8zu7MBQsQJXcAyCcQugjnq22gaWoy7HoEQqfcfyN6MgDQD9gJRDJ3pSEhnajME4YWb73PYe1rbtiXxzM7S5X1",
  "key39": "348FgMydFTHnaRWLffF1GBmQrrWJboXjNscenJe9E5PG9LGFgtddNdWEKQTMGjcGV8wp6bE8toN1oeQi7pDreKUd",
  "key40": "5VzFgrBuoi6R36rykRjUCXj54GSSDmtAMCQkorY7bQ1qwcacyYwwivHowgvqipNnJKkeM8HPCaVx8QcPXCq1o71o",
  "key41": "2a564KHYnkUkPDCL8BmNycNA9dRvCqhDX3CwmKWKco8BV26Nuz9iLi9ZBU96qmav3tbeoSb59xXSaNrYLZdBztdt",
  "key42": "EBLaeUa5B6WGtkN6DFJ4bYDWR6JshMnCTFpgayJ9dyiWVMYVAMphXUVKbaKE8SdCLmWR3oXzQ9s49ge3SNvdDRo",
  "key43": "38ExZVmNKPNvPVETxjxMZZt4xq22TJUrH8KXeHttWqrndYjcMYoXSYGvS8uYEFUBPZGqSxQRZyTnNMnyRVNbNVW5",
  "key44": "316Sy889mWE6w7KF5dGG7sGc26CqmyvgTybNzLNe2xNdkM99iY7zVLGUXvYmMfrWakxTn6DW5f2WopAiNC6hEuFh",
  "key45": "3X5sCxrrXpuP1k9z67iVKm3uudyHQvxzsEDfYjpyBFaGGLibqm66FvA91YtZ24g21w5bKHpfVmNHgNMQVXoB6XMp",
  "key46": "5UXLF5FNRbmuGwabwPT1ZfHZiZRaffEUdoKARK9pkAVcU9bPgeKW4BKfmGkwq5RfZoDBLEx7AQTff7YHaKive8Ke"
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
