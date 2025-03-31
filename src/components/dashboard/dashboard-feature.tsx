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
    "21W9vaMhzL8SqL1tSsp3BpdrEpDKK1KXAegynEtpnnaq1kdTwdwf8zeBXdeTPhwimreEVDe4Qsh8FMssy25tqm1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "adokFYZvkZHrFT3vGopcfB9W5foNjnS2GRSGt1H7GHtx8jNqgHgchL7jndwBWQDCMXAxK4DgZcvtyT3ah1R5GAm",
  "key1": "5ApmX3bYSbhJG6jmke5wJciaZe6XKqV7G23SPgXxG3vTzAaQKjf5k5CdUACuSstBkbURH3fv4MoDqK1H5tb1hAHA",
  "key2": "5bXGicTyASqKRfAgAKbqJxqodZK4gXNZqhS1zjDuUiXkMRTQnjTKyEVUy5RXtmbkdvU45Q6GAZfEfwxkn14YCDEj",
  "key3": "VLgnGa1GQEAphv37nFiQHVBRyLGwBnfKqc2Zk9LvcRNFPJseTw8YWykEM1oAX8QFMWTBozeqVHRHq1ZKUYYivvM",
  "key4": "4skz6EkJyq9P47axaCGvZZWMmDihDyHbVADbhHzuzJe527PawaJh3HHYRcjZs7keoZjYcpoZ2h18MkU9rVmqt7H5",
  "key5": "3xyaCX4s55ifhZ3JTJEZV5Ykd6ZteRtzhyorAqpw5MNx4Twf7PihUXiv3TdbbZEWnKLRZoTPo4rQVmQVvLRzze1d",
  "key6": "5XhugkDzyeLdMzuAGyCpAUf2RrQuHcQnTwk2qQiSTgcqXVqwrYiJ7wDXfvGxB9w2RU98CK88FdaiEuXixaqiarUA",
  "key7": "NVR7NdebuFSoCi4GsNkgsJekkyf5PHd2S8twbMopfQBawgiGSmEtPTUbGydFt5koE1bPkDMixthCwteZ4JqbbNX",
  "key8": "5JmUZEm9hq5Spyr3SUpyeDpwLfRYjiEwKc9eXic4MJtkRqwuLbLS5C8Ykwb1DPakV7BAYLNbvQ4GC44CuPVBEuHW",
  "key9": "3feK4L2VAopKGHeu7LbutAKsBeTVjTVqTdsBRjnxPsCFcvVu4sXE2QQaANaujKTEkRJEsWnuSTWQYPGFwcxfZQ3x",
  "key10": "8nu3H8KGXYYhKq8NNwLa2LYUUrWG5JrAatGJLMWfV3ufsoTAMXvqvDQn7AAop1f5uXDXWP2U19hCfTfkMhw6cA5",
  "key11": "2r3k7HUeBHbjDAy8FmiGZfCbbAv8UWuLneoy1WKqQDwLRVfUXuwPgbJqBUrB6mhH95aT7zRQ8YhdEhKETeVoxY5p",
  "key12": "fHTHdW4o5c1uksuZ3GggTXc1Nhx3jbRsBKh6XQWzmeN1nurTYhj973WQwf5jP6bWH4X638QufVYw9xd6VzCtbDo",
  "key13": "HtsrdTCcGdDBVD9v7SKV2hW5w5uyD3sQYuLTpPuT92e1BiRVw7Rh9cvs4tZCxh7qg17pdztXFGn6zphjqoGYvUU",
  "key14": "2cPXyLu9kVVs4yE4ZRusSC7Xg5bBXGtG6XMJDhmNSbzbwJ9PQe3CvgjJGGTqYErXc2uq4eCh3uGpouFkZeVoXzCP",
  "key15": "wdWDePpYK9qnfAz5sESyuh92YSTDQ6De375TgkfWiQ2VVd2nLhbpz23uKD92QQorQnqu4A4tckgFSMpkhhW4Zb5",
  "key16": "gmNjzqpNubBmfpmN8ckcKvdbPpiwi1V4Qx91FxGoyWNvicBYqFHGCeggHDKnRczd6BFYqptwcN6PeTt2LjbKLAR",
  "key17": "5qzLjcCtYhqRye7E6mQX8JiPYKSPKpnsKaL1piW9nTpdqM54S1d17K5mhtGPKBFZEHwEJxM63RNfdXgBccAcHGy4",
  "key18": "4GUVA77ffuK4yAeZg6wa8r8dAtEPjVkUXWm3pj8x74GBE3Whpik1nV5MrTD3Hby13FMgznkeff8Nv1HnGRezKhQ1",
  "key19": "62mDc7WiEiNcHgU4oAgW5qcRCbojMcx1sBCxrPwNRQdJTFjqerSJqNhwtBumbZCYdFpEnnnjXBCCp4TV3rbmjTVz",
  "key20": "2WpMg6napoVtXbzHrDkLRY8izPgR33ALQz2uzAVaJp1MeqjcfB22HDFbMUXzHt9sZuDx6kjgNFGXmjdsZrxFNCVq",
  "key21": "54jVanNfnm7mKFbxEWs8WchkeLH1RPJ5o8qcxhdfvvDDwkK29Jdfv27HZLcvmtSSPP3oKczWr6K5WDYYpotdZTGA",
  "key22": "3gzdhfbLh852fWYbkhVZsUEiqG4sfj4ZFuSzMYUqNvzxpepcCopnhAGPzhdSkusteNdggn9n8pFp6SWHhkCZ7DFu",
  "key23": "2vU2k32bo6d9MhzHwuuMyRvfkXBBPLYYWf9Urt6cTSYKivdrufYxtuiVG6oAqEUKrX3gDq8EvBCmuUepJTQtNXkr",
  "key24": "5AM95Z7QRyK99rz6zcdRwii93tXMGGfeWwiUww8VDukm1uCXyUzavrETk7NWjn1KdteHFNeaFMDMpsrGLMqsZkYi",
  "key25": "5SLBKpkXDmEu8KmTktALhao3gzTySuteddrdtNVGsMQzKBELUsgsnnp97BWckfFF7kPJWctBELSNuvGT8eEeP6ur",
  "key26": "4sA4WcPjsU9GRV2LiShodLhaSsx239D5EPuquh9zVYrcBnexfcPgsmVga9NwhTEdDmLTDry6nbwnXZAaqXHWewgX",
  "key27": "4rUhyZ8Es15u7RYhCzpSiKidDEfVeZjzoqcmhE2gf2K9NwSV8UEkGUA8vKyGCwGAwT47yv6EyjGs7vjsxZ5BHdCZ",
  "key28": "3iz7ZWNRibvskkUhFsTUnwx8BqSGoMqR2FAqaZzuyimyb6uu4ZXReAa67xVNYpLByhTp3q2kKpZRFytwucWi1B6s",
  "key29": "aZRr9x4UdQCEAmaCghA8doJyuAX3N62faGf6XodsTKt3C9sBeBeKdc1SDPWdqKo4x6Xc6P9nqS1jsGTWxcxX7r2",
  "key30": "bRBuQcbqnDEqiAtA3ro29oEAyxgUyMRWEP32xFS5ooxAsQuuPXjpybEdv8NM6Ti4oC8p6qPoNjMYEPLADT9fM5r",
  "key31": "5swqyBRYJCxwr7vBPFocRMgNBa2Jqf9BYdao2wwTU3cQMG7GNr3tuUJJRnTRVkeLmgBwrDN6hfwsAC4mfYTGPyDR",
  "key32": "4aYhdPcKnkpRMZTETe3Kvzo7e2koo6GXHHpDyJCVjdHFe6WUDko6q7NkpcW4oXMfhcoKDM6d28mKiYaTY8fhh9qw",
  "key33": "51PeVBWo9XN87cD42KrRDWGY44cRAQAPqD3sLLcyCzX13r2L2vqbjGCj37X5JLqaHLGY79ARh9pJnTry2ce6NTV",
  "key34": "2wWjhDgjxBrknW42MDAB18ts8XAJeozDPgmip3HPSLAwuz3SjE9gco4XpR9UhbPQfr7Nr5DgVVDwrB58191gHcpX",
  "key35": "DsuiTxLLdp6tGXjSK4Gu4RN3sZUVAmraY1jirnMtetMN4CghEYAiP6CbKcqRrWarEVikKAcCdnBuvhQDoWu3wSu",
  "key36": "5FJcGr8rguZWWZVVET9BQUpyLo1gF8tqcfAG55U7dZUgVkeoZAnz4ivsbXbQ3gtuzNnoj7XNzHpYP4zniHBFTJQh",
  "key37": "fYavQs5jyR2yrpzMFM2ciZVTkKvyyiHf95pPD1unq9958ufUonqf3suAK9PLZW2g9cQyZwNrE1iGobbuYbgk6mo",
  "key38": "3xom21sXLYxLuqUnJvtnNT3mQjXkzytkz2XA7LNWNNSbvr1SAxAXoTT6967ZTxUtSMoSa7xzBK5uZ8LJGJi26sUA",
  "key39": "26NpNq8Y5U6GF2hexHk8qcaQRdVdkeohLEUMyxg1NHPg3j5LNooSu6kxKhKhEjDsHreWBbGouiNqFNHr4wMi2h8e",
  "key40": "63DLWU9t4n9NFhbeunaxaxVi86fUWNqQrBHfGmk7MHxEFHWGUDyxX1hTGPnMfrBHMUrG69oAgBo6bbWCe9FBS7xj",
  "key41": "3hrUxU4fiwD4vwxLA5yRQV6RwLTg7F2PGitW6msB9i4rf9dbyqE79WwjpNnhUvq6wCLgYATSajUugnw6XMuK2sm2",
  "key42": "2PUfhErHmTutmSMWkfvYTQDZMfzePxGhBupxzmsc4RY2G6Kkft53VvAqGqzb9bqsqbSTcKbSndZpRKYUjW2pTK7r"
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
