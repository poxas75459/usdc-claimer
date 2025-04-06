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
    "3aK3HN6aZXr5B4PTB7M8kGKyQ6SZLgtPymGFLmS1ihzCKR6cJ6MboJEC2sNFtV43u3Hn1zhre9SFduSZSaxSdRVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YvgpZzbBhqXsJEHapfZPaQBud373zvLxNL3Sgrst7d4jfbAzMcUiLdMiS9tiXXhsPMvFM2JRp7HZWitp8CT6p9f",
  "key1": "42NtbkisByccqBFX2pq2aNDZGNsGihx9ApB5b7HXnxrkmwdrMKKp3sauzLCzyi4Usk9yrA4qpDLVcX2fycAGohk4",
  "key2": "3Rar65ciR1MCYPGpsnVct1JKSVHmzpgppPsaE2FynpWXw3tCydcGhRqe1BofecbQPKRmxtW4ZcTkvJaj3ZE6aKeb",
  "key3": "b4vsr3LK8dgCKZZiw8otv3ZBxTTe3v1gppd71qJQKR2zRD3ojRWoHMNsQw9Nd2xNpmwNtt3WznaaMUUDN9CLz8m",
  "key4": "5fEVmGvJV2FeUmVXQH1dyaPDVM3rmi6uz3qmV31jXgiKMd5L8vhEztv888DqMxaNfcV7hxc1eU4fdabMkZeWMbwz",
  "key5": "5exyERcecunJd25KaFPoVX4MkZbDDoZ7KbaBKAjwxbxbxEs43whzEwC9tpLygLFRnHLDkHiqPR9FJXpxaz9N6EfN",
  "key6": "2M3wRppABQih3dcyioLrFLD3doA7F5Xa4xuc3oUBc4aqVaT2U9pEembVUkX6XJftGyYLxyT8khKfRm7cLtKXbzBB",
  "key7": "duvn1zt8hyL4JQuEF9RAW2sDFUrqXV1GpGpmvVq14TS6U7Bg58RRonz2Btpjodi7YGokP8uXx4R9NJmfhNULmi4",
  "key8": "6d4DxQmLYFYnHy4cubsEtdosgtBeZM64qafUgqDVzCEriZD6bTgYWxnguAieUNbGHDmkDMDAT7qfSocMCkCUCxs",
  "key9": "5RsDfeQayEMhSib5SuabfdZLk5wiNET7rjqaSyET5NBkwMBbrZ2gwbFVVZyDNWeazzqw4bsgGS2Bcbb8giWXPAsM",
  "key10": "4KLatpofKEjhSFqdp3dDXppLErA6fQVRmxFNmuMPNnUQLhPAfVtDtAXkutW1m83LxeVMbzb2uyp3Ga4PczYuGmSx",
  "key11": "8VnX6Z4zaiwe2cRjau5S1aYgshfWYEW2vTzkQXoAtoZqzpGm49Mi4nSxae7gCJAnmosNVqFLkFhPxSVEUqfn8Qy",
  "key12": "wGEveHZfAnVSUK1sTdDETBzFHmGWFiUuvWhfqKu2KoKmEB6ct7ZW5VfvwKkyY67m1MnS33iW6c3kP2yeKJREPzg",
  "key13": "31PkG4EtLZ7Kx6kidBsaxpwrSJihVwNU63wgpRAhKQhFrM3fXfccG8MYczaPsiQSwPUvnybQZQCQdjxt15xWKsMk",
  "key14": "QPBWvByJ6F2fhpui9yj3FXjF6bDuoKW2aYev4G7iroThzFvtQBCBkZnAGH2bjiSMt4XS73tpPqw63m5cfmkobKM",
  "key15": "2mtzRNavJj7G3MAJoy5549BjLYUjsHx6aTi6RktSuds5EukCs3J2Q71SvyrEAveFrXvEtKiWcZA5Y4q2CkoTFyhV",
  "key16": "4ih3fvL8f4V6DAW43CcQBcZJ96GxG8smZYsSkSUgKwaSUuwX2yqBEtdq5occZduMjM1HsY8LJ3smjmsecMX8hcdk",
  "key17": "5WU44gPCxwwkswDVWaawWNTLxzM88X5MD3iF2bpMuyw7X7p2HNQ1o6KGCMwmEvY6k5nXSHCN1jLAfstP5uEyHUKV",
  "key18": "5V3zyaNNPFuDFtR28yvzxT3RzJs5Fufo84dV5owjCY1oa5Lc7jocmyHFCgRN8qx2V54UpVqtAjj4SmjQ9wHzPsEJ",
  "key19": "H81LFFg3Nrjgj1efxzJ6otbLCAYd9sdcErUY3zeoHRRWuJZJSND6TmT9Kou2maHyADdZP8eG23kVWUuAYsHfySi",
  "key20": "2C5ttZghEzRv343ExgkSUzH5jcdNGjPs3TXu9hbY4aSErMKv9SDg5eyH1FhQepvb9aRBAwFQkhaJtoQ1ymAvoUMj",
  "key21": "WPKVYB1Y14zkJHar7NVSeUKhGaJDvJHuQyXSpbWMGWSFSynt2RFNzXiiBpYMq16BEtWsvuZj7jHHNVr8b3WeC3K",
  "key22": "5wr72m3pYeZMi2U9yFGPe63xv83ysMzpYYzZz8eLPRuyHXBZp5ef7jf5DeYVWyhtRjYmA3d4cXu9TzxGgqNpacaS",
  "key23": "4qg5zR5kfgSoiT3UwKZoPPdhk9DvSWswpFovFrXE9pvdLhdGZ8BQvDWm9J9x1QbLpc9yEM7MYaY6DqQqhSEGp9qv",
  "key24": "3CxEeMfqLAiY9MhEryXjX2Egm39Dy4Qr3382r7gpouYDJkBdUQgxLrdUBwPpRF957cQn2F4p62P77LhjczyKkc3A",
  "key25": "g18Fp8m7fFoceoTcYpptFWxMA3DVdjQvwohouWLvk1NWX3CtQmRmM2byyqP6rFXSDvjbjdEyQmVRXgx8hxqZLHv",
  "key26": "3Pi34FunDpKRAbitp5htkYhfs933P2pan9PRLsnF5WLrQ8N6xfGNY3TYV5JFyRsdc6MJm2cDcwcPATUMbC1qScf8",
  "key27": "SSExL4b22ahNCu5iSAYHwofHhha78B6mgqVAiYTJMLHoRHJ8QAuEmTUzorQDMKuYMh1sukJfY2hsPgposBQLqHR",
  "key28": "4FKtWXYWyco8idF3Rsro54vhpizFB7bHkKFEebXQtJiTH7hLohEit9M5pakhun6XNdfqsUPiQnr3ztxLgrfaH9uB",
  "key29": "5BLcsNZcNa4nZzeVuCKSF42rvhNyJDexw3UxBi4gKNrpHsjDMZqG6fuAs55KqquQRQiMZCUSyBbWiLQKnKCxMHmr",
  "key30": "959yTQYh9WYQGztqdbXjuWQFbo1ZNsYS4MMvZ6zwDBRdxrs5cUrzwguWRZf5zjkhqqSVprL3x2iNpgXkXeP2Cdr",
  "key31": "3BBTrB4aG18poPKPGMLYsPuUDjcFx4eeQY8PcvjrtZ6DbMapd4J4THrqCvSddtUd3VUMTuKDUm4YsQGgfe5Ktkwi",
  "key32": "PfZiFPa8HewtzwBttXvt3WjPGnJ9y46RWoEe9zgXDJiZ9PA8PmKP24jTEtbZF2ak75nQ72XZ7DtKNqfD7V9sRex",
  "key33": "2PKDqSRh7XNWjin7jk7c4UnBAgpiqmM7a9MuXQaTuySZkFV6AgTfNiB5Fi5sCSTUSjBxDBJnnZtQGic64Vv1zJG9",
  "key34": "46Vcgyb2bPkACTowVTZ4NtJK15yNbWw6QJ9Q7NNSfL2BsRa9Ywok3WN9DymG4yT6j4JTMwxLHfiKSvSL4kP8VWr5",
  "key35": "5Rk3wcAqRrSVxGvMP3cZhYjAsswJk4xZepYDxGzMTJHLvuNcqsyRmpfUH9xJtEVca8n5LEWBHhJkMPyiuqpZeu8q",
  "key36": "3vsa9ByiXxxNiJqs1UjvTwDb2ogmAuqvT2CjEdTEPyNL9gsQWhCxihJMnQT4nnp4aKjaqivSdamzfazmVVaHyuwh",
  "key37": "4Sr2VYuVnZhSXZKNY3GE8gof1YtmfhLNuf16yiwbjonuN6HUoyFev8moNHcuwqXkcUyeCEucb2k1Yk9DWuEBpxw3",
  "key38": "44Bjmfju2zyx5VPgZqz19ThDT72sr5gQxpjszdc5xvFrwmxBLu88DUEb9Dafg1uDh27PboLPiGBzvRsawM69WjBV",
  "key39": "3kBFBhGxfpDsYzWfSp3K2uwgeG3jJerCt4CGMVYsNsFA8fNz1uHJBEaVpBr2faMLxfrvbDyjxf1fnDEcp46fdvRJ",
  "key40": "2CNSUmitDUeEv6xeghgvnukmZvQad7tUGdomyMWabjvUZwqeoXXfoHcY3V9c3mjMxw8hvwSdVdgNwMeQfEkuUWiA",
  "key41": "2HgJimTg6tn3hPk6iH4zr7H24QdPunNeqV5pZujgeC4whsXRKgdfXPJ5P5WhSmBTtAZTbGuMy3shLndK6dkmzh8i",
  "key42": "3kwzYN8dxP44UoyphnNQDHGwKgjLhnQ7hWBBdkpmMksTbYYToMa8o8DxpmJzKsBAwBHRYVme8vo6sNNPbANvzLgT",
  "key43": "2mUchwxeZBW8zJNcKMuGLJY6zp2BcxEcYHbh5wFj3uy3joxQDej86ULcoQZXnVgr1w6xFKPTiPVyfjMpt4QZQ52c",
  "key44": "41FfnHTgHxtVb7RgDLmdRg5DPBXBLYgMUyuAQ8eHGfDuS3SsMdvewcpXbSUwsz1ejHzot7tvYsrs7wPfyd6fpfnC",
  "key45": "56vT2VVpCrL9KCxuMFj6gAkLaJf9f24pLp6hi2syWVDwYQxGA9w86utU7gCpatN88aCHjuhZ5q6Jgjv6MeqdnFfv",
  "key46": "4i9P9pPEQPVrZ66iLxqzRJ5XZ1khhfKk6vyfeFJBARxu2pJuyprPo66VwQd8CbMTt3cvU3HG3pNyW2ourEga3WpU",
  "key47": "5ppTtiMAZWBqkTwW8GVvSdZgWVhQP2hgU736nrAKqBAgJxhAakhVL9rd4A1FcKxKLSb77Hr2WwiSBhkjU1gAsGXt",
  "key48": "2H7GQ7En2pe1PWF7qE4sjS97nq33rhCB45X2Q3JfSmQx5W5k4KJiKVqeKXHm6sGeeZnjAtqkvoq52PvsjdKdjJ3H",
  "key49": "53tsaEQdC332crCcU9QVPg4P3x9pAwUZCneNNSoQuU2MZs5yshY93hBxUVDQj8JbSfzDbQxDRHC8b6U12amXrJQ3"
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
