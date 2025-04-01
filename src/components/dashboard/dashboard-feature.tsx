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
    "3ALsWT21tYZktiCz24t3Fxxpsex1ZGnofimDWP9sN3zzJKVNVsfU7GGsJXjP4dXyzRanwi4AQsWD9RJzCfhE9QmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xgp7ZXXF9orT8cbGRWcwkUpGMkVur1KHsC3Ga2rx4Xx45teiLgofSrhixxmppA8Bd5hurs5phRWe25cmTWMKgYy",
  "key1": "2nG5TxJxbD3vNpXgKLFnMpmYCh8ANX6TST5idGf8Ltd8Fff18owVN7PHnSUJD1BYEq72H3fqDwdpxaGNF5jrwkgc",
  "key2": "2W2aJfjgqXBiC8gvrDuHe3hGP7EaEBeV99XsrDWc36cxjdF2PKbPgg9f4Bbyxi3H3668NHAm2eRRWUy6HdqMJi3U",
  "key3": "yctMUrBnRbXbUd1KPFSTV3mYy4DeyihyZ18Py9PgK8uty48UXbUTBn1LA1dPvjejpFz1Qhk4VdRNthbbe2oPBna",
  "key4": "pVwCDbsZmcHs1PC9WeCMYuJ4QtN81xej1QLfMGXq4N7G71QizA7Y8QvGJubknkuRSoDmm7rsYGtEoeKMaZphUiL",
  "key5": "3uzJGUmFujP8V1xxUAbtzKVSfa2HYG8PNdeQ5qyBii1RtwQtkQMWRFAiaXGp6QHcFBRKQKhxh2D3dLbwvm7EK5PH",
  "key6": "4mbuneupwm4QSxoyF48dc4f1frF6zrc1pDTY55SJWwFXP72BQz9rGp3QNFNvUQUoeBrhsP3edpjjLJ94SJCj4K1v",
  "key7": "5s8KuXtENUgouddXeUTJEyVnSYVtvuH3heHJ6bFZoMjNXsA8ZmwDmwXaZbmAzGhuGZ4wQz64EiFXz6tugUaEQtYM",
  "key8": "wsPfYFSphLrD4wiS2bLh7L3Cd8exKiwGgbHCp43HqedzsTxK5nLpskPdrqQeguYs6xmPydwvdCT2jau3B9ckJPu",
  "key9": "5EiveiEEpW1aPsL2xmaR1Z96YE3YppkWqddAKyMc7t8YXqVWA3zFVs47QK1gW1aeK7sMcHS1eFjbgpxjaiNTDDtY",
  "key10": "2vPjroVa4691S7xpiq41kUzqXvrtRagcFSxgNiSq1ktGbC5crUkgV9o5cCgTMq9ydmenNuXfhhjibA4mGianEZ66",
  "key11": "5VRo8HhJk6u15tuMqssicM9BWutkJNwQE9WYe7ofwWcwfWoLZMsTULzeXeEM1nTVZ8HULEehqq7mUxUT8VnjwAkz",
  "key12": "uqqY8mMkm4xWYCeSu4K87b49Dy7RWoMnGzcF2Zce5kirB6Mk23p4AXxJjFnop5Ag1KfQRQFTuvyaCdqALeNuSEE",
  "key13": "86pL6PgP41g76ijG1qz4gBK9RNxX7osra7m7QoMHo4g5wkVrxiRYkMYQ7B6tPgQdC1R4RyTvgdPnk1HK49dDwxk",
  "key14": "R2BHxnbu9gJejaoewoMLjZCzUfaBahnCYJMQWsg9cAtPvbCmTbYbi3UodpTjiN8FzHLXTQmHz3QbBDrm6vxnHgz",
  "key15": "4YuhgsYD3qiRVMcPFGisvruzXQBBMKCAofu6jbJHcDuFiRVPkkqGHJUuvA9dGwefuTahju7vVLcg7wgg2bGn3JTB",
  "key16": "126ps2aj5ERHiS8Dko7thnmWtq1pDUXFF9BCt2biLp7Q6t57cpLRF6GFLsHP434eoAPpXGJJN4d8mC82Z2aTb8Td",
  "key17": "xxFaLrB9YU4S8vj268DsQvPTtT8yW1Wrwkm9wCkmce8QBBeZoabvJao1HGD4TQfBq7MrmoFXdwjJPgsJiZFRGk9",
  "key18": "5fYyBfcJTcvrNcq6JwscYTq2KBfoqnrE69NCY8Gk6HmiP9dZkrB1CdQ1RWR39bTF6cABGq7SYbtaca3TUkSvwthK",
  "key19": "64dv4M5pY5KK7Hedvebg1Kf1nrmSuZYyzo6W34y1z8XT6BY42gTqFffR4MZUok5cwu5maj6N7Yimqfge4RVjgkmv",
  "key20": "486RsWbMTL85ohzN18hgF4trG1sZUN683SyuhTgqnmDpPVduq3e8E7d6Kqn1s6i3wYKaayirpH2KS6tmzpkfPdjm",
  "key21": "2wzYr4Mf7ZrvutpKVXbZrduV7BBMpWZDWyZsx27kqFBH5ET8STkng2F2QoFyUJwtxGwFw2R7dfApgMCHNXF5UqRH",
  "key22": "oSrArjo4fcVPYtBrWzwsDZUgefmFg81gU39d5chuApq28kXA9n8XQ1apH2F6nzmWGE1JFhp6EwWekkVHLijy2qr",
  "key23": "2Xvsi8aqZzEt5Ls3VzwGDqzaciJT9NmJbJskJMxYSrhWhKHauXmv6VP8STbGxYLzMDuaRPgoUSoVPomitLANedTt",
  "key24": "5qqdHD7uN4FnTnAxz9aD4zRCeZyeeaDXr7V7gobZv5iN2JUyhMxyKZuF9BNFRp4E1rqag2w3o5p6mpKYj7WHrrJ",
  "key25": "2jWrcpgKEWFpLwSbwGzi19gVWeaSTZet9a5DLV5VaGCFcTm4urw1HgibCpXabYEpeyT7hoT7MJhDivZVpLZuun6t",
  "key26": "2wmyyDqTCoRNefYHMn3MVo4XUxm8BRh2VNCVowgQVX7voAxJRZhGzB8g2QS7BSAPjAEiayDPL417X7mtPW5c6DVN",
  "key27": "5CJoEcvfZYPMKEDNZmQqKXKYh6zTtR7M7551rBTpjuES3gUKSptuMxMHdK8H5W12PFR3q8W48GjkjQFLN3RqG9Mi",
  "key28": "34Hn9UCrETHzFM3DpCUqGuETsKkhenXmy5PSmNGzbmpxFkFSjroZtzjDgX1PeLUJtRDpwpLELCMS7kJwFRdDL1Pp",
  "key29": "5uh2F7UFDcgf6iT2tU4ML18wSX3ory7xg51mwot3iDuPYZmLUGsXkgMn2GwSrEz1MPVFwSyrjETh7wZqc8Sdw9e7",
  "key30": "3NrLUCgkaPtYMeGBnjUC4NGvQJLJNcRpLnAZAbfbWjdUcvR9W8a5esgxrEFjPc5ooivPZhPLdggJRv2dB64BjKrA",
  "key31": "2jHxZFfvypBdYB6o6GzrzAiVq4u6xb3qavzBLzdfSCggpsawWjweCAQhQ5KrQw6JQdfBKqDsUSKjNPA9Pewj73u9"
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
