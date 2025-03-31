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
    "5NRJaGN47BYBsEVqdvSLaRaGRbJR7GbBZNEpGufXfdy5Ex1wmbZr1Z5LYRPoimUVRbTSuDZ426TznfFYYah8roiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NfK14ZRoD9zNad5DWXxVPU26QQavWpsKpBtgT25exUr3zZxrWLFGNgoT25GazzKABHgoQkWhbVNReUKGbW76eDM",
  "key1": "CF4d3tPBFysvfkheBTTSwWMdphFTtGZf8sf5rNxJP1V9CPkQA8SxUxpCCFMSUCm2qwPrwSDRAGGsfECXfkGdbD7",
  "key2": "4BjYkNTAUHrQYH9EyjC12wdvcpvRaVQB1jVR5jnMU8vLjLPTHEmKukAuFgHf4WCw8So3jmkKYgnFRgvx4R5h62Wf",
  "key3": "41U3TaFsbHgRLjQcK2rWPkAHw74qknHY9otNu6hTGatMZnipgaubMTxKB4iYDbFjgPBSf3dAb8SjmBXyFaT7NTHi",
  "key4": "RGwdq1MYKRmdppeAXmrdndoi9HvKPk5ZWRf1BzQEdCmGGceJBY8BG3AyEpZFmbv71SEdfzMPoNpX2AY1hNWVnzc",
  "key5": "2WqmsbbUJFGbdzo4oLiBcEKmXQzDqZuZmko8bNFb7Qwdbvki4HUqF9X86YrFfPMyVM3zwmhrdwLjrU6fTncLeCZL",
  "key6": "5fsoTMnng33vzCv768DyH7R6jTgzUegDZQFhKcE5FbEJ2okQvVNGrkhXjxDzADeENKRHA1kvrr9Uzu5ZtWJ7gXCy",
  "key7": "USQaNtCbdtFoepgQwY9cfD9oLGC2ZbEHA8aXucozthwPzygjsy5hf5jQ9u1xXzxJD7U44DvRfChhA7FWtmZgXWM",
  "key8": "4US8qcmXWVH4NYJXURUbopMJ4mruNoWEgD3uKS5Q4S4mmheSpQv7LdZWr8Q5J2dMRP3oyMvWnL2Hogz5thhr3CMb",
  "key9": "5p6k6qWkN5mXWJuCsyKcQL8BDjvXDY2uU8QqUNMq299pVJrtt9ryHo9NAj2bZgN2sMHfe59uwdShBsY85y4LmTE7",
  "key10": "58np3z11FRzmaLRY4XNzcM8x94crSFFQSgBgEgevXgyQU9SLEcTP7xETHgXdyP824GwV7e8RoneUajTABC1jwxHz",
  "key11": "2qca1RKR1XB68FtiwtSKebEd8mtVm47dAYAaWQuiWqzmRgTBkrsddXBPRZ37HzvxVMhPXMoftRGCCVLD1n2Cd4Jg",
  "key12": "2KrohJAkUNsfBLdk8KvFCKihXEF71FmkU4wxDHMz6VkTmboYcpjpZEeN1JYCJ2YaZJoqSr2Nkb1ntaH6ge4K2WyJ",
  "key13": "4tvuSdqPUPikxyW8pEfpt3Cp4qfZgNoZZKqpwKz96QofAW5MWy48bph76hmh5mNZoL9Z4YFE7nqozQEKPm3k3EPn",
  "key14": "MJPksaMqXZ1XvqWtzh2H9zjsH26FTtMcVXDUFvFq3AxwNyCuZ3GUt9Et2rDXprzCnU5ntoAVVrYahkX8hg5r9MW",
  "key15": "4nE13AVG7fMDVTsiVvP6ij4EaMYc1wys15CRJFKfCeBAhtL6iYeUpNCVyFMJ2w8RQASrNCpwYWp9FMQAffBSjaqp",
  "key16": "2FQTrqpBeVTJUCEZJu4ny1Q2ajHAsT4kVKchsjMcMdZjX6z2ufcRX7fqRMG5UYNiznjNcYsTJg4sWCZtumzQVwiF",
  "key17": "FsUAx8e71p4e42njxkRK7rahbeRSB28BbHozzLVXDU3pmuu4J9D2S1saGvQrefSzqHPva1sKnxK8YhXsjYG2NFN",
  "key18": "4G9U3qsELn5NLe6nNAX27mD8C8kJTF5mweYDVGWPrT53bMRUQbh6UMb5n7HiCW4BewFfNXkh5aqafvxsWU1Xcmh2",
  "key19": "2q1JQpdtQWgkjrB7yipaUHwgpgnFmAjpoc4p9NeTEiAEpQ2udfBYPtHpEB4rUnafjqqvUStDGpE672YZ8kGDV7pT",
  "key20": "aFeKFxugyEY9n1r3KSuUxtXQGV8oWM7wiApptCKMxJcngHoQQNCbKp8crTnPHZ3kDF3PM9LufRr64UsJ7D18eZQ",
  "key21": "hDZDyY5RYqHdbuDCnjvkPmepBjs1uB1sf8hqfDfM5uZo8os28EbycrjRqotit8AcB7J7hiVB634PWRkWGRHwhM7",
  "key22": "4q7dkSKdvMNkw8ZLMYUELUZVanDQy3Vdeiru2KF73ME5XDMbJJfAYhNsmCPMQaR2bUZhSyQZdcpFiuw4uYBVsR5T",
  "key23": "3fg94hh1GoJpzdMKomGAe7kuVXuLJHzeAC7JMzb9qnNFuZMYP7DVJRgyc3UWZzetkWHsHgaz5p2ekJNgX7VqJk5U",
  "key24": "54y3iVWDvH9GWyckC3xjjmGvRjPmrnuw3UUXm9gCxqvGbDGAix8tQkEuypYmvqAJ52uWKQZTvv5W9TP4jDcN7T8z",
  "key25": "3Ph1KmSqFHToX8fV2Nbif5csEKxAK8x7ZsqscmAd7qnh5GT4pzYaqPcCq7xZsAGbpjRnx7YwjeiVDHSbZDRDXxfp",
  "key26": "62T3WvZFr2wWxnZYSzKq1oM62aFbPtJPus4xe7jkomTgS4DyfU2uFyF3XWLWMQSzFeHUXxZxhsEjkgWf2S7graLi",
  "key27": "4zZasNeH1xd2hoGZ4cK4bJ1cNUGPYSyMPweSVYsBEDVndSd9whnCbBnn1ReF8dNmacSZuesGfcsHTc66HUFdaVqt",
  "key28": "5ZaZMpYXV2RsPcbP6WxDqAdm1V7Qnj5jHBDgr1P281FvseyobD55hYPLW8p5VqKLiMNoZsR23hekFcyR9UX7KK5z",
  "key29": "YSAtcrypQWNFuvXCKNBKwQE6n8KbzXFtigAhCF35FcenFoFxBzKPgB2HjoLdmzCh37ZPKTuC2mXFBAZsfBQnPFz",
  "key30": "5CLkq8rriW2ExRVa6ERuSnvWvUuE4aJXrXxhtTZvQPVrku4cCT8FNKkBpFtSDWS8bTMSFkuWxe1wBiRQX97HmVs6",
  "key31": "52PwR6aAM9JNzZTuH3obsxtxmrzGxgUYccEoNSgKe7Temp6X3MCkU2DQ5KLo6u983SXYRozwxB5T13z15Q6X7MNX",
  "key32": "3MBBpaNtAVCd9GVuRhMws3kgXZmzckWcgzBSuyDg3HdvHe2R4DpGym35sMQA3YjYHgBs6JF2YVv82ADcGFZZNXuk",
  "key33": "3xAu9YsvMtB2A6RvDVQz539QwT2CQYXHRBPnM34ZFgTUdts8i8PUYodUMJiEfVFFUekN3wfHjG5Vjj2iLmP35hKD",
  "key34": "4wM4CXt757AfhqiVQjjbDzeVPEnf7i5ohAjBAnRMXZuZZLcmNutwoLBQTkkVv9rmomxbu1q2NWfNQJNv15cvQJfV",
  "key35": "4iHTuLg39QioXWS6aYyKVzJNsVJv2wDPNiGGTVNUxvTPSVWTdGXyGwQgBxhfwWHFZVcHxfxsp1tytyKRcsWvawNS",
  "key36": "5ZGtvkDw1hwHp6YBieHfDye6try9ZQE9NjTKJw391idYEz6DduU6R7oYaoMy74ifdcS3Bpstrye1ujAU1QQthvFm",
  "key37": "2CJKBvfTCQ9FWfhjzp9W1n4D3GH1AxVVzjSa87HYPm2jDTtdP2VAUBbdQdMr1vt7r1uEkPsyDxSyDDcxpbo9mBGg",
  "key38": "eKmqN2UN5gKP2nWCHg2iaShA3fcd4FgyJzkaNokyztsZVp1r4EnhP4ZNTUQeWYQ8UyKT2kb5BykGhk5AB1XkwF7",
  "key39": "5v5Zuj4NCAi1KdTChjwHpSRiiUwLtJcrcpU6og9FwxPnzeqehmruKweaymwPhuS8SVxKeQPAL3GE18R5jEh84eHo",
  "key40": "4qPCRK2AWJuVw9oN4S76FHpiTzTRke38nMjAYA8Z19PUtNv97wJLsS1X4wM1SmV8eWc7jNfpEhuWi5A12RSKSk2A",
  "key41": "3SeHMcv9QP5qMfXjCfQHSPdKTeRWGW2hwnpeRNvWTsu3p3mGeGBrYe8c5KhbSG6W5gUVtGMLvcE4yjxfggGLjzKH",
  "key42": "5LqvshCb4bzTyHKpU7nCWJz1Sz35WFaF7PV6YaEtGHJNPFwvbAkYFx5e6N8psvtomcjzR8KffNpfEVuxYnDt7Cbe",
  "key43": "3nrSTscTdo8obu95wEr8EuTRPsmND69NVWeeiVVfs7mZsH6TRtsSjqAAvBxruZGuu9vvJGW3yriTSWTcG4UVKS8w",
  "key44": "2B15LqRAyXq3PqgdZp6XWmNkf3khKHowZcZ1YYAiWzzcJUCxStHdpVMG8Bqwt49gbo5QwMQrya8ukJ4uJeJs6bwA",
  "key45": "2Uz4fc4wU4c9KVCe4ak7KFqGDHov4yjjqnsRCAXVd24yvFDSYUmaeKtP3oxzSF9PjE92UHGUduodZmFAizd64KKb",
  "key46": "5eZ3sfLchqmZjcaWcgLycqzJn2mhPFZKgqEYHf2HSkw3iRyMb5MZSstaC6GbSDHt243RVJ8NVCNRhmYibNHnxYEm"
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
