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
    "2dM5S3M1ZaHiqMn8kXVzbX7QUDqd6uyiPbsSzycBg9a6FqWwwcei7fUxjQrB3qXggWtiQQX9zJAe6QNGANx8rGbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iXgPYjW15pW6z4yCRjict4ixiCYEPHUbiVT8GtF547cTWUjEqR2VTFRzSxPEN6cokKd3e4LR9ZrsugynM1AGy9x",
  "key1": "2eSzuv63HbEhjTGpYvf84wQj8N8RSfBJ7Nmv6VsUrDtXJPuZea3VTVZSdZC6nKstoi5Pv5AGx2yETjULwStYWzub",
  "key2": "3LfCGibmDSk8Pu7K5uVRPx7h2ZypoJMWP8B5xTZNKLBdiDmFLq5KT6tmQ8DJsyVZcdkVmFbAmCtfXEeoqjzSrpSV",
  "key3": "2RGHCA3nSqr7wKVqVsQL5jvvoQ7fFxJC2J1YjNe9nFu3q37ASXLcEr8GeEPDfwuJuD2fgDsXCUCLR15iUcuhjLpB",
  "key4": "2fyXno9VSr8RK7fTFWS5HYUJmmLv9R99CL4EB8X5dMfhtrmHc2H4svaHMwygBePvwsraFvYjvtEo3pErwSp1L5uF",
  "key5": "2fnYFiU1j1g13Zae4xsunNgL7RjhECRkEMfekXqLqRTy5YfSn4b8vNCXjfyNGcZChKe5C6hupsUK31yK9qmAQpLS",
  "key6": "4dSWAEMcAAWKRzU7BHiJrvMR2GtM4SHtjEa8aQLDrs7EKQxWHWPSHCQt7SYDJDsQjYJ7A2x7Qq2WtBdhraRp16mu",
  "key7": "SXJTPRRYfmiQJA8hhND4BuFZHDwL6T7R1cGDq4FtAUndbRMUoDB4zLdpgLJJnjcg69L3RgviKPa5SeSjdn2b6iR",
  "key8": "5G49nDHRqXQbSU4MvehDS9AE87FTDZXcGCJ4wzZL1Y1Nkqu3P9BV9kEg4E2CVkJMcanYVAqAJw9objHvuTSxKabV",
  "key9": "wqY4Q26dEzL3egLhfP91ZycvGHXAF2JBf5SeJoBLAH4xgvCnmgxyXhsBsjD1X28yvvt9MzXQdrXsXePFpb5Fsvs",
  "key10": "4ph7obWU5EZ7iQVAV3fJ56Gxspdg15DsBLYMGagbSYeuVb4M4fAzyXdHnZbe86tAR1L4ccCZHrvLt5KruheJFsGs",
  "key11": "3xBm5pDq3ok3mBpxrSeAGbm2QMvEnTmrKsH6XBrNkRkgDo4sNrGrCakuoeRutDWxCh8MT48KeCT9MtP2a8c6wRQv",
  "key12": "5UvZWeQfCVt7qVR1GoVYV6PAzvG2CYXnUE3cpcktX8Vf6TkREhtt1nSaZq9b7cGB3czYkYVoWvKtLhQnsoM9SPhE",
  "key13": "5vKa1xWockPbYQ7zZRg3CpYGuN4ScYTZcTXYYnMAMqz6aNmUJxPB4hYS1HV1rkbPZri6CpD6WhoALyTAd5BfkVbp",
  "key14": "2KoBCSYsRCeHKAMZrAcxB4LouuGKNHn3GBCwVzvfSCFvhvoefefzhh86iAzWdBBW1HbP6qBkJYUUBqpst8nphw91",
  "key15": "4wbVWsvXqibXaJ7Jd6rAqbiuV3R91VPtxwN1pk513FSA6AsqhH7QxY7qAcWYsGLb1P8Z2Pia2i9i1mD4trjzSPDp",
  "key16": "Ao7zYFNzk475FWEHEZNeS6vR96wj2AircL52vuvGhfgvJxUQ13gwFjV8d4y4cRa7Ux9aCQqDJS7ynfwTbfquMgM",
  "key17": "58iFqimNZ9nkpcWy8dBjL8oNffzZQ9JECq6LbJrQrnxLr48SfXSD8du7qzerpyHPEPqmFsvSanbEJPzWSN6ZqDa5",
  "key18": "SYne25qVsmeg5uKNZja2wJxjmT3qRUQG9WMppNT6hQF7tyD1QLfyH53dMZTQRWqG2dJq9NUwvdTUSSD7WUajWRK",
  "key19": "4DpiqFfh2AiAtqNeLcEAQew3akpXBv6kum1itjgkLpPq85BbxS3RPqFKK6e18Vya36tN5gqaL2TQmdEbxpsCs4fi",
  "key20": "femGhUYnWbS4x62LdZygJiCejvTCNhYeBkW687tSWBu5acp1YvKJvJxhnvhhKkubupGMWeRTXRHLuYeCyPL86nR",
  "key21": "5BNsDCeiWeMBwwqkrybtKD1FCpQvh2vvpAL3KQ6qwjHXjTUY8Lay9JkkN1Xu6b6fZw2oVyy4kw8yfAUz9FgAtJGG",
  "key22": "3o74rbYEW6FurtViUBLkzyae3cdHPsqw7PDf7A5spxQ1o1vP1icdcrME4FxaWdj8xtpKiyoSmCzTSYk1wvUawbR7",
  "key23": "2umAX1XMBVnXRz8KR6CX47CMZX8V9NyhZuD1RzK6aSdtUX7dy46T4ZTGgjxCPxfw5GRMj7Z2wjKuHEeMzB4Mdyd3",
  "key24": "2kRKw3HWvJ9rJCz4q7348QFENkoft6c42HLXJRB8zfsVcGWo7eApZUxzDBsVV9bkBNhGKg3i4iWNbRWgRpBk2FgQ",
  "key25": "4bHYFThDRVhdTrTBtRBcEWy8pySmeHitspedk5jtMdMj17BhiPVKN7DGCE1NcoAKnWL4FtNAnFJ6XU6sjP2272ju",
  "key26": "4RuesyEARDzbFh1wT87cBnPUKJA8vqbNfNX43ms93K3rjRYgFewvBChGZqVn9o3BqCstS8MS7YFd4yAEMhw7CCer",
  "key27": "2VCeJvSYdXATGWnbLYNz9ejWtQ9gocsBgdpqjyumrwQujWMST8aUVs3AefBDX9Uxtr3nfShkKFK4GnYNPFgL2CN1",
  "key28": "2tSQye8iYBDFsDBQdm8xbh69ufUjVAYXo3aMnyCmQwViY9eHGWMdkhWAr9xb5qJqqvFvatcCuUc9SBZbHWXyPWQk",
  "key29": "4PAPvhW4GJTd3KTpVeKy5NpaZyvxMdNFuzruueHujCU9oNhY9FU2UA75usYzD7UFQoYsDLP4NyZVLDbLcuSuTZ8A",
  "key30": "4y7KpjRGwJxDL4uiVBiH5JxS5ZgAdvPftfjsYCjLf7TWXcMKmwitjsXhnC9LDMJ7LNV5TCiyRcu2RsVmS3QZ6RRd",
  "key31": "2WjPXLs7QvV1Npi8hhjprvzyomqWB2upAi87JRMYdfHXfTcwip7oZ2ondV2skL96CLHF84syw56Qd2hdpDYSk1Ua",
  "key32": "4yZartgYotoha9JMKqqRPgyVenbn8bXgK9oQJpf8i9XYhApLKhhKe8WUrSLoWopcQMAdF24MWbH3CE3aUaeSmGuP",
  "key33": "571H5GpAxnMwACzTwYpJ3FYtouZ3serxSVMaModdr9mL8Z7TWQsT5B2kaTDbVbD67FDno8FDHkfSoHsKsCJN9PFn",
  "key34": "2V5wjja5VQhMAvRtdPYTBeLT3aVEnvdG97Xvu5nXmmToXZhnTtPQcfEkuzNVXbH1V1ntovnUNqL2FNr71gThFKwq",
  "key35": "3TvnJJp8dAThVYb39wkbccx9k9bAG2FH1ejVN2HW7YoKNpfzSBCHJh7BRj3bNTDAAtYnt6u5tbM63HwMKHPGqMc2",
  "key36": "2Ab8Jm5oNpdQAxPJ5KhwGzFWZATjz77MQZAr893ETkzni1y4TxJvVp38izFwDkUJtCVqTrBPvRVDkTTq2nCKjBM2",
  "key37": "4XPvHa1otHYwzmC9r1CD4YHYfE2KMoFwG49vj94qCPinzm8aKrWoSZB8aX6XrApT1ZgQh5yTcdWjmF2pVXP6s2xq"
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
