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
    "4Zs4kkJ3C3YWRSDnudBumzynDGw1bRop9bRf69tjqidTLeznS6EpYwKr4vkwJoWPwYAR6A91vRzU8AyWjyo3iPDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dj13UNSvBKy9ZKeY6hhHDsEiwUWeLupjQJ3vXZv5ZSNovt5EPaEBsPwPwPJvEVYqXUYr8yaeSQZaNhN5fMpEr1E",
  "key1": "sQADZnwfuMGUVMZtNyzC1Xr9E24R3d4DGEVyehw3FddEAH6rPrYwsqNGNwh7fePcU1p4mrfbfTqym3KzVCz145w",
  "key2": "53bFNzeRZ6GGjLbkJHNDgiRG3M12P2NELYoJk7Sp2MCX6s4aaw9a6N14jhinEZPgACRGpNGdSjxQp1Gg4vuHNxup",
  "key3": "VFUB3Z6ZDKoj4KKawXwCZ8a2NbomnknfidXsVhsaagyEwpJ599tLR95dnnxKcQMyUmUpBAuMy8zahdbJp6XkB5M",
  "key4": "3raFH1dEdLdCKsvhwYoooxLzDFbwTq5TjPCWFZuaV7gXbH8PNozi9Nx6biXS1d2dp3z3KAKrWTeEvTdXnRnELUDw",
  "key5": "2S5ZKXAHwDsMDaUS18h8ei2d721BZENRb5HhEF3prnv7d9592TnoFqt3MvcEhNBsohPL9xQXB9DKnHTTbCqmp5VA",
  "key6": "4Sdnjs42tJfWbtBdSfnEVUFw2s1z9CX9fQBXKXkUkj8mgZqjKKnmnYbBfNpuQy9CWwjkZc15YkV62D2yKcRz9sgj",
  "key7": "53FBYr7b3zFhpExdBqtKWhJXUZ22gTbzhQ5E4WMcz1TdWMCqosuFzNpQKJedRoD1rsvaSmigG9ErvNf55ZgVkmGh",
  "key8": "arhBeY52THJz8w8Hs5gnrqdnM26wv8VaMQbNrJGYbZkmGpF9ykvxHqzkUKB5KRmDBCqJj2b9hf7DHMiipXhkEZj",
  "key9": "26grfa3QveBdXRAUpKWwPB2WCri6dKYzB9EnkSx5deCAyHWUDN9GuQykDAMMFkceJUEMR3mbby4Ziac5adeEh6nx",
  "key10": "Nq3hw69jiHC5kb8zvMDLSVMTrcE52iZ79iaMBBxig5EvSbut4Q73t6aJLtJmHL6Aoc1z1ma5FtuDLePCZd8gkV6",
  "key11": "4yyYWMWidk6DdNcNLK3uHSrbsREUW9Pk7NVtixyfqmpJEcg7auww7st8NTxpjNGNKKEEh8PMcTTqBFKFm7Wsr7Jt",
  "key12": "4D2ss22jZCyLcg6TGAoMJtKzUCDqwusm7wUgDUQd69b6SpbiKTzJ6Ay5AomwqSG8GiSyv3xd9GvBF9rucPWRHHJG",
  "key13": "KkPGAxF8tefj2tLR2ibSKgc4iDyq6upm7KzVb6Svfju5j7ifQee31eqAz2gFADchx1hY27SwoMJak52DykWUNNC",
  "key14": "4x7cycBvbrhgiuNUm2gVpoNUpXrhQUfGNftEM1MqR76daLiMb2FP6ZRHYZVESnxyrW9y8Y2bCs5mFCAUfVjbN88e",
  "key15": "3oYPR7RcFAmHwp5KTxkQuFs2LS2LVTi4aFLWJSh2PbNfrWFtRMKNfDJqrn1G1YhvMdW1tM7ZscSxJFXDs7LpTrvR",
  "key16": "2epDbUXUCBZ7DvA7HyyLnZDAKQgJJwdGJaL6563fRDPtnSuticHQZZozeXjMNWF7RK8JqLSvjr2WMnB2MKF8dXaU",
  "key17": "61UokUbha1c9LZ9uk2NRte9Uhdt4jCkJTYipDVnyx2tXBP3qETTpY1qzcPjRnUSKU4DJTsv6hDZCV6zG2v4y93Dv",
  "key18": "2ApsVCVTB84mwSCdum5BFKYgG9cD71rX5knpkGssZiRZeNAU7aacP7F8czSJA2e5QXDVF2p3BSaZENYi9y9PPZGk",
  "key19": "4XwWz8GZrhsMZaT9A6MY7uSEUZ6x7U4qAYMkRBSyjnakR1LyQb5gEYfwf4nciF44GDXPnKGVjzR6SMFHuSmehZ3Y",
  "key20": "DeazY1rDZnc2sHwbwBCxTMpWJqcBtPyfR7KxcbxKneKJZP2zEZQhte6NqhsZjdFTRKZ6CeJxQ5aQp7gyR3NZEZD",
  "key21": "34daBkG2QvhqwcmAopTkCQCqVRhoa1AD1qYfdJshArUSdUfNJzizTwNvkNkZjFA7Hhk6AE99PdHLmqqHTRfpNHR2",
  "key22": "31rDLvZnCGMukuGHSc1xHhaXp6hHMh98BUrkRfmJHA9bveehgXyFqQ1Vg3uAcmWVzUD7aDXAfun4qcMQhhxDvCDr",
  "key23": "Xn4aLK762gPQfBHeGHfYLHdMcF5SCG6uLUbUy4ZrnJFshpYFUeQLQaKdS4hxK4hR8V1gBRAxxfxxcT9qKMRFxTP",
  "key24": "2YhAuE33z3nu9wrvSHcMLYANs3yXYxopSF6H1paYaYfVFWVgnhuAFS7zkSu4wNEdGc8u8VmbDgkCZb2jm7kKpqpr",
  "key25": "5Dhn9YPYGKyEWCvBmeBb33qbEEu3uU59xmPkjuCei2oAwVLTr4cuR8NXErfTqEuzpbMb2BosErG99xBPMYy2o1Hn",
  "key26": "5pjhstZVC8pfnXCHN3qJSYtUUcoMzFwoG2zZTn3TevmyxxJYQkumm6PrYfeh1UHB4wGNbWHF53S225SLF1WovTLH",
  "key27": "5uAw3FJaJNmzDUJqiY8KGsBB4NvaPtMNu84ZA9LZ89NzpBbGNLxR61vobi3pJRFc8Qi4PtXnFTH9XsEiBk5m1oUo",
  "key28": "4gcpudUmjniQjcZc9tqCBRHfBViTxLM14M57RS2sxqaZ9sxCLAwkf6qiBK8fYMij1QUAPHYLWPJPZ7k7qdqc5E34",
  "key29": "2zNSPmzuXr7tXUT7yKBMuWDM29H4TU4eNjA4aoHjK7VeQarUDCtAHtM69vivFVTMD4rJXLMZVeGG6TmGe8JHiw9",
  "key30": "22qwDRgY84WhTRr8rBFCVeiQhFTofF5yLTzXmexBxhM96gwHj9hhyMSdxEN9jGPS54AXmUnr5fpscT4sF2FPXXh7"
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
