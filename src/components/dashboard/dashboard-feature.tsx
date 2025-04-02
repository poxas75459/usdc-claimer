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
    "124dS7VpXE2hgtWgdN9ewhbEHvnDxoFErFt6pu45Pm5ujYr9oiesun1qpkURzigtYEGwE2uBFFCpUoq4EddaU4s5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jfQvFAZnYciKNjs894NamHmSJhGroanVWyw2ZJTH1qNFHZXHPAQbvq6dHHyPvH3WnDXgq94x3gq8LGgzaQLuVYj",
  "key1": "3K2TdSH55j2JqGgESgZYeMGmZRo91DZ6LExucpKc1WaNoDQSMrHJkWCpGif446CRQAXmLDz1FVjKKnDRatH6x5Gx",
  "key2": "3vXWYUDPQhJ7Vxv6F9ypG3ShNnW9gTVBLyA3C213ZiyjB4prptGyyrt3GkUtajzq9HVLBhoR7htUeSLzqQtGb9c1",
  "key3": "bR4yP61La2aDrAb8AtwJHz5VJoaLySdM5rW9m7Q197dvpHAGCYVssiEB3MX7ghwT8xy4B9NBaHWf5YngsiQrM9e",
  "key4": "2zpfqCNuBNEJGckALdcVmaXeZhSbcSkqJTTr6qsc5zHpF8eb6cTrnTUk1z9gSnopT8vAX9EyyH7mYV3ZeQnqY6fa",
  "key5": "VB4CK8Yis1FcLgEXWLZjH3mkZYdkecGxCNGyeWyCnJH74QFS4X7RY5WWTHfxranAEusDpmtCjyTRgfQf48u3Rmv",
  "key6": "3xTu69CKKYccnvVM5uZKwv5D1J1BABJsJEygCnfMLYDu4ACqYWeZTeBxmvecMwdig6Q8D2135E6TzCz3YiCnmovi",
  "key7": "D33okVj4rx3ynsPSP7A95qfiZoK4zQCz3JmjrBk7eQacbY5rCTQHjusCmauwibPfX5qaySFvjEfwwhXDVs9v51T",
  "key8": "4BCQTNwLZ2Lyfu1PMUrAzwEtrTY6kBaNmW9c5BLjtwEfFdVRoiZBL2QeubZ7JwRi1seHoaD6uD161FkFG5E2RTt4",
  "key9": "5fYx847YUvaF7QyKoWeBNmbmWNSutPVYtMYXsH1XJRM4X49zEXfPe3qqFFDPDJJUNLHuysbsqcKmrW33FfJpQVeb",
  "key10": "4EZ7KsZcSx91s7bMoVmFb8Mpabbqjfdtx7H8BH9i4pZYuxJ4M4pwgx12bK21VJeL4TvHd9LUHPLVNcL2YUpsjp6Y",
  "key11": "jcNbbPiwqg8W7jZ3K4Dz356mxYnm6HCJxyL8GZmmCEhEGibJpYakqUebWNdrW8gQjH3yDpay548LyMCj5apF5RE",
  "key12": "47PKBuspVKW4Di5Fan4iFAZ4RXngGX4mDZdapWnoetJjK9MG2riX24qjRDZ922wSCynHxR4jJvw1t1RgNyCL6LH",
  "key13": "4Duh3nAbA88EhmuV1yzzYPPnMmYhRUsiuhR95uVSRVRgLb5SrbnV1hiU3R6o1CcuXBUCiFRfeyEHBuvypqM9w6iD",
  "key14": "5jLUU3hYMCRiADjUsRah7P5iMBpJRzkBo1VVMK4Usk7zy4Q4tumQ5zzjJYjzzTmfVeY3tKhQuphNzVTAQx819g34",
  "key15": "5NZx3vY32Yx18wf62WfmLN5EK31oW88DMFBanvkaz37cJ2YxrSgw8ctW1gAbztosqq5DFEo5guEzLAyXuEXXaPo2",
  "key16": "2RyCeKzL4mZZyF8qPYPBQnXYo1TEPF92UxinsJm3dn8kPUhsPKLaQ4amepJvg6GrW8gseqLr8La4EtH2eeu8vprJ",
  "key17": "3T4u3cWVGyfVvcAJJpNfTb1kph6WqN847osedae9bXR57m7hYr9UjMpq7MK6PAq7Hy7tCBsZMh884VohsGy7avAc",
  "key18": "4caWeqRQi3R5KEnpRSwQtqc7QfvBjqrN7bj53vgx3sgvU5KyeJygrWDM42FUxNrEkGBR9HJfpjqWvLdvsujfH7PA",
  "key19": "5TSpzrdxioRkhQyB4rY1SdEhMNjSjrs647p1HDJDUpVTEWX4FHWXmoRNdhCz7cjb9Ks1WL1pw8w7kRHgn5jUqgBA",
  "key20": "2qAVTcW5KRkGy9FTrK9FpdMM1bECLrqMhjXoEfczMu1i9wQg4KEbksJuYERFww4hAFKhqZsZuM9mZxnvdNsfBL8Q",
  "key21": "5o6xT8DoKn4ubV1J47BZ1RFtqC7XgED1P59oq9ds6eACAHcPu9cak1exfBoKxipXWAnNJUs9rDvq8MPiNQN6HMar",
  "key22": "4wqdcAiX69GqeJCHNJA5KCoVEutPtNeJ7XTkmYbqJmmHymt6m5wntNNSFFF3ShyJRSUXBE8DWF5MgKqjpcy8b2qw",
  "key23": "2cVCzHYtNmwf7GGFGmSu2qN6igGLaWYV68YLBaGRMpBCnkrPaEAh3YjMT64hE9rQgaVVuRW5nXcvKX53Cv8Eoorf",
  "key24": "fQYj3M2TQWLdX4y2R7RyfwGRee4BSpdAazmvjeYqR3Ta3JMcfFcTWSbmyMiUU3B13czKiEJzGnFbFtJCENSFUr9",
  "key25": "3fAb6nsd7uotiwjPf8pwYMSsJWUScACTnGJYdPieXu5hxFpfZpqcx98zj84s4ggLiBkqUS3qafe6xXLRXzHMUuZC",
  "key26": "4cgmQxKtiva6tMf8M6vtFyZqQQYv95tMG7FgxwV2FAhuWHthKMCXPvW6hPQK5qspSEPbfWUtWT4qvo2RBAX2wpXz",
  "key27": "vhQcR6ABApqJoGycczV15QuFgAFG6BCABv7NSt6eebQpUfJ7yV9cQtUny8yvAWw8qtFQzTbrin4AwyzSn8sck68",
  "key28": "2pP7dUJzMzKh7vUuJKkUEoBG2PV2j5xWuYWUqRg8Z45weFwMkU19bzcUzBL9L9WJNkLYSQTNb9x8re95MMhdZfif",
  "key29": "3s3WVoVdNXZuz1Fa5KKmaqJ3i8ZLGqBexCiBVPqxaEGwU3whtkfZ36SiUBmu1tmXLMiR95pGrkWjEaU9BQv1nzvQ",
  "key30": "36BkmnXwpr7gBbzuHUieNyxt4dMgaxr2Dz8GtVwamRwapJ439Axv5BCbRq1xq1Ai6Enq4MYQ773Ri3LaxsNBnWZh",
  "key31": "3gob82m3H72k8SExWVTVivTDqfXKc1hVvfajDMPUwU2nUHX8zrdMnv4nr4JSrL7mQ1fKp3xnU1y71EZjzzqzWZCh",
  "key32": "3M2zeguDb2KcbesvqnzmqzFbvbgry1z1j3pwq9iWj7h1cTTar5u8qGjNJe8ZHinJFEwDFNGs8SmP2Y31dAcxtccW",
  "key33": "43Ag2k24s8t5amdS6JwwBkcraZDGSGvPXi4EFGfeQCvCX8J2zQ4FniXZGsyfX7HzG6yXfewTK4rD7VCuZ9hRsv2v",
  "key34": "y3s28rBttWcYVUa2VcH7rvrABWsnAVtU4yZBoDeKu1Vqu8r9fX9N5J8x9GFRcedRnBGjCAtV6BFeTbq17mJ4cWN",
  "key35": "4a6vUgGGfy8r5Tx5RAgAkUhFxRqbygi4xbfhaRgJp8yETqSNBjrFcc6r441ApYnXukbSjgZLTs7JZ6kNLQ8guju3"
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
