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
    "2X6GsL5a133Xu5oCwhe5Wgn8c9rmzNDw8qhyeAvRN2smCv6zDoRSQxzqy2yr6ZZzs7xB48RZgZWKSeXt4UYbwY2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E1cdWpWEc7hRTyf7kWM3b2vxCDH1mfSQxYr11f2wNygAYbNjtQai23ESBnRAovAdSxG7yspJiLpPNmcWbsiSzea",
  "key1": "iMD7BZy65hFeB2PqcFDjsbogsUXbUwRAwE3peSUGmWg5PcLeCByeRsYr2Fs2ZgmyFNaL3C3K9N6kHiP2D66D1E9",
  "key2": "5vFN15tzbCtpcKS7pZNWUmfUHFnSELqUs7AQLr8pPDQgCjrbXrfbzQuahKUdkP4C7LveyB4JLSXBtkSwoDtkbAfy",
  "key3": "4TdjiDkLnW5GXW6YXjfWubFUEdiGfNimGNgwM1k1BcT2Zjh85NzJnQJEaouUhopDatHkkuuEFQFVFKBdMd9S88d5",
  "key4": "3garqRBozQXWTP2TQryehhEDfN7yndT2yNnSYwcYVUkkUJKbjr3TpbZteC1hdaKBPMzNUvH1Yh9kb6cvY8vS3qv",
  "key5": "288FCrdZuDKX5HPnixvt6FvC4RDyXwgJJ6QVkZStadk7qXDBiYp4uybpLySLDnksNpWLp8EwKi5zokdfcVGFCYrZ",
  "key6": "5hqLnRC8cd9JHu6R4TrAJXXzobAZyLfZGucuK9QPgYTXBNBzwYQqcyAVESkq8srf4M3FhYLp7aeQZVLhDBWKqyEo",
  "key7": "5eijj7GYdVUz3xeDpCJWrVLZWDDk2d62jbS398kGjhWUS93PjrvQEECfgq5ssknvgE8pCu199vS6iLHX8zvK6odm",
  "key8": "2idRwShMTjjX76QinzcyLLJxjXNtoSErPPY5FddEFjyd9KDkKdDcvSVdaJPPLJeB3keaD19ru6wnHhVQn78amqhz",
  "key9": "5f9oKf6RaHbwKfBXcvPyhMu727AfnZ3Quv1fU7nxwWcMJo6oMCQGy9mdct9TZhfR6Gg1qS3uuF9EXUewtNjAttwD",
  "key10": "2xcEyHxV7owPLw8NcmbwhupFacYmEF9JeNKf43C2zSdo1eajvssD2RZ52rkekeQBKuvWmHrXRMNADe5WSH7i4MqS",
  "key11": "4KByV9ScmWSeLAbBZetuAdauNqdUm1ibDCwShqCLnBePkhJe4TrjMMGafvT4edWu9PjX6idrpn28n5fiV4vcmD8s",
  "key12": "28boDNMqbFJJEJexf4khhJZaiLGnx1Y2syiD4CZ9JyPxRAsrKugy1WS1N9rsEnxP9eP7nfCBtar4vAy8nnJ5R2VZ",
  "key13": "37AW6Cdw9Wr3S3QfHMNoxdsk6xYFmJS6h59KKZ2pGgmKHCASzURPVbhKSTak5WSw8usm7mx36MSy5Ymfn45vXjMj",
  "key14": "ixrBgsa4vyj7ohn6w12HvFBQniTBLjkfJZuKn5FQNyKQtGk2img28RwNYSqwtPqe75U6sENDmWgSS9WBK3Y8jJ6",
  "key15": "5kW9StQWFJraKJFUgXHL5Zu7JCzNPP9qyoiKLXGwrSxL2cmmdiKJaoSWSQzNHmkyquLYHFFvH1pTMmFCTuNDdm2W",
  "key16": "2xkCHtUac8DocYgdL3ibGdYXf7Yd4xqAPB5YNmLWZXKZmRvrvTLbX2fv7xsVoBVmJrNyRsyvCRBdp4qJRsdDdNCJ",
  "key17": "5hzJ6gthd1BeSyi8M2gg91AW3Uwo3unJm9QfR8VFYB9Nb7KpxbXn65XDYNy6WUcRRuFbpcw8Hh2NVDzXguPDt8cs",
  "key18": "4Bh2udaeNZNqZ7EqcEwRfe2Q1pDr8jzFWsGLm5J5F2fuzrPZi875PyEVrTPWDXpiinXbvgNKysZ9U9MdiHx6CT53",
  "key19": "5aPfbCja8au5KQFGEGvYyAFhb65e8QKyRKX7Lb7hPfJRhRkZgUttu2EPiSrxDjVzKKLMkDG4y2ieZpf4QqWDG5Fc",
  "key20": "mXwDcZXiiqhnZexUsvGb3pkEphRGVqR7stWE9F9taBar5uJsWthPYAvVvR4ZpeWBEg8sTDzMQMAbiP9rtGwnuji",
  "key21": "3XrM3QFTyYH3TBhcS3BFXKocq37sbeoMrbL799rc4jWBMWiE88ffakKxAYF7nRfLZfNH3LpoPpb8vEbS5v9fL95q",
  "key22": "4Dr3niz3u38YaNJWykap66K7yfzUKqLA1v8e455igwPFAXWQwEY8JeMvtWGGbADenVHXRraY8bemfgx3xVkcgASe",
  "key23": "4tuzA93tD8K3qXCCtppdntTGdVfNMDJphgaeApYqNYGMeu8iz5x721JuCTuTUdm3N5hcVgqRYCPBexCJ2n1FiAfd",
  "key24": "35kiPJ759GycckdRr2ouzUDk8RfYF8r9x4r5SMMYTzm6a1U7nWFpC9J6Yif98gACqgSPAYYTxryUxBWYvPfLvP29",
  "key25": "3cgJX9BZDYJwtzqag3oj912NhshJQcqzw97T4Y8tT2nHf4egkYoNw1KXfEvk65hBSdWYTCtbaS4Du1kK3Q7YsVzz",
  "key26": "5DKjnT14GR9pgkVgZGf97wtXg9T39xUrEYSetvMtYUEA8oKtwyBTvfQS7gg4ijNkQWykUg8f5S4sTvazrGxFGmoz",
  "key27": "4q5bLmwb74NVC45bweK2ND2NdxZQrwvD6xG4V1rJfRargJiNU32cohJipcdzorWxME6ebabHWME84kMddAZRXPHh",
  "key28": "5otbssMZu74jRk1Q91F6VC2NYUFuhH5wQ87sSqm4gyCbp3KANBz1MscisupHiPXCQ73UBxxjnGEdp7uWueiqTEku",
  "key29": "3pwU9MmAErWTvpsZ1u2ENiaY7LFyKP7zL6cs9cNtVgxFkzszAzCMae52xepzwX2rRfGTMKQfWu2B4MSXzejvPdum",
  "key30": "4Y9HKFik4xmAsnQen1pJzVK7cLvJpg7LMzBc9YQdtf9CP9zYBXMRz66ZySWGyx49utHEQhX3qN6f5aeBcm1Jc7V5",
  "key31": "3hpfCVuAiKJHWZB45HAnASvaNyNNmAxeAEr2aoozNyKmiQiKrEmqxKTWn2WcLkQ6zhcJbQPjwpvaS7cB6Hxazenr",
  "key32": "3d9f4R7XesT12PAcxEMGC5ojKxHxV3Uh6341wSQkU56Cpey4UFYhdP7GDJNczDNJXEL1ZdZXmJG67oA4GzKGhbyz",
  "key33": "2xHGSWuxsasM4mSyHoyzhDNHMQ8ddxPcikCnqJRPeGQ4ZuusStP3EqyWtNTf4EbhwoZmFnkg6tE7gcr9yDbj8pkZ",
  "key34": "5QaHCDidS8ZF2K5CLP58zKFTW7eJPnBiYLwt2woY2zAWazSinn676uthAU3D2vVyPmWCC8uvjM1G6BJvj14b3CMT",
  "key35": "4xSSDya7mdHSCoGoKt39x4mbDASh2o4S6yAXHxp1qfdeY4JrH57SAK4PfP3WjqgDpRm5J1E313UkJjJod3as5mQ",
  "key36": "3xmAPWXRLCAsyjYXEHhCrr3urf35qoMsKFDU9Y5FW1DBbGhcjFEMSygru8xaCHbLnEy52jkKGd9whkdSLU2E6FUD",
  "key37": "2MSrst8LAqmLdXGcipEMEPFSAiqXAvVq8o9Tn7xUUG4FHPZGkm7xA5cczSeEkGAQpFhAcJ6oywftehfpS7BKdsVg",
  "key38": "3C1RYVrrNJmjc1aDjT3yiHLyJkHwmXnTCdTvUdkwTw2wT9XLcB4n5UrGM8fvBaxKHVKimQaQzaQB8GKNSJ2PWroC",
  "key39": "4bkFanHFnsAQoLNazCjzYYR3ZjDVL27rDiUAvy2kRQaPfjghGj7F3SRJdi5S1cGzqqWUgf8c78baUUdYEypa5ZG1",
  "key40": "4bXQcLmaEHcQZUURECGS39kmjanN93R4AKqd7S9MNE5CuRs74mX46wSiiGa9esrkNwgmL2bTGCgACw2VsdyNg8rD",
  "key41": "2UcxTrK1cF29R8fT3ZPsiTJD29XtdfaNsgWCTMsJwM6CdUcXmapXMe2xh8Ctr8NCjBaetDwjHKtytvj9XL9S9721",
  "key42": "5fh67snQGB6eKAcKbGjEjptMNbeQrUYRtjsqmH2jVv16JW79ppwC9JyudGywWM28dxMqJum4oMfe224EkT2zfqS8",
  "key43": "29tyrvnuK5YHByCVr7AtwhCg5Acamk5bxQTr7MKfobVVczwYTLNDyvwSqCBb48nPrbCsEef7rCUpEjzUWNW39gse",
  "key44": "3mf6n7yzMc77ZBAHXRHLVGAN85QwF2fWM2nWptzDawamCZqgZqmX32CGUhLZKMbLuLtkUXJeYGGzxuZL7jHHL2LS",
  "key45": "2R6ukrLGe4etXkzQEHRh6Lod5gbsdSo1aSSxoSqpKofsLucWhcUfRtC67sf45zpZULDgVsNmNUZyufggYQstjtEh",
  "key46": "5TmnsitfzxF5YUpMs6XVjMRkcy3Tr7TYRswDVn6seqKG7YtFCAwnp5RaBd2iPNWNUVUkBN54DWHhRETP4okbMuM7",
  "key47": "bZUdkxMSKCM6zx6SJixWiexervAzNFaHe2Q6BVLbFuEtMjS4mGD8GCgur9yU13QCjSN7w4bGrqhaN6o18KYfT1M",
  "key48": "3QoGhpCGxYtLW7aQ4WkPgJ5Uf8xSj8vrR97nKkQhNydy6m1WG7TrJypFRPb42PoBPE3Nn5bQEPDwCg5wokj8axJ9",
  "key49": "5phPytc6533hEVRPZv7r13vBVwRBVFjEkYpnagpnhL8Kv3BMGnxFw49qF21bEgpfhtM9MFzBVX7ZxLjgh27Ufyzv"
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
