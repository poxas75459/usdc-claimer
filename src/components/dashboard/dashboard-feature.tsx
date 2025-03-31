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
    "3Q9UjGLnUZ4NJ5RWmCGXpY459HamgSeCoBgo8cDYv6AxZ7k9BR2PehTKgQ5vDenEsoJcAEowVi3nobkf6XAaSXyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hczvg57ZG7FzYnRoVMii3bYef3vwZvw7BAdY8xSkHb9q8GfrmyVYZbCAchHUm29RutfTjatpiwewjUD6xghr7CZ",
  "key1": "55zSMBbzsEVkYNpnQFB3vSvXgjCgnBCdc9PAaZ7TK2uFP9bsRgFsLUss9R8cJxFxTFDXKnNdYBLcDnZJ6HyKdt2k",
  "key2": "5nuJbMu3As6AAWppq2j4PV7VW5UxnMnHaSE79eCv69LG1M7EkHXTt9EKPL4J3ZgDkcRYi6yyFM5PSSZ9i3oSyU9y",
  "key3": "GQVw25n5ZoTnrkNYQqWnSAogPWkwCXa1JFTcPSzBRLt5wXH9etCMk77kLyQ2xYQyavnu33WEyce58KZ2C3RsKKK",
  "key4": "3FqfMm3Xyp3knSvKixhFEGi8bnQb5FkWBX6dUnmnZeU7C6NYdiAzA8t9Mb3Rc5XmXBJnrrHfD9ijVKTLgLt8JcBD",
  "key5": "cgktxeAz2JrswgZr9WVoJHmsFfQEhqCm1Y2Kp5oFt8CE9eu6T1TqjFE8x2KZMJZ148e5S8oxSnDFmU5arK8QfqP",
  "key6": "4LGEsLTD3KYcVqecS4AoR26ky5TqrLXL8sQJFE9xvWWaBmqjSNN99KUKYRtJW8GyN6KGMMYCbcNLaLHkv6EDuuN7",
  "key7": "29eCUAbim2AoLRnaRb3iRQv8WewhJqMvYYYGEZ9dvdgdc1MCkPMaXYRZS89hf5ux6voWwpUhGHPJ98Z17PMHjyf1",
  "key8": "JsQszqVetYisgQPHDi8n1EGPfco7UxFL5DAk3iB7nMxC1MGEQgSoF3yqCzNuhuyjU2ENd45cBpeA2egsKDpitUx",
  "key9": "b3DYLh9tqBLyErLeiTJABCa4zbwLhyCE7RSBY5kAiWeVkojvuCyzyHZ4F3G96DmVxCq1oimqiZEwp4xRbguytPm",
  "key10": "4eo1H1bacpFBVwadrE51MWYszpJGjLspDriC7KDDmdPZifRqfXXQ53ARf4iLdGYwMnc2Syjx3ZC27nv9tGjp1JXi",
  "key11": "3fLHqxEpHH1vbYVzX8Gj2aSZAxxAq8dtgHSmQnzuBb2E9DgojW62Bizw1dDbKqEjq8Z484a7iYgpZsMyGim8yQdh",
  "key12": "2onALuPm9or7sEV5K7FjEPHAgUG2xq4yQjSW44DFH4xGyAo2kyJ7XRmWRMM2RkdHxbwWUF2uaLAbE6RGC3x48u8e",
  "key13": "5Up7ktJZM99cusQd8RE8XWgLeefSCH7sTvRi5bpNbHdoH7tQQ7kARuqjX7rpTd1U1Wh7Sw2cZVV6ftptPyMMisf3",
  "key14": "3oWzjXq57qLHnZNVQ2JRGgyQ3rHBfNhkJiwmFx9i7LjGjxPqfwetyFLqf4YxDh6kdBuRstJZYQtSsBDvcMDr2dNA",
  "key15": "53GehYQkujSwosDzneyFoe1T7P1LqiEPuwPdVVpDjVLx6nDCejowaTEMQpaiib5ymxkTn85J8q1q8BCQy4i7sApf",
  "key16": "RXNkarBVPE1app7qPmkgZGh6hDMhE2sW4zzp5JH6Cpbw7iUW7ntDAinjFS3n9wChu4UA7EeLr6qLYmjVFPfWwPj",
  "key17": "4oN6UdZZCLzrJ9AK3Ni7XuZwPdh5gHzZDk7KMpfebMH9XkUcVgEJidExBjGU78CDLJdVxF1Qw3NFH9RddStfA4YY",
  "key18": "3UzyMVvS59C2tJtfEfvatU4fMqyFgaXawWoZ873rvN75brESE6M7N45tFp45vVdHLVVHeukLWAZd5uVTpmdvqrsj",
  "key19": "88v9g2M3TxJeqt7zgHMG8kCu9qCJeQ9cJ7axjZoRekrvY5biHsWybNmsMcGKAKBwNEZ8M7tVynqVM73rQxuc4Ui",
  "key20": "39BzsBXaHrA7ubLVqwvCVM66rNWKZurFLtRBaTDeBeC4N3LqyrzK73ME1BVnLB2LMh4PtYb7A4yNqwyinuyYdDBh",
  "key21": "2aWwebozcafJ7Z9p6Et6aP11DxkeLRVCoW6RYWC2QQrfK9ZrMNBgs6iUfdjHMJE62DDqbVJRyQ4XRexUoNziCfSy",
  "key22": "5RRA3sJpWRYd1biYx51tJdJWWwYwY9xq2yZAi6Yms3b4oEYFxtoeBa2SkYw4sBTrcmZNUm2v3Xtc8vpwG2gZJrdd",
  "key23": "2RYN54Dshij7QMti1bhCWACx3FpVhTMCitg5rh61cbYRtXgMTuVT41xh3YgKWZ7DwSZd276S3HNTE3q2uLzq2nSB",
  "key24": "3eschP7A8ygCzNGAKmXQbvJSLrbeTxr2fS7s5goqRYYPDVMWiXNx2eYKYDLFZMUTsVK7ChFrkkkdDmghX9pbZkGQ",
  "key25": "5UyMi9wNQKDi258LZetqAgyRyXQzpY7Jq97RTksBCBq1Dv9AusuqURVVTLBoG6B4uEsXwXvxV8kUREdaftYZnSK9",
  "key26": "3eRBcuk5dG1zeG97jEfL25APfRG7TqnvXJMCQTNVVWngbcsDDWnkU16RuR7HLCDy7VcAmLZSDaiAAAeex6MKxctp",
  "key27": "Dx55gmwxgHBqq9RTbnX442V4jNLibSJp3dhcHMwRytZETSc3KKLQ6CjbFoxHCMkzDyoDtPzQzdvpPdB4ey1YyoY",
  "key28": "H7vVFAE2FbEnPahSsCsv9wMJZuGhcDYVnjR5CgA8VmZpidfxxDut5LxtrLDCtJZTmE2cXyXfUpitv3RAiwrZmbu",
  "key29": "3RXvK7KDz3LjwnkHiCjd9GASXWSPmokDErAUpAKFeHvHgru5QRMLeT3i3q5YkCHaeKgfUXn5UiwTBc9RRdr9RBcV",
  "key30": "4SPGojmui4hPQm8L2FXqYUMjtgNpNiae7nWW26Aax57x77kdNbCE9LzhTbdvp6RTbqmXuEqPhnPrhtqRyKpXF6qC"
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
