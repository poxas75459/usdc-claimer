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
    "428dtxjZf5rZm7j44jtemKuEMSfzShDkPZrfJUbiDr55NRkckdA1vPiDZyjFgssVMF9ekvo9ucAkuRxVfVqD5RFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GXGdhrg2Yjks383ov9Q36CtuT1Yf1ZiKjGv4uMf5YD9cJKoMxaAacFa1nwi8KxvzyzM85gQqkXbEAGDkx4brMrP",
  "key1": "QrDbsJtn7P4Tb2WDUET4Bo51oT4kboee8LA3b7RnNBmLFYgRJvs7dwnTAMcSZFxueEUoKqEe3BHKyfHuMBh6Hik",
  "key2": "2bhomJ9US2dMY5FDx49UDxQNTaMTZp3UxuaokWfxwxMFiVdq9ut2NdLwhecxkaHzYWbDBjM5VnpPNTgqLCNbyisX",
  "key3": "YHDQ2361ufp9zXtapBi2Eh2rp4ANaiiEJTmzVgh6za7tTPUoryGY2x8tGX6EjbMndEMqL1XQwNjaWdkh79bWSST",
  "key4": "2xzdNEpidsWiLph14xEK9PvDoXkgFzMEEGTcnvXEPheXqrCqmGkVT62RJHeWUymo7x48BnbjkgsZqTYFxCWHHuRY",
  "key5": "3L5GJeN41zZ8kEWmcUrzNvrHqmdbR9NSTZdpkrgDX9BxHkUshewkLqpnfnZUDTorq1HdGDhMEYMNnphmVQ2ShN5z",
  "key6": "4frzvAH9UXgxvYTWoryuUBGXL2gVPEdBRAGcEs3xEqXLoogeQjuMywHnyDUKE7d1pvX57RMVR1vDXo7DA8CratBa",
  "key7": "3PYrEApHQvs2uoWMvSerzBDd48WLqvR51hnFhnq6PDqAQznYaG1mPtsgorCFAZEJsdZZ1vtBp9PQptA4wRsqj9L3",
  "key8": "47Mmk4TBBdAbtyqMJ9MdjLTkDjs1TND6eiVM6XrqdyxTjjRgm1gaLQZACG3RYJyB3rY2XN9SyWdskrj824QdjULY",
  "key9": "2DiKYymA4zZVJ4CGH3vwGTwAkQbNGrB4Z8phTN6F31jP3LXiqUibJL7ZoFBtbYNSB81JRZacpE8gDYkrg9ZuAFne",
  "key10": "2RBw8QWsK7tbLr5X7WtrLYNEBqsg1JM5Nqo3iDLdW1iJqhHiZ4j444kEGL9X4RftPbLXF2ZXsfwCLFZUfPfAYxyp",
  "key11": "4jadWu8y4wsjTKQippvYJKd8eF5QTgSHGDEdFh8MBwyGr3PD3NodnsJv6ihK4XHjMKfLutMnyASrRmpUKvn55dtR",
  "key12": "NKpdGB4n49m8oyFNRSMsPymKP8nZnDJqiLdCSRXmcd1GJTm5WhBwEPyaYT8b8t8rDHVy5W1FB6pS72nyA48nSQm",
  "key13": "Uv2G95AJMLSngERqhr4enMb5aKrJLzcnm48G5azoDQbnb9YGfznSg5RmUDDRNUYtxZtkbtYk6gpzGWbnC3rZDNd",
  "key14": "3XbYhCfaP76S32hyzeWBMH7RM9KtJ18n4RkTxxh2sXU8A3fnarWtCDT2JEq7AdjXUuCuJJS4biHXKvEwAUCgYAu9",
  "key15": "51nDxZK2A58usfDeqAUNPTyUXiCUhqX7iFrXMAeArxAUjBL8Xoy3CPudSTyJRJ1VR2yZEmvKobyb5WMpn8RFFFjQ",
  "key16": "zPwmxMzDu4N2zMqyFFBTZfV8pc8yHi9cueZ4RveNVN8fZvrhK8tCp8DGKSqnVTNNFu7GLdXP8qZ3dgPVx5NxhJd",
  "key17": "2ihAWqWmVhFpiD8Kxoqn6vdP1eEjnCxN1ZJDpy3UhAq5bTWX4uDXKtvfinSfQieSRRxEfvNGBeeSF93NZ8vKkVvY",
  "key18": "dARf8UxpkUN5cfjRWEfAAaTGgJZEoUGYQKAmcPSjEVXGGXC6ZgqZ1QaKrn6d8yC46zaBsYSffXvsRjyMQX5KWwq",
  "key19": "tBhtD9EVPpZcp4CMHMx1Zed2SNsYeVKo9s3LG7nBEjj4t6HTCXBRYmU9VcmcxKSEzpJnBGXewdcdxrKVR1hdYuu",
  "key20": "4Sfpuru4YT2mLfFCGCmdLRANkjmwdMth4TAEGLwZ9LdZuzZeYsVyCxVCz3QvvDs4G1jHVPJeeQKmXoDLuf4gvw7M",
  "key21": "5YeKuTaqkw5ovE7mQ7FzQSbVsyfQ62x8FcmJvvzM3pv1dXB16voqBSSjpMpekwHHzDF5NiwRZKJNN2pGPqmKXTJA",
  "key22": "3GtLR6urmf596TPjFzfWUjugWcrceGqSs13SHZVq35HqTg6DnoF6dSDyRAVdNtyt3bHwpPS5g96h5Hk6G63JW4i9",
  "key23": "4BFNY1qc8BJYC2PpK7jX1D37T3BQyCNZWzWRLC49kX6ocgyTAcZyUGZmMnBjQP5ZYsx4pevnXeSatCmaMFyMaoSi",
  "key24": "53zgtmv6Y7nocRLPYVqkerpYfbUtKisZmxc5c7ttQPY8Vh6sJBL1s6jM9bStnGJAzegFiKuiGia3mH1ie4mCA8yz",
  "key25": "1212P1itDgVERP1UCkCJoPeRHQHokohWaVmdJHgHe4YZYQ6NiqTZEQtgS6vS3K4vW3tE2fmTh621uthqgH8JxMG2",
  "key26": "3d1rsBi9xFbEogTJqcijaUzKqJ3DfujPHR1QC76RESgGRUfN2NtMChvExfZZWBh1Tbrj2DY6CTg71k64dgpTMygn"
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
