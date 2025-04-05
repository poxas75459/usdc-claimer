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
    "2sWuXiuAdDHGDN3rdhZ63DVcbEvgWpEVZZ3iVaKybxPFN5pAD1ibb3856CeWtNzpRQPxqDDgJHqjrnAVkwhecXv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MeCwYEQuFLuHMhhc6eNNZfZFoaYGBawHxC1vtDqAotKzSV9FaXaPM76MYASpKW5EgegpGF4746u7xsWFmNEifKq",
  "key1": "BKhjDA86ZETDMP2FF3RMq3aGK4CvTLHj5AiCp6uEBPMc41jKu5GNPVbS7x3155WYkuzsXNLYrGK5wKPnnd8gaWC",
  "key2": "3dDuNPefYzPsLTmarcDqhRdgKXRKQ8QfFuoJxH6banuzUXBtyKFJG1DBQYsUACwnoPjeYLHtcxMWyBdNdBNokbZS",
  "key3": "5wPDGFQG5g7RVfsYpjFi5EaMeTQifAP294hgAuxgxroTYY43goyY9Q5k3FrVzrZKaX6edf41Zxsy77mv2KyTb4WY",
  "key4": "xiaRcB9N1Ysy8frDj59H8qvCBeFEq5QahBLktVQD5bkLW41w6toBMSggiY2sBCfwZoWU4jXnLaQpCCE7kJ31rxU",
  "key5": "4bts7reL2w1KxTMvKCc4TafLz7JrC6adP3SXQHr4aS948c6ykFT8wSUccSzNHYD9CztQzcVrSkQKPoxHs2YdTsUb",
  "key6": "5gzzviZYeDbjKrhiRL9qeBTKEkihhFeK54oaaQZYdNQPSZqQQgLwncWr5Uf8tL5G5sfA4bVk6BZChwwPaDVzQcDK",
  "key7": "38h8eYkEnZ3aN3zTkoZeGDv6b7MEd3gmpzgSad8bnXDa6hbPgmPWhZGDrN1x3oPbsVNxuLcZ8msqmfdsud7m6omd",
  "key8": "2XoBQq47drSiFbz6azNa7h4c4EZ8DM5UUxUTGMcU5iT4T4Kcmboqvb7u5UEsFF2YnvgF2povqkTYJiMKP4CvqWMi",
  "key9": "4J3brsrkPBbrUjcHYDSdbqR3rz7fF8Dg2Wj9Zgw261tRMQZ6ykxikpgFWfcRfC93RSnfZzQ8jJvTikpD73BJvxx9",
  "key10": "4kS4vJtzff7v2mzaCNJYnMaEccpCkgNcpsocgdJ8vwyrpjNoxgkzTm6vwyQe8DgAmgEneKosfjsCdDZ84irjjNwm",
  "key11": "5uyUGuQC2BtPiYZSVs9gTJd7GE8GWLMpWnxGoP6npyR7YRJDjYtRT7LVeBLyKknLQ5f35i3xsGcVif9SznuaxbLt",
  "key12": "5kokx6WuDsknDbE13pV9oyWcFPKiQ3qBawdH4wrcne2Awe11FNnWiftvMjEQs85xD5CQtCaLVoGn8xqxXZWCNUrJ",
  "key13": "42EzUNXxMmbwqRDwdtvC8i4Y5UgtqDZ9ufXR1gicnCDkHBzBmiYjtPdnDvzYj1WAzWKyW8oatHmQkdjYfTUotwLw",
  "key14": "m1ztknkoyn5zVSuxE3rYkMR8pcZXrC4oVqEG1j56zjWJwkGyRiHKzyc1jXmKjAD7YLt7CDUavSTaUd5psEUvjMs",
  "key15": "3VRr9QPvWpGUKAJt7gxrqgW9k7ryMSTRgiHdJZSG9g7aRzW9TCGMTSKdqPqtNvnFQ8bG2n5mE31iY3iWmxEnJe5V",
  "key16": "4S28C95U3VM2fSCMGKD2J3DXTShccVRWJNyvUdDtqsV8BL4hNzSFhuFfpo2kMhDah8g8VJ2Nsw5McaKA8jeFxeCz",
  "key17": "5rNL1gczL9aBRkPUfHCeyoZfSLHzip4uhHmfHp4FCzy1wD6CdW5iszcbfzjnUEne3KnKDiC2Jy5a4fCVfDMHjjZR",
  "key18": "5Ayx3y4k9XtcgL4P1Vq5rbLaucEa2mzbJD38czQ3evLQof9ErLgmhSC1fThf82MtcraXtTbEKACRFfdYeu7DzDrh",
  "key19": "5g3rFH6QCkBGjEtKwRt9gPjAB6Mua7xTuBpWE8CYMyzuDewvsdV9jAzG6G5FDoGnbBH92gQ1rBqXPsetfqCYMCMZ",
  "key20": "3tcYB1kh95aYkVMVMkpwAJQmvKJgd5hLp1dKpzHcyjAehsxPx12iKd7FnahUdoAFE9utV81myJMqjZqjiFapaKqu",
  "key21": "4YCm6Si2rd6FvpG5HmydCZy5ssFgD9kaJmeKqqwwVmf7dnXHjuLHHiJ1yaWkmBvBPj7cMUedm2ukd22LKTFFw3J1",
  "key22": "9JyJy2hsQnXxWAHFGWfACKgXR3iM4h8swXWaRR4F12YsmwX6DDt68LGxKgyLENXjU6sWYSXFZFzkBkvZVB2sn6a",
  "key23": "129h4pMQmACEQpAXYztkno7jsnA2utrHwg9KdbKQFYHvFFWkg1GtzDQV8fuwDxrhtjTDrmjn59EEPuVa5mYXypVC",
  "key24": "2B2d4h2eexpNtiuVX4DBBegfKgxz1ki9MMjcg9LyovFsJ3dje8W8SwRDrxW67KgRA99MAiJ81oLPAqXQ64aN7sfU",
  "key25": "g9P3AgR6i66vWf2CWLWDzVVeSJn7Y38SFS1Mp6FzRU9xhPkaCDVz9YXhaskRXMq8K9Ra7GFJmW4cKc2PJZrqg2o",
  "key26": "2YoDUR4Swbf5ndD1DyK8hroraZn7yr91Lfm6oU3223cKhQNeu2hHHYxqx13Sdwy8N2WCcrT69qbTFgm8D8ddYex1",
  "key27": "5Me4LNKTqpLcQsrKoKKDJQCQewVjLoxyQuC54kQHLw7bPA8E2h7vjxyAMokE3aK4ftWqs51RXGfA4SLg9EFH4V6P",
  "key28": "yTPyi4bQaFTQMDmgANt4abiMKEMfUFSzQdwTXvGBEkFHMeXZgJBQa1RNsJEUAZoPTFGaZoVQxi7rk3YcUggNhDP",
  "key29": "i5KdzLBKUJz9ek8pxoFfZZQWsGnUjNUApyWzgpnHfBxVt7PtCxQgGRBBEdYRZVNVNiBXqu7BE3GDJ9H7cNLH9dB",
  "key30": "2rzXVh44twajHrJcbnmWk17kAa4RrttCtnggjvZoiUN1WJnuuk9VBwNYPr3wr4qhFQkGkhjyErK9fmPe6ZTNFsdV"
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
