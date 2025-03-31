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
    "3L2zDxDmp3T2uUV1CVxYpz2aEsieMr914vMn6rmFRsC8LetPQzFKrwaXtBStHrqREeJPd7S7BuV6qf1xo9vpZ113"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dB21uTyyZTC7Lr9Wena86MzSdiPfmq13qfqUsP6q5PDxeuoR3HC3ub8KG8fd5tXHWbRP3PvsdHpK1a9Ed8mGogw",
  "key1": "3Y3XRfXRYA3FxqAC6dxK5sezeeWYngVPBnDxw7xFzB8NZZitcfkCj8F89PFDEgCtroWBn6Lrtq56Y9ow1eTkbADT",
  "key2": "2AwxsY47FxuJxGGz2YLhGhNeXgm5uwA8Lzr2Y3YVXwVV4Y3742xPZvyQkkX5JcdqTwgCwrqfHfK4jk9sFskMcCAw",
  "key3": "2aaUQ5P98uvjW4785Dw4VXaWT71TmnqgcgT33K8G4JaeV6JYQFpjPXLDxw3H6mvEqaZoWiSV2rXapv9ryccsgNZW",
  "key4": "2YXqo7sbo3vq8AULYfZeqaDc6aZjPi5Kx46rrZSuUMgiCZWYomUb9e2t4CmpFFP1eFjS6e6xjmtbz76dmj7d2DPb",
  "key5": "45JktzYNLkzZD5qM8RiqTJYzUkUP1PxmkjydZxxozarNN4Nvefy6Le2wc2nf1xBzyfuXUYrP3aHmBv34TaJRxFri",
  "key6": "4JLXpN3uUgRgc85sMSoxyeMXwfiotou5Gb8FyhFL513PEef3vMdDZPxNo3jZ1pAm6NYRucvbp5h86uSC9anr8JKR",
  "key7": "4y7L16H4yyUXdgDWL8USRuSKeCYDHm4M7E8AsRk2NjwxuUGWUKCgz8K6fniMRfhMP5UZdr9RQxYzCoRhghLQLCHD",
  "key8": "347je4ZdQDVy3yAX8AJfQEAgcxYh16HqDsZMQwS6pqmTEYfmZUHEy7ujtdpdspXVXGUdPUEW3md2pSUKmwxFnHp3",
  "key9": "mCcgY6EqPoAHLwfQgh5dMVg6eiXNsws91WTjCpLPtujW3iZuUvPj9p9rAC2AwhJvVjqhunkMGvME1WmBeFrr3Mp",
  "key10": "bZ1ywEQUYAAxA6FwL4dLxdKQRiV7KzPtp6Lj1xoa1Z8zEG6krJxm9Zb829hDV7ZUY2NZodBxpFyfCaTqrGZY1P4",
  "key11": "3g25x6i8xggdMQreksvJAvdnXZiRB4Nfjt4WVxC2B3jeuhvwJAi8MPbbmvsXNWokVjELc4faR2DqbdjgH2QkfcTH",
  "key12": "3jUwRqT4yTiE17r8AyhFNShXZzpKcxTGsUHX2y4EpLs9zDh6UYgebrADd7tiuS7XDqrQEmwTuyhixmuoxhUjYY4N",
  "key13": "RfBjQeftjRzrU19zaxksGkjiuj8QZzuZrkke6kypaxYshXe8xT9RWVPPJKorggZudzf5NJ9iBvoVAvEPMzwKRFK",
  "key14": "264yEGQd6ZtRGB5x3yrtQePmnrbJzDQbyJqTnE5Sp1BRD4hxL8H1V4E5NB9xprBRty96DZMG7yZxYPQBfWCHxZ2d",
  "key15": "5qmBKQXd94MrGoU79ukMBrWDoUXvhebAJsB1JsqRDFWBW89SfdqSzCCPU4twELHuAzFFZAnKtk15XfU82arpSHQk",
  "key16": "2rJs5xZ1HQGvP9iEDVptnFxSBQ43XR6dtYQPGudzco1n2GbRaBMM3wdijo28uwr2XArKyTZ7XsHMLt8AhPWCmhGW",
  "key17": "4W1AJABAbC1cLB9yZTdTfS5rpXFoesi4HwzU3U6wPTyAEqesYNNSeEqLcCfGcqJweeosiE7yzxFWNiXwNVYmYGB7",
  "key18": "2fyyegd2jtc7cjbhdTRaqt3R9g1YiMVza6wzJwXBzr9N3f93FuDTHmxKHtk7zzXnYV2Uc8q24pp135JubpnYk2vX",
  "key19": "48sLFViNwmp5SKGfzvQcTG2EzoT1cCHMp7EndhhL5KbDCf1LSjQuLWsvufFHdeihBdCFtcNkHs6fdGw8nD6CtPAj",
  "key20": "dQVRVNE5F2HGDKD5FVgGTqX37pwhKJ9zFTMfiiRJeGRZwwZhMu5NmzvUomeoZ1uBX8L9H5rwS8mKhk3Gz4mzCig",
  "key21": "mDFKqmMoELwVfZKs6mJcp9CgCW6D9SSteJDpYXedj5gSwAe4X9xbzRiJspHMzsWa2e367owteo5Thv6cFjbD4Yf",
  "key22": "2VZXtuC61qNdCDxmxfhgeBmYzz7KxWjjKej5SQeYLN9kPBZH3q1xmWYd2HkMX3XKZnscW8KM5MtLmV1e217sBhbZ",
  "key23": "3GqVw68bGQBVaUQAg273jdHYnER6x1e5mEUGSbDD2gGHBcEKVJd35EH8f6oCynnbEYEuTQDqyZzLuvB16ekri6Hj",
  "key24": "28rymbmC7M94S5LqLC99cWisuzLSwyZ64rt51kkyuaLSLrB4CE4ana9f7dTMBKLWLDmiJtWUZcGXxS94dPKQr4G7",
  "key25": "2ehJ5ynxWTe8WrnktgZY6okNMo9StWAj44Bc16Ni5SEBT6XWhJFiUsgJoiHqoLDGtfEvCuu5tzQzsUVux2kMK6jZ",
  "key26": "3ZEfukxH9UGWmfSfCereYvSPH1Gf7wPt6D2CihSmpsfpS6bGMBSgWST6bPqrskotcY6Yafq6v8jd76Em1cQuGC4n",
  "key27": "5VtWLSCf6yuWemW4b5uVtaV9apUEWG2ECqANt2ntjKCGB1sWU4v11dwyDcyZJUZBsyZ4td7scyNkMMrXCD6B7EwZ",
  "key28": "4RmBugU6TVwqz6UChK1LcjnSgqJnwDqrwnoHKtDujosGWsi6eqtEz4yc1xwHb3UPuKjEhCZr7JZGxamHscLgVk81",
  "key29": "oNmfABm1QX1P3fFNHxgSQVEk3EGGgqSz1a1AAeAPnJL4JX27Q8f5PvyKTb7a5wTMFasbwwJzF2HCYh7LqdgifWK",
  "key30": "Ygx2VqrRQGeBZZkVZXRKz7MEvbbKL8KRqrHhAhNvw1sfgyaW9Zz4xWtetaX4UKMQyxW1USdaDKcrNaoRhddhF4K"
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
