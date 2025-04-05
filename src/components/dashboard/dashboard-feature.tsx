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
    "5Gu4uzCfquir5rSdekkh9yXH2PoQdSvXALoVLiUDx4gV8pQSAxwPpFTo8rVaVLzHqyXBXsq1YRfVSRFGZupuyevY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ua6dGWsQDj7SzpAGwLpb5pe8JMF69jHdfTvjwqAYtYbXStP7AKtc7Uz4Eq5QRRvGTkrc3gKqSfxwuSXAGibX7Pr",
  "key1": "28gAtWAQQpYNxJ3orQ2MoErWgPqDPK18hmAKvae8DpTSJ3X51yKNm5KQmbhFh3ScQaAkXpN4FwqEEUrHcNjmqh7E",
  "key2": "2dPuu8Lqm5fThKivo3WTedS351dR1SSmusjkvKruifRtrNsVCnmNro5XpW9NyoQMWUYNNNHqCrDc5W1b2NTV79aU",
  "key3": "2FSgREmSG4hQDQHpX6Z5fXLXkSDqHmiPu5wJoeAVd1mJmHmHWCWKDQxBA2PEww5ePq2ZtWmr4FgtQiuTxeaZkoMq",
  "key4": "42k8EES8XarMhwmGGes8pmhjk6Bnv9CMvE15mvRER3zhWGgoQSy8HTGUYPg4U45nu2rdCWDdXx95HBhaof2cXK16",
  "key5": "31K2T1tQuEDr3gXFmiCL2ipFNGBuX2CrkzP32H5cJ6gqw5XNHrZN2DhoxQps8feNwGbsohsgQyKhkxs72W4hYNEe",
  "key6": "Er4ddRghcyycDyhcEgsvR4RNgKHv555QxvWPAjvaiHKsvouWcWqzhQYD4PnCLkrzAjWKJytSLQd1J1vnNrtia7p",
  "key7": "cNGJHdAS3Hhs8Xskv1xh62q64i3jCP6FppNtEkg175N9uE24pBn3DwifgE9Z2fKDi4tG4KDnHrFcC2KzQkFuts8",
  "key8": "UqP4hqtugvGqSkntcg6rrgnns6UAyvFUNf9gqobBYj3P6Bf6MTAiWcz5A82RAgJhqk27tVfejqANr3j9LEDLigK",
  "key9": "zxSa4fpPXjc4zcHx8a9F1dabAFMhFeXRs2bhLmf3gUF9795mfz4qErXhnSsZvCA16G4SJrEz24kT4cjd2zGxaNe",
  "key10": "4eGMFtQofBmXkT4X7pgcXLRPWbtwUtaLioRFVgBc5Uobpg4oaJQsZpuRA27r8B3Gu5eARd83shkfTABuGyRJBdsW",
  "key11": "2T2fmDmbGDAWXWHmnvuiJh9bgxUFpNi9YG4UzUzLRBddkHupvWHSjfvHJSB7K52P4ATx2JoppUZR8oVRbMKRL65K",
  "key12": "3W3XXxXembTqtDGhNmqoZWEvtQHVuTaq2dDn3tyZ92surfsyTGfvVprAHWhewQUzGxmkfbzU1v5S3PaXzcXNFEtr",
  "key13": "JuKVSpQNPNCcFfzupQakyBrq7W49LoHtiUx2VATd6UBmjXbsNf6Wdtw5Qc5gPEFvrUMMVSrvqdZkpvsSEPkpwRQ",
  "key14": "4kGQr8JY2yHXt9ogvXKAjMPNgpdwPKF8JhJHbMysny4mECahtuWmTjBVFHVep613ooNn8p5o9w4L97ZzBPegrdas",
  "key15": "4pP3NPSu9si7zx7i6o3VarR5UbvXup4hQswAnYVN5e6khuQundg3G3z4mhEWJbzQjbvUZdsM1pA7LpZWQ8tmJTc9",
  "key16": "4MKsw96VgLLtD1pmoTp8hruN61Tg9gVZyzmKiFcxFzuAyte2jPHvzvBaiWF6v2qRGGDMBazUj9NtH64S66MdUypr",
  "key17": "5V64o5PHoYMeUjFEYWSjQT3hJHJt5aaHr7hYjQhEvBxTRVF6dBJfHtFQVvkYUQvh5r7wzCwj36woPTivbyt4mNKc",
  "key18": "56tyNBb5qXWmnqNvoL3cGAB6zcArghhHKFVKUyY83mrPF9rsXKLJDbmWggoXUAWyw87r8k7zTpzN8mNkwJ1NryjY",
  "key19": "3Jvh2vbKYbNejQ8JRHJB2LqVRLNQzxQA3dKjVodkF4a5G9X7bDgYrKJ6rhj3VFHKNKaoyBby1Dr4tCp5YUD2WVZF",
  "key20": "39sTxUJKGspHaz4VzNuPEikqCVA7kGhSLFm4UDf2zwa7FeB8RvZTCFe56pehSxjhhiXaNprRKYrqExx9iyNcPqs",
  "key21": "51oBftXrJQKinWGC6ABAjLiNjWMpnwexTG2tRHgfMdTLbqSewrXN4TcTH6imC6QaMR5X6rNCcGsgdTP4pea3M6Qu",
  "key22": "4pRMDj9hQWv4BKsGrBA4KanrUuptzzUw1VDjtDhSkysBLqb7nQsGrHmJghVHH6PktbYEHzYiwyM7yrWmBnqSRcz3",
  "key23": "2SRjwr6zcw8eeQXUhTQzHZmiM8Gxi4mn6ivxFHyQ3N3A1nKkJpW9aKPhxWtE8V6QXzvPpCtcWWNu1pKD9BgpfES6",
  "key24": "26Hz64qzHFq6JkQrY1gSx98JRQCrGQT97QvpvyYovnFiYCj4QNwjyrmo7Y2Xj6aoSP2WCQqsRqDtwcmxLjmzZK3U",
  "key25": "5scFZZ4uUnKmD6Z8WwReT3tWFdwnhayWNSbnmYkvtReaDgwEr7Ax82Q8HPce14n336k9maXUm6LHvvAxKXhZ1cSX",
  "key26": "4MDxaRmVtSzPtwSyziQcqVbWx36p2t6hbrQtxPgvh8bjCQVA9edbkNKMX1GVa8W9dYku6N5Gd89in4LEj9JFeKNu",
  "key27": "8gcfsegEqwtQSAgGRtnkGP71VcxaNFKCqt7YTQGTo4H4dHoSdYQtu6hTGBaWFen2Hw7erjp68SjevsgGEyPTqS6",
  "key28": "RjSurnqCuRmZVTa5HBadsPBzvJCS4S3GTeKmqVAVoBYRd5kUZuoPAZmPBxkUdJmbeYgYUSQzTtLn9d1tciUMycS",
  "key29": "CpbhcpK1BQTE5SqeUDmi2yEPHM9FPMUutuu8CJNCVmti6eNZMZzQnp13T4diMcRmviFTS5mDyvsF9BGg7KnpLz2",
  "key30": "5MHG1fN44pmfKEQ7ZRV8WPqYNG4sqNvniEveqMzxnpXQrFoHFu9zGQKz3dofx3nNrNDfxpKcD8ZWSjCWYCwCG8Em",
  "key31": "2u2jYZMxAp1g28cmdNG7jCkYSbtjf3M3AtYw1XfWtmTcyEbfruff54AMbsXDpuMXhCHTRnDGAwg4Kc6V4z6XjgDC",
  "key32": "42XojnsWgbMKYvdfhWN8qroUDGS8nQRoysE7GqmPcpawAptzU3GxaMwvEQsVdKbZQQhv8cjwU5CoYTN4HdGezwrc",
  "key33": "yJhVzN63izyvys47i9PmR2k4mVongt4VnEXcimf6dGWsGAgS82tMHCi1yi4VRELy12V67KEMxDmq5guS9UVX1o9",
  "key34": "21adsjiDjNtP1VzhsJEBwaUYkamTrZVxeGBBpKsNTorg5XucKbH3vDN9WU7kd6Gxc9a2rWfLka35ERXMdVPu7ZDo",
  "key35": "36TD1cRMWiyaedAe41rN6vRWUWrotwf7HgWteaNgTv738Rx7R8D5Uf9ndaQP228Bk15QAbZxu6qoN57v8bnLacSm",
  "key36": "5W7t7YURC6CzXdVyHR49a3JRbbo318DoE4P9YKnwFbCHpazPxdVjh43rzSuwsdjnb9MwZiohoMumBQ4taB4oMVmd",
  "key37": "3cKqHo6CBkdfyNbSrWpZu1nidMt3LYyeV8mBGxp52Kd99Ltpo1pkjnh4sbtXFogGB8sE7AnEvqEViy9X35rseaRC",
  "key38": "4dAe15KwFYFtcfk6Xku15Wt1AZBTKRWaWJvu8eBy6sz5V7Feunm5NxqxQZESu6iz3q7S5sC4FnivsRkCLRrpzRcK",
  "key39": "66FMZDQ9kvPEz4bwLKeLPXQRqDgpZJBh99wWF4MHUcCn3nuAHUYF4xziRjoaxPZ2Rmo2VesKZp3JoPNiGTpHRCP",
  "key40": "3hbR7YK3cPKXPi9ophypvLN4S7UWnWgM7jZGMsvybrLdCtkS8ZKMvYP1RgjH2t5YK6G7AaBbYsqck7Vq92BzMmAD",
  "key41": "RVjd1CcnTGo1rMf2mmzAehWfzW5JWCEUrkMsgVwjZFQHFHPs75Z8zPnnxYvHruotdBfyJoNFKVYCKb6fQMcwZTF",
  "key42": "2RCj6ccxR8JfCAXQz1CbygfhQ4FFEx4xnHmsG3vvH6CjADNsDsR8vNDRbgL6Cdm3YBpv9FDkHRt5D3G1stDrbFXA"
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
