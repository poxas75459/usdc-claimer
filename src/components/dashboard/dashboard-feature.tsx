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
    "4NByS4FGXuXoVaGkkyXw4ELVgMNdtUuxQhmJUBfgzxnKUMhTeHWXvxesZFUz1qU3g3UEKqSYYA9vBNAwFMLrQNZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bRN4MeuQPRQpZWqP6UJgGfrXMSqoLmURKogGuEsmrUTshEafPvAa4pqYog7deuXZAAKhYv1YZQaAYkWdsHSiesA",
  "key1": "5LoPMjGBrjdWYGpFmvvVLF62gmwpmX2pcoJ9p4LRAESSXwiBECZ9hwacNpemJQTuFBoS4717VkVbmj16AhimBi2i",
  "key2": "1K9ZomeNEACTDHCy2xyBUd7LzpkdHL84Qk3ZSAGB4bUA4TwdyWT6nBAZ16tpcokwtYkboCgNdmeRDJmKkHJ9AyZ",
  "key3": "5ZKmL3ja2m8qdkXrJtykedMRZBKk3LwhpwR5RoyN5gTU66fKAfxVPZe1NTjzroTBofAPTLi7vjp4uhhwfNfNHJjh",
  "key4": "3Zqc7BniKgmmePo5XwBVm633aNs2sw9ypYsrbKw1qWVzDq8H92aLMQCW6CNu7hMZpweAjPazHWoJgSRBc91su594",
  "key5": "2Bm5XeUgbbJH8KpmKFsGvZxkX6BhSurVRBifi3N9M2NkiFES4JxS4VoRXtyuxkxHtkpUEFw5wg3pKwpfexGXcrss",
  "key6": "5vBcVioaMdwSJx1qNoHt6PUwegLgbTptk738L6rTjx74aQQsMHqAW1NqnHc7JeW9aY5uZuSuySbEBvMKwG6gqh8g",
  "key7": "5Q6vYuPjxFXgofr82EQDY3YVcL5pLgEifs7FswP8uSjENwvHmzKqJUxY1VbKcZtfXb7xxw8JMt9uBzBS7ijMW7Rb",
  "key8": "5BgpgQa5duxQYR9HJimSJCfwFHFX18kUcFkXt98dNMgyiiEUjYMnzN7kLaqqMn5bLs1soynkEFvdVv3VpYw91M88",
  "key9": "5u7jxaMTX26PUAtwuJd32iwcCFuci3oidt15H9xLvXmyFtBTzntry8o7789aZC28x45LoJQWrTeDw13jnU4QqFQ4",
  "key10": "5gyayZ3K7BxY5T5pmTXpGdyDxs1ZqH2KrKMZBj69cv7EdHfcw1zomqTfh4DeYEVi6smzDhiouizYXKM8UhbWBnSv",
  "key11": "wJXnQQzTS5ZmAS7FAFTNfsSssdv8btCx95EPKicfSLahftuLmvHuhxJ4kQVZVRVDNtEi5sBfs1m6RsNNxosA8HD",
  "key12": "2uMTWvgYrxZBzM7GaeJRVwveKxcSsoBt1JuFy5whW7QcXvGXPaM18ATVgXByFF6Bct7KYCqUoLHijdprhgtPwpXY",
  "key13": "27YnQtW6bPhxwu5Y8u6WfBchxE3vNrpMcZT9ViuQMrrxBB73FpaTt81P7a8rPPAQWs7EfhgG91TXagN8qANyZJjZ",
  "key14": "2WkvA96qnHSCPLhkN4wuSKhKvzigYpRzfRsZN277gzz9o2jDoFQ8nN4sTGtkKmiNqzWyEwvPJL5sEhWSDVJuLRyF",
  "key15": "ieU6yWJZPRgsssrjBD5HdFw1RneKCxwukzZ2VHLsZERCtjGuonAscVMpxfrEFqNEQzKseDVznrPe5CtZzXozQaZ",
  "key16": "4S2wsYA7Dbw7XnMTw2BLcyMzS7o1bEmhhvbD2SnP5HQj254nTCH9kMFVwRevZLLEma3cmPjeEBq8pNnHGA4svX3r",
  "key17": "5fbN3NauxdUh4gdxoLA41xjNYnU13kSmrDZhXwb9zvCSTArxKh6cNt8rk3DFjGoP67zPnMvSVssz9D7G2vptJQuC",
  "key18": "puDVUYDbJXbykVckVSnLcd7JNHb7tSF5c4cVMiv1gWgKDeZ1R5qycb8Qm9LMvnnaqK4gEr3HQbKiC6HpVN9aVcM",
  "key19": "3oYTC7XkFJAmSjUzRKxxB5To3ff84pXFvtfQ81Sph1JJJHWTUoweHwq7pP3H9CrCh2PCMSnKQc4s67wN1JfnhabP",
  "key20": "4VnGoCcQQueKtyqRNtc1jnBPaw2rnMdENTSzQPXonP2jiEpbeX3SCnpdvTVErK3NDwvxD6UuoBcCPaukSEtQ4CxB",
  "key21": "5ksXYbuMkVuNKaYKUKofbSH99ARRSPcbUv8RGgq5o6FCfXYASgLbLRvPkxJaEYX4BLrGjsLJHRziY7Wu4ZbZkmKL",
  "key22": "3PES6epdWfkg5FpeMKxybmivyprKm6ozTgMiZdHhr5xo5pFQvHkxRApe6PW5unGdaigyEgmWzMokahYwy7uYLRi2",
  "key23": "5AB2qDf84FepBH3ddEfC7syxej49THX5Uce9ZBnyaQJPnwXmHgPwbzzHaMtqPEd1BoEF3L3RTnyom9d58Td2nMDD",
  "key24": "2hfKUiuQnNd4eeW1gn5hWRQZoxdnejqZXjaDJRy4eXHJpjtvLNuhToneQXFK3mUB9RWGEbtw8EhfRS4xDvrqh6db",
  "key25": "3ipCth7L96dYP1hg6bPs9SY1BDrTfr3QXNsxhG8ShjgbhzgLzi6CNMo5hkDVnZwo1Ayt7fB6Qv9SzrCCdHhwqsMG",
  "key26": "5tgAMUNGYjCNyRKD1uxhDXCTUWn73EggzzYihmZAH46EPNifiDbMaTzcjj7c743CmdsZjrLUUHMCBNecKnsXq38S",
  "key27": "3QDsjxxXbZtJusQGoYXQHRAJRvwcEh46XM3SJJAzYE9gYqBqX7CamZmfdNLUCvic1wcp3NdxDMkF5gbVX9x3yi9Z",
  "key28": "gNa6fVFtB1xXZe8rUVuTMrGS7U1JQp1YSWJR56ViKoBsBmoh4xPuBYzxEJuv6cs5WmJiKyT5xb5iP9poTGW2dhz",
  "key29": "3X6KsPmigtAf3wz6iL8rPGCeWdjobfMZ5kzjsmQeDYmacQtk1H5pjSjS46kgTRBuTWeF5b4K9Q3wWS9z8DP2tkE6",
  "key30": "33AsLoKoJ3L6Vq7Su4yH8zsh7JNV6GSy65jewuNxqDxXdKSpUcfoaAWD47rACzsJGg6WUAvEzde5hnjYk5jHneao"
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
