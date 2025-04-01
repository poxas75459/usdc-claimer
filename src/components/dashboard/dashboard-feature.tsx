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
    "3gKUNivaioxYe97cJjNZ9jtHFs9u6dRQvvcWLR8HUe96hVDL5DJpWBFkxzgz6DB6m85cgne7fvbx46RosfErM8EH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JmDbi42dwyW9a9tUbBRsMWN6Egc7Z68Um7BTmV8ZVYHvk2HAy13BNoowJg4DUkvuVMENm6xE8hRiJPyfnkguyqV",
  "key1": "3xwvnAXPLxaYCAFB8vPZnt94awobovvS7L4sq5bs2uUMUeLgyajjbWSnt7vFtJs6VhxDMBU7JbgrFySyeAu1QnCY",
  "key2": "56eH94pq1C6wgASQ43uXhkjKzeqfifA7783tkDZkrzHbpUL7pWcLYYQQHjEB9z2qCWnvNF8otpSUpAtopShcwQbE",
  "key3": "3zWexBawuvyfPY9wMBpAokTG7izkFe7REPjVWxo1pB1i96L39GZRWqMctFBYADTWaeVahkpwdkDNoB9F3DPHP4fo",
  "key4": "SsmhQqE3JZtMw7QJ7bKMbC6kcu8niMfbgeJQ1NVKLyLgn998nSqJjU9amVpNST68S7FDW1qZFejfy19o1zf6qwD",
  "key5": "331PiYow7xwKCqqqGpsNCowFxqXEBJ7smipQLMJMGq1MoyioGJbAcykgYd8hL6nW3hdgm6hckaaLX9ChUsb1gi5T",
  "key6": "55VHkawLUD6NpJvTZ8djW5gGcZji6wG9e6MVTMrGXMsjEN8tCt734eS1FZiswL8CNmMQsSfUVarq4KDSfRibpiL8",
  "key7": "527DzyUB8QFLgiFLa5hn2D3nqmsf59zNmgQEaQMWWkZXhxYuwsfrGdD6GcfwKq6HiHXqDUWY6pRBhY7uL4A7R8hL",
  "key8": "4vgXZGhZZFywFNRh6sXKJf4AGqo9FC72dFDCvkEULqCdqHaoaAPLqeL8v5QTiUTYd2WoPPCTxY9oJZZACx3vTD5g",
  "key9": "4W1Rmrv9m3dA5JSiJRD3E9cwxA4Ptq1XEa8UbvDj7SfM42hfZhcvfg9RwsCtzHjc4DQQHYmfw1hYySqtpT2Kt3rK",
  "key10": "4EkzQsti2VSRGDSNYh8qrU9diNs6cUFBxTa2jyxr7DWb4tjk8Eqh1V5okuYrkUut8CDkHBorLrNj8LtqNc1HFGwD",
  "key11": "2hriggTZiQ99HoYAqcB1WeT4rHgES9mkJwXr11Mx45W4Z4UFAR5WK6ZJA92t1SocLAgPgxNo3iL8XsaGpFFXuLoH",
  "key12": "41hx5WG5oByCxExozVbmfs37GDL7xdU8qrYspmzVedhDCd2wKWjk4N6XGaMzwh4ezapvkhoerSGf9tJ5euVNr228",
  "key13": "3eJYBjcMWhSp4Fv3xcLRtuq1AYdGHMBCtMYs1Ec3VFeduCReFodwAag6PHBghb3SqB8A1h7WX5Q8MjAsvNjKDnnj",
  "key14": "2zHvNMv8iEQR1AzfWKd9i5m7jVZDrEmuQEcPFWcZdgRgDXTCufkdfP3kMHazhw2hr7YeZmWzhjd5rwhN7Z6Sr3a6",
  "key15": "3j9U7t5RSRK4rQ4cALHZ6mYw6gCcS2AqKXoZX1CQnSi8T6dgdu4x2sbtJDomChRbeYJeFycmdsgmmAb7jAo226dg",
  "key16": "2YYJTRZN5xqx7qKhHWodaGorX6577orHPaKAcEaZTfGZkSguvxoasZtrRqguXUndZuybdEwR694C7CT1biZJyzEk",
  "key17": "3LYqZHhJmVP3sqsK4Zpp7q2oHFSGBZgZ2kUoUv4LPLXGFZkF8fLc7NCzy6hf6JGXepNJ4a6CNvpzL1mJvTmcQeGd",
  "key18": "3hcxEn6S9ddjeSj6gQrtPgbcpw2S6RoNWZ66ou9Jz2Y68Lp9EZaJ3pXoNKMbUaBLurWfn2Gupe8K5QFDNpQ45ZUF",
  "key19": "3JPMHR9KucmuNyUVsbCAVEAWe9k4G6pgCtgVKp5U3d9HePXCNvRDskK3eVWbZjBgWR2opm2S3VWPzh94wZha5tmH",
  "key20": "3GG3S9bZyHGpLzsinCRtURKbhvyAyKcQQMrEyJ5QSxQFULRs72eP2QZW3d89VryoPTQL4XtjVzHeTjEJfLVreYwK",
  "key21": "5N26w1EYWW68Nod1qNM7YZhNTigkGZ2qZ2mzabTSKDPmV2Cc1CFZnUoEZ2jEWNfFZxyy3KyNrutS8THSBnTRqL7k",
  "key22": "42QwR7NVCdQXGRcykWfERdcNXaVFoJjxxXQ4NXfGurGY2B6b36PMWSMkUMyJv2xhShrjSvbBHYBDG3ZHVtrK8qqf",
  "key23": "3Q8wSx74LYAg9L78V8GuL3wRkDQcZQLZbpFFU5N1M6q6qzNXnbXYUdvZMsEyaQnTGZNKCA8JeeXdgxF7epLDtSPn",
  "key24": "4tYY1XJ3CaWmsAguSWVA1e2fbd7355wEYupJYXwxAo3FqGfVRpm9e6t2zYiLvtf6pbRe5WCyn6U4hg4qGaAfZTLe",
  "key25": "4nVcS38GiTgp6FGmqa8esoksy7qGJTKhtSzern87MCbcNiFDSud7reerKQuQ8Q3crZHhkykG65jBXjsDXpK8nXnm",
  "key26": "TpqSqtdwnB8nKZskp6vJBitYVzLnEdwQnp5BkJwSbMfNTLjkhvzNbAdw3ZEva51FAJedXzdEDy2HpPoYkpLW6vH",
  "key27": "5HgcGciF1DhzMw3R6L2XdG4f23xEtwg3XHwJohmDGPP6YcyGBJfUd8FvfeVcCTP9KG6hndpHtdKsCFh8Lg1N6vkM",
  "key28": "5abwiZTADmZi3VxueAJc3FaFSu7Z2if5eoaGiwTmpGQDxTduaoGibsWSW8VjCXeJzMUsjCPjwKWFeGCrwTvJJ6DD",
  "key29": "5s8nS6bShynkjo9Zz8vx9Un4Z1s4Vo7DQ2Cj4w26hTs9rPYDCuiUi2TS9mSGMBEbr2Y3gcEiMPwZRMXj8MMi6JG4",
  "key30": "3rhGzBsDWSpwLKJPpeanSYfSWk3x2PB4ahtycD4qxrxK21cnygvvARQC4aBmT1CpY5aoBLcL9ym4JyD76LU7zEee",
  "key31": "3UdEeaNQShTt2nxjQQYXGchnFa8sKb6n7KLj4ggeJmz7U6ZfJqv3JyoVBXqGqJTuK739J5ta5nUv61f74Kdg6DCZ"
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
