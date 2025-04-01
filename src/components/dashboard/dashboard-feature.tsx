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
    "5iJLe23BRKVxmmJBJcq7oRG53daoR3EjDkaNKWqy8YJA6dsmqQsnV95b2agDZwLgH3kGR1VMsEMYEAPaRYRdJ5MQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xZTNJkVLXyTTfie4EYkkndsEG192S8a8ch2jgkUtfUsyCPFMNbX5qY9hmfrXVgpCHWRpjENkKGAHpe9KzakUzve",
  "key1": "66EhggJBV5CtJC1Fzem4qRFo22xKW7xrx3CfmtzZ6WtojC5BxBSJCWzfzwXhGbjfUnrzm7NPJr6wXSTB1bnVr9UH",
  "key2": "51ZWtjZi2DUSeyonNGTwrVLUxBpb7DGH3ZYXAcSmruYeo3SZpRbqnfxLfuXBBsNz7t8xZtp3Fer7C1AuLwXPMi5f",
  "key3": "4Mef3N34w7kTmNAmwcNeRucJxc4R55uCgDMsVz5mdFZSqDNW9J8RM9tdGkDDd6DEUZzvGCwnSGakzHTbyefXTnH2",
  "key4": "VNAStvGyiTz3aAchL7pH1KJZN5XXdnET1xUVnbqvoXSWF1KCastD4MPTCGxSR7Lxnogk66oPkP8NSZwzSezY4Lx",
  "key5": "4dyGhxBSiqK1FscCZjGCvTfWT7jQYDkyRY8aPTixybCraEcyWPdfEAC8KUsovqboNqTmcQ6VvJGHZiVfcVgvLHiW",
  "key6": "3crm1zcRxqPSaKpvE4RsP1qCxvBipKRwJtQTi7ArbdqebdjwXj3avTGzNPYvoGhFq1nTmE4MpG7WgNDdhRfeM2to",
  "key7": "5y2wRDi4BcZKeJAjquK8HEYyNK7MknRNU5L6KG4faZxZnbZ5ozRHJ5ZQDwkenrQM7yHsj5yxZr9jgDpURdTzeASP",
  "key8": "3LQtwHo3gbSAd63FLmxhtVKq5UWdPaQcRPKiPfvy9YHP3qfYjudW9erUvNvayE78CqJrRhv7WUohfE2iN2qD8Vg6",
  "key9": "2iK9s2YNgHU8wzS3s8n4QGrb2MTsvytpYTt2SHdGHp16wZKhGHfy8tbjb5eZjoWz4fnhNSCuJbTaH1GE3kmAxeoq",
  "key10": "N6PhU9UWA7QA1eWXuDbEWon8QHCN16D77j2zyV2GGhquxXc1sFJTYvVPuXuTWq8yeYb86tZzvSm12TsFVUAHz7v",
  "key11": "63pUytXyJbaSq8Rx8B2ZrRbT6tNFHv5WEagu3awojhwyfrsCbfcojaivnRgt9UsuHiQC7fTXHBMDdYRpF8ceuq6Z",
  "key12": "T95EZuaZgHHqXJ5sqJ43PhVVgzo1jxCd6iw9guvbsqDUwMoU7LuR5ES9dMAzh781DuD2RCwdzRUzidAG3UHQQtd",
  "key13": "LLTRjpwm47Ev1KprCVeKqfmQHJJr6EHYAvFfZUwCcqAW3qGqLoDAyNW25SPBpMYW5ps7qwMpNnvHWRUNH6aeQBQ",
  "key14": "4SLD9Wn1H7rRygJ3xStnY6R39VQYCyHKVU2R1awnhGHTGdNvuBPUz2CQPKpr8pfEshHLYq72nj4i6wq1NH3XvQuY",
  "key15": "5EKkf1uj13w1ZDQP1rbz5UYzsRwHhPFjWuL19HASWMa3HzugNkboh4ebYtV3NAK2JLyxa42GwuRjmEpyiukZEJT1",
  "key16": "4mytJG5DxxVMfAWu4NsckvCbHrdJ8LcWrNYvi6uV8V6UucTp5KvA9YWdf9v8CuDkV7HMUC8uQacCvu5YDL3Xh7kx",
  "key17": "2PdAoHTHC8TAQKfhJqrE4J6seN9zukPASna2iSmai66Syy9KgZtYtJ6qBuBaxq4ebK3hGYk2g3Rh4oAEu9StdAJh",
  "key18": "bfTeDs8g16PhVnGtQ4CrpDWXKizvVD4Gvcv382SXgxEd3BFRKegir7NLxQDn1smks3UyokLiXPbwUe4ffsYwuPW",
  "key19": "2gR391vcni3sEfAMDNa8nWnTvN4B6rgnURg3oiGLGxgUkqrQbrsboErmUTNu3wjxrNQ7xskfrUvABj2aAN8UhJtF",
  "key20": "4aDgWhK9RHg2StE7gGNeAVgDsVLMMShUJNCgxkXmsYD83hRdRaQjJGQHk3X8bJ4DV9LyreisjeQeFJK1YFA9jE3T",
  "key21": "2aMnJH3Ne3UHhHE8x5x5Fs61bENesco28WLRg7dg4BPYPTMZUYQbWfCmugs4DBQkHUMpbagfocaMdunA6UQY4ggm",
  "key22": "2UiPTGmVk7DgGBBBSF7QWcVYAqW6Wq7uqzinzUBSjPBP7TeaA2x1LtFYuxEqVWeKHeQExSvz9sBN5c24NzbxP4pX",
  "key23": "2PLehNXNiVjJmhfZpuYn9CcTNz4mBciVyXDQKoG77vJcX7FKaLYngCVejixJ3NXbam9akaG5ZkYZNzVQszmb6wH2",
  "key24": "3FwEmFRTzFdTp95gReXuVQSMThBjqHB5Xypk9vFjZK5wQY8nc8JTUWv1DFVG4p55QFSAatzKTcCV1QfC6ydNjwNp",
  "key25": "5gwg9U6cP6cej3DWLtYPYQe8H2YwLRnA5JjfGu4ZiXf7Bz71A8iCCc43Lz4iSU1B2ZWiyePmkuSNcSQPVNsJUfgM",
  "key26": "5pXTKKvQZZiXVYVCr9TEFn2HV837VY54xHieJECTCM2SvcMQvDec6xUHXBbZa9Uqs2bfZg3UM5tvtbjjRcLXf1iA",
  "key27": "4Rm2hbwwQrKAKVUDk1tA29mFn8dfp6UGzSmTs7KXaWqjQ8L84MqaaRkcciRGrRw4YjDFzLUjiPLiogcB3NhqRLcx",
  "key28": "3acStLeYFD5FduzQ9BV7aH6XMz8FNeKVkqHkhzf7ysG4VSgRuzjq5Q7aQnxudrCrVNG4PJZ3NR7siLFwyoPt37uG",
  "key29": "5yc1h7VEXePfSn6ziAtqqjT4FAu78zBtJ7YbYmQMh1p2vXnReNFFpGizep7ZepmNTiJniBdY92cn8KwamQRiYiZG",
  "key30": "5fMrNEgKjDb6ZLxu8Xd599kDfGygjwyNNwd5AMUgYZKts4t99H8F9y3B98QkcgAR4XxnTXnfL3YDmK1p9aobx7rz",
  "key31": "NqhBkfSQdbGV1mB3mzqjAsnUwuhnUdNAWRaZwd9V6hNvrC9rfEPowBrwLTKsuS9Xz5TQqDxJkvXnZkReGAuLex9",
  "key32": "45vfQgSQRB89HkPth3CS6GoCg5q8gTdMbAAcQsnkZyQarMe63Wvid8BbEcN8vFmESoEKMKajpwTyxobqXkkvEikB",
  "key33": "5YgnzKaT41HugeS3M8JvX6tcPeGo6ARu8QA8Wa75DDdw5MPV2vNkFavVvScNdyAiVgTT8EtLZScTXYjMag1qQK9Q",
  "key34": "MGUaA17cojbfWHugSyESavN3heWyauXpym8NUeJjj1o7i1qiiofS9n7n4uR2uoUqY8x45EkJdfwLcZJZAyEeBB7",
  "key35": "2o3nd1t6syjCYutXy1rpTCUvyPxxpofjvWKmuYsdH2cef2roU5TJ1BDKtVZR4NNrHKiDsYetoQQRjaCHBg24vaeL",
  "key36": "4PkUeuawL3rtu85DQmKvntkexHELAdai39E11cqXe7bQeDk64zYviLtSWZJZbjZs37jcgmWDmqHeLj7sbD71DycG",
  "key37": "3Pc9h8uktyjiF6duFvTxmvuADWtJj49toxjVqKNH2uVANF3YJWVD6oNDd3k4rMt2WfiZFYGxGciYdzhEFVp3xbH4"
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
