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
    "2VaFQ4QTPZ7h12ea8KTBiE6ENBQ91qPna4XBKDkYm1dpzkwjVKMadihaezJbziMUySL811HjajxVmvfY2qhi5u5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pscdHW7roYvoaX89ZLsaS4o5jSbMbLy1gq6SsevYXVpz9KDQFvbKVZbGv3EDT4Z5KK4N5R5DrMBbauPPyFiY7tk",
  "key1": "3dMP98PEU5n95jCDrCu6gTj6auTSnbeG1Vqesha2bMtsbteAN7hX3K88MgTosKutWkNsqa1GSC7s2ahMs1jZYzvG",
  "key2": "3wDSrnfevHdLkv9nhpPKSATQRKw8zExwoLxx2BfyqmBNr5jWhZXZwV7uyAi9gBrS4nfEcjttwEMRVsHxf1SEAc7Y",
  "key3": "gNeJb2Nz4Qk2Utic6CMXmV9cM9YyEgbcNuKYfgjkBNHRYnwTKUWebTfDCXtPZbeyQwb1cukZ9ptNC2rPukRzuZY",
  "key4": "3NxjVwfyNeLSeVf62aHbMqYrjYRHNgwVrEBb7L6PGCxZ9yJAgt6LgsRtDty9vNb5QCFbGQLjZtZy6xXzsCkSECZM",
  "key5": "2UuNgkSdbwToBpaiUbFbs93F7zofWnE9dQoh4g5JeuFwVguRZnuYTtPy7gZkykqtyxoFzenyehsfXjiZqAXArbMd",
  "key6": "4c1sknbgvLv2YXLbL8AkSh94Ezg6uiAwNqG8UnBvp7Eikj4EqsVDGfnw7PSEVKPoWbocFjpoHcoMuviRjWmGpfm",
  "key7": "3dEwc6oej755QZzDFmsPT8U1eTAVzF23xfxcd8tPFbZpbJUgHXwjj3UnmfeiY6ev9UDuSk5sAv5dWvUb1gWLCBVA",
  "key8": "uwMPEgc7mmCcdNfYfZqvXbW1HxfRyPRC3wrj547LYHfjDnBdrbXGsQ737XqVVRgc6My3zAcxpczqT2zA5jxhYY7",
  "key9": "z2uEgHPCrveX4RNnkesq9qnvox33viUkkNHqnZcEtxH325xsnFC3XNgUJ7W1ENM8XjyZ3JHbEBrL2ERbjCXxP9E",
  "key10": "2csBPmkQKeyxmqXMtcV7SG65bRRueNYajoHdBi4oYV8LH6xZkUKZHAbiG8UtaKAYsV2gWANjdnv6ghwtGjGEjzC",
  "key11": "gYSQX36SXaSzHCFHAMycbSqMiMUZP1DxwZ3eqGPdKofaswiBN93MRuLoBtUkuLNvzLH1ZJ5w3EdTtMK8CfnTQxs",
  "key12": "39v1vqVia4ATLEeHLWUj8S13D8fscqZkSu4uz2LagHRP4utmrYzZmkLMiwzwKKpG4rYV1xckfkoBuLikGWagTwtu",
  "key13": "4zBd4KWGMVKaoWJWskwSRNw5pCDgGMoALCe38P9iMveBdC2RRVJfXRB86xLn8zwaEvcQH4ev9s6XbLj6xLtNmzF3",
  "key14": "41QH3egzzrKqTMixJKUd7eesSFaBUh6nUtcSc1kW3ygLZzXrmnbZGvWXCPQNqYkq71ykTjX5bwFRXR4Dp4Dkf6dD",
  "key15": "2JQeDoLJSxxJpQkXpvrGi4vGrobr4csyv9f8r2zQDEPgdG78boNjKmVaPRqqDrvkkfDeynPHSNJwdPvSAaZsu51",
  "key16": "3n7jnpHCy2NuA3G1Dowcp1FbvjbdYbxxH735Xr2yeNLgYhmAsQQ7Kgj5YtWcBdXiHHsizeSFibCTefSfg3DYiuYQ",
  "key17": "5ooxtFRhjSPF2QkHKf5zrC7KvSKH2urJy9MUanxzoCVJfipbGYbjPcqYKUSyB8ceffGtcyfnE8UUWxWsbDHwFiQS",
  "key18": "PZhYAKn68rUXgygYWsPuwbLEz2g2Gc1ByfvcPJVokXobMDgjXnbFcC6BboJfqTisn97dCUFDT49TWCpVNx59JrT",
  "key19": "5gjhymHD1nmkzymzjDBqshAoaD135UN8nmCQCkDp5jc2f6NhRMEPXDSSsxbt6NPAbd4fj2bdtvjdMtv4enXySNPH",
  "key20": "3tHwEAF23d4SNSAFGyadTYwga7DBrFSQnBbWVnAcoCCKjP5vwXia8rMrvD5gfhkofvid5Nu5j9rtXT8fH4iRuDgQ",
  "key21": "RyDtphsNosGcSkc6mh6RKD16Dxh7eABw3cBUAJHDHHpCKR86TZWgUhdTSxffXQNxcZuZf5fHmaFhrYgeXxw8AMA",
  "key22": "t9xz1paXycnEYPduSt2n2nQJnDJTPeVHxk4c5ADgrJRMq4LKKXf5xRh77p67H2pB2mnB9y3WhfC4gvBiD3YgAs1",
  "key23": "N5Z4WuwqTCjVwCFDyqyM9AwJbVMbPyX1oce9Ftua4faYFKXBCMfLTJRiYcdnMEpXNCzmNjrgz875fy9vVGHhimv",
  "key24": "5dJuduQzRZA77L7QH2c1ZrwZbJAoaQfxuDfbwG86oRaraacGd8WisyoUaiujJqi1MoK6AGG4tk37UNAKNLBGUiWs",
  "key25": "2US7jUYiXuNthCwJRmkXxkbWuuPabmG5BEnefrN2UcH344p5SyeNjStXoZxfntoMpQqVbQS93phByEAAiqck7D9K",
  "key26": "5YNCLywMLR3Jz4aFhc4wjkMEerKu7PZwf355ao5vGTUHBJBkBcDQhvbhZHJC7h1YSGUqc9cu1ZgyfzFfwY8nbE2g",
  "key27": "5FeBdntvk8dswT8ur4muskLJjquiyXJkNWsYZDsuDwUspS9Dr9oZ3WiJDiYnFdnTiTFkoNVio2V765HiZXSiwEZf",
  "key28": "2dXYqk51zhzzrtuVcgBWijeGxyB9begFqkba7wMSJrAyCWWQiqPrPK7sioQnuWKmVJUkLJhCDXXxpJxzeBSLdEdi",
  "key29": "4TWKB82bnauxSh3wSez1YZbyYwqdka4A4Xffao8iGypXcrDKWpjSYR7rEXjVvzzU4BBuoam1LoUHwD65ZF2Fby7t",
  "key30": "t17QyiC2JzfuhaPzd1uw9za3NgtK774SPkQe7Vqf6kxXXWuEcosruR1RN3r14gzzafvUH5WQDWUKuCRnXrhsRjR",
  "key31": "2UQtb9WNH9285UEcQ8xMZXprUajQqTNPHgTUWkiTDvS91oeHXhYdYqq2pbGGpQJyVpBbMSMoPL4Nmv82LZ8oU2mR",
  "key32": "4cHWDpnjqhmyWv5QHaSCtEQSE37ULFzb3msFuebWwn9yuuNsdZejiwMRzWXytoaN4iPp3joseAA5tiEE8B7h58aN",
  "key33": "nLf45NHcqzKKZ5u1a3nt2NCWEWhz5GwDCLT1YLfeKg8vFp6V5DvU4eKVttuKWy4YTE5AD3eWNsqUBx7iHPc2Vkp",
  "key34": "53fZ4jyaR1PoSEnzNErzNPBBZE1zE3fY8FR4Kpm9UwWufgzzoo5pNHc7RkX3gdZAXjhuiqG5pw9LEb7ZpFJN4ZmM",
  "key35": "2RweYoyzz8w36GAXBsSE8yjXPEoSTWtwioSd6tEwgDi4v4o2c7JTMMFL5vpt5NSXs7DxxL2QurRbHSZ7SAMWmCrj",
  "key36": "3PG7CG2irMhGc4PCAWHgWpUugsPSup8fd1Rvdspf2Aw14Gc631BnnjiRbgjyp5aWvFTW4heqM31aB73f7NMUDXaW",
  "key37": "2M4JgDKsUughroz51DKySzLj2noujwiRG2PyWL2Kz3FMDWkuCosxdyavRd4hFShNZn6G99Saqge3u1j5XBXtHbnB",
  "key38": "imhox4jwLgvN4jzkt4YNF7TFyoRbf7AVeZVPcivLuxuXaRtx1RjQiFmdfit7eSZn1MJ6jYUC6VUgU3cXDoANgZr",
  "key39": "5ZEiscGb1RgLRU1kdbw8ujenep3qVt5uKHLyhnJyePSukB3uBd28R5BAwNywePUYXQhUsh1KMwiVYa6AK5nchaDu",
  "key40": "2sVUC1b2Ffb8ANbx17JV2P1Q24yMjQL6EXY51H3SvCt5wdY55ma3ZKYq5AZ9jGFoZ5SouU9HSgaRjo98V4NpNw2y",
  "key41": "Y3i4zSbYRGoQXNQ65U2EjvhLXk2UiCKoZvRk8PxMnaZ7Ei4Q2eZHBefhDgKZbWAcueoQQnpY2KJ5ysRJKNduWHa",
  "key42": "5jDMNNHTs9VAHcBnqMTHDrjiXirCbxp3dHzKoxve8AYQcUQJwMMFb3aqbmeEZ5NhxLsGxhU8L5PHvBzed2fwCLBb",
  "key43": "eiSwXvyEdee6kFgy2oS6c1QnDW5MfbVc56NELwSXgFGdjnTVVL4dkKpUgNd5WMpapfpnn3QZA2SUbau3kBXUFdw",
  "key44": "65vGB5nxPg8YxeL298PAT9vdBMzPjQiiR3eWQT15PJyKBQ3u8ffGzxphhxB8MYdxPvgEc95958aWFyJXg69PyJRR",
  "key45": "5MQtpMEgUHaQHVJe8qq1pKjwE2HbuTmL7BNi26YN4Zvffkn85UHT7Mu11iEgQN3GiTyiwwbChtNvReDiAkvifE5p",
  "key46": "RAUosDhVpVNCuTjyfkQMwY7gp7wcDWKWEq4TJfzWJGRrs5SRzd7nnTUurqkRaWmuCBrWZHZDNtaPVDUVn8TdG9g",
  "key47": "3rbWhHtzshmGEVsCxp8Lr3PMW3r3YfngReDxGyx39KJts3hAAH7GBdpFXqZjUsqDeztivNqad84A18syngiPNtjm"
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
