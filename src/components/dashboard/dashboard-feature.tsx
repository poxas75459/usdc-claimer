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
    "4faP7zbDGWV9ZaC9k3KMcU8Dei8joC8qAZU3Jdu2JRfDzYAtgxyv6TPoiyoSHqUsCJiyxrDJZbir7ZxbpbqJskG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GGgsDgvgwQmAPfu7eEFFnGvS6GnXoy5L6pN9mDNeEU4BmT5udjQCAkxrnRExz9dqWqKPmaWTRtqBgkkjncKUfHL",
  "key1": "XcSX33qiw4PM4uaT24c5wnzP3Z9g1m8fCaEpKAyBkQfRPjzRXgMyqckEHTy71baGnnJiU2t9izKJFbL9qRANL8R",
  "key2": "31Xf4G385ZCS9oZLCGdfZCYbWCzoLBUoRwz42Sd4cUZAKrzETTanZU1AfgNiAhEv5ndMr6NR1fScRmPGCrk1cF9t",
  "key3": "5rwz1U1BvmcL28Hz9SpUxLS4N1pdazTvFqsGub873E55nBDkno2m2n4fqJaP7Bg4Rfexfd8cDbBMTFGeJWbDA9oa",
  "key4": "5JbuiH6tTiTNR6MFV37EPefnpzuLb4UtRbqGZwAm2kquHSDV7Zh17fbSnPH5NXcM6W58ZwaLohMHsUQHgR4jYBds",
  "key5": "5LXTB7mwzUGueoT4wpbP2ksmiAbkKZy4LDCquw4re4mFsNTiPynUf2M6g7ohBD2upPy48WzD4gq33wtZ7eC53j3P",
  "key6": "5svwdwecKzR2QqaEnTLiFZ5LAS3DNstCyJHdKDGMbkjpcDPAZWMppnQxeR4BdQkJDdF1JLcNbqyTsQRkMNduPL1M",
  "key7": "4NTX255PY7LLbVDsJRgpKHinjZzJrCDEEUkPKtHXWA6QNwb4hTzpavvoUrdcgipHWJ6PDdSpkXMKnfK8E8znPqdP",
  "key8": "3jF8JwWi5BdhAhX1rA48QixaAUKYhHPxfHjRUA2me4FUY1fbJvbVmdgzVohpSdxG75q36iQUC7ffmEAReQNeTeiE",
  "key9": "5jLgHTvLKth5WAQqbZqXT78aErW6uSm74RVvDFJAwV6yLjhuKdFzw5ePqZ121QiGRGhUds8ySqHwz1dKro3oun4i",
  "key10": "azRNSyWRwyADTzJ3wormGhCzvTzFsvAYXCh3ffHZBTTkdfM44TzzYSojoic6W67X1kFbNs3JpHAd4m1BN84iexY",
  "key11": "3S4Qzmd4g3SKU4sfDPdm4ZsH7fuWjUTrs56CBSn8HhAEGW38Q5ikFQ4eVFTw1HjeAFqjgcXB69YKAjgoL1R5Z1PD",
  "key12": "46kTk9QhNwC4DAC2gr74yTjmeRZvYgMXDLErX3FQ7AgrVXSfVt1CXHAPTbMjwu1DygehVBvbRQ1U4o2pXVhbdBbR",
  "key13": "5fyCJurs2A4hyrJnPwLFUWxraj6iVQeZMzAAqXaZmnKcBSQu7mYDefrivTqGFNfUeK6Cko8f7fG2FXDS2szPBefj",
  "key14": "2w5xPRTmDgiGwms882qLyrL79UEuZgF6Yb6XEy529Wty2xTXbpAB3AD3yFNKsP74A2Wa53nZBcLhDKeWiLuvg72K",
  "key15": "2PLPhnDGrAeGx2PJ1BwE8BiEsMVSDxMXG6sdwsb5DKNvcTN3SEtoLSNAZeKprY7oDJA7isD9ztDVxcUxXixwZhfz",
  "key16": "2UxM1Buk7JQ68GLnKcQ3PXhjKD7zDV92Vz7ZDQMVKkqZAKFu45wsbAScAUZn5XbtnpaWtNMLhgbrk6AakXt96jMA",
  "key17": "4fDhSB8jXwy95YaASSTjMUhzjDEVyCFPiMkfJJqLTaTBcnsSHtJigdaux4yjCpHnxAquAkHvq1vJtNxp1CVe9pvB",
  "key18": "2qbJ6kawjHRX4JXGZFocMQJat5rdk9PP4UUBEHepYdeiYxYH1Dshr8YCkAyNnKmmL6wNmPwcr1E8jARvGHHpewau",
  "key19": "41F4rSqKXwrBTVdchm5upAXdwXFkJKR3e7QPDqEgRh6NyFgxNvvW7eFc26E5bYQ6MEvYUF9mn9VRaKviEbMTV6Xw",
  "key20": "3J9of1JJzHSiGyhBmUGf94caJDZnyeKN1CF6FpxKvegMo7p28DBMS4io3Ay6SbWzMmkHnvzbLyRTd4VXRVMiDTHC",
  "key21": "5sRimWwFRStuvKpr6rDA3iMKyEQJKJYLsGgGz74eBZQeCTgCGvMC6Uy6bFZJTnMhPzTM8GNVddbCYENFTGPXh1NE",
  "key22": "oYVYX1KbCLZweNuzmZwz6gML389bR78xDsj9aAYMdovKDpfKhfbtnGW1gMK5fWi5agZUfW9dcGAT5vYLCfF5CNA",
  "key23": "3zz158ZFaGozBfEcEn2ZDZeNcCrPU3EbuzZ7BA2HXA4YVzGzoSXMdw7yxYf7ZXWJbX1UmQ4HQmqKpeQgTxeN8Z98",
  "key24": "3bomo5LafLUEPRJ1SSyZLZnG9QH6u5ecVAPyszfEC2Y7mE2g5MSmURQ7UnM6kiUgw1Jg9WWnGXQ8DKp95MXgdD45",
  "key25": "2sxChi8Ew8r9RT9Vru93sHJfkVgPbQFnsNAnemUnY8UobnYUiEmQQXLcKjsLP1vq8iC5obwHUm2JceqYHdu5iL4U",
  "key26": "3E31zQeGnK4dy85dxk28zBzaFbxBLv9DZCWgr24y1rwzd1BudJGqgDtRwMr9WLV4R9dg8N6ss9vbHF4BYnGZQ2ND",
  "key27": "2TDJaAHxtNjvdnBMnXkWnoHagumQmKV6kfY3MAU3UY5TNv9QaZA83jvu1Sf58Cf3fjTMwwhpeAqCj4JFS5t7tebM",
  "key28": "2eRJdqhQ15DFQpT29anDSPkvibxPG6PFQVAK4UkioQL7aALWqkonb6r5wGxV6V39aLNfYrfbMDfJiPaFGSundvXa",
  "key29": "62K3giBzubMCA4cQHYSV4x7k9Lb2HVr6D8xuuodnqDGFHRc25i49aCm3ehVmeTgjn7zAWmQvzkFC38FUNLW2Wgns",
  "key30": "4FPo72MduQkrjXAzPJiMx6bNeznRWJEcxC9aoTtnmWjR9fs7yeaoKPgNFFSfccqo6YwLYuX117mKSneaVbT4HcL4",
  "key31": "2dGWoB9szdeocde21DviaeRVBoqNLz4YB6WxEJxAVFgt8jbai35cdbsNzXWhTu1Fp1fLpnjYx3QNWWfp9SHkDhTU",
  "key32": "2ncG91f9j8c98YdY6D2urJ8LqTeL2rgqcDDffE8MPKwtezaqw1Ytu9njvpioXyhmGxR3KykvJ7n3Jaue2aPFqgF2",
  "key33": "zW8m9qKjFHHBXBt71YMQ5d9oCW1JgKxumDXNfuFCdDrKfXbMTDHREidCaPrsB7eLemJnJ6xbhPu6sY1ZZrjLxhu",
  "key34": "k5cegT5mLWYbBFjii12oeb8ASTwHXn8wdZn1FUo4NFrdB7tYSvYQu73oKMuhLCTbJidfDwqp14RhQavKPJ1dxSi",
  "key35": "4GoyXyftufj9tEEyotZgsziW6ZhNxAff1PcxDL6s73PH5mvJYcEkYvRjw98pKYkTn4417sXMPJzVDAjDgcCcUdJS",
  "key36": "3N5aYPnnyrzc4PfGpn7QQgmp1S5JtkJK6d27omZVbThRnQsugLgZXNxxVzdn198LvVCKZfgRr6Usn2nWDuJLSa6Y",
  "key37": "2jQVgAAt76DLZ3XZSzKkwtPFLHGehaePKcZizpRjqL7BWoFfBqn3yP9p2qUNuE5XobDeDH6vztcpx7MXZNjj8UQM",
  "key38": "vUeGjdTFZdSTyQxMtLtPtcV43S4zyu2hSQgLsiE1sJAHRFo8Z8qx6UgammeAKx52zjTpMhp2pjNrB4b5g42gSsq",
  "key39": "5f77T919JHXQw2xHWM756Z1ieEYXpKon6xZ1Z4HxtvRxbfR7tmUipUHfEcqm3szD3n948BUw9hRVTXij4KRqKhTT",
  "key40": "3QSe52U9Adjbn1sMNBUJLmQ8GWWu5MDruiEoVCKC39kWnkxZtMK7FD6vzB7Dhcho76TJhSTYANW8TAzbHpxps7vR",
  "key41": "5hg1pnUgN9q7pdKarUZGqociQcgevCEkgLr9ZiiNjRR3Tfv4caAELu3dicRHW52pJb74st6SxtNUW4aGbFBSgUjQ",
  "key42": "2CWcQW4tCYhkgMT6uoV8bhCjrfUpWxNhZjPa3fdUzfYxRo8SkajyvTJdWnJqrPgGzQmf562Ej4AQ6XQUk8nBwLq7",
  "key43": "3JHqHWPctTBFqu8PJ1qqfLJFRrXP54XCHniGFHZWimMXsQwBPRL4mRFdkNH94vPJJkTNncPnuyi8L6NDfSbpKjD7",
  "key44": "xFSRi2kwfscDXjLeyrRU4ukNScXLRuYMckXZ4i2EvriKtChF7t5srnpBgXWbzvdRY4xEwB9BdLWyZFzbmDG9neN",
  "key45": "RKnSHGct8CQAZN9dRVUe2Czm1Pc5Jf415u8XxQpnxWiXgJt8drGm2RnSGJXJvYXbEDw47AAbVVEiyCYCeUWQ7QV",
  "key46": "4G2yKGyqqmz6VQfwB18hJjcUgvse3nm4rzif2FTM6Ax3ugyMz31mAUUzKeKPgPBnNJy8xq9cuWQe2NaGvsnSHnH7",
  "key47": "2JazkBju1oLUDvuuech2SGLXbNzP3aFpZEUDuk9q2mdoDpsYZ9gxm6GB45PqjXjVvAP21L1QVEGjC2uzTxtquMHu"
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
