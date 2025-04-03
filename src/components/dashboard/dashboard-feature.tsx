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
    "5kPU5woHXuVLPe3yE19nHjwGz7hUysxbVryr8pofXyCGFzUvTdPVPwptXGy9C9zkjjBhKtFDktaUmYpi9tEjg5Xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BHUByU3KMmiBr1hnPArK3grA4YKGnVioxv5Kt26z5yk1Xhto32RfzLPumofXG1suMtygkS72Vh33m1Y6VdjFMVz",
  "key1": "kCPHirGW2pTFz14kk3bH8Z2zcbY97ofMVgtAcmBbKErMYx3gN3uFbk9rHvZRBh6LWwvvrNDNnCSDz7fPUzJPxgd",
  "key2": "FP55vXJ33C6VrxLtQsuHm3B9wWSzb1aaDwT8r8JvS9LrWrux7ncBA6LjFEuvbdR3oWoSkAuNBwbiZ2YMycXCYGi",
  "key3": "gqeNxK4AZddZ79upZZXWTVnYmRkzAwKDDxaUVbfmwsbZ7paWfh3cjUKMD3DYJhFr441PQz2iX2cXoBLB6E1kCKy",
  "key4": "59Yxo72sgNzQuw8AaNqEBpWqihitqazc8e8BqhwnbQtmnAiM172GU3W244ZhbEiq6wr7cFNkVJEacvquq6Ya3hdu",
  "key5": "2WFCDZEn9j9GM1Cpz8mrsVWHgXnDCTes326VTpv2W9YjqQd7SGLZqTNSv4bJd7JpHZE9mf1oomLea9X7e5dr3x5x",
  "key6": "2FV6c5myU8ACAoXNciEAbTso8tBPH1PL4TDUExeZiYzD4i5mCjEgTYxHnttF9Q6fDsZD8Pd9fRmkrX3NRMVhuaY6",
  "key7": "5tJFPsJhQwJ4CwNZXfkdVmvrawV9SimUYBi5pEi4ENcx9GZTraS8JM9EJFDAXd8gybE4gpHjrL5U2x2Umdhn4kKp",
  "key8": "8cyz53R88hmdefbqfbR85F461StWZ44XqpLjZDwafTF435rms1YvJkSWyDAxDFT3Vfvzk1p9Bhaf3AaNctWeepN",
  "key9": "3NV5cRhV3MgVonVGAsjvjeWGzCDkFDE8zgwmGafd8uxbpLRWomXVbnzkfAs1udaBXUYpwcfkewZnEJaG5DP2aLMN",
  "key10": "5KyBBQVNQ1AJtXTHMZWnvhZXyKKVAEEKKXKXgDgNweRb22EJifu2WVtUhc2gAJXcL6hswSE2zi4RwKiscvq6CeWj",
  "key11": "5LAhUNuofq92hedHfj3DECPZvYFrbFmYE6mNWhNUF6aijVXBd9jP84gzab6c9KC5XEB7zod3j51WMvByNoyMvGzf",
  "key12": "2gSMFc5CXYX1anTVDFjst1BwtRgTjdAfBRqjhzreComxcW5DwsaHLPZk6wxVRGBzoscHvNd2SSYFTKinz8eK9rHn",
  "key13": "5VNSqMXD31u3jeUHipgwWeun8S6c12U9xhHHi6vw8QmFLcQVmEzDweByYr1d6H9Eb7qe8NLrrB9CWcnUfZUtcfmY",
  "key14": "5e3s1LjuV9zSo3yHQCLNk9kPqKrqjW9gb1WKZCQchFsRpbvc1YJDEfwRAmxABj1aUFstYNCRHzXD88G9fhUbqqgj",
  "key15": "2FXeVUYrj4twAaoJJuBComXXAoGGeqaYouRFVS7YbzWdq2YDy1SqqynDeboNUSLhwMmV6EwMVyJ9Yb9VsgVZR52w",
  "key16": "61up35xEHDu6DQ5Re6hYZkz9zokedsZZNW6S29rQzuH15nszWPHYqeFyCxjdqVyUNQ5hNTvVR1TGgSw3FY24Tuyv",
  "key17": "qabBfR51N2DWAD9q5ScnbtMGuAWF3aTjzhJjjAdPtPXngr7E5kPwpdujzKfEzwSc1MgUS4xirqeq5vuiPkPcYUS",
  "key18": "5yC6B5qdyE86XKUajzGr7YgxUiSnRKoFB97vGXeZkb24oEMsPeVJ93MeWiEEwubr1zA5EupPs1Yct6iahzEgiJWk",
  "key19": "3xCYDgkuh5JaHQNk2hjrqExau7aeQqxuu4v67gWYfTaTDtN2Ga3X6AzwBGBZiGRnzR5y1LSW5ZEbnjJeCSzPnL5H",
  "key20": "2VbFBzv2zrdBMZDVTNjYSkXcMc7WhGVJXAVMWwkFAGn1Wr8anxdB6Zem3RvbStvp8zdhHev34EZcKR7ytVrfoqmz",
  "key21": "EmimAwnBoHVPfH7dxD4mHnJPeR1RF6cdeKZ4GjRHzKS4PcZqvKHFTowUozdXqMUUaYQTiW5WL5S1wPTWzF3Xz64",
  "key22": "5uE9Z647sjEevafGVtdmjNMzN2NpPinLmGLSRoKKLz8mSEgXk7nfGgWy48R2PH28i4M5Vu66GNp7nJ6zNsfECoUS",
  "key23": "2Wp7bnPu2wWvijaPKeKJ5KHMU3XEvp7gZkM6U6QS16oU7cd8ujJhg5Qg4S7YP9QzvWw4jk3G6fvruhwmzPzUrE2P",
  "key24": "31MCn2zgLrFESHCmNUNdVyZTstXha6F5nZ8nUoTXBjY77F15aR1v5xF5qMsfS9fN7CpquHHd7mNbjY9Jp4fhVpF6",
  "key25": "2SVmWW92LCwVdLwaRCX8Rvo7MVMaRnkarj5798NHgetmwes32m9UEEgRnfu1Yck9HYNtYiFcw7Fe2ewzyezkgGNK",
  "key26": "5ZPVvamYPdkTfJqfUbM75pHnZWifBBQr8jpSqfVjTFfhZ55vyqQGBiJvfs1D7d8jbGEtUnf3Ux7i4wd8PAmMR3z8",
  "key27": "2N9fY983yBE5znxQ1cW2SQBzPnToW4FHKutZwXdvLeEzFqFxMMpphGEaV3FX6q5MB4rBNTkFW8tZBUM81GB3miAC",
  "key28": "9skUZXQBhHWa8RaURHNpwysSLLoXRnQCVoDHg6m2Hfx4RWpCJpycNyswDCMAA8FAdnAmmZpfFT5LyaqEMySZjcK",
  "key29": "uiZ8EARdUzovVnC5SQbsTATGVeLJCEApSvjSffgggirYrgKFCfxQPBZeDy9eGy9UB1918n57TdGRhLWSHcZxk6W"
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
