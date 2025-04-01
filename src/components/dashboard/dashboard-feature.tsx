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
    "3NttnYu7TnfeRCcewUogFszDwccsdh6phaKC4w4o3KDFf9siBAgmNLFimVk7zDasZq8QFxysxZQnz6LrCLphAQSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sjRxUgep1Ano8wJTCUaNKT9XzBcagckuM21AmcdU3249zRcxzMTwetYCr48KdZG2rR4yTJGf8Eaps7XoKjz1TtK",
  "key1": "5xqHJjyfFwqBGHyHgR3oGd6oxMys7wSuDpxm69qA8kDjZzMqbhT9vN81GtA1W1KP7ip95HZstLz1NKsMDSKNK5Tk",
  "key2": "54en3j9BPzVhjEYaw2j3J4AoEF2f4i7cCHvhcom1jhvfeGijVHL4wbdoXNBASzQzVGxWaiJB2LnfsGZVV5vZ9a7D",
  "key3": "5VqJu7Dh7K3VAACQLmxgBpmZdirLEh6HDMsaJcFdqCff2wzJepZTJLYbMqcVxDVzN5TAqVSwWHem8Y7UyAsTVW3v",
  "key4": "366euUKMR93tvf67TU6gduvCNh3qFX1Ba988BAzqVf5TdbGcxT851g72KottBRBkL2zh1syH87pWPNftu5ipCVxo",
  "key5": "3DLK6iwDQYqCt9s8A9oXgzDCs2fNxYKkD3imz9K9DLomWYZw2nqpi74WnY5FTejRS179MNhiQF2PH8LG6igdSTWH",
  "key6": "54P4cNNcUoNJmvqHRLGNHHhf9UZHsH1Ma78H2NN2Yxw7SifZWxzrG38GNZkDnv4pocJZjE766e8vszdqMotYcKuL",
  "key7": "3Xmk83p8YcZSR3ohdRc9Uhq6mWxyKzF4XDPNu4ZPS8PsEZPHdwR77KPHsLmcX4xrezq7o2NwKVmoBRSAB6UH5DL1",
  "key8": "5FuXCUzBnGh5e1JhCyNjXtVb4ohaSYe7E4T9y1pBMuASu5tAG8nUb16hbcEne8MJhp9fhc9d1DTWsY8igQHiLzuW",
  "key9": "41hKHW7aAKh6HqVcvZK1RT2ZKsjLRfkc4dsHUSNbLZgwF9fa4eLPBRzpwE6winLdBYWDx4uuqaNDMYWLhusyF3Py",
  "key10": "fMdLGkvJckMozQcQD6LynUm2RhWPnhkK2RUUAoah5D3ZmsDnV9TCU3Ho8XRAWV7zVtZxQPhmvyGphqtuVRahrQd",
  "key11": "UYB16xixReFVmyFWSamaWF52C768Re1XCq9VGddwXH4c32nrgUniALGX4Bsd72awGbg9JrXiWcZvN9Au767eEqA",
  "key12": "43e5uvhAREJZfMpLSab6kas1g4LavfVg5NkJgSzfEn2GpGvcbCC1HL3NEW3wH8nVBK3DeY19oJsj4aNvn2q6WPjH",
  "key13": "36dfpwH7X2i2epuQ5ibf9wp6qxyiAx32urgt9Rvc4uKuLvQjoCz2zvW5fV9KD4VxrbXNQyWtG4WokdiKPUNTQCJ2",
  "key14": "2pNmKqu9Nqkon7H8xSa8HyjpNdwYBouZXSLQwJjvBTZngpaFyCGiG6sKMGbEbQhwWmfqg4SSyU1W8iWGQPdtMCtd",
  "key15": "3h5dpKkWcW7DvJq8iphPSN4y26ukCE4Nb7ycK398i1ex3npyQQy6V6WAd6rSj77yCsZ5QisPKQcETAJjuM6HUm4D",
  "key16": "4hmrsZDKXR8S5qN8rmUSzSahp9SFZvkay8EzZJKRWDmVBr9TaNqRidEDttF1z4xJgudUmdUXSxXeE8ouhgUNQSf5",
  "key17": "3pJxPVC7JWVGQgFnsQ4G7aw4fCt6jvzWWcMKenWhSFhAMTJCgQEL9tTF6vv2yydX8XFWfkKipjug4bZ111BRzvCV",
  "key18": "4pM3gdVqN35atf4XXPK4T7AtCoFXc5eJLwjKLBywwyPRMKt2gHJTRnfa6E5T8HEERqLUGYc8fgYp2rTbAsYvNEvc",
  "key19": "3vi9x2CoKeUQ8Lr8Kfoydi9aMJ2JtGfqst1mBQkjeKgeSkgiNBmV2ibcRnC5zbjKQ1UivSdbbzLEJuiqHBiFpaHz",
  "key20": "5T6WwRVePPpGF7fiBApWy9Lfh7ndCBzihzYLNYVvKvDrR15q6XfvfBnEctj7q5PYZycpFqg7677pNdJFJ4iG5CcT",
  "key21": "2tGL7VvPH9cWmfSqfMABCz8qzk12FSq6RJMYUGBemKSChh1KH82etWxRWfcjWaMjS9DRrZHZpquiutYm12o7cwbi",
  "key22": "3VJgipvoNSwptzKwMoN3cKVBYuNSdsVpMbVZpkHyA1Dd1AU8yJ5TvwJBSq6FGMMrZZ1tCGWPPoVaepFSDMVrf6x4",
  "key23": "4hk5amm5vWixFbcXqXv66A8WfrJgyPSwdZyiwZLHqXP7KfvkhrvgBHfJxZrGMV79owwGVKW4V2757bQEcycm45RN",
  "key24": "2PwuVxa6YnsuiAQFzfG8Sd3BM9AWkUegGnVgFyQAp2vmNaaGUFPyUPQXDB1FXXDSCigfG3xM8fhvFM8cxpMacQuj",
  "key25": "2mTpUr638csAePN96hqzbjP1qerRC9QAmpYQgNmcnhsF6YdnLXG4bgk6nKheYngumdGYrXem9PCSneCwZe6ZRoUw",
  "key26": "5dZM1FcDvVVTY3D9xvM4eguAxzFeKP7t88e2FDeZpW2YAHxYPwiVs2LQZ9CHcD6NNMbz27AcqEZ3tdDrRrdw69Bq",
  "key27": "TJDf2baef8eerSHPryCs8VHgJdtAZo5usY28oibPiqvb3MhjBBpJRWics9pR4RMJ528xAfNbq1JuEJLpnijGAzz",
  "key28": "4FtAXQHkX5prGzqCVMBVNFiyWQHw2jYHo9J3ospwKuUoxpvoWGiFkBzs5psKwgeHDKeFTagZhLYpECX8qJipvB77",
  "key29": "4Q7m3bp6dzfLRscdvio9x712hmQ5KcuVmmaEjb78BiTcDvTLtXVeGteoa6akB53ruMrC9UBn3z7Vqaw9DtgSxGVQ",
  "key30": "44QGogkjpdGFJfVB3QRmYnn3UDM9q8aRuneYvoxHkRBAw7YjuJgfbhB4PeokJuYkLc2KkTHfXrUHCfuY2Ba1Uqfs",
  "key31": "4UtWpBFNttLWtN6BX5eMrxhUmSY7Fmjd9tB5j12M8KhT1Bv2pmjfD6mkwTUsStHip8SyfvivVsssqZGsrK2RSsSw",
  "key32": "4eWNQhrpAP6MpUGYXmyopXrraRXpsY3T6MpZpCaSVqjxzRvsy6mHg2FgmNXD3HCu5j8frYvPD2CG1oJnun78zbqN",
  "key33": "5cMWeMSriJr9fLV8DWTXc4vkpahBVSf5CBLNMtjsXXRgCvsUNcuR1Mt9BtgysAs4jYprquBBrvRqVtAnfLRpq3aQ",
  "key34": "4Z7nrB6oNtg54g616VZnoTiG9jK1RM88KVkhps8jBNVeLxyPNdnipsZg2aXeH2BL1cXJ31L1bWZnY1dfCePYTXtH",
  "key35": "LH5A9zA6h2F4Hy8PHaHyr1Ym78GMaBSQZ5nFdrVhE8vLnEqEm9Z8h6r2Cww6XyrxVBLv1E3VXv9zg3HGzGtzZFA",
  "key36": "5LH1EsuynS1CZWKm9k7HJVT4o9Nx7KaS8rTgYZLdG349guHZqTKtEeDPAoWENeCTxvuDgTVp9FMbEUEAvZyjgces",
  "key37": "5arEHd7ZrUYUrujyH4H69ysF7wUc3vBHYwAZUWQnDjgw1GAKmVqcdQwBD9NdCG8DDE7VCjwLpQWHCZNyfP1fKha5",
  "key38": "24iW8juQGwG79fqzdfA6XArJ8ueHsjHnfnKjzWLK5Sy7a4XBVKDZxKRqND2uzeJu6F6JbeiKeWn3RqNPDRm2Racz",
  "key39": "5F5FFx4MRcYTGK8Mf5rUXopcKg3TGR8eTjZh54iS2o31qaw3wsck1zPj43j3jd24eBgFqz3Mhr8HV91mxrnXN2N8",
  "key40": "4KG2E3m7WRUAY6vFz2QtxM8wyDvzdC99jzRNKauYeuAw8uwLjM4qcPWpbo8g1sUmfT5a7MRQSpm1zHZNrnsn8ctx"
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
