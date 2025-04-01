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
    "43evNmBpZMQsno9MhMhc2Dq5yKcQ4HNy3oBV5QCeywQtKq51UyhpUweQAf9k3SmXrNxLPzD2exdhQUomnxUquhcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SAsWdpPHb57CFURBZdeC5tNydTS5Dp44oq1bkRbLv1ryUokPFkrQpUEm12g7DQj1EdKyJo4GL2MPFsehEQuBppQ",
  "key1": "4SCdwZmeazR72WGgFfSYz8ooWuq5X8YeEZZsTCi3j5Qg7KEVNemegec6cmvzQJ7kAxmQ5R8BHHFwrzbpCiEfTkf1",
  "key2": "4dy8fXfy91W15ueTuYw1fY2MQndnjeixnRPUEjz4oZhQVWC8s1wisiMRCt4BQfgYFxKfk8RA6czhFLkCZGA9CWw4",
  "key3": "3mfm7zahBk7iAGhu2qg1teYH4Bbr2CxUtV9yvcwHxatCYUWCD9djr5Z9Aq9bwC27qW9BfCpFqyxYsBpPbUsw2gzZ",
  "key4": "3RMPHSdZA8kFzhceEMgpfcFiv1B6nVJMwVXP4uXJ14CQzRRaXL23Lfx2dXnMLD2gzqcwtJaP9FG3BohJbnCsL9zD",
  "key5": "5t2UbNDRrcdhnnvzDya5NySmNLckWudgF3Jes8yEZcMC4wwLZ6M1q7NMDPWzkrKJ8MAFtJDJmwCmK7f5BLqpcC5i",
  "key6": "3ZYzWV5N4GrBE7STbfhn5W9iEehwkhqkwwJcDy9CDGGDbCbvaXHhzJK9FRwEhyBMERxZjqfhPCeoEDc2C9YJStrT",
  "key7": "4JBxMXPrXBAqNgAi4wEoTBYkWbkrB7f34K7N7sggDtM8yjGAT4zHP1GvuFzsRCbMGcR2X61obK3r6UL9NpYUEJ7Z",
  "key8": "rtYABVyzgphb5uDCA53oPfbCU1GHbKNAHn48huAJqFRLUhNV9RkaxezWg36xpEWATqh8bharp6xgqwL5kxJTXrH",
  "key9": "MyfmYvdbXYJ2CBH5W4rFMPEpmSASbjcgNF9fqvm87TxRihYL2DVe6hraSo92QupxruqNYp3sqkr91KbSViR9wWv",
  "key10": "2D4LgBgAgBxSUcWyqoCMynvh9o3aefHeSkgv1iww3zhvDxBUeTXi8w6vphj7gXwkseyzdf5pjAf7vcz95AEx3dAS",
  "key11": "3W7bfpKL8Wpzdavya64FJ4UgF7AU2JNu7vtvUJRhBrbxEaWFfg2cPfwamY8gQaaj16SiKuko2ZcrPX5qukGPdJN4",
  "key12": "4GFRny9uJsZK6ACE8yviZP9kQasdePMh31sDhZ2VMyQBu6DL1oMrUpXSdJWgrvrQXPEjPaDxDQBbGbzSRG6sJX4B",
  "key13": "34zW7ZTkD55kV8wToquLK8XvfppRmNYA5LLRGW79r7FmVsQR89V8fHntPeP9HP1zUn39yrAa3VbpAzuKzJ8GndRH",
  "key14": "3bw5UVKXnviqijDLKFopoYW7YT1BDLd2ZaYbebRqKShaUvTnnJ5vUNyKD5VrgaCwE6ZwAuTDF4GLVELv3jYPyTxD",
  "key15": "cBQ6JrpubLWw7xJxjHDkvedoPk9JMpYeUpLz9iXY4A7fFidjA4fagCsv25usnRgdn83FpYrYBKeN8D76WuXJnta",
  "key16": "4g2AjLWA3gWtgRjBP6mSmXf3R4mKxZACcEuLjHddDCaVsNtJgaLae2FidbsGUtu7TXZkJ2c7GpuGLBcuz9X4Lxrf",
  "key17": "3huZqzycGpoMPvxhqAziiB4vAGCp4bjF4o73qPGauYsvxEpiVhEdu9GwycFiiErnBjXUiVBsRfgd3vfbqm3CbFaY",
  "key18": "2YTSU1AZanrWpWJQTRjabPEcGtyCGC4osEL1AUWuKxfoX3bN6JUjt44iTNfpt2Co5Zwefc7pWHP7J6PEnvqtXFkg",
  "key19": "3gNDHZRU3eFpmiyPsu1zJR2GcKk9VFdz3K4yS2B81e9oQkgRqrgHohPniH2NiPZgbesMJPkmpFyfTyqpjnEJDNXD",
  "key20": "46YqtwuQPC752FubVySJCDqiCDmLfGgmrE21ZwsPFWQUWhjv6bzftPtkDKnZ9jVJimAdkh4iWbHDojswVdti8jSm",
  "key21": "2uQVaU1W4a2vZ3d8P9GcMotk9xHcuxTnAeQ7AibWnEfhFzrFu6QW2GCTEQcRUNNfsxGk321QDbqVpofCH4szvXuj",
  "key22": "qMw6PdAX4LLb6CWABZzj7gvyUmTdGnqyrmCh2z3dvK1khoEjDGSBn1rcTm5QX1VUNWyc9QZ1H8FJftyNggB5K7k",
  "key23": "2B9MDudT3mpWSzemuMd1tPrj5nCNFsniBUoPLapxaiaUd62SspxDr1xFxQFMpjTcyyG9GczhW2wN6n4VeiuGsizb",
  "key24": "F4ssPtwzkRAWrCgm4sQPMVdH81aTJ42kNfcFVvFAtCkbuAu6S2RF5TesMznDoKSWWvPNe4HRgdtdbHBDoBQuEMN",
  "key25": "7enFGb6PSzxCYWA85e6vLgU3ygYEDba3mXRUrDGbBCxE2treQcsfEMXfH4hWH1VnV1gmSDJoLha2KHoGQaFt98e",
  "key26": "48dVyZSUxkSS4g1FvLRFTS1Jr2kTuY28THESVpiih7Lm6K2w5WkACBYbyWi2UuKx7i4BgScYDBFUoYuMsNkicpTB",
  "key27": "2j4dMMcyWBhyFVDQLmS5r78yu1i4yzUBDJPa7D9XRvzYsuqGGCYkw5D8wAwpo6t86fvmPfh2HQMU25QHid9NQu82",
  "key28": "3PzzNBQQ6wweyupydr97yQy8YFhnwPYF1Um2gVWt6DEv45FgBSyBffZhxKwHViMAJN2SVGxdUGtaVkvzPpX9VsSn",
  "key29": "2CCsEdeR2w99BFzSNqvb3seJpRSxWibT7U1T1XsLCciCgj4m3mBfJmJLoKhnaCZjq4oDLqVuSZzyukepC9wjyBWt",
  "key30": "2h3aSJbsZwiTbg6QGL6avknmJ3sniZE4i1ZtpEXMaWYndbjYG4VwZkWfjKz5BHkHMTptWBhsyqNvJPwprHD7vxo4",
  "key31": "5ARTTUPQx3yNUqfxfApU86PVVXkwVdyK23GY5z3oBL82wU9MTe1Vi6awRKB56e7zdB1SwPdpmDLRdcWWFGGM4cKV",
  "key32": "4U2Kacnn8T95mpB8Ni7rNwMQJJqFg28rTsSP3damytxkWec3GpUXeR9ZuK1JzFbQprYjE45BVqhmXQ9YJq3VSEbJ",
  "key33": "2Uxdxn57hmaf5Aieucw9f17ZTZJAgR9HxE9QqpENc6RV7ftZi68kEJ4rMdfSGxtMNt7ErMPxhd3KfwhTSbky4Ncs",
  "key34": "5jLesavW7uYEjV371bwGZUvCEvVREfEgfGZGKMxm2eoUoiUHJ9VWshT3z47CE4HZmowXEV8BaGJfTSjKRBgf3G63",
  "key35": "4ZA5k69RKxGCs1yoSLrFvNA5dmFWSTFwzfyA7xETD1uAUtNJM4XQ14171ZygE9zfgNAqunmE4SbX5c7KUkrxhrnm",
  "key36": "5ojJDmaxB7fEKDJUB1L49YWXNDJntcvBru62JAWHkJDeXgTKUa1yygk9qoRq4RXdR3Wi6jaWdrPgbNDZxxN2HfQr",
  "key37": "66SH3kvk8zK7VbAGoxxLb9n5ezQqmtEMSN9GJfpg7H1eeYzEM5bqk1tMCFNmrT1yctn45jz2zk1yTs5nL3BteL2X"
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
