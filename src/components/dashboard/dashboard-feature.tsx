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
    "3VKfU196STFQiYwqnENfXn46kSFAjJkcBBeAe7H6ienVVweDwFERs3sV9g4NWnUR9p7ZCVmNoWuxU9W6weTaGbZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RdxR2rnis4Xpq1uJkPjDLqinyfbN23izYhn7c2HJDKVmNgLPpsyrjsjLFn9pdjUoD7WSq4U8JAts3WejFBtczXo",
  "key1": "2KayjZP6LL5sqhsvbZk9NbRRuHybwP6YMbfwyMNufQVCpmjsQrpwhQzpscZ2UAbHhAxdt2wDeHf9K1skmgf1d9TH",
  "key2": "4Ukz1aA3h75mdXsTT8WN1zCuECojRKXA7mupyWbbX6HwAnQn2zEKzieCtrpr9Gx56GY1EpkL7Q1RRz5SrAACjQ6a",
  "key3": "5e26oHwk3xcyJ3WpRpB1zzAtYfhast9iNDKWkDxWnrfNL6DsN82QvXBfyfuV4xKhtsEzDYcYGk57QMHtHXbvpWih",
  "key4": "3iPB6Hg93yJro7wP4rt23GAKuz5EtDZ4MhhvZcHB3RgqYU2826wp8r1ZupL84aMnR4buVLowWqi3ty96Cg8BHouE",
  "key5": "4SFAoxzhJw1pnbcZgsX23JcrvGyUp95x8Pbre69R328dkDbesHuQpjG4insmrcCMTYxTz8mWc73t1V1KqUo3S9Bk",
  "key6": "4ZVgfyktKrL9ZKbBJHX7iBQLwpCEez8HiJ48oRg2xXHrVeKf7eaZY9YB88uZTj2TNJWSQXNoKDU63MtbfHRku73T",
  "key7": "58GX65bwvmLbaJvniy8rvyPc3aMFbtXunAm5SLSWqRpV8455Yce3h3f9WqXb3RmTNzrQUVe9EpD27jcepx9rTuoc",
  "key8": "3wqQTRGSpdBUbizpYEU1k9Z7Ttb78vjEeXPrrvw8h6RYGabDMW5seSo8S22ps4YvcNrsa98HLoSJobm41YHTV3vY",
  "key9": "2PriSgJrR3mYrFvp9TzoYesRWZZinhgGeCnLFu3MNxUYrg8BxTqm8F5ppmNESsTusa1UP74GWUv67zTrEzjDNTd6",
  "key10": "51qcLqaTx8fN8cB6NXRBWh4TWncPWkBvMmcRsX2hJXgWewH4GG1tkC9G26LyziFmZaWmPYdgsZzWFM7G9G2gkf3J",
  "key11": "364VGv5X7oBemU1jrg1C3trwAChycasvEkxfh5PmEgX6TjMoviVcnWWzYXe2CQa2xiRhQuteyac9K1A44KfwYHBJ",
  "key12": "5nTPatcFoATgCLDzGGrKgE86dqv3ebzZ76ptxP4dyYFVeNMp8uAd5zedQ5HDDeTxzDaSDZV5PXFL2zkbe2F2U6J6",
  "key13": "3sEbcuRcMu8aUq1xAeZ18urbGhoGySn6dTb3PMpCByCMPJgttAjZe8Q9mxurvw1UgGEN7MSrPvz9mbjKpXuGfFVP",
  "key14": "TfpDA29jiRukyLaZokmXXtsM2kDKMQJw8pgNFMRLCF7uqcSLFPfXiMU1imQUHiTtezZF93CX7xYsttHD2S5R1xJ",
  "key15": "618du26DPDzCwrpTw6GQqSo9YeLeJAPzs6hJ16vsBgNFMiyNsq52tqhhneFbaM7EZC1JX4AkaaGNVe24in6mEwKo",
  "key16": "255mE3x7ZRHBbUt2FdbH9zkBbGz3pCz6huHnvPeyG5SUd4qKYxzmuxgV28yKJKfZZ7ChDQrcxbqRfNUNoEc5dBHs",
  "key17": "3iChNXkYzU4Amouad67VaDnZq3jqvdBTJ8SWQdaCmv8qS6QQbUD3Nz2rvf4CRKrG6ns2KFqRkPi5UBYjeXBYz7YV",
  "key18": "3YPUa7wymmjVrwkmuE3GPkZDnvuE5R7oUisx3e3ruyZzB1vh1zz7puHp6zVZWjzha3DGYZFTfsdgUmDYYQXdno42",
  "key19": "4Bk4VLLNBCohPV2raCzbRm8NCHPEabuax3kBGSsqkYqA7SsF4tVDk6rbrdeb3wxnSoBqF1wKTjxPAMRwEj1ZLjSF",
  "key20": "3b9VuCQZoNweJgf64JnDrYbfpAg5GG3RQbutibzjFnZYf87PZMnTzhYkQj7HgBiAC3ybvpVrLs3zRPxMssWFyuEt",
  "key21": "4X1EBwbTzHV3ENGruX5qGxW78694xa7jdwSj8StEga5YkxCX9Qcik6ZenHgjWrTBkadQuVVSFVvQ9MEZpYEGMwPH",
  "key22": "68q3D9HmSJh8Js8ZoXaRcQnpXoXsdDFQjSRUvVJACHhs4a7CzVHeebbft8eggs1dEWUSxHiwcGn9ypsBouPptQj",
  "key23": "AAdv262DmL92wZoSL5Y7e7UdPLffioAapvGhtLyc5rwrZYiREQYDdTudgPKtR5GcCfwMR7jVzN5nMWrusajs7Rn",
  "key24": "48shQiND4DUhoAPyFt6M7GGxFQmm9K6UEeD46NtrD17RM5WCy6rVYN98ya1eEGLkn8jzuiQRukRvdQ1GAW3iWRPT",
  "key25": "BqgGUJs51RtEJ97jNmTJZFLWF8qfvmaDbzERGR6toTAPjdcsiDPpVqsZq2wugYyjbp8E4hQR2tLnLf1iwYimyny",
  "key26": "kqpnqpgbgYggEejW5nuPyJs7usvZsaPQZAwRkLnS2LGbCu9kexBWU71c7fpykjcZogVDZTpo7wA3JN22QcdgsR5",
  "key27": "vsMq8iNWbxSAEGehTQSqq4Nsrx8JW8hsdvyazGZodHb2X8DSNH8o8gBhLDBWrYW7sJG837gdKNAJRUAj9NSzHSi",
  "key28": "3np1j6iqgbwHNkmGx6qPtVMTaos7GpscaVKRsTWQT7dM7jQRqFJdQBTRcFVMZo22mmifBe3wjUDqTrjx1E9SVwMm",
  "key29": "S2wh9U3fgoXz63uRYWaxYRQVzn2seHEPnFquz9THMQQceSUvM8XyBn7ATYxwT6zFgvp65tTbY5LDTd3CDdNna7U",
  "key30": "41nqjCMvmNDrKdm3ncf2jK3jn8zkAvpZSksngZCxp4kUEVwRV3Ke7gRKy4g2jVWdYzk4qQGsFT7JqjaJeMquMSuE",
  "key31": "2uHn3m8TdEU1yJoKhFrTJijWYvsuRLrQVvw5vdMVTMk7xc4G18QxNHyS6sS2eAT7YSpzREF6ADZUo8n7N7AhimrN",
  "key32": "KLh4e5x8QQxSfk1Wovg3gfnfijnW4WgRhExWp1Ys2THEa6tbehJiqA7Ff2fTpZbyYSix1V4BAPimwSaZXEvBDMH",
  "key33": "tkCrWCyU1eh8PB2JNFw4Q3BD1nZ7LHsnegZJTdiwoMDXGpE4gHciUDvcn35oJS9zBQUm5UooFK1saaM9HqzQgtq",
  "key34": "3eAiQ147PySVPV9PBXi2eXngupvWFdf5iyh2a4kz26QTDpWCPFNPz8vhzHkV4tz5iehfZQyRbX5Fji1uYzAjLK4E",
  "key35": "kuPAWUC3sgNFKLsca3BUAFzQiYhXz11nmSFFDjaTpHgdMbbyU8jT4bd1FrhfTzQygLc5ZpNRgpDCw6JeGZN9Jza",
  "key36": "585Jp6LJCvQ6WPhFZhQEnAWgRxBS2rqszTQQnEkomcbQSTgxXKxy57rzKYGmChiJxBaqXXpNXaiZ12uTjt7AcoUm",
  "key37": "4wQCh1u1y7u48Ayhanbe7DsYTKKHcLFMaxKyuPhok3EcX9YjZjMWksVXgGQKq77Crp6CC6fPjhGbvmc5x7Y8rMqN",
  "key38": "4VU7ZP1XTR3Wto4yPJTBM59GM7n1nYRKZnwDWXGV7X7MWFxdcKsbi1wBSzhKAyCJ6qUe66FPj8866r6L5CnoiLF6",
  "key39": "2BD6t8KmteWeiJz6V875qKEfuRXXtApAmstemMvUogpFsvTTKW9SpoMG1LH77WPQUucGxgGpH1z7AKUmj1KXWPXL",
  "key40": "ePgkgEb27mavvLCmimuxUGubCvpcBtoF4AzzaAbqZ1W3ApnejujqcZEp1e91XDAF2iKakWaYWLQaEs367JDA8oA",
  "key41": "29wHZKRC2dPpcLuLaxzn6cXDDDccRUwc6PsEh7N1JLZDqB6qGz4PaW379Efk98Myhif4yU8NApHuF2Xyt1b3ffoH",
  "key42": "5u5S8iSGZK2nWJrhKRt1zeg34s9nxEYsZgVCvp87ec9WntihTSc3wJN6m5SehAVfDKdTgRPMU78yZrxDY7jqvbLS"
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
