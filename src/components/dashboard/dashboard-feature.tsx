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
    "66h8KFzDnRSLogghx9aUx2airmtA2THcdHpgNNZYCPvSCongEYTwUCQY9HK3srARCkz8oZ6wGpTYpc71duJ28DB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VvSAmgeLkcSsUKso67ATuB4aJLFLYWjpoYNv9X2rWU6jdN63YmJcgK4KDfWiV1DkGVPNuK6gbB4PVtaDYyLSDwy",
  "key1": "bAqBRQbmDh3orF3Nxfb9AxXxMX6Sxo1KJyA8Pg2XLpokoXMekQfz3HjEnJ4wuoPUQ1zwvoZEZ8s7P25mD4ANBhk",
  "key2": "5dmC8wctgZwab3rz6EYg3cDM32KN6n5H22BxuMprMiC3BzxmzueTJ5uzoXLrSQ9EHvXV6y4y3YxeXPJy5cez5nmv",
  "key3": "4dqoPqjAoemYE4HnFegrJs985wBCkRsntN1BC7RdZkqrg37detvSMD7158UzYJ3or9zFyTekTMvehCAVHVM82ApE",
  "key4": "5bcyKjUiVrcM8RNpbJ3FbeqWMHy9FBBq3QmedRhjJ8JLhRfTUbJzvhaC2boCQ37PESYNQCNuojf3MNvC8zMpHcHW",
  "key5": "41ynBs39owveZAf9jMjdDCA5BYTcwgvjwb7N8e1qZsnts7cb5uNCaTBgxng3vJV45buH2Adr5iciHrgGJnuw76JA",
  "key6": "65LfFccp9LvMg4CZDkbbJzEGCxSRZzUvbBq5kaB3GyJJa6u8A28fyyYTsGvs3cs2R1Z26TLmaaHifL3VTF24XLy2",
  "key7": "4BpzjVQK9G6gRoqJmnk9YVJXDpCfwdeTndThHjydDgdtFot2hKU6XRMhE7sC7PKXsEUxQf8goxUJrEhc39WdYN84",
  "key8": "3nRWigCLqkVPXxyRkLdTWUfHqSFdNJVpUEcuu8jgAYTD7xvAxxddxKwkbvwiVgDUKS26BfNUwoshKqJcU6D6q68g",
  "key9": "2D9EyCQpmieZ6osJVmUJ3un15n5PcgvumwQMLbCTdxNTgmXuBGpekRP9iPkh7CpibUiZ2syggv2zSt9yR18heSLq",
  "key10": "41MJmGd98Xh7iwX5wr7jxmCHGUnwXk6zyauxMiSqjPYatzEkBD4dCAzpdh17dZu6aahr7Bc8FVUVGMtADAzftvT1",
  "key11": "5hLu4Hd692YWg4R56LLoFhfuX83uinvYxb3VuCXX3HT4m7oU8J76hqVvxMkNX9yxD3UegudXbbWZVFSq1r6HkRZK",
  "key12": "4KNadQqkJ1B5TSFgAkbvur7yVkxUpYrWXrf7TFLakWWhHgygTs8ApFE5iWqgrkHrSWeweayo8qS59Zws9P5tcQKj",
  "key13": "3bn1ASvjdihZ7H34bXRN3qhNs3n8obp92BgjCb346L1i8j1P9FwBepaRWAJxaJ7AC3BSo2UXdSMXovHfZt3ZPcLS",
  "key14": "3nnrho2WVaqoqwp6mxh6rYJGn9JtcUAqySQmxGjoJvt3M3zocNVWiLxzf1qDibdFMHGXVND94xkSYxEvtUEqF4J5",
  "key15": "4FgxzqeZqoNB8Jb7yG5wsiG6BSi7finJ8fvcNLwYZsgjRmu7HbwSYFmXWkh3Xg3SnoXLvyXSUhFksRtm2i4xWGCR",
  "key16": "67aH2natcLobEwtng4VaW5VYNByLH1RtVnadmdMQiVUdTw2RgrpV18DNBH7igNnZ7FLiTyYQAV51Qya4EqpVKtts",
  "key17": "3taXanpXqbBtTTnm6srxmG6atyow5JM7Lb9JE9AuzsKLejY67a2H8MPm9MU323nLuw2BSe2BmVdbavznLNWF7FbT",
  "key18": "5VdXzSdL7ZiL1dUvqbubQAAFtzgyRSawsBkxnkbBz9martBPNPM4e7M2rih441A6FHL8qwiie95BfqdJQ5BUom6w",
  "key19": "2TBiyZYf9YYtAobNXZmTUmg2N7ewGc8Fty4LEj8FyCynGFD2ToMCmKo1cp1SDEBdKw7bJacWTvabBb5erQgxs6uG",
  "key20": "58WpiCf7iSttjQR3nMnpSRickuYPBsWcokcHoMyuR3Tx8oGwHSvfwez46Akpzj77kUFGByYF9Png4gUb7UT3Uikd",
  "key21": "43v8SrEEXyWyo9sYdECh581P7FwLBvZ6hHASWFLGiMcCp7vCCetoco1gwisuTK1cNXCA2MHp5jVqedwmbzzRcLXJ",
  "key22": "ZMh5bPZpvH8tUJYHkv2sRX59MCrQdTRvCawaZRAYZfjSdFhF2Mqa46g7R4LZc1PzY8pMqG9rE3YQGMXMZKPN7ky",
  "key23": "2bN21td7Mufygwrc2NZqieb37xnC6bz8RsXpDXQ62mDfpZ1WivN5QELEZGRe23rBXmQaV8mShXwos7SW6GT3zVqW",
  "key24": "5mUiZaFpM2QierJjWQTrHPbzVZ2xEGKYGsyrey6TQT7Kh5XSuNLb6j7VEe7bzNkQmAkKfTj4uUiVxkAWhKy5r3an",
  "key25": "5Qy67upDPqqyRquLUL3THtmZGqjMiXYpUHRjyzGQh4JkDBcXp4mvSL5MYoNWo3uEpy9wHkyPqu13gCrtdkRqQXwS",
  "key26": "5wBTh4P76ipp5epPYZiCsqXgcPqe2CVFuBEsFKWHmGwAV2w7EPFkDj3XHdsU6Zz9uywvSWznBnxtGbbxPcYWP7r8",
  "key27": "2oNNmHxT3qFMV1rXepujvUo14EdhrNVETwUv7t3VybukvarGxwdcJEZsXoXxo3kkHZ6JgKas4FXGpEgxHH4PwuGW",
  "key28": "5QCNnAV2Vb1eFje6p7bAhxatMvcHYaJzkT7oiNPWhUW1JT1keTGWiDch5PwHCwf23KzcTL6Y4h1sJsHnvqejkKgG",
  "key29": "4LCPV6D6i3K9fLacAbN6UW9fvDfxCSHBsvpVy4mMCwCLxzMm9Afg8jdCbL76ddeCsuUXDwptocrpYRyunuc5DR6k",
  "key30": "2VmH1Azo2Y188ELBpP3sdf2L8SscmbLSuh8FcT49f6N3mdkLtwRCr2CmR9zFGuXWXecsJRANYtPxQdBScnjAiGGS",
  "key31": "qwBK337KavSkxQ3BgECLATg8RnYCyJ3JUsDFnh3yN13wLVAsDAsRgBUVxy5bL17a3hZ3QG3TdGVXJ9KP9AszCPY",
  "key32": "5wsgrxDLBbZ5Dk8h2LSUwygjJqYYraM2rVHZAM4x5kXYaMwKo9WJJNhTHjowuLJ6Yf1sFgHj2pLboTFxBKvdtXK1"
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
