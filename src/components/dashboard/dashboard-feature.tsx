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
    "3E4Y1trHzrRfufvYitZriUoxWyBzXj9V7RqtuPKnB5YiHZs7qJvNn8XLtEpJWXh6by8BPiM6wCMsJzhcfdvNSwHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f5YVj3FGSt4CLtQEqyEXCoUCcEkk8Yp32JZVse4gLrjCFdisWQwmFBQjKPoi63CyAFJzBgBJfEwFStPnG179EUC",
  "key1": "2xZnRjM2jsvDchqDBEpwhMr8DBCCsMt7jpCSDfuA4HgYoub5PQfvL3uhwZ6GwFxzBA9DeXRuJxtYYS5DMUt65fdN",
  "key2": "2ZTJ2RAWuTA7rvN6BVU1SUvVmib7T3cNfDRvRDitvakfDmrUo52BTzZNW1jyzGDRSsfhHKi9DQWdGcmZ6BDgJfDY",
  "key3": "3H5bYV5YaDm1beZkcSUeMXrp6wk9fZ4rufXs1AiksCNt6qCceQzuwkk8sJzpAnGqZMpd2CoJ1W5sf7jLv5DmrFZw",
  "key4": "66pHorTxxQNNQQ7U3mEidpDudH2jgkrH42sZsh9CFW4nGpapwuttP9HCgL9ohed7uhp9aPqzDS4ZhFfvWTspaF7j",
  "key5": "woAxxNfxS1aMTkviJHBck5XrHTGTNZnxLFHi74j161iR5epTwhUvaKDfiTkCRXvQNVRycyf4RdrKXN5HEGqJ6NN",
  "key6": "3DxwYVr5cM44Pb8nddFm7DMwaqsvmYnFTF9sPsDtGMy7j1aRqj5cY58DhnTtUzivtJTSCNoaPW9DP6oSymq3Ccpi",
  "key7": "65f2nM1S1DcuiQ2A9K5sBCHcRdoET3sR9sYCGq9jA8xSP6JbUTK2KV4eXn5RqcpXZe1LfsFMg71qQchtrasBM9Qj",
  "key8": "3TKABdtYj9vUTDxfK3L6F1rgHRF4mRGvremPHyGFke4XMvShfoFVM19Re5eMT3K64w8kppod4bzUkkmgpLuYgZ8n",
  "key9": "KbZPJFqhtFgvMUj4EJkM5svy5NrHkdanZ5RYKmsUtuT5Grq56dwE6X2SEFfbdq4dvXLhLHYySxycPWhER5WWRU8",
  "key10": "4tZ4KTLHowktKryZBcvt6NHaobajUJhGdT4wihGSXjEqrgGSvxzVMadxNjsu5s4PWGCXJApkHDo9JMtmRhvPVkBa",
  "key11": "2PS6ixaatKLDt2wz3WCtDbWHEuuHhVvF5iGVzceJs8xbwSupyiQgouDw7NHiGb5WJhvitS9wLu5zHJFg5ftY8Fhf",
  "key12": "ZaFBkgeN7vad7NPptB4d61RVsmazEFWQcLycnbfxd77Tyj7K1j5VQBojj8kpsEKd1zsUJQWExNpoGHzsYExDiXn",
  "key13": "65xwCwPFSr2Ag3DH6P7wD2RiCdE8ZLWoS9kwvxbB3Sxjq6A25q1JoAUR6xJTXmkCkuTzzHAcAF8qAYLRZuhqAnaz",
  "key14": "2M7gB5ZvYozSUTXZvvqndFx2SkttrDAhbg8FCHnfC6gDkvJGFkHgMphYFgMpoxUSZLPdmnkdPMVEgDr4v4ZpybKC",
  "key15": "4bZhpE9rxtvgYxF1cEaEDppm6oNbhzKio3WrKtLLETVcGkoxgxwAA4nM9KRmroNupopYsZ4LFYGXj3QptPgrKLA5",
  "key16": "dpdU9dvkYSjWKvoGMpGY6eiL7tZ9swxZbq8tAMYBpu69d52mjaJostapevLDH1mcTwnJDUQrCBuE4EK7DKc4oAj",
  "key17": "5Xp5Q15FQTjkLgVQgu9U1XzP2LKjUHDVqQ4h4VCF8X2pzeULTpr3UfLSVibaHqxYhwoUk6cqd6KW1v5V9wY17uhV",
  "key18": "3TotxaCWcuLQyM2KddSLxqMDjQnZTnNVs52rn9uVQBETqSKY2CAF4ysh1SyKY4aA1zS3JkBCbvhpXaS2noy9CaHJ",
  "key19": "Ltgfc4RX8rrVxCmCXyirPr3Ef1czUZUpE9GirzngLqs2TT4HMcYdtnCt9nEh7Di79RWxTMWn86egfbaHkukfRZW",
  "key20": "5sxi5qEpq8TWp5DLKWFM5XZW2sNrkVXevA6tULR6MvrPBwnpvDqS7eNjVP3bVZWD3zc1NUThKeQcoX3WbtoQ2Mnd",
  "key21": "5aydEcxyuxcwDA9Lh3Cg3YnVT4SHtz3muQhdAmvnaVCZrAsDtUwELxVYaWQywToQFyKPDQEXyRYr9DyRsWQeQX9Z",
  "key22": "T2fN5r7gMqHnC8xoqkMoAcPmsfW9KmHG6jdDQ1jjfqtM7gtnqVXjUX7w34Z41bh1dt3S82KW6KxqSsQehT28Rco",
  "key23": "61CHGVowvbFwTmsYuedbubnrKTA3hZpapLEmtjJaLVpFN8UbJjP7rLDqSXtSnwMPMTFCXDyj4L4pqv41FKabsw4M",
  "key24": "4BRHB5bkiVLrH26fqpAzW2UyhvkKTv1BKhcKURWFcgQMsY82hqSXvKXJjSrESDx4btMtUt36Pa1G7HdR1XEH8u8c",
  "key25": "CaUCEGxF53itiBz2TXX7oyNPjwwohjckwKxVKTdoYpYj5jGhwPy7c6oMjmGt5UuvXvgwuHT4Vq4QGXepUk8k7VB",
  "key26": "3UVy3J3eZ46MYsztGGGZ3LnZp6xTeT6buvXDtss8Cucb2E1QB9cYigNRgLKFxkjDSYzHoMNmPRo3Mm7EcR18iJuc",
  "key27": "4idiXqYVrXE4dLNABbwDRPaeRUiH7175C3y5rFxER3pynSNZhQTLND18HhxEKzmrZXu5s2CNfrLQ51t2PDbc7XCh",
  "key28": "aJqXFSQZatTR3Cq2dyedNV84aoz24q5i4B1XB4q2CqYVwvUNkyLvdQgV3z9Du51DBiqbgpY9UMLQMEwyUBFfC7J"
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
