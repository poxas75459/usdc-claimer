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
    "k9RcqUfxtQXWpLH9dDiJNtf3WWAhzfbb9UWfbePbHAiN2rukJ2GKK9jxSdjkC2ukdsVQdFgrRqv3aQ4ppxskLTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mM1vPAgdsLT6kRU9DYKzcYk3kgjdYH4D3sFZ93NSMfSdFk4LPWobNXK4sCMGCFfzcWuNiiJxbeFquHRavwSvxNR",
  "key1": "4tnZqKHQXYH9qUY9SkExX19y6A61eXAV6ZmUDP6wbeDMWJcvepifkExCqMZDAYJLUfBcxssP7oCDtdgwYZTorJNz",
  "key2": "3x2fA25MRTK7PKGjYvrEEDmUg5TZQGD9Qg9UakLJ13TMtMEv5DMp1iCau6z15Gyzdjjqi7LHxT8FR5WK17Y89CKH",
  "key3": "4pAuZpTkxWpybXaxsaQJsTosqVdGbEoVEYKdc9epmfnwbSpkNviegyFP89nrgnNCmgX6MStDhHmcBWx7soZfsfHB",
  "key4": "25VxStojGtd85zNjNHK5rM7MUmZ2MScE1jsiEhf1HcxDrgy1Xp8YsaHJT8Vf4z2iyENW4MrYBV1kP2Yx3VN4hzEV",
  "key5": "5DPSb4s8PCWodD81HCtivbnc5M6LU66Yu55GHzkzxxPN1DJFfP2bonQvgMocZQfWtsowz6wQqDXHddmhZ3KuFYuW",
  "key6": "57iUvarw3TMi9iMaKjqPn3XAAiYKJYqyTsKg1d8FuhgfmZnEkiPhhsbqP5bD2fPjhkqyYnVMVB5oEmGpoSToisXu",
  "key7": "gW1ZJuDGabvPYiGNFTwJTKTgiWwYkHpFnDGcjNg3vyCWLQvXQRRbF26g4Ce3w62gwg8DRc6LgA9CH9KchYmQ7nS",
  "key8": "3edMPDHYHC9zzYY2o5m38NAgXE1UYJPoQUtvDhNPNQJwt5r2sHPYQURY514FK8B8nSwnWj2qUH5bMB3qopetN7cw",
  "key9": "3rTKHzEJHfxqBMQxwGRdrFHk879qT4H3qNWQpApLvRGKJW19FMG6doeVAPr1DgjxSmq19MtmZt7aQ9raHFJ4kBCp",
  "key10": "4C8SwTvs9mEn9XzvYQ9o2LdyqEj6fTkeidrRtShwVuf6bkF3T6XHHgAx9vgCFqMKrwQj3uMCi11wvQMLfPKkN6vs",
  "key11": "5MNrSa5aQXYb59G2szRr2U9E5ZYAsfZ8dHwqc7z9iA7qtvVpCxovdREyRCZzAEPGgDatXBi3R4JJMb9q46uXCRsE",
  "key12": "3yRoJBXXfaeqTtRphv15vpeytcGsQVFfXFitspQ5mhhzJboGB7RwLycpc8JUUGjC9qybrSbBrRasJDxq9bAcyEtK",
  "key13": "4H9a3YXcGTJ35zchePfbJchDjuhu4omKQTBDtJnLGeeMJS8Ku3ybQpP9hJUTyhGF6VdFKwou5Tv7UzvcwJiafKXZ",
  "key14": "4Zs5pv1ZnTzcCJ7pWHTyisykkfNzKMEFQyLni9v5nRSpi9kNCE4zmRf2RNBBRxF7m6dE284AqZ4sGPPurRzvCa3A",
  "key15": "2Vj616AFJRZBxo4oRaCSS6SBhd7TRv8hXV7KkRt28m41jnPZz3ygF6H6THJSxJVFezmA6tWyj3dszPoBG5Zug7sc",
  "key16": "433zRmcxAidTzV9N8zSRsWRdE8p2t4EMAqdnqfksop5XtdNFmS4kGW55Tsn7xkLb8dhf8wUqVn6K8EgxA8ehjf9x",
  "key17": "3u38VEcmNirSFgtKFJoL5tAjetRFVhCR5DcB3wZqcwM94JB76zSfTY52j4iFwYukdJK8e8sLaPZdcEknTA15woz6",
  "key18": "66A1Jmr9YgkzMEQZo1Xaoasb8EGGR9FUaXeYMSUX1AbDy5bB7hygtQvdanTYqyWWUXAkT1MByukc8iUfDCa5muz",
  "key19": "pV8YaDZ5P27yBMAM3rPGFuCqYCfqenP63U7pN2s83G6kST1SFQeB3Meohj5r17cJfsLWq5RG3MhFaJrjqqgk7UX",
  "key20": "57i4rXzCupXLuv2K6tbF6AcecPkEeFHQTaCKMvuh7fNrhxchxyorKzJXgB6nGBSRYa4ihFR14QaeLxLnX7nHXxq3",
  "key21": "SPBw4vKtKCAEnzaeKf55njYdUJntAB29DNNhXKLSUFncQFkYu3kenZPWeNHmiSMjQKqeeL4CvptWN5kHiPrSvXc",
  "key22": "3EMzH9wty4uakhpv2j478SmmQoYBNAGU5NDt4BvLiWA9N9wg9tVYc8GoCRGRLaAUKUPbmTL8QjiDS4VDS8nmiMsn",
  "key23": "5DyBWX7HFFQPsTDGQkLXr7anmk8KdXAy1dP5RpGdJiEDJnEgNu9X8dENRhGMzZxpjydjiT1xcWxJSWno8Aq7jAWb",
  "key24": "4Y5uEQ7tt1rdNAfjxEE4jk9DUffN7LRMJXssVoh1hF9xtEp6Kixg5LCX4JfFe4nUNLNRJsZTQZeKwRf783hW9haw",
  "key25": "5Sf2dwswU1yySHEb7qAkgnzUn3Jsct26qsm4xvqz4HzMdUfsUCrx1N1mNhP8RwjrTYrxUhFQ4oqD6zVeu4tuLqst",
  "key26": "23W1bvKCmJywZW121qAtup9F9nLTijbTNf9Hnor4N9FaWxfWf6SsRU9zu7bkuMp6Z4rnggjjLHCxBnHsLDEVvVZo",
  "key27": "2jXthwkhSW7ve5hNBKDc4naCVNzpydLHyS1DgT2Z1NRdZRnSJMdwACmawXE9LXwDL27GJczFeroLLdgtxPrTFejk",
  "key28": "vf1cRxo5KPrYy4HDQssjvgH1LNkP2HgGbqrJFQE494uqEz3nSBW6WPZqLmZ2WAXGuD3A3GUiArVLrTKXcMhcQeM",
  "key29": "2nJsSThfDhNQ3J2de4H5dPUNviPBvW8dmohh5kMWgekGoWdPnia1YNtHygPcopcST72TB2xFxe7KCZBN93x6gsw4",
  "key30": "3YXQojgsBqeDzTvkSLHzRnHqKFQBXBGhCUR7reMjvDX4NhRx8n9YGG4TuHzD1sNSHM13ukW68YNcSf7CEds4QGGE",
  "key31": "4Jz8LCUeattzRsjE8AQvQXJ7DErbyhTyViyM9bkBbpjwJrX6cqXD3VY4gFZKJ9S8dNgcq8DTWy7wv4bY3679GSqD",
  "key32": "3ZsuvSREEXh6uLY6yX8yzfybfJkstKdL41smyGMW2SSzfMEfpciGFU3uHgdBttckvLxG1izQtL7CbCcuXJMvHsgK",
  "key33": "31FYarQZVoXjjgM9dZx3sRk3CMxuTmXcmjD95b12SkgQouGVytHgo2K9X9UQhBGuMhCdt7n1gaQSkuWiis46tMRc",
  "key34": "3WLPL8PYoRzQN6si8mUTYr8cxmHNQb4JCvh2uT4dH8qCvmCMo3FjmwPdeVvjPKHzYkroMzPKVgwa5C6BDMUveLvW",
  "key35": "3pgN2gXdQkyYjCnrdFiHqtSNzdom4TymPggNmDckKPvH1aws3upQGfkXbuhQ1JHetHM2QCQtkJwqvcAS5FVpmicv",
  "key36": "4DXtNtoLHNmyd38oX3dPxGueragbXxUmcsaxuRHSdWHCZv1RLUkLF1ZCys6vNbymJNMmwAzJduBzCwFgu62WBrpM",
  "key37": "4Ext6RaL4K3oZHE4JDYBoLjPs6gfDr1bWqL47LgGDbxBw4zEHYrrYx9vCJh4zZFkoHVb6YkK3VdHgjuEuv6LRC1b",
  "key38": "gbCcBdf7mu1CYavL5ocAcRKuu1qEqdQ1e3jyTTexC9FhydZTkjLQdRBSgPqvMfpKeKbm4CqfEC7kRpG9YjN2kfy",
  "key39": "7VR6Dc3AP9jZSEnqrtt8jYfYYfV3Z2ZWhvcQaV1PwSvdsozkyxaPjuGeEVnxYj17zE9BftBJj38K3mnXrMPajfx",
  "key40": "wEAhQWPhCZEWh1Bn6Hn4hKWD1FcB1BCqo1sfnerSBBrP4FPV9zMrk7MUwtWCo5wmkohxYfQsjzDVBarwFAjLK88"
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
