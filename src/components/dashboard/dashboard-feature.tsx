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
    "wmRhgaYt47Y6W39KjzSWfv488G98ioUsd3epiHMvaohgqcYcTnVvgfQo5YGqdDhfgfGRpGJLPi8TzCtm76iRUVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WfHxzxzWox5ebmiLvkfRtpQTR2Hi9hJPcRe1eyWqMAHffqXSH4iXN6JEMY34AqZ3BxHZjiRfjXfL6Tre43gNnWf",
  "key1": "hJu81nvvfivTKNxbLnFPVty9Sh9CpRDTtoozZJdQLrXmJYvKeDJ5TDCVV5H9SBMzjJMCwpedPQqZnKCUKhotUfu",
  "key2": "4s7pbNW2pXWmyBaNQ5bBQoPuinUDWFtGUqnos6CS6sR3jVG95SYXeT9ys9NxLB19THPYqpgAemY2sSQwLwCvoCKJ",
  "key3": "2kyF8yiyDsKxBER17NVZQJYfcNKTmAuqbBGutnZFJZWtzqPboVauRf9HRFUYUK1gsJzsMxokSkkPaF5JXbsz59rg",
  "key4": "2CBHCkP3EhUwPY8ZE8DH6MmPwCmQZA349kZRSH1MZhdNcS76ngjSH8ZqcWJ3XVeQCTCXWjJbc5ieFAJNhvsQESbe",
  "key5": "3bqvLJ5BBAvVYQLaS3xnnUhggWuW22CcwwExZpZ6qvUTYoQUadWFrzU7RBMUkH2T2GXRM7CKr22AQMjb5xmqmND5",
  "key6": "3pYZtjyGnbo6X3TCj8EDwHMXjzDVcr5fZFRLX23VFyxmcdbpY5Gh7jRosza5eQxSGizoyovArjaaXj5G2GoqGEYn",
  "key7": "2ahWQAeGZYKVYj2dMeaA9cHxkQSy5afrDReQRY4id56Ke8tPv3ovrTDzXC5x7UsbEfeAYGJinKoPVMQPCz1ZNVET",
  "key8": "2YdbFkYxjeh9aMPguo5K49hXUXNYXWV2aWyCErTfJRXsjzoesb4TVttiMefSYqPfaoyptDFJrq5tJUeRBSNrzRqB",
  "key9": "vZdnttKndGmuxAHT7H9dPB6obbVNKkvLorAQjDGaW4LemLTFDLEKwaV6CDEryTURkXhmVrDsZtiJejf2u4MqQdH",
  "key10": "5doh7GyrBde5NKyBKFFsujniBZE7DqcxWFj9KXHmwP3vkbzrkcKyiHp4rkSachFfbhMtgx65gRHRv74M9K2hVeuz",
  "key11": "2cZmhdksuXcbVxircVjkL2BNqPQ3TyTDZf8RMjbWs4jiK4UjrbQjucWXh21kfRo6g6mWZb7ELvPoqXuBRMvS82Vx",
  "key12": "3U3gDSSnGX45ZA2PUaML7tbch3oT9ydHekhUzTwiTwmAJLpEo65v89NHzg67GyKAHDqUwu7aLEMKrN1UX2bT2cx9",
  "key13": "3S5nEb6MApboCQpA4wSUZSVC5dhq3SrqNqMB3wzgqR1XXGt23r4QnU9x5u1NeCGuihUCu39aknb14AV4kafTSx6H",
  "key14": "3hayjTJP9vh6ep3sVptFKV1H9mvEoNMwAd9jjxpJfdqV2aGtgygpeLQfYxt8bchfKmoGMdAv7fMbJRRnLFueC48u",
  "key15": "eyoj2Z9mxYSjTozj9GPeLsMUkVp9EQNg6eZwEDHypyic6JyS6knDxUKQBffBpLcUDg21AJutMZgNFLFKWSchvBE",
  "key16": "3BEPi5fQVKhdf7cdxib7FHps8BWYz5CVbyPpZzWMg3ukmQ3ga2LDhcnXexR7cHfhva8kdLgfrqiF8dwRhywv8L7M",
  "key17": "2x2LQQGp7e1W7Xb4Asq9iY1QbDcV3NmRRY3mvaVjMUpnBF4DWN8E4iWEK5GrHJJT9MeP2mZxDzjpi7FQdwhdSSfS",
  "key18": "3kkEHfVq3H93mrMKBfoEx3XZeHmAoPppLva4W5rWfoBnC3hX8q3QGgsBXTmX6vP4Ao4u3U5XukoP6eACYXqqBtaF",
  "key19": "3kxbyz7WS1XBei1jm8wPeMrTWHGuvenf67AWEkd2kBXnCpxV7gtBuZ9hQfmSQyzXQ1qJvHvK52YfwDXvq5ogtGbE",
  "key20": "3maRQL7ZjZ9N5oxVU8f3iJ4y8Z7sVBy6zWjFHdrExYcAVVvjMTYe4pQ2EEFD2V5UcsjjuppkARNHMEQLUptMJick",
  "key21": "5h4xMXCGNphyB3oG7DggH8ncetRLbCXYPN9zBAKMsR8C6MJKs9PYCD1ANhQypXNBZKHztGA9Yutkq2uBEq6YsJm3",
  "key22": "2Ge5ZP4jE3NWaAjfCpkE9cT9ZrEr3dGUVoj31RGzwjo4mLA3JhXbyFLSYQXMPMnWy3dbjaRVoRv4U3KmSP5rMPQi",
  "key23": "4R86CFYt2fwh1HUywTxNoxD6jn9cHLM7Kgmi6U7hVg1H5Z51xQLLFUE3p6LCNHT25Xjg5tbGC3wsTca9tqBXesL8",
  "key24": "kEqbapHKDxmVF6p9x5CBZ6dZ7X2Y5Q9CGJWovebfV31XxDgimT9Xuzm1XfwUWCwxGiWvmP3wb6xpQ1qWsVyEJMB",
  "key25": "JxZeDU3c7QZVbpJHXTb5SE74wgWjdSk9cCJvHVu7PLGdnZuXBZfxnHKBs95JmWj9JJUaLRtgE2sU9vxszwdEFnJ",
  "key26": "65KK8o7FmJPuqneskvVotshuGhGfxmZJ7LBWAcpoj8T5vkTYnudtycf15yR5uiaJGQU1dz72N8dWosYMu9QjQdNc",
  "key27": "28KPv7iBPLMDhjrFpizzUjPREasbzfMVwsUM3Nu2sM5jrMDNQpHzeGUxMS1WR6JG2c4NLScTsR4PAvr9w3vnzSe5",
  "key28": "4n62qVaykV5Ymkkp8myEzGuLgyh5G1sCQXGYCRshKFPLF1RraFtwJvUGibzJ5eeyCgWGK1Eb3QfnfxyKw6EMPQct",
  "key29": "3Ma77uQo4FJb3BJYmXkN3VGi3VsFX54FFY2JQND61GswrbhfzVU5ATChJ4xtU2jc3rf8wHAct13vzht2XxcF64dE",
  "key30": "2mckJAeLNKxsR2Vp7f6ur5BWLULdeYismn4UsCoL61yHXZYX5azWJRWjz4cNbbHxVRDwTnhamk1t5QzQ7naWUbJE",
  "key31": "3UGTG3CN2NbHENT4Y69ptKFPFbxRBR9pshFrfh9FrfUruLHmsaxYtyVvMHUUh4mp38tJWhAMn46FWdonX2eTsugf",
  "key32": "ghx2A2BAy6cm7HkqRnfgNYqNdF9htFDfDsyE472FYMbz9Xue2zbiq5szL5HQhHPgaf45Bd1HXYTmjmiXbCVwpuj",
  "key33": "bq72puMjaZ1D9h8pVpK3FRdYdpZhf3U7AC7UwonLhq4LgasfVGgbCCND8igSYgm1SNrEseZGeL6gQKSNHvgUNyQ",
  "key34": "4XiQLdm7mqvAzx5JDAawmiRncMPGuw7o5Nj79yWKvFZCyxNQunHdJTqe8Masvge323FVmW15WfgWGiJR6XPjrjdf",
  "key35": "4pY4DJvdgLGXp8N7LmEMiLxXsf5WWo1gnYMNYHwQaH13jsP6FoF3ncrnW9FKdJUSsqt3z4qv3hbT4F15hrzrSikN",
  "key36": "25Y3N9nTTBg73XEPU69rcC5CgvNxCQYX3axh1W3DhWXGEDD16tjshCpdhy7YCKwhaDpfSFsJFDrKVxjZK4cxA4cm",
  "key37": "4UUK22Gtu2PYbM86LbyDd9kdis3fq8hwg7guvRP4B8ZYGT4vnpGP9M9ghmVJSMzmWXSTmwaGV9RGiCYC6ZJJ2U4R",
  "key38": "2mLvnsTcJP5QFfzNuGkqMuvxjyR7UpbVsofLc7mQRR5EkBR5Q7baDMunVwPfXZDUEQXNmL9gqc9LD7sPtKooKphE",
  "key39": "2FXrcPnpKvf8mz6WJxqeJmkU5GMNTF6ytVmgQvG5dQKdmuPfhF9VW5WN3VhpnqxHpBVFKp69LG6t3BcTokE2MTHz",
  "key40": "xuybygFZeME3sSNju3v9n2BCAq9roxP4UWHwXVaUDG2ysZAtbpKgH6QF3MxuqeyK8f4T3T7mjEnzxUzRbWdVaUm"
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
