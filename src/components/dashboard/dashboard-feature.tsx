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
    "5UeusVfLWXf6D6dRP57ZLk74eebWe21g28zqXDmGxG8hbdhps6W5adpUukLSWNLgmimnZgMGGQ3nzzUEDAzTVpM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qkDZHzMR7wp1uDBxjDf2cq9SbQzUzoiaj16BTDFEqky2bw12zgF5K3wqVx5hfNLRNkUTjsyoNywMdg8681eXuSH",
  "key1": "52nnjPXJ7o9KkuinXYuS4nYmpendYCNe969LnGRnujjDCCeipBkEh6hkGi1jvQXa2ZZVF1PwSH86G3mcE5cXzUoD",
  "key2": "4xR96vDA1an8PD869rWri47VgHamfUNSEXpnKnL28gtM8WjjUJ2Rrw79xfSv6gJfEBhtwpvRzyCwfpETQGgTNegq",
  "key3": "4D6w8ogxDiqcXX57jRs2Nr9yNbR6n2wBjKxdghdoFVLmKZs3KJD3rrZ6tk632GnZAwCobyqLuuDZ8HwAzAJjbgMZ",
  "key4": "5jAtY4WBVWvZ8cHsrzuYG1KhUfQwuoB6unoxkYHaEzgCKmE5PSxAMottG4rgUpPTno5Ms58zkHTuQoNGL6ogUvsS",
  "key5": "2oQQW8t9EA3pSdPL9rjHL3dgSPqVBRLqmFuAFQboFftzURSawHD9AuMe8q9UjukXXUzfhksW1ZSB5W8Wfn22TJcN",
  "key6": "Ly39MWqrZDoc1Q7fLpwZS7d22QPUmZ3XHh747YiNfi5pmFxLxHvYjz3LGNP5eoCyo89AR5Jabu8b1rV3D8qsfyX",
  "key7": "5zv8jKAYLj1DfzAvvsjAgLrUimTozkVmDiM11Npb5NSxWPP4ys3GFuRYSfUDKxrb5nxTWHx8Y2MX7H7hLa354orY",
  "key8": "5LajdEVhR5shR6d9Zv1wKp8zsQCkeVhU3vLLTRBVSpnu1N4nRBiALWJSxQ4rYG26Wf2az5TRJd9QBz7dJustQirQ",
  "key9": "5sXi3UXvqpRVNMjrHkmYcprarHzEj5TpRsoBvYJhQUcWL6xZWawBUCUnSfyqHe3BXy5RDgWoW4EFU6LSLQMhTWNM",
  "key10": "5kSFzHBLk1sgirCyVDeJVt6vJeaxJohsNEf2gY4aDaTUhhs6WVyAgtbQYVkf6JwRcVQMGLQCJTBaFJz4bkpfMnF",
  "key11": "4Q12WasGbfeQ3scML9bkoYxfmvdZK7f6ff8LmVKRmQq6KLKT96LqYwAyEQELg7fPbk2JGv5cpm2bPKnLQkMCiacA",
  "key12": "3VJWqNTqcaDtUyVWCkpM3PKuHzb2h9WScwomqctCoVQhFvSeJXK2nKe3DhnTVnqn82LtqUuGpiQaBQNL3LWrtDTT",
  "key13": "41uz7b1tDAzcB6RyJ1XgWf2HWxkkdvesPJb12s61rXPcJSfDQkPskdkHEvtyzZMe5mMkyrNMMeb2h21Tkrk8qGaf",
  "key14": "2dn3m8A1qZL7h1nbVM9NH8BMB1dRnwaZizMMtReNzLJfkihapHDXkQL2NKDwUCQxbZZMnJj8krqW8WpxCZ75b1nB",
  "key15": "313e5UBVFEqwJTVDZik2rd3YwwEKeBkvqCC7WdccJ5gvTbEdZui8TUhUmsFQ4CfMynJJE8DjcXBAs1Ud6o5GQjy9",
  "key16": "3UMQDpaa4HCymMJdLrMa1BKo18ruUmC7FyGEgLippTcdjWytafWoTW25uNZkuNzyMW3T35U5cV2DPE5j7ZHNuK1u",
  "key17": "34FRyVw3Gc1WUmmPteu5xqGV956gGpLNR8S84jCEwqq3HqLs482rewCPDDZTdcyDs4B4rfwRwtu9xn4yqSMRbLET",
  "key18": "Nu1a8pWb7f9RkAhPcxeCqXRLVLQuStwhb9FtrtNJCxRYsKhP1C4YUgquaGYq8uA3n649SDo5LQeXTNYCDdVur1i",
  "key19": "yjkyjbNVD1jasHUjdpoYc6gjv5kMCzZW4NY9DJQBGutoFs3THMhYsqYRG3iQHgLhHcMxS2sNbgX1Ezha4jtnCXy",
  "key20": "2Y4e6zwrmp5uUZmhWi2x2CvfD5FkG3tGRPuA76iKzqrWMrETaCouDYkDAZ8ca2fPAuw1yQMJ4QFiEbcxGuiz7Ui4",
  "key21": "5f8tpS8wrAtQvd751vQSSdox7nNNKYG8ASDvnGcXW2rvjeKK2L7Kq14pyJNNimLVCoyeWxiQaVb2cpxqAEiy5BKv",
  "key22": "34B2mXwzeZMq939HG5DKx1Z2iqqUB5ao833Qmxcm9vfVCah5NtYGsAmxqXFARMYaSnQqP7Wv5Mp9jQThR6ESfWXu",
  "key23": "4fRYJWkzCdi5KXBbvdp5WDhh6J7ZdMkWhsfdg3J4Hsd9UYrkw3F41NWu5i3rfQQYn7M4wDeMufgmzUqBLsvRFwhA",
  "key24": "54UFAeaLmNcgPnv7h5q8kg1rgfy3Qh6GBqJ6qdGcEESAGi45KB15Rr3QmFLiegcbKH23RiTKDXCYGJXz6cPupCoa",
  "key25": "3mMeB3nZ9Nrqp26LTMZic9TnBD2ffL7gBKMBHATYbxLGzTBGuUBy8ZuX28Lac3MJ7jLzSMAMUQbM8b6Ew7MAtosc",
  "key26": "2KZSFzqc5TdQtnXYmNq7xqe4kfUonmD7kSxJh8wF7rgMLy58A2byUqgfPhV7Xa6yJGFz8DBzLUQ8aKk6RWBY5uBv",
  "key27": "3ZjJS1jPHwqajYwcnQyghhTBPVHGN5UejwNyjJ4H1F1meSJ8XAh3KbDC62C9qQZ6sapuXiCdqHszBcSgMRd8bgi",
  "key28": "3GGnA7CAz6sxcmwRua6ikXH2nz6HVTjW4dPvLoWFmD5iTnRXYE11GkYywgv7CjEq81DubJpcJW8KHqfd9gfrBShx",
  "key29": "2kfvfk9BmfKbRcSKi1z4J6BRJoDLcD9bBGvry21nafiGnckiH5HUBQJz14obtERutKqRvWd6kPjhW5gUfzzwzPi",
  "key30": "mHzejRDoFHW3Ly6LCHXSBQN7ppLJCn2RErcCCENpWZD5R1cipAzurBaVGxNv38zCAVaw7kMJsqNBNGbvyopbPtM",
  "key31": "3C71UDC4pb6fYxqnaQj8sPMESBGeknvgH8SoLcapXzJXgBxsKuBT35nL5FV8R8rU19aZ6gSK2vHBKqdzwHCnV1EZ",
  "key32": "mfAeUUkSLBPCaw8Mh3q3VKqAb5ZQtw6Y4xqzzA5VoEP9d8LJz5epmDnWksTKYwNFLmmQsPMLe2g6tPBvDaSB66q",
  "key33": "3h81czuXfBchPQFGVvUGH6U6Dq6n5gc4BoNuqwRnJRD27bewm4sk2wtnJmHBshSsHPFy39rDi7Pb7BZNkuDhjzLk",
  "key34": "3ZG8CG1f55d21eALea3NfrRPeBgbwMHSpeJ9o6y9qP2YjNnuaraujJjXvF7J6456t5EiTRerNvRdCudYrGsXnc7j",
  "key35": "3b59emD2Y7ohLSrJCKcpFoWxL7gRLkXjWhFpggvHqtg9Bww8LRncWm2iBWfXisX5iHaNyswQo7ndj5XBmyZXddvK",
  "key36": "5W1hkwzNKU9feGQhavFhYn3iVuc3UpE2vGfPqbgMUQj9FHa5mBr24TENiyUG5TLWwMgPyTnvKsAExdLAUZBdhHGj",
  "key37": "4vnW3ZkDKp9mxgK9Q4bf2LhRF7DXC2bG4iY7192DniUgiqPnAYRY4J2nK3unnSZwzQ1GZgRzwqP8Y49hmkZVgJQQ",
  "key38": "5HQRLUw9DAUixi9TvMJ92gUJWXpEqyLnZJSWHptS32QfDUhDtBs4vJTT69PNg77aBX5LTPmRdYfQxtWymzUE9Efu",
  "key39": "4KGxc1Z9jUbzRwePDWJ7SqHn8MkHbMcJNfwoVFkVGVfFsh2bovF519m38gfDYUXh39HjtjJQqWxo19wYHg2XoTEd",
  "key40": "4Thv1Ng9gEVbMPwcVaFWcWd6DxXb3ZUwWKrMdZiJB3F7Ga967nQcorottaKzMuoJTC1uLk2ngDKLM3U9dnF82vyS",
  "key41": "4vWa5Jr2iJS8uTyesQmKF9UUkumgSogjVdVygepXK3H7CrQA3exjra2r4UsUT8zWzvq7MQeRG25jsQmeSD3pnqzs",
  "key42": "5RTaSqjVApTbfcE481j45p9tkqVaybLCMaJxNksw5bJyUrTnYuYxyW6fjuaQqbSuNT5DaLTS8CXZDAKMXygGQrZ3",
  "key43": "3wUHKP9MLrCC55MD2GXXnPKNED2Gp1qvy9iqMM7GdfttGeoAw7YwLvon4TrgWehJ9L9AmEtPbojB9LPMqEoiHD6c"
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
