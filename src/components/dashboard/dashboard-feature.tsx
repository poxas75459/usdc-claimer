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
    "67dPEeTo8EvuqCMKso2HCZccSBmketTcBLBJA7QyNHGCFMMtn2QJFvRpZ32C4oStx14ir3ggsT9fcHE3xaawLdMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49HnHDXaTHtJUpSZdzz7BtGxEjk8YKwD8UvHaSVw7McsVzpoPtzCqTKfEF6PK3KhqdMzs9JY9h86aNJ4nAWB6yZa",
  "key1": "FcC34uprAwgY9JEfms1Dz1MWgayT8DEAD4jKS7M4vdyFPrBp21QPn82rTeDdoDrSnUPdCCvZTTDAK6fP21A8UtY",
  "key2": "4mdwxTNwP1wrZMZzZsR8oGgQAeTRrWgtnqhsneoUkiFe1EAdqqBxNhhtUq7zqzQUFiVEyH8jfwt9Xo6ompELf5hQ",
  "key3": "3aARK5TPZXm1pjFg8kW4gGvTBuMuYMEyqhJr7LQc1mVFwFPb1wU5CgZPwST89Z1R6NLZyh3cQyf2xoQseKrHCJVN",
  "key4": "4KYJnGLmEPJVj2cmbR61vkZePxArSKcArNeXwjdLGhFxxafvRGzsR57vEYvDeZ5BHk2xkb8oaTQTAMGNApX1Ghh4",
  "key5": "2CujhJhJ2q3itQkpeQeqDN7miS4iBCXBs98xFXpMarAxD8bXsFtt3JvTnjLiwPYJEe6nPdkL9Aje3gXzaFeEb7FC",
  "key6": "2r3v3Vmov48ByHxJLKwwxnhVWaNgbBQDVmUXdgvJjWk3Uqpir16hqt9iPGaZTxEsVDZdWdiNrMEjbYatT4jmnGxJ",
  "key7": "4x38S3X8H7DAkft3aK2yP5Tq9CGPCcgeDxW2N4q6rgvKMzQMVnKBRJuerEGPF8DzXJtFmQM7HSEHWCLPB85mGvuA",
  "key8": "5eoQrgoNtpYAVuwvcd7p9L7d6ae4GyC9muyAAYTfJ5rYn7MMxhtde3QtnhbPhGDR2p1rtdAerCXnwigxAZRATSuv",
  "key9": "3vX9iXB4UjdAUYHLWM6zrpHT89SKisV3bcCcwXRd7QnrE5J9ruz9UCUHFds6rHtWP2K22L94bg8WV33vbh5hMEzM",
  "key10": "3dh1n57ZjKzTpePNouNaFzzknVYUjgXv4Znw7Pp4RCzY8idy2v924bjk34y4gZx9S9WZyZxUXx7hP1UA171vNGv5",
  "key11": "29EiGnr1XLeEHSx7byLTQStK4UZax8VyYdHNHMcZJwYCZEZmpcriS4EkxDeUP1cVyWP6QZhqhGWCbTBN7KdqFe89",
  "key12": "4qud46qmHfmTCnfFbkKZjefQzT9wEPVW2wyGYhwZHfWCcbeJhkQWs7LcvZ4DCzof3NkFd2jgf73AeBX56sz2iyxV",
  "key13": "4umNKvSsGHZWvFwrffGXKXbB2fQ4To6bhaYrHVAku4nMSDhuhWQBWaQQqbJyRwj8DYqe85k7BmA8y643txq879RN",
  "key14": "gvGcS4sTBTUtYBborCBcd3euawsjMMQetaUueDJtqKxcgE24ytepyiMwjA4SNQ8DGjhb59PsQ2vGGFV4jXYHXm3",
  "key15": "2LvCwX5TTXMUhTggbKH5jzjUHrnoFWrxKPabHcBf8dEVRCF9rJrdkaCbznSiADsTxcJaT6XaDHjYL7mUS88aDCba",
  "key16": "M7QpY9VbShojnxrztoLX73is9Bny8YTKcoqVZAtLyAn5rcTgM9DsC67A57HUTMJaJshDmxqX7BjhXZ8cq3tDSL7",
  "key17": "4apfppKyYR1cZm4n1Xnvu91KGYYXe9U4rLwLjuT1QbMPbqJMo8vvwbzUgL1kpjm49YeAqeuJuqb4KYdsjinV3S8Z",
  "key18": "2PJHw9LJ6JBqbaBFZZQuTPmnLHktujCHM74TeFg4y9gLbFu7GUCzwwF3eXXaaYmugEtftqAcGuAPsEcwW9JoR3ht",
  "key19": "KFbGPRLACc8P9eBxRMXE11JMSHKECvKs5zSrVBb3MCAgU6To1y2v88du4pnaBKYi3jzM3kzLJbVk1wuDM3213Qf",
  "key20": "3xU4gNECmujHx9NftUcMpKQqgNroCUcEHks3rqgbuzxAwKdAAeZa8chXZCUbKiTTGqQPsuWLnZAMRnDFZMKBPM7K",
  "key21": "5vUbvoTeTre4NEc1BwXcJDRwVkbQ9MtH5FtFb79NABdpF5fBQBXSAJc4GVVcBdxaM37JEV2SBf6qx6DxGcmGFvny",
  "key22": "5EbKq8uydqA6zh9RuZHeC1qBbyjSxfUtr1WpurR1qndnVJ43UvUcbeZv7RYRFUDFGdSeh5nJRCqLRuGnkG3AKyub",
  "key23": "3yvH3gk8ecTvqTQ5xLeE5TZN8AyfLigFjzSv8G26iHWjZdcKUqrMYXxv8VKjNt7VKyMzvjH7eGZN5nRiMpBmXqSs",
  "key24": "47zDStkBfVoDBoccXaJFABcAejASX8aCeXgPJcqJauueLFj17jawJUJbzZixoPEJ3Dgey1yV1KkngxokLmLv87aH"
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
