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
    "33CryeqsM7B4Ce9CDEVPj3YYwMX9wkDReGHi6jizokAiuJiq1E2ReUUyMDePpsdw54PF58jqpRNoDnDjxpCyyNfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M5LbZSQznoBiJ4EfPnaFSRDsL1g1BqsVsXYw8NEPmPkc9Ezz77KDrXtiBLDnS6eUAzpxnJKynrwA1HBwr2KUvUv",
  "key1": "5Cu8Vtp92STEiy7D3trJYDMkrqFfigpEXQpfAjQzY2YT1VnaDu9Vo1gSvk4SUNaT8sPXSUZxh49jyDDisGAtkq5w",
  "key2": "5ymFVAaFDuAJ8rqp2R7nE1g78aKWogkhJsZRsQdH2xqqdj2HoodMUZCQrAfVbzE3FEff8Whah2e2nLcZ9Y2u7XKh",
  "key3": "4DaPUWKxYPyjBbssm9CsmTxZyMbQGRK9h1ZWqYD4ePDG2AqjoUXNLFHi2VfFosnLdLub7hyM67YK5T8rdVHbEmcs",
  "key4": "4bnZsLvW9FhGub3ap9V8fUbfJpXFX459JS2E4e4zuH51amosxnCqyaxuqqrDwmgWKL1gPkCTigtHhaUidRNHvD5S",
  "key5": "2FDPrwafSgyE7LiX9kKGhZ25WDzh9i3PeWwsULPVsefLwwZDkmrxpr5TaaoLBpppQ8pfYJivQg4zCC5GVjbhAJZ8",
  "key6": "HyyvJSZYoJ5T1gX3W4NaFifL9rQGKetjrA6wdtJYpkKGMefb99yc1aLCpnALgJYajZhHj1CeWcA6P2c1WjKuGCa",
  "key7": "47mDH5MKszau94uHzeCxTJ9qJY1xs8GoQdZMsss7V5P57uaHfzDGJuPQmB5ciGPDAuEh1vyM4mwTcFyiKMGJvPtp",
  "key8": "jtqJbFa5ZYjMnbn782N7njnmodye7TUyTY4GNJcJvjEuXyJcYqLT5frNgnVbm46HGcWpLUoFbqed4QrA1mXQF4Y",
  "key9": "ZgVxHgk6ire2xbubSER4UZkBTgqPU2AbqxxY5JpgBs129rRQ4cPoEd8JMJKjnkq5XtZfwFy4QyamHR31GiY1oEf",
  "key10": "5XzEzN2meuyL4YN85tuUrNqhwV6cn8Fyn79QhCS6Uxnd8vcxb7ppsZY9PJG3iCc1Tw21Bc5M64UBkT22zJRoW2AV",
  "key11": "2C95kLJC5XNXrH85zD2SDZv2zPvvpTw2oCFEAXXiNS4YhEsXa3hn58kUxotN3hzaDsKDK6VrjupuhyguVdEagZcQ",
  "key12": "3gmwbY7qsQxP8h7UvwqvYF2YdtWLjNv27Gf7dzqHPFpsUAgeYXmPYUT3LQxCm7pLxunQdF7STLvKxCF99MmBey1r",
  "key13": "5T7uemy4zhHUgoS5SzAfAzoqSEEZcoAwL4eY5NMea7v7ViBgL5H21wzdTHD2Y5sHHSDDHGAma6XK3H9kqywJWSzJ",
  "key14": "3tSVnNudVEjGduGseUw7VC2uzdDbtTbfKk6x3CvcDQPUiv2V7gFqW3WD2ewVAPGEHtM7Y5vkTEso4t2jxNLaBHVR",
  "key15": "41T1NvCJZPZtne8Fo4TXcHUnBiYaZcHKXym3mdb8bMUV9ib69w1pdLDAfeL28u1KhvxakkYwbcYtziRJQXh6SKUZ",
  "key16": "dCvn5LmHsXj42Fgu3uDBadnycY93xSq4ME82TDSCoUg7AmB5BT2LoSmDE4CV6xC1r21XgRP4wKeD8i2CzRwLWsL",
  "key17": "4kzf8iWZoxHo53MfxGEZuSSZ6WtZgV9EWE9uksRjwW5Mb1AJX1SVrp2Zubj2LTyw7WXb76egWNMNqZp1VozKa89Q",
  "key18": "5jQxhJgupGpyUqXhgTpvSiH7dAoqNd6M4ZihqUNL99Ce2vyaSYzMYjXmuKXi4vXyQ5NG81UkDwDuANcXiiwDAHE",
  "key19": "64nc7U7eYGztcRbTxUmYYfAyZ31CiRXsAVFaZNwXws5zB2BZ2KjALaitQVCL5QC8NDAfGhx32UhuDaDA7UQJrAgS",
  "key20": "43gJvBQ2yZNznVm8MFzmJ64ctUrqc49vh1PD6ndbf7FkMWh2KPATxdMKjcaAVv8zSogB4tAusG5WZtCbsUHYBze3",
  "key21": "DufMBuv1Bh6wqCLCeVecx8D4kVYu5bwfKYcroLc8m3rK3ZR2fCzshVjNXwRFBuq8Z1kPHHW7Dmp8aLu4vnVKPJx",
  "key22": "VK9goGaDKGB5Ay92uLg8ao5nTD9y92qdqN7kiNYyJgp468DCo7vX4PfnLfzMXQp2DENN37zDa8VxrPKGoF8ZzEc",
  "key23": "4d2GniRJHU71uTvpQnHirewpMZLFdbJX4HDKpbrPRfZrRHvp4FxeDNdVcrG1WmNY1sdGULQQF2JxK3LLpcMR9gKP",
  "key24": "2p2rv8KMYZtTqRtJQPHaAwDscf61DmXd8GTDLcbb8fnxjebWkxc2vDK8Gax8MGx82F1b5N53YLFcnZzRSZo5H48G",
  "key25": "2tWFSxfArM8SKVCQHi6fhwdDGjSPipiYqdFi2p2xzhWDoVNSgjxzmpVvuybBwSUFZTbkEAYS7vnMDivvHZ38tuGS",
  "key26": "mM56uSyhAs91t99HJ9k6j2AZQDJNGmGndh7pBfHDwJfhUrDK5vzGuYRRuQJQbxTrhY53UJ3FjZVgzAgjtvkRaJ5",
  "key27": "418Kj4L9Y3wUq6rC6DBGdX82FUTw8GQJoZyxwhLM4FsLD3hyyRFnvVvFQ7oyk4mCEodGiXMxnQUniGJxS4aDmUtE",
  "key28": "2yuLxUSS1fJuQTKqJr2ucjQSnSPPHmY1bPQYwMyWmiqEGTMx9iVgV98wMqyAqJwEX2ZyTCxboazUGkM1Rievt3Xa",
  "key29": "4cUEpXgin7VyuC438ofYkwPs1z2KnFT4U3Be1cN16QHzHmJjzBSZbUMiFQ2dojjaNC3jkpx7w78dtVS9heH5woPB",
  "key30": "2zkzxFUS6xqzHjyHzgN2DhxCay8Z5AeoLg4VSw6artnkbWAPjS69PFcyX5mRepgzHwaeDjhkuLoFjDCg2mMsZEph",
  "key31": "zkUqnojtZtcj1WQ5Y46LnZKDMMWDg4FYSDupzbywWaFK5dk4Dg4gTBCx8fQJztkAHxEWmfDABsm5fM6uj32kQGK",
  "key32": "4CiaFAZY1oDxhkSZ3MRs5zkyaSASB357ufevBaLtsfTZwPUJM6itndKi1H9f5cU6wdH7wmMr8omGXGi8mcnHqkAc",
  "key33": "5MA4mcfwmaM9y12sPqCi7PAaMN8VBfg9HVXPXSFn6vcAjYMJ9RDS1rrnyt8ZPTmKiWDQeK4wjJ173qbfyKWUwmHc",
  "key34": "5DBGqRYyxNcPpyzbtzuUr32YgBNjmMpArNUJTLMXT9hYTW7C5FUJWxcgjwJnpFi4zENnFK9HygM6EnwTjXSCZmgZ",
  "key35": "5XKhSByp2Mc7Q9LzE2j36khS6efcJAbLQFMCQvVRczGkmNwJarnhYFHpL9XbRErEdwPFK81EcWGihXSCod6WtLza",
  "key36": "3mfDKskAcJ39hHXRMBoSqk2D1se4aRiSEWjVDioD5NKDgFhVwcjX6JcJpQgPyonx65ZQMs79W8dYXUubj1T99RN3",
  "key37": "2qus583jPNjzaHwPoEXzbkkUVwb5npZyi8nr3yJP4YpxVqTferSVYKgVNy1Kc9XFVffHhWTbdbDXcpHby7WB2Qgn",
  "key38": "3AuG9JQye31MCiiNRHYXbbCmeqhEvigQWhx7xSKN371rLnMjGD5rjdfot8G2zuXopLQYPkkp3N5vbuLxeRpAdmP2",
  "key39": "Pa8Ybg5MebSdDfLVb7VXNKpW3e5deYteRMJCncHBaTsAY2NA6XK5e1ADuLbVfhPn8cfBPmXWL78A1XAGfhrtLar",
  "key40": "rFeMYyKTJMWoaY8QNtVC5btdfVE2HeNGNNevtETecj4QmQobXguzHxmTi6SQb4x3DALesSg95s4z13mzZmBusoP",
  "key41": "395zurBQffLiv4eLnQFkgsy3Hm2PnXduMG6kUcrs2WCe5E3G5kvfLskBm7Tc51vKYXaA7JsyMg18BKidq1VJkeu4"
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
