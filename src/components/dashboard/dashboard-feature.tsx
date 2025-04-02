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
    "5ogNWSbhcZH83fzEUxdDPVNhQVyKJ1Kv32KCDT3XrEeaVVN17ZbKpfTDFdST21aBfEhKqXYjyyzJvofibChSpMmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DJKokdzoCiw7minFczqwzra3A8r776tYJtVdLPdg1XpdbCLkLmxya5xUSUobM2HtPXAcXxm8XqQttg1ddLeWgGU",
  "key1": "48rjKJF3xedNo7DDPjmzdLvB79EqfeMecHHo9hZW6xwDq3wS97do6Xs8vsbtzBzxnGXWhXA1ER5kB7qceKqNF55Q",
  "key2": "5fPb3pt4sUKeD83NmkChWBVcrzQUrfzFf8dBb3ESb8Z1on5BAfjok1etJnegHa4X3J19kLHmn1akk4tSFr9ndycM",
  "key3": "631WG75kq6kcWnMsa3L65pA7NUTefNbXAk1J5MrTrA3wPkhujRLFnafVtUjEUwFmftZnHowJECyJfM7rwMu6TYrx",
  "key4": "4qMwbYM59y9gz6o7oHuKUxXouimCtSvT9jH6xSnCxjHRchsthcfuXtiWQV4WtrYEA2uMm3PTz8wuAJ1hGhGTH23L",
  "key5": "mBiPupRnNCGwhUm5HS84ZXNEKg9TapF3f8ftTSN3EsfD9saTGGdXMBxE4UdFvHyTFPVrWFG8AwNP3uL9i3dVSmr",
  "key6": "364zfdejhrJUE53vVMPvmcQVhwz72DYx2LzGp5i1R8MQz8LodM9DXJ9BVpgNV5THXZgi9kVZsEEV47aunnQUYM27",
  "key7": "2z34d9mV8NfuD9UhPfMbnd68Q39RVaNUfG9byRrzKGKocrTZ7DM6uHcS939rmuuCVeChkimgVEimbf2sJhZmw4ms",
  "key8": "5iRKEgUVb7vXPSMH8L3qzC9w8outYafcwuvmVLC7gAUiK8faVUwdn1pzyjyLU3XuYt5LZueSDXaFheJxB6SUwzkn",
  "key9": "4GtRLS9goZnYHf3qMZGWBtfJzuxr4Rf6uXrGSekqymtuQ4rXoi1bChVSNNCTWp5MGJrffQL83mTjH5oDAT3pvN8r",
  "key10": "4NsCe5zSwriq1yfd1qqMyqJFpf1wfwD1py2zwW2sK1tZfRLUZbkqDtD4dvhPvbdAWAmLqSfL2rFZrPTdAwWHjJNs",
  "key11": "3UEgjas1wpVcnQqgK7pxGrehZbXBCm6xBShtcwn6sbvzjcTZQ2HhbFF3buRp6QoN6TRdRneyU84aREfXkmQKWznF",
  "key12": "46i9iXGpSKmRnrm7FeV22mo1P9WiFEhL4uwjTmyZYi7M7XR1tmcRm7rAZKpmJ4mWW5Xr3JPPwK7CvGdQ2n2ms1Gb",
  "key13": "3jae5yUrt9UEXbAUqPZzvxjr8W5t9BJpp4yEFWxQbqgvois1E86GwwrX5vFp2pASCpnBpqeaDd4ZhandKkNKMWmo",
  "key14": "n6TixVD9Nj98KmYVhz1xuWXdNG2XxzUkKSJNrjZRrNToTdCapw8WfDLZV9EfJpUwfEqQH6Kz1hsBMMAV4d2UUQp",
  "key15": "xD1MEg51q6MmzbKn8yPMguzZ4d79JCDjyLmUKFPMYTpkbA8PieeoD7JzoJwRvX4d4EH3Q6zqqvN4K3o8rQ4gu53",
  "key16": "2nR3jA2jTTe8yugtD3AxyRVPm5qDSFfPKoPW9iX7c5pPPsGai43HQzSY1m5Jrj1ewf1fghVHcBQWgMuAyk4iXZap",
  "key17": "31gyBABg4g57RMc6PXgJmvsVoN7S2yMcK1Ze11A5BA17tcxmnqtWZVEBaq3ivd4MqesottVfW6CArVaSZvrBKK2y",
  "key18": "42W92ioK917rE45aPRe6ip1M4NBfo22yR9fQnjpF81xsaVFcd51jkGuYZ7sNBBG8j6bp8bkVXXWi5j1VKgGC2v96",
  "key19": "2i62PgkhJEdD7sVX3QCccKiuw5w6Vi23Wd2TVo4dF7qKwmnGdphU2964GZoFJBet5EhjTG6k6vir65UY7mvAmQVx",
  "key20": "zyxekTzE1bXfqwFMtewAMbdNLZKyys2Lc9Fw4M5iEnrd6PSkbuTptsL7VhKHuXHR41DdJon3D3HMdTw8zCHSzyK",
  "key21": "4Q6HY3qAksGHvqCcj5UmYrj6rpGS8N6nJRKeyES1pxDCchqzgjrxXKH5yUnCW8dGcoe8rTeGuhA9YGKKycoRHGPf",
  "key22": "5qgf9Lq96YNctix69K2rTBdkgzhMJGeb8Bx5rR5Kgmahg8hXSYb7trJoUftn5oApYnnSiDpSzzPB4iBQLZvsTvxp",
  "key23": "3bn6PCssBfYrntfAAzYToN4F6ywE9zpbP7MApRnjshUcsMv2mZr6v5RD6uzmXysQm66fMyP2VSSTZ8LUgT4bFCdp",
  "key24": "2jpJMQVvi1CfQNTtuNwLYYdmEQALoKTrCFtT8bMFbYNngVirNoJPDMSvGezEWoRv725vUfwRCaFMToDfeUS2jrTA",
  "key25": "KUyR8HbpnRTb6n8B2JSyqRrosbmea7mdhTn3u7FSSK4Uw8acMzaxWoveZzM2CqaPPP4CVgoUqZao9E3NZNrdNAv",
  "key26": "49od7bTBSxMNe4ScsMmTRXvxgHnEaScPsrJMd4435USXCP14Sn8RvkENjFbsftqc2YbCeG1Ryxx8r2tE6LdyikHo",
  "key27": "4Y7FaoaXycs16zyMYWmLrssRCqs2Q6iChqddTsc8ZqJzpoQMJxCt6PCzqxTcFpEenEg8ziFRJQy1qQaqZ49rQUFV",
  "key28": "q5UiAxHoJX6xftX4yaSjRSYvNGmQWkhHVDrHQaqQaS5QWtHvix81yMCx7z1ZfyD5KwomyWkK2Nm9BEo9By8xtqJ",
  "key29": "bGVcvr1tAtSrbFhvxLXydD6xw9QoxdHzf8Sbm7y5hpKsjqDCoj3R9STczTkgXj9wnaqb9fMwymYdnV7Nj1Cd2kL",
  "key30": "4ovRipUjamTuQCuXX948cApvfbix9L2bhCkuPW7yBw2uVjFUpfwHEnMSYqs9CRDbugRtLL3yLrsE1tZxdiK7sRzq",
  "key31": "ahYfVkrSj6gyyEDd2sjPhRF5zo9LtYkiaD9QTkDAvjiBiUuzci4WuRJm1MaARP5TzBM6RuvHVuCEKUzKkssWPkG",
  "key32": "3dCVcUTQDvT6JPkrnJLhJGbr1MvpCDQ41BqgJdoHWG4ixdAqE5BT3Q25rg2BsHS4xSWGgByrCMuXBn3KZewZxWZn",
  "key33": "RedQs3iAwBepwDrJjazriJruoyKeHQX8goT3XU18qt9Xgnjm2jRsZJuBwtcEd8et9LzCKkkJAKnoE9C2bzk1eEW",
  "key34": "5RyFqtmv91Paiu1jv1H9FDF7xkNLx437bqifRdAUfaigbXHUfcJvZFsoXEBsh1NrRS5MGSwiLH2Bjt4rCHwS2xET",
  "key35": "4ZA7MaH73zrLUCibZavBvUCd1jd74C7W5iq983GjTtD3E3N3WQBoZUpqgRbX1KrUuddurgJSQ6zZF59oi9xbwJdV",
  "key36": "2ACxFW7UEdpbJ9WDzEcMzYUFQDoy9tYe6fP9q3LxP5igFGv4gTU5isKLrn7tLnfBWo7EP8XbjMzqJ3BAj1YVV2aR",
  "key37": "4iaVKSJdQ8PhT6BPHcqjZew4vVT7Zv5NHh8iNzyoeRWZMrZ9hfx3LWTLo63w1kuoMzDGP61W1fp8EXFLovQJkZqG",
  "key38": "4xs2pYqECsu1sSw6aoppP3pgPQSkG6PGZB2TTgPxYXE4HNzXqeNefS89GZz7kwTtjdEqJjT9K4tuDNv1fYF46ZXH",
  "key39": "4tNj9zS2gseFsZLp3aB5e1aHddL5FLwfDEiWNGCi1pbggzxfK6XJ1z8HpAcQ8UWnKCWFD1qpsTvFMmM73z5R2nFU",
  "key40": "2ngSNkXW7roN3Gwb9WsQiNxrbrShnL9x1H23jwvHfaoTvapKZkA8cvv5aFHQkKnapadqMnWRGdvNcXQJNQBcrqmF",
  "key41": "5ncwWf7aUGUU7DqEsq9Qfbp95UXfTcjoRWXpCWHatVzEAM7JbBRQWdoXVfiPSztrsCDNWAm2wVgLkWCBs5p7T49r",
  "key42": "2WQPT9amAdJ1upYpzfSHnAUB28N7x7k9MT2HVdXAzYF4Gfnvryfck2jYePe8fWCnKucTjuhbN4vW3xCaPug6pveQ",
  "key43": "RcJt9jE7g4kfPYN8nv8XAjaG9i4GEzX1bv3XwurK4Tyg4pWrN4NYqn5Gr7TvtxLAvT2Sofe6xUpNc37cL652kps",
  "key44": "3PcVFcYGP75LdNkkM2rGQ1TF4Vh35XbPEQyvQfKWzVFb5owCYFg4ZhPbM7BcTDEbU62j6SgpXU7WRnKJ8ksP6U2d",
  "key45": "3UccmLmfRShxGhQHKqHeGbiYB85Eg33AcHwLZnErBE4z5MJUANUfbe4N3LtMWpdQzSxy2jSG77ZGDrHVH7YhLJDR",
  "key46": "2MDH4PDMFr6i4nEM6UrkFP3KvcZMWoKWaGuDma6jTbKXCPzEBDKGE46X8S1ZxKJ3yoUDNThCVUaV451D5Z9yKHMf"
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
