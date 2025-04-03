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
    "66dXjWNiXoJEnzEAdp7vptUYzNULRpbhgaHRbWCgfdeZt9mEqdCeCSXNKhzMWhUrWsM8a2A3Vhx2zUDeKADVoC2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cZ427mTQidv2Gi8BxEoy8GZRc1ZWo3YXh1bfVJt3z3B2EtrqJ1Gm8YYzMQnzXrZQdka2SFf7F3Vs3v1KpJNe4mr",
  "key1": "2pW4BX8YNMZTcGZfrAxTyaHwh8qi4kP83Hxtccmv3Rk4v1P9fnoZVr2Be5ykNGWZqkmo1MSesqcQFiPYC113i81x",
  "key2": "5GgwmnSdMSDekiVrPYBCTsXy1JGrXHwCxZNcWaKmTq5jArtD2mPpCZKxgEQ1WP8CZPnrbx2UiPgTYbrYu8B8nstJ",
  "key3": "TATs2KFUi6XKRn6mAGRA5tsVwQLZBdohRwCt4mFKcPhuGpdhjrActgebh5EvJafugYa3qpKAFH9UfFCu4YxDwre",
  "key4": "4hBEepjoJCSLKqtbSJ361hY6PDf2gJDUVLWaz8rdQqQA1Dnt5Mcar2J8E6LdB9rpATywfxFBhqVkd2SQ59d8LEA2",
  "key5": "5nb3rBd3sPSGzMPKLYdw9Dv8jaU9QUEggYRMak8MYhd6BTDR1z3V4bv6y9euaMq9AHktxbCETEAJykqNV3fzBn7Q",
  "key6": "5DLesA6yeeU1FBsb9vjiutjqsm5PCg6W3jLbLqH9769eVmoawNafnibJx6pZHEr9YzEsESGaw5aHscky5dkyE3v",
  "key7": "2DEw8nuRJuePdrXg7cUyWggPViq3cyZfDdkJRoJewPKDFFDa2NjPSwBrcuHkTGTHKomKS3Do21WPbHPtN7J3kER",
  "key8": "4LpuuCy4Re9HyRnr9yBec6KaMxSk44rjKqZxaQJW4PELJEFDTMDCY6eXCmvT2DgMksQxrE2Y4JZvvshqf1ZoqYwH",
  "key9": "55hjchFycTHPoxfPkyFnuUh17iksPr2nDWFUUsUpWcPFmKWARmKFUgPHhtUCcbecbeEg5bh6ck3ML2Sz9R4oKymu",
  "key10": "5HL3vutEBbxPfyutYcCPg1w5mSVJEia5uUDddd96rNw6bcm6bQKyXkSaDPy2BENZ2SUHSMTtUsLkLxyVYcuNM76z",
  "key11": "2XmSYxXjkVhGY2G6r33KwrYP44Ti9j2xf7NirA4nHgTLs5N9WdLgyqjyHooisnxCB5nacnMnqT14rmbt2McGEdkW",
  "key12": "4G3Nni5BAS4XsC55HGz89ZnBLxPAY3N2fuTAWUgpyu23kpsWBtUtNdq1ZPydTeZVZQxfUTQ8H8y6pSk4dpwjMZ1J",
  "key13": "2kBiYP76CQYU2R3N1FX6HBzPxSuKq9XTMdAeygfsNrgJ98Hb25PPpAjARuEaQN3DMxNZonu69t9p7VHw1RdsAk2r",
  "key14": "3r2KcYg8otMX7gVYNTZtCw337onn582KQDYg6h5jjZdAmuco79YJGdw4ZP5JPSj7LtHDoB6cqh8CrVxRuNiQM1U8",
  "key15": "2XJNKsXa1N9Ah6Cu6oyrNChwQ5s2Lb363GTvzhMmuUSfe7vTUJcE2NmVUnbQULt4mzBRJduCc5a8r14DSieWkmPi",
  "key16": "4GipCq86jbdxmiciRc3qKkt7nPpyUYx9uduqUyx3GYMRfbDZdwkYNe9QqhswtEneT6zJirHEw16BQekmkPHGTRyA",
  "key17": "5GjuAjX98miNbJ9G1f6gPTYyGJ1BKVjinfHnUQgtPnPyojA1QUckQtaLrUFAmcqZ92qEtjoD3xMApMTtZ9SH1dnN",
  "key18": "3D19Ma24cs7GSHM1q7airNHuGnxrNgHwnbhptBvBW3Yz7RTwQtgaeh5f2Qxbd8D4UktjVTf57kdHnfJaPTNUnAjr",
  "key19": "2Zw2fgXP6yfAn2HHEemaAszhhHAV4ayKSD7ypfgn7XJKnHYvT4G2Bw6geV2mBFUfppYAQv4vaHeXPC1V8vysMvNz",
  "key20": "nmUPa1NgPiwaV2KRQPPtfMknQ4qZP8u14aVbof69wuRshbRj3jixJJwENbJjc1UAQ7whQuKF7g3CQ6jtwn9aJfZ",
  "key21": "4uji3RuNkw3zTAZhtzKBHsZJXxHqXxaGXZaaBmphQRkcwkD8KvxgohTJv6v1LCF8Lu14Xa7eJP78ffUPq2T4atZ1",
  "key22": "5NTFieiCZFXQNHrReN1nvYxQpcZWfRs6UFrbPyB95xXjhS84qKCRapddBRigej96vVS4EBnPL8Mtm2RFnreGj5DR",
  "key23": "suAvdsitRYj44NQFsatx4X35fXnHR4yDMiMZ1yAmfAHE2TNHsbas8778q4p7Rz76xrHactBV37KqFvvRmjjjUeC",
  "key24": "ohtLNtTGKRhf5YQ3qocAitsCEUVa1L1TjXtEE59Lwe2UMSa5q1MFDzeU2Kyb7xe52zvDcZ5agJNhxLUJqkDygLa",
  "key25": "4bWtBwwrjqWHEd41Goi7yojDKBvgsy4EEvxU6RMQDjtmXwWB2R7pPBFC3ffJ9D9g4ozKMvA7xLeeYRA8QSoaRmgS",
  "key26": "85cEyi3yPkR5jA1DoFC2baMhhzkRp1f2f4UPcuVW1k2gQM9LEnDV99hCwZZtnAjpKgAygUNvN6waJ2r7cGg3d1n",
  "key27": "3jLvn83SLtFtpySjdqnpG5YEvps1uEA7Ra5MogpUBvx6xwViXcHk9cj4B8UyqAdfEFdzn78fEDYTwNmQQuj1yrFA",
  "key28": "1WTGr6QyVKHgQDz13L89uske8GWBwyCCrpr96H7xuDy5N6bNhszPdMurywxvugC1UmLBgFLnwiriUajH3e9WcDN",
  "key29": "PZahtiJX2ZRcopsZEKu2uQbdHgWikMrdJDG1hMEk5UGeNZs2r4c6fw5ukXNhByDkiM43xEvNjfZQHXMjpEpKpwx",
  "key30": "6Mm5Nr8HP2Zn4toTxVjh4YTb2dT9MQCG3AadZiHT13c8KixGYgTasYdJERrDcojcoTvGPNfW4dPBzx7N1jDphiJ",
  "key31": "5Z95zcgSeSqcNMyWGUNHwLamuttxuxJvyWv2D5ZoRb5riYCLDCbp6xQxb2f6sEn4tuUMjNxj1kAG5xu1SczwN1FB",
  "key32": "3sTtnewBziPqtihiaFVaund3rRt5W4KkPPeimQPVsf5ptSd6yXQbUKoUNadHPGB9YxkFDurUhJbZqLfTwca9ogFX",
  "key33": "Pi43LBVh7KQV9wQhHiRFcq6Xvum7gMtCb3y1uJSstQGSckNduXzf2noHZb2ZkwykGsiQw3QkRDuJofSzjkLWkKZ"
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
