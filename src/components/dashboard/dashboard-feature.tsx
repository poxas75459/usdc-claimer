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
    "5z9jp64dMcxJVuz8aPCn7ijF9X7VaxhDVDsspkUUTUkrheRMuCkgRSMzwte3E41WuyWrsCKCUMYbkVGcjc8wMu2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MCpsAkv4Y7mGLd4AZZdR4YAcW7aT5KoPPdJ7Lkoj2S55msyxLLP2ZK2UGt8kT1k1Q1Tt5XR88znei1ncuPo4uME",
  "key1": "4PigNpL1DUJYysSV3Z7qPesEwBAN8Teuu8rfhh8PkSYq6HqsMUb2FdjPe532J3dnoHBXXtKgbSpWnbH5zzo2VYqA",
  "key2": "3woeZqS89feQeREmGvR8P4rd6uoTSw8vm5GCBLnq2P1mXXPWCmkfXwRREUdtoAE5eW5X2ga3JJNrTbcnVwa46cye",
  "key3": "pfgXzWrdD8LYP8sjeNxTobNodtzYqVPCBLhYZ1khPJ2XW5KViTteKCVgWPu1yrpMH63z7dSYzNqvz9LPPJqbnie",
  "key4": "5T2LELaNeZ7Lzzy2VsdjoHZtUsa4DWAoXMj494JU7wPcxM9Dg2LDe46M9R3JwhmzrpTpDabgc7QLtGGH4S28KTWt",
  "key5": "3MBP1ULQzD7doRFM2ex296ZFPMQMH8RkXeN5xd2XBngs5juzHrzk7ZFLrRzFycAK6Qch9FSiqWM9ksiEarJYdqKE",
  "key6": "zJ4QmvyNRVuJTZMPueyev5Rw3skQt4RUcUwjGYmZkRXmfHEaDJc8pezkFVoRihzFoUedbySrZUqUTmznb6Vd64K",
  "key7": "3WqEydyg7BS4ZGur2eaVgpiz6iuGjaFvN7t4wRejBWxcQovoJoy711CsQ63eZLoB89k3ZrT3HWWVgXwemvX5wvAy",
  "key8": "3nA6X9kF3p7Sx5gxFyWREzXCeZFEkdVtXmfaoRRPVvht2LMXuUt1TB3gFRpzFsxQA5GnzyXp1BHEG4taRYN5MWVj",
  "key9": "5J3WmSFc8Ez5519Hcepdi4VdYPqxfENn5CpE6SSmgVknuL8AuC9Uzbg7ubQiH2rVKuFcpWd8rUCJ8ui3rfc4oAb5",
  "key10": "4nMYZ21ZnmAfP3QixK1RuJwJ9CV8fG2nafwRBFojd5iRWtCJRVNCKAYJmLDJryT7ypP68k9k4Tw2sDF4ucx3rw5c",
  "key11": "67gzpWBt7L1iMmnfkBk2FfUP3wQ5mWUiZ59hfgGbNfyvYXrnPs7jLT4SfyaKLjKsDV9mMyXhGdqMGiKtmM6XDFvr",
  "key12": "4RpTKqVvUaboPbKuSVhLQ59Dr4STuku47h3TeDsCRj78mFqfoRYJwQoo51B6BPUiDA7QhkK6PzK7s82TnhYNTXX9",
  "key13": "4BBpP9tpuMpML5YvvScd9haaEwrBSuYFBpaHkjdNJD244WcrM5mhg6hA4RhngTFTdG1QLVjJgui5Et9t6xZBbp5j",
  "key14": "44aNrtLhsCPpWrZqrhHgHEQWoXhpszA2TPwSKiRTQpofhZtseyYkcimDEr9iB2qKL6vhb8AWuLaKFQyS9qETXhjU",
  "key15": "5Y8HhdzZK3WmabwpnK3PFp1qx15rjxmnrfD3aGJ4iBqrHVguQJrWxCK8iugkFZ33FKf8to1kh2HDUCh898oXDPtR",
  "key16": "2Di5WGqLmuWxKzRU3ZC6r8Re2w5kxqnu2L6Bu8kqFJx1TkJWtHeb4DsumQQ5ipgvm6uGonNi8domM8phRHgCMnZa",
  "key17": "5Sfdwtq7zQephmKsCNaUinAxHPJ34HMQnsmqhvPS45zvL6PAyqxFJzf59g4tXSS4VYyovQf2ASPdo3cyHjAMG77G",
  "key18": "c2BE4HGu2GtSCvhkwJC3VTcCLzXrkBbJrKTBojV8YeT2yYHXPwLr9HbQ2SNfTcSyUjJ3s5VpZzKZHXMiNaREM24",
  "key19": "rDt4K2wvSRSTGezwkyG6v5yDqGU2zRUfknHFsfway9NrLJ9v6QGn5EymeTCxgjBntTDXsbTLuEF6CuaCmCsfHKT",
  "key20": "4W5Uk6DjWNUVozzoqHmpeMk1YxFigzEh11pceBJo8N7VjZaxx9PZ2MgukUKUMsvHYy8kZobEKaPPiCEoUhc7YKG8",
  "key21": "3rvVpY5uAfNVG7rBYhyMDsbJw9pguKCvWMCkwNpvDxUiJNNE2Bq5ZdTsuMVbTtfeYkvdQ6JHAwAtNLcP2Jrbo2XA",
  "key22": "J4RnDUk8rS1Zr6PHgG7zUrZEoaNV1HU7KNAeWw8Dmk5quw43pngMZ9dkb9a8PSiqYGBLC7JTKABuw37bfpkstCa",
  "key23": "3cRBh1LqPQAXzDiQkcNJsexjEaJgRLx3wAiGDHiMdkZV7XFhjFKBCNJrVB2CwVqdK5fBeA7CuhouCYNAJEi9wecu",
  "key24": "2WvuBkFD5Zk82B6fUyoLuhnah3S6BYR6CGTcfavC9kFUcjfJLwt9hunuMvPoeSs3QJCp1ypBWwBLc6HVyW6sPZKC",
  "key25": "4C8Cra4mJjTsSGGfT2SRWaxL4UMr14Gxiz6Nz474sfd1gcSgjAUhDyPDPLD1iGUdfP6aGC6LSpT89hAEZxD57mRk",
  "key26": "4BkL9jUN9WsEGUps2UF1qzqAcG4dotWWR2deuAruoiipN2JnwRfTqzaA5f4YYp7CNZsHGpDDrYRTZ4V1JYfov7g1",
  "key27": "4xa3ABRdPy1w69Mi5PM6E25TQsejvvpsXYcdVXzzxyYHtMKpT5PwYES3QGpmNfiREZVnqSUGhMvCYeLUJWNZFZ2r",
  "key28": "4Pm9i3dTKh1oCYSWwqTR5vMedXz5cEYEipWSVnhbPL1eMiBuDCqcXLnERUAQbtXzbwfwbTeYRvpeuEJCrgnxgdQZ",
  "key29": "5iC2ZKpTPPCgeotbupiQjfM9BYTRys5WCwJSTkeqkaNyGXKZroZh95wR9r42ovUH4nWvzn3Wrad7WDYrrNkscaXv",
  "key30": "4vN5MpxdBWuqa8UVqQhv67twLxQHc2pp8PeJMRMnVDUrwFTG15SEhhofdsj4cTW2zMmy5c5mfx6aHNXmK6myamGZ",
  "key31": "EWoWS7aBqzyXPUVBPmQiqPYUUK47e2akYWA4H8E2PzPCHVAoQ8UN3dHmjGMWpxzUXc1KHBj3ETysrpJ1YXGqeKj",
  "key32": "2xA2yLbApMeU6qDkLUyRYK6KYAXzccJ8J72zGE55PMbHy7Q4itEC9bn7ddfw11Bty1ibNNUuuis26XWYis9rNp1h",
  "key33": "497H6Bd5xCzsMuQsS3L7P15PXqekvQDLraLws1kuWGAjj6TJ6k7M8g9nhNxU4aB68pTJCjPqVmTFhhaNTnQnsZx7"
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
