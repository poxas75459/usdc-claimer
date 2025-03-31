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
    "2b62h6HmGx9KbHSZdCP2kWZSopKEY7CDt1jmbspxEuz7WahzwpkkNENJe4KZ5poz79zPM1FARtqHYv6UhBBARF8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xRjWuU7DfKFMExeBhYqT1N5UM7F2txcedhRDmXriApYgKrMSXM4uj2zL2tM29ksgv7quCmn8k2b1im2V45wwSaP",
  "key1": "5dqBfeQX6VgGDH3E5S2uofjUasNv31UDQvkUV4bnji8KKxpc9n6UhgwJXtKfAHuQFJfPnG2NuMrjp9hWZD1HaPmT",
  "key2": "2WstteoFpKHLkSf6yYvsgu1JVaesvf2d52eT5fxx57YundFJWFqmX61xgJFCK8dzJyYktX9M2A4CaVdmiWnCCTxh",
  "key3": "4fDMFmyEccWTSTUFptBZt3EuhievgQyN284f8C2o8Z3fqSo5TggqjevpjwgNWib3wApsxJegm77yfo3pS2Y7hn96",
  "key4": "2TU4xSkxMn8T3kvzMCHctezbKYCP2LwpkNbB44TZgjLqwbUk2Vj9E5HDJX88eGBa564zpPvL2mufGEQfN6PHQJ7a",
  "key5": "44Neer9nrf2zBFg4Gm9HytpPTVGi6bA3fh9BrrRmy6MgeVky5XEo7Hr9Yjj4mApgg4pRjjHjc7y7FWnKJLrcytB3",
  "key6": "2pkXb1ubb7fujFb36oMauaQMc9by4BKWfMET7EzpMh9JHjXoPXRJnc5cciyLh7Z2Dw3qud8obqXtoxuwWXkdabtm",
  "key7": "5cdLzUpwc26RVwD9THFbcSr3NEvtngiw7ZMLytMtBEErYs2SiFreKiktJboov2gq93pA3dYttaMaRXWmeDKdKEU3",
  "key8": "4McXdoYukYCnok68NCDcNAmw82JANwRiA6XsjjE7Sav5VHc6bKSH5qHwWfFvi9KnRsJKNvBD5YjyiqersY1VFnM2",
  "key9": "3vnAvYrdPnN2HZfEv2mV9EPhioNi1oEqjBRdRKHqhSE5N2wgxm8hvpRt2UNPFJFvpDJYdbzq13DS9VdckXzW4ypU",
  "key10": "3B98tRs3sam1tqpkwsPWYZfTBrSJ6RStXbJ3mZbttcm2cWz3L4jmnjWTnUnXNG2iRNKFhnuHdrWtUWAJAm2mp6XY",
  "key11": "28Bt5CJzTrrgQw7pEpuj7X8BwQyoPyLHsh6H3Hzd6LkQgcNg4iKUucek5ycziHt6wdduB4Nfz4XVY8KgvHb9ECMk",
  "key12": "4TJDi1aUJgxot5RK3uRdx8t21tz1mqTvpjCvgryVEws33bXGyudSbWXra6mzz8a7bhgMbCkoMfuDysunr7pfJ5mV",
  "key13": "3Q468FpUcGhQiQab2xAqXhM3VYRen8mpsikqfxhdUfjYkhuQT6uGbngkrQywtuzpxdmXYkGiHRp5ToPp4T9Uyafv",
  "key14": "5nVGmPU5ESgV9WYou2bmVGDtaFDSyF2noMpz8Mjmg11CZ5q3VuEpxrsytRD4HAcC2a8Qr4nzi7uPPYX1UB5nJsEr",
  "key15": "67RumK7v1VxA2DUqwP66NwhoLUkmRGMS8WPWteFbQwSsQkumkHts8KtTDfoNTDHfrsV3KNqRLrZr6eao6ZMRYqNA",
  "key16": "3jci9A8RitGfXEMvxWCquwaEDMiParPW3cvZ398mwEi7ma8HuFqnFsNM9yqkaASfHEnUdjj9qmSRFc9bKv5Z3qru",
  "key17": "3gMX1L8gP4v3ir3MS3THpAJmY19LFdmFmtZFQ8mPoS7uxC82jnzWiELYvMJqKgcd92zTUTguUcMGfwZKrGVcTyRD",
  "key18": "3njqoJpAobiw4tPqQaZotPgtHHD7nrPwSbMPQQNnuvFPnsGTocTHC3jWnJkw6EiBJo7Bg71PyucTw42V1PzJSa4Y",
  "key19": "4BVBAV81Rvc5D57XDs31DfTQ7PE2AxxQU7nfnQMuN33Nv4hn4vujgM5rdT1mJWFKTbBUBE2GV1kVR5RA3acKQquk",
  "key20": "3G1fRXooV5yAMZ1DMMmXnXDTLruvYt6pkcA3an8foXfARCrEy8CQoC3fRiFbgzV8fwAJT9LH7Yk7HjwCi5FVmAu7",
  "key21": "FAomwjuhL9RdpogdBtcWR1LV7QgLghgqWcf2J6KSf2hsbQKu1yMS1dsLZDcoKH1zCKBm8hnLVxmPqBFqFpW156W",
  "key22": "53CbyC3vAoSZVVNWZyR67EVigtveapS6EAmpXDHVSUJxPqFagTtRoEyt3kxAjHxV4EPkqCoQhdPPvi6nbXMyneT6",
  "key23": "PzkSSLymxZWE1f8t9msfnnBjeR19bmdECgNuhVv5XusnszSfsBrXepTucNQ3KyGf1jPayDzb92hsTf6rvu5om1P",
  "key24": "cJempdPF3RtAMGaw5E2RieFXbzHwNB7BxznvKdYxLTTPq89oEuuuhYavn1qk8jPsAtZjduKEZxTgkSwt5Mp9A1e",
  "key25": "2chfDGzyR73GFmNqmdV31XZMzpMJpuUAKWWSaYLzVWa77xWRdiqaFGN4v9J2gu3ikPT29N7ZeA3oiQnvwgm2Uxnr",
  "key26": "2tq5MhpxqZo3WZBFCiyQi44UjV5yNBwuwCaVkJid3EDnGTPc6xBTWSRkqArqViXteecH33hWJ7QChFwhikFjhWXP",
  "key27": "17bKbADgbT91HsK28jSerpiVPB3hWcrgyUKhDFK2TQBxzkpLVtH3Dm9PYkbMy3koKsBY2EgTaHbuFuejMQ1BQ61",
  "key28": "3XkKct3srcriecHj4reA4d2HX6vQn8YcRy4CHf3pGLbFRpzU5eedScpd2sUiVCoejGJ1ujZj5tTg72tyH8ZTjkw5",
  "key29": "57hrnvDj21xAYvZXruaeLeyaXhTGeXrKc4Z7TcgRZgqce4dHCrGFKkZqYKdcKpimkhckPaZG9ZRvgBjMiKB4UjLH",
  "key30": "2fRGEShWctfZ48n5D87qRVf91ujaMLfSkS3E9Aj4grh92LM7SCgMnW1ij9ohxEip3be1f1CCjhPp9rM8Fbpa4Dhh",
  "key31": "3jYSCzRpx135hg7yRaM3qedkKtk5JkKpCTtofNtTbX1GcFMBTEVSQ1JuTbcjmjEB8K1FdhPjQaVPM6zULu9WAPa1",
  "key32": "JxbHyZQbBNR5awQrge6MteX3kJSbWZr18dzHTZns1ePGZKWsvBh6ZvfoeeWNMJr7MyEZ8Zgkpf277v3JeVmg7bM",
  "key33": "55GZKwaut2SrH1EJ2jgzkNWep4wcZYHXET73ujNzTYcund6poe3hN3Q3YkGUvY8gexg3agdpGd4Cxts3krWUNwXZ",
  "key34": "4mq9Gi13zk5UNwaB2pjPcFC6jGs5ckaDkSYehCHKADF5a17euNTD6X3Jf33oT9MVMAohkGKSmXd55YteiNH4435P",
  "key35": "63M5W3dpR8hdGHwpdj65WCgHajgCx7yZQY7sAWVHkhiDAzQPUUNuxXmjyQweVSybFYjfufVhi7begJTYbfTLmsz5",
  "key36": "4XEb76ZcMMM7aH5PWo69y6UVhQYXBi2R6xs3XErq2GJE6Djb8e2GJVYGyUbuwg9oPtQXctUFN8PCU3KGQiuTVdzi",
  "key37": "B2s8bGFPk87XKJppPYvERMw9M4VmRCZVwf9hvLKZGf2UkZ54k2vxMwYNiZirMqsMNWvEqPfVgFKViRoLcFm6Mtc",
  "key38": "2xqyHqZ68ETUMYEVnHyWsxgxsfVm7Cm4ESvaQj6LJPa9gyJLmvg6w5efyehBYwEjouTGXDhq3BiE3eQNS7hNP9Ni",
  "key39": "2hhGooD6HCWk1UVVAJiTyxfNXTUqoW8QQ4joFP98ixHoaxciwtPLLmccvsERttHSw2Yex1kKT3sG3LyySFj5c3JG",
  "key40": "4rL1a7drUGVkHZHEEPhhc7R5P1uFumDXTqbVC5fN8vCT1FBJBttrwkosXQ7cqfR8qrErscqBnVwVmG4bBKJoK8ER",
  "key41": "2jFjkjunhjqXhQpB96eF3cKC1X64Li82mvVkDwRVbPiAVsSMSHHxjoHCcCF4TzE9fsbeutpNJyRZ5LuwLJfUbmfF",
  "key42": "5uYfGxweCXutxnF3RzScV76ySAcvrPNNrGFqw67SpkNxfzi8rNPSofWVbbh2gp9kipkeb1mjvwuE1j7A152anCZc",
  "key43": "38N2EtVWUbD4BunDeEtpbteURYmC6vY8K1RceQKzcnFyKFf4Jm9Hyi3BShZcYxgZUAjsHWvuAydf1hRceXWszv8s",
  "key44": "vMMhfZbonX4EtkYV4wiGVcP3BFTVnb8GCNgTC7rJaHJHyfaBfvjGAX14H56uMJA1i5xSdYovRULg6WgmosyA34V",
  "key45": "65jJFAVhmPXVqD4rpB9sH2MUZJZ1foZKFh9nFM8ZaHTpcemmrgd9RZbuDhr3f3TZMdsgp17MP3WqbKZFfQkcdXE",
  "key46": "3joGVcsXTe5C3tKfLnrBAkcjgpcS3s6GSdnRqpS7Z9jK5hEaPMSZsrvceCi7cUy4DSc8bUyEw797ikn1KgDQ1DKG",
  "key47": "4JscnBBDuVXJMDTHoFZoA6csQRa1riQo6uNBHL864et6NZnshKPJBCU9xR1t8AqP8iQj3JWp48a95ZkKf3dnMiCq",
  "key48": "3sW8weQfBznrySoVEy3QeuvmREwocf52mi9VjnkHdjs1BPas3omcv7tSsuWpmhQugZQSVpoX5cTN4uQX2B4nP3bu",
  "key49": "5MSEf8pr6PwLDyFN1y47Gqz9cJLXDXci9csR9HuxwyYmafeiqX57q9cJmrYtkrcQGDmKWVMgsmsXJXwWNrFf8TMw"
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
