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
    "VnorxzMvefDLk9uhjqRAMk5vHBLUoeKRZdaCKYxo3DWF2iA8CPriR1FXFVCVM6Pw3gkMwSBUkELP7UpQxEZhukj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rFJr9pjHRn22ggyqZaeom9xznkJNAmwn2FzQp2a6EfsMd5RkNBXYaK999pZ7d2VxG5kd2ztc6g7cErGz5ygnq7a",
  "key1": "58rRGv3EGVaHc9V3dizgMfE1CvDJ7w8x3ELT3Tfuvvc299mZQ6v1AVafbStt3mcDQ8VnvmTaSv6NgvPKh6rizk11",
  "key2": "41NnShKm98JAaXMohuzr5SWVuHxPRTL5H7hks3P9Yxb3XAfdE9uoChCWcvy1DiQ6UGudRFXaVM5LMoCT82fRpvjU",
  "key3": "2T8KbyxUaCec2Dtaa2gGTzvZR4mmEZBXHWFDkP4yZp3K3dqbti1VC5VgQq9h84Gvcfv1KqctGiFFWGN7vJ9LpkZp",
  "key4": "3VYre2L8rC2VyJQYgpmpyMyCSdq4AWisoxJonsfEeRcFGQetMhZMZjP4mrT9Q9DdzFSujDEbsceRsrv9HfoegBzc",
  "key5": "3YHZPBSKXEwpSvxtEMipw5PAEE9TXhBFXTNk7YuWLcVDT57gS1vEgBf51qwPqfzpnZ1WdvfXBvBo8N3LVbmAcjSw",
  "key6": "4R1jtqnQ2W1Ladz1WNsZkSNQDxWpjgjqbSq6xr58KaAENdzcZFLCFSu6iHrTHiy5jMs8Z9inVx7e6DHQiL1g8kNG",
  "key7": "31PuDqckcNKPwdVc8EyEGnHYkovvT4grxStT34zpLnCGxKyZp3pLaZXzzqeu5W5WxYo48eouSTy8s6fvxFxeBp9X",
  "key8": "5GaiZinjqnt5vL6Batjo9gW7wQGLcLwuFHPym7LdDnvuSf1G2r7gBv6fTudWoS2ffqpe9j3XKzoqMCGcuUT6i1fn",
  "key9": "47YCfWyVn6gS8YvfVb76FGwXyE7P4AXhLVXJTA8SriooB41XcvQvegpGgUhUSFWTrgmmLvH8QEwJcfcaFWNtKXpT",
  "key10": "5AySLHgLBDxq5ZSSy3CWzxyaTR8iTW9WmPEzXq2r5NuXW6QNXGnoG46czgY5PbMLUEonhqqXH5WNjCVTwMa5FaWZ",
  "key11": "3QkinYyhAfBKyk1Pa3Fsj5o7maQy6QZqjmbL5aSqQUwZg8JXnR1Vo5NQnhgRtX5FZmUwMaM1qt4FcWPsw1dfDHGH",
  "key12": "vfSqZi2nsickadwbnFdvFWBMtNMGtwZU5yLnAtSzgQ62No3Wcotsd9LFw2x78B4wA3o6NZpxGQWDiWxfdmgRTsw",
  "key13": "5RKnhuxZ3nQvgJU96dsWdJNsbKdeV4YExLSQZcdJh8MYqpYXEFEqnxTrWfJWgG1kc24U76Wk23aNkHAzitCjGiNy",
  "key14": "3mTAFLDgMThtCDX2xy6LHA72FNEVMfhWB5eZ2AQUzCNAbcvBsFXtZg7z4GdswWbSi4PcRYbxa8tqLukvJYQigESA",
  "key15": "5Qz1M14yBfQa4kFpbv85iCdaMJya7Rc64bGyqaPGDUFxFrGccytr7R91CSF3NF2CZUvzqMb1Egn1fa2BptHoyXyB",
  "key16": "t6MhT6n6r1GMyHS7KvnU14ECjpRqVrAr87oLmCWKa9puuG3gByTCBLtLbMuGJSrJS86wqsRhv19T4tHbk6i3ZAS",
  "key17": "3YtHsgvkiXP7Z6YNiAGwS3aTRTWufRXqeyeeFiQNdD8BFv4tdUCD5qk2gMAfQ6AehsHiPJqUCHdE6sVBfA5QdErf",
  "key18": "4DNA2GTNPDDkqkkGbFw9S5TghrkUoarjYomJqXGVxkKEkSQYijppiXRZMQn5iy6Gf4bvKXbTWsKUNRg7qG2SLP6M",
  "key19": "5UQU9qTXpnEk5jtLhvrf9RVemShB3aNfGT63KzrCMerrsYSHsmPhYbiviyn2TSgbt88XLwUVwwZcUCHTG4zbNs9v",
  "key20": "na9rR63ex6w9tBRMc2UX9RasoA4NXneqMJv6y8LTgPQrbLNtAaZ8Lr5omemSPqf4ifmZcdTUq67UyEfb1WJVq11",
  "key21": "2z7YgbVkc6PKHKWFxtQWgMYkqwQj81LiZtPoAqtyLQb63DtkphD9Nr928ot1hjA46XAuZfDv1F1k5HVwRAYWbAmn",
  "key22": "5hutnYyuE31fcp1ec1E1yf6C3KuhximPVygs63ZLY6UWpJ2S34fktiqZbyJcA5oiNk6mTTB7aBLMpHSq3agnB6eQ",
  "key23": "3CtQS6h5Vex6WyqDqKQrgd1wBpBC9ZSuj62XenFKEjQzstR4qmNw4bTGcCSsqiRyBpu1AJe4T9tngC8aAXh7TUyZ",
  "key24": "625zEgUD7NKxdocwhzWtDYaDYKUMnkk1kDB66W4QZbaHnzftefaRQwLGEZMmvQQH2wfqeDejuq5pFA5y1m2itMAk",
  "key25": "38sHN1fYokwLc5kaMZdNRXcWi7D5JLCUygnStvJqcJrLStn3MPXsMrGyduMM5vTPDKUoSBTTqwthZ1E2vzo3r7GZ",
  "key26": "tXEveoDeYqGHHze4VvuGMaKNyw7kkAM84Df5uGBswdStLRHrDLAWxEc84gaD5B9iysw4s2vp3nPRaEtod5kSty5",
  "key27": "5hjxbfhaj6iRXCRvQK3C7evDG7wyqkhLmDW3d71EYAGUw88CKQDabvDkAL8FyDTvP7qhwMiPzXjBn3Z7eMjytA3R"
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
