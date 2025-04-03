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
    "4WhWuxRZP4acpsurjQVm7jEaoz3JMoCCFY2DyedMrWRcHfmzHkkTVEg3g2q7ZSfsePS6sCAw6RDnpbu9PmyoxXom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E7VKzqR7wpJt4HUfD5E2Coac1FGHMvz3mDSxM5WBbBPKxW3TdZFHvBURe3ETzxEeWT4Wo9FdXS1JDKJKho4x5XE",
  "key1": "5bbnPvLyyqaw7f7CEtGtwgqvRQbX77AH3objtGBNFtiMnJE8jGp8UqXHeAbH7zR57AxzMc6T4eySPsmTe8jnv3Rv",
  "key2": "4zLoGJaW3YpEWFA7JWPgwvUA3rC286tEUo6pWdGfXfmSnqXGzrk6sWuaADRVvRo5cmCoTmv4zpBhiHuphWq3eDiY",
  "key3": "3CqHbTst6AoXr1tSZPYABbgisG54AZ97UpW2pJ2VVYisN1GgjFnMit4zxWoyaGzEYEvteZzwArirqLc35SFYNKmD",
  "key4": "3BA8JYaiuengUa7GE6r6BEeVrzB76Ht5ycLzGadsRh85NeAAXKzcDnvhG5vQ85LLPsZYix45pDiJzEqTi5jGBuud",
  "key5": "RAKSF7qmiw9rDFUDqz44wV9PP8XT9u4eg2NModzJYhUtm5EsEaxv6qASVbKjvV6remKxYUdePG4pE7FFHtcqDrs",
  "key6": "4xcNSkTLeYuNx6iAxrbyhREZCEVViBvtXFLCp2yts3keX5b1P6Wu5TCFm9hDw9mUZ2JK3xKrs8hD3NfDqAQ3cFXn",
  "key7": "5RL7dZF1Lp7XjdxGLQnkXH4a91tYwy7Bu33eaP8NZzVKNGhG5Bh1yWRE7zhaGp1XpLWryY42GMB86LGjh2r9ZPHy",
  "key8": "3PQsUVMYApG8KgGo3tKGpS88Wwn3pF9zJw9qM8kxoNzNpVMutjXunUPFbWDxh8sVttfajB15uez4JkiKQaZaWKrz",
  "key9": "A94w8gv4ggATAzDjvYBvKr9us7KDycwJYe36kPfbCwpuaLLe7MJ3d4JCoHszqdebiXgAsCWG69VioiYMVRPnnTE",
  "key10": "5rpxpwVLnTKZH2eSsdkNeb9Kp8297xxZ395zgrq4REMuRqmR12qJLxo17yXvoVu8c1UGB4uDvnGqhoTcYCSnBm6D",
  "key11": "ynYuAibUBbu6LtuqdjAe3KMeGcuaRnRzBA2UZXesvNfS1jJKmX1f2F97TbK9RxY69fgk5FRnow9u9zCjgmf7H2k",
  "key12": "5cx9wkDSPYiPoq6TxJd7QWUFV53mwZW6PogjCxRP1K3F2u5i9VwVLNaCqCmvXboGdaa7giDepWviZLwdhB2SFH7f",
  "key13": "3j73M3zEP22x6ew7rZ5iBu4DLMDRVTas3L6GsiwCjUZwiDLr1Fymi5Fa94NYgUeYrvFeqGFNFyBnXZJUx34cj7zL",
  "key14": "3dCuktodoHJAPCHe3myFhdNwrQUByQr9cVfPevP5oZBwfQXGccW94aPaxFpp9aPWEGjvP38RKQsya33NcDk76cLp",
  "key15": "5RRinDaBtZnXFihdqjBXxsdins6eaTr3KpZUceUtZYg5XqMWFm4DwFcPdcguuA4H3oxobPoq8m1XsrViqVHniHHZ",
  "key16": "5j352PbM79biJrRT2XTpXBUx1JqNfQgXz3neajxGZgXEK9RCoUgJY2JsdGhC2JoAC7wqQtm1nVBu3QtWhFL3qsZb",
  "key17": "4JDUTyMgzm8NvB4f4cEVksfDKjWTwvYVBAjsfDJydu9caR9THLm1Zn1zqapLu6uaUJTRTimxuL5VSrsCipDPBXF8",
  "key18": "nFricZkEy1GdavQ2wUmrmthY2a3PKoeqFyN4qYyDvWtz3Pjg4mNDEHNJJ5QhtUgzPWPpvvP74K9cZNFVfJmUEjw",
  "key19": "4FBQRcP3bNDhEh9f6a26982vs1EhtFgeTirjWNxMet5kG1kFSpbsVHNFpRTV6p5qsQWwHQQUg7D9jQmSDBEWDAjk",
  "key20": "4TiZAYHg79VzjPFwPQnkaHfscjAHySc1FtnbB69Msn9FM6rXxAUEbqkzev8LkzVUmGbNVmt4jAHKxySKGLLJDTKE",
  "key21": "2VDjqwjQWpFV9uvLiQUKrAYySByDtpeqWvaZwP4hctM1HrTff7AsjBFscKGk7o88dM7NVaenmi8w415hLpkgmoT5",
  "key22": "EMHWFPg722ygBgSfbTL4vBLekjGsrGzzCSih5YMeHmDtYGYCCp1msZmY8fnPKEtmRVj21DkSL6mdtuxwd7zaDj2",
  "key23": "5H9FY41pqtFw9GRWQ89yAcKaG9KaQtt68gpmoZjGbQ4Co7HW2bAD3x31dqjqi67R5Q2YXZbsjdJmmZuoiZrdAsjL",
  "key24": "3G7EUzf2ctV9KDbdjMUAbUz4rT9cvkE7NHzTcSw2g1e2EAtSo4eVoH9TXtNyiECVRjqHtm4FmRbxmcnbDmdEUNrE",
  "key25": "vs3FBLLEjhQgVcwd2udGQmycJ7ByPgLuEymnVAKF1gk6DPmzMt2ssJhnq43UbeA29HhQ4nJGqKkqjTTEHAAG759",
  "key26": "4fhvb1EDdVyE9ZjrZLkWaCeBZiTdK8vHTC3Y7hs97oJjgbcHyGzaJntH1kKi61SmGJ2bVwqNjDEbzB8p6cpHszDh",
  "key27": "45J3ZBHPvbkBNEEz3Y61tTvZyZWrCnU7mw4pqakcNqun7rVp5voJfVdyQUVaMx3C2qgWvjNHPg1aCLGakZR1fqg7",
  "key28": "JWAzRsb4FbaY34FDxxUANG7LpDReLrHpcu3hUkbQAVBDLBk5PbBdHTC5oL78RTjLpaaV9V3NSnpdX3FxDpu9ViT",
  "key29": "5CkjeTP9oSTcsgK6D3Pm6D8PrxQvbS9Lt3FoJuDvFYjjQP13D1f7YcYcFDKHawQGPrHYCJLNtwFDAVW1a6eKXHJr",
  "key30": "3d1Ebxtab3Rspv9JhSuLRHTEjJG9PXh1du42ZqP7zRUv2sR83z4oEjMSuLPqg655B31sbx1fX8umVB2VueDLsxvE",
  "key31": "2Tbdk4WA49xiJucNEFABinR9hcBeKiw78arjc8oLZcJFUEwBtUMVhEPWW1hD9UyagqfuV9JaBiYf58S9bqfbnT3E",
  "key32": "5r9CF799JxQwfZw4Eb75eeyJaEY5Ru3PzTZLT6HmWXSZpLooV5us8hXeGeAxfY5dbnMHHdYZsqBY1sMJQgbDQvWh",
  "key33": "2Nrr7DqCyUYTLerGzMFS1ncFo6izFSr7nxCweAvrwNQxhX9JFrhB7RHm5QRr6UtAdLsFw3zoL3XmTzWb1YzKw1rU"
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
