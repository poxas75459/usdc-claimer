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
    "3htVQ3EdetX3oXxuWLa8wv1XKUnnM3XjTV6mjiojhKQiNeFyQjPNrGSRtZmK5WJUEbBDKUtJ6fynJqDtbVQUmyDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CaXaCWj1p8qYrd8WyzMG8JG6CDb4nP7bLwwryt2H19NpPwpyShsk2SkkYALpDaBor385gjhyQN6c82jFxtobitv",
  "key1": "5PehaEko6PmZyfBuLCSd4XqfdmnJ8SLW78sQptHH72ZW8Qxk7uJEbm84Q9rJD3X1f32gVbE3QYzTyVXGyyhNdSBV",
  "key2": "2Pcj7G1BZYQ9EB2mFM9yrtcifZzsE24rVhWVWZoQZirUbcJnAbQvjBBv3H74nwKSw8ZZ1GrzfoBuLfZNg4DBvdSr",
  "key3": "5QCEtp6uCBBDvZozitme7DEPasff8hgLDoCi3Mvq5BEhMeDVXksqxqxYTYqyTShypn6tH3kTXwVzu515Gn4qTzRn",
  "key4": "2BaC6bsCQpC9GHbjjYEsa3QRnDktyEPqC1AobSzdCCqBgMWs3JkvbDBDafbryvbxkne7ier7Ra9r3CDtmEzaSGuc",
  "key5": "3qB5FokPny8FkfmmyfRxebbWpcWF6i8eNZTjZX7HHbZ6YQ2QHM6J1e9e3c9ozEzz1AoBYqQTEJX7zqK5BX1E1GU7",
  "key6": "3qQPFEdJsHUxAXMkhJJQW8AaJk4G29XGGPnaEvAbiWsZVSXuWHvheYqk57mZwMarr1pTfngGV3fbPWW16ZoE8XdS",
  "key7": "3Uy3YKnJ8f5ZjqabrgbVabUwcmaYpVN1NkvZb4te4dpAgLeKykzP8kaVXs9tPFE7LtxHERxNPJQtmGnPJ3xeoZD8",
  "key8": "2uhHMWXByyYTeNcHRAxnnAvHQLmBFT1kA2tdeMbJ1g8L5YbQBiKFhGrksE2mbrbhRkofZVrP4yTmcKRdqq5JJ1kt",
  "key9": "5pqB2waoAzrmhVSNh6ZCZ3hmUTtsFuUhpcyFVaPSzFMVynCXT4tQw6z9oGtXTpj8uC84NMMpAsQVmbJpc1LD7qS6",
  "key10": "3ePjEBydRJPmgXxA1Uk24YPMb95yL75Nsd5uQcAwtzJGRFBPCKf2AwbBUTtnkWoKcK1GLau7UfocxP9YFNcwCSSr",
  "key11": "5YWX6oodfVkYXVDBErH1btFvWSc52CEz1DiKvNpVSpcngvLKaWP1XVe7VACPU9U3LWwT9kxwbGhWm9fKzTCkyXgw",
  "key12": "paZRbVym8N4cB3hnLwi2EnKjeBA6oFd53bFUVj3dehgPERR8K6nHmCdHpeGTq65Jqfc8MiEcoVoU8qHBXb3UAHF",
  "key13": "4oVUkM1DXpN6CVriSntt6fszgapBGM5MrCYErTonBHiqNToau6HHauizyfWzXkUCpzSXaytyu3n9Q77w73ShFspz",
  "key14": "4cL6v4RzbDJ6JFRoQqQhpSj22vKaNHBZvsm7VYJEZzMi6qNehibnvQ11rpFTXZ2ZTaqqKxMZGh1zdZqCnoPfAE7x",
  "key15": "4BJqL52b9YQFVYTSMdxjRpKUifvkejBRfnMhxNe5ASUbcsD2kBXqdX5UbvF4oZAhSxTn9dQvGRhthheF9xryepds",
  "key16": "63otDt5msVHy1GftuvxhJKoPc4kjJkCYJSWzRJPLwzHFfxiXk89261Qsoas7DKk5bdt7MhSw1nbDDd1eBsToMoYX",
  "key17": "5eBFmZUHEJC1z7ojDd5nr2H9UQ2L6v5CWvWK5uCP9MLazAhx7QWkdZ1nMAGdJYgBhqpwbHnQ1sqbQ6BsD6gbxpK6",
  "key18": "cuDyprXotRzE4PHRq9DTNsMD8UFTTyZBYNhJG8E4UUf4ApnucYgDRqz3fNbxXfYnrYJdTKWXdRw46ErrwxaKx4e",
  "key19": "2ykisZ5tiUGDtWJswruLgEmkbaVx1qL5SaLEtueVZaznccsVmHncSdacPfTqDwisrn1RCaKgv8hfoQo1GuaEY21S",
  "key20": "2szbyWb7ScRCA3dN41CyWoXSqLGEZp7hLYc9hzAGvwgLdLaUe8vmMvtpuHVbnWKM9GBuX2DG7A2LEKg64movooY",
  "key21": "63KujRYWFZ4o9N74boMJpDx8WubvXEHhf1oG7Ajh6niD5z8nXH4wemftrpPqjrRTNrbjKB6DN2ZUMNe8kxbGi8qU",
  "key22": "tsGjmEoE7kZQkAkguW553afqVRE2Wr4kAVsZQFFZSQASiCWDjJMdavfsrnwkPpviqFEz3ubykGyh4xi5SSPpffq",
  "key23": "5mcc2PVUBgwrsQKQJsDyx68XRkYxkMRBjjGnaL8Jwy4npdwSVXvpS9kM4Du9MiiZviuhThqU39rApP9Lz2kTNpQD",
  "key24": "UnK8ePPAjrcmkFskan9GUP4ZgA9wvp1tnksNdyeMA19hBqmYtUgdMcqHDzh4oaLgDLa4wwMUjtogD77gHAceiWM",
  "key25": "2Wy6hJTVERrEG1jQmm7MscWW8NZ9RGkDX3o4zptLhwM16ZDYHWG5zEjRx5YLMnpqMR86TUnLs55MwgYpA8je39P3"
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
