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
    "2fHsoLWVKJFJgux3VuRsJN6isfXs8vDGrCmfdnDGjuabgwXZqy8CwzAjZL6ZqQqPxgvFw3QXfEyfz49RFfksCE1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pMn3YFAwHR3VFi7kiJDBvTky6ymyAenac1JkkmxEHf7Zhtt1N84NQXYHec2eZZ3dVVN3H65pX4pH19Ajer87DSJ",
  "key1": "3PYiSU7KryR1b4VSaa4f76fATH5pEdktqnW5uYjh5VJvpF1cEaxzriXnmNVWnhSuEk3gxMKZcG3XTAiTQwvSJgWZ",
  "key2": "2PFXJ2aLn2VzJKrXMD7fySYQYDZr77DABJ73o24wZ6NNu2Hfc691tLuBisXa7sryZtCMPirmkaeVx4vmDb9mQXr9",
  "key3": "2iiCLkDry3Z2GCuEmwzC2utYBRZboDK6hRFy8Zgt6e23MgAUXBRCDey3nFJ2q7N127MD4CKCKLPMbfjNnM468XFj",
  "key4": "4WHuVTRgPcM1DFpFqPGQmgiARecbDeRAW8uXtdZsVq26ZXXSjNmmGSiLboH7jWmZx35U3L4BbZPtupkXeFuR5oJC",
  "key5": "3bpvHktn334Ezu1kMP5mzAQqSqXxXXUBnYLvH1nsRcW6tca6GdXuSMdVvn5drCd4RdXWpdV5apTDoit7R93TRzxq",
  "key6": "2z1SX3TVo8exWqYEqE73Lpbccqc4hA9sJadNk8WUp2SiigLJHJ78t42SP1LWjipPSdj5Pto2uqtdMJtxsfT7tB2M",
  "key7": "2QtZhVAtwsnXkygGS3unhpBgpxC1HEak6S6rzr6PX4HudmmcFsuqC295Kcgk24tSf5Q5UcLMBB8CjJKXBUNQ1mo",
  "key8": "2E9CegEFQVjXfBm7Q8gPzjBaHZjxKGYXJxEPCQR9T2WvWg8WaWmbQbmpxY2KVnHvR1BAYGZi19Ains2svosy4HeX",
  "key9": "49RS37yD4ih3Ce2Fjtng1L1qzHK7f2MUvW9f1C4YmfUwLspL3hiSncVMbtJDW5eHgGuxSpAWLuQZy4FR3PmbRkBj",
  "key10": "FcXd3Xr2GHWQF6EMrseTNU652r1kBPixhwXXsG8MhR9yvZXkWzuzTizSsyUwzAT6AUepR2EBC9Hm8RwZ1nWGa6p",
  "key11": "3r5joQut55MfntDRAsVGsWKEjipnmvQdfQ4tVK98VodN5hvtQU3CHohSYE1fNNyvL83niDXQ1HgdgsHyGAw4oq44",
  "key12": "HRVMKGazpWqhCZWoWtMrhk963yyZTyYfzLLSrSDoUffbgAUPFUvcsW51znpUhv7MgvydvWgvdJJySsKbHC3YjNd",
  "key13": "2DPQTby4zdSnTDxYURcgKdKTLRNk3wXxpVh6JyvLXRA5La9cknqKoGJ3Hd6y7T7kbR91TP8jRT9B4FH8tc4gQibi",
  "key14": "3jXsY9VUjTvVwk4p8ni8pHzLobTXq7NNKD79dy8J1m3r79wNTUzUuvNdEfHcJjKgsGVL6jNZoqERnCr8UKDpNF7t",
  "key15": "2TyFmsduSQYymBapKW6ynjU5kqU5h5UmLDrmPCkbFGBrhMrew2RF2Zqgui9HbAU5dgXhaQfCbJXu9QLEocCbHrBf",
  "key16": "4hmkj1x3NmE62M4H2ThEvudEsAgoXLy5cCzcQDVLZNCVwazWQtNtJohFeECxYW8vmuZ278e1oLKSh6XPe2iKfHQf",
  "key17": "4ZX1csQpDrwuZwmFKiiFvcvgLzqPe23P9nvbyvizwHKsvcsgrEP8qMR1nMi4DoAk9ywfZF9KE8aYRiVTWvqYCwGA",
  "key18": "3NNxHc9ERjhtZnU2nBAEB8t6qUJeGcYt57A1FRmuFT95tAq3JedGVgUYdJuzSH3Z8H5LSG9u7pvx969VSUq4gEC4",
  "key19": "fN9bPT5bQ6bjXkUjgMEYbpotxkTwXU2VnWeB1E6UWVSaqCkvxWuTxrj4WYPe6kXnnFN4v3xy6EMvbEMbXZ68vK5",
  "key20": "QLnptUmjnUG8uRMKyuA5CVmiFS3o1PtHBEYxtwqRCtjdFomCsWyRJtcnNwitThJLPGatCKmFWhe6BzMcZHrMjSB",
  "key21": "4JcXZmP4xtgSmsyA6qCyvEsurKB4sQMDYTAFMdRJnYZ9xWfCDgGhcbzC4PCnAMu5f1ZPX1J3oUiVwZaNbekfPYxv",
  "key22": "5jJWvfvNZMEbhW7giosLcNFPG4GfKdG7vwnAKhGoo4ztnS3WEu985FcJz1KrUeio4tQuwitos88LmqbhMi6XddqK",
  "key23": "29G1C68knMtcuZ9tjAMbGwGxRHprrdZ2xHrMEtCzrB21BFdiM3PD4oHGxv99yCVciM3xTisdDsc9u8bqwCBVUAHt",
  "key24": "56yP7bAhMA2DEX2CzyNfodzR591tg7nEVKBiJq8NBAfdRxoC2gyryBZCbEoV3BQVgw8n2X82WKn3JND2sik9iWKJ",
  "key25": "4gLcB8fsEwA2XoVPPkCaGEGRKT9P5Vpy9smrgES49y2A7FwpGSuGaBhV5KwXnWeNTCx2ZSX6nsURESnNiBd971rq",
  "key26": "2MaYnM7YAj2qh996VM7dGjydqULcCmKH7efws5Jars9P3tWrbe7ZfgN2MuiFxBNLfRTww2Ss9R974EJGxPMFwDBm",
  "key27": "2P8zqb44xXakVZtEZf7BtBKnbn8D9P3H9UnFt8BHbzrE2iqPoZFfrUR1wWUHX7jdXUgPKmj64HeGUCHJ6Jxm1BT4",
  "key28": "WAa9eL54uaiXTUPmND9SqSytefYhV1b8EUmYbBv9xsjSXuzLMeT8pRKDUR2PktTMPpukGZuaDXEJ6s9gFTyCFff",
  "key29": "nFrqR3d8qBN9bbeSAKM4BwAFGGKd8sHXr3dsF6fi4PL3ztoSPowW6wRgtLgap5fqfvVvuwWhso1kDXYJGki129v",
  "key30": "5q1jAG2hGEhP9NZgqWhbMuh3toYbzB8xe9cqjoCttPPmhqx961iDiLDyb3BF9dnpxWALYzatnJ2v74VRxstVSY82",
  "key31": "u9i3RPM3GeFFfKVavCb1hx5hmdBaM5deRxjC5hpWkkqhM9yu6rpupBKp33UpTTXrxedhTVRHbznBLytjvDJ2AVv",
  "key32": "2mZ4MzoJ8LCP6XywouH4tTuwpJeowobLA3FYF4VM8ipN4MRC7LsFjB2PdE2udqx7z3WjCzSuWmmajojHh58VtNFv",
  "key33": "36eHpudJ833zRjT7SuGutgpEouUrVbwJimJxtaw9Wg61CPs2751AJjrv7ZWssJSudgtQVrhsCEVr6AcufKg6gHN2",
  "key34": "5A6uJ1yxQfkUQvbMfEs7hjWhrDVCXrvBSomb1xvZidZp6zfDrFWxkHHEKs84j95NPcKj12VWvkDWZtK2egGhngnJ",
  "key35": "4wVC8yygWFxNT5DidwS3BwNtFYGS9n94HB2LXyitnvHWzWHrjtTPv4zMYXDkWXBBhDzZiz43aShKRidT7WYCZoaY",
  "key36": "3BLrf7oEgSdGxUDSFXa9acKNXQXFvN7kw8JaiUaV6nTxYWbeXTci5F3FjR4chXx6BtuuBKGUaQtfgUqZF65upAF3",
  "key37": "31vHTL7YLnGqSfcMuTHMsfUc8mji7srX393AAMMuDiHVEpnahWktaPaJxpRRiSc3wf8HidsaMssU3peFU2eAvMAs",
  "key38": "5tx52orhT1ptv3TTaJuSaRBTPMeThjCVtkPp11eHXdZjeH3zpR7pi3usUcYpNRMMhTNcec4Ncj17gUJehjag16bp",
  "key39": "3bjbSq5mTtbRWxcS2zvqf8avqNeGE5x9bWVACmvFbtnBQVfgfb8W6Syb483Dksh6Un1LWznhcYGrqMdmRZsREkoj",
  "key40": "T9ywVhP1Y2hpzpJb2UXURtrtLjX7Ly2fD5YNpgVb2s5x6DNGrmHMVa7yzivooo3UKDhJtzcnBfHD5ipdPCH1ZoB",
  "key41": "mdy6PAtKwW4scD8uL6ZKoz9kMiVq3RspPYZNiobKTZZQcsQsmWB5y34o89SzKSeC2qYtbH4V39Lu1SPyJxtby8G",
  "key42": "2jNBf7qqo9G6Nik7yWKmgXKpnSyRnjvUzVnqu6V4aNswrpaEq6VoA2fY9XU7Qtfv281smaozUKNwNXNXnZXwLXqz",
  "key43": "3jVHBRJ8VSnz6sd7HVgfzLkgZcvuUTYvVCrnUJteajnkhEy552679G5FwgE3W1TTrZDsuGrne2czq7YVzq5LcMCo",
  "key44": "r99vGVQUNqXh1WMJySMg2APB4cBQDKahAfPYETkmLGgiF56s4pqi5HRuJggiyyBqMgjJyx3fVA3zeUzx61KkLop",
  "key45": "2XwSrTFLPfqHsuzBnUYnVpRBC9j82JDJDX44FFVzdJycQaXE8XNsgPdjSSCcu5aKW1igJfBW1gDNxs14WUoGju1Z",
  "key46": "yUqH2G2KdQ6sgTjzgMzsaKd7jryTPXsbxVa5Mghq33RU7szpkPZDFo1uLcW3x6PCcZWzKWFkZsmADaEnzswkiFe",
  "key47": "2WFNEGUSjHnm4K3FRYxCWGDjAVyxtGmJokvWCgMJMkACNoQFsce65eVfKdpj4q1u4YmF7XipRJ8bLQoLeh5SBQoR",
  "key48": "DjHJsiCFGf7hqaWEtc9vYsPZfsXrahmdcRAqrY2nFs2rFPsBesQTvU2X8sQvA7xmWnY6x1K8KqZeZRHcd5CFQyi",
  "key49": "5csKfKeyssRAFcsYcnxxmbMHGa31dEa9HfB7sUVKhX6FjUfPNSjXbdLMm5TBVPyAv2XcNAvneyy9D4KnYCerXpJ3"
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
