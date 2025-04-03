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
    "5kCetf2Yguy2fN4sSKq46fRNZsF85tmfU1Dr8Jwm7t8Riq9UQZjVPnBnEaFVDASyNA3GV8dvxkp4kd8SJs4GNj2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eBtkY2RmCmHMPcg3EqYiQ4LrKLwCgXH78FWSYpzmmfXrkRbxSKZPWnDfGJ9uk28MYxHBWvEHS3fqizSppJS4y9a",
  "key1": "2ASMfzKqv2n2QehxgnJGYHHy4sBRQYapqKEQEjgyvsPGZ1GagT5mZnzpt4H5n6Z9mg68xDskxrTX2yrt7m37q8SW",
  "key2": "4mxe6f1G4rVT4XR5KxikaFDyTnjwpVbGo7CUdt7bKn7VtXBo8iuE6otrqds11R85dKpA8oScezfjxoztLE8f4SPo",
  "key3": "5kW54wYwz2iso5r5hkgHx46Y2AJKvgH4zqhtvpxfyPQPhYgTm8fFSPKMXMypRSN3n7C3i5TCsBJrW7sEhbpKroXq",
  "key4": "3dJ3HQUcmFT739vBuMcHWyyNvFAGH9vJQCuroJCWiTjguNGEJq688ULnmEPHnRVuieWv1YhMkYdDpbtB94MoNRgq",
  "key5": "4dBMpYTz1EgdG19fBqEkodJ2vvwK8DuLbxDofQpTojJo4pBu2xreGKAWhrtUkskvbiBKUuZKg7r61ABttGTzdgTV",
  "key6": "3LAty9tEFWqZUaZMhsh3xwTbbCGo8fQNTt7wKXPFzjCBGnkFjac8AaxKiETjyM7vhTQk2ShfKAEDqPhYPQouPdhG",
  "key7": "59v1BZ2QEitk9i5GTa9BeY57yrAQLRat5gUGBPQGyneadEaYBKLByDzhh4beo3ZHbp1zcLF5wZJjaREcWi6Hse7n",
  "key8": "62fUbmjt2vM4M4AqFjLRtpeJZPPTmMY5k8TaQNC2FD9uCRn6S7vMAv428RdzQ5kXBhzpSRgrHia2At4pna4zk1CV",
  "key9": "2CSsUR2WezjiVxcJGtUwnEzfzj1yXASkFnp2aLJVuqBD13MfY1qo7maD4w6jpVpVv2FVFqZgZ8emWYetVb32vwiz",
  "key10": "23PGFvBQeVduXhrYJk83r1ecZuizwMGmnEqddeb55Kzad4QgTGe9yP3SjxqodSRA1vqw22gG7EJDGFT4mwdPZdx1",
  "key11": "6y8WK2m5uE93uRqCv3zLcGHhqJtX4ExkapyEAeqUjeyDruENgjDv1ovLvrXgMLZ1PxS9RCBMp75G66QyVhkPggB",
  "key12": "61sEQQvoMa6YrUEQmhXsSrCRKGxHoHuYCEWmvogDbL6pCx1BQFwRqDM3QZP2QCzLY29oBnxyVYMqQEtPuXjPrSdS",
  "key13": "3RRP8NfU7gxdvrJ9j9NUMn94iMnTCSCeQZbcsW1Jv3oWSH2Tp9GAiuBLm7SMh5xKNSMYKU7wJnjZpyPFjGLM8fy8",
  "key14": "29BHzrbXQW4gjdtg2hw61hETxrE5ymG1FDhpJh2VAEpPiPjpGjwNTeApFAL6DhtoBELaiGTyxuUm7TMLAgJgvQxW",
  "key15": "5PDvQR2T2KhToGPiGDWXCGQQP4gGio2eZPbd5H4CsivjGJCPNyC7Kfvwn2TeYtNXawSZNFjk6LTChsrtBYKFGKTw",
  "key16": "2XRgd1F4wnUfrtVAPmgsHWEywPB7f35FyYSgFmCes3QoQPBa8ez7Mn4Nrcu9L8Y5xveoepXpF3wZWmZYBU291jNg",
  "key17": "n6eAHsKVKqFytv3JHoBDcrXHEaQ7juF1WXxpkCh6tiwD6nwZva58QErw4z3xAnbMNyLEpT1QjN36Avx6bf8bydv",
  "key18": "5gtFeCV3wY216WvTXKUP5AVrYHHcbrk5AuidniwtZT7jhtGmCbZWLwb7VXkLuAGV7wsSD56VpUvT7FSfrEXsPFWS",
  "key19": "3Sr32hpnatJFTfrpDuoeW86ZWLAdpw5zqRq61Re77v26ZX7KsxKR5D8vgjfA55HnBSZ5x3k3yehWruZHp2F7YJwu",
  "key20": "33fHyZxk4zA4F5r41EiWebrPCsbtdZimw5n4wNG1VQirJugjMsRkNCauwyvmdYdy2J6MAsjnQfvwC7MBRm7oPGK1",
  "key21": "5wDDH3GXXndDeSBKjDkAv2Es99chyZ91cE1znDqEcEWSbZ3g39jUoSKMBaxN6zQMLMTnrCFNVCuxU27w5YuAJFs8",
  "key22": "42wTgBBAsxmjvJVssJ3dWxFuiJ7FZKsMZu93m1wkub8ftrXDHaZnpdGZ6ZJEJEDVN4ervMPmgbZipHheRzvmZdjr",
  "key23": "3WMiYh6rq4RYjpVGSmuddLFC3nGc95uxKEGYnrsELzMLYRMnpHhosA69oh1qgKSX56zy7aux5c9y37QZiD13dYGd",
  "key24": "y8WSUDxBZp75dbmPsFY9JaVtqtgopswuYQcXWt5FES7V5RdhS1xVzquBBZoJTTpFt7rkdyXVez7r6fhEe6LoMWz",
  "key25": "KL33ibP1MfxnUChv1qa8Cd7fb2G3uAg7CdPcJaChWzVE3odJ7mJewuvAdHgSGjLSBys91eJGCUQ7LyUKJCGZN41",
  "key26": "3bw4wHx7ZQAXSUrTJeyRv8h69wpV3bbWfy7cmWDZW6kqXw1BM2NAH4fEXv4ujC4BakeX5PsGreHggmD3R8wKn9mZ",
  "key27": "3vvJvmeCt1Tvqgyruieq1H1iJWQDvBdsVfiPQCyFZxcw19JnqVLKUVAK6rfPY33V7QeY6pNBBgaRCX8psEtyty3P",
  "key28": "26nKR412jBa4aVkz4msGkNv8d47UnyDdrPxjkWawjRmUtaySiLZWRixywEYSdFNAMDoTvYLAR1qGdnqaYXDSPzP8",
  "key29": "4zmXKPLZzxFiuX3UUV6VJnVNUz5y5tCCAmrt5TWLzUE4pSUEkt5ao8z1i1QhFqiri8qBeYq5qboLv28wAYBaK9nS",
  "key30": "MKYrSNJTEgKtv6p71sbjnX6ozqTpfGZKGhvRpPQULis8Q8668rzR9qQkiwyLbb8yoxM21v3TTZGeaUDkvnH3eAF",
  "key31": "Un3de3G7tEKqNLCJtyjtfaaC6kW46qBkHn6VriUnRwwruRck1KHrZGx8H98CRjdFxUAdidT3jHHzAvb8HNcMkcM",
  "key32": "2vqMnM2tKgYTZbv2CSm1Xos62swKDZ894bCH72LDZDrMSMZwsAEtGQ3B6yKTsEt2NReyYVreEHXzL42oKc4LErdm",
  "key33": "HcxHpytijN33JCq3Qvo7gNDuhfmAxugRPWfN6Ev4nDLBGA31Gfpj722nW7qRZGkD4AbYnhM4Pg4vWLPtEunw6GP",
  "key34": "2DWkDHebE68xtoQvkSLDwn5k9bZkHi8VSo5eA2CLhWxFm485P2GyHeuRyHGNuZAWhx67MPJhWEqvXYgqL7N664cC",
  "key35": "5uUUaXvgYzEjyV81opV35yXvNFZyoY8ZYbt2J63rysGWBEE28GWhnG5wfY1umBMZRBWe44UupFLY5hkLUrFdRx8v",
  "key36": "3yfDqHpCC7PHTtmckKEChyFCG85zTyMmKqqwgGxKqi1ZzcSZ8SEuUsPj3nEDnPEY7WVuQVTthMFfhtfxppEhnsKC",
  "key37": "4hK36aQG8rakB2bzLF8AcX8ZfZqd4BroZCXGensAizS4sXu9KQr48zfuNumnpmJBp2EA8BN4vt1wL9U8x7CRrRHG",
  "key38": "ThmLHPCcpCaMFiy6KpLwMfNxFvfQu8BRNyjVTMMAcAPU6TxuN8SZe8bbM7dQxWmkXqbFLmN2wbCigeNdMDc4jJU",
  "key39": "3heN7nwzcC4KkYfpzsUWuZewABTPNNGvffrt2Fp6CBdaxtLM9HApV3r3BaRcGJyZg5wQkUHvbEvmBUV1AkTXwtoh",
  "key40": "JRJrK1aypRe8NMaXTVGTLtocqqCZQFnaq3Qbqr2gbWmNBLsbuoT9pdD2MkAfpHGdrphDGsa1vQj1paBtfh2qT4y",
  "key41": "2FowEvPDyvXTCRv15BReBxeVhKbE6kqMCWXnJmb1KM2SDK2SzmudsTBR1f38zjiJFfep1HzR3GK5CqAYoooXvS7F",
  "key42": "3Y3CruBhtkdctjyLJBXzwLqRAqaUVVLEB1VkV2ngzzha1oJSZEmiCyuaPWiyFRQNWReTFEBf5gFkNUymhqR1jW6U",
  "key43": "QDMP3fvNpquRFJma3F1pxLepo2bw73r4NM6bYkctHCBG5X6LEwvTrc1qUz3BEHFwZAqKPnEHCDmHhsw2zn9TZFt",
  "key44": "49aWeVH9h35CoEVQtmTuZZ1TPRM2Kv2YefL88ps87jAGSXvAKMiC89JjmbC2fNSuJjj8Nig1CEPJYfsV5QfizgXB"
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
