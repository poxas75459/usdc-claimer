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
    "4umAw7rDXbRRD1gWxqruUoCscHBvZTYXA3Y3MXB9ScUHN2qT5oWAAhYmtWUf3eZghvJBNpqwRrBFwwqjWDhjGYjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NwR76XLvjrrG66Dr5zgUk5ZoCufwo8Kfy8uS7DF7PRHnP1ZN9iQMGorqoWBk9U4oLrLDvgNMzuU8zwgpcrurpJp",
  "key1": "5M2Tiiwa3AVx9TRi4LNcLsCZiMFLGYgiiTSbRiB9i5YfeiEggmRU8KYGZwjXSVgEdCYbyp4472s9grcwbDzftKMM",
  "key2": "tMXd26f5LUeanbiTLm9xzYUwN8Xb6JrQ6oWRZYPxSvuRwhyHnNKhvaS1RBrgrYqvZegzkkeKLLPE4ASSEao1mEz",
  "key3": "57LDwcsXwyGfWyBTWLY39s3W77Cr5Bp54cgcGL71MWM6bwcHgmNJLFHzfHpZLwfkfgoDA3SMpySWzvHk5ukEgiu3",
  "key4": "4EDYLGYyYVwboGQYggp84RbScaZw6gAQ3vTpKcbHQJHq3KVrBPsfFvmueBxQdLXRfaHK2BP8QS3inS76BK139g2R",
  "key5": "3dMCtXhsLfj61HEwNc2hZTm1hW1LKJi3Ju4KF7ydJipQ2QbCCVpumeFcVnzypsrq2qv5JgLgSsXCS88YV6XngPTq",
  "key6": "2sZC8Czc3MziAQAKDhzwEGSzoCVGwUwKpH1Evxc9JKEqNTF4aPTM1TotbKnn7BoCDLopGgpfXSXTo7FXKRFd4ZNW",
  "key7": "3dJSQVGeVFH7AfUoL7icxeaLA96av7Bn4oeCqxNpU4W2dqa681eCVfFgGCRJ1GL7W2FDBzm1fBVm9XnRFHmYWPSk",
  "key8": "3ZFfgKERE6LFub5ntnzzoaTwwGbaPmTBLXmvez5uCeUmcHpzT45nE8sq87q6EPxUQ9nhm3vmxnBenvDvkpcNgEVu",
  "key9": "2h83LTWFAYcHYjxKTxKjREL8GXaWGRTqtTCT2KzBqkxeaZ11n3aHMgLB8DswKwu1MbJkCiZjkHLHqpveeRRkLfwc",
  "key10": "tNRK144pDySizpRWKzuNjZbrcvDyyUy62QEoGGFSQyToWUgNbS9ofFtLN9KiPzUshRaUoCspFsyj2ABS2Tb25KJ",
  "key11": "3XHekT77ZZhU6XrosxVrvVsQeVJPD9cRyhVKDMusMasuF9FMhaY4ERZRxLknyZqcRoabPCykVaWiU9C7vmNU9cpL",
  "key12": "4QofRUhcypqYqJUwQqpeTmKxVk3LUhBg4AFEQXKdMWETqLjqwThLYEv3sCNsQp98G9EQsVqr9c8qUVp9ReL59tVU",
  "key13": "37RKuLScD42gLpHo1LFH6aNkLQA6cLQg4kdsP2tkGmGxzqeYNa89jGZgWVfwZ6tGpodnb5hJsmXr3C8QYA9gU6Pg",
  "key14": "3Ng68B9QQppt6QgPcjwfyRKXaQCjFLAiM7K1syXiUbKL5t17bQzYz8H5nK6skQM3VVEiVsbktiVvkYFkhLWb8x79",
  "key15": "3911nNubHgjXMTMuWQ8qi8ibGCbWtL7uM81KXodPHBdeqRvdUUzesjrgU5MmPvCEiQcDJEHWetrerKawWgMvwPXq",
  "key16": "3YST9xy2R13ptUM5U8tzgPNNTnVB6h5SaKiHCB1q3MYGo34FHoscMXCfS6pTScgKRoqaBiCbjRpaY3U41jbej71P",
  "key17": "55WWzH5XkJbs6p4jtN67XZNm7uJrebeLoDR2Um4BCqXKdiEWwHbN8PrNDzYghNz3cDU9S4reQzerE5acHv3AfL6g",
  "key18": "4X3KmL9UdUtiTuAJ9FuWvgA9Gu9iokvcLSvW4Ny7fBrhNULfuJPWY5kbEhPhQEpP8WnQeS85EYHrovHbZHSnNC6M",
  "key19": "3qhjVD2C1SpmH3Q8b4csoLnNu69kTicQWxr9xVAvMaAYTrDVsYurXnMymQ3yWNVcVmuy4mobE28fxZJRug77cJU5",
  "key20": "466MFDrCwphTFem87rG8ssR3nsG8W6xn64e5b8YRMH94J2iF7PkeA4adiGMBEmYD9HX4ePGdyv5aMRxBzcQvsmRN",
  "key21": "4HPDirPLKD1tfyu8bJv1Rc9XTty4wbN7ZbAmzf5hk5hszGKyVDc624USygBL7NBduHDrPck4zNg291Z1DeSnFag8",
  "key22": "3dD2RQ7e44w83bNmFZf2NRsAfdX4hodBo9fQEoV2LRSFjk7RNDgs1Gd3EMQH3TstfhMENeeHovfoBoU3avMY9qYA",
  "key23": "9mpiY1hwiQR52E9vUiTWBoZGowLkbGMQmbtXY2ThxpZPbKwHk2HxYywqhuubpu4eiSJy2MFbzNo2aWfpCkRXS86",
  "key24": "4decaiCTS4oJkEuKFFGEhb7Q8oMjax1NPkP9hdhnYz9g6UP2pRGNWD1Co1RHmZ2nDgo1tKtkjm9yF7KXShX7fqHr",
  "key25": "611QNdjQbBHL2ED5hAkXREbZiaiHokRUeG6GgfkXA8nQxMsXRnprduyxXuZYibdR9tsahCcrNPPeky4fkr2VpFon",
  "key26": "CoNQsySP19ZmzZHJZeb72ks2YT6ua1SVN7Me6ddVNbng6nJ3PGw5ZRdXFo8xGpBzj7P5FmPbDSuwBmRnJQ1Pb9D",
  "key27": "3veyp5Y1UN8G4CcUcCfGvdDyXK1HEbMDU7WH5as9S9HuMKTiQKxtWGZc9egaDkEsLTqubGPK73sZdTxoVacxsVbH",
  "key28": "5Vc4XAUxLZ9ahcDYzYv3pkfF6V5TuPevpMDnfv9MmTYqbXbQMtgfmBw84isjqzE87eXhJLm9N6WrFr9Dtzvay8mH",
  "key29": "2x3azRPVur3BsytzoJCXNz27oWnT3sMnsTMHd2mbS5xgYBVxQt3aKYDHoMF7pmchemLELDg6htGzF92vxFWygMhX",
  "key30": "5FBwLWWMSM9621dYLryKMp9ghwj36BMoGahovjH6SKs3YCVukDqsdbyyRpYQdQKYhogUu3ihYTng5xofXXxaXVw6",
  "key31": "47upVcqSSsHsVpjYxzaYxjzkFC4JhBRjk2xP7a1pRYBobjLnoxVuid3Hb5VE6zoUz8pEN5tsEwhmDTjSfZsjc1sJ",
  "key32": "3ysdnTSUbMbppufyMJ1PC8L3gxsUaQVykpVLxPiewDmzrS5o6CDEQWVjkQroa6MeDRm78z4VyUTvHKwokFosYaBs",
  "key33": "4RjwGyZJjva2EXDSNiMdRFnysputKqqbrayhg4qsz4dV4rRTPxSnWop6edDjtC9BdVMpkcQ2AEYkzqivhaZEuCr1",
  "key34": "35k3ZA7KHmBRYzacUFrkzZbzGWHWRFyRnsnz2VaR8JHuDKZ1FeBV8EzsBUqurs21Yejtz61ftQj81EgF2k59rsiE",
  "key35": "5zyF6xHraQXw8EpECMJtT5hZYcgzxjuqDaRXhRhM54jBgqEwm6Wix5LAk25czX78TLCSPQJFUKH43fiPes7CSKnR",
  "key36": "316WnR7TmXdP7MJu1hdKNnTnr3brJq5yebEnPw1UrnmR8kS69R67jEzaFPoTMH6XjcJKEyFRsLAitJ5aBxZHadkC",
  "key37": "3rBwjXBaWgkkaCXriath34VHC3sm8MdmEQhabV3vZBqYuKvUgWe6LDhC5Dt2JyaH2KXj6cqF6E7Y6fBjRdtFxfBU",
  "key38": "5VpFKXgXMGugajiuxHM4YrecFdz4YDe83bfiovQX6JpD94rqTiHqghrifd4Mux7KwPHjMKWU8DMbnRUk1HhtZxng",
  "key39": "te4L5aA3ToUaDpuXjtVWeFpxF8UY526fVFjufhJHe81LYd974JfXgjnG5RtnLiCadLfggiNZZYfhKB56RP45MqB",
  "key40": "2UjpKTN2cediaXB3DTZyBvVVBtVbqpgdoApZArc9awVYEJYmSqYoUGLuz46929GBFNSzVhkELvRkFMiFo81HNvoV",
  "key41": "3tWNG9Z2A9F7DwVvfowGd9y5FzxSVstHq6ZYiBzJdX2SyZAV2SgttY3792MQkBGs3JAuxaujUDfoVWbJPSzEoVkf",
  "key42": "4w7R3RwopPSZpPKbQGk8Pnaqp8PzHdb1f4VesD7R1kxbDMFMa7Ede3aYu8xThHdmycfNpAgpTZ8hnGuubXQNTT8u",
  "key43": "455xtqYHgBX8w8dGRvqzyDK2odNgTWhuHhUns68UbQmNBqTpidpztUjT5tbCrxe1nTbSajYcvZsrvw8PUn8sfW24",
  "key44": "3agKEzvGJ8YDe4kxrRSieKRrRpx3A9C2jKt4Y4w7ftxQ4iRfyon64bSKwXC3Mjg1VARwFxA2u9cQMbnWj8sNJj1",
  "key45": "UQfQXq8C3rJgVWi6ZJ6Gt9ebQxRRjJXgoDVbF8RPSzkN337w1Pm3j4LhNbA3Gqs3vmgcgUiDxiHJ37RNGatUqja",
  "key46": "eVcKKEgnwgyuLsqbNhVBtorFQGRj7s88xM4i4FC8qc6Urf6JDYPdRAFKj7hx7ea36SkbpN5b92sGQmYyhsWpdQG"
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
