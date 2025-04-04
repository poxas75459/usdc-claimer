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
    "4XMug8DCsVSFt2dNwMesAhFpGMmjXGnVf8c8p6xCZFwzYYM8bkcTkdVtV2rmMVszzoGvcWvjHtFuetP9wmLuVLwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P3AbKudXfJBupZ2TXtmiCphA2PTzHAUru5fHyEJ6PhEXPG7qsRzDHwkGjS22deRhzUdq1oN39NUqdEjLwkzBLGv",
  "key1": "2tgJUc78ATjB24xPPWydx8Hk2DNmWAucRGNEBqtSa6NHyTzV42YnvtUT5vFZXrTcWz1zf7fmmEsfFcKAR9fKxzXK",
  "key2": "3W9PrWetqDpA1UsoGvFgeg2WmtRApgaBr5Tq45xkocZ3G33EUtqe2pMJKZRVSqxp2tMMwMjXJucLLTQph1CnHkEa",
  "key3": "4RwhKMkNT3QtRN5NpYFEtp6XJnYG6niQvxnEV16DpKkzc97D81wLQpUG86Rmin8edxfqGCipAELZQBtV9yk9HNe6",
  "key4": "53Rtz2YYgbQE9Qj1LeCXTiVUnhXYcxvuKaDRjUchPoSzuWqxT1PyPr2j7EbActjrdN3zz6JeoZVDiCy3x5jx9QnM",
  "key5": "op32myGWtJQtXcutXfS2kZd2TBbDDAbRTLxCdHew6pVbywzJtc1APproLhno5AK35GRMPr9ZebJsFN2Dats695J",
  "key6": "4JzZ1ePyn25sedkvuvgNNEJWmsLewT1EKGYUegccDPsRwAeYkDnPTne8fDHF5XXqDJ3E4BpEHZeNsjpVma5stUMn",
  "key7": "4cJxfjPoBXZW7jMfFQrjVstS69CDw7aV99VtXUk85TMc7QPrGpgUfNoPXWjg1xszz592CVE4kCvC8bm3qxRQuUwo",
  "key8": "5FduwRQhUm8uSVNUnasRTMQZ8ouVavawQ4mghY4p6K35GtFzWmijdRruadLTLahFsQiLiXNZcjL1XCHnGG7xAQ9j",
  "key9": "21tiJ5QQkaBGy6dMnVvffW5iYT2bUJ5vY6fw9ifbAwz4gS4dgqdPkk9NQorTUkLvDu8225mrdEzpf83UhWUBh2gJ",
  "key10": "2RbW5JD1Jr3jXCThqYNsxLTp69pWKh7e42zcWhTiwoRY9WDuDvAvqu4zrBG1NscSbFVgarJYt3Efko8iyheD8Ks",
  "key11": "5scN9UADCdRPmKGSNKoWBdXgoMFgkb6esaWyyWpooTnLfWFAWeC2TJ5Tp9m5feQcVY4nK2N6swABkXrLkfjwTWwJ",
  "key12": "2Et7yH1Psph4gVJW8y52GG319Lc1BPFw8umwz5wqf7v4o7rphGRMwYzTr6twhJvo5oJpnqii9YpMbLeTuhinKNSs",
  "key13": "4AYsEuXpT9WL1DyNTxYsR1kc25YnXXahrUK4H87jtPZTjn7voKVQmKPpmdqr1NEUByrXqRNC1iuZjdyXkT6Cj4S6",
  "key14": "56XNjow81YjMCVME8igPXVKsh3Rgut33fa6TJaVXJqkGm6Sx7EeDDqeQcMc5LaUJaZZwyaz4LcEUfP87ek72uPco",
  "key15": "5V2yMSB6icgjTaYw2u9Suy53nKKiXes5wzXppNqFmD6KcYfC5YPZ3vo2Xr1eXJzniBBGXm287L8L46g49Xn9fB8Y",
  "key16": "5fmDS9RADxuBeAT1o9em7FeunnQwqpgGAhhYPovrFd2HVtezxhw8pDzmZMUpXzrEdAeRnG9q2o98hnEMuFmMB7RU",
  "key17": "3LNzdUTGh5P97RZxN1vUwFHo9DGFeTRLmcVSX6B3KangMqoMYBiGrjHD6YLw6cdjgvBgo4dGqBvJuoNFdAjU2yWo",
  "key18": "3dzH7EU3Zx3FwELNeYwoX2cPrLJwvx6nJSmmCeAyHbSPucuvGWjQNwdb4bxFggpzvay4QUvyZgRudLbKEEAc95qU",
  "key19": "3E34SSz8MuKwBg7icDMdWo3H66b9xvFTHqs3MJqDKdgkmrcCWEzM6D6m3W8r5joNEbAJA4gkHutPdi2WNqqUvVpC",
  "key20": "2uUo4Z191cVt1cADEqMYmJXpDQUHrSvmhvFqNz1zja3SYBbcE4ScvDraRapYGWZHpZaCjfuXLeQaKDiZWXnQNZ3B",
  "key21": "2XjiSCrZQTEzCp5HrpwZgJoKVyA5zW3r8gziJPMxxeZstULL5Y7GxD2RRzKkrwT3AkTok9DBM1DGAMeS8xNQg9Yi",
  "key22": "4f1mAivQKPEnE3w3P7nnFL5RSoLTNsofLXzak57GL6NRsqr58bqGa3nwx9F8SPM3vnatd5omrp8wATYWuQiGx4XE",
  "key23": "4EMgtMJkK5pBZLAXwjXi5PZwkEDFDuBUkazmcZfKnMzHm2Jr6qhbugnbq2zAikPR76PyAxosAhJBsnaSJQyDUu1X",
  "key24": "3MNwsF4wEJLwNBeqpak8VGvAsmCsnZvhYnSUyjNusCrnT8eFphKxGYTauDHBLPAwxVv99KekBc4B1GBaCJxh9XG1",
  "key25": "gnbBsPR3XZEXEqG4tAwcM9NJimDXW2PxYCZoDPo8eQL2ZTQtUrXiyUhNFQJSUTDc6wpAAvCvXvw7jrnxW6sWG98",
  "key26": "5tDmTMp9mFAF7ebiJiYvdnBXtxZupM8UAn33wRNQbfFMAYiKTp3rFArn45VWo83rdKq56viyTUAP5NzxEkk4jWNG",
  "key27": "2MfhR8QnVqduTb9q6FWae3BSek8SfEmxcrmRp2PEZHtCpLpmavFYfTrkxeaQ8bWBQUmztPbzcx4TXwktRHEiUKwz",
  "key28": "BBTQnMMgAuBqB5tYWzDKyKMo8TbpSNdxvhjRCa5SUvfjseAGyF7aKmaLL6P9ruhycCuWkKaJkwVjJdXs1nnBiaY",
  "key29": "2ynmyPtt2p9faSA23RNhmPwWnZry5iBergdVmRMv9bveQVYCYmF6fcotiQTvVWgPPGToK1idCXr5isHjMnq5uWhT",
  "key30": "9TWqqmTGbh8BAioaJJqiFmZScmjeCbLWSkkr1BAnu82CNt7UK6yzVye4fUqEredoAs8KnaxzZu2zhwjLYjViW5F",
  "key31": "5wjfeVp2Wgr7sPeh8Ka4rCfQWSRZ8CHyg8BLC4QJ3ojVuwN3FTXL4fDdovvrbfk6U9LTHwkaAR2Liw15gap3T5Wx",
  "key32": "2Rc3MDrhT3R3cRGc4dnTp3mvHKxvoy2pYGRQAY33npMAzm9xZqfYa6UUW93KkcL6px3ZQps73Pqdc6iBxgm5WPKB",
  "key33": "3TS2wFSuVfXcQKP6fXoxxPLJ5kpreGHLJuTJUmuRtEq7ymrMkTMi2qmJ8j7sCozHS2nCjvc1Aw272p1MEDr6s2pU",
  "key34": "QMytbTLuCDLNhkbQ18Pbq6umLVAAZ2btg8YbkuPjr8JKqGurQb6UgEe1LsE8LempjXzYA6BmmaqCUtHUYhhWF9n",
  "key35": "358Go6x5uB7v3ki7ec84Tj12bJpYtohTAzFN97B72nCBhdQxVqUfA8oyuVdzm7Pe3avPVYcjgVV4caCP8Zb43YSi",
  "key36": "4qKuTFhYP691Nb4snS8ZRiurBGRGGqdGCSLkdWR9T2nGyNi3Bqxrq2ku4pqADF3o9Ew9XWd1sh4WMXpoDxJxtWBU",
  "key37": "5r36b2mZCgJ2F2juYcsV6CT2rcSkPTnsbKqkdLC44THQEBnCVRgLyGXbg4CQEPtJRzwS84ddxzVrMXvNuW3Zg9RG"
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
