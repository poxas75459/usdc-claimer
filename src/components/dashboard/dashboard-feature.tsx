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
    "5jyCxN1rpmtdmnCJVWt1wgmySQ6c6rrAA59QCjWj2t9daX6ErHyW2Y7up2aufRtJeg1MuQQYG8Zmm4EpZWEmzJpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24J9AxoVVKwyXqqwhyL4LuJxirKZ2WKJFB3v6B8UBHfsmGHYkPG6hDqEcqMSpWgATXLvJkAVqRpExFBUJ56RbuG9",
  "key1": "4B5pkTG1wM75NCeGEs1xSiGQ3niNBzDe5rCP1zhx8BKbvRUT8M4Y6U4rQnrNM7YVHNWhquWPeJvCKNoPpgSFx9bQ",
  "key2": "5FUs94G94whxescKYgmQFDBFrmRfBtRbwuUsjzuUfiGu7KuinMw9USshoaUZkHieJk9tUip46MPeTwdXHa61zt9k",
  "key3": "2JpuynU6Lzm7tJN9Rvc45JDWzBTcLsyYH9463gGCQwFBef9CMc4yP1DuBwvvVKV4BC6Ty94LHR2GJEicxxn7jqoZ",
  "key4": "4ZNNW4bT6BnfyEeDt1JfQCfbwP5GfYrn66xF64zveBBFkqARgpAceuXYTKYsZpAZsg7pztcpU9WXBceZJYxsgFHz",
  "key5": "42f4R4v2H3XcqdmAVjrWemoQP4n8UYj5aqrenV43LR9tTrEzQDeEfbuLZKahpBraEDRgk4Go4dxZZLAzu6uUXXLV",
  "key6": "5hnyQDGAM2v5z3a9xJP4RBawXUgSywpRLt4VPuChz2ziUPhNdsst5eJWR8Y21iDiYB7PNir3XeSsBkx71EFbqqUj",
  "key7": "6LYUqKsJKnPyVZt7oVWFaZvADUUUkCqqjGoCrMfS8unjteHEWr8maimS6RXU4kPwGRVoXC45S6DmJoeC2Bn6d2g",
  "key8": "Xt3mKtEMQuk2CA7JEjWxvWXWjQ11zAhA7vYE4exvmbJxyu6ke1zUVeSRPcs8LBr8jAcfQFNYAd1ZWfomiQQWP5m",
  "key9": "2EPmcBtRJNpyiJrZ42be9tJiKi9uFSz93952yH4LQQ1NWvQKkNktPWgk1UL7Tzye38AxATvkUDbLdDNfa6VgAj8N",
  "key10": "QxTjTLVfHyb8ZehJbySxCvyvhKSZkRsPz13nFf1C9ujLQFG5oHWaB2xaUPFHgLBXLYHhZxC95chnsE1cEVHZyf6",
  "key11": "2XkmEHUwfKZQV23B5eUpQFsh8mGkSfvZgtU9kukU7q2JUewa5rgMVPstwXrKM4FMGpgfj8JFCzStWbfd99o39d35",
  "key12": "4zAmQ8uQcph4RbUdkwV6t1b2FBoaDu5vptTv6Epg1GH5TwaLqGDJb4QhBQu9eM3KdVoP5vqSxJDvwQVRwSYxNoVC",
  "key13": "4hGTF3eDuE8vArY6SZRMiptTikqgGxnzQCMw7tQspbHEuvR3mjdkk7oobZpX5sQHivwVVsrXC8H26cpJUkVMPJq4",
  "key14": "368QoUXQ2qDBpcMt55iTfUd9CfqqTrJZtoeZ1zMVPrTgMLNUtVWokibEG8r6cvrnWALSZwDuLUmc24Z95bAZzR1a",
  "key15": "S8w5ehENPM73VmgowkS4ooTGUTM3CiM5caAFFSG5edno8re3Aq6SHbVqcxRNPaeZB5mst6iKcNRvuXTXU6HmrZb",
  "key16": "5RX6ytA23KWW1ktg6X9XHGfVqQYqqRvAqvAHFYCcNsQQN1hMS8cLXd317f56yEwmr8vfCkGPWMuoQgeZutPp7oS",
  "key17": "5URHWYS3MyoUJJdJmEhMvF9E4mE5nQK7Jyt2tgHtJTsrL9hZWsCAnG4soTX5me2rE9VbNSHcCS9YtYWubBwVb5aQ",
  "key18": "3vUisc4e2ps5swphoPwGXxhjmGemAk7JwwffkUPrr3obqFC3ib64r7w5m7FCQWAtHFrZnDgMzdBcSTZUaLmhuBNE",
  "key19": "2hrQkFSvZqhZDkepEk2d3w6ZrmrjaBRWgK64YMkfPr8wSvMuSHBWWLPHAkbtXMauJoUMpTGKboGZEvjWvgyUFb6H",
  "key20": "2DDvnVJsfm6FCxYdXhnT6yQGNY2VHShgDiwFBiKTa3E2iKMcaYn2nbuuC39PY4riq1ARqLtQvZujDRd2tJJKtMxE",
  "key21": "4dCmue7cj7QWG6YoJqmLWYvTD9md7SWYUTzh4kJ3JtaGutNp4jEq99q5ezDKmepP7SUJocjCPyJM7tfnTKUjSqRF",
  "key22": "55qcxPdXhqmoSwcYJNK3jyfAcDTTD9CvYGmuMJoduqM65CT3SgMfizuYeHmJNzRNRbRmMXrosos2KeaorNnyEbmN",
  "key23": "5Lp1pFpidWfM6GAzzEGLhU6DEceQWRQTrzyp6uQ6q5AG8ZSb1LhMwBPjsvRMjqCJ5yGxAqRbNNej96YQnhLxbRFN",
  "key24": "qqFqkcxboi5vsRTvkmAyUPWprHmP3jLGSLVZfyAK98FR78tuTWmke51DcbWYAzkB8PJ8SAjXsKmVhZBEv1X8v5S",
  "key25": "5N7B9w2xXK4CDaJA1jaxt1ApBMYn5XjvdHqxkHiKAXBKoyys5fHnPVxq7WCfSEsqVzYfyJ18HvgdU5bWnbNde5hX",
  "key26": "5SCJZ7gyq6SU7BLfRnFUMhua6Q22JSwuD3Pqm9xNgKKpL9PtNBpL9f1DouUSSna5ci7zDmB3iwXwUWaaBNXaMU3i",
  "key27": "29kpmokgRPC1iMkCu8n4LAtLcUvU9TBTBUcdzBwxM5z8HzNErfTYeDhQyaVNs3rrrLgzB2yeAJzAqcVPE1BFVJYd",
  "key28": "3hcrayirdWQhmW9CF4EP4tWXNi7iKpVvB8yP4dJguRdVSe4t3FGZYPejDnYstu2eivFQTjaPnW4diGoVSZBeNR9p",
  "key29": "Na2S2hNEAXAqfdiPuZ52y4SkkRhW2KMoKaWdCRGBAamWY2H3BY18PA7p1cp8GEM4tnLY1yRaGWJTv2QMtspK9aj",
  "key30": "5t3mug4gwotSVYrmWkJcLQKjfamNZPiosUgwp35SGSBPTBKE3saGr2BAq9ku7CrfUDqW2ddehZfrzPNJpmRkUGzG",
  "key31": "ZUD7d6yb8WiHRyLMGND8TKAtQyCqoc3Y9YhqF4jbKjcpzY1Cga4gEJ8LJyC8VE7FU6sA1tJgKXVLVC6TScZmnBh",
  "key32": "35DiDedq86naA5ZZ7SDnw6xrA17HGNkvqCQecJPTjFEPjz22ee51Qc74uaaHP11krjkvn7M1kw3VS3VvgShHsd7j",
  "key33": "4TVcCjGtz6a7coxHqBQyqAqFEWUTVhzKDxRX9DA5AWCCFZWiBZsXMvLmuWboWAhahC8jRzB32mifpinF3ivvjLoL",
  "key34": "4sjoa9yCZAhcyLiFdbnNmNav6bu9xpNKWvxXRjiQizKAsEqCtUk4jmS3qLLhskGeSmZFhFCYUk7f9JkWnNZ6w7rf",
  "key35": "KMbQEbicRf7TiJ7pk9Q3dsBGGffe65HFnPJVdMusg7MEjGQLKay5BFaeo6ge3NU2Js2YLDQjjhfAnMHyhLc8vbK",
  "key36": "5o21xGwuniCA8mv4BG42dzCb5YnbeDuFYW9yrz1UBXFFG3xkNcbVaJc93FbVNYKpaXrmETn6FPdNzqaTnBgV6ccA"
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
