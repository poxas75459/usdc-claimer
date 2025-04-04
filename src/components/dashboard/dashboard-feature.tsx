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
    "3fq9Jw6F1z7g11jG72h7C1onDZesyruUsynCGfY18W75s3nPvEigYswvFe5hKpXN5DFnf1KENYdARfapcwKZMKFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35pnWqSjm3UG56KS4aMv2rmidTcWBZDjzzkzQ2JJ92AFCbUT1FHu9LirpWuhDsweApAPiJqhXnXt8STENbR1m2Z5",
  "key1": "26DjzgnPKwALZXb7E2HeZRaXWgfxhBVCSxEQDJ6TVQqHQxy76yYx7xjr8PHmNhacDMU6U27wKfwTkHwRmeJX2JA5",
  "key2": "33kWdASf3JbeMa4rJ9SHxXAqGDL2jbhUENG6bemYS8uTkVfch5Ft18EkJSgx45D9MmCL2evNKzdAMLwkMzSCxtqv",
  "key3": "5X5epkgZyRuirkdaSDWsk9swu6GXvnv5pZ4LvfbjrYjyMepVhitL67y8EXcmDqS75KDNN327REVyfA33eLRHSmvY",
  "key4": "4ziqzSUKd2YmdangCU7s3vexRfaYGLknnVbwcRfRGukA8d1bpCokeqFHZwiqd4Hu5fXnr8EphGEv6fVTn4moNmPJ",
  "key5": "Fa2MqhaPeQWRYSKviSPhKjUSv4A8Sov47ocx6HJQoenmJWJtv1FGnG3A2VaSk5NEAvUrwdUyLJo8H7Zc1jSx9Bc",
  "key6": "5owHxSzMYtoJwUdEz25iEoUBHnmFMh9Uaxh3Uusx8wSyB85V2SrJ7GcXqM41MbKhpt6haJfbqQY5EJJy3u4jskH1",
  "key7": "4M8nvFT67XFx5BzC7QVDTjeVfamhr4tztrCroggWtj3Vptxpqk9yxFczjuJQVbS4WSpyvdEe5MxgwMX1MTfwNP1m",
  "key8": "5J4epTa2DsRE9hCtBttQnAvx3pBc6ijCiiiXD3ELhvKU9nBiusK7CMFWJ5N6U5eGnBytMYB88w1iXjszJ24aB5FG",
  "key9": "5uaswXfuREu4hQZcUmJSeyhoNiRz1qgFp6piXqpDinvjShwpFASHJwuoK8XeVQsomif1ekZ4jUbktGjn1Z2LBFP",
  "key10": "5e3332GeJn8mm65YkzGK7jr6m4NCuuWGYp7rh1GQLjNfjwdzhdh6NYCxWuy8P9MtZm6cvSHxiaTh5xhq8T3tYT2F",
  "key11": "4nrdGbzv8LwfGVQQXJFs4oWcHAcADAmWniboo8iiC8jxSG46xi82BDdsFsNaW5BQEsvbQEs4sYeKpowaADFfEXsg",
  "key12": "3pQgxxCpkqjUUSYB162i4Jn16y4sVejbMjceDTs2MW1aRSt2o5XnFA1HTnv9a1oCBm4H7XeGAAVwKyRt8qFYe9eP",
  "key13": "VEvppk63h2obvyw9q98TUxaVAHwVJxcMfp4CdqEyXWkRW23CgGU15ZmswHgPG9Pa4qjGAV2ZVnY97B4JbhfNeEz",
  "key14": "3GZ1A7hz6xquXqHfJFmdqsoVmLQfE4uyYqphDcby1yjeMPJtU3FFqmdBjt83JpTYZEznHprqoQPpFt6ArP8Ss1jt",
  "key15": "33RME4oLwyygFWYPShA26nbgKz7SzGatYAButAX68rLQz15RmrkDYeNTshAPAmPYJu4y978bYZH8Nv6aNccZKihS",
  "key16": "29ig9EyVQdywbcVRvPBybmSeKMjmEuqU3zyHCdVrzzZ779Yg2oe5fb1nhyJE1xSoLcrA2rPjsKVpTryJCrZPfbnL",
  "key17": "4ZKw9VXqPvYVqbP7eDaTrVnj9v9YNgc6DJTbe239WfP6bam1QZ3KKoohsJBAkdN42SBoiGxzBny4zunz6rH2pEE8",
  "key18": "wpePLqBgs5jKhs8UXq7zm53WL15f35UtLU2mCY8drVSmgUHFCX8ioprXEiLAzoA3TM32iKC8qBJgXt7PG33WgiT",
  "key19": "52cnvrnTY6cVY8Kk2pDWvvLYHZYnX9CwP1vmG26J35aG1nM3r4t2MaDmcDW8WMSYMHk95urYcNLL2KZXtr9J67ff",
  "key20": "5UnSGqddeDcC9pKnaJikkRJSDzeyUuJvY4X1h3KvaREKoupu6o7a3LkANA6GFesgxN1PUz81qAEx6TLnutQbWwnX",
  "key21": "127cYi6SGNst4Lo3qshAmKzTATCmJNZxPW3NVw7FEUpR6PF14KRiWnra6ZmfEkcsXEAe28rDNE7VT3TSgnVCBs7o",
  "key22": "2xcTXhVbM4VDorRBAY5SajJkMv6NkvMQiUEo6icXm3f1yJEAf71FKUXPbfG7w2G8MN5a1mPeGEuYwVaRtSSp7AA8",
  "key23": "2p4ntFqbfYfXfrj8UUeonYPs5rkxKWEot2ZPW9dmA4TyznNm3cFbfoV9eNrJYGA46HrYHXNMwVCwEF1Y5RuGkeR5",
  "key24": "3DVUJCPeBPZWqBaSnCThqxBmtLn9X4MYAekH15a1tkwZeVaVxHTseHRHL2sv8bJevkAagyaYU4zJ6rSk2EDTCUSt",
  "key25": "2xGgqEbLumUXEKHLGvSZzNPmi8Awpr1Kof2c1ef6ASyiqJD5EPBknkbsv6ZCbNSAoMrgVWwkRbrbgtVF55mXxXrp"
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
