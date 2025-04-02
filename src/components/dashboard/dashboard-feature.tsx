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
    "5SuoqyMopHPQJDqGpZaabYLRaBBNA4j5Gkwsi9aFCfecVsPAsWLjW6bSLns48vUNJaVd9JrxHxZ5n28iHiUreeB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rLoMAX4xaHL68bDzZuTsBkXLMB4byhStL7LbhMD553NknaHxY3vGLxmVALX1S4Rg5nP2wksDPbRQzUvpr14XDNQ",
  "key1": "3ywjwG9TQX2Bpj8xseY7VR2Eo2JG39f5AxEfZhbo1z93L1fgU7yqG81eQecayK6g3J5ami3jvWXMY8AZY5hpXdGr",
  "key2": "3Sj1X6ecATg3K2bE3hwKo86TnEP7u3gm7PPHiKkSDj3318v6bNjiSjR4B7PUx7SZj2CTCWRLPd3LYERPBpaD6iUz",
  "key3": "5t48b4PQM3J9zgZ79kUfn4B9zNVF12UKoqzhJfBcdSP5tzdwLTqBipuhrvdZDmNPePYLUCCYqFdpxVjTPYFPLduo",
  "key4": "5FSHCZ5pmevY7V8wUjsbwoFELpoDN7rcfBXkJCgZYrvZf6qudVYHgmKQdUhpL8fBJkmBjWJhSpFyZJuW6aCtgmUg",
  "key5": "5DqQMCBNRtWjnBcCbLLihenVmeHs2BYuqR97T17PhC16Vbxj68mmroqv7FRV9vYTV26dEq7HMDrretN7MeQ2DKnU",
  "key6": "oi3zjfJShg4fStL5qwaEmgneP1HZBqykXtc3DXmjX7fCepisn7FsWY64CzKacWqdWh4bK9CWob8b6RZzg8d8LnN",
  "key7": "5Lsh1f7AzUmRnZa5DqBnF5XcqMiwYM9nP89XbpoicRLmUUv3snZATcWySGg596L25d9V5o71BRPG1UNPsjGuncRY",
  "key8": "21uPifScSwCoUmUTe1yGuAud62BU4sWrAM2Lqf5gqxMi3u9t5znrcjD2UjvuVViDVws8zJU1FFYer7Hyu3oqDyZu",
  "key9": "yZAuP9JhCLTxTBTdxQQrzE2JKBjtLenfv5R4QDmU5K5wuUNEtGnYDt196NdC2P1Fob68w4auQgdY2ZvYQFVE8Pu",
  "key10": "61P1GgQU1oKcaZpTZGayAnf3Bx1UMrx7sPF4mziaQ8ZMGG7Nc7pxhzJ1uCZijHTnZHjdNFAYHhjkgKVUEzboQgK6",
  "key11": "5t7n1MCCweg3fWveQtutTDNbKvovUQ8dEMLmDFKuSXDM6BjhtAxUzNPjB7ngeKkWfWVXzZeFccT14fbYfkqDs495",
  "key12": "5ELcwbw3fqUTJ5SCu6KWmZoyUYGHnCpXjGqSDSDCTNBrAYAr56WCiUpv9tcmBvb6vrqdEe6TmzJcsT9rzqKRArWw",
  "key13": "45rycMn1XfYb8moXWek1qpnmToxSNmrEhr8XEU8qyDsHSLn9KkbowNz9mHQN2aUs3NQsBwJeyvNnvNaA5dvY1dir",
  "key14": "5HsPL6p9u7uA4iKz9QPKWwXVR3dwZ2phGboKFtSUECG7F6B2DFj1qA69v8kNKSgGCP7RS2TJwLwUtKyvwSsuntSC",
  "key15": "5vkZiCPPRVf4Q3JJ3j6zcNzAbEiTtFUqM9fxDivphMksmUUeYQRQnWQeFV9ksRXKbbABVDkQ3h7cjaLb83UAofTD",
  "key16": "3gq8KwqyeAN71on5Am911m7iF2SMpHVTB4ZqyNDFnRW3cZmPwqXxwCYcNm9qt5QZDJt3aw1mkudqDx7gU2godu94",
  "key17": "27W3W5cZUGhxSedRAEVYGuxX5TPcGemhBqjTyZDrXgr4PgeBnbPQM7Ka3A8GhPGtqoo5nAVgBiTash2k3YBFzEKa",
  "key18": "BBUSuFgcyRfp1ECjh8zzQRUJhqBL4tTPiQB8iXkrfJbCkSxYp4oDYmYcTaft3nnviQsCDxpQeimmQu6zYTChhzj",
  "key19": "5mPsSV4ptfEmmLppxedzykaTqmUJ2kduzb2x7i87wJd9pUjMk7sEe7YhzwDBuQacR1pUkbDUgar3LWf8sv2ywaZi",
  "key20": "2rawNBpCVKpK9bS9pnuVETKfw3cSAmgouNWK5Xw6ywdS3whrs52riqeeUEKhueoyAPZSnE9Hixcu4QNzjCfR7Gsw",
  "key21": "4qYDezAxRpANxMN9Wbo468zxBcTa3v2bEgXyfZiiHn7gdW779kY7g2mBwYtXumd3uLK6pxTpF5HVqrGRBa9Wn3Q6",
  "key22": "2Zpjh3CoMwKD9Rmp3qqPENKHE8sdefcNvPzJo7TbsaVQo6xVNC3tTxk3qR2qhr4TAeqA7zbGpbSy4a2MPHgpzjSq",
  "key23": "LkXsAfKXU1RLrPRi29oT4utbkhnSZw2y6XAPcZj9HETVm1aZF7EbVwkwJmo3yotFn6bonZLaF4meGWawysg7g1P",
  "key24": "5b9Q557g1XeXU1gMnTcZeXo6sziV92tba9TsEu98HjRGxz8AoAUKNLbhV8MEV3MrZPBSfuen4VXXMc8Bt6PdmXcj",
  "key25": "5H9pzCQHr7Ajy61ivBkoGSn5hcCC8rjB9s633NQuLZk3N5ZucwLzsUYrRFStLp689Zq6oTnXcUQLm8R6uNKDhgRj",
  "key26": "2rMxsgfSQzUyCz9syQrPMYdxBPEHw83ydjAcPr2TVXuHHrmoYpRp6rUgUm3xRNbzpJvmkh7XPJWGanuXS3TrBzoC",
  "key27": "8khZv4Mt8eXK1Rw3vx9MQMTJNNFjXv1qZ3Ts6AzkXwjx2FwkdMZLN3CieNbp66H5TozuEvxhmfAGMCHR5FigAk5",
  "key28": "5USsbrEStCNxBwVSatZK9f1fNGSJNwTRCX3yABSBuxrUB7tMut9SSMAaFida7sCTqK4bPkyRtGvoQ8Nf5ZM3nnvM",
  "key29": "4dPt52EhSBNxBwDQyJzCqDg4rZeWbYEpYMycragYzwop9TW3VZ5Q8AaHMi3zwbAeTYgxsuswB8rgwAWHUEeg7PzR",
  "key30": "5qtJ6GNyVXYSu1wqhkMWGFrnH7e6NbkRwBuJCbm1hWnprxjRadg1aVCGS1kN7TGoq46SKLNgW81MRXXCX2tWaERW",
  "key31": "5kcKBpFU6H4x9WhaYqDGc4QrJZno6H3gnTkUMFTYKtxSqpedhBh2vhaSwPAZBPfFDCJZtEyTmKuhNV7QPAn3HYmx",
  "key32": "yzRZRkPa8cq71MzHfoXc9fSh2DavfBq9LvSUFYhVAtRxcExwG7pxT7S3qgHwEdNppYMTafE5QXC7orZSzCxVgpm",
  "key33": "3q67siDxwT7QVJkB7FLRAxNebPqqv3BKb5bTDJi4MXPqtLzuAyc2Abo2fdPdB5jntowayW8xg5YFp4TYmQqdDLfn",
  "key34": "3Gz9oz83FiCCG6DWJBcKoHsfhUfaGJffMQnhCWgz5zStUg8CcuLopjAZuZqRPWdfRLBJEyttUb7rKqZQZoCzV3rG",
  "key35": "3q23jTywy8fW7wLxffC97t5g1y7DcCfk5CJ4ByFrxSFY9UK6qv6pM9yRnPJ9usQeNjEFFL6nxR9CyoAfBpAmTfwf",
  "key36": "sBL6NhG1XvqhEbLMVx81xN4YmkQkEscJLqkYVFHM7NLgNQDDZccNn4r2kmGZyWoUiXSCiKvjsJzoQjvrQ6F9SJ5",
  "key37": "5WcbKmdwwT6j4R9uvQfSTRtLqAQsRwdPCTDHQjsqu9mZCdSZviFmF4RWsLyRdLXfcBEaG4oRB8UQe9D1mFa6om7g",
  "key38": "53uG78bDM8kYsxTHKWCSDF6zLCbP1wEg5VP2DtAtWMo3LJY6g9tvxjo68gRDRffWEP3CWX7nZAR5333FeGTmjgJP",
  "key39": "22pyJgjDCgv8Zdn9zMa4Ri3urTHNS2gbrNxhWGCRR7meitBm9QNjA8sJ154fQV3RJcLYV717BLt1r3piaW26Vkan"
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
