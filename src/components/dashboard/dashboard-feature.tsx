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
    "3HbP81LR4uqHfJQtj1mmdPztGVBdb4LCrA6aTRoCjEp5xC4hWbxFD51Mx5KaPMWbTEAdeYgaihGGfJRaKaFiuq6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bQw7PKRrnwRHBuorJirSnetipFHG7VChs7jNzxkudhAXdH2jyZNamSZU3o4jwUk22fiYBmoK7CfuimWCmnVQkh",
  "key1": "35wSSAkELVgKSfDQpxqXya9gH66s4va91TR9mxyJByREm6fUcoshmBc8cj7MMfcjcXuWcK5b7cwj9WspTTuc5vaf",
  "key2": "2Runc2zxsFdwiHpM1jgeBCzuymfT2kC71a9uXGMtfvJHoUydGzmxZVUBG5b2YnHAiuW1MChZgJSgmqpqMWHBDbaQ",
  "key3": "55SeMsLcw8HJgFnFjULKxfHDUGc1MkiTEWerb82L8tq5vV3Wxr4bCMeLzWCsCjzhySAC59R7z5weKqurZfqp6ePE",
  "key4": "5DC3XeXNzffQkSPtCuywreY3NNEcwohBYxGYunmGcM2SwuBDGehYa7F6hXBd9oV4TW3BcUb9HfyZdY9PhdK9BEYp",
  "key5": "2eFhRBxwqDWAQZMLUPkGoMnUZ2eNd7QvbjJyHb5nCKzK8aFnpXWkWBk3ZudDYBrKGUWWdLXsn86LsaXRvXCrhYS3",
  "key6": "2c1WYuRxuXPXuX8Cx4jg33nz94zL1WVmCGUQDy5nFwmDaDXskadPQACheQBQwGFMzPrEkYDDgtQTSYoAYHMAnXun",
  "key7": "2zbqNqhHzFy6GohfSgn1ZQS5Hrk6jgcjNdSxp6wpqRbbAVKbkoRM2BsthLMWBiXf18nUV2Bk1qsEdSb7jJHHvLdw",
  "key8": "5T5hbXUv49Tzw98K3CwQqBmkK8JakAupRrShLkegSscsrRWRzic8Cec4nBxGsLjE8PToDSbzdDjoogMShDF5wzYm",
  "key9": "4T9TJJ9oGPpoLSur4c1JWxubuVR4MToRw2LzWWiKG1np1xA7pBiXGCo99FTSCRW5Rqjneba9rV6518msMRD2AKFG",
  "key10": "5566kKWAcXCCAyv8PqmuGEjJWnH2qnBwwDE9g7wpKPhr8XCopACZYukvMaDQG4ATcq9qGjjjBMviFnSHhERoW88j",
  "key11": "24hbSLsgW2aPJqNzEhs7SPKmYwt3SUixsniYHVhJMyza62SyiYn47trwEaa1BMyvGM6tkGnDXs3YRoEkBwf16TMS",
  "key12": "5tep2iq65VTGkkQXd6KkHqrQeCMmbQqj2jHZD4DdetbcE6w7pRUv1ryd86WZgyu6PqGzKUAMNSyQCgd1pPFQgbdz",
  "key13": "j7ULkrZvjzNYKGM2GmfmigmW4hQmy9doX8ofPW68sNXo2EgTW9xGB7wFtfcfZPZ9DFAjy3HfAD96PshMfaBkYwZ",
  "key14": "51AUfo2XYCsLsifd4MNNvQsNo5RmNSw8Z4dJWhw1i53zcQFxUQsi84PvFZprXB21yS6E5Z7iBW12dgSanwzjvvCr",
  "key15": "Sg1vUgK935YFnnRPbGLXBxUAJ9bnah6EFMCxGrDqwmtWk6p21P7kXCrJLVyGn7MNZjGfbbdSemauHSmGTSDe6Jd",
  "key16": "3WhVkbgxdPRbfSNnvRUeUximCC7pLZjtea8tBpzLuyoKK9y6T58chzouwctqKwtpy6oLBBSWbw7thrYBofFjj77j",
  "key17": "33GLHnQrjYeGQjeCDJKTfgxU7H1bnjJpDu4MFWaxHXzBbWtZzXin5bHahrYKf3R3HsxztZXvytLBdne8iwo1KeqW",
  "key18": "4a54iKQaUZDn8Aba7opRpj1dy9KCHK97cD3mrcSGxF1G6inZByXrgviKSgVgC81r7GmeEfo2HVYDJnY7AanAw1E4",
  "key19": "5mmtKDe196ZWJfXGN9HDX6APtRsE1zGrx4H5YDoUScibAHzyN3Cci2LQ3VLwPo4QtGcbAG4bk875CvYXAoLWsuqU",
  "key20": "3w1ni5vhHm4CV5mz2x3K4DBrL256bdtgPuFq4of4vkECAmLmBSv9hWKfiTvS5pcgwgdwfJM6tcXWVpV6TyoVEwsU",
  "key21": "c1WJPt7SV4keAfVaxPDswauxAASwcEVxv2LjyUF3Ekd2GiJkWWCEoTcY5gNDfdCiBzxM3qZvdtKvWZRiitU6HMg",
  "key22": "xNMmQTSYRdEexkYKJtKHwV7keLFHd1wY52mBXJuhtR2FMeSFdQUM7LRHBbegKSebc9Vm2xtv5C3NU8GRbKvAmKq",
  "key23": "5TtZoiJyckYkzYooJcZynh2GAn3Fn47WpMJCDPaZo8cdJNGakUYST6yJakvsXaYrnfMmqxXiSMZ7FvsSMEJ5RbcR",
  "key24": "5LkvZvRhST2X5h5g9RL8mQxiz9d74MCrBosYXbwUsmHJQRJVRfHQh2zMTEFMRxPqWS7vZ1zo3qodTfshbN6fPZqv"
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
