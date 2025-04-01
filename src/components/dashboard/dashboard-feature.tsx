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
    "2GsGcETMSGfs2GdZS1s3yTrLSJzMxMHZ4YqTfbPG5FbwMybz3CTNDeedhwVrLnxEGNADZisUa84dsDkTBUEz1toT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JGuB2x6GdkqPpn31u6JcA184juNeAGqCbD3yhNNXETChaovdhy5Bg2V6hh2qZW3Yo77hBdTrhjZXXZgpujkqtNq",
  "key1": "4pffczJh26EU1Wdt3X2fgM7499fxDPDHFTioHTGieZrmSxk4EzYKSWnfk58Ku1WRN9igc2S51KdcqEgAj9T9sZjW",
  "key2": "5PJ7eCNKeToYyvmxGrstn69ZCBNqSncgXDUudV5Qzev5kEQH3mrZ2cpuYfhQfG65HsKtt3af3Y6kdL1km2eTiKFJ",
  "key3": "4FcnPfzEFPHisq2wLaew1JzXTks558fFCSXoHdZnV2gP38Bqp5q1j9D1fSSvhWjDdbMKvb8hK9ZGLp2dj6zm2a9q",
  "key4": "3XbuZhSpbMeaarS1Nn1hppC75d8Xxt29VgXWXTEKXHEHLt8Fp4W28DWiogxdSZBkj82ydayW8PuU9ASyYMw6hN1u",
  "key5": "5e5LjJ5ALrLkPmtcKz1VhNupaTLgsm2YkZNZ6wiKHk94v7kRUsAzs2k9fPzmCB8KceCrEudCeFsgoXpDhi5bcfKw",
  "key6": "oKjiweBwUwnWfS6hBgeqxtXfEVqaQ6yVNe6TKgb7whWD5wLHmsBHq2JrTVPmvVNPfwGF7A9AMZQAc2ec2ghbyLL",
  "key7": "43pitBHCGzKJLhKoyu2PKEtqbFcfM9q7qcPyZzUnUu4BegegWCdnzVAto8LxUyeVhr97bQRSjg1wtHKJdsyaaExc",
  "key8": "52sLtymNThtngsxbB9giANbqnUmoGsvcM99CN2qbr3a4FfEmTaAsqmPhTNHA6hQPBeKqrUQh3Z82YreQw8ovWKhx",
  "key9": "jZVs9XvjN8RZeQNbjVYLqrqWHoQGbGSiTGrbxDTj3j4sx9pH99vg6fSc7fcWLvtbLKG9LY9Rn37E7Mhi8sCHWHh",
  "key10": "3EPRuFrfHwZyc1D9woQPB6pADYGVDvgkMqc69JumSw7Th6tzh1LnMjc19xmUgDypKK7LtjTBrRQURHaTJLapMsRh",
  "key11": "2zrgrBEWaje7oVLtngEDVmRcE6cXgHBGge7yPygVu2u7umZb3UE1KvNLaz2JrHHafqrZxqY4nuF3mkJo81KB6nuB",
  "key12": "3Fev8TarD7FfjKEs5G2oY69FH83howRaAS35i6e5jMQrnT3pK2xR55TC6CbhTeab2iE9XSZSNJLHLde8BDXJLxpz",
  "key13": "5DQMMabEvMHEVjtrU5VxjuEW7DiVbkqo1C6BZumXcMczSpyeWgxaYh5vCfFRQJG1vyz7FjqumbjDpfHyAJWVJvjB",
  "key14": "2sCEtRhoW3XK4Bhy4jryGQZJ9KYzVapYwk7DQexUUt4UeDLpeXpNWEDLEtutJJiviF6YxJXqyfYf11pwjauXXbZj",
  "key15": "4sFBs3kw9gvR1g99UhHhdwvJWJcNPuq48fRRS9NWcUJBF5L6W8BQDUdZudBMWEUfGrX1FomG2moySbtg8B3fD4RR",
  "key16": "5FtTwfYWwFcYHXjWPgqausf5Ndcs8PZqtjtZDk9ApcnwsWCvtrb4MPSgYyNuJQFYJjb4rZ6BwPYd52462KF2j4Wc",
  "key17": "4VvXX9pb5Dh88RjZg6HZgazEEupYqnHHSMuth6RAM7Q1g1Tzfqh2WN18Bes9yugYDy2XLZ2PDCsihEQFmtmCyB1Q",
  "key18": "43UodEkxeQY3FTkzcDDAhiHu2CXK1yoaukPFehRrFATsYrc7euCmBhpTfQ6SJmr4tQcCZEDxeQczGybQzBiYdt7t",
  "key19": "3rLvvTWYW1aviWrUzebmwp7DT5ucoVBCCS24KsnsGvWcgWzwtUdpqyEPxcSNAJ4zoJ1HUSLaRJBxiqprfJELWU1a",
  "key20": "2UXWVyxj6z5k6ZQ9SeBGebVMhwMfXAkwcaLSdyjsVeNnrLFQTPmpu9j6ydr47iSNmLfnzvodd7m3LQwWHc4LVf5f",
  "key21": "31REbShJz9o1oa6z5AN6KxbXaqNRFA54us23UdTX9mnki8t3tsKyR15s4Km9fBFhVfV9VTyxRyCFKKmZkNNgj95V",
  "key22": "4uLNKPfWRgumMsEcnDQQVoQDcMa6zmkKEvFhppkXTUvWcw9uDfYYzTKoS9P2Dnj2XqdVicEt1iKmrvZmQu94Dfpy",
  "key23": "4rpkkdrY5BxRvgRq3YsPmNaFdGUGHExH6BU9NQQTuVnXLMvCbeLLenGxc4FJrRLTsoMNmbF7LaW6djasvUxQwKGm",
  "key24": "3mR13ANiHQ84JGa3cdgMs2QPdsipR7Hswu72Zry7uRTLfb9nR4yLrfpwUHufCUQ88X4cFSGcNPkDLTnwLqtgt4kq"
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
