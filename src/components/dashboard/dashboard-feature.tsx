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
    "5DE81Hrnsv6wV3g9SzTp1BHz8qRW8SnWJwQQEK7MVc5awczwGANAyHXsdD4ioEBtyrUq5PypkAs85a8ojch7LU2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34vHHPGGtL3Pk2sxGf91PNX2c3dYHpCyms1AaJJksXFjMfi6oHSuMHKRXySPWYygym471TfjbpuqTSBmAURT6Wwp",
  "key1": "vkCk4ajxd3wQD48TXWyLSFY3ZPnq766V2opGsZ9qJ1xKy2FnQ833Y63PTMAZCh8FdXCtLzovM5g1GT7nzLCTJ72",
  "key2": "2X1asEFXib3nynAYcPFt5mijDrWE1qUHwudANAh3YmTbYVsoG3CH1cHhg3kDwsRFwFbx6BDr51CZW5kCAgqpodW5",
  "key3": "5chmhsaSvU1HRAbGhqvmF6DmM8DyhCYijRVbxzB1zGfNE4rMQWMYgXkrLHbocVmzVDmkVLAWe5rRmndY99Xw6YLi",
  "key4": "5nYFysKP1ifEV2JSy1N4kJztoY6S8HqouU6Hb6YazJmL9bc7mCSbazSA2n5SD2xATPTt3k31KiNVztFRrv8c4jyx",
  "key5": "5vtpPXQFmdxKSmUpiP1pPMt2dvHExyq97j2MQYie3DDXtc1U1XUjL3VPBnAcpP5Uk9KQBf73rBaeCsVtJif13cPY",
  "key6": "24DK7uYg8Z1hvtNUiXCM7ewUycyjcbfgUP1eyS4d1zpnVUiyg7JU1YcsihpS8aSkGQdgMH2ipjseRKamd53QH9f7",
  "key7": "2NTAihY9Y7LVSCg2xNjftMimh61BxcFSVbMQCBxTy4zSN46Y1EUnfZyKofvcLPVkdNmntoJFWM6m6okZebyCTqZd",
  "key8": "vnXJBvJbZt4b8dSCekwtNvpRHZanZ1VUorKWfEPonE89aHcrTPLsDDmxgwLZtLzEpzamofK6BkH7PKGzkFyPFn2",
  "key9": "2BGbK6G15jNGQtZ8D2ENnNXq1Ho66NhKsXXzSGh8P7XKAB6cNNAfUnLjdngnsEdiCPAY374pi7L4rrj6SEi7s6Lm",
  "key10": "cQZsuy55ra1tTsKw1tynJyEPcZuGF9mj12Wy6XK7Ebg2fGdbmhrFVSCEb3afct6Lg1sZwELu6JvA4KBcUaUyajV",
  "key11": "5DJuk7W3PDDnry4bFVGwYfq6EAQgJZHrZTnWAC6whckW3FtuyxWaHxD6N2Jj5RNuRwY1jadU5DsgMyb3mBpxjRt6",
  "key12": "3e3RchqcuPpt7UaEo2iiFviuagGTirXE8GdBJ2WwrjP7VXHT5YewdXkPFsvSse16C9ErDwVYpf1xRnhWM8GLhHuX",
  "key13": "4PF7muViRDJq31mF3apqPgmcqQwg7it3FbZ1Evgk9YryZfhXH41Cih5D5mCJAsLsoVfeR6d1ZCtb1zLLpehPz2Bk",
  "key14": "dveonaoVfHap3z6Ao4ukNqj6RQKmdJbYbwEXwpcStJb4yKb3SaHXFEqf6kHcXYyy1C6TsqycfpmG4qb4Qk6MMk6",
  "key15": "5nzfiTkgB47MfMzrWPwq1MfvAoYZLFzDvoqFUiBRaxHpA36mwzFLyGpoFCYyUXJYJAfgp54pmoxiEGj3sETbfpbt",
  "key16": "2t76CRRJpNjxsU7yUyzXrh5bXZJgjEpDrKjtC89VahNytFCE9T5Ggfth9HVZFMAvcdqqPgbnytWKeQ4xqJbF54eE",
  "key17": "2bZccWKE6tCtRCGV4xFSku5o1QZkNNbCb3DjATU6xuynwZiCkdrbfLRAht7VkJjFNPhbDpJK2PhfvqQ6PfR6jTPs",
  "key18": "341zqMcJC6W5rvUtrQi8gMgcULQjS9CHNEXwhsDvZ3S9kiARoSQpQe7sSuMiEspb78rM9Teb9eGuysxbWq1axvh4",
  "key19": "5BHHtMptBb6rPwdpn23qE5yPu6RCgRJzvXUvmVbdPfCqQpmKFgNWccgGLNV6hVCU5tE5HqSZLvRGiTaj8jpT1UUE",
  "key20": "5ULniYp4oENz2HEKaTDr43FUpH8wFpn4fAvPgYCctz71jJiAq8jFKx4k6YxVMqYWNffqUeiSoecu1WXAS6RpC2zq",
  "key21": "3hndLEL1cf9X7rP8QQmg2MrMnXFpDbLk8ucu4CaeatCFYL4nyfWmGxZDYyUQmXK1pvsToaiQQE1EKdbVnyV3gE3S",
  "key22": "59xcoMf2YjDd9gPVrJAJrZgghftBFQbHknpH7rcKMTCyy5LyxnGjPRWud7dBuvNqrL3WaKT6isxEWTqxCVMXFczc",
  "key23": "q99MbGEEKyWYVHUf3MTRFC9MUdFqwQc9eNXA6W5CaJcwJeQCc9r8fjNMCHFWD2ZnsEfZhdJq6LZDZ7Sqj7ASN9E",
  "key24": "2Aze97vWXN2aHqw2taFSUyMPqvNf2tp1oyHJ77yfv2x3oRNc9BZp1WuA65XfzJpM7eG5MkD6phdDFnYZt9rsYiPR",
  "key25": "5zeMBywab5BS3ifvEECnj9qr2GQbG7MdkMGTg3QNuG5ufdMzbgBNNdTDfcTUZBTTd5dSeaJ42YJBnhNx2pQ8ksic",
  "key26": "VowNJpiQCa9J1Stmg1bncDM8K5opcLVE9ucVP6Y9cXPcfkQXExGb89XJdeahAqp6ga3AtnLzNNpbeXvYiv7m2WR",
  "key27": "5YvwrTPeJ61KXwBf8K2ZR6GGZHfi5iH3nni8N73Lcihi3CJFCrKybkvoNJUeMqFNUY89osyhRmdePK3xSh9DkB8i",
  "key28": "38bX6SqzhLWSKLvNRNUsb6VPPK9PiZMN91ihTL7V9Fn5kdi6GtKzWs3HrGiF5pgruM7jkgkt6QcXKNGR2MAU6jQY",
  "key29": "35dt8aisaWa27pKcutCBJkSaYBaenmxUaaF82e6bDxs5tmNN6TQttVqjRoTRHEdv4VeBB8RhYSQgyga9fzwtkexD",
  "key30": "2qCdAKTifMakwNuUYoyHdH3n7eBy4kRwjMgiMXGBtD9Daf4BaCCVmaRp5xfG3EGC8SvzohxoCLc2cAW9tFqU1hXY",
  "key31": "2DQJ7GT8aigmUcUZXYCHwmwgSkkusNTMSUPxxh4PFwU7k6h6sDFgFNMpGvpsU6E6DTRriTFndNgzvJKXSUSTGuDg",
  "key32": "4FZE9RTiRF7RwjhmPfRSvD4NKaRBv1DJmMk8dXRoEQQZwa1BhMoFhVEa1nJvuhRaPnayPmpgBQPdzAcmpWrRxWGs",
  "key33": "5MKqBSE8bpHKDQMrTo4D1xgLCSwfqJJBvccqgAcuvWr5eUG1tt3kM9uYg5cNVRNxJtqTK7Cq3kai4b4VCrSZAMvG",
  "key34": "3mqGvXCqubiRnoNFRn3TFkdEES6J6Sm2Hw89eyrFCXMSZLL9bNcviHYraXN6WN82u6gHSv3Zi8SNbeWy6khm56cB",
  "key35": "4xwRWEr98NYPWwPSRhCTHG33qK37jUaxQS8ee7BMXLWZJ6qbSeBKuk3QG5AEVi3QpQ9w3Nv8eDHEXB9z8zEGUVMn",
  "key36": "5fSX3ijhTfHSeg92HcHe2DCZs6KWVCXxd4n9JjEhRsdj8DULVhKsZ4P73gi1vXn1YsMhYPezPAM5hggZdQdWj3ok",
  "key37": "59yytL7h7wXXzVpZiyHj8CgC4Usp2HgJWfxkpdueXnAtV1jVFo4YZknKLohnzfiz9Z9nm7GU26U9BeUdkFE46ojx",
  "key38": "4JcXj9BTpYCjaEXHJQ2j8aGGLe1XGSCJtXbdGmqkbCZYmDWGaE37Bpnpi8gkbnca2VS1MkRVkvxkXBebtzDDoPTT"
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
