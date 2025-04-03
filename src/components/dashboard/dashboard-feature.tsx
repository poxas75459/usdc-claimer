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
    "4nWKYLBacKpfZoZF9ecuEbTEamJdWddnS1xKSr1Jck8giDeZWJNzb6Q2iGeycBitVNgtracCCt56SPtKDqCrW38B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "123hD5TdvPYTq5NYV6VsuqiERh7WoVcrQVprTmi3zwB5YJdaaRaACAeSaEHoaDRepWposwm4Paf3dYgvFSWYRhUW",
  "key1": "4Dd6VUjQskti1CLfodvHDdeq35HdV5HyLntXr7d3Dj1YPm3e7jDSTRmZwKXrvqE1STXnrDjjqa7jvJmZffDnZcHz",
  "key2": "2EqnN4uawgeCH4Sn5AqXAqGCwRUXAKVYqWR73VKLr51mV7QSapX6qsjWg3U8PsoSMouoS1bnz5dfjkwakrpzZvvo",
  "key3": "648mvso6migWwEue6xWK69uitMB4mBdpdeE3vB5Rxk2g35w3c6ac4RKeYjeDzmjVujjjAjU5Ra1qiLtu4edQ1n7z",
  "key4": "3S2sRr33exPjV5z2XC3YrNNGtoqEMaFHY3x4kjNnPNWZ8Zha76d1vzA8NQgWqo7v58G2DCGvLn3Au147TrxhtXt5",
  "key5": "Y4zgfCxfBB3aWyE6KcrhdoQiJGGCBzVL5VQdWpoybHzP21MnEd1xDZMDLWea1Jb9PMkEX7328eRjq91VrdAyFJG",
  "key6": "3Amsx72X591WaHLB4xPu877JqLHuMuXUWyPGSkp7QArhrUZjhF7ptinLtizdZJRzrF2aNmFXvEsfvNQiEnSLnqjb",
  "key7": "2FjnTGiZN7sbZjKjijY2BSqw9mbeo1MWUtFQ8yusrj13h1jz4Hb1mT6f3nEkuBRDSLzZWXyF9c7StWPyRA3f7uR3",
  "key8": "5oTqdLDLoKn8bYKuxLSCTpWkqHTwaSYXicY8afmrn72e4hm5ND69onGxUXDUkpubs6QA3hCvVEzxrpYTdGFfksqR",
  "key9": "44ngvCSH9FK9xeL5QWD8PpNqqpwpAwgK6L2JDLkiCZfWUZA1dTiEFFtctJzGBsMqivTr6f9ByyRdaYusU6o98WAB",
  "key10": "3KC7S5mANauB6vcvztkKrqYMXFaNyNKAJGb7jZm1Q9CWSdsYcncZTs3f8Fk4WdUDjT2qvAAKcrj2NVBiEhV13Pwj",
  "key11": "5xV2DsRnxMtpDhXvxj41GEDxbJQFqbLoQr8JSA4s2ZQyPogKG86uu54nxTtfhWsDn9TPZs7WTv9V71csgXuz8YMv",
  "key12": "649p9JescwwcZYMAWRg9joQQz8vxM6r5VgBQo61Da6HLQMdJDQzkRfdtm163wZtR2fMSjyzpYeP8nSwzEKFpUG72",
  "key13": "qgiEsHPbkp5bDzd4ZWz8f58nDq6t5V6DYX6a6i7rJ9fzvpaiRP1eQysQrzvFCyxnBPofv13cz5C7vEs7eEaFdrS",
  "key14": "3PpcWLQoyWcJ68ngk5pUCXSZfK6peX3APJENPgcyLtAKRGoa9d3sFCmC4JNiyuUZregCB74ySJKDiRxufaQbZmx1",
  "key15": "2cJQVSh2zw3NNhEosWfoVLazQ6q7hgH6TjrojwPgXW3SyYhrSJo9UiHkDnKM5k8S2vEw7LE6bR5JDqb4TBDtDhhy",
  "key16": "5QQ8BConH1feQGtzuLf3i8gyzrQh17XyQ7qfZJQ4gdFAmGYFtdCtBN89r6NJUbPzpA4cdyapPYgcGPW5uRCq8nwE",
  "key17": "4ULnsJcqupytz9JQUUc53csPThfRrsX3KRBQR9vRCs3QpN8uw8hARmPXuMuQGNnTh9ejCjZphhcz2AvR8QocsAJe",
  "key18": "3RYwmdNPWxg76Hgc4jWQmbiPFyZ9v48JQifH5nu7w7sp2ztvXsDMgtNZi6ocmqiMsBhP65MRnTfRzGJfTXqQEaeh",
  "key19": "5UH4nMHpas9VnAxryjkTDXZg3JtQ2mFq5R3gYCEAABfL6w7WZMwS9Vc3LrWmkNscucnUj5Guvr3bkaosXhfpzcFA",
  "key20": "4Xet8edP6uWg9xFSFiyq2pwUr1tYVFq3jo7kWBQPi7BLEU2CTTSxhxPEv4r4F8UxdGdF5ZiC3r3K87cTQe11f7vG",
  "key21": "4FBCRwvYL6mQqjCVEXXx6wYAQsN35hsmrAXuodnxHwHTnSavbMWWx5x2aWfEwP3i8bebngdJT6x7Sya8wBYvgV3t",
  "key22": "41uNdzsZbUbhifSABs2qVcYULJmcMoLZyW6Qvea1SMUMs8969u42W7dVAW1fTAEiRj5zC3QtzQc3Z4Q4DmK2eLU2",
  "key23": "5P5ugk57gPJJMRJ5cy1LVaogzxnErevjqe15VzGzJnTDeSt39fA28iNLi8hAQ7Bb37HvYJcQEcCZxSvaqFx5aC45",
  "key24": "2N9wHQwT3GzhJyCs94d8SpsyDHcdp52kbvNitC8TPHsQeHVC5qU9r6x6YNEokwQ6Yu2xeMgydx13w48unyFkqtCa",
  "key25": "4JsZLTVZSi6szuzCNxsSNVjRmvFJ9X49uNE8abMeWnkUEjsu4mRdoPpBQXfedYcTZNeS8di7LGCJrRXR4ukwSp7L",
  "key26": "2n9PfdfDBB6opczKVEExcqZHjUAtphdu2fU4qdyu14LGKSgLTKEbxawDUyHmgkTVXms9A7qsRpZqkJxfFBunSqZP",
  "key27": "5BArFadJZx65kBxdMamE1dVt8LsBC1NRthWanKz6pxSiPQDZz5hg7hN9PR9tRgbhkjhEazeQuo3ZSUcXu4JgXr7w",
  "key28": "2GVYZFc3TCGKNPp3R9inPANvgN93kN5aGXMMkAk6Q473woh8BUfLd1Zfx4oFpepgx2wGD2fSR9BEGJwXWVie58VP",
  "key29": "pYo8ytf1ZWNpBZnoV94r7QKBTtwDg5cjvTD9ivbmQAUWJBMsTePEbkRVx4nYvk5Jj3wdbSyYdwNEMmqSxzGqBTc",
  "key30": "3UGiA5EsyQZU1Vw2eax6peUBwvQ66P76AsLtURaZrkJGRcgm1DMC3ZP5DQjb9YxLxbozktT3mVbYuUW1MyR1fNZw",
  "key31": "5nKi7iQM9CLhtCuu9aNkWFmrdC5AXpqdN7FWVYeGvaQ7ixtVy93LCp1APAb35JLxthqph4gajmKfCVuvSLFJs9Cy",
  "key32": "3SKaTnCrLqtXt1tUHM6kiBbajfQVMRMLbbpBj753dfGqV6NydHdajRjG4fgzvVodFrvn51G6yhfXSDUeJFkAtzMf",
  "key33": "4u6xRZMrutLkELbaexkqLwMoWajeSGqQ1XAVEY7SuL6Qs72E491FdE3WWz8pSHQNRSBqKQq2CKmD7oYesqjKNrGZ",
  "key34": "29VRE6nrRMFrniDVyfiYhQpSKbxNGCAjDX7oQ2gPpAWVb3exbDZAS6bk6iG9RMgxMpAYfFMgY3Rs8VxokrA5YmY8",
  "key35": "5cVjouxGPM4QyigQVn1BxSSHnXGaZFXFSXPxjR4Fet3iRQVuknFengMnPswz4KyjPQbbF9Hg5Fyx4kfjQWRgRSot",
  "key36": "3MQ61XXoTkTU7CU9Qv7U5q8QR5Js1orLYF3Sy5AJR2yjTxg6bpczENep5WZq9FeqKTUcPLojoadBj7VvrWCUm7bA",
  "key37": "4tEu9MWC3xYjafExDeC5sq4oUXQLVN9GPYRpUWtKEwVNqb4oZzijyBShDEqExopJuoVmAbW57R6WgfEBRoeVKLht"
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
