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
    "FqxXWjAmnXgQ4yR1b2AP94MX7pWUR83VeG6RwUnZdwsZNFJfQwucFzXxXFetEhm1Ab8hVGhxNFbjgnNmosMgmJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hLhMeiFsKmaWN59WWSZAScqrfrR3LidyVH7cCT7teUsndNtpKNGL5TVrK4bJny4t8gWA7GpfasNt6pHhPT6nuNc",
  "key1": "3RPri4GUdhuyEEAyzDkkMxbac6kDY2TyYD3xZF5B8N5nx5MfxZcxdsW7RHhhgJKWj7edLE36qF2ciLXvcMqmY9GS",
  "key2": "5keHW4PEz4vc8Ucc9CWGyeVpDuXaxTfPyD8dRVkNKNKsfzfDmCUerXg9Ct3dgyAwyMRgpDUrcRzZgQvGbvUCaKSP",
  "key3": "pEXaZxEX5oZh8GDDVcJfCTcy8QB2nAg4cud4mQ4zEb5YVFE6HURVBv32g3XU59y4KLqZfzrLzCAadn5NL4K4TD2",
  "key4": "JnChmRkkjHq5S7bUxbwnmureXX7pyCnzEcscqZEmXNSXjQKRbD4KjKc8sKsm2NfR7E16Uadd5MDiNPqPvUCW4DV",
  "key5": "5hmQbfpC3QKh2MtiTSkXvLJ7mCUDBca2rSKxEDm85pDuXtuBciczQeWSNmEgVWEqHpdbaMuHvi14G3QxKtfQ6WQ1",
  "key6": "4G5uVhxPgXScoHm3M9voviQZQCyuJsiZofjV1P1pfAkKgQxLRP5YZ3yNsTrqRTu18z1zQQHywSvSNwscbGz6nYKj",
  "key7": "jhAz8ukUtRPD2Um1XtTQHm8nEt6MCm5EDDSU65RSi3CaP9Q7MkDhrmw5787QpeGaCELqc4ZGXiZotZTAM5Bokw8",
  "key8": "2q6jKMeQUGxtCFShksT4NRxGiVdxYMLSmL7sdL8piZ7MqNjQVaf7LYPJLTRzVv3R3C1nqb7DT5dbARpoBJUu6Avn",
  "key9": "4z9cD8pUMko7NQF75xtGuiqX3W6ztr12M5dCjyuq81svD1XibDmF3PNUXRHaCBdmqtH4gVZ1GnTgB59ibfjTW2X5",
  "key10": "3hD9zKEnouQBLZ4t1UeVecZPS35X3ocVLroXJmjBZxJfSV5g68z5W4rtNv7PZVY7dKc6FkNp6Y4bvAVv3RpJCUu6",
  "key11": "5VDWUUUuMwZSr8npsFXczQwSrN7KozH6ErBaNcAxHiTh4fhj5zg8a455wmMCwKpa58e1vyEad9y89uu6djptdKXL",
  "key12": "FgvJ33eYoK5NkeeS95VxhFAuwkpJFbCpAXJjfLvpNi4dZEUy5ia2oMXzhrGzM6FiUeA9w1GYyrt7tRMHRT7WrGC",
  "key13": "2wpig2uHvfuErNWUKDrT3tRduJoG383FDxz8ap1tnjajdZB3RKXM2XPJBpduYu6pkfExh1AxiHzrg6b4KyWerN5U",
  "key14": "55HyjuEQ5AhxmKBPHYpWTrCC2zQ4iL2PSx2n2ZWcxiS8i3XHVwizkpZiTy7VbNYhFWh384SmF9e97M7yxA3sRzfn",
  "key15": "JAbcVRi9bD5csJg1kqzHoZWyjXK9uMZ72PV7JzWgCYYFWbFN4aBiT1okLavyzoJha8vLvcvYcozUYECtp7gptg6",
  "key16": "5FiDnZS9LJQDpGsFjKgRuRFJJ43wMJvGPBHNQGLsKvqKfWdcAMtbLcKVR4ApVRa9YbHKUJa39Wh4D7qVWSNUgqWr",
  "key17": "5EJ1quX1jncik228UPjvLjJ5YAXtKHe2kUXCNTNMD5rwfNTpbgoXcdEhBSivPdjrAV43Vb6iDN82bsDRrfDhTNGf",
  "key18": "3s3igPMnYQc1V5u6drcuZQ1BbCXco8hkphuy8AFp6xnoXDLNmguPDA48ZWEk4zTiU3FrfQyndrt8LKGdCoAZpuJ5",
  "key19": "9KhS9ibx7KXvEJ7CghYTnsrNgJT3s5zdmF57g89U8eBH8zUo3NXZRKgJBtFvBK5ZdvZHGDtzwmGKFz9RRpmVtF4",
  "key20": "1CJoazzU9siG33C9u3vyiWSrgb8QmqKVJt71RVWXJGBu4yKP5FmLFZ6U8xDHqGNwP5fYH4Y3NCEyptT4Nh258tN",
  "key21": "3jDJhnLmWAHfN5yANBRdwF2pTUFRhFHeoYZhy15cENvrR2JUikkvT2fCrQNbRYjqewXRnS6qcGDMPWcs8FoN51r6",
  "key22": "5xPHihjVr8RBc4azrs6iTSikX9yLnQwwHQoABMoew2TNnUEuPsUuVSbDhm1dxE4SfcxVtL974UiibL2FpnYTM6dS",
  "key23": "WgSkovE219dHNeLJvdU12YujsyDsH1j3588Q4oHWQBg51fpk8uJMWFTfZXc9MYQGLhAdCYQuH83PDfBUC2TixKL",
  "key24": "Bv9uEuy3MnqXBt3zifV2yiF85mVdZ7X6v3LFqtHcVu75QQCAKDFWigNALo3R9jxQAB2XRo4zZhsewBuzGHYVpz7",
  "key25": "37XRHUwYk6mcw42ESFgXuApFTVmkwFEhyoxJNSQtRT4yeM5F4snAYgxgjUWQwcKyNJQ6c44QiPhx5bQzEekYeZen",
  "key26": "33MAEzWrugULhVUV3qvzXXddGgkVGReAUvYTqudMjcX5xbeNtzVK9gBVEDB3eUrgTA6WBXNr1TzyFdPKLWACQx1g",
  "key27": "4EqyMYknX4KTZeRYvtKM9TFf7eTpMxcrgbwEbt3GpVxxT2Pi2XCaF5Y1e8322ScF4yN5b8TABvhYBTUtrrkNTN6e",
  "key28": "4HHG3RpaJfXQ1r45q64PTtHK1eyTidtbGSqjEYYfL6YMJ6Csr5Y8DdJyHyhRYQyE6pUfxykKPmXnmyjDURXK16v1",
  "key29": "YBKmAbgE1DHHa4yTcePoftA8Doz62xZtCnWN7G84btwTzRVrS156B3mbwBznwSjUd5AShZYwcsDzdyQ19wVfZ8f",
  "key30": "2ArkWPdG7tBSr6tCnL83GQMbpiosfyPo1vsJB81Z58PSJZzZ7n926qoZqBW8dNTpRWem2PmiEoqgEsdt7kyeqr1W",
  "key31": "2bsYSPtVX4DhJXw1vNjbwTre47GRC5jQzLMKvwyy5qJzuMLHWxjighK78ReMwZDcCdNWN4X2rzESSWYpNhYgrcK6",
  "key32": "gz4PnUPXVT185UbKqka3EXm9TokQ4a2HbQmk9ggKL1PUoh6PBwy7nWPGFszNxktJ3Zwf7aAsrYVCB9N7Ke89Bwq",
  "key33": "QZPNeiVUThHMwUoVjw88zr6ptLweLnv2fp8qJnKTJA99e5VmEuX4GeBWej8vqqEVz9B1S1Miy9Vg7kqqWJjWtsR",
  "key34": "3EwrHuA55HZf49kULNgAwAdf2KoFmhKjbjTZ9nzqyan5V679ZhpPyz54znE1YBVVSaG1QNxtvpThkD5odAfCDY2o",
  "key35": "52rVkrUG85LguwsZUbscpSTUfiimdcZZaC9MGs1NrcG3G7KrT6JJnXqr2irPKKEfuYuYUxSaUUCnxhcbZDREvsq8",
  "key36": "5jkTgaEuDsL5px8EQnP7optYLjPuNQDA4AcLygG4JwGTf3Qw113NaiyAuUyTSfjkmcRYvs4FRTWUBQNUUwZshWzG",
  "key37": "36nbjxdpdmD4FbLGBizP4FiJyU1bDNa43AHBzaQoy96cFe6pVGvgkY8UxHdXALG7FScA3i5s7i5ZAAUUb3B8BfN8",
  "key38": "5QX8kJSa2CrGowQykZ59D527gX7VsjjEdDRAwe5btHWVMRdRdPCWQvYt8BLE81xrHnWnEAnbL6PEk2pBNHEqwuLm",
  "key39": "4tq716YC9dyec7uH7sLWNx4MhnExEp1s1caqZnQPeWeGwsuc7so3oqVXkg7h9kZhYnh5Yma1JB58Lcg3G5JLEK9N",
  "key40": "3mmuhGLyiNSarKtCgNMxBkcxzvzh61aedWTrR96NrwcWrdeXCmSSyRr18fkfJCZE4kAbrkHn1sEAne4TAxQZjGxY",
  "key41": "tmLeJEk3ZRuTBCRHVozbNHjtbNJVmmTufrizrLkEjvhs32hiTREMLTVBNLRfpDPB5aR4rkQMQw7Vh4TGbbh5b9h",
  "key42": "2KazJgwhofodpHJJWg5SUnHwFVBLqyqYjYZPa1jY7zPZFH8nQrYCLW6wHYYjayGfvz8gUdzdcg8gcSs9gJ9MhpTf"
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
