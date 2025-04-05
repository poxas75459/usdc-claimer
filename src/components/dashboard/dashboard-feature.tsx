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
    "27b2LFGFRgqoqdKeYH3GxkwjZAnUG94WwxY4ehfdP6Cm4xGDA5Xy5ZsR5mFfSDbYQvX96koLeAgR7L676aheRosm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y7yKTSvDeF5ZP1AAug6QtHNsXjPmzqE3mz5qa2B355yJQgXxFiTPxpR7CfHgSzSrWLzfZMmgrGCKiGsqwnC4JqX",
  "key1": "3iMPZqW7HsnnUR7CmjT6DaAmnYvGUn2hN367g9s8tjHpnx9a3LUSYAW17ohgYpJWNscnzxLYv4gi62V9n6pCwgSL",
  "key2": "2nWmju133PvcQ5QSadXkok3Rtifa8kxyxWNQu1KsTpjkG2i4McA2cAsMMiQ8mV4FNWjDeUAsAbEcRkBTtJYosbXK",
  "key3": "SBY1Cy9w6wMtRxZU7bbcCmhEBST29tPDUBtuoTNBCbh42HyqQL2eSDgJBLKzPqESbrn6JzJq6tDrtC2jbrNvrqm",
  "key4": "2VrPmNswKdMNV1r5sPQkuecuGn3RR6CnGSnRDJu49fwD5L1ac1Nebkqu1DJJijgLgk3jMd8jHtDBEqcZkqa29Qw3",
  "key5": "4cApTiwSkuJhsRmZexrdhoRHTU9ifF3freTCDknn8A8MZd8be6emaqgT1KPPtk9he4qJon23trcd9Qn6eusb8RD7",
  "key6": "2pAhpHSCR4mw5VXyEpyr4kKnFWAknpdTnLWG1dpcfvc7zEbMFm9bm57frBG25KJDr93y95Suo5WhDVW9DqHS4jhD",
  "key7": "2ouLBqHQDnpQGhKcSe9Fvs9w3nhi8D3qpVbZtwmViMZjT5nquu5qc18U3Jd6hd4D3zQfHtQwSQpxkEY8CwwZsZPD",
  "key8": "Xze1PstNzaVnjRVJMCRHXbctqVsLmDsNDABoXggs8tRLDLSpUs9kcRTq7zXkbkmv8MsKrbVaTKSJn4GrzmbCNXR",
  "key9": "5QqyBoojqYV33obazdXrTBbcFSzwogHvZfAcao7vifVuKNCntwzqsjMDwJEfjvJkEMKeWubQrDEStVieNgiuRq37",
  "key10": "46L29xmLXWv7f2nmBuNnwiHWTuUUzYBda41YsSNj47v4DbkCNEQ88Go29nTtpPdg6vH5ouxTfxA1K8T6w6UBoeA2",
  "key11": "XrEUC7gsWr2X83AbZX8iWznjwK3tUoJJ7TpuSnaoNGJ6mv1r6Dms3rHUduTn79Ld3qyTS5mpFVjtMZoEbxyuY7u",
  "key12": "64muNXUCDC5v8oGEHL4ynDGwm7FdoD5DFdEFjG9og4AbZp5JyCVf5W5iXmJBppQKG4foUdebaiAvakZYFHTbc2we",
  "key13": "3HkaU42EdZfmgV5WAWox3MSdAMNCwzvQvWyx94pLyouWW4VVjmT121K2s4AcywmD2NVcz1zmZWWZzjDoz58NksPg",
  "key14": "4KKWLstzJgryMcLonZDGZcS34ZtVawejGxngTBWJ3qn5ASJz6nk39w9CxAqet2RrGkiGr6u7fm4MMwMbbsGeKQM",
  "key15": "2WMZKkc4j4ydAPXX2ymHmYo9WQLHcfFXvrNkiBc7grpDnx56ZubUB7w5st9cEn7C3vQtvmeWvK7mbc4mH91f3ecq",
  "key16": "MoLMqjfoGdKqvZsrWApnEVUF2AK3v14anvWbETKch2DBsTe56A92reeQXhTnXCJKCs8B3B4csjb2xu97NR6enGH",
  "key17": "usJKLY7e819CykQrNGGGS2ShiSg3qrkewso3zz6ARmoMwutXcxZP5JywJ2ezEC2JBkWff1AaTUmZEX7hFkwMiPQ",
  "key18": "58WndR1VuD8ULPYUp5afgCV4z4DGLgkXo28ZrjGeR1VxpHF1b1GHQRfFFPfQyivUH3LXnMKNKgnAyjN78CkKonuk",
  "key19": "4eQk9HvAzSkYefTLSZk5gS3taQagn6KKmgjNTnPdpt9LFyDoVhcUa5Ne8e2hmNr7zV1G9LFZWxNzPrDUcdHiXVa7",
  "key20": "3deTpQtvKxmS7qNaQvsj68bE6F8ntrz7ZBMrpEK3PS4PwjyZQbfeFkCJRB5LVTzgzCvEbgsvD7DzocJapy3Ri7ym",
  "key21": "5MickYVzdvaURUDkNWFWBFi7aWTDc3vH96j9wVtb9xqnAAomWVMjscbsp84j9tK7ayu1DeJpq9HUh4PGmpfzXZWg",
  "key22": "3AViCsStG2Ry5JsZTuZwqmVv29cMymcgrCqE8T9Y452isJwiM1FekGfFDqDK8tdB27xvkB1Ush3sYpLfF7m2L3X",
  "key23": "3uBMyAEXMXzoobZLP7kpibKnpfYdogFdJKdg84h1CGA3GA9cz4rWqeTYrVUfe5kGNd9fvLCTezdtG4cWWLtD5gi4",
  "key24": "5NFyAaNPKY5JAEsGTkg6ZwHk75YLrJbeMMk53nCiXmpeZHXKECeVSvYapG9M3MpQE9syTEFoR5KxXkY5T4LtKkw1",
  "key25": "36PH4iZUqAUMJnSMchdZPqDKeNZpeFQTRtYupotfSK4u7GMHpwmjWrcfwq3Aby73ZEFxYksQjxEVaxRQFWmfRpZA",
  "key26": "3bH6UknE7efe46JUkoN2EkF1xomvfe4zMSYVpU2oYkXf6XUvXzZTMg7h7Aw4wSWaxbVat29c9zXrUPLFCf8eoe9U",
  "key27": "4GSreq2TZvbWb4UCJzepBSjx1DcUgxFvzLyAcNSWz5xWKTdih1GKHsdoC4w4kBFzdeNHnFAAX18mN4qBEBb81vB9",
  "key28": "2AAXUoNQ81wXUcTG6LMCaJ2iA1mzTPJA8Csg2NUNYTvCtvrYjfqgVmcR8CDMPEqtPGsssWiqVg3wJzq7wj8ewD6M",
  "key29": "4qbMEtMWX62T8XW85aigxsqTJwNRfTEKhvLpricz9AsGg99KtmqxWKdDRQTjbxULfDNqfmtZqEKads8pWgJYe1cp",
  "key30": "3roWvLXCf8UYFrh4auW9wUQa7iswk9z9KKDZe1u6xn2eWcss5VKyq3YewwUEbny9kQgVRYnWCarYtf6H1D8WGJCs",
  "key31": "2rtN3izSNi4WMJAVDaoBo86MYpLu7t78BZEKx4ZSEZckyxGaJbNR9mMx7p5tyQYxfEBuZdmHvHL6eSGsJcb3R7ZD",
  "key32": "2Kd7RwbgXpcKzgpzJmwCzDwTUv8RwZHjEChLkRKfQwpyjysHsCvo3F3jHMgswmiRdTwrMvSKP28owipjVn2EMegG",
  "key33": "5by2zEah1cbhVv9NgMq3a1vuFnH5ZAecaefbWkHLzEYnPZZ2E8EVqcYcENgi2XePBjpHZ2UuWvJbwE2KvDB18hN",
  "key34": "38PLv6D5mC2dUjYHesrKP3AZeLR6P9j7VXGBZDX4jgUmMCddybszm5EhoygG9Zfnhkf3G1P9PwXZY3FCGoTyc1a3",
  "key35": "4FwyS5aJXKxAozSbiRkDZpHrePb2xgQAt61f1dEuUo5XBQeuesutUtydAaKVDEsRdSC8q5z25EfHorCThZbrpPeH",
  "key36": "5NSdpSRbzrePPPATTJaEPHcZ6hjLxzf6H67wRMbFyfAekGWuFKDGfYPT1VXdDBhyuU9w6TS6RvLKVwUQY5r2a5wf",
  "key37": "3jHEuXwTZiMk9nEen7Lqzy2mjVHv7YGeGaWv44meQs9Lb9u8Qt5VG8LFbm7RgDPjbpSt3eM8WtpXMfs6TX8xvRxP",
  "key38": "J9DTtprupnLLc9qG1JLEYTFZav7Bf8kBWrNuEx4PL2VSBLavsfFSxTzgFUQ1h39gBJoeQQ8xQtXjZGGT69ARs8z",
  "key39": "MqAskxmNCKSw73vvj2V5zS4oF8fHcZxXM53LskvYBoFoVStJ9qkjM9X1YX57ZSYTgrW2zKVFvSi48XtWRGRGMtz",
  "key40": "jozJDPauRbned4wjGM4hjQXjZMzR31rkpKGxsWnoc2E9EAL733AHZHr8bEFbBWPj2r6VJsQKGBfXHp2hrnGUgJ6",
  "key41": "2atc4zPP5ALm3wUfoCGrndk8HMQeHYcnFVCkm6gWHL1zKXcRNxKCSPNkLKwZNLyaALCT7wsH2LsZj6MWSUd7dUAi",
  "key42": "5Fqfyz6FzPqEPRd1hfC8J7LzcsE7FywMqwotX5r2XYsW9aJaJKTdGnBS9Qed8RH1Rg71M2TKi69ooFW4N4fNNz1x",
  "key43": "58d61ebzT6XLaBpkK2diidZz6qbBneJaZwpTjHMXE35f4Nz9YchWzi7xh3qZkzwYEBs7BRKCP6F2U4MgjVzCXWnX",
  "key44": "2yibbbwhN8ho1UxZg5sAUeC3ZHKmhSeckfWVNXQak2pADRs9UqamG8XDRKvf47F3p9QRp5pAae3tL7aWS81quQrK",
  "key45": "4d6cWrTLy4NfPYmMJTfTzXUEe71T8yQ5VqQrk7J3mgSh4cC3DcX7WMXZDwi1reWAZ8TUR9npnt9Uq2fv1j1MsUP",
  "key46": "2nJD6eS1oamvRxhuEPvhMxUJptRNXQPTVy1HmL8r934g25YS51UTnLZnoaTGSWVm19XarYU4PLv72Fqr1VszwDf4"
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
