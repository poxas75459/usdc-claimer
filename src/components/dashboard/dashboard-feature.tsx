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
    "3SUbchW4G1pKbjgBYFaaKAunDZz2MoaJsX2fuXMPmyuRc7BvfMRmM9ZRaQ9Pegg4nRUbveZS3WMnnfXvMLyuQvfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64w6MfDzC24gpSiaiw5z6MEmCvKteJ3ouSHJfXbMynhpZQJzL7MCbEX2TS9NPKo53K3L5aEhNmmm63RAWRF6tc7G",
  "key1": "jz3g9MxK2qHSNPCEYn96p81Bq45Bh473u1yCdseDVWN9vSDp28wJdwgupb8eLGjdm1V6fsWE58tJd75pHVEUSP6",
  "key2": "Zw4NR7jHeb7pW12TfJbYuN4bJSjLXQKo1t379F1wvvCyKUuwRN6W2yrEDaNXgnM8RaHQBsdhV17jLb7sonuJ8H7",
  "key3": "3oPDPM14eKMwp6zF4gN1mKzMhZJMhppaNMQ11TXH3WrHQv3RdE15A7ARPomyUtyTYKQWFBUDJXTN5VRyD5ratptr",
  "key4": "3KH3RHND6dVXAMXNiH8hW6WfKmvBmPMPTZVDLPHPS1pnxqSWsgM5N8soESYPdcQjUzkgWmPwwSVrW1wmbLdhhsgq",
  "key5": "4jxyPV79UbyARJsGRbWguycdiZSWowhmdQp8WupmgY4qSiE9wMjpc18mSRxpUvnwUwMGnj1YtTHMWdtqyCbbT2ef",
  "key6": "Kktm2i1eSFArrbhfi4EowpKDjMnQgdQJc8aYSLhyK94eGFrWPFZ1MMiJUcgE2tiXv7sC5nBaBA4PbQ6RaeJcLzB",
  "key7": "2B7xGz7J6kt5LAvqrEaY9w4EYYaDcM4VqNyKPY2CeKwtT2YQXFNksVnLvPMKUP3JPEK2LiMhxjJX9VfmzwgiCLuN",
  "key8": "wR9g6RGTvKmhwZsPZT24Vhc59TTmkKCrioD6WNNiE66BeXj3bs3WmvQ8MfTuBp14ewL3hE7zntmvsrkqyYVg2kJ",
  "key9": "2Nw4KJz1wvFSEbU7aQGfCT4Bd2taZyiECCtudB5osqJUbT1aoeYRbwkfSv9mdT2ZZCrZ7edeGWTEueuX3Nzwt9Ab",
  "key10": "4xbELSPBwM8SnZZ8Q7q5wkzHPht1MEch1wtA5YFNRWasgggkxYH8U6vXC23eLGkMSyCoPYPhMg94xmCTDf5AVAXV",
  "key11": "4VBu5d9F4nk5frgw6ivhYVJNYhQMzTqCZXEwSesuBcXYKwe51DRAFmJwWCnQRUu3ePWRbAsjNd2i9xUXuLnTjwAB",
  "key12": "YPPCk4MDwpevzsqnVxBb4t69ELvZE9AnoNpmr7atGmfuPXtYWDGqeL7KDQMRrBnwcBVDYNTa44uMruTycLS4zNG",
  "key13": "2zWA4wGzFqNhyxVzkE7CQ8bdjvuT41N2uRNMtVsE6u9RUyXdJ6uBGg22pNTCzNaXSmY4Jd2UVmLse3sFXqY6nq4k",
  "key14": "4qnKQAfyrXDiHd7FgYNMpx5HPgSuzLWmFwHrJHAnV8erHSRF1TRfyP94FWW21mbmDdZ6mJXAaWtYj3JYpakdyfGz",
  "key15": "2WRKhMaUzN44mNHS1efZfabFEhd3K59MtjPdBgdarbPnmcuLf8NjGe9CjXcVBp3wimaBBRGYXYi8r3XVQoeivr4L",
  "key16": "2ovVPqA6MnTtBUsUf3sYUAaJgJzgU4UJY7C49HADBgTBHg5fYh7u6bQCuHNKfMweayT4oLHSB2czvqBd4N7N66or",
  "key17": "5yE1fQRjv66upZAzqnvHAay588xJZ7L1GhrKGENnocPieSdZp3q6qAFsFfP3L8G1qyxafUFuf8nxH3Qov5xsf8qx",
  "key18": "3SZUkVP5SKvWYui47fSBu5bwYCfSXJYfq5gCYVNoSSiNpEUxTZEoXPvrGWPBaey7Tcpfds7zg8NKvWUcwkLePKt7",
  "key19": "34PLLVo2VxvPE4VTA2tTS7MqhSkFXitKi68PAbrJKpdf4Yc7p8DsUwWPewgRB7GEwCKpoj4RW1sdasS8E3FEXXC3",
  "key20": "2YA1XNWJ3TFpCVygZuBsCJvtZmpYy767YCUrRXyddaTPbQAQc7ascZHArz83xiiVf5ujRAmoc3fBRnwHLBUMTFcq",
  "key21": "3XxZWB8NogrJr1fTesF4vbewrnUybK6sBUMkhrMhJZuPmAjQ9aSNELhWYZukg7gqeGbSZYaXBjVi8dwhZqfhzozF",
  "key22": "FSdfabAQJ3yfK1W3JQNH4xjQUvVhpgRSBtmXCEHqZZUbnZx2E7vF1DWnjRGWQGy1xoFENj7YyrCBop3PZ3Qkq2J",
  "key23": "KB5CRCeAHCZaw1eJxvoHW6TRgn363D29ZmCqXUvW6iVUmsg35JuE6sVekhvzDrBtJL7BnTubtrNm9u8zAmdSU3V",
  "key24": "3c1XnA11LP41gML3ufnhVhDYYEvRXySnFo9dedar3nXcorxyyh74ZdX6B2eXHUbvQyEWNWUdfVrFQ5so9J7eCqJK",
  "key25": "5ep1UDde33RvPRaSt7ZMqqZ4tVHKQexMtkbaEYq9tLwJV8xsE4cACXw8xjsxqjnBRWRctsv2cghk3eaU3WpAR3Cv",
  "key26": "3uFzudSXEwhxcTgWhwGZgnugkVV9iaMhSuUu5Djcj9DamSYdtmvYncMdwxCoFniavdFxryUGGbrAD9iX3RckUrxe",
  "key27": "5J2Te9sS15ngpUYA2oNyMd4xQoXtwtYPpA9LvZpYpWgZABAr7XSTPXXKQU653hPoioadY29H5nZusbMc3TQvKW5Q",
  "key28": "RwnTBR2q1mig7n9t6AvUxDeocv37unR6JcMazZPuxPJCzRtML55NQKch39akm7pnpusSncMVyeAjiHGfPCAbnzf",
  "key29": "2uXReNMwxRSiMFrxaAkBCcQr7Trmff5gNnwFyFuwn6qtcPyP2JLbjapvedbUfJUKtmwSuZypNd7YuEfT3KRxy3D7",
  "key30": "3jWAVebQcGcW9BPgUwRYNoi3vPDySYp1PrGEz1VzZdNv9hBrtZEZ9F9bqvorG1xbmSqfyKruFzLrT2CiMfT8pmgy",
  "key31": "YW5y4CXzXJJ7mdGwmkU9xDtJZViHwknQcSHo9zdPc3Mgf5Es3jdxWNVKbY1UCpgAFLeuFddPFaTvMF8nA61jY8d",
  "key32": "5gadaGNY4KrdrCPpaF9yJGh8YxzAbWRS7D5YPuVYXQmov4GHgYwmLSpK92a9SFPmtpq82KzKbjMUXr9J5wjmbGdX",
  "key33": "zZKRouZv3rUbt2HnYi455hdH4JmCN3VtuA6uK7H5opqoSW29CtYBffwSQoozycJ6RoC5LWXPFQsPEemSTS4KCEb",
  "key34": "41RwP4yRgnjbS87FFtt4Umrq96J67EY8yYzEzqTW71rJ28K3cTxCfBN1sPLrmPNH6EeJn41yBeN9zzeJy5uWM8aa",
  "key35": "5FJPVraHNsJpyTNc37cgS15kRTP5gmxT4N4jzGH4LLgroJZZWfw8ei3oVnVegAdwv1V1DRjD3dhpy6hEaw79EtdF",
  "key36": "4EE1EvXu5CiV96HarAZytbLMrhDd5uLR8uzJRWLd3jswcnYer9wZqxtEYJULYk6PzQGuADBdrzVQe9Af73NYnVMe",
  "key37": "5VKf7SF6xjCsu7nRBWSCgo7z88h286PTriHWsLMjmJkTFXWh6QgyKnXbsrQSQjnq6XbGzwV2nykbRcf8CkzgZDCK",
  "key38": "5jNMqaY7t2NWeUzUux9RSQKFKGyuXgc4ebbkuncwM3Qxq4QVNhRAosQCiqSrH7TqUJMfXEw41uAXM9gGyuDVQN9L",
  "key39": "2J6mSPJfqjNCW8r8pbL9HbCrBQpFf4bBJfiTdsiTRSTBVS67Z5K5VyNFBCoQMEj2yY7BJtKp7PsrXRnDrsTTQzbn",
  "key40": "DAp7yzSpZ699Z8jiJBrNXStEZocd7PD9m29qeArQcUyzPdhHka9ki48ZUT5zi8ryfZa6aBUDdnzrP2xYEzeBiZY",
  "key41": "55BYbkDkLqsupmb5XyV2AF8A224zx3SKodKs43DAVeNURz2YQs8wvCKuvGw6CfGhQDprjHoyczrX4k28GeEyBNLJ",
  "key42": "37HZpg2ep4DioAReoJDyb9ppKMj3tkpVqcWQRwQGXbeW9Fhry14QMz4KULQ4roKt4A5t5sxCMdvRntwPHuGAbn9J",
  "key43": "5t5GKHkS1ZcCvU6MuLcptR98rfT68WiXscoMKRxmnax2a8oB84JWgDBktruseC1zh1dDxboMNFbv2eEefSYrGNSY",
  "key44": "53KBSx74bFoJpADpdCaCYSGiWDV8FGKqB8gu9y4K284xMcx4XSPWPLfYKMfd6H22KwzFG2S4CMEU4eBgW1B2bsmp",
  "key45": "3hks12g32KSXG3wEo8R24TAWqwLjxdqpgtMrkes3G61DDJxeQNd1GWPeigxABwZwDNrJ19wXdqxZ7Hira1FFjDdt",
  "key46": "2kyPmDkKaNb5dfxvBjJjNbRVGYdUWA7Aa5oDrGvcAiNvwncyE1Riuofxf8Z5FQ5F4M4hN9YftX9adm2zPLJtzhRv",
  "key47": "2V8V1yuq7vay9h38YBtCReNnGPmjwWLsSxrQ6h3CunfJSghW6cyUxpZUJydotHnxiyCubLYmaCVyAobGMY53k7fu",
  "key48": "3p4Z3xxGMDEKSqKY5CNJBNU78vogrFPzWtBxS6CKGuAceEqWqFMjYnTfDiDfwtzsNBsg3iRpcPYgoN9AkwvCJZpz",
  "key49": "5Ws6qGCe6y5TEYqbaBic23KBFakrT65aFbDUZ9nveFXiQSXM4Ud24x2vN4iRsbhQLfUrWTopVmMwMabXU6ybKZB7"
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
