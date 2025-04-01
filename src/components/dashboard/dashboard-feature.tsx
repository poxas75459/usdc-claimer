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
    "28R68snByPXwnvZmgVo1rUTo19N6uq9uxGrzzVUyAezUfYG4okUdu2y5XDTYWLJeJeH9XaPe8LFyr99v2jySBqLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FyG338aGZ11nDGgn2E9dW8ptGdY5UZQT51Et7qq2pPbSFqJCywuZVXJMFzbkPgZSqfkC2Byxvn5ZELMjNPbv1Jr",
  "key1": "2QvkxFZaghNSnd14DjzEmoLgVmgzwQgGpf8YQSyWK5jEE3NWi99kfPZagX1nBAj7e5MbWVs6JJa5abKkLJVYJsxd",
  "key2": "3baW9dC8c5G6GGnEJ9bhNkfJho3mL7qUF5ZnFYNci42teYpoEgghB2QEatWp41j9o5yMor3jN9289uDcpz9hd76v",
  "key3": "5bjZVpK8wMwNfRdCGLzcHszf13KNFdV8TEA49NorRqtCv2QA3TQQUZkMbmAw1Qp516BC3UBDeAJC4BwRgk7GsETc",
  "key4": "5zCuDfH8XR1XASRxYpDxHqUYZyHNMGwTcsY2x5CSntZLA9oprXorq9dUFzp6GGwGsimXb25vAKMo9GEwidUgfaQG",
  "key5": "4ryw5ScmjkWYBam55dxZgPQx19PbhyjZ7XZ7M5RAGAKw29rgjXnSZRsofMVUvGWEwU8vQZtvkXPXQW7jVkZxe2V7",
  "key6": "4noZD4tr5uF1nHDzmtSqgZvhQjE8qjPCsby4XR6EBUvT3SfMg1f8eAXuMVXdSUbpcKkt33Mh1B6yHELpzDEFa3HM",
  "key7": "4bzjxweFU4m7QPM3jf7ZjRggrkGzQFAfqqKvPjGJ7CYRvYmwUt2EvE5nEPvUnMW5diuXRamPrND3xX5jNmSNL178",
  "key8": "5UfWmG5Bffy2RGsKfH4eYMwxnd8yLFWaV4TiaKZrXvLWoL8aE7GGAnqfTvkohoxyYupwbQ11rhpYshLPs3DXy9rD",
  "key9": "nyyuYPB37MdqV6pUTj6eav17cK4NjJeiRriotL5M78uqJUgAYNdLHnJe3Yc4gpE1drujnMNHHbH5XQMggRESqBm",
  "key10": "KRNvZ5qEqakd2oFexBa2E4up9wv9S9AYJW2U4m2qeu5oDRQrYCrjLc4Pj16vLcojcBez48Mi55BjtFHSYLvLgq1",
  "key11": "56XoqP6ooh8TNwd9n1bcwx7nh1LqxWTKgxA7Dao57r294kPWpS4iu41B47Zf2wVvB2uMpCnaTAUibDky3XRKUs6S",
  "key12": "5KW6qk1sVLYobSzhNitC5kxy58L11sm36piqPp5zLNbDgVWByYHfGh4Jd3Pt9Sfi54Ey7fAjz7CxuuAN2eh7Jeoq",
  "key13": "3vrByGATxNNt444DTchy5Um4wq2KYEEHSVvucuiE9HZpJPEbow5DfJxGKFjtyEUREnWZ8db8AFzCZWjZXUvTi2jB",
  "key14": "29rYKMYqeuPc43EmKeh7AozYZdH1LbP3tPcZ9PPnFSNgiw9kFBv1NRD3KjmUULYpBsLGXnEhqxuZb6axGkQRTRrU",
  "key15": "xxMFV9sACjW1K4m3yZC7F9nHY7Ah6qF9sLaavTLfkeDvAF2PHFv7943r9ghvsqr2K44wwQW3C8FCMZMzyCn3nsj",
  "key16": "5rBLabWMc1tjiMxjdtQG1tzUdzCxdg5RemXygis1pyKuZksEabJLeqafkXaE1qyVpcuQXtFGhmnNTuBan5McFbrZ",
  "key17": "48rfwNvvHC9HNwWfwfz3Jcuz8gafznGj8gXD1JWkdbj7spv4wxY9sKBo3hw6rWeCwFTBKR2kGYvg161YdTJvxauq",
  "key18": "1kcDTSnD3wdjgpiGCZFNa9RwFggVoKaSKcFP5xF7brj3Hf6hMwzU6Y9e76UNeaWh5qyUDMSbyK1fbeBjhKhhEKK",
  "key19": "4hMXAZFvFBYLPdWEJAYVg4CvPCLrvzDPK7MzFgHHujv5msBc852tyZj4uEmMup87d9peKLaKanni58ukLMxHrQVg",
  "key20": "4uA592qCfUgBoq8X1S2SBDzSkds8Syna89Z6iafQxnofgsuRNTAUZYzxXL23gKhkJJMkKaXKaUh8cnQPLsdWiNP5",
  "key21": "3bxY7MiKEGVxmmxM5Pra1hLov33rApUxeXtEpGyS4HVwBMBCDoSLLdSFMvCRWVHpMrnZFSW2xvPBVt697GoNVwdV",
  "key22": "3STWCNeeFLdfnn4LVwb4WfBEXCXW8KpeSuFwp7Qeu1CBa6tmiVrH79fuszReJ2YHghR9krzzRLXkJ3aVw8EgU9oZ",
  "key23": "548wzpc827eM7Vioaw14f91CJUAu98WsRewmU7XksoAvVcr3WQdnr7jj6WkZvWM94mDPwRyS8rUTJ8jjFbY8bm7M",
  "key24": "2poK7gPqinHiTjg9XjTHBvac7pq6EiBknNwg16rNDDzKPe8JKVFGyGMigJS31JC11t8Tzb7K8SRp6gcDtgm3oViY",
  "key25": "5xVyDpMKZEWsTRe4DMapuwJrRuhb6Lc6HR87eCdxB3QEwYTkr9nTkDASN1KHfMThsH4NTgSWc2nfUhnLeb5QTe8o",
  "key26": "39FAU9g8pQkk8q8gAMiVmAdSjkSURM9sCBE8Z19V7xJEibG6LFtSYTDuZGmvfv1NYQEjC9Np5myL5zgmPsBRkFZE",
  "key27": "2znam6zCiStm92rUvycs9AKD7qM1mCK2Ap59NUaus7YXXS7reTUV15JG4CEyN2G4METzofs44ejsmzNHvHndqdsm",
  "key28": "2we8EUgoQ6ASQpFUhL2ipYTwXyFLFuPi2rYmJb9cgfKjhEqBUjp2YMSW5d2mpLEWLQU9ecW7AGacx2fGL84zhBrs",
  "key29": "5AMsZ4nBLj2VqLSxdUTERywgpVGazuaiwm6jWA83WTfk6dxkemLzeV5fZGYbq9zCXS3HsaSZAAbiTD2pb4o5Ddkj",
  "key30": "PeF6ZGg9rk3kXR1FuGNGxgCQHzZKghZLXMCAki3rdfstvXDZZiL5afzUAX3LRewQzenXgYnWWqxV1USyRC2pegt",
  "key31": "4zUePLEXJPartk7ez6v8nsB2DVtYrFtEhJL3hKrqxHrwapmwsGZKivkP8dBH1Gi58Cob8tpArHpobTPLh1V8Vm2Z",
  "key32": "4jsi4Bnovj1gj4x8pZeUARDfQgJm9g5Z1DFZ8YgzKJRL9KGeHJ7WdXdmWvN95brmZ7DRdb1eu7uGxA7rh9amvxD7",
  "key33": "5bm6xuN5pSMJzPUeHqJz3VbGfiaFg57cfULoxmtqQc41JUU1nPaRGpHyjHiXGUqR7Y4mxGxRyM77SNpCmH3TJsbo",
  "key34": "jWm4SJgSdw78fFDDiMfpWkWbhVCy5YJDtENaNkNUH7Kcu1hFLwPmafLjDAb26Pi713twAPsEwEtr46suRKTQMCb"
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
