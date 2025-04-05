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
    "YCck1R33nZVUgAYhK76rfiu5YezxFDbiNcSkSWHN8VCVT9FfBr1yF4SsjZuEa1RtpNZBD9SEioDxH3Go91eQrkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ikQFeuBanFna5c6uhSXnQK4au6ExWXZAqQSoJNmGiVyJ2u2tHnxzSqqXWKAm1ZBiRW7ZZc9ULtXfVM5FEzTB92",
  "key1": "5i317yco3gBtnYjNVJw5GrWEgAa3BBT9ucMm34H9DxVRHensbm5VJvrYkp6JVeKcsbePou6A32kmZ91VoVQKnSrW",
  "key2": "2JZ5d8ajmFkUoBabHUVdKsneA4hLYwpPq68J65wfDa2ipN8afxh4qRwgfVunQFc8T9TCJxhQiBLy9PWzPFaC1sbV",
  "key3": "ycfPdMJSA6nEYjysRgWE2EomNaVZZ8DiE69SPhChGqFuquvooSFh3eA6tF2QxtGWY13NZeRLvKopuSx69W8K6Tx",
  "key4": "9PbkbwW49CNByqacnPQfyRYVcwGJN8EezkgiBjLridnaVPco2JgJg6hHF396CW9EawkYhuvnC4Sz9NZaVkfu7ho",
  "key5": "LyYwUXVdyUxQBhDxtkPbguirg9bDpCewqZ8DiJtrt6QnyjvaHPiPdWAQ5YKPS7Cqvo25aFD2c4fYC9JjA68AvNm",
  "key6": "3WgyAWtE5jie4rU1vENj7iYh16CjJPw71pPHboiuX8PNKgzVFA3BL3a1afF1m77pqkpopAiaBVpeJieJrCZ4bS1G",
  "key7": "1vRUFEg41L592BtJJWRAvvNQXpynH5DYHH8PBzk1iRfWSbLG5jWDoL6Un5PvBYmcR691qMb5J1Z7u9ZCiGBRQF9",
  "key8": "5CfanDhsqkqHNCzj7W83jmXz4w8niru4EQWNoB2BJ1iVLQVas4qQqwPVYFa1YqRGiX2LaUscSQiDX5zbRZjqeJvF",
  "key9": "29ZbocQVWTaw2HdGUDxGRHDDqwuFh39cSWDkGTdsSfV9p4BTfpWvLpPu3BBC3wRDgeru6g465WsZDSSrJyrXTpC4",
  "key10": "22d75CfXsXfPPRmH57KApj89N1bTk5MNYRA1vV9mNsaaCiJZQwjrfpFZgKpcs7Tg1Yro1rUC9APaAW8hwqhYSJ3q",
  "key11": "fsxsU95z3Ky41Vkzgcn6kcmWEfc7kb298RxHgmSsc2Brnrd9cCY5A42hHDgML6AY3giZSitnto9xuzqzGPb4HNh",
  "key12": "VCLmXJoYY1MoQEKZkVq7LJfiVqcAwZtt2PRgzDcFJd5Y4Lt12JGB6JyKmEXAhgh3cJWL2xacpytBRiWcepmKekd",
  "key13": "2bnmDVV9TapNVoUXgikEgvpbXqU1ULPnmrmH2fkbu7PgQ6mJmm7kEy8MoL3xKetGiiW7xeU3oosnrxvGgNpjc17",
  "key14": "2BR2i5FNMTKPPUDjG298guMSGcg856GM39AximbhTvjYi6cr8TcNLgfBZU77XxHVj8f8Fq7bdBbqZrqWU4arB8cD",
  "key15": "2vHej42kKQ8f74DAgbZ7djo5qfSfsM4Un4RBzhjzoKht24aM6nuSe3HWuxcdcbSyBTPC8Dn6jamztd54zqj9512r",
  "key16": "4LeFgpDsR3Sf7HVmPMZperCfN5FJzM84Gut8qjS3jtD9j7M74q1UybwTB1H8xD16K9KM1p1Yq8N1JLrBKjLni6aV",
  "key17": "ZUTFcrJAThF9kWyzXJrob21EmtUdCftvyKHqg9wMu6QoEx6sxAiyviifZo9jpHCTiUxHQL7iXZzhkVBBwKJGJkN",
  "key18": "2R1x51dBBEZcyi4gPCPq2QwKdvs16oVbaR6gkkHQfMYSD22tznGTonBX2fHb5hdPECozcfJBYBTMJsdpchAU7YJK",
  "key19": "3Yywe7yaC3kTJR7ktbBxyBfjuE2bCdcLxjKheJGngKrwJ8S3F4obaXk7x6ggJtYWcehppjLShhnm7v4Xu27vyfBP",
  "key20": "63VxAWWgBej9WBsCGZwKFtSGWjwDfnUKbnspRrrQWX1vS79Rg2dvZgHQ45Mia1CtGKAQqE6pYumBTsK2mvVstQ3q",
  "key21": "4otJai4MTpt9hi1S8tP8QxedTYqARMfc889AcgeQMs56LUPyoYSBMSFgFPQ6btU63eq2yegdFYuanzLmig366T1X",
  "key22": "3WrUgtWQzViGsqJW39ttzFp3pLezfHHaeFZt3AUVVuZDWrVNavh6oRQWHPUrGufELCkr7JvMd1LWLhyXNbcRxGMm",
  "key23": "58b27BxwqYKSP9UE3JSepefAzPEyVmUDioifuWM3Tj7fAU6RrVPuVQckkN4psppd1AGBNH3thsmQJzknMwA3eswv",
  "key24": "wFHQiAr5QWacB1ozHMzyhKAbbYrfpuTyh3EXZdz4sAfxHATAgKj3ouvVaLtuAXSJn3S6oXzzxTiDd7gU3BtRASY",
  "key25": "4CEtk4GQ3zBVCY3Qnebh4xdCXTQ8CPLwUPy3h4Hf3rB21D4WPm46cXFakEiR8paREdF2bSuYrSb5opbqrF2jRmCz"
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
