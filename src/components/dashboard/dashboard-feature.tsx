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
    "5dHnwcqKCY6jBU7pbt8BWmkf3MUBWvddbGM1hbCg2FCbkp73xjPLm1MVYcFm1KoRFirPDmWiMAUmvN4ppmX2yxMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z6d8Zi4iZRv7FjoCFhgSaE7hcNBwWzsGLS4sJ5ExcygfFJL2zcS8ZDevs8zsMfaZMHcaQS9dQnPTDAYcyrVYoMD",
  "key1": "4acmuGWqsVpyM1aaEazbhhTKF96rYkWWyUFiL2FKz4ozpZZwEzR7PjNnEaKm48TpxKRDdAsY6mF7wTZgEhVfzYpF",
  "key2": "5R4Xi6oDVePAT58TDXvL98MV1AkATEB7gjR5odY6yEX54EgqvwJ53EnmpPGPDdnJbZ6qa7BrmVNNrDaqhA6AzwRs",
  "key3": "4vnhBdYno1k3u3YdvfEu2hZqtMaM8bonUXbdf1acz8ybXzxuzPCeUhToGwuRjvgH5p8T3sZgMptVgp7fQr6xyTif",
  "key4": "3Uptv6pEguk5A6C7uKSEVXfGdwAeCtyBiMZ9JGaKSnJKFpHnpDbzNyNmSh9bcVYGf3W1kBy48oJyspWXkwbwn1c1",
  "key5": "3ZiQtuLDWvEq1zASqBfqkHPUpUwHR3oSLwJjJJPMxLN1SRTDp7koE8R7zK4vPd5hVzV3NYddCLoUNxaRGZHjQkra",
  "key6": "5LnZYhnWGwdJebJExPVYNk9aTyVA9LZM3xP3A4BfcMGvPj8U6DggfUoTuwgQ1oJZEuQbUvGhvLh7kVwVXbmL5VMR",
  "key7": "36FYzsos3qQMp8UeP8rm8XReKqjpgmTF5otGuG6QDXV9WLkvpU9H3LuXtADi46yLpSNbTrzn2STxEccAg58kYBsy",
  "key8": "3H6NF6Vy8xDrqoV3d9CzTZy6BZ1yp4PNGQ83zBwvDsv24js32hCAYvJfEqwd9G3kja9C2p8zU1iNJCHmTLmovNVA",
  "key9": "3otYzYhC8TbgZRo8JyCnLTRg3ZDBUjLmij2NALohLVNJ26Met3daTvHRX6H5QCqGWrhoFeU9AY2tefD7HSNcFWVY",
  "key10": "3XhhLSZBFGUduDBL62MUY5dZYM1zdTTwzFwXyBqFgWjJTUaRyesN5UtBSGEnP1DrxctVFPbrS4P14qnDjWTXJqxv",
  "key11": "4sZHsSQ1EfuFT5TCBJD867ANNEy6To1td3N1P1RPSsNRNz81iqPM7gtygR8TNmqpXm6hMubaZUGtthX19CuPF12v",
  "key12": "4GrZXwJ1ofTtKHSRVGjVG9g2mvG5knM8Mbr2nDNE1UiR4dV3Fk5Gdc1gEX7AoMo7LcasZm9nhazJ6G1XVS1dp8kM",
  "key13": "4fxC8bqR6TqFVTeeXisxHaUppGijGoaNLJ3M9Vv5f8q4jQ2N2uChzVf7x61aRiQ4xhPFZJbEoD28fKxjojA2bF9X",
  "key14": "5NMYkmsXprKhMHEQJNsakCPEYKxMew4P7RVAPKks2xaMmTJV1vXhW7vepBnZovveYBJgHxi2zTLfLA2uH1AiygHF",
  "key15": "4sTaTeWXUsU27WrFjgjhmYR6AyZ5KDXd7EtdTTdKazojiHL1bQLKFrxBr4KdptktVE8c4JoJMtL5hc6ZievdPFwj",
  "key16": "2uk4VwJTdtq8tbMvNTvVEbKA4CfKJzjYBP2TgsRBKXLcNpAQUDiz7KQD6vKiJyT1ocMqMRdoo9V8xssafLTtRm7f",
  "key17": "cgPngMABXRvD7g8TtoY4gG1LRDumZB2AjY7CNE3i84XNbnkRsnEW3Tu1my3C3jjw7xhM7VnHL2z4VH7Pd78yuEU",
  "key18": "33Mkv7Vt4azMc479FNFVfCUXpfuvDHNRL3BBpA6j7WdpvatKdLhE1BZ6qcG41YmGxLip38jXocCKJsfDYAoCijxs",
  "key19": "2kr7q73GRX5uhpikvHYu14brigXHxs3eXo8n4S77XpJSLQMBAKSY1G4EK4oY6sr5quPYxectg9nHpn1g7V93wL7C",
  "key20": "2759Mk9Mmk1Scq6MMEkCeNQW5GAtoUHaxWf9ArRRRa9SsHgyHduWJ9eXTNzrPNe3b4qZqBvNnMbAmCMbXSanG9NC",
  "key21": "5hrEHH3zonfDMSbZdy7zNumqFvrfDuNnYYaoCEtsVU9HkQL3ncC3Nji6j5SQPJt4RdJ8EF4LYSY9N6Xqm13ZotkN",
  "key22": "VwhK3E7B6JarsKu8VtBQDCgeu5yA1ggfgRQ6mu6t3j4tLYY7ZEvtLfvkxjRT52eCpcEJpV9hnkgmbc5rTedcFd7",
  "key23": "3YgHnRKsGBA6GL2NXjVHCmyQXhfiLfLGEcEMP988n81wRYYabynp35Trrj9hxYj6CJSeP2g3K943Rf3oma5iWuDp",
  "key24": "3gXvQuGi49CzadFStZL5QFFSyymNmRuxiCEGk7j4xYmXM3D3pdNSqockPxwVFi4sDaL6vCTHo6DnczXxsvtftm6U",
  "key25": "2ZojofoCB6XEJBrBRPFUYCn8maLiQKHevjjNAJUEW8TwtRLDmsmx8MjvtJmuJiNYiWgFgFopVVbBTwnQkTm2xNr6",
  "key26": "XEVz56zt1mqYApGxH73PtctTboM8SuG8x5rCvNHznK1BJM3peUgof7SG2fsL8bAwCemygY9y7ozouT71FHgBW4b",
  "key27": "5jQ7Wb5Xhq427jQbcBheqg9Lkehhdn8Cpq7fzrVvX8NcM5o9KupXkj6mTpiurA99AWg2XhLNe1b3Bso1KTspQxqN",
  "key28": "RYoACiEx3c279nfTzbWLmh67jd8G9msVNrNtkafXRpYdqbCSPFgRCG7m7n5jHTDmwEQ9HHFu7g7ujvrRtxnPKk4",
  "key29": "4BYdrnij7gaup4FhRtCcmGkMoQAFsNKragJefDtc9W2NtbwiSm6KkJgcs8daRtnY7Er9hwy5tXCfAV51sagVx4ty",
  "key30": "3iHWaX1CrzhAeHUVZxRxMM1U56qmCgpKi2ykmtfNM3J3No3y1f3zzmpZJqQZqdzwPfsRn7aECirV7C3Ut6CuEydk",
  "key31": "5ZcCpLRhssBXCVU9bmioa6Y8xGnez9UAJbYh2JriWtA2e3owK4GPvoU6iFHGpkRAsYsbwr3F6McvenGfFs8CXN8",
  "key32": "29Mo5vPU75MxJiUwBEGHDZJMUPfwrbekj31Nak2MnhPTXCPVdXt5hHgMSVFJHGoEoyyRBmsATReSgc827dz3fw56",
  "key33": "4vNx4b4RHmHFA7WCYPGYFZw8w8F25zfgZNrhkuYqsX1HtnovqAnMed2chQY9Neqq9qsfxEzgXcuncTFpHQTH3XDg",
  "key34": "217bFZdDkWZDNdbPqWPpaSQJGuzeGNoxeoJQAFAwdTYZYg99xsEvsTmnfqhdtqvRsXnrLctQYaLBBoQwW6sAsGFG",
  "key35": "4yih4Yi5LSRfbYy4hHtjCzByDszjMnoXzGkGNZ1Woj1AECta5jcsUgsGisisJVuhrrjwrEzKiEYJxVf8gyx768A8",
  "key36": "5bspmu7RsczVzQWxFiuCCjAMrPDjmDgukAzwTZATQFfTPGSud2fSVSQbn2mUZ98tTxMbjghnwQTvRUycrZEGsQMe",
  "key37": "3Ad78toiDsowmmAwmhhNti9fP87oqtRWVnQvDcYRMutLTrpE2FbTxsNn6t8ir3UK7ThFJ1DGVPYN9qd6uSq3yNCF",
  "key38": "4X4aPfnXwgKbtv4jhiWudGV5qEgBufmSbm7baQqY6mZCEVTFibYxsa1yYzUr7s3nyTo6htpUnhduoiPbjb65pcqo",
  "key39": "2VzvTufXFrFuFXQFCQ7Wiqf8VymPSntGomFsuBPx1Q1aC3auxFAdZNdYY7tJknYtjiZt95hGLLFzDFSxTzdvGPw2",
  "key40": "2ittRkLp1inAyYs1BfPzngnsVdRd4g68Fsrmv98yc8Rs5bCJNKqECsfMGskbYxjsT1DVrQd3fd1nU2sQCHLL8wx9",
  "key41": "2XFqAWopr1vp1BGAJFC9Jiwr95wMf6vRZwQGgkzsKiwJYg9BtyA4aG5NAbuFmemBCJJaUPPGYZvNpicozAjwWfjo",
  "key42": "5nPc4K3kCMo3aMwvLvZBitKKZE2dNqdWx93AXKGrRnfLomtDf2qDLYvTHyYvkXgeaMpUSjkPYEFxqb1TvGc36J5b",
  "key43": "2sBTmD1LXZEHaMJJij3EaGVssV6Ut987goBTEYUnqTa4qZXWwJuB6ZMcnZnQAbDN5gerdTWP93VGwLbtSezF2cFg",
  "key44": "36wd8RGKnUwSf35hD9uCUSpRYf4b8pBs7KzWMhPFGwJKv2jSMCLPheAC8rXY6jUtmhbdDxAD8e2ufS9i2CiUs3K5",
  "key45": "3K5CprNTNxeuc1NTzZVwxFkyBUqQ1QMf7d787fCXM8nBmL899FtAfJK6cjtEo8eWjcSG9HNHqV7weNNV17rFUGCU",
  "key46": "4wo46EzE5wsEkg7JDnPXwnH2oKBhjyqXfFk5s4bLmdo5QFMQKtX3vUPjiRM9PUPT5drGzEmg17k7Rk12JPuEttx8",
  "key47": "5siYFGF4NiyncrJsyiCNAxKex2rsAz6vFpnFRMgZqZuHi6X7QKR4NC8mN8yFuK34DoDwQghpvWnpJNjJdUPCBWUE",
  "key48": "3qjByzmjj6rUw92KFFjC8q9ErpSygaSd2m3bxG9DZuAuudFehBLK9V3DuoZrhBpopkLDSBVqFH4jNg8w2tbyTzYe"
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
