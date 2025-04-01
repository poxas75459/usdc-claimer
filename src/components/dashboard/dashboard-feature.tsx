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
    "4Wu5Ma8VCQCMmZTHQ7LqYGjYCyvnAsuTRM6kVXurdZyR7Dfbbo6Vkwdqq4tE4xmxjmEuSMMjg2Ct4yBnte3rvrUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uB3nrQznoDwapT8q85dsm9pgLKDS9RpJS4n7aVfEqBHAHaLfo4zwdooMhz1Xixf5ZBAbNmxaR3DVFHNvJpW4gkY",
  "key1": "31maf51oaPsu6LZyJiTRPXDyGZLGaiF49eWB8ve3PPJNb9RGQrNSXaZ2NmWtpAsT3x8yJe2hK6AYm8ymZoKRea2h",
  "key2": "59LTChxdHzTeECz82K1h3auZ3PcssJfNAVnXdZcDknao5QkKGkV8nU93t4PZyDLtGBDHEh28yZ9FVaJ2FhzvKB84",
  "key3": "5B42ufYAoB87wcs2X229RAHgSSnqCtwD1fncGUVe2EPpufEWSru2HFLNptFEZx35StxqomZ1jyFjvnrFhCQT19aW",
  "key4": "4fnFjnET8CyUqiyPFnjouChmDhD4p92Wb8e7KjJFXFnFRc82QMPQPRRV13hRDiqC8yUe6hWAfGGJucXyDvDkhPbS",
  "key5": "q6EbSFKkGHHxiaSsBy5w5zCsXTbnaAgruHKRWokynpDNtYLuPMdokz2f98QFbUqr1Atmjt21ZLVe5wre5ipzKsx",
  "key6": "5TW9qsS4VbAev3w42sYQNkYGakz5fyKKrujniRkjtQes5WqNRrqFuS9DVjxP6zFNAR2VGuagwRPxPB2ZmNd4nhs2",
  "key7": "2fyKj1hTrcNQAkhWanqXDuhhWY89tu5iL3W6XHP8J9n9NHmqqXNYpJjfvv6UMoVPv5sh1GntWFci4cBCt8LM8Hux",
  "key8": "56Vb9RVGVtLZV9D9QWTyJdb6ebAbpJdikXRU2D1QrMjnrUXFEhn9262G5drxUqj4qskrrf2MmKHte2fMect5Q9iV",
  "key9": "4X6Atp419H8nhVzf11BEQXH5FhbDcjvzdP4z3MXZnfHjS2NzkVbwXZm4H5tDRBY2oGy5GTJ11MPtTcBPSekjuugc",
  "key10": "dnHejdq9sho2TtfYPSXuyXbNzMFUC9tx37vUxT4aNCCta7fKt7uL49hVhLd2rYbyzngrBMEQdqukpnRFy1cAANp",
  "key11": "4b51FNq3e8JaT414smaTDCSpVfNzGS8hWU2i28VDZBZbkx8WcemY3j7MxJAKkTK2TmkLticZ6APZ15CbnGitAg11",
  "key12": "2woaefFyY1g6WfJdy64WThoN8F2mBY8BEZgSoKKLMJjB2kYECHSWuyjLfT9iuBcAjRJ3RVANBTuaNNfdxMQkkPKD",
  "key13": "28WMrvb2CnWZov8JFdYzZXr1FetU3jQNVTr6b4h2evacAzBEP7SCm3Fyj7oN8c99NGpjYDihGCoXazWRmepmGgL2",
  "key14": "46xvHyocqAMzEMk4v8jAgQ6iQWqLXyxvvJWjZDmPF2WwDXLXpbxkKqwX8o3KNQw22DD82dZkyNW14Dxb97rjek27",
  "key15": "1YJNyBwEDViGr1rTtsd6V2tM6erVomXFAD4UYKq1bEskn2bCw79crnxTQjvcYnuSJp15VgwdH2NZu7buo86yeKK",
  "key16": "2VmBAmzvdijKDArYQF7tCRRrs6sWEFCKGoJ9XVu4P9TKJk2RBH5uyNb8mjEqqrrx1gXje38yLcPn3P6eyXezBnLn",
  "key17": "Ywkvwbadw5CVfqAG2VV6qRLufyYJUTL5HdCxT8316QpSUz4mBr3FrEviimf27kY82AfCCgFoDx8wH6q12iu4jb2",
  "key18": "MRcPCLnM1ydUWpDTZmoXKKNJ8gioyX5zi7qJKLUayi8yj388uSotjKGPbAUsiD48Dx7tXVJbfJ5M7t28YqnMSo8",
  "key19": "2B9thKNRs28ztz1Bd4ZHaTfd3nfUTMkaY445ZwpxW2j9zfm9Tjyn9ZPFG3DRwArubnj4Ckz3NG3T3Zap3dw1y6Bs",
  "key20": "5U2s6khVqMdoDiL1HwtirBCsBgZyS4EkhNXqEvdbJAL1EEFZd9ZkUZRKwThnFfXGpLf4Yc2gCPqcRn5kGTZGn6t3",
  "key21": "4j8w8zjv57JGQrfjeNGJXRffKGnT35Y9p4Aw8VDKDptxcnNF6QZuzNEHKqiiUuoZw6Z1w5ZR5spjnAJvbEr2M2Kj",
  "key22": "5mA7AR6rx3J6D81fvMFbPYNci1TxBmKNdtoL6UApoh3yrsXNnGQRPVbwoBSS5TeUqjbv4vqVdNtQENBuKpCtA1Fv",
  "key23": "4Z3xLyAHrUJLws1xQCQVh74uMDrTDqBWWbygh5XXKjkCVAPsULC3dEBkm57JWf4p9ShzwUbFLuGMBVP2Ujb64LHo",
  "key24": "hoJKqQ5uB8HdTEaN55FpkEqGK8jr7iHbMQMcWnmR8N6GpPXYcX7MRq89ALar5NEv6frQ48E7gy3GyKjsVtqTitY",
  "key25": "SKDidZ6z3U6KooK8NcqxhettqqJ4JxAWg4iuuoopU5w7En2koH2Xd6mSnPCyBYFDwdEBYfhstkox1aVUg3P7iCb",
  "key26": "3o2PHPvykucrV5zXgNcbG4bsdVnnFPDA8LTk85WLVUFkFmVQLLR3jNWkzeoUBtGwSgpG8dSwY8r6rtLwySP6gPUf",
  "key27": "2hHoghaP8ncNpNCEC4u6ECSWtMUHgHV8ziZirXLV5AJPFzdvX1DoXwFp2ZabXSPLDJ3Fb6LcWCCq9qhXg2Jo9zEH",
  "key28": "CfzMMmzDG3y6xqSnDXMLKUmTYni41ggrE5kbnoWzZtdZwKp9vHiHbz4x3y6FfaMgmVfdsBDLyX9M35AvAzjbA4z",
  "key29": "3nzwWAayJ6qcaaPzEJhwbwHXxSJWn7usrR6AtTunxuBmnXq1gNhEP7tWu8rcVqs2R2LEsiTppFJcMWqcgdBPaLvA",
  "key30": "WavVwA2G3XeHFJ5qrGzSrGkc6ff7AsE86DS3vSgLXuAsTPZRx7oxba3JueFw4cgGTDCxvEenLyTQA1kx3etVuk3",
  "key31": "3e51RMnsTsPVWwSSJ8Ez9eRfwLbuWdRr5dgucAqFoGHnN1bBUrX2Y1eLv3MQuoYXvKQ6WnFcDnMcJtYgTJcDzZxj",
  "key32": "4Mmf2cDFDRy9SGBYBx9fMdGF5uNwrd24pzXdasv4pKiJaDBjqy2mC8ALBGgM1eAUPw8XoxTmtrmCCCfghar1zDRG",
  "key33": "Rx8N3iqnQRkbXyy5ujMNXJsdqf8FAA5QV5NP7Rhj7Qa3tQwfaKaEyxSnPgDFccyp8ZYPM6ShzodupKcyBn85n7F",
  "key34": "3rxsJQB8wVKk654fBWZwTbCDLQhr4W6rt6cjwXVFWoayqsHJ3MzBFekihSeJm16aPeeKdw3CaPSqHSkPLga4z3E7",
  "key35": "3MC4kJSUHQw4oiALT3tfVYqbwSQbvzbFCv1G5Zj4A97ZBbgArcCfJVdTMVs34ZEpAgwvfthPe69qtNrykLkXXNru",
  "key36": "37PffqwY8Z6A4uXSFLDB6H2CCqKT7GxRivbvk9copwrU2Nj2b6pZDs8o5iTqKM8Yqh1gfZoyNDMqah8EjDqfLQB3",
  "key37": "2Xb9NyMcNgbnvVv2noeV8yz7riJQFngiUycFPKwKT9Z9futK1dk9fgCThjuPNEKhZ6kr9PeyeBoPux1vgA8md3JX",
  "key38": "2mGGLr1UWEoro1QByayBrnDuvt6LbHF1r1hmZdj3oqeb2De6hPDgMeXTGZYkKxy74ZTE51jVYRmg5mMtsG85DSfC",
  "key39": "4zp7qypRWkqDCju1QXsscobipXHb33garUr9ovRDU8xdoN54m7eqPNEY2bEXec6efqVRrebED7SdXMVZsptEKBgc",
  "key40": "4EbVAF53FdevhjhrXkQNRZp5hfHnkWg62DfK5xjAy29TBKktfN5VfFJAyYmHahP2r1ksVg5HMNc4UinFkjCeod1f",
  "key41": "4xfKRur6FnBcQ5uLFwaqNmAi9nLmANvgkVYA6fY3URbyCvNqBySJxS19nQKPWMHWJJphXGjEBrgNtSYNrQAAmK4G",
  "key42": "8wBNNCyLHNrGTjQDuhussETpDRsugg66bTtBbfWSMiFyqFsFHPNNa5nv8w3nkZ1R6WQy8JQYKj28Cnto3UkEs3F"
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
