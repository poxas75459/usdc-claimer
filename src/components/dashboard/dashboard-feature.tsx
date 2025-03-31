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
    "5Qy8BxvQoJxZVrPQn9ZsZGHNQ6DjceYGkLah2F57CHD8pQuRnCRAPeec1xzfAGFSFpH8fHTJ4M7CaDzA8PBD8zzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KbfSyKoJnkjKgQuGmwBgYSWnYnm4a3EdvwqmAJawgjbdrJU6JNPsRDX4ZqiNB9aG5BKAcXQUP9Rynx8qVq3zuXi",
  "key1": "28nywvcZLYGsXzjoAFUabjEnG3heSfHeM4DyZvuaLMbWMXUfrS2LiNq2U3zuQjMvYNMgTNq997PTwufvnCdiCbj3",
  "key2": "3SPxH49FzuTK8HdkyS2hWz3KxbAWNxLvWyqhmCtqEmdjHWUBeWr7H1GtVF52s9p3s9u6vDe41ohL1soZNFDBrjnx",
  "key3": "Pb7o8Q1K1MGyYL1UxriB9i36ZGACxrvPszQZyJEHkaE4pketZBkx2k5tLxBwuXdKHsDg6BmMptdgVet1x3tFDqK",
  "key4": "4ewbDJ87j8zv4z5iTqa4dYrrpyiPbHAgd5eGB6xZgQKHxCK3Jr8c2ZpQCv4e9cpJRwg7Adp55mhQaKBukKUeWZFy",
  "key5": "4ua9RJETZpiiETb5iXd2rjqK818GYv6JnKb2z5HbDBxUmvPi1UZcxoCKzAaQE7XtBtBwuPiBsL4UBXsHCCvgAnrm",
  "key6": "39TiTowSCqs4hneRC99TL4p53tQTZBkFHW8XSzxAK6g2KjexjtHquxRsD1eZ6j3jGnQBDprEgMYD7ZFNQTM5vy7s",
  "key7": "3QkZZQ7D3xPvth5rzAqs9fiykrHLyaq3QYCVrnh8MUFnZDTXeSB91ijctME3bVM6ApXxkrNpWXadXnYNUWKK4uy5",
  "key8": "663KrkgTeEiPiAVixdZP3tJKizoxUQ6mSLcV5kfUM9ZAn2e1xi6TFnPFR2MQdSV3Ezs4amYeQrAfQyckNgPMDP1k",
  "key9": "4Eo8dBoUeqwMmxc6ZzKjfMMK2XQ7a3gMjxcRZTYybHPRuHu3T4zU3MjrfAkghfkmgz5hQodog9gnvSEj1yta2k3f",
  "key10": "2FaxqTp6B8vBP2VTZr4CCYXaK9cyLdm5a6SHdDtBprXz3mgEJ9rmXeoBNZZMoeT1zrXCWdpy2G8FTnYxgnNryoL3",
  "key11": "4zaefnt5r5pTGYHNbPA2xeRzhWCn8oyfq3dDkHbPmVJgi4dEmXB7JMxpJJ4T9xAZ8t5h6qdGVu1aME1zrd4daec8",
  "key12": "2u69nBcfyGYuexKwNT2hj7d8zi3pY8cMZ2uPStd3dfJNkgm3phNbke5P3HnXySiHLrWQ93WLRcEYC4RkvLTAznsw",
  "key13": "5SBiGouVSpwGafKx43me2DivUMYzvcfqKmci5eQ8iz8mkPKo1HEjiYkexETK73ASQHJDXKjnpFbDkKwRod2ScCmZ",
  "key14": "5Rh6LtjpYgp1wkbAeM4sTZdc1E6q8qB55bJZMQGRyuWna2RxJzXP6nDaji2z5qDdXEKaJPFYnqMTTGBpsX9AMCBd",
  "key15": "3kEfKkFARhKdY84ahcSvAX6hE2p3yPhWjgJdh9CvakpYwvnJzqYmdVr6Ho2XvhEkEvfMaAE9dUjwb41hxVCfNJer",
  "key16": "3eLF3iibpR5atcwtzYFVuxAd6Lwxea81LzXP8GUvVtzqnbEeGSC7Z7UfTusaXZW4VMUFby7K6fBAo9nqRBd6vjC2",
  "key17": "2Hua7R9KtrG4cawqAz4DjoB3CdYUU7euHhPyE8DoH1nBZb7ASVJGoER7ZUYLjd8bf1TgWkKx6uBXw3S5oXHAui9u",
  "key18": "3aFK5dAKALKgz54j8xpmNG5bjMxpwxEAxVuT3HYi1vxjRjqagiejbGi9yk7dMbfEv9JXxzvS4UGwaQRzqnciT5L5",
  "key19": "CHxp9WirW2fWB3aVZGNv8Q5pP8bLSEcw46hsK4eTmdviv3CdZy4QvVKK9NdeNTLuCTrsoEg6ty2vKikE5XnZV3V",
  "key20": "MpzoenqqNSwPS5ov8jDvkSSikyH9tVipW1Wc9kMkMD2xauwiRv7tWauWdwggxHhnB9bftiTJnDTQQMwJaPK7BZK",
  "key21": "3rbBJN8z2dYibmEJJVHYwTKmE1oMeGUcoSStCn816tFGpZdyC9a2nD23WFNPTFTwfHkr6t7zb3Yz3hUrkqJ5oiVu",
  "key22": "4KH7ZVNWiyBf4ZXcTGaTHqsbgJWAJfK9AiM2L1N4bBTer8LQhbxUZpMUj4RmVwDKPviTK9kB2LYPnvs82WmFyP62",
  "key23": "4dPmQ7ytw4x5R9ihbP2uaGHFaNE2fFcow6cGFTg8y3hCXGPt2WpZS3a9v9KYnmL3dENTbGepXfzoV6vYsVnjKbJ2",
  "key24": "34hDB6jPZuYfw3AQdTpf7KA6KKdL1S8KUTU5ZdST9bLVDvNso1xUWBXPqkvV8kvvDe4a28kpXKAYTUkBYPk86gSY",
  "key25": "cGCNdFRu28DNPeXKm79FGgLgwGUrpEbvQRXJGbxqn8oURJvGH8qzRsYVZ3iTJjGqTk76HUNP4UbuophQ1u87QEg",
  "key26": "KHe8d1SYinuT8VHSxK67oX32KD3JktVeJGzpAEMdvm6WDabAdD1F6TNTpqGo9hd5MKaZM6BgcndtQEHrq9Qd7PV",
  "key27": "5Tn6raCkCLkF6xoHi5VZLzCmoo6efRx45LhTmfNo3vxJ8pnTRU3gFAWHxEDaxntoccrFFLNbFijHHC6qSJqRQrH7",
  "key28": "oNt436DjyzSeCaSykRZwmgpkrdPQPsD4WZ277xdGgjs6GxGU81Gc9DH7QFJH5i4JTkxboQm4B44me2HYrJprcwB",
  "key29": "2viSUWRD8sHHENkGAc46Cih7Lxcov6BzrEKhjW9JD86UkuNNpJeoBt4ZQi4KgQEAFYi5hEjefApZXGdfweuDaNF8",
  "key30": "6UfJBwXASpTS5dEhsTqpxuiygn9sZUVjrBKuWkC33FMwejq67D6KbgSirHMpBE6dv49ezFsFsh2XqNuKDao7rjz",
  "key31": "TtTAPNjf3ERt9yTSXhYBPAHhxRjrVdg3igxY6foH8ru2npN6gZeL5QuN5gdfXz1RsYMVJ5Qqw7f7RnE5TnKsFTS",
  "key32": "37JUc9ggU1MsVNyXXsAVwj5upR4wgorHBw1P1TLtpDUB7exC42oa8kVNR5sdkV57H2Bn5b4J9bnhZ4pF4P2cYtM7",
  "key33": "3AUut4KGyif1v8XeWDwSamxVM8P7d5WEBatahEorPMAThVCjXQa3dvgCAaaAHnDp3apZnbaQ1mqY7H3qNjAfjrxk",
  "key34": "4yi83fCkDA5an2BZwVg2WatEZCzZ78uq41NnSb79TdtT63GyzsEdg3icnLnHeWwfx2UQAD7NjJd8r2vp7wXTNwty",
  "key35": "37GjoYLtYTxbgLZPzsUngwq4WwaqW5gQe22J45ktgJJifQyZKQH7ux19PMBvpF7HKBaYA9A46xKrXzAPx9QYJk7S",
  "key36": "62LrP4kBjboejBNVDk9SsfmXmHobKvjRtT5a5XitekjLRpiXwHPmdBHGMzn14BYJqe6CYvMr7qpERKreq4UWjAi8",
  "key37": "5CKVyQTr9M47UQ2NAZJFCb67kpnhXQYUeUzXMXEK7MJho7iiExUfCWAmKbCriHL62aNGogmkSLXf9TWUzCdhDmkP",
  "key38": "53DZMRyP1cFgjEQ7JE2PKmYUncFrg7oXfkEbhwWZ6nhX61kGDmgkCo2VWyD9Sqf4ZsFH7A2NUFLx1EDctKzQctfC",
  "key39": "tKzGdAcqa2kFWwC32uMEZNcGSDNy2kkuG92i8JVQKZ8vBgyXBiCQc6j5D1Qtb3j3KdJD6w36e5k7DP6tHbkFEgW",
  "key40": "4WoP25GdCMC8EBqqAn2dMN4bZuDgH9opwjNsWxLjHUvjRv8YNoVZnaqeU6LyJawZtuJEQp8PKPAcJ4yodJFBamAx",
  "key41": "2nV2RobLe6WyGDsbv9QZRUkUbpfahLfQu95HGU6isFA1rir4bqYaSHxSNfKRFUD334AS7WezWL6wEntCSBWnu7Uj",
  "key42": "58JZaLev5GXnY9g71qBrYDepx2BXH2JEm8La6CbRZVF22YEWVn2SuLGNvRU7pqxd61LHtptp9RRLk8XX66UuAyjK",
  "key43": "J2AD8DBd9fDYLVN2wvXvna2EhSqrQdNnHrtBBqtJqUd2UkA4suvSQsYvh2ithf2qFyWYj5DthSgUmj2LwNUaKou",
  "key44": "4u27CUnFtNEBBj6zL95NoaAWYoou9XknNrrA8Nyo5jePKwPWfEteBicJVRXzYteWVoD6xNVVFDV61KJYuCjTFrto",
  "key45": "2eN58wWqKQHwrfE7jCE2xHxoJuRXvgbegTQ3jrfAmhcRKgRwxieqsXdZ4xbNNeuA2kvpuMxySDyRF2uLnVtZykTx",
  "key46": "5TmeCiYGmsdFS58UZS4eCcK4tUK1A1PmRFeQqAGBJqkVFGiD4gU439jfaMqqcab6haEtu6mkqSajU76eZxhzbkMu",
  "key47": "2BBtEBSNU2N6S8KzjSp3tk9KeRXX7fq4bBwTPTY2UmNzFGrpXSuBv9MjJRqVuzWzfaydNufniJvcmPfVQH6HKZ3U",
  "key48": "HHxysPqGarBt5NRiJ8Bh2r4WVWEtum3eQoZfH44sBc4T1KJmTdTwdDgD8nGx2VbFY41HdiaiyKbhud8XfydjC4E"
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
