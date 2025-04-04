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
    "2qMYkFFCnQb6UTCthJ8Le9YhZ7DCtBgsjHEH8hsKAPuhkso5aQrwVb4oKgG9mpmjELHfkVUHM8MeggYy9WZqHwQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pkqnzb64sqPx2TG2Ya1dTc1vyv5Lbmmc39tmHgiBZabEy7wKZtQTRYUf2Tb9XEnnS6jsgCqPZFDKKWpneeeB6W",
  "key1": "w3S6wSWBTUt4hsmt5VU22QnHB811u4dQJW8z9ebEdNE1A5aybAnV9njoYg7qMUCeRtKRochoz7nRHG42RZetV8o",
  "key2": "2Z6hrC5rEGooNzsQyPFwbS8VMAk7EewvMCYayhDTYUZ4qwiisQMw8ZJRS7fxiqvJMMuUd8nQBnBNeBWdDUwt9iY8",
  "key3": "4Zn1gmJF2M3vdYAVYX1XhRqadrE3ipFhnkgAQBUK15PQG6cibi8aMG43qrDGb44MjiSsEFXT4ha2YYiaGZQ88h76",
  "key4": "vd6mjDUAfMGUYRohVVLHMhvLgy5bDnfj4qUiUbDvirogWsuLLfppC3HLnfarQfqz8L5YpaM36ehhEZ15ow5P7QR",
  "key5": "49FUUQsJ9uJ5MrDzDxYiauUJxdRvLemw5C5JRU1FcSvLCsmWMmBB5dBT7Gzmnks5n284DdKuFiZBB2qF23qeKa6u",
  "key6": "3TrcmzDwvSJBCRkgb2G3vyXT2HTBaHjqouxMRAonVDTdApywLUeShFQZm9cAPv9Z7mgp5ri6BjApHdNRLLnkWPSt",
  "key7": "2dMHF2fQpTRAXjcc5fUR5RHkAna6qDme9qpw3o4YPnc1vnMxbSNqoadfmpm3KXvSnZZKAWinmtu1dFDiUi58KA95",
  "key8": "aNuUR7G77L35M8hX28f9bg1WKiMYzGEs6654qS5e55N4dWALohRFxt1gQuUujyyDQa82Tau7B8DkHzKomyexT1P",
  "key9": "ycQ5FUESTXjve6Tzis9VkXbwv9stkCHdMKHv6HtSQoBwUwgCVrhrxwLDmzV8bn6urYsgYQoktUYjLGtFFnN9Ryy",
  "key10": "4atEmzNepMfMt5GtwZzARiGSSJfHwWPPS1p28QYp3X4SuH2JhASbKo8iMa2EEMYm1GGxvzBoSF4f9NQtGqUT6dNa",
  "key11": "3VTN5aU142WePTABXFLDXWeUFAvui1CuUHf3ZHXgiKZFhrPFfzAB3jRMoKLQNVnT8raGrDc9hnvZ9k1FqbbDS9ph",
  "key12": "5Rbf8doE8gSGVanhf8pFt5wuR9HrJqeTys7YmjXywRTGd112PAQr6iNLvpw3X52bwNuk1pfLHqWJpbaHJLaE1d8V",
  "key13": "5wtm9WioPcVoqPeX6uSUv5zs1iNu8fZagk2Lnc7SK4nX7hdyPuQZDvw73YSM3KQ41bFXC5NDs7tYjdUUoddd5cPh",
  "key14": "46CbG1ZN7vYpqSncDfMXHES4fMFm1zjoBo25WxhnJQTwW563gCozCowU3tyTsBuGfGpRC79VNptzGZ3Wedupd2nA",
  "key15": "QxCLqRRd1kmdEMVQs6yurZ9uYAqN5uwBW9C6yGsj7joH2cxutgukwbBjawJ6PvDg4utreaEhNjmAszpaQsNivXj",
  "key16": "5xwmQKjhnM4NfKYFjDvQdZLdumYH7qsbJDarWQLAy6KNjN9AYMvWc7DnTCJg2pUqbu9qE3T1MXtz1hwzqA6qbDZe",
  "key17": "L9yP3WV8rqAT2r1AmdP2BXn6VenZfYYJs9NtUNk8S8sQi7P4LbAYswBMBtjDDzQEUr2fZjTdVeGebrn8dKRLFEW",
  "key18": "5gcLb6vSqhVR9XfdqByCxkwefbdce9ra9bWGmZe3EfKAvZQSunGSdpd3sqbJbMNkxaoix7eCq3PzTj7dswHgYiNr",
  "key19": "49LBaUvPVuZFXa5LvWgNUCzykd5oK6bhtqLebrJVMPkUrijtRKpf5BFPPAo29z7yMHKs1FH4JdcqG3tVde5CFaHL",
  "key20": "3Bp4Ngpm2YwftWc5PBKXic8tPGW5GpuTGYccuLJibWzWbh6k5x9wC8jnT7CNMg4DvsBJCpu2CiTRYerqgpJRc19E",
  "key21": "5HsoZEbsb1meF73gyhAkYjdQ692tN55iDJfFonfQnhhNbgGVEzBvaV8YuGnNA3dNHkPL13mDdpxKpB7yYUQxd3YV",
  "key22": "2QKE1zcTHhKj9P1USXSSGe6Z19AY3HonJzR9LVJkA9jYnrFB5g1677iSVH3iVvKL7zkCym4r9LyqSUhjscEpZydx",
  "key23": "pycfTYk38mPkgQzAnorkwBmoTyd8RATjSYqth5sQ5CVCJCxHDKWYPX9Ku1FETQmwqFyRqdxjStEpNFjYokwdo6z",
  "key24": "467in4yjvkbtEdia25qRfRMWsQjPcVdmDUS5byYTZtUKjQ9pMei5XG5Gzzy2UTrSNJKPETxZenuymjTa7hw6rd9K",
  "key25": "4p42Gz9rTYJQ9v5fK9YRQuhXdiLQPnq3ZVyTysF2yGpEXVBzXBbRAP5dQwaj979qoj2PkXBPHKDgJFQ7c2jZN7nf",
  "key26": "4QftE8MZqBVp4xeVP1NuA28cpS78ens787qZbD1fJY2TVcv8HoLqfPNznruAJ8iL8yJFVwvVvmaevAmokcv8kZyH",
  "key27": "4up6nGVqBLcp66koUpn4beYzu8tV9H5WB3s2YrGwvCjbzWZj9qjQuRuoGwLiNc52fqgv1acKJfwFkS3wwx64HzNz",
  "key28": "27k5EKdpfeLpQCn54jJSiS9CxLN92fk9A73yHHnQtnoURLPEs9Npm7LjuqKu3EzzwdZobF5wYNUZeMgfCxYmu2Aw",
  "key29": "4gcdQ6RJdrx8oR8ND34d3RcAnpiQYSPz8PVwbySB4VBXcTGw3tRWhso197uVWJUQwfK7Zr2Wxqu28GytvazBuWot",
  "key30": "2XLTrFzDMB7gGxYkY1WRa84r54UBS6v11vC8kbxedWVSDSL3t9nnhswwmFgA6bctiteiuVHW2UrkUi6TkujWAgFg",
  "key31": "237kS8zbqmguVEB1CoTHxL81vrwZptBQkM6VQFg4B84ZPoG53iYTtKGBr9kKFexhZunDcPMa8vHTtvkQAqdaTvbg",
  "key32": "3FMALEVCbTYjPTJqHmz7NwLG5T6ad2rVTaNb24TtaMFnuxWFgcouScGT9dUbC9dY8Jv8CFpqRe349mgWt5VoiWN",
  "key33": "3gWw2V5qrnTGfHPVk5dPCs5UhxQPG2GbnpdGKPFtMZteNHnovZnDci388gpmgrWhc8fYfHgcQZobdQaxf4FVpvJP",
  "key34": "2m6fzimRJiqGCZdPZQf5tLyi4xKneyXHyRou7af1SCL6wsTCxg7MwkQPDTqgbZefCEphbGo3GToxdsBaZWZgaKRa",
  "key35": "3bVisTAESFCBjEK7Sfp5AJsMNmq6g9ftAeQyaSvSDVB4Bazcq6XTYmPJPUafTHmZcMmiY6XZmzd36F8YetWaCRYL",
  "key36": "3gwrzvC4SrEBusxaNPN1Gkw1uRSxbwLJdDo2L2oA2rm2mJXmKezHVp8qUtYR58Hx2uKrQhTCz1fShQp7C8snaF5H",
  "key37": "3iQo9ptiHJRv3KLhkr5fQcmexnV8zuxwyJ1CDECtN5kooRg6dFaV6TeobpPmdcshZLxvd4tYmf6V9hVFc6gbGBrp",
  "key38": "4hCdsjduu5Cj8H76aQJ1zD2ATR4kHKzx1rume4RRX7o6tgVrYk2XeMn3DVAww8KoYWH23cuM6t2UfP8ohukw8tSR",
  "key39": "HX5FiZTuXH1jEpahJFHfasXttwdQxWVq6Qvit1A72WQHZ8beYrvETwD63YrJMTtBQ7vGETB6Qs7u2WTsNRWsvK5",
  "key40": "65XScmbV2JhTiSH4eJWUkukzx5Nbbzyzh99AUURMgyKWLc58J3hbwm2q6qcZDwMTvwGoCKpUChD4FNUsFGDctYyd",
  "key41": "44CtnAib7bMNdQc7W82Rq7aWnLphpnWzSrn33NwVFuf51qYJvVSBvjQEeRoyiChptTE5L9YZEtCZK4GFKETiJXy7"
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
