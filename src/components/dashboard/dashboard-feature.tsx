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
    "93X9XFM31WM7HpNr7Bt34Jm4HGk6EjpYgL42e8bj3xUKaoksrKqghzFLEgQwFqhVzTZBiaDf1dvccMkoWrT3bVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65gm19i23y99rtif9pkym9k5E3uz2aAWJcZzexemBVYTwpbDfNQq4pNSJsbcg2X7Trte2kKqKxKiLWKLH697Tqaj",
  "key1": "5bzNWvXv2VNKCvADevR3cSGkbx1iyao8g1P1BpAdfRWsQm4WU2W3MVZXqP6UzRBAorW1Xu9Q7qx2CTF4erX2LQHS",
  "key2": "37K8BUUX4BExVmc9zm1xH8Zzg4gziKoU7fmBsfc2yjBQH9mVdHzqE6L2iAE6ogvbPmAmmQkYtbPSoKgmC7YUBwyM",
  "key3": "45QsmwMdQ2BS2iPWq5iC4vq1y8d3wppSavBmeJgRpDysSGpm8VK6QieKiBJxKw9Ux1EbzuBXFs5EmJSemGDGe2mN",
  "key4": "411kWJ6XAdHKDD8hz9dpz94Mr7RsJni9CDLduXwNzJe5otwp6auD2cu49pbfCXY8Xf1KN9fuU6AgunCExwKijcHi",
  "key5": "EDa9VdrqVHoSNMEeW4NPtG3kHHbnf21dBcW5DzufZxiThkCyomaGgQesrXewBqAPCyDFJZq5pX5guNSpzMtk2XU",
  "key6": "wWWU1eJphuzhJWdEj42LMz4VHqhdyA7aMhGcEVzLTZvv4ux6c2MivWeFppsrEgapLpndJa73cDfKSkckfsQnMun",
  "key7": "jLiKEdT98kAK4hCiaTrWqBpKDwtUBGHH7HnS3me9QuxBhkPc2R5qybcPmXDnYtoWmnxpvnUT8Gy7Bou6QwatvM7",
  "key8": "33ffqoXTqqNc56WoMy16EQZWdkjZUqCvEowwE7cFUUzDjktaZV2XLH1FnqesQoxhiVkfaKoFA8cwPVPCc9P6NfbK",
  "key9": "2tL8L4VsN1F1QZZZDUvUBF5geChGtAyGKV1Rc4Kj2E3RbV8FZerPucNu7Jv8cVE5ddmvfRaC1vqcdpRPVrwf4n4D",
  "key10": "2gz5JqPEb73RtouMyRQxsr5uri8DY8vCqurxpVSNYZgPtJYomyGwTHkQxRBk8UojjVuvVwJgV8DXoX7NnfAUT1ms",
  "key11": "3BsiXac8ZC2e6ZcKkJMHSfVFYrdwvVjEBtSrKvcpnsccELxD5DZGRmd8BmcVxMNBrQUTMkioEMPED3wjCCwYUq6R",
  "key12": "4ekCuuZM617bYwAxqDzB1MkB9sPSdDmgAgrgEDkTn97qpKD7y26pGsavNh64YmaL2y5q6F8CmcrMMQ2naMSwvz61",
  "key13": "31nmekbHJbLr7M4mbLApfvtJjdxGiFewnsj67WbQi8AC24avkAkAFCM4PiMVaaWAY8r4hVPzptfVYwz3vn7obeEj",
  "key14": "pdoDrzWkkv3LxDxXrawCjbEdU55Tp3eiQvyr6jm6TicaGpeWXQnQMRY5q5BFMrigeVon6FR7TG2tyu1PnueY1ox",
  "key15": "3qWmmVuwynBd6xRMPKehuq24wFdJwNX5LAaE4ttg8Yf5XCVkaC4HPUXSCAVeq1eZdbbr1cc3GkgNus3MmGvVpyRZ",
  "key16": "3DHTm6tTJ2KLqozRjynN3dbFg8TDVcAUjmsKyvzeR4UHLbt2CWjYCBz336LWnuPgLtjpm36f9NrZwGTxhNCGB8pi",
  "key17": "SkbBYD5NmA3RuvrzxqKJU8aGW4cJ2auho1dgYf9QABimzxTLookzh6R1V7dfwHMCSuNBmDxmuCfYyfv4ZgSnCL9",
  "key18": "59zDjN2HDinus1X9nyZgbyz4ntjfmoCTTsCDVwRMQBNBbBrMuQj6TmmNsd5w7yahQgsbPg8bynxHmNTx6Z4TWuVV",
  "key19": "2RWDEdBEdymXZvScQH82mmeyNP9RDdeTDWVXW2Sy9E42mFpWBXKgqbyZWrfqB3n9WweJsy2fFmZigPkkk2ZtDbUP",
  "key20": "2EiWD2CHne63D4aczcBzFWRUaQEcmaXPRckzKMuNnuNSWmUrFvYXb6gXBFHD6bbzSC94cKXFpFQNX4LinfnoNWu7",
  "key21": "3PwhUChXAh8Y9DXXsaNNTyntkAu5ZGJHKepMBb8jeV5VU2Rj7xSNzKCCZ78GnVUnTuWz6b6e6BAU1QWD9y4Vidjw",
  "key22": "5HjbVUyu3gPQVm2PMdJmiX4fRKCKjXJhipw2URkbV3a7Hf6p2Y14fWpA5LeNQNpbTJBn8LPNtHsusNR9N9cFL98s",
  "key23": "qervzVTZe3whPTCGq5yX7Eo4zMJWRbvCqmdqMZbJfhZChVCgMmqhCeEFoEaYqdBWYzyp4owE6HogeMNK8NxknuC",
  "key24": "4Wtsiypays2BdSgtfsa29NWNb9bw82pBNEgqWU6jk189gaFbUx9yHyX5REmYxBMewtWPSsG9JEVkzXPy2wcwJhGK",
  "key25": "2VSpiLK5fqn4ZuE7gD1WMRqKPE6gZxhacAu5789qQxnH5sAmeMKSsCpEadgcUyJ8Y7M14Hjt7Ey55XnSp68wuZnT",
  "key26": "Tm6PboiPUdjPcJNGDFUhBspj7hWdhbaXfD8sMekbgWVg8d6Xe2wm51Wa9fQNZspYR8ECuP5wBvnr6vV9jMSs33k",
  "key27": "24J17TmyD3uv7aPK5TGtbVej9Umqvw4LKxNmUraHUAGMVP8BbSKHgGkebiTPN7xCM7aW7o6N6pLiTEQY5cCUQqEE",
  "key28": "56jpurN4tryfS9MyGRLdR5CGLxU24xNpCg7FseauaqyGuFYJwPYSv4RBTRdatpuBHxyxH2SBrZN2QuUbj2xYE323",
  "key29": "4n1vELmTjc4LS2qdH6HMCXqjXyw7God1ynMoJD8qaEWCtE9NW75FovYmWuAKjTBtVX2yiJQesorUbcjLBLfL5wZj",
  "key30": "5G4oLzgxAbHHviuNZsi2rT4g6GvbQvtXczTanapDe96pmBUbhbB5MDC3dE2m6bHa4aeQXrqdEDDzGDdqxk67ZM6m",
  "key31": "ec2UjpYzA91Q6Hvw5HCeDiM79sUCbtaVM1RKSsz7D3N3wcdSBZZwueyTf18NcCmfCwbMs4xLf4cT2L6t8CBDNek",
  "key32": "3WHppkKdn4D4EGCUi39uKUKeEZ5vqfpwoVeyonzkkK1g92Cxs8aAgYr97VcKLiMLnNV3dhFibCLafDDRoX4Xbia7",
  "key33": "oHtPWN7tunqjKUWyXoe8FAwN8MAZ2smno6UyyNsF12HTHRUsQ1CaEc84gZcHAN2gwdpujxjDjvDDmZdmeXFN6Nr",
  "key34": "4j2XsvyNfiTgAqh7XfTEmFkBFJ7ge4DcsdDewfQRSwqr8dEBLPiBmfE2ui7ZVvyZ3cdkvQyTNgtZHWMGQkegb4Sd",
  "key35": "5YysJAyzLADHCYnzPb5Yc1iPZu1Dq3yVpxy5gLMYCKFezQiE7yiXHFzXwkseJA3stAoM2G3bUqmwtv67xFSMVBy6",
  "key36": "3PS5etJ4Vh9SzacpVF8zqMKUAdV8v6t7U5QJ3XCxjUbqePFHSy3BoSZyWNRRwJVunCdpQBdTuXJkNi2Mqmb2ccj",
  "key37": "WZPFqiQPVsBAjixJ8s7oGqseQo4xtD9rpV2QPLZJf7QaEAsEfZF1idJiqf1PTjZstyEewaSrkE1SnDHbMVAWzFE",
  "key38": "2ncCYJCWBtnqYALF2UTfFwQHHmNiJEB5mHCx46zxVWH95rD4FSZaoFvLWdLrtekG8sTfSQ7XxTphkJz71pBaxDFW",
  "key39": "5bmwTJTE29JmipJWVCjG8LQ7wE4UJ9Ab4WEtopuNpV1B1t9oTqZhADBwNoLidYJczLSVeCnbcvKC66yfcToVWbd8",
  "key40": "25W9spViU3EdtLvAA2RfLAyJ6f8C9e8fW1Wp7iaupodzhkfn6Kf3ECYKALwMjVGt2n6kUdPBvJX6V6CZhGSMTrFj",
  "key41": "4MKsSmeT45HAZLzQuosaRSjWshtVGpAnZGZdrCweSD7xHLcCE49HF6YsLuC6GL8Peg7kywahnnjC4zrW3Uj9nqAM",
  "key42": "3NJZvdh1pXRCJ4DDX2eiKaDm8RkwTMsXM7E4j1fNZpdu2omXPMjZmFdAnFCtEnHggEXxfhXz3j62N6FSKK4Ci8Ye",
  "key43": "vaSrLuZFkWC2W8tAUixNen8FzcS6GpWW6RSM6UcemCVdA9FetvRJbbzsM3xHJa4NnpKuhrMHJGPwQYRRULpTeNQ",
  "key44": "3ZfdANRRGTqhUDF6Se8kMnRhAmAiJJ1y3KAm6wEoxohmrdTLhagsv7NFJW2R91EDNFWvg556jJshWVoqtJicKAHg",
  "key45": "4hdWWe6ts8sdokX6Pmu4pML3iweZrMbD23xvw2R9tZyUv21RAe1MkwHSKk54h4RJBzx5H9qjqLZoRHKRjj2E8r4Q",
  "key46": "gfFt4DBAvGPGiEcU4tcSj2381b89gAxriy5D4MpQoGCJoX2jEjb1GWNa8R81gxJvfymM1YbUzeYK2jc7Wq7vgqs"
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
