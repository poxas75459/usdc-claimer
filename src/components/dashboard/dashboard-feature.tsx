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
    "572uUdX4CPHhy9cwLSjahvHvt2UQdMVJsbiHfAk4gAkpS724hQaeLaUAVVSAzzeFoKse5ZMAvjqZDxvqRLkD35WE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cfBsMeBzfiUFqCRRZQqe379VQWyPy94u9FvjK87wsuCX76Q2wxBem7uPzscpKEgGKyPT523mcbKvW8xVurmboHy",
  "key1": "45UbUUwYkSfeh4AF9NixhCp8M2YUDfewma3VZBAEHigfYnskzi2wM7UKvB7zqqwxYYWCHobmaUezgb5noTcLfxba",
  "key2": "38WdBQz42ttQoXkzKpMs2pf6ReRnVfJUTpMcnBSE1sQYVXBLGofaR68TJY9VH7uytWqYJwuFyiz46C912rcyrgHv",
  "key3": "3EbGGoWCv9kMxgDYWeKgigRo7hELu5vG9jifzsGQoeaCirnrK4QwkNqxd7DVRDEdHm6M9iu6Ki4UhD27nZmG8uju",
  "key4": "29tyZiidqPYiaas6dxEtodtdxsrxRoUeNpxAerC8EuPSWiKxEVzbZVo8S76pssoTsL4jwAduCnj8wgKChrSe1vJm",
  "key5": "FkbEQsdv83k9nZud3CnkXZKfatj9ZCJaAMWGfQg3ogVqY3Ab4KAo1mUUFr3tvzScYJRF3QW49CJpQrYsjPfkR8i",
  "key6": "5eL12A722HvFdsDjHnB2KMStTVeTdRgrU4rSjcQxDf3NqnGYu7hxxRbiwh48GPNjQ7FEQvPiuUqARtmWfntnJxzy",
  "key7": "MiXEDCqC27sQyTMxGUxLvzYM8m5Zt932Y7Cuf5b8vSVgNTWwC59f5G9Ybber7pGB6TYPGZMghH17d6Da2HHxjLZ",
  "key8": "5dMikfwELJNKmdjHXNahm2c7pHbZn4RaCiW1N1uBTrzcu7bU37obHS2Hfb4cRTMUzxgdg37yPvG1itpVeetDD8z1",
  "key9": "4A5epTQm1iXJjzkPULHsxggakgK3XpnoNcmmxK1iHYq86B9cgU3idK9anvxwVKarwHxnkoS1eKbz8t2GfcZQsULm",
  "key10": "zHUPWa2bb35GugXeAcomQuv7CFtw5vmnZMwZRJbQ8So6ez7pUont9C9UrXrE4TDVwA2ewK1KUEUubAZHuyYuZRE",
  "key11": "HEur8ychA2JexJsE6cf89KN51zrnRGWjHrqjq3N85yvEoppqvkwFNW2NGPAjaFn7NuLofqXu7oJW7JPnQuc7rLV",
  "key12": "39NYCVyVcKsuCzcRfhQjNgVNLvmBXMjhwhGqBrZhRjXeScNMAQUAt15vFYroeSZ5hhbA7wP8MqYQ1ktwettYTdHz",
  "key13": "2QUxdhTkXPHFUMYd6F5SvZqW6BvLWZDdB6kQCjdSqLkNAmENLcPDXnRasX6DTKNNRqgd1P9cHdYpPVZLWNJMJkio",
  "key14": "3gd7zn11E2htJxdqs1Q87UFsPgkQevVVHtif2WBKZcdJatxsA48jKrShPP5ZYu6C3YioJYzQ4zgMNQUhwBd3ueQH",
  "key15": "3DxD2TWppFgd5xBhimPDEMudfLP8mCc9AxNsTFhbLV5DLUSRVNFoM7m1PZet5Y2bZTpzqgtanR23TqN2aGqfGhEB",
  "key16": "4Z4nNDsV4qq4A8i8rCwWWne3yZjYMpFdT8SY986s1C5qAcDUyq3bkSaitSCozZhoMjdxHe1CRvyn6N5Z2gERCwR",
  "key17": "3AV316o5V2PJJGR7qKpRB19Vj4f8iYSQPcn6FREtQx3vCDYrwBVLZiPzu9pbrykLDXrYpHYNMFw8dF7diyaqZNUq",
  "key18": "45sz1MZSahp9RYE49o6pTvkhHxmL3B7JsWUPWcceRjrdSLMpNpHeYxnkuyoZSjzfCCVWqAQ8dd3Z2pCeZ4CKtnaY",
  "key19": "tMNrYKMvhCoTCvw5XsSfL899Y5EEuHVxvmsZXxQQFzaqEhcHYWJuPKde32GgN3m5TzRRMAPuRAZMbth1rFEeUAq",
  "key20": "2FLfq4L17jyF426kAa2HNADgHyYSfbnvn16uPjgjBckYMjM9qvtTQBmXQngLRGiEwhRnfTqxrS8f4f3V2LPyfvxC",
  "key21": "4xrV2mrACtVS7ttJ3mdCNCB6a1uCyXP3TpxbKhdSADyjLQxgKhjTnER3bBzFWwsjG65NpAHhKEWiAkRT43ufwphY",
  "key22": "3A2eNGT4qGVFx9uh8NB5j29J5bZdDA4xZ1QtLFKV7SMoRQvRiywJHDPNQ5RQ2v8N8Mwh8LcBQSjvAr3XYLeZUiri",
  "key23": "4V129Vs6neVJQoGrUQEKMhKKBgKiEhEBy3vqJni2dAN9fEiZ16M25PwY9Bat5k65icWrrTUx2MGv7mMbkAEiNEUw",
  "key24": "4zGjqwF7BAju59Dbu6waVqo7wpw6YV9kkyBZtKL7EgSZMPugGXg6hezyc7PbRF4etLvKmCcrzoE4nrwNoEkEotEx",
  "key25": "2GYri7aboLYsDT4kCWeAqQCfywKjJ3GdDKcA4beRhpPXc3Ra3URNLuqr5xTBuW4jQJaFQ5abdH79rUripmtpiWGK",
  "key26": "e8mFt1i2C7JjcEyzamZRzSLS1S2E7H65jsw6WGSFcaABhJaC3ETbZV7A9CFDY4t4Q2TmzF79kcuqbiKL2gG9RBo",
  "key27": "UKeKR8Fg5GXxf6rASXcB1KT4GuvCTSmcGq1r29zhhdUSnqNXubcHLLVL4P7TT5hSsqdPJvfyxoiwBtenNFAkaVZ",
  "key28": "iB6QEP73vDJ4ugK2TCeGTx4QBokqzjPVanXDGhN5Rawg6i3hm93GWPJcAh4S9srsU7DBoNTDjusCoVeXXfoso7R",
  "key29": "2BjaTzc3FTNPiXJmxAmTw7yu5rvKv2tC8e1QdNxNqkmet29v8r5qFBFZkH48LaTXdSFn5Av6xgu6pxd4bZ2Y87sP",
  "key30": "47t2rCrYb8ieFwnYtdwLiMQdXM8FeHt48Hwew8mXCZ1byLuV8oGcMoEXRYRoxAuyfEKPBNuTgZb7AN2k34AHodUY",
  "key31": "cjZJz68qCEyjfpXJZQxBASNwSUcbUdAzB1v8i3qduh1pPrnAc5geuvyFYLdNZEYQg7npbv6UyMhWDhXn67Mn2Ww",
  "key32": "3DZvXzkDwjMPhQWy7ouY6rFFeWqVuXF1s8pnopmX9E1nTzQZpT54rkfmwsCFRvxbF7gMGrNrxT4WCCNuCBLXqEDD",
  "key33": "5b1WimotJUvtGpkKMpeUpcJGpUnEpyoYhL7aGXChHZBvhA1aYTZyUJ1NqRoCAaT4ZvAQaYhKAtXvVxiE1f7t1uXV",
  "key34": "ZQuvMteiK4NWGPLp3ikoUtpxVhi93FYcBMnHDSuzmiiNaE8UN9FBqcih313xtAvzsGQG3qeyjvNLsPaXiapLwLU",
  "key35": "2p9uiMNigi8T7fKLdSMh8GmqVKuxeggeaKhW9NN9mdwHATXYykuPZe2ur6cqu9jB4rJvy6jwa7txtAZa94miN8yD",
  "key36": "2a63pjRN9MWwh5rpRjmjVT9Ciuyn2GD61kbSjokXfk1NnmriyJdgSg9S29Kw2E4wRfi1J2iq2gCx8gkkrG2sFcdt"
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
