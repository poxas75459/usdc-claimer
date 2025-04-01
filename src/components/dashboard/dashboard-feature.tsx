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
    "2bxJawsC6ztS9XAyi56rixgWw1JEfECsiGYnhJgzRiZ4GFhv6PDThytHmy6Z28cQJtNSnKQK5YvNejEyhffCvtun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H4BDh6rdMZTSLZDyNxCsUUJVnnzA3jCMb9KJhoPcei9oDcHQUYFsVgSz5YyqBJhv1ikSpBa2H2gbi1fRLixBhYL",
  "key1": "2yJYpb8Z4DtWK9AFqmhy3JTKSPNAXtMN2s2pGYmMxwqXYzNAFYLGtdeHjc4RNnNzHDH8Fkv4wYhUL6bCWysG4AQG",
  "key2": "5wccQkrvaaaMSHX6aALt8URaP6V1ouqehZc3Hy31nfqoKsNsp2rdScuyoBtT5CZJptNWb6J6AHsaia5Va5BN4UH",
  "key3": "4yEJttA7YTHTSrf1FKiMHssfFxVXeMCtomq1epFDvzxrxyjqej3g4CGPsKwEPchotrm3gffZiVvJFVYDMS2k4aNf",
  "key4": "58Zgf7JYJwFSDoj76pErmBpSNp53vdmfLDWvzyNdGnDrg3J8QZHNUgrgBbTytejoL4aPCDAvzLVUvBYYtuB4zhbs",
  "key5": "ZJ16QS7tHxE2SHrHEeFYXA7ruqN21khWhsEYAYnz9BNgaf1hKMxiEc8jWYnS2FkCec75mW8NY7GtRAYXvLQpZvW",
  "key6": "4MmdQ7ZCHvmCaVkeqnVnhcGpxHYuoBa2b56bpBvKEypSUhcw9ESCodDaxyBeztBsxqubX53dq9zt5zto61Sfvug2",
  "key7": "3WnZuqEgFm9ZtWX5uoSMwVfncPd53NBWP74UP8oajptuLtTRTaknnpCCL9NHsYiewVX4yEPLVSMMhkm7u9BootiE",
  "key8": "5EffowXumwp4mxE6DgBWiYiNQ1w1PrTStBAUHnKePFbfqm9LFdppP83aiRboDjmZeGW2ZaoeztSoHPq7XEQ9K6so",
  "key9": "43BweCge26U9KqZBaJJh6qFUuVcwmsAPupGKu6KjjvQzv3FNrMQTUysEqyPxnjonqbeUgNwB7CVbukWysfaMVubi",
  "key10": "3AzDpLAPBpKM8r4TD4QCdRAT3S2kAwsjd28RupthU8DWJYBv4tRT9GXbNVzmwMk5z1wWkEBC6kyJR9ZjNBcTWaKk",
  "key11": "5G3LS8VvSDEV7R1wd2R55N3755T2CV64QAX6GZg6X8rdA4DKQ8wAFtQEgxBoFbv2pz1ZZLyq1H5MSVbzr4JpP9Ap",
  "key12": "2CnA1DWUA3b3iBVe43ueKozVBU7uFZUN46TFvf2xyaMMumBA1XJALuuAPyHzrEWyn6b4m9zPwxvkxeHwwU6Q7iQ2",
  "key13": "5Cgnh6hjodefxWv34f2Sge2amt43aMUjnV864PGSzFKYB2WcJ29WxfdN2tXVGqkWpQxt7Ax8Z4Gb4TKAmM4oGTdi",
  "key14": "2GhmBkNXHHuk526FGbcULKiPygSKNnJtmx2SErDNphqVjWE6T9MfU9oBTizjsf8DJDxA3zMMNN53pADS4UYtc7gY",
  "key15": "2gCkWAGUmRJ3GVrFBhAqywwuHQm9Q3BLPxjhmjr9KQqefCCPNWtX6oVep2sMPkDYa56qSYX5wLbECmUDcq3nwqgp",
  "key16": "4qbpT4JjpC1KSeYpXVSUV2EcoriCTjQDG4NojoR4xNx5VdBYzSFgkXQqdxrVdgPC3ituYJw439Q48SFppfqv5jov",
  "key17": "5mMAzfttpoxHVTi3x8ZGmS5Xm8zMNNaBkNd5cXSFo29sASQunivrNtFF6CWxv33gprmampg8bD5P4zak9XwMUvfh",
  "key18": "4ZyAFkwQZaLRp8ACkuL6yiAHUj8GaardyTtM3yJcfHTNK2Xt7vL2RSiXkwwX2dErSqj79s3Cy7rAniEa7uoRFEAj",
  "key19": "2S8jAbAmm91ZKjrfsmHr9mLTmv5FaDMfnLNe7oYypE6QkiSWsyzWjmpKF5GyQqqYVs5DbCy9r7QRWShRHQPYwybs",
  "key20": "64ymy6vezwv3DiVCsv7ucNgu1Fyqoft6ZmfLyyGb8TW5ovrWQNwLeGpH1B7AFQZ66JM22d5c9vyudkmYGUN9Ee5A",
  "key21": "5PwUJC8eUBuHaGcduggHTPBNfsj1T6mjcK2NtQjSDzGYxReLeytq6tZ5w72HrYdnAcbrZAFhTtoANYZRveJN1z8e",
  "key22": "3zr1yBYBewXqzWZNYkk1HAokYBP7A3ce1H2qMuB4qBC7LqQCP8S6SuooXjuzoEyPexGAVmzUAbio2rR1Wn7Jrqa7",
  "key23": "5uAyoPiEHPcYFMEkRfDBy4NqXp9vGSNJZVnn8g48uGud12tebDMHBwRPPwDZ8m7dVnBvTWhrwKiHNkhSv2QwvR1U",
  "key24": "39T2PW3GsEpxKBL3nqoBste3Q9kwkLX7J8v5KeobxvYmMaUvS8fZcJAecX6aZ65GT9hRXnWKifPPqsianmLwT4Ln",
  "key25": "2peotQnNe1PkVbkVZ4jPiJgor6ECqojSXw3NBqN1kKvWVsuFFWQNh8qsn6naSUdAJKhED1Zk98F9En9DpkJTVi3d",
  "key26": "5hknZDZHKFh9GF1cswAhWjDpSJbWUXU19QWArAXVdybwbQL2cRqLyTftFztCFWwuGibPRrCReouR7oMZCM5ncUcj",
  "key27": "5FXs7WHvcdPBK5k7aFHe8sbK8xfXdto81hJDZY71baLTwASmSVS6skm7NLKZ2u5ViX8fzX88VjY5Yu7vKRYVLya3",
  "key28": "7t5gnATfYiY8tXKuyHJDrFTccc1hm2a1V6BXeW5bUuBWubm37mUcVtSViEkryYFK22n1UHhtYpkdWozwkk1g8zB",
  "key29": "2oBo6wZbo7SZkShtSRoTNQxH4mTYv3JCLsyUz8Z5giBzUUvkzukmYfkpAggTt3ZbR2sqpV47cND4hdGATzo33vnu",
  "key30": "MZTxwReBYXfgFFWu431GGpnyd8U4H4ioeFMnzcH7gDRPX6SP5gY2hEWChfGwo9pGT5mBzuZEFf8MhoTS4zDSqZd",
  "key31": "3SmYvoPNUkmat9fXXf3qRa5vwdj4cj1kY8stChUkVU9LQBwhpU5mDPbspy7RZb8XPmwnXao6McH4ATAkcoFyp37F",
  "key32": "5aT3hLb5kwsfUqCjzgTPLskhp8DqPUYPniLubWCJZVbGkmCg2gzzBdKjw2XsNVVPuj1TgWUdvpZRE1Ze51Uz11a3",
  "key33": "3wVhdFRH7uuzWx8xAJUx1h4ckTumoNWdW2QLNpj9HAJBhmzMYigBqV7UuiwHLnUGVFJkzLm1EWBRo5UBrs7uy1Rk",
  "key34": "5j53JsyCGzpcKXexVuWDQoh4NdshRcSoKhRXkKUu2r5r1FDzQR8nxjxQgdk5DHsakzXzQVA6rRRgYbugP7XngDQP",
  "key35": "V2MjTdNkUPwKzjimvstuqe7A3MqwHCS4BrFeXWYTHZ1EskU6sq7AjeJn3LYMy3BozVjJsop3dtHNHxPiApPAG1y",
  "key36": "5hHJCqZwZa9em4dKkZhfSB49QmSwSqej75FBfShZUH6X5nkadWBzWYkWVXtMWuWiKkThV59nKCgNv2vP1kmddKDY",
  "key37": "4g7wVeipt4GvdwULc2MnMkV8p2yYATwm4NgTPiJSMxfmKxnrgWwCH8Twvp32KviVSXybXbuep8J3iSGd64iJvH4M",
  "key38": "2eGTt6JDU63AueE2GpaDtQ6oMpTy9FEWQ7wnxh6KMFbX27FWrJvgfnHm7Jt172XrS9vhqBYh1SJUJTTvspudXrYF",
  "key39": "2ehzHmxeb1u523GLjTbnwhkNxtASDZ7DfMTbkiW4Urn7coySz4G2mDcFgnqAtCTXaa3feYwb2iEuuUEciXtDaTPM",
  "key40": "44t5qwb5L2jtGy6spRER6BGE8UJLG8EVH5U8VcCJ4wbhZrTJRirNLEZnqWNK9yA25nh3hWxNCh1sgwRtmYifZE6P",
  "key41": "59XBe3E7xF2jAvfjcLgqHpReLeg8DipEjmcNmKTKEmcMpRDTJ4YyS3BqmeXtA7acMCV9NE9erXx9hW9BmVJwPPcz",
  "key42": "39usBnHdX6hyQ5etRrr5n9F54PkaLTWUQzeqmzfcij7Ma89f1eULAcm1c4GWyYkyUTePkTD5DyP9Wk8aYJ52MoEY",
  "key43": "5xTpnaBzFXUV7rpy7xr6Q7oWtxuV6tKmNtz7V5PNsY7dzVKAnwX7nFf29TUztG3ALHaxMdnTV4y1PBdZDYKXqNkD"
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
