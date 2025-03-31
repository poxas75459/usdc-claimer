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
    "5P5D4S5gaQZi9g5qA3wpcrh7Az1x9LEBdZPMR9So86h8mxwb57MRwdEM6Msc9tSxumELmmqEzz67Gq6uMw38DeFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p8JAUdADdzwCNWgJxREyWJWRRfjGccS4SidiGXHWhE58Mf8nTTx4A8dpLnw59torGfwfmm7CfL2mKwsuwC9TcHK",
  "key1": "S7vSGfW5No1JtR5dQcBQB2sL972NoZELURPPgYiZjaZ7pHPiaNt867LiWUcwbhppHZcQSqixQBYiv3L5MyyWx6K",
  "key2": "3QYnpRzNWvdGQq6gpscrrabWbKpdpaPeo5K4Erq51gmAJSgbZrbLDgqWNC3yQ9jCrSeqgJtrD5fX4YnnzyNcZvy",
  "key3": "236Tc3PH92M5Lp5PrJHjNi5tdcqV9UJShBjTkngiosWJqRuLbPengSUyEhchi9nX5zvqtT4aLkbVrX1kGC8ZHYUh",
  "key4": "3p9BU4kWZMc4FUnC4QghvMwZEarUsPZBeYjMv5RPTt2fdCcMJfZ8terinfnY6VgGUw2c6FUj24stA36xWn13B4mw",
  "key5": "5SfvAFTq3Hd4nLqaARvQcZBLqnic265ea144Hkv2L7mMY7X8kHwoXuESa31H3D9gPPSba6AbDKRKE8KAqKa6jLUn",
  "key6": "vnWrHFuYtv8Bxky61UdZX7NMhvZiREzCTHfsUWX1JQ5PUY6EQMLHhCb8rBT2Md4JdpqZ4NQPm52rpUmMHSQ2YVL",
  "key7": "n3qFEfkitgvAPJffNXw9yaPjCHM4AsTrVb8wc6gh6XuUTb9SyckUxppWBgcuXmFnMKMhGxPY3TTXAoTebmf2xMK",
  "key8": "5y5NJoqDNijd2YWZE1e5JM6AmYChVLTiPrWc7XtoWcQUYUF1ShguVbN5HHZGWkV2AuE78TApRZ3T4k3Kmbfb9oWP",
  "key9": "2eHvjC6AXtHCzBdxmVXinpFgAoZYipZpV2eXUfFQHPHid6Vn7bXE8dW7tLchp9k1vZyDPYKoHaxz7KaCBiiBwcBY",
  "key10": "AxsEtm3rmoNAo8gdePrUo34m4YtUTyN3huMBxFDUhNNqVHnWF7sSACNA9avPHFE3ydTHT8hfbQoJ8Z7hJxeuLSX",
  "key11": "3vTsc29yqgLin2tYMFxfFy1d55erU5vpnNdcpw943brUyB1LJdCHh46ST4yunsDymmvMifEBsxuvytSJBvGraLCg",
  "key12": "5vmsumwLFuyVkeuWLnvLrAbSjeTnk7LD9BRgWNWsRWUuLbqtyAsx2cYq3RBLXUH2cvUNPkTuYRvEqddwY3jdpBjX",
  "key13": "4ETq7pMhcwysfaybUYKXU8hYvyJ5pQNNRY3aig3apeeRtScvCwZPhVARcpmGt4ScnDDPEqCF1q5y268pEwJxcWbF",
  "key14": "61hoonVMUuUKzAuCR3gKy6vswdtyiUjnKbYN8qbLTnLi5PAUvpiJMefkmBfe25qG1EoRnWrCU8jVTYAEem4ZLLTm",
  "key15": "5U2WYZaeGXMRu56fi66pFgi1BxfzmM3X7DwFLd6HAiF6Bt3rY7Ew6wrdCy4sKsKJcZaXG35FmqWCkvNGNq4xQ1YJ",
  "key16": "3GN6VmvoW6NTw9QVF9ChRsh9pTo2smzxRR3PZZ2FBXUAGCS9SgNhNm3yrNS1NsE7RJn1LuSuN3PXdvYQGr3FaAiT",
  "key17": "4KEBiAULZWyE1znSGFXBdhgPRMxtNHc6DohYHFBZrvSEhjk8hEkPvn13UdvzougpUFbgkoXwphC3698CH3Unp6Tm",
  "key18": "NLXegoQLMTCwVmaWttgfT9kpuenko4rtGyJKEjWGaXGA9eDTgfQZxrfGBYqaoJ94YfzvczpzWdGV3vK8hbLBUYA",
  "key19": "4GoTMtHaDSb2EDp2hfrWGCxUHYo1sRrZRm7ciZcB6Pi8r4JmVoSb1psowef7rmdDLQx2ge4oPk1Us716VNNsqoVf",
  "key20": "CBtym9DHzYv7XHJzeF6mDCDparC564GT7qtGWbRsm8y3taPfrZK7bA1GUdJiEPaFyebQDZTpmkX1rrkJQG3nbtb",
  "key21": "2XhpvycbNEaw6gzxAqGkvQKu1JkjZx1LSkJ58TWdZrc85PQr9k55BddMRL2DCSSEc8kk6UDcXJGYzq16UMQaaQKN",
  "key22": "41cDgQb5v1rPp2A7tyHYAuriY1dCxcgCkedEFjToAe3xbLKDqMRyF4KnsjJDvdx7bNZ5FMrhYMGE47AQc7x4bsXR",
  "key23": "3gvzi8PhSRKH67xkND1nEe2v3Zuf9NadacNK7QrFLpnF2stizQjnWAWoTnGmJvjUxMkBf9LFecGSXcTGsf7p72PW",
  "key24": "DHZSqUHcrHayWM5PcvWEyVneEAReU8CaGuWnjEgYxbkca9PiuBKx3AG9ohNYcHyRQQW8dhE6HaEvs6AqLrjqKZG",
  "key25": "VaYKdfbw86yCJfQunDQLQowkGzmGbAJT2XKRpycaK364Hh1aJgD7dRwQ4UQAPu2uV5R1v5HpYAY9fg21iXaSWPk",
  "key26": "4EfxUb6Z5gT7Kc5Vtv4qbZ4j5UN9Su63LHwkRTLF2PxfiPYEqCZmJSNodtmRAuPiEBM9PTvscX4F1FKAL7RxwX2z",
  "key27": "ys9SLGmkL4wM7r384fW4h8KvuMvDCGGcvNUPxNByBfbXw4XF2NEiCmFfVP4ir2SN5B2Zf9TPZx6T1kc2WKW4T1z",
  "key28": "23x8WfwZKHdezXgM2G3Wgdhz7MzfSUiuykRW9K4kjHyPuy8kPB5NRJCRZApMQ5QB873fQYVqh1d5s7uqVBpLvuM3",
  "key29": "2sB5K3UWZtUPmWqfkacTy985WDdYT8WrPuUdgrD9TijxGPZ591q434t61ceZWCsnxxyMS5XMRpS4LpqtE7Wev5as",
  "key30": "2349mQ8gEw222JAAf8YZvffQNSrGLTeKEXDWNCM9oaKUUUKPBvMcyjmD9LJMqAdamCwA2fLDzriUweFyzGHfFv1C",
  "key31": "2Uk8NgHkqJX7SBvLdJH6tUrJTwX18FXNWvC9YqgUNL4R73aLz4TRjetnBBQeEzSpWJ4qVsuodTFRgptYSAoUWoJQ",
  "key32": "2FtMwP5rfpPTjxz8zG3PC2y9ffHp8sb21u7yVqcUhdcgfQ8s3DQUjSwnKCvwwH5dy3imnwG8fPi2TxQzBj4sjfDD",
  "key33": "67dGygjwZ5Mg2yD97dP6WVdVSCgdvZqXi2aq67WhiYGAtCAUQ5Cr2xEbzZqXogiuKFm1bWK8i486ZEsgzPrAMxCv",
  "key34": "5A8YXx73MmJ7kY6opkTyLUiY44GRDAtsjmARfxYT569FvXPJwiGyaWruo6wQDAte7mK9H9xcuUG72sQZWwYupDnD",
  "key35": "xut9DiXMFEe5Fn6nb37MPoyEqAZhLAYjmxU6YSDu2VesK6G5vrto8KqCRQ9dq2FGzop4S8HUQ9r4SUst34XG5wG",
  "key36": "4JbzgahiaJ6mkyLin4c7wR7w4KUEvjD7BRkmoU8xYe9bXizEqbMDkMMcAJkSFBnBpdnsRyTywXCVXsnj9eLhJdYj",
  "key37": "Rv8z4BuKrkTRUT6Xvaa2vb9L5tj7YtTt8VQDNVGBrdUr1w8oa6rb1qrYu9Z3oj7v1TQaWBTDBwK93nXjxTpXKsW",
  "key38": "3oH6WVFK3DKbWp6Njy93pNSMBT9sUAeQ3kgWVStQk35tbEuXBw5sFBZJcJLeAq7jC8UwSGps7r1Eg5dy9wP3xrB6",
  "key39": "3o4Z96azDPgLSwUghXpGcmSV5EKrh7JgoXhz4aVkvR7WZxvxQJWC6VG9UqvKW5Mujr5DEBdhBdLFGVqRoqr2i36T"
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
