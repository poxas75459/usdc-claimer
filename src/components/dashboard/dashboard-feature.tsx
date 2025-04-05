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
    "3EyRnMvt8UT8dbmuJmDpmBU1bLBbvQ1PJYAPG5yAzFm4CHF17Sw8SYs1Gw3Ng9E4kpML7BrUQgteaqAEHH8udsLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q7zu2yzwauWVHCB212Bw5EjvD24SWhLPq3fZjcusjxEMJfJfvex8mjzQSPg3xEzNG3DVXqZsWyu8eYVwV7GNFra",
  "key1": "59GSGaUvxreRXHeUYyX2U2T5TRmHcCzwi9xR2WAGx4no7iih12vX2sPhxypyt2NryuSHTLNR8ZS9aKQQpjLoXNuZ",
  "key2": "26hDsmSaGbEvDSUhicaYRad7KYFUM3yn8M12pKXYx6RPXeTKJGJrpY8tb25u4oVsYMUe6WUbRB46dPJ6TmrRpduU",
  "key3": "3fxkEUhPCaHz1aU96kmQ5i2sQbiHPzf3JCKdPaNLMP8k5MVwngcYCtak1FxKn32sbjKsvTM8jRKejRVSssLVRFvW",
  "key4": "65Avvbd6wAaYkToRw4hTYjYZj9W8hAkasi6fXLaVvc2iwmJ6GKkxYBs644Zv5SffJwk3HP7EtpywGmxvDhqvcrhV",
  "key5": "2Ys8ZtVqJkHoUDJjRUci2DDWf56jXhmwXpxFwapjxfXRwemDDjY9VmZidNJVcNgHTnLHNHcq9VQ7dTHXRD3o5hud",
  "key6": "AhsNznN2ACmv1e99mGX4SxMVfsXMUqZB6SZNaCK55AkQ5QXF6YBJtKzJksLuD2GzaY332oQJMzLja4FVbqXAmPT",
  "key7": "5QtupB1Fw4dQQeXmUr5hghKngKkZyCjwsuRzMk5hXoug94jCtty3QFA8YuG53TprnJvMVA1RPczMDd6zfPYqs7Xv",
  "key8": "4YB3UG2VJRApVTJsPah7K8kMN3RRWvbd5HM3VTZWyhVa8eCPoca4sCAvVZHynRyj3uM4CSTbFvdWDwqCf46renuB",
  "key9": "5RAxr9yEQmBwS5RP46i7vJnvPWuoqBF6pyCqToxzdYq925kH7Ug8ELrSsdUnxZow86fv8q9q757rGNSwyEdLHjH7",
  "key10": "5j4GE9PWyuCkg5fGNi8vhmeaRkK7edCwgbgefeNJmfp76W7d3ySL7pT6SKmVR4E9SscYGtCaHVxeqs8qRj22XViL",
  "key11": "3scfZfsLfVevSrQeiMs88Yzc1PxnfetTCB2DZ9qYAdT16mH9gQ9j2jqoQWxna3kqRQE7SLBc46kpi5YVLFU7ZkUu",
  "key12": "5CyNcevHT4bprSgPHTSE3u8HdhtdaD6K3mcXh2AsC6uGUSBM9uUdfvDGhjZjgErfknaZa3qFwV3jwZDaHy5x7RYp",
  "key13": "5ZaonjmiHZtsyYM91mEkoRpZFZj8oBqvM2RmFhm1wHNPUKhr8wpqE4wkH6ecQmkiExqirYgsLKFRUMpDb2kTJzNp",
  "key14": "gZJFexTBPF6UuhW1jjavDrGKkuKNLNEJNGzgfCN1U1gjuXDNQypVz8AJRV9AqKXJ1GRSGF7yWnXZ1V9bUXiJkv2",
  "key15": "386JacTchbfgPS6Ya4GGsGVM24mgqV1c2jcqGu9wKRAhqiLkpHnqQkCcTt24izQALrjgGaVv2p6jVoRZDR1aevfj",
  "key16": "4tiZqgETuedKR58Vqk5aSM9awNhK9rib8SGuKnYLmokKHrL4ipAur2JpFriB68qPRM1dWX524ae1CkPqAZCcAMUR",
  "key17": "3sFYKHK4cuGQPKBhwgiDWgGRC2JFgrd1LXYwb6YFgW1a3EGw9JPeeqvLGmy87FxosifuKU9tatFYhxRmyPVw186r",
  "key18": "2AzzhEYR49XVdQ2ZXXfLLiyhk2nkWFpKnGnxdhpkevxSEg51E619XBTP7soHCAF9nR4gypjEaSL6iLtJaifyatNL",
  "key19": "4weqKJGLckebqmnAN9AEALqmEvSLddUijhUc6rQYaCj8Vkd73KEh3MePcLYaFtFGd5LM9gKohRTbxMGuZzC1oKPj",
  "key20": "3C8N2XCHm9roLhTjAENxmX4sFYHfaY4AH549Vk9ypiT6senZeQh8YFojA4mRjuw83hvaJeto673JawMUeFMJNYn5",
  "key21": "2GypZtt3HHTxU4ub4FAwvRY8DydWacvHoF2y3xnRxm4vYD2tix46yHQmHz74YESgYV91RVnRgCxLsrhWKd4Wagmt",
  "key22": "3X8XkwWmQyUytMBMk1vNQDMA4Jd6EZN8FAGzyf5a7kZhkDvsW7itr7BN1xY2Yq8C66wV5dHh9vg3royBQNxFC39m",
  "key23": "55tfjzWJSp4ZUx4Su5CG8AD6coeKZ3zeDQup2WyRthh76p1CTHnHBevaEarhMVUScAr6SQ32x3vmCaEuPyouvGKn",
  "key24": "5ahjJCU1rKXJbqjo3fUGUSv36vwKAJEnKhjsvgEHq9JzqhRBN9WQRfFVehRURJTY9BAFM1Gj8dGm9Na7FiVnFsy1",
  "key25": "3thqYDxE7Ea8Ay4CoWjxqw8Enaamprzhcdn9QJ4Y717akmaBHhXrko6Y5TNM82ratq2pSNZhusUCQVwdxFPHJVjL",
  "key26": "MK688LNUXo5GFMUFMU2k1p9gYEFKw3pjZ9BFMLd9LF5LtgiEkNVDhewgMGYERYM8EevQC6LHQvdHwc78BVQSCff",
  "key27": "5x6pP3wKehBLWsPqucE22rqrGatpPdAm4MvPu2RqLr4AktCUhePKqGPJdjKrBR7SBGgjCSAtPtjYuzWwoHQwbw3n",
  "key28": "5S8oCM4NBpgbZnNk7MkxVjFbeNiHN2iAEvT6yNGtrMPKHZqfuSP6txAkTa7GkMPgrNSHrMWJbaR1bh84hmanBzCu",
  "key29": "26XWepspXYYznab3GBCpKiXxcv5UVJZcfxkMmMnWKYJ5tZq9g9JGQrwY1rHRnKpHDT7D1JB2wHnrd6J4v5WMd5f7",
  "key30": "4UpswGVtq2Vqgp9y931RrRCBRHhMfFWHUhB5SfY7vA2EuCGzNvwt1Mq8jpD1zAqRv1smFfRSyE73xZmzJGMHqUmu",
  "key31": "3rHiJ9sbDt1HW4RtsJW1cMPX8zWZjaavMLse7nqK9HLWWTHhqgFUKFrwYPphGXdNfMvtJDDrUm3wehEBqxy1Gnpx",
  "key32": "3vWuEjhbDy1FEjgDHtupR3xQD5mv9BKmW4sce7L9jo6gCRAz886Au36J3ffSR714YSMUf6CNCicgU2onEq4zPNzS",
  "key33": "orkXqTRk8P2vL5Rpwy6kYF6PwQ1fqKyZ6d377RRr3oMnEMpSh5gndoMGMkswqs5BVYDcT7HGMxiqJSdzakLUKuc",
  "key34": "41xuBLmWGrfuLQJHNJb4uoNHAS8jks4urQvKagTC1xnRLDgp6hYZcvxgYPPszBHNfyo82ugtsjkca8wazjz88Lyh",
  "key35": "4BMMvaYGqxRpzT9tdhFXFfEcL1QrihCxa2pSsWMLgFCPTPT46izMjt1AMRgqyHPGQsRecPwePhzVkVxUxssqnrxC",
  "key36": "pYe7TywxK3yEH4rxdmBsnp8MzTakHtDctxKpo9NjDKkxLUkfSq2DD1Jos6rXRcSg9xZeN9gkpovcp7py5Xq61fu",
  "key37": "34RD8tAFNqFN4N8k2TBfGzzP8PBYm44wq2SfGUakvPKqSTrupqidYswnE3pf8Re5smsNrrDNawfQsj4sDyPTGUDJ",
  "key38": "9SJgyiMEPw8BWpFsTZfQkFP3sNCNYiyfCZuJotQaJ4V2M5dD3LCd4M3EiqFegrWGP5htfUb8cEJKJ6w8PeZY8nz",
  "key39": "5L4CYS4by3dvgvxViN2t3exMNDebsfQ4vEJGravgwoYMZpYqeQUPbMXG2TnL8NzA8kVS4VfDhosJgZNuaJkb1ZXK",
  "key40": "2raEAYyHy6AoXnqoyrSsUiX8dGbXaAoJ6EQTybEbfsqU6gB6wmgT1XweXBKFtDYM8h7hpr8egssiLzizpzyzsSBJ",
  "key41": "4ZLthzbbcjAXHchJWG5ETW4mDYZat42mbPQ7CFjBmRX4pC7mFohffMxFTTVGrRy3YXxVyYDP3bsrojwFesb26tHu",
  "key42": "2hx5iibGVWLz7ngSHNLFkZGJNk4XAAASmBKk6uZvZJbsfbgFGedwM8psn7uq6YWdvN3eJrAJkf7QjAxxjKuftADi",
  "key43": "gWSJjfeCdnQudcswbSbhSH5Gpq99Ygg5bYsYWRHpJ5ZyDHQe6QnDYLyq52DUDUg2H7n4JgYC9w52pH4J2CjLH7M",
  "key44": "3LMnGXW7ST7odCwJ13FY8hEXpyU9sTh6NCcVVYe7S7UwXxxqUzEoPLs1uNMWL1k3HUypBPghC2Bgo1mCVobjoHMg",
  "key45": "49KZNbS1Sn1KF9v83aKBesj32TLFANpKXch9v47uRpgbfe4U7iWLLEnGtF2CZJyziJzE6dctueZjbrzg9RDijBHH",
  "key46": "3oCtrsyzj6bxqSsqZ5FLdhjwWV2WvWga1qbdeYGMC84ta3PCA3MAateMUbkNeSe8BWYZJ4BVddQFPFNAMRsyNNnL",
  "key47": "4UwcdTsz7fpRwEV4wjNiNTNE8xg6WMLYRgiK8jqKXeFxE69hQkQJkS8xDgPPumHmjL4zSY5iJMRMAwqbofTGX1dY",
  "key48": "2Zkgw7NkizA3c3tAHon2zrLx3q13GJJDaCBwmnZDAuybSNLGGM3Vg7fRAEKDQ2cwjziHmntB3NcD8soR6Age3HYT"
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
