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
    "5xR272Dz23WBnxxuVMpTxq8LFidbfRE3Ri7LWKyWozLYHKwDbGPveeYCfsmULjVoM8khELnqeTVS53UCU6C1W8D4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NPsDiF8WbowTyjCrjBDJzra2bZKMgU9vpvcd1YjuoBn6BHWeSTSY4J4rAjaJG5nDZPMjTuAf8EZFaqPYMyu7AoA",
  "key1": "4tE2NHELgcHeGd6AKwixutDfq58R4Gk6PfNTgDD3CBDLwCzSpbXCJANrK4V3vQwv1MEfGqjNoVFDeXiLr39ErZa1",
  "key2": "3DAyeuxGZNq7AtnVJwiyYHYYd5JLnoZrueUDpXvPRT1UjQR4buAkLxBeAkFQBeKYLhykdTjzbt5JnjQv9xA48tQE",
  "key3": "24vFxJqX3kwdjWWA5PgyhxuUMTA17gpxUa8aH9c1WVgLv2v4bN1rGA9pvMj6m6Fu4jEdeowYcm8CwW1c4ykvv2h7",
  "key4": "AdYE1detD4ybAVHCkxqzSEVEPZm2B5bD1oPmkSL6N15dvmUSQaoBjSmv9dzqKAhA6n45iWzZcttUXvyMBWMrqhk",
  "key5": "pN9s8Avch7aTCEMadmG3aEa3uqxv41ZSK5uwStKi2HqReYHFFrhAsES869AC6VVqTKTNEtYHwMRnyPWZEFumYfz",
  "key6": "2ayEJxnyfbqspNV44k4k7J9aoR98Xa4rp3bAtxFETTs5C63TSxdaKazVeqN7omBL747BM8mn3Y8Xj9H2TkYLe5iq",
  "key7": "igf3bdw9vz8igYoMWEGfs1QEL6u2vJHBSMSBJu8NxfPyaJ53NPNhwCoPXhkELPY62Rgon2MqUv6zXNnPymSVQQY",
  "key8": "3P7t9D5n6F72vT6EvPoCAJggUR8Ffy7c6YwVvsL73EnyhU7C2kZeU5ssUi16JYAaF9FwGbMbnVnyeiqGs18AXJmJ",
  "key9": "5pHnsSLaNkUJoFcKrWjoKhzZRFCZwGXqsg94sbezoY2J1j7Zn5RLARorqGZDTrWH2p7HjB41Ny9dtpWJTsEBxVmR",
  "key10": "3WMMAcfQ7LduRGPCi8wXvBBa4WVw7h7vqq7uGXDFn7YDYj8n55Qtu4SiwMtQoxhUgMHqmewATRQyHGNSDWARR6Z5",
  "key11": "2LiKGshta1MPJXj6KtuRi6E7mkXGeb5yV49QX9s4KgGoPaoofSPSJmiyJzo9WK7yshLBYgYsu884b8e7HGUqcaC3",
  "key12": "2J2PAffUhFzJriZFMjzvevnaJSVpVcPz55psPoZWwFJGjuppp714SinDyfNTWmM4W8jUBFfQepuef9k42A6z8RPo",
  "key13": "3ES9gH9jYB5g2Xuz38GGg3AjdPE2oqQGSuQrkgiCEWMsD5PZFT9YX7XRcRPnvEm9sQbtnRBPbGCAg7Kd9Y21LME",
  "key14": "62hrr37ggzZ8PLDLgScdzsWJ17cegvqun2RcZyZNDiBJBttpG8ZGrc3zv8J1XpLgpzy6EzAsCAa5U21hQ8LrPJVT",
  "key15": "3CC8SWEVHriAYCqUWn6JGeS7dVwQo8oiXMD8oBPLtJG3JDjtRFRtwwfFwXkFYfWqfeLaJsZB3Fhkg9V17ss2k5q4",
  "key16": "wK5b8qFvJs3McVro61wR3yr3Z5tZjJVNeH8SrfEp3sG4suoZp3nwXNUqJnqNyeEdmKY4dGjyynGoBCMkkgFmVM3",
  "key17": "22Qxj9GZM8eDebvQqowVkXRpCj182cLBzLrqwBjPWVzz3PHXR2XiM19ZGENYaHVQxvSj4kN5njT5SuKj5X16URKm",
  "key18": "ApNdBwaN8MXe4e5i8fjjdnP38D7gM5KfRZw9et4XQJ3272Q2PZ6w4EVS6XciaJHRsboNApChYpK5Z6x1zHVdSJP",
  "key19": "4LxAeEDkBEuVWvVNghfCn81G5QvAcxcSyDjL8wx7qT94NBqsxQdYpR5BNTJ3YtBGA1UUZy1Qk4Em8GXzLAqbXhYe",
  "key20": "47Z6HeKggxTxbdmfU8QuuAfTofUkSUebnifxQ2aX51qPGbK9L8iKb5XKEfV4tuCucGkUjFY1FE9j3YDgPw9q9dGB",
  "key21": "5poVb7SNPv3bFFDgsTMYaU5dpEZWfHzdpiwHs9V4JSb7B74jSXh1usicjCmoeMnTD9tBezwmi3QQqTGe5wcXgWeq",
  "key22": "4NjLUKLitK3a657oHnnhV4g3RxzKmK7xnXHkHXdjw5fHD4gSp35yZ26suktwwCxKgjDzbJHKtKZPEdtez46xZsAr",
  "key23": "4c2tF2k7FSBWsy9YCk9K5i4pwuJznHbojkow8ELyR33iXr1cNDDj5j3gMp1Jf4F3T17in56KrHVfRKgFyGaQkejr",
  "key24": "2UwEmWUjSuZCQpUW2vyL4N1ApTnmeNprh3rosVXJm6qpWETME38Wym8RA3tKwkd3BfRurAx17GFFGRPxveSRvaap",
  "key25": "4FJ1Fwywrv52WyTvZP8tNQJjpXArrsvaBG6wE9CPMkmE1er5tJVCJrsyC1NbsRdjpetfUZAz59KYYriCkmEchnrL",
  "key26": "9Rdd4qy8xnRmf1T2pS4wqbyopYQizmREjSwNnLdH2HkDFnFSqujAYBpRJjm2CUcNAaheL9W4JcsZARLbepzmbCT",
  "key27": "21tBMFTsuTRq2NkfQBa25fhFT5hibewkBJm2HsPa2CT663tU9C9sgpEHcsyu5L8HkJhovU8nkdqB64vFnDDRbPZP",
  "key28": "32ucs55xMQkFJE1nvaaUDy2YySxWaM5AQAmnagH5TaMQiANWMUupyxAhBT1LAwHMkUSrWPQq65TF993FXaCjpsW7",
  "key29": "2voGRRgkDhq9d2NV5mWMyMC8mu1cQNms6SHPKpTPFRRMG8n5QtPcerdv537pUKkLD3vetXxmUZYLKYsxWF3GHi4V",
  "key30": "4qeTRkyHYHHUC7HyFkMgGydd8QH1uSyU3qwtKAuAuWhLTcBAcCGzezvemigDspR9ZjcCKaP4Z79LPqme2MF6k1of",
  "key31": "3t586tu18A3Ke72DaZMGrdzrA39kKswLEx1Y1W1khG5Ns2d82q49B9mF2bAJ7o2m8X21wFETmp9Bx2L4mqWJCoMX",
  "key32": "5MDanHHobN5A1NUDqaYryRTmXnWxxajCkZNCoK22wPNobWzTrLyHZwK63H14RAkRKz5NZPj7w3daD5Ng3DJYf2zu",
  "key33": "5AqVSw6iYgaFea4S5g6zsX4cAzBLGKdt8ASVNwSUN7XfjhoPs8vhY6DE6hHpbReJyitSuZWUwUbZSgNSkvjfwFZj",
  "key34": "3objj6Mu1pCBTbLDX19VrovKpMdu8DHkxAeFVgqUSfyqy8wf15GWb4qKLGtaeRinnMmZZaEohBmi88ZjHtN49mu4",
  "key35": "4szQJiuVpWjbyzzoSwc9dC4oUdTHEkuUaYuUb1UKZvyivURnwuLS8Fbmq9B42wm5Db9DWho6F4YiSGfNhd9kr8WF",
  "key36": "2Epkvest8MtyQheXD6YgK7vGCC1JDCwwqgm6xdY7g9oof4FnsGXnwDbU7HJDWQ35FGUESf61VdYf5o2zUbUSAFSx",
  "key37": "4KZpdHdxPcKn5NwKkJF1fqnKaFvoxibucgybxVioxqY1mMjWXCpDzsvrjYTzcKC3zkeVCHUNm8jQePyf6KQvtzpU",
  "key38": "3vrkMVRHrbARZmyAPr3tQijVME2af4urczneemkhqxrSyRGp3s5WitDn5Cb5Y4HPx5QLJq7tfxPhq6vrxPHZJe5N",
  "key39": "5qgJdMwHVJHCykY3Wnrj3BXJdsgK5yTUyCDwqQLbcvtebi6LUnJoWYjmX8SfyqHK4WJ41ruoAyiturM1tjak5pN2",
  "key40": "4UkquRSDqhRYZ2RNCRWNaaJKh3HeZ1rBxeRsPk5VbHZuUA2e4ztVtFf1KdydijtX2ypsBcwUJNWGLjBeowEJwWiw"
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
