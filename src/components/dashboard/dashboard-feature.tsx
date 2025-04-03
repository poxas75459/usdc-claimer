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
    "3zEVqn9qBqVwob6PypUH6nzFcyAjJQWuv85yXqZQQtcW22vojT9gDC3QaXF9oPo9dqDM738JsVUtydZYtNAHHaM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qTBEJeK7NnR1W4VwYbvgdieb5sFvy7H2PTFkhmCZMZHZYWoMENMbbLfEJEGcCWQp7HcefjTjLHfDCTrh8N4S397",
  "key1": "3qaF9pA9KuuCAftaBRPE55GLzYhHYwdtC4Fqq7kHkFWJDGLeKJyc4fSUaPSsZa4wYYjT3CxfxwedbQ8TtntiyypJ",
  "key2": "4NfTgvS6EVSzqH7NRRnygmjZNYyMjxZB4GFUNhY8fmv1GdRhsfDDfkaVxuwJhPpwstT2p3EiULGHPTpHzArbki8S",
  "key3": "45WNQNB2hGRfv9EMh39YZHxxh3vK3DSyXyQMmJbDCU1tmpKGPR9JCQxrz7PVHkDyUK2amLTv1KjZPJnkNZQWMrmx",
  "key4": "4FncfPeBb3FrqQs37okosZkeK7q9czNGa6TCTSBmvzc4PXtg62HBhfu8nvMPaYC7StgqtQbkxRJHhwBnbu91V6B1",
  "key5": "W5cwdigm6dWsFjT6pH6wnVXtwz76NhrQ8isA59LcWtX5wQKkbyQysMbDTAfqzPrRJhUWAfJhyfx9vN4f71WVyZE",
  "key6": "35FDuw91zyXmXDm1QBWcR3GoaFXnBqzDqocPsodGXcE6pkQWJEjayKh8eHFQMGXGy3Zt3YcF4i7MvTZGz7Hzz2iS",
  "key7": "2uP2gqpNZr45Hdss8SfSqcEgSqsho2PshP8REYzvfx8Y2ya4cqZFrMDbjTwFirVAYfQPc42tXez3iWtepqAJNwaj",
  "key8": "VwjFMv5Ni6y5wgg5sqmu84j2qya1MNpxhDZ6NaA3bYzq4CCopQrxddBw7RNs4PhX9MXBiJS9NAumCPKtfYY68f3",
  "key9": "oGb8f7C9LWz7HCon4kTLXs6H9bi5kT7ESwZ2ezJtmRQzhqSz4tfy1ZmsHbc7BZxnCVACrJyt3GPAZBr8L1zTJrZ",
  "key10": "3GsjNvHjy6F6jpd4cjR6WB2qLjHUyj6MupXLirWn94JA6Hi2AhGPwU3SDzWu9eAeHNSySBXuVM1fKTYJ1JnivbgM",
  "key11": "3fh8Wfb5ajxvMvwnHR6dpTHQEdkV9GS3u3Zb8ws6EHrc58bZgU9XSNEYNU8jFkARAM6LWGLVi16h7WCabE7bE787",
  "key12": "57ZsN8ZxJGQRqGYqr8QBHDSP8gbxLkL6REx2N5thmB3JgnYaRd3gNsnwQt3o7Ef5uPpwr8o7zKtp3oaD8XzH1MP9",
  "key13": "KDFR2kcADT7ehp8UGuvMVwo6Gu7eThzsK2RAwmhkWZHeE4TG4iEqGQ3LqfE6WrqBnH3TrX13x1PDN1fWpHSLYEo",
  "key14": "2fA2sFbjWAYDQhXZA3yqPXz4EnspPBjdjBhYXqrWHLNroyXf2pqb3N4gTqGxg6NKoi8ss6RSuV7NKk4xc6s1DQPu",
  "key15": "wJ4UFa4bPFXrNmECddtF2tWfovtGUPt7oW34nN1vJTzyXYiad16MHu1YcWjzKEdhG1TQq2q34pbQyLUZJzmSb8q",
  "key16": "2pLMsDquMEK3pvM3PDnSRAcgfGTUc9B6kCSDvDtxkSgS7gdyxquMTBdRLY66nkfVcAqK1xSidsw8ThyeLua18vwK",
  "key17": "64fxGBMgdEr1erZeL3jc8GLAe1S8EBAucHsx4CBBTTKB84H9LQopmVHtFZYTjbB286TpPjb3FX5meAzpoc65tXAD",
  "key18": "3o9VTrDV8GrNpd72J3Wf5rVbrrALA1dNa7Y4PsSke1pUqZ8Ech6t99tnkzv9ULrnfY872RbiqazPhpzun8HpvuBg",
  "key19": "3ZXxcpozbPRncoopBamKD6sHdRNdVEqWA6yiU7rM7TTEqz8wHt3b5CJLnrUA18rL2AvNGKvGVQ2722ext9KmcGDz",
  "key20": "2ZagN8NFpfW7cxpL2U96sTh7y75pxEKqoFvSaN6pJXxWNuvPvtRV5vBvNASZHmH94bGc9Dch9bmh3ompJWBVdGs5",
  "key21": "4nWDeDKqMxP4V4gS632ErZgR3h12mhovCQL3PaT9YfhoVRZ5wxWGd3dqoab4ethW7FMxWCZGyrhc59bfBoLpC3me",
  "key22": "4oFmX3K12V1m2ry1Seb95LBmSd6RpajBsmS6NLAvFJBhHxN9SJum2bYpYwoZETRfg15RryqSzkYpqcQaRUzxcvjv",
  "key23": "gwHASoJv5XVqenV5vdHhiZckxox3ABHbcBThoKEQcWgbAjbBHrakk33uvneJn3KaMLSc3N2cDKjMnpyLbug4ThP",
  "key24": "GGS4PPciQni6UvXveS58xr8aDb5ZRmdhDGo2mmVBkhsYv4Pgc6u9qyjmKodUE2qZ9v7VGz6ZsZWc3KUX6sq56Yg",
  "key25": "4kRePnfTvQQTzWLDT2v4yCTXxqQVfrAvsBNqogwsMkS8668pW1upNRJbXEnAcntihhtbDEU5465wVH2aC4Fr8B2b",
  "key26": "5rYB75bdHhNuc5K7r3GUpc7mQZ4m3bQUMtHWGprBwikpzHs2LMzRUAa6o1QrT7wvQrZxYSSKrnJUUws3W57g7yAx"
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
