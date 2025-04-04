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
    "cDQPfiPMm38bDRkvfvMb7w6Ts3meAtMKv3Te8C5KmTcgXSb8fspjZhjhDscasPbuY9YrkEi7o3ozVXpvcVndVB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JE9sw24MzJyHALj6cjmCt9nzCQi7ib4WYK51daBnUC7iWy5VEJPhjNao8cV7LGkhebQVzM4NPEE1vnTjdBDjUq8",
  "key1": "2k1NwFUoVz9EgD5fvjJYrY1Kx2dbufCHb33n7AkgKJt7Lw85bqt5a2Xgmiy9duavgFgWmJiDCT6eoK3rWx7MVaFJ",
  "key2": "2JZrwgAZtViohrUMQpVA3BrXNaGxSSurs1DfY2pzHq1bR3grBKY2mokCmtAca1FFgzftcCyWrbUDRZJ72FHLbyv2",
  "key3": "5kHrypsyaQKaQ9S4YspkLn6aiAnKX4bMxYXueWpB7GoY1BNxdgHfZPnmQDWeaznwHjFE3KiZvnJqgk7wwv5v4GUh",
  "key4": "4GP5dFD5Jjhhrbx52MiK9LQ7UvCkEZ5K195SbTLct22bogL3qeaoeDy36p1oTFh1ogPZQK3bqLRsza7mZDafFr7n",
  "key5": "3zX1QMLNL1hWXVp3eCmH9eunW4oR2YMKNMKhLUUusbY415zpQEttC3t3x4dYvQCF8KVPy49ZLmcNpJ648KCnSqRi",
  "key6": "65jJSiXjstNej2QqQv6fKUXyJmsprgp6NcYRNrGBDsMQYhBQLoxcYQPkRNeWgD7HfEx1uwS1QZeV9wD6ZfsRu2an",
  "key7": "zUsd5pWTxRdB6jLMXAmf1gW6hafWF2CJQ5NATJcBE61cKwdWNfLJ5qbkXjF7PJmsUem1WKYRoqEXAv3xdu8Qas4",
  "key8": "3rZttD76qjwnmfMUJdWbBgu2M7b8pQsZ4XGnQhVVKLPVTrQfftrMjjyuVJZSckMV2VnCrTVA6GSoQCdzMzD9RZVL",
  "key9": "3VM9UaXXbPbZxgG1uVucpyDMwAtwi4a3jGfAxqFrqMb3RbSrrsjbYFbJ63Vz1p5LgdvvAPDwKxhgquMJnpwMa1dJ",
  "key10": "oQ7dSsYcpQkWtGhPEecK43apyAxhqPDFeSy5RBDxRTVEuJdMtwBVWhKLsC8gomvSsY6q63x3fRsvTbh7uCt5NTb",
  "key11": "2B5y3gZG3F99NtCUam1gRmwwTbEEkoQbVtgdqDgg2F2D5Pkx2RCLvWK1C3Nnn4X1wgyUKViUfFDSG29TdBtswjh1",
  "key12": "665JMtCue5uptZo5jUkvonf3We4GAE3tkvNpZNmLcN2mPwySxW9bsvHiFA1M5W3BPDd35hqaXQpAbqtbCFxcYoqg",
  "key13": "5iWbREEPXpsKLqoSayEA3gVDcX315ZHWFkVMpd38jiSc2g4FKVcxaJJ2Mc9xftXpL3vwZ681L4EQFa5bVr2pyq6n",
  "key14": "52cadjqqq3z7SDXQxpLBzB3QFP82TZVeUnWmsoSrP5Sj4tXGycuiPyQuLjEh7Ua2cn5LmsAi9PeCk8PbQHae6m9h",
  "key15": "5c6RgEDQZavcbXq1UJE2pb6KbQYtp5Z9ukCQiTdWuEDog6Mu155cNxYb5FVZgKgLoJX7wfNrzvaE1YxSymtzsnFt",
  "key16": "24GDkGZisRwiu3RJLRnZiMFQiJC2cJJD8JxhfG4vh16tpF5y5mpyTf7BC5toXedG5cpAaHnSZy5RNMvi1zMUANTe",
  "key17": "66jDV4tGK4BHawDbfHLMzm8Qat4TRDVwhjK1Cxq7oTz1HqBPiVzmgoTJyNu88c8bHWtWWSRxXzzeAqxh9RUWgfqW",
  "key18": "5FH52Vee9ebFRZ163rYhgTbVhSLBuLGXFXYt1AMbnx1NfewtY2Uft7p7fzwuax4TkEUjXJFtvE3hxk7hMpWAqe1q",
  "key19": "5596nbw4aEqWDSy4XmQiRhxRxg8d2Z39WWecyfo4MSKrj8X15KU5Jk2NScDiwSMUp7TpeSd4dRDPQZhb7QBaWJpK",
  "key20": "Fu2fctnWqQU4rze7X9LJVKsdb1T6wztND1em1tqxER2X2dUSCzQufDh4gpntFxJtHzwWHsqutBpNMnYeVFCDErT",
  "key21": "64EogFrd1wgpgs8YY3d6B5s9h6MFkzev61ysNNMmS6fb8hoGUpkdhQ3qd2er5kYmzdBcEgCtVLWdzkd82upo5bKq",
  "key22": "5Esd9CP4RbNfA5tASDBm4pckz1aD9wNLU4HyaruhJvhbF7VL9TfuSedxZS9N8owi8pYyE2bwgpQNoyazo8NPZxw8",
  "key23": "5QoHivPCA1nxppARBRuNJUSP1tAkHe54r4LN8PU7qrfY1ek9yvKT8GuHrZWbdpdxajYGeLZz9k3HqQmkCnK6Pb7c",
  "key24": "yQ81jdJbsFTvpadX6rWzgdCtyzgFTRPSF9oiL9drnBZbyc7bJe3UVepjEnLcpKBYa1jjCFgq1bHP7aXSpuSvXJ2",
  "key25": "4nQmEEp4Aj8Lq6VC1C1LDdW4H5etiiW64B1iH1WE4dGbPtF5gofkbJQm7tomX5XMbdKd1tSYYNv3pxSQDSF4mvsB",
  "key26": "62mGVFT3Cg6fgAiBVgZ7G5EtqDHuJZjHKNY6y9sDzmBcJfqjpVwXwp2ZTnoPfzucaxMU9d7xi59w1X4i1zroKCr8",
  "key27": "2Xn1BDRtRQPjoJJjzeC8DtTgg89vgJXk8Sfjgpr3ohUbSSpwYWWSruWrQnbk9X91CCG7gM6QyuLJzdk4cMLFJRfs",
  "key28": "3PUuyv6a5Fz8JdGG3hTnD9SztCwYqMDWkaZJvyEBLqq46WsExRssogadPse7857TuuHUY5wy7gdjCi8er2cF8SHN",
  "key29": "3gLG3ZJSJE3rmEm7eFvbnCatdtouCNcJ1p8JYCXbsMFQKVagdDazxC5MQk1VisimEp37Qf7oyzF7XhuYJubxHzKA",
  "key30": "34FrbfLSEjXuMSAQi9crnneB5rr5VF5J1W3pz9dDJo7xyvN9qnnuaiByRttvCsKn2T3u26WB5nfqMRCpxnjrnHaD",
  "key31": "3w9NN5eC22PeSYov7e4KnVRpG8Whm13aj1DSV9Q5WQPfvUV8agB6btcH3LD5K6MqAecmjLGX5s1qonVwRTSxQEGS",
  "key32": "4KqENu4EDfoiqYa4NByA2hEzRgCnuCWQVJnbsAik11NkRqx3Q6xU3gHUbhk52fL7za6EGP5RnKM8V8MzaXfuR6rK",
  "key33": "23BtVE1LcxwHoJ6cXiLvY9HFBcNfkf28Ppb1yVM1duyBvnaonjY9Fr7TTZKrh8w6gDJzGLcWJ9ouFymPeduXii4Z"
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
