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
    "4fHAo4nhz7wsXyMo4nNEjYNiBMoNHaPGRyC1YETUcUXGhB98urDWhwXWc4HzDFnwhBGvf39ZdJ2YEwLMLzv9rgXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49SAwRsQT39mCEnJxEB5rTbY6j7EmTM7gxBWd3Jth7m7QYkFT97TULCUEPj55idw7JPrDWFZdQNwSZiXKLSaWCm8",
  "key1": "3FmbN4HUtRQ2BbpzbZtmfFXSSbGYMYCP4VNBzgTb9BYdBVnN6riAd3J6vgMWGav4b6oBW7ZVSnrAkJc3hDoei9z6",
  "key2": "rihyGiun9CwoTsdn5EX4QgPkQqoM4FzBbpmKGsJpuJR7q5oJMDXoYJqWXFpDyhHGwJfJXP2q2wh1E4wXNZLem2T",
  "key3": "DZLEt9EnkLziiRVjJmxR6UJ4TnVSi5hxhocVQPZqz9KPJMjAVRK5CMDMCn4kq6MojFos1iazMJafCPCBF7HezKZ",
  "key4": "3VWfax22PZwzo8fdadEiA4zDVv9pLLVdBUsCbfR1i9bunYwkHcFZKR4aAejpbAZwp7sAfoD5eHq8EkR6UBfHMAtY",
  "key5": "4DxqeA2Try1EMjSf8PF5nVd27b6csUuPU1pijQ2m15teCi7DpDEyWRoxAvPXCsR9H5dBG9Bvc5HL5EEuA5uhADeX",
  "key6": "5edoqGvrqeXH6AuiUsZfZcUpvqYYW5YhQ1wLJyCF7rXQADwp9vbLb3u6bmLgCSt4UKKZpwYyrbV7MvFgnH1LJr6v",
  "key7": "29VmmtaJ6GLspmLxQ5QzsK1uAiUzrGFs39zTNRpoKNSPWa1qU4XbLQg71aKiqDPWj9K9YJ4toBj4NEeFLurMvGj7",
  "key8": "3rAeZheFcNG8ukEPbR4BQdZoFHnWAPH8moSKp3xg4Y8PdzTsnmNtdKd33HK6sgV8mwqinTPSiCRWSpBT1RAsey4L",
  "key9": "3E5d1XNTeznvMdD14LH9i93tPVhDg8tph6WLDG3HN8W9srkkRoV2VKcZgjtcZwX2wJyyRNkgcpSXF98x5F1mETYy",
  "key10": "3zg95CTvQo73gXi1NbBt628D6h8WRnTDdiExjqyTXpquZMCzsvekdYBJQhn2wTFZBweQhfF9GFv21hxkuGiqho9t",
  "key11": "5oH4Gjiaeed6ksWv2SRLGuzQRd9cZm1oMSrd6gSMenPYKnfHfze7m5i7iBsjNUUstzRaKud4BDwDLDaVkr828Ndh",
  "key12": "3g2JENj6o5NKdb8Z1VrAPfeqWzV6cLVMBKjZ4CvSiu5UM7GbCuBcLbb3aqMJjWQtoso9Php81n4vvCEBzrRxatbC",
  "key13": "4kD1HvPu6ZuNiKaArrpeX8RJ73Mh6kr7D1dqoXBkVQZXZR7oB3eh5w1tSXo5q9AmeRNdvG9UWBAnE6RRSTkQPwGY",
  "key14": "iGEdkHiJmqeV5gY45zoGEVVm2obPDABzYjJqP2VpRn9VrLXK1zGqRmAwzu4JgDkfsQjbnAj25VHe9WNmpFupsDG",
  "key15": "3C1j8ACw7NUp6pBtCwSxNnXMSWurMeXKtqMmY4iSc4AcD7jVtsMU2CeNVA14Snbjctip8tHS15dKfGzEKW5us1Dg",
  "key16": "75u8LCB11zazWzhMbHZRV2UMtMEZqFd4eSUEViQTT7pVWCcCmgw3E9UZ5HqB7Bawcxf6NVp4f6WJPtcj7WS5wQc",
  "key17": "3f8sJbHVzo5HGrFU2iSvwhHL2Uoni5Wcti1Bz2ZUVVdQQZZ178ikrGAge2scRG2Z7bBiPcwaC8KT23fbRBi1RL3Y",
  "key18": "ELf9kX7wzVmKhyiFzccJ7NUfdpHniqvUtHkYAy2fgdi3smg8dzet4uQfPTY2qFhKitbi2E92QjKyruw8xxd91zb",
  "key19": "4s5WF97tSpYFbdJDJL8nhs1UyH3GRJkdwdjvpX3V74g4REH7wCfcWoZSRFGd4tXvqa2ey1a4D5zw5pceSETguPf7",
  "key20": "iwC9RYdij2YBRVyxywGuChqKPwZhQwNLfiB5EaNtVsr4iQZGRguoCEUNmf1rCZLMQDCRs3rfAsSkiqnoDw9xVVM",
  "key21": "dhFSpz8qCAhJCo3UZsTdquZDowqgcgLzy4ehFqSPSasr8jea4kgZ4AcTpv8jeZwsyW1ngeDP1g5cm8WjpcNfbjo",
  "key22": "tFwd3S3Dj6A7QZN1KGszr22Zad7tiBPLXdRpieUMKk3GuSgL54fB4o9j2VYQg74cWWBZwB4DN2ZdRRY9tKPtgwp",
  "key23": "nv8sp7rymU4369sixyK3aqLFeqWtpDTn5wy38rXRsph3j1onCrg8uPXdDnc6MKcEsP7rBK928FA2gV3P13xck3d",
  "key24": "t2CSnFtij63RXHRJ7mv7CGxrCu5vsaUHyd2LtDLn5xVnpjmhfY74h6Cfu2UPp41aoNpdkPiHNytFWNTr1qMLCT8",
  "key25": "5pxFpcu8yhzq7Ro3NUWezE3mAXZweRRpkpEPnbG6EkxBsVp6RPKFMU4pq3j4ySe8xfWPoiSuGkQsFX3VmBUFQFzT",
  "key26": "jDqW1VeLfE95AzNKxvh5LhSNahAkaMWBYCJerTwj9vhiP7gubxJaLTDFFxZvwqf2fPdeMJeWxsbXjrfATCHYtfB",
  "key27": "2rcNfRScQRo4LoTgRiqWyiyUKEJ4Fxj7R93UA6rGvC7ngc4XC5sdWLervhHdz8bo17zzkcTYSEFWTpKDMVH6J1cW",
  "key28": "4tE19ckR3XtDFGTQZDkFWZPy9x2y9gdryto9pB6tKdydffSP6VGMewiMaewFAJTgC4AB3CdYfozbto8CfzFSsDuN",
  "key29": "ra1TTwqL2BTjPqzjJkhQTPgo5aYzzETi8wx3ipjy7EamEyjarf9BGpZ6iz7cS5SS8GcMHhQBy9Bt9Y8FQZcfrpv",
  "key30": "3XvNUz2PMFWjNZjUBpcCyj5ye7QyqizWMmrgnZMvAkHGurgCEgw6V8bjnXK7ze2XgTaM7ieP7gx3rQNYPzdYVaWB",
  "key31": "2UVhqcrfUXEcMXBFuwnErJchYuQdxXStWLdsei25WmWgQ2wgfHzQhGzDgUEbrGgvBjaDkG3q9t6CapemzheHqR75",
  "key32": "2zwape2xNwKvZ14PpyN9JEbq4nH2cUzQQPemNu7EXpKtTjPW3ztwxF9tFxgfM2JD3ESEP1yaBJ8DzoBVKiAcL396",
  "key33": "2on1jRr7ax1y46B1655AyDm7WXvYd96H9XmZApK97JmZfZyki8KHhmKGd6u7dtj8SSarWenyjLJpy1tNrDxJLDtz",
  "key34": "52s5cdZUWGtykGCM4mzyi3VVh4to5QJrGhWHkip9h8Eb6Ju4vLQYstDEVV64YbieRjnC6Yh27qWbJZ4pgDJ6WpSR",
  "key35": "62HtjxAcJrBnyyn7kTLpZKLVcBhvzjS1Ubt3Q1SKTzWztRHMi4fwxGqXMnvkMY5TLA1e853KmY6FBJ2Hd2ktzSpm",
  "key36": "4LuBpHmVjM2bdzyeFjThhViUsMEJZp2DFG27NEgan8hcSFeTYqisCZwHGZ3aVKjYSbKZofaY38VgtXbVfaEZdteE",
  "key37": "3yUhPvF1VkDgQ6K7Yb21egG3ypMRh25FX9j6JaT2pri4b7xgzz9jJ3YwEbarfbSSGVUzCDouNydjiaZnCf6EL4yj",
  "key38": "3KbJDj5XmVbh4YdS7ME8QNFDWeVa4worENZykeT6DBD6m8tc3eVrXWhGdzRWkNwCKrSpegHAWpM5Wi6NuFw2kAf"
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
