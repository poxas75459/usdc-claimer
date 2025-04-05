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
    "2pXu3J79dKC6HQznH2CXmYN2r61fvhD6VUGYb3SuaCAwFqFuBh4rJaH9StettAatHWFpxfLb8drSTjgdvGAkCdMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J7QXdNLFcYzsnEgMqS6dYRztrCnCC6pGf4nEqmcVh2R9m94eDLL2gJ3Ah2Jp4JAATC8nY5t1eb8jj1GB31FBgS4",
  "key1": "P3M8mLyMSnzEDY1ewAmrrdRghMG3cvDdACa4j8iEwMoty7Um6gNhVQNjHguQvah2URXS1R4N2nhYSg2frW4k6Tu",
  "key2": "3rteRdoTX8DMRrzE958Db12RYmD2hT3v6MHUi5oESGtsTes8hv4HsB4gDFoWeGYBefnUMrC7bvGTWDRhiEbr3Cr7",
  "key3": "35pmYAGjgvv5T25PnTAKKNitmRHrab6svdWweiXetE4LDCbrB8UwoFMrieEA1o13M34dFsUBJBrty4BHY5PW5nGb",
  "key4": "4WVDg6ZfJm3isYrq8wWwugR8oh5X88EMXTpxQ74s4XfSdJ98JLTxUzyPto3grT1QR9XfYJ7BF7o36TMdkkuNSf9c",
  "key5": "4HGYAEVrw423xuwRjqQiad9or1QsyjFBKgfurLUT9dXC8uKpnvdX9JjMFATNtKXWHTVBnkxdmKAmPfBHguPYE39Y",
  "key6": "5vqHLhppXhpuFzS6u2ff59q5AsW3Zk8xsJKop4pPzkX5a6Jo8fCmkTrwj75xdCCYNkDKSmfMiNihvLihPUhHQ4YK",
  "key7": "4tKwevozLs4W1fsJfd38wJ6epTAHy3tbEkYfce6j5EaWbi8FiGyoeyfXDMdQBfYhJHSNxHSexLpsccu1S7rVxLq8",
  "key8": "3sEJyQW9ho2K9jByYEW31shau7kHDAwQbUrtgQ1vKBSGYQts6xncB412EHZvqhVg9GrvyS3vZAANQZr2rS2zoutr",
  "key9": "6Wvw8ejtoPPGBZEWb7rgR1ST8Rm2cW16o3o4C35yF5SVkGRADJ46PTDm8BkRdhnkgf39VJC14oSueiV2FjSGZj4",
  "key10": "47jdL6EJN1qmk6cUqwp9soRUku4DooLVFAP33qKTPBqTywaVkTa5yX4GkdgsJGzBX2Lyor1DPqfR7Hk2RtW6kjr9",
  "key11": "4F5TRHkXgwQBbjUYZoWac9Crt71E2n3RwMxe5L4xKLPbyYzECDddieUtzq2C5CWbFumfdDosNSx9sQaie1vpbNFh",
  "key12": "2dHARUGBNop1HsGUPwHeuqmn3yay5bHmkvg5Rjg6VWfWbY2NhhpX2AJK4182wAQpsgeXsZ4RBwDtmBWnTy4rXLH7",
  "key13": "299Jj7V4Viswj4MDBMD4or77gk5weGaL5oMapjxuUZJqfAwwrVof8gvm2wfT2Kurmu66n7dgcua4V4qSeaPypeNy",
  "key14": "41E9rU9S8jMKVD1BWvqhhk2vA8a3RdQKG23vBAVHrqAohZdMH27SDGu6W3ZTua3ccJ5ZaKkuyQkmZTXwZq4KAHH2",
  "key15": "fzWjKgy8kDWFjEoQnmGusEkqCNrimmpRLkeVYJdkCaJZg9jSSGF94DxRzwtj8p3Dzf6p3NJbCVHs6hC22tPJhkt",
  "key16": "4CS71kTdFqEXLiakxzp69AwdQc5PeycboCqKSTXQuhPogZFgszjtuf7r9rB9zcSQvgRdkS8XjrxqD4iG4RdUqy6p",
  "key17": "4kkzmGLbBq5yrWVn2LNbidREoSYhEA74SDsPQbAqerwYm4bMxSUnJGt1zgG641RACtM3VTGP37obo7WrttmsXjYQ",
  "key18": "3zmWSdp8WrCifcZ9MTuXKNe63tKwQt5kSMQTa68FXpfbXnAQxRcquHRvekvGDMZtuKExQQfBiJeXVnnvy5Hjpfn3",
  "key19": "4qUT55wdMgSTdiWnS5Jfy6orRWvGDaMHfYtkFtmKYW3veFZmBpuJyNC4seiocFgYD1ZKwema7Uqm9JWAgcBHDcip",
  "key20": "2pntphBmtr3ZvQYF8bt7sVdG5btJNp1in2G2yxTvpDFVnqQKWAwno7g1huc6cKh8wVV2k5FD1S5NQrGzDsWMfSCH",
  "key21": "4P5KPvhm82YbnQ3s7pz5H753DmqBcv3XP1sU4aBVw4rwzKJUY4bDjo7Zs3yiZ5kdBqKtmnXRo89qJ1afsNxvHg4N",
  "key22": "2PpexZmLXJcEah1AVUdjMJeUKoVdHMrUNaAMJCKJghDayuy9QTwq1ZPU1R9Urnm83Y2UssqFebeadqPpkqYm95Kz",
  "key23": "5En484czTYNprQciqNFtVqaHBqDq45MsCWDyMmbqhiWzUzq1tCZVZfwJ2JKAXRXpCtiHsXZe7hYbEswdkzvVDpHV",
  "key24": "5jaHdcWFEm4ogiLtK7KFWosZw5UTcbo1a1f7DbFdJkLa9TqhAuBhwgWDnkJq4wDmd7i2GV1BcM3SUkSBBJb7eFLs",
  "key25": "55YLUMwnqR8znaGSQ51SAckXTRcWG8qrqDA9v9Ukvfa7evbnMa28zkndBq6SUcsJEystyVQdXjRufFLQrboMwMKK",
  "key26": "54EeqUZdX1jcvJbkQ1c2eoNZf78A1gMuwWP4NeJayWCwMV1RewGNxDrZ96DPBepHw2sJfst54kV8Jm3ajzj3Pc9a"
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
