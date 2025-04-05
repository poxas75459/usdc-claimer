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
    "2SY34ZTZD1N97k8rVuanmTaQLCn3kXx7AKFkrL4qPoh7ktGVvuTTWqLTS5SGBXYXQPysGeLhPxJf9WiRiDsX9vn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59dLDADgkeZN2JZxwP8XvRk466otdwwSV1TpfMgvJZFXBsERu5dmNMWCBpWYeifF4uTMvNFAEXLeiXTekaLxv3bB",
  "key1": "56jQpLJMSjT2td6h9dZ1YUUyybopkppUsCiYzdd3gA2gwzfVk1DnLq7kouy9Ar2pz8PgmVCphdUidJYSyZZxs35V",
  "key2": "4RkWu8VqxkamPAHpGebv2XVn73QXHPgN5rH5ENe73wZuiHysCahV6uFnuUDHX5GDUPYwjT4cdGuv1XN3ibp8jE94",
  "key3": "3jonNzv9ybi7zt61ELf3WfaxHVmRTHKAvX9HDShVyNkCSWffieYqmYFD64Pkiezv2pfGPbQefGNbKtTFiaz4yjPu",
  "key4": "4EeJroSeYaB1a82gMkV13Y2Bp7ciNYo9NVDyz33sVLsnfWwwC1w35NtHZNHb7orZaxjYzqtZH5yzHJtp82cFYcqq",
  "key5": "3syXZwzAKEfVR2KpBfDVY2REZ3LP7pPimhHgiMnQVYYa68nTSnL1D1s3HavkEf9L1Wo8MWyUQUGeEngVSCuTnNQa",
  "key6": "3nVTvGejYe9E8vFDpNcskhrLUeYzbhcUeHcdzveitugp57FeMVuAKzSgZxgSqvdtbDQsMS9iFzJCQV7o48qSXkMW",
  "key7": "CyTeFt1DxqXMrZBkDRWzE96rEdNaPqE3ofguy414g8pqDEJ119M8FgW54qmhiGxEkEFUZicf6yiS9G31kUJwT8K",
  "key8": "5hQbdYweQnQFayA2j9DWWkYzZjGqdb25ZkUANWACRNZVTfDCZTYmqNzDZjyR8vGciVU7F9x78Z7EbDJbR32LD23U",
  "key9": "4EKRZ2gLtBQYU3sCTuM65D7JrVffhRjV6ZAjCGUy5RWuy73pVbv3ZD6j9hVrChkLbiF5VBEuywYNHiRvSpQzJr2y",
  "key10": "FyYLx4uKJHm9ZSLsuEsH2C6nyiBBFDgis72iWPEim62EAxcrBE6fqRP5zp7tsjWR6NZpkWC1574E3FBt4vTfybb",
  "key11": "5LKwf1PubFWK64uUzX2hjM99B43jEANY5is6J7Ye2kvoUNoYfuH6wodGh6J3yxCpgn8dJDrGswpiF1ve9JzBAisK",
  "key12": "3LVZAxW4u51hAdaN66evqmLVGeJ1xyCuqTgGHgjgXbXirizmCPys4ast2jvQpbAhttmTjYAvpJhxe7KyFMNwAZDu",
  "key13": "4CNeZo3zqCrxyuoQBg5uuze1HcYxfy1mEPxYZjUetGEeafsLViPRgd1E6nniJgF2JxCZcTufjjZzhjqnQKrMAhg1",
  "key14": "4oJT4bFZVET9ev72cGCCoaVThQoSdpsXtiqmKqbY4YtgaR7XcEZZhcRAsqzLzkzgeM8Bd8TcRvZX1G4MmwKNzLpB",
  "key15": "upoy9FVcRWoD8XJ7UxDxzV3jUFjB6KssWX9z9ezZV48qVsEY3TwPG1wfFFtHSd5qSPPob2dwDKpEwGoi8XLrdji",
  "key16": "4yNgynM53yEW1dRwgh4qA6CzH4iodgY43Y7qe4MzauGSD4DQM2h6dB7o5HQ5jbezAGZe3sVthQksLFaiMvCfnfFL",
  "key17": "PbF5qCR7XXcxRVjhDyWrSvxGkvhbv3fves6QLmzAgrNLvifrGRmWPhsCkjiR7h4wt4UHwxC8myoMMEJsMWNLfJV",
  "key18": "4hikWvXqfhT6UqW4snmcEEmpYro9dBTKnjfvYS6g7Aw6VzWDkG5MZg7rYK1T2WVR8i9Ca419kzbgAaLZq1RXVycz",
  "key19": "3gEpTsLVVrqcx7i2uLrCRrxib34KrnxwAiytbCzvDK8TJCbuRy5oEwoeFHK8Js5jB5LutDPACZFhQWbyfH7w875j",
  "key20": "43j8axbMCXVkKLzSTECmNsRwDqw3jGxCyiV2NNBN8T2cHqUexnKiAVssd6XG1cjQwjf1nooMyrtpXbjZNQUVcgua",
  "key21": "3kPChnGV6caw2HJWjgkdTSBvvziMmP9GoQDbcNFFDpqRbJa1sfqmU9Dt3QWKFrNBRnqWphPW2b2CmEv6HgyDDnLZ",
  "key22": "bVzAtc6vJnuV5vvMouKMzSG7JBwcahG2Pp6VA4abfLox8TAYt2YnwdPftECqkSjVE6RxEpKgiVoAAEwPvj29xDQ",
  "key23": "2NrXVXitiHc8MRH6K5c9oSuc8i5EWk5jqEDzAf4adjUabhAy5fcizdAgDz3itXzU2UD8kSvHJwf9x66GVuZ5AnMb",
  "key24": "3fvV1uabTye1YEm19dGT1xNvde4HM7GGbzLsDvt2iLGvVuMsxnfcKuDyXkrGDvothVGkjwxYmJzc3nv6hSwV6LTb",
  "key25": "3eKcu7qsuBPXZMZ9AikVD6YHqtPXza3WdzYwqDmPEzwnxurLxWb7PvMtA7WFEWVqXjZB3jvEasxAoiBk1SzNvFkB",
  "key26": "23LeebtAqt2eSfAoJ3KEZbbMkJPC6YXTmmk88BWGvoQCSrV46Sh8DayyWQrtkMnz1eQstQ92zEPRwM5gnPEhBfDT",
  "key27": "4iipxrQn3bqSob41rHDRvyqk1TKxscFu67eWNx8cnEaAQx6FfxUSUc8SCsD5J2wPHSXpsZthGgWjGDK6DQQWd2yN",
  "key28": "5izQaXiyh2zktdoP7Gbd5L8EaniCwzmQfYK8bmmfxMAm2WQ2f7FmASdV7gXDispErY7mysiu2gmKFxnYDjBMhT7S",
  "key29": "3GPdhW9UZAqxYgCA3A9tM6uHfyYzwoTP14XSCs48ALRdenCQuWZNXZoVd6489XgCTiRfKA5oqfP19Ctd6mVAdUYX",
  "key30": "2aK75cHgwEHQHRytnGCeMYkMoWqWQhdt78rGP5piUC4ETyxeMnMQ81kCsCxGUs7mpJNhJ3qi4V9zHNdjxujUj24L",
  "key31": "5GrBfRNyXhoUpXv19RSkKdPzqQhWgrGZWGCWGSoZ8XmhJ8ojmPVDRptJUJ8XGQKpHYcvsR3A84XUfxNBCCfiK2EF",
  "key32": "5xv8k43oPTW94D2MrytC3gVDWPRrddJhDoVSKoiTzdmwoN3MvY1h2ZLKp5MNdBEYuUKcUSWsd9G1N7BSk16ZHF9Y",
  "key33": "41iMYqhUj7k5ANvRTYtCyvnz7x9u7MdahqYKxNnZGwSFQPs3AaMAtfwhyEoMi5wUxbXLLDtmoj5DH4skDfJfyBrP",
  "key34": "4SGEnxxDaRUnUK9RTCRADmfmEGY4MfAyUREcZitDfUJCYB4Fg8D8omvCm6UQQtvoS149soZ1cUq5C6aTsBamGbNS",
  "key35": "5GZR54XJCiGun3Zk6otLQm91m3U1MySxzymhnUSJ3AWkB8hNNqZLyad3NV6v3BDphiuPWd1uKFubqeTLBX7mAN9j",
  "key36": "3GdHjTzciF1cDzR7nCTzSeU613jMuRBPqWVHx7AyaQtGNitmrvT9PCRAeTD1QWFVbLCmRFhSFN9Jax3AsNnEd8TY",
  "key37": "4YjsHD4Zm2Ujvkfa8NnVUYVzkZq47f8V5amVUGZeVTMj7QWNmiUMWWYs5mGTV2zR1kUGVjp5wWjH6M9E3rTkMqKx",
  "key38": "3NHqNvjzysp5X7s9JKRjDHddCbCKeedutitFd9ao3cT4CLvWrwqAYxLxTdtLd9XNmRsY2R8zyuSutRY6W8hkYQBc",
  "key39": "4vBTPLUjw7LHuGxGgviEneRGkYarX5fDTzpdZco5pVJJstQUUtrR84Fb1EsmbkuW9EoeM7BZEUx5ojai1NSPTqMP",
  "key40": "emgyempUYSxS7VEkq4szmJgvNtaiAbrcUTUPnWMocqozABaxdMSgqbrtzBa8AtQA98EwfchTKGFPtt7Wtn2fyBe",
  "key41": "4HzfP5rmzKDAJJECL7HqcfJSJY9wPtcSNV3WPxbhdH6S4bS5btfC9aBb81DHy5PLf61iLTrWyyPzvoJsX3ti7hLG",
  "key42": "5K9NUuLosahMWUxPpjUsobLvKfD9LSC83ALDcyH5BB3Ehha6ZFFof1DMpHDG93nMHdfZ16SyN2m7YWeFYR2WutqM"
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
