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
    "3aFjjUPGPLYYea1p4PB3Un4jyWQktb1pNmWqykXtCLLVRyYcQQKcGzByWLpAjBd8Sog9qSYGqiuEPfCLEzpqqTXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UKVPufvQUZjiTGzGYLUiVadTEXnjUVBnouZr5BLxMZCTxDBBwgnuPJW1sdKUe1LswKVVBawFJWSxBpjyRV8MiUz",
  "key1": "2Xrf9NzLXGAnHijTStbdw8Y8sjtg6L6fkwJnUxd89Y2n64d8pA9ZGTfFpJ8GTHxt5b8Bid7F1N9BaKKHHgwHH43S",
  "key2": "2gKfeUyqHshRkiHW8CGhQe7bmqsA8dUsdG8mg2gEYCH41C5nLmFyjUsVUxDPwCtnVLjC5JADCGZ6LywKsRfbjpuA",
  "key3": "2cNT9pJk9RnL8mVpN3Mwb54HE5k6HZRomYUi6XG5XPzXCevQMCSwSepRQ21xi3WWcdwTcc2vjPnGTKWRcS4c2SG6",
  "key4": "4dpYQAbP7bxAZNPBtWq7bmo1k6BxZ94A7qjPwpKS48Fz5YQBbnENWuH9R6gkdLXiWvSMfUq9MKczjD2asNnbrARu",
  "key5": "2dKA9QdcYx1wy9x4tde8F21b15zeKsSk5ZVuPjprj1mqN6CTmKEbh8a9nwghhcQoofiTCtADP3Hsjch9jJuYLkL8",
  "key6": "4PcvePfL4aLRffajYS9k91nACtxrD8t984vSsBeUiyPgEJCL4kHEQ6vmE5HQoM5xzecHomy5zXgbg5APN3GEneH9",
  "key7": "2AJpqNnHxUrgLSgbsyRWZrFPTc4hHCkZ2AoEoMBAjyWXzwm5dxjJY7wHY7A9KAe1hVtXGdjEcwg8TpKGZVWvZaM2",
  "key8": "5A2bbKbiFwj8Vco4hr8sjZcLZDyRiXMsbWbQHphivNdQNE2YL9ytybnapy1QUwpBpzWss4ayQGNwNg2m5YSb7B3z",
  "key9": "2SdrNptwWCRfk1UYd79BBDWgd24W8fQA7EomkT76oZf63GH7Nf1nYvad2go2RbZiwXdEDERCnFdCap232N7kTNqo",
  "key10": "5hw68bsxkKMWbiHv4kNqif9LKc5QdqbNNkfC9WcP8GxvAHVyfKWptME2WK8MGVKPsDaPBdWZGEikzN36iUjuwcMo",
  "key11": "4KqXY7CNhPsDHy3AXAozXsfv3M4a4gqBiMDn4kvHsj91ym4qzTUzXF5NvHHXFazc5LzD8NpZdLMcbAiFXpehGKR9",
  "key12": "fgekUQroaL26HM1t1AFWQyTxTptwa7rD2Zr3NPae2NU2QyuNVqhsbTx7bgCCt4Nip8UYUtwfANghHU1Gb6HtpXC",
  "key13": "u789MszH8keWWod5b4fqXtftR1C5kqx4HYW8c2fLgHhLH213odb6TEznwyzisrdraLvnPq2dWMWntzd55n12ckA",
  "key14": "TBXmBMu9jhsWq1J7BX1siNRBzq6PVzaaswuwfGigJ7i459ifkiK1iKh5wfxQqdR2gFHZkSkT5x5Cav17QuJga8A",
  "key15": "4iy7z32hwgRC1YQFPeXWGVSyvw8cth6nB8FGejgNCURvFh1ivhAT9i8e1ec3VPFKg58HLmdRvQwABxnuWwfmkv2B",
  "key16": "4qnP5hpomHHiqUUwCccgPJ5F1vdtG6eSfAupQ7tGQ9gcxLJMtoQvo5eBm9dG5QbNEfREKRzvsvK3VBqKEyWoifdb",
  "key17": "4KKGFYVjRaPcwjcTCRLNJCPudiF1CP988QsjxM9H15VahGVymMCQ8bi3iWXp63Mx2hTum7tg7Le3YBEpo7NQiv5h",
  "key18": "2mQN6JZqtQs7ozHnjropR6mUU5YS8rybaZrZq8zUdg1ARgCjUbMSBShX3Syhzunwwja9FmPUeET1GqtGAEeG2bwn",
  "key19": "2BNTUgXECa5RFCDnxBk1QxKx7zHZbMY5X38rpUiEi4Xo3VxqGh8aGY1JKHvE6yFZjBMNFRevzNAyetTHQgk5SGEg",
  "key20": "4jShuiqLWSmiHTg2eMbSJvoaXbVg6Tpc1ibNGyYx9NfMReTeUgwJ7vjN1dgSM3wYmUM6TMEVQnNvLNs8fVVnF3Ub",
  "key21": "2k9V9C3Sr9kQmDNxYC7nBov21KE2uNSsm1tH9m5zrBQUV3ammswmfWXqvHqeNEfAGEEX4jewEuZz19NfVxueZkz1",
  "key22": "iBcaMUSGDGEyie6A5H1UfMhnCDruJdKycsimW6wtpZk7r6AAcEsnXQqkvnPhE9tAN1C2LJfe4r1qkKzeraSVJN6",
  "key23": "4LJvMshyvbZxpcdvSgxa2P1BKPjDfokoWHKujWnccFoUbMocW61Z7LLMmftJy4ck2DQ7S6P9JvFDAf51qwjMyQKA",
  "key24": "4LuYUem4AunMyvLaoiQjMyeGGvsvhg7Zvq1QYDr2d2Q3wdAywj3U6w3TnWwJf3v84mySrptazewkFMJQMVYbwqPW",
  "key25": "SVT1FP9DiCpLvE4rEy7kTeFdgUjQgMWG8YKrf7EtjE5eABF4hrJ5zxd6f1mF5bLpA6zDLZYTGzTGx6Two1NKmYc",
  "key26": "4DntUvUVgRVvDTrUzRiF5PqTq2z36kX1U98R46pdKDvWwF1q86Cgq3KqyXyJVhGXpYKBMVSDonZkzKnjizNr2pPb",
  "key27": "2HWXSfMd5NU9FNqWGhnRYfXrywqAEn5D5YD1om777jTmZVqYSE1qBfAVpVsnp4e9EtPG2kzzUzCM9YKdLDDTG8Ky",
  "key28": "3hDJb2SMCdxmfQtzCkvh4NwN8boSHLzJavEvVQRhT1Vdsm4iXg4jKsoeaLSjwhqGa1q67kAcaJBjiCZBTZkfHbgY",
  "key29": "5Dsi8ffwsYpyM9oHaBxpQosdm5ydHwbibXssDZc1t8HLLZdwJ5fkjMxTRzMzaoYkBYd1vH6WJbJCVuiftTdjsz6W",
  "key30": "23nHU2YKztQ1RgxqiHsx61HgymDssVXqMGFTjYgmhUrG1B1QLnqdw3NuLkVRPSGAPYoPHHZnsuPHtyrXpchUhnu8",
  "key31": "4obUpkoBzyG5JXnNCqqLiWJFcWfaFv8s6CB7RTU2AqzbNbZ7JzxAwJdBddQZbo6EX2Z4gnCgdLiGbFqdQqKqhKmx",
  "key32": "64ybvchwnZqfzU4PCBUmcpSdQ6yev9eNao9xD5gzqbs44Ju6HfrXc3rzWFJvsAo9Rqkcu1jtzDE1z2g4J5WWiqxF",
  "key33": "5guvDzymxAWD8sXCabZYaViNVLyWmzoAL2HUdyqHduhtnGGrYUV8LJFpEsQ4Ry4TgyFg9XhntRxqRLAD49BW73fu",
  "key34": "2A5oT2aSXJkkA9iSpzba7wCWRt2f5siAJgBLKzgzi1cdrCN7KvPPL6GcYXbXkhqR6e1xtyt9pFw5Pw67X4RnsM91",
  "key35": "5S4k6n8qmzQX6UgUZJkjtxpg2txx8meQMoD6g2d2sEGaUWkHZWBXZ1xsEFvhtLXVxW5YQ6YZK1pMcXmAweSpsaK5",
  "key36": "5pxrCwWjyTkXZLnRw6qrFvmFMf24NpcR5FncrJc4ukrjtDPFwaQEUBybDXz2nvkC9cVC9uF5iseVcYRMnRBcCMqe"
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
