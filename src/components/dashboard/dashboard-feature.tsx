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
    "3BDH5ifaG8URQaft92EsGru5yapKpkShgcVsLUDjij6mgfUP6CX8SwQegn2gyoW6RQu2JN8LWs8GDbn9uJH3QYUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32heFocpd6PSx8Qvjj7xYFSQ6ow51qZMypxf7QiV7qBbi6nyMGys7T6b1Yhxp9DxRPzCr2h3Tv5NAVEvH3m7JoiF",
  "key1": "4jCPzXVJiJSForL9sEds98CgGfKkqEwH59HbpiRNvyugarHGpWsxiAEK5hvBuxbBpKudrhu8e9iMjoT7zyi879kp",
  "key2": "5VM4uoEg3YZeTo16HPvQGBqmHjK3UEp8b8wFHs2nSb7Q4HXcd7xJ7agVgRg5j9VKe9cst6tCfVWwQensZ48TG1vg",
  "key3": "4jFBBvQcjSgcaf1ZDajspskEjKcDhi2oz5Y1fRUdU3KEkCH31dGy7X4LDpfwX61fFh173bydM1tSbgitvwH8yBSv",
  "key4": "4oYofaWWwCLJ1i3UhNAhAPJizRC8KMejZyXqaxaR5UqhTDeB9bTzQYpXfzMZzSDTDd1QuENNxXg1dtYMbdejwCNM",
  "key5": "2WSGLyqxHrASSCKpZyVaahz3Mfo6XEhj14gGh2g3qdDg4MsV5jN369xTTY33DuuCvqcnW8xXSskX3iduL3NbtDDD",
  "key6": "4thgCqgsnHbXMkG52aKmTUvYxWnWaoE5rwRNVRiWXvrrZmUyznMB2msgHXb4K8tNMYJstp2gDZebUpFqgPkxXTC",
  "key7": "3oPjdhxFK4fnarp3DG6Nyjh76CHd3eAZqeQDSQ5F4bYcff26PsKFoRN1KdC3DukD1TFJctnXSwEur3KVSFYGXVRP",
  "key8": "WHHmK98LGD9A1TmTGg16EEvWVmkAfavc58zHhk5WkJNyagH7dMntNkDQdQjTdoKWrJexJjeDmSkLmAYsEKVbS5Q",
  "key9": "5nwEaiwyKpFYqh9fkTd9w2c1zRaQX8WafzAK5uCb67pbuFaPUGVMkkyD5Ff2Zjw1fPN7utKgSnuZse5pa3YrEMuq",
  "key10": "3oc6FGG5Azf8qozXbwEZ3AM9o25jzx2QPo8f7WviiJzm9MZm2snvZYvAG1Py4ipjtJj1niJKC2RMDoNFsSQoWDcJ",
  "key11": "4kZX1n5hPPnZZPF3FUiqgqNNsqkcr8R6XY7EcuGTNsHCjzVAR4TRs2Adgwm9SRT9C8B4Da95Pf6MeGguwu9kRH17",
  "key12": "T9LxmXadEBTwpFvtzWyhjnuwBjzs7D8EXgzuEkAtgeJSty6yfBRyYZHiLKkG2VJD2EtwHL2PoHZQn9VzBaiN9Nt",
  "key13": "2wYJMfA9boy83wswAbyYkTKqqKXrK2TvaErUNFzESMnMzrfiubmhj4DV3Hd28X1ZDN9uhEhjokifQpC4FQTspogF",
  "key14": "NmHAQ5jjoESepmfk3adVnZBEsE9FfjbZ4bmTvgkRNtxtGdhf2GqZmTBEv2YKYBscT1kJ8hB6MWQfiWrSQGBuhad",
  "key15": "35eZY4M5sN53CEcz3B4RhVq1JZmCXygPrqTVGgxQuif3bsBYdp5GdKWsSFBsZH8An6ZY6zAoNpsEMNyu8ZCD9no7",
  "key16": "22c8sNWEpay1ZD3KEgzhSbdcEddP2m1eXvHTJNYzjntnWHPBk75eQByp2bSQu6T2dW7ZunKLDDUaU7q2UznyYHRG",
  "key17": "45bZ2Ak2iQiEb7uSHNauEqnKfiff4DouRnb9Re6ZrjEHsAgmh3aLTNtvKT7KGCC9LhFxQgmgB3gonLQirgWjYQkZ",
  "key18": "3AoQ69wrNFRHyUARxFCdWNqTwPJ2VkefQib21ytS8a6Vsyt5xAaUwTvMY1WRdH5VAgnN1ARVsV3UJ6Wqw6tWiEK1",
  "key19": "61ZovawuqSTxet1VF5XAcah3uxKqvd74HX8CJKjq1wU8YaYnDDXBqkbZAJcMo3ouygWqb3Rbkoxp8hUY7sJ3w9mZ",
  "key20": "4P3gFAMXVoHqL83ytfY6bxjEjrWNYWSvdbBnHp2LH2gL8EEvnjsMnMDAEXZeMtvjzsTFYeePKtQNuBEUo45qzv9B",
  "key21": "Fr5YqWXxtuKaSQHTLAPzcV6qD1NKAxExikpZgESowQW3EtHYD7Nxfkm4X25ZAENwnh9dL9dywbBTboEwgA67c8q",
  "key22": "5iaTNauCa5ab3CZnuNv4CVQXvk7grRSP2QMvpfgL8PMXaKeBMnDtuyXrVKy2RN3wdb3u9pWfRNmGYsf8aJcwhTeV",
  "key23": "5BJKNMYvGsgbsXEPpf3GkqEuzcMohaYuWoJswQek78D8C8xFWRawM8NzP5pCxpXSX4rTgh6jopLSY8Wesy6h1PHU",
  "key24": "Ns9WZTh1yDqykBjfGfqnCqgHnN6ntCpyJ2WM8XwokMPaRiQkQQu2Es84TaUprGLajyeHDV257xYeCd2QV1wvZcP",
  "key25": "jFekULcDkJvjtxsGMHYdsCm6TrfcosYYSsYMDwF9YQzkMk6a8uiVEQH9MVRLRLkLivsXCSTBzzduxkqKqHUzK4o",
  "key26": "2RzRVgeotx9VM7AtyyTvVe6rNEtyQSX7159w8jt8Q6vMywvWsTsoJrwH65cSydvjwEkSFWswXpiMNUhbvMCTwgZU",
  "key27": "8V9fJq7bkw7T6zm5H9VtCYtG4ezDt86PhaDbjAYnLSBsykp8SN3wz2VcQemHjBjCNjasUqdTKScCyTN7Y7CfJiN",
  "key28": "4hK2WxbHoN1XyN7DYkMxeRS1SFHH4h7MB2XFqAy8T9R3HGwAZKvVzT9ktjQzra8gX64Rea4qwt16Dfz9ZwTqXND6",
  "key29": "mPJWg5FyUULVWzBhdjzCSNLKaXFtyP1GSahp9g4oMmaYV8DfhpvbnY3izp1D27vprpDN875LFqnVJMpJwXH9e8d",
  "key30": "fK4xqLGScwZiX1gDGkWanQaahVtWZUZMfN6vbuGvZ18sXN8mgT3gSTFWTm1XzPbdReQwaAqEWK7dUQkx2asoq77",
  "key31": "S9VWiXuR8E3CtQuq4PZGypK4VADrb6FT1gvYHokcnAzKzYLT38j3jJuuTTa5kkVndPkBfJu6yJxWSGmJ5EATava",
  "key32": "2adqg2H9UGCW182ewNAwK2SY5PZhsYW7uTr2QkJYDmK8pyvWxGTtnFz5XNNHikmUiWiwkUdeD4FbZfytrzcCPMch",
  "key33": "5jnYSpSMS5eR7yfU3EtGK3kuU2SAPiUzyprDByMvquPsdZMydbRfNvkiBknkYTktcuzbg3ouiW2VirwJEyG72Fwc",
  "key34": "5sE6GdeFJWeAWaUDwQDF1YCj9TG16p7p2t8XtniXhJa7JRcgry9DNJ3eGj3X7JcBZmnSkqrnhX4tXmAaKNQBq8nk",
  "key35": "4Y2PuFRF7DHXh5m5U4J9HTvPt85Ww3u79Rau1mPnY94jZDKPve3gV3x1UwxCyiXTC6bmaAXWNqV8cuMHwDMg8NkW",
  "key36": "65PM6YZDTWiXHecgcY4DPiHaehsycGXMgthG49nGihAXJbY2cBbRkPrJVLeSSpMZYebRZdN8SG6cKQcKWq1rQR13",
  "key37": "56vzVEsm853q71LNsiYfgTZQNrtwjxmeSBkDKJiCBq5AcKEbgx8pWtjAyWG2mTXduS6M6mRchDEdCELUZW7xgtZG",
  "key38": "2faheM2q1e9PTYdrUU4erP3X779HXdaeRLWyHF1VqRJxBbpfUB7ghSnF9pYK9kwnamYAfJcHYe4s1Exeb4NPJpjC",
  "key39": "4CxNtseji9ZJWBRzASR43bE1opbcWnofqSQ7ccU6fwoZgGNAtA1P5U4uvkwTCyKkgAcisda6Gi55TxfKjUAMXHpe"
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
