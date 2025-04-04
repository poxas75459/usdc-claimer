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
    "338oV8TkXdHbjKuoxiBXJXUk6vngEfmFc8h2Two6peij9drPLA4pH2n4KS9Db2RTrZYAJ6BLjdkRfUQHtkEfWiNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bR2ziJfkcsxAkVnjSFFNkvkBZKKjCbi84Vrrs4ZSR4TgMkdcD2tvDpGYGgaxue16iQ1B8uFi6FPfzHLa5JoJ7KM",
  "key1": "2Ru9TxQe2GaLJ5qE8DA7bPnfcYVi5sCCRvW3tSaCcCVYNbgR31oWdKiQBpXqvsG8hMg3YWsmWXAweg42JrtH6dJ",
  "key2": "4Q4Jnm1PwH5BDoK2GoeGvLH6r5KjWRBBGQW2nvmgcZLWLDQu5omHw9goGGYMahb8qtnszSbaq74kJkvjUAhCqKxJ",
  "key3": "5GuDyZJyU11Yq88NmUtJsc2u6rDVyAXb6RZB41UyHARG2tL4BCBRbzK4vonuqK5cBeMhcLMpMFfcRYKHmCcd8qX5",
  "key4": "3anVaCwomX5Tm4LoVF3JpB13V78Lf1LqPPPcPqMBB7D7uggaa3aZ6KAZoVMPDnhoVzV9ehfPjneLcvieQJX3K9vn",
  "key5": "4zrPjesxdoJfFfUSaY2bBxcYd9E3Nvmk7SspDE5bx94zrJr5RJWShdUuWdJvHrg9LASukdpEAXn2dPS7gYr2xAuH",
  "key6": "2ELdwQAcr3zdcgasBWUaZLUj2qHZXYYv2kzBHbZdGnLjrRT4c6dcUunMrmrssc6e6njJbpc29C8L5Th5W9rGaC5Y",
  "key7": "5cCfaEdm7DEWTNcxWMz31ccPB6aUvzFBWB1CAiUy8AUPgr8x1C3t2yt6pzTZJKbBrjeUjuormxDNBnsGK81B8TvJ",
  "key8": "jo1ogxyNEo5Kaz8qh3d2PwzhMjuJQaNTFD8U71SoFLwC5xxDysCbTUxJyPX1E9RuDkRALj3fkgYYiJQ4fSdApxo",
  "key9": "5mCYgXnLVbadnym91rzWs3WQSMTNWYKzHpNvwgHy4Pp1GWqV9ZsArZCNWQpGVX5Hcu9Qvz2Q7T81Ww7ZV8kvXYUk",
  "key10": "2NyHbhFC4jxBBZvba75GgcQS6maYPYuiTRfHTqzLpWt1o63hEUKE7VEMNThD3twbzKxE98iqoz18bQThXvDHyh4F",
  "key11": "2nPRuGRZ7st4ANioNSz7PCPqk6fpQafcKNKz6wsTfXnRSTBYxEnrH8Jp8G4spxEJufWZxiAep3Hts4xaCfZq7QjY",
  "key12": "2hSoBi5rZxw3wmfkYYgAES1bLtw7QThGuAbdr9MHSMvtZixsFrkypCwTgQmRGZK5q3TQD8zQkg3yLtwW5F5wqjv5",
  "key13": "62jbtu8kct6fz98z9erLKvkGtxzeSvsHh9LvzxNDeK2jxoMPjwWYBwVKM9jtqXjJ7JpeUc9kYShxPeeFGfbBgJ9X",
  "key14": "5ohcxu2HzXA3LCENybyFa6mWxrexSH69zrC6fPQR61B92J1orM8BLwkx9wgi7142ULWSuQs5YXKkG6Pj4tt1MZtk",
  "key15": "2W953wvX4ry2FFwDwE8tfoMR4DqZQmecYSgvj5323pMpTgpQDD3DVaQnsDhVYxk5N3hseHnD3Hpe5ziLrNg8NpDn",
  "key16": "hDkBwFCD7Q9Cs7SiXJZyABraEwUzo1rLWPBZv8KxL4enXVaBSJw5MGKwAoSHndE9PGqPKzHGtWpok3EcGe2sgLV",
  "key17": "58K1uPMCsWggFc6fbKcyhMMw6AP5RqYHSaCUbysSUzzbUFQE538cWtReT9Q6axcDohKXTjT6zWB1EFXFpsqM8Muo",
  "key18": "5q2RGWbwFvdbLHoEipUX21EtVKZtve8w8uBwvKETnERXL5dDampHyWwmyFgZnvjG8fuxDqgqKAM87AXAHRyDjFCU",
  "key19": "5H3kJneGYXvdMqPQCehsYNmEnQD9oX9T7U9HWpuvftWFBmAwbUKX1AwbBJwNeANn2qXXTGNpAUgXRvZAhZD2R4aK",
  "key20": "28Y6UAXDHrh1TVhTdv8jBRK4PYBNU3uyPdDssWBtuhvpo3TD32myBoC8a1cQhtmMLSSkG4NL6Tvjec4viEYKUSgs",
  "key21": "2KajaFhjqcwTN8ctgc1WJLayvaYGWKFCEXfipDJtEjgefY2Ltouy5daSEjnELsxXSYykQQke5YHKvCcXNdDVhA7u",
  "key22": "26R9WgT5aeLfJ9Rw9gLdBxpyxWnXNU5udcbHPQWVVaHdW9xQH51EnUtH4DTLy4xiausnMKxRQSi62EfVgJpeqz1U",
  "key23": "4nRULWJoofBLPLzVM2MhtwxwK1BRGZ9RgxqVYbAV8uqPvvfcibet1swNPX2mRwYDzoU6AAWxmCbxPd32z3TtTUC",
  "key24": "5FRJfN1h12nSJTgBkihWFf88v2TvYDueNJ9my49D2d1ZtuJn2KzwXi3ZNB1HPd6pd4N8ecpHwNBWJNnr7kigLZk1",
  "key25": "2hKDoex5oC1SrY9Env6YWz4jvMNjjxGmktgxqfFg4dAHAdR8sckfaWontYAp79UD5qPVnbxJoRqMNs5M2AnGmvjG",
  "key26": "3octZt4HG3hzjPXLkMeJj8MXDwGHoY3yf96SJweGCMo1uhLVyBB9ZRUQQMnrcs8QXjgwr9MyPHCEdgZWKK2xCEUR",
  "key27": "3bc4VRwRp4HKKY5tgGw9vZQg4SCrPcKHTjBPSdjX2rhNSDWCpWeGhniaryLsL8VVpJZEnVbwGoW7HRnAt1J1UW6u",
  "key28": "3ov1C1BNtsx2tXqTv89MbzBWe6Tt9H59yX2kVa1Hd1PGXiQ38qjnHtbv486KviPnZqMBWaf62KUNLrLD43bjtmaF",
  "key29": "KnLnxF9gtC9tQsDXZwgfT2zjkMVQmwXwnYrhdVwhbN9YFkeFcUZ7KkBjM3iZDJN7Z8k5mBFaxdQcuBhtqio5qDy",
  "key30": "HMvoX31bYNxCqxqhE31HTnBQNUJTQmyQNwKnv6tTKU5pNPuvCHQRGPCKM5HHteUGetQLCi7f8N35dMHd7kqwhGK"
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
