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
    "KqeJRY7mPEAoktwJFYSrj6hNKf89UvcDAXvNDqDB1UJToSpMSMj2feHWUPQavNDs23sW24wR4bKepks3nF7PBk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XomGP3Zksnj1RNyijeU394cCdnvegvpcCL2jqERC2XpeP3EM9EQWdS8h68L5Cp7zryQtx4HUzJBcQisY1iaKak4",
  "key1": "66qf1DzcwH1Qbo7LY9BRYVvagUnauFQwNKSb5FbiQmSFgC2sitUPUFUAfCMGbsvBBp4wwAVMTyjhzzDY2trVCcrB",
  "key2": "jxE8SMkhtgshkNkK4nVxW5DbKAhMM9hScNyhnmkwSfhvksxHHXirfcrcrCgsNVzyitGNUeBRwmyTAujt9ceDXYT",
  "key3": "4ZtHogowNnrJQvhB9brKNjSTQVDWwGRaDqFXL3ewwbgR6kAa6LkcQZABwehktMShfm5BRw9q6k77cogXzfSwEe5L",
  "key4": "AhAveqPgpT5SgKAgSjZ45hTcGFQNdPh2JGG7qPqyX96LUzNTkfHoqioyAoXb3rSSCCNLbTZxokdVufAX5J9R14e",
  "key5": "2QS2SHNR6UE5jHamtDLwSpwwJFfsf4f55yAMMxxVUGk9nEH5Hj4D5VywFK5jKG1H7fQVpWNLCHYTgG3vHQz76Rpc",
  "key6": "WbmsbNUpCNsz52pGXXVyMedBki7sRzpUoNad6Gg2v8DzxsSZiJh4JoWE1sWHiMCvGE9L2h7QfSX88t2oQKeY5TV",
  "key7": "5yKBZYCgCRRziss4RHU8sE6KrbmcWqKiRPDoHgZm6j4VPypntjy2Yrqba3nuCK423gHKZN4ZEX3kcBJHRrNzc4yh",
  "key8": "3aNf9uqFpdQ8iucXED7tSvpRSCfWhNQo9LSNyW4DXdH5qERdCxmBvCuRrQeYM27SbSRcPuGtBjaNVsSqUHauBPev",
  "key9": "2a6Njk8Hq44U1ethjafD5FUDeqm1Yut8LyPh3XRSRBTM35vsTFvzNqB2vjdVLW3mCRMAMHRKgCrDgYkoLxF3QEKQ",
  "key10": "53cD4ra3whCbGzGXUWpWH8r48HbSnCmJJ91h9qrhSTrzgPf5qtfRtGCFuh24judLjJj5c5VfEAoJsqTT9jeVbh5a",
  "key11": "45sfbqa27hAC1wjRvSW8Hd5op1DpaB8ZU5yY31j1QjKQZULQW3dF1WnQRYz38puXY6fSXT9po4LUhFTavhoAQ9Rm",
  "key12": "36YYuo68kZQmwh4HHay1RxMVzDRP7cGA4QeqQparXssAw73EoAXqyvjLs4hviuKre3CjoftogbvcozLS1unqwGcp",
  "key13": "sBcv46S3YkYA62KQLA34kW763nH5jy3DVPCeN1ibtCLvY99uMjb71C3wXHAQCk1bWaPxFoQheyyqkcKPbh1pFWa",
  "key14": "5Dv8LXzBVfnN7Ssqz3ZErujDvkZVDmZGxHBQx43mXUWMQHeXKqdpbmKnQ4DoSZr7jkfxThyzGyoBxEYVPoUyoP55",
  "key15": "2hyvg5Q6HLjV8guae6NY5UbJrGkPMqDtBuZ8eHubazzsG2PPYovEGAPJSLiA1satmuwQqgLaQ9kyDXyBYkM775ve",
  "key16": "42S45YqnpdNUCchE7uzwy6kFqidJKnzXLsGJuegZMJUq2sRZr9pikxvBL4xFCE2ToNGGDegm76afV4tJqPLzfhAC",
  "key17": "3w3eWFu2eQ3nsACBK5KUgNuu8wkrqnVJCfvJUWN4jmooGrcYBCDAUX4pUGG1wzLWiM7TXrKwu9hzZtqXEvh6eXeD",
  "key18": "4cMrhBygJ8MW5q5Mi5NtaKEAToHq4ZrcrVj7RQwNDi8pZX6FLvporcG1N9VXP7GiUkfWNCRqkjJCMbb7oR2p5hiN",
  "key19": "5f2JQdQQdCyaej5bXSAkTf4LmoCX1uqTPNmDPHmNFSudggQnbecKEbrCt1vq5YxVvNXnMtEGr3q3Tif7DpHgzrSY",
  "key20": "2wk51RAHNhWuES4QVQtuP4sZHbsBQvSpiC9h2Z6wBPDRn23WKm7t3bnfm4Tc4TBb5z5rW2k6Qqq85NB2vj6mbYQx",
  "key21": "5QMo5B3Yznz9wJGaKVwoy6apfnhVh6RDSuLYiuFRnuZPCwamyQnMNSnqfsvuSHGEJTa4NQ664AvfYnCa7gL6ogoP",
  "key22": "4tJhekAbDzCD4B1iTmR83UVGA72Dz1o8P77cF1kMttL5x6R8iQctD8Qrsb1GpPrJ7v2cp3KNTfaodBL6NdUUea2J",
  "key23": "FfjimK17zxAfuS6rejiNbMMLBudg6DqbqrqmPvZkuBVVoxjS4yWPpz644RDMLP22o5vpVpsCrxALqoMzg8uibmE",
  "key24": "AtMWyUzD2BANZ8sDgFMZLF1Ry8sDFhSWTogvTsEkauijMYa6bHENShH8smpDfNkDimJKzFAVtwuapcrqVGgvZBG",
  "key25": "4EKFMRMxaRU5F7EUGSG7HPesazjq4hpNDcTekFG8SirMqSrw4Txj5pfLGF9NWseKv9gnBbGigh2dmzCnLzf88biY",
  "key26": "4ZR3idPXyAV35JSLRkTePH6Do1u1XGnzKzDoG68jvHCzSufs69myfBrqeTJ9ABRLDuxNdUhxY2G8YpWdjkWhMqea",
  "key27": "zKMWwp3skeYu4XLmH1xPvsoxwkbnUF1FyVYo7huK9o7bmG5duTURqQBgYb3N78pszfqe6YWHuGd21uWzya1i1Se",
  "key28": "CExqcwbRdoQyTZL81kawi4kq9N2iUbogpLSXt3YxojpodUddvDC62HCdt6DdDFAcga4jsSB2HqWUBb6NQYTFuSa",
  "key29": "347srFYLM318Q77pzAiUiVzBFjNNALMC8zZovWp8huTRwLqRrusycbLUwYnt9Bd4im6A4ueyQ6d1oTb6YMeytsBH",
  "key30": "5m1D91UfFkoVWkb8cPN27JiLGSk1qTCujgpPS4w91dNxKbTT5R43hSVdpdkGkCDTeWRVLSpgvjg55VqZoBtbHvq8",
  "key31": "2VTdF6hhgLUsUA9pPkABgo5MkwBJ639X46mtwQqSWngBybPuPUnEMhLyA7ZUazYdbJdq3n755qts14PEoYn7VJn2"
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
