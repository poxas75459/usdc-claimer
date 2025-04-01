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
    "5EW25azHFFiWiS9NGGwBrGxU17PVuZnLmdbUFooAJqC1qbJJWbr9UAUG9TWAwxxe1qQUhhpHMPqFe5gC4XtN1qTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ZMy9cH3BoxBK1yRn6Cor7JqtqupdXafRp4n8TqaPtFPX64j2zQCqE7HGEdkss9tZaGyELsosxgUi2dxFoBp7Si",
  "key1": "2qsyWbmQpn3hrXgmT8DeCK81YtzX1LP7ZPnj1z33ZEpKW4Ha9fmNCEWoeAMXgb3XJ12nK6rCr1NQmyhnuW1eSa6J",
  "key2": "5Gmwqm9pbasuHhsTnMh5EAui5wvLLWoWr3xAUq2izzA8K7SA7TWSQLTcMBxqNtGk6gdxujrnXh5zG4Vdq2HW7RNQ",
  "key3": "3hXx9RzoCw9ve9VDyhkyfK6Dkw34LsspVNVYRVDfjGqs3rz2a5dq71tbiuEJkJes5PDGRcZTnBfLmGDLktFKdSLV",
  "key4": "2uVrb7fMTp6jNjyEDYT852ae8545BewfFbRmeVXqHZ1pRFtCwLkXC7xSjX4jhsKhUkZmVJZq4Vgns4NexdzYN8zC",
  "key5": "4jsRM4CF9VJrh2Kxrsmx5udWBgEDjyHAtyupLspGzW1Cuv4W4jkDhiRzU6pVWuU147c1gQLnVjkxVgnzwk2UVS1H",
  "key6": "2DpWC3TPJejp8kBLDPiLdskFXhtBBDckTHuEmq2AMCRviRLycnqCbgasE6VqhA1Huc1ew7JcXAH3J79LofzvMi6r",
  "key7": "4hs4Qhd7pUa48qQSitsAErBMB2Eie5p8CsSFjHr9jCyF5jh1gyrqeP6mCfv2sqjMft8F4pvKQVkSATEWpRokQx1L",
  "key8": "3jTQW7PKBJ38jjCg8EAn1zarwVojyMr7oJ1FrdxD8AZtgYu2GeF5nbHGYWnqvj4p2q2w6VUpNTUWVc3w2HC5TYwE",
  "key9": "58QztzLcE2iaf2PSPVWWRB9dvMhCQnqfYzvDTcRYMSh2CCT9virVt2TxE7QmNn8DNKanSpKNsp9kEsChK45XSZEU",
  "key10": "3bGFpXAt9wUs9EC42tt5RZKc9d4AoxZ77giY5STX18uoR29L9CbHY6wtsLGLFAaMsHGHij33z6hDDn8R9ZWe8BDa",
  "key11": "4rhYbupAJCmtZEwYbSnhL7n1sX2cj2s78XiMB68qNV6Qvuy7LbWcDiCLKuAF5gzKhEGzAE6u4ixsjHNMBFpruvo7",
  "key12": "62erJ8ctXm9BXS9i9d45ggQBfrFKSzaTtLpDhx51qa3PoAVtTsoxhdfjGM1QTqFvnGVu5ga5M1pjiKdDX4EmRkTQ",
  "key13": "5jz8kfoip1GLDrzcHZNEJ1jgPTCHGxa8XcKLEdYJfZ1FqErafpegmFhjQx5Sqv3qgsgzAf7tTMixj6DmZCdqMu3y",
  "key14": "2xCsD2gvZBxa9q2pNU14YHfghj6fmN3utAdCixuRtzT8qBXLuY93yVXbWc6UAV29AHpSNqJEK4uFbiMv3hDe8oU3",
  "key15": "4byPL87caNjpNxUqebTqEWdiMCE7iYxa1SMNLXadS94Tjxh2NErVUBRKgSKiUySvVtNuGmYXRHqS4C3QLRkozNMb",
  "key16": "34FL13eTqQnDJCgy1H6Jhhu5cnzU1BNz6CcfZjCH2B2C2V9pWhKSNrNGDMjNnzDk1iyrp1Sp94yfgADh7EytFdin",
  "key17": "5tuepYCpAyU8A5iW6FKyKri51eoEqtVbPTuqUtBfcbgUFBQZpN38qW2kfcrWtmQrLEVkopATBQeBTVpnf6UVapmZ",
  "key18": "3LCxhrM9jDZ4ADBkTjBt8dYBzSwZMfAT8Rx8d1iWfTsJefRJFMrc9UhtmWQeHCeMLp2eSkqxCdtC8Kunb7r5iR7X",
  "key19": "t1FJY9sii2sJTa14GhCtcVG5nEZNZcUxRx9sjRH8BLCcj7EUBdRiGwe59FiVdALKsWBH6hFcrVKAq8zmRMj2Mec",
  "key20": "41JBqYCsbLegmhhppzjfommoN32Y8t7XvzmKoJVjd7tmGE7meJU2K4GduFFTarxwEmjGPJZYcw17UyDjDT2bCern",
  "key21": "3N9wxjJCvjRTidFxjswh3tR8ZAwpy2vwu7dEhZJyK2sPDPeeCKgZHXwsjDkjLxwFciKuezrQh592jritavhYcatv",
  "key22": "27AzhbWJCbUwiDfdHaAfMxiYA7nU1GSQZuYvnRwqhndx9RyA7jVkw1hfVzydSA2r95qdYd6s8ipeiHuzsomZkV5b",
  "key23": "2RBpg3dz5Y8TCasE41xBHtGstmJS2TfWfEcRxerqpXifG5ETbaP4Xe86y6tNNEetXa8APu6WPp2Woxcdn4J2Ho1S",
  "key24": "iLShgiZRDxRNfM9KthX8kBE4A3xpVtCkyPr5w2nV8t1K2XXfTNbnCJFaLRuqhNubfGtXtVsuys4EvpzScxLhpj5",
  "key25": "4cYS9MRGPjSVzpUyBMbFuwUddbsp9pWfoyVZs249ia998oho5bnnGLQuZvo6RpcL42mAEpahKK2NuraMvEoPU9Yb",
  "key26": "46nzJhchReQuFL7kbxuxADbFLEqfZmk6taLAM6dcshCh4AdSviMtZyTcrbkChKbsfD2k76Xao5mD51VebUVWAa7Q",
  "key27": "E85y8MUbmfgwwr9138Zex6VGUNh4xNBoFrG7AodffqxX1YRmERiMM3g7AEYQtuY6KpLLg3qv2Sa26fQYQ9UkLtT",
  "key28": "4h7smyzhsky5iyGHPEU74TTre9N9cpHHjsLUzWpQwrVY8LaWQxaVcayXdez86ZRQj6UZsfRY25h3dUxs87tTfxCC",
  "key29": "4KAaEvBY3Txvs4peBwurhL8Kf2K2HLBv5nzKeWRz5ERAggProEmFZ1CdBD8dQydha7DGnQgbdWZucskjCbX8cv2M",
  "key30": "5HvD6MSxVgYQaFHSJK2Lw5sghxA1HaynTnen8keyydH7JGrmA4QMyW6xfxZjA2GDk1AWQpJesnDmB8h9pyh9kmfk",
  "key31": "5wEe661nP1cYGd6EJ3AdNNzqRrhuTCqtbYYnTZSoa73JCVAD2VaeafNBqehKptNv1icu2E1EwyPQzAvkE7i1a2bt",
  "key32": "3zsuhPFSe4S3f8Ffg7yDMc8gQyrZCzfu6zTh63YefvEentGEZSTCLYPYpfGLNy5NtfvLM9HftZGff1KSSHGDQdxH",
  "key33": "5JgBuihL1298umzVmc1E1UBxPaujYp6DeN1FrTk1oAxce4TyxeGT2BZ8kFCrF44JmPLDqX6CJtJBityU8G4Fefod",
  "key34": "2h8b5HxoJSeRU7AWy4BpfM2e8T3KoUB2VgwWZs1ush5KpQisj3WReX4MuFFt9jUgCAWEZLtbzRyPdv2osjLovPGX",
  "key35": "Nai7kfbUiAzvz1Ei6t3CaKQKL62L1JmpSBxZXWqJ25TFKgTLo6JeNWFojuRP48SZYbE6rik6ZEHN9QG8mx4sPJ1",
  "key36": "2FMURYV8iJE29dmfNcsffmMZWVJ6GBrgYabEAXZLwnDzC8LYQ66R8aTJW5hkHSqMjMJaSLWBEsYG1nPQGhdo1vW5",
  "key37": "H1FVBbSaBwWTmYnRxUw2HgaDaSSqA65qPU62z2M7AEaKDuY1iNPpRTUU3dHr7oYyoV5fUUgkRLFk8EK2SHnQVFg",
  "key38": "389uimro9bUbcPttSEKzTk8pAuAUpdappacNdPYiN8sBUC4L35th7Z1sUwupkkn7Fu6N5kErWTSJv2LmTnRQKqHs",
  "key39": "5BPxrGX2DtxzRXUArPyd2369mSEinmMq9gTqd2fVdJqxvesbNJL73gMu8aRUAzKK9xwAogpmEm4c8i7vBtJuktRH",
  "key40": "4yU4oQcWUCM7GoFur1FUxmv7hKdTNb4xj21tJkJ4JS3pv8FPmPnxkc39x8rEE9C6SaPKMpQP4qM6mtEHQgMVSAss",
  "key41": "4yrh36p4JCndMUbN48iKWygxYFufnNAHrU8uoCz3nPPyNJvvWDHJEQ6DQMFzpiVha4UriZpAzpkkvzsN2pPAEwsn",
  "key42": "61i3KoDBrmxUboXd3qpP5XVm728S3bwbNz9CMvRdZGn8oGdb8qgMpjqBHxm3DyEGrfi2LmraLP3SqjU9cVwfQ7kf"
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
