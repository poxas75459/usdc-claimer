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
    "3vU5xf31tFZCK18wtaV4m2k5taCSdRdjZGXuuyrC1BuRskYasSPMdQKWmA2S5dD84CF9xETScpJVh5iRQ37xTWpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y1dPVa5DH1b8Vx8dWuPMxhYLdvPVAkMNi9Lbi7Bfu2DA5N2jmcy3NARahfQkLozgws9ToZFMB8uLi9dXm8K4pKE",
  "key1": "5cHQWj16SmanqDnV6meqJ4iLBByGPmZZvfAYrrANuHAUbCodq253SSTD8dG3VjLKsUM9VY1KugPDd9HzUv1Dt1HQ",
  "key2": "2UYrokjxs8d4TvMVKwQJzWqzt4v8mv8Tj1Qi2nJNFQGXqMaQkzmqjTXNeiWy4MdpoLxjQv4BJ144W4rEHfT3ztZh",
  "key3": "42DsbRn7K4WfLQyMF7SwUSY9Pcpdf9VwepdKqnMAE8TpVuLsR9jVwwUAfv7FyMp7GSDUF7aS7mbXqaTbGFoJ87j5",
  "key4": "2SPGg4pWiJMbLAAYyKn3PUcWhavs7XBZpUD3XkY9XUSfwQp7yYqwWG5vY8Nj9g9PxNUNBbnYBB7usaZbwTqo2Pc5",
  "key5": "5mVaGeNdNRjRbQ4wBYDYGjbF2DxumtjXDRR73Yfvd3HMAvvvkpdZQiLuNQomVjWAnDsmvtcpjBtDYMcL95Gc6Awg",
  "key6": "57y1aXh8meQmxn71br7Px4FgsqPmKHUKL8pCqZyk3fHwT3fiBBpXY8kHdjqKx6fJnVn6r7kUNXE4yXVNHWvhZftr",
  "key7": "5FetaMb7a1Whq6Aq24S58kKmpFK4SHnmnCsf85vTPo39EJtA3i6L18viKRQawgYvTsqQyixR7dKRUjVGyp952ygq",
  "key8": "4o38SEmVR8d4otgcN7ZzozPnGt1EwR59y58WgqAgdNMTCC1nB9gav418PfUF1rrPrCW7LLArJ1Y8VgFRT7wrv3m2",
  "key9": "4kn2VBrV6od65vLcboxdebUDKLxE2wWcr91vqS92Sy5JXd2AXp8fz4EzoRLtPBsTPmUHc5U49qAb6FoU9gHHbt7u",
  "key10": "2HyxdZG4xd3crw1vKNuSjmvN954iaZWgSy4rQBohGgf6Em1v7cRsPibq69PKwM9Pxq4PokhZyodzBFKnHFANow3p",
  "key11": "ovpsSG4dtvwCFrGbNhTpLrH38tu99DuF2xaLECW86cskZU64edQXE8RhdrEKNuS453iB3TkxSzKGTHffrACmaPm",
  "key12": "3N94qt1ExGy97nL7benw35Cv1YWRPYyr2EJ3pFvRcydBvwCDwJVYG5j931fAZtC2g6TS2zkj6ukMJyQR6zwdwub2",
  "key13": "2U5zTaxwbqgPYtoNgd2VBpECA3iqEi9e7y4hkQiJcF3RdQmAYtU1yphVVNvDiv2Bemv7wNJrqJeCCaezHtnpD2LQ",
  "key14": "ReR3YZN92WfxZmUfmKd3emdmU7yzw6M1u44JydfqJ2cHSqM7xMuAXU9FCXPaDpK13Foced7TiuahUT3AxoADCD1",
  "key15": "3yaXpPHJob16ML2iEqmWpbfW7Ywzn5hjPdvvt7pEpoLtH3FAgafdWpUqgq65pHc48Y96haduwZXhYqwfYcbw3eua",
  "key16": "66bfxeA4YStkWktJC9z5HmjU723Zn8bs1fEk6aGBAEoPSEqokFLRgSHDZyPJk2KgHdnW7v6Htxz44zwDiR4ssByK",
  "key17": "2G8Yv5FpgDW4dL3UrxWWkTPBPiGagNxYkia4FKdhKYiQodZUBdxJ24JvMUdURG8dTwsDWt8VHc45RK5cf753hCdU",
  "key18": "2fdFkh4yrrAcerdiJaLAEP4EGCX66hwiiqvMV1Su4mLKxxQNz6aXUErkLQvzMdn6zqaiW52aVYCqJ1gKUFDGccyD",
  "key19": "oQvSEPrpwNQed7KfzJPFbDCsmnxonoPNzMG5SFWZDxXG6MCWcNVyN11Sna7aoksgue4rxtsQBNJ3DEQmRJFwBAZ",
  "key20": "59jMFoz1fF1dbRxnNyLxKhzDzUv4sTK3ZwxaPdXGmdeBc4WTGB4e8gMuzRhHUqEmhgPX1nos89wxDE8f685zihWy",
  "key21": "2FVrERTpDqfonpfzKBpY98vnssHJjBLuEQTC1TPFAD1cNydi8H2MkCa7aiwCQnyz3bLjSVj5mk9UzhwMrHTvz98h",
  "key22": "3uoTKJngXpSQEXQFRT9nBSiqg1Xw3kjEzD6wEJyiZLcUiTDmF84tZbf7ob43AN6wmLoFWCXK2F5UbxgCRZu5kqkS",
  "key23": "5AjyYXNzxXxJjFkSr76ge73tMJcD6JqMgM2xBFgNLuzBcuvfKyvuAqiDgRTkVzdGLcU45gYQ85VLyHqJv3dcawAV",
  "key24": "1Tsu7VMmzBm6opVH7DKnPpP83pdgZdcb6wzFiRsxnNidGGutJLxsGeAkGEwmkQdZmLYxD2sj3cmeks7mq86aFh4",
  "key25": "2PSWtzsJvQVvrWFnzgAJfQDwAJQjsQZ3kQutBbV8JQ29zq3EaMXVgzqNXzviLTTRSZffXHmvywZikbcAwqd3qTew",
  "key26": "5GvKc41x477Y3zrYt73uggxtpbNnZTZSPEirYt7jEymzGqpFtKXAsHrV94eudUc4aL9vU2ewyEQgppP6fMojqW4y",
  "key27": "43tW25YPy2k45s6iVC3E7eBVFVcEvA5BxXbNbt86xFScrqKcapA7B8GU1LZMFf3xEp5v9qGCjJeiYW2eyD6ByA1e",
  "key28": "5prmWgzAjGi8Dwz8VsmhJYodE2zgZxYQkt2BoChHQSUgu5PoH7YCwnGv4SHYEMhNFM1MNq2nrkZ9oddt65PvdH7",
  "key29": "5AytmNobvZhJCDheLPYJKWhVDRfWKcvpy1VsTnX14WZ6AnLTAzRJb7tzHH2dkE28QV9ountqVXDkJE6mmHeEC52h",
  "key30": "5j9vK8kuJT5LYxUFiN7fgDx9ioxwLxvnt6kfucj8oLoQrZ749DQockhzBcevpmqAwViabenrZ4j7qABsisCTz6YY",
  "key31": "QWcWyRYUCUg7CtVj2NiCcAiDVvSNMC18D948vVc5CgQeJLcqi9WeZAAKcpCfrVT57wPcsTFmWvtxNNRj4Qj6zzr",
  "key32": "5kdPKEdCeayG8c8r1c69kGLKrTfge7yQYnog7UmShu2xx3y6oGTcGFMA75iS9SvX6qtwYbSrUWxB1AZcCnrw9p94",
  "key33": "5iXCeL5s5KisksGkuS8HGnpYMZeHSrzihK4JqYJh47jt6ZAmmtu4h8538Vstt9UXDeSHoTjaNpc7uMQDfrmJyDhh",
  "key34": "4EduRoe7YTE62UdXcfPRJSFm711ijZwrTKHn7j4gzeVmBMoGSwY8Li69isyQFKrKLMfjdPG1vkJN87iNvJEWZALd",
  "key35": "3WBjaymv1AzbfGcc3GH8hsshcRczf4HyBqGdGtMdW6LQX74i9qYq6oownBjvB5vF1gXzatcDNrfvjPXA6bNmnECG",
  "key36": "2bU6SPDgyDgGrs2EjputN6ndFt5mp2GmsvxQUhskiGzbXTKfmRZyYP3ge7odBiLrMcsUee8jSF7YBzbzW2imviBz",
  "key37": "66fM7BbmVHK6DMArnW23fz6Qxh191fg5TLr7Cb2N76uhj8QNWb2RKhQDKzmndHSLLxhqwRJJ3i5hMb5cz3hsfR8k",
  "key38": "3MwBNCL9TDBvbsSip8Uyq1VGmgWtYbpmWTgaVCS4cmSmHv21YQYJuK6DbkNsFScaePz7iQzzsJPxPjz8sCfjVheP",
  "key39": "64ewf9R8pEbR4fZLcDRLJJRcecD4BjmA7259bsLVs8JbPcJQMshspVgGoMBpiapdP5bnvoq6vQPEJDA3x98okvnb",
  "key40": "5A18S1GktnFztBA2w2hAvkyUbkkPHu9ccmtvz4L5LauFEGC12YjC3gyaFak1cDvx3Q6Z94uJ61oLBfqxXp3UUji5",
  "key41": "mdD9sLXR4ti8eq94yfbD1RNoofA5g6Ths2vFGz2s1Duwd8vw4EvovsEpUa6QZaW5ib9TqLvE1DSLVKkBHaxKbPP"
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
