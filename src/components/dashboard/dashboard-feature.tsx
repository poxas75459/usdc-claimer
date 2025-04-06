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
    "4pqyL5wysLKShBkLby5sYGi2gX8cKY4C2k6xrVaEGbAe1Ma7efNweoTBimkXDywkuQBSkkZNDnEzKVPyyqcVvSg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sjMJoqEZCw2je5JaA4GsXbgKFpArdufNShzVyqR7rquEuDLoF85P2kCLyK1RHNtUeZf4twRamhQA7LX41w7vrku",
  "key1": "4MMPrDrK86tWMeERgXxvJhifrN34gFKhRg6C5v89JYeT451b3PRrXuZ2hK4pPU6bezFDMgdZTwKa1CrKxVrqPZM7",
  "key2": "uXqggcSK7rcTBoBYkNsm4rzLar7bmxFvHd8ezaWUfTx8bQ68vRKQKgYYGdDMZ6FrS4bUt55Q2VLqx6PtxGHZwf1",
  "key3": "5qXmEEMGLdxUHjxHVXKSwf48J8Chm6Gv23zcRzv4HzJ8V3dCqUuATfH7xG9Fusn3yMHNPhrvYJd716gcL2AcNmF9",
  "key4": "2ohbX1PdtZuGmq9kZ9CaazMrHe4sfjhk1dp3TTGx1JoXGCPEax8zjsb7TgcVTsXLfDx8o1NutYe9DniaR3dgbecY",
  "key5": "4wG1nQPqTsS3EEzeofTPLwDmNdQB4vxSkd7xRJTUkRqmcw9TBGzMMKDwufGsUspDVePz4YU9QcgRUvWTynGHXi7u",
  "key6": "5yTZavhVBFvwbQAr86e5nDiTkEP4YyFbBjskjJ6Frcnh6tLZqsjA5gyrCt9WoLZEEg1vGEEcMXYppqnhzQSQeegj",
  "key7": "4btbyoxuVg1chsvx2SvXdRA6D4cJsgjsU4U987AqcdRWqF9FB74fjD3MFMFR34hKx9R5w3YzgFxFD7giPpc4L2Uz",
  "key8": "2oByZmuXaN53wWvcYqAokDozdXGwYXRF6HN9NnAWBbUe9uSBw9soLWEcDau5PkJAmuewkcJ3HLLydebnM8HaY8Ch",
  "key9": "BGPc44sQCSofPYfQVhaMT1NzLH8FuhQWcE7TJXj1fKHCmTtuReLVFJV4ZtxNGYWmTmgbHDucPSYPUkhH6BThfd7",
  "key10": "4J3feLenapGh78rRvCfXtPYjqDmPbKm8Cag8ePwbpn2x3WAHcXhWbR4PGXJp41mZPnmLTV3vYeBzZyw41Df9jo6G",
  "key11": "4xTLfU9V1fUAB1kKcsqXzXhUufQ4Z36t9aTpoDLu4gXyhUxEMi2SBNt7NZCfHndXLREyjnqsX2vD18nf7uPikMZE",
  "key12": "373oGci6KfHyDQcimej7AACgmrYzuPsEyFD4ppBwtsgEweHX8xBoP1y2dPH7ri4xybrNExGgFq8fTcKLX6e9qgmS",
  "key13": "4hG9xP4pYcBAj3aynNttQNcaPn9jpWowyt9zuN76MjCZCdXKkuetZfc41bG3Xz9WxzLPxih1162wKd73giJR1wE",
  "key14": "7Z2JBPFb7V7LfHAvFr3Mrq5ptrcQ1nj8j2JuscRJH3P2hEtqxC6Z1h6jEzxpLF2RGU8t7g6DdHkZnJRWnHvpXCt",
  "key15": "4zUAQrQgCQRLq13EzLy7zMko95QgarGTtY9iQJHhaTzaTzW565eT8aJYuGEi9WZwKyQDerT2MYkyHJhQnTsdrcDp",
  "key16": "49EdwJ5umSMVNYQpsRGUyKe2phZfKiMGuTbRiLS2bwEAg3c9nu9h4uXUoRjVgegXMdBsWsLnWbVpcGsrKmmagHkH",
  "key17": "5PKi43c4J1EA52RinBRbcLvQSroZhNu1RT5m1PW7TiCAoYLDQrpB3bphNMnRUgwCvH8NPsA9GY2VSxtWkaSBGMRt",
  "key18": "5rm9t6dkDMBxhQ72f94sqbhv7p7K4LrDND9qJFWbuh4Yo6YuN6KAt912ejUtJrjWSYAh4bbnFeMcUx5Gmex3XFf6",
  "key19": "5qhsMqTJnoApcVUdzogdUDbCHGEgLTbi1rRsBGm1XqpkhcAvEh58jQ1kvwgguKHNhgs4zv2ECzmB6A6JgQzFoYeZ",
  "key20": "3C7AmaJss4hW97YcGrmTRyf3UY1rXN1BTMXxPVRjhLpWmEhk1U8tVgFfco2vMx8sweKvaCGLgUomN3V6W4XctqxD",
  "key21": "4Qu3sMzgQLQCHvZXLL1vPtUrMCSCU7fnrcQfRii978hQhGskC3L4Yw5mAjXh2ZWaoZsMyEMn8RMA3ESFcXtkAko6",
  "key22": "4bvkw2YeKc6zFVZg33wRfgzDQQUFCQWbfyy8q3USLFhyPCT4wcnnYxXgLV5Xnb6RJy24FcUYawxMcVJBA4cLmnbQ",
  "key23": "4cAnm76brCB3g8nB5J6L56KSvmF16gczB5LW39xD2deRfzBiau7CKtMTbxXrD1v1H6xX7fhpEPFoK44PdzkM7ZXS",
  "key24": "63ui3F6LBe7X2Svq8ALpfK5Gc8zZVLeBe9UBfYpaVzhJmiTyTJCsDzbfuJUFjUgLJ8L6p5Ty6YB5ovHNeznpYSmt",
  "key25": "28dsM3u4aihkvjFDG3qxQ553zrwC688JnTPADp3yntKGXo9RumDuUtdyYoxtgXZFSTFCqDvrh24LSjCN4N4ZRRq6",
  "key26": "6QdSDgY8WcV3cGocLGDuBnv3YmzwCEPQGkbBt9bwebuYw2Y6MuvXaehJWcow6LQMccYZsLrW1RCwzVkzDnVxWuc",
  "key27": "5CQHy18QwJ5YjJtH2U4hCGxmw7WDpcXRdAKch85XpAjmxRuhMgi7GRu4DhQGG73TTQ6m2gf5hZ1CDbxPK2Cf4j2z",
  "key28": "42CEKyPu5L3iGPyCpGk7VKNpZtk7f4Ai1CFMiVizTDjTxNo5TA7NfF8gcnvdn9MHw8kiBt5pajEHmsenPXu9ZWdC",
  "key29": "3ii3pYJcoURaSEtqUcTe2KK4MdSySYTHo3ARWQoiV22uddjyTCeihVQFfxGMQtrXmcq9hPf6EjU6xpASmaywypfW",
  "key30": "vXXmMkPJQAFXVDYh6ztta7stMLwJ9cEEJxmTwYYVAWrxoyVfyfUGo2RCrD7iEmvXXUDcgDB86qU9bx5CE2sgNau",
  "key31": "tzGXQDjWUj5DrZEvSENqHN7nTPBJ4xWJkV8DZp3ftdJ5ZoZmaWLxENbfQpaXd4a2Qnzm3qaLLXYHPAo9k9M4qH1",
  "key32": "2RAUAf2Ai4h5FGHMKpN1Y8mRvJ9o4GBeXZXu6daPBCpgYvrRCzkCTzXe4sH831NnVfcWZzXrn1mUUbQfwmzJt22g",
  "key33": "3XuGqbLLBrMC8BFA6wBtLNbMZkF1Q5u2EmuZHwLqNDP6hjQfUd9ftUdyRMyhHZdtSCWYhhpErZQgKRa31c5u4jFi",
  "key34": "NrSftNg5G5iAp5naKmSt4KcWRqiWKED4PUccDatVmXtWguGuTyNfuDuMogFA6yj4hNjmcV4tfMMi34HBkx9dbBK",
  "key35": "2iFoN82ydEvAMMrrsUY8j89Yk23UN5hKdhFFqQQe4bhwSbav1EhrtFzByqZpcAsakDjceApBLWhjckidXqb978rk",
  "key36": "3fucQd9pErW8WFx2J4JLfYGmQS69sy3VKacqdwKicmztSv27Vj8W45WiViWX2jB5EwvLDMf4Y58uzTTqkppP2nde",
  "key37": "2jtAeGgoR2zC3Jp58qgffBatnVpboQSTS6P516B3GS3LKMjFSA8peNtT8Ak3qDWjbHdeRjTaDUPfk9puxdcE1kz5",
  "key38": "7ANyPBgaTS45EcL2uhz8xbtbWGpcWnYmTPXoPW8QnfcSJCyhZk3rqcFLM3WybAxbKUa383H5LWhyqzbifmGSeMv",
  "key39": "2zxUczQ21eyYyg8yTQYP2TPctA1foZ66CV659LDiGjBXSLie9vA7xiatc9NhYj82A8AZy6uaNHNb4fdfUh1QPVCW",
  "key40": "4znN13qUwbAzq9Yj6PT2unJymz3mJuQNRSKNdeqd4ocHymDkR6RkYBZNoc694FUkswKf1nHjFKMmhyJcqAynSER1",
  "key41": "HGWzqnrdmiiEVQhSFqMKucbKpFj1yJAHxDJjhEXugnK6ZStuVX7RkDjq2jbg2T7yEVnrxJB3yF2MpBndUE1puuu",
  "key42": "3HSTW1o67ZoXQxqLEecLps5WTg4QpX787BCisN5DvGoBbPXYTdjvQ9B8AWum2JeWBbcZduPzF8gMSLynqjNb76hi",
  "key43": "3QePwTjyRWnWAV11KaKrGVskWoFZeHL3rytAo3ZG2daRE8FNUXqZp1f9k4EUN5taoYWqneGWYiaGcSzESe4ywiri",
  "key44": "4rFucvkeJhMMKqaqsD4kFifCryiqH1nSufxmA5zSA7NtNCt3No8kS8kEbdC8ZY44vfyCTYu6LvJtdFLU4JvBeKqQ",
  "key45": "5fMvWsFNm3h8BJEhcbDKHoEYqNVEkXhvY4CsUpam946epCBC4Dzp4L6N3JRdHZxY7goSfy8MzD2CT4rXUDNTf52M",
  "key46": "3JyhPZxaQjQpWVYb8Jynbmti7W8vfPkRTyqqS3mbRN8jYuvowWtW13bSUjmcPUT1Zbq18uX8PWiJbt2zcRadwcyv"
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
