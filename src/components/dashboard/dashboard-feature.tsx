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
    "2iuiaaBkAvaM6QBR7b55hz6pFpBw3dzwve5qxsA2VCyGxBqi9Ucxbx4cxuP8z5WHnHUcMaENtdB6WSjcr2Zsrto4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C9BphEgK42nUT1L1d7NJpRB1tEPWCcngUjk4sxnaSuqqknGkXCksBkiqPgEBFWjce94FFi8SZmw1Rn3B42y28Pc",
  "key1": "iUsFwfGhe27sPS59S5b8SxxSSR7EcuEDhvVXVxZfi5qhwAUrxt8bSvqYds2fg2iQWgEDL2JLpXSkAFG1ecX1Aum",
  "key2": "3QKhGdPTTXJ8ZEoQQs3Pmf4iFA2MAfuheNo69S1d7rAwij8DuvwfZ28fdrDhFo7EGJLXYNAHDvdfQrU9FBXAvwgJ",
  "key3": "3MxnEvcb8qUnT5VV8mG2eXuZtACnjHXmCZ3CNdSMKyexVStrEWxyLF2gvTFvtD5cCyv6oZRyz6jwp2YdccgnRTFC",
  "key4": "5ZSgidt7AbhVxytjFN3XCsQvLmvvc1BbY9NYZP673GcEszT78wogsN3LpHaQ116R5gyepjvjSn1PW6eNzrGmHaRL",
  "key5": "5Xq2WC7cxsqgpVykfJK4BZvPCe53bzxSeqK23kLAf4jGP9YYXsojrGAWvBhwfT1Ujkc4peefv7Nb1JYyUQHJZVGq",
  "key6": "4NcDMrVRns8apc4SvrruJo74X1nmaTJg6eRcfCrPATEB44zQaGZCyCmUQ5Xk4smYDng1m8mENYKcZktGpxtofPTT",
  "key7": "3eDs5mqj9U8bQ29GTxiu9uS8wZk5frhmfUmFfj1oAeoSJeouhP5QP6486ya2qxgdv7TKMP8bW6uk6f3kSJwjafuf",
  "key8": "nSFbFNPVFqbHtqq6qkXjEe4ynUyrTEg7eRCpeQGqubYZxUT4qkDuu9BZ4hSQAsXePc86ht8xeFyXEHZFdoBva2A",
  "key9": "4TBsxHSjuw2qeS2qtUN6SRfzVeKvp2HpxspsTWd6s22cnkcveLodcTRjNKiS5yJ3BA554Etk1SqDj1CHd5XmrAY2",
  "key10": "35t8j7xHQHwdzJT1NeTTEFPJ8JgB5HTh3hNSMm6EZJPSeZJXdB4C8s8xL5pg67cWbHNt8ByMmgyD5w2LcVxj7Uzw",
  "key11": "yTXcPUyVM5ruVjfswaLUbfbUmzv815tHSBaYqQEMeh3Jmv5DChoRWkTkyYbAJEpt6neV1PBf9BppaYVubVhdoE6",
  "key12": "3Q2AXEioH6aq9bMdRPpuEBNCQ9YniYKZ5332Pp7AUrurndFus5swLuMzXw1awx6ZtVkNq4jTxgnNs34BBUayB9d8",
  "key13": "4gVh6m9CTcEhwpEj8SEdemK49bVqhDUZZ9ZiAWGiTx46KSvuyeJ4PjKKhdzM8XhdvmbUjZ413bRyxNR5f52UYRZR",
  "key14": "5zVQ3HSrZUqQACYFn2Dr2WxwNKZuozVGPEqHYTSsfe98ghbRZRYgRHBBEatCYA2x27BGV9gaJyudWeTv3mQ2HRkq",
  "key15": "5r4Q6gckfwQybKR2m3WPcEy2XkKV9vHgcWVQx8c9FGVzHsUpzuCXufzo8oa1QLtyWz2N17MsfkjRonCMeLRq6TzC",
  "key16": "3n97mTt2X3NmECdH7wFQ5Sohzfpyfxjynszi6hty7WeZr8LPybbTVm6gQKGnLtHgbG9qtv1P3rsDmsczsxnp2prJ",
  "key17": "3Lj5vyzRThxgQKUx9WuLRg4g493GDsp2ymVuS7VoTREuKiFHg2woAZXPQzPLmxTZDYC32CcVkNgYtb5EHpLtzkdZ",
  "key18": "2w6jQeTThwBpDu9fytaorMQSLdp5XC91uQJLX3SHmc2GM4D6MyhPVhGMtFo2efUdnRpiagh6oUeeVKKWi9JCzFGk",
  "key19": "vLwLJBcj3KuHsRVZMPA8p2cHi4HS49ZR19ZCNyR6CSPaDvsuNxC8SsDUwwutD4gH3wpYC4isFdmGbASB84TYwWx",
  "key20": "WFtjwXmiqCcQJScJLSSyQaE6A8ftRaEeyDKw9CMRZD1BYaCMV1VszfZQAvgWQqHA79rQ7Azwh967n79XVetzsMQ",
  "key21": "4eLb4y7iWtqqEpB54WCYoqT4kFP9JhHdram6H1TKLbRyv8FKU4vcR484VqtyNJoFM5myJ5rXAvb8b5bpeEmq7Meg",
  "key22": "35wcHkDe9mBwFokFbn9F2tkoUKr2kZNrXGcZXL1nNb8QShGmCdeTATvgcULV1hr78aJevhNUVUsY6P53fo7SVRCa",
  "key23": "sskHepJaANVbQ9DAQnCKJHeozaxx8NX9TwPJfCgma7nEWXeqMAq4Nf4zXvEUAj9Dm17jCKgwRT7oxMM75aN7s92",
  "key24": "4PArhd2fMXDNKpozVNESPqHvZcuoC9KdN3wpXb47QKP2EkJoqvbfCsfaDchjL2WGazbSKL9Ky1CJdUE2ELVcYE9g",
  "key25": "3rrU1UL7ScTRBTBiboAfkuaXWgDoKkqgn2vEyR1avvxGGAkVSLWae6xLiNDH1YcUz6VLbEr1ARwgQfyfW1jmt1Mo",
  "key26": "2pDWLXHKTXCdeTGgh4PHgQDP9aNN28r5faTkHwW5MZHh8WXyxsi3mE3vd1wnQue2wkWSxNum6zmMVs5uERzLv9Uo",
  "key27": "3WuGndds2crrLyeRHH2N28xJReCKbcUuQ6Z61Pnsfp6e1F6xum3Q5U4piyNLh8Z5hpzRAs9JZPyttx6hzFNX99e3",
  "key28": "5g9wT8GNxU6j6TUbhSiFcSAQoRc5nmK59oudwphufRhiZqjqeTx2tNsNWwLuPgte1xjbZtnnL5TdPR6zcja7zXRD",
  "key29": "5YeVbJA2VDcoyZSnwyu411XQmf7MAQUGD2pnUmWeGWPLFyVSk8Fr5VicVcnXmi2doGo5ESLgW1Y3tQo1VMao6CxU",
  "key30": "3RmQA2QMidgf3RZdwMUaCtmgtkZSPkSpxwuyCYhXcYZpZcGwJthxXdhe8C3TDFzqQUUukZ3xbRBMQaQWEUAS919X",
  "key31": "3gEZN9wfkuuS6FAK69YXvrYEJb8sLBecbttMkBWMXdyj4jvJBwWcWf4s4fv6FaVp2dXZmZAReukqnGS6c2Y51JjL",
  "key32": "3QLAtwB3oVWFCvGGcbgpNr4Nd1L1ttH5opSRDnC25EMyU6HKMx4pi2RZoMChpbcLvTndy9rN2d6udsM4UQ8TZP1C",
  "key33": "5V5qLDkZfPPVbZo77AztLsMDfwotfSwkt76LHdeQbWWAU6MXyDeAVEQ3nt9A7fJe3Hc9MKDT4WLVPRjn7GnryKSo",
  "key34": "37WoidhT78mNcrbggJKdZ5TDQeDJvyRdGsRRzSPLQPMkg3By7SBVQY2VadYTNZUNopMFBswEntxCrTcw9s4J2USf",
  "key35": "32nbjpofarTik8YevY22qMjdJj3kkWJkn4N5vvjsbj83sGGnJT7L14LE9ca4xNBwEFy8H3US9Ly85own9bi7Lr2P",
  "key36": "4x6D6N5ScztZ5CMkAdDKHX84ANxFdZFdH98uMuYhs8jgN6jn9hpBPf4qNFQddn12TAFFqF7oxqCePZxvx9pMg3tQ",
  "key37": "4p3WMAtypVjVb8hUfHzdGiTn6Qu7f1yjhrQAbpTxZhjLJpytXJTX6VYEu987GVNPzDkabBT8TYzMd4ett5giBVEY",
  "key38": "4g2TUYNdjKgNHyruQpN86CXGrakftaXwPqGtZgH9yDqg45W9zcTk5LhSFxGPukmrz2vcjnnmTGwa7HEApWkCkyGD",
  "key39": "53yacAbAh7RWpCHs9sJt8aBCH38UPGXXoyhwZkXJxbkTJRLFSeu438UNv4jDErngTZAUdfJnbJ3NmpyTDxE5aoAH"
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
