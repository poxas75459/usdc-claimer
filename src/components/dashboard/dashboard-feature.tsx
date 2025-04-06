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
    "3gqSySoRkHceZ2MgmEFPbThFznLCE9LQphrPG76gSb5p2vPWvS2ZpjA3kSmjVGvdirv37quunqihfTeLZhZivcRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H7g3akk8Wse6Psq29FMERbeAB23sbt1m9Z3kDVvtQTBh6e6xgc3HmzjdoqtuGmkgCLdzKaRGQdSZN8DDPZMVh81",
  "key1": "4MXLWeURdraH2oB8cRAfEXY5cXCPQfy8zLkCSdvYF44eeF2rxeH8hD1vn9oMMvQr4VLwjcuvHTRCQEHdYDN8fbV2",
  "key2": "mcdDktatsDqFKtJBGskAxeeKGg6WUaR4bdBvJWyKFWqyEBbMPRkn2yWTXiLxewGZWjKm8mAZsF2d1UPVBVqM8vP",
  "key3": "3rPdWfLR57nh8KYLgavzWerVg9Rgg72fWEjypZDBHB9j51NTwNV8dvMYRnsaXB5NmvwhQfD9mh2CPcyycNxmanWG",
  "key4": "2xcXuzRC3DtaEdMtECNqECwFsnBNNa7fJD2486Kmqvk6cz8Yd5T6w2sNQt5N1FQxxapmXSfb1Wn9Bi9QaXfEoRMC",
  "key5": "5tnQkNXFuX3EwtgB3TiNo3wb6RFS6viPrxEPgw5RtuDJozmEngypT9NTrQH2w1Hp5bA3jezzzwGsFFUQeNf5Jcz9",
  "key6": "3W2sy3usUeUCAoLNXvRr1bbNJvP35Gj4BmnQNqrAHZdm24VbrkSeqKo8WdPT9ArLCwaoMAtpyiixSq1Yng2gVAZz",
  "key7": "4x8pyqr9TJaaRSzsBmojtMAJxXdJ9KXrDrbMgBTqPWWL7TBH3LBGuGhGHSzuvu94WFqXtxBF1hhu7XhskG81EB8E",
  "key8": "5vZM2b1zmekT12A2fsFG4H3vA9mBDi197k5jvFAcxVPfo8rNpCyEgJ1toHYPHtoLNq9cXtFF5RRvf97dWVniVnsC",
  "key9": "4cB5u8k8f9NgYSRuW9SibNbt2BLAaLZ3T8QqP99K4JQbVevm7Pw9cvM6cBkkjno4ayATwH5ZZ6EL9UWLhYaws81Z",
  "key10": "2Tu2cDWbd1KUBs1QqWHywJKPCDnzNhX4WF2wRTdvquGBUnwb4wSuEYscoyhmNdWVXiD9b3gDZLqwJFPQWAwzTt5j",
  "key11": "3aB4ssiUkYmojWBXYX2QGwEU2pNXjq2grCHSvkvxTXSTdf9ZyzZa5zheMHUfjupUp9WBkGh5ZcJQLSSZpVLM74wr",
  "key12": "NNBdiF8yEBy8FSseGjfCT3xHrdXsK9orYYirod8GerVrmsneWS1kobRbfsNKS6Hq7dzC2Er9T7AmPszmMv2D1re",
  "key13": "3UPJNDWN6WudR85h2LnFU6bt31n75tApt5P6jPMumnqBmfc5rGqjxPUq7ykeRzhrUwX55wbMZB7xuB4hi9bivK9x",
  "key14": "25yXgb4Zgi4st7E9SvuwYx5DqcTc7caXApry7xxoLx3e7uY8U3bw6KWu9Q9EBTs5tckH4nUx5VXC17E6LSmPrBdy",
  "key15": "jSNCdHvBewuurMqCy737oFiYhAMcqKJVcqv6xtez8TtHhfWnFEBbWayBmZR9eW8Z5eptoyRYshuxhE65qEdYeZZ",
  "key16": "2BrWKaoouwLJapcduPkvqwvdLy2wxgxT7jxuwRGHd8SLyMKXQCS3jYFNCznxu7Pz95bS1bRLL3ei3Ka2DB5PJ6QC",
  "key17": "4s6h3LqhDBt5NTY6jQuxb8gFY1GiTLCcKFfQr4Sn4gATzs4AeTdD1h25PgpZRMDHr8cV7eXH8DueT8kVBwfUTF6n",
  "key18": "5NC5NQbds4ntNj9WvxNLkTeFFHhvfYPrrF8H8nUDQTwGip8kS72wRNeDjdHFzdxY7u3wcMPNdREYsVsLsLQfWJm2",
  "key19": "3asqBfb1Wgtc9gyg1JqcPLVsmLPDKU9YjBCn438rTWZ3qn3EE3JCCNWVJVDCFAkPB3igHiuctPUovdZKYj1jNmzm",
  "key20": "5DQKDH1KfvC6NEC29NMJhHUQkpGyie4uKWzEZ5UfZPEjq7KBdByiLTLYYS2hpzoU1D8e4mgih396wqG7EceyDfLj",
  "key21": "HEHHTnfVBM22HG49afSW93oFbNVmXz5SsMd7kJbWdjjJWbQKpVBUPUKA9Tsb5onkkUsZZPMb2U7Pq7YMxx9kNVV",
  "key22": "m43J9rK8AbQZrcJuncNqhwaXSbLPms8uGSejUH9i3mmFDAfzTvwMPEaCsucrSrCnv4tDNMVaSFYpWPyiGcKQ71q",
  "key23": "2c7NVFiJMjwKC5gkcMTqcGTKcRVTzKNiigbFVEGiXe5LkmnM2J9nF5yqVTZqrJr93QRgrLYiT3Fq3xJBzHnTU3J4",
  "key24": "4g2Sw5b5d1YYtnw34LLsenM4S195ZAQwf4CnLs2AcDVWBbHQ2dP4x8tkd6oHY2Yio4Anmr43qNNznd5WZKcn18FY",
  "key25": "31DinmomE3aBE3yQ95ZVHLyYzQDT1KWDkHA52s5bDTnhbXNMnjXFhwv4fquKSpVZ5Spn7SkZZWhyrWvdLUBVZfr",
  "key26": "21DVeZzJXLPnQGAg9Vg8yh4f2suFc88Spnz9vANmfw7i6GtKeeRi2CQuVnfGiJv7AFQFVHcJZch6pRrdkjrXeXNc",
  "key27": "43AnPSFnNVFmXBAaGhrtepUiXTGVBT6WyYc94Wok8PvDmYhdWvG9TD6Ah7b9BXuxgoJm7EfBdH8q58NZpgCTJqNu",
  "key28": "FVxSCE3CAsgFSsVgUvpM6kgAWiMuzfXGjkQpBBqoEW9DLc8TQ3YdQJuHKX1HDkQ7Vi8PpXDmarRyiekaZTiJCwm",
  "key29": "46EpdzSvfTgWCw26kXLeH5YFvQEtTWHVLmBK67DpG4diHcRZebWrE5gW4g1um6PXHAgRbGM29ZtTC615GWdR5SnD",
  "key30": "3fRypJXFKqRESfS2riimLVCV7R2d7fR6euSSQRrK13RNTHfhw8eXtt9UnikpPbsseAufFovwxae5uxUMFQrutA9h",
  "key31": "12781mjjRC4f4hVEqKeC2Ho1vfiGCTeQaGYFtVvtkYoWz1J3S21oGJxHWdYqSCnY2HP2VYo7rbtgeEBqHGN2g8PX",
  "key32": "43YnLD4GWH4rKGb9MS5LK3m5UhA6GzbyguZDyoFBmydyr76Li7uhkBq7zkGhrE9bmREjie5XCqZfDPc72ekRQecy",
  "key33": "5fgSqHibKvK2si9qWB4p7p6tzgHaQ4PyFratEy26pfNpueHFno74D1a9SBngzRnNYU1RWFKDg3ths52bFncCASup",
  "key34": "4qV83Q6NX6gUYgpua3bRxCaaNcRDD34TaK159L5aUPu5tLXGshrQS3WhPwbEUxLF8JAnE3aJknxuXbCiXiaGTCVv",
  "key35": "PwcpHwjHGWxoQ6RMkvALdmRS242cg5G7qoBVkr6KJBThCgkYGnWieR8n98GzAxHxtBkJR138KSzToeXdeDgF6BR",
  "key36": "jPovwH9dyQvLA7N8aQj6JqW7e7ZJCWDnMS1yLGbgrzoyQprbHjokrWhouP46fUfutuhTUmpkm6DaCCt5HToGVg1",
  "key37": "2nuLSmHTbhP6ZGp225owrTP5YdeP8UyaXU4rjCSRPNZhdL2XyyJ5eeCdGSuv9P4GkenpX69sjVfhsoff7mDQ57jN"
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
