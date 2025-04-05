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
    "mEQWBngXCW72nedX6qaDWcVD7eLykS1kBir96HEryNhHb2scuC27UcYvZXhiFfypwdDmZ7j65qDvhFLh5oNjqKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EFrSyT6sUHR4oGDHY3um6xPV2PrtkVoKgPJuM3715jSk3eW6QCpd5dvGFsp969LhJonZGiV7JsjXkLQaqEGmAbJ",
  "key1": "4AnkZNwCgcWA5STx8McxaVK5Mxz5jbRgB7Wi3zCVVjGvxoUcAEj2CX7JEHPNpzddgv2XDw87afRuYGqsfh51vJs4",
  "key2": "57zTMLvnAZDqAWCvF3H7MJUCgrAqKpwFcuD9ZbkLfUJ4QCBvyCMH14cXvV6gTSHoTAEY2NmxFVHrcVWFFq9BYytc",
  "key3": "27R6fvnxW1BYqvcGw3GB5R8yhcsi8xrQKVtdApi7GsLjaMRUAqStkAd4cxXZFjwqiMZPwNPVwPLAiXWKp3V9BWiW",
  "key4": "mpm9XAXdL7odAAgRnFZkfVUdVf875kCYZGg11N6sVQQG5ftzBNV5iWQpYNCUoxgxP9Y9rFPadaJVXBQofwsSMzR",
  "key5": "5iMufEoC7yq4PBoZXEWwcBRVBPDNZhaXMjJWJJUNDcAjQG94MeRyorX6qVTtdcYc2iZbtxkQisS4abgbiH1aUwr6",
  "key6": "2eQybgB9nrhu3YyJr7imJFw4SkbTmz5gtb3GxfFdKXMz2F9L9ixcrshyz1TNDkBjEpeoCZjyBmGLpHHtxGNcP7a4",
  "key7": "61STZGdUNdGCSSEyWriNn2a9pGVvUB5hNnQQWghJQupKHTZrpA4mkru9aCXmwRJWbZRpCCK1aPwYQyATKveJkPLj",
  "key8": "5QE7TYYErm8afZx93v4U2rfXgYNoDafCuJqHbEjYtijWj6JkheXKiutcPR5DW6WD4u3QNvNc1ed4CjXmKQcGfiN7",
  "key9": "4nzWhEvJeiqGZRQFicaNPEKD5tvJELjeRrjHY6GsHNBXgQf9q64DncGKcPDPKaxpqCRJyxrM5Y7TcazaofTWCYgp",
  "key10": "3nuSykur25RKvWiKzXvvY4tWmpFWd4FRM9EE1LdiHrm3b6zdDhzNqoQArypCRNBL6jihxwKnjDn1Rxzp9Y7Fe1DR",
  "key11": "3z5urZXu588b6cXN7ZptWPdys28S9GPi9vKHB3KXk1dQdhhV3C7v8HTaRJTzjMvk5cfHWBMv689T6d2uSZvcZCvs",
  "key12": "48pmgu1WNsYz87ZvxK2vwLV2HxvHK6R2eCLDYdwTbXttNAMY5m7ZuQD4cRuR1ESHoo3Ptc3W7vrdeqXEkr1ZP8Qy",
  "key13": "3a2XP8nDtHbkZp5hbkcSqbBtsCoPH5bBTikNNfQTdhjJ6CwGKUNVnyJwcL52vcyAqsS2pL2xp6drCGXdpthaSBWe",
  "key14": "5tbsx6jHKXW2nRMQxBowY4FaMz6tYnmw4JuRv4oZXCyJL4ACt2dWEvKKEzv76StjLsH7LKR2bLD6pEBbjDkKrV3S",
  "key15": "N7diwWJUeWmDVJWVK4T2ZJopd9cmS1UMmgmmaXL2tjwhBqR2DhW6VH2nVfhMz5ULuD3o7Hg7vs9z9BQHRttuaMg",
  "key16": "56Fyjrx7NXqoxS4GwpR7vs3h9DZZiFtwK3L7H6Mp7PZWuBtcgF4LD4JJ1G7WkVM845qAvfAnDBrrFRakKaYPszwg",
  "key17": "4Qw65zbSrgticwcUWhN522TDqvmyaxBF5PNb1whUdGah9dg2hz2p43rwoEUf92vKwFy1fbmAdy8JYFZx6pYdDFKF",
  "key18": "4UPCjGqfpSeWD5r3bRjNpv3Q8xcer96hpajxXGcFC5suXiXh7yVHvodf93sxvYBqmQoAcErF5wtqQdVBsirKMQZz",
  "key19": "5ynjDg94Q5y4eCkrDCPPxzezk9L4YGxHpHvVg9wn5BPKE5uPuE4yCkaFin2odDyPDnLwuXeoqJ9vwTY4Sy3qKud",
  "key20": "2ix6VaeD5MpY4zCMPG562dfmaLfES3CK2Jwd7uj3jkrt5BCiAd6S4GnNVxjFZafmzfJBekBQDnR4jpCeJCqxipGu",
  "key21": "414FHoLiSxbAvgHkFUJmg5t9woW4q7adjE3FR2KEHJyDjYZczsKiZ3h4jKVqK3Ekfx6ixwEJSDjaGDDa9YcMrCZb",
  "key22": "8E9MroTHnQz9UUEV2gu5Z4euuRRtUDcwmbGQSpLwMwBzNm3J9iGntcZgCjRTw3rAq3B5YVHwsziMjU46yaXQdcf",
  "key23": "2J1W6pNPwSs3VBvtDVnMchfEph8Fn2C677wYMqqQ2pAZqY23PbKosjwT1qsnyGDv28Xw2mL5gR4kCDMcPnCuXoS6",
  "key24": "FrXKjJ64hhoC1DYCf6ai8HcrAwaJtiEBJApBsLWbyA93jh6HPprEDfKmoVUDECND6DWWPwL5S1dzvJbGBHsbYmt",
  "key25": "4WS5PTWYhgghZwKUGFWW4fYmHkFRWFTqVJvSZndjafqwgeRCcojCjn5PnJBEojG43P3GuxVQ671gWeu88aJ7viwN",
  "key26": "4NtJUhMkEtd1UZBe2QjqCVMyGGQjhmoY7tcB8Pgc2pxNw32sxw7AQsNRG9N1g5yt8SMNL4ondDDmemnv8SU4qyRn",
  "key27": "5gyhyWnCEMcPgXd2c4ARwbmXGPhgSPpfRoViWGu2TESJnUyTXTXrP8uBwzKuUA38ssBS5Xctmayf59nvh591rkRs",
  "key28": "4p4KfDDjufyLGPSTfKuuFXUx7DdM7PHqJQwJP6i5SoGxRApdWfeavwcVKNcXyyBMa8wbqvVgU1TioWvh4jorfpoG",
  "key29": "QgtDea1YsxKxMzUFpu22oMhQK4hes57m8kTNYPMbPhS8WoheSCy4ZAq3e49DfoxKW1n1bXx4wPkeG5yQB8xLeTh",
  "key30": "i6bcXGRnRgyCqBTRQFWTXHfeAsoKBcbn86czYKsmK2J6EAj7J39NnMerV2181Jg6zHndJwR8XVaSqjSeTvyR1ku",
  "key31": "R7XXp61EfBFKpmvDtFiqpey3JJnFVxnxABY2wfZg2SWjvs7WuASbE4Co6iZYzxQnPqasbdLcwpcNgHMFRCXiqLi",
  "key32": "4c9BZzxXPYtaS1VRENMpUsrrdvabGLdAzGaNsChMdCmaMtYeqpWGBZJrjhXYmFj2uMa7NFxnPif7XqvXHdszW9hq",
  "key33": "4Fc4Re4xpHZfE6ujLHrpF8wFxTEjLjEp43rENtqaGbTz7jgL8U2KcGsMwFRWTccEShf3G1zwnvoBU1WeanWyZCn3"
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
