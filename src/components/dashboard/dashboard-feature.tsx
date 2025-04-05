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
    "4RVy6eEsvN48m38naKsqgJRLfqKYj4dMZ4SWDbRyR4ox9pf44pCEqceb94vUaV2nDYDBfAz1QESTiPQcaGp2wn2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SPWdfqxsxgjBgDQ7egSBKsDY6mfpDPDppCzh1iUjhfb3LRmcHgtPb7RqPTQS2cFBEmifrY9fUT68yLtNyeU7XJ8",
  "key1": "2V4BYBxDNnkxyvp4AafcRBbNRiyrXLPXs51dtn2mYpcfqUqvTGXDk5AuZNAb77RfZ22JWTz7YFRthV7D72Vx1pZi",
  "key2": "4ngViKVcmRMykaArubZME1xqvjFbTxAETS2DX78hkPRBfwZ8ATgTYZRmCPMxL8z6iCyEUniNNQ5DS8tdj3JFTZGq",
  "key3": "4JuQ6FoVQ9sBzcH75M2qSi9mF5bWkf7KFMQYaSUvmd6X2wcRZBSG6aMMVyWUUrbSLp64U4DP6TrXBGefecHVQWRg",
  "key4": "3p8sDVUtM28TKDdBERfw8amDYdzH8MTNn8Bjxm6NyHMJaTdjL1HiiUhWov7TJnzYN6dd7KEh8KDJgWYdDjPGJMqc",
  "key5": "2SLhpBxSFzoCtAeZjLZMEXcJCs4JHJmtVx7et4qk99KJKpVvDttNzMwFAa4q6Cx2dk9kbXqLg41SqcEoTrst1zNW",
  "key6": "5PiXbgkkukBVLtgXYoT6LaXPmpGPA4nDXWZXS3kVncdrTh4xDkdFMxYDR8eaR7NM8ay6EKv5fVb5B3nRBw5vaWW5",
  "key7": "5p1dD5fFEKhAQwtpiRA2V2zLX6gSJm8MJqtQbWqL2x4KjXRRiVrGCWSfbw2ovFsontyaHmsXAC71meR4bHbRxLJj",
  "key8": "5pawLMFfsaC4ZViMsfceTEVEnnoX69eYhzNQdSQBMmgD3eN7uGE1jV3NJ5pMkxYUnJ5WGRab882sSuaP9Siyg191",
  "key9": "33qpqKAeYUbDBMhTV8Y3DcA4ShZeRSCJteGYS9a7suorP8HwDdPStCVHVHDjunDacGAL7kafJZNvj9JTapuMkbGB",
  "key10": "ZZEsiDXF9Dj5nwLncQ3B11AJ8GR75mgnGa9J96kRp3e8WikmzTnDvUfRsUe8DTNSy46W1T1KmcycoHyX1yeBUZw",
  "key11": "5kkpNd6RKVyjc2aeR85JMSFr34tnyw7U4NFQDW8wTkMUKQh89oh5bwdnEv2YZu2aHwAizjaetvKe7SX66FsXKV4u",
  "key12": "3z8L5iBu393ayBDrKji3Q1D7cxbTQxAAcjHPu1XhP6BS4sUQmuNrPNxZamSFpNnAadWWJ39RWySFjmsuqsMbHafa",
  "key13": "4qJMQx3mBhBXa32fzHC2JVaWoGdpsVvM5V4MCXQJCkyHdK7aZhfDnwVVnDnFpYo2EeXnYLFDffHWGbyzY6FQdShb",
  "key14": "zFeCtecjXeqsC7revUVUhpFv8wTqkisz32B1Kx1NpoU7yvEdmkPeL4nejpuEWRzLp5e2KpE81C8YsLb2fDLMjCr",
  "key15": "3ZzqpsBSxihdfxUZjtknks2FD1e1zgyeM9ZDemKikRLGaKERNBLkTFNXBsmKK9iv5xMt13ZcJcFtk7zSwWcWgYZ8",
  "key16": "3godZsTs4g5wD79UGWrzNVGTUDVsJ3QW6YM9d7U12VyFH9FhwCymiDgVTA1nAMUBEkms8KQc3zjh6uL4ymLtmLjg",
  "key17": "8BTxhDiN7W91rsPbUE3yPzP3ANhMNhopqfJ9p2Gy6Bvt8NzVnCMmswsxuZLwJp6LVP4sJadDZ6AVwFJegTfqcUe",
  "key18": "4UGLe5MSpiXHsrxantLGRx1z7bdnhhbXzWEC4oHdDYrAnyyigjN1xRfTeHcgJZswMYzZzSX1QrSs5b6Z859FptnV",
  "key19": "fmowf4eQioALR7xTbGvTCURoCDPEU2LnVsmTfEs1F5foZWVwUftR83ZTMvedrvdLZndXTcr6EKvgXymZ1PHUYdM",
  "key20": "4e93Eq8hstgSzA9ZxPX5APuJLJVCoAWaUHScn7GR7k47tvFFKTSaqk5HVetproT8CrBGyVcSRh1YNLGQAagmmDKy",
  "key21": "2kUCdpXN199aYL9HHHamrmNBchyQq4hNpT5ZFkQomGe8J14VkBgN8b57rRM5v4YDHVDF8sBq2YPTd9g3BikLRSak",
  "key22": "cT8bCAdiKP6jBqbTgdSueAuPwvxQ6eWtmwVzFPnJK7ogdXWAEyKyeNZGeWPYt4RGAGWt64UKd8mecvfg56hg4bF",
  "key23": "3g4tSi2fCsps82rxHhzMBMx5SrKdn8HkWaJHHpFpu3PRFA1k9S7gtSqoAwKktCLDAtVhLPWS8zVEUeSHbssc6dmw",
  "key24": "3zwgiTgqU6iStL69LTvBUwWMnBQ1LCzmqoVS1g2FykJSgg6S7dJwctsP4eNRTTFwcxjXuVgYPn8fLTwQk1k2CF6t",
  "key25": "3Dz2mTHGMY4cRheZgqgAMUa5wzw8HBM3ERPh5oW1GjEz15j6PpFYFEKGY1PWw2yR5262ig7kswaQiM9RwjgdmWcu",
  "key26": "4H4bUSRMkF6PkBuTnecXQxLGuJgiMx67ot4J4QPXNa1cosxrceXeqHdLofr4MH95GfHtFaWAcqvs2bcewjiDeeMr",
  "key27": "492jYF2gDeEGCBgcMaky4dj6SZRWBRAXbgA2UzYcCqMZaffCDUcRyCst8HMZoyMFD7Xz7bHcX1M6JNF7afLRCBUK",
  "key28": "2sfDf6TiA1qYpoHXVcDmXZXFnLdXVrRD3RdRjR5eHxN4kNERaYADNzcuogSkMc6CnjaRhf2DM1wUvgoiHdumfkTR",
  "key29": "4BMcb7yuCYMMqLcDCJoHqrDqUgJuyMbWg7CXRcXbdgycKbQnSm71jzRi8xsDs6c2PqkLXtoYv3CgfXncydZ9XTFW",
  "key30": "2mzk6T5xoeewHFagQn6Wj1p3j8UyhfF8c764QphZYcEd7MscvBsK5gF4NN7XeLErbTmXDNjGvh5JefPbCvT8cLQh",
  "key31": "4swn3B6eEzK5kasn5kDEcpaV5ybys31cq9yWPxsoKKpQ4Qm4xZ8e385VdR3Uf88ufPonrcRLG329LbCuiQ1odX3S",
  "key32": "2CQyLr37LapJKyrMGbY7UfEVKd3MdzifgduRTBdyyBjzWSJToPkYWsniforJRAsU1XfvSR9hkTSJYEhhoMdy9SQr",
  "key33": "2pBKjh3YpLce83MYbcXSduv8imJ1AYF3P2BuwA3Fca1kTmbMvJRnhiJUzjcxRw6b45vbr5kqRmT6Fw2T427pCHn8",
  "key34": "2UVhJ8C6ATSS9PMTAh7NJYMaCFUKhZYUm4xRHwkvSShBDNdqByv133NfQbbpYyuxgP9t9dKChfzFDCod4iNB1d1e",
  "key35": "yxVQBc32a8VZQRGGZVReoJKVj71T8EWrcJa7ATCqMMpRkPiqnf9YXoFU8ryAnpFBcFJBQJaoX8SdJ2aPsGHRw7F",
  "key36": "JSChLvKR2yTgPExqAzFqfHWNG7pN1NNLyzHAU6TCFpJTWURCQi2sA5Jrm4a5yo6mzabxT2k8jbUdh6PWqLfEJFr",
  "key37": "4pd3Hm4KJXgZYKZQVsQBQDyyGYDXRMtnGT5x8zBqKinqMNsMc5SQzHvMTxErqMNVdhXzqZD7K2Nxq9piyswVesXc",
  "key38": "HLd21gHTzhnr637ZZf2h5hnvmfe36MtiBu5xFuruo7rwJV4o7K1baYviaycYnURR6rJtE2oUUY2TwdoRSW9tqfM",
  "key39": "59wJNTuPDhMugWjLU7uYeguNGNCSVB2g28mChFVx5HSVbekpXsaRdKGxgkN2HLeENhFHbPSQUyFbAEnGu2qxSzba"
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
