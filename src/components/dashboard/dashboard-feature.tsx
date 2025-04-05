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
    "tBvusftBSQMo5EwDnSkJPV4gpgXMkQBwxu55drDZskwetpj7BEsr2oGSXkms2ejZLpxXwMU6WX1VuQowsCoSLxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EYZwgq4eYrTHWRXZXMPBuwJzySTUvogLpcriAymfdGK69GM1N7a7tiJhBjCuCfUWi6LgTeLsDDEgJBwfZQ9AYuH",
  "key1": "5tu7NFfXUoZQDEbxQQH254mvM2czeRwajNSCfBvBWjrYcNe1qXA8jqxJAJNKkYRUbAfvDqoxSunVtxjN61UvDw2q",
  "key2": "45NDJQc1nWQH9iqJCBnKjc6dr5w7d2kLzE5o3gepZtF5cVawuVjzB66tdqQCYAAEYAgh5CFTn9WQJ8TegvnYQpTQ",
  "key3": "5CEj4YVsAZfU9LfLPK29aJVtNac6obtjt7qQmXq1wzT6qubgYY8sdyd4QAM3Z48Yd97Pgtu52jyUW5a4Q5AkFf14",
  "key4": "5xycQJxJhdAWiakxMsF2h4penaEHy59jAtm5JmRmbj8JRYvCVSwhi62H79S6gyhWRTjRjrq5Zy5hV27MA8cviyRB",
  "key5": "5gEBy1vnMdo97rksR8i62zfnJjg1A1CpLEKX55NV8UDfsaQMVQoGRgeToKmkxnC3xJCdTwLLoFiVzJyv82SLPkqj",
  "key6": "36eQH1BSt9zeG7VHtmbGkuYJFnr1FFTsKzC88Rq8wM4u866Larun51TQAm1Kde5du3iwo7VVPaP9ySswwj79EZ86",
  "key7": "5WF7DGaRrTDLeFLe6NEwHShEUZsfCcCEtkGkEPHJxM8uq4tLcY6mQV52NanJQBdqq976Q8Bme6HXtRvXxWR7utsE",
  "key8": "zG4faapJaessFw1bVxnmZK4AFBQruSdF6G6uRXGYFPJprjwRL1ccrCFVhYnKWrz7RDYtv7J67dEUe1RWNygjbLa",
  "key9": "5Nb9GpMEfC9bbKJjnz4Nnb7oLakEHy2Jrz6vPq1JriA3ZjYxvHFmp8ZNLcMiu2xRWUNff2uAJQdBExjR51NtvvVC",
  "key10": "4f6ZjehW4NVE9uc8nkbFDcnjayjnjptxDTwxS3s3fKFKurq6QiUPTtYRM2ckwkNKUFEfNyTWn6hXQUojdeURRV1p",
  "key11": "4RmZ3qpXi16fdCMvqvdRtyfdgiQ2tConryG1R91mdV3Xf41maqRtZ4WzeEVhhNgVcEoLpRQTuaaUDaY2ZQhVCFNU",
  "key12": "295vcJNomZmjjcA4Xi2B2AfzZk2YtsBM8EFUySUCLPyrHBexnJpJSr7rxm4oXRqpdFL2oyFSA9t5S1nfScmmsLDL",
  "key13": "2y9bqkebFTYQ3ExoysSYKx8dxXyvn6crGhLgiBq1oZiVjvJwQrXuL5vFi7P91qfk8SBup548UDqgTtHK3p8jeFXB",
  "key14": "5zHQzS7tk7wYyrwtez85e7QPBg26f6BJBzX6yoNGZHQR3Sc8JUVp1Hz2cMuW9p7iZC7gvbbgZqVHkx7eDwVrsJik",
  "key15": "3THfZSf2251SkBy3RPdLyeBFXeNiaJ3UmkU22aWKmsGQxMuMDYSG99FLQPSL3i8s9AyMs68evAFcGNhBKXUEnibB",
  "key16": "59L16jk8g6EwHozHB9RL9R6BR5SmKjNRittwuv1osDk4YjENVpcMhacU7ApRMFxeuZZRZFFn3BXDTM49pB6ixHGn",
  "key17": "3G6EbheDQLxeLcZEJwgHV46cN5Aokey3EWF68wD8P1i4fkAYG7GJVHRa23vXYAKhFAUhrUKibBAeWHFmZjnfnfko",
  "key18": "3X1TGMwgXAHGH55ieYs157Q8P83pdehrWT8UR9R2CqeqBQTjyAn5vfWuda5tP2FMn9jAN38bP6q72V2JYxiHEPQj",
  "key19": "4wZnSFyYCcAeEQ4mGp3n5XKZgy7yVyHUssYbPqbQyLBpmi8NXfCtBvjXXqf3KHLgfB4jkzsrZofHDbhPnMwCC2qh",
  "key20": "33F8HDge2g7Y1cz3Vz1G7PTb7nhgaJmJ2TFV7NxmVvgQN9m1AAQfMiqdPGjqu6ZpfwFi5en9UQ3LzUqGze8QN3vN",
  "key21": "2cntcoTvXfocXbKmmwHoKVMTA4iLTrBxsnUa3kwnSa6Yki3ieMa8XupqLAJPCETScZPieQDxCS928HT3FvsCQC2Q",
  "key22": "5wSANPEigmsc3S2duQeym1hmQAvcESwBoohcUEVpz8kuvndKMo5SLhxJwj6Ej1AxM6HAxjeYA2kxLSBf8fcNXUEJ",
  "key23": "4sVcUmP2jTL4xSp732G34oWrjgHswzNGzdcjW7e69eYJ4bb5efjRdWE7immyQZRMTPWjinVH4L8vnRirxkNnfRGB",
  "key24": "2SxmdgdgVcz97TjRiyVXdPb5pe1SVa7ZWp2kCzTx2rVqE1ZzcxB49hn8iyqx5wpCoNjyWFfyxsEh43K3VxA7p23i",
  "key25": "3jovf3XRszVSS4ipKeFMe7u5gtsWZtjR5H8uoZtC9BiBURGxGFWtmbs4DP8jfEyv9M877hA2Nybja7JgfTY1yggR"
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
