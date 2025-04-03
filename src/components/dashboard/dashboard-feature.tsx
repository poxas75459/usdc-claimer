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
    "5hramwf3cgrruXYv7kwBViUaxWha4KdMLBTBJFVAX77GRjNtJLzCT6U6UEc7NbYD53PWkvfCcXeUF3zHpmH1oq1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gQW6Jni37DMis4eK8r8qvEYzjt4Yoc8Ce65GWKSPM74ttmQvZq2jer1ZXrxAo8wVgFrKK9WYpXnW3zqCArKJBU",
  "key1": "wukV2RLDbmkEBWz6Uqz5PhxqJtT56nrNZHWMDzhN7XDZTnMKUqQxttQkPc5maoVSBTsVCFEsTB1Q2dmhYvxL8zY",
  "key2": "BhXGefQy6KNjCLoYow1uWJf2jH6mLCzc6AWZHCQtfeWxnVE6mByuiCzhwo4ydwhfTJB2EFVrrCPo8WeXoCczuB1",
  "key3": "2mQRCeK827Lwv61jnSJmg9oHtPhDE2fxtwq41Xew6zDefY6wH2X17QFPwq8s9BQEH6Cq3fAbPuhWdG4H2CRgmTFa",
  "key4": "4ZNf6SJrZcQ1QhaL685cx6axaKnRHsdSpXnyQFUKWPakzNv6V9wqZsNnCkmC4kBvVM9QsU9sXKfD1XpCnxpYmBHu",
  "key5": "5f4FhjZSpKTWUHFVaLvuVuNJEBddeHahsoD5h1jbKbPYcCdu5Apxn5GsRGaZkXQLXbxtWCykv36Hj8P4NLgvNdWd",
  "key6": "yTwZFuS9yZjYPJPkN7DkTR6yASBsKyV52GZwD7b3u9LDDp8AmNCX5GKBdSoeVWZ1PzfFZRTgM7SnWhcPeAiTHie",
  "key7": "2Dh5u4iU3bXgU7VayYLg1nFniq92HTsPienaSC7Va1TEK7FkxweEtQzaVDmB16Wn9noss5Wiho4kKX4hjc1vMfMe",
  "key8": "5FUQw5Z6wV1tYfJ8VXv4jiiX2dENAG4h9L2biAVQ6DGGsyYA1PC4KKiAK88zAx3uLcrQQHwnbjwQxoLGg7MAq54D",
  "key9": "31edCtxtMTMkXTAVCbMqd4965rRmGWi1zjXCJ9kEEAhPkCRyKxRfkU9mmUwMZrbkc322AvyPAFGbiPR7CdMBhCMM",
  "key10": "59XtjYjSUug8f3FTDtceGxwo7zbex1gQjP26w9r9vYZCgRaopoaPRaSpMT2SWHjZraKEToSbZ6zagdXcBFNKJdmg",
  "key11": "4JDyjMqvvhQiEZCV5rJivVbtnFG1TvT69cLHqgqd6CPrsQortokco1wBex5e5bgnnw1mQUaGuyfaVPCYG39F9nyT",
  "key12": "3eeViS8oz56tzvfoWvuMU5r3vryDa6fo4td8L52K7QJhtuTx8ssd4BriC9F11oQD1R24k3ozcRHkxGucKUoNDYNg",
  "key13": "3KQEtJiZFWWjjQUeuNaAVnQJVQzUhkstNiMQH4Xj7ZkBcQztkdZNbrjQaS3RDv8TnWLjtpNWnojrEMjqD2iEhCLg",
  "key14": "3muuS2wgoqm9UhKnPTRLX6vqvRfMWQGNDsEAFTDb6fEarb7TkceUt3BMEkk1ERshggdd2niFxSkcnDQ3hxwC78qG",
  "key15": "5wWyqWrb6NCfK1n1E7TJtNHkvj9tsDeHTTuvc3nwRSw4iCebMgxFVwhajfcgrPDbRGBXJtyhg2ERXUecbMbpsuWL",
  "key16": "274xCniskQU5kHzFe81czwbmD82a6n9xNDxXMCPHd1v6YUDu5qP8hL6Gao7YqjohqKRaZTtNXPsSzWiZH7cUbzeS",
  "key17": "3dqqBhiMnokSdBTEcgmFxdW9AbdAsnTiFHq5kZJuDrynLtcxTVApsnDqipDdrNZFHycBTX4UNmJu3SjCNgFDwXfx",
  "key18": "5n2NVrAfJcgX7DsdWkhv3oGGUJ6HcwXMJ5rngPxaSLyyi11CiDfPSUvJKaH8BBgqCgSbvnnWsrP4e4ymgomeDKA4",
  "key19": "kBwAmtS1DvCxjtaXfRFCNbd2urUL3rCvS6dR1Tao5W6S1j3RiJLWPvCbne93tzSMuS8iNKMak97TX3r1p3XTudm",
  "key20": "i79VYV9uUP8QLfDUQhXJgw3fs7FrDakW8YMy6ZFrXVZmZgVrEKxcmz2VNkYvc4RvDr3FdJt312oQn1zyZD1z1bd",
  "key21": "2zx6Nit6BCKLdt89vH7WNuq2XbKVBeFSQuqQJHiZQUj8B9Fmkwnx1QJPbytMQtKXGqm5T7772PDXujdEhuvZ2rsY",
  "key22": "x9Wt9ZMSNgFMtfvEBdBytHytr2GrrnizXN5YhKHpkk8jrJrj4FcZgaTrMbUqtL8CF7Fmi533XFc9i4mDz98aVTL",
  "key23": "4vPjf7weLMXrvLLCLhacDouEoWsKTm5b7ESa6cK1PkccN5gbk7mJixXCGFRxR9MKTWGaqWvw5h2gTPNboo1MPEzV",
  "key24": "4i5ieTsSkpZQGTZ2aB8TLJ8tj6sHNumpBWf5wK3FKXiPpGkSvZH8F27ReMFe8Jp3TjJLMjC2eXKvvbP17tabf9q7",
  "key25": "2P8vfbVEHwPuyqrtkQKWPGXSWfQLd9aLK9obxmtwxSej7me99hhPVgoUR9fDY5R9KdgmHbiTdCgKMxNTsFUWik1e",
  "key26": "2sbMmBVoWitcgnaLfarw4CotbT8M1aCaoydhbVJ4BgQBUbeSk5cVt4gswHcKnsZeP8QZWqg3L1VBW4zFsyMQSiSG",
  "key27": "4aiPEtz6hzaLLw57HK4jkYW1op2ouZiwxQ5hPjquRfimW5HnbvYK2RhHBZoaTGr17dV54ojTJ7iWfscfTqhw56Z3",
  "key28": "3NBXrmM1QL4E1eXxwEQrtfMGU6M9bKK9Xx3jtUNtNN5WC6StKP6z9VMrXwiSDmvbpVu3UwbYwv9jbAkg2eMiybwj",
  "key29": "3qZcUBhD3FXejdMydyBS8TGTy61ZRCrgpi4MwDR4BiTgDraKwKrRrRgj5nUupabKrXU3s1MGe9KJT9htBPhw5m6N",
  "key30": "5bVERWJLLmiSFMue2ikehrvfmESHGiAb8k4i6myDeVP2zERTU6ivJHGfgGE2j6NgG2rJscNFNWTNFfVSPqh41jaa",
  "key31": "5TmxXJXZyP4RBQYn7Z6ZQRjz9vKnGVmnJSUJpJuNhhL6Lgu4y8kopyCkMPyRBujCju3bTckLv2eqExVif7xb5UJt",
  "key32": "5EJKrXr9utAni54eK468yXnVA7TNSHPRjcZzTxPX5Af1SDLu6GnLbDDTgBDotYNMq5xL2WFmH5cJCy5LUFaU52Zd",
  "key33": "5tRdpZZh56W4BkRtyhZfbYQsegfp2i2c7xjsPGr3qefQjss2jrPwCbxogGiNxCpB9KB1CGzmbxKCMRzv6aeardPc",
  "key34": "juwRYyASytaxk4FuRDvH1gFYjFj6rq3aCYfmVWPbpjqDP9hM5AwiEzQMQGyUzF9MFXQs2yEdVUkucBksrZB1Tn2",
  "key35": "44prhxx7Tfx9WrDYKhYg7vNmRLSTqGXkrP7VjY7fLUsK8Le2p5oL99X6fZBFBUikmKCNoRFtXbsbaC4mw8nuAMHY",
  "key36": "51Pf7AdukxwFrKqToCxQ8YVDJB4a9hzcPUCTCSZeD3oX5MeV9ndZqVaGMwMHgf4cYGqsWTbTxdebWsvUrDbkoRpc",
  "key37": "RTGE5ModBW1kR4FHidkUb4swA5Ja3yE1eKyF8fmSb6YAeRtCaHjH2XfuJe8XRbzyzStgVVURRCcFTb9VEasjMcc",
  "key38": "2eAXs24C93h6Tzn11M6D4xvtMEcvwXLRbzKYCJBJHfWQk9vvLn8eMyTFviHWyjcb8sdbdmAip8Fz3BW59nJtmMsU",
  "key39": "2RQAtuvsYWrzGCUNdjBGdyQVS9GurzSeeF75NQ2th1jftni1npDP5rmB1wJnNG7RC9FNrpprxgyLwr6t2HcuNenD",
  "key40": "cJrPPTRqHVE3qyrLC7qNprZqtYre18pWmhFp2ZAmcFZEUxuNvbjdSqVipyhPchm7bjjHgTPxpNaSGVgeKXZwbbd",
  "key41": "29DyZwd2okE6WsNQSLUXPwXsfcXHFZQ1qi6TTv5QyrVYyXVzcZPWN3eYFM9UEZsBKb8MJiMzQ99Ca69L462tgqye"
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
