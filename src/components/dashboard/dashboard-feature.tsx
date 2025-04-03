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
    "4B3Kk2kmikZCPfUKwFs6zYkDHzAHVDnRQF1HNgWo5ZvSxvL3facsYKf8P7EDkir2rBfHQ4T3QSentskoJJujC7tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67k67Vb8xtZAnQFmSPPjwYdGpGa4zGNapYH3oBqSiXPQesadsbYTkug58gSYKKKEmT6ubnu8fk9boQcP6q6y73EB",
  "key1": "5gNp85o16AWSzEbWk9rdJ9PKRucuJUdgJxaemupu67sjo3xn38q5jNduPPz7JgFBn9gF5cBHZqkawScHhbPGN1xN",
  "key2": "5XNjtL9mc22AL6LC6Hw2svm2WNzQkytArGVdeNQACBjWgi96khbipTKQDp4RrniHzFiiaYG4J3NmYiWBuswczFGp",
  "key3": "3Yk296Vtg9J8iwSSnUbd2FfxhmSsPVoWVsa6vxg8MMTzpxqFmfYHDciSNX66pPQ4WQwV4kVWjMoS5W5fjNtqn9Mb",
  "key4": "2FgcieHv6mJvCwYQ5NFCsoaKZ5AjfG2T2P8fGZkpV7pBemtSuvy3VrytbC4qcM6kjfi3wjNmXZSmRKDMhnekxiRz",
  "key5": "5KuNyBvVBtAPoeDbBJB4TTkNcfFMfFnqj16tLaL5sUhxqQS41iE6GWdT35fhMLnzp6gTGuDNkfMWRFsbBqqVT4qL",
  "key6": "3s9oHcWFmuVWfkddZjwbmVdXgjHK6fEfjnzjhTWkaPAXji3ZfuqRnikvg2HrMBKrMd89VND9WMeMMxHv8U7r4caH",
  "key7": "3hqptyjwm4Bm26YDkTAcr718s8K5AtAw9MY3zNm6x8q5z4hqNqGRCC1d5vs85M6uhwUPwhPbZYNUTV8NBivXaE8G",
  "key8": "xheVHKWxxAAKihNje2qLfD8ve7TCp4XhAS5fTiK6sZ4dV6x3W1ia88s4VERoYVpx1tzTCNyQakBaSbv5b7yNzYo",
  "key9": "3x47HdGigVpcczi881GW3NxLgPTu4k6rX7FfxmdGmpCUjYRw7JhBVuAGqc9yAEJtYLnNSSnCQpJhuiwVDKtyfYmP",
  "key10": "3NZER8uYXiQSmVJ2EZeRe4WF3BFK6oWhjt1Hhg5yQmcBKD5Fw4FdpnFuDQ37NSWK3XXnyGbyxR1csqcs14uRqXaq",
  "key11": "4x3uwpw3oKEnJN6qS1C5XakeSt497N2oyCnkpPcDyRpkNg5bHCjgLk4us6eLXQiJ43oDBaVpCZA4mTjUrfSFuz51",
  "key12": "5LomMYs3c2WBsoEaiqAaNoXoSGAC8678snMDsR7RQBjHdZeRtvdmu5NPhnGyJQ9PW5XSDAEk24gR3V7kHGSBJpEB",
  "key13": "2aHySnZ34QMZpLMWQThhzYEMm9YmNcp62D8EFoDR7Uzvd62sU5YFcGUNGDLR2FAD6vRueyuK3RdvkangZGiBQ2cJ",
  "key14": "4AV3eiS8u2Y3kxvuqyA3wy8iRWY9sutrkMRoGBjLVZu3acLygXdAsc4Qor4aggASoTrUT1hUnErJjK76PfctXFBN",
  "key15": "4T23UzjgdvSvikHexniYvkuer7urqugpqz4AX6YNkzpJkkKGzEhU43WxCNjCCnZDjorgFMcwLTjgNR1WzMQXXHBu",
  "key16": "3J9g4Hph9WGbGuRQJEt4rsobYH1XGyrg71FAocyYQqSLFC3mPpm54s8UH4qS851tNQ9Gpgr4BNNuETA16aQWAgQv",
  "key17": "mETzYyPPuugF8naQWCrkvK6gdpr15Mzh4FTopzxBYrgBthEzC8qZro3r9MkwyYkMUDWzZnjQFsd4Xvm8A2RnnZC",
  "key18": "2YRHRjkk3rT4aLA2y7wRjWg7UT179DgX8vYAUhcTbcEPxmeNFJKpNpWbxrawSm7qYHbDSkVrkHoswEczwo6MhgjE",
  "key19": "47UovzkSaHaeGChgZCMbbFUhAE3Q3aA7x4whmmbwgs14ZaaBimbxSdsWD8sKKZNFS2phZtK7DsMKPKb6AbhisbYN",
  "key20": "51aRXy1HCiBwRc6MSeXsWZr1oNrjTqtgPYxejm6RkoTA3RZQ42bY5Kh5H7aSyGR9StY2FesCVsT8c752vStskPVZ",
  "key21": "4xr4ay7EYZBex6pxzcHoEgqX1KvSxZcAFcZFab9ZJXV9PNp2GeepVsGCa4XBK5K6gMCnPvj7MvRJU6W6fW7XsuFm",
  "key22": "5KuubKtaEn85etR54xiJxmnS8vXaFk3JorcF6ziBguhEVkx8dKkjcjqLgyxNFoBHX3Bx2zu7i4TV6cpeUUpwZKue",
  "key23": "5rARMjr6wHJbg1saDsZVxDrNKThXAKSLxMb7oEroUV1Ex6Jkereqc6jHeDybUdPAVBGn2qHrRDVCApoE4x5ScTtx",
  "key24": "21Wo3VwzE5GxXw3Rih1seQkehbFCM2WNA3cMuX2FuwQ12ppxuPwFsTiqAxuweCMp8AgDUtCAS5NdnyakheYfpGFy",
  "key25": "5vGPBR4wRQQiVh1RTw7XcnuQHTTm64zD6TufTH1R3SLfZbyxT2G9ghJkXmFf5oF2vie2T4usporQYw5RDepCBue",
  "key26": "4p4A86xKrioCLTxCCWKPxGiynLqAxXB5w8NDiCpqrhpMyy6XhhnuFGE8MGpnPJv2x62J5CiBHAGYi6yf1LnFvYpo",
  "key27": "2UDBEozJdqA1ny93PuCMg5vrxL5CZYt3JzRVL8m8836Y9x2wi23Xxstx6gw9QHv8xs9Da6b5BgSjoHM5FbPy9UMU",
  "key28": "5XFwvbScKLhfGq3ex6KbZVDezkHBZzax3tfermSnQMASPUtHBoAes76W7bPWvQj3DqLucKfAzWnHWuhPPPSaGZth",
  "key29": "4dERBrmgyVhS4nSFT4aA1AfXmXGTh2tYrsvmhxkVmUBubgdKE2LAPGcDMXwLmeBKUNY5SHtkMbmeSpSAop92hgRc",
  "key30": "4oWPmP3vcYvY12xDFVj777BMtAixkNVraB1QNjAgGkNQWxwLxpuiaQMLeXcokvYPeSxLzHcGLWcNmwDb3X4gSs5A",
  "key31": "2jfLdS2NfdRqE4JFTbX1srQX7E2Lgfg1VeGN9JxwPNiujRwqVHcqGwC2HaeaxteRYVx8LtNCxE4NKJF4nfwoeVTh",
  "key32": "2eXuuaSUHsWqX7dFrw3CCyTkRg279FMc7XV5rdnqaTj6u9vavaeiujTpWgXrD6HoBPXNYP1FXEzruD4jMtVf6SA6",
  "key33": "3BVHcRJXaRdkB3tXRvYDLAYjjuHZH9dgK1GNobh4w5B5PWSiVoLh529F3b5C7eRXZmHTcMZNSu5bjLq1s7D9W96M",
  "key34": "3Pf6vZfw5HcUb13ReEHmNe2RHMLwQce8W4zLMbScGoQiCM6g4fYhjcGsP8uo5sPfH1mwDX5S4ctrbbAhJnkFm4sp",
  "key35": "67h59GznBupZ8GgGSvfvRRn1Nu8e7CAsiwxfS8oLFnc1YPDxh2pbeNTLTLg8TzNt97hYUagpjCMDF73LSfQxPfpF",
  "key36": "5okRB1646ipzQurMjHPd7ykkHeczYqYQdcgxRQdoyGmyqw7jexqP72rfgagvEpfhzeecEqCyjQrqg5MRt8poZrDN",
  "key37": "3sxR32g8hw2NTChSV4j9B9nbbdHnACvqdZD5cYLLGdbvfnkfmCR7JfgvbQ6nASWJtxBY9tnRR2P91pWnaxbDtNVp",
  "key38": "2x8ipiknKAmGwkU3fjbxgqCy7ycAFQwHKzqjfc9tmJzf1wnvRn4qHP25gykG2bFM28PnmJ1AaHQGe8oDVRHXDk1i",
  "key39": "5t5od1qArdNEc5ic9iLNVQ4GBzjdU4RVuCWUkAFY9oCiDkb2xL4FGtEQXMsmWTBemm8GURNx1Yjxj5SxaXet6gHD",
  "key40": "3kUJcFAM7YBtUrgeRfbh1TdkgpGytTrxdNnJxS4F68nneUUBZLDLjmsXeoJxkfHqQwQdori1gBEvmnbEqoNjX8Zk",
  "key41": "5xPek46wUaSxJwkMJtwqYGKBSvZKbBpMbfNVd4SChWwSLvfSLoBvc2mqtmwA22RcvCdn1BWPvnugt8BkkZR5R3pJ",
  "key42": "2uomMbkGxQPAx9cZKpJ2owWExRfG7edfxeJNRamBW5McipWRuYD8XW5ZvAfbW3Vbm63VRzsJfVVnfZ1HL79PbW1X",
  "key43": "5UDhYbKawKeRpuGGsUpvU1A3mhkC1rfLcLhRwjpDbaYFnVoBeBVYgQdYcB5Dyh3dFZejSwcnwFskwoWF4DNiJWgM",
  "key44": "567u1YzL4JYQV9QVdo1ERVUqM9z9dKwDQHrPP9MgggSt9Qs19uGscrtRLJ9mU7xByJ4p2uaQKNYmsFztDpe9Bu55",
  "key45": "3nPYkHCTL7Fd7ia92HzMwPPiqwytr6g1TfVitBYbp2ByJoc2e56eYA2oWCxPN7TNWprJmasNzEpsM1JiAszPXfaK"
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
