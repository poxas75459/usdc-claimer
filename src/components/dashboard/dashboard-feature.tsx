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
    "LPph6fPshuyWY2fVFTGhLRKaModMYJWKDBUerhwUquDbRyZwz5hbai6vwwvcEjxcx2fFWTUjvYLpmbzoqzuP1mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GJp6DpaQpJKLN5X9kMoMBzWUx8rYzvTAXcm9MQCbBdyWbpkChR6cLvbEzEyAUaPEFH9L8m5MWS5QnYFo5Fn4Hx2",
  "key1": "4ANFpLeg7Cq7bBeU348m7H9QMnbxdm8tJU1kKAC4WQR2hcjth8shfH1AG47ztE3FKsbVGWgKPHLCnEh95mZqNpXv",
  "key2": "637bF216ZQ53su871AiRU5hBsXnrjbugd11UY6heDSx8M2mk9L17oF8Q5yGpEWfeASZWkXsRTThJvR1W5Pu2dkiS",
  "key3": "2ZHFgoBsYBcr3ipqUGuordeGhRU5DWFnSyUMdCj3ergqvNdQ3D67nZPbaA9yek7MZBi5xGtw2r7UfWKAamgbviiS",
  "key4": "5Vv6zZXdgTiGFdzJWonQAVVB9r4wmqSFMWCcURi1N7TkzqE4UPuz6N4WAL3iJnkaa8a7kVrLimG7NsbfPC86Mwyo",
  "key5": "LkLWmnphyGrRMikqdYzu1AzCtHnJz1f2NfWjkVUNv3cPfRM18gvuqCooX8BHB4gULGdKrXZN4oapCnByorSTR6a",
  "key6": "43SupgRh7FndchTi6XdKCdjRvqByrNYrLGcp74SAWJ2MPY3dGJtrauj28hQBvuMXACmRUKyCK9Y9hrykCwRY3hi5",
  "key7": "3qJY8TAou7xjxYiBmLC8X87vzMwYiPSZLQWcCH1zJpfgp99X1aiywjtNFqGiajTbBRhZqNtvskWS2guvqEgbFSuT",
  "key8": "2gVspHT7hE92X5u991fBSkSY8Nn5nU1YdQL148xDbKq9W16URfRFuU87u4eJ8HdsQAfy3YDT7yvwD1rzJjARY3wa",
  "key9": "viwiMUDC6BL8UFWo5afir5zTxZ5FDL5TiqDQ9Vg8AfLTH2BnsKupF69HP19SiNhV5yqRauv4aLWGKZYvzPL4URE",
  "key10": "21x9uDujAkWTzDNj31Bqym6jh4d6jsS3nZ97qcMC91Vmfv5DFozW1wxHVv6vHV1reNXSv3D6uziKLfo9UBLdZSzL",
  "key11": "2MHfHgy4qifc4q9J2Kfhfoxzng2DU3Z3AUhuq1PvXU5tuct1fLMozQHzx4EFRsKpJCxGPjKTXW4uLYns59wj3Y2M",
  "key12": "3w4UdV2hMskgcGj3Gh5WyYrhPs4jQcZadYv5qBeqApkWLrGTf9dPRxGX676L6SXrk15oHBuV9Ewj5CANZ9AizAdP",
  "key13": "67Dr4N9PcvtUnEG5hCFHLNs1Dpu6J7kfRCVYd3Cou2tJeFScfnXkDoWLekGHNHip7o1NRdNMdJB6AszBcjrdpcfp",
  "key14": "26YMFdmWv7JpvyERN5THcteAKn5udb5FENhSTPrNHKT5n9arAwrWtqnQmcvhkXtrumcourkyDi8g9CBVMWVJi7k2",
  "key15": "3gDDS2C3QtXeyseWLNet32NTQxebnFC7drZ9pCwwSHP6eaE37aFuKjKr81EzqoSQd6WZzcvzBRsFDMwtiUTmYd7k",
  "key16": "4qVHY6csj4pELzQJP4oSiSvYJ9fXEAKKwoFVBt5FgAFNtQoahEsRjykMQAThWqLNxvM3Fa2aWCpmHABvwhAKgFqt",
  "key17": "4yknyTZeTGcwVmSksPtGC8Goz5FoJAgXzryiomvZY5dbZjzNJusTG6qj1rhSwSRPjNwmMYt2nCcfE9BXzPpRS8oM",
  "key18": "2rdz9qnJC3LFH17ydxrDAUj3AdnUpPiMWWReZrioaT4BzRHmhpMtGHPH8uENtHvYovqk1nsBVV1ax8987CEgUcML",
  "key19": "2Qn5EX3fAEBT9ZXKMVBd3m3JVPsiKa73jRS8pRuh7WWuzHzg1cdLGXzKxCkbkvZX5p6C1EWHRRe7FBFGePwd3xwr",
  "key20": "kSPNkgFh8UPRSwyxRHXna9RFxVJVsPTPqSdHKK3bQHQbErmccndr2NL6LcHsKCQx4UDWNdg24SXkHAHpuDqKF4D",
  "key21": "5NiujExL3Ej7AW9j1uDLTPLC4AXwVvTedKUv359RhcSz4N5oZ3ciK5QEmNpwzb2CXDVd7zCQKhH215Z4QArNoeX4",
  "key22": "Z3RuitLt25jxM5KEdCFW1ynNTHeA8CiDRAbYeDARUNjKuHaMEfBKP7VLBY1J3iPSYFyr55J7G8QKEmjXVZcVm5V",
  "key23": "QTEzYrZegQzsCMxuqTQw1aHvVwpyzQKFVdc7ob7bbrLEKsN5wDvKyEtbT4F4KXDH9vxRmqLJQ285kG9V3UrGjpD",
  "key24": "4Hdy2tnL9xK7jvFnA4GVMJfa3zJdS77b68ff6prNqYAzYU6RzGCJ8Mu6ytuD239aioGKbmch4RDxZHiX7mhANEdu",
  "key25": "4Xh4mGSqpMDdznoqgAmWe4kELH1Prs4SbsTTGQTA9YyAuac4mJRu9v6CXWyQyPJU3tcTtWTBn9Mx24Gru25TmKxC",
  "key26": "4rHZmWr859gc4f4t77cQeyt6osziEGKzYyAtvxgu7PFpUDowGPLGDFGbmSY28p4c9QRDH1X5uj2oAarF5Uzqtm3g",
  "key27": "4CSPdkQ9yddpnQH3MKaWB9FTCCL4Fnva6o76aYUppMXyEKeVnxtQQZqF5tJMmv4HUhS6GCmmL3mDjAUknirTKkGw",
  "key28": "24SW1pTFKfR3sGS1mY7ofS2mSUyG7TMeWrdHJ1TU8TyZsuzeB4gUzwbpzLQWbwfYUpEvdDAQCojqhS3M293puW8J",
  "key29": "38r1PHsMwgUSTWnTWsD8ZBkR6KgjYi2EfTnyai57a4EcE5qcQUxbHfqd2j7HHus2xRrBv82oEMyK2KDUjgRrwNs7",
  "key30": "5kd2c2xaXBFKwbzWsyn3fzQg8rjDSXbF5pganNyPCDRknXVGAJNnrcyajo2oxkk7Ws6gcYB4PaTDZuknKFUkT7Ks",
  "key31": "27PRKURKMj8kA7WD59uKR5pssRJwAy84DFM4u68xRBTafwhhWJuq5R8BXRLR5BjnGbPg3Csc1QNSe7QLDodufi6f",
  "key32": "4SDR4wBTy4AHcMARX3SzdkBPFArrxxSP6mQV5oCXe3i3acVNWNZ6R485MGJ9pshUHh84WUmDFxwKWZiHZK2yumNS",
  "key33": "5Brr3RmaDnYzU2F4yBTXNTp9cvD6VwxocsUufm6rt5qa4PgW9ihafwYfnFfatyjRP24BJ2bGxDKC1sEXeaNjLQDE",
  "key34": "4ErKmYgi4Lact3F3Upk5sxEubAxzUefX9Lhctyfg8n5Yf9WmEY2HZFZkq1eqtnyLyM4xchJDybiSHTkyv9LCXBQo",
  "key35": "7XXwKwAhoCs2MXX8CunNVJRpxT6TC3yyGpDQoeUNxqNGPhhwoEzSoEmRXYosVkHfuzFfYH7BQR643cp2mWt11xt",
  "key36": "LivKS6dqgUHZLFwHUFMh7bHpvCGhgRnvtNPMyGKrh7qYJcJJQdgDa1zi14aJBq9M3zESBNRRHmQ4z8Pua778AmX",
  "key37": "E9PYMUpte3pZg31vyxt5oMegPEgBnRpygVUdPUhTnZomFn13H8G8MGiuPFXx3S8vyuxkJJK8gSNrdd8aYtDgRKw",
  "key38": "5rHxxPy8Ehq2CC1RPivBVNBsjAf7DV77NfobBKVpuCYhnrdtWNaevCPuZd61Y684Q3H8g2Da8Js9qGeVgNdnWs8A",
  "key39": "33rn2Qmn1XD6eL4r7CKHqwzGqMz3EhK9K6h5qRYgD2Usxqe1ZFD3M8HcySVeHinu2frfu8pCxynnJMp2bdoNp1oE",
  "key40": "5j3WVSYdhu4Zt6FHpfjinchwmTfJtWcBEpeDohrdgomU9V9paXiMFjxukBMpSUDGmT5Uzt9SLjfuXRhFnVgwN8na",
  "key41": "63LDZGxwM5eYLPQyV34dzzAQhJSgYb4Eej32dn6MM5YKiENqM4qVnYstJKrGpKyoB6mShotedi2Nik2jGvhooU6f",
  "key42": "3ngmGHnzrDDWXhRUzXnkipbYbi6EPk7A68GM5t5drCUM6dJEZrQKehW5uqotNi66XhXAfrNfPUrB17SuWKwmmFdN",
  "key43": "5ttHBFeCg2RnVMv7gtQaGFiThQGFHoXb5a9Q6uZPzQtHj21tSWhaDUBP9gTBizgwbhASbGngnra58nHpjRHDE2rd",
  "key44": "5np3GmmmvUZ7e4kMT4HQDGph6VLARjgzAKmLafcG1cenfvETaZfFx2JnAz8ePqrjQVRhk3JHQVwc8yCBZF5GqjP4",
  "key45": "5PXxmrWpYaQateUXYUD1T4hkHkc1DKH9Lav8w9Ack5SaDg4hGPdJGvmvhVieDuED1yFFiAezsDHPDQBfpSHsvuJ5",
  "key46": "5fPugkT1tGG4DM18ohBDvSQRP4Zg8fJaSSnrGXQTKuRbRKLpb3uDQd1WBgqfGe28YjAqRhkJx42v5Wjs9XxqdX48",
  "key47": "3gR9ESuMHDrXnFJzcDDyHphZd3TmYm3ajkwfPBMpnGcwLFyksVFju6vRjgr9sddSvBLxd9YVH3do6ditgNWSGzM",
  "key48": "23QSk7o5FhND3RvPMK7TMzc49MLxD3f28tQAcmVhVJkN2n9Hjb1n95nAm9vBsiAM8WpXZSsrxXbsePxPYHH8ZKp6",
  "key49": "4JdmivqbEJL8Rua3wEF9ohanP8hR2kQLxiHyrhKEqDomHiHfyERUT5cAi8LbgzGA7jcjj9EEhqBMEt3uuJvoTRKE"
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
