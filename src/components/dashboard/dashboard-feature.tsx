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
    "4qExutZRRnQKUqnXFUnd3riNz98Pijh4aAukTVbXCxqrvvPGGhtB6CkKbJqPrh673BGUbBi7hTAa4R98T287Drkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KcoC55SmQpy468HncghcnrDYGcXac7PWs1P3uJMfuBH1j8q8auqBPrj4L1Up7iW5qNqa8KiJzXNqzhk5kQZKd3F",
  "key1": "5Tiu89QNBwRurBzAzHtTpdEq1im3LSQDDQxhJVAeNB3AcMcFQFNJndcEWea7mmYnandztpSqsndBVW85Kd3vTiMp",
  "key2": "4zdfHA7mRJX3EyLzJP9f1CEhGoAhjPm9QXmZwAj5jsLLbCQZnjVtPvDyWETBWGsYnPDRj6kYxdEL1QpsmUh2bQuk",
  "key3": "34aevS3Pd5iCEQYpdK1FKFUjStVamC47kkYQunXWxka3syajKqMfwRJQt9o6f9V7eRVoJVLEqLSY6Fq5GTy8p8Sf",
  "key4": "3pJ1az5XVzcwo1DQfxiLLn1AcM1TX3qyoR7Nez3PkNcgVXBi21DsbD2ubQFn1uY3TjWA8wzuFt89KUyfHLsNascv",
  "key5": "3yjBDbF1c2cEGPSarW8FLRFNDAhKBWL6hFUFhFGAjQFfBQeNUUuyYXYtULdysvAFTdPiYKLUYoRziB7QNHfVcW2e",
  "key6": "2kzNCnd52dhDyL3nzXpvfFFGfoZyFHXTTwGFfmbAxmNW6NPZvYAfnnwtrHA5c6hubtTqeKLFdHw1EN5jqUhe5tdX",
  "key7": "3WjW66xFgVitRmoZoJXtZDKNv7V36VoRRgxYRhUwawKifrSAZJtnb18D4oLFCDgV8YZR7nUJ2mBpypPjDHu6NxX2",
  "key8": "2xwVEwFmCbp6yj8XDNDERDnBd2QUaRxfjW4eKDVnpnDWQ4coLTNt3Qz8oje3Fhja1TNpCFnHXJ4CyT7XJr6pmCSR",
  "key9": "EG6UXquoDz9YvbxZhTvd1RZAFKbkYxJkxbtLMmpGgwh9xz5t8kigcyyFfXA75a3rADaMpK6wKXDvnDDtb6vyGFh",
  "key10": "2uBB65FeYSW78STekom9cpTb5vAaRz3hWA6XKtL6bbq2undP79d54fktbwiCtrdn92Dhpb2JtP7Si54o7sNkW7Qw",
  "key11": "2LLQcDXKyTrrwbShBQTf3LWdWah93enzypG7FHJdmQPT8qaVF5Ck4ivX2Yd28UpHcDnC6m3wSGLV8Z8LZpYTHWnm",
  "key12": "5edaQ8SwAnDtH74Kqtn3AewuGYcdLJRcH9yDuerxP1JYCXoVnFXRQrxyX9jUtnumEebRmdqiwH6sMUiP8NMvPrNK",
  "key13": "3wzoGNSNzP2vMW1G4fy2G3uZnk2u4y3oSkpTfygA2bKZgmnSJrkoKewuSSaNniVQWYRB9YJAF2YahK6ttqQsCe2H",
  "key14": "2jp2pKofwbwk2aRUd4i9nveTAyeRW2CWwnfuL7jpjnauGhxxAZ12rYbvifNPqFhJddEGjUNCrAzM2uvU9Q4daHHm",
  "key15": "381VU5PQGiRbWHrA5JbBuj7ukXkUNBnrxqpc759zcFAizQ2Zw7uigkozqxHDomvcQC1g9D5ErW9JPqEsKYFjdMpz",
  "key16": "44TRhJTGne5WsSmmuSpXoxSJRdX1tfqvx4BtoWVtRvXKPePSnD3FrqgXve8Ae2ixxKWvvbLXm5RuAT7ppW6x8D81",
  "key17": "4s47LXveGsCJwy4724692k2mQbC5n3ygTiemmbvfNpvvC3LsLPGfQnzzUhKAEaQ1Dzd7P1MEDrdAp6Ux5gNAPjSE",
  "key18": "2r1vzc6X4UwqQCbvwzuJYEMPdrgMk64LuUhaeEDxrdQefS2kWAzf5tHVFLbjodHBDEZCgV8eXa6b7PpCtFMmMMA8",
  "key19": "5NJsTZNgwa2mrLxnQfc5WLmGia2KnZ6nokZNovK4rXzB3LSZLQXRrT9qfbDeKadyWwgL5gBf51ABHgkw2ee3eocq",
  "key20": "64ErT38oHZzoMvVU7xnW9uKiF592vgfrpkxpeE2KcNPJGEumfTtVfJML7rjvmx8QFF22yQ4CTUVyU8h6ev6uEJaa",
  "key21": "3F8S8kKsLtoWShBspcD7jvbZsNxZcHQkMKuDt3AGGtXfLYA1ztmYsFuGcQyAmLhSYghTCo7tRTr6QVMxgcUhupu4",
  "key22": "3QjkXhbTBfDzrL6wKeraFmZuUUZo8yDKiNXDenfcXymNTDPqW57tycxuNMWFHspYWM6xw1Aya58sW8CMKoAGZUXt",
  "key23": "w1bJEYCqaPzRdBo1edRjw2RwGnydbszMyTWYJQTudw4xbhZheHMBMpuAT7yQXRWYkMKYzQaPqDCWUJ7YNmrcxjr",
  "key24": "NMYaMJJWiihw2cxxtijxVF9TAJesHApKuxR3XT5uPbUJR1RWdXGcUj4RoNDEYK9NG6jm1vuHAo3b89oV1MST2Mf",
  "key25": "5dTzVHG3YEE7c8EVSM8nxYeGaQyWgTRriq75pQQBA8Mx8N58UkNzamFkeipecN5712JK1Gj3quvwvzDjhDLkK6Z9",
  "key26": "2sDye6rZqWvvNFMtY5RwmQ66i7eDXrJkhYYrVFM7ZR8wafJTdTy5Yr9gHkxhUVqzDmKP64KATR8gd3Xz4149U464",
  "key27": "8XACcaYbKMZQfveyGKeYDQFdqid6m1yQnQ1wXpdHSMb1HDriv1qqXvsyzbK8D6jwWbQ2qsVNNkdHoJ7TKD4obzK",
  "key28": "sifcrrj7bUXPcRVkgPXr1bbF32mF9Lv8SU6bVHzXT5UQFBwewEuCYbN5J3HzAWjvQ9qcddWZ2BTUvFwhx8pbAuC"
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
