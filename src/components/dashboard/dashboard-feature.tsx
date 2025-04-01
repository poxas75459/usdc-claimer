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
    "46rc8f3c4i1xyo2FZgaGpjNVQ6rnZCVTqqtQ6ZzsW7CRLiHiYpB3LoLFDK4BLkffg4FQkamrQeYQVGLQGfzP9vty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51gqaUT5GaJBTGi7QMt8sDrtrSnym2rVU9tnGNhPM6NHk9yffvRCEytmpMcZSuQbjhdRdobA7YopEwaqNAxLodFq",
  "key1": "NgmNots9w6fbC9Y5BeR4PEYDrywVBFC2ZRbZNvrf7s1mkHCSKzXNfdxyE7ywWGYueHGjidRk3aMepKk1oygvyPn",
  "key2": "5AGx7vFNpAYEwVfe4NnaxyBqbAx5ZdwouXccUL5ZRFpktYtZwXTax1pubQ97mWQWUhXHzNzsStKSgMr6fuvtcqLq",
  "key3": "5kJ6UWXEgfwZjkSNzCuXzSwNEWnbRD8ugwS9L5eQa6GuR4YbZFdSVVc6UKnCEbbaypLsRgfRg4ysqEtqKqbE5z5a",
  "key4": "3uND3qHva1nptKkVpNXYr2vnjcHVDSK7oDcDKNUVsczEfVPBcrjJymyzBcr8mqJHJDCJBa4mBtsajCnoqVSaTs5Z",
  "key5": "3xjjncbYw871yoQzZbZCVzbGbrHW8c65jRDPDmqkYj64PcnGZXsWVA7PbK8aCGei1wvSHugSm13AoNAbAP1KCRAs",
  "key6": "23oHHrNq6cp7TLjJUnPFYwHorvXEVmGBmBGS5tYEeM1K4Qkg6oNwGxM4bKqdgcLcQBB3SrZSP7jMTSh3rfHm1hPi",
  "key7": "F1gfzxgvKkzRnAk6t7MVYy26xkV44t9obZ3W7XwubRjMG5PUbDW7YbSWcHUDyK7uTEHVbA9NXAqZyDhw9ekhgJU",
  "key8": "4VuhYT6BFNXQKCR12Uga2XYE3ihe7c81TFPeVWYVs4kmQAKfNX1p9pF5bcTUmWKp5uKX5d1Hu1abaBPt18MWWegY",
  "key9": "QCT5g1S9HEKuFTZCcMePVF5DtjuFgMyLUnCA5j76fP5nLngMWs9ZSxt4akff2WtjMDmjcftHePKujXEDLEKQQBp",
  "key10": "3ncF72ZPPM84EH9e8KJJvyL96f12fJrJpiRCKdTrcKQeSXrop2EzwfMhZERuc3DwYnd8tCoZtetFXmEoBqyXmC8A",
  "key11": "4vvTeiEXTfpETZHzJRy7TWKRax3Vvq4rp3VaxxnRZ3ReEYywj5Qp6JEh82WT4WvgZMXGZ4uLpiZXnGF2hwPPgMT",
  "key12": "F1vfTD3KakanFxeUxMGonGP6Uvs3YqA2pVhSQ1cCkawNwwQMhFywW3ApPjjbHnWKnB9eXxDNcwy6NWH7xC1xK3N",
  "key13": "xmfDBCREX1xV87o6NCXXEigzt4s1cFEFxhRyWWcjFhHgckzwobZPf6nEccZVtR6AryS3K28T5opvnD9eAD6QeC2",
  "key14": "4o26g1s4PTTdtMeyXhbUvP2cqvWpt6FEe9dZdeCFff81vVxefmC3z532fpskDeHCEGh262v8tMSB74XiwBaFnLQh",
  "key15": "jjqme29KGu5BD87oj3aNPUFtAd37i7wQfqRfzGoQDB4ZEkn8qudGDkZxmKxoegkPHNujfxti7USwFd3L2Lb7AQ4",
  "key16": "4amZmzzh5SZzaUcjgEGWT9w5ctsqZga2tLXMUBHqM3hpfLtSBWZXQvC7MwkJBGALuzpzbMEiwhTwGvUYNGTMWCqy",
  "key17": "4waYEYrqDNijnboFRt3ndMqPaXzxZBBDf5NLc8xMusL2JK8xG6Rn7ZRFR4vWWkUs67Akbo9zZNR5JLgWctNVWgwK",
  "key18": "4wb23UmD4tMoFRebF9WouqNgkY2x5g27WFXahbe5GJ4HiQjFJV81CCqXcyFLX6MiMSQK3WYYBkBdFTVXRDCuE3sL",
  "key19": "5ht23kSEJd9tfPxFJJcCocZq9LpzFvjjmWzUAMaJzyprrAopuJNQdJY5dBypC5dwjvi9Bs3h46mj7h9XwtGHhQtu",
  "key20": "286U192YVf3RRxgzQws4t52Yaffj4ppLX5ot1ZxGB7YiUiHnMJP6L1g4NBgYpfh4mmkPndr8hD7oJvVcomkuSWnB",
  "key21": "64jrACJRD7z56KUWPNhHbbErPnipjV38THqyAvXnAiFYnFSs1bQQpx3QDDSmvy1VBcLbAUoFtNjPP7Ubfm9Xsxg4",
  "key22": "R81i7K8FRNQChy55u7xgUk4ri5Qu2zxtNqkNsM9J2cHCTDdiwfxK3LSrvnGiMbPmjBJFKqoagh7MTNWKKQDuf3S",
  "key23": "3fdyUZCZ6WezNkMxMSETvQRr7zvdB7cB85cWn4e6g2MZAo257PaXmQHhPyTkYQVw6EH5amey8EuLoJ2YJqZtn989",
  "key24": "F5459WdVnnb7jXYFcuYuvPkmVr1s4R7E8PKKPTRQeZGAfJrPAsRME1o3JRybbkFgWLLbQTWDHQP2MZL3DNL93hk",
  "key25": "2yEg8DgWpS9MN8sjGh7PMstA98nxSunb76C3ZR942z1tH7YSzosYNwaJW2iGrTysYR18auoovwz7ah6JY1vJzwrV",
  "key26": "AXrxZ7JKSmZnCHrzan7q93E819CsZtCtEdZLLC79qTqJgNxUde2gPA2MiB71LD6FDHbJot1k7VKXyePwxWT492S",
  "key27": "2PVRNzwTj9UWevGN79egRcyYw8yeZ7NDM6vjjVceFg2A3ByzzmkK21uuoMoibULnEBDsgdmtQ6AaYw2dv23wcaCh",
  "key28": "5ampBfFDDK88HWXp5HbAdLN4jy11tX6HGbNBWaRpYzH9SFXo2Cng6vcMnAMA9tGe41hAkeiu4ZxEbXrieZxHeAwE",
  "key29": "5vdtmk3F8JntRwWErZyZETsJHoNffp7xAAWUKXoUXLLkzkK5MhFcouzibERdgPKpon6qLkH7iYqB3Mh16eyTt5wS",
  "key30": "53UQTzumem1CwhVJaV7XypYVeDAtQJA69i2M5yEYc1REfYLLMe6zmrKw5QJVdcaXSPez5GN4GZcwgwk5SW9UpU7Y",
  "key31": "56ZqE1Y57FdUK2d1BjRWKxeeMARXQwVreTRCXxDYdqMoxctEhQD4GS4KnZ9YAVBhM27CwXh2XkPV2npfJ3Sib7CK",
  "key32": "4csueqe43S6Ph5J4UUHinmvV4RYeC19mKbbDsb6gMhTCVr4NL77AR1mVfRhZZ8mt7DzRm94MpiLUYRF9bS9VwW2z",
  "key33": "3cJom5y4ukh2CZXTYLJpUKKCtvfN6VHuFUZT7HjMMLc985J6wYse2Sxg1waBTVQFYgzF7J6xzgtNS9vjozsAVNFw",
  "key34": "9gJZPd2T7gTrYzjfiDHZnFgNwx34dKiTS6vDiRpgwAmqiEJ1sc4hYGxVYy5YQUZnxYpVdR4AmGy6tS98pEJRKDT",
  "key35": "5Wk9UaMmGyC89Tz3NnqgDZXqAXZR3sssRb7C42yWgFDrfXPHh6o3aBBbbZNaJGj22awApjNkx4m42z6kWEjZBMbq",
  "key36": "4SkaV1vWQPn38XocEFixzdrmJinV2Kw2Q92XCiJShghcwwwGc3fByCVfA6WVCAaPRAJeG2SZ5pbnJYKXtt43oRYc",
  "key37": "3oVa26dKm89eroJQsHwfkd4Xiju5gFhvVy1HjrPAfPiXUJytnaoCRCfK4tKr9UjmGFf1YXE4cHSAttSBdVJCpjEd",
  "key38": "5bfuxSpjyvGqP7FhzmE51VKCben9sMjxcdhXK7bnpiHbsuJ3jRUxptTegAokpVeKoZdCRQZ8ofNPtRCa1Dsw2XXm",
  "key39": "23jwx2KrccS2eaWwhpW4cs9NZXhgBcWYSHTp1HEf1CQEyh1w64641fX1PAPXJuAdisWq6uHBgprnMhSEyFSDHyuw",
  "key40": "5tqxvY9GvbcKtfrm792FstPcqUYjPaJ5gVvQEYrBj24At5UKtwE2XkwTCqgLBs8czeZh3ZfHr5jaF5yySVE35iBE",
  "key41": "6H9rN5YeXyz5eYoNxJii5qSZS5BHvAHrdCFdk8bwiF2MvLpdSe3RNoswPgPhtZoTqVNpB1H5qrXaSeF8G5rdtAX",
  "key42": "5KMA2oJzHGwX3QAKKUEygFhRkpGYhqrQuXQun9AF4wYyqrb7X3Lc6ajCbcbjarikrYDdAqC2yQAUk7SgNechyTMH",
  "key43": "Cd6ZVqgDpDeGR9NwDcMKF9EWDUfHuVZhoQZR9ECow4uyFfbaPa1UqF8sRVtGVguNH3VsVVB6AufCsHXVz4t4s3B",
  "key44": "4csMJvDK8uWvC1Xns3XmzVHoYv1hyvTmntufxdNPYm7bjmBxy29XcXMpzTjVRHt4aoyfQ5D9DV4A3ZTzLXW6mDmF",
  "key45": "g9LFTCXmKnePQx3Xx8zSSyfbV9qyk3TzAZAUPV7hj1pDXxMUC5MnxdrQ5BD6f3cg812Bc1GLfoujqdun7eMLzC1"
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
