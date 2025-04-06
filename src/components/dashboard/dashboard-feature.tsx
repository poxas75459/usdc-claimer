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
    "3YWY2JMwJxjBJDek32QE7tzcNoa5AWUtXgJ7Gk8AR7e7uqodTyJaJ3h4VKbjLM9i6n24DK2NKXAMjjuGv1SR9tVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46u9gCSoQJcu3AHtuYVJqaPjwT6TotV6wTPgiYyTNPFetWFZ4V44jcxYQGJabMa3CHsDF7qZ6XRzK6zLtUPXUpj4",
  "key1": "MzMyWHAA2pDzUMDFcBJo9jr6j38BCwompq6T3ZboWFxmad9XVoAtFn5753mqDFYxioptWfVf4V9pwLxmX8PEDcf",
  "key2": "U6sqidsH9XCzeFgdwzeMZ7urygBEPCmA39nZQQ1pJN9msWcL8Ls6NvWKG7RRQN1wpUu1AC26YTJBGuAxmb56dUw",
  "key3": "526AECQXjWAYbSGd9VJcReLKF5XuyTUzHxZWRTSfhahCMvcm8ScnhHWEjajSqz2GjsoSYfQMMHsQDyEBAy8BGrTc",
  "key4": "TxTtCXKsNtJGab8PHU4JXYjdTrRbjYkumAh3kkZQZCmYHYgR3ocfDdn19P79cS8xZE17G2AjtRSrXrb8r7h2n21",
  "key5": "3k2g9aFmtRfS8KbWJ52BBT5yyc8dKLZu3TbyWzuqWwATEKebHSZQeqtAY9cs9LQniQmVFoK1ARL8nqx6znHveHgu",
  "key6": "5mUKRaNDzepPHGAWkKmDsTVmo1Yj2Tvv5oKeen8GfmVVEUxDHQHGsAct4XsZfugpmt8WfLu4un8VEvxoZkAwcV31",
  "key7": "3XrrhwYiWjpsaFhgBmTTpXKMoHJzqDvSPDN5SB8W7EnRmKvdbZnkiJPGMxpE6qzYUjvcY6Xri3zUpXWcXN2tHDUX",
  "key8": "XRakNL3vGitZCtiFcbVRWAoWe9gEbzka3nfzKDUWGDeYBoDr75y1xSb7KTHPv3228ygJLjrfFG32fPTpr9UnQL1",
  "key9": "4VFcAjDc3tsD1yGvw6aTHUAC6auoWh84TXeMnouU5yqJ5r9FesWPXf7N6vqz8dSJy3PQKKCYhA6DhxzLYCTHX9C7",
  "key10": "2vBK6QNvXgkpDW8o5u3wzqAZ8DXUTvcuSiBVk3UzFF7ze2XUiCz23wVuqcyLzMcw9ZU3YpLbpzMbLehbiBGuRKFD",
  "key11": "2GNeqv3XRDB4juspLcdfeGoo2YesTVygZ6vk3msLPtsvWrnHBYQwYQ4XJsBhJQzV7aoHUzNKvTr6WYbkJ5iiTtJF",
  "key12": "5w8UzJWKD46Kvd1SnrZ2HRXxZeB8FvQokkTBrE15heTShUCP3gZJxiqViDGdg6LtcxFgN8A8YoK1y4VMr9ToyxLN",
  "key13": "3pAB43c9DwBc1VA5zuTwAM6jrTtuEPRRYwyJBaM6u1SCkeJMz9RSYrqpa1BrEwmh2ncRVuvbZAUrJ5nARUQkHMPD",
  "key14": "3p8T2bchc5joMXVXeG18XP8eKnmXKRcjsNfp2ox2Pe226KnGm77y8QMzgyapNNcLWDnv4qTP3p7bwqp1EvGyyCgy",
  "key15": "3DETDYJSPqrSWWSZ7vRFop2rHkfRUicRJ4PkLtPg5kaMpmG6T2p6eHJiZAKE8273sKdh6vh9Rq4mzqBanB3TKsx4",
  "key16": "3j6VfHAW1QrFbidtbSHq45omgA4E6mn1YeQ7ooCJKM1DGCmcmgFqo6UumWq3ewTF21y4v8RUBwBfzWMWNfXMNCmN",
  "key17": "5iA8oQrXjcXdWN8bHN9tdEyhqxhzs5aBmGGXk3BgBtqBaVSekPWGCSkEDUbiQ7P4FDV5zjRexMCG1Y7qK8H3NUtT",
  "key18": "49UgPNiGjncLRjbdHB25TW1Bb9nCC9YWLhqigLWMJYVb6ZjfR4psRTfx4DuH1v89C5L3fDbTeiJKwbRmBLhpSCqu",
  "key19": "2Vw7W4etjX7918Wfepo5KWVQkj9Dz2EtHZW12fKr1no8ARUoeHbYhm8Xua3MumNMhZPmh7u98YPvK1HWx7GCnfAq",
  "key20": "F5hs8aCnJSLTauC1V77gMKJzbTBMhyUkpZGarMFqZP12da5t8o4qxVpB1PVeaBxkQojdwLHDTH9FC91FP7Eovsk",
  "key21": "4QpDBfYK4kcQnMakaoabXxYeYCa9Vs5oTUuQtnq7CUZDPyCLUUb8ZwMkNwoy6FVjSngfnq5aj44iGG8HZdqji26c",
  "key22": "5J7F2osNNibMyqPxQDwzqUKw8cQWiFiphretgrV2KtbAM5GojyEro92Rd3Wx3EkBZf1TahyoKeH6hAUCZ1CWPKoS",
  "key23": "3QWw6JB2Z8CfnV1wTKNyo2nA5PDsTvsP4sSDUEcHvHRhGopRcGcFa5gAtGZ5GovePxn75mEoGzFyv1NCjEnR7ts2",
  "key24": "32MihtJtZyDeRipKKK5DmtSA5ETRaHkhH5iX53rHQaaW3KHjgt89gvaXMfBN9G5cRCv6e4tV893nkcDuzrUpvhyZ",
  "key25": "2mZm8oSeaGJt3JDeK5VMAxoNgYatMCKEj9pDpdZJcAFMv7nq7EFqzRKUbda1z3orDBP4AGrs3bENpAdpcCkmPUjX",
  "key26": "4DPoiB8qCrj9EXHqmLQMYdrcL7eeFs3Ehdx6BJcg6m8AWPMWzV2bQUmhRM8oGSaJP5q5BQwsWH2UWcsDPAt6g3wW",
  "key27": "3onZVraiWyd7YpsNpPwgcxUXmCnPuffyNxSm9xKUkrqjJ1rDoiDRguhN2ej7y6wM8vnrWk5mKRwy3vc2Rq2TUsS9",
  "key28": "sA7h65GUqtvy948bJeJYGpxpog6aWQsw6XDZKVVaK5TqyYksL7c7bVBJzHamZHmZenYU2So6NWvuQ2HcLtFRo6n",
  "key29": "4EvYxD3P3N1gL3nn5tCe4VCxAcWWVzNwaNhVz5NsQZHt9UvvJ9R8WTxpPvRqskpSyShG5GuWzddB3HTHV2bj4ezZ",
  "key30": "3weqZ2HWyZMni9Nm64dTLwcMpg3Y9M8322UzeW2vPfG8Sm1PqWJaxt5AnZd3tQ2idVRoVAjioL1tE6PeeiGSM4AQ",
  "key31": "2KWSn9X5GJnFwQChhhFnZs8gHBdFYzZKq8S1CtKokZqExA8eNiVH3HVFu7VxyGvFqCYW4jEMfgL3rqcUzNkA4DgR",
  "key32": "NbyaaZxjLyKL6LEsVpszY2cABXjrQAAoQTqCjhAE3oz6S62iZPD1TJxsoE2zzNedhzJdax7k9YJXXf7vqtR315C",
  "key33": "5WFWWZDLGoYULsULf9gRLDBr9y9Pd8dcv696Y5GqYn52S7Um4WzsDuuaHq5bNrtNYxaBfwL2B8VWXRT25N5RXKGE",
  "key34": "7WAFsXK6pqCrhkmS1E8jhfVi92oEKUBTWpXh63ekPMvT4bedhc8G5xSHg44nxBXw9a3HVKtWXQD6zoKotEk92cF",
  "key35": "W4RadqVB25axoVuj491teZ6QEyBJd5sKi4yNNCK3H4MWLM9fyYBWSd5A2v3384vsoWU8WnzeFGrqEGvLiXu4nrN",
  "key36": "3fYu8viSpQe56BxyR7To1jF5jGTQpVf32TTuSM1zacsQFmewJ3bpZpYMgTapPR368BFb36CutwjLBdkNtyhYcsUU",
  "key37": "3UQaM3xUZvRC9w2q6T4NQGa57JRqaEiH9MvSRZdcJWSQ6Uw3pZsLVwxbJQ63hWCCZ9qBTm2cBqZ985Kjn7BxdKQ7",
  "key38": "G6HGFd89desoXgQeE3xGjV3Ei4ikene72Y2WrZZWchLJuKSyDYGsCmv7AmGevRYjFMMKmgokPCaLqsZ6jLm5Na8",
  "key39": "5aoQMfBvQpr2yEgBw8n1SnzwugoeT6HAZzPgaCud1F7RToQJ76WY9RFDcPb9qphMYGwTxQk43WkgcK5zuNmuo6ib",
  "key40": "8TY5u2PBStquRwCmiYkbTU2YsTyKiEPFvvyqXDpVVfpQ8WyJocsavvdpdZaHD4pAwsQtRGNpefUph4euc3PRyRM",
  "key41": "hgUb6urqwVManaJJubwPReAjo4rrzhqR9P4GTTfxoAUptX9A7DqdcxBjqgpLHurJLdfnqoXBgGeGcRY3JKaFZf7",
  "key42": "3VsNpDpieQttT56FvU4SdVYLRYo85TzVvTsSgDRv1VDH2m3eFK4canFBsit3H7c69ekiwvgRRnfyibLzmNJ8ocKw",
  "key43": "3ShQAmdxo5Lxog5ydXPuQV7CTx61SZdiykVCdmA32rsgyuf45WCvr8T6FrcwUSq2Q9rteQm7GCGPPhUDiAWoE328",
  "key44": "3W5kb1rbfmr6dVjocRT2qQBURw3D3trPzqH3PGCXBRewHtb9kUjfLh2uSVYUJN9Njq4GJheR67oedAZv2bmdTa43",
  "key45": "3JYG191iBAijNGMygSzUxRbGD5Bid3Ttk7b2AQCTDfYPXY622XWn178fttu5ZWQM8hzPtMEMWaYi7B8mmEjkvErt",
  "key46": "48wJzQZREHsrJrY6urwzzq93Ne9ptzNtjab81xcvefdpRr8Le9x2dAUQJUhY51v4b2RtJiTCbMyK1HSmr5PujZ1V",
  "key47": "2a4shQdvwPwksA4T93pg8t5R57axfbgrjwqgpjGzFzcUAwBL1ikem5MJxpd6tvZLfp59Ym9v81VgqyJ62yLPcLuN",
  "key48": "5kNkspqMBS8LBLtUUigGL84AeFqiMdrgtfUXbdHAoDuyQ3MsF3qvD21ykoN8YEQW5Q9fHH57Sh4WLd4rSEAtuDaJ",
  "key49": "4smpRbcZhMBGqrcdsZGeos4od6PyNYmC8xP29Y2NJnhNvLEnRnJ5C3gpYZVJ7moE9mieiMiNC6taSmLNHpS7Lttv"
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
