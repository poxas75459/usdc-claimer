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
    "5MDjgijwsZJ97VBj6XthkwdaM9F2M9ZGVJYcJwbkUsrSbBXynNGxVWi91iaDz4UCXtSgZb6WekFopHS1JmLMnbBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wz6nm6ZUczTdMgeL4fmqvXqKD23DSdXmHXJjnp5iE7n1rjdvYeVS97qoCoBMXuJ2exNRHz11x31HexmdacMMdqA",
  "key1": "5YMPRYWYmUEQa3SZr6kLH3ULgfy6oZnLQuwErCDoZHDx3ivGmZNEnB8zyWxNP57iv9fTT6LPZXrejZ6ARkGMsT4s",
  "key2": "5tRCuTtsuTwCQF1rXaLpQTJ4GaDghWKTnaXktLFAqcpXyi5FQm5zzq7CHHi9zzw87N5aptEQLEH5tQgrQNXpmiMM",
  "key3": "2jnLgjtk92qV48mdPrGoeixnX9qq6GFXycf5GMiR3ay6FSzHb9KcAM9h5LPriRt4oY1atP2MuovwS9STrhpNVegp",
  "key4": "28qdwcZ7qjV9hFh5SoA6PZc2DHevG6y4RpBChhmL6octKfAf24YuCMQyMrVoXymqMacmrDXpBccXpdaQxVhMDHMa",
  "key5": "4PfCRwuVF4jcFtFxGfTw54HQcQZ5cJKvnGviCC8iaW7GaSFXwqvmaDCEREce3jJ9AfXUfycN7wbqatkQJBCzW2Z",
  "key6": "3xVebWtb8EKjq2G3vLbNGPUXLG6hw7d8hukjX8vFV4gNHsdMckoD1VmfNvErgTTB3sh9dBbtUBDtvtvuZsej9vb6",
  "key7": "54EP9CuH3wfJ49VbgJDvXm26XoNpPQJwkviSdyc7U99epxxNFt69iW1Me9MhMLXcBuJTbcxwF6qY5S27LQWZBuiS",
  "key8": "4T1obKCckwT2WdZXUurPHKjtmgh1oibRth88LPBLHxYEjC2NmvwVtUVMpqCcji6aQwN4dcnMDCe1kq8kQ745Tdi6",
  "key9": "335kVr9sPUTdnyXE3Dxc4kKP2d8wHTQs2XvCDT3mxaX5hg3ajdUcD4cCcvNDUUP5sfu9ymQCBxzencWyXe6zUGZu",
  "key10": "2cxqMpY4QtapHJUZYJsYPe68YJRZffCH4aDqQ1dthq94VTnr4BgyNq4VCue9j9vcciufK2p88sxgihy81qXeUXSf",
  "key11": "59amEvr1KrfjNyVP32oZmeAXms5zi1Mqk2PkwXYqcKuCYYcGxvaG9oybsyYgRuFPExxFc38pJDgAcRKbKKJQWC3k",
  "key12": "P3De9TP5StwwuRhLXwbs1KpdVtARC3EQotkEWTjCYPkfQkdk61qMq7ExAsEViYkrHJx8cqt16bx9YUT1XjEfNxM",
  "key13": "5hFGKZpg6ovpeCnRg7cjXcds9JxUujFWkfeqWCtEPePrfMtCR1pmqQoa597wZV22YCL9rRebUsBBBqc1vnsg4hSU",
  "key14": "5nmDejsMdnzWWxn23yCh8amjyzk2Ge9CVRsYxLds52uxufuE7tn1vqMS3F1L83vChjnpjnwYsmw7PkW4FSvpvbXT",
  "key15": "3i8dCN6B1u4rsG2QeQ9vaQXdzwC8PE5q8VdUW1x8wPy4j1yhGBDhu8gw31KUb52Pd6bQfqMhw8CGzE38HWLobckk",
  "key16": "3yochZgDoh8Gqhk9NfRvWVqAgs5c6WSJssEGSxLv4W8cPeTcWFrJMgTM7vAf9iGXirNFpq2dvSAvpwGWETSGhCZL",
  "key17": "5CSZgvfrf9vLsnHJYfdDLse6UTvQLnoMMmnUtYdwx9EmQiVqNQAUQqNh5Aiu7oevs83JTS4CdKhgXykBd23T2vd9",
  "key18": "27r71oXCeHR3Sx6jAHwhXuabPJgEzdKbCkX5yu1x9HJHBdNcYTZp7Pr2NPZCiGBZT91fTgy97hX1rJdSt386eogT",
  "key19": "6261PTQG3RgybEu9XZJsrWeDdZrDxeP2Xx55MQU9mXnaX2XhBTvDMR2mceCs64BosqS6QN4Dg2Er29KqPYxShweh",
  "key20": "67YZrHK2x5ZFiKBQDTAkU8TPCiNrGewFMT5XetDMVBUUgt3Z2FVFJDUTqMULJkKjocCbWjaaDe8dmtEQwatucaga",
  "key21": "2km3mSRDVgPidC7nxPnFjZ4EfnUocV8RhU6784NA1ZSai9CaqMs8DqeUu5iFKtQoNWGvsey98R6g24izL1n8t35G",
  "key22": "35ebHw4BHaCGwWxTNjFc6JqBJBMSMSg6UbZomPEo3nmZtGFzLvf5uBg1gvZW3hfUKzsSg6HyG6QTLqscuVfUwv5J",
  "key23": "3MevENfC6i3XsDq8FqKuDiYVp7oMhE8e7ki8PV8UnfYZ9ugb1EYVsmai2n8KCiLmcqN6MLxxQsLoBdmZSZaGart3",
  "key24": "2S5NzgSazVjK7TiGc2dd6bPVLGNUGoUX1fZ9ydgcJ45e5gEgpw5KTtowCxRU2dGt1W9Ghki4WZqr5TQxyo6ErY4L",
  "key25": "36E9JPWs8uQ76m9RR4BR2cAJ8zf3C8EdwoUd4vDyACiJJb1BHaEmVdytrv3rSrXiDMiNGcjXL5KRCPqpJtrzFX9G",
  "key26": "drvCykuiumDEBV9bjYRjGzdGCiWsQgQaSbsuqXdUNg3cgCSyTGCcx9odMbCV1UuA2jmGyw8oUDKe3iJJnqHeTkj",
  "key27": "5ooxebYogLeMcPCjjkMzLSrfd8RNFZsKF54JeHAV75wf69f2m8n61Y1bDsbfn52SUBPbmSqVZWysVxFCyGULGzXw",
  "key28": "3VpeknGnhj6koMxXQqgGo23WPrSXAqLAA8rqZuUgGTuRuBc6L1XuwGiN1Gy422hC6yNRZft4ovwWEp8kvxNXeUzf",
  "key29": "54qqzpWrcq8sMqjYA9QZu4vRYGzrUNXB6WtrVhZaCwo4aD8fAWP9kcM35GpeeC1CPPjSgs8exW3p3EZnypwfZ9hX",
  "key30": "5i2MHhi5crdKbdRf9sVoHBN9b6hFBRULxCZwq5z7VJ98ryG6HLP6YNvBdw9DRHhWtXCkH5ZGRstPpr57scZY1vM2",
  "key31": "PxKNyRcZgWJy55RJJDwLW6FpHQAurtQnNCNaJRUyGGwnQ5zCG6KJYakSjC59REsnbj4oCDj1kr3aJSc1wvusfBL",
  "key32": "3PGmf8ainLZCBREVN6WTJxfNxNsLxMBJvDw8a4xSRsKWc4yAKhtDZP4aUA9QxyFfgGHZ2zfTVbXLxkQYgFAmApHo",
  "key33": "2TcWLbWJUP48kp1cxZvdJNJyCS9hFmGFK2tzgcNgNZefqnyxXPAzKampTQubiRhxGHv29v4qHAEV8vfx2PztxTv3",
  "key34": "28jEbiRmEqYqoghNTRb9TUBNwnLTaF2g8Ho4XHiSaWukNEsNEH4kSvLesqJJt7auqDfHj4uGMABtgQH5RpsyHtwK",
  "key35": "2zHceWcs45MJDaKus1ioH4Pw5TmGT9QdjYjjBhxh647G8s53c8eA8VpJzJFS9nQuJirQxDLooySVd5xcCKTtfzBb",
  "key36": "5Pbeq4j8v9r41x2p5wgfG8CksiDurN7yw1626KyUAJzrXTw4UpH5akuaVrJsBDTaUfZGb4BBkrLxcNg8bzA6EzD9",
  "key37": "3j3fdnW561ndUXHiVcihk6exNduswZbuaw4fuUQ4hyNwP6dPwtneQ61J33UiEhDXv7PgcwkXqwsnvWeKZks1TqEQ",
  "key38": "4MDSpF4uaJCbQk3NNk7x8zyDhacurzvqcGJDiXcfgMVv7m13qgYs3gPbfTfpVtHD76uqThLUmG6Uv7uj2M4FH6xC",
  "key39": "4f74dDWDdHhttsaXxxJTn1dZZw6dFhTcCnFvRcNvrQqqWrjJ2QfpXDqWNy6B5oU9N1ob12XES8NU7R3Dzy1oHd6d",
  "key40": "5ib38235oxAU2P1LtFq1vSGHdTSSZMfNXRejLmegM8G14PDJkmDap2KxNkduFgm5dhK9hWpDcSZSz2PcbGsEqmkA",
  "key41": "2xP59fDyFARTg4e84aozGDDNqdZbfnnm8MXDhs6Bax7ccY8Wu1QUCbvLrUu7iGKhNpCbpQ4HrZkph1vKM3buZvdJ",
  "key42": "5WHE23foYfC1i3yAo9YGtiPXK58NcG8LaVQ17mWjR4vzCEA96AwXVyxxctgHwH6uBcPee9YCgPSzSqD8NHubWiPe",
  "key43": "548Um6wz5YrryNpWWsHX1n6VSGDyGKWH9UjGXwPM23FACypzpkCFNoPnMaadPYPXL3deH2GhvdFk3BzFFHYGztbh"
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
