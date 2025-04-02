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
    "5apUdFPkP7fVdkKd7mwrGzSA8eNuSDsdWQNDKJ789hYU2oLmn3m7A1Nofh82ewgfrJVRmTtvPBesEpcS2t4YoQY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "baRVELTRgGeNUqwRJ7eQ4ddKGJKQPR6F1kLtpja6foL9NtQ1PUnrUWHKUed7zwRDfJgBiBSLEijRwZqhBerU2U2",
  "key1": "2WNbz4rpndaq5yYRy6yHFuPHUYezfaGrdS9pELeeACqFDJenmK7Er6QmXnNmzS58Up6GWkU9p15oRuvFUrVkm5b8",
  "key2": "4uUS8XqzJ2H44XDoPfRsXBqT2iFtpnPt1QsGqWJbFfibtEqkMJmWZzwuAqBxxKbcLkZ3Y3NcD137yEWg9emC8o3T",
  "key3": "5EYEi6jpCUUPrE4HgjyegmNvw9w5DsS14q4rsSvJapexMYog7jPq3HXipQ4QjWKiVQKMmaRWfvFdTwyvGh9hkrBW",
  "key4": "3oMNicyRyedUPjUaWdSqp1uQmTbxmuET1bG7gUDFWqnrm8pufA638EhTWN2bb2w7gx2FYDJHhok1ZQxUDjdNDdHU",
  "key5": "38zecpAkFBC6jMMBtEqdvjAJoSePFrBUAao3bCqnszbWTFHn8wRbz6vMPUrv4ogmHMnpMerN9gx8vcA6L9tef6eV",
  "key6": "3kQULhUWGt1XvRevhmhKqJHmugaqajV4XoohonHJKFDKoWJJP1Qyuwqihmt1TxygTM5FCRB8Ui1eK6RWZTUXpx55",
  "key7": "3m1Xz65v1ViuZcrJcJTTfFJ6pR6oZGAeRXx7asHekNoqAKhNGgnaHbFxPNC7a9Vybm2CCNqSSTzAcsRnQuAwKjLf",
  "key8": "3DYDFdCqomQNbb8J8XVYDqkdjoTMKKoGBMEnZAq5nmincyw9GiT5NMukK5CN5Rax25US1KTyddRQUYb3aQu9yAyu",
  "key9": "2o7Ng4ruZ5vUrg7WaRQFqnR44cCwzEXD7dCGe9t5UF26Aw9shG1DhERssfaTTAZMAqJXShDinBLwYbhzDARiuDKB",
  "key10": "4QvpiHkvQDVN7USDAdefaWMSX99sDQniyn3PJJRPk1f4NBnETSMhbWf1Ewb4TBqQAN4E5iTKCeELDAHCaerDJbSE",
  "key11": "5Lzw4veAxZvQG3QVjD9CBEocrf7zC6pHg4erYWLucYsHDRLYHszhX9fg98B5YkonACCB3rjuxnseveNVrrmMRH6V",
  "key12": "XfYNwPy4rH6YHD7mqSvh1nFvdpjX8DkBrJKUmVo7meFsgWZ7cDFunBsVbTQYYmxfs4eVLFBKddak3esNzZmKrDY",
  "key13": "5MikaKohrJafWi4yCbxctEVjPFtEmaFKpmiRdC9G1dxiznFFoz57uajsdPtZCueXqyYo3vL9MMmBJ4tkHvkPPDnQ",
  "key14": "3sU9cnjWhJS9oNZDpvbvYYn17aqwoLm3W5Cv4V2RPThUrZex6uUG6PtCJfn4f97191TkigoHyECgzYHWyQPLabkY",
  "key15": "63PHkjChpUxrZ86yFoJhmkKy3nSLabtXy5dbiYksiSbD3y6VUyZQbn8iHWu333CRZvi4fnBtqCGtDNg8nEJCa4KD",
  "key16": "2SrhboZBGHPgP62XHuV5vRJdebNBsbUKiv7crXEcgoQaEJ42GnZDKTyu7vgFANKTpB1a3afoFi5nHn1Rx9dzmhYd",
  "key17": "2zr5G5ugQsBkyJfNS8qHu9XZrrzvsCa2D5X3VbW9Dd2wybY39vbaK5gAuiVm8Wjs7XAU7LNzsHXfys3Agz4Ny4JR",
  "key18": "3pLgXumnN426ZAVkNmtsVkP5GWr23CJWn94BVH4uJSjeJq8uvfRdqUSkUQgLw9iiA3nANWe4NvrayW1N8UWiFUSf",
  "key19": "3cMiWo7wc1UEgKEtXkFaCgtfjEEF64ZFuH8rdQjSKUJY1soxPxEnSYiWJ2EYit8m37vcBNwTHds2gCAxhP35DLq8",
  "key20": "3d2C961JTyzzMRZ93uur6WWuoVEF8zYfKJ8WHpRsGjMjjPuDFSWkwYUC2iUxaEssqaA8tgs5JKfRMX3AXJrW9e8d",
  "key21": "2US3y1d615rWMjocn6zmGCCYmp9gpt3ccCicYp6wkwmbsQKPbdvye4dRuP3rpGVBQoshmmu523d4EMY4odwWeUfH",
  "key22": "3JbZG2JUvQXFc8QhpyxLvG19pU6fB6vssMXxygCpu9zP6YnjL9epkMWBLaFXxuSJERC8tLMX6r6x2ugSfSzCE5Uh",
  "key23": "5dMtuiQGjcqjY8TJ3MjkbRXNs5k1HErcu7bbqBQp95ScWPs76y7sKp1oW4NQXknzkwLiC9MXFb5JLsDXLm4iwvRR",
  "key24": "5qk29WtYnceUFQjNHqm3R93imSJmgKpFsyovZNUPqL6Qz16BiP1LHU7CNV5KDXCMWb7W7pKkxafwWzbk9NvgFiFP",
  "key25": "5FAgw9WmyXyGE7M3RQefcryHvtHYnwbnWc3ALZL7LRor1uFkEmLVoxhepyemWojL1ihxPwQ7Zq1rfPuyaa7eDz52",
  "key26": "2dvneLdwCwNKu5ajngpMFHbbAprnP8KfobjAVJetBrB4CmmLTEcw1bGSCET44b6pMHHuN7WaoMbkihRvpjeKH6mE",
  "key27": "4XYUB5UvmCZYvcBAM8dJ1YFw6AVNeFiwJCxZfivVAsXFG7U85VGEfP6xSTrYE481hjJD8UHejJLWKnMCBQfr8i5n",
  "key28": "4kjK83kKaBA9PqeH9ggUGtqUCb7BFvyoKmkTHSgoFeN2qJxvsh2wqfkNPJpx846gfJQ6zXMQkbhieCtgr9g72C8x"
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
