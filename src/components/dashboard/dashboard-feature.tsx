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
    "4YmWjtAL1u3x3Npddn9GRNZFvKpg33mAyMWmtHsE25dYdfnwUWcVdg6dtUtofo6KUzXYwVVvo73ktvh8USR31G4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wLN9z7QxoDMc273rjegmRo7JVxDYws5s7zzxowbNkwRa8mtvD37UQgKquSCrNsdwsJ21Rqi7XLgtjUnA2JzdTRZ",
  "key1": "39jmPxPr4MBykiDVgB6Fk4KfUGnHa7W4WVXXdpTa7tvHvVUG9Y2iPcqFJVm7f4TW81gNCibvyEXx4ePMgHGJuu8a",
  "key2": "49H6jw9e6b2nLToGxceDe4g98jMGuJKarP3U3zbTw32KJiy4ExPwiizG1G8haRq7KEbGoibkBsduyBxj4cfGHzD5",
  "key3": "43RP6wcTZdSjqq4nBmAtFvRBkPt8t9u5bnJJamC4FCVY56VFfqRdZkBjdepNiGwMno7GaG2nTTGg3BLG17erM6Ks",
  "key4": "59gFhzJ8XDjXQk6vikjBLMiX7ZhuHgv4ho6biPirA1EnyGAnkEFgohm8GnShiQC1Kw3PV6ivYBdzPeYFmcGqx6u1",
  "key5": "2vEUUdHUjyMVSZH4dJo3fmwphaEeamPuNHXt7b1trx44MrkJa4hUCzemF1wFnsS9wbhdB31XtC2wPKSnfzpnhPLg",
  "key6": "5mWfTK3c8egZ1xP5QwJYwskx5Wp7etySPSNv6JQEHWKisoygEuZfYBkKdA8cg19SGBWnuHxPgH8N5mJETS9VneRi",
  "key7": "47n33DiNwRvzh8rt2pQD9XtKVEaks9rVVkqwG9bRPuTJWeMdTmAUX1VJmJocVKhUEhwfodHikF36EExfJWUu3Da",
  "key8": "ktYFwhMBEpcavoLJBWAG99rLtwarnrf7PnHYSbQzY5SPWXvtd2hyTTNqvwR68vfYXXsRf1b3JTg538mytZjjxd1",
  "key9": "NT2t6H2wDD1oWqGaeTvz88Hdpt9cg4oxrCzC2wd5Jrt5sr39FMP6QyFvCkMz77RbqhtiYev6PKAtccHskwFAmMD",
  "key10": "56uq3gx52wy27NL6p3m7ehma4PGrjunDWCSfs9iiez1rLHX5GzvFdRXyjw8gURKfmQ17p2FGVuyGGmQ9ezWZaY6T",
  "key11": "5UFK8C3uzbBjTvrq2i9TXtKfCHDRxA91p9kraXBwzvPGhSSK55rtAxW8DesEdLvwoGabAf8CG63DMsR5dim6BDYB",
  "key12": "2TQwjNhGGd1rUaQL3dzf7UVPodWiBkBfS2EXFyWUB4HivgnRNv3LNbmZ7hyUeaB3dFAXtUthbG2hprgr35GgEgU",
  "key13": "47ZDTDFAMYx5dyEZ8tYWJUbFwKyymo4W7jxzJ3MnMURT8p91HxEcvMK5RWWRKXdwMF7y961rRga2tMXMXW8phuYt",
  "key14": "3qTaEt8yJCuTWTYkiJeTsTJMeoKZWjFc9Pizh649iTtvV1aHepKjXF9TvBgsL2GMYZuQagAyuveCs5YNrGFKwV22",
  "key15": "5sg6J8V994XCQahFWEMFtmZCgSm5NMRi7rimpa7RnEPmEag3t9dENNXs4ij5mUonGjewQxBe2r4yj31fWr8J3C78",
  "key16": "2B4Z4P5gjLEcxvg9npQ3P5mHTtcZ41x5ggiQMgMxm5CFgBczQfGDVv2t3FeZj88DXP6y7QYyum5rcUPpTj7vBm23",
  "key17": "2L8tB5jnJFEysy5yNrFrFqNefqUWGJfTUGXRXkz6Zxi57uR43nm6EtLtkH6UiRHZ8B7WfjLvkq781aFdex1GEVXK",
  "key18": "4dFAvpXrS7VQHqeP46Jpp9ib1pUPwz2ZiVd7bYCL6GmmfHyQ2fijySTqdCFRuZNysmCAGmMgJQXN1Zy5kG9SgREt",
  "key19": "5BvdvahuM4CyPvA5XqqTP8dbetPLyUS2RBfk39RwyZPJzXk321cxrPZfdcRBxSEGgAH8sJpSYW57MthAkwvariW4",
  "key20": "3GZZv5nxEdoqxbonhevRmi1Govoqgh9VS6Tj1KY8zBq4QAPnPWk6pxigbbCFPdeNmd3YF5SZbM6SxQac5Evb6rn6",
  "key21": "Y9FQ76chjeEv2KQpRk13WaEDv3R5KxtwVGJ93QYoHck2co9hBU57BSBGvaXgQfAWQFg7muQC1ZtTUSTtXWDkjUN",
  "key22": "qAU5uGCQng4K9eAd5TjRLb8MpH5J9MLLsYA3JrZYqJSZpsFUT2mAhW429MNkcHnytyp9qBamaB61Fap8jiFAzVY",
  "key23": "4dx6aPMmbYV5xiB8ukFXrVttQ5QKyiSsXmLZ16nbFgepU8Y5hCLE7ZXYSyvsVdipiMLzQGAvVrVq7F1WUoKzpx8w",
  "key24": "PxhqMgTkN5mfCUPhTocfLVY72PFVxqBCobHKJ9NEpLz17dRy1KLd3CPkw4xdHStuLPFy9iUT75ZN23zLC9L7E9S",
  "key25": "3AhNPTdXqBM4WGqN1fD3UHX4Lona49Z6dg43AGEnrsSSNhJAHEfhLiZMJxrPrvSpVC7iEimJjfMHuBEf4tSY8tUg",
  "key26": "3FMYFc9D877dWbUhpXMHys6TdwpidvfjiVhHtGfc6SKZXDwNsojqgkZWkxVmtEztmvcwYW67TdpN3cdU6t995814",
  "key27": "3dMa5assuvkjLbCfKsYU1VDZoGprxwbh4vCmMoDhngmoLUNFYa4VcDM4KjXXVmbk8ciqqThnUxmimXUm3vTaLecY",
  "key28": "3JpJvefaXmuETJSmSQeNz6B2gpWA99xLnempgGquieRPVtjULUe5VCBeS7VnX4ksJBuWWyatp3JLqfTK84i1B6Hx",
  "key29": "4pFULhoiZ74H158HerFux7R5WEqWaNMWAGN5jVm9YeCKBbJtZ5TxRd2Zse1FQ2NXobC7Px5TqoEi4eXULUmvAzJy",
  "key30": "3kRTqAEihWmEiV1yNheSjBT6DxBQ8V82A1XvRKHRApHWw2ekE9mYACNzkQLTcvv3bMd6a5JgRg9o5cqBKQKp3Pmd",
  "key31": "4EucuTRWfeDbMmRjwrvdKQmmZTpcMHj6BFhUTT29x2tqEUazaZpSFGHUPQcE1dvNZY6qXsMW534otYQEEPnkJF62",
  "key32": "4kuFeZtbwJMWZZgXQRHcyFpV9YPHq6HK35e9hVzRTaZ1eCagF3ed8bPM7ZpJcNA2XZYijD8uafnaiWjr2hh2kuJh",
  "key33": "33ftJx6CgYun8XsFRj9L3BjZzb6BBkCBgc1tG7BgF7uaiiw1LN5n2ENASrBnr6eed2ThULxZhyrV4RRxaxszUaQq",
  "key34": "24xRX9PZV4RRmA1NeLBhy1zqCFRYnohw9XumXpnu9B5yzqdZekYWTLPzwxH2YNbyNAGSPb3ton6Hg9VTdi2KnaGv",
  "key35": "7NtPdeeJfjcBut8izNpSvX9ncr8syqWiAyub3X7fE8gRbhQsPM3M7a6FH4eR9rBSMtHPmVMNirj3hgLmnckopE3",
  "key36": "56ajiMkRxsuXaNBMdbD47dF76Mt8AQTYRvYEZRYUKzwQKpN2atdm7VZx5TrR16r3yEHHocLP2gxZ561DvGoTiwWe",
  "key37": "2AGHUhS4MsvtzNLYbk8vQr8giFqHM2dAjGsjjNXTeMyuuWy2bMMpzwbMEd5vBjoHTWe4bgjawxJxvdRzACpMUgmQ",
  "key38": "4UHc9n5nmQ2s7jige3kES3iVeweYgzjRgcEyWk3iKJky6MzmCeNz2EJBZx95rMp4r6RheK5tbuBvkq6KG5uCB5s",
  "key39": "p2siGuG7mV8tujMafQNZVKUxtdW5BotqBm2m41x1Q4RqYEjuaPBctg8mZkVRGimJvsSKcjL8Ya73Cgyeec57Dgk",
  "key40": "3FDGs25ri2E2cdWZScNCfeJz88cJ4YRD9PymDZbrbs9568xLwUkFkykyG7KFjiAocNsPdcH5mQXAWDsVdWrxBHhf",
  "key41": "4oTAMBxUyhAWZdhLPpVgeSJNwsvyoMtp3qMrkW1axvnQzM4VF86iDkEQNqWBngh6FxbV9qVWJptC5pEetNKr7S5r",
  "key42": "3C1GpVVkQ5wa7RuqqiJH7UqTEP3oiBXKTGDo3oR7obQG3VCL1vFaVcZRfDVrVQBp59UzWn89FpYFm13heTVTFd5Y",
  "key43": "2pVRpjpSEWn3vumacL94d3UuNgo8Q8M2aLJEc4SjKRhXcqqs9vz3p1JwtfJW6eSV1y1Syx8tCviaqY33eTxqUDZe",
  "key44": "3rBLgqKEempJyT6GU8KXMNQSEJMyBoVaQBYzxiSmgHFa7oEcU7SeF5KYG6cEyYPBFt3EXDWW1N8Ev6WzwrgdzGc"
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
