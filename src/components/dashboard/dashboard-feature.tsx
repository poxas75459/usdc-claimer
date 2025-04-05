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
    "3qs6d8BmWu7mtagWa76Pz9HmbMePMviGT1BbBYU81HBuzrj4fRpDLHS1oeqrqFnY3FB7YnV1r4Dnina9pyLFu9Wh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ngNe9cSN7J5RzwDxX9HiZEevzv3P7dBen3xUbAcc4o4JQjdv7grYgmAbxXVAX4mYKdEbFR71uDWEmNhjPwtw5kM",
  "key1": "4J45p7rMBu3KdnryaejEH6VX5uWUM7RcCYZ2NBYErooAnDU1e5zbxqCSCa8qRuY5ZrwR5xPQfxYfdG291ggcYSZq",
  "key2": "BiNUEVrsrSjWpCSswWCjRm7infHGWoZwRYXpqvm1cysTDV8bEFx5yNxkwAqHjnsfaBExyjMDXAQFdfrcYNoh3U8",
  "key3": "54yGL9MoTzwJoWNsMMMy7hQ4KDYdoA5ZmakcQWfHN2AGH4MLEVrjKne1yaxUh6N25bqHVZ75AdQ4kSPRWs12PwhR",
  "key4": "3d9o5ZikJ42eMWEkW5P8hEn2ZHyKoUaa6efnnZMcQSDMFLDKRtDA3efzmzFrCK9bcPHMKVHbRArkUHA386nwDdMz",
  "key5": "3c1LBtARTxMTsnyK7nYfJJFgBgE3rkVY7dVr4mGJpxhxKYoe3cs9X6oDF38rfgsXjuQ28kRe9kP7T5uBJLr12wQT",
  "key6": "4bpqvJtWc5sgpbSQBN8YX5a4hBuS6NY8Zr3ieKgtTfU72yB8SrqiZtuKafemzrWW2TTSNAFnpd2bWog6XRjmdgtC",
  "key7": "5oyDtGQiEMPFbprDmQrJFS3LkSfCSTsE4einRBGumGxn7YzrKKYzJC1deTJNDhyEFNKr5BdMkiYvEbKkdbomZAnz",
  "key8": "gdboeyJjBRAPk6MeQNfNGFqRa1pDLRMw9FzQ4qaLFHHBqyr2ddBrw7kJh7KwZ7eHGP3oJqXi6DSNrEuysbNmVF7",
  "key9": "3mhhKF3LXsLv3icpmb1sen5kAgVuBChjRjbQ3yNjRJgwkSLRE7GuCsT3Xw3REsk56B8hKzMT6eJVMUE71LckRqwV",
  "key10": "5XuFWSD8bBJ1NnN4y3WcHHHZ39hKPUewz9WJb73CpSk6cwqoZYFBswB9frkax3FKGY5PFCMRyw2HWoSxd9bdgqt6",
  "key11": "2afar4A7Jx9YVhXC3r3DMWgW3fDDX7z3dTQHPVyEVyABzkMyZnC6M5pJutYGwD7p1Fks9jXJ9fwh4pLzgPMSYCr4",
  "key12": "3GYFzc4fNKtNcoTKtRwPiqtur7Ec7g3aNPh7Dmv9Gw6DrMh4CYbwyc6qvpKWmFq9pAkKu4Jcm2KcGKWehuiSHMov",
  "key13": "LXpD8tpDgedj68V4uKNTj3n8VDuKuBkpmPbC48veByiN1VpjfjaBhyxhrvgETbx4JCutpn5Tr6C7akGHTD3qTkQ",
  "key14": "4BFd9XH9sVRQCYF9kK3eq6QK9bGTma2CJJBWaFSGJqdHXKB2ymkZbQgTxiiw7zz684RDYFD2QWJ9MaDS6BDkgzB",
  "key15": "4HQp2c77ZyjVD4vvErZdUVBjqGHCBPdhTfqt9WjBk4VVMAbeCPvpoQRSBCSMX8NYn6n7SZT85EWG4NSpjJxfa2PS",
  "key16": "3p6KwRHvUYitAxX8M9ewiL3eBSSLYfMM6JVcgmxQacicWVXXUGPFviooCwJRgvT1LTCaWUwYhZgZ4ziTDN4RPVh1",
  "key17": "4YuED1c7D3SjJ5yLBt14bZBAWcQD3JRdc5uz4g5hMbhpCCCQgt7yKxvn3DVt5u9w3fai9N6S6eF12qdh2cHPdd81",
  "key18": "aG8FYBqJLDpJFy82bBu9E8XwokwPVBVe2UQ9naHQApMR3ca8XexYAq4RaFV6uPXf9XdhMuX6VcyoLDAfnAbgunn",
  "key19": "3gYqYMqWo5tzgnZd57huq9D2pDysQZ1q1qNjPvhSDS4JYRRujKZrqMjKEy5DTCVdXUet9eLvbYAGZ9mCWeSXxgYH",
  "key20": "3WAhqyBZprSyPvcrmWJ2aKZ8c54HVkJusVeZPWbmiu35uE5tgadW5Vow2E1Vts7fvHgEWowekQngcQgChGKYDeZ7",
  "key21": "4pbmP4jmDi1xhyumnU34A1ctXrFesVo4RZip7sm8PCknNwvzPCruFc232gthDWqxUw9A6dLmWcWNoimv7xqDWgAA",
  "key22": "2UVF68keTAzsXNHqobYF31JgJwtTmQYP4kWZSUeuSAjvn6LWJDf2QyuHyhUh18ogNz9PHCPgfHSonMdrV5y17C1a",
  "key23": "2i1Vz7C6Le2PTcbVWM15L7UGvsdhKCNZgmJ3JgoA2vYHTrXgjtEaWsqyCtTk1GQU1jw4kqF22Tk17ViqesyH4k91",
  "key24": "5cATDjBB6FpcvHxESeB7dsyF5gCNPP8c5vJtCNmxzXfQx35NBhLoRohVpomz2wcceDwe4JNcZUWfaEDzRg1HuCSo",
  "key25": "3J9wc1xhH9p2RSy3c8yKBbKabwqqfm4PQRxW6RJAUFWUMNcZ7oq6WB7bebwey7VWQeKB8Z59H587TXdt2qcPMZvN",
  "key26": "4onvqMgQy4xVbYMyrQNEDYJmvWxmZx8A9N9C85RAGURYHC5xj8AZcJzp7khRrH1CXsBcfEdZdsZbHeatN3hohCYd",
  "key27": "2vaa48dMbNKeqoFUQHvFsMaNmf9WNZ2FZV63yrzapBtuApVk8UDLH18RAARqTf75jRYs1siqLjeZg9uZwtbrEJPv",
  "key28": "4URg4MgvHDw8zLTXjdGgNXEJcJdyv5j9kzMhFB46cr8rSkCQhRYUdDJKjcQRa1mdLAVYL7jBB6kFhZPpsrTHn3Gk",
  "key29": "3RMNRDpciUq2YdQQrodHC45LHdXQizrDEeeNS21LKwbBVgC5bWC5oPZ4yjznQypwYK1iweXksTDtELHhUaddCUNF",
  "key30": "4RieAhgeZ9TDesPvK7m5xU7oarsp5vjNXLVBc9ca5LyFwLw9JhNE4CyVfmyJM4gpsUm6cRuwFPmdf7CM4ov7ruxo",
  "key31": "2BXEun2dX8pAoTF4yzw3HY5W2C9Bn4GzYDw3cxJdCWQfQktoAPj1VD3AmijeA5HjC7zSRXkFpRgfB8GAcdfugEK1",
  "key32": "9GSYYCX89jwFZaKcAR1k7uSarFrq4DYFrjo7bfba2FPgJb6LGsKrzACs44btXvgBNUrbeTYhti7aWFZTweN84yc",
  "key33": "4L6GnhruRJBK7PJEL3G4BDSkThX4SuKgUJykQYb4jtaGzz6eDhTsw9tRDkqXahJU87r1RKtrVRFcLCTJJoT8d5UY",
  "key34": "4uG3HFNRryEUio7tdSqxTd6aVezQwVAZcjGBC5WGU4UKCUcsfrrj4bDR6dSB3q3gCbqoTpevR7iZqcys13xnoTVm",
  "key35": "4Mpo3vJMdjPvkeF7fQTMd7rwwVkgHDuwTePoGkYNe5g2nrUExCjC7PTF5LM378dnX684b1C92wJBJG1QLx3NyYAn",
  "key36": "4BWg2s8FLMzx71rs75ox4aoisEcemNZaE6aKNNSgAQWM93jew2TRzE4ikiW7gKb9rzdZqZRbx6HKuWGwZzxnVBpD",
  "key37": "462LQWpuZoH8y9Se9LoQMMJtRWMU9DRywuJb6uEgfhriokmLfXyv6GLrxaz91gxJevheTbjgcp35TgX8AemDWuYx",
  "key38": "9gdQPk7jLKeZYsHEVdK7G8PNnXsTTRZv1urNLvMKvJ9mezzmmMxFgooQZZhe1hJDADoVZjYRMHsWk6ggH1VMukG",
  "key39": "2ik1Mf7ti6SJPUain8kkxtsVy26pdVsxVJqsPv3sME5yTF3WFXQrMoLVNRuqQZfXvRGWCFxVP5VKDz31mKtQAshB",
  "key40": "2NVNsfkVCxjDRxFs7RHUo8Q1pT96j9T8Hwn5pbjBJgeoWR8sWT3Xnp1SQa74ueg4Rz3ywzmFnZSzNxGPGd5p6ZjH",
  "key41": "5G1o3wT3Qis3uUCM4vEc6fvmJBiX8CRqoDjs659NyvSvP11XvqZZzkt4Kg4Svdqp5a3Z1xxbkHSSp4u4ZK3YFYfv",
  "key42": "2SvUT3DJ2MGXWeaYg1MgjZfNzkmt4Hpmnxxr4RvZ6YjZ5Q7ifRAdJqewaC1yDxmzn1DtXGtscNL4SKkACj1HxXKp",
  "key43": "79z9q952hQetJ8bxKbiAWUfiY5A8cRNLJRjAFQ5U8ay5UcRamf218WCdNhHo36N9rDoVpzi2dBs1Ca7QYbgSM7C"
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
