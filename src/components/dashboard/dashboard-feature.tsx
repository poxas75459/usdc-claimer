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
    "xoaySptC4UxbamwQSiJJgs6cHc9J5KR76ermruELV5HuH3TR43sfYKWSrY6gVjwJDSvGQYySMnUg2XXYVAWXkF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dE3b1me3ZfHaLM8hfs9LKQ6BA5HtxwGhuy5hevC4nGpyc1PYP7dqhsGoH43Lb7pN1RiDDiiFQxi2CxWZfAkc6ak",
  "key1": "5AwgmsT7dLgFBBdkA3pTdrydUkALNtPFK4ZMPantPUi282G81bazAWBdTtoJFCKeHKdEeujzQZfekNmcp5b3uiZk",
  "key2": "5d8RGZn84w4f2gLRaTFYo5KynTp4WcXPw8rzcPfFkBgfdRkxXB33mwjrdLviaY659tvCBPPorgAB85UvE3MB72cD",
  "key3": "5hZNFuGUZePkVhRhJWpwXooVixWXq754zxGmD1rRSB8CzGXKhZ3nEqNtcrCWFrCXocMoeC5fRtEqd19V7jCcVnYU",
  "key4": "2nL5MoQK8RVsqrP61iZqMhwRv6x2vEF2MPKRez9aZcM5gtvAtRYeAxFqQuykLcJgLpnJxPgBL9tw3GpWh1r6GUf2",
  "key5": "ABgTn6cgtb2DkgGMr8oM5rkhqJixpLxfunPtK54xKx5MuagHxcZVttPLgqQkEq9TWKL1BiJkJ1jMBDuKsc2xKHF",
  "key6": "4h3h18JrtFfpo3WvSBHoAFBQ62rxmCPmi478c3rHVNJGexcP7qJ3Szs8JytcJfbFhQ1ZZE9dejeWGWZfTE2xp3BT",
  "key7": "5XjUr4fuxGiesBaAG2jbuuXr6UouGwwAcK9orhjiMqMNBsfSRRzNLqpA4945Zi4RBLqqhUjdRAdYfoTYCE2amRNY",
  "key8": "4EU6fnZFSfzDotYev48gnCtFgdMTJRqnwimz9YviNsQTAjV4L1SmiQAiVoz1g2qccxbsZFtzZSND5fTkCe3THnJf",
  "key9": "2HRKtiUHYvqM1uMtWEmVtaijfZ483ca7R94kfMJXXfmYmaPieqY3FCFtrS9sN91zfAm889dKtxAH3eiKh5HJf5ni",
  "key10": "4qGMA5K8HL4y3WHg2Jou46FzvbjC2KkGnkBncTZivBPmY9xzP8xfFLXtqXfopyqVrxVy7FEvPkh2VsUF44dbK22v",
  "key11": "5kSRib5nf7tttvXbaP92EhjRykeiYNks6YVZJd8KRg8Um8WQZZaP97RLqpnm4XsJtLiiCCQn6zw4Asx1QYrc83Fp",
  "key12": "CMgydX2KRM5ntmuALyC2MTsMn3oVcfws1yjanibKL7dGtqsBsq7J61rqY74gRNhEaEBGKeSB7x5oGkynsuFpU7v",
  "key13": "2xJC1edAu49pTzF1264es5oKeKBMrmUpxRAQoVMJksCLGANFeDApGLB8c36Wd2XRogmcpNoHUbsKF9jt58SQ3eJW",
  "key14": "3zdAhHQ1Dorq4BiH1WRPFL7ntSA8ysukjK2uwEN5MLXuWQjY7ZT1sHHt25UE329B5f5RPRuNyncxKeK64ZCnSobT",
  "key15": "36gtuy54nGJUSyRd38VkAs78A1fEseScQuURZvhPVaHc4Kyn9mgVtUiyLDVKbRzKWMn9qRyg2EcPFzqZr8PLT7N3",
  "key16": "4qhTUtg7NvPV3Ujhq9vNJZ1k5yhfaZELzpzQXznjokYsZjPVViCg54KbXxzCafDmpQc3C5MNLDtXvKxXJpC1baia",
  "key17": "5jSS3oeRqoH7FsgTuDmV1UJniJDPgohBs16JmTHWQVpJg45mmxQiajafw6ySPuLo1fTkmduT5bi5c48Rchaj9skN",
  "key18": "2EAxb3YARYZCarFRrmo4hyh6v1cBLjwa2vYEDCoBFT5VBFMpzAGj8tuPWs4HdRrD6wBULfNrK6Yc8WSskgzkp6FR",
  "key19": "3yjYL6SgtpFo2Vcz4Q7RwDicx5BKW3bZ5JhVp37xy4JkUpLBZPm1fksbj6C23LZooPukccwfgQJM9fN6B2vErRv4",
  "key20": "42PivX5npAoigy2Pr53PYHAFVKqygw5hGmknLte32wGeWVXTah8S9fzB74ZgEJT3cPp6UFfpDpCZinwc8Sdu5LJ3",
  "key21": "5c95Pj3Pcb6CGPzBj29Jr7N4AxHzsCkd2TCxiZSxQKZGsH2GAdBrGRNpe6ksCZaeNpYcWbnnuSFk71jBhsULVqa1",
  "key22": "219BVu2cPNMESm2tTMrFKgZuku7GFL7ZhXUjyjiZe3sSr8HAQMWK8geDXf2nrTMcBoL1bvHV1yYVVx8yVh3k1MPm",
  "key23": "jTnjcB2fsiaFHWUPUD35Ln6ddyAESfPmtosNLx5CQQSwwnBKsLjgyDZjocjLGoHJb5LrW66EjWPrZPCzq3weJD1",
  "key24": "4kH5WTyzWaEXoH4H5NcTTZvsyCvBeTxY2iDhCzgmk8aMaFCELWqcwEdMwNPhuTXabCihBaqGKeebFBuvG984np5S",
  "key25": "5SNYzvoL7K6v1xRths5tEfJfBwQ5xkMY8Z3dmLDah4cHjeiMJ4cy5fKbJNZCwnGbEg1W5oNpFKVP1FcSobkmBSVg",
  "key26": "2HtucNp2ydus6Vvykd3cXDx69DWoB7wyMcdShSQqkiqbFs6XqHVnX7pQJjPxMcayk7TH4rSDMJii5eYgWxgv6oPU",
  "key27": "2sCf8XVJN2wiMfY3UeP7bS9oDDF5iwZQg6LuZaLe2fB9E19DGck5DsF3ZbHhsAHofvZsaS1AhCXQ8KT4m2AmbphT",
  "key28": "4ZRH9g44xCm98Qp7KPcWXtjuhL6p5L9vbGgyVHbh6B9mz3AbhZjBgFAHvDmTxVxp4GazewjDA43UUUPMnJVVw5EX",
  "key29": "4rWCd6MejymcgdXDNjVzXnsy25FDoSZJbhzNGRcK3drNEnjR2HvracqdBQhVctgcSsDPWaH8KSncDfK3aiEN6LbA"
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
