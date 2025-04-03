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
    "4DnUkrfY8DV18uenQHPJitNnukhvvV4KBovXmJ4zP3H8jYDhrPL863xPK542ZKiVzJFVgmT3orJ9syeesunPd2F5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JYv3apwwPiyXkEm1UwYw48ADYz7ZLBRd62jfYFnPirwJ3KtijvxSFwk5pTyduiqDBmUYaXDnFESeumNRKPSN8dy",
  "key1": "513n29BqD8i6jYwYWHU6pEkjyWyGQYWSmL863aH6YxMmkJHQjnHorZwBLQPfotNMtWWyRWWMtw8M2hryojL1Ghdx",
  "key2": "4gQ5ZvVQPf6p5GrDPuWAxNGPgUsriRXqdusoZwFQ4gZMGC6y9wJUKKGMjn35QMbHR9MzUzuZdFftMfACwCmgRpGT",
  "key3": "D6Z37vwCpQMA6ztaxKMqKPDb7qrVirvbi66V7BgVSP7xc4xFco3AFaTNkZ5p8bNofzD4hoBmXGugidgepj8xzCv",
  "key4": "2K4wTPVZxE32QaxD2b3UdvK5jVjv4a8iihBSm7Kp1f8ztbHxbxPdi539CfxK5eNQ39Z1cAovFGfUrLN9yyn3J7AC",
  "key5": "5zXp2zPq8bXJDd12HUC6UJNwhdgYvU9j7Z35vBwvSYJ7ynNokERMfXrREUeP2kaqvxXa9vPPH3GFi8FNeZZq1mFf",
  "key6": "2gK7dZagzrFUA9ozYoazU3JmzhV3cC3C4G8V3mz9GtRijufJw9vZFCmjAUiu8PrfYumLhxYKuNKfnUgzj5yXdmmK",
  "key7": "4iBu93xRCToLhm5F8xzxCQ8h9Ho5dwVzP8mfedk3F7PfS2zcdxk65UxuyCxkgQ9LnjCJ4QkqRXyiZGErRyHVHBJe",
  "key8": "5twxm4dhvnqbpkRmEWXLZHRgGZWXVj1qgcPnMKhdhz3qvZuCtxFNWomUP85spzkFnSamQZUXUYiATS8cvsb6MLZy",
  "key9": "5NofVAdtH6em46YiApXKUEpLiihYqhUe7XwPs5azQSf9FqnWc8LTVxoCBZfWzV14RUb2mp5pzfWWGZon52S8rcb6",
  "key10": "5U7MDLAEFLqXzH7CvrCPBGY8fVuqyfAHvHHgSvdfseZaKBDp7DLrm3bX9yiykLxWhxZMFTekMnNVbJpb3vQwsYr3",
  "key11": "5G9HUAaBAZqS35XKx2GeytxW2YAH7KMqQKmdXazeywB2JaKWrAEcoy59qjU7H4GcocRq4yALxetm3TB59x4oGov3",
  "key12": "UYo9mzG8NgjcuhSsvkbforWnScUaM1GkD2zK8QFKv8zPrfYDonJ52zdun1mtGta1aoxuvdcBDY9GNDiNFJtFypS",
  "key13": "g1Gaf97GMQnbUwvHUAc1EZmPjh3CrpT554d1pMsmJGQi8Cfesigp89bpusDLVNRVeN9n1pz3n2pi3JpzopCpgUW",
  "key14": "y5tr9fgBmK1ckfdZnWCX7eY9y6SV6Xjs9D6djkcfva6PZ92PJRjByidDvwKpYdDBpbZiSggEPJsDNLCBRb2Zpx8",
  "key15": "4Sae6PZkScWzmsbHkNFSguxkYchnAZpfmGx6pYehGBJrEacdADXewZoUcgqiDneLyJdR9tqZgsa6vFNVHTP3za3N",
  "key16": "3VyVQwTrbF1pbdGnbs82u27aiYwFZ1dV7gdT7yF5AcvSvdWzaErbv5XXpCvAjF8z4oPifQTjjTUNWFndKQ9MQjwY",
  "key17": "5uLtLqxKBriK5RrMePg851ukfs88vho5ea7u5X4q8gfGB2R2TVRL1RksTxGaoD46R6gU9dmqxb3Ss65uZEJaYdoi",
  "key18": "2SezHNj7mukWncyGx4wZpAaEHoRfuUeevkJLn4ZBCaypuD6c3HUxuBzpXAE6KKMyyaBQF8zJtJDwGrppYPEtHxqe",
  "key19": "4HAvoKfnB1TeJMU2nXrMVWMp76daWxQRmc9P4cvtUYfrZNxeu17vivgWkVC8MvtGBp1oYCQ72ZvadMpCA1Y2xG7B",
  "key20": "2Qma5cv9Hq8mJDwdg2KQXQxd5n5MqQMiZ6jJu6JzYNHwSVSu6EkEqMr6Aoxr9CLTUP2YsVYTBZrgTuamb1XGjnkv",
  "key21": "48xCHhy9zczfHEo29qEv6hxMoDGMhahpsVhP3ECwopMyxDmKygcm851UC1wLACzjGUsaE3QybTiMF7QxLp7WrUZ4",
  "key22": "2MKUm5BYsPg3rVtCLNRYFECJ2o9uAFvy7JxPHBCPu63VZ5nKU63JX5twn9gbRmeexrcMuo8QLTpvt5MMF8WjJQqE",
  "key23": "33ruD191t6vogvpD82dikrQgu2JqsMP6w6U6S1ivqM3a64YJHrfZEHeckVh5HLcFB5EpX19B2BNQtBbSF8kjdWSx",
  "key24": "3kgftRsBmMgsjgfJwLWsf6LKVJweSTKJAhJFj3RPJaT4QV3YAygnBjUrWY1h9a2gsELtNgDdKdhNSjPD3qxRXJgq",
  "key25": "3rnmWENZZtuo5yNotSoMv5p7HqtdHczKtWawLKhSSFJxypEYWJAJz8oNd2gfHoXwaFJUhf4tKGXVA9xhhxHVB55G",
  "key26": "2YFadTZFDykGbigQuy83kYpk2pgNZPe6MXieEQxUpkjQFTUM5qTNuePLUup6w8ytS18qDhGZKuKjVU8EW8ao1t96",
  "key27": "5voGHkhQGn3rc6RC82TCepeBYe1Ug4JAEL7Truy6UpPM24H5jjmnpW14TaCiyHKGMU4Kfx3GnKFFb3x38D3UQGWM",
  "key28": "3CNQtb29DvjkPck1yK1LqmoGT1YfGK7Goxiw9V8KqV49GtQSAHjibzfw69MK5aiettJPyB4nPqifrN4h77wcedDp",
  "key29": "3ykp7LUpykB18f5tpZTcCoxkRbcFCJANjhhcjJES3Po9Lpj1bm75kRajpnbpaVpX3bchqYSFP1TxTQoZqiLGZ3Dw",
  "key30": "37tqwS621cJm316sy9vkgCjeeBMu327icRNypYmuvgmUpcAnsPzi2prCqtujkG18cWMsDogRDzdxH3yeShWBPAFZ",
  "key31": "5Fo2KNvsvzqrvfLVPbXdRPrUZAowmnFDYtpt3Lg1wTg5pCVySMdRvm6SW9Qd6qrzzLmw9Lfg7ypaDLpxpTChfG2u",
  "key32": "4FT1Vqz4RVgjn36ByJgYzC4ScdzxHNs5F8Br7yBvsY3bVD5z2MtsJDdr8tKAzSXHs1Yy7NkTLkFWrWYmrHTtDQ35",
  "key33": "1cZDHg54roRuJZUfyhmCEN8VTaEQrwYz4k8xQPfr5yBzY65jwwvevZFhY92oTrJajMmxn5Kxex5PkweXDpZnNZk",
  "key34": "36xuhpH9azPMUygiTURUC8hyPM4X3joYgHwh2NksBAHT76ipS1TVzGHtfrZCf4X4hdqReEQdu7gWMeLBjrqk5ibv",
  "key35": "5GTVUH7FJdfW1trrYBqw6SDM5kU8FKiTcVdQLutrX3pHuFrJ23ADZDxepmqzY6tr7J5U1NJwrURZVhS5MZBnwTfi",
  "key36": "4qkY1QoTQBHrJMUNhoeR3hib9X7LJbYxUD9gzh1YT3HALYfjcUP2Bf4jQwYLbfF6f7UBRWNQCDTrrXejmMn99JPo",
  "key37": "YrcXf8VWAxPwqvwPxqNaPGsyQjSuMGsdjcnJy99okHkoh34KQaxHqE9tYGdL9qCiUwzMd9sqj583jZzSWHY46ZA",
  "key38": "7DNQ9pitP2geb77D2QHsNfPK1G61REFMGWJtpbETVht5ZJ51JehFKs8dnYHd2B4qEw7C6N1oyDJjYhqaznVcow7",
  "key39": "595ZA5rVizChu5kA3Q9mZSw7gaE7QN33ypgqPYw32mcpvw1AAPVwKomAThbuLoWF9MdEuci4VgTT1XmP2q9RNLvm",
  "key40": "51Pqi88nzhpAkb9JG7mBTPGG1X6RaRyWtdCUapUUCdMTxQvXkPq95xoLAzBJo5n8PvATEceFLfYHcG6HWc1ZYpnB",
  "key41": "5EnJYSZ5gA4nePZPppJoTXcPJTeyXvm2anQrauZ1QEFAcabEfGPWzeMuUt7ar7JFZMnSbDwNEx4hMoC47jCacFE7",
  "key42": "2KjtdQN4MNnsAqm1njMYCPuDvY1R7MNoNNRuZLb51wAKeKJusKmNe1PpjvzPHqpBJy2yJ1Ur6Us2oRwx1gpUUK8E",
  "key43": "32KWrhALpmX9jNKcwUVhQK4gzLfQqmq8oFmbSEN51ASQSvQRY74GuYRFBU4iGkhFjbHJr2PED7hMsZCap2aTQA8h",
  "key44": "3VfhEj1BegRdwpPtEcGYrFjYg5krXqBmaQykcWg64dXHCzFVxsWkEUbswPfAxaZVBkL6rqC9ZDmqxUXhhx8nw9CH",
  "key45": "5MQriWaTCY65fXJYEZvWBrCUTzJjQ1pWS1MfrNuorS61c8s5BYfE6KZmij5n6eB1fhFFjfe6FRSuoXuC7PGxmBwG"
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
