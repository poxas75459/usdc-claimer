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
    "5HFyUbKMuwvpVq4cn7MoxDbz97TULgd3vHnYmFjyUC5rAHnXnBdtBiTHR1YEXcjBHzLDdd9VGLAZKvyrE9VvWuid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aKHzBzYXQPz8tTpw7c2mnQjrs368JLGTskMpc48HGttgynns5f6rP2HevUa8rmH5botCjB69NKcqZxie6HgmSzb",
  "key1": "3KbNx8yz9EADY5ZMrtq3jTyQpiCirbmayDCmMjJ7LPmsRdNfGtEwXAjKF2LdGSfnc9axHd8kxL9q8cyMsXc4dLEz",
  "key2": "3s2vJJd333wkQoZe8zwyqTe9WqSLxiiB58a3zyEuoEzqDsYqhUBJd46HsCtY6vVwx6ux75XoXp585nJ8bFvpX9qx",
  "key3": "43pK9tqiHeUafHdSJSAzH31Ge64bDNVEdapm4AhbAhJVtwaFoHDBgVvrEFscqKNEXf48ynukcC362jTKYqRxSCrT",
  "key4": "5of4irsZ1BoNcpZRFMoVfj6vzqrLBUnUHSQds5ZW5y7gTNQvYVekeKfr3sM3aJMQJ9RGZsUn3zJB9uNN7P5yx8PB",
  "key5": "2DN4ayAKesfWDSF1w1npguySEo8EDmZJoFnTTkiVGw7Hf7uGZPqN9LqhW8YzQzhdWqF1Xcn1YfMF51q1UPnzHQtL",
  "key6": "355udoZkM6Ks3FcGvK7YY32DW3AXQV7BBNKdL4CqLQVQ3ykWJeYmsLYAUU4aPfnGLAFWdonPRXuxJg5zuwxDbSGX",
  "key7": "3M6vLJL2oFxf4E41uRKrs2fkq9makrzwXm9ctvA1VKaWtM4kSUhGS3RZhYLSERNCLZivDCkD5rtN2RRdWnnygDmD",
  "key8": "3BEprGEEWFEyu5uUXZ2Vt4EtvNiybc2VFNP4UMKW94vnkArVQoebmSNzhFjZmyNeq62PNiDrrHiEVLoLu2k1n35T",
  "key9": "673YbUp3Bz9YVNJWuam9yxvhsEqgUGN7d6txw8BPgANRSuZcYDVxsguGUhtRWQM8jy5vh6wXLrvTTRBfnSHuE9ys",
  "key10": "5FBWCz3F68UXA6CtueQxvboh27pwhmuBscc1g47aZzb2RyAaHZknQpmC118vZg5u5Gw4cHakSb2zpH6mq4NTd4vk",
  "key11": "3q6qA8JAwAUuWMShnG2nbErBFk3D83xPjYXDGc7h2TWHxZPnZMKe56UAy3HFekdmxhYVcDV9aoJ1gHMMfan1WptQ",
  "key12": "3nsPXn1o8H2yjDMDByxDX3E3SCvf9vjCbkpPHmDZ3VqWFDZ9tNHWPNr56TBKCeBrsoCMyicyQ7w6xzREp42TiXVU",
  "key13": "3hTZYcfz6SQWiDdEn3KTEw4eX8eQuk5QNBN58V37DjCoUwwsrjP9gY59UtDsYpgehdymfKWPxvAsmaBHwkqyyxUt",
  "key14": "5yXrExLdAmd5sLcfUcvjmeEkFXQsZtt157oDbjZ4bknuy8X6jKP8ehAno1vGWzv8RPdPAsd6ztMNUY3GM3LpS1BE",
  "key15": "2UDsEUxNen2rN57n3EnwsLcZyRnBepDF6MGNzNMkAF3U4W34QydMXqCuia7itNBUh45JbacgzuwLeqXbk2UmGNUS",
  "key16": "3VebTpjRgEaHJyxj19eBQADMm7yDttnpUMW5q2AywwVFLyDQYXTC9tcp3Gz4TU1t6fh1VKJyJXyWQxcJzVqfEqnv",
  "key17": "45UyAmb3hgoHW7twPGVfUQvhtTAcHQof44ouef5MfsGdGbnsfTNAc8KnDZZoisRLnBmWdtwbWgF3E68eKtENhrH",
  "key18": "4NFyNAkpvGqqNCBoq8PkqPcZRDFf9oaWE3qkXBZ9V8eP5sq7BUvPLRwyaGXReKGx33demji3ei7HYbewSSDPUC8M",
  "key19": "vQNLGhitoRHd9awTx7EbqpKEe9c7mzjZk6xDtmKQEBir8T8wPSRqNauhQDATBt9FwYD3m9yJzS9AGrWy3kiYiWh",
  "key20": "4s2jqHFRuwZUtUNSAYvTqS8D96FYzgELxVHe73eYWR56KkJ6G7ucDR5NqYpE9G9V3p1cWTNSzrKw8H1nV6DZJP2e",
  "key21": "49k9Q3VzNuK1VZrTA6GkN6QsgmXpF2WdrWph4s2ncenyQqTCgJZSMQFgnLC3SEorFnckFQ6aMYCf6Zf44ADTD51v",
  "key22": "2VEESUP9ucdj7LQJ8fabU9jENdReigHqmUP281J5MRNFx1fHoDJNwggS8ysRVEm31JW4mazjd2MTDHsZbgGwEu8h",
  "key23": "2V3FFY41d65aDNBcy8tZGYkSMmiR7g3e2GVN4tyqmq1bV86zerKjDNYihipiQvjR51vCJjmChMvURg2LgZNGQ1TK",
  "key24": "2cUSanCtfQo8GfmK39GZPKFyDjGpYjWLVHYJ972y7FKcbpfUoGHmQMCkb99y8uKSi9wC6AE4sbQdBnGpr1RwKqNt",
  "key25": "4hCwAbsdM9k4jfqaTUAXsVfXfcRTYCztjaam7X6d8HBhmYZay33HfMGXVyD92h6WEjKrSoZGfjwzDi4NDwENeuzr",
  "key26": "4Sr5Z6EdiBG9x8Jx44ExhF1PTP8YTSJQ8xQE65QwhgMGFvo4gMLUs7viV1mRsUcHAhodRB5fybMrSDHpcToa5EdY",
  "key27": "ZvpeQqHqA2eH7XSLRSb1T66A7hKvaGBGDZxFRZ9fdohaJk74pcqa9QbfchfZxy7BXctqfUwZGYGkgX7EjAPTT3t",
  "key28": "4aWFXeZKvGNE8kehNdRLqSm4Ng3y4fCMPGPmG31G3ztfUzLPwjBrf8AFfChTtuNZe2EtepUbpgCh1mw9SaqYGeJq",
  "key29": "WrwgnrvLXqf1PZ1xi23a6u5HbNkmX5NNPFmCDcnrrHBDbA23iqECQVR3hFJcuV7DXK8bFcX3EggxmBgRjudZFtF"
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
