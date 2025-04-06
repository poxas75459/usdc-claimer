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
    "2eR73jKaHuMjdVrX9p9SrHahEST6cRzDTFRGSwLiKSBX1CSRj6cW6NK6GCtfgqysKRVdzH6tX13VviYdsGax2CD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vkffgL2EHxrSxi8mYBjsJqVL6kpe7g7ew366YNhAWMzKuBTnZPLzgt59Tf8x2rzDewQmrxgrHanUYsvJeKqqNF3",
  "key1": "3roTKFM1HVWCpkrqWNMi2gogJBgka84xxJttGWmV7V3KXkwx51x4YhcGiio8PqcjxY9iwFFd5pe4kRbBSFm2qybt",
  "key2": "2FqFcBhK73B1Cq1R82m7F9rsjFRWmfrVENUuA53NVL1WEoCGqeRZGasv8UkqNoABo4oRV7R3PJ4tPDuwsdwpkihD",
  "key3": "5fJxTEsMJ3FPaswMe4DNtMNVprfnLpPnvJVABLQPSjiH7tyfZAQjeQyMskNxzi4eJhCEHEHL8aR3Fufp4H5WUkW9",
  "key4": "5ymCMzPTjwdBS5NiYaWm2s9hiv5eN5iPTsjA87Bc6tP6Cy55t6iuHFUfGeVosd2PwPbytxQRN8t1gjaP5cd2yjLH",
  "key5": "KgY3UGDqP9khqGr8AjiPj8vJ6TpVfvc9NgsonCSgetbHWQe2Xb5gkc7WHUfxSf93y9Guvymp9H3LkA7gk4JxRZ1",
  "key6": "5j7JT6z8NNJPFuvS4uYH241iLwk3g4VAu4LQsJuDxSHRrwwYnAXcDKix1fKsCbHBYzxRgG2PAfio7AXjzuYbg4K6",
  "key7": "Ngfw8GHziuGosimMB3cEKFNrrfcioAQbA8Lwt67pnCTyFXKxrqTm4sbQgJtfy2hdY14CxRs45fQvTwoRXqz6UQ4",
  "key8": "1Z8pGeMB2iKA5W1tWGLpw5n4Q8Mw82uv4dWmeBnKAmPiJ3NsdPgaNSXxun9nqiDjLScXLhs56wUqnksi6tX3TRy",
  "key9": "2KNP186S6USg5MgdK4CBza7CpKk6p4twwMqYyd35MSxfgrVPo49rz1UeeRCFgLttCeketoFgywF6bE7bHieZjk5U",
  "key10": "4V9S2sjCfZpBXopJvKRSvhLfc65t1VVW96TpaJZX2QuusfekXMu74rPPwSkXFbA1gqGEfB3Di6iMLNj3mRcFxXDn",
  "key11": "44WFrztGzXviToMGxYkgHhDYX5cZfmifVgdbgAysWng5qv6d1ejhVkgTcJASjvHrLdbkNKnKvBWmK71VoFxDLpXR",
  "key12": "5S1pBy2vhcTDjDE3Nnqjx9pfKW4CGSKkoAcxhufkFLEumdfL7EAVSVY1hU79PUCtJCbjPT7SY4k1rJ3CwnVtYQ8P",
  "key13": "3no8JfKBPN3VzVVpVehTxGnk8korMCHMLrbyk4FFPHoCmoaPwG4qqCbUMQ5kkWwFj6yZFz967FA9VymBGkSTzNRN",
  "key14": "3XWtYGXau9BerPx6BoDPhqpGChqnDtKJysHrMyFWGiMZhVLBPgkk3x8BV3dSGyn8a8WWMRfJKifqUmRYCbM2QCxJ",
  "key15": "28xSh7un2gHAQzSzshb2AtnAXkNXAowYKxc6vnkzm6GL4AHYVLSaADaFY1fqsp9By4AeyGzfmz1QUERue88QfAYP",
  "key16": "ZMuTxFbehcch5amMXr1qLBp3FzV2QhbMAQHihFGxJH5fHUuZgvvAb86ymJEtMNE491wzXSKT5mR1F8mM3Kzkn2V",
  "key17": "5sH8ZnoXehtYZ3YrD11GC9RgLq1nSvUrKCwKZ6hxmsTEitJiBiyDXtsv7Fty4Y8UyMTmj7Qj9Jco9hCsukmbCnWW",
  "key18": "2Fs2R72JDMFUB8oaLyoSdsbh6Rsdc6Y81LstpJGMjFYaDz6SaDptMwbbPzb9SeeLr7cnscsV3Lk7j4yxT9Q8wdp3",
  "key19": "5MD9CX8b6CBaSJLctQbsAGsjFhtzyrcoskBKuPhbdjTHCBr5PzF4Rfg2qEEXVwFQuxT99SSLucVriVeBFkixwLpu",
  "key20": "w1CAnpRTY5duuLJrmBiqXt5siBa62EtPfy4zTCqBBaw2UXaurNxpQH7AYtHJK5kmYRnYYKsGzrrP9BZbjeJLFUM",
  "key21": "3UTPCiWW1y2XRZ6BMEEsYWXbKQKzEQfFYENgmHDZJosgBVuGVUE3W8aFiqnHQg8nc9WYqEKPnAJTQyEbBc8oDVDd",
  "key22": "3WAfkC6dvrGammT3dzSpGUNPR7BAGMZwSdUyfPyVCXua61VZqQ8xLfxSZDwnMXxL1NmWzRSxKYXHofMHMowTfQz3",
  "key23": "5n1ndS9iin86RBu3b7qUbP8n1TLbREihjRKkq7HDmeVy8ndLV2dHzGaqZoBNd2g1zRRPPzUPiBpoPpHenttiNyE9",
  "key24": "3S4JVXZUQM4FMtt2WBM1vr3BAgKtwX4ZesDARSWB2EdqYu5FHK16BU3gNVSAeR9BZiuvdxgDirrL4erfbBtHr5cc",
  "key25": "2Z8L8XvF1b57swSaTAFUXLbp8PTGUz2LUpkLCX5avtna81agQDZXF7vPFxDRkg27Zjp3xLCJHDmbfSNwDp9ztK85",
  "key26": "4xrDuBXNbsUeirj71DU6wpacXDQa1uuFehqpPhWfYfbvkpj2gqcQpTAod9mfeJ232womT7rkDpvXww8VzvuyBLCP",
  "key27": "4738p2JipSn3EXevwGGgfUxCoUuYu2WtQmUBB7cKkybtnXAM96KxrpzSeFXfMkCN7GN98JQ4XjJ81EaraWcr8E6T",
  "key28": "3r8M3VeDpeWNmfuQKyryyuhzBDVQGfee2Xp6FhP6PW8NeiW7bJViBk2T5yyRFz4Zdh1P5Gnm4xCg5Q1hFLfPodpb",
  "key29": "4VhDme5rXfhnfr8WBM6zW6gxUGQ2CN8h3FGYBHi2vZXpRsdmagrzbre4ZvaDqLUsBwY3QwHJetF26vGV3RRVGMBM",
  "key30": "4DPnw6jpKq1y4LuNfKjwXN2dW9AJVw6H49huW7NNF5Pxpdz43JoqJjSuEJhunVAZ7cutb43KkkxMEtukNkAy5YYf",
  "key31": "4rY4ekR7YW7TpUffZErX5Cs7ALN3ZJoiDcVSVvxXxLeALnZPG32CRxWUyXjt4JU9vQ4GBPwwuoeS83PvtfJGUpAC",
  "key32": "5XFaVtrCWua2kp7vuD7xG7t5m5pLHrCnVfwZ1PvZTCwFg9kMeAT4tDpnPdQwPyCPpjAtLgtGGi6KassEpJYLwEX6",
  "key33": "5t49rkXd15m3seTeSSteSkYtDwdcxUfwHszbcR9jKrwjPmiNnrqGixDA2MpBWE8CNkAREmeHSm8YYLvqunx8Ac5z",
  "key34": "5QgGMjVrRmGEtASkJjaJRnhQSFyLer8aqS7WoyrAx6cZgeqLErKLRthTUqZrkKFwP8xif8UkpXorAWiwdNs8Lz4S",
  "key35": "2pgb9scSvDmm6S1nARNgzJpMYeaScmxpwum6KKHRFnqzbBMxzUL2eJRX77s1CJqJyesehYFzTWWEPUmUTLsLREZn",
  "key36": "3GJQKXneWtY188M8jyLTA6QWZjmYbLALeuyHAkxFJu6o9A3dCo6CP7NgXEkEQAmD5FirdAv3oHTSWMpmSoiXtQuv",
  "key37": "3Xp1TwUKnB2Y83syia7uP76ycojydsNJLPyAqdUQ6X1GpgYjR6kBXHaHchUcymkPF9bjHcZjoG1gjKiwZkZQcAuY",
  "key38": "3kc6NE6NfX8hUGj9zX4z1QNKyUHakPEdAZGWvK5HjA3CsunSzzEQvjXdCSHq4pi5BGb2rHnFJaKbdSDAu9Fsz4cq",
  "key39": "4BFRCgKZuX2SuVbzWFf54CBVXwfRE6QtCcbgTjKQWe3sEcv7i9mCjfLig4S1r49PykE9mSD975nP5eJgEaABsZWA",
  "key40": "3aNYgjpUAqWNpFZq4YCEBipETzb522R9esbB8wdGioauuGxsRe2XzVp2DQrDfWAfHNcxqXUAtmyH63QMwLyPUnXh",
  "key41": "4u7HZZ8vf6fKPhnauv351DyfqEVCR1YqYebcAtJVMfjvSrDpahXveV4ruMhsZudbdvh7qebjChvGA4xr85nScL34",
  "key42": "w474T5xCcAU3Nk4jMBVEUSGmTwxoQHCd9qV455dQHSudrzRp38iy4oHFe2MR29genF6ass1uWURY6xuVQ8WGYdk",
  "key43": "4ACzE3oK13ynNdY6g9t88MRY25aJ8MEtjaE6LzYRXmHJmN81414uQsAt9dnsfoQguNs7LReey53XEWPbpJNSJ3NC",
  "key44": "YgWJ8Ydfy5Ggnkptok7vBgzshrPsaKmVPQV5kgoEkwGJRiEHJHoKHNHkNdtC5hX27jARzMJ4Kua8x4RVcvhPg95",
  "key45": "38udnSMjpRnezttdLbhXVHT1bjajX1WrKHpSK38osNdNhr2MJAKJDbjFhaHZPSxZtvvwmYEMDMBnNmx9YxhYs67S",
  "key46": "3sfBfT8iR9kgpTozyjrf1Ar3Y2yPi1CXcRG2nEtmSttYP9SEHF3tLkVzjjZxWDJkYgR7vVuANoKj1u7J9bNJJxBC",
  "key47": "2nmK4uUJeaYNUmqbYicbXWKHNtdRQtbo2U1eGXfFWcBV9tsXGoHyrDZnYNuraqTz8qHKMjMCvqd9biiRYrZsR1dx",
  "key48": "4V1tKFSMFZNVE8JzXkpBQCAvQ3HKnW7y5j4mn2ukNd1vjbgzKtqnMq8HK7kqx8e2KRr52LVTTVh9FsYuoLK5NTc1"
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
