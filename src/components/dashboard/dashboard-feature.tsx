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
    "zteZMdy2wME1Jmh6YDFRrdT9ugefaFFqW8xVR7G7WBRYmhh6nnjHNnuTrm3KGSahc2QeC8mRGKt2eVCneaMAJAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AkU6PNUPgPYVFE2zsn6hYguJeTgojygNiDtcXeNUx3oY9F9pReJjhaRbZq3rEh57UyjCDTfCTHk7qzmtvQsvtsZ",
  "key1": "5WFv2jHRvPo6NBm4M9rKajWiT8yEaa5PeBMwu6oGZo6RqjwaMfPDnxQJaZE1MDVrBujh6L4RHi5xZYyyyCNrW2uS",
  "key2": "SyCYMgKGGpjtwTTj3PVyhEon7ua9nmYj21XZp9zXmfSMjPwhtzKydHAj3NX4utavdQyTRPMFAmTi35W7EiPa5bG",
  "key3": "5NL2X1tTXuYGf5CE8F134WySvfCdDMteHGrLdn36mLhn5YQLty9DQTp2LivzyestSm7kRk7YkMKc5Mc6am2WYJfp",
  "key4": "2WgSNptomQUHTGJK2Af1VzX7jEEkn2VV4Za89LAANVuhCxoDHC1aGCvcePgQD9sobWFgLF9RbpXqqqcSeqCP3Drr",
  "key5": "3EiDvoipKUGgU5pFM1KMK4NbkoZCPqDowQqP2CzT58irr7MuTwmkBf3Uh1BGVoscQEFu9QMytUfz7uTTVYs5eKV",
  "key6": "3CAuEtYdffSV47NtEePqiv9sHGdBx6UBdB4C9gw6NY2h4ZWoAAK5txw59QQeiyzZmqz734PCYsyFYXWRQT75nhUB",
  "key7": "jYsobjNFspuKSa1bMxCnuWZxRXxTSVjshu5jniSwuBefz22DwpdTGwAVcvrwHsMLaX8yTRBa6T1JWc2cHhiTeL9",
  "key8": "yd4oPUdLXxvW68ooRee2yZMHjCoyBiP6fEzyoCTR7dFrHmg2Vfe5cVFexCJ33x4EVEPDHjYHEUp7FkuoG65PuU6",
  "key9": "61ySSQhh4VCkmj8ZfVMB2QQhbhrcN6iyqCgYaKfFdCix4Sz5L9GUHWoKaHWDjKCJE8APQSagdFHxNxgSUPhkBQk4",
  "key10": "3MxF2g4q83gLWPrE89FtJsUdgQk916XhEeyqhpVycw75ryaU9b4vu9VFSYfurzgtcaP7G9zS1NMN14xwNK6KsGBB",
  "key11": "CArC1pkwP2UaLfCyXzW7KmBsp4jz7CDXk5Z56L7GtFx8fRBkKszAh2uBk7PViaDEdX98p9EjBqJf9JWczT6vZJc",
  "key12": "4QCbiMSn1nMEjqS52U2YJ4anZkKZt3PFfnNnThWLRg7SVukDxz4qTibx3jkiWe1Z3eaAKY4JQ3sL4gHWG44nmXUu",
  "key13": "2bG4xYebzNQx3FsjNeN1WNDoNiW2iDbrGr1N5jUjZjkyxr5hrNDYPk4P6zN5YdaeTDcd7Ticq9HG4hMugZn2GyJA",
  "key14": "4S9djhNfVZmfUEbmDwL2MH2Do2PSD5nbSnRhu6MzEzee5U1cdU1Y1g74LZkkT8pj9vS8HHvWfopzaCAmPiPnG4sA",
  "key15": "2z54B9YtJsSqDF91TkZ2PPn8SMKgK4xqBKrz56XJ7icD2q2djPJRHTLLQWXkMfjkFNBBL8nx5qUo6f3Qq2DSxq4w",
  "key16": "2zLDww7DxBpPxYGKKk58hYaaojnTX3BoNt8zC2yaYdW2BA4Fe1oGQnUqads3ApumGZpem8nqRwgqKq9eGx6UzJWk",
  "key17": "31W7CCVgsvowrN7XPavzEBA86UDxGFtrcRb5VAGaeRF7hQoDdjEhpqzNmW8fARgJ1SgpGffyxGHUMeZyBg5Nxvrt",
  "key18": "2HjDXmXa4tUSxoSjQ44GcZzzTQy6HTZyr1FJaXWEATjLfAJEAyDNLkLm1ntjTEeDvmrGAMvuR1hdjzLh9H4YCvTk",
  "key19": "3DWaRL15CZBh6ugrvHvwJsHmhhXJZVZfv9sZDuoVrYuTBqknsyftDRMr2HWTmH3tx7bSX8TMYbV1NidGZnACuK8M",
  "key20": "2b1cbrSHL6733SdHv6V931UcPuJTEfEWJgE8b12XzkPEWdZLYL5MqvugCvNTcp1FzbjNtMpbgAUkwN9SBojGr89o",
  "key21": "669iGe28aQyH5SggJPi3KQeHhWjeB25ikfqsZqaQivWrvbaY33voNy2SjgWiYunSvVmpvkwGV4ksY4VB1RcLCvsY",
  "key22": "5xtqaQ1qPT13J6RCsqcRTVyrQnPvsW3bNhd85MZLfoarDxwn7o9cwMpagZQqhW9Z93tJMxYrVA8n1Fn3Y2RQz1Sr",
  "key23": "3iFbsvuLwQRcmyyKRKdLHAevyM1sc6XDSQsajtXZe5XmtpEzjAn7Mq4S65CafhthVGCLtpik23RL8ZMmGCXxvCjL",
  "key24": "2kRm9wZVZipUdwae3a7kuANPDq1ZNuvpoQnSjrx98AUBZkvtfrjWbFBdthN76gr5xwt3GP5oW715DrexCYFyZC1X",
  "key25": "unmCopzC66L2q4NBm99Y1BBBBoqYek9vBiHbc8AoiJtPnHumhPcjUReGRznPcUidH9YCDB864kRSEhh4RsLcmcy",
  "key26": "2WyAi5d28k2PzQP16BLmd5k9UkQyszG895WtyemR15g3kRKfY1LeAL7T6E3bvdbCX4fWL2y5dreiVRR2R3AgphKg",
  "key27": "4H3HVpLLQgjf6K3Edhzfzf1jqmfi8kX5oj1V6XFke3HWk6YvCQUQ3EMVKw5ngLCtdyJr9nHvmqCxK9bo1V7hABYu",
  "key28": "2EK18xHjsbjpNzvfUwpWoi847uNPxwf8sx7CSiSeknep98DvZksnwoS3EEYpLVC27wiRSVghQKF2yk2qiL53aQo2",
  "key29": "kR72WXgqm7zbSx1XU4moe2dv6a1JM8uJj5MCdVAW6pwWjXtAycQhRo4pJoS4WWgp7MdmpvuUbNLPf4PsEmixD5t",
  "key30": "5rYRMSP3DCDhbE9nTyjtis7fLqZNyuSZ6tUKxBbiX9xkyiEgMkLkw5B75Td72AhJZRTGru581jWJS8TdAzdUUpS7",
  "key31": "5QMqZhmSjhS4ZMSv6chRr2FTjz2JKw4WvMXBWVEMvRcBck2854eWceE5nVyFRBzauX25re6n6tT9KhLjonsFhNcL",
  "key32": "5XzUercSA3mUGExy3e4VkC6hFy77LhpRumDYSoknnTTTjU9FnSAa33yNtHMLMSe5rB72k5gV2xhpj7VWUDvzxJTZ"
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
