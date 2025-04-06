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
    "4Bkyte6hpVbqUAxSDvMwTwFHcvVD5shejABhfRRzp8bGbGtLU3fzmLF2J9EUMtWQGsniLdj9SYGDt7VTyMDcV1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EBJGDC63xUStRkUcun7w84FukaDx54H8ZHTttGMwMqH1BE7kwJvAgDRHktXEbb22CFxvSRPu72bEzgnYozUy9g",
  "key1": "4phyNeVxcqJuh6yBGwB7wxvmTd7XBt3JrsgDFB5VpNg68WezBz3DVTzKGRWxiNsdQVgEJaDXWtX7Dowqki9Z9Hy6",
  "key2": "3suEzGz1CwcbW2v38JNGgVUzA5niKXcDYLSSjek1oJ6LVbCeEiUepYwohhGQBkhcAbUggb5XCa3EXdxyVriB3zLH",
  "key3": "5F99q1b1AU3dnoveYmYsCT85gpsg56XCNypc3GNfQyM5ZsdnxvhyAoPmVg8PiRJpWUsMfKEvzL1rRMrjMsioa7Q6",
  "key4": "TkQZaWZJMSrgk4LDdPba9bmPA1GFjW2DJkq4A7dVmanMtzYbzCBfLmBVRuHtMCNQnZHg2DETpgrVf31Prp2WxRK",
  "key5": "5QGWWWkr2j3ZXBErzzLBhCaCicZAGdyU8UcDvQzRtdzJhekgdWXCejpj6fT3hWj9y2htA5qjotcxyySo6p8xUDcJ",
  "key6": "bszTR5YoWAyaDKMBNKkojN89cARtZuLTA9rTEhLb4WYRDLTU3VFr3CHbJuiPp8w9oZKjP2tnpMxB9VQ3oQmn1Pm",
  "key7": "5nJmwPsH6n1yqDRcwY1pBbCKfW4hgSHtoWoeHJ3pNS7NGf8udtpXTd7M1uycc1baPR5v1AYfxGjRfbTxxLXM4n3",
  "key8": "YdP3NDbbcr3F19LhtLZMPAWr7zAsMtPPw1nARvSN82CHAZTwD9sCqJnNvUyrztS8wsyuJekfsxz1bDoNpmgKscN",
  "key9": "4fsEoytcQRmhcgjvCYuXT2rxhaviHkTcDvGEzYpNVXNoTEDjDjLyc4W4QXFhhBrd7Ut9p66TQHWjLeWgMWoQvCxn",
  "key10": "JEKfh7zrmKgEZ8CdbdkxZjV1UzJ6CFg1xZhRp67WzdwDpUz3uW1ai64FpEFtfr316v5LBAPuznzm4eQAxuQjVRq",
  "key11": "2hrheBTYpg43WB2Ww8mvjG3iczYXVg83s5Rk1UmXJgp6VU4LB4bWHGefKa6honz3fF9aRXZ5HNZCfCuSzisai6wp",
  "key12": "27R8dBLMm4f3RUo71dEy4hmEwpgFhmpCihJct113sB4FTZABDUPiZuQmFpBdb4CnyP3t6H5BKKCskYYegKqLq7S7",
  "key13": "cVTXJck5EKye8aDMv8Gt4WEGNXXgwKp9d5LcThPsW5ZeZhdBQH4Bq3Y9vP5CskKbohahFd2YjVLH6h9fTUesBUA",
  "key14": "466xU2JTjaDWeCVC4hKebnQzFmrS7X9tUXEgUK455X1dsxJZZLyqXouu1GQ9jBYvybAhkiqEVkLM4pmzAZ6HHYns",
  "key15": "2V9smjA2uEFVS1284oyKMNjhRjsW1S93Z9qr89xXo147qdwRZ6qkYVN3whqEiz35Genw8EQaVtRiPERqppH7XjSY",
  "key16": "qGSe43JjkW8Lpja8wyZZcYxpQknTeXFkpggWhGFRtmjFV4e2oUsBnN3WxrwGogeKv2JX2W8B4n1TzdpJgNtZNUo",
  "key17": "hYHzG9MwTza9f6kmSrFNbFSChyXmqpxeY8doXvkgcvAFG3L7ND9uyRG83kaL6Uykum3iEHzQD3cHkS5Hi4bsz9G",
  "key18": "9vLDss3JtjTiJi3bTkbVGi4ofZ8yphQTgih3baw4i2ifGNGvj56k4nMrnmJaaawWPTuUkUXfzyhkHRjmg6Xt36a",
  "key19": "4AemC7698yJnMQ9w6cKJAMsgiXRURLALF6tZwP5jWk3T1HXVvADzvDPKqAWc9jb2XFm5Z9HzP29wwj9UYvZXQ4CK",
  "key20": "4puBJZcj7TqWtDt3N9xSR3AXPi2A2ZdSiXG1o3fQxVh2wdhN59F7scsSuWRDFHqfCUH1kmZ8WAzoq5b1dvVcuEYA",
  "key21": "3X5FWsu73PNmDJNaxocGBQDcWKYAFQg6UZhvbi5mwqjMykLqugcLwLk8jkawJFN6FVXJRUqBXaiiQ8poHxhbpsvx",
  "key22": "2DYyGcKU7QfN7sHaWFNj4zbTccYqqvm9nAyC7e5nGqfWj1WaNxgtTdW28B4Bv5X2xG9WmQHBeHDbuHgqaQ7yUXHi",
  "key23": "3Qk28WVeNdsDPt1je6SifQyDp37rA433JkF36kP7ozeVPQnaPPpjfwikQb5sTrUyeAEog1w3DWczUaifdeaV8t2Z",
  "key24": "4WvcPXWQ7djag8i7dMunYZaXsbkAycr8CpSHz2eKe5Hsb6pFvgdQwwvpkJjGvvVcnjjcZKnivPFUzGpBnQ2BLJ7D",
  "key25": "3epiumij5YSCsRFJv3UGTTKG1cUniC46v3ULi9RxpHe7jx6jfCNaBWGcSJM4rg5DqdC2GwynVibnVRWcbPCMZdCU",
  "key26": "4NRf3K1EtXZHse96AqNMeisLoFP6D2wk1UCNK3MxMS6ztFa5SCc1JbVYkhePkunChsXfmosG41yFt6wqtzSC6XR9",
  "key27": "wq1PJwDsJmEoMM4HrhhpekH6SaEQc3fn5ktgx2UE2RgHsXqj3vhy3ZBkhjzPTC4rLzfLtPDrbUyJTdnyrBprnQC",
  "key28": "MhaioxVK5wFDxczyVw5KhRTnvzwFg6v2kjpXJs8arQQi2gtNiK4q5kK1pbAnpvzudN8evoAfxMdh2pzSifkf88D",
  "key29": "CPFZiVTDQBroQZWrKK7CHooWdhpQ7g3cpHR9kxxSbaT9BUzuwhPFxXUkV7zqa6J1vFVuwUdKDLzgHYLhSefEt9M",
  "key30": "5NNw4VFAfkyEcN6A6WAy1roByEAHgQ5CZVk6pRUeWu1zwX7SoSn4pJ1ENpmJwsY8KZz36EFgKaVAush1CH9wTKmZ",
  "key31": "5AzspqQneAjcg5sRvuCAgWM8d1HqLpsMttq1ohLBpPaJrHLkKi31kQJKx4iRJsXmqfKHKpyidzDVMGMRcS81hhqv",
  "key32": "5kEM3HcheTamk3E4no9n8tQyoXmqLL8c6DHgPH3Lv6UmwhpA72ca2RP7ka2rvHTvYNFpwtLHo86q4BgP9ytjo8xr",
  "key33": "3TahcKuMDbHYr1dhPNRstVPta5e4e1dMFLKX7RTn9ZsmrLeKN4Mt5Gmah3A6dhZBSZz1JABHa26BboLjUfLzurRK",
  "key34": "4NxA4mS17AS3Jiq7CkBZ2U3QLwKkxcRBXtLYGhvEGj9azPwQvn1HSgiFAEAzAqMF3FYxjPHTyK6vC4ePuA6gMtVQ",
  "key35": "5N75m4oTaSEDMQnfxS1aWSGTDmHienC9nun68L8PCUyHMRnNbQzJhjahZurQBNbKUnEUh6arPRhQDobuqbrceuMh",
  "key36": "3QRGQLWLtV6hoGW3qg1B8TteAMAznbeqGVcgUkrMQc9WXdiVWasmSy7BJGcNzJd21SYK4GTiTcERwNu2p82txrbZ",
  "key37": "4MJ6BG6iPd9zBs7vv7d8VU5GYppRZe28CJ4zFzQ3cNfZYvRSdNXWJguRYM6cqFfaSABAABMaQMPRqm9pxoiv15YL",
  "key38": "m2P6fP6brco5es9fvLgj4zudCpeXQVFTzAWxoMVrdYJ7dUMxVpjkDHRRy5qEWBaTukjX1yZPaqVgSVyfCaEt9Li",
  "key39": "3e56H4TKaNXddB1hFUx5bYo6DwNepYCZQmyhTjRMwwXYNkfr2i6iSaKoo5fBgecRyqxznUxX4vGD4Kiex7bRwWou",
  "key40": "YtDEe2mYA1ndyn1vxPv974APANFQxNN5SCXvfoFcXLcWNutfh7iz8pm1HK5fhxxAdjNobdV23sJJzHVwp4GYx5X",
  "key41": "2h6ZjRTLZrZZuSZ1635SVq9tUTHDbA7RnSgAV5tiVz6MEs8dAMjv3ZhN8UHPFpCEaBhxMQWBMNeS2rimhP6V62UL",
  "key42": "4CKK8xQPsGGJgC1KnYHTQNZcoFmfS2BeJDr7TntYgDb9D8gaXr2GyFWRsPQzNdQvrp4AjtE76ZD6jBSRsr3p28KE",
  "key43": "sDfqtxVGk82Jifphmxgb9cAzti1AX2JP3Vp2q2rAyMBdobhQfCpEaUeBQapodPMEBBFXUq3jF9nvaDZq1b1EPGA",
  "key44": "4Ytvc3YehNcCmDDd9bYN4DQpgxaP4NCFRYHJZCT1Xb6sPu6xBcxTfQFzZCUVqDVcsiqh79bHPuSLj8YnPzqR38wv",
  "key45": "4zpbwjwAvkfdB6QtpJD8BRa4nUh3Hxzbjtgh1huFtt3byeptQ9TAkc35oTPRdqenafhe7okJrg3Dn6BqRHCLZLkL",
  "key46": "4A4S5KjoFZguHhBGiHX9Kb3MMpygnsCFgmJCMvZzCUQrM1YCe7wafmUZA8a6PnxsWv4KWxupK1TqToTDvetcYpDo"
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
