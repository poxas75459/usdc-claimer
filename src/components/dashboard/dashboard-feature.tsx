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
    "3kLyhFusMRdP7daiL7zfJkoXwPxA1tq7Rp1G4pq2haxW7bCoo9gR663W6rUQCyEJM3YR1RXDraeshbK3Tk52wy5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Hzi7YHcLAEL5jAPh5YxeRhYmDzPoW53JpZ1Ro7je2YNACTQekF84k1G49MHAZm5JppgtFfoP3qj4m56MFSBdR3",
  "key1": "JoaMgttHbRsYW3hUkHyfPDstMTULyRK4JH8pbzeBFnSjCLzCmhAyp5NLKiETuWnhKzGfTK8gvCpHyjTRvALezPn",
  "key2": "4BUXhDjpn9QHBiV2tXroQq2iFcvGL6FRdzWaUpfbRHfyuFH987h9WuyUxgND5wVmqyWsQgSYz3tdneficHtk5C1D",
  "key3": "3jcMhHUQ2wgSnh1sHBTjcb4AtEaDdRspbc6DViddVcCyfBpCKFT7sVzHzEVXVKHG9eub4nqDPW4uVJtV5jjEDAPt",
  "key4": "3TzRc6J3E8WCbbGQuAGgicAdMYhm23teH2KEJcXYeZtMFav7vdgUHSHywwToFfRWdrwKYoSKTKPnpjKX46mXLpcj",
  "key5": "4QTxymem94MD1CjCQSEXE6omVeSEkiUgeCDh9MUB1wjrj2KZTT4woqXQn6cYsqu9JMHG2oKFsv2ns19kyMEHVGuR",
  "key6": "4mxqkbzDPBD3CkLDttwnyoX2FDAU8HWvxQnvR1uHXx32hHUt7a6rjASpHQbt1UCentzx8U6SdxVW2NY94wPtPkXR",
  "key7": "siZWwXuiEDiiXoJEUVM1sN8RNFfUvjHMNTBCPi4FUb7WackS3AAZaQNAR492qj5p3B8SQz1J83m54FCkPWH7XfU",
  "key8": "4hP8j8YpSm2HQZvW8GRYyq7bTFNZp3k9mT1bFp48vGk8bYtFKviKcJLJM9a7GcH4975F3PR8JxcpvK6f5YPbaxE7",
  "key9": "2fiXYf9CYxVz2yAA6r4GCDGQRg1KKze3cZc65RkdVHxPY4r2ZNRXL2sL6nhk91ffa6mvd8dtkUVnF8pgYFpNVgbq",
  "key10": "57h4dA7ZV8egfRXuebkeyPkpmfiZ9a5unagr51s9QTshJgxjrkeszp6pCZnzzBCEMoeZJnHUGVVGgRKPcgA1RWr",
  "key11": "2jB7StY6ciDAUihHXScaS97bwnxEeNcjgZnT4E49dYLZb1hF835DwZcP6TXuoKm3s9qbCzpfaTTLqxwbQmrQJuVh",
  "key12": "3afKnj8uUfwtaZftg37pKhdDQyxtFtcLcc5pLUnHg3i8Ynec6qrfQEvD2AXcsBCrns8KwpxHCMtD3UcEgYnvS9xP",
  "key13": "BrR1ansZbrqPSggApDFsb2oBR35cpTDaCcvR1CMz22PxTJmkYbxQnijaLkJxirEAq2LhZpF2EkCvQyxoRkRLokW",
  "key14": "3AoQcK9g49LU5oMThrK276mxcWQGyoxfvPgaz992BzjKEwQwYLyVJZZfYbdNbdMkJofEZtkMDisDtAst8PVUsxDi",
  "key15": "4ZQ5uhiEGSnL4yFVDExgjmSJgnXsNnhnJ9qMuUeCpQt4Yr8bne1cSd4BxuVQ4iAvLRk8W9rzjjbaLqRMtp4g5K1p",
  "key16": "3V3N7KR2KLv4hTCnwfKJHwu9XHAtUAuQ5mKZuR6AN1q7RhpWy6WWHMPvoZPA2tzc1Wb5Q787LM8gFBkMk63JAHYY",
  "key17": "2kwG87UJfPMjDWwSy2KA4fhVqWTDvRJLtBPRkroxgeyeb2UTtfth5XUXALprMbYi8QKF76fDGvMyuCnjSsTw5x91",
  "key18": "3zw2nzwrU3gPBgGgaFoiBqyrjvTcoVdhT3oSMaDqa795pe6XMKauFvR38sPyj3eHopaTtdviT3VqsTFQtdPuPFpx",
  "key19": "2eaaTJbwaUGZPotJx3WqfAGjojQYbZrdqsFRqcfStHgiR16G8RJ4JoMMKkLij47j3LJ7QhpC7VBMXWfCVTf5u1KG",
  "key20": "4Za8NLDrLG1ph1sPPFyCdJhKE1zpVPFbBQuY43Pafo1q9KdZrn5pNwmJtE7fXQPBP9GvW4C5cQP6AqdkZ7Uew5V3",
  "key21": "3eaw3vBjDnooGaMTwixA6oxTKQSLDhey3p91WYQmKawtwpfvx9TNSV6DT32rESjv8HsaLbs3FZ5M2GiKg7GX6eXU",
  "key22": "UC7HarL223dXMhpAUeApg321VqLkGm8GVptKNkib3BhJwk6yoy986Eh7Xe4MYm59JVZ1V1raNm2ussz28XrxPCh",
  "key23": "47BPokHmXBbVFizkTqYxFLYim6BeQFzQ3GvCCfRzXrNo1ZXYSnQ7MvChqwws2e9uvs8J3p9SrSLuJpTUiui7Evox",
  "key24": "3PJx1tmWb4BXq8TPNz4DmE872gGhuJN1oLzGrYd8WWGvRAUMVSvqLgTiZhnJb7m2yiL6U6hzegB3nuRiWymMoRSq",
  "key25": "5fbgHKraS3kPpXAR3iTeZXHN2d2y1SM7AZRoLWZWL4n31yd4Y3PnocEoyejkBxJA7H5sEvy8NtHrp9jyXb33Eb17",
  "key26": "42PE8eoYEU5LmdnRWQH94zJ5cHtJm8WsQ7mESJi4YDXb7cpY2YtT4BT23VuNesYWqq9izMxPdKSCAauZwtvvYuUj",
  "key27": "2KjV9sSG6doKJfVhdQZ7xfNWmCXs7zUTVPkvzkwz4VqUnjumKL5NpoFi4JkCBDP1xrWGY5zdxYRSuAVcgaCjEz7b",
  "key28": "4y5jn4L6NJnXheBFC1Eucsd7SkjdxuX3TudiUpeEhVwHVgBQmgu8AfDBZZGR3pHD77XggwyVgDaZ37YKTDt6MW3N",
  "key29": "3k859i3LrevDTU98Qk5z2iFP3bP2cjsf9qwrrNreA9dqPMqqQVkVBWd4No3kmw3GQmqv9Zkz3QEmHQXip1euNyD4",
  "key30": "q9WtiaEZp2vz7uf83GKsY5ziWPcvWci7K3KUoYwZA79XvPUaJkFPW1TrLU3B2BmGcsNf4ydAWYv18VRQbQ411N3",
  "key31": "64p66V32ocSwtNqtDGtgt1xwwucak7yicw2of5y257a2ikmhCKk2ZHY4w2i4qiNqG9zGcRSDXKAvptEfQ5wo4vHh",
  "key32": "2QWMyEkpXpwdFjWCEbVcyX2q42MoVVHNW8DLCCRMPAgbc8q166KEtDJ2id7CAhPXymSN7P4iHG5MbeWobCUxoRvm",
  "key33": "3b7KcSxsuPu8rjP8FQg15RbAnHuieK8qHZ9cMYBGVqhJ4EkD1tEuhWcsdS4Be53pU3xoaPSE93ixhMZ6qkMcRN1q",
  "key34": "39xseFQhELTAiUgfuMhuUDVCZHA1Lrk2JVkYipKZh4HpRFAnCJDktRxkJFeWWF5riqqcfBmows34inaZADGPXRBw",
  "key35": "4rXhrQrEDrLWx9uWYWPnhFDFCmdfHYwD7i2zh3d3yTAvtHjgex3EpNVKiQKaaCKCJfdXb6apvxTDHdTySRX3RYJW",
  "key36": "3qqSJLm8TqybejU7f7gprqXxtAoM7g8B9jmYQBM3X8onsSaBQQaTY9RBG6vtRAo4fUm9vNdstQujQicHrC8JCtEe"
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
