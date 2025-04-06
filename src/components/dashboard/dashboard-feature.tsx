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
    "TvGUu6Nj74u5eBEjGZqcLdVVbzpkkqSd1ic9vfREn3mrknSjaRaUakAiRFt7BeabJ1hQ6TpiyprZDjjEaqY7qWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "342kub1odYwQHmQXjo4msoQBaiyFBio192PcHoEpJovZbUxivaQBD8bvUM6AAGZW71bxSgAYucPkL2K2LicuX6bP",
  "key1": "2s2uoEhnszQBvrLSA2WZYHX5PBuEbiPk2c1ziaJBd7XQnaS5XfYCxusSutDiGGqvMUyJLBdie3yPsnaFFxwNxoZb",
  "key2": "4Z6fQP53NRQEAfU85qUpwbLgvXshFSX2ewY47ecwdEacKzZkurSNSBy77HX1ipYLMPWXfJs4ZVkrEF2LyT5ijUvA",
  "key3": "5C7LMJzQiPG4eumvBXLXQfcHRnPAgSyyoviN7MYNvPkdAa5hBuA9NcL3aofjkSdB1ao1e3Ym1Rr2U4FX4xYFJFy9",
  "key4": "5AHdS6hv1dYpfK4e5n2JpGMCA86WRjtQM5mHzxnirYGqwoCUZPTeYT8Xtj5JPrYVZmaiRuAdod2hhpHLKxYHuLcj",
  "key5": "3fs4DUnqQ1bxJjDZu6WMDjuvC88QYUqt87tKAjdBnsQmLDiaPPAci7RbQrzvFkQL4ATE3tJ1h4LNykbb1FAeLEE7",
  "key6": "5oqRbEUgCH1a7pr3JS1aeaZ8E2yrntTPmXkpqfs7VmeVNwA6t5zxXY9mtMoR72BQqYj5TmUhY2yDacnbgD5FAkfi",
  "key7": "guFEo3LXxU7gcr9CCHLwqbcsuv5AFzMwMZLbj6AUyaMPpF7U6Pih8yZLM4czh3mzcM3zKNcPVGQgtnoiGRVqytc",
  "key8": "3FVmWQwZznH5JLFTB6ozS8XyTg9hQ2WCjKSyLG7X8LoR3gV3wqg7qpBkKZqAaHwMdADxjrgFL8RxA1wxJDLK9XQ6",
  "key9": "3wNCGVEBVXEYt2j14ajeogWGvVJTNJqtBAr4y2rUp4KoTp8L3gjQhiXXgJrefSh8DY85yuBvYUuup594tHDwQR5E",
  "key10": "3xKoFEnFQMTKY18X9RxPD8WpNMSzBRJvXXUXU21itu6uKP1dwfWugAvYd8EaG9J5tpX59iCKyfAYzpyTYgHXwvYU",
  "key11": "36HZrskPVSGs16piKQkCk7iwF5jpgdFsdo8DeYYNgkLrWteT5P3XT7dxMP3NEd4B6e8E5Nn7FmCvnwAnWyhYSiSn",
  "key12": "5LqioSw26RuvoKzUgftwDEWn14ggv4BWU2nivGTB82uSWqRkoSn8PUvGxbTrVgYH7Y6szkFurUs5uYtNPXfZ4tH4",
  "key13": "668Bfysa67Ukqr34dWwHYH6w5va64VhCzK9aWWBoDJXJReedvSxk1T7eAf4NpD6B8gWBHGK61a7wm1fkppb4D5nE",
  "key14": "3japbVE7PQTGX8AzfrBFe3VDxRTYnLvv6eMMRH4V3RcQb9k473h9Xyi89r1WDheuptVpsqgsZaUQpbyx2Jd1rHWs",
  "key15": "54ATj5BrFZBf5EW8e9iq3CEwEcaAHJXL4DWScjwJMwTSPcfd3ZZXnxEzGV1PvBSdXp1rjpXqEmYWPViRtiM1LArP",
  "key16": "4m6EJ782YiZXfXj23GwaCqAa9khFuvVJrQfnz4VNpgAooVj2zdjwUsEHVLwSpDx6dY2CjP7m8SNi5vm3T8md3huY",
  "key17": "2WR31qLtwj8SYJnQJHoekqNC3AhcNPNSgoQoJD7LhoXeDtZoiTjVEiF2SN45wR9iCUf66Zoumb6GjQdwEeJd4Bfu",
  "key18": "4tgmKKJ7JbGeKkxbA3HTTeYD7tVJtd94kcXcpxPcLEvbiGNVwePjyZ5wgbhhr2rXcFnHFbpSbjwBs2tT34XcGoii",
  "key19": "3bfZmByyUdfA15m7wPhKwznkS6EDGc3yG76xVfpGjBVj7bTWGnr3etWUhhCXnrz9Bdk6nAg9gXXs8my6LFCJ6MEu",
  "key20": "4VDzL4Xybt6etkTtgJSPJCMYENYLN1Zg7LNvguWBgpX8yuwhEwLcPcmoVxCXM8yQezuB99qGbJJarfW8Qe927nq1",
  "key21": "4jtEJcFejKJupfTahvBMHQc5CbX1Wv3VJJ12xomGCzuh1gxJcAAXMxyvoZstrroacwWr7oJCeYrj1QR4pmmYN8VU",
  "key22": "5rxL16fRjaKn8ijrBSq3wj9Ee7t73VNb1Lz21uS4wwsz4QarVHER1AhkZB1XpgD3cW3yJURm9Za1godeLvBfs2jm",
  "key23": "3dT6j39WtEMvo2BxYEoNJSNd4FB3ZHGJmKxAv64p6MLrN1soeuvrcL63HKjWFceoK7VvuGvJxhTpuUGU91M1VSAk",
  "key24": "5caUvFLuK9vF2dF1AvK8jJ3nzJKNN8uhePkcunfTknXAwVvoWBNEKf1KF3m6VYZzEMfXkYf5PEjteifA4L9U3Fgx",
  "key25": "5MJP9VXrFx6NBKWcqn3xHBPnoBkmyA2o973VxhPXtMjV3C4XMS61qFJsfWUg1dp524ae6Gc1wXHs56cFmYTwchdB",
  "key26": "5VW3PwvWNRmuXYmw53FWqHCTsRL5pxKc6PjrHkdwhd82T3ck7aRx7LDdG3D4WCgw2Gi1s4cpporkDe1BTdpvnw3L",
  "key27": "2rjA9c33qoEcqV8aDVYHsy8t86mjBVkcxXAhzjrXENxZQPZi8gFLLfazeU9Tkr96oyLaSSxnCgw3BQVUwvXMP9Ki",
  "key28": "4zENiJ7mwpXxKUNv8a7EcjDPSxh3vb1hqK3U82xUWShMANfEnvKBmtekhGEiphY3iAfAhyMUz5XvKzPkpZ8qWZLb",
  "key29": "61dih1SwbmyAoGSH45aQPyDpKy58MnSJMj8jf2SXhKsfArGPdavqXFT9bi36ndu4bSDvFR8PAZQ5FEpnWBNDpacw",
  "key30": "4KfiGofKP6YMHCvCeHUZLkzmRuhQj4FFWwfXmEpt4rAZXHfPEGTWg5X1Vs3veV9vqu9ouCRD8491Q25pFUHfxMXD",
  "key31": "2NU5GWLKnXppvrkEijkQiPwXVrFb6Lx2gtN7uc1byXhQzf4MzpkzrZ7BUrqo1NKKtWPNUuWidfVZfDgNm7LAmNFi",
  "key32": "3AdZyXSrVYQfmmNrLMCgiMyDiFp5DD9K9pFQQFRSB9BwXXMhXCG8r6b2myxLHSbPmXyjQJadWhYQUhrs1UXxuQK9",
  "key33": "3PyGDdfvkn9LxKJrjbYmYPkMqT1BczmcnGXLKJ8AMAKaBZCwrSpVcuy3xsZQHWwr4GoTGn9KyGwYnomPc3Pc1njs",
  "key34": "25BnZVPEM3vBHswLdw6Y25LLqYMnuEJjc5EvzscnVQQgkyM8GfdxZ9SCcjrf18v82k65nhFXRuNEpcBozsRuJ2Dy",
  "key35": "4LUGz3wmwBMZStBP9DN49Dckmt7vXk5fEXqiEhxVHmj8QsksSybpg16zP3EanvYdCAmcJ5S7LJAGKhp32W8eiWYX",
  "key36": "4BYjLzpAPq3W31rgQjdL7UjKhcCjPi7mK3FGibkBsB1uQPyAd2LFiHb1jtycJTNEChVV7ppKEyF2a5QSQQuEFWsq",
  "key37": "1Wa8yzEjxKhbYR1mgfhscp94YGi4RbayWsEe5MQVdfdbT4F5L3Eh3wK3dz6tMMMjb6AUtb6qirxGo1LdZJws4Rw",
  "key38": "2WNvD9DXUxQK5Vo2ti4CoVZUknuHPvHaViKvKbwB2niJtHdnVEjLtmQFQvwWAA3ExhvEcHnJKyQpAYMgne9VvAvF",
  "key39": "4ZL1ziGtRW7p5dxFZ6JAjD4Nx2HVh4q3sMZi1G31b5ZWTqgJPty3Yz43qVRaAziYsWJCSFBfgrj7AGUPMxTV7HWY",
  "key40": "3AUswhkXUPNoM3E1G9x3jNBZqwzhSBzQvT7pKbcrqABkTA7dvh2HNeeTJyM81HkijK94b5bRk6K15ygNjZkdSi3W",
  "key41": "4YXSK46k98nXigpCdKpwi9naP95x35wtpBGL1JZ9GsgFxeWENaWypMWSrDJ5dQ1RmbqxuwvnMx7qUDPQSauG57PK",
  "key42": "5VwXyvZSiPJKKgCKGjxf7r1PbCp2xs352oVq1QNQ78fUiHgydouaXbPbc1tsLLCuVKhiYRS5PNuZCyLaSz4ocXEN",
  "key43": "4aHHU39UKkwWD8ujreWdtig7okHnHAZpyCo9MEgiVBNVV2uRapwtyCK5GZnrnN3v2C6At7SGKJWKvKnydfFK9Uyv",
  "key44": "3NQZacdBvjCFPJ6VrYmeQtgi9cfzRsAmsaDpiHcUsXxW6KV6YbJqvfKnwyzVREzdkba7yHwiftg46h5cRwVZQPrH",
  "key45": "4g1gDSTatByzpyqqzZpFXze3A1Q5S3JhvV8xEbxR9bEAkVWPvwWSU6ygGGCda6WebHLEZsJ7agtPofiv6tWXU9AU",
  "key46": "4DWiB7Tjbfq5VvMPuSMbt5r19aiTAyU2UQCe49DoDKXdXmVLead4n5WrU1TEridw9JPLqLoMCf6gV742H2ccRVxm"
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
