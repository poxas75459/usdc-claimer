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
    "2yoeMUw8JwzEdQdKVU6Mo9ca6Cw99GQkjQ5M9Nt9MsMjucLfEQGMcctBK7qEKWMADhH5oMKTVdh2TcAoq7zRvFQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ivGKwEtmaqFhLfakY4PUSXun4HnupGdjcDknTvYXWXEFoU4B6vzAwSJ4AvvAfX5wYErwdryA6wPfZm7zqUo7CiG",
  "key1": "3tZuXcGeJG4ZkVheUwU4piQt8GPsVPbdTezULAJaUnYeEk1SXuFU291ZQqRVCTsSi5c6UdjQgAMWGtn2soNbU3rR",
  "key2": "2tJzzeXpJiVretsq8iZ5a3CMUD31DmjKPRTeEFqoV8fhzMdT2ho5fiALxuN5ko78r7vR5sMoGZpMhq9kuYx6GHiP",
  "key3": "2pUaS6BMmGK9nBCeEENsZ4fjKdPqrrAz5W4p6C7RvivnpHNPn7mYnWazzWtBMPzx3QVwBaHju6t4TAEY4TPKrMBD",
  "key4": "GnRpgJA2MfqQSd1ReT1BNecbQ65Ur14HXcxQwBk5UCR3n4HEp5aJ2N5TwmKk9HfhotGdSmxS5zRKSpYBJCfwGsa",
  "key5": "KTBegjqg8RkLZTzr8VfEsyYvGRfWtcVLQwikjYagPn3dCyW7dXJCTZe1og1DxHshz6GysRs4g6y53XK8sTmSpFq",
  "key6": "5j9yBQhKi2TzpWVAnAZxPFgAVB9he7Var8j2xfviH1g4sV4st45UUJZuTSbBZLqjUzJgR32JPes91AcRwq63M7N9",
  "key7": "4ndWVi5xqLhVLA2ZdHMwBuPr2k552tNFbaFRLDP48Ju3wJYJveApLrGJT275GyrE2tiUbU8Sz5kN1X14FZabs7E9",
  "key8": "Pwy6Bs8a85rNXHHSKmqkf2eWXKCTJhUGVizCkj3pyctsv7Ww4YnDxwk9V3HGuS9skheBueB2KkdjqjjhSVeFQeN",
  "key9": "4xR4ZwGrMtC33hTbYVUECbzFREVumtYyDzsJ44St9M6hEgHBpcY4vg7V5kQtcqeyAKanDTRAvuS2wsgWts2x7dhv",
  "key10": "379XgQ5p6aknxpSoJ621mujerkx4CTVU1owWe7h88PpvyGYDoiGpPALiM1KvTaCSH8kZcvoJfLwHCwxyA3Afep87",
  "key11": "5Gk9iEebgyYVRdSxhT7m7Sm1XgUBwt1xkgT2pAvH1tQMiAQepd6FHEwjjSDwjXQPLT4VoZ4pv4BSQnEyTLL7KWTi",
  "key12": "4AYja6zpkYEZrwMXAW7UZT4P5EkaY5J3ZWDeUEpwEcWwp3pFgGgmEgYejMAN3piYpWYQVq1LLWTj2oyuZ8Y19JMo",
  "key13": "2dWTJBpcFBdv3J4SHpb7WJTAKs76VnpCBU9HyZrbyRB3u2bPo98aQadLSsXMpBmezc85kqVqsMBzHAKjgF3dqpxV",
  "key14": "49zevVSDaDjdem9phYNJcU9PVWQwci74tyqiSoLntJsqeb3TaN8pT7RVDdx1cuS7DnAYsE38Ds9XHGELKoTnKmWL",
  "key15": "8jd45HzvHRdCe7AXDCCefVNS5wmQCievTh3ZPjuAcqTz2tFmpfKM1MdCHHrQSaNRCrPSvXuyAwK6E28wTXPZpxV",
  "key16": "zy8Cb6njQtNjEi46BjUwFub3bP7zQp2R82hRcdz9XW7FAPLjTa73wLoCDQd4jQxPVvy7MWbS8sXf3TUPhD1cQj2",
  "key17": "3DJt3nqtkVTFWYuiRBXjzEH2hjQr3U9c1YuMLWefwfJZ2Qx2fnERCadHnW1kb2X6wz1ByxoQCrET51HAgp28ZzN5",
  "key18": "2Hteg1SnM12Re6fekdByU7wm1ndyW35KLME2mje5hKFLxeDdofhFJEeLRJfSZab5tnHf919UojksSd5Gfd6iNSgZ",
  "key19": "2SbTPuQno1bYmGbHFPhwVNDK5bokVd1uskK9nrujZGEtpbNJ81HsT2zFcYF8Gnh9Kdm81sHFeSRVzBUu5TTzAwiP",
  "key20": "Q1ZLHbw34qCBQJzuSkK7wc6pqxvAp1AWR1YW2SYFTAPMG1NhvJduVcW9KdJgx5cp4qsttZSYfQ1iaYxPaGYFY7M",
  "key21": "YUHJEGMU2jXSmHARdMJJ62xRfAW8Mio35LiJtP5Bot5PhuC6dprxtNsjJhn8wwgdGYx1RUoLoaA3G15QJVLUsY8",
  "key22": "4bEb4ukWnRNjZ359DMfumAou7Pi7Gr7X3xdWBBvDbKeTeFGuDMPZSCv21hHSBTtDmrtDpoqMYKc1XiqjSMPuboCT",
  "key23": "4PZSkL6W4caqahvr3zvR6NC1mhcb9C4LVJ8Fx3waafuW2C66FjpRC6NmGfPFLfW7aLjZMcoDwENpWfQVxtC5nVne",
  "key24": "33QbBuaC5X5RBjMd7XdrxZ5r8qXmbhp66ZjPiAxJ4jP2KhFiZc7ovhJi6yCxmFsG7icXXHmgmhHhiiDTC3TuJmxu",
  "key25": "4GYg35xs8CpueaWS3yYexjv5E5L2N52esPrAA4Woo5BWgo92vLUBAQELpZFe8T3zPJh2gQpULjeCfaqUHrs966Xs",
  "key26": "4QcB6hF7fx2FonVVKGAY2eiypNVaoDMbJWUKSkzPmStiKcE3E47c8xj4rZpCG6F7BPpz3c5UiA9cYVEYvvFZ72Ww",
  "key27": "24PKby8RSFtWQ7frhBFiUiGR7fC1kE8ahQEWS3KG4E2kpUotEsMMdD2dEvB6VFCqG72jBASCSbgjD5BvZ1j1Mbk7",
  "key28": "5LBmGDUJ3i9iPvE3ubeDHxBeAmX6A432AK46sRstxQXSk7v4mFngsd4knBk6gZX6qtQrRSphQvT1XhPdZizh5gHr",
  "key29": "2doSEByXPPZqg6AjrfjVFwiKjGR8MDMDUgHYGAht2eddpRnrHFAivE5gMuuRJgvE54FBMCqXvcQjJLWf4THYxzKz",
  "key30": "2kTbB6h3ZE8s8GPFLdFar8dbz2S1yu8Wci7Z4pzUGy7MGcWEAsWyUQMDsroyDgt2T9rHKssiDmpgtfHnTQsZH4Rm",
  "key31": "2bMpmW9LrjAxWfECv7xnYqNCXNgQaLFxBh2mM2benkbS13udwETQLMkrqaXJHM7YsEiqZjzdkuELDMMt7G9LjTQZ",
  "key32": "4bCySAcNmH7Gz7vfDpQ1NXt6BfAe4Qo6RUvq3n2rQEqFxbU3svLDSZ8TBQTbaVQ2SUj8XiGrymYvGXjUzMRtwWM2",
  "key33": "4WMihaRLuSqC1iJucuGgfre3Kg5agVeDoNFGk39Rjgkod7MiGhEFW8GdcqJXJ5Q8n3neyc3rK5QYgPcyYgv1n87T",
  "key34": "5MWg1TCkXbZ6UoMn6bfqqbKjPAnAT52v7DRVGzbN5z2NGQuA62ukq899i2MfCgU4d7tqUqYLwbnkxZ8BBQaPMAGK",
  "key35": "4hdnQQ9YsVp6GNsvS3Tor1A77Xv4iKdrqiXPM65kuc7DEXg6BXNP7KbymvhWfvg67mK3g8T8iDDi4ppxVpNvSdPo",
  "key36": "4LEsvoBeeZm5AsKmMsvLP2NhwGC1awsujFWgybp68TS6xevPn9bN7XLPNNhyRD6z5QLQPLSnJ1qVZvYpyVYCRj54",
  "key37": "2Ss2VMyyF6zm82T6d2kVb8HVKCqDyozUFvjgECRiFfN5tdihNwiDQFw2Fq22zswzfRn794DmAsgTvSuHTsxFf6aT",
  "key38": "2ybApnN14wz1wYQCpNXvNPVmM5SEwca7cY37PcKtBVfW9AbKDNnVhjVUKoaSKbMCrHsgjBxEW185er8eZGg4tQH9",
  "key39": "3esb1bAn49W9kLAGYT2bPo1DE7iDdVxFodNgwVsedrQ9e4Diom1X4Dv6k85TV9ZmKkDr9oZxJEFNJKuCtYsAdUJx"
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
