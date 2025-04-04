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
    "PDGyxAemaHibzfx6CA8NjBvFAWY9WNPPtyy1V7fPzPLrxhpTPFduSsYEuKv7SNUkXwXMQmimK7jpWPcMt2vdqSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hz5SMF2qEVSYrWP399koZtARoHzLNbAg6UarA9bHGoZgCkrn3zXXXdKabrA1369f5fzsmN72s9Gn8edVE3TeB7h",
  "key1": "3dtim2UZfQhZgLeMsPiLtAahwSyhXFKfXVW6sFN1SESKuNLb4R3bNpCfDMLbofhU96anZXTASN5TcCtLSbsdQskX",
  "key2": "3jqpsvdJQD9xSiDWZ1WRTFsXGzVkwwcsRJJQcUwZaGpZP52UK717Aw568fu1jNQWFVnyq5mihn1J7mJQN35aQepA",
  "key3": "736v2MEfpbcty3uePuXUPpV4KUfMVuUDxaT3ecuYyN1zYTZbyNgm6AemPWUTunYgSFi4vWkAmqPd3gqgatShDMY",
  "key4": "dvvUjo5gfKEwpwXurVusLAA6Hq2iZYJqmQYjjbEaaQMzAikPzYdvDLD7HZxNda89VQhF5oHWHrBZ5Yo7GY4kKGq",
  "key5": "5YxFMJrtQFuYmZSkj9nGtuGEP3vtSnGiMDKWVmsWKPoTa529z5ubXdA4hhPEiiLj2W9d2d9dFZu8qmFS2aJ4fVCs",
  "key6": "5kcHDuQaM4YSDohBFEvJtqS9BynxHmBBgBA6HJWMdNzZkAcH85TgKPQsKndbaBd6gRR3ZnhRBtFC9gikLjoBSKgq",
  "key7": "q4HH3dmmEATzWcBadAEKXk8sWUvLKhr75dhJjbpj9Avb5SkcY7iDowTppUKHBi5zyz9tYNo4Zj3gMDLhvJY3AGR",
  "key8": "5cT8LYBGQxfTcYgC8xp51HXhuWEtbCiGkiUccyi9jqXR4Af5CSkS73UZo3daTa3BZNEzXs8gndvc6Kdp6LPoWxyk",
  "key9": "5BgcCVK6wd9uEcZqMuZPErNfsqHtEFgunGgbjVQM67SGy3Nvn8w1ZiQmUKYJWtXcyG1ZjWCauomjh5MckL7kvNqo",
  "key10": "59H6CVEyMR4DmDao5oBTieennTx743NEVCSdtuDnFzgbqbPWkvmpmX7JrD2NZPojSmWKjxLNB33ZCe8M7Etdx8jP",
  "key11": "4dByq94xdyP8FjjfXG5ACztbjqT7VrRCmuXiFGdhBiRdv7kbXJV9Cx7AEJRVaxFGRieEqKWAyXyQE8u55HGz6eeg",
  "key12": "3GiQgGkXvtV6eqMohByyrVyShJ1Ydpeqs6pcXqr4J7g7B7uXzGeTeRacHSQR2ZhRUtS7nXEg2w4EnrpSwDkWt2cH",
  "key13": "5ZrJLPSbpwDzohCmAJHRLcGwJh1vtr81eVge6szTWRcb6F479DUK79jVuA1E5YDiCbyAr2oJuZ6jWA2wa6BaTcQU",
  "key14": "3ue5zppdM9a8LLqUrNJowFYBjAbE5h2PPunghRf91oMsXjY2gfk3uCXoM1mBX9861CxLEFFbhi3x9BFoFCt65jXZ",
  "key15": "4wUMMVFyKCcoyTtmhdkrPnnVyVsDHiZyxoeWek6KtD1fKGuGdjUUHjZhraJxB72Ng1PDY1wHgYUYbaHfMhJ9hxJy",
  "key16": "CKQ9Sa1TqafaoTkz5suEgo8PYBJyWrTNH2WEdsCU3c8FfschTeSNiDdxrKsftAgQpmsMtpcPYjz1xUqVPvHjrHK",
  "key17": "f3wDHhhW7VKJuHipagrrfNomrewFnWR2rd8FYjYdXvUmiJtqRQPFuVjLUWQVuXS4e9zcmtktdUHKQJtyPxUNB1p",
  "key18": "YciG2ygP5R5YowfQdfzERC1eg3ULL2uUWdC5pZttkugKcaJti51XHjtpwPuFMqoBD8HsKa2SzSnvceqFcVXGvYm",
  "key19": "2RHpPYk6D9JihYe69pPAoH1F84GGrrpJcUZPhDrqjuSme4s5DHj3v5rp7Bzsny429TZ5Uzp2cCWGKLV5RtzXBBfW",
  "key20": "41pDz9gUqpv4kx7TPa7ZYaW8QzhZK1DVro4WeSLmo6sNvxMy8KLbWQMcfePWJqtZR6J6PXQNv5fyazejQAFkyge1",
  "key21": "wtfWE3Wm8hJpwMpujr5AJyXEo4snDEpTPJrLwUDSP7qNhZSmUdLQ2jHd3SFJvfbawYTjrEQwkUBrv8EGbEBFvLb",
  "key22": "24SVbXNzQ3i7iJpp4crgLjaKF84TrecANRVdFq53cZyujHwaSqvgrJ5p7oHGVsTAuthKSKZY8LcvGZcHK8nq2iNb",
  "key23": "2n4D7BAQnVhE6nfbeCdGVKmD2WAwJmGRUGpeUfsv21zDJy33GYKux8v39Z2LxrFmzTdv7AqBig61a1QViL4ud5H1",
  "key24": "cGM21F9zbHdy57GWkisNR2wKQpdZ37H1epJB9eRKfkfn3ugfTpZna3FhRsvmY3LAEjWXAMqA5etYKicGEp4ZqpP",
  "key25": "4PyHt9Nuwt4TM7WXqj7TjNZLqpJZ7nVNioMJivKiSEBqSN4j2o9Yf6Cdtgg8vnts1NL8oZ614YbuSew7UEWftNpp",
  "key26": "CMu2qGvFfYqEaf9273GPGAJaCKgd1RQQfsMCN9FZYeegcLDNAEQmTA4SAErsBzv3tWy13WAMqK8S2y17wvBmM3Y",
  "key27": "5CZkKE3vp9kjtwMmgDJo1CQp5wBnhMbufFw3zQsUJ4uazXt4n5T2t3qmC1DAksgZwgUywZhjAMcnr45PkPBtEv8S",
  "key28": "BcE2HLQcFG9VzXDJ5NoS4hnsUiii3mYZcHxS8j5CFdvdBNmxyizudr4M9GWupiFnnFv2ssKHqRKKZ6AVQAMjzGT",
  "key29": "2hQABhavBW1bJi1iwLkSXkLnjydSgwcQ5kBPRgJrYZ2TevMBtQmJ91rWnHETV8QicETKwCPbrTvTivEj7C6arfTB",
  "key30": "4EM1adm2WVhKyJPES8PHKXEnzq12hyyiA6d58CZR8X168oPgPxAVpgWo9QFTL2dohX9ThPvDSFvXS4RTCUa5JAiZ"
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
