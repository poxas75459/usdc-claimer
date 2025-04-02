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
    "5gPVEWcbYYV7BJJVYbSqY94JPQ5HdRHoySJVcANm33sT3i91tMBoigWRfECPkhqkooJyyqfHxPayeLxVB1MiiuYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bKK2UKXt9ES7CuyDoPfkiq5T2B8BC8rusB92qpUa1bJcf4hf6HrxTJ2qv2XaDwXnG378qUrqxVQgodc7ezQ5qp5",
  "key1": "3NvScdwPp98gTa5JG23U3PstyCZgMtvqspNSqmunjBG1v1ZuWHSD6RaVtSBScb2kfnGzNQweP1FcML8Kx3QQfbmk",
  "key2": "Vvng4a7UL4MmxX8B8YNMYyBuWZ6vPQP3JZVDBpKxxXNcC6EVPkDP6EKMRLo7BVMKQCGNZELPQaKLMdoVL4M8Z71",
  "key3": "3xZpu8qSw2mYex95YyD1BGmWAqWwaTveBhd3miL98DNkPBbX6eg2b6UTC2EiaSZMHRfaw2edRvwT3yVRd7SgWXcH",
  "key4": "2wChrQeMUxfZCx8mNw4QDWXpanjVNrXBJmtbTvcWrpPgkosjJAvhg61srBKEb1FEHYFVzEZatYhRH9m3yFH2bWuf",
  "key5": "MaAK5cezajQgyYi82cuPbUNtCTAvfYjpyWBzhEUtkX6QQGiYrAgejTRWnZDowFPWnwZuP2D5bxHeertRPFVNgL9",
  "key6": "2DMBCRZ4RHGMerUW2gyXaQkRKgX1PuQjs7X34WCoCpav3ZB4ikxdHzC59ipaQqCLcHop46z9MARH3tm8R6wy5jLX",
  "key7": "scgShCT8frrZWm631EhwwKMZJVedQ1DdpJgLVJt3vLfHH9TLjsfFfDwGuzHvAbMQgmghFnSKoFar7SCX9wjJWJN",
  "key8": "aLJ4cFzEk2KQXbwuCwNAsvy27ghvu5j6W3KL4FgY5pcp3GWQCvejWVygZnJdiPQt9AJw3bjjApcW3EdfcFDGkQ8",
  "key9": "3eKsxGPjtdJ5wrs5Y3uoFtciKsodR2JFYPdisCATznGiWUXsAUxSos2cdoo8xpbcmnjTtUkkoyypxhr7ehk5rNBU",
  "key10": "4Mdm2EouZkmjoknYokg12rqMUx4FQPaff39LniKCoWCKc9h6BPw7kMgzTdE84TBvdtDEejkhnWQfAZYN9ZHu4YYN",
  "key11": "5cBWDRbpw3a2Rk3ySjMibRNsnm9fLswEG1GZMRbLXQDqTvARVW6voNKKzdohk8omhTcYmHaNNXNVpEj64odYXyXn",
  "key12": "5Fu11jWXgYPUBjV2ND7fT4dMJ1XSWJYUu3AbCqt9eZBoiovea5NrBP3zxKGUL3E7E1EjqsmKGaJFrZ6HcDaxfcDU",
  "key13": "4MrCdRDDHuZNK2S3vC77SBhJ88VnMteViGHgEdEphPN5iqpJ4Uw3AA1LudijosnaykECQCzRrLejhWUjZeMCwLTf",
  "key14": "4ZzVzogT5hMvQe7i75HA6vQQUHNyvqKmnyAbfqK2tPX5eCYq76T75LRoUh4QS6CAgHgdnnYLDFgZmqprWZqc9bun",
  "key15": "ckRWjSy2C5DepZWghFbaomsJd5eX7ALm2TJTWwoq1q8rVoZB38M5ifFiPo1bU7mjc3sdnjsQ4etgL6jcbaibmZg",
  "key16": "25PQT448eyvcf5RzKUFNBnBgzTXcYmXbqsGHC2bka2BcZxER1w4D31ZEEx6xRTk13XuQcUnnkKRszk3arcYvRhSc",
  "key17": "2uLWJKDNVfNpimuMzW8Xwt4B8c1p7QajpuRYJi1eq3W5bfbvUT62RLtp5e9zBxToX7ruwhHLbDnjqni9ZFDR8LyZ",
  "key18": "4Xn5Lcfs6Dduk3bhydeycp6fJoYUkK8mQQMX33jmcU7AhBm9ombcpiUknusA23QjHi48bcCkMX2KiTvTWxc1rJK3",
  "key19": "3oyvLeFyFYdvAcJiNofojmm9SH2jWPHA9hwpgiv1ECm4mb9mHFZcERA75z9BbncRBUuhnEyY6cVkNmtRMwHYVwed",
  "key20": "46dQjgjmswaMjN4nEvUYKoxJwWPueX95EMqWy2HhBJDnrF2pWeyNAreWUCGHF12mZ724Pqe2k8qZNAb98yc83Sbk",
  "key21": "3icyQVR8cfgdvvp5ZKwdXL9m1ikqV6o36APrc8qP6cWSCEi4iRUgaSzkabcGpAgNretFzwecxTyB1AkVm3mV89Mp",
  "key22": "2dj8c1Lj6SvPffYj1DmQ43CbbskK8UDbtWmt5odwGQQSm4uxonf4r3BqsxXjkPJuKgXKmp6JWskQBv9cq1anLCak",
  "key23": "uwL9FTiHmDGmWr48WhoHtnLEQwhUFDi2dCgELC7UspL1QvfsKPkhzccsZgw2uBn8tj75enTVRPRVVQFdf5jEHAu",
  "key24": "2pKKxaQAYdE52qrmdq6Dpk91n7E1cqSXRqRhrbYN8iupKm4wVpAGjQxqfiTbwCAdys1JJuaMENXcLGKAoS86a7H9",
  "key25": "4GyriRi1uffmxdFhju7UzWKLLYU2TotHJy7suaaHy4dFAr8kFSumryGkhSgRDED3mGUyhsmkxhHHqVTwVMNpQN93",
  "key26": "3dZASpf1xR99GeDGbVhhKTeLYPD35b6q269ZdbX5d721UQhSQzgMpsBzC6XD1gG7Ms6FSmWU9vgQRuL2ntwCFHFc"
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
