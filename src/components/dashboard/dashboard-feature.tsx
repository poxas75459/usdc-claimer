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
    "5me953qZdZjn5pNdJXpJkYyJrvZLiH721qDosEibmzCfhfE837iLuKZTogVfJFR3yftQ58kFNCaQ6UVDMuC85vpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gy8UzaJFjYKTgooGXPFBt9yW7mh9zXJSgJ8j6UCtu5EVN1Mv475PDyepUtuwwZLS5gqYX2gMe7TP7jP3Xb31ac7",
  "key1": "Njfx7ttsYXEdAFZ8danhbdDod8v7h2hct9rkA682c1n9nU4VajZUaYvJUXL6ATM8gbsvBPzR3ZhWLS1bKQATqZg",
  "key2": "4UYmkEky2grPN7vbEr7EH1n5Egzajy4XyRCkEcr2sLmKf2oitokdpTj1o4GGadb61Yr9K4L3zxV3mNM3yBtBET6b",
  "key3": "5qupc4TLtPoTAhguXkAnwG4CXUpHES5skxfh1ZAganypt7Gt2y2ChBnq4U1oEUxRSSR3YpoAnxM92G5rWQZJ8pgs",
  "key4": "NaaSZp9MvZmhCsri286XLSRZ8zenHkmDnE4rqCn4Ktd4WCLaHR2yCHTDCWv4VedKso4TLekMgXsexcTZbxop1kF",
  "key5": "3dzyCxGB47jjaivtzq35VFzFxJD1MwrzguoJbQFwjUV477cWRHoWJSmmFEXSiMibp34o46eLRDuJa1pyQiuMwTWX",
  "key6": "4HwzVTsKkix5PMMDfZ8eAAzfSabXKnfmGqzdnQqwwgkP2qSCkFoSxFac4mSA42QKjBLa3kQBMpYSh3MhCH1NGDEn",
  "key7": "4AqMYCSRAzNG2pHTUtv4nLeZeS6vs4AAbgMi7GHhozciUehciaaR93pDVcf1UQJsRqxx4ZEJ981q5hpu9dATADKV",
  "key8": "XP4dMtGPThuZyTpbPdSsYAVxHqGg89jLw6PqdWu9v1gJMNtJWeprKTC86sPjvMfWJYMmCck7uBqGoYEb45jLy4A",
  "key9": "UFufY2aqHCzANLa5CPwcUBgQVsPTpdXFvP9LbMTtzai72654cX7LnkcXoZdpZBW89m9MCSEMmGmZ7fPKFmvZnXP",
  "key10": "Wsrvk7GAM1mVn76KH8GTrgbeGf1hBDeQnz4nUAp5C92hqyjsZzJQQJNvwTtuLFV1eFAhib295kjaQbr28C23imc",
  "key11": "4RUExh2ZhQCzzPAQGKasBpdfJU5mqhGicASpTgWQV76tBtxTA6X8iTvWGUmXr96JLyiF1E6m69VwuAUCoMDNNoc4",
  "key12": "4m8jv4FufxdamuAhbNSP8uQjEb7eH69cop4m6ETteQ45GrrVAJFi8yr8Zt1ztxKKqjWZj8VFr9f4MAyMDsQg6JTg",
  "key13": "QoHJG99zZW2EbT2C6hmbd2WKXMRrxbwMubbCMPp5epYwaKDjzT7J4cDDFkjCjh1vuEpNj117kqYjK6wUUMcLXGy",
  "key14": "33uZnfYmRUWVC7ykAXks1B1bLa7YsMGwrj6YWjxFa9hWGmVKn7k6KGcgAACXsPmtHMC7JATTeZNb7zz9zuemFbNT",
  "key15": "5xyF51Dys2mzqo245Ao5FqdCXvFowDseEHzqMt2yoaAz3Nvjw94UA1vbnQip5u1Nb8VyAeUcdJ7CD723aAmoz2Yy",
  "key16": "61v1DYUQowGwedKPwQKcapzn2THvrwcYDkFpn8vayXznHQC5pMRsNuAG1t6wqJ5qFGzyeUkw7UFPqTyW2rPPNkNf",
  "key17": "3W2ZqJS7wpi9xxJb1y3BVSxGSWcJZo52pFSEvzFJYdmU1ndKkYXAL9HD2UvVVBxDmrREx8vNFBWhf9MKXi4xEpED",
  "key18": "37C1jhZ1G5M5UaFE8NkTtrgQ3x9k74kWNJaKxcWTLysLuNMbPf39X18qk86jaQUTuJd83zQcfbgGDDjkZAvxbq2N",
  "key19": "2kYTL7k4Dfv9syEbFUhAGrmwEv18XpoSp1SGbEicAcy9KAij9SPDus1BMVqjueVpQ1WjnizP35hA5Lvjp4gsyyH5",
  "key20": "4QeXFskdwgaZnsHkhGPMX8f5obQpH91N4LtJ2GHCT8p8fRxbQAA3hChaH8oBMuokH29K133WEX5HqEVgZrXR88sS",
  "key21": "2rLtGT1EJG6fRH5bEAmrdyBfkj1pJ6fn5ATcsVWyd2tw5khAz34Evx3RRFSpotqRKSmkrDq1yBSGPkZSfb3RGU4D",
  "key22": "5nnNMEoe8NzmAdeZ1pAsxDL3iGcvJ299YGXAQJ4oMJC5wYy7JUWu3sDccUhLH2YGfBv7B4fcDPNvnV1kuU1puBcG",
  "key23": "3zDzGjDPEPR1q5VwcRhBkvT19nD8i4aYZGV6nNf6KsTpsgTUbrancZ3dKit5jxXZjmGdZD9dBgeCF6FTy2XTTpNs",
  "key24": "3XzmWrq1UfRfpo5AUZ1dD6hoqC6KSVGeYF44CfJuPindMdz5SbkTW8JMdDtqeJEq18cBzrKFrAqk8BhEUEcAPMfj",
  "key25": "4eTAGK1spEhSnMDfMaDLUHiHBCEk1iQ49r533gc48i6Uq3mVHSXw59dAtBcysRzSBxbnCEjS5QJDTYkm2F72turZ",
  "key26": "3Wu7QH4sw87fLcuNsUCUzyLnuzxWQvdKr33qwDFZKzRx5EurufWKZkueqyg7RscSKQ3YrkgU1m4XkBcpv5SHZGdb",
  "key27": "xmJEeDMWwfHyATntUrbaTpFTVQRfdVd5mMpYkoHEPp3VFLrBRDd7HxGs5Yy8b47dNWZPzrgcaCvhbYKJmBVCSbv",
  "key28": "2XdpzBYbx416REkx8mP2ciV1RqmazwKYJRyUtAcpFqdDfkrrFsdYzduTGeD8PS9Bkc9K1S2hkPufUzveHjW7jDcv",
  "key29": "35jLYLRA8HNaRnNwqsK1AbNsx9VNFBWQSu2evTLBeYyWuFpHqeVB1K7ACaeR1XJBGUiUdpeh9pW5Fw1b1MX71ZmM",
  "key30": "n64Bj4Qw7eJguZCcvMKb2hvr4JnsNL1gRhEjV5iPkmqNxaViAAZcn8F7VLD4nZyCZukpXo2YkcMSrhePsbNxLRE",
  "key31": "oURkmnxCB22exxiwF5eLiC3Pzin8fjhP2Ha19cRBxKLnb7Xh4Xi8mSam86E9LjkngoygobqfTDzaDKKMU7hydw4"
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
