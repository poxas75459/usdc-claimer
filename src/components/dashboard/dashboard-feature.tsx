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
    "4JNxyzYpGPqrBofpKYQsD8FF4fyFGNCuAXnw4CKGi5axL47jZqVmtGMQ1YJ3qh5TVK8VfgUTTMT2TKSBJu4qbNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ww8t8Sz5cdpR3AJMj7TWwkquyohmaNQUkzToJexd47Bo9fieK7ojy9heXvsmKaMGoKGdEHNKyxuUCbfQZrw1bub",
  "key1": "5x8cnCNhFrA72RCJtgngN9j3ZUD9yz1Bku1u8GmH3KU1xPhSDXQBNG59ZU32eANqW8CPcySKtARf61oaFEyndPi7",
  "key2": "5YRyC7xJUoMFbYWvJiRogbULdhyzBrHyLMH9XfuAvEYrmejjSsZ5826eDs7dSqbzySK2u3EDdHVvTSenkm5UVWi2",
  "key3": "rxuP6EDvXbNwWfPuFBVkX5XEy3jtTFAkx5sR3MiKGNDWr1v8cEHWqCWWFtKwpXrwwkR8hjr7kVVQqFQ8Dj8WsQp",
  "key4": "64MJEDa31m2ZW8h8hzSKv6GQBDoMFSUUhGVgNxVFhEcYYxmqckS59UtXbVipAGQeZreNBFKrURTyAaYmDgAHkKQJ",
  "key5": "43JxsggoN98nPy63N9gTR1YURNWNfCzATHd7pJrBMhcrj3MNmagiKE6Er7bZ1ZunoG1PAZEDCky9Lst6jK7PtVkb",
  "key6": "46TBefsNXY9ex6MKHbHha6yo3e8f6Jvy3J5Yj2h6n767jAYweBRFtq7y8shXso3m2FpH3BcV2EewgH3sU4dyQWaz",
  "key7": "5KqCGwTvWedL2HW1Bg7XEHBeD3E84pnH84xj7dS1EgGnJ9Zd6AYhwK5tpYceXan4K5RifmzUHTWJ5hokk8mTquWp",
  "key8": "5naTpLx6VS3AcmdWbF5hhKLdet1hFaw6EF9xuZDmkhULR4M3cNk9eWaWFeJiHzAswMCjcfMBn74ZRqrC2UbbyUFv",
  "key9": "3tdC5DSqdhn3xgcmY4LewaEUmATruGQPMfAgzUQgTbGQMKtfv7CizJxGWNo66uA3asMCAsw9gEKh8Snc1WjYkQQ6",
  "key10": "Ngb7AMPv1bXREMaEBQCbEPyWwFHWmA3yA4oXnb1YpFejP4YRkhHnMNNqdL1eYzbNacaq3kKbRrEteypsYvzVFWX",
  "key11": "28oeGegGU9e9G4gf8NupuUsTbCYUoejeTCyqNqdWfqoyktwa3EhLYBxmvuAkCBGK3mQN3sibbzYeY4pNyYDW2h2Q",
  "key12": "2XqwfZceoiuyYiZvi4TFuyxvkJyM7iH2v6C3VaTQvrJ7gUTa3eqf5s19VE1J3jmgo8vx8q3zoEpxJRZb6ts64AH2",
  "key13": "62g6egAzJ6fZ2MSJL6ArJLpqoLQquoN7McJRUuDnH4BGthSjFz49ubeJJ2pWWEUvWaaeVCWsPmjMhK1oKsSwMozP",
  "key14": "4kLjvQKcDij5ecKQwiJq3MggoZyGLGVE1yP1AfS8vSnz1GQKtEEkfMcgEdYYmgbuJR8iK5s1VKQc6oFo4SFZMa4t",
  "key15": "4YoqCp2RPrf9JUgguNqf2T4zUjZUBs48mWKydvmnuoRjBDe8h5q4rukYYGkvg6ShUuqG7BzhSZQSEYKiuhrX1Fhq",
  "key16": "3mwBqwyo9M3uNaRQcPFYBuUDn649DgKLTCZXY37e3n2JFSB85UQiLGKmTdrmew7YrD8QRG3QG1MQkfnXpVaWzRfx",
  "key17": "367Q3w2fS4YwhdC2k2DsQA86qSJwzFNAkUC4XoUWG1z4wWCS1UaaG7FQuXxAWF1HkqRSW1ptoemiN2UPNefMBZce",
  "key18": "4dW1djXWnvp6RcZF7DWsKNA7ctMNz37YiNQjF5M8mJnhSSyNdXqAMAUwZfWmmyQbDBUbMeYGSYiivCSxmi9dUhjn",
  "key19": "DS1fhPJdhAehtPKPy1KXmi8McooKzmwH9gJQvXspqcaDF3dz3cr4F51mWYEsLsnFUEchyiP8vcS1dUhzCJhzUni",
  "key20": "3eV7iqgEoMm56RNWtanwBLciCYqV9aADwWX2cBnW2NN6TVjQBu86V3VZfMHJ3TpLq7ykorUdsFmSVA1aEzLs5fYp",
  "key21": "54UD6jKuLkPj39ubmoenMLbpNNYsznzLf6wqDG2XnjpUTV8hLqh5DvCVH7pExcyhReSZqgXGpanzBPRpShBVqqbh",
  "key22": "2J1KYyF48fMcue4YtuBnDpQZSXPbHuuGW3M8Et81tXdq6KRweA65szknmbc2QygerzFKqR2EYmC7TiytJMmfDnFS",
  "key23": "4krzdgaxGqmAXyy5Dd4KfxBp49D8isxkC9oKewRQGE4aEdMn2xz2knqesEDtFjooFgsSAzTF3p4RSCLQLpjD6PKY",
  "key24": "59fg45sRjvLk45f26c3jHBGpXZ1Kw3Jzrmd7NhUwe4a6V2dfMJVTpoNAuXjnczwG4fqG7Wy3r2G3YcLkfuTtBEn7",
  "key25": "2SY3ue8RRoSbBfLXdMmoo8vEb7k4UyaC29EjMA4vvpSxGb4ZZrKgQrxxbszgdxJKYhy42HJkMAejkirsp5Kopedr",
  "key26": "2KxbTbURuG384rVcLho6rcyVBmwa9YyHUyskt33cMh7Gxv9GpVnzM3PmcRCQ9z8tgCsRHEaMFWEU3UQ8YN3tuKGa",
  "key27": "5FrRhp7YhL8GCJJxyEks8fo8Y7gaYU6QcANgEKuAqYjR7PLFc78WQBbNPLgXenv8obr46avgeTimQtkxdgxfaJgZ",
  "key28": "3gSnKFiyyV44UdHJNjGguXxsNbARnyVENfYdRg1djfKGLcMn5k9qqYuE3SA9xhigimSUEV4x1KDQ73mLrnMY4ZXw",
  "key29": "4DSfN3kpeZoXMJvmpS9V9FQ5MhNfT57hGGBYot7gJxwFRe7MLnf7n5aTPq1SqdpXNnei7vA4wKZN4wQ4kqGVcFV9"
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
