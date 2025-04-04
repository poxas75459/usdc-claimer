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
    "4tmn2FohdMQBmBn2NFEeVWYiCpfdDc55SzjpxTh9C6dSa5dAQryBTjb1Bg88VdXBYeaWkNqzNQMYKoMX2uY99pUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E5xREfFJynutiwo2kqwn55d2cc3ZM2qNxDUGuBeSYwgXmyfrWfLbesM7rPejKSmGFgQrrq5S2BdZheEYrEvBRSh",
  "key1": "3FDt3XipQcdhxkRP4d4EuJmxRJZQZ52BZsXUyY5fUG3PehKP6t4j6kbPaNu8ixcgNdYYdcWrCarYqxBGwiV4QbbG",
  "key2": "41cqeSvzFPJQV3rh43zPiWxQkFt3VfetrDAidaZ38pnQFqHDeh8CiF8HVAVGgLUh3FEAQDyuaXoGxYyrN5hZ4NMe",
  "key3": "4WRvcn6ct8jFqXkNqzpTHtcYQcmQC5NXe7wttQyp1UtnRUiVtnj6SgkYMhu6y2sr7Wc26Cr7jig8Rb4YfEgF4dys",
  "key4": "3SJ9XLzGpDG3AzhK7qAZXx5ythQdVG7THDXd24E5SQ4KhbUsMDt4eNW9czyrWfoBVBVj1Tx7cKUcBP9TG3u9EjTH",
  "key5": "5t96LZ5P6C6kdxbEuM5dcxeo283rKbBbfz9ySxUeKiJSXrCpD7zh2ecKzcdPXRDxHg6yPHNPBwVjJ4sFKU8nNiBm",
  "key6": "21sP1z41i467E2geAJyXUuHuyj9jcRvWPycLanDJMQGRL9iz56tqthCxGebi43ETCrmpmvUzn8XVa82eocuSyz6S",
  "key7": "kJydy5AzWAs35tfpjPSxbyB8ZzAttHMwYLw7M88UK4E2Q5qJaWNTAMSCvPdw8tt1HQnMxr5V54ANpmBVcmLZubJ",
  "key8": "NDKqTXtzXPvjfRFvLMtZaBNh1atqsthN6EQS22fgsXQHGQaKBzEiCBpmypoKqsr36xxA1YsJ6ohc1S2th2dBk6F",
  "key9": "2dTTKNfmvK2eUgiiph4YCwzPkoUN1kPrzRpieYdrFNip5jmfci3iZ1Yh2UZRBa8pBo8uD2TCC9j98uAmzxPqdKac",
  "key10": "5BfZWT7ZfQBuHXhtf2q35k9GdsdV8wMPFSW6n27174oJnp3Y8F3BBZpEZXJWUDYsLFcTwk5QVGDZnhWnnU7YSpkM",
  "key11": "26XwWkBnvTsDHiYhzHEgYiEWSA2ECoY8FwFS5PnjShm8SXwGwEgRmTrHVuASyWcmEAZP7m11ZsmtufnYsew67iLx",
  "key12": "APf4DSZoi5SD7PfZm4eUV9iXgP7RgLnLFE5Jnbo7iv2TBmgbssHGqqksYLDHNWwUVd1c4WVzk2QVhyhMBWza7Wg",
  "key13": "53XvZmeTe9xuF3mW39krLPaGaVn1CS9HMpNd9Mdcqe9jK3GYVAvqSR161NMsrzPTHykrXS15n7XQb7UbaHaVapKo",
  "key14": "KcXhqgfaETEJ9mjPry4UfnJuR7YvYzQoT2e3hyHVfcRFdGNy4tNDbyQnHU8J9VHskKHgGFYovF9Pr57F9GUK4Cp",
  "key15": "3TGoBcfSn5ZQDyS1stMjuoLfP71LWewva7we3RWEvof7A6Lg6UDqqTEDw96Np7qEFTCp7MWFyETPqLFuE6oibUNK",
  "key16": "2DJoXBMzuwniSsBoAd7ZFaoAzBqi9zro274rUzBhcbTA139wbckcWnpomyunocfbG683AFyEp91d6T7GLh4o8zx",
  "key17": "5mb1wjpDrQqXfLFcba4Yudrtg1D4LxNztyjnspJzkKEjvAhKSK3ahe8Y7WfYv7Mg7rK6wUmrFkDd9WQszEeH3roH",
  "key18": "48JxiHykxsRDioeHFpE4A856jpGFjkMabmBU4tYnQz14kxLKWyUkWf2RHiM4sdNVkfjMymVeSGSdBfubuT3L9qKd",
  "key19": "4c6b5PnoZzTzQHkxz5TskKp6gmWGERXYfJimXqxuTiFjV219A5cUQApDinNijeXwUBbLvaXpGoPyDBiw2L2fQEfH",
  "key20": "5gKGx7gn5egZ9PakKERo5jW2jYWauWfvQoJDoTDwG3tdbpVT5LxRsoDVH9Ljnfny4MuF4wd1X8ogqCGwUNNPL68R",
  "key21": "gD4M1DwsdQcYDzCCa61ZD4eaeaJNygQbRoGUAzHqti1aLQ96eeEdHpagPjW1SCbynZF2dRGTMRQ7sSYvLVea46T",
  "key22": "CQ3HpKrBsLgFGwyr9799LfyJSinwboZsBWfeD5cnqqFhgRwuGnZ5kScpb7tZobDyKNpxoKHyfKjnvyrK6pLviw1",
  "key23": "4Nw9vtSNLXqCbRs6KSeqGb6JhXcXWGWuTqVMdGtAJNjyCDdx4VTyWjLJXGGYgbARGcz2azujXmJE5Jkb2ejt5J3c",
  "key24": "3UBaUuxbFnNATReiqJxQ1NEigAdejDE71XnffZX9JdRuNZSjuJCiHNWi3mEd72JarXVqKAuJ9xSJZ3kz3jdKj3k9",
  "key25": "2Mgc5jNhRGpxA4B2o9ThBz22tbgK8wrND4KDaqDWiJNUVyXQv4vxifgJd1NCx9HGXSnhiUr3Q3Bn88q8Ste9RGYY",
  "key26": "325nyzgMjtYQJDcHw28CcroPSN9zuDgby543vRXnQSA9vLPVDvbAv4gayVSqb2zVqR6WE4hRv186T8MZLU94gwaS",
  "key27": "22cgRawFgdsfs9oeZWmywhUom69VaBkT6ueayj8i2NEpxJEoq3jpV8gQiJ6k22rX82YsuaQhw7wvm3yDp2LNMo3E",
  "key28": "kMDuaEYEFZvQLm8ybPjk6TnWRrWGfEQTLYHpKoAkLJ5ESLtWVKvj4Kh9pSn31VsgWBfmQjZKeomx7bmkPcPPkm8",
  "key29": "pxbLYCBRXSrvU2LhQG4yjnNBWLQt9WSuSs4LRqaH3oEYkKToBehfN58GCSyiekr14rdzVTgyiifLQWVigCJiDPs",
  "key30": "A5PPf6nE3bnjWhYpQaDcsGmLiJuULuEtdsiXiMYF4shLxw1iPJa2T2BZuFMopajyV4fcZRGbuubAhxNavFANPLu"
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
