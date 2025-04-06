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
    "EMrZQxVgNYoeJ3sp4uZ4M6nawhrF5pmBrDQeU5LxTv8sEdHTWiyEDSvhBFHw4MsvP97HcB6Wftw3rSQd3ySmaDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mwG5ndkaJ4wrhkYbRGmGwz4BvzU9A9Grpnry3B3xFgj1dHsryDtzJTZr2MxboyzKyxuLHd96acP6j24aMiVBg74",
  "key1": "4Yoa8n6N9854bWErpRGB15HvxFgcWdANWg7yaqxiQHtWnC8jvKTdiRz1adv6ba6yZxeEWuQTQ2XiShLrdYXXkSkG",
  "key2": "Q8d2t8z3GVcbfwdScrhfqgf8mjgxMy2PJvwYCVjsnbLzdiu58FFfw7gAZ3cr1XqCsW32Uc7Zvhtezfam6WJqAJc",
  "key3": "2q8jLGRD4utPLtJiNUNURRQrXkoBeec54SruWodDdqkaZXAqbDQV4Uo9TMo9VMjvTWKxRcoDna4PbysteZkCsPiC",
  "key4": "43vTFzoG66Mw4AqZG3FQCcmwY295pLjiVSXxdm3QPFzuZfe6nVYGX6QH7HAzMLENjp75yEAkn6rVpc72eEpsbzHL",
  "key5": "2F93Vw5TZ5WEdaG3wvF5XMgRkZYp4pG2SnD3GeXDe8qQ9p6t23Y46UL31yeKZAbmx6iY1cPd17FeFCAciPaYt8SC",
  "key6": "2MtmRmch3mcU2K7cyCMTNDoUHjMPzDjCse8QcRuD4wSU7uELowp478ssVmWG8KcUpJY27QRSNjoZKpfRHU9XsyAR",
  "key7": "3yHae9cK5ieumVTdLBQs8CWzdAnUuFL11QaNMkUHfQ2QDjeCuaoK6xkQvCaYmCtJrC5R5ibTStK4jeHBK76UdNj2",
  "key8": "5LMvvyZYxHfmxCsCgtQ4FpHwMDDVc2JS7CDUpZsitLRocVvZkVL34hHdLydF6RAMFabBE99KjvscneL6Nfbz7WXk",
  "key9": "3xz5iwkqgs4GAhxamxf9kAg7GL4xH3djrWXcQLt1FFnziq4NN517YwQaspAG77zKiLCKByC56R5MWifwqTYyEy7y",
  "key10": "3PjrHThQpNyoH6NpVSqViycb8hgHnJyyZYi3q5KeNDQfGfCoPUqoHpnLD9UP4weBkMMBkFwNyPdwK4LH8tjMWcH7",
  "key11": "5V22awGqNc6xwrDo9Fpqv6AKuPq1m1siDrUzHGSfcS1NsPTsme4FWY3p6jFb2kn2KiqQ5qA4AjYd7S5ds5KLjvVK",
  "key12": "5gEyjY5NE6PwKuGz4bF6Agfu7bThozjBBwNoD5mxXnivE9pMXGQT75VxxJeMdNHfEHGcgVvugSAyowYXYu2RzBo5",
  "key13": "SA9mkpDDvneKzeenxny5SfHVJiTnbE99uU77fKHgveESBnjGDh4rxKvLu3gmjht6pmZakZYXw7bUNkrFLdX6a7Q",
  "key14": "2UEqcTn1f5zFPuuEtLQYYSeWQ8iKf159L4mbuhJ4XAsrBLkdQ7g2VmX2oJmSqCSXz4Edr5unxevEH9CESvVw52Ct",
  "key15": "4irCUb362CKJXMwbJ498LmsNDVYfu5SJq9zWPXmBxYwujHP8Mo1ns5can9yddrFu8xCrgXCjeTBYBLjXX2cZdS1p",
  "key16": "2KaWBcM7QP1hkiYXon91KiVSXYJnWcgpYodC1ZcTfJ1ottULjgHniCkHQF9La7PbGx4eNuV3fW6Fg9q7qDAW6vHR",
  "key17": "27CjhdRvUd5CAgSwdZXB1m21QXYDar6opyksZoeAWbg6PQ7FusA3o6E3wX6WhE9zVAZtTBXHVK2WradHPvYQixE1",
  "key18": "2vVNxCDZZC4bL5cdk8adrBfr2EN99AT569n74EEhPfZqqFDkMhszFYYvyN6EbZtqjHyiVTBLmpAtC2ckCGvan72e",
  "key19": "4DgVweEiAyJ9Cq9kVTJbSSnxosbNiHsoahXUAWwaqGRYiH1PVkDH2Va8x32VaFZbnrPRhYmSABHySN5Ka3aRwtHQ",
  "key20": "5sptVrNQtmx7UFATEfDfvPuNAXfvLeLUbwBtscDsicWFdZmx4PHRQ9jeDPiyotL7vntPm21Z7nbv7cH2d5GbkFAx",
  "key21": "49ma6WzSeBF7B2wqFzpJdxnbq6WdpwuR1isnRZyFm9FVjtc5TGxwB3CNMvac923qZKaf7aX6Dj76LF7nZhgmU7vm",
  "key22": "5S7xbpDfbN4Ev5f1e55iPQHSC7guqNVDMRx59HkgadNZjAKJdiBdmWShPbKeVuGdnMF99YVRVE8Fei6uPSQrQ6Ev",
  "key23": "4vQwLUvJTQ9hMX3DeZzfmHuLxAMGfUbpyZG87ogqB3DRb4E3Zzv6jGqGyFo2AaX34TGorefs8X9CR2SjpnBNkxQU",
  "key24": "4zXUV4QWSpfVCmgz3bc5xPFpKQuhgTFSWvu8ojzt4qiSrEuhh9HP8S6k5iYWEhWwxaxaNBC5pyjyQJYtcThcDdMi",
  "key25": "4RVT5FKrv9MzAWxabagY6Bt9ofrZ7kbXMrLuFMrLemCs22LLywj3ymsc7Q1QrUQFWTuguYCLbZtDvYq2YWQN9za1",
  "key26": "4xmy5HrEaUrsGxVpm4a4QDLHm5EbkehqUaxkKgrGVkbvsusH1aUQTecvKu3CR8yyCiutm3rsNuxCUT3onx4repxG",
  "key27": "3NPSYyP46rEyj5Hi6xoXpU5LpXS63DFrpUoMm8vKj8iUPfmTAmNdXoazP3CNauuXdT9axxGqfwiAK4zE7uKfLYUq",
  "key28": "PT4Hy8Bbz9JBzCeYvEppt8NWgJxc5rBrV29WsanJf8Vqq9gY96cP5MQHzg97FKxTyJLyevX5FYJVSKE2ohuE74y",
  "key29": "CPwGWeMyHLbenkmEgytc8UmTspyXQGfhipFW75djc1Rgo985GKn1sMtivRhk5gsQzLBJbYVhZUn9JRVU6H2tLVJ",
  "key30": "42GLe8PphC1LDoG24ZvBk3ae4beP4EvzQM7Mte2EVXWAF5XwiYHxuY1KPTZKWZxG4RMNZB4khxz6hCnX5ZdMexme",
  "key31": "4wZczxqn11zvXiNesajB5RGrLr2kouhKuB38SnQo2KymVjd6p5Qh8DRaeUbqnvbKtJjP81jTxGk7TtW3Qo1CcGFH",
  "key32": "59QzwnyC2erUCWRvampc9ffbeJT5ZLvoqNPF5QyHkHyUrKWLGrjGbbfsy1M8R2GTTgt55VtUaXhB7dhEHNNZbRav",
  "key33": "Rw1WsyRPUvwMffodPNhWVpUpfqemmmxPV9zEk8SKtJvLBhMRXPjj6ZMCPiFyL4JPYdmLsSf263XPMjVQQM8Picu",
  "key34": "5cRaoRw86Yfo7CxvDAWyAdYWuAHguZvftYD9gMFjW3yFc93eYzQGd5VXJSnzQsVGJiWQUKpBWFqp5ijHeCyznNzY",
  "key35": "ybwSrfG78gWq2yjf8B1xDjbA91wGEUgp2zzYPNH85h1HfgvJqcXbgxASZmjgFw1PGijL6TsrNsfG5XX2ufr1pCY",
  "key36": "5w8ZFuYZ8ruWghE9B5NxLbwpunjNNm29oPvQDpmQTmQUw45QViaLGBScfCzWLfpQmv2bygfgYPdVgrNvXSi2JfYh",
  "key37": "47VydCQrMBnMZ4Ks5cEDjTGeHt9voujuo3zAJProtsscpZSkZodhpYA6woBmupgcwUkabsoFUwtUECopSwhCJpmb",
  "key38": "5vmXbCfgCSFJP8BvaB87zSKAMqkECeFeLVWVbFTfagkQazyEvBucYUwW8wXCkaiSr4gNU2ePfKUtutHHV5gDzLhn",
  "key39": "2vtdvVQJzaz2e14HMEDbYZHX7UGDFhqj6HyFBZsZ1boPPeWBF6j1pgNNC3mP1HEaGgYm4r1E2rDwqhwnVKGEWhEw",
  "key40": "5KCsoyY6yLbqDTvekWCtzvvG1qQFoQih4CR3Tdh9GbTS4KkqKoyaL74rYnh5P1NTyGYwrWTzked5H3BJwUCEbqQN",
  "key41": "3fMd8fF34pdBtnSk2csD4sQQqcXEqHqRX1ygYc4nKoquMufYPYN4xpNtNNc2t8hrFSAiXxQm9W86Vqe4qkiFjkUF",
  "key42": "52SnWAszowYu8Khxp3CY1EjXJg1cTkbncqxyBRscKEHe4Npx5G3sjk91fUZeLcysa1Jd3GgVoGHtfhTC5HtDS3Ku",
  "key43": "brRJocRYkL1h6onbpWwNyfkdjA993hTcQJ7PxYE6PKr3LdcbKLq5gpHRJwKXSB2sB7CTaNrTNyC98VZ7Cyv7RDd",
  "key44": "3EMGazU5DxpQPixtysywnRcXuPofdVdrP7dAUWhJ5dRu8WFZF72JqoVKeCB2sfVCJE7pwgzd8Z6d3MxcH72f2uaX",
  "key45": "3h53ygbk5EsooGVRRyHYYLdNJjr8TDvztsr3sZo46PQXRzn3QgofwSxcTzEVM2xiMZQdZbYeHdoSxANKi5od5iJC",
  "key46": "5kM6KUAH8vjHzx6GfHsrdTRQWpEeTjihN1iAhBPzqgeCDX7C7bzj64UUfrcvbLRTzWWPoawrUmfyx2L1MdhnupWm"
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
