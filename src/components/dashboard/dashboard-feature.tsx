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
    "2Vnj5kZZky98GZxeccDH98r41dqfy4k4tzLD5GGWow68gQMNtr463a8X6ELfT7C9XnU1CfMDitrWT9Y7K9Lh3Ypi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3niztz8s3emESWwhMCoVLNR5QVJwBgp6i8Ns3XQKo2F2oLMhETezw2KFtuzb1P4y6iAsEYh1Hzx922nPKQ53J2RK",
  "key1": "4XPdTv1mDeXETfyPyUva7tXP1LEY4iBgnaAj23vAXnUNoHAtDKe7YWLRBzacHRqzYTxqn5MTE5PLtRYQdWa1RciL",
  "key2": "2BrsrWDpX8avsyJZPRWrZFqHLGgUHppPSGxvFX3DQWd3MdjrkuTL4BLPuqYSAtWqJ7p7GeuuGWfaK9DkpRy1rous",
  "key3": "4joEpnzD5J6P8nLGYeQHDk6351FNxB93Rg73CgU3TKyN2k1QMzSkFtejWSXqf6YyaysQZJT4jropFSEQF9f971iJ",
  "key4": "4VHbqxpyqcFbLrQTDrqcSin5kC4TJMbM1ws6noWJTdL5hRZMv2b93q45Ny3tqkCycn8urDq3sa1bTEghH6A7XZ8J",
  "key5": "3ZFnhypjW2z7dociFUuY2EBhQ2vAwz8SFY6f8bHoTBGWhiq6az23MNqu6XzMqWNWJDKcDj4ct8184hwSUg7RrxiG",
  "key6": "bjLdsC4r8dWmTS3UXp1B2n51MWmJVKgxX4c3LK6R88gwVArejJKZVREGDuqVgZMtnu1Ddtbs1KGAe6YodNzifrD",
  "key7": "3F54eTbzVxL5KdiiMYhoox1gquotJN9tuDb1Dt5fbT7ie9cXxnSDjoAWRqYHTjGELYiJizHZwAR7MzF74tNKBCfW",
  "key8": "3cLxuPtLSVma991MiHvgQYA3DnPoDef5aFkoQGPhxDoPzP5aUQefUDeHuHPtXsgDmpVs1Mv4ne5cZ213Fe35EL9f",
  "key9": "2s8dscePRdABByEkEuEC1PgvTGCVmGARKQqdsATFsLSnsmGtT286iiDjptjdQwTeXRCegjup8MAqmcjCC85GCNXc",
  "key10": "4saDDeBFmVYNcMBzh3f3ioc7uNUvyXWzfiZWtmhtD66w3Kj2BZVZirc6oyECZucP2bSRL4D3WfNU3qEN4uRsbPEd",
  "key11": "RitTdKDdS9Had6jPcbVRgTU5riWGCa5HubKRbuzHdY3uNgNDJcoNSKXaZj1VSfaCvLgwaSNQPtDNWsKtxrsAXUv",
  "key12": "58qBxtnm6HvJjr7XshxZSxYcJU58tU7bLiMYybbdAyBeecAxozADkgySrs7QQQQ9rCbKeaa5AxTXBfd4zFzdZFCe",
  "key13": "43HbmbM3e9bk8bURsXppCfqTA2Xiue8xgecHrzJQYSs8Sn2FQ2J9NfyrQxs1ELsxF5bRCzgZLP632DarkYDQohG3",
  "key14": "5Kx4ERvPLar8y1RABn5D9o9fiBZWtHyy2beMLNJJmUcxxyMJUczs6t5KmT6axumtRJBS7E5F6jBMK8pAE5UBzpi1",
  "key15": "2bJkxJesxjUnGxPgG9mW1kLjTfkLXtF1uMsPV3hoXmDW4a31CTJh7DcDFQyQb8AaZRJdv9GJecmYFP9MMSgso6zX",
  "key16": "618m4PGZo4yuB748J4uShDmD3UYN6aMhRgP5BG2ygjkqBehft3AWhx8BMSqPU9nxcfz6SggJhFCiZ49ZdCkeiQ89",
  "key17": "3qhAYTaNb4S6itEeZSLmD8AJu9UGpynpWwKCSqED16N6DsxA3mCzD27vWT8uY2gRCmFxWrPEDtNU5TdDhyVbshgr",
  "key18": "3pcvk2MfXBeXqGdjuzKb7sLSu3bshHD12ZXTii11XUouqVd95mySgTb9TfnGiraZhMhuxvXiYPMhKmDtJDD77BBo",
  "key19": "3t1pAr2EM9pkEBNDoqV97bn4YQCg9BW5pjaGB3BcKkhctvhFqCNsEqpnd5y7rrZQgDCo4V14MU8vfaLAvASWtzPM",
  "key20": "2JRifriu3dmwuVTBfJ8uCfQ3MwfCscfsgwKGDKHRr7pA7X6pqx8eKEhN91CP7m6G3vp2W1SQ1RJhTYtEG7QpXyAJ",
  "key21": "4MHj86o5yZ1tF3SkYJaEqGs4dtcQmcxADXJ66A31SwkNcKsw3DtWZJ4eLGisArznys5c6KAkHHmajZ4ryWjo8zPz",
  "key22": "49h7ghCp9z1e8gXF8nwvffz841mvyQs1akZseypLXFhHSA8UgjaGbMaicj89zMcKQDs7LYbHnYmPpFr5szdZDZHB",
  "key23": "mdvoFVubd8fQLE2dtEHU5nbaCoM5sibyHgdF1wZC9hoYLHngn7bxXgqY6vkbgM9p4iAwVT4w9w6BiJ8oGCMUWsE",
  "key24": "2V8mS6gGbwnxb6kc3UEt4fzkyApAy5B8KvjousYEbMApgd2UswvvMXTqg9v6Mnp3jaGCMmBTe4YErPLt8yMYgrjE",
  "key25": "4GcU4u3KuNoJ8ie4vEuRQGTG1WWWfPauDBMuhtqA32HgDcdy4a72WDWypVN4enAb6APVCUzbReEVXoNPjJEa5NPn",
  "key26": "597mCRd5WbRHpiCZMwnqEp2uLW2n5zxm7AfRRRTprA53d8JuhN4g73cXTQwhGLVUzfYyDPbLXSKgmYjj62JmGGvh",
  "key27": "pxZQtGbnJWqQCBgGmyHvco3tV86RXDnG5HgXUtWkjMMPi3VGKkqnVhc5WkcMxwdPxqjpRKVc5GcNrwYK76532YH",
  "key28": "42xNhYnREQ1uQXTKpEdeosbPVA6gfkUcA1Fy5xa1Xs1ytaC5tyepjy5zmBU3VVoPNsDSJyZeL9K8wrNwxX5a8LnJ",
  "key29": "5yL5FHiZx7ESRtqoAuD81cyFpLH4syBfE2pSF7vqSYdZh3TCZcqsjc6wyUd19LRTRzYADTNfda2XnGAeeaRi1WL2",
  "key30": "3MrrkagmgychxFnb85u52puwh1mBeHL92wda5ym9xvdc8be2LNNkNaphdXTghW4wmy8NroZktQfdfjMkRN1kr9LL",
  "key31": "4vPLfEczxUYco5GpbADiv5dnK1BGPDEpCcJv1MHwACqhRjAm9r3gczLzYRfo47eXg5NunPpcYkkCMfdC68PjaDrX",
  "key32": "3FvwSSW6CzuLHCZBxkFn9tdzdUWJR9FWRfSrjLV84H8FSJGFyfBWyJx6WZ1cEn7QzE5CWz27h43yzabaHtGwYBiX",
  "key33": "3bqvRHLxXua5bH5n4zKYP5qCQ4VQLCeCfKufsbk3DDLKFJmBXDQbyD7sRcpHRz5cBV444MjJ7Cobe43qRkFytxj2",
  "key34": "2zaSc1mEjQZF1VnrnzoojT41tMYxrJ6v7VT39VLxKXd6DQdgEtJ4Jc2qKcKFPKpkPE3aBDCbFV9j4kZoaJR9KZEV",
  "key35": "3TqHwG8gcLApZXmPfVcPMGS6L8f9wmosPXJ9fdpQJNV2prkcbPg6L2kfGyVPpDrYnV8wbvKRuRNUJPkbeX1oKRbV",
  "key36": "4TBWxWvfmwWaPZpLMoaPF8pvjarHuxWzoeE8NMYKv3XbXUvoaPvQamG3BaA6g3F8x74xamoCnBHakJjQGoZxwNsT",
  "key37": "2KZyPaotuaJA41fGKnGn14pWTmGdwgrmQuG5ePfdxe4mWxUMNKavogvu1xhZHvnVDQrD7oZT3jHMdN3vy19RxenA",
  "key38": "3fpn2T36e18Vu942Gzq2Xx4DRZaeSPciWKUUi3sZMFtFgVuBuuqXM6Dvs9q5xvBGHqL9eNFWJMxCuukzRtR7EYQi",
  "key39": "2W6SumWRnSysFSWwsx9ERgoVZuWipxDPhdNAgyx5Sg5zTPd2eqD1vp8pT7H5Rv9Bte8bPLRpQZaD4T8sFKVcpJKQ",
  "key40": "5xGHz3avqqAp3XHbiEWs4pWvw3SuaEoDBaES2224EzSrjRw3LY3JpqK3eKQ9tqScdR6CNcRFwNGxXNYoWgzc8gwp",
  "key41": "CxeMefqB7U53hA8PEdAmAqCjHfC51TSGrFMW3PxwxZmY1FVCPFCShZHgJU2uARiwXnW4uYbh7YLcn9dqfqXSoMC",
  "key42": "KrmaU6avo9hhR6z9KYSrN8HRCP865CwD7GvUXWoBy1vJkqh7EsmW61VS65kikKjiHURwm9BArJuFUNQUff5MWBu",
  "key43": "2neVhEw7q5SpcRCBSkbpsQAHQV37VWuAc8YBbunzH4QCc8TrzkgPJmkkeWPgYfutGammZVKd4gSVvYascRdQDsLf",
  "key44": "65fjVMoYes2v44AkouGWJ6Ub2k5QR9Af3YMms12LCCH8CWueZFvNVJsLwasFcTxAMPJpQapzeCXjA9QPvTb3RGV5",
  "key45": "3ShhMVDKcZfdqruuyJxs2tBeoJnwD6ivrGpyHQb525YprHeLZ7fFdkhDeRHEHPqxFDtwyVb4cpuBd3Db7KMzqe3G"
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
