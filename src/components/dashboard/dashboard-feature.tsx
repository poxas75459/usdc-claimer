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
    "4nXsn7xgduxcQxXo2KDuigiW78sX9uesnWGYP9kcYCDVbpyzh2ELUGFvXS7qbVQjUWtuK1MH7cQP5qZnGUPAuQaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SLTHkDyinLDpwUyuonCfseACK2MyRvyEexkNpNxt2S678SYjGBFkRBFQ8uHzeRggV5awRbZeLHZ1S4z27AufADX",
  "key1": "3NGbiUgHWxv4iWRshF6Ba6rgppXCNHALv8UoNtp17fLXxnfmfegw9tMfbEPuzKFMVFTFmCa3tzAkYUAQA9H5XjE9",
  "key2": "2rFVNRtGtVdZ968qd2kDoSuVdyGVcrr2x4WWT6jVWMuUcdExysYg7zbQfZ7NULTv2rXLFR5QoorSVA4vVG11ig58",
  "key3": "2RHkjwhLAUNsxEwqt39YMLx1dXeUv7FoysZbpaUk9Fcy3CYq9GNECUMyYcf9aZzcfw77xnX6wk14UeVAYV3PC5Cb",
  "key4": "2UsJNVP6C8kfnDSr3DeNQRdSHcN7oYUnqgd1wqdZe3KExCQpVMXhuPiieFqL4AsZU9fCyLJbD6ZnVZ2PCa4smuRt",
  "key5": "5CJwrF1jvELKFpScHLNCt6W7MmZB2PQ5YMPUPmY77CXKX2mXgk6HXZLw1eC4xfM5Ju7WbXeiwaVax8NREkTthfh7",
  "key6": "3GA2RE7JRgkq4k8S3qGvKiQhPCPaqR7SbHReLVfwvQSr5jKXNE2MUWYZivBW4vxShTv1aZggss6ZzMNVcfZd8KR5",
  "key7": "3kCs5MwkaEamvCgDDkha4srKFsiVVcx8qLsHhy26bjRibxSjhtqYtbUC7HZPcYac2FH3kJKqjzdtPK9uT4GhTps5",
  "key8": "9oj83p6fGv26K1Z8jjpATA5ou9aykYqVZmsMACNWrfk9NkBYX3Fup9rgHLci8oGZfnDRUATSxEhogms2Dnh7yDm",
  "key9": "3121kTh3fivgxNZJMorjHukAqL3mRS6a3FUzYJ4KBeDQTTJpaQDJtJVbHxyycvWjG65QkiT1obgcuZGSo7Z9eF7W",
  "key10": "4XYEL63S9h6o6BNVxquepCmhoBSsvEKobRANePQkRAka8G4vUsVWD6rpyn9SXzm4jeTifS7eKrydV6mjAtwhgZUA",
  "key11": "3XkX6B1o6riR21x1A5SpbjRbJGXn2ihZWWv42kJGtnVszNHvLz651p9ukncSekHoza4yVQgotWbLMzbbVLVMzwoA",
  "key12": "5wBXoZ8xPaS7sU4quYJG53irGiqRmgRH2EV2p55XGvSBsdALSYwaazV26yR2UwEvD6ajeV4UMJkqrZQn6SfW1kMp",
  "key13": "2MohyKUeQnTxKxHBJUS1Y4CBuFVgbM9ah8X2vTMQZYDqHtZaEJEyoMRoKCihKXdJX14uTUXKFJcDCdt8vZjoczjt",
  "key14": "2Tc4Us1GFwHAMtrCnkJZi2W4Y1dCiwjnYGeZfKCgdAvNi85meALBbRZDmCUVsJ2S43H4rBkPnX6GtXoomvnweFK",
  "key15": "Yn1GA4wEfU8bYB6EyhPDBpngwhKrcxgYsJ36NPALH6KCMjq1GBRUC9PEt55zBsNkVERkrVCNmRsScaaTWHtqvwV",
  "key16": "33V7hScMSykL1gtX5ZmVLbAJJNs97D8tH3vxCYUfJ1c5T8hU36g52m2ma34jPFvYgemVo5oQuZxWfqVjhpmp1yVq",
  "key17": "2ANQGwbprqRa8GcJTjgDRCEynTuTTdWhYmQPCjnS8EPRXAbkk7RMmoacyPSQHW6hDUdwr9drx8tAwub6eF5kBmL9",
  "key18": "4gHdNZifMpgGs7ruAbkkKU3dzwvrbfjfeM2PSLwB1ve6pMbu7vqpnVK3SiMQsFLcv4uFBZSbM5CzwjhucxgzFFDd",
  "key19": "4pftUZfZ1S6KLEQ8gLgcLhgG79Pd1GCKSyTGc81xpZs5bGNxSPLi3onhrU55tU3ywJBFpNQaoc5EwS7yAUdC5qX9",
  "key20": "4RXe1sFFTRtEYrMjCkonVxkQku7vetZwbz4Z6UNnwkQtA3Z4hAACCgj5hvC4jyCPKmJBPgmd5NTzK137NuYGFiX9",
  "key21": "2mFsAg4HfmQ4ger3DFioJNGEwrSBvcvqqmTY8N2zieEh6jzS6c8KSYQ28oEgQ1SmfxprXZXhM2bzVBka2og9raGZ",
  "key22": "4AqFh2wgRFaMTvJtXd6wyuniZ9juDEbZwK31r5Syyt8dczPbzgEcbU5bBX2bPRQAaopCyoPKsPfgTEf6ag9Jje5b",
  "key23": "4Kxd9h5DTpAmeiUMzUrCPJWh3zqt3BavYHwRLXLfaFbdjdC1CpjtGbcunY1SqaTcsmYUNFGHR84EHn4ygRfP1sYY",
  "key24": "f9cszgEUK8afbpmFzCzHr48k1HD5Fzq4AjdZahhrVNSdhsiMc3TsTpoMFrqCQ41QTLE9gT39nC4RHAYoRk7U1F7",
  "key25": "5Y5riZeskezqkcTCEbtjFqTs8v3Mr1hsM51t2hCxwJj46Nej5LNxwqdRKPrHocW6xu9328RqPi5HY6bkngwrY7Qr",
  "key26": "2sK3TFVmZyDE94B66GSYhMZXussS3V5nTRJ3LoP8e9pW5pFMBzKthkqmi7NRQBYSuNQYPRx3mM7p98H6qwNbsy8f",
  "key27": "2c9rACDs2VN1NZ6pM7NRvmJajJ9HyCqU3BQbv95rbAAxALmDqaEfFAacifd298XSjvCu52UUDx78qP84FjEcnno3",
  "key28": "5PvGQDEd9TWHSHNxEPghU2dfUR8tEVaZgNX7r2uGSzTCyLXaFaEyofRTb326aB5VGZ5JiXQfEUdPZzpFrD4LHVFP"
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
