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
    "62bHqgd8dDSxi8LhcLfajrZAAcFL8nDGpwZetSJp5o5XGVf96SPgeCPnF2bytvHiPCUjFbqNzPK5Szseqrg5BJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pgL5e63wxuiB45AvwoP3CamTymPsvYssdezbWfzJA2sYsw6D3v4tZ5FM3F3ALu5jxgdhLQiMB8xwe8xYkCGuqC6",
  "key1": "5eNjr17ZN7KVjDsg2FB5YwpnuC2mpFQQA5LvGSLjCd6EYbMzbEmQN3GL9o2bj1QjwyiVK4PgPy5wXuymiJoMvzMB",
  "key2": "5S6p2WCEr4f8Xip6n98jcYoR9aYpJX6mQ11hrRb4CyhZySDbAuKQuiXTjn2DKJGqigKb5VtkKdaA1ZER4D8ozHiE",
  "key3": "4HjaXxmbz8ktYpBRa99NfFiHEeug8ymUpcXcyXHD3abpmc892GkfNVu6GfgriUEZajnDWKTcm4HCiYVgn3ay3gDh",
  "key4": "sddytzQY8mbo3hFN1q4UCJ7XEcF72d7ububTBRN4SkyRxjSHPcNDFrQn6kpsphN5xeSgy4KaqZ4MWAPCfEzaMVs",
  "key5": "5ttaff1h3DFRXA3TPwxdZEdDSxV4yrs1czyDMMiaVvz7cQ11W9iWihavs9gmFuN1NWdZznF8rBwPNzqnNVsrhxKK",
  "key6": "4uxeQ8DfHhmyLLbwSiVy9NzMJwLSn1uNL12enBN1x1hb9qK287YdqhRoGR8f8u9KHLTRHpzEAGdUaXE77vkXsPTB",
  "key7": "3Td8dDDHm7N315Vn3sa4ues2ZTSEzgrz3L36vyDf9qpUsnPjtFXup9UjzX943MZLbUQPhSdPQJeDjcpDuiqdbqvu",
  "key8": "23sB6KoyQnMCDY9Frnn41v7kQugnmcJdVYpR3yoojn2RUGsiCfrPDa367vYAPPGVaq5o2QEYq6xeYFACA1LNYHKX",
  "key9": "XRjM7kHdh8aDxcpy1uwGFMfsm8pp7JSxV8peThqMuFn4AhhEN6iDsG7SD7VRciegmUo9zXZXRVVbX4hgP56z7Yr",
  "key10": "3GBAYvJrSRqdEsT68rs8S2mmWKeCXmkMuWZKrFpjDfMM1RXztsYXAWnckcQMNbmvxaQfo11U4D9bCZe1J8x3uP3R",
  "key11": "4NjeYdfD73CUJnpDQMzXbLhYsQ68se9gzHiJtJViVR6zjRvzjxawNZoL9RizPuixJXE4HCJ73SHTJCrvT9RmfH5W",
  "key12": "3ZH9E2WKPd3Qi7JVzMqas72U96ySsYHicNVaExW2bVq52xC3fdtzKd7ZP5DuZY3U18VMrzGx1oo6eRGrpZ2J7niV",
  "key13": "248eXwg2h1mTbEpEyY3TDevuF87fvgFiXz7kn4bDYMY8ccFLvchiB3tLhHWpbgT9sJMqbv9FnRzSg9Ys93D5B1yq",
  "key14": "5C2H7JQidpZvSgAcKX3PxAuf86uEP3uUi2oCBYFrFYMYRwguwwir7fVCQKqyGFh6Lewuz7fuZGibprjdPupK89rW",
  "key15": "4YJqL9KBT3BuM7U1EZPRQhJt8ifk9377K1J3n8oKFgxeL5ZEJ2HWykmwnBRSro3tcaj8Goia3GEYz3oogPtx484H",
  "key16": "4RymZ5AzGkJwpgTyieREWSKmH59i5J6htLpGTKVSLgVLTZffLgr2SrR7C1uU9M2pa7iMzWuoaRxLtu4cMY47dKps",
  "key17": "xPzCKU36rhtuJnypYyLfn8nHnDYcEvm9FaSSX9mkQ4Lu3BDE3UR6yQUAqVE8JYhMCr4GE4ZSQNKFfPMnb7eNgx7",
  "key18": "3FAiNXwExBKtPVw65tDqdDpuYrdG3HoF5ggvUFaV5voyp3SAMqEqkqjZHNUQVrqS9DGmuaUbVQhPtBWQpG9QdKM5",
  "key19": "2gxS19eHNcaPAp5ftSWaQXnFpYB2nJ3Mv3TMDCNP6fXPGx8NGuaXUaG1d7XEoYcj7uMz7hfr6mWy1AxujC4iu1i2",
  "key20": "52DzYJKRBmnjVN7A68d6V9GBFC7VPDeCnTEpyaUAh2UCdg4BNt6E7wg5VazxrRkzbLZoXJ8K6SKah1xLobzXBE29",
  "key21": "4C32VFDPdibq97tpbTqCa9LpJr8zdhQVMsSs6CPpcw6431ZCd1vUbDXBWbqYGHmWD5ToDNkhRCQFWDdBjqmXo71e",
  "key22": "36zMLWQmSBYJDrUgNWP6hvQSsdDFDqr5C6mLBj6r7J7yW4JiyfxefP5ALKjRPGhCaoKR2D22qnL55U6nL633G2bx",
  "key23": "2jLCd9e4z13vQkqs1inxNJLZ1kPG8HbXU27wZrN8qVKEjs3urWyV6P8CVXdm1cZFjgbgwUX2nDfPvNGDWRUHbmgb",
  "key24": "kkSqonjJBupkv3zvErUBSghB9uPgbSaBSRxAogNtX56iaKnZedL3xAWijAZgsLdgrSchhtNBddPseFiQhxskJ2B",
  "key25": "5azjxwg4CgSJUW2QFYWA3hSbeJBPfhkmEp2tXpUF9QZakYDZ8Ab1fjE4AiqFYncwF3Nb8kxpHyufCyAFXhNxQowX",
  "key26": "5eF7vT8CJChSU3qD9riu6yXRcowWLdQ2Yah9UiK1PhpnX4XMPNaXFCEzQ2XYux1PpzdgD9DEL73BVP5osNdFBDem",
  "key27": "4H4RHAafcYamRiAV61vjcrbosVoaqfZhGx2F1RQWSuD1Pqicr8aPT4CwhaKpy4L33pM92mdVpdb1MeR1ACu8tKAN",
  "key28": "4xfHnnzWSyeW2sTXQXNwQf8mTwawZoezerBUdh8Zh3NLJ2Sv5N9HVBa8d1mPXvchZTSGHTwcA4xKUazfg9yRvvvf",
  "key29": "37dipCbucjQB6Vv2iNSrZNASr1NE9Kzf7km5rE7VHZtsG1r4CS7Me2vK7v5958X5HFgRqqfPcyqGwJwzepePFNXa",
  "key30": "4vVsprzhWScmxZ9mrRdptBbV7L6vxn1Lnk5gKZTAmQqNWqA1VcsewCwu2oMYGQQGyS7cniF3opphjJbVUQbW1h7y",
  "key31": "4qgDQnUJJGqLEP43u23y5Ar4dLFzVXGGMHWVAzgtHbxv4SLhuFVCXpbmVMQogEwZiWaBfkn28qi342VoFU9nbE1t",
  "key32": "3iwe9tdcqEq3ww2ENnsJdLu7jaqajNqXNb9dSw8ysUAZpSbavKHd7Y5LeBajmmYVvNFRtKi98rYVtaTdC7pm6Upe",
  "key33": "4i28y9XafcfVmyP19p9GoeFYc7B3WuhR3RCM6226p1RefDpwKSp2RLsPPGCPQBDXTJn3DefFY9GCSv4q2fBXuz8g",
  "key34": "4xNYadbirFSSe226CPB3xoLkWqEdTwsmxW3eYDTbjcwnYWGA26xtKMgu1hHNHNnnHHsopjvX2V5DhQ97WxstUNsM",
  "key35": "YFKBeXjWmNpxtaFZZRtFoydVg8s3GV3JtxUHTyw9EQrGX2x3jND6ipdos25v7Rm35LbmZmnnQubB6Y2hesC7csZ",
  "key36": "3bFdmgiDGE7gzVXLkmeorVGLegin8ZaoE84h8gFSAhJ1SQM8uzKwr2SzxL6VDvDhoCQ537Cx5W6J9gWvUxUi6tCV",
  "key37": "4gSJC3Fa1Jc51n8UC9K1fUdhUrXQ8bkQBDQLA5QGdMGdFArsF4pHLPMJn1jrpFsDTJnEvqNmmPSRRopQbjv66EEu",
  "key38": "SBfbqqiWTQVZ8483gHZcNKpNYfCyfF2FSgFRXkT4Yjq31DSQU5UHW2YnpPxKyn81bEFgZXuUzezZeMhvB5ikGqL",
  "key39": "2dbwAiLUvd4BjLPWQK4eLNtd6WhsbfYSrCaT3SEfdANmGDb4VvDZRbHBH54AXZeccwxgC3PsYN8hMJg4TdvL3zF2",
  "key40": "TgDy54BEyeSBp6JGazvirWTACbkzTCibyi8k7CjKvgQYbQtKwhvnwChGenu9Rxa7oJzn8iLM5452VH2YyibE5et",
  "key41": "4aEMUbrzkSvAVquEW95ef6cf6rLTpBpppG4r18GDzcMvAkiNEKFXGZqyz44SEijZZ8J6pexfFLSCUYqyMRDyASsw",
  "key42": "3DYrodN4fKj6VK7xLpxVpTErfXpeRoqAkGPGj7o2pynrz5gUvS2itjByNBnu11ovTukBJM8t26oVWEfmnHV3mGCY",
  "key43": "2Z66A9R9UJAhcoDL4YrryQghigUmP4XKHeJHSrL59Npmnfqp34BGtmefU1ge44LR3VWjLfs9VFEoqZsme5a3MiGY",
  "key44": "DoBuNekE4s3gG4qEa9aiFYNoSx8Q8gejhQ1wPAVnANCjLaCKMquqvCcm3xtyt27phnFk3UeiUH2pZTTyeAQrGT1",
  "key45": "39cBAcKynC2652LaGvwXyRf3PS6i3mEErwQXquQuXpQxx4GSsqWXGMW4Qa258TdPKVBVt9iGceswnUdiMkSSxP6m",
  "key46": "nsiEf4qLTd6rymnqsNnh4dHYHXJNitiCsXAqHg73ZovTjVjdhjaFyaR7aZjUhQMqvCnjVo3NZwMpYJt5wQhvXKJ",
  "key47": "5BxnP549gYPFmiYzP5k5RNgGm23TABe21K5Eur7N5XUx6yfRaPPHXLkhhjQRptatpGzUyL6JriW2ppGfBzWSoGyc",
  "key48": "62h6AX2MsaHRDd3LpqKux68pEvK8YcdUh7S62iwUyhMrdzb5rkuyCWnciHXxcWVocgardznxXdwCXDYJTE8ZKoci",
  "key49": "24KfBWfZcShE1jCQdWjVk885VWVdcAQcw7824bVHTfpVsfSk9r9NLBDvjC4qrAJrP8689kGhYhsBxdX86p4VqtvE"
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
