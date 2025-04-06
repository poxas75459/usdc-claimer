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
    "5sVjsSAQdGL37PFgKhsnGbGk8NJUNr3uqXFEjDWEHEQo8ZbVNPAK1BNt7ZZ7eEVUBcpzJetdX1YYwGf9Mzskm6uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XW2f9akQ44SCVfLcy23Xedi8VUmaKwXfykobXb2GXv8qujd88tS1RXGEXNeMAkF5pDhgkvyfACzrubvdMmqGjeA",
  "key1": "4kWCrNwuqaSAhrRfUKtMEcNpYd748BQje3sKgLzyq95KeFwFMt1oS7KExQBWsTy3TdwJnu7EA1LeKebobJwjEBu6",
  "key2": "5TnJygANt5wdHPKQBN5mLnffpEGBDuzjeRaYzVEXGM88Fc1zGkGQC7MrC61tRnkRVCNeJGfU9AefXwykddpmzbo5",
  "key3": "2mNhMDdhTUgVtd3JjEWo8BPL8DVXNgTkPqshZUvYXsapYsHYHYe3bqDu5fenDXYgh1wt8PAx1Pk4W7kZV1YoicAS",
  "key4": "2Ro2Pp95mRt4bBiuGyQZBuRoNA9VST6yncEdCWc9QkjGcfbB6cFrH5tnkHjL5yqQPBbaAJsGKGAikbk8rn6ttGGn",
  "key5": "HnuTij9FEPJF1CqYsFkp8exKfKRfwJgUcrV5CA9Uzj54RMYNRM1i52Js3J4uPWkyN3veRRpMKA2mxJJM47YL5Uf",
  "key6": "GjaTJAv5JmrJZxD4h4cHptifm25vn4vZJ5yKMY1NBcfVnN4rBZR14M3FzGM19yNYyA51ZPJEueKhPGZeA6HbtKv",
  "key7": "3U4TD8KjBn7dwCxo4kh8jU5x46NA6iTbfSz62CsJtNgv3NV2Zp4bzfLLmT91kpyB5f1u8c4NDj2GKtyzA5sQ3n8J",
  "key8": "43N1SUUx1JfDLVhM3swxqvNnE7LxuGaPFiTWugLj292M4sobf4isNwyYoXnKu6Pt9bKKQopviY2SrjekN2vJE16a",
  "key9": "3WgvTHqH6uE7Q6Wp9MpgDBLJE3x9dn7x1YLf27B1Ri3kuhTyP9QcGRsYt5RppKW6JJ65GbhbcYMWtViB5gDty659",
  "key10": "2f1BKy1RM43fgf2dJCMuz7nwNC4shmu5MJ3zqutk6sTbb6obp2MKUNpvqf52DPNsCGGXoTWnZ5FZAtHNy3vsAEL",
  "key11": "2WyW48khWpw9JuiszNpmbpcfyiavf5gZPSsJVxbfJFcHz5Q8XnyJv1E1FhErYmgvfGKwEs6K3UTyUnvCatMy7CKU",
  "key12": "5VKEQYvB8CytC96CURaFscGWSWrJyvRWK6Nk3Kbtf19pftY2A7F3VfxBQf1VRbf95ieErkpE3tdaG5NmSASesZsF",
  "key13": "cW3iUcCEFY2E3ZQEoUps34uEjZGgDRXfWBThFGtXKwWzEysVnbxF7GbZC5k5MC2xUYp1PSAZZwrqZ8croNPbi4J",
  "key14": "2F18n7o7RTwHgpNbpTS6W14YaEsQdaW7aZjv6yV3Lb6qkDEhan9qaeXnRNwcYV3R6P3oW3DmapZpBEXxtwpKMzYC",
  "key15": "2aCZB3m3zXdE5Zbqe7LwcBTt7yVqjf7D98wqB4oSXKJFgaMYfcA7Eh6f4mX5yC8fkjbodczZazzmpiF6BtR3fDey",
  "key16": "3muAEZZzf4JqRf5SfbMjPm4X2QLpjF3noSZg8Dd75U8yadRJJtTd1AB14seNWM5XRsdwvvwHkFqKs4SvVKGbe4LP",
  "key17": "37ZxzPizRNAVsDZg1Zf1mEYY2E6DfAfWALVDhgm5PincnWv72hGZizc8aGuppta3pxH1w6T3k393WxdZQswBDF4c",
  "key18": "4oYvK8mciNZTXkpnT733xmDG9uoZgfacrgWQMMEdzcjSY2K43jf3LvQtEParp6tNgK9YZq2a87THAg7gmWA235Ny",
  "key19": "5pssFJj2czZWGUsEaSJg1peqXUSRs7hZDvP5eN4sWFRo7BNbrwvg9kqRBRaVQNY5wthfsnarARBq3Di89bpJEvmc",
  "key20": "4VRfnZg1pH6RwbndsaUPq7JBSUpdPnqSTZ6kRapAEyfAjYxv5qZT2fTisFecoSV5e5XfxEBdyMnUkEiUBbopPw6c",
  "key21": "4WzJbAyj3j8Qj69MBGX7NNRYUs9BbLXTDkLArNmXJZ5xz17QVZ6Av3ErXFtt83FeM41gYb4TAaRWwSkaEbZSHDzf",
  "key22": "yfJpun5Rw54VRWfAkx6v4GfNVYL6y4oeq2FpCer1HVE1goSsVgXkEUbmJbSGrXCNiFz1mtEmqGpEXdgpEEHXqFq",
  "key23": "65LnkjS1rcHEhnVJMnHuzetPXZJ1PtHZzhfuSjjysHNEZoo4VVrHNLqzjUqEU91zdDNDkNFHy3Qq9NFwq4jK4cZV",
  "key24": "3Xx2c5NgacN8LZeaRVRqiwXPp3xGWN994prdjVviTxCR4hzZ8ThV4C4x2gwVmkY4WoFG85w7zWcQQ7uqXJMdqAes",
  "key25": "5CZVtCTkv7F9gGTdwvjgosgSFD865KTTiQ4NR3XDa6Rk2t9eAMCdouWJQmdZ5K4fhd3pqZNjJYYqQaWJe2ke4Sqr",
  "key26": "4VRKv3Note7Xpifih2WzvNFA4JPmLWtxMiRxNVN1Tt55gQoBdsjsW7FgSwCfH4pZ5Xh3yc8BaRCmqsozbStcuQKN",
  "key27": "2Cax2MdLtqEdFRLyYqj8U1Ldm6daoycXdbN7rwa5P9hRbAURNEjAn9YcSVuv1aXGSYSnSktNcPpGLfxPEWunADut",
  "key28": "2SePyot89TmdenRnQKbsq5f7nFu7sRjXCYkPHrKNeRQ8ttkhP25xTu4aDTuzbMon1PbN4xDfA3uR3pASnRUkT4B4",
  "key29": "3ADEtfPvfXtoUcnKXYD5fZSVKmynpqzZtVJz3y6gJrfCDBjgWDrrcaeEtYFys3RddgNspJLTMqbKerGkHVjCsNrc",
  "key30": "5crMZfsPZ2Mr4rM12kgZkMDsmTJYSMqepd32Ns7gRfPipKqkaXUyof336nPRzv53uXzMtujvVbraktELPnhyMUMc",
  "key31": "34h8n2iBgYbE4h8eHMUKR21baGudNhSphSynaCCPvQQTGRGqucGkG6cukhVBFfSS3i8K8qNEjq2L9KdAt77dPU7e",
  "key32": "qw5ARDscH8bNs7mi1cxs2FfGLWxj9pQcQRhFrcbrc5Tb9YMoPmX1dqjEnx3bDSPSjnRzwAtZZsZoPwKRqcTcUAg",
  "key33": "32ysDNbzEAFJEokdQFgtVCfz4nUkCykGWMvgNzrYZf7eZqa6ZNjzCF3EBr87ogPNmPvq2qKagJ3YCf9WVdf1F6wE",
  "key34": "24477dYCAcdF7Exqfu3qvSxCZzrXAQe7XNsyBX6P3d6g8TotpaZBQ5fczNjBfaJonngw7jkmAWZMTvPPGJvuRkE9",
  "key35": "4com2UfGr591ykmKCm2PFF5LBbpWWsodzDAeYPvJAz3UdEoGNNpKAf4zeTyV1piACr7PuabCsuYgPr8Dd6Rs16HE",
  "key36": "2tbckVkzhoVX5JFsdRAUEC87s1uCBdHwUtut6hZ8RmyQMa76uEGjg7kus3cu9qs6dwSDuUwqAK8FRYbQCzWGes5g",
  "key37": "4Ns7CWsJEuqcc6XtZbpexkQ7REgZ71tei1i2LvCPeZHkyvMEKKjWRDZBMFTq7YbU4KPwsawNXfxLTs4cF3z9WDpW",
  "key38": "2p8dy7fWaCY4xepDrEvjkZK2ZmxzdyYCZYPpMjE3NZewtW36S1317em728rRoJrnG1qra6isb1gcBufA1zqADWcE",
  "key39": "3APpB8f45gwJr8iqvE5wxCktVL5NCTwkq7C63A7ifiYV5YsJbX1sdFkYbNkrPnvzcWT7R8h4kvbjgkiohtdZNUdP",
  "key40": "3x51DhQvgpN7JMyQQNp85eoLXGjek2udYiztYojgxXSX4gYqn8PETqnAbvWabBLSqpm6bm1Ptfm1j9MqMoJr7emM",
  "key41": "3pHWb8iKLPJQuZvtmnRvAxwAJU4wWt6E9U6JyRKQKg9SHZFp6UPMknwPWfiWnL9cGEeApHwjwFPHtjxTTDZJsizj",
  "key42": "5yBQ7Y95qi3g5cVvhniCcu49UY9BdUiXxQnTewKxYPg5UgpQSupjpv79WkwynLydDZ3SgZENYqVwGtvdr2xPBMFQ",
  "key43": "5YUAuZPemubnAs6YCwiaqRLHPoDNVJNYJoXNiL7y8LanxJbe2b2hNFrYgUjb1K3M9N6zt8Qw8U2P82PD79QR6Q8M",
  "key44": "3mQfpZ2G7p2461stmhUMmY9ej8rxMZqMeQJc1dTpyVk5QNNJ2Vk8C7avghMS5BCkCrdTwba1torWbQJ3kxvas6q5",
  "key45": "p9u2GGxEfMUCbmakP1DUfDEu8AnNFfazLAWMFinXfK1Csw5WSfvXt5mY75jjJUuNXzc6duigbszAKejYorLuXQQ",
  "key46": "3xPc9mnuU6Tra6wsf2WFyBAADKSYzF3odqdFiycHLmMXzKb5dnyWPgZee3ZTnYf65PBAKnQSDUpUSEtZ4VLAJmMw",
  "key47": "eENiwW9ms5mdrbNYWSTNZbijgo2MePtckFiMoRHXgQT7dH7xgQXp9jTuFjpKH59cHkZUVZoPKQFw5Q5PeRKtKHV",
  "key48": "Rour4vpYNQgPFwxacXrzjBeU4d6sEoXAeEoqQt5NNhXDnehbos7YSetGAj5VjaB5VBEmUeE4bbEHKr84sNRVH5Y"
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
