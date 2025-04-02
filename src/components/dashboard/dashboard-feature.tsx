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
    "u2iw8998ys2PEMV97HkkKrMR4YriSDQcPaxPV6zwhjiLPzwrU5YbXPHjD1DBqFGJbdtQKFFAVh6n4TYCHh6RCCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CWkRbePccVHjApCR7KadxZySwyaqVvpkusuBwhqUccor9LKA5ifRU8WcHXJVGwiY1yiwEXvnjm7FYo5MS1cseYq",
  "key1": "3opCmLBcmQ6NMJjFiapT9EphAHDQGJ2qDzfmCEgrFEbpGXXvrphuT768spb3Fp5YoZG6KjcFTD87JRtjJb5Noget",
  "key2": "5LgkhfZDMEEBSxZSKBN1AHjL8i412sjUNewhNGPV6aT2dVGR3B22LwjfraZs5jkfHX9k7ZopnGS7k7LXkvRrc9Kw",
  "key3": "3fSgHvX8kwBa8ZGud1tM8x2dFCKJ6nnqdNKshy1oNNcGPu4vYfWY5NV5kfGT9QirSp55DR48MEN6MnsVkgdY9h17",
  "key4": "2iKtsHf7kLjpQUdX5JfqVWYMASp8LKM3ZK4k9GvfqwkusZgpRxVpAAvVMWDTshT5XmnvCfNSefveehghVyoD2nvj",
  "key5": "3EsJWmyHW1HUrDrUYWaU5ykkHgEs2NCWCiVJYT5Yv61AED9A9So8GAKYC8kfcurV2tvzsdZ1L3GGoCRRGn4XRUDk",
  "key6": "3M3w1WAAoYSiiogXdnLckhx1pBwcg5toypv1FyVMAdK5LjEeZ2S8fysjt5BftoiNFW4t645Meh9bUu4NdrvHuhpC",
  "key7": "1hPRdstm3RG2w8zczzUirh3pKrZs66QuENCGAmpxQH5Z6dhDZtA7rjyRJR3Y2qqeWRbnWsSXqzEqbEunC6ks2m8",
  "key8": "2cGPW4D5tSxxNu3mGxtBV1rh3269jYbgd958ohKTTrzhKkNy9eviANeMyWti7s8pYNJJ7mAxxKMXQnWdpQbm9qAL",
  "key9": "2KwLaWq6fhagRpk7EqXvYUngXchA9LkeUoZWt86naQEzXYLYeqQ3jfHrKt5oofbDTtgKbhGPyRdvu4HkA9icu8HQ",
  "key10": "4xMpJfN6kfQpoP6rnohah9iu54EjHMw4EvWG59esz5HYrj8JSLiJwGhEaKN1EcwrW9dLezYae3WqLu9Ysd4D4bSu",
  "key11": "4yL3HWsyvAZBAUPJj9CnTRnEnbGxULHXitJ8ad9FEC3w95LppmAVZZEWAJHXKvWbcaGpQq2Js5N46PhrBbE8ovKD",
  "key12": "3mNcucBAizTvskFsLXdQDKxbdcm14yfe9uz83L1grare8pciThqxTaxFYcufQgN8wUtbR2U3wHc8BaQThJ3yGQqk",
  "key13": "wKcYyHYJAczpMrZGaSo29Dbzb4HQty9d8YefF9myW1ta6x6VEtGNZabNZvfcgmEMizdiDjQut1xyHtdNM1nDjBn",
  "key14": "UPK25pNTeW3heTJ72FCB9pSaencSQehH6v4iMGVZHHzCoDvgieFjohb2XBGcop4q4GvNwQ3Xu33vTt7LrRhmxS1",
  "key15": "2mPnNbLFyGfEA5q7NHeUPYtB8oyveUh3HVTjKKkQLs23uhUQNFHE8WquwDSURt74FUFpfWxe3YqUc9VrqEeLheKX",
  "key16": "3jkhZRvv7a5BqAQWfstVcjAsoNLtRKs2x9bbb15FaxSArop5jX5a2CcJG25NJ2vnsQ5hsyDSJz4E5FZNDmmFXepB",
  "key17": "Vijvb3d8NRTBRW6NZZeLhFR3fDBWcJR5JabC3ppw2FZYUqQGgVWxupAGYQCZmCXVvUC2bmo4r9867UwpqBAA14A",
  "key18": "dHMi3MJ3JHnXo186dkUmVNDfq4YCJ2cBbfNkeTfAfAeWNGdv79smvUcMq1YrhS8XdPYvnHeUtfRUjvFpGsyUCWJ",
  "key19": "2XRQRBBb3RpzxfNyUEZ6cHV2vLhQpD6rkRkVq4L4r8HWV2rENmFK9S2QJAMS573L3Y3d9f7tbF1JNAngrxDx9i58",
  "key20": "4ZwPH44BWHgwbY6GtpJDtzK8rXnNgevSkT9thduPNhq8ThchR7buGjRkdJt6EshweQ8LYQSkpWQgjoV3Jgrh7eYY",
  "key21": "24KhSNdfXwyFRKx3jPFouMKHinDQQisydynCBFhaJU7sMhsmSGFZc2kzGnaqfKp3tEUY1H1ccBprg7UkWmrCCibi",
  "key22": "35pGocYFC4eyzs5HTNzVpUgmgCSSqK7fgdVsDMUbTr8VZ982G1LxDeXB7nPPmtU8mSHkgeHWtuPsZhTkZukCdwD7",
  "key23": "2saYkxh8CYGmRMAju1PCqmrrpRGw3MxjzrxpPzx8dt2NfKCFp2YpwmmGEUpmAqRv12kpDcaN7Cb8VWdwwAFwXWc6",
  "key24": "2M9aBYZAxu7MMvbDgtejapf8NqUbHWZMucxMqjrRjJP9qBom3FaiEt34gsZgYurJC3p8FLFBKaMLr2My5eJmPCU",
  "key25": "44XkvKYCsyPAgkHF2e3ySCmUfBgDHcehmQNBS9jrWTjKjYV8qDcAXx8mYeTjAMv5LiwPZwMhM8SzfF6qci9UALxX",
  "key26": "XcXP56cwLUC6Btrx9wMtDgT2p4ZDr8VN9C4gHoZSiDoWF4pjDaMU9RL6CtY1vTbDHCcsBAQTWatNfajhaD36dxa",
  "key27": "399okpEKwxFFQY7gQoPD3xGRAcVZQwehJiJQzas9u1ASabhP886FddFj7CRETYYLbMvESq2w2M1xP33vJvNNdb92",
  "key28": "56KhT1bvx7Q33bt38SNyxaYWqBm13E4ZTvkXTJqWbifVj96zVkm7w9nutcHXU4JzjqHvvyQ3xgCc98RLVqFeWQSC",
  "key29": "3LTXta1kT1dS5Rf1TAhoh654QNwz1bnrmhmuYoBec64yJ6bDtqqDJQHgpoG387858pgwn2MbgV3Q5x1KkMZNpofP",
  "key30": "5B2M3JsBDWdUCbn253eMXzfRd91WmJTiGfAu76jjCsnBf5gKo8CgtuH3z5vcensSBfF38sL3rEFWjfrkWB21m3yg",
  "key31": "23r5JzqvvpBS9dfJXBGkVpf8Tb2vU43DFSqzUkFZrRn3g1y22vhX1nAWqvJd3QTNwsCev16i1p8XzPT67x1L1MWK",
  "key32": "26QHCJ2oSGcnVhuQ5bMSVpYqLvj3pyv4EneeP3rdhAuQ2K4YCKMFQ6zvBJLJiBsnedbWeqtKp7fwanUzv9Qj2JXu",
  "key33": "5daxhTtTMeYXJTi5rErYtrEJWJuxqCzxbc1wDsWyKmUf92WpEfckhQQD9wBQn6gA5FmfBtZvSMnmRWytBkNJwDhY",
  "key34": "4xXDfPwuCymiNGHurev6fKG1C4XHZW6HcSVcNf412FLt3TUPoH89Cjvea2hjT9qncRkT21ouMe2NN8ps6u5sHZ9V",
  "key35": "52S4W5WXFhpRqfBqB4k9VFVDvQMezEsWh6tnR9YgTg8k7C3Mq7HoTo7Sd5Lt6oRo7pq9YuQ3BUUaJtZK3qyAcFtd",
  "key36": "3ii8Ywg3QVjmRejp9nV4oWjrnf5eJECF5ouwx8vN6PhabQGrwCW4H7ucXNAN8Rh5AgWCJ9EETcH5nnyNAU1nvwad",
  "key37": "3XTUEerUrBfF5K9afo1P6fT7vpEPpyLcriUk1DwG8j6A79osUA9zzixuXUNDrvczyamEMLsmQLmj9hk3x3StusXq",
  "key38": "4iHAwSUnbEDkJbpJCRSurA2N1DCUmKSB18VSJ5YSnYTkcDr9AsbJb6YDUBz1jD4bDSnbRZkUBqVWQv5CcuQvx7Y5",
  "key39": "3CwrsEpHZLxJ3trbaQqydTgyt1oEpkX9gsHatt5Em1wCQmU1pyZ2xi2VHDd1BiVEJQzcf6Qcr4r5vG6nSVdYeJKh"
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
