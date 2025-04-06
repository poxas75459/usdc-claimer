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
    "3bhbocXN9bceRXo3dcqVkM43Nce7ApJnd8CCDnLKkWtHwApxRpQUojqWD6dQdr4AMc4dS188hH29bGfcAAFrDHYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZXoEkEMvZAGMwaHKX89vLue8WPkfCzZLd18NytSJEXm9jcfLmUXSMyLBNJRiAEJUkRUfTeWYVQdnfvWaEPiR7EM",
  "key1": "57PAyGqrrPG2DvRyeFSMnAs9D2RKg4MhhRr7qa8ippqF1AbmgbFCbu8nZQhc3Qap8HSVnhGvV1ryaeqjD6LpMgfg",
  "key2": "n8LBRaZsmUUz9Ag9gYEbGhm16GQQRF2G7BWjY6RDRitm3VVuADqPiW3GCZkpqy3hSKcVqutXzEjqeAwKxtbS8SN",
  "key3": "49GpmbVHshcLacKqMVew1yURgrXWY3fTsMJVeAyHGpu1vEU8bqNgYxdwyeUDnAKFnMJ4fhTtC1oSYyo2njqsMJDF",
  "key4": "59g91NugsqkAmaWJwHHmcLCPUJu3V6KpvCgTYzGs7n1C8sr6Lq9xmxek3AV9WW8Cvv6RSxAJj1cyMcFci4dXVfjg",
  "key5": "3eGp7ohUut9kT6utP62Mu8Mjy5GPMYubAWkSk3v3NKp1LvrFwouNVVTFmx15ELFBmv88RsGkdhGJBa6ZLnFKy4rG",
  "key6": "5LDZrRaw6yAYZfsF6RbHq226Aw8BiwNdTgDzaqHjfwV7qJzYP6LVJspDTDPiet8je4ynkgHd2HASZEoRzC1MBPmx",
  "key7": "4HQ4xFB1rw6E7bENaQmDBXBv7BNtL4nxUAM2WCL8qNhaiigGVhTaj8v5wJvcNpKYts4sS7WXNoUqjPF4NfLMTV6K",
  "key8": "4TA63iAnkvoYX5ePyNCgN1cbLzy3ugSs1c8jNaYY2PYw56vNKtKMdNwL2Arq4K1MefqUVqNzcCY5ASs93LuuCuak",
  "key9": "4riqzepGMqfj8VARmKUZ3xqWUmA6QgU3WuwQmNtivE4QFVtxYMSaoNNt82GmnwgmnqrFPD5YMgB4R1SRkDfv3CUJ",
  "key10": "2pX1vngwy3iUVa7R5i37KBkPBU3xxam5gawRwBtoKQ3f6Su3nPbytqHsKkgKdvE5oQM7QLxmZY92HWdjVg58ej5F",
  "key11": "2oWxVmNXjVc9w3A4tqaNCi7qLQWuwtY7DmzMmEuT9cqA2XavQsX4d8M8UeKSNBXAdVV46UECvJf4QUxQCCFzY57j",
  "key12": "5NXPjRiLaAHU8AAVjzf2trygsThCQDJLTtnCwtiUoVV4Y871Yr6dKrN7fqVpHNgsF14wkzg3XzirLLBg6KiDRajX",
  "key13": "4oPhCjew3VRuucqUizVE46fGHZXbiM9iwz8oZcj3PhK1UgBnptukuNLSy7Z9G9BySwKWdKakvD9g7VxuftLxgAXT",
  "key14": "5S3FwG5UwkdmzRsvRrNqaW8ctufexYACQzu9ycQXkb9zjRprtyyAoPaeWtSZxvqvYDaQ85ZSorHgckreFBc61yDP",
  "key15": "5mLayReR7SkCJYkqc9Gsy8sf6U55wfUXJ6H4KqkJRRZyGgM92LKqZpxGe7B9GJuJHJU4UuYsXQStaB5WHsejK1wf",
  "key16": "4tQfrPkXTZBm4rHMFEXGDtqJB1k9cNN9hudDMM4SnqFQr8fwJnpLUw8P9xuU9wewVrXcWjidz1uPo52B9diNNoQA",
  "key17": "4bPrCNb8Tok64tczS314H36kSBVGdDy8jtmmJnMJf7F1J5YJenLR3vGn2tEsdkHnkmHB9YtZEtffSHENfAgCWDn8",
  "key18": "323EA7aK5jECE51PyRixAWQ7KGnT2ke15YsxhDFst7ys35Fh3irzmFSz4QrnQWE1Ub4FcgpxKuKCPEtX1jvxrnbf",
  "key19": "fPckHP8WPn1YJ7Sg8rNxz4KGPdNjnnTksB1HkWfZtUMhkf5MrDRoQDssGZqzGNpHFLeEqQQ3tAYg9kAFZoTS7Jz",
  "key20": "5MLytfMoyS6ue7jutyZj6QiojSP95nGPSMFWXjuWvYe8RZdv18WdbyPwZ5sXVsDLuJLWTseJTmDQH4U99NpK1GSR",
  "key21": "2sn7FnvycWZemMJVdiCxHNz4jE92GayfRxrszNK3WiL9trBugRRektiD6ytxatDcajaKS5fY55bXgJ8i4GQ522Th",
  "key22": "4qmBBfi6CNt1udiE7dk7JBdqtHaxrMoyaUwhjxjfvYx59FKcMACBoiMFJk8dTCjuUTSYyenWqKFLnEBbaQsDVgYs",
  "key23": "26gdiNMEDUS74HACmYH4zRHSiuSx3CVZCf9p39xHgCnfYKHck7Bu5RciJ9hwVTzbUge8hHaAqswUD3ndgJxhqnHg",
  "key24": "2CHp7ys1itWwFqCfeUmyu8vmbdLNspBL74BzNTsrLpW19J5ohMjBU37TB3XtykFc2Wv2ioJD6Yq9t6KgnRqBAitB",
  "key25": "58tZ2Dxcb2mWQRzdUAmFsQhhhhyGodrmd9wgQrNC5oVrriemTTyMaGzXFM818TvwHvdsrJbsrxvXpmFJfDY2XnZJ",
  "key26": "GiTV9SfAg4DTYG4mZ7t42aEAZZXkhXW5QT138oYVokwpBf7PofQ2JY61bieBHz1xRAtj68pf1j9kXJpjeGSBY6n",
  "key27": "33M55zznd5e5ZVzUvM1oRt9y19vpPPKZxtB5wqR1GCSbVqKMTKE5FsmwwZswkzhuQpCNypm8vkM4itLLv2MbidSZ",
  "key28": "6DAQ66fNwVVyEdyXhNXp16GbrVrv5GcyRJJayEm4EEwNkAqdcFJYqfZUQHGfzSSPXqrq7r4yV43L2rp63iXM2sY",
  "key29": "1Tkig9PB3xyvnTPQNgk6PAGVfWMLrchSNJFKPKzWsA2H86YMzPQxkjU6tYzbxcuXefWCGPvXgqCTHjFNE1E3XEF",
  "key30": "2fKTqp8SMcswYSiDHcFDtp3vkTM42dSTM8dxAyjb7vFRBkkb3yjHQyJZTpRbfG533QR7UoRL9AvnJA2g1jcT6if3",
  "key31": "667FpNwM2chiuWgG4oX6b1dtEbUsLwwt8x5zP8vcK5L4SqDtEAKsJ1iWygzto8m3VvZrMhtwioekCg96Dzuhdpir",
  "key32": "41q19TENLTvvpbBgLYKnoJY79A9xr4Aa1mLhRtBmyjMXiPmuTsYe66Q2f3Y7VCF5ywanVmx7VcmQXZSM3TJPAQr9",
  "key33": "5ariXa7oQy6S5qL2sAQoXVv2RwKRV7LLDZG7Tsd6Hq9psRkLTAoGCviM26LqJacSR5SarBFB76xojt9rV8MkCPet",
  "key34": "2R81QnrHQ321XQEDyr9aT8u26HLG4nzo3jcnSzouv7PCPPRdBkp6p2x1g8TgmuMNXzaRA2FsRZrQeNTca1BVP38m",
  "key35": "21XJmzyKDPSJMKvAgBgLhrUYMAQhetUk6EymbHsU9AJno2pGcNTJcD5ekhz8hKB8XQQJ4KUJ4k4i1uJpiwRtKPZo",
  "key36": "sFeJu2bLRzosi2gFha7JDMLXbqz4PngA7GD6NXyBkuiK26Kaph3pjCTbK2J7hhAfG1RLBbKknwf6DFXjCbTSJ4v",
  "key37": "4EuV14JgGqiAEizV2tyy4HRfLW6RD9LivUfpiqGLHpc4WC2YKisdQ7yaKAyX8wCFDqDqhWstBTdZbmMXGRjVfGdL",
  "key38": "5Ar3WGWPCEjX8JBsGQnXHwheMTURtraJyLPt1TM2TbQQvjaT86gbyEM9by3y4H89CKVoEow4QMZ38wbSASHGxeM6",
  "key39": "4BBKXUjycze22sT6YowhbVfL5WkZvfKUHfYWtasAM99yHXmNWA1pGW6zeTCvijopfMXLffnxkYQTyY6HZXxbZT3b",
  "key40": "8r4k235nTvRfqxcdksdCiT5m9T1rRVjsi6rg2LERhPGmdFi3ks1sMwinWEzeCcN7uFF3v9Qi941bjKTyMjiWvK1",
  "key41": "4ZbuqMHo2LSSHMfRLGTNgf5wyTHXVGSaKLFEPiUKdQxULGYNFg2S2Eb5wYsYQkP8AvuGLuHhyk9q1S742yC5GveJ",
  "key42": "YYnbcSZHdS7iq3CWxxvTAUK4j96XhTw46wmYe5eVnogycTepQW8JVFFyF71upR3p6UCFyibtP5hphzhx3Rnuozz",
  "key43": "2tr7Uyqxn2dkbuHWJheYQCQwD6d1j7QkTVnWGbNgVokzVhjKnPKUJqbiJgnYCDM3w4pYhYa1h7cH8XYtujVHGaUZ",
  "key44": "66M2hkqHc1Tyoya1LE1VjGuZi9Ua3PDCz64orJGBKvcqEUXDBwK4TSp2AZqSiLpJuZLmgHML4dLpisSdBRr4qHh7",
  "key45": "3WsQiRxYx8peTzqKAmhX2G2asuY7fAtjVNyuVhtXCYLv29wiwv4raWthjvoUZ9UT2zyP9q8ENrCqnVXSNRro7KHF",
  "key46": "4StVj4Gvcg99xEiQQAFJYnhUYhxi7sC2VCenvxaqhGxqrHL96S4AEEM5HC98nzjDKCipXuMSHt3wEPTrBPF55NyH"
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
