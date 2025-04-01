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
    "45PiRuYvtSBeEd9NHRQsLnjJMUNu1ZRS8ZttXiqH2cYuserZgGuE5TVaMGkfhDxLVJR5vgrnqUG7pDG2vGafK4fp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k76txdRnP6uyZd8MakV7SjZUPDFYKsgUMwY7n6wqDG4PNFSXXDTt2zhSTNrB82jFGHm3tzHgX5usKsCgLKKVcxY",
  "key1": "APEGFAhv9F7rvbrAnwhHqsFC44zuzKA72qRKXVbY5aYuEsiGGN33d2pP1MDnAHavw4MspnJXcnJtEjmxcN74ENW",
  "key2": "4J5YPDow8sYPFDQep7ijz14BtmDAhW4qZbj3e2V4tY8GDpyX2owdg4fn2nUNWXT6d6TXHCvFGCRuVTtcpCt11WR6",
  "key3": "4ZBbBRttRvUsTsernTY3REo45aPuMYVigvsmnr45RsJiuRdok959ARmyrWH87d659rp8djBW6qUBTeGRXVHcFiLJ",
  "key4": "2MSXNnPov61Nr3fNbjonapa1h2CTmHkQytnCU7sJXN8efPn5xibuZ1niv2oYTAcVXBSjHpbiRGWi16KEJUTDcGzz",
  "key5": "4gsnweAKHxVwx8UUFuKaxtncunbzu81f2bdZbe2kdr3keNAwFU6aQTPVfmfrL2YG4T7Ru1zLrmnJXNfoyBVBeVK7",
  "key6": "4RV7PE9nLADhA2riJSXBnvUWSZmBcyzBtXNjzmNmDy4BSpexJn59vGEtH2HbXjWy3NzEt9fY3nRcn2dqiXb3qyPZ",
  "key7": "4SMMfKJjC82YsgSWYH8nFYKTebZwdDx1megQogqdMySLSSmoybKv66vsmJES7SAJpMFQaVjYJRGsxVKbyWUsd1qa",
  "key8": "4j8gHmwAsoYmuoAbV1Vh7zRgra3Hh8b82GWLvoV6sPpT3NENfJ2gTbuLygMRwod81UW29tA5fbM3Sdq9LwFSYFWX",
  "key9": "5n5fGkFKdLLtKiB6q4XmDiNe4j28MWQRbjE41RRU4TFx31iDiApawLPrGDVbv3aMAvLqqXdFyjsa1vMs6g7Xgtad",
  "key10": "2HD7uAahV2AaDKbeBNuGnxUgqnYStbuD6MyN18qiUy8HzA5YswVRhwq24kDYoefy5HNuRc1RRXpyY8GRXwBFrztf",
  "key11": "3729ARtkFVooV2QHnkwiUca7Hp431dKgfAD6eYus8Ms1Q6XUSyAzfMZyjydgHnZMvFDWgdMk61vjn4djzWw2J9N9",
  "key12": "R8hExrQoQxcLV8spT6jGo6W84JmGoy6b14KpCnH5pxtvJqDJAMHSPirANxawaT7zfKLLf8wtoh4VppxqhD3ocUb",
  "key13": "4SkaWJREeXcvV4pYJufjXRU6E1gnpepEgQZrDzcCLqasBhzHaEao1wmTQgi5aG1dBjQcT3pxZrpmgCUxVNFJAm4Q",
  "key14": "2uCozbmDCsRYa61U6nTYV3TsJ9ybUJesREx58SAG9yF5WSvAsBMXwzAJrndkXDGsHGH5xTCH8pF7dNWTUer6bpxi",
  "key15": "2juaxFf4BPWfciNdQESSbgV9CQZZvN6fVo4PwnCUtPiSiUmHfQy1sz9ide6U5TXqMkhB1fX5UDGnvGbRFfYXVddD",
  "key16": "7iqBB2c6jFRyFdw7qSQnUv163sU5jAYUuedjaQV74xMxV5rFRd7a12Dpe4xLPpkWUCkwTsAnktRnXgssZw3DLSx",
  "key17": "3c4DCxRFP6XKa5Z9yvBj6znJpmCjPrVWpJSe7BwXEf8xAc2vJLcNnGfEaX5LRxSj5cVhsD4bZ4QqZb5Ln7BPtmDi",
  "key18": "2aEnQQUxJMjnQx2XEeRW5xnm1gSLVKzwP5YwtGDcNp2W4R9oBtenskbXYNA4F3Wseg9pwKQ3V2547h4gwAryaRGA",
  "key19": "2x1p8NbFKmJf7WjAmo8kV2G2MqwBkBpi3aa7k29kKC6Qwgb78RkAikdkXPjVRjbe7TCuVhmd3QZirop7RMakm9tA",
  "key20": "3Lohh2y65fmvMRmPFx5VNtHZKY4uZfd6zVQenwCSUsNCxjaP7TM9WaVTURww49CUYLYdpj2tj49e9J7g7xuqCdQX",
  "key21": "4X6H9QotzVQLu729fpU5p1SqeuxQAmDcRysd1RBozu6VRSKWjAVBBNtsd6V1CGhXvFUFDU3sTruY19zCNgxytUi7",
  "key22": "2cD8v9uwe6DmaBCxfEMwfCRTYmqM6MXdgDXPvLxZWRpHt9dsLb6Q5z3qHgHMD6tcdLeHFThMP3pHpZfj15kwy3Y7",
  "key23": "2U6U3eUcGwC1f6Us1wJ8YdpnEXvtZaLtiYarFk71nStp8DWYUnaS8edLGyaoWa1A29Rgij1gegJGmAUvdtj4rHBD",
  "key24": "2GU22VkxExm5baWb5VsUUfS1aQpXmTrmM6qi46iAxzcWBnQyHutpKHhEyQ6unnt7MF4fzMassidsv6VTCj4DphBp",
  "key25": "u7sU4Yyhv2aBwEC4WoR2HotKp65bVY9KarcN9e2Z7jwFNi1b3AHzFughceDUJ6JLPF4GMjphqXgWYJB7bvyF94i",
  "key26": "3pefMckfpdpQcKECct17T2pJEcZQeeKhrBqZBMxTgaPPA4aZbHcLVVV4sz8k8QxZyqdZyuReNuN5z3bk6NKpjLj4",
  "key27": "2o6yFmhGiCMue82vKAoV6adR7gE1kR7yBzfY14kch28oZPfSFDvpWFNq6rYn5y482ov8SzR4AjA3FRVaNgtdwFWw",
  "key28": "3ooSR5m47FQzBLjLxSFnEUgc6AeAvEbEAMrMfzHzDq1hESC8VHV6qivT7VYEjsuo8cU6CmwKtefAQmEjjKrYemaQ",
  "key29": "3RyEs5SVh7WiVh7bSf6BTeMwZ7tELACZqnxMpQ3BBYonQVxkxkg2XoLKNjTsX5DvfVAnKT2pcUw4MFYuoYah2GcR",
  "key30": "4AYdik31GFHnEsydHTKJPnhubKBbSEh8NHi1NJif8SgaMuuKwG4Pa6z1GCBynWJeCgMpbjf7TuxzzjE3P7PxmrYU",
  "key31": "2fCTfg6kRfEhbtqfqkshEU17x3h5PNVcXvfoh9jDcf957FBZiCkDNFfHKBMa74ZWD9ST1kiYDYZA7aoqNxvQT2pw"
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
