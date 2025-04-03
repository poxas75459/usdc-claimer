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
    "2nUDu21V2hFQpoJnb1Tj86d8y4WtL5zgLCqxD2BnJoj9oeZPC2QU5dhP663UW6n6wJaQcqjoZ8VW5WkPjZ4ZVfUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QkztN1m5gvkvncFwR4BLoZtctaduPUdjZHepxehxXKcvQcs4SheWbbKZjMU4fNqzwqWZAsaxPzfRzG84KruH3yt",
  "key1": "2uuM2XoaKp8yM6TQkzzBFYYYRFJaiDSvEPwSSFQb113rjq2Ntv4JDucFpZBhkzaWWsGgAfVveYNkSL6HuVpM4rDm",
  "key2": "2YvxHZCyrXL4aquBnUq4PFJXvsiMZ7HwahCSDK2PJw3AkKfM31575TQR8zZUDMd95oW8RujE4zeyNoswHW4CQsPZ",
  "key3": "5XgMewSuVh46UrhU5b8ByLrqU84HuhmdHMxxJzd52LnMsw2ahiT2B9EUpXXfVyddGQRErkH5AVtewvTdYotystwY",
  "key4": "2xMjQq7RyCDtF2fBsaKcNqjujkyCYQqpAzYcARTPrF75k1v3R6ibzG1ni4yxS3U7L8d4mUR5TyoPjWvdxX6FaDFW",
  "key5": "2vk6JaSABMNi6bGfv3MQrwYLTD6NVTD6xSsDf3TLA6vAK6GyDoy3K26BvJJyHiuAsPPQVvjVZ9R21scfXRmaX1S2",
  "key6": "3RJsEGGGDdy3VXuSkCX3rruoEmpXD31pfCUU5jMxJt2ystbamQZV4tpCwn8d4dX794zpfr8xbiqNrEwwy7hipD3e",
  "key7": "NnDTXSWSJY5QGtU6wAnBSVbvtwzK5jWKTjyuS8N8zCxLEzAcD2xSQVDpNkvMyPiuU66nijpPAu3zvTpniHyvG62",
  "key8": "5Z1FDiVvPmD6jamAtEsaiCC95VTe7MuTtKnFoXRVFAhCgm541hQ3QqX8CYXgSvnRoJpXD2erXHp7pZmgp6fzAP74",
  "key9": "4BY4pCVZcyREn4v5FuwNT7QNDwxhYMzMYU2muQvCg8AhDA5cWWGDZ4quivWYJwu1AUzqoJXgE4ebXf5qT2uo697M",
  "key10": "2t4wxW15obCPCW1xJdDMADjfMEAbzZpPR5Z3VBFBaXXEdhQrVLW1UGUQLhSKhbMiLsftSZgDaEJjWRTxnkER4VDT",
  "key11": "xQ3u5pz7SBL3yYEQS7VtyBgixXoMopsE8GcrGFPKyYjhCXr64dpTzWkbZqvEWGms2Y8143v5E3S8nQYF4ironxb",
  "key12": "95JMAuoFW6NivDMfx1eX7neT19RVRkcNvtQfe1SN4DcaQKfzhzXe8F5hF5ZYTAWB6Hnweu4HXDxTH85DpGpmShb",
  "key13": "1h3pYQnEMFTKdTooq3SkPHSDKe3FpFDX4iRkGb2DKzkaoMRd6sAgRtSjePYP5hrZiZDiobgx8SC6w8ditn4sGvE",
  "key14": "3TyMWvz1RX8Lo1Zs7whrjbJ35wi1w5ehcBZvnekuDETrDRaF2cYWY1xZGYyMDteB79mSwiSGUhzZDNcbm4MsqmNF",
  "key15": "PscFrFzp4PSsorW84XaeaVvyxn7NU7WUxd271tVM6D6r7heCJqFv3AYjdXGLRiqNHNTzSMZZ5yQUsgupRATGfK6",
  "key16": "5WkXZjVpLYt4rX3JEnATtKkdUVLSYCB3hrwCiabxF1xQQhNiZacK6Jw1WZH5LGYdEvwRjTaijdfgKTBnREofvFLf",
  "key17": "2B8kiEUUhEJTmnnaQDcrb8ovUSdfBmw6Q39Yg3P7v5g398Q1zbMEhTwtccG88JbpaTvPmx6j9wGbgjGK6tHmLGQk",
  "key18": "2mVuBjofNb6VvbJcYzrRZcohE7uCd5AAvqieZFCkijJ3JfVEvVgh4KgMe4db4gybVyQCkGeQWqrpqYR3xHsZzsQC",
  "key19": "3vfeAwYXfpb9vXgtAQvhirqDX44RmF5kUhvnHfTn4h7K1fVvUMJ9BQkiavJX26WeovnFNrKBBXHqvSVJPxwktvCw",
  "key20": "vpo5AtVbU3QpxCGvdh1GknzxFq97BkB82xqBCBbFatyW3WqcyPsTucTb9vsSQANoHnSyoaf6xgmHE45tAsdjSbr",
  "key21": "XdPumn4V8CaHqqL5PGeJwUH7EcTTLKTS2mYGPcqyAzkVDvGToVcreWcQEmi2kxHPSXetCUSEtc8c7GSQSCofvA7",
  "key22": "5uAnbobnaZwsUgBHBBK9CS2dFsSijYtRZCVsZhCvJiGS7DCdw8DVFU9f9TVTo6jtt2FZRWneK8srBMc6verGkr1Z",
  "key23": "3QqFkXw1Ue8DfHHNKrzyskDRUEAmHruT9VwPkBwRZXhwCXJwYmhn6WhEvA74JBuQtUTCW7a5yfRiTugGenQx9NAD",
  "key24": "4jpNLhKp6WEBDN8CHwZnGnaRT2CM3DtuervgNskyJfnRFvLsbPn9MUtSoBDkmUrx21zZ9ts6eSW6tNd4QcE1RhHx",
  "key25": "3SyPf78k4PePuQefVxbyyRrzHphV8n3xenHWhVArG2QUzGDo6uaZo11Ly4U7NQbhxphJ9owmcgXGDNMKZShKsgxj",
  "key26": "5gvUy8UEgevF7FijCoFxzc62f9qjviD37b7TefdUCzMUKWgMU2v3D6YbEpFaQYM7uSej9Zspz2k42C9tN54R6ZHn",
  "key27": "Gg42xZGEPvVPUZfbjxc1CNQtayy4ycmALF95XqyGmGg5uWCrtWa7jLaxfGz2Y3Xt8r6dA7xazvyZ6ePX1MoKgw2",
  "key28": "2VHTWprKEgWccxCLairkXrYHLstzafaJGMuzwcrJdg8SFyriTuEa3odRSvbuvdt1ZmqsXgMR1eb4N7ADDDnYSAJV",
  "key29": "3c8aNMM9yB9d83mQozKoMaoqVwAf1aFBVztnyxhWHdvqoKbGEwsC3XEW4oz1BYSh27ujYWhR6UK3CnovHNeyJTuj",
  "key30": "3Y8R16EP7MoTLYtd2TQjBNkRdkXbefZRct6mynNRwS4EZFnQcgXTg76WEhdWVgCXmnUumykTK8Mc3JjKrwnMXwUu",
  "key31": "5wBiaiADT6FS2dS6RrH1J27AM9qf9E6eeXi7nTyxKaq3e1mtzUDfoJhFfp6w9i18YaSkEUAuQ2wcheKoVqxiRCn8",
  "key32": "2ZFcJU3SDHU5y1owpRsnXAFF2nbGuiFRkiBuiCEqQYtAD7F5Et6tU15RD3uJdWJLh8kSViAP3nTTds7JdDTBQerH",
  "key33": "5BoN9tgMTsep4JEG3E5vheU3R1LhDagPunjEsp4a29A15kuasn5LF2qqHQ4HD8jooxzfZc7n7Q27i2dwSSET25P4",
  "key34": "5wtjoV8w8rGz4mUf5iYCmFzBMwuiFuszQzivoh2jWGdJVWjWx5wk2M11TwoaxhFdtj7Sm4pr48zY3ZyX4xgts3Yz",
  "key35": "3N5tkJy9NtjLhTgopwauBVCnjHwDmteE3GmJJ9c5Wsq45m1SW5X1jJZ14ZXdvEiYveMKoqNdkyhyrHMxG4SikFiL",
  "key36": "85j9Qb5L7pc4vxn6NY1AGsSdQuY6GAPEgV1KWzHzSrxSaDttKDjcCHQ7jtrv34geU2ZWkR3jMRsgDk6iLUQMpc4",
  "key37": "4JLwqs6AakZx9dYKLH943FiUn1Uz8PjpiN8voYSYbpHNAjZU4JggepAv6v8WnSsFh2U8gv68iTW5Cv1tFAkUEiMD",
  "key38": "61AYiLEBLeCprqc2wYepCMaCrP1ByYb9kGKbquNm2pTeyptSNsM9JpKrpXiPTsNRR1UwNKnku1h66Wq3Eqv7hFCX",
  "key39": "2L3SB5BxZmXkBbFsvpuuEKiW2kDDSbDdX8SvHJaAZ2q5FPc9MhmpnV17RsFVVqbNb14MykBYyPUxg1TDLQPKS9N4",
  "key40": "3icgKQjSmyxa6r21mvsdNS9jumjAKEQKkYctBb88Lt5xDCMhFRKeiXoXgyuTv7bDmzusQxuzKxyThyNRYuvfsuyL",
  "key41": "5NftjUQPVoJGCNX18JzetMFrsEUxL3oLs7Ww6NrwJpAATTLKHF1GSFVF7LREAyL33BYGevinjkXkGrotfyXeCEeC",
  "key42": "JYJBDZxKmi9iBUdYSCJ9dZ5J4CPRAmJrz79kSSXNHZpGKxydNPmo4EW4q6mDqWjVMTXGN6UTxTYDngH2VvEPGmq",
  "key43": "3ESLV5fLRyJsc7BfTMHUnqUsKnNoqsJeUrhjWgAj2hGH3tWffub8nZTFaqqfUiaFuch9PE73FGYqTw3iAMgj5UnB",
  "key44": "gM8Ct4WQGQUZ48c9UHYyEDR1tt3Do1vWm8SYAYhq5Tsde6hZbG3okb9yzzpR3BtU7fiLyWXGbq8ew9EZVoGFdVy",
  "key45": "4EivWsXiJ9YYZ6ttAFbmGNbWbjbmQjcL7vm41y4d1ricQ9yfmCK4QU4ypiLA2XQe92PGMCzF1bdSDSgFBqaeY5mf",
  "key46": "5tWweNzHcqxERQmSsgzXTpdcHUWM6wACtHnrds35po4v6PACTMJYnm89bFS7JEPZy7kSixyieiTPDNFUAdiTkG9M",
  "key47": "2M1CUAaXvjFzSHR8yXuJQF3oZsVr7SDdmJTPgXVAp94ggX9jBqYTsnvdNwTQysjaqyEdRRG2Bn11gTSh7DX4o6Nd"
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
