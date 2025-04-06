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
    "2wwUmdcVdCbCmh1KRjC1EPvCfpVpcr96n9NNDUQ2PZvGa7ZZLpTupJghfb7emqHmtkjEEK86icuQ6QX4QcNfsWXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G9S4iXkwRGKm7XydkUCi6sNgp5dRJJ4LDzT6jpxydjwnycTazArp2qBqHv4gSYQLifCk743JyJZfsYCs4ReEndh",
  "key1": "2NDweGsBTQz3jhmTABBGEzEVkNFT4qqXs3dR7uzB4C4cUdbHwFRNJ62KGE5HcdhKSiHdgPqpVBhc7V5ySkXdYT3H",
  "key2": "5H6VXafPC6xxJ4h16PgpERfafvmmmGPcfBntEmJjbdxM58PXC2aUvmS5q2dsmBA7vfUp877LJxYAq9bPsFUY8kDP",
  "key3": "5UwpErfZgCDFZdwQdJgxPxVQgWwLE3UN1jc2RsKaGMVbwfUH4cvbaBskQDSpCsxe9rLHME1vogQqFgqFGuxkBKxZ",
  "key4": "3ApnhAqwyrhgoef7rCjG9r81WWXAaGKpDBoRs4cNssDE456FzMnbyyBgmRV43H3heGcUhjfHiyvpgncTzUuQMsRr",
  "key5": "5o7W5rAJ9HLbuxuNkp73zPiLFBRMSjnPiafJb6YbzLa9R4QF414HR43rmXnsEshuTu9JaWL4M3bJZzCYw32yWteq",
  "key6": "56Umztu7pnMzV8UX3nK43ELzHdXCA4DkRowvkuELaXtbZ9JGs7YpXHjDvDZfekSMNDhY7ec5bmttxcrhxhP8hhrR",
  "key7": "3GtMWb4eZ47GjvmSX32nJGMUbjSwHhqhVkooJcpmRyb6Md5MQpvBerfNHQ3nNAfAuDrVphZxFshf3g87jWCRdNY",
  "key8": "3w7KhhYEybuCVQubDRseRLBjTPtfqDA4keQzmz8AmMENKtxRZZFZKesTru3bCbgYCdUqsDkQsVP28SmgcLomo1dL",
  "key9": "TxrnhwP9mcfQSA6PnB4v2gsiWoRM2MMg8LF4Ev8KE16w9ExPdyZiUXN2dnSacMaggboWUZBkXSgf88rpK44vdzd",
  "key10": "4ghojHDgWyV2k4x7cLTY4sWbj5L7omuG4L7K9rxn5EW9w9xsLbMy9zd7VcLBk8Rag74FLyreVF1DVdRSRkbXjGvr",
  "key11": "vknzCLiYv7CCYdy5DQRiQjMgdvM1vD7GuqrsRoQK5z7AD7AfWkpquP8owKY5UdHBdkYKEXJLBGmjyG2RYJr8Mh7",
  "key12": "5qoagdZ6vADkCNaL5XiUYtfZaEXPCvPpbDC2ADo8UYtiWPcaPJi2kf48ModAHPPuetW8oSi2XZC68HYv8645ZzU5",
  "key13": "5QpUdgnYSqgXubne8eJM9KM9t1XAd1beAeEnYsPEqdN9BpFLtZY8SNc8Lmou8ErfKn4qnQjXyx3Dw3K81zbKsreU",
  "key14": "3W6N5DwM1Syy16pi4eyHpUMQCYKw4tLibDBXW4SyJnRrcmrjk1XTAyFwER7jwcVmm1ABFdeFdYYmQjS7QgW7kykg",
  "key15": "27xwvWXLRPVVXWT8bSghmYVJQdnjM7noPhEFo5NVmRGseAYXBzABQNJ7soLySZU5McZ7pEmFRHUSboo4sheTrpuK",
  "key16": "e5mWkT48SVN3U7zjeRPWXJqfYcT8FrA1z9NowoyqekoDbBKRSMhzTngEr7cCocvMXXwvaSRivsTRNcGgjtAH8xX",
  "key17": "5GAMtuUJvP8ZBbtCxgUMVgaU2ehhbyBW1izqAFcNsb2DDtFsP8k8KN1NmN8mLsEEaigjxBSM3H3FjGCSH3Skhiud",
  "key18": "wkV4BhtX3USxx8YwrYYjvRfU8T6o5iYBFmvgyA8fuw3mMmDkk3d3aZRJr4zxEEGpsr4tfGnbYV5F6Bb1C2R2c32",
  "key19": "3snJ5izzmkajKFhb6HsUH5Z6R5xnPs2GXoj8yTpJESSNSBJd4uicsu43PWRfwihiDYZEiQX3DeerGYhFVs2j32VZ",
  "key20": "2Hepr7GMhswd8riMEuCkMnwxJXMK2G82VQJquwxNWRtcMEKkhWUAcjJKnrzjohDiwWfwaZLWKsZfXC7F8UrTDp84",
  "key21": "3NXrcPX13zEAZof7fwMdtcHntPLuC9nNx4nqj2U1sgqgdyGYn9QJ69RNpS5KDUhNKTac2F2QwkmByn2dmoknPvKs",
  "key22": "2H6NU4VHQ7kkdJN2VFEDqgm1g92FQvpMcrBRxj7Vzr54bkGh6pDL4GsHH9HP6gdLc2d9ZLrs88pXDRqMGadV9mjJ",
  "key23": "2fYG3DTU3nuUiD3W3RbJwWK7fUmkEHChwsp65npJWHDa2vMLdwk8Ur9MasJngdrVgvD3CzjoSY5NRFs3nXA9xSrZ",
  "key24": "3GRQLhDkRJpDmMzfJc2TjmSENo1rP8JNqmvSitxHAmPTN1EdsA78AcmmeM9X9eQx898J1ZmZw51WWpwpMd8xi6uf"
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
