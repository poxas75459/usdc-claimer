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
    "5qD6VNrTidYsKPchvvi2tfWauWiikdQnhCotCV39eLP4qpucagXUTcCWUnpfin72fAX5BmPyaX4oWV7p6XCc3JRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28TKhpihK3otoQXxDof1SMj2jZjSd2wNujR5pbvacumMyArn4YkNecSJTpN5FDYY8RbdhCU64YC9f8FgpHtpQLf4",
  "key1": "2GqW2SW7LCTiSBWrGXCaoNLVD7pzNuP5GUsyzcWyospTGn7ApzuidhgvYmqKXr2QHWnC5svPwCjNrrWEPEtHMrtm",
  "key2": "5jkr3zd13hbAGPxyJZBMPX1GW8T7AFTQuatSe6YyFaqaZuumrRrZwgjN77oaSAMhaqbbqdxiG3AwLVgQcKfPQWZT",
  "key3": "34yDC8o8nEoHHpK8SbJawU5AC8gHcJGN5tjxn6iJxtenLjN8Z4SKDpooGn2j3m5zDjFNKLaZTmc2EEEdz6FKDn5o",
  "key4": "3fSZDohtsKerMJo46EEBe7h6rTbRdVYEBsAqG4K8Fbg9tk2cfr42v3dAJcsQ3Pq774kCgqvhCuwTE56fBa9eY9oR",
  "key5": "tniBuE2XRauvVQn4fy677yi7Jh951cVZNqCPJdy4Grh4RFWC2m9pFuAcTFaZxZGTtMw7Afom4ABx9c1HNpJcn3s",
  "key6": "2gymGv9rXvFyxwCuZy3Tayvv626TC4H3JRrYcwXYoeDqWwycQas8Bi1mdLYkoYuVnbUp1K2dSwBE8yMkpwcsvfkU",
  "key7": "o7gTSzRp5BQ3TBZVmxvBq9Hs54JspKjhbt6BD3n8NcGM1coDvUMGiNHvpCSa3uMccX3DtGeg5ek3EJSMoKZoHFq",
  "key8": "3rwS2uNeC59fs6FDVt6NduydJbxp2fVeEUw4xRWpeZ4133fT3c2jEVTyRZVg3thNrp7Jg49dkmBaHnpNRhU6y4vR",
  "key9": "67r2QeQRDdc4Nd2Benda6PBkpjYbpH4eLCrExsHRWiU6ncdaWQEvdjCCbrPFUVuzb917KNY83kz2SQEs128F1kVA",
  "key10": "2rvMDYiXop7LRhiwztjxbTH33ZXcHwDi5cQgA98FXzMrp2SKFYq6MWZNFUF4RHpA46hQd7XpbWEfvrCPkFzLibiU",
  "key11": "78s4crGmLehLWhLLRMEHPn29j3LY4TLv318pTdomERYdfRsigUzXoAR2dnLnaJyEVbuU7uyi9oo7rdS6BGshBNH",
  "key12": "jJhRkPh17C4ZBgQva2cEQWFcTEv2Hx5hBYErsNZMnZw9hESWR9YuYbPPc1wcHfDBx245LHMVrntEKhKmZhqaBXP",
  "key13": "5Af6Spz7TMxJKMKrMKGA6DeUPHQ4oeNgVNbL4hkjubLZ7wzpFJNVYeed5QqHtjouKGaNokKyM1LDC1zQ2WXCAHFe",
  "key14": "djx3hHuzkDWkpb4vgoXUkL4adLs93VWqr7Xp7aK1oxSPHEc85snGegC6CJuNAgsxKDdSLdbEzhi9ck9zr6ARJFG",
  "key15": "2QQNCcSjomJU4XZpfmGCSbiJoWxHDcAfJVrtDL2nS8ou4S9WqRi6uWJrPrjz1ud4RJCqwSkGd8i3dx9wzg9ZHFNq",
  "key16": "2eLTbZb1v1CvLiF5P8ogzKZTby9Z8vgsPJHsyUpoaJGKg7bkBsRKCJZkF7yLD6NbAULSKtXaai53stMiMDd4RFJQ",
  "key17": "N2JmSDcWwEpKCrSoEbvgaA8aWkx8PGqefHui6imM8GpCZg5g3US7g3UAQ4rMGg9piBaWYG23mWonBGjuZdrWYqZ",
  "key18": "3K8nUg5YSegVdR8DPAJHtCmuuDB11sSr7rhqs3wJ5NwGhh5y3uMwRoCQdHDFvycPKz3XUBhorYMgCd793diDyJCt",
  "key19": "Bt6mbN7BZUtLSwGsV1EUnrvTrf2wyb6fkkViR75Hfw8k4t99NYsci5gyLghn3ky19BMNu3snEGDc2XqC8dcd9Up",
  "key20": "2mZ1ZfWvwASXGbL7xQLzGt2taVg6AwM828Q3C4iXwhjDrY1dWAexx16dkuSKphRRANQ6pcoC7KBp36ZFf1xbsfE8",
  "key21": "4u2cW1y7iA1caXsQwZftc344RSbAxFFneTRyK7ytzoAFE6QisB8kUn8j4ZCDH2aMzt88KyThtJDXix7XLjGmy7xF",
  "key22": "SvkX8z8V28XfX4JXaVJy7AFKRb7CjehmUe9kMNGRxL6ohESbRUvETVEGXS1MYXVKybinD4eW4ZyN9YCNbDNRJWP",
  "key23": "66QNAqUYwmuqKPch4kKSYknbu15iGtoAbBXBCzBhbkudtT1UNCZE44S9ADamS3js1383JUgGdjTZLk4pXPtytzvn",
  "key24": "E27S36YTXakZuhYoj6VrwLM6VAQzMKSmewKfbc6LVFeGVA749L3SBvv7HCNMCkZtTqiHmDB6G7LzRxbMszJVm5r",
  "key25": "2zrZx5ZM71bNczaH5tQDQmSiZ6MN3bVh7MY3Gf25fSaxJVQxfLifAmzLz8pz8KzHjN62RLUgWFG1SK87Fd6V9jGw",
  "key26": "2qfSYom5L2njn4sfJURVVkD9HeRJ4pLY4oZzbwP3V8nraiDuiQEuFDPFG5NgJGEigJnLZqZyYrEtVWy4EvuF5jms",
  "key27": "2QmiCqpLFjKjo3nNGBgqeLQkGx7BPPxHqZ3DKWWS5S9F2JY4bFG9wify68vDTuoHKHR7p9SzGxLPBheLpdM8oCeU",
  "key28": "3hcSBZkZZp4dQvW2g3kU3X5bo1brCx8MMnqJ8oe6M5szFGjzFydL5oY4owQo2dQuLKHLm1i5QWqpAu3XCjTK8eSF",
  "key29": "4q9LynTCcEZ25zNggoEeVPom6bamC2HNT7FqasLm4PtaWTbRhJggitgvPzBYKrXYaKVMrpw9C4xUJSwnmmgjZTXk",
  "key30": "3Ynx767vNgtH4N26fZp4Saa5Px8M522HCMtb3qwTfyfuo2dg3BCmEJTqDSm5RgFt85HLKnqUGsffY4aqMPVNUKsq",
  "key31": "67qQCMHRgHqMDRijUteSfesSyp3Jeq7JBcBmzSd8NJrj69gK7VnipkrRSrBYYdpVqBJ4fqPMcYesthjxBCZr2LfU",
  "key32": "nT6ycvApBnjzxEHaaSWuLUnwyszcjFBTuycfTy4s1H3K16rrAc5GYSRfYbt9DLx63kB4iktd4YZ44nVQktJJ41m",
  "key33": "5jycVjDFbvgfc2e7dmwUrD7rXaJ5wMs2kReJ2qACmfQppBYQYhWXCEpsRrU5hkNDMkEFQb7jzTozZxS16RLHXJ5C",
  "key34": "3dBAppejeLwRJDQU7ZTceevtWbC7WNQYP3cwcTByDHeHMSuzTqnyzD8ab1uDxuNQP8f9ef3rfMHTb2gf8dWwzHLo",
  "key35": "4Ze6NmnaWHs34sqCV13teFvGmAnxguJP8eUCXz18tZb4CQerrtFDtPTmoT8ooqrdNshkLuvPrFUj6rHXY2gdCohZ",
  "key36": "5owq2duvCJtr9U9nNh8XNWzjh9YYG5e6pMyuhswxuzXNL5EWazF9x9WJvWmhaSqWkkSFd69a7LcU5RXNTMDNqVw4",
  "key37": "4d5qTWrSiphxFteoFmpL3zVvn9cBXMTTfu11746kJgfUPc9Jdadzophaoh82QYjdh71qEURJct6szqixaoi75yz1",
  "key38": "7k6bH9EMRWxD1Riy949cxM92aiVZuC9MDzunZKJBSNbXz1ocmNH57N8WLwNGNpZAUpfaeKWE3Ga9LEb1U9hMfRi",
  "key39": "3XFxwxAwiYbB1HErQr3cKqwgzvzYGEY3HbtKesVTZVhJ3oqcoZ3pP5dzJGuVA37GoM8LSwy4yDWTi99H29rqPW1n",
  "key40": "3wDqcHYnvZUntia5BNbYHPZtiiF95xgkLn1RfKnJpvyToaQvegkWq1agisedsxu4rSHt9AknAHt5CRRvzNPSiWrC",
  "key41": "2d22UbDn5mZXfb51WTDuAwgEhJg4v3avBUVLHVRsnQYGBt4VLvou6hUjbMzRPzrhZAgXboi7S81LZW3CpKysjM3e",
  "key42": "aLwqcgX7GPXjDPBeinojCw5sVRx8LGhk53TZcRqj8tF2QLiWeNijqaDLUgovUyF8aDsGmVH8t945agteWBeT9YV",
  "key43": "qd7yYFVFMQYX8YqMto9tLpSCTWD2sMBx384zDY6BQ5VuAcvcFeKzdLH2xLpbapNDkxBYHH9vYjRWJkizC2qvPfu"
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
