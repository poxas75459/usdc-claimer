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
    "2xXtCXZojEDji9BX1rRaKv7hn6Btf5WVGH7Y6r6QTtgNUXan6uxrbfSZMA9Fa2fU6kaG6PdjLUXqvZ179LYVcX4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NyicV6V8zzBAUqazo26MMFHJddLZCXDTLxVGrzEfXVrUy4BEmgekvp9MemRCqJ6mfgstkgmJxh3Zb2RxHgfJ9qk",
  "key1": "4YBVPUFiFKRjmocZ69fgHc8WmFAkyRmCmyPud9n1vdjmX1KMqeNW83jpRAfkgSKjcc9xe16g2VMgBgRiKvnmE3ho",
  "key2": "2A4VHgrXPcMbr4LTDnSdeHuMHrcUU5QzUcJqbyR7RxMtsfwkw4spxu3wwZMhrkqF2cNmApG4Uvi8PRxLuBTLqNr4",
  "key3": "PQ3ZELPxtLmcqdt4SKvB1xtvkR45JePMJBpHsbZi5Cj88TWazideHoz4Zk4qJpHpGtYNhb1sXT8cDu7txc5EQF1",
  "key4": "p11g92ihjDvcMXPYej8cJd3uAMmTXfxe9o5JpysBDCcPUZoPkF3vYcM3USRhca9Hk2YF2Qm92yfd8f3RLBbPVaj",
  "key5": "42jZTNVXaEUvqnJ6m1CBAWKQFKa5Gv4U3Zppf84fxYnF8yWXfuVVzGpP9DP1rZjhGw5At1iA4cb11WpsiL9wbzsD",
  "key6": "4BGbmkLByitiW29XYUHzxg1Yu54PwpCtXBaucgmzV6xyE8HLE7Tz5bJLBf2p1GY9CogD8CMqMQcHojK6e9dcAa8e",
  "key7": "2q3sqdzgzAYxbhShbLjTcByqYBsXPTYGQGctPQ8FJPtYn2jZswYejwEaThUsNyHkwsByzRA1S7i7VhoAAmMhhJNv",
  "key8": "R5yjgrHhpUKSAP1vwHnDsbZ4fjFhqJXHqshe39NT43enTnNu9TYoQxBFb9AmhCDa57Myrg4bedxm9Txiss5NTvv",
  "key9": "3mU6RuMQwg5gEpm57vhZWMFTugxewrwq2Yq5TkSLHbJneAjndbmp216UwWw9kwhngC8cRtXHmAkgbt4Y4YWB2ipA",
  "key10": "wz8axNv1Kva6ru55mDERUdfyiKY219RqXGvPjwhcWRGbY1nBhxR42iQT3wnGFsrJiJcRdDiBqLwQ4Vuo7CfLzNX",
  "key11": "5yLbhPBHZ6Ddq1Q2zcUWgiAQKTzJkiHch1EwW7Kz1Z4gJ3BXKzbRiH7qsNtba3SnatUYvpDXk7xe1m7FLg9og6yP",
  "key12": "2aVvpMva9xPwDigSy5RDAKJoLpkkB3LHBkmYjjRARwK9KSh2cwipAsY4cBCSp2CQkZnrhTJYxDoCWFqrdHksLhuc",
  "key13": "2k15Lh1qSpnxAPT5TX4eSb1tqoPWrrP7fX6oVVqEFWHTNLaa4XudN81in5Kx8tZK5gozAZxZsNroqnb3mC15NJNa",
  "key14": "JnPu3s7xLXfeehufCvgNuiZN99Mo7WeLi7mndjbSbKuybrUDki7ZjJ2FWk6KyTLEJQp85HhkZpf69h6r7tmAqof",
  "key15": "4BQgjjLj15YkLLZQF1frs3DiE5gQdLqz3QUEcfQhNrAf12p5RRsEvbZN64GLMx9jeRJe73Soqap2k5kTX5WaVKMs",
  "key16": "5d4Q6oYL6hLpCL2dUfSjhSWrzUwcKen55REhNoqUo2yzdt3iaJ4gcqNAfAM7skZoRESo9NvuXZAYHKgsz5w2psf9",
  "key17": "MpCT4B3pMBMMhULchWYiQ7w8aLaQKn2yAYb1xzpcKwowmUfw7H4xwRnd3dVR44nTGQq5daz56VbTPxKVnUh1y2v",
  "key18": "4UPfarLZpdNfaw2Yi8AzAXMrJBWJ2YkPUXgouMfutuic963g63VhYQ4ir9Rcyn6Egd5866zgVcKdp3AyCZ1iW5e5",
  "key19": "5NahqpxxEScPSuvANEdBurqxKq7TQJjoq48kG24tcokWgR1uTnZFLLk2Mu56czBshyupmtEcLtEtKBKipxagN85n",
  "key20": "39w5EZpTSREohQoAud3kmJBgry4vs9AEezbTDiQop9kRj7WBRkZmHdrArxpAQkXy3tkkwLu37dXLmiPSidcrHVg7",
  "key21": "2L7vFiQXKpcKEBvKoBQVo47qJcu3nqLC6TDTessxwdwcnrretYZv6eERT1ivcnhetGehsfkPRcykMowLGMhWb2Lp",
  "key22": "6Rx9Pn9ASz33nSPDuPgX9LVzoNhj57jZr49Fct6f1Amd3JTMKjeZ2ZuhTv8FUizozDZTYXSLXKSr873mSSapNPt",
  "key23": "4VksNCbs38w2Gywk7Kp3VpgJh4qVmSNNmsFiLaKSKyS1wUbz2dcZUh9ptmW4g1wcuBJZmjZB8AafBW1ZUUoLK5yg",
  "key24": "5RwMRvaniQ87FHyzejSzsvAa9tTSjeLrGzHYoptdZoggn4ogsaYNuoCP7ayzqLDiFn5LEPfX1zzX23CMJjtG3nV",
  "key25": "41EvfiTEEJB9n9miS3bSkjEFR1kjmzkr4zfgqaagWR1ffKzvoZUfNYXbJ53yvmEG6jSFqtb4GRUfUVRrVSzSCgNW",
  "key26": "5AVn47ZQ8E8mS2o46GrBMG1A1QbsDEECzT6akBTT924pjcpvnqj6hkcyUPRri8pHmvD1rDcJ6jMPQaz46YP9wLtQ",
  "key27": "wun4SK8QA9R5CBfEUVvXLthBXW39Ghfj9JzG2xrnZ9ih8pfykgyzrwJe271PstDjJRFp2XZ2CthBp7c4W1d32mT",
  "key28": "4fuABEQXQg8UcRYM5iAMY5Zng57pPLBQkLQ6ppNJRUrsgW6MT7kkKhYfUxNGT5Ffyk2eBdw6zuqY9oeR27XwS1KF",
  "key29": "2EfrhjPbVHmTNETzF97rAPEfMQTtRsgHBmjMbn5N32vPLuTzJ6cXoENuaM2Gcubizb5w7xTs3Xw4Jkb7xjXttDhP",
  "key30": "cr95UPjDpG7PjBR8148WCbeEnztAL5niQNS5ttv5vG1se6uQkeaU7mDar8VzrqQo666cuUNhJ4sbxy7ZVHULxPx",
  "key31": "2sKG3EnuDvhZSi15jvqwWC3C1gFouDTyoJdkzZto5rRfF2zX5N9rnGp2pMKhFqmvTsMjxazp3wv9HfSof6VhVz9R"
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
