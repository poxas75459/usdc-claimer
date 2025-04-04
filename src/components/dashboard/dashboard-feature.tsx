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
    "5MjS7mva5W5NmjYPzMnbeMjqx8xHV7DQ469XGs57frzSmjUF2WmJkyZwwUnR4c5RfAnv72ij8kyosFHsjK6v351B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gdAdyVkwuZK83Q22wrwx7gvzvYwLSLEEk6G6ubJqnkQxT7JhyoiTeNRzs9SAwcw2Xwp6AP5aJQrwGACUTGz3QUR",
  "key1": "53SNzQHzXHMSBvn7PDyP1JEWhdmUGciuFfxGzNxFaeJbViEcnLhKrHsAmZiboVffDedjVp1EHEh567uEdr9uJiJf",
  "key2": "3S6HjxJh3pQYBEuV4HgKjXTDnUsMEGaEBDEUEYkauoNCzhDCKGYWoh9DvZHDHMT2nXzV2BBmfgXTyoeoSJmYm6w2",
  "key3": "3aMZq78MGP25Uz5T3aiKe8rgwW7oWsmcEYd1enbTpmU1DDKJqCjrmifuHDbK2JFJTP1xqRDVmkMU1PgqdduaKg6W",
  "key4": "4N9m5fA4haogBWzwCMccCi8NfuSnhQYNEA7GBjX38y4F9DxMnjcRc8hA8uApUHHpKPpXp2jqYZvxBoiBNsEyWjpZ",
  "key5": "yBxpJLvNFZktWvuHBxKLcFhBPiw2DHNtbgw2v6AGRyZyj9iMP8NTzPK3ihFHPx11afaW8sUgiw6oUrxcwUrUDgt",
  "key6": "5QZVd49KwBm3P4yE2Lu23fLA8gAPQ2G9p9DiXDnyLUPzc21mywXi9uw3Vxmbdo1JXW9SJwjFcBqmLHd6dEFpVWcR",
  "key7": "uubjQ5JH9kmAEX2qbcWNjHSSaf8B2fxTQk5NUNNLtCFv7FNHUJSDVZzVu6rdqjT726Xm9grSPnG2oJYzGjTjP8A",
  "key8": "4E48yEL6i2DzBQ891PFm52E4hogmyXKESDu7DLswkszqJKk24fmsPV5P7t1SjQgysyz3u2DjcgvamSkR1t2Wz6DK",
  "key9": "5mSXKGna9ZTSGPdsXPxpc7vqE3bQJe5ahPSdk2bMTNQFQoUok4NWDFLosbvGYRt7xATU3ezy7QFMAphsv7zz8Yg4",
  "key10": "35KveD1W1ndyjS6yMxFMNftZ6oLXXKXi6Gs5KUqPUsgXS6aiwoDfyAhdWd4Y2qhM2EaJ96P89t613Mes4XBiwsHn",
  "key11": "5epzNZUVuEfLPZ3qjVC1PLb5T2e4N4ddB38iwey3BVJk6Q4Aqd63WWLpteHU9z5oJMo9euc5xvsCBDxu5Ei8nnN7",
  "key12": "2XdrkVdz3A4AMMXJc2i8e2gZ9aX2YVaCTwcg7z6GzrhnFrXQtAR8ityWgPMKmCgdaMQ8qHEvUenqNNkTdzfDSxQn",
  "key13": "DVNnCf4h4rHqBKz1P7WLZ8bzpZLW6FG3TBZVCK2T9CJBZmTJUMxEtNpTm6Tj71veG66RA77Zz5NKVkGMmFUNzdo",
  "key14": "2MxnF5ynvDv7qp2ieWTfzk2mJg6aH1znWV33WFaDbMfXvvfpjYeFpD72gQiwkfrmBymrpJZJNub1oPQ72Abeuu9u",
  "key15": "3Jh5Chg92iHETw34c4AidoYJAXJQyCruWoMb7Lj3fwY8BcH4iApxHceWiGHvjCdBancrknxDtWZS1WeF91dFfL5a",
  "key16": "21Dfdw8TNimBuEHfDz1WTD5foi1aFL46e6YEUhXYt5w5usy5CB6X5nW54dX4X1VYs7wu2owzQTUeJyLbo8JaRZ75",
  "key17": "223CBwmSYTAEaBbCwkAeTnaJ4gnZHCCBNTzLyD9vyE2X6Jzm93vTrykTDAadf1V7CaHHhfDucUakBzh3bUN8tvct",
  "key18": "2kFMS2Vg2tt1yZruN9qytw7uyouNSMj1RXHsnqFkfD4Y3eitK7gkfXAbhY2Jdiv4k1dBDuwN6oysmyjPgcJBCDbs",
  "key19": "4vTXF5yYfVTtJHNFV6GZujeZMxaLrVSsV14aLGYAQ9aPxAV95zFNCWnjmTBjAVvTrPLDh4vAHSXNMiBmtS4pH7hA",
  "key20": "M7uF4R1upPJcbBRapvFNdT3kwbDC34pSP2yyGpNv3tpEJXtrcjrrhoDiscQh5MEzeTNgihQeynHhLQkb5uisgmD",
  "key21": "255nxVa4oGJTkSSzet8jzwtczRLTMC8UjryA7KSEn2abWsPnvcrSazM8ixnbiqwfDyZXSrZ7qKutDmJwNcR9UGae",
  "key22": "3u8bSvsNZ8f2vZLTik89AEpmWYcK3LHQDfkiJLQRb2VwtbyWausVtCVwBbRThHhZXKs6jAdQc7hwmR5pgPKMtSiJ",
  "key23": "321eDJqdAZ3kYQfK5kerUApcFKUAkJcLBMRNZUoA3VwzdNyWoA6WrS7QV6JP3CHhzcqXebF32wa2twK1w3C9sUfi",
  "key24": "4qrid7a6Qrvw25DrGbi3sL4rZNeTT69bJTpCono54tDAR4Ga1szCskEAaDpafPHfBD7NZ5EsCFucZX9CSZoAi8F7",
  "key25": "UvHNrvE4B892kBDi6W6cLJdT4ffaCHpZq9Aki212SCM9RBNmr83hRKt1NRJy7MffaSD1QDGN2KHFn4G6AqN72mw",
  "key26": "jmefefYWas6tsF7bSTyG4k7V1DoCd9SjsJ5XUVsEoKWKkdfZwyqqzpTGAmU5ZSRzzhYmFNZrhreq9Tq53qN2Jun",
  "key27": "3b9rTH4eod8KwRT9M5Pk47sL39sWsCx3sDb6h3JQM7pmufch85bcM4c9D27kNe8bduv7bLvk9oSB7dsU4dbke9a4",
  "key28": "3KFzJvNyiBYCRhJqBxskXG5S9ko6kKdphtgYC5zPtAKnMtCDdKJpduSUvfGgWgVjbbPv9o6MJvcWoxj8aqxvhpRn",
  "key29": "4HTSeNwDj9RkY3FwdYoknhvyPu8MerMBpJbBT7pcXek2XxdVpykt9C3fkRzc1WwDhKAhBkFY5qWGWNP7Zk5KM66p",
  "key30": "2csvQSQ31R14S4P62DTS3M4eGVbPo9umoodHWyLvFaXFJJL6MWdRwJm1mgywJWfif3seRETqgnM4pNqPPRPWFQLX",
  "key31": "2J1hZuscX9HWM6ZLduUmaXy5KqF1xpfmH5bBn6wa4BXvt1g6KzZgaqKPr6eNAnv8eJvrKqjVDveFLDttHK8Z14pG",
  "key32": "2pmghPbn6N7gRxcMWds56ZthRaTygHACnvahitC8SofJWNszxTSmTCgZo9iAQNWgCzUD5YXFjMbbpyoxkCNi9miv",
  "key33": "4q8RnKbu6UHtwLtpgxUpBtrEqaDd6cGCL548pCVSFUPtVQfawJRELoZXj9syVcTnNzEecGNWCHJTphYTPjMdxv2J",
  "key34": "4BKfovt2eVZ2t4BDfQ93GouBchMLiBaLfZZQ3QMoqNSC1729DmHnfMuRrzjF3GHC2uqYKYxdXrEUjKpHjQF82g9j",
  "key35": "5ZdSuiLoCczK53H1gSHPcXwzchTC3qKzy9QxVDMxPjTXsvwr1gPNjdD4HdUmRLck2VNkTtjT3yZ5LCCLBkCCiUGs",
  "key36": "5zDRVWXXBgsAasomPACWTkyE4KnyL9cuJTuTXhLkUHu4v1vc9UdDTWJu3tf6mNSA8NSRSqQ1g18kagxRjwSkym8t",
  "key37": "2y4V2fWUXviRa7caTjxiEUtAAM4TFKTmVSY92eGoRfSNKYtF473cENGazVAyosB3HUd6cjuF9m22Hc83g81qWvii",
  "key38": "4s5CTrK8h7XrdTZS3jY5ENtAiSexvQk7C6Jv6H9Y7ffxBtWhFWCb1G5wkfXc3thHii3TMaa5N9RSLuLUX7SD9M3H"
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
