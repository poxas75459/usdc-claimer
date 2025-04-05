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
    "48wNKQBtoBQ7gsrPFhQseLoiq8FG9AgYfofoGt9vm6Py1JXUpnGn2pYfaJDbHzXH6uyFUZikXYuCXY8o4TQxNChM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tt1jUdg6dfDddUVYDrAY7ygqRjfL2ZoStRid1MgcGia9TPySnRmohiH81NwQp98eAzjLdXtj4mGKqp9iUyXPWPJ",
  "key1": "4F6VRMehWWNBz6DnQzq52TNe14oS4AT3Apa3CLAiCqDUkBo4hCPnr9HmD7JqgYWSEZuu1mqYDnWuk4URTMemEuSs",
  "key2": "5dL59yA2t843T9MsbCDj5kwDSz3of9wSCP9s5iMoC6pUaPeB8jQv3tmHd1DWBA1ACH7szNbmtTTCjvnUHK2BCpjf",
  "key3": "YhDHqpxTB9M5tLsKnCY1gWN1YYLBuYUPp2xrnXRgqutTcoBVGkArXyoZE3DsCpfYC8fHDaDJLryXp6DRLUWxsRm",
  "key4": "2grFfXn76waTSUBWKCrqqs9FWFXj5rsot97fHhTSE2RQVexGpQESHQWywFwZNc8VQqszrU5PBo2DYq2s6pZfbjdU",
  "key5": "DbkpmyvGPyhk1g49oyyQDMEf95uXuVpRXdEQqz21NfUTcSbXHYH25rRtCFaed96i1JYPLzzBnRPqh1rFyS8K43G",
  "key6": "dV2FfgNJ6rrkS78FMnu8DVQu4s1WJdWxbvMyhjea2yUsRe6V47pCjiLGQajTqnVYYFBxyNuPjki9mmE9GJQfDKz",
  "key7": "TToRfWQm1qguyx1ko2c2Tge74sRrhiY2rtGvybkQS7J1XzK6JQcph5Q9uk7W96Qe4YChc8y3QDhkVPwCGPPDnxW",
  "key8": "5EA6iJKpEyHiKRHTJgE4NcSqXhXHhDp23DWjMNcmJPFDzXHp1sCAa8W25HsUQgdC7FTQXCdWP3ssCbEufsWqNoHt",
  "key9": "4QejaWiaZx9LHYou5mRvRL5Pka1XsYmjK2gD8pycmgSJ7agmjbSgWxoogErRmn3EdBUv2bA59CaLhqeCYMeLLrQB",
  "key10": "2RsEekgLCAUgV369CVwVTNMdi4ruaKNHEsquMS71wQxidTT6G59Hns8m4gH2AQXtgXSUy1D3D57p9UgcLSTi3oEK",
  "key11": "3ShWznXRNyYdrEs5YDV4Hr3KBVS9336Cdaj5GBo3pnWwmQJJmTwJ1s62uhHoiMXRb5SStC5LvNfvaRZHf1L7sH8x",
  "key12": "2gpuiYFgB2aJyv4TSTKLDA5iUkBMgFE2m8RPbouVLa3U8hygnK6ufT3VFNV7MrkxQGn5gSaoG3BrjmaHNzAc7Amx",
  "key13": "3QJA5FxWHPLieaMfc493to5YNBRYCynnCoYgxRhAJKxp2qgesxwFZN6ogjzJsQiheGL1wrcjxcBsLgd7U9tt6rrF",
  "key14": "46oacMoBn8vwsQ1NnbyumYrWhu4tP4dsC35BGHXN6d7eMTPpsWskVSoaeZQo2mMLdbJgQxUcoWPHPUFFaY9ioUe6",
  "key15": "3wfknJcT5TP6QUofZJCxMhiuP2EFTSFbbLmikfVVVsvHfwVvnznLnmc5LQmgLY22z1pQjGMJBdTpSs9gwBjQE3CL",
  "key16": "51UFZQYyPpbcMmhQ2JWQQFQtzbpet8m5ChDruWNiTocGbzRHHFVJXYxksaFBfsJqWEvLiNWjrnpxa4GXhMPhMY8x",
  "key17": "3jSri7m4UYKpCUCF4uEbCJKHYKP97xRXCs9bAHPnHWunfqjD5HZ5AqEtu5NJFGdHtt4fFkHQfE5SRT29aF7keE5u",
  "key18": "3i2Z1Ea3oWN8P7NtzrFw2tN8w86xy2F2iosUMZVWRT5PRwZetwxSekLvtQMKMPpyUVyKSX5ZWf3twXnyvyaAfBuu",
  "key19": "2J9sc5gj7XrSu524NT5NWv9dnjWjE9NLY2cobamkYz6jEEKynZCbUS8zwhY2aqTs3FNfyV5ZE3XJZXfGbVYsrQzu",
  "key20": "2jSmg8BqjxkBGvA3Yj2Hj79Lj6XtdNK1oVJhy9KjVMxYZuz2MJvLBMvH1E9HP8Qg39EQJ2cWStphRc24gNKZ17em",
  "key21": "3Et4R9nvRP3LuUy14TLYuw66uDPA514TKgX6fjxqnFQSXPC5Bs6AqQVSzk9aGpyGHdzD9CHRzVM1TvJnU5rDJdmw",
  "key22": "5Uk6uQkeohM8S1Rr4kSWfmBwH5HwzKYuVKqTyMg2SZC2WL9pcccJW997X5RhxM2YdX9b6NyAn6phWYJDtDDfKov4",
  "key23": "5kELV2kugNi6pdu1KGkp126XtzEZSMuY6edWvAPyE7HZj3QQacyWFrbEx1vc8jNbQycB6fvVqq8bwwt8V9cvJUx7",
  "key24": "5dTMkMQVzhPCdZy85Lm9Wa4sm6aRT2Z5uNCdnDk5XqXddCvChujjwa2t6DQTwrtG9FBaKHwZNe4fySoEacAeY791",
  "key25": "2xPJfBs9spAoQHtwWDGXCnq1QTidhZwfqyYireAoofXsfDGn1pLzeJd3yojsc4fbFU4zk5SvRFVvKArjNudEBrRh",
  "key26": "2fey71bdugYovEWsteKmxCoBynMnzWTsaR4xpwipTqLoMJypLGD1dUPmcZ4jpMgm5oKgQxBX55Tpy4oXDnkiBM9q",
  "key27": "fBrYFMfyxUkM6xMLG2mL7cWFrNHdPneHqZh2rg4mFagmahxGwNaYcZvKn2AMiRcJTFV7G7pWzmGrsxm6oetPWBx",
  "key28": "483n7443EuUH49vgsGPexbYvHkpVETbykQrzaWEBdpnWprzJ8gjkbSDrqB7E6ZDxfRkC1zjYZdEe1NjuGEaJ6cna",
  "key29": "2E1rhKBuKyoAyhLASEMm2vge4xfQ4mPRWWxetJ9dpbo84Gf7HdAeEaT4mgXVCwmBjMDnYhuKa54ZFoqmWJoQnDbQ"
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
