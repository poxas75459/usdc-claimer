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
    "5zWZAhedPgXNrsam7sVW2PQCZpgVaZV7VciKqaXzGSx5Xu9mqz4R89Vwg6oyshKsEq5YRi68LYKkHhrbjQDUpYp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dvo1Y2EZ9aS9PRwLDwJo8LAGshgsq28bYHpdtbA6TN2s5JTJpAnqEwjpKfrb2U3XVg7mb9Yz13um5zVPjuPxZGX",
  "key1": "UnEubyQXFM2VnSwYDAETrBa1RRqo9q1PqdqLqm7zMJpczVnqUMtnMFwTdtQ1ckJXEo5bxfNk4LL5SD1HBw2j2Fq",
  "key2": "27NEXAf5BsEmt29pVtxtgxwiWiygzcQwC1EMjN7cnbKyjk5vFE8fMvXGNiHt9NEEuKgBxGqJexYxbJChhHFtBF3X",
  "key3": "2MxUAGcYwuYm6NrPNWV7bhrAwk7kbLjRumq5rrPssnCvUEogu8NvuNqLcJYQYtDVKPYCz4pF9LZAnRJAWVKeHaLB",
  "key4": "2KvcuSyBHvossCHFxoDSjMCyu1NEjSJdbi7j38RzSDgNeXyF8EgT5sZAgtv4dJzUdCDoCDUWkdcqqvy7wpc4i2Dc",
  "key5": "4bQBNbfvLwwTk8kiUvL96Ap3m9ziiDSUHxrrngpNLjsXxE3PKvQbSWof7HdEQ1LWnm67zf5hKUPK6M3z9iwih6Sh",
  "key6": "5ykHx7NyLuUi4yo9rXVBwrLojvZe9npxcQ5UGpfyC5M2BQk2H3q4GhtFivG4aMtreKsYUSGdHetgyNSVJS8LoNx1",
  "key7": "2vpnQxoc631tsSxiEU6S9H2jj7d6Dw2aytAzPbtK6YEn2x51sLkqotQer5tyTaRZ2wjasmSkzJW3NxP7bW188Dh8",
  "key8": "4quXwkz1YcZjPqg84eNEgeMw7gLwJF2CTtUy1Ncu3estXGFbvsuDjUrEfrmexukjGcLStPhYhGEE7B6ZN7AGmo8t",
  "key9": "3oMdmWmQWC6KdJ5P7u5xkmC6Q1S2YwAgLWfJQe2qwXwhDyaGJpDGXAtAoHMed92xAwg11EAzCmqDmRXXjmXes9A5",
  "key10": "4tXDNDyotHVmsKnWazuvb2G4uKDhcxUSFZpksuya468WEWPMiQD9Thvs5MgpQEbFiBvpZm7SrPNDeSwURMU6AJyh",
  "key11": "LanjFpZEHZHsgBkgJNWFtk7enrdbAV9ZA4T2sWQc8cALUFmnHhc7QDjdj8Az2DJFaBWvfryfyJXCbHf4aQyyxBk",
  "key12": "3gnq1mpff5i3mzW4PPpqvbRdzW2xQ22D1m7x6iqW2yB5RikdtRd1SAEpRdbVwWHky4NhaZ5i2HJTBNY7wJfLA5pn",
  "key13": "3NixaD3SNLTLvkMmaqZYSkENwbVoWqvAcQst3tBC3Gw7U9s9Pm2XZMpe3frnyoNyk1DTmFVNMbGPB45CzPBNZMqP",
  "key14": "aCmWFbvbJDdv3kWp3c3G6g8R3P4MuQhQSkMFStgVG9mGRarh3nRHoEYSaGJfjrnhudjhCGbpMin3ofxnQRZ14ow",
  "key15": "t2298nUoMcSmPZnjWBbgjurHm3vDW3mruAKTbhcAqvaYJyXDsH51FA3eXZ1QjuY1yMNCvDFdoVtQe8kvPHQpAPw",
  "key16": "4ygRMGB4LJ7oYBLwMr9XybMyVtDz9mAB2rBFq2q6pR4UBMVKHCuUZjedTNb42s2b3GLrazVimYnBY6H2VFKDYMRW",
  "key17": "2CjLRF61SxEMnh9WUA3MgDRGshm5meeLJTzazFoGJR5hmwH1X2S4UfdJCHRFxyfdieA4VAtjzqeAVJGY9djM8hfv",
  "key18": "5cuNujLC6wvahJhekuEXPDYt4VpyYpXXH7gpGw9NLghXWuqq6n3kog7Rtza6MR9Nkkb49UENgi66qbEHZET4XtzF",
  "key19": "627uuwjKepWF9naDT1nRz7ngYLxtQbPdnZk5vGhUwibgeseq5eng47yJEQKEjTYypT1ieJauFxxy9tSRdZ2PSSdw",
  "key20": "5Zg5KPj6NJqaCVVHfdva3jUirEnKtoNKacwgPbB97r9HPzjUrrgrDSLFygFeXv4CwQ2MzG3s8RjbakPxs7mEyPEJ",
  "key21": "3Lk4dh7h7YC3mjoFAtSC3x244VxFLXgDEVGm1mmy9XHkv7pgmT6Qrr6GjWvULMoPKhodhmNf7FT6gBmDpaQU84s9",
  "key22": "wCSywUMDx92kuBQBWQR2xqjNq69JXhFZAqHTK9fdFNWGypoqzyQJWRGKQxsj2RUcQ82Tge65X5HSa9iezRgAfDT",
  "key23": "3a8qbZL3w1HjFZoLjiNQ5QmU9qcNVmVviHbMWrQ2aZkLavPPwLvdfW6rFrJXyHSFSrfKaXLt4cNNJG1wTkiB1242",
  "key24": "3SEgLHZPpsVQtRqTEVaLJUTas43eyEPR4u8fu45caCdJahE3Mr4RkKqbpCdtBFdbbPSnrCVqQnMbVqcGUyBtGTQF",
  "key25": "42P74mSkmYBUVFUNsJpijLDQxd1gJRB3kHzWNx4rP1fY6ArVaV9BRLJKVxaFeN3nATrddSnyQk4iw1et1ZzTR8yw",
  "key26": "2WdFTUicfV4xZVc1suDd6zJN7PFaXsDUbUHKjdr1Yju9F9gerXee7YmvvVfxqn63hzfv9tuTyVEZywXyWRoiwWbT",
  "key27": "ebcpK1NTKWvqFMo5z8aVuDJ2DSuxMMMFyuqt7EfkUXgwf5pSGk1VKaJp89Z4dpHETJKCUB2Pj5Ae6kfhd9u3S8e",
  "key28": "5GXnTTsJoBs2JA5Fov9JjgQxCfdtb74t4ZZ6VSJbodDXm2hrwbcQAFKWc8N3k29jtk6UFKaLbV7sM9wuEZXfq2K8",
  "key29": "KHg6fbjVZoxX6YKDpvVaSkN98c3nkwfmcq5Zeh9GyMCbNPasjh5pWP6nrsVccCeVsv2FsAwAcyC1MfDaddPe7AE",
  "key30": "5CxfaD2wQzGhiLyfyMUMxLYcpraW2g5LZSq9EJZaTfL4ntLYJwef26eRCMbMbXNS1ijShijoGoaTDga9ffvH7Xku",
  "key31": "3sKoLiyiJp3xttc2cF6rjSs3RNMqRvUSehpY8eA3zy8fc5ziwTzuKtrSkAeLf1g6EdoT65zkJouUhMjyNzSSdXUH"
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
