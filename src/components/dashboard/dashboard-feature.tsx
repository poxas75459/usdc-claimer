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
    "i4Huz2FT2WVLyeLhYoRrN8VVTRijHB6bMbJTvrBgzdQByV4QSDkKhoLcxhG4YppTEZwCyBfT1gGTRdJZgQtAaB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LZ4C7HKavzk4SEAiVRQFPoLB3C7ngdaMC5TqishtnGGd6Cxo3Ej78DLG5CNGWKNhGfZEvE2mSmp1eFwWTAKazzB",
  "key1": "4A7jchdRMqNTPhrZUZtR5Dfi7Yt5fyVZHCMF28zmRNj3VTBqKZvmvi7Y7ap8FmNd1eT93efRHUtuESX4gjNX3Cy2",
  "key2": "KVwCcd1HhPDq5V1MXt8GNzuLjLZoJ5eAGtWfv8FZxQgexEVPx9vXBJmkgCwqpVf7GzgtWiFvrJLXkTyzaSz6ngy",
  "key3": "5ZWLoW9xL4D8awP1FPYDCPQBNAw7smv4j64YuRsU8BCXXDYV4XcStc8Ptx1AicHHKvy12c6MDpDYPMUD5e4qVbtM",
  "key4": "4UnTpqTVz1gfY2dpLAFvjun5mAGGkurmK9KxHqfAumuxbmBKuyaD5ijWvXf5BNb5Gs8RSg2m3gUJYK4aRu7o3LqK",
  "key5": "3R3xRimpALxzLsSA9EXmnw37NKURZK4Yj6GQaPqFwuLgsmE416yiirVR4BEMXywCrTctw8nfJBHZtJFVgKwwfR7",
  "key6": "bZRpJbeTQGDhDvsT8464n9WRJTN31JN2rSuYE3KKLpASQYUzko8G7HxMxCwQYRMS7YWfARMc1EPhDju9RfmFkZQ",
  "key7": "WcywMFyvErdmGWFHXXVwo6znwF3UDnbi7unu2QuR7KE4qZPrC6JXNnEEx4wJWEbevCmc54a9YA5SnmMp1A55cgc",
  "key8": "2P1HQShCHv3LtikTWg8hzzKJjs3C8rEj3znpS7L9k78fBgStjiL9X3dh2tW8hviXD3WxYNMvSrexQvBtFDUm1NkJ",
  "key9": "3EkdmV5Nf8zoQF7DnZH7oHWJLvC4LDpaWFxUVPonUXsXv9eWgK2Ux3kLWcU4LxFRyx4p3ghUiBdEH7Nz1g7RUQcy",
  "key10": "P49mmFEm3tdiMH9UABRFFUE8bWCwm8Bh1sgCDiMfZBFgBTMrdJKfNiGvq6gk4F3RngHfxMtAXW8zaBRbrC4XYsD",
  "key11": "5e7eskZBr5pnwC63YuSuj7ZMyKLfWSfNSVAjpmXBoSknbTZciTvEyfg6Xk7wqREinsrUzeQWEwma4EhyXx6om98B",
  "key12": "3QnyzB34LhNJxXhFGFtymRuRCd2iS7jx8xWCg8RbdVoAi78xETf57LACGHJMcgcKHcJR7uaKhoQwbkn1rRWd32i4",
  "key13": "5MLzrPubz5eZxj6SNGK7vMJKsnBy2gRxnP6AHSiz4Q9xM241K7z4KdgRhXgrDSux3nQZQFUFAcoAxQiE1H5JG1vs",
  "key14": "P1j6G7RjhDf4m1HQngiAU1UJRHBvyuUa7fmZ8GT1KgdXAUgAqA2PF5JeSwvJaVEe9ogCbDJQAyGsSaEgJ1JsiGy",
  "key15": "3126PLzAzZG1U9nT1GEV158UkRfGbYMYFGdP8GBepxuiuuZjCucejqLaC9x9KGUw3vfBPDFCsygJTEYXAQdoPAU5",
  "key16": "2gvgtFmDrMiEb6WwcfoNspcbiWz2ZMtSwcmwN3gTQ3vLVmyCqPr8Y3uNNoTVfdQ7nmthKjFCvRsdsn3rDAyKWViw",
  "key17": "2FFUt3yqiKGRYgVy3rm1cY97sESKWVJoK1ziF9PdTZwvnRWerFknyHAaEhhZeha9VoS3PJ3PUtC48oUqYQ4xKUpv",
  "key18": "5eGYc9czKbFirchYEpDtgtEs581B7GbtgTjp3StU7NJbfAvwV2qia7y3BV7ByBHt56hVvRymCNKcUVLky3qkuY2r",
  "key19": "2cnqBht57w72C49C9q7wtJvEzCc2M32JUBQaNVcxMNVn61i4ALkyUzV3GRkTzDNQwS7DYyyDeeKnvmsZJGSxdfGt",
  "key20": "5PuSHDFG2ywSvBEfeWSXyQahNQjMCMA1KaEMmVnT9RFqPsFfWvpdomipXP4TPquLAFu8v65aYWJphnEe6bnxt3KL",
  "key21": "4yybKk37UfjmSEt8hZFuAxTRG4urPuXvZxGt9ZyTpXfiL7xs2nTdG18YDbXbAs8zejFQhLYLheD3WzNeoPKo8m9g",
  "key22": "37swSPUc7p2vmWRWD22q4hqBdZDcqVGPkPo3vuBN1ZTtCfrpARHyCNNmMWVG8NUTLuHfmhkQfoF4FFa7iyn7VhFk",
  "key23": "5hVAowUMzu4kbURYD5hRhy8WespTsWkNUEywHBpxwSeM7nvxSLERFdVjaD9s9JC1d59NcqdPYRxqzwVkxW9W3V5c",
  "key24": "4TNZnDvAMDcjdC2ubxPuiEbXozHW8XxtcNiZWCzU5vu3R5ovNSwhhPrEDTeJQvxPB1zLsFTYfwtCpBQttFxa8kXr",
  "key25": "5sA7ikVxHYFubcpQzkbVF3ienKyn5RVNW8WSfLD5e9qRVHuesEK47kF3g1gmAQ1mrHtrEZHJ8HT51L2auzJyVDaC",
  "key26": "4xGJBaLF2mqBtrQaZjBRvdeTr8rZ7p2iPUhNpQdMNcUqrFq1QzQXVicGCvXX5Qx5rZTmUYEoMXQhGMHompyN4Maq",
  "key27": "9RpRToU3EHoAhJN7RZgg67V1MTS39KCLFmT86m73X5hv3f9NX6RMhzeKBfiLD6HGqY9a6vfAFLoV9JnTnVeMMRB",
  "key28": "4sA2fj95UkoCm9h3bzr2PLzdTanKv3M1iby9TR4ndaDJ5wPfk7KZE7RkJt9v6yPfag1UJ5fHdfzxEC1JpvyWkWXW",
  "key29": "5Fbpd1KxvSQ6Kt6gCeAVHzdMwRJFR2TPueWTM1eCq1EEEmhkJD9i5DjRUeko97QiqRs8MHBEbDAYtdayoV6YKcFj",
  "key30": "49dSmztXFXE6gJshRc1ZV28KwT2zw3xUcKsqpRYKTZ6onq5izyAna1WtmjeYaKqA9vQ5tc4mLF9K1zvvxTsgRY8G",
  "key31": "4WtDLApBGoMAenqCtbNhqswt1LzRJbj2pN9so5a9NYo7GKj6nv8wWCdJ3PTUXFx3mmqmJVYDBq5dkTMoHJ9PytEN",
  "key32": "LAqX58ETcLJaSt5P1xoU8631Y7EfZ14ND7Nz42hg1wBoeiwPmnqZQ5eaTuSWF4tkzNve3Cd128dsJ1LKgU7FXnK",
  "key33": "4qSrBC16jbeFhUvyGGK1zpArkjz4ZzHme7dLYd5a8Gs9bQBf2F8eQULohBnm7GsUgqxKyYeEfSvpvWbd6kXHRa8s",
  "key34": "2q9SuSkoCNoLKqcuz7YnF6aeZ7QJV9csZ6JQcYMJ2QpNBvna9LPP4s4Fu7Yi13uUgtCoWwQE4jfqrBcsohuVRxA3",
  "key35": "4AxNPSJVYwfmNqwT4PHVqby1jHptpTY4cSPq1CVVhmKaaqKbKnRm5N7ZtUacsTkh1eAVm14Uyf1RYLfcypjujxqN",
  "key36": "3vYByC48c92WvNBctXNnuWsQjk8ZuiEz96TmXAjHAAt1Do6V3oFNJuUinc8UXiHCMuE6s4TFRKaS2EUCRpB44ZA6",
  "key37": "5ycW5iRzEBWs6gzgpc7HxvewjCw25rKw8ZR6M2DHzD3q3AmZnyA9nb8nesnndJRfg9pGZQVT18cb3L6TUKWwXmZw",
  "key38": "SZcqsYLUS5mYhpomrMAxFqegEfUKTcc4Sow2ZzzYfxBjxVVTDW69CQHXvTbA6A87C1QGZVRVnUgGsB6NyNSBWvX",
  "key39": "55v59WgzMc62ykYakzo19XpFbFMAUToVesJB6y8gLNZrFKe943bnZ61FSZ7v3EspuhHwRc4uy6LcpyCwqbgLBDvw",
  "key40": "23Rkg469X3vaXCqBD9NDesyx1ZGE8N9eFz6dywwZp4oLzXbyGWXvbDCwwgQC3n5Hq8qqbcMEQyYZdALA1aHyr5za",
  "key41": "3NGVDg5yYzsMDmfmoyCgQEdtypL68c1NkTQvbyvCvrwUMBBEMkp5wieWxJbTbti7HNZDuLJ5zNj5abmLMuxa1NUV",
  "key42": "2C5Z3fnrEgTej3k6ZGA3ZzK7mmbGEVqXnEoHHXCXG1jPYYvorakxgP4ZYpPU9UgEt7xZAHMwpGqeme8UMroZnaZM",
  "key43": "35EoLoe78VQJTVmD8yMzWy3FWV2Dp8Yto1Zngp7mP32mzR51bhbKq5adgq86PU1SZzJNAfcGSh8EXnbdhcdW3Kq5",
  "key44": "4VGbECndCf9LZguZvHw5GAjchRxULiT4PD8QRcNNaPcamXdVRTXyLqDGdzbbU7VSXepmF1fwiwpa4NkJQrx9vzkh",
  "key45": "3dTGbzUqLdmsR7UMej19DyiqosfY94KYQjCpxEmtA3RqWC31cRHz8Pu9uFgSV7vEtaVRnSdw8iVnQddj6uUGfzFP",
  "key46": "2eMq3drjNCijnkUMWNZ8ksUYbE6wEvWyQEng9w2GtSPxcafVmSGoSnFPBgNmb7RsA1yL5f69Xbj2n9ZH4ReyvJEy"
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
