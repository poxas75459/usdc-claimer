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
    "2ECUgYNhyqwQeBS1VffPmn5DNnoeehyfsBuxThWLJWeQE6LmTUpQh52t9Qmo8AXg2MoSsdR9CXZYEsp15b7xY3V1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xyFMJRYGWMLNaFWtAo1SogHfLvNi1EgssVyzMRWLm7ukTd2EFH3h8Ap77dkZG2z7YgquoiiDWotjm1PsbVZv418",
  "key1": "5AbBhzpRpJgNhcuq4cEgrUm6pHket52sMXYC9WgRuWCHY6QzP3tDJWmWTxyiQCrhQibey2g7btoz9tc7YX2kuzEa",
  "key2": "35w4LZVzTrpKGSHEctDhGAxDtBVCbB8dRQvWjZyTmHQeSmmc7UVN9ECCcPVjok8u8AZdCj22vT24pvtjkPdeK2QM",
  "key3": "4kuPtSHZzHv4AY84daoDjpHACTSxu2te2j1Kv1F15pUQjTgtxXASb6dQJXmXaKpnCWH32kRWZgdPzb56zQcfBkcD",
  "key4": "2PeQMPaUiyAgstADVynqq2rm7Bum1vDXnp3A6rnfuSy5YTUv6ZVtjGP9Y9YfLYDqogLVu1jomZMKTxmWJPmQmKd5",
  "key5": "49WMTqh4zrLPFM9vYNavuBsEj7Rnaa2YBhD29s1ae6SELJMH99u2s4a7wkAvgeVXa9uZVCirZhNLBgCzZte8LV3W",
  "key6": "5DXMczPZdCKK5Pzw7SgUFyJbKN8egvmNMVCWWroCSsGLSxQQKAPQawtM9od45s316n8TVfusLFFj9mCqdNPQ6N4C",
  "key7": "EeYMKGsrnRiUH723xEZqtdUWBshjQqBkyJZwKeaw2TcvUZpePYC3zaU8W8rUDcdj7WYQmurtWKjP148ZP3r3QPd",
  "key8": "3zvFfnUBQWT3FGrNhAQTcCKuEoP5cVdwR6iQAndorv6CvrDtPafVonDwXRMUrKvdmKFtncXAbgTv8wmz6gwKdSf4",
  "key9": "3k7SM2vYbPkgBzbujtw65fAJGNQAFyWQQXh1hnLvtu2xm4rqVUpjGw6gNA3z7oj5cBNUSbBh4guzAUCkanMu9moE",
  "key10": "3F3fWU18twbXhPMu8MYehEsPinsqc1RseVgiNeHyLNoWiD6PGxFtv2QhYd9JGxoGbRJqvrp8ocPrrWtLkzojABkq",
  "key11": "5DQRnKMKrq5yCPeJZpRdLxjBeoNRd2uLet5F71DDx6yhquooewt4h2NGBvuyy8p6CPUQRKjsnky48uZrNdJRnL3T",
  "key12": "5XdgfWZXyJyjroogw6xzMPqeQSsYSZ6c7H5tCn6moiXn4a5GXxFexd1WWjGo3LJAtujQvKiVuL3sNG1CWuSzgp1L",
  "key13": "3S3CVbBMbg4u1GfX8Ksf5dtHLGDSf3wZ586CRMjXg5bKigbRJUnyGDGYPkPU4aa7Xym15u96857fT3jTtuJJbwFw",
  "key14": "2CitJsJf3mgdbHjMU6BhWzZ5jzHHu89R5NZhQRsJVPhwwmd59WzaQeR8nxgN7ie9PzrAtzEJ6asCQNR9DcczEHH6",
  "key15": "4HgtebHRquZR6vZLQgDACPHGy6QhceiHfQAHVdpgbSJUfkBSDphGboKrfA3jsduDfkndhD1byizgcvZGNHHbEjCD",
  "key16": "UkEKw2UJebVLPF8reQeuMPR25jtaXei9wFWRxxAsiNz1vfFZ7vPhzwefXPbbT136v9MCvJP6vKBi8aFMrgnFfHN",
  "key17": "3zTG75huNHjuZMfYzQphHXELHaCHiWS4Z9PbEmdQRwmV1qgzrPoZbJPr9xYLKvJCGM1t5SSWppjC1j6V3mA3YCXG",
  "key18": "28mJAdGgMRSN9LgKKWo5Lw4t4cDMoi5384vpMgxB4b6tec3m4meTvBZa4GeALXQ1gx5VpAxTjLDGdx4EmdT6zC1a",
  "key19": "3hR1skWtNBG5vx9xWA2Sc5U89bFLkAjCaMk5aqf6gbSGuYUoHVzVzMkEBVArtJ5iRQae9zKCySKmqayE2FK5h99H",
  "key20": "5rbNyNAYMRjyoTHiFhQ37oC3BAUArMwoFAxsicfcjQHqPB3yFMRYdvD5Y7C99nBMbfGhxvUpct3fZVTbrPAjMzcB",
  "key21": "333XmmMBkBD1iFn15eq2wKybLQcsVR8fqmiCnX6VGWW22aEd847cxPJV4GdzJoz7jpFL8bcJuHFyopVRFZ1UFe4s",
  "key22": "2wAZgCKVEzQVmeRJaYfw8A1cjjjjWk7X62z1cNpX5kK9KxKJ9qEnr8ojKbdqXU1T7ZEjrfidQtprLhnoE4euHHRU",
  "key23": "2FuovyHPFhMGoDZxon1ipbjDNnGcujuFA1P9n5rBHDth9AkwaBQbGbwpzbNoHUs7X4zDKLdJGnvuSXpygpTLktUY",
  "key24": "5nbgnuGzUsjzd3bdDxQQnWdxNiXyxom2DXDB13L2LTEoEE2cCSPn97mmxPea39PxwTBAR3nj6Cr49QocFNRaxngi",
  "key25": "67SZtzyzP71Es1gasD5tznGdLtgnSELABXocWbrv1ksa4qKigu8ZjRUCtWzSTLL9ss7GWvFzAe6vNk1w4joUG8xR",
  "key26": "49LuHXDsp91LKyvSX2YftsqSAepVo7yxWSFSZaUDyWJtdZWEYkiACXoS8xTPeJCucPewvoAMoW2FgrB6iMyRnGfR",
  "key27": "4yKpLPta8Fb8AN3KVFpQuAxsvLVo25Fu5zmMyAnL11jwz5g4fvyHKGBZYJ9Xd4SaxN3VtcKXoaPbKg5VTYJJ1uDD",
  "key28": "5JFdj7KFXXapePMmZe7SSneFKdG9xvqW9cTQ3D6odRyo5X2XC8bvxkqMJy6PY3GSUNyktTnaJ2HrZNku1LCbL53P",
  "key29": "s5HignYGZfe7kbwegpuTAdCC5nfs831A6fziTfWPiwuxDMz2dx3wS5WC4zZooVtfxEQ199ijRo4wdoWTAU1YvAE",
  "key30": "5rgQXruipVAH4L9qrJV7Vgcd1f7GdjxGrKrhpRB8eqyjPy7u35DSxf4N1sa6CBapMFcczPNXa39tGE1Qtt1xUvcd",
  "key31": "67bCGCAb5j4Fj3Wg26sh2eDd1UYMcAevS5buG6PGc9MZyZoKSVMhELJKEDBu2CMMvUCyCqCuPvfef8sUXA87wwEw",
  "key32": "3kfDaHg3rtzLnQunELvFLMSTLQsSTu1Gwq9EFASBNRZ7N2ZzGa46uXGXzqYyRshbRF9vJpqUKg9oerMAqvkQAEvB",
  "key33": "4JP5p145i44rp789sSnc7Q7m7xz9RrnfHkUvho2w7mjYnA8aG947CeEtRepMorFmTt5gU1KaHZnv86aLqWcD4puj",
  "key34": "5rX6b7qDZmgtar5JRMDyafDJLRjPgzKJXckJdcgbsVZPnDG3Z6wc2WhC3QRPSvgRucKnrsDM6NztC7ZxQsFMum3M",
  "key35": "dgWNUvg1WYdSsyHehAQuctA2i6AJ6gqT7m1QR9rLgBUiVKzmNvhk6w5jfJRJySahpsMBeSs9GTxQaUqPuhvH34y",
  "key36": "4GdT9Qe14x7fuZuuGzY6jMkejCUe59as8kFejBnb2xtMFAG5uEiwo5wGQHLE9QcDQh7zNNLRre87p6yRGaYtNtey",
  "key37": "5Uh7nfASRQM96GdBxJC6Grz6ntMpueNVPASUHQGAbUuVy7dMz9tPaLSMzciX2jjdvuzfkSxgwub3LFd3otpyam2o",
  "key38": "3JYsweD37zVZT5XJ2VvkZPSTXqyM9ex31ReBmXF64t2QnuHvPeGkD188EouR7P1xtdZM2MESf1PhX4Zm9vXpftaS",
  "key39": "4mmtCfR1v5gU3J1WJxfUNLVztphpYeay2MiEAFH9p8AVz3cmGhEffzSumiaTSvBNRiRETZpmys9Xc57qxLKRJ1zK",
  "key40": "EqtaHRvNAgRrUv6i9dqAo8p6pxwHxTL7aHjVXyMzoGeYTofrmn89CGRsxr51vD9L6tBzhqt55231LgsbFPSTs9i",
  "key41": "63AFD5VRVECwaNwVrWRdDQV3bGyvtJRYCf8NgP9YHP3R8vpqWhCcLNCkEeZ662nvexe4Fw6KJoScuLc3LurNsaaN",
  "key42": "2hqxtZXbkAhrUxBoXNAGDNhi7p3bpTTgTknpUnWz9ircwhZuccmqKqAGeC4iQQTZtVSKZsZYKyYh4MJjFPqGmfrM",
  "key43": "D2Bi5Bf3FigmZwpcR9YxpS1Y7rVvUfgrTFFLt1UCnhhPCgDC9LxvzRTmkGCGQ3sdpvuKj6ZeTDCJ9XPPrrHrgAd",
  "key44": "4DTqtLie91hNY27pi9moVzZBYGmr2XgbgF2zCmyeHaQNvDagNNCJMrG8VsFJYzjC65MXaPfnLpfucecSsotirdJS",
  "key45": "WLpGy5bMQqvoRpxEyqLZVNWtWATuQv4hQSpvVA6ayqCvxuDsDPhwkkhupjQuMFjL5WvwxoEiHF86WmKGDbFY548",
  "key46": "PCVdeycKAQaHBniieMJShZrC58fuwivw9jzMdHfHJQ4X64Pnj6jULHGagA92rfgHUwTbF3rSpnCKkuEi2JTJemd"
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
