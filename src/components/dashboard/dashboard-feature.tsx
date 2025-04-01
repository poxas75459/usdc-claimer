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
    "3kwU7YHPLK1V3jifykyqgTPUZXdUHju5Ruwg5kjTiFWCNng3Ka87pqXrUihaTbhn1MTNkzmtNcF29g5nPXQU1iE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ha3oFjCT2NCafhAi5omJTDphJXtotTU5dhcvQLs851fjFu34naZcN3NZ7i6FLAJCRLWVvcVEdvnno4fanqgJ6cL",
  "key1": "2FjboYaYGRER7Wtmi4hCFduD89LfC8ZrTegwSn5VdoVnrWJ3Z5jMM1C4ZsboHwvf542tVVvZfkyMxW2n8kQTf3nT",
  "key2": "5gYP1BfYiPwi14etsspjuy6STFxFjxgaJfaXcjfRQhmogbc7SegYpk9SmL8WrsdbGfM68AP9BR1A6q1C418S6eY9",
  "key3": "3e8mPCNBo1uTivRYRLe7EJYcpQNos8Z5BdwujwRF43hG94qifo8ffoAuYxJrYBxCK3N5gMdFtXTsrfnpjYf6uUv3",
  "key4": "vQWDcYQS3jk1abYWnJYKSamuonR2HzW4TgG8cZ66BYa5PA3yoz8sjc8FzRp1qBAcehhJDDk4NSNVVqR1BUxmVEv",
  "key5": "2NwKTgmKkfQXDg5Vp64KtPiY6g7knewYu67UFvzy6LWNCFw5LytnGrKzruVfDVXHaKJNWuqVa37eR6PitWMjXmAd",
  "key6": "57cAtbbkKfdpZrwTZX8Q3meAGTcE8zbHAjMjHWZs7xHtdwQ5ntDAeNSom8ESZC9Su8AdgcGxcxgqEuuF1kcN8xNz",
  "key7": "4JbJr3fmdwRY8pzfogcSdUyPfrBJziWAd1BCA6d4dbrBTUAeTBUS1Y7apx5EP27xawKWW93BkXy4wfq1MpMAyZZj",
  "key8": "2r5Rx66aTjw7jPWBxdTjZFvGZQHC2yGTzouS4XiL3VFBb6hnQwQ7P6FYWWsPQQPjFQrQzTm4vRNb58njCTUcHkqr",
  "key9": "Y7SwUXTWKiQgSF3xRgptbDh1L3K2CXMTo9UqVvxVQSvajvzJe2j9zNwyJwuFkRo248a7LTVw7Ry8UEjJuZJemF5",
  "key10": "4cGBs4HcUdZeuowYR5mUUkpaogfcFK3VwjpuvcAjHt9xJ5Qpyex5gsDgFCKk6Nt9NWoNyUTkodgqf4TSbtyJVeDc",
  "key11": "21tQroWHGPA8xMN5vbH5ZuU6u86Yh3eiZTWswjLFg9gWDpEr7JuQjHpL1MQ133byCTimN6QmV9qzAiHfCaMkVVx2",
  "key12": "2XL6z8Bn9KbmmcS8Y6AzZf7tF78E7C8MPTG3o4Zg62z9AGxXkXaoaHSiXHvud4sfQR8hjFvCLKUeW369Vb7cMC2",
  "key13": "5m4BbVA6SM1ZxLByjEA4g1FtbqFmmFkqi5Y1KNhvyCZksX3MjkMmp7y4pXi34cTuiAcE6qFhLthZnCmH9xNzzouZ",
  "key14": "4aR6iKQfT5UY3jHgX71EBVS6s5Q53x6nHjT5TxJkUtrhUfiTjCSWcvREDuX6ATGiP2CfAYMHuFHBmKnMpc8iTokd",
  "key15": "4L92JQuB8qrPqQcGojKseJrtg3XiprG7Cfhbu3sF79C3w27cTd4Kcf1v8HuG9kAdntjkGtr22xB2U7qpbKrusXFp",
  "key16": "29gGhec4yXeKp8o4vjP9g7mykanjFLdibQqHunHoenNeeJy5mKaUbAmnLnHfPmUVhZmsCBBdENdd1DdfuefvJYbJ",
  "key17": "4QiwLhTVmuuySQzunNqpw8FgYwWCQZ1GJ9XVF9HjwVMsV9uZnxbgSpiTLNHc2X1zHd3Z7jMvwhz2AWFzZfKc1A1W",
  "key18": "BGEeQiMyWkSwfTxEXiiHytbPmVuMDDSWutsZbo98ZYvdTFVN859QDHujNNPtVVExgx5d2C5fTdxvbSxozpRDJR8",
  "key19": "LeXEp6FHkPVb6TttLDr6xWr1qAH1GGSm7NX28xVb1eHQbPKGcngXSTABGJ1MK6Z53rTw45E5DP4VjiFFzg2PVDg",
  "key20": "26xTmFSJktE1vt8Kqxb6d19FNTtZAXGU7dpqfBb4LXbY4vKqsFS6nfzPzueWz9MTSvjDYbjzojwuRERqWsKWYbmj",
  "key21": "vtegWg83oQsnkq1piGGaLEPd1kYeBXy4iYa35ThQ9aVXLfanZHLVzWfMuRNakmKvs1xZxWygXspyhhy3Zy4g3x2",
  "key22": "2z5fq5f748ufgf4VJEhRjoBSkLGR1uKsasvkzdqZ7F1sb7BdyY3Y9FctN1u4nZrYjLGnWyxVT51p9sMQfANJdwxQ",
  "key23": "3yBKqVsB1b1SmA3UoqsD5uEz13SGkThnebarQiriTr3hY1Le7u9Jf8x9L9h8S3edkxBQz2dCxsT1LwCRMzfitqp",
  "key24": "f5Rd8bz5ceFLcwefRo3jMbKugnjKXjGcEQd9pqsJAFHirh2iA21jDcTYGy1Wzvio1ti67xTov3dj4ZMNCaBmBH2",
  "key25": "65w6DsNCjGEFdmHWNm3Jp6hX9VbDTFtGTzTX6MUTwwQRCX3piLAGdGJJtHxg53UCnJMXhfF4T8nBQ1do2aQEnM83",
  "key26": "s3GuiiHsaFQfYGwmnRmyBWk7KFZu5AP6xL5r5VTppZSPZShX6UP67j6b3eBZSeFnU2itQdV7zPwis9UP6pSPHZK",
  "key27": "2hDaD4RBX1QSzCC7Vv6pghuk6n517KZSdqiAEVNFxt688wj7JijXqhfphKzVNgsXgbaVf7aaqmtqi17qTirGnuwZ",
  "key28": "38uC1h5ipEVyhkZ5gycdWr3Aj6dzH78rj9uu3X3EwvyFqX4RaNs6cp99YT1j7BVwVbUWrGr7y66tiwoNsM7hrGTH",
  "key29": "4GiiKkTnHBtFooeypD1MBCMkKsE7cLRzynt8JbV7q9WThYhKgDEwKX8tao7n9HY6fjWqFwjm2vdMX6VSKEdtWdei",
  "key30": "3zEtTifLUYUDDg5auutrxHtzWvfTwoXTiHXxSMJ523FBgf8PUFrGS1r9VgugDrNQfgoPtrgByHGE11VYbSQ8UjFw",
  "key31": "5sMpz2yxxgyWWVmuwnUquUKRWJZvqCLpPnkxQf4FAwr3gbsSM9EZ9SLHf4gs3b1B3JXBcGwm8ko5KXHX4kjN4nAy",
  "key32": "jpATvctRr57qFyYBCkw9KAuu1g1yBUQYTWJDDNpnA1Soz9ESTDStxP2wVTAnRUtbZybYXZNAi5SVm9YjPeP7sK6",
  "key33": "Cf8a7NZMkUqP5M8ZN5zZpJysNxs4RYQrHQ8C6BcTX4VMy9tWSazxy5XrpjN1Rv8U4QJ6J5YaHwyJ3Kbe7ZcDKZW",
  "key34": "5PhEVwkEH6Tcxxyqq86YibsiA62uaW7iNuZbBAAY5NuFngz7vpi4ownhcDfNSqtDBQhELPbsWsDGmD758AJK5kUW",
  "key35": "LN4kqZsW2GHtBD8NHhhWDkJqAQhYaaZCJBxd2qbjVHtkMAP6wihc6BC6Y59RgrKJpuL96zoaYd2TUCXEPpBBDXS",
  "key36": "48LschBJ86keJB1sGMKCe96gCmEvNxvjegm2GvAmUh5PaypuFX1NF54neVtFvuGUC2tJ9wcwMi8ULnXtJ1XddwPP",
  "key37": "3RGS2da7MT6LLbEM5xW7vdm6xPqU9ahBCXa2JxZMeSsUqyKfuZxvmaBNrs1ux7Gkcs4HQ3WEQUqn1dAMhApZpYzd",
  "key38": "2kCRoJw4BcQQAGSz9rCHj1Nmgofp8uiPL3mqhnBsQQSzfwbyvKCAfK2FxLDDhc39mYpD1uaRtK1C7MUTUQSS3wYn",
  "key39": "2WF3vnXTTCgm4NmJ5c7VE1U3k65cpLs9YZyZUKsNYxk98N2kopA4tP1GeKwmcVWNyVrRHuUq6UTYnbhPhw2kSzHv",
  "key40": "z2BfivP25F9GCjR31xXdiWyvWRsKY1TkznfBJ7cmDXqHf5Xo3rd6Mwx4aP8HwUC2aG3xGhVky93TtYBxotREMP9",
  "key41": "2JznsneRGMJbUdZggmKG5HMr99uQpXZuZo4oSqtMzNT2JuLeCibXtdMQ5AxLzmavcfCqJCUwEHR6PJq73fT5cCZz",
  "key42": "5uH5vwm3gmE5wBX7FMum1HRTCVRGU7vXdPBWFUJsi6SXruakhMLyeg7Fcc16jXRQcwT48PdQHkERKjYPCdeS4ci5",
  "key43": "3tJXCaFsqS9RPErfjNsKERWPswQjLJriaW2i7B3Cw7xFknnimsfhdWjn9MfKM34btCYrWbPwik8JmozmeXNYVxPi",
  "key44": "5CJ82HTcji29wWjgbXS2a7WuQv9Hv7xECdg7CR1izDDdRwfX3oLEZsfHTaGy2bfTCJc3Hkwa7HTsvMxqkQC8skRD",
  "key45": "5W4w5huURyErFJ2nC8d5chyjmEA6UCZSpCWePpZU5F1ta4WqL6tU28YJhGVfiCztwuaSSFgHqdgT4hKcJjD3HcsY"
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
