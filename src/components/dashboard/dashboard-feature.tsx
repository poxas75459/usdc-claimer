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
    "4AJq1jAMDfq95Rvk6bSN44LGqbq6ZXLP9mquWd8USttq67zzo4Z3NsScVnBENkGe6HbcZYgaXGuHMXWMyMmqcDWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fkHqMXbpZKBkqZznpCkTEe85nzGdJnHYk7WG3u7yFY7ibguL7aByL35co35ShQStXtLNswhwoL3fxFTGuFLTCeQ",
  "key1": "3r8pDSoVM8X4CMqckKYNeNgsaULfqUEaWFnb1Ww4axdLQx5mNxoYS6ETdArbzDzhcdU1ke8HmSmHJ6FEYECftxDZ",
  "key2": "637qXyF3ispjmPcCYGFwEJRU1g8fQaU3PU54jgqtSYLWv5otqM6FvE6AWPH58d81WfMzo7d5UfaqxaR5eAmh4wgN",
  "key3": "3YWhNshLBpFZPt8YULcyWRcswR3qKyxaSyXcWofFBsRjzbAyqSPn5Da9b3rwDgtkgcAhdasdbRVqQa7s3z4Vk1LJ",
  "key4": "2HcD9gdjiDuEhvMBiHYgHkQdcq1DJoxF4J23rFeyxAYpTbvADLa5ZDSgWrMjR4zScy5WSFDbiPmRuJguHyU4Hgzo",
  "key5": "2UcZjriBkJNiZTWWzbmUZvRUEf2pGcix186Mz7GTw4E1f3nuMjphNLK5iwmN5goRR3A5uR7MyMinmWN7DfDNgTVK",
  "key6": "48KtLQd1nnYch6haoNNqekvcor61s2AiUya7H2QmeJLDbZ87RcTbCw1cXKhuyGBw5dLiPKfYkYqVRX19E7USubNX",
  "key7": "BggPAsZqEUA8y7a5YWENKs8bo9mJyZgoDVT6AcdzuwnL7Vmms1Kw9TSJgoSW1PDdX5GZ86GpstZoDZ2ojc2vauv",
  "key8": "5uePoW9uJ3r5kZyXtTL1EzeqY1mmUk4sw1QSyciKpafNG21gSgoDVDKBQEDMoJwLRaYBXEgovRNse8KF9SzsEo8q",
  "key9": "4N8a2SzjwjVVwVf4F1eMoUc3tSVej7Uj1MZV7PLevRzHPckULgoQFrHAvrkXxF5J5vwP87FVqBXTBXnGjTrZQVrX",
  "key10": "q8T6C3vJPk8nWksT36anVmYyKybajzM3NME59123LoQNYJZKcAgUXaJEcvoogVjPpjpBPMDvKjh5QNSnd83sN8w",
  "key11": "2yDLCr2bCPdaLPBSnsCLAUQ8cLT7hiVj9s8vyaw4KbwwLvA97HGkw5LSiD32YRMtL88nCMdNdgxo9KJ9Ut4eoAqJ",
  "key12": "4sw18YzcMdyL9AkTpFosQKz36KJrVh7LZp2LbkeaXW1JCDHyMy1bVRVt6oHyc8Afo25VW7BzQjAFv5ZbA11n7nPh",
  "key13": "tS64HbvXp31DwRdWWqu4bfgxmYAfh3Zehio1dTVdNbvtghbScLqazsCK8yCQsxHkJETRLhqoyV7FBqP3vZ1vrNg",
  "key14": "3yaGtAX6LHhxVS2tRa968NTWhviJdA4NRr2gXW7yhMhWkrb1hsC4awycuXyuia36qhzS2RnnCB4kptVcE1kaQdUf",
  "key15": "2Qwc8r5yVh3z2XTGvdnfWP2cZHYRuVxN4s2STTC6ughtiFyKSsNji9oBfn71EDWZABjyQ6KY7tomoSrZrZfhL5Pk",
  "key16": "121QXgwkif3PhK7Vi1uQHdKjNsSoiEyZRFdjzBjMKYwUyhn4rVb86Bvth7Hhs6isFXvGDREabVgodjut9D8ato2k",
  "key17": "j9E4zCK4KBMMH9HgEUn8rFqnF7BAT4zfhjN9fF1dopGNYYVknz5j8dzG38hjmZpR7Rwzfpovm7WFZNdUS34bwLL",
  "key18": "3iy3Bf4buZ8XDCFAf56Vd2vHAAvf1ezUU84ysDju4JYzw3w5ym2DwAmcfvEShgfW2hyZAftBUvNy3Smp7JwAHRxr",
  "key19": "4a1akYUawdzYvNYEbjwJdsJ5tX2WV98NHGKxdapa9znFDzz5PAKrNsQQRGazjph3QgiikcpuqhxMQ4nDhCFEmjn6",
  "key20": "5oftwLxVzoTuW14C2JNz8dmiHX5mtToWYRLSo4Xo6XuU8C57r1nVQygyKEmL77n9s7pcyHFaxoZ9bJpLLdKkiTaA",
  "key21": "564kZ8o8QV7xN59FY883RcqNvoxPNXh1mwQAkQ2sBwnmTkPcPR3wLpAiCaGuBZWJNTzparCQWNVFrMznDQD5VYjC",
  "key22": "4CqMYXt6cZa9gPKPESZ6J3Z2FixDVuo8sDrzKLurUz2PpBziqzutuYhRY1ZLEY9eidUEPUCzm9fzjaRfcRtvNpXR",
  "key23": "4YxU75BzYKQabGPiPXFrGLHkRbJ9CgA1UGyXH1GzpaYJVJtqbSiNqmfP1Ke2becN7ym1PYfmKGiBrF4FoKts8TLw",
  "key24": "JiuXfdcnW5cbXh7i4BZJssz1Rc4Whg3jkwCjKwK6nf6Grgnq3hiQtpC1HZfBif4BdzK5V5cFfz66gAX41HWjKGu",
  "key25": "3mGMpGRwmWExCoTn7RTR7HgDqNuyuNt6EGBmKaU9aDa4z1BMauYSmoyFstjz958y6R6SeeEN6KiN1q5kyhhJ3Exz",
  "key26": "qpEGY2pR8VJAEZXFcneEno5vEJ4NNAX5ZLcsQ6dXaxqg9GrSrnyieG7mjQshkPoCXnnTFXC744J8HyqrvD2a667",
  "key27": "4E2srYLWF3BhkU9Ua4dP4EvnQjTPheUpvvQ4CzQT7JDMDu7E39eUubAd9bnt4AH66W92U4Eggpx7MFSoDFELg1aU",
  "key28": "WzdV9wCaEWc4i4DaEt4gmMHkBcetPqbZQ4Fzx5uftRcmEUjtecRU1AqL7unkB221Mvy5DB1S2FeTp4mS7v2qGi1",
  "key29": "29MC28dRFqAf6quqbbJU5mPpYGEdCGigs7MTgose315QPyfiEgrJ7UnCCBkDaCZMuJYJ8qKdwoQS6RFCbq7E9uiE",
  "key30": "4NpFJ8RMEMr6LoAev9kqY6uX5FoEY15mfFozGjLTti9xd1Yy2ZncrfnCLNk6vKSuHwSto2XmdgcGfNsoV3rZ1Uy5",
  "key31": "7Ct3g4FutxE6E1vfYCh1PZRHLrdwEyM5eV6eip63phe9ncBGbihp2zwVRo3JEWnVHA55rTcT9Ybuvwc3rShNvRK",
  "key32": "sa2rZhxHXsJg53tMojywreJnazRZuye3RWeNk3pUPr82DtBw9LScMYcF3Npnbf1fjgf6VAsQqXQ3pAdfLHNYEhf",
  "key33": "3aSxveheC9Mf5ooWWWKyxrRy95shzGTyJARQErSg3Ze2cceZGGN88vdNda6WXL7DaHZjsM2hvgPTV2UW2LPt9uFB",
  "key34": "4V1mGwT4WQUA6kp4BmnmF5qeWd6FB5XnpUXNnWq3a3UYuLNu6dLXtY7TwGiAN54ugswW7ECuerBvx6kyP2Lk9nd2",
  "key35": "5HiuDZK49mvuhcyqrcnUaCi8UP2hdMFWDx9RXSAdMajD4gmAmHja1dWauwuXemyYKuqtd1dnwAX8JbKAhdc6cgRH",
  "key36": "YiGnQqiSPNzTHfdaiHsxBjW2dk6NTDGCuCPfLsmyHHrjYAZh8kCpbCQvSSQaXbRttJoLZNSj74inywELnJkondE",
  "key37": "4DzGaRSEfi9XbdvXD6KkdPR2unZXQC22LSu3tbqET9qxy3o2adVURV2qAZQn19BaYg94xMV99rFdqsLXR4HbG7ko",
  "key38": "S927wH2f4isHtmHwhBjrQWrfLpX4QkRgue2xmoTLNDq9VWQjJ1WPzfucg1CqdUbLF3awrsfPZLNL7JTrfpcRw18",
  "key39": "2oP5UVH5rBfdBQibEsePH3wGcy2FMLsqQjpXk9vj5ZXnaJsNDwoUJDobCwPVbkemizTMWyWjGoWaUdbn4Kz3ASL8",
  "key40": "avmmTTiejTAfa6m6xfyrNn7d7c73wxMu7z6adSwWqc7BbLRQpuAWhzW37vh6UT9yoKkNo22b2uqz3qxvqzfrbAM"
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
