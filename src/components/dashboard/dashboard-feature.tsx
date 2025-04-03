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
    "56cfiFsRKw7xuvvuwUT5cXckkcrXbqAb2oA9HgVbc2nHpkq3hk5LwST4zv9Ro4GVnrFu8GUd4ksG3eRKn2dkiBjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VppfsQ3vkjRGMjFALchUroLHTAa3JEeR4hm2m7VkYXhHU3tnjAcW56XjaarZ7BiqGCyUN214yD3XFun4fBereWX",
  "key1": "3otQqBwafZsxsu7CktVzFBkjzoSaASbCq733RjBkXeVfRF14dbf91Q7AJif85iqSrVzYRB2qgb2S47ZmMFXYEAhz",
  "key2": "2kMk6MWA7t8B7SeWPCWoKz1y5jwCGsGoqUVYhVJyMzfgiJAHgbTPz6AXTWqJpEkPBk1q1MsQkEpjttcNVS1B4HyE",
  "key3": "2CPjzEnToszU5NZFKMZ3oUD2ZdtxyePREKMizzPGJuz4ao3qqMpbRbsLs6eH9ACia51khzNrGbsZLqQCturbbNvv",
  "key4": "3Gmdd2NiJLdk5YsdmAN5p147dZyvjwrviVjUnVUUNCBKPqNoUbhLLK1GBPxig3JvbKNkj1qGGwBiNrtdmiisLred",
  "key5": "4SjAnTCSbX5h36U3Lp6X5g9ajurAae3jTjvaBpYW8ajgyPshD3Mn5T3zXjaWzMrS2JNmf59Y7uXYXAbyTrM8d3T",
  "key6": "381cfGYEaYm8ukJBCeETcPd8VZmkJqnXYMgcQis3Fs74e7QsHPauJ3D9MnJwHubcM8yNf7VzvpHbtpb74itkpUEx",
  "key7": "3xGy6fJbgqSpCsiHEGn5pFR6gggBppbuZvPvUo1GX68gaHMd2ZcSwdT6mDfnpHiB27dVsdxKSYBZ42S28fSWMPt2",
  "key8": "2ezxPii19UuQy3xainXmxnLhuQxHoWdE9jSLZxhhxDRC9WyyqCh6MTCStjYLAtKAEk5rY4toGmpH7J8AJkbUYfYM",
  "key9": "4AW47LrnrFzLhxMcXWeTyLuDx4ANsiNdAZ9TWJjKhp5hekaKqQr1KpHMFuQAMvcXWAj5JPiW4EsCk6Vw4517F6aN",
  "key10": "4r3qCfsegt4Yz98ZMnEdRkQTfHnu3T9ezPrxTDwSTcecXs7Zc9AzTNZcfKxhyYEL2XoELHfGL9pidtQDYRMf2cr6",
  "key11": "3s4t7xCaLX1qNAfuWvNYaeHbVPYLz8JHrE3Hhgd2VGaEzu1APL1sSSyu8oU6Hz1do34i9aju8oJDZoaHQd4B1B4w",
  "key12": "3UW6ZDa4h4mJYd369Y4MTybpkgMUk1Nncsm9jWEA3BBTkwTEMhA4kB2WCnXicqCRDiwJ9qecsLGdyXPFirQxpK8z",
  "key13": "4yVZqwc4TTk5LjjeHkcBMDpCYPZqTvw6hdmDFRVmpZayDDyxP8uRJxwDXMVA18idbdLDKEGHCvnQz7916ivb6T2M",
  "key14": "3joTj4VaZezkMSEp4P3o1hezEPcTtgQ23zydowqYSVQjcJn3AtunoRAVz45wFMp77nJg39ZLbhKoB7M4oMMBYnym",
  "key15": "4T3o3MsvL74h994n1YYYVnyUkqMgQfTmCPkPjVMRpQFtES8JL2o2MxHRkLnxwEKRziFpZwonhujPgY4uHXf5bmRB",
  "key16": "4KWgwnmZS2kMSKoNdkyP3VRqfePBKeB5pv4WdaT8e1rCiJuk6mTpELXAXDevNW557GHMqSG5bAvuKLRj56ci3aa9",
  "key17": "6pJGxxTRVfyj2WDNefQ5d1RRVLfahR3i5vSpz253nQpYXeuzYLL8kXnYgyHUsmNn9S1iWtigLsAZBS8nj233NSj",
  "key18": "2deoxwbSAP2pkV5quhHfGrjZwyKF5zw4WZXGcuUrs6E4KyxWvUkiU7k36eqGCxCjRK1QWx55d1EkujtTVDxPyG1a",
  "key19": "4UvZYrj6HE8m4UQsTMH9NKdpLZXte57jSpL2hYZZBUeLiSGgrorU3SQAHHKHr9FpZb8h2UppvfZAftbzXze25VUX",
  "key20": "4Sj3TaRJot2SeX3RjFQDJr7tZx6RzyY83sRW6r9qoPSvsNFGAfVYFeBgz35F5BbdbCbosEEJxS4fudPfNrLCvP8m",
  "key21": "5ASmrZDV3oW8n8aEUJNX2rCMKLJQnYch7hti6CLq8GznpvsgQ8HwB8C2dd8NsnQYhnBgMLX6FYom4zjUG4XT4Uji",
  "key22": "DDJRKGWj2NSes6oEFM2JSvDbovecYRdScygwF3EPkmEP12aMcwBx9nWnqE9hX2xdWCJbYfj3VwAJ9Bur7XdxvYH",
  "key23": "4becw96sHYTDYmxvHkxXePQPX5h9Jt3QFUmts8Lt99w8SEAgYrNUVxC9G3MdsJgQTeEgwMsbYMaaFqaZkbRNVbJY",
  "key24": "LsMFD51pkj8uMMLsWjMgxr7B9ne9bxoEF5vDcEFaeZHTGuc5VPmKv3BaiSfogdwvkw7edJrHkNdFwXtksG5feGZ",
  "key25": "5LeRhNB8CNiQgU4MpxmjDnHZhT5oviKqx1yo6jrPq1jCiTe14vdBFzU1aApGJtg1UB7i7A7iCTLy9AeqaaETGnDA",
  "key26": "QXfdrLUyXPert72P8hrxKrGEUgHGuuxJRymFfYXZY9K3PVaQ3QjDCFWrjrz83STpZLZXJMoeYUnafHEgEn3RTfC",
  "key27": "54WbRfaMMryQwspmww4gjC6ZTYSPqPSiRFp6LAPJnsCxZ1bpBTLP4oKR55dEZdkrHzAqtiKus9QKkKAM7nibgNaJ",
  "key28": "2uWEd8NHMh15KQQBeYnD2emEBQVWz6Hs2ZnV2aAC7SjkAoW7Ys6dbpzpfmJB4wtG7mYSN5jg8SNcpfctCBgYPQT9",
  "key29": "o2Md6nHoE9AzPSzJexM7AzxzhAwKH2ohhcL3PqPjyQRyYs3wGyDCEpTHsecNMCLz7ofMzrD4Bb7ews8GddPPf5g",
  "key30": "4CM7wD64cL9scmh5yEvgg3RKLBzffo8Qy3nvZKdpEg57awnyLqMzwVGmJ5deTo1zhzTmipYE5ekyvLhKeq6jkJ3V",
  "key31": "249XgZTw1JkPRJnr9i8sqSvs2PP9J2XyVk7viY1fdLzDdffyV4tTX3dgfQ5THEfoJjMdSPUTx7SKtxEPcw5gbN7D",
  "key32": "5MsqEaU7hWDCtwW363S4khKhm7DMEkN6TW92rowe7yTCwbT2DK2HX3Q1k8MKPWrtf7R1qV1X64pyKbq6Nwm3L2Do",
  "key33": "3sZWgS9PkgK2Grid2xvX1Q6Sowk1Ej2t7xPkBL1FVmDB6zEwbkeEQKjk1fhgB6iQ2uQnfTPLeQqrxwRFQQwHzNFx",
  "key34": "2sbewHJd4EDwZghu1FV3m2rsFQtMFrqKmWFSHX79XsrAuYAUmdN2oktuzqFTdz3qaoJn6iMELDeZpH6sNj6RiabB"
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
