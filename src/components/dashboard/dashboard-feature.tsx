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
    "4G9TLk6jmUUVRiCd9PeDcCvw5sayH4G1DeuHn25RAWvrgcz3MYS84P7Pe3pKWtjasC1qfwre6QE37mjXHTqe6BCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jhrfJ2yky9WKjvLuNvdAt2Ky17jFDjLgGZ2giVvPCNT7x7fEiaQTDg2eDdQsWY9VWrC7vFnzXHhqv4Xx87v6Vgr",
  "key1": "rZarpdy8t9GsHmJ1r2gX5wwf9HpREheAxYuDF1ta3QdLFGzUAoHxuXpY19qmqMuAfBb2tHQ44zVqTiFtbdSfCd2",
  "key2": "2Sc1peDJ81cG7EYxUEHErSgwpzHAS1gGWToQ2RrV43DzKKtkD1gcfkvGV6poqnPquH1PU9eZo9nhNtEQkZTPweZY",
  "key3": "9fP25CJ6ztMLKkLkPXVC9jqrz5f1LMYwWRpDjB2VinuRtAq5YjSxFUv8HEFs4ba8jUUDqfkxqqEejNQWQo6ypei",
  "key4": "3f9Gh8o93tBtm5PxMbkay9s4rYbnWtSxwTC4sixGhujQozmeWHiSk7HWQYjbhW8hYzZ8m3ym3WQnxpCHtALMKUrG",
  "key5": "23FZzCxNRNDAt1utULRZdG78VYv4F6iQ3QhjeYiAiKUmRkMzQ5rRCeQ6JnF1ntg8KGc6Rv8rdw8ayu94EE8C2iN8",
  "key6": "7Bu65Gc59iMnoxrZsgMFoHL8w4UPjjZJ2W6sATyDimi4BgTEaXBpCMRo7aAS35fEMgCqSRW51zhNGor6ogV2wE4",
  "key7": "qvUrroYS32Fu7bncqVjMiMA4nrc8GsaiThc5tNHf6jw5wt1TKu78A5FHymG2pBGoKrTZKaovwwwVuP6zPNzSQhc",
  "key8": "4U4ZNME2pRoH5dbu36QK73UEcAn7dwb4W8UUAAeDaAuCJ1jKCDpM4nYBAn6nnDXsmV6YxC8wsu89TQtXt32LNkEs",
  "key9": "39pQpdbXq7GSqM9qseBFJJ61Kv4hfr94eqVn8J2rdw26scKicy7dSBmdV6mJjtcaQfTPLBfDTZUE4h9VwpcMiRBS",
  "key10": "4VT3svc71qRY9rxGCWMi6bWtRRv3ZuSGTqSDeMvixopDsDUN1khaapwRdcgNudLqBEw22bUcLcUM7G2kwRiBGzcE",
  "key11": "D96MhPYMtafySf19eAyY3jXg1dVjHm8yVu14zYtemh8iZhVn7HXVuPSqx7DXawFiFVUMupQ9x3xi12aHHYef9Au",
  "key12": "2JEbXAhkePL53QTzC8gghn53mp3jMY4y1QGVmrswMUdCz9Wvs1nHb6fnoNwxUw6Q9nW2ziQ3MvmKrB5zcntb59NP",
  "key13": "djNKvsFEtfT5iP9cZfkYAL46KKtWAR7LwVLDNmKEkcJF43kzzAtmGj1TmQUnP1vNwTeZGfW7yPZsGqqASWDt3nL",
  "key14": "oFCVC56NW8fFYS57on1KsLbFLJS4GLoob24xZrSD3VjdAm389G4nW38WG2sFA5m4SMGk3J44iBQQ3P7DX2AEpfS",
  "key15": "5ZYzHV4BJWjCB7qPQRMDVBKrdEbEAhkUNeiY3ZbtaUyou58sBXwtQQj5c7GSPRpharPssHjCB2Tnzj2vmZHeZkuv",
  "key16": "5zrYFmJYo1oxCuHN5YAYimjhjV6C85JEsGJaMQRrAbpdKmuyLnrt5YSGEGQTvmRFzbrjdpy2U3Rwkp9UC85iGoiJ",
  "key17": "445Ep1qM9cwmckiyEE2Jc7EK9DgoCnr4zHpnVtUfEWzNsKDJyYVtUXumv6BgkEsznhE1cHdqSEwrJsC4MiMv79KA",
  "key18": "2ykXS6xhprhG1iyGpaqw2MM5LaEsFEZCR9TdrKFGT3xyUBzxn7teh8FTJS3vTMoaUhzVjGn3Qqv3ShFaywf4Pa79",
  "key19": "3DEq89Zze7KGLb1PsYdee4o4CyguJmWq9oEsNGXv2zNGCeG9caCn5BPy92fDFwre5UjRv4yBpEPgSkXf4bq8ogo4",
  "key20": "AWCgzgTTtK4iSvb4oYuP6MNnEvAdurSn7sutsQZxEdUkatVHoYNhdzKGd1i4zpzHfYfMzsXjM4TZi1ioSwgGfdS",
  "key21": "48ZWLcdDL1c5Znydnqb3rtVqf6e3J6CjiVHrsjB4qFFSu9BH5H6z2hkJjp1P5EvJsXij6WNgPpSNkruYcxEZKAAj",
  "key22": "4fjq1qgE579E4GiPrJJXCo5Ny4YDPSa39KAvwV9TNfsTFKZkWuewAwP3UE6xKfVhwHSaYdiprQFNBxYrSNVa558Q",
  "key23": "ZGcPNTvEj86CphcPCKHnadEHirSAjzShN6hJPP4cUfGes24PgFtBZ6RugQGMRFzQJfpjSm55bNu5byuzJMQXaPX",
  "key24": "4NDtwYj3aq7SkaFjwe45agXzia6f21ov433vX7eVWeFWTppV2z67bzrV15S7acxvcaWowFbyLscJAXkr2J7AhM7s",
  "key25": "65sKySizKtVeV9thb7ZvzebS4QUUEF5gFo4wSELWPrmVvVaJLpHEubD3yaAT8Xaqnbkyev8J7YtSZDKUwc9jehuK",
  "key26": "cgiU2speMjmRTsthM9y5ChkkkU4qSLUFRTgWYzvrQECZDo6bDRirT9MvfAkVwJFdhknnjewqETvBiz3LAanfLQy",
  "key27": "66tNM42D1YMe86SCg7W1q7Du5LB1sgHMDdjrhKyq4KACt6o268GRr8QggQ9i8Q1fV3aQhAxrXozP6KrV3jokmPSt",
  "key28": "2jpHDuDftEeRgauMmGCoWV9jT6z86YmWGCbfGdKeQjYjjpAZAcE16H71Hn7WFyNSVDgaFbJULrWvfbufKxyZ3ZoL",
  "key29": "5Bw67nwXhi1eDTo6DsuqkdEZJtASuVcnC344PELkSVJ7AkcbLAWLydFfiQKABJW8wv6PUSVRkV6fQXwqLfWAJ7mG",
  "key30": "4hwofUWDLpDwpiRHYzBD5XpwhSWsjYbEBgLxAG9zs6s4RRFh2M8Y2sKBp9kEeVi7hLm2mdorsmxSVcEgzBxUWm5B"
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
