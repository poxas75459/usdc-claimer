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
    "3wmpwXd66oRZYtp9iqR4nWyXxDaVVSsL2iVwWBnwByLXBe452eeraXyxPmTiUtHJyws6T4kxCUVacdUrbmkHMGvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39AN4UPNBbtJ1MT7EfeTYiCGbm2jry1NhutqESavopLLjXVGrSD9UGFbuuatZj1Wo1V3MNoQjCcmFcgHjTuyM7yd",
  "key1": "3aQAappF4gPKkwqfzpbhyfm1AMef4MQRxMoXZNbRCktkAdjRihS1eZCU785J53sXXL92WPrpJ8BjephAV9UzfYac",
  "key2": "3XYWdJn9dgMW4ZWJjXvy73Jie6jyYNykgu3aKGBd3AsEvYZEfcjhYWgyUnj5trZw7p7BjagsrWS9vzqQM52LNmX5",
  "key3": "31hAhHd85g5kJNAh4MuUytj91KzK97wmRYhkKxpzUT49x9VdDiY7jC2MQhm4fULctSZZDwzy34QTSobkJiek1mVD",
  "key4": "2QQeMVkEB8t1ELvaXzrzoT2ha3E38i3sURMqtMJnYjo4un9bevY6AmBRUKdcU4s49HoUKFq6kGy4M2GCKRJeAW6f",
  "key5": "5f3RJuEi6auD55F3357gDBAFprsRxTtqouikKqM26chEVBokmxcHso8JGaGFrThNosQ36KbdGr9LRpvwf2z5c2hf",
  "key6": "4GUj5934yxrgQdDDrNYiMAReXahqzoqgFPZfiXspRQh6SLpfxuFVmQgDDsNuXhh4Mpai3BYKUDYLkGgm9wNpH7TS",
  "key7": "26Htjct1pi7nCLp7j23GvJnMk5QM1gbYJjTvApLvUHgTWdyJhWJ7WFX2M7FBbCVjYqCS6d9Re5jAJrkMa9mUwr6B",
  "key8": "2wYee2NoRVoZjrY9xrBRwhDk1GqDCmQNRemKxPNevNi4g2sqM9Jj5dpJ2iFfNtY652t4fbuhtiH2vu4Bw574yNHN",
  "key9": "2RM6W7ax3SU62zukTWhg7UvNhDVZTCiKc5hTznXdpLcwV8NhBFsNCgkW7meAv8HrGjKjYyFsVbJqGm6gCaNchQpD",
  "key10": "369kqSZ2NjurVJeQvJ1kP87kDLBz3Zduc7DgHc6KDDJtwVRGHPKsqNQjWJrvofCgd7dqtPEs84xr5ABUPVtEkrNA",
  "key11": "2TbfnbTs24CtTszDHxQw4uMjmdR9SXFd87YinNSp1EdRNz93wekdSki5nfz9ey8WBGs37vFxaf3imtaMpSL2uRA9",
  "key12": "2QWW7QjcsqeCnEwBtrVHG1nCn9saPoudHsCoe4yjZwzyRRJQduzZ5HsWX369DX47xVizdMUAVHhpJeKDV2V1jNtn",
  "key13": "4SA56L4tZeaS9fpVieUK7Jh4JXzbbA6v7sDX1JwMejGtQRG16nx2o1LF2GSdwzAwaHamMyGvLycxgUdaQCVuKGi3",
  "key14": "4Vcck9AmpLRGvH6s7JYPz1ZNCeSiMcz5WQNzgeLhCiTW122ymysan9Kz6Ap721zVCJFBX7dWRzwtsAPzy7NWRcUb",
  "key15": "2NpadQyD2vUbHgi9ELXEBHKss8Ea2MvdFAdAUJPQTTifbucdxNZLpwKSfWC6UZmGnUF9rH1LQ6iC1Xc2TTYPp14B",
  "key16": "yqVM7fT6w1dP8CTeQTj4GjVEcMkjGweNEer9TN2SEq6Qu5o9MFX6UutbQknQ3jxayw3MPfE8BMZH4MCmsz27dU5",
  "key17": "3ZVuzq6RPaWvRUqvzaxFyqr1pHAgSpCU9vqoaAixre8KgWyNTZsndAMRFEfPsmbWAXj8Fczz3MVKixmVjXw9RPak",
  "key18": "54PXTaDN1zgmsNNsfiDn8GkDsqtm8kzGwqPR1wNsC13PvwzHVnba43pGNtncB82bHme5wCHK2iX7UPPYoYZkSNMY",
  "key19": "5vW9vLG8isouDnS31thcea5Pvcx1RD2jTpvVJg7rVerVGuNvDSm8Ao4EGtXentDDFmccF5xqv8HhZLFikWMzCwZK",
  "key20": "4yw7QKqdY7i9KyG2Kvvpz1zGssGYFgbPM1ZEzETBr7792YdXFSfMWTiSmB41rSSCYnFjmDpPVjsiEYn9uYJgcZfd",
  "key21": "4ZsU6GaZVyJQtRtShES1ydxRLV47dbuWq6hhE1BhHfmkAu3aQQ1xjfKy7buCikkMTd9qAth2LNVznd4R9GwGkskD",
  "key22": "2Ve6Asw2oU48fMiw4YDCMd9YkaqBwKm7oJ464vdhJzHeguFawo64HKmMawm9w7n9GsMjuVWqBkn72XPM4Eb4yUx8",
  "key23": "5e7BSKq8Z7GpeTwmY2Gzz4pJHCjfhEyvAf19n1wF3xfmrqD1jEfyTD5BQHY8QNfmCHCnfxDsbREJ7K2xDimPYqhW",
  "key24": "NtEnguMpuBPTk9sFsd7qubzNAQoVekLT8fRCqC2PbUFHtbnkYAAyqAg7i7kwSsNrmaHjY21rZYKnN2CSvcLVqmH",
  "key25": "4G44ijqxwQEnoCsDfvpcCuYUR5H8Dzwz7WvcHZHJcHf98VV4Ehox2o65qT4wmr62CwuXbfM7VNp1kpEuH8NSxyCu",
  "key26": "2DN15qE5Q9axeAvL2QwAXe4tYNABmN37a4pC4ojRuo43nFZuM2ahzQRcdZqQDDtr4jx2WoDypCNyDP1fDt6ChnGa",
  "key27": "54h9fDxExRAfif7U1ygrBgAFR3zzfuPm9DiopmJohnk8293ZR6zchgvJFqmejWmbJvWX2Kzub1rETt6TCsyy6LHz",
  "key28": "4BsPpWJCEDeifd3oqN8PQGng9ePFZFCCmJV8nMCJePcBneGtA7upov2dqJNapB4A6yyNh6HsjXL29hJGiCMPVK1Z",
  "key29": "51qYaEKP1nfgBg2v6qwKgTGVPuUD7uCTkNAh77z7YD84G6htEUT1wY8fs198gzYqnPeCA7tQYpYuZs7DHxxq9w9s",
  "key30": "1SAA4oNhS53AY1TLJLu73xSVzHmj8Ua5SvrBRSYVZKFrAyzU5aQsyWdZGsdRPitR4XW5nWpiBswp4StzBYchx8D",
  "key31": "4G3MRXNfrKhMjMSgwjx1iRNe7ceWaLSg94cHkm4yJNnwwDAM6Pj44yeUDese7NRPpPM4fAuDwDUEa6WzLwX1qDkf",
  "key32": "2dEYSoXTXu7YkkL6zywppiHB7QKUX6CMsiE5T4QdF73WTAXEondwncjMA9825Fayjd9H924JKHD2SSSxEUA32jR4",
  "key33": "2KWEt3WFFQyUhWhJKmWRrdD4AhFxF3gz6omLW14bxtLg2fhhyYyurRMfmDpXbmipaNJa5viptrSxMfTAoM8c8EMh",
  "key34": "NThKiHd9Ng4dKSdDToqa2GXMh2JaY6ni8aHn5wmdMPRP6P7Y4fX4sbxYntx4thhnd9zog6NMvk1sVC2WBFPvzCV",
  "key35": "NorKsBdsNHf5x6tjK4L6DAZu17uSZxpZTuWn4yMZpmmYwP4Ew3cjuCnHUtJRQKEnzVqPh2arpMCkyGnuXB9KQ79",
  "key36": "2jJ7wcGMEoTAErqwduatVHqjtJGVSYHFvgxoAy3V7jJtT26hh1GVX96dNxB445yMEeS12YE1VicMwvvnaTsjgX53",
  "key37": "4Xy1qgiKXtokexk8Fh877buUVxWHYUCpR2TtkzuXwdEQx669X3tgif7Ld74t7teN4U2Agd5NWXBZ8pnNgbojHMe8",
  "key38": "j2Bf7JdXkjC8utpoxZRDGRbqhqRWbvMeCqRiW2FQ5RWr2XeXdj7ZE8AzqPtcfzMtc6AhPZQTBXG9cn6pavkf9Jj",
  "key39": "t9KoCewpcdp4KUYYEcyX6DNod6qpP7UxNPzCSrohvHAQToPTGsJFrMHQkMqcHj8oFuvUCSWND4dR7Zgfcn8Ds8J",
  "key40": "2rck9WiCsEZ5gHL4qTtMHyge3ZxKHoy4SEgd4g1QBbNYozbZNVxdcgudo5rKyy7N7Y9eReZHoBbrCY1HtTbPw4i"
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
