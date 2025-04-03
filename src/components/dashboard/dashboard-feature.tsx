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
    "f6As7f3TSkyEeXn6A4gE86UEcDEjKT8xNKotMCGkkdRriHExtjZh543j2pnG2YEwDpyYer8wxAB8m4E2Vqn5kzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k9YchF4txn2w2a4sNx3r3woXKtpcwPZWRWGPDY9W27cW8MfqbjPjLJXEj8sMcJWvyryw21LsR7gkioxCoXx6PXh",
  "key1": "5nVNbpodYzmuJTqYj6g7WgxyTWtAqwxqUhBTqZhnpYCJtidoypHjdrzCfA3DRV1iFuEnVPsLeiHpVkvcRbQNqsnP",
  "key2": "3vg9VJefiSP6H8o9z8y1MrE4bWPg7bKbhbAPhjRHdLBn71u3cB7MjDdtsCr9URfqiTCc6hNJopXSFgc9cQJiFDS3",
  "key3": "5bk6W6Ae2wDsUGEWqx6kVJdLPQeATKftVAB6YKp8ZYRcGVVu8saz11D87beEcq4YUdbsJJNrLWeX4em4Xbk8JLjS",
  "key4": "4ryEGyb3yvHNtnJtYfMgaHjiCt9zfRRnkuvxWfE1CTFFVrPjZn66vRmZkyrUVWgRQdXHzwvzLuUdX7D1B46jJgyy",
  "key5": "2A5iJmX5KHHDpkoHLHhDuChW6NEvqngLzsdpXusJpz1JqWd3u6gHcHkB8JxQusNhETDG77fjwNn63W5BALyjRCXH",
  "key6": "kTr8cE24EdU1eexXPL2yVmmqWFk9r4DrUf6pTrtV51DoCheJVYsE8KEKCtBT7JhuLV7jA2Rwi2Y35NKb9H9SZuc",
  "key7": "4iyXqBh35NNMkLhKWPQEbJufihzjpHabitELK3dzHFH29c9mniyQM8EWF6tuFxWscHbXaKaQqWdRDUci3uoma3SB",
  "key8": "3h6bo4AVYtGi9Ex65Cnv5XXnrBETnqqHX8zFeQtNzstoUQZDnGuyuEyv1FewEimmqKur9rKoS62Y4wodXr66K2pK",
  "key9": "5zp8VpwV8mAVKJmcuRP9h9pBvJYi2PU5CMHVfhXtDBykxDQyZQ5pLX42FqwAUZEWQheu4a7DuvPLBXmmK6GLmBaN",
  "key10": "EuSWXYpv2U11JMUc3LF4TzVQd8JgbojnruGNR1498i8urPdBnwA3wL76cWoYJ3MHFTbcjiBvqbUYbWb4PE2JfKA",
  "key11": "51Nd8xuS6K2oXJELCzkePF7DPrJicvpvxoqCcjkHTzsKuMiJ9JntVv2jMowCQQHDkmmijFwyfU6LYAtyBcgAsP2z",
  "key12": "5ub8a26JPUY69vos6bxcW1cQjGDp5wzr7RJCcHdFsu9qvxyod94YJZicbuXDZKTucMgX988CMPdPiBeHPJSkkc8K",
  "key13": "i11XmsFciiLS1LK1UqSqQ9UdMNyMuJYhphkKfYf8k6UUh3qcb5FK5bdJEqpsJ1CSY3hHdbNCeJMNnv8VMRd6v5a",
  "key14": "2wT8CYkGurkvYkDdscU9G3nuvhqEkmTm5c5zEg5tisTTExEGz6EsuNVenXAcCH6CVkettSmDbSbg7hVSsZxh95SE",
  "key15": "44H23D47xUP54eA5bSKX4AudwBQUmU1cL82gxb2DGGZHJvDK3fGr57pK3fMXvvug1U5QJ5VJDKGeTdpr1tZ4h9ty",
  "key16": "3idyoXNwZnnwbfqFWvjjdqHffeFM5jmxA73vam3bVfZMLJ6HFsMixasCiDwTmunrD7J2ufynwJJTzswyfTWhAQGa",
  "key17": "2VbM1kqudtQpo9QQF2DrqgPpQdXsnBDovE9E1S8jNQpZn9tMAHpsctiAS6FgVeavUmWVqZBRWPVEW34gY6zi6yaG",
  "key18": "4QxaC58xvCRkFtLQMvty8cm2MP4RHFNTHLFcYi7W2rzAUw6wtVxsw6MmQesfh784MBqPawQEXyEy8MNp2MRGeuiB",
  "key19": "39YAY41f5WkgRd2Bi4BMDaFHGuvKPYGqctG2eJQi4nbcuhf6ufGuA5k9oNv7Za63H6ofjGGCBHT9M1jZg5p6Za5f",
  "key20": "kdhHi5ZbHahne7H1FdyAnoQRjSbKemH2PZX1YCohDCiJtT5g4CdQ236mDuoS7XgpxqAt51DmnCF7n4W4ibDhLeb",
  "key21": "tbj42SPc2QiTshBaMd4AZ2eGB976VmGYtufhUNiRqZhrNypLsuhju12rGKmvE5Q8EKD1fWQEU8cfDz3e87Z43d8",
  "key22": "5TtEVTvgF5nK7zK3nPj5J2Rp7zUekNtqGnEi6gFQAVJ5EUxqEKoDA329v2u2cduHyjcGWrVJu99Ju4fSPAHXu7RH",
  "key23": "41oFoQdPNcSoutPgkC3T5haSWGqn77aaYkVw8QRKhNjvN5qvgv1w7NPoy79kXYi7sWSocWiYT8dkt8gt5ThdjzpN",
  "key24": "2TCrRrwvjYNzhLoLfZozc4cEAsd2HPcBbrz9n2DNBxo4qtymahAsnpvEsLSgNVD9sTrTnf9fvFZUsDXHwXa5zVDX",
  "key25": "8qHpoL7TSSbpRsD6sLCtbWAMERpvoHDYh9yV1YuNuZu5QZGTh1co3DD7Hmtqw8E5Cqq9GPoJzke11dnZ19TiWA7",
  "key26": "8hYEQtaPrn2x6US8d4S4qZYy1fU6irv6xktC4dLajyaiRHofwxPoUAinenUvfWEcDbi6a4DVxY9NRkRgHZWe1Jz",
  "key27": "2W99DFqgLqgkhCCcEZ2wNNmwuWiVnSBdcrR8Uf22rftuVjDQAs2fyXmjGCcongyu3wg24WFApDF7BQRnqYfw245Y",
  "key28": "4NXKxWHxQuD2vneqqCvy75kR8N97vsNwMVQ8b65jh2rKaJxF1js1AxL4pC1zuBp643KicqEAQmULKdSDngUc9TeP",
  "key29": "4xKsm1QoorZ6it8HEL4zZXrhRWsX8z5e7wdbKSJvT2yuCR3qNPQrfGmLJRqumLzt6G3rxY5ayYH4rAXWpooF45ED",
  "key30": "4qwQ1np6zQZchPV9e4MzqUCe5xewoDkMVHxa5XYWzP2pgGi923SJSJ9Ww1LRU8gWfKUvzrMLNTvaAL6zjjLeukxS",
  "key31": "3RNdeAY2szziJxD8RFGNpiUuFbcZ3z2jjDp3tdUubxg8M86rXtEpHiCziigvgW5vgsfL93X2zcEb9SN4SzdMSCi5",
  "key32": "mM4HYKMK9RTqw64vFqD56d3pMXrCqCru6tLpBsHwA8NagCaUjYBLfdi65DLicT3ewKbcssu6iMtrjTUAGQkAS7J",
  "key33": "mZm3k4zt8yRthZRqmkr8gvmxNdKoyXfTrdaJ1qP51gKkiMxLwXfs4aWc9HfrLasnGCuZTbmGm8QhKjRtA7ojAF6",
  "key34": "2NyGjSmHFZvamP38EkJMaFzJanuQrwjbDhvENGvpYoan7hBBsHoE2F6pNKY5uqcXVVeKnCSMQLHghCx53E9rdMR4"
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
