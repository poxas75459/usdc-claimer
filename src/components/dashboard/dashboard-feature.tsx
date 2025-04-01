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
    "2pyUknzH2KjkueGLLfbpyZ9q6cLMAPAqxnFiD9SjzMocp8EZ5d3YR8MvDCM6Ebr6zfauSY3cWHYzXcXcc2qdxr31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xUVp1QBB7sdrWPrxxPDp7VKKn4eFk2x7HgmeymWwrsgqErm5pkEDg6KtR11kBwtgcy9nV2NBLAqTHgKVzwdjwuu",
  "key1": "4At1hTPC288C9GswfBtRcq8HD3Rp6a1FmN1YsnppuafXoyq3NWXMFz9EAcBVy538xfyr2AYxsJErrNhoY9iAHPxa",
  "key2": "4T7EAFbUYq7QeLKNcuBjL1ZWUDwpU9e73ouMeawpcoqAmbejgawQmDrVYjYq9VWih1vLPfkxN4BZVhxuridDeva4",
  "key3": "uKsCZ7xyFUJQhy13m3bwTs4EgDiDdPZeHjrj5z4aVeSsKUJNbptkFFyjK1WqmAXb5v9tqUQsYB5fZhq6sNmsfua",
  "key4": "5fL63gNUzMPzxY6EoswGcaf1Q4ZoEcfjEfFEFntrnHGrn6mXzHV278n2cJbDTi7DJUZpeFH7MhK9rRPn2hXZqgL1",
  "key5": "47oD8WyJ3WHx1Tc2RQ7YaEycM5RQ245kckqwZdBdCx49Zb4nbKmqGcnpVbrNcwDYhnmRVM4YjjRgGKZyWWUxW3Wr",
  "key6": "3K8fF3Q4zvFXDecw67ar496dNvJciJvZeWnEWEuCt6Bmdmq9PWhSQxkrvUwytD3Z2TH9rVdzEMABDdvDXgGfNKdd",
  "key7": "39obyoMeYTB9sLosB2taPwspVCH79yuraYuPGeFEEZ45H3z1j4sg9v1zEGLbqDPS4jmhMNapqTjmMSnCPe6HgZP4",
  "key8": "5VMHiv6woR1mtRjd4svyKudggAMMUC4b92RfVdJPfkpkfqMhTGaCYuB78jBNbynwmmjUToxhEveYToQCtLysdY6r",
  "key9": "4UiqfgQYbQYhepVeGVjoDz21qHGZGLayHydkqbh3qiT2NR6yowsh5JCNEXPqcQMKqMHf3rbxRBKG8EG1nNrchxpn",
  "key10": "2k8jT8RnEYZUaLJqY8KFnr9ksbjYP5dXVzRmCK3QaTUDGMBzDv6GVnMXjCtiC14E33KvUnyaKJBQtbvkcT9yv7i7",
  "key11": "3x8TKh6mcmnojcfQkbTtHUkd7HFqxJ6gSiAQzCWMBxKLHojLekH941cZVofzP9fE3s6orwaSTRBY8T4Mr8pyyNMf",
  "key12": "677G2J3W2wntDHyKg7bqBVbZWp2cWnzZm27mXtXxm2XKwKbATnsmQyQGXbBhYJdKQMrsWsjPGpizc1awwJzQ9hNn",
  "key13": "4nc2byCduMkf94uKvhfWEn46KKtXjENvhgfW2UtH9Vm89Lk632oawLLmYS1FBiHL5gGiqJ5XsjTYMT1B3xB5uHZX",
  "key14": "2fwCrhDSTuHXdSAjY2yTinK67WML5DmbUhpMsttBmvuCNHj5L1dS3toJvRahqxZVucJxav3yWZDd2ssiGABG2F3j",
  "key15": "4vomjfnmyyRtG4YensYCeThEpY52wVVSvY1nySx9tdhyaavgcYzGNwqHswBh7N48EEVpqDU9W4tNoZK42Wur1LZV",
  "key16": "5m5yAtfgqVzaHBHtHCrtHKfEUoYnijUBAksTYyckgYJdBMskv1vk8tXBALKDZbiXbaRBEsjXWVpdQUs2QZzm43Bm",
  "key17": "37SGXk3YqoNMZ2Nb89icKdF3VRw4GD4TSLULcmJKpv77FFEJ6xd18HPe9NmATsSvJmf3pfzbP5e6fAcWetNMsPYR",
  "key18": "2GdtK3kNJP1DE5SUEqriQpMkXUq3VgmpM1T6YSDhKBydyzsfFcoCEFKWX8E8Av9zfrZBQjHi1bfymF7EMxoe5LaY",
  "key19": "4TKS99tsho7KV8NsDjUmNMdmqiZrPupgPBBy8A5HoDtEFx6Fxufehyh54NLVQnrUKPsfqiFJRprKAHtWhNCYUAiu",
  "key20": "4RP8imuXTHPuHGNiLgzoy2d8nwXXuLZFQk13iVemiUKTwxhkDyJndibVZmNY7HDpZnCTtja5MuLo4R78QAJ6QQAX",
  "key21": "U6wE4VMyq2GoyHmdoLEbzVWZvQiFNVstapauL8838Mk6DoCMF3c4c6xxsdeE48f8huyPn4J7HqZwphQVAg9Hpvh",
  "key22": "4xA8ioCaK3HRVPuXCzdZMhAY2cKo32Aa9dVixXMPusbt8aGn8AKt5JnQU9W7qMmBf5bTEUbj7BCnoWq27EciHeeo",
  "key23": "SAXjvYfWSX9sVA4VCXzAUX78JQ3VJbRfQuRpjrQ2VZZb22mMSs3NEf9cZtcdQdp3gyAYPoSCaDp3YjdHQq84xKx",
  "key24": "3mfuKuE7JqAZVznVt7LJD45HvVqGqruddvxBXAUKuqkUm6YHebaeXs1n4GpcEC5t3WN9nPHmmi5eeaSEy8TL2whB",
  "key25": "3fYjpxWKPoaNuTF5JpdQTiMA8Hm8zSdX3xyN5BhhSaWPv5K9dcXyWkWpzAKzLEHkLcKi3SNPAV2Y6nmihRXV41DB",
  "key26": "3QRdLQxcP8TgZBJnzXznnMVd9wrTwZtxPEEgX8YaToDpTH7oWwmQuNqNApEBLdd2QkcwmG8wcaQSvE3vYvtw6bc6",
  "key27": "48w3gJFhZx21T8RqqUrHfSxeHXuCmicjcLhwn3zCYThZS79EaY3CtJot9nFKpfCE36gzE6HbnDoWTkuQs1cJYUzT",
  "key28": "4VFcuh7gt4MfTZdwXwkrReTqz1P9eBB9WgcJT8McY5V2JpX6cLRufMNAsz1JJ6cNnsFnucGQG3VCfGqbzWZXGTkK",
  "key29": "5BYzAvBBhhw1EkdFJmxZqL1MqDsERXWxQ7QtBmJy3okYV9ndRbdEu57bn8y38QyXucM5NwiG8EJV2oeyK7Dy9WZv",
  "key30": "3VWP3nKEawgFxaDBf8iqVoYvWWbmArnUE66Njo86Kdx929qKvuWadCvCK4JDPDYtXNSBun2HSKh8bGvgt32Q7eJG",
  "key31": "4RpZFNkwQDBmsNLSQp9EDxkhdnLqoKqWTrWZJG6GEqPWTXgDJUaRhqSUWeuHFCnv1ehFFqDz214H1BdHkb6mtVHJ",
  "key32": "3wDYDhnTGczXgc3YNybDkg3f5t3AwFFAzoQrVB2kgN4mCwhUpcKeb7Pz8qWAdu3gqBc1jCmgZw4Je2HftQptE4o1",
  "key33": "4fFZ4NVXGwyXZa4s4fUYfSGScGascdrEf3zifRMkMq1Ln1cZKhHhMfrAzzjmFkzgohPwnadwzLP4KZzefGA5ajjx",
  "key34": "3RjnxNaZcXAZXJF6nKFzssYgJ2ANzt5EowuGsKTQEn2uYXcBHnN2ubJLFnEa9eUT2mfqKCyXE5awu3WhcBWWd8ay",
  "key35": "2etVfJvzp8wj65eRLr7sgGRvkbMHaR1SM9o3uANaAzTkPQ9xGhzD8xCN8Jsjuq7j4UyvTsQEb6g4oQi16H5m9k1k",
  "key36": "4q2Ck3MNyC1v61ep4n1jwQKwAgdVmZuT1WUV6XWx6qfXUSQdTL1hHuk2wCJqdDHPGftPg8GK7z6hBz8rypGtkvxS",
  "key37": "3oFLQVdG1mnktdAGBjd48x7CZTUjpDLeD73DDZeqYTgfroWimbhq2Nmd1kHMhr8ac2Nrc85j8YiEkBDoSP6vLpmz",
  "key38": "5mp8ieMwCGgdtPXAvBmJu4jZQXuJsr5nKXJnYnrnwrsrai35FHU1vQRvHDrm3Qxwu4WY6gEHHH9PJAMyD8RCykax",
  "key39": "7F6HPam78zBhsHHSxTmXuHpemUGyhgscXreLuk1sjcZh5P3kDidxWszXqNi3SMcC1UJ2bdbwV3ndFUSNRM9sZCK",
  "key40": "u2W9JEKPFJHnQPMMSfD2SbhLyiKEn6zkQex3wwj9PkDRcnygy8yrrbTEwymV3RzRp38FvAJEdLjuWU1KXbQaTym",
  "key41": "5V3SeeUXk4kAkqx4YJnAdnCrXkWEGbhdCm4JvhPRmGXFJsxekVmycQwHMcd83exVEXmKEzfymMP1yWZ3bGYNGVsF",
  "key42": "2UBFhVvGLPr4v4DTRKcXreMbyFrEpUEo2Binn7x5DVUm7k8VkYymj2mQExVXa1d8Z96hoVx8bsu6jkPZ7orFq8Xx",
  "key43": "3LtWgYJscXjtrDKnewD3DtUgGAgUwrKgdxHKn8SXi57KF29sgmeAh28pXgERG9x52a9F6zYuDeomDviTTNMgdVnG",
  "key44": "64Nh1e7UTNQcXSuRcPuFjS7Ypk6EKbbyzQv44wN9hy2FDnk4oU1EeDRzihK4uomjNjKHmi4jvpeDcxhmrU8MiUtg",
  "key45": "3bx29JiP9kr5FcXeVVMyJXUhov9uwbDmdRv8uTyhd8hDg1CLJX2f6sppm37D8gxXu8D4cHWvpyHtXqhfqJAX3Uhr"
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
