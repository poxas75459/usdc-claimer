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
    "4cpWZNr51TwbNqsrbFyW1WNyWCU1STRQucjimgxk1WyVH7WRvJmbBVgdTwVHDSTS8RkuYJpisgpdJVmcERiWsFSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UdPafFg3qX5kCaaM8bh4WHoWhttMTFRAcKzQAxRBPorgcoWvoxUZMvNJbjBYwoforswKdDhmCF1dRjLp2LXYNG9",
  "key1": "2YuDR1amrcodVTrXU52ZaPnCL7awACmvFUp9rPwaMbMiMMcpXk6grDX7vXvZSrtdoZrWEEw9QyRgyZC112QJq2c6",
  "key2": "4MnbgnGMrUnbwDWmTohGK61QxdhFiSQM3BYDW7hr6ZhYhiPZBDD9eQQuWWSgjNKf2JUqb6yGgdUrApTf3ATuKLc8",
  "key3": "2VhA4DTRePPoBVFUaLbvUkE1E7LVZJ5TtkZvyFL7H5Kn5re2Fyf4CCX98n4PBYwW3R1YaJYCdE9PvneoXt7uffDH",
  "key4": "65VCeWpQxwZQemzzNbffnDG7W9pqtJuJSnc5sCGbn1BdWSn2arMp7Yj7PLRZH4gEYYVjsqfKo3GvSKmZzrA7Ykut",
  "key5": "3U8yKeh3Hd4MuTjeWeNuFVnVgiyMWMwgrm1J6tbSSh3sdEWZ5VhfZM1F1AHA42vQ1ahBuwisR1QinNyytDYeLS6J",
  "key6": "tqksw21rYAxeBZeWu7RRrFa8wN4iDm9bx2LpnrSBxvvn75ULyAm95rXhger57ARZ5asYKwPifopB12wJy7YYudj",
  "key7": "2Cyq9NgSN2g9qkS7DmPKWB6LhfBQ1BnC77tjPZuurPJUPkEqMTk6CgBzTvQrCFV8J49wcvxX5G4NzNwwUy2jKKLD",
  "key8": "5EXPnwBTqC6ddxHUDF2QeQ4W9HDcYjXay1QygPizGXzx22vVtAVWzZvPw613QCMdvDsnRDQwBZq9fRXSi88wsozk",
  "key9": "4mskVJWC2GLXHtgo3FZ32JnvYfcph752WEiCUqBrRw53Ui5d1FsSwEG6pEc8AeuyQkuHAaymZWmUsEjS7rnUeroy",
  "key10": "2mCdZo4BXR68ASKpVUWpZBeT3MdZcxHdrEmzduVJxECry9WPFfGrrREtFpVxy6L1g1emzJKxJ5q5hFVyfxSMgRfU",
  "key11": "5PHyTmUod2rxwsEKrFXWy21PuNYXMyDafgZaPRZujhk8Frg597TXx1b2thi4M4PENLnya5TdNFCJkM9KyduwBPft",
  "key12": "FmmQf9nAZr6boyMbhqbHvEFDDgY13mBL74g5As9KAUkW46cjU6obhSBKeFTme6xanT6UiBKkvB1dNn3EcgcyYn1",
  "key13": "5NkZKar5DXcZhaqShVwP2YEWKmCMKs6J3GMRkXDC1ts9PVHEpMNLuV4xzt5CD9x24ngPSof7GSkBFmuMfVcLC9mt",
  "key14": "32sW2fHfTzRDG6RKa6NrZRoGk3gsDPj8YmFf9xzi8bqqkNsFnr6kzzTaFHr5RMpDX9F9U2rxWJDMguDhb9iBfeQ6",
  "key15": "3BdeYi12HtK1bVHU4F68x2jLviAgNanHQiTXQM3m7cLYeZQxaTRVwzs7n1uV4KVwQcP2bctHHf6ZP5VW8QBrkT2u",
  "key16": "5mcQGoigreLUxepr9sPXvAK8hF95ZVtg9rP3PviQP6wzEMY9ZgZo53Qh5XKxfTjJwBoUjbywrCBhSVEW3qnDPJbq",
  "key17": "2tBy3bFSK9Y43ksVErDgaDcFYjdtWfZVsxBT3XvvuFNvnd8DuQNsTWKXtaHeV8vRTzWRM63s9oPpuB59Af8WsgMQ",
  "key18": "5v9gSPCs2pUWf64m33GAm6GBDM6Tebf4UZDttFPvgtgsVPNfGMpbGR1ia8Ea5fZ4ihAuMfSLsJx6RJv8fhwFBwGG",
  "key19": "4mDRSihjSKRasPUDFyRxK8rctHTwxdBHxJBzmHqArp9u5N7SnWWuoCFux8tofi8rHp4pfKtcRfNrUjM24eeVsJhB",
  "key20": "4D5Nq4B5sPt1zfqt4Jx7BBxEKAJWpGFW4DR76fCmH7xhDzn57ZKbPs5MgaBsvc9bL8f93uUy5j3h1PTLCKpmyJLH",
  "key21": "2Jgd4VyFYDidm9djqBE72SgBVWZox1E1BMU8YDtvhus9jHs1tjgL8ezrvifad7Luy7hmDDsMu3qVNJiAhkF7K8vX",
  "key22": "3Q5d19ZDZiRqUfHJvZemz4jBBt4zNo71QVqHpDvSoq16DTHBmyhM4X5vq4zhAQ3TbAsmjWU81cWKhwLwhFXeS3rZ",
  "key23": "jwGAcAPxYqnDgPAN9rGDkNQgKTv91LmyEpdw2h8FueYebrab2RnYsP6JgGaGDKhpojT6SzaWstKxcNdKehbvKzE",
  "key24": "qMThHHtrWvCucbV24ALupUqnESJeYA5gPm8ZYxaGYg19MdftNPMpuqsQMUtstfFbZyaEBWM9FhL13ETDfRDcVjj",
  "key25": "4jgHAKTkdx8mH6aTTmqrVE85Dpo1dXBsk2LzW4HoXE15NhVfaK11DRQLgUuCzEqwYLBpVpbffVzYtZAmMVqASoBN",
  "key26": "4MuBhZVk1pPjNQnhXDSokTr3pDfKo7VU8cmkQfy4jtFbFaxWVACVnKwqwGThdtvrM1415FVRNRuqGZkEV6pqjUjz",
  "key27": "5rdhnta16dpvBSF8bL9zfez7zBVUQrukiqLVTYmZuMjTsap6uNwQTVrB7rygpBoKihnbpdY81uA6Vs3no3HiSfDi",
  "key28": "su1cgizpcGCvc3hNWUFdyk3Vbo6HZAxWHZkWQzZZsWuWj6epePP6WHkQwHxvjTpmpShssh8iBMTZpGM9RqpHRF2",
  "key29": "1ZRXrgwTh2qzEUQfPzEHVRgtLRfFaHdZ6wRM23L1woaCou4EFdrbTtoVAFfUNRxJQH73qXyikAdStpzRE1ZpdqB",
  "key30": "2NEa2ZecUjRDG5t6AtKfEv3RJSBX84L1hP1tBYYLW8nwKGf5L3u12baKDvRaCVmPy6WN4WDAwy3iRUbnXbFuYoCv",
  "key31": "agNDLEC6LhsoH21z8DoTxHiZagbnKuSJvjj7U4Z5L51aq7gFGyyydZrw3Ph8is6iJpq1sHVM5RLvts5ipLJVtjm",
  "key32": "5r82DSUWHD56ZWTDH8u2T65C1vrTMmT2EFrhYkpiYXpQiP7HhA4Z6Rux2NTrnTQonSKpWQfK1AvojyKop9bbBiPm"
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
