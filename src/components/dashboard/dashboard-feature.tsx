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
    "tCn8zcxZWHLTUc8PHjEXrPsBwTNBEqxFinNmNUdthGQkteAEByPNYG2PH7aG1xt9671xSRNk4aiuWALaWX1XDto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Acw8Vb5LJUDX62SJMZuzNaV1dyk9fQCTQhLuPPwNxctBW777baBYAegriURy85bjhHvvi5gurKBwG1GyFsjCmrJ",
  "key1": "3VgByHW9HhVV8AKpvGaMcWdeTp3CZ8474U9TJUeSYoySVU2YbGfDWAUT9e9Q8ACGfwCPqgKgvmgGSYqLBe1DhZuW",
  "key2": "2F7VmHZGCbYoRnxPdGSTGsK5EpurSWDZJBprqy7dVz8sxbXYHwL6GNrqGPDDQugVaxcfkCu7ufZZZc34yKiQ5qNZ",
  "key3": "4qyJWf9R6wx4yg27man3tEQ1dyWv83aLrtgUnPcCmXjhdv9tz2T2QAcZKE1bG9uRLZ8JLN6xEzrmnbn5JCTmqkpA",
  "key4": "4E5GerMe7kZAwtQgZ2BmXjv3tPndD6vNHMR9CNYdppKCuiTm1adarwvGHBj3ntGF7Dfpy1h9o4Fu3vKHZChD1iHa",
  "key5": "4aL8xS9YiaqASRJp2cpmNL4A5bxuQmPkpFoYiphNAwx67njTQsZpqMgRkSjivphkP8fN2c5qpSY1RPL6YSukxuBr",
  "key6": "3bsTq3B4DCZp1S9qhTHPBcqeFmykdsiR4mP7NCAn6JNK3DCKMokCuGD9a6tcKieWRWZt24KKPgqxNeReDNqMQ4zk",
  "key7": "3An4HBTvYzYkB2gVCag57kVEvRbNnSHherrbwKYXghNTtco4NzbmRmxqmPmQgVoaLQk7KVwa63NgYNm6gZGfBAQ",
  "key8": "2KN64FmsPAMrq35yha7T1Dmc278BVD3HUHFPZdH9DXyUxXBpE4hXUoGouLW2FbfX22oGH99LyrtXywPx8iDmfsVr",
  "key9": "5KuYSwZCVf77NXc5nx6xZ4H8b2MTb7yYH3PacE2no4FxSyKmdaPQ6EhzxbQwys5ieYJP6Ejq6vij1UNdyJC7n8wq",
  "key10": "2JmRZQe1TDNnLkKJeXCmnqSqDhGCsRm3R8tUF6aPFyYjW5YrDPMxkwG68N55Wjqzp4vBn7sJ6FLqNzohnvYJ2pKs",
  "key11": "XsFwiqcsBXZ8nZoTrwJgxN1muL3y2cfxFU3mqt3eVM25tKa5sv2VaUMAM91J8J1RzWLtfwffQTCm1ioagakdNqq",
  "key12": "4HDPNikSpVF5xi6jLe7fTPiQ3gzmQBg89pn81rtZoPSxs6dNMsjzno3cL7VZvoEfQko8zbyFGxw5djTSDLvfMJ5W",
  "key13": "3LZVgjCtdAmkUo8BopRmgNoKNdajL946QVncRxp8a8vxMWUFVTs6aYEfA6y1jp2ohJsejM7B3ntgWfKvAVDcTzpx",
  "key14": "3TWS1eBgVEWs3ju78qZt6gZqs2hp1JoM8EKZinPVVAeE3586cugrFTVNGhRMoYVzqzXWfvWorUtoc5B8rgVowEAG",
  "key15": "1JdwJmqG7AfBzWiMKPzjqjaDy17ChTLEUhyVGvSQWxYFr9zZMW8Y97hyvtEB14R9xBw2asLV31JPZogsWWCQG98",
  "key16": "5ToYkDMqfSA7wAyikkXXGtCYthgFR6i5wpLJqE4SiJ5tdLRwBsjNrJdnjCSV78mvNoY8GaoQaT72vxcfp5hyGZKW",
  "key17": "5cN7pCiMBFQALRR6PyjHpjPaPS4YxU36uB5noE2MmcbddEUwwJ9u7j2XYgRMMjdS7s4yQcieyKrJe67nVKVWVC4x",
  "key18": "5EXwzN2jr7BJq1FLjMqbWAKL6V8hPsJR7MVgWZ5eBCydzN1z9wus1r4nCsgmVyZNqiaTBLgb5X7m8zFsXNukPbA8",
  "key19": "4qrYAVdYBkdc1TyDM1iEFDKUpDPzvGWHDLmmweqPqkLtV3Fu9ZnbCZPZY8gHaE4WDwYzrLv1eJZjN2kS9CJmzmv7",
  "key20": "5fTYDntnj7Y4Mei3axz2RP7wQv2FfhKcChUPuQqW319tMo3YRkQoBsqHXhrHFkM5MCoobfMobqnjduyKV15aMerm",
  "key21": "435DeWFX66nz7ps3694EEXQtkoUUM7fKr2AmWxkPdHDkjtvb5aLPyKC6wfgg8WMBh4TCfJ2fiZyfVbkF6w5JcnEY",
  "key22": "3sW5Az2k3vRMtUJ5UfUrReAgLAMRK7E4reUHAXnD8Uav7ysGW2TtTt4WHYk7hbHMjth9DYg3D2tacZa7onXYEKAU",
  "key23": "2EoenHkGGV5XDN1WXWV1dw9tyoj783zyyfxSaB2heUioeC6KX1xU8qWHYfbi947rf19PrNKcxA8z46yWwC1NfRFS",
  "key24": "3RQkfgYie2bgjzxU9YBMNEAT6e5J7Ff4rRbU5ZqPXag33uWCVMFggd3BPHssvYEJ79Z9MB8ex9jbrYhPqD7MgQv6",
  "key25": "3YwLFFrUtdpr1WnwnMaTET6ami8UNnS6jgw1Hy93GiNvxSK9PMRGuF5iXieqEEGWTAqVjebcaAkqoUVo6ihLoQbW",
  "key26": "3gw4rmeSrHVz29GZxBCx2wmgLL1M3VZh4MG1Ummrcxy79cXzskraYFxorMHQd3HbGWgZx4U5bXvZmZrujYgUkShY",
  "key27": "4K1xGCPLBA4iafTNYBcyaNoUrXc7cemRfSRCZ2HFc8cLq3UnHhmvmxWrTjL2d5E4Qie4iZANWhgnhk7eyWQQvJdH",
  "key28": "37JvxU1RZrbsFXWheQZEMQHQ3Gn5AoK1142EdL2ZtUGdgHuFXY7XvKy7EvrPNecCJHScuZMu9Wyr6iyid6DUb8yg",
  "key29": "3YBFSR5g2kM2wptPxw5LwA1zCmqTsQtJrnyNfPYixhLK15QZsw1hPeaixrP8QKVh339hrtPHhWC1dmpnxHShZVmX",
  "key30": "3TEMULb5Z5T8htNxRF2xSa8XeTz5VVybgo4ExcbAvPfivTQ7j6tagk4CUZmxHa7z8W3YGAvWaUr4cnZonCEs9Ubk",
  "key31": "3EyP5qiABL7PYQno3sXt4xGVLjYYevKqymYLzqTUqKGyjXrgxngB7zEowU22D3526rb9bP9YuhaKf3vFj9pRiaxi",
  "key32": "3yxkT2VdZZcqL8rj73ut6VQrpWzYvZ1h6MqH5bURtec2B59YFixTsuQs3dXM5PoK1thPCp2BvkRtEvW93N8Ztjio",
  "key33": "bM6zE6s2KxnmsjsWcywe2428Q6JMxJnx2LVyXjVpUkC4p3TNdXcRsTpHjfdEHiopjFvzpR5MeiF3N2A9d6r4VuX",
  "key34": "64m3vmUpWpxhDK6wCGoacxDQ14UrP4RS6PrC6UcxyphdTN4Jikv35ukvoYmvYQpZTr9SjgfbMAVtLb2sneyAHEfn",
  "key35": "2h91U4rmSNSwihRNfnpMGFgX9m84isjVnc8dY3g5ZFwFvwzFBXyuHnNdRV8m8FgAZ4cuUPgWutE6ssDVS1v6ivxJ"
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
