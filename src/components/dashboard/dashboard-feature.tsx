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
    "2nCDgVtJ1qjAxqxVVLQkekXEVSP4SRr3KdFzwzrsPPKv39i73oqpf7GrfAGKfiJhUCjFGNky7zseT5TJpbTmHkUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P8eH1aTyxpBMt5A6LxNhdhjWSDVSSZnwbgNEgFU4fsfahYJz7m1cpr2UGLGQTS6bh9LJCGoA3TVeSc5QimUDaCd",
  "key1": "3ehRdzdPFCzE3eNz4rN2i3X6bsfrMyoUBUV6krsHxJ9YPAW2HewyDS3eVKVisUZBSjkVA9ytd1KAKtaT6G1xjU84",
  "key2": "36A4ACkShX8sWAQYGaP7gjzDuTtdbLuXgN4N7sPmKGoTkZALrQpcNbgaku3N2ELj7kFyXvS5HXQWsNX16zHNKgH2",
  "key3": "2yHZrbRBtPxWJuMrVSAq75ypZvdKpFa9FkRUuhDLaSfnT4q1zFd4gmosc4TQdqrkUBmSBUyRwt8douYoLghyc7L6",
  "key4": "hs7o182Y73mHwmtYWp6EHXTJwCbTxpYoxsPcYH1gScsFQa63jTqamQYZQciKP89nh7qiYQtowEVhHyyduownyJ9",
  "key5": "Qd8PnVMuKdBK2yM9N1QdQEfKktkU9ec733puMg542TLLYaXCAfLeKDeF4j4qXpysVdkjSTW4e9zhrC43rhHzSso",
  "key6": "3RuHLbzTaAtqLVVuNN6B3dwAfTNsERSBsVfSdr7ivedBmirybuE7XFDStwgNPiXoXEo5JWUWA1xQW38fhV3VKwtB",
  "key7": "3YEfzUcKcHxrDY8gqb329MfJutx9ETWgM69TPYi2odwW7duntoLS3cpnExuRRF7JDYJzKY5w7aFj6ST9qKsaF64T",
  "key8": "qDeF9219jnnBVwjNMHFqkYMWXwW6fX5nTjfa8mWqTUHHRXSDKoNUesJ7rDHyh61ACervhfC8RfYYF78AcyNqnnM",
  "key9": "2jvawmVxtj3Dep5MiH6NzdBZg3z31iLSZHEtRAKAibKYzVKJ4GKUHHu6a8pBWGDvY1STrKcAfzCj2NpQycQHP9bp",
  "key10": "2FQqb1UjfzKSb66MzoSCysjYxqX5VLexArZFn2ZtE7pprM3sTtDAXHdjEvZ8bBEqb2y3yWqN6UCsiPu2qFkwM9ps",
  "key11": "2iNudndte5k26fx6L9ncveMsYavEgA3WG78ZqzknNRKoyePWin6aAFaHCPksozTDgBHUb1Cwozb2JqsRZEXhXJKs",
  "key12": "4oTYPNLcvJBBrgCAoqZxVpeSyYn216Hr52xXsRd6TsbwxqVheptauRqJtu6cuep6Xnkaro8DJoM5GSaH5c32LhrK",
  "key13": "45UYJHuEXV5HCCQ74n7E4h1FX2vE9hxoC6A9GnvDqh2pRyfmHnbNtFtF6zSWcMaTh41L1VzvuKqP8ka75hBy317y",
  "key14": "59patbCB4ZCssZU6oDJ1Lh3XuAfV3KuopY28QDL82rK53Tu4TeCGC3Q1xqGnAgEVT4tfws9W1bdDgWPsUynDoPQa",
  "key15": "8PKYRPgLDVfu6UiQkoR88hRJtyggeiZEoXZVHZUMrGYuSjTLstDxPstcegdTdGrNt2UjAzjtibwxKCKo8vLPVJg",
  "key16": "28Qt9EDMw49XZygQEhRN2WadUZQPraKGPE826GrMC3Xvd4yi9TncgqvujD6vjdnjoMYreSNfmPMN5tHwtkFz6by9",
  "key17": "3Q1qRAamVdyYtEL4E3YuRERmAzLbyKNAAnRtoAyDcr3hbHTLm6LbW9Fg6oZp5pNzq1wvRJWH7VFU1WvWTPEfKAE3",
  "key18": "4LoJ23zXAmMWd6UDLnm5NFzCFFBHm3auyzyLvj6R3mHfx5Da72F7eqSARAcN1YSxnduYtQMMJ4KPq2qbsgbE2D9w",
  "key19": "2MDFkbJWQ7SwJtVpuC1bij8YaLhmewu9DzZ1cwG7AZVYt2QtM4zjCojcjxpTG24BZ7fpJ5FZxfDnzAjdQ7eHHhZJ",
  "key20": "3TvfRaymadHvygj1tX9yeG5F53uYijneKQT78t5sbc97aqMDZ3sVVM4eLmJoezJDJBVXYkWPPzVftAR8iXYL9Ko8",
  "key21": "5Kco7bupJ3hUscx3jjodtWyPnfq3X9knCt4jMhDsYHhrozcadhHdCV8pXbNEdebLgom5gWXBHhii8ddBnzYJyS9Q",
  "key22": "4VLuX6r9y191UbvGGUz5ci4HAyQMvMxd2vSwro5TUUHGmaxYpR7wBCmu3RCd7MoqMNMB93WChSUx6aW8UhmQAYUs",
  "key23": "2xFR8Qd4d5hsEZswS99HBvxMi6nC5KxAEnKen2Saxp6ehvTn58T6fyZrgv5zw5o7ZS649f38hynPbepYYmsxErj1",
  "key24": "TM4EhLTkpY3yFsuBrGd2WLGxkxoPrQQXTgpRsz59WepzDrVcm9BUqs9ksJTU3HpQjgbNvZaMegqNca7fF1bH2pa",
  "key25": "23vUZ9zr2cXf1KBMiy3VWMyEKY9urcHgvXq9ogmJeFgeSFSaSsaceMgTziPy53ZA99CoC2TKSUesy9remzK3z85Q",
  "key26": "2rNXhCHBjtqRrNGMw7KV3C3BJD2XLjs5U4eWPmUGFRaB6spKdR2n3Nf7aS9bXGJ8bh8vDrwcStPcLDhNwzxxm3fQ",
  "key27": "4X4gmAUoYmGQiZ29x2UYy9G1ndud4otVKjxyyLq78awEi4w7CvbkjFj86dMKzfcJcmzkFC6gSdbLjvU6ZrnTDPkf",
  "key28": "2D28GRrUtPKRR1VyR3TiAbvmCbAmxJiKzJxgCDU7Z1j41vBMJwFJhAS8FLXCgJ7Ay9gcLruyqAuP1z5KHrDqmvF5",
  "key29": "2zxkT37VQ7NxNYc1apJ2E3ppf7kPo62SMjVZJ81kLxGkb6Hpg3nspqFwFp3NYvzbgpKygCD7PMXUZqYLANHyCdJ5",
  "key30": "2fAKav4Asqbn3LnK3xgvrFdAjtjRfkMvVpD9Zd3jVemPsP9XzKwNuLPiqXWirDffvrKWiP68nsPTfps6vQ2xSfpn",
  "key31": "34Vha3c8G4UY4YZxwZ71A5t7bgAckY58LiSRRfLUm1YQHdLsDuPSp1x9NfbLPmrpE8Hvy73aLYKNPk1PKA61jVrA",
  "key32": "5MeFkaiqxBCP3byA4EzNWjDwGMXxYBGd4QefsfAntR1qxqpppUHpFYvcuiBjKk2Eptv7RBJQD1PngAKqAhmVLwfJ",
  "key33": "2LoVc2oGAPcXHVXy4JdvYXFKq7eDZMoMHnWBE1VFzMeHQHctZvGf8LQD9cYVDUPYmiR629dcVf6ESgsz8RRMTLey",
  "key34": "3WCXWiorNZRBeSxaPeh6cAyLXAWnfk6Et4dPhwAQfBcRiNenQ9DC2SVystotEHaE1KXSyCwvwkfYPVVnsF7iEAGj",
  "key35": "2sqdhsEPfHV3XkQq2fEC2ZnT6WpE4fd3K3fQcf89wtLBHufBHXtRTLSMKPbHtA4VgHQSAojBSTTqiVVdJnhpGFJ1",
  "key36": "4dsipnAfmM2p1QqmCeA1nwzNzc2LqpvcE8NkAWCbt6DNXeC1qNpnjkS8s9d9u2jUsTRP24ZiEAy2tbGhigR1Y2p7",
  "key37": "3MpHXR81pZ62Skv9pHEXD3Z9ePWrqeLoYFJ3YeQfGEB8gutBU8DziVmVGXTnEppazHSAGHz2skYfSnMTBGdWcLan",
  "key38": "5xBA1VAjjCVXJJqFj7Ed9vxUukokgvVvEAe76UuYng3XzBDuU19Mmbyz9hpXNCaHD3LqzUUBfwZkgVHAXevBm9C8",
  "key39": "Q9VnXjVzauPXSFiRazi6W6YSWpKeag7K29UXTSEcvGRKxGVzfJm43RfunoUtVEUfPtzvx2WvnjKxqKrUnRtTFqh",
  "key40": "533EyZaS8h1bvs5cayxSRgqdrmfhJqNJpkqvqhbagYqpcEUScgp751Q1tgMJbeBM324sKQTLdi8fqGiGrtcMPsiN",
  "key41": "5engWjazQ36nZ519vH2b3VTXnrp2PACzA19EjAF63gfrQQTceX3EK2iq9qJw2o7UNk2HofMenD3bXjwSHgZqD82U",
  "key42": "2CwMVc9KFVRMMB3tg8XBd4p4z7W9BYy1iTPgFuzBMKc2zcvPRaQGyQTPpQx9xnsdQ7jFxMmLtQTb8nXwvr1uy7Fe",
  "key43": "2HZ3x5VCyphaUj6x1KBDu5bVoCNoj4mRRjhfu7mE3xqfgQstgiwwGhDkEpSjRtAt83xSS7szSBK7wrEWdd7iTFhb",
  "key44": "3KLiVuHekQiaiZER4oRYZZjUoaoWDgDu29i6s3mgqgCyd3yaHyCumw5K1pRqDchTtFL53XBGEN5F1qUdsFBbzv9p",
  "key45": "4uC7213RSnHGiNu4XajzE9bSehhoWJKb97mdQrAUNu5qFWNTMdY32Arkhcpibfo5kpnwN61sUFLdYF3yjry6np1N",
  "key46": "2zveSCVZiJDjLvWpvtM4JWrahouA3vke2AXjSD5itEox5FuS2CVazFu64nS94mouHYrG2e2B5QNKKWhbj8iUCMui",
  "key47": "5TEyyfA2bq7gUsoLhdvwHKDvJcCGqhHJvQh5GnKzBNDEGMUEqTASXxGdxXYtNGu13opvZGQyEPbEcY7ZJpArZ8Kz"
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
