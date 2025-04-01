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
    "2n9PSTkAeU87n58BAAUtrbrHfLy58XFRaUJGGNMFivaMruQhhQPnVdVmUx5dvur1z7zq7KsJ5vhLvq3c9SB3iXU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SMmq4wDmsdysE4Kkh2oNU9Hrp12dC7PKXHFHRgHuKJnD2q3KnfQuGML2frr6yhJSGSCedXWuhFkRRpATE1yi1bH",
  "key1": "5eaSPkLduJAixzzc7xuBiMhx43iRVWu8MPkkAn6A8r4gi26ZHf24vdwxyYZjxpYVk7yuoqSa1rJuzkdzA8Jr31yQ",
  "key2": "4kmWZEmUyEviNYoCpo1u3BaS11bWV9GKDHcJKm1Sg4ioWGnk2UZogdAsWQB5S8AZ4tnFuEgtZMorfaSc8zkkbbLo",
  "key3": "4Jjgdk5sYuj68EPx9nroB8S1KDdEgyuQyyjvbQ9naMyEW8zxuWpjTWQs5XBGMzCKNKS97JwAEGSg4yiKpnfTGnjc",
  "key4": "4rb9vYqKZP8h96hQCzfLSiD6S4LCtEB7q9PqmbJdfy3zyYsJrZyRvg6Aqo2q2eVHvTZtQfUkrWyQjZxswHGwnYp3",
  "key5": "dMQN8jCUhfUUMLsAVZUoGqSji3LKNfUhCZo98eZtuFCEN7R3fSvMjoXL9VMfYscdLSFhSkBp2SdAVSgNzgGgbMv",
  "key6": "42iTwhPqc4UweZLJybimE8HRk76x5QnTuvmGdMtuKvEfddbBUNBfvtKBeiEQKgtsBWnEbHrDnu7M8fNWd37ceCG5",
  "key7": "47fDmEUt27Sz6zyVZ6HLLrRVJ2paaT3ArqLpDXLKhiyc33PAnt3UVdj3763YLPeqCwb3o7JwQ8Tn2o9CfetmfUeS",
  "key8": "SBU47y6cux6Yaa1d2VdLpVd2UsifivrLvNUAuRRWpM6kg1Fu77zBgikUVy2AB22HvbnfT5m3JeenRRKLcu2tG3m",
  "key9": "2ZASzyrHdqCPRKGtC8CUPaRRRqdAsGdkHnDHTxY1FSRS981Kx4TraVs8kcyrZCzh46ea3RzbA1T6gbxjo7qHZsi7",
  "key10": "3G55koronThMufDTH9PyYJjQh2gzea4vJoR74KULwtYUVkqFkQt3625mGYyA2FtzE6DT2GgHpJZShHBSutccWWh7",
  "key11": "4HtRe7uw87ExwFaaMGKYLbrLMKUYfyXreLq3p6yJQutXSGw3KDATVDXBsB71ZCszHp2PH73SHY6zXiuH2yFpYqMo",
  "key12": "3FiACftRDWm8qLRiPfwBGxDMJWudb1ki4EVVswFu2J5HDPtcyDDNfbtqhumRVWHY8EEYaV6TSCnKWHzbDQEnJts7",
  "key13": "24UJfc8BY8ozySiPFSRFNGy3r8s7RXnrZTVHKKbCiXv9wWiFtDZVn6hTNstpdtse7HQmHZ2g6sSKFKMfXyEC3KMg",
  "key14": "2jCazQePNsc1TQR2gUQRdobwZGeHPdQkBfgQrTMMR9xAgFVN7wrg7EuRYmbJc4AZBia8BZxXZNJj2xVzUzMxbdsS",
  "key15": "2JFWGVEFAiwcgs2oY88tccT8tpDepuoQDGTpHKw3dxzrbixmqn1bstmf1Ssu4tKNrrKPthjr8g7Rnt4ojnsNZH4j",
  "key16": "2nkGhtdQiRRrCphKnPUGzTmzoCzohaHGYYb64AQ2mQgUzEfxZVSJBCJU8fHAxFodhHUbyYJPZpwTqd5xZof1AMk7",
  "key17": "4sHXjF78Y7FfMQVxU9Zn88CszXqdpQ6Bvg5pkWQCyfcPwPAYABPbVA5kabhsn7qbTEVgSaeHF3S81U4e1jDLWnA5",
  "key18": "4SjbzcYCn3kbwPAvgUtkQN1DtukWrEGpTTQELvJpjgNR5HoiBxnpTVD5E9AFAYMcRxZCnM7iSVdUoiVVndSqHQEk",
  "key19": "54FX6dJz1HgmxSqLci1BLSY5rxi2bAAkTu9nuo4njeEzwK3rGwtsWYnn4JVeV93KazZ1HopZD6VoshR8Tg4kLY3p",
  "key20": "pfyLPwxoirj1LNBAQr2284zbW7GSy7sKxiMbCbdgwPoPSeYe7XNuHsJLANmuxC1KdL6AF4XjnSEe6Xwdz62W8vM",
  "key21": "5xv3PjxYQhiXriK4utVUenhA3FFp1ECWmouKVuHuie1PNCwSgiuWaDi9KKL88F7qKZL29YfBWvZJmiDEbSnyMH4F",
  "key22": "2AgvKppAaH4BYccC7GCZNh9fR3NWDQ9RH7zaXKcDALUfaykpiYnmDkdcTdtKa4L17xHYXmw8qeBtYp3iwcGDJA55",
  "key23": "hYGCAnhSQtfpDc55aneBaYpT1zp87vebmwhyWwbv1ZkANaQyjsJbL7Dk1PFRwonursQFiKFLKn9e3e1Wccu9NVo",
  "key24": "5KFj8ycZo3FdS7Msq8Kc2rfqSrdM9z6NsZrUNFAMdihYvDzjfQJy6t71ZbYmBT35G3qL2b7adhjuEhkTV31Qw5FQ",
  "key25": "3dT5xaWyuCNitYpvcAAT5X8gq2fLfLZkUmsDiqPmLFycE2JHLQZWEfS6UcG3fYvLSFbvCPi4g9oN3tQ3NT1WxqK",
  "key26": "3M6HwyTQC25YiwuStD1W4uTNxz6oNDRFyFtJVgt4U7SzJHRsfMkn31o942FFNLAZciyKyFmRsStcjwYLZywNy74T",
  "key27": "2uCTBpKaJzbRTx7KxvHDt4DBHpUJ93D9973BV5d9z85sLhQobRGbLjMjNyzhsNbqGHuiAMPmsujTnfuw9VsJUMQ",
  "key28": "49vcdTAemXfx27EwriDFuUEBmjpYNnQQvQRCS76GWMFYYJyJgCmMW2FxsncoSPyHoYGVWMSo5eizVmDhKMdMJ5Tc",
  "key29": "3LybJ6n6ZBe1o5FCouNX4RbCQJmP7g3Vbi1FPSoS3ZrDBQoc1xX9JhHbiU5UmhxVCDdE6temYoyZzHvxsuX7VDTx",
  "key30": "JEEV2LY9taG47aArB9zxAKTeyXHdWqvqctuL3xDRwGXjaSL4Fnift19BbS8iL8c4gJvtzEg7Aq9BeqzsRWa5bgd",
  "key31": "3djupraFe7vNMMLyHz864rUh7pRd273zZyYBtAkNSbdgZZD7Em5pnkVczCxGkGunjvq8JKD8Q1xnWZbrgiucUXiT",
  "key32": "MogM4PFX6Rx5kXmS8a84hwqHAJayGXh6tnPyUCrFfVqeDSE6BAtm4EYRt3ahpxZdcC8FVC54NnhUe2tZW9wrKS8",
  "key33": "5zfzZE1yVXiJz11MV1JAw3GfztbTc5gjmLxZrKS9zE6joKj9Vsgeeex1WXBRDYwPzs45sZc1B9DDZ4cRbcrY3fvk",
  "key34": "4gi11tzRMaLQA4WWWK9GAJVDJLUkbSKga8xWwLqXxszSLoZ1Z9sF4pjRhb27P39WSdab3RLzqP7721fCw45JKikq",
  "key35": "6kXHLrdRRJAwG2vCfwXVb9mrXN78SDfsycC9VwMxhXZRnrDEcs2H7LrCcbe9KMBbESK6hdPo36Tdb3XfZbb8MvE",
  "key36": "517xNzD8kiQZpVmRjoHPpTcJ3Eg7sb7DGphXvypeTCsa14STGSNVE62fQ2JmLuL6HYcZm2DePmL8HrsK3GgtJ2jf",
  "key37": "3wQhFDMg9uL8WgqgMo3Z9TbDAXWhPnmMht1PKyK8Gzqfct6wP3GQtXvsPmj3cnafjHWi1mhLqZzLwkY3dgnBzBKh",
  "key38": "5VtYUsUqgVjLq7yHqqpBRbsBCM1jpfgJtBEG82KFLYuYbXkZAxPhBUGLpc7QMtQKgd77vwJcwuuC5vQEALf71Zb5",
  "key39": "4HD7QdnLHMcXjuB1bvMc21edkGpNLSSoD7guFfYWiUfLrAbZnFcZM9594KqZux5EALkkRDQ5g5whrBai9Q17SCwJ",
  "key40": "2tbM8wKuGdE6cXVo5JSegBn4iQacvmB9S2ADSz1b1Mbp7dq6kyhVcBCE6VbvyMdTRJaZANYgyP4wNNVwcXwqdoAK",
  "key41": "4tw64a3aWZErdZrc4rQQ7d6G3FFXY17mnyWhPGkeYQikCkJb7jKVRi3pytzMZwH7f7Dv4YdZghUTuquW6aYxuRNc",
  "key42": "33n3p5oBRi97VjYuDMA8SzXjUMtjAtAFBrdJBuaErDRXsC22roQ9A81KmAeQPD5PjVJPnj2dAkpDRyXPW8opBYXT",
  "key43": "4yom4bcVpTg1PgzNAbcEyQqU8MUGxcFT6FCTsxtUwB7nrVQhebz7swj4QXu4WFyFBRxsHhghysG8MiMPnN4qT7Sg"
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
