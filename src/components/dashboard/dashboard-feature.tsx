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
    "5CXWwCP5xXGQn9DycFHpvaTAwTyHmAzwJpFkCu1G8cofmimg3btqtbaT2ee6kmdSoFYZcwJmQz2ydrFKx5LRdA4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gNTtUU85iEuJz5jFkire9k79xubquSyd5fYh3naRGMPpcuLLT5Ga2bmTFNFhzDmCQB6MkrjhDQ5y8Ztnwv5Bg12",
  "key1": "4qBmgLTWsM6Yq2UEdRAMcoPvCtXtG6Dx5vmF8ZxSbpHbADsHNvmmKXq6QDgoxCJaSZTGCPVBiPj7W76EsL3uKbXQ",
  "key2": "ueNGVF3qDKLznajQNt8W3t6YCe5bqvdEjkdWESvFi87iYrFT6WTBLDJFKMU3QkbnhnPhsjiXeEvaPEHz85fkh7r",
  "key3": "4dAnxDpb6UXbvZKKSexc9XLMdaZk1ynw5UhAtsWySPixD3N3y6k1T3rxtqiu8s2FaFWsqkZUB4fjC7neem4rH2xY",
  "key4": "3PtbsMtBgXpM9MQ4iMt9SruZEcRLGUvGcWkZRsbYn9CZY7ToQWQ8pZfRVaWATws6msns93sF26aw24EspNtxSmnM",
  "key5": "2dSKhcEzXriJbBL6NTCGPnUyEhB9fimapXhpng1nwiryU3nfRZupdCqqBwb3TRMieGqKDXB1cdgzq36gtLSbN7zM",
  "key6": "4PYaxPjifxQZVcZHrzjRGqTKfWayujzwsrv6Ty2xKj8AA6PZERUrXiDa1PrvF9kvc4w4QEeWPXHiQHQSnPPex8Kd",
  "key7": "EnVKUG5JWjbiBpN1boUHLDstgynqwt3W78YAxivPESKWoqpe5rs5ZvgcDtALmZPJLBeUp78p5SEcW8XjLptLTC6",
  "key8": "2TKymUoJUMf37t6bdHvav15eEBWrXmhWRKjmNJiTe6sstWWqPcajC4tUa7UnirFVTDR2frhRy9aj7QnUnkLYH1NL",
  "key9": "64Te61virmkiC8d92mRknqq9VYCTMueA9NysfJnPQx231ch7hEBCaCwHB71kw8YEaCyXUrdnRSsvQJ1gBhUhQExm",
  "key10": "4yAapiirPaANTn1FJSNKwJm1EWTzmGSBdJnj3gKJP3S6ZYnqhLVSZ532xjgawaxs9rc8XeW3bPz6zSiKep3D6YgM",
  "key11": "3wr7drvBroULHTTiUn8MMixJ47XAFM6RbocTLzxYj1LnQAirDFPj6X1xMiuBdSa85mzoihK2jkgr9VUn52NjnGsM",
  "key12": "3tFHoYfTgyFjVTQHWPR4VLbt7D6M59wkciFvsSGVMkiruAMSpTeC38tryTe6VbG7rnHHoeZdpiheYhCZEbi8ax6N",
  "key13": "5NSUZdN2zE1rmgzzMcxs6Eo4HC6Rp3ztQQU5uZG6qZg1kmyGb9pYhot4x1CVfuqRaABp3bsHE2d7oaVFPQJYw1r8",
  "key14": "5wBswHXVnTDQJvewmc5vt4kPLMaqoAZAdmAnCrhGA7iNJ8B6hghs3bP2DNDiq23mqHWmskqMWyA7vdmvHQDEWsJs",
  "key15": "5picPZUzGXAbeXLtoypUnrA6eadZyXuPiUG9X3fYTBPnyF5fN7EoJBuuRgT29Js1Gq53sc8FGiQnxds3cpWnwN24",
  "key16": "2oGp33P2NQ7zNVV4g8RNiokbcBpfSq3r8fyNr3PNrFTjDioen8hLAuwEbVbsyV3sVq1sud2WuCtu4X35tY4ZW42u",
  "key17": "5rczSFUSzto7EwfrXcP5xaaeqi4ZBz1i8xc4eJuSYwmR8gMaantxUhJtcLSxLWurS7xNNmigmvx22oRd2hKoLxZ3",
  "key18": "5gLbS5y92Urwkov5toEnRkGBHWq4UWusgKJcXbwf1BYQqdje8XfhZzYJWarfbvwP65WvBRptvTxCoYJpa1NCYdvX",
  "key19": "2dkeuxGAvM1sHHeH1Ccv6G1pj3j2cWxBuPYAgA4mq5BJgJSCtR7Ug5FMxcgHAecjyjHLavoEQYEpGd1jrzU5a7vR",
  "key20": "2mcXoyJugQPGKv6uQ3RDNJF2g3VTTbkzZvCpkmaGz1A9QxwVKNug4GearoBhy796VLmSEXBt8knHctQeAxKNf2Ny",
  "key21": "33RA3jQm8ip19kt7d65oLLdyHggZRdtzPwQz8r4oWRzBMg3veYtTAS81oJxASMjThrrgsdrWUcu4VpM8TxpLgArm",
  "key22": "4rBXExafXNJGZmjEyUz1UsUoXJf5aprjCKzsdptZ1p7999TK74x28iFyVpjQmaSGJM1HSXHrTFunGT8CfEeVrid5",
  "key23": "5zWa44MPLjprWunpnCbdoo3wPH4rtaPiiF9hmDaipcoLxqCrSfFTxWKrKMpUUkJaPfbMiyhAbQo2GLxNWtAXRdLp",
  "key24": "kJC9s2XTc5Tz5r1grzdhkSnHnopp4cNSqAycWtXFU3FKXg9dJ7BU5KterzwxLwvDjxrbL8yoeKBFPnrG4pUZYh9",
  "key25": "4dwsZZBi2uGQhPBj2onoPfh8ctC4UGR4WmDL4A5m7fMyCMj9ZoRtKhxqnqNWSCn7CLQnT4XJFr3bx8vkzbRXPKJN",
  "key26": "3qLCBE1jcfSWf7QkLARHTUhtojPpoSc9bwjhMM3xrQcpFSBZVpamLuuNBUDoNNGTwq2LQzcbVe1ygfDMUdv1o1bz",
  "key27": "3QS1SHxQt5rFxQ5U27F7nYhyXm1o9NDD29GQf4rjCQDYtsKkfU2zPqmAuwzRzceM1GCagSGtW3pTEKFYpJ7VEHGs",
  "key28": "dEUAU24XbPDLA9H4W69m8f84V7iLWnMbBqyuseEcMqQP9rbMhCbLp4J2MiHNw5HNBWwcif4LTXn8FNDE91bwQZ1",
  "key29": "4rdpgWu29GYnCtPYPniP5H9oCoHtbR2oYyoDgXrWZHXScz27Jdmo2yhU9i1bLmNV4rFEp2CzGq81JrDgEpX31W7D",
  "key30": "3Fip1V5E4Lq58NFeSV3ECMgUVTcme4L7HHxqKXFN1R7FoN6vu8vaMEMwKjkq9Ht5dA4Z9YGjeqro8QLmx2Nn7LHW",
  "key31": "2BJQzSSRViJLZtx3LPM6xG1prFEDjyUNQoKsuSquR6GKhKkrysVyUr4T38xU8TwYyvqcDQq1EcQrrUDEhVvCpmBK",
  "key32": "2W74pW4qJUeYKsxGYN5gGDsm1C5nKS1nsccfX5H26Vevi6GSymemAUKWsceUH9sJQ8wkzEL8UhzVWfBkic3GQ7JG",
  "key33": "37wonSDg12R54ccsmkcataS9Q9ZqoTeQ2ahzVUE2hU41tswdsx23PgE9Sq7E6BJ1hXpDwCp6Go7sqZVJGrycZddq",
  "key34": "dmCMJp7xugncrRh8HjT36BLVLVgQkuATCzGr2cWaU8HjxY9y1HYEk23uRzDEz3TR4yWPYNLGWtSxRBF8jBECFNh",
  "key35": "Zy38m8SW9Wn5gch3xuGzkkvyb8XgaHBpTCRaaE4kVwRv8SXGkTuoFQWgBDVEgKZaVNaC3d3JEhbh4cJ1eyVnRvR",
  "key36": "4RFz1a19VoQCaPEqxeLDHBSRMsrormdYzWfKjNqWUSfVXkcKMvnsYafgJ2QHcZEgbnqHgrtjxbz92GvJTgVd1F1U",
  "key37": "3sjHMViqyb8UWDCjHBQHERJ9x4t3S4CNM89JPYqUj3ghhVEsVcRDxSbWq3MN8o5YS7Zf1YvApv1GNoaaxYpTfKiQ",
  "key38": "gabwVA4TafK3jyUEVbkRXNZgyt3FqU7HzApPDFL2yLSqgxrYDJKWoEEmUuE7VXgV4FnfGWNJQWsjdNkvfrBX2Fk",
  "key39": "2BKzzTASPnxe7fs2M6kwYaLueHNc9hgHjvzs5hx3We2PK8yovsZNZQs3KmUTRZXyKakXvWwpQDyrimhfq8BhNn5x",
  "key40": "4cLiG8CNQRUa2eV3SgtShDAfsZJMfDr6LpJnFx8nshCU9KXBapPakDubY1mKry2GNkVus6rRbuPruWKUG8thDGFN",
  "key41": "5DQg7nqpaHDrYMwB33B25AK2Wjb9WGW7K3fHoB7ovpUJmcuyMq65XBpxk35fQakXm8QiUFno1Z4sc4DFMxDyioyE",
  "key42": "5oDLjG5ZbnJBHnuQthVE77GMVFZXy3VSNmx1NBuJAiu6nFhNWtENg2zqpREr6cXFw8LqDF93w1X8d2CsmrVfSDnY",
  "key43": "3pCTiphhKzSYnBPGY5rQXoyj4THfhFLdNS1AB8oxJPcvNmUXRPbHxgGZoBE7miian5U8FJNgA9CzJpgCYcXpgYvW",
  "key44": "5V6LVkH8B4MDeQtHCoG6ex4HXwDb19wtgtfznoHMFu9ih3evBdhQLZP5XqtE2L8gpF8w12k3HfBrrKSUmhpHVVCP",
  "key45": "5jmndaCoHSk92GocatQDgC9ZuYa7cgwt13MVgaLsV15CnvjqX7azu59ZGoP1X3ePdJjbvCyFiWLPryVHDuCzDj6H",
  "key46": "4VxXw6RzQMtEgsrqJ4AwJGwLBo3tTe9zxwQwNuQ5jP9prpvy3wbrNYFL18znnH85tmWRNAPB3eAxduw86kssgxcS",
  "key47": "29BD8U2LCuUtDdCpzs4BiM4nBrkcRFzQNffk29oMiCpeUXNn2rriQAjvNuFL9pzEedQ9ojBEG4F9tWKtBbsHioQJ",
  "key48": "53rDrCzQ4e7tAxeaYZfv9h5TPKbVYbKRiSJhUTkzfyrebwyGztVg9aVvj9MYEdcZx2jyxHh9SPoNGabZaGihPeST",
  "key49": "G7yrUZzpJHNeu2bKV7mTpkRx7at42ocRe7SWXvmiEsAsx3qNRvTUfcYB1QdXkAfGkgREZLDn5BS73T2xvgB2mHB"
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
