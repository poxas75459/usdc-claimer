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
    "26tCHFq56dcdTPnqZ1UzGrZUwcRVeinxGs4nz48T9EWEgWwLUuRnzYdsVDBBwtXkFPMBbDoF77EqmCi6yd3q9bxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WboXuRP4U6nchZ8YBfmnxFShAXYUgpQBgM84ezRaNQ2PyerzfPwcJApWyMVMgmCjnE92JPPPebh5xfweqTX1JDB",
  "key1": "5BV7Ge8QScmcyv9RMNHnMdz7nRVNBTHxB7kAmqkg8xofXY6aECSLbWnSccHF4VUDpWfM888GtGXzTWJJRwSn5hCj",
  "key2": "2fhm3Lk1XQ6eJX3phqLxV2Hgha4UjdJodeuVmjrw15M6DqWs4wCg5JL8w44YWGWPzZZvBVLApYJapYcYUGshR4ey",
  "key3": "61KNXFL4C4pxJb9UiK193tvshzkXbLzaQSJyLPeUQqS8XMDGvM2WrJF1NqfNmNT9e2FuHfwdHuBiS7PaZk56hSVg",
  "key4": "5bfkUUA4ePqQQaihTvGUpe5kUPDZ5EzKn4vtoeLu22evTjv5ykoDsYHTHb9Z1Geq58QFL1ZFLbmmgLx1KTvCtDgJ",
  "key5": "5ucYVZaHPk8jrkGGwtvd7uEiEJdcSP3soymVXB7darESp9LY14c4PLyzJ5uYi77nndyfqWwMMLJSu8MXPX7HVHeM",
  "key6": "V9KoBbebgjBt7dXiSJicMg2644ExkPm8kYm5jiesZGCdCHXKjTrXTRjM7V9zb85n63dYMp5KzrMh6uu7JLNST5o",
  "key7": "3f9DAPT8JBUSxcPWxX85cKLpQVXgQH28Jx3PnvwvDgRScrgxNcGLddQd23qVDSAjDgHCArryTUXmNsK8zU5LHDaj",
  "key8": "2ySxzsLk3LWZyptDZr2p8q4ktPH6eQrFDgAh7dVJJjBgRk96t4dT9rfdzVRwiBHhqviPb1LpcsmazEHtFRcbVBdY",
  "key9": "GFzkx7ek1xN5D411BXAVthbenMtA75XT8hr7vbGGK6Lbp6sEnRtBcG2iPQSSA8MS592F1fiev2DjjqMnFFUWnLp",
  "key10": "2f9FG7WPzEdRqDiV6Y77BDN9D7YjtGwzbWNJBEAid36X8cfk5EfAcRPjJhqsFWcdd4LAMpQRQ4jmQaHCAxzANMXi",
  "key11": "2nBXdTQ7Cv986kKHLTK82WT5AewEmvEdbLjbtNdkMczrQDSUWNdFMyWxoDoTNK7Uu61cpt95ucVTTrKdLmNSNUDC",
  "key12": "txdqiQYZZke1y3PwLvzX26EbWYHjkgAFojgW8gs7DGt8HxewaZpH1sVDHFK2deyEdzfZ44QarutYAPc7Z3FbaAa",
  "key13": "snQJybFFS2LmRbFY6qqLzYLkwDeMv7X4Zp8a16Pt3aq2mrkD19BN9uGQGmcFsymSgSMUwMUr15spoUFMmPEbPgi",
  "key14": "4oE3uxfDbFcY5mKXFtJsg2JPzK564jpwo5WnZDy1zSWFFVKVAdL3QKTJkkds8S9mLdcemAuCxGhV5mwN6L9JRfxm",
  "key15": "LcwGnyjrFwyrf83BzV2uS3mXwDdNvBYAn5jCPaEvZm16u587YXVwyR9mvwQrXtAkyzFqXyQwD1JuRLiSpYBEiwC",
  "key16": "3K2B19UuV9SoQMfzL64G6KLi5V4c5uMqx2uFiGsuqDeYPviFdiTTG4MwxjyeVdotsY8toe53wrtvaQeuB2AXZA8E",
  "key17": "3Dte1xhEJngDdFv63VHSYvThSQxpWejaVo94iifJ9gno6mgKyzXdsbz6NyCjhShaq2RczZxLGGMMSmqTbKEdxggV",
  "key18": "fjTjvvnsUuE7nVZuyCAY4J9CXviqxCTmuVsjHdzRugz8qoecrrJokLNYUWwmsNsPvTUyhkNtR56L4Ymuke2CzFJ",
  "key19": "5fZUU88fUwGvEpXjgC822YLzt84oaz39Huf4S3iDBecEWJRcFEvaHx6zzzwAzGN6nb1J1d7TVYeHmFEWBK8cEJyb",
  "key20": "5rbfsYHhSBdb31EYp3GpprxB52qig12h4mKVNkopU623KpWfWEWV4TfzoLNi8axqzFWLUPUTfHWRQgfNy1GXApS1",
  "key21": "5zekjfCuwNpqEGkfDoDxDJ5TwT6PwQ1D5JXXtEEDjFxBrvTpkucHSLym8u3gbNp35bDwjFStgcQMYmwWQknF94c9",
  "key22": "4WQSBHHgVWatkGDZPNhxYMKxemhjXt5zQK68WhzR36KhqZbn62QmoWs6eDuNrH5qcyFtZkNLjWjtnRrayMNwf4Ju",
  "key23": "43HT7tXAVaHe2LiPspCnrEv7Am9h6gTRw5pcL2fs4t7vGBGsjws9bwMqWd7HnZunE1NYdN4HfVAA3xcCC6GTyrKx",
  "key24": "3QM7DtxvjPv6QbBCsAmDn9iw7Tb1xq44mFFHWrnaJ1FpJgwMpJEgEYJ98TnaxCVRYacpj2UvGW2aNLFUM5NJVHVN",
  "key25": "2pKiC4WMqd5RftFd5sKotKHWmw7zMsuSFwQjTPKRRcX6gGzX5tccuMFjiS8VAEjJCPUX2NMNAuicEj7NDZQkZKvt",
  "key26": "3ijsDZv8dTCr7RWEwcTMeunky4UsZpWdd6DvZhuoyXmtib7Jz5wYWvS7aWxKcUUjFsb386NttUT5MBR75riZPZjS",
  "key27": "2eYC2PPyM9jSSUVg34Kk5k7y5VbSDdvzkfgMG336srjXXeHXRXW1BXNhMcmEbRB7YUu4dyJDh7KisPEEosua7Zjy",
  "key28": "3mmWxUusYAdq5HsdtT5d4c2yrrtgL9XEmi2gCu4J1J8ZrB3fo3JP9XqRaAi14e2c7tv7hgaH6pimVQNeARmMruzc",
  "key29": "2jUiSMJNhZ38eGii6UEzS52v1zu6sLiyRYKRzW8EBN4P6DQM4CYjnwZsiuacw1rFDrLJyQrNzkyeLL6wF1pSnoPW",
  "key30": "35xm6rwtaNV7Wx8kdYQGynzDzM7btq36Ph7D5HoZn2Cc1DEXngoAZVxyPkvYen9Yh7Pxa5LsdKg5WhpCBamboStC",
  "key31": "tWZeeSMyL9voTtFJahs82UQpqnR2dagQxHhagsQBaJRTC7QY3bsDDCKUDB5wNrDCUY8sV6inahgDTe11J47UY8d",
  "key32": "4G7tB5xuSjGu87yrP14vrD1LJpmLx6KbZYvMsu9ApwZc665kX17uoXMERCdZAFXBiMwoeWGB4WAxmsE35KzGx6Bx",
  "key33": "4Duu1qht9sP71vbfg1eTWcGHQYG1vbE8SB45NbQ6EaKqSThKSs8qspRwM4ZokjtWCpiQyUN8qbfK3GM3TM2NY7sG",
  "key34": "43BiWTFBm2VKaFhE5M9Wa47rPa5mctMPrNWd11YPqsg6B7nyFGkVJ89LX8UEuLsjBYyJ8TmYWvbMqXnFGRZwgz2U",
  "key35": "dMYWVLLQew8XsNFW5CtK3j1p9B5SMcPUYvvx8JPTF3hkAsVr9m2djC8hH4fGrMLUEw6VSNvhbVALV9yDEXWkYfh",
  "key36": "5AHWrdXDK9pC9kDyBq1m1LUo54uuxw5mhu2GSLHzZLXibrJn7SjpPCUpy6HUg3Ro42zYgcWPLHMGMSS8MYj95D6X",
  "key37": "2wu1Zm1WAuGSKw8s4pouP4DFWaeYoZ7nrawgDkKTF4zVq4Q8azJ4KZLHFE5Dwf8RRGB6bLrGvwRgnsDoZmeb6yj2",
  "key38": "2ePYBXpWTBRFcQXbm4wEYuw51B5TLMk4mc7xr2bLatAHM5rHLcCo9eJYqfVr9Ev5fwqprc1TVFGz4Er5zshrNkXE",
  "key39": "3YpnzY6DQkfe2vRdcaF2WF8CLtrg5sLDqnN4sXfYiE8WuARZVcQbqwNjefpL5QK3KJQest9rKpj49kxgykv5D3v3"
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
