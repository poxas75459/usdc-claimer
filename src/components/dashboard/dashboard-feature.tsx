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
    "5eKL2ZTv5undh5LjUveShEFPBkRGftks6hxc6GLzoUzNeJYyp2H9iQDfTpPuDkNHtrzGbQJvmkq8aPpTLGSW1bJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47KahH2hjiaBEEGTDDbgqNmADRgjdPLKq4TUKdWcV4kvfnbZNnUMyzaer3jQmVdk2u6CRQB6GFqF4NxddKKBXzSS",
  "key1": "3MgGeh7F56ttfwBWKt4t1KSSDpDY9So7j9vSy1r6gsZ6aNqSSTU2mZgyUqpkU5oKcpdcZCXXym3XZh35HL4v3YP8",
  "key2": "2ZBtV4dAaD4Tt4XAtCgTPBffsT4U8roMH79S1Axpmj2LTcPVNZ3rVfVKAFUyKmq6en6GQg1YeJNPnqdwkCHML3UH",
  "key3": "2JpbzjrsXR9Y44DA4cLcozapuqrLo12uzmxZV7Tf4wCgMZuRWVMvVWjXjEggUYeg26nQ6EavQ3HvV6e6oA1FDpZm",
  "key4": "5Qh3JiSzchHqDdD8UkfMbMtpbgW9hW64qu3thad7uaMz7mgk1uJBpgXWDT4hCYJ18CdVWkNG4rDFfycKASBNTjgg",
  "key5": "5CfKG2pTvs28NRPGAJWVFWQfCaZVasSq3bGPJsEdz8kTR71LPRhfd2i9ykuUzuhxBW2zwsBVSqjnnemTRvJvNBpN",
  "key6": "ev2Cz7hCtRFvEaNxHRTrswEWTwQrkY4rAdjo4yitMBxjdehUGSfbJEb8TujB45cWgKsJNsLu7c7pNXZNereLUmg",
  "key7": "2HvUkRD3GTcGpQ3fF2NPs1NMN5taYcgtysTduvrYYFtXwvqDAa2JgbKwRqZQaHCtrtr4jet5UFQWrHvCjoyKGYYg",
  "key8": "wWJdrW1G8RZvRvkVG6tE54ftnZSRMQtysazNiSTk1odMeXUFuXWuLjtBLX4uMvacSsnF8MEbuf3YChaEHnFC2P5",
  "key9": "3Mi6qh9Xj4evSnaxGmzrSHPrAV3CNhECBcUMS3mGn9UgNTkCiWyLXYhcHPsc4JdyJcR1r2ZP7yfhUrYhXJWHQmqy",
  "key10": "5zug55unSDJsjShhB9CBBVso9Uce6oRhUZX2JudPTcipqAweHNdmx2ok6uGBJbBx5NUPkdvC9BC2dwneaNUo8V9s",
  "key11": "33PyiKpgoKmbHxb7zwWx2L3VJZqCLgxBBmEBrMncKCHGCUTAx44Gk4YoRHwrH7hmf7ZcRyBxYevotpuso9fJiPGZ",
  "key12": "5QD3xD4cxrSLjyYtr2v5PY4DuGuwgWrZSEpi1EsQHUDUFesJbmosUFBMhpBekr3Z9kCzG7jmZCay7cne6CMxh6SC",
  "key13": "RpzrNWJmq9MarAWMwa6L51PNK317d8ekS7wg3RnWBYtrdk6TDAmAXo17xbedPBECHei6ta5STuBnPUr2G95nvhv",
  "key14": "5JnbbQJsWwxDkj5KKViwLGBBXaAv3YbDWvCRja6xD5s8grBk8DYmj61ZtVfxmU9umv3JgNP4B1jJ38JZQT3x8WmU",
  "key15": "58h2zRWCxxA9W2Dt9qEFJkEANpZ972FRqV1MCZywFwi34osT58dasWpNEht9QUnJufBGkPNbDTTfmy4Vjuk2HPuv",
  "key16": "56QAvFQC4gLZQmXufxmoHDYQjpwc8jHbLAPTgXUC3wwyP1XkQuXVaGHJ9qs6ynuTTZ7B6uWdLMvpfU1b2AkoCwti",
  "key17": "3wgCjyPopjVgfTWrXR8gtWQwiNgX9ckiC9Lm18RhCCJGGnR26oDq69E8jE6JG1DoeNVBaf8tqKB8Ps4pdptoWfNr",
  "key18": "VFidseQhS61mJoR9cDgtTqkonZabCXcPjNhjjGQ3QqfCiPfjKdMwiuZqfdMbhjoFFQY4Aun8CnDx1otyfEjYEG4",
  "key19": "4HQsoGndPwhoApJEGvdEBzRBHFMERL4gRfxMQZDgjPZ5d6jP48FzAZouriipKypBqZR9hRjxsCkRLANhhx8ueYDL",
  "key20": "ZXvB9fWJFjZdXCS54fvbnFFmTLBG2cMMcd6hziFJXKbzugEsFE35aox9HEiwbjWMgF8Wou5gzi5smdSXi9uaZG9",
  "key21": "3nmMAEW2zV3EtQWngL15WKtL5NRWinGCvYiC4Ebnjuh5RDTmVgoeZ9VXeeWvVswA1McbbNbqHrM8Eb2oSjBNUnUv",
  "key22": "oX9qA8aytKEzfmrNG3Tj37K5xVtQpgPobpR2enMUpobvvPQkgHBMXnMHhNRQeYtw9t78RCGfSk6tJKDZ1EzKm6P",
  "key23": "5sNw6zrVXhgJV6aLCJKfZBoP85TAitjzUsQ2wTBAXjJGgVWATZYo5p1Rf3egLo4U8gzcEksy9UF11CToYJDuzqcq",
  "key24": "2uSJwC6bVEdfSbgH8XHXQsQre6z67vfjwGz66Nr6CLSPX1dYs4eCfGc56tf3ELZyEtL9ZdzEHVA75fZRFRkQ2vsr",
  "key25": "4hBJL9qB4WyZwo57Y8DJUiDPYT9XWwuLEZQsy9hf986tR6tN9Gyk26Hn3MbHUEKe5d576aNp4V59ZDqF7hPWCV39",
  "key26": "59jEBc9Nx1s8tWMXUG89i8urTvyPsJwa2M9Tpd3xDZXuBea7yU12c8ZgNtPgPkNn6C21uLjUycYNRsdTrNS8PxLW",
  "key27": "TiRDHyZK2eEhH1TBW7eazAhrhxrHz221N1VDQa3A9cJzUMCVVKmeHQTVxockrUSEA8ZpdiwbhUgGt1pQb4e6waP",
  "key28": "2iaYQRftbKZkhedJn4XREnSGPqgCuTQPm2JVGArqiwhoVvkgXUdwxG4pY3E67dvws6dLq9QfvZk1gLzhvp8Cujv9",
  "key29": "2cEFAzymkkdKuQKPZiKYW4LjwKjRLYRhjFwevKgQVQU1HQ9yYQfQqsno6Q12hDeamM156ReGqupGLHwCCQ4v86rH",
  "key30": "5NyqUxJr1PPi5mYNHmMcW3PAHrauPdhZFM5VCrciq2t27EEbDXd2gEHAPe85xgiTNmx2KY4MHDyhJtVwNjHHoBNU",
  "key31": "4dLCXYov7TRdqWkepnRvu7gTXxijZoReyd9NpqjyQkwXT91jGFHnMF1RsLotxfQxsibwSM8kFWFa286cmXmWs8C8",
  "key32": "4U74BpG94V7Bb1YrB89gBfkXakR6SWdK1h5kFjzgwzvdqbSs8Ts7AdjfMtXQWicKEFSXTewrvEr5sdkN3QZZSM3W",
  "key33": "5tyaiKuBPqFji2c5SVQ3DwVcHvTMaKYkshWzsmM2W8Za2UmZTgkxiRzLucE8EtbfWSb11eTGL36ezrL6VvuSbbUf",
  "key34": "3K7VXbRc6k1Q8MAMiwhomPucQqAu5hKJZJS5wNujLy3orxQn3wkc9D5jh7AHz7G2kWiUzJ5xsu3drAuqqNv5Ppr1",
  "key35": "5TcGBLCY7c9gUhPkLuHNT5X7Gzy6ZPdDEeKxStVdLvVVXpXzYMkqVT8wfmqUX6J7zRTBNTNPR3ud31QneuMRRyeJ",
  "key36": "5MBU5nrrvFtkxeudKinHPk7gMT6x5dL6dVeHEMet8q38QdYEnLxFC15UAkj6XeJZb1Da7PzuGaHUngGu6EV7uKyA",
  "key37": "G8XFFjg934b5FQuz6sba64Aupc83MNHWq87EdTe7CYjV3fk2ot2V7pFRdgFjkBNtVEYChaqEc2wrvJb7kxUARfZ",
  "key38": "5j5dL8w6f2pE18YKjXFFj3jbXDiWbMoKU4pQdoJGLt9AY9EvvmvHM7VYKJc6QwGYsQuVUYmqe2KbCX5hJLQ48CBW",
  "key39": "C1eUxMVHWpyK5WiNNwcbNj4AWr2eddMVSxZvc6D5CiaWjsiqN9yWbLDv4nEw7ii9xy492jkte7pyjcf9UB8EZPJ",
  "key40": "5X2PaKqFmkrAWA6GLGZyeE955VzXaNpa2yqL4vQZBU51j2f9ess6JWbvbafbZLD7bJyqDw1FivXBuWy9FWvB7yKq",
  "key41": "5fu4Vzfcqp7vWzN48uUyzDj6YiVrUtYS4RBtfkuxySTjLXkteX5AYYqgjTdm3si8mW7ij3EpZfTYKYDyYrSxTgbA",
  "key42": "2rxbs9nCvHUQsEE9KuXZkWKmXTDhyURkvis9DUxwZHnYhknjLURAu8R2HiCpT9MiQkTvg5xq8baYWeio6m1z9nBq",
  "key43": "2FVAuqaqZ3tn6QwSaAgvn4VtbSbhVQzLooaRLsYwH1WfwNktTwtM92NQkh1jwdVzhxF5ufhq4MpGtpE7GWe2mR8W",
  "key44": "2vayTkRS5GoLiDqeqmqZ69eSejHgzEpg5VP1DFGR9jyCZ2TGoxVVAyWHt8BoTBWJE5oaTVciipbPFBUEchQbcrBP",
  "key45": "iuSJduRNJMURR4r9KHSSip2mcJXuYdF4ETsYqWD2MCBZPai8UGrrx1umj8Vgi8oWrfo1dk1kd7FXpGvR3SzXsVT"
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
