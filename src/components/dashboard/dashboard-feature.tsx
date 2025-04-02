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
    "4J6U1AnXEveFQMjFEEPBCEwATpFE821XCy8PwKmNdQieHXcTXtxQMoB1KdW6LMJwMg41c4buHRWbdojbBhsabQ55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21AR7NpZsLLYScHQLPCojvej5ahdPWToCjHQk6kWH87BCEVM9rsbcRcjnFsTmhpCboAm2UtgVCPbALTEggzKp5rH",
  "key1": "3XFYtaSTrvaqktfoyLUZ6mAcKeWJxNrveJzn4SHHiqvx695xaKo4ZkuZeSvuARnPnBNEZ6cft8hyTMR5W4fy5Yc2",
  "key2": "2Aku8VzxdMsrMbEucREvBvCr7D7S9pLkWUMFVWUTk2JzTVpDigtYbm9WArFGbk6NgJqg28t5TdF3p1zxApfp8JN7",
  "key3": "5nygNzDuC3fQ1TDY9pGyM55ascjuqCvDY9kyhsqqZk82sv4PvyDTHSrQJ9nsrkBkyuX95wnzmj9hSeqU72Ra4mZk",
  "key4": "jtyuXNATtiWDaueKhcaSq2FCYY2LFKNRSbf9v4ekh9wPcnQyAgrmJN6CehdryVmoBCjX4tutt66rHEBDwe5zyKy",
  "key5": "4PMmkeXUKQarWTdtPvMWLg4FdYLcRsmB6VzeJRXuSQgTg573366MQ3pTGL2awS96XDUavQhLypJGFgvhF3VXc2fg",
  "key6": "3sPvyLfgqGLnzbocJ1TrrrFmqafiVSkoiLCbYW7EWLcqbQuDR12SVHyCKYiXoxUenY14gTSmf9FhCc9dzWk8SeaE",
  "key7": "4yKE2NSnEKaDK5vCArq6ibtac173E7C1qB3JmDxZcQBKZxQHTkpTt2bDXeLCPBtC13CDrhpux6qBocTbyDFwBpTM",
  "key8": "SF6f9x19qHYrmGBqpAgkpYupvgnuRTdU5ziuquNjq2tU2xD4SVXNxtdxPuyRFz5SQgf5wpjpmJ9ieuxo2XFjCbV",
  "key9": "3eiu5kavYV5zzaffXDFBu7EfsWDsUP58EXWSzobq1Ft6dgncXjpjXwWEUEDzXS2zSGkEo417HfMd4YBhPurqvbgX",
  "key10": "4TeXwHUAj288phy1hirL8ePLvYQfmmMBiYs4Phaq5QTrUHsiCyJ5CUxYktmDipWSBwNefTTiNWtt1ecwRedDQwhZ",
  "key11": "2UDrnsDepbz76XY9uniHE1fkLfbDJMxiQqSxNrWRqwXwHdDDu7fVYpT3PSw14yEioatAQSLPLECAyt7DLFJDPn51",
  "key12": "4GX71Aroqua8UeS117oX6y66F2WJoAhBYrFEum59HEP2n2BcJ7zRwKoseWfTiJYiJfMZ6wwM6BSfeoCPP6Jg99Sm",
  "key13": "4JK8uaXM4RXQiCceFqPTRNM6LDSZDBXNQcUDQ7uSh549zQzGg9pY36sxa9MMaVX6tANM2XkUzcpqzoK3Hxe24TK5",
  "key14": "2tgHRBUxqVPEHpvGvt9cp7nF48tXx4cdjKT3fshMfLEvZBeiLDQq4My2j1DfkEBmHrJUc5BfgQu17Xe2uvX2yPwX",
  "key15": "2evZ8cNb7ceACW7SSut4zE4WBbtXNFbfkY1pGUgZ47JDTbopsYHL1fmkNhk3k6DFbofJWNCqqZ9YJdDFnpLdK1ZM",
  "key16": "5GNn1oT5DJCGbJuZBt7reS8vh8AAaoZhDZsxPM9S5EKRPTNvAaZfgTeTQWnnxHWTGe6YaACe7AD32EGQuoXdQPdy",
  "key17": "5dt4iMrxY2t45ofQ5HfJL34mugkJGDrhNkitpixMisS2kYV2FL69iDALJLqWGjuvcUDxdThGVincPK241gax9Q3r",
  "key18": "3PchVhyKp4vMjkaMEaaonfKXkSJLMwuMp5VdjhTQ4fgYWotSTcEFMgNpXN5UfftWFbpuayyKGiuW1V8eBXP4XD4F",
  "key19": "26iekvdA1uv9EqFiP5gBP4bov6WrAdsWcaVmJjGoeuxXVyqXCyk8Ec2uyT5xJrGaMn1tcoYZqFaQKZG7CRjWLxZr",
  "key20": "4NfvmR9XdT21DCWwKoyEqzLWSETQWA98ucVxukXRjJhrpYWtDi7Yyj8iaAoRq3h4ecYi4xz9snn6wqVuVkPFDYsK",
  "key21": "j5tQv43mmeqQsQb8SUswp7V4WUiikDPZMiXbFBsyPHZGjjYk8NKWHRrEbCWCLpWTpaGxMpLyx7rjan2bpqb5rMv",
  "key22": "29zoRP9vQ72uAbJCh7GRS6tpZcFjxuz9ygWvKrgzrkMeyFBFKyiek8bJZvbxNg2ZKfLbHVwmoZvrJY2Ui5buXwbT",
  "key23": "5iCG6ZDCGyXq6suoFTQsEKgbjFre6psuKHf33m92ATe7i2Ne6iCkTELXCFvuA8cmowcgWYAF1DtbBQx4JNGTEbzo",
  "key24": "25szYQNgsm8ncXLDd3QUYhCyghTP5MQYtU2KorhyJ2KcmRDV6sJRpeGZzPq4fEoH7LJAG59ZDkPQbbbEdWyXEDzd",
  "key25": "4T3LPpkmAGaieryEUHCD2PYVVCu1y1MaYDcHhYRhEsbTeyV3tcYaFbK3hAdDJneGF66azeMmTSENhmoDApgVAgUB",
  "key26": "3RP4FUt6iQkNpPAGz9FamuJgbDrW3V4zcjao8t45uCj97kksk3UFYiKiftDn83DvS2Hua6WQ2JZoe28q2XErQJYp",
  "key27": "37DGqiREXsMaVXtJZjgE7vSQxNZwdnqpcpNGUiaWW4PLpyREVKHC1U13VgDGjDMxZeZxdWtFAUZKk7EC89AVak7N",
  "key28": "4Wa6Ax76oaHu38aMJ1n5FmsCAK1s2EWTUHAkAEg5ktjGh59Lb2S2wAGSx9muvwDRsci6ptrAGseb17X36NpfK7aL",
  "key29": "2qDwWaaE3FA3Q2J4HQ2cQz2fWiwgjSg1ZS2sPgerdusip4uqUrXob4SgfLCmYdkfXxj6Nkg1vjLikujwRGM9XGWa"
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
