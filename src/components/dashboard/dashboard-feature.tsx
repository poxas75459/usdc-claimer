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
    "5h6xqA9fwE7ZYMGDF8uF2eaUkvfjkjs7GwJxtbeDiJCNu1VN6YcNtTxPtpU6xbkLsd8xJ3ADe2TkHd9rk6Nk23dt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zM1193woRq8CBEwwzEAka7HmRfGzk78pLkbJnxySGBCGGnM9L418XWFGTKCcxwfFBguKCDWt7dUMTW6sBnmLJFN",
  "key1": "4KmfSqhNsEwjb1dJRsTmqK2AN58kULdS5PoAZQYP7gWWiYPvfDx7RXUz4o5uySN41icys8pGLxjNTAthCoLcAnaW",
  "key2": "57xGwUs8ZSKuoPRGTMekSmnPpbP8cw3RYsPyy1odoidAnc92i4hZqPNJaR1e5T5sstE8yAX1pLN3rzKc53pFznpq",
  "key3": "5h1pwEXLtyTc6gHeEbQpMwGXzMb6ynkPxvAiwCtYouCUKL4Pyx1tgk39Hwi98qPcn4VUBaJvaPEtzseZYuKKLYPj",
  "key4": "SzREZ4TSp5pFEwHfSVR1zefbepHHYazf1zNuQwi3Cv52nN79NZnFHZEWbhp9pkYAkP4X1WyPP8mSQNBAh4YNAg8",
  "key5": "4G6mo5jMrdDY4ChQbm9MmoTr3dEjgQvpWKrY1gzgG6MyWWn2tG39c7kE9XUBbq3DfWWgWMsXJ7ux5jsd7AEtBjGs",
  "key6": "BZ97xx8s454mFBKDZU2APNEZ8mEK8xhjcuwAGA6FVam4JiRGH6RsDnbx7tWGVwsMwSentRPV8osW13tWRue8Mim",
  "key7": "k4kuo9oX7a5tmSHHfdUUUFSExcSQWoAgcKZx8PowUDmg3PzjxAiqzH9Mbyi4LvTED76ASi5sknSMywrDumRFvND",
  "key8": "2aCkPiYHu75GEo1fkCUvWAEQvfvgmciBxSph8e6QmdYs2pSD5FMuevyZFv4BCv5WMYjTJDD65fDiiM29Kavvk21V",
  "key9": "29qaKnAFYw5jkgtcKLUTCjJ2ftCKsHsPNGeJ3vYzuxUqYRDNuZfcmDyyus3AhDhd9qcsLjWjuZoq4MUfYS7Q9iKw",
  "key10": "5yiYeBfdkahPKt1K94jwxXEWNmBfUPQrTWLrhfEE8igbaUN78WQU2buzg85Fw7L3xS7pmD2j2ktngmcBXudHy1sL",
  "key11": "2orL8yJguwkQ9SFniHxAXvR4Rc8yHBYT8rnLTKBp7Tfdo5GFcH9zuW1oAZBBNvhcu7vvYg2ftqh9vEaEh19j1K3g",
  "key12": "2QnAkejTeZ9CELDondWsyL1oGeixbVajq2JoT9XGPfiCX7ovZMcDV1swpxCqqhKb2s77Ba7ACrnF8BCEh2Y6Q1tp",
  "key13": "5xFC31pxsHLafN4xLtnEoqzY7noYsJSpWhj8qX161DJRR8GUTj2eKET8KAEm1pvj3yApZwssS2vJkNCyqQ8RvqBZ",
  "key14": "5tTtnPL3KRyMRxH7HtuhhsLhryauA5HT1gXkhxM47JFMXC7vgjpEYE5bVr2w46ha4KeQPXo6tB7rpfVnS6yaM7Hg",
  "key15": "5u4hD19szi62rrcELUgiUAhhJaxjbwF8MatavxeGxTwNGShQHtWCTHhA3wMDyodwJ9DxUCn89p7T417PRRx5mEVa",
  "key16": "4hEPv4vAw6i5iSozjckN6s6t3yfLUv1QQKSVbrnPUWMk1i351aj8JpHgD2iRSXaxhniTBCLSoARV29mYQRPzDtQW",
  "key17": "4pwMe3jMCJa4jneZ7LGDmXJom9icPVUcxKKAMXftGT3LXmNFQcy6BCSLqmPj5JzZB3SgYYJViD7MkPsgFv1yqusi",
  "key18": "4Y7LopvYN3WZzS6zr67B85gKXvUdPEkauMvoNQYKnAoMTEWgapeLdAThpmtJATrYGuHtKw6G27Bom39JZihkwCjG",
  "key19": "57Qs2qx3wKQcRpuVGdZefE8qEJ1R8hfUiotscDfK1Exh52Q87nDeKHaVxnHSWiiJhC6PEt8vZZsTHLt3SPEgHDd4",
  "key20": "5ZEzyUByJJGhoDKuvQe5UyFG2y9NojmxrakcjKqj7mZRRRA5kyBhKnSatpq6QzMVF7XQq3rAFTzt5tZn997z279s",
  "key21": "5NACnhQpCaF8cBNVDbfi8U1RbEXuZZdSQMso7Kanf1qppPBjKZaucpmNahQQzRmhKbwTog2L3HxbJGHmaCHShr5m",
  "key22": "2mYAUCKkWMSXJze17faHiy2HFDQYXSpkaAjZCbHtDxNYAaSsoGSDDo8noAX346oDNfuZdSxbrXbRSjjhEnJSr58i",
  "key23": "wHEk8dYUb3CxcbXQDiFguTgX7nLgLsHGRTWEYecnqfTtwiacsHwYr7tCESzZ2JCqqTh2kViVdUVJdpd7g1ZFyjt",
  "key24": "3eqxaPArhGjGPzTh49sfMwq96CDaSHYn3ebC6EAzYkbE5heram74t9gQyKtpsSZz1MPxQo64iVsQyRYrwYJeVXMS",
  "key25": "5npMQdB9B2MT8PgMpkfcyj43M3sMW7CC4RQBRNdyJ5wWNeH4eEZnVYUXEWS3jhbBkdj3AgiNhhP2Z4StNZv78CnX",
  "key26": "5XoWfcvncuR1E1SGYGdJona1WbEYp7Hap8keszzYnJoHiZV8TjeaJhXMPhN1D9CJbYDPh67Zd3V1VLHYEPZe6Z28",
  "key27": "J7Kn5cSLTcvR9JTGBPLKpkedokswbyXmCWZe6XETNqYnKyHFwcqCQocnYQdkvSxDkiJxh9XLx1apEMAS3VJdwLy",
  "key28": "2KmnJwHahUwwnnUkeqT3LFE2Ryc698dKT3Rz4Reh3NC3CEcaxSorC4zyEtLEF2bX4H1g3t4uxST8Ve4UY4btUWrL",
  "key29": "7XoqTj9QtjmD1ioJ4exiTdi3tyD4ZwKvrRkNmbD37Pm7dCoCuoKNLX7oh8ixt47Mj9j2KmzMyEwHZDFtDSGpeLY",
  "key30": "28EVH8J3CPv1tJqxq8BoyLyGm6s9miAptCm1xXaku9eNieMnbGUGMkbuiRvBQacK7x4YYubSCLFqckZYJWoMnvAv",
  "key31": "3P9exVf97LN2UgudUAcRxeQej6dXM25MkVSwMdefy3TV1mERgDBxAwW2j7YcE7ToKg5EPhJjXaiGP7jK944vKWMV",
  "key32": "4kdnaexf3W3BQF6yb4ADeHpDqv7LcKfh79GgfJ5CKkEYCWPKNgH12Bn7F8ovozetU7hAYgwB89vUak2VBDutbZr7"
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
