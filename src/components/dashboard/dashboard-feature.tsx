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
    "2jZ76YZuB4pQPFDg2SydihFAfMCZBR6EqQYXja7RKrzxaoFhhby3HwCAHyu2QdjyaxgkFBKe4sFc4eBt6WzJcZR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fv6dWK6jMZZAYGb2vU1hijGgFjHtFD56a5HeMtSaaavUVcVST8RPayjoJa5Bb7wRR9YPLAkaZGQVr53xWgd6sy7",
  "key1": "3sKzzuLjaeoZ5UkyPUJtVzgE9CJBsSPPpMXXRZUGwr8f2CkPN36ZFzResGcGB3e5f17DWxSbk4aCWyX57dX8cBNb",
  "key2": "2V3j9hQ1fRkLh9oDTaoPW5Nz31TPJkaVcwqrb8d81Tw8dehafDry86tv1H45XcJLnMxAZvg3PvD1SrhnLT9eDKbH",
  "key3": "4aobVMh2dHeeD6RAainKM4CTV4pP9mUhysGEXbNuvv9oTLSJaJwtFbFCrzXjSbfAiXUUDRmVCD247KaPuT3hK3kA",
  "key4": "2ayo9ZYRaCYZVtk2aR57iYQMNsJ5LkeCTCFEyN4VMQ3yMp9LpdytfG8VuxxdqXh8LcGcqbLS3yfFAtgxbLfzDFAY",
  "key5": "4hBFoAe3RAqgDwGkFAjVK1L36RTTgVN8W42zPdEPDrcBeRtJxdp3p2X9izTFHevqH9ddC1MChLBm7BgcB5iuTTmA",
  "key6": "3CV5GnfcY3yhWke3a41uyQa1f6ZRXg32wbGKcZnmbHdyHmvSREj8amUGCwZmRxHGDJhiS7u3dCFANuGNMtPxoMMK",
  "key7": "2qMxyxZZ3XQipyGi8e4ccfzcRcdJuDoWVLdiuhhA2pr4xth11Z9TiwBWhp55dVVZwzjXVGFhmWq7subsEgDiXYWg",
  "key8": "4HgtFe1McDYLvRZu41fk5nbHsZgsWhV5yVRPfE6JDiRedQtRnF67ytWpeMoBZNB5AkCFVTBXjBFporpG8fTxVWo8",
  "key9": "3nuyuADf1rxBv3Nr67HuBHXv3mW2FADu1twUhrqu1DtqZJTP8UuHmid1RbAQ3pEqS4rvjvtXsvJXLSREtBMZfCDo",
  "key10": "32PhRmnneWTd13ctZS7vqXCBQrR69cNAF2W7cXL7kZvuAmqCKSbmCY79RsKEorjq1kZPMsK3gZcS1ubG4qp7A2Tt",
  "key11": "34h7eFto6k2Ej8Ea57McCz6X2VvPhGiY3yfWJDGxWz7J9a1w1GcfUru1FGU1qYSw6eQK76AA4fwTwS69o79gMmjL",
  "key12": "46vDUHuAaiM7Vr3QAdMEWLTwveouMWDxyqYzA6Pk8i8q796BcavuN1WirktL68T8DToahREVU25JouGATY5YZa4M",
  "key13": "2DRZ9gmJJfzeD7NUfyusQwNaqKhk2p66V2rCHXWQ7yy9W8hHJrsB2fogr25JBPtG9WL3bvQKu6rKWMatH8R83LnE",
  "key14": "2my7RJJXSdpRRHpafYaUM5NNJyQTkrurGVrZB53h9RGS29md5TaHJRQBMrBAxMYyjnxCHQG8v44xed8Smnv74nGF",
  "key15": "5wgtuWPZNkvSCt2VkAUYUTxFxFFB5y6z2MsuZaz9YWu3tAknH9b3GkEX7PfwZ4d64HQ9RGCqQopcZ52LCNxCxvfs",
  "key16": "tH5YjpcVzVkYyQwGbrZzn8L7Pt2voQJyoGyukYDiD1Kz3HTPFgqLgTuTgm1Fd6RukSy5nvM8SBcW1ELnUVkHC2z",
  "key17": "D2k5UFrg1CeFMg4re1eSBaNCWYhbse8V1gQUFZagBnsMYHSwNETEhjXFh1QMuoXZn6AdnMAyGUA6t3fLYfq5x61",
  "key18": "TxdLpu4h3hMLwoTSabswTftU2J8w7F24F9gDt7Z5WJM6kqE59UawRHEzmPS6xozYtZeRp2NstQWbvK6zaNNaxm5",
  "key19": "2AhjZ3XCqGQq7JcStHhcsv8sDtZgLd6PzgPvYDSRCZ1porSxVGuFES423C4NKDtoXhyQo9dBQDWS5fsVmihBi7pK",
  "key20": "3QF5jJtYjGkA83ZHDfT2gdp2qwk2ysLbABXDGqbWfgTDpP2S9qJruw6RjQYVtcgFXqKqP8eZJywYP4REa2HR3S4o",
  "key21": "4bBrZ9gEo2ubhb7op6UFf39gTN4Hw2kyGSbUPkAkLxaf17m746g3i3cb2yKZs84QUqhwwqaLbUstJ7MFKrvbYtgV",
  "key22": "8BHzBmb7A3rrKTQMMi6yMkqDB6VMwWVYauZQ3rPGd7SrG8YAidM4U3HWfhXhyE1Barq3SQxZq64AWUWvWmf5Fys",
  "key23": "4uwsLryvrxmcw2NKRBXE5W4pf3NZq4xnPepWfMhtonpDrhQVChE3hyMZ62t2JwJibEvaGrqLGp12UGAPjiFJGYDp",
  "key24": "3MoN7xAyrhK8U8j1PjV8XXVRvhypvSmVJWJ7sap9ocWSmVTeFrK3b6LabNMwZJQNKiYpo4RzGTLAecqgw1Gvjn1d",
  "key25": "2GuVMt85KP1jKtYWahvyibjyUR4mjNJ7UfRprFgFa8ZKD1D4ggqosDxm9ddjmNhDUrvT5Nfzp16veznxr2JqWcgG",
  "key26": "32zbSMobDg71HUu27PBpPHf3Sfrc9BVYmDBe3k8ddp6xZkUFjiyWpJAGqic6AVFdLCPfgAuRF6sqZDe8kEvP34t9",
  "key27": "5JBtxMMNt1zq6apjwmm34JnarjHnwo7rC8MKVgGvF9Qg1taEFjy1TKsPGcxW8ZfGw6h6xFxVuqLpczYUxakPqW4r",
  "key28": "2KUy6ypc2QNsSL4kPF9Tv1oYN27dsyHMhSu1ULWZXCtVUAEhPJNqYiFnoQwhtKib6JRErUqFcUREJRZ2VRCJWqVS",
  "key29": "ddYuLLKysNAYJRBzhXBr5jeCEN5pujeAWahTmEWhHQsEw2YWQKzGaHFytVUEv2oLMTUKF1ycXB4L5ti5aQyz9aq",
  "key30": "64EvdYZxjo4RQWMnsgNYBnaUtRgTW9XCwrCYao8MKc9SQnnWw2fxdMA1dtadcFjNk5yokVWkByn5TXNtic5k1SQW",
  "key31": "3ThFgck5TEEPZ84j11axDzoEaMcN8NkcvcMyEURwKkWDUYu7Rw8ufyuvYrKnR5EHyts54kZitrebQM66cXYauhbe",
  "key32": "4GcGertciSUmNFv5zsWDikUVpka8o2PJFPxHStBV5xwYqQhyc7Ek4cMs2PcvYhKtAx7i6pWtWu3fwR3B72yo2joe",
  "key33": "4unVXN7TnQJXdn7hYJhMJGrbabRKdopLPofF6MivuswBvKfDE5G72rYNi28UoDD4ipNwD6g2Xu3B9eEJyWdUDhi",
  "key34": "2Sb6bKDxiYducCNbeUgL1esWiUSGpxc2a2o1XkpVzQ7Tokx8EGWmisDAogSJnwPQ9omW7SJ3suq4EqrE5v35pUg9",
  "key35": "5nTT1CGens7H5gWTxxGRg5Ny2netLdj2bSooHtfEwZrvqaUB9AnydVnWfuyneuX6HNrj3hcFa7CPWGtN4bqbgnN6",
  "key36": "YP37K2P2TLQyikEpmpdcCkY7K5wunsnsMFyTwDfdrCTznkey2EgkTmDiwz5SWXgNrUAM5E41PfDtcGiqD1Bqktt",
  "key37": "5rXm5ajUtph9nj1CBBTkWTRwxhZfzy7c8N5nakXJhvEQATpYqv7MfFWHmBZRXmVmv6VZrZd7A8u6AzemAyLbFXmP",
  "key38": "3hFSHsEbZ3VcPjqvCdGxxoK29HajPU5s1u9Q1T614kanrbhGEmMCzvXnnkNHL5E8pgbZ3VC2he7jKvZrU3EHp8Lc",
  "key39": "5PxwfYJUnSyK4gYmtFRwt57oJTPuKLsVviKxZbJVtqE7KC8NDW66eLCe8JwQsMZRBnKfcNQqK9zm3UbEYHd8YTbE",
  "key40": "2AQXmnxNsuRMb7ujzyGiYxRpXcauXNJn1UvfzGMHQqs76wgnMfbgEKPa7LQ88wK2Qgg3we5k2K2soPjxCRn1CuMs",
  "key41": "5GcS2izudkS8vV7po2nWfKqbWFx9JXojHKkY6KKPST9MA9baBHKCkmzH3ig5RSE5K4o1P2PK1yfQutXq4mmuDXw5",
  "key42": "5NHpdxq8GetJazxE3DaKcWydnLK3sJsWyMwFzeQw4xg1mbTdvUeFH1L3ZZogBrH9aBFivCisKUGCkPoagVdgmmGv",
  "key43": "4hu9aYGijn3D3Fs6tuFwegjRmuVVF8ftKVGxJiDmpwbSPxme2A2ZFhHAMqhoaBQN9LdkHfaLmMNTahdNpfLHb2EQ",
  "key44": "3ktgwkEyxyrwyicQZcjEu1wDf1uYwYfosNMkvguJUaiUJv8ZRjbJ8bfuh31BBmcSPHUBSVYJvQK8RWsNo8oi9kjE",
  "key45": "5DUznYiihyYuKrrv6T2CQp6WTkHG2CjfzhMMGDANs2vAPLwo39j9nVN65L6yXwqXeoq8dtZ3Qzm63Ks5a91f7ESR",
  "key46": "2wjnUqZRcLeedJ32svB2fnba6cKesbVdfHEMyXRE5CWgFA7uvSgatFbQB1Tj89uMQ661rkk3Bvy5i3qBoAetuqYy",
  "key47": "3xups4a5Z2yYAxTTtR34ZaJGqoSpHhATrr1go4Q9f5sH7J5mLENZcb8zWsShxJ4JMcea9VrhFPSGLWhrgu1AQcjF"
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
