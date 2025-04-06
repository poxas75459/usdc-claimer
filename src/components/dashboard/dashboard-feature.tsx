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
    "TPC1iCgPdBejiwGW8LVh32JHHpnZRYKtUYYdM3BJ8Xz9roYb6WuqX9XArVJCrwSpXadbsZHtt3ov4DtTAkoCxop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AfGYxvdvukPhFwK8fZ83X2GaPwwLrVGwPRyBt3RAs4s19CtU8Lxu6ZUjDqiDdHfeV7j2vvn8VCEYQxiZevaJ2Yp",
  "key1": "2KhPvN6ZAtYqNpgiUDDR9H5Aj9FrVERy7i3KPpT99PicWd81iZW8xuN4XT3kC5bWQaNERJsaGcxxub4V92zTEtNe",
  "key2": "53bqeUnub23noKBeSnmRRRLq6sAqCqbusvmUxJJJVsRUfEDfHYQebo7qn8Fy2Sxt5dNz28tDyyK47FEbvR4UdG75",
  "key3": "ayw55MRF2zVeggzT25HcsL1jkXosK7jQ8ivU1vvZy4hbWFj13qsUNAxkdGwVhd95RycSqq2nYe1SrYKGJNKMFe1",
  "key4": "46e2FMmPtYjp9nRUp5mumeoYSpMijpzkrnyz1qQESc58vR9G4spFYHhwmzP8hmNfEWen4HQZwqLNGvAaUE4V31ii",
  "key5": "34WoGRA5qaETaKqkdaCmTSDnftrrBKa7SSmyYMjEft2d65x6HfETJHvGN4aQMW9n4P5Rx6oS3E42qtMvgXbJNszC",
  "key6": "33H11NpAqCm6FUHTbw98CTjpys373vc8cevZqaCnskRWcQSue8LCchtGDo4uv3qGK8QjiV6WwiepGwXNsH1Fy2ta",
  "key7": "653MPUHYJVFvVYK42jK1TfiboomPxjhqRqWtcdPaa35pxAuEYLiuW6tfS5QWoHj8CMVFSED3tQ8rZ59FJCqS3btd",
  "key8": "2fd7x8D4gB5utBChsTv178YdpP5iJgzSogXnbC6uNXk1YvigHA6Jk2aitFyHpbRzMLir6WkwM7BF77y69mkFCTWW",
  "key9": "2VJ8L19mdtK5NhHEHov51EXeFgxaLijeNRbcytBRm8MAcxjKbTKM8Cp3S3jjB19RfAowRXLkY2XHXZzZtqxc4DVg",
  "key10": "sE91vRTzmtdEH1CK1EA3DpRQM1L7aq6avhEsrfYhk6beySN7PQKixrMdeYmBj6gdcxfD2ewCFuAVtTfqHG7Qe2v",
  "key11": "3uqj15AA94uMxUYtXABLgy1zBSFoVDB3AsnhrNLf8PVkmt6swCG33Pa6DybAaXoXMmAX8zoCpDitdNun8tUrcApb",
  "key12": "26QtesUnVcabPhJZVGxeW1jEv2BRxMiiKg1VutVWRzF4YZJaoYFkcQQ5sunrUWdR9AM3Mg4MJH8gZsRZfwu4Le3D",
  "key13": "4X6ADoqQn3sP3UCKRQAFtj7rkfP25UDyyYxgVQxUcer8y46jBi37AtGWLfBfb8VsbP3rTb5K35XoL9zUMcTRMa5",
  "key14": "5PR2MXfhGUJ1s66WqYpPUfnvJ3jD369esNr8tmhPdMkk5V9NAcQLZTFANMsiZPEr34tJLg3U97915nV5YRMfto5S",
  "key15": "5Mw5s9LbJWsgLBxKbq74XX8FjRcsTQimwGigbbxk315zGqmHMnxcHuJ34JiQD9wm9kFZXKnJoNdeC2NJoj7EiWoN",
  "key16": "5xTJKvKXsbiKKcdaCasJ3UHY67jgu6p86NrPvGz7AYE7JcVDkWA952M2vQtXEH49L3wrTE9JuGWUtFd2J6CL3Z5r",
  "key17": "4obUoq5jwbKMfkLB45WZMsRVNrEXF71XgYsLYGfMXCBtyv65QW56AKzGELKP4PaojwyPBANixfbjMvSCGeTjejdV",
  "key18": "43tMyA9Vjpd2HBGpnhUAJrDxjdpHFT4HqZfiy8U7JVhyY7hYHCj486LS1B7btudRjGKfoTpQDn5YYyutfhz6SyBT",
  "key19": "4V7L9ahF9QQbLhbV3trb98LftWjsZeMgbo7qQadu9ajx5ZBC34pH35e5dtivm9L12bgTuJ5GQzbiKpXFbeCsEQLH",
  "key20": "67qfcxCKfc8tEfMMc6462z42SzrvKGKaX1sGq5hto8UFhAdwVkHuVhuHYBJzmjLEhg6JyPu4c7eGZjbtY8CYddPn",
  "key21": "b9Js4pCgt1WaFMybdtUGArJVBQHJm1XDnhkoPwpxx2U7Ku3cYDVN8MhSEV2tVPGtN1F71mzMpCLWuFr5qxTiV9o",
  "key22": "2EPMp6D2kYwMhAeb6kNC5vaQvx3iWGQhumdE1bNSeU3Qy97AiZoKbBC96UP4WBR31Q3Jvjq9DvgcU3Ss3VKfp4hR",
  "key23": "2TgHiYUnwHeiTdQWiXWzwH1bjfV5AWwer7ey8dyg4w6vpwmTKcrZGa2L4dHptUbnjD3FbSzEjFzzmmZEuxQGtLJK",
  "key24": "H2SEigrZegCwHdGtJL2HH2LCbTRDA4Cz7aXy3Z17feS7PLuqe2fj1XwbWjEvPFc4KCMLry3igexEoV2m8Aqh4yz"
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
