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
    "63Ua8tvFzGfaHVPeGvRgREsQaqFu2XWjUiebqSdP5g7HPjBJEMKacvqEcM57zmBErrz49p4qCasnokjWu6Z7vENh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ABd65bqHuDPpJiqsXPg8eN99ssrfeDKHgsqtDz64ZgkuJJQQDmSQR9AxJsJiD38KPtQWVg3tCCkCPDx73ggUbEd",
  "key1": "2Lowm5yTN3kH8h2VBMWxqWmT2oZsQjRbUs5jkZ1yeLcdAm7oWyryAvb4jMzezmGug85rDBuZB6dPpfycuPBipKfX",
  "key2": "2VaRTwpH86KKtePbach16jM2BaSbMPVQVG7qoxyt86kak5HqPvjrwNuNCRxHjTMdCcf2CVjZA1KxV7o1G8QZu6LB",
  "key3": "5VrfBSAX3CAQ8g5MmA8yPELQwWGurazAL8ZndQiKZKrBJRyBCCZUZMaoWFdpKzSSTavJ8uL8Pb5NBjH8c3uAGbU1",
  "key4": "31XUosfM9iddretftCSPJMzKLvC8B9uacoWSwbXgXZAGNq5tZZoqpB1neExKsd6uwH1T5VRUrufJgnnmziQYPPxE",
  "key5": "3cVzwHtG3XjDntwv5pG2CnNr6bqyXQ5wBeNu9k98YnyxWm2PLaJi4ntnFEfDRBb8mU18zbJUx2UdbuqqaEu2R7zm",
  "key6": "49HZXUvYZKUE9y6kCkcR5thJNkoWRpKuvyafA6YBFcnAF6VqPrkSPEprANrarCQkDvxffppRBmoT2HTnTVS3Srj6",
  "key7": "2WSBjLkfnZHjC5iRz3kt5y5RHrpKiVKVswHybXBtnkACmfPWAdMmgRqVmK593zvfUyALZDkgAgAcBbbWavcpwvmw",
  "key8": "4RQ7KrGe4tt7k7Te5jfQ6aUkxquXzjXiywyQTDQay1cc5FgHsrbeZDXnVPw5QSBvQcoDJ8rRcVK26KMeWs5EpHYF",
  "key9": "3HaxeMxZ1Vz3YQ5v5tHTRccR2z6YbyuMwatRVQmEf7KHKUWYfYeYJJcTj2UiJqfihZzJgkVbabH9cjVujJGWBLRM",
  "key10": "55c2tRdxGpzDJuARPuCKCErtH2kqtVg2vJMS5u7argrkxR2CM1bJMDHK8dKnUCx2xDzjdinFAsKpgc2omm1ue7ZA",
  "key11": "4imLe2kL4wgWMrPbujYmq3VSsqJEN22Tbc4UfNsZCrcmSaUxpmhdiByfUGWbxKFfmeTpT1pNEukL7UwJwHtwgT8F",
  "key12": "3Ramy1fEaKL8JbxBVwyqw6nUK2MJrKGV9aAAyYa77i3TpB32K79cX34SKmpNzefVS3YWPaeBwr5WZqbXqGVMGoiF",
  "key13": "ArmnubyKYXyo3PausqdXKekELMbFWVSTRLbY9vzzbSKevT3wKu1x3MAsPdBUKrGyQZKDhk7rWvnRk5MvFY2AhnC",
  "key14": "3X21G64kUV9MnxpxwmBZyLGcKDsMTjxh81MJZsejiMhNeBx8J2kecEyZDgHB478yaagexJmw2gRFivRMzJnZ9Rqo",
  "key15": "2K1Y1UAK63GNuxY1W5aZmRCiSZ6BnN7sCmaywzJQYsVgUUvuekXMZB82dv1LsNLdrGDoCiTP8MNnuruQGzKUjbvE",
  "key16": "4vEoztzih4xAsmS89Hk5aoVUp32mUgEax4PM8dJt33eYxkbitmAuiq3oASX4QWSLad2WH9CsZrnHoY35wPLofHRJ",
  "key17": "614uE5esCEaf8UJib5Wu2Pm2seoZapMDiXb7QW1qPZJqhwDwVe9gQvitiS94BX1WwXn7bCyMuTd2BJvRkeCJNPpF",
  "key18": "54dPAB9uy4c6drr32GkEWR2EsNnE4kmfnjJkne9hJrwKmxoPiHqimnHCKUXvYrKAaKrDDZF5zMY9EugJZ2N2nhRf",
  "key19": "5K1aKnWpwVzmAqPvMa7BJAHU6qgfpPo2nzaCq1EkLkorQDAEzZDXAWwXNUWZiRoFFCiWfQKJX3izbUuXgmEQfcuU",
  "key20": "22h6eqjakfTRxFivUXbXWxDn5xjUqcLut5bzTEYLnXWed2peFNioMxk9oagQL9AvHx6mfmjvAkv28ZWpbYRsfHic",
  "key21": "4u4miLZ1LEHJEG9BD8yS54em3xkhrxEgvzqwRimFXbe6ABieCXjHhN1mSjYAHbBjs97UjHvep9x6p6C5L4nPeFnt",
  "key22": "5naUGFKyUFcG9WanpEbGGxScN2trYavuXXsbj81JKnGdin5sq9FhH2E8nE7f4bT2yNbynvZejBrTRUF1LDhpzi4t",
  "key23": "3RotU4G7Gqe7hbr955rdiHAHqy7LX7EABcLRgyFYH4hMZxwRnZ7X5FqD57akfMuzgE3PRQoGdJ9JPgarXhghWJnQ",
  "key24": "4bvSbttQ4UfR6xKsHizKXzPppQJa8kbzYXfYFnY1vwJdUasErtMxQVhuw78oAU52ZRkohgWdPW2kUsoP4Bb6NGi6",
  "key25": "33MVa7d4EeSZdDbBfDg9bpU8t5bkcWYdYtkA9fEuNvW4fbGgjJRJjx9SdNimFgW4tKGy5tLV9JpoRXCRpbZacCdN",
  "key26": "y4EG1TppNtqs7PQ9Vqetg9VdP4WBW6UMZcESyo9L76dVBqB77thQDDwoAcjqknjeNtUZHzsZKBxRYkKTiDAdmND",
  "key27": "2PRiHEsnXhkVSvsZpP2Nj7L7DStUN7dHkwTLuEMJy53gS54rTANke39C1TruiRWdvfR5VjAcVndM5DvM1wyLkoC2",
  "key28": "2T7921gtrKj1LbYbQkZRhztLuatckaXhwnY3SaGgBLjeV83fDJymhXHovAVpSzXUwrzPrso1KyULGUij7eYApebK",
  "key29": "4NMH1bRuEno2MkW7DFek74VAQ5wFNDJCwM1y7Bq7sMvop263pcbNEMhcTY4fv9mFtg1ii2o9yMxFJBm1PHF6BMg3",
  "key30": "3f8Vx31GBHj3QHkJwGhMY73TL2FKXfA21p3w5EJkXQMesDNVRaXCjwNYybf3eWxurJBzo2jGAq9xLsWPgSwquKW2",
  "key31": "5d88KNtL2xAvFhPpbxEhFmcKCZKtL6PxWQHAD9QNbKs1g8XVKdjdhmsDpunddAwweTQixFSEU3kPEePsw8owWv7x",
  "key32": "5tgxyyVjbPZ9dB3jUypcw1yPX3YLJBXp7XPrZeKp1zwiJwhEG9SbeXWeUXG1RBDo3e5rVAu18hD2L5ewLybSDLHP",
  "key33": "5odRV824dnT5QR2VsJUyGi4sguFDpx8ZuJbTzUyRgPZztJFeJ8Ajm5G41pVvrSz4q7BoRgiBgUwZCMkm7YxXm6gg",
  "key34": "2N66XGpDxHomJKFy8qpvew83vijT9oM3QqHqCzgUCrVxHcYddxH4swghuDGkwAgRMGmXpxmHCdTsPuzqJ6GAwqSL",
  "key35": "DW6DLR8wroMsQs96bfzwBAhvV7Z3QYmwZJd8fJJWj5VrPQ2LBsSRz1obTySHm433SEXfNr3q8NJS1ek6PJzronn",
  "key36": "4JeBtv3Tf1KNWMjkFYNZWvLHVdkCnXPrR9DDLo8eoEbECg8GDrf8eEZBpkE2VpsW1vFXwe6cpZhgjt6bw7vfZAXr",
  "key37": "5BjmkFxHDY8sx6fHAMyvHx58V65PERpP9DsM8u54VaEszpHBtN3WRGM6rrtLZdfGHnZhpBbeYdSa4akDBe9FMQud",
  "key38": "Y77s12KsXmR1V8LXZJwfs9hFFaPnCNTby6JC7sKMBejjkWk614sUajgZbdb4TxrUQ5fjHL34CGhh5NWp4uvmd1G",
  "key39": "Pbmyi2BxW1KS9uhdV5jtbzshYViHJEzjcRxczh9TpskLVvnnAsJqw9JdDcmjJDJMGXvJKjkFcrznDU4nVCtsNhV",
  "key40": "2s9b5TLszztyCA3KT6tAFJtCiftxhuGsYt2FEzYv2mcPo6ezQUN7s6BbPk9KwStTLZQ3EJ4JvAqDTcBdcJZMVmqS",
  "key41": "3MesXiUX8BPWMWBbXDi1WJ4uM8jwH2o5YpbbNWo2DauSqxmgg1k5EgX9GwSSkAeEFsh9WN5pF8gs5YAPHXDTBjHx",
  "key42": "2Wpv915cwpkbgUwjYAcr7Qjht7XEFseHcfbtm3F8heLMp8VirvLAxKu23unvhDW8UXEs9suU5orCMeCrwr4L5Tk5"
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
