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
    "66Xmx4SB7aCabUEMfZmsZs5vvCoEzSsZP7ggAURqR9ExiLgTrM7TLZ5zCccEJkPUo8pka74L983myDbq9LsddmGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cus2gwo9RmoCPcx6yGxG15NKZpa4UVVf88bkK7rPAfLsjREwaJsDLcdmeaEUvKQYdhNDtuYGnGYPeMgSZfo2QNs",
  "key1": "GaoaB6Ayhozu9m218F4hTiftd411LVkw3rSzPBDQ9nASHENyzaVMmBPvnKaqg6AguV72kB5i55boN2qCBGXkYoX",
  "key2": "5AknuSqm1gcN6nqPrManWnQ6YeXnBLivZ2owTQQi4FDjrdScNC4dfWJN3bpmZgfVuWmf9Q2nSHfPfKQC4DeBZJVj",
  "key3": "58g7U6DGhBnuy6V85UNwfSV38epU11ZBx2DjYsQ7aLCdF3L5m2J9p4LTj77Do2z1cygCBMvZrL358zpGwZN6oQBK",
  "key4": "4DCx7DzE3zdtDp7yTk3DcYWkTvu5s6PCAmFsM7RYhWwW6pVjuuzE72jLX58EeuRUc9L7totqJ1u35h8DB5qeHPnP",
  "key5": "2vvkmLNWTwt2ABM4iJexD425c8eQu5EqyjJqPF9fcyJcWMZYP9mFj2NQFNz2dz9iXDqnYY2sxJQtoAsXTnW5pqxG",
  "key6": "59hAqx1BiqcSQzJZ4wib7URMsEzSnHuTmuC6GFxdNAPJfP6c6QiwwKJqVEezLQVDtz51LKXAohUBf9oPYLggivqZ",
  "key7": "4d8X2NR2rUw8q8sXbmUN5sNUdvqet7GPx42BkdDFPe1wLkWZxT8bqVr5msnkzCJqkKeKBPq9fqFHz7J5fkAkRe8R",
  "key8": "xpJmUX5E6JWQmndyP9cWbwM1tvxrAqS2jU3Cb9D9SXvLiccEFc4Eaj8in3pqKaEjW7qpU5544S8wo1ZUQG3J7ie",
  "key9": "3k8W1VKytKr1LwgScnNgjnHoWFwXoPAqURc7eMTio73N5sCkV9uhdioyKahXY7pzxMSR216tdjYnJai7YEknqmKW",
  "key10": "4PfCtTJnG6BMTYPfjb9jxcgSY963FgJ2DikhAuZdnSSoQjfJNBUrsxMBKBkkedx7kmWNbbvivdzkrQcMAGkvWnUr",
  "key11": "3RhAoxJuxDgE6X2MmHR3jNCLRnRKW5dUyvPeXoyeztjQrmFvHaRRe8gJuLzcvXAELGcvbM7zEo1geTU8A5KaTjit",
  "key12": "mQwXJHa8rEsRfcfVoh4DY4rLHEQGy3QGzKrcJW5dy6WZn3r8GREXNh59moc5u7dYcaATc8pAa4AnKYrXV9yRWyj",
  "key13": "4misNjqv4DKDMPiE6g6Gga87dhKviDsxLhdda1Z1JWx34pTzkFPU3B2AHuDxrWufhWEV6KKYbGVEX9r4s5VxBhKR",
  "key14": "3jWTTcpSSawGedvgfvCYdD2iFsuaVdrrCqLMpUWKAJ1joboE74xQxkRub43wkeQUohsBbbTCn4ZzTkebUkj9w7Y5",
  "key15": "4ok1VRVuwWfX1gyghqYvPW8Uoe41Js1ZvdtX1SC8FEVvXfFtoaohHLEWu7WNfXTY2mysrUx5jPf5TfPKwLsrhx7w",
  "key16": "3Q4ZhRkk6WvpwjrRPpCLzY2VbmmdiyN1L89vqmnxd7qzRn7UJGtvvVJj7QHJgaSLhETrLZ5xNtzcR3zvYTGRoEhb",
  "key17": "3qpVU2ARmKNzmeYehLp6S1XGbcC9L5cofgMduFHMYG6SGL57jLqGMxrxyihH65HXW41RyeQgxSy7ik2y9pmyjRcx",
  "key18": "5LYw3tgZZRdcprPyybaVHJE2hmYEdr2ntLTKJHzuKU163HL3oP78QUeWmH2DM9F8kWqKkSFXsjZorRqTFWhY7o1B",
  "key19": "5ErTRgcRzXiKFVqJAKVQmhsoQqsrB1rBdxaB54x2BCfGpCrC8kdUxgedCRRYS89zCs4i2iNToRyZhfKqGLLuSmy",
  "key20": "RhnL5R1ftGCoNFaDGVRxz8fAvDiWvj5bFvBnPiqbFDMDjwg4vHK2tdxpVTT1DSjVCGYWdHvTYuuPuy7mef5Q7DB",
  "key21": "5f3yTim64GRjAXyMYxMJCsCwJsoS8WZUJxkR8fR2pd7LvCYegWaxv3Aurk5SDShhHqLBC4G1tGwWZ8DqGWt6e2Pp",
  "key22": "3ekwx5SCTWgsiSFSkT6Pp6vy7FudrUrduEKA1mD8N5x3VarEDL4jXqBx8mh9WuY1JbitcCar95oJGizX9f1uKNXX",
  "key23": "myiZbwE1PZ1AsFJ5jhUbPE3oLs47BweHP3Bb866SwJ8U8qtbixqYVSZpAFPPXsRZhqy6TG3R2GSszNeRufeFUJG",
  "key24": "kwBg1AWrdKtAstaLApzRjt1WnTmxmziGBM9FVbyGP2EzMohDnkCKsAHQRVWskgJS9ZPjuQGS4mMuDDVGAMi6eFZ",
  "key25": "3hkhoNwcNjYd3mDJy3gNnRFV8tQPd5ffQ641n3DNvQ4m9unVGEco4NiK8ChmxoUwLMqCsDL4Mw1LRWxjQoWaePZR",
  "key26": "2eKtnzvyfNXPyJxLfxhAomQFhw2UPz2ZFEtDiNNfSjdndvSGEZKK82ktpFoAnvwBgXey3DE542eH2n2RbZuTruzz",
  "key27": "2KaBZgvuumFPLGuRZsFw6926UTi198cBa6xY8DQ54mBHnBYQvyQfv2ME7uc6pAAZL2UTkkTQcMLP3GzWaF1zQMeT",
  "key28": "2Q2iSYyyZ2fBCiJpKmvLbDYuH6fsY6negktdd24Fnmp8k7wka3JP4WvLLGcY8gpbyZCMarSz5tmBWGoNKu4nVQdm",
  "key29": "4jszqShcu5p9VdP2FUsenAsFZy8WAPJJVjsKsDoxNjDontJd1vt745zGDuQ9U3hXRh1jQvMeJwhzEMFbDuJcQAvh",
  "key30": "XdUn8Tp9qTLffJz5eM5NBEDDnZbnX5j3hRAnkWZNB2sH7MqXwnCJVx8BTT4DoU7DV9HKtxp1SsXhfZgwhVfNUtB",
  "key31": "5hCHU51h19mEKURfbsTPh8TqpbbwBEjuPMHM4x71pLai2y1dSJiP46jsXjJ12Ahssv3JRu4WKCZkYtxEfw8pGBvd",
  "key32": "5V7b6pQyWr1zKWsGtPCKuqTzoxDKRqyjzrKBdvL7gKdYrRm4r59VTpH1SniNPnrvpPFaiS5o9FX4dvFsmVTtSgJh",
  "key33": "4fp7kyFwrCbJB734d6jSCq1rZyK7TGWHav97jJf1fASJP5mHfzYMCA91KHxeGNXGK93YcedXzrwgVGib1Kg4Suzw",
  "key34": "5QDQwAzVXJqTPo3mfvfoZGvyJoVVvVyMfWjXa7MKiDyvKW7fkFkN2eqEPbPgUNUq1UkpSWioeMvG84T5tvL71Wdv",
  "key35": "47UZm1Kbzdat1KCMuaDne2YVjB2h4mgKx1wgufEamNGJrtsDx8gq2mPs8zKcDFmhjPcS5ihSV9EwnZfPmrTiVbfT",
  "key36": "46e7GofZX5R1bzox8XwJmiWy2XRgBRkn77gTsFv6j5Gq1AnifoDAySe8ENm4LRGWn9RBDN81n8FXwtV2VwrKy9Nb",
  "key37": "2ucj1yX2B9S9GkRmTtDed9zYsSyPEq1q3X1MKfYkytQhwi1L37VBHdau8zPgfqFn66enhBzMJsGHGVRzpTAZTUuk",
  "key38": "S9XKJmnuu2RTRds9ni6NADkhhpNDRXYcrDKKj9GN96rReryUMYgBUsmNvLWpwPcnMXfosh2pGsdy1byt3bihPVU",
  "key39": "4SNRBSWiVzrQQbh6XrvHBPnoFVGXqWiAGS9311ddpvN3EVjJa4WSvG3HeXN8cHDAYmmcpuL3atPKc1Fw1oUwR34w"
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
