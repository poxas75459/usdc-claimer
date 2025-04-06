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
    "3SGNXxoQpExz7HFjNTaAgBbYR9oHptwT8UfDyTKXsCvkaGKMErksRPTiudbLVatQGmWQ9DfdvLw1Mrp3nnmhhJza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gkQxpSTD7ma3DeYbKRHkNPWnMuZQYESSZnLPrAgXUoH89SjWJ2e8TCbmbMdzfyYeLSx9soVGTeVoY5RCe4HGoZb",
  "key1": "5K8m6Crd3Q8aVGgqpQbKYddoQth1ngxcC4MPdrdL7otYEfQEphM42ShfGWwifbNiY8EzkkNQ5Tub7TNdaL1FTTe1",
  "key2": "4haNUrpziT6krp24TRDZVsu3oHFTDM1QnA945ufFzfrBK8DShuFE63F4Cba2A8YMpd9jeLnovp2jbQrhqwzedwm8",
  "key3": "2uC3oNk3pwzwgveNRFXwMrZEiTWvKBRWqprKV9zsrP1hpQrEBqXRmjn6vzoxDt2G9wj3zDAsQAyvn1ENtCTn1rny",
  "key4": "geWrz3956q6RLK9UWHcyDbkb8cKTufstdfhiTpCxDih6z3mYZoKFEvh3geifHZUrZkM3WBgVcT5zMAuSLnQAZaA",
  "key5": "3PxptLH38fQdZwACkmMS4QtHgAvJmUJPrGgFFQm96KREyCxbAba68c1BvrvpvZ3jGPTnA2V1vhE5uNMpiWCTXyqX",
  "key6": "2eRj9TivwiMEKw2vveaZ6tw9CfcsiMhoxKVDCVmp1p2FSRr4VfQioaJq9HnP7WK5sYdgPrDDfCm16kUgCBZvpqrR",
  "key7": "619YRrVZp7kwKeLUtSWxasU3xXctNeeHjsQJwRXRfotNTskvLpM82FACBMSEniiV4tge6ypYikJRcLe98nrCw6Z9",
  "key8": "3G2pu9QNoKgpw9FUJ1PEXoMqLWemmUZFX2X7cqZVanDwHyPnstG9AbwzACcLerx7oPqiMWVUVNY5WXmCdNnRq3m6",
  "key9": "3nKHLaz3a3BMWUhMJmiiVVkD19pDDyRpp7YFMpipizooJdrpNyu5NGGs6aNT5X88JRfe5jfVhTbNj6gVomc1sNJw",
  "key10": "Sz4NjTQGVqb3XcS1UuamSW5ny26zQ2MAbtTpZSBTvHS76Y77eMNK3sKeyPYkt3jp45xjh1HyaTArPnCY92D5b2w",
  "key11": "3QBgKk9YfbCxpNgJRxkynWqAzUxbT2gqztTYgyPUk6QXZvWmo5yPdeMtWA4xeYdjv1L1wZ2zqpfaeGgwfGUA9aNY",
  "key12": "3PbKzPbbmnwb9ioPCSEg752V4F9q8dmYmfz1me1q9Vjx3rMbxtw3x49sLDqwvLfCiWCyNJe6Cy2JkBEQ3WZatzFg",
  "key13": "3QJbfoBS42UaMEBtibt5qq27V7HNRiQz6PkEXd6if2SKAdnkjQvaQ49gTpgvnNpJrghodqJD8cauuQYHYirVb6Cj",
  "key14": "5kME56GsmyyjMSGWHL8qmjLKG6uqjNj8NDCypgCut8UwZU4vXGMwndgYJfLWWwm4h5PdXJLiNijRMwqEHteX91gB",
  "key15": "3mEueMioY8XY7M8YmVq6XhSzbHMUZBqrS3mM7B82JmSPhfwmRZR148jMfAud3hLTw4pQ3AMXAN9KmHhrCap1LySK",
  "key16": "5EUECy5ztGsHm3A7GQaewak6ZpbCABBbepPkhvXPRv85Tp9x6n2n5geHUBQ4t2begR1fCn4izGQrY6TRjsbUvLf7",
  "key17": "5tWN5pF8oUg82AMSCKB5XWjrw6EJWEGqkaZePXG4huCVkdHYjL49tbHBCgcWYng9K7J1Dk8CFwZ5ML2XPAVNfPwk",
  "key18": "5ppKkEwoMELf4QLF1DefmrXuNth9uECFUmuzMLFrY8PS2jyMNrRSEu6dfEac2zWSNweyK9m6nxPF85tPcJfD2onz",
  "key19": "41b3cCRg4t81PEyJ19gQf519ZYpG2d1RNjvKStVrSqkL2aFDx4uwTSfYcK9FKsjksyWcj5BbThg1pAwDHzLBwsXx",
  "key20": "57gzMwbKnPLLwSae1uhH9xLGpCYWVAY5GfpJc4fGhybkPWUKfqqfCbrrqEyjDYoVeKEnE1C9Tr8aYJMw8xfBrNJx",
  "key21": "4zThpXVf8UKtQLkusgtvHhttX8BestfTynice4NyvHUesmFr8Pc1xw4rP4sGG8QLCnvno8D2hcD4NZ4U7EYZgSFq",
  "key22": "34X9rcY8p1kXKWh8s6Nx1rG6cb6xMH2PWo47ydui4rxMXZ9iHkKvf5afvwnkUhX1kER9AwXQYtaYjVaUqpr8XYyV",
  "key23": "41UETNviLSfaU8yNgikXaCRp375pmpFV8ZF878j5JGjyCfQdcrextj3ZA7su3qCRCBT3SYZy18659XcTsNkRw3Vq",
  "key24": "2C3eAwsKVKgfG8YRX47evhcNs2fGE22Xhvh7Ld7vFwZ1deN4nu16iGtHKap1CzVKJwg3JewYJWuDXc81kdkrvEPd",
  "key25": "5vYiRhdZcbdghLPoZCX3h4FErE8WEWCXofnCLZhxKp1RqETQarVK6QL5wJQ4fsTgUwJKzqLrPR2CBEy1AB3jdk74",
  "key26": "JFuRi2niMV1utoYqPNQcMAhxLwjPB73iVUfMECqyKbg6tfuEGverj8sqjDbewYRTvovhNkgGMwGhqmnwMPi1US1",
  "key27": "n2qYYpEMwc3YBxeBMNhYivMAh3u6p3gKmiMZXf3Dg3k2gqNKZ9AdEDJAg7VNpn9bRk5aHhaVB4nQCBWGY6Pgcwo",
  "key28": "5T5my7gA2Wd1qNZFaumpTV9iVW1SxVH7tPk85pA53iryZrDC3fpjELmrqZPz8ieyPHq4KP4f8HWx7Ha1Hc2DVXLF",
  "key29": "5USoYaUJ3YwLyUkL3mQBYz1hnCuNdahgCz8k4EkDvCMF59xQuhxR5dhKXMf1QpdkASNRFP4shfqvV3ftaZAuqRzN",
  "key30": "2RXek2HBLnC18NqgMnjnV6qrahmSW74UGz9BiKhoarHswAgNhRmrBee4WWYW1mu5piAk6Pk9oMoWbijsn8ihov7J",
  "key31": "AFNdwGVVnb4YfZvsBhnrb6SSmq8v2f3bboTrEXeB4N4wu4H8USN41QW1gskSc9Fm9qkdP7rod6dJNfVDcJxshUD",
  "key32": "djj9Uo4rEepHw1pffBcU4f5KkNxzS8w3GYkJ2rp5zGbzQ7S7S9eWinDhyPEGj5fipfscp1cn2pcxK9i2LXzpYsB",
  "key33": "9CR9pAXq92sKQWXGXSw2M9wSVKjTiRcCCwBvVhafL7zwkQEmdUycZvF8Dkzz1s6GgJUyPtgaUtZW8Ubv5uM7D5k",
  "key34": "48xWkkaBcYuuFK22jL41YRHXJpP9kkAUdqgwSEZm2uMHxDHk44L7DERqviNjm6bDH5hHhJuyeRfooZQvsmefji2D",
  "key35": "4Hysy11HKdAFTUTwEbUQ86wwLzTrs2pTnV52sUJSdkM3U5qzc3Rn9XcpwSVavuwGY38czMRyNoaBxQvt7xkQAdKd",
  "key36": "3djEfQGvFPy9oXZUPYdywR23Y6UyoHPS2CfSXpWJ7o2D4vBT42eiJcGQHTtAUfAM3ax4HH5sXoKfqoEFfjzmHxuQ",
  "key37": "2V11tBo2WFwMcJ1diHhH1RZu1B2ByMFFMqCmcaGfaDLbtwj2p9iTa13EoLojb3puPc9LANnNJTX2qMKaS8yi1xjB",
  "key38": "dfod9Jrzai6w2dJeLnV6NKSnibXETTp2vPFLwjvdoudhmDF1CTrFHHYmAsB8GbRPMtMsYu4t1JbSnEtK5buXDDu",
  "key39": "439Pt6P7rgn8FipDUhpFLECWURwTUeHHXvTbPQGFfPYY7bT4ZUomUnnVP73SB6MzuPQo5TnVkpVvLEewUygWFMFQ",
  "key40": "2NaBA6HSvyj1gXaDL9KKZtKcZTgSUrhNpxqfDGfnpYfQAiXcotoBmnAnjB9LqA4LkgZbwVJCrrMSdhNbdB4o16R",
  "key41": "2wJMuBromi7f9pvy6yyM3AEQ9zthSnYTJg1VHEhvUPo31ZvSu9KgctYGx25Cb5vn6s9Wnj14WpD8GjCb7SfUwkYa",
  "key42": "2u7ijJFasyMpfD5aTHuNPGFL3J2g7dBH1JuAiy1xtj4V3FsGiHY3KdzziuehzEGGz66c73Yds6gKyL87QcH72CbE",
  "key43": "y9dGpWRtooGfWaPvCfbrECiumnNSS8mm4njn4rJxbHvtyueuHEcoPn1spYy8pJiJwfAAx13S89cTahfmwq9YaTW",
  "key44": "41NZerajaht7CVgAHQFbBSVw4kmig9PTLzM6g2JHyqJs7amVDjuaXXM9XYV9v9DAttLyAksF6gDLzQjqz2es7ioH",
  "key45": "3aPK9ciQN4rGgV5CcjibQSEDKPMmHag3rpsTR8mHCicJnDgPsHQePoNVToXdcN1YMmcaNGxVuDpoVS5aZ6uF7KTd",
  "key46": "3CBiaYaxqVyRknAdCKQ81kJLk1e1fudZxXD65NoZAiFvZN7BhxMi4g8Asdrx8YtBvmsaXjPAHr5NndadqB6Pi2Fh",
  "key47": "4Y4fdTFw9rfnJjRvzBqUDNx9YhCwDEVmC6NGonQQM6d7TWwCMbEAgChhm3aKDBhfWmvhLoZtw481oFRNZysKKiWT",
  "key48": "5LmpLLxo3FskuTrRsLc1XukBHM4CFYp41wUCxpJZUwgco9dcmYuq7wHceTkJf6H7REqXoMhsJQKFoPfPMC517K5G"
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
