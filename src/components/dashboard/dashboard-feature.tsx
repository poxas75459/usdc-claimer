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
    "yZjcTqCrEYSSPsqCvXj3Kvqc3nb8z9t7vSNeR5imGNDtRoAp65Mtz3zYpcFSwJcRe3HitADu8cgxLQCPYcfosCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G7kRRfDjzjE7AfWPUDeVsyLFEfQeKhR5mMqKLmzy4mkf6eCKjtsPP92jLYu9bmrBdZ6X47KGRhAorDQ39zCwZn2",
  "key1": "36QnrZijYNVLK4bBnWmSo5rdic3wbKYMPoswyeQmG4RSXxMy9ujmDFKqSMAedc4bMnfWFZAnJJT4KwnaGnhRTzPt",
  "key2": "4e68bMoDMW6ucdXDcS9wU7ggS5vt2xhcKLBXASEhKEr2BZFJbqAs7Fjmgt3NBx9qkg5YypWPmhYaeEHW12aFLKCe",
  "key3": "5rDCGML76uKbpMqzMyr4uD7dxAy2aqv6pdc4xkWygy8JpQTX8BrZSJbSrcESykmf5k2a86wnqgHdJZZ9PcYNBkp1",
  "key4": "3yzYxEwx7Xt8StnD2DYW7UfZbcwsa4hSMAi8ZcyEF1XjA82YtHu6m7NyTcy6pnYVTX1FUQcZmGApfRvqVjTATnVn",
  "key5": "2uahR5S3zqNge7fknAEnn836SK9yYLBQVvtxuGUZtUQd8HS3HEA8PARqjun78vSGQYAjfkGSVbcAT7q19H1Bvqmn",
  "key6": "2bHyJG16U3c4Ni2JBRKqFNganNCBEDMvxZ6mxnCGsyFYFobkT1K5TaPK5Sem4nnvRAETF6EqdZcSv6mXQHDQyxZa",
  "key7": "d1dqpg6yaGtw3pWm9cf9gQGxwxJ6opmDAhrCUJKPA1ai4m7bJK35HjSrxVYT46EsbFo1KmRp8aqAy2aLASvqAjN",
  "key8": "46bHdawycNtZjkprwYGr5eg6ccrmfyZj5urxmiLgZPJmS39add61zuc5Sibq792RV5atK4UAiagaLsNczqZdBJib",
  "key9": "4g3vw7Vc91STd8SmzJcHkR9LExTsMxGQSka1iVt8extiRSWkrq2TB4pujtrAQBiuhg7F6AikLTC84XWdN8ztnxnu",
  "key10": "4PBCPQu1tLSfhqLv4HtndrtT9fAM5cJtiGgkRZ85g2ivZpn1qsY8zz2JkPB9wntiTGyZLjD3BZwDgdK2zfpPeAxZ",
  "key11": "2YeEqE6M4CMGujcBJuEyRifMzCj8wsc3tJ8DG5i3E4RvoqPfFm73SrEiaKm1qxvHgQou3aG6WsGysPHGQvmeVTkV",
  "key12": "3Uo1tGvmE3z652qKb95MrZ4G6JDN4KUbXtFgFenjdUQwfWdWfv2KgCFecWEuTb9hi3JotvNzHh9s9ZBwQET7GVR9",
  "key13": "287BmcxLJYTigRsCx9tPyCHTf1Wkz3wYYW3nU6GaY8s2VRvEE17xfLBS6fKUf7uhuPnaWfLYrT5WvhfeEDiDnrny",
  "key14": "4e87sSyz5oCRwzT2yqs5ceMRXGHLPRoVLWBRPHj2jHCfRnusqqBWneapZu8qdp5eMJcwEX64G95PfQhoLDFDtV9M",
  "key15": "M9g8bEZdFP8QGsKgSrxbfZrrcT2ocEqMnwBh9WviGbM15CpbjcqHohFG8LXsExFPCG34GvBVxLh8iGXRoSRCeZX",
  "key16": "618pHBzKZHrdenfmePJWm9vWVysyNT2BEADXA8aKFCM9WuwXSmUtM4ZJzHAt8GE2Hpyf1e9erx8TUKL599B7vDpE",
  "key17": "2YGLh59YD3x8T6BkkqiHGkN73LVnc5bNRSrzV9hwPHXqrGZm2PQR67TmRPcRVBDUVvYEHeSDhHGyZTMRWUWuV3VX",
  "key18": "3NCAaF1ELKhjrVpHaQiS9AUoBjSMGHYr5NebDLBDfWBgMN5yPw8HjbZYCA1j4iFHPpmzeJNwJTUAYgJMvsSa3ZMf",
  "key19": "4Z7k587djQy29A3bWTGVnCD7EZKgixB75rTUnoivByFy8gtK14CFZaGvLgPioeBpdTa3a31MXfzf4k19ZKpe2WuT",
  "key20": "3zfeQ5FgEDm7Z3YafWhS6n1UBJ7GGsqiothc14BJBjWVup4fFpvhk5aWUxwoqqU4xQbwP8zVy6RnuagD7eUhY8B9",
  "key21": "39Mrxdk7sid5T5V53g8MgrA6qUr6Z9B9XneMgtuEEzSavkDhdcfB2DCaDgVBW2BvC1XwX2ECtHudGirjks1oUGYa",
  "key22": "2jvHmTDfMojwi9jzS7RL48jQLbQ7CgGmXSW51QeY2odSHjuNEncVLnVsaXnuHcwhRkwDHjKRND9JraAKqFEZSzgn",
  "key23": "3wNwPA5djXrCABA1cSuHGeLPQEUzNCv84mJuQoPH8FHN4m6L9wdaTUxCHEYfWhkfdq6uLUGCVuBAXqq7RDWSJkmu",
  "key24": "2LzAoEbXetapkAFBfsBHFELj6qCwtYw47VHm1GXrcMwWsucQTDGJ2Jy3Gv6F91qu5pgi4QVH1WqBKXsm9rTrcJpW",
  "key25": "5kiHyuAhmMSXDrmAG9A6zSc3hhVN64AaDJcNaS1pX7UXvHQVauh6kQisJ32XnBvAHjahouwCyZyZjNEspLdc5i5G",
  "key26": "49Dbmy3YQCtzE2gB2QMQJc5DHP1JSSQQgEYciYEnwMX7Cifqe51GfxXu1x4srLZrKBR1VoyBKHJjk7Sfrrsp2ur5",
  "key27": "42Jhr7PtGeptPagMEUELT2irVLoQ17AFe4M48b3oJc9oz5oS2P6mjmPmPf2gK1gcRBJcD3EjhNWkfdqE59gGmwxL",
  "key28": "4F7coaxQvxtwVnAeZnc21J61WLVjyuXGRiy2TBfmsvwSzadwi1KWb2WnLwsXCsiLG8HwcDbTbDrFuVpiTw3hQeUG",
  "key29": "59d1m5kMh9XpX6kF16j5v7VHvF3DS1N5EKWyLQRYbk9N2E7rFLfCU8oQHyJ1Dh5YC69B9iciScjCp3B8ro9BB5jZ",
  "key30": "2C9j6iFaqfAGZz24qfJjMpCsqigDNiXPTGurcDfrVnth6EJ5F2bPanBfeY7Tqgb6xhCKjKGzT4roDhQPn1jdYG6",
  "key31": "Dg7QE9XvQZeCRdN1ty6ztoMMiUKQNa9iwQDGQjbUF6xV8HBtj6wxCyq91rDCVjcFzZShAeWoxQ33UxEzEbbkm6x",
  "key32": "4NkqbcBKr6h3en3TtxiDFeCQjzn7bMf6k9tiouGDqPJQKGsvKS78fjf6ofBCWUwCwSjYy79TJ4F7NRoqDU3A9csx",
  "key33": "PydZHrYNJfQKz8LEuzSVGagKVmwxSJcSUqHMZCCak3HVJ6HvEzyPrxT6WRFqxiuweDwoQr7HNKVfuWHW45UobVd",
  "key34": "3oNrfV8Pn3n6PyZq9h4Mm5ybPdXajUh6oRfTAyEQmah28N3gxBYQt5UHDPSDCMeZbHfDgeEaxpDXDu9cyUrpnVSa"
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
