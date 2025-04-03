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
    "3mLs4w2kKFwL9fBLsSqRgQAxb98tFBBvDJVEtCZdZFfNmrQ8znF2TSKkLz5ZWequDErRbcWEFxKQSmzH1qm9zd3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TiyEWiQFE19ppZa9sPeGA3eZqgrzBcd3GkQXnxPqAQFXa6bwEkU1iaqdQShrPWJkqiN9iec7Lq1YDQoEqMVAU8N",
  "key1": "4qXkuiEYjV2cRbbdRiFUCdqpJN542jCP2egGJLpBSLQzMzvXPk2GQMJUWkYdWrdrt3YzCp1o3ipEYivbUgUZzxGr",
  "key2": "5zL7FmimVgaeDQBpsFQXYDG5kbMzzw2FVYzQnuPatu6QktP9VsqpLtDqb1ZmR5HFyL42CecQ8dtV5iXi7mnu7Qq",
  "key3": "3nCTMusvbTdtwgmgZBbjEBiwCAe642qHEDhC6wcT5yoSJB1bX9v7n1aHv61mdhCVw9rnMFdzfHwL7aZyaSc567wH",
  "key4": "62Er8eV94mgX7Noge6eMthPUzaCsC6spB6XDsrt2UwSjJ4pbAUXUK9JAa5kXx3v7oTeh65Tf8kaeJZMFy9sgLYUf",
  "key5": "3BDF9Qw4J7gUuV3hDU3RNmHozXr3QNoGrCktE6E4VexGR1Je8LwD8pRT3qxVU5JiDxDXi7Enbv9xTAJf4Bi6FP7t",
  "key6": "4Q5ADJu4oWMby5vFNqTXWFpzTfXCawwHaUqXPuQeQ6FWZ5mUn7JaW5imj5xVQrp6dPveKPA15UV69DsvNpq5Rniu",
  "key7": "4W8ALPX6K21EV8t7mm7FJXB7ErmHuTeJrSEajiigAt6VKzEryAdygMUXBZQt3xPtVR7xcWWDVFmo5tqq3jLoDDxn",
  "key8": "46zAdnMzvgmheTCNZbBPqiE8EWU4U55oz3ZRMTRKb29d7PiBJhR5sYY8NFq9uMR8bQrsFyBAc2fqPDxeNg22MLkp",
  "key9": "52ymwZusPCtztbCdpVXyQAoF9sRt8XkT9XRKBoyHUMyTvtyrUn3NieKJHTDM8ry2y7TcpByQrvw1WRmvmBXftnLB",
  "key10": "5BQ4XkCTpUHRgDFh8fsWpQQu56iFYzFSB8GEnW91Lpb14PubneUjxBa4vqPMif1GCghpbv4euRa7D9NEBYhStHbd",
  "key11": "519j7iyuL3qJQgWJTjERUyWNEYbqEZJutVuztPX6HzwaxvPqfMGT3aZsvAPLL37Gmr4T2tAR55sN5oj27LoAzHX2",
  "key12": "5Pxt1vAgcd7Tu7fJQTmQqZKb7FaWJRsbBdPL6MGd5dxdxp7opZ3xiubwnk32pUtr5bWxnasPm42MHeHLCQnfiM6j",
  "key13": "28rzRTAtXgqtEVFViUhAy6WyaxdtyFS7zkCpSzQqtwwVqmmm2VhQLCRfq2GotG9pKXA2YoRWC3MBRbhNASmgQjNB",
  "key14": "5LV8NHxT1oPuxezScgoV44oNdjvJyovWHiDLKpjm1xMNpdYQQLZhrdWCWjf4HhQFgT9EjPD1XmXMKEWk69dGg4XE",
  "key15": "2y1AnSAgHgABBM7vuwF3waZGn8NNk8PTCikDPNJCAWjTEvWkTwVZUrWJoihxfogrqSa9N3jTH2Z84CxWRZQQZqiu",
  "key16": "1C9URUJCx3i1KpN8rFpnMYJYAkGgtdex88z3YYLFmPSgtRt1QMhj7RjXWFBBK8Xk7kSeAj6bY8PS6GneLzpjL87",
  "key17": "3fs9A7d7sx9PfqhdHnkZtWmsSvGBtbuofcdVRheDru8oBK5iDxjax2rVapnhFZQLUaWuDc8bqyKrmNKZbGNhXpiG",
  "key18": "3Pg64GZX5x8hKYdmBx2mrr4FADDcTpngnc6ADpmCFaP6P19oVm4E7rmnteSYT5wug4BEWgeYbcCnCUhjKhkaHz8J",
  "key19": "5tAQdfd21nWsLaEHw8U31uyZE8Hh9BHFwDKkYbLcLW2vVVAjMWMKoR47WX9drv8bzTeDXcYiEN4dvSMPvjBaxpza",
  "key20": "3aLSptsyCbRZWMMA2wFWPtj1P5bWxti3buMEkzYf7Vg6XMXeToWGWEVXKGgcBVaMVvMYFoyVdMBoo2weMecjW39t",
  "key21": "5KpdoFZoFmMAe8zFSkAbz5fuq46GzDotM8VN7g56Lp8FLn5P7GJ6sqQEZmQoUUziyXRutziU2F29v74g5db1JVKN",
  "key22": "4Np5dz4uKBLqDQMC2oaQSt2ffDiKoQSTrgGMBZRScxXS4WD1DFFKNUvNFtpym7uuJNW1bCxLWtWiycJkn6zC9CSd",
  "key23": "eyRgn7nqzH9JRoFnpWVpE8pYvohdE3NgvL5UxsoFrpjjhX6erc1BVjJzGE7zgGpW2wWXJZpKnakJJTHkGHbay74",
  "key24": "2GoxSYQYVPDtenw8tKkjCeV6vt3jXgMkGCvhs9mLPPfmdP3BzAwH9UjLC8UrqWLvZpFwrtzaWx1UdVUq5f7gUBJd",
  "key25": "2MqLWkbKDzVXVDcRq7f8w4LTgHt7PWV7cCVpyJkjGPmpNdT736q5CH9jccoRLgNBwDkVjrorg2iQuWa1wZQjgfJq",
  "key26": "3GZzz7LQf7M1N6va3vGireKq3PqCtcPe81H7sNNh2e12n9jkPKBuXvHeWQgz8gZY9Zfes2baw8Bd6J5Vz9jY4GyE",
  "key27": "4LqMGgvPrdqDtSExTBAxBGmwwC4rMXuZKJnfxr5LYNwDVceGBigk69iUnZnwhzEddPig5KPkaDeJybo3GHi1Uicy",
  "key28": "5hHoFoJK4PGh1bLPNbd65TqvcRuds7fG5eJEH7WfMQKB2s1sUf6zNr5aLMHCkFroZqCyR26Y8V4sg5qk6cwcNAWg",
  "key29": "4V3RrhuXA3sdiptroXJ46VXduZfVVcHB2NcFNttnS1W4eD8ULNzvuF1FKGhov7RHmakAEca3ue3yBdfU6iVcai2f",
  "key30": "4y8oS5C2EUVYwhZDYC3xCCp2B3g9itLtBH9fHM8UJrPAnDuprcmpckQif1iUK9pmSTjfKhKhVYMpF5CbTZvRaH4E",
  "key31": "5u7cuLfYfC2fkYJ29BSBWgrVrHfz3hYNjtj16zCCJ3RVAWukgUs4E8udrPBdpQXkd38qcPXUhdBTVArhuBCMa3WU",
  "key32": "45cBQvwjMF1LqXEhBzPAA2uzHegYh1Yn5ALvruH4Hu4CiPyoSLBsvfhPZ4nJdDLzyaNwQyHaoec1zTG6EVj4qggR"
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
