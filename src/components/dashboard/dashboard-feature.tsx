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
    "5AN33oGL6KNWmhhTak7Mcj3URoWCWeBRc9jAo7Hzf4eCuocC78P93JhLEt9bTrRM1EViYxqFbvyFfhsJbWCcF5tG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57P8dbxMUaXR5MxskfQpjVtWXQFtLrWbmwVcSpCPBjYVde15DHTqKJmuiKn5L3pJVBV7B1qEsaDkHN4VZQ8YUpbf",
  "key1": "3FSzJcNE96EB7VgtDgBiYijPJteazfuMcKnFFy688iCXFUMS9HekHK4xHnpGfcxgQNVy12w6FDtv2BynoS6FbRkQ",
  "key2": "2kdosYDMA413ihpsAj7aNXqFXCpnP1e17DR92fSVKfQjE9Ht83Wk9XbKdLKgQiRmmxNxdaw8jb2Tt79i5cwxubaZ",
  "key3": "5RbVWBWR1aSg11sQerrbLMJBNk9XWPZseAwEHswsrzgE7DtzTA5QTHxTijvTyrxyy3Pw6HcpWgSmnosrqcuK4Q3m",
  "key4": "2JXW72MC4jmJBSHuQaALnkGCrnfuabzohsJAmP2JkmWZc3MfuxYs5kRN29TNvW5joB5kmV9fe7ik7YUNyYvhTDS6",
  "key5": "2x9cZGWTiJ9uVEWViskeBrT6mdWdLSkrUddBxNbANjHyCWjxt2SVrzfq8nY4JzgXR7BUbF1jS6WJuthyt4tC494A",
  "key6": "653mQ7jsho35hX9FUpLa4gckRTuidQGbsmQ3P1HTeH86qSwhNKjP5B5ePG6zYSJ4QnLYx5Zmkfcqp5EEEd7riTn7",
  "key7": "3mdxSE4N3C8m4XGT7AwEpEc7GXQy3HCyPmEYQTmDQgRyFVpFhMywj3bDkecjLbEALY19rvuHyjFCbrujQQBq17ov",
  "key8": "2W8w4niUhPZyvUjYFEzwNTBAH6aLcVdigJJamciNpRmYxkRwUrYuhRWbLNHtifcxHJgzcefs2afLRuDcCS5CGjhp",
  "key9": "55TgLdn7cqQC4HRN6im6oyUQWLY6uwWBYmzy5aBmgAR22fe1MgKvWN1thCuSFyG2w7zMkSAz5D8Y9ELBumkvREMt",
  "key10": "3E3iDi5gSaNunM3peRmu61dTKnWtY3HgCpzeJtof1GKnocHwNcbXdVGH6Sj2JJZM9e778Csox28op8PfiZfyDa52",
  "key11": "2JoqWf5HfaNkRLqtcAkkMvVUbLSe6cYMVQTDHcjEDaJh9JmgsAaSbSZW3ixBGhqvHuUbVnNCkPtJ7jczh8Mv3JQ8",
  "key12": "3TFEFktDjH9MPjfBELdWJJyTrWEaG5LXGTHcJtWEfGVFHiBqu7zs1pRfVufUQ886C22DTvCQMTmMGz8YybXrJB99",
  "key13": "5Pz8zSTJN1c4Z5Y8sE3hwTE8NNReUQXRsx88925qEGe5DWpcMfGVAbJaq8UdANuEVFFdfR6mxP1DdHrjuzgYVvF1",
  "key14": "5pNDVhaRsqCL5SzuMWX19EYwp4u81pqz31XQAHV3VgDpT56fSASRuemheyxHWNxwNSN9NyQ5uE84Kj5obGZk7us2",
  "key15": "W65xDwd3vXKo1DiV4GpL2fzejsRiuXfYfZNh8oru2WtBhUCzuxNb8BL4YWRnHihkLi9KBYgCxYW8w5UUnuYTN2L",
  "key16": "2j5QMAfpLPtoaz73C4njMGT3hFKXewHBKTLwrgteu13fdihHcgK2zdPhnGSu2gRG8NwuEDrkjE9vCbq1uphTyiqe",
  "key17": "3SwUpe5fsqow2brJdZmTZ2W1gvKGyqGtKe6uj5snyBVtyEiSybkzCyQcnQFSsk34GstXnZi9RGLDDuTeA8eAjUUK",
  "key18": "2iHyYjGUoPTqveUZfivfHDkjyesGwYAX5JhmT4bn1oZTRSPUsaSGdohabG9jLR24NiU5JQ44rta1tvU6ehacHsZi",
  "key19": "NoHPKuQbHemshMTLK71QifFUTJADHqyCusxSWhCCppwYVSD9tDeDjxNZYh78bVCbycR1kmCqe8a3NBFcdupzc7q",
  "key20": "5D8ZPH7c4n9gt4gbmFLLYzgoYvkDGvo8sWiTYkQuKGhncZEgoEHpQCVnTFvYqbRGKmbNxYJvcEup4rPzGmumNWXn",
  "key21": "3iAbKs212QCQXXRk8T2b9QPEoDzmh3ULTYUk2Vbyzcz1jpJQVaoxPQZdrZ3WJR5u5m9wFAz8GAwSjCRbwDBFMnay",
  "key22": "28Yr35DkeYhRPNcAxd1q94cohYCGhfHyUNB3YDyrXduqK3QHKnCfTEg7SSfoo1sqWuyc35eaiXeraryffTuyTV1S",
  "key23": "59MAvRiC2AJDCVdwbncS45JPaDvvKUHL7NUpfpJk9NCmLjPtvn9UMvXJhQBikX8xyYWCwP9j6xvuhKjqHdUEDQsU",
  "key24": "5CW21Ub5oAGpgcyXVDos2Ze9fbYqCqFBbekQNgqvCc8UkNH9Jtkfckh3cmuMmTkCf8W2cWbvcEW6rEktoqaUs9qy",
  "key25": "5LsDQUjXzxpK5jAPn6zeLUawYUF62j6PyM49gUnhfmVLbE3jmnGjqsuQGSmuZeGHQz9hBiarGp3ghuScjU7KRbnh",
  "key26": "65jUXtCjnymifKHNPUpbYmFxUewTUsDDzM4Hqzym3mzWQPxmeSX5x3aR94Te3TwwmyHW358CH8vyGWzeCdrdTHrV",
  "key27": "2tb3EiR3KobTNEWMTsMRDZVsxHi7CorETGpd2KGM3WXqaU7MWZVgCeec5MQpq6c8hM4EvX4yKjUAGy3tE25ocRpz",
  "key28": "53PhDtrH83vYiYSSBW8p4aLnrJUFMRzjHGmMiUvNtu7jeYVwTLF28r3zEucQ23Mkxxo3So2Vb7G1fgD2VNZs2FgQ",
  "key29": "uFYDTWPQNY7nxFx436bmXxsWmjbGNVmimLUNdibaR1xTUbGFTz4q98nyDzPsobvTFDp4BovYYjrsahEEKed8sEV",
  "key30": "4vhy7PD2EVpCAN9hyKfLhF9JLr9GiC4ALekD4TaZiTfPXZ2fMXN3GiTQP2FhWjDQRYsGARataDubQgDMPB3iC3GA",
  "key31": "4VNLcWRp8sWtvSo7jFBJY97o6N8iDE3c6k2Z8AyTPLzLPXRc7H98VYArmcjrumjXCWfq5kY4uaT85LkdVTiXmJfc",
  "key32": "2UBuNRShGwcMB9hxnkvxEcdViWQLTXnm2PTPr2HrcLUTt68XSNWhnjT4V2u4Yzqrk3WFZU6MPTNNqebT2uNbNXDX",
  "key33": "5FgdRnF2hD5Qw7rGinTR6rrGYKkU8jaTN3mCYsWeoxh6oWdaPVArDgb66MbRLd3ZjW7Xdrs89eEotJKv6nwn4ZTe",
  "key34": "3qNGRrrwKyUDipmq6xEHQerZU2Q13mwRbVrinqz7V5xKoVM6LqMUVZfCVWS3npR73yYSEre6H9v8hGnAiqifWmqv"
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
