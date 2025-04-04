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
    "c4hdDmyV6Jum5XHMtyHMg4yPtsaqfnHbPaNezfXCkSRzitgiGHzpZBQimB1mrGhyfCSs8Mhcm3XSC6RKumHVNQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Dq1szvDr94kqd8ci5DXB9xxkUkzXbYsqnCK7btES8C7BmZ4vN7uPfe7vzzCAtWxAVymt77a5qt4QbEvkpGKKYf",
  "key1": "3HvNXG4VaYA9FyFVURFthgVwdZT27mAYFAUYtvCwdYB9WVc7GGcSQapQ8qtRqztcRTgkgYcEpa23dTbH63x7bvYG",
  "key2": "hMz4iEYE8DBaEbA4j6QBy3duwhWyXCq87iSHxwBC39MbACptPQJ9fe4GaPbuHVgamLokyN3vc1UA1bAYD2eDHJE",
  "key3": "22QxJnMhrHXokGvwZKzkPK3cUAfsf62zbLfeR5ZorDUYfi6MyDTE3SUn288JRHWQSX1nw4itbX3qUn9tJ3sc8Lfd",
  "key4": "ngo3kLfuc51mWxWHBPVDgSu2KD9VgBRdE4THPAnFi1MWAo9sJRjCpTrye9ZDupA95MrKfDNonQ25GM5m6VSD3DK",
  "key5": "CBoMyQFsXXXKUaDnN238iESVHLuZ9v7kpFbJKocPoRLnZgjbHLmgyWZzikufJovo1RD7gyw6ufF7eQoRFWtUBPt",
  "key6": "35htZWE9yoXCFCKAJnns224SVvmgMfF8GUxjFxz5rDReg3BcwvMbzXCJ8dVHVGmgaM9VMTkFk8NpJrh9pbXnb6EK",
  "key7": "2LSfUmjnEUe5DpWW7yoxFxrse9SYX7sGx3RKuGCo7TqhK2U8CPcbBR6SQf6Y7xK5w72twkzKiHXgrBd4guFdbDNd",
  "key8": "3zXaNcSD7wdmau7BHrFspcmPN3tFKhA9v36rtMC1gkaXoN6BpDWL1mow1yhcgmy2vhBNbFhyGg37jsFdtVFCZSan",
  "key9": "ff8GgoVCLmzSWzKCJVKavMtZ2cVB34uVhBt8NpephTWhmr5oSuJGDFHiogJ3YuKtznh7opCxiAiaAMGqeZbFJWu",
  "key10": "zwLCkVSpUzGfDCQN343j3tysfEdi3kEhjnzjckRupEo5wG3V14bLJPUfBH2W7q6zz6p78aph2dkaYBm9YfVELmc",
  "key11": "36mqw323WoUethKsY3NHgvQTrxbpqAGjEY1rBez67KfUdVYx4uArPkP7YrD3FzVBcTvSu3PdAKuLi2wu625imuRC",
  "key12": "5nMbdQpjqFuzmJdXsoRgyftdsN72aMDuGhZLRFLsKebmmzcqJ2v72VoLCsVPThMBMUcBAaG13rk4drhyvuxXF51T",
  "key13": "5stURz3naLe44mScSVHRBdaJboSkSU7DbqSMAQND8uujaycr9HaSWuM68UnFwoWdYhc2dRFgQhVo3RJePAyGCHHe",
  "key14": "2V9KEEq4LvF1j2xLEWgi9WrB2ngEm6aH6LuZ4QePVMCNPVW6E9aGaPwc2TaeGmzYkKak37to77goxxPQGFGiRGMw",
  "key15": "2Tpb3yTJaawNMoP1o3vHVAzmgP367ksf3nVnR8iMAnKeXDLskvw4hC76dBCwjJBgQoNTdDJf7gFyfoeMn3nFGQvh",
  "key16": "3jkgkXbcz26mEGm8gbqs9CBFK6y3ggcXEvWwt92qxY7oy1ZAdtBPwT4UMsFdXQUgf7YmrYZi81DUZqTFwpKY8jAV",
  "key17": "GqcW3wDYdkqz4MMLXSAVCwb9MfCynLN9772bsEFBYB9Q2otiyXitPYTK3Xc9xWz5gNHt8yy9HMUeYG3pajXHc9X",
  "key18": "4GWhi8At2bwKL8XT1XBvD5Gwg93fHYijTKtK7FcF5TZmRoK8wiiwpgk6kPyG1bxCh1pwXNqLdAe6fNg6XDBUBBAe",
  "key19": "2Yo4HWuM5Y414SjLgeqGnddvGt6fEgpm2QVefRY6DrqUyfiX7YUzvzRE6HRGpE1QaVdB1HspVJv9g3d4az7k2n1F",
  "key20": "2pjhLAi1FRkS7HQTv15DVeAMpfQ36Caq4MSh7SRa4RcYBkDe5vKM7ev2yhnSXDHZ8ukVJ22j56n7jrKXMURHsWFN",
  "key21": "g5n6fjq4zNnAo3TETCBZ8EV6QmsFbRFWZLsqEmWjX8YF66baxEPMUA824bAAKCMf7kSGeXwFCMHkcCCNBYyjkyV",
  "key22": "291h6b8rHYCw3QitdTWthzqYss3LNxqkAnJfytWTUa9TaoxksQ8QL9E3nbkwPDuTQeViYzLM4YmvPD6f4kZzmeom",
  "key23": "5sadmQ4D2bS2ncWau9TuySv4yt6FmYuxHFY2HdnHJs2aSVqk9fgzEkBczYCsuQkxE4cbr9UPX8p2ShYripaHtFhk",
  "key24": "3DhEoxKNaSkH4suzdP7pEVtR5HCCpwRzUDhc7W9F3j6eRa9ZDvgZnQBvhfWhWxihQpogww5eULXmoC4eAWSUAe2q",
  "key25": "3kuezYrGeJcyNCDTzwnhDSxUaF3Ycs3PeHtb5b31HbBXWh2L9bnvLiSgUyeogWLx5HdFFWPSjXybo1ffva5VzxHa",
  "key26": "4R1YxQe2Y9ftJpVX8iKHiiDkxPBPHsTTWdLgGc5eyc9Nd6htNBqQsYDVx18qxtbD773fhftS6u2UaWpLbciasxzJ",
  "key27": "WBeCZb3VShaX2BZ1cV7bqkfNRGxHBRe6cvK1XXo9Jq3VjfuGkhssacqNmyfV3uVWSvAoagP2PEfX8dSHjRaM6mV",
  "key28": "4rfGGDokQvBh3eyi1NqmbzGX79EfMh1JvTngLG5MsjTsGHasWETbzuhVy3NFuWCY5MkNYiPfPEfZi8ghi3WnHmZq"
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
