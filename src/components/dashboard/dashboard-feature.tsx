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
    "38KDybtARJDzaQ2XV24aWrTy99fPmPGDFsfcN9HxK6Dcyb4yKZ3G5nW6UuJTmaUKgMHUgZYTT3H2JmLQh5rxgHCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27nQEKoPMXypPW8cPe6TqSduvaKMVF79NrxwU5g2n9oi6qcGLzA2FPxCamH6fNfyStQN7niycwmEkGD3NziaZRJ2",
  "key1": "53GdKfDR8kwNMAPWsrawaX8kn99FzrWwdQ1qYR55DxFfyZPgfogYZjN7aekwAWRV4dN5CqxDn72QkRty8pBsMWsJ",
  "key2": "2TLSNNxYpAYNxL17eiUyPy8oAsUFeRHKZAJL2QcG94fYyVSfr2A3voCPzjTfz6RQDy6BKervet95QeiRnsDWx315",
  "key3": "2zrSv2MwaZqqbeaPAq6kLgdwUNnpEeSAP6v482Ppvjfe2Sm7gRzuzK8AkZBYG9LM5qvLLKHrShGJU1VeRcioqCRV",
  "key4": "3rDh5ARC6mKjSVB9nbeo35SKYTVhueeTQ7wMoGSZUCbYLHXq9CyFafNci3XcTKGVDYS3MkxrT4CD5uzU1YFGk5XV",
  "key5": "4nsfEw5yoQgP1DPkL3yFtDG3Z3ERS1eMfa96SG9jTTQYBc2cxzgYubi6d4DXqh2JqFH4br9vhYkD1ikBe8NaD9z4",
  "key6": "5kjHQD9pxJumvQiAPhanPZeh23BNkh1TWT7omJTQkQKN7MAZHohjAqnDUQXXiPSG7MwMVFqJxq2NgipiLmzCjqgm",
  "key7": "5H83t1VxTxNoBPDHE4zU2a2VgC8h6wJT3BR61QsWFchwDFtbDhgV4avCqJNvpeQWBf9nr7LbPEUq8u7zdFjNuEv5",
  "key8": "5cNRTtbFUMaEkDhxHFhXrS9HNmDtqATB8GH5p6EvLyoP31jN79Msn96FSTr3WkD7iTcBLoek33FbeAdfszjCGgaE",
  "key9": "3XiShknMpDdGCct8cGU7CYDGQcndHYz85D5WULu2eoN9nTNgPFmR3pzzpPxgt5YbkQLXTzzUSDBet3nV77E32moi",
  "key10": "LS9nLrpYpEegXNBq6aa5actGi7fJCFBBh6iD4GZ98kcWKidZQtNqsqSctdJiiLVVMYkTs9Km9QiMBDLh46Cprqd",
  "key11": "65A3g7zhMzrn8vr3Jnk7QaXZAnJ2nr5s1jEBkFFNRoNkb2f6wvNeEJcBYjEdmJy17vGKQ5J9Vaa4CST5cmVxgwNJ",
  "key12": "4Kwj5JgkxceirvbUrb6uCqzvrb1MWMDShy8Kp8WcZbKYsa1TtCEzYMbur1xrJufBVc2ETWFrzYatWMnZFwhgz1HV",
  "key13": "YRiH2TKHu1fKcaHLVzfM4wRLoNsfR2eSATasqtEBf5noUCvbE1twVpEPVW582vg4iwBuExmLrfbtkf8DAgrBPPc",
  "key14": "38p2LXvwsv7QmBjUYJsS9KcUGyhvyZGh2ynZWqMhKHsD4NMsRGwKdcaVYtSK8KRsUgTLfAswtqHLskJkXJEDArrn",
  "key15": "22BS1L2sW5VLhk9o5NSjzWaqCaPNaXQK1CU1i62H9w3XpYRustTAGr8rzsAqkEK9bxKxeHSu8tzuxRume6LVMFoz",
  "key16": "2AGb2C23LLr1RufWiT2w1V4hGbqR1Lv4RjY4kfCrPUHsCdm9rjRFFKt5npdrUjEYppc3PCoDA9mptUwiM6kEw6av",
  "key17": "3PzS9941AaxY6rc2Q5qZuks37bGXTg5kCC2WGdE2x4mbK4ZbhSGK8GZwaYYr7aSJvzdWqEayVbGmgPhEQY3woNMS",
  "key18": "5B8AvZuYbp7CBkdqueCwbS787DF32gR91a8RTWatuYETQ1fGPyHWbFBR6ZzfKMBWmjdjYXr9sWhiRvB1pPasK9Y1",
  "key19": "a4bNsVmVWKg3rKAGTU3FPwB3u6cf5dVV94oL7K7oEGbXJ5gHBCY8Hf2tQhdTrZ5yWUTZE74fMBKR54pwu7fezTX",
  "key20": "5UhdZFfjj6XwK6R6yChPjjWe711jGaKdcpJEiHwYbAcsyT8tp5fekE6RhTKW9bm7RQXBaQshCSmQKdquPDoFPN7i",
  "key21": "4PgBReTBjodGsy8EicDiJTixeY6sEkWMkbu6RyrHAafcqhTgtCvCGivesf8MH1FfgtkcLeBFqnFzobqrCRbx7Jbj",
  "key22": "3Qpbop9syuR7ETNBFLGMiG4mB6LfeefArqEujfcivm5fKDMd92xnBybBbx678efiuZ3d7fMj5UftN2LYAGtR5j73",
  "key23": "4nig2gDAyUy6QvZrhm2VWy9nnp2H6Ekxtv82p6SBZuHd24XdF7z3s4QiUKp6cXGP6EmXBas58AU7612KMUDxMczD",
  "key24": "2DpczPb57KxqErQTindosWK9ygbMtD3MWUqkJs49m83vy3cMiRJQM5wvdeaRyxPnoXvvyZGtsWWYi3mekEcfXHUK",
  "key25": "5QUxvag6v9DxQCwEtsJtRwrJ9VArLpT8qQiRpLkrR65H43Jn2gPWfDtk66Rs8uYxSqynYmTzvxTa5Q2fBt9McZX",
  "key26": "48BPb8bXptVRKZ3Uux7vimK7mp2b32NisVixwPwBRdLB9bVFXBVvVptUyxdAmhBQKLDPvcrSkUGsEfqJmhKnphnq",
  "key27": "29P6k1KwXL57ndS3GE72pa6M4WCGc8L6NyqeSG2vMqk6dvUgsyh8GP9xKSpDfaua2XTzjXzBHvGq1KS57Jmr9hzk",
  "key28": "8FqvbpvuiQbKYZXzVsCnmnDVH5J2GVJwfA6RzFTnZCKksJ2UXAQndxnJnRnrDC36oM95nPgU9rZfUzMKwLRG5dS",
  "key29": "5mXMdGiJPdWCNomTXucqZVcpiywEfmERF3kfABeXVzRvZg3BRt3m9DKPH5DQHdqZ1uE6NXHc7TNoEuL5agseCU18",
  "key30": "3zEtEeECELXF4NMU21wFqveTLhk2ujFZGqwyfhs4VGfMCsqrd3DpHaDk3QHEJ3mjsg4zou3rrkcq9XiEGpm9VUur",
  "key31": "22fihAsWWLRFPZkkEMSLsn2xZPWxZ9yzL1J2GQLfQomU266Pmpooj6VU1erxN4uLrQJWQW1RhqvfDNWhXLNwdFxP",
  "key32": "5npNnWLssgt6FPfxFm6PQ5yGEaPzBw6X4zLXos4HkJgMYjG8HAfumKPpjvrcS4dzWKRFJnp6RGXp6ggzFbQmjqkk",
  "key33": "57crN33wNrQNDpArG35o14zWZgn5aNMuo2yiASAYyqMVzfXGvfqojg5RM1cLTSKkYu9vvp2zrKPCSyVGbhZ8XBZq",
  "key34": "42RtoXocaJh1rfceEywYysN9yvRrzaCHprBAfxBALS2Dumj7j7t2UyYU9Ydirp3EjqdvqVBtNz7gQWfYXRpiYP4s",
  "key35": "3nnHVedcgFxepFvxKTSxmsBLALdKVaYBzYVXg9aBXWZzvZ1jxBH45rET8zX386b9rNYT29nXSeVcmAU4LNqr5YMy",
  "key36": "2dXvkdGkyRwyZCkbHsez1qbT1hQjRjn3NgjX7hXTFyCnZXpjd1z7JoT9uB2oQYcuYYTCUcJ7Zs3vdNb28wBx6DsC",
  "key37": "5m7Cf2jvAUBSH93RirbGqiUNkyq4hwNZ64Mnj4MfQxSypTeMWiJ3kwL6FQxKqv2cnjAxUGcNAPWwAG8MNj93v6q1",
  "key38": "2wKp3iqyZGUJHwWfDPhRhcE5Y5g92N19AfGexCaJmEcsnoNpgfsBKpY1bfNpKaGem9MnkG7PvMiHmZpB1qW3hVnX",
  "key39": "2mijVymLVXqcsPa8g3ZC5Xk7RwQ63dJrTVoeVUwgyZPPJUjNcxrh5fD2T9XByNsrrvQGTwtBtAhvuPTEYFo6A6zV",
  "key40": "N8yYbPpAZFU2Zx8dtwbEEd3D12RjLpyXYEjc4KiEpBphjKXmDMFWUuMHwB5wUSqS6c6C6EjAMZTWSbVZjWtXJSF",
  "key41": "2djcKaG5zVCBuuDwyq2Qo2NRibyNnoAb2DpeXPAKo1rhpKkaeo4a3MrfxJrrZ4yAJc6EbDnotPjb1Le7fkDAtvjx",
  "key42": "4ePRpgPmTkLMDxFRC2v2aqoqEgKGWVDdWy3BuNiP6AzyigouMyR83Sg6WZ4UNVqQvzVdUhpn83dqYNzkuR4xSFYC",
  "key43": "2p1beQjRBUxK2urKL7ypymYnkWXExuRrjeKenGodXNSncjZ6db128FMHSfowLwj84gDWUvAmoBa3zytc34PbwKF9",
  "key44": "2mVmqUwKpxH5p6sw7rTHzJfjmXdH626m3xwwmWzSWNFhhYCRE8ahq8c3xz3WxCisTeCQ3uAP9jJJRoWs3KXikhC",
  "key45": "2kfpERUKWLJc5KjUu8xPDZnpHzuu768pjA6meEU7oHUKEJ424JpuGLnompvvx8yDkoeRSoTRpJJnLs5LiuCDtCYe",
  "key46": "vpNMafZyaQjwyTyS7wZc6ESQ3Yt5aPt4NyNmByTUzCUg3iCysN21nMDf3ZiqnA9eyZNaKzFvS4DoTPCFTjnSznp"
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
