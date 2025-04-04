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
    "4BbE3ckedsov4EM1DTMHQ9jFjhuuRSeH1Xx7MpEWjH6ZLpACvJFWmwLxg16DrdwPvvr462vyyrLtyjbWQmeRm2do"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64voXM9NAA5jh8fkSgAYKwfL494SjqCqxmCGbaYYG23HbyTeDxdmnToxNFDPHdbGhdQ7Kw2UgwBKsC1YauUCtFp8",
  "key1": "3RRLnnbtRUneYrRTHYsPZaTbePikDepnJ6A5pWYWLz84Xvu3GX9eW7CAJjDtaRhrya9qSMhGBJNFcqAJHFzVssFn",
  "key2": "3qVnwCrjWaiwYJd28b8Q19dVHMWpo9ziqtEgoQJKDcQiNWbHWVZkM2kjSKrffwraC6NdH89pEBAyYbEAVDv3qpoF",
  "key3": "2DcCrPp26c9xK6ZxPXgfMUqKakSDadmXTLS8kkRpzEAZg4MnfcbPhiJFjsnW1B3sGng8a8YrDcsN54G8TCqypHvh",
  "key4": "4YUPEEKWhDxM462EGe89ydWxwxP7DdqKbaThgraUPZ7fAyqK9Ucp4zkMxJTuRTGi26WLBdU2cLky4Z6vkZdhmkqv",
  "key5": "2zckwfFjU7vegubQNrXVknGYL8YzNq3xMg2i9h2fRP21AmyPhJCVZ5F8k2GYZwn5oro5WfLs9DsGuxuvZobvaLqL",
  "key6": "5JSZCVfmYUByCXi286ZcYidbsD1xpvgSwmD9EQE2oMq3qozYsicQLc5WmYPPLkk6iCtXUknbn13S3vC4T2MNxuDr",
  "key7": "22VZJCF4sXo4t9Zuxi1yVxiSeFuV24GN56vDkz46cPVkMRCAh9UvrEcbutBFj6dmW2EENBMvPUJ7Mp9BHcSYfCC9",
  "key8": "4DU9GpecRvEwf35So91hTxn4rNTNTU8V6ypwG9SFqaLspUQ8xQUFNa5DDQjDJpxUUFwqnk76FfXkoV5Fb9RB2wMP",
  "key9": "5xQ6vmRVhQGSPUniotiQRUHSchfYCKrNQGPourXLcB41h9sYcWeQEgWQvwQ8KEDSwxnjJ9ZEgofnh3erKrjhj256",
  "key10": "2h3eUX7apfrEmjifvNDNyqG28tB1BjANqV3WH3gwjinKmKr6irn85XXnmRxQwp8D8EJNi2fcJnZFbJuEfVtxasf4",
  "key11": "27RCDkacVzK8DBzH4XqSa6p3JbW7KvW8BuvUCQ7K8RH8aixTTpP7TW2bQvm8DXtWQVz6ijiJHigWEfkE1kbsgHYL",
  "key12": "5VWu2KspsFLoKbxdGheiLyjWjbU4A27xgD2G2Z4vxnwfTqgV7t3cgAykzaEg65hZG41hcqg9u2qVrxJkiM6TvXxr",
  "key13": "qNb8kfoLiVePJwvoj8TtvwGoG6ostm7mWEezPF2Nbd5H9wSETWvkamYuyqzoRomxYZL5xdvgUPcxCATJ7eNtFxa",
  "key14": "3SN78LXiXRwidZHZPWp4dfos5AbVhwSe9KY77pqiaJa3MwNXbmDzm9Tivbbt8nLRGwyagqff2cNAVRYMa7pTTaaM",
  "key15": "24vJZroenS413MLDyqQF7RVvRXEYE8qAw1sJyZL8pAVfqfuWeC3bdnNcL26popwBSaepzdGqzzRbuu6UtAgE7CS2",
  "key16": "2FsD2dbWWACR73q48VgoAeMYcN5Cp2jMrjYjBeGHLXZBQnp3anjx8bpHWUag2qdaqQk6i2jHACqLHhZKyxLmA62J",
  "key17": "4VVHxfMsywaLrG2casDr8rgBBQijZroVLBneLRXVJPSXbcdw4Wz6q1EN1CNCFkSuWxSmQYAPrwnW1NA9nyKKL87K",
  "key18": "f1nSZ4JwcVUtTommK1zAWKXQSP9fMWbSyQNQnLWmxqeEptMHJLc9nCiG69bQaJhbCinmBcUbfN92Eq8tJFMPJu5",
  "key19": "5bxTRKzbzCQKmfSbn3Pq5gQ1qjaNth5z4v1kxc34FhL2iP4SNrQfUFxGRJUx2p7kygVoScdyEgsswHHWHBRat9e3",
  "key20": "3ro7d7uhqAVVY4tqeU59eocKmyf9jFoqeUYNcTE4rtGG6dfNmVQkybgdpqZ99qQfr4otgWQi2nQ3R21Vh7pS2AG4",
  "key21": "uJwcpqBCvwDCpFkMqdbenAspLJupuLSb91qioEmFiEGujjiVAskUfHpX5A2Cy4oJcCqBxosWGRkxsWziB8tWkoV",
  "key22": "3DNpXmg8oFFYPoUAbguMWcCHwwgfGtEF7Gh681Cfqn1wnfqRvymsVvQh3cv2SXvJBCzoHpqj47zev25Bqh8SUn4V",
  "key23": "2DcyXQg9zquMR5gMaw7WUpoQQY67BjMo6tTWUBct773TE1YPSoifCvUsQCUU17hhmKFKPzYkoN5ztFVWTsLuYjbL",
  "key24": "4P3HCg4iFokCmzYfBvjMW6Zwfdoq8igWo1NoaUQ2GVBLz2Hv7HrgUjSqTrRD6DGWBoGEdS1Kkx6ukQ8X63uiMj56",
  "key25": "4ibGcVipW4Z827c5Q4ysNR41js3gTTFtwYvHE7yJKpvTCRaM35UcuSiosCga1AV3XpT8Z8Bazvi2FpwPHnSK5f6B",
  "key26": "2G7Q5jq7twvwmDahRdoYrGdjTgopgLbJUhiRLc7CqomdNGTmoiUx7BhCU27Lnnuqpk29MS1KFMZmF7RNiyH7rNs7",
  "key27": "3EhBXQw1XmuyqCpnd7JT33tzxcPcoyLSwsRJNcGYFp7m7RQ5ANTFJnqwaEFseFDsYWJ4sXRcbhVAkUqwEbJuquLN",
  "key28": "UmV9aVuyHVgjWjBTnEQTS7XfsvgUoxbNwZwQLUwNFwtgZSKVuy3dUcQrpRhvjjAZfySFeZnCLzwQQ2dAke3WJB8",
  "key29": "59yrvdParNX7S9EWyEXRz1CS3D7N1WZmESf5shxe9i4x8Z5CdvieSPxKmMTS6fnqctwPNcRP5VGt5d5M3CSkPsf",
  "key30": "9gyWmbMRhw54KKypthULLeDybYncTgcV59saJyS7VhA2PQUKaedzbWxSjpPhvNBhdAc6c6a8tDWq1iX5UjKkjdp",
  "key31": "4iXP18tdxKrftrmfYQKWXEjd9FkDSFmY1BdVUFJhQC1PduH6Qc9WN4DDcaj1Rad1cDKUCEtV5tmy3w41MFX9W7LM",
  "key32": "3zsmff3J53meRhQCqqi3NL1viiqtwmYYg43kW8LaaRY1wwJRQKzHXc1136UyH6U5o3yFUoMLS3vqdRkDCeNmbPTx",
  "key33": "Apesx41PWi41h9C6fX1S8w4hon5JXVpr9bzpkzbwkrxy9Tz5baNRXef5KRbX8pQxUXMnQQtwZASKiWF5CkrqTFB",
  "key34": "5GSz5AtQjFKDUZH6AwNRXb3hjiH1i68HG4QEKHuWrh8fm64WBksQ2UmEa5UkiFoRHrUoEjCLjg8fx1AhYWfxrnGx",
  "key35": "3966sf9WyzHL5m4KCa9ENyuTmFryAWhQrX6hSBq19dtAaX9T9xaNqRtUDP2bCrokpXsZG2bTL2vpuC7zT41hTmE4",
  "key36": "45zUuKL2d8NC1FvZnB3Xjk6aVeXpU6vUZ7QeLsvJxACfpM636LqgSBzzFYVxQA1BFVtryzy8AMBtmFpTHbCGb5nd",
  "key37": "5tYvpwgVb5LWdWXtAxAYnbV6EiHKRFVPfQ9TfvK5sdNzc4Nnv93WkC72oZfMNRgwjBzkdPKcF2Q2puz7TnzLJ4QS",
  "key38": "2hD2xg4VC5eAciGHWkzp6oWnWcxaouSFcH5am8HhMzkmEVeDuwYQ9K4E7i3msomAvBVEeBnKsAxNf2pDxxq6XazS",
  "key39": "auMv5mtJXZQJW1dNUCEf69rfkSMoXbZPhXwrZXicWPXoPVzoSSdpi7458A6RHn84ZAg2zQ36UxhWgCBM8UkuP19",
  "key40": "5ePgTKY9gKvFciz4dfAFBhCmjiEHz8Te3VRmMFsTrSZBHhWoGrmZx7Ca4jyBqMLkT2E2aP5eJmiiLhiiHASoTvP2",
  "key41": "2XGkcGeyVB8X792QFqVfNQSESrL9jiapVzNbabH56tk4X9LcJ9v2tm99GqDx6mhd1jc4NPU473drQUEsMipRp7U7",
  "key42": "hSxqnoBLCJFmSF7LVDgZBkVaEx1gjBQvhrQF87Cw2QhuumyH4P4RgxRFFjQCoQ8pouWzW7ctPRsrwW81sA9emMZ",
  "key43": "3BphcmmgFRyH3tf1g4iAAKFYJRFgMot9a8aSR3GnKHcCewKsn7TVb99TkCh1R9czs8KfW3iDEwSErZA5mKewXL4g",
  "key44": "1GswNrqB9j6ZcxzXdcQQCDLbgB5m1Z7vedHDskGBvgva4U8tW5TbaeFiBLXLthEgLpTcTnihEGYu5xHEQqnhja8",
  "key45": "wu7DpGw2LttfD65fe6EQwk1auGodbj3FL7ecv8qQhxwRQEbJZ7o4vX5DcwbcwSk5pTFaSn2G8mEM9jN9McdcNp2"
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
