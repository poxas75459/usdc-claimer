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
    "52Pm161Q3DccX8JWodoFfv4u8qtaTRd9i2AAZD3ieHWxrrfU9SDNFHC8wnAf8n7FPj4mgsbRsvw3a66YJdLJeX4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nbB8A8AhhkUdWNru3D7f2j82vVFWYo3AxkmzFePdDpRssUnwMGYUqgow6QpcVTQJRfC84GMmSv4GpYrDcXRojif",
  "key1": "mhyaX1Qbz82W8LfpwmNbmehcB6jwjvUxD6WB4YN7yKiVSf1v6T13GPwKV7zUw2guMPkdkHHE7oH2RD9Cpiq1H6B",
  "key2": "2gJADn1U7Ef2BkPRKaMAMePoz5CWmtJrg3E9tmw2Zx6yAbZuf8WusM8ja9NKRhLMBCE43dseqiecx8ZQNtHQ9y7g",
  "key3": "XSzUDtpAz6XF94t4AhPCh4UrcQ93qQ6hvBLeB4KDNcGSafK2DDgE5AGeoyjanpU88cYa7RSvXd3eT7sv5saHTjn",
  "key4": "3eZUhtqSozYCYW7oCCKddVLdKnygDerurKNvpb98fUGobCdWbQi7qMvyddqZonP9ur2jcMxV7Tyjmjfai3gC5qwB",
  "key5": "3bNmAT9NB988rwjCdffQpGg7z5PiRdpcSAHN8KMDyS5mmYUgsev54qMaR9wZJFZWf5xwaCBjmcpGcf6twm3jHy9B",
  "key6": "5B2pvH5wXpC8M3QPZZWuKGtoDo3HFHmhgGmMBepEsKnoh8QCbxW3K4nF1FAewPQrL6cVPvzYQdwEvhymF6biVjs8",
  "key7": "3ZCdcYavP8EyHaMH4W5qW6RLVp93Tys519mhkY2cWiqaLukKgDhpc7afTJ4SyRVVnfWRA7WncgH46g7S2td1CPsD",
  "key8": "sAxinYcfBGdpq9HfNJtMa3ybuojA1Aw6Z3bU45VUZaG43SLk1ErJeoErznHtPEUdVKUtt7LDhWAGzewksAMBKur",
  "key9": "3tG4eqW7VuujSYKEYD61CcCweFS9yhdZ1mGsaWLKw7ztGctZp5PAwjb1wVQfcPPJLCuEEY2XbEtsncrFkkcJrfE",
  "key10": "H8gyjeCA2Jt1FX6yuyZDCQ85JojkN3yqT8SRHoQp7j4T1T7uwTv8tW1bzTbGr49LVtunknvtgwVHKfnvoqHcXNW",
  "key11": "3TxenypEnTdPjWPxySwjeBy4wnnnWKuGKKh4tGgDZw3rUCz8evejZosgreGDjnDyDXZXwFzyQ6FemMuFiy5pR33W",
  "key12": "2f9bspvQZd1NoARZ8TVW5MsHdhVcoesK87QQHYBjbkedJZbt4gXDL4uredjBzXQLdArb4L5bTa1hxcqHWaLyR9m9",
  "key13": "3ZZ9BSHQQ2AYV6AxKjAwUdgVGt7wFGHFWageb9ZDztd6fqra7hWT1kkSwrf7C9RydTPPfYJgroTmAVFLz9SfPSxn",
  "key14": "iWsZU3Ab2kxXmy5oFLSoQmHJ98nSfYLC1VhnADevxNwjKWr3ykBy9vq96UNwyqXQsC9P8h73goE6yC96Cqgy9Ya",
  "key15": "vaSNGbfMbW7MQs7BktLSA1aBtJM7PFyuKdf8Hyj7h36cwXdmXhMxuQfyQvwUouAocyViqHZVbQBLbHsovrvFZQp",
  "key16": "8FVizn13MyVm87KPAT1TSfkyEHzb2zwkdFVzZRcJVXLaUKDSDThiR5c5Ak462F23jkSdaPBQL3myUZVLbTekwXT",
  "key17": "4nGenb5ZNeMYnvyivGqRWhvCQzhAvPKL3bwxXpoerwCcDjoXSkovfKYmj2XSz6L7rTtrbhyHYsFGJVmYKhyAEF4i",
  "key18": "5d3ReWvfNApatUJQ1LXGPxeNRJCydMmq2mo4BnvcHjttSUS1dXdMr56XfxsikBEm6CkEgfsHvcCBL8EKLKdZCdvf",
  "key19": "3p4RSfjVgsTyR2oagHjvyQEPhC9KAztsfRbiiygV6JyshKTRHZrgCALPdkTZKXtPafVzvssYhKGva6qQR3xjXSrN",
  "key20": "yDjUCGvK2gWi9qQq5CnMj4ansZZAVuGqhJM3QwH7sUWNjT4sMpvrs19Eggvw8hdGacXGRqWhuggyBeNKDcSyhQw",
  "key21": "3mNnP3KtDVEpAfb3wFq6PnzZeek5mG6vEGmZNyg752JNhT2k1ZPDGr5ba8oRf3qTFtLC4aWyaQub3mP2poZq8Zwx",
  "key22": "5Utc5CCafgwPCtpxTDVZqYZA6wmtgD4hmWTpAKzLjXbigQATc8jde3gnvJvLH6ajDVvXTkue2MC8vVoTokNpUdsY",
  "key23": "43WHvv62GwcFESUPF2ZErdCuXnZd7m6Mb27uNgWnvcKxoHamAKBMhkhmh78onFyBjyqNuBrQFBG3hxrp2cRg3ZYm",
  "key24": "5R9H2hZDbgWx1M3PxDBz8sNHbpqV93ivYU2DjCrz5gsYfDbQwazt4pGdEnKozYmEsgu7NRQYhEFdK8UBNwryuQrt",
  "key25": "3AGayYRMSq8eSjsNufZXiH8cpkkrqM4AKAv1cvDU9cHVszquBongU2B9zp9WTTB9SBnC5CR5ZSsRvhW9ziwBj97a",
  "key26": "4qJgxmnPxP6rmnx6YjMyae31vTLN2E47xYgS5QiiCXsUSkAqyAp4EshxTMRpubisCkKBJSvhffUwJ7Qy9thLUm3m",
  "key27": "62bzgGeuugVSD7F4Ztpr9AgLii4Hx7TMg9v2kavTVB8fyFp8KRAF9LGbh8gdQyHHcXTR3NbAwc5qjUS6WZ7vbcZq",
  "key28": "NVYZHvhKUDJ2XZUzQeS6CdrQiSUjcpgurLXRAoKDh8xhSS5PvM8yyJSLp2GtegNXbEfVGNpp8rnU5wDL6yYmpbx",
  "key29": "3QGF6yoc2DpWkbh3rnS1FkiSBdstzBBqhFiPUMDd4proiFQYL1LoaVYfDEZEEa3wwG8HVSZF3zkUcCofSZrzXqP6",
  "key30": "3aukvmRfsMGUtqBsq56CFCi3mdt2XvYhtUfZLjPF1kTPna6ctvqUZ2aSjFP9qhTXWaMJ3c85hDSEobY3NNg8oEdH",
  "key31": "5dvJ3kDAzzCQXnzDeBQubv9ud47HzEygJGrTSHbLWmGWvHzZQT6VEuXw3JWY4jfdsD88NWLHrv1Hr5C5KzSaethN",
  "key32": "3bV7qZQVjjdHjPdQ4pmh9KnHvU85WKFCM5DB2GdpKhN49WgfBmWw9nDYYNhoYwhTvh145erAmwiyg471mvXqsv41",
  "key33": "2yi9qdtsz1NnRpe7hMwFADGui2mFocyNzhqKAwyBuuhw3ENWhJHxrYnthEuzogi48aukZMGai7fR6GmfpJwXGwoP"
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
