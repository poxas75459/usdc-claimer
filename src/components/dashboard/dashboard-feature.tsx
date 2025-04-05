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
    "J5BqEZ9cBg2NzXPSELRxQprF7DeL8YH93b228RcHBNyorbk8zAFCKj6DR1MXPnHfHp6UnW8TdVz954JTyWYkmbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WdZ8WdirMGpnLr23SAR5aHzt7MgTDwRKjL6TBWMBMqvnwkSMHFih8insSEPPTWWEK41K3CgVNx6eMokoEkqL9Fs",
  "key1": "JHgPupbLbFjNjZRsYdQaFyiTeQNzGMaMSvDURjvSfcvSoudrci9H5PC4aAbpHUyLzwj1mDrT67x2rRm8jpFhCAr",
  "key2": "2YwyKEdXKzrFBTcfvACjV74UxR7HMiv2KPPd7S6WgGsi4uZf7pUXjhaTc6NQx9Gr7w3Z1hCiyckLfGASBu6qU71H",
  "key3": "4xbvrbgenifL43DG2ZjcKN1UzKEy5zuj6cK1nad4kumtgGHjbxkB9xkh5bMX8ZfZUp8CZsHRF4nB2UvVznccHvps",
  "key4": "DsjZwLrdw9QDYJmLGgjJV3G1B5YKcDu541hB23WZfAFgEYnCj6vAe42aDrxp85gFQx6YmD48EQTC4nQ4rf2whwS",
  "key5": "2xcBuLRzyN2k5VJTMQ9Ty9SSARzygoqfmqG3tvMeFtY3FEkNJYLkW1D4SgB7zdbqBwiuyyYGqMCynQJFgV4CE1KZ",
  "key6": "38FbjWhsnzXwyfQxwXaDuosdM5JrUuhWHheTscssJ1mYYVqC3ZmpGCRTSTBvuhE3b6pwb91mZmYyd6H7tCe5Y8na",
  "key7": "BvqSWBDu6FxQ7fRxLtibqCjgoGj58waTtiYRs8U4UZvEDgeQ7orDUiDQab32x6vp7RkvvuWiUCRCGdoenMUMsKN",
  "key8": "5nbrCoSxEhyogQcWwjNZtbdnyaQMXLVktdYB2xiZNhyjtAELStgkgM3mQNkBmDoxD2PDzj9Fwnp53aSkPkoRNzAP",
  "key9": "4U3mytCBAYgeP7Vtx5GpScRHWV9uLVxbqdHxdkE5Yxh8vQp4iztGhCZEhofqeTFDGHrsMr6rhow8yF1qPrVFKdnC",
  "key10": "5128pji4VotABdNrRMriMpznUJPmFxLUYCbCxT5jGvgkxAGeUMtFc388b3pHnYhuLcPJ1A38MEsSSvjibxY1FeGZ",
  "key11": "o8CtgtL9iuVJmwhwwxgPU2F3mFuGsF4Ps9qEwgQ55hp9J7Gshc7MkuLzx7orruwN1VFTQW9zhdt8vaQN8QiS81a",
  "key12": "5oo9cXizfTCbjnr4rURzywPc1Mx4QX5VJpizynJgRjxkZuJg8LJ5QrFYGzGymYf2EYW7rskDNqe1jqznxok48dBp",
  "key13": "2QoRnJpgbECcb3vVU6g3Qass9RNXzQ9AFaBHyFBcVjR5TdYjBiT9iw9YKUZVbHFWhG2Jg773d7TwdSfkkXKGUP6k",
  "key14": "4kB33G8KpTSqXVwW9P19HvHRFvV7uhefK9nVsLsGtnRmbBVbSUzQhRgYeRtxPafTP78i3APAL1EVTwv3hfcU4moz",
  "key15": "5K5CSupeHtJaiym5KUeu3brknqxxWsEWNsQtfCANoP9K9651nggd66n6onoP6YepgDuHSiQ9FEx2y6LMa6885M2k",
  "key16": "2ZEmFWBdpKQ6wVTsvJGLCijyeTcC3eMjDDWdPpZ7sQYY6tcjFPiFVJn52xBVsrxsQq8Rjtr6cVfSgTCqgf29Dc3E",
  "key17": "5zN22kw2vHQApX6GJH4S9TZaoo5xSc81g1nAP1qypuWR6e3nKiunM7KwDD2xtRErHM9L125LyqQRrea81n8rMNpY",
  "key18": "KXFHFDJHtmqkubUuf9MKhjXhZbyPpFSm7j7NxMxLUCrGDeQzHmtjmdSqiXZJjarDakFxDJdywxAsbJ8rZTVPngo",
  "key19": "4486nPRQjCRWN11BXmte8aMt5NYcBsvNQFYcgyjNvzvYsHATum9ECEZHS9XXdq18PZfWoeCERwbXUu1vTxhpUypG",
  "key20": "2eW3ueo6YHksFbJymNhEM7tMXobeQvg1bGxkY2h6UDBQcukMEp1iHVRyKMxARSiPXSpJxyME3zPirtw4ysqfTsEv",
  "key21": "5FrPZ4buDy3cZRT1hAsEmFoUGNGX87rnjEcC8ZAEVknuFN4GYYXJyXPtJKbqvbVL5pUhEqzr38zPQNh3WnsziMmB",
  "key22": "5ELCiJRPWzWaftCdn69HkFqucQm2xhoXvVqPxrmuqnQ5XVeuEtzcs9Xi8YRWa774LZa1ToRQoqLXkmHbFS4BeL7Z",
  "key23": "isbJnphKLeK244RY1abNDANvz5LwcbGPzjJKiaQZEz2ijT8gjHMeqSXTwyba3BVECRvXg3YbM8YwMq6LEEto4H4",
  "key24": "4AaPdCb88L9PQQ4vgaDRY2cFGYguHnbpsswmkbxpFSMhGXniKpzWGbbVrbAr13rwgJSC2zSWfn9f9znuMDPzaXpr",
  "key25": "3L4rmM3ToHdzyaAddzADPpR5tkA2gM4dnsVNvSiPpYaF9mtkheBCfdWxwcinrfeKgFhA6hiD7UqeSrG8fBiV418A",
  "key26": "5FBA31j636NrmTvhEUw6yhUsfhUa9upJZayadHx7n1dKYMJk9invkbDNgbMPsoE5AMmT4sT3fiXuHMBKbnKQN8dS",
  "key27": "LM3yAGygdS3jwR5xzsGxMMMMqTC9HKpeN18qgKMGgLADcXwx7q9uNriTrf5gxdTquKARS1GYp5CwCeP3fKcXBAy",
  "key28": "3vopZskgjNFA6DjYkQoRAUGvGPtxjsszytyU4oqTt3JyryUawQLmZcHU6RJjqdHcan33Rv2tuZKYsjV9f5GJrC6H",
  "key29": "5asRQ4zgTEBQ85RgdBkoigWDkqS7cyrZ4ZCj1gp9LUW7fXJ1zLLna2kpiKsDjV3bjuLFGDECtSf7orG36zgyJJu2",
  "key30": "48Fd29SHznSXoYjT3tqjss7jUcnL9GmZnbKiDs6gfKF3LqfKbviAytCsSQMu3kyQsoefcPtHfBaPQu1eqbTvnZY8",
  "key31": "5RnzJnyJ7qw2gvwooT3cFNztmzKYfUYvqT4RF3Cwpab3wD48Kjbo1BDKcijEN7oSQZWV2YJhrU4LBSABztyQGBwD",
  "key32": "38YEnJsaVQCyBqVSmz8vtsoEhQFUd1auDerZHG1uQgbak1ns6mB8kVFZjxQakzz9NMnWSf8hnbda2CxFrgmR1BTq",
  "key33": "33dZEf8t7EgwdBF4tJpGYzq8M9v71cw8zRXtsnk1Vj91zD8esoHvxGjSC3cuGdd39oPazdVRJ7WT56qqzarfUidF",
  "key34": "ZgJXpdbW9JSKYdiufgHx2wmu5CANarDB2S36M9QfnVAjVA6QALUz46WSZ1fjeJ7ny81C35wxt8yGgGXreUuWHC2",
  "key35": "3iSCtfrR5H7hasDQjr7u1HYcYLJnoAAseuQvBUiQ2gy6175Ay46nJRRNVZeUJWMykPtRwfYCVEFWjna2yDmBFwby",
  "key36": "qXkLhAKDADuXxPDVHBgeDdFn1fqzsA1Buw9qpBDTxhv5T45r4QauLzB8jGiu828DDDjkJWcegxbZdy7MdNdPK3J",
  "key37": "j92RVdLDgoghD4ttcidS6UNih5TrKJtm6Du2EPwAs2My1bWYgaERY28CEqukgrmivAzUnXgKsX3uuUkVwzyTscF",
  "key38": "4vv6gWKFwiLA7a4Mri7d3kyj6RUsirYCCuCQAMs6nVxycbRMqKg5BvxL92EcB3bTEpWnjJMCqyvCgvcSN5X4JAab"
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
