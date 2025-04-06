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
    "YEMu3qe9P2DVFcLESuigyZ6yWuvVJ9h1T4kVC2uRnNK8MTqbWH4jSKkAPGNG6LhjvsVsi5tEbF1CBqm4Tah9UEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7UGRkRS36jN4PZZH7NHx1Pgv2xf2Z5cFkLXUgmeBzPACrFWzGEQdPZ8X6mraJM2Bvg9EZHYeV2kkfad5svKb3Rk",
  "key1": "YB59bqRBoKtP7n9KG3ARqsYz6vYjbhua857vXwchUYe7xxniNPnbGpv4QJHETGEBdJi6kmjojMvWq5ttSfKWR9Q",
  "key2": "5X2nFzqTezdjfqLmRuAMYzFHLmzyaEpM8KwnaGAqjjGK3Wx4MWH7RmvYwXDmK2nXidbp5JiEqvzo3236K48Q6BA9",
  "key3": "3k2qacoNqzHFbAmJbX92E4DNqJYScbwoAYxq2jg29QxAU6tG7N28QJTpXcQkRR7k9r6EGqWHQz8xThDdmDNHHra7",
  "key4": "34someK1zkSw4PJgDHb2LJNymoZPbPgGBFvXaYRK59Sk9M6QFDmEHTbw3MtzN5GkxLyupgwadWEiHGWvBwNbtCfV",
  "key5": "4BHgd63oW4giiVqEm1r99twDDaw4GWrZ6pDQoYWbskvSc2f2w5qxrL4VDF574mMPY5mBdBwutihMFCgZ3fipVr5P",
  "key6": "2tkPosa79eKxoNs7YXfKdUhCqzRwhWT6eNDPgbXYeLuPt56JzxU5cLffuLadbe1PzEy86Q55vcnhGtaxaMJ7pi4h",
  "key7": "4ufx4dQbX61i8gHhbBGLxUBpK1A4YazMDvCMeTBr7YezR6WqoUcU9GiUDQRQEAaWEKQxQxMJHzPSYnZszFz12HTH",
  "key8": "2PaqQ2dQ6DBDvcten2emzDZPHtTKjEXMqc2jumPJmimDWjBw4q6QYUQmmphhVCrGSovbvKE6mDHrEgHSJkW6aJpP",
  "key9": "G4v4VkKPCWf9XX6pc4uZi4YKzfZNBqvNB8H7yyPrnKt4b7wXGn2X8pCSyijSrfdCdxLjjn1X8atrBQhhxgxTRmY",
  "key10": "gQWZ1ne9yLtMnEf2F75c5bbpGzCzGyVB7JRHn4hjjYjHQjQXoyi1W3839J72z6Ai4vm9a4dXx3iScgQZ8iCnZRK",
  "key11": "XhvXH3AujF4Pasoxg2Nq28HGAkBshEH2HbVrwdYERhFDpGYEvziu2QtaifkXUuqBXKaLAhWcpc9XHNRU2C8Znw9",
  "key12": "3tz4gdY9ChuFsNM3mcEM9J1DVhibQsFuMAtuQEaQYyy6QUJQuy4ssk6h3W4Tz34DAqfAvbkJHNX4gHXm9uuvFh1H",
  "key13": "5KpVg1jnb3XboUT2ZmMSQUihTUbju5Sf9KGa3r69AX3MEHFaVJ8637JzVX9MV1v29H6to2K9mNeeMLHoHpnettSs",
  "key14": "5pBzHurAKucPeExSxNbjaZa4BmT9urNNy4VoDD1iA2nXHVYcuzttgd4n6xzEXgZCLL5LFpuoUaUu73YiuQKtBh84",
  "key15": "2jiAmoewwAZiRjpqse7sLKqYbAaTboMXgANBfwVeM46aZaNooYMSsjWxVcCZDV4kcQnBeNYJBU4bZcVjbPGqG88L",
  "key16": "5BTjZRvBivxkijsiNJDCD1K6YLwrYdRdTbsLeKbzXa567TD66eTVgDpnax9zUYtKbRKqzSZksEe5NXGtPKheWkPJ",
  "key17": "3fCbE4ZftWHBif3pDBPLFA8oaSTvu9bmqAQbaxHks3Z4ssRbJt6iM5k3dJfH265Q9RdBPQMVt9zUpiHExqoABVoq",
  "key18": "4wjm6PUBsGk5H7cJMUPAv4k4LYBh8UaHVqVLdjKm3mHeS4SxAwzo5hSQHuPAeT7Wyx9TJSTNWFbYYREfd7yN7sep",
  "key19": "5rM8yUkTnfsvkEonUYnm3sdE38nojN1oRgAwqbYbTj5hRUzGGqxdhvAwn8spv23YwJ6J1sTkJjRUPcZCMxdD94RY",
  "key20": "bs1GnsEiSg5avMkjzhvV3sfuAjuQdPtkEcvHa8tV3xhRHSbJu9hDrA4uKdADyUo6nXcP8LoeQiFxH1NSrLV7wd2",
  "key21": "3CVCPTyhu5dHgwnGM3zviD6jj4ee9n65RZ2NK4kXzQwuGEfmDkwGp7CAEYduomviPTwFQhpBCRRp58axfhQJXQz6",
  "key22": "S8kBiPxdxZ86jSeGNHuDagEtpfjRKyKm6LDYAzCr5zQsenMtSGRxBZvygVgdetrZC7gjsg6zktnXaoU7V9qjrZs",
  "key23": "2CCysSPzpqgMnygTRQLnAWKuiqA5kEDVnQknfUiDJAyFjbPtGEqpt8Xv52Y31MVbJXLAx5Yg9MyTd51sNp696Fpq",
  "key24": "2LqP8vhW93UHYB3JDzbpvx3yYECwLMMzw7hEVzNhatKkkhLDPfZKPcUY13CpAZMzHtAgxEwYNEVYYyBJvviMvJ7U",
  "key25": "48PjwRf4ZSicnX9fv362ayc3akQDjnTPVJ474tGCxyX4tMGXMXzCwxDhBHmPDL7vn8BCEk8ZtvFqzXkhXchG3R7L",
  "key26": "3GGLshFLLpMk1jdR9cb6pAzMAqoKLTt36K3EBqVCaNR4U4UNYUZdmN18yUjXDHBYP4q3AXT1ccdR7Z1RFgqWpmUN"
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
