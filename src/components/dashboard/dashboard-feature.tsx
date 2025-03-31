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
    "YSuXjJwAgun5zAAuMLHgSFdp2T2Pa7e8LBeQvQvq6jwxsEjfhGuUNzx15VFLd79P8SMQqxrFaqQs5tmvZSefgnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FgRq1kj6tNj75XszEQBm4K98H9hekygQe8DJdX91fE33zqwERBv2cgn7eJ6Z9qiTgJbxRsL7wz7PqfxakyZsQrm",
  "key1": "63R7yG3PNNyp967GgngXwJa2nLarQUyvVqDmQYztYXYJ5BimbfmtyFh3TVND97TodV9SXCUY7q8iSPKNeprvbLST",
  "key2": "4hQPt9v9WRJmegfaogiWHn8n9vL7JgwmhQ8g8Ch6CoPFzz1knaJPNKs5D5c54vByCkyczQuVAcMiprdSDTihJkk3",
  "key3": "3eGUYveghWMeWCAJRPPzfVCpAEGokGuagWiN9boMWUqgow7JYbwDrZcvfJrRzCSZQE5ykhScXBcgdvFdvLUdUt4f",
  "key4": "4WM6brHJmCDy3f3heDwq6Z8vYQrPCNjJiy2Yut4pnDqhCA5rsMASP8fHc3Y6LskzVdH6AC46VYdK3YyxnwD39HkL",
  "key5": "3CnMrrS4hN7TkB1qFt5XXpVGWBsV8qBvtkkJ77ZJCejaB8UQdjrF5HJWNrAWLeMgpVwpvTDdUBG6JHhoh2yVkNh7",
  "key6": "4RxTMyMvspYA5xRagrxuAinJ6m2gWkh3ZW1e27PT8vMwfbyBQnfniYhwwVH5u76JwTH7uwwYCCoBJiok1ZfFrkvw",
  "key7": "4RR5T7LKJaqiihbqEKx3bt93CgMm6Amo7eGaG9VUnW2Kep969qa1hYv2EtyARFi64mkorkbFsVMysuk9BedDq7Jf",
  "key8": "2umMLgPryWsbiABV1pMd2b9S4Z6qpsDT3qYowHeC6T1LunKYtGWEWjCwefBtdu8A8nYTk4dVXdUiheuFNSHnTrDA",
  "key9": "3qJk36hA5sBsEwnfewsG7CZpP56VwZoZMcVKKKMYvY5UKzNgCfZExVfhYb5hKsv1aHaWJL3ZZXuUs2kKrKCRk7vR",
  "key10": "56gKcDSPU4s1A6WDYPd9tvxc8c94g9TNk9x262LmJ2BwHGwjNoJnsYAe1ARTd633ng2WVnhQGyanytj5DxAXsRvk",
  "key11": "5zxJz4YTHwbA7cuPz11pikm2xAWRse49wxSgF5yK5gDfjk43KNjJkx3qzzis3Poer3SojDxqXGC3S1FJ731J25q1",
  "key12": "2iFj8qhmYUKrNHWzJyQwzktMim9XoNBTXFmy47QfMEm5LAY4KVPE8CRoopUzXpGMTQHgD391NTt8s1zy37i8dMr8",
  "key13": "3UEtyLgAMQj7G1uuS6WVxywwX5ADUWGRhT92uUZ3S14QqpoL4iS3gS2QB7vgtGZ6aH9dX8V81cVAyjiG8Uy6JNaA",
  "key14": "AeorKsbgW9hfXFgcBzufabgfx2qMMoNx4F9dZmBZjTwBAztNq5ExZkRdbp7YumZSf1Rh29ZZerhBLw5gBtKyvvG",
  "key15": "2m7NbYBYm2mqCCycxYcpx9aNB4dur3axfPgriPnb3yyzJVEXxR64jytNmX7VwVKdiYBusF9SStQMMMhNbhW3HBdQ",
  "key16": "2SuFssejkEgquaAiZWdz1pm3mQ9EDxJuFhbMBQnjfHcYXavcaPj1bqzkdYtsWZ9UQNEG11hYCkkg9PqBWz2gQdja",
  "key17": "5Xj18R84ctGe9iTAURqmcPPpV1ZWS3y42WxZUFqpamJc12c3GNhJRDiTQfKwT95tMf8aEXuq43skF7PpUhTZSZK3",
  "key18": "2Smo2S4Mtb9ssvaiiMQP7npQ2BWXNt3sVtiiYoRagRbWmcmwy96VWc7jBLbcsxbJPwETUYBuLfCZ3tG6h1n7MByP",
  "key19": "3o4WUk1e1URBwbrGzpiDkPPcamNMMkrgvJdHWHTnCLdohcBB2HEKM99tVu7oeEtyaNQRCLyVi3dwrrW4UBLkb8m4",
  "key20": "3X8Ye8sRwKsL6SYhYDswwcmUXCxE9CcrruRzwsrw74nLEXHXcPpwr8hnBrSvr124vcfqq7pSipauKbX3RjCGu4Pf",
  "key21": "2BkfSfrYbniPzYQmC8s4hb4Q71sNanYrf1gFH5JbousdNmcNhNCB19BGj24wDNbpwb24S9TyzdVaq5fnMckFkiii",
  "key22": "5uNkT6GXamxQFBEr3yvpxvNpQAZooocuBRS8DydAzJYLDEd8CZdvBw6ro1vYNTcVtGBLByEDLWC7LYELQVwoAkCQ",
  "key23": "uTw7aM6DyUQz7SkmrQsaYm1G8vDi57y6HQEL57mZzTmB7kzNzQwd2oGf4x46ENRmmJRY6FXkyWPZqJW64WvQSu8",
  "key24": "3Lwessc12oTrFAJfcDSUMVS3NN8KXdW2gNN1tZScHS6MxLYKBapvWgc5c1yDT1QAZa6VAb9EkCM5b6qxEjqmo9hJ"
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
