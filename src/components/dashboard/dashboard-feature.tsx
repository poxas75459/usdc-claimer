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
    "27uTjqGL5NRYt1M2guZ1fzeV9cFV9jeHH36GmuJW7hrKVvhXNMbwNCkG91boVegEZEGuvWbBM7AEvu8vXh28GmtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KtkNU8HhyeLHD81MWC6yFkkjfMZcQntafhtS4sTHZUgRhaPx1S4kR1kkkQFpspqmbUpGuF1ypM52LeC8fhaw8iV",
  "key1": "A3o2TdZGGgDa9mmdTbCuvVRisNXJh28zDdS43ecEaDiFYuPDvbovTLc2asmw653r3ZH7e7v5nyS8pZPfoMCxfxj",
  "key2": "XDKw3ebHvwphE2d6qc1iNWUfoCNcp9au7xtwDn6nwoC63H4qdAW3B1VEEkhYbihXr6weadEdG4FNwDry3sVhud4",
  "key3": "2PY6qUH4tFBDj4jZYRbAcasE15gnxLKXRSfzXzFxTkiK7j9y6goqapGUsv9DcJHKLYsx3REAgqXh8XGcojiPKf4m",
  "key4": "5vrG4dBazG7D4foaqUqd7tciHv42q68hVfnGRHStAPDyiBMMzuHaUGVEXEexppEdfTAbBL7c9Lf2NPZBMjMtJjRE",
  "key5": "4BpkFgvsXHcaRsvxTAfGF6ZDiS32RAVTnLCQtRuJX9arVDnSdJa77xudXYwcuA6oaaWMgqb6XaWFZcgXKe7soJo5",
  "key6": "4x7QTsxDqWEH4DpeH6EYshBujuJks4HgteG5VibxrstQNbvvmqxFffbc6fLFSGDMGiGDAAwMWHLXDmbSKFSxTs1r",
  "key7": "5rLfPL4UiS27EEi15AqYt4zjGYkJzP8BV9mp9s1Vp1cyhMNncRxYmokXisEy2A5yJWLfQEhyr4eMqbATm6USiFLW",
  "key8": "4ZJDcpSCvsdWqn3BMC5bDGyAi6Quf7bWD5GcuZmJzrFJKAnwHE2J1rVgh3VRVZD3nxg9e6kntTRgqBVqPkeDE1Hr",
  "key9": "59K2dSc9v2ntsvK3LNZUAe1tYKxKj5bifBDetWmZBqZh6osHimLh16yrgcDGjVc2ZvufpJF1RdrdzEdH4tKePzWj",
  "key10": "5p6x1UTyykxq7cP3RQ5X4riQtGSxmNnjVFimcWbc3T1xECUXUcU8eaDvpgqaW3AY1d2gD9NtXBisX2MYpWxDv6hh",
  "key11": "335LHmLwhb7nv2CCP1fxdYZN6vaxnk4ExwuizWaJSm4B6GyQmYKmqTnxcRhPBKA22QzqrzsWt1hdCAuxxXgxiFKa",
  "key12": "4i2QChe9YME76kp8QWotxJGAjBRZe8QNbNeZYF6CwkVEhjgx26Zipa2fJeM8QmJy8qnCV1erYur5b7MzS5tXtdbw",
  "key13": "hRM9PgEQ8t57W3REMnnFdqPyufn9Xzu6z7BDxRYYd796dcW4EMLRv1EwzwiKjXUKM4Fagb5yR1T1VYGf9Dzcwj3",
  "key14": "5NMEN9LgtnCTFVN62AWZbUcn3nZ8QCW5soJgJELZK2Wjgfg4VBek8Nqq1kZAVcV7iJ3QGooUgCZdPchG4UAS8YTP",
  "key15": "8rRsfYmSCs6Pz28KrA3muDUYSjZH36NJdcdVZUpHngq7guo16tFdHdTwveB5DoMzLrfhop1VwoHTz6a5XyLghom",
  "key16": "5b2PzrAeXPLhYNdVAHsz5cSdFaWqtS3w139RTFYL5g4kJ4PUB2Wj4XvzNfkmeKpaEUdft5eKCQPejr8waeVYd63H",
  "key17": "599399aacp8Zah5nbKj5zdkSBmws5Sa486kb24G3rRP6WEufkMqW5tYEdUaNL4FhFGoYJhC4iQR3ro36A8kj9z8y",
  "key18": "2mg3aKQDykNkRgx7npH46WPLLW8bvwzjMTsepyvEkoBeirfUH4XHmp7edAzAp3qBNF2ci8jrDegd211b7zh8yT9P",
  "key19": "vbRbBfTTaitnQJJMqBcdUMTEMRM8PQoWUtyVyYPra1fXURx5bNazq38WZBkqUE3EEy6qWukKh26u14tu5K2YZGX",
  "key20": "5qTNrGes2CMMioNE5LfhGHcFxBY5wsr5p3qN4FvwzuP2moc4z4wHirjmXTNdAqhUnosuedosQciw14fEHMhKWfGa",
  "key21": "7WhvUKB6bVUFsK6XU68tLQhapw5pcpHCB2GZWmLiuiYjoZorSFjidJndFDFQozaAUv4ktbdqb6QoMyjCVGJCHZ1",
  "key22": "2UmyE1eq6mxhZ8m9fCpQw6uEAhmvP6nPmJxBihDLhtZcSy5dLoMXbTwuAtH45NCw9Kkx7bsaf9P1VFPqP9yRi8fK",
  "key23": "5HrKGCTL4DoFr9sKuQC98RFFoDn6Cf5Adyb6g59R45eWkYKdMinLthX5FcknHNnm3DkV2PQsCpPrXv3Rmu93cDTp",
  "key24": "53ThtJzYibqMr9NAgtrMm6yfSAUznxBiDxmvEGAqK5WPfgbdemAwwd89DXDyBEpPiFfUTHhpEKVzT9ZraFP5U3WG",
  "key25": "426uak3kRzt18DgxRnQF7Q3cM9f3g5FH2odYAwGAVx7xgmW5KyxHqkSRPb38xoFJDGESFbuvGsCvNHEsej1uVFp2",
  "key26": "zDL3QuuUyXfA6vWMHVRPQv6LfadNGomaBxuMPJM8CEaXvPnvtTm4QCfgJfRPGQiNk5CsKKaXirZafnPkpXqudkR",
  "key27": "3iPx5WRDYBtPppGWRtC3FfT89jrXqy7L3iKn4hh2hpztYTvY2i1ftUoK5wP7t7YGYYawC2bHh8RKGrrTyiCq7nkj",
  "key28": "61eU3zV7dFBL9j2fdJ4AcDSCQUMyxfHfJy56YyVyEHyUF8DvZFTzcbFgAx2S2gv2Me2qDKd4vddu463MVn7T71oS",
  "key29": "5ep7yvm6nv3wLw42L1eDpUeyBcHoV3jSr6ExiF1CuGopfQy9AsDvZpELqfXaEQ28awm95RU8p9EZ5UoF1B6iuTzg",
  "key30": "43gk73EWG6ivraxB557A2fgJpDVZkodq5V5ivmS36vF836eKF6yoD8397BK8ZdsuNT2pWmgEQRvm5aiHZr3vgyc5",
  "key31": "kNxbsrgLHua2ThALiNZiRSQnH3dazd4o6vrtWmEqfukCr8tbXNh2cUUimDtHm7AxHqZSNsSgWLnp9FydQ55s73T",
  "key32": "3CcVd7iJ4bY9rbAJyzfHN2BqzsEsQDbJsrbMd7ntbAqUWBpbtBZFugy1GjsjXQ3nUqQD3PZUgxMSQUvCGsdtr1jK",
  "key33": "42ueFZx5aUoqszREwiz7xggmgkxKAg8vipNkFKAuK1VaCdhgwt27t6e7GZyjJfYFKjjxCDugjF1vpYBPxagZzYU6",
  "key34": "5WridXhhS2k5AVTMtivrtNCDeZa23xAbEitQnDFDKnXqTiqqECia8FenDoHYsafJREqvem2rXCoNHbv5nGjWAme9",
  "key35": "3RGdTFwHHwGe1Mj2KmcctPgzHwwxNdUNPHTTfkPDLGGHGxqxpiV5CsATAu1omnXB6rtdXWrRtKHmdeHV1mhK5seH",
  "key36": "36SW2dvEpiejJhxCNd3LVgDukgEZvHKVFLCgARUAgr94FkL8bHsKXzKNX1twzR7VGMowH7MHaXf9VcPdYXuQJc15",
  "key37": "cu4jpbXdEYjFRBdBLwJNcWr8hrnVfar5G5M8a3qXDyiavni8D54BNVjEN2xjb6Mt5XgDxKVPsx2PYGyfzpkms4t",
  "key38": "3JbcxXPfoNM9K68nztVQ6jkmZhZbF8i6gTA3QDBsbcCQ7z7ndyVKeRjPRKZ7ctkUDRhVeJLuYTQGyiy4w6kXMDZg",
  "key39": "mP1jQYz6h4TZ8yUrHW4SYhX6jJgMU95hXoP6qordwFx7MjdhujN6ez75nRKaNV7y97pZQ6qA1w5n4VYd1RSsqdd",
  "key40": "JwXoavi8dubxGs6fC8SHT6EV6AMKVP3UkpwedMuN91do8fVXMAbVtkh6x5wweegsrURuwhcNKa4KNWT4pPPwjqa",
  "key41": "5mjRjj483JhzJrymFYWPyd9xoU63K71KxFba6YTTocLG6EeKwQdsx7uU9RfRVu7ViYbaRyE5x7ALPHKnfJMw5CkX",
  "key42": "3LuR5kVdoNi8BtruonhqVdivtDNFrFHVQF33dLEpZrtohnqr9xNBKiD2Ay5fbV8k8JbXiag3bYoEkn27BBqgoNLG"
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
