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
    "rc6qdLkBAfdd14H2JjtDFxmoYap8QUzs6mQCvHisSCVQE3L5pHoqWrfePGw9X4ubdVaKD4konDXsmLnaccyLFoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3Wc5va2ejeuDpcCVVYTumHJF9RL4coKvBQeW2XxCQSQd6UrqxJSrXxDdsrWD5U1kw81Umk8zrqBKFVeSPyaUeB",
  "key1": "5w85BGG1UqQuVshNtFeUL2EwGJ9bk5sjoRQy9izHqbhtazV7DBn6ddE4HwZu5U1uXNWQUT8iPy5u46zh1ufvGQSK",
  "key2": "5jCXNrKT7uMaQqKpKrsQuusPcpQN8YXx3Ex1L87XBqfM9SK38PCdxwQptUEX5bY3zRkKrPwokjTFdmHTsFGCoqco",
  "key3": "5VkWWePgVKrYbyRDxinHicfF8Pur1cMbxjGq2scE7djZK3dDH7GHTdn2HjbBQxsJxyjwTRrQGBXAs3V57Wm2wTjv",
  "key4": "2H2NHnykiNNZS4NYhDt4nFQZmzYDrTrHAnjjN1KvjBV8Se6sbUaZjBVgsPuhpZbEArYQag9e2chiHKy5DxTMT4yJ",
  "key5": "3hogYKQ2MayeaW8iaMDdG2GafWovPjmdZcERtQP7NsZADk67E9chk4U9S9YtDFBa6Etm88pnc7StFp6c5ShKd7Hh",
  "key6": "4giNpKFmKMpPjXo6UBr4WduD9GqAmtvE25CFikHQQ3jRJ5g24HJ1zACE9vX2caxEYf8Tsh88AGE32ctYyCgSk1v",
  "key7": "bBnMPGAEroHU4YBi1dQgyMrhy6DoZGHzHjJShVqNhxaX9SUyPRYtPiXuRz4Jdif9FD3jucL4LupRSQyqyEXkBLr",
  "key8": "daukCwPesrJMZTyMrc24cFBbgHrkhWvS5Hf523z5waLhXPMSKqdku7PbshvUuhAQFf7kN5HDjXM1F2NaBvZFETQ",
  "key9": "2Rwy648hTpUmWLMXrZgUYGnzfgYMmrPKaMEgr3YtJRmEgyz3drXesj3XdLKgZRt9h8T72dn3uxo2CDpwvVSoKirS",
  "key10": "66SVbHSXckoKwnnUTBY9kLUXrEmBJoxW4qQCyd2wNkEHQN1ytTQ3ycNpWZvrCFPT8bjVQxUCRhn8HrszEnBTC2rL",
  "key11": "5Y1nTFRKg4ZhBxL4ihFgZaowGk3CdA4mR4kWj9u3ZWd8WyCQf7ZFumK9ng1uDtqZMJvPEVmK2JGC92xxC8HQNeby",
  "key12": "4r4CuQCR8FqdW4QruaB4x4dEm5bxEJTDh2aZ2FE7qiZWB6e9DLSYmqUzmY8ogNSG5vnazsu7kNvghm6wGTh8K6NE",
  "key13": "5za6PhB6fsGP9t91pgeoZgG3NeYZR1KcbmMSrCRfQQ967QGVLqjmMYwm8hMsiYX6deJZ7icS6au3kxP3HZ3CopFf",
  "key14": "JY56W9yzrYTHLDBfDf1GfcuRwWhAEbiAmG9QRvwjv2ExkVma3izJLJmjzjgn7p1QZ7UuA7jGDspQLkEvnMp6Ygm",
  "key15": "2CxUJqP366WWGddQVejSBf2Yq29aqx3Fmr5ufv4hU1wnPirEae6icChqdtqqjzQv5UUMAhuLQdCwjesky2XLb5SB",
  "key16": "63nyNCrQWKZNiRxgrNi4wkUPD54DSHWDZi7BkRGSdr6cJ1BaLESZ2SXbpRnZ4fWdkbS9nZrKhsCUetYYnTJTbtKk",
  "key17": "HCFD7eJoCEQ5ByZNyTVDUdEisYwBBGiCYbhvWN8LBFQYDzn8DaL2w9CvT2qG1DB8Uk9METZuMUMP7ESposGbvom",
  "key18": "3jhbj4AxouDBWEtjeMrkaVTasJKRG7hQgtf1Nowd64NqmgdKafvTWaC7DTRcVJvanfXNKd51Q5UdUhydf5mJN9DJ",
  "key19": "3TMkCmT48j65QuRpZR72Bnwtmj7UHMeYeP6Q2mt6u8Uq1fjQj5DmAJwLVw7rA7MiDhLuSEJBedVEHubwrA95Lzs8",
  "key20": "tXhDKbCGPYSML5dQgEKSDk4DJaznryn7jN3TzrXtuaBVYfa7ubzZoZ7dgXdGJBQfqDQyBYNeRJ765zEHrUSXz2e",
  "key21": "KiAWfdPwosrswJvdKHSAx51CF2vuKmMLttEZWCELUQ3Y4tUmGUbqFynXwt3fEsxSkD1BZqTcNivUiHqTY8CpycK",
  "key22": "XJkFqhTSAukJbbwXR3ejKdQqUPiL3rUCeK6pKHxD42Y23GDrGECLMAKzXDjhtcapVZENQXv6URxcu3bi12HyxbZ",
  "key23": "2FkndcaXMLSynDsc5jUb9w6SxSEB4c933oS4tnoeV4VGNoZ59KxRYec7Dc9NSrPVKQimas5aFYZHgCTdDQXmc4pw",
  "key24": "4NrwD44xGDwdeAje5FksrSNc3PvNYj2P76AfSVNtqSFVwAfvFFc2bVrpLMMDPCdvCwtEHjiw3gNCqLyy9BiFbUkm",
  "key25": "2Q9m8Z7YcJqmSv76hLg4T7KGK31wh7F9xUNgMcgvRgS3paU3QWMb1bcPyp8Caa79ZNS2oGPb8dMUHvcbaTu2ka8H",
  "key26": "3GUNhCmk8zGkqUBBtAtJkCUi7jA45SQ7wiHwQptYSWmSBTpsS4CbNfjeEqXxfVx36Gvd5AvDnDi7jvrD49aCuJZU",
  "key27": "4BgRfffHzRYXzAP3uqCBvzaaddneZuAF8xq82SniwjgWUQ4TgbhiB6DteAP7jUKj7JiUNGHEEQhQUt6XUixXpr25",
  "key28": "3yKL1rfN66fhXqGiYogxmnpPqq2WwNLJvNEFXBUEr5A53XZ1KMGakTco5bVxS4RU486txNuH8EdSaJdZSWf2bhiZ",
  "key29": "3Xyfyzy8zWdCohNG8J19VmrgJssThbcdRtZmV1MTgRoFPdon48RpooH2Jg5JapVnXt4gY7CqYf4urwDBjeTvRknN",
  "key30": "3u4xdyueKHHzRgzUTQf4z6Yrih4LPtGwN2BauNmcyY6iFTJk7R5jkLE9AAYLmYr7Ha5s5BbanSaERgXm9yqBB3ZN",
  "key31": "4i6P27TtdUNcqaWjYAr44DrrJFAyxZkYXdrnZqNqehW1VHTkfknGqgWv5dFWcnhJQFprfCkHzaZtBRW7idZX25xu",
  "key32": "vvtayepR12bepSdWx3YqgyusaU3xfhky13wJr1ic4eRND7n3JrSs8Qirzh67899Xkmk1BBJGT5K95EvwhDSdbBy",
  "key33": "65yC844cbd2UiQFZfqN5Gmz4LPhopaAeg9YUENAFANFZQAMnuu92WfPAEvm5ukTtngHra6wz1Koux2CmzYaX6Nve",
  "key34": "3ZzWPEoaK6bB2JpbnA5FRieDRqj7WwJtPdynsskTVZkfnjT8RCdXyhoau3R3yfbay2Z74PvHQLXZkHnWwmRbME5N",
  "key35": "5UVhkXRRoKXpy6zZzaGFDTsphGKDFvbnwJBe6hRsBXnJQDQF6yJbhH8imzwWUsUxqnBcCXXAkiuUeyRqgtT3eWzb",
  "key36": "3sVRm39WZCDtQMSQQWnZUHMVwJo8UkJwY4wuihFUPHdrQQk9N1uWDu3NnvENzZkSgv5U2aBJQcaVyywAfV5XKd3W",
  "key37": "5BRCzuzEvLLfLEPBG4WaWovzar1fRFAkwV7hcqyhYJGmuNCycMZf2KS39qKBjyDzxBv2RhUTy4faUeQMUNeUJ1Ux",
  "key38": "37NGQ5DLtKJTUYqYPPUQtA3sde7hhxGnYVY5MAN2VopQBJM65nCaDNPcyHvm8YerRhQxXT3fpzWacBrpN4setpHT",
  "key39": "3nfGo1ne4Wo4wS3n9PbkibkGrQKsQTL2RyuyBphLkCh7hnMARq983uXZx4SD61GSB9JW4WAobs91pvDGUDkoE2ry",
  "key40": "59zehEARhYdsmHnrNC9aMCiha2Zu3o4TBMkKraHmqsGRCnjgdnAKdsL2dYMRrioz9kJ7HAWhFabGZeNdiT4dJqbW",
  "key41": "TRifvsQvKZEuZwFNoezbbbaLBcGR1E39o95nvbr4kGSxHc5ffKjNs3NfMV2nTFX5hmW3g5ZiAR4YBYpRMmAHco3"
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
