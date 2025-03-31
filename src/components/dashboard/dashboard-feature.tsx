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
    "5znitY6xKUAM2Tn8XMjbmzxCgr11bFieWEcXpVrMVT8zM41RxC7kp53tQ4tv3gBRDHgSVg5jSf9n5V692B9sJw7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3etVYex2Spd61wBq29QGS7j6yU9hfyufh2R3veX5umkdJnqPxku9iS19Ng4yu4oE37nngrQotswK2Rfb7nNgezbw",
  "key1": "66yLVHj6fNusUWkU1jyogR8qZt8ajFLgbDCZjhf1kPFJvbAL9Kbrj6H7cVpFZddRaUgF6gEarvYRL36ZivQ3m9gc",
  "key2": "4X2crmvTNZadSTb9nRbqi91xLuxVdQn3RbqMVCLmjoyufkR1ZLRNz3HMmHtgGSV2SR21oNMvNvRtX7ejuEPeHftx",
  "key3": "3H84BNdzFLdHmtSFzxTsTBVnCj9Z9aa1eGNQetKsMQLPspXqwmfGPwaAUK7KP6hHmBbR1haycLmVNJ2QwyGXDao7",
  "key4": "5cbqFxRaMjSLTKqyxSNgUBLeCux5tJN3JJU1g8UXqNcytnUibEALuaXDzmQLeA4abXgLpK7o1cfQEpMBkxt3eXLz",
  "key5": "4dNUJuvmvyjQJw6ptPFZE9NBNDgHHB3L36zqGnDZwZA5qMr3t6sGW13iy2jHSh6F5GT6MVurmpcyvy5zSAZ8p8Qz",
  "key6": "HyxPsjRDFynyTgPUiqTV7u9EtEyQfCX4BnX8DEybmudzpjUKpgzcyPRoJcBxw1orR36esgdGhALWcx7UWMqLD12",
  "key7": "8K2jPWMbRtjY3oJSMUMDywLb6C77Md4kFoc4EY8fToLcrbcv8VtAFcwxhkVJhbzxiGjPER615LLmNj1K94SD3G5",
  "key8": "4iY7xPSMHtsu59Nq63ZntXrp4NLzdbCKr678nswMuf8Kpipkbu6LcqfD1Ce6hiYR5ombmR5QaAYrgD9rNngVPVz1",
  "key9": "5VBtB9KPJLFWF3MNWxw72rURELFgtcLjh1osd3gZNtdGEevZ6AE8jg5wAVKGauC5MnzpRKk95QGD9jXQMDZBJwi9",
  "key10": "YKKiXtSkPRxJjufJdS1iRY9iJnv5exbvdvgcq5cPVv9QNKx9qDrrHSxHisYCTJsPFxwdtBJiCMhch1ZoDj8arhb",
  "key11": "Ak9FVbybmfAMLxY2FK5d1F3Hge5yh8B8cSsunWbBLiz7aS85pkVTr39GnjfnFVyc4n7B9WJdcvXa4hatw265shX",
  "key12": "hAMH2ZMp1rLHTdNmPTfE4SW51AveQfTa6qWeQyeL96WU1eRT8YnTPU3A7EfHvpZgVdysHEUJMCj7ScTErkrtCfk",
  "key13": "pUKVp1RkmuMMzz3MmNVKSr7HqJog3afZLsmyhuUai8pHGZtKYDE4YFA1WiggmSsgMM958bqxqMggZjv9MLftgTe",
  "key14": "3aKZZLU3vkZrWdAZfEAtt5nAx95e55ec4MmzNdkXcbWjBf3URtXrKBcxBKH466CTeNzxbEQy8eirtgmuweQaEWUp",
  "key15": "2HBVnngYfyzZu2VsLAtBNgD7VYU31vuxXobdtk2QjW5EegbNaL9MHQJe4T2zCwU5iUKKcn5yWefLRocJNQ6UiBfN",
  "key16": "4aLbeMSd4AkifXgT8vTsYUhZAjFjWZubMLgGmENuZqXq7PChGgxBDuCu16ST1859F6k8VtFdCq3qprEe8Sm8VCEh",
  "key17": "41cEJYEoL34FDu34pmgXooMC278geZ3msdyk9u3FS2yjRBjKiQEJcfe8wawan6et7ehMH5AYDfWW78TTn1NWpAS3",
  "key18": "3t6iABuCDA3V7CjrF9UE7hsScjhoKZE2DzHWjqU268txt2W7EKi2bkhBRtM5g1jbR35HdkPxraGvzrftH3dUTmW8",
  "key19": "2HWDMnU6dEvuDUT8YkMxX27Pykm7MnsvecVFry3EMjTHuwCB7R1pTbL2raDHwM7A5v2xQBuKhCtWxo6hVcUtP1go",
  "key20": "f9H4asNxgHqH42QUiAokUVjwQoUeZzj4YAaAG2NjFEecq2vcym9oo9JFgbFzgo45TVyEyU4Y3xWB8oZnbELuDu8",
  "key21": "2ZwWzWMgsfX28J65ugUS1jJ74qJfwB1aUkXuMMwEUoB3Uej8jVKdCqLAjwcNEQzC7DFJkKfoegbGZTFUhyePv3Lk",
  "key22": "3eEc37XtKgseXLLtqqfMdiHzG5Mab24EBS8ttt4FQWygaZ7JsYh2pSDbVo13mNHdy4h1pPUW2mPDemJ92y39b224",
  "key23": "3ksaKeV7ZQHRf9m2yqs12n3U1BWuWbMVHKGUGcv4fRxku73CSvvAp1d1efQsP3dK7o53uiUCe2UQDgKVrYjWzAH3",
  "key24": "5T9jhbbNu7PKHiAoSUKaEPL61S8sJV5YcZirBdZU5zWYAvaVqwPNGAw5TdBJgXpQEgVtphNyaBSA92YkQ4pECXXR",
  "key25": "bAtrkLK1ZY1ib7YHEDudCijarmCpqaUg6V5URLkbeGrD1DXsngETrWSJTpVTgVDSTd5m5cGr16XWVCxFSpJcUv9",
  "key26": "wjwvi59e2TAgEghg3MHyi5CZzmSnZ3uvLCTtiX9wQ9pvBx8hZJY2H6GCJHQ2VZ8uk5dqtqDzozfmF3V8CXRHwLi",
  "key27": "57AiecaTFn5nkFvkSbQdqr1photjJPxLV8QRevgj7CSoXQCE4HTKKGvb9ezoS7NSUtwawbP6inGRc8wdXovjaXkn",
  "key28": "4omJorpSo7JqBBDxM54EBsHcz3Re9CzrEQjBTz2dUJ1xJ9BqEwnpFJLrbPW1Gta1ETJfgNEAJo6DfbpqJ9PoMCaG",
  "key29": "5ZqkWyKmxkVVz1xqsh35YCPzmbhmtbx2EBHXQviPaBQXk8S93SKSVkCAYLEmTbaSEtppVGaZrBsn6omRPzdPx1fA",
  "key30": "3i4Sx1kL6jd8VpTFr2P9tKquEyBLvBP4UttGZhUPUFqKnboEJnPfpRFNkwkWQbp6xY2nfT6ZPah8QGQcdsG3duKi",
  "key31": "4rtpsonaV8Rff3qsQRFPbMSXmHnGZ12Vt69iH2X26moS7fKMvED3U6x8kYoA3pcDHfKYE8uA8PPn7T81Q1ongqt7",
  "key32": "UPt3PU724sf8p9GSfgXhVhpBktaPKCAacd1SscHNin4nV3GmtwFRzZmMimV9PNqq2uPaCoMX6HpmofMikCC59D6",
  "key33": "4JAcdZih288C3QLqbvbEsTmY79wpiz2FXNbhF1YkiCZRxgQLsnj5C3RggRM3ZrikqbwiAa5bBwrbjVFjFQRw13mb",
  "key34": "qvKpuszLax5yFvRg1EjYxusPeZioSBR83v818hXXKDLSfgRNH4jF2XaN3dN4uGUsZZUqP4rh2QcJpaqQzwsdJGB"
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
