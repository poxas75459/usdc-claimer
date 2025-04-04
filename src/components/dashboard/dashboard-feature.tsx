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
    "5HaMUFz53K6jHeL6bBx53sQ8WbC7jcFMmi58zVPGKCRxBib6JLDx3Zt18yxsVtGBwvyXnW8dbAkgWYVdMkC1qJF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HVEmWrCq1MhHYFbPXsf8jLLi5zh9oFx2X4xD6oSxpM1CSPephAVS1cZEHqgy8Sh3GVEkXEM9mC1oVVaESBYtpGQ",
  "key1": "4AsdzAs7K9fcziTSdrPfGLfbEibsCafZYcG7B2A9YKCub5rvsp2ebgmVoLtdkyd8yMv4TTYc8NYjnPx6w6uf7BGo",
  "key2": "4AGSkUBnjr5pzMsFy6tHAubfZerokGPFVdtxDSMMer9eqXzKqR7SpS7h8Di4zNKURQRafMt68Wqa7jCWgyX6ZD1r",
  "key3": "3bMbJeEwHqMKncL9BEZW5qK1qqUkVVjHK57Gt2YXtbYgk3MjrMHc6uVPMZMSq6NinejGYcyFPXzckmap57R481fS",
  "key4": "JbH3UC9AArBXYFYAxZc6FD7w5W1bsAikuBm787KnNdh2asBb3DoW5ZsSLR8TbRneBcEv4nuDKwEiSsw4znXcMGd",
  "key5": "63eDhtYXCRAV8Ya7d16tiGe2k8foPjcsWSWmquZqmsk92XWs7sAUGwMozA9U2EmAEJmfE8mUNQs1cdcFE3RgtMuH",
  "key6": "2Wcva5cLDwMJT5apEzad9yqFXaFL5n6sv9KZehSH2vTnLS7JgyeDNDfVRr4K4EmeM1snoQHGkDqqq2fc4tQti4Hw",
  "key7": "3K1r8bqfSyBFBjvFbGtty73Gm9cvfRed6BtH7XnufrBXtjYGxbLyFBpjf9m2g2vbMgupYUf8RkJGpXaZV9bUqUDp",
  "key8": "r6Sy5wJBC94apM2JxiJAAdacQRpqCDMZ5a8STWCjef8MFcU21veUEbdF51gYdjwRSxzdTbEiUyXBghnoJWBmTfd",
  "key9": "HhrUAieu2Ymyzs8iqN9SbX9L3E7htKBt2SZme9bKVf59tauuK8GxFZaQGSuMdVSbsiyMfTdUozGz8rGZM22MhvP",
  "key10": "3261U5wiRvjnG12YBCueAStxhdU1xeb6CEvPbBAyity8qJQheFJhLttnJUVGHKxLMKPNGFECFd3Ez9uQaeJvK3Uh",
  "key11": "5HLvjMmqCigBi4rY6zwJpamAVWkfSooUemqQcnKJGVn2uK7s2Q7jMzd7kTGJUXEvoKPeUJyWs3UtNttQwY1G1JC3",
  "key12": "4KXppQEtoHuUzvokuJGeQkb3UdwwQAt2P1iVjqVqQGHc63QpQNcPbpLHFaqWFgbEV2hzjL8K3ACP6b4xUAPgnNa4",
  "key13": "2A5PEqBsjYNyThdw27SzgysJbmad16Di4ox9JJEZyegnVeoSceDRtbCFCpPvudyXnGHVGWU9JCZ9FaK473wtC6Vr",
  "key14": "5LnyRTgMM3PLjx5Vk4bBEYsWBzzC2Lgqs6qt4Tb4MGQYAADR2uGEqY2ywvp8oiPWMj55D9PU3eCLZJtderfj5SPW",
  "key15": "3REikNnhezMm5uzb1ZMHubJTodAcwmzLU7DfZqnXgHdf6RAdhuE4cf6f8WKMQRtyVyWr6fBjsi6bAyqRNLtX3b8k",
  "key16": "bWR64W5nzSMiJ14b4knuJThcbu3vzvpiAULDaKL5XYYbhH1JWexPetwdC65rjxyeMuLx3xhB2wJjyNS7Wd91h3K",
  "key17": "2seyvHdWsXwiim99yPAMJAWG6zVsJoU8Hor1pbTo2BYiVAvd5hw4o2iUX5dGdgb2zRoYK2hztVLkwg6ws313QquV",
  "key18": "3Lvv9Fkctp6LY91KDX8zvddvMFFdGbikVgwHcx1ewsATgnAWAFEhncGFobEMtYwxzY3AwMVWBuMLftZYZzxPy4iS",
  "key19": "QHzw4VP6ZVpEXHVWJNWph47ciS2Me8jZu4bPASfLwb4uzKusjYfpA1cuH8XjgCK8hMzkvTZnTSzbUkkGEAt13iP",
  "key20": "4rhJHSBqdPwAGJ5YNSbF72WW5Tm9gkA4DqzrBJwGMtWFqym74N2V5fte1qPs1gcosXHiqxzQzeEA3xgbSt8Dex4W",
  "key21": "2bFTEhEGbo6HTxkGfrKcS9X8cStWzLs6BAU5GeYbDBvNy5jLnTpdZj8Vpizj1gxgqDxgcMcxstuDPTz2Y4BEwq2L",
  "key22": "2aH5jaJDqF1xmv3cAzDn6wJiSnWr3JTL5gKYxiUWoYXi9zAaKhkhGkPYGjGRCpSYgKGPXaVavohgg9Pt1Jmpnjxx",
  "key23": "2pVad5rKd6YCmWJrpKpAM7g5RtUyBLDuG5x9SMtyAej7SBqJRS5jvFNwwUi8Rsa7b5krfv4sQCVHcEPYLEEfPfzM",
  "key24": "57y1iCaUDP5R5T6WwkexwB2XM3gAazNJ1B24MeVmW6X8o6NLfAPZdbpCidaUuWHCdBJ8VC9QoTwS1HvBbQzHxs72",
  "key25": "35n953ksFsrA7M8Q4dfvLnGKWy3fEDzqyhetB36fRw63hwyFVT7R3hq5RAC3os2LJat8swdHN7qeRHY5PCjcoK1d",
  "key26": "5VSpPdVddWuh8txcRR9rMWNN1gp6eJS5toTcg2VegCAUVmKpe1JkhBWr4dCHtLzvcwoiAHNSPLZDz6STiZegosRi",
  "key27": "crsuzT4m2QQnziAhoaDU1ZTvPnrboReEQeW4HEJxJe9fzJgSGr7CBPwgnSBPFQcWNDat9sf6DjjYGKH1N3tz623",
  "key28": "2tuhx9HDr72hUTKPQSEUCJRZEWdbHumifTXxoyrkMZAvK7AKp3ao5ufNRRQUsWjeNZahzKLaTFjDSr21nJdXGvaB",
  "key29": "42D2qCN563DTAZVWT7KjH5DKisVpH23y2565ZiR5zYW2gZcGKKfWyEXvtqGTADpFaz5vApANU5RmMDjJaLjARrns",
  "key30": "5wusgMcHkcoKMKYMdGwDxTjJqQStXViDezoARp4mzCE2DLP46mJ8WWrxhM7wziiURrRFtFxUjViGg9ijCUTA5ttC",
  "key31": "3EkRcM8d25KBKpjHgxHERe1itW8AyrApW9k7ukgmx5t48V3hduh663TxDgrdtMd6um9kkBPrC6iGEHtBPd1JMRPQ",
  "key32": "2fHmY8cZWNLJgjFc9H3MX26pDzuCx4SGMCAwZrdQGmye9PVc1yc5asQvyzm3y287kAioekaaD6DVSzNpoeb5JyjT",
  "key33": "3vJbH8oUYzt7WHMhjWa53nrBwkvu82yL2R769drnnDbPfc4mxLoo8FfTCE6K53GCWi7Dt13ybrgWgJYsUnSwYmvY",
  "key34": "hqMQrgGbQbDZi64Ymk6qKcZYb8Dp8aSzkjicsstNM1Mkw9bp7kfa264rFbD93QfGTALTMLHkWoD8jXxhob66bcG",
  "key35": "4Ma6pgVzVFPJ1x5qF8ZYYEhkx6dP7tpR5C62MTEwvj4u2W4vTq9LpTpUzsLN25YC8KqsNydtUzYmvePSiLjqathH",
  "key36": "4Co1aw5sZQmzp5MAezox5RP7Peqy2VPgE1sAor5erofLW8B9evUQbYWzr5p39M2MkN7TqnBVeaGbw747FBAMwz46",
  "key37": "3xt2fJoMQX7T9fEnJ4DdBzdRUkA6izksr2jvpk2VZM7TNHJq6zKsyh6Xpw2D2nQtnmNqcRboZztTioQai3ri9eZA",
  "key38": "3Ep3xFaspo7hvnUYwrviRQFujNLdFjUVsZGe3XDxsz6WG4yp3JfDV4aekZ4s8Gkg4GjGdAa4PxLcqyr8QDmxKR4Y"
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
