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
    "5yEyq2S2c3ygPthTgDGJVzN2tT3rXC5PcmU1b2pDk4Kk9EVvZ3RqNdgPR6JRiShaiM8zXRV8eFTywXe9Vkm1xzAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e7KpDBiwm4Q69nKyuuS8BMyzZRQ2552nqq91UTG6729UvTMWohQJvvHf8sH1bvVQjy9nQ29o5JLiincFX5Facy1",
  "key1": "5YqkyPAQe8NHRvbRkgqQ8NUjv7dhb2NpcuXxbnGdEdYtmjuFcimoYYZeiMrfn7TLeoP6nJNdLbA4XsP5nxDBQs1Y",
  "key2": "41AjwGjV8QjSLxBqJbswJoqq1UvxNwnfyX74Gfg6PC4rhDJULbdVSJkJac1mqAL9xdVveznHqUiMZtMe2GN7Hrn1",
  "key3": "3v4cvGERZT3h8zy54Lx1q7UmYeAvg1oS3xyi4Vs5zGgDKyuQ4kw3VbA2s9xFwmHHYrUZoxDBB8R78ZjLicwnYdCU",
  "key4": "2NuSTmS5xFa3MfDrm1vCgTyzWrknBWTBQZEht287BXVDv5nJx3EeYtimSTPAmhmKFbdUQa9M9hzKSDF1LDfk9efe",
  "key5": "59HHg7Qdv9X1QajJAitsq3FVUsT8xEeSjysWW3WJEm6AWgTGYgRHjUYkEyouwAL2W6xJ452UkdTk2Vd1WwvdKECG",
  "key6": "22FdgcxpPFVNhrypvFUFbpMt91xSox1MVQMCh8bdqzN3UnGAhuGASA7SRrzFZjaRiRDgmqFBGedtr3tLLXapncbe",
  "key7": "uLsZ2VYFzbCpaYu1wh8PD54mrzL2cLVPa5rDZQRyXEqF69FEsVjWyBtFnizGzGZHe7xcLX865vbX2BLvyeKb6Sp",
  "key8": "3XUMKbNxhit1D4LvkkEf3YVQyU2anfDL4JVoFi4trpUuo8UK37b5jVHRfcmryfPBqDTAEX8pdxeBS5ovexUGpyCp",
  "key9": "3bDkk9CrC1qYBCeqt9tmb9XC9UEs19AbPd7BE5ih4tsTL9M5FoMpbhYjsnK8CvgDiQqNHaUxFzp9KD11stGs75eZ",
  "key10": "55xXGJecHjR4TjFYien8g4gx38DuPxb6G8NJypUZD7gV51BSQYF3wbb3XVHKwb98P4mn98ZAvxBePLGmy6zeSmt8",
  "key11": "3wtPc9mMh1gZ4X2hLfhGe4uyrY9dtQRx2nCSo8VkD7CDrC37Mynmy6JKyhwzCS5jKT9torM7pkhV8LrNkzLFX6qR",
  "key12": "MBbM9tW5sXo5jSMserax5DVFG1do1ibU979fxUwphdTwYdjNtNcvzYBpdjFdEQCzweJbhs7SMVJVokw4AFhWRGx",
  "key13": "2oJ7g3F56P5zXUeVQV4Rcd5YU931xRTazPjLUqXsU43yvrPuxtv2XHexx9ELGu9Yhvb4VVLmPeBz1Yxw1vkwNj1u",
  "key14": "3hr5YLx6vkbAKowgjw1xztjoiKH21CTS5fviuj4HBxpaQgsmREgQXUnrrbi9s8spDhweTKDLB6gujSwJfxNfdGbR",
  "key15": "3VK9Vh2GDxX79utFxS2d8ayNQ5n8G2fA7pfyHJANDmnTb88nu7nizT2aDvwhdR7UD5cg66BXn8RoBAYZeEpawjxY",
  "key16": "2zqHFd8EYEA3mHrTdnP1hR1SEBqNp8TNty8bBtHAdpYsxw5iSCufPn2vrvG4qKURfYay2LTHc8ukSWrApraysQG7",
  "key17": "2bQPwWJXicBBSaRiztvaD7Bp9cheoEd8SGgMVhzpqbPyQ9eyVnxqdEvHUHeVLP2P3tbCZgGREnKMrd3gAioDANYf",
  "key18": "3wsBmEQKCtfsMdJ5Sh1A1zNd7kubTfG33mgtw4dCo6CByQweD6s5mmp9vMkVqRXtXTyLNarE8V1djF6iWgRGPrPT",
  "key19": "4NbJZwsvoaNSZfncEYLmGhEHfEix2r79fkeUYLttGDj21MiBLPFTSP9E8UkgfSEeRuVieDnD3qJ9wCcAQY8TGuo4",
  "key20": "5ZJDsTctRkmNbUJxFvstniyESDWEygRVSNHKSpiYkAXzu5H94huKQtpSBvoTJwUJCRCGguivH6komhVuKrSA8kYf",
  "key21": "4VJP2DkA3rovSjXhgDThdjtt7KrEWbaUzGsZ26BqFL5M1LsrET828cEAk87yDqkUujSU6bPp3uaEMLYoBYWEWZaQ",
  "key22": "3wGDzTKsRiAwXeDW3Qru5eLpJTwHdoFcdTkGcusThoo63YGXD1xaHRcyEMsSZx36zRP8o4NG7ndMLozYe8cK4Ag3",
  "key23": "5642ZkkK3N3rkJqQxVZgchwQbvNsECkDoFJH9DtqkSRtct87FShkZZp3vRuRDVt8dtLdFM96rxeuBAUSWCdzRpR2",
  "key24": "58rnBJDZt89PccjvZzCP7Md5cpMncysKJ684cp6ehxmiWbwUxRvPjCoJ6DZVGt9HeRqHeGyTmFohA2YaHvTsgDoV",
  "key25": "2WmyFmobd2AsseS4wEyq9VjZXM9hS1YUnHw8wj5p2CpyTJmXJy7RbkzmxudbhjuUu5DKU3wFSWcfqdou8HAnUKvF",
  "key26": "2VzcoSataAJWJmi8WmZFPvHv4JZzkqDewPUotZFw2Te7x2gH3o9bRYhAHy1MEP4Nc61vF8zpwoAJeyBUQo1vWuSE",
  "key27": "35Myp7uVDiCsvLPSD9y9eLBbzHUkDRNucTs33TsrC3gMBYJ5pz4Mqgq9MpdsvqRsVvuZYqUVRcfz3Fo8nNUjjKtP",
  "key28": "2P2EHFYRxh11CCxP5FgUMjuCfUEAr6tzQAg2ssFt5xhnPrTGsoGxc1BBpHnidtrjJqhzxAKgzbPyrgCFBSdQz3YL",
  "key29": "V8uNjK6xFFg492RtjdvrUzpUGTWMkyPNX6waMA2zKJ2vd6bSgeSQFFQqvTMGBqv42aiynRF6W3VWHxTD7dJvHYs",
  "key30": "4rMEStoxSHzt2DzNjGVixAq5SGiVAuhe613Eu4iTNmhJEbFgjd4ndc7HmGMzNQXkKtwdBFrgDu79K1PRfnK5mDAN",
  "key31": "4R3Kh2T3gXcgRAgMkrLXsxgh7RaRvCJ9xKrJwKGmDdjW4dEBB2VwhFpLChVKZydszKWbpHC6Rg78UP6toCXVAtWE",
  "key32": "qjvpePidfrn2S6imZQJXWvVdyPqUEoYGD81PbR4c91yuoKTLqQRuCXCiVL5w8kYqUwPTwJR5wnUiECYjt9CdAt1",
  "key33": "3BEExggceqFWSgtkbMB5dkQBmNixCXXcwx2VaUWkbAvQchyGWt3V4LPLBjygZuhZm7GsgWDvBHBBr554gdVUMynr"
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
