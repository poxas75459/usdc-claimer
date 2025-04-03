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
    "37FNxzfjH51T8kDHWFdvMuUvKUzW3x7pD7x8hvZ6jZqs3hi9zD5JtDabC6aRM3tPWxER4RxxtgkAM9s2YXAp1YoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Phra8vGkn8Lc3mEqbMjMGFgDWCVYFZFgRDNh2MfmnFyG1QLGXd9xSxftbQVHKidxgMRR7w8Lhd7zwMfzvpZ883",
  "key1": "4uF133qKMKwWUuBvKFzHnbRgYitK5gBDvCD8H6bgZYJd8xCUt4fzSPBY3GBtDXh5kQfNz9GDU8J5utA3k8pnzVTA",
  "key2": "29HGEVNmd5oxmK421gdWkoJbisw4yCuwe7Gtqf6YNfrAAmCUtJTBcSWMu1BpvHe4g2PFXY5ddcFcN3KHiGcK2NNG",
  "key3": "5DCUeADHQbAJKoTPcBKEq9TxLvMnncZhXNRvXbLcyLzrH9zyMNz1w6KAxV2Cz6ydsSQZV1ijtYnQrfNJ1EhpgDHg",
  "key4": "2TtbdGXesUyc7vgWMJSoBufbiUcMDkmxq6qeA15bEVnd4bXZDUzrz9bmbibFE9yg1bvqXDWGPqkfeqwxMaoFevRa",
  "key5": "4MKPTfv8Da3FKvuAoV78UT8FFhvUxkXdf2BFijW226kBoVpUXq1HGBZ2WkrvFzyG8WKS4YSyJH9M2p1JjUTdigDh",
  "key6": "2fRQW35agqkCBFXB6KfvwgzCxHZRczCV6g14dHJ6Ueb98zxSsMUs9VQid2kPhjwHW8oC2CRA4zGDWrWi4yAQ9Nf7",
  "key7": "2mKSY1LXdunDUueos6J6zhjVq8XVs6jNs5k5gjNRTNweTy1372X2zk5XeGryQ9hJXUwgTUeB2Fb7MjUbiDS6xyXC",
  "key8": "65RRMTcgA7kefUT4M5rEkGS7LenoKMT4Q7MpuadCdBLduJLkiHzeXhF7qgE7yRVCH2ihHHigcDofioBBRiJTTGN5",
  "key9": "5svzj8fbLTQ8MdRf1iQCKWJ8PwsL5CZTgdc6XoT4oEYU88DaeWSR9J85SAQwGBTbbTnDQYoiMPSdw5RsYsCRfz2D",
  "key10": "45BDvRSnjhkZahLW3VjTqTDaRs1dboMtzjRQT93ZJuUgNG1mRLADqTZGVGkURLMu3HhNG96xHo3sYZgEF7eCqJPK",
  "key11": "2SiRewxLx8rNhJD5rY5JKJMD1uia6BPGrPeYy6kvCg7pvix3rmCCnUbMMvt9gBk6esEF5eKC64y4NEj7M2QfmtYC",
  "key12": "fPEtTdnzs8ZbkcE9NvUVEFTr3c1Nco2DeK4YsMTR2TJhHtGDZXmXGDE41NkPGeRXZRETBF5xGRuhodTcjBrAJ9m",
  "key13": "3EREJf6zVfzQyKM7yS75oUTNSnmFUJ5ttTvzVJN5Jdn1QFhMwUT8rRHdyiWzvTEEKQeJqRroZxnw9tTqFGSYgKEt",
  "key14": "4SArKdBfk8nzNNTiJms4KjxaQ6jBg2TRSiDgkXTqNSbSgQZU5cJgaBHL11VdvCKivE5Xpo8YDRm9Koh6P6Afw8mw",
  "key15": "5STdwNjLgaunv9wKufFp4JXF12ccf2UCvekgmTALyQRAEY4ApdXyaoDYVcLdYfhxCRpwk6L46aTcbGr9E6jWbHwT",
  "key16": "2eE7QFZJmN4YxL34KeuVcoxBy6UtDXcUgwvTtGQ4NKocC1sscxUHQ8VGdx9HcXbSZxkmCNcjXb8QvtEV2Tqz7nrV",
  "key17": "5nuciCw5Z2E4HXxcmgTeiNUvMDXsA43FNbbZKNmSELFN6w2rcoVLKLtiQBSmUdAWmt3Tu2uk4CeayLp6Ap1mq935",
  "key18": "5o8CxJLbHXcg1EqxQNjSh1M6umscyRvq97ytwX8y12xTTkRteTERPSNLgMigvdtDmTJ6evkFkDm6NxCzWtbuVJyD",
  "key19": "5hG3snEwT4u8ke2XY7onuYQA3Bo81nV9k8ZJppqF1VzmybXSP6Ppe4wfk7z87JoxVaihGHmkEwXZ45SuvUNQZ7c3",
  "key20": "5fktSiAvSkSqfWau2KyyoEVkkHqWxL5SDHe1yAP16vN3ALZSs5yxgcdHRwdpxeBAvNCki8LTYmuz4T59awyXfHKa",
  "key21": "vL4jVdfpS6bD4FewA77EL1tmM9NyXJqXoiTvd8S4HtNF9kshr2s1DdWb2tK7g9EdkxSrEpPBDSPrc2gx4FstwWw",
  "key22": "4SHSKGLzha67LsWL2Q32i97PcVr8ztoBE939Cj6jWsNubdv9NZ1FyHzyjb8vQG7UhqpVxJWhTFUQrrnC81bD5wDS",
  "key23": "fGRzNwZVcbUfStwHJdrPZyobNi7pzMaVANCQDLZKab4Vr1MsEmwNooQFuBrPKsVtRMZf19sKqErvMpxDVweG6w8",
  "key24": "jgGvfkzQ6bx8JSZtEVaWxsvP8PzwEafQ85CMm7KDvEpVeMH5kp1sFwr5CGMXRHgcAYmk5VJ327cDuqGVqms46cL",
  "key25": "4AfJ1CVyG1vu8brvUKBw3ivddFYd4uJ1UtSpEZDNSPwnqMUBCcbw4Gmq85X51hrfjxAHuY1MzURs1BSq3vRLBCt6",
  "key26": "5yTAtjUAt43NY2sfCPj5TEzy5PpbnXaFkmzRwH2C1wyDpgQ8BZLxLeuXbj5kGtAsg4Cbj1q5Q8vem47YsWqsJA9A",
  "key27": "63kwjKqF2J8zgYsbfis7vn6WzS7gy8PGwLTrmwomv3LiyXuVrY3yFAh2KvEQ7HXPZ4ZTEdtegG6SZHPN1LYjDUAp",
  "key28": "4gtX2Uum5RaUdHzFQCpdUMvkTj93zEoopaFSiSkAApLkvwWwBwxXqMu8dKbPmRnr3LtC55fubWXN2xosLukc9nMY",
  "key29": "t38iKj9jSEhrucErAaWwGuuNAMvYsizFvuvT5ejqaQPhCbtSe8ygTEVE76dKoumazqgQtkH7Jw2TRoJ1v8QSD4U",
  "key30": "3uZBknnPG9JWkRmmjLtnwYXnFk73WShwr2udFbP9iZpyRCkMLMm16h767k6ryXLCvn69E3c6MLaH6Xrit4g88aLt",
  "key31": "3NdXgtU7b6ZnPsLZX2gCvuSQgY94s4AU5Fq8kjx2zSxDRPrrYDsjgfaFxhEiL2udsZSUrGUCikV7aGCHQ2oda9R3",
  "key32": "3VnEWQKN6EhWFtL7CyGVHarNHR4kw9jgbE5ByJZGHFQJmorcTjkfxRCT2Wm2eFTRGA5QFhpdCS7BrczGkMh9RRy1",
  "key33": "35uiXHtUDNT47qq49ASkQr7JXiMG5bAkFAFtxr7TGWprWwgnwAhNnvJfRSPQ4JffLux7xJtxAoSQCEbmgwospfmy",
  "key34": "5V73Go4kRGbx9h5erieWB7SMwuncQeBnnKrWM2rBcay3CXYmzaZ4yk5Dc9QcivQ7gmNC75nXCKudym5JygDjNPyq",
  "key35": "65j8hydsFNHCUqUWnLNUWzSYAX9h8x3rpLbPdRnx8LYntYmfCRgmgc8G3kY1rsJ4kfAWtscfdZER4Jd853GsFkse",
  "key36": "2STeuRAKf4bFodu9cavCbewcAcarVqvTGyXC5AsYJ9LgNac8NFfj7V6iFs5geNJKm71gmYPtvFiSmKGJtW5aHoNg",
  "key37": "354Xdkrt2LG6xhyETwGHTDb38QU4wrgWWSSNe195PNppxGw6ZqteF56oPfYqatvbgrZUU8q9tNidL4bUn9axTAdU",
  "key38": "3V9oteztbJGnaMndhqmRpJwrC6NH1s2fyYnupqmJq8FqCrjSxoDdFk65Px6VhGCzPzPiKnnTncLzBr4ApcMSzHmB"
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
