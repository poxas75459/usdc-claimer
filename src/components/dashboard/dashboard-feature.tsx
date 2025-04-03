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
    "3GhUwLgZJkHdqS2m5f9qpm7BDv9XiovGTZkzTpc3XQ4dHtgcmwwrd1GfJUeivgdf4TkmAYADrTBfNDc9XpsozChK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z6zQffbU2Se5zyGww1mh3mDJEvKeZGQp6SKYXWJjFktDu2DTRQbSLPuXhYuqQJMJRfbw3V9twgBWsLMwvHfagjT",
  "key1": "4vzcXVDQMoq562aLzMGXFYrRTTqVWtwqRA9ow8bHSx7n3XU9gJYLFNtdKXg7ycTwYfyQukprr4tdjj632EM73BVH",
  "key2": "47MrMxabFaapjq4gFxDKiS7KPP9A8xMcWPuSWBENCgVRfhSkuYWsktLGMbMiJmdJNaw6TKGhvYMLzcNYJPqmhWLi",
  "key3": "5TgscyRPE783zoW4FZrPzGBi2MSRT5pg57x783c1RzvaxtXA2QzSq2QpRXbr62wEAuDWPwCuKQQJVpsy5bFieb8M",
  "key4": "4fP3gdp4V68fNdieA68bNkD4gyon6easoCReoR5tgrUjtwREo6nFq2HcEdgokGvSN8Sc4D4foLsokmSneB1gHco8",
  "key5": "2mpCSWAxqnFAnWvmJdKyBW1fm9oMxCa5h6YVcirxd2c4WLZY1ANn5xXVLhfYbVtkmxSXDPBAZ8MUXr25d9Ss1pTh",
  "key6": "26RmJHT5gDUHaU2JWmdPanNs7PvrHvTmNYDEAp4d5PV4hTq14iQpG6numPxWrmjmGeeVnjh1LqhKKGUdj11X4yxP",
  "key7": "4JUcJYtQbNwotCCQZnkj34Nvr9kzMdKzpLwNXzZXKgevrVL7CL8XcfioMCLY5uDyuxMPJn6C2L1i2HAnDAuzQGZy",
  "key8": "3BeG1uWuKbKfj2PTXigDrjUqCFhDG4EoeiqzzUSrS79GoVB9gNyKmitqr8Q2cGgnnHjwu1WgMoQYRVF5JCzzyxab",
  "key9": "3FRFuB7TJJ8aMGiDwyTyEK2gCosmXrXcwx5WZVK9nnLrbDptk8WUPohSx8B8SMyw6Jybzoh2tNniNdzwu8J7F14o",
  "key10": "3doJzMu6AcKEd9ih27fqUERLyyVVMMz9ZkQjJ6vaJKsd8xKaABvz4TtsvF7T4Fod9SEKBp6w4fyZAAGNgx3QDfQi",
  "key11": "5GhfaNkv2KCj7sNPC68tELtjEMi1tWu1ywaS2aoSFRSpZNS2Zk6Aq6ZexCTkEZ4UDe7vAFhYpc8rpkY2uZzzkMuc",
  "key12": "5Q3Peq5krefkzDrP6ZfbQvVVxMae2uZqMQkwuzmuUBBntbGYQS8Yi2Cx7j6VdeD7ggMRrtg1z3ZtDkucPJfR2jLg",
  "key13": "2U9jhuUxTU9PS3cW8vY1p6WZLUy98JFnJw3Q8mdhraFeScNesxdyuzmdNhHoEtYZtGACCbr4oMCXPASBkSMZCkYN",
  "key14": "2hPd8tfqPaXUtbMYckVZyGEWfKoGGQca9ZjwvTqtMAaJp3EDi7BmoTK7SWQQLvh1hSUwhhQQDXMNQBe4RyiY3hC",
  "key15": "88AzPf6XDtj8TyFHyGNkq68N6V1J4uTrxNaTR5qQWXTuBFcJVbuymv1MfSCdrJSYPDgBBWbigQjHs3xJKnZpqTi",
  "key16": "5nNdL9o64hV5gPUwq4M2CYL8eZRMh6mNw67UEJP7q5G42QsZuiJMup5wMqqSDpgwLKHtRVFUtnAUG2Dj3V7Y7mH3",
  "key17": "sKR77MwkQcY5stuFDiLUn9rMpUitDvmZHHvBCtt4j2PnXvqLsxuasd9xZfMqXxHuuR68amEQf5dWMKgQ4F8av2j",
  "key18": "gNKGXGjXMAjWHMWfvSxUQAfgBXQmVXB525jvs3UxujWYHq1pvGVfeKsQ1ziR2fLFpZ2vJf7g4NZptZMRTrrxLQ6",
  "key19": "uh7usxwkdpW488TJRs2QiUGhn2s4TfYjSVdS2f6oF7d9ECZjcmTkHJ7nJr4xFx2Qj84atiASPBwVNXwEYfUu17E",
  "key20": "2Sjgv1qQmu1AWc1PEni17Yfbc5HUz4G23DVb9ZryEz6Gt5ZzFCwMG3z7GWxNESf1uwyyrN1qtXDVWyxi3LXHWyJz",
  "key21": "3n8qzf6cL4hLhodrY9X2ExRTty4jeVUfefMx2B2EwhVftuuFDWca79iZVg572yQm1UAAMSmkijRnMC6kQJfx1mXD",
  "key22": "nvSbNbPEtzj3V1n9FaPNKFVEAQx1MobcT52ebf9qpW9XZ9aG11kwc2DV1kUo6iz6oppyBdoVWDAJwfvdDD2MBRa",
  "key23": "4LXZpXCeoxbtGneGDfxf47iV3y9ifSYpNjMDetAQqmQRkQSnmRyRXeya6ia4Gz2yDsv6kuwneB9hxyEnatx6K2d3",
  "key24": "2xccGdo4G6pykeXiujzExDrnoqsk4G3FmDjgMf8kE7NVbjqvZv4qY5dNp7K1sHuMc4ns4Qy9JPqUdv7iQ6cwVCBw",
  "key25": "3YJcpi2J6MpXBAjfKfJNznUrKmagAAXUXhh3GXLxxmu5fRazb1Y2mXGcWNHw2YBrV9rPgSbf2NxhUPZTbJZvpNav",
  "key26": "41kJUmcwqah1JyPKk1pjvDiY9fNV3Ud4tLLnqnPaaRLhU48VGh8NoaNEV5qPXgByhMcnZb2zmDQqx9FNZEdeedNu",
  "key27": "28HxAbcBz7wuY2X84Y7iGVdMqjA33eZVhj71JdCXVGwETciywGdJhoY49UKBYRfbWVdR24e3NFoQe1kPPwgxeo6Z",
  "key28": "2C3PsW298K8FkZ5HzpKmhqpbdNPbVWkRWBNTfSEC6QDeWztey8FYmQURdAUtygf6z43R4CVuzkBb5ypcTfLebwar",
  "key29": "5imKUxe2U76gcvFaiBVPsFtdLBrZaY55pey4iCjLtEFfgcHswxcF8gb6VyUVho83XDkSnPKWzzoVF4F2c2FgLpn4",
  "key30": "3JxDotzdmjRWu3BCfG3L3KrKVG8E4XQfv5EjvbBTkLLWwq5CRWrf572Li7RFqBbyyZzq6n3JCvu2QgWdptDZ5PNk",
  "key31": "4711SmTKk5aPJbveiQkJ3xSwXY6YTBKEvAcCVi9z4r5QeZQn35eVZ91kbbhrSSnLcHYAUcwBm11hUJQ8Z21JG2Fx",
  "key32": "45JqzG4B7BMhn3KFe7Vcd3uS7es1psFXUrGyLrCDmqxynhLDnHQ3PcqQnHJ3o2WqK8FnzLFcfoR5GkUPV2gUf1Me",
  "key33": "2WGsjqdEMmyauDdsxJvjvuKcAUEThcx7HNLV49GGn8ga2bxnu6SdZKVeQ6xwqPCNdp2e7XJcvnaENyphQkg7LJeT",
  "key34": "59P1tLoHyCxXbKkZxskJD4vBVmNgr3gLwM3Q9qG6S6wHabWF6i8qFsqfaWEBVe7UdsNfAeEb326NrqwNe6Wrr5td",
  "key35": "3shVacErVY5FHhWD5dX2TVJoQeC8zYnkRDnjuioMYHRmh1fAhnYr7fokbhJgFj4UV3WpHS4SsRPmT45GJGWbyt9J",
  "key36": "22mKZ4xqW8T2MJhwC7Zd8QDbHpnHK9WwuZEzSxzRHUEWwS4o2qAXu9dv4ZZLQQorQeEWkYjwB2MtjTf1rVfDA8VA"
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
