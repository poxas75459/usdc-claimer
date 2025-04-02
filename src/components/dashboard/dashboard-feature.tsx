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
    "2RDJurcgQif4zeiP7gDopMPj9Gnrt34ng7Kwv6GsKGoACjj4QDmw7PtvcHh3TScyreqsZHiCd9ko7Wct9z6PHMYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7EPnB5qgvV6xwu3oGUWidnKWD7obsKhHVM9KNbeUncDra6SMdnuGgk8YzFTTVgzNjwhpk1pFZePBJGEDvHR5w9f",
  "key1": "3pqGT12gJqJV6o2BJdwqXCJ4A4B5MK52CJTtAFGWJBNn7yh5jjcdeKYHExVcSospncQr1ht8qzBsakv5MAqogqfa",
  "key2": "gmRNrrMHmYVDh7oKmGNAMat8dq4zwmn4oAMw2A362LioFE5AgL4zzgYGpkmxY5JTvFacHwWgzRNJVqQM3apzCDq",
  "key3": "4uLGhF3AkcMgwdqekRU7SxWw8FNMsEMfHuyfs1LEaapkpgRqn38EPx1nEuA1ADfe7jicRiNqLjBXuWD8WGgzC6W1",
  "key4": "617aVqCcii25a6pevNGcbGYCTRp1aogq7xugBx7kQNxDV6h1YncqnXd2VBRonq1cMoPJP1Qjm2xnf1nc5VUr9xD7",
  "key5": "RSG7XVPpbe1deAC9KAHbTLYrLix1sFHTYFog77jTs6UUNgdhmqCDx5Gs7F831yhKjUc6ezDRRvVWbZGHQBmNFUA",
  "key6": "2HtBsXXi3nTZbDNfSDbkkEErUbaVsWHvK2bJmYychna71a4v9gssiWkTVRqhAPt3sjxtbThWMHzVZ9LZKkW7SkwB",
  "key7": "2wuwUqQdzGm1JkTixjFpoEe3zDFd7BsnPwGR5NRCuFH9hCsPtSZExyVSkpYHjtAZj84Zp4gQXtiTLJi2oDvyt9JN",
  "key8": "2eFH6eZG2K2ayC6JBec9N4sJbMcE6nFutFHDtffunjJeHfLJEmNndMW94EKS5DLDnEtS8Wcu7VAHQ7XjnKkz76yd",
  "key9": "5Y41Sd8ULwbNm83VVMyW4v5oKavmzr82jWqT1yBxdnwo8kTXQ58FzZZ4LZgPkJUUR9tGarqvTm2GT7a4TsQydmWM",
  "key10": "3ruG1fYN16vQjEkasJJse6T2FTGT5A5GQZm1VQVckFeReY9hWNWsd8ozAgoeVhLiJiE27CpHxz2aHXHhxgibVTeN",
  "key11": "2f2MotzAZqxHL6WzPupMRJrhmqy7z17rFLh2va8EcvqdbDLTjxPiLY6v4ttK2PReqNTEoXyqXjTTHDp6QWh4bPXR",
  "key12": "4qSfhZaxu3fMMsdzosXTxcA7VmYRiCPrNE4rGpSkbn11ubBjwVqASvDYMWEoowbPdc64awKgoJ33QNW3421VN2ad",
  "key13": "UZpuXSnB1hMd86UqbR7jNPcBRwUVfmTtYzX8PnbiLU6FhU5Zu8iPCHABeGCZKViFij5x9zDQdtCrzEW9cBfmJkT",
  "key14": "242rTLxuzihSMrkK34baQaL2ZgzoNiXi4HwzHQwjPDAmbe1gZy4ycp2JiBQeXYDgBzeUY352pMLzXXX5gLVSqWd7",
  "key15": "5YoWTt1RGKJThbRA9uUTsv39ocqKG6CrYZcYyoxUDTK1gPNt6kRUgQQKSbRArXgvRz1NhMCbyy6wNYLxnJnKrtSv",
  "key16": "GKdzBWqFKEoSm9tZ1ErTksLmqMzjV3Jj8VSseQYHDs3QTeSKSsGSDMMHBQURjtematM99dPjyn89jHSZbpLrBwo",
  "key17": "3ab31K1sK9KmxidC5qPJbaEQpPQyZ7NdkCjyFAsjdkMzdrfCtxaK5boY3Lc2wYN82KvpxiFgjRK7UnkBJ8KGExVB",
  "key18": "2VpHBogFsVkfAGTnj6T7iEB7hWsuPUuLWqzMLukrTCTSsCQ7DoMapWoAsuhobCKwpS4V7z7J9ddw63LZsDphj8ox",
  "key19": "252nTa3JwXQMXKhvLu2F2aSAzWTpcA8xoZ9xfxYEY2apaTxdrz2RdCTUSCeCFMBsBz7kqprcyKFT6L1rvF37ZLA4",
  "key20": "5A1vfQG4nUu2Gkum7hCxPsAvaKNPmhMTZFoa9obmkd8Sbp7Lg452aV3GgW4WYGL4DztEv1KucUQsX1g9LHHMYvJc",
  "key21": "5RuJrFsnA4qBe8vHtZo7gdMntPBp8xAAXdkoNbQ1cGc4HNFrHTXFC2D4ACnT87ZnDZxQcTjHJ2uqcz4Rpfv4oxz4",
  "key22": "n9z5tqtyGF7JZfFD3NqbhRZyqimo1EHmHfLH2ikhmfe5cVRLVHLCE5TNTrFQg3nekYV86uCv4SEdJVY7EMZmXjx",
  "key23": "2eqgWVCbT6wAMALpsNSPJwPxQt7mKbomY92RYtLSJz7AXZ8UnSLGhdwvcfzQjALKc9nCygdKGKxLJ4MqRBefGDes",
  "key24": "3Eux2xpaX2hdHuJfMni2mSnxSn9gZo3QwWvVv3hp5dRpWVhxsbSWVMABg5jde2MiMEpm4zPgQEdw6oc7Q6Rvbhme",
  "key25": "59jmpbU8KSewBWQpjVwRH9MSFG96uP328yn5oWktJzViRwmfbqeZxPWXQtsQfE6JNMGDL7hnHFewx4kCyETh8ajv",
  "key26": "5FzRiCjGp9pU5HJ911gKArJRQjTQ7LYbLin1zgH164KQWufnLLSzib1WktcccKpGYVCR19QD2gdYxZ2mKiYi6BBQ",
  "key27": "7uD1MD2gyDVWhN4V22XMfh8hzDkY9Tnd2P7fEqCVcbNQeptUe7MEHdPnF35RJs38nnvShk6LtecjsdZVbef6YCy",
  "key28": "3jbkB6b5GfbvCxmgYPxfJFtg2uaLdTxjRx2Xv48r3sp7pwC7CJ2BzYtjoCa5shCr6QSWewK9BD1nakuHruxT5AvD",
  "key29": "4BU7gESwS5rJKN3Zr8x6S1dgbCzzrKhAzFsR2QsHQ7Lr47MW5zXeuxnXqj3zjAWDtCb3XLdnNCanvN7R9RY2nb4P",
  "key30": "3odwABABpjpgEn9yGbSofMwj1j3gwJq2ogw6psPfFTvy3nmVZ5qB5GWNS5iokZvaDciFrckb5dkyozxyXreZWENf",
  "key31": "weLrEspykXm1MHaTm2429YAcrRfxUpnqckdcY6ah8rh3EyXANykKRh8cqRi7yacT6UD2XjbSrhV6XhX7MCsUqQ6",
  "key32": "axygHXoPnUrT1xSYKzuvwPR6N72dob2Ur9Kord2XJV2JLXnUtG2EkDDywr8WdtdgLFcV3pSmvXqQgt3PK2PN2Sb",
  "key33": "2GbquiSHU53P29LC969S5MxxFnV2J1vYn7JMRyrBcHPYxkrS4GffM1G5k7KcxzXLCj55ke6gSLGAsyKhEKNUMrZv",
  "key34": "3XWdSayDvLEtapTNYG7ZQVJGqFWZ7dr62VSKWvt312V2PhvtGmiNxWiLUN8PA7dasyBU9bwKb7NBgUu2Q31YUuYp",
  "key35": "z944Vk4rvAc7Xq6LnQihppaNuXbeq26bdSNJGqKN2WDnUGAngYvS3s2xBjCNZvaXN3SkhE3XVytsF5Xktnkbtk4",
  "key36": "4WAoMDXr1nHuyA1psXBiZ4MpjMM3dxXqrwqNtHfvnnb92QSvNyb5MaUCKjFQknrrkDCywNQqSAdb3qARFyQdHJ9o",
  "key37": "5sCfFXrw9oAJz9pmCoG482Jh1hXczbkZEE1L5kDtL7qC1Y3TDG2j9W2rTWzEuzGeDyQ8LcGDmomrg5qdpH122KPR",
  "key38": "8LM6GJ6cioUnDknPtgK3N7GJzLuXvZxkVCv6ApB8geD2W55fgfXneM4x7CnrVfkPhRonYoncsWEdc9QgeVPoMZV",
  "key39": "2PbRM42jetMt1hoR4h1NWGER6i2BV7vkxkFUeUmPDgWLUxfFDpRTVw82CSACmCiH2q5TZwHUiggJBrHgkg2c5ikQ",
  "key40": "2sbmB2EJzDVpLGZUG1HVuURmYxwX5yDyHHGSFcHoWr67Aj1BwQtsh8WHanwkHRKTRCeTyR9vvP3UtgK3WruVwtiK"
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
