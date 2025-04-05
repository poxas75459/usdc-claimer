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
    "8iAMibYvd2KbShjUNKsoU8xYyvnyxh6Zhevkuyk6LbP4sNzttg2RRTfy3m9xv8sW8C1grCVjvcx491b8Lnp42vS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LJF7goLrZRYTMhDceENoVZKihhevhL89m7Eno5YV6JJ2pPgMWJK8eXGEDu445aFKvx6u2t7L9GY2pxLhKkpiV35",
  "key1": "3SppniVqqorN2DHUFVWTmYyUgxTtMyyNyrTx1HXGgauYjv2Rc8jQCF1LX7JYeN9D9fUVxXZeps3VSx4FfmjE2u5b",
  "key2": "3fxdLXYRXbJkYsPbzdXCC6rsGGfvMWanwdTU8cHHqAjM1sDSkoEVqUTxnAipEArU82cAnkQ7FtL7mxjuBifN7ksn",
  "key3": "35sqLknnHWPjRsUGw4e3HDU2vBFnWc3hUi6WBReaKEuHgeqfPDMBpz5VHKbisQ9gPuHSuDVRh3CAaPfxTrkNdiXi",
  "key4": "2mLpBQ7WRYwdzULjYuSPV5icyeGspQCWeSu9vCVyE32qqtbP4vUY9y3UfL1EMJ5LrkmUDN1N4QhYqkC8cUGJYyho",
  "key5": "GsviD5JKeArjTs7gaRFFkvsJYjtu1em7YKBfwH2q1qhKEsd7MRP59KtHdE2hAruux2dz4gPk2Jnifj4Pisr5DEn",
  "key6": "3So9gzvwgWDe8GicuZF5Ct9jPvdpnctUXA6SxTHs2TxaAP16igePPMX4zfXxTkKeu5mwfkSEqu4QTd4zLuikQwr9",
  "key7": "4wviTmU6rVSDRUQyj1sTM8rGFfEs26KkSBJ1nNDUS8HRFkhwJv6FKTkvtaPRmrqCMWe9MBbAnsUuEHQdbtAHfun4",
  "key8": "3MSQ5YuUKEn7Moc5To8YgAY7qnR7EeYAngRvyrFqWCe5i83EuVGEeiX294QeQSikmya97eSRva6RtCXF9jtif3n",
  "key9": "3XHBzqT4tpkn3BLiWZV5yxFtoSzGvrbbUf5hisGuYaBF4qAZYVJsWFMvq91uCqyph4uFW6Hx3j243V5RHVzqR5Po",
  "key10": "15i5QVhmmucMhCdbLuP1kzjcmwE51PEYdeePJp41RRc4vVFcx1vZs1J7jWsrTVYy2iCds2WU7aZhTf9CnjiFrE9",
  "key11": "3KQyBfgWZDp6VLoWY7Jf6SCNqYj5r9Hcixn6zwsdcJ9JJbm36648vxEbGbsCGGomhLhAGfY45b7auQSn7JgYc6GE",
  "key12": "4P9ybQupicpiuKnXdttQFseBucqyWYuH3hMq3huJ47zV3h8HNYf8PhKJSyWZCN2cWL1ieThdTceNHt32KZ8gs9mF",
  "key13": "3UUp58Both7Zc59gNMtbYweF1kkRrNwfoe1DaMhMoDjqJreHuQx97ESe3xPe6nYyDb4LwjR8CMMSRqsDeiQbjQty",
  "key14": "5ZecUAXRs4yD2e1DooMF8PcxMKXW2tDiGvxmqRPtwNDoBCEQ26boVykrseTV86vgVRW3GdpQHDwBk5VtpWAgZ3Ah",
  "key15": "67nE2fMartfnDyFqWDz6MqmpuSneDuMvpd3XW3Gr85C7WwuNG1TgETyhLVv3k1Xd4zPM7mpvUM46aAdFDQnQTZgx",
  "key16": "4Bgd518Tmujy8rNSJKXxKmH6JiGRqnNzjWj9n6cs9a9ugsdeegCFUCHNxb7RsczrjM2B3EJ8XaNLA2sU4WPZoucE",
  "key17": "2r1MLjk4hHcPprM4kPDcyQLJSK6SSaSRpZ6TbyvbecNWhNZtgQj2y1hzXVKjoKanWCgRQtFsDUxKcaTLK2mFjkAi",
  "key18": "LiJsufSoL4WvFMubqy6abZD2C1Bi8RLrQfgMy7Hgph5RGJi9sD4s43B49rKzA2o24RncV8wWL9CRf9GLWZyc1No",
  "key19": "5dQtoatJFANf4bYcb34W9KYjffz3qCkTXkzypN8RqpTbVnT4Ez4AFhBiDs43NT1UYVRXXSMUkpRHehK1gW8ASwP3",
  "key20": "43XcheXYas8BWmzE7ynBegvTgWQEPoMkzRkgTtzqreBS6hH65E8HtpMTVqV3hTARQHbZHTeo9HyfJLm5LqWhp6Jo",
  "key21": "5hQmsJznbdGU7ozn6DtuBf9CUvejQxxPcZ4V65eAKJtRTbQ5XSxxC9rE4CX413q6penHgskWYYWTLy3Kbh4zareo",
  "key22": "RSDL6mJx4LtnvQTpKSwGej11y3dt4cc9Q7BvuqVqXqqF6Ztk3a87h8keAFkxAnWkdWkrNY7Ww5xBbM6yCpw4PBf",
  "key23": "4C57F6GcsEMhJoPXYUDFHUC1h8MNCW3i9JyCj9scKCLHMWb4dzJqYP2ZZqJjVFw5fzHWHRJZYhUo7pcPhAABo1fi",
  "key24": "4pjvz6uWpAWq5vUQ84aSunf6FJEc1LjPBJDcKz4aX2DA28JWtffZ8fBzAUN3YUroEQaiLVEmf4VhgXU78JCw23Z6",
  "key25": "4HwVuPJnunHhe7ty2UwwFnAuETbELUaj8hr7xwCmTkZcSYcmBBqt6N6vnTd1WKuNj57xPrETuZce9yDhWfYW6pdJ",
  "key26": "wgMN9J3MjBh18cZajqdSPEbtByoqCtVywW2GrF8paWgaidE2z1uaF1gYuK7VNJ2KdE8oRJ3TGrthEQFKtyeJims",
  "key27": "3vKWQAajt2bdMgm3DmfRpXdNhQcnG5FnmdYwbdtbBuFghnmU5nswnwya3NQpcCGXxzQWGhinCroJbrHvgFMC3A47",
  "key28": "3cPP3EtJScenKfVTzjRmZzrCFpp4JYro3L34Z8vmnzUCms9GeGh8Z75iwzoQGJAuu9yEM2AkSL1PTaPfjrNWq6oS",
  "key29": "5u1gn5cbzwBngstMEhKBfyByedJgpQULcXup4ErjHm8Vnw6bhnSdxJEReiXLZUt9tvgR2AqTWfUN24iu7NAiSfLj",
  "key30": "2JFPCDqMiLSKg6vtmyZejykiZr1UiFePresGbi7NDJvCjeiQw6zb43zGWqgurNxftFz7fwXmH93MvyKDsd1fuiF5",
  "key31": "4UEeZ4qNExDrp72X41HnHQuPiwd1M73mrT48tKKtJ2rUbahZmhLov7AXw9GKeAEPVr1AKtF4hZTJdnXCcjbn15sw",
  "key32": "HhYJHXs14717DDTPfoc5L36gxJyVmYASGEssjyEMkdogot2CD1EQmz8amg1wwxvgpEoGbYVCB49A5CnmrbDfUsK",
  "key33": "dhjY3erpeNMdCoG5thztZq57KN5DSnXzPBz13ZE6v6ud9JZL89SnNdiN8NHAGtnBNz51oHJdeYRTUsNnFAGxBoq",
  "key34": "2M1F51qT3EvpMJPLRWzLDaQxZ16ueJFWnNkAcjxf52z7byQWZRpvmzLjHZ8XEWe3v9qbap2Coo2bgNDhnaRzfQEP"
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
