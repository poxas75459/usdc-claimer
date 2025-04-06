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
    "5oieoQy61K5fnRHJQYMKvaUEQZ65ZzuEp5wSKZnmf4yn6ctxYZ2ygbQGBXH2aQ9ioswQzNLyPgpagVzJRLFwx83T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vYHpXdHkaWdTmtP9C7CzX3WasyoWUiVgNJxe1aQiy2kyzeZxz5ACa4VdtJwtKTwx2m7VhNEh4z5XFStYZZHM5VT",
  "key1": "FqQdjTh6RysaefFmfQWTPrWZvM5bYMySaanA6E954Srwgam8KicjMjmnaja2FjW9mW1nvDECBNYD7hVWuiLdXdt",
  "key2": "4mESt8Q5x1CTHaznhdjedzqZW1Dp8TpvzqcdnW6TySNeRzJeusvWKVSoVfMQDjxUmjaSXZDhzUycAtFKxnsKzb4U",
  "key3": "67ERFk924mPCS5MnRAH5usgLw52Nrtb6q9duEb4fvKTeMBm9T65qNiy6qpkctpuRgmvph2mRumbvwzaLjEixpUoH",
  "key4": "gacv58hQbJbFy5Nq2PbrTQdj6ctmPY2FaB3PUvrS8gCtMDKgn2L5JA72ptaP5QyA9SP1Q1xfN1kAxsshSdwvJT4",
  "key5": "4r1AqGzHpVZsqjs4vF6E1eNMvw5ACNNd4kKhaHHcv2BrfNgRgCUHyJBHeRLzD2eowaSFfKXEnf6QzXhF6kADgh89",
  "key6": "33GvjBqDKhpgNXgqtHn5vRVMkeLBY7JGqS7xHmbbkot5wWGVxqnnA7ymHpxZSsTbMQSTXQnZho7C38ELtjYq24xy",
  "key7": "5BVxxb8CUxzwNR9bR5QYRXfzuXaNApc8YWCxxYDjUGyunRkvMDbjNFVzKXHtB5Lzvip6RETHB4sXfVDhq8G1U5Qi",
  "key8": "4CesLVQLjE3LfieegpthoURAEQ7SviFWi7iwXs659vXFaW6qbg9dPoGNdxtksLBF4a375Z8F4uVJ3mqJyWXX8XhH",
  "key9": "3xNGYkuGCpEDLac4oaMCiaUme9sTrQCMfASbknmx6btCB64qXX5kTXJdgng9dZoNSLUXEQ7SLDikXLvMkfqQ9Kwv",
  "key10": "4gzwRXLbPEnnAHWSE6sQ26KgMTEPpX4nCoZ1p6Qw7ojU6oy7drxMSCgvh4zrhZddyAFDx9xoZ1TfgYDLACrtts8n",
  "key11": "4JWmrfpPQ1t16NRLQVu9Cx5BYHvNG1MUZKjuZZYckTe4VmP4TjNUeyqQVxao7bxFdCA2Yams3LZF8YNUun8AzmZF",
  "key12": "2JpSRbARzGyHb8ePhUTQ6t97FSyE9VHxicCYnTNBPDbqRDeki6XxzJrVgUHzUY3R1PXYM9NzpvrBSsgyLti1G654",
  "key13": "4ZLhb4vcwFc1a2aKCzdAoK7Vkcvr8bdaVksGefwTiYEVntr92SM3FGyZcSCzqjfaKFrpys9uHWHRivwUcTZcjvZW",
  "key14": "3B13MBJVuw8PGvFbBWpGV4DjcFTkyD9DvPVqBwvfDtT3LPXv7rQLAMapVtTkGR8z6MGs4DnZukt27UNz8jDiL9nP",
  "key15": "b1M8Qeeqdc5oByZhE6koPJtaLPDzHYG1GQFuoe1dRcpfA3gJokBEugXpvfTYF7TXLPvyP7Z8sb962hV1CVm8Den",
  "key16": "cAysGmxg8vTkp3zChhfviAcfmkjDmtTqDzBQfe6dwdx5X7Mbnpd4kLQ4viFPNC73iY53F6b7oCkLPYyoxMUVTmC",
  "key17": "25z3eTd3zLuGMZQs6TtgMCTapkYWTzsW6CcUDbdTWcXj6Qn2KSeqaC7x7vkfqyh9u7CpvAC5bQTQfuvaP1u86ss8",
  "key18": "y8pUivjLcodrCYP5U8KujH84ptecD8MuX31Em2rnoEahqHfsbkNuQAE9BcGZ4KyuNeJpTezAgwLZ5YnukbaFexw",
  "key19": "2eMCoRmsQbqqwXGHSoUdprGg3wg9pSPGj5d1bFc724P4udis2z72VGpKL8vjEKM8UzzrdrWWpqCMhxmZRoE6J1Ya",
  "key20": "35K4eHkUgNaiGdpJv1eYtDXbeZzumcB5BJwet15VrxbVWugxV8Qh7JnY8TuZzLXbd8HLsg5N1AhKe9ovhiQRJXC6",
  "key21": "4hvX2TCxuBCyWPMVp2NUkfbp5zorqng5Zb79dzx9UfLNtq7zH3tXakAMZvx1FiCGVoUSBuCxXFVzodSr7eBsSQdr",
  "key22": "4gahPcd7qGGKi6iwKm6HhKxFhCnnzc5EEzLXTsXHLqaaSSCrNbpARYgrgGKs2zJpFvSL3JdsDhQ9XZyYJDM3zjCB",
  "key23": "2WBAbpqZAj4JVdKyHYpPdaUTvtSBembYZ7zhwcydL68J4Bop6bAaa2j9nLSw2wjtxa6VsQoNqEu37xxrAZRcVpE6",
  "key24": "5MdWmjvbed7kSF4ZwqEH9683WfXpnLmkmFQHdCZjgk4Cziv9HiyJkqrGWdjeqtEBn3FCF9B3mss6GtB7MD7sxFuz",
  "key25": "aQmgXSg4rfVxk4V5ofhdTXewhFCHCPgUWnyi2wqbTdUhbaR1mJoky1FNSZWwtDeq2fUGf1wo91LCZtovkp6tjiK",
  "key26": "3FgyLj47LSXt6vSpvEQgt3Y738PjNro4YuXMfy23qJXsMch2ZVpxDFH1WpyumTa42EQe6MXGfMweYzsvcTTPJH52",
  "key27": "3rztGBw9HamQctAJTxsp141jS76JDsoZ91QAPBrqkh6wfrown6Wg7RZexMJmXuqhT1QkfZ5AfkrW1iCoPowoAb3W",
  "key28": "4aa4MCW4DzmsPU9KrN3TLrnmgwprmTdbTFZYeDpBqL3QEzLxpzh4jjg5FKkCCRAVPML7rX1DxrKhZNk2ZYXNQuF4",
  "key29": "9p1UhfkcWYHFsJ1RDkLCmS2uAsppQsFB4u9ARKFquqaJZ3ErvjEkF1DkuaEASN7TYP1xB1rsKPUoDJDNAstT83X",
  "key30": "5BngEtkN91ZdPag2Mt5yktEv9v8yv8CWqFpig3h6SxsQPDvN76XHodQwoMpzxD5gwG1LbYR7kkupMLXBe7k4ZdVi",
  "key31": "QbR4VEMqq7j78kVcLuVnM6tN8vJndZUg7RwyCAbvFvTxsWMiki96BWf9KbkTenxYypYPphBeXuoEBohyPrn1M9b",
  "key32": "3GSWVr5uPeaEGj6vGsZ3rV2DhyBx1Eovp7HQRLexRquRbbxA2adXxGWaRs1Bsm1eXeuxBYzyhxYgwzUnrBcvaBpZ",
  "key33": "4RADopREkWGLwpDNqK86ibADweoHUu9Pf1GrCiGpfeh1Y2gmK1mbwsJZwfXHu51v4tggfkR7MLE8HNwgLvV5vVS6",
  "key34": "4xxNKqKMa3EkgYnpbbu9FbfLoqVHH8o8Fiyp3T9gWwPE5pPMybiCWYRH8xeLn15NQ1ybBF6hg9WWRC35QKvRyTmW",
  "key35": "2uW6BHZUFhVYaC5JJoeFpzSQSsGPjV8VQtCN16s2k6YiMbGr7pvv6os4rMcAWM8BuDTZvqAuNctWCkcYC5x2r5Qd",
  "key36": "4fgBkvAm81u5VfiWhEQgg4LaAx2957dHpV8uzVt8TXMgAc8ZZbxDkE3YJ7C3iG88Vqdpfz6oP6DcC5gxost3ZMVm",
  "key37": "2i9djagdaMvFvaMzcEu4kpjuf81ZhPxFq1uJWogytJJ7HpzBwEZwysSoewUw2urMTH2K5EUfGk6CQxqWtwafk7vo",
  "key38": "2NdvTZVL3sPaX1G8UEK3AanCat98AmuEJFaW9WLQCRjTtb1GJcavST6imjDG6yAjbjxPfA4eT9jKqpebuRsY35aK",
  "key39": "4uM2pWgL2TMYevs3Z4TEn2YzYhVV8rvWmENYmFxiSS1UpKGADj7J3UGW9dSsdKvk7ihLAT4t5pMiobqdbEUbkuwd",
  "key40": "2Pbu1qB4ErMqQ98KpfVC7Mieud497xMo33ct5Nmas3uKvBWCh57yKBBuheDdg4KnfSSTecsQsd2gTg5Thr2Ze1Au"
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
