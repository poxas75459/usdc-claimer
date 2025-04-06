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
    "1biaZkDZGYGqgt2UjePs4tfN249gnEHyUStxvXctEPmbA8e9iVbnWzHeTSmQJEmKgFi6otAnvvD7JoXg9k9Gzas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VGyoaNfRp4giRWv2KxdCEgyDRHQf9ApkkSbHkJZyGwaKitTyjJeMHyGPiwS6FcuuQSJTDeiaxN8fJEAWXEoeAnH",
  "key1": "2GGkVHpa3y9SjH4FntjPKqARWzZtutqPeUUQpVnmka2NLke6GzZ6DfcHiM9Cu5FAxCAtd7SVfbiPYCawwdTEt6xV",
  "key2": "25dGJ5vELHNjpcjPQu2mnjCjxLngwn4bWKJxaoEET1WoKPCZ5bNypLBPSjzwZxoq4UbZ4taeC8F1nftHpfq5MoXJ",
  "key3": "5LJ769uyfQ15rwEKoh4LePt4XBHBRGq5MPT2sMGBU3aMkfPyU3v9iwtcVzZav3NL2MFQPBkmD5u8yVmVed81cB2c",
  "key4": "Pd7RLdChzPhnAMaNk5ppHSQf4dB27d8ahwft86vNt3bFJCEDBSjX3ax8fSewTjgfwzNFMiNwiK7cMfYbLjfHuRP",
  "key5": "3u7n5oGpFs9ph96vjhBKaUCAoi2TtumhAnkyNETv6Q9291eXpaHAD2ULr2q5378jsP6tvKaCsUrF4m2ecRPxSNp4",
  "key6": "3aEBdWbo1gPqbfwcpft89UpyEzWaV5VUhLyDVKFwDL9RpnQBjNPm163u7Yfc6drPwkMZR6dVQTz1hN6ZANWQ9Acq",
  "key7": "5KatBrmCDa4xbKngJRkAtDnMhqGiSSnzANwbjKGpkbHxT2FzwsFrkc4sXUrnB3tK9x8Bdcn21J4awiTbALdby57j",
  "key8": "37w6GrXY3xz9zcudKuBwZjrqdDrY7fNvxwH8Cp5xyRkZKEWRspoXkSPUU57UVWTffn1warD8hx8VfYZBXBhAX3K6",
  "key9": "5y2EbNCaAGMPRGrmxLfsJtdWiWjvxUnVpBXXDcvdVrdtVgeYKKLJ6rueFdAAnjbw8AbTBiYk6AbJ59ihzAYxvSka",
  "key10": "3dzcH8UKeR9j6QViXxjdn6wkMtuHD1DAx3Vdyb5vRBZzUuHqsPMHLRwBsJWXnPcpVtUzmGpA4NSTaAgg8qWa9NCU",
  "key11": "3ownLpBuDbQcprv8DDrAp32PKW67448piC3xuybSyswmt4sC4z2sWi2m5pHHWpQvZYrAK5XFqJoD8L4RNATcXUSQ",
  "key12": "MjernsJu8FbfAwYwm7dUCEQswCzxpXK4joMCyZGhmJR48HWaT4NZiTNFGrDygBDGFfwdxJr4pk4911tJkk13aFe",
  "key13": "3am9PgwvPvnbJXUmcS7zVc9UWmNAG1Df7BFbuPTq1xUVezMQJPAapNJUdYFKGCRtbscp5cHMT7MvfDgoPvK6NVgs",
  "key14": "3zstcczpyRz6KVNudjCyWRtcAvPYRYsV2jDsq4br4HSoqqzTu43UQ52QjGU1xfShiYe7ZyBjCtS7yNmPB4g9YELr",
  "key15": "Seihg77QFJ5R6SWArZuBp7txxqh6i9oYoACaP8vg1or7jW5XjXDnfd4DpN8HLkch5bt8jV4nXXcvE6jyifLQg8b",
  "key16": "2bX3oote23wrjmnqReE55hzEuqZvTuJ1kA5mUfd2EdQzFZVv7D74gGYFu4SMqL2BRv6daJDEoEZaX8JiiBFZxrLm",
  "key17": "46eh4bh7m46HLXo3NLcBqR7An8iJSNtTmHVWDyNKiK2VbweMFL4AixtdFqRXPrgphrcJ3qXYpLR4XprSu9Kkfk6P",
  "key18": "2HFMy5MUbff2gTHUitoVnqUYtQx8Z21W6JqV4KxuTfYc4qaMHhT45BsFwsvZm3gYgH6ZTYmaDFdnkHwE75c3Rn4t",
  "key19": "HdHHBCns9kndpdoeheff8uAWYdUm4VuNU4bo7Z45rPDyLw1jsSHKGNhq5toWYhcg9q1Y5r1X3SzqR8KhMaBdxeM",
  "key20": "3brD2fgmYgmx1SW24tyC2pQ3ExZJ2Yuht4otDvcTvyNfaiUmwSFRrd4Er9rCoA4a2uCC4H9UdyTitUFqHjpkckfM",
  "key21": "yNmCj8y176wsDZTCVCwHRusbPMXMkV2VgRcBPQxGu5qKuwevQMWLRrKLbXjLTN62bnFNvUVW2bQrpNaLHdrxaw6",
  "key22": "3MwXKSVFMrFzunaN8sZJZmyNg1x4LMoNu1LiujhtJiwccZP9ZS51dDuxQnFfF6FG9jJHBK73u4MsyLEnMNZPCDC8",
  "key23": "2n2ZqGwdmuLHwpN7UPDXXmmcKUxDqFbWLLnJKyaN35mpVEtWYmA2ZeMGoNHmKb9UX3F92iTNinm7m4XMWqBpwZGq",
  "key24": "3eNUp8ysnEsMkoC3ETsYMssDaqpArv6qvjyetBzn5VmaPRy96rbCUuLxhJYovAPQHrhtH2V7WWd8WQ2uERefaB5s",
  "key25": "4sD3E6d38JFxC5knDNgUyKyXugpBZDoe31YRj5QBtXMrCf18CtJXt2usKac84kLhqU9TXiPcPauCM3bQpGPa996b",
  "key26": "446i1HYtwm39airbAPJg8CewWKC4qhxszqNm2zHNRv7jiwMxq9RvgUepsQwfFFgM8yKhLoQ11Q6fZ2HCLdKbCLNn",
  "key27": "21AhrtCEiCd8nBMuwyEXZqMxRWHKTE16UHQ8ph1dYb2rBkZ9U51Dc1TP93m4EwQjPvWf9gRrkdfLo4b6kyHYsWbP",
  "key28": "3CsKSRJfv9uthCzhfaidWFEcZsKqxCJju35SvDrUa4tgTVfJwRhucnnFy7BH5hw8RqZMxcHmZerXYzLtdfpGti1q",
  "key29": "64hSp8HFyy3UJq2Xfek1Y2JxZqhLTdm4sY3ywXSyCVeKG5YtVjrYdWC4bJbzQhev5Vq5pPNWkHiywRPTnbsbtT8K",
  "key30": "3pjS5WZgApmhd2zNTdoYAEnKjiZgwcgXBr4WcTvXZGMgsZNam2ihBMMPVWjpV1CkGRsqTgqy1EVK5evemABcDxNm"
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
