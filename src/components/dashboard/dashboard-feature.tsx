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
    "2m6FiMpy8FCfW1XfoswFtDWVbC4UP89bTXPLmZXVn1qoqm5KT5YuFUsCsp5GJUgC8MYPAzzqJCDD4UoeFaSNtn6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NNHYPrgepp7JtitTzQBvm4feP7wzppZUckPXna6zcvSGSFfm15hjvR2ukof95AGZcN8MbnXNL9rVKXNbai8zrcz",
  "key1": "5QHRnTGbEgMMLMZPjtavjKQKQe7ZDhGhNsez5EcZtashUbhHhVw1aNVGdSpnEpy2HVVgpGh5neCJHopyVxt5UNEa",
  "key2": "4r1VbhurxezVjPw2uJmwC6nBpW4kaE2dL21fqmNAqSfEaw3CVXj3A3TvmfqBprqq336wb4RYf2UxtsVjdzQ99GdD",
  "key3": "3RihmD6Qhw1HA7e5oitpd5eyAdmytvPau9pCPpcCWhXvZLejuGmn5mAzEjwr7m8bqeWh3DmvwcsdGuDG8tSj74Kt",
  "key4": "2xAwBUgdh3rS3BhgWZTxhFV2iSn8ewGnqgQtyc9A4DUupyquvS8N81YxBdzfzscFKtyJTYWhEsaFTh4ydsEE8nfU",
  "key5": "336YBMfTgFZ1uGFM9WBvuCA37xuacadTP2rbkUM2HZbMz9GA1PZ7KQJemdT7S7REMrShh6gj3RL2wjKp7nx7TRve",
  "key6": "4q6cm5YGsbTKjbAiJ7rsarmsgPpm7WJgYdUiVEAXFHH3MtkqdmHCdxmB7wNcAgHRHth9FsWuBqNokftFFYRTxyXE",
  "key7": "43JmkbC4tYDk2Yay7U7m6juqFmfr7TTqSyzsnnEMRZUqo5SRLBQXK7rxYNH6sqzT7EED1iVY6Nisxyj5G7Hf4Yxd",
  "key8": "2xcYJDSZAKga8cAZg48trUfJG2VBeEm2ySQwMi2UPjt3VdujWwgJzx52sWMA9GoxcfUoFEcBqFWGy3F7GLxxj2Qu",
  "key9": "56kBos3k14rVWcydESys64UNCG5f5kitdXvVuxrUxLBMbmGVUnXFjsRED1oSvzpSExs575pQbPgQuYYAnvwmZeUW",
  "key10": "51xRMEkzZznQrfoVLNrcfZdwtKk2ubaMkutxCpF8rsgf7vNU8zG2VQNaizntKGjtT54JQ9vn1YN4WftE4AKPd7H5",
  "key11": "2HUtNBdy5yXY23wsAJgnjXiwXHRk8GehdvHzdNW7UCuhMK4QbDroxtYFe5WavR4K1GPU61nDuKamzwUM4wpzfBnJ",
  "key12": "5sxpgwtJ9ZUVio8b3q8mfyqFdmHXb6ePXRs463fbtLSeXYcKhAqmYJHDq3HdhYbv8YQNThcbF2w7NgEX8Y3U6edH",
  "key13": "gWe3Z3EysVKsZ4Ak8XHqb3cbj78GeWADcMwDUuRYofbHjVvS9AcgFa2bTU4otEexuPWXqBnp2bLzgJYJ4TdZuNM",
  "key14": "uxNVvSuRx4ibLLJcRSE1Cc4f57Q23hqvbjYkoaPHAm1qrhnss5TWXi9ma4FfsAbs7i1Za5PDiR3CcacXGn9JADC",
  "key15": "34DSADKZrAq4Z8h5qQtwSJGCvPexM5CEZ2pcN3A6yXhyTFaXSei575Dn7rrXdBwqpDxPTaw5KS5QoeVU169c3jBz",
  "key16": "45h2gExhuJc5A6S2ofctFUTm5giP59RrhPpdqkmwnrWAGT4PJXgJZEhHpBSAVikSMzjPqpN6TWvAPU7As9KUjndb",
  "key17": "2w2qeU1jpmJ5uAep5XUKqggCzBW98EvuXjVduLYAR1F2Ys2RguPKMGK9qLKF5y4BRvFArhDqRjHRM5mgwaqawAjG",
  "key18": "4gRZGaaQf5hendWZpTxnr87SsLmmjBM7QUmjHCMWT13aAtTHJRm7hgYp2Cnf9uAUK5ctfLAAcgaJH6to2WN8VxUn",
  "key19": "48YSpVPevJmTCggSfxLzrKqmE2CTgoAaZVnDLeWaiGSyegziw1EiwHgHZLxwbAxp3fNEtxTQpwdS4V9DG2RTiH77",
  "key20": "3rDMrJELJVjBcYzd3qGAf8kCho8hHL2dT2MkEKWtmwQ3UCvniBjtCFmDBCbnCzNQCXHuuqBxBfiKy3GFAX2ynbZW",
  "key21": "3LLneNmkM7mvwY3Kj7AEszdvFANyDcqQVYF746C9C2AbTPSR2HHe1udfiNd1EU6mM9ocu3uUjzXoLihiwsg4r3xW",
  "key22": "3EcUxSQRQiYNMxGtiRCZQmJnFFgyqSKsVsmNEvY6i1aiVGz9BvGFahU5p97rg5bpdQjnK7ANaPHQBCEZMiLp6N2X",
  "key23": "52yhS1mnKuhVMihdWvVJhPYmuu1nFtL7LChUzkfeuCnsNQNUmwMmFQ1eZLXbTjberewrpErR8XT8EfjHhM1Y2k32",
  "key24": "431qbjSZp1uMcbgNHkQwvwXe7MQuNS4TCf2279BY1c4GTMnK1zaqMxmP8ZFHTutSug4qAjH8DWfuEcPSfmWzwben",
  "key25": "5b6vckVL84L6qm5unxNdvJFbDpQcgKbuNntMerFe6CxNn8eMjXfZVAgj52H59VgubUqU3YDREzrkmxrSeXC22muX",
  "key26": "3NX1mgHzTdz4APbHAFaBQJG9Dx3vvk91Whf51sG9vVUreGXvNWccdy44AtbdpvFVbvkGNzbNHFrZGynfuNhPh2fd",
  "key27": "5xkqybUSwBQKMwhuLv6DfAHm6PNb2r115Bt317EM3tJGqNBN1jaTeFovHiBEzUjnaHtfhrWsNce1QemBMGYPrk1g",
  "key28": "4mWFhK6atiXDfMG4EWAqTZYYJwyRtAkLMruVm8HzbAaZcLoThF55HKxAA3edneRp6reqDqZtQCRukixBMYupCsqg",
  "key29": "45n8iikLDs5EXAJVx9qucfHhSUbhpK1SK7oBbckYZrpz5ksatnhhBeMTtxtRpcsMYoz3LaDG2kwQmrgpNzJy2u5N",
  "key30": "64E7H67cfXgo4aFRaRWaC5oEg6M6oVRPK5DhEfeg8nVMCx4FZkhz1DxagxYc9jkvm3z4HcGxgzbRRZMLbHSrpn52",
  "key31": "5t7dVF3K7G1BFu36n1xc96Dq5wPQLqr2dtQHHg6VCbMhdXnh6643Enftu6YU4uUMqaNsRaVCkBcs7FrTgLm75RgM",
  "key32": "5LuSuTLnCtHurHsWX94bSjhkPVBbLcNNwmBbPALq1gdyGtpMs9EgSBtpMsJRUfSJPuCxDgTfWD32yV3CzZV6X4fJ",
  "key33": "4y3qzkGKkhqevoRmSBUwZBMwvuKF3sEbDSDJWwWAuWZ4KaLt3e4u7682bhSQtcmn19f5QoDQVLiQ8v1hyEVLL9CB",
  "key34": "4PMd3pZuf2vXQtFeSoahe4RGmavSBAKyHJD13uu4qdTAX2ULdTgoVwimfxDebkxVEMgDheWVeEkwsHmMU4L55DZC",
  "key35": "37GwBKkDtDkE21wTo6tuFAFHkv5CQmYfCXJQDSCeGG4Muxgb4TRfmqE9pwR9i2nTzUQxa32WjkZFdfsZsWuE45L7",
  "key36": "2sHbQqCWrSGVWGekzBZNDoBeAtx2yCEZKLSTmmdYpMLEzJUdBv9nyPbNq4u5gfPAn3fLWnjntFrMLeNWV4PcTPop",
  "key37": "46zUkYvRjLBP6sZD8ypFUDMt2uy1sCSPDrgwKnspDGRPrt3foisUnP4sS4kjQbCbybhVitS8oSP1o1rVrKcZ8C9t",
  "key38": "4iDGG2Xkva281gep16kBAKrmaDUUZ1Dpmu5adGaG4m6R7fhw6tmi7No8qS84nX3LTsYjsjdf7emgu9XUwmw4VNMS",
  "key39": "wdCvuSiC8byHL8JnfoSAWMP44gvbiJEBMNhzSttmhESTmHv94yRohehhK6anfMzV9aXnYBNFFViRBmNsfa2YRjY",
  "key40": "2SUJSADNnJHfaL45uL7DAjYwh3wUcXDuCqpeKF5G6ToLjn9PWbHAW6JHc7GTupnrn912kqqTBpgJQ6bt3g2JxELL",
  "key41": "4CcTam32W3U8WtykdaaYEYZVs11Syd2EufiWun2mKZ6W5PVpqfm39PFxbkZip5KruBCT6jRhz63ojNa2e4pDrRuW",
  "key42": "5v9EoXtRcnRiBhamvzkJ6s4u2GCAuqQ8rHLoDWGQmZzU9YSioHVMM2dFSJFMaMrMThLdxrZjZpc3MJBQoaSU8uZw",
  "key43": "2zdJWcwc9xEX898WEpJkEB9CNCUWQikqRuHaaUV32zJLuRpJujPHaRu1EmwUXvZWDDL1HAXFyGwZ5MYYGG1vXCkE",
  "key44": "63w3h6XHPpryqQzQ24Bn4CN6ChfmWr1vKe4BTzzELam1UNfeHcPh9SJEwh2s6QFMeLGqbomM9mdfGpUUPJqB8BXH",
  "key45": "53xBJtvyacMx37Cj4U1ZK2t4asDEbxT8oi62gc7ewKx8P8UQzzsW2qjWTjUUjwFaeDieZJSiiCr6th7ZqjNYAuGF"
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
