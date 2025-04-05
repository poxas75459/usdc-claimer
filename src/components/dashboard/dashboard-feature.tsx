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
    "3vJdbxbkzu7eiamsttHAmLAia3BgUosuKkJP84WpUWgASbxfg57UzSof2P7spX9coCTY1n7H13vX8NZauAxmyXi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dy7qA9UzjSWokEjSA5FMRTWmUanSmNCJENQFwX9nfarE3qqD3Lzs12YYoJh74PoEmkKmnkXVXhkPbiq1hQ3BEoF",
  "key1": "2GXNasdpvZKfTVCs4ZSdEbtshfrYoohAUy9DCUkq4Gxq15wof6FHcSrPEGcTvC1pPDDCYKq5YQdnMvStosBoQ8tD",
  "key2": "4wyM2KFtSY2S1sjyt6hr3fCTxxhLZHCLkbt5BsDRuEgFqYHngLqATbeJKieon7Kj7ZN6Z6f2WXQGWkoiC3KWM9Ln",
  "key3": "bhVrCiG1M58FKbd5L2RfdeKTdJMPZVAL27F6QEQCxSfhj1oWzSKWBqfd6adgKg1padATe4DjkXqFGsao4S2gDnM",
  "key4": "4PGRvKCg1tknYxhQn4qaHP56GGVpcE4NYyFnxRvWDMAsEq82Hcnh6WQMo6BNt12cA4cDpwddyVQwV25VKx7yDmbu",
  "key5": "29KbyjrAv49NxZ3L8dQyxvGwW3aBaeUJDpddzZKpGmyjweXUBqdondpYjjZmgmS8oKhppkipR7frYAyDM8SvENMC",
  "key6": "3vdhvS3DLbpU1ytuJTp5N11AVnunStANmz5ALCwjTj2Hsg34X17UHaRXMPAit4zuAvY4Co8FY1nMVjTHCWqNsHjM",
  "key7": "2sP5mEhWGzAZ9wVMTf8Zf4jc1kFszzpj2fUycEHc49aa73qPMDcmUxMH4PpqffiToi99uStCHWiwT1nXafZHXKrv",
  "key8": "43p3XzHi4gbfSCCxvBy7tfF58gJDcHcekEUvaW4bhi36FHYxAk2GND5ZAEnAoJ6sfknGGagos5feCXp1spe61pNt",
  "key9": "5ejfZYj86aMYPd45oXSMhwJsFidYXpgecDVK8xmGM8PwEwqCsttgsrzCj2P49qqJdeAnJKUJ7ErHYkSqrQSieeX2",
  "key10": "S7CVwa6uMgV7UXaXSqwUDKUvTw4PMPEYCeWBWnoEb1gPqU28Yie5RhypjPK9Lqn7aJLusBPq6kjQkyezSRSL9Bs",
  "key11": "5bTJqHUWg98PxzXm38jBn3yA4jpbdFeqpZ7je5Z8KYgrDLkTbR54sJuFFPJ2Ws6kHsSXXYKhq1usoyQhAXdcEHy5",
  "key12": "3XZHD1mUbLxvvycArycWEoQEBKz56kj4Ze6tdVmcnBVRGMgYdGuqYoZjs3pDZ4PNzFFAdeh78eVreiLnd2JAXQk7",
  "key13": "2eQNMNgwM5iaqEQPe9oUCdVraYx64715WvwKzu9dZFW8r5ihnJNeKej6a6ZAkWsw9FHjEmMvrxe7vmSHL9ukx51d",
  "key14": "22E8XD1U7rVinumYgz7ztSFSHZ65F7BXUKSGAqmu4U2BEBWBxFKRhMQinRLFJjJxefz9wyWo8CxJLRfJHd8UGd2V",
  "key15": "5XCjnhaJzy64my4msSppFo5A4UPEq5s9zpiMjg1ATx6St1L5YKg2wRVnCp1XdgAJ9H2wqRiiPngBDoqdGRtHEg2n",
  "key16": "2pkdQNxgMj2tkQSjH6UePgarq2DC1XjAAJn631m32SudSRTHNjpphcAsKrHEkxZMccdXi5xq2uy5SAa7otMvMdR6",
  "key17": "sYHCsCaum67AcEY1oq7SgY7SjY6VWkkgqKGXrQvSkV2dscqTnD86GqdMQWsapKgn7iUWzXXtGWPVjp7jB2FonGp",
  "key18": "5Nr4DJWWqUt5dpjReXtozPowRVBKBRkBjHXx5ivKesPxr4jyEg1dc8xe3LV3SxZQmSorLdV4ojDgvzxoeJxud2xk",
  "key19": "2R3GyktRdwFXDTJYZw5JCo9EyTcYuxNuX76XrPtTuZSesW1d7HHKTkCdg5Qw6sGJJD3wazCaWdwZSBF9yqyTmTch",
  "key20": "4d923fN76tWVEZ5NzA613WUYV3P8v8A5d8X9KfWsnZc4arKvZiZMJwKyJLErGETHvUC4z3TUUPavyGFGaMnb2geD",
  "key21": "2vDgneZMfNjYGT4zZLwch63mLu3UrHgCBBa9Mp11pgMNQrqTdqUzzr8aCu9XJx4fVbPHMdXpJFJzxgjSgEe4cTAd",
  "key22": "4R7GnANvGWFLwUofVMKNV8Mn9mnP3K49KakVHA55X33qZjxjxhLCrbqQcQgUHRsuf6CeoBip1F2sXZbnNKwUBsAs",
  "key23": "vLhoAgRJwk1Nv5RDUub4raTphX6C8bF2oWpAm3Gvv6tKxeYuGrNvScxTUx4LN2UZ4bs6Aqn5pdwEkkUQPotrorW",
  "key24": "4yvAw16hfsQRqeyGBxxJDN9YtPEfb4ERLCMxd94RrpsLbt25MRi6muTRDdUpwPabHMwrPg5PSPbs8zU4u5n6wcSW",
  "key25": "E7TVStbmM1pBT5jQeXXn8JLib9s8RKQeg93q4EqkUVpc8uJHajTK77icr4XJDpcp3qR2YamRFrL3AoHe5LstUQd",
  "key26": "3R3cb5tK5S4RWhjXeArK9Nd4DinHieK65F2Tx5VWBnuz5fKAinq38CEF2GFQedNMosFAVV5aKuscbYchjLR9CSqW",
  "key27": "3iCS2PafytPf7c2xCmaQc5av92HGmQCeAueqegqunRWCQpdo3yaYS5QVCsRzqmYRN3oBFEEsFDGm8zzPgNSH4mjn",
  "key28": "41xq66oavZWtFbs71jhePF8SSSnDqPjH5gDTWftFmdXazpf85FRBMeczUBGEYYh7N1E4PNXvUpt39LAWp4kXFBbM",
  "key29": "qCm6gbVFTpf45npfJ5oWUGsE5DTFnuRBQZZCPfhLSZDiFvahVzfa1NsiDP5oGw5P6GrLgYcoc7TF3kgX5bqNxFL",
  "key30": "4YyS4FePBaPuyZVXVZ4pX7Hn4t3JDMsEYaETA1faNNFcQkohuGdxCpsMViRL52iMmBykgLKy9VU5989v9VJWmcbZ",
  "key31": "66ZLd91gQMsVfZxEchZ6ymAoPyJezGBuavbRMM9vDdB6mNRevGmCqYAD1PH3XT96NFzpycxpMivBVfPagm6yvTwd",
  "key32": "3wGTjpTymySS7agCmN9Ek5vUqpLg1iRCpkHDKh6E1hQmFpLHPfJjieVHkNvm5GJF7KmQ4cyBPrDTGsuyFHRfiBqR",
  "key33": "QxhGEPptiNwahwM9SuvBg8rAkY1diy7ZxyEiPD5dYaJQF1fWo946HVU74W2k5uSRPwp2A6mDWhyRXu2QkJyqFRu",
  "key34": "5LPP8ZpNdXN9dhF4GBQvSq5fEKnAWv7fg8Wmy8f4enDvhkkANJujhgT6BsJDg9LByVLqdzieyGow3Y2wQHtGfqf6",
  "key35": "2keFHRkCNdLuffmn7ezKLWdxs2CGVxz2gtvd879BRXQgdGLV2U7sEFeHki2UUkecM1CVcn4wtoMbi38WcwjdeQFW",
  "key36": "3Cag5Az1VtkcE9WrvDciwhtww4bKDNyFWgnxHd8nk4wqF57TLDaNK74eLVmrbf3XEh4bdWbbCUQJztZkpTB8hVnA",
  "key37": "5NUfUDPz2TyCEmSiK3aRBGUfrPYaCiEuCYQsn5KtYu6NvixhvRi63wiizQ8VC4z1VNYdhiBoKKR8KjtkL9zcEoxq",
  "key38": "4eLt5GD3qx8dBY1a3sLwKSKPnZRfGdCDcF43tNVHvBbwAmfEhfjAJfu3Gcznec4WzjhRjWaurWNhsUGbYyN15AXw",
  "key39": "4TRLoTvkWLUMD7YGvDPUw1VPYXpSubcDUCJDbeSm41ZeK2QnGJqW4QsoYRJe3Jf2Ms7eURxpxXogMXE5jho9JU2M",
  "key40": "53kspmxmviGCJH2E7BVZH8rtxVJfD4fdXGNF7EoaN6SRTrLQZSJS1QddZKTys6qvqs37hewBMbiZRysf9p36Lt8Y"
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
