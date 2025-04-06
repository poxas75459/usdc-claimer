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
    "wYyXmW2VppUj2ck4CqxkZPe7cn2wMH4tSNhDm3LcEgcfvewBB9H268cHYPn3r9KDzRdR53js8RKxts6EpfpZxxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YcshDwJTjs9cmnrfsNMWbfTaBCZ5Tvd9bBaPBTPUxdDSDUdtoBqqJiAECXVQqR4pundVMRE6QzLvbTatUmAuFAQ",
  "key1": "F52GoCktJjdoJwREgT7ccE6Tyw6ZJfZ3NVs4Fau3bJnMQsstvfq2cJ6u9utW8XV369yFFAGeJaovoQqwvj4yXNr",
  "key2": "3owrpxGmYTABSYvefYDCiqv8W685QezWVQZuncGGBkcQhgLQ8AKSoM53bNEJsyhP4vFjXMnZseXyiHgvzbnxqwds",
  "key3": "54c3Lxs8XVUNAKTs9pPkbyAPKV4jDSaJoKm4eVCFPt9jHW929RHUW8y2ypNNk2TXWRip4j19dWhDZJ6pUYHiJUQD",
  "key4": "2PwBQfgP4dr2ckmzD1sMrtT4rkEraND7PcNf78spGS3eKEXUTvi6qVc6uu2neSh6uEoJe1ytoma2h3JoxpNK4YRd",
  "key5": "41ix25A2kWTkMwpBBv3VCXy5Xqr1RQUtrZHRr8JNxvxHJYx56HDm5NrA2rsxbFUA7irwgJUyb1Efzu39fWVWdVnb",
  "key6": "3HusfPY72SYiEuGGXL3NocmNm8GTQmd4VXxQuGCT9S7niJbbDR61wd2WtXVhSKXSL1KbF2zmBZMweMdmXq2eDvJL",
  "key7": "2AbVYaijvwakbFN418WnWWMz8mXkz7gfcsBJXcL5pSJas1Y3DJEW7MZWRdTymb4UMdhpFenf9uVjTKLVcMU8qHsx",
  "key8": "2Gibe9RtJMVpmuZw4X56hVigvXsUpZ4ix9JvnG2mJukqSzV9ZzirUZyt9akmtoTonVnQaxnG7SRFpiqaGBX2Ewpz",
  "key9": "2Ji7Lhb2bRgXSWg1zh9JZghRGBygCKcdeDJzeM8YoLfXgRGfMz1E4ChfXaHFzchM2HMWrP6qprxh3jo1QDMCrpu9",
  "key10": "5FVccx7r7erzPJjs2Rb4DAWR2hZnpLejVBkCMbUbaKrmdVK7GmCnm5uvgDjCGYGfioB6rVUdL1MoGi2HGAJUbcRQ",
  "key11": "4ZaAqDsyVAfXpv79eTx178F6WCBaNx4eReu55S1qERv4c9aJn5oc7NLw9GJ3mfcxmeqEEK4dHB8a2x7UVEL4Ekh9",
  "key12": "2Zc6Ugrydvhpu8doxQxpSTVrVPhUFnMfjVSsZmQhBsTucNW77iiCPrycV8m6S22Pe6XfQoCjcv6NDZSkEPaL3e5w",
  "key13": "2ubQVaptr2aefDPXgxabn2774GYPvzQhMzpdWF6rFbPHtk21nJDdPEbf43vqLnEyi8r3aiS6WoRxERGFKuzmKrVG",
  "key14": "5YrW5NKYqmdgWb3EZe3bAot3vkG9pAp8UrPNQdcmKnB1acUNJN8kdtRa4fBQedPCvNNfM2xMhNA9zpAz5iNNTnCF",
  "key15": "APCTw9b2WwH73BwG9RgCfY6cWQJioguZu6g6kHNNos9YmCfRB2aZ4fjntgt2fQWLUnPM6DPFCWDM1vD6z575gHn",
  "key16": "5Ys2vxf7UuWvwuaGzyZKXVyf4ffrjHXQ5w3xkVuHW27NUd5jkrqFchHUdx132aQzDtw5f8WQLFHkpDxHo4oZrfLJ",
  "key17": "2AzUX1yUqDTFscicUk8VdzEfedkoVaCFrXgmhBPVqbFGkFVmkgJYWPS3wAyHEyYPMy8Z6xCKe5XVbmsEYgmDZa9W",
  "key18": "26hbYjttKWkUzdL1qNzrTrszMc6MPKcU9Kp94ZzGHPDhqVFU4K76qTKpSU7LdXzxy5NiKX8ank5AoEnaZyZNPWhJ",
  "key19": "dycpmoycL4qHRr85yPLH3DfjgprFtxgDsYwi4CER5eZT4HfVn5km4u4NgHobcvkCtHbJcT13k5B9EQ5WZctDE37",
  "key20": "cZTXA2M5japLC2EW523x1eqQCczafpMGg4seDbAw6Y6hA7Xc6DR2c7BUQ2G7He6XvLCeLCmXXf6qojHys98Sr65",
  "key21": "5FKNFHkwz8E8ympjVdWaVhXnCkvfG6SMoBCgJ1xZurC2gFT3hgCFGgGYcA8vD7eXETsHQ2TUdbWP5hdQynJ3sG8F",
  "key22": "4yqQJzpYjnV2hmuuHWFxzTNEwiCxawmtBjhWYmjq1DctkmvS3Um9kw3GKCruRERpNewoL6fDQB43EeFfoiAfZTAz",
  "key23": "5bZsMh3egrm4d6D8fxvbenhhGCSVphZcgErZsCf7fE6pDXsr3m4PrFrRBFdDdRpTT9nKed4WhWDXiX8UXYrJxdAf",
  "key24": "YMuaUu8nkuBGq8bwa9jEQywfpBC2jG3EEmvESjoXG9qMwdZubbPwUFhvpHcMaVrm4jF9ewj8JGVfzNXuZDCCqDr",
  "key25": "61TQ1nQ54iKGwYGjXsM1RWiebWgsjH8p74Paj76fMnmWbL8ce7a8goRjUjfAphSdkatoXYyEco2hjpqbinaMqZm4",
  "key26": "2VXnFPgtEJYmfp4Ze2P4DueFTutdzjumEuZYi5PVFHEtMn4SCTy9GGUfTwaFuQDyoykPGEZ5XTfw8s3V9SHme5gu",
  "key27": "58TVr18Yv9vx7cXPWSHirQfExCpxLQ2rwUWjkTy9Nx8LSHmdgngAQaueXpZBZppkuNpLcCbTswuZ73GsLFPpYGwh",
  "key28": "2fGuhfzzUkyRTHaGmbJPzyHYhvsht1u9TGBdqDSQJvex3UF2oGh47eN7a1ChRCecrMLQkjhAyMEkWTV5i5Gkehzu",
  "key29": "3yk3EJddegc5vT4qJYG3gyjiQtUNSL1d8HDQB44bUhD8JnyGvsGoccb8CjJPA849iFiFVQiBfSPcAp9iwHCwA99g",
  "key30": "55UnX6bTRGWaCZteyM3EKYdkTSrAGjHdg3deJpCFYgBb9kDZ97z5dSfFXaRny6SLf3JsPAzgRpbdcLB1aTcrHH3c",
  "key31": "49rtXNBfKnWLw3zseHqgzrF75g6PtLrea1MwCVKkES77ZySZ4nwJWGgngzGakVQwz8xtpSS2jfgwqv42x7e6u1dn",
  "key32": "5T98H7tcJ7URRzy7H3jzkXbGW6s4KF12w37Z5ZnTxwHjzeckK7zFCieQ19HRdEaMkk94hPSayqbMTmXdnLBJhyiz",
  "key33": "wcXBUz2tjBk9z4BXaAnfzaHtX34NkFjQGDiHckKKd3H5twPWiSmbNbb9apLwYvUC23oUvLqJknQSe7ft9WKM727",
  "key34": "42bk2Szn5K6ChknEoZ9zdvXgaDx6eg5F8kaFQaesJUNJwdxKEeEkycVmhsrvdp62GjYJdu56CP1kzL28er19pU68",
  "key35": "PvVZq5JWhJKDdT7dn16Rvxzzt1mkCBjewFHWbd45wCwWQpfnJxWPM6Vi3z59rmf4Lbdey2QYDEHaHfy8nBJSc31",
  "key36": "642CCNUtjjRMNW2iRBSPAbX5EXv4pSoXrD5EfpSVpTRhHAJVC4tgH3f3jNzwV99a7GFiNgk2z3w5q62FmACDqq4v",
  "key37": "2uPdmoyV8RPNyKso9emGG6K8obLYEAEbrKB9HDJ93HQvogfgFPq8yz9DThHLT2bue292UzFBNkuVQjvwdzZHEqcB",
  "key38": "5sWCwj1yrvcs5AMEEeYyRGCKCSFB5HW9NtATZCdK2CxbwU4yx34Bf8MhvqWJpmbqfh4DXG3dN5MDBmnpT5WFBDXz",
  "key39": "5aNRduLYkeY7oJYRgW2oN3AuLqQci2x1uY5Ldc4US4vQZyXPXcUUFEwyLihoxhX9fYA4hd4x98C2jkFTUV69Jc1K",
  "key40": "4iEuCx7YDRTtnA1KkWFV6AQo53R5SAhJpJMEwjYgcoPTCAViQjfrH3eTe2rVjdbgUDJhDbkHjmweUPvkvfExdTik",
  "key41": "Zdwi81xNi8DKb3iUKJ3KKUCfbxPBwK513hcf3b2NwanNLiuqKfEUeMFuAK3w8Wdes84eXjE8fatRnUPJsEkGY83",
  "key42": "2tWQrRPQGjgZndhB9gxMEffBmSiY4QddhWumQZiXnhobEyzDwNECZX5F5eAoe93zyGaJvdWQrPNkMgPb1jkDQZNa",
  "key43": "63wtLM21qqH2bQCrtqAt12PALfiocSayMFEKCN3TYRPAMbRDveXhB3jfmTF9QqRmvRn35EMYqWdNibrLXqDQKCLW"
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
