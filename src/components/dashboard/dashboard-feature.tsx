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
    "4S7obVJgYWZcbHuCqZjaHyVsipcvDTxpCUNCwdjHGkjR2rjXNq5dqF44G8nKR51Xk2MWRCSf8NCHzR2C3VrnUZak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N4RyJVWKf28BeSBJ1pxpo5CLT2y4ACdYNjoysYMGXucZzcPrKSMMR1FML4dBbahjyDijJNVPki6N2bsYDx8U2Jg",
  "key1": "62TtSyzm4t3VeLZ8LNz5z9DkDQEze5RuawKsb2ceDoxFTifdxfVCXrZVK47wWbHN2Z62gMM9Zye1EFcjZc3bH8wg",
  "key2": "5AQRyAbvBTn9z7aQT9MLhaq3SobEiEjP1jG7JRCfHMr6v2xYBYkeT2dTkC2xETerfJmwwZ33DJXHVv1a8tuL1w1i",
  "key3": "5ggMrP4PaksqdKfR7E3RZzHdnTkMLdjHwrmRfCdwnarouDmXaqiDLW5QExi83gDNwq2GZZied7UzVEJFp4rGqSsr",
  "key4": "3VEa2GryjbjmQg57KaL5odpx1BKwEBF2MSocYmD948airy2HLYU9Uk2RdXhGb4b1TbA8rdpPJvwxciHvT6zbbe1J",
  "key5": "4xwjvbamrA3q8JrTrqMNt79khhwRyhgCRDRjysLnUyVrNEbTyrDfPftcmxgHjWmmGCGuoote9t6xQT4r4WcwuEde",
  "key6": "377hF6kbri8x7kJaZVvYCP8BidvfPvhxxhaZsS4dmeg6RsXdJmoTV7pDiUuJozPnbB8KGAVXuKMV6DnCDvh7U2v6",
  "key7": "j3JSopHF7mhYYd7YTBEKYt1M6ikojgxqtNYu4fGdywDC5EnePYWYvzFjUCacDobJ2H4t9KSJk4kDCibwubmjuX1",
  "key8": "5Pus2se9p6aHF2w2VGFzBNWdjRBDg2PeDCKx4EaGKhgHPKRXV3qAyhGcphHsXQZaZdduYfBAjZsiefcejKYz4N4q",
  "key9": "9XxrY3KgoAtof6wNkoXBz3zdMzTRgPB816H1ySuFSRfECJvg6oJGiodEMoFr4tqDWkMMvbVWszT772JsWQeo6o3",
  "key10": "3k7DyF84ncKzsPsc2A8oYMYNnwUHPQy4jtqBCY9F2Dcn7HQvq4C9dyr3gRgyBpxPskZ95NCxxP89wcVbSf1q5XEv",
  "key11": "2kfGuWzFp5NqkDKbMDJUVSM2j2ntfs6Shdja6wWgX5Qvrqdo9jRqFkiCa8K4P1sLuo4FSFMCpng8hmuZeZ1PuTsi",
  "key12": "j3eDH1w6ysBeipusE6fmDwBXmPWqyyDEggYEkZG5D8wNuN5mje1Ahou38aiVQygWUbpUJH1pZ14xPPhZSsMpxTq",
  "key13": "2i1wNTyD3b69VHLKjV9gVzEfHTkdaT241P1uQyHUWSNvyswxRm1srVdCv2FVUZCsk8TmR3DY47Cfezp9aqaZyd7M",
  "key14": "38bsPUyv4o6FRYDGecGEtuzkVQ1sQPg4BCc7CB9m483PF1n5wAghdpCXJGgTh8QvBXkEsXdR6BwxpuvrCh91faNn",
  "key15": "9rngPhUSiHtRPsEsKtNpNTQQ4XTBhh3Gv3yd87eyZP36xb95NZ2tcH6xJXaAEfEVkzs4FaWKPY6jzJTTHCugd7X",
  "key16": "4vYvdHYTpU5WRRTto6SvYbBGhgUV63Mv4HgGjB8CSVS3wERMfaFFbTHaxPjJC9oC9NCMNrgNHdg25ucaKeqoi5uU",
  "key17": "tmjLLdTdY5DmXnURkNfxYN82Mi93Z5rHdEirpxHSDDbJPfJ3dG9efyMYnoPTjgMMAZkaPaH2zPHnNeVJ6mbw3hL",
  "key18": "3Xvx6n1uMBKrGmnm957cRoXwCKVxPLeWtDpujjYrxuXPFpDjZKmevKSckzT3vgg2NMw9LB5f1NFbLwLYCCg286vP",
  "key19": "3EYGLVaRAKg5ZhxvYxLSW6WNKsJnWLDLaDx7Vvk8bYQiGG8EDZHkYhfQWkFY5ExYmjKxwAqH2RMJLZNfXCH5nAtb",
  "key20": "AxkdrJWArtA79VhXJBdA3NFfzftxPLYSWts2VqQPaEgHuCUpMYCBy4sDzeosGj7RVdyKTjTUmJ88frYPAK1mvxq",
  "key21": "58n5UMjuHosrgWAY2gWPELcMQsfBy3TqNr4vGE5Hn4vxsct59PKwus4cswW9NXoSvjB5z3PykRHHj94fahKyZNF7",
  "key22": "4P67UraKPdDSLetSkYuHsCoeC1RX5pzSbs7hCyVvCbCVBXhXVZAu9oNg9yQEJLEmKeKd9RKBiX4iPtEEjcmyUzQ4",
  "key23": "2gXoQ6gWzqCjjEtP8b7H79vU5qaR2C6Vrmewdyp3HFJw2zZbo3Mc1VPsHKrAvEPzPq9hTkTNZJcLDdgS61rNm2fi",
  "key24": "3Jzf1JL5UwPEWTqpArG3P8GsMgGTBy2XgCzzMMVMh6AA3rSEs6Lun8uPqBeajWGGJd8XRG1LYq6brifKmPNRRKHE",
  "key25": "CsqDwX1GQTaKSv1KMKhhgdrYLZQhHnVdksntqzUvVWDRdaaMm4x86x991pFGsCZiF2DoGsDNoECDQx79uKAcAwj",
  "key26": "rCFgTZC4hK9zwy2gEKwp9Z2cd4wvdEHScfM9W6kNTJy58bSGdSjiwtbKRXhgTmMUoSUy1eE9VZyeXc7gSwAs5Jc",
  "key27": "2a2bUtLygDyEciKUk4SzyGdtonhkUTP6p2qTMPcTCjURoaUcEom3PqKY1kQUz46qPCpEYqK6atdyR4RULjZXo4pC",
  "key28": "2Z5TfU7dXGiuZoa9En1baSrEDHpc6dxu3kD9HQPVUxWkxiETsS6jWLuDvEdwnwEsas6dAqKkauJocwiwX5MuQRv",
  "key29": "4aRcUhC6UBqB1ye6wABmLcs46bGNUJSk2nKR4MH8xtNmWTcvgvQf5LLTVdV7BNdyzfVtJHSELzWd9T8grjLXJZzs",
  "key30": "2KJmERxvAnD2PFfiVFYKWviLyH5q4piWyoQyXMc9NDaVHRkcLFwD1tfq5uiTo1qHeJxRqQi17j2MTELBGDKKdUsW",
  "key31": "3dgfusjEi54c6e761trQeW9FumW3ecEfeToN2YU1AHoCmvKK2cZ6zAu2ZUS9VfNW1ghREcyickNhxFRFroCgFVGc",
  "key32": "38C53W4ppawnz3W8K8V4KbHqpcegp31p1YoLr3mxH2dhaMVRNahKHE8qMR5mHtkTUgEpRmjs7RwAfWqLQfHQ1wqi",
  "key33": "qZBubbZaFD1Frndem3ZaZ3FvjUEi8SPfxoStWhiw6sA2K28TuhL8gL849yryrSAdFjwx4wwX325kBeng3rj4RHU"
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
