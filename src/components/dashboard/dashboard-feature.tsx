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
    "4rbMGKT3oBHCwijBqEtw6HyY27pQzDMCuu8EXVvotcZezyXnoz41L6H16GdN5pFBJwiG3dRxboNLvnJis7wHUbGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ThkwQntuiaY14o8KrrYXhREngpK2BdMrDGQ6y3yShr2TexcZ4cn33HWMLH9QJqCytch6LHsjJ7EoLiny33FyNxQ",
  "key1": "3DviJFhuupujndVt4kdLVZLonyp4VddFTo3JM7vuGtHchzeGjLGCc6b94vFACKqWG1TaQKSfBu315i1pfcdAewSW",
  "key2": "2UrL5TZQgW4WfSxQXPgYDipeG1uJqcFVntCWcSKxQdQ9fCWWQCMPaaD85Ee45zcfoPZLHuibeWkSpcCmxELELJub",
  "key3": "ZbVBQksiaQNoHTQeu4J7pgDCKUuRAmXs5ihwjqusD6Qt8SwxAwc4JCkuud9DaRDWXL7CEd99ACLusWPmAduRsFu",
  "key4": "2H1yuDSXLcCUZvVqi1SqNR9mWsUFLUUNzkkcvY7iV5g5sQoPYuYVjuGThJeqsVQuXd4ts4jVebigY4QsfRxhf8Vv",
  "key5": "fJ5ZnwQgynRqpNzMXEHP52Cma2BkTLxB38aUrjx4CUUxQUjWgTkXzT4BQRA7HEwzM7RtHek7uBygndqX7itmQRC",
  "key6": "9cHH5gB5joAua8EjzQ1vSRZsmFxRCGdpp5a9j2wHTp1jMggCD5DcDApUQKvYeGwA2qUTiMrYZYHin7BLfAGqMCV",
  "key7": "27USKaTk9HUo1hSvBc7GjyqU1zqcraqPfCMqLY1ugyPusgvj9ed7ni9M5Ken1gA3VHjx7uv6uA6YwU3g3M6ifJzC",
  "key8": "2nJQvpGsoHGHBhtjupJCMTC5jqesrmxBs81YQJy1o7h4can8EUf5WdsRgyzu317zJh6QCuoAAEt1u7C3KhrgDEfF",
  "key9": "3HfM4YRW6p6zrMtJN5DiJ7NL3NhR3zX5jErsgf2tHAuExTqgU1FSzTtFWkSQPec45kwpMQoMYtkk8LHwFqu5JMKc",
  "key10": "23E3bvN2v2SGziANiXpY9TdcgQZRZw2RLD6G9Eqy7Xoh1hfG1XjJ9VWAUgChyxspFWPLL9uaigTkDp1Jc7FxWuTY",
  "key11": "3AkswLwZU64Mq4EC9E4oLfErSvhvWxgc9g2VmmkM3628KS6nXkMhTXZjC3CmKuqz3W8RvWKsPD38ER1SHSvop7de",
  "key12": "5UbSWQKFwPbobHFHwtcR66fJoLZAgGx9HxDPwPADt69p6WpKK9fHuKrMWaBTLyjJAio9eA9rZpmCQio3ggqWKgBT",
  "key13": "52ZGnsZjg739X7CSNe6uTTBkMLSkXDMKvXetx93NLLqDDQrG1WDMQS8XMx8ojAweMC54R93YFWZUYNyXg6y5JKZx",
  "key14": "4SGdqM57aH4yBVrBwh5P4JVvKZk38wURFwvYBFtT8rCMM1VQoyXcNrhkmgsFB6nzpscw2WtwpUceWTJNBvguEWk2",
  "key15": "2skjXUtDX7oYv4nvGz9HHrEjri73wSNbXTEX4v4Kx6usjhpsjdVPDH5hfbVR474dQRu5n8pr5UX1GQCrVk16F2dX",
  "key16": "5fC16cSJeQFnmQz1QjkssxCxUnhRTNG8grmq1HbSqRfaKrKoUWTKWZzztPksoFfQXGdXfG6de6uFLVpujGSJHxfX",
  "key17": "4kHEtr9TmTjcKwntXPUtnshgCkZgzwV9qrfhiNPt6RiCdn1FHwQ77UH2uFQQdDG1cfhNVqMUje1U5qh7NiHsk6LT",
  "key18": "2hHjnk1Zg1jWMvoFQrPqGK18kpHtNxnF13AX97YHa3SzRwqc26FnJtYyXc38DbJjcffxS1znb7pRvqYQttQeNtSo",
  "key19": "2c2b2bVtMrf7saWUqLh1s8jbgnya19SSfv4ZwotoVqNpHkkSRDt9CPkDconh3PLYKrp4FZXQQmpWypvC55Rmc8RF",
  "key20": "5M5sKs2vyXASdYnhGrQyY28GYTKRrSuJCY93Xta57LMzAeHUVtn8BsPGt2rupKC6yCTr7gCmnnVuhgxfQEMjooEF",
  "key21": "56a65nWgDJbjZ25QJzzAuQJmZzNuZQUuN14RVuhUnUX9VhrtHhrqwyPi9siJgyWpYsXDTyWk56g2XYrtW2f3wfvn",
  "key22": "3CqzLTVdg3SxkV4NCygkvMTa6MfSao8y5MjUsnkNzD9BRbg2AwgkGpWekfasDXbibkDTgV8rXpxqJZwqY348DNWm",
  "key23": "3on9FNt1S6r72uMhsy81b4zQ9D19fWPDopQQeNkxDfRqqoX7ct97KMgRqRhcw9DpRhCw38NMuQSGvgycL3zruVdv",
  "key24": "3H5ciyFTpd6sQ71oZkk6Km573sCkC9AKwcp6AWKDychsikMor9PA86cyapS2Qby2KQ6g6LrcKbYFtSBouC74eQnL",
  "key25": "4dx3GxNXhaxVKdfon7rLCAhRqxKU7bnTwUUrUwho6JeuvK1wkwLCykCW3WxUR3cgzXnwuHMWn69isMd7iTgZcPMD",
  "key26": "5Eka5fW1L3dEuFmtATWEtGqDJE9nZUmL4hGxEivvobteT1C5GNUs7GzxXKZHxiK4KEycsxS9qNAQDGYApna2ZzHj",
  "key27": "3tmuLjdrjNuaMVbEnc19AJz1PNUF8i1yuAccVNede6YaSrPu9v5KXxz82xVy6qKPd6oA6hkiRJHMBRyM8jdnzAt",
  "key28": "52uFVyrtdrjgpjmMTPNwSLYPsBn7s8vTzWNDfwJZc6va6T413XhkQWogmdCEFbcPDgK17ytbnzExAai2vuyyYgo8",
  "key29": "4751arepfV8X7XcyLn2U2bdtneGkTJEHg6MJX4NV3UZqsFE22xEvbTDyQZNjqPmrMwAQfYfN7NB5L7JUdAL3MFL",
  "key30": "4ASKfK2sMN3snaM6iEzNeytAinVReWvsYG9rfrGFo4WdCtTq81bRVYqcarCCSsVy52XwhRPRoNYH9uDvEBvHDWcK",
  "key31": "5uZ153ZRiYRiT4gvvSTsLVwAgdd638tyspdcaCpXCXKwPATxpPbSBWFz1ZxViRPWKi3XhNc7afCzvQ8u21E4FBhA",
  "key32": "3KtsGgYbdPc89bFi9TDyPQHQL9CJFagonemvNDer3Qxi9sfiYdQ1UBUa7CxgXLAsF1bbPD3gaVQcg3bFgyz2i2Fw",
  "key33": "4xSWfQ279RYYwYY2MKBLV7688BCx6oXzm924Kco3b8NnKmUPTbP4mU2DkEf8Wotgmi2xhtQkDarqk81BUu3tAXwx",
  "key34": "4iLk2CccPCQHf3bCoqcBCKTdHo5FE69vf4Awuzr31A3kU9S34HY39KHRrwWWc3Hu2Kd7k3NPGerGCh2PGKRMYRCE",
  "key35": "3oF3iwjiNmwmnwiXcMLfsvzbR9zZoGNcKHCMUhfBBKa2wE7N69s9WQ1wSSNdGu8XvXUSzSxpefqyXBXnZ5D8yoqN",
  "key36": "91wgGV114pPybjxm32E426D3fzKR8mmNd9zp3Ms4FQh9qKA5NKVWjnjy2PApbU9oMuyHUwqR7LHffTUJqXj42s5"
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
