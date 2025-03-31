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
    "2xkGZSVqhZBKev5R7sFadr3CvwrUUDqbxA8BpJyPKnqciUix799K2WqMe4mRRbi5TwqkuMWYgiVaWoVaC5VhBZpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u1HWQqjoda3uznuQd2FPUTKwL4JbJXbDaBujkQpfTc2hfk7yfvmnLaMdbEr3Rvn16mFY8tH3ybwTnQ2pnWb7F3a",
  "key1": "3s7kpic7TB9bB9boDf47JeSHKVraESWFnJCsESPDAEguE7otvCUEV2B5dTVHmVCJ16BzrqWPQ1spjDf3VYHHeHhv",
  "key2": "3fm6mQ32vR8nM6UdKynKeaGBEcfM1SGoar26bjWwKVK8HbxPgVoYWyhSxTCCquTDvZHNizj8EcTPnUVUixsGxjhQ",
  "key3": "2yBbh4sXpSCPcLkXw9DiuFzyhhHJxz64dgJwebiPbE53JKor9e5sJ2quJ9qzet1NN5y9MNoGDvKmRaoiKZ7ejqpN",
  "key4": "4qGtW8wBAeLHEs91UHgrnZMypWSKpVFRPfnGnxzmrGGEQ79cgsu4Rk8MAoyYLa7BPt5JViEVGya1i7e7sfgip8AE",
  "key5": "23EdodA1CUk26pGugpr4va9sXB2C91w6Krubg39YovPRdsiJLpXGxjDioPCvpSWYwtELg1zT1MawBchSKdWfff56",
  "key6": "35UDmnzHGqcqYUL2oCqt3uh62BZVvbThcnicQrSPegKD6yS6ZVCePrkfLbL43RTg413QhVVtQtwnBzfp6ohivWyR",
  "key7": "3QGtb7Lh91dgKHQCURtyak2CSoSqCnK68c48ukP6jPhexipewMHdSReDA677umAXs7vJXXDqDNFZQSfSBroqDuzv",
  "key8": "46Gwd34oraLy6w89HycoGWLTo8e9eBbSYY7P6hnDGuhebPCXyBdkKyYXP7N4UAYjArc2eLN68j9bdaCj8C2M6rKc",
  "key9": "3mcVKfF5Hunk6rVNXBDqM2RaN9tCVCMbBSphmP4KmexARUqa6FGUZ6DT5EgG2FE1PsxGh5t6dFhxq7ghZGTHYbFA",
  "key10": "55fkcKMfCFhCnCR1ATLMXykfAB8NPLXMF8QsAD3AW2GMUtbDtoX8MChz7azmP6rKiyK2hA5174KG92J79YyPbprN",
  "key11": "55X4pgyHEoaBto4wAMJxAtcDw4pnphXXc2q4jiJeKAtvwkCUu28LTzvQtqMqLMpZwNfZG33RjuqjFZ6gTCsUaX5V",
  "key12": "5yAfBrh8ADXJcZz2RjKMMzEtyt2SYgptc6fSurr2KmkMmomSjqQL931CsmziZa8LKjWNH2CRPu7hpPh2dcrgVRB1",
  "key13": "5p28G1Ab3ma2tPChDxqe9dAz9mWn8JB673phHCHWG71UzH71KD2d3sJXoPUkTTwaWa2wyRb9wnFm9JqQd2QHWv1N",
  "key14": "33JWK2NSzV3NixrjDMNzjqica96yzzhaCJ7s5S6WpKt22GkXyBB6PPHn4gQafMtxzYmHevVHS34VoRDGZg8hjudJ",
  "key15": "49NkKxaH4SQVH4NPKzkubpeo1XfLM9tJFgDqkW4w2ehpGZkTK4erhBcMxfYoocVY5PFZgMVhtKV7dvnvUask5jCk",
  "key16": "PdSZTKiS1xaWR7bfAzgQDzmsFnrJM1nHrLR3NefUzaLRHKAK1MZPaz7MCND52eiLqLDMRBeQpZ4xVJW6XBnT3Sc",
  "key17": "djEQ2mGnSpzEjSDpZcQzNVbsS1vsxqSXsbfQZkgmGEsL9cHzMr6UKcweRmhKju5MZi3uyF1joc2fRcmCuQPkbCM",
  "key18": "2g59sAvBGDhcxBapU6b84aKgd5moXXZ2P2YdJDUEzyFXg9jDCL2dsM1XU38mk5JXUir4Em2RosRwA21GcXsCPq2f",
  "key19": "5KCeRfNBNQrkfqzwZ4nBAcZmGDEM6cyyLru4b7njJcjqGJQBV4o7ihPdVS4aSLutwcgAFx3sxZSHEtu8rh8qD5hC",
  "key20": "5LcXEebJzPViA8fR42oVNfMC1PLah4vKM1Dt3GGQaLn2161FnaLdzcvQPqTxEZ25YpQfL2hLgYZTJRNrJfEdNuK1",
  "key21": "4zuLqazoX5jBQTcgosoBZTXWGnDWehQaV1WtAwmTm3jAX7iQkRoodxR7r5YBpkd6vLQ9CtLuqZwN2J2im91L9SoT",
  "key22": "4P77cyJJqAxEUYxfCNDMs8qyQjgyTHXTBpThFZGJXhK8sgUCZxKmkRkdLZ4QZcHaxoTa5nyobua2b14E6rCzTfEN",
  "key23": "4pTU4CBGTNLcfbBXTUUs2wTTminhoT3bZyJumRZTkbNQGAQoJL2YZrQFND3qQxbzgth4JWUEhHSLhq5YNyx7pTQe",
  "key24": "3YtA4yda8tJKcBhG9StJRFEj8HYv6fR22gwAZKjHwQvEQpJdPoWRk2wvmEmq6b2yVLunoLVSKuN2mKA5MdXvph3e",
  "key25": "5drNZDFXP1ASjKFyrV6USQCUwdBVYuvWS1Daztr6oofFh2cGWkLCHz7NgEUNs8nejpi4e1h3CVdmDhT9KC1CahfP",
  "key26": "2pwG1jdHSf2D3wbxR28EpUBoPAAyZnmXvRUyfr7JjQmHvTLj32H1gqiQiASuG4matKEBSRraMG2Md3eAHtxUEARi",
  "key27": "4cLEvVPR2GsP9jnK9ZcujuWoUVDWgoYjDRsXBARzWemEzPrkNZC911H1i6wZZJvZndtMSwguwx69Z42CuZoNbokC",
  "key28": "4hj9RKDv1AWWWohXBaUHpQ13cHycw4EcJFLHBcnukLfGG5bPwvW5jxqKiyYhbi1edTwL9BehNA2fURSnGY277GBj",
  "key29": "5TkAj3yKoVDgzrCf8Z7ZUrRviZaRBCANdcSdHKnURfHMkVtMvU4rQ3qKG1GRPoZCKftsobYn79RdNBw4nNvxqVXR",
  "key30": "2kWtbtsJ3XWzc6UoE5MFbaPUHcsyhPyjBfv6Sdnm768Cf8Lbb8PP1BitrABuFFUmyQDnzpZC1svN1nKHDsF1qPB",
  "key31": "4Ke75wUJqrBRkgQgyT2fphrZz8SJHP7UbmLSSuYpz2HNKPDdZ55YpKuied7grMvmgSJcE8vEqMAombi2K3iCUqEv",
  "key32": "3iG9o96wR2EKJUMB4dW9UMdWhu2Jth6bx5G7BzG7Ei1nKSU3eCsECB6pJnP7LK2P4TCtF9BZS9SMys7WBfrV9T2K",
  "key33": "3c9xz6Gx7scgxznG6krWzuQNePDQmm9sbPFyzHKWEQfH2rpuHxzQSqGexszUBzuANGSpxbc3oog6oQZ8qcS2E3D2",
  "key34": "3JkA1AjRQ97vMA5bQFdTZ3yeP464MhqE9dN74P3faTLUeeFyTiD4nbFYeKVx7SoFXnwFPyAfMSJvMoM5w3H2EUhy",
  "key35": "31J2N9NXxDyFGVdkwCkQKCTDYeExkX4U3cKh2SCK2UcT33aZqDUAABnqP2KXY2b742PK8kUXCd8ExsvUZrae4jjF",
  "key36": "5FzLqk3va9Lra9EZmnCrEDST9dX2wATeuzY6yJYn5Hp9hPLsw582g1to8Fjs95oBD3KAtEKMpgYrb2UHLVJ9CjUW",
  "key37": "okkpJiXHzZLr52bjpthD621V8zentnWojisJFFjWvAsR4ZQugWjYfg32p1MApgpNmrVoLpkYtR5a9QDo97SeRt4",
  "key38": "4xYoLzeCea4MMgBqPhCxAmFSM1eZiXPt1etVuy4Tb5DxMFoEPakt7Y31hyVZ2e98xPQz2U2U9dBChX1Mcdrp39Ho",
  "key39": "5Pnaad1bR9odpUQwrRGK2JkcKpR1smJMRwutApCEPUeC7fpTsqbqnpvNChFLrM9rHwExAggQzGtxvb799t1t97r8",
  "key40": "3jZv2yhtHaY3v7RfD4mMddgnATCRsGEr1BtXrX6yq8xwHK6Egmxo187Sk8BGPGi3sHTuEdaSiPaDwjd8LL7Mwgu3",
  "key41": "5a2BbA5Ts9gcuLajhU5EUWgJH65yBvm8yvQecHjwuNapSLNABrsJ1G4hFYWEnTmwz8vM6GGzDuV2tzo22tgoETRN",
  "key42": "4XHHYBe5qzjZtFD6bSA8xzkYvuSosySPsSGdkaGL5sYLc2CiWXLibFY43qe4Ae8HDQUDHHgpoUPoeo8NkfAuv64z",
  "key43": "679fWNdmtYq3KFH8DK5b14DSx5snrimtxWkbRovX3m4nKhfNrzRxMMPr67qWVRc4yhSmmG8hLACVSe2hNytvypUg",
  "key44": "26n9tbrVu6CBQnMfPckCLoZsGPi7j7MSsURHvMV9QGFh7N97EquVUVNbGMo3bZwEHZ6EempAMjrSZy4Xy2pvzZUP",
  "key45": "5q7nyHeBJG6468Zz6vW1DNSHKKvqgC7PT5z3MwzrJ3tBjbB4D3eJM3H7LJLT9nefJjTYxJCVr7k9PfCMQjHSsns",
  "key46": "2ksJnrxG7QbuVGDV82qCGsFQCV3VnZFtcPiTfTzqBeYTz49HsXb4cHu1Ynv2srmLyQYSL7z2dzaMMoxQJUpc478J",
  "key47": "3fzpRK5K9WpH9aFbJu3ADbZ2tpJjnSWuG8hwFKDjDZ5MJP6vr8CUQ8LCMcGKppbgKRpsv2dn5isuT5UfJ2EUAT29"
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
