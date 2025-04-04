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
    "22gZHMWL7BTwDqGXe4d46pihcV6UhrpBh6bCxZSEK8uLiz4nYeqJLPG1svtYRi55mF6ajWK3GcQVDGLYnpE4hrzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PH7pPVHA6J6Qc9TciS1jPbS1eyigkaw1P29CJKpJranYrPEnUDVFJPDD33N9MCfav4RYTPXMZeHFc9GAjoCgTdb",
  "key1": "3o1Xq3H4sw8RMnNYs4jMWXPyybaj8EdwYVxr5gQzsWieFFevAoTLKi2KSbNHQfYv47xhv9gZvgnWrRrtRHhP7aK8",
  "key2": "G3b2WdRtCHKKgZ2FRtHKdAWtmmAH5jsc4AkkvVb2ZcE1RyPsMAshz7QYP3PYP9KN55apWY3zF2BdaChs9HnvLbr",
  "key3": "64QBKhBdf5ufTTm3patuv6PLvw2VtB2RDwLvnqEhvHtJvmy51CaB9kteio5FTn2WsSMAxUXY1LAGu88H8SdNuC9w",
  "key4": "32i2q3f67xJzJChuch1BiW2XVpApXjDg1UdjozeYA8LFTfVGq2tSytiQaxUX2yxGyxzjmBZoY3rVemuVyXFd4rf9",
  "key5": "5YErfy6bxRAqEPDYEcKoe3PepkXPUftnXF1jWzNULJ16qwZqwCKLj1jDjVhboUraBapz4fkMLTWK2r52weAzxvy2",
  "key6": "5rPFknf4UPsyJP3exEvE4Qe9485XMjnfZb8swfn38P14XRwG998hQVx5KddQYfgtQP5Ukuxyt9GN3Vw76r2mKic4",
  "key7": "3sr9waHQzkfHEKsCSKdtbjPeGEkAZ6Eef2LMJr3JfinEsFrvn4m48GgqtZaiFgTzfj4mJ573P8xVDistmBzMdJMR",
  "key8": "3vntpiZx3S9NTeZf9EcctiyT9uuux7PVVMAbQfN8nktu3LUYnXqB6i4X92a4vyax43wDaiq5A7bNyaU2qtGmrMZG",
  "key9": "3bcxNJegNwLEvnmg739t9tXkavro9VKQWAoCQDxhAbagGci5PhSh6xpoypWZXbgkJsupkDKBJBzZESnxcQLTGSF1",
  "key10": "3ocXv69QHF7RxsjZscKCh1AWCHTtbPxgS7tPbUW3RiPwMJ4Da7tXeKhyjWBgqwSk2hQmcjDzj4fSzNyafddMwVF2",
  "key11": "285KdDY9g4P2oS1WcrLxXwM2mbr5xdXYhbsCV3bdKUEsHKe4FSsTp1LihCmraJjioUmF9i676n4Z8QzvCChq2t3H",
  "key12": "1XhzUpM347ogHJGq4iuhmSsjUrjgRQJEyDxtnCYqiGgd2chbEsshMPMPebJvA8pRs6jRLPYuhXK4VLWLuCqWVJU",
  "key13": "4JkSJy7od62fEFE35dvMhXCw3EpT9aWrQ5tsG9zLg4mwBZ38WjLTUsEDEc1XgbbLgE8Fi21WgXJK22792JjFiCeM",
  "key14": "7SZNy9yQ6waRJpozmLFpWkLBtNTEd4zSPbdTmio9j3RNCHaUaMhtpokoV1W7iFe33tiYpbA9foSTv81eg4mE7gT",
  "key15": "E5XmNMvyd5zcJ7H6PQGL5xdhVAgBfaG8KuW5DkgRTM6HU1Kz1TMLm8k4PYb6LXDpyKM4xPkfLHzfnaRMdvqTeDP",
  "key16": "hGpYJPavPsKw1UW8MR5JVmavC6bbGXwvVsutKk97Xi2ooY9Dmuj6UYa3n1ndvos9rex9PCMeVbsuanJNhKKThG6",
  "key17": "39257a3m8wSMb5AyWAiAPKEhD1tSULixG6tKbysKwneSSDpABc4rdSoCUiMx4cQ6o8c4FcjhpjTSk97gqHRpmfJr",
  "key18": "5sNhpSnwPStqxSCXVhZo4H6MqK4xjhUp5SV7U35HvnUfbZ4oXUMQtMa93aV4HbQsSxwoVVE2kx4GTBMxBy6Wk5Lt",
  "key19": "9cjMjtC9QbnXLUbTKDkcBLyWm5863LPAUxEtv4hQHnggWZsfvksNsm2AVTA4C5Er9ffnir98GRzmrwTCucNn6MX",
  "key20": "bYzWrBG2Yof8siBwEDpZD5SgcL7ziv3KDB8MW1W4fMwPUzVQoKEeunhCb5isSWgvXmn6vaogPdBmHNnRUC7PXG4",
  "key21": "2Tx8bKwDFHuN7BCb87YajSZKkBNK7dFtXN25LB15J5wvVWkfr1jWXZUjisfrQacQaRrBMSpeL3Cu9JNSdHZDa4r3",
  "key22": "2VgCy3Xh6u23hp6wLRXhFmEifa4bEVnP5HziyYhYeffCctA1rMqschgA5rY6ZjntUTQa3ucyf76CqEJe7phQq6tS",
  "key23": "57tngREowa5BsehT3NADDjwe3fujs6yfUqZBzF7PfSepHT7WqZVe2JAoSTP2LuiDr2iLHsyLfEHK47TqZHQ1Vpyz",
  "key24": "4BBqFjacxNcd1NhW2YgPNKH4w6TsEpTvmW7a5RYcnw6qojBKWQXSnLrpJfPyQL7F8fzRUWYp8CDZqMuEwzhKGD6X",
  "key25": "4XQJ5xo1wfdsEijRDPfSjTiPfbCWjjNqwh55LoxPNh26TEJvK1gN3aF1X1Aa832edYS5y3cnZJumo2BsSDqv5hoY",
  "key26": "5pM8bBUUdFnuzibQmkxu8SF5P6x1JW7XazsEuQz8yzXNxCXCBwyb73hMBLLXoa16LM8sASuY2rRXjAxameYb8XpD",
  "key27": "suQTWffBRdkviSKpB7d6h9K9e7wwgHTpaZTBvRr8AmuqUMjTLo1xJewtNt51j13PnNFZ2S5pbPLv4VmW5g2huTQ",
  "key28": "3Yf76z5TBGqkJakSVqVuQrGkrpCvn4tjfRJYKeoP62koDQA9kZzULUJoWDyMNy78C4cyN2HQkbbmgL5iDm2pZHjb",
  "key29": "3U3CUnNHeGbw32ejYHv9K7s8XZX53RmE3eoKCoV9LSZwb9P1mUEZy1rqFxAAVLsHorCqE184bGz2UCViUiGRjnpz",
  "key30": "2cKpz8B3NgEmUR6zHvY7amV1xHT43oTgrjnpsXnyGJmQbMdAaPVGttJrPgKsNPu1ucrt8HKZvokypcKy2Agtdf8c",
  "key31": "vHqsQBK5ZjsY2vzQqdoerC8Y1Jpb2mQd1DrkCJMd347HwHKRaGdcbxS9Hpx65NCKjCZJUQMh5BYZnLVNQLGBC3M",
  "key32": "3JrJixUDEq1687J1KJxEQ9vKfV3PE2mBeAP52SYrRkErnPYmMLKMP3metRxzrVofYGoAAPCEvgGe8UtPkYibGKJX",
  "key33": "4GYQhsfEvMoEzn3Lg8U2Kf9oaP8KUjRV5JP61fTW5bjhe6ng9qrsuTdowXTAs685dg4pNQJdefdUMJhjz6FEamxx",
  "key34": "hJnJVnaWM5BZB8qGLrmMUu7fWkvbsWm6q7WW3GoTCuvJ2siyjbsZG8xHfkXFfi1quu1dKDHYaW8djPkfXF4PJT3",
  "key35": "2xQEbC839LJKy6rrqzMDVz4fzS7eMXeEYoDGuPSg44WYVSt6JAYRUo8dBy9wttktD4BQ68NkJkkVwJNW4SNuzDwH",
  "key36": "63xBUb71tu7LvntwJYsJPmWf53ZqtjPY2Vzm7EnJsADztc6q7w1a9R4rBxorLv3iv6zHeA9nxb38f2iQt55unq6r",
  "key37": "3fPpMwYUQJhQK4xHMSJJRxC2qjbZ2v91BqgXExBH88VYbaqDYgqHQ4GzCoPeVk9w9h9h2Q23BKVJ85B734u21wzY",
  "key38": "4nSiCq4Qa7u8oytVUcqPmHSDrGSsyEheSqTrwPBpviDyHhLZSEwjDa3ZZYbf2KpvUv8CrVmkr3u33eQXKVm6pgXN",
  "key39": "3UFpgXmSMSMUZuUAFtQf4DUs5qiyhCg82Qvz1dWZzoCH4UoKgsB4NLPE9HtGKrn25sxohYK62KhXr1ENM8m1WVSf"
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
