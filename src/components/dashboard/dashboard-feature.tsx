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
    "uH133upa62dWT1mFjbM7wELnUYWNrcgwRhfQjmhD69ygsCaCS6meEfSFJFXy5hSVkX9r3yJcRMdCHBgigR9zvQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wdonauWWDQMtDLu62QTxerGMSCdreHq7upn9jAnJiotnhfgSMdJxph5A2xsHfFQeMMzRtrzfoa2VkHaqDbj98G4",
  "key1": "2AqsCzm2LU3i7ksaABstDUgacbKRXBVKcoYXqx2UT28prZpG2QWchZthBr2w4AhvnKbesLcmoP3qgDB7N8s4XDfs",
  "key2": "H8oi64Hw7rgaWkzw15cV9B1PtNPn96e8w3qDuGkCEUUHHbta6Z5VbrTcCnPWUTpDSVesoAW1huKL7yQGp2vjNHi",
  "key3": "3yAaqzsmhGfhFsUQ8Vf4of5we8sjQ4xmeCsbSTLxce67XkWyFBiA1EGwMnvZtBSPoJpqocLHwaYFg2NAvP6NxNRR",
  "key4": "7FzqJ4ecRwTtavgVoub1ZN7sZEeDTRYELj5nQ1yiZqpoKAN7Y9HEQvsCkSLDLc9SbJmiDPGEBARgq4LBZySfLBo",
  "key5": "4JNEGx7CFAZWf3F1Qr3h48qtPDdUW1SWTpDhSBJpdwhEB2Uyg4yLBjjhZV4wKLGibjy7bVCuNFJgtGfWMC1Eafjo",
  "key6": "3AecHaPhJddbiozGq6jY8LEs6zgJGVXJZStTAoXsyvp9iUSRdkHExkxbqe3z14KvS5EQ76aYt2ZUbhna4RSpxKcY",
  "key7": "5UnAwVSu6Zz4ztbudUEwBmD3ykUYqGw3nDeCPWPhe9KtLiDDX6s4yVvwZF8FKY5cLwCfLLixkNYv89rhs62N2AP5",
  "key8": "5hPL1JDFcFxYD97WexD5RKhptr1oHMfYc8DFT17hhLCpzXNcQKMuPv9PjJFWPEJ1tEd73UouA7Ej9XGdcmfJB5Rh",
  "key9": "pPoot6KMVb71tu7fcM9EDtpv1Az8LBEZmBQMbyuSmtMaCnEotfoD6JpbxtSmoNs2nWxYpGxX6nCcoy1aS66G4rb",
  "key10": "3JwppMijKQhSxKyTvyix4HNfxabvVBP9odv1uPK7ZW6JgMGskobqE1fhc2g5BhXwK9vievwFFmKtW7zmUVhHtZwv",
  "key11": "4iGUqigfdDEmaHYMiM5RCx8ZzSAZwK6vJGCLDkXMx2gZZ2t295sig9QXPiVc43LupqMZ1g4QNi44NLo9WB7W9UMt",
  "key12": "3L6a3V9Y3EputtZUAxncYH6SvVxDGJG69FzkLHgw5NBwEXkNTGHBMrj43LtQkPEVKnRHRZ5cu9hsp3Gc6ycchKBu",
  "key13": "aw2HwPHvEEQJDbDHBBvDnW6uTePFxTx3iqnTqBEj75gLWRKDoFj6T3jQ587UcTsi1uF8aVQeY6k33S9BXXDpzUd",
  "key14": "JYHU2RH4XFyY7SbhRpEr6knHQ2n2WcWRahSYc1xPGTTT6akrkmFErQvjqz8j8HMTRPhp57X2VHS2GHyBCEZQdr5",
  "key15": "3teHAXKzqPo8YhdpFvV9dtxuE5gSWM4SqbVK7XzvoxqChFeEFKhS1oFUaJ54A7e4GA2rTcPLFm7kAyt5dJXTxnoQ",
  "key16": "5wFUj1oa8BEMVnagZWyV6B3eRBMTjxEx4uXFESPQwmK1UMti4U46Y1bjtqGGznnGZV5G3Jqk1rFsnPvzofce5ABz",
  "key17": "4eS9r9PQjxUuo1oa2BfQt2kFbbZbpjKRkt2PatkqJZv5yzpmvr6A1jJx2dMGQ1q37hCJwzpX9W5VNBu4ijL7FH9M",
  "key18": "5Vt4FKNj3mfm4eMeudFxuNR6aSFSydwLR6tMzz9k1Wfm8hrTqVRW6DbcjmbHBhxrWti5PonNUA4ZVuDHEuUi43Ju",
  "key19": "5ExE61Hn3c3MPKMHEas47DKWGiN56AsnG1q4UTqNn8ajCkUi7L8So2U6YNwXKmnXGeDWUKHKnmYDwVJF5iyS5fje",
  "key20": "5cacnVAm7HpnBMATTSVnE5EtXEFFwByAMLP1b4zFvTMy34J2WkCUog6AVRNgmyrM99kc8u3JDuR2vUz8PDd3VHx",
  "key21": "2o5gSQnS9Ki94DENogqRuRnT71oYGhN6raTjrsdsDazbRPGLVgmsRtCbXVgEfqi8e4v2Gs59G5VCdTJv7T94DAPD",
  "key22": "9Cnejmsm9PPSqKZcvFyiw5StQtt4q99iPhuy4bnYivk1BwXBG2MriC6Rn8YFPEtPjSpWBL5XfsVjT1KSZo6Ha4a",
  "key23": "49tkmJ5mBLfVnenNAvBx73VpBWiKtwLjvNDFkW4X4WNj6QCDJQaBz6kzvfi5RBCEiAHsRguQJHXvCi7q251QpQXT",
  "key24": "4pgKsaLcK7Hjr77nWuS486HJuYnoYfUFUhgnroSbJzZKHUJuVK1y4hvyTi6i6rsnTWH6pYY1DKfWsKxPtCmsPPxz",
  "key25": "39suN2gZ8AsoxqZATZHvFqRQTPXvHEdkJpoLUdX47MsKyvGkPi93jfXLyrpneFm8XJZP8vcrdN6uxdKp1uRrcWGT",
  "key26": "5khvrU8rXwQA6Fwca8ZM2iEUWd86kc8tgQSGRGDPK4evXFcD6pLjpQ4hFdPm1gsU4XWJonGdYDytMVhmvSU5DW6v",
  "key27": "2rm3rj8TfTt5YLgRreyNsePtnp5SuJGCFzNBQSpr1r4TYEYmnbABawo2uQM4oGf9SdiuGqJ4EyWnUxR62kHXBrcw",
  "key28": "3CT6EPpEvbpaw4V6sNFxJyDn8GokYuy6BB56LECUVa5QEnt8DjdirnT23KuXZB1BpMdxzaG1Q9vMgstAHBwVpRLN",
  "key29": "2jM2erXoJ4u88hsEC6xvFBzHrmJZZNCybwZTrbNG3FbwyxjL9j3JroP8fZgWjRgYobvquNSYWYqhis9aKw1ni8Gz",
  "key30": "5h2YE2JorixRpxvkgGBnAxU46Pz25KqS2aTWmUgtPRwKnZzwYjtBMtHVfa66khAyYvVU3MHLrXa8PXY1YBtagVzL",
  "key31": "3DY2vZ1vj98Y9TS8nkPFCZkGLJLGAAZ8rYoXfwvS7QJF9SoHUcuumsxV2M9Efnih216u12nL6Y525gfHqi8PoJxW"
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
