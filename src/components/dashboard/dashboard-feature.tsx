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
    "ESsbYRV9zUKQ5DFxXiVZ3CMYu72hKSbjfaNepzJfud4Zza8XLGT8ZFuoSVnjmG4tt3zTwvfS4GCcPqETzhjg6wH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XY2MQgvGH19KuoYL4mHkvAYqRgvUrE2RUgDFHUmvgFkcbG3QLZ6PwdvAj8UUmNhASprfYs6BrehtHqaQcMKPdKS",
  "key1": "ETYSAbwx11BKrmwPChULoSBbm66KRa2nS6SSnfYcTABSeQsFce5PdvBPQUbUGzTjgxeXYJv1LZy7JqDEDmH12VQ",
  "key2": "2B1iW1fDZKhF1oVUbKHheWUNjz7RV6kvTGFtZLrQ7L9YktQvvqhmCz3Nzn8HtFJbLGTE7SLpRqE4hMgkr7APHAMM",
  "key3": "4ofrWC3KAXFKHqFraYLRUUL5HbUTByz2V9HcnphMhb6Beqs4Gpvf2nKkasuqFobfqDwSw3eEJcxUrARca1rAyiPD",
  "key4": "4uYzFJG777X82E7dmP1jbkoaN45Z44hLkaYY2VnaoEAhRHBAA4sdhB55Shm8bo1SGk7T1SJDRtYL9ppdMUamAwnG",
  "key5": "5fpJ9PcrCARMSG9SxbBrg19WGWDHzUeMLGrQoaDkRsTNNpkW45gvrMmUQmCVTiTmtNsPaPMsdUKjH3EjYPZfdJFe",
  "key6": "TpNTKsH7u9rmWL4LLVdZNjia5j5pUDHZoA6ziqskxqxV3FRKWsd8BEocSQ9Tpe4n3mvPoaGakUosjm9QZex6PX6",
  "key7": "4w2thBgQWTmbTVr9KPm8YQZ965n8EiWAF9JDi25opPPe8ahFw1zWVKTQ2rgmRpBM3gcqB3JuSbyon3RnssNe5cs3",
  "key8": "62azoNnvqTy5uaRw3cWVwJuQ8inzPY63QU6Efp7W7WbuRPzmfWk3SsKSdqrSCZdGJ7wfErz8FQEAbz49CHQyHDpA",
  "key9": "3tHJgSo2qoiQ5fMd2RUjWUfmWrxczrg2z8RzzJUhJqyoqSzx25VNjQ5Pyvy9Q7j2bJ9XdBm86pTnh5hFNFTnpgCr",
  "key10": "4xus7qVNWZKFq312qWVX8LZ7BSkxUdog8Pqqd2T1XaSHMUPJmdFrLQ4dUCZ25ZDVw2YDNDTwirpSoTFNeQBDmFfs",
  "key11": "2uSHugGeBr8QhdaPwCUnTkRkhc4McKpZBaGKsv6DKGRhbwcb8t6CoZafu6oP7VKnNoU3QMFX9xR5HyZ1JjQSb6co",
  "key12": "4rKwAHxTLGoajWAcL1crPypwnMsdPRMBDckFL44bxyqdVXbhdLKGdqKGWd3F64Fcc6wRPWcbFUDhBEzQp6hs9g9o",
  "key13": "2pKEqvsgMGyjyCbT2NSMjsgfnR5dKbrFRUUqPmK3VPebGGSUYdtzjwgMJ8U2WjdkNgMXzv5ZhXoNxXRc4HjuTD4B",
  "key14": "4sM49J1EFc1pwazbLxwZUiZXSYxvoVi6ouckZDSRJt1GkiNxwkntfuZbNKxk7Z4fwioqyeSAhnYyqeSgegYRgJK",
  "key15": "MCs8r2f3shSLb2SHQKGeKpXkQFbtMTxACWihvmRLJWra8fwzVGkRsDLGE4SNZBKcTZzWfpRZjCtaDn5jYszRVhK",
  "key16": "2P41TESdZRK6mVeEtXMjatWi5Dzz5E1PcF5guEAhiByGQgt3xjPZdeZ9pE1TSqbmSMPZCKhaEC9VkXKyKVnUG3Qe",
  "key17": "2DXR3jsPgfmcC265x8uHS3SDtsEJ9dWsTh819ctkKePsyRvdKt3mZJAStE2iAD9MFAfToPj84pNvZhzigEDQS5Lx",
  "key18": "4wfv2mEX81cJtP16A1BiBVDtyuydGoyFre8r41TfA78jqjEgtYe1zUVVqy6zNqnKBGzP1vxMdrWR4FEooPBTH15m",
  "key19": "2hwLBD2uenmL6JRf6zkZi5pUSQZfmzPKxiRZQQKRY7dPWWLgVyavDUZ3JZR7op2e751ZnGsEqk55KaMZHJC64pP5",
  "key20": "3ycDwWXkqQRan3FPtZehLVHWAiutWTgjqRoPSQ21iNpTtensWT3rCWjCNGepTuRPGrhaoG6GgHtsnoHTu6pD3aKo",
  "key21": "HZGo4EYjKVLV37jK5Pq1wvunNbfRT3xwsudTAKm4DR9icaP5hSVtTNKG1x5SnzmE1EaN58FUfXqStxU6A2REo8V",
  "key22": "2p9X8VGNNPE2bTaQtaVK1csVfZomWf55VfHzAbfP9vGVjTqVJ6XDM1XZEEMZYRn222kGLeNVLBraPzqYpxwxsYEx",
  "key23": "3ixLzBceHB5X73zRBpodmhPWKXLKmu54FaDwnRaLpVknkPFj1VJjPuQK5TekdEyYvbWji7JiC43AKntBzt5JfZJ6",
  "key24": "4L31kWp2vNrhdbnXZHkVLarxzEGJ9omRAy4mNu4ANQv41df2nhU19aWZKUBfMxtEbWexeF8FAXZWZ2tXz87SLje",
  "key25": "3FpQmmphUTmDV6WdVn6WLn3f2CiTN8bmL678xydrqDpGakaDyG4X7w8Da9GYHNuDaj4USksWJ1WBmVWzSA8o2a6H",
  "key26": "7oJi6gyAbA7pMvr6nHCuJKkVqyNDbneKstgoEbr3CDTkhejVVf2R7vbokGtc689euXBLEsV6xrktmLcZ65QMaZr",
  "key27": "25ibL2PKBrbADfut6JexkrFPeyUrAcHF5p6uroNbqfuUCT5U9BC3XjVUN3oXn9B3DqtHGDMsTmLnubqFfXYvSagC",
  "key28": "3YaLntKcVM8Gu6EpRKdJvdkS7EHLSfwmdeMfX36CkmnRpJM4ackKPry5y6y8ZQ8ixngNnSXtUKK4zmmjybdhGUnp",
  "key29": "3Fjf1fzJcKmb2BV6eC2D3qHGvULn3Yfe9AnLqbSfMNPZGmAtUvCamJnqYwtUBh558NDfGSS2ENpr2Y1rYecHv7Aq",
  "key30": "2xKMzRSnq5xRBnSxRiLuZ57SU3Nw7WpLXoj44aLR2rixiyJ9J9iHmn3mSv4tQ9vREd8K8WQCW3jitBfmLwFzKnBN",
  "key31": "5A59rtCGbqrUwEwwnWykjdcoBXJFG3fMxBr9YhEayaB1nRTepBfMP8LiBcceorCnmTLcUAqeMPFMB74eQXwPXvHS",
  "key32": "De6hKFZQaNxQmsysr2yG1UaQXWsb7WNYHriRyhgijpqa11ptLyJ6nb89NVB9Gzj83jCMgnoGunXsBg7XuLKRaQe",
  "key33": "2eVWowuwzSeviQx7MeSyBXvrzSopPEFhL5LoHGuwaSUeWKQxyXyMVWR3dqQbqWhUKcNSEGFoQqqjrkThrRE4JHQY",
  "key34": "3L6AKdMif61H5EGfTXnVLmwp3dJT2rpFLFDhdXLsBwSgLjaLKQJjcsbmELaJvXCXtdsTeN4bbXSSKbv6oB4hs56A",
  "key35": "2RC4hRpqGPzGhCgBLMMcA2TEk3W1oJQeTfHtiBhJsAfXFNDGa48szpJLLVjz7vyAMZcn9uTxC2vxSCfs7CdFV94n",
  "key36": "29QL9gEogZss8AAXWJDfrD46cC6tra7r4BJJ2FVoszYqkHNhFRC6urq23BH6QZGRzDRj1ZmmmAYHZih3TAQ6thLN",
  "key37": "3iXmY3F35ntBj9fJUmLW3a3KkDN7kzC76xvKrhQDTnbgwXPVgyLkqChKXQ1GJ85GoMixkzADTiUSeok5D9CEi9iA",
  "key38": "54BtMmuAAEdibEtZkSN34AKmMyKdtCXfxf1Ap7h5Wdpapmebf1miCyXrZqJyGj6P4ppPVbMSJtZEz9EtaxvGraGW",
  "key39": "3ybCzDoGVktWVa5fGZehsVqs36MPA4WixLs7FTVqCTZgoduWfVXzQwMYDcuV613sfwZDzgMQRg4iCbTCyLwn6NJZ",
  "key40": "2WGEHfcLVTmeM5N8UJ6qJ1RNSEgXzbRQ2V7vajZwfFp1mkWnmuM5eaoXRJQyW1yCfUSSDS1rT716kqKn1yvyMVW9",
  "key41": "4vXygb7KwFc8PPv3bFBKvUwuzuhoVuCbebVJFS68LdYj7SVyZqZ7iC3bhCGC5FCovizoePu1y6JT7D1h4Ws1UmMK",
  "key42": "nUbEjzMbUzx9T6WDoNsNVsjuf2Kqc5ojmsrfwubbNGfANx68wctEZQbBhdnySnfstzyv2cJqzbJ7QEH9dYfHSZo",
  "key43": "4tAMsbxwjgvgMztQiGrHLRrex6QMtTaxWHcuakKJjS6ZsWjoqRiR9XRK95UPxBdLBYgcA52kDziEjaCXGTa6Gr5w",
  "key44": "3NvS9Rdf1ZUEjx8fBPAMF6BsaLMAPmaSVUiwRAyteaLAaL4wLKuTYwKtvix4VrsJxD3TWzGzEGMKRXcWRjtaukZL",
  "key45": "5zyMFLAYFE2NC2QSYK1zkeK7K9SVw6M8XMHX9rbL28ZbPp3rvt58iRScipRYNKApVgMu6fDDYhQzAtAV4HVJdbbt",
  "key46": "3nnhE56Pfc2ThjLjcQ8QXtLMTMy2ZKtmQaysdXEoaYDnEcx3Lpb4twfvffRtCSw2PdSG5WbwknLBt5uK24nqZRfX",
  "key47": "2bQcgd6dAd8vJsv8oHDVvkpqwuotpYtA4SqsBnupkKwRTaqhdQHpywo8NAbmU5m1jBsgLpG4ciZH5zQ8LLhvfJcC",
  "key48": "5mWnHzTJtPpBgjRxAW6NQNsZZDoRM7x1vNfjQSpgnarzL5Zs67xi7WEwqfAZurhvRWaQdXrhm5NSV8z8us3JXxz4",
  "key49": "55TMHW8tvZdAdngFTtZiMYcjRTNSiYXK9hay9gEnHQAMUymwnVJuGU5RsogHsBhcMybBFq7ZcjSyUPWgFRSvafYx"
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
