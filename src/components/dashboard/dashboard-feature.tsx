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
    "3U5dF7gHpda4cyrRUKCCtKz613YssEcuaxBzXarEuaQkdnqMDtMzCd9KLh6Peukx1wrsfit3dAQiQKvcPAJbyAH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FbxSGJPZVLAaRWiPG2tKUo7PcG4sjL5Zcu9tvDVTY74XuxEx6fMcrLQhKVPR8exzhWXYPmG1Awnm9Hffc1cSd2g",
  "key1": "4ztDHN6twSjBp4MF8aRqEZ2LwyP9fSHAv1nSsxqgmunZAs99vzDQ4MMMDTcf6G2wrHyVGrCG7yR2sLtoVKn5x1i7",
  "key2": "KqEHZzv6bf3m1BGCRXMKatgos34WV2xwBbrKXBGg9Fq63KtGHjrrcFksBWsCKKw9AmwMWWS89sKpdo5ciGTGzFV",
  "key3": "2rCvzz7LXU7C7qF8KPCjjLgG6S371u2iCVYrMccABEyeXM9WKzaRE13k1xzsif82YTdLuZZWmJxrXLEck6WiV46x",
  "key4": "4j7CRotdzZityxEpGb1rDxUzjjTjKX5Vroig7bYbUkA4b9CqySvxErgMnyv9EBbt39PkhzaqTJKjJ3CoKV2RoJEM",
  "key5": "3tuktBzACZyatqLnJoRwWMMB6quuqnYFjM3FZFhNnMGAd31qW98udA51i89sTt91tWYSuEbkXQVCwbytqZKmsjmG",
  "key6": "3Tt64SjQKmwM3H5yBKCNZ11HMr3x82uw2fxnGTMk5XikCGh3Q5jAUZ53Wea1CHGu5dREjmFyQ6KBmoUCDkkh9Dbb",
  "key7": "bAvhZVVjKjfY3wsfywPAUbyp53teDBQ3ZrfXG4FhbwxoRLKxaLDnyrwjDZAumyoJKm7N8uTKb1ErFxqM4pw6opJ",
  "key8": "25TAkuMpGvnhTjJPFd5GnWXq22kJEQnpECd6sxXJPTXFGKysm3rvCdkA2ZJx5GMmkunma5xRgkoBGkZQQY7zGVMQ",
  "key9": "iDY7qHrMw14fxpEGa526YoTL991Sfq7Yr4P7TmwWWWztW5CguUV8sY4dsRyAompEGjShJ4rLj71zqkGxgjWGh9n",
  "key10": "3wh2X1z6D38J1KobWot4ZrxKZxvUj4fvMkpZkDWovoV471U3aGviX6fcr8bbE5wxoQ8HXxEgSxXt9iAkW3iCvkTw",
  "key11": "5angPTWDKY8PfqayC4ccpysKZfyDciPbDWufbU1zkt9Ti6RgFCJF4tHu6PfpG5FajcQp4BTViTos2HqABo9WCkwR",
  "key12": "mjNbpTZc7tg1ZKZWmCw5VmrKDB92xHF7Mz2QaChJ9Nu76mt7JBirgkwBxsotjJ9W6BH8ACzY6CzSXEYq8DKHYLq",
  "key13": "4sBSeVkrMm3Dobw7ixnwH2ERhH7e3q2rA2EgCsxnBtE9BcjE6D64KL12mxvyH5VJ6eWohDMFv2gnzEd2SxBu8Vk9",
  "key14": "4Ui6A2fVQYJTsfP31bfdXFA6k6m8ZFT81AxHQzPdJqkKDW2phX8R8tjSHvXKLRLubFw5Wrup2XPZX6uRUhvq2egs",
  "key15": "3kWZKkuwuPtyf21FcWxH84sjpKtmRujdK6cdkoZK75kJddbyqVdAX9kU7XjiirJD1WYxBeJckSkiWLE8mgjcyRTC",
  "key16": "5gZYsDomBxexZShQ5rcmwufdjrCXTNhaRUYDgEBG6znF92Hozjq6tVwDDpgLehdg9XGpvDwXcNMNvrhYE21kdnKY",
  "key17": "66FoReszN4uzenAVqbkabURzrRzqQGg8vpzYYXbNhF9x5no3bZzBYzbZ5kKR3h8ZT9gc3vYe6zXcx2P2BLa9geLV",
  "key18": "2MUWyFMffL3ES5HxwccUiBe6eMRP1ipw9qqeM8YFCDLHscSeksEvjh6P64ga1SzJ7dkpMeJVkZCmnu3SYLKiRpy1",
  "key19": "4kk3wp5kDtCeYHDzkGmkZkdGZNousKvGQwuhuwbgbsWLkQ6DLy1SD3MuMPpRja18K7LA8AbYWzLqgpAKJjZ8M3NV",
  "key20": "4ehyKuQNtatw8kn5pMgWmgyRyrqTY7MtkfRU1qhDEzktgaA2dx1Fboip27Y71QeFpVv5FrQ2YEyWgWTHXwJsiFPo",
  "key21": "4yi7sCoDWnThQx2AWFbKirMLt2U6yQy6LdPSU565gNgVs3dKPVWvBxXKSPcSjxMhYfs6S4A652Ee31kH5fmDHtce",
  "key22": "4GqbwrEnXAY1Z52zvbUagfn283T9MuJ8xto3Nz52o6j6GRbacnFECsme2tmudWrjpieQbMHrPRinJQGFVmpqhErX",
  "key23": "3gBDjKGszmDAmTqa9ZLDoMhm4gjMsgDzkoMDWueznmrrmExT2Zww9C77CySscGna4jEQY1gBLDM4hdU4pnZxD4tn",
  "key24": "TGMAHbEpan1kEzH34hsoYz531K6cj642WKhA5EciCbJEZ3CMifq8waxf2cUJZZkEtodujB1sfgbn6Kk4UdeQwBL",
  "key25": "2X2saLAPyBLMrEFKZAxj9kQgJoBbyGzwsiCtcDJfAVouP7SBJTret1N7ka9kTWdi5mQfQHCEZKRQbSLV4hfEA1jH",
  "key26": "3SZHcMzAs1AxUKk4Cy3i5GsMfgqNdzMH9uSpa76pxPkjPb5LbiW9q7r2L1Xb4BZT97ByVX2tvPSzukt8bmv5Lnrf",
  "key27": "38qEsFHdtMgLm4Zp4aNPpi5f2CJYv3LHK7HGPiAvgFMeg4vGDuj9ihMmLQwSoKTsv2PRGxRtiMAzX1pT3bvzfLRN",
  "key28": "3bWMkKWqP58Jz7UyWhrwGQAGcZmwGWKjgqxzkaeMtmp64aTh5LveyRDVYX8Ws2c7mErtFE5BRJbqdDCmiVzbGY8s",
  "key29": "23hUHhNabEcmmyxwi5EDznJ6ojdtvb8aoCv3GqXGrCLaoM1FdXEDA5AWkNmfp23DPD4vkPrgzhicxWcZk4p7jXus",
  "key30": "4E5jJiDRk6fy8kiSzSVdhuq2zkiEsoFFoxCSxaCwoT1abeaVFMPFgEVWQ8Z1jzhBtXeF8APwWHW87rrfNtdtAtNk",
  "key31": "YaNGYeoW2Qqg9UQPGMS4jeaiQSsSdmuiiSqtC3xDmiu61J1MHQcEoLZJhW7UTCzcZhZGmWcjiqSjTMS4qDF3vy4",
  "key32": "3q4RWixiwkpgNmKFTvrqvVcTNZL5knWHVajXTcXVaQSmiqJZcXonYkYVkEYq6aJCfNyCLJN2HY9zMz453mbWa4nP",
  "key33": "QiEioYUwEGLXRzmjt9ipNfypWWCboAkdEtt8ErWigMcPfTBi1K5gyT1axBKgMPCFn4HDfCVoQ61fTN7qAX2uXCn",
  "key34": "2maYkY764QTMuJJdm8VtsMPR5NM3ASY4hCV8in5hgXHUqaVb47MTVkegazLFL2WTGicBsNTuNwiao4xc4Xayvktj",
  "key35": "LJgpmKfFp9pCeSQaF9kxKwJkn2jZscqvXmdDz521dELcFkQzc1ePGraSy5pfA8ofZ88q2YoNHgdUUH7MMcKqNbs",
  "key36": "5pAEikT3pTd5RPnLCFPSwoD2suAx35suExFQzf5oq5rGvRWLg81kWeeTaoVaXqy7mH1aRsLcaWWykafdjaKqpnuK",
  "key37": "4aTJdL1whare3vTbcL1hW9cykeui79vQQE547diLnfkNnJxSArEqTw94KQWMh3kcu953fc3n3cNmUjuFJ5sL14m",
  "key38": "341VkNt4iaTvB5RTPwG4VpW9c2rsBVthyYfHHwFfwFkbioQWW5BBj9Vt4CXhNZyx26SxBfNDdzKQJxRfHWfNmJ4U",
  "key39": "2yP3JWhMBHjU3TVYVp2rokU8NjWEx8WM7tMurgU14BCJkjifXKTEsG38ytea2njBuDoK3q3v6xyMjE8VFr4Fn7xc",
  "key40": "44tRkcE7tLV3h3ax7SMmfUVvYABiHfHBbak4xyPzJbRtdwbYXhynPrqGpSH9c8b2T4bFcbtk9BJEjcrLKxnywtzX",
  "key41": "W1Ge4joF63WBV36vuPwTD3tZxksGzCugWaN7qZSUAWPxS3vXqHux8XYfap5N7uiiR7DTuGMaQ8x2kDt6iAgPcK6",
  "key42": "4Ji1n8uirzpfJKSjbmE5oWQNvfUPYDqu4Dn668dKgp8SDTgGwCxdN4t9y4ZArtVkTGHqsf66DcL6W7xwpxtNVWpX",
  "key43": "2WntPqnFTtGzDRTvyNVPe8P9chD3h2LNTLi1NQba1yCjfVvYNmZoggSN5YaLLXDzRgnguGzTPSKxVtDuGRTbrgAd",
  "key44": "3UGFRvXV3H9goYNKU93Vi9CGBHjGmiSfE2CS1tV6eGy94dKBZxFuXqShf4zRfSvw3rYWyoCs7AYDtikEHFFgnJAB",
  "key45": "ye6pkAgMjbrNAejkXF1q9oh8V82vqefvW9Zjct4GnHCPdeHjbhwSw6SgCR8jQPSXuMq1fXMzTzxWrBBdmYZUand",
  "key46": "4yeR3EhQciA1Q1Ga3a3PsSNyvBqzDrM9XxxVURvVLSWgqkhrydaASJyvoejGEybuXyXCBotbrMWxGXwDv57iKPum",
  "key47": "5Xob351fv7eRqPRNdH2ye4A28rS9qfs9PusWEsXU7yZR6FdpLhtWKr6zhWWorazYvP6pCrUSnAmnxCC9kTZCzDNs",
  "key48": "4D278nqSMUJNJjrdKDyFMu6fZGTBsf5GtBqYbBkfP6L3xYfTHgmPHcvgbAzeKZEh8ND6RqbZw1Vf1YYA9TA6GpYf"
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
