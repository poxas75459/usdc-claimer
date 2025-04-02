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
    "5sSM9qGbRykHpktEh4N9gzK3dnoykpSJp1YnP8Er6W9tnAcz1TLWckHNucNvyVMWjkHDRVo8zKzYi2fP9YuebSJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dVS4P4Vd72wgw38frfwobaupQcPkN2v9y5nZQyfv5rCh5haMwEfT2MSoR5geL7o8KrtCsDY2MX57mGRmUAP3byv",
  "key1": "EY31wqAUJQp9kj3CDdwHKHSKc7hNPhmU2f7j5p4WULCNAmY7ZJV6UXxwnbcM1fa6QGU7P4L3uXX5sjvQfLe7weB",
  "key2": "2kEb9j5KxhzuQAX93kjyRY9iW9SSTFBj9672H7NtduCy7iVo1yaNVz7DXH9waXqR9hJdEu6bLXGTnmXaFkrHwVEJ",
  "key3": "5WBVUY3MDSbRuCUbT2GbsvFUiK5TxweQcUs8WzS1YKBLbpcYAKdjtoWQj9k5rY6d9dQCvrbMuFYJycwFeZw9Rijs",
  "key4": "4DDZcyZAoWDShQuePEQN3Ku7EEsPEYmW3LWorF11rXCaf94m4XE5eiGaZXzSscEL6SjLvS9CNFpeBPTr1zUJepDC",
  "key5": "2X5UkmtgdfzaTx31UyhB5hAp6QMSFG57grvABDMoVSzwB2RMAWy3WPuFUrPUxJtth2VdgMktTeNkGL8H11RpYf7n",
  "key6": "urjQsNzpieVbqM3bcxzmcV2Tboe9QAwdczjgoxrHiaXMjWEDykPJFHeoZNAxDpTkuTEpwNYbzfb62A1dcgDH77p",
  "key7": "knYMK5F7rFDxEyspyyMHc1Xmy4fXrp9v7gGJZzoRgAqj98Nhw54AnaXER6ZopRr6UQrWBvhN9QoKLxwmYBKavsn",
  "key8": "2H9ZCNPkaRamLcD3sT61XwXDq1Y2cekaEyp5YqV2v4HeNdvrf8zNaPaPMMMsFaBoKptnZxFxEcoiLQmbDmMc2Zab",
  "key9": "2bRCHakm2oHxkTWbyNHzJbVQbsKfmo5EgiMwveNSMYwtaAgq9P4gkqdPm21SJTM7aWuPtcYT2jUbKhYQnnR6FcRt",
  "key10": "qmSZvg4sW1bGJZZqR7tavBQ8VM5eUpRYsGyQw3u8qg1K2pmZW3D6mzuH5x1zHrCvNn9KSY1X1Abpnh5EaqVW8Wz",
  "key11": "62wtoLJuqfPvumVQMi9j5jTKPQQt99rRqwRTWgPNCxVRVjHccmZw9N6VC6xRXWcRUBZhffEcRN9dpUzoWcu5coHn",
  "key12": "5qf3pgE1AGfiWTuJYrwgJxPX9kSEuoaRNbuLtAbR7MCeH7gxSg9Q2RRfemcUnf5hRBT6P1pq26yfxRLT4kyzUYJ",
  "key13": "4kVNtvH56oPwNvuVFUjezYiXPLWBVCUf1nMBVgoHRrbQbzP3cwBhNpgg1tpzArGm1rykHsxgvppk3Zp9gwKzJoPG",
  "key14": "2vLsHWGTiTuscLrmpMee8NsxW4SjbSGJV88ShPp1p3cE2yEXRcQU3Cd9QjL1fYPs25LwrbxFUArN5BLXynP5k9jh",
  "key15": "35k3tmUkGUyVXC47QJ1yMY6Ppukh2v1tD3BebmtJcHxkACecZgPFAFygPLYkKbtAB64ZkyJ636nVU1sSHLX6pAZr",
  "key16": "2um3GwHDRJBMSwL3kxnCTRgyMmkSueF412b3DnaHCm8MfqYdqSkBi9Xx3oMY2en9cmu2M3LYU9zRfUv5xV3iYUyv",
  "key17": "dwjGR4b3JZXPByLtu2yc7NRipf9CK8eH2DCtfqELvNfRzYQrKXg9fJsf9wghkurg6tcePKmsV54uZwXfm2E8dsQ",
  "key18": "5CLkZsXitPxntZyxRNK1pCe8H5Tm67taUWN4W8BkUbfg2w42m63HMFojRfRQ7ktNh7u9jHpcYvkAfBp8rw7WXcgd",
  "key19": "4KMMvgLbUeHBW7drFi8uGDD8NiZQEzfjpAunHFNNZ5rmJ2KovkP58SghKHByEqam2qjWc1pGcfko5s4thN7PHyoL",
  "key20": "2owDSkNgkjuwXAdygTSZo6Mmnq5HxU7gAddJD8Y9zQySQJiJu71E7ajaqYLZYaYTGaratqokTdqBzt5mfA9XSv4z",
  "key21": "5uJqXLFJbndFZ6zVWapKXCuVWtABTWrQJZTVhBhQ6U78SgarLPLHyVipYqSkDwVGuF8Ax2s1rquSjUTFvr3YDeW3",
  "key22": "NSBTWuEUteSdYbEyza6vgPop6wdhFgphEwTqQkqGdxxnWbrmkFBBCHNsxiPTk32KRTsKw2Y6F74DXHv1wowobEx",
  "key23": "2WwYMo41Mw32uxQKQ6TDrHoU2oJu9fqP19TwpEAC7mxnzGFSFjsvLtk5Mi7fkYmMA9byP9DprMAEn6rMNK9y3hY3",
  "key24": "5qH62wQ3xpYPCq2AaM5cTh7exiFZk6RGUgET69zVgr6BnHak9DE3AtZVKpHEEqKcDddGHUPi42MVh22cxv2rDxVq",
  "key25": "3L9pyuvpTsXhhmSW5sqGeabTkEJ8GjCHXCjw5RNbzxqWCK9ZWZY63V2yQ9hSD2PP6sRZA9qzBhufDW3m5Va3sZsW",
  "key26": "25eTdpneQEyfLBSG2TtbEB7z33JztRGYW44ezLKJdqtt5neZBzGGPGHot57mp4fYqgT4NcU6jbAjCm6kSjebwMck",
  "key27": "5Ary6CeJTm3PigtH5nJQApPjvNQdSL53omYu9EA4FdFzXaTKLy1pQb6K29YbRW8hABbi8GLSUuFEzZZ9WzaBstKd",
  "key28": "4CLZSfur4nuD762zQEFDhNmwXRJ7ZXW996QMAj7zhfR463MXh5PqGwFGoZfdqGDEZu37gQ4rjr22aGP2qBUWje6X",
  "key29": "FKmqtcJ3UoLCjujxLyDNY1YEZixZsLCXajZdkonpAh8yHBYfQBzSukghyG5kSoa7bZtMge7nvRpPzY2auYANZoj",
  "key30": "2qhyh1Y93tLuWtuDYrXccxpKdZYpjJz37FYvxcfyCusmf4oaVUpLoJaiYjeGzW7ZwKztBhMgsPvn79YNbyP1uRAy",
  "key31": "2jTwACAWafwYvSTU71aEhJiTuZyiyYr9TJt71SSpfmED4XinLbHXHaGciaruhNb2TZezUosGHV2xhQp3bsbJ175T",
  "key32": "4ieWukwwC6GjeUGFksztPgYhV8DZzes9DZr2oN7M4pCnLQothxaRERPGfRniLWmv3qg4vMv9Vanwk6o5qQUAgRd3",
  "key33": "4wYy4WPUWJgy9f9MQ8G66HYtSngHEBsFc6EmGQrp2CT3yKkNWMpA9dVWgqqZhff6Ana21KA894V8mHTcrLvNwnHf"
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
