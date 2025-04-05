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
    "2ypEEjMxXJSy5WyL3MVwFDeyqcLMU57TG7SJRW4s3TVqj8cLkSWe8dyxiMAwfChkrZAVgxtQ2qmVRSSc1wXZ6h6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pc1hMyGke4GkdisrQXuXrzHuB94tH9LtxrMnB1Em1UzhDBG6EhsmqpGus73CLuBKH2f263EsrLEnNMSABcn99UH",
  "key1": "3exJGPjyqG21sL3rEo9KSnDar9MZZ5TDspTjRy3nhEqXArvC6UMK3Sp9jrVDY82CNmNqgCxM5EJZSf9aUz7RNkzZ",
  "key2": "3qoSEfZJ3UEnLLVW9LrPf135Ftmbmq3maw9UNRJVsQZPHe5SS4uafUBgmwj9LLGRdRgHf4mannzYY5AyX3jbfac5",
  "key3": "PBi5EjE3fXCMmWoaWd9jhWw2VgaogKPuZYfY9dfcg3k48jUxtKPXZs54mCcPBqxiiCdfGjZMaNNNYRdR94eWogD",
  "key4": "3pmsCv9vfTVVgouJic2dDbyjLHAcDp5V7RumAGvYnGFw5rE3C4RM7pnSuPVfZwvDY6vhjSxEyYf3f1zpkRPXDs7Y",
  "key5": "51hdYsARQG1gexwAr2UTtRF3juRnzvHjL9J8BDKW7ABpFZsbrvxvd4Snd5jXvwowHhnWUSZapxdvuk2SCE4Zhy3H",
  "key6": "47WDLx8qSN2rzqn1E4WJyEXdS6HATVzhAy8vbSWZZSo9Ck3BgrSQw26ZMgzMtphHyFsCkKiofRMCpioVYZr23Hkf",
  "key7": "28FigJ3T5r7bYEyJfR2VCGKTQPz2wPQj9yRSHMipmUMTZhW1P8WsfJu2sE3uzkZ3TsE7cem9gkn1Pirvx8cFFwHm",
  "key8": "3Kkw2hxfaAbPiuTjeQW21ZmRzLb2MCBTUkTCKJ4EZtQm4mTiHBgvVJB9x5FEki9ykKon8Kkx6hYNTBHTS1yTGo1r",
  "key9": "5zvJ49TRHiMtSauxK3bVWQiQvqdZVx7cvyiM3Vhmv15LTVGBhjfVTBd5S9gFknayUs1XWkh9Y3An5pmoy2cd3jsT",
  "key10": "62LMg3So3EYjdT2Trm5oMt3qnSFWobm8bSXYKQpwoMqF5XYvrRjVEstBSRpwMDcvDAsALAg6Tni9FsnQJ8fqVEvE",
  "key11": "ajueBMLbJfGTmvqvZqbwDsVfYcg4ZQnn3fwsZUsQfwsCUyBzr1bWdcZjP4sujtj9Z6WuEt1LHM6dQE9KNF8kHfP",
  "key12": "2Y46v9CNMZoCjZ21x2RckK4vD4bSFBVHhqQtMfEkvWR4xAAYdTc95rZp8UBBrB8ZLD8BGzxMzHFhWMx5YBbcM8PD",
  "key13": "5uQhJwwUCW3YEXRvoyaXc3uHLoQy4dFacTAtAWFW3JVf5z4vBVQTdFeZsLHWQ4gquTswV5BLYaPkweZ2ztPPcAZY",
  "key14": "4UBScUoYShngC25GSdJBMcYuLEPmedyKJ4XaWmkB3RwxzQpLR3sdvMkhwcFyqds1B6YgWLJ3x4VG4hSBZ7AFgHYN",
  "key15": "4qCCEJesPXbpDtwdv7N4pgZ2jaYriNV6Giqrg6zAXzTSViViS3bKSCaSMr1JKGqywra87V7njFvxAPhi3PNZTnYb",
  "key16": "2nEVEcN9C786sQQxzKoeubBaCS5yHCGxL38otXaSneryBRHcdBS8YDw5JT4zpFkAr5NKmbF1PA4MayvPD31isn9w",
  "key17": "2hZj8KN3YbB5KfHUX3aCnTUox2BdSNmW9mdo7DXUCCvwyZrPznMX72FwcbgtJaB48Kg3UjVUrxxsVZjftzRWCrib",
  "key18": "46fcgrZwLi4yzeZLCc6rNEzH5rzqRKnQs8ECF9NAL17x3ALbfqWukgHgKvDXoTeqnyBXj2JXR1ne7sMfvcRgMua5",
  "key19": "1oii5BaGKRMChHVpeih9L6AL2dChv692CZNFH3EPEzELR6bEjt6wTnz2GaMCP2R4VpoETKx4WPkHhZ49b6gBprT",
  "key20": "58rxzA8EW43fbRSoaecVs44dfDHVDgDXocJKEQ1i8CcLmEPXCnjaJUb7FQ23jvRkfe99swJabrXv9KeaXQGwm4eh",
  "key21": "22zxkwwjYzmjUx8CNFvnE6k6nq1e2kSZfzXF1FULv6rnYcPbN7iYRixADqSdT1iCwTyqNBPUypdvwLQc7hSeci3P",
  "key22": "5TDCH41nXGMnmiRtQEC4wsJfNqct2Mr5a4fGxVHUby1kvRU5HdGZcLnWpbd853urBn3CmMJHwGvP34M3fXDMBr5Q",
  "key23": "4GrX9e96uKEVbfQUp4hxs6cYMYs9iVXwqMuwkHvdpWMiZvqjbtmQhffFnNg4ycDiTNq2pwM6f7Fr77JD76vwnYZp",
  "key24": "4eYoWhbCMTZPDRrY51ZF5YqW6ReEC3xEz4Bqbxwp8uXtAgL3zqrgFMnzhVbYXSi3Nff3hEh9g3YZKEjfmmoV9GeA",
  "key25": "TRxnnBCtNuTzbexPa9unKLiWPutbz9BaCeHyW4Xhb6KkTXMwix8ezzDpMcsXL8DosARvzEDzW2gbs1Es7HHUXUj",
  "key26": "4xyo19ifEDVEmqWnxMKdcgeVorSZ7tXPaLLkaruNxn8E4baC6hrKBRMr16UDsFciZfvKuA3YW62YVdMmHXgHNxmE",
  "key27": "2s6dgUXbt21xoS2Y25t7RcwwrvewociPcut9jaW2p9YgJVyuYwSzTNjVDoTTjrs7QDo8859gcfnZqjD6ooHCJKAm"
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
