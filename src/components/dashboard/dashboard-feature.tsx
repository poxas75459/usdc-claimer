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
    "2RscREDifKsSf1xLBaqH5kWk2bX3UPCSQeDc2w6Fw1Z7WX9eJciwewRL2SVt5W1KQcmze6zetZhmQDry98r5z8xv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gHB7Si9QmLZaKrnjY8uwFaYigMCQQFvRTNgRLYPsDaQD9v2dHHwubbrhDTFeP3cdPMoNbMUJq7X9HsdNDUxd9sr",
  "key1": "4SuSfSKNMqmcgSYsof6sJ5dkAhidKJwyopKDFpGWf3ZFkh53qRJSfwkJWtrJ1wedbkiuUk2FPhxA9fBLUCqMdXeX",
  "key2": "4VzTe826YC5HDi6DuqhspLJUVEatFP5NiviVGW5RoPGjztVaWGf1p5beiqJ5N9qCRYe8d8Rfn9CxNUG2Pir4uM1D",
  "key3": "kNrNUj7xEgtATo97DXQSoytgATaVshaXxAKC3EJrUFY7njKy68SG3q6SXmekiMfwQyx7ME7W6iCpjRCQVod3r95",
  "key4": "2NPZFAGg7oDvNYy8tjMp5UT8ijd4ZmASiD6Gup2CxMB1QMiHXHBeJ3Azhjht2wXraEX2VEQ9qBTrKDsXcJxofHeW",
  "key5": "XxJ8obEj23CmCkYvjb5jq5wuy5unA3kuNMceH3EYM7zi3xkvsPv5o2GeEiHrcZyeueZ15h4aHPC9Zt59hUWRnim",
  "key6": "47WeSMaGj4SUpxwcuiBgRctBQmku93ckUrQq778DAQUQSq9fzSx1MZzE3wGDZhwpvMEuAL3RRi1mgYGwy2rMEmBK",
  "key7": "2PjeAED6oXxRwtCgBrzxyJhitWWfEPqQiMLi3MbS9iaf2rP66RnDeSCJaLC1hNXD8TcpGnBuCXdeyMfBVQ9vbRH8",
  "key8": "4pHddqvZotRgt6g8vjAR97jDahR58pTUoUrTCE3roMET3QPGpkhpi3GjxFYSBFv7xt9qZMNYcYwtLJnJK1fDoQsz",
  "key9": "pzpe2YHR4VFe8rRUwjJvqoaCba4N2APDHDEqCFFzdZ6BX6GN7gtdvmdiHpyqvqt7hhRZCDkrWKHmGn9akhoK8mE",
  "key10": "5jtGxZNgLBseE9wh8RF44trCAd6zkAac569PAUEDpmbmWZXGm65VZm3bQbHFF9j6SrGQjzHE4yJ4HZsAWrUN7wZN",
  "key11": "5UzwLfnWfgzuYyAgQi2LZLuMgXSHJFmPCxPqU4yNyjHdsULRP67nrjrESDiaZts9fU81UPDFak5Lxf5MJWfGWHMt",
  "key12": "gNQYaBRhW32jXNtUK76mJ4JepKMJiL3enAi4VvRyeDZpBd7N6DGpy3P349KsCU5vHSaqaPPvVoEUjjhb7gT8RFj",
  "key13": "2jWkz7C9yp3dgPoGSAimR6oVU4VkyeXEo9enkBATkSatBMAX8D1tPZKb24RcdFY4E9hHoxsdSu9iUUinEyjApiRZ",
  "key14": "2GEbtE8TYar9LGq3WyDuRWs7jLP6yMBy9ejtY8cw3NrTmDLbDwyK6sDJECWpDp3qtLXNtiXoGtHyAszdEvuquKhH",
  "key15": "3HLxCJfURSgvwjZAT4cZjU9c7zM8eTRruhnmirbc7djCkT6VNNQtMYGRznXRC8hZn6scRjDE6umRtKnbdiUv9TaJ",
  "key16": "3GVST7PPiBCNcrDG5fUGXSvtHLvKUjZ5u5GfbBaD1mDhfCowF1Q5Pa2WfzA9vFySXWPLwFcpFseH9nrPmwuRJ2R4",
  "key17": "exsGeafwdLZGottZ4UgnYzRCnV55SnKbEfawWcDse5GWSathCa2Xc6MGu3KFpmNHHymuCDZexU5DNuiXP9qzmx5",
  "key18": "4urSaBiYzRiLGAY9wi4hUCyapzu5S5bJavFQLY8S4Z5WustjcT4enkY5tt5M8m9UBFFVXS2PCLLVRq5CCZdcxhi8",
  "key19": "4HuPFiAT7vC8nigK2S9CXiaZB8o9VhM9QPYd4E9oTckH2CwDJDj6ikDHbm5Zcvp7ngESEW5WuyczyLM5QBk2Z2X8",
  "key20": "5N7UHEXEcJ4CvKebq8UHm2SGZ56SeiuWSf6LxDdz4jaMFmcggaA2R7NtTWutSeeNBFuwxtkqxhZvFJ4pQ2vzbEdv",
  "key21": "5z97PhXdxkRDxhj3hr2TnhBPD7XrQXUQZ6KZBMn1292RS2tMmtAGPw3nN86dM7mqDVUvJ1GF65qva7LXUQdvumf7",
  "key22": "63P5VFrPBCTobnY54kkLCj7SvrvDTq63FKLKap6fxvzPgH3YXumcqtjsVx3RioywHheB5GTbErf1ibPre883PQo2",
  "key23": "KMKrETKQsU9B8j1fdJvfmP3NsBRWUF16uV3bfv9DfMF1c6Af19jGRobLuHAVev6ykj7QRmpAHy7gbS724hEHBBj",
  "key24": "5jekmWHpKei3uS8zLk2MN5LK1yDhgoCW4gfnHP4mnAYCKcJ6d1WnGTKzx6UoVkpzcEV9FH4tuTkbXceUCPbNRZcj",
  "key25": "4ojhPWaazEkuU21RfTtpapK2avkDYDEUM1AZo2sEWt9Pzt9pkkJsYEa85AuAHheN746mhWy6DkdJSsWf2te3M2Xa",
  "key26": "3T2hugiNLpptL4EYbEtwkkkL7p9x7tbR4pG3rDd1pdGq2ZYK3TbVw7wqEQABMh8bCAHDyvqgDCTTF6suZe9VYJ7R",
  "key27": "TYSkizZp8JQ83fLHsmMBJjVf6xpJDCDYGH2WRunu9FQokaw15jYRB2cd6rMBrwE2uHxoAxfUHzfnW2s7wMJfEXL",
  "key28": "3kBHFc9mkRvyf1uc1hHExe6UocNpqKp6SE9UDnqhLAw661xG56tbvTvmxvp3tfixZcyz6uqZiAJy6ihS4d42LXhz",
  "key29": "2o384GScWEgipDVFnoKenJzsLoH82EPSsoBpe2iZzJJR7MFSVLKD7NRHXVZgr8jgt9e7Z8KDWrD8neydnei9PpjT",
  "key30": "aXuH84CZ4DSpuHyq4oaEqNqxA9TsvzrASbTqfUiX6TjrDcYxKMiqZ5EPtkMTdjJCPoujxLbRNSUTYviR39cwapa",
  "key31": "54AX7i1pcvuDPd6X3nTVUewJEwUdhVvsvjVimBgCecpjp4YQddCuqpSyh4oYEbPLTRtBaHqRu6X3RASg3G9LoPT",
  "key32": "2yYjU8jqvpZvqEVktGtVK7CwfzZyAuiQREJY49ATAG1AdwhmMJDBAAXLsH1xFUCTevu98oKMXf9VoFKr37j8YocQ",
  "key33": "5CSA8DLGFcB7MRAkFmfSPVb6tDcNK4f1QUda4xj87LrQ7D876BodyPRRw4kjw9yrNzeth9DV9Z7CabdikFW9Zi93"
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
