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
    "4vy4YPiJaLMtsh7aLe7Zu5kif7P4JJtMM6ezhuaszCmFzbs3Brc2WnBy5MPBM3orbDVSAmmGPFFiHbnkW5nWVQZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cPxmLbmBgEVWenpQn6een9ebsFV8LZL73MhKEs2LTjiwnJrRSH8GnVZdRTipmXUBSV1mwgnFUxULCyj7ohcWdDV",
  "key1": "3zkrnRocrbjSu2xEj3m91FTfXQjgtXDwsYxBtTUTLMCSEYFmtknhpnpdyNXRJNdvYhRuVzPSo9GVVmPgBzj5czFL",
  "key2": "2fUMWCtQQqUBtnj56bHbvZ5pvN6ddwwnBgaDE9Mr81vzG4fUSEJCrk9GQuedLinCPsZqwcwb3YSPS1K7RG5iNNhK",
  "key3": "5wm6y5Xz3pDLrMvgtjZT7whi4inY57TdJrpwLroWXAkEBUkLa24RaGiTDw4rwJ6JyfskHDJS8DxjxuSB433DyfNo",
  "key4": "36aXN6zQcXXzx2ZjbswHsZzzBvsyg28scBgbK8L55wNGLuN1WZFeWy2u7bqsFWe1BLzRHWJxdNPHKAVCvLbx24re",
  "key5": "XNzFArdPepwD2oktBauyWEaHnVL8fs7gyUQgdEEw36JjMCJqXuXC8BZA81DkybBri9qf9SHsLvNyT81jYgr2Xdu",
  "key6": "5n1ANjnqNgCHDrFvQgRAkvy9WzHvnq2oKVcw74H8J969Pi6CV8syN1Coaan8d2Wd9DNv3a3pUingUyJB6Gn4N6x8",
  "key7": "36gFvttJ3hcRQqsR5ZWA9xYumkRqZawc5suDNSwSMeczAd8GeJu1mBcADLPupH5g1iJ1xNHasCbk4yHNQX7tQ2zF",
  "key8": "4hUHH9bMJJW6rZNrxy38kkap29MDgfmQFw1iDCm6G5SLqKG9eHAREFgUfamrq7anisWeVb79avKjevHBVcDm8HgY",
  "key9": "2vxgZCFQNggofGRYrCe7qEDQCXgymux5Vkx2yDTvaKw37ZG8F1cuGxPHCBnRRS6kntfokDk9BbmZ3w91a1Wzc3Uf",
  "key10": "4oEydQxcpFTfC1LRt5pozeeiv9GvZ44JHBq8QANrbJB3VAA9ETLxhxweWFtxqrWPeDgdBA6VHbrEqRTmuBR3vGBW",
  "key11": "3ZfNQM3HejMuYwQnZTSzoX3NcqkexsUuTp8YuCFwDnE9dJST6EE72iDV5kCgQTMEUAmMWfAp1W6NYQzR7VWHEp51",
  "key12": "3roNYvFGiv535PA6YXaEx3NyreCUKNo5PcUTs9W6w1yWzYx3DV8WNw6miU1bgcN1kX2EMoUL6gbtUX7UGbCnT4Hi",
  "key13": "vHyPcXYLSk4rfuFrL7aDFimXDtm3NCFQvCRny2NVmLgAQKhNJFQekLBE97ZSEmWH6z88E5soVkd4Ybm9r1NGsrB",
  "key14": "yswaYUBnCnNK3cU7KvxRJT4nPn7XZNgvg4fcCLL9QF9EE6RgjBeLhjWXQ1gv9guhW1Msj7XRpKZaTJ5wiY5SAug",
  "key15": "3952CkwWTHtjgnzir8bgk6wWvibGh15z82cAEMwviJoUmPJQtNHewui6woCenxijJm9wjKujeEpmWmQRbUoxhfWD",
  "key16": "73WYJTYtCRz8BBcDYDL2oU2P7iwTAtwTs46kYWwLf3ULe8wwia5A1LP1ZrDK5jySoPrCQCs62r2q4jHwPskE8jG",
  "key17": "24mnuET8JV4reZhakZ3vUi1P5KeUartpUzbBC9FBLfVj6C6vndtYwF7ZNW5DaNA4FDEkBRAbh5oP2A8LAbWiSqTT",
  "key18": "2bSwqDuPEc7e5mG5CMAEmtSJAjeXqhLDQpzdFgbxy7CJrSMrA3AkSFjZtqgypc3RvLoLZykZvarixv3TZL6nJ2CU",
  "key19": "VSvMXdUGCy9EdtRYX7Hjhs4JnzoVyVBTw6K3JWkuAdkUaprmDQKpUuUtFaemQXryyTnPfzrXyab9kHQU48xdxk3",
  "key20": "R78ewXY5b9kNd7AmqwdLna5Hbww4YSopyfqshrWtKwXarniDYX3UKxfG67AaMozpr68xSiqgWCbvi9pEWJhFLAG",
  "key21": "1V1jkdRYvvUwH7vxvs6dRSTtQhNKkWL4Mv6BmCpGwGwJrQFxwvcrP2eMDDQt4eLZyu9EoisGUPLW5SzNAUUEQaX",
  "key22": "3PejgXKMgVoGjPkQA7fG1XKLdP1B197DyVyGpm1zkJ5HrxtXqK7FkW2EahSQwQMe2P5P5L6eZv2RRdiuhPoihDEM",
  "key23": "hBveMcaJzFEgo2ZpWjmKxHdbZJhhvSA26b6N1hvsbb8KHY8tUdNmN4mBn162qEzUBZTXxaHCFZAGR7H77dahcjY",
  "key24": "2ra93B5xnoR8B8qsDuWDcBNm724B2pq8KooruudhRdBZ6QRaB2Cz7E89TVPGQVCKinwGUEjP8i71ejukR3wvbnUu",
  "key25": "US44VJD41NjJwPTyaJG3zMQDqJNkkuX84wMbiVZW4jhGgkXXmxNjsxxap3sjE5AQ5LJqvsTmjab9ihJAK9BN3JS",
  "key26": "oFrMee1yBxSWYJBLbKV77AUaWFEgPiCqS1jZ6TP91i4Wo3uz8rAffJk86yQbKtj8wHVBGrYkRvChx8TaYzJMBf5",
  "key27": "5wRYckrPxyFhs7v4RaLAE41oiFPrCH6TfUhRZZF6r9qjHi9Q6wNRfcqrg7FNdQkbbNaKQyfaVrGvXuH6pVEDBQ3k",
  "key28": "3dY9eU6rNQ5L1wjnpnSnhzDAgvjMzYieHG1QQc6NUxPtQW3xN9n1irYGDXQ8F3ZicJwrCQoYGKZ7EhjQ3tNgvyCe",
  "key29": "4jmoJe47xqAhBNWuvPa1RPNNs557hQtAjRMmo1Uoj8geqYpLq8At3wZ5H7a6kXcJbnwd481zg2FrFJpVxXC8QUP3",
  "key30": "7nTgV5qVF1WLFfuJoZwS41zUzJZ1he6yAxMx93Ku1QkSenuoBC2nWrCTLWxYDxRxxsTxE9SDPLupkNda3yVtTrg",
  "key31": "3QJogYMBsgwQjWgTP8AKiSgymXqrN7njPT7yUwEFmdvMHUaXySbLgQF3P76Ff7NskHM6KoBdPAUmb5r7cEJahj2s",
  "key32": "5r88Psbw4ojNEM7nk3za5hvvusrA3ZyspJ9zPQjbFRc45JyUpq8dtpvxMowL3Hc3USj8JeFTwh12P6Zw92suDDMJ"
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
