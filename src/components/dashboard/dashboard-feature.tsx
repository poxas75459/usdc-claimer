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
    "Nh9QnGTVFF72TZax7ywGMN7NCXWkkpZbSuFGiJWZh1YXEUGwgEi7D8L4qBQHK4itA6ABbgZqrAv8aCB3qCA7Wvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pUNKgvzH1yVYt8Cjxnfe8NQiCNdVKcZMuD7jPoQw8CCaRB91sSk1p2aQZPWGWhktiwU4hG2CRRDnRprzYCFnwnN",
  "key1": "5Q3ZR1XJGFdaT2fnRW8dz27vPVn3JikZaYUSkUCXPuJG6Z6NDZzVMMsP751vHsKNeLMkswXzXHuV3zmRjmtiEN8a",
  "key2": "2E24d8ZYsoDq8FteTAPgvxD8Ru4wevh9jJXzXZBvZtyxTwyGjRbE87os9N8rkeyHNt52WFC8VfAvGZqbyXvm3VRf",
  "key3": "4TJnY4hXWjsnSKhhgepRPSwjapuUZfR7BUDNyDv8LPzVsf4S3KRGTLh7vRQxbmav2p8UGARp1M7SGJHCGyvFM9ht",
  "key4": "28T5i6X7eM6QdRM9ssjVHRT4LsSsKvj63qAua6EWi3VzDtznnc2TbRUmxnLqPT67UQ1s8nr7Er82a5am1dkqAoX2",
  "key5": "35tpgSbpHo5RMoBzsTbgWcRVpJvYdPFA1Ley2kdXPi2pkwr8uwv3ZESea79fS32bevyD7U4n1XRkJiwZSvFeu6Sb",
  "key6": "ToG3rv6dX42Qpc1K9tLGWiWYitwrUgjefUJDtFQt3zPLR4h5Eko6d7NGJiYErjJ1k76vnKwVGB8dpzAyn2vRcTR",
  "key7": "4kQLzSnNFxuP1PbS7JPcsma8d9mnuD3jahjzSwWdvbRUCfhnuFhzus3gZ91eKAtmYkMiuCf3zPngcd8rG7BD9bxZ",
  "key8": "4pihNvLCEojwX7ppAruiL7UfLPSxjSJYpgkVr7JoUPPsdkm1U1syDEgNMVucthWpeEAeNfa48nGFXGfs1cQzVoFQ",
  "key9": "QkayJaw4BLxNTzFy1Um7E7JDHYoZqLQLTiaQ97mPiUxKHnBjeq8FhBeJtwLmQDrqAikmnmzJDpF4T4XnSxNsSmX",
  "key10": "EMC4r5cXkeFUZhuycFhK6o3V97kZf7KfWHPvYrc5K5gruD1xjBBmGcdc1Q2MUED8AjtvX84bZcJH1bdmyULuxn1",
  "key11": "k4vtAYZgXD5xJQ4stqTDx7EiWmWTqaDvkvqD93UM5isqLEjQxothVY29g2sCj2g2gkVkUoG2Y6xARdykonJCUu6",
  "key12": "2xh5LdXBXH8oSCwXrqG64ugsxbJJ3xWdYiAyf5wGDcr98QY5nhBsfZXoAXQRfuXWsHxuLLs84sBbvCsjJzT7zaLc",
  "key13": "2upTTEyRHQP87Z17YaF6s2GgumuY35upbhC5YUQW5p9edSdfMjmebPkGL4AXHiCSgUnMpEnfMWMKYnEknyAJhHrY",
  "key14": "T4wWwni4mr2bVYZXuPyxqpvRZ9PPrpggFE72yL3Ugrtn3Rfh9Vi4wVa6ZqeETV85pwMbtSRiNWZsiCRwvBsc47g",
  "key15": "4wAxHB2SY65Xt8zgPiQgprQ7C4XidxhbTaXFzY44ASmy1kNV37iFz9w3bAWvN9wDsPNBhHZDCaVcAkZjhX6j1sUg",
  "key16": "5Utdm6U1XPDvF2tQUQwErnXjXHREL9tVxnEzdXwTkDe3szSKf4127d586wHQub4km6p6m46NQYB75aSfXJg9tYDs",
  "key17": "MgKJgyGvcepwdeJq6xEAUr8jeasF5xxDaSyReX6fRfBKYa1BBHfimQCRSgG7shx89dbncggaEMxwNU9n9rBR6GA",
  "key18": "wfPsGGKAmj1pghhbwRAG8zX7YPePNmfvoxpzAZXXrt6W9oJMEzm8BbUKXSFcPsXpHdtxdXp89Tb6f6bHqbLt4nd",
  "key19": "tdF4uAqSQrucVNvs8tJyRSg1J74DxXjkDnGBEXJZqMFxWU23wUhQbF6GWHBv7GFsGxMNMYWa3Nta6dFeTqpzmSE",
  "key20": "4iU9DGxqBRZN3XxL5ucGjSRT9XhAfQNG2eehrjXvW18n7xA7kBb9U3G3M1LveKfG9zhXj9ScJ652ZJ9dX2DoevMr",
  "key21": "3L7gdsRhhFtGmwMEFSVqoyWwBbbpnqDuLTssFxY4ptonn4d4CUArrmQy7nYia5hay5aB4MeSMeKUiXJJN2YP29yd",
  "key22": "oYYfLZQMcvXhsLtXKScyPUWdBR2xpDd2Qqx7uAEy3Wmb9hByQ3QAUiAPKhydz1LeRe6s4R7CmM7DLnr1WYcLW6i",
  "key23": "3VJDDR5Fqp6yYUC7Sq3CGRTTVyDv52ptmv6cuENENKrrVRf48Q4Bc8nPEavra8HbdbKyb6t2uwMJzPr3PTQw9DTC",
  "key24": "3iGR2FcA4MjrFCjCHVTpxoJobADBV12xF9QVggDq4SGouZNsFiUQBWXD3i8tWUR1dpiMsT2LTxzkrSVFbC65VJGg",
  "key25": "5FHC2T2Hx8vg3C6uHKhqDqTym24BZH4QP44jeCt2xLMhjMHHQTmeeCv8u9L5iXTSv1ybFGFowiUsNh4Zs6qJyZyK",
  "key26": "QjaA79QytvYBw3Has1oNJoQEbASxiDSiUeNfyWGW9qbeNxzmwiJpPadGHRqWrLFWuYYyEzR9R9sBCuCe8cJKQ7g",
  "key27": "4GMAwQ9wwq68wKSQvoRnsfa5o81A1oHs6WodozZsjX5dt1qiZSdnz8z7Cy6sqCsDUNGgFPrzPixaLwJkvQAzbtAa",
  "key28": "3Ca4tgMY8AB7TLF2g6TA1o2oV296pCYzxv8Y4BcUGhFYpw6MnN2CoQ9GLMLKCNtZAE42E9fFmhf3tedGTfnE4KfS",
  "key29": "3Zbh39u2eZEagM1BEiVEwt6UsCHtpTNAWXBBLLHEYYQda8EvaasaUk9ofiVbMSbXXYAVXZimNi1dL3BGawFHMpgb",
  "key30": "2p4SeFQpKDardBeFjQcphDYT9rXu3xYLrEXJZzSUtorHCAoB8U7eKrAosbaGnDctMUKf9xdQBzTCPoBHDV32xqmG",
  "key31": "2Kvsakszi8u9BJSFBfiiNV7xtYAeR9p7PwnBseUBSBkyBuhooQyNk2AtHq3Qp6pjfH5zJPCeVxux42A9sxQe5jHt",
  "key32": "2bpC2mopZ9kJTjKRSCpYuyAREWN9Z6kz27gPmtKtEEkpmuxMaRAtcZH465GB4iUnaQzeRcqJCGH2wNQXktRANk74"
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
