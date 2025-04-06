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
    "5RTHEZmZ5y471grRqmYc9ZmijGTGtmReSpVfnxRrBXbyaeb46qPYHMnverPF8daMFiXbJ7kUwC3BN2B4VxPHrdCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CLWVZ84ZKiWES4QJKwomNTsop5jxpC47cfRXVUQtEjkftrFwxpKVg8AmAQnnQD2Gbkw2oghGo1wTfYFAowmc2Vg",
  "key1": "Uveiua7E3iok7QgYvyc9h1oca6pVRFuUiDSp7MWjKqnC5zYey9CG8yBhZctmvgx7zYvkbx2udkUuAGngWqDpqsj",
  "key2": "5rU28NmJzPywX6LU7uBta2G6gS2B9RMszQCcuoB9qz387D8N9iejS4gKLPiLy5D9suPKQGN7jx438xGiRH5iWBo",
  "key3": "4FiwH72dBLME4DNx29Awjdkb6s9Y1gugnBPGpEHmrVRNPmMtP6co9sN1tiWAKaY8ogA5ZkSZZUeWNH9jeWANp1EH",
  "key4": "2CrESXT92EzJjxURKXmfpezLVtivDXnfHvDBVt5gGn1RJ2pGLuddPbwrCFRv5po6hHNEQXwp7U8JmC65fWYPtswF",
  "key5": "2fFopnEbBKeeVKgYq3p84PLYcMwZW8vbqwWhFtxhwTBfTeUmNrpRd5gf3r4tpC1rxnWNw4Dm26oYsym1eA4wZRYm",
  "key6": "uJCvSRWBnwFb9kV7KVTW7W5Vcm6bUSxzg2VD8chpoGkTj6bBtrdBEtwMHgHgi2BY7Gx5JphwFMbrFNCbVHj9Fiw",
  "key7": "4X4Z9PY3QqJapv5D8k2TGXaM3ic4bDfqY4QKDyvnfg944GivrwqbujmL1JTaHgE4jJCEXt39yESbaH9GdoKwaS5w",
  "key8": "3kGZKUULAuTD6cL8khAxUBVfq3iZCZKznthj6TZxXu1mr3ghGBNdgx7EjQHXwfyVBDStTZLdfdCPmgn5J3WWfZz2",
  "key9": "4Z5v5i6TDMruy3L42Xzpby5xWYXeEugPSUk2FWoMnZh4vSuKe8ZFocxKE6P8cGqcm7CMtqvbmccZkBDSLfq1wJiX",
  "key10": "34KXZcdfVhHoSvXnwK6HYbTrpoixFHJH85KcPWzdgzntuKMXRL2Lq9FeLvCM7EWUcDFVitoXYkjH4FyPi6mGiR7U",
  "key11": "GiQfjrCcCegqW4jt5MNA2Vh1iSsbwyduGnauen1RmHtaFNt7xRBYQHGkSGfnPhshzauULGbb6gxMQiUbwVao6Hg",
  "key12": "5joHDZkd6xP9SCytUmo81bw3uVq1WHi7m227P2JoGYrcpVd58CZqC1F18Q1wUwHNcwKUEHzwiSZvageC6bSjZZDA",
  "key13": "38zJ5qyyUK2v14DJ3Af9JiQr35PqjvkZtPu6cSc9qieoQoMDoZdQN9qd5xDAoFkzjggd6VeudTFBknNpZeyp21e7",
  "key14": "eE6KkPoQ12YzpdkJFNAtyFSgh4BBe8SQmHLXjqqs2zHiNWQYF4uWAXfAiyrVtiDtbbBZ7aKkVu79CLtNDg6yPqp",
  "key15": "4UZTtgRe6U99qc8NFSR5hRvFBzpAgJE7a6s22gApfzwxPtcAgVTk2STuBt6znzyzEd27zp634MVv4xGPTPKshJcd",
  "key16": "4nA7YuUKrrZL68eV3KNrMmbyUFpYa5e5vg5R8oxzX3bhD87xoeuGduHCw3nU3PFiitAk2HxAmEfmqYPrk2nV1jaT",
  "key17": "2h2QBD1q2Hf3LfiCQkFthzoWRkm11kzay9QP1XFgFpiCGAXFE359g6m722UqSsRfzh1HXcTxcfJuDX196fssA4w3",
  "key18": "2hBJ2AvMgKaRuaknYSdainunR4SG5RpDCVeRTeXzFsWtX2m8GtLFnbryj8394kehBwTAhZNNKETHod57dhxzTFyH",
  "key19": "QEWiB58eT2aYuc2wDBxCehxc78HbxF8wmE4uJgTSVrZB8VFWpWZEUM8Y8SSuYARmhUJiBD9fG7UX5kWkUJo3vSc",
  "key20": "2QxVm1xp65Sr9Q7YEjmGPMYySCuSnwVXNXN833j3kdw6BfWyNuBTUrASxLdbfrKtyWMSYZR3kcPFFdFTaUSw7gXt",
  "key21": "4ZWtAar2ZahdNj49B24WfJb4oC83UNK99CM9zognEMYTVQd4bXbNgpcXyQb1cNSqDRCpbXbDHAYWS4HSHihXPoF9",
  "key22": "4AU96aiFEBK5vPkgV1SfVKq46xxnmDbfmJHZ54HaA4SYf3hNyqSASM3tGKdu6Mo5AjvbRU75xmg4JRVssr1DR4NB",
  "key23": "3UGJYcQNmzQ5TXtcyrEt38E8QcqYAt1yXyeBpSK9jPBCzgaa7A8cJkkoHobn54QRRa2xW5BnQP8kPFUvtCe87a9s",
  "key24": "4dRC3ZE3fA9EjjsAVFBVKgmcq4H7kFs3No6rPaVjtFo2kPXzS2APwcwqgoSpXGMS2BLQDmdABHKQU4k9Fo2tKcXw",
  "key25": "3YhmjDXfBpSTCqq2xruDwG1ir2rir7vaWew21UbBjJDkRmDeqAEa6LrxYz6neQ7L6KuEdMAGDFt7gmvqxzvvhwJQ",
  "key26": "2PotbwMGMr3PxJUPioXNF2tDvtsmgUCc1grFnJFnSJF5Bc4tM5rionE6KeaVAWFjoA7Jrc3GS79dzT4aG8veSEY2",
  "key27": "5QemjPQ9pTK3zZW7ty6ognmUdwrgBTAbKDptxYXNfzLTbUNNJznB6QQA2MAEwvLp9XsLfayh5AEdewfTvjjeLcsB",
  "key28": "2QW2dfLBDYRnxNovSJfijx1uemgVrrVoGukCD85sCajJY2uhtkAkRNcWg53EL1GqMKRDvUnPkhs8wWDHDmGtCj3P",
  "key29": "2LZUMmK7ugttHDKsAM7nTgWhk37RyBGKG5P9drZhmKnLSwsFBkiuTLgn7PATLTnVcS7BAfAke1eyjRPnyNExCH94",
  "key30": "2q4zibF5aggxmiY66VN9EnpaqnpwZfamfuyrpg164exwkpKF3qmV7YSjcWZuZgJyZvicJEZ34VutuCnsEVZznHX1",
  "key31": "4DGVpYPwrg4r5L4MyFZs5Ppb4ysUoY4pwJqjMx2RSrSzWJ5yRqEf1bXMNMjkZfB8ENbg3rT6eQD5MuqUcCENXdz6",
  "key32": "15MdXpYS5jrR5MgmNNyQVn1GxoKzoPLPpNCQ5EVTNfTzs3rBKJ9WY4KeiGc4R1kFpQHBujAik1ysb71MmFvdf6J",
  "key33": "k1x6iEaRzpd2JaJuWn2yu7WkzUx96T9sQE7Y2q5fyqRw9GnWWpFs7Escw1xg5ZPpH2gAe9NYWLZpEvt3mbdVs6a",
  "key34": "4R24jbfD98S2rzpLD2JqVpYNwKF3EDbpTcMx4EtKLVpFNuJJZdiBKuqc7pevGBpPRfDuUPUkznZ7AEaBtRHKZgKR",
  "key35": "22DhyRYhsqWhLqKwMq8dkkn1TthSn6FP2C2DTTWu17NVGNenKegMQw27MLZt1Mq8XTu5hAwm6djX6oSFGqkhjjbW",
  "key36": "2MpH9YprCRJiDyqPUqv44HK2m9XBbi4grb2crhDQ2uypX8mxT7UaPPDFegDyA4ybspGUwjqE6X3E2Mq2ABBRt2bv",
  "key37": "2sC6VqsdNWKWSDM7BcgHHDcLNXXXw59FqJRg3QzLmBs1RJmzRnqUC3B464aRazKfUE6d9CFPbiAvxWXyCvXkA74F",
  "key38": "5aDkpEM1D5JPJBCJ4Fzeh25r2CYmNfy5CXNDoz1qXGnZ72rFTKB6np8YVBA6vtKN9kVeEibYSwK9E1SS7HySzNnq",
  "key39": "37wWfgdxTGVwUJhiTQJTEQ8K2Cw8UJbTpME1pyVh9ymY4Qg4dgNXvzUQtEzSi64abvVaYYyfmXcSCVCiqMpVoBB7",
  "key40": "5YyN1XD57oBcrcSmbnirWaFRj9NL4PCEKTmWJWQQbKenwsdon1V2sDr5NXGCmfLqE2i8qYWXynx2LczmUdJweKHD",
  "key41": "5XHbZbfmxZQXF8acT6jQ9rqvEmtVZc2Tw4mNP8WShaZCVHyopCnK2KKg3kDZVHPTUMKonkejF7a5yUudtM8aCZ9z",
  "key42": "gJQJMJUW3YRBoohPSEGttBCjY7ekRyqEimLQHhw55kx7zyK798QQfXB3DNHkrbaW6TKLc1ijGNXGqFVVYyBtdqK",
  "key43": "5h4Ahf21pLurD2msDQBXcCPKwdKM3i6ga5vXPbzb63gidk47HUoWiihG2sgQq8vKyUDhznLukZirUq22xu9Xqg8D"
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
