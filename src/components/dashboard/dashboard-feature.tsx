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
    "2YdTHH7SPZisC8BtWYTZiNQyJsK1C9UN3fWsbRaQqB1Vyk3mL4aSgDKx7fkxMVTztdnP4x36eCueKqHsfg8U2PPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DNGvukeLE8oXLaRftGmoKuZGMhkXVunsTVs6ctf65FzzRVcYNuVM3X2XQCzZUamHegfKjsQJwEoJyhrVhntELSu",
  "key1": "FNvLN4xV5uE1ZsXr8MrpoXJA8bvYAfKpmA6z8ZuBe7g4pqWMKJwhaaSFyUQ6bPUrVc9XBvFsf6FPSrWwT8MNhVG",
  "key2": "3EPnaqCbz2nfP14QhSWhRAFBCKxW8RoVxDbtVW9fjKgi3fsPjUxD8BJ5S85Y52omsy1jhdhoXLCyQeThDjQz2XWA",
  "key3": "2biYpSqZRiiPWDXvSkvSvgtB5keCAgN3Fo8FhW2pscGh1VpM7fhBtXtoYdfiQPpGH92y7SYjVRVi8ZxaR3NV1Bo5",
  "key4": "2vuuRimaoKB8gcBmuxwTNRGV37TmNAwSPRWQWGCAdoobdMXpMpkkXKTuFH6rZ4SdAZ6uLB7k18k8hDFKq4M48tiX",
  "key5": "47Vgve6jLr1nUYL2EV2m2t6zTwVp7sjR2aoj7oyeV7BF9RfAGztcLGJKJik6o4aRbR1iwqJKYnHYDD32bgbfVkTV",
  "key6": "c6DDVA4d5BkMrRjTWGUMon8ddW5hmb75mve3WEB89SRR6ATyvK5wXJSeovHMutFioMsHAjkbwBSPKBBMgkTE34Y",
  "key7": "scu7wwftHZwtYyWP7pd9y4JQ7kDevsuw42E975TM2ScUv596Q9TdDybXQnQv3XDAvuvfDTn7kZhrBQ6E4DM4rjc",
  "key8": "EnmjaYUiVx94fGgJDSXHDyL14riPkV6pYLUUJYjtMSuiYQ9RcDhNkCrNNi4nW2t5gJXaTK9SrU9GcHU43XjzACa",
  "key9": "2pkdT2dfHWBRQMUFmVp5F6JY9QubnWAMXNuB8Xz5zF7H2bXeTK8ez7fAR4UypyE4GN237pEsSvVfsHBsTW1YftvV",
  "key10": "5WjBpayURnoER6eP1L3HqbHRSTBWyh2625Ne821k8MjqSaAZ5V4mLp5ockGuyW3vgVvawKX3G9sv6uvk5CaaGqBe",
  "key11": "3Fvgt8EPgi5ndzzRhwzW3bMDfFrZsvKejAqPSrpyubdsqQnuqJUzLuHSmWFnFbEsc6XsbR78Qb6qvr1oWKiNFxM6",
  "key12": "QAvK3sToJ6sRg15QmFyPfQvSEujg1mK33DnT5YmP7iKWqPm9RFcF1Q5cYUHuHQSiXoEFjgqdqWWqauZgThbQBgb",
  "key13": "3ZUyQh6NVqx7FWSE3aerjKwhDpX8zYgm2EfssjgavMUiGR3Doo2fHDADFu6BRyaF2hMKk1E4Txu3C5rzu7ALrKhk",
  "key14": "4C8aaU4fiFEg2D9JtFNYTfUjvdxcipJnLcjz7nFHF31WhePH6YkshmSVfwLrGxdXcP99aAbjoUur5o4pffgJaQB9",
  "key15": "2ScyZ6bQW3dQAWvuE7v4Z5dbtoiWJpJ2YmA653ouDoQk1CArKVj21SVqcx72Qb5rt4REmY39BPfnF2K4yvXG8dKN",
  "key16": "3t7mdQmkMwXx1qGfLFxHpQ1TXCLSWBMY3yduQCPjMfggykovFrXU7GaFxszZ1Mu1gpZYzhgAQWaj3XUE2TAJpENa",
  "key17": "HHwYLwBv4uYPLhc9tkPN6eguDLuLRGSivJ2VW3LaT4Deuc1GWcy1uuJi57At7SemhrrLxVKpQMW6jZPLMEGaKzX",
  "key18": "5Vi4pELKGdwGXyye6vfKJCZHZjLeyGWnC72mpEpY3Goc5Vynv9qZTCvZt2mfeRCWxfEay5BDWCQ9KqsZJVp7VRqq",
  "key19": "3rfHoZsVjaXtEkvpyYkp2G7KQPrTz6XUYg1sX7oWHCayXsZf4GXRhzEnpDL4PBTcJkWL11jwE3fdtUxSaMCufnGo",
  "key20": "4Un43QyVhg4QgJSDFgJ4W3VW3gQSL582AfWLM98T1Aoeng1iwtCYULdp1vqYTXNMjgP1Xk81sxRfRpEWii6oiJrh",
  "key21": "2JC1UN8z45txCMZ9kZokzgh5Sg8wWLGQzQUPXKPuAaP8ppTZbiGfNBTWM3auAJWJ3EVBEPdttfqfttveJ7EVTTyE",
  "key22": "3hp7LVegN9RnNXdZNNQr6XFxVaUvaRPq1t5sANRGLLzXHdCy9Kg3MWJtJMQgm2oFeoHVfrSUBn5RPcDF7EF5D5FB",
  "key23": "2cExPdApWX4e6cwycmKmB8yvaa9DxWkg2KBq4475GVWomv7aNkaAQEhkteMn5QD4gneF4JgaFjuRz5bN65fjRq9k",
  "key24": "4FUJemcSTz72FQQaE2vikqBn2AP7cAVWkrfYw2uyEuthCYsesQi6DatBVWUKtWZTCKEfcpaFQmtBZw4iYYpyGC5T",
  "key25": "4jbwXyRJcKq5VXo5q5kU5oQvZRcjPuqDDpG1MEEBx8ub8cKdiSCcGhwe1U3q6ba6n4p7T4btqPeu4z4ynmoMatXq",
  "key26": "3D4ahfXFX1pKR4viQfKUN5aK2Ff3ncrPLUGAHpyuLAqwnsEKLcFtmgT582WRmbGkMbQHTBV2mgnuvtkvZ3ASpVJV",
  "key27": "2mQMBsa9R93SnzydHB4cuhCcMERXKXJvFHWkdNeAjht4Gntf5uaxvogx12UEATKe4X6p9hxYyeaHStYp9AjdBcJn",
  "key28": "RbHqeumcFYakWar33TxhHxzfUmjgi7Nr3HSKtMkDBTng44PshPXFSj6Dj58N3ZRW28MU7DX1Kg7hVM7mVgnWvvW",
  "key29": "3QuQfmr1FdgTL5hjzjRosY1rLSGc1pQYjAnR5ksQLSmqiCrpayeoCP6WQjd1HRCdnwEqYBRsF7Gsb5CfcscW3iUH",
  "key30": "52Tbr67hMdY7LdiRCXQCG9SmCjzv1WuspdEs7C5ZYhwQwsTcJb3KKTZ9LZJdRX9dfB3HqqKMJoA2LiZJTMjp2zPt",
  "key31": "3uDtrkenDH78A8zMN3V7X6WQSnr57WMxCXNJFMeUNeXYcUHMHDTKe3ruC2NkUrE7tq21idMRvaim96VCa6E8hY8T",
  "key32": "2GmqdaJm62r2udxRAaivJzg9m3kz71naqnphU8URgeRfehmPax7mG4iyCnwxdbyRr4vcc3tSK5j7jrwHP9BRjDa6",
  "key33": "2HEwDgRT2UcwjjSyBEgf79BPEisQa5eX9Hco8jZ3odVdE5Unrkg5sT3idLpwBX1m387xdBszapVUL6tNjZwLqRsh",
  "key34": "naPz8Ds4i97UmeLWN1nQAVg63eyzP3Ubq47frErB5kmpmPexTMU926Dzahh8zuheQ9q3vk6HAHqRYMBwTB9YBYg",
  "key35": "zKMLGf4cyYLKFFfpvJBmfTqo2RS9wKtcgX57Mz36eB4yUgv5mjumNi2ENeyUR1LNDhRQVMnDdW8VzbnkE1joGLW",
  "key36": "SXk3LgpkunaMDHZZGKv6zEKv3c5uxoYPtkJQx5tjxvezaoVPaSGLohTvHns9AB4taHhCkMskHcCbUUV5GFgH2jj",
  "key37": "4WMGKiKDdvTEnQZSexU9o9vLM65f99VcD9ujgsBx6KhKQ1CE15DkvqrPR4E9ji99PvzQrjrMtmxueSFAMSTiQV8q",
  "key38": "3YY7QxVrVmwsFs4Jwka1e23Nqtp4k7fq1Juewqo69gMA6rfjuzhAS85uNfE39E1bWBxz8C2YbJoFCjgC6LRQwgDe",
  "key39": "5eECGHhXkHrVfwa2PhZWWfYjCedh1Bbp8iuFsoG5HpwtebqoZy6pFqiUYZZR6TAqtGh3Hqj6VABEzADZZC5rZawF",
  "key40": "5KwzkaXwhWGnqxgbywPGGRbnPkWqu1EsPWt256maUSLAd6LDX9sF7TKPb57VvjfwexNTucabFjwMEf5HDBRFE7z2",
  "key41": "3aS9PwYYoqH2MFYkbytt7W9GqhPRnsFyMVcsdq1EAjmuufhoMyjyhvyX7DjbWWFfWobTDBbR6fENXmq7inBmFm9A",
  "key42": "5hnQscn12nMrkUD587iErTH92HC5CEDrLYbot7524MTdrch2WBtWGzXF4wa8MZLfzdb5P1z5PNCfwA1yWQGuCYyY",
  "key43": "3tWSf2Tfqs8KUZ1AfcbwpaR8afKiUMeh7xegLNQ9Wavo4VHRt2BRt3YdoHMZtqyLmHuUTxvLNU7BESa6QUo46uwy",
  "key44": "3F99CrWuH9m1zNCa2Zc8RjXrnh1ibFGgwmWe5M4kG6Ko9JxBjcJoPbeHwBDbvACGEdmEjFmHoB3RKmLsDYuMq6ZX"
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
