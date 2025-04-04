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
    "3mswJkbVqnCMjsd3n2YTQqosbqvbxquB4A1jTcZzrWS6AxSkutHsS6ypajBeAaU19KsM8fHyWChbDnnYDLCvsRna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ex5XRweaXXGHRHPA8tedLFKCQUwWxkkfFXFGAe6PDqbiPz3fFJGVGrXvZcXaE9qrbe4HzppeQxsmwqStd1YBM6",
  "key1": "4PDMA6H7H5KKGDEgxXHMnSueW63e1EguteprkNdsESRMty8Ugi4RMMVNihMwc4emuWxibnG7JcdmfaYcM5AUm9NC",
  "key2": "4LSCBNsRZEUfwK2S8qpD4CWyghMqpnycyaFLdjkvt6UacDMMrKz5fLinT5HR9e6dam4qXUvXUpwKDZZhC5h77oYr",
  "key3": "4CjntntvQTy7b2NPdMbtSBTsyXj4mDkwuux4RkfBMfhnfTEFwezpZZAqCnDDZbGZWuiMW196bZGUqurkV4DqhWMM",
  "key4": "4xqE1hxwiUzQstX44vXb9YXq8PvHbctg7GVNbk4Xb8mnGYeqmLduMJFrNqMsTEZwgW9EEP8Dx1heHJFn7ZgA7bgZ",
  "key5": "5f2FrSsR1s44Hwsfut3ejhYzoGVvzTfr53PnezNRdVSvjuyY6hWxFuziDLS7ambf8gcxF5HFGME56vPUcsVVURTS",
  "key6": "5Qd2WgvhHsEPGSw9JM2RZfDg4dW1EfAHAnB4gL1eD2kqUwHvZhxvRAbgrBZ2QPkbZxvPWa52M9eRhfNXRWnrQM1G",
  "key7": "2wVpDLGoPcsKbgSALVPJ6g1wHZwj8T2ur58ndVMfRrrLECcWRRqt5QjVCx7Vikk6t9684Cjz765fTFwvqfLHDBxF",
  "key8": "3PwazJ4iVPthZ6JxEW6i9vnZnmNHyEuuSzhLKJLAMrRu2ysEMqQhikcsMVfJ7odZidYJNypnMGKUkZZSyqAp11Rx",
  "key9": "2pgkS5o2dh2ZymnUuMqP75qnnQ2mujNxH5db4BJ8BtN8fFVzCPM7nbrh1kdSC1ef5JKUJnZXnoxTCobNsgZu3ixN",
  "key10": "2EBUfTU4gJ1E9XuprYsRr7mcGiCLBh953afywLXmDhJWHE4RAkMvznkPJtdSoJ45HNZv4hbUD4ehyQFq7Ao4P6jK",
  "key11": "5UdnY5WgTrtPGBqzfXoDd5Tk3F7A8xaCtLhLo15vFJ6tKgRQFKDwZPciEYwo9F8YbXCXgdZPFo8Eta4fUuTAh4jL",
  "key12": "38te8S9TTjgCLLVRYKsVNdRB1ERzPiKqNVnavqvgh3wXMXdEZysiXk5FBQor7o87euDWzG5heUBWA2TyuBXezvqx",
  "key13": "CpKL6Ak52LEfMX5425NHWd7SEVKYzyrxuebuL5j8Q6gwHiSA5AyrWUgK1sr9VYUsfA4VsY76iA8qyF6H9yJTcpx",
  "key14": "42VmzptEewW1gL9Qq96Qcovvmfz8yAR9wKEs5gyUn8C8t9iZCYtXdqyej8WSHEXQH8FhQNdYzFcKnKXasXKoshez",
  "key15": "nt8pVm7S8UZCSZtD1aRao3ZzjTT6htAUd7fzrwvyxeiJUTjVc7VSDiw4JTZQvMi66NG5w3C29kCfhhBENPu9nPc",
  "key16": "5yt9e37ADrzf2qdk6nhbBDctuL35iQiJPAXZGS25HWn6jWXZ7pwY2u3NqWdqnUd9VBgj3j2T58fyJrFnCooG1ent",
  "key17": "bTfPpY9bJz5bwRReKnpYHa3MnVM2HoqRNGepzjeyranHFnok63K1uox849o62KbvrhU9QH6Phf2RPuSQQ6SotQD",
  "key18": "3ybBxMaAKLb2ZvQdhL55mdRcNm6q1BeakhaNnvmYrT4mq5v9L1hoUwmr4sMdWXaxr8NAyALVgftjFv2w9eXuMQgF",
  "key19": "5oHHuXkG41n1voTc4MVVBHwLW9QFgHC13EVsjaBWFnmWe3JZU3xhUaYeF41tFBnEfjuoPwsa5uwVBgvqFenX3fL1",
  "key20": "2s9fNFVJtcg3nvgdGHSuWJUX6U7DS5gvHNcNxUr6uJmyy56MN6pzvwqKdbFDCa52tvH3ZdFyUN2GXo3eiJzY5FSi",
  "key21": "32sHSc9UA3MWthuhoHzJojZmayjcVwky17LzTytjoZjTkGhSkjPs8ChyL9Yh9Q7F6pAJh8TNtaeAV6wrtDiSUqi8",
  "key22": "3rsPcKcRpBXCcfcEWG8jWRYSWm6hSYLoY71yZW6LGT75aqR5krMvdKfPHchPyKRvhuvAdUZDmKdo2JACRZVcLkoa",
  "key23": "3TTwA3GiBduLR44paenSzyAEo7rnat22h4cHg2SnsicYqxdjXmgsfEJVR2JVR37nG1uD8aDThrEYi1Dgnu6z9wEA",
  "key24": "3PfCjTePeUEotWXLPJ4NfNYJsig2NoXTBkVmGw4kkGqYvMGCwEpydxhdwKs3B8ToqXeNzav37zy9RAAxUsapfuFK",
  "key25": "4xhp34uomwYh876QkTBzE317D8DjY9vi2ZBDaak4PHu5VjaiudMbwxy3X7eadE2qnWSPTbV76RNhHzMaJGx681dk",
  "key26": "2N8EvSPmGHyQJC32LfBAL6bn68Snwewkzy3joFVp38bLZQCuHDBjZZeP7itzC3wjceoZDDcFu6FLEVxgE1ZSaTXc",
  "key27": "LY4FjRssJAFnSGAAYceb449m5BUc77jEkPbqvW6CNWd8iGiHiFh42S3ti4Ex6eMKRRGNd6FRqGvUzX9oQk8KoDZ",
  "key28": "4Wy1erBetKPFM1GDqN16fijockSoQqNNt3Rn2pbJFjFAvpoLnojVTZUG6pCk12Bf49dyXgQUkYaVHXeJK6ZWjYTZ",
  "key29": "3E49ii5yUm6JtFSJz636oXHWeiC1s6ApY9S8F4H3VcK6eXsFi6yXYZBL55EGjSVfn6ZZnW21w1VXMphQzg82RaYE",
  "key30": "31kt6FVWj6hAhksfM2sPY9PvDv3uAPC5NACe8J2Z5NG895Eb1qosRBuaQJx5kCRriup86E4BS3LufE1GGuSJbAPo",
  "key31": "2m78fCa2gHQXQyTvPBMQDDgYLMNE6pusk89tEXnf2WBFaf4yFmU8tqX1YZNnTiiXm9tgvfr8v59rSjdqCf15iZA8",
  "key32": "5HF9Gt4qzK4PCJPhKnpHgVsxZXPP5tiyBNJqQ3eTDLJ3oMLrxQkD3N7RMYPCmvpFB3PjgCuqqoHNznief54DF9HJ",
  "key33": "3U42qVdekE1yabU89ksXjo19nyb9N4s4cdD7szqC619j1UxpKqNhG2h91uEHigcFE618FVGJchZeP5bN2L1B31cR",
  "key34": "4Tp73vkfWnFVZRrciNZV58uc3mc5SQxvzkW9ifjGyk8SxmkQx1gwtgBnfEQFVEr7YYZyv7drUw1d7p9Q4iS7KG5V",
  "key35": "3e6yoNDYfV3qQRfahxf4asYQzMQ2iMcBxvxWf1YDLrv3GJ8DYfQKozFj1uf8SxMXM97y5CStNUUcaumKTGKEKF9o",
  "key36": "4Hsf16WgkjTSvDMnRaxHi2xu9qqLjUbGSQshhWHYSPNY51gA6eBwtijpeETTz6orwznHDhhcxHvbJVeaMAgWYoVN",
  "key37": "62noBPXs5nSBvKRNDkMBw2MdhLQqzRParx3Kdtbt7DDiLqdYiGkmV7JARExPXFBmnxW9aE6udGTdMrY9Xyxe8GZG"
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
