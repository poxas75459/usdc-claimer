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
    "QoybdqibR7hJN5eW1YpumX2UpedNadfg54SKbTiiBpSN4juk4eRn2R3ERXyAc21Leuqt6zPKo9U1gYXfQksdX73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xyzDeDQGRbFz2gHxDRPFotoY3jod5UDMabhCYjMwh6mqTXrHWrzEmEfKDZRvv3HLxkvU2AnWuwAYqcvN3ZHGJs2",
  "key1": "3Zc6dRS2XyfcmY9M9dRrePXw44fM227htbYVxm3zzXnhBRhU5epNUsySYcanvr3CKyakAsBRpafgM9jbbdkhB1CY",
  "key2": "jqK8rDRVcReYXvo7WNxtQSMFr6kcgETA7y63amQ8Zc8r78uWyd1qAKpWLBRcKaNVwDo6gxowXVF9dY6zkpqmX2k",
  "key3": "2TcgPJbEs3euHu1Cv4HSByzxGKbJf3SXQv9M76bBPKDocJ9DiBH4EbVSxQ7NQBvzQRTzERxMZmwkmzmhVfyBiL2e",
  "key4": "2eSVoQAPuuTdoNbeN8WjWWp4xELK3aocbvDpSCp9ySF3Tskw6G1w1Re6wo6D7bNYRKRtwhkP7rukeA41mfgQAgCc",
  "key5": "3gVpSfNLP7rs4rxkpKQhRuvKmrh1LxBF4RhhmLBro39CLUhi9LzFecoeQ1J5teLjpGmnJ2RDFEActkHSg983ZRMn",
  "key6": "2D1S1TjDMUTkgxL9Vg3JfpUWQv7CREVXzba1E9FWvaZ4w1UWXU1XGHvSmAyDmebbnAkDfnHSD6hfDmsqjaSeuuBE",
  "key7": "SFRfLjJZs5tvai15X23pqbbGCdRQNEqxaWzyYRTDwU1xCzKzbJ74KRnyzz9Fpz53xisp6n8kUgDJNBHC8hTLRNd",
  "key8": "5cbGrAr2cgVjWH6oBNZWh4VbRcTHjuG85sEKmhpwAbmXrnrNQMUM7b8sAxmrtwfhmfdcGjK4aXuciZifCjat2Z8S",
  "key9": "4X7rvD823ChMqf2idCmSCtFisN5n8c2QfKJzvTwhTfJ81e66Rgv2uh5KLSUC13XAFjVp4HnkRLNmyHUPdxqqb9yL",
  "key10": "wyJZixJxchrHQ4DjQgx9NiEg5S8ipJ9Ms5BcCsVFZQm4o6SuJRGhKxR9mD4BNswpMqJTodQHrxFZ4ASMgboQE3J",
  "key11": "4KYe7xzTf7km62WL2FaB2gf2dCg2rSFJ237MhsG64MobhMwXS1YVTH25L1YRhxZgjwNCvuPDrFcmtBPet9BVMmpw",
  "key12": "4qseNXmXmHdb74WsCRsu4JAFVFmXxhzHuAkpLQdtiHyxMaK6wkJLAJ5F8v489Pp3L91YEtiyCjwbhmdcSpizqJdj",
  "key13": "3T451dKDvUWR2u3ZqTvzcCWmu8fFx7fSjZXKQZVCnMyvU7UEyr4tCXRwGwZZ6HE3ZT4xMWedRH7ZF3EecYGsAaPm",
  "key14": "Ja2TTaRxZy2GvhVTENHLAUydwxd9yU4fVc9S1MzRM2cJ9yeSaM9QfRontLdGssTqWC1uLpeVXyPXpSTP7omfKTd",
  "key15": "5ywag5hP7eq4R8aWpxFgYwsRi7vu1PioP6coXXBFxdxRAqdL6gcLQQKLBRYjKDZ6npuHwPdN1TBqC3sR58R6ssQQ",
  "key16": "3KRB6z9MkjhcUwe3LNYsZTRNtKY9mxArmAa6kzRoHEcqEF8siU3Hs4TcsKAwvb7Ns6wqEW2U76yBCihkhARNSY3N",
  "key17": "5vmptnECGR2y2HNfwNGqLXqFzCXAszZ8vHA5AHsWFtkgoFmYUF5ncM1vwmCjSys9Z9ipuwsVKrmfic7REFS39sHD",
  "key18": "3mPV7hMheX7H8bvZzc8ZnWVQknsejtU8nNaypQqMmCcEncdBnaXBKYoGHGo27cZiJzDUpQxhd8oviZaRaR7HWfnp",
  "key19": "5EUEXoy2H8Y6DpSdT9XjL8gHn5JaK8WK327Xbzp4YmR66bTfyQvRZ91Rzn12yzEcEXmCjQBMKP5mr2ZWR7YgL6K1",
  "key20": "62vCtqukK4Dio4wv4mh9D3qDX6xM1J7LcA5maZaiyxDDfttFzwsuCZqVspzmyHk3yxdPGvm7KT8BhqWTwYsLx41a",
  "key21": "fYuChhAPh1yWfpbhP1Rthh2qUc7GPbcHjY7JLPrcESBaf1XDkvu8GpQfqKQqkHD17MoF5di9zuKkJWyqgHNVuRS",
  "key22": "cK2X8PBFVCwQwoYPmkeRi9cxp8LwjEDAwKGa67SGPFxerssJKnK9aUspEKeTNaP2dJPs37Bm9kth1GPJKTQgUVx",
  "key23": "4L8yTYgyjqUKzNLfEtrKJTS3qHSL7z5bBdJEzXECAgFkptQ5dmN45psFJ7oX3w1CA1wRAJA4zKEasJdyDxnkn66E",
  "key24": "4R3S6szM8Ymugme7Zz6AD5yQ7ZV6NTpxDsvQzphmzthkZ5xDm5A1kKoUKK2GTvV2oPigknuJ8VVDHk5H3kU1Awqq",
  "key25": "2py4sxXRt8ZfhxJYY7nhJ8ENZ9YbM6YcrULmEC9htooow4KjEkP1CVGw7BUyQrCgVBX5jb1SMdcWseZJyXoiURx",
  "key26": "5mCCu36tQbytELShjyB7dghp2FLGb6FaEFevxuqpUKP9fhJwukYXQpB5u4jRdG3A6XLLAXhkyoBDSaCo4tudstG4",
  "key27": "Pq3UHmyTonk85SeNfbBDbwJ7Ty1nGGqB2AngYC2p8qkkGLDFV5wsJfV7AuBY13uYEeJ7p5SK9Grt3SWvo7znfzX",
  "key28": "5u4LBcCkVW8J6YkJZkUvqfpQaDtMsUWuJynVHoqL1JqZCob4xPPqFP3P6q5YNeu1MgVXbcScnFZGop4NyJ29ExCt",
  "key29": "3uDit6L52H8KJ7EMaxLThjwKa5PL437o2di1JBL3yuvhctXwfmWi1VssZa3vHFFdtkWEWs4xdnjPChofwgsuFQtR",
  "key30": "4fQzupAJGAw1qdkAG7tyTvewWWqBuvtJhn1hnDLyRJZm8QJ8ReqjCscE9fjbXcCkNwBe9xxFnA9XAwf2cgBAcGMd",
  "key31": "3WKNMcdLDn19bmcXnyubgcXnfmW8LFJwN154YN4bYbTcq8QhBceGQvzwqNHzWbewfZi4DsitdoMqBjYeG4tiYXww",
  "key32": "Zs1hifJ4d3U8n7XAqNVY9FamzjqXgFtU1R9Ag4q4yfHXHxGssptRfqEH7ZLpBVpM4meS4mshfp2obBmaY3mJdPd",
  "key33": "3tVsHQ8cEhGxFfX7tvjmbibkiXycsHo9CxCxjbRzwMYquPK3xgAKzppLziVHJ7tL84Pu2WKrHRNt2DvFq5MpZnc1",
  "key34": "33R3V68bASE69veL8TDYqjtguwXL6Vdr3Y5pTm1x1691d4CE1teiTpwuata6Dxa3FYVNysu1YZTc6VuUjK5oZGWi",
  "key35": "5nm7ZrJvFidMU9yvEyTCrWT34CUz2BNFC6NhtrRxfazvvwhQyGpQjWwFhLwMaA6TfkKdzF4M9qnfPdYeCLf7n4xQ",
  "key36": "42P6DtZihghxpwWJYwAfbBEZyAwLpk6Kdiwu7KDSWWAshj524quMbAW4t3Tbe4YXcwdvtGACjRajPLexY6HGoWKh",
  "key37": "49aD7rX5oTQFe8UeDS765mCVSu3ocMk3AxKobALkjneZqb1mhUDbGhesyw5qQHBLnimQSqugNeNGa9XxyCz7CHP4",
  "key38": "6WFFQtabHvs4eoU8NQX8nxsu9U44zfpd73HD7fiXM3L6RTR1t9V7zQ56HXQ8jTjkR5vfx2hGSMuw1FHg1V2YqRa"
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
