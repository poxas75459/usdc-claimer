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
    "3SuayYnaM3vjoK3hXMSoGsHFkt6SKzZWoEFnHf6mKKENSTxCZg5KmwSuZbbtPK7yY6DhY5U7rrxJ6zA2pCaCySC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SGDcruMCWHgVcMGC2gmEnn1aLVYQRtBijVDHZDB17q7YbhStveFaSfd2abXaUGyf5JeAxr6e7WTZ6jjNoiWV9cb",
  "key1": "5aN59MY6unsUNUbouMjqccQEe16LMcbRGWLQ1dhiTbt1tFZn9Qbpi3XbvegynATCBH2aC6Dn3f5gkLpoSy7QJxdG",
  "key2": "5HZrygnUGgsVwqj7aQVeJWLt4QLKrvivsQhp9LnLJVSu44Xamjnz6htTy9zbyPQ9sAZU4Yds4odrn7Ga9y9TfiSa",
  "key3": "VVpGY44CbxtngMgpBo1xQcifHqSMhZPvFMu3m1k35VXLLYAj4Am8ER1bXE2M8actzhFs1RKcJqU8r1F8LV6tewN",
  "key4": "3PnhUAcWMGthyYAwWCLq8NijDLKFmt57KoyHJCqSJEaymBDo74ZNY7VhsTxLepbJR6qkAweL8j57J5rdJ5gRCDMo",
  "key5": "Ee6UAqnK76Tk5wtqe1bRbVzUcgKrsGB7bTE6KvZjw7gr7vr8Jk95oF2rBfzyqVazhrfWXHywY5c9p2Cym3wXquJ",
  "key6": "3TntivBf67zF7jLsXFhpTSF5BDtCH986XA4q8n4jUmguQ9jm8wjgjFpTgRaq7NSAptRJRqmw6hQiuJMEhk1svuyu",
  "key7": "q6BSSkdVVdmoihDYUz5NJo1PX6t6Fc62V7tiJh9NrcHhSsWUxGnYaPyDzudGpZ6e7TyxB9JaXMNPjm3JoMYzVqb",
  "key8": "3j9EwHiedk3pFkSJyPtmV5f1Uw7L9dvXrpPj6gaYuoJ9bsDj8dH4rq1P2tJreNhgENCYn1iqdBhyfyW52UENbHhA",
  "key9": "5zq6bwAjHnoHvFh2WUdEBAwpdYGpcTEfQefUqowyGtMgupoc42UTCM9gRseZdYwDKjCrqgHTUaX4wAMC4Ebvbq17",
  "key10": "4Y3A8Hy4EswPR57S2Cm31x7DENYpqgSEHom1cVtMrcHevHUUehZR6Xq1NMPwNNYkePcWZLHTZ76wm4JYxyaUDZdK",
  "key11": "2z1xbougoQzFqySv6xRPDkt9P4aSNpGWRPfHcomkjfCVfgshK6nTvgvTysvKshh7NZi5oywMP6sRCkKy3x66k17k",
  "key12": "2dyGwT86jQRXQaZ3MhRYYzLx8vCWf7q85xzzzRttBzD37fR3gGmTZg2ZFE7Sx4q5FDz4XPiNzPvrFTQvYC9ofrWM",
  "key13": "3yZdpfoH4kEPcmHSGDXSipZDFCCJCqkzJbQJus5zMtAZy5RDQfTRUyQGhTunyqJ26bpeoZha1GtsaGXeDYwb3kyF",
  "key14": "5SkhMxtfBbVzBjmqxB9s74YMEzM6Duqoz5Aw6EzRod3BehsT4K4BBTgEUAr19WHpDXLSUntsQzdsK5Gf5p819QMC",
  "key15": "3g2rn2VXjunanG6xuRyhLYArntjtPnUepYhV7T7Rsd6nkoY9LHkAhtUiUye8zfLRmZ1w4iKgRCfkPeoyoNC8sYgP",
  "key16": "2ZWUZgFRGArvUDcyYEfkGJqmbGAiproTQnqj5Ag8XFto4HJKDz8q2oMWdwmk4K31CGmNofkGqvTcFhfwFNKuvKRQ",
  "key17": "3iMX2VSJpHqziqSZuxM7M51fQuu49AhDwuoSp7wNmEbNszJtrfWukTBbuEPhbr9rry5ANrzbkhnhqCFxyTHa5X2G",
  "key18": "2WEgR6psQheBqXGL9c5k77nfH8sN7Y6f5CD1bgexsSxAcX35hPw5tBwnKUiaBXo5kcQvtCgP2JSBTSGNfrMQNcbi",
  "key19": "3rnVXMVFh6Uctdv2NRmuss1f5RGQEsPFqPrw17rBgU9xqbvGgUamUFyGTGVxT9Y2sFRE7a7vK9WioxWbrYLfCZh8",
  "key20": "22GNjFiJYcY2UrJ1cM3jp6HB8C4gTRvU72mbUhadc8MFLPfu9HKWFiks4yd5VMEf63beBh4osie72SjwUxxjdGSx",
  "key21": "J8pL1f165dd1EXXcaS3vJCApkzUmPYMmm1GzcVce6f3xcGoqQ7A3sQZfaSUcYWUsA3fSavzqxRw8eGN5wmquP9G",
  "key22": "5g9whfRGAM9KxTofVjDWXZpGKSATtpdgHDL6LG1kAxiSMAvczZi5UVEKDsmVcYKJzdvaiN9XY9ccACQHDNTuACfr",
  "key23": "3N1bFWoBMauWkEUxucYYhLeXQso5rx9S2b1ojdczsC6fcXXYs9ski7jFU5W7WMJzkX8sjgqcVfVEy3berqVorCSW",
  "key24": "WRnTnTTtMygz3A2kgrXpViaLg7iAYHF5Bh3rJjXKdLRff7JTXVLuzXXc5CV76ZG1BnS2f2oCF4ir8tUqTArDMDM",
  "key25": "2hZ3JZDfwuWtwLEyZ2xUdW6yUeHxVK8WACuQrsuujtKxVUeqpyYd4jzDFaguzqqyYXpeVY37U8LTqNvXcDN6Ltub",
  "key26": "3YDRdnqXRBeQUZA9aXNWzHqJsViFVr9gqeTTJTbSeaSt6gbj6GW1T5UbksPoJS5fvjX87jQ2p6FSQhWU4r9i2L2S",
  "key27": "2akPrqLb1YgeC1r6Kra3hJN33JhaC7jeEUgY4yYSsuMRjVua7uuRUgEmXW5AybwXJikuiiMRP91Qxrb6wkmkkhSE",
  "key28": "5ChQcAubWRGX7H5ptsRkaojv7G7mir7yjwe6MPrHCHC6UmTh8tZ9oSUmSH9BAXtMJTVURdDidZwM31MjyoPNK2iV",
  "key29": "3GxQwDkfbAFaub3J1wfnnTDDB3Y2BPZ84CUSfLqh7s5oeuZZgtH5FEHEdecYpe1S4vYZATziE8H8o1RNVrZpzc2t",
  "key30": "3F51spGCQBkTYNyGoAXnsyRufjAfZEnfijDrxGMK8Ca61zNmAScZXjcLBaUttyLrMnMqeuzGqmV1Y6SMndoFCVSp",
  "key31": "4gjUHCaHTjLXmeZ1EMJKQ6REG2mA6Zrz9rwDCnttZ4DUYHCQvoGcWPsX9i9rxH9THCJcppuQi7CiSbwDrhn2kUTz"
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
