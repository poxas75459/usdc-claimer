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
    "XmUGkyKwUDyAcvzCVrvduwpDa3P8VRMGWHmw5vRv58Z5rR1mEv9qZYhRfPiDoFKLethx9bXmwxHADMzMXRnB7M3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x3AsRQRyaju5Wcp7LY5NtEQM9fgGk3TjchU1qWE3uG1Q88kEwEWU6cv9WMQGkRn6wMwskqcE3nHq9yDY6QnJshh",
  "key1": "2WYnFpaZAWmmzE8AjEejXsbTn8ePeS2rUbtmTk4ByqbmacAT86493oYyHDknN74WPxtHJPfANeTU37n4dp4wFG1C",
  "key2": "4vgfBnsx4nK31sAshSAa9FCYqrmbacMo7W34twG5tfC5GBXaU6jrdvvWRehYEeMPmZJbbWiR8bceRgsBh2VpoipJ",
  "key3": "2VpL9CPYs1j6wxQbt6LSPoUZF4WLaaVGMNUhfgZ2qST2m8LZ71DjQFTHJwVDpUvnVC5an5VXs1sMC4bJBKcGyFrQ",
  "key4": "3UXVgAZozimiRGjv3tvPEshsb7JkrjjMfLGYo8FgqMwsDyMXv4axpPrGCG5s7rnkvt9vkqjMWaXvbXKrDqmyUdRn",
  "key5": "wuU73TBfzh1RvU3JPmJ2Wie5UEDFRAZTjovLYbYgDAinWXpP1t5fK2XXVMNJquT3s14t7kDyLZGLUSBeUkoM8xF",
  "key6": "4f456Nd1caUSNjEZtGH9MQRsQNVvpZep19aecmPAruUQ9kH48MRzL1boTqcxgazxXpe6P5GihoLH7WNZg1q3Kdg",
  "key7": "3ZdwdCfF1QQ73aXAN3Wn5XaRnRpNNpcz9rSokcnHiiRHXEsg3NTTewdpiFkLqFcaAs8c9zmgoip2QzGdCTAygQco",
  "key8": "36j4Dz2PPhML2WChceytQ2CbqsVksH9qvGVDiPd3bx3NZtMP2qssWTscjug1CcvvxFfxZWybvQRJvRYrhT4VAXuz",
  "key9": "5WdbbDU3pH2JxmpVofqRDgUH8zinxTSRgBg6n6S31SzRuDNLyxxUJvWUZFMU9QCF6CiUUczpYJbayEPaCjCusXZv",
  "key10": "4FmrqfCiP8QDvb5QZjXGpfD1GWzfPPbJtQyApfSMumG6pzxrM1gjAieQN4dPPY1TMZczYNjYez6RFa6dEpuRfP3p",
  "key11": "36fz6nCnHzkLeq1deaQ8zwNJRYvpXfJ4TmD5brsXWFeUNWvek7q1xjQk1MXcnro6JP2A1jrPgj551WsmngnFwJji",
  "key12": "48vWSdqEfxXqv6uGN4be9EsbdQZw1HrTeiTQ5D2bVoxb2E5GBaYR7EHTNER6kfdZGbZ7Pb6u96SLCAmN9wGgU9Pw",
  "key13": "4QDgqQTj7axvm3iVKeKAkzQScBFQYN7am3cbMy55SuEzXVciQroEsipWVUBGX2KGFmPcmNTd65XfBJSrBcexeTAt",
  "key14": "5T1TuL3E67bsUMH46iVKhS1XwcZeUKz1z7NaEo96xdRpCb9TdiiLmz5Rc2CSN14ZRMXVAXb7e1pKui5veSZTHzh8",
  "key15": "3phRJUThs4Fpu8LhcxmFDgCcVLgzFQ32TDwbWsyTSzP9pd5MMbn9fer3MQ66vb2CHjirMooTomgkBn2bfKk92vT7",
  "key16": "3V1fdhXQD46y55jV8STyApjQ1JG9QHSMvxeuvoJqEugpfJZPxMtNfcwNckQs6V4WAaSbWHQRHYM5ChGhZ4Cqew6u",
  "key17": "2FUWHwbbvFcrnyFixbXsCaiKEjY2p7NUbTBoxFhc9Ey8s1oCCesaA61oGq4uALmhXgeVvrxcpZ3ZhgzjGVd4M1QL",
  "key18": "H5WSYELiBZq5Ni5AKRrkFnV42GNaTnema8NA8x1fUnRCZuqbjHi2ubiEmi2XHgdxdagh92MFkVuZuSHtkPL3NmA",
  "key19": "5jHK6wsYwPixxfp9dMeXKmzoYXuRz7KWa6J7R9VTJrTZe6L1wqaMkk8ayLBRGSvBNGEZFe6So5kcu4uJGSjmm1b5",
  "key20": "4jQwQXafYK3YbUHFSXSEeT2RBWq3sVZvo35xU1W6nrWwYAoQ29n8mwJ6fNXakLk4jtvohrQGraiYc4JHFnXPKN4y",
  "key21": "3jbkw36AN9hqro2sC8Z59Swgus89T9BRBoyY4FJbskcVbrmspXW2pvrjzaSiBabJcThLX6T4yt3JwjXGYwH37h6S",
  "key22": "5E4JCbnEY2xBkXoqANXAbxBW5CzbLJdkNtd4361jkHeHZwmv4YPW6xWNP1CzvYk3Ffk87YVd82nfh4V5myWyj7Cc",
  "key23": "pU1mZHeQoG8fxAyvKHXxzFt4yBrCb76viQHTcnhP9vW8wqDA8LSvpzXjpYVE1ce2ZeHwiqYyH6jZn8jwpDd4R7E",
  "key24": "3rFC1MoCTVWmHtnZofr96j5YBdrtnxMhDGt4UsAfVmhwZXNC52aZAVDY1HTs1YhGRmsnKvuKFYF7pjLmwdizWxhd",
  "key25": "5XqkDSWPHAscn3YjzAfKCRqiS62Knavyi71zwQrrNdaLKQXfHfH5yeGTpLQH2UMKq8HtU9VCzNEbi3Yv12V9Zy2x",
  "key26": "3Pr4MP66zByCYhvpDLqrY6LBT5EmQw8fSaDaJoStkytn961xq9kSPWBtbxEUbsDG1WzFLgCMgGsaYFyr7bPuewvj",
  "key27": "382srr8W6msWfYf5xRDVnhVEgrUpGSRFw9CMsv1tJuSgzhEsvx4XauDjVnH5W3pju9duQaauJwfR4Lv7X7qgBQcC",
  "key28": "3NZZQx5Pp5B35oZGEDcPbi9x5qJ2viZWJ6C6qWUA57Zp8Eo7Nagn8yN3HXPRShTbVQNSAXKWrSeHXjpcS2PGjxAD",
  "key29": "3u74JDg6HccHQeU4ybgnJwPr1hmgmV6yH6pYWkTR1RGmzbDgrWyR835QDsKAUAtQD7aZhwqV9RR3G59Q9SzBXg15",
  "key30": "3YBHxzqTuB4TmySzbFUdtBhovhtMnQWtK4XYm6urLpT2yDtNZp5F5uQNsRTVUBfPVQmDy3LmJzLbwurd8ySkKWJw",
  "key31": "5WCLSGmC5FDUiygTcPK2ZDUvCSm84rwiUC8GdArsvqL48NBnFtw2NxiJ7QGSARg39SFaZW4AwYkW9zAiBMb2jSsU",
  "key32": "3nUZsjqhiBXX1Tjp3JEcx1m1gY3f2pw2bHF3863jP75zKbvS3KnbjgehNviLQm9M6TwmbgitdzoPuyt6fVC9Mkty",
  "key33": "3QwukQNk79isqdGQ9yMTTURtco9BKAaMNZ7ZdXftnkjFoHaKgRWL8YCWhvz8QoNdEt6qMt5Vx9KJsBzA8JYx5Dhj",
  "key34": "kiL2keHAZSDPD6Gt3BC2iuNnAZWw4NGKnqNAn4QFj3ue9jyVaTLfEZiMoUoSxJscRxNqhVb45KUKS1Wc19zc2jp",
  "key35": "337mQUSnt4JjL63S2XCBnRadYTVMBpzxUwBSea7CQDDVMmAKKfhNPNqwaKcfN1AzukkbEE4CvUB9T21W7yFMv5Gy",
  "key36": "j6UUhiLLzSWNzEbahZgxHE4TQduV7o5Tcfse3YEQfmuJwm7rHqPuonQbR4gR2R2gKRnEGdn96LQygsqZMHsF1hL",
  "key37": "3jEG6JnZar5gHWcrgUmdX79BMTMvXiCZexeV6MnEJQnrG4C5a2tZRwrpHvbhEPnojEHogTr3Put974X8Q4aed18s",
  "key38": "5LDwyE1o2ref8pSWQf3U8ASkCgZKTqkewkg7bDn8xmybeSBPVxiuAARUVSSUSpbZ6Hc5iL9jiAtYXkFnqVKNiUBz",
  "key39": "2h66tybotoeQQKhwUha58155oqRXXG7UD4wAh44ZFEQWZ7YFZqdXhyGvhXSy148eFiiGsum3GbpGtBvN2qnU5qve",
  "key40": "4cniDgKbsef86uozjao6wwfeTRx4BjT2ivuZ5vLUqzdycBhUXRkHuVpDD1y6un3bmgqRwZMFMc1ZBKC9Cpiks2EE",
  "key41": "4Y5er3KFbepuFfURd1HvLqt7FkGXrBkxGoGH3MEEzVa1PPW92eA8oA7bym3FPGHpWJVbujtsQTtEsnRJ3F8hqSPd",
  "key42": "2G3SaKnvCSyVy3Vjfmhw9mmBU5St9hXcXkYSSjtKfo6EvFHZ5MeGxw24H6cetz42fRkaNqSVkpWrxHS7yz9ygj8u",
  "key43": "2hS6pcFPbE3KD8xiRGXVeGmUqsmzFaAmvyqQ8uNaudxTWHCxYTCZx8RabTi9p7Tpj5d4kRUXu32ddreod1NpTypo",
  "key44": "2QBKhkh9HYMnz5kbvzXj6tkGDUdAjqaNHFG7fiSDfHcWYR9Mc1DZ7tdXEDqc6fCKqFtgvhb2Di77swEiQp3Dgxa3",
  "key45": "2CpxGiCwBh6fKu5GtfVcEW9H9XhQL7nrwxukivffU6hBhq6NFeFHyosYH2d5yBCFt8NXsXNcABgxgG8HdCxnkBa2",
  "key46": "4avjCrxUAoAdv8XnpR7Y1jUoJKbVfXk7HkVPuYitxQ2u1bzVRC8JRdtfKzXNFeFgyDpymNfDUHkS6Xuc5oPHa3GX",
  "key47": "3EWvGpewxko96dtNQJPK4AC1F5MyoTVi8PbLXkHYrih3qgYoBMaxmsABpGw9u2PGra26vDPCUQcZbJzdnFatcFLq",
  "key48": "5arQ5bNJdsKuRwF87EkgZBxp8BhGLodnjm1EHFW3smj3ybgFEhCmN2mhr8zCvLXLm5ejyhoXSNRsajmrJGDaZ5VL",
  "key49": "2vt6Dwq6ob3AwKTFbwEC3uiFwd6BVWZCCXWV7xi4mW1TTSQPLfv4wFdb7XCR5vwf7U1DEBmbykCbF8YMFewKqWit"
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
