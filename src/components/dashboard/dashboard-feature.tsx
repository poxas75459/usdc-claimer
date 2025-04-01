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
    "47pyPVqmjoRVhQKisMWWk679MLPhuA1MWbLFiqU8HciH3i94TUzbyKUHP19rCoMuYFJzYshniZ4uFEpNr8teFqcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S2s1zVZBkqdvNdhZfFfRA28z7sF5TnrBMKaBKzR8dg3SoxnqpmjM5DpeudzwigNTtBCkkyt9PPqUMsNbE1xrxKV",
  "key1": "5kC2wiM19HpdPR84kNccn3xgAJHgC2QKtVyrTPHt2VufzYUAeNq9vupouvjvdxEWyXxHj32sUsQNhesUUDyF7eBR",
  "key2": "3AmXC1UbzWE7YvMRrhwjBuMWg2qBG2ttFFV26X2AFcDASi3RxMzyjSApHfhR4q48JSiVfbAxDnRxLrFbgJ1V2kM6",
  "key3": "6T7KqUdquhgvV93t58NuwqzWtqA1fZTP1sesXiYxqaWgrhGXxbmPSZGtbnuztdeb8Brfzr6oPkHrefLGX1rhMUu",
  "key4": "3jZCgXePTDfpYC6gwihzo1qqXYFyjx3Y9rRRgdTcFxr8kAcgdA9eFcj5TW7i8GE38aaa7c3ALxtjhjszdQ9WWfSn",
  "key5": "uiTf75TBk11AKV4bBiK1A5vusfDrapZqTQiAmEkjqGDN9vMqdXeH1PGZ8dqkPWMJSrB2bqMyiWiM9ofSrcYWysr",
  "key6": "Jj6M3UBXeNDCMnVyaqe6nRW8DowbPF38fHxJosDykEWjiPPrTPvgreXcXrH5dVmEY3to98H9PRePzCpZ6zdsWJy",
  "key7": "644GRTgqbTpoeynSRrYedpR4poPBiuiSquWwRcEB1tbeorMasKM9dS31G2xyKQTn3Kn4tN9Cx3iuziA74aWSWej9",
  "key8": "5VZmeGJQpkJmxADEf7MzojgsonpJnuEvV9UwywEhwVtudy5tWM9TamZeZxpganGFjw1pZ73NESyaCx8HkPH5BGL9",
  "key9": "5fCbPwcH5aXyykY5YVTND6iEaow5pAcbn8tZRe3QN3Zi5fhFkCdWqWzUQP8bV52hrkG7ApdZD2ne5Z6xJ7TstTbJ",
  "key10": "4sBDvFgm8srB1tJqQWLECKZS8dHtPtVci2kpmq4t15FGEUWtcnpTweXGLpZT2Kz8qCPaJVCmf1Kj3E6GeAVvKmRn",
  "key11": "vehNda8cUHHCoYU7o7aaH31EDMTTmyKNGARhYc54yTFxez9VUrVxx2Sn8S99ThMD2M1ta97LPUEPHmQKZf9xkQA",
  "key12": "2Z3LZ6EQVNNxRfLMp3FBkWMRn8obwXv8U53Ue9mMV53gaXSvCpPCN8ywUKsmHhPzPtQAhsfhYJ4ewGvoftFPSFB6",
  "key13": "37htrX67ovgihs18QqTzyoc7UWffrrnK8yjqET2DsU9pQKs8yEkqxciNL4tCiD9VQugwHtLS4MRPErkLmCu5jiwM",
  "key14": "2fesrHj7Pfpeh6CQtnRfGGXH2m5VnSaqk8F7ogTwEycv2575VTDESkG1eT7XM99cWiyWvnbMe9ykad4CRorFd6Aw",
  "key15": "5JWziXsrMSZX5GSZ49rpbQ3hF3oabV8QfDtLkKYtW98HsTUBK9Ukqbd4SVAK8L3TWK1f4QmCag4H5VJSrgbmK4uh",
  "key16": "4HjeMpbcQTLqzCqReyhUzRcz24GSXVZjQE4f1HWcy6W5qPucG9EQ4bUxxWE4QZcwzTsqAkyUPEtVAQ3FMcJfQnkF",
  "key17": "EjyBxeASBKuZAEJYqJoALSLQLEFkAzFk5m7u1BPmuvjMWsCU2CJCPU7pZmCrE4JBovV8Tp9kNg5RZFk3fgVcxGA",
  "key18": "5aA3CobuHNGRZzDcBzdDJyLCMD6X7bJx17aBC55qzPhs1ZjhpH5hDw8NhJD4f7eXKNx538Fk5rTmmKwNUfT9u2zV",
  "key19": "AEqTgfoi5nhZc1C5nzAoAyy9HEghUGmwKFrzPqtrMNd71zAqnSCFWyRB6vZcekY6NauP7YmKoRnEo5KMcizw9gX",
  "key20": "66sTq2fmyFVY3n4YxxoEqNQwdVQfCZKLCou2EsRSenVGUGrZ8UtBsZRDhNwXt8GStfLnSe3uTUT4HeVm1tfCS22k",
  "key21": "3oL8HpAvP9euPqo3oGnTARjq6Bc9Z1dcy31pfZCRbeZZVQZ7C8MUAcQMwdwXAPYmR8QQ5ehM5tYagWR46JN1MZF7",
  "key22": "4Zyz9ZAhtPp97J2wSy4MfY8oxdpJrAXR5xxLW23g1ky75Nj4Q1ujfRwYZononxLbydjPASWpXuLbFzeLQsVpbimM",
  "key23": "AyQzF7ts2SArT82xeH4k7BbLb4M1rLkmPdiPLFesJAdGSCenefijKocDe8dYPVxmYg2SctD3aW6rCnxKE5f2neu",
  "key24": "3CNCr2Ba9zg265HrnQTHTdByssriu4CaQ5yXuE8UEeHdnqTeR8uJK4ReYvhHazUhnsQNd9Mvs5WjgMLTQxpWGock",
  "key25": "5RumxPv8pN3DtTQSuFoeQMMjPTuBvNBXACFg8H7RQJemxCkdXFENafxviWEgi9aXDjHJMoH3GA2DJ6HSH6uMYyei",
  "key26": "5auAE34CCECAG2dRjzx4bXyogp2pAG3L5njvTWRqUNeJeCwjNxWKEckmKYCHrWdtmc68v538k85YKoCFdXjHqZEQ",
  "key27": "3QKhaH9XYVr4j4URQ5s1uCA2dRcDPBppeic7L87mQusVzqKszndbzUrr7c8gsyWkAQ8W1RGsc1LS7Wr1fWRxPj6d",
  "key28": "4C2uYb6ZY8jheCLsAsyx9vvXGmG8JR58t2vXRZC9jhzf3SJRWrTb1KqS8q9ceyuRrZcwGTSREN16mpR5k5KhusZu",
  "key29": "5UjV5xhC1wcB9WrhnJFiWXUJ1XQDAtvs1ktxLZabfzJCBE668KcCNE31mWt1tBmzCCCbSGN9RyMas5wLXazEspVz"
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
