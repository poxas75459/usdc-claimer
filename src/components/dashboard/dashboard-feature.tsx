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
    "55MxNae7deQwCAEoXjfeUpzsAc8kDrCmhhgb1jBEEpDJYYfheQSGbaRKz2f5QHyQj9esePpWxFDJda4FAKfCuNk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DkfVcvDax25ZpYru9RPJ8ELLcNQetUGp8npPYeBJBThJCzi7Sk4B3czUMqaX5DTAJmj5hcnXR7vFrjdeQv6GwW5",
  "key1": "4hWifafanGbGFiMMnfQcvRSXL32Tes7FSZCCM5DyHryayMiuHWhw1cKzjoixWcKzuFxXgJo9dwkE1kfuKYWEVPGh",
  "key2": "4yEjKdU6sAtymahtSHzrAtVbbd9XBW9rTg9X9ZnWy2ZjugqQL7yGX9gmdoio2hjDodutD8vJz3ftYFtZU4oUPwh2",
  "key3": "2U7Kh2t6d8QwQQha7LTChGGnLVKD6fHdPVMf8HJJCUsNzr4Ti3XhhqjZssa3aBXSGNYmBpYdaixtTUkUuytSWa1x",
  "key4": "3gTX29jAv4CeVMsTWHydaPSrHgX8yG8ZBPoKaVFFE6L9U4HBAjCGiPhNCCeRy6CDrDva67E1hoTu8LKCouHTGjuj",
  "key5": "4RBwByzmHZNJV6fYqwgLX8Ed8FBDZ85mTZsFtp1z4mx6Zcd8KGkS4x8yJMi8homauY2jv2PXhdD4V5onRgu32ixL",
  "key6": "VPt2nfshvC4PMVoREQF1vsz7zCayTB4YYN2NtSQ2b1uoH61jU5qbNe8yUmb4ye5V6oedTV5oHWYWiK6BuRa7bp5",
  "key7": "2XKvkM5wRhaovK57SH6Xzct1mGTg3x3LrLGAnURmGFuyfe6MJwMQb51nUwetAP1GfWYvLggr5A6dVAkSHsiMi9xw",
  "key8": "5myj7CUxGD8cSfmPCzrZJbtjtxvE45rMXtsfY9ciUC755GQvXyfmobhNETGmSYNMT99boeVHhhU9Gp8q5gr7oYiy",
  "key9": "YfamBSaqnfPWtRJdjV1anrA6eitJRotwXWqySXmbFYcPKE7PhF621gLKA3LNB6WcBeq2BMNjttiMjbohas9c422",
  "key10": "v7QqRf45rHTNx13ofwF8nZV4sttcwpo7VHK7qwjaNLMMjbxF5UvTHeyVCvz9md1FfPoVa27c3Q2d6sLsb4rqVfL",
  "key11": "2ZQafcTR831CYFYfrVh8B4hzuCSaVv2yHC8Bdq3SCh5zRVBXgJ23wwLjXjyFDucGbNFTvjSVGtwh2Crohswuij14",
  "key12": "2ycpbLDrirC8MBz4mqMN7vrPbWHgn4ht6ZxqEB5v4hWdPm6tjmpB1HKm8LiSM3TaxRmJjcBr6vvhk2jHM22jE86i",
  "key13": "4Y1PXJ3zCiX3N9SMqGw8cVkDiY9qS3Fc4SG8AmxD382TXLM3zBDzckZtkbkEZguHpBqzL6hiHqPfVMNcADJCURZ",
  "key14": "3g3ZWws6uYJuKBXFPJ9pKcuNoQv1539AcL9GbK8HPfr4GF23jbfJpQpvWnorxvPy6LkNwh5pDdZLUjrH4iyoYwjR",
  "key15": "58ERAQ27ReBdRcdwFCvuSpoFx3V3R7qkocjsYh9he75SUshvHbPgAtU1dYtYa2vQYN6LdciDhpHLSTeUhsaGwMLW",
  "key16": "XA1XKqVt6HdqLjeYsLyCzJyvoc7yFbyFsUMoGv2U9YQ14qgycEP5TViN7fe3F9A3PVCAMKesWabFEmsqMagCSeL",
  "key17": "SptkDsBjRbnEby98E3MYUiHEpd7MrxqcGQ6MrSxDkPUiXxERzoQfQb2uSk55gy7c8G4gUPhUedMRex6WANxS4N6",
  "key18": "XL5Drdef1KNB1n12VYCDFgfPrpAy5AAF7rEF5ZcgDfjnfSbsZ7BrQofFKnNS3Md2qRvKzXqc85PoXPzpaui5Zo5",
  "key19": "4EPSpGRtB3MGD1NRXeQYy1oZn8Vxy5xWC5Xo3J57espS9CFwfrMQWNHVLGaC3HuBxw7asfeh6NEjyvy3F3NDUGDm",
  "key20": "496UpKnur29d4UuwiKgxgTiq74gowt87eDQfMXcUTd8LN2y4mwjVpVZuPLZPrqexNRrfGz6Gse7hwSuLHpc9Xk31",
  "key21": "3GmmoviemVbgeNm6prQMAAhx7HUfHoEgcS7EBjVuVHiTUUw7Xnx3fSNuUxHrzBzDdbhy8PCuhJJyfcc9rS5nuxsZ",
  "key22": "5D48dWJH3xRE9svFxXE2XLdmW3m53vFunLDLodnYeUBMDcyuz5Rnb9fHgEi14cDVJeoh6oJZYVbwPNDVtYxoQhE",
  "key23": "2Uzc3Dcw7KFbtLzDYAkkDyAtYASjnuikw3mSuTUKmVQ8uLt4fjDx3rPHDq4gm77izVmVCEKTJJdH6tJURghiGrab",
  "key24": "3sjNvENrwmVHVpQrJ1ctjEiTTjcz6zjeYHX8oXAHYPwEo1Wnck8e8W9p9Q6CCKDA5PH7niny9p38UGPQhmMQHo71",
  "key25": "3iHdrY374ncwyfzrHFtR9i3FLJJa5CYVj2LptzttqgYTUCXKdYF4pYqPncb6QgX2fexpfuHkyVCvjxsZgFsHBLLF",
  "key26": "5VWqxxXDxJ4akwbe1CqehC2rA8Ux6NcRmMCvbNpib4i4AxL1AbP9WJZ2eqLBKkFed7hp6YXWj86VVBp4S3jkXF7R",
  "key27": "2mei41JUH8qypZHu6zdnGVNMuMkKiQ1XYv1emVLyBxSbpHZQxj9q5jSw6fjt4y3KzwLLV8n3ipxGEtDonyCf4BvT",
  "key28": "9tMpZmKn3RUkF1nsczgPPYsbpZfkDThLVugk7ityM3pNoPETnwZVMYaLwvLSDGnx3FwmJraxDsm4tCgXqFEEP2Q"
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
