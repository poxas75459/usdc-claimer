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
    "2sYbgChNwSxpEZvsSyYQaFXYQeBCyd5y6fC383KgTBE1jSv9zcmfYjYZBrCv9xgxyxvWVCz3LqrquDkfTrSLSsNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8kU914B5pv8MtouwHYrSYnbHUtsv21gkAvzJVAdubUAw7PXVXgz2jWDCmyLC863zgAg9v5onrUa15mju175q9xa",
  "key1": "2quWYqmEoCW8Bxumrxzn4mCiHaMjthEgKmSp72cfqTKgmL7XqksFGCRJJZFWzQGQhbsNq58fNYkxg4Vh8nyZEAfj",
  "key2": "2RnjjrdDwZGV1KkTCwAjW7JaPjJQpcPXChPa1bcXfZUWrFbYTS9cqmKmHqzYTUaMAjKjStXwy81PL7Xe5PnubAa6",
  "key3": "5N2Y1cEfQ24tcLoNx3WyQDhiyTg2FK3NvUvCcLMCZypRqwshX3w2xkbtXBeNAuRv56WqNMPeQMPZktdXvbfTbQZw",
  "key4": "jeKrqqSbyrdqELcjemrnawwvDr6VQqYqQy6mqV5MqN3viHhnWrH8coYeEPPS3BK1xnZxuNvM1bgPCaXgQRWLUHg",
  "key5": "4Ba5xu2TK7hxLAWu7c4YQotnHFh8KPkDwYSnkgC8PPNPvehVxRoovEdSzWbgpRcmh4G6HmaNkrkSHv7ZSYF3n7yK",
  "key6": "4MthgExHjpCFKR8FuMDuW6wWfBBZKDEpsjkAfkCfP7zfhsfeNUKM8nUB7Kme5WM9UGcVGacm6rbvi6zkKSjdi68c",
  "key7": "5t89jYHYZUo5Se5hkNmypdCpBQQp4DmY4MfxGxEeVGXFX4wA7Ya7RsyVZnrpSSTn6xr8iS43TreoxyHQjrgHkhQm",
  "key8": "5UAqzin31h19DqjtZbCDqi8qjbQjtWf2eni92QRLJkRJhY7TkrHFk1dAW7gZbNZVBELvUD8ggLL8ayAC9H7aN3ZA",
  "key9": "4zT2DFuCZpfCknA9tfDFvF1pm7pQCYCJAqbrMoDbWqe5PrBvQWDKv9XyL9BKgovsqLojvcBT2CJVas8skA2T6MQA",
  "key10": "46YQANR7fjZ3meffum8qUyyjVbVwge43BqzzY3c2WnbnvuSABy7QBWGihJprbzY8M1J5wXn3m6Zd8FMoNMTUqeGS",
  "key11": "icm9E3mqK56GNvfYqaMoQc8BmS12nTmwinjaPxXX9Rf4Rokv9BeX2g23paGxav6VxyoC6nN4GPAJgt6wVw1Hoho",
  "key12": "GRg7PJsgmRiWDrd4SvWs1by1swmmbKpfYTQghCeVrsHpDCS1vrRQPAD3L1pkGWXeHQ7NeDRDYPzxRc1TVWN1sPK",
  "key13": "3bbX5jsGQw3PVP4PJmKpdkU3Hn82uLqzUFHFSjUqRfHhGx1Dep4PJHTZnqrwMAMkS1ef8fg64FgqW2pj647yRbJm",
  "key14": "42u7CigP2aZNAvR7K23pwT9CWEQffM5VbYxJg1HMbRwDnbg6qmagyQqYHKUesNjqH8mNk8SgcDDUqVk4jES9HUVa",
  "key15": "211NY79HevTd16Edu3GvuUAm29FTwNeiAwHFPd11daMPEZ28M2gftQFo4sa2XxktokdN87KqNJRf8eD9zkTwHfwn",
  "key16": "3smBpN6nF9TaZxJw367HmVDp6mRMAg7qyKBzrypUFuzSBknjzgjCp9xRSxgabrh2j6mNedzDozZBbxkH93oPW44i",
  "key17": "49USyiUogHsQn3H3DoP4DcAUtev1psaFdQLgPEnutrvXG7ibFRRNxwonskF9xLXnTnf437SCZM9sFBrUisLsU1ao",
  "key18": "42qvdE3SjgXrESTmxSQKyFuZBgvEqC71UM4nd1A4d6s5f7B6rd5naJA6MMaUALsjBdCQXcSpyetrepz2DvPooUAU",
  "key19": "78ijHAuuFKJ8fwjtw8XRxdWRZGUa8PXey1zXFUqfREXQUDvbzoisX7qNi6iEsFnxehVojD5edE7YXziA3F9cnQM",
  "key20": "5FPXqoxQ9iZoMsDoqRqriApbeeah7HBAbwkkS29eDHXqMsPZN2XqjFvyExszFCm8HLKvpQpfzuAnruL5NE6M1zqf",
  "key21": "3T6XF4kuD5oGnG88M21cyg1rNgAsDGgM9tkwZgtc3MEM1gMEBuxMxCTJedxoyq54X59LKZKFPpysanP3v8GwMYKL",
  "key22": "26qxSDdH27bG3UxaN18yaNGD1z79sfe57owoyDwksjVXuaxT3SkTHV6cJ6LtTf64mApvWS3gf8hkUoHSGcdrxiyq",
  "key23": "344WJjtTYZZ2RsxrhheL2UC5MgmaRpzg523VmUYNDAEC2rfqe71rZNGp446wGFS1arLzYhhi5suncFQ5Q1AjNihH",
  "key24": "45G6uPieDEBAy6BnwYcQpdD2ddmP7GXt4z4VzroBwoJqTsibUjFyYk1qRKemkEd1BHTDbhGDtmUYCrU7MHEaXep6",
  "key25": "2w4mGZSd5VS5qRdHy5nLEgay9s1ef5DDY4E5nS9RaQiXf2QvMU9rS9D67266XpbpKLnM28BDdXfvfjGN3dPHpiNN"
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
