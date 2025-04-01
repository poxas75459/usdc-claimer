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
    "5hWBYx9aZ6ES9hi6UPaCegMaRk5hVeoh54MhnvgywfYi7rpozMVRHSsUo7AuEFphTqcyENWc57Vhx86eoR8Uu7j3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46AQ41XRWUceZ9Mpq3Gdh2p9PumvxeKsFYxdVv1kahQUZFTQKwXUHzihMe4UEfXKw8Ahmjf1rVrbUSUNKcGM13ji",
  "key1": "5fRcECqkz4uiLSuCSnK3K5QzUpVN8MMAVVffyEQxEk43EYzW1ViGnn611Zr9jopeAF9EfyqfMzSgbQjkGXVpeg42",
  "key2": "3PPtFdmV59G7V6c9w4XQmhGLh5aE4Kk8Qtaqd7yibEqabn1sebbQkCS51csnbgnC2to6SD7UU9MAMV2cDZS8UwuX",
  "key3": "5tQdfoWARBPqKsBPuFg68gefqGBaFpDEDMyhi5VTyS3wgaqpDHpZ57aEXXQb7nQTrVAVSksR2kD2fdPVbgtKXcmV",
  "key4": "276Bf9UgDewLtTbcWMbgbLnsHbpYhiC1fx2itiPARGZyzYGAAU8Hx2iLmWDgj9q9hxSovhmJthHz83yDZrrq2Bko",
  "key5": "VVtCq42UAvrz3bZfmXdyN2nzjsr1E4u4vsNgcugTcmj83iSg7DrzsQCYP4rvpBpGRWpvGbEtqUHrMhogVYg3fcf",
  "key6": "5vB4Jp4GEMWFKKUKtnAj3US9RBdor8Ghjk8qFbYzDx4kV2qs9G93Lajv2jhMD1XePcCyt6T7bwScyJG9rA3GANoE",
  "key7": "4VPsWALWGdvvzLmosC9xzgZFX49cDnSm3TP3gRbboY751w2JmuwCfv1st91XLX7SjexkEyYgbxxAmdRE4DPKDJWj",
  "key8": "2b7EZYq439syTeJs7hssFpEGd9FQ6dKbGDkVH4MHVZW8zFZJWEGPYfXuPLqCpkmiGehNz7HTDGTYswqSD7RpR5jK",
  "key9": "63F94Q9pBLNBAGUh8LJkcPMiKDtaDVsT1au6iLLkfHhbhWxa1CRsLxjh4MZDFPoS3hgdTbBhRwM5yvBHMZ6Pz2GS",
  "key10": "5E3zyzViSNFkeKSeaAEN557fConH2qGeo2xh7ca7TX6VVaqpv5h9UnkDkVpQrhxWhrREsBmeFJujHfaxkwzyvnoR",
  "key11": "N6LoD8oTgSCaNLTELp7cc2sr7vR4Bx2B8HJtzJYmduTKuwQpX623YfSmgSuwqiczH1m2BRHEar45md6VqAYgECZ",
  "key12": "UPHYFwcYjLXatgjTbgrRGoo9UU3n3cC7VNzsK9jWn5qBXux7qPSnD8SX4ggtqUVKXT7sgq95HoCfGVrvTfKRj5r",
  "key13": "bYnzVNsEbMiy1iSAeCLGCEHLjqkksHsGjNJ7HenPMPq53ttsKYhFqhvkiFcqfNGzkLKgM9oc337xdeLQPMq852a",
  "key14": "5xAqBewTgU5t6b2rYyusA7oyEsppR6Xz2B4boQZRvsTV3cmWNvTJiobqVzuLQErVXCDmVYCfHk2HmcAYrXPnxb6Y",
  "key15": "T9J6i4PHwf3hSRRXgYyac2LjevHjNt3oQdSmmRxHm9MwAekv6RQoiWJD4phRhzvcwnyA9rBYakCd3wmTBXs3LQJ",
  "key16": "2ZokhLxMnZ1wyvw32CYPcqGnCTGwAoawYo5vUQZpb8kLmGkLTGx3Amcgscwrq8j5xjtrk5HHSz2DBzK8iRWE39yn",
  "key17": "31WRgJqhau2Lug5CXbLGCZwifqU6ojYbH3C3TWKWLhHVRyQbCZ5cgsUqNtYSvjtQqhHeeRaQHhK7gk4GGjbrKAfV",
  "key18": "3hvmSdAUSXae2NqAxpmMMxtQAfkhZD6NdwQny4DDqh7nJn1fSx5ZDR6viEHjFesM2wVGJEWV4LGwmFD2ZQzFkXJ4",
  "key19": "5iAajncP7BufLM1wDjW94uSL4mZ7zs6aKssijaYWSDR4x7zq4MdHh9mJaUYSHFSCYoGMxwfBSqr6mh9VH6ktCpzQ",
  "key20": "2KoGEx6hRQnmdD8zuWuvUE5VUi1LW6fwvgGSHKhCdmCDCw444nSDL6dbjesUhwnD2J9Pg1vED1E4TfwAsAzTSk9",
  "key21": "AyGCTmjw6svS1qfNeu2cX7SvsuK854aPG8mBBnnNYxnmGuPzuhCPD4Bvqthm5AyAnLRSvYJTunXaZUB7EqRJ7gX",
  "key22": "4AufvAyKtDLvNTXR7evnDkYMvBCLZfPNdnoYKArVWR8Z8SVuF5YrEuafH5s9YN2aqPohuwVucG5k1RqMh6bFVMGP",
  "key23": "4CknhXhdkZVs2CMryoTeysi1KQMgxUKhKtXLvFtvEDge3r7sqHxMJgqAF2Soq122Kybqk3zFHgX4YeRZpm9SAJFP",
  "key24": "35odMUvR7gFQw4UP9jwMsoQdUxtMAi3s6xk2hobuhSoNr7t3izhjxVGDpQgbBJYkK6WNQzs8Tc4pusZVD3XyAfTn",
  "key25": "hLFKbjuHMnjWjbcNBM8mRojbaYweBGc2wLtPGxDjpFYjY5wQFNunhb2EszaVcum3GprpTcEptWUGdTQgDo6GEss",
  "key26": "4wPwyHFjBJfd5GxvJApxEXLHEDM31uJvFgdUZPoLQLatxF9sRP22WfxxdVCXaUHPukavApwB2zncQEnaXdinqHoA",
  "key27": "3DxZFiN8JUgpj1JnnuSGEUY9NagnDrej2bM25U2Ai3hUoLnxUbou4r4auNf2E9sZRxuRymeVipr3N2rs4L4wVLgP",
  "key28": "3Wxj3vqvacmvzck63MefoN8GTxtyRf5mfYv8XifkV9x5xmTL3P8KBag9SWgEea1c3gZnArKkvisJ8Nr19qJrFYpv",
  "key29": "3JT6b2fbcijhrW1k31FjqgPNVnywvMbCM6wQkPRQK5Y5DrkSAqiX6voovLpZ7HkNBGYMU1LKd8mMt9J9kzjJ5yMG",
  "key30": "5jBCmzNDnWEqeEZsDvmX43GXWdHKHF9FhQd27AeabBjuv5cJ98ZTDsDGgJLKySTfzc6SMwhcXKBowV4GbRVMzTVN",
  "key31": "4egF3GjXS4f9T6beYjMqJfkqYqtEaCVZFEDJ39qxu6wCwJjRcWByCRKXwB2ULUDYo21KjgMqFkdc6pUQKwgUbPPe",
  "key32": "4stiTE8fPqSuStNLYrB5yixAHvhZtZSR3sCdW1ArCXbyBwW9BpeQdvNUxSLLkSmCkJUYr9Yf1E75qiqEpjNqHzGm",
  "key33": "5D6puzHZEkbwC4TF1pGEFWJ9kns8PwS1podUnbEMMqxFJS6CkwdnijrE7pxYo4P754PkCqYhjGdH8bsuZoFXwAaX",
  "key34": "5V1UTs9ocJZ5z3HLeGqK68GLiiq7JfEVnc84FJSEDubh5FJBJs5jr7ak4SqzC4urBbiefZTDup15QqLu1B1jGpad"
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
