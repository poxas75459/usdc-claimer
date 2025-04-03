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
    "4sEFbc3R59JtMXwkXWHLN3kXmNZQMcAZZLUFnCwAfpJW9Gv9PXXBjo5zqz3zJJbqJUUNZAz4VBCCEN5A1reXW5TC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zQTL1QxprB5FkpwzT3rGce8xnva7nKAdzeQPApouH7nrQ4WR5EqEQHeiezkPzSCkDkEBaHyNYr2TBa9ka9zTbW8",
  "key1": "yDF2uny6x19zQc3bbS3jnrvBGoqAuUqGQ7typ46J8MVPAyP4CwiAMAJqAMD3yrEDr9QzS5Zez6eCFLpC1gTqJkZ",
  "key2": "4yJGwU5cCW8jNGRPTrhXfNp3Utv2speHEPGDbATJyneZfagYFUXvjHhbNLmE8AXkzNV37THap2tkiMgAdk4gRtmo",
  "key3": "5rAkMsQgzdiZqTjJyShGERU4kV8hcuBx6yvnoi7bsfLftFKme6vdXGhDDE7Waz4dwsp8eXEYyA12rDZVsocJsrXt",
  "key4": "3t1pmNKiTwQemJm6KiRShQHBkiYPgxGuBSn9g8VocNGfHmrzqHxA2UVtom5XHw9CsSgvfCJyxxFWPyDbxe33URnz",
  "key5": "5yrAYAo5N1dbxPs3mNis4RsWuqHayqPsrviYCxuwe7W9p1ak21edyrHBqNzPPMJcVSjPFMb72nmXpUUnp1nPELQf",
  "key6": "2Nz64phoTGDE1YtNDyqB5G793PcdE5See7ETayUM84GaRhxdaD88bCufLBvkPL7prr3cX7Bz1Yc3jYyJPiDj9XW8",
  "key7": "5MoQK76rto1gBXwNshbdZu2LyKuwmGJyX1avS3P7z5LJedErWYfHDnFnXA5GpMvpqxnwf3eYFZeabg45S3vNFak9",
  "key8": "5ENqqBDmeevPY67jsM47fNyLNQeLwzAUEYx1pmZuvcbT7dZFjHKE1NEoVbLyugK8Yre4xEBomH18styTUPD2eiJE",
  "key9": "5VhiCVTNLkEH8zpjabYuEkSEe2pMAGVXGGQnnbZmp61QUtoDgJkdEoyaZ2u3zZnqwJvpTmZZBo4MdSd1omRyJi9Z",
  "key10": "25sZKXnzinju7EAWmbsG9eqeVUaV1R1dVJVEuqgEt1zfHUzHpvein1Qc2uaQuJZA89KgELx1Aiyoar3CSX9BGPrM",
  "key11": "4wT43dejApzsZnDnbTT5BFUQQYdUmXiwoaXAVDwtguVnk9wJuw5T4c9zqdgRxo1GXdQDcHzCGru7P4Q2EZPXGeLU",
  "key12": "48kn8V6Svw791ZVoqD37knu6NsyM1GiVv6in5N858A5gVn5iJ4EqPFRWSWLmy2Ay3EQws2gDgBhbxXiotj4GeQi",
  "key13": "44PgrGHs7q5NaCQkm7R6WbuEJjVg2UQ5UJjrfdSKmJnF6NfDd548pDFwi7jF1UFWfxCPdWCU5iSd1WzPenX3chLb",
  "key14": "4RyWQTzS4JhH8NLhUZDWi8xHPHacz71kvoVFifumsKzzNcvJPKLKnPgP4eDQujB3j2GChA9Pt1Cd7ZBvPBjSdNHW",
  "key15": "3dRbr2ebMb1UunTBvJDyB1D7NoMaT1XX1Lyx4nfCkFMHAswe1r9wcrKnXREYMoe5pSUz9yytnozr1n8GoPcFBdyS",
  "key16": "4Ztn9oqU9N14DtSVyDyKKxGrB6khGiN5zEJfmR1B9dN3eRQDYxM8iYuAjpvU4aJ3VmUiH6JfsunLWuDoo9DGXG5Z",
  "key17": "3eUoYXresrQGjdm9yYwFop9XiBj7UZUNBTgbTkdcxTnpbNuvSp219rGxvyhtvfDfmjBNgYwyqXAx3rYrDx9aGmh2",
  "key18": "2MuPziNeEwxvv8ow423qdKF8zewbh7Bd3R2ppEuabeE4y8aqEFL984otPYGK7bz2P9KtARpTTbqTibrfWXwGprhi",
  "key19": "4NbfgRraPCG6Ue6qYG7281HXmA51vaR37o2c1nqUn2TLYyM9BED2udKdmMALdXFates3vRovLXdLtfX7C6bKRRmk",
  "key20": "5hYEf2JBP4oYT1nP5RVoyRhP9CG5towAKzrSseEuXy4ZH1uPy2MrAgXxLp8A7npjgPr41Vqeqrt1n4F7j6vGnDDb",
  "key21": "2kzRJALjVyKCNbwRGpgQJi72EqXfjCUL5rwgysuwvm2PQYeJ2aCzED9dguuD2RhZHcJLjDWP5QaH3WczF89cFvgP",
  "key22": "2FeKG43xNVTvjTDHbAFbSAm3E7zbswE5PyPzZTem7atJqTSEkFbVGyZkKnwJfQgx88oZ6DuWVdBWaw8YEGmYy5uL",
  "key23": "4KWj6wrmgUfnRk8ZB35W5ndToBoPrexEiRRFXEzFzNVayU71k9Npesi3Ev1RD4E3STNVWPW8KUV5RDStZxBt3REz",
  "key24": "t2ttbXwNNp6YZ2Sr7bYeCgtWi3Vn4wNaPZ6oJTwirxxxwuSHjhyAUe5E18QeRJQvxyZetgMvWwxGJ6hawhsJsYG",
  "key25": "3DoivZXFL6s7N57X8V4Tds5wyExP2ixzEcXvRvCxBX3LTk6LT1pwnfU6gkEg9t3MWFuSahSX4nqMF3FCE6nMQf3K",
  "key26": "3kxLYPp4JyfAxKAz1zF6uzHXkeoBBwbCmbu7NUXbgWYS7axRCX6GeAvfswrZAunJayrwKEAsM7EVR549H1gUGWFf",
  "key27": "3uAonjqwCq9YXc9yABitANhmwRSEzmQMt1QggKyxJUZ3zPsLo1QEStQBDv54MJGvsMk6bJd4fSh8mHRjFBWb2w6m",
  "key28": "44YcHgkztvY7WnauyHG9uU89aSXgx4YuuYiVW9CB4Emt5AQ36ZqFvdJtqbwPePTZeyLwkZrNYNxzEBJY6HCjU6NT",
  "key29": "2ucKRYbrA7MWUmFEyFB6yyPi22BcUVu6kW5fHSaKB74NwbksGeGXQ53g6Rqk8K4r9kM3wjpgvgCgLxZH8LaZTgam",
  "key30": "3Z7ULAaeF4v5ZVwhWxJ6JRTUeUsvGMbTS5TmMhYS1Bupo1G1T8HTSqRgCeNiPDNFSd73t6HkTVyfpBzvBCdLSBUi",
  "key31": "4aRUsgTWJxwG56KD5mQSL9vnBVpQBiPpcGkzdjGLsugZTaoT5j5KRAiFoJVeoiyiW49RNAcekWdjXAqRm4FoPyjg",
  "key32": "5jqt7kxbCFcMq3y35HooKcHdNTyGSPDRb85zCRPrjHBwaHsYBMBKhnThryQhCP8VDRDV7a3PrnBbD2KhL9bFghtU",
  "key33": "4o7G8tv3CtZpgDeiYCggVvktBmDrVfJ2SmTNUpPK6ZPivsETDYmezU7AUqSMZLaeVuMdYczeZgQ3e6Sn9n5VyDiP",
  "key34": "494VFeNPGrZb84S6hkGkKELKYHN9mPfCgSpZnyZEHMSJCs6hREz7VotQTuu9WV59WSY9hDbRx66wYezAd1AwAN6Y",
  "key35": "4yGDMckqWgtmYACmMZGqtUqDtPtVrdseBoxMnhis2axf9SSTmL1abYK4MdUnpZoYGVu7DzN1rkNZ5e7B9E9tsWeD",
  "key36": "5x1UysnTdJcEqjM1nPSxRrihJfVNvBr9HFRAazoBzZm1aDMPTH3nbAefgahrMuMqhreUjPnihJ6ko62H4TepWM33",
  "key37": "4CmQ7H1nsdLFV6YC8Lw9vNLeccKY4cjifB2wFvXy7yipk9iKkE26oHkorxBnyRbAedVTVEukL1DLWdC5y7kwy8UJ",
  "key38": "R3v1u4hR8Z1THeLxPp7gFBbtVTqBg2kYNfhrYsL2RiGrQxoZizdAZK2qGN5GBd9b3EN5kAdQhKZiq6NLDMFX6VH",
  "key39": "643NsWEcYs4VdEkLWXcGioPTJYvTmFbEt3tBCxT3Xyd4iHSKSx3MveGcjHiSPGxi68EBijo9k6ieZMpe8rKc814m",
  "key40": "aozCWJBwAKtXyqBVUCyKrUvyqcE8yYH2qVYM3QH3x12MThHRMzJYympWrYvZL9A23Ao8No7hG3FsMAL8KpWiEVA",
  "key41": "3xQeVWpF8DqYQsU17dhwoZi62pzss7n7AQtjFLvjeDue2CVD9rXx2fAF6ATjRxfgTroShxushp1HvrYf7a7nNusX",
  "key42": "nZHTdFSSZ5w66mHwq5Xsk97tY4kKhcnxMYoPyR2GTZXT2FYySfWJ1K7n1DT9ZoFfwvgQkrCCgmFj12ebnqNNuCc",
  "key43": "2yfjxa8uZqYio8YwNxa4td2Ua39knq51bBKPDWSs9YLwDp41iEafjbH2UZ7ZRnZuEkPACnmJ9S1sBwAtuCVxQNGJ",
  "key44": "6JMTbdgVN8UN91QfMUSDbGFUgjfPwZt87WCcivTr2hRqrrXtXMeGRnaVd49Cp5jJRKbng3Pq9p5xKvKfLmEwHtX",
  "key45": "3Zq2Am9WqYBtiT93MX7XEzhCkoJcxgFuq41xX8e3csYU12ELnud3JmsuCsxz5EbQBKsc7wLAt9Fg6rhMszwuQ3hy",
  "key46": "3czP85xqxzZDky5cS8YfsJAZwaAnwFcsPoQxMVzSLyL1V41U7JEajyjoPR2LJcjk8jUg13X4egDfhKzWLmrTVQ5A",
  "key47": "3zV1x7NooZ97to1xE2kFLUGJVWLHWHT64Yrc7AURux3zUbqo3MsybCrFSrhs3vMt42NopMgYCQ43BuwQWBet2WJ2"
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
