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
    "GBWvvYZsKMhnV8Te54JNcfnFPA5pAt1WP41S8eGZG2qoWgCSuTtMWiAAqMQnrMeSML5Bei41TUxzNznoC6mXkrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FKHQDxd69pFqUSmTXwTcGNeLiyhNLu1ZSRu3F7oYFmuuv1MiFJVtShQNousjvj2jPjJe1z8FzaTHac9Q9SDHb15",
  "key1": "3jAQG9gxXCMtdJHfSf45UP9NqRujEDd4PMZKZJqSvEsHrhEySzacjMRSuXDLeMnmgjH6sa1u3qLMkF5bvaeadCj7",
  "key2": "2UCJUFSLwNgDdVgq8ftjdkoP4caKgAcBs9rhF8qLX9ioBmVQg6pUxBgxzQdTX7YU1LCRXgkid22rAUJswZTr1h5z",
  "key3": "XnZ7Kf9JLhxm6imaATYSSa3PVUNEKhBy1Htby8KEwqW9vMuhoN6UUXETevCh4fnKnWJLNCRey7ABiMXWYLtP18k",
  "key4": "5WqBjVkjvCK5f3bvmUKnXAENKBBWrNpubwmmB9CpMmRVDCEtCdng7X1BEnRiXNW9AXYa5b9ecd8rKupzgp4hbbFG",
  "key5": "2PMjzh6cybwBtcP9KX4CYM848w75Er1DUajTDG6Sm5nZUU3mkyWetjNzTtWuxYtsLB4zHFqh33z7acNjStDURbsu",
  "key6": "zyqfBa3VWtuTxmLQvRoghwwmLAtev7ELs4bekCMDLpLs2zRABsaaGQZ1MVk258TBxAC59Nr9m3y7TkYQRZ9R9up",
  "key7": "3o6dMWCLNfxj6VY1z6MuWPLTHBs7xTWFYyhxb7rneu7ojgvhL8CWXXBvG5PmSuiKa54tC4CPiHLHGDwcrHYGrC35",
  "key8": "3mJrYoQsJx1LbNjjM3Yuajvqh36nirGirAZRUL3LnN7r6TdrWQtwrw2PnB7eRBKxyRFZG3V8FqM6xsjcxXEwRwYo",
  "key9": "2Wf1zDBfXJx9k9na4jtqZrsgocswsAL2F7AqcFYwqzDgTTPZLLZrSi4uGaW78rprDWMAPktKPpsCRzkgf4JxP2F2",
  "key10": "3vAi56L4ccqGRE7NAC3v5ruL1XYn5mW2Um59RBab4t2hRJZtbYwHvad5rsoRgDVUEm29VvAr6fHdT5R8V28DBaco",
  "key11": "5ZAotHpu8w5p7sFxUJEpkHT5wcHYbTABnSEXsP22LLiLp6g22v2rhwvf4RP6hyqcVyfkgDLdoELBJn7cGN8qrFpw",
  "key12": "3HXzbsNqCihCmYYVGFSkuVS1BD2kN3h7Fp1a4f6U2v8FRDsU2nh9sMche3MCpezgXxYZgPYaHQXpf2pYA4JXyeCT",
  "key13": "41ACuGFrJrX8TUyWNVuXEVFu8A8ZB6pTozivyA7cmDVntChDAeo4eictFp5xqJ5445k7krAMTuQDR89ivfGm83Rj",
  "key14": "5YgyHTcD8zUPZRs33QGioAiTKdCCkytauQQ4ycgmv3muD4BG4C8QhkT1b6RRAjovA4FWojSB7gMwc1euptTZ2BPU",
  "key15": "3CK9bvtFis8ssjtRa8YP2djsqAX4avn1xfHTo8fLiQw1oEA4s1J9RNk4hfdeVQHD7WU1Wpctt5zXe6765aBWMnJv",
  "key16": "5ywpLc5AgFU9QVHH9zkqCQYGcdP7tRMgoQMwd3hfHxmbsjVfY8fULYxnpygLC41RmU3LUpxoQCrPSd3RaUvxPEBG",
  "key17": "ptE9ZwzVefGaySFV9wVDZMbsVx9Wu8uYa8QTeRj7VStBiQbdJoRe8FLxTJbh8PygXwyFcsVLFxJN4VgBo5j5KK8",
  "key18": "Cn2uUPYCsrFC16vKxhFd7AuT3rRWuNLR4MXaSX21qLADwfxkbnBcnUWwENXqtLWozwcWWw89zrBmvAeJfAys72N",
  "key19": "5rwZSRY4XLfGCnsCcwDViXxzEBBM42sik5evXfNJ34pdgqxSNmCqe7P56cCzK7Kpwg9j9RKqw4SfR6e9CW379DeU",
  "key20": "44rakcWJm8yRCPE4xYCLAb7cy5j5FkZwfa8KBn8ShtzhXWenaeSBsauwUZCk381AGEXXb965eRSgLYmN9TfzDLBx",
  "key21": "5i61DWAt7NvZJtCS8hbYUfwU2psvSW3JwpPEWxgk8McZZ8FordrRVFyixudiB5r7G4Nk9hW9SojGKjLiRfPxxRvt",
  "key22": "663wqUirMD6HrsptSJcAv2qazDCr4vz8gsqG8zh3rLVdsasY6iAcKsAwHRNSiy97UmDyKZgYYjBBzWkvVbAwTbcN",
  "key23": "3MZUx893wM6N2iu4tNscanUP6exhbtwn51vTMb8j2kR1s4NwzkevTG67bXNKZEdfxcjCsgHvGazzEaCJ9x77dycb",
  "key24": "5kTvnqF1jPXnXyPMkvva6Nu1ZJodZTXgKnKQnZpf2PpuvNVs2Y11xnJivRYT7x8PwkKDT8rDEG4NH8PyUmh2F6Xp",
  "key25": "4eBVk6rdwnNLyi7vF7eb7ai8vekCj2UPoh6rPxovzrFVbUYqwNh3yYusGfkwwjeRpacMBZ9ZcT7CMAV2A1zvFRWh",
  "key26": "DKTThSdBVahWVNEo1n2jbduLbw8F9kyYBikb79qnGrBWReiYmrLudDLCMG349bWvtzN1wCyPm5X8RLpdzvVEfmS",
  "key27": "3mG53ASCuc82o79uvZCg88KTjmu7mcfQJtZSaq2DwfvRtRUKWGNuUYaVDzdU7suFid8Yr1qD12ffk7CGyoFrg5Gi",
  "key28": "36i5ifRTbVJUpSxjUeAgsVYTueXmQDJ4jar5rVYX2TFsxg6ED88R74TMaeVDPqyaAAudhNkwC2DUmWKj56vTuVJe",
  "key29": "4HpP6iDUkavFU3xe3Fx3zeXPWURYAsUuMe1evdiVCeyh7UXuoaKfhJJR9hvDnGzwJiBWgWFHPxXhcT9WjjSc3iDj",
  "key30": "5uNreEEv7kZDZ4DXHEhgUAW88ADKkQNWNPjdpQdCtKUTXUQgVyzunKPBnQuSAcUZ9QM5c8HQMns87qBvQjwpgiYg",
  "key31": "4z5vZTuGgo45VhCMfj9koUwBz9anXuVckgB6GWUxTSE69eABMarzVNaHvMz6e5syEzgUv18iU9tTbNAVX39mzM8a",
  "key32": "4wHr8PVrxeeJgapVxscczYCxKKcCmmALmdfrugqBPJ8wPiE8g73Co9ux6oDvfRJN7SXKD6FbNjqM6oLbrwEi59gt",
  "key33": "3YZPRMMYPxhEmAtsnwPdmTuEeRzvH2cGbTm7MUAfpT5dVS6pgSGCnTBDYKtEacyTxM1wHELjku1kyBBzWutuUzgJ",
  "key34": "5m9Ps9qxUVSsWwSRBgknhxAmfvkaKVb3JqMo8KzLboTsmMerjFWNfaJ29juUdCU6saEPd8icQG3oFiz869greaia",
  "key35": "4VgmrN9pRuLuk2X7sBNLGsgShBaWNRN2biGphZXQLwjX3BmP32HVhAiBpgNXAeXmFg57FHgQ8ktddkTpvjqs8Poe",
  "key36": "3zaAEkL4ZfbCvWwekjwbJHF5vxDdvyoYPxXVz2WqFuXU9vMY5zbM8fVxStao1YdjvUPiJqAu1JzRsQXpFXSYcis9",
  "key37": "3xF6Es3BvByREpGCYSaY83Z8yfnrNhdZtdw2Rqgs69tAMcjySUGTAGdmWe9GApQd8pgqHv1F3hXXfSEGBHj8opVu",
  "key38": "4o7iuWEALiHwNGEr2XPmFiZJ516ACEjEgKrYt8qAQUufAnVrRRaUQXaqJtZmYSdRYr2h7CVWtfqhmjpJmx9SxoWM",
  "key39": "4DuX6kgDrTEoiXeqTJSfcUodwYNNcvxHE79DCrukEgH3fCoQtyBS7n78ovs2WL7x3t9gM2qVuB9WWJBxuP2i77i5",
  "key40": "2WkG5dsyguJCENM2TLrGzLoEKXLPvWUwMFXUbZ9hqamsG9ZrDRTRziocVbwdcqth7gAMeYHXvz5kL82XQpGB1adS",
  "key41": "3cG8PXaGvwhKutN4nFqoQXzHtAeksmYivnyrnpBd3xyZzPB1UnKbUfSM2BAnZVWGyy1xHD1QM5NiWw1yt6Gsg5hb",
  "key42": "DbabRxwUeogpyTxiU9frcLiRV9sd4KRi898878vXHrgUHCKwDqSx3U8i6pZZtznPkjdFnDmWDvU1v7ryUARNHh4",
  "key43": "5WF9jHa3hJboKC1fViXERBqqBcZH8zyaJoU49RyEmggivoZVryyANJPFvnzG4Lm67zCq1bi45TEXd2ujMdf8zQXZ"
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
