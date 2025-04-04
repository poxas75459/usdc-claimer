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
    "8fBM5rkENHoLYL2Vj1rz2UW8noqLuLDbk3pmxfcFizrkt9bcSrov4PbkMTWxiyRUYQg4yTUdnk8XUXG6xLkjb6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51JvM9RLKt8H7WgAeSDU5UEDTRwEbfx7Yhs1kg1wJDJY5b7wMJasUDvejyG9ugVyZXSNRiwdDeTzpQ478WMVucid",
  "key1": "2n2GZPMWjWHNxajXzuSb5GRwehdS1V5JNSS2G2xDRZ5uhPipwfhGYxSJ8KVa2YWBBVEytBVnZQHkzBrQGQLZCasu",
  "key2": "RPFZnsz8M58zE7i23KWV12j6KkXiYMSgeyA3Qm2QyJjwrqzy5qFFaNajdQ5RxhetddLdgoyTKyWFm4NaTX2B4Vo",
  "key3": "3rETZxe5wpVa9kvCTkiDK5T7wT5cBD8s2QCzH9hsvu6Whbr5HBP6vz7KNMqsNv8tkg3UvmYZLkGyNaXdHPnZZYft",
  "key4": "eLj7PNyF3hMzyEEBcN4ExD9YS5ZTKhoBtfqRCHFZjNFSsQY8aPkgwbGq76vGjakvdzG1L93DS7AD3Rvgdnhkycf",
  "key5": "3v8VcmouEpBpAyDj76it7GTirT3498mhmcbtkkYr79pG2xWHYvTSoqAEzYZ8Eo6v1TjgJzLgu5JaMiLMaQsFgTv",
  "key6": "2V5KPkGNA4SZu3x72geiHq1Rr6XYo2MdejestWR3vuE4fatLWfLvPyMkFWpx4je33TdSrgaxR1bSTRzvXbNmfJim",
  "key7": "3yGePZwzgaFneGLW7TsT8sUgzTGh8w74AuZwMEKMU25kvNvK6q6EVCQW5VVqDZSXNm4gbZeTcvM9uwAUBHk8US6E",
  "key8": "3NvTD7YGmEW4yQK2db2uf748xPcTFwXRhVeUKWMFnwVfLCYBaoTPbq2RybrjWhtiUqJomyyLoiSY3zrtjDJZjZRo",
  "key9": "3Q56H9to7JYUpQByRmns7GvUct7HRsCcNbpieX674XRvuVbU8bjWie8kj5oMP5Zt6rosF38VXsTZh6RwaoShPrrk",
  "key10": "2puAxaVKVYqru8tLfxvemHBr5hBmwNbNDp4tXknPweHk7nBddCh2dPhxymbButMo2ThQpz4TC7HcWZXp1eLuDwjq",
  "key11": "B41rHUBHCKzQrdwzQVMvbjRfScDYSinnCBrcLiYF5deCs6dw66EKqQmL76wfJNccThXa9mXpNgkBEPb9uyR7s78",
  "key12": "5NzproVAVUk9YzHgbykkrF1f6P4ts6NJMDy4CGjxqGrQaKfoKweiux69C8V67NHJLKgpyad2hMNj6zFRmR2FtjVm",
  "key13": "3h7W5zpbh11osuYaZikyCkraaiM1S1q8ekDvdjuhyJyGXLmTpC2ZuPFUsg6VjiXV2QcaL8grS9GTae4pK4dM6wXd",
  "key14": "5Hnn2aqYrcn2b9TTQRGTkANrgkcRdE7GreSEiEz1jHhfMSbNV3SMddsDkjgM5djDCFUaPgJ6YW1NgvGTNhJdepwH",
  "key15": "UyTJxHHxnTphTS6E1wpFSzp5556q3SFYWbeVdCt71xKotwJfipghLCDRkV2n7NeoKrJ8JKT3Gr7rVHJjQ5r1XpU",
  "key16": "5iCg5Aw1hhRP2EmXza7eJ8MUna6AnazoMgi1oVkGNZcChZPNuw6hx9NqyC6fKP6K7wEHUQgk8ksdpAnCAsky5tcB",
  "key17": "59VaXEUu1HUVYW7tFEDewrq7bjB1KTXHdU34YURmPbc6Sjr58M8dec45dfqociyFJixu43TZXTf133nHowrhM9dp",
  "key18": "2XEtvb1LToTYS29nyCcZFdH2fP3ZHLFewyp3QGmdufi6zx77E6YLUzT3P369fEwavnnPeRgtNvbTVLsNQHxDqCi9",
  "key19": "4pWMWii3GuAWNGhoAFZweKkqivRHJcBAmL7DG5dHvYdRXorvCZa117RBETZnw4y6P7tktwxBLPUfaYYAq1ruGDik",
  "key20": "5Mawuqi6TS65ZFA1hcPGky5iuKcFsVAVZyQ9nFVG2QgF9rmn8K5sFEa7uoDBmVkf5U8fy9aBbAiVLWua77iYpv2V",
  "key21": "5RgK1vLdzuYGesghcAyqkw1nvp34pPgjQg8mHRoKEMmGsNgMFEfGYLofoB5bzR27X2AeTTJModduLV6vF2mT6jaY",
  "key22": "fLN2TrRBK5rowvSJua4QSL1LsWg9DPrSKdPeUN6HKnzD8XAY5hLupvj3jmbznoZBLgdCjAzDCmAaFteUPZjaUAh",
  "key23": "2bSusLEAcyGrWyQoGLhcNAHrdZsU2BXf3Ly5xPBhbdsUMWR1tBTMArtwN1dAQUGorJitPCDjBMkjjd6xYnJVcB4J",
  "key24": "5hTqKF9VQuVGVTUCwFpeGb8kfHnPgJKcSXzCeCLy3u2ZR3Qbx6BFvw4zsZ5ELru1o3kdC6u2SHf1soT47XQrDTcs",
  "key25": "4GkorNVsRKGTRQ1XUhAvFH6ZWCwuF2Z7pZhzyrn3mc1AzBZys7g5wVZy1f96ExaNYunfi2jJgxHEVbT5YqJ4g8iJ",
  "key26": "2zxeZ6TzHkYFKF74UXHXXtRveAtsB1B3tGLcswoGY3qqXBjMq3rCdqC4q1DJtEfzcXTDc7VkCvfu5M9hDswfQEwD"
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
