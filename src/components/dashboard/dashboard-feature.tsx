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
    "2YTfsTA5Eh3mMHCikFeZLEzSfzABp5XoAPaAw9HFJpPTe2o5FWrHmoPoLFQ5zPAL2gBo59pLqceZCL4BdeUZ27JP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pgniZVsirxxEDzXADSRfrQQd4aaPRH9cjZwvjFyV7q3Xi1bwLZYmY7V1SKnjiNjgPMRzTj1sNfzfehwrZboqDYT",
  "key1": "2NFv7xm3dutT5CXWmvDqqA8WHSxL5BCnh28Za2RB9Qrpz6JRChDzu8YYNvB6pyaDXH5BxREy3L7N11X3TKEDTBJ6",
  "key2": "52wKhrJaGTefYUya2zXRQ8anWQpH4aWM9rNYEFLi3fAfV9TfmUrd7nhudwQCWtm9iDxZfAMeV448hcviuEvs3ki",
  "key3": "4vFwufTNfbbxD5WFjZjf1y6UkBnb1Sr8KNDYvUiCBEasqtS2etLieo1cWqoTViMqUf83bgcLaJ5DvUpnteRuGhyV",
  "key4": "5R5gUrLPpD6ez8W6U6oSVw3yDvZZ4dWD2B3hpK4yCsj8YgHBgiTzfdKcv2dgKAPHQUc95YwxsfDFQ6A92T8A1iAh",
  "key5": "UB2MKUqEBZU4t2htMBLvdJztftDifYQE9FgKvK3Puqcxaq6ojcmvcV498kayBiryKZXBo4XSwJVvtNaoWQzu7GL",
  "key6": "4EZPxUNktTjfjDP1w1hg8jLxrWd6trSXqn3mRNcPhBC7QRNUJMEJ5Sodt8kwwuc376KMyNYbk9DiP7dDRW9ci4Kj",
  "key7": "39ABXEXGbdKDGem7QuuExHq1SwM4HCj9DJ6hNWXn327Ed4ApzNDPXi48KrfcAa7FAGUN5ARrCKPKi6W9sU6jwHtp",
  "key8": "231NUWfNG1NdFm3VaVtjhWeEsX4ZNzdTEZBZcMiww1ypoaoi7c4h2EpvGVYe8ZfQj9ZcfztJhwA8dmE1nvKH3bvK",
  "key9": "5gozQzvaTYg5LiPXiMq3azkfHqJEzBygwFmaNsW4oFKekzcBuvB7RF8QEawernmV5t3u5HBnZxbmxfcsUHAsom2P",
  "key10": "2xYZ3FqFci3frZ2ZNAqwCntWBVJYYAqEwKFmrcHfjoBLeF95KqY3zXKTtXDUgrAXW5Gsardn3ad1skVS6RjNrniQ",
  "key11": "3B2uZJK3GaHEHH1DQfuVGyZ7kqno4K2XWbqhnGpf9mqMa5WK7pvsubqcTx6uszb1kgRMrkoDmjRJi2jkheyWuN6A",
  "key12": "k1BZGwk6k9RPorQx2JGzQuQgxit24yzoW5oWtC95tSBGg78yftgjWbSdbn2kSFkbaFXWHFtESB95sbpWQxoPLcP",
  "key13": "4QbNHRR6YCfcX82K7yuPEvYmo1UJpkMZNUotHftqsRYp1VH8jkDTjG4cyFR773TNxCALx2TbgcKkWfMvXWgGZFkN",
  "key14": "hJPViACyYPZyzQxBR2Ufa7H2LphfiS8Bs5WcxBcbLqHpkgceer5T46MW8fhHmW32C88sWou2vJdALNZTD3xGytG",
  "key15": "4gAu6TGX5e5zv3u18qgDJ2F1a9p7gNQJ4Aang3iP3sdwrkEfKV4tWKX7mrUDPwY2aND4wazzRK4Ev4BCcoZH55Ui",
  "key16": "5ie3LXdfBtS9EH4Agxp3CNaag1GPPW4XHuDcda5V3AvjKD6dQG4yzHoqFAjHFut8Vi9FFq7aV5yAfsHUpnuqvwLL",
  "key17": "AtriAPR4YPQfKKEELXhUiwPju1qMiwwG7R14eZugfcJZQzEWFapqfsKQFFjCVCuSGif7dYFs4jJa2d8gVqFNzJK",
  "key18": "4vxxhyxZSKJdLRHkJ61VT9tivdFC6398LntXFchrAzv4siukPtwQXqQLffwgQiVvRH9ZJNhiqW7ZUN138XNoZtat",
  "key19": "4jEKYNtSVta7mAvt3eakB2omQ8cJyJ6Wi8YtSAeop4oVkrgpdwsExG6H8ofAW7mammaxBUa82QTdUYr7WnGT7u9V",
  "key20": "3wLBCuVHFh3h59SjDkcyLooMFRu9AdpJoCzrPkjnDEe5kGSDtc4maXBBH7XMESusuXxmcRjXczMu4hTYHtSDP5Dk",
  "key21": "67VbDgu3fkXbiYjzRBCSTnwxowYHTLbjaX4mGafMQwrAZxN6nRRBZ4BBTUwMxf6ivYNMuvqCcHHCXxchdTsyV2kd",
  "key22": "4VMPeCQeQynHgGKRjPX94n3CqcBtfmUSpU3jDdCqJrS8o1R3borMF4bcF5ivKJWhtp6k9AQaTPU6sTzF23b8HrNx",
  "key23": "51FecV4BmPGzCMQvaqyfMXaxSYmTVP6dM6GxS9htxsM8L8vBuMjYysLjW64Mc33KZHtDXKqomPpty3uPkTVhZpsb",
  "key24": "NAiqHrMwM5uuntrCaMyzbNMFZMmo1nxZ1kjNQusUf9brPap6SNucWtk8w3tzy9q7CHfNi77FSLGNnVzZDsgLU9N",
  "key25": "4kLZkFsLqeAHj37fbZQB2UsC17uJYsPCSrro3wnwPtqqEXxmfMpbsbEwMgxSbr81Qoo4DagUeWiAeAYSkZo34MWt",
  "key26": "3X45WBSwywW7MZb7VbaZzK1q1vP2j17ByW6j4UTPtJgYPubADLWLLtK9FHEaB572J1QqxsLhU1TyByeNLZn2sxS4",
  "key27": "2zkkNfvACV8T2LvHEhBN8te4ExmvNQrMoGZvKoFKQWsZiHu44ZGfrATdR8PL9vjAwmK9LRiDVzGd9Yn1vicBPNPe",
  "key28": "4fb13KuTcowpDah9KtqThyJAW4bGSs6gPe87evoKBHWpLNyWkcTPNWnuwMfAZFd8wKJvbgenRxqxXgGGyGz14HsX",
  "key29": "2kNyTB1aPkQwPQ2wp3ySmWCoLy5BoB7WQ2doDQc1PpXphQyXyrKGH2LsepQHMKvgx4Qfn3cYTbq7vg9x46gbwpkp",
  "key30": "3UNDxwrNLd1njrq4SJEJovrxfzTExFUXBqZ3XiTTqmnE9z8n46CxAv7n28AJH7zbgLPK273igAZ1GqfPvi4LPT5s",
  "key31": "4H3bfWsmFQ1yEB3dfmFQUsaXiS8qS79YoEXnSfZu37Suf2DDupPWRHJsdcekMNE2FsifsgXXNnceXbb3m3H3ihA2",
  "key32": "dGvbhqzMoGRRhqGFSUveUXAk2RxJ77te5Sa7PZjEHb6GCGp1xbkJXqJ9HCCBdjNwDi7Pp4xCNWhPJshTUjYf4FS",
  "key33": "55KEoqDL4GnjAsCSdnft1WpF7Gx3eiVAxRLoUA5TLnXrA4cMm59Mr3SWZ13SdHQRSP34NaiUjwpkpvjnVw7WDdnQ",
  "key34": "58cBtqtGRKZG92gV9jKVdwQxu73dUGsbCZ5R9F2E3k7dCjeNMvgtDGGwpQ7UaMp9LYX4pMgouPa4J7oSv4fXZERB",
  "key35": "5Y9C3vKw5RKyjtqwi4hsLoMTsHHcy9TiHcfSdMXM5bwnxT3xMiZnNd9HuyMstgf8qgsgxizn1BFhr5ay71Faw6hQ",
  "key36": "38yR6SWZEJq61McxbJfeJTjTWVjMv7My9kTY4cjg6BjFMmtyetJfrYo5cziDj5KUKVwQCH3parzjY71xXpKxQrZW",
  "key37": "5YCRN5YH7d6TQH8Wru12xSPCzk99eaP8up7LLfhApTTdV4wanhbztd1yVdKv7A7yZ6VALJEyv1QSibEDeTWWw61B",
  "key38": "4fu8SiaVFMTcWiGrrUrhe8PMjCfcH728g2TRYZ8tavCou3zRvxxsVbHrNTxdsMwUmkKw5qoPA4rYASFhg7VbLkRf",
  "key39": "4NCGaj4yyArSY3QoRtgnXEGHT6XGF4PPawFbnCXA1UEMo1HsxuMeGvcwaoE5svdom86u8qnF9h6efjPU3tBtqDST",
  "key40": "2rXAVXFmta7vUnVxFAuw7CUhVEtbstxxGsWM2zhyAZKYXtU98wqJcRk2gGmYrLFytVfVz9T6ZKA395ejdZLD1zBR",
  "key41": "3Yhvotm1Jwn4cyyfse42dL89i5hG13FuPdTjfH6i3Tap6orjNB5wr3im8AZpaJqwXwpf6hbeKpoa3j5QtL6pMGhy",
  "key42": "66NvGGp6VR7vJ2jFfrzrPez21c34BiRWiGVM8DuoSYZ6rYQL7wwS7RpfF9kRCBH8Uu6cQsMXGHtmtmLRSsguQs1N",
  "key43": "2Cxi2vEtF1TVq2udLkeBG1TWuXfEZqQtR6oChYVUN9Ywzgx44msP9dgp57EZeGcX5nwJcPiRPqH4j1wfxUUoNoQo",
  "key44": "eDAhJoWGvrFVKjPNq687Hk4huHe2qtkvTCZgwm9HBHZZmT5Vd4eiYvJnBT5HULhLBGtWYR73RmPTM6ztwgsRUXh",
  "key45": "2B6jqXm5hF32DpXGDpZ6i3Tk9ug3UmGX4QFdM5psyVCWeYMYdrqRq9iYfFMdd1JMqVcjSKHfaCogT1QEgv8Q2sy5",
  "key46": "48EABepowuFd3bteuieJfiDQocUKN5fZdXWoTFpWeydAPosYa7gJkPpEbsyjE4edbdRQKCge7VcPsmxNcHCU7pj4"
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
