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
    "Vz6T9cb2VVuY9oRADF3dnKrrxJ9p7C1vPbSM3YNfNiGqjHvDSykqzLeHiU7kx2XNVD1fqgf9Nu3QH56ER834i3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TYEAkstBWiLYLCragwrZ42mLZcNh653FKtrMyGkQTR8fYX3UEqchn2CqVYWdDZKqfUPYM6Cv6jHXCqNd6oowphq",
  "key1": "43cqwfSL6VsDvA37HkEFs4KQWVjWam5nfnbwnchV1bYr4fetqjLZhrLPoxfW9p7tfvV73221jsMu6SU4hEUjFjer",
  "key2": "RQU3on95qpWfWfmsoPWCCjPzcgqEkecJLdVRMjT7o6nDygR63Ko48DhMco5yktksaj4TqANvYMqPpBwqHJg7oXH",
  "key3": "2o9nUnas1hstYfyvTKXa9otEZfDFkg8pvFy95zsSb5SGiiVLF1AHgkpNp3fTNcPFkGnUJmy9yYYmkbZ3EEQFm3E5",
  "key4": "54We45huULBFZXh2936WFSTT85UdP4CYrRVf1bmArwBaZJZV7uZSqXYisnPdUNWeD5Mt2Fg8oQ2fGncHiZq3VSL1",
  "key5": "5EcVQpks2ph7dM2Mju1uwaCiLX6PP2aYWbarVtwyTUYcbSYC8vKGnwmZRYV9cwBMgiHne9vYb6xTc8KmiajYXHu5",
  "key6": "65TzPkTDSdgNK1iuYC2dgz9r6oJmAbggNabXuNiShPZwanA55Me3nc4Z66rzxLrzhCM1mQ7y44HbyHBPnbVwHCzT",
  "key7": "bWGr7DkpoHdtky1NbEsyaUK6DbzYFmVNczwH8jCBnq8RtHM6rQCcQdhBMwDRFCYuWnpqFZiMnQSiuHMn7vJ7HQw",
  "key8": "4thq6XNWCUg8QAyF4QRE95t8CxzoeQuE9EnHKJ1e69og3VNJiFPyxC8d25x1zRz51m9GxjYhB6tREta8JbsxKNt7",
  "key9": "27b7zsyYRNFggJcUkjiHAr5kdXjJLqftpbGdYvnKWaNdXWR911HssazWUbJT8AzMCN5SZNqhKres9gTxHSwc7bBf",
  "key10": "RWmVBMoA4a8T2ZGeCUVcJqLaGaufCnUVxfVJ58G1zQD7GzA95wQAfZcs14L8XfsuSPG1tZMWEsfvMi3zuXnmAoK",
  "key11": "ZybhbZVLo1PjzbPtgB2PjrefYUyuByQyKSve7qpwEMLQnivCcUDwaMkYomE6q45aGZFzpFkQPvPXxo1oBzZagvB",
  "key12": "2vBwQoqfYBP8evNa8ASBnyrd2jfJNpDoRknHk25cFzhgKbt2stW3HpuVX1pTYJeuGbigRzVoV5WJ66Y5wxip4vEx",
  "key13": "2A8vRHvfS7tv9wY51gmSkaQH2KDY1t1QK2Xf9YmSer48s8vGWgM3NTfYsLTsAbE4ELAHBJHNwaCKGyLVjeQvU8CS",
  "key14": "5rf2rKv1cQRYX7du6d7fWEUFj4hmZoVE91MEvUyUkhXJ7DSS1FQ22EJNstDrxEjEvkqEnm4QgySX32qeHZDunerh",
  "key15": "35rynZW49mZCf11sNvvmsbgKQ8kM7EgdZXhFmShs4hN2gKWpwcXAjyq5Jyv5DiK15t8o1ZdZuMUUVQirXHg7pivs",
  "key16": "5edKwMegNSpV1hvmC4yVQMKaLVyXB4NgGaCVrp9cSeinJ9S2sXoVKLN4a13UzoNwwwA7thqjksT7aFCf3tjmG6HJ",
  "key17": "oHpEf8BopsUUfMV51SVJP164ShP1hTYJfD6oCsxQfwuaEcusw9veAyRez1FstXv152yzmwK8sNubajz5zSTooCA",
  "key18": "48cyTsyfnmyxKbd5JgDFRDV2HyX514SqvFF8uTEnVeXgxJPpoWjZqo542fZc7tqwreGkBhrshUeJNgcqLfm5hDai",
  "key19": "c9YS7em2GEPH4FwvNLjgMXDrB7yuLRWtvpv3GgiKSRhvcjB57CBk1EZ5NVsky5wMYq6Z2PEgzvViz7SSSL9Drr7",
  "key20": "5wQN8y3t35x4FuLhLYkaVDgzqm5faWpyHShhM8aWiLvUy5hb7DgmBrfGphbJKakUCTmgyjDxHx4vVE4kSPhvWuba",
  "key21": "4g4L599aDuLHZvLDdVYCQaPfQizb5V1wSaSsvLjqQTD6xahR78U4Mqzp4ieQMNnydAoZkMSGi7HbpK2TpHsG5HgR",
  "key22": "276M5MY15eMaPt1Snis1Kgmcc3FpnWfe4cpoha46DPkszrKGvkq5CLVed92ruyJnV8wBzBLvaVE1dnQ1TcM8YbDC",
  "key23": "5ADHH5tbWstQKRasnXM6Q69rhrw6C3jV4taowixutxHt47Yfqeu1MMMtEiQbcC75eBmAu5NXC13vZMJ5jNRpXa9s",
  "key24": "4h1dWjdRXcrhbMLyRAd6Hkfx5YFiNSNS6oKJEgCMjXrPYytbmw1FNjxk2E28mJeJbmx4CcGZedR8zxbFE86aQ1pA",
  "key25": "TiRHJ3mr4gKQsRCxbZqvW3MMS84hMZxfxuxCjtvisQHTbPDsgsAmytAmoUiarhVJmpQWNPGNBe8rToqqybuncai",
  "key26": "3rPp8Jrqw6A1hz4pp5ep82wGUDn1awzNu6Vbg4U4KYYhkF4kZTxihBPDugLHBm7MyeacFpbBbjBoo9oe3CzhY4ha",
  "key27": "NgsU1aqZo6HKNhd2pBZSQAnQwZ1k5vRVnSVqzEDzw2e6rmgaDn2fG6yrrhwoUFGufrqg5hBkuEGaStTiK9pnB42",
  "key28": "9hC9EwUPgLvcyuMguNMkDWDBergLBhmBULKoeW5aDfenkLWtcMNkGTXPq2BREJtT649Wdj6yJ52TFnVPpdK58Vd",
  "key29": "2QD9rwwdMNHCGBStL8dDqTw2XW5ViSqskFumaymuCfBUbM82yi89z6TGBjiTidxKDNr3maCTyF7x4XyuSS1NxL5y",
  "key30": "HPEkPfCp4afqneZDwhkAXgKXT6dQZjE7CAN8gRcCc3NEztoigx34wznCCLivbcBsBNG5pPkihFd9p4LRphaoETE",
  "key31": "3XvpGnY68XSjjyTbXTTTTBDP5TdKsXDYq3cwSQSgTez4xNTRdywPn8ojwd7mbc4pnWNthcS6pBhrbHCQoA4jqT4",
  "key32": "5LkYdzgHJRhZBt6XMfvskmYaZCxfng29LWfsjYfHXDEPf7h1idLTfKkUTCx8pV5yVGy8wsgEVWbHxJbHCakS6AeE",
  "key33": "ZGcpk59ua4n32cJPbJ6sVWyGhzgsHVxX8yVV9wWudxMh881zgn4J66H21qTGYe72QzE1VXuycDpPhmFVZpG143b",
  "key34": "4FZ3yuFSFnutvaBT6W7dCq9RzRPNxyTVGEowTY7VWGNM5hXx8f7W4WEyhqQGS413fCHu2cu4tp6MaL1y6KRUCz3h",
  "key35": "3m5vnBrFLUxDf7FbCox39uBQZVKUxZp64KhgYMhhmq8Q1Y6zxJQbjrAST1JGVBTeSF1wTC7RTA96Lww3hcWCYfAU",
  "key36": "3L1azX6JzidvX7mzQY7vq7gmDduudNJYSh4jmdjdFiYr4Bx2M79SNMS8suLtDDgKgLAGpVuWLNQTZMqGvQeWS255",
  "key37": "35bkE7uucpRXpUhjGXTn1EtijPy1EQdUoM1H5izgL4rPHTAKhWaqPYHiW32136oMSCqiJ3AS9EbMFg4FcKzf5fw3"
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
