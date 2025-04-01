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
    "qPCGLXxH81wfwcuxoNF726to7E9QKTwnWdV1fnAwWVxRaiDqppFAGQebi22GembkkXHy2mUsC7yNnXZhA2vUo7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1pWdsfe8gRdLcCeVCytHpayEExGj39HPf3Mk935Y5EfJS1pT7JtTyzn9npVqcaxtxRZH8mLMc9gQ7qCsN6xXAcp",
  "key1": "4Sb5LU843Acns9oaXBjMPniyvjGqfzUxkwBeXvhq6amTA5Hw4qptzQNeNvFq1ua7PQuzQBBdbS1ydW9dFt4U9y83",
  "key2": "3krfeWrfr4N8PpFy66phRABVHxcfkxAVRi6rcqkKAaMQ9ZpNeA6yLxHxgzCLWRVs979qsb4HXoYChT82KPMXg3J2",
  "key3": "54rWFaXsxssdtkdYk25EzswRGKMM9w7sR8jineY99jqdXrzNR5uuKYtYmjoct7Tu5ki3Xs6ok22EHNkyUS3hUmcV",
  "key4": "4DZ5HXRjsGwdW9Y3GtnrVVdiEBvYHvCeDKMDifBo3XMCHR5QxmzPY3KDBN4wX4aJ7CURo6qoQNoVpGgYd5UTUtF2",
  "key5": "4Thuu78pvzTMeAUKm7MGXZhZ4jjoLb9QhLuEMPtaxk2HrqQ9932pBQhrF1npqUrnd1SRaKwv5rnoWrSuHMvQFs8E",
  "key6": "7xLfac8CSCVn26o5bcKTEmgoQ5S3eFayGBfYvr7q5q2xRekFRm6zQBr4ckW2yR3WdKtBacVtyDuGbinrWjhL8QN",
  "key7": "2uizGpzRxHZYhnCea3n2p6hwHsP2BCDo145hziLywHubxZ2NG1TAE7GEj1Kdgg8JEqkGsyTE3gkdpiqnLHf8zn2n",
  "key8": "4QqY7TBF8DMoKwJhoR6NV5BWnmUmmqF1z94nQjHuTZdebzEdxg8oMUQkLWsLRGwnPgFivdd6GrXC9EbEC5Sv5aLr",
  "key9": "4VM2NZoQSswdApLPY1zCdbwgC371xzDfDncSGZxJq2cdbExxQNQuyCioM9dRXwSdYyGU1pdjrrd9wwMYERHggXc2",
  "key10": "2G94qx1JfAwiuuyvtH1z4429yaJmtxETv76hPUyJciUqyikYPqiDiEyyiikUejktsSUDUrjyV4sEe3XJYw2s82rc",
  "key11": "2AwkkxbucJvqggEbCxyBuJvM882TgqXoYJW1bpQoYZuJaUvVKdeWVpaiKesGcyzYMgEn9gZ6QPQsxkA5XvdYBr7h",
  "key12": "4bLs7gLT6FdVY16TBt8PDVm8JY2238MAzEi7c7y4fBeccWXkfRv8Rd8ryJETSMV91ya4Vh1NpagSbKqQhToMUnjs",
  "key13": "4gpusQCY9biPgE93zsLJVsKNHUGUvbowbqRYVijhPBjAv6AJVNF8P5xf7MeAph87SccTs6boR8EWvCkhpUFp8Ewd",
  "key14": "kmtsAD8VrdAXfAE6s1yrobyULorNdXSFqaWHLYubzACkkPhZpeixgRCooo99TbByX38NAbcPgRGwoc7BY3T5xiL",
  "key15": "nTWtGrJy9AvMr9g4aM299or5tdTsU6au5Je8Ar3HbAiX2VV4iX2wKLxRgvcK5BpsEWmLwM9emX1kwrKvhpErHYa",
  "key16": "55qXKZUGomDbqzLCY3AdwbvGYf3ve3w3qd26Jrf1AVqaz9KQJDUBzeh5wxr1STPH1SFeTkddFzf7ET2Msm7TcYci",
  "key17": "3zGtzL3tH1KJhoMrnjHu31VSFWunDAqeUV3jMvRJ3vyGaTAKzy2s8qGXtaRoumgxb2NUBjQjpwdPJrMXSArVSSPe",
  "key18": "4abpmzLFA8ig7RfMbEdpfSiqpRSyizaieBWaEFbqjRFbPyHX1S3Xb89YtKxY3BkGPokLPbpCy8VAF5AHXe5qkWG5",
  "key19": "3eAkbNwSkQoN6ftRcsWjx1aLnT3Ykb85mE9LmvQHD8SzvBZyBMgpCb75678fLoAhJotEscfvKQD4PrSTP9KHvdJE",
  "key20": "5ACLhGeMwvVzAcF9AqQ9jaTmR47PtHD7Dc2NsigSPmVng6et2pQr5XzbKLP7EYzoYWceGqhYc5RvU3pYdfsX8Z7g",
  "key21": "55euKEk3r11GfKeKueJ7S7PsTTXC3fConUyzj5KApXfmEgudXRodmSMiQ8kHVHcvEynw5ba5gGANScbWqzehU6c1",
  "key22": "2k8SX1D1sc6eiR3q7jk1YDuqfgc49GqDAX7pr6Rvd5GsvUEooqCxXcdZWkSZnMwYMxEuzJ8RvM2qveohECG1hcjy",
  "key23": "5ASGWy9i6AJErA2cCnVJEWwNq3FMmcw1A8Mea7Gv9uVSY65676CebswFx57WFAyFsMQtJVKPEDvc2bPbZ6b6aJUH",
  "key24": "4Ae7t449VdR1XZDCK5NRcjo7NLTPgWLJjDgKBBbUXfny5iwaCfdUL11HadamPX65akT5wtaeFFdKN2wdZVPbNeN4",
  "key25": "3fxsEqfe82NQJSFqnw5Svd3FpgyNx5wkesN6mLDRYrCkDtMHSX3dX4wqhtFWBe1AXtBpAFUh39JZq2zSp4zs1gFQ",
  "key26": "324vb8kU4jGQw9s2e642YUKmYZVFDHQ1uJTFmYYTZ1zgWnsuXeai7oJkQrFoKtXpanfpAccuUokJDrEpUP2WUpcK",
  "key27": "1nScrXhcQTp2KS66UqN3NuU4acn1WT3NmwUBGzC2fxoiJuWZwoKXVzAVWnPtSjDacvkZPmfmuTXH5MwgXWCtdQm",
  "key28": "5iStcK3x7kQB374Ge4PpEvU7XiPnzLmKnzYHBD3koxFHGYTwVWEv75Y4s4XJG1tn2RoTDVs9GyzN1viDfjpNJTaF",
  "key29": "4PGZhVqbbmXHbPe7UK1EdmBsbota6yzAf5yXuZUrnaX1FpUnX8ZTwBxGWoir2iFjNdgBedhNCjJw46GWAgxVGm19",
  "key30": "45mGgPE8vaRPYZMjJqNfwbWrp1fxK1i39624QtR7ZKKDk2bDLt7gqiZKK5JRmumdnpsnbDY4XviFNAf8PTNMmfFa",
  "key31": "FC2TTsLWb615uqCCQdEmtckks3HRMZNvNpkJP185cxH2rLowmiSnhTy2s6Go7HRjESYEJfhMSywPCemk4NsqVDv",
  "key32": "4rwjyYeLS3G4vkQU88iTjaHa4QytCPJsRz4b5R76ML9E8xNPGpaqWLNFJNcwRd7kNg4oiRu2ZPL3XKiTfcnxPEUg",
  "key33": "4brDJdvofAdKkCLYXzyUxP9JJ7d7NSRfLUNRKPoTvk8gE8UQWsDEEogndgmpYLNoHNbWnt2AcJgSrmDW71h8juGa",
  "key34": "2n6XgPssFnabEPwzFei7FUbkvW6A4iXvwXKN4QrsSRRHDPr7c4CPRWp6aWsaPChoeLjHdYM2SZMxTzvXiA6MhHiX",
  "key35": "3mQJDjhzq8Br43DsUWJiTF7av9reW4EZuQZjNw1CAHXpqNspjH1UevLCexSaznsvporrHvPNMydBJFrcLU8dSgYt",
  "key36": "vefzJJfazVTXoBYb9agPiQoaMyULYSVKgYXojAicKwqq1sQJyrGDCxDgzq3uRCJCvv56fMTvjgUbmovmyneJgjv",
  "key37": "4cCxTsXDowoerEHieAdaaJeH1vY82VupSKAofNFMdvnVL19E8Zd57V2oAmWn7iBAevmpGSwaHQXXxyYfTuypwVsM",
  "key38": "4opFunSBZGX7zKJHCSCdopFHf9G8voi1iCuTNWLTBSaKxctW8cw35ftcuy35nQFGzj19hGZMMpgo8e8eUvuxvKfH",
  "key39": "Pkj4PoVJqaWXhGatyuSBMs94DFSXkmsH9Ut13AT6kVg9SxxHDM35BdtA5X8a4vpdHERerus7MeJzVS8SMStmuML",
  "key40": "5Jnz88kxV7HXcL3jGewmpi1MJh9BffSpLDMFRZvbJuoEcTrmCNASLW9RKCnEimWAXX4NvePCesPDyEU4NzaM9P5T",
  "key41": "Y1fPgtt9nifdvEdLZcUDq7WjEF8XiNohnL7NJS5TzbV2iNAiQbh1EZ1yZHfi7dMixCw5yvkFEk9oyctGfKosrZn",
  "key42": "4dJ6SD7FPs9VVRciN4k4qmLxkHMbyewwxYYuensoRa2eHoGodxcBqTwqtqfcngn39zv8XAgHPQbHuRNqXxj3XzMq",
  "key43": "3Hjsi32YnYJb1dsk3jiYkzaFupNpWbjK44iceBNa3CXAL83SK8V618xJed6t12SSDkD7QwmFGEtfvV5dW5NYDCyv",
  "key44": "23cqUvxyo3CYcmZTtUm54aVkyL9Zoko8dr6aWHDtmNZH2uCHzhxwpgUSFWmT6fwQEUmQp8jSZxs1oxi7EuADg8xn",
  "key45": "3RmXSRGJPfMu2CucCvtqKpYebMCwDqfM1tayPGtBuWPJaEL2eY4KfaRxZR7BPzAMvZ5J9Bb1jWgXEhrCVXAgGuf2"
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
