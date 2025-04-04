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
    "3LwTkvJG3uHuXwnqVZf2sUCb7yhKpgTQpzWSFYpWdgqNogNXiD6Pues87y1tBdepVybP13vn8FFSt1q7xkxRtSp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwunJ1sCfBCy21njVmubfqJS2smPenq8WUGTBg2wEqeuMvxDLBdWZ4pTMPM7GWdcf8sBJHMMPCQskBtmNQNQVvU",
  "key1": "3mA33wo6WDKWpVTmz3RVvZz8YJELSiPcZkwwviwcJvXeRhB6bCT6482WyvZLg84UxL3RHb1NDRcv7Ku2cZv8Yoou",
  "key2": "5k6maZdxkXHYH5uFXUaa8BYwyTM3XPzK5nLHqxEs2MRqxp6SeRkR33vvKLFAfPRyuL26k926wHvxraXMeTzS2ZsW",
  "key3": "2jjfKUisChUCZe4iV1vwNPBDkiqyn4BkPVG48WpkJBf3KnuGUAi5viPTGhMvBtC2pismJroJpeBmaT3ugAP73pUU",
  "key4": "2jWsaFDFthnu3faUSSUvxP7GzcVtoV3B4cPZWrEgXHJC76GXTdQyhWuGV1dUuoWSAqJWJzXBENSgnFkjEDSkX1TU",
  "key5": "TUJubKXrj9tpX3VgiywWDBr1EzFh6oGoaXpEiC2dTbcZWak8fFcDDHY3fCXUF6YRFLLKMVzLrrnqSiHfK9BR6cC",
  "key6": "3HaSrmeGQ7QCQAKNhxXTx4E9EQtZjFetZs8AguyMJcjB3UaR2hcrzEbkH1QZbY9S9pvtbrUCHVwS3HMqbL4dh2tu",
  "key7": "2XBzbam3TtFwWDapHDMKX3woUgcziXk4m1JYJdoxZDp77LRQp6JkpYibL8r5ojTcYN4aRZdZEzMwEZXtY3HHXqfh",
  "key8": "44YbzMo9yUe3KTUWbfKB96QpktC2hF2QhKGPjjJ2UsbACEvefZWCTYxAMEDqhDycCaTW4piAh7xpkwdjVrmEA7sT",
  "key9": "4kbpn63wSbtMoYza6wUg8i83oJY35Khq7MyNenhev3Ls9yAdpdLhfF3Jz8EacB9VeRqphgG7XEsS6B4epHe3NKLD",
  "key10": "218LfWouCvA5rDgbWAMmujhM7TqHHLcLUNzW9G9dJsGUP5SfvmAdyMcjCJV7MYijsRLYyUvejNkW7qM1MYDcoyYH",
  "key11": "3sp7RrS278FxhJW9eTRQSyKAPG2faDhhwMm2oDrpYzoRryCU4qR7AfZStkEP9Zw1bKr6XC9tVhXpHUwaxWBMnsPq",
  "key12": "5Ns5eJCCTAipbixsUyx195CF5tuz84eczKauKR4CEdaK8RunoYC1THFGXXxhatowwUTzJBcuh1gtbAWxKKZ5DWRP",
  "key13": "3F8fgGgV1pFcduYx2xgpWHVqyVvUyPiJg7JMtyhYJUGKhz6Z5ovYoe1VPUGb5LGyMjAFMopjCoJpdsbjsHyu1a1T",
  "key14": "9ASPJwACf5FZYQF3gCsak59PzHrRf9zVCHU4KCJSNT3zRf57ieLPq28cHubS69Cy2wU2kqNKDDB9W66adauxXrp",
  "key15": "5JCQF6kB3UMoJ7DGvjQFgTcCERGWy8kQnf3A1iHx6dp9kMDhtNd3ufFaErRrZ6LHrJYtoKPQGLyx3Dbxx5kVJXfQ",
  "key16": "2j2AMa7KCeQFyfusQneAFYrjuNPbDyVBDii99MQ51A5exXc5GEHV6K92bhDNv2VH8wJP2i5Q9bdYrGxc5GYCk3Tk",
  "key17": "5yM39LSxc8iDAfLV7BE847p6QD7fUEBjgTcApTbBBEa1xjGS7yzcRZSNufu5ZvvFLbEBjeSzV6NSfLVz8YUjq8hF",
  "key18": "2MrhMFaFjWFDrKaVS2yytJx2y5tPWS7cHqsdNNP8h7cXFViQLgWA6zJTWAUJA83HJNyvQVgB8jieof6iNTMcBiGx",
  "key19": "3j2WPoE2nuzHm6ScfNQu7ZiVzadoKU9w7Ms7dWdy8TWmRScC7w6YVGTas4xeYbaKqDka2vyqRhe9DFxh5Qn8nJuy",
  "key20": "8Cx9USSpmskKFDVk12yjy3Vj25jzUwTp3BfQ1BACKCb9b2T1viuEQstckJxThZaxycDBFQBcyTDnnbNSqWB3K7x",
  "key21": "3E5idCMcY1XzBD63CfXcgtXUAJ6faSSgCPTkAjatG5ynrfX3Z8v5ribKxeLV5rx2RmHkfHEvsWg36MkNcRfRtrRn",
  "key22": "56DDh8TYVkDu5mYAxywmH23zgYzjZz4CfYSiE9bGR7DggRzDsoT5BRjcF7m95Dk4s6jKV9ztPh36TqUVGKR5NiaW",
  "key23": "54TKUCTuRwrP1CbKpKh7UHpdoqPsgW5QE4XamY3n7v2VhnADuxnz4xGxJXnPTiRsvEvKencVh4jFpnKpwuHx4JMB",
  "key24": "29MkDamTuCcZXS2mfjizGocYiG9AGeGcSKV4wsxpULC4r2JeNefo3zzueT79iz8PfKfanuacBZQL8aJb3mugSeyM",
  "key25": "63LZJK6oRpnXFx1L8dY3pRJmHBfsoqV71HGkYDVTeU1mY8Mggvq3fx5m7monUm2NT5gfdDjm3nzDtxdoMXqdD47a",
  "key26": "4xVDqXPkf9PM9jAqebg6FPFPTEZeu95YXSeFbWATXQHxiMR111u3kLvBRn45zm9sGs2UBX7eSnozuz4Yp7hFXrtk",
  "key27": "eJF72a9CMLVrqUgujSoUSdaReFGqiqvMHdjezapetZLzQ2Usn4uMep1V11xZAjzyLX4yjsB9XZyCGqvUVkwQkvU",
  "key28": "4LgNbxzsQAbwQCbSjCWCotoTCin3BgYJbnMrX94tu6aU5ExPJrqtCYCfzvhdoQ1kiScAYCRUBjkLpdPpf7fFd64y",
  "key29": "4phbk5kwTZ7fyAhzpBNHHkBGYSBaMQZ57RuLHQJv2Edoy1CxwAGJucqesH2wULzJHDVCyZJ9nuAqX3vgCDBSDPnk"
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
