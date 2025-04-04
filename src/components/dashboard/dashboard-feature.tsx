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
    "231eTCvYJVAnCgRLVBgpTdKwAiUvGrdJfDMVeZiTKWCxQER2QgaTTamZXPrc9RTnF3mH3YfYZbcz1DdDmSmUCEJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "357bunTj4TZGdcVbzvUT6HJ96yybn51ydwP9oLg9h3CG6Vj7fgW8ZWnxfVooEXUiW36a8zai7N2USQNsu1ERGFn8",
  "key1": "364rXcPoxh31sfrHAjJBBAbgzAVwZHcqL5Ehzc8G1mrZvH47XCny2J1RCdzYsFu8pAtXFA5Gp3H5rpkMPLE97GQ7",
  "key2": "5KWgdditbsBdHFHCRWBFoA9FyvmKSYib7S7CoWuci6Gjuz8dVoeQmUxW4v1UpmCLLD7dqcP7r3HXVgHidtqpUMQ5",
  "key3": "sXeaymm33DPMKHu6Bk3pZEA9QFvo7wnnZhs1eAVMEuaD84dx98v4rfetyGFMMkQdMZvjttjsQPPMUEYE5VmsH3U",
  "key4": "sPqhmRexAxu1afN1AdNpwh55qYp6E1kuL4gZL2gbPxmkFxwU2ZvzxwodnRhUP69h5iQg7pquEUVavV3aYemVn8M",
  "key5": "34pBTnHpwao8D51rf8RSPEwMchNCnr63F1X5Kjcp368agsp7JhVjYu7HfZDVbMvLKohST7WD1dbeAtcnEPYHCsqt",
  "key6": "44m72gCEzWYKYBLUCuG4T5vWkVQUEeLcMMkPMD3k7veYtRkTAc6dg4vFdKKyikP3s218NB2HsmW4cNCmrXERijQf",
  "key7": "2Qd3axHPf22zzLaDWxmKNLxfwFPy7H8rAEH3nuJfWnSe3DWFwEb22My4Mp3qSFbnTXgXKfbWqDjWK2s41heBzeCF",
  "key8": "4TLbqs5fHAxJTHZCw1HbhySLTmebA8puKhcb3xcAU8SCvQSjixXSkZjDxwn214AMN3Ma8Tu6wdgW87XeBjRXWdVk",
  "key9": "22Wu32J8SYDxcUBahsDY6xduCHPDvXFRFSctwiMfytAUWoyKu6dhJPoAphLvkC2Q1Pid9xkVy95usW2ea3TRodZx",
  "key10": "47ywLKbnhjSBS6MvZb2inSZ9GuJa6BC6ckeb4pxPBX7Fq8nAHLWn9HRXirXwh89SNozqVHNeUGARmzCfZGGLgyAV",
  "key11": "45zvKrmTwY88iJiWRJNhYucXBhXtnVVEMNEpdvM31xdfHcGMiG8ZHFVFoeUYHDiBrBK2EJc1wrKnzx21trDAuEg6",
  "key12": "3hHCVX9BvN2iMtDTgaxnRPnSAXBR27a9Cj5Sgo6w3UsHUznHkqJpwAiyRJ2n9h6D4EBEnAoekp33xqwNfoiEgmZd",
  "key13": "kLpPP4ibZcbDBZfHu4WEsxzPW5cFqkETu2zAmHi75PpRSqjxpnYaLqksGTvCe6zaYWvCmKoSzvMzK1A5PMEUHT1",
  "key14": "5SratPjtu5bSrqspZsc52e5CxU3uqqqn4tVHKtP7ZsZwhcfrZwe27USFAWEEBHbobKdUurkHYMu3kByb9npwnPCY",
  "key15": "4tmLT5vvh3Nwiue1CWP6SSbwbu967Fc3e738SgfN2ouWmxWcrTqVZrQidf2hCQbbyGCwkVggCEivs7mFJBHxcBj9",
  "key16": "3RDEuXCYk1kBQTqDMJWb4JVLAQ37oipXB4NkF3bHaubjJax8w2h1meRg4y6QhiGyqhTmsdfMsGyJJsiRa7TeANxt",
  "key17": "2E95gi14hcMBBfv6oFRG8R6pT9SavoLvkDE8dveCAoXQ3SsanGYHcfp1gtEN8oByU2r1KPfxCh7qoYhQrpxZCjxY",
  "key18": "64hPy1wmVhPPMQjeJAQNJBhCJNsBjMxPKzYJi1Rom6qbkHRp7JCMNpCGZrJhe2WM8Ey3RDVtvxyxtKZh4BBFKxj6",
  "key19": "3odD4fA396PbH1bP9wq2udB6yF8GWM4FopjhrU8B11nFrbNVaGwani4oSr1yfYRmRCWsUNugqhzAvhJznEno1pUh",
  "key20": "2mz9YkHRKKoGyvovHJprRQioREJa4vHFL51nLFSeqHcpXoFfAmPa6H9t9tvSPfX2QdAaJQEUFRW2j6VuvMVoZyuT",
  "key21": "4X42pr6xY54C1g8fFpasARtrLnkdkasP9cp8vFkZrCYxH6fEpXCddxMzKJ8ZzcTnTikh8EuQGd4o1B1jYCGEwTm9",
  "key22": "qWuYprqNqwU3Vgm7gDDuunMeid5ZtucJZLXAPULUQpVMhhnXdw9qW87eK4Ex5sFXR8R8Mwk1VffaKYqSfaV4nZu",
  "key23": "2UHzhmDwhg5CSejPCJcACqRqUre7GorCFT66f9AwT9jHw144czMBWPivCaNQmF2V8pRDJsLrX3n57ehtCZoGiKfA",
  "key24": "3ACYeH5ArgUqEJHwACpynUYcYq7DkQaECePsmAV5pUMYa6Rk2YD43ZBX6UGxTVt5DxbxLPCkHoysFMsrS91nRoKg",
  "key25": "3HP9BmmV8ek84YWAmn3ygp1m6Hx5T6xC1tzN7c24Rez2kKz1Hwg5ga4iN9PWosveHLHFkSwC5sCy6XCeev7uKH7n",
  "key26": "5Xp8E14RLH8vzCAuoRMrwrPCU5JNURyekbd9D86ogngD8ELYThypFyMwHg3QQgFbqVRedpaUrvVBev3mGWcDe9Mi",
  "key27": "F8gGrzasxxi6zB7z7dC626RrkwJJtEatHvcN3rZ3aywgyMAM7cMDDYQMQCmMzLSgNnLbVEBR6W7KH53hHndJRXs",
  "key28": "44CmG5N8X3LX38piSSMjkGCnGfEXXbSC1Noq9CFoaYQvDKC6hQmTut5PnZ3qifUBCHRznNt9HVMiSwuS22iGYrfn",
  "key29": "2oTBzA5Q2DyLfuPXQTQ75mHJQ7PTYPuDKX3Fe1t7Z1QPvXnGrKXUHJfu31QNUTZCitAdvM4Kfd5e9o4jbau3coyT",
  "key30": "2JyE1a26v34Yk5YPWyAzTjdj4UtBByDXxYmKQ8FKnzqRHW9urfEr6f7KceA86u6GGMARo36ELBFT7PCpwsZQfNs",
  "key31": "3bWaJYRcpwPBn58WBmZqoZQV3WY4Zr26i84qFBuMpZX15kDDYyLZMvFVW6WF7o8XstmQYFBdcY1RVR4fbvf6tmM9",
  "key32": "2iQteeVRCJvcTunKzuQ4N9nSZD57WvCPGX7WG5W8BXeaygbuXAz9JAkyXD7GvjNgR4X7PycmpQtkNtDGoSWXYBMo",
  "key33": "66coqBKAgovoaj2Zs6TXk5LvB5D8fXsQyJVFHcyp2sbJZ9B3ypy5ep1C9K2ihoCVLxBnKPMGHQy52B9Lk7uB9wFV",
  "key34": "3NJ6NTCbyMBRV6N4BnX478TjFMXNWWEPMNfbmmxWzTm1YxoLzkzVZhYfVSreV5sLRxtd7aXJhhWndPMnNSJvcHce",
  "key35": "2tgqu69zDDU3Q6SXRrC9YduPNbNUvMyRSc7C2mqKwrAu3LmiPPkBi5hHRcAX3ttBaK2qXqFFVkDHp7A4t39aPnky",
  "key36": "4QwPT5dFXwTQXu3KmMLTVsfp3FeSCZ6Rf2LSZPEf9cUavYV97EmAKHnRN6eSAMAyPdj1kqWynYXTLTsx9YY51LDi",
  "key37": "3NDPv4C4TtUbHVd4BacgVzkXmcL2HriqTForHrjjRhcMHg9XezQWzPuNKqygf72kUUbHvuEfntmYMwegMRcXq9H3",
  "key38": "2W9N2YrpqZXMSWL9dqS6ZdFHAp9uRgre95CHzgj2ryCxHdJcDrvM7qmaiu4xJ3cEoedzScYqcgpHDgdHKanrJoER"
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
