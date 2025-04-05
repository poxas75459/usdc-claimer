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
    "39A7PSiEet6masa9TsKAz66VhK8ppxBw2gG9hDFLGZ1ZYWnyxYpu3mbi4ZZLvTdqTA4i52dB71khPgpUcZx7xjVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y29VkAwRQcD4PxnubvcVmi6e6QJMN1WyUCzyWshkqJBACtdk8WfLuaXfkY7JQGfggXk7N2e15B29whT6qMdhUyz",
  "key1": "A7evsjY4PVUVFwaWwcNBiRVQsXtSqPYnAhwLVwZE28FiuFNmuTds5M1QbkvUfimaVDMr94H4obrFtNsbazSGrg8",
  "key2": "126DTYvtQr9me6UcCv2EgN7ojbzW4JvXrke67s3gov3KMgq7Bdyak8CVPfa2u9Qjn7ZJhRSxfGUsfHHUanG2rSNp",
  "key3": "5ErNzgNEvGnHHCC6JFs5sAxZD8BKnsXKkFiBUhsnKvpQhL3riQtiXNy5wuJz77Lj6tAasGbcBiwvaw4FAyXpwgx3",
  "key4": "46a6Ss5YxqN86NTm8DF35zcrb1aVtz9pnrRMvqC8qKgzf5rrAwdRQApvyew1eRzNnPwkX995BbdaAbrsQLQyPizW",
  "key5": "5mgEMKGCJAxSVJt8f6HHbtZxaiFkDZTvUwvHB2LkL3qRdT7H6SHGeAoq5YfGxKNXSL6MXAXMPbacFKcwSp7qsGgF",
  "key6": "pG1SMBXvdLzD7YDndXkdDdurVGYhW572MY3NoHDuJmPkp9boQ5CLskAQ8PiMXcFSHDvBvdwLQRMFN9jXBAkcsCt",
  "key7": "2mPSbc1EpC6Bk917cbA9H9c8vbiVqpnGHq9zCLD5p7RoJJ8ZEdVCSzcBMPLHEdUwAgqnQ7vwmgDz3sF7tDn2LqwT",
  "key8": "2uejCa6pUeVzMa468j63SKJQU6DFtmM74gRf9hpwSwLyMKW7Qfy6gduHKyQXnL48tstZXSgRGkRFPvuK18C5WasF",
  "key9": "CQAjykcvHkSm7oHBTdrp4qdSDBSi3jJuXtNFtMFg46edfkoQB4DQXWEzKewgo7LEuf6o6WK1LcJcxVW7hbxdPR3",
  "key10": "5gUdpdEJBd7Kkcj4Yhnhu7exp6DRfmVwAc1nkzKwapxq8mKR4QfNEbz6rGRBx8uxGBUkMMvhXAX7LjwVJJKTdwwV",
  "key11": "3piD1bLSVH9GvNDHYbhCWNUXFxMbsS9CcmYSQTAfoUgWWqftukERMphttdf4Y94vfdj9XDvCBGDK8mHYfWMxBgfh",
  "key12": "3PPnkEnDjwWNXXEM9Q1sRG64nHw8Atp69ExufwNK57mnwjfNghQaWC98cTuptCAuM65SwfW1JemmmbNPdJrphBup",
  "key13": "4jmKozkfZzXj4S31XjcdzskBDcxWjjW11TfpRyhXJRQi2jYGLoXYahSMRjRPgWZtkJpUkkfw6GRZZGxCiWoAvQ6H",
  "key14": "2tXsVRJfaw1ExX1pDQBgUZ8XuokFEqLLKDJzBs15vFRFqWJrQF6nL6UR3JoQUzpCQJQ8pC116kSPdf8L1x1pVNWF",
  "key15": "sdWiro64axiRRrpjqceWi87ha9PKDhW2WFj3Yv1kQ9o6WdfPaRisyHaYvd4VjBzEjdaKt67zq245dEv4F8Ge5x4",
  "key16": "3gHqUStCZLibKiMKBsWCCWGcEFbQ68MSB2Ws7qpg3tgtTeN3XDNHdPvKbfy729pU7cohwiYfd4CCvRD3z7MzJBdS",
  "key17": "5H5eCb6VuUN3Wm2Y256ew9nMaz7jU3k2JqA5qRJyKozRG9YoCx4BZw2eTuqKTGB6fcKofbqQjeZN7tCcgGtTCnKK",
  "key18": "2xqtNuuy7SSXizCke24kTCkgesfmNPymuiMFvtr5LCScdVveihX8fKEVodqawQnJbqjsZMJjkhMkyPZLMFDY98xG",
  "key19": "36MswA5EycHtE9KrLheyqzq71sDoxprdTHsewVWAA4R7DhPxWZsdmiZpWdFENdYLaBN5DbZruE9Fa7xuUYkigCiE",
  "key20": "3oqA3j1sZrJ4KoAKEd8uEws1ZCzjNYgcGH2zZ14vX6eSxVX5RSNPMP7cq1x4H4FGKPTVjgxkpsRrLfcRAW7AfWPa",
  "key21": "3iyYBX596oDo58bXoRhD6Rq8jT1DLdyQiSxy6qtDmTxfieLeizCbLaGv6XWJVF8V5hvURbg4pxcczf32eUWXPXaT",
  "key22": "4sztL7JGGzi5U2tw7JBLXkf2r9nCFRqbAN3rk5qCxc6kaDrkfTLoq4KpoDWQH5MyqmYGBYuL8LBFWvzzC8pwzKnM",
  "key23": "pffyfbVk3WVGgGLSJ3WduYkEWzFSAFfd5muiFf4ga6XgdEPkUi1PeCn4A9v11SwsT1rEF64adPhPtXtd4LQPGPf",
  "key24": "2vzMQVZBzpuKCpT8XqbsjwY2i4nKRi5M2RdZBgDQeQkz54LCLfuakND6DiUiCGmuDpYy3YhAao8HnsYAPbpDvsu",
  "key25": "8phmnKgkw9wNifXVm1g3Js8GQqveV3UbNQNrcmvaPpfXonR1x94zJpRWLod3MCZiQNoaGRm9HzhLsJLR53ZCtB3",
  "key26": "5RW9W9behAzjGxhcLiEpbBekQKGjQH7jCkTyvEPVUnAbzqxLQLMAnFyNLLWonMnvz7fsK5xWH2AGhQShc8gYe46W",
  "key27": "5Lc73UBkgBtjDChfB7FML5VEVeTm9ULNysWn91dtkLASFHj6PQVVQkHDtmv8BE9Uue8vmBJQxc8JffhbkfMoHDnA",
  "key28": "2225tdiVd5ZUUPjApogVyJnpncTjZ4jb3GLQkPyPPT7FTL5o2tU8qkwQLunMC5RZh6zMTPNGzDeLkKX3JuAF9PSF",
  "key29": "4FsKoB7wPrQVXiMdWyZwZbnEXWKd97DK8gHgcbQi1SmZmG1865GG8y1jVWgoaeWj83T6BvoNiPcjm6AMT7txPjLa",
  "key30": "3X19QZRXWgeZG5TR98cJwECyH7fnydtntUwo5gKK3nDbAeuUcxn3nNVB21S2J2MPsDPAKXUQBPHF5M3G19vncy72",
  "key31": "3MUnErowWgts2S9r65kJA3uyBhKWh9wepSxYQMn3qQX7kdX7XU1qrGSymwuUG9C7wsdPE2A6CwqDWPb3wRApfZVd",
  "key32": "61Bnatfqwh2CXJUZMVsfgYbzZH1HDCrsjxNFjmC9pgf3oGtgcFZ4XiqeYSas47Rm942S6ysfX5z2MHNwnotczXoe",
  "key33": "3armrLxhEpRBZ3vKBocVR2p9YPUVhmQPyNHrjXMNh524sN6EbkKuzFq7stdBsi8f1pysPV48hDLGr2FRvuzAZWVC",
  "key34": "ChLNbGLwGvMpgyokJcUavWZupbxrDVcjm9mMoZBUmas1nUq266xJbSzJ8erA6B9Y3GdULLVBEAXWwjd9T2iqJbw"
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
