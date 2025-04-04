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
    "5PqafBMDL2Gduayj93LyT9gq48DsyENZJQVkEUR6exnAN9XKc3KA4unvAYPxqfr3G94u3pryMFUC4VVPAPqvXB9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bPGDjEPp2hLDafyAodaBtLiLVEjE5WXDTwDVAL9Lxa7G1tfruhWZxezBT7VnnbN78xixdehKxUzbqKFPEDiJGmZ",
  "key1": "5Fyhphd29Us2jbLErzN33ofTFQeNuBoeUCHup6Pn1Xpx5ZgksKLY3ohuNhDsfTyNQgZCcwMVERaMokRLGRRrZcUP",
  "key2": "2v3kSEwiwsePoqcJywCqH8Cwy5TsLNJf7TfbUmVPcD73uB3bvhHBqpXLEGbBWH2ek5mPtCzvLxRjFH9SWTztMXkR",
  "key3": "5YCX3xf1N2FGNTpcAV2LZzyTT6zhHbNQqQ9nxaifxjbdtrQ9TmnuipZVEySMdBYsfyDqUr5pzjZeSRQqoQvWFM8C",
  "key4": "4HJZoxSM9NnZzmgX59jf3qSKPSWSEfjrUCo29KNVY1y9T3vmsaND76ob2XjgMoTPcW1KkyjzBCrZJB1diDy1JRc7",
  "key5": "4mwwRWF9Hdkx72WG24hpK6mKXAGvEw2HgvZjPo7BKh7yZ3Nmk6skqttWqMCC6fxroju8pU9VcHH3iAjUUtVdesj4",
  "key6": "5ZzPNESbmQPKitfdaw4VTmbiGg6ERgo3vaVbVPacQK2QUQKY5mLXHjmMeaj5VL7ULT42RXSo5rbx2JYgjjEQb8iw",
  "key7": "3bVPq3tKWoNxotJDNTqaPknXFFjt84EqAKPVRikrZhLvLUnyaxWBokeMMVKnLVXzU9drVYEHG2XafFvHnejYRNbg",
  "key8": "4go6yz6DAqczPyWfov14XZ7EhUPp2HUFufAe6vpgH5U4h83mPPHeeM9TjpmHBfNjUyHP9Bp1QJPo7RGXJECGM3GS",
  "key9": "3wqxfmsLGGBNVtSy7FxzSUdCpVEyfsQ3Gb2zD57YT6TRgy6U45fbLdxPpcRpxEjuVshWoPjRjCyADdCAjyJSJrvC",
  "key10": "5KrusqJvTvoGVtvtTmkXVm5w3RuLpxisASdhcaEQLaNhVpumFmm2Z1jMkg74daeqhDNdRb3eSNvLHfGdGLNoBgUS",
  "key11": "2rWE1xv7e8Sh6bHWzueRTGVeNFeYhwegkuXprt6rKYJWxxtBWsifagZEbVL2Kxnz4dnqXtJMWmhFhaWV4iVP8Rcb",
  "key12": "314LsdUdc9yo2jaZitbJqPHGTnfSb5LiF2Ej9qE2rPsR3iUCwbK6eGDw16HszSX8cQDJetMD4jbPwQxHCgrckirc",
  "key13": "c8TQVXa3YVFUf5UUaqeJRcDednMi5PYqYtAXNMKmBbapns6C1Pu8HYGSHAWBgbghBrNiCiw6PhyPLuSRBbzWz48",
  "key14": "5s5QPJu2C5nf3F9nUshCvaoZkV7dU4bwW3ACDJUaoZAHqiS8116zm3AVrkuRd77A6x2s9LJK6J1MYjyqgjp7rxDN",
  "key15": "4LHpj4ddgiZHspAQ9r64uJzRG3VFjiQYavHSM6fNrmgjyjNPQfvGSDsLT8ohQZ5GbAxWGrzzhN52FQb3i9bssC5d",
  "key16": "3GEWhsPCe2TJs7Bgw372UkYhk6CKjKXKxcwf6DnwkpriBa5xfEteh8vy3Lm8zt8cPgzLbrHS7znx9o3RomZmAwBa",
  "key17": "4YQJGHb91iKArtPiWznPHfmpfwWUcNArrg5PUro6cQJh6VMo8rm5c7ocbHNdwkRa92NpEUBkaJB5VvsDsk4bv2LQ",
  "key18": "2yUCDwj9eYrMaDVkg26HNDFJfeJNA4N53VBup8chb3934At9Gp9p1J1L7TG77yex6jPFDarRhhbZuaAZywZiwJSE",
  "key19": "4eKziYE9XUWAYCc1CQzUN2DYpkT8oV6sD3DR43eSNCzep1ZxTrmjQuwVCiDEFqgNx82mLptqZVpY2Nb1KqhqRxBX",
  "key20": "41weJrPL3Rv1ajRbVMJ7PbD7Pjdptb3KBamDToJfiLZpaPwqAV3yYcL8R12HuJx2LKuMqkYpuAS8zd4vthXb2Fxd",
  "key21": "2ibYLYdRDH8gXhvgxbT4nuZRyid9iviVyTKHfKAbBaFyeYj6LhxEzafuaeMZqNfxmPAEp5M4BLzW7VC4Dq4PNnuw",
  "key22": "53KDwXYPra8AX8hTq2dmGKWrspWWYeKwsN4bPW3yLsEbjjtUiAEANEfiKXH5VvwqtZU19s4kWjpwfKzdPMntE6vm",
  "key23": "48kTnaAd3Aqigx3A1VmXBzMmXzCsoCMuud6h4c3DmsvY8X7CQwQ6stm1rRmYF1k2GbbBZYm6j6d7QAhDxtPy6zMk",
  "key24": "3XQCpFzrr9mHezReNpwmfphAuhbsWxd7pPFj5SYuYBSGud4fZTfQAyJEBnuUmFf51efGHMsLsz1K2p3ahxU8GtXV",
  "key25": "oRdmk3t6dPWte5YPf7c33tGixNcitpdpRjMPBRpCpgT3VdyHQktb9vURgPEoK23jdXntdrDZKC3MrZDj5zPwzWJ",
  "key26": "2qstUrSECvwW7JHGGiqGncPTewbF5ib7tgnofVPfxmzZJtyngY61JDT5Ff8KWHH41Fe3AQU7zp8jKAWpUmPeJoAa",
  "key27": "437iLfLbEeGJsaWjVJSf4hgqKr6Ac2cGiyPYz9EQs1afF7GkbuC2ZgPL8Wpnn6HcLohucLTzqEfJozwTLqYU3r6z"
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
