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
    "61DaG584UQP6MihLTsSkjygJDLuJfdTUqiPDPRha3PNvFTmSbChTiXGWwgobnDLQcVCBZgthoPvVt2ZdGBK19oWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zsnRWpvGTLKniEQUQUmdb1vPHCDAWe12by5LfNFn7DE717UT5W4RZmUXL6VMx71srakYh2zGtNf7vedDpw93fJG",
  "key1": "5PFPSPtuUW8v3m8jP23R8nqTNmj7kkEpJv9Dq9yEnvMNMyN3B7LoXVVXSS7UdvNysvVSeqRih59iTxTChRLVjw2q",
  "key2": "5SuydjDWnwyCtACeC4fYwQ9fNtyzRn4SQLF2EGt82M1tu1q7UWwifa28EBf8KxUndVo9htdBChdR1Mh6AeuU3aHy",
  "key3": "3tYTE2EF6WZNyNZjCr67tsu5hfGvgExD4cquLaCjeD3jpVDQ86ULF66QAyWB9h9YjnELDHxSpLdc4dACujmqJXgE",
  "key4": "2eDBX64TxfguqdE5KPfwUN298E3WtHhZrTfwHrR2SG6jzT1HYKMayhb1Tr119XQ7CwNNMHcLo8kQPGtnynMnPcbe",
  "key5": "4QKzHkAwRLA7GJU5VivbjdDCCtMbvhXfHPpavnwaHZxTr7wYYGQpqKzn7vWN3eFffioA3AveemEZh3HHTwZQ6ph5",
  "key6": "4xB85huTm52R6PECwErTCdrSYtqzw5UgeWcBZ2hM9MMgp2SCpt6kuKFh9gUucjgdfSnuqeo9dSVvw5wdayVtkDwn",
  "key7": "3CpoByfAbncxcmPsCkZGGnxPvvQHakVp8ViXL48afqbGnNrqZx9zkMdiy68QeWWZjZeEwtXXyLuywu8MeWifnQYe",
  "key8": "qkvEoRZh8JFFByNiw2qWSip6Aj7GHCLkU73eNZP33P4TbmezXGr7WLw8Mw9mPs4KKKCHbfxh2RHLaLUCLN3ErTr",
  "key9": "4wprEm5fJwj7N85Yd1e2wBUiY54BWf2B5wPN7QhcStFBkVYjSEyqZ8f7sB9sBunidyGvbG8JH5mGymidaHXF7GK2",
  "key10": "2JQx6sAqZDaWasqGG3Uc4ECkQn1Ks5dp21Se8s4XWkEnXfQLhMZAGhvGfnskoxpEfeAdpwQNN1xLkmu5ERcu5uLe",
  "key11": "3UbJPxvnt4fvUY5G6w41qn9qV36gp9iVjuVMxXadrzofkM3KuVXVvVfs2cTcynTJtFLacfsAuWxZxbVP9JLxoLF2",
  "key12": "4HFJCBxLUoRy7Hh3vGxXwuNZJe6i6EdcWpVeaFyDYuo7hjVYXBmyXzTJGWpndGrSPWHefSn1ufDJ5CMttyUcJzy4",
  "key13": "4412kZCFdED8BDP4223TFUaKFjVBDstYBicwcWX87vSbjNr1o1yu87Rhv7HfUPijNSeDwRhtrn9sGgZTUhkoM8Gg",
  "key14": "4tPfs3tmqasFsQpj8TpiQx9A8hwxu3skC7epkiGg8dpjtPMwb6tiENCCXp396z1ha6jWhXk8C9N4DXxLRkz2pDkp",
  "key15": "gVp5eXjAaaT1MuHM93MarQora77f4Fpo75uH5bEP5x61nvdmSGURgsncgzv9V9Lp9uAydzzREThTyqvDZZ4vehU",
  "key16": "5s1nar7gycsfnRcVfMQ1h1Vipz7XSs6bf1zCz8cB8Gqch6nye2p79ocpgP8K5yuWtVLE8ZePTpMfS8yveskGo9rc",
  "key17": "4qvYJ45d88ozsHSQ7cm9skCtRbtsFXCQyo9NgNWXrHwQqf7v1QomEyYc5YVpk9hwdwcuvyhN211N3isbDAftqSZS",
  "key18": "1UmazWWkF8mzw8qVhGjcQBWzvZQU9vGYAJwURqEfkXTGkgPFWw24JUTiUheJcgsZQeHGEApT5F292Xz24a4qtBu",
  "key19": "2wyPmCBiHtFf4GYpTxMcrPzecbR7eNDmCw9g4LRqYgKNVwbAcrPkWjAEixiyqiJDRu4oeqMyFiVd3syYJsZsqqtp",
  "key20": "62mbdMTsuy7pfPinkqrXEWRk53WAb1AqfnVA7eNe2SSUmwouW8hmzL11Ems1cw3iQ5Rm62EDwsT3Pk4dHrqM7red",
  "key21": "cKo7QBEjGVq5WPwNjjNpqyMKRXhoNbAf9ibqj2MHsY3CNuYGiYecAvnj2VbirvMZXVGfrw9qmEncDbeCzcDgndj",
  "key22": "2qeZcDspFVZJD6LWJ1QVyrSwbVYyYDvQE9XjTikZSUktstfFrRr8Xx4dDBqCXabHs2i19o7Ci2etVNotgnzZ7Zvr",
  "key23": "33xUcab1WhyQ5QXEKyxuYuTE7Ah5guNswJmewBzXT8gPCgJyJNTLmwtAQ5MR82TVur2LptcDd95EMvtravJgSrLh",
  "key24": "27EG3ZqjYFVScv73Zzx2mhjxpDPJ21LcuoJfJzxLehLi7NakqvzNgWQi41VdN1cqEDFHBHEkWZuWvVsjVmGtf3Wx",
  "key25": "36aLXkn6yShrJMLoYDhsNftrAXqt221v48UUp4UWq4DjsCiHGcdbHbMEuxksEZzr7nnJtfksi7QcVNufvPsnjkkb",
  "key26": "pHhDpVazUKs1cpDsxqP7BsiXVDNJGFsseNoVe7X6bBJyyPbrA6AnMwRKf7hibhRWAexSB15zoT6aTJU7JvMvbH3",
  "key27": "FKbMS48vuLx16sTeWDafTf3TNbgj7AvrEmeEEDzjWin3Cceuv2Zcw862sf4YSFYGnqYBxxW3RmGTBwxtM7Q2tcy",
  "key28": "2STiBbWMamnnxTX9J94Fb3GmTw8P7oMhJNmE5tgxJvHxA5jdTW2vkEwy7wCHpcJbJUWi2EFYEwWwhDoCMVktigEv",
  "key29": "2vUNcUqzpcWy6o6c4jhQPZiRRx3U6xxJFVB8nh2mWQvMboeA3cp4QY9azj9wCspPiQCNkvFf5q53a8BYXH6j5ids",
  "key30": "UqLCquZEUHQ8oUSFhyMbza2EFyp6N1964efPb8rxYccHDosQzXYS3DADvW9Hq6nYMQXjufip5TscWhh6GqUDRQb",
  "key31": "9secZWvQSTf2qiaDBPqt9JeKYCuNbqre8Qv62kvHQUfhcbXotWpBEU7f3KJJiUFaECZC1GUykRuPKwjYLRGD5JM",
  "key32": "fnSvdjoquQBbzmcrzEMszkoSB7AeupX4e7KzkHRns9eFiKyfMrck6rnmkSzk3dSvEDpXH7VLPFHiKd6DAV454Sj",
  "key33": "3LFEkBaxieyuBHpGzecKxvXu72pwmBSG8gZHYojAGxMXvn3E8yC5UL6Xo6oG2wHrjyrtSaWDKLoZb1SUtCHyoXp4",
  "key34": "2YgKyHfMndHDbHaXu6r4fNAPLmKaKLUU3nyAEEuK36KNQfKbP3jtUwvGe5MEXSwgZuxnpsTM2G9yvDcYDqs8V6sC",
  "key35": "3fbifUcZgFwbXRoim8Ni2Zagi6nUbF3aa9YnG1SPpBmngDZ7dbyDSkwQdxH7XFkRzpGBzRzjnDj48oDBtJJ3KKam",
  "key36": "4V2gxu13n3Re2irtdEeoDWey3ruMjRSwqpeDqJdZAxfegYbDHTdp3qf8MMSSkGy3psNF4Zw8FTa8gv3zs66g6uiV"
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
