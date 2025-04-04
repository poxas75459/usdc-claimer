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
    "4EuNGrEUYrBRQv2gmF466ARF2v1i7c6XdJVjixcpSbWEn6mjgYcWNH1vJJgAfSt1q2KYHq34uDsuhEcWTBw4H4uC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31znqAyCjWEwBNcXezysdQD9Ndsy5PbifRmFv3Q2Bt9mRdxEH48V4QgDd7StB6VAuJCNzczRFTiWz8PxVv1AtGZC",
  "key1": "xavzCwHwmRBDKiaB8541zVXmucqy2KmFtyYauFjR9351Y1hEvru56FwiMBZvjNb4yDNMyfA2D1XgzniNVZrnL9h",
  "key2": "65JUwQHeyZ5mUENgtsUY9dWGCewUpGtkjPix6t5LSuGJdZoXnpiAL2bxBKfbrQiQjprWvWZv56SzwPs2gK5zvyYb",
  "key3": "5gTtBb8T16Frumfjn5Jh4vvSv3FNEQQTwWRt2dnyxtaYYuhu75A4AazPf1TifT39epcfbkKM7TtT7Q3tCqNawVGu",
  "key4": "5y8oaygtHvERyseG5WvJ5JFMPCnXFnR3i8zzFfKEYXYKwmgL2g8jAeej4csxuuUkwtb1r9i16TaQ6MTAct5RWNNV",
  "key5": "3PAGPigTWFyM5tq1rwsc669Etyzz1zBUxfBizkrecsuxPxH3cmAvG4NgmmS4sAQ7pYPY4NCwXxa48aKucrnMh1p6",
  "key6": "4jGoJ6eMEWQadkyXD5zyKvgcyTCZhBd6GpvVfBKa1zfbAfgjnCEpp5TvdvaS2X1ZLM4xKesRrbTRN6exNyATpUu4",
  "key7": "2BWqdJ1f2KEFUoomiKYipk8KeYvSukaDBLefDxDg2MUsu4PsMavLsm5m6GWBS1VyQPu88JzFU23TtixrGF7TVSZG",
  "key8": "3xk1ncNCSMGGHLQm3ZJkfSbVhmrkJZgybtKNq6bNdJ8oyyf5BuYnYpVC3kX4ZcY12hCDsaHXT6eBhnQQRtWbhpB8",
  "key9": "2hrdjnvAmvHFC4KYNozx7fA8AXT6VmUinDqrffVz4reMDd3XCawssmca5LXWHSKgsZ5kPYo7MH9feULqxLEGJfDA",
  "key10": "3tPsXAPim7CTDVXtpE91dyTCFMNzasASRp9ZbRR7yBBKa5orxLxwXTNacbtDwh8wrQY4tKqTNDTr55JKzUVtfrUk",
  "key11": "5sFZo9UGkTgTq1E2n5TTUDu77jjo24E1bAPaWcEEuGxpyfV4GxsdCsxopMrHHVanvtwAaUJhGGqWfd8MPZzXqWst",
  "key12": "2WyDVwWSi2tUxAHKyBkw4KvaWbPdChrGz64Q298DhvRmQm9rv27xcy8mDmJigJpnkfv7MvDmb9sRfE4Zsd8CEJVJ",
  "key13": "3Wo3s7tS9RUiDjPhyHfbaDjJnR3cdLeXfnQX9Z4qjTzGhvKsyivLG8SAWvLQUF8MJB6v6CqgRPw1YPncmv8mH1g6",
  "key14": "5ht6yeqjYNaBMmDUvt4q8XTGzm9b8GiTeeC5qtjQaEt4ftpBCAywQc1dJdPEmvvP9h1cohz8Lb2QZ9pmSHYgr83V",
  "key15": "2rjcBBJm8MwS4zPKraUK6oGJneJDUF8uxxucKmVay9BcmszwWsutrTvWuPcJLtikt6C7T59ZbfjBnFBXUyYtGJ8t",
  "key16": "64RZPzgWgq1fEQAS2NFZzJXLmB5RcDNyy5QfKaMtcCq4mmfLoxB4Qm9DWm1j1rwcrWpjyMayEjLp9mWBVbti412a",
  "key17": "43yJ5H4qb1qdXgJzR9J6X8WJFxMcD1tVVnQ1hfQFbh8TT3bTZaK8ZPGSnMhnEB7yEWzUL8CukyBV4BDJ8FP7Zr17",
  "key18": "2qnQxdaCsF3A6U1JDwTihrf68CqHM6siXofNwqddxcjqdwvMyNye5QXTsRiSpce1NDp8Nb7gyYNxm4dtZRkwKm5u",
  "key19": "29ZyuQRhPwLFqjB4aeiHHfspdCnLcsGJK6Ci7VWDr9e5pZFCi28ux86uyoAt37cUUUb24XYFrRzHHvHPzgTrpBMg",
  "key20": "4DjFY5G5bSP5scHNwxYaTn5x1Fm4DHKuZq4FwMwYfKzFTXpYVYqofGdCLG9VcJHjF59Dvsb3obKfPq5Zyf8X9Q2d",
  "key21": "4Pyz7crmksFSsypYMrTQqDJR1fbtBNFFLJNzhrc8kyBJt7zARiY8Y6m3MzP9L7c3g5FRdeS5nbB7zWER7D96E7bh",
  "key22": "412k1fxmBEVhpnFPnhXjH86nijT8UeBXyCXQjY6jPusBwFFtJHcDbejg4zp8WrU5yyf9kYnhVLUsQgakxxCQXNxb",
  "key23": "51P2Af3WkovRkq42h8sq7XshN9fYqTVsxr22kWLp64r5TD6KzJFDqmkqXQ3QXfssubhjh7gFqEdatUfKhFnXvk3x",
  "key24": "2Tau2cNW6SuCNtbXrJKEGKkECstCU2ZdJsH93AHex83p6QCawLog3UBrrEEGMTB9kYzJ6KeS8xLXx3ZjDzCpuKsB",
  "key25": "RmSt7xGAviE1LHNnEUrHwhLKqLpWjhSVedWjXNqC3Y6dW2bTZ2shfeGP4P7H4DX3wDem6zvYQXKztTjSR2j7eas",
  "key26": "MtDXAsPFkMRyhfntFtkJ6PCy9bNchswd63wApR7ivQmXp5QH8PrianyDktafHrHVud2wMSUwJgCrSNEFFVLPW3R",
  "key27": "2G1YmDC3MFrNcfuFL8MvokeLGzptmRhq8TiUStTHookQ5HSUjS8SLtcYzW9fs1ge9xyN7oZ9GJLCHUn8Znn6ZnYi",
  "key28": "3pqdFHCbw3Q6jdn6ci44YvVbaAxbVACZ2WBwcoCbzsatEuhbPGfbusnDfJ6xabDeZ7TPWK6ZhqJkcyfQjvU4DdBi",
  "key29": "4n59CLYwJJU89qGDPneVhWjKugx9Qrd9Wqqgt4ZGKstjEA6g2eYpY2d75Bjj8Fyme51tS1QrNM9bzsAGi26Hbq2w",
  "key30": "31jSA6SNptLT4zLCiwFc6W7ew1sSzDkkcMaLH8QgbW6MZAtyWt7TqUrHAi4ExwJ9UziMXWuGNekyWfV4vG2tMXk5",
  "key31": "33n2u2GWALjWizWDdDrUVbyZXNXoWRKVPzNPGuJp1BRbjkbyLmvAT1do5evmdWpgqqPurRQ4apTgqHE88jz5PTdK"
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
