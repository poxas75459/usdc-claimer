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
    "4Nq9URJ8YLpAUz4paPENmKgoWLTVHeo3mCmxpTKjfyUXFUeJ2WeYNdkzUXECFuKU8JbDLhixtjJtNeM4JCFbJN4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zvvjzNiCcLZpprAUdgeBXW9yyeSFaVnjAkW6iDCrp5rJAuTt8zPJNNHGVj7hyf2KYVexEghCKKL8XDS4vv6Mmpc",
  "key1": "2TuqbEdYAaySSXJqNtYiygBdLTDCNM9NTVDkf2r9iBUd6n3NbhhNgNZph2Ym91zPTjep95FsnRRsdjV82ca1iUM6",
  "key2": "5mNinYSxq9MQFSdTrVVwd9J4J44ppVB6pv73pZsAjYFdkKJuP88qK6XeeoQw3AL3mkZaCHEAczZ8WCGwPmdMtkuV",
  "key3": "5vYN7T2NWwFULpyYUNf2AAxY5ZqLomxgerm8nQFiUs5yoeh9BKBKdt1iFZXsQcKNqi9Lg3RBkXhz3hQSCscCAKeu",
  "key4": "NAGrWmdJUPLBdFu8cckuPaXq4QwRHBnfiNvP8yCaREUaaBEjpjk9XTzKiFFvMCARkFRFai9zkT9npJiUxx9TuZe",
  "key5": "26U6BBkzRFab2ShNne7eZgJP4jNAZ9Sh5GvenvCFosjDm53FmCJYfNaGeyVFTGNo2zJgNJADJvseg7TVXA1D2LSE",
  "key6": "4uit2EmcQFvC1Ho76QfQExnpqAci4M6mVJTWJ9W6PSrEAgUS3dc4yEfV5WkQve7ZujHKDEiaKhwtFRyeeHRY234M",
  "key7": "5i7fJ6Vb6YzmFNTea9Uw6ZjTqfwpgiLDUnkDPBxReUYJgNAJpgL2A8rK4LiYZTFJSjrDvpzF1iLMY7aKwpYk7L8Y",
  "key8": "2rAD16YdjyweKgqbiZfphA9tETJfyhR7zeEMvU3jGdNCAWF2i5dqDcsNLb5osH3y5FEiwqvofp42sE6woqWWn3mu",
  "key9": "3yD64JpcMd8kL3bb91tTajCKNxVrEw7K38msDu6s2Cxt9hiyL93ru5jqSDEMAjzRZN1hX1SkEffKNSJQWJPJYc2V",
  "key10": "5mrCHCFqWA2dH1FjrpY9Q9kiw4P5NemZ56Kpq883j3LEnNMaxbPRkVfDEnDMRNJFXZB2i3wiBPsXgqrbDu6DoiZT",
  "key11": "JJoneY5anwmb9pAi1LjNj6Kfauo29YcYgsrWTLhVMRk7DAHu3iYtryCWxxkLjChLgG4JBRT9YW6MRftk2C8kn8g",
  "key12": "iJuC5k73LfBAuEAEqYbbeNgm1V5Z5b2zKndvnCvCCFtz2U3YkZMgGoAL1Csga6pondvadNWaY9JFsr218iQrNEb",
  "key13": "3Qbg4hq496qtoYpZDRRyAXrktxAQr2antLUUNYtrKAvskwoGmAtC5BTEk5XKgjMM7iDALbZYg8zhQYnrSLzFcSBX",
  "key14": "5MFPHNJKRHwC3LfwZ7BwaecrvCqs63Hk2XJxG7r1Rja8u9bbULyENZD8D8HFGFDPSgPuZdHqwszYGZVmNJ1d4DxD",
  "key15": "JPCEMxJAMWQmbpAAue2ajQeB9WMXBX6qwtcs5jvynDg3KnwEHTPV2bfbxWuiGTD9jjMU9mJG4ptckLihLvfvuWH",
  "key16": "4KksTb9HU3w2gf4pKB1wdKxQFwWRqAvYHmQGNnoFiXGTgZbvVC8b5LGNqphiUwuH5kWioq1T5TfocBoXsixLCdDK",
  "key17": "2uv6MaxHtm1Zv6BwQEWdXzRQnvKrgW1YGe5kJFTdZkHnFT5oP4mbd3p85UiPPK5yzsQwc2M1EhNimVu7TSEn52AN",
  "key18": "52QsGbjT9bRhfCJnZ5kGWZbZLyp5eNfnyeq3nXCQWqR4BaHis6DzscvWD7b49qvNTnJ6ENG1C8uVQvmyB52XX9H1",
  "key19": "VK3KvCTbeCPQr5ytxFikK4wi9Tpt1MPd3jeorPw82eSeDSeMtWC4gnTwDEArR2ymXm3noYSW3HDVNQLo792o5SS",
  "key20": "4VZUVdjCjR9Zxm5QDmHwZvyPKWnoAg4Z3gsLMJ4tvqa6ovtCV8aFqYddEN532kNqptR32sYoEktHJhwC4XikWUYA",
  "key21": "1dxKaWDhSPm5UmNZNgr7qc6MqHnPVHyxzuB86SkBPkgSyRPC9omryes1UbS59bYKYW4mHwaYooEuwZtev3DJueC",
  "key22": "41paE2gmBzR6qCdCZ5K12XWM6WVt2WpDKS9W7TXiMmevoXsR7omdDT8Zvu6KSPNb7YkYY7vW5ch8zDtTfWfeL2x1",
  "key23": "JcPxMZJ3i6E5zpGpEeQ9nx4SNGVeMgcWAWWt2CD5rRE7bsBVCr5KvQWTE3G4qy5iSvtvcKzdWNCCML9f35jCeuY",
  "key24": "5DHfeckyx1zhrDuELvxd9fuWwQmT2LVcZABp2pap9ha5xTaaxBTKU4HRMUKSig3EQJdfQuWNuSdtt2cUUnKr6MJ1",
  "key25": "2NGpQNb1fUj9qtgNXCdbjGMtrATXDptbKx9qTreyvYuv9FcAarHC3cBFz9MDTQdagTqPSGQ6FWUoCLNe1WPtVrFo",
  "key26": "47B8WzZZ3oMyS6oM1ba51FnaMRyhgTRsbavvsoMGmM2jmD1WGVFjWZjX47axYp3osAiaakFq1vbhh7HgbEVEVfCj",
  "key27": "5cWaaAytbPRUtkd4vzWE3Xp5JmtBUZU3JZKhyiXqg54BhyunE3fufeW9wPFyNJNotbgKAXxevvLLCk8zb4WQsSBL",
  "key28": "4ZiYrHy9BBzt7KDd1uLV3BMNhGggQwx3wbQZaEmiKUbaGsXy1xPRfBurAx9rCppje3uFb3Hv5JEkbVfnEwjeBnLm",
  "key29": "4QYQv9YVrRhuFokZTh99wLD9VZECmsRhayProE9Z583toe33HA3mxP9nDy9oweunwdt6QBgn4KBKiAduuKGkCPd7",
  "key30": "2j2TtDwLZpZ57KEVJpSvjBV12wks4HmuW5uT8jsHbsiAKt6FRN3oRit3oWiiTcD7TKGssu6SzWqveaFMQM6BZBHA",
  "key31": "5j7nzoKj2RiCdeXxUdaKyxCZZP7ohueFs9X2U6H5M7yPAXbcRPQ9YUPZHCgcBKfWvDqW56m2xcSRhazWsGfyTAN2",
  "key32": "5N2EGWVwKrqJUEEjiS7VSNw43qZvVgfhyJPrZycVJXgamnB24CNi2topukTUWoobBna8wEga3P9N2PPLpFoWmnnZ",
  "key33": "3ByNvoMeUKfAq3dXdQpY9TCUKATV7JfCg4M4QMGb87XwGYHndCPmtGkdGpbBdV4dRbBXb1NYVg4K9Ziz4dakdWxh",
  "key34": "2BoNoNE2Ymiw4dF7R41V8tUbD8iT2rCBC4cmwSYmdxhH3RmYgQWJobnvNkKRA3MQs4FepY6dtrJaQkumRmoQ27KE",
  "key35": "VY8Tnjd6mZVb48U4esxNk4RYop3VcpkeftZCGcLbTDd3THDGx8BDuQaSMThUvEhXnbJj817cize4pPXbtnPXQDW",
  "key36": "5WjmtTPUyUPUrxVZBSnfM8o3LTZoocJhHuy2p7sBztjaWoHWDbdp8u6tMdYT1FJ7pxdysHnRkzmU6ENtSCAiSKt4",
  "key37": "2VEdtZ5Jfxemw7UXBGV2CzD9SGFdMPzrN6gZiDK5yAgAJusq5Y7V3NrdFMTUo1z7sescqgeTgsEPuH3JrZyteqhD",
  "key38": "2LxZ3p3HLuauyeUYvWX98mC1716Akw3PFAPL5WV6Mi6HCeYirXCpdvwh18ZQtLuD3WF6gk1tpPkHEqV2G52m9L1i",
  "key39": "5na4gSEMUXN7Vs2q8ymxd1NmrsprWaErXiLkx9wo4pyQQy3GZWHZfUpkmTBYZfYd286ZuFEDdSg5g1Z9KegtDtPj",
  "key40": "3ci1LBf1xTPtV95PBmezDwcECvgU4Jrs43Ye5aKzpT5gS5a7MdfhWsT1kPmxsGQ3s1vk96sxueHuJpWRtWwczrXe",
  "key41": "R9LNc48jAFmGK6hNxn7d9txbjmLF45X3VwvPh2Zg7dhiSoqR5CM83hBzCgeXNoE6ULcfiyke4bZDrQ9Fn5MHgyD",
  "key42": "5UPkrUKYaKd5AmTu9RVj3WxejX7Z6jmFZ2YykG2CQd6V6Bgo1kK4SGeBhGn5JRH5PLmJLMdXzPPGuLpoWVnaqard"
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
