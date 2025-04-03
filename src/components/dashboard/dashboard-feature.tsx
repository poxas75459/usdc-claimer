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
    "47T1y7Rk2XcazLnVD6297E5hFj6Xqo7RfunBGH4hUu29HkNFDFgpY4Sp8Gtbm8iMCd8MjJUfsNBoGAa1V1Hrvmd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RY8YBML8gtZH5C7DyauW91DDdhvEJXZxCAmceynD7poza6drHzficyP1NtgahTkPnD3UxteNv9NFf9CthgYjA1f",
  "key1": "56ivqEczrC29uCWxDxtGRJ8pkiWE5cDytbNqgbPCRfThxkXK8AAS5m1rWm6qJUJQVpmBGdqwHT7Z6J9fvZKmEKPc",
  "key2": "3Ujr188oJNwscWAo9or78BBLF6UQgkfT91qpoMp4wyxTaxLVNeHjA8BVF3qNxnryVrn7KTeitqNSwbYasb7buEmG",
  "key3": "25LXbFsginSm8cKkFLn432icyHbdTPezdAArqgXkXvUQ6khsi4VRsLFGjR1vvkYtukCxuFayh1z9HygU4zqQWDUm",
  "key4": "4jmmeiYhRJRxbUJpvK6v3oNV7uMXiPmAnen9WghsgJJ8SeRhHVjXrRagphUL2p2Boaw5cTJVLCYWUbPCUT5hgU3W",
  "key5": "3jHkg7HaCKCVpA5rEbjgmVCDh9MfqBFesedjgsWF1mvYfm9Zmh54uiFLpTeK26yR5ia7R5oziG1Qsvk4rS8gjVjH",
  "key6": "2nmH8L7ZzMb17nfYcTkLJ2KSZJo239UJbgAsHj4mP6WjtvCKuJnLE3qUoqFkr7gstrEcRfsHkKaCJPTK3ANKv7Jw",
  "key7": "CyPKuNkseT6dfRSkmhRoE4VY3RtGqa2K43sPcgsP2bUEUQ4nhaqx1yFSXwXAPcnYrrcJh9pSeCg7xLH4zW6mtDH",
  "key8": "3FLMoKmvtyFWkaoyGhgQ7XidZG3FNbZb6ptcLc1d8L1pNE9SP2Pc89jhBHEk7SAERJYF8MTwK8GfujnyLVFtrciJ",
  "key9": "3ZZ2EKAUcUTfPRSLCvtH3UdxZCA1fcL98VpqdPoeNFGY6pafUNvAsbQP7wLUoHUJmSTMvJUnP6EKSktAxpFHa7rS",
  "key10": "2fWKySW1TPW12RJD2UKB3PQ4CPWEntMeEunLFvw3NdV1RbXYaCH26jQmym9o2sKcxASegQag8Jm5tt7wreqM8n7q",
  "key11": "2FHv9XKNCZ1r55aa1JNJatcTcStFJJpp1mjcB7MX4LrGiW3cHs9r8okZN5MmGnbDSCx76s9uQSMCc67KaTT8Gd1v",
  "key12": "3YTbJ64jpP4TKvYtVrrzLLjNsqze8kRQBvfw7GNtWWtcDgN6bXwxXBDHTxNoxnBytLYe9MVFCcHgB6iHPjtqQ1Dk",
  "key13": "4WpRrXsmX2PWcBXjoK6xrXYMwoMxaN2EYNnV5DJRkCuL5XbBk7ZB7iTDG546kTHToBR4xoGbSjZJrmywZHD6JMq2",
  "key14": "2ZGRxxmcU5YvpFigeLheoZ9q2h77CUpSsFnAiohZoiLEciytiPuognNK14UwYBu1aAXwucutJVcKCbiemg4XxpdK",
  "key15": "5cja2Ajoz1QfvcQsxXTuBkBwcbNiNKw2HQezQH6sb7SZsSYLjGJ1TsZPJe3bmzqmeckPjpjvbMZhAJSypguRxWmx",
  "key16": "37LuAivqbwwNPneT9Wu1o5BknRCvT2Xaiv9xb3dVRQENBXddfCEPUBC8KoNN527xyqrY9NcNNVD5EKmizZVZsCSx",
  "key17": "2fPrZ9uJh329tGuNE58qSNjC1khbXsdGabM2sqtqdCzhaSbVZfr7wfRJXdzJh4LuHh8p6oNAxZajhQBEKwmY7quM",
  "key18": "62YXuDX5RuGd1xTCjw3CJNcBdSKDNfJzCKEWRFk5dCd54rsJmMwqsC6EegSiyTj8g9sLQqg8MfcQF9oirfwkGsnj",
  "key19": "41mLSPmG6iDXeK59ZXzTCCpgDShANNdAguJyWLAiT34hEgmx6STkXN3YuErhU3tTjGAHu7fe2ouZrGGrKaGxHGk",
  "key20": "43nVjZJxZrcZWSGV3JJDXECnTXa955CwECQFX3ajtqr8ZdmzDYWPasoh9LeRbjm9k18Hh5G7AL9oRtuYe9TMo6E1",
  "key21": "5dEiSwuA9CKu6kYqc285uWhuzxeroc4bT7NRWvLXCDNbsWzzxgnvbJdF4zQoggKVgzPuWuM4hjQhxxbiTWgUBnUJ",
  "key22": "VVDmBfyepE2gExugTvuwK8vKqAkVZzuB878zQ33LZT4YfHdYcRaGrjJ5o9HhgsrFTgKC5FdUjSCCksp8SQ9mdVk",
  "key23": "5Q8DEuhzKYu1gNQcu4W6pdSZ3c4T4MP8gmMqSwSkXG5jjqootL7S97p8zbhkvpC74RkjUss2GGdYuyjUb9y9SwNb",
  "key24": "2mC88nS82Qk28tfK6CVGgyv7fFXtaJyMiDrxotH4FXq8vvajoF75Gj3ksdgV47TsmEnAFmjZV7zWRgk5CPDgSCzX",
  "key25": "4WaydQ91FAFHAauQF8BUg4hmFifFUL9tRKHGBsE1exabsANBKRrRMvVwaB5kYFXFrF6rEMqYcs2iQTkPgfs7ug2v",
  "key26": "35HEQ2KJA5tZoqgC5A5rw444Z5mzwfdnEdh1tEeApf8DXzoiEKJ3ViCLLWtAHH5Hyv881pYYM6JJguF6U54XeKLZ",
  "key27": "3a1MuT2gEQ9hkT3BpqtLqiy8VunUbpgeTPU8Xq6iPd1niR7XQGsQbM6yjxGseDzeNsFTvFnJeseRsphUvv6vFESd",
  "key28": "KYKeptSUh3wrUdN86vSwtD8tCe5eGZnvmCkDyq59daRF1sQXSX2F8tHxcn8qJ5nQ8NPe4qdc6CXkxW2vgxNbDtj",
  "key29": "2FSCPbGDKbij7iMN99niiZsFC8wGNgdWtseTLeda6RRoNQxka5xM8uQWPWwy2uQxe8rX5fa8GRd1AAGPEsEWrW1n"
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
