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
    "4RY1xWusHmmrYA2vDRJ3yqGgFv66s1XVq7m41KYpNvfTwH9aw6AwfCb1G7LLJvbrMfnWpT2zR9NBRBwD1Q2PDyaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56c5UqjGmShwLjBzsxCtoaHjz4Rj6UEH6TEER3GMR2FnY4qTMNs9t4TABTUbwX2zSU4PJst1YW2WP5q3GTD91jbk",
  "key1": "4Fj32wAHjrTecJThziWPCoHfD6mFkNYY3BpCTP6eKJ2MFjDUsbmdhQfdbJtGsHfUnPsCKHThXPD18BogRubzCoxX",
  "key2": "5bNrBDZJajssgefTqVQH42rize67bLyJdzq1BDhptTVR9Q6wVtCxwEUL2sDMwq4NQkCei5z44zcuzPV2XGaac1ix",
  "key3": "3xtf1K28B72qkhRngiU7z5qH7VynmvyePTw5vmrn5yK3e5er3NvR1L74YjWvjxAWJrk4aQKKyY1F3HwsaUM3Adko",
  "key4": "5H7z49RVxd2345henwpSuRRQtDVXaRZ5SdKsTppbeAwWd8ga1m51AMxwhtq1gk8GwL1QbxadYL7mTTW6cAi6KNXM",
  "key5": "wve8behaGj3V45tzf3JUAWvYqKJNg4H33jipVeLdaKfnb7kcbsQGDFBkCCCuVUwKX4SYShYkoCKv6Q7sV9RHgRo",
  "key6": "d37mVmujx3wT5eKnpdtVaoX43qWouVwnDc5RQXE5F4pDUfYBMp7tFGLAYhHWMmJpjHbaHVDBSdKePJzjSUzhpm2",
  "key7": "VMvWyAmjyj2uzrEx9y4gkXyq5Sg2EhmtcZbQR1k2WiniQsDxXxhFaiKdD2YmJQvDRFJbru67MvaPFd8ymzErq9a",
  "key8": "vXwzk5Rb1Bxc97DbjH9dRYnKszH3cpCD4bTiUuohcFzTrbNgUQT5AqBJ6AGSS4NACL5ii29mjhJZfrqhGp4t6ze",
  "key9": "q6RBVHZSXgHdpTWbN9qpFGzpwsuckqRHBDbcPLy1GWFq2mwSeckLvbro4jQQKAnsqopCQnjC9PdwsLEfqt4KDPf",
  "key10": "XHjGxjwZcGhMrdNjtqvT1Nnb6zkV8iy4Bd3wokY6y7NZ4hydh38pFmicG6BrxBRWScNkggWF8TtcQWS5A55jaaN",
  "key11": "2eyw8pCbv3qL71fBiQ6grSwCpuVvDH5gE45LkFeRD2QffY9AMZonHqP3WVpJX14womiWQxE1iTUHQAcXTvD5b6gq",
  "key12": "2o2YMtsEurD7F6FkvUjK53r9XEKY5yQhBB59KMv8fdp3uSr7EsJajh4fdNGMYoJPG3zu2mVjvMeAqaEihn2m3mQa",
  "key13": "5NDj1dpSM4GWT19KBSRMBpscHYnKsoz3NHuFuqeY4WCDmaJRAp99VnWXvkGaoW5MHVU2h7L8s8WSuEvM5nBeWMwf",
  "key14": "2bynrXoEndUMsaZHWdXvv8H7zZLS2Mndrb2xcvE5rMW6Ghcqrha8WQ5U4cKmb8ZdNtwSgkk6wd8hnxZwPZVMvBzf",
  "key15": "2NVbAkRB8MbYZm5g9bzW3ycbvnUJZmiZACgGkQo5QHH7HcUJYnT3PtrRUoscwdmujMAsisEdj1Etr9F3j4jNerbw",
  "key16": "3PaDdMxhNYnbWisusMJAqcxAQAMoAYi6XdURNQuN4SAr4tzhgkhpc3nLTUTmoJgwymyrjeXaRyDRsx2WfR2Cqs7D",
  "key17": "33gmt25TajTos2dhw921jM8MLn51GP8Wm8dmSP5kWgkjKAeRvAMyRkwhWxK4prQYiSKCAqzT5wahe2g7CqDjtxoA",
  "key18": "5SM9c2sQA542ig5NpLPKoWMgDiEJ6XXvX53ZAaVHcjm4DQzsJhHMBQXq1qPRF6Fcaym2iX4VKmaL3udsQYhfiWrF",
  "key19": "GD4xrJ6vgFKDixUZ36QNNjoANncancPdzx6uVopuYzCdoHmWPuDNbhxkiLyjbip9jzaPXTLLWr1dd1jaqv54AH5",
  "key20": "4v2aRW2aizPAz7yETzMCt3PH6mtmuvMS2rxVfRyQo9DTY9FsQuaH3jMLNuzfbCBTSD1ApaaSHx22FEFwhmRCKo1G",
  "key21": "3i2JMcF4xaKso2HPNjw47g4JNrYh1tox4tijAqoVuX8QvioP2k6yvdaeP3XV3EuAidV1VpQzPTMHdVsneT5UPk1D",
  "key22": "4LoTWnkeX424nQFEA1esVAmH3vofjJZ4SWr5THCWuom2QkP39KYgCpLGo69nGXhQ3uxReFp4rNNdd4bYi9rhGYfr",
  "key23": "2WWS2P47xQKYbWXb9QHnDoJyo8thvHgyaFAMJXLJB1DVQA3Wy9XhdUDrjv3oyNViYgQ1Mp5CkgVpkJwiGFMHzbiK",
  "key24": "5K81FLMrdUnzBksixyEfPdnHYLnw2EdNo2rFT9LEHgAL8dX7rQb3AKTWBHBYyAXkv9YfKxBhJppX8QVTyMbStLNi",
  "key25": "NmkD1YEu8V3L3N7CroFeQngUuZ5dcKG5ynG726Fiw6iW5KWfDDrxLMc4Xq4g5kXyPjrKk4ZLZs39eyNVJk5vG76",
  "key26": "5VjRo8pBCv3CVY4fQusQEG6UAgKK2SR4MrVb3RtYWsBB9avXhZ5XZeTbo4MxYjSSdyJtPwkU7Qhm1NVvYSdPu8bg",
  "key27": "K9iQpu8VsGGAkPT832PaXhYg1RpX9XE7ZQeuxqgWGHiAq9VBZU9PMpuUA9QikYWmH3URa4XK67teD156zZ6rjcK",
  "key28": "4trG3zmLD6ErKQWr9nczc3YUZw5cZRDRNoi3cy62zwB5MFrr6VkDSbcvVATiAE5wrn8KCSYQyptJRQR6tcDeECNE",
  "key29": "5Ly9rgVfMJ9rbHGKJMGKmtVWPNb8WsTDXPJ6QFsWowKrDFEgchPREjTHcfmLBoWsDJ58KyEo7Tzp3hoLHEobLoHW",
  "key30": "2sicDJAwkkEThMe7JpRXuPtcDM8U8zQ49o15du6iU5NW7ne49m35HX9zWAJHK8TTo7GqhB6eWpsJTKaT8kkjaMun",
  "key31": "4UABK5GqL9YoLoTHxPjoU7rC9DYqjznqUC7iQq1ca1GALDkwpaawmkgN3he2btWK1LdZYhP2hENCZtrkTGcHAQUU",
  "key32": "3tbCNzunzBZZqe5gbGst6nQqRibNwQfBbk1boe3hV2RRVKzPi4k5WvUnZWJd78CPH5fJpnx5Z5pqVALKXJUUcE1a"
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
