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
    "5hqPu41ArtJwHZsEorjNWcJQuv7RMyQo9UBoN1WMBZNRsmwyvPbS4dCVnDG7NQNgocESunxV82RZ6Fz4fs474WAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27aXTaGB4UeuRKABSoUfB33gkaJiUtiXTEtZeYcEicsr8rkKGMh6SA2UhCHH8Tzj3MWg1ognGaeCWXquBCyw5Q9Q",
  "key1": "4p4MdSNXfwEcbCihoTnsP28pMkfuYjBKGeZzYyaqV3GUTXWSUjqLBgcH4XYNnbjurubQQMDtUVGiLaiRadkTXPGe",
  "key2": "2Qsp4grQfg7a4Le8ErFyba8emUDeBoDCQpRKou3g26bR44r1ZeyRKLuEhoDfeJbkr8La6KBiFkm9oeZ1JSLv2FyN",
  "key3": "65TiRWEcp329isJYEztYPCqmnBzkAs1pvy42jmEFMZxeKt7jytwMDgo1X5ovUgLfQxQrhJC7b5xBUfJ5RByrCBYr",
  "key4": "5yyJiGpACzCJtCwSBVa7mNAT5xXrM3Nzu1F8SyfJuy9G6k1NH4au5XbxznE59EbrSkjUtqEzH3zQjGxq2bfVtsse",
  "key5": "2h6gW1eQ7SDVkGyZpyPTf3rGFqhpLNeo7jpWEEQKus7vzgA2zETBhTnSMb7c8aMzup1rsCSMXvebfX25iqdd6AR4",
  "key6": "2LVi5WqKzLxyT14wtQFu3PRzq2d6J8XE4ZzzHgWPh6fUHA1SRND1ajAkPM8PRBPQ7oxfrJj3B3FBHxrKPdjHezNQ",
  "key7": "4qdXepA1uwAopgpW6tfvqVqpdRJbJmPzSS4Pukui177d7hc7iDqaeV7hKq3qaXmNo4HfWK8fyHHKTuz5rTzLU4uN",
  "key8": "QsrqA2hvFsEJWjmQ666ZkYiPJiAjX8qkaiBztcRY8X8CaBi5PpRnYG8iAciadSTJRipiDLKef6broFWCkxjm8qL",
  "key9": "4MB9oC8CowxQRASUMbj4L8BtCwGn4zqSKD9hFXRG1EyytQ1sPKDnKat7viDzLjfZwR7o6DPdjkatwyRQd7kST9ZM",
  "key10": "5yMQ26xDkA867ubRHJdvtrzRwj1DnVvfEMZZjDnyVYYi7f85F2W6wkJCBq861r1PuAYTsmVtoawpSmGJoXTrfUtb",
  "key11": "48X8wt2dNSPesyg6BbinLtgvV1BCJTNTAf9nmTsM6amLwY3rx77v4RpPc4sk2NhtRfArNWXDxH3uqriUPtXWqpwf",
  "key12": "58T4SaJ9xDbjCbVn7RoHyoDyEGroSJ3QcTNjDNkYxXBQkVNDGDspbG9DRZegzNJ8szusQS1QEy76cxzFAG4vvT9A",
  "key13": "4Gg8rpFFgCahmaTXpnh1hUreKv2zia3qgdxJYqFYN2Yd7U2wxvcxVnm5wGEibdnewJn84yg2a33hMFPB2Jwnu7b2",
  "key14": "W7UyX2oEERQ5xuotxt7DNVuAgWmHhXLnFX1qC3qvVkCaVQrj2k9Twh31yZnCthiepz6CGVcnUNXKkaHKQ92h6VW",
  "key15": "BjrdRBFJhWvDhbp9Nzz1cG7et4HtP9p3V5zjLv6g6H2BhpMmgF9DE9FXrw3P4swxRz8HK4WSnMsvGTUestHK9Yj",
  "key16": "3xFevZvjioVhxtpLrKuvRPY7BAkpHVLzGRWP2CD9VCyLwehh81bWWVHtTQ4S8HtoBLQK1j5eRZxZP12DYGdaGJFM",
  "key17": "JtQqv8EHH2KXfu8HvePRVnPGWWvLYFdA7yrngKpH3XkC9Fihib1QFaKWDR9XuqmCcx4B3rGTQEHTo8vYy2Rc7NB",
  "key18": "4HLyWwWL9sj7NLDkhtdgFmjguhayrQYpYofY4f8Hs1TgF4SWLy3rc8zsGcLXfMnvUeXDfMJkmWTRk2iNtjZpQ5WY",
  "key19": "3LUGiA8cnihDXHR3MLDXpgTAsJXWAvANxbRNFevuDc9k8pa59gZ6LCpvkfB2CSw6rm9YRstL5Jk566AJwFR9nTU2",
  "key20": "4nf67mXuSxUsNWibGoMNTir9GkZG9L7jBkc1HEVZkSSFj8ahALNsYKMkv7Zfgngbw6zUaVbCeuRSw14mthwM4mcz",
  "key21": "4Y7rJjmhwC75JgK9MREPQRsu1U8ny7rkhNen2i4eL9rcqfMeJiHiTjEjPhgEj6h6cumhXzRB6DTSiKb76e3rqDsM",
  "key22": "QMqjTci3iLQau6NACTzmvTqoLUYosjcY2fXhNnu5StLEtPQSG1R75N7o9gryYL3GnYD4kTxsuiUxqbZeHGH5Xun",
  "key23": "2YJvbxpbZJrWMXbxxKMtAqhGCCM8dPTFZzRRcHWXaKcacV8zKSe3poQQ9ctzmupLbHK8SyesMD14w3WqbKQX8tzN",
  "key24": "2jW7HDaB3z7pp9ZtCrUezB46MiPsj6XoykNcq75Hnn1CpnBgVdFzfjusoAE8isXdhFe5CfX41uDbaWbdVYavVU1M",
  "key25": "55zk7aANckY7rc4gNox1jyV9RM6no71y5QNHybCYwe8zADuLznjqSAq79eXobkXcKuG3hMcXZgwQ9uaeD6xSDGKB",
  "key26": "5ynJG1j2n7NXQivqqfJRCKsSunLrqsSbggCAx3UdPJoAXMdAogDfvAui5a9JZNpEPzxY6L36QaozR6c1JykKq76w",
  "key27": "5VUbUCYuHU3unfE1YvgWXrsJTa3X1RjDNcDJgMuqLq1iVJUXC1WFx4nhNFPabGhi3Ge8gfTpZTWNyjjS4CEScfzS",
  "key28": "5aJaW895aMf3b866FtMMCTtoANQpdogK7KuV2nh1UEGPdYhLGB1kqAvXWxH7xbDmqsTgt5HZRwUZm7hhazsf5Txx",
  "key29": "NqorsH78Fsq2id2UqEBFMauNo82FVCahqADNAKyCsibAwJKcoYwu4pZhoPXvsjukEtDo22tE1wqY5wxZaNGp1rZ",
  "key30": "7BsFLhienVaVVM334mwc7hfYfPWVCtgNjF8KECF8MnEmaHPsxYNh3oCmd786WTBAEqUHy6KVKKXHoHgrMZV8zDb",
  "key31": "3gW1NQ37Y18dSEY8cHFeh3T9ReYpze2kHEgdCy37D4SX2tT7zn29R3Swvt37cHKYnk2HVsVUP4cKbmCfdpnpcLdS",
  "key32": "5ZhitNWkBPyWwyNFvo1TQDzU2ondhnpEwTeQXsVTEwtxQCtaHX6Gy7TdVo8tNVN88APrifHASg7N8ro9VnTDAK1E",
  "key33": "5TVAVNFrjhtHMCyaPgTb6NA2BhdHQ8NNu77SV4XC2J9dm1yUFvVPMXh7fqXteMWqG72ioJBHimDBSyVp4MQrZa2m",
  "key34": "bRCLeQR6dABiJsg2bmw5M51T97WVn1DPiSKWNRXproigZBwhBhMnkw1oTapmqFm5MwpLkonvkwTvWRsX9GRn5dB",
  "key35": "3MpfdocjuMmvxjjvFFpUFrqg9CT4YLCbZWkSAjxBzmTCG1nyHWmivxHxRsHeEfStxGCivbxbEsC8oGAAco37iduT",
  "key36": "5YBVC6rAimsB9ZGkZHRJpuD9f6EkSJs92nxxhJxHDGDkdGUQHNwGDfWjQi3thLv8aRknCzksJQ5RSV5k6N8KbzHu",
  "key37": "4sXJmAMeWC7E6MTe35gpuQ14VFm4hsEGbUxTeVRWs3W8XouDYKKnfWW9Sd4it6yMSsbLk4izpJR5BLJXBpoGzx82",
  "key38": "4Zrmu1PEBJnkhqvx4YN17uy6KCREfXmrfimnhg5nUM4RFV1ueTA1EnrDpurcjPvyi1LsB5pgsUKSsufnNHD1WyVf",
  "key39": "4z7Ye3FxuidqNby82XAet69mZqbQ6HUiKa4zdHUsWfAiCFBBRHmBifi85i4v1shXFiZjw93snYcJ2aPQQAknLuUx",
  "key40": "4XhLKCuiaCgirDsdtRiyLsHPTZyptJDWBSKy5TiQfNmuQUnjUi36CaLJz9741BRTwJJvJ16Wb1eYwwjMtn7jXncv",
  "key41": "3tPkHDYoKd5R83q8cQnRnJ2ytM13AjPLt45TsmysWNY1rz6YdAjsPSXCofy9R5fCVKGFjr983kFW6WfzmMbD7bUU",
  "key42": "MddvJx1FXRTatNy4BVenCGA42yAfSGLuBTU3HW8Hr575PSgwMuYmaYtsmRzfLpdtygkZPAvAb4Dw5KdG6fVdx4w",
  "key43": "4J2t6JiTQSiARPUDC8MYi5gDpN9vJSKCR741afE6LTtfNZzFzYkbdVHNdTtK269HgXUYNBzaXmJkzdbEibsnyhas",
  "key44": "YnPPnGtFfmzmmDmnhMXGXjyp7eU2Sza6oba2zpy11SD3rzDhwRZZ34rREnDrLT9jQ9u1Yv36Vnmg4CQEcWNmWAM",
  "key45": "3VdLDh9R397P6RUNPikWRpqXM35PoEyyyxuzNijo2kMwUiZKJC9LYKgJfi6eNMmZzdT65UKMzmqfGF6WitAzmXgL",
  "key46": "4oUzwGa6EGFjzwnrePYw9EKwUSSpHXX13q5cWyV9LZ35YmHfn4g3GPfu2frzBDUuvd3GZjPt2DdD7QypTPETmQR7"
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
