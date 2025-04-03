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
    "5Ryri2Y5oWctGuT4EUDhYtNWDgXdnobGD2r3u9Abn4GTDUqukZw3gSdYcoCPRAza8svhPdWKVKHcD5q6Xm4jjjZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57SuGaW1NvDYUoruArZH7QMpUwNgxeDnJY8XBZPpCWoxnFdb5qAiGrt76zJM484LehjmGpdXERbSA8r6jsuLByqT",
  "key1": "2EhgNQufKXZExk2MMZMyBWUjRyARzw2uNg8Yo9FVNTS4R1gtmZTBk4aHP4bRtS2MDtDu6pjrAo4SbuNQmGaabHUu",
  "key2": "34q6FiqVW11kuDb8NUtoMhRGSfjUtTnUgAzAxmhLoECaUSC8pFyn1zMddiYWVxNKv6J9FWwCU1gCKKQYgR8fmJhc",
  "key3": "34cSdepHinBW41DXgD6zCmFwMnUwyMt6GWRKgtXXDc7Un1RHxrCKbeKNFV3e4oJbGsoMccKJyHuMauisCtHoRi6d",
  "key4": "4Xcz91pNfUKeLCmLNSyWTnFRce7DLoRkHBeYiFkUDfWhmPbtpi6N3bgNvm6HPu8y1fxE6mMp4pxVbfikZzfvRnYd",
  "key5": "5XfpCdG9TLbnMLNd7JES5yfVujGecBLBHtgFN8GvjoR6jvWyiFWu9ThRgNrNpMc695Cw11ZfEXFHinhiuqQNL4pG",
  "key6": "4AVSsxyJ3hU3Q5xWmKoKioS1L6rG4A3nTdTN5Gpwy152E2fQadcDA5ZrECTr1mwPmf2WwL4r1tRahNgc2nxN9Ehv",
  "key7": "fd4LADFd5hydjNWbNs5DimmYMUdPKF7rteeuJmYR7qdPm6KWo1bPEkuWqaNvjmoNH8GuyhZQzFydUxiCjRDsEso",
  "key8": "61AMz5QiyCbRp18Cx2wGdLHVYYc76p2PsDGxbQumKeF6ZutpNaxkJKFb12njboXCC49Ju12ZdWfPZ6UNkQP9adv5",
  "key9": "huDSzBdXDa69utSZEZggKpNvKQrmuPTrcX3SJpu6WoLfoRmR8oSt67cU9qVD8gwQtcrKqAgdzx2eoUfwX54V47p",
  "key10": "4kgmGQkNJeM5HCEr4JeB7pPV1MreVtorXX94ruhTWk85HozwNiwdqmiNaMxxLLmKoX58u8SmtGPqEcoTe1PktNVQ",
  "key11": "23ZWyoZt6eh6WWSDxsapXwUSj4JgxMCEVwUsCTusywvFdZdha9iEyzbCC1S9v8knd3wZjfGuUWoBr2bQd7nBLpDg",
  "key12": "2v4dbWrpRAYNo5tDYQTq5QBWAQYzttVeGUNGBi1SPxL3CZNi5kYgTR28Qp3pW8jUBHDRQpAn9HouriiNmsP7KDTz",
  "key13": "3muxvxBDbvXbxX2BoEG1Y2Cya8CGXPJ4ffbfHdudjjXDGnhZhbUuCiFKhgkR2mCCKGXRZtGbtWc6RLZ5wasrGddK",
  "key14": "9R3GWz7uymiYg5eVeJRU2a7NEKF49ZpqttaaDJoEYfii51stYJyZB3vNyUWybPh1UGumpT5rgheiaXT5D4uyRxu",
  "key15": "5DS7dkvVWB41VgWQMZXfYsmf4NyBwri3yjZFcU73mAZC5J4Hadip4rYN2MnGjPmvuxVdGxFo3i7YjNGFmV1xeUMU",
  "key16": "4rthxeGtkRSu47TyxP1qWz7ZX4p5cTc7zSKAVNozGfcLEEWVMFnvE3Yp4jMqevuSzwRUmf8ktg7DP93J79kRUaEY",
  "key17": "4XpJwniwYTauLuaqpK2NigFs3gkKh6rqMd6raWducFKEJfKgDtK8Dz4c2HxHCiDY1MFkbwk8oCMQT4x1sZbSMoR2",
  "key18": "24P6fYZ9gUKbpgCZLoCiPtQb7sNWiTnnFvmHhVaAqmaFaPzCzTbRyADEHwweiVM861FrYn2JBtTeuPKr2AsnXpdZ",
  "key19": "2ycga1juFG1oZomWTiTGdpYaCXtHr8GHjHzzFd3c3C5aRb6x5mCWgWv5aGgHFSXHXENrFU1NJYbGA9YS2vJmi2mw",
  "key20": "4AmjxqjcwsiHBmMtYu6ZPDz8ZnDeDsXRzv6i6M6Z9UjZLrtiWd4F4bu9DV6SRSNvRFt3uVQYerzhwBcHPi6WT3QY",
  "key21": "2zHv8xELPxRokDSnrHAxR7Tb1BSPYHQvf9wNVBZq41PrPdd3NBKz1SXeAjnbs8mu8UNWM568UnpKgYLALqf4TnU1",
  "key22": "Xa8S5rAPLLJnTytkXdoDy95Hbw2yGsnqg8GjDWFy6NakNFcmyKnjMv87J2Meito86Nwo7qg7yXPJBj5aBkuZ2LZ",
  "key23": "5k2hUq7kLFdvB23isqGkVxLSfKaDFsNqRuvFjaM3LAADsVwXcn5nHsah9oHh5qMwNihD2o3Cb2EnK9zRJ2XGEJvP",
  "key24": "5uUaRLDRv7BSWTtpwrzaHwKUWYR6XBYxFEFh8ikTFTzp6RnBGjUf7XfVXnMzUWgivBykwzQw9m7ZZ9CrhJMH9rKP",
  "key25": "61eUBqHD2unDXD2UBmQBBUk9WpvFTKxv4oDVJ6FUeKrBfVVqn1wyCn6cQQLF4kB2sWDhJ84CkJeZQwpksSqoo3v5",
  "key26": "285EzCGbW3wyAKnXADtDhWpyCBBxjNZVmP77r3H53VkSoNfhyasqTqjJr2SJcKEw2ixowM51pR7fZpqM3ZRNmkpB",
  "key27": "ZE9gpUmYaAMdY8TnBz8fboiAPxTVbYg3rGDp3K7RzNLkD62SrZXuRpoZFnWDWCPny7SmD32QZ3sZNtwV1Ggm3ps"
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
