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
    "H3zU24d2PDpYzySsFvgqWVWtTe1Vjp7gvDKftgrFAdvU1PZyKHw4M7dfAErX7C8ZukDwehmGU3GHXMJunUhWT8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YX7bnjUfHjRqSFm8N83uwpwcd1feUKHzanaknabw9jKJ5xSL72L5vgyVaRac94stT6cE6etPL1XL13MDkgJ8dzV",
  "key1": "5mVVAWjjmQHYXRLyMt1ezoAVy8TmS5upBJTzX9eF8qocGZJd9rijVULyGkpPYE3c87S8xhMebTmQUfb8SyiMBTFC",
  "key2": "MTvSMQoiGiA6iHo5st6PgTj6d4FkA7cqDpXBNfzsfoZJjfCkEhM3YrCh7Pzub9VThGrRmVzVjJgct1JjthUMdK9",
  "key3": "4pJjqGASgXe1YyquMFEaEfbE9kGAKa4T5hPncGQjVgWajk1LFmkdvxmfaeUgHJwfFsQKBN8WRSYNGsHVRXWVDcqk",
  "key4": "3widzLu13aaAmCmmz4qFaYiA2ct2pSMPaYkrtfCcDpYh6XU4xDETihk6soGj5ZkPEFwcEkKpJ6UiQrSu33BFoZHp",
  "key5": "3dUhF1U6JrtaERoLB8gme3W4dxXBVeicLVNyv5ow6vs6Hy61JANzdyM9bUavKJsNT25ekDLnLdpbPwUMFWU76iAr",
  "key6": "4kHxRh95ZzQrKhjFL8mUeDQgXasZYensPtShbiecUk8Nxz8V5cv7HZ2nHBvmFrxPSiLpCp1VYvc2PMH68Wwxucs3",
  "key7": "28cxu8DLHpgnbmTEzSY5S5rtzPNfq4GERoZ69jCzB7DRfL8xv1o6MdJ5ZrEKjPJR8EjmM8KsGK4Yjzrwszu22NFU",
  "key8": "5zQHnvoXMUz1etK4UsgTMVqytnXcC1g4Jtu7ZPkbpA224FWx2pnB2JYaVgBzzzc36qHFWEsBjHf7sF1Ev7hHG6bZ",
  "key9": "2okrzrPwyo1Weo5oQayNefD1q9iGpowJvi1JxGL3Kh1LgDEpoTs1fnF4UtyShDcYAeotZU5x5FEK8K4h3GnZkpy6",
  "key10": "59cM3VHBgzEUmkTTo7oPBxtZB7RkHWTZe6kqszZPk7SF82HBG7YNGy9JE8ewYmuUAd7cYLUeT8McLazFzdDxazCh",
  "key11": "5g3hN5VDmAKcwVWnCVcjC1feuNy57VdRLi1iujumjgzeenqDK1hbauvEWverWyadwayZCcNXTFnyr6rvNnYMdX9V",
  "key12": "64srMh9suHbYWFLdyy2KfaZMm9eY3nyFho2n2LW6agyTUxnzamc3GUbieivup1LMyT88zpZ7UcsKsjZJkwsseC4c",
  "key13": "4C5dXLVurHsgbRtuMMu3yFNAnuggziqBB8rjf5VQAnpLtqZ6aPmcVxwsWSLJYG3VoFQBctjJso7bdKXCHCVsza37",
  "key14": "2aJUi5joV8bxVTJGn6CdHKvq6jVb6JDShWtsAPznaK1ACxcyp4G82LTDkm7bioDtTRcdALc9PBhpkmLkqbByuegN",
  "key15": "2cUWCfaHErcBKM3ndfp8HWo5k1B6574GfErWbzQ7hQYHqbes74BTkxZCLuBzT4ARAQQbXkKQ4kHKQAay2rr4fCKa",
  "key16": "3yPZGpZcwKtMrHz2o5mzBGpXBoVoMUZjLk4Grs93Yu5MmLettUxTaxnk7GNV4NPfp99F1Ss11JBCUJmRH3w1wFyU",
  "key17": "2FREy5SwCVFjaF7jqTGnSYD5w98doxX8L7p8njdnGTQq3JeeeNoLBSEVgb3UpDQFPhTrQEGtdisV2ueGKXHAVbJN",
  "key18": "4cryrprpSNNwsibsE7gvuS8k8nV1NJbujnMXT6S9ohrpXPotnwhaHsntL8fXhjSvUkGaTU9urHKV6TTnNCwQDSQh",
  "key19": "5jgbGSESyEQzXWvdE2aYEAKkQSNP9L99RQodoe5QtFqYQgfa4JZ88ok6YpgSPNd3BtVBJvoNtHF68NGXa7bGNevt",
  "key20": "4x3tYaSXey1NV1Qh6jvGgNYUcMZ3po46AFVSSYr1wH9Jqva4FShYfnGXpjnagZkfFWBuqQgtYeVE3dPkLt3ESmah",
  "key21": "2a89Ken4bcCoqCZ4Nt3foegV3f2UQKKEhReuLLqhku95MHuzAK8EPFyVPWtkeZucKx7f91HFMXfmu1BJjz4EcEQD",
  "key22": "R9TjZRKVqk9Hm2kNG5zhW3uH2XJaynyq8vhki7NDAHr1TVtTgGGSfTCPzEaENoKoY5YvuE5iTobGLJxaYadjGcp",
  "key23": "4AZCdcwsueQZBRz5wmkAFbFt9714a8nNkYgsk9gc7hvLWX37cm9QEjJpBUt6E2HUy7SF25XEV8B5wL8Hc9XKW4Yt",
  "key24": "63aWyJqMTgU6M9x29KhjzkRiDPC99hak25R1LScCbFvJk8bAwWg8VhayR9KVC8U4FeVrJK1SNZfE8KCMfrfohnzr",
  "key25": "4BxpBQ8yUSAengpq8pyUxDyvLQGESgnQUHjQMc93aWJ95SGSkA1svYJeo6pprcp3auBG8E2siYjJstyFgJWNkdAa",
  "key26": "5EFzPz5HwVtsG7Ctm77BuC2yBC5PeFP67GXxRexrQKhY5wDda8Qv2XVSw4HT6W5gFKykEiN73tgHuAucS5nJeKyb",
  "key27": "2PEXWcC2ypQ6t3GBrsQWStqE7GKrHqodLAgjNaAytEsXfgBpAt7Sgd84ydzTepGkma8VUioZ1LpQ6arYXbjerhjP",
  "key28": "29W19KVCa3NdEsQ86qcDgHGiKvxWG1Wbki4DEyweJDXnUkDbe4ti3o8fGqV9EjfJsc9YsLyBfYPd5kEqJHdhJtUA",
  "key29": "5nFHPeHMB55LnUudytmkUG7Ma4uRthrNoD8DTAaaaWQ4oTR5HMJgU5cxwjzZ8R36Ngmuk9B4q24Uz2vJgsnv3Rd4",
  "key30": "2vy9wBb4z7Mzj2fjt4tRKcsGw3wfaBW1bfCZPNxPqjcrz6fUJp2wfJgAqtNux1XUqib5xuXxFHbPntquJf4nquZw",
  "key31": "5gqHCfG5EB39SchZtEztZZhibxTpaHfbJSeEqYxv7cE1XMmv9RrYUXnwTsGtvp6a7dDUXwPvV9QX5hfGg9D5pnZt",
  "key32": "5c9Qg5JC841aGsyqQ3EjXSxSZVjoozQMxwHPwRoNJQNXQcCTJTsXei58isw6xH1gGEaQn4Qi2Q4mQbxmG7WUBjNr",
  "key33": "4GZtfBGcfrezDZ5PuLG2MhhHpL2NYsCDtXNtBF1QaCCHMMdbJswMrK4LnfciTkhc9sRjDcMmp1WuEQUVAxJ2fFFb"
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
