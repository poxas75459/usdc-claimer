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
    "3b75oNXWGkHTFvN7yGns5thSskSD5iCHW8X13DqWLobtBZpmv3GC93mraY9NUnqJNyPQvqRtTAxqmVwpVH1wZvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WuxE9Ko4uGUz9VjpraPUM9vH3oz1E6KPxfTSnAX3V61kqtj1yPoTJNr4mWneKQ3SVLmomsdpxMZYv7KrfvNkJ2e",
  "key1": "eeZ7doRGhRtP1uHbdAN5eisG76Vn4q88ZJCL1uxZAFthetMynCTpGHxY9EcMCKV2TicMKmMf2sCqxL1pEwhgYoA",
  "key2": "5Fu4hSeEj67aEUAo2zasit4qjk3Safo17w3j5PX6hSSjJgtzVkh2pfxrL34ULeUBguTf4KeqdvwLb42cM8Zjv9KD",
  "key3": "5nWXdu6YPuJ1WoF3DKYUisQKGkq6SauKfdsrSM4riTNbK8eT7ucinAcB7JJ3ttDcSDynYjoAZ5TCuNb3emArWMEV",
  "key4": "J3qGXX9cQkgqiWhCQ2CN1S6Ki5bBYUsBnkq8EScdB15BdbTmxjZC5eGEpmKSd2unrogE1BctcD4n1Ne8cjtKnti",
  "key5": "4kfxbxgeAaR8yiSdiLXermSwzC6ut71151DnhYF3mXyFewsZHttH2Y9Leb8MP3G8XzLB6dHcdYQFQ5SHYcJZgn1h",
  "key6": "3X4AuEjnFNTZHHHdDYFaTqDP1hvALDjBKDJ7DmMC84JjsyA9P3otWCgGxxCju6PxSsEkkx1XCmUUJ3RzucnPMzfY",
  "key7": "2JcsbGwgpmgUKyBWfFQEyW4uZ9SNUNHx3Hc2mFBKqS6N3nbjnoWt5GGo2mcLM2wTqVgmMXHnp4gFM8JDE9BBhwxy",
  "key8": "Yqvz3TQALRfo9ERFWaMv27zkR6vjWeWfXtkFffzDofQgfcVUrzkE1ZthzHokdpWq5j2VsMxa5w5JaCDKAo2nY37",
  "key9": "56wEPPEPTXw5pPw318fdruiiqaDFVw7rKFrbKxF4TnteHM3kzSAX4WmiacCsWvF9epcVfRHNDhfPEn4MsnUd6Daq",
  "key10": "3pVcBfT1LG3kZRKAT65q2sSjwDkV3sCHCAnEc9EqtmUHKmsUpvxq9mtgKGrjJ8698QnxihJsUs9BVm7Yiy8Hw9px",
  "key11": "DG3JJMwveDvDNwcCV3d9wCiS2N57eDUjJgvuUaBWjQTtquTGjLeQaCEPcnFytotCLaWVrbrjWDEVuxe3PGJe1XF",
  "key12": "4Ze7GNq83qGrthYf97qBe5vyv6pesQ34JJbSZuu6JsAxMe1cpiRLRE4Urvfjku3qWQ2WbQPvrDNDekvMJPBB8mYG",
  "key13": "2SDgwxnR24iQx5sEy5czPsu76xbBtJAnugMSVQaNcck1y5W9MxpuLgopGq4PaU45JXojavoAitfw4wzsnpv4iQ1N",
  "key14": "6483ApCnCjimXst3KV2sHmXXR8R85p5788o6zgyA9bwprKpmhD4oWZYq4XKascQoXVu9DmZ4Bb67dwscWmDq2UbG",
  "key15": "2a9nEcVPEZnwrHfWrN4PGtqxAG8Rvkp134kK7GrXx3Yrc3Fh1AsX1Ze56Em2oPsBUFEuHuKK9Ufu2TroX4RJGXUD",
  "key16": "2pyjWsJhoKwdfzfuLasE1eHFNhQZFNGkzGFzDpyWUjsYrNbyMa4ybiyt4FTpg3TCPGkLzhixDosgns5Eaib2pZNe",
  "key17": "4jqCki7nMR6Bmdz4JbCvL5vfHF7ayd77TDTvqyHftRcskvH9jGEPF2iDqEQQNAXR7EntGnitM8F5YMcvvaig8ToE",
  "key18": "4yo2bjgmrbL6TebtzUa2JYcsSQLb7NjC5NLmPrTnQEhEdpr88447yr7phTZqHQ11ejjQSKS4x5s2npqWNh4YzsfP",
  "key19": "2C3nJBiS6M4fDgXgHiFBShjiokgYYeo63gEDXYLP9zFUrhpcwvgT4YiixYsWP2ekkuN7WukStFsw1Q35ygQFXtMF",
  "key20": "RMCd8KRQKTcpTTBrwA4fUbqiMJdyPQzaAvuqknfeFi1ZyuEusUgNUTehidEe9nYbMCRNAhU3eyKR8R12734FUBX",
  "key21": "3fYnXo2vpF71R22n7rNwQM2TPPNXgpMA2gbBVwV1ABnx6EipYL4weKDVCYDym3hj9MXspgpGV9abZi5r5Kqr6bxW",
  "key22": "5RhzaJEKgZ2zpj46Vsf12hj8qSvaGZAbZ5esKkmMvyRoFTTPKZhiVskFcHF6fzw4yxM7HLyQN98v6W9fnidZuLJZ",
  "key23": "43itjZqw2qe3mVXccWiZyVfJik7Pi4iBSuu8YTsXzrMPUB2s9jxt2uVHwxA2C2HpJFhtimGzumGc2RexSmMJpXi2",
  "key24": "21q3zbb59ganpCe5NZTWF6xudhWwjHY4jbRAvvic5fbdeXjnSYJ6pUGcBPc8HyuEfhwK7Y2Nr1mGNoP8mLcpFZwV",
  "key25": "4KqZQGLns6tygSQyd4TJJmw9eabo9uf168nJNwqVFS423x4qEZVcWw4QbkNfzt3XdMqHR28XStquErvMJ6WsM53",
  "key26": "52a7zmVhmEiwycriEgiGJbrjSXEqyvjefNqSpAU4fEL4UHeKb7gbzziQiqAB7kxHCu5tWtHczg3hWDLhBZj6F4Xt",
  "key27": "2w18ueBuVUhgVdfh5xWV1bUd6yjMhkfoLPAF2TG8ex1XkViFjJ8fk7MS9RhMP7KsiXYnsV9iNt3EiQ2yzFHYaybK",
  "key28": "2yHFauKuK5REcdteoWGMjya4DG2FJhRxLdTdAMc9B8hhzw8XWzGDoiNoqMpUZNbrFxQVe4LET6WJMw677Xt8zkgD",
  "key29": "5QC3zuT1awkAeXohtCMPwbbww4ddDk8VEtMeuDUngzrJZ7CkERJe4myEynB9uk6uMza59nGD1EXytkwusirrTXXm",
  "key30": "5qZ76T75zQcbPBCLXTcc3rEkyniocRwXYp16kdbkWNBno88WPr6QokHsSpBQzEswZKtnKRGU9rWczJowPLXL38TJ",
  "key31": "2BSM5Hu12wS2YhWVjaRnJzUwnbSscuMt2tGCiDLJjxS3GF2xEWHAR9ttnfrb4VBZWbMTuK3dbtVm62H4deNx1JFu",
  "key32": "2p11MhYf71qK4jRf3J5FgykSQ1vtzAbZa77UgAWiag2sb6ryCN1NH1uqJm5tmqkmeZ3DyPSkK7r1vvf1h2ZrcMuP",
  "key33": "2TMjyBgqG8XJA9aSzwrYik2n9NGWRT9T3zhwPb47PsVUP2ZqYtzEfF4FULuRb9boZHvMmcUoTaMWsGGHWC4vsM2z",
  "key34": "3SE5VRuzoHRfUqZEgcH8nbCX9upktJsL58tuASdBUbuifAb9E17Xg3o6DgXHQ6vpZrq7gnBxVq5pCFWkqp3Dfoc9",
  "key35": "DGXL9zKmfMAxmpT1UBJmUxNWvNbae5YgSuiVm4nVtN5EJvagehX4sy8uQiTyeLZJfGoPSEXaP83dU5WJYybzJf8",
  "key36": "2Q9CCHi8pQwQvQ9UoUEnVxTdwZTrb2jnRV9mLj4WRsdi9DweZ51GcJyNXeveHEHpRud3uAnMUEUF7CRV4o3v5YEh",
  "key37": "5pxzwp9SR7hDzFUi9Q5oF71xreK12kw4HzGoY3gUrxSrNcEG6wf8nYiRtyhzLGisuzsRe7MdB42CeW13N14Xp2v1",
  "key38": "MBaQntsXpsuENEKk8i4vEoy6xmmPmAJfv2dEFbncL6YmkisFRSQMYyz5ajiM8xkanTsuiTswCWzQn2zcXcqM4Hz",
  "key39": "2voUaQSA3qvBukwbHGvsv9Gpf7p8hpaMTjq2i88RoFAAYSFv6PfAcM2n7fmFRDK2YQapcznDPsUkTSXUHpGp2Ak",
  "key40": "3pNb3U728NFBi5YhfeLJfJoaK2aiwhGaVXqmCNQgfVKVnc7Dg1AwB4hGi22aasoNZEwvVnwTa5qq43mfEgUmzBhw",
  "key41": "4EjU9gdo1YikmaPqbPM3N41sKTZPASAj6NMNpBku4ZKwLvuxFyav9zRVXttyYQNoNHFP4yfntVyc5oTszCLbAX9L",
  "key42": "5PdXEpFqz2P91mHadF4izBGnaKkU4XXP8dfkvAr5kSuztTy5wd7f2DSPYkk1S5zMRy5VF38BSKYzxbWCpKyMDJF8",
  "key43": "2vp9aSku1dFy4rr4FwRcEaCokHm58h2dsBxEqZrtwyWWSyMJ5zE8HQP83MNby3vjhYmMhBYosrvxdQhcByKcNfZz",
  "key44": "3htJ4bJUdjezJaP5grkfppzk6k6pASFepboKnxQ9n4wEdeX3Rj3LAvd16Me3UrKXCTzEyjS5LVnMYcRTukeVAuZY",
  "key45": "3a2Fhkqc7hkPgkgV2cRpfTbmpBwc1tUEdcPy6P1Z45eiJKPo2niuQdhmY23puwRRkV6VW6aGN55csiRXQ3145BQo",
  "key46": "3r2pPfRnuyrEniTJeqRoBdZxbRrbVHYykj5c7TWCdomjfEQQ9KGAvNZvPC3Mu2RVT1me9ruVx7M5sX13AQr6jSPQ"
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
