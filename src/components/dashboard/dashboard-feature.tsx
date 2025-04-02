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
    "535uyPH47F4CY6JDdvDLerFsgcvpRAjYvJ1GvVo2QxsggjxFec7YnswzU1if8bYhcZLcJhQaCuLRByjuPqA8JHYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HXbTupYHBUH88pmZyXvtB39a9zX74pkwcsFkazTJ6B4m2UZLsA7iNomB5iMzsJVxWDAVyXZx7pLYoxGLhocLa5G",
  "key1": "5JBHd2MZ6tDQ3hnH9KbDNaKz6nfoswByHSBxTtkhwdrUFKhznwXDD6BwbCSk6ASxgKffTs74113MDArKBKR1vikW",
  "key2": "4KxbZzUdTp1et158zr9vne9m9vJJuUzHGKsHC8qQWEs58C498Gjs187K5FzV3gCLN9vZ9m7MZJBUxEpS5FLTAAs6",
  "key3": "gGRUxnKpVV7BjYDvYf8AcoBbKgDTHszZGdntcWz1f3GZZD5xW9Jrgsw896WR3QAYqAaECNpcvFtJyJtncig1KuC",
  "key4": "2oLrkCoSERMvgrDqK2Sxj9RSicBTauwwjm5DsHbWmhU4i8dyKsxRyAcLGt3WE3C2nq53NkYM27VfSUPb5hFHRgv8",
  "key5": "3JrEfsHrQuAgNgukA6PNpNrmC4kmWm9vP3enJG3RTFuE4BtszrgdmTG8oQVYR3a3WEBZquM2RyRYsUTn21rQfq4K",
  "key6": "jirWeBwQNqBDQcP1vRdv2M8BEsdyTiq6YcwW11TKAbPt42N5VPdenrcuDcmZTXv5Yi7SPciDVjhAUmMgDvBiQi7",
  "key7": "VfsthVPFcfeP9wjvHgtUXWy2snnhxTM2oPWuemJCQG75Em2rPFz4CPLPLg3JTj5Eu262Qh2ajiYfUjDWVVBak2g",
  "key8": "vn5CpsDFaCJ6zdwvJs8WHzRxDoF6jiNC4ar4X6uLqd7uiYh9ShvJZn9jHN6yKEvMwmgCQQCjfnvjnJzuUFrD5CQ",
  "key9": "i1ikKqvQ4aHsVDfLh2trjH79YLawA9fTvxxgJTJVtWQnmfVvWUJTM9r5r6523e6zgj6CRDnNKHfYUd3s7YL88H4",
  "key10": "5wjjRngDQf6GvscnjEByRCtEghBa1CqfP4siq6UrGAFXFMQBSLyHU8GJLavyVVMd7tdYpnZtpk4Sm8K2R5DxDwUr",
  "key11": "3yXUJAdELQU8TduT17hMxxhkUB2baaRU4SwadudLUj1ieETavSLzrA75tG39xGULQxMVhSkMM2NHWYAVDTBjXTUM",
  "key12": "3nshF71KGgWqX9m5ZqTznRfntQvFamee8cKpThsy5EjvatS8Ve3AehFmrbmaTtJQHwGHgrKaF6m5ghibCfpjgiRt",
  "key13": "25JMiWmrZsqSGhqWxfrEeKZTnJ7Ws3tGDs7moVLNiKZdWFNL1oUetVMRmEGEmNjC9zwGscTSeAPLA3JbCixqg9s2",
  "key14": "3DPbcufqPZuJPkAd82zkWRK3SLup2tFfanYcMvi4uSiroKEEuNbyHWfnWTvzD7UzsPQv1GVcQvbm6qsiu1pwP7Da",
  "key15": "3YgWxgN5rwTuW2PkUWpNotXY1teFwiXhEQ8BDQZ34VtMyut6qj65Ro1UQQ3FXLzZnA2gAdfScnuAuVpaBNQXFHf",
  "key16": "5KjsCzYMiJfThP5ZCzbopkfmAbZPVTK46JXgmpjW4Vo113TD6bkhzYe4nZGSEXjYX6gExg8eTN3SBScFuP2PjG8x",
  "key17": "NfgVayDUGNV9XJ26YVYZjpNqyBK6W1pq6mJPuyh9mMTQ2CszGhN1FxM5xUyr4dh4aDMwPrGhGamy6nRf2eeKG1T",
  "key18": "35fQdAtTsmUDdTZd3DeBkhYMpEfdkkpcVvM54hMcSHQxQa5AUAWD4Nw3DYdHkEGxMZLpZ5KTfsRGzuk32m2xTBrs",
  "key19": "2Zkx6sQ54988oHSkyJqV1zaUHkrrTqGKmuWXt6vzCPMKT767JoA2U19oZZ2w762MQWhxsj4Y4hVXWYLYJCEtwjNy",
  "key20": "4xmPHVXoUK6GiH5PiZyhj6Ye74ppNLEThv2G2NPsiuQNSUdvEkDFhqh7pykVySV9ZpRduRAFVFKGyuokYRajLWyn",
  "key21": "2y1Yxv35ddn3Fb2nDjFsqCJ5pNS2n868CzXUKsq6bVcEM3AMso6JvShAhZxRk25SyY79oKAsekcGng4PqboSua1p",
  "key22": "3xaQiSmYsp482T9iJXyfPGgX2SeVb2UM9XhrPbMLFjD7iJWiGEDe9Hun91rnsMMAPswL24cPXUCgkURWfCehQzar",
  "key23": "9LrXre4Y1sn9dVKQymFpwAAmHLnjqoFdCTPyZnT9XMqzGCNtvAoqHNyXEosihfnxwJwhU8eQjNdouzj6oLdRSFG",
  "key24": "r3bWyJKeRKk2QF3JXo5gLkDq2nn2fJCSDRveqtbMy7SSETgorqJTzmxn2HZhZK6J8ozvXaGkMEmA9WhLmsGmygd",
  "key25": "3ARQNy8WDp38gCjmiCTb7c1Epgz8vEm8DzunhaTvYKwaEikWvcAbFpYv2eQTe9eVqaGB8mb1qccqnsncG6CXz27n",
  "key26": "3uC9mpDrx1ALe2xrTypB91nhG6m6iNvmm6wswwFVdainCXsmWFPJBTQJBXqsLwqFu1YB4hLy72AuoNRm3RqY98ag",
  "key27": "4Dju2eCL33rmJPorEX6obbR1ndcxQ9UTRdXgvEZXQWyHu8rp1a3VwNssnBGHR4vyavcZwuLjabjh7VRg3EExKAx8",
  "key28": "FbZHj6rU5RAvjH33JtYiqQ68GybkzwHQMTTzf6nZPJcZ37f7SBD2qAboGFnytrwnjqLHpVCHhYBzG3uco2tVaxV",
  "key29": "4V3sc7R2XRCRYGDEad5XLPBXeaN2nUGqXBUECnUen5q5h5sr57SKRQupRXKVnTzx1x82oEdLobnyWYkebyhBTndc",
  "key30": "tWrQxiZzPY3Wd5JubNfra4UQDR5qXHcJaxwEchZNkmzte5so4vWPNJU4XJbVRs3R6CuLLrGs6DBUQUxD6C9RT2B",
  "key31": "2KAV74AbQ3jznxPWpRuekVrHkDqtbaZKs2WyE9jeanWzzkVjV8uWsKrGu1tw6p6vTEy3SRTrbJFTsVdWj9VzbVD5"
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
