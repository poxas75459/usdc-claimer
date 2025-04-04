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
    "tSTRsUYSUSzCGZhBgjJUUoJMy6Sredhd4xsZRYjhTMAee4B9zKLvfcL5yhkvZhFUtdT9BEeDoXRKzsq33huigXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gw2grBPBF3sfNzcxN2McCmjWNecX4tugjnoW3SbNwGrJziALTLwrwHGJfzQX4R51kHKc3RUz2GhTQ1sNL7FtjSm",
  "key1": "dXkr9EDDUMHyECXjNqgn9bwF8xnN1UUqJLjrqW2MJ8Xei34dAcpkAarjwj4MsVVsVdHwopNZpmQ6hzBZiehDUo1",
  "key2": "2vMRKYXKbThYKkBPzywm73jqa9a8m5sJJdp5S1ewT4BvwQ1b1BtiYPiFM7e8d2bpeyCymPHCJgpL2c7i6mkBfhc1",
  "key3": "4SCnuSx9fAkWUJRRVLeYkGxpTtrKoqksu8ZfKMK5Q6SeuBbjqnB41B1faDzipGwVTahYJfJTGkrhw4XGvXSZgKv8",
  "key4": "31YYzBqGjdXssZCnriMiSNToD5sNZvB1DHhkkom6vGad8msqqvRfN2aF3EZbcqnPyVvhvth1cnkaLo53YpBKtny7",
  "key5": "2DJtgGxSidqNeZaUDgQPN2M5yVwkiX3g7X69NipXgKYXW5Ty2TdCeCEwn13y38bdS8FC28SJzkdZs3K5FZe5pH3E",
  "key6": "25RZ7iHJRR8ZKekBVQf5LahkVgeUWgJttjAanCx9B9yE9Bn7RnC7LSm5rRuBSy4SuzzYnVKqgVPgdjrNTmCXzbjU",
  "key7": "4h3gbAYpuHNWGe9CmEvCZqkiNHyU87Kig2giBW297fnoYouBf9dTJk7HTKNwB1B9Wi9UH34mStQH3zFkXtbXdtsX",
  "key8": "4KqDQVz3uPpiGeawsk1jHknJJXA8oMErLDgXxDmAZ5jM8ouSbFo6Jzs7esADjcMUJXQ7q1vBNqyDsaS8c4Q99Yp8",
  "key9": "5njZBVDhyDSHkD9EBBJhxrVAYZQJHm7ocJU5Gos2tMM7kjecLJesFSDEvWDT6n7JDvmdNE6vTB3H56QpSu3HfL2c",
  "key10": "5DRxWSwvVdaqRXAvKGdHz98WkCMQaJktyviHRzozq6m7iFep8CvRsdTiGU691wA7Eo2iMCYCna2XDFE2kWZS1wjn",
  "key11": "5v3nUMbq1TeWfMbZ6yfzw4uqfmDiBbYEmL3gtvcBP8LrUmHuA257GN5mBcFA8umwbcQu2BECD97SvutSxwjzuUF5",
  "key12": "3qzDXbn5NQV1BaubDuddmLtbmHzedRXdnZ1xHAT6GpUkjjHd5SHxbuPai1VJKFMyFsFirXcYW4UJpiovQ64t4jBW",
  "key13": "31sQowHqRyN2MV8jynu2Ux9J4rc3TAC7SXcdxstiqazohfjLn3bprDrBcZGAa75TRr5cHfoPnZ9SvbcLDAAwFRg7",
  "key14": "3AF11RKtLdSQW7actLe6de5WcEdWZ88G4iENvY3XDzjXTLMQSN32QViwdq5JuoHHotcSeVu7LvKSYDxxLfzPmvrt",
  "key15": "5AzBPn5aw5c1UeP6NAyt73EEbmCLXzRP5D1pvP1EwDndYZj1tMEFmyUeY3zuUV5HC6spWQiAzbzbFXcqsENE945S",
  "key16": "4Yyci8ECfh2aUNWQMvGZ7dG4RxtKsc2G2bUHUfjEQQ7NwckitN9fXL4UpYTiJTqs9JJErAVwdcXxHvqa735mna1g",
  "key17": "SY6xffrF3aN9tFn2iEQPN4nQ74qtnCCf57BTat4r68JiPstWt6dUytxDe6tvUoZzPGyxv5tiwx1UqDF4uivswmG",
  "key18": "2EQsVDpwSwyE7Qnd5gjYvY42rwg228CqC1dzNn5heV5tsgaR5ep9cfydKiveeHH5pd3Pf8BeZWEX7YC5WrgaXAYC",
  "key19": "qpk4pA8oxH27932QVss3n8HQW3L72LFpvLxHfPuQKPcbZF7UyvJxsd3HbYZTuUMfEcRPf8R9wKYbvoygkM2xLqJ",
  "key20": "2caPAn1F2C2fcg1pqqGZeQVt5fLw2Ej4rMtKHXpd4buCzDmTq5nWAespqvdpTxH9iq2r8pVENzX1HDNgabqaLzkL",
  "key21": "4MZGhUmWZ62aoQxBvVPY22zGY9AuxLRwy5mcREFw3hG1D9PmjEzDPYrFTAVnfFtMmtECvT1uM76QeDP39oTnzFvF",
  "key22": "2fjE8PnA5eifkrwkL9N4KeLMYG5CEnteiXzC2d178sDzhon9V2uvMDnTcgYenTiJqoYqHQrn81KzY1HqwZRJJMpc",
  "key23": "5fqSRcagSFXCeNG97v8dtLmAzX1cdRyxpkTKNygZqvHMvJbD4bjiPSq2VzAJX1XpU6cX5VJQ6mpDTXwqeRcMq5sL",
  "key24": "3WVvLoKxQGwBNfKXKFJ2aBpcyYWPa4Vj4GnXn7zGuGnuEY56YF7VAmBdEFMVo84Em1VZHdQnjFjn28eptMgvnRu7",
  "key25": "4vKbgfiEJX3fqSoWgCGFx7y9d9erJ63a6mchf1DWsk1Q7WLUJ22GjGMwrycJ7mJZatypoysmsBhfZfppyjZZJrWs",
  "key26": "2a5Y9Ss1MLWMuS7udgxEV1gBVi3fJ4xE4msE8heuqi29k9BGd7vhK6pNSy4jKm1dzaG3MyNL1pDAcrs2nD1x5LkU",
  "key27": "2914fxvBApmZi2hULsmYtt9qRRe2RU4WZ878EDs8R8x95fEgN676sjzdSMh3Vk9vwiB3oi6JDF84m7kf1Qg1bbn7",
  "key28": "5j18cLVtyZAAhTPgAzPDsb6W3YFvpzjv66tWZbcN2hvZ3mKHwWQ89a6kz8coKubeThKuM7QDYDUvCWzc8hEnLLiw",
  "key29": "36ME9Wasuj73JZjc4d8DDan2kJEHVUwFA3McHZKv3hzPdhCyDHE4vkepPgnxAvRQPo7i1ekPmeRXVCt8MGMLWBP4",
  "key30": "5QGa3tHp13BT9ByagtW93R7tGLd3kmnUTsWk1xQqPtVvRvkd3ZDpqDpcPHb5qeqXvdCJ1AyjUdef89h7pHkAwVyK",
  "key31": "2DTWZ7Epffijz3gc7HDhjry66TLFJKH3W4A1Jyww88VqnubuuZ2wiXSq2pvMjMJrNY7PpdHLML2nRFdrhJ9SMmYE",
  "key32": "2G7ezqmJBrBMR3xU7XHZ8nRH6CdKUBG5crESncBjLVKjbwQBcYopJBT1X6GdNB1z7kAaqNRii2tvDFcDMhHbJnEP",
  "key33": "33WdLRx2cMANsD5zBNJ1JUCsKxnLTQaua1Pdr85WYM8ukUx36D51dzGAGteXyi4jF8BDTRDdPnqcEfygwk4d1aqD",
  "key34": "39Svbc8aTw1zBnNTa14xBqwYe1wpbDvpShGWDBdBkbc7eP2ZLUVQKQ8jMsMwpkMYMSKbWcQxAu47hBZUCCu5zwGd",
  "key35": "5W37skKTr5MbPDgwQmQB3TaMM3h7TQt8ghm585uF33QA3nnYuJePuLxaoYUxNLq5DQai6KRW9ztFV9QgFYyTCCo6",
  "key36": "4TrHJ7Ljvj9ugUBseaq9tDTujQFWxGBTudDgWRYf9zYAbbDfAoPtEaRik6ZGwT6kfuszu6u6X9K9Raws3dDv7J7j"
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
