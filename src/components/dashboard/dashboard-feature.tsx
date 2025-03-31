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
    "TKjAoTZLVXfmFwgoteXubtDBhoiYz5mUdUw8CNpGzZHaGYY8UuusTpLyP8L3uJVfz2boyHyMrYxBk8sGHXnNH4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xZR1viZCBR3ca7cdNqGe6yKsba9Up7UURijmCiDGjQvN3LxmiCXPzKSrd4vuoE3NU8UfMrWZiq7A2WRTKztJqHy",
  "key1": "4nELw2DhG1FmfGRXcGALzUkeebQU63q6yh7uj9RPwMr9wTM3f8moLdQ3skJqP3ERZ3DG4VY3afcN8dvMdizKT5MA",
  "key2": "4MDDuNnyunJXYaweVF3HVx37nb6BUaAUD74y9bQtrw6La5VLeuP2MH1Sj7yDUKuH13aEAwndCMQBvSVvHFSa9Z56",
  "key3": "5veyN64qTWmiTAe6g3Mirj1x9XrjuXmweJd7YfHF9RAc3rmRk9M6HZLw4ioqkQDwrkqDdfUx4JYGfTeRXp858d5m",
  "key4": "N86dTWwyfRtYTi7nFABn9u6f3DuY2fsj2Rtszad4awKti5qetqyp9N53n77pDqspiVXx6oLS37xenThyiD5JsgJ",
  "key5": "5mPTbFiwML2sjfrrp9WFE7y1GtM3AR5cYA8nRS1rLPvsY6AFUy4gKPVQ76qVteWaiK1RUm4GLdKhKjNiNrXaKe2Z",
  "key6": "3YK451ssELaUvp6wVf5HpxBBQ4vwEBcNxdrVL4mSiimjq9RtEAApQxPBx6dRXE7SQnoQG5r4NnTLJTNeaejJqoZt",
  "key7": "5KG69K6b8PV6yf1zv4ecR25gFLKVihr6pdnABh5pTPcwVAy29hSmeFuXQ8zc2khmYehQR824gURtYsUHTiVb7MRG",
  "key8": "55LtkvB4Mr6skWyf4T9vaFEnAc2FcbBbHp815ZcgNLu7rTsEapGuLw915DrqzeEsHLZU4J3Bnm7juPed276YCFbx",
  "key9": "2ndsCjSRhVEizu6kGNM4zn7ywcMQKCLyUGR27paHJp56PFibanBS17wJ93Ed6u8ASmCJ5QV4RU4GhdHi4SiuqU8b",
  "key10": "AAVfWqUjnAAHSd8wLyWNopTy1jQNBnPBAbDueyDxv54ngDwNpPKfbFyoSiywDXT5EcqtGGi16TgEAuX9DihGwWw",
  "key11": "2vG2419RBeSA5BKcQ7Y5SGA6BgjBVFg9ac7d7rGWfzQCAbFnvhZM8XwKt6pbTPSgL5VFqATKy5iuG4YmEusB9qMP",
  "key12": "3uiQiPM98KcJobChtAL2H7osBxvQz9Dq7FcKRzXGi5u2JpJykdPnAp4xdB1cnHCtd3jMNRq7QmaNyY2qusjJucsd",
  "key13": "41H6ZWKwCSWfXSnZm1VHahYsGen78ymWCixda8CZVTZyvtkaUsPC4qdMp7HEwbJzDq3uN3NX6m3occg4BzDeLcfH",
  "key14": "4Tvzzu8VgZrF6upe96BBgeZoiPDaCKK2DkCc48o4QbgjZu8yzEm8NZYazT4UpcY8Fp111aLGsC6Q8yQhVNECjsP",
  "key15": "4EDevRqrAZGjXwcmSe46mmAepmf7GyhRLg3rS4KPCj277UQkjM75K4FM7eHsea8f9aARkfSscR9uarHVHCTtAVdQ",
  "key16": "5D8hZVA2QSdgv1HuXey4UNEf8kJfsKArwz59F72GoCGYqvrKkuwECsq4Rid7aqMC7WGBcyMiwev7bxS3x9wNA1zD",
  "key17": "4zbZQyuiEB4Vi8Jsa37jL7o1uEjShLuPWnszNX2T1JjH9wYKNbHWj5iqUk3zBYMnfUL66xri6bvLKvw6YCcQFtsK",
  "key18": "2VRMNyGBjULVxpu2EyyR1nL5Ca6RKuUzPp43bGuSLLMEg6hYS2WsGpUMeFY6V6cbvi1Gh2yz2cJyMSyQoxwrk3Zj",
  "key19": "2UaK9MJ4xzih8Jm833QDuuzU1jBMJdEZ4ZRG36LEFHKCkdRrLeqzzW3jSZ6ww2rCSXqn4GuAUWMSupXMyMimYNj3",
  "key20": "3tRTLDtodSq5awVrJ7Uit2DUsEMWwRGkAy9hhqM7UGyPqm9MGn3WC9Yv2igHZJBALRYAtV88seyroPfrPKyPmzKg",
  "key21": "5uBEaNxsvtzT3tb8uMLxYK9vFcPHG3GhXLFK8x448z7AsHVC6yRPqVQ4oBwcKF9iGomxn963vtCbwiHqK4z7p5rs",
  "key22": "5zgePeVdz7oVL6zCxrDHXFT1YDP9L32935SwQCBsWrsKkLiqcpXjiwZ9nP6fbcA5nm4Mgeh2EpqKdw9QS9nHkPqW",
  "key23": "SvXPSXumGfXED6ShBPepWFYJt41QsqT6jMAxVp3DMKBtDwGn2umnGwzQLM5H2KYzeZEjfnEVMhiNyKq9TEXRpoQ",
  "key24": "3aK8hsc5puNwMeRMX49rSXRVa5QnreXaEsH2F3yVQPjDpebhXcekJrPDq91rozYkcUcW5eM94woKeD3BXsjCGNob",
  "key25": "51bsiGZkN3HfuJsVfy1FGeXvAiu2TuXLSyAWjUGQmuiKYQq9GPKyNg98qRPdoKqqzYUzRtYG6xGPLUkDcmt88bgS",
  "key26": "yNst81LcfWfFYG5ZXPrimHxuxUd1YYyD8X2CgeduDbCqSRE4BXppLANdggp9M4Tg6WD3ZqzvzqwjJSryCpYLfHV",
  "key27": "5FQaKjgZQ62NqzR249uoJEj4juGYBK7T14FeCeLt9DseSsurm9kyAEEQTBCNKzRyhXCpYT5vFCrm2CUdBx5WjkZG",
  "key28": "5TN6g6MNmd168udThiNKk48FMcQJapmp5Y46kwyam7FVcUkXJFpFsPbBCQfvqo52rYiPj5UiLX1nGzswYao2LgGD",
  "key29": "2g1SMDjWpqP4qsw32SGqPWCkHi7b82NtYgiEz8ieU1W4jyeAKzgeT2tzkzV8B4KSGH8ZPFiiLz8scWBVC4Zd5E7C",
  "key30": "33Rfa9L3ZXGQQZjQnEHjNmgUCsRQ4d1LLXvy35BRXCktzYkKPaeRt5nNd9ChwxBaGnHRPAhVzun7aA8EoSSNoquh",
  "key31": "5Q2CcBeAgnn4GMhr7nCJQHxGihTxKmXdtBSxPhpVvG6XKRJhPFG2P6frdCghJyeNkqH3HQBgRckkrfuz5eCJvSBu",
  "key32": "3ygZbZ1x9ekEtmgyXnQMuN74WDaertUBG9CErNVESM3JK7CbSxCFwjZ9JauJQ8sEL2i66QKcqwZfBKLkdHPPMCLr",
  "key33": "596yxKkDAPmAJcJGTcbupDcM3NNKXxSzMJb4Dt8Qd5MxFcaGzqG15W26yLCpHWPUSsiAWqSqMVT64vR5NCTuoqmA",
  "key34": "7KBA8iF8HLSGj2bpJrZgFU29m7bFv2FVoXZmdUs4qpnUvDDS6aKaRdA5oVuyhvKJk9wxeSZgr8tDHDCpwTUbBwz",
  "key35": "4H6ajM5n96ZKVbycNcBB5cbBzuEHsTdVomKjTwNeUah6c3oxQZesMHjnC4kkqetPXaowne7ALDkZTeKjiuAV9F1M",
  "key36": "5L1CMukGNgCoMEwax8ZsyJcAnxYoNkxXhd3217ukvcTw8JTmowy7s3ypUcERHm1fYff3zDzpyX72hzCYS99PtbET",
  "key37": "3MwdfEDBg1iwvKUXnobnJ4HJ2hyiByU6hJfqKYx8msUvwH8uy1W5fzV5o1CNnMUzbPqxc4fHJ8iAXArePPr2MMaM",
  "key38": "5xAZf3WgfP1PF5fZjWhEriCsRH2iAuwKUBrhEyKdvF6n3otffKSdE6Q24ofsCvN21vyXYP981DTGfMa9soiUQeUs",
  "key39": "5csixKuxmZv4PoQzhW2by7ZsADF1DBQM27Hu6VCDjb8r8gtT9H3W79UZ8xFQSjYQBAZY8DwEJJbc9zr5GP2nL7rf",
  "key40": "5HCjGnv9T8WzHPBfTc93cNbtDFFfAmfLZ1EvXj4YCTzuy98h91bzcMYbXyvjLoeFJdjPP99Jfv3MTAnaeUst8H2v",
  "key41": "TZ11nZvxWeg8fRmzZ5GfP5eSApeZxdXivjfM2EqRgoxhSPSuWRwbCnRL29pxy3ApQ2SZ2NziEibs27t73SwkFVf"
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
