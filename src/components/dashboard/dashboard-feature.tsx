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
    "38sfmca3tDqPiDYrRoTTyNm2u4PCffqGR2opafVWrdPDirQGpyMZDTJkQmnEU1c8aLAbLNU2v3s8PibvJLAyP8zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YxzMd7pNuo2yThucmEiEqVWgJhjjf39ALMHszd2HH7UbsSKV5hiwaLKtQ1DFmi2p84Bvt3X3FDeLHxuMTcfnWx1",
  "key1": "5AXkYJQVxeK562F3So87UsnQenrSvUwx8QPGjTPmUqaA5TEEPaLv8VtEKKLzEYvzyZk5ZqD4WuYcqUSpPGHDJYTp",
  "key2": "2MX6PHqkw42nQbtWCePwRshecrn4KLjzfejbwok1yBGFif6Wd2JpcvnjvdBnHts2do4e4vzaQu3KYv7FJ2BSJD4z",
  "key3": "67RfxW7HYDNDKQrh2RF7Jq6FYMZobwLGivce3VYYmJAckRwfztnPrTAFMbedG5wUEHDwW6rtvKge8A7Z36x9RUB8",
  "key4": "3fBmSh4ekkEnM1om8g4dqXWWfmxwdnc8dh7etQqX8hAbcfdb1UaiHkrQVUMi2rAo1Wois2tPxfJuANCygCNpHd6Z",
  "key5": "26JNgvkQLV4ciLbPrzjnXygSUTpgxbLXE6f39YRp68EDAue27hvTBEtgK6Bjo3oDkNZYrJs6aaNBY64WEE7WUkx6",
  "key6": "5omd4X7iUfWjykW1M1BQSbzYNXGshyJh7XLr3tbLEGwpCTdTvmnmyGcgvPjnScmMuF3HKNuzoZKYcpLBs7LVNxYP",
  "key7": "45vyCVWrUodYjcsWczgZMcszb5szbLsrsr4WoekVanCzruu2iH97DW2hXDHUHUvHxEx4xnW1DLn3xwHW4QhTFU2V",
  "key8": "4JqJgY9tHjFxHEuBS56eUpg6EqGDcpVrA46mjR1xU8y32UZNxK9d3LntdGBSE2RhbWXAoX4HDDXBDHFs2sVBF3bT",
  "key9": "pBULwdByDwG6sLQkze7av8w47CriwyTHmc6PB7Qnu9tdrHgC9qic6ESr2uSHKQJN4CsFf1DZoi8j2dign7Sn6zd",
  "key10": "yMLd5DFLpXDPvq9S9mHpmRPiuKLmLBhvdRFcPQvKaVueh85HhRvcAnnrPjCLf1Y9vvxZ3GVALGsXag2RPVPD1TU",
  "key11": "3dGFQ2dHJUXYzmqLKrSUtxZeeSkDASYJHp2ENjNaZcXPgDYKBSBw4ns3tS1jPnnDWTdKzZRHuW27BSvPPL2kj6Wz",
  "key12": "Z9VpkuwwimomAok2MnBvvxH8AwrNZh4NWBbWzB21SMybzKjd4PdbgDMVSvqCKQ5bdXDnNQFv4gtS6gYbC65iYtc",
  "key13": "3rPK7asEFHJsgDCUMuJMtq1FWijm8yxNxbTTJKEaXamoC7AhD6X3a4Poi8i7GmcMgmjViQkymiUTzQUG9Ciuc2AW",
  "key14": "22oj8JKysQab64tkYWkQmr8g1GMdFwUFLQTsbJHHFUCv3PKYQsDkBwfZZW8UQMDfSb1rvNAURq3h2REmge3mnbt5",
  "key15": "2VX1hJk4oNDX2q9zXyvdv23ct9jNfh61MkocJgsh7XsXgpRuTMJFzzucXavFNy1DVUHGU8RbmzrwfovroQzg1dXh",
  "key16": "2cT1fxwGNJVaiLnmVUAxQeazauVAF232WVKsxCmr751quE19PsME9dyke9jVp3b2VWVFdwdSBJKZuVewmDxoe6ja",
  "key17": "5XSoPKhmRvwhtKd32WVPaiorrE74qFhwnRHbyvGoQx25QiqSXnG7HA3PVG1LLWEPXvmfEQ7Js2tTGDMSXQyhN5BP",
  "key18": "3TTi6P3J1FVfLEm8tFMk3bGrKwg4mBQfm1a1XoTwXunsuJXCmukDNktFK7SV7XVE9LgLgiwCTjfVoMq7DphFpUhS",
  "key19": "4HsjvXUXUd7VscPaMCVesUt4we2sFPr5biMA7YofbhtGBhcTEKNTKva9yNaLyaE3d6bVd9fKqL1hSoSaqNfcfFJZ",
  "key20": "341FwyHai1rfmvSpzhiMQDd6jgnx65uwtRBCkrqRbhyfBp423h5GMRXdC3CZvkoZ5HoWT9Z1bwGehqDRRbtLHByg",
  "key21": "7Lf2Dz75gUhnyy1GsNpxAYtNQaSrhuwEQUuM5CqWE1HTaR1D4hwvRoKpcK2jLDng73FV68RykuBcVSABMq1GVCG",
  "key22": "3cU7uUmsdS8EX9J5QwS5jB5KdDkyWZUyLyf42rwceaP3qAAqn4sYfPJd9kRdWAMAvXbVwH4Bmo6TBc82y3UATBq2",
  "key23": "3zfgSMW8si8XCiu2TVB8UgC5hTnkD2CXNuCpaCfEmQ4duD2eZCyQ2MQpdKXKv85rS8N6QrybM4BTrLC812pavNhn",
  "key24": "2DDGK2Ekw9SwPuCP3koqPxE5sf848JxL84oVqyBo57P78fYJnhSok3Yy5ypkxWMRQmrRvCtwZpxefYHsyrh5D6dX",
  "key25": "2nPd5SLYbE3Vzy7SkwKP5PMPReewQ3qnmn5A2Q1TSFesLv9xBLx85LqMJpdxF5zjWL7FfDjKjJeSw2RETKbp2J6n",
  "key26": "hsR67QQTbNbQU1gKptnEtmvk6jpH9SSFnFCoMbJeN9JrDPDVR6uvySfa9Y5DGee7VDwWF9QnFcDeQ7e1iMByNvt",
  "key27": "2UPYgUWx3cpBoUuNjRG2gErpGgyn3FsuN9vaXyz1PPKtAcy7ivwxN8siCpwHZi7TMxCEPgcTZpKPXPa9TPNo5YSC",
  "key28": "NTgNLib9wVVbezA4id1RAM13vwJSZYXzm8f8ABVn7PkPnAe2oqgFxLQgzvPrnfRDKaCUussTQDFH1nFFBrHRqeP",
  "key29": "46tcJy2QpVQ7xPUfK8VCS8hZPwWVRBTRYDAb1jA1qzVxpyLqcMTt2tsGvLKNn3NnsMN2WKAXfx5nYxoMJDjyRV8u",
  "key30": "4mDnisVJaLzPwZK2S9sTRCVLsvKhLq7z6LRwexWVEYwvexLvkhQVfv2GdkVYSVPXUydRn2ZNNUZWJooGDv47iQsX",
  "key31": "25mAiDY7Fozi3YGsqYo7hE85VJFdsfVumf5SBTKnd7Rz88JLbk5iTknZeFdW5aMN1kSS4cL1TzCc1qACvu8Z7VLA",
  "key32": "5vCfmeuzXz8XB7AsU8NfJEuaKzZo4sV2mkpHcksUAeGnB4CF6pQbAY8M3FWNvTJybRLmYKHtmg83Cm9SWLsPSmoo",
  "key33": "4fpWmovSYan3WzVG7vfryrRYSxvUbp1MZpdKgh5ytoMpHjnSMkdhcDTuHz2dtRZGKMdsSk5npaNnAudYyTdb8QbY"
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
