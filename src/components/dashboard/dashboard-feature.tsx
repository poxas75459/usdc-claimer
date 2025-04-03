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
    "2WXvNq6w9eBCrUPiJWKUXdEf2qpfzWfkShWHq2nKqgLwRZH23HaXAWfeSHZrYzKxsKF5AyM6eQ84bYH8YNjdSes3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FPywXmNobF4bRfWXGDCFXe2GYmdfQ5eALTFKL17uvDdN8jn76AVfu9A6pMQrbMBKEaaMxg6S19Gyued6k6bTZwh",
  "key1": "3TEEYrETyaFnM6oripUNnuoBwgeZLopRqX8AsnzzEPjD676tiX1Em8HRmfCDeZ32QbJqBPUkxJ2pSVYjMzvWyRYF",
  "key2": "2W1W9w2Jnowp8EiNpguJbM2yTdG5GaBxtvzuZTvN72DNUrJWTf7vp7RWg1tJGHFbaVHxLHqjuVuEhZkHWnUATz7L",
  "key3": "3Ud2GM12RZ2YAipnRbph9jsjHiUz1DrLfPJv8TKL4L6MY7QboVyCCkrnDtXsxHYVehasMHT4Hutgdh42D19WKVkx",
  "key4": "2U4Zfti2BHmySihcXghKdx8H1H3pqSJFqeJY8EsTMwHDQp3vb11pH36tgNdh39bqJsP1DjE1Bcf1mWCV7TyupgQE",
  "key5": "4ZgkoJMc2a8iDHDT12LyTNZssdhAQyCACfPsKA6T1bAvaosQg4ZMc8taun3kB7JKQgfKL9z8XDMJnMeKhrejkbGV",
  "key6": "2APdgvwD9xY2DbSK9fxwibVXW95Pe936GjcGLcTTK2FNia54x6xQXwYYxBHJ2CJ7BQKYgUnjqJ9hMtn5c9ECGva2",
  "key7": "3HmfQUE8NZj4ybHTfqak65mFTGg8rN8qYYKkTz297ecVSPyUYZ7ou4rcDYxrG4GgbNzV2fX3BjNTGRccmfoMiqx3",
  "key8": "3RDedJMVucdf39MdyPVdEx8cr77tSNpsESytqZMS1tDbgyjQNLG4vGrpHuXDi8UcvFVMeZmJdGDWqbDzjeDwfFD3",
  "key9": "mHBdY7B8Vx4V5jnER9vvBfxC2tmE2ND2uPFtstUbexGpxhhKgHJekan9FCmjJw598XSjVfqFb15LfcNXPC1YEGW",
  "key10": "3K3nUD7mXvW917MkDmTezpCt16UqeQ7gHJvdBu5qd7V4REi2QQWfAFVrjQfayBG3dQDDkRyKSfydyFyDiaYqeZUe",
  "key11": "4wZB1Q1MdFXnafDpNDqU1aH5Ja9mbuLaNUjnkb5o17HCyBxxxkDJ3pPz6EqRhhtF8cpajMtg9GAAASVwoLRPxQ8f",
  "key12": "4f35dYxPM2U8Xdr2xWW2nk3eCb2JVeqEN4kY9RSWmATfGmWNy28AA4TXnuodZyE1hJjpQMNbDEBzNtypFfFXFCEh",
  "key13": "3yhSWEoyEorZmG46dbTGUqMcaoTXNgrvJjBQSiXcjJxzBLkXnFQFr8NFuwsiRtaSjpMmfTrpvX2XmAsYttKHbXMN",
  "key14": "3N8U46Z2eGdbMK5ZZWmEyp1cqmH2m8Yz63qpEEbpCUAdK4XCEJN9ovKrTVKSmQ4dTbnrHZMxBxtBnhPsSL9YZArw",
  "key15": "GQN55h4bCwXn1TQw64ahP6eG5mErgXuRZMC5e4t9eU7AvLfz3GqG8Nqg8XvZbQrXu8e7Rq9iiaCfxA9ipgrN9mC",
  "key16": "5jvPWQdnXCAWQebfNtcaw6219CC7r1rubTTYZttk8uCMrMG1ZmURRTac6zWQ32mUenWXWohCsTdGdqnwDGkiPhX",
  "key17": "5q1ZMbCrwXAz5XvKemwxuzoQP3nrMrv5buEJ6nioYKP2wLKk4GYziANJkM2vTzPi3qiU69qndyb6pZgfJMygDaMj",
  "key18": "kYcABU6uHxteykcZjUnmcm5gr9fqs8hDYUeQLYpKXp5hFnwBqTz73UMUgd9fdtB6uT5mGB1hoNrr9VR6mUiCsrX",
  "key19": "P8xTumxYCptEXd9jNK3J1VGi551Sa9edBZEFzHeLJEJZ1aYLVvNRv9E4SVpH2ixufMFaRnRKatfemj4c2EPV3yt",
  "key20": "3mjpbJeRDXFM8S1Gs2jUDFEYNqX8kLN6Zw8t7Ct6pFDae8jMMmNJesWEMELgE3NkEKCG6gW3nojbnad9W9b3fNFx",
  "key21": "qSeqivcdCThr1SU4xBnpGhbBCC5unx8h8kECJAqaf66XzNrQ8VHdzY2iUHbyxVu9aqf8b7ovBmeqDW7BQekLMa6",
  "key22": "5JYqcNFZT2cjwothUQVr2JGXbaKYrTuQbhPAvhhPMaKyJWskGkztAp9yzsks5ZnHEQn3htUAj1eBg2ZnK9aVHDRy",
  "key23": "dGTwEZaWjjHVgmQERRxPTnwXb67EcqpLPFppFAEjjogSX1KWeKn7efuv4LRk6AhUCaXxqK9k6eAaetz6Dv2DspX",
  "key24": "4aeBW5jHRWFkN9jag3eCz4793JuAaTWkdW6QSp5gApTKHZQVfAnooZ1XmhMDCjBmMMr1qP3U1jnNpZEUvDtU3YEx",
  "key25": "2oqLiFPChDkqYqnK4vdQWR14GZHUgJ5B3siFGiai7LCo7VSCN78UcqJDvKSxWZr4uB93MKfcVtbMkzLWYjYSHwLY",
  "key26": "H9VKJSTqwAvJ8uZLmBMGwDEp8GBpDGbNBpxKYT7G4gKxmHpUiwvePawPoWmGpgLxHdKi6kgiMu4TMmMUQuzCUEt",
  "key27": "2zPKqSmAnRLdJytzqSJvzfY72AmGEc1bdn1JDv8krKuifq77hLb7NLquaQTBa6qKwvoU3ei8cW8Cs4w3PqeYCTSF",
  "key28": "2FaygP9YZbGMr4VgwtnJ2DEHtuAmonVu5kaiMQEsHPCH5mS1tQZozKo569Qtj3e7vTuKfekM9V41ViSezcp2f2uw",
  "key29": "6CbXdKF2zyDkTBg2r6qRQ3cW7kre9YRgC5YGaVZJxASnt2jUa4DVAG4et6WigQKoPPymP1BTfcBR3dKEfq1Yj1Z",
  "key30": "3nncWXnKRxSwbP9t3e6ZpZZW8TE7nnvrU3rsTuCYDPnYJitVh4Qt9jyXpucSQxKjcwFXadwdmKn8tFVyJGyPfHAD",
  "key31": "2qkfA93k3UZAdT8vpCAVES4FHeNZHt8RbU8KUzEUCedP44GGMwxfRpujsVD44k8CcBvvSnqp5JTx87w6BGkZ5nxN",
  "key32": "3dfKMFkEFSsBWhMSEtchvvCzJHSWaBf4yUHcjVY5vA6PMby1w5g6CnEAnGBpJhJ9GBFpvNspLBN31CUVkY5F3dKZ",
  "key33": "4rVGCZWXrf6zsoTh2wKghVbJ5ijLTHEuqi4X2SQZQBzFrEXkSZqgFUKErq9HyeDyadWA6VqLrArzCXF7qNiDtrME",
  "key34": "5CmdSpCevPfJhSvqjjMmed3ZJjcNA2Hq3cniziYQ4yPnfDY8PPGcFE91vtaaZCLkiH3r5YvmNkZazTL6VZVfEftE",
  "key35": "3vV21Z82UbMckPgFBfSZpbPBrRCiEz87ycKehWmYgRLAQezmM91NSsLngLkSr1NAiUyUFd3u1HxzBzoFDvERzbG5",
  "key36": "5sZAhcLGDRmHVXuXDqUy7yRFAUBpnMF8jpu729SZsfterPs8S95WLydfnBZDMKEpGkxfsMkef9Ki9nzgkY1fRPU7",
  "key37": "DYJ7rKnx6L5xzQUScZVsgyQBbQbv2B1RgNZsXA5hrdY3vRGVSRBgasZbANRjipm8MSAs2VSH178pF2d33yaPRBM",
  "key38": "5AuNM3SudnubeCgupAWsQP528xcCuamQAL3etTxyNbmepvZJKd9wAJmB8FkbZd8K3VvCVjbDtxcjW19grJngamSf",
  "key39": "5nJKr8sGpNsGVWwsNJsMDtZ79S8KtwXqC5CD4NKyQq68fcU8Mcv42MwSEV9omSeg6YoQdPXNSQTZ48tTy4wUx2e1",
  "key40": "5cnoWz733pfjvoajck95UGb2DJedpqhB3HayBmoXsc4AkgVEGRNhBD5baSvzxBK6bnw5V5y1fvX9hJ94Ljwwfrdg",
  "key41": "2vZwi2qwP9xFqpLA5cvsRShk57ri1znqUAf31fNyQHE7jFCVGaNHHnyKfyGFsFAhvrvNy9cFc1cQd6mCGk9pgkzv",
  "key42": "4ox4yiR1tqZoyZm8zfUWYXf6nXWwsxd7sVv3JBEQopuSmFvGN8Swfn6R5FgD8b966GfHG9hitsB4q2s6d9NWSwUk",
  "key43": "5JmVGB8TbixUZLcxEigjEWxBNrXfKEfstgqyVMsc6GWYkFjF3cfuXw1zhTFf8PnxPeGaLoMyTYGHe14qwcsKkw7i",
  "key44": "h6iX9ptbSuMMeRCJ8ja9cGpMnGE9tMMuLWKJ5LvrF922uqHSaLhEWxDiVtooVSc1YQwKqnSpPtgrWR4Prw7J1r9",
  "key45": "3diwmAj1M81PP8C42pZ3baLZ1cQoi6Wx8Ypq3DNcGSd7MXcj2WiJ2Ri5rLUrwtbmh7oRrbvLM4hmDW3rjwgMHFNy",
  "key46": "4tygfQxUAixcGBNudmvCXniwbnEh6CKxjcmAigFhy3MxjYmb1DSQBoPgTmf76FubpsZigXEz3EjqTB4GNcLR2z9J",
  "key47": "2GxfcvnbTu7q9jgoNuPU813gHtewtq9MyCHcSsKCArsWqMNedxBfBcAKfiDEKHbPsZdrZwXF2uVTQt6Ec9oYGhP5"
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
