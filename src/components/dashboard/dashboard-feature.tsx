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
    "3quNve2sxtQMTvswFxaWxmQTThsScBLkXisqVTkEMXJBnsTAK7cVgq2BV5eAL6hbc2wkVMmo9QUECJuyze341NZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4isG1UPYtAM8SvpucqaHE4maUUn431b8GLzjRPKEtgZYtbcDH6NxW1wgcg77PPY7Ybkfg2x4Em43sgtJ8dYQAmwQ",
  "key1": "4HBd5CZb4E5tWhaaUCxV33Hfa2d9SuYXTpdwAy9V4eL7pYdaurmYDxJehqL2mQFGkPVs2oUciv1TGLxZTNNGMype",
  "key2": "39p74PheC7imfTDPVa4StHzn3VSuzqxpi7nr64dV59tzpBVPsrAdCkTDxt9zsUeoPTpKeCctZJcayyonCztEvTqZ",
  "key3": "5ZQBZCYNc443oAzrgbfN47KHjoPr5fzRXbLdEGs6rsgb92EFhsfCqqb4VTNScFfKhHQt9DrLXBhyR4XFM78pM1hG",
  "key4": "FgopYJK7yec3MZCERRjMkZsCceub8yBeFFKYbjskh92HECLaEKrjvmgJA7ojHwjRt34VzLM5nmcoDj1Eet3MJZc",
  "key5": "dyykhzNbKNqChHPCQR8oKqd3N7kEnwr4yfJZ1ZdM6Aquh9dqRU7LdJzWeRSJhmYarxpTfydLxW1QETXmifWjTNL",
  "key6": "wQotR53TW3CWR6PbWtsLXCum6AuvWsozp7oHokePhM9uFVVxUYbuvLzckLY9xdN1QJfNKjvnz77EaosSAFuh8EV",
  "key7": "R5xcB6s7B3hhrSWcd6YWZGU6RqpTMHHGkzwt697wjLmAj3gbEAYykWmgzSes41TFSmeeqeHYqU1pj9bTKiMb9fM",
  "key8": "2XTEoz5X1xhbRTC9Ry2E6tuyFaF2gNPPpCdSzd7Tpp9u7Yxb4Lu3sykDZo9y2RdT4aHHe8gKwk4VXFFdVmZwU7oo",
  "key9": "3DNSBy1uF24exUQeHERNqH3YwdWDe72Dhh8UmWJG4heLdCmXi4iNJCceQEzYxcmJmrkLgUG8SoAuQFrDH2KwwTSL",
  "key10": "2PcKXrzesC56amWgFsWBaEu2qsvz4XcE2RkLQ4otVTeq1v18ESuCwMQHoEoA8k2zfMB5gFGF7z2YVzEJHV5ZdEt7",
  "key11": "3guimCBT6DjafWM8AcF92oA2VVKZzCrsy1VVKoGYZXEPs6mmDQw4TS8vf6gbrjH4j5pEJj9m75gVauJzzzBurnCK",
  "key12": "e5C9Fefdb8JSEi1cNfv8mTzcraveD9Tk5KX1bzV8zKpLnd3BnBWqBJx3YVSzcnh1td8WnHMAJ25z6TDVNB8f3Ge",
  "key13": "67cbD3BFavZeuqbNNQ7PbCxeNoy9MK7hYNHbn8TodLocejT4veN6cpUJFrYGfi5zmpj2phA3faRtEmHo1EmLTzfz",
  "key14": "63AUnEkgs22oHB4FcfSzbE5ypMC5LLAKYT5ECDpPxag4rvtYwob2GvzYCVp66b5sFVNcQaH5TTfH4E97cA1LRxFB",
  "key15": "9H5YMH8RbtZvDB8n4vG3dQf7jstBoQHgb7HgrL8fXq5oJnaz1Fov8AGb6fwewii6x1knSQ2hHCzAgw5iNfxpXfy",
  "key16": "3trbv7tkRaGSTbp5Ud8AgvH67hbFHN2k2cgJKXi9Wjcc4M6Vxmn6tc6R12UC9e247RQpcJqCc6Hqu1S8PfjondcF",
  "key17": "2ufrEoaKnTUmKiXLWdncap7GZAu3MChtbq3oKrXm4TtbaS2fWQoXKhTBwey4eVg6DWgiooP5jXnZrFSzRmcTCz2u",
  "key18": "3KX27f5axpDPQdzUr3ozdZb29mTSVF44hNufzGtSNcyhLFjwMCt6kajyMj9uan1fWZoS7xGwNHYRJTAbjrRHzRxw",
  "key19": "VUKoZqz3NVB85YHnFed7YaS2uoK6UHFSEx1e4wfoEiQwZJAvWLcoNn3EVs9vwLqaU9mXdijv45YGwsLUxftPjy6",
  "key20": "3kjoHAJRbWJJQ7ApBXupvrHjPDCDJim3fLbwu9hKtha51RdWXpPrJHjW7oPg8p9AJQjSFUt9rNjm9jNhtxkH7pNd",
  "key21": "42KmemELWivxpbSNbyzpayRi1zpdCkiKFnHzKYVquAL5Kqm1j3Z91nxMiaAnW9B7hdsuAGPa9fJ2sh7KH1GVrjb4",
  "key22": "4VJPUtZ2Sd6YRet2C2nKccayrkydeMgU1qnj6TtqWZZiY6gh9SSgRQXy6TyF55J8bbsWdhY5mADJ9M8txQAGDYp1",
  "key23": "3UBmpeyU31bGPHK1HgWL28P23t4LKvjbwo34H9BMSVXssNjhb6Qy5PhnXPXbHbQRg1yaq9HNDGWY1GU4Jp98eo2x",
  "key24": "5sESaWQBJTgqVWZAoTWadMAYtLvDpoBXYThiaD1A9nnZPH6ao4PAAawiC771F6qq7Lyx5KNLhJxXtJj7bEdyKGcX",
  "key25": "475eAzZrdrH9Mokn7hisSXp1RpwwQgNfU8vZpZkKq8qEX8SZChu78rEgHRxUw5PkNQWiKNEcEgU9gaoyTmyoPC2Q",
  "key26": "3byRwJgEFLN7AZXbvYenWoVDRMZa85aPDkyHRuHK2s4569YpDvKATPMLy4vvFDc3ZGzgyuHMoYXscHDve8tkQuWT",
  "key27": "2HTZvsGBzieteMmc62vtvq3u98ZkVicvabKrqQuHJavJPevTtBi9ZCnrwKUmrpqYryMJTySomAxmQdFfe6Fjv4RG",
  "key28": "3Rox3hVUWuUhsyMtNzbCYswXCWhc3N8FNUMKf7cnpm3SADXSxAEE92G3WwSuvWHBCiVX1Pcpufpkm4qm8xUjeP2a",
  "key29": "3kNPTJ2LysKVvc5JfQVK2FQMqBncSg7J9DV1Wnn8MPmeHDtqH5T5JWn8m5RJL77TqgA4ZfPS6WXJXnsyX15bd31z",
  "key30": "3zcNsBGdJyzV9qAGFWKadW4tnjUDPtSJMTGtkxTsP2uNiv62zvpa23mw4KCUNXn32XdF1kJ31GWBuW1mQxJ4os1Z",
  "key31": "3yDq3YfGVnjxi6Yrvqgaxe8UiAXWepv5ZeKWMwVccpvr8tnuD6qVzMx9Gfb5a7SxAZ3eBQWgbmJeYBSxtisHf46L",
  "key32": "3VP6W2SKJkuzaDVUhKBK7kPVkyi9XDCbqj1LcgGBnTCJhN5Nz3XoQ7TH3qGb15kGK9b7teF1oCQKx4HC1aSU9UAM",
  "key33": "5A1cbG5LcjHFRQRhRDfeRJzb76L1PbCaaMC152wD2EAMiAFg1PJb8m7tNbG4BsR1x1HwpPqS2UBQSQGybec51vAq",
  "key34": "5Wh5xWxC9JCSDfhNKxedMUtLRPQpKzNTLwFijEEdFyqYwWqE9wtdWMnjQwJ5qG8n9wvhtiEP3ZnnS8aDDeRPPXP4",
  "key35": "2kF4Em1Heqti4Tbe8BxjxRWi8AnpcaSoDwdX55kuDsXwCmreUdNyMxscDdLuyUoxibEJo2mfXoS7ZZ9NLBmndXYY",
  "key36": "2Cd4T5p8bzRRjWu5AmeTJqNMSMVbs4brX1M2XvU5hyMHsb2GNiEHUWZeVCw9NTmpwouzh3jjEZq3EBC5kZx8rMhK",
  "key37": "yFgTqgfuBPyr97uzMwkwbBNsGCD2GdBa3rw3REjZakePFQx3n2sb1vUwGoPYqdBM89WccBSopvr42vXvnpDwfC4",
  "key38": "5AuZYCVUx1xbvz5GZiQqSB3TcGmeNXPZPy239zJfcmMfSeiMeoudQr5hJWWK63eYHrqAr221ovsTM8a9pooHn4Va",
  "key39": "47zwFERm2bL3RCxEKxX2n4sPfrVDhqbpDC2qQnYgfLnDzjFrrhJjbTU419PB2rw7Sa6YPYVESZ7uLcr1mLc8cZRe",
  "key40": "7NQrYB7L8NPkNPKNYhxdSMTrXbV2uQY27auKCxUV1fYiqQoUxnqfS2BoKeEpHzHraCafqGdAZi9eEQ36CJWPwEt",
  "key41": "4Nn5nHgVPR2vH9JVuehYbHgVcaXrD69XUgLPPHS2goi9XghPZS2ehh1NTzQFoGi3w3du6t2BizosX4DY9J6LyY2V",
  "key42": "3oCk8UNgtyAvUWc3JcQ9B5fewWtmPAm9rd9LZ6EkvgwprjxQv4Hm49SAg8D3xLY1DUSaGTK7y5TqN6Y132Xv7cQv",
  "key43": "2iJVUHmB95CmbGJHY6EWcw7EMEr5pDnCmRo265xHwGuB34sH9SRYBn5ZQno4CKvAjpQdz6KDwtwP8NcCBP6EM1hg",
  "key44": "oJ2ea3PZyiYKPvuWQVB3k9KAK1mnoiP6P7n6LSbEyRJUvBNX5oYKxy5ysCvdb9wiMrMgRjnYZezEVK8zsfSQYtU",
  "key45": "3jaDZgKHPms2xomFKPGaZ9X8QJTmEqAHx75Uo8BkxUP69MTQfqASPWNv8jC9niaWXjessDr1HuqiAhNhXQWuq7fF",
  "key46": "4te8VCisyGxWVUAFERAPKvcjAd2X6ZMwDqxtqnYSv7tC9eMDrFAeoXt9EDUGViZTTwCXAcRqTLqCwfJVrfteMih9",
  "key47": "3H9bhbKPt1nHLG7TKCcj9MndWT8VVSSJiAy9pQ4RzpiTqy3SfjzGeSSnsGawSYjx2bgZiDcLXdHdPZYPvdD7VW6x"
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
