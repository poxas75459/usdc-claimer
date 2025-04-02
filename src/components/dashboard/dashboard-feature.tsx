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
    "YpqFo33Bjw3iQnzNjTEnQb5Q9MrViyGw4EY5yJm7p2Qat5EmMRyPTneyL9PvDL7fL7LuSu4mseVixXWdGjePvCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48LLFJZWWv1XYphbmCySq6eXijfHczu3T5HdCCN6CfaBqhpyb74W9EDv9FfE8BpJmQHwYAb3iNtyF2Eu2UsaPtWU",
  "key1": "5R4dPK51qswqo2tmHC1vHAFqunQW73cwZh88sczbgdRPesSWy7iEUdULtQKwqkLPZjkcpPgKQmrNVw2CZPUiShrx",
  "key2": "3QQ7W6P17d9eikoyn9ppxw3LqAJRf5enhKw3LQFkDXryqg8vpvc8hNdN6bV4TDrMW3mpx83VNFf8FeFPugEmXLEn",
  "key3": "3PBiJYdCEb3355q8WfH8UfPm22eMXsiAwRna7oXUsxZEdnCGB8nk58VtmFFgjvpK5TwVCvgMtSQXhs4v4xqeDJEU",
  "key4": "2KU4vF8AY6zjMXe2YG1darUU97D4G4s1fkf2gCSwJu4SL48kTbwNXQ5kDXpT6J8TUQuUP7kaccMqswZVYxcm3EiG",
  "key5": "5auaYHLB4VRSRp1znsypAxkk6gumzEDbETJhkevfXyxiQuPjakYxceZm7uQJxLDBsJeHiwFLQmBpVyjzvD6FRzjt",
  "key6": "226BMYhG3yJd6c2Cm3hk2qkSKcRH73cGYq7XuZyvXf52btNe5JwLfNGNF98KWLcALUSTMGQBtm8Uj5rrgzVbjae9",
  "key7": "3q6XDZiaC1ARWD37P6CF46Cuo5F6ENtWdc5oY4WTFADLNa8kwCu2puKBKQ93rgF4VE3FkuDgqEKi38b2pWenyCNB",
  "key8": "4EiQSXeUKx91jH4wc5yu1nC2W5vm32tC6iof4Prdv2tDE1oaYhLEYMdhJfVi8bubc16npuPVpuwbeqjPXe5Bwcts",
  "key9": "JnbDxHyH9uPGTpoHxL4fmwxMoaXU9X4yocbcZwcdMnhy8zYU2zvua8zizvgHrLwZimi5QVjFqwciUHsP7hzFJi8",
  "key10": "4ouFCNyYdRquAnH2WCQPwxYekQ3Aps72jVL5EC4psuVsngNKcdBEuYU5sVrK2wNLBhupYzvAr3J9jmbkRE3E9zAp",
  "key11": "LVE7Ri1EVZrTpjnh8za7vAtL3trg6rVk6o4Ve7MMuyyN1BBdjP9TYJam4Ho6hDLFBGgYXEVefkUardZvd5cB68R",
  "key12": "EnnAjMYYJ8jgiBL4b2qrnxbxdWmPBMw1msiKzsK6nLhUD6vFLXtw8V43S9u4PBJgjxcoXmKeM22YhUi4BwwiDbc",
  "key13": "3FgNhEKJLrqSJRj648b1tUqdWHkrk6RVpu3Kw69sDzLc4eonLWE88RuyVfTaxgzEMwtNoswrNxyP9bQmNGs7jeo2",
  "key14": "4mQ5evxQnDaHSD9i3JhxxheRhdLmYMfmtYsgSzCzy1Yy2r6VMF3WfV4EJigoxtSRZv9Bc9dPRzTAPPVvFjCaCURt",
  "key15": "3oiYcBaQJeujLDkpxUGDq7pXrZUVgFvjyuKojskBjHf4nVLPFApMPSjnXa6n6qMfUGDcUikvFr358FFzVk3US3rt",
  "key16": "3wHZaA14KeG1AD4Yu4e29dPjseVR3ABKxWg8xGc1a1r2L3As7yTriuibKKiSQygdieRdGBSekoer1WhGrYs2x1HF",
  "key17": "4m2d4nAYjVnNcxnEzKLXqvpoUmzhoxiZpfvHVDQ4KtZoyAuNoQgyz36fZSgRnSRwXWe9KBMSzABcwG2Kb8jPswzk",
  "key18": "3XWfM7dyLtamXBrRWK9KWk7ypEfRZ28HiUFCaqpeJen12S17YJL5gGxcYscg9cA6CjWuEJzGpxzuaTRQGsGqmCZ4",
  "key19": "3W6SudxdawnVDrTBq1cXZGQxeQQrUSjYEGi5M9j7aWxFaRjihi73Z4GBaLvX4R7ygYy4SX9Sf9Y7DzELRA4hUTpY",
  "key20": "44SNR7EceGaWY7WMcwNZ4mZcHQRJ8EL5sF2HUh4VPJAEJR4iFKpdDTJoDSJqFV4NE5eTzJHgNAZdgSqTFCz4auyT",
  "key21": "3irtrY3Ew24SXcspiVyk1j7VX6yimiU25LJpn2DpDBokbJryey1bupD15d6ECLWx9fkXzSYDRbzJY2rKuj1SvcFu",
  "key22": "ruPGg7Zi9EvwqWeZS8NVqoFr4f58TCc7BoJbowWmaTBLoobjohAsMG7t3D5rN38jcTgPnjPAypY4dmj1hpr7aPA",
  "key23": "5iqeG7LKTNZVrVk1T1kf32o169r8NrBufWcEc4t9DkKDgDZAp46ZqJzZJnbPU7YUDDcgLG4ZF4odML1GthcUqade",
  "key24": "5ZWbRro2fXGDmkQi2q6CzLzjGGsXohmTCStfu17SV31g7T9KQwFP2u6twCNoRZCrgxQY1U2rKzRrNK3zruXjuwea",
  "key25": "59GGBCC8Fkko3crniP4YgeANeFiwG5vdzzzFdhYVT1bwdrf81GQTuFepu3N4mdEeAQPNPJLwCSdk7LURGobL4B32",
  "key26": "2Pt2myCeWT8RfwobzVCjAjTXDFBR99W2R2sy2uM1XT9oWavBwP9ThnS9xwjyjhmNcsrXVBodU9f9du5uwRYgzrff",
  "key27": "3ZQRssmTJEay9QWsDq5A6JrMyzczpWg4u76dUpw6jU7ydV6HpRVRH9rg79qjtV9Xf6g5TbnYSmTbqd3UyXmoBszJ",
  "key28": "29pZCTrZaXrD7fFuUpNwuQdzWGq2mwgey22npPkvjX8put65bzN7TrRR1XMshJd6iHMctQ2BDjga4TWx54v8sz42",
  "key29": "2XD1o8HNY2zDMGkWTwKA1hfGmVyHn9x7z8F456yXepkrdTaHKdTYQtG3tYHwH1jpMxSP8vEtkP5DxSdKCAcB1oTi",
  "key30": "4B7r3MdWySATc7GA4QrYk2geN1bQFhcFiNEShvAWrVqCgAbWy6HHxggFDmGcBAFUReS3M75So1AGKsetZXT4chJ7",
  "key31": "PKfyrmNSoW586Bp2yM4UBD91HTLt9SMA3x3pWt8HPpC9b6PDG869n4qDN8gYp8buD6vmVDUqngtqz199YeE6XL7",
  "key32": "27cDzACJuUqAfKZWtXLXZkSNSMZdm7hLrQyWuotX3rvVMKeUXuV65csitGrF6u66RDNJUgWUBd423uZkJeCdgD71",
  "key33": "394VnfRncjbeSXRhA9B1uuswGXrS2bNEBbGeZupy97HDifBeie37PncRS7DrELgUy6UbTuctxViGjUB8rZcK9Z33",
  "key34": "5HGDFZDJC2dDXxm6QQkTtRsiLirtizZKseWQK8eVZuAi6fNm96z9MAxL6xKuvz1UkDJirWjAnuAnUWH4ksR6nW4i",
  "key35": "4o7iZjsCzMunf4bCYxHSSRSHzrAkK1WXJKeyz5RUAHuLhS7QzKMVD1vWFZkJa3q51KzfKxAEjzAHFZmBQgyfvSW5",
  "key36": "3H7mg8cLzWtK9Rji9wWkuXzeWtAMvB6CMx2N2BRzaY262b1MC3GQ7cbrEmDCwNyMv1vANt3FVxxfjazpSTsKd9GG",
  "key37": "5M9ENMhPmWNFFvh439cZNbyFKY17hKcR3G4gGNTD3mD911LVzeQ4jfnNpPp86skqxfa2YxiXm6rffaJRmSQ79Zna",
  "key38": "4HdJfJwHgmCk1rQPUMJ4ggJV1MEh5KhdcN4mLEj3LJD51yNNv2BASrrHnHwgpLsfGd72tU4nULEWsn2aXXi4YoGm",
  "key39": "2LRv1x4U6LxiQ2DwABdxtrtibhf69yRnsrPgKm6Z7h1jddppsSzicUA6WsD8GZPooW5jMM5nSfPjupQcMpFn36C",
  "key40": "4KBHAJXP18LuMVawHPi5HzXfg2oA92sbXkDJnJnEzdp16EShkMMB7NdnBVhn2R1JK6YBteqgFn4eGSB8YPyXSUxP",
  "key41": "4XnnrRkCA3oru14VW2jUJGDsiAxS3Vm8ax1mYh778yPvEJ2pcyiDcXiyyYdpHUy5TVcTkD4MHzn4N67TCHmW4mRT",
  "key42": "wFKVBQ1v8ziApoe5mnz87VZsDpAcQPMaN557a9Spb7XvpeF5Db3YEDnkshWu8v36vr7kNQLcM9Hqi8d7qV5HSMJ",
  "key43": "3u9Kd8pyMMnhuXkX3gv82B8DQ3xoJjdMa2ePvsdw3TPp5KgNBxKoZL6tC6HrQGsCVo1VXhas6KJR9MtHtoHr8XP2",
  "key44": "5JnYyKdk29pgWLDCRENLF8HwURXVoTz4GGqou56eRFnF99zaAP49TiS1WztvVPpF5iUca9jXwEejpWkvwESA8ESK",
  "key45": "5reQXvR7sV9Fp5mqWr8y46XmE2k8q2Nbf5hsNLd76WGvZVrvviQsZ6e8M3iFjfwWYMgVGaRk7T85xixF8QDs5M7a",
  "key46": "4LWCLR93DQfd4xh3pveiFg8vhsxBapCspLwVg6TJrLsq1JqNBLsGvbotnrEidn7gXyXhTQJ4RqnJw9VqtriY55mv",
  "key47": "ah2QLMYvaunVwwtrqy58xYLPDGp1EnKEFnWpDpU9Py9YuCR1S3KY3RvZQkQ4fY8aEUhVt95wUdezmC4nLyWPLXV"
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
