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
    "5g3KwsREcWzoxQW2BSWL9r7escWr8uV5wP7qNJLyEgtHdmoBnnaxBaFTqFsPvPRMk89fLc7Bcfsqw6f3JPwkh4yK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pWkHJsbd1G3NVk2T2xm3qg6SAN6HYLbpiVSqyMoXwmwAhJbKUKp48m7MiaVjrDCXWmCQm2WiNwSJTwH9Y7ovE8j",
  "key1": "26ukJ57nTg7a78qCrCvwZAhghCxf7RaJbHp4ZGDLgB76dQpevh5tLcUpcTv7xZiLYY177cWQfzGizgWZNqt5EQbJ",
  "key2": "2aw3WSDFdBd9yN6vAjT1L1mXyMyDTFKDbqXSmt7ZaQsCAcAcKURQzamRXrKcQnETRFzqKbhVnpkQqDVx25ZE4ABH",
  "key3": "tfKjA8dazi3aUf5fz9ucq4YwAhTCRgWK9JTUrcXAavyhRfRiA9d452He4cKgu3SjWAUHxQTk8YNjupe6BFVyHSy",
  "key4": "2EkrWrTRrCPvahWF4GhhJBnbGDPZYyXqsdfemsZiZhLtz1gpS9u29a6i1Z8s8buyKhH2tUxmUq5wSm1WMm67m3hC",
  "key5": "5rTe9anFnB9ZMNKYRuDrrMd3FbQ3SHsG1AfU2RU5DBKMrJutGfMV91Mm2dA8kax614gSJQEw9eD2za1SerbT2ZQj",
  "key6": "5g3bptx1RaeAKRThHiEqGQXRgC95pScBrFgy99WYYmYmd97Jvk3UzRApuZwiWa7mTG85YSJmZQUeLGgse9ia939s",
  "key7": "5o1yQzjdjrk3wCibXRbW41WXRibYhXhXJN5BA8gq9Lx914m5ZzgS87VyEfXbumU6KS4YwknEi3jv1RFpuhVVoR29",
  "key8": "5cKgfroxpJn2GWnoqhkDgmqZMCqFwXjExg4KzMffsW12jP9MwjAsFyQ9BYWQfhA7wFWsmF8XxBe6E9evyPFXTQck",
  "key9": "3gNWfeZMrcgc6SzwS8528V1Uv4JemGERBBr94MDkoxBg5ayyYRksEbeF4V5s8vaso31yoS5mbfjPxLVouoikunEW",
  "key10": "4qm79pyrp2VzcAeM4HCbh95dxEG6V57NrghnEVFTpJabg9TNZ9rxkUvSNXsEkcjtPhWrdVVaVmaFvRXepp9S1BqY",
  "key11": "3oToG9edYDHNcN3xixDGXDWf3wUdE7nTk1pdF8gYSCNv74UC85wvwhEVrx4Kwt9GTtYZCPnHwLU9CxkXhVWGJDJv",
  "key12": "4rhNMHJJdWEw5vRtu1aZMVgLtH8bWuJCWF8KxdQNKqDE4pnNxGsUCny7fzA6qE8LWggZ6GXouxpLGVCqnTwtgfJo",
  "key13": "3Do4FKiYmWVCjk4kFMkSok9u428DL2UoF3MSYHRjCrrQ1CjrUcxmnDc3CDkf5f4CLp5GNWmpwykv7QPATWxcp99W",
  "key14": "3MXAnZXJwWGCyTRersLpvRLRGVTvc9X4iUzm8GK6ATbfb7z5rpAoz9shwi8rP9nxe5wmNT1SHYbAgPi4UzNHaBd2",
  "key15": "66QNu5KEVVotMPJxoD63R4PzeSp7g9rLfp5fZAv8LFxiDE7pjeZx9xoRVst8R4DTXEfqqq5dLYK6hoRq1tKHxCz8",
  "key16": "5nwhpNFA1dJy7eaCLVUf7DwHkyqqNa8pJ2RuWrLNaMkedrct2xNpS1B2sedzhqvGJM5payzuRNpHjYvXFnCoea2y",
  "key17": "4smQH9Ti11BXP7VwKzRCdB5N6bRF96df3nxtJnf8FVZtyvvYHJYSrMZj8aoshiQuMKfRv7amuZmQkK1cp3AjUB8R",
  "key18": "4brM464rkGm2caM3Ve8yHYUH5A6zQNs9rGRUBg41fFhN4TA4zz6YJtk8bHzGKDm2ioHdbtAz3irvyH8YDyknpHSP",
  "key19": "Jf1kYcCSTAC6w6tVh95ksXtR3wGKYgPzoS93bnQLRK53ixg1sNvcKhiiZMZadi4WqovUBEwJfav9FdeWrnSGMVH",
  "key20": "5JJgdgSimRwA6ZvX2ibCa5JjamZEWht9VnnkchgmfbxxZifQuQ4JUvADazn1Cr6xKNmCwybz7c4nV3E1EKV6nNRt",
  "key21": "3a6W7t1vou3McHnwWyT7WJX9mSdfSxJse9t7N3zMnBSN68DA6kJ6XLGsMhkB5E1D3HBx8kWR53z5e9USdgRSj31n",
  "key22": "zZ34MCdtvzLE9QumbyfQyKTNzBRftQpwZyUFMPDxJe2UC8TefmRYMwqEPoAXFz2mxDZTLK2zMSa8rFrNMfUVaZk",
  "key23": "3gh5D3FQ76G8FA9pHNJXKZeJdHqCcirDneLosxHUMMKbpG4247nfqmnQ2p1A6xdLnqXqxvSGrVoZ8i87LstRks76",
  "key24": "4o4p5EaAXGbGyj6GZwESDcxzLd61Ycqi3SZzTy1ymnXTqvGwfSPyNJ87AFQ6kMfjkeDx3E6sTuhLYzfoPGjo4jNT",
  "key25": "4uXAEnKhjPaFUE2P2zLQcCox9JBG9DafjmKZ6kXAcoDuQf3dgJL5RFhK2yDwxAR5rdF6rWEabY1YktagbM2NG9sm",
  "key26": "5CWFbU3M3XBK7J1bakHw38qJzVQrPAB4WACzTDWcEqjkADMHMa2q8deFdj9cpws83pCa4iAMfrejtwuRWQBfgu4W",
  "key27": "2gXjWxMMPvh2R1jUEy7nsRs1udmT4Y7ov89kdxjGFVX7wSGurHw6A2ypMwEZg9XdNEN4CiHCyE2oWDrC3RFKPGC1",
  "key28": "5Re4DF7KDaD7ktPwizyLb1a9rLtVmxGB3s55QoJE7LovEqWxSoGCJxzvBVYFfP6Gt7bMNy7wcwVu3cuCbqkW2DKd",
  "key29": "3S7eMJ9AmKhm8oZCDq2UbVBgfnngfg6ep7GAgzwQhSdGfSxfu7GBuNzXc8AFQzUt5xqg6SfvGMrL39gTw2WFGSwM",
  "key30": "5dySy18AKpF5nHeJFGyBSP3SF2thJetCzkdkaAKKm93qUKGSMWo8Vz76xj9dejvpwc1LSUPp6BfA7sU8Y57EVqvy",
  "key31": "4Tz3Ziuee96Bd66Xh5cvfRhCYYhDZ6NKhhJAxT7DNPtnjdqFZzxu6qTsUdNCwdBp23TTXjEgxkK4Y1Xks1MgMAi1",
  "key32": "2k7fzxuCTxh1XQJJ3kXB8P8pQKo9FcwKT2MNm3bwPH61eVV3gaQoyGpYM4abnup6eYU2CfESREPv488fr8PmdLcd",
  "key33": "XTDhTwJna8QYhbV2qUXrjW1tPQX6UwZrxqnfz7wawkQwMwCRqH3eopcLVRNXZbSxQguLVdrHsqhT82LUqAaxv47",
  "key34": "4ue1qfkSoyUaNPhHCWJkmppVSEf4B8xdEZ8EQGddSAKtCzMGdBohyrr1ePfmxEqSp3kfMkuewXrzzdkRpxEptM4L",
  "key35": "4mGbZYccqHnCRnmwyqpUK8k8uTS5afgJe3Dw8XYjV2hbXKtmK3cQW3LBEnDWkUZGvuWMkLpDahwU2QED79rvQ3Qc",
  "key36": "2rc65tbLtWiW6X7K5JnTk3kkxfHxamoBeVRjB6yLAZEPUuaAzERTCS65AY1Zow9Z5qo81moXCGLjYhrozmhEMtUz",
  "key37": "4tUcxoqqK2VvPyor7hbewLvzZgVyanSJn2yR4sc7YwtJJ7LycMLWNPYq9VZk9b6L2VUzANhgMTiy1paLqjvBoyyn",
  "key38": "5czvHkdiDQtPPiTqGzSERRkAzjY1jXyoLZHfXHRWwhgx8eV82StqcFEChpSRiEKWagwzTX6pcGJcHp1YYeA1wPAX",
  "key39": "59imJwBctuRpuJ97gC8McWmV9UNNmSDGc76SEhUgSwqH9YYDzN7EaX3KDhoscGKELWDQPJiF3rH7VwnRDJdbtLdx",
  "key40": "4LYatWsD7FBpsrjxibL8RdFrqZYrMsQB1QZXSSiMnPy33t7wPDMwhewqRqmWpcrfJ8FiBgdUmR8hHTTz2Nu2pzqA"
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
