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
    "5LYH2BQZLp9A15bMPJSa6bamoRk7tqkv2ohnpVuiH7r4P2G3YcB5YUiyFZxR1NbCEuQG2cgCarukswEUDVCjd91V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i19pcWvJrJFkTiJQzqts2Ye7MaGXiY1xH3NKEFr3TDVeY4Qcw4hc11Q2TaiGkcAeKgUudyDBiSkY3ow83BneD9U",
  "key1": "4MtXzJirKi5aZWvUhN125KaBkq5i1gx96cvgN2H1GrT21GTRvknKeufwtWGLjmPZwMCdrT7Fgow2WQpSFUfjAZwX",
  "key2": "bAMABQPDYVj4rqqkPLpBYAKkPHjPtyUhM4JuBMRJf57DpYwomkySgCxaG11DnopMLohHLv7iK1d4U2E1zT7m2An",
  "key3": "3xEK9vMEci57DdPVvumaqFQntH6swHpzhhyCuZVmJY7aRRfuPrDaKTEc5YceaprBPE5BC9HjT4B5vktw9uyLRRb3",
  "key4": "366HDvCpDebmJM3QbxXchDPSoouypPhvCL7kVsX47FejTasr6AMHHPWJD6XALgbn9J5a2GHF8sQK7cPfwYU8LQwM",
  "key5": "mSCzXK4J9EGgKQrDu7ny8fpe9NEey44pyEGJM8fg88ZocMguG5uianKksCYcJu7EvZw21dAWhBRVvCH9YLw8vqe",
  "key6": "3iivegJFY22pAh4EsYNrnBKJSSk8zL7uFR4ZpE6wYYBM9nZfQZx22PX1LnXqdvk45UpfGoJNr6m7Hc2fda6M2DsL",
  "key7": "25vggQeXGMCw5Ck8cu6yxD5dE7LDh9kmFfKTDmZ1Jur7VVSvzzJpzMeUY9xaD5XiRurkbZkqim4sTFadMntfTciL",
  "key8": "2ZR4juacjDzd8VEyyBHb6GdemLh1rSUJwNbjbaYGqSsRMN3sben5bC2T1JjE4Si5HTMSba6rh8zaKNnC3TuMohQX",
  "key9": "2txJZrzynAiUFe4FwBc7xGGJoy7JZe6eRk3uBkpaudAWwXn1aqBQ3H7Kok6nbGEcitafXJ5hqzAZYGHdwK4CsRWf",
  "key10": "QEvQPgEiyna1WhxRsmJyR9VcQyZx5kVjxfmbgcMkNkGVmHa698vCwVPnsi3ATc4sWDJdYXq3HevUzQB1CqWUEHR",
  "key11": "4KvsrsXtqUKRWFHbs34Wgk2wi4UhmfRQtdPibEtA9afszwv3F35W6ZMBx7qQ4vVdPnvYvNVFWLrtNz76w7mrhLHH",
  "key12": "5CzjZGxks5s4kaggZJmmvDhfAaNfbH1anc3Qx5vbCvVWJZwCpPbQpiqSdKo1QyJViA7KN8W4qcdTMJw4P5oSUUUE",
  "key13": "f7JtDS5Ji7WiQLDgXdZxmniusmZLKR6aKR6Qzqau65WU9E2E9FpUwGBhrVw2WgYg2H6vb4G72b2sW9LsfXJUd77",
  "key14": "55Pex3To6XBHpL5XWBCeeHvihPiZ2So4waher8mnw7wkrBG2mkYFozRs2R2FLTP5aB3tfujgby1LWKAsWvbyguZJ",
  "key15": "4VDbSF6L3vcB4eWBxE3b5QaKFHhkzWhUYiQYv2hm7UZ7754x6gAGMJKVagpXZgpESYAdpzsp8oTUbpcwPuJ5BQKf",
  "key16": "59iXp2khs4Yu3khjEX1aqWn2xkkvoieD4wPM7epuHVBF32xFntm213YzLdSEG2zYF52aiwa7TKqkbdghi65iRLMc",
  "key17": "4odBcrVZ7138p4RKbkRu34x7AQ6BTRkwudpUHegDCUQGzojqHkhaBptSXSk9coPfDuxiQCiK7HiJjgcdSun1mnRW",
  "key18": "5DNWLrmKSTfYTUp3iomHaBeE8DdiJedVceB36cZG1DNb3EN3rG5ciQcvQC4TDh3TydE8uWWWfBsnE9TctaAXtDUV",
  "key19": "45SR6xmBmR9CpbH1XSAXg6ntbuoRPLMKrE26ogF5UuDgRuCRC1Zbfa39fshuuheGfJMsEkfZiyz7Ur5tpaBE9mKm",
  "key20": "2AA1couL5xpbosyroTU2Y2uaM1s7GMntgzgvPy5syRoH7p2nQ3bBBYtcJBjsK3KiXpGYv8xxiwsAkP3w8SKFooed",
  "key21": "3CBWLzk71KuHojVVi32jCWsH4LjoztMZk3MRiHkq8p4ZKkyibPUPgCYDDTDh1AbMPBnE7P6ri2d7V9cSaf8tdLHB",
  "key22": "5dDbD3QxBaWEybkU25WNiy9koanX5ipRCzzMaqbs8kSXfzSEwhK2KVeVeGJFfwuTQuPuwQP61GgaUAB6FNXUScaz",
  "key23": "3ZyPySdX2TVVWPY3GSUxZeJGdjNVsxLG1p78QSxxiS5tQDjZm88ZisGtVHzaJUmf96nLhNFv4WzJGRDu1ARr7x1H",
  "key24": "4nmVidFyxTsMJVkJg6y6LeBZ4hcnHWiZnhEAjZzSRcnpWmo9ciszZMjB4Y3kdbcCd3dhEZQ7S8FacabvVxWQZQ9B",
  "key25": "5gdfEqehUZtvixdwTiNMh71NzoRi7D6uaZPBuqeCy6FJTFp8hTNrhY3BChVvGB4RbRhAW6iYL8eZEsAREzQrJvpH",
  "key26": "56WS5ACURvLdfbsw7aZSoJoT3rkuCyLy1ria2iz4WecLMRdoXafopeRndssgbxd6oFk9nrvzx5nKjRG8unhMbwu5",
  "key27": "4yvZ1viGLLuWUPGNFU9TPTpJ8ymTt32kEVavPuPukCrtYyAA7fZAa4AS7ioyLrd1AWVh1RwtZiX4Qn7euCyzmJHw",
  "key28": "5jnpUFGpwEgA5KrJ1Gu4uJoR8pPk7mZ1aCuYCmb1gjPSY26qR7S4YgqZtXDtZGxAT3QhPMXBrxmH9XquewiZAjxQ",
  "key29": "5Vmq5q3UnFrGnFBxddC2Dsee5mZRGWxUqvrxxa5YM5uPdjPbWiA1Df3ZbnvNTEfehmsaZXuS1XzpKBJ8qMBxkmF6",
  "key30": "5Kj1q4Y3vs2Pe7dvHoZshG2SYm6EZ6brP7qWJCkzdYLcdo6z3sF4SUUpbSWMTbBmAjmVHe5gEfN26xTEqFu7nYEn",
  "key31": "3A46ZUvyXMNYKFLzKWN3wf1ZoqPkSJtStagQrHC3kLZni6BNnbJYkifYcuNoaaQeEigexHM73Tte6NVdx6Z8MTfe",
  "key32": "4CtwmKn5uTD7ceAHKotw4CtkcaahsPq6yxuWzYytnnmu61QPhoY5HfY1jASwBuNbqq8NTyiY1HyFEDV7BDZkstkG",
  "key33": "9QnaGkn8mcYMJH6zhCDUExeF5qB3hkFSYb4RKchCKX359ZsjTjX4R741JwQcuoRsRt5g5FcoEejRqWtJevHmVPN",
  "key34": "3xuMxUaapbVhgvkeX7BhyMnSKDr558BfPzmV8vqk6ZwS6KnUHPLFL1d8LqMbXe8riRmWCau4XW5y21aybY4sscmS",
  "key35": "36yijd2XoSNGTq4kBkwBPqzb7iQ6KNAkziSJCxXbUQsFjKACqEdThsyJqVYrQXSQGuQ3DnYHTuMg798NkHEWYubP",
  "key36": "4cTgZstRjJYHFrK6kYK1fd7VAeHVDCFMb42nQiqWF8SJAvztc4ZAtwFUnN28WXx5Z9rZpBPjdRojuy4afnC7JLhD",
  "key37": "3gzdSMrUbDXmCn2jeVeX5aBiHRhFRaG6ytsXCvX4TuLD1wtoVLCMF6eQ3sfDvbfHP6hQJMZ89RrY7zTcVPp9v41k"
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
