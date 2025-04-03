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
    "jghb3hgUrigkcaeMXhXEfgNpgYaiyBRez8edVZxBxtRQndkGsCZkoDTgpSqGDNPY6gMqLWQM1kqvtoP4y3knXQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w8HNP5nRj2HFosCWQ9ZMSj3nbDYTUz44RV7Ki36fe7dtPciEx8QVLUNWH9sVyPRV1p1jj78ZP9NagrvgMH6H5Dw",
  "key1": "4MYBqGVJiMHfYvFsXWVxtJsr8EvnRZdE9sh3cxMhst8nGAo3TAsYm2AGA1B9GmPVz5WbBB1mysCNStwr1W5pb3s6",
  "key2": "4WThH778HDe96q1Z86ZSABD5hMX1ESVcSLFsduGGSXWLsDZcN4bXR3uJUa7sSguAvGCfyjqDsQUSMfKd8TuwK12t",
  "key3": "3tVZBpQjXPDFV5h8h2sc9T1AmKZF62wXdh77emfcf2eby1ZVNEhB8DE6VoJQssQ1HnSL9yfCjYVQBLGrQvkjmdHe",
  "key4": "DccCyjkVbr2cFvk7uHoNBdEAL2xQaFpm9wAcbnYwbw9vXEHSzhjgRt48XsenYhakvXGDsY5bGrBd1n41Aet7dwS",
  "key5": "2xQZQBBm1oFcie4EiB8VPTM1GsQiaVwKCFbbtr1CaeySskmMjP3FznPiorPv2LhjcMMQqZLwsHZVdtVNx1Ntpz18",
  "key6": "5GDTtP6wfot6xom46jXVz68A69GMNwGotGrXUo6zp4bJ6itTZMSdJnZys7Mr6dbi5q2brkK51X2A4EcpCeYevT2Y",
  "key7": "5VZtWXmydyu3yPPbMbaoXzuBLuCqpTq46XRRG8uNWvqS3K1SzxXt989oLmkXx8Ke1KSrL568gvCRQWBquXJXruna",
  "key8": "38rtgvpaqFfNsNa3Qt46h5oURPXCP1UZtUMft6jCi6ytRZtQba7UnrHitjUUoHegxUb6rDS8B2JHodY8cEMNhUV9",
  "key9": "VjFWdfhwcUcUrRLCcbvSvhTkApra7bD3BjFCE15VNGwQSmgPC1zvnxZ6yYqPX9g4YVsca5GKejkQ4bAxtkXkant",
  "key10": "5wfCu426FrrLV2Tejbdgk8N7VTUCig4dWNLD6Eu5eZm4tJsuF29GQCTE8pPivjeCC2kMicpiXJAhGijr6ZCfTdjp",
  "key11": "42wchqe6UiorF1HqGYR16ysNWT3Aiq8qnkTCd5ras5CQa7RAUeGpAbR4qu4HsWMfAKh7m7R3nNHtBqrX4sRYQRv5",
  "key12": "4JfKEWh3eo5wLJ5Z6VYqAvMec91MSzaWvTVANQUqx4Ha4GcqbU7AA5qspWe4am7Ndm1oGWMrZWiMfnvaCJLeBTY7",
  "key13": "47VbM9GnsdkKiRED5GwUmcdRE4tEKWpTUKUnTAUNvrjkK4jzFYnU9DK2xc5JmU1W2GSJhnWQs5QzuUJqThbfwKxt",
  "key14": "5sxVaiQr7W6iWhtSUwA3TDeVkJw6tmgGqrL8uHCMbEHkkAJr9Zucdjr6Dbexj4kRrVcoBxEisfz95NwCXvZa4mHk",
  "key15": "4HytN7ZznXKgSLsjFc7CmX7kqW9WfMoXvbr13kfjvt6cUwYoLdxftc5AgWd2E5mLxsDf74wwTGZBGND4Tf81fvLn",
  "key16": "Yp9A27QVt7qj3fNBcixosH6pfojxefeiut5oK87nMMRatSuvv6DnvbKXRaj4nLuUmwpfH5beVfF3r4361bSCpU7",
  "key17": "48WfqD9RgQPLv4H5Mi2BJA7gdMurtBJGPMk2GLiAQWYtmwwiYW9wx5MX1yffWf4i2kvLKmZWnTMoBzjL4TxE9zuN",
  "key18": "5CTFqH9FY2wHGr3s7YRAqzKfUoSMBApiJcWGmYSrN9mHC3oEphLe3L7GuE8DjiDDREauZ4HUA3nVdbCAwsfV5Y44",
  "key19": "s2FUXZwHSaftUrBYotpamMEjUFF1kpt7AAejSsou1GxKk8iBwr8R4bVVcE3nHbzLAzRD2A8HfLSopFcL15RXFMm",
  "key20": "2tyv3CSjZHEgUweGbousH2iqBddJaBUANSYkLXA6R86K6AkgpmALA7YgrFaj39KjzdmNDYdSeiV4ySugbGV2fQr6",
  "key21": "4oo3NDJXH68GYVahjbaMLBDrcX4Mmp44Xe76QR6mZBnBb4U6Sp5XmkBxi6dM6pQSDmhre5j4ExcyYJNaAA4YnmZk",
  "key22": "5RCrG8e2YgUD6gz9LUVkZv9tCBNi6v3eerdn9VWV2GwBYT8sY9s3HWZtSjCQbfxm6ZcKR79SKLZwbum9cuXMsN3y",
  "key23": "4cuMFxNuZoGHCCkco71K2b6juDWUsLygoSDhZMSGB1e4FmVmMFN77aNVB8CuQeUNZqQg4GJMdhwPGqYoHXnB79UR",
  "key24": "318jnWyK6egTmn6u8AApAgCFQY5J3nZQbzzG4NtcYC5WtWZyuG1WD95rWmdjZ4dHiv88yAUhK8b7xxkP2y2yfGDc",
  "key25": "3YrTEV6EQKDRk6nxcyHm2DdcV1U4RHwT1UQw44Tvm3Jq9HhmmGrYQqkksv9WePKAXakQ6a2DqEFsVoGGGeJC995n",
  "key26": "H6LAjVHGG5SyqVVVtJgfJGrNSV8SoBqy87K3R8oVZs1qMnaKBpuz9S2ygLzqtvKMMUW3dRkeaVvtPkbvGGoRaAR",
  "key27": "5YJMMRbPfHmJsrj5RH3zmFgGrN7oPDVJS9JYWNeV4RhiQoNhPmFQCiA37zKuCzHUyvPzw2ARS6ZSGPgLmE8n6EFS",
  "key28": "4DTPiEwbJpRQtTuq7r33u2hnLqZBU9XojfvWmUprJpiKghtzbRH1ufJWmrpE6sGGztSuX7d3HT79tH9VvS6Vu6Vc",
  "key29": "5R8RHNdZEnHhNZqf1NtESC6ecgayiwjdBWB4Gm8Le43A8WPxVXcX6M5huRnKNEfhMRey8XEfEYERND7MZw4J1nMA",
  "key30": "3LRoiPUjF475aoNz97QqySiuBZUe8qg9gvJ8xLaNPpLJGq48PTq6w4ccvWLAKoTW7idwmyXKYcG6BpTNvtLLhzDo",
  "key31": "auPdiPhrhPpb2d9T56YLoPcP1FaxBbg7S9KC7fBDz42WBeThP4PobYKTm9nnuLhTdRgnfVM8ic3JDvgPXd2C7fk",
  "key32": "3vwx1MkDXqpYXhu4K19B6cJdjydmQNVRtkQLNStCvHYwZ4b3wBrRbWsL1LuixAgFJC2t9dNkf2oogbz7F8qTByS8",
  "key33": "4s5zg31m7zV8x4hTXb1sbkuQaAuhjEzcKrEaMTF7DVvq9bYyfiq8XuBpNN8psx86NDr3BtzrkuKumn5rBuXa9Vjb",
  "key34": "Mrq4YH1Swg1q3dWArmeqCyRkq2HRani4n73RwaWr4sB185iudFmiX15sT9seYAW6s1uT6RvHtdKcq2iin4ba9fC",
  "key35": "2oPCUhAVCLY9vcT8wh2dpUrvuVM8FSjds8fkNSFm7UgTpCH3zw4mzyKTCT78qFpqzQyNdYSWjmmxq2eqy7qpu666",
  "key36": "KCFWHVxXyVz6Nd2Yc76NWL5EeaosYxmZkdVRCgmEcQRB6WzRB7j6djGxZTGXuKKcfm1vQQUJ9hmEtyxVvYfwaRL",
  "key37": "3uRDWxSF1XwEtcENQzWpVKDxv8UkdY7kM3RYPNsPZ1AqvxxzoUsREnP5QaxLPhVXJdTsvWHMgkNdceE4ZN5H8oUc",
  "key38": "4aiLbUdMw4fMX6YZeCNHqLdLec5oH9FTf7nMaVRy7nBcXMZsAE4cCNruxKMUi38Q3K3S8AY7pmruCHGE7q5sdfiw",
  "key39": "25KeWiuU76DxhWBxcQhzuAapVpbswWgnzqnfhRaxw6vXqmXbNwXhZgo9hAz6yiuJtr9V5zT9B3keA1CUCV1UaYA7",
  "key40": "4ktx8qZHQx9guMWmSqvpXKrSq8B9W8FhMw5FUHys2M6SZRvn8kHT1B1N9qcvoZSbJmkKaBN7X1vqpmnzb1sKtCHj",
  "key41": "3KCBiSu2C5ukqMtvUy6b2KT9yWgAFFJqpFCbxQZJvU9kRnNdEZ1YnVbgguCLXLaZT72ghXHaiYfPjQKihUXVykZN",
  "key42": "3sNaMVbr67B29LQwpM9ErJMkkDctqnBPFmxqTrj7SagutQSyaZzYcuyPPuiXpY6J5K7hLXgg3pmrJGfjR3wXkzPh",
  "key43": "Ln9wvTon13S9x52MR6KVhMWZ5tRkJ7pp9yzVJx18LMAgTMfV7Ah3wTGMqKjH6MqaVSLZBE7NsgXGTm6BxB4eJJf",
  "key44": "7FgXtAfR4fXQFHxdcbZmTWJ8uqMtQoZGvEwJrpSmvg5A3pfzyCXHUfWY9gHxR9tYL3gKtCZyB1gk4JJzBeb2f2S",
  "key45": "5cLumQupQrm7kW8FqKix4d4gW5eoK2KqD7wY6S7JN1aTDLZyFH7y1kdQXYUaa45H2mkahcyeYUtQdosHGeoz7SYY",
  "key46": "bq4MnJYCymUNp7tcs8WEAvoXjCefQvWT4qZGvwLpdMGb5NMKizEWpWP9Cf6bF6YGajh8rqYZjzCAENXyQAq73dG",
  "key47": "3P7iUhCKG64FnCfuncffNHUqscWngXfqAdffPsNRgGgS37XPa9fFaw8aYwi3C6qeeNUycJM7prhqMWehP6atszeD",
  "key48": "54efWWsPZiS62qaJxS8eK8qZV2mKQvxb1VUhF73ij2JUF5QekJww7n3vxzQ5rd4j97YUirTS5ws7oTz9krsSUUfj",
  "key49": "PuZxyEko59u46EBwB5soLkMLUhUsMRG2P8maYK9RRdpUPuavrL75oGwiRxhM2CPbV4T2DyE1FHEv7rWkJ8u3atH"
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
