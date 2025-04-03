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
    "4ie8xyad3B7iigVFZhExwNmC4RvuQV8ESKwZHQN3WghR39K2Bz4jcCFQGQswaog154qsi8W388DUGwZeY41CCkLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rJX8whEvJhgLZSQ257F6Vnxr7WMqXYeXzD71RjUxY7tvb11HEC2Lhs31hmQCoAYrcLwCZ43eLowmcSWenmoaDHb",
  "key1": "SrVuNLETLNiFtADUYz6rtvx6kSUeE8Xb6niSJ5zKwf3DZy5NRm6p173ahZvw2LKKmjtYDwAi1uhStu8AdSfvuGZ",
  "key2": "2RjQbtH2oUipXvPWdHNwCSM6vtED1R9riW6v3MLPjkAi2dNrF21Vj3XBsXU4Ue6xjXf13rGgAytHvypc6keiFW2v",
  "key3": "2nsSsieo55Wzps3fN928SczQSfxjsrvNzQEgiApa6pu4qV2D3tEVaXhjYkRmv4KDtSnqMM5beSoXcLBn67mWAnkQ",
  "key4": "28D3Ss5uq1GdHpWf55tRn5YDexVcp9r8B3u3BvW6TKfnTcgPcy4r78G6RoVbcPpATrU6dyBKGdumCUHyjFWnHUoe",
  "key5": "3AvEqfwMQYMxPg5dzYooX8sXMh9wEKcVt1Ns2BnwwMN64YchKcphrrx9D9fznF8UY1dmZhbiGUkksSw8Uqe8zCyh",
  "key6": "4wUTtFzik3fBVeW539nAsTTGyUsVvQUV2Q4xWVeKWFZSYAVQvpp8ib1m765iwGY4rjV9JAdfdihnji85MswU5Tyw",
  "key7": "4NJvg6NB66xNJW5nMaZ6rS7jVJs9CmE7hdazr5CgJDwQfx4bStSjPxr3QoXAP34KZr8kdRkAV1Qya8ytKzdKNXx1",
  "key8": "3yPyHfvrSFibbzrMXg4krrMPyEAw4kZYZRBKDqVsTdxA2nVpeMKfHU4dCZjx1Ao2YZgeTQTjyK3UgZjWzPje4rEr",
  "key9": "3RAbk2GbbaSqpp8wgGSir3YPjdADRcBPHHGqftf6Zoqy5HSkiuonJRUKRrnbXhPiUZrfzKtNCXEG9UDnt4SAv1NM",
  "key10": "61B411htSpp2UfvNCaCE2avCrwxpmbirxP1djdtZh1XoCbwcvzz4WZW2bsYxEyQogpxunf2J1JXz25owiTAS1H3H",
  "key11": "3qjHps9UDTbdqNpkB1GHFN5q3obtdJSvxTQVhVDdEDExeXWutzUxrNpwTkegrj3gjNAqk6GPp4u3ZxANtkeAK6zH",
  "key12": "5dApFynC64szf43MNJ2pKjEEAXYp755oJZD4R2Aznbqk3Md5FU6WsRgRFLdnCBW2X5QxHxSSUytmhC5iqAH7nU4o",
  "key13": "5cEbDA9e6gx7atp2hXFd1J7y737W4exat2hmyXrq5Rmj3Nuhqgacd9nB4vqsNiXdCbnXBtub9SNqxqV8dopkUZc2",
  "key14": "5rKWx5HkxysBL4Uyrmw7mxqgL6Rgqd2yu8UMkPJPwvkCMnuU7my1CELf4vLqLZYzNghNLrkn1ixXpmvwNbbTo5XE",
  "key15": "4BY6hGqr6WT7Q2rivnW9byY7scBAkpqU4c1LMgKyRXHQ1XgfMKWwtbGeWkz7eXk36VBC5YAcb1mGcyeWmiYZEGBq",
  "key16": "2nkfD1oUGZfFosWJrBeWMZM7ajM2VZd2dPgZGfgQCLFPEin3NWc55kSiGYrSZ8C17pmsqY7vMQDA3f7QDjeLuLQo",
  "key17": "4h2pdhbUPeA1MkmYxiVbHBHDbFvDKh2FKHPXEKYEtiZ2fEktUwpYEtpicmCY3ewm93Ai6hydgWcF4WHMYxgMBQta",
  "key18": "3zeGAnybYhCm6Pcz3mKfeGP7DL9PWcHV33EYdRst3UrbhrsmaGrSCh8CgmZg6HNgjmLTrdcrmTiTMowZ3xsf98MT",
  "key19": "jNjPmEKgJPPWJ3oaCiyhcLNrG9FPWhHG3tYsxSjFSKqAWZg8qDBjhbL5VL4FAWrWhjH5w9P5HHrk7k3Y8WZ1wHo",
  "key20": "4b6gWH7zen8kmjEALbg9sHBGiH8aUDNMZiBfAME11fqDaoVzi8et98DNxEXL5xzomYNix2bUQ7XW6HnUgpok6kDK",
  "key21": "2x5g8WgTbhcE2ayAG2Sj9zvC2s94WuD8HDyQ3diF4CvVR2n3WicLG1zTbdLQJS3TeKXCVrXGnXktXDxMcwLM3V9L",
  "key22": "5MhtWqjap6xsfBPukDEeARxoVSzW5BkrPxYFj2eXv7o1d8ttuVwL8TQh37LNfJgDw4ZdMrkxNANcDuxLq8LVTWfR",
  "key23": "4RzREg693PCGUTBmNk62usFoEMDwF1kddwc7JWBVU5Psfds7xeQq3LW4gS38Ss2jLsEfeP9SWEo8n1Z2fZtvh8WK",
  "key24": "4SugSD9L7zU1muAJAPJVb3BDv3kkuePmRNpLQDY2sdAHQsHxDsHR7i1DhMGuDhYet5Y8Qc9fHom1TDVkyD2hHKzy",
  "key25": "4wGAicob99kbQaB2qrMqp8aEjvwJYVxtgdLfpxnhHKd9tMHNF5d6mEDvVTswbYoZApnmH8cPFt35Lj5EgQjBFcam",
  "key26": "5aTveHD7BZQ4cgoyPqH962LT68meE6js9Yrru2zgRcyfdR9zTgr1VEwPetJiXsJBfM6uCoCbCW9Q9MBWvrBB61fh",
  "key27": "3MvpG9tVqojdEKrj2LXMVHa455TXJhNDHh2UMXnSLUHU2d5QSxtqCQafkcP3oaSpgiNk79Zo6NCfG9CywDjCu2WF",
  "key28": "3eYN1Hm2cr5KKCZ1jvT34dmtYzeX18oXRm7LQfPAnJANZ1CizHj525CDZuRkQZowCvdpRtgLim3gHfsNhR6Sz93H",
  "key29": "4QeeWeMuNSYP6mkLHRBiYdN3kag3wJce2BzsjqkgL7WCDe38kp22XFghZAbR3jyPawuYWdnuUctRiTSyAhU4iFCQ",
  "key30": "4BEngkgLs65U31t5QQQjydccDw8y98j7UVCdSUbwtwfSALmhDkJJDDZtW2mNC8Bcaa6EVJowE8C9z3PiehS6Nrc3",
  "key31": "oiuoRuDQmHByenJbceU1tpeC5bw6z7znQPVFNruCo2MXmTvNMj9pjrjWkpQuZqvj6bvK7k9UrPXnLKRRx1Qmuaq",
  "key32": "4MzPq1w5GsyRo7xWsZ5HGsEnUHJJCbkBNZ39oA4Z2PEak4rJAtLGitbfenW2AGZ2TFRQ2MSR98ZAW7DstQL66FVx",
  "key33": "2QLxgGffSdq9jSZRtDH78GTd9Q4UJ3ruVJWBQ4akepkZ4gErL6M3Uq8RXcpz45uCcXQd4NaNYHiVdTYXRk6Kns1C",
  "key34": "4szM5aN6yCDr9kpTYt2ZgsoQojRwE2gTtBkKcJomnKRWDD36BFusocaWzHqYM5gnBZ4sTSeBELRP1K2pzbWw8Dvq",
  "key35": "2nyEm8LdnNPjo9GB1FhccUXigNAeAfSDgAKAC168mynD9sn3y64tV4qVLEeBfwDjQWJaKMsmBuEQ6hw57YG4dDTP",
  "key36": "5Sm9T7WG6svH8NKvEh2tQN6tr4UqRvYW9U2j9Mq73iL7AyiRv4uZPHXbmYiQckNS3n199gUb3xLJrv527ahRhmZj",
  "key37": "2Pf9BtQMwWtYREYStfhSVn7e4VvUjETh7AR6qvQitxoQA7VymPPcXzFkEqMbWnSXqkf79PMZXpK1vmp2GzRHVXGK",
  "key38": "32rjooLHaPhxEi1W3Gs52MJxEddFBLjgqKKkgcJJgyVWrcWkZA4XrqMx1boeJPHJUmkiBnxeE6eE32VjniZdqyyb",
  "key39": "62gkt758oeTXsTYgDphgxy63RqJyaCHyeiLHjHUhot9sfS7S5poGUmZucoa8J7XuW3WS6rzKkPfS4d3uSkzMPijw",
  "key40": "vkhtuhV8rDDdz92UxcUUMNNYntuKnKrLcLGu12mWw7wfc97TCYUdeqcEhHuk5bQwvXFtJ3ra53Zs9zGSdnFLBPE",
  "key41": "67aMkcmfPvHQcTJy4SQCmcMbPjdjszFySShj3sd8t6hgzQFi5YSBtcEFiRuQeS8iMiU3faA4y3H4pv4TbSZUKr6L",
  "key42": "3LjZ8LQfhoCg5DfnoqHPRpWFs8fyCnWGfC9Q18z9u3C4MG33uf3NoGuAjoAAtz4G8cVY2zTojq9rBL3fFortFvyN",
  "key43": "2oaSBKEdfaqRaJ9E2ZPEfpezqejYBv9Kuxdhmnm7K9JebPRPvXQfpKBsd5q1EpJyu5ndFYTH6yfscz42LRjKzTsn",
  "key44": "4AaHcimXjN15aAa9NV3KCNMG1XYuJ1PJ1gueN3xc7KCC6cfFKDjRiJqx5UhYaA2HpJLvJTTa3a6s7PZ5oZ37az18",
  "key45": "2ug3VnYr8FumrxCjuhPCdTW4szVrwx18NqUDidF49QzHw5DhzJAL8qbGduaGTuUbv4sCfotneeUSt6r3cYLtcMEP"
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
