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
    "wG78V6NxfAF1MAvm5CoX45xBQAqRkRB4vuyABcitAVhEG2JruYYgDfoY1jVescJwcegLDN2owWeu4ZYKTYbs4Jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i1qR5whoryE9pDGT5esjrpDoA6vr9jBTZeM4TGnFHvTjB7gDaEtgyRZcRiJVbR8adDMEPVTGfKAv5iJWmqMRJFm",
  "key1": "4D6XDXu2NePFAAhKc86aDKVXBB69N7PVDyvEBXrb5CPeGJpJG6p3Jvxb7K2gwCriN8oUDERRKmaygzQ7VkgiJ4vR",
  "key2": "3MzbMMZggonuA2Cu2eXwMqyaEKZTH7rRc6U7YEfygZbZMG4J1Cqmzn7dpD1n6CtTeUjknfJW5bdxfZLsWpfwQgcZ",
  "key3": "236dA2GcPHJX84P6wwDJ5yELQNtvcWTMjruWCz9oWfZKW7LNL3jt1SxLDqisx4XX8DViE3i6xKqQRmEHmuNgGsc9",
  "key4": "5uZ88cT15vEsFQ8Aj5Ci7KQefVo2iwfCR9xXPkQUkWoJ52o8yFkMeWHFGwcVjgphuAzebkwXVfZ4b6cNKNaBGXfq",
  "key5": "EfMRJqbuEJqrriugYgdGWs19bXCbmDJcrbvc7cEbV9YxTPhDN5bA1HhgBvkKWnXkjw8WzpakFjpiH98Y8NyZM2S",
  "key6": "5mGzDFBpc51ge26HZ1YxBoU8rPqViB9keZxT5SRetsQDpmZAW1SnCkyaCpVVggaWhXd4zvSEFNDpnapjoag6otoP",
  "key7": "mhzS1acTmxCFufFfkGRydLXPzUMrXXjHkNkq36ifymmYxehSHMA229EJrZQoDvRDp62WCG8TFeqvk12yWjtDLHQ",
  "key8": "Fv5b4yosmjrdxtuftNqRkH2MqkNABU3YvTUjtr2NV6Lmqhsedgpqhfd3M8etD9p373CyJvckNVxFN6ahqKB1jrN",
  "key9": "2EPtVESfsMzU2QWgg3toYuYcA9rJF7BtoFzdzi7QBUMQ724HeacV75iDnYFWkFfzjxbyyRT3dpoPcpC4nSE9XDph",
  "key10": "2b4rKFaorC8fc7exMemkdL4CLZcS8oPJ5iePxLdWpef1iiuqyfczeuBPDWDZNoQJFfWY4AWefUSrNdQBgZFrY6oK",
  "key11": "3bhxd1DTR2Ey3JeA72yKGQjBSjtJJWVFraPVMMSfrHq5eGwoGRqtbtmxrEaRfPArexAAQYP6j6y7CxAMyd3WvMvo",
  "key12": "yMNA4TJBpLc3rSG7sQewJgtLyaJdHp1YKVcQXTyQM646PF4uYJANvHUCZRTxdR4XM3QS6MhXZY8yf3V87UK2rDd",
  "key13": "2hki4LmHYssz3hFodJ8kHJow7jA4hNYsMta6VvsB7KLZ6FWJcvDP8W8yYRgB94pLBWzikzUgJUvYRsyxVX7BAGtN",
  "key14": "5C9AaGF49n3yaJhT1TzeqBLignRMR5zUsRruahsFRUGsnUVDe1CSzTsqDQbY8opkjvYYEdkoyJpNmuAFmeM8qymS",
  "key15": "27zHu3nMaTtgxM2PuBdSR96iEoDWxp29zAABLtkPgmHx3hRhRBMhpgnNNq8QsR9FGrEgZRafJuxxzwrz4rFGTgCA",
  "key16": "4ng1Qf8GC8nh8CG2Z3YEWmsbgQbJmPPQxA4WWir3eXs6uTmA28jZwUBY9w8dfGoTFwXXfLqw73y53hgKhPbRnbRx",
  "key17": "5AxF8Ap92mTJYFfHNgXeheyPmpC7vt7D6ZZ8hUWctAj7o7PchVniKhZj22oKWnUmMTf2ufxcYRBEp6qPNKkUEgF",
  "key18": "4RrvPpsPBinuFykc4vbo4wkYsw6cxnzphP61jxkJxrkGbMDNFMXHwJeWNJw4WSjt5buwsFxPDPHzB9pwNLXCm4Te",
  "key19": "4r6zYorymhaxuUUavBmkMLzBy7qnRY26xnQr2xiYNi29oVznUckCJ1khMW3qtCEkWoEZ9tKXcVdAFKFxra5auyW7",
  "key20": "5EtqrMuDtyzTYT8NXzFchoCrW1tCBBgX1WFXprjpnETPYkm4YdL995h2G6ED4fDAr78xWbiiuYkgn5Xbf7TXTWgA",
  "key21": "2JEW66eMnopwBPwzNGYqmdGNFbc87bqzTk5zUEkudKRbXHjyj2DZVJPnHTuU4eLLEJzYAuRyJEw3dDdWPews5CS4",
  "key22": "3yjYwkJt16CVEnS14VhwMi9KzSqP9LGY34CCNBgpuvgdPYWTQ9QVFcWBUreDst5Tf7mL9HWFSmB1JX9vmxY3JT3",
  "key23": "2xsPBnG6ABjdpC7F1ab4Jqp5v3iXco7UV8r8PpPQ1cwM2gxWw8b3frLb7Lv7nCWNyqcUeUUprqN98Lsr89QWuvRv",
  "key24": "48XHfLtgyLZPF5dAtuFKdUjMB72jsSiFwkdyBupsZTdE5114rK31qq6RBq3aymiKV9w7n8oytYPFJyMvCWVjtYxt",
  "key25": "2Gg9i3Mrnm4NohTqrBj2163E2BzXE2gfGK3pvdH717wTZGFvKpXfR4ABskHdB34c8fjLuLBqdYdXBqgyaMXRhE3v",
  "key26": "4aNfStzKJXDWQ59PsHt8Vop2zCzwUjHZM6CYkYNLVRH154btHa9CxAikeP5yByRkpK7uXKaXDUGn76fC8hTfgKed",
  "key27": "5EX62uQHT9oFdmDYqnzEbjVfN27hdMVQBuzkB3PQga36mWXchkMDVUesXXSJzjV69frRYYMQgyEK56cpye7zZQ1v",
  "key28": "5RjuqzVL3DGN5w6iy73xRouTWrvkrvGxjWNr7K5bqBiDtKnyaVyw4etZXUc67cmxeUih94KBgsAEjxvUKGr7Cp6",
  "key29": "3NbnJRP8t2VATYSVCsXixyL511SfmHrRQT3ZE4AbTBaC1fkTrJp1JLKWGCeShDEMjM44CMYeHM2R7th4tqnHNPms",
  "key30": "hs3TrR4PpJY4eFzj6kcZ6iUZp4V5wx6Hk8KMB5QkKpWL6WcuCgESd7Si7XpyCzu3qk2XBuGPnxxZ6oi13wCfxha",
  "key31": "pxh5GpzcEzBfxrwJKAJZgwQdwmvMKHz6fJq3V7pspJw757Ex9ShxQYEckpxhkSnkQjdNtAXGxCaPahoJerxaTum",
  "key32": "5VbrYwdVf3n9aQ51Rac4GcJp2BPysTaSNGch1sEcy4NhsvBcQNjTMs5FnavkawXxGZRSnteS8jFdRLmEUSaRwh2u",
  "key33": "4mLB2qmTKuEvNwJpiSBt9hckQTcGEbe2ja98RRoX9iJxWnY5fe8tWNoNK3kTHjPdJ7GUpAbhtBfPygUM7PiYR8g1",
  "key34": "4UfuiwVAf5DbFtbe6SLaN3FK9gk8ZjjmbvHYLEoYbLUSTCTaEK7xmZ1KaxzktBCSTrQZvEEZ1XiHmnA36NxuzxPS",
  "key35": "Q9PfnZNiGfF2Y8uq2oxMjX8nWVyQpk15GqGmQ5ScNqr9TNAf5EztmK5aiojUwteEM2Ut17HykJnYzE4H5VSzsrb",
  "key36": "5dMT3YPi9RrSGk6zsv6FsQqSDqFo7pNoZVeLvmQgJagFdSRY6Xv3ZKJ8KqiVrbXscPNpFyvW6MKxPeHNpn39bfTC",
  "key37": "5iwU54iKJiHDx5rrotVAvqf8AvVhc9RBxDFwA1bCuciPawUrS3QqUPjVhMt8AzvsDFGvZDKHVZwaTtYV6FCGKAzu",
  "key38": "4zvAeYHgUuWYhPKSJJPnirSh6WbFfHtcqKJx7UTYkDcs38QrThygwRm2XtKQF1DyJaiFUtUXKHiVB9WVkVTrMUJe"
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
