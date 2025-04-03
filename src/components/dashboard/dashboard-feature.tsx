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
    "33YHM49yKLH33Evbwvrv5fBZyqQYQ5qu5fzxUTL2JP23euTrVbV1Zwgq7MnbVwyHfuVfZnaW7acSwVAqpiFwradY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wchfGNHqrxGF6mFRfBVyqFmFpxHVT7LtdhSufDDDAMJ7qUWkkcHnaX3mp7r8iffHim7Md2W2Sa8buUZiaFP6M4D",
  "key1": "3SYcb5Sy7rhuvKiUswYke6wy81B44fwRu5WjwSu2EFZRmb1kMLBH5t8gFT2UWG2zaEfdp7n9rtE2JNh4aMdeMtbY",
  "key2": "QvoLCkyo8nXej2pqDruCvXgPbUcSxxeDFRMRjtov9HznWzSwJ9AjhZ75AVfXKQ9YmfxyGyrxpq7ZqRsftatUTTU",
  "key3": "HwAdKSESyjTmMVctThjvgiPyHVxLoi3CZ44Rq1nuizWYPfV3weS93PTVMY78anUkbQrAdtbJk2SxEMDd9Qc7n8E",
  "key4": "3N8MFurUKHLPse8cwH2FCVcMNUNJVEr3WWLwSXZDUL8S9RVr2iKf5ip6UohfjRE58iE97oQQTJrhfDSuwHAUQ3vQ",
  "key5": "4ZydKmgeJ5gHckUSN2TUFuaYGBh1a5JQ7ZpCf1gcQwvF77KcfVBXPMB3BXyprcBniYrZ2wj2RYz97zisUwSZ49CD",
  "key6": "4TTUEc6MgKB5egGuPV3bfnzvjGgAZ3AenCy5jYPDahYBxMd6JorGkKzBgbxNgP2YGw5Vbu62f66QSXh1u5YPYYXf",
  "key7": "2XxqpvzStqc4q69YJ2Ygk4zyRw8hwZYXmEBjoEBYpSSZsrk8jVdWZc7fnx29YeZQKoihQVna5R6ri7uAifHvx5dt",
  "key8": "5bMQHoEJUTxJv5PjSXVbHc3TaU1T43XbTXp3aNAzfvpp64Kvqnyp4YAddoJdKraoo45LpL19715xqUZM8ghLvf6s",
  "key9": "3S4bXDw72Er1BJerjmDP9Nx8joTFmAzn3ZNXDDZSGEk2BJbYAjWqRbYPjwg7q73gu6FEGNTQFHoAGbfykyssbmo9",
  "key10": "4SM7APMK7mrT7hdCQYFwAJWeDoTuWsC7vWEdbLmf27VJjvN9VWXSkA1dhC3R6eYBMTwUzMoQR3pQSD6LHH6vzunh",
  "key11": "2e4XZH7tcJ6hDXwFDJ2YshMCRct8ax9UqMRgzr324Lfi6zpR9TN2SXpUJu3WSWUHnDbBeuRvQKQGfw3joGFPPdvN",
  "key12": "5GJZf4Vm2Rwb5uj94eqCLzGYtMGHCqpG1bJ8iHMHWoFrRSn59Z2vr3v9vUVrkmHRjcvtDCoQhCKt2iykmKWfgZCm",
  "key13": "4oeiX2hCYToaqc3XqcneT87F4qzh3D1LStSBUjVPXKF2pNYmVXR23XT5qp3B28dj6T6EmLC3MSEUbZVbS3KRWANn",
  "key14": "5iKJ7QQkJUczgZduFRiRUXPj89cPH5NKqUdPkVmrgPxZrxpMeLTieUyHmtcqXf3grx91aZHjuA7AdNJ2b43EAftU",
  "key15": "9Qu4HZNNyDEqpNoU7CK2JnhHHJQnWW3XcoCCGABBudfRsXtQgYqcAEVye2msShEbgta6M3Fzi5JCpsMfkmgeyEZ",
  "key16": "59dDC3p8FxLAdhVgn1tJjHEfEBW1zJpwmSSBdtLW6koaz8c9ET2QVAcmRgGaMBZSi8oZGeBedPzPYUvYRk8m3hyR",
  "key17": "3B1GQqCSMt9qtLf5v5sSTiGigQF7jDWVWnkZ2TDewGNqGhTPfhHHT2zganuFDX4yM677MfkU7NB8z6yVtREdhyUi",
  "key18": "5WaZVwYUttvrru6EZ4GnB1daSrJkSGA1F1B2cSrtzFKVpGczEr1mrvc9DCf8w3YbcyBYVQ1NbYzCZdWgQC6yisic",
  "key19": "3BA3f7A3r4JKsUWGRZzr9Rp2ALXTThH8Lx2Xr25pcNJ631ssVzGmXhPssepM2ko9Tswk5CDFJ8QQMnVJFheB1mym",
  "key20": "2s5WtLWpjeztaCN9FnkYN5tprdmZDhZ31Trgrg7tLs5n6nnFt3T1MgfDzZWUYbUmKY8drw4sRhDbFpMgpSTzJt2b",
  "key21": "2Sr5kjrSBHRSPScm2CJtjiFSknkRbwRR2y9GwBVg7YDBqhYnvGGAyy9YH1JkitxEC4xe3SCTjkALiZB3ea9kopCq",
  "key22": "3K4pnshC8ZaXpmv8dVq8DmV8iEVTFmV782HMrexDSJgnwDyPfQXZc8tdNFsvNNpqeVoLnhyhftwWEpJ5DtA6ZZc",
  "key23": "2YLsN4KH8WxDsg2rv2BLXiV1qQ9BqLMYPW6cHVdcfTrPj3Md1L5dPs6jVc67gGbgZEDd48waYnhQU2opYUWKxxCr",
  "key24": "4ripgoeK6G5G4Z9PPUeANtFM3ttcS8Ukuvr74tAQeutryZ4crJXiHydzQZLvxSQ9EXaz7ezsNLQNBJCU2dzeUdX5",
  "key25": "3R5hSKtgk9msky7h8N3dz14M4PCZEacowWaXNtDw8gmWuFk2uCMK3n6DnP4AkNLvPaBdQF9MJpSP43Vy5Xx9BXd8"
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
