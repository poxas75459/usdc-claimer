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
    "59Gg7wkWS4KLg8hBNFQz9DqpRyGPLX3E8ABk8zoE2DnbgwQcHunjpdVnsxgfYYU74CuMKKgtLfiTAzMtC9v1LNLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Stuxe94ZethkeQkuVuwt5RxyG42N4E2HDrBPtoGn1fTHUqhUhr7gXutUS8SscPF11LcjPjfHWJo76RsQcmGa73H",
  "key1": "2v9NNJ9bsKgNQufNEWMQD4aEvd426nUncRThRnkKGWCfWcfgcqANmZVQRMH8hJZFsjESAM5APbDn37uDvJrdwiPv",
  "key2": "4YLdoGLsfuCaJf6fQX2UfL87FviMjoUTPymQ4h5WNyC6r541JEnYwMfzjohhyqHua9UfByVewNMYbHuRq65vAmXf",
  "key3": "5vPXiqSRM4hDut5r5NZFM8uKN4vgZXXNW8pxBmo44bFwfyVn8wMoTEPvTsip5JhR3oi8Q2V7stc9uPL57hKNFAzz",
  "key4": "3y3Ao5PNzgyxn7AN1cjjJXiWaN2X8EpMmbfsJ5F5jM5WGpFz1EqQgYeh6ghYJF28MHy16riqkLnyvuFR4WstQBD6",
  "key5": "3yk2PJA9KURJWTtAMihMerfRSNRbNP2HGnDneGZsiV1VBBuxZuy835Y22utpUMVzHDkiP7tvZ7sU5ToAuGX5kpNz",
  "key6": "SPZYCHcLatFK3uHdPnw1mhP1MWLfw5w5bWtcvjx8b12sLCF5T92rg8TmPnBTrFFj93ZKYRwjjTrdLv4YpUXribX",
  "key7": "3FAzpU7cQiCrtomZApe3X55uNdXLBS16pXM77XKfAWcz9Vpg5rpSfybvqE1pnBnWBj3qPUZ8wqLRAWwpTncQUTMi",
  "key8": "5Z5P7rQCDmVWzpgUQTnDzL7DWcX4wMsDrzPKmcsdoEJSez1ByyUTKibEDXxxDYdXBaEfCC1HpTX3RPLTHxhkdddX",
  "key9": "Lkeg8wYfCLVZGA62guZiPL8NwWVEW6cE4BP5Z5VYzt7aHBDDyB3sTd5D5NEqfHVtoqXMr9TA2t77dTi9hPqwjrZ",
  "key10": "hteNVP7ZLhj5QQEGdb3GB1RbYgJ87qLaWbcwu5i2LkmsXM2QiYbASw3ZyPFGgz5D6Fgj1W3sTkHLvBJ1PkYrRwN",
  "key11": "4fTdD42aDNTo8FQzqCyYV2qwuAeEsQxhmYeo449JAmCWcp2v3TrVCP729sKCZUt1vXqTkg8S8pxoci8swT7Vim1U",
  "key12": "aQ8SCKiRVuUev8xqRsjbJYyakJW2bFn6H7D9q1st3CKajF9hDqReKb7eHxEx7o9w1DekJFmff3uegLMrtLRXNN5",
  "key13": "qxcwBwymvec1TEDmJBqnnbnKkLGxWSuicF3aW1THeeVPgJx2JE8v2hZA7gMNyakopaUkwrDERcjeYuVsv8X4Wb3",
  "key14": "4kwZRQjZxTgRJpEqS19eRdv2cyxQXhSpMVkFdS61fSoPkpbfhhpMbM2ocUfutKNPj18L7PTbpQjT69gkhq8oGe4E",
  "key15": "AMtDPxm8ELYfmydxYpsLFGe3dTFdLyCZHj6mXJgo8HHF52RtuYiQofFKFQGna6DxAHcPcLtob6hdkxA6AMHqQXT",
  "key16": "2NyLtfH9fx7Ea2GvNV9sZkZAQNjnntX8n7ZMnZMFFLjBWfbzFixQjW9XoL1FuN55CcgNrTWy5M36GCgRnjFvMUMZ",
  "key17": "63LBedF3e34kQkFVtzdnS15ihvtnzRvjJTWtdtyxXXxzRH9ZSnpevaU6QMedHQfx9rguUzXnytjAmmPBdmDDCZxK",
  "key18": "4nNZUYCFNHV7LbNU3t8sCzpJokihBfHUNMzNAuSugZptA9w9SArRn2gf1xsw1Bu8mrdn9cpCu5qt9Hw4AKx7oLqA",
  "key19": "4pWUd6kAVFj2QHG8eaUqTgXR2hQgqHAq9pJ92HBygJUwWKGWPFu6HZJVCJpFti2RjZpQw1SY4SLCufGkCq5BHWLF",
  "key20": "3977K1M14QhHj55wzg9jgJddRsgwjWbCSinHXaSimWuCLmF5CJ7b9pogjtB7s52EaEKYVW7bapyJr4rftV8apFcT",
  "key21": "5onRU8sMVDKASE97AfuPSKudgJ3zdiPoY17gJfGeF4ywn7p6WKSLVaosxeweZKpzGKFjrhJ7jtk52Wfkog3sbheH",
  "key22": "3GyDGofzUHqtJHrBqrPmws5vfaT2eMa1mLaZUqL9hZ1EhacYvjY2oPQfUFeGmRiFLooVWKHhTi1tt2dG9EjXnfZB",
  "key23": "h6RS5j9xTbhL5Cros5mk7bajPr2z4RQvHAkRd2WSu395M1PuAjDJ1vbYxJtTSUh19MQSri5inGNok7CuiYsLzvU",
  "key24": "3mvhTXa9YhsLTUbHTN2hvmJYKKGL8o5dTu5nJtYj2Gp3iBCdbLGLqAGaycWT3s3tX2FPWFSngaAdXNF4RfNBAapv",
  "key25": "3tsNatpqyL3coiCsr6tqep9akXHJxRXfiE5Yur1afSHwrE4vBTgvYXQPiFCgwZj71oSLBWip3MaxRxxgjaCpo7ew",
  "key26": "5AeunSsu8EUncNHRrLF8MtFUGpaeHpBiCucdNCZiDJThT2357uj5XXgRdmou6YtJaKZaN5xQVuALFLoxATYcfz1i",
  "key27": "4nUA48vFvwNAyaBZVBjHzWg9kRERZnjyEqhsbAyCKMgcTzyXkCm6dH9DeD9poTsfKo4Hc1RT2jHNLpFNszDW6Dyi",
  "key28": "3AVPTAU8E1BgwjJt1mHEdhXv9HoQYDU2jufi6V5bsesK7QhgrSpu2ibxXUvu9CDqCrstWS61Yo5Wo76Mf16dZwTr",
  "key29": "gDo12MJv5ahDcZSKym16CtZBfmC89LZdFaADCsbZo4DzwWLSdkzTTHX9cyPJw83qq1mW3LTb5vqUrq9joKV7nfp",
  "key30": "3GgSorKHinkkqkqzkPhcRNWc15kkBn74MVZUCBpit95rzrcftdxfG4HgQHmmCVp5hqC3jgPYkiTNx7wmt4cbLL64",
  "key31": "E67dk7GGuQp3ErwqzDtYx9dAmyTkdpmtHHTGmQma3TfxkpsoPaR7RqSK2jdXJ68gx6PMyhv1FgyCKAoy3korgSa",
  "key32": "61ByutsseifjDmLyJ96SNfz7TB2PRZmYnDGREnku1YhujEiLZqeahY1MKByqPYQPVZMJC372LaNDvznzKoN642B6",
  "key33": "5XA4iopCSsfkuwtWCSu2B5N3CM8Kj7M4GEMFoKv5dSJVhsrMxeHX89bgvmLsYutxmHGtbGRnrKNigrrEN1SJC6eP",
  "key34": "4pBHdJpxdGAwAZYfM43vtpw6k86oLtVeZZucaiBF5DNRoe3UyV7FwwkDmjtaTXUBFQi71sb6SqDKsheTDKLhWVEb",
  "key35": "3uSWpAXHcE1MUhUbyZJrkwt8PiMKWv9SSRmxb3KikNK72qTThacUGEedLaLJgYzSeVyH2RLp2pjFzM5SLFv5M4po",
  "key36": "3rqTCegwGzK4stFC7XmCf7KAzHVVH6euKc3PGHyg6eNuJNk34TZbBn2KUfbsHkrXHBy7ZLxCbyGHSLTykYi1WgMj",
  "key37": "3RuqnBGwAJeNpgDCVc7a4s4WiDaxbW2BR58RyFgt9D5d5oe893qGdUqdwTuygctnar4FzwDPrKnDnYL7KBm8ND1u",
  "key38": "31QfpLc4LKFkTetpUySB2t8v2ZAbD5XCwrkitSEhxbAhjHYdnCjcgjPndv9J2apuwo9saoyVZTXZWCccEPKVU5jg",
  "key39": "4cYZpjMBNjxKypSxLLUCsRLQFNQHC6Z4gqwgDDdAxeLLzeGNqnztAW32P1vLQgCrecND4DFECTopaYptSxd7aUgr",
  "key40": "3ZUt4EiA37NkopMyf6GxHsJgsctiZAAXrwSr7nymRmtX1XDUgMw9amTuigus8tURrNsHXt1ixjRGxgFinYArNGCM",
  "key41": "5CrheNiJ9XJG3e7QCTfhJSVB1Fk5ffeXBADL6BJc4hefhw7ZyLyxQubadsy6csdsWnm9Nn26Y1CxXMXmLLUFGKAu",
  "key42": "4YSQ99EJEB8e6QDiMEVtqRAUPWBVgztcn7uxU1TYEpMwBcFmCL78ZvR83szMeW8hrUfW6CymsubLupxp12sqDCWk",
  "key43": "4uksv143NzXLazMCtLgyaf9hG53qHHsY97QGfTD5G7pGUp9jJvWHDaY1cf7QTqEF8Y9Kohvfb9rR6Mpt591VySiV",
  "key44": "5Ae3F8rZZqR5G2G57LNAMbMroyTtRhndoPSgGM72FP3YL3kKcTLhxyAt9xSSK4pHhkYnbbcxhUpJzmq9ZkB3PfXw",
  "key45": "5UYCVhGxr932obgNAbq81NcJbU4cwV5QVzLudc8xNfdUFoUTptBJbhijfwPn5UyPXrEhoJfDwUrvyMqEzjh8UEsk"
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
