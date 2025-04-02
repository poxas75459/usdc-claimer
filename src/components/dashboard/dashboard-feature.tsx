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
    "5Mrkktu2VfJmPAH3Gto53s7eAMUCtShNedBj6eUzgkuSnA4HLDv1ttcx9xc2eyAAYGJtrt5sCTeTC14Jwhtb6jvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dCDqjxgHG6mYAuTmx87JAmxsKupuGP9tZRXU9H5Uvwbh8QBMssmfnrTdcepu1AVpBzHXTRpEbmqm9DDPNvNwkeV",
  "key1": "36W4KQDacBaKeqeWe7jNsPB26gCw2uijFxPxAG9JB2dvm1W31sXnyciw9mnXyaRWJfAizeu2u42hgHAnxWrYJUnA",
  "key2": "3bMrDMzCdhihqMuzi3YxZQoVhoDqbqd1p7eB7AjrS4pZsMEKYmKPuusWYBPRKcS4qyTndR9HRiNuE4AVd8a5HEhw",
  "key3": "5ZAXCeZBQnPv5fhEnK8i6MuearvSDRBXTCdqnd9PKHdxxQxqvqQzEHa9n8bjdGLKvaWwZGfHJzHVL2KFuQmk6nB4",
  "key4": "5KaymVifoH21y12fdRUnmFQLRWuJ3u1s6avnSo9dAxoMTLr1kAzaqH7eahrfRQnfrVLvw8LxBqKrouZbtprPjvLW",
  "key5": "3GoaTwqXBoJwGUc4L3Sp1ncsfxicSBSoNVv91nENtXwq9SkKSmD9moMFQkFuftuQxRbzKUA4DchJMqPSrgJUxjmx",
  "key6": "5y9zoqnuKbpvfE1idQsdFSv1fWKM3qun2Y2sw165XHm7mRdUpEhbXt88FSHWobngtgMZmomJUYAbtjqDmZha2mFX",
  "key7": "499VpSsL2BrgZfKKXV5M5agEMqpH5vGZKuNuLrkoMXxaqTdRkK8MYoywSBsa87ZqvpeAVYkhFHemyLKX7wtUn4PD",
  "key8": "uYTCGHacxZEiAL28jVPGqksMhEyo6gNfJA3twBXDMgQwftupyAGwzvDnxNfEth9VxC5PpfZRu69Do19GYX6EEDW",
  "key9": "47qTatyWhCCBZMksXKsfMb2HmGK7H9C1Y972vnRrXCUUKVtMkFJJsnahgpGzQmc1ncZbEPPEU3Xeh5fA65pi1xtb",
  "key10": "29o5XHT8PzAfXM2wkEUTnA2F4WJ8F3aADBrapHMQNt21ACCR8SSquS7R173VAvbi3woCzukwgZfJPEBEnbX5pT75",
  "key11": "2QTNfYaD3QQ6KD1rQApP9usY5ygpG4RBLDBKGfjMq1RRTZS2zn6Wbi8LoJQN2E13uuZ139VGuB3gCwdPCGy2WUo6",
  "key12": "2HAHzdeao1dBk4gHimrfmtsXdYDbbxjhaKTb4Q648TTRDJ3LR6fWAXuP4NBodTcnBsAWnbv7m6mTg2CKRnaZ99r3",
  "key13": "2CY5aW52pz9R1Gf2R3QVjpyDUfiKbKGDB5dXqoCDevepRCFnx6ZRR3ktDTwFZpSzwDj6s55R5X3d7yTHNByV5AN1",
  "key14": "5dBUMgYASP1xC4d2MqTJZcQMUwPNRuEfGevQCjr968QGMfm9zPryUiUWMJemTmZ87RW6fpxzgFJyL6jpUyA4jHzv",
  "key15": "4rvUC3sZ1dXRKpq6Yp8QBjwhrp8FWWUXok7nf8nP3dH3DpuJYha686fhCVdhU3D1QJbqr7aSL56JEtAfs9iHUMzh",
  "key16": "2KQbYb6oKTiYQcHvFkQRTV5HY3ARJmTxDumeoQLqe7Y8PPZSSVv7Mw9wyqDcfH8Hu2s95oGjnkcc3RLBcJJd4NE9",
  "key17": "4i6CuMN5s1j82umD1LC5HsQPXhsmPDfNJvUPEtZg3XTxK2ApqzHhxB1vK47Z4nZr5d9GXknC4Cei3XSK7YApQXib",
  "key18": "LvoyRx28hmXpkg9CiYGQ7Lq2riXURK1QLukvg7JmVyy5Nh7vu6kYp91CNQyG5vuewjBFKimVZEKQdBFhHzNjUyu",
  "key19": "5RvcfgMo2MjE1jP8KU5qitPdbpp2Uiu5JQj76AeErgL5s2pxJFixytocM3UCeJVFkF4GVJxQyppw7ZBibSk5GSX7",
  "key20": "372tr4vdqtY2AsT2yb5smWQkBtQziX6w7eAhLTobi3o9DT9NvV2aUyfzGiomKUYy9pspR2wer1ipNVrysS1Ggrp9",
  "key21": "A99cqr8HXDQdWLg3UAd3Pgt8oSspBiFHqgerf2234U1g4H39tbYa6qVGygKSvLwcwkcNiheueHtgfw4eDDzKhPR",
  "key22": "3ptYNWZSwYhm2pVpzPEtFocgYMXBSSRrZ7EcVEQNc1H48iJ3C8JAsRMkgoJGsn1TatAcqLQbybNYmCUyhVb3fvxL",
  "key23": "3vvudeTpFP7fCpx3tdhxX6HtedHEdyK2aB81pCqjpCvvpPAD6V71KJaJRBbNFwHkxJBTufEfQFkjQXWWAHDtZzZv",
  "key24": "61bsE16JmSPRVcAzVYdZps6sxxwjciRoL71vY3ABBeHh6APyLGg9opc7rrMyCy9fDkUUmdw7u3wNkUo19rJMdtqw",
  "key25": "5UrV7fwGSBK12sLAxh7qkv6BNhZcjtFh3YvNKXNAznz3NqmCYPHfdq9UmpoAt4gYtkxWtD3BqCsBCaYxzehFBXrd",
  "key26": "4FgWdLM35xnP3MShwRD3eiCfc3uowDAViPfK8jAqRFDBr6UkFgFnVFZobxqTxgPnUybSryVnMmkV7aP6Ebyq25Rz",
  "key27": "675FLLoJeAyfoTwaJXpp4SFHN9tbYX1bpbPMUG3pDJkPg92dsyydkZ9MrQt6acT25PU8cTyDb5WN3kAqboUKHTVd",
  "key28": "2PRo7HPPqdnAwvWVyFomhgoq6G6aba1hePxWSdxTFHttg3SXM3k7GPq5ENDDH1XHkzR3HwBbsS9yR2E2HeNdhiZ2",
  "key29": "2Jq5Td44tAjDUFPuoV4R1oR4q5BdJXipVK1C4zyZJ9kxA37xsDYGdr6H3fAGFBSrtbSv4h9nJmBpVffSMhB3C6oP",
  "key30": "3uuznhUXtZZuViZBri2uL2JGdD9HqJTL1R8gLMAXWTkA6EfRs4DBoja7FkhJJntqjyk7AbQ2uUdnXuuy1zfAf2ZM",
  "key31": "4Hm98kngTha5cQe4uD8for57QYHR7xPByah2nM2CZ9gD6VGQ6PHfGtphwpM7XaZT1GrFHZGj6ajNiM2Gj4GhCWTz",
  "key32": "2wYsPz9TGEtnDrS17yWKBaNRaEct4b9F45XEfPQdhYfA32jBdBp48wRWzngw3eBVhNXf5c7eVMiaSNJ1FfWpCJKC",
  "key33": "3rQ9a2LvTeAAjcpYy2iR9k9Cy16R5Bdon8d7zHXyRT2MGdisgCMa4ky8K9JiQSL8gBu9YEBqteAxPu2RHgFAWvrX",
  "key34": "2yipBsw8iWRcoHovb8Horsu8xmxZdLsunoPeCiDu9SBCG1gefauiVfhDT1vj9BTFAiXrQMCQxoMb8VUyLxgVNq9K",
  "key35": "2VFPCjQwSAExgRgsJvoFwfLCXx3wqEEuiZk8SeaVDZmd49owRSxnKZPymu12bGwGEMxjYYycswUjqDee5TvuChkB",
  "key36": "5X3gUsb4zGKWHuXFQzizuqCd42Hnq7wJ45i7maf8ynRByY77GtqsiNvWSCEpGTNcw4om6q3gPsFxVRRi8FnNL7PB",
  "key37": "uY1XnNb61znzUr5dg3UbCE4Jdz79zvc3BRk7z5PyX3j3RW4MYRqHCs6BJNvxfmLyAuEGrTrNkE1ewQdjg8awQ8q",
  "key38": "2ikUxcdqHMfcDDfmY34CfSHozACG2fufCnwa2Xss7HB1TH2cjD9fNAWFzVEeyZBY4puY9qLD8bk2S9Bftbjt8ms6",
  "key39": "5jG8eHAGPBWd7H1JpeYXrTHBi9SAETYvdzaCyoCmGx3VPUjaiZX4P5WGy7S7ocLGWgnWEMYKfVEu8pvunS1v8jhZ",
  "key40": "5Dou7RghmC3VTCh4eTycHzkPArJx3kv2HjLcSJ98TsMDjDhqp9WDnRFh1MfwSXQmiPtFU9VWsUvSAHeUBUyvcNuK",
  "key41": "37s6HzKyxnc8d5v23qjNncjT65cJmQErBQD1mKQBj9xMNRj1Duc2fVfQV3QZB5H75twYxT42NYnQ2nRqWygZfLBR",
  "key42": "5izRftHTd2MHPFEENNdkX99rNdcQxGJs9HJv5Ja7kihXaRJqGhsxpww3KFhYr3kTMGQgXtDyE67W7MWUg3SS5n6g",
  "key43": "53eTob82viUu9o5DboXW2PZmHgJupy4Af3CD7Fqnv7uTQ2rVQQjv3uaZzVEScQLL7i8Nhrf3wSS8G2gWSeiQSG6",
  "key44": "5GXEkJidRy5JaVwA7ryUYYshHi9g9irn6HLqCccTwhnJWgcFYWcdmchDewnqHqQcs7mBFRPGpfdmrNRuZXqermcK",
  "key45": "qML6gjzf6AJmEgK6pd6LY9nK7WJUupBVmPwHPBvgXB2fwAngs5QPmgpVuJmQBBdiKW4oPfqrc4ib5QqENv8qRtw",
  "key46": "3kv7E6zNhWx6F69JUgBsRBQroqk1zV57yco7D8HAjhh8DTrtk6QpXWP1EJjCMKuuEWiqzRvXoU6X2jxKaxFs8Fgn",
  "key47": "RW3rHikQSpVqPMswpmeuwF31WBGRVkzxEA6SnMjigZWHCaP7N9MdwfEfD35Er1odQbEzuLFcGjaW1XdxuKT4v4a",
  "key48": "4WgrgQq6dvAzXqHp6kEPp59JEfq86JCu4Q1qBrLH1y4TMrQKmgcm7Yz9uQrMPZKXckgiWFeEhSBbCBEtdJqDb81C",
  "key49": "2Q8tFVrtrybBudGDwEAfe21nc6E3xmqbbmuJNiySUw4pEFjxksaZzmNgvkDkJVM3EFmDrH9Dy1wXPGX7gL32N5DU"
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
