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
    "5jK4nQHUm667KYtNmjsJQXVgxKccCcEwo41jfxvtUEcRSCupAPHKb21s9DqYuKJs8zrAdS2fkA5gQ6BeHWFf3hEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DQw5KVfasSKzhdknD514yEDBSgzc2QhHdEb16BoJnATDWUQvmYRtZ3pjJ3AdNV2H5K1fuVd1G38rCfMd6XAoxWc",
  "key1": "4PxfKn2kf1UzyEkuhwUQbPJYKKk1zU7CShBn378tr9JJcNgyF356voK9twz4LYihZuoYrvCH2WUNTeXTHTENYhGK",
  "key2": "YW57L3v7sTDdhnk4Uj9YNNuV3M8XtqKJoZXvyt9kbgkuZf9FmAnXmi8MuH4ZkT4dxYmcq1iJp726JD9E4fSaSkY",
  "key3": "4PkAMCHCpLWrTig6EehzAXBd6njW5wKmQLvH2kaHyYbiT2YNC6RpPhosAPB9QSi2Gu2VSSD37z9LTqfMhppBRKjS",
  "key4": "4ERfh66JAGPX14KyGepycRbydF1MHrfigg4pBdtSMoHvmrvaxigkVhFzdhJbZerJdscWGyWvjzrviSRAiiwrgiGV",
  "key5": "23Yr8X1fYHDxirL7ebkQJhLpPacc4UETm2XYSudd97msKjAdVbPcpjGaPm2DJhcwxNdVekwqaA6Vw8vadjbsd1JF",
  "key6": "4k3DiPcFtUdWtHP9iAoYxg13HSSMVGR3vthpTJcyxeHgE3KDkgdCHciQjAhB2mEAGgEy5FQYBQhKPsxMtqHGmdak",
  "key7": "5KXti6Hym92JHjVKdGVT8Jrcc8ChcciGKszK5xforeHqiZtBXjJijgNmRLSj1f8RGh52dm7zPTKtVFTk6TXFaMho",
  "key8": "63poUTNmxzUDPNbo2A8e34d5RdZ8X9Lh2CAo8x6Ekzg6K76mRoVP1ioJsRCTB3NoPGoB5SxQBaX4FqfcA249drQR",
  "key9": "38HFf9NVSQDfL2rCJ7AnpdYWHwF98fbjB4YCbCQYDitvbkYVyaDsEwK7a9Gb5rfpUaJ8a1uPQChusvATnPnHMVND",
  "key10": "4Gi8gJ4DTdY2ccwtjuwNXhC6seJeZWdxJvkf2AeF2H345GZjUd7bbEqNnKRXCbTLivpzeciw8jJXrUyrd6PNpDH2",
  "key11": "3MFEmY2BgsTvwENzMJdnSUKaRZ6noNqLwMRJNkV5R4ck7jUYMbmUoD2xC5eLZ5N3MuGnq1qFsFrbwbsNW6Urem89",
  "key12": "3jxcp25or1fuggUWTy9Jj4wkCeFdhx5541bgXhrJpN1c57zRfdaBdwbYLBU9HFyWg483t4RRsxxRFGwLrt1GoeCV",
  "key13": "5tKhPhrX6bFVcLfBwNs9zrPUL6JcRZY4CiaWopoKQhpQzyo8Yz656i6zS2i3TahB5iFuZHeWTMDrtTFihdCm2pPp",
  "key14": "5zrvSdzV7xJJkaFUTZZUfz7NiC1DjP4D2bQgyErMEHCkh5FUKRupDzsffTpggNhNrVbJ7ScYEcjKze9dpCfAhYNK",
  "key15": "3Va7TnzNWjPJDvoSopui7EsNi73DusyihPQ6EF9Vk2gmSoHXE52SoEnLZfjwZw7tn2VnouyRyp6sPW5xPUgx8hYc",
  "key16": "UmPZQ4bzwZgWecQvYuF1pbJ9kAoQ2Rwjehe1UYVFzsRRGAFv5E7CpdFDgaH2YpsWCQiAHBnBkkgUcxR1Re9dVp5",
  "key17": "2mWciMLJpeHVTPmMVoA3wBzyg4kxgGCA3MNqMKkf7epmnWzw7Upjr1itQyeHEJhPP8B4Lu6T5Th9eUzPog3qdYfu",
  "key18": "4VsbdZaZM1SCBWninMtfAZ2osHAWFYLv58efCWjLECiQAd68qBPRvNQ9wueTUc4UCHgos8th1ktB7d2wrQNYitrq",
  "key19": "349ZZt2PDBd8y7d3ZtqKunR8E9aDdGgWR1Vp5uuEHS5Q8tgcnC9skfptAQFnaQfVwTGuDT79DBNKdG1ztUgnAoiA",
  "key20": "4uYAVp5YPY8fhdsS9PJGHXjSTEvUfxz4iN8a7BjgzCYVqTGdCBiK2ZLN7U1QVKDRw1RDTybv1U2VzjSuCrk7bLo4",
  "key21": "8VPGVRACYNiU6Au1xpn4szooSDsa6gRHytoMEozWn2ufJRbbEs98r9ozSb25jMSVbkq7B2tsnoRBVc45duimxKa",
  "key22": "4D79fDaWTt3DqjEqMmterzc9UKaJzbwQ9FadbC63TQVLMS72T7Yt9j2k7DGn4DxQnBcLDpwg6hTyo9anwbQfkNug",
  "key23": "HPeaJTJjnfjXyNMhUJSXUTXtjdcUt39bZnyxdLSPxraKiusqw1uJixg3Yx69VV2ZpX9SFArun1VBPnJKHyQQDHz",
  "key24": "2ApoMYk5SxAf8CzfwVpzhvwcKL4oYPy91ok43K9kLVr8oRvxX54RLd8Zm77qKD6PV17tmzyUrK7chq6jFr4ZWAYL",
  "key25": "5CC6s2xd7X8epDWk5yc93kyW1KS3ZPFuLDLRcQ5dvNAuBet1wPKLZ9rfPob2oY5fa5hdx77TPH9bsy8Y3N8YpaGM",
  "key26": "quyH7YBTavFBGqSkrnbdc1sXN9sfCKxZQk7p7ymvaP7ZZmvH6WQzfXeoBSguYesjU1fjnbdygR2AHGaxxRimsxx",
  "key27": "2unC9GtZzcCHsc5XFsryf2Pf3izWubSYqi6ib1ZPFDZAeJCzHsmwVf8XR2MSX25LMHhDGaZpVboXeAB1zKf989vH",
  "key28": "2W4jashMr8ZNFmhnZS54YFEZT2wSpRCZVDK528Ymq4HdJ16MYW5y6SssjMxDreHiJU8RFpqf4HPBUYapPksEBdt7"
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
