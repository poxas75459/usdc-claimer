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
    "3SD19v8Rrv4GH7iqLBfkKURm5d3r9YG8xbw8psjw4g1gq6mCD7BQPGxvW3psmkumEj4mrDx9VWXWCGA4Xe7febKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XZLJUwuhrrWtXqp6uSUrfmL8QXrDpWytDzYgxHUdrfUnbB5uH3XwgFMDvqFzYmANtutosy5qh2PgubZngUdqKoA",
  "key1": "4TBkbBdUSos8aCTqYvpMf6keuj5dnELAi6MtSffHsKXyHaMAfVuiHuC5P2tyDZvDK7sBBRUhzuLLinZD4VmC6N7n",
  "key2": "4BhXprV6jgN888PpXDWdUd7s9NdqELFmYcLDeHb2VowaUwzL8HSxJ6Wt16J4WC8qxcK6NxAWYmhijhzquDByK25T",
  "key3": "5rJZFrCUgYb7zigRLyDTHi488PGPMcGkenzd7LbS6czroziqDXbkdXzSecUFyoJJ3xMVVKaQEbdmMZBSXWg7cfNr",
  "key4": "noqBY9CmKRpRfVG5qHhSAqcEeiZJT4X8dvrd59Me4EumtYWsHLmX1Zs5arZH9Lz5UAFkVcXnZ27gQ3a41uyAVtk",
  "key5": "4hwNyL5zNLbY8MdHK42gzsCRf5SLy1qrJJLy4NPpoJvy5LGiXrKtRuED1qzZD65sB3cP67wcfSJerBKoo9JzHfCG",
  "key6": "4D2ze4HLnVZ8p4d81rJhphCieqqRCP7yGJgrLULTzeXGNavJUrT68MFGzPWk8FMRGgSDBuiwzqFbJyTo2ruWtBP1",
  "key7": "4SVUEmsW9meRqgRXpWZqthPRV93wNZDCYqej3CGcEpc9fvuuyTC5tHab3Evk35W3PBv89iYWn7KapLJUrHPFgao2",
  "key8": "57i7utVFU3ohMcXQ2rkX7bz9SUc8phbaV4V3kH7nYLbgTcB2H8FaRG9BTtivKttVA6Br3bCQEdCRb2EQS54AYhQm",
  "key9": "rhYJfS8HUS1poDqxWcCJQeXAZotKMLM3H9XoaoUUe5E3RHWnb8UsEeHViv2xkVTXyqVJ2pW4uudbhypyomG47eJ",
  "key10": "5bjEjKD9n9JrN3K5wMqBeng1MKzs3Da9DdqkZWgvZ5freB4vZPsWCXQq7zStBKhqC7wUJjx9XpsyyFJaXRjLL7Jj",
  "key11": "2U1r3UbYRnKsA3T1BQNotoRXGGdcFusdGUM7xR7fuEaye5dzqqRT8FEQZ5xKu9HTCLRg5c2mzUYmCEU9DmwWJ6mQ",
  "key12": "2uhJD92ZQFmb46N5GKqRAUxmnmGP8Y8YXAfRkZXzzeCbr4KyB7973RcFx94gqGvCGsASx7XNTS3Dpa2KdLZ79uS1",
  "key13": "5hd4ivGL8aVrfhbbuCjoEMZWrpiQyX8EU4aPyGgDjTuwhRt8BLcKpMwzjbZ7BR8Kuj4wHsLDQSuXMqNfhpMDiWko",
  "key14": "4HUKEprp2JrKi5wtdVj9mQ92QMkoC822HnNzuVXzSLvzo82PL2r8QdhSDGsqFhsyqTox2rzdXt9ToaCbLNB66fgV",
  "key15": "4qaPGSsb1EB2utD5L3QxAQ6Tm3CEDVuJPj6nPQm6uhRBXvFWL7RR6kzFipqksQr9wCeN5umcSAuZe879bjjcNPj1",
  "key16": "34V7ofyCLEk7Vtd4u4XP8sCgeGZKXbEcawU3z5J2weA28rSAC5wSmM4oMXMFfty1GzTQkaByYCAFvNrh3AJCV5dq",
  "key17": "28ZVzxt79frbgvPmpDc3zu7MXo3RMaoF95c2Pk4D92rd2CmLTU835dN3S8os63JHBQFmytF8jPxhRtfkKFcMhu4E",
  "key18": "53nrgCNgxjGvcSDrg5JBtYUu8ndDsNQVS5Nr2VL9323SeEtPu1nuPv7y86j7mVPw8QiSMShxwezWha3vQLoEhbpo",
  "key19": "DzLbQCPeFg21S36S1biQ3XafUrtbqwCA9r7MTdHcUj68DgjvHd1YafgR1CGWkGpvfrS5psepHWG8Ek6yuA3tUpy",
  "key20": "2a488cePuWN9gdfBPrhfUgpHwVh2CVWEMqPaQN2uB7izPEqJEG3ZziDuEMnBFsNmXxKRBh9EzxESFfsfJXYeFngG",
  "key21": "dVMReF672CqaoMNSsk3AzMy57kN8BfnAoPpu9XGoZET8fLtnxf8CFhYbXBgCpMoRfvJv1krCBhJWVDnZDP6fNEn",
  "key22": "nuhcHjNGx15ivZyDVitsrb2QTLxZsT9XB2WgGt7ZR9i5rTeAy6h5ef22rZ21smCqNeVknkuR15Chz6tra398Zew",
  "key23": "2ZbDYSRkngSJBBDA6boj1JGGkpG2LJdCUkfQFRJ4j5PSxkBKCPK6C4hcELvWDeXY5HBovW95i1KkVFhqkuDgzqMU",
  "key24": "LkBbjWhtdNWA1h41uvh9GE3jySDEiRzA2mfM4NqQtLWuatKBBxFrbsaRRDNdoh6Jn998aVhP1XevJA8PfgC86ZG",
  "key25": "5AXwuKjwViRdD8RaLhS5R5FAiEjG9Ks9u6Lx3S9hqCz7y9e5jtQk8hDpFWM34pXzNAXd1uWE2AHfMd8hu3fKSHxN",
  "key26": "4yA3Rnp12Ucvz2DGvG3ugLK77qQSBvpLewSymG6SmQmhvWUkayixMsms1mLZLfYJkRvLePiDP2EzRj65Ukhs7nvN",
  "key27": "2Ygt8oZt9cV6xyByHmy6Y1iEA3Q8u1yCEyE8VNwZzNum4P7117Sot9VDg42a2qDQZ89ym2kroVimHCMoDYxJvTna",
  "key28": "5Fq2bvcVVz39FEtz6dKN5dd4usGg2TYEqnWh74BXG3p2mfuuNMavAeHVszWrcn8fcTi7fM1XAPc7MfV3XCBc2dED",
  "key29": "THw6tYcta56MoMvMpMy79jcXBYkxhGqdQ2hYbuS1cM1nK7W7CTPEinMFrHpH831TXoABVWwU8ecMpAu21jPq8cc",
  "key30": "Q1uGmT6CuwEwALbt9keJjnG8mtrSFAgMUkXKJG5a8cuGABJbbSfBttTJ77eXL43yGyJreNfpvUC16ebY1vFuwt9",
  "key31": "2Bf6zoBavKtv1esHJqjjmy6gK4QGhf78LAEse5tBnu1X4PdEPD2tgYt4QD2NYt7yFKfd91LXLLuLcCNuQANqwzCc",
  "key32": "2oC9rDS1CWvxe97xgriChJpSmFTEw1dvfAKb8v9mFYafMikFyVGkimYDCsmcT87o5S1FHXjED87qtJKotmoGRBpB",
  "key33": "4HcoCJR1jYpfm7sWMctL6XWqkorkaxFYwsdaNDCf3tuAfxG8xQVPjSBnJZqccj7V7rAxpCGHamidDJd33GuGhGbn",
  "key34": "3EHhYxSaDLNSrXvMmAjM8SNFT6KHHN25PLHwcR5MocB4GQE5b393scEK4a7CH3yCxthoixZxTLdyzSavqoZYMJQf",
  "key35": "2AUCW6DcNZRLfBs6yEau6mFMBD4MvSXX611UigfhWe2ePmj1tT9QZ3snwwaxDiQNNWeSRAgTvTGgZXpdFJ1dfoSo",
  "key36": "61qryPBrqMUAFHcjdHDqvneNwMFprYevA993yRqyUsDM5hHYRUfSgiVnbQ9hTSk1wrbdXLvXRVVaLjFg9yjqr6U4",
  "key37": "2tVkH6mWrQq9LQsSJWKVxkdkjSrVWJpS7ncCSd46RvzzSxdMZhLiPoc83o1sfwmpL6CsxQAunxqVrx2LKqaPXWJN",
  "key38": "pXd7w3G7hMmndV4qbDD849DPtWgr3hqUfHmQD9Hb2xocwAQxVFdtSeCSP5NY6qBBCy8dXZfpbkVGXs2axH56GxQ",
  "key39": "5Kg9jcyuJhQt4DtkWwSJmM1PrSYDEYTmEf6eWH6WHGXF4fZGkLApgwrMUHrfZTFSgkYyshF2DrzaHVWKt7YCwFed"
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
