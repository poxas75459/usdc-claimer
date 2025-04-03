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
    "MwZJK8F8XMMFDH9n5Kk28yCCmSR58ofNcH838XWz3zSeHG4FxGiZAi8JGduXjgfQ7oEPm2kYJHjE93xAfC3WtKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28BDcxYpDWHrZkvj4N72UmKCb1mT6UzzeorDTojqMwQBtepnYrq5BMGELi9QR23mLC8dEf2kwnVT2HPA8me6BRqU",
  "key1": "52SRMStzhb7pPC3aVWBiUE9wkf8WcBuWDvLeCZh4YzbAC49h4r8D3A7yhXeqTcvrTdVHSYGiNHdCMjMJgrmLiBf4",
  "key2": "jXkLBRTd7EEQKWV7xGQom8SxxT3EgzL7QBBiUSr2EX4P3sgWacfQvEUcVTC4LevmPwgms52V65r4qyGiz6cB6U7",
  "key3": "2xcchBh5ckJxRAcPdF9z9UjoSeZEo1uKW5KAtgEWjSiCJaaNSj7bByuH2EpbBj1fQbmYBDT4FXFCSQ3HStssiUhA",
  "key4": "4vWrEYg9qvNKxpJdTY1VUSBu15y1F6rmQbmpANwAqXiJwLpzEyAY7rKWTLkyRN6xicNGozep7pbbMTBadpNzfkfN",
  "key5": "4LtBqafAN5wBJZBWV91zRipwyck1UTMEmLXmH77GM9Qt6gBLK69UR6XPSustpPyBUR5SjkQa9rjdwd2eYN9JRDD1",
  "key6": "5nnVebsBWY7NgTwC8kbFEfdQ78xraC2PEg3HxKyjpdksBwyJndrcvuna7JKPNVaUDgucvu4T8ZrKiguR6so9SYhc",
  "key7": "4QtmXfmALpTf5ja86sNpeLJUWDzsjQ8euNT8pgvTHnjgoDYyyhw1oiVJFV3R4xH5bpVUNbopxpwSHnZniwqnnQTg",
  "key8": "52KTP7wqbzMDyxc5ucg4PKZTitMgBDM7bEXvf245s9e2oQxEtoZsCk2WmH6c7gJmXcAfqUvYEWXvTEHKRh4GWnka",
  "key9": "m8t3WP52nVsYQ43QNit7t1FGTTUzCuzM9tmkp3ytgZxmowyYmZTP8S371zKQnDkAr5EPRNPf2DfGe3C1jFuT7aJ",
  "key10": "3gRz4Bbop7Bi1hcuigUcNUG15wXdTMhYSHsJNF1McgWsXcq6sPx11A4VaQ8fUwfk88XKBeKSQk3kpGoSipNiDTmq",
  "key11": "2hWhYk3rwYqLKPpW7fNpQoVq31ZW8FS5WAGTcFQd5e9bTTdP8CiQgv5xuT3oKGgL8p6uttU4VGdDLVyyKVENzgxB",
  "key12": "3ozvoGPjCUpEPoGoCbZcS46xPUXK6joqeqgp8njYQ7ZyfaddHAKU1NaCz5ku2JwLViJBNXUDUSuSgPQchs6aMaWD",
  "key13": "2wmkGsVRHb63qotf7qxFymVFHp6oYGES23N286LAvRdm3KVX81USrWhybjjrekTkdAHbgwmj8XkjSNcapcYtibSB",
  "key14": "3vjL7MejnEDwX71t4Nq1wCjNBvzn7u6F8TgbL1Z2VxeDfvS4jCnCdrL4UMHWMtJBq3sSJJdU4ithvvs6KFffoAKD",
  "key15": "57D2R7ZmUxuv1kjchtetys4Q936e1s8wwW8tLegFpb9VphqanTWD5mCWXDgu1ejc7iFobyp9Dqim5uDixJFBaZJm",
  "key16": "WMRWUHzr1RB5xK1C4RqXu5HGH914zmnTmFhLe2Ahg4dVE3LJB5PfR58FNnza5sFcKE18HgEs98kETKZbvxyzCFb",
  "key17": "4FsSQuPgcKN8agCpGEpxzpcYdzfvU4Y1hLtMAKwaUvdaixnyHkFUziTg1jiGUaoa3m675bZ5M1wVPdWDau4kVgRY",
  "key18": "29RUoLcqnPXwnW28EnAL33owCYQxfn6qmC4vsP3UmpKeEAvWFZ3fPGRF1cV1jnk4QAbebtVCdKu1ZtKKxe7if9hz",
  "key19": "4Wx5uUu3tS1Hyoktb6GAxqivoq4uu2zsGVedgccSJWPvD58rYMmBSZiDNi7U6JpYDaxkdVhV4AdKTeDizUd3xutY",
  "key20": "4NuWKcniHWQENRLFgBg99MiTLoVsbbPjVpEHLPGrqbqNLF5zm2neEsN3GHxFdZ7jRt6F8vX1Gpr452LECsa1WtvD",
  "key21": "bKbwKF7cPmkriPHamNqPPv6xgRonBHrAVPfT66Uce2WN7ztYz4KPor9NfwV1fLyVf8F2HLvMtNXJLS718NfthBn",
  "key22": "5GBSHp5xpnRCByfauAUKrUWfVcJeTZEcy7QgAji4XnwE9hdXpp6GXDtLA31LcLCuzzaN4bGTcVYE79gLHBPFSyDQ",
  "key23": "5dAQRDeVsTzDXeBS4qroicPRQMXzuq1DfFnTSZjMv3UCkErkHHq1133mqgwg11WABvZDcbk6RfhZti5iaQ43XSEc",
  "key24": "35pL1XM4diqSdjoL4Pcj8cTpqLEQBqQJESar8MJ6szTn5G4t1Bztd6vzJMZ35B1rihoLqo5rxyx3F5SgmXVeeB51",
  "key25": "2UHdFopwU5mASusy3ZPYRgNhiTpdfVsJfpcQttdSoz6PMp6LCBMfqSjSyBYHc9C2acqNrHE5GxP1u4RKuBc1uDw",
  "key26": "5GtyA1JgqmX4sH8pkrYM2Q8umQ6QZPwx967SFMNkDADraPVkT2bm2ATAdDn3huMVa9BDCRqjHwcJZy5WdAxWvSg",
  "key27": "rv5whehDuA82LGuRUSkAgH6s13D7uJhm285jywfpGtoC9QBag4955X9UzZhUJT3kVV9hKLzMvu9b2Hz935sshnc",
  "key28": "56hV9qKbSp3h2B6c2tLLrLZDfXADTGH4xFDttDnvNWpvyiz9ATjJtxxCgbSK9oW7SdjEbGMcRE6K3ibasjhRx1NR",
  "key29": "4hTCEGqJor3dMDntRgfBYehsctm2zYbnHJc6Ln99cUaNcPr9KZyzTyEoh3YgxWm4oJQMfask1APgyMwWirWdgYfa",
  "key30": "3b1yBP9t4C1Nr8d4W4LReSiZVxALR7AhpGxPLUmz51PF6zaakkx42CGQZ2zy9jENa42bAgWMzeUJPVaqhRyhyyZ5",
  "key31": "M6C6eDAZE6k6hi74D6YQrnthyvFf6NftACTKY8sm3cuZskAR6kJirEJkURRD7Go4DztrByeE3Zn8fwbnbAiFwmF",
  "key32": "4G4wiNvLW2TSzEZd9gLYpN7jN1JUZ48aq7W9aZnydxxUeaCg72pAdBDjUP4QpAijoRTC7rWpUXApH3gciWg8hQUK",
  "key33": "3KdRDr7kuhpJMCJnSJP2dpQkd7D3Nf2FB87JQhCZ5XRJCLutvQ7Xkxx1SAzv3zTA19rtvLCz6XcRpcHJ5oJbisig",
  "key34": "3dusyQ9i4KYHxynjW5bEqqS93WFoQtNQj1fLV6Bdj2vZyVn32K1QUByLEcVtem7HQDpFPTTsSWx7w4mwSnWwjPQR",
  "key35": "5UA3n1FGSJMkhDzvGPvTQ11GdSfGbhBdYwq8WJYaVniimyRmtTeNcxttVwgJEMjbUUTuDq9woRxTtRb9p6hqc3TU",
  "key36": "2URgG13RwvjrAxwVSNFhoRJuhz5GkinYedQmBQv6WrfAJmtjHfKkjZJTXmLWy6jknxtMXXJiwoxEHJWFUj46uaDL",
  "key37": "5VJ3XpQwt3RDrUEkvmPVTYVQyawnXkhjAft7QDndUvavPapN2YN8mR1yPNSTt9MqBwYDANEjpaxdsWHRsDvbhQcf",
  "key38": "56m2Yrmu74Cv5b1X9T7EvHSh5pN4HMHMpLQDvqRjEGbpxKhNc55TGr4MK4oJwJdG8CYuDwuzoNbD4H6jVkZ9foLJ",
  "key39": "5VEVCCYwo7Z99dp4RZhctKYKxnQXPd68LaBo6q4kg55rTFhCfi9H1uQNq2JhgLuBNnFmpPCFryvp9LsQUrx6TXCY",
  "key40": "4mFpPPe4x5fUQBsdEJPBUbuYJ3vKyV88E7ojBPeW4nhyFCFqAUt2RATthskD6VkvV1wpmWFqkuHkthEy4F1KxREE",
  "key41": "2k1SjkKtFduVm4QdziHXgg7SqddPwhV6aRUiL99vDuJrwd4XgrwSXemAc1GPQMD4xp7NTqamLW7qWDcYM4mw2o3f"
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
