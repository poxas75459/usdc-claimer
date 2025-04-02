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
    "5kmBoDrzXTnpMFgrCMdnfTLEZHCv75qMFo8b3e8U1Naxiwgzmg9i5uoXVurqzJfpn5KLetkyvpo3tzXgUtB2DChW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P1yRA19yoFzKCzsBB3FeS3xr3ywzgWb7vSdTSav5Db5D5Guya85QxjSqModN5AHMkPchCBRnX7PAv3yz8EUaotz",
  "key1": "52WUPkLTJT5zcGoyu21VgVi6LA5wFUCwN1r8HwXahZffvHpKWEBNB9m6ZRNNyKuKg8bDLoD3VFFs6XQLK3bysNw6",
  "key2": "2hGJDzxtDr4cCPGg3KudgTaCJgd865BpTZo951mb4wbAnqqkAXefxzZQ3vt2v6yB4EJVQhxgun5DwZhcGjiHSAUs",
  "key3": "4suJMfdGKN1DDLsrmgpySPFWnpedCsGLKgU1qKbzAn1rBkB6haYWMxq6GhALt4G6cQivo4cdbkWHayfvdXUGySBE",
  "key4": "5PNoqt7AMK2MHnCngbNi2pmbejtPNvr9XbWR2QApwKyE3Z7hzxCgXiaAKQ4UL8E7vr5nwKH1foSg567mmUgkLmML",
  "key5": "3Ngp6AosVXQdRBX8KJzjRUpnrDe6yp6p2C8S45CFZ4SLoLxv8BVWgE1kcuKQWjiDVBcsNm5m7asmmdcJRt2they4",
  "key6": "2U2NxNN6zX3TrrcXXvDSJKv6ifDRfe3Gxhdufr5D7MC3BicDjevK79N4odZ6Jcrg4AKHBQcjXLAAZmJTEwdaRU3U",
  "key7": "4ACS2XWPmsXXmREPxfPVYudwqurzfZ6scQfkpgsqctmufvkZznMTUbG8xGV8jvpVKeZUohVduDgrBGDE9NMVJkHf",
  "key8": "4K2LsX9xw6StDdpgDFHduuDm68sC1NdixkDyo1SoJ6fdR7m4DGBincix8SkGMmWGUcYMbMV7ifemVsAwCsHhpdMp",
  "key9": "4YLheFBormPoatDZx96YfLFEhqi1rkfGxSBZxhdJrBKbPioqe2bC3G9Megkdj12SPwhb8nbgayakgJVn3yq9Zs7m",
  "key10": "5pajvP9u3BqE82Xwzwg2uzXsuovg2C6WYt7jvgTSQoQT6TmvANByWEx6vCqNv7y9NWe8ZWVz7bsEZGKUtpLPsxn3",
  "key11": "2Ua3mTYXP11czYHzJKkZYWFHVVUFQUWCBcR9Hta6nLq7kpLh22JMqMN1MaacsoVQ2Nmx9TWM2cDpFcLD6WhaxwAr",
  "key12": "5cfkVZyjSvk8BV8wEi9MWqcC2TVxDu5C6MvHX68rRMMDuoMDGj5YxbDRYyiXkQwkyYxC4pn425mAwtDf9a2MzDbp",
  "key13": "5DLnfDNRRP18AuWSWudEYvNNuNtybsAFsL7YGwnv9zDk5k2kMEHECEQ8AUj6hyqC7WS32FsWMcxviF8q5h5hyFqg",
  "key14": "4cZzSefiLHMeGbtfPgyqxNrdQ72RYDvGWW3fpF8cXrtb2MJgonGJbpfgmvngPiZegVqVx7pd15MfvNzeaV7dnUum",
  "key15": "4CSU4N2FJezkW6x5xL8sXGzQV3dB9LA1t7ertZhiknz8kndQfghqs8uyYHR59FL4Wz1qEFVpPvcy7fNpuNYkEtfm",
  "key16": "4kDYPPWeKAVuwZ2Mfx1niCrv2b9VGCVjnCtYiuHAsRLtz3Zzw8Zdki4ZVy9CwuoGTpMfuhtyUrD5cL9DuSxNzct9",
  "key17": "AmT7XzGdqfLDzFbhQrsKnPJymsjbWqasf3b5aonhQiMHGJEr7GEuLsMhRxadyZQY8mUK1ogyFb14zQyxaASFNij",
  "key18": "3XHZybGm8qnRDqYHfmHHxBmxqdqA1cJz7eRhVsaJv4Qj91fwF8Cgc3EvZjm3Y3HaGvzd2TBPX1DdoMaryME42Coo",
  "key19": "4NzvM9FgH9Ku1gn5fEAv7esUnHfZ89FKQmXJuKPrTWzk8KGZspr6CWKSyNbYqZ4tagmWpWjV8EySY5FpoeVYvwk9",
  "key20": "5NtWhCanhgkqvWZQovnQyDLuaLxijHxq7Mg7aa4rit4P81ph28SKT2K4mLW19DV6Q8qfQQxV37MEAbEsYZ1ZiovH",
  "key21": "4RcLdNdSTubCUuWnSj6HQvczeNmjmy2L9ebpNvUmhvcaerjU7Qikf5A19FhQqMfi3BLWtiWVEyBqg5uvCMFetSgN",
  "key22": "FYBGAyAdJj4g2zZ9J8w39eyRPC6Y59RnZDGHbetJ6NicoFstkrBxwFeEDZSYqJmJH7DfRYs9xEHTGweYnRptjeH",
  "key23": "3LmFJY88sCBBW1UnUXtobbGBK6JeGGWrL992fvLMEoPcLtNPtpSfKHDcXDaHuUV7Jk6bQfzSG5KttgMtrNZQD5QF",
  "key24": "QYPidkNsKunWsLe9WUiBTBmZiFiFkfwgB5WWn1yo6bwzZkG4gbzCx5yExgRRUBryWjY1DN3EcmhnHGk1mcetD56",
  "key25": "5Wb79GP4SeztZX9j4xLeq9MAnUPp4rBm7wPFu1vrStwSL2Lad2vMABVVbLrwStY1c8rzDAWtGdvt3SUyyLDR2YDT",
  "key26": "4umSNKyZjsXXQYeQdjmDi8Snrng6DxbaoVHMH5WzVbT2cx958e83qPPtdF1hV1gCSPeyE1CdtKzYUUAC43nQhB8h",
  "key27": "PFipGUnJA6LDXWP48UJDAt25NCqYqWrzh8cciSx5mfhLycuFKbrmwcYSifxjP7RWvAy3LDqt6tABSQmTcUZks9d",
  "key28": "3aqhFZYrtuynPYQKeYLFtpkBNsTyouGYs2FpzJ69zi6ex2Ad4Wqxu2iaQatsAHCLeMUfcH8QHYmnSAwzbJ1vzPft"
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
