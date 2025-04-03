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
    "64PjQHmyTGwtGNPKhr4s5KCWo9pUAjxouQpy893axZE1hVbEjKuRV4uo7E3SCNxKPbGXLHKpXwLuecu71uiQvPna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L2dp833NvgS9eNcxZBQZydrrXQFVEQJi2tiqfseACbzQsj1cL8JBonfZtEvjysbwSx6ueDMFPWmpKGUgTpz4Xq",
  "key1": "HhTJxWCXiMzrPUHzuUcso17rXXycg2SVuYz5aHLRWHSJD8eDRd5Nbh2AQvA4NFqtUY9Y4aQ7Rtu28KVGfBrpTui",
  "key2": "2g8T5jD7J3suko9n76FJMarHq3FBsDSgN1eDKUD9wKJmqkwyPMDgLmPyBJMgq2HAgW6SiUAjMVXXpAfCpPibBZV1",
  "key3": "4YS5N1C7BvFdJfuCSC8BNEMzMSS44KkL9eJA2tUBpKDxdYUSVTy6uN3wy8bHe1bQgDf22bDFYc4tHVqaHNki34UJ",
  "key4": "5A7VHrggNFnVa6fSJ6wo6BvV4T2dNFmrN3fSoTrf9DxdwS5NZuGiztJzoVs6wdGPAvAu2JrDiFS3EvwSiehg827t",
  "key5": "49yRN9mWxXAaM9EsjLkQioufrtUzKFVj9KDoSkiCDaQt4Z3ZVkVF6Z6c12nzPcwt6mN6sxuZq5s2im2tqaA2Q91b",
  "key6": "5sKcFmn5CzEGegZXTxpxcitKmrESMz8447U9M1rySYQtafw2dpBwaBF2p4TC2KZdVVoYtviPY1N9JYrtm5oJbtNV",
  "key7": "3SRXnnWWVpuyRabNBBGnvkyjZmNnRh72zgqJW2wLRdVeqmYzPaoexfkcSw68uw3o8imHT46dtvnt68UPwPPgG6P4",
  "key8": "5VVnqJzE7WT11oPkuCB3DXMYZtzwfwNJ837VN9C8C8wpHqqgr1R7GuUmbBJippx99m94mj94Jwrnc63DmnJJMjGi",
  "key9": "3Us4GWhPW5uGLvMha15QxpsBQv4fNupxCRVvrmosPZGxavSXYUQPAeUDEKREhngmVWXLT9hxxdBx1vuLZsi6TkNb",
  "key10": "3jVgNv5b8WXj3CZc9J5gB93PeJJUgyXYfmWEuoSWzVCHmo3TSaHhmv7YJRBNbXaTwErRouBGGMPDw4E4EvBSBioH",
  "key11": "5EpCT8d6GozmKgmEKUQkwv1rQ342Mp1uHGmnDMY8y59bY4RHkiVnsyvrEWWrnTDhKynFHGKFu9NyKWACXXLuexed",
  "key12": "3hcThe4JK8nJ3cewyJ9patLRdU3oTQ6JqUom7VTNnonoEoy5uj17eysdPsvR49VRh6toF8TEgqietNoLC46jiryM",
  "key13": "2zYMKihnWtpf6v4LWWE6XnYLsmemhP6XHhFoF9jygxhAGABDYX8qD1MaTdnKZpEhDXt4t1DqpAEudVCUqDvcJFjn",
  "key14": "4NC3XbdykK3SVJwoM9YdsNsb1xEiXT52mrzstFVgxywgf3EiizURMGR3RZEGNFY7r15vqaqvof237TkXFoxkBSxa",
  "key15": "4Yt9gfCddA5nC8yjToP6PbsYka4uoF5xyuqVWpMh5LrFyjBvgDHPqxF1Yw56P3QUL45LEX9a2nBpsECPhJDyVgKJ",
  "key16": "5dHNqorxLtFAPEkDJSJBXSUdqAAASidrGMCXq4duBb7zpi12uPGTV87uFtjnPanhEXSx4dMtQF56Ny6Rf4be1Tks",
  "key17": "5UJ7pJoAVgerXZML9rZ61MibnBP3Mox886W8rMM4SQFFPy5a1PL66oBjTKdQnbYqZd4RenJKYBJnKicytE2QddMS",
  "key18": "4RWTJ2meTbCYPYpmPxZoqXQXtuZUsmUw62CxLAyv3V2WHMH3nSM5kxMvCq85Th8Bqj6ngGG3kRKMHJBAbHmMLpsV",
  "key19": "3EKSo7yy4hHPb39M4ZvDGtg7zEkGw2w6x6ovqw1fhDmCwYFmQY2H2Egk8dWn2xVSYpjhvKmkzrq2YL4wxV7fL6fT",
  "key20": "3iRS4Y2UHyboS7AtGtuzbH783JgEJJF5FoFsnnbxF33teCXG8BYGyy24jF8wuifquibry7RYu9ckUaK4ouCm99n6",
  "key21": "2hu6auvCHwpYwcVH2zrwv4M8FgvykURLsWhdS7Uh9WxgbdEy9FNPUBpoto8j3ZS42spZdhdpZphy7mpAHJWQ5nkC",
  "key22": "2CNjueFJTVTRvupvNVFEV4h88iBh9DLicGpyJQchx6ZyLbhSTBeX64y6cAHyhBTpD9ZoKnhwFu3YMNNM5S7cAzS3",
  "key23": "2gfmRyKYxRf1npMjDhDfXcSg39pYs3AkhaFvkHZx2kJHKCHCWG1gVviv2wBq2QXaQC15FLSp5HFteyj9NeBEfjnU",
  "key24": "5Ye38ngdkg8jygvyH925jsVPYcZYKjMeY5uF7ursbzEfWNxzKDN7HNDjoQn8c8TviXm1kt5hXhAKMnMHsTkQqN4K",
  "key25": "2289nsg4fJzngw7hFRMezAz2PMpW13rZ3WNCCXUaXAMxeyAUSgL1xfoVLaRZSeygRDvMy1uhiQyGUodhNT5FNCSi",
  "key26": "ibdBEjTa9ZPFJRVL5KA6TnjBMqxKC6qkSjQB4gthFL8gy18GApDRAhMTYU9k3MkLtmxbDid9NvhbWcEbEPXG6cT",
  "key27": "2mtzPG6G5vcCRz19fZUuvij8kK7hZKSZEHJK5m7nAC2NEUKa9hHbzvnykykjgReQVcif9TBXE137B4yXF6DkuibB",
  "key28": "47fbK79Q7TE4p5ZwifCxDwqJjpQ22htjfuDZqAgZzzWyNi4LgFjcncHZrsTugspreY7xUoLvPDg8Ynx8UHF6zxny",
  "key29": "3aD2vVF3h9BmurHQWhhDE13uxu5DY1yrB1qXtvHoTDyAEEm33fgRVvncuJRfAyMkYkuEQCdyQ9jDiwTtZ7DEf6V2",
  "key30": "3Cx2oJ5gYRwL4gpbeXQAAyQCdnYXsLGc62t7ZmhrdpYhExijPp8R86nPH3v4ppFSCbCUsp2rvDpnm9mWXooPLpPk",
  "key31": "29knpkR3d8DSPqAAhssV2XT8V4YqKLABDVvxo14fPCifv4aPtnUjZDvF1nEMSSeKphecizHV9XA7rsmEkzFpYeio",
  "key32": "2TTJ5zbQDfqWGAmdwzDoiurQtHpgoLv19KzrtCZ7b9AfocphjwCjPZYzbB83p6LpuQhiiqfN58vgVVwy4aN9N4n8",
  "key33": "5eww1p5mFENnqNKbmMoE4gcsenqFeNBk9bxTf46GiTFJNm3ZJBZqPep5pUFdtYxKPL5TaXRxko3LMjNRmStxtBD3",
  "key34": "2R6EsfcyG2vYriTnaHUWokHy6ny1X9eyMD9jwe5CWLok5J3UVj61nKHJe3deJkRrLyvRUh1sR9njXeEPmP2rNU1u",
  "key35": "31YawbKbDqpNfBaZz2LEy3gqAaz4qHqLpGzBAoYWqxvwK7tXaKpagHnbwgszjtszKtNJTPMvmdHNezEmBgkYRt8b",
  "key36": "4kUpNVh8YYmtWmQ39wWAv6nBrYiGnfCTNEjcFRDnApjKJtqBMpX73VZnB4SHcQTKiofpAhuPgz71C3fhg7vvpyzy",
  "key37": "3ZacniU7Qc4DQJ1svNkXXpzXqDxWboxADhrvF5banKrZ1eTWKFZwr5ABz7XmYRG5XHq3goMi4PKjkpLEzkQYbswi",
  "key38": "34s1Sbpj8KfVHiRCfKM4mrCwKBjzUmjUSH3ERcQzRNwefhfQ6eHS5cV2XTopUso6AxJChaE5JJxoGF3GihWzsGjT",
  "key39": "55x5ao2uimjFqE1cKGnrUYndEJoBsZUCqdkx6hpSvbx9h9cESDgto8wXknmVVHh1o5UHK6x3c7f8brKjpywYWbXQ",
  "key40": "2PChBFAkBxnGm9YehWLVZKJ7gAAfPr1EwsxkGz3x2rBrebrU5X7UdYnG4dwWuEceQhsnuFB493vWTXAqybw7Ddct",
  "key41": "5fFhgK2zqgGn1QEYh3RTBLyzUgt6ZmT2pmo18eqhgPcArKrtmjZMcTdbpXN6eRrbTYbYPpHbn6GDK7zz84H6kjfy",
  "key42": "3X8rbqYmPzv39etNq6NQNK5M6RBVuQogn5xAhdFSGfJy6bsz1Qrk7N26cE4YpAn1FxyaA8Nz2cQEuY9JkkpaYMSW",
  "key43": "4LGGdPxpHpvgXjRff17Mzk9jEvsApjrgibxZ7k5Xj2gGj1gM5QErToQhbBz6z65tFAjSCAJWB1rrzU5Kh4N85LZC",
  "key44": "ZTeTyV2CFxqqin8Qx6yv5T3dnb4g735dgF2CwT3rst2MmkGSpnD8ofEZQBpWbiFGnVvYDRsqogTfssGZsLZzJfw",
  "key45": "4kX2PT2cUecArmafYu7db2uVtjw7kyHNDN7CoBfbudt82xhyPUdrWkSmiVB2vF3ConE2BNMygGVL6mPcNhcCuEcP",
  "key46": "64hpJvU3cheaTm4BM34NiFJyrNBjqoAN2pVY1cPRrCE2duno5LcgWui7QMBWJB4KoorXTtG1eemUJnqNgoEEbtBb",
  "key47": "2TWDiE5bvHiXHwk9ZHp3p7q4wUVGvk3nHgKZM9T77WKsCQfgHgqgokT78k92Aere7k4KMhiGv2KBPXmvMqeQa7Qw"
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
