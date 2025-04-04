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
    "4WVmTfFUJgpT6Dzy1hf6rhNcKXqYiTgKKAEjrFyJuBykVAx3H4JgX54eq6NSBKwZnrJxQs2PfhQknyRFhnkPC4SR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qcyom5dGmNXeaxfnJgeyFs332myaiSXTXGXuJMdUKeQvgHAREMxKjtz8MKDowRM6CKq9oUUCr5dh81shTp5NJa3",
  "key1": "2RoUAprFeqP8CooVEEyRgFy5QWCP1RSZXX1wLfwVemxygx5HpPigUm4Ap21WQNSdY8z58g2XXmeK2sf6LWab59hP",
  "key2": "3nio6eNHLJboZGBCY1gTpbjQj2kwqZLwqaurxbipn73Kj1qW82fECd5L1S471aW33Rd69EMqNk7CXXACea1paoq",
  "key3": "2Ruyd2QBmUjyexwUTJzsrrip7URDV7c891YPcA9msvjHaDhd4gr2GRfL6ApTuaeCQyzS5ETVDZ5dAvCcG2TSUiwh",
  "key4": "23kSBKZ1vyEbKoft4NxkRiH4zgkaP8osrNGd5Bmy7paYAgp8uf6R58KRLSFH24rFi7kDGcnvGUYFcquQjyDi2A2n",
  "key5": "4MFhkuwaywyu2u8eULCHwsdgUNDc7TjDjRS9F8pGQ9mZo293R9gjmoy8NSWj5rBshCwQPLyaoFucnyhVtzfU7Q6K",
  "key6": "5WAqJWJHmxqWhN7iiLMsHSUELyiryLZbcDMEzhj8U5uSyASFjut5BCKEVyYQ1fLgi1KRpNnACDGg8c8PoUhHxEHj",
  "key7": "6XRHHbK8FSGzrcqoz3HaJU312jVLFannbHrksiiy6PkkrJn7BNDJQNk5QB5DfSpV1U9iNNMxnqb5GKQrzVdJYg6",
  "key8": "Yp3jZZNPUNhxL317Az3EeQe1G9NsuTfRFkDXZmhmvFWkF571fTS1mBatP7Z9F3r4mj4Vkq4zc9MWgAM9oBVU4XC",
  "key9": "WdeQbqTVctJTF6mnyL4Fc32FikmvSkZYZrNnMEWDxRw1UxKjteJskGLGEtaUPogdfkbzMEJKia6F98AsuMG8aNb",
  "key10": "fPUumfBuRs2v488FoiMLrgDwQUu3yT1XfbApUMBkBWwdkvVyiXcF5G8E2AL5zeRJzt1vL1oh1Wwnmb6dxESsvYE",
  "key11": "G5BkApBHdSNub6KaHGULUGHvMdoE2XpgzVKgMLo5Brfk7nXqU2hmtxPTDBQfg2y3yAJj27HFJhLqLntvHM1tMjh",
  "key12": "YcuewWWtb5ghRwWehLEuPNP44JsbkoesaHy9RjUtzC2zja5fi1z2eAFLFFr91hHuoDKBss852ei1u74dFhKnroZ",
  "key13": "279qVnuMvKZD1pHYB2o31YNBMiDJyiRHxdnWmHDLRQndr2saQKfbfwthtsHZ3tqWSEHvCDet7gJ8L8uPVR8Vz4LZ",
  "key14": "rikmj7Fv2ghPenLfpQmvwdt8WnBCv1Rkza5S32JMn9DbNCd9VmtxpQhPCthrd1KwgM9YxMAN7wuLK5dutY5gd64",
  "key15": "2TMffABbF9S5abTN7pL5KG7P9nzSc892SqihU3mpxYjwvzJzVjCY2dkrt8NVyvsvFY9dk23F1csoUAnV3bhqyD9r",
  "key16": "4FUZV9evzS8tszjGsQ5F8tX2C6q8Y3pFeNqCHMx6vyPisAjRpJtfaizxouyF5uoPDRNRb2XdyLK4iAAVwoPBXY4i",
  "key17": "5GganTwRBowkFYPPnj2Evp53LLumbSRcrksy2x73JPDkJASDGsQCFX5YQ13jeoz7QApXKVLYBUmqWNjw2PwGajDW",
  "key18": "5RgxgLfeVWwQoxVT6cc4kjcbSrhc92nzoHqLAgxGDDNCaGAYTuXABvPvoJ4roXW3dQQzb1aXZuDELNJGADKNwmUy",
  "key19": "4fMhNfZE6ENU5KUCjXiEvx4EyyZRfBP7vpYQg4REn9wBEAYpCx2g6pnUWfWk3kzJcXaSxUY2DbdBwoj26dBQ8Afr",
  "key20": "2Cwo3aPqqHHfcD7GxKWHSVGre1AwNWbBPB1AuoybKPjxxKCywuoB1fTm4i9L1KGPBMJWfPwLWAHPyWdMDUsnUnfM",
  "key21": "2CM7jKDYvqNmXRfZCmqrHfzbwB5qvNiiWsMspzu8WAyPwFrCgAmt9vEPYwMm5btC2o8L7YQTxc2813pDbgupDx8H",
  "key22": "4Hci1NgcQ5sarS9mN4kAJ1487fAvtmysY7GXiGDuAgWRcUcaH73uQK7cyxcoMpqRhNvyEQ941UVkxpmLFr4zMMQn",
  "key23": "4e9v9MUT5gALidStrhZgnc6Et9uuR8s8JPDWppxHge4LRctiMCiSemC3cra4aaaXvmxzKpUL85GCbpc2pncJJrWe",
  "key24": "5YS3uj7fT2XEVnzbN68sEg5tHXiCQQeyi4VD23U3LmWWYySY8NPUTapAeHUg4F59jzJhJMi3jNgezC8TX79nUecs",
  "key25": "3K5d7m7NxBDdDv5jTq97AbLdcujhrd7UE4MNnG4K53BPBJ8LBteDjvzViHbjMUg1ByuTVAU2KQTsjQsLKenn2FaB",
  "key26": "62hDHQnEFhiz13gUyxCtCtu7KDce24tCYJbCcoTrDbTKimPpsqLjj9d3HtqjpcrgVBPvhY1YDogQFwF2418QKCfW",
  "key27": "6aLiZNtb5qJjAN6aDxNuKntS18hjeXQrNYwcA8GCF4b3LpnpkJr4SyF4ASorCsYeEQLLqUMnT6hfJk2aKC2Wq9N",
  "key28": "3iToDL6go8w6Aw5szrQBbf3F7prDYaGpWsYPZALrJYU7FvS4qASKooBxiBKkhcygYH9qMs32ozFKne6T8kHNeP3U",
  "key29": "GACTDDsdtKSZDsAs5QxTCxtY44Z4zDEX2RZmcNorKMM7zp3VwsJJGSgs2HzCXESQafvBTppt3RzsqUJ83cSpbEe",
  "key30": "24mpCXB6JceCJgvZmuytmuRcMx5qLngPGDUD12gqTBXNW2UC82BKY2qxprAkPz3ncjxY3qCLQQ74cfMvjXmvncst",
  "key31": "2nj5z5HGMf53Vj8VE2qCN5D4snNMkBpCixn5ePVDxH4WnLuz8LdKKNu1q1wHVqzEG3f4oWSJsZna5kEXpUWLg2Tm",
  "key32": "D5naRmGrsYKC8ZtSyvjpS5CfhLfAwhSJa82aVoSiKYeRSbNfsNYYCsM4V7G8LQURFLm7rc8jLqy3MKVMxjqkxNC",
  "key33": "4hyYBrUX3YySiMvB5gj2mF3cBGtqnfPxC8r3SSYFSmfEqD5WFuef9jbysDx9LF2Hk9UcRW39UQfXrFtfZduD8oLa",
  "key34": "3g9V6TkLvC1qXy97GHrh4U15kSFdkeor2mZF5S8xv4ZY3ejLHqkAqjLvQMSoqXWmNh9398rDdWaq93UAcYkJdWwm",
  "key35": "63dwvAS4P8GC3YLi8tRniVNsNDaREcRzWD2CVP6Yat2HB1jNDDKFAdoF7NvPjeJG2TLCk8W7gSeeZi7WTRpfFhfn",
  "key36": "4iUSbJYEBdGv85qKfoYbYWt4HPL8ppkRveRQnYtZ5fAUxnVuushzVvCW5UtY7iUzG5YEoJSkwk7RQfr6T78P3TyV",
  "key37": "5mWsrjNBBXq7hPsAeRoRe9UkquWkPjPDvnTqMe9ajA2UoLg4FxJyA9ckTXuK5NiQY2Wqq7SWtR86g4v3BdZ6veBY",
  "key38": "bNr825Gw2cEfkG85RbjvyxxaL4HNKXoKrvPT9U7v3LUxtGpk6qZhsdRYYXYwZjAs37RhHRwmWqpDycWHoipmUdq",
  "key39": "2bDy9jg6iiR6pwrtbjSZrHcLpTMKBhUCsU9iwY5KasMuWYyE1JKma1TCU36Rt7SbsfHpti4LRcb1YjEe5WxJxtG5",
  "key40": "cS66Yy99dZGMmi729m5kgKC4x4bQA6VXQhbA7xHHvDibm8mTsJyYgYs5ZQvyAo1iKznYFmjm4MoZA8oZnwutWXc",
  "key41": "qvzhVbTF9Stq13LkpKyV2TFizwef5ETUWnpA4RTDf5rtdaAj3DBRCXE2hV7JgBm5vkqoeS3qyDTvVsbwBQa9Hhu",
  "key42": "5PDoTwQqwFfrs6yYeGrHxQjgpxTFhFEjvPxdKVrqiVnvuwSAdkXoJJ6n1MicdsY1yafzt78LJj1Yu4EHJFsAbrnr",
  "key43": "4aDwYchBgC9VAXbaeWZJac84fjFDyoTcnQY79XSU3yitAmfrhX3JwMRxM8CsPXSWwmbEZrJ11GJX1RmfQEedRqg1",
  "key44": "4Hf4h6A2fD8W7V5kFZNvpEtcQMGRoKrtS7zNKr19ySiLBzmof8o5fJUNFLg3ZKS568pvZYBAhJoSjerEZ98wrBT4",
  "key45": "2KaAZPJFjYgJxqanWvwzhJN6KJripbyuEYXXRE5jq9JzCEojP9U5mjaqw7Qt71ajNGUA9SPKiAFR7bVKGmwPj7J6"
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
