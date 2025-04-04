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
    "31XjZQLrLQ8opuUoDtZ3NF68F5gDbCpQNvCKwu37CskKVmw6dPdPBstToTMdhxdv7zgg2W1iEChmhtDvFapPcmK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t2v8NWchsYF2gPUf1g2p3SRvisKFdxG12Tsx7xwCTemMP3pnnWSQiKW5fbuTwSS4feBvdenr29RGbUude2dWTAw",
  "key1": "4DHGL5XfHh6ZKNWcbdQnk6jcBnukDTFDM2UVY2XJd5mVmgUUk76zpextEdiZtksYXoUkBweFcqkPVtWDcwNvriir",
  "key2": "6YAZ25AuA9RzHS7GZUcn3c23byTRhpwWqhYikvs8vgiSX34pUdLDhKppzQ8iJTzzFYnv3dom2vMLiyv5k95cpc2",
  "key3": "3SaLG2VJcziBpHTDiwavbZk6mqmZuqcWjpB3MEk567MHKDXiRWgGvA6q5i77Sz1Y6eXkFjEHduUadj9yeDpssdv3",
  "key4": "kGhcGjnokkC5RFxa9w5YRCnwGN8RQViArVnUfww7uEeGs6ejSvc5LyHPDvjKvVMAr4fLzC7rwabQ16k5mF51iC4",
  "key5": "5AjXWLGnQUSuHZq9zgit52hFbQGmdnEJEgvTWnbZKKtPkUQ9qDA485yjjEjMySzkKvhCrjVZPwv7B8PGjJEZduu7",
  "key6": "NyYd34FgBFTSNffjaKfNX6WqnTsPDmny6KftU8BAKiYg4vSs3w92H55kf9ncdarnS8GXhNaQ7jx4vc3ypHCPUPb",
  "key7": "2FGutqdi5j9gxZpTz5gMvHK3haULa7jdDNjwEmYbTzaE7FirTh2UXJ2eQ1jHFPvD9M5Y37g5soZdXPN4dZB8D3Bd",
  "key8": "3nf7DquUUFjn2kddNvXahVDXmknhE2S1gUm2ebDkrMoz2S1Qusnbk7sUcPV6s3LQQUHbfuTFPLiWixL3NKqU2YdQ",
  "key9": "4aGvUVqGHfphK6U57PKzqg47CSyayH2X2fHwQnn28TSPE8Kuc1UCiXYFAMt8cxsT9WdaaqzfcRD3DTeg7VgrZJnK",
  "key10": "uTigpsvj3gAe37bQR1LtguFrDiCFnNBLNPKCnZ2jDdmbPCTLv1SV7ZyqHRBVYMjYKWT93TJcJk31LcxgorG9foV",
  "key11": "3H4dhMkSzAsGgyWvSgDoAPgBTZob24Z3q7boaAKwJDb81Wyw4RNrBs1oN1QCCwQu55umJjVhTKYVJGyZs2vu5Z2j",
  "key12": "3Ei1V9TAxmG4J95wDCo7ZTue8r9QgbgVaFisMjQVFV1rqme7tKYvpmaLDJDrLbfnEgB1UNpGsfUnehAvciJKHxWT",
  "key13": "5TaTLkpHyLXqnuCLX9xcFVZBucdH9EfJJhBx8V9fQqfyu9y4KnwuGBtcztDbaX2ke9YXwz68WYF6CX1xnTW92VF9",
  "key14": "5HFFcV15t1ASovVw2pbeQUHbifxwEFxkXZEzHwE2GJQY3sYw1a2y5HPvjLBPc3tryJq9gFEE5PdemVafh23cuhpk",
  "key15": "4ye4yoXwt4rccvWGWNaH48pPbwi5mC9vCpJg39wuqdBe3nbhphCcrnpA1AHPjjKinpwpvmGVnhdZTQUu4WVV1gq2",
  "key16": "5jPQxshDdG4jgDefQSr5CnBo428MAgQg5xKnbqdWqA5JoRoGQPX5JrXS5S9EJ1icF1crJaac1mp78z385ePG9bnf",
  "key17": "23sotrx7xpobsWQNpRRdmyf4hhG2ZLVuMxmfCpENJeBJFsaiKeJPmC3zDNyR22Jbap1ycELjvxofoom1czLdqiqJ",
  "key18": "5WPZgvjCUzxMubAmZ6zteQg3hxrKkRemVcvJ8mN8hWqDgDXv2C7bfYdGTyzkXE3nKnPBPrmXDArCbuxgehjS2VjE",
  "key19": "48NHkuYh4V5sLj3vwvJgfhSd8BmQTox4V6h7kP5NBwcGNqoNLJAMi3CRqsW1xpLFtjck3Jdhc9uymdg7V9qQ8tVm",
  "key20": "2oLULvy5omh3YXTBJ8deGYpCZdckDQrgMFyo9cj8WSQ6iq5p6K5d7Shz61KaG1CQbg5RWDQMFDqxCbgXZC3HXU9P",
  "key21": "oCysCk36BR6R7gkyUHyNBUPSAgp3VGHEF1E57zwtM9twggY3tnxin3VBeoVvAqLQoBA3VcC9w8eXjXhxZJY1n8H",
  "key22": "YeX2pnY3JH5SktKffWSpPo8AKqHwdaKaUy7Qcq8grSwiiFQrwwH29LE4gmykvSnqMQuLMk7TYzWKBAzu3r3CtvS",
  "key23": "5umCHDWcif6QpBkNtf1msxFiGZa4PBdGrdksKzuymtBt3wkbgjw1ZsewXEAEvjqvuCjqabaYeDHcrApYxaQPJhS2",
  "key24": "5rQDj8HX3aaZBqYDrsDHLBPsKgDDjNqd6sVuGYYDxmZ6dcKcbCiETzCZpWe1AVaKq5y3JNh78ExBBhjFfQGv8kmy",
  "key25": "2Tqkyg73ELAssWajjBpUneF1Pgb2c2tRqSZtraWU4twjxAMRLMe7Qa8EpPGh9kWQzmSyzbUu1yy9y98cLq2UmsfU",
  "key26": "5HQqS973XzqfzJFkF7nPneuu6zvmDNpE6FWwYuikkFTdYVZmCWSrbnRdHU1bcKcPZsKJLQoqkwcWLLF47orttvm8",
  "key27": "z2C8SR5R8FQxJWxoFP4LWV5RLihC15hMsNyJ3MVDgj9vHCrgrYf9WARezw4M7nf8NNPnRJnHWUr42iU6dvLgJvR",
  "key28": "5pjMNLPcE1nGnTYyeNinzKLAzsJxrKvp3oUNeUAdZAJcyk3X496RKsj3VHKx2DdRjaSidJxvTrxJKhyzg5Q1HRAJ",
  "key29": "5CmDWjWNXdHUknnk5zFf7usRyac7V6bhrPPNRzXJudTc58HZLx3nLebghzGNP8iExHD5vc1L2N9BN5NSkDjemW6x",
  "key30": "3QFcFKranuaNytNCgezBT1rmfMi3BG9C86xby9BSrp5FV2XjF1CeLEJfi3UbvRF2pu5m9uRiudCRYEe8XXv6hQuS",
  "key31": "3GhWq5izVmKjHMp9jciSoHTvJhuFDrLMFSfNmt126v6iXeesTK2Bv44f7iJRBpQjDWtcTCx3VuHVjNg6nz7gfsM5",
  "key32": "dUp2A3mK1ZVQuq4J3fUZEZ8jTCBBL2iWA7gQBx4RsPr3GcpAMXcspMkDG5bwYjgZiqVzkPhE1yuogBi3qupueSZ"
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
