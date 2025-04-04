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
    "4Lr3Ani9rX4rCgAG3pNkpnR5byfoN9uJNnJscVJhmjDYoGji5Liwwy5una1jGU3dVfuuzgfvpqQ6WournsMms8PE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35tQdhJHr6UKhbxtCZnvq3cDChu8R7ttKS95DLKJdaZEk9DiztpnTprAixkYZNzbscqSU7AJfigJ4dTAxe8VV1j3",
  "key1": "34LVf7vPRJBb3BUDtGdhEKw1LYxpvZN2WF7sy91aaUtrHxaXxMuimX48fCeuw1VsUK2fnq9BVKE6bqro2VtPH2sY",
  "key2": "28RzzZMVZ2bHM5kEGgen8Zk5UsrZdNAhvBVA5osYBFtRsHmWxH5vMHB5hqdMCJCEfkP7AtLQeA6QUyiPrQnbWzWk",
  "key3": "4rNjx7g676vZ2TJsTUYUdDocWfff34fzs7Web7ZcfXKxfGZeVKycHbNjGuoUzMpxvfeoZCSTuymLCCQXya1riuVi",
  "key4": "MhHdo7Qqf6x2HX4WMW3tdZLAvtLvkWu5gURL5bUcEdCtfZ9uGsRREevZQS2LfGDrmzX7ZrVVaGLzWq7MkzFQ798",
  "key5": "36WmsrQ7R1P87ergQcbinhux8Q4REC9FJfhgkuCeJs8PYXPMm92HNvoqY1PF8YUCHVJTejHsbqUpryfDDdCPBoyT",
  "key6": "sj3tPuo17HAUMZSBF1eBwD9WREbVYkhbSdtkGQb2hweFKYhtRjjYgUKii3T2B54ghHfKjbSGskCCU2p8gHAT1P2",
  "key7": "4Jdw8hV3qc3tnQyKZiRjxeyRR8Cn2f21ZrJjNeRWkhQF9CxKSQ9Ced8dZY9GkjevQF3E6w4a7LujWfQNUghe54kN",
  "key8": "ifMeNLEk8UwZSh8bmBQJJrg86tacD9E7CRcDA4RAQVA8wkKg6kd6RvWLDMWt5iBnoWFtYYKYPWcNSggqsJFyLp9",
  "key9": "2cRipkK6x3GA4CvHNDixEBx7etqbiKjo1fcipfiKLr35ShUCwGteoEusRW2ooadJVFKuJfiMT4JhtUDz4R8jynEk",
  "key10": "5vpoTQwii7fGaSceuxQFvUhyrGadrSjbwp7j1aoXdcdMAUYFJwdKsYYT7z6wRmt54tTiim5kR6GQT9KUZ1rvqGhr",
  "key11": "4dXEZndQdcTpvAxUX1ro8pVvaqRfjFvgRjyHVc5xoK5BNxQzRUVRQSKG5LhihsVs7VhurkTv7GQAL8agoPPjwCjr",
  "key12": "59xGHm1E1wMMv5jenE8VWX34qfhg9JeL1dTMoxpwdEUbQt4vt4ZShbRo3fiJe9WNUdYN98JcxYHLYna71uwfawgs",
  "key13": "28CP6Qqr2NxzuouHmnwoq2UMD5KgXAwF3Gzxuvdz1C1f1QuGPVu3HVDhHbx1CwByMoqnjnyfWSifRNtW5ixFG3xh",
  "key14": "2mp1u84CfNMe4WfcBRMuE8rs5ssMrJccyKceaiFDBWxeuEwu52YVWqG4Ca8VpDntPgd5umutwwiBy97ipXPBduJJ",
  "key15": "3UF47UCP9ogLae2gEYCtyeVUtkgMMy37F2XrScYJr7nFRMHFpHUURqEd3oWRTCSc3wGa7P8BcnepUwviJNrbR3Pz",
  "key16": "21qKYaQxDtmduWE9U81G2sK9oSC5D82TUdJHDkYEUCE1Quo91t7ruiCs2f31TPQ768NZcUE51M9RmaQ78SeSHi8g",
  "key17": "5kmzxQVixeHEGvnwRKvxQVsWdW6zXgTzXwupvD6fZ71YD6CSbXK5QBkqhyCZ9kCjSNJqQxCTsWoSVHGz6JoKmyP5",
  "key18": "5st3wsn84AtSe4UrEGdc5Qo9J61DCNNroCVrQkbMw1dTMcB1qXeCiakSN4VCA3PCb6vMtz8KeqBu7bZw5PQbemxC",
  "key19": "3UzwcFETo3siovYeBSWPgQ6Lp5UxWNzLK3MAFXnWz8b5H8t8cn13bncU66Aukj7wX9Jtx8kZEwyU9HKRm9eR9VgV",
  "key20": "3Em6GqmDX1CCvEJYko6Qzqnrrc1u81yke9V9t34S1j1K8b55GPbiTRMv9pUZY2hjzEEuPdU7DtcYkkBvKfKMiqiW",
  "key21": "T9cChf5uA87dj7dFWD6XCQy9aS7fT9wqAm3FDSP8EmrLvtaKXcJ9m6qYR6v9qLuyphnz8jxR69pf5epiM4xFpG2",
  "key22": "4sdWATazKCwHh2X7KAegQLH5yTqt8obHcXyTJQ8juPDEzyV8PLg4tyHP82nqZnusf4ZecqVVeMgEXTnkeDzv4SJU",
  "key23": "HRap3ASi4qGzdAMjHMmp6DRaVbeJ3txoabL23hDmMPYmWhtiCHXGRGh7oPmxDc3oFwYYvfP7oe3ey7vexQWzMAy",
  "key24": "56QzAc37Xqm7zmJskXfg3QDFyPjuaEWcUhh7UGBN3jomTGzPgyFZmBeforGdhNp5RDioyU3uwC9AJBDmGfK34Ayh",
  "key25": "25hkhXGRXhsEkUEwkFSoLy5xFUPwhk25cSksDqXBH5dPgY2NGdLq7WBH4L4FFpnjh2vDJTVPaKXhLXYg56RS1cPN",
  "key26": "4AjGNB3YVQAxvxmFg42F9DYgWNhSFTgYVfkAvnYAk2J6aK2w5D9BkdLyizEfeDr9TcRua3m1LLn7w5dg1WZ7WxPt",
  "key27": "4X8cSBpje2aZWMEzvnwRgSjfjfwqzb86tyc7pGR5VVq5RHzeXGrGksYEsvCgKqg4pYhT7SsqE9R1SRVRWznNjYeL",
  "key28": "aUS8UhubtCqwgvCbf7bZRLzfsMH4FqSAeR78nZ4iJ8izE1B3kX86YdVf7i2fri2nnGGLK9HupmwnKyfgSYBxvd2",
  "key29": "67Wz9oGteHrZB5KMnMzsF2sf713mqaoDPGdNedvYG8LdXtm7EhcxPrHgwbjtsDnYV91FVeVvEX6h8YTcyRpvtxMG",
  "key30": "3qvkQJkf36PcHW3wswUkoQXZfdxmKJYH13q48eMmCdpBtFwhU4VGxn5DCFi7XxxBTv2j4pJ1hANnUSvz8DdvcwVU",
  "key31": "39eLqD6nENWr9TJqtnxVnjwrsmAQabXi1SGdqoUFckwSyagFUtdSAjQWspGfyLmnRbfA3Vz997WFRWMDjMxoevRv"
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
