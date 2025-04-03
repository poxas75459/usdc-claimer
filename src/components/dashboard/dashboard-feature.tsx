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
    "5c4G71EZLjDh35VGeerZYv9rN8hL7quxxmWYck4CF3Jy8AMaQVT42hs4127SLYtknDaj44dFDN835yzXhY9puVTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oxhG8FobmiMz7ree29Q7WKVsvdDT9PKk32GPEZyCVrEhFRS29jC9TxFsBAsk7WKPxh5g7tqEqqYbirucxDCFvS7",
  "key1": "27bwVuDR3mKg5yRwdSh5y3kVzq6wjw86S5KSfZvMxdZWVErk7q5JXJUuomuM16NQKGM89kdFchhX8mkFJfMHvzAM",
  "key2": "61z1VtuJ2gQtX9XJf3Y172zK14tCqmuGwkYuBT5bQ9fuaaHsgBwuxS6Rocm32SvpgqQwrjmJmUHhaqc4mAwXvBGD",
  "key3": "31vofKuWkkvnaHNNK9GtCV3Fixt8HFG2XvJwpkZXP9eUqWzrK5i7wfNY282hvh75mwxwpd82fXgtZfd3d1VPYjuf",
  "key4": "5gddmkSkqrwxxGG9iz5sybx1Qyk5n21U4jAUa29aif3BUkiSwCE1jyD89CJxN8vz9GiZDg3kBxYRQJBQYQiS23cr",
  "key5": "JFSXKsTyrNTF2JGfHHhfsdUWmLa4Q5yzzhqCVTBAMTJXdvuJBrWLnk44qXMk7cGCXHvybMmQLW3jkxhHU7bvU6i",
  "key6": "3bX3S3jfYYLTU2eikL4UNh4x4kuRKGBgnyNiVSLxeV1NT7de5JaGSQPXgQSaxsNg68MRjD6DVKjVyAKJnpdRoCAQ",
  "key7": "5sje1sPhwMJLTWMSQ4drydc8haVHjszTAb574Npk97wzhTVXeFHEGVqtBDSj69qQkN2M7Tqank6tEShrxPSAPqmY",
  "key8": "3GbHgk1Yzoi4e3ReUFDuJVDPRmagp563DbTdJeFQ7tMTAfDacX7UrC69hVkX6in3266NNohJbsNYneEArspBaRXT",
  "key9": "zbb5xC4ZgABbfYJ9i8MMV94LTt5ZQJThdZ5SDnwCQ6egTnP4iE6XodTwFxGGVjzmjxx2u5sMSXdoz1nM5LYDhXx",
  "key10": "2uQqD9ELCghW86uV2HUVoV3cfDR6vgP1KDRRWroiKa1um6cPG5PGWCuYhfq4RFMb1gG7XaSuWxpw9U4QMPnudQpg",
  "key11": "AV8ABbyKrXW9XhocSosKhnV9qWvoJhCHBpoDVQyiYr6urqtuDSNaohMKC2Ph19CJeQV4cL9ooh16n4uYgCdUvkd",
  "key12": "2z9TzWr7KPGhNpqnAZ8T8D5js5Te2axrG5F1wZrWbsJ9ma2XiwLwFKvBp4CtkrhgZLLfCiVsZij8FKkNey8UBS78",
  "key13": "2A3Z4fwa1UQekH8dsqx6BdMHWn7RVZwDXfsPMDnYCK3EKq4MivUa3dFBxStjeCxKhWw85B7QWakALnJwWuXd9sAM",
  "key14": "2Nqp1EVmJ2h9F1nrBZQ18breFGnCJ6yWJx5nzfD24irw1uqW6ejzguZZ2zt1UN16hz33BarMqeEribdbpAhupBwt",
  "key15": "4ihDn9xNd4veyCUYfxHRnuB5oGzAqpFCMxJAR6qNf9VEMTtWxKoASaNkbm3RhZSVX44cGskSPj5okQLdJMvgHwBp",
  "key16": "K2wpUKu2S4SxaY9NN3YYgG9GoBrFhcALeeFvCako6JKm31Ft84jxiVGPiNRuPtVo5bbsCj3kxJDPmUcR2b4sBQG",
  "key17": "297upbNthrBeiVCnFp5PwuU8UqYcihRL1Uj1dbhxYwQzxU53tptGbGtYXoYLWUWXL2AMq9mjWkAS8LJNeJd2G3aY",
  "key18": "4hNSczvqjfvUmqjca59YsG7cfSAKNR1MzqmHNXxenzb7Vccp3YBkWmzavqLpeg7cCZrAggCTWF2N4PVBUL5TefAZ",
  "key19": "2eQ26dnaCePEdzJGYH2QPfsvQ4F9tQprRW55xwgr8uZfDT4mgbqhosDdzZ8G5w9BhZHf3j66DyjD7c47V61LPL65",
  "key20": "2WYk7JCHCSfew19MzxNjHqedPdbDipat1dptH24La8o5KAFb4N8RuNBCaeMiSkWCoqULN1ZLDrLyuhM3Wi1kkGFW",
  "key21": "51dqkubzn8ctXdppH2QM2zCHmi4jsMb8RMXfbt5gcNZkysRUG3oGiQahdbk3SRUTJEkqMdLHurcv7SzP63zRNco8",
  "key22": "6K3rhoJ2DZWhi4dxEJAFe9DU9SrNtcMUd8TSZa6CJ8i2pPTJGdDcWLZegDoNQEFydo6dD3yhM3mNhdgodLZibGy",
  "key23": "3BZPRbqt8iZ4xFTqRj5c6AY5GLWsrx1wSWrbZmbfujcx7JNdbb5PVNMjiurJgPfbXtrTgdVmyaCm84stz3ZYQfa3",
  "key24": "BuLU7XxmcTos3fwfiGJkc1oBmUespdHn9tse61VMCrqy7i61YihszEjG6gQDnBboixYrSbER5JuDGPpyuDCKfBs",
  "key25": "3iEFvR2gQa9Zvn49VouFLYrhRKmkoky7NALQXqgCE5VmVbb7EZ7xoU2pmmcVwKvcXzfw5uS4h4KsJyAMwDtFYpiy",
  "key26": "23uFVVxKDp8Hi3pqgGGxXYcM6d5BxFa9qacwEcEGd9wwohtSbUdEUibkdoCBjW12KeVL3vMsMmGJYzakzWAiG2g5",
  "key27": "2yA3DSgnWaohp1Zbrzcp2f5pToKHviydbtVPXPz2U97CPpq4RwnQN3MhdghX8yBAPP3BnBdGNfCha1aDdN9vyKH3",
  "key28": "3kFg5uKVa1qqtqhzncRxeiZrftUsD2uDAmMeUHAvKtXKtdndjyqY5Gtbte4AxJ9EMhgwU7wDCGju5i5aJEuZY98q",
  "key29": "4AvWCxGBRKSxRxp6DS6Gq6BwxUU77yRrsoUVMUXoQ24W5QdUmrqmNAxLPbdQgAtrGZp7bmL4rAwiv3gpPRKfVrTC",
  "key30": "4o2k5jdsyu43CF11gZC1ou6LSi9i4F5DBvyCQ1TciGHK9LtY7xR5TRhXhDRxCjN2rtdv2KUQU7s7HhhxAZ3T22LR",
  "key31": "5PXiVoquWchtgfXJGZLmyrhonDrSssZdAYNUdmEzuJP1oh67gW1p8Gzi66vJhTniM6mzotpuTH5AzZDcJBum4UyF",
  "key32": "HA1ehnbNkPN3numEWugmr3oeo9cskHx7jZ2UpQW9thHFfpnuK64eJoz4q9uj8riN7Bpkm9oem5VTwkX4MGAQiDV",
  "key33": "5j7YN7o3yQQLvZ31vCTwrrDHxv8hxeBFfHac8M3snVgRAS676Pcq3A7GbqbMq9xpE4CDebiAUff3ZXWQFFJDN2SK",
  "key34": "2tbCX7DGNVEMiTCpTHfdc9r6NEes8sHTeoYcmSyUkGmHnQw6y65314DtAWn37wPsX598xnyRLukgbi9jW3Anj4fp",
  "key35": "5GURC5Jmg3P8niXr4YEDrYAap9PEiswAo5WAepj8VEE18wFJHwJy7ivPj5vauuVZWPjYGJZR9bdYp82HFKMx8Gt",
  "key36": "281dLdL71zNKA9fiDBnbELkpvrx2Nag3F11Z4U8ELHHv7MPrgzdyFuRjxkgpNLYRm5ZwgvAqqa8vWaKJN4PjZfXs",
  "key37": "5DMbg7TacHA4eTMxnMFitGkLKnY9uMVjhqxicnG4xqAaijgwF5hxmuENHXsrqkBdC9sdofYpaiptKLLRocnQLsrH",
  "key38": "XYGbjEpex1g5JCHrskMeD6pxB7CGbWbP9vSBrQzDRVpvhZYwijXLywbKUepWvvgjtKG8EWPkL3JS8hD4egF6c3S",
  "key39": "9AiNLkQ4UoDTbZiBn6nrbSYnJTDKu7L7u8emfEMLLDkBhhx8P7ianwbND792byHXZCiQBDjbGVNcJzesAM5HaAZ"
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
