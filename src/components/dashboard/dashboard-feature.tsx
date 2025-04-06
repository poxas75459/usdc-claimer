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
    "29FuWZd1GyNi91CmNJHfWGx1JuZaLdwFaVLB7V8s1X2j9uF6PiKgE7fkmzUHMeVzHo3RpgC24bCTzq3BKuTorbvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AHmJ9yY1gZ3NnRrsL5cSwofemu2vKANS7TnamCqhGyU9gpeHZo5kniFxi8mtGs4gXVcqHQN9pUS7hVY9zKx36fi",
  "key1": "Q7hRAUnPfY3u63VFRDC3pgd6yTbKkvna3GgP3oAsQVwyYyktjYja9qvGT3MFtDjWANB1dFxWv5RTouQQrmqZUYn",
  "key2": "3vV31TEvxuFxVReLQhWnmGyY8TSCTHP6592KqvvYRAp65aTrhkoBWXiStUkUSA58PAKFAF4b6LpDy6h9BX63LwTP",
  "key3": "5diAQYZZoECUqy7G2KKGCMN92REU7xyU8T8B74bNP2Gjz8me4G2kJtVHwUP8DuLh6TErB1LjSSXBaNbEDuUtBiDc",
  "key4": "5HrMHfXh6LZ37LLphwS79iWLBicWgqHRsAnxLtpKAcN8NnkxMygrjrd9nzkfksVyPmsdoeMPfMnvBcWFGAMsgctk",
  "key5": "4AS5n1wDd96BFcEq8Sj1PTNYS7QQhnTr8oq8w8QNzQJHjLYk3pyXHd5wxgPfxHqf4uF9TwfYXvjTnv5moFjxusrA",
  "key6": "tv2nFg9DkMH3PXbpUS24xvXCkD22ddKej2PTHN2k1ecgCQVAFc5yrpSejGPj3hsDMtiGkhoiNBo2sQB2J9h4zyw",
  "key7": "eqitRLFodSpAh7AyPYiov9zfL9KCxFttMnWW1iyHkFVmXv74xvn1bhAwZtjtYkrDrC6miJbH5VZxc5s3zxU6hrX",
  "key8": "3749q1JvBg5HMKuVtCWvfRRrBg2rYA6uucjtrKvCk8BCprRFaC7ebZu4zzWC4F8FDfw5h5nLids3nxNtpBDazT4Z",
  "key9": "2nEk2HKxJeBWKMoSzDuLbfHCpE3ehfYZiS57d2sXiKfbMWnDQUqdgLdXUsKvL25X5h6TySaaoCo1j44FmgiBGfLd",
  "key10": "5vztmQ6rsymf2WC29tXya9zC6TK2S9BHWXrRaxBvVru99XvsiCWRUDXbc3r4gfk9YJQdVPTwhXQnwG9mbCYktG62",
  "key11": "2LELppeq1qeHCFuf5jHeYWMavEnovQrkFfHnNTrmPw5JkAyNtdgzTd76Zjg852anwxxDkygcm49uQnZ6Ck2y9SQU",
  "key12": "6zPtRM5sa2REQhHQiPxRk3YBV9uMKopmNzKY9Gt1rAJ7jR9X5RrwBfiqxrGewfhhVoQGTATEgB1NnbgypZwoMJn",
  "key13": "3L7cuK2yBC2e2vQc8rsenxoN7RxwuPsy81FNu3zedJB56BR8U4aCwE1X3saMgC8bCxXG7BNcgENWLBzuKM3sPrki",
  "key14": "62JPFTehf9nn6hTV45R528TzXrEHzkpk2RCuGe5SELsxsUeSkMsgsFmx7FnX9jBtoGU5Vf3nZZSMghFMzhK6wCPy",
  "key15": "4jXUaKaotxCdei2A2cmxsAkC43M2hoDnmcFYi9FpZEroNXwNn1zUJERxG5xw5eS66zxM6i1HL8e9kv4GsuQ7dsTy",
  "key16": "42zP6LsokAZQFdH1ktk6Hook28HAgs3mbehe7MNXTMCo3BKsakV953uo3unjf8yebZu4TtMhahPk7N3FS75HDPGo",
  "key17": "4GRNtBvgpwWNVV7tjcX5tcX8S1ASY1TLXW5mAL9Cvt7cHKRMrnPNJp7eZBWB4vMgKw9NHaWsqHbppjJeMtaBiqyP",
  "key18": "3AjDX8sPZ22U2AZwtxYjvskMQ8t7d6diAWCtPHBeGdHoNHDNRgC3Ytb8TpTDgqjW6vWSgtwxPwzWXtnafaTmpr3B",
  "key19": "5eLQkjMSqVuJioBRKUMttqY2f2u8i3NuLTHNv1smJBoxws6yuxm1dWtKHWLTp4oMuQz2WgsxaPm3X4TPdhpij528",
  "key20": "pNXFRCCzaFQGN4ZwCRXR8JKCXniPUbPNMyspBzMWMSbMg9WmxuXwpnFYhVxptNYnDSWaw7P41AD7FV5dgWYprmm",
  "key21": "4SL2q3CsW1cUqD6DbLaiRMfP7pd3apEmtAiPEQNx3tBwDQrwVC7uab5rseWoWzBBA9WtrybQX28jeEba9XnqMMtk",
  "key22": "3Pq6QhoT9sZVDxCtFCucxyiA7PYdbbDRbJfEzGKm65Z9uGaiRSEzL5a2Lo6QxRW5k9kaPSaGRuMiJTmGM1FgH2ij",
  "key23": "PNikNSHcjVmesipchPu3P4HHy7Njg5DLBQoTD1QwSjtu9oPqECMtZg1yDRJNDor6BAtreoB599KfxWtGA5hedZe",
  "key24": "5U7kqEf8UDQU1LmAiTEp5ExJ988PP5KWFsArcmsMgPAqikoqYGktPk7RW1TVX2fRF3YSXEV2BGbP1xxyEpSqmTCn",
  "key25": "4MrXdNCcn5SWeEe2H2rTAAHGtTxkH8hCjc2DD8t6TphzBZZ6zYyPwmF8zYmLkyYcVUznXTw5twBmRkTr6gdz3pM4"
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
