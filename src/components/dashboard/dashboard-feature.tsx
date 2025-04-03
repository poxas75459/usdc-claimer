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
    "5TqJy2HQG8tj1GfQp7Pwvf3qdxsVwze3mS8ni5L5VfjWbmoGmStwxBccue8qYffJhAzfZc653nKNKuGLEmauxuyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wfawrqBKeLrk685DNVTGAGJuoTvMfmqpptaVvEcVGUJmZQC42ivWr3CsYmsCb595TNkFW7HQiRWigU3t5YnASjo",
  "key1": "5msLNB6PwLVysjAiJb6JiojCZdZD2MiBeeNnNc1zS9sPqiTaMeQAsw8fT8jq7m7vAHpbztCku6euVAu3bn6sdFu7",
  "key2": "b4yRmSrYsNBDHMnJVKQa27jLWBD58CMsBMP7pApj3bgbUUrS7qL5WYHTR2c3JemTJfizkvqeDxa9U3H7dmrbbfg",
  "key3": "w78sHSdeQWEYfpi4qTtCg8DHSjfV6S26wPGP7WG3kjnU4q7TSMteFxzT8CZrvBzdiz78UPZtTCZ6iopnDMsAo6N",
  "key4": "5MyPFQSbY6zTKb6BaQiZzHBhYXUQSfSLN2jesJ9VeEB5z4MnGWrQP4xjZmDxazSvUDhGpTy4P5cQjArLRfjwz8ts",
  "key5": "2eZqrV7eajVYtG95soojVX5E5vvh8QVCgS6aewuJ3yx7sgcZnJRq9ZVb7z4ZwvfSm8R4dfUmgTW9wCqTX87ZJnda",
  "key6": "2LA6mFPHZWMVip6ncyi9AyT1MXeLAuKz4fc1Gj8jWthkkFnNyqHV8nMdTNVTVmsdWE7xGVFiLbUQypqcRaK9shgY",
  "key7": "3gJvqRZkAmPNjfDkaj7nhtMTMCmuEKCZJbTHH5wXqNGA3i7A3GqN7NNfg5nwJKRhg55ZhFsx8KgyARgXWvHiDNoD",
  "key8": "5UYhmD1iArGXKZbFD6TdyFnxVMTwFUSMv8ZBp8puwbad2P7FCeV21oFDVSjVrnkxR6r22haGpmMAigSgiwiz1c2o",
  "key9": "RUZx9TK12RjYggsFb7nKMccDQosuLgtFaB8nX183FzG1WoTXfYwneWLJFwZDp1dQ6GFFiqfWxCeFWSjEHLQfU8G",
  "key10": "2TD9PSTWCqyR6qGq5pJYdE2vPKM7P5n3C7gpAFaXhYAM8xmK5EtVDyqcbsVByniMmqi9fPeFsSN2rHDYGRRTAN8v",
  "key11": "32PcyNHbacxJnhoefsh5HDPcdGDj9EE92wMJZB5RS5uSoYeKr6wBZ23KUTiWy2CVp84cEi6Ygni8NwGSvVM7MsW2",
  "key12": "4BQ2G7coqe1xpUFpVvaphAaGxKVciJktYSr8qDL8hrsznraJp2Ujw4AxGkvSrsHfNU92ZTJKRi4JC8YjggEzXnkd",
  "key13": "5bcam8LkSf1CS6ESHvKQ7aQBVk3EgfRCmhGVKAxg2iwMWiM8gFKBGLoaGxMNJyW8MUaBFdzB4WZ6U3ARTx4W1DAm",
  "key14": "4G7LthabCRsKqhDsEJrCxVmM3aPHgMfDqqwx9z6Q98F92J2g1rmJ2jGsweV3qAxFWMpSqEt1fyZ87onrLfgzFPC9",
  "key15": "5EHf9vwsQ1ktTVJdZTSsJe69hA3CqFZLLBeT6w1fKaW8XTx3EXQdLsW9MhomWRtEov8vMAXKnAmkEd3rktNm6uJm",
  "key16": "4xGADx3PBGhzbjdiiVugdvWoaCbx6KEV4KKTHUdsHmuCbfYVc9UAQVi9oGnYZ6XSBctHVpA3G6GJKqXKVW4LkSTP",
  "key17": "3EAw3BbcmfycuaqKcdGax4m9q9mNsDpab3HHoFqnsCZhoh3U5oRA2g543ne7SkivLGhXsL2VXxJiF6pqxiZC1ftR",
  "key18": "KZX9M497qSrhF7iS6xQEeagtDQqnweGGRRa3ZaNuhi2xJjEtgS4DecnK1jDiuSBkUQrjytaJAtf9DgAQPZocY7u",
  "key19": "47Xih92drdWaH5vr692SW58qXmxutaQSWDXLaPgW2MsAUyyWMecyYinAFUSA8LfEscMhRD32mtLPzaevTiX6dwAP",
  "key20": "SThfzHLhUJFFAo2QWqEUrNtH5mZ1ATWM9iHpn7AedAfHqM4VMeyXgUZifqXJdNQEe8KoUmduAVrCod7e3FZNmQS",
  "key21": "2iLwrqkjMnk3YrJW6x1xmosJapXszhzKkb9w4qk3k4XPESBr5Z3PxZwccZVavesmkEYvwTaoXfdTCDWyKGzohHUR",
  "key22": "32kqwFHPAqQFVLygPKRig85KDABxZhWGMsrMqJbnbrJMvVyttnQJbGHeZjA4nrp9GC2DtqJqivCc5iDTas5wiGE9",
  "key23": "3duiXHZUDYEJRsjhBpcqnqdGVP1RChQXk9Xy8mKf4L1wQoCrbWNg2de3c7nvp3wBQudvkQxaEfvN2xJ8cPTFsGp4",
  "key24": "5sviHSKAmQ7QD9rE7fZugxcYqzYGJGow9xw2Ld13tRvXiGE9ALK8KjXDAyBXBFy2jXWxhvauANYyv7E9kQeKwRNn",
  "key25": "3UCJuFuW5uM8CGWDnAqBhTUJX9pZiZBbggtk8ATB2cwobekZbJW5A8X7qgv2Asbin3KYMGRhe1qqCxc44D6zKcZe",
  "key26": "25JVeXbmBtBNMpsCSjHa45Ywm6jzAGHzFbiA2j3tEaj2P4XeU63FXc5nUp3n7KByp6j2mBvPGmaNDuBT12zL25NV",
  "key27": "1RzQv7mhmbSNp3JAjQyhTXw5JiStt9bB8fntzVej8fD5MsWqD9e3eKUv98yfspiwyzta6Wa93VrdjTEkMsoBiCK",
  "key28": "3nwmL92dz8N4vycd3LPoTXjnnaTFHWMCzBv6cKHF3n3Mez8LnKzW3tj8M2ugc4F55qGEXWDZYTYA6k82GXcCUY1c",
  "key29": "wJjNVJm1vtxHRRsRVHMCD6ghKNrYircEtK5eBdtA1XQPupeiA1gT4wMBpxgLZfApDEnyCWF78pMzpQrqLjHNyXr",
  "key30": "3NXrV6ZGNzSXqHpGr3bB2Y95aRt1QYcTVkUL95KkMasB3vhDc9YC3PNqG9qxMpZorE6FuChHLgv3BLZACkERMGy7",
  "key31": "4pGwdsxD5iMWGzDSrkL53Wx1qBMJAMbAVCtqnZBw14pYWGWbDEPMKcGmb9rVeDv9gjWVHhp1teE1rUQ28RfAhhPW",
  "key32": "63YNSkdEMNr8tVgiawSwJcfZxfoCUDG1YRqGr76mASu3seXRsagp8NG6yHqkvW4wfwEacpTVnSbK5Gzjy6cbc5Q",
  "key33": "4JiFrc3gNxmh31p96ArSYT4Tpt49QTdsCTSG9G7qJiyjat5Vz1KqQwnk6LvuKFx2Qg8jkeXKHxrvpnG5mtL22caz",
  "key34": "49jh3wZMx2YDvNYoxZmTRdCuYcGn8J1rTYoL7Rndinq4Yr2pSXz6nDeLyXzZKjffENiT63wjx8SvcFP236qJ6bEu",
  "key35": "32FkF9e87svKZ3X43pLgrnw87vy7LNb6NDeFFV6FUuTvRuasRPZCawdzXAiMU2i94Ud335Xww9X9vNSA9Yt74aZW",
  "key36": "5nXEWbX4FAJdqwhN4qFP7EnKTwRbSfPb2u2NgnNVTX8AAx3F1Dqxc16TBcGSSyFHJqDsCjcfBkr1Pk1DPcF9nvdQ",
  "key37": "LprkqiZ8wAHWqmiFLmJpNfuXWfoj3n4SwzBQFoU7yEskxRGxMbdHRPWHncYo4uENKuQPpJX6dSX5u52V1nb1Nxb",
  "key38": "2yEnbwe3PuKWh8uLqYeqoB2qKJpnaMd4gwNryZ6GCS5vF9qt3RSVKpB94gmtwvfrkr3teSRh8Daa4usvVS66hcAd",
  "key39": "2ehTaFXZmBuEFLqXx63n77FvzC4tGgABpZj91dyZs1BjsTGam8tEfogpoWEdxL9Gba8Q4SY6qZs8qmL4gud4AMqd",
  "key40": "GAtDTuCbLxh8YZsKyYoVH2tWNRgznsAMw9XhLbZDSMC6zLHA3eeJmfonKTauLWXuQAaTgcfD4soD2jqhahFgPJM",
  "key41": "EBnb3R1PEZEVBWu9vtgb3znoAKHvDTP5dsf56RTij6Av9sY4U2owHo1vRXMXpyPJEtwUEgkdj7KQXodGUg4LGrA",
  "key42": "3oeN1i4mDFnnHb3mjVbvmmbc3rfyST45mYvzboyX9E1QD1waFxrrgmR2Xbf6CeM4iE7ysTRp36GRMDnvspogTtPp",
  "key43": "5hakg9AJt1Xkom9rFRhiS4zmCmgfRJ86xtZe6QEEftxj8h5xZfdZYrJ9njm81f6RZAogTonEui82U5YXiVmMYjCc",
  "key44": "2fALDpgvWhuxWvfEJTUy3Q4P7PBaSr3Bf7dQ9U29aFwDeAM1sWXAxM55AHGc2wxdVHcw2u236ymRJsis3Ac4QR59",
  "key45": "3ATXuBSHCzrwvGyhJW88Qe9uQepw2FjRfBec1Ri6S1HuL9yjdzfhQdN2AkU1R95zaoCG2zedZz8e8hP2215jArZm",
  "key46": "2hnX6dxtGgLmn3yWscjoTMxkBdF7ic3o5na4zr3tew7q4Ysh97mYngBhZLeiHgLGPV2zFkaTqmT2fPbp3Tj2s5TW",
  "key47": "2MQ8yiRKcbLsEZuZPLzs9XydjYSMF29RC4jFn5vZUGza6HcFkYk8pM5wT5Q8WdziuBL4jtXWLHfs4uPJn4o17wnH"
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
