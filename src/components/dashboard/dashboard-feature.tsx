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
    "4JQK71ezHSg1D8gsovCZnCRXVXXw4gSdVy5drQjKXiBGXtrYkTeintfrJ2mRYVhDEeBrbSDafryvWXGAQd7UfxPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oevrnd5SoA6zgYqzFnjMD2QWrjtRnTd9ehFTB7jNgX9MGaANm2BcBSV5gJx4iia5LZparPnE7LNuPWYfh1xFgnJ",
  "key1": "4BYpK1sk8ShJ6yqdRmWLjwKHWrCRLy2ck98M4rhejyVdX5xMEJk1TVgaPm8MT4bfnhAzqbqxnD9uzHvPqea3eaSp",
  "key2": "JqqfyvXvNUkVtE3ZoK4ezhxxtVeNKWeAicaP8h52zgWqjNjnMk1XLtPYwSig9hQZ4gdVnZ8BHCNx3cqLjH8oTQT",
  "key3": "2sVpGN1i2dp5jxnJgRLX6yi2A1g7TEetTJi9xATFBZo8EcQgTcTBa79fpXQ9gdtNV61xf5sozifM5MxednB5edB5",
  "key4": "5unebbXFjwtNSxZc14bWXnf9uromopUhi5WSRPkeKTGfgVh8uVWW1WiAFY8n8ctQb45wUuuZW5mncnfLN4nKj9yJ",
  "key5": "2q1XH2YMwUEdBcN4HeCB448nSsoqkNSauc5VhYfnBeS2G7r47tx5oaJKjA1h9bHdsJTqoghZiHxrPamW3kz73WHa",
  "key6": "qWU57bozgrtAcR6NKVEpLzwgBgxBScCGw6CxSaY8h2nRWsHdMzfKrjhFwtUisrs88BhB53mX7wYAxhmN77XyeKF",
  "key7": "52J72WxcE5QJ2xSKmi53AiazoA9b1Rvg9GjJsxjZJiAqXt11wH99vjvMsy27K9PCuWZrZxXT399qGX2pQrJ49AAn",
  "key8": "4DnMRoszVcxe7EcoR9b7sY8ZHXfPku3jCPRsHJyMMnYHoPJUJaMv6e2dXiPFhpSqBZvPZYUiRJv495UydySVGYsL",
  "key9": "2aVfW5n6SkTbqcMhVs6pQsuJbqdxtJM9BT722sbjVeepPgjwExNucktY6UxUSxKVaSpy1EUSDitjbdm9uEDAX1uz",
  "key10": "5Z3UtVvX8sBhV9qj76KUs8Uex6LRNRMoY4guJhytbknDQWkUpSeJ4jgp5dctugWfYsEP5KkKF9xGHV2BSk1zuBhg",
  "key11": "d2D6jHt7dvvB1QkNBD9hmzUS8wjqtD2KpbVSr9mNWwAafbFgoAEMhFNvWDubTDnmDPMxymqNWtBEgkTVUX9Maqp",
  "key12": "2kk82Lb6L2dsTRouAk39AmY6SjqJBCzsrvZMXf9spXgiRK3ZAWUFsshgCLmevS6HyE8GE2UBaYN8aswUdTtvmWJB",
  "key13": "5V7iNLFJmasBnY9YYB1LQzcVUAEYuLuubMR1EbHV6fx74tsbdLRbYFnm5N8BKwDQzSeEt8s2nECUuBfMXjiLa6mH",
  "key14": "3raMDNYB3EcYb4SYE351rJjdD3ZvsuV13J2ueh7i7cQL4CWV64SyfmVtK7NgfTmcymnouLMRwRcHWJfHvGFDHacR",
  "key15": "R9B1hF3KdzVgYMW4EqFPsMCEsaEEfunEmeuFedg26L1YYQEkHPmAr9nbgz4gALfGKtHHXXppm8EWHXYUQpsqXqy",
  "key16": "67b4Hi37Enb26FRS6Jzymh7XkbfRPp23nzDTZ1MRmSaoMeuWXZi6UNP83Z1qnyy4rAMrbpht3s5B6ryu1gQjpMjf",
  "key17": "5dYG2GYaF3rY9qhCU4Rw8SXYyee2FTNe925r1A1tvx2wyNtXczmLuBXGZN1KVeogsiuuDsxRvkoyptGCxCk4RhDT",
  "key18": "4uX5xaW3USQDPMusZKP6N3PokWDduV14bDZB1Cwigs9TCUHxhwryJbnP8WGmzaFqdfDPSGZqcjyTsd31PNwVELkb",
  "key19": "3bM3Kpg1TzDXBZf22kkQECSJuZFfvms2iYtJQaS6ypwFgBbbsaqucQLsK2UjCf9vpRqYPNB7WbQhhrngWiLHJUxB",
  "key20": "ZCiQPGvGsfDQn1mK6LU3GXVKSvuVC5YBtBX66xLccDdunPbHihSCMt4LYm6H2jY1mCRqaKqTuKZNJUbCZ6KYJyC",
  "key21": "2zuMtcYkEdNDgengeWGhQ7vRRstavPgoSTJKxEHh6uWv9SyYG11fZXEZKuzDntdBegbnxoJvWqargKGchkt5DWZD",
  "key22": "2J1bkcwuA2akgdgaM5Sw2fEwYLRP9dXy1mwG1a3cH36sHA9esn69qW7fDoqt8EQi3i5mdvkFEoBU9BpAXPRGuURZ",
  "key23": "5Ci5uQQB14Zvet4zdmQm1ANm9iE4qcYb6DnVDq2PdFZqs9HnssagMYWXWubKmJVUZsZL3tigWodCVF1gXpTTbJAK",
  "key24": "3yr7xHz9za1YH7SZw4JNHyYXDncbQ29NcC9idBFEJJe5FWjXCsxsX5Yuu4r17JE62DTtA3VNXPfHTRQMdEvNvJ1P",
  "key25": "4gJnT4B7Ngmf1XozGdbPovZRHMn27JAm7EHwadiyXiKPyzQdgfvhtQoZbawKi588LoHbGNmQCzEY9aRJXS9Df4u2",
  "key26": "5MF2FThXmuuQqmNVnzAWaszbrrQs5RKpMSC5SLjQmqJK3AvTjjvZjFzbVqUCCLdoZFjg2DCXnG6Gz3xLrzQwGpPJ",
  "key27": "4Ynqi8hJxLhH4PX4LUZff12JztivRWChWoAeHySM7gLPQLqoUYh1u3sAgnD5JMAbCP5RCMWA2dQw1GgWSH7HEuKN",
  "key28": "2cg1A78nQbpRrnqnZHPiXLQaBqqTa3Eynp7gwZau14AFt1sEwbtxYCU8ZMhQ3vYtYYP34KeVwxv23MGMKKAYTXcp",
  "key29": "G1s5NYa5ShGa16dmZ2c7xS1GxNEJokHXuaf8mKNijrcjFS3Fd5xCms7nbdR3MZhajwKrN6JmUzE6PiMbrGPM3bq",
  "key30": "2CJfUnkQZ2M9GmJFfnXvZaiqzrFLszd6S3XijoA5hN5DrTKejXiLXJhURXc7uDBrpidYSbLT3T3wWTJeng9jaBib",
  "key31": "4S2G1rwG8xZxzyf8xpt5ggUjwm1G1hej4H4HECTAEVY5Bd7Ppr57B8YaMc8ZWR7siUPJtkT8fcTXpmcuriunYkPf",
  "key32": "2M8pe1PzVYRck4rKrbgS8idvsCWrchgxcTY71jEZYHtEPYi2mBiKYuYsa1bwiyz7bJiSzGZpjcP3SbXEjKHTuHr7",
  "key33": "14vpCXXSQD6tynxe2keoE8Fz7wRsgzVLTzjZLqaxHUWLL23QE8FevxSGSyEcC93FXKcuqhTUXyJtxoU7UA3Vm3r",
  "key34": "4j2xPuRewkWrj8nWNdVLF56wrGsFv231jg773Sd7PUSjMbm38RqQ2ag6zAV6WgmGKDoTyzfjjKz6h4jdsBRwapA",
  "key35": "3HrZbzgj5agRHBNfsvUjXCvjZLuaScekQAB7vLqfCF5BrsuVb3faCbHdyJCstg6frg1SDHzL5kJRJ8bp8CgWjq6k",
  "key36": "RcRT7D4GJH6RjNKhpcSjob2Zs58Lj2JCpnD95HrQ4pXAGKw5Hdc31FDPuhMhwN3R2rEwsokWk3Q9DLkUbvpSUAj",
  "key37": "4DbKhu1K9v1bFTEafZ5PNva7qdB6iAkfDyRwEafxhS3Txgz1vLuonR6Gi7RRhyXDtjfwTZbobNruoettUXzLHCad",
  "key38": "25ijKEYBRwkjvs25BPkChdJHxoWGVujRznteQNzFHut66kY2UfjqFRe5uFECCJ888ATT62FBvajYjYNossnSC8qU"
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
