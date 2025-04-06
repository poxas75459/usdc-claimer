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
    "4mcdnjj4VP5KR9hsgzCHgeJeoNhE9SrUYSRaqcrk4wwAZKJn5FNzTdpcCGbjWi7VceYzuhHJHp7cYjcR9kpWP5y7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FyfD3jynqhzPxh8qTefExk59XKXnoCZ3gSEtmJR8jDpzXmPgc8AXfks16tAFwb6n4iT5C9tNk59pbiTmFL8UqH9",
  "key1": "29fkdTRDDyKH5S9bQmYKda7968NJQi41GLkAA7kFc2HBY2EmLfXYR1voQtvc6XH5vewckT2VVLeA7hJosvNMqGJD",
  "key2": "yF4SVHpBHcE5dRbekHEnv3JZvyzJFgaQoRhxqPfKEoGLmwHYPT5LwuRmDDspWMqzV7vkTDKDfEL2LtnEEZP9TcU",
  "key3": "4jZnyfh6sxD5X65AfJuHM75rVuLTobWdJaaLbBvohCrSDE9cAY2nh7aM3nQJAJkmc9SFszyz7m6STLzbFELpR14a",
  "key4": "42y7HVHdCSJfocfz3PEnB4avmRRxqMxRSe4vzytbLQzVJhUoK7BvKN9Fvqu5qpSJJCyNkLMQzTCsNpYzxwaZNdVv",
  "key5": "4hBKp45mQ7QzUF9foT1JhA121WM9GkKQDjcKjrVd8nEABGXiAHsEEMdiPU1eQetDu6XhGFPp8SPN2ZT41cEJzDQD",
  "key6": "3jABAFTGBk42oWgBC1iun6raCgH26HekVKbhbr6fpZfSHddbivDXSMXzQqsyt8rXoB6HpSJaDug2FugXWUtbbAHX",
  "key7": "oviYntJQKaPpfdKamHh8NB9bvVbraQ8neLp1BhUZsUNDkgtW5CSR9r3Mfmb2bt3D1TnGpe62p3aLVLvEXJizUBk",
  "key8": "3cGiCXjxHHFeajXRqGXduPASZS6VvMnpGPDbH5EwMXFrkVJKZfDZJeZ3cwetc9TN8SAGhrGphVJteFfjaVV3s9qt",
  "key9": "2EdKVs2DKF9pek17u3tsnWSKQQj8CKH5QQiqmAQv1dFaMGCvGkEqnE6ToSXr1LFAtSB8Wb3x6JvKGJzXRNwmJojc",
  "key10": "4QQ1P3nz7rZw3V4Nh15bYHoGUAYFpEoE4Aa1zd3fcjDh8uNKfWs6X916J4A4PhLN2Fo71JYtTqwV2gGoy781dqJJ",
  "key11": "DJgr2RtMi2jVNy9a5YEBSpgHkbfVdkqe1ddEnagh8eiBQTPk7bDYBAEVFNwVZgubDToLV1FwKyoUhQ3KQ1qgnYM",
  "key12": "2wUkfiHAifkcYvrSjEWcXheBHNWxzhGp6aY9uEkNx3ecNboSVDBhkx2EPhPi6E6GG27ggWNB3fKvT2zApAY6pGfX",
  "key13": "4rDFURocMB5jtB6p6ca1MB6DptqJc7vkiUYY72HCGFcM57Hm5ectEgkMcbhiY98Bt3sAi4dNb88CWbau6iykUpzf",
  "key14": "65bB64v3Wa517s4ZM1zk1toawpREWiijafxLue6SXGmpuo9ev5Dqn6bSEBPPRKgVzX5REpJurvpTmgCGcy79UoeP",
  "key15": "2nLRi1Bm3wBQDjzBn5i9dSAKFabo6KpKg5JGHvgUBVkMPr9J5deMNWjYJaEYfxsMSh4sdCKge8HpWT6xjoJoHVo",
  "key16": "63NLRmi4hNrF9Qhp4YBZUYTuueftzc9gwpvVrnbFY7CAS1jW3DFc2gn6eA8KXvmsd9r56xEzoRXwfGNjiDnMT1Qc",
  "key17": "ecgYSxiVmyJ6aPQ3Ne8V5mrkAkfNnWPTxfcxiNwKCvsAePNqbJaZwBPzrPdT1KbektAh2wEEhQTwp77vzrFnvEk",
  "key18": "5hkajm1VxE17SjyN2MSdZbPPNBEF7XcdNez2TSML9veCecJqzRQfSfzAmxmtFjKJbxjzr7KEoXTZBzdgSgpjKuXc",
  "key19": "T5y5eAr9UjKK1qFrGSP1hsbCLUCRsXUnvqWvPG2n3cez6mnGgDpebAUwfXMcfY7wa98f4h6fwjYeMTfdM6gHdMY",
  "key20": "jSpY66TtGbpQekBRS435Qkpii5Z4uQXQbDXfjWKNSRnDQBo1C4HivrMgA5JBYECVs7QsofNDzdVpuBxtB3X59P9",
  "key21": "5MVgBP59xN7ehHRiLK9tq8GbzqWzhquHjsDUxY1KtPCwsEYFMfmWttS9wnWjyK7zqPi5e8e6BeCk1FSFTJSPwgKb",
  "key22": "55T9nPfqyFP9Z4VKDyUTqU3xayvFb1igsFvBJH1keen4aB2mQbtMnb5sGvYgZV131zjsUqQaGxbkm9gNQGJond6a",
  "key23": "3KX2vHPeeXVqCNsHRMh2f4bYEo82vskscshAGxA3UFZMMg1Z8oapArdL2GPZ9nwAfsJBKS717vnPCYU5SRKePpv",
  "key24": "4DtfFcs91E8pcKo6R1oh4zUXUNr6SfcAu6chHB6pvnwMNM5bPEpUkTk7BhjiZRupLXziHxoaFzdUybtXKWigWvaR",
  "key25": "54oywx1kCqjVuwGAZeWyUARELkcD66hmtWf2RbfSrwvez6Xpb2dpgsyqwPA7aaVaysqef8JSe7V2PNeRzzpBfvKJ",
  "key26": "45SE9w3NR7jADKgjNwsQDxdRm28f7mRafCAWEFv6T3svjPqgkcBA1hrPmcDx2WXzmHFSZPFvbejQHdytXUggGEWj",
  "key27": "4qPZicyTfgU54VySNyD25G715R9vvU9VZMvbkNaGoG2xYigDqiFGQAammQKRpM3fNmPDp1gdsqjfDmkxZLDh3Npy",
  "key28": "rvJFNM6jtZEED5LuudAiYBgyoonZD2fuJVqutEUQ48LshJANowruHhCNcw83p3Yvrj2MGAWr7juTfB4jTFakrCT",
  "key29": "sxTByprSEMHu1AJUtiJqXStkaRHWUEewXfhcLjAoY9qEwPtpu71nmz1kScY88YJCbzNijbYp1XHLzNqfPikvYay",
  "key30": "3p66f69TyZXeeV1N272y4xS3MfC5qetXkDxgVdTvRP9tDRBiG7fg3Bcu95Fcnib3PCXFHLEEHT6rKS2cyvpJBSSv",
  "key31": "ezz52zFBZ5P5fUWhHnmaFN2sz48evw53tNz7J6rHQBjTRhbRBBrCvTWCpKZsXoTL42p72sRvJDgAq3C6oCf9Q6U",
  "key32": "4qygMKEJrwswNsiUGzG6vmj29y6MBbsB3gwi2fTKJ9c3v6LmwCyqwdfPDUZ5d8ifT1JbEuAuN4X7BCmZKqXnDZCJ",
  "key33": "5crsjRPqB6L5JD8eeu587yCfyD6sYt1mgKEtfGWPGMLynYJCMehy6EcJv9LkjVfp2uGgK6vU97JniNcHVShb3xzt",
  "key34": "AXSnW91ncKyTzz9yfgYfgJtpytsYHMPUbpYUCiKfneFDJQW7bYyiydsxbyYfCNJsa666KoFL5ZBMDdLUCsmoq7M",
  "key35": "rxYzsHoTSMZkSQEE1DDBSszi5KtaUT7qyYxzSqED4odVDhysPS2oPwjY2FwWRdXvMEULRVGW7ZTqZMZ6151Y5Xh",
  "key36": "3RnADmrZqvBehuDTcQNqywFnpCwiPyfQXiKfxGMYay5LcgrVDPQzBXJ1FHjUP1rTtdT48ZRibSSwWNE2Hru7MSb3",
  "key37": "4Lh2yyL3pyBQs7byVesJwwiafXGmWgvHAuTqhQKZWEqHoaCtqvHxzu5M8maEiUHYtuRc116zoq8u5xUucNJWdzo5",
  "key38": "2TdW5BgRQumtoyhf87waBWL9kRZcpiPsr7LoQX31BbyCBYe1hbdEA4jLzMuXPifgEvCjnRcpg497JpKTNkh6N81V",
  "key39": "2rGbqwVGsYtnLzBdKmWHe1Qu4BPdD9AR1YmRcRKL7MJNiHxvKsdSYADuakW9PWmJTM6f7dQhYMEL8Vqcqr4a9QNp",
  "key40": "3qjvsE61o2EiBdpnmacTxJMSqMoEPSSbgDxDUNBRm65HcpTUdpJk4ar6sdBCunmWi8nVrsohL8PatJWvsSiGxYdw",
  "key41": "ttFgKA8eWXJincvDEFdJP8fK3zX6qMxC6HBLeKp4BUtkZWggtZ5rcun9Fv6bJrkYHjNqjphUgYd8rQJui7qsPqK",
  "key42": "4KjHoNKeZR7KRtSrNmyjMnGLzZ3mBeE1cAn7a6W5T9nddkEvSX1Yg8rNjV4QhUeg7LC7pZgdr3w9y3mwSfb6kGnt",
  "key43": "43U2NaKGErzvPiJJA59Ry6NerR8ztMDngiNHEt2ZLhgwDLPRoJ3Ci9eiodSBw8tDFbrcKkSqVgFwRyrDg9ay54aP",
  "key44": "5faHVenM2u3xcqu8RTL76M5UyvmspiXvyeqBFydmerg9xnW9s9oC8mdU4v975AmA2WHs2kndbsFgFESebuhW8S38",
  "key45": "wbKWChE5M8QpeJ7n4AAu1T73PsNi1AdeSZyaou2FURkdZn7wGkCZi1eQ3o3paRNdmgiVqfENL1r2dhbzbt9oQVQ",
  "key46": "3AMyyitfmWKWvmhdX69t5mVQ6QhUiWhSDuQQrpc7abrB4XXYXjzpiQLGE132noTLtVSPMgvZ9vny8eiRW1wqTXgo"
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
