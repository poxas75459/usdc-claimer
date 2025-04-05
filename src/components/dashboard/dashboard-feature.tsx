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
    "4LrwbBwmw65fzYtRRbieZNLdhzsHH4LdTmZLENdKUavQxFTPSGRTcW4B6TbzgBeqAE1FuDQfFFAaFM6WWM96NWDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53m5N6jFYugHwnJtn34CpzuUuxPp85JPB2iGTVttVxYhmea6VCJFgvgBVgev4zYNAwwqHCK5XNqEKmSh87HQj5kX",
  "key1": "4zG2xitNtTez545ezqpsFf7JWVUDKDPzc6DY7qETbxgoa8UoHK7oud74j4WmeCzdyT13yhCNmB4315rDW7sqpv6o",
  "key2": "5yErEKVh1GQbtcoatVWVHpXfgcxuC6tcja59wKAFbwp9hfZFJA5TkdXoY1idA8JZrsDzN5YfXheKuyjQQi8mCjAT",
  "key3": "Rh8UGmTx4CcRc6qamPsZV6Xm1XZ5eTfQbW5atyXuUReDs8dNTn6SaEAFQQRUbPpEBt3k1V95BrJsmugkh2KYBgQ",
  "key4": "3iNz2Cu8MvX5Vkvzbm5tivTHFbUHDQiaSi9nvSxWnKFYmyPpgN1kq6u7QVjHQdNv7SC5GCFH2ctVsU4EyCoNfLqw",
  "key5": "3K6F3Jrh7RNE7UT8U2nwa5YVCyDniY3psb5xSwsP9AptNpTv9wLSTs2KqF72qBR3At3z4DgyLDvzTJBjLDF5sepB",
  "key6": "2VfVf6waNA9VSeNmDZeTiTtubBUbazDQBVDQG7p9BamzkpvoypGxvcS3Tjjdg73CaPRBFVBj8CFaiZZCrn3VuNH8",
  "key7": "5q3vwJaouQZXCLLyfRVu7Pa8KV1VE6nQ857dbkemQJhbwfyXkRWjGv3cBFNukpMYhENoTX6kYjpASWgXDcSQxFVE",
  "key8": "38ML7GpT9VVKcH2tyQerFetqoqXV9Hqke6ieG9Fni3ufniR4gUHVYycuFCCX9mKzRCEBnKt8DhFkK9FaGMthfZDo",
  "key9": "5xekdbNmVrjdWX2Tjn89YnsvE1cNg88KCrXkYBasZ1ttqPGkbPSsGx6GTbThvJxMh3rhUbQctUqFNNfSGLaABiVe",
  "key10": "32ogS4yZLFpfYgESGNGZ3rHsH17Zp5Dn1Y6GA32tUnkVXiiGBeC68pX1bzxiDaD6sNiLZVzDbpTsXBt2WMtuUKzA",
  "key11": "2FvDn7GfjX9Wf8PeQdvxnUwEywXpcXyZEKAKpLhg3LxvNHXqcEoBCC6NZ7vSKrLST8ekRR23aGBW6W6Lqc88SFYo",
  "key12": "5KBQ5vDrvqRiRRe7ZLhWWjTdiDbAyq3YEiTpVB41NyjjdkBvsN1wEQj3TiBQ1F8Kpka78DH9dX3edVWCNJ2ciupS",
  "key13": "5KiSgUTtYV6pJWNeBmZ5iXrT9zuUUz9wy99kVwf3HG2Toa1e9zd4dMQZvgePZpTArAUuPZpvCUBU7SZcyv1ycznU",
  "key14": "59Lm31XKnWFp3UZadoizAYAHWfDuRitybm7HXtbkW2DCAsX5dbfGeihXkNSDHHZzJw4u8iGSwNCMk4XwF8DzMdnq",
  "key15": "p1qvXP8fG4YW1rRn7GyXKLMba1YGeKqrZVZjcx7GwLjQPsBtfVXiykmj1vFNe59XifuZYfX9xNJPKWoLT7Yfpbg",
  "key16": "5DgVA56bxnxgAo8V8YWrJ37k8aLbRNcJw4tFDrcA9tPe8h3fnztyN1v7JvUPect14sAB5TPs4v28tUTKxwZKBSu8",
  "key17": "3iWeZwUnGR9CLuXQ1dP57iXaX5c887Lt9MEWkFdgtGh6PkYycxARUMGGRjpaEd343AtDKdbTHBMUWqbMEo3BZNWD",
  "key18": "2udh36eDQytQrGr1TVoR4iZMrC1ZD5xVs1cjG55x9vJU69TXaLGJ62j951C4NoMAsNHRd1B6djrtBhB7vayU1Srn",
  "key19": "TR1U8VV1uAHjedNmvE9rkmjxLQE4KBhcgu6b2iWm9Z3TvYx6Dc4MPjedrixEVK2wLFxtKa97gXuY9f7HFranGqx",
  "key20": "36QBJfXed1PKUFkuCz8YWi7vFegVjTDnWd3DzfL2vvVqFxeKXnhiBaXXenD6EATgJQsm3tTCWyyn8bPyhBNVkJkh",
  "key21": "5FtXdjjZyG22R45HEidFEvHYhonw6qC6789L3BmZhmZyL7CctSTNUkbfevtQjhBG8eKhBs81rXX4CLbKNdUHA4hG",
  "key22": "4VFdEhUebMBtuCzGaX4PTWSrjHCcNgCLUKVZfFskzSENsuiGVXcCfMSF8nHPLUXS78PEq2UKwLpvgEnQxCmw4HRK",
  "key23": "4DbkYymLpsWK26s68TeG2RUYwfSW6JYzjErNCvLKFh1XEwjNbjcnk73d3u5pmwJ9dHdHpARbqmQoaA3oebi1QbLY",
  "key24": "4ADAuTBeQQSs2kvTQCLgwUPi1JwAQ53b8UsyFsrMCZg42d8DBAisqeDUxTDNb2okaMa9rZK5UkrviEeeszBwtagp",
  "key25": "jhNthuoU2jDVwv6WQoKGhL5F3VDVHDF8bRuR9DjAu2qxGzg2MDSnoE1mMAMZec3YD8jTGKjhkG3dF8nN3TsNtNQ",
  "key26": "4BtbUTbERCwEeshhrqnZhHCNZYFgnAhxQoi4X3bhNno6VtsU5Dno5TNB1vwZAqDWz8AZaZgaifSqaeXhNXsY9M2u",
  "key27": "43vHpREY5Za33B2fFFdF8eKviCtmJ6a1mbDfyxFGEzuuCnTGDpuEcBKpVyfqfTh63JxgodYVYyXBskCqzQtVG7vv",
  "key28": "5QvHVyRQ8BS5SEPyj9Mfzo6GHsxUrxBr6AkZASeVKzuDczTtdA72vhBctjPreffBAjT6X6B6x4vwUm2F1sEygQBL",
  "key29": "2dcWRA8qmwZscayZEqd9HxnJ2NHX2HdVQkSqR8F14RsekrQypYCCAVc1mncgS93NjNnXHbJJEWFjvg92vb3weqms",
  "key30": "4T1qU2WDRqpZEPukjsF4BBEzTRQoBD6zp4wwtdPP5HjcEHDkrcDCBHotZEMgam8dpfND4YVSfJwfVg5QV1EYcwK6",
  "key31": "379cZV7eQrwkhPSoF8GYXPzRmHgbYMbb7wWzomcFSJc2Pq9LJXXDXFvvCnLkYdLyvDgcwi7HknRXQyEcBwGmJroN",
  "key32": "dtCTneVWfFZnyNabAbbZuCYu1usp31PDQqgemYYRFnYMpTZ23LbrbcXsb3AyZY7z8mSWK29dRakG4kumwFhxdxt",
  "key33": "tTxk7Mots9MFoTYK2qtJZrjxdRvdoq2twC1fGxmaHptt7uMbwVB8SaWzQaihxVubRDZedFhh2Rn4M3UjBNPPwWY",
  "key34": "5x7n9HNaGjBiE3e8RW4AKW1VADwakLKAgTiHUgyMxWeruSagqVeiv4PQB8rKzsoX8g6Zu2713AR7fMu37MVRJ6yW",
  "key35": "2XwqtX4R7yCutR3VVYHwtgLSGZy1r8Knk5W7KmVEuMPaqhnQSmh6mJw1GDyhJfLBEWaQXm7WqrdhLaMdtQuRc63B",
  "key36": "3AQBRX3k18P6tBDvAQ4pVToKC166ziYSSK3aqwxXgH9KA2j5EkckMqUbQ83bdVbhpQFVCpYQPKaW8nP72xHi68Ac"
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
