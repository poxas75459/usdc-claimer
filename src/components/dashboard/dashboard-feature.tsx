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
    "RoQuGra8XDo4oZzryEHZY7myrgNoWo6R5sdTVkrAP9h2GRnZT8ipz7x6LxH3zfWthbboNkTmEaEdPqeVxDesrLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dEte2KaKbFkDxRGnEtSq8SBrMyZ7GxLLfGVsH7BLp42MXnEBRJ76x62s3yaZT6JJKuwhEGEqisUiLyZ2VmUCjue",
  "key1": "55UtWMgApKwMAuZxhDrUGZMxuQJ91J5i2hJVXhPczuHJ6YgvamrYtY9W9f9VzeaDu6JbygGDc5QvBzfqdqbnv8as",
  "key2": "4RqCogWo67R12o62xy6bdudfBJKXSL6qWdEQYSKbTe5XumrEHVEy4zrgBpW9MamAD4FnBT6cFSQ7EeWgZ2HVtSJo",
  "key3": "2H9esCHG6MWTysT8cHxWQE4P2u7BgnKGDnjYQMaEWRMGSE7LTKrG2oe2RAtBegpc65tFMk9KPPUxF6ZU2e2TXnYY",
  "key4": "3MnW1sRUmcpaLGoo56XsZMrTFSFyBmVCWHX4RBeuyty3UGTwai9F7S7JLwnPz7Ti282KSuU64287rFFuVXRSJJ5F",
  "key5": "47qYaNHWTG84Jb6LveWkhJbHW2rsGrr1Si7mtSDosCLNebHxLs1sXASz9imJ5427A5uKdi8mhY7b7QcBFkrdfKca",
  "key6": "qYiqbEWWz6X8LG5tH9oZZ7ngdT3wuDMqrD2cf75XCanBLaHAzJcAPXMYXperaTF43oZZQwHBopMtzQyPMEQxPmm",
  "key7": "3XtDvQXG1KC2f3mbsUcDbMFKqJNWoSdkzhNweztufRutqCYGEWQTQhNehQc84j2qSLaUgrQ8a1TUVuZWAZufnqoT",
  "key8": "3gfiDPyNykteHomyj5BYaiuzk6exxFb6pBvb2aZsPkTqmeUmzMuXT5xnCxRsQKEYLuhY2KpaAa916dfMG8T3k7kr",
  "key9": "5hxrA6sfECH5FPnvynqb9eHfGgXQWxGp77gYnxq8pjiEzMPRn5nE12JvwTfo8tJaCsJxX9262E9G4nTDxnopvgEE",
  "key10": "EHad3PtNLogBpA8LW2QNTkXpdvvZKHbjEZS7TUfcH6fTU9ppJXsU4sj4zCMo7okfEuKReydQQsD8ifiTii8mU1B",
  "key11": "585uQKHQkBzDvHNqMr9muyrAEUjyAc1zUKL8jfXGyZhHQ1pCyi2qkAdaW2YvE2muRcgk2Daubfr7DFfm8giqsyBY",
  "key12": "2ZPA2U4UqhhzETfTucijNUR634z9w779Lv8QCi6AkBypHuEuqDt2yyva5vRHGCL455ePSV7pBea78j2urNbkBy2K",
  "key13": "2rrf7VvQ6FjmY5V8JDNV89BSwYtLhaMq4s8zezkjM9eg1TVZKXL9J9Fi1HVFVEaMnswYcx8efpaGiWhQkXRbxJWo",
  "key14": "4wo7CrYGjnvVjRsL3CtaMzpceCter8QPgmgr386FpiQ3kcJvvto6Tqsk8EcMbLSjRG6vpn3QH1EDKi4pL1fPkeYd",
  "key15": "5NbKnM4hZ1Ag7GXGbKPR9Wt4qSZxnk3GvUgRP46FBVFnmPLNdDHc6kC1LMK5eXo4oSwWdtoJMGzdGdbygGYJgd7R",
  "key16": "31AqLhsLgzShTaHBTC5x3G2gpeRLs1dccvuFBh2HtJ9ir85TJfDQo5SiLqGZoDDHBN9VqZDCBC3UZBT1XJdwJpo8",
  "key17": "4sXSNda2dYeiX5KZ1fLBS9qQCUCqTQ1z2GevBkDTrAdK8oJ63FQMCy5dhDLJhjVv7bWwiZSt7zUWyviGeSFHuadg",
  "key18": "b2GEVKfZjFm1iVShWoxpEiQWA2EAG8EbFV4ydzXUjtReMMfNR2dBL2eXtt6DNoSf5BLy2HSdvuX4dzFh5vdGc2j",
  "key19": "sBznPSoNdV1tVJJqipom5H8y9fXyqZEZ9skaY77V7oKzDxynSxYwNfwYvbUjrv6s6zuQVpAgN93JHpfR2ySGTfG",
  "key20": "5YzfTwwu8iLq45H1m8xJWszpjnEyeki2Tusdb6Vwrcegfcj6onxSCx6VJivSAiX3x4HKzMLJmtGAzr1j4ZThmG15",
  "key21": "5YqxWZhmwSjgAfcMi68RQQ2Z9RQZ2yPg5nh9KawLTTCqQg7WkrBRbmQ9rVYbhfWoM9eKS7ALS551qhzkRgr69cUd",
  "key22": "36WeJBUv8A98hNp5xUapDGyWyea7hxLp7synpFKQw2713cKvUdihcABmVxqEX4MB8jPg19AM6Px3mRxe5GHnQhXP",
  "key23": "4bucV8MYYxueGVhTo6259URsBgTLvn2FTpK5LETdZ2wMaBRntGpPF8LpbaG2p2ZMgsB8nbetyC9z2z8ccbY7ARXG",
  "key24": "huQ5UUDmGw7bLu3bdFuiQNiTQpcqhq7gHs1EsiyeWUdV1j4jrz2JT1VXrq9Fooez8FKvaeBPWGxyoxPdZaVnW7g",
  "key25": "225PzgnNfEcm2hVfvcRrj7fCvFhSjgiytvXXxScBsvZBVXkz8SuXwehZSXnkZmLsX4GQms1qZU4oqnoHVcYA1ZVz",
  "key26": "dyjYKp3t9cFfS7yrGXPPRB1osoUegd8qzgNrmfSvAc4B5xuHUMkp3EWfhLuuFrz6e598nMRhV8xGdykreW29pzn",
  "key27": "51EQgWgFoLsmfmyiV2d2CP3DAty4awnFgQKPUKwVVsGEpCyEqZcMA6kM5t8n4EhuoX1RAuBFBfEx9KvtE7knu7Jf",
  "key28": "f7WKdjtNk2m2aFv1YgK41nnAafc5ggyV4nAYbnKqG6wJSPQbSGnK2iVbXRRf4BSXbxhZL2d3dFt96sbiCpEDuQz",
  "key29": "3CcEdAofqi5Q2zYf94ofRK125d8rQijqTjrFqcWE1tTVQzbNaLwWjpodweHBpHbe9SUAb9QDapDp2qwKD8TSkUNj",
  "key30": "4jJkY6wzT2TqXhgdu8brFX15CE2ZpUiebvtWm7jGRghc7XTsS7bSTazSVHhUoyp23dfPq1bQUr3CHaesSyr7nn5N",
  "key31": "4DcpyEwsGNFRLcpZstaGVLV9WFJ6iL89UtpC52QF4VorhDojFrSQDgSTg5V1RB8FEanU9D8spiwxaZkCxJfegdj8",
  "key32": "5XKKcmNqEnHKccZ5yvWX45kSCi9TxihoaStTnyF8TEz5coFZKjRLhkdyZWNPkgKaRdamuU235K4yCWg1XVbnTDv9",
  "key33": "4AmTTvJXcpy7Am5Z1qXGHtq5NQ7UDE4R6vHmiMjYGyR7s7fqp93KpBJDutNrLCS3ij3D7CfePExZYnMS4y6pWJtH",
  "key34": "2VG5XYzQzox6x57jxK6c891ESPrju9NcyN6t2nXDwroJMzAmSTsuwB5SjtMUkUMo9kmVFsjwQZEBXA5jZrSMnuDa",
  "key35": "5DyCymdENUweahSXQ7WaHa7XEbYD5s2qQta3RHbMVvRu6zTzzyjfpVEi1RFskHVSaCCW6u81rYQgX7TzCpRHG31q",
  "key36": "2SbNe35gGqPbUHsPN5azRvwSPS6BiqDXzB8GCbhWJZ5pERW4tkXV9FrBC9g3g9UoKmhkDwusdPdx7KtSuZGqsLXn",
  "key37": "3PtqG1wEm34Zds3tuwEzSh7ZYEsWma7zy3kTk13qyF3vKQJsJSRJ6VVjyjQFrxpkncNojxh3cepmx3Nby3MKu63u",
  "key38": "5hBn8Hsb4EevdX1FqosQ6jXb4E2ypDXk6g5qep9opU7ayePxAzuzMRVuMBgHJ2uNrsvTYbL519axphfSozSB25NT",
  "key39": "24znaih1kR66buhM9iTmYuC7W3HL3q1zVJ6a2gYimd6VufmY1zRybWjM3EsznHLGt4CRWjXFKBaa3Hxo5iKP5vS6",
  "key40": "5y9LPiod4e5N8acoTfZUGAkzJCy8Q8BvQbzR76FmaBN8uwUGr5o9PzQNiZZEJgFu3SZE17EbqmcqXTkgkVFPwTMg",
  "key41": "MBzfxRxWbvhbvdwfWVYLSdzMTuMphCqejdFPEAnKpzDaskB4s7zPZcNNujtj6WadwfgmgGcPf694bUcuvcx6iAc",
  "key42": "25VnKVM53NxWFHtfFUEt3XYmmV6XeSRjMoSKVdz4vsKAt2bjHnKjnWLwEKpLznn3W1aJZ9fxbQakb45Ap2GDt5uH",
  "key43": "3d2rmBGKdDTiDyHzAh1eF3318n6fjDgsNBSgry72QwwUYUsAGGQYvyS332Xp2NXYmFRE2YXq39arMi1iiMjP8jLS",
  "key44": "4m2jqc1m3mMgzKCUtPH1ZQTJ98LSu2xi8WdgakNHhWu3z95k9yhDniQs6jkxxBsyNLm18afKoHUovMrgmg586PBQ",
  "key45": "2FLPWmq3LnCTzpJudi51A8denSRVHKuBGBQNUS8ySAjquTiMe8umhPW6gGG48LzXQDw2R8x3gDNjPR9pnXVrMUY5",
  "key46": "3XBbR47v2G9wheuzvh8pGwsNfGbSj24T4R8SYtN7fhcKmeUfUv3aFAgF93kCrzwMNrLc7Yu4ETSaVwAPHTHhiU9M",
  "key47": "3raWQwfZFDUrVMV3HePGaoG3n9tDbeDfY15za8gc6eos6566CVvUWaFFPBwgNr7Jsp2zQWBCEfmwwCHsvsWuEWKm",
  "key48": "5HfbB82uwHRQZLeShGrVyneTgfNTjhQNH33G7gAYjy317Rs3dqBFjrJLfd8oxnFgZym73N1hyw1gfWWvhoZjNQa5"
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
