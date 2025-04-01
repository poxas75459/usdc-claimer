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
    "3pVQZB8nUxyNT4ZNagvxH6F6GNiv6ZVrX29H1YnSykoKRJkWx1xCxoxQLChg3jGBYeCVsDCbpQJ5TTEov3nVagXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aTtvJKVr3x9Vs4byvCbLQfaT3qfFKy1e4aYVsT12qsFBDyPNkPiT5nh8zEGtgG3bXSdJ37R1srFyXJNdizbTAWF",
  "key1": "3VyQGpBc48cKvUTCArcFdXBJT4RGSV2nNyZ3P4htbLrVGvkFJCbYNZpjnuv49eoWpwwRRgNmJKsjLp4waTDZN8i8",
  "key2": "3W87vPCrpRrAByyjkU6DzqnTB8hgaxtT2uT5nis515W7pwLxTAv188Tz4VkCkGgUmoZ1GHTkyaNqSvonCqGwJL9m",
  "key3": "5J4BfymKWmsGuAhQEHchZ2U5car81pQogo9cHZGuTdpWiGodkhQbjTUWhDX51Rspr2vCJwFNZ4Bf9BXVrE2mR7hQ",
  "key4": "3WmWjeSFkiDLbQxitG9v2HJd6X1zptePEmPVKWpwd3WyvAyqo7ZpcPZVKooUdHkkDfHegxUYB2xVs8CpZmiX7ssu",
  "key5": "4NzdMQoUut7KGCd4mjVGB4PYB6s9mgnaEU6PL8tScx1APkCYDt11opATyB29AooqfiDfoEhzBi4NDt5VZ1bC5LjA",
  "key6": "DZkR83F2VMgeMCkCxzfXah5E4Fw9FYmnWCi5Pe32YMmsK876gMqk5f3nVdH4pdSdZLr4fxo7bEi9Wu9KjGhi1df",
  "key7": "2cyvkCBJfW65pT1YB5FF9ShChrh6ytJd61NG9Doesf1w9pauFd1pRgtk4bnpTRcRqkNL5bFnyxvioEjuZQrPNE3h",
  "key8": "8uAsXVpsWzwCZJDABoAx4gJui7K2yfHU2mdsXUi172RcP22N5rxdkCBLLNaSQmTZycDHWef7Mk59Lj7c9rZc6yJ",
  "key9": "4ZnR4bkHDqEQMzbHTFqYvFUWhZgNv8fiGRLRH85Bc9CxogFSvJEg9doDbXq2hu8wa5LBnDYSbeq1UKQew3UB7nX",
  "key10": "xxEjjr81CWKGozXsKu2nnFLEahdRxUqyjpwwESSXZaVG6bYqqYXDS8hFWTMQFZXwYKA89ehRMkLF84EahQBmbi5",
  "key11": "2Uz1htmRyNYkBJRALDTAoKfTabAKmdtSuhbNeXHnGd6gaWg54oCLdX4qm7wZsWoYGS7jkarurFUaRnhhxkeuH4As",
  "key12": "3vMjvAB3D2ZmHcxapKwCvLQKy7bBinn8mLAJdtynFECr1TKXXTfUvryWr77ZQeP5ddokfoyeLLEH9XrYuVfCNKNM",
  "key13": "4uK5PmqVo5Shu3rpL6utsbc2HTP2157vdNS5yaCHYAKrrkms7AXqYzxW1eYyqnEtCGBaGqTGQXFFnKPgLqFSjop4",
  "key14": "5s2W7fLNDp3fEDyvMHSGnR5X4AnjfMeFgnqhqMS81B4172awJMrgLtvCrZCBMhFjaHLT8uu9XVCmXdmttowFYQ6i",
  "key15": "2K3C98vUrQfxiLSHhTDN4mNLpwDTW8u9cHqVASiHd69Qabs1JTrXFQ9jiaWRKWS6L2GXe9SqLU6fJzABCsZ77nHL",
  "key16": "2ySTH9rY3BjApBvHycysX4vthorLWcubWuNMagntJ3yhkr2JENPsYLAss4jvq6ecHv4dQHWiMutKjfaQ4qhTY6zf",
  "key17": "2Au8EWkqwqufkrxgRzarM6XipA7MksJoujn9Yzc83FGPaXeN9RsCm6QwVEMBJ3GUxbKSa7iNFL6ptGAt6Pm9qcbQ",
  "key18": "5v3PNM3kvKugEt993mnWmQNzHSrqS2QkqND4T9D8HjCUQoRYtokQhix1HLCJpmBqSmAMjMNAng7XTN6aw8YEs6iQ",
  "key19": "2v5mEN3rM32Yzet7ksRpkF8t5bUriCqjaSFpF4uwhJqasBuWcpnaTk4xzBf2RfjcdV5CxX6q7qinXaY52rjYNeWU",
  "key20": "5ujtnNR2fQnJGjvJ52W1oPHPZn6mbbhe7XHyJuNwAmzg5pj2kzfhSQAxjtNWEo23wyeVVbytbgVL8WDDf7HZNXse",
  "key21": "48N9sLnBzrhqWVzTkQfUVwrAT9y2EWk93y9v8JAq5nCiBCVfuZJ8HUjpvFPEsxizqURBphYfwdheX2Za4x6pDuwL",
  "key22": "2FoXvm85SgFxLKe56mepsjtNBPivyw46Lz1uZayLFbiTeTURVcgrkuC6c9ioWFQRJS4Gcj7BhFueVpCX6A1QEVRm",
  "key23": "b2FgihQYfzAufeRe7oftZXGJbMrxtLM69ALWZNtC92QEFXa5Zd4yvMcXLAVUarMNAZDGzQTjfikj1MdLthYLxBm",
  "key24": "5ECtxorn5uAP5zpJdYicj9L7zTRR6UVgBmToxsjL3b9ekuDfeGzoQSbHxjKf6pJJKthpjG91sgZFvhqw1FvKdrmD",
  "key25": "5SAtwzZ7Mt1LL9FGncuriTr1ZA7WnnudfFk729qicmAEiXC6fbTmzwuNHmwEX7m2ZSewjpy6PnoQUCnyy9M1wjQG",
  "key26": "3HWJBaqY5NnVgdpZaTk5qNpbBTdCy3BT2reNqvyRQW8FqsLBQToVP2ZwPqoHxu2qGbLhwT3U4SuHgwZoXkjG6dFU",
  "key27": "44HJJbsUh58iPF7nRXjcq8NnChcP8MDiy65wepPKhv35yYsefVdmK7i8c7LbkmRHs1LyUH9bVTLQHVudCD3oekyA",
  "key28": "2ffyBjUWXVxN7UjW1eLy3VdHh6z4qsJEAUPwMVr1C1MARrfFmz5CUzXtpwrrFiQdEtF15Vo1uNeJratHZJsH2te4",
  "key29": "3uugyrY6SqrWmj9C6aCSkh41cFCNX11juPVjKpBvAGZugypX8ige3MrPiJM3EuKV7PBgMAiBwJiVGU4MKGKD4uaL",
  "key30": "4PsX6S7d1jAGfATs3cQ6s85DBMw4mNa9wJBua3fTH1ggQbrRtxKrKYsYnGZ9WTrShVK8MQnGxKmrVSTXt6xwhtEj",
  "key31": "5PbGAez4t8QCN9MHGRFgQDcXNQWgyXD4WKWpd5zhWoaRpXPLdFFfXeAvg4f5Azo3BYWboo9PMfcqBYqqWD2cyi1F",
  "key32": "57HdDtbconCBKPcKgTALQJ28xiGyoXNSVhfGWoRu8X5bDroaKVCHZgXGL7koeMqnxEzBzcNqDbLZLQEHam6EdRcj",
  "key33": "XMhQuf3ineYVnL1vQt2JgaC3wJHePnmqLB4GcKnJNxvRJ6X2SXqvnscMFB3VEEqLGYYd7btvddCuEHYCjKtwXCK",
  "key34": "3ZV6pxC7EYVug3Fn8edDX1fjLj5cMNnXgYHvhEgGnDrcm6r3xCUDxGoc7SWRBxNpbxtrZguc2DcKeLwLWmjWXZw7",
  "key35": "2SwE1NWzhs83xCrfwPFsgbTtCp4JE4zG8pRkwLb7SfoLp6org535TyHAiXpbBoN4GnxX2unafq5gnZkcfoozKLaG"
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
