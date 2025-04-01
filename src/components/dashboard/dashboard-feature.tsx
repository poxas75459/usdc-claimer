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
    "4bNZNTaiDBeWwQGzy1xLXvNQWuxEJezcbxfXwMWKScGHtyYDQ8nKaf3ySPYcQfLC5pxc3QRvs6G24SRaRkcQT7Sp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JSHRzMsuHpA4Y4gS8G5g9oDzihfy5KtmLPBJzX1qQy1wvN5jBrG7RjyntmYePNHvL3VrD6ZFC6v1NaZCkd2wFzd",
  "key1": "5tjjfouHx3oz5knwAeZpkRV2Af6iYEPbw4jjKLU4aTxZiWUcwxaV2AzaAqFUbB1sZDuRwrCd2WUAPb84eFrQJ6Hw",
  "key2": "59nSkhKcJawH36FVMaJLSXAWoYmp9mjUZpGN9sRuJXkx1fiSDRGHhGEo6c3D36NqfZZEcyN519GTneHxxh8o7Ryn",
  "key3": "FNBsCLq9fuD4inpCBEdEKUcTubXtfeK94Pp7vAoe7vUPYo8HDmyhswb7LZStyLcxv8Ponafxw6rTKkCzp6G9YFZ",
  "key4": "4AV19YwtvpTc8QmpZLfmJW4qVkKZsQPQKzS3zwvGYAszWqXdoZchdCa5WeV4kVvKTNPGMcoyJd8Xp5BkLNVUFQ5Z",
  "key5": "3jY2eD5yxvuAXVkRDJ81LfEF2USZovezqtdDa9p2A7CtwbQ1f8pxmUBYtwDe3B49WUWXm28fPHSszRzH5t6rXM2S",
  "key6": "2DNMS1QkqDwbsVm1ftHGJh7d1STP12kjCKaUZj2jJkhyhndk6Z856iVd6dxByckjeqFYociWPTSsVtaMdv2s48HG",
  "key7": "3h4JStqwGjZpDS3jp1Covny8UmFUNEuEXKomSBkDHQfZErun7s5edWPcxWXtGhDBQcjctz4sR1Kek6zTBcVACND",
  "key8": "34TrNxA4L8RoRwzg5baEBkStrn2XTnswFaVTiMEjYcxtCuTVTs5DSuFhZnM1XXv65PjjdaL8NQrH6UjYXSBHpcQ",
  "key9": "bZbhc5CNdz3xeuRJSTAMMgtj5Zs3sCpAxLE2eDuX3gPdoS8XUd6FGfUSgwHZtwvPUR6rQk4tveSAgfJk7ALzsfr",
  "key10": "3uaUW3ATsS457KdWgiKwf26vDZ473pJnSG81mvXYfa4aX5jo3jifeoXfNVAHSq7hpfu28vcZTHf6BSPakCswhiC1",
  "key11": "7Sik8ziHTR7D2TwR17WefwUWNxmLoKZ9Bc4QGd9Q2DjgTmGqw3BFxmcFULF3VtmvuLH7ub5MQg2xniPbB5HqYjh",
  "key12": "5wSxRnHoRwigHWQxV9MswLEcc7TtY7gEC4aYnZ4HKquRcfcuQu14UZtounWJtwjPj4K2TrMp16zBcUdCHo1Vbj3",
  "key13": "39b5qT5UjhKiR3mRzxCLCbgTDvdybEBYgnAPdjnrxwi54zAT2XptiVb2TBAEBnUKNskQP2trSjScVJqKWj6jLikK",
  "key14": "5xxHWTvAytRnLcAqZzAxscFEE2aupm5bN99z3MKz38cAh2DiraVKgBWYYvuGHFE6sJUkXuSWLqQDnZ43RncSVvjy",
  "key15": "4EXT1Qq4jvxiY3dzZFRgzq5gfB2CCLViyTaDS6niqBCHYzvxp939Wtbm1Vk4D3zW2DofB8mPksDJLBSU3cuEMU68",
  "key16": "v5jDrHDvY4w1CUtFW8tcXgRTRsrJjbc2EBDsbiDDe5dHJXEjKW3wQZQ1y1jR9TcdiSKsHdfBmSvLidNEZUe8jmn",
  "key17": "Rrto3cKzNraxBT9GtLrBMPWTmR1SWY2s4T5zyioLNpbQffKrdVNt2bKphQnZWD3bgASv89ALYwWeexFjitxB8sA",
  "key18": "4hg5GCazu4auyMy6sZfiK82bce94EGBaKeiR1C2MRHgCKmwzgKZsxTAajSih2AKETK8ZM4t9uojXZAahf3pz39qp",
  "key19": "MkipWkUrq6FWeQr2P9PWeBtvH3Db7JMoCcpNX6ZKS1cvLmnv4A6NDRJp7QbrqeHTKNgHH49LFEiTQ3tJSL7svMu",
  "key20": "3uJ15evbmaWPFdF8iujFWRiVefcUaLXqLGWK7aVPE7HSyNAgRDosGeYuj5X2Wr8ckcSWid84vzH6XrBdmZ6zrKDY",
  "key21": "5icdzK4c6QtSi2aEPMBwf7cLLMLJvw3NTnje9nYBzbXMmXUZHVWomLLF6dhdnn4rEE9mxPUbaBu8KCM6oyVhG8Q5",
  "key22": "4T9VkUXSaZCjGRqoDRmT26UPU47tKxT8CXKFKHU89SoMrWZZDkCV3mBiqNtwYY2kXpXo7wdic56rD956W3FjTx7A",
  "key23": "5Qa6UzdsZCGtvKgoY88pXSXhN2t9S5nvYxozUJJ4eoYtccHMM9QbezWGzw5RPT3u1in6jmerroGwnHMarJ2bmczR",
  "key24": "3FFvL1VXbRXLt5pumiSm1Yy4XqFQ44yAwToPZvMhv54Cr6Nf1ix9dGoynw9tUGU5aYtEn8qmh37ALj3HkC3Khp1W",
  "key25": "2vJdCSFwjYazv5UGvEQjzmBsoH3bDXEYWY7HZG2KXZ2hrcwf2mh2VV84kWLm2ZGvzp8epogGCsJx6nSt6eMZt88e",
  "key26": "49cFjXoT93evg275odVHaYGNTfySCKkeWDvBzBKEHSBFo8m1EXzTCnPp2bEV5VNFD28TBQNFDetptCsWoHFw9yxH",
  "key27": "ke3P1sQK9WCpGBwhy8gY3GFZR167GDBkqUm2NDvMgU9upXVnCAXcVncMP6ibJiXgA5NVGfuK7oaYAwaFQsR2B7c",
  "key28": "3FrFM9HounvYyBG1BAZn9ngPViec6LfJuUJp8sRReXnazZanZRB1Vhw5VRZsTs1MVkyKghDcv54NnK4ihL6A1SiA",
  "key29": "5fktZQzj4rAnsq1bK8vUGsmHWAjKJMHiJ4rehiDhs8c7SXr24ge4L3tQJv7eJQAbFZRV2dXtusQwMBXHJC7tYf3X",
  "key30": "4JzaEf3DEdWMxwVLDef34fenXnLAG1zGpZJJgqowaXLBAB3ry2z2ST3ZXUMb5akrPb6dcLMMxWa4wFPpYdDBRPLm",
  "key31": "Ps7TKwmeWmvAn4ThR8B8WuEsDdbcW2WAX7mHbJSKev8ehJstMysCYgY8ePhFBL6PejM3MsjkgXBxVvPahVDG2au",
  "key32": "rviAM5ncEorCLbpuY7o2J9yBBSTBj5DFkkCNFbP68DYqxgw1roeRmW57a9KbQmCTgdWvp64SpXt6dx8YEKAQxEj",
  "key33": "4rqCNsGGawrafZ6TvZrhe39kHpKzyqvrfL32Ce2uwzXGvMvF5CVfZjsRGQdKPjHtyzVNttCWkSZsBmZEWbbRfpjL",
  "key34": "94atReMbwUHsgWZ9bBa6f2nZP3VM7JRVvhtnpyorRbaisqZA8XnWYQwrsXxG8EvehuZquEne7Ko412kuGCo5BnA",
  "key35": "4roFjaE5bMdWN7F8RDbjLQ72976yd9BPtYMghQdH1CJQdS5LKkZyrNM9Dxrq3NpgD8Nk9qCMvWcvZT6vppwajgYf",
  "key36": "2iH7dqzNd9kEeVnq4rsRKrqE4HYKW1yTQ7RT3vkDwJCjymQPzG4GQjtYMgmTWVLa6RpXKM1YJHcEzavdZDBJA8Hw",
  "key37": "NkiJnTb9aN8CmW7zdSuCeFfGQcDxfJ8MQGsbGpNdBQdES8or7S9veU5TnjMonFKXH1qd7oadR2zeLz6H17zaZGU",
  "key38": "5SaHtRcRRTjfowmnFzNcoeCC2MMi8TMUsKe42kN57jXMZv6KcBDWuyXHcXc4jCroe7SJYmhVE6tWua28r3Pu49di"
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
