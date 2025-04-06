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
    "38qAvdc9cAj5h5swKZWgBijFW3yJaEiKcTPPxABnzE6CCbgaoWrouvBn4HQa3LBAaBm9uRq7yecKBpMRR7kyDjTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aNc2L4B34rcTZW7LcUajimHFAN28CdBzhsxf8DXWV3h3tqx5qAKXAKKBXP7FHeefNmYcd3bdJ15j2J9qANZD9iJ",
  "key1": "434pGX3hT9whK5rdH3euMnGsTaZJXqAQxpJgdw5yKqiMc54eLTJ69hcBxcwLuXHRpKbGLo1L1aTymmNFSADdqXGu",
  "key2": "4U9xvMq4snSKzx8A6RaVe6dDCJWwvZfjBCc44V1k9tAAmgdL5L12ViE6Guy9Xf52FYsynWznm7StnEz95FeKuab7",
  "key3": "2AGVdqYB2Kd1b3qDHarXUrDEcs6MsHWS7ejw5XuTXtP3SAq1SX33w6G92GQ2jAruxwgmq5rcU2tZxmhkhqbNtsHd",
  "key4": "5JRzDbccaZnhwthXCZvm7wNqDcxSpKsqJcrKdp5M1s1GaD3dRDhZmHu2osA2yrKV7kciFfrbGspA22XZMNLATYPD",
  "key5": "2XdJXabMTd6sB3qHiH3nLNNjnPFJi7fNjLXT42Z2CK9NqvQYNhsKR4m7nSTFGfjAVa41uVqmaYhYfyojTqhcDjve",
  "key6": "2m9pqLKWXURygnqCR6BPkKgoao5o5PKxBePobWctBiMLkKYCnRmSb6LLLGA1xuPMZsohZ7bVSjtigJBi2hy2VswM",
  "key7": "U4SSqoxWohvRUvFahgXU9MZXcDFApg82cKRXqCxqisqu2fz5LsbA7RZAQqUChk2C4VmGQ21g5DWGFQdPULryiPk",
  "key8": "3QJD5Xbw9Qq31td118ikws1vZS45Ydi7HSHDTtnD5aaC9fAtMRLb2H2M6ECeAjBUVQdQqzgr2GmBYW49a4wCpBMq",
  "key9": "37pxBw4uiHxjJ9gS7CBLfgiRbW65NwPabziGZzwb2QavwTjJUsvUoqoFvyjxrhGJ3XeCuAdwFXbDCXA7cGx6rbud",
  "key10": "5v3ao7hXg5HqVbPNamXGLKBtfQHWxgMyHj9haGcwSfs1hqSedRu8dFYztaPSBm6hpcvr2ZSc4PNiJYY79YgomDsq",
  "key11": "BZ5BiDo9AN3WzB6aD8Gfh24wEn3ZzfvZi7eHotnvKpBG6du49wX2fhzCHWgpqnd4cp2gf59jg8hdMUDip5fo5wd",
  "key12": "4NZkRY1ippz47XbvmquEs7szsw2fQxn1QBee6EHd1qHPca4bceiThZy8nQQKCJJRgSnBTTjUpVa9191Fc4DXKRLJ",
  "key13": "5Jdz8khute77bC4SnKpoUSEmqdc8s4VMTKvXJLV1fVSnikZNNMAB8bmxvwXmerQW6UwptykRPdbmF6KKrEBpTfSL",
  "key14": "DXz2f4Y2GumXFknepUQzg2nQQfoXS1QyM8gi976a7q7ia4BEgnqzL6jfBQzZDSJtWkqSMBAG4F7ebqjVuNr6cMm",
  "key15": "5D9MB7UjLvYqHvXm8dFusBAwQkDT8S7g9oCNAXwX4CdPfJ9xGwchMqsWWybg4GZE1pesv4ziehcJCBHouP2BCpPD",
  "key16": "36W2Nt4Hyq1DyUSpCMMKLE9YcQ9TLz9gU6jiSaiEShK8ZvdUfkv8XNrXivcu2x3qN9K2EFfcC18nujFTYv3wAKH3",
  "key17": "4Ts4MAsPuCqhe4iN8A9MnqKN3r4JDhxqEE8Zv5Ko9stpG9mZ6V6RBJCM5jYXSAXnQ6HzkMrNXwjwZGKWTb5Bb7gG",
  "key18": "5Z3rBapf9TdJNRjgr2pNr4c1jQocfBpeb3775c3gen1YnYVXWhjrE6m517k7pmjfmQY4M56MUQKybVUV5B4pZfH9",
  "key19": "5dtVhbyeK8PziVV6qN9417Ce2jWck9Ad1TbmmSLTcfZgn26Ny6ZpgDqQHkdoXbVoRUB3nzWdm1QiVFqBUwZNe5Dk",
  "key20": "62Mv9bNyiNkE3Ki2rB8te6YcfH4pQ7nJMRz26aZ8fpM6ALR9GSQ8WV3Xo7ZJEYrzajhYt7mkhPnoSqLP96EXU4gd",
  "key21": "4tMWeZsA7SMBTX839B2dXPQpohaGuWaU8vsnwjVy6iLP8AB6r319fbEt83ZVQbsxBJptC9xDk4GXnjcvgMjQ1JVH",
  "key22": "2Riog9UFG7DMEv6YmcxTDAhd6qR7R5iepgvrYSKz3n6aLc8hrFTgSNa675JjYuXCViRGD1GeebgTLaEijpzyNsQY",
  "key23": "38h9D1YJJBHz7AgAQoaPgrvNDpBg9E5gKmK4Yt6saLwku8iN279QhhUT9doLepaRjpJeUquhprKS8d1AixpN3iqJ",
  "key24": "3Ljs68pVFVGpuoLe7TaeBb4gdM3n8NBb7DphcFL4Sqn1Nb6NLvYYZ6ZuwSqTzhsxMYtFTKGDg3SGAyMPqTKvPNzX",
  "key25": "4mY4W8jb8TE9RPPCCMZnrciBhkPqgp5tMWhq8oRnwv7xaWf5WWHd29VGaUsonunn5nxafTs1Rkh8x2UYsxvMsJwv",
  "key26": "3shCpvkAq2KWwGZYnt1V6T1hBUMgQqPsV2ESxvf1mBm3uZcm3jsmfDcFdvcWJsc2zzssQzmMKJGezmKdwizss7wa",
  "key27": "2a42shEdhNP1BNoSeMMMXEzFnP5uxwZMmXVEgbUmkWtiWs2auVemtVk69k5wA3tsLkTZuFp8HKftkqJG9JXdjYMZ",
  "key28": "5EQjgkRXGToPMVmtDN7i7eYRpgQKAih9knDswZo87qWEKmnKNHGLoSLzTxj4Vpe3tqoW2nKaMypzsSR5tuhP85DU",
  "key29": "4TkKGQh5KRyLJfuEHmeUPbmh7JctcpbvvWY96pCBrBvUWbfEHZYtQRWKJFakawVoqoiQk4bD3mbr6csAtE7ZKZnS",
  "key30": "3zxgNMCZgf2pAeqCyL8hVXN2SrsS6Xyry5MuKud7HFa5AJ32xUnEvwxTotXEgbHFJ3Tsap8KAv8GDenmDDFuqjeo",
  "key31": "o13L8hp9GL1ZX3mRdGCXSkeccpcCvbJvCk9f6HksfYvfr9KpWkcXZjst6ZpaejQpGiq7YgpgQbsS5i2SrupX7gK",
  "key32": "3DFMuQGNfJetcS3wPsVL1BsLumW89vgde3a1aiawmykv57UWNPzMafPrGG9kNCT9BwLW3jY3NZi8MGxSWmcZPYHj",
  "key33": "Ewme8qkRbauvwH2mNbYwVLyQcFh9LmYxQmGAThJhT1HrjZ5WNKTBJXLyRmm7q1pPFfJnnvjbvw8qriS6LxoVi3C",
  "key34": "48YLr8qck3arL14fC82Md14V9Xjr4zrc42o1SoSGKSaHVxo96uxwXxirz8d6KebgDC2SvoNvxEC8mP7LcWLJm4qL",
  "key35": "np569Y1xEWnyY1YG4dSxzCCzQgCWXcRQNLpTvf6W7ccfRtz1sumPk9TXQa2pNbgtJp3eUGz3kSGNVWpzu3Ut5sk",
  "key36": "AwsH1oLVmppUSAw25FPLwDDQvZDHZ4HpctqMncnn2ys6ow2ZRu2HAADvDhwE6yQBwhY2aVAH8dCAGbnJz7FRM5q",
  "key37": "3LAFRbCJwV7aj7pnxugH6upcMnVxCGPNHfystaWMP7jBoMqUMQgtQmEineyaWimT7LA1Biask9Xqv55AmGdtyWmJ",
  "key38": "4yxDGw4umyxRgFBaZ5nSTrFdPVx48cFvndJNDkPgWuxGaLDgu9TQXAwodwwDje6gVY1vSphovMafAdNTVYtAmYpo"
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
