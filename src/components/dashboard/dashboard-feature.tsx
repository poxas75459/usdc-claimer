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
    "5s9FHCZiRWyttMTwKUbL99gHj1gcQGZ8gfj3YkRQ5ZLSzw8GNRfeoE5oHpn9PNR9phzPMyDvvEb6unkSNoa2CJDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tbgpfB1Hc5PRNi9dHtwzLNcQvV57QRUnVZcrYPmwQdY5qY1JLeWwpC6jQJvYcPPnKhN8P3Q3bQrFE7JdwVHrqHe",
  "key1": "5oXv44jgKeLr9CnkoE4iEdfxfK7fjRMxxe4E2Mvi974dX9mi5uKkRPeez6AmLfPvkQ7WQn1NXqy3F61AsX3tobRL",
  "key2": "5LyiDRfZXgjGFUsk9sPteCJQfXZLqqcMQvjZjuTr1xh29QPTf6K6ePmfLYzPUs53m7MGNiT9mxPviNAcAz2mfn6Z",
  "key3": "rVNjrjmUfW2xnBaryeiEdYoig2RUMbQAtdkgyyix2Zoj1PRyfQNfAMah3BN6JfSAdPvkFbkrDTqUNPnAxtMu7Hp",
  "key4": "2JfBXBeWRa8Nh8RLZ4hi585spKFiX37FLeGSuU9pENPmZXS2oJFk5QHfp1UH9xNHBbjgM2RmPemdff4BiR9e6BGA",
  "key5": "2K2zFiiC7V9nBLBvckMq33kR4iYmvWbvsiyGYMsq14DpdiyZmEj1LGxhTYPFUn5tw5VAPayhsP9NFbyXzMjuHyDS",
  "key6": "2vUeUFTnNBR7WdZ2S8jcGbt5qh22fF5kpNQSyoHp2EsJRYcRY7narfWF2VYnCgQZVk9LcvKy9v2NjgMkLbzBjzNS",
  "key7": "2dXARtgZcpRbnY7HxWBgX5YMrbf1V7y8qfrzaEe7b3vuo3NzmPYCvdNaNCFjSqb7nyDvFhpXULvEkQpGDkobS1AN",
  "key8": "3LjheERSCmer5g94ESxU3vCpbbyLcM5Zpx7RvgFoNzsxMZneA699JsfjvXsP1YiFM4Xg7rWAM6yt1UpdtTSt2gUv",
  "key9": "3aQhQaREXBk9FCLLjXw5LjrLZhmSSZMALWQ3ykVFY53Sm1XYkDizxF2LzTfh3zoBiUC4U3e4jNvdpKS3foQh4AMC",
  "key10": "5BM8B2L16gWRngvRF8pyBHRDan3328GUmYuCcqseAad4Nw8K9h4tTTShaAcekfkQfqSq98UMC3FPkMkTWiGCfNdj",
  "key11": "5jDPuwaZJXDKdTZxd68HwUR5vqg72iShR4McyeoMh1ut9m8P5uf3vDDv1mD8rTjhst6dVfM8E2BWuGh7CRvpPC7C",
  "key12": "5xU8wgoV6r9sKtZKFEyFhnRjUntwGdKBitSB4p86WUMNBAkqPDwxQR4kjE6wB92TLVB4EpXzysKG69VXGiRAomuP",
  "key13": "52xkacvSZi5w33xV8mbumhtSh39PbtBjFBkc98vTBnzAxfCuJEh185cwEhBnxXW7W4bFR4GP6RUURJrN1zdr8HtH",
  "key14": "2YQbEUd92CN7WurJCr1ktWW8Yz69nvpqZqwRSbbNDBwF4DgQntE6e1ooKCSrz7hebfwGe8ePYgt2eh8t76so2CVQ",
  "key15": "3n1uDkWDQJqDXd2ECEirYw2EZpowDDJp5BDe5Pr2LSRpobTpo2aMSqvVeUvcnn4gnYeMYkiRAjdAWbyntAH4cME8",
  "key16": "5dUcdDNYo2z6AsfjekU1yq3u3cvdZQjYPRuyiYA797EuCFL9Nm7twUx6jxk9Tmjzd2y96sQ3CNBzc4xnQ9mu6hTM",
  "key17": "6L2UUq4Vhv5pi3styxE7fJ5HD311STSUuYGxq5njBvducT4fnowrR2DjqsD7C4c7mxHEouFVuK8CnZ5CBEKrPTZ",
  "key18": "VrLVEbBHAmdAnWj9JzKmwpvjx36yUD89KkWV9UdiJM1foQbFAuk5AGqvSJDDffLWSCJ2zqJ8pT1Cz5UjrvVXN7g",
  "key19": "46EFi6rN5MY99ofdbmQsv1UrUU9b5ZDGBySgQJgYnibt54tx1Q4u3jYEXb8T1k7o8UdBgogHVMBNjzBfUXCKpc3p",
  "key20": "V9tn6avqq424Atnm7eEX1mXE57Ls9ywZ5Q9pMnRa3kZxzFzCZA3zxA3edVkRWjz7a5B5LgRcHE7kLZvxUzweeH3",
  "key21": "XKtYhtZPJDW72BpFS8KQBZXr5UV1FVfFgVLnT3RRjKU6WFtwFUpBkxSs8CwqnnZsfwza3n3s1TcqyHdLuy4rV5U",
  "key22": "3XNTBdX9WDtXp5PF8FBC94BtH9vVRQD2NByVhg6NiWLtowi5tDdmG8o7kpGFd2ZQbiH68koBgT4vTfx8LNcPhMxA",
  "key23": "3sAjpUnPWmKFghSXanR8pqTSvJREUBJw8nnraYMCS8zjHhfQqZqkErUcH7HVBHuqRH3FRboxQhY79934CPYRdoZz",
  "key24": "49ZUn5dPgQFRb8c7qjMatt2RtVsWgh1xg65mcRS2BYe6fQwn38g3nJ3KQxyv3qdattHVwXc6pWVNpP6e3igUHNMp",
  "key25": "5kuwBDvaFXT4QwJ6HkbB6yEdcasHKZKvRJrEi9YbG4eQ3u4uAkct4TdSCouciqS5s3nvRHnPRoTey7eTmeHL3qqK",
  "key26": "2gkJafHtBxpnmmjhyvWLENLfJbwmuFeoA4JjGpRnQF4cQzj4gW61XtNHAxxS5DGqF5Fa7JiX319W7Uq49RcbitTX",
  "key27": "4jnhUB1eMG36Nbn7p3ppqWBsvQfHECeMwB5FK7HPN54gytxP4TzZ7yg83AMZcjEC8WZQKmoQx2y3yTeywrU6GrYs",
  "key28": "5y4VkQKMwzvAy4S8WLzvnHWC7xWWtaUh6DignaB4XYRGXcZHnH3b4JVkJwefeWJa3Km9eMoJKSAx3Sa1YzWLTyeb",
  "key29": "16Umihy6cBEhwWTYym3RCYaaqW1LMDUcjcRhLangjuzgizFmtLM1EGe2bP4M7HESLMSRhW97LvVK1k8qbNXfs8q",
  "key30": "LuYHUR3CMNDRBCdEo5pZiYjM5QWNdbkiB7sBf1iTKZYzECGBBVis5gTvjk2bS1MFa3qrN8YYms3miYAvLS6vCiB",
  "key31": "q6SbrujkyjSc9SBqyt1uPXDUA6qVMrrsKPG4EA9E7DC5cjKzEiMVbxYdSRXTtsLxwe4wJGyucp7yMF8iiBYsAgU",
  "key32": "5n9ZC484HXbBBkUfB6KaJ8HTs2NoYCwT7rxyQduB4kJxDCmpKGFAGEFqyy2MyEzTbYFaptfBTnsNW4YfqbJfBQzo",
  "key33": "4p9rLjJXE8Zmv8WGpGCy6vPPjFRG2u3XbtLXT9Da1PcwMmgrokVG15TKD9uahqNovLFvaK2djMh77xmjpfq47cZe",
  "key34": "8Qai2rhufjq2uoYTX6tUz9eReGxdustSdQMdSnigpRzaEeg79tfxGCpSeS7ybKayt9M3XBt8ULpr6mBLN8zqGEc",
  "key35": "YmE3fjKxrnL8rtoCSJ1vijXbpQdKRNpubsh5ZixbAV9Mz9dRrGMRzNYCkwSdz7LKZarn6j8XvvCTXLjSczUJ7Tx",
  "key36": "4xDC7Q4PnEe4u7yXueh2RnWZmmTd6ZuRF7ttCZ9zGSATYBe7yUZw8hxG6NeAkyJ35pmRzkuuP564oA5vDuqzCh34",
  "key37": "56o1wLJ1Mvay6aaUji13adRHManRNknbEL1vjq1Rhi3bfCmKUHrQEbrt9HffzG4C5B2uTrit5nmVkP98gGGjuoCX",
  "key38": "45xzGKtWHRc541yBvhZThZtr1PnWzFGjcymFxBbauZVsaJbZvyAVAMH8J43G7bXzDBB3iekCMG8DnJMDZHrm7ocL",
  "key39": "5bH5W2UYQhTECPzL9t2aLBXwLvkqSmBJmAUEnaSThMaosSDUbRPYdnE5EF8FXHcVQHDdpwApk3E1EJnbPMKc9cSN",
  "key40": "2fLWxaraGjzyPD3RfkpQtcZ8aF3cE8tkPmZpjn6tjWKGk3ws7naf1PyeizYoAc8nM3uATjuAwEe9f4Tir9fu4qNt",
  "key41": "y2i1MJ2xdCSKNLe5uLL97WMuZehVPYmcuxdu32j9MGh3ZnKoe19FMJNjw6YDE1Yg31ij23cmkGBVAponqg7LQRu",
  "key42": "NAuLFXMpCE33wKRBAq961o8DWp1E3t3EPQS39a7Axv9wpQQs8QiZsKgCNys22gfWNED8miBjbvYiQ1RHP76Qb81",
  "key43": "78HoQoHwVzVWP8TpG5qK96W9xUH4jQQFc4NYPcQDSSN23AAhg3UCiDsi5JmJZyWv1GZxCpPrdFvbM5VQthvFMNW",
  "key44": "Wrv9Kj7eGE9aEDDZ4wcQbGvr81nb61hhKZ9aF4cHQSBasty9rnNmBu2epVuQ9goyMFiAZtD2vne6spxKBk8oo5N"
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
