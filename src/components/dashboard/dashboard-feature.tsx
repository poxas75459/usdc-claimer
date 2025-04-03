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
    "21MezxgoUmCQ6UVZQgy6Jmp6B64GSvhwFoCy8XHrosxbHpuZG5g9V35W3NC7K6zT1TvfBtYxsnTatLiFXKhj87XP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GTCDX2PiqwL5g4p7ahCi9vAvxnMQdZvETQyJFKessKH964LfQ1C6dokm2EJb33GfMnNJDZTdAGYFPXzc1FS9Qmn",
  "key1": "pk5eGz6hmovPK4Ygq3zD26rEdgHRP2PYc4QkVcv3BK9MtMQ4Xb5Nk2bAYJMcJopFxYkUf8QNd1HwVH4EBhfrAS8",
  "key2": "5DbbQ4edb2QTB8xoGZPqxunkAjhH5GHeXKbUVCLHheB1KJSQEVVchwMQJ4amBrJyMWLtLZyAFyxTKvQAUVya6fN2",
  "key3": "2W6h49N9jqecwcR8SYCLBQkFK1EXouQnTdhNavcG8SBoBzTGcbqbzj52zfQm6ifxwrHPDXq4b9Pxbtjrhok9y9jq",
  "key4": "21Y2Vn1PyjEkTAgU51hjiUPcGLejipwy3Tn1EgR1hCveBe4cxeZGiH6DNj9NJcTTADc9Vx7ATJFVCUV3biXjSG5X",
  "key5": "3pWffA1txdAMaZkLHoFhFKk4jW1yuRJdZcqkmBjYTKRnFFoJPjuX8UtHU5kThGDoTLYh1ZCphKmuwkD8NvYSwzJL",
  "key6": "67nBsgqoNgfKHHDXMj1npNgzYJ3RZsj7zR8KbNAZes8M24URRuDjkzQauzoJ2BeddVK8dU8AyVw6nwgRvkdes5kj",
  "key7": "4EruP2AqydrBwYxqBSGmRRXS8YtrKb6wSM3btZYREhT1idTXVzNf8rktjeRVt8QPF8M6AEzqSMQQSpxTQ1kda7Cz",
  "key8": "4qmrya4vsDNhgP2oA9yEHGd2p1ArZSXz6E1U4pXGZjCnjRwJ389H8brzsdBkRVQnZu7iTvNA49NwRQ7oxBfBxqe5",
  "key9": "3totanXonjhQQf6hDRUJ5ddBbb3hemNd5gSUPuGVkeWuHnPh5sVEqPbU1WPPMoZ62uCKsjdwn69KuKL8qRHin7eW",
  "key10": "4ZsJ8PzPzkkjYB6roaRnpqHdUY6FANyd2M4SvwqoaXQLXTq3f4UKY6CWEd8vGMcbChp4rBL5XxJGeSBSJWAvC7cZ",
  "key11": "2ekETKgcjHY2h4YFfRKFsjmZzXVybtZerc3ZqTmNYPT22PskERQdttD2o3JkUyvC2CA4CWKHt481RwYA5e7N1ZKc",
  "key12": "2Kr4NUqB4r28vFjSVPsrPri2tCzvjwkSxrYzfwacc6KLt28odJUyF6YynrG1HBxpeHTkMKaQaf2mjuec6oA9SYjd",
  "key13": "5Wo15pnnMPQYss9wKkhdzBXxSVytoKXHR4jF1srjGgCvCvh7bhgfdq64xMpDn3B5PZbyBiJ7nDND9apXKMkFdU1w",
  "key14": "4bsbaNzkxHRdXggNrpmokin2Zt8qUwQiNR2dGEYUvuFhuAYf2gvTUEFvrjfoeSX6R4yDMTzAeD9imvcRr3Mdz24X",
  "key15": "3fdvhnpsNr6BTHnWqB8wABXauv758G89hKsAevQZAuV3Midzxp2T6DAbh2vAA4R11ZGfNLUDW8k62oXVQ2hRo6e1",
  "key16": "5aLzs5hjfC95rkDy31adT8erbLWq9p1DMsYQ3yY1sHZAkhow5RJG7xYZwx2y9JjTLipNuLpNu4WDTdnKoWr6vPws",
  "key17": "4ewVawXwt2D6xjCqWq2ue4cuyLNsbNqHJRTGMpb4B1ceSscYX941pnAttAuETAZyfXgLB6CnX5nnetEoh67wKg5d",
  "key18": "5MhJjSKZ6UWhjgj94Wd5vtmNbAr1ZDDL8C1dLDS753dpTJ66PA6uyKGsBK6xgoiX1GnxyHRRwvNenEwAV7GakkRw",
  "key19": "5hfWgWtnZKJXmiHwAE4Dm6Y5NmrfU63WxuPvnJKXNF5j4gwqjs2TvQgXhnJkAUTRM5pZQu2YhwgWs3BtJWiJK3S5",
  "key20": "319KtVrHjnxvPhaKmPkzJHCkav1wXvyHyu9znQPiWrxiTkd7ciFFxaGzukfbBpvCApcHd2q2b1uim5cofMfr4J2H",
  "key21": "5Xz7xUGEKNYyCGNMehQZQeG1KFcWb3czgwekMqetFYqpXzJCd1RBPU6ndAjrJwvDbojkS8fuJ1Uy4X6uHcDtaoPm",
  "key22": "3qcmumsbtHRBsWy9wA69Qjm6mS9FD9KVRo3r9QG3KNYYiqSUCQiMzS3sB7n1ztKZXUb2F9FyDj9neKYfANPjCSiM",
  "key23": "3S1AppDY9TvjV673hAaziwaj67z1ZnysZegAQrnS34yE2LikvfqiG6kixhdCWbtANLM5FMSXaj9awBZ3276Pt6qz",
  "key24": "61PQ6k9oG2WdGk5JFu8etouKdAzDsz7hYnuA9pR15jCWckVvPpihN3hJxpmsEkEQ4BPPtugKhsnMim8U99fJhuzg",
  "key25": "5hRSnRtfu74cFhNjPBE346UXNUAnFRoJLDMUjWq6JV6jkqNar6Ky58sUqCYWEmw46mDGWSTaE8jwWqkx7uuQz5j5",
  "key26": "5im1o83p5HqggC3HnxbXuoWwhH7puSyfM9zG9zYh1rJZXQVJAAaKY6iJCemRh9DRcbVVLgwmB1aBsfGnzeXfzb4a",
  "key27": "4EUL1dm9nxHdNGzzMyspZvKaJsyVHpve9F8pqKAPTtcHyWZwqmwHxQhn4uFSUPBWa4H3ahzpZp3iAMy886kXpvmo",
  "key28": "6fYv435KtErTN6ASgpqyzuxKff1smNRnH1P97Ffjibhhi2hrXRKhdwafXtfRddQwe3dGRKEEroop314Xbyxreez",
  "key29": "4j3LHE5mMHb9L4GHW2dngRJ3Dr7Ls44KMAyLMPu12GADFZjPAfbxQ6UDdR5SCkn1CF6QXeCKvwe2hsEMnyzR9AFy",
  "key30": "5CmKjNMaHMN2qU3rTPfqZ6q52uz1bPJA2VfVKJBCEEJdM3QyhxRRYz6TyBHKQwcmRzYTbZpKojwyrheFVhP6Sx65",
  "key31": "4UooQjTzcmhDNVZpwipi3pCinNUx28W6zgevPLeZHZeQZ9651zhx45a5poWSaf2Stj2GJc1WkDBLCaNDJZSBWTWz",
  "key32": "55xsGJoYWwrfdN5QseYeXueFVxB92KJ9fWWYR33WJqVbNVr15oifzQG1fMttRy2PRX9AvcThg624ts76sjWVcex",
  "key33": "5BXfoBDZBpfMeXypoe7PUfYrjKVVmcEXsThDB3uoJnU4UiRhjiGudgTQwNDvdnnDwUaBu5euogrP4AgkMBEiwUNb",
  "key34": "bqqpiaNv57BX1ejpVdKf3XYmkNsQD5pXqbkRgAees4dwfxc9PFPvWyBKFvaPPfrNwmC9oDmQbK4onR5CgyKEwS1",
  "key35": "5LWBobvRSsScyDsBDZCxR1qkNcqjBVVX9UqkKiWUMfZ7Ro3W6qQaV4oxKNkq6tPmKuQiKGR37E1EG7Bfwb8umobQ",
  "key36": "9zNiJXDsjc1guJgm7nWExJKSJann44Py5f7FBCzXksT847Wqi7yTqxSjx91G9YFbFDs5EoN9mfzDunSXu1x4ctQ",
  "key37": "4388SfiaNhMGuXEh1WkidCaMtzso1LdsmFmcG5dEFZwqct6G9G1uKAmzoKp3bEdERHBQ6qNDn8SeyoXnHwb1KqAn",
  "key38": "2zKzqPup9H37sgJc3EQTHEgQSPbgBx7JP3JxCYza4u54pbpgkEXErY3216UXyVzbpwBejoa6XPwwcPLYvpToe19Y",
  "key39": "36KPoMuC1nbKnSaGSFVWiD8wXqL8GZZZw6WEtpGntSSTJmqfmqYYbTJoPbvJEqirBBdhcbqZqryqkk8rYrgSkHgT",
  "key40": "2hAvtJP2nBY4c3CB5FP4qpttHK4e71xEgazUTvt8wWn9bdZ394jDWZW3pEAmA4NptCM1dgZ5jV8U1VN8BPeKNcU",
  "key41": "629W4ho17SFC2mY9bHB5GsYxYQb6ocSXv3ERp8XecB9Tw8StnGvZThcrNMjhjwb54QzXbcK8NtkaqEXgppqz8SEK",
  "key42": "5grJz3M5MtJ8aKDhqu4iLJ7KMK5Z5H4eW3Vvv5bbZv6XvSeSBBavS74v4gw8qfMft5wJqvsTJydewaGh7RvExik6",
  "key43": "cZURUywuzJaLnpkaxxVuR2EtdhAw24QDVR9y7y8P65N3V8YMR1oSQnaCaTtapGxgwrSEejUKprG9VkQp3TWM7jW",
  "key44": "5VvDo2dD6DYB43TR1UhGgCv4dAx2ZUnqBXHb6p5FBQHwg2gDPd61y54W7Q1z36hxN4RpLBGfHD5PGR3v4eLdH3o8",
  "key45": "5gVHxEyzKgqAte9VPK6CAVyfHFzQVwLKWouzx2vcm1ey8wk6w75ZktXc3zJwg9NHpbreeW4vG7fbcQi28M68ygqF",
  "key46": "5BFGpPHLadW9pRweK4rmPsNFUX9Foubrm2WFp3jSWS12iwDrkrmsQmiPG3WRbWYPoPESBzFi2Vvokim9DC6ezYV",
  "key47": "3966XbGLX9RcM5qgpk2xWumA68sJUPokAqPDzFHivfjm4sjmtJJFrxPgXFHRvKJ6naqLSnek3SmLMHZWA7rdvP5w",
  "key48": "2UGtow1jV14r9cvQZ48tdJviMaXECG19KdULZJotx7NXz6hCh6n2FNUD7ncmEfG8inXFNchkBNrjHEUsekw4bsDe"
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
