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
    "5PNJ1aci6soCyhTn2xVftfcR6SPLEVCyN1X4VEDBiovBUwJbUQ1fMZ3utSpeBFRsSyXb61quGVPKSbokpnFq7Cc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v496EzF3fKCUK98srEaUVZXGX3FyBoiEMo2hYNLSRhA3mJzba9JGn81inpMKfEc6iyxgK6Jy75PRmE7NnFgzBzb",
  "key1": "5eHCFDRvdiiWiRofVyBuvSe1QmXpz96mzPs4LgcWJMaBasKh5T1kZVq1BE972tQ7Yeps3DbM1QYeCZX3u2k2zV9o",
  "key2": "2XmRUYCwP9xu5Xui97jur7BNaGSNyVQ5EMDhBJBnTZSR7XbX9UckrwFLKbUNAMBAiGFhLwaNA1eyPZCgUsACmAgJ",
  "key3": "4UxEJApKJxduBu6prdJArRpiXEu6QyuAzVH2Rpra52XZoE518BUS6QoCcyvrwFwrsjuLwvGk1XxGD5YBfJ5zh2c1",
  "key4": "2t7qgTFkbPA8zXCdPe9qPQXq1uxacP1yR1tg7TcQpSnzbEwbt7YRmr94xWhhWrnVPC11ZtADiSn98c6tQoiJuayU",
  "key5": "65qWkEVDyBedHqkFYziqVQdbWgANXamnEE6CaXHXkGJMGrHRhKfWpzXuCALLokMJQjd3rnJjaUihop8x1XgneZio",
  "key6": "2RstpD7rqSubS4fD1KXi4t6Tgzcy6EYciy47zUzLg114zrUzWoyVZMB4VNjYFHUnw2vyuWR43JKQN5XZqyneeTM6",
  "key7": "3Cu7qvkmxVb1dVUWPkBvAZPtMmVYu29jhHdU67BTxKhuDZJ2tqkWZqYi9kCPGEuXKrgcjtQFG9doGHwunuS465fZ",
  "key8": "5oqbXLCXisHmxMQfgpaZ5QUc27sQ9iCDc2AKs38VWogsNS9BNgGCjcShU3kFzAGvgv5xjscGQGffZNrFmJvvLcLv",
  "key9": "ci5KTWfYjjLcYXEGDrZM614aEroDPJAkwpRqm618igkZvGnFLkAPou5kkU7w7VzJZctGV2aw82RH6pUXDXpDNgL",
  "key10": "2qJzgok1WZ2LiYvf5DDFsU7HWheUjX33iZcq1wtvG7qdooepvBE9tWidLHHKGKLUyfT4x6YRt1kQ9BP9kZzJVUwh",
  "key11": "47j6N5QF3tbC3MoAsWvVjQTa7dZNMv2QLJEmCaPmgkcX1uXfanH3c9bPgUYR5g66KoQ1AFScXJjna2jdYpKaxmvk",
  "key12": "h8aBbpu5nw2pUy5XiB2oeYdi9iCFLwK4DKQui7bheabMarNYpZ26uR3u2tVCgVYm8VeoHeK4kZYTvs35UArwpVf",
  "key13": "3FCGaDgjZDfmCEnnRSARQ2kYsrPN7Unt4xVCro1RaBPRVbwYvPdfjT1APoqCVXYPqRU1d4Ksaq7FwSnSbLxqcdzV",
  "key14": "351UWSsa1UcByv6HVwAr5Tb1YV96HVyk4RQ2dsNKDQGZybYKP8C7koNKAUFiuhiyUwxvboVMy3F2L5AmxQPnz2by",
  "key15": "2hYBJKFM4VCBVPkzPgDzfFc2WqjT9igqEEd9wCTwkzYiDePEECfP6AMB3X2e2Uz9n34iPszFEnGSiCT42o1QQhmd",
  "key16": "41Qwr1sEArMypAwjaY5napLpXGbdKqjciPp6GzVrypKSwWm7Fw2sNcPM3EgLnUekkzJz9NzwFkDQWFRwfFjd7Ksd",
  "key17": "3YvUe34GRpoSptVMmjAxsRwdNZYo89TEDWRWmQg261Ua5pHvbyGtyCsC23JESwT8rahEBZXXoJbiqp7oU2zhdfva",
  "key18": "25RWBhYt1L6BUrB1TQuwMxbot4onhJse8vCzuhLQEbQqkfEmGA4g4hZSsj81XoocLBhbF28Ao8gQnYA5dxRSkWKz",
  "key19": "3HXnt7HEpWpJtxkwG3r5anq3ocwhuJtcZweudVuFKHr1G2rPU2cmKJvGPvyXaVviatufDnAHoHGFTcYjuBZRnkzK",
  "key20": "49veXWzGMViSda2HUdSFQkzKTrt2bD3TUoAhPNMaWvArjjj9hR4xdSGdKnUXtfnVLEZsT8kWe1Ao7AAfAdguWwYw",
  "key21": "5oahM5goLFFzTetoZNkSTZNiHxq559i531AH6R32wA9XgAP87YVbm4y4CwC4qQVex8WSN4RWDgfwgG7yDhhrWgVs",
  "key22": "kTFEerLx68PDz2Ebu6hnLeiD2sjkR9ZK4wx5UsJ688qTpySzm3DZ77VX9bG7M22NHVTXQnSXjbM8UqL6e4V1iZj",
  "key23": "gKVdWzG4p5qfksSeA3EquUPQva5gZhUdrzGbn7nyKXiCRa55HmS8zmeTT7nHkREFvuq6ZnFKmge8BHb2EXmgMQC",
  "key24": "2QKyoDLpRdcaYm6edWe2bHC6MyiLavpR9U7xekhuPCFcDeaEGPoPjANpR63B8WD4uV6bTG66CZQkxPmoJBU9TAN7",
  "key25": "rg7PPUcsJJr1UZP4wj2YmffgBQ5DM5rkEQjrnj254EV7A22cQAgA1dcsMeaKL8dKvqoezwMM39pt43bJmwzziR6",
  "key26": "4ik8g5SmtWKBLV2HuP4oGhnRpBPo5fcXgZuh31wv4iWCBZLChpPQfm3agkzt21CrGDP6JxrGnfALPKoyRtQ7kyPD",
  "key27": "2fgTMqpf9dzWCVWFzBdX7Sj6oF2ZsLgvcJ8Tzy3zRa3HfoT1vgXbD6XkkVh8kDMcZCR3NN8MWFGFkYhar2PEDrNY",
  "key28": "4AwC7UbqDkbz1jwtX2wh9RW4L3CHWM6mRiboqcG9Qw2ug3MajjW27ChyBqHED1x5SWwcJqjz7ZSF9r8j117G7Adz",
  "key29": "4nkbN4qFCgWUeb2CZkiVAGmsxdjC3FCGA8aN7sSKDgbeTXp2dGubB2M2tBso7B3qUKLqhisNU3NNgmL9PXdTV4VL",
  "key30": "45XWutG8Wgt6EGgupGvHDjEicSyoG34qHKMFSAbmE4RHAYXpNibjYcihx4qsNCmpywfBKGcvTCCtwcy58c9MnP9w",
  "key31": "3rr7xysDAWJ5qhbTgZzHS7XeW1XaLNEVC38wjpRoe7RQQJHHLtCs7Gv3ywmTghraEZtkHcZBrymvGv4Ky1zJrETM",
  "key32": "5JDeeitMPcC2SN8cDcE656LHGvUcXUC5KLd7Q9UM6QFHYcGsDZsSMKyzwF4rE2WZ1gDpEacnsbU7QENfyo2db7yK",
  "key33": "kgq1FmxccTSybWgz16ohZniPHrN1aGficQKYnjGU7av3rfpow1CUXCMC5PXkoRACUjkm4MK5PP1Fgu7H4pNNfgi",
  "key34": "3DPHax6NoqvBHDWu65j49QWdfh2UF7Mz2W2QxncMJ7No7YFr2wnXaL6RWALrLd16kf8VT1m8LwVAR63aQrby64SB",
  "key35": "HMgPU5KYUhrDCZNiVAHniuhQc7vYeKVkBhb8n7d4GtxrRPoWd7bb4QVEBJZonAPiwSSwKQy1h5UFd2yL6dUwmfB",
  "key36": "2Q6vishb4DcKzwsGEdMxgw16aUCY61pjgcJv3xZHee3ufnrEw9eb63WoFHCBHqyxkuVDc9fyMBGzcBRAP1rdftWy",
  "key37": "5j9XayTLbN9Y1ff7qwyGLF8GaBTViChU6NmnkRVhm4jhsP7w9y6XKKrKqx6npwjTvJ3NdTUqvxTLYAP3kvGaVwh5",
  "key38": "doDnfLgrUtbshXFVxfQhFHdtGoDwzDRKXMdHYSDqVxi7huUxPpdcf726vzic6TtU6uv3WQ6XfbqDLcifhCF9wfX",
  "key39": "5RjxKRjbbL2VcQfhzAtTsu8MoXdR9JAAqRTiuq1L8BmjDPXHLAZMUjTXF1dbJDaE7V24t9LPubJC6V4kmycZD14f",
  "key40": "3p8veb7boDZBqNrgPbouPajcZcjDtJWcVMSaohSRRGwhH7kUqQnAfGVv4qyuRvS8MnB5SUBqQiqwJdqziaz4b65K",
  "key41": "5kLAGSiyXRKJ7buritwWraMUR9SjEPCfyrBeggmvE2zdY6M7KQpnRga38yZPnbfDctWTJg25QB665u7zwzwXWXor",
  "key42": "4gVR6nX3MMKWZpKAiHKYdFSUBQRfD3wd5yegTTjsmztMANteWiG7Roa4mTWwpMKLSJY8iC1CT77KaRwC2qFsAwgp",
  "key43": "4nTEaJfVWhb1QhVNuhqZQotqCD4F5QQQNw5RTiNQD2jfnGxSjb4jTY7VivgV8wAoCRSPWcqNvF9GYCUqvDBAs9KZ",
  "key44": "YtkSseGEoiixanAzFUyuApkTVgW6XtsJ1TnDNQo7J69bEtqhjSBN3KuovbjbRQwN7hVQdD1rSYyyxCSeELJVyvZ",
  "key45": "dy2xyEWMTQgo6ANoU7hpNDpaNckGEFpz72TSb7kkFhmP6Qsz4E3ckBMKfUwBErYb2335XNP6z6AsCFhmpC6ExVi",
  "key46": "3HMkBzXfbdUU3BaVVvnNfSHLZ2HEv2k1qmqXaK1PWD9qtgyRydTAcHMmCFqvxxriDsoHkRyrHdBNhMdUD73zDJsh",
  "key47": "mWFyQSXjzVoWSGCHh23BaCGwwEDGPnhpVwc6U9im53j2xh5ncVbmgTeWqzBaqcQyNxyCkPAT5rV14c611mM37J1"
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
