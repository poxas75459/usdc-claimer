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
    "4YZV2vWMLeWTjAJmt7Zpjo6b18wjHx7jJHPm4SNQZrGpQxEbG139toA8qbudxHmwZXn8SWhHqxZijWrbwMm71duL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aQ3HkjjinjpLhSkB4P25z6n526RdHuGLcRqf2XszZN7g4ppFCM9joh1AHkDNRjcPviJ3EpbA8DAJuBQuxazrtgr",
  "key1": "3HC6R8TUMjoyegUHVVPa7gU6RUj84VQdZr3FD7ZRJdGjnFidLV91rFw7WJem6e5ofSjTKA3XmhTGnFgc7KcQxLqy",
  "key2": "36BgcJqYUEV2PdKivZEeLRwSFVwgMgQmXX4RRx31zRdLgDXRNDnzHjL2WKy4DGyueqN5fnCUPR7qmS5uAjaJs3X8",
  "key3": "3aMA4HTRE4wN3YKjeZVFjrUYZgZLWgLtUbFt3KR3hxvjRmjur8mcsaxTJrxKtJ9Qj4qmfsJFaUeBjyZQwGNYcHJk",
  "key4": "5hUpGq4PEDpi6Hhx8ZHhFCwpM7iu4hHYBJ4na7raMBneTYQvnD3om9mvTP1bfZVxZ8G8smAXPguNKw3TKzBKMRai",
  "key5": "4Zq8ZgQz59STUCYcsdvdyY55o571VfxG42zkot3PauhEehU1xkJTKo6SC2xePC6uUCgqcffi33xcmufYX3zPp4iZ",
  "key6": "362rFFRf8bJXjqLFAtxJMtcrS1AcHLZEXxTbtAZDysuFbYqDRN7UavVBDDALLnAArBc2cUQZhJebVQDRZoQbyymc",
  "key7": "nSUnbFNjy2Wqabwav7mZMb6Na6oBtXx7cBabGAMsVzswESvuge3odwKzrdDGWdAkYdF4xqVaRaabdfG3if9eong",
  "key8": "3ud96P9gy7yRs1Eutfb146nUwK696ihBQRA6axmmVMaDVGa1vT8Ly5JVDV6J9WDFUdCkFjQUHM3iBrFKaPrq1VVp",
  "key9": "4WjDTR3vuEJkYGybyxKih3hFhYQmgkYgtyT2gvaq9Bj2YdtFBRaqmdm5uuxge4npfC7TFEiMHshfNBgcY5BM1px4",
  "key10": "4Z9afmi23SjSfFJ5Z7AdYdfDWoE1GD5Ar5rvPqNqYTumZ97VsbGAvvT7ZRbeWEf6GY48Lax5orfpVFKNkt5KyxM7",
  "key11": "3qBMBkKMZv8FFYahZqtDZUzC1pGQjtdNwiP24FCXBjtMzKtLGLDcmFS89Pctm4UXBuLjzGAgwnZWK1szEA4sn4zu",
  "key12": "2bW93rnZHtHpaKMYw2TEXXgfQzJB7gK9FBXyinYSH4RSx9EP2wvkfMrr9eD1i4KDiaN76VvcXq2XqQYLFw4hWdGu",
  "key13": "4mgyxirXbqVnwpXPZwrttQReB3En63DZQeoKojzoRksH1TjzL4GstVQt3SF8yFzknMwENwmsWbYYePgNkegYMUjd",
  "key14": "3qANqd3PJFL9Um6i53vaasqjmD2yoFskmUE5KUsH2vAa85cgwSp1ER5xceamQhrwx5HmfhbQcC6RY6mPjN2maStd",
  "key15": "aCLNYxcJ15re9SMtv9XvDAy8pPu6X5H9HzhYbPDtfuSfQSt8ybVQL28wPzFphCty5EnHsHxzqzRSLPo5UbJgPFi",
  "key16": "66XnnJVQ1z7isQETvmbnM7gACtFk7rWuumgV3eXuur8SceBWeimktxTeAnMuaLK5Nidzdf15JmWMyxYx9LZThBYa",
  "key17": "4WDM7qkWDqkGZMSbFfmLVzhEJGaGURb6H2zmXeZZNpHmNWFcsrxbQqwTfUbSNmrUBEA7tVNR8Bm99D9JBKL67X1X",
  "key18": "3dMDEn96tiScGLB9mp2bL7ZTorKpL6Wjw64SJnHqfcmGF5mtLoUVYKWy8HyCwRR9DgR8edU8YFvpUczYYgKiikqr",
  "key19": "3E2KNZ64RGui3t5F7ugHHJHbau7yu1TwJyG3tmWzow4FzjeSAtEnb9wjQJ51DArLJj1GjorcYmxqr1Yp7DvCBdks",
  "key20": "38UAkBnTGcQWKLdAdfS1cvTUdTUgv1JDVedNkDUnQd4cfGCUHuGaYEQYfTEUQDwU3hxL2z9TzESUGsfwfaSi7Dkc",
  "key21": "59sNSt92RZLwRDQsRWm3acViMBQXfPRVo8APsF5UfMDaoKduek3yrZaSRpN23PuacBUvP6fJVjmDECVmXiu2Zass",
  "key22": "5FvtbHWvNKsZSprVUQSFsQzMhm6NQigqgHnsAX2ZxkoW4sTC1XbnUf2cFwaeHuJc8Z6vVBtA7HPDt3jgiE6RgET9",
  "key23": "YoQ4qCbcz6o6p4Yeuy2pJsdDLcz8ji3NuMbfs3GRMRpJSyCK1CWSPaWUV44UpB5xGn6DxLC5E7mB4HmdTEiVmFz",
  "key24": "yxyPAgfDkZSFLEYmFyXQuWsxpCdNVyzUgRBFifYjPsPWceLy1e27zuqXytveSwgTTrpKarbJ2Ab5donru4BZ65k",
  "key25": "3w4JbeRUhh5RTBPoC1xPr9bGN48yminwbGdJeEqpr3zwP2hYjFcgT9RqHc6QCUQbWV9FSQVQHME3X6X5WtfdN8zV",
  "key26": "2uNEyk394ARJt5vvPULyakXH4iGnFMDfPiBU7gjf18Sg8QRuhG9AhGY2n8NtTT6x1hh73bKwJL4LJu2mY47Ax6eb",
  "key27": "3tDSUmQJbfrWwKJA7LsZzi1uAaZcRvjv4eiXU7gpF896SuMDyvDAi2k32c6W4u4DNRawaLqDedTr9BoyZMqX4RAy",
  "key28": "WJC54wWuADUrmNush5K3hFpfAZLfM7hWJTLEi5fsfcgYScxj98kShKnQTVXBXmuoc3zGTjUYPxUanhZR6AaRaMp",
  "key29": "2y3vShEaRdTrMj8ZNPcZg8RgrZzmsKJzqLLwqHR81AUnT6W2zgqBwrUcKBDfkWJuQdZZ2qkQXWXCxXtpxpYcLaTW",
  "key30": "KHp1qn8db9TNXq5gcTB5PfgrSg6kHFK5pr3fCVAFy8QgkcaWVnY5VR2sdy5tbNciy31jqW1h3CvLM9PpDDMBr1H",
  "key31": "33nQ3BF5JXymiZgHg9RTpNVXfJNVwPRL1TnUsbp3U82BeHwZtggyy7AXNFojkJ1A92hEQ3PBhiE8nJKe4ran9YEQ",
  "key32": "5X9ehWzd2fvbWjf2bVPSHVmdkRfraEhGAhHAFKkenBFUfhjjQFRZUotSvNQg3gqZ4HKzUr6mHXtUMfmYFX4Urx5u",
  "key33": "5SpnwFDUFJs6q9LoBKXXDzjaTPEwY1TTqEXQpBWQ54qaoGERurjHDmxabfZokg25mShtrWfMdrAN85ESLS6h7Fkj",
  "key34": "5kjayzpGnSTtQ7HFpj5RXHtxnQGFQGHHmSVgftX7d4szi6Cxpvz1zzDT4GUWuh6ohXVkSRbrB5UtWWCWbdZDepy5",
  "key35": "2wEYvieaJsaoDm19ygNmneeJxTmavFW2phzmsz3wH8UkSM9V7TdPpiY3hQstEbxBztiKpJyK42VYgNLZ4Hnoa1gQ",
  "key36": "4uMtaNq5oGDJiCyhgVAKCBnxvZWLMVArp2Bq9eHVaxiSHPdvPrUGVMuh1NU3w1wnvgbHzmeGWj8xMk1Rw8gzRiGM",
  "key37": "4rZtsV7FaysA2CShjjg9tFqMFRLjiZGUSRWs8u5JuvFzgmFjCugzg36b3sTX7ygCiEG6zZxUte3gfSrB5par3FAx",
  "key38": "4CWUbpiY5KNFdtxk8TNnqBaq1CafTh9MQebqSssGiHENXd9y5ueV9rFzE3aETW3tawMf88akSu8gydNTqk4UqprC",
  "key39": "3iH1UqqV5z8CGmgUL4FaHc6d6HjBtK29JkuWdTnm7wjNAZx4yU84AkaK93RjU4aNAS84tGny9Jc1FzNAKGuKzqne",
  "key40": "x7jMtHva29moXbjbnKiUyxzxJREL3oHDo3qnXE2GEq9jcS2W8skzQrqiXgVoaraNeYLuuQS77Jw8vTAm7oqsMgU",
  "key41": "3XkMTABaryZJZhwbpGx1LVnyUKfLxCKxqNq21uEVtsCGtuZWmLzG8HPwUNLRM8jrYpUKxZG9wtEnQa3dTySqLHeA",
  "key42": "4F8m3vB7Xv4N5Lct85qZHPLLwdiL95ZLH9tC7iNLkW73BrKKjDKn3Xa2n6bcUc9A4xEqkejykNy991kZE4yny6M7",
  "key43": "66nRjGVz8Ha9cg99GYCPw2uJ71x3tcBfo9rPfd8cf3KzQ7GXZzmKHRvk13fuRPq2Anv3V5mKnekDPYgjLPDA4Tak",
  "key44": "5pfWSMRzGvoKTzvmtxqZTDNtjEkvjqAnfUCjVU827AYbaYkjER4aozBvAkRGz6LUDku5d2Nx1SMtRuLckUAjfCLW",
  "key45": "2CjBDAC19wT42jNoJXhfu8gGKGJnJxtm2nZZyr3ZciDSC6scQJ9reYnJLKtXpZsWvejBV22hhRPVLuRAqMT5KuQv",
  "key46": "3PSUyxzBKUEqzxUFLUP1zHYoeVxVww2wxVpKqLA2oeKMjhecdMkftGf4VjaWHsj5ztgH2Qdp3mDfYEzyWHSP8XDV"
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
