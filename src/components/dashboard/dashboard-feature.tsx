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
    "2KLkQVPpoFtX2oVkFyK7C8E3WkEfomrDabPKETFiGX48oDLmTbPxQMBtqqiNNEcg8c21gqVjaLr8rWdYBry26P4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZCPep2iaDVKiXAEXvebEdFagk6aeonU2JUUDrWoyyAMwU8S7tQQAxWaVH3Xn18jTprU2o4gCwjGucsWDySV3BoH",
  "key1": "3bWKL4mdd1shNEmN6xnEeHYYCXZa6Vfw4J3qx3n2QAHfb9fp7PHCCJKgGn5nbYNLdRJuwBSooeB3V3NgcBVYsurv",
  "key2": "5FdTM2KtURCPjKSgT7cjSojWEHfr2TgbaNe9j7Em35jmojbroDHrFoANDZbto8MBFD2SHyk9GZgArCvR1kYQca5S",
  "key3": "3XEVeBvn9TSte49bu9ygmQsBey4rE8y73sJWVkxnpDbA2nKzdZZXgtZQVRntuZCAJQq83UaeDYGKmSvBTaNZPntz",
  "key4": "3PkrtcjgBFRcQqLhGDKN2M5TmvMUjtYis6y3L6iVM1YAxR2xDN7t8wPc8RTQZRWBKmYaShDBiGxxrUGwCG8WP5Xq",
  "key5": "C3DuhrTuw624KVfPe9sg1X15ZFJBjjUDw6QJjCwVoFAw4etQSSki4nSLNYVL3kbkoeGKtc6mRCFSg48mhYZiDEk",
  "key6": "5k7h7en9CVZbCerMfBnoesnzSAmBcYTWskcuFfb9z82QjRoyBSzDJuoAzG2qxRUUhgR7JUAHyJjo7wFVZEDmfTTL",
  "key7": "2mLkZxMTUYQb1FwDCEmToW5gUJBGb6svG87bcUqTeKyHEjqceN3gRqgVzz7PZqnp4rPuT4weFAcDg88u6YccWbKY",
  "key8": "23mJu856TfJsi39XoP4zPjNsbeq3bhbrG2Cusc7rYRRtjDRuEktvErZJXrZALG9scypCJBxw1xUVtSCmahwWCYab",
  "key9": "9yVxDmwJ82ZYCEacaJgw9ZSyBMPnjsSeVtmgkzJuMaiDGGn1ESGR2zpBhHTxd2LAqzUemwbwPnry69k1gmcTn6M",
  "key10": "RUkP4TLUwJSPkfhDcxEBKomv4fdzeVAsbJaDJd71cNiactsb9HvwwC9ppBsekjhiLQrXgncXf4A2nrrWtKxfooW",
  "key11": "4wcV7EUA8bc8jkBysMYkPARvSHD1PrmB2McSUuQRAWgAvrkFMr4UK9J7r3Y9tsddsdkKtpsKiKm14swrChm9xuzm",
  "key12": "3ecdHuj1kAxmnEUfPKb8Qu5J2DR2A4W9bTU3HcjiYftyFzSLLAZa2DncPomGoki1WADSrj4rSNwPLFcbCAthV9Gb",
  "key13": "3FWPXhEsQnMfC7pLiS4DssfBwxvje8PHVAM1k3TNQDGpAjQApZ6FSDxkewMghXibcNqkiYG6zDUkPLshwyW4aVgK",
  "key14": "3oztScKyaff1yUXA54PvHMWBHNuucHsnQWC3o5Ly1SNfNQkzJGRrSM4ftQSStzvpHorfm1qSWQ4VVNdUxJr96FWs",
  "key15": "4R25ENDJYNAaMYRz5JcGXvvfWQtkE4nCLDpmz9yGm9UTVGBc3qkgiUkPq3UHKfRBJuk3ckQs16pFJmZQuXXqdg2u",
  "key16": "4pVkWs89pKsffb8TFZ97vbijUDL5z8vZAf9MAyfQu8VCYUBA3rVJ1v26ezVyTatafzHEi8hDSkPVUKdZ4wsTAXAY",
  "key17": "39WCMtGAA7SpHaKBzZc7hD7HwkSHV7wFKoJ7868eZxJD69siC9oQwLdJFCL8StKVWQQbFD8QeqmcK1vozTZmjD2Q",
  "key18": "5fARBWdjDawcWYqigqutUKf5UUNpHxwE8DmDSsXuMVWzxy2gLnTu62rQiLfthXfaXBXGx82p2kCeeLKGExe5gmJw",
  "key19": "5J3iDPaoWugw1jfw59HzhqwTngDdcF6dmksWvv6QbyrZTgFsEaTBRYpucMhkrG6cN1sw7GjBZCF3CMJTBFqJjRYp",
  "key20": "4Uyi3cX3XAzGaQz11X4vhwJEpr4LKTVBJTybJm2xPgM9Usc8dpaQv8XvdbV6PXQpe2PdoeU1Y6RMvSkWvJxiSeLy",
  "key21": "24vqmBcmFi3yHkuLgobH6sTNw96GuWCVyPnyVEr8aPHar6gEq8AeCkKCZN2Z6mfEw6JPHJ24G1HAzYuDVEmjgBW4",
  "key22": "2s8dMEy9gTa69jCRkv7KXYagvboAmuK8GZDk1HjCwMiuyZkXrYHiR1bTYJ5WKZ45HRArwPGrxLoozbHNbMpm15Er",
  "key23": "4dWtL2arUw9nvZpGxpPaMGprByJVrdd71PTJNvahKjtm4FYwscN4eSQwHrGiZxWD31o9UYGxhPEbCZUy2dpP4215",
  "key24": "29prdGQR1ti8UEU2outuXe9pbXpj9MRHKWXQ7zDHRBXNrnpQQy4YDc21EbWRfqXq2SoUbf4WjovRVqDyB8ijA1JR",
  "key25": "fKNz385kiw5vfEV67wwVHMtXnSTXCb44ofQPJurSgt6whsErqfVoq9n4BU72iC98QtZjt47errLmxiiiBk4RFBX",
  "key26": "3yG1phK2PjSPn5dsnnfhAbEBNkxvMBGfHHYCoSzvz3Lg9kp4jFK6fbanh72MK34PevfSfUHptd99vbpz2SbF9Xm8",
  "key27": "phTKsymLR4E5LSQhn8F6tuP4Nzxwk4zUFAdZdcE5sGjDMJ5d5GEvZSmsUfWUR5RTDTgUAjchm5QohBUH2ykCFHs",
  "key28": "59qD7YiJHCdqNTuKkE1va2ku8AZCTXWQmgZCzHiQt6dPWtMbt53VpfMrVJcEbJiqxWXp8Za54Hd1XXQVP35MVBU3",
  "key29": "AbBscHWuZ6NKuzSA5SFhgSmVdqDkgyhB7EatLu1sYSnidNQKRE9L6VR2kWVAgG98cFQUcZTu23UrBQeVEHfiX9v",
  "key30": "3uWZMpMwrPxV3WoCBUnkF5esNhpA6emuSrQ3icHXCJPye96V2mMwm4V6jDkhCEmE6itVbn4b2qRB9KnqjuQeFi9h",
  "key31": "2CgoBXULzEsTgo8Dd9BDESiysuzrq3vExwoWfgJtfG8weMV9A5VkSBh9BkebMFPmeADa6k3ETCMgAbTYjorsR2fh",
  "key32": "LAHpP5V7BXyS1j3SSLm6dp3itdUA96kgFE7tVRgBjTgce7utMDFhFvsdSxoDJnQijSwiZfwBb4Q67kdkSj7FxBo",
  "key33": "2fqvy5oWYQM57K2STNekWLB3krgHCZ2Yz8uJRqd3haJRRMdJvUtqmfnvBCxhfnWd99aGrgNbTVcG925AnFnxPRg8",
  "key34": "3cBFx9VxRkBKZCJAEP7cHR9zvcd2uqPF9zTQBJKc5JJ8hyjt8xDP24p3UwDzbvnu7i2T8PJo7er16FXk4Wok1Es5",
  "key35": "4pirN51p18XBepHuPtyjzD2cohhEWGsPQfBqqarJmWp4V29CmBWHLF5ToS171dg16vFLnKndBaGL5fTRfVHpxR1W",
  "key36": "3wVUag3VcBApuANPC6mvSziNhYrpUK2LAfMsQkt8cJVvFziF7UKgbnRj9YPq5v8FMonJsofUqzBd5H1MLF1avGj6",
  "key37": "4EB6GktBBfTXWkxof5aVjgXA9eKk9YMUZMHQaNLS4i2tMnNrnSFrFhWpWKNphxSGvQe7JQRchAk9DZCkjFYpdQu2",
  "key38": "2ZnU9R5UZXvBkMZCb4TxAJJfaGtJVMLknieqhzGEQusSREGfsnBYYZCphgRbbCWCi9PG9iDTiD1cG8miGL9oREPm",
  "key39": "4uTDDqSfAsQNDP9PyQdpj8k7rZx8V8sfMhXYVDZcYqkRvb2E1LKYFdeSJRkdEFN2N1z4DettL6M1pgknwmvioXZH",
  "key40": "5XCojoscYWbqWoVvDrRx5868Z5EyM9KGumjDvy3onJ8EXpXQyuPuD4KYG44WaTzXsi5ybRyyyXXJDHDMLaLPzjHo",
  "key41": "5q2WKrnkrmdFRxLuZyvjvH8pZsXSngXUenbh178BUiWSTnqS2wKwKT8qoc7xDWyoor2TBceJ6HPyodXzp6tHCUzx"
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
