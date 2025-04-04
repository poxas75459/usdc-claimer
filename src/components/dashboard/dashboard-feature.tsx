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
    "4CKNkfYbNPM16vBrS7Phf7UZznjJGVfEwUN69PJBr7THhbsuatxBU7cKzG4SjwQhETfupdXPxp5s8MsT6iqDECWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PhPUHFkQqZRimuK2uHrK8L6TLoPPEyYz1av8ryWRkpyreBKtcsCwditFA1k5Dv87wsdsmfv1QfT9sywwPq86BDf",
  "key1": "4TCvYoVkXAAdygG1E44RUop17bGU364bkEBiyyJHpHaNqRfSCvLAEG4H2cUxeWNmggRpZwN9LYTAdi8YHxePQBuH",
  "key2": "58wyd1X9vcTDyFV8YFYELA6iL49csE7uqrvsmQMp4iT3UdFdqeMGkeRMugzvkWjVrEsJmSaV7k9RpMt8Xc1o1Sqe",
  "key3": "2gArGkUDwwDfzYSJCcSswtABGSpynhFzMNxPTuPM81foc6FzhQmiJKAtTobPTxTucw8WjF3aCBNEmMZhZfcNx57U",
  "key4": "5nNwF8KHsoRV4vKSYhb1W4cQEsfwuarxnSb7hEft2SJ4v7zyqxffs55kSD9t7FapVF4TTCV2jXGfSMk2kXUUqXkW",
  "key5": "52t6n2QMmnNt9AyLgW3UnD1yrFY4isZ6rgmzKcNbhDEQcWMdc8AivzhuzYDZtrwoRbqp8sGZwituZyrhkrocRaci",
  "key6": "435yJWCrj3zNt5Dn84K2ckKk1ovdX5VEujqxM2s9X9588rTSnUbtNg3FjQBEen5DWaeFgsdEgXajp48Xnx3Y3vWu",
  "key7": "2DMk1eQznoNayGatsrQtN3vydY98ELC5reY8rFoZVDSMrSZVLj6ANwGPEV5x8CceFaX27iePCsT5MPEqjBL5AxVs",
  "key8": "J1NMeWMuvibabzGpGUESFo8xhH26tPTVAZFd33qtjf6gpWy2KTes4Wt2mpGGtdXGznUCg1jzZJBvrxHDG5Nn8Zm",
  "key9": "io2PL7UMLY7ozKgV4MW7h4ZdhBMpKjz2boLjKHm5FYND759xknXCYSKzWLZSzQA7AekPAEHXVqsQ84EpvAv1Uwr",
  "key10": "4DaFvdXriZB3A22fd133VFuuZdURQnysGrwEKvt8ZXouF6hLZPpzTcEdFQwwKinYPboUvmbJL2sXJqkyixk5FCvh",
  "key11": "58ToWrx888jWKTmeD4aV9w9hqouNmGns2uxwtzG9soeiwxT6tdtBHcskzZYp39VURW6rsxFnkUVocY8aRuwvqc3N",
  "key12": "4T8WL1RNjXCF5sbGQrfXg9HGMsq5ZNauKUrQv97CNexhFaokNdVDpdDMU4vYXemZhUp1fBPSgm9RuAkt5gwRuToW",
  "key13": "23ksgeDwZXs6pzQVZy7GouXxktUwfsSpSqgUrfpn7D9YtkUnvc5GgWaTH5uXycDY2VdwKyYrchr2xUdKChXkWHs1",
  "key14": "33afXdfGoxv8hgryU85cWidcaaEbw9NLmB5sYyvSvnhWGQK1srMyrp7aSakPw2pp4TyD8MLdx1wq7afbVxnTt6ck",
  "key15": "3b3wfFghk3DGHoXMS6pLPr9XAst6jhH5wQztqSz2GAFtHFXZQjkhnyBngrUXZSbn4KzKBomspgEWyogzX6Wsu29d",
  "key16": "3DbEwCKvdoHDNM5kecpNMBY1pMiC5Ap8rj8sTyWN7qNjveFZQSx5muNigvSyGueUJ1LKDKL2yVdtBTbtzhB3t5rh",
  "key17": "2odMy9S2pKtyngUFHy6KMuJwSnaa4iDgSk1rqwitTuREsfmWfWbSGavqGEHyknDJ7akQMbSUnW5b5eygCJrmSVt2",
  "key18": "bwmNU9uHkLGjU9HVJTrH4HaFHqJC4cStHuLJ8NPDTqe2TF7cHy5CeSiniimWEv9Yqdhi24Y7CPjSmp1ogjX9NU1",
  "key19": "3i9FPjQU7bmtTeZaarkdXzi9RtKXRs8UV8qELD5UZjLuqT9SuLwcYiUicHDUswDXXHvbB35EKU49iai1rH8kJ5Xo",
  "key20": "67NHj5J3VdbCRDLWdjrn9HW6frBjTwdYA2mGCWbJrtAmTTTgToo9oyLUKH6onz5McBVRkiEuaazi9VCD1qkeQz34",
  "key21": "2fDLA7R4mBKVBgM3kp25J69dmKaT6xdPKcfUXhWAKz4oLjGVMmV78MiHpM1fmToGZ9okn4z2dtLkggU7Z2djkG9W",
  "key22": "43NFEZNH28BkMZXLt32raJJTBVFrYHDXL8mPB52BTscWU6iDVE1Qw4VvADHhETdDuQ9CiXhJCvWFL1mkTXYHGi3C",
  "key23": "2E6LP3AnDYw3JtoqcDXsmhPvtxo3nPeXWGEm1XoUS1Kcuo1EeV9FNbzd839jd5sSVS3gbgNT1daWks4S8HysComY",
  "key24": "2iiyP1aCnJGNb5hLUMajFELFFHEtsiuM1bwVpU1EVWMTcMDuCCiDmKB8dU3jjcGb5CqjN6zBrxsz3eZzV5x35umW",
  "key25": "3PJwnZotcDdmavVnih1eFekQs1Vp6o8ntvW4DPoCHZHtkPmJiS2znb5ZaDCasMvT1sbct1wf47aPwLvZr2H68owd",
  "key26": "3v5uhuhPz6pkUTWNT8kEmR8qDmv5irZHwzYEYDz3Myh9st7Mf44spjicvADE9oYAkFypRj9nQ3DiqjVdfNv3c3it"
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
