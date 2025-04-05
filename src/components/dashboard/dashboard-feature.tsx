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
    "4TJbaWUTSBQRuMxjSAJ5W7ZKMTGfHUD1U3bMZfhjfC6UNwKkdp2CQMEXnSnmvPPnGksGeLnv2q8ziiJjqfHGcv56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hrEV2Qsrdvubc6K6u7eouwEQZRe6pNqqkVD56RvnHLGFryQtV51PdnuG3De7y6wbK2zQbT8Pb7AXkihG9CCnw7H",
  "key1": "5wJxnYqR2k3NWhtvStz27Q6YvwhAAvA9i675niF8T6RipfG59npfKHPZ8NDpDUt9UYFLfBzNtcJ3vYA98yqDQhYU",
  "key2": "5hbDTr9LcXoSXC6fVMGx5DQme8zmXZwZM7qiATPuj2igfQCfZToL79MkyEEf2CQWRPGQQwKgUG2WtNzxAUsYMHWK",
  "key3": "56UegXxVYygrTEk4VazLYnrNQjbaGeBX8Cj1ANYn6JiyhERs8CGKkD5LEGStoZuYJKMhMpM8LTFJtT2jQg96s76s",
  "key4": "4V8LtW1Cr2BoYWG8hJGhxyCXcqBcDszPbVe9eokPhT1AftwpRuGjjrnFz4cNBjhpYvgED2TF7LY3nzfDd2jiGFsB",
  "key5": "5S6sbDQxNf2kh1mrmkeXHYa1EnLqgbGYrRBDJnk9a5ahzb5XyQEDAo1FiZquFjkZZbwBvK6vNrawqhznSBp4SsHH",
  "key6": "3U1GwPtxuVJmpmwEd515cdLLuRagFZQmKLFfkR4zm8Bdp8qLQTudz2jMjpDg537XxxGc8kLLtYsroYRNBov1RQHC",
  "key7": "4A9zZRvLovPmDvhq5MNeQNtbteMC3PFMHNJScTbHPpMWARCAwz7CUETUsvHfkEa8XDeFAAceuu2nVnQq9oHpnELD",
  "key8": "3HxZzRvL8tqFWNAGRzYjpUU7j4qHaEq8M5vhqjxqFBkHNrRUGSkVNHyWxsFt3GbQsWVEWUftauAQstni17ErA4BT",
  "key9": "4XU5bqSJXgsLDTbGuZoUhzdZu64zcjdCBy7A6SkrmBGUKX8dKStNjcEvUyg9Pb2LR9xRsV8rjqctQMuemv5CwTJV",
  "key10": "299MKGNZhfNQbaKmBmKvvNNQNDibH3zyPZVorW7ftU8L5cRvNEz4XCCont9mAvSBRTYFiqKFAA2xqsckcbko2wTT",
  "key11": "3hEvTGLNU9RtTJtTfSqbipMBnH6rgRrYaBWD5FLEZQx2rfd3SPtRL8hYY9pQghaGUJmEFebPdMMMNzT31FjCtoKx",
  "key12": "5T2Lbn33GcuQSV3kMAmi8uWZUheADxiZz6bCJrG2YMW8TNRhcZAsBpeeV5aMGs7njyTiJukXuZhfRPxPN8JpRJS6",
  "key13": "1BnRot1vhZxQHHS5GAfCTR8sSiyTFRFdxa8qSkXCaEiJJQ899dtCkCmiA8zNRc1J9kvBk6zbYMze7ycEr6K62Fv",
  "key14": "4rvkmEGqe9ytrWz75H4MFcmWd2F25bABFEJ77D51m9zAhrn1F3CRakmk3ERY9EkumVGDwySiX4nMMSKn2V3ASofy",
  "key15": "DG9qqL9y6WPDCmFq8Xpj9Qec2qGKu9GztqGKvhDP2GgESGygrVMdVUDEu1gBr6BQSmH73Q1H871FGX5cmf8pRiX",
  "key16": "3NgT9ApFnMYE15bwuNTfZYPi92qZa6gaiJ6tupUiiXddbTLbEuJ9sb9qw3JG6izaJKrnEKQ8V4BCL7FUdce4cYDk",
  "key17": "4DGYuLuamhEdYgycwEvG8BHHUVvmcxEJnSkF3jxsGaZvJE7XGCvBNkgExMYBMQNYjn8t1NtesTe2tGwDo7fQQSRh",
  "key18": "4T4VHfTCdjcs3NvpVMbwmTUsE1uviEtawei5qC5MNYoqVDunS49MP3tqPukVQyhAv1RpRywqXPgQCpe7sjhZxPmQ",
  "key19": "37NXMbvTLttbUYqz8KcY1eJKzppXSgASxThPVSNQoR7vHxbsJZ4CV7HDUPMdgWsAAWG3w6EXNwnraKwguNLNxMsM",
  "key20": "Bd5TrTY2j3a2Nx3V2wi4UxW6Ez9V2sdR2Le31MBDYHsqkhrUZNMrkcjK87WqFFu7QXkcbxdP7WPwfwdXhT3C31K",
  "key21": "64uWB8c8HX7NDK185LHsRsPosJyzQJzTxAuG5K8JibiryP8s8EFiwYNpYUssKVBSSA2nDCamWVUSko9xJFMmxBL6",
  "key22": "MyEfd2pXzCFGWwUU5BTj84NvMyxojaFcMbsfU2v5cXnQRijuWKPGrx2mPWGtcELETvVRwvZkknVTnREG2vR66Vh",
  "key23": "4k2CnC5kX7mGdbTNnfgd7sKipi3nFsN8xY7NBtu9n5MYVYb5q7bwS2cLWb2XxWQtHxu4LXBmiCXnwD2nrVL6chn1",
  "key24": "4LynNXrShAG8nvLBToXGayksZB3Fzt2bR49n11J1AxbUpw8359AJugdbqPg3k32iFZ9h7Q45ohmf44pixLorQeZ9",
  "key25": "4GMGaUa1QaSjoZp5yRe6m49jU1yLP9KEXykXq5geE2eqUh8X9FaoLdYtH86kzReNzvh42qEAcjELpKPPNkjeHfyw",
  "key26": "62MBpwHKJcWQH4mpWfJZhhwuuKSaDan9hqiwiFtwt35FU7NUFsJwmjbAZukxZT1HZqQUB49jVzB7tiqLECZRQRR9",
  "key27": "2B8XZSBSwMpCnTzmP6cPoQ4F2se4oedAN9S48qUg6PBxfQpZwfCSbE7LaccVEifU2jg1DWgx1dLvXUWJp1PGhBT5",
  "key28": "2XeVXwyFhRYCsYuwhotAUDheRnzbDjz7CipXBP4XGAT5ddJa4CVckdtVCjaTQ7x2g1kNwh7zQHa2TVskXqPgsXHR",
  "key29": "4DcgoifkpkztFmuywsdMjuwcr4nkv49Bk9n1zEDQvD8GbzHxii5trkXHG8LncZRpS6xoSqS1Ci4KBBuFrkcqvDH4",
  "key30": "5vnN2iovLG2yYvGNmiw9hNJ563HY2JQZRVE6LSFx9QhsA2HNRPodFozruYvBv12D1NG8kLDL5zuzj3BEVD6BhFvu",
  "key31": "3sdyLZXYV7JikpGeNy63DQmvK4Zg1hiUbSyvoUaT617iZP6twmLC5GoY9ojFGTBkV2UdKU9BQMNij3BjCtEQeh5B",
  "key32": "2KhGGTDiab2Lt4Hgf4kD2vDGnqq8CHFCBRRhe6p82TuZEXotL9J1Sn4eWgV7G2TrFwb2B63XTAeMQJGKfp63ozUc",
  "key33": "5Gv7SCgX8NqfUB89cebsWj3GYDWYht3dpgeV2kBmmmeknXN8YMhkHeEBRM1JGheeFtzjcJw1BRf7GwrqYLTy61BY",
  "key34": "3JkmYy2xhk3m5cdFPZvY6Ns6uLymXE9phSquyTa6wXWexCSDGzHaG9VGSKkR9wqoPT6uqAz2GnjyjMJCaMbgfJij"
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
