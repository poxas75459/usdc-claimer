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
    "4KnjDZzEJAzkzkuhuc7B3hKkYV8Ump629sRnvmJqtinQrmg4Vr1HT8iQEG2pSCHE5edryAiWo2zDidmJZiexwjBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hru6dWLnWqPdcrxpniKvzRYYHqwwDcZWuDYayVtFx5eAUkrFfX5ncX3w1WqimJUV9CKEdEq1Yn1rZJZpeEBivHm",
  "key1": "31KNwRtgah8FEr3PSiB4Hre2TiwKEw8vL1NHds48H5aBB2AX4eekjrhd4UBng7xtToBWC7FgUQ84BQvTbbaYyhXf",
  "key2": "3HSm9MXKDoVfdsEieyE5vE5euQLqwVopkpHjAzFGEU86SRFf7e3HhTTDJXaWYzP2qRJSjLi7cRB6EjqARPwBpaMu",
  "key3": "3hA8mc9L47RD6Xf9YFRqK5QYtowC6sz7TqBeH6hUUYVsCYtYQ83TgBFTKTEtQmE9Reej5YUBzoCSe6jaMGWXSwqc",
  "key4": "3btzcFMCszgdHHyTFmKaGPcTXAjvdTreRYc9SanXBrej1ZPVQRbnBhX7avSZckncf66vzno8KgCod693gCn5cj56",
  "key5": "vhjoMEHoWVVJeXtjKXMoPsw4EiT4Hnq4NGwUR4wC3DsXcMVoZ6zoc6NUEb51SbxjdCeQnqT2aN9nV5p9eRyfus6",
  "key6": "4BLSNk3934h3vNxQNqU4FyE28QHWcB8D7CAxBADmhdBXf1dKBQbXBZMtsBEAD1t4AbiaokX3ggHrr3Y3sAutEtYr",
  "key7": "5BxVy25YdPqgaJBA8oGSVJeeYRqVxfyXojifk221j3UjcS1iY6u1ycr1vtXJypPxBNSyYNyKebvPvVg4EtFGqTvC",
  "key8": "35CPRWLZaGmuLoS6kAaLonJVuv5Ed41dnyTDqQmbw6oMu7UKtLTM3j71crL37FwBHpReEGQhuRedyue3KZQfEWfq",
  "key9": "674nSmn5HsGbCoCFaVXWip8CKfZkofRrKb2dg5RcDxx4VmQxziooNMr7b98e4qZYPBdsfXyTCYAjTeDcBvTrN1Z",
  "key10": "21MEek9Qo9gvVscmGenRN8aNUWrLwAChgzmrckpqg21QcL6ow416Lx8xHDTZGjaNdfRDZemqoTHR56VVjD9X32Sn",
  "key11": "36xTNeiwpdmrkYUw5Z9sshTJCQL8sUuoRi5hSWayHu9NisNRxdBfht2mcCNmtWvYdkCgUtWRUP8vVXoqrFa7hATK",
  "key12": "3Hf9ac3geJXHe9sjv3rrAeLkDLgu1JE5diw9N7iCCqmSZthxCBa9zeTNGKLptpZndTyVft4B77za56X4R7QZgMfy",
  "key13": "rsUTqSHYKiGFLx2nmfA1EGX86xbMmmDeS9Bw67aaUSjpPKD1nSPiTckZKf3ZZsVg9kfCMV7gSw7gbyxmUSuN6M2",
  "key14": "tteLxbxTL1vCcEogE956xVJU1GmLYWEGdq6s9vrebwjKevri3LhFL8g19k9KnH1TKbw4ssWRNv66ozDCk3iZKYk",
  "key15": "32HyQDQzamHMtZuweEKye4ecYTZo4jhw3HMTbvhgVuf2LkJ3hxg9y2d9mWfDH9GKAS6jiFCWdHHTmNv4f6iG3Y9w",
  "key16": "4v7wPUXSp34noTSZHHjUanyKQJmDjunc2t2Z33SKP1JBFgCS64SV3WSixJa56eBzErG5sNm8sfutoZAgdaprwWLL",
  "key17": "45d9nLjphcoi9aJB3KTX7KXCAr4ytTmby195FyoYsf9SfaZtfoxK5RRaM8upxmAnTASiinDpTwSVPiEQBAutiW4K",
  "key18": "3Fm5e86SRgh3R2gySeVY4C9YSXRgzDVWqu4xqaf7xYZxYPM8snPh7de3BjAdZPryxmeqfegahmgZo68th9RTr6Wo",
  "key19": "yME2EjbfMdLnQ2zWLzdfuEqKFn6a7wgSFSW18RmmsduHr7Yb7tfehzvYfS91jMcXQDuKMai1cpatecsP5BUJvPy",
  "key20": "3bkBtcVBqmtno1QXggMYtgmeqwUJAD62vdnxFt4t69JfHb6Kh8qP1gtDxMneaocpByExZk7ZYfLhCP5yZ312o9sd",
  "key21": "GrNJii25PPv7mkrJSWd87NHGBUEbw1qGEaYesNqEF6qZE1QaK3vzJwj6ueAXJBsjAowhzTgGjCJMyyihjbN144b",
  "key22": "2AMKLDQUJubPvUVS1zj8WeVrWGxtPPzoqyP6SuA8VBtZs57xQrhPhpRFzyGWsZAz3eEqVcK75H2QhAEroGoG5FwL",
  "key23": "2yeYcN5zBnJrGX28cczB9qABCTjJySskwG1aMmvbfKqof1GoqgYcLdafMvMuueD7yFFx6Skzt1mpuzNeFpno16ch",
  "key24": "56x4wEhZUZQw3n28SvQvvwAs4dpXhunLK498TqcjEoZttAvinKEErQnUwVGQtiGVkGH93ZaB73uabEq8wb74DbZ",
  "key25": "4MrrVYiRi1Ymf1ffcmhgvPF2cADFcdyaRieSJpDkdY7SKNBepWqtkn6avycmhzA2u4mhEbwvSxXM6wuVAdxEDGmy",
  "key26": "4dtRAQhh48gPSkkGAWS7BRZfH8mugeyQETXypbArBZgtTy7NJw3aJrrTAQkbTEU18UFAx8ARLJAS4Gj3tBqhfVdL",
  "key27": "RwQHWghBLT2EmMqptnWMGfTEQoAp1PSLTV7wLnhkWD2pBo93FmM9VgLVnzKZDQd1fJRuAeBMxEx1tZP4gdETRVR",
  "key28": "5qtfSpcxCnBcJNgKcTJJv4Hmek33u7nErRM2sCExmmTm5cAPjmdFtCDk25nSiSWBVUjRwFg568mr4uS9qH61gQcb",
  "key29": "KmJ37dxwQp7Rt1Wczo1qs5aNrGFLTH2sdBKvxGmw6jGeyC2eS9GmbFXuqjgbSiLnhwZZXo2yLMRbpaYnjNTvE37",
  "key30": "5jyQiUobnEK9mAZfNTzMCrsSkNDPa71HxAk8V6YDEQdDRk3tkA6SjNCdhgrpCHjPTH7cjmCTvdNB7pztTF6aPgjR",
  "key31": "C7MfT1x7KUmJVJNr6LLS1QhiYrszrh3qJfDrdXWfRbD8NDksq5Pxxm3F1qsVLAwoyiPT8m9k5XXsthx3JwrVpS3"
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
