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
    "3mhCcvU5AkokRtLW9nkFUNVRwy3pmiEK74s3UBs4rJThf8yJa5VFLnw3Z7HJ38MwpTExAsnZDZjw7y18GX9fiVtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KZFLq2mVmkF9xkeo7JkHMcbZvWZB6tvooZigGcng4J5yLERW1x9CJATgKho6XbgbG129UQTg8uircHgo6i6drv",
  "key1": "3iodqU9YVHEYEQcqifFnZjZd2DfcG8BmGVmn3ADJ1wC1zQFBZxuFViwJBqPq5wk7RdoKZWfnYJo47CxaFiTcVvbD",
  "key2": "2RVh6gwZyAmp4t32oWAiSp77YJEh1DHjPCzXDcccwi4D7ym7MKF1NRpyu8sUnL99K1qQo5UUjyyGSQ9GE5G9cis1",
  "key3": "3P75GANsjwwRwgTcfRmpwB3ToVTYQhhABQnnfTK8qHXwgtLwkYogkP92f2yUsze9b4P3ExQJtyZ48iaVN5iSfPP6",
  "key4": "4iysDW8R5z767Tp8BKbaqaXeLgPTMj8hY4VcSYvzmwPmWJtENh3z3HDrGW7uie33fd2aiJDirxCgt5x1VfEgNWgP",
  "key5": "nCThyPTWZHePK4EpUSkmU7zdx1uB3stHBR3YoHvA4SyfYNWCtPcpPuUtdheruzrwHXCVqQVRjPMVon5GCN4GMhm",
  "key6": "5Yhsmx5VKFvKBceNs8UC7B7iudoKriBga556aAMcMsqmqA4UrgpdYCLaXkrVXhuWWjPSmkeYwJ1bcp8j1DzKtth5",
  "key7": "2DCw1Ra9JgpY83J2W8mmtQVbXZAGQ9bdcLT2JK2HrR8bFsrfiw3hNAGPyJzDHbQ3J6kwQokzoQkXiLmqvKeS14eV",
  "key8": "XaVwBbUpTneL1YZA3Vc5GtmzYQ3KYNLA7ztV1mQTPF2BgrJTRZ9VZfnLUxnaURdoUp4Z6xy3h8HbjvwDEBz99Qs",
  "key9": "49mG4zEPMHbD6sePrCGn1rMpTZZrBcuvod5EZV1UhvmxGmfwCNMQLeFjxpDPibyQPh6qaKVCSAuPgx9k7nHio2aT",
  "key10": "4QPNWTAtHbY8WEhex9nf7abHL6wVWh2UhEvfR5jBM5jjVgvmxMDuNbvPWCdgQtwjLGkTKdgLpus4RZK5xMNr2wci",
  "key11": "2kdqtcMbuVqTwxiBTqZUKmAymE2S756WLG5Xy8Q1YiRWRmvRDGKCwsFeJs69DB887UZLdEjzmxihoZTUasPqLVky",
  "key12": "4A4z6od1TjkAhJmBWHBhtDPnN8KCPZDvhfAWu4f3LFy6soXtw1FrgMg1E5CZ5Z4CP5dX62iGKZEBxfLPwTZjzaoc",
  "key13": "3cddvV42ig1PhNT9tK67JghfcUgfJ6hWCDppx2sat7ftnXzm3rmhrn2o8wEAfAdMbkMQK1UduD6hYDya6gY3tUzM",
  "key14": "223Z8RBczALDqtuBk8q9atpaYENX8Mw6KWMtbi7USTU9pXEL2k1WcjWUMwqvQgm5stZtaeL4jkURNfxFApLsgmpa",
  "key15": "ZvarNaa8qW1UgWzWTCj97qEU6QFsHXsohmENP27bFLgC7PgPi9P4zFKCdQpQUPdANWLaZscxhuvFCYEAEMMP3iF",
  "key16": "376AVVDPuj19oJXXvryDd584WHBR5wvUQ73q7Ds5vCpWZVuEyQz4eEEgqHCMa2oNVyMBJDSZE42GiwtDEm61b2Ub",
  "key17": "25iPBP7TNbR8dpviAFRNCDGTikhQZggSZrtDWepQTzj73irXmYkNgU8bqMzEw4GyUk1tMu4x8A1j6zXADZRPNP4v",
  "key18": "5shHhCH91ts9mxTv9ZMYQJXTn2ReLvTGzukaQcW3haTY2rc5jY7WoRd2asGq41Tc234nSPnZNYKq9ewFX3xqf1Hs",
  "key19": "4PYw93zZLVDexHVFCJcPH4DbZyTVVRthcz7Z1mkjSz9LnTtiugh5gbE96PuHFh9KtjAoAAVWRmzTi4czP1ikes6r",
  "key20": "2imjGZgeD273uHGqEeFg7JrF3FSSP2L9it8HA1UVxSLGr8vwu7eUczJ5t38cF6FDC6ws4jv4UzMQZx4gUAKbg6JU",
  "key21": "3VUvDAG5TUpEJeYc9QmyVdEzQ1wrXjFJPCeJUqfXUNJx5RRtjmvUkVws6hsSeQfEoD9eVzzerrvRnBj5Ajf89po1",
  "key22": "GDqo5LtKuGPiYj1ucZvfN9LXV5T4Nnf3dYjovGKXX2jWS2ncAhnBJKErHhSpn5pPQzSXgPyv1iXzzTdG9Wf15Ev",
  "key23": "4aQ8qZr8XrCFmECvKnM8HSjtVPRXk8yQkvzJCMg12iJaqBuTYVDXZT7E63DadMN8RUFuyfGWzRcdUe2QpoLQEjAf",
  "key24": "39zyLEKKinpVKVPbB9grNa4WsVf3TNQm17SxDumVaS4w5xaG5axCZP69Q1MJ1fMhgZmXGzuvQ81uDv8u9wFaLC6Q",
  "key25": "4NcQYyc3yzVLFhv2LdymRbSodpVi8TDtsWwL9jGZvtSrTtiCwd8f4CvyKMpNn9AjGuLHXHZnUUJci7d45QKJMCrv",
  "key26": "36RcQRNYJ9eT4K4EKPk2rsibwZSguLwUHxZEvigN7eUSM4tckqWhmZADWVttBUDK5yzChT875bz7CTvfBfDa9fVt",
  "key27": "5Ghup7DQBi6N6AM86i55CSgMW8bPgZUZZ4vp7kS9DaF2Uz8ydrVPhdmCnbdtYTzHG9CEx47iPtseq3Hc9W5vwXj1",
  "key28": "4X7Hx8qvqEzhVTk5nu274XwF6nAN5gGowX34QMLsSeG7ATx31qyTPCULJb86MhvtfjrxeDhqSKBagsfz7nYgcMhn",
  "key29": "3mMCVCNt1NZpFuTcrFAZf31w12TDYE1w97QpyLtXuJiLUG91AcxsJnLV6ujJ1vq9qgPXNb2yE6EAF8dGyjeU1n16",
  "key30": "LowzJatSt1t96PRZjbdNqXALNFzTb46Nc9ey62SLnk4qGCATx5dVjoXtGRADhDcmuocsqpd1k5D2L1oBy95FC3J",
  "key31": "4uR5bpZ5omuQm8G43kgeth9c2kRsQnnR7Yfjqhe5LWjchQQ2iHUbSeYDWsdWuwrdHwCZXtzMtmXrvKRDizeUd2Eb",
  "key32": "TBhgVBX5GiXpbdHd7aYZkN5zhEiUnRnAgfTHo2RP5ktDZ7jkqmWE1EaUefzto5XZF4Nh3Sx2DJgDDJ5UYNubAyH",
  "key33": "2bDDRMBih2hmL9aTUfxtU5jf9Hr3MWpDiGzigknwcFRSfKbWpDagUYFfaGBTqUrSNt1Rk9WCt5zAR7WcGCo1Q1m1",
  "key34": "itPuL2HCUWaNRynkUXFLgTpfkTzDCmCeYNgoaw5cTzdyKN6eD9aje65F1tyq1MjLchfV4qZPiVwEB4pkb1fLDNC",
  "key35": "4rQkjFhHdpgRZVAyuR46dGjtAF6nGUQ2mJZ62RujbKYtEckFEZTYvFH76anMcrVHpzFKyyUPiaoYpQQypccUP5Bg",
  "key36": "WJejFhfMDWxWbdjcNBAo5e7Jje78TDZuQzSfPYdfxjfLWyBynXYaWDRiBXB2UAjC5nChujkPURAKjEWxBhM6LfA",
  "key37": "42WkZ6HNA5J2nue4BtqvS7mkNdk5EvfEurhwrKBuC8dfgm2RiFcqreSk9omHVAMskQ4sCKFiuhUkJ4D4FWvQdtLy",
  "key38": "39eDEaVubHXMTkD8X1tFc4jU8Fvhrt7NZsX9nK9mHbwEM54BGEcnY11j2bZCxNZnykzZbekq2JJVvVP1SMyW5cjU",
  "key39": "2xk3vcVAxcQSZLbrbcxNk96HcFoLvJ9etQ2oWt7LbhvryxjXyVpebGxqU2g816QWCiwLE4X2pTknhjK3FMNm4aqy",
  "key40": "5Yxx4aqadeYhi2BKkbb9xXJfYkbiUKKMLsGjermzxi3SiJgw51ecCr1kDek4ZK9j7HTc44vbM6EcbNgHwqE5efqk",
  "key41": "3rztft8oooYeFQdF9z4MT9QEcZPoZGx6Tv35etW9op5NMv635WZCtZMvwHpcWLnqNhM7EV2sNobj7HTunPVinJkF"
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
